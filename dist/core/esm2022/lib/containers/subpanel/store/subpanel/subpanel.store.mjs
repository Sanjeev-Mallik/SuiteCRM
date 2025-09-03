/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2021 SalesAgility Ltd.
 *
 * This program is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License version 3 as published by the
 * Free Software Foundation with the addition of the following permission added
 * to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK
 * IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE
 * WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * In accordance with Section 7(b) of the GNU Affero General Public License
 * version 3, these Appropriate Legal Notices must retain the display of the
 * "Supercharged by SuiteCRM" logo. If the display of the logos is not reasonably
 * feasible for technical reasons, the Appropriate Legal Notices must display
 * the words "Supercharged by SuiteCRM".
 */
import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, forkJoin } from 'rxjs';
import { RecordListStoreFactory } from '../../../../store/record-list/record-list.store.factory';
import { LanguageStore } from '../../../../store/language/language.store';
import { deepClone } from '../../../../common/utils/object-utils';
import { SingleValueStatisticsStoreFactory } from '../../../../store/single-value-statistics/single-value-statistics.store.factory';
import { FilterListStoreFactory } from "../../../../store/saved-filters/filter-list.store.factory";
import { map, take, tap } from "rxjs/operators";
import { MetadataStore } from "../../../../store/metadata/metadata.store.service";
import { UserPreferenceStore } from "../../../../store/user-preference/user-preference.store";
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/record-list/record-list.store.factory";
import * as i2 from "../../../../store/language/language.store";
import * as i3 from "../../../../store/single-value-statistics/single-value-statistics.store.factory";
import * as i4 from "../../../../store/saved-filters/filter-list.store.factory";
import * as i5 from "../../../../store/metadata/metadata.store.service";
import * as i6 from "../../../../store/user-preference/user-preference.store";
export class SubpanelStore {
    constructor(listStoreFactory, languageStore, statisticsStoreFactory, filterListStoreFactory, meta, preferences) {
        this.listStoreFactory = listStoreFactory;
        this.languageStore = languageStore;
        this.statisticsStoreFactory = statisticsStoreFactory;
        this.filterListStoreFactory = filterListStoreFactory;
        this.meta = meta;
        this.preferences = preferences;
        this.show = false;
        this.panelCollapseMode = signal('closable');
        this.showFilter = signal(false);
        this.filterApplied = false;
        this.preferenceKey = null;
        this.subs = [];
        this.recordList = listStoreFactory.create();
        this.filterList = this.filterListStoreFactory.create();
        this.criteria$ = this.recordList.criteria$;
        this.statistics = {};
        this.metadataState = new BehaviorSubject({});
        this.metadata$ = this.metadataState.asObservable();
        this.loading$ = this.recordList.loading$;
    }
    getTitle() {
        let label = this.languageStore.getFieldLabel(this.metadata.title_key, this.parentModule);
        if (!label) {
            const moduleList = this.languageStore.getAppListString('moduleList');
            label = (moduleList && moduleList[this.metadata.title_key]) || '';
        }
        return label;
    }
    getIcon() {
        return this.metadata.icon;
    }
    clear() {
        this.metadataState.unsubscribe();
        this.metadataState = null;
        this.recordList.clear();
        this.recordList = null;
        this.subs.forEach(sub => sub.unsubscribe());
    }
    clearAuthBased() {
        this.recordList.clearAuthBased();
    }
    searchFilter() {
        this.filterApplied = true;
        this.showFilter.set(false);
    }
    /**
     * Initial list records load if not cached and update state.
     * Returns observable to be used in resolver if needed
     *
     * @param {string} parentModule name
     * @param {string} parentId id
     * @param {object} meta to use
     * @param {object} parentRecord$ to use
     */
    init(parentModule, parentId, meta, parentRecord$ = null) {
        this.parentModule = parentModule;
        this.parentId = parentId;
        this.metadata = meta;
        this.metadataState.next(this.metadata);
        const meta$ = this.meta.getMetadata(meta.module).pipe(tap(() => {
            this.recordList.load().pipe(take(1)).subscribe();
        }));
        this.searchMetadata$ = meta$.pipe(map(meta => meta.search));
        const filter = this.initSearchCriteria(this.parentModule, this.parentId, meta);
        this.recordList.init(meta.module, false, 'list_max_entries_per_subpanel', filter);
        this.initStatistics(meta, parentModule, parentId);
        if (parentRecord$) {
            this.parentRecord$ = parentRecord$;
            this.parentRecord$.subscribe(record => this.parentRecord = record);
        }
    }
    setFilters(filters, reload = true) {
        this.recordList.setFilters(filters, reload, null);
    }
    isAnyFilterApplied() {
        return this.hasActiveFilter() || !this.areAllCurrentCriteriaFilterEmpty();
    }
    hasActiveFilter() {
        const activeFilters = this.recordList.criteria;
        if (activeFilters) {
            return false;
        }
        const filterKeys = Object.keys(activeFilters) ?? [];
        if (!filterKeys || !filterKeys.length) {
            return false;
        }
        if (filterKeys.length > 1) {
            return true;
        }
        const currentFilter = activeFilters[filterKeys[0]];
        return currentFilter.key && currentFilter.key !== '' && currentFilter.key !== 'default';
    }
    areAllCurrentCriteriaFilterEmpty() {
        return Object.keys(this.getFilters() ?? {}).every(key => this.getFilters()[key].operator === '');
    }
    getFilters() {
        return this.recordList?.criteria?.filters ?? {};
    }
    /**
     * Load / reload records using current pagination and criteria
     *
     * @param {boolean} useCache if to use cache
     * @returns {object} Observable<RecordList>
     */
    load(useCache = true) {
        return this.recordList.load(useCache);
    }
    /**
     * Get statistic store
     *
     * @param {string} key key of statistic
     * @returns {object} SingleValueStatisticsStore
     */
    getStatistic(key) {
        if (!this.statistics[key]) {
            return null;
        }
        return this.statistics[key];
    }
    resetFilters(reload = true) {
        this.recordList.resetFilters(reload);
    }
    clearFilter() {
        this.resetFilters();
        this.filterApplied = false;
        this.showFilter.set(false);
    }
    /**
     * add search criteria
     *
     * @param {string} parentModule name
     * @param {string} parentId id
     * @param {string} subpanel name
     */
    initSearchCriteria(parentModule, parentId, meta) {
        const sortOrder = meta?.sort_order ?? 'desc';
        const orderBy = meta?.sort_by ?? '';
        return {
            key: 'default',
            module: 'saved-search',
            attributes: { contents: '' },
            criteria: {
                name: 'default',
                filters: {},
                preset: {
                    type: 'subpanel',
                    params: {
                        subpanel: meta?.name,
                        parentModule,
                        parentId
                    }
                },
                sortOrder,
                orderBy
            },
        };
    }
    /**
     * Load / reload statistics
     *
     * @param {string} key of statistic
     * @param {boolean} useCache if to use cache
     * @returns {object} Observable<Statistic>
     */
    loadStatistics(key, useCache = true) {
        if (!this.statistics[key]) {
            return null;
        }
        return this.statistics[key].load(useCache);
    }
    /**
     * Load / reload all statistics
     *
     * @param {boolean} useCache if to use cache
     * @returns {object} Observable<Statistic>
     */
    loadAllStatistics(useCache = true) {
        if (!this.statistics || !Object.keys(this.statistics).length) {
            return null;
        }
        const stats$ = [];
        Object.keys(this.statistics).forEach(statisticKey => {
            if (!this.statistics[statisticKey]) {
                return;
            }
            stats$.push(this.loadStatistics(statisticKey, useCache));
        });
        return forkJoin(stats$);
    }
    /**
     * Should batch statistic
     *
     * @returns {boolean} shouldBatch
     */
    shouldBatchStatistic() {
        const metadata = this.metadata || {};
        return !(metadata.subpanelWidget && metadata.subpanelWidget.batch && metadata.subpanelWidget.batch === false);
    }
    /**
     * Set loading
     *
     * @param {string} key of statistic
     * @param {boolean} loading bool
     */
    setStatisticsLoading(key, loading) {
        if (!this.statistics[key]) {
            return;
        }
        this.statistics[key].setLoading(loading);
    }
    /**
     * Set all statistics loading
     *
     * @param {boolean} loading bool
     */
    setAllStatisticsLoading(loading) {
        if (!this.statistics || !Object.keys(this.statistics).length) {
            return;
        }
        Object.keys(this.statistics).forEach(statisticKey => {
            if (!this.statistics[statisticKey]) {
                return;
            }
            this.setStatisticsLoading(statisticKey, loading);
        });
    }
    /**
     * Set Statistic value
     *
     * @param {string} key of statistic
     * @param {object} statistic Statistic
     * @param {boolean} cache bool
     */
    setStatistics(key, statistic, cache = false) {
        if (!this.statistics[key]) {
            return;
        }
        this.statistics[key].setStatistic(key, statistic, cache);
    }
    /**
     * Get statistic query
     *
     * @param {string} key of statistic
     * @returns {object} StatisticsQuery
     */
    getStatisticQuery(key) {
        return this.statistics[key].getQuery();
    }
    /**
     * Get all statistics queries
     *
     * @returns {object} StatisticsQuery
     */
    getAllStatisticQuery() {
        if (!this.statistics || !Object.keys(this.statistics).length) {
            return {};
        }
        const queriesMap = {};
        Object.keys(this.statistics).forEach(statisticKey => {
            if (!this.statistics[statisticKey]) {
                return;
            }
            queriesMap[statisticKey] = this.getStatisticQuery(statisticKey);
        });
        return queriesMap;
    }
    /**
     * Get widget layout
     *
     * @returns {any} any
     */
    getWidgetLayout() {
        const meta = this.metadata;
        if (!meta || !meta.subpanelWidget || !meta.subpanelWidget.options || !meta.subpanelWidget.options.subpanelWidget) {
            return { rows: [] };
        }
        const layout = deepClone(meta.subpanelWidget.options.subpanelWidget);
        if (!layout.rows || !layout.rows.length) {
            layout.rows = {};
        }
        return layout;
    }
    toggleFilter() {
        this.showFilter.set(!this.showFilter());
        return this.showFilter();
    }
    /**
     * Init statistics store
     *
     * @param {object} meta for subpanel
     * @param {string} parentModule name
     * @param {string} parentId {id}
     */
    initStatistics(meta, parentModule, parentId) {
        const layout = this.getWidgetLayout();
        layout.rows.forEach(row => {
            if (!row.cols || !row.cols.length) {
                return;
            }
            row.cols.forEach(col => {
                if (!col.statistic || typeof col.statistic !== 'string') {
                    return;
                }
                this.initStatistic(col.statistic, meta, parentModule, parentId);
                col.store = this.statistics[col.statistic];
            });
        });
    }
    /**
     * Init a single value statistic
     *
     * @param {string} statisticKey to use
     * @param {object} meta SubPanelDefinition
     * @param {string} parentModule to use
     * @param {string} parentId to use
     */
    initStatistic(statisticKey, meta, parentModule, parentId) {
        this.statistics[statisticKey] = this.statisticsStoreFactory.create();
        this.statistics[statisticKey].init(meta.module, {
            key: statisticKey,
            context: { module: parentModule, id: parentId },
            params: { subpanel: meta.name }
        }, false);
    }
    static { this.ɵfac = function SubpanelStore_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SubpanelStore)(i0.ɵɵinject(i1.RecordListStoreFactory), i0.ɵɵinject(i2.LanguageStore), i0.ɵɵinject(i3.SingleValueStatisticsStoreFactory), i0.ɵɵinject(i4.FilterListStoreFactory), i0.ɵɵinject(i5.MetadataStore), i0.ɵɵinject(i6.UserPreferenceStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SubpanelStore, factory: SubpanelStore.ɵfac }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SubpanelStore, [{
        type: Injectable
    }], () => [{ type: i1.RecordListStoreFactory }, { type: i2.LanguageStore }, { type: i3.SingleValueStatisticsStoreFactory }, { type: i4.FilterListStoreFactory }, { type: i5.MetadataStore }, { type: i6.UserPreferenceStore }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VicGFuZWwuc3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9zdWJwYW5lbC9zdG9yZS9zdWJwYW5lbC9zdWJwYW5lbC5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBR2pFLE9BQU8sRUFBQyxlQUFlLEVBQUUsUUFBUSxFQUEyQixNQUFNLE1BQU0sQ0FBQztBQUN6RSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSx5REFBeUQsQ0FBQztBQUMvRixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDeEUsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBUWhFLE9BQU8sRUFDSCxpQ0FBaUMsRUFDcEMsTUFBTSxpRkFBaUYsQ0FBQztBQUV6RixPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSwyREFBMkQsQ0FBQztBQUNqRyxPQUFPLEVBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sbURBQW1ELENBQUM7QUFFaEYsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0seURBQXlELENBQUM7Ozs7Ozs7O0FBWTVGLE1BQU0sT0FBTyxhQUFhO0lBNEJ0QixZQUNjLGdCQUF3QyxFQUN4QyxhQUE0QixFQUM1QixzQkFBeUQsRUFDekQsc0JBQThDLEVBQzlDLElBQW1CLEVBQ25CLFdBQWdDO1FBTGhDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBd0I7UUFDeEMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUFt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RSxJQUF3QixFQUFFLFlBQW9CLEVBQUUsUUFBZ0I7UUFDMUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFckUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQzlCLElBQUksQ0FBQyxNQUFNLEVBQ1g7WUFDSSxHQUFHLEVBQUUsWUFBWTtZQUNqQixPQUFPLEVBQUUsRUFBQyxNQUFNLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUM7WUFDN0MsTUFBTSxFQUFFLEVBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUM7U0FDYixFQUNwQixLQUFLLENBQ1IsQ0FBQztJQUNOLENBQUM7OEdBcGFRLGFBQWE7dUVBQWIsYUFBYSxXQUFiLGFBQWE7O2lGQUFiLGFBQWE7Y0FEekIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlLCBzaWduYWwsIFdyaXRhYmxlU2lnbmFsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U3RhdGVTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvc3RhdGUnO1xuaW1wb3J0IHtSZWNvcmRMaXN0LCBSZWNvcmRMaXN0U3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3JlY29yZC1saXN0L3JlY29yZC1saXN0LnN0b3JlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBmb3JrSm9pbiwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7UmVjb3JkTGlzdFN0b3JlRmFjdG9yeX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvcmVjb3JkLWxpc3QvcmVjb3JkLWxpc3Quc3RvcmUuZmFjdG9yeSc7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7ZGVlcENsb25lfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vdXRpbHMvb2JqZWN0LXV0aWxzJztcbmltcG9ydCB7UmVjb3JkfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vcmVjb3JkL3JlY29yZC5tb2RlbCc7XG5pbXBvcnQge1NlYXJjaENyaXRlcmlhLCBTZWFyY2hDcml0ZXJpYUZpbHRlcn0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3ZpZXdzL2xpc3Qvc2VhcmNoLWNyaXRlcmlhLm1vZGVsJztcbmltcG9ydCB7Q29sdW1uRGVmaW5pdGlvbiwgU2VhcmNoTWV0YSwgUmVjb3JkTGlzdE1ldGF9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9tZXRhZGF0YS9saXN0Lm1ldGFkYXRhLm1vZGVsJztcbmltcG9ydCB7U3RhdGlzdGljLCBTdGF0aXN0aWNzUXVlcnksIFN0YXRpc3RpY3NRdWVyeU1hcH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3N0YXRpc3RpY3Mvc3RhdGlzdGljcy5tb2RlbCc7XG5pbXBvcnQge1N0YXRpc3RpY1dpZGdldE9wdGlvbnN9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9tZXRhZGF0YS93aWRnZXQubWV0YWRhdGEnO1xuaW1wb3J0IHtTdWJQYW5lbERlZmluaXRpb259IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9tZXRhZGF0YS9zdWJwYW5lbC5tZXRhZGF0YS5tb2RlbCc7XG5pbXBvcnQge1NpbmdsZVZhbHVlU3RhdGlzdGljc1N0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9zaW5nbGUtdmFsdWUtc3RhdGlzdGljcy9zaW5nbGUtdmFsdWUtc3RhdGlzdGljcy5zdG9yZSc7XG5pbXBvcnQge1xuICAgIFNpbmdsZVZhbHVlU3RhdGlzdGljc1N0b3JlRmFjdG9yeVxufSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9zaW5nbGUtdmFsdWUtc3RhdGlzdGljcy9zaW5nbGUtdmFsdWUtc3RhdGlzdGljcy5zdG9yZS5mYWN0b3J5JztcbmltcG9ydCB7RmlsdGVyTGlzdFN0b3JlfSBmcm9tIFwiLi4vLi4vLi4vLi4vc3RvcmUvc2F2ZWQtZmlsdGVycy9maWx0ZXItbGlzdC5zdG9yZVwiO1xuaW1wb3J0IHtGaWx0ZXJMaXN0U3RvcmVGYWN0b3J5fSBmcm9tIFwiLi4vLi4vLi4vLi4vc3RvcmUvc2F2ZWQtZmlsdGVycy9maWx0ZXItbGlzdC5zdG9yZS5mYWN0b3J5XCI7XG5pbXBvcnQge21hcCwgdGFrZSwgdGFwfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7TWV0YWRhdGFTdG9yZX0gZnJvbSBcIi4uLy4uLy4uLy4uL3N0b3JlL21ldGFkYXRhL21ldGFkYXRhLnN0b3JlLnNlcnZpY2VcIjtcbmltcG9ydCB7U2F2ZWRGaWx0ZXIsIFNhdmVkRmlsdGVyTWFwfSBmcm9tIFwiLi4vLi4vLi4vLi4vc3RvcmUvc2F2ZWQtZmlsdGVycy9zYXZlZC1maWx0ZXIubW9kZWxcIjtcbmltcG9ydCB7VXNlclByZWZlcmVuY2VTdG9yZX0gZnJvbSBcIi4uLy4uLy4uLy4uL3N0b3JlL3VzZXItcHJlZmVyZW5jZS91c2VyLXByZWZlcmVuY2Uuc3RvcmVcIjtcbmltcG9ydCB7UGFuZWxDb2xsYXBzZU1vZGV9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BhbmVsL3BhbmVsLmNvbXBvbmVudFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN1YnBhbmVsU3RvcmVNYXAge1xuICAgIFtrZXk6IHN0cmluZ106IFN1YnBhbmVsU3RvcmU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2xlVmFsdWVTdGF0aXN0aWNzU3RvcmVNYXAge1xuICAgIFtrZXk6IHN0cmluZ106IFNpbmdsZVZhbHVlU3RhdGlzdGljc1N0b3JlO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3VicGFuZWxTdG9yZSBpbXBsZW1lbnRzIFN0YXRlU3RvcmUge1xuICAgIHNob3cgPSBmYWxzZTtcbiAgICBwYXJlbnRNb2R1bGU6IHN0cmluZztcbiAgICBwYXJlbnRJZDogc3RyaW5nO1xuICAgIHBhcmVudFJlY29yZCQ6IE9ic2VydmFibGU8UmVjb3JkPjtcbiAgICBwYXJlbnRSZWNvcmQ6IFJlY29yZDtcbiAgICByZWNvcmRMaXN0OiBSZWNvcmRMaXN0U3RvcmU7XG4gICAgc3RhdGlzdGljczogU2luZ2xlVmFsdWVTdGF0aXN0aWNzU3RvcmVNYXA7XG4gICAgbWV0YWRhdGEkOiBPYnNlcnZhYmxlPFN1YlBhbmVsRGVmaW5pdGlvbj47XG4gICAgbGlzdE1ldGFkYXRhJDogT2JzZXJ2YWJsZTxSZWNvcmRMaXN0TWV0YT47XG4gICAgc2VhcmNoTWV0YWRhdGEkOiBPYnNlcnZhYmxlPFNlYXJjaE1ldGE+O1xuICAgIGNvbHVtbnMkOiBPYnNlcnZhYmxlPENvbHVtbkRlZmluaXRpb25bXT47XG4gICAgbWV0YWRhdGE6IFN1YlBhbmVsRGVmaW5pdGlvbjtcbiAgICBsb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBwYW5lbENvbGxhcHNlTW9kZTogV3JpdGFibGVTaWduYWw8UGFuZWxDb2xsYXBzZU1vZGU+ID0gc2lnbmFsKCdjbG9zYWJsZScpO1xuXG4gICAgLy8gRmlsdGVyIHZhcmlhYmxlc1xuICAgIGZpbHRlckxpc3Q6IEZpbHRlckxpc3RTdG9yZTtcbiAgICBjcml0ZXJpYSQ6IE9ic2VydmFibGU8U2VhcmNoQ3JpdGVyaWE+O1xuICAgIHNob3dGaWx0ZXI6IFdyaXRhYmxlU2lnbmFsPGJvb2xlYW4+ID0gc2lnbmFsKGZhbHNlKTtcbiAgICBmaWx0ZXJBcHBsaWVkID0gZmFsc2U7XG5cbiAgICBwcmVmZXJlbmNlS2V5ID0gbnVsbDtcblxuICAgIHByb3RlY3RlZCBtZXRhZGF0YVN0YXRlOiBCZWhhdmlvclN1YmplY3Q8U3ViUGFuZWxEZWZpbml0aW9uPjtcbiAgICBwcm90ZWN0ZWQgc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBsaXN0U3RvcmVGYWN0b3J5OiBSZWNvcmRMaXN0U3RvcmVGYWN0b3J5LFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2VTdG9yZTogTGFuZ3VhZ2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIHN0YXRpc3RpY3NTdG9yZUZhY3Rvcnk6IFNpbmdsZVZhbHVlU3RhdGlzdGljc1N0b3JlRmFjdG9yeSxcbiAgICAgICAgcHJvdGVjdGVkIGZpbHRlckxpc3RTdG9yZUZhY3Rvcnk6IEZpbHRlckxpc3RTdG9yZUZhY3RvcnksXG4gICAgICAgIHByb3RlY3RlZCBtZXRhOiBNZXRhZGF0YVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgcHJlZmVyZW5jZXM6IFVzZXJQcmVmZXJlbmNlU3RvcmUsXG4gICAgKSB7XG4gICAgICAgIHRoaXMucmVjb3JkTGlzdCA9IGxpc3RTdG9yZUZhY3RvcnkuY3JlYXRlKCk7XG4gICAgICAgIHRoaXMuZmlsdGVyTGlzdCA9IHRoaXMuZmlsdGVyTGlzdFN0b3JlRmFjdG9yeS5jcmVhdGUoKTtcbiAgICAgICAgdGhpcy5jcml0ZXJpYSQgPSB0aGlzLnJlY29yZExpc3QuY3JpdGVyaWEkO1xuICAgICAgICB0aGlzLnN0YXRpc3RpY3MgPSB7fTtcbiAgICAgICAgdGhpcy5tZXRhZGF0YVN0YXRlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxTdWJQYW5lbERlZmluaXRpb24+KHt9IGFzIFN1YlBhbmVsRGVmaW5pdGlvbik7XG4gICAgICAgIHRoaXMubWV0YWRhdGEkID0gdGhpcy5tZXRhZGF0YVN0YXRlLmFzT2JzZXJ2YWJsZSgpO1xuICAgICAgICB0aGlzLmxvYWRpbmckID0gdGhpcy5yZWNvcmRMaXN0LmxvYWRpbmckO1xuICAgIH1cblxuICAgIGdldFRpdGxlKCk6IHN0cmluZyB7XG4gICAgICAgIGxldCBsYWJlbCA9IHRoaXMubGFuZ3VhZ2VTdG9yZS5nZXRGaWVsZExhYmVsKHRoaXMubWV0YWRhdGEudGl0bGVfa2V5LCB0aGlzLnBhcmVudE1vZHVsZSk7XG5cbiAgICAgICAgaWYgKCFsYWJlbCkge1xuICAgICAgICAgICAgY29uc3QgbW9kdWxlTGlzdCA9IHRoaXMubGFuZ3VhZ2VTdG9yZS5nZXRBcHBMaXN0U3RyaW5nKCdtb2R1bGVMaXN0Jyk7XG4gICAgICAgICAgICBsYWJlbCA9IChtb2R1bGVMaXN0ICYmIG1vZHVsZUxpc3RbdGhpcy5tZXRhZGF0YS50aXRsZV9rZXldKSB8fCAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9XG5cbiAgICBnZXRJY29uKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLm1ldGFkYXRhLmljb247XG4gICAgfVxuXG4gICAgY2xlYXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubWV0YWRhdGFTdGF0ZS51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLm1ldGFkYXRhU3RhdGUgPSBudWxsO1xuICAgICAgICB0aGlzLnJlY29yZExpc3QuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5yZWNvcmRMaXN0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zdWJzLmZvckVhY2goc3ViID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcbiAgICB9XG5cbiAgICBjbGVhckF1dGhCYXNlZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZWNvcmRMaXN0LmNsZWFyQXV0aEJhc2VkKCk7XG4gICAgfVxuXG4gICAgc2VhcmNoRmlsdGVyKCkge1xuICAgICAgICB0aGlzLmZpbHRlckFwcGxpZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnNob3dGaWx0ZXIuc2V0KGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsIGxpc3QgcmVjb3JkcyBsb2FkIGlmIG5vdCBjYWNoZWQgYW5kIHVwZGF0ZSBzdGF0ZS5cbiAgICAgKiBSZXR1cm5zIG9ic2VydmFibGUgdG8gYmUgdXNlZCBpbiByZXNvbHZlciBpZiBuZWVkZWRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJlbnRNb2R1bGUgbmFtZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJlbnRJZCBpZFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhIHRvIHVzZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJlbnRSZWNvcmQkIHRvIHVzZVxuICAgICAqL1xuICAgIHB1YmxpYyBpbml0KHBhcmVudE1vZHVsZTogc3RyaW5nLCBwYXJlbnRJZDogc3RyaW5nLCBtZXRhOiBTdWJQYW5lbERlZmluaXRpb24sIHBhcmVudFJlY29yZCQ6IE9ic2VydmFibGU8UmVjb3JkPiA9IG51bGwpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wYXJlbnRNb2R1bGUgPSBwYXJlbnRNb2R1bGU7XG4gICAgICAgIHRoaXMucGFyZW50SWQgPSBwYXJlbnRJZDtcbiAgICAgICAgdGhpcy5tZXRhZGF0YSA9IG1ldGE7XG4gICAgICAgIHRoaXMubWV0YWRhdGFTdGF0ZS5uZXh0KHRoaXMubWV0YWRhdGEpO1xuICAgICAgICBjb25zdCBtZXRhJCA9IHRoaXMubWV0YS5nZXRNZXRhZGF0YShtZXRhLm1vZHVsZSkucGlwZShcbiAgICAgICAgICAgIHRhcCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWNvcmRMaXN0LmxvYWQoKS5waXBlKFxuICAgICAgICAgICAgICAgICAgICB0YWtlKDEpXG4gICAgICAgICAgICAgICAgKS5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5zZWFyY2hNZXRhZGF0YSQgPSBtZXRhJC5waXBlKG1hcChtZXRhID0+IG1ldGEuc2VhcmNoKSk7XG4gICAgICAgIGNvbnN0IGZpbHRlciA9IHRoaXMuaW5pdFNlYXJjaENyaXRlcmlhKHRoaXMucGFyZW50TW9kdWxlLCB0aGlzLnBhcmVudElkLCBtZXRhKTtcbiAgICAgICAgdGhpcy5yZWNvcmRMaXN0LmluaXQobWV0YS5tb2R1bGUsIGZhbHNlLCAnbGlzdF9tYXhfZW50cmllc19wZXJfc3VicGFuZWwnLCBmaWx0ZXIpXG5cbiAgICAgICAgdGhpcy5pbml0U3RhdGlzdGljcyhtZXRhLCBwYXJlbnRNb2R1bGUsIHBhcmVudElkKTtcblxuICAgICAgICBpZiAocGFyZW50UmVjb3JkJCkge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnRSZWNvcmQkID0gcGFyZW50UmVjb3JkJDtcbiAgICAgICAgICAgIHRoaXMucGFyZW50UmVjb3JkJC5zdWJzY3JpYmUocmVjb3JkID0+IHRoaXMucGFyZW50UmVjb3JkID0gcmVjb3JkKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHVibGljIHNldEZpbHRlcnMoZmlsdGVyczogU2F2ZWRGaWx0ZXJNYXAsIHJlbG9hZCA9IHRydWUpIHtcbiAgICAgICAgdGhpcy5yZWNvcmRMaXN0LnNldEZpbHRlcnMoZmlsdGVycywgcmVsb2FkLCBudWxsKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNBbnlGaWx0ZXJBcHBsaWVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXNBY3RpdmVGaWx0ZXIoKSB8fCAhdGhpcy5hcmVBbGxDdXJyZW50Q3JpdGVyaWFGaWx0ZXJFbXB0eSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBoYXNBY3RpdmVGaWx0ZXIoKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZUZpbHRlcnMgPSB0aGlzLnJlY29yZExpc3QuY3JpdGVyaWE7XG5cbiAgICAgICAgaWYgKGFjdGl2ZUZpbHRlcnMpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZpbHRlcktleXMgPSBPYmplY3Qua2V5cyhhY3RpdmVGaWx0ZXJzKSA/PyBbXTtcblxuICAgICAgICBpZiAoIWZpbHRlcktleXMgfHwgIWZpbHRlcktleXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmlsdGVyS2V5cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRGaWx0ZXIgPSBhY3RpdmVGaWx0ZXJzW2ZpbHRlcktleXNbMF1dO1xuXG4gICAgICAgIHJldHVybiBjdXJyZW50RmlsdGVyLmtleSAmJiBjdXJyZW50RmlsdGVyLmtleSAhPT0gJycgJiYgY3VycmVudEZpbHRlci5rZXkgIT09ICdkZWZhdWx0J1xuICAgIH1cblxuICAgIHB1YmxpYyBhcmVBbGxDdXJyZW50Q3JpdGVyaWFGaWx0ZXJFbXB0eSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZ2V0RmlsdGVycygpID8/IHt9KS5ldmVyeShrZXkgPT4gdGhpcy5nZXRGaWx0ZXJzKClba2V5XS5vcGVyYXRvciA9PT0gJycpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRGaWx0ZXJzKCk6IFNlYXJjaENyaXRlcmlhRmlsdGVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVjb3JkTGlzdD8uY3JpdGVyaWE/LmZpbHRlcnMgPz8ge307XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9hZCAvIHJlbG9hZCByZWNvcmRzIHVzaW5nIGN1cnJlbnQgcGFnaW5hdGlvbiBhbmQgY3JpdGVyaWFcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gdXNlQ2FjaGUgaWYgdG8gdXNlIGNhY2hlXG4gICAgICogQHJldHVybnMge29iamVjdH0gT2JzZXJ2YWJsZTxSZWNvcmRMaXN0PlxuICAgICAqL1xuICAgIHB1YmxpYyBsb2FkKHVzZUNhY2hlID0gdHJ1ZSk6IE9ic2VydmFibGU8UmVjb3JkTGlzdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWNvcmRMaXN0LmxvYWQodXNlQ2FjaGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBzdGF0aXN0aWMgc3RvcmVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkga2V5IG9mIHN0YXRpc3RpY1xuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IFNpbmdsZVZhbHVlU3RhdGlzdGljc1N0b3JlXG4gICAgICovXG4gICAgcHVibGljIGdldFN0YXRpc3RpYyhrZXk6IHN0cmluZyk6IFNpbmdsZVZhbHVlU3RhdGlzdGljc1N0b3JlIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRpc3RpY3Nba2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0aXN0aWNzW2tleV07XG4gICAgfVxuXG4gICAgcHVibGljIHJlc2V0RmlsdGVycyhyZWxvYWQgPSB0cnVlKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVjb3JkTGlzdC5yZXNldEZpbHRlcnMocmVsb2FkKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYXJGaWx0ZXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVzZXRGaWx0ZXJzKCk7XG4gICAgICAgIHRoaXMuZmlsdGVyQXBwbGllZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNob3dGaWx0ZXIuc2V0KGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBhZGQgc2VhcmNoIGNyaXRlcmlhXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyZW50TW9kdWxlIG5hbWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyZW50SWQgaWRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3VicGFuZWwgbmFtZVxuICAgICAqL1xuICAgIGluaXRTZWFyY2hDcml0ZXJpYShwYXJlbnRNb2R1bGU6IHN0cmluZywgcGFyZW50SWQ6IHN0cmluZywgbWV0YTogU3ViUGFuZWxEZWZpbml0aW9uKSB7XG4gICAgICAgIGNvbnN0IHNvcnRPcmRlciA9IG1ldGE/LnNvcnRfb3JkZXIgPz8gJ2Rlc2MnO1xuICAgICAgICBjb25zdCBvcmRlckJ5ID0gbWV0YT8uc29ydF9ieSA/PyAnJztcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGtleTogJ2RlZmF1bHQnLFxuICAgICAgICAgICAgbW9kdWxlOiAnc2F2ZWQtc2VhcmNoJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHtjb250ZW50czogJyd9LFxuICAgICAgICAgICAgY3JpdGVyaWE6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnZGVmYXVsdCcsXG4gICAgICAgICAgICAgICAgZmlsdGVyczoge30sXG4gICAgICAgICAgICAgICAgcHJlc2V0OiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdWJwYW5lbCcsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VicGFuZWw6IG1ldGE/Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRNb2R1bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRJZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzb3J0T3JkZXIsXG4gICAgICAgICAgICAgICAgb3JkZXJCeVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSBhcyBTYXZlZEZpbHRlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkIC8gcmVsb2FkIHN0YXRpc3RpY3NcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgb2Ygc3RhdGlzdGljXG4gICAgICogQHBhcmFtIHtib29sZWFufSB1c2VDYWNoZSBpZiB0byB1c2UgY2FjaGVcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBPYnNlcnZhYmxlPFN0YXRpc3RpYz5cbiAgICAgKi9cbiAgICBwdWJsaWMgbG9hZFN0YXRpc3RpY3Moa2V5OiBzdHJpbmcsIHVzZUNhY2hlID0gdHJ1ZSk6IE9ic2VydmFibGU8U3RhdGlzdGljPiB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0aXN0aWNzW2tleV0pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGlzdGljc1trZXldLmxvYWQodXNlQ2FjaGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvYWQgLyByZWxvYWQgYWxsIHN0YXRpc3RpY3NcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gdXNlQ2FjaGUgaWYgdG8gdXNlIGNhY2hlXG4gICAgICogQHJldHVybnMge29iamVjdH0gT2JzZXJ2YWJsZTxTdGF0aXN0aWM+XG4gICAgICovXG4gICAgcHVibGljIGxvYWRBbGxTdGF0aXN0aWNzKHVzZUNhY2hlID0gdHJ1ZSk6IE9ic2VydmFibGU8U3RhdGlzdGljW10+IHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRpc3RpY3MgfHwgIU9iamVjdC5rZXlzKHRoaXMuc3RhdGlzdGljcykubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgY29uc3Qgc3RhdHMkID0gW107XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuc3RhdGlzdGljcykuZm9yRWFjaChzdGF0aXN0aWNLZXkgPT4ge1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RhdGlzdGljc1tzdGF0aXN0aWNLZXldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RhdHMkLnB1c2godGhpcy5sb2FkU3RhdGlzdGljcyhzdGF0aXN0aWNLZXksIHVzZUNhY2hlKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBmb3JrSm9pbihzdGF0cyQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3VsZCBiYXRjaCBzdGF0aXN0aWNcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSBzaG91bGRCYXRjaFxuICAgICAqL1xuICAgIHB1YmxpYyBzaG91bGRCYXRjaFN0YXRpc3RpYygpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgbWV0YWRhdGE6IFN1YlBhbmVsRGVmaW5pdGlvbiA9IHRoaXMubWV0YWRhdGEgfHwge30gYXMgU3ViUGFuZWxEZWZpbml0aW9uO1xuICAgICAgICByZXR1cm4gIShtZXRhZGF0YS5zdWJwYW5lbFdpZGdldCAmJiBtZXRhZGF0YS5zdWJwYW5lbFdpZGdldC5iYXRjaCAmJiBtZXRhZGF0YS5zdWJwYW5lbFdpZGdldC5iYXRjaCA9PT0gZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBsb2FkaW5nXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IG9mIHN0YXRpc3RpY1xuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbG9hZGluZyBib29sXG4gICAgICovXG4gICAgcHVibGljIHNldFN0YXRpc3RpY3NMb2FkaW5nKGtleTogc3RyaW5nLCBsb2FkaW5nOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0aXN0aWNzW2tleV0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0YXRpc3RpY3Nba2V5XS5zZXRMb2FkaW5nKGxvYWRpbmcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBhbGwgc3RhdGlzdGljcyBsb2FkaW5nXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGxvYWRpbmcgYm9vbFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRBbGxTdGF0aXN0aWNzTG9hZGluZyhsb2FkaW5nOiBib29sZWFuKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKCF0aGlzLnN0YXRpc3RpY3MgfHwgIU9iamVjdC5rZXlzKHRoaXMuc3RhdGlzdGljcykubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnN0YXRpc3RpY3MpLmZvckVhY2goc3RhdGlzdGljS2V5ID0+IHtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRpc3RpY3Nbc3RhdGlzdGljS2V5XSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGlzdGljc0xvYWRpbmcoc3RhdGlzdGljS2V5LCBsb2FkaW5nKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IFN0YXRpc3RpYyB2YWx1ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBvZiBzdGF0aXN0aWNcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gc3RhdGlzdGljIFN0YXRpc3RpY1xuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gY2FjaGUgYm9vbFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRTdGF0aXN0aWNzKGtleTogc3RyaW5nLCBzdGF0aXN0aWM6IFN0YXRpc3RpYywgY2FjaGUgPSBmYWxzZSk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGlzdGljc1trZXldKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGF0aXN0aWNzW2tleV0uc2V0U3RhdGlzdGljKGtleSwgc3RhdGlzdGljLCBjYWNoZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHN0YXRpc3RpYyBxdWVyeVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBvZiBzdGF0aXN0aWNcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBTdGF0aXN0aWNzUXVlcnlcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0U3RhdGlzdGljUXVlcnkoa2V5OiBzdHJpbmcpOiBTdGF0aXN0aWNzUXVlcnkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0aXN0aWNzW2tleV0uZ2V0UXVlcnkoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYWxsIHN0YXRpc3RpY3MgcXVlcmllc1xuICAgICAqXG4gICAgICogQHJldHVybnMge29iamVjdH0gU3RhdGlzdGljc1F1ZXJ5XG4gICAgICovXG4gICAgcHVibGljIGdldEFsbFN0YXRpc3RpY1F1ZXJ5KCk6IFN0YXRpc3RpY3NRdWVyeU1hcCB7XG5cbiAgICAgICAgaWYgKCF0aGlzLnN0YXRpc3RpY3MgfHwgIU9iamVjdC5rZXlzKHRoaXMuc3RhdGlzdGljcykubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBxdWVyaWVzTWFwID0ge307XG5cbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5zdGF0aXN0aWNzKS5mb3JFYWNoKHN0YXRpc3RpY0tleSA9PiB7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5zdGF0aXN0aWNzW3N0YXRpc3RpY0tleV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBxdWVyaWVzTWFwW3N0YXRpc3RpY0tleV0gPSB0aGlzLmdldFN0YXRpc3RpY1F1ZXJ5KHN0YXRpc3RpY0tleSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBxdWVyaWVzTWFwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB3aWRnZXQgbGF5b3V0XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7YW55fSBhbnlcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0V2lkZ2V0TGF5b3V0KCk6IFN0YXRpc3RpY1dpZGdldE9wdGlvbnMge1xuXG4gICAgICAgIGNvbnN0IG1ldGEgPSB0aGlzLm1ldGFkYXRhO1xuICAgICAgICBpZiAoIW1ldGEgfHwgIW1ldGEuc3VicGFuZWxXaWRnZXQgfHwgIW1ldGEuc3VicGFuZWxXaWRnZXQub3B0aW9ucyB8fCAhbWV0YS5zdWJwYW5lbFdpZGdldC5vcHRpb25zLnN1YnBhbmVsV2lkZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm4ge3Jvd3M6IFtdfSBhcyBTdGF0aXN0aWNXaWRnZXRPcHRpb25zO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbGF5b3V0ID0gZGVlcENsb25lKG1ldGEuc3VicGFuZWxXaWRnZXQub3B0aW9ucy5zdWJwYW5lbFdpZGdldCk7XG5cbiAgICAgICAgaWYgKCFsYXlvdXQucm93cyB8fCAhbGF5b3V0LnJvd3MubGVuZ3RoKSB7XG4gICAgICAgICAgICBsYXlvdXQucm93cyA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxheW91dDtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlRmlsdGVyKCk6IGJvb2xlYW4ge1xuICAgICAgICB0aGlzLnNob3dGaWx0ZXIuc2V0KCF0aGlzLnNob3dGaWx0ZXIoKSk7XG4gICAgICAgIHJldHVybiB0aGlzLnNob3dGaWx0ZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0IHN0YXRpc3RpY3Mgc3RvcmVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhIGZvciBzdWJwYW5lbFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJlbnRNb2R1bGUgbmFtZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJlbnRJZCB7aWR9XG4gICAgICovXG4gICAgcHJvdGVjdGVkIGluaXRTdGF0aXN0aWNzKG1ldGE6IFN1YlBhbmVsRGVmaW5pdGlvbiwgcGFyZW50TW9kdWxlOiBzdHJpbmcsIHBhcmVudElkOiBzdHJpbmcpOiB2b2lkIHtcblxuICAgICAgICBjb25zdCBsYXlvdXQgPSB0aGlzLmdldFdpZGdldExheW91dCgpO1xuXG4gICAgICAgIGxheW91dC5yb3dzLmZvckVhY2gocm93ID0+IHtcblxuICAgICAgICAgICAgaWYgKCFyb3cuY29scyB8fCAhcm93LmNvbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByb3cuY29scy5mb3JFYWNoKGNvbCA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWNvbC5zdGF0aXN0aWMgfHwgdHlwZW9mIGNvbC5zdGF0aXN0aWMgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmluaXRTdGF0aXN0aWMoY29sLnN0YXRpc3RpYywgbWV0YSwgcGFyZW50TW9kdWxlLCBwYXJlbnRJZCk7XG4gICAgICAgICAgICAgICAgY29sLnN0b3JlID0gdGhpcy5zdGF0aXN0aWNzW2NvbC5zdGF0aXN0aWNdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXQgYSBzaW5nbGUgdmFsdWUgc3RhdGlzdGljXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RhdGlzdGljS2V5IHRvIHVzZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhIFN1YlBhbmVsRGVmaW5pdGlvblxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJlbnRNb2R1bGUgdG8gdXNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmVudElkIHRvIHVzZVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBpbml0U3RhdGlzdGljKHN0YXRpc3RpY0tleTogc3RyaW5nLCBtZXRhOiBTdWJQYW5lbERlZmluaXRpb24sIHBhcmVudE1vZHVsZTogc3RyaW5nLCBwYXJlbnRJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RhdGlzdGljc1tzdGF0aXN0aWNLZXldID0gdGhpcy5zdGF0aXN0aWNzU3RvcmVGYWN0b3J5LmNyZWF0ZSgpO1xuXG4gICAgICAgIHRoaXMuc3RhdGlzdGljc1tzdGF0aXN0aWNLZXldLmluaXQoXG4gICAgICAgICAgICBtZXRhLm1vZHVsZSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IHN0YXRpc3RpY0tleSxcbiAgICAgICAgICAgICAgICBjb250ZXh0OiB7bW9kdWxlOiBwYXJlbnRNb2R1bGUsIGlkOiBwYXJlbnRJZH0sXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7c3VicGFuZWw6IG1ldGEubmFtZX1cbiAgICAgICAgICAgIH0gYXMgU3RhdGlzdGljc1F1ZXJ5LFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=