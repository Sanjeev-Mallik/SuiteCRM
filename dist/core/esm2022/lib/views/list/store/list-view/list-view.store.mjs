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
import { isArray, isEmpty, union } from 'lodash-es';
import { deepClone } from '../../../../common/utils/object-utils';
import { emptyObject } from '../../../../common/utils/object-utils';
import { isTrue } from '../../../../common/utils/value-utils';
import { BehaviorSubject, combineLatestWith } from 'rxjs';
import { distinctUntilChanged, map, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationStore } from '../../../../store/navigation/navigation.store';
import { MetadataStore } from '../../../../store/metadata/metadata.store.service';
import { LanguageStore } from '../../../../store/language/language.store';
import { ModuleNavigation } from '../../../../services/navigation/module-navigation/module-navigation.service';
import { MessageService } from '../../../../services/message/message.service';
import { RecordListStoreFactory } from '../../../../store/record-list/record-list.store.factory';
import { AppStateStore } from '../../../../store/app-state/app-state.store';
import { ViewStore } from '../../../../store/view/view.store';
import { LocalStorageService } from '../../../../services/local-storage/local-storage.service';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ColumnChooserComponent } from "../../../../components/columnchooser/columnchooser.component";
import { FilterListStoreFactory } from '../../../../store/saved-filters/filter-list.store.factory';
import { ConfirmationModalService } from '../../../../services/modals/confirmation-modal.service';
import { UserPreferenceStore } from '../../../../store/user-preference/user-preference.store';
import { ListViewUrlQueryService } from '../../services/list-view-url-query.service';
import { SystemConfigStore } from "../../../../store/system-config/system-config.store";
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/app-state/app-state.store";
import * as i2 from "../../../../store/language/language.store";
import * as i3 from "../../../../store/navigation/navigation.store";
import * as i4 from "../../../../services/navigation/module-navigation/module-navigation.service";
import * as i5 from "../../../../store/metadata/metadata.store.service";
import * as i6 from "../../../../services/message/message.service";
import * as i7 from "../../../../store/record-list/record-list.store.factory";
import * as i8 from "@ng-bootstrap/ng-bootstrap";
import * as i9 from "../../../../store/saved-filters/filter-list.store.factory";
import * as i10 from "../../../../services/modals/confirmation-modal.service";
import * as i11 from "../../../../store/user-preference/user-preference.store";
import * as i12 from "@angular/router";
import * as i13 from "../../services/list-view-url-query.service";
import * as i14 from "../../../../services/local-storage/local-storage.service";
import * as i15 from "../../../../store/system-config/system-config.store";
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
const initialState = {
    module: '',
    widgets: false,
    actionPanel: '',
    showSidebarWidgets: false,
    recordPanelConfig: {},
    activeFilters: deepClone(initialFilters),
    openFilter: deepClone(initialFilter)
};
export class ListViewStore extends ViewStore {
    constructor(appStateStore, languageStore, navigationStore, moduleNavigation, metadataStore, message, listStoreFactory, modalService, filterListStoreFactory, confirmation, preferences, route, listViewUrlQueryService, localStorageService, systemConfigsStore, userPreferences) {
        super(appStateStore, languageStore, navigationStore, moduleNavigation, metadataStore);
        this.appStateStore = appStateStore;
        this.languageStore = languageStore;
        this.navigationStore = navigationStore;
        this.moduleNavigation = moduleNavigation;
        this.metadataStore = metadataStore;
        this.message = message;
        this.listStoreFactory = listStoreFactory;
        this.modalService = modalService;
        this.filterListStoreFactory = filterListStoreFactory;
        this.confirmation = confirmation;
        this.preferences = preferences;
        this.route = route;
        this.listViewUrlQueryService = listViewUrlQueryService;
        this.localStorageService = localStorageService;
        this.systemConfigsStore = systemConfigsStore;
        this.userPreferences = userPreferences;
        this.pageKey = 'listview';
        /** Internal Properties */
        this.cache$ = null;
        this.internalState = deepClone(initialState);
        this.store = new BehaviorSubject(this.internalState);
        this.state$ = this.store.asObservable();
        this.subs = [];
        this.recordList = this.listStoreFactory.create();
        this.columns$ = metadataStore.listViewColumns$;
        this.lineActions$ = metadataStore.listViewLineActions$;
        this.tableActions$ = metadataStore.listViewTableActions$;
        this.records$ = this.recordList.records$;
        this.criteria$ = this.recordList.criteria$;
        this.context$ = this.recordList.criteria$.pipe(map(() => this.getViewContext()));
        this.sort$ = this.recordList.sort$;
        this.pagination$ = this.recordList.pagination$;
        this.selection$ = this.recordList.selection$;
        this.selectedCount$ = this.recordList.selectedCount$;
        this.selectedStatus$ = this.recordList.selectedStatus$;
        this.loading$ = this.recordList.loading$;
        this.moduleName$ = this.state$.pipe(map(state => state.module), distinctUntilChanged());
        this.widgets$ = this.state$.pipe(map(state => state.widgets), distinctUntilChanged());
        this.showSidebarWidgets$ = this.state$.pipe(map(state => state.showSidebarWidgets));
        this.displayFilters$ = this.state$.pipe(map(state => state.actionPanel === 'filters'), distinctUntilChanged());
        this.actionPanel$ = this.state$.pipe(map(state => state.actionPanel), distinctUntilChanged());
        this.activeFilters$ = this.state$.pipe(map(state => state.activeFilters), distinctUntilChanged());
        this.openFilter$ = this.state$.pipe(map(state => state.openFilter), distinctUntilChanged());
        const data$ = this.records$.pipe(combineLatestWith(this.criteria$, this.pagination$, this.selection$, this.loading$), map(([records, criteria, pagination, selection, loading]) => {
            this.data = { records, criteria, pagination, selection, loading };
            return this.data;
        }));
        this.vm$ = data$.pipe(combineLatestWith(this.appData$, this.metadata$), map(([data, appData, metadata]) => {
            this.vm = { data, appData, metadata };
            return this.vm;
        }));
        this.columns = new BehaviorSubject([]);
        this.columns$ = this.columns.asObservable();
        this.initDataUpdateState();
        this.initDataSetUpdatedState();
        this.filterList = this.filterListStoreFactory.create();
        this.recordList.pageKey = this.pageKey;
    }
    get actionPanel() {
        return this.internalState.actionPanel;
    }
    get showFilters() {
        return this.internalState.actionPanel === 'filters';
    }
    set showFilters(show) {
        this.updateState({
            ...this.internalState,
            actionPanel: show ? 'filters' : ''
        });
    }
    get widgets() {
        return this.internalState.widgets;
    }
    set widgets(show) {
        this.updateState({
            ...this.internalState,
            widgets: show
        });
    }
    get showSidebarWidgets() {
        return this.internalState.showSidebarWidgets;
    }
    set showSidebarWidgets(show) {
        this.savePreference(this.getModuleName(), 'show-sidebar-widgets', show);
        this.updateState({
            ...this.internalState,
            showSidebarWidgets: show
        });
    }
    get recordPanelConfig() {
        return this.internalState.recordPanelConfig;
    }
    isRecordPanelOpen() {
        return this.internalState.actionPanel === 'recordPanel';
    }
    openRecordPanel(config) {
        this.updateState({
            ...this.internalState,
            actionPanel: 'recordPanel',
            recordPanelConfig: config
        });
    }
    closeRecordPanel() {
        this.updateState({
            ...this.internalState,
            actionPanel: '',
            recordPanelConfig: {}
        });
    }
    getModuleName() {
        return this.internalState.module;
    }
    getViewContext() {
        const context = {
            module: this.getModuleName(),
        };
        context.criteria = this.recordList.criteria;
        context.sort = this.recordList.sort;
        return context;
    }
    /**
     * Clean destroy
     */
    destroy() {
        this.clear();
        this.subs.forEach(sub => sub.unsubscribe());
    }
    /**
     * get active filters
     *
     * @returns {object} active filters
     */
    get activeFilters() {
        return deepClone(this.internalState.activeFilters);
    }
    /**
     * Clear observable cache
     */
    clear() {
        this.cache$ = null;
        this.updateState(deepClone(initialState));
        this.recordList.clear();
    }
    clearAuthBased() {
        this.clear();
        this.recordList.clearAuthBased();
    }
    /**
     * Initial list records load if not cached and update state.
     * Returns observable to be used in resolver if needed
     *
     * @param {string} module to use
     * @returns {object} Observable<any>
     */
    init(module) {
        this.internalState.module = module;
        this.recordList.init(module, false);
        this.filterList.init(module);
        this.filterList.load(false).pipe(take(1)).subscribe();
        this.calculateShowWidgets();
        this.recordList.sort = {
            orderBy: this?.metadata?.listView?.orderBy ?? '',
            sortOrder: this?.metadata?.listView?.sortOrder ?? 'NONE'
        };
        const queryParams = this.route?.snapshot?.queryParams ?? {};
        let filterType = '';
        if (isTrue(queryParams['query'])) {
            filterType = 'query';
        }
        switch (filterType) {
            case 'query':
                this.loadQueryFilter(module, queryParams);
                break;
            default:
                this.loadCurrentFilter(module);
                this.loadCurrentSort(module);
        }
        this.loadCurrentDisplayedColumns();
        const paginationType = this.userPreferences.getUserPreference('listview_pagination_type') ?? this.systemConfigsStore.getConfigValue('listview_pagination_type');
        const currentPaginationType = this.getCurrentPaginationType(module);
        this.setCurrentPaginationType(module, paginationType);
        if (queryParams['keepPagination'] && currentPaginationType === paginationType) {
            this.loadCurrentPagination(module);
        }
        return this.load();
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
     * Toggle Quick filter
     *
     * @param filter
     * @param {boolean} reload flag
     */
    toggleQuickFilter(filter, reload = true) {
        let activeFilters = this.getActiveQuickFilters();
        const isActive = Object.keys(activeFilters).some(key => key === filter.key);
        if (isActive) {
            let { [filter.key]: removedFilters, ...newFilters } = activeFilters;
            activeFilters = newFilters;
        }
        else {
            activeFilters = {};
            activeFilters[filter.key] = filter;
        }
        if (emptyObject(activeFilters)) {
            this.resetFilters(reload);
            return;
        }
        if (Object.keys(activeFilters).length === 1) {
            this.setFilters(activeFilters);
            return;
        }
        this.updateState({
            ...this.internalState,
            activeFilters: deepClone(activeFilters),
        });
        this.updateSearchCriteria(reload);
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
            const sortOrder = filter.criteria.sortOrder ?? '';
            let direction = this.recordList.mapSortOrder(sortOrder);
            if (sort !== null) {
                orderBy = sort.orderBy;
                direction = sort.sortOrder;
            }
            this.recordList.updateSorting(orderBy, direction, false);
            this.updateSortLocalStorage();
        }
        this.updateSearchCriteria(reload);
    }
    /**
     * Update filters
     *
     * @param {object} filter to set
     */
    addSavedFilter(filter) {
        const newState = { ...this.internalState };
        const activeFilters = this.activeFilters;
        if (filter.key && activeFilters[filter.key]) {
            activeFilters[filter.key] = filter;
            newState.activeFilters = activeFilters;
        }
        newState.openFilter = filter;
        this.filterList.addFilter(filter);
        this.updateState(newState);
    }
    /**
     * Update filters
     *
     * @param {object} filter to set
     */
    removeSavedFilter(filter) {
        if (!filter || !filter.key) {
            return;
        }
        this.filterList.removeFilter(filter);
        const newState = { ...this.internalState };
        if (newState.openFilter && newState.openFilter.key === filter.key) {
            this.resetFilters(true);
        }
    }
    /**
     * Reset active filters
     *
     * @param {boolean} reload flag
     */
    resetFilters(reload = true) {
        this.updateState({
            ...this.internalState,
            activeFilters: deepClone(initialFilters),
            openFilter: deepClone(initialFilter),
        });
        this.recordList.clearSort();
        this.updateSortLocalStorage();
        this.updateSearchCriteria(reload);
    }
    /**
     * Update the search criteria
     *
     * @param {boolean} reload flag
     */
    updateSearchCriteria(reload = true) {
        const filters = { ...this.internalState.activeFilters };
        let criteria = this.mergeCriteria(filters);
        this.recordList.updateSearchCriteria(criteria, reload);
        this.updateFilterLocalStorage();
    }
    updateFilterLocalStorage() {
        const module = this.internalState.module;
        this.savePreference(module, 'current-filters', this.internalState.activeFilters);
    }
    updateSortLocalStorage() {
        const module = this.internalState.module;
        this.savePreference(module, 'current-sort', this.recordList.sort);
    }
    updatePaginationLocalStorage() {
        const module = this.internalState.module;
        const key = module + '-' + this.getPreferenceKey('current-pagination');
        this.localStorageService.set(key, this.recordList.pagination);
    }
    /**
     * Updated displayed columns' ui user preference
     * @param display
     */
    updateDisplayedColumnsPreference(display) {
        const module = this.internalState.module;
        this.savePreference(module, 'displayed-columns', display);
    }
    /**
     * Get displayed columns' ui user preference
     */
    getDisplayedColumnsPreference() {
        const module = this.internalState.module;
        const displayedColumns = this.loadPreference(module, 'displayed-columns');
        if (!isArray(displayedColumns) || !displayedColumns || !displayedColumns.length) {
            return null;
        }
        return displayedColumns;
    }
    triggerDataUpdate() {
        this.dataUpdateState.next(true);
    }
    /**
     * Load / reload records using current pagination and criteria
     *
     * @param {boolean} useCache if to use cache
     * @returns {object} Observable<ListViewState>
     */
    load(useCache = true) {
        const module = this.internalState.module;
        this.savePreference(module, 'current-filters', this.internalState.activeFilters);
        this.savePreference(module, 'current-sort', this.recordList.sort);
        this.updatePaginationLocalStorage();
        return this.recordList.load(useCache);
    }
    /**
     * Internal API
     */
    /**
     * Update the state
     *
     * @param {object} state to set
     */
    updateState(state) {
        this.store.next(this.internalState = state);
    }
    /**
     * Get Active quick filters
     * @protected
     */
    getActiveQuickFilters() {
        let { 'default': defaultFilter, ...currentQuickFilters } = this.activeFilters;
        let activeFilters = {};
        Object.keys(currentQuickFilters).forEach(key => {
            const activeFilter = currentQuickFilters[key] ?? null;
            if (!key) {
                return;
            }
            const isQuickFilter = activeFilter?.attributes?.quick_filter ?? false;
            if (isQuickFilter) {
                activeFilters[key] = activeFilter;
            }
        });
        return activeFilters;
    }
    /**
     * Merge Criteria
     * @protected
     */
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
    /**
     * Open columns chooser modal
     */
    openColumnChooserDialog() {
        const modalRef = this.modalService.open(ColumnChooserComponent, {
            ariaLabelledBy: 'modal-basic-title',
            centered: true,
            size: 'lg',
            windowClass: 'column-chooser-modal'
        });
        const displayedColumns = this.columns.getValue().filter(function (col) {
            return !col.hasOwnProperty('default')
                || (col.hasOwnProperty('default') && col.default === true);
        });
        const hiddenColumns = this.columns.getValue().filter(function (col) {
            return col.hasOwnProperty('default') && col.default === false;
        });
        modalRef.componentInstance.displayed = displayedColumns;
        modalRef.componentInstance.hidden = hiddenColumns;
        modalRef.result.then((result) => {
            if (!result.displayed || !result.hidden) {
                return;
            }
            let allColumns = [];
            const selectedDisplayColumns = result.displayed;
            const selectedHideColumns = result.hidden;
            selectedDisplayColumns.forEach(function (column) {
                column.default = true;
            });
            selectedHideColumns.forEach(function (column) {
                column.default = false;
            });
            allColumns.push(...selectedDisplayColumns, ...selectedHideColumns);
            this.columns.next(allColumns);
            const displayedCols = selectedDisplayColumns.map(col => col.name);
            this.updateDisplayedColumnsPreference(displayedCols);
        });
    }
    /**
     * Calculate if widgets are to display
     */
    calculateShowWidgets() {
        let show = false;
        const meta = this.metadataStore.get() || {};
        const listViewMeta = meta.listView || {};
        const sidebarWidgetsConfig = listViewMeta.sidebarWidgets || [];
        if (sidebarWidgetsConfig && sidebarWidgetsConfig.length > 0) {
            show = true;
        }
        const showSidebarWidgets = this.loadPreference(this.getModuleName(), 'show-sidebar-widgets') ?? null;
        if (showSidebarWidgets !== null) {
            this.showSidebarWidgets = showSidebarWidgets;
        }
        else {
            this.showSidebarWidgets = show;
        }
        this.widgets = show;
    }
    /**
     * Build ui user preference key
     * @param storageKey
     * @protected
     */
    getPreferenceKey(storageKey) {
        return this.pageKey + '-' + storageKey;
    }
    /**
     * Save ui user preference
     * @param module
     * @param storageKey
     * @param value
     * @protected
     */
    savePreference(module, storageKey, value) {
        this.preferences.setUi(module, this.getPreferenceKey(storageKey), value);
    }
    /**
     * Load ui user preference
     * @param module
     * @param storageKey
     * @protected
     */
    loadPreference(module, storageKey) {
        return this.preferences.getUi(module, this.getPreferenceKey(storageKey));
    }
    /**
     * Load current filter
     * @param module
     * @protected
     */
    loadCurrentFilter(module) {
        const activeFiltersPref = this.loadPreference(module, 'current-filters') ?? {};
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
     * Load current filter
     * @param module
     * @param queryParams
     * @protected
     */
    loadQueryFilter(module, queryParams) {
        const orderBy = queryParams['orderBy'] ?? '';
        const sortOrder = queryParams['sortOrder'] ?? '';
        const direction = this.recordList.mapSortOrder(sortOrder);
        const filter = this.listViewUrlQueryService.buildUrlQueryBasedFilter(module, this.internalState.activeFilters.default, queryParams);
        if (isEmpty(filter)) {
            return;
        }
        const filters = { 'default': filter };
        this.updateState({
            ...this.internalState,
            activeFilters: deepClone(filters),
            openFilter: deepClone(filter)
        });
        this.recordList.updateSorting(orderBy, direction, false);
        this.recordList.updateSearchCriteria(filter.criteria, false);
    }
    /**
     * Load current sorting
     * @param module
     * @protected
     */
    loadCurrentSort(module) {
        const currentSort = this.loadPreference(module, 'current-sort');
        if (!currentSort || emptyObject(currentSort)) {
            return;
        }
        this.recordList.sort = currentSort;
    }
    /**
     * Load current pagination
     * @param module
     * @protected
     */
    loadCurrentPagination(module) {
        const key = module + '-' + this.getPreferenceKey('current-pagination');
        const currentPagination = this.localStorageService.get(key);
        if (!currentPagination || emptyObject(currentPagination)) {
            return;
        }
        this.recordList.pagination = currentPagination;
    }
    /**
     * Get current pagination Type
     * @param module
     * @protected
     */
    getCurrentPaginationType(module) {
        const currentPaginationType = this.loadPreference(module, 'current-pagination-type');
        if (!currentPaginationType) {
            return 'pagination';
        }
        return currentPaginationType;
    }
    /**
     * Set current pagination Type
     * @param module
     * @protected
     */
    setCurrentPaginationType(module, paginationType) {
        this.savePreference(module, 'current-pagination-type', paginationType);
    }
    /**
     * Load current displayed columns
     * @protected
     */
    loadCurrentDisplayedColumns() {
        this.metadataStore.listViewColumns$.pipe(take(1)).subscribe(cols => {
            const displayedColumns = this.getDisplayedColumnsPreference();
            if (!displayedColumns || !cols) {
                this.columns.next(cols);
                return;
            }
            const colMap = {};
            displayedColumns.forEach(displayedColumn => {
                colMap[displayedColumn] = true;
            });
            const displayedMap = {};
            const hidden = [];
            cols.forEach(col => {
                col.default = colMap[col.name] ?? false;
                if (col.default) {
                    displayedMap[col.name] = col;
                }
                else {
                    hidden.push(col);
                }
            });
            const displayed = displayedColumns.filter(col => !!displayedMap[col]).map(col => displayedMap[col]);
            this.columns.next([...displayed, ...hidden]);
        });
    }
    /**
     * Initialize data update state.
     * It should be emitted on any change in values on the record list.
     * Reload/Pagination is not considered as a data update
     */
    initDataUpdateState() {
        this.dataUpdateState = new BehaviorSubject(true);
        this.dataUpdate$ = this.dataUpdateState.asObservable();
    }
    /**
     *  Initialize the dataSet update state.
     *  It should be emitted on any change in dataSet e.g. due to data filter, due to data delete,
     *  due to data edit or any event which causes change in the resulting dataSet.
     */
    initDataSetUpdatedState() {
        this.dataSetUpdate$ = this.criteria$.pipe(combineLatestWith(this.dataUpdate$), map(() => true));
    }
    static { this.ɵfac = function ListViewStore_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ListViewStore)(i0.ɵɵinject(i1.AppStateStore), i0.ɵɵinject(i2.LanguageStore), i0.ɵɵinject(i3.NavigationStore), i0.ɵɵinject(i4.ModuleNavigation), i0.ɵɵinject(i5.MetadataStore), i0.ɵɵinject(i6.MessageService), i0.ɵɵinject(i7.RecordListStoreFactory), i0.ɵɵinject(i8.NgbModal), i0.ɵɵinject(i9.FilterListStoreFactory), i0.ɵɵinject(i10.ConfirmationModalService), i0.ɵɵinject(i11.UserPreferenceStore), i0.ɵɵinject(i12.ActivatedRoute), i0.ɵɵinject(i13.ListViewUrlQueryService), i0.ɵɵinject(i14.LocalStorageService), i0.ɵɵinject(i15.SystemConfigStore), i0.ɵɵinject(i11.UserPreferenceStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ListViewStore, factory: ListViewStore.ɵfac }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListViewStore, [{
        type: Injectable
    }], () => [{ type: i1.AppStateStore }, { type: i2.LanguageStore }, { type: i3.NavigationStore }, { type: i4.ModuleNavigation }, { type: i5.MetadataStore }, { type: i6.MessageService }, { type: i7.RecordListStoreFactory }, { type: i8.NgbModal }, { type: i9.FilterListStoreFactory }, { type: i10.ConfirmationModalService }, { type: i11.UserPreferenceStore }, { type: i12.ActivatedRoute }, { type: i13.ListViewUrlQueryService }, { type: i14.LocalStorageService }, { type: i15.SystemConfigStore }, { type: i11.UserPreferenceStore }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LnN0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3ZpZXdzL2xpc3Qvc3RvcmUvbGlzdC12aWV3L2xpc3Qtdmlldy5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3BELE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUNoRSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDbEUsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBUTVELE9BQU8sRUFBQyxlQUFlLEVBQUUsaUJBQWlCLEVBQTJCLE1BQU0sTUFBTSxDQUFDO0FBQ2xGLE9BQU8sRUFBQyxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFNLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBRTlFLE9BQU8sRUFBVyxhQUFhLEVBQUMsTUFBTSxtREFBbUQsQ0FBQztBQUUxRixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDeEUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNkVBQTZFLENBQUM7QUFDN0csT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDhDQUE4QyxDQUFDO0FBQzVFLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLHlEQUF5RCxDQUFDO0FBQy9GLE9BQU8sRUFBQyxhQUFhLEVBQUMs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QyxHQUFHLENBQUMsQ0FBQztnQkFDckIsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1lBRUgsTUFBTSxTQUFTLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBRXBHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxTQUFTLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUdEOzs7O09BSUc7SUFDTyxtQkFBbUI7UUFDekIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLGVBQWUsQ0FBVSxJQUFJLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDM0QsQ0FBQztJQUVEOzs7O09BSUc7SUFDTyx1QkFBdUI7UUFDN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FDckMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUNuQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQ2xCLENBQUM7SUFDTixDQUFDOzhHQTUwQlEsYUFBYTt1RUFBYixhQUFhLFdBQWIsYUFBYTs7aUZBQWIsYUFBYTtjQUR6QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQgeyBpc0FycmF5LCBpc0VtcHR5LCB1bmlvbiB9IGZyb20gJ2xvZGFzaC1lcyc7XG5pbXBvcnQge2RlZXBDbG9uZX0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3V0aWxzL29iamVjdC11dGlscyc7XG5pbXBvcnQge2VtcHR5T2JqZWN0fSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vdXRpbHMvb2JqZWN0LXV0aWxzJztcbmltcG9ydCB7aXNUcnVlfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vdXRpbHMvdmFsdWUtdXRpbHMnO1xuaW1wb3J0IHtBY3Rpb259IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9hY3Rpb25zL2FjdGlvbi5tb2RlbCc7XG5pbXBvcnQge1JlY29yZH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3JlY29yZC9yZWNvcmQubW9kZWwnO1xuaW1wb3J0IHtWaWV3Q29udGV4dH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3ZpZXdzL3ZpZXcubW9kZWwnO1xuaW1wb3J0IHtSZWNvcmRTZWxlY3Rpb24sIFNlbGVjdGlvblN0YXR1c30gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3ZpZXdzL2xpc3QvcmVjb3JkLXNlbGVjdGlvbi5tb2RlbCc7XG5pbXBvcnQge1BhZ2luYXRpb24sIFNvcnREaXJlY3Rpb24sIFNvcnRpbmdTZWxlY3Rpb259IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi92aWV3cy9saXN0L2xpc3QtbmF2aWdhdGlvbi5tb2RlbCc7XG5pbXBvcnQge0xpc3RWaWV3TWV0YSwgQ29sdW1uRGVmaW5pdGlvbn0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL21ldGFkYXRhL2xpc3QubWV0YWRhdGEubW9kZWwnO1xuaW1wb3J0IHtTZWFyY2hDcml0ZXJpYX0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3ZpZXdzL2xpc3Qvc2VhcmNoLWNyaXRlcmlhLm1vZGVsJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBjb21iaW5lTGF0ZXN0V2l0aCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7ZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCwgdGFrZSwgdGFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge05hdmlnYXRpb25TdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLnN0b3JlJztcbmltcG9ydCB7UmVjb3JkTGlzdCwgUmVjb3JkTGlzdFN0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9yZWNvcmQtbGlzdC9yZWNvcmQtbGlzdC5zdG9yZSc7XG5pbXBvcnQge01ldGFkYXRhLCBNZXRhZGF0YVN0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9tZXRhZGF0YS9tZXRhZGF0YS5zdG9yZS5zZXJ2aWNlJztcbmltcG9ydCB7U3RhdGVTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvc3RhdGUnO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5pbXBvcnQge01vZHVsZU5hdmlnYXRpb259IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL25hdmlnYXRpb24vbW9kdWxlLW5hdmlnYXRpb24vbW9kdWxlLW5hdmlnYXRpb24uc2VydmljZSc7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9tZXNzYWdlL21lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQge1JlY29yZExpc3RTdG9yZUZhY3Rvcnl9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3JlY29yZC1saXN0L3JlY29yZC1saXN0LnN0b3JlLmZhY3RvcnknO1xuaW1wb3J0IHtBcHBTdGF0ZVN0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9hcHAtc3RhdGUvYXBwLXN0YXRlLnN0b3JlJztcbmltcG9ydCB7QXBwRGF0YSwgVmlld1N0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS92aWV3L3ZpZXcuc3RvcmUnO1xuaW1wb3J0IHtMb2NhbFN0b3JhZ2VTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9sb2NhbC1zdG9yYWdlL2xvY2FsLXN0b3JhZ2Uuc2VydmljZSc7XG5pbXBvcnQge05nYk1vZGFsfSBmcm9tIFwiQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXBcIjtcbmltcG9ydCB7Q29sdW1uQ2hvb3NlckNvbXBvbmVudH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvY29sdW1uY2hvb3Nlci9jb2x1bW5jaG9vc2VyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtTYXZlZEZpbHRlciwgU2F2ZWRGaWx0ZXJNYXB9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3NhdmVkLWZpbHRlcnMvc2F2ZWQtZmlsdGVyLm1vZGVsJztcbmltcG9ydCB7RmlsdGVyTGlzdFN0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9zYXZlZC1maWx0ZXJzL2ZpbHRlci1saXN0LnN0b3JlJztcbmltcG9ydCB7RmlsdGVyTGlzdFN0b3JlRmFjdG9yeX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvc2F2ZWQtZmlsdGVycy9maWx0ZXItbGlzdC5zdG9yZS5mYWN0b3J5JztcbmltcG9ydCB7Q29uZmlybWF0aW9uTW9kYWxTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9tb2RhbHMvY29uZmlybWF0aW9uLW1vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHtSZWNvcmRQYW5lbE1ldGFkYXRhfSBmcm9tICcuLi8uLi8uLi8uLi9jb250YWluZXJzL3JlY29yZC1wYW5lbC9zdG9yZS9yZWNvcmQtcGFuZWwvcmVjb3JkLXBhbmVsLnN0b3JlLm1vZGVsJztcbmltcG9ydCB7VXNlclByZWZlcmVuY2VTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvdXNlci1wcmVmZXJlbmNlL3VzZXItcHJlZmVyZW5jZS5zdG9yZSc7XG5pbXBvcnQge0xpc3RWaWV3VXJsUXVlcnlTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9saXN0LXZpZXctdXJsLXF1ZXJ5LnNlcnZpY2UnO1xuaW1wb3J0IHtTeXN0ZW1Db25maWdTdG9yZX0gZnJvbSBcIi4uLy4uLy4uLy4uL3N0b3JlL3N5c3RlbS1jb25maWcvc3lzdGVtLWNvbmZpZy5zdG9yZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIExpc3RWaWV3RGF0YSB7XG4gICAgcmVjb3JkczogUmVjb3JkW107XG4gICAgcGFnaW5hdGlvbj86IFBhZ2luYXRpb247XG4gICAgY3JpdGVyaWE/OiBTZWFyY2hDcml0ZXJpYTtcbiAgICBzb3J0PzogU29ydGluZ1NlbGVjdGlvbjtcbiAgICBzZWxlY3Rpb24/OiBSZWNvcmRTZWxlY3Rpb247XG4gICAgbG9hZGluZzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMaXN0Vmlld01vZGVsIHtcbiAgICBkYXRhOiBMaXN0Vmlld0RhdGE7XG4gICAgYXBwRGF0YTogQXBwRGF0YTtcbiAgICBtZXRhZGF0YTogTWV0YWRhdGE7XG59XG5cbmNvbnN0IGluaXRpYWxGaWx0ZXI6IFNhdmVkRmlsdGVyID0ge1xuICAgIGtleTogJ2RlZmF1bHQnLFxuICAgIG1vZHVsZTogJ3NhdmVkLXNlYXJjaCcsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgICBjb250ZW50czogJydcbiAgICB9LFxuICAgIGNyaXRlcmlhOiB7XG4gICAgICAgIG5hbWU6ICdkZWZhdWx0JyxcbiAgICAgICAgZmlsdGVyczoge31cbiAgICB9XG59O1xuXG5jb25zdCBpbml0aWFsRmlsdGVyczogU2F2ZWRGaWx0ZXJNYXAgPSB7XG4gICAgJ2RlZmF1bHQnOiBkZWVwQ2xvbmUoaW5pdGlhbEZpbHRlcilcbn07XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogTGlzdFZpZXdTdGF0ZSA9IHtcbiAgICBtb2R1bGU6ICcnLFxuICAgIHdpZGdldHM6IGZhbHNlLFxuICAgIGFjdGlvblBhbmVsOiAnJyxcbiAgICBzaG93U2lkZWJhcldpZGdldHM6IGZhbHNlLFxuICAgIHJlY29yZFBhbmVsQ29uZmlnOiB7fSBhcyBSZWNvcmRQYW5lbE1ldGFkYXRhLFxuICAgIGFjdGl2ZUZpbHRlcnM6IGRlZXBDbG9uZShpbml0aWFsRmlsdGVycyksXG4gICAgb3BlbkZpbHRlcjogZGVlcENsb25lKGluaXRpYWxGaWx0ZXIpXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIExpc3RWaWV3U3RhdGUge1xuICAgIG1vZHVsZTogc3RyaW5nO1xuICAgIHdpZGdldHM6IGJvb2xlYW47XG4gICAgYWN0aW9uUGFuZWw6IHN0cmluZztcbiAgICBzaG93U2lkZWJhcldpZGdldHM6IGJvb2xlYW47XG4gICAgcmVjb3JkUGFuZWxDb25maWc6IFJlY29yZFBhbmVsTWV0YWRhdGE7XG4gICAgYWN0aXZlRmlsdGVyczogU2F2ZWRGaWx0ZXJNYXA7XG4gICAgb3BlbkZpbHRlcjogU2F2ZWRGaWx0ZXI7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld1N0b3JlIGV4dGVuZHMgVmlld1N0b3JlIGltcGxlbWVudHMgU3RhdGVTdG9yZSB7XG5cbiAgICAvKipcbiAgICAgKiBQdWJsaWMgbG9uZy1saXZlZCBvYnNlcnZhYmxlIHN0cmVhbXNcbiAgICAgKi9cbiAgICBtb2R1bGVOYW1lJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAgIGNvbHVtbnM6IEJlaGF2aW9yU3ViamVjdDxDb2x1bW5EZWZpbml0aW9uW10+O1xuICAgIGNvbHVtbnMkOiBPYnNlcnZhYmxlPENvbHVtbkRlZmluaXRpb25bXT47XG4gICAgbGluZUFjdGlvbnMkOiBPYnNlcnZhYmxlPEFjdGlvbltdPjtcbiAgICB0YWJsZUFjdGlvbnMkOiBPYnNlcnZhYmxlPEFjdGlvbltdPlxuICAgIHJlY29yZHMkOiBPYnNlcnZhYmxlPFJlY29yZFtdPjtcbiAgICBjcml0ZXJpYSQ6IE9ic2VydmFibGU8U2VhcmNoQ3JpdGVyaWE+O1xuICAgIGNvbnRleHQkOiBPYnNlcnZhYmxlPFZpZXdDb250ZXh0PjtcbiAgICBzb3J0JDogT2JzZXJ2YWJsZTxTb3J0aW5nU2VsZWN0aW9uPjtcbiAgICBwYWdpbmF0aW9uJDogT2JzZXJ2YWJsZTxQYWdpbmF0aW9uPjtcbiAgICBzZWxlY3Rpb24kOiBPYnNlcnZhYmxlPFJlY29yZFNlbGVjdGlvbj47XG4gICAgc2VsZWN0ZWRDb3VudCQ6IE9ic2VydmFibGU8bnVtYmVyPjtcbiAgICBzZWxlY3RlZFN0YXR1cyQ6IE9ic2VydmFibGU8U2VsZWN0aW9uU3RhdHVzPjtcbiAgICBsb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICB3aWRnZXRzJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBzaG93U2lkZWJhcldpZGdldHMkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIGRpc3BsYXlGaWx0ZXJzJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBhY3Rpb25QYW5lbCQ6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgICByZWNvcmRMaXN0OiBSZWNvcmRMaXN0U3RvcmU7XG4gICAgZGF0YVVwZGF0ZSQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgZGF0YVNldFVwZGF0ZSQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgYWN0aXZlRmlsdGVycyQ6IE9ic2VydmFibGU8U2F2ZWRGaWx0ZXJNYXA+O1xuICAgIG9wZW5GaWx0ZXIkOiBPYnNlcnZhYmxlPFNhdmVkRmlsdGVyPjtcbiAgICBmaWx0ZXJMaXN0OiBGaWx0ZXJMaXN0U3RvcmU7XG4gICAgcGFnZUtleTogc3RyaW5nID0gJ2xpc3R2aWV3JztcblxuICAgIC8qKlxuICAgICAqIFZpZXctbW9kZWwgdGhhdCByZXNvbHZlcyBvbmNlIGFsbCB0aGUgZGF0YSBpcyByZWFkeSAob3IgdXBkYXRlZCkuXG4gICAgICovXG4gICAgdm0kOiBPYnNlcnZhYmxlPExpc3RWaWV3TW9kZWw+O1xuICAgIHZtOiBMaXN0Vmlld01vZGVsO1xuICAgIGRhdGE6IExpc3RWaWV3RGF0YTtcblxuICAgIC8qKiBJbnRlcm5hbCBQcm9wZXJ0aWVzICovXG4gICAgcHJvdGVjdGVkIGNhY2hlJDogT2JzZXJ2YWJsZTxhbnk+ID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgaW50ZXJuYWxTdGF0ZTogTGlzdFZpZXdTdGF0ZSA9IGRlZXBDbG9uZShpbml0aWFsU3RhdGUpO1xuICAgIHByb3RlY3RlZCBzdG9yZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TGlzdFZpZXdTdGF0ZT4odGhpcy5pbnRlcm5hbFN0YXRlKTtcbiAgICBwcm90ZWN0ZWQgc3RhdGUkID0gdGhpcy5zdG9yZS5hc09ic2VydmFibGUoKTtcbiAgICBwcm90ZWN0ZWQgZGF0YVVwZGF0ZVN0YXRlOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj47XG4gICAgcHJvdGVjdGVkIHN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGFwcFN0YXRlU3RvcmU6IEFwcFN0YXRlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBsYW5ndWFnZVN0b3JlOiBMYW5ndWFnZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbmF2aWdhdGlvblN0b3JlOiBOYXZpZ2F0aW9uU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBtb2R1bGVOYXZpZ2F0aW9uOiBNb2R1bGVOYXZpZ2F0aW9uLFxuICAgICAgICBwcm90ZWN0ZWQgbWV0YWRhdGFTdG9yZTogTWV0YWRhdGFTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIG1lc3NhZ2U6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgbGlzdFN0b3JlRmFjdG9yeTogUmVjb3JkTGlzdFN0b3JlRmFjdG9yeSxcbiAgICAgICAgcHJvdGVjdGVkIG1vZGFsU2VydmljZTogTmdiTW9kYWwsXG4gICAgICAgIHByb3RlY3RlZCBmaWx0ZXJMaXN0U3RvcmVGYWN0b3J5OiBGaWx0ZXJMaXN0U3RvcmVGYWN0b3J5LFxuICAgICAgICBwcm90ZWN0ZWQgY29uZmlybWF0aW9uOiBDb25maXJtYXRpb25Nb2RhbFNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBwcmVmZXJlbmNlczogVXNlclByZWZlcmVuY2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJvdGVjdGVkIGxpc3RWaWV3VXJsUXVlcnlTZXJ2aWNlOiBMaXN0Vmlld1VybFF1ZXJ5U2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIGxvY2FsU3RvcmFnZVNlcnZpY2U6IExvY2FsU3RvcmFnZVNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBzeXN0ZW1Db25maWdzU3RvcmU6IFN5c3RlbUNvbmZpZ1N0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgdXNlclByZWZlcmVuY2VzOiBVc2VyUHJlZmVyZW5jZVN0b3JlXG4gICAgKSB7XG5cbiAgICAgICAgc3VwZXIoYXBwU3RhdGVTdG9yZSwgbGFuZ3VhZ2VTdG9yZSwgbmF2aWdhdGlvblN0b3JlLCBtb2R1bGVOYXZpZ2F0aW9uLCBtZXRhZGF0YVN0b3JlKTtcblxuICAgICAgICB0aGlzLnJlY29yZExpc3QgPSB0aGlzLmxpc3RTdG9yZUZhY3RvcnkuY3JlYXRlKCk7XG5cbiAgICAgICAgdGhpcy5jb2x1bW5zJCA9IG1ldGFkYXRhU3RvcmUubGlzdFZpZXdDb2x1bW5zJDtcbiAgICAgICAgdGhpcy5saW5lQWN0aW9ucyQgPSBtZXRhZGF0YVN0b3JlLmxpc3RWaWV3TGluZUFjdGlvbnMkO1xuICAgICAgICB0aGlzLnRhYmxlQWN0aW9ucyQgPSBtZXRhZGF0YVN0b3JlLmxpc3RWaWV3VGFibGVBY3Rpb25zJDtcbiAgICAgICAgdGhpcy5yZWNvcmRzJCA9IHRoaXMucmVjb3JkTGlzdC5yZWNvcmRzJDtcbiAgICAgICAgdGhpcy5jcml0ZXJpYSQgPSB0aGlzLnJlY29yZExpc3QuY3JpdGVyaWEkO1xuICAgICAgICB0aGlzLmNvbnRleHQkID0gdGhpcy5yZWNvcmRMaXN0LmNyaXRlcmlhJC5waXBlKG1hcCgoKSA9PiB0aGlzLmdldFZpZXdDb250ZXh0KCkpKTtcbiAgICAgICAgdGhpcy5zb3J0JCA9IHRoaXMucmVjb3JkTGlzdC5zb3J0JDtcbiAgICAgICAgdGhpcy5wYWdpbmF0aW9uJCA9IHRoaXMucmVjb3JkTGlzdC5wYWdpbmF0aW9uJDtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24kID0gdGhpcy5yZWNvcmRMaXN0LnNlbGVjdGlvbiQ7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDb3VudCQgPSB0aGlzLnJlY29yZExpc3Quc2VsZWN0ZWRDb3VudCQ7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRTdGF0dXMkID0gdGhpcy5yZWNvcmRMaXN0LnNlbGVjdGVkU3RhdHVzJDtcbiAgICAgICAgdGhpcy5sb2FkaW5nJCA9IHRoaXMucmVjb3JkTGlzdC5sb2FkaW5nJDtcbiAgICAgICAgdGhpcy5tb2R1bGVOYW1lJCA9IHRoaXMuc3RhdGUkLnBpcGUobWFwKHN0YXRlID0+IHN0YXRlLm1vZHVsZSksIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICAgICAgICB0aGlzLndpZGdldHMkID0gdGhpcy5zdGF0ZSQucGlwZShtYXAoc3RhdGUgPT4gc3RhdGUud2lkZ2V0cyksIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICAgICAgICB0aGlzLnNob3dTaWRlYmFyV2lkZ2V0cyQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5zaG93U2lkZWJhcldpZGdldHMpKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5RmlsdGVycyQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5hY3Rpb25QYW5lbCA9PT0gJ2ZpbHRlcnMnKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gICAgICAgIHRoaXMuYWN0aW9uUGFuZWwkID0gdGhpcy5zdGF0ZSQucGlwZShtYXAoc3RhdGUgPT4gc3RhdGUuYWN0aW9uUGFuZWwpLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgICAgICAgdGhpcy5hY3RpdmVGaWx0ZXJzJCA9IHRoaXMuc3RhdGUkLnBpcGUobWFwKHN0YXRlID0+IHN0YXRlLmFjdGl2ZUZpbHRlcnMpLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgICAgICAgdGhpcy5vcGVuRmlsdGVyJCA9IHRoaXMuc3RhdGUkLnBpcGUobWFwKHN0YXRlID0+IHN0YXRlLm9wZW5GaWx0ZXIpLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcblxuICAgICAgICBjb25zdCBkYXRhJCA9IHRoaXMucmVjb3JkcyQucGlwZShcbiAgICAgICAgICAgIGNvbWJpbmVMYXRlc3RXaXRoKHRoaXMuY3JpdGVyaWEkLCB0aGlzLnBhZ2luYXRpb24kLCB0aGlzLnNlbGVjdGlvbiQsIHRoaXMubG9hZGluZyQpLFxuICAgICAgICAgICAgbWFwKChbcmVjb3JkcywgY3JpdGVyaWEsIHBhZ2luYXRpb24sIHNlbGVjdGlvbiwgbG9hZGluZ10pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEgPSB7cmVjb3JkcywgY3JpdGVyaWEsIHBhZ2luYXRpb24sIHNlbGVjdGlvbiwgbG9hZGluZ30gYXMgTGlzdFZpZXdEYXRhO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMudm0kID0gZGF0YSQucGlwZShcbiAgICAgICAgICAgIGNvbWJpbmVMYXRlc3RXaXRoKHRoaXMuYXBwRGF0YSQsIHRoaXMubWV0YWRhdGEkKSxcbiAgICAgICAgICAgIG1hcCgoW2RhdGEsIGFwcERhdGEsIG1ldGFkYXRhXSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudm0gPSB7ZGF0YSwgYXBwRGF0YSwgbWV0YWRhdGF9IGFzIExpc3RWaWV3TW9kZWw7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudm07XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuY29sdW1ucyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Q29sdW1uRGVmaW5pdGlvbltdPihbXSk7XG4gICAgICAgIHRoaXMuY29sdW1ucyQgPSB0aGlzLmNvbHVtbnMuYXNPYnNlcnZhYmxlKCk7XG5cbiAgICAgICAgdGhpcy5pbml0RGF0YVVwZGF0ZVN0YXRlKCk7XG4gICAgICAgIHRoaXMuaW5pdERhdGFTZXRVcGRhdGVkU3RhdGUoKTtcblxuICAgICAgICB0aGlzLmZpbHRlckxpc3QgPSB0aGlzLmZpbHRlckxpc3RTdG9yZUZhY3RvcnkuY3JlYXRlKCk7XG5cbiAgICAgICAgdGhpcy5yZWNvcmRMaXN0LnBhZ2VLZXkgPSB0aGlzLnBhZ2VLZXk7XG4gICAgfVxuXG4gICAgZ2V0IGFjdGlvblBhbmVsKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsU3RhdGUuYWN0aW9uUGFuZWw7XG4gICAgfVxuXG4gICAgZ2V0IHNob3dGaWx0ZXJzKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFN0YXRlLmFjdGlvblBhbmVsID09PSAnZmlsdGVycyc7XG4gICAgfVxuXG4gICAgc2V0IHNob3dGaWx0ZXJzKHNob3c6IGJvb2xlYW4pIHtcblxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgIC4uLnRoaXMuaW50ZXJuYWxTdGF0ZSxcbiAgICAgICAgICAgIGFjdGlvblBhbmVsOiBzaG93ID8gJ2ZpbHRlcnMnIDogJydcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0IHdpZGdldHMoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsU3RhdGUud2lkZ2V0cztcbiAgICB9XG5cbiAgICBzZXQgd2lkZ2V0cyhzaG93OiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgICAgICAgLi4udGhpcy5pbnRlcm5hbFN0YXRlLFxuICAgICAgICAgICAgd2lkZ2V0czogc2hvd1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXQgc2hvd1NpZGViYXJXaWRnZXRzKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFN0YXRlLnNob3dTaWRlYmFyV2lkZ2V0cztcbiAgICB9XG5cbiAgICBzZXQgc2hvd1NpZGViYXJXaWRnZXRzKHNob3c6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5zYXZlUHJlZmVyZW5jZSh0aGlzLmdldE1vZHVsZU5hbWUoKSwgJ3Nob3ctc2lkZWJhci13aWRnZXRzJywgc2hvdyk7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgICAgICAgLi4udGhpcy5pbnRlcm5hbFN0YXRlLFxuICAgICAgICAgICAgc2hvd1NpZGViYXJXaWRnZXRzOiBzaG93XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldCByZWNvcmRQYW5lbENvbmZpZygpOiBSZWNvcmRQYW5lbE1ldGFkYXRhIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxTdGF0ZS5yZWNvcmRQYW5lbENvbmZpZztcbiAgICB9XG5cbiAgICBpc1JlY29yZFBhbmVsT3BlbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxTdGF0ZS5hY3Rpb25QYW5lbCA9PT0gJ3JlY29yZFBhbmVsJztcbiAgICB9XG5cbiAgICBvcGVuUmVjb3JkUGFuZWwoY29uZmlnOiBSZWNvcmRQYW5lbE1ldGFkYXRhKTogdm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgICAgICAgLi4udGhpcy5pbnRlcm5hbFN0YXRlLFxuICAgICAgICAgICAgYWN0aW9uUGFuZWw6ICdyZWNvcmRQYW5lbCcsXG4gICAgICAgICAgICByZWNvcmRQYW5lbENvbmZpZzogY29uZmlnXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsb3NlUmVjb3JkUGFuZWwoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgICAgICAgLi4udGhpcy5pbnRlcm5hbFN0YXRlLFxuICAgICAgICAgICAgYWN0aW9uUGFuZWw6ICcnLFxuICAgICAgICAgICAgcmVjb3JkUGFuZWxDb25maWc6IHt9IGFzIFJlY29yZFBhbmVsTWV0YWRhdGFcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBnZXRNb2R1bGVOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsU3RhdGUubW9kdWxlO1xuICAgIH1cblxuICAgIGdldFZpZXdDb250ZXh0KCk6IFZpZXdDb250ZXh0IHtcblxuICAgICAgICBjb25zdCBjb250ZXh0ID0ge1xuICAgICAgICAgICAgbW9kdWxlOiB0aGlzLmdldE1vZHVsZU5hbWUoKSxcbiAgICAgICAgfSBhcyBWaWV3Q29udGV4dDtcblxuICAgICAgICBjb250ZXh0LmNyaXRlcmlhID0gdGhpcy5yZWNvcmRMaXN0LmNyaXRlcmlhO1xuICAgICAgICBjb250ZXh0LnNvcnQgPSB0aGlzLnJlY29yZExpc3Quc29ydDtcblxuICAgICAgICByZXR1cm4gY29udGV4dDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhbiBkZXN0cm95XG4gICAgICovXG4gICAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5zdWJzLmZvckVhY2goc3ViID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBnZXQgYWN0aXZlIGZpbHRlcnNcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IGFjdGl2ZSBmaWx0ZXJzXG4gICAgICovXG4gICAgZ2V0IGFjdGl2ZUZpbHRlcnMoKTogU2F2ZWRGaWx0ZXJNYXAge1xuICAgICAgICByZXR1cm4gZGVlcENsb25lKHRoaXMuaW50ZXJuYWxTdGF0ZS5hY3RpdmVGaWx0ZXJzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhciBvYnNlcnZhYmxlIGNhY2hlXG4gICAgICovXG4gICAgcHVibGljIGNsZWFyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNhY2hlJCA9IG51bGw7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoZGVlcENsb25lKGluaXRpYWxTdGF0ZSkpO1xuICAgICAgICB0aGlzLnJlY29yZExpc3QuY2xlYXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYXJBdXRoQmFzZWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5yZWNvcmRMaXN0LmNsZWFyQXV0aEJhc2VkKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbCBsaXN0IHJlY29yZHMgbG9hZCBpZiBub3QgY2FjaGVkIGFuZCB1cGRhdGUgc3RhdGUuXG4gICAgICogUmV0dXJucyBvYnNlcnZhYmxlIHRvIGJlIHVzZWQgaW4gcmVzb2x2ZXIgaWYgbmVlZGVkXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kdWxlIHRvIHVzZVxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IE9ic2VydmFibGU8YW55PlxuICAgICAqL1xuICAgIHB1YmxpYyBpbml0KG1vZHVsZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxSZWNvcmRMaXN0PiB7XG4gICAgICAgIHRoaXMuaW50ZXJuYWxTdGF0ZS5tb2R1bGUgPSBtb2R1bGU7XG4gICAgICAgIHRoaXMucmVjb3JkTGlzdC5pbml0KG1vZHVsZSwgZmFsc2UpO1xuICAgICAgICB0aGlzLmZpbHRlckxpc3QuaW5pdChtb2R1bGUpO1xuXG4gICAgICAgIHRoaXMuZmlsdGVyTGlzdC5sb2FkKGZhbHNlKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgpO1xuXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlU2hvd1dpZGdldHMoKTtcblxuICAgICAgICB0aGlzLnJlY29yZExpc3Quc29ydCA9IHtcbiAgICAgICAgICAgIG9yZGVyQnk6IHRoaXM/Lm1ldGFkYXRhPy5saXN0Vmlldz8ub3JkZXJCeSA/PyAnJyxcbiAgICAgICAgICAgIHNvcnRPcmRlcjogdGhpcz8ubWV0YWRhdGE/Lmxpc3RWaWV3Py5zb3J0T3JkZXIgPz8gJ05PTkUnIGFzIFNvcnREaXJlY3Rpb25cbiAgICAgICAgfSBhcyBTb3J0aW5nU2VsZWN0aW9uO1xuXG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gdGhpcy5yb3V0ZT8uc25hcHNob3Q/LnF1ZXJ5UGFyYW1zID8/IHt9O1xuICAgICAgICBsZXQgZmlsdGVyVHlwZSA9ICcnO1xuICAgICAgICBpZiAoaXNUcnVlKHF1ZXJ5UGFyYW1zWydxdWVyeSddKSkge1xuICAgICAgICAgICAgZmlsdGVyVHlwZSA9ICdxdWVyeSc7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoIChmaWx0ZXJUeXBlKSB7XG4gICAgICAgICAgICBjYXNlICdxdWVyeSc6XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkUXVlcnlGaWx0ZXIobW9kdWxlLCBxdWVyeVBhcmFtcyk7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkQ3VycmVudEZpbHRlcihtb2R1bGUpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZEN1cnJlbnRTb3J0KG1vZHVsZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2FkQ3VycmVudERpc3BsYXllZENvbHVtbnMoKTtcblxuICAgICAgICBjb25zdCBwYWdpbmF0aW9uVHlwZSA9IHRoaXMudXNlclByZWZlcmVuY2VzLmdldFVzZXJQcmVmZXJlbmNlKCdsaXN0dmlld19wYWdpbmF0aW9uX3R5cGUnKSA/PyB0aGlzLnN5c3RlbUNvbmZpZ3NTdG9yZS5nZXRDb25maWdWYWx1ZSgnbGlzdHZpZXdfcGFnaW5hdGlvbl90eXBlJyk7XG5cbiAgICAgICAgY29uc3QgY3VycmVudFBhZ2luYXRpb25UeXBlID0gdGhpcy5nZXRDdXJyZW50UGFnaW5hdGlvblR5cGUobW9kdWxlKTtcblxuICAgICAgICB0aGlzLnNldEN1cnJlbnRQYWdpbmF0aW9uVHlwZShtb2R1bGUsIHBhZ2luYXRpb25UeXBlKTtcblxuICAgICAgICBpZiAocXVlcnlQYXJhbXNbJ2tlZXBQYWdpbmF0aW9uJ10gJiYgY3VycmVudFBhZ2luYXRpb25UeXBlID09PSBwYWdpbmF0aW9uVHlwZSkge1xuICAgICAgICAgICAgdGhpcy5sb2FkQ3VycmVudFBhZ2luYXRpb24obW9kdWxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmxvYWQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgb3BlbiBmaWx0ZXJzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZmlsdGVyIHRvIHNldFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRPcGVuRmlsdGVyKGZpbHRlcjogU2F2ZWRGaWx0ZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7Li4udGhpcy5pbnRlcm5hbFN0YXRlLCBvcGVuRmlsdGVyOiBkZWVwQ2xvbmUoZmlsdGVyKX0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZSBRdWljayBmaWx0ZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSBmaWx0ZXJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJlbG9hZCBmbGFnXG4gICAgICovXG4gICAgcHVibGljIHRvZ2dsZVF1aWNrRmlsdGVyKGZpbHRlcjogU2F2ZWRGaWx0ZXIsIHJlbG9hZCA9IHRydWUpOiB2b2lkIHtcbiAgICAgICAgbGV0IGFjdGl2ZUZpbHRlcnMgPSB0aGlzLmdldEFjdGl2ZVF1aWNrRmlsdGVycygpO1xuXG4gICAgICAgIGNvbnN0IGlzQWN0aXZlID0gT2JqZWN0LmtleXMoYWN0aXZlRmlsdGVycykuc29tZShrZXkgPT4ga2V5ID09PSBmaWx0ZXIua2V5KTtcblxuICAgICAgICBpZiAoaXNBY3RpdmUpIHtcbiAgICAgICAgICAgIGxldCB7W2ZpbHRlci5rZXldOiByZW1vdmVkRmlsdGVycywgLi4ubmV3RmlsdGVyc30gPSBhY3RpdmVGaWx0ZXJzO1xuICAgICAgICAgICAgYWN0aXZlRmlsdGVycyA9IG5ld0ZpbHRlcnM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhY3RpdmVGaWx0ZXJzID0ge307XG4gICAgICAgICAgICBhY3RpdmVGaWx0ZXJzW2ZpbHRlci5rZXldID0gZmlsdGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVtcHR5T2JqZWN0KGFjdGl2ZUZpbHRlcnMpKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0RmlsdGVycyhyZWxvYWQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGFjdGl2ZUZpbHRlcnMpLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5zZXRGaWx0ZXJzKGFjdGl2ZUZpbHRlcnMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICAgICAgICAuLi50aGlzLmludGVybmFsU3RhdGUsXG4gICAgICAgICAgICBhY3RpdmVGaWx0ZXJzOiBkZWVwQ2xvbmUoYWN0aXZlRmlsdGVycyksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudXBkYXRlU2VhcmNoQ3JpdGVyaWEocmVsb2FkKVxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU2V0IGFjdGl2ZSBmaWx0ZXJzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZmlsdGVycyB0byBzZXRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJlbG9hZCBmbGFnXG4gICAgICogQHBhcmFtIHNvcnRcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0RmlsdGVycyhmaWx0ZXJzOiBTYXZlZEZpbHRlck1hcCwgcmVsb2FkID0gdHJ1ZSwgc29ydDogU29ydGluZ1NlbGVjdGlvbiA9IG51bGwpOiB2b2lkIHtcblxuICAgICAgICBjb25zdCBmaWx0ZXJLZXkgPSBPYmplY3Qua2V5cyhmaWx0ZXJzKS5zaGlmdCgpO1xuICAgICAgICBjb25zdCBmaWx0ZXIgPSBmaWx0ZXJzW2ZpbHRlcktleV07XG5cbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7Li4udGhpcy5pbnRlcm5hbFN0YXRlLCBhY3RpdmVGaWx0ZXJzOiBkZWVwQ2xvbmUoZmlsdGVycyksIG9wZW5GaWx0ZXI6IGRlZXBDbG9uZShmaWx0ZXIpfSk7XG5cbiAgICAgICAgaWYgKGZpbHRlci5jcml0ZXJpYSkge1xuICAgICAgICAgICAgbGV0IG9yZGVyQnkgPSBmaWx0ZXIuY3JpdGVyaWEub3JkZXJCeSA/PyAnJztcbiAgICAgICAgICAgIGNvbnN0IHNvcnRPcmRlciA9IGZpbHRlci5jcml0ZXJpYS5zb3J0T3JkZXIgPz8gJyc7XG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9uID0gdGhpcy5yZWNvcmRMaXN0Lm1hcFNvcnRPcmRlcihzb3J0T3JkZXIpO1xuXG4gICAgICAgICAgICBpZiAoc29ydCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG9yZGVyQnkgPSBzb3J0Lm9yZGVyQnk7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gc29ydC5zb3J0T3JkZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucmVjb3JkTGlzdC51cGRhdGVTb3J0aW5nKG9yZGVyQnksIGRpcmVjdGlvbiwgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTb3J0TG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZVNlYXJjaENyaXRlcmlhKHJlbG9hZClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgZmlsdGVyc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGZpbHRlciB0byBzZXRcbiAgICAgKi9cbiAgICBwdWJsaWMgYWRkU2F2ZWRGaWx0ZXIoZmlsdGVyOiBTYXZlZEZpbHRlcik6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0gey4uLnRoaXMuaW50ZXJuYWxTdGF0ZX07XG4gICAgICAgIGNvbnN0IGFjdGl2ZUZpbHRlcnMgPSB0aGlzLmFjdGl2ZUZpbHRlcnM7XG5cbiAgICAgICAgaWYgKGZpbHRlci5rZXkgJiYgYWN0aXZlRmlsdGVyc1tmaWx0ZXIua2V5XSkge1xuICAgICAgICAgICAgYWN0aXZlRmlsdGVyc1tmaWx0ZXIua2V5XSA9IGZpbHRlcjtcbiAgICAgICAgICAgIG5ld1N0YXRlLmFjdGl2ZUZpbHRlcnMgPSBhY3RpdmVGaWx0ZXJzO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3U3RhdGUub3BlbkZpbHRlciA9IGZpbHRlcjtcblxuICAgICAgICB0aGlzLmZpbHRlckxpc3QuYWRkRmlsdGVyKGZpbHRlcik7XG5cbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShuZXdTdGF0ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGZpbHRlcnNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBmaWx0ZXIgdG8gc2V0XG4gICAgICovXG4gICAgcHVibGljIHJlbW92ZVNhdmVkRmlsdGVyKGZpbHRlcjogU2F2ZWRGaWx0ZXIpOiB2b2lkIHtcblxuICAgICAgICBpZiAoIWZpbHRlciB8fCAhZmlsdGVyLmtleSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5maWx0ZXJMaXN0LnJlbW92ZUZpbHRlcihmaWx0ZXIpO1xuXG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0gey4uLnRoaXMuaW50ZXJuYWxTdGF0ZX07XG5cbiAgICAgICAgaWYgKG5ld1N0YXRlLm9wZW5GaWx0ZXIgJiYgbmV3U3RhdGUub3BlbkZpbHRlci5rZXkgPT09IGZpbHRlci5rZXkpIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRGaWx0ZXJzKHRydWUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldCBhY3RpdmUgZmlsdGVyc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtib29sZWFufSByZWxvYWQgZmxhZ1xuICAgICAqL1xuICAgIHB1YmxpYyByZXNldEZpbHRlcnMocmVsb2FkID0gdHJ1ZSk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgICAgICAgLi4udGhpcy5pbnRlcm5hbFN0YXRlLFxuICAgICAgICAgICAgYWN0aXZlRmlsdGVyczogZGVlcENsb25lKGluaXRpYWxGaWx0ZXJzKSxcbiAgICAgICAgICAgIG9wZW5GaWx0ZXI6IGRlZXBDbG9uZShpbml0aWFsRmlsdGVyKSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5yZWNvcmRMaXN0LmNsZWFyU29ydCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVNvcnRMb2NhbFN0b3JhZ2UoKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZVNlYXJjaENyaXRlcmlhKHJlbG9hZClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIHNlYXJjaCBjcml0ZXJpYVxuICAgICAqXG4gICAgICogQHBhcmFtIHtib29sZWFufSByZWxvYWQgZmxhZ1xuICAgICAqL1xuICAgIHB1YmxpYyB1cGRhdGVTZWFyY2hDcml0ZXJpYShyZWxvYWQgPSB0cnVlKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGZpbHRlcnMgPSB7Li4udGhpcy5pbnRlcm5hbFN0YXRlLmFjdGl2ZUZpbHRlcnN9O1xuICAgICAgICBsZXQgY3JpdGVyaWEgPSB0aGlzLm1lcmdlQ3JpdGVyaWEoZmlsdGVycyk7XG5cbiAgICAgICAgdGhpcy5yZWNvcmRMaXN0LnVwZGF0ZVNlYXJjaENyaXRlcmlhKGNyaXRlcmlhLCByZWxvYWQpO1xuICAgICAgICB0aGlzLnVwZGF0ZUZpbHRlckxvY2FsU3RvcmFnZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVGaWx0ZXJMb2NhbFN0b3JhZ2UoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IHRoaXMuaW50ZXJuYWxTdGF0ZS5tb2R1bGU7XG5cbiAgICAgICAgdGhpcy5zYXZlUHJlZmVyZW5jZShtb2R1bGUsICdjdXJyZW50LWZpbHRlcnMnLCB0aGlzLmludGVybmFsU3RhdGUuYWN0aXZlRmlsdGVycyk7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZVNvcnRMb2NhbFN0b3JhZ2UoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IHRoaXMuaW50ZXJuYWxTdGF0ZS5tb2R1bGU7XG5cbiAgICAgICAgdGhpcy5zYXZlUHJlZmVyZW5jZShtb2R1bGUsICdjdXJyZW50LXNvcnQnLCB0aGlzLnJlY29yZExpc3Quc29ydCk7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZVBhZ2luYXRpb25Mb2NhbFN0b3JhZ2UoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IHRoaXMuaW50ZXJuYWxTdGF0ZS5tb2R1bGU7XG4gICAgICAgIGNvbnN0IGtleSA9IG1vZHVsZSArICctJyArIHRoaXMuZ2V0UHJlZmVyZW5jZUtleSgnY3VycmVudC1wYWdpbmF0aW9uJyk7XG4gICAgICAgIHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5zZXQoa2V5LCB0aGlzLnJlY29yZExpc3QucGFnaW5hdGlvbik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlZCBkaXNwbGF5ZWQgY29sdW1ucycgdWkgdXNlciBwcmVmZXJlbmNlXG4gICAgICogQHBhcmFtIGRpc3BsYXlcbiAgICAgKi9cbiAgICBwdWJsaWMgdXBkYXRlRGlzcGxheWVkQ29sdW1uc1ByZWZlcmVuY2UoZGlzcGxheTogc3RyaW5nW10pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbW9kdWxlID0gdGhpcy5pbnRlcm5hbFN0YXRlLm1vZHVsZTtcbiAgICAgICAgdGhpcy5zYXZlUHJlZmVyZW5jZShtb2R1bGUsICdkaXNwbGF5ZWQtY29sdW1ucycsIGRpc3BsYXkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBkaXNwbGF5ZWQgY29sdW1ucycgdWkgdXNlciBwcmVmZXJlbmNlXG4gICAgICovXG4gICAgcHVibGljIGdldERpc3BsYXllZENvbHVtbnNQcmVmZXJlbmNlKCk6IHN0cmluZ1tdIHtcbiAgICAgICAgY29uc3QgbW9kdWxlID0gdGhpcy5pbnRlcm5hbFN0YXRlLm1vZHVsZTtcbiAgICAgICAgY29uc3QgZGlzcGxheWVkQ29sdW1ucyA9IHRoaXMubG9hZFByZWZlcmVuY2UobW9kdWxlLCAnZGlzcGxheWVkLWNvbHVtbnMnKTtcblxuICAgICAgICBpZiAoIWlzQXJyYXkoZGlzcGxheWVkQ29sdW1ucykgfHwgIWRpc3BsYXllZENvbHVtbnMgfHwgIWRpc3BsYXllZENvbHVtbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoZGlzcGxheWVkQ29sdW1ucyBhcyBzdHJpbmdbXSk7XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgdHJpZ2dlckRhdGFVcGRhdGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGF0YVVwZGF0ZVN0YXRlLm5leHQodHJ1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9hZCAvIHJlbG9hZCByZWNvcmRzIHVzaW5nIGN1cnJlbnQgcGFnaW5hdGlvbiBhbmQgY3JpdGVyaWFcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gdXNlQ2FjaGUgaWYgdG8gdXNlIGNhY2hlXG4gICAgICogQHJldHVybnMge29iamVjdH0gT2JzZXJ2YWJsZTxMaXN0Vmlld1N0YXRlPlxuICAgICAqL1xuICAgIHB1YmxpYyBsb2FkKHVzZUNhY2hlID0gdHJ1ZSk6IE9ic2VydmFibGU8UmVjb3JkTGlzdD4ge1xuICAgICAgICBjb25zdCBtb2R1bGUgPSB0aGlzLmludGVybmFsU3RhdGUubW9kdWxlO1xuXG4gICAgICAgIHRoaXMuc2F2ZVByZWZlcmVuY2UobW9kdWxlLCAnY3VycmVudC1maWx0ZXJzJywgdGhpcy5pbnRlcm5hbFN0YXRlLmFjdGl2ZUZpbHRlcnMpO1xuICAgICAgICB0aGlzLnNhdmVQcmVmZXJlbmNlKG1vZHVsZSwgJ2N1cnJlbnQtc29ydCcsIHRoaXMucmVjb3JkTGlzdC5zb3J0KTtcbiAgICAgICAgdGhpcy51cGRhdGVQYWdpbmF0aW9uTG9jYWxTdG9yYWdlKCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVjb3JkTGlzdC5sb2FkKHVzZUNhY2hlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBBUElcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgc3RhdGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzdGF0ZSB0byBzZXRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgdXBkYXRlU3RhdGUoc3RhdGU6IExpc3RWaWV3U3RhdGUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdG9yZS5uZXh0KHRoaXMuaW50ZXJuYWxTdGF0ZSA9IHN0YXRlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgQWN0aXZlIHF1aWNrIGZpbHRlcnNcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldEFjdGl2ZVF1aWNrRmlsdGVycygpOiBTYXZlZEZpbHRlck1hcCB7XG4gICAgICAgIGxldCB7J2RlZmF1bHQnOiBkZWZhdWx0RmlsdGVyLCAuLi5jdXJyZW50UXVpY2tGaWx0ZXJzfSA9IHRoaXMuYWN0aXZlRmlsdGVycztcbiAgICAgICAgbGV0IGFjdGl2ZUZpbHRlcnMgPSB7fSBhcyBTYXZlZEZpbHRlck1hcDtcblxuICAgICAgICBPYmplY3Qua2V5cyhjdXJyZW50UXVpY2tGaWx0ZXJzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhY3RpdmVGaWx0ZXIgPSBjdXJyZW50UXVpY2tGaWx0ZXJzW2tleV0gPz8gbnVsbDtcbiAgICAgICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBpc1F1aWNrRmlsdGVyID0gYWN0aXZlRmlsdGVyPy5hdHRyaWJ1dGVzPy5xdWlja19maWx0ZXIgPz8gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmIChpc1F1aWNrRmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlRmlsdGVyc1trZXldID0gYWN0aXZlRmlsdGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGFjdGl2ZUZpbHRlcnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWVyZ2UgQ3JpdGVyaWFcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIG1lcmdlQ3JpdGVyaWEoZmlsdGVyczogU2F2ZWRGaWx0ZXJNYXApOiBTZWFyY2hDcml0ZXJpYSB7XG5cbiAgICAgICAgbGV0IGNyaXRlcmlhID0ge30gYXMgU2VhcmNoQ3JpdGVyaWE7XG5cbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGZpbHRlcnMgPz8ge30pID8/IFtdO1xuXG4gICAgICAgIGtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmlsdGVyID0gZmlsdGVyc1trZXldID8/IG51bGw7XG4gICAgICAgICAgICBjb25zdCBmaWx0ZXJDcml0ZXJpYSA9IGZpbHRlcj8uY3JpdGVyaWEgPz8gbnVsbDtcbiAgICAgICAgICAgIGNvbnN0IGZpbHRlckNyaXRlcmlhS2V5cyA9IE9iamVjdC5rZXlzKGZpbHRlckNyaXRlcmlhPy5maWx0ZXJzID8/IHt9KTtcbiAgICAgICAgICAgIGlmIChmaWx0ZXJDcml0ZXJpYSA9PT0gbnVsbCB8fCAoZmlsdGVyQ3JpdGVyaWFLZXlzICYmICFmaWx0ZXJDcml0ZXJpYUtleXMubGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGVtcHR5T2JqZWN0KGNyaXRlcmlhKSkge1xuICAgICAgICAgICAgICAgIGNyaXRlcmlhID0gZGVlcENsb25lKGZpbHRlckNyaXRlcmlhKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZpbHRlckNyaXRlcmlhS2V5cy5mb3JFYWNoKGNyaXRlcmlhS2V5ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWx0ZXJDcml0ZXJpYUNvbnRlbnQgPSBmaWx0ZXJDcml0ZXJpYT8uZmlsdGVyc1tjcml0ZXJpYUtleV0gPz8gbnVsbDtcbiAgICAgICAgICAgICAgICBjb25zdCBjcml0ZXJpYUNvbnRlbnQgPSBjcml0ZXJpYT8uZmlsdGVyc1tjcml0ZXJpYUtleV0gPz8gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoIWZpbHRlckNyaXRlcmlhQ29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgY3JpdGVyaWFPcGVyYXRvciA9IGNyaXRlcmlhQ29udGVudD8ub3BlcmF0b3IgPz8gbnVsbFxuXG4gICAgICAgICAgICAgICAgaWYgKCFjcml0ZXJpYUNvbnRlbnQgfHwgIWNyaXRlcmlhT3BlcmF0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY3JpdGVyaWEuZmlsdGVyc1tjcml0ZXJpYUtleV0gPSBkZWVwQ2xvbmUoZmlsdGVyQ3JpdGVyaWFDb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbHRlckNyaXRlcmlhT3BlcmF0b3IgPSBmaWx0ZXJDcml0ZXJpYUNvbnRlbnQ/Lm9wZXJhdG9yID8/IG51bGxcbiAgICAgICAgICAgICAgICBpZiAoZmlsdGVyQ3JpdGVyaWFPcGVyYXRvciAhPT0gY3JpdGVyaWFPcGVyYXRvciB8fCBmaWx0ZXJDcml0ZXJpYU9wZXJhdG9yICE9PSAnPScpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGNyaXRlcmlhLmZpbHRlcnNbY3JpdGVyaWFLZXldO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY3JpdGVyaWFDb250ZW50LnZhbHVlcyA9IHVuaW9uKGNyaXRlcmlhQ29udGVudC52YWx1ZXMgPz8gW10sIGZpbHRlckNyaXRlcmlhQ29udGVudC52YWx1ZXMgPz8gW10pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBjcml0ZXJpYTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPcGVuIGNvbHVtbnMgY2hvb3NlciBtb2RhbFxuICAgICAqL1xuICAgIG9wZW5Db2x1bW5DaG9vc2VyRGlhbG9nKCk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IG1vZGFsUmVmID0gdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihDb2x1bW5DaG9vc2VyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBhcmlhTGFiZWxsZWRCeTogJ21vZGFsLWJhc2ljLXRpdGxlJyxcbiAgICAgICAgICAgIGNlbnRlcmVkOiB0cnVlLFxuICAgICAgICAgICAgc2l6ZTogJ2xnJyxcbiAgICAgICAgICAgIHdpbmRvd0NsYXNzOiAnY29sdW1uLWNob29zZXItbW9kYWwnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGRpc3BsYXllZENvbHVtbnMgPSB0aGlzLmNvbHVtbnMuZ2V0VmFsdWUoKS5maWx0ZXIoZnVuY3Rpb24gKGNvbCkge1xuICAgICAgICAgICAgcmV0dXJuICFjb2wuaGFzT3duUHJvcGVydHkoJ2RlZmF1bHQnKVxuICAgICAgICAgICAgICAgIHx8IChjb2wuaGFzT3duUHJvcGVydHkoJ2RlZmF1bHQnKSAmJiBjb2wuZGVmYXVsdCA9PT0gdHJ1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGhpZGRlbkNvbHVtbnMgPSB0aGlzLmNvbHVtbnMuZ2V0VmFsdWUoKS5maWx0ZXIoZnVuY3Rpb24gKGNvbCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbC5oYXNPd25Qcm9wZXJ0eSgnZGVmYXVsdCcpICYmIGNvbC5kZWZhdWx0ID09PSBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbW9kYWxSZWYuY29tcG9uZW50SW5zdGFuY2UuZGlzcGxheWVkID0gZGlzcGxheWVkQ29sdW1ucztcbiAgICAgICAgbW9kYWxSZWYuY29tcG9uZW50SW5zdGFuY2UuaGlkZGVuID0gaGlkZGVuQ29sdW1ucztcblxuICAgICAgICBtb2RhbFJlZi5yZXN1bHQudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlc3VsdC5kaXNwbGF5ZWQgfHwgIXJlc3VsdC5oaWRkZW4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBhbGxDb2x1bW5zOiBDb2x1bW5EZWZpbml0aW9uW10gPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkRGlzcGxheUNvbHVtbnM6IENvbHVtbkRlZmluaXRpb25bXSA9IHJlc3VsdC5kaXNwbGF5ZWQ7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZEhpZGVDb2x1bW5zOiBDb2x1bW5EZWZpbml0aW9uW10gPSByZXN1bHQuaGlkZGVuO1xuXG4gICAgICAgICAgICBzZWxlY3RlZERpc3BsYXlDb2x1bW5zLmZvckVhY2goZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgICAgICAgICAgIGNvbHVtbi5kZWZhdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2VsZWN0ZWRIaWRlQ29sdW1ucy5mb3JFYWNoKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgICAgICAgICAgICBjb2x1bW4uZGVmYXVsdCA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhbGxDb2x1bW5zLnB1c2goLi4uc2VsZWN0ZWREaXNwbGF5Q29sdW1ucywgLi4uc2VsZWN0ZWRIaWRlQ29sdW1ucyk7XG4gICAgICAgICAgICB0aGlzLmNvbHVtbnMubmV4dChhbGxDb2x1bW5zKTtcblxuICAgICAgICAgICAgY29uc3QgZGlzcGxheWVkQ29scyA9IHNlbGVjdGVkRGlzcGxheUNvbHVtbnMubWFwKGNvbCA9PiBjb2wubmFtZSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZURpc3BsYXllZENvbHVtbnNQcmVmZXJlbmNlKGRpc3BsYXllZENvbHMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgaWYgd2lkZ2V0cyBhcmUgdG8gZGlzcGxheVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBjYWxjdWxhdGVTaG93V2lkZ2V0cygpOiB2b2lkIHtcbiAgICAgICAgbGV0IHNob3cgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBtZXRhID0gdGhpcy5tZXRhZGF0YVN0b3JlLmdldCgpIHx8IHt9O1xuICAgICAgICBjb25zdCBsaXN0Vmlld01ldGEgPSBtZXRhLmxpc3RWaWV3IHx8IHt9IGFzIExpc3RWaWV3TWV0YTtcbiAgICAgICAgY29uc3Qgc2lkZWJhcldpZGdldHNDb25maWcgPSBsaXN0Vmlld01ldGEuc2lkZWJhcldpZGdldHMgfHwgW107XG5cbiAgICAgICAgaWYgKHNpZGViYXJXaWRnZXRzQ29uZmlnICYmIHNpZGViYXJXaWRnZXRzQ29uZmlnLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHNob3cgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2hvd1NpZGViYXJXaWRnZXRzID0gdGhpcy5sb2FkUHJlZmVyZW5jZSh0aGlzLmdldE1vZHVsZU5hbWUoKSwgJ3Nob3ctc2lkZWJhci13aWRnZXRzJykgPz8gbnVsbDtcblxuICAgICAgICBpZiAoc2hvd1NpZGViYXJXaWRnZXRzICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dTaWRlYmFyV2lkZ2V0cyA9IHNob3dTaWRlYmFyV2lkZ2V0cztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1NpZGViYXJXaWRnZXRzID0gc2hvdztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMud2lkZ2V0cyA9IHNob3c7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGQgdWkgdXNlciBwcmVmZXJlbmNlIGtleVxuICAgICAqIEBwYXJhbSBzdG9yYWdlS2V5XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRQcmVmZXJlbmNlS2V5KHN0b3JhZ2VLZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhZ2VLZXkgKyAnLScgKyBzdG9yYWdlS2V5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNhdmUgdWkgdXNlciBwcmVmZXJlbmNlXG4gICAgICogQHBhcmFtIG1vZHVsZVxuICAgICAqIEBwYXJhbSBzdG9yYWdlS2V5XG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBzYXZlUHJlZmVyZW5jZShtb2R1bGU6IHN0cmluZywgc3RvcmFnZUtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMucHJlZmVyZW5jZXMuc2V0VWkobW9kdWxlLCB0aGlzLmdldFByZWZlcmVuY2VLZXkoc3RvcmFnZUtleSksIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkIHVpIHVzZXIgcHJlZmVyZW5jZVxuICAgICAqIEBwYXJhbSBtb2R1bGVcbiAgICAgKiBAcGFyYW0gc3RvcmFnZUtleVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgbG9hZFByZWZlcmVuY2UobW9kdWxlOiBzdHJpbmcsIHN0b3JhZ2VLZXk6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByZWZlcmVuY2VzLmdldFVpKG1vZHVsZSwgdGhpcy5nZXRQcmVmZXJlbmNlS2V5KHN0b3JhZ2VLZXkpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkIGN1cnJlbnQgZmlsdGVyXG4gICAgICogQHBhcmFtIG1vZHVsZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgbG9hZEN1cnJlbnRGaWx0ZXIobW9kdWxlOiBzdHJpbmcpOiB2b2lkIHtcblxuICAgICAgICBjb25zdCBhY3RpdmVGaWx0ZXJzUHJlZiA9IHRoaXMubG9hZFByZWZlcmVuY2UobW9kdWxlLCAnY3VycmVudC1maWx0ZXJzJykgPz8ge30gYXMgU2F2ZWRGaWx0ZXJNYXA7XG4gICAgICAgIGlmICghYWN0aXZlRmlsdGVyc1ByZWYgfHwgZW1wdHlPYmplY3QoYWN0aXZlRmlsdGVyc1ByZWYpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY3VycmVudFNvcnQgPSB0aGlzLmxvYWRQcmVmZXJlbmNlKG1vZHVsZSwgJ2N1cnJlbnQtc29ydCcpIGFzIFNvcnRpbmdTZWxlY3Rpb247XG4gICAgICAgIGlmICghY3VycmVudFNvcnQgJiYgZW1wdHlPYmplY3QoY3VycmVudFNvcnQpKSB7XG4gICAgICAgICAgICBjdXJyZW50U29ydCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldEZpbHRlcnMoYWN0aXZlRmlsdGVyc1ByZWYsIGZhbHNlLCBjdXJyZW50U29ydCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9hZCBjdXJyZW50IGZpbHRlclxuICAgICAqIEBwYXJhbSBtb2R1bGVcbiAgICAgKiBAcGFyYW0gcXVlcnlQYXJhbXNcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGxvYWRRdWVyeUZpbHRlciAoXG4gICAgICAgIG1vZHVsZTpzdHJpbmcsXG4gICAgICAgIHF1ZXJ5UGFyYW1zOiBQYXJhbXNcbiAgICApOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgb3JkZXJCeTogc3RyaW5nID0gcXVlcnlQYXJhbXNbJ29yZGVyQnknXSA/PyAnJztcbiAgICAgICAgY29uc3Qgc29ydE9yZGVyOiBzdHJpbmcgPSBxdWVyeVBhcmFtc1snc29ydE9yZGVyJ10gPz8gJyc7XG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMucmVjb3JkTGlzdC5tYXBTb3J0T3JkZXIoc29ydE9yZGVyKTtcblxuICAgICAgICBjb25zdCBmaWx0ZXIgPSB0aGlzLmxpc3RWaWV3VXJsUXVlcnlTZXJ2aWNlLmJ1aWxkVXJsUXVlcnlCYXNlZEZpbHRlcihcbiAgICAgICAgICAgIG1vZHVsZSxcbiAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxTdGF0ZS5hY3RpdmVGaWx0ZXJzLmRlZmF1bHQsXG4gICAgICAgICAgICBxdWVyeVBhcmFtc1xuICAgICAgICApO1xuICAgICAgICBpZiAoaXNFbXB0eShmaWx0ZXIpKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZpbHRlcnMgPSB7ICdkZWZhdWx0JzogZmlsdGVyIH07XG5cbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICAgICAgICAuLi50aGlzLmludGVybmFsU3RhdGUsXG4gICAgICAgICAgICBhY3RpdmVGaWx0ZXJzOiBkZWVwQ2xvbmUoZmlsdGVycyksXG4gICAgICAgICAgICBvcGVuRmlsdGVyOiBkZWVwQ2xvbmUoZmlsdGVyKVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnJlY29yZExpc3QudXBkYXRlU29ydGluZyhvcmRlckJ5LCBkaXJlY3Rpb24sIGZhbHNlKTtcbiAgICAgICAgdGhpcy5yZWNvcmRMaXN0LnVwZGF0ZVNlYXJjaENyaXRlcmlhKGZpbHRlci5jcml0ZXJpYSwgZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvYWQgY3VycmVudCBzb3J0aW5nXG4gICAgICogQHBhcmFtIG1vZHVsZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgbG9hZEN1cnJlbnRTb3J0KG1vZHVsZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTb3J0ID0gdGhpcy5sb2FkUHJlZmVyZW5jZShtb2R1bGUsICdjdXJyZW50LXNvcnQnKTtcbiAgICAgICAgaWYgKCFjdXJyZW50U29ydCB8fCBlbXB0eU9iamVjdChjdXJyZW50U29ydCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVjb3JkTGlzdC5zb3J0ID0gY3VycmVudFNvcnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9hZCBjdXJyZW50IHBhZ2luYXRpb25cbiAgICAgKiBAcGFyYW0gbW9kdWxlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBsb2FkQ3VycmVudFBhZ2luYXRpb24obW9kdWxlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qga2V5ID0gbW9kdWxlICsgJy0nICsgdGhpcy5nZXRQcmVmZXJlbmNlS2V5KCdjdXJyZW50LXBhZ2luYXRpb24nKTtcbiAgICAgICAgY29uc3QgY3VycmVudFBhZ2luYXRpb24gPSB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KGtleSkgYXMgUGFnaW5hdGlvbjtcbiAgICAgICAgaWYgKCFjdXJyZW50UGFnaW5hdGlvbiB8fCBlbXB0eU9iamVjdChjdXJyZW50UGFnaW5hdGlvbikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVjb3JkTGlzdC5wYWdpbmF0aW9uID0gY3VycmVudFBhZ2luYXRpb247XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGN1cnJlbnQgcGFnaW5hdGlvbiBUeXBlXG4gICAgICogQHBhcmFtIG1vZHVsZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0Q3VycmVudFBhZ2luYXRpb25UeXBlKG1vZHVsZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgY3VycmVudFBhZ2luYXRpb25UeXBlID0gdGhpcy5sb2FkUHJlZmVyZW5jZShtb2R1bGUsICdjdXJyZW50LXBhZ2luYXRpb24tdHlwZScpO1xuICAgICAgICBpZiAoIWN1cnJlbnRQYWdpbmF0aW9uVHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuICdwYWdpbmF0aW9uJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjdXJyZW50UGFnaW5hdGlvblR5cGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGN1cnJlbnQgcGFnaW5hdGlvbiBUeXBlXG4gICAgICogQHBhcmFtIG1vZHVsZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgc2V0Q3VycmVudFBhZ2luYXRpb25UeXBlKG1vZHVsZTogc3RyaW5nLCBwYWdpbmF0aW9uVHlwZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc2F2ZVByZWZlcmVuY2UobW9kdWxlLCAnY3VycmVudC1wYWdpbmF0aW9uLXR5cGUnLCBwYWdpbmF0aW9uVHlwZSk7XG4gICAgfVxuXG5cblxuICAgIC8qKlxuICAgICAqIExvYWQgY3VycmVudCBkaXNwbGF5ZWQgY29sdW1uc1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgbG9hZEN1cnJlbnREaXNwbGF5ZWRDb2x1bW5zKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm1ldGFkYXRhU3RvcmUubGlzdFZpZXdDb2x1bW5zJC5waXBlKHRha2UoMSkpLnN1YnNjcmliZShjb2xzID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRpc3BsYXllZENvbHVtbnMgPSB0aGlzLmdldERpc3BsYXllZENvbHVtbnNQcmVmZXJlbmNlKCk7XG5cbiAgICAgICAgICAgIGlmICghZGlzcGxheWVkQ29sdW1ucyB8fCAhY29scykge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sdW1ucy5uZXh0KGNvbHMpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgY29sTWFwID0ge30gYXMgeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH07XG4gICAgICAgICAgICBkaXNwbGF5ZWRDb2x1bW5zLmZvckVhY2goZGlzcGxheWVkQ29sdW1uID0+IHtcbiAgICAgICAgICAgICAgICBjb2xNYXBbZGlzcGxheWVkQ29sdW1uXSA9IHRydWU7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBjb25zdCBkaXNwbGF5ZWRNYXAgPSB7fSBhcyB7IFtrZXk6IHN0cmluZ106IENvbHVtbkRlZmluaXRpb24gfTtcblxuICAgICAgICAgICAgY29uc3QgaGlkZGVuID0gW10gYXMgQ29sdW1uRGVmaW5pdGlvbltdO1xuICAgICAgICAgICAgY29scy5mb3JFYWNoKGNvbCA9PiB7XG4gICAgICAgICAgICAgICAgY29sLmRlZmF1bHQgPSBjb2xNYXBbY29sLm5hbWVdID8/IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmIChjb2wuZGVmYXVsdCkge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5ZWRNYXBbY29sLm5hbWVdID0gY29sO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGhpZGRlbi5wdXNoKGNvbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRpc3BsYXllZCA9IGRpc3BsYXllZENvbHVtbnMuZmlsdGVyKGNvbCA9PiAhIWRpc3BsYXllZE1hcFtjb2xdKS5tYXAoY29sID0+IGRpc3BsYXllZE1hcFtjb2xdKTtcblxuICAgICAgICAgICAgdGhpcy5jb2x1bW5zLm5leHQoWy4uLmRpc3BsYXllZCwgLi4uaGlkZGVuXSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIGRhdGEgdXBkYXRlIHN0YXRlLlxuICAgICAqIEl0IHNob3VsZCBiZSBlbWl0dGVkIG9uIGFueSBjaGFuZ2UgaW4gdmFsdWVzIG9uIHRoZSByZWNvcmQgbGlzdC5cbiAgICAgKiBSZWxvYWQvUGFnaW5hdGlvbiBpcyBub3QgY29uc2lkZXJlZCBhcyBhIGRhdGEgdXBkYXRlXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGluaXREYXRhVXBkYXRlU3RhdGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGF0YVVwZGF0ZVN0YXRlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPih0cnVlKTtcbiAgICAgICAgdGhpcy5kYXRhVXBkYXRlJCA9IHRoaXMuZGF0YVVwZGF0ZVN0YXRlLmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqICBJbml0aWFsaXplIHRoZSBkYXRhU2V0IHVwZGF0ZSBzdGF0ZS5cbiAgICAgKiAgSXQgc2hvdWxkIGJlIGVtaXR0ZWQgb24gYW55IGNoYW5nZSBpbiBkYXRhU2V0IGUuZy4gZHVlIHRvIGRhdGEgZmlsdGVyLCBkdWUgdG8gZGF0YSBkZWxldGUsXG4gICAgICogIGR1ZSB0byBkYXRhIGVkaXQgb3IgYW55IGV2ZW50IHdoaWNoIGNhdXNlcyBjaGFuZ2UgaW4gdGhlIHJlc3VsdGluZyBkYXRhU2V0LlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBpbml0RGF0YVNldFVwZGF0ZWRTdGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kYXRhU2V0VXBkYXRlJCA9IHRoaXMuY3JpdGVyaWEkLnBpcGUoXG4gICAgICAgICAgICBjb21iaW5lTGF0ZXN0V2l0aCh0aGlzLmRhdGFVcGRhdGUkKSxcbiAgICAgICAgICAgIG1hcCgoKSA9PiB0cnVlKVxuICAgICAgICApO1xuICAgIH1cbn1cbiJdfQ==