import { ObjectMap } from '../../common/types/object-map';
import { Pagination, PageSelection, PaginationCount, SortDirection, SortingSelection } from '../../common/views/list/list-navigation.model';
import { PaginationDataSource } from '../../common/components/pagination/pagination.model';
import { Record } from '../../common/record/record.model';
import { RecordSelection, SelectionStatus } from '../../common/views/list/record-selection.model';
import { SearchCriteria } from '../../common/views/list/search-criteria.model';
import { SelectionDataSource } from '../../common/views/list/selection.model';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { StateStore } from '../state';
import { DataSource } from '@angular/cdk/table';
import { ListGQL } from './graphql/api.list.get';
import { SystemConfigStore } from '../system-config/system-config.store';
import { UserPreferenceStore } from '../user-preference/user-preference.store';
import { LanguageStore } from '../language/language.store';
import { MessageService } from '../../services/message/message.service';
import { SavedFilter, SavedFilterMap } from "../saved-filters/saved-filter.model";
import { LocalStorageService } from "../../services/local-storage/local-storage.service";
import * as i0 from "@angular/core";
export interface RecordList {
    records: Record[];
    pagination?: Pagination;
    criteria?: SearchCriteria;
    activeFilters?: SavedFilterMap;
    openFilter?: SavedFilter;
    sort?: SortingSelection;
    meta?: ObjectMap;
}
export interface RecordListState {
    module: string;
    records: Record[];
    pagination?: Pagination;
    criteria?: SearchCriteria;
    sort?: SortingSelection;
    selection: RecordSelection;
    activeFilters?: SavedFilterMap;
    openFilter?: SavedFilter;
    loading: boolean;
    meta?: ObjectMap;
}
export declare class RecordListStore implements StateStore, DataSource<Record>, SelectionDataSource, PaginationDataSource {
    protected listGQL: ListGQL;
    protected configStore: SystemConfigStore;
    protected preferencesStore: UserPreferenceStore;
    protected languageStore: LanguageStore;
    protected message: MessageService;
    protected localStorageService: LocalStorageService;
    /**
     * Public long-lived observable streams
     */
    records$: Observable<Record[]>;
    criteria$: Observable<SearchCriteria>;
    sort$: Observable<SortingSelection>;
    pagination$: Observable<Pagination>;
    selection$: Observable<RecordSelection>;
    selectedCount$: Observable<number>;
    selectedStatus$: Observable<SelectionStatus>;
    activeFilters$: Observable<SavedFilterMap>;
    openFilter$: Observable<SavedFilter>;
    loading$: Observable<boolean>;
    /** Internal Properties */
    protected cache$: Observable<any>;
    protected internalState: RecordListState;
    protected store: BehaviorSubject<RecordListState>;
    protected state$: Observable<RecordListState>;
    protected preferencesSub: Subscription;
    protected subs: Subscription[];
    preferenceKey: string;
    baseFilter: SavedFilter;
    baseFilterMap: SavedFilterMap;
    pageKey: string;
    constructor(listGQL: ListGQL, configStore: SystemConfigStore, preferencesStore: UserPreferenceStore, languageStore: LanguageStore, message: MessageService, localStorageService: LocalStorageService);
    connect(): Observable<any>;
    disconnect(): void;
    get criteria(): SearchCriteria;
    set criteria(criteria: SearchCriteria);
    get activeFilters(): SavedFilterMap;
    get sort(): SortingSelection;
    set sort(sort: SortingSelection);
    get pagination(): Pagination;
    set pagination(pagination: Pagination);
    get selection(): RecordSelection;
    get records(): Record[];
    getModule(): string;
    getRecord(id: string): Record;
    /**
     * Clean destroy
     */
    destroy(): void;
    /**
     * Initial list records load if not cached and update state.
     * Returns observable to be used in resolver if needed
     *
     * @param {string} module to use
     * @param {boolean} load if to load
     * @param {string} pageSizeConfigKey string
     * @param filter
     * @param preferenceKey
     * @returns {object} Observable<any>
     */
    init(module: string, load?: boolean, pageSizeConfigKey?: string, filter?: any, preferenceKey?: string): Observable<RecordList>;
    setBaseFilter(filter: any): void;
    /**
     * Load current filter
     * @param module
     * @protected
     */
    loadCurrentFilter(module: string): void;
    /**
     * Set active filters
     *
     * @param {object} filters to set
     * @param {boolean} reload flag
     * @param sort
     */
    setFilters(filters: SavedFilterMap, reload?: boolean, sort?: SortingSelection): void;
    updateFilterLocalStorage(): void;
    updateSortLocalStorage(): void;
    updatePaginationLocalStorage(): void;
    setLoading(loading: boolean): void;
    /**
     * Load / reload records using current pagination and criteria
     *
     * @param {boolean} useCache if to use cache
     * @returns {object} Observable<ListViewState>
     */
    load(useCache?: boolean): Observable<RecordList>;
    /**
     * Update the search criteria
     *
     * @param {object} criteria to set
     * @param {boolean} reload flag
     */
    updateSearchCriteria(criteria: SearchCriteria, reload?: boolean): void;
    /**
     * Reset search criteria
     * @param {boolean} reload flag
     */
    resetSearchCriteria(reload?: boolean): void;
    /**
     * Update current list view sorting
     *
     * @param {string} orderBy to set
     * @param {string} sortOrder to set
     * @param {boolean} reload flag
     */
    updateSorting(orderBy: string, sortOrder: SortDirection, reload?: boolean): void;
    /**
     * Map sort order to SortDirection enum
     * @param {string} sortOrder to map
     * @returns {string} SortDirection
     */
    mapSortOrder(sortOrder: string): SortDirection;
    /**
     * Update the pagination
     *
     * @param {number} current to set
     */
    updatePagination(current: number): void;
    setPagination(current: number): Observable<RecordList>;
    /**
     * Set open filters
     *
     * @param {object} filter to set
     */
    setOpenFilter(filter: SavedFilter): void;
    /**
     * Reset active filters
     *
     * @param {boolean} reload flag
     */
    resetFilters(reload?: boolean): void;
    /**
     * Save ui user preference
     * @param module
     * @param storageKey
     * @param value
     * @protected
     */
    protected savePreference(module: string, storageKey: string, value: any): void;
    /**
     * Load ui user preference
     * @param module
     * @param storageKey
     * @protected
     */
    protected loadPreference(module: string, storageKey: string): any;
    /**
     * Reset/Clear the pagination
     */
    resetPagination(): void;
    /**
     * Clear observable cache
     */
    clear(): void;
    clearAuthBased(): void;
    /**
     * Selection public api
     */
    getSelectionStatus(): Observable<SelectionStatus>;
    getSelectedCount(): Observable<number>;
    updateSelection(state: SelectionStatus): void;
    clearSelection(): void;
    clearSort(): void;
    selectAll(): void;
    selectPage(): void;
    toggleSelection(id: string): void;
    /**
     * Pagination Public API
     */
    getPaginationCount(): Observable<PaginationCount>;
    getPagination(): Pagination;
    getMeta(): ObjectMap;
    changePage(page: PageSelection): void;
    setPage(page: PageSelection, isPaginationLoadMore: boolean): Observable<RecordList>;
    /**
     * Set Pagination page size
     *
     * @param {number} pageSize to set
     */
    setPageSize(pageSize: number): void;
    /**
     * Get Pagination page size
     */
    getPageSize(): number;
    /**
     * Internal API
     */
    /**
     * Subscribe to page size changes
     *
     * @param {string} pageSizeConfigKey key
     */
    protected watchPageSize(pageSizeConfigKey: string): void;
    /**
     * Determine page size to use
     *
     * @param {} pageSizePreference to use
     * @param {string} pageSizeConfig to use
     */
    protected determinePageSize(pageSizePreference: any, pageSizeConfig: string): void;
    /**
     * Update the state
     *
     * @param {object} state to set
     */
    protected updateState(state: RecordListState): void;
    /**
     * Calculate page count
     *
     * @param {object} records list
     * @param {object} pagination info
     */
    protected calculatePageCount(records: Record[], pagination: Pagination): void;
    /**
     * Get records cached Observable or call the backend
     *
     * @param {string} module to use
     * @param {object} criteria to use
     * @param {object} sort to use
     * @param {object} pagination to use
     * @param {boolean} useCache if to use cache
     * @returns {object} Observable<any>
     */
    protected getRecords(module: string, criteria: SearchCriteria, sort: SortingSelection, pagination: Pagination, useCache?: boolean): Observable<RecordList>;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecordListStore, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RecordListStore>;
}
