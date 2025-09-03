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
import { deepClone } from '../../common/utils/object-utils';
import { emptyObject } from '../../common/utils/object-utils';
import { PageSelection, SortDirection } from '../../common/views/list/list-navigation.model';
import { SelectionStatus } from '../../common/views/list/record-selection.model';
import { BehaviorSubject, combineLatestWith, of } from 'rxjs';
import { catchError, distinctUntilChanged, map, shareReplay, take, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ListGQL } from './graphql/api.list.get';
import { SystemConfigStore } from '../system-config/system-config.store';
import { UserPreferenceStore } from '../user-preference/user-preference.store';
import { LanguageStore } from '../language/language.store';
import { MessageService } from '../../services/message/message.service';
import { LocalStorageService } from "../../services/local-storage/local-storage.service";
import * as i0 from "@angular/core";
import * as i1 from "./graphql/api.list.get";
import * as i2 from "../system-config/system-config.store";
import * as i3 from "../user-preference/user-preference.store";
import * as i4 from "../language/language.store";
import * as i5 from "../../services/message/message.service";
import * as i6 from "../../services/local-storage/local-storage.service";
const initialFilter = {
    key: 'default',
    module: 'saved-search',
    attributes: {
        contents: ''
    },
    criteria: {
        name: 'default',
        filters: {}
    }
};
const initialFilters = {
    'default': deepClone(initialFilter)
};
const initialSearchCriteria = {
    filters: {}
};
const initialListSort = {
    orderBy: '',
    sortOrder: SortDirection.DESC
};
const initialListPagination = {
    pageSize: 5,
    current: 0,
    previous: 0,
    next: 5,
    last: 0,
    total: 0,
    pageFirst: 0,
    pageLast: 0
};
const initialSelection = {
    all: false,
    status: SelectionStatus.NONE,
    selected: {},
    count: 0
};
const initialState = {
    module: '',
    records: [],
    criteria: deepClone(initialSearchCriteria),
    activeFilters: deepClone(initialFilters),
    sort: deepClone(initialListSort),
    pagination: deepClone(initialListPagination),
    selection: deepClone(initialSelection),
    openFilter: deepClone(initialFilter),
    loading: false,
    meta: {}
};
export class RecordListStore {
    constructor(listGQL, configStore, preferencesStore, languageStore, message, localStorageService) {
        this.listGQL = listGQL;
        this.configStore = configStore;
        this.preferencesStore = preferencesStore;
        this.languageStore = languageStore;
        this.message = message;
        this.localStorageService = localStorageService;
        /** Internal Properties */
        this.cache$ = null;
        this.internalState = deepClone(initialState);
        this.store = new BehaviorSubject(this.internalState);
        this.state$ = this.store.asObservable();
        this.subs = [];
        this.pageKey = null;
        this.records$ = this.state$.pipe(map(state => state.records), distinctUntilChanged());
        this.criteria$ = this.state$.pipe(map(state => state.criteria), distinctUntilChanged());
        this.sort$ = this.state$.pipe(map(state => state.sort), distinctUntilChanged());
        this.pagination$ = this.state$.pipe(map(state => state.pagination), distinctUntilChanged());
        this.selection$ = this.state$.pipe(map(state => state.selection), distinctUntilChanged());
        this.selectedCount$ = this.state$.pipe(map(state => state.selection.count), distinctUntilChanged());
        this.selectedStatus$ = this.state$.pipe(map(state => state.selection.status), distinctUntilChanged());
        this.activeFilters$ = this.state$.pipe(map(state => state.activeFilters), distinctUntilChanged());
        this.openFilter$ = this.state$.pipe(map(state => state.openFilter), distinctUntilChanged());
        this.loading$ = this.state$.pipe(map(state => state.loading));
    }
    connect() {
        return this.records$;
    }
    disconnect() {
    }
    get criteria() {
        if (!this.internalState.criteria) {
            return deepClone(initialSearchCriteria);
        }
        return deepClone(this.internalState.criteria);
    }
    set criteria(criteria) {
        this.updateState({
            ...this.internalState,
            criteria
        });
    }
    get activeFilters() {
        return deepClone(this.internalState.activeFilters);
    }
    get sort() {
        if (!this.internalState.sort) {
            return deepClone(initialListSort);
        }
        return deepClone(this.internalState.sort);
    }
    set sort(sort) {
        this.updateState({
            ...this.internalState,
            sort
        });
    }
    get pagination() {
        if (!this.internalState.pagination) {
            return deepClone(initialListPagination);
        }
        return deepClone(this.internalState.pagination);
    }
    set pagination(pagination) {
        this.updateState({
            ...this.internalState,
            pagination
        });
    }
    get selection() {
        if (!this.internalState.selection) {
            return deepClone(initialSelection);
        }
        return deepClone(this.internalState.selection);
    }
    get records() {
        if (!this.internalState.records) {
            return [];
        }
        return this.internalState.records;
    }
    getModule() {
        return this.internalState.module;
    }
    getRecord(id) {
        let record = null;
        this.records.some(item => {
            if (item.id === id) {
                record = item;
                return true;
            }
        });
        return record;
    }
    /**
     * Clean destroy
     */
    destroy() {
        this.clear();
    }
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
    init(module, load = true, pageSizeConfigKey = 'list_max_entries_per_page', filter = deepClone(initialFilter), preferenceKey = '') {
        this.internalState.module = module;
        this.preferenceKey = preferenceKey;
        if (pageSizeConfigKey) {
            this.watchPageSize(pageSizeConfigKey);
        }
        this.setBaseFilter(filter);
        this.loadCurrentFilter(module);
        if (load === false) {
            return null;
        }
        return this.load();
    }
    setBaseFilter(filter) {
        this.baseFilterMap = { 'default': deepClone(filter) };
        this.baseFilter = deepClone(filter);
        this.updateState({ ...this.internalState, activeFilters: deepClone(this.baseFilterMap), openFilter: deepClone(this.baseFilter) });
    }
    /**
     * Load current filter
     * @param module
     * @protected
     */
    loadCurrentFilter(module) {
        const activeFiltersPref = this.loadPreference(module, 'current-filters') ?? this.baseFilterMap;
        if (!activeFiltersPref || emptyObject(activeFiltersPref)) {
            return;
        }
        let currentSort = this.loadPreference(module, 'current-sort');
        if (!currentSort && emptyObject(currentSort)) {
            currentSort = null;
        }
        this.setFilters(activeFiltersPref, false, currentSort);
    }
    /**
     * Set active filters
     *
     * @param {object} filters to set
     * @param {boolean} reload flag
     * @param sort
     */
    setFilters(filters, reload = true, sort = null) {
        const filterKey = Object.keys(filters).shift();
        const filter = filters[filterKey];
        this.updateState({ ...this.internalState, activeFilters: deepClone(filters), openFilter: deepClone(filter) });
        if (filter.criteria) {
            let orderBy = filter.criteria.orderBy ?? '';
            const sortOrder = filter.criteria.sortOrder ?? 'desc';
            let direction = this.mapSortOrder(sortOrder);
            if (sort !== null) {
                orderBy = sort.orderBy;
                direction = sort.sortOrder;
            }
            this.updateSorting(orderBy, direction, false);
            this.updateSortLocalStorage();
            this.updateSearchCriteria(filter.criteria, reload);
        }
        this.updateFilterLocalStorage();
    }
    updateFilterLocalStorage() {
        const module = this.internalState.module;
        this.savePreference(module, 'current-filters', this.internalState.activeFilters);
    }
    updateSortLocalStorage() {
        const module = this.internalState.module;
        this.savePreference(module, 'current-sort', this.sort);
    }
    updatePaginationLocalStorage() {
        if (this.pageKey === null) {
            return;
        }
        const module = this.internalState.module;
        const key = module + '-' + this.pageKey + '-' + 'current-pagination';
        this.localStorageService.set(key, this.pagination);
    }
    setLoading(loading) {
        this.updateState({
            ...this.internalState,
            loading: loading
        });
    }
    /**
     * Load / reload records using current pagination and criteria
     *
     * @param {boolean} useCache if to use cache
     * @returns {object} Observable<ListViewState>
     */
    load(useCache = true) {
        this.updateState({
            ...this.internalState,
            loading: true
        });
        return this.getRecords(this.internalState.module, this.internalState.criteria, this.internalState.sort, this.internalState.pagination, useCache).pipe(catchError(() => {
            this.message.addDangerMessageByKey('LBL_GET_RECORD_LIST_ERROR');
            return of({
                records: [],
                criteria: deepClone(initialSearchCriteria),
                sort: deepClone(initialListSort),
                pagination: deepClone(initialListPagination),
                openFilter: deepClone(this.baseFilter),
                activeFilters: deepClone(this.baseFilterMap),
                selection: deepClone(initialSelection),
                meta: {}
            });
        }), tap((data) => {
            this.calculatePageCount(data.records, data.pagination);
            this.updateState({
                ...this.internalState,
                records: data.records,
                pagination: data.pagination,
                loading: false,
                meta: data.meta ?? {}
            });
        }));
    }
    /**
     * Update the search criteria
     *
     * @param {object} criteria to set
     * @param {boolean} reload flag
     */
    updateSearchCriteria(criteria, reload = true) {
        this.updateState({ ...this.internalState, criteria });
        if (reload) {
            this.updateSelection(SelectionStatus.NONE);
            // Reset pagination to default first page
            this.resetPagination();
        }
    }
    /**
     * Reset search criteria
     * @param {boolean} reload flag
     */
    resetSearchCriteria(reload = true) {
        this.updateSearchCriteria(deepClone(initialSearchCriteria), reload);
    }
    /**
     * Update current list view sorting
     *
     * @param {string} orderBy to set
     * @param {string} sortOrder to set
     * @param {boolean} reload flag
     */
    updateSorting(orderBy, sortOrder, reload = true) {
        if (sortOrder === SortDirection.NONE) {
            orderBy = '';
            sortOrder = SortDirection.DESC;
        }
        const sort = { orderBy, sortOrder };
        this.updateState({ ...this.internalState, sort });
        if (reload) {
            this.load(false).pipe(take(1)).subscribe();
        }
    }
    /**
     * Map sort order to SortDirection enum
     * @param {string} sortOrder to map
     * @returns {string} SortDirection
     */
    mapSortOrder(sortOrder) {
        let direction = SortDirection.NONE;
        const sort = sortOrder.toLowerCase();
        if (sort === 'asc') {
            direction = SortDirection.ASC;
        }
        else if (sort === 'desc') {
            direction = SortDirection.DESC;
        }
        return direction;
    }
    /**
     * Update the pagination
     *
     * @param {number} current to set
     */
    updatePagination(current) {
        const pagination = { ...this.internalState.pagination, current };
        this.updateState({ ...this.internalState, pagination });
        this.load(false).pipe(take(1), tap(() => this.updatePaginationLocalStorage())).subscribe();
    }
    setPagination(current) {
        const pagination = { ...this.internalState.pagination, current };
        this.updateState({ ...this.internalState, pagination });
        return this.load(false).pipe(take(1), tap(() => this.updatePaginationLocalStorage()));
    }
    /**
     * Set open filters
     *
     * @param {object} filter to set
     */
    setOpenFilter(filter) {
        this.updateState({ ...this.internalState, openFilter: deepClone(filter) });
    }
    /**
     * Reset active filters
     *
     * @param {boolean} reload flag
     */
    resetFilters(reload = true) {
        this.updateState({
            ...this.internalState,
            activeFilters: deepClone(this.baseFilterMap),
            openFilter: deepClone(this.baseFilter),
        });
        this.clearSort();
        this.updateSortLocalStorage();
        this.updateFilterLocalStorage();
        this.updateSearchCriteria(this.baseFilter.criteria, reload);
    }
    /**
     * Save ui user preference
     * @param module
     * @param storageKey
     * @param value
     * @protected
     */
    savePreference(module, storageKey, value) {
        const preferenceKey = this.preferenceKey ?? null;
        if (!preferenceKey) {
            return null;
        }
        const key = `${preferenceKey}${storageKey}`;
        this.preferencesStore.setUi(module, key, value);
    }
    /**
     * Load ui user preference
     * @param module
     * @param storageKey
     * @protected
     */
    loadPreference(module, storageKey) {
        const preferenceKey = this.preferenceKey ?? null;
        if (!preferenceKey) {
            return null;
        }
        const key = `${preferenceKey}${storageKey}`;
        return this.preferencesStore.getUi(module, key);
    }
    /**
     * Reset/Clear the pagination
     */
    resetPagination() {
        this.updatePagination(0);
    }
    /**
     * Clear observable cache
     */
    clear() {
        this.cache$ = null;
        this.store.unsubscribe();
        this.preferencesSub.unsubscribe();
    }
    clearAuthBased() {
        this.clear();
    }
    /**
     * Selection public api
     */
    getSelectionStatus() {
        return this.selectedStatus$;
    }
    getSelectedCount() {
        return this.selectedCount$;
    }
    updateSelection(state) {
        if (state === SelectionStatus.NONE) {
            this.clearSelection();
            return;
        }
        if (state === SelectionStatus.ALL) {
            this.selectAll();
            return;
        }
        if (state === SelectionStatus.PAGE) {
            this.selectPage();
            return;
        }
    }
    clearSelection() {
        this.updateState({
            ...this.internalState,
            selection: deepClone(initialSelection)
        });
    }
    clearSort() {
        this.updateState({
            ...this.internalState,
            sort: deepClone(initialListSort)
        });
    }
    selectAll() {
        const total = this.internalState.pagination.total;
        this.updateState({
            ...this.internalState,
            selection: {
                all: true,
                status: SelectionStatus.ALL,
                selected: {},
                count: total
            }
        });
    }
    selectPage() {
        const selected = { ...this.internalState.selection.selected };
        if (this.internalState.records && this.internalState.records.length) {
            this.internalState.records.forEach(value => {
                if (value && value.id) {
                    selected[value.id] = value.id;
                }
            });
        }
        this.updateState({
            ...this.internalState,
            selection: {
                all: false,
                status: SelectionStatus.SOME,
                selected,
                count: Object.keys(selected).length
            }
        });
    }
    toggleSelection(id) {
        const selection = deepClone(this.internalState.selection);
        if (selection.selected[id]) {
            delete selection.selected[id];
        }
        else {
            selection.selected[id] = id;
        }
        selection.count = Object.keys(selection.selected).length;
        if (selection.count === 0) {
            selection.status = SelectionStatus.NONE;
        }
        else {
            selection.status = SelectionStatus.SOME;
        }
        this.updateState({
            ...this.internalState,
            selection
        });
    }
    /**
     * Pagination Public API
     */
    getPaginationCount() {
        return this.pagination$.pipe(map(pagination => ({
            pageFirst: pagination.pageFirst,
            pageLast: pagination.pageLast,
            total: pagination.total
        })), distinctUntilChanged());
    }
    getPagination() {
        return this.store.value.pagination;
    }
    getMeta() {
        return this.store.value.meta;
    }
    changePage(page) {
        let pageToLoad = 0;
        const pageMap = {};
        pageMap[PageSelection.FIRST] = 0;
        pageMap[PageSelection.PREVIOUS] = this.internalState.pagination.previous;
        pageMap[PageSelection.NEXT] = this.internalState.pagination.next;
        pageMap[PageSelection.LAST] = this.internalState.pagination.last;
        if (page in pageMap && pageMap[page] >= 0) {
            pageToLoad = pageMap[page];
            if (Number(pageToLoad) > this.internalState.pagination.last) {
                return;
            }
            if (pageToLoad < 0) {
                return;
            }
            this.updatePagination(pageToLoad);
        }
    }
    setPage(page, isPaginationLoadMore) {
        let pageToLoad = 0;
        const pageMap = {};
        pageMap[PageSelection.FIRST] = 0;
        pageMap[PageSelection.PREVIOUS] = this.internalState.pagination.previous;
        pageMap[PageSelection.NEXT] = this.internalState.pagination.next;
        pageMap[PageSelection.LAST] = this.internalState.pagination.last;
        if (page in pageMap && pageMap[page] >= 0) {
            pageToLoad = pageMap[page];
            if (Number(pageToLoad) > this.internalState.pagination.last) {
                return of({});
            }
            if (pageToLoad < 0) {
                return of({});
            }
            if (isPaginationLoadMore) {
                pageToLoad = 0;
            }
            return this.setPagination(pageToLoad);
        }
        return of({});
    }
    /**
     * Set Pagination page size
     *
     * @param {number} pageSize to set
     */
    setPageSize(pageSize) {
        const pagination = { ...this.internalState.pagination, pageSize };
        this.updateState({ ...this.internalState, pagination });
    }
    /**
     * Get Pagination page size
     */
    getPageSize() {
        return this?.internalState?.pagination?.pageSize ?? 10;
    }
    /**
     * Internal API
     */
    /**
     * Subscribe to page size changes
     *
     * @param {string} pageSizeConfigKey key
     */
    watchPageSize(pageSizeConfigKey) {
        const pageSizePreference = this.preferencesStore.getUserPreference(pageSizeConfigKey);
        const pageSizeConfig = this.configStore.getConfigValue(pageSizeConfigKey);
        this.determinePageSize(pageSizePreference, pageSizeConfig);
        this.preferencesSub = this.configStore.configs$.pipe(combineLatestWith(this.preferencesStore.userPreferences$), tap(([configs, preferences]) => {
            const key = pageSizeConfigKey;
            const sizePreference = (preferences && preferences[key]) || null;
            const sizeConfig = (configs && configs[key] && configs[key].value) || null;
            this.determinePageSize(sizePreference, sizeConfig);
        })).subscribe();
    }
    /**
     * Determine page size to use
     *
     * @param {} pageSizePreference to use
     * @param {string} pageSizeConfig to use
     */
    determinePageSize(pageSizePreference, pageSizeConfig) {
        let size = 20;
        if (pageSizePreference) {
            size = pageSizePreference;
        }
        else if (pageSizeConfig) {
            size = parseInt(pageSizeConfig, 10);
        }
        this.setPageSize(size);
    }
    /**
     * Update the state
     *
     * @param {object} state to set
     */
    updateState(state) {
        this.store.next(this.internalState = state);
    }
    /**
     * Calculate page count
     *
     * @param {object} records list
     * @param {object} pagination info
     */
    calculatePageCount(records, pagination) {
        const recordCount = (records && records.length) || 0;
        let pageFirst = 0;
        let pageLast = 0;
        if (recordCount > 0) {
            pageFirst = pagination.current + 1;
            pageLast = pagination.current + recordCount;
        }
        pagination.pageFirst = pageFirst;
        pagination.pageLast = pageLast;
    }
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
    getRecords(module, criteria, sort, pagination, useCache = true) {
        if (this.cache$ == null || useCache === false) {
            this.cache$ = this.listGQL.get(module, criteria, sort, pagination).pipe(shareReplay(1));
        }
        return this.cache$;
    }
    static { this.ɵfac = function RecordListStore_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RecordListStore)(i0.ɵɵinject(i1.ListGQL), i0.ɵɵinject(i2.SystemConfigStore), i0.ɵɵinject(i3.UserPreferenceStore), i0.ɵɵinject(i4.LanguageStore), i0.ɵɵinject(i5.MessageService), i0.ɵɵinject(i6.LocalStorageService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordListStore, factory: RecordListStore.ɵfac }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordListStore, [{
        type: Injectable
    }], () => [{ type: i1.ListGQL }, { type: i2.SystemConfigStore }, { type: i3.UserPreferenceStore }, { type: i4.LanguageStore }, { type: i5.MessageService }, { type: i6.LocalStorageService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLWxpc3Quc3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc3RvcmUvcmVjb3JkLWxpc3QvcmVjb3JkLWxpc3Quc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUMxRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFFNUQsT0FBTyxFQUFhLGFBQWEsRUFBbUIsYUFBYSxFQUFtQixNQUFNLCtDQUErQyxDQUFDO0FBRzFJLE9BQU8sRUFBa0IsZUFBZSxFQUFDLE1BQU0sZ0RBQWdELENBQUM7QUFHaEcsT0FBTyxFQUFDLGVBQWUsRUFBRSxpQkFBaUIsRUFBYyxFQUFFLEVBQWUsTUFBTSxNQUFNLENBQUM7QUFDdEYsT0FBTyxFQUFDLFVBQVUsRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUc3RixPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMvQyxPQUFPLEVBQWtCLGlCQUFpQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDeEYsT0FBTyxFQUFrQixtQkFBbUIsRUFBQyxNQUFNLDBDQUEwQyxDQUFDO0FBQzlGLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sd0NBQXdDLENBQUM7QUFFdEUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sb0RBQW9ELENBQUM7Ozs7Ozs7O0FBR3ZGLE1BQU0sYUFBYSxHQUFnQjtJQUMvQixHQUFHLEVB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Q04sQ0FBQztRQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO2dIQXZ3QlEsZUFBZTt1RUFBZixlQUFlLFdBQWYsZUFBZTs7aUZBQWYsZUFBZTtjQUQzQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge2RlZXBDbG9uZX0gZnJvbSAnLi4vLi4vY29tbW9uL3V0aWxzL29iamVjdC11dGlscyc7XG5pbXBvcnQge2VtcHR5T2JqZWN0fSBmcm9tICcuLi8uLi9jb21tb24vdXRpbHMvb2JqZWN0LXV0aWxzJztcbmltcG9ydCB7T2JqZWN0TWFwfSBmcm9tICcuLi8uLi9jb21tb24vdHlwZXMvb2JqZWN0LW1hcCc7XG5pbXBvcnQge1BhZ2luYXRpb24sIFBhZ2VTZWxlY3Rpb24sIFBhZ2luYXRpb25Db3VudCwgU29ydERpcmVjdGlvbiwgU29ydGluZ1NlbGVjdGlvbn0gZnJvbSAnLi4vLi4vY29tbW9uL3ZpZXdzL2xpc3QvbGlzdC1uYXZpZ2F0aW9uLm1vZGVsJztcbmltcG9ydCB7UGFnaW5hdGlvbkRhdGFTb3VyY2V9IGZyb20gJy4uLy4uL2NvbW1vbi9jb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5tb2RlbCc7XG5pbXBvcnQge1JlY29yZH0gZnJvbSAnLi4vLi4vY29tbW9uL3JlY29yZC9yZWNvcmQubW9kZWwnO1xuaW1wb3J0IHtSZWNvcmRTZWxlY3Rpb24sIFNlbGVjdGlvblN0YXR1c30gZnJvbSAnLi4vLi4vY29tbW9uL3ZpZXdzL2xpc3QvcmVjb3JkLXNlbGVjdGlvbi5tb2RlbCc7XG5pbXBvcnQge1NlYXJjaENyaXRlcmlhfSBmcm9tICcuLi8uLi9jb21tb24vdmlld3MvbGlzdC9zZWFyY2gtY3JpdGVyaWEubW9kZWwnO1xuaW1wb3J0IHtTZWxlY3Rpb25EYXRhU291cmNlfSBmcm9tICcuLi8uLi9jb21tb24vdmlld3MvbGlzdC9zZWxlY3Rpb24ubW9kZWwnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIGNvbWJpbmVMYXRlc3RXaXRoLCBPYnNlcnZhYmxlLCBvZiwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7Y2F0Y2hFcnJvciwgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCwgc2hhcmVSZXBsYXksIHRha2UsIHRhcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtTdGF0ZVN0b3JlfSBmcm9tICcuLi9zdGF0ZSc7XG5pbXBvcnQge0RhdGFTb3VyY2V9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtMaXN0R1FMfSBmcm9tICcuL2dyYXBocWwvYXBpLmxpc3QuZ2V0JztcbmltcG9ydCB7U3lzdGVtQ29uZmlnTWFwLCBTeXN0ZW1Db25maWdTdG9yZX0gZnJvbSAnLi4vc3lzdGVtLWNvbmZpZy9zeXN0ZW0tY29uZmlnLnN0b3JlJztcbmltcG9ydCB7VXNlclByZWZlcmVuY2VzLCBVc2VyUHJlZmVyZW5jZVN0b3JlfSBmcm9tICcuLi91c2VyLXByZWZlcmVuY2UvdXNlci1wcmVmZXJlbmNlLnN0b3JlJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZX0gZnJvbSAnLi4vbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvbWVzc2FnZS9tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHtTYXZlZEZpbHRlciwgU2F2ZWRGaWx0ZXJNYXB9IGZyb20gXCIuLi9zYXZlZC1maWx0ZXJzL3NhdmVkLWZpbHRlci5tb2RlbFwiO1xuaW1wb3J0IHtMb2NhbFN0b3JhZ2VTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvbG9jYWwtc3RvcmFnZS9sb2NhbC1zdG9yYWdlLnNlcnZpY2VcIjtcblxuXG5jb25zdCBpbml0aWFsRmlsdGVyOiBTYXZlZEZpbHRlciA9IHtcbiAgICBrZXk6ICdkZWZhdWx0JyxcbiAgICBtb2R1bGU6ICdzYXZlZC1zZWFyY2gnLFxuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgY29udGVudHM6ICcnXG4gICAgfSxcbiAgICBjcml0ZXJpYToge1xuICAgICAgICBuYW1lOiAnZGVmYXVsdCcsXG4gICAgICAgIGZpbHRlcnM6IHt9XG4gICAgfVxufTtcblxuY29uc3QgaW5pdGlhbEZpbHRlcnM6IFNhdmVkRmlsdGVyTWFwID0ge1xuICAgICdkZWZhdWx0JzogZGVlcENsb25lKGluaXRpYWxGaWx0ZXIpXG59O1xuXG5jb25zdCBpbml0aWFsU2VhcmNoQ3JpdGVyaWEgPSB7XG4gICAgZmlsdGVyczoge31cbn07XG5cbmNvbnN0IGluaXRpYWxMaXN0U29ydCA9IHtcbiAgICBvcmRlckJ5OiAnJyxcbiAgICBzb3J0T3JkZXI6IFNvcnREaXJlY3Rpb24uREVTQ1xufTtcblxuY29uc3QgaW5pdGlhbExpc3RQYWdpbmF0aW9uID0ge1xuICAgIHBhZ2VTaXplOiA1LFxuICAgIGN1cnJlbnQ6IDAsXG4gICAgcHJldmlvdXM6IDAsXG4gICAgbmV4dDogNSxcbiAgICBsYXN0OiAwLFxuICAgIHRvdGFsOiAwLFxuICAgIHBhZ2VGaXJzdDogMCxcbiAgICBwYWdlTGFzdDogMFxufTtcblxuY29uc3QgaW5pdGlhbFNlbGVjdGlvbjogUmVjb3JkU2VsZWN0aW9uID0ge1xuICAgIGFsbDogZmFsc2UsXG4gICAgc3RhdHVzOiBTZWxlY3Rpb25TdGF0dXMuTk9ORSxcbiAgICBzZWxlY3RlZDoge30sXG4gICAgY291bnQ6IDBcbn07XG5cblxuZXhwb3J0IGludGVyZmFjZSBSZWNvcmRMaXN0IHtcbiAgICByZWNvcmRzOiBSZWNvcmRbXTtcbiAgICBwYWdpbmF0aW9uPzogUGFnaW5hdGlvbjtcbiAgICBjcml0ZXJpYT86IFNlYXJjaENyaXRlcmlhO1xuICAgIGFjdGl2ZUZpbHRlcnM/OiBTYXZlZEZpbHRlck1hcCxcbiAgICBvcGVuRmlsdGVyPzogU2F2ZWRGaWx0ZXI7XG4gICAgc29ydD86IFNvcnRpbmdTZWxlY3Rpb247XG4gICAgbWV0YT86IE9iamVjdE1hcDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZWNvcmRMaXN0U3RhdGUge1xuICAgIG1vZHVsZTogc3RyaW5nO1xuICAgIHJlY29yZHM6IFJlY29yZFtdO1xuICAgIHBhZ2luYXRpb24/OiBQYWdpbmF0aW9uO1xuICAgIGNyaXRlcmlhPzogU2VhcmNoQ3JpdGVyaWE7XG4gICAgc29ydD86IFNvcnRpbmdTZWxlY3Rpb247XG4gICAgc2VsZWN0aW9uOiBSZWNvcmRTZWxlY3Rpb247XG4gICAgYWN0aXZlRmlsdGVycz86IFNhdmVkRmlsdGVyTWFwLFxuICAgIG9wZW5GaWx0ZXI/OiBTYXZlZEZpbHRlcjtcbiAgICBsb2FkaW5nOiBib29sZWFuO1xuICAgIG1ldGE/OiBPYmplY3RNYXA7XG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogUmVjb3JkTGlzdFN0YXRlID0ge1xuICAgIG1vZHVsZTogJycsXG4gICAgcmVjb3JkczogW10sXG4gICAgY3JpdGVyaWE6IGRlZXBDbG9uZShpbml0aWFsU2VhcmNoQ3JpdGVyaWEpLFxuICAgIGFjdGl2ZUZpbHRlcnM6IGRlZXBDbG9uZShpbml0aWFsRmlsdGVycyksXG4gICAgc29ydDogZGVlcENsb25lKGluaXRpYWxMaXN0U29ydCksXG4gICAgcGFnaW5hdGlvbjogZGVlcENsb25lKGluaXRpYWxMaXN0UGFnaW5hdGlvbiksXG4gICAgc2VsZWN0aW9uOiBkZWVwQ2xvbmUoaW5pdGlhbFNlbGVjdGlvbiksXG4gICAgb3BlbkZpbHRlcjogZGVlcENsb25lKGluaXRpYWxGaWx0ZXIpLFxuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIG1ldGE6IHt9XG59O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVjb3JkTGlzdFN0b3JlIGltcGxlbWVudHMgU3RhdGVTdG9yZSwgRGF0YVNvdXJjZTxSZWNvcmQ+LCBTZWxlY3Rpb25EYXRhU291cmNlLCBQYWdpbmF0aW9uRGF0YVNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBQdWJsaWMgbG9uZy1saXZlZCBvYnNlcnZhYmxlIHN0cmVhbXNcbiAgICAgKi9cbiAgICByZWNvcmRzJDogT2JzZXJ2YWJsZTxSZWNvcmRbXT47XG4gICAgY3JpdGVyaWEkOiBPYnNlcnZhYmxlPFNlYXJjaENyaXRlcmlhPjtcbiAgICBzb3J0JDogT2JzZXJ2YWJsZTxTb3J0aW5nU2VsZWN0aW9uPjtcbiAgICBwYWdpbmF0aW9uJDogT2JzZXJ2YWJsZTxQYWdpbmF0aW9uPjtcbiAgICBzZWxlY3Rpb24kOiBPYnNlcnZhYmxlPFJlY29yZFNlbGVjdGlvbj47XG4gICAgc2VsZWN0ZWRDb3VudCQ6IE9ic2VydmFibGU8bnVtYmVyPjtcbiAgICBzZWxlY3RlZFN0YXR1cyQ6IE9ic2VydmFibGU8U2VsZWN0aW9uU3RhdHVzPjtcbiAgICBhY3RpdmVGaWx0ZXJzJDogT2JzZXJ2YWJsZTxTYXZlZEZpbHRlck1hcD47XG4gICAgb3BlbkZpbHRlciQ6IE9ic2VydmFibGU8U2F2ZWRGaWx0ZXI+O1xuICAgIGxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gICAgLyoqIEludGVybmFsIFByb3BlcnRpZXMgKi9cbiAgICBwcm90ZWN0ZWQgY2FjaGUkOiBPYnNlcnZhYmxlPGFueT4gPSBudWxsO1xuICAgIHByb3RlY3RlZCBpbnRlcm5hbFN0YXRlOiBSZWNvcmRMaXN0U3RhdGUgPSBkZWVwQ2xvbmUoaW5pdGlhbFN0YXRlKTtcbiAgICBwcm90ZWN0ZWQgc3RvcmUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFJlY29yZExpc3RTdGF0ZT4odGhpcy5pbnRlcm5hbFN0YXRlKTtcbiAgICBwcm90ZWN0ZWQgc3RhdGUkID0gdGhpcy5zdG9yZS5hc09ic2VydmFibGUoKTtcbiAgICBwcm90ZWN0ZWQgcHJlZmVyZW5jZXNTdWI6IFN1YnNjcmlwdGlvbjtcbiAgICBwcm90ZWN0ZWQgc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICAgIHByZWZlcmVuY2VLZXk6IHN0cmluZztcbiAgICBiYXNlRmlsdGVyOiBTYXZlZEZpbHRlcjtcbiAgICBiYXNlRmlsdGVyTWFwOiBTYXZlZEZpbHRlck1hcDtcblxuICAgIHBhZ2VLZXk6IHN0cmluZyA9IG51bGw7XG5cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgbGlzdEdRTDogTGlzdEdRTCxcbiAgICAgICAgcHJvdGVjdGVkIGNvbmZpZ1N0b3JlOiBTeXN0ZW1Db25maWdTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIHByZWZlcmVuY2VzU3RvcmU6IFVzZXJQcmVmZXJlbmNlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBsYW5ndWFnZVN0b3JlOiBMYW5ndWFnZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbWVzc2FnZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBsb2NhbFN0b3JhZ2VTZXJ2aWNlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIHRoaXMucmVjb3JkcyQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5yZWNvcmRzKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gICAgICAgIHRoaXMuY3JpdGVyaWEkID0gdGhpcy5zdGF0ZSQucGlwZShtYXAoc3RhdGUgPT4gc3RhdGUuY3JpdGVyaWEpLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgICAgICAgdGhpcy5zb3J0JCA9IHRoaXMuc3RhdGUkLnBpcGUobWFwKHN0YXRlID0+IHN0YXRlLnNvcnQpLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgICAgICAgdGhpcy5wYWdpbmF0aW9uJCA9IHRoaXMuc3RhdGUkLnBpcGUobWFwKHN0YXRlID0+IHN0YXRlLnBhZ2luYXRpb24pLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24kID0gdGhpcy5zdGF0ZSQucGlwZShtYXAoc3RhdGUgPT4gc3RhdGUuc2VsZWN0aW9uKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDb3VudCQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5zZWxlY3Rpb24uY291bnQpLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFN0YXR1cyQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5zZWxlY3Rpb24uc3RhdHVzKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gICAgICAgIHRoaXMuYWN0aXZlRmlsdGVycyQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5hY3RpdmVGaWx0ZXJzKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gICAgICAgIHRoaXMub3BlbkZpbHRlciQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5vcGVuRmlsdGVyKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gICAgICAgIHRoaXMubG9hZGluZyQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5sb2FkaW5nKSk7XG4gICAgfVxuXG4gICAgY29ubmVjdCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWNvcmRzJDtcbiAgICB9XG5cbiAgICBkaXNjb25uZWN0KCk6IHZvaWQge1xuICAgIH1cblxuICAgIGdldCBjcml0ZXJpYSgpOiBTZWFyY2hDcml0ZXJpYSB7XG4gICAgICAgIGlmICghdGhpcy5pbnRlcm5hbFN0YXRlLmNyaXRlcmlhKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVlcENsb25lKGluaXRpYWxTZWFyY2hDcml0ZXJpYSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGVlcENsb25lKHRoaXMuaW50ZXJuYWxTdGF0ZS5jcml0ZXJpYSk7XG4gICAgfVxuXG4gICAgc2V0IGNyaXRlcmlhKGNyaXRlcmlhOiBTZWFyY2hDcml0ZXJpYSkge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgIC4uLnRoaXMuaW50ZXJuYWxTdGF0ZSxcbiAgICAgICAgICAgIGNyaXRlcmlhXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldCBhY3RpdmVGaWx0ZXJzKCk6IFNhdmVkRmlsdGVyTWFwIHtcbiAgICAgICAgcmV0dXJuIGRlZXBDbG9uZSh0aGlzLmludGVybmFsU3RhdGUuYWN0aXZlRmlsdGVycyk7XG4gICAgfVxuXG4gICAgZ2V0IHNvcnQoKTogU29ydGluZ1NlbGVjdGlvbiB7XG4gICAgICAgIGlmICghdGhpcy5pbnRlcm5hbFN0YXRlLnNvcnQpIHtcbiAgICAgICAgICAgIHJldHVybiBkZWVwQ2xvbmUoaW5pdGlhbExpc3RTb3J0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkZWVwQ2xvbmUodGhpcy5pbnRlcm5hbFN0YXRlLnNvcnQpO1xuICAgIH1cblxuICAgIHNldCBzb3J0KHNvcnQ6IFNvcnRpbmdTZWxlY3Rpb24pIHtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICAgICAgICAuLi50aGlzLmludGVybmFsU3RhdGUsXG4gICAgICAgICAgICBzb3J0XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldCBwYWdpbmF0aW9uKCk6IFBhZ2luYXRpb24ge1xuICAgICAgICBpZiAoIXRoaXMuaW50ZXJuYWxTdGF0ZS5wYWdpbmF0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVlcENsb25lKGluaXRpYWxMaXN0UGFnaW5hdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGVlcENsb25lKHRoaXMuaW50ZXJuYWxTdGF0ZS5wYWdpbmF0aW9uKTtcbiAgICB9XG5cbiAgICBzZXQgcGFnaW5hdGlvbihwYWdpbmF0aW9uOiBQYWdpbmF0aW9uKSB7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgICAgICAgLi4udGhpcy5pbnRlcm5hbFN0YXRlLFxuICAgICAgICAgICAgcGFnaW5hdGlvblxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXQgc2VsZWN0aW9uKCk6IFJlY29yZFNlbGVjdGlvbiB7XG4gICAgICAgIGlmICghdGhpcy5pbnRlcm5hbFN0YXRlLnNlbGVjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIGRlZXBDbG9uZShpbml0aWFsU2VsZWN0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkZWVwQ2xvbmUodGhpcy5pbnRlcm5hbFN0YXRlLnNlbGVjdGlvbik7XG4gICAgfVxuXG4gICAgZ2V0IHJlY29yZHMoKTogUmVjb3JkW10ge1xuICAgICAgICBpZiAoIXRoaXMuaW50ZXJuYWxTdGF0ZS5yZWNvcmRzKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFN0YXRlLnJlY29yZHM7XG4gICAgfVxuXG4gICAgZ2V0TW9kdWxlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsU3RhdGUubW9kdWxlO1xuICAgIH1cblxuICAgIGdldFJlY29yZChpZDogc3RyaW5nKTogUmVjb3JkIHtcbiAgICAgICAgbGV0IHJlY29yZDogUmVjb3JkID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZWNvcmRzLnNvbWUoaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICByZWNvcmQgPSBpdGVtO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVjb3JkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFuIGRlc3Ryb3lcbiAgICAgKi9cbiAgICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWwgbGlzdCByZWNvcmRzIGxvYWQgaWYgbm90IGNhY2hlZCBhbmQgdXBkYXRlIHN0YXRlLlxuICAgICAqIFJldHVybnMgb2JzZXJ2YWJsZSB0byBiZSB1c2VkIGluIHJlc29sdmVyIGlmIG5lZWRlZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1vZHVsZSB0byB1c2VcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGxvYWQgaWYgdG8gbG9hZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYWdlU2l6ZUNvbmZpZ0tleSBzdHJpbmdcbiAgICAgKiBAcGFyYW0gZmlsdGVyXG4gICAgICogQHBhcmFtIHByZWZlcmVuY2VLZXlcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBPYnNlcnZhYmxlPGFueT5cbiAgICAgKi9cbiAgICBwdWJsaWMgaW5pdChtb2R1bGU6IHN0cmluZywgbG9hZCA9IHRydWUsIHBhZ2VTaXplQ29uZmlnS2V5ID0gJ2xpc3RfbWF4X2VudHJpZXNfcGVyX3BhZ2UnLCBmaWx0ZXIgPSBkZWVwQ2xvbmUoaW5pdGlhbEZpbHRlciksIHByZWZlcmVuY2VLZXkgPSAnJyk6IE9ic2VydmFibGU8UmVjb3JkTGlzdD4ge1xuICAgICAgICB0aGlzLmludGVybmFsU3RhdGUubW9kdWxlID0gbW9kdWxlO1xuICAgICAgICB0aGlzLnByZWZlcmVuY2VLZXkgPSBwcmVmZXJlbmNlS2V5O1xuXG4gICAgICAgIGlmIChwYWdlU2l6ZUNvbmZpZ0tleSkge1xuICAgICAgICAgICAgdGhpcy53YXRjaFBhZ2VTaXplKHBhZ2VTaXplQ29uZmlnS2V5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEJhc2VGaWx0ZXIoZmlsdGVyKTtcbiAgICAgICAgdGhpcy5sb2FkQ3VycmVudEZpbHRlcihtb2R1bGUpO1xuXG4gICAgICAgIGlmIChsb2FkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5sb2FkKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldEJhc2VGaWx0ZXIoZmlsdGVyKSB7XG5cbiAgICAgICAgdGhpcy5iYXNlRmlsdGVyTWFwID0geydkZWZhdWx0JzogZGVlcENsb25lKGZpbHRlcil9O1xuICAgICAgICB0aGlzLmJhc2VGaWx0ZXIgPSBkZWVwQ2xvbmUoZmlsdGVyKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHsuLi50aGlzLmludGVybmFsU3RhdGUsIGFjdGl2ZUZpbHRlcnM6IGRlZXBDbG9uZSh0aGlzLmJhc2VGaWx0ZXJNYXApLCBvcGVuRmlsdGVyOiBkZWVwQ2xvbmUodGhpcy5iYXNlRmlsdGVyKX0pO1xuXG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkIGN1cnJlbnQgZmlsdGVyXG4gICAgICogQHBhcmFtIG1vZHVsZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBwdWJsaWMgbG9hZEN1cnJlbnRGaWx0ZXIobW9kdWxlOiBzdHJpbmcpOiB2b2lkIHtcblxuICAgICAgICBjb25zdCBhY3RpdmVGaWx0ZXJzUHJlZiA9IHRoaXMubG9hZFByZWZlcmVuY2UobW9kdWxlLCAnY3VycmVudC1maWx0ZXJzJykgPz8gdGhpcy5iYXNlRmlsdGVyTWFwO1xuXG4gICAgICAgIGlmICghYWN0aXZlRmlsdGVyc1ByZWYgfHwgZW1wdHlPYmplY3QoYWN0aXZlRmlsdGVyc1ByZWYpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY3VycmVudFNvcnQgPSB0aGlzLmxvYWRQcmVmZXJlbmNlKG1vZHVsZSwgJ2N1cnJlbnQtc29ydCcpIGFzIFNvcnRpbmdTZWxlY3Rpb247XG4gICAgICAgIGlmICghY3VycmVudFNvcnQgJiYgZW1wdHlPYmplY3QoY3VycmVudFNvcnQpKSB7XG4gICAgICAgICAgICBjdXJyZW50U29ydCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldEZpbHRlcnMoYWN0aXZlRmlsdGVyc1ByZWYsIGZhbHNlLCBjdXJyZW50U29ydCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGFjdGl2ZSBmaWx0ZXJzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZmlsdGVycyB0byBzZXRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJlbG9hZCBmbGFnXG4gICAgICogQHBhcmFtIHNvcnRcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0RmlsdGVycyhmaWx0ZXJzOiBTYXZlZEZpbHRlck1hcCwgcmVsb2FkID0gdHJ1ZSwgc29ydDogU29ydGluZ1NlbGVjdGlvbiA9IG51bGwpOiB2b2lkIHtcblxuICAgICAgICBjb25zdCBmaWx0ZXJLZXkgPSBPYmplY3Qua2V5cyhmaWx0ZXJzKS5zaGlmdCgpO1xuICAgICAgICBjb25zdCBmaWx0ZXIgPSBmaWx0ZXJzW2ZpbHRlcktleV07XG5cbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7Li4udGhpcy5pbnRlcm5hbFN0YXRlLCBhY3RpdmVGaWx0ZXJzOiBkZWVwQ2xvbmUoZmlsdGVycyksIG9wZW5GaWx0ZXI6IGRlZXBDbG9uZShmaWx0ZXIpfSk7XG5cbiAgICAgICAgaWYgKGZpbHRlci5jcml0ZXJpYSkge1xuICAgICAgICAgICAgbGV0IG9yZGVyQnkgPSBmaWx0ZXIuY3JpdGVyaWEub3JkZXJCeSA/PyAnJztcbiAgICAgICAgICAgIGNvbnN0IHNvcnRPcmRlciA9IGZpbHRlci5jcml0ZXJpYS5zb3J0T3JkZXIgPz8gJ2Rlc2MnO1xuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbiA9IHRoaXMubWFwU29ydE9yZGVyKHNvcnRPcmRlcik7XG5cbiAgICAgICAgICAgIGlmIChzb3J0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgb3JkZXJCeSA9IHNvcnQub3JkZXJCeTtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSBzb3J0LnNvcnRPcmRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy51cGRhdGVTb3J0aW5nKG9yZGVyQnksIGRpcmVjdGlvbiwgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTb3J0TG9jYWxTdG9yYWdlKCk7XG5cbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2VhcmNoQ3JpdGVyaWEoZmlsdGVyLmNyaXRlcmlhLCByZWxvYWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVGaWx0ZXJMb2NhbFN0b3JhZ2UoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlRmlsdGVyTG9jYWxTdG9yYWdlKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBtb2R1bGUgPSB0aGlzLmludGVybmFsU3RhdGUubW9kdWxlO1xuXG4gICAgICAgIHRoaXMuc2F2ZVByZWZlcmVuY2UobW9kdWxlLCAnY3VycmVudC1maWx0ZXJzJywgdGhpcy5pbnRlcm5hbFN0YXRlLmFjdGl2ZUZpbHRlcnMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVTb3J0TG9jYWxTdG9yYWdlKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBtb2R1bGUgPSB0aGlzLmludGVybmFsU3RhdGUubW9kdWxlO1xuXG4gICAgICAgIHRoaXMuc2F2ZVByZWZlcmVuY2UobW9kdWxlLCAnY3VycmVudC1zb3J0JywgdGhpcy5zb3J0KTtcbiAgICB9XG5cbiAgIHB1YmxpYyB1cGRhdGVQYWdpbmF0aW9uTG9jYWxTdG9yYWdlKCk6IHZvaWQge1xuICAgICAgICBpZih0aGlzLnBhZ2VLZXkgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb2R1bGUgPSB0aGlzLmludGVybmFsU3RhdGUubW9kdWxlO1xuICAgICAgICBjb25zdCBrZXkgPSBtb2R1bGUgKyAnLScgKyB0aGlzLnBhZ2VLZXkgKyAnLScgKyAnY3VycmVudC1wYWdpbmF0aW9uJztcbiAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldChrZXksIHRoaXMucGFnaW5hdGlvbik7XG4gICAgfVxuXG4gICAgcHVibGljIHNldExvYWRpbmcobG9hZGluZzogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgIC4uLnRoaXMuaW50ZXJuYWxTdGF0ZSxcbiAgICAgICAgICAgIGxvYWRpbmc6IGxvYWRpbmdcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9hZCAvIHJlbG9hZCByZWNvcmRzIHVzaW5nIGN1cnJlbnQgcGFnaW5hdGlvbiBhbmQgY3JpdGVyaWFcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gdXNlQ2FjaGUgaWYgdG8gdXNlIGNhY2hlXG4gICAgICogQHJldHVybnMge29iamVjdH0gT2JzZXJ2YWJsZTxMaXN0Vmlld1N0YXRlPlxuICAgICAqL1xuICAgIHB1YmxpYyBsb2FkKHVzZUNhY2hlID0gdHJ1ZSk6IE9ic2VydmFibGU8UmVjb3JkTGlzdD4ge1xuXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgICAgICAgLi4udGhpcy5pbnRlcm5hbFN0YXRlLFxuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5nZXRSZWNvcmRzKFxuICAgICAgICAgICAgdGhpcy5pbnRlcm5hbFN0YXRlLm1vZHVsZSxcbiAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxTdGF0ZS5jcml0ZXJpYSxcbiAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxTdGF0ZS5zb3J0LFxuICAgICAgICAgICAgdGhpcy5pbnRlcm5hbFN0YXRlLnBhZ2luYXRpb24sXG4gICAgICAgICAgICB1c2VDYWNoZVxuICAgICAgICApLnBpcGUoXG4gICAgICAgICAgICBjYXRjaEVycm9yKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UuYWRkRGFuZ2VyTWVzc2FnZUJ5S2V5KCdMQkxfR0VUX1JFQ09SRF9MSVNUX0VSUk9SJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mKHtcbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkczogW10sXG4gICAgICAgICAgICAgICAgICAgIGNyaXRlcmlhOiBkZWVwQ2xvbmUoaW5pdGlhbFNlYXJjaENyaXRlcmlhKSxcbiAgICAgICAgICAgICAgICAgICAgc29ydDogZGVlcENsb25lKGluaXRpYWxMaXN0U29ydCksXG4gICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IGRlZXBDbG9uZShpbml0aWFsTGlzdFBhZ2luYXRpb24pLFxuICAgICAgICAgICAgICAgICAgICBvcGVuRmlsdGVyOiBkZWVwQ2xvbmUodGhpcy5iYXNlRmlsdGVyKSxcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlRmlsdGVyczogZGVlcENsb25lKHRoaXMuYmFzZUZpbHRlck1hcCksXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbjogZGVlcENsb25lKGluaXRpYWxTZWxlY3Rpb24pLFxuICAgICAgICAgICAgICAgICAgICBtZXRhOiB7fVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB0YXAoXG4gICAgICAgICAgICAgICAgKGRhdGE6IFJlY29yZExpc3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVQYWdlQ291bnQoZGF0YS5yZWNvcmRzLCBkYXRhLnBhZ2luYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuaW50ZXJuYWxTdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY29yZHM6IGRhdGEucmVjb3JkcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IGRhdGEucGFnaW5hdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0YTogZGF0YS5tZXRhID8/IHt9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBzZWFyY2ggY3JpdGVyaWFcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjcml0ZXJpYSB0byBzZXRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJlbG9hZCBmbGFnXG4gICAgICovXG4gICAgcHVibGljIHVwZGF0ZVNlYXJjaENyaXRlcmlhKGNyaXRlcmlhOiBTZWFyY2hDcml0ZXJpYSwgcmVsb2FkID0gdHJ1ZSk6IHZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHsuLi50aGlzLmludGVybmFsU3RhdGUsIGNyaXRlcmlhfSk7XG5cbiAgICAgICAgaWYgKHJlbG9hZCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTZWxlY3Rpb24oU2VsZWN0aW9uU3RhdHVzLk5PTkUpO1xuICAgICAgICAgICAgLy8gUmVzZXQgcGFnaW5hdGlvbiB0byBkZWZhdWx0IGZpcnN0IHBhZ2VcbiAgICAgICAgICAgIHRoaXMucmVzZXRQYWdpbmF0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldCBzZWFyY2ggY3JpdGVyaWFcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJlbG9hZCBmbGFnXG4gICAgICovXG4gICAgcHVibGljIHJlc2V0U2VhcmNoQ3JpdGVyaWEocmVsb2FkID0gdHJ1ZSk6IHZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZVNlYXJjaENyaXRlcmlhKGRlZXBDbG9uZShpbml0aWFsU2VhcmNoQ3JpdGVyaWEpLCByZWxvYWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBjdXJyZW50IGxpc3QgdmlldyBzb3J0aW5nXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3JkZXJCeSB0byBzZXRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc29ydE9yZGVyIHRvIHNldFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVsb2FkIGZsYWdcbiAgICAgKi9cbiAgICB1cGRhdGVTb3J0aW5nKG9yZGVyQnk6IHN0cmluZywgc29ydE9yZGVyOiBTb3J0RGlyZWN0aW9uLCByZWxvYWQgPSB0cnVlKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKHNvcnRPcmRlciA9PT0gU29ydERpcmVjdGlvbi5OT05FKSB7XG4gICAgICAgICAgICBvcmRlckJ5ID0gJyc7XG4gICAgICAgICAgICBzb3J0T3JkZXIgPSBTb3J0RGlyZWN0aW9uLkRFU0M7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzb3J0ID0ge29yZGVyQnksIHNvcnRPcmRlcn0gYXMgU29ydGluZ1NlbGVjdGlvbjtcblxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHsuLi50aGlzLmludGVybmFsU3RhdGUsIHNvcnR9KTtcblxuICAgICAgICBpZiAocmVsb2FkKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWQoZmFsc2UpLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNYXAgc29ydCBvcmRlciB0byBTb3J0RGlyZWN0aW9uIGVudW1cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc29ydE9yZGVyIHRvIG1hcFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IFNvcnREaXJlY3Rpb25cbiAgICAgKi9cbiAgICBwdWJsaWMgbWFwU29ydE9yZGVyKHNvcnRPcmRlcjogc3RyaW5nKTogU29ydERpcmVjdGlvbiB7XG4gICAgICAgIGxldCBkaXJlY3Rpb24gPSBTb3J0RGlyZWN0aW9uLk5PTkU7XG4gICAgICAgIGNvbnN0IHNvcnQgPSBzb3J0T3JkZXIudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICBpZiAoc29ydCA9PT0gJ2FzYycpIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IFNvcnREaXJlY3Rpb24uQVNDXG4gICAgICAgIH0gZWxzZSBpZiAoc29ydCA9PT0gJ2Rlc2MnKSB7XG4gICAgICAgICAgICBkaXJlY3Rpb24gPSBTb3J0RGlyZWN0aW9uLkRFU0NcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkaXJlY3Rpb247XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBwYWdpbmF0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY3VycmVudCB0byBzZXRcbiAgICAgKi9cbiAgICBwdWJsaWMgdXBkYXRlUGFnaW5hdGlvbihjdXJyZW50OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcGFnaW5hdGlvbiA9IHsuLi50aGlzLmludGVybmFsU3RhdGUucGFnaW5hdGlvbiwgY3VycmVudH07XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoey4uLnRoaXMuaW50ZXJuYWxTdGF0ZSwgcGFnaW5hdGlvbn0pO1xuXG4gICAgICAgIHRoaXMubG9hZChmYWxzZSkucGlwZShcbiAgICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICAgICB0YXAoKCkgPT4gdGhpcy51cGRhdGVQYWdpbmF0aW9uTG9jYWxTdG9yYWdlKCkpXG4gICAgICAgICkuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFBhZ2luYXRpb24oY3VycmVudDogbnVtYmVyKTogT2JzZXJ2YWJsZTxSZWNvcmRMaXN0PiAge1xuICAgICAgICBjb25zdCBwYWdpbmF0aW9uID0gey4uLnRoaXMuaW50ZXJuYWxTdGF0ZS5wYWdpbmF0aW9uLCBjdXJyZW50fTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7Li4udGhpcy5pbnRlcm5hbFN0YXRlLCBwYWdpbmF0aW9ufSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubG9hZChmYWxzZSkucGlwZShcbiAgICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICAgICB0YXAoKCkgPT4gdGhpcy51cGRhdGVQYWdpbmF0aW9uTG9jYWxTdG9yYWdlKCkpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IG9wZW4gZmlsdGVyc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGZpbHRlciB0byBzZXRcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0T3BlbkZpbHRlcihmaWx0ZXI6IFNhdmVkRmlsdGVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoey4uLnRoaXMuaW50ZXJuYWxTdGF0ZSwgb3BlbkZpbHRlcjogZGVlcENsb25lKGZpbHRlcil9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldCBhY3RpdmUgZmlsdGVyc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtib29sZWFufSByZWxvYWQgZmxhZ1xuICAgICAqL1xuICAgIHB1YmxpYyByZXNldEZpbHRlcnMocmVsb2FkID0gdHJ1ZSk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgICAgICAgLi4udGhpcy5pbnRlcm5hbFN0YXRlLFxuICAgICAgICAgICAgYWN0aXZlRmlsdGVyczogZGVlcENsb25lKHRoaXMuYmFzZUZpbHRlck1hcCksXG4gICAgICAgICAgICBvcGVuRmlsdGVyOiBkZWVwQ2xvbmUodGhpcy5iYXNlRmlsdGVyKSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jbGVhclNvcnQoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTb3J0TG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIHRoaXMudXBkYXRlRmlsdGVyTG9jYWxTdG9yYWdlKCk7XG5cbiAgICAgICAgdGhpcy51cGRhdGVTZWFyY2hDcml0ZXJpYSh0aGlzLmJhc2VGaWx0ZXIuY3JpdGVyaWEsIHJlbG9hZClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTYXZlIHVpIHVzZXIgcHJlZmVyZW5jZVxuICAgICAqIEBwYXJhbSBtb2R1bGVcbiAgICAgKiBAcGFyYW0gc3RvcmFnZUtleVxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgc2F2ZVByZWZlcmVuY2UobW9kdWxlOiBzdHJpbmcsIHN0b3JhZ2VLZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgICBjb25zdCBwcmVmZXJlbmNlS2V5ID0gdGhpcy5wcmVmZXJlbmNlS2V5ID8/IG51bGw7XG4gICAgICAgIGlmICghcHJlZmVyZW5jZUtleSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qga2V5ID0gYCR7cHJlZmVyZW5jZUtleX0ke3N0b3JhZ2VLZXl9YDtcbiAgICAgICAgdGhpcy5wcmVmZXJlbmNlc1N0b3JlLnNldFVpKG1vZHVsZSwga2V5LCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9hZCB1aSB1c2VyIHByZWZlcmVuY2VcbiAgICAgKiBAcGFyYW0gbW9kdWxlXG4gICAgICogQHBhcmFtIHN0b3JhZ2VLZXlcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGxvYWRQcmVmZXJlbmNlKG1vZHVsZTogc3RyaW5nLCBzdG9yYWdlS2V5OiBzdHJpbmcpOiBhbnkge1xuXG4gICAgICAgIGNvbnN0IHByZWZlcmVuY2VLZXkgPSB0aGlzLnByZWZlcmVuY2VLZXkgPz8gbnVsbDtcbiAgICAgICAgaWYgKCFwcmVmZXJlbmNlS2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBrZXkgPSBgJHtwcmVmZXJlbmNlS2V5fSR7c3RvcmFnZUtleX1gO1xuICAgICAgICByZXR1cm4gdGhpcy5wcmVmZXJlbmNlc1N0b3JlLmdldFVpKG1vZHVsZSwga2V5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldC9DbGVhciB0aGUgcGFnaW5hdGlvblxuICAgICAqL1xuICAgIHB1YmxpYyByZXNldFBhZ2luYXRpb24oKTogdm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlUGFnaW5hdGlvbigwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhciBvYnNlcnZhYmxlIGNhY2hlXG4gICAgICovXG4gICAgcHVibGljIGNsZWFyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNhY2hlJCA9IG51bGw7XG4gICAgICAgIHRoaXMuc3RvcmUudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5wcmVmZXJlbmNlc1N1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhckF1dGhCYXNlZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdGlvbiBwdWJsaWMgYXBpXG4gICAgICovXG5cbiAgICBnZXRTZWxlY3Rpb25TdGF0dXMoKTogT2JzZXJ2YWJsZTxTZWxlY3Rpb25TdGF0dXM+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRTdGF0dXMkO1xuICAgIH1cblxuICAgIGdldFNlbGVjdGVkQ291bnQoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRDb3VudCQ7XG4gICAgfVxuXG4gICAgdXBkYXRlU2VsZWN0aW9uKHN0YXRlOiBTZWxlY3Rpb25TdGF0dXMpOiB2b2lkIHtcbiAgICAgICAgaWYgKHN0YXRlID09PSBTZWxlY3Rpb25TdGF0dXMuTk9ORSkge1xuICAgICAgICAgICAgdGhpcy5jbGVhclNlbGVjdGlvbigpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXRlID09PSBTZWxlY3Rpb25TdGF0dXMuQUxMKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdEFsbCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXRlID09PSBTZWxlY3Rpb25TdGF0dXMuUEFHRSkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RQYWdlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGVhclNlbGVjdGlvbigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICAgICAgICAuLi50aGlzLmludGVybmFsU3RhdGUsXG4gICAgICAgICAgICBzZWxlY3Rpb246IGRlZXBDbG9uZShpbml0aWFsU2VsZWN0aW9uKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjbGVhclNvcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgICAgICAgLi4udGhpcy5pbnRlcm5hbFN0YXRlLFxuICAgICAgICAgICAgc29ydDogZGVlcENsb25lKGluaXRpYWxMaXN0U29ydClcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2VsZWN0QWxsKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB0b3RhbCA9IHRoaXMuaW50ZXJuYWxTdGF0ZS5wYWdpbmF0aW9uLnRvdGFsO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgIC4uLnRoaXMuaW50ZXJuYWxTdGF0ZSxcbiAgICAgICAgICAgIHNlbGVjdGlvbjoge1xuICAgICAgICAgICAgICAgIGFsbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzdGF0dXM6IFNlbGVjdGlvblN0YXR1cy5BTEwsXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IHt9LFxuICAgICAgICAgICAgICAgIGNvdW50OiB0b3RhbFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzZWxlY3RQYWdlKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzZWxlY3RlZCA9IHsuLi50aGlzLmludGVybmFsU3RhdGUuc2VsZWN0aW9uLnNlbGVjdGVkfTtcblxuICAgICAgICBpZiAodGhpcy5pbnRlcm5hbFN0YXRlLnJlY29yZHMgJiYgdGhpcy5pbnRlcm5hbFN0YXRlLnJlY29yZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmludGVybmFsU3RhdGUucmVjb3Jkcy5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgJiYgdmFsdWUuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRbdmFsdWUuaWRdID0gdmFsdWUuaWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgIC4uLnRoaXMuaW50ZXJuYWxTdGF0ZSxcbiAgICAgICAgICAgIHNlbGVjdGlvbjoge1xuICAgICAgICAgICAgICAgIGFsbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBTZWxlY3Rpb25TdGF0dXMuU09NRSxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZCxcbiAgICAgICAgICAgICAgICBjb3VudDogT2JqZWN0LmtleXMoc2VsZWN0ZWQpLmxlbmd0aFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0b2dnbGVTZWxlY3Rpb24oaWQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBkZWVwQ2xvbmUodGhpcy5pbnRlcm5hbFN0YXRlLnNlbGVjdGlvbik7XG5cbiAgICAgICAgaWYgKHNlbGVjdGlvbi5zZWxlY3RlZFtpZF0pIHtcbiAgICAgICAgICAgIGRlbGV0ZSBzZWxlY3Rpb24uc2VsZWN0ZWRbaWRdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZWN0aW9uLnNlbGVjdGVkW2lkXSA9IGlkO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZWN0aW9uLmNvdW50ID0gT2JqZWN0LmtleXMoc2VsZWN0aW9uLnNlbGVjdGVkKS5sZW5ndGg7XG5cbiAgICAgICAgaWYgKHNlbGVjdGlvbi5jb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgc2VsZWN0aW9uLnN0YXR1cyA9IFNlbGVjdGlvblN0YXR1cy5OT05FO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZWN0aW9uLnN0YXR1cyA9IFNlbGVjdGlvblN0YXR1cy5TT01FO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICAgICAgICAuLi50aGlzLmludGVybmFsU3RhdGUsXG4gICAgICAgICAgICBzZWxlY3Rpb25cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFnaW5hdGlvbiBQdWJsaWMgQVBJXG4gICAgICovXG5cbiAgICBnZXRQYWdpbmF0aW9uQ291bnQoKTogT2JzZXJ2YWJsZTxQYWdpbmF0aW9uQ291bnQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFnaW5hdGlvbiQucGlwZShtYXAocGFnaW5hdGlvbiA9PiAoe1xuICAgICAgICAgICAgcGFnZUZpcnN0OiBwYWdpbmF0aW9uLnBhZ2VGaXJzdCxcbiAgICAgICAgICAgIHBhZ2VMYXN0OiBwYWdpbmF0aW9uLnBhZ2VMYXN0LFxuICAgICAgICAgICAgdG90YWw6IHBhZ2luYXRpb24udG90YWxcbiAgICAgICAgfSBhcyBQYWdpbmF0aW9uQ291bnQpKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gICAgfVxuXG4gICAgZ2V0UGFnaW5hdGlvbigpOiBQYWdpbmF0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmUudmFsdWUucGFnaW5hdGlvbjtcbiAgICB9XG5cbiAgICBnZXRNZXRhKCk6IE9iamVjdE1hcCB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlLnZhbHVlLm1ldGE7XG4gICAgfVxuXG4gICAgY2hhbmdlUGFnZShwYWdlOiBQYWdlU2VsZWN0aW9uKTogdm9pZCB7XG4gICAgICAgIGxldCBwYWdlVG9Mb2FkID0gMDtcblxuICAgICAgICBjb25zdCBwYWdlTWFwID0ge307XG4gICAgICAgIHBhZ2VNYXBbUGFnZVNlbGVjdGlvbi5GSVJTVF0gPSAwO1xuICAgICAgICBwYWdlTWFwW1BhZ2VTZWxlY3Rpb24uUFJFVklPVVNdID0gdGhpcy5pbnRlcm5hbFN0YXRlLnBhZ2luYXRpb24ucHJldmlvdXM7XG4gICAgICAgIHBhZ2VNYXBbUGFnZVNlbGVjdGlvbi5ORVhUXSA9IHRoaXMuaW50ZXJuYWxTdGF0ZS5wYWdpbmF0aW9uLm5leHQ7XG4gICAgICAgIHBhZ2VNYXBbUGFnZVNlbGVjdGlvbi5MQVNUXSA9IHRoaXMuaW50ZXJuYWxTdGF0ZS5wYWdpbmF0aW9uLmxhc3Q7XG5cbiAgICAgICAgaWYgKHBhZ2UgaW4gcGFnZU1hcCAmJiBwYWdlTWFwW3BhZ2VdID49IDApIHtcbiAgICAgICAgICAgIHBhZ2VUb0xvYWQgPSBwYWdlTWFwW3BhZ2VdO1xuXG4gICAgICAgICAgICBpZiAoTnVtYmVyKHBhZ2VUb0xvYWQpID4gdGhpcy5pbnRlcm5hbFN0YXRlLnBhZ2luYXRpb24ubGFzdCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBhZ2VUb0xvYWQgPCAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBhZ2luYXRpb24ocGFnZVRvTG9hZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRQYWdlKHBhZ2U6IFBhZ2VTZWxlY3Rpb24sIGlzUGFnaW5hdGlvbkxvYWRNb3JlOiBib29sZWFuKTogT2JzZXJ2YWJsZTxSZWNvcmRMaXN0PiB7XG4gICAgICAgIGxldCBwYWdlVG9Mb2FkID0gMDtcblxuICAgICAgICBjb25zdCBwYWdlTWFwID0ge307XG4gICAgICAgIHBhZ2VNYXBbUGFnZVNlbGVjdGlvbi5GSVJTVF0gPSAwO1xuICAgICAgICBwYWdlTWFwW1BhZ2VTZWxlY3Rpb24uUFJFVklPVVNdID0gdGhpcy5pbnRlcm5hbFN0YXRlLnBhZ2luYXRpb24ucHJldmlvdXM7XG4gICAgICAgIHBhZ2VNYXBbUGFnZVNlbGVjdGlvbi5ORVhUXSA9IHRoaXMuaW50ZXJuYWxTdGF0ZS5wYWdpbmF0aW9uLm5leHQ7XG4gICAgICAgIHBhZ2VNYXBbUGFnZVNlbGVjdGlvbi5MQVNUXSA9IHRoaXMuaW50ZXJuYWxTdGF0ZS5wYWdpbmF0aW9uLmxhc3Q7XG5cbiAgICAgICAgaWYgKHBhZ2UgaW4gcGFnZU1hcCAmJiBwYWdlTWFwW3BhZ2VdID49IDApIHtcbiAgICAgICAgICAgIHBhZ2VUb0xvYWQgPSBwYWdlTWFwW3BhZ2VdO1xuXG4gICAgICAgICAgICBpZiAoTnVtYmVyKHBhZ2VUb0xvYWQpID4gdGhpcy5pbnRlcm5hbFN0YXRlLnBhZ2luYXRpb24ubGFzdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvZih7fSBhcyBSZWNvcmRMaXN0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBhZ2VUb0xvYWQgPCAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mKHt9IGFzIFJlY29yZExpc3QpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihpc1BhZ2luYXRpb25Mb2FkTW9yZSkge1xuICAgICAgICAgICAgICAgIHBhZ2VUb0xvYWQgPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRQYWdpbmF0aW9uKHBhZ2VUb0xvYWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9mKHt9IGFzIFJlY29yZExpc3QpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IFBhZ2luYXRpb24gcGFnZSBzaXplXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcGFnZVNpemUgdG8gc2V0XG4gICAgICovXG4gICAgcHVibGljIHNldFBhZ2VTaXplKHBhZ2VTaXplOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcGFnaW5hdGlvbiA9IHsuLi50aGlzLmludGVybmFsU3RhdGUucGFnaW5hdGlvbiwgcGFnZVNpemV9O1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHsuLi50aGlzLmludGVybmFsU3RhdGUsIHBhZ2luYXRpb259KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgUGFnaW5hdGlvbiBwYWdlIHNpemVcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0UGFnZVNpemUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXM/LmludGVybmFsU3RhdGU/LnBhZ2luYXRpb24/LnBhZ2VTaXplID8/IDEwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludGVybmFsIEFQSVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogU3Vic2NyaWJlIHRvIHBhZ2Ugc2l6ZSBjaGFuZ2VzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFnZVNpemVDb25maWdLZXkga2V5XG4gICAgICovXG4gICAgcHJvdGVjdGVkIHdhdGNoUGFnZVNpemUocGFnZVNpemVDb25maWdLZXk6IHN0cmluZyk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IHBhZ2VTaXplUHJlZmVyZW5jZSA9IHRoaXMucHJlZmVyZW5jZXNTdG9yZS5nZXRVc2VyUHJlZmVyZW5jZShwYWdlU2l6ZUNvbmZpZ0tleSk7XG4gICAgICAgIGNvbnN0IHBhZ2VTaXplQ29uZmlnID0gdGhpcy5jb25maWdTdG9yZS5nZXRDb25maWdWYWx1ZShwYWdlU2l6ZUNvbmZpZ0tleSk7XG4gICAgICAgIHRoaXMuZGV0ZXJtaW5lUGFnZVNpemUocGFnZVNpemVQcmVmZXJlbmNlLCBwYWdlU2l6ZUNvbmZpZyk7XG5cbiAgICAgICAgdGhpcy5wcmVmZXJlbmNlc1N1YiA9IHRoaXMuY29uZmlnU3RvcmUuY29uZmlncyQucGlwZShcbiAgICAgICAgICAgIGNvbWJpbmVMYXRlc3RXaXRoKHRoaXMucHJlZmVyZW5jZXNTdG9yZS51c2VyUHJlZmVyZW5jZXMkKSxcbiAgICAgICAgICAgICAgICB0YXAoKFtjb25maWdzLCBwcmVmZXJlbmNlc106IFtTeXN0ZW1Db25maWdNYXAsIFVzZXJQcmVmZXJlbmNlc10pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gcGFnZVNpemVDb25maWdLZXk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpemVQcmVmZXJlbmNlID0gKHByZWZlcmVuY2VzICYmIHByZWZlcmVuY2VzW2tleV0pIHx8IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpemVDb25maWcgPSAoY29uZmlncyAmJiBjb25maWdzW2tleV0gJiYgY29uZmlnc1trZXldLnZhbHVlKSB8fCBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGV0ZXJtaW5lUGFnZVNpemUoc2l6ZVByZWZlcmVuY2UsIHNpemVDb25maWcpO1xuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICkuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lIHBhZ2Ugc2l6ZSB0byB1c2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7fSBwYWdlU2l6ZVByZWZlcmVuY2UgdG8gdXNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhZ2VTaXplQ29uZmlnIHRvIHVzZVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBkZXRlcm1pbmVQYWdlU2l6ZShwYWdlU2l6ZVByZWZlcmVuY2U6IGFueSwgcGFnZVNpemVDb25maWc6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBsZXQgc2l6ZSA9IDIwO1xuXG4gICAgICAgIGlmIChwYWdlU2l6ZVByZWZlcmVuY2UpIHtcbiAgICAgICAgICAgIHNpemUgPSBwYWdlU2l6ZVByZWZlcmVuY2U7XG4gICAgICAgIH0gZWxzZSBpZiAocGFnZVNpemVDb25maWcpIHtcbiAgICAgICAgICAgIHNpemUgPSBwYXJzZUludChwYWdlU2l6ZUNvbmZpZywgMTApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRQYWdlU2l6ZShzaXplKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIHN0YXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gc3RhdGUgdG8gc2V0XG4gICAgICovXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVN0YXRlKHN0YXRlOiBSZWNvcmRMaXN0U3RhdGUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdG9yZS5uZXh0KHRoaXMuaW50ZXJuYWxTdGF0ZSA9IHN0YXRlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgcGFnZSBjb3VudFxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlY29yZHMgbGlzdFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwYWdpbmF0aW9uIGluZm9cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgY2FsY3VsYXRlUGFnZUNvdW50KHJlY29yZHM6IFJlY29yZFtdLCBwYWdpbmF0aW9uOiBQYWdpbmF0aW9uKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHJlY29yZENvdW50ID0gKHJlY29yZHMgJiYgcmVjb3Jkcy5sZW5ndGgpIHx8IDA7XG4gICAgICAgIGxldCBwYWdlRmlyc3QgPSAwO1xuICAgICAgICBsZXQgcGFnZUxhc3QgPSAwO1xuXG4gICAgICAgIGlmIChyZWNvcmRDb3VudCA+IDApIHtcbiAgICAgICAgICAgIHBhZ2VGaXJzdCA9IHBhZ2luYXRpb24uY3VycmVudCArIDE7XG4gICAgICAgICAgICBwYWdlTGFzdCA9IHBhZ2luYXRpb24uY3VycmVudCArIHJlY29yZENvdW50O1xuICAgICAgICB9XG4gICAgICAgIHBhZ2luYXRpb24ucGFnZUZpcnN0ID0gcGFnZUZpcnN0O1xuICAgICAgICBwYWdpbmF0aW9uLnBhZ2VMYXN0ID0gcGFnZUxhc3Q7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHJlY29yZHMgY2FjaGVkIE9ic2VydmFibGUgb3IgY2FsbCB0aGUgYmFja2VuZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1vZHVsZSB0byB1c2VcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY3JpdGVyaWEgdG8gdXNlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHNvcnQgdG8gdXNlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHBhZ2luYXRpb24gdG8gdXNlXG4gICAgICogQHBhcmFtIHtib29sZWFufSB1c2VDYWNoZSBpZiB0byB1c2UgY2FjaGVcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBPYnNlcnZhYmxlPGFueT5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0UmVjb3JkcyhcbiAgICAgICAgbW9kdWxlOiBzdHJpbmcsXG4gICAgICAgIGNyaXRlcmlhOiBTZWFyY2hDcml0ZXJpYSxcbiAgICAgICAgc29ydDogU29ydGluZ1NlbGVjdGlvbixcbiAgICAgICAgcGFnaW5hdGlvbjogUGFnaW5hdGlvbixcbiAgICAgICAgdXNlQ2FjaGUgPSB0cnVlXG4gICAgKTogT2JzZXJ2YWJsZTxSZWNvcmRMaXN0PiB7XG5cbiAgICAgICAgaWYgKHRoaXMuY2FjaGUkID09IG51bGwgfHwgdXNlQ2FjaGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLmNhY2hlJCA9IHRoaXMubGlzdEdRTC5nZXQobW9kdWxlLCBjcml0ZXJpYSwgc29ydCwgcGFnaW5hdGlvbikucGlwZShcbiAgICAgICAgICAgICAgICBzaGFyZVJlcGxheSgxKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZSQ7XG4gICAgfVxufVxuIl19