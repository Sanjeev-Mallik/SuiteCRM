/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2024 SalesAgility Ltd.
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
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from "rxjs";
import { distinctUntilChanged, map, shareReplay } from "rxjs/operators";
import { isArray, union } from "lodash-es";
import { SystemConfigStore } from "../../../../store/system-config/system-config.store";
import { UserPreferenceStore } from "../../../../store/user-preference/user-preference.store";
import { RecordListStoreFactory } from "../../../../store/record-list/record-list.store.factory";
import { LocalStorageService } from "../../../../services/local-storage/local-storage.service";
import { RecordPaginationService } from "./record-pagination.service";
import { deepClone, emptyObject } from "../../../../common/utils/object-utils";
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/user-preference/user-preference.store";
import * as i2 from "../../../../store/system-config/system-config.store";
import * as i3 from "../../../../store/record-list/record-list.store.factory";
import * as i4 from "../../../../services/local-storage/local-storage.service";
import * as i5 from "./record-pagination.service";
const initialState = {
    paginationEnabled: false,
    recordIds: null,
    pagination: null
};
export class RecordPaginationStore {
    constructor(preferences, systemConfigStore, listStoreFactory, localStorageService, recordPaginationService) {
        this.preferences = preferences;
        this.systemConfigStore = systemConfigStore;
        this.listStoreFactory = listStoreFactory;
        this.localStorageService = localStorageService;
        this.recordPaginationService = recordPaginationService;
        this.internalState = deepClone(initialState);
        this.cache$ = null;
        this.store = new BehaviorSubject(this.internalState);
        this.state$ = this.store.asObservable();
        this.subs = [];
        this.recordListStore = this.listStoreFactory.create();
        this.recordIds$ = this.state$.pipe(map(state => state.recordIds), distinctUntilChanged());
        this.pagination$ = this.state$.pipe(map(state => state.pagination), distinctUntilChanged());
        this.paginationEnabled$ = this.state$.pipe(map(state => state.paginationEnabled), distinctUntilChanged());
    }
    clear() {
        this.cache$ = null;
        this.updateState(deepClone(initialState));
        this.subs.forEach(sub => sub.unsubscribe());
    }
    init() {
        const module = this.getModule();
        this.recordListStore.init(module, false);
        this.enableRecordPagination();
        this.loadDataLocalStorage();
        this.loadCurrentPagination(module);
        this.loadCurrentSort(module);
        this.loadCurrentFilter(module);
    }
    enableRecordPagination() {
        let isEnabled = this.systemConfigStore.getConfigValue('enable_record_pagination');
        if (isEnabled === "") {
            isEnabled = false;
        }
        this.updateState({ ...this.internalState, paginationEnabled: !!(isEnabled ?? false) });
    }
    loadDataLocalStorage() {
        const data = this.getRecordListPreference();
        this.updateState({ ...this.internalState, recordIds: data?.recordIds, pagination: data?.pagination });
    }
    getRecordListPreference() {
        const module = this.getModule();
        const data = this.loadPreference(module, 'current-record-pagination');
        this.checkPaginationExist(data);
        if (!isArray(data.recordIds) || !data.recordIds || !data.recordIds.length) {
            return null;
        }
        return data;
    }
    checkPaginationExist(data) {
        const module = this.getModule();
        const hasPagination = this.loadPreference(module, 'current-pagination', 'listview');
        if (!hasPagination) {
            this.recordListStore.pagination = data.pagination;
        }
    }
    loadPreference(module, storageKey, pageKey) {
        if (!pageKey) {
            return this.preferences.getUi(module, this.getPreferenceKey(storageKey));
        }
        return this.preferences.getUi(module, (pageKey + '-' + storageKey));
    }
    getPreferenceKey(storageKey) {
        return 'recordview-' + storageKey;
    }
    loadCurrentPagination(module) {
        const key = module + '-' + 'listview-current-pagination';
        const currentPagination = this.localStorageService.get(key);
        if (!currentPagination || emptyObject(currentPagination)) {
            return;
        }
        this.recordListStore.pagination = currentPagination;
    }
    loadCurrentSort(module) {
        const currentSort = this.loadPreference(module, 'current-sort', 'listview');
        if (!currentSort || emptyObject(currentSort)) {
            return;
        }
        this.recordListStore.sort = currentSort;
    }
    loadCurrentFilter(module) {
        const activeFiltersPref = this.loadPreference(module, 'current-filters', 'listview') ?? {};
        if (!activeFiltersPref || emptyObject(activeFiltersPref)) {
            return;
        }
        let currentSort = this.loadPreference(module, 'current-sort', 'listview');
        if (!currentSort && emptyObject(currentSort)) {
            currentSort = null;
        }
        this.setFilters(activeFiltersPref, false, currentSort);
    }
    setFilters(filters, reload = true, sort = null) {
        const filterKey = Object.keys(filters).shift();
        const filter = filters[filterKey];
        this.recordListStore.setFilters(filters, reload, sort);
        if (filter.criteria) {
            let orderBy = filter.criteria.orderBy ?? '';
            const sortOrder = filter.criteria.sortOrder ?? '';
            let direction = this.recordListStore.mapSortOrder(sortOrder);
            if (sort !== null) {
                orderBy = sort.orderBy;
                direction = sort.sortOrder;
            }
            this.recordListStore.updateSorting(orderBy, direction, false);
        }
        this.updateSearchCriteria(filters, reload);
    }
    updateSearchCriteria(filters, reload = true) {
        let criteria = this.mergeCriteria(filters);
        this.recordListStore.updateSearchCriteria(criteria, reload);
    }
    mergeCriteria(filters) {
        let criteria = {};
        const keys = Object.keys(filters ?? {}) ?? [];
        keys.forEach(key => {
            const filter = filters[key] ?? null;
            const filterCriteria = filter?.criteria ?? null;
            const filterCriteriaKeys = Object.keys(filterCriteria?.filters ?? {});
            if (filterCriteria === null || (filterCriteriaKeys && !filterCriteriaKeys.length)) {
                return;
            }
            if (emptyObject(criteria)) {
                criteria = deepClone(filterCriteria);
                return;
            }
            filterCriteriaKeys.forEach(criteriaKey => {
                const filterCriteriaContent = filterCriteria?.filters[criteriaKey] ?? null;
                const criteriaContent = criteria?.filters[criteriaKey] ?? null;
                if (!filterCriteriaContent) {
                    return;
                }
                const criteriaOperator = criteriaContent?.operator ?? null;
                if (!criteriaContent || !criteriaOperator) {
                    criteria.filters[criteriaKey] = deepClone(filterCriteriaContent);
                    return;
                }
                const filterCriteriaOperator = filterCriteriaContent?.operator ?? null;
                if (filterCriteriaOperator !== criteriaOperator || filterCriteriaOperator !== '=') {
                    delete criteria.filters[criteriaKey];
                    return;
                }
                criteriaContent.values = union(criteriaContent.values ?? [], filterCriteriaContent.values ?? []);
            });
        });
        return criteria;
    }
    getModule() {
        return this.recordPaginationService.getModule();
    }
    getCurrentPage() {
        const pageSize = this.internalState.pagination?.pageSize;
        const pageLast = this.internalState.pagination?.pageLast;
        const currentPage = Math.ceil(pageLast / pageSize);
        return currentPage;
    }
    getPageSize() {
        return this.internalState.pagination?.pageSize;
    }
    getRecordsCount() {
        return this.internalState.pagination?.total;
    }
    updateState(state) {
        this.store.next(this.internalState = state);
    }
    set(state) {
        this.cache$ = of(state).pipe(shareReplay(1));
        this.updateState(state);
    }
    isCached() {
        return this.cache$ !== null;
    }
    static { this.ɵfac = function RecordPaginationStore_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RecordPaginationStore)(i0.ɵɵinject(i1.UserPreferenceStore), i0.ɵɵinject(i2.SystemConfigStore), i0.ɵɵinject(i3.RecordListStoreFactory), i0.ɵɵinject(i4.LocalStorageService), i0.ɵɵinject(i5.RecordPaginationService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordPaginationStore, factory: RecordPaginationStore.ɵfac }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordPaginationStore, [{
        type: Injectable
    }], () => [{ type: i1.UserPreferenceStore }, { type: i2.SystemConfigStore }, { type: i3.RecordListStoreFactory }, { type: i4.LocalStorageService }, { type: i5.RecordPaginationService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLXBhZ2luYXRpb24uc3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvcmVjb3JkL3N0b3JlL3JlY29yZC1wYWdpbmF0aW9uL3JlY29yZC1wYWdpbmF0aW9uLnN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxlQUFlLEVBQWMsRUFBRSxFQUFlLE1BQU0sTUFBTSxDQUFDO0FBQ25FLE9BQU8sRUFBQyxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEUsT0FBTyxFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDekMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0scURBQXFELENBQUM7QUFDdEYsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0seURBQXlELENBQUM7QUFFNUYsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0seURBQXlELENBQUM7QUFFL0YsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sMERBQTBELENBQUM7QUFDN0YsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFJcEUsT0FBTyxFQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQzs7Ozs7OztBQVM3RSxNQUFNLFlBQVksR0FBMEI7SUFDeEMsaUJBQWlCLEVBQUUsS0FBSztJQUN4QixTQUFTLEVBQUUsSUFBSTtJQUNmLFVBQVUsRUFBRSxJQUFJO0NBQ25CLENBQUM7QUFHRixNQUFNLE9BQU8scUJBQXFCO0lBaUI5QixZQUNjLFdBQWdDLEVBQ2hDLGlCQUFvQyxFQUNwQyxnQkFBd0Ms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QU8sV0FBVyxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxXQUFXO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUM7SUFDbkQsQ0FBQztJQUVNLGVBQWU7UUFDbEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUM7SUFDaEQsQ0FBQztJQUVTLFdBQVcsQ0FBQyxLQUE0QjtRQUM5QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFUyxHQUFHLENBQUMsS0FBNEI7UUFDdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVTLFFBQVE7UUFDZCxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDO0lBQ2hDLENBQUM7c0hBbE9RLHFCQUFxQjt1RUFBckIscUJBQXFCLFdBQXJCLHFCQUFxQjs7aUZBQXJCLHFCQUFxQjtjQURqQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjQgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIG9mLCBTdWJzY3JpcHRpb259IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge2Rpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAsIHNoYXJlUmVwbGF5fSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7aXNBcnJheSwgdW5pb259IGZyb20gXCJsb2Rhc2gtZXNcIjtcbmltcG9ydCB7U3lzdGVtQ29uZmlnU3RvcmV9IGZyb20gXCIuLi8uLi8uLi8uLi9zdG9yZS9zeXN0ZW0tY29uZmlnL3N5c3RlbS1jb25maWcuc3RvcmVcIjtcbmltcG9ydCB7VXNlclByZWZlcmVuY2VTdG9yZX0gZnJvbSBcIi4uLy4uLy4uLy4uL3N0b3JlL3VzZXItcHJlZmVyZW5jZS91c2VyLXByZWZlcmVuY2Uuc3RvcmVcIjtcbmltcG9ydCB7UmVjb3JkTGlzdFN0b3JlfSBmcm9tIFwiLi4vLi4vLi4vLi4vc3RvcmUvcmVjb3JkLWxpc3QvcmVjb3JkLWxpc3Quc3RvcmVcIjtcbmltcG9ydCB7UmVjb3JkTGlzdFN0b3JlRmFjdG9yeX0gZnJvbSBcIi4uLy4uLy4uLy4uL3N0b3JlL3JlY29yZC1saXN0L3JlY29yZC1saXN0LnN0b3JlLmZhY3RvcnlcIjtcbmltcG9ydCB7U2F2ZWRGaWx0ZXJNYXB9IGZyb20gXCIuLi8uLi8uLi8uLi9zdG9yZS9zYXZlZC1maWx0ZXJzL3NhdmVkLWZpbHRlci5tb2RlbFwiO1xuaW1wb3J0IHtMb2NhbFN0b3JhZ2VTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZXMvbG9jYWwtc3RvcmFnZS9sb2NhbC1zdG9yYWdlLnNlcnZpY2VcIjtcbmltcG9ydCB7UmVjb3JkUGFnaW5hdGlvblNlcnZpY2V9IGZyb20gXCIuL3JlY29yZC1wYWdpbmF0aW9uLnNlcnZpY2VcIjtcbmltcG9ydCB7UmVjb3JkUGFnaW5hdGlvbk1vZGVsfSBmcm9tIFwiLi9yZWNvcmQtcGFnaW5hdGlvbi5tb2RlbFwiO1xuaW1wb3J0IHtPYmplY3RNYXB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vdHlwZXMvb2JqZWN0LW1hcFwiO1xuaW1wb3J0IHtQYWdpbmF0aW9uLCBTb3J0aW5nU2VsZWN0aW9ufSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3ZpZXdzL2xpc3QvbGlzdC1uYXZpZ2F0aW9uLm1vZGVsXCI7XG5pbXBvcnQge2RlZXBDbG9uZSwgZW1wdHlPYmplY3R9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vdXRpbHMvb2JqZWN0LXV0aWxzXCI7XG5pbXBvcnQge1NlYXJjaENyaXRlcmlhfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3ZpZXdzL2xpc3Qvc2VhcmNoLWNyaXRlcmlhLm1vZGVsXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVjb3JkUGFnaW5hdGlvblN0YXRlIHtcbiAgICBwYWdpbmF0aW9uRW5hYmxlZD86IGJvb2xlYW47XG4gICAgcmVjb3JkSWRzPzogT2JqZWN0TWFwW107XG4gICAgcGFnaW5hdGlvbj86IFBhZ2luYXRpb247XG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogUmVjb3JkUGFnaW5hdGlvblN0YXRlID0ge1xuICAgIHBhZ2luYXRpb25FbmFibGVkOiBmYWxzZSxcbiAgICByZWNvcmRJZHM6IG51bGwsXG4gICAgcGFnaW5hdGlvbjogbnVsbFxufTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJlY29yZFBhZ2luYXRpb25TdG9yZSB7XG5cbiAgICByZWNvcmRMaXN0U3RvcmU6IFJlY29yZExpc3RTdG9yZTtcblxuICAgIC8qKlxuICAgICAqIFB1YmxpYyBsb25nLWxpdmVkIG9ic2VydmFibGUgc3RyZWFtc1xuICAgICAqL1xuICAgIHJlY29yZElkcyQ6IE9ic2VydmFibGU8T2JqZWN0TWFwW10+O1xuICAgIHBhZ2luYXRpb24kOiBPYnNlcnZhYmxlPFBhZ2luYXRpb24+O1xuICAgIHBhZ2luYXRpb25FbmFibGVkJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICAgIHByb3RlY3RlZCBpbnRlcm5hbFN0YXRlOiBSZWNvcmRQYWdpbmF0aW9uU3RhdGUgPSBkZWVwQ2xvbmUoaW5pdGlhbFN0YXRlKTtcbiAgICBwcm90ZWN0ZWQgY2FjaGUkOiBPYnNlcnZhYmxlPGFueT4gPSBudWxsO1xuICAgIHByb3RlY3RlZCBzdG9yZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8UmVjb3JkUGFnaW5hdGlvblN0YXRlPih0aGlzLmludGVybmFsU3RhdGUpO1xuICAgIHByb3RlY3RlZCBzdGF0ZSQgPSB0aGlzLnN0b3JlLmFzT2JzZXJ2YWJsZSgpO1xuICAgIHByb3RlY3RlZCBzdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBwcmVmZXJlbmNlczogVXNlclByZWZlcmVuY2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIHN5c3RlbUNvbmZpZ1N0b3JlOiBTeXN0ZW1Db25maWdTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGxpc3RTdG9yZUZhY3Rvcnk6IFJlY29yZExpc3RTdG9yZUZhY3RvcnksXG4gICAgICAgIHByb3RlY3RlZCBsb2NhbFN0b3JhZ2VTZXJ2aWNlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgcmVjb3JkUGFnaW5hdGlvblNlcnZpY2U6IFJlY29yZFBhZ2luYXRpb25TZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIHRoaXMucmVjb3JkTGlzdFN0b3JlID0gdGhpcy5saXN0U3RvcmVGYWN0b3J5LmNyZWF0ZSgpO1xuICAgICAgICB0aGlzLnJlY29yZElkcyQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5yZWNvcmRJZHMpLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgICAgICAgdGhpcy5wYWdpbmF0aW9uJCA9IHRoaXMuc3RhdGUkLnBpcGUobWFwKHN0YXRlID0+IHN0YXRlLnBhZ2luYXRpb24pLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgICAgICAgdGhpcy5wYWdpbmF0aW9uRW5hYmxlZCQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5wYWdpbmF0aW9uRW5hYmxlZCksIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jYWNoZSQgPSBudWxsO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKGRlZXBDbG9uZShpbml0aWFsU3RhdGUpKTtcbiAgICAgICAgdGhpcy5zdWJzLmZvckVhY2goc3ViID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbW9kdWxlID0gdGhpcy5nZXRNb2R1bGUoKTtcbiAgICAgICAgdGhpcy5yZWNvcmRMaXN0U3RvcmUuaW5pdChtb2R1bGUsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5lbmFibGVSZWNvcmRQYWdpbmF0aW9uKCk7XG4gICAgICAgIHRoaXMubG9hZERhdGFMb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgdGhpcy5sb2FkQ3VycmVudFBhZ2luYXRpb24obW9kdWxlKTtcbiAgICAgICAgdGhpcy5sb2FkQ3VycmVudFNvcnQobW9kdWxlKTtcbiAgICAgICAgdGhpcy5sb2FkQ3VycmVudEZpbHRlcihtb2R1bGUpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBlbmFibGVSZWNvcmRQYWdpbmF0aW9uKCk6IHZvaWQge1xuICAgICAgICBsZXQgaXNFbmFibGVkID0gdGhpcy5zeXN0ZW1Db25maWdTdG9yZS5nZXRDb25maWdWYWx1ZSgnZW5hYmxlX3JlY29yZF9wYWdpbmF0aW9uJyk7XG4gICAgICAgIGlmIChpc0VuYWJsZWQgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIGlzRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoey4uLnRoaXMuaW50ZXJuYWxTdGF0ZSwgcGFnaW5hdGlvbkVuYWJsZWQ6ICEhKGlzRW5hYmxlZCA/PyBmYWxzZSl9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZERhdGFMb2NhbFN0b3JhZ2UoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGRhdGE6IFJlY29yZFBhZ2luYXRpb25Nb2RlbCA9IHRoaXMuZ2V0UmVjb3JkTGlzdFByZWZlcmVuY2UoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7Li4udGhpcy5pbnRlcm5hbFN0YXRlLCByZWNvcmRJZHM6IGRhdGE/LnJlY29yZElkcywgcGFnaW5hdGlvbjogZGF0YT8ucGFnaW5hdGlvbn0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRSZWNvcmRMaXN0UHJlZmVyZW5jZSgpOiBSZWNvcmRQYWdpbmF0aW9uTW9kZWwge1xuICAgICAgICBjb25zdCBtb2R1bGUgPSB0aGlzLmdldE1vZHVsZSgpO1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5sb2FkUHJlZmVyZW5jZShtb2R1bGUsICdjdXJyZW50LXJlY29yZC1wYWdpbmF0aW9uJyk7XG4gICAgICAgIHRoaXMuY2hlY2tQYWdpbmF0aW9uRXhpc3QoZGF0YSk7XG5cbiAgICAgICAgaWYgKCFpc0FycmF5KGRhdGEucmVjb3JkSWRzKSB8fCAhZGF0YS5yZWNvcmRJZHMgfHwgIWRhdGEucmVjb3JkSWRzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNoZWNrUGFnaW5hdGlvbkV4aXN0KGRhdGE6IFJlY29yZFBhZ2luYXRpb25TdGF0ZSk6IHZvaWQge1xuICAgICAgICBjb25zdCBtb2R1bGUgPSB0aGlzLmdldE1vZHVsZSgpO1xuICAgICAgICBjb25zdCBoYXNQYWdpbmF0aW9uID0gdGhpcy5sb2FkUHJlZmVyZW5jZShtb2R1bGUsICdjdXJyZW50LXBhZ2luYXRpb24nLCAnbGlzdHZpZXcnKTtcbiAgICAgICAgaWYgKCFoYXNQYWdpbmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnJlY29yZExpc3RTdG9yZS5wYWdpbmF0aW9uID0gZGF0YS5wYWdpbmF0aW9uO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWRQcmVmZXJlbmNlKG1vZHVsZTogc3RyaW5nLCBzdG9yYWdlS2V5OiBzdHJpbmcsIHBhZ2VLZXk/OiBzdHJpbmcpOiBhbnkge1xuICAgICAgICBpZiAoIXBhZ2VLZXkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByZWZlcmVuY2VzLmdldFVpKG1vZHVsZSwgdGhpcy5nZXRQcmVmZXJlbmNlS2V5KHN0b3JhZ2VLZXkpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wcmVmZXJlbmNlcy5nZXRVaShtb2R1bGUsIChwYWdlS2V5ICsgJy0nICsgc3RvcmFnZUtleSkpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRQcmVmZXJlbmNlS2V5KHN0b3JhZ2VLZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAncmVjb3Jkdmlldy0nICsgc3RvcmFnZUtleTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbG9hZEN1cnJlbnRQYWdpbmF0aW9uKG1vZHVsZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGtleSA9IG1vZHVsZSArICctJyArICdsaXN0dmlldy1jdXJyZW50LXBhZ2luYXRpb24nO1xuICAgICAgICBjb25zdCBjdXJyZW50UGFnaW5hdGlvbiA9IHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5nZXQoa2V5KSBhcyBQYWdpbmF0aW9uO1xuICAgICAgICBpZiAoIWN1cnJlbnRQYWdpbmF0aW9uIHx8IGVtcHR5T2JqZWN0KGN1cnJlbnRQYWdpbmF0aW9uKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVjb3JkTGlzdFN0b3JlLnBhZ2luYXRpb24gPSBjdXJyZW50UGFnaW5hdGlvbjtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbG9hZEN1cnJlbnRTb3J0KG1vZHVsZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTb3J0ID0gdGhpcy5sb2FkUHJlZmVyZW5jZShtb2R1bGUsICdjdXJyZW50LXNvcnQnLCAnbGlzdHZpZXcnKTtcbiAgICAgICAgaWYgKCFjdXJyZW50U29ydCB8fCBlbXB0eU9iamVjdChjdXJyZW50U29ydCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVjb3JkTGlzdFN0b3JlLnNvcnQgPSBjdXJyZW50U29ydDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbG9hZEN1cnJlbnRGaWx0ZXIobW9kdWxlOiBzdHJpbmcpOiB2b2lkIHtcblxuICAgICAgICBjb25zdCBhY3RpdmVGaWx0ZXJzUHJlZiA9IHRoaXMubG9hZFByZWZlcmVuY2UobW9kdWxlLCAnY3VycmVudC1maWx0ZXJzJywgJ2xpc3R2aWV3JykgPz8ge30gYXMgU2F2ZWRGaWx0ZXJNYXA7XG4gICAgICAgIGlmICghYWN0aXZlRmlsdGVyc1ByZWYgfHwgZW1wdHlPYmplY3QoYWN0aXZlRmlsdGVyc1ByZWYpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY3VycmVudFNvcnQgPSB0aGlzLmxvYWRQcmVmZXJlbmNlKG1vZHVsZSwgJ2N1cnJlbnQtc29ydCcsICdsaXN0dmlldycpIGFzIFNvcnRpbmdTZWxlY3Rpb247XG4gICAgICAgIGlmICghY3VycmVudFNvcnQgJiYgZW1wdHlPYmplY3QoY3VycmVudFNvcnQpKSB7XG4gICAgICAgICAgICBjdXJyZW50U29ydCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldEZpbHRlcnMoYWN0aXZlRmlsdGVyc1ByZWYsIGZhbHNlLCBjdXJyZW50U29ydCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNldEZpbHRlcnMoZmlsdGVyczogU2F2ZWRGaWx0ZXJNYXAsIHJlbG9hZCA9IHRydWUsIHNvcnQ6IFNvcnRpbmdTZWxlY3Rpb24gPSBudWxsKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgZmlsdGVyS2V5ID0gT2JqZWN0LmtleXMoZmlsdGVycykuc2hpZnQoKTtcbiAgICAgICAgY29uc3QgZmlsdGVyID0gZmlsdGVyc1tmaWx0ZXJLZXldO1xuXG4gICAgICAgIHRoaXMucmVjb3JkTGlzdFN0b3JlLnNldEZpbHRlcnMoZmlsdGVycywgcmVsb2FkLCBzb3J0KTtcblxuICAgICAgICBpZiAoZmlsdGVyLmNyaXRlcmlhKSB7XG4gICAgICAgICAgICBsZXQgb3JkZXJCeSA9IGZpbHRlci5jcml0ZXJpYS5vcmRlckJ5ID8/ICcnO1xuICAgICAgICAgICAgY29uc3Qgc29ydE9yZGVyID0gZmlsdGVyLmNyaXRlcmlhLnNvcnRPcmRlciA/PyAnJztcbiAgICAgICAgICAgIGxldCBkaXJlY3Rpb24gPSB0aGlzLnJlY29yZExpc3RTdG9yZS5tYXBTb3J0T3JkZXIoc29ydE9yZGVyKTtcblxuICAgICAgICAgICAgaWYgKHNvcnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBvcmRlckJ5ID0gc29ydC5vcmRlckJ5O1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9IHNvcnQuc29ydE9yZGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnJlY29yZExpc3RTdG9yZS51cGRhdGVTb3J0aW5nKG9yZGVyQnksIGRpcmVjdGlvbiwgZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVTZWFyY2hDcml0ZXJpYShmaWx0ZXJzLCByZWxvYWQpXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVNlYXJjaENyaXRlcmlhKGZpbHRlcnM6IFNhdmVkRmlsdGVyTWFwLCByZWxvYWQgPSB0cnVlKTogdm9pZCB7XG4gICAgICAgIGxldCBjcml0ZXJpYSA9IHRoaXMubWVyZ2VDcml0ZXJpYShmaWx0ZXJzKTtcbiAgICAgICAgdGhpcy5yZWNvcmRMaXN0U3RvcmUudXBkYXRlU2VhcmNoQ3JpdGVyaWEoY3JpdGVyaWEsIHJlbG9hZCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG1lcmdlQ3JpdGVyaWEoZmlsdGVyczogU2F2ZWRGaWx0ZXJNYXApOiBTZWFyY2hDcml0ZXJpYSB7XG5cbiAgICAgICAgbGV0IGNyaXRlcmlhID0ge30gYXMgU2VhcmNoQ3JpdGVyaWE7XG5cbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGZpbHRlcnMgPz8ge30pID8/IFtdO1xuXG4gICAgICAgIGtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmlsdGVyID0gZmlsdGVyc1trZXldID8/IG51bGw7XG4gICAgICAgICAgICBjb25zdCBmaWx0ZXJDcml0ZXJpYSA9IGZpbHRlcj8uY3JpdGVyaWEgPz8gbnVsbDtcbiAgICAgICAgICAgIGNvbnN0IGZpbHRlckNyaXRlcmlhS2V5cyA9IE9iamVjdC5rZXlzKGZpbHRlckNyaXRlcmlhPy5maWx0ZXJzID8/IHt9KTtcbiAgICAgICAgICAgIGlmIChmaWx0ZXJDcml0ZXJpYSA9PT0gbnVsbCB8fCAoZmlsdGVyQ3JpdGVyaWFLZXlzICYmICFmaWx0ZXJDcml0ZXJpYUtleXMubGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGVtcHR5T2JqZWN0KGNyaXRlcmlhKSkge1xuICAgICAgICAgICAgICAgIGNyaXRlcmlhID0gZGVlcENsb25lKGZpbHRlckNyaXRlcmlhKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZpbHRlckNyaXRlcmlhS2V5cy5mb3JFYWNoKGNyaXRlcmlhS2V5ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWx0ZXJDcml0ZXJpYUNvbnRlbnQgPSBmaWx0ZXJDcml0ZXJpYT8uZmlsdGVyc1tjcml0ZXJpYUtleV0gPz8gbnVsbDtcbiAgICAgICAgICAgICAgICBjb25zdCBjcml0ZXJpYUNvbnRlbnQgPSBjcml0ZXJpYT8uZmlsdGVyc1tjcml0ZXJpYUtleV0gPz8gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoIWZpbHRlckNyaXRlcmlhQ29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgY3JpdGVyaWFPcGVyYXRvciA9IGNyaXRlcmlhQ29udGVudD8ub3BlcmF0b3IgPz8gbnVsbFxuXG4gICAgICAgICAgICAgICAgaWYgKCFjcml0ZXJpYUNvbnRlbnQgfHwgIWNyaXRlcmlhT3BlcmF0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY3JpdGVyaWEuZmlsdGVyc1tjcml0ZXJpYUtleV0gPSBkZWVwQ2xvbmUoZmlsdGVyQ3JpdGVyaWFDb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbHRlckNyaXRlcmlhT3BlcmF0b3IgPSBmaWx0ZXJDcml0ZXJpYUNvbnRlbnQ/Lm9wZXJhdG9yID8/IG51bGxcbiAgICAgICAgICAgICAgICBpZiAoZmlsdGVyQ3JpdGVyaWFPcGVyYXRvciAhPT0gY3JpdGVyaWFPcGVyYXRvciB8fCBmaWx0ZXJDcml0ZXJpYU9wZXJhdG9yICE9PSAnPScpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGNyaXRlcmlhLmZpbHRlcnNbY3JpdGVyaWFLZXldO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY3JpdGVyaWFDb250ZW50LnZhbHVlcyA9IHVuaW9uKGNyaXRlcmlhQ29udGVudC52YWx1ZXMgPz8gW10sIGZpbHRlckNyaXRlcmlhQ29udGVudC52YWx1ZXMgPz8gW10pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBjcml0ZXJpYTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TW9kdWxlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlY29yZFBhZ2luYXRpb25TZXJ2aWNlLmdldE1vZHVsZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDdXJyZW50UGFnZSgpOiBudW1iZXIge1xuICAgICAgICBjb25zdCBwYWdlU2l6ZSA9IHRoaXMuaW50ZXJuYWxTdGF0ZS5wYWdpbmF0aW9uPy5wYWdlU2l6ZTtcbiAgICAgICAgY29uc3QgcGFnZUxhc3QgPSB0aGlzLmludGVybmFsU3RhdGUucGFnaW5hdGlvbj8ucGFnZUxhc3Q7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQYWdlID0gTWF0aC5jZWlsKHBhZ2VMYXN0IC8gcGFnZVNpemUpO1xuICAgICAgICByZXR1cm4gY3VycmVudFBhZ2U7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFBhZ2VTaXplKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsU3RhdGUucGFnaW5hdGlvbj8ucGFnZVNpemU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFJlY29yZHNDb3VudCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFN0YXRlLnBhZ2luYXRpb24/LnRvdGFsO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCB1cGRhdGVTdGF0ZShzdGF0ZTogUmVjb3JkUGFnaW5hdGlvblN0YXRlKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RvcmUubmV4dCh0aGlzLmludGVybmFsU3RhdGUgPSBzdGF0ZSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNldChzdGF0ZTogUmVjb3JkUGFnaW5hdGlvblN0YXRlKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2FjaGUkID0gb2Yoc3RhdGUpLnBpcGUoc2hhcmVSZXBsYXkoMSkpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaXNDYWNoZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlJCAhPT0gbnVsbDtcbiAgICB9XG59XG4iXX0=