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
import { WritableSignal } from '@angular/core';
import { StateStore } from '../../../../store/state';
import { RecordList, RecordListStore } from '../../../../store/record-list/record-list.store';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { RecordListStoreFactory } from '../../../../store/record-list/record-list.store.factory';
import { LanguageStore } from '../../../../store/language/language.store';
import { Record } from '../../../../common/record/record.model';
import { SearchCriteria, SearchCriteriaFilter } from '../../../../common/views/list/search-criteria.model';
import { ColumnDefinition, SearchMeta, RecordListMeta } from '../../../../common/metadata/list.metadata.model';
import { Statistic, StatisticsQuery, StatisticsQueryMap } from '../../../../common/statistics/statistics.model';
import { StatisticWidgetOptions } from '../../../../common/metadata/widget.metadata';
import { SubPanelDefinition } from '../../../../common/metadata/subpanel.metadata.model';
import { SingleValueStatisticsStore } from '../../../../store/single-value-statistics/single-value-statistics.store';
import { SingleValueStatisticsStoreFactory } from '../../../../store/single-value-statistics/single-value-statistics.store.factory';
import { FilterListStore } from "../../../../store/saved-filters/filter-list.store";
import { FilterListStoreFactory } from "../../../../store/saved-filters/filter-list.store.factory";
import { MetadataStore } from "../../../../store/metadata/metadata.store.service";
import { SavedFilter, SavedFilterMap } from "../../../../store/saved-filters/saved-filter.model";
import { UserPreferenceStore } from "../../../../store/user-preference/user-preference.store";
import { PanelCollapseMode } from "../../../../components/panel/panel.component";
import * as i0 from "@angular/core";
export interface SubpanelStoreMap {
    [key: string]: SubpanelStore;
}
export interface SingleValueStatisticsStoreMap {
    [key: string]: SingleValueStatisticsStore;
}
export declare class SubpanelStore implements StateStore {
    protected listStoreFactory: RecordListStoreFactory;
    protected languageStore: LanguageStore;
    protected statisticsStoreFactory: SingleValueStatisticsStoreFactory;
    protected filterListStoreFactory: FilterListStoreFactory;
    protected meta: MetadataStore;
    protected preferences: UserPreferenceStore;
    show: boolean;
    parentModule: string;
    parentId: string;
    parentRecord$: Observable<Record>;
    parentRecord: Record;
    recordList: RecordListStore;
    statistics: SingleValueStatisticsStoreMap;
    metadata$: Observable<SubPanelDefinition>;
    listMetadata$: Observable<RecordListMeta>;
    searchMetadata$: Observable<SearchMeta>;
    columns$: Observable<ColumnDefinition[]>;
    metadata: SubPanelDefinition;
    loading$: Observable<boolean>;
    panelCollapseMode: WritableSignal<PanelCollapseMode>;
    filterList: FilterListStore;
    criteria$: Observable<SearchCriteria>;
    showFilter: WritableSignal<boolean>;
    filterApplied: boolean;
    preferenceKey: any;
    protected metadataState: BehaviorSubject<SubPanelDefinition>;
    protected subs: Subscription[];
    constructor(listStoreFactory: RecordListStoreFactory, languageStore: LanguageStore, statisticsStoreFactory: SingleValueStatisticsStoreFactory, filterListStoreFactory: FilterListStoreFactory, meta: MetadataStore, preferences: UserPreferenceStore);
    getTitle(): string;
    getIcon(): string;
    clear(): void;
    clearAuthBased(): void;
    searchFilter(): void;
    /**
     * Initial list records load if not cached and update state.
     * Returns observable to be used in resolver if needed
     *
     * @param {string} parentModule name
     * @param {string} parentId id
     * @param {object} meta to use
     * @param {object} parentRecord$ to use
     */
    init(parentModule: string, parentId: string, meta: SubPanelDefinition, parentRecord$?: Observable<Record>): void;
    setFilters(filters: SavedFilterMap, reload?: boolean): void;
    isAnyFilterApplied(): boolean;
    hasActiveFilter(): boolean;
    areAllCurrentCriteriaFilterEmpty(): boolean;
    getFilters(): SearchCriteriaFilter;
    /**
     * Load / reload records using current pagination and criteria
     *
     * @param {boolean} useCache if to use cache
     * @returns {object} Observable<RecordList>
     */
    load(useCache?: boolean): Observable<RecordList>;
    /**
     * Get statistic store
     *
     * @param {string} key key of statistic
     * @returns {object} SingleValueStatisticsStore
     */
    getStatistic(key: string): SingleValueStatisticsStore;
    resetFilters(reload?: boolean): void;
    clearFilter(): void;
    /**
     * add search criteria
     *
     * @param {string} parentModule name
     * @param {string} parentId id
     * @param {string} subpanel name
     */
    initSearchCriteria(parentModule: string, parentId: string, meta: SubPanelDefinition): SavedFilter;
    /**
     * Load / reload statistics
     *
     * @param {string} key of statistic
     * @param {boolean} useCache if to use cache
     * @returns {object} Observable<Statistic>
     */
    loadStatistics(key: string, useCache?: boolean): Observable<Statistic>;
    /**
     * Load / reload all statistics
     *
     * @param {boolean} useCache if to use cache
     * @returns {object} Observable<Statistic>
     */
    loadAllStatistics(useCache?: boolean): Observable<Statistic[]>;
    /**
     * Should batch statistic
     *
     * @returns {boolean} shouldBatch
     */
    shouldBatchStatistic(): boolean;
    /**
     * Set loading
     *
     * @param {string} key of statistic
     * @param {boolean} loading bool
     */
    setStatisticsLoading(key: string, loading: boolean): void;
    /**
     * Set all statistics loading
     *
     * @param {boolean} loading bool
     */
    setAllStatisticsLoading(loading: boolean): void;
    /**
     * Set Statistic value
     *
     * @param {string} key of statistic
     * @param {object} statistic Statistic
     * @param {boolean} cache bool
     */
    setStatistics(key: string, statistic: Statistic, cache?: boolean): void;
    /**
     * Get statistic query
     *
     * @param {string} key of statistic
     * @returns {object} StatisticsQuery
     */
    getStatisticQuery(key: string): StatisticsQuery;
    /**
     * Get all statistics queries
     *
     * @returns {object} StatisticsQuery
     */
    getAllStatisticQuery(): StatisticsQueryMap;
    /**
     * Get widget layout
     *
     * @returns {any} any
     */
    getWidgetLayout(): StatisticWidgetOptions;
    toggleFilter(): boolean;
    /**
     * Init statistics store
     *
     * @param {object} meta for subpanel
     * @param {string} parentModule name
     * @param {string} parentId {id}
     */
    protected initStatistics(meta: SubPanelDefinition, parentModule: string, parentId: string): void;
    /**
     * Init a single value statistic
     *
     * @param {string} statisticKey to use
     * @param {object} meta SubPanelDefinition
     * @param {string} parentModule to use
     * @param {string} parentId to use
     */
    protected initStatistic(statisticKey: string, meta: SubPanelDefinition, parentModule: string, parentId: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SubpanelStore, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SubpanelStore>;
}
