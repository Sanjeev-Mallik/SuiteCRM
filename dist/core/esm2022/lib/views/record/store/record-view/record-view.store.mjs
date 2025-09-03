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
import { isEmpty } from 'lodash-es';
import { BehaviorSubject, combineLatest, combineLatestWith, of } from 'rxjs';
import { catchError, distinctUntilChanged, finalize, map, take, tap } from 'rxjs/operators';
import { inject, Injectable } from '@angular/core';
import { isVoid } from '../../../../common/utils/value-utils';
import { deepClone } from '../../../../common/utils/object-utils';
import { NavigationStore } from '../../../../store/navigation/navigation.store';
import { RecordSaveGQL } from '../../../../store/record/graphql/api.record.save';
import { LanguageStore } from '../../../../store/language/language.store';
import { ModuleNavigation } from '../../../../services/navigation/module-navigation/module-navigation.service';
import { MetadataStore } from '../../../../store/metadata/metadata.store.service';
import { MessageService } from '../../../../services/message/message.service';
import { AppStateStore } from '../../../../store/app-state/app-state.store';
import { RecordManager } from '../../../../services/record/record.manager';
import { LocalStorageService } from '../../../../services/local-storage/local-storage.service';
import { SubpanelStoreFactory } from '../../../../containers/subpanel/store/subpanel/subpanel.store.factory';
import { ViewStore } from '../../../../store/view/view.store';
import { RecordFetchGQL } from '../../../../store/record/graphql/api.record.get';
import { StatisticsBatch } from '../../../../store/statistics/statistics-batch.service';
import { RecordStoreFactory } from '../../../../store/record/record.store.factory';
import { UserPreferenceStore } from '../../../../store/user-preference/user-preference.store';
import { PanelLogicManager } from '../../../../components/panel-logic/panel-logic.manager';
import { RecordConvertService } from "../../../../services/record/record-convert.service";
import { FieldActionsAdapterFactory } from "../../../../components/field-layout/adapters/field.actions.adapter.factory";
import { RecordValidationHandler } from "../../../../services/record/validation/record-validation.handler";
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/record/graphql/api.record.get";
import * as i2 from "../../../../store/record/graphql/api.record.save";
import * as i3 from "../../../../store/app-state/app-state.store";
import * as i4 from "../../../../store/language/language.store";
import * as i5 from "../../../../store/navigation/navigation.store";
import * as i6 from "../../../../services/navigation/module-navigation/module-navigation.service";
import * as i7 from "../../../../store/metadata/metadata.store.service";
import * as i8 from "../../../../services/local-storage/local-storage.service";
import * as i9 from "../../../../services/message/message.service";
import * as i10 from "../../../../containers/subpanel/store/subpanel/subpanel.store.factory";
import * as i11 from "../../../../services/record/record.manager";
import * as i12 from "../../../../store/statistics/statistics-batch.service";
import * as i13 from "../../../../store/record/record.store.factory";
import * as i14 from "../../../../store/user-preference/user-preference.store";
import * as i15 from "../../../../components/panel-logic/panel-logic.manager";
import * as i16 from "../../../../services/record/record-convert.service";
const initialState = {
    module: '',
    recordID: '',
    loading: false,
    widgets: false,
    showSidebarWidgets: false,
    showBottomWidgets: false,
    showTopWidget: false,
    showSubpanels: false,
    mode: 'detail',
    params: {
        returnModule: '',
        returnId: '',
        returnAction: ''
    }
};
export class RecordViewStore extends ViewStore {
    constructor(recordFetchGQL, recordSaveGQL, appStateStore, languageStore, navigationStore, moduleNavigation, metadataStore, localStorage, message, subpanelFactory, recordManager, statisticsBatch, recordStoreFactory, preferences, panelLogicManager, recordConvertService) {
        super(appStateStore, languageStore, navigationStore, moduleNavigation, metadataStore);
        this.recordFetchGQL = recordFetchGQL;
        this.recordSaveGQL = recordSaveGQL;
        this.appStateStore = appStateStore;
        this.languageStore = languageStore;
        this.navigationStore = navigationStore;
        this.moduleNavigation = moduleNavigation;
        this.metadataStore = metadataStore;
        this.localStorage = localStorage;
        this.message = message;
        this.subpanelFactory = subpanelFactory;
        this.recordManager = recordManager;
        this.statisticsBatch = statisticsBatch;
        this.recordStoreFactory = recordStoreFactory;
        this.preferences = preferences;
        this.panelLogicManager = panelLogicManager;
        this.recordConvertService = recordConvertService;
        this.panels = [];
        /** Internal Properties */
        this.cache$ = null;
        this.internalState = deepClone(initialState);
        this.store = new BehaviorSubject(this.internalState);
        this.state$ = this.store.asObservable();
        this.subpanelReloadSubject = new BehaviorSubject({});
        this.subpanelReloadSub = [];
        this.subs = [];
        this.fieldSubs = [];
        this.panelsSubject = new BehaviorSubject(this.panels);
        this.actionAdaptorFactory = inject(FieldActionsAdapterFactory);
        this.panels$ = this.panelsSubject.asObservable();
        this.recordStore = recordStoreFactory.create(this.getViewFieldsObservable(), this.getRecordMetadata$());
        this.record$ = this.recordStore.state$.pipe(distinctUntilChanged());
        this.stagingRecord$ = this.recordStore.staging$.pipe(distinctUntilChanged());
        this.loading$ = this.state$.pipe(map(state => state.loading));
        this.widgets$ = this.state$.pipe(map(state => state.widgets));
        this.showSidebarWidgets$ = this.state$.pipe(map(state => state.showSidebarWidgets));
        this.showBottomWidgets$ = this.state$.pipe(map(state => state.showBottomWidgets));
        this.showTopWidget$ = this.state$.pipe(map(state => state.showTopWidget));
        this.showSubpanels$ = this.state$.pipe(map(state => state.showSubpanels));
        this.mode$ = this.state$.pipe(map(state => state.mode));
        this.subpanelReload$ = this.subpanelReloadSubject.asObservable();
        const data$ = this.record$.pipe(combineLatestWith(this.loading$), map(([record, loading]) => {
            this.data = { record, loading };
            return this.data;
        }));
        this.vm$ = data$.pipe(combineLatestWith(this.appData$, this.metadata$), map(([data, appData, metadata]) => {
            this.vm = { data, appData, metadata };
            return this.vm;
        }));
        this.subpanelsState = new BehaviorSubject({});
        this.subpanels$ = this.subpanelsState.asObservable();
        this.viewContext$ = this.record$.pipe(map(() => this.getViewContext()));
        this.initPanels();
        this.recordValidationHandler = inject(RecordValidationHandler);
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
    get showBottomWidgets() {
        return this.internalState.showBottomWidgets;
    }
    set showBottomWidgets(show) {
        this.updateState({
            ...this.internalState,
            showBottomWidgets: show
        });
    }
    get showTopWidget() {
        return this.internalState.showTopWidget;
    }
    set showTopWidget(show) {
        this.updateState({
            ...this.internalState,
            showTopWidget: show
        });
    }
    get showSubpanels() {
        return this.internalState.showTopWidget;
    }
    set showSubpanels(show) {
        this.updateState({
            ...this.internalState,
            showSubpanels: show
        });
    }
    get params() {
        return this.internalState.params || {};
    }
    set params(params) {
        this.updateState({
            ...this.internalState,
            params
        });
    }
    getModuleName() {
        return this.internalState.module;
    }
    getRecordId() {
        return this.internalState.recordID;
    }
    getViewContext() {
        return {
            module: this.getModuleName(),
            id: this.getRecordId(),
            record: this.getBaseRecord()
        };
    }
    getSubpanels() {
        return this.subpanels;
    }
    /**
     * Clean destroy
     */
    destroy() {
        this.clear();
    }
    /**
     * Initial record load if not cached and update state.
     * Returns observable to be used in resolver if needed
     *
     * @param {string} module to use
     * @param {string} recordID to use
     * @param {string} mode to use
     * @param {object} params to set
     * @returns {object} Observable<any>
     */
    init(module, recordID, mode = 'detail', params = {}) {
        this.internalState.module = module;
        this.internalState.recordID = recordID;
        this.setMode(mode);
        this.initSubpanels(module, recordID);
        this.calculateShowWidgets();
        return this.load().pipe(tap(() => {
            this.showTopWidget = true;
            setTimeout(() => this.loadSubpanelStatistics(module), 1500);
            this.parseParams(params);
        }));
    }
    /**
     * Clear observable cache
     */
    clear() {
        this.cache$ = null;
        this.clearSubpanels();
        this.subpanelsState.unsubscribe();
        this.updateState(deepClone(initialState));
        this.subs = this.safeUnsubscription(this.subs);
        this.fieldSubs = this.safeUnsubscription(this.fieldSubs);
    }
    /**
     * Get staging record
     *
     * @returns {string} ViewMode
     */
    getBaseRecord() {
        if (!this.internalState) {
            return null;
        }
        return this.recordStore.getBaseRecord();
    }
    /**
     * Get current view mode
     *
     * @returns {string} ViewMode
     */
    getMode() {
        if (!this.internalState) {
            return null;
        }
        return this.internalState.mode;
    }
    /**
     * Set new mode
     *
     * @param {string} mode ViewMode
     */
    setMode(mode) {
        this.updateState({ ...this.internalState, mode });
    }
    save() {
        this.appStateStore.updateLoading(`${this.internalState.module}-record-save`, true);
        this.updateState({
            ...this.internalState,
            loading: true
        });
        return this.recordStore.save().pipe(catchError(() => {
            this.message.addDangerMessageByKey('LBL_ERROR_SAVING');
            return of({});
        }), finalize(() => {
            this.setMode('detail');
            this.appStateStore.updateLoading(`${this.internalState.module}-record-save`, false);
            this.updateState({
                ...this.internalState,
                loading: false
            });
        }));
    }
    saveOnEdit() {
        return this.recordStore.save().pipe(catchError(() => {
            this.message.addDangerMessageByKey('LBL_ERROR_SAVING');
            return of({});
        }), finalize(() => {
            this.appStateStore.updateLoading(`${this.internalState.module}-record-save`, false);
            this.updateState({
                ...this.internalState,
                loading: false
            });
        }));
    }
    /**
     * Load / reload record using current pagination and criteria
     *
     * @param {boolean} useCache if to use cache
     * @returns {object} Observable<RecordViewState>
     */
    load(useCache = true) {
        this.updateState({
            ...this.internalState,
            loading: true
        });
        return this.recordStore.retrieveRecord(this.internalState.module, this.internalState.recordID, useCache).pipe(tap((data) => {
            this.updateState({
                ...this.internalState,
                recordID: data.id,
                module: data.module,
                loading: false
            });
        }));
    }
    /**
     * Get summary template
     *
     * @returns {string} summary template label
     */
    getSummaryTemplate() {
        const metadata = this.metadata || {};
        const recordMeta = metadata.recordView || {};
        const templates = recordMeta.summaryTemplates || {};
        return templates[this.getMode()] || '';
    }
    /**
     * Parse query params
     *
     * @param {object} params to set
     */
    parseParams(params = {}) {
        if (!params) {
            return;
        }
        const currentParams = { ...this.internalState.params };
        Object.keys(params).forEach(paramKey => {
            if (!isVoid(currentParams[paramKey])) {
                currentParams[paramKey] = params[paramKey];
                return;
            }
        });
        this.params = params;
    }
    /**
     * Load all statistics
     *
     * @param {string} module if to use cache
     */
    loadSubpanelStatistics(module) {
        const subpanels = this.subpanelsState.value;
        if (!subpanels) {
            return;
        }
        const queries = {};
        Object.keys(subpanels).forEach(subpanelKey => {
            const subpanel = subpanels[subpanelKey];
            const statsMap = subpanel.statistics;
            if (!statsMap || !Object.keys(statsMap).length) {
                return;
            }
            if (subpanel.shouldBatchStatistic() === false) {
                subpanel.loadAllStatistics().pipe(take(1)).subscribe();
                return;
            }
            const subpanelQueries = subpanel.getAllStatisticQuery();
            Object.keys(subpanelQueries).forEach(subpanelQueryKey => {
                const queryKey = this.buildStatKey(subpanelKey, subpanelQueryKey);
                queries[queryKey] = subpanelQueries[subpanelQueryKey];
            });
            subpanel.setAllStatisticsLoading(true);
        });
        this.statisticsBatch.fetch(module, queries)
            .pipe(take(1))
            .subscribe((stats) => {
            Object.keys(subpanels).forEach(subpanelKey => {
                const subpanel = subpanels[subpanelKey];
                const subpanelQueries = subpanel.getAllStatisticQuery();
                Object.keys(subpanelQueries).forEach(subpanelQueryKey => {
                    const queryKey = this.buildStatKey(subpanelKey, subpanelQueryKey);
                    const stat = stats[queryKey];
                    if (!stat) {
                        return;
                    }
                    subpanel.setStatistics(subpanelQueryKey, stat, true);
                });
                subpanel.setAllStatisticsLoading(false);
            });
        });
    }
    buildStatKey(subpanelKey, subpanelQueryKey) {
        subpanelKey = subpanelKey.replace(/_/g, '-');
        subpanelQueryKey = subpanelQueryKey.replace(/_/g, '-');
        return subpanelKey + '-' + subpanelQueryKey;
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
     * Init subpanels
     *
     * @param {string} module parent module
     * @param {string} recordId id
     */
    initSubpanels(module, recordId) {
        this.showSubpanels = true;
        this.metadataStore.subPanelMetadata$.subscribe((meta) => {
            this.clearSubpanels();
            Object.keys(meta).forEach((key) => {
                this.subpanels[key] = this.subpanelFactory.create();
                this.subpanels[key].init(module, recordId, meta[key], this.record$);
            });
            this.subpanelsState.next(this.subpanels);
            Object.keys(this.subpanels).forEach(subpanelKey => {
                const subpanel = this.subpanels[subpanelKey];
                this.subpanelReloadSub.push(subpanel.recordList.records$.pipe(tap(() => {
                    const update = {};
                    update[subpanelKey] = true;
                    this.subpanelReloadSubject.next(update);
                })).subscribe());
            });
        });
    }
    initPanels() {
        const panelSub = combineLatest([
            this.metadataStore.recordViewMetadata$,
            this.stagingRecord$,
            this.languageStore.vm$,
        ]).subscribe(([meta, record, languages]) => {
            const panels = [];
            const module = (record && record.module) || '';
            this.safeUnsubscription(this.fieldSubs);
            meta.panels.forEach(panelDefinition => {
                const label = (panelDefinition.label)
                    ? panelDefinition.label.toUpperCase()
                    : this.languageStore.getFieldLabel(panelDefinition.key.toUpperCase(), module, languages);
                const panel = { label, key: panelDefinition.key, rows: [] };
                let adaptor = null;
                const tabDef = meta.templateMeta.tabDefs[panelDefinition.key.toUpperCase()] ?? null;
                if (tabDef) {
                    panel.meta = tabDef;
                }
                panelDefinition.rows.forEach(rowDefinition => {
                    const row = { cols: [] };
                    rowDefinition.cols.forEach(cellDefinition => {
                        const cellDef = { ...cellDefinition };
                        const fieldActions = cellDefinition.fieldActions || null;
                        if (fieldActions) {
                            adaptor = this.actionAdaptorFactory.create('recordView', cellDef.name, this);
                            cellDef.adaptor = adaptor;
                        }
                        row.cols.push(cellDef);
                    });
                    panel.rows.push(row);
                });
                panel.displayState = new BehaviorSubject(tabDef?.display ?? true);
                panel.display$ = panel.displayState.asObservable();
                panels.push(panel);
                if (isEmpty(record?.fields) || isEmpty(tabDef?.displayLogic)) {
                    return;
                }
                Object.values(tabDef.displayLogic).forEach((logicDef) => {
                    if (isEmpty(logicDef?.params?.fieldDependencies)) {
                        return;
                    }
                    logicDef.params.fieldDependencies.forEach(fieldKey => {
                        const field = record.fields[fieldKey] || null;
                        if (isEmpty(field)) {
                            return;
                        }
                        this.fieldSubs.push(field.valueChanges$.subscribe(() => {
                            this.panelLogicManager.runLogic(logicDef.key, field, panel, record, this.getMode());
                        }));
                    });
                });
            });
            this.panelsSubject.next(this.panels = panels);
            return panels;
        });
        this.subs.push(panelSub);
    }
    clearSubpanels() {
        if (this.subpanels) {
            Object.keys(this.subpanels).forEach((key) => {
                this.subpanels[key].clear();
            });
        }
        if (this.subpanelReloadSub.length) {
            this.subpanelReloadSub.forEach(sub => sub.unsubscribe());
            this.subpanelReloadSub = [];
        }
        this.subpanels = {};
    }
    /**
     * Calculate if widgets are to display
     */
    calculateShowWidgets() {
        let show = false;
        const recordViewMeta = this.getRecordViewMetadata();
        const sidebarWidgetsConfig = recordViewMeta.sidebarWidgets || [];
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
        this.showBottomWidgets = true;
        this.widgets = show;
    }
    /**
     * Get record view metadata
     *
     * @returns {object} metadata RecordViewMetadata
     */
    getRecordViewMetadata() {
        const meta = this.metadataStore.get() || {};
        return meta.recordView || {};
    }
    /**
     * Get vardefs
     *
     * @returns {object} vardefs FieldDefinitionMap
     */
    getVardefs() {
        const meta = this.getRecordViewMetadata();
        return meta.vardefs || {};
    }
    /**
     * Get view fields observable
     *
     * @returns {object} Observable<ViewFieldDefinition[]>
     */
    getViewFieldsObservable() {
        return this.metadataStore.recordViewMetadata$.pipe(map((recordMetadata) => {
            const fieldsMap = {};
            recordMetadata.panels.forEach(panel => {
                panel.rows.forEach(row => {
                    row.cols.forEach(col => {
                        const fieldName = col.name ?? col.fieldDefinition.name ?? '';
                        fieldsMap[fieldName] = col;
                    });
                });
            });
            Object.keys(recordMetadata.vardefs).forEach(fieldKey => {
                const vardef = recordMetadata.vardefs[fieldKey] ?? null;
                if (!vardef || isEmpty(vardef)) {
                    return;
                }
                // already defined. skip
                if (fieldsMap[fieldKey]) {
                    return;
                }
                if (vardef.type == 'relate') {
                    return;
                }
                fieldsMap[fieldKey] = {
                    name: fieldKey,
                    vardefBased: true,
                    label: vardef.vname ?? '',
                    type: vardef.type ?? '',
                    display: vardef.display ?? '',
                    fieldDefinition: vardef,
                    metadata: vardef.metadata ?? {},
                    logic: vardef.logic ?? {}
                };
            });
            return Object.values(fieldsMap);
        }));
    }
    getRecordMetadata$() {
        return this.metadataStore.recordViewMetadata$.pipe(map((recordMetadata) => {
            return recordMetadata?.metadata ?? {};
        }));
    }
    /**
     * Build ui user preference key
     *
     * @param {string} storageKey Storage Key
     * @protected
     * @returns {string} Preference Key
     */
    getPreferenceKey(storageKey) {
        return 'recordview-' + storageKey;
    }
    /**
     * Save ui user preference
     *
     * @param {string} module Module
     * @param {string} storageKey Storage Key
     * @param {any} value Value
     * @protected
     */
    savePreference(module, storageKey, value) {
        this.preferences.setUi(module, this.getPreferenceKey(storageKey), value);
    }
    /**
     * Load ui user preference
     *
     * @param {string} module Module
     * @param {string} storageKey Storage Key
     * @protected
     * @returns {any} User Preference
     */
    loadPreference(module, storageKey) {
        return this.preferences.getUi(module, this.getPreferenceKey(storageKey));
    }
    safeUnsubscription(subscriptionArray) {
        subscriptionArray.forEach(sub => {
            if (sub.closed) {
                return;
            }
            sub.unsubscribe();
        });
        subscriptionArray = [];
        return subscriptionArray;
    }
    static { this.ɵfac = function RecordViewStore_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RecordViewStore)(i0.ɵɵinject(i1.RecordFetchGQL), i0.ɵɵinject(i2.RecordSaveGQL), i0.ɵɵinject(i3.AppStateStore), i0.ɵɵinject(i4.LanguageStore), i0.ɵɵinject(i5.NavigationStore), i0.ɵɵinject(i6.ModuleNavigation), i0.ɵɵinject(i7.MetadataStore), i0.ɵɵinject(i8.LocalStorageService), i0.ɵɵinject(i9.MessageService), i0.ɵɵinject(i10.SubpanelStoreFactory), i0.ɵɵinject(i11.RecordManager), i0.ɵɵinject(i12.StatisticsBatch), i0.ɵɵinject(i13.RecordStoreFactory), i0.ɵɵinject(i14.UserPreferenceStore), i0.ɵɵinject(i15.PanelLogicManager), i0.ɵɵinject(i16.RecordConvertService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordViewStore, factory: RecordViewStore.ɵfac }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordViewStore, [{
        type: Injectable
    }], () => [{ type: i1.RecordFetchGQL }, { type: i2.RecordSaveGQL }, { type: i3.AppStateStore }, { type: i4.LanguageStore }, { type: i5.NavigationStore }, { type: i6.ModuleNavigation }, { type: i7.MetadataStore }, { type: i8.LocalStorageService }, { type: i9.MessageService }, { type: i10.SubpanelStoreFactory }, { type: i11.RecordManager }, { type: i12.StatisticsBatch }, { type: i13.RecordStoreFactory }, { type: i14.UserPreferenceStore }, { type: i15.PanelLogicManager }, { type: i16.RecordConvertService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLXZpZXcuc3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvcmVjb3JkL3N0b3JlL3JlY29yZC12aWV3L3JlY29yZC12aWV3LnN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQ2xDLE9BQU8sRUFBQyxlQUFlLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixFQUFjLEVBQUUsRUFBZSxNQUFNLE1BQU0sQ0FBQztBQUNyRyxPQUFPLEVBQUMsVUFBVSxFQUFFLG9CQUFvQixFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzFGLE9BQU8sRUFBQyxNQUFNLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUM1RCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFVaEUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBRTlFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrREFBa0QsQ0FBQztBQUMvRSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDeEUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNkVBQTZFLENBQUM7QUFDN0csT0FBTyxFQUVILGFBQWEsRUFHaEIsTUFBTSxtREFBbUQsQ0FBQztBQUMzRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sOENBQThDLENBQUM7QUFFNUUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQzFFLE9BQU8sRUFBQyxhQUFhLEVB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QztJQUVPLGtCQUFrQixDQUFDLGlCQUFpQztRQUN4RCxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDNUIsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ2IsT0FBTztZQUNYLENBQUM7WUFFRCxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7UUFDSCxpQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFFdkIsT0FBTyxpQkFBaUIsQ0FBQztJQUM3QixDQUFDO2dIQTdzQlEsZUFBZTt1RUFBZixlQUFlLFdBQWYsZUFBZTs7aUZBQWYsZUFBZTtjQUQzQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge2lzRW1wdHl9IGZyb20gJ2xvZGFzaC1lcyc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgY29tYmluZUxhdGVzdCwgY29tYmluZUxhdGVzdFdpdGgsIE9ic2VydmFibGUsIG9mLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtjYXRjaEVycm9yLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmluYWxpemUsIG1hcCwgdGFrZSwgdGFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge2luamVjdCwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1BhcmFtc30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7aXNWb2lkfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vdXRpbHMvdmFsdWUtdXRpbHMnO1xuaW1wb3J0IHtkZWVwQ2xvbmV9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi91dGlscy9vYmplY3QtdXRpbHMnO1xuaW1wb3J0IHtCb29sZWFuTWFwfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vdHlwZXMvYm9vbGVhbi1tYXAnO1xuaW1wb3J0IHtGaWVsZERlZmluaXRpb25NYXAsIEZpZWxkTWV0YWRhdGF9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9yZWNvcmQvZmllbGQubW9kZWwnO1xuaW1wb3J0IHtGaWVsZExvZ2ljTWFwfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vYWN0aW9ucy9maWVsZC1sb2dpYy1hY3Rpb24ubW9kZWwnO1xuaW1wb3J0IHtSZWNvcmR9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9yZWNvcmQvcmVjb3JkLm1vZGVsJztcbmltcG9ydCB7UGFuZWwsIFBhbmVsUm93LCBWaWV3RmllbGREZWZpbml0aW9uLCBWaWV3RmllbGREZWZpbml0aW9uTWFwfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vbWV0YWRhdGEvbWV0YWRhdGEubW9kZWwnO1xuaW1wb3J0IHtTdGF0aXN0aWNzTWFwLCBTdGF0aXN0aWNzUXVlcnlNYXB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9zdGF0aXN0aWNzL3N0YXRpc3RpY3MubW9kZWwnO1xuaW1wb3J0IHtTdWJQYW5lbE1ldGF9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9tZXRhZGF0YS9zdWJwYW5lbC5tZXRhZGF0YS5tb2RlbCc7XG5pbXBvcnQge1ZpZXdDb250ZXh0LCBWaWV3TW9kZX0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3ZpZXdzL3ZpZXcubW9kZWwnO1xuaW1wb3J0IHtSZWNvcmRWaWV3RGF0YSwgUmVjb3JkVmlld01vZGVsLCBSZWNvcmRWaWV3U3RhdGV9IGZyb20gJy4vcmVjb3JkLXZpZXcuc3RvcmUubW9kZWwnO1xuaW1wb3J0IHtOYXZpZ2F0aW9uU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL25hdmlnYXRpb24vbmF2aWdhdGlvbi5zdG9yZSc7XG5pbXBvcnQge1N0YXRlU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3N0YXRlJztcbmltcG9ydCB7UmVjb3JkU2F2ZUdRTH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvcmVjb3JkL2dyYXBocWwvYXBpLnJlY29yZC5zYXZlJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtNb2R1bGVOYXZpZ2F0aW9ufSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL21vZHVsZS1uYXZpZ2F0aW9uL21vZHVsZS1uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgICBNZXRhZGF0YSxcbiAgICBNZXRhZGF0YVN0b3JlLFxuICAgIFJlY29yZFZpZXdNZXRhZGF0YSxcbiAgICBTdW1tYXJ5VGVtcGxhdGVzXG59IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL21ldGFkYXRhL21ldGFkYXRhLnN0b3JlLnNlcnZpY2UnO1xuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbWVzc2FnZS9tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHtTdWJwYW5lbFN0b3JlTWFwfSBmcm9tICcuLi8uLi8uLi8uLi9jb250YWluZXJzL3N1YnBhbmVsL3N0b3JlL3N1YnBhbmVsL3N1YnBhbmVsLnN0b3JlJztcbmltcG9ydCB7QXBwU3RhdGVTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvYXBwLXN0YXRlL2FwcC1zdGF0ZS5zdG9yZSc7XG5pbXBvcnQge1JlY29yZE1hbmFnZXJ9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL3JlY29yZC9yZWNvcmQubWFuYWdlcic7XG5pbXBvcnQge1JlY29yZFN0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9yZWNvcmQvcmVjb3JkLnN0b3JlJztcbmltcG9ydCB7TG9jYWxTdG9yYWdlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbG9jYWwtc3RvcmFnZS9sb2NhbC1zdG9yYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHtTdWJwYW5lbFN0b3JlRmFjdG9yeX0gZnJvbSAnLi4vLi4vLi4vLi4vY29udGFpbmVycy9zdWJwYW5lbC9zdG9yZS9zdWJwYW5lbC9zdWJwYW5lbC5zdG9yZS5mYWN0b3J5JztcbmltcG9ydCB7Vmlld1N0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS92aWV3L3ZpZXcuc3RvcmUnO1xuaW1wb3J0IHtSZWNvcmRGZXRjaEdRTH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvcmVjb3JkL2dyYXBocWwvYXBpLnJlY29yZC5nZXQnO1xuaW1wb3J0IHtTdGF0aXN0aWNzQmF0Y2h9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3N0YXRpc3RpY3Mvc3RhdGlzdGljcy1iYXRjaC5zZXJ2aWNlJztcbmltcG9ydCB7UmVjb3JkU3RvcmVGYWN0b3J5fSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9yZWNvcmQvcmVjb3JkLnN0b3JlLmZhY3RvcnknO1xuaW1wb3J0IHtVc2VyUHJlZmVyZW5jZVN0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS91c2VyLXByZWZlcmVuY2UvdXNlci1wcmVmZXJlbmNlLnN0b3JlJztcbmltcG9ydCB7UGFuZWxMb2dpY01hbmFnZXJ9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGFuZWwtbG9naWMvcGFuZWwtbG9naWMubWFuYWdlcic7XG5pbXBvcnQge1JlY29yZENvbnZlcnRTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZXMvcmVjb3JkL3JlY29yZC1jb252ZXJ0LnNlcnZpY2VcIjtcbmltcG9ydCB7RmllbGRBY3Rpb25zQWRhcHRlckZhY3Rvcnl9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2ZpZWxkLWxheW91dC9hZGFwdGVycy9maWVsZC5hY3Rpb25zLmFkYXB0ZXIuZmFjdG9yeVwiO1xuaW1wb3J0IHtSZWNvcmRWYWxpZGF0aW9uSGFuZGxlcn0gZnJvbSBcIi4uLy4uLy4uLy4uL3NlcnZpY2VzL3JlY29yZC92YWxpZGF0aW9uL3JlY29yZC12YWxpZGF0aW9uLmhhbmRsZXJcIjtcbmltcG9ydCB7T2JqZWN0TWFwfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3R5cGVzL29iamVjdC1tYXBcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlOiBSZWNvcmRWaWV3U3RhdGUgPSB7XG4gICAgbW9kdWxlOiAnJyxcbiAgICByZWNvcmRJRDogJycsXG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgd2lkZ2V0czogZmFsc2UsXG4gICAgc2hvd1NpZGViYXJXaWRnZXRzOiBmYWxzZSxcbiAgICBzaG93Qm90dG9tV2lkZ2V0czogZmFsc2UsXG4gICAgc2hvd1RvcFdpZGdldDogZmFsc2UsXG4gICAgc2hvd1N1YnBhbmVsczogZmFsc2UsXG4gICAgbW9kZTogJ2RldGFpbCcsXG4gICAgcGFyYW1zOiB7XG4gICAgICAgIHJldHVybk1vZHVsZTogJycsXG4gICAgICAgIHJldHVybklkOiAnJyxcbiAgICAgICAgcmV0dXJuQWN0aW9uOiAnJ1xuICAgIH1cbn07XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSZWNvcmRWaWV3U3RvcmUgZXh0ZW5kcyBWaWV3U3RvcmUgaW1wbGVtZW50cyBTdGF0ZVN0b3JlIHtcblxuICAgIC8qKlxuICAgICAqIFB1YmxpYyBsb25nLWxpdmVkIG9ic2VydmFibGUgc3RyZWFtc1xuICAgICAqL1xuICAgIHJlY29yZCQ6IE9ic2VydmFibGU8UmVjb3JkPjtcbiAgICBzdGFnaW5nUmVjb3JkJDogT2JzZXJ2YWJsZTxSZWNvcmQ+O1xuICAgIGxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIHdpZGdldHMkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIHNob3dTaWRlYmFyV2lkZ2V0cyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgc2hvd0JvdHRvbVdpZGdldHMkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIHNob3dUb3BXaWRnZXQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIHNob3dTdWJwYW5lbHMkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIG1vZGUkOiBPYnNlcnZhYmxlPFZpZXdNb2RlPjtcbiAgICBzdWJwYW5lbHMkOiBPYnNlcnZhYmxlPFN1YnBhbmVsU3RvcmVNYXA+O1xuICAgIHZpZXdDb250ZXh0JDogT2JzZXJ2YWJsZTxWaWV3Q29udGV4dD47XG4gICAgc3VicGFuZWxSZWxvYWQkOiBPYnNlcnZhYmxlPEJvb2xlYW5NYXA+O1xuICAgIHBhbmVsczogUGFuZWxbXSA9IFtdO1xuICAgIHBhbmVscyQ6IE9ic2VydmFibGU8UGFuZWxbXT47XG5cblxuICAgIC8qKlxuICAgICAqIFZpZXctbW9kZWwgdGhhdCByZXNvbHZlcyBvbmNlIGFsbCB0aGUgZGF0YSBpcyByZWFkeSAob3IgdXBkYXRlZCkuXG4gICAgICovXG4gICAgdm0kOiBPYnNlcnZhYmxlPFJlY29yZFZpZXdNb2RlbD47XG4gICAgdm06IFJlY29yZFZpZXdNb2RlbDtcbiAgICBkYXRhOiBSZWNvcmRWaWV3RGF0YTtcbiAgICByZWNvcmRTdG9yZTogUmVjb3JkU3RvcmU7XG5cbiAgICAvKiogSW50ZXJuYWwgUHJvcGVydGllcyAqL1xuICAgIHByb3RlY3RlZCBjYWNoZSQ6IE9ic2VydmFibGU8YW55PiA9IG51bGw7XG4gICAgcHJvdGVjdGVkIGludGVybmFsU3RhdGU6IFJlY29yZFZpZXdTdGF0ZSA9IGRlZXBDbG9uZShpbml0aWFsU3RhdGUpO1xuICAgIHByb3RlY3RlZCBzdG9yZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8UmVjb3JkVmlld1N0YXRlPih0aGlzLmludGVybmFsU3RhdGUpO1xuICAgIHByb3RlY3RlZCBzdGF0ZSQgPSB0aGlzLnN0b3JlLmFzT2JzZXJ2YWJsZSgpO1xuICAgIHByb3RlY3RlZCBzdWJwYW5lbHM6IFN1YnBhbmVsU3RvcmVNYXA7XG4gICAgcHJvdGVjdGVkIHN1YnBhbmVsc1N0YXRlOiBCZWhhdmlvclN1YmplY3Q8U3VicGFuZWxTdG9yZU1hcD47XG4gICAgcHJvdGVjdGVkIHN1YnBhbmVsUmVsb2FkU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Qm9vbGVhbk1hcD4oe30gYXMgQm9vbGVhbk1hcCk7XG4gICAgcHJvdGVjdGVkIHN1YnBhbmVsUmVsb2FkU3ViOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuICAgIHByb3RlY3RlZCBzdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuICAgIHByb3RlY3RlZCBmaWVsZFN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gICAgcHJvdGVjdGVkIHBhbmVsc1N1YmplY3Q6IEJlaGF2aW9yU3ViamVjdDxQYW5lbFtdPiA9IG5ldyBCZWhhdmlvclN1YmplY3QodGhpcy5wYW5lbHMpO1xuICAgIHByb3RlY3RlZCBhY3Rpb25BZGFwdG9yRmFjdG9yeTogRmllbGRBY3Rpb25zQWRhcHRlckZhY3Rvcnk7XG4gICAgcHJvdGVjdGVkIHJlY29yZFZhbGlkYXRpb25IYW5kbGVyOiBSZWNvcmRWYWxpZGF0aW9uSGFuZGxlcjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgcmVjb3JkRmV0Y2hHUUw6IFJlY29yZEZldGNoR1FMLFxuICAgICAgICBwcm90ZWN0ZWQgcmVjb3JkU2F2ZUdRTDogUmVjb3JkU2F2ZUdRTCxcbiAgICAgICAgcHJvdGVjdGVkIGFwcFN0YXRlU3RvcmU6IEFwcFN0YXRlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBsYW5ndWFnZVN0b3JlOiBMYW5ndWFnZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbmF2aWdhdGlvblN0b3JlOiBOYXZpZ2F0aW9uU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBtb2R1bGVOYXZpZ2F0aW9uOiBNb2R1bGVOYXZpZ2F0aW9uLFxuICAgICAgICBwcm90ZWN0ZWQgbWV0YWRhdGFTdG9yZTogTWV0YWRhdGFTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGxvY2FsU3RvcmFnZTogTG9jYWxTdG9yYWdlU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIG1lc3NhZ2U6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgc3VicGFuZWxGYWN0b3J5OiBTdWJwYW5lbFN0b3JlRmFjdG9yeSxcbiAgICAgICAgcHJvdGVjdGVkIHJlY29yZE1hbmFnZXI6IFJlY29yZE1hbmFnZXIsXG4gICAgICAgIHByb3RlY3RlZCBzdGF0aXN0aWNzQmF0Y2g6IFN0YXRpc3RpY3NCYXRjaCxcbiAgICAgICAgcHJvdGVjdGVkIHJlY29yZFN0b3JlRmFjdG9yeTogUmVjb3JkU3RvcmVGYWN0b3J5LFxuICAgICAgICBwcm90ZWN0ZWQgcHJlZmVyZW5jZXM6IFVzZXJQcmVmZXJlbmNlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBwYW5lbExvZ2ljTWFuYWdlcjogUGFuZWxMb2dpY01hbmFnZXIsXG4gICAgICAgIHByb3RlY3RlZCByZWNvcmRDb252ZXJ0U2VydmljZTogUmVjb3JkQ29udmVydFNlcnZpY2VcbiAgICApIHtcblxuICAgICAgICBzdXBlcihhcHBTdGF0ZVN0b3JlLCBsYW5ndWFnZVN0b3JlLCBuYXZpZ2F0aW9uU3RvcmUsIG1vZHVsZU5hdmlnYXRpb24sIG1ldGFkYXRhU3RvcmUpO1xuXG4gICAgICAgIHRoaXMuYWN0aW9uQWRhcHRvckZhY3RvcnkgPSBpbmplY3QoRmllbGRBY3Rpb25zQWRhcHRlckZhY3RvcnkpO1xuXG4gICAgICAgIHRoaXMucGFuZWxzJCA9IHRoaXMucGFuZWxzU3ViamVjdC5hc09ic2VydmFibGUoKTtcblxuICAgICAgICB0aGlzLnJlY29yZFN0b3JlID0gcmVjb3JkU3RvcmVGYWN0b3J5LmNyZWF0ZSh0aGlzLmdldFZpZXdGaWVsZHNPYnNlcnZhYmxlKCksIHRoaXMuZ2V0UmVjb3JkTWV0YWRhdGEkKCkpO1xuXG4gICAgICAgIHRoaXMucmVjb3JkJCA9IHRoaXMucmVjb3JkU3RvcmUuc3RhdGUkLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gICAgICAgIHRoaXMuc3RhZ2luZ1JlY29yZCQgPSB0aGlzLnJlY29yZFN0b3JlLnN0YWdpbmckLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gICAgICAgIHRoaXMubG9hZGluZyQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5sb2FkaW5nKSk7XG4gICAgICAgIHRoaXMud2lkZ2V0cyQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS53aWRnZXRzKSk7XG4gICAgICAgIHRoaXMuc2hvd1NpZGViYXJXaWRnZXRzJCA9IHRoaXMuc3RhdGUkLnBpcGUobWFwKHN0YXRlID0+IHN0YXRlLnNob3dTaWRlYmFyV2lkZ2V0cykpO1xuICAgICAgICB0aGlzLnNob3dCb3R0b21XaWRnZXRzJCA9IHRoaXMuc3RhdGUkLnBpcGUobWFwKHN0YXRlID0+IHN0YXRlLnNob3dCb3R0b21XaWRnZXRzKSk7XG4gICAgICAgIHRoaXMuc2hvd1RvcFdpZGdldCQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5zaG93VG9wV2lkZ2V0KSk7XG4gICAgICAgIHRoaXMuc2hvd1N1YnBhbmVscyQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5zaG93U3VicGFuZWxzKSk7XG4gICAgICAgIHRoaXMubW9kZSQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5tb2RlKSk7XG4gICAgICAgIHRoaXMuc3VicGFuZWxSZWxvYWQkID0gdGhpcy5zdWJwYW5lbFJlbG9hZFN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG5cbiAgICAgICAgY29uc3QgZGF0YSQgPSB0aGlzLnJlY29yZCQucGlwZShcbiAgICAgICAgICAgIGNvbWJpbmVMYXRlc3RXaXRoKHRoaXMubG9hZGluZyQpLFxuICAgICAgICAgICAgbWFwKChbcmVjb3JkLCBsb2FkaW5nXTogW1JlY29yZCwgYm9vbGVhbl0pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEgPSB7cmVjb3JkLCBsb2FkaW5nfSBhcyBSZWNvcmRWaWV3RGF0YTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLnZtJCA9IGRhdGEkLnBpcGUoXG4gICAgICAgICAgICBjb21iaW5lTGF0ZXN0V2l0aCh0aGlzLmFwcERhdGEkLCB0aGlzLm1ldGFkYXRhJCksXG4gICAgICAgICAgICBtYXAoKFtkYXRhLCBhcHBEYXRhLCBtZXRhZGF0YV0pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnZtID0ge2RhdGEsIGFwcERhdGEsIG1ldGFkYXRhfSBhcyBSZWNvcmRWaWV3TW9kZWw7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudm07XG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgdGhpcy5zdWJwYW5lbHNTdGF0ZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8U3VicGFuZWxTdG9yZU1hcD4oe30gYXMgU3VicGFuZWxTdG9yZU1hcCk7XG4gICAgICAgIHRoaXMuc3VicGFuZWxzJCA9IHRoaXMuc3VicGFuZWxzU3RhdGUuYXNPYnNlcnZhYmxlKCk7XG5cblxuICAgICAgICB0aGlzLnZpZXdDb250ZXh0JCA9IHRoaXMucmVjb3JkJC5waXBlKG1hcCgoKSA9PiB0aGlzLmdldFZpZXdDb250ZXh0KCkpKTtcbiAgICAgICAgdGhpcy5pbml0UGFuZWxzKCk7XG5cbiAgICAgICAgdGhpcy5yZWNvcmRWYWxpZGF0aW9uSGFuZGxlciA9IGluamVjdChSZWNvcmRWYWxpZGF0aW9uSGFuZGxlcik7XG4gICAgfVxuXG4gICAgZ2V0IHdpZGdldHMoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsU3RhdGUud2lkZ2V0cztcbiAgICB9XG5cbiAgICBzZXQgd2lkZ2V0cyhzaG93OiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgICAgICAgLi4udGhpcy5pbnRlcm5hbFN0YXRlLFxuICAgICAgICAgICAgd2lkZ2V0czogc2hvd1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXQgc2hvd1NpZGViYXJXaWRnZXRzKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFN0YXRlLnNob3dTaWRlYmFyV2lkZ2V0cztcbiAgICB9XG5cbiAgICBzZXQgc2hvd1NpZGViYXJXaWRnZXRzKHNob3c6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5zYXZlUHJlZmVyZW5jZSh0aGlzLmdldE1vZHVsZU5hbWUoKSwgJ3Nob3ctc2lkZWJhci13aWRnZXRzJywgc2hvdyk7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgICAgICAgLi4udGhpcy5pbnRlcm5hbFN0YXRlLFxuICAgICAgICAgICAgc2hvd1NpZGViYXJXaWRnZXRzOiBzaG93XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldCBzaG93Qm90dG9tV2lkZ2V0cygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxTdGF0ZS5zaG93Qm90dG9tV2lkZ2V0cztcbiAgICB9XG5cbiAgICBzZXQgc2hvd0JvdHRvbVdpZGdldHMoc2hvdzogYm9vbGVhbikge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgIC4uLnRoaXMuaW50ZXJuYWxTdGF0ZSxcbiAgICAgICAgICAgIHNob3dCb3R0b21XaWRnZXRzOiBzaG93XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldCBzaG93VG9wV2lkZ2V0KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFN0YXRlLnNob3dUb3BXaWRnZXQ7XG4gICAgfVxuXG4gICAgc2V0IHNob3dUb3BXaWRnZXQoc2hvdzogYm9vbGVhbikge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgIC4uLnRoaXMuaW50ZXJuYWxTdGF0ZSxcbiAgICAgICAgICAgIHNob3dUb3BXaWRnZXQ6IHNob3dcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0IHNob3dTdWJwYW5lbHMoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsU3RhdGUuc2hvd1RvcFdpZGdldDtcbiAgICB9XG5cbiAgICBzZXQgc2hvd1N1YnBhbmVscyhzaG93OiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgICAgICAgLi4udGhpcy5pbnRlcm5hbFN0YXRlLFxuICAgICAgICAgICAgc2hvd1N1YnBhbmVsczogc2hvd1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXQgcGFyYW1zKCk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFN0YXRlLnBhcmFtcyB8fCB7fTtcbiAgICB9XG5cbiAgICBzZXQgcGFyYW1zKHBhcmFtczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgIC4uLnRoaXMuaW50ZXJuYWxTdGF0ZSxcbiAgICAgICAgICAgIHBhcmFtc1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRNb2R1bGVOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsU3RhdGUubW9kdWxlO1xuICAgIH1cblxuICAgIGdldFJlY29yZElkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsU3RhdGUucmVjb3JkSUQ7XG4gICAgfVxuXG4gICAgZ2V0Vmlld0NvbnRleHQoKTogVmlld0NvbnRleHQge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbW9kdWxlOiB0aGlzLmdldE1vZHVsZU5hbWUoKSxcbiAgICAgICAgICAgIGlkOiB0aGlzLmdldFJlY29yZElkKCksXG4gICAgICAgICAgICByZWNvcmQ6IHRoaXMuZ2V0QmFzZVJlY29yZCgpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0U3VicGFuZWxzKCk6IFN1YnBhbmVsU3RvcmVNYXAge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWJwYW5lbHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYW4gZGVzdHJveVxuICAgICAqL1xuICAgIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbCByZWNvcmQgbG9hZCBpZiBub3QgY2FjaGVkIGFuZCB1cGRhdGUgc3RhdGUuXG4gICAgICogUmV0dXJucyBvYnNlcnZhYmxlIHRvIGJlIHVzZWQgaW4gcmVzb2x2ZXIgaWYgbmVlZGVkXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kdWxlIHRvIHVzZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSByZWNvcmRJRCB0byB1c2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kZSB0byB1c2VcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcGFyYW1zIHRvIHNldFxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IE9ic2VydmFibGU8YW55PlxuICAgICAqL1xuICAgIHB1YmxpYyBpbml0KG1vZHVsZTogc3RyaW5nLCByZWNvcmRJRDogc3RyaW5nLCBtb2RlID0gJ2RldGFpbCcgYXMgVmlld01vZGUsIHBhcmFtczogUGFyYW1zID0ge30pOiBPYnNlcnZhYmxlPFJlY29yZD4ge1xuICAgICAgICB0aGlzLmludGVybmFsU3RhdGUubW9kdWxlID0gbW9kdWxlO1xuICAgICAgICB0aGlzLmludGVybmFsU3RhdGUucmVjb3JkSUQgPSByZWNvcmRJRDtcbiAgICAgICAgdGhpcy5zZXRNb2RlKG1vZGUpO1xuICAgICAgICB0aGlzLmluaXRTdWJwYW5lbHMobW9kdWxlLCByZWNvcmRJRCk7XG5cbiAgICAgICAgdGhpcy5jYWxjdWxhdGVTaG93V2lkZ2V0cygpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmxvYWQoKS5waXBlKFxuICAgICAgICAgICAgdGFwKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dUb3BXaWRnZXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5sb2FkU3VicGFuZWxTdGF0aXN0aWNzKG1vZHVsZSksIDE1MDApO1xuICAgICAgICAgICAgICAgIHRoaXMucGFyc2VQYXJhbXMocGFyYW1zKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgb2JzZXJ2YWJsZSBjYWNoZVxuICAgICAqL1xuICAgIHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jYWNoZSQgPSBudWxsO1xuICAgICAgICB0aGlzLmNsZWFyU3VicGFuZWxzKCk7XG4gICAgICAgIHRoaXMuc3VicGFuZWxzU3RhdGUudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShkZWVwQ2xvbmUoaW5pdGlhbFN0YXRlKSk7XG4gICAgICAgIHRoaXMuc3VicyA9IHRoaXMuc2FmZVVuc3Vic2NyaXB0aW9uKHRoaXMuc3Vicyk7XG4gICAgICAgIHRoaXMuZmllbGRTdWJzID0gdGhpcy5zYWZlVW5zdWJzY3JpcHRpb24odGhpcy5maWVsZFN1YnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBzdGFnaW5nIHJlY29yZFxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ30gVmlld01vZGVcbiAgICAgKi9cbiAgICBnZXRCYXNlUmVjb3JkKCk6IFJlY29yZCB7XG4gICAgICAgIGlmICghdGhpcy5pbnRlcm5hbFN0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZWNvcmRTdG9yZS5nZXRCYXNlUmVjb3JkKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGN1cnJlbnQgdmlldyBtb2RlXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBWaWV3TW9kZVxuICAgICAqL1xuICAgIGdldE1vZGUoKTogVmlld01vZGUge1xuICAgICAgICBpZiAoIXRoaXMuaW50ZXJuYWxTdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxTdGF0ZS5tb2RlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBuZXcgbW9kZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1vZGUgVmlld01vZGVcbiAgICAgKi9cbiAgICBzZXRNb2RlKG1vZGU6IFZpZXdNb2RlKTogdm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoey4uLnRoaXMuaW50ZXJuYWxTdGF0ZSwgbW9kZX0pO1xuICAgIH1cblxuICAgIHNhdmUoKTogT2JzZXJ2YWJsZTxSZWNvcmQ+IHtcbiAgICAgICAgdGhpcy5hcHBTdGF0ZVN0b3JlLnVwZGF0ZUxvYWRpbmcoYCR7dGhpcy5pbnRlcm5hbFN0YXRlLm1vZHVsZX0tcmVjb3JkLXNhdmVgLCB0cnVlKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgIC4uLnRoaXMuaW50ZXJuYWxTdGF0ZSxcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVjb3JkU3RvcmUuc2F2ZSgpLnBpcGUoXG4gICAgICAgICAgICBjYXRjaEVycm9yKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UuYWRkRGFuZ2VyTWVzc2FnZUJ5S2V5KCdMQkxfRVJST1JfU0FWSU5HJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mKHt9IGFzIFJlY29yZCk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGZpbmFsaXplKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldE1vZGUoJ2RldGFpbCcgYXMgVmlld01vZGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwU3RhdGVTdG9yZS51cGRhdGVMb2FkaW5nKGAke3RoaXMuaW50ZXJuYWxTdGF0ZS5tb2R1bGV9LXJlY29yZC1zYXZlYCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLmludGVybmFsU3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHNhdmVPbkVkaXQoKTogT2JzZXJ2YWJsZTxSZWNvcmQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVjb3JkU3RvcmUuc2F2ZSgpLnBpcGUoXG4gICAgICAgICAgICBjYXRjaEVycm9yKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UuYWRkRGFuZ2VyTWVzc2FnZUJ5S2V5KCdMQkxfRVJST1JfU0FWSU5HJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mKHt9IGFzIFJlY29yZCk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGZpbmFsaXplKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcFN0YXRlU3RvcmUudXBkYXRlTG9hZGluZyhgJHt0aGlzLmludGVybmFsU3RhdGUubW9kdWxlfS1yZWNvcmQtc2F2ZWAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5pbnRlcm5hbFN0YXRlLFxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkIC8gcmVsb2FkIHJlY29yZCB1c2luZyBjdXJyZW50IHBhZ2luYXRpb24gYW5kIGNyaXRlcmlhXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHVzZUNhY2hlIGlmIHRvIHVzZSBjYWNoZVxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IE9ic2VydmFibGU8UmVjb3JkVmlld1N0YXRlPlxuICAgICAqL1xuICAgIHB1YmxpYyBsb2FkKHVzZUNhY2hlID0gdHJ1ZSk6IE9ic2VydmFibGU8UmVjb3JkPiB7XG5cbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICAgICAgICAuLi50aGlzLmludGVybmFsU3RhdGUsXG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJlY29yZFN0b3JlLnJldHJpZXZlUmVjb3JkKFxuICAgICAgICAgICAgdGhpcy5pbnRlcm5hbFN0YXRlLm1vZHVsZSxcbiAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxTdGF0ZS5yZWNvcmRJRCxcbiAgICAgICAgICAgIHVzZUNhY2hlXG4gICAgICAgICkucGlwZShcbiAgICAgICAgICAgIHRhcCgoZGF0YTogUmVjb3JkKSA9PiB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5pbnRlcm5hbFN0YXRlLFxuICAgICAgICAgICAgICAgICAgICByZWNvcmRJRDogZGF0YS5pZCxcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlOiBkYXRhLm1vZHVsZSxcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHN1bW1hcnkgdGVtcGxhdGVcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IHN1bW1hcnkgdGVtcGxhdGUgbGFiZWxcbiAgICAgKi9cbiAgICBnZXRTdW1tYXJ5VGVtcGxhdGUoKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgbWV0YWRhdGEgPSB0aGlzLm1ldGFkYXRhIHx8IHt9IGFzIE1ldGFkYXRhO1xuICAgICAgICBjb25zdCByZWNvcmRNZXRhID0gbWV0YWRhdGEucmVjb3JkVmlldyB8fCB7fSBhcyBSZWNvcmRWaWV3TWV0YWRhdGE7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlcyA9IHJlY29yZE1ldGEuc3VtbWFyeVRlbXBsYXRlcyB8fCB7fSBhcyBTdW1tYXJ5VGVtcGxhdGVzO1xuICAgICAgICByZXR1cm4gdGVtcGxhdGVzW3RoaXMuZ2V0TW9kZSgpXSB8fCAnJztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFBhcnNlIHF1ZXJ5IHBhcmFtc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHBhcmFtcyB0byBzZXRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgcGFyc2VQYXJhbXMocGFyYW1zOiBQYXJhbXMgPSB7fSk6IHZvaWQge1xuICAgICAgICBpZiAoIXBhcmFtcykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3VycmVudFBhcmFtcyA9IHsuLi50aGlzLmludGVybmFsU3RhdGUucGFyYW1zfTtcbiAgICAgICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKHBhcmFtS2V5ID0+IHtcbiAgICAgICAgICAgIGlmICghaXNWb2lkKGN1cnJlbnRQYXJhbXNbcGFyYW1LZXldKSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQYXJhbXNbcGFyYW1LZXldID0gcGFyYW1zW3BhcmFtS2V5XTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogTG9hZCBhbGwgc3RhdGlzdGljc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1vZHVsZSBpZiB0byB1c2UgY2FjaGVcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgbG9hZFN1YnBhbmVsU3RhdGlzdGljcyhtb2R1bGU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBjb25zdCBzdWJwYW5lbHMgPSB0aGlzLnN1YnBhbmVsc1N0YXRlLnZhbHVlO1xuXG4gICAgICAgIGlmICghc3VicGFuZWxzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBxdWVyaWVzOiBTdGF0aXN0aWNzUXVlcnlNYXAgPSB7fTtcblxuICAgICAgICBPYmplY3Qua2V5cyhzdWJwYW5lbHMpLmZvckVhY2goc3VicGFuZWxLZXkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBzdWJwYW5lbCA9IHN1YnBhbmVsc1tzdWJwYW5lbEtleV07XG4gICAgICAgICAgICBjb25zdCBzdGF0c01hcCA9IHN1YnBhbmVsLnN0YXRpc3RpY3M7XG5cbiAgICAgICAgICAgIGlmICghc3RhdHNNYXAgfHwgIU9iamVjdC5rZXlzKHN0YXRzTWFwKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzdWJwYW5lbC5zaG91bGRCYXRjaFN0YXRpc3RpYygpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHN1YnBhbmVsLmxvYWRBbGxTdGF0aXN0aWNzKCkucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHN1YnBhbmVsUXVlcmllcyA9IHN1YnBhbmVsLmdldEFsbFN0YXRpc3RpY1F1ZXJ5KCk7XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHN1YnBhbmVsUXVlcmllcykuZm9yRWFjaChzdWJwYW5lbFF1ZXJ5S2V5ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBxdWVyeUtleSA9IHRoaXMuYnVpbGRTdGF0S2V5KHN1YnBhbmVsS2V5LCBzdWJwYW5lbFF1ZXJ5S2V5KTtcbiAgICAgICAgICAgICAgICBxdWVyaWVzW3F1ZXJ5S2V5XSA9IHN1YnBhbmVsUXVlcmllc1tzdWJwYW5lbFF1ZXJ5S2V5XTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBzdWJwYW5lbC5zZXRBbGxTdGF0aXN0aWNzTG9hZGluZyh0cnVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zdGF0aXN0aWNzQmF0Y2guZmV0Y2gobW9kdWxlLCBxdWVyaWVzKVxuICAgICAgICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHN0YXRzOiBTdGF0aXN0aWNzTWFwKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhzdWJwYW5lbHMpLmZvckVhY2goc3VicGFuZWxLZXkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1YnBhbmVsID0gc3VicGFuZWxzW3N1YnBhbmVsS2V5XTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3VicGFuZWxRdWVyaWVzID0gc3VicGFuZWwuZ2V0QWxsU3RhdGlzdGljUXVlcnkoKTtcblxuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhzdWJwYW5lbFF1ZXJpZXMpLmZvckVhY2goc3VicGFuZWxRdWVyeUtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBxdWVyeUtleSA9IHRoaXMuYnVpbGRTdGF0S2V5KHN1YnBhbmVsS2V5LCBzdWJwYW5lbFF1ZXJ5S2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXQgPSBzdGF0c1txdWVyeUtleV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXN0YXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJwYW5lbC5zZXRTdGF0aXN0aWNzKHN1YnBhbmVsUXVlcnlLZXksIHN0YXQsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBzdWJwYW5lbC5zZXRBbGxTdGF0aXN0aWNzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYnVpbGRTdGF0S2V5KHN1YnBhbmVsS2V5OiBzdHJpbmcsIHN1YnBhbmVsUXVlcnlLZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHN1YnBhbmVsS2V5ID0gc3VicGFuZWxLZXkucmVwbGFjZSgvXy9nLCAnLScpO1xuICAgICAgICBzdWJwYW5lbFF1ZXJ5S2V5ID0gc3VicGFuZWxRdWVyeUtleS5yZXBsYWNlKC9fL2csICctJyk7XG5cbiAgICAgICAgcmV0dXJuIHN1YnBhbmVsS2V5ICsgJy0nICsgc3VicGFuZWxRdWVyeUtleTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIHN0YXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gc3RhdGUgdG8gc2V0XG4gICAgICovXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVN0YXRlKHN0YXRlOiBSZWNvcmRWaWV3U3RhdGUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdG9yZS5uZXh0KHRoaXMuaW50ZXJuYWxTdGF0ZSA9IHN0YXRlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0IHN1YnBhbmVsc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1vZHVsZSBwYXJlbnQgbW9kdWxlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHJlY29yZElkIGlkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGluaXRTdWJwYW5lbHMobW9kdWxlOiBzdHJpbmcsIHJlY29yZElkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zaG93U3VicGFuZWxzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5tZXRhZGF0YVN0b3JlLnN1YlBhbmVsTWV0YWRhdGEkLnN1YnNjcmliZSgobWV0YTogU3ViUGFuZWxNZXRhKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyU3VicGFuZWxzKCk7XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG1ldGEpLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJwYW5lbHNba2V5XSA9IHRoaXMuc3VicGFuZWxGYWN0b3J5LmNyZWF0ZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3VicGFuZWxzW2tleV0uaW5pdChtb2R1bGUsIHJlY29yZElkLCBtZXRhW2tleV0sIHRoaXMucmVjb3JkJCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5zdWJwYW5lbHNTdGF0ZS5uZXh0KHRoaXMuc3VicGFuZWxzKTtcblxuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5zdWJwYW5lbHMpLmZvckVhY2goc3VicGFuZWxLZXkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN1YnBhbmVsID0gdGhpcy5zdWJwYW5lbHNbc3VicGFuZWxLZXldO1xuICAgICAgICAgICAgICAgIHRoaXMuc3VicGFuZWxSZWxvYWRTdWIucHVzaChzdWJwYW5lbC5yZWNvcmRMaXN0LnJlY29yZHMkLnBpcGUodGFwKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlID0ge30gYXMgQm9vbGVhbk1hcDtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlW3N1YnBhbmVsS2V5XSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VicGFuZWxSZWxvYWRTdWJqZWN0Lm5leHQodXBkYXRlKTtcbiAgICAgICAgICAgICAgICB9KSkuc3Vic2NyaWJlKCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBpbml0UGFuZWxzKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBwYW5lbFN1YiA9IGNvbWJpbmVMYXRlc3QoW1xuICAgICAgICAgICAgdGhpcy5tZXRhZGF0YVN0b3JlLnJlY29yZFZpZXdNZXRhZGF0YSQsXG4gICAgICAgICAgICB0aGlzLnN0YWdpbmdSZWNvcmQkLFxuICAgICAgICAgICAgdGhpcy5sYW5ndWFnZVN0b3JlLnZtJCxcbiAgICAgICAgXSkuc3Vic2NyaWJlKChbbWV0YSwgcmVjb3JkLCBsYW5ndWFnZXNdKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYW5lbHMgPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IG1vZHVsZSA9IChyZWNvcmQgJiYgcmVjb3JkLm1vZHVsZSkgfHwgJyc7XG5cbiAgICAgICAgICAgIHRoaXMuc2FmZVVuc3Vic2NyaXB0aW9uKHRoaXMuZmllbGRTdWJzKTtcbiAgICAgICAgICAgIG1ldGEucGFuZWxzLmZvckVhY2gocGFuZWxEZWZpbml0aW9uID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IChwYW5lbERlZmluaXRpb24ubGFiZWwpXG4gICAgICAgICAgICAgICAgICAgID8gcGFuZWxEZWZpbml0aW9uLmxhYmVsLnRvVXBwZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmxhbmd1YWdlU3RvcmUuZ2V0RmllbGRMYWJlbChwYW5lbERlZmluaXRpb24ua2V5LnRvVXBwZXJDYXNlKCksIG1vZHVsZSwgbGFuZ3VhZ2VzKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwYW5lbCA9IHtsYWJlbCwga2V5OiBwYW5lbERlZmluaXRpb24ua2V5LCByb3dzOiBbXX0gYXMgUGFuZWw7XG5cblxuICAgICAgICAgICAgICAgIGxldCBhZGFwdG9yID0gbnVsbDtcbiAgICAgICAgICAgICAgICBjb25zdCB0YWJEZWYgPSBtZXRhLnRlbXBsYXRlTWV0YS50YWJEZWZzW3BhbmVsRGVmaW5pdGlvbi5rZXkudG9VcHBlckNhc2UoKV0gPz8gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAodGFiRGVmKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhbmVsLm1ldGEgPSB0YWJEZWY7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcGFuZWxEZWZpbml0aW9uLnJvd3MuZm9yRWFjaChyb3dEZWZpbml0aW9uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93ID0ge2NvbHM6IFtdfSBhcyBQYW5lbFJvdztcbiAgICAgICAgICAgICAgICAgICAgcm93RGVmaW5pdGlvbi5jb2xzLmZvckVhY2goY2VsbERlZmluaXRpb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2VsbERlZiA9IHsuLi5jZWxsRGVmaW5pdGlvbn07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWVsZEFjdGlvbnMgPSBjZWxsRGVmaW5pdGlvbi5maWVsZEFjdGlvbnMgfHwgbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZEFjdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGFwdG9yID0gdGhpcy5hY3Rpb25BZGFwdG9yRmFjdG9yeS5jcmVhdGUoJ3JlY29yZFZpZXcnLCBjZWxsRGVmLm5hbWUsIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxEZWYuYWRhcHRvciA9IGFkYXB0b3I7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByb3cuY29scy5wdXNoKGNlbGxEZWYpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcGFuZWwucm93cy5wdXNoKHJvdyk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBwYW5lbC5kaXNwbGF5U3RhdGUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRhYkRlZj8uZGlzcGxheSA/PyB0cnVlKTtcbiAgICAgICAgICAgICAgICBwYW5lbC5kaXNwbGF5JCA9IHBhbmVsLmRpc3BsYXlTdGF0ZS5hc09ic2VydmFibGUoKTtcblxuICAgICAgICAgICAgICAgIHBhbmVscy5wdXNoKHBhbmVsKTtcblxuICAgICAgICAgICAgICAgIGlmIChpc0VtcHR5KHJlY29yZD8uZmllbGRzKSB8fCBpc0VtcHR5KHRhYkRlZj8uZGlzcGxheUxvZ2ljKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyh0YWJEZWYuZGlzcGxheUxvZ2ljKS5mb3JFYWNoKChsb2dpY0RlZikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNFbXB0eShsb2dpY0RlZj8ucGFyYW1zPy5maWVsZERlcGVuZGVuY2llcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGxvZ2ljRGVmLnBhcmFtcy5maWVsZERlcGVuZGVuY2llcy5mb3JFYWNoKGZpZWxkS2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gcmVjb3JkLmZpZWxkc1tmaWVsZEtleV0gfHwgbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0VtcHR5KGZpZWxkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZFN1YnMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC52YWx1ZUNoYW5nZXMkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFuZWxMb2dpY01hbmFnZXIucnVuTG9naWMobG9naWNEZWYua2V5LCBmaWVsZCwgcGFuZWwsIHJlY29yZCwgdGhpcy5nZXRNb2RlKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMucGFuZWxzU3ViamVjdC5uZXh0KHRoaXMucGFuZWxzID0gcGFuZWxzKTtcbiAgICAgICAgICAgIHJldHVybiBwYW5lbHM7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKHBhbmVsU3ViKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY2xlYXJTdWJwYW5lbHMoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnN1YnBhbmVscykge1xuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5zdWJwYW5lbHMpLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJwYW5lbHNba2V5XS5jbGVhcigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdWJwYW5lbFJlbG9hZFN1Yi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuc3VicGFuZWxSZWxvYWRTdWIuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuICAgICAgICAgICAgdGhpcy5zdWJwYW5lbFJlbG9hZFN1YiA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdWJwYW5lbHMgPSB7fTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgaWYgd2lkZ2V0cyBhcmUgdG8gZGlzcGxheVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBjYWxjdWxhdGVTaG93V2lkZ2V0cygpOiB2b2lkIHtcbiAgICAgICAgbGV0IHNob3cgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgcmVjb3JkVmlld01ldGEgPSB0aGlzLmdldFJlY29yZFZpZXdNZXRhZGF0YSgpO1xuICAgICAgICBjb25zdCBzaWRlYmFyV2lkZ2V0c0NvbmZpZyA9IHJlY29yZFZpZXdNZXRhLnNpZGViYXJXaWRnZXRzIHx8IFtdO1xuXG4gICAgICAgIGlmIChzaWRlYmFyV2lkZ2V0c0NvbmZpZyAmJiBzaWRlYmFyV2lkZ2V0c0NvbmZpZy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBzaG93ID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNob3dTaWRlYmFyV2lkZ2V0cyA9IHRoaXMubG9hZFByZWZlcmVuY2UodGhpcy5nZXRNb2R1bGVOYW1lKCksICdzaG93LXNpZGViYXItd2lkZ2V0cycpID8/IG51bGw7XG5cbiAgICAgICAgaWYgKHNob3dTaWRlYmFyV2lkZ2V0cyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zaG93U2lkZWJhcldpZGdldHMgPSBzaG93U2lkZWJhcldpZGdldHM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNob3dTaWRlYmFyV2lkZ2V0cyA9IHNob3c7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNob3dCb3R0b21XaWRnZXRzID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLndpZGdldHMgPSBzaG93O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCByZWNvcmQgdmlldyBtZXRhZGF0YVxuICAgICAqXG4gICAgICogQHJldHVybnMge29iamVjdH0gbWV0YWRhdGEgUmVjb3JkVmlld01ldGFkYXRhXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldFJlY29yZFZpZXdNZXRhZGF0YSgpOiBSZWNvcmRWaWV3TWV0YWRhdGEge1xuICAgICAgICBjb25zdCBtZXRhID0gdGhpcy5tZXRhZGF0YVN0b3JlLmdldCgpIHx8IHt9O1xuICAgICAgICByZXR1cm4gbWV0YS5yZWNvcmRWaWV3IHx8IHt9IGFzIFJlY29yZFZpZXdNZXRhZGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdmFyZGVmc1xuICAgICAqXG4gICAgICogQHJldHVybnMge29iamVjdH0gdmFyZGVmcyBGaWVsZERlZmluaXRpb25NYXBcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0VmFyZGVmcygpOiBGaWVsZERlZmluaXRpb25NYXAge1xuICAgICAgICBjb25zdCBtZXRhID0gdGhpcy5nZXRSZWNvcmRWaWV3TWV0YWRhdGEoKTtcbiAgICAgICAgcmV0dXJuIG1ldGEudmFyZGVmcyB8fCB7fSBhcyBGaWVsZERlZmluaXRpb25NYXA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHZpZXcgZmllbGRzIG9ic2VydmFibGVcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IE9ic2VydmFibGU8Vmlld0ZpZWxkRGVmaW5pdGlvbltdPlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRWaWV3RmllbGRzT2JzZXJ2YWJsZSgpOiBPYnNlcnZhYmxlPFZpZXdGaWVsZERlZmluaXRpb25bXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5tZXRhZGF0YVN0b3JlLnJlY29yZFZpZXdNZXRhZGF0YSQucGlwZShtYXAoKHJlY29yZE1ldGFkYXRhOiBSZWNvcmRWaWV3TWV0YWRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkc01hcDogVmlld0ZpZWxkRGVmaW5pdGlvbk1hcCA9IHt9O1xuXG4gICAgICAgICAgICByZWNvcmRNZXRhZGF0YS5wYW5lbHMuZm9yRWFjaChwYW5lbCA9PiB7XG4gICAgICAgICAgICAgICAgcGFuZWwucm93cy5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJvdy5jb2xzLmZvckVhY2goY29sID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkTmFtZSA9IGNvbC5uYW1lID8/IGNvbC5maWVsZERlZmluaXRpb24ubmFtZSA/PyAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkc01hcFtmaWVsZE5hbWVdID0gY29sO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhyZWNvcmRNZXRhZGF0YS52YXJkZWZzKS5mb3JFYWNoKGZpZWxkS2V5ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YXJkZWYgPSByZWNvcmRNZXRhZGF0YS52YXJkZWZzW2ZpZWxkS2V5XSA/PyBudWxsO1xuICAgICAgICAgICAgICAgIGlmICghdmFyZGVmIHx8IGlzRW1wdHkodmFyZGVmKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gYWxyZWFkeSBkZWZpbmVkLiBza2lwXG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkc01hcFtmaWVsZEtleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh2YXJkZWYudHlwZSA9PSAncmVsYXRlJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZmllbGRzTWFwW2ZpZWxkS2V5XSA9IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogZmllbGRLZXksXG4gICAgICAgICAgICAgICAgICAgIHZhcmRlZkJhc2VkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogdmFyZGVmLnZuYW1lID8/ICcnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiB2YXJkZWYudHlwZSA/PyAnJyxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdmFyZGVmLmRpc3BsYXkgPz8gJycsXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkRGVmaW5pdGlvbjogdmFyZGVmLFxuICAgICAgICAgICAgICAgICAgICBtZXRhZGF0YTogdmFyZGVmLm1ldGFkYXRhID8/IHt9IGFzIEZpZWxkTWV0YWRhdGEsXG4gICAgICAgICAgICAgICAgICAgIGxvZ2ljOiB2YXJkZWYubG9naWMgPz8ge30gYXMgRmllbGRMb2dpY01hcFxuICAgICAgICAgICAgICAgIH0gYXMgVmlld0ZpZWxkRGVmaW5pdGlvbjtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhmaWVsZHNNYXApO1xuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldFJlY29yZE1ldGFkYXRhJCgpOiBPYnNlcnZhYmxlPE9iamVjdE1hcD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5tZXRhZGF0YVN0b3JlLnJlY29yZFZpZXdNZXRhZGF0YSQucGlwZShtYXAoKHJlY29yZE1ldGFkYXRhOiBSZWNvcmRWaWV3TWV0YWRhdGEpID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZWNvcmRNZXRhZGF0YT8ubWV0YWRhdGEgPz8ge307XG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCB1aSB1c2VyIHByZWZlcmVuY2Uga2V5XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RvcmFnZUtleSBTdG9yYWdlIEtleVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBQcmVmZXJlbmNlIEtleVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRQcmVmZXJlbmNlS2V5KHN0b3JhZ2VLZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAncmVjb3Jkdmlldy0nICsgc3RvcmFnZUtleTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTYXZlIHVpIHVzZXIgcHJlZmVyZW5jZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1vZHVsZSBNb2R1bGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RvcmFnZUtleSBTdG9yYWdlIEtleVxuICAgICAqIEBwYXJhbSB7YW55fSB2YWx1ZSBWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgc2F2ZVByZWZlcmVuY2UobW9kdWxlOiBzdHJpbmcsIHN0b3JhZ2VLZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLnByZWZlcmVuY2VzLnNldFVpKG1vZHVsZSwgdGhpcy5nZXRQcmVmZXJlbmNlS2V5KHN0b3JhZ2VLZXkpLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9hZCB1aSB1c2VyIHByZWZlcmVuY2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtb2R1bGUgTW9kdWxlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0b3JhZ2VLZXkgU3RvcmFnZSBLZXlcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHJldHVybnMge2FueX0gVXNlciBQcmVmZXJlbmNlXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGxvYWRQcmVmZXJlbmNlKG1vZHVsZTogc3RyaW5nLCBzdG9yYWdlS2V5OiBzdHJpbmcpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmVmZXJlbmNlcy5nZXRVaShtb2R1bGUsIHRoaXMuZ2V0UHJlZmVyZW5jZUtleShzdG9yYWdlS2V5KSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzYWZlVW5zdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uQXJyYXk6IFN1YnNjcmlwdGlvbltdKTogU3Vic2NyaXB0aW9uW10ge1xuICAgICAgICBzdWJzY3JpcHRpb25BcnJheS5mb3JFYWNoKHN1YiA9PiB7XG4gICAgICAgICAgICBpZiAoc3ViLmNsb3NlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBzdWJzY3JpcHRpb25BcnJheSA9IFtdO1xuXG4gICAgICAgIHJldHVybiBzdWJzY3JpcHRpb25BcnJheTtcbiAgICB9XG59XG4iXX0=