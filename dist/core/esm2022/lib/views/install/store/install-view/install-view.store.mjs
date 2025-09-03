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
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatestWith, of } from 'rxjs';
import { isVoid } from '../../../../common/utils/value-utils';
import { deepClone } from '../../../../common/utils/object-utils';
import { distinctUntilChanged, map, shareReplay } from 'rxjs/operators';
import { RecordSaveGQL } from '../../../../store/record/graphql/api.record.save';
import { MessageService } from '../../../../services/message/message.service';
import { RecordManager } from '../../../../services/record/record.manager';
import { RecordFetchGQL } from '../../../../store/record/graphql/api.record.get';
import { RecordStoreFactory } from '../../../../store/record/record.store.factory';
import { LanguageStore } from '../../../../store/language/language.store';
import { trimEnd } from 'lodash-es';
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/record/graphql/api.record.get";
import * as i2 from "../../../../store/record/graphql/api.record.save";
import * as i3 from "../../../../services/message/message.service";
import * as i4 from "../../../../services/record/record.manager";
import * as i5 from "../../../../store/record/record.store.factory";
import * as i6 from "../../../../store/language/language.store";
const initialState = {
    loading: false,
    mode: 'detail',
    params: {
        returnModule: '',
        returnId: '',
        returnAction: ''
    }
};
export class InstallViewStore {
    constructor(recordFetchGQL, recordSaveGQL, message, recordManager, recordStoreFactory, language) {
        this.recordFetchGQL = recordFetchGQL;
        this.recordSaveGQL = recordSaveGQL;
        this.message = message;
        this.recordManager = recordManager;
        this.recordStoreFactory = recordStoreFactory;
        this.language = language;
        /** Internal Properties */
        this.cache$ = null;
        this.internalState = deepClone(initialState);
        this.store = new BehaviorSubject(this.internalState);
        this.state$ = this.store.asObservable();
        this.subs = [];
        this.recordStore = recordStoreFactory.create(this.getViewFieldsObservable());
        this.record$ = this.recordStore.state$.pipe(distinctUntilChanged());
        this.stagingRecord$ = this.recordStore.staging$.pipe(distinctUntilChanged());
        this.loading$ = this.state$.pipe(map(state => state.loading));
        this.mode$ = this.state$.pipe(map(state => state.mode));
        this.vm$ = this.record$.pipe(combineLatestWith(this.loading$), map(([record, loading]) => {
            this.vm = { record, loading };
            return this.vm;
        }));
        this.viewContext$ = this.record$.pipe(map(() => {
            return this.getViewContext();
        }));
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
    getViewContext() {
        return {
            record: this.getBaseRecord()
        };
    }
    getActions() {
        return of([]);
    }
    /**
     * Initial install view
     *
     * @param {string} mode to use
     * @param {object} params to set
     */
    init(mode = 'edit', params = {}) {
        this.setMode(mode);
        this.recordStore.init({
            id: '',
            module: 'install',
            attributes: {}
        }, true);
    }
    /**
     * Clear observable cache
     */
    clear() {
        this.cache$ = null;
        this.updateState(deepClone(initialState));
    }
    /**
     * Clear
     */
    clearAuthBased() {
        this.clear();
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
    getLicenseText() {
        return this.language.getFieldLabel('SUITE8_LICENSE_CONTENT');
    }
    getMetadata() {
        this.url = window.location.origin + window.location.pathname;
        this.url = trimEnd(this.url, '/');
        return {
            actions: [],
            templateMeta: {
                maxColumns: 2,
                useTabs: true,
                tabDefs: {
                    LBL_CONFIG: {
                        newTab: true,
                        panelDefault: 'expanded'
                    }
                }
            },
            panels: [
                {
                    key: 'LBL_CONFIG',
                    display$: of(true).pipe(shareReplay(1)),
                    rows: [
                        {
                            cols: [
                                {
                                    name: 'site_host',
                                    label: 'LBL_SITECFG_URL',
                                    type: 'varchar',
                                    fieldDefinition: {
                                        "name": "site_host",
                                        "vname": "LBL_SITECFG_URL",
                                        "type": "varchar",
                                        "required": true,
                                        "default": this.url?.toString(),
                                        "defaultValueModes": ["create", "edit"]
                                    },
                                },
                                {
                                    name: 'demoData',
                                    label: 'LBL_DBCONF_DEMO_DATA',
                                    type: 'enum',
                                    fieldDefinition: {
                                        name: "demoData",
                                        vname: "LBL_DBCONF_DEMO_DATA",
                                        type: "enum",
                                        options: "__no_options__",
                                        required: true,
                                        "default": 'no',
                                        "defaultValueModes": ["create", "edit"],
                                        metadata: {
                                            extraOptions: [
                                                {
                                                    value: "yes",
                                                    labelKey: "LBL_YES",
                                                },
                                                {
                                                    value: "no",
                                                    labelKey: "LBL_NO",
                                                },
                                            ]
                                        }
                                    },
                                },
                            ]
                        },
                        {
                            cols: [
                                {
                                    name: 'db_config',
                                    label: 'LBL_DBCONF_TITLE',
                                    type: 'grouped-field',
                                    fieldDefinition: {
                                        name: "db_config",
                                        vname: "LBL_DBCONF_TITLE",
                                        type: "grouped-field",
                                        layout: [
                                            "db_username",
                                            "db_password",
                                            "db_host",
                                            "db_name",
                                            "db_port"
                                        ],
                                        display: "vertical",
                                        groupFields: {
                                            "db_username": {
                                                "name": "db_username",
                                                "type": "varchar",
                                                "vname": "LBL_DBCONF_SUITE_DB_USER",
                                                "labelKey": "LBL_DBCONF_SUITE_DB_USER",
                                                "label": "LBL_DBCONF_SUITE_DB_USER",
                                                "showLabel": ["*"],
                                                "required": true,
                                            },
                                            "db_password": {
                                                "name": "db_password",
                                                "type": "password",
                                                "vname": "LBL_DBCONF_DB_PASSWORD",
                                                "labelKey": "LBL_DBCONF_DB_PASSWORD",
                                                "showLabel": ["*"],
                                                "required": true,
                                            },
                                            "db_host": {
                                                "name": "db_host",
                                                "type": "varchar",
                                                "vname": "LBL_DBCONF_HOST_NAME",
                                                "labelKey": "LBL_DBCONF_HOST_NAME",
                                                "showLabel": ["*"],
                                                "required": true,
                                            },
                                            "db_name": {
                                                "name": "db_name",
                                                "type": "varchar",
                                                "vname": "LBL_DBCONF_DB_NAME",
                                                "labelKey": "LBL_DBCONF_DB_NAME",
                                                "showLabel": ["*"],
                                                "required": true,
                                            },
                                            "db_port": {
                                                "name": "db_port",
                                                "type": "varchar",
                                                "vname": "LBL_DBCONF_DB_PORT",
                                                "labelKey": "LBL_DBCONF_DB_PORT",
                                                "showLabel": ["*"],
                                                "required": false,
                                                "default": '3306',
                                                "defaultValueModes": ["create", "edit"]
                                            }
                                        },
                                        showLabel: {
                                            edit: ['*']
                                        }
                                    },
                                },
                                {
                                    name: 'admin_config',
                                    label: 'LBL_SITECFG_TITLE',
                                    type: 'grouped-field',
                                    fieldDefinition: {
                                        name: "admin_config",
                                        vname: "LBL_SITECFG_TITLE",
                                        type: "grouped-field",
                                        layout: [
                                            "site_username",
                                            "site_password",
                                        ],
                                        display: "vertical",
                                        groupFields: {
                                            "site_username": {
                                                "name": "site_username",
                                                "type": "varchar",
                                                "vname": "LBL_SITECFG_ADMIN_Name",
                                                "labelKey": "LBL_SITECFG_ADMIN_Name",
                                                "showLabel": ["edit"],
                                                "required": true,
                                                "default": "admin",
                                                "defaultValueModes": ["create", "edit"]
                                            },
                                            "site_password": {
                                                "name": "site_password",
                                                "type": "password",
                                                "vname": "LBL_SITECFG_ADMIN_PASS",
                                                "labelKey": "LBL_SITECFG_ADMIN_PASS",
                                                "showLabel": ["edit"],
                                                "required": true,
                                            },
                                        },
                                        showLabel: {
                                            edit: ['*']
                                        }
                                    },
                                }
                            ]
                        }
                    ]
                }
            ],
        };
    }
    getMetadata$() {
        return of(this.getMetadata());
    }
    getModuleName() {
        return 'install';
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
     * Update the state
     *
     * @param {object} state to set
     */
    updateState(state) {
        this.store.next(this.internalState = state);
    }
    getIgnoreSystemChecksField() {
        return this.recordStore.getStaging().fields['sys_check_option'];
    }
    /**
     * Get view fields observable
     *
     * @returns {object} Observable<ViewFieldDefinition[]>
     */
    getViewFieldsObservable() {
        return this.getMetadata$().pipe(map((meta) => {
            const fields = [];
            meta.panels.forEach(panel => {
                panel.rows.forEach(row => {
                    row.cols.forEach(col => {
                        fields.push(col);
                    });
                });
            });
            fields.push({
                "name": "sys_check_option",
                "type": "boolean",
                fieldDefinition: {
                    "name": "sys_check_option",
                    "type": "boolean",
                    "vname": "LBL_SYS_CHECK_WARNING",
                    "labelKey": "LBL_SYS_CHECK_WARNING",
                    "showLabel": ["edit"],
                    "required": false,
                    "value": 'false',
                    "default": 'false',
                    "defaultValueModes": ["create", "edit"]
                }
            });
            return fields;
        }));
    }
    static { this.ɵfac = function InstallViewStore_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || InstallViewStore)(i0.ɵɵinject(i1.RecordFetchGQL), i0.ɵɵinject(i2.RecordSaveGQL), i0.ɵɵinject(i3.MessageService), i0.ɵɵinject(i4.RecordManager), i0.ɵɵinject(i5.RecordStoreFactory), i0.ɵɵinject(i6.LanguageStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: InstallViewStore, factory: InstallViewStore.ɵfac }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InstallViewStore, [{
        type: Injectable
    }], () => [{ type: i1.RecordFetchGQL }, { type: i2.RecordSaveGQL }, { type: i3.MessageService }, { type: i4.RecordManager }, { type: i5.RecordStoreFactory }, { type: i6.LanguageStore }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFsbC12aWV3LnN0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3ZpZXdzL2luc3RhbGwvc3RvcmUvaW5zdGFsbC12aWV3L2luc3RhbGwtdmlldy5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsZUFBZSxFQUFFLGlCQUFpQixFQUFjLEVBQUUsRUFBZSxNQUFNLE1BQU0sQ0FBQztBQUN0RixPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDNUQsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBUWhFLE9BQU8sRUFBQyxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFHdEUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtEQUFrRCxDQUFDO0FBRS9FLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSw4Q0FBOEMsQ0FBQztBQUM1RSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sNENBQTRDLENBQUM7QUFFekUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGlEQUFpRCxDQUFDO0FBRS9FLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBQ2pGLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDOzs7Ozs7OztBQUVwQyxNQUFNLFlBQVksR0FBcUI7SUFDbkMsT0FBTyxFQUFFLEtBQUs7SUFDZCxJQUFJLEVBQUUsUUFBUTtJQUNkLE1BQU0sRUFBRTtRQUNKLFlBQVksRUFBRSxFQUFFO1FBQ2hCLFFB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QWtCO29CQUMxQixNQUFNLEVBQUUsU0FBUztvQkFDakIsT0FBTyxFQUFFLHVCQUF1QjtvQkFDaEMsVUFBVSxFQUFFLHVCQUF1QjtvQkFDbkMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDO29CQUNyQixVQUFVLEVBQUUsS0FBSztvQkFDakIsT0FBTyxFQUFFLE9BQU87b0JBQ2hCLFNBQVMsRUFBRSxPQUFPO29CQUNsQixtQkFBbUIsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUM7aUJBQzFDO2FBQ21CLENBQzNCLENBQUM7WUFFRixPQUFPLE1BQU0sQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQztpSEFoWlEsZ0JBQWdCO3VFQUFoQixnQkFBZ0IsV0FBaEIsZ0JBQWdCOztpRkFBaEIsZ0JBQWdCO2NBRDVCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgY29tYmluZUxhdGVzdFdpdGgsIE9ic2VydmFibGUsIG9mLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtpc1ZvaWR9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi91dGlscy92YWx1ZS11dGlscyc7XG5pbXBvcnQge2RlZXBDbG9uZX0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3V0aWxzL29iamVjdC11dGlscyc7XG5pbXBvcnQge0FjdGlvbn0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2FjdGlvbnMvYWN0aW9uLm1vZGVsJztcbmltcG9ydCB7RmllbGQsIEZpZWxkRGVmaW5pdGlvbiwgRmllbGRNZXRhZGF0YSwgT3B0aW9ufSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vcmVjb3JkL2ZpZWxkLm1vZGVsJztcbmltcG9ydCB7UmVjb3JkfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vcmVjb3JkL3JlY29yZC5tb2RlbCc7XG5pbXBvcnQge1BhbmVsLCBQYW5lbENlbGwsIFBhbmVsUm93LCBUYWJEZWZpbml0aW9uLCBUYWJEZWZpbml0aW9uc30gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL21ldGFkYXRhL21ldGFkYXRhLm1vZGVsJztcbmltcG9ydCB7Vmlld0NvbnRleHR9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi92aWV3cy92aWV3Lm1vZGVsJztcbmltcG9ydCB7Vmlld0ZpZWxkRGVmaW5pdGlvbn0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL21ldGFkYXRhL21ldGFkYXRhLm1vZGVsJztcbmltcG9ydCB7Vmlld01vZGV9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi92aWV3cy92aWV3Lm1vZGVsJztcbmltcG9ydCB7ZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCwgc2hhcmVSZXBsYXl9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7SW5zdGFsbFZpZXdNZXRhZGF0YSwgSW5zdGFsbFZpZXdNb2RlbCwgSW5zdGFsbFZpZXdTdGF0ZX0gZnJvbSAnLi9pbnN0YWxsLXZpZXcuc3RvcmUubW9kZWwnO1xuaW1wb3J0IHtTdGF0ZVN0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9zdGF0ZSc7XG5pbXBvcnQge1JlY29yZFNhdmVHUUx9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3JlY29yZC9ncmFwaHFsL2FwaS5yZWNvcmQuc2F2ZSc7XG5pbXBvcnQge1JlY29yZFRlbXBsYXRlTWV0YWRhdGF9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL21ldGFkYXRhL21ldGFkYXRhLnN0b3JlLnNlcnZpY2UnO1xuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbWVzc2FnZS9tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHtSZWNvcmRNYW5hZ2VyfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9yZWNvcmQvcmVjb3JkLm1hbmFnZXInO1xuaW1wb3J0IHtSZWNvcmRTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvcmVjb3JkL3JlY29yZC5zdG9yZSc7XG5pbXBvcnQge1JlY29yZEZldGNoR1FMfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9yZWNvcmQvZ3JhcGhxbC9hcGkucmVjb3JkLmdldCc7XG5pbXBvcnQge1BhcmFtc30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7UmVjb3JkU3RvcmVGYWN0b3J5fSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9yZWNvcmQvcmVjb3JkLnN0b3JlLmZhY3RvcnknO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5pbXBvcnQgeyB0cmltRW5kIH0gZnJvbSAnbG9kYXNoLWVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlOiBJbnN0YWxsVmlld1N0YXRlID0ge1xuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIG1vZGU6ICdkZXRhaWwnLFxuICAgIHBhcmFtczoge1xuICAgICAgICByZXR1cm5Nb2R1bGU6ICcnLFxuICAgICAgICByZXR1cm5JZDogJycsXG4gICAgICAgIHJldHVybkFjdGlvbjogJydcbiAgICB9XG59O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW5zdGFsbFZpZXdTdG9yZSBpbXBsZW1lbnRzIFN0YXRlU3RvcmUge1xuXG4gICAgLyoqXG4gICAgICogUHVibGljIGxvbmctbGl2ZWQgb2JzZXJ2YWJsZSBzdHJlYW1zXG4gICAgICovXG4gICAgcmVjb3JkJDogT2JzZXJ2YWJsZTxSZWNvcmQ+O1xuICAgIHN0YWdpbmdSZWNvcmQkOiBPYnNlcnZhYmxlPFJlY29yZD47XG4gICAgbG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgbW9kZSQ6IE9ic2VydmFibGU8Vmlld01vZGU+O1xuICAgIHZpZXdDb250ZXh0JDogT2JzZXJ2YWJsZTxWaWV3Q29udGV4dD47XG5cbiAgICAvKipcbiAgICAgKiBWaWV3LW1vZGVsIHRoYXQgcmVzb2x2ZXMgb25jZSBhbGwgdGhlIGRhdGEgaXMgcmVhZHkgKG9yIHVwZGF0ZWQpLlxuICAgICAqL1xuICAgIHZtJDogT2JzZXJ2YWJsZTxJbnN0YWxsVmlld01vZGVsPjtcbiAgICB2bTogSW5zdGFsbFZpZXdNb2RlbDtcbiAgICByZWNvcmRTdG9yZTogUmVjb3JkU3RvcmU7XG4gICAgdXJsOiBzdHJpbmc7XG5cbiAgICAvKiogSW50ZXJuYWwgUHJvcGVydGllcyAqL1xuICAgIHByb3RlY3RlZCBjYWNoZSQ6IE9ic2VydmFibGU8YW55PiA9IG51bGw7XG4gICAgcHJvdGVjdGVkIGludGVybmFsU3RhdGU6IEluc3RhbGxWaWV3U3RhdGUgPSBkZWVwQ2xvbmUoaW5pdGlhbFN0YXRlKTtcbiAgICBwcm90ZWN0ZWQgc3RvcmUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEluc3RhbGxWaWV3U3RhdGU+KHRoaXMuaW50ZXJuYWxTdGF0ZSk7XG4gICAgcHJvdGVjdGVkIHN0YXRlJCA9IHRoaXMuc3RvcmUuYXNPYnNlcnZhYmxlKCk7XG4gICAgcHJvdGVjdGVkIHN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIHJlY29yZEZldGNoR1FMOiBSZWNvcmRGZXRjaEdRTCxcbiAgICAgICAgcHJvdGVjdGVkIHJlY29yZFNhdmVHUUw6IFJlY29yZFNhdmVHUUwsXG4gICAgICAgIHByb3RlY3RlZCBtZXNzYWdlOiBNZXNzYWdlU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIHJlY29yZE1hbmFnZXI6IFJlY29yZE1hbmFnZXIsXG4gICAgICAgIHByb3RlY3RlZCByZWNvcmRTdG9yZUZhY3Rvcnk6IFJlY29yZFN0b3JlRmFjdG9yeSxcbiAgICAgICAgcHJvdGVjdGVkIGxhbmd1YWdlOiBMYW5ndWFnZVN0b3JlXG4gICAgKSB7XG5cbiAgICAgICAgdGhpcy5yZWNvcmRTdG9yZSA9IHJlY29yZFN0b3JlRmFjdG9yeS5jcmVhdGUodGhpcy5nZXRWaWV3RmllbGRzT2JzZXJ2YWJsZSgpKTtcblxuICAgICAgICB0aGlzLnJlY29yZCQgPSB0aGlzLnJlY29yZFN0b3JlLnN0YXRlJC5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICAgICAgICB0aGlzLnN0YWdpbmdSZWNvcmQkID0gdGhpcy5yZWNvcmRTdG9yZS5zdGFnaW5nJC5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICAgICAgICB0aGlzLmxvYWRpbmckID0gdGhpcy5zdGF0ZSQucGlwZShtYXAoc3RhdGUgPT4gc3RhdGUubG9hZGluZykpO1xuICAgICAgICB0aGlzLm1vZGUkID0gdGhpcy5zdGF0ZSQucGlwZShtYXAoc3RhdGUgPT4gc3RhdGUubW9kZSkpO1xuXG4gICAgICAgIHRoaXMudm0kID0gdGhpcy5yZWNvcmQkLnBpcGUoXG4gICAgICAgICAgICBjb21iaW5lTGF0ZXN0V2l0aCh0aGlzLmxvYWRpbmckKSxcbiAgICAgICAgICAgIG1hcCgoW3JlY29yZCwgbG9hZGluZ106IFtSZWNvcmQsIGJvb2xlYW5dKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy52bSA9IHtyZWNvcmQsIGxvYWRpbmd9IGFzIEluc3RhbGxWaWV3TW9kZWw7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudm07XG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgdGhpcy52aWV3Q29udGV4dCQgPSB0aGlzLnJlY29yZCQucGlwZShtYXAoKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Vmlld0NvbnRleHQoKTtcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIGdldCBwYXJhbXMoKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsU3RhdGUucGFyYW1zIHx8IHt9O1xuICAgIH1cblxuICAgIHNldCBwYXJhbXMocGFyYW1zOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgICAgICAgLi4udGhpcy5pbnRlcm5hbFN0YXRlLFxuICAgICAgICAgICAgcGFyYW1zXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldFZpZXdDb250ZXh0KCk6IFZpZXdDb250ZXh0IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlY29yZDogdGhpcy5nZXRCYXNlUmVjb3JkKClcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXRBY3Rpb25zKCk6IE9ic2VydmFibGU8QWN0aW9uW10+IHtcbiAgICAgICAgcmV0dXJuIG9mKFtdKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsIGluc3RhbGwgdmlld1xuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1vZGUgdG8gdXNlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHBhcmFtcyB0byBzZXRcbiAgICAgKi9cbiAgICBwdWJsaWMgaW5pdChtb2RlID0gJ2VkaXQnIGFzIFZpZXdNb2RlLCBwYXJhbXM6IFBhcmFtcyA9IHt9KTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2V0TW9kZShtb2RlKTtcbiAgICAgICAgdGhpcy5yZWNvcmRTdG9yZS5pbml0KFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogJycsXG4gICAgICAgICAgICAgICAgbW9kdWxlOiAnaW5zdGFsbCcsXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczoge31cbiAgICAgICAgICAgIH0gYXMgUmVjb3JkLFxuICAgICAgICAgICAgdHJ1ZVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFyIG9ic2VydmFibGUgY2FjaGVcbiAgICAgKi9cbiAgICBwdWJsaWMgY2xlYXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2FjaGUkID0gbnVsbDtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShkZWVwQ2xvbmUoaW5pdGlhbFN0YXRlKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXJcbiAgICAgKi9cbiAgICBjbGVhckF1dGhCYXNlZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBzdGFnaW5nIHJlY29yZFxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ30gVmlld01vZGVcbiAgICAgKi9cbiAgICBnZXRCYXNlUmVjb3JkKCk6IFJlY29yZCB7XG4gICAgICAgIGlmICghdGhpcy5pbnRlcm5hbFN0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZWNvcmRTdG9yZS5nZXRCYXNlUmVjb3JkKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGN1cnJlbnQgdmlldyBtb2RlXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBWaWV3TW9kZVxuICAgICAqL1xuICAgIGdldE1vZGUoKTogVmlld01vZGUge1xuICAgICAgICBpZiAoIXRoaXMuaW50ZXJuYWxTdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxTdGF0ZS5tb2RlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBuZXcgbW9kZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1vZGUgVmlld01vZGVcbiAgICAgKi9cbiAgICBzZXRNb2RlKG1vZGU6IFZpZXdNb2RlKTogdm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoey4uLnRoaXMuaW50ZXJuYWxTdGF0ZSwgbW9kZX0pO1xuICAgIH1cblxuICAgIGdldExpY2Vuc2VUZXh0KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmxhbmd1YWdlLmdldEZpZWxkTGFiZWwoJ1NVSVRFOF9MSUNFTlNFX0NPTlRFTlQnKTtcbiAgICB9XG5cbiAgICBnZXRNZXRhZGF0YSgpOiBJbnN0YWxsVmlld01ldGFkYXRhIHtcbiAgICAgICAgdGhpcy51cmwgPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgICAgICB0aGlzLnVybCA9IHRyaW1FbmQodGhpcy51cmwsICcvJyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhY3Rpb25zOiBbXSxcbiAgICAgICAgICAgIHRlbXBsYXRlTWV0YToge1xuICAgICAgICAgICAgICAgIG1heENvbHVtbnM6IDIsXG4gICAgICAgICAgICAgICAgdXNlVGFiczogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0YWJEZWZzOiB7XG4gICAgICAgICAgICAgICAgICAgIExCTF9DT05GSUc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1RhYjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhbmVsRGVmYXVsdDogJ2V4cGFuZGVkJ1xuICAgICAgICAgICAgICAgICAgICB9IGFzIFRhYkRlZmluaXRpb25cbiAgICAgICAgICAgICAgICB9IGFzIFRhYkRlZmluaXRpb25zXG4gICAgICAgICAgICB9IGFzIFJlY29yZFRlbXBsYXRlTWV0YWRhdGEsXG4gICAgICAgICAgICBwYW5lbHM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogJ0xCTF9DT05GSUcnLFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5JDogb2YodHJ1ZSkucGlwZShzaGFyZVJlcGxheSgxKSksXG4gICAgICAgICAgICAgICAgICAgIHJvd3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzaXRlX2hvc3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdMQkxfU0lURUNGR19VUkwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3ZhcmNoYXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGREZWZpbml0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwic2l0ZV9ob3N0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2bmFtZVwiOiBcIkxCTF9TSVRFQ0ZHX1VSTFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInZhcmNoYXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlcXVpcmVkXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHRoaXMudXJsPy50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVmYXVsdFZhbHVlTW9kZXNcIjogW1wiY3JlYXRlXCIsIFwiZWRpdFwiXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBhcyBGaWVsZERlZmluaXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gYXMgUGFuZWxDZWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGVtb0RhdGEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdMQkxfREJDT05GX0RFTU9fREFUQScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZW51bScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZERlZmluaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImRlbW9EYXRhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdm5hbWU6IFwiTEJMX0RCQ09ORl9ERU1PX0RBVEFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImVudW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBcIl9fbm9fb3B0aW9uc19fXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6ICdubycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWZhdWx0VmFsdWVNb2Rlc1wiOiBbXCJjcmVhdGVcIiwgXCJlZGl0XCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhT3B0aW9uczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInllc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsS2V5OiBcIkxCTF9ZRVNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gYXMgT3B0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIm5vXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxLZXk6IFwiTEJMX05PXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGFzIE9wdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSBhcyBPcHRpb25bXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gYXMgRmllbGRNZXRhZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBhcyBGaWVsZERlZmluaXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gYXMgUGFuZWxDZWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGJfY29uZmlnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnTEJMX0RCQ09ORl9USVRMRScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZ3JvdXBlZC1maWVsZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZERlZmluaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImRiX2NvbmZpZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZuYW1lOiBcIkxCTF9EQkNPTkZfVElUTEVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImdyb3VwZWQtZmllbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQ6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYl91c2VybmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRiX3Bhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGJfaG9zdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRiX25hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYl9wb3J0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwidmVydGljYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cEZpZWxkczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRiX3VzZXJuYW1lXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImRiX3VzZXJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ2YXJjaGFyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZuYW1lXCI6IFwiTEJMX0RCQ09ORl9TVUlURV9EQl9VU0VSXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsS2V5XCI6IFwiTEJMX0RCQ09ORl9TVUlURV9EQl9VU0VSXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiTEJMX0RCQ09ORl9TVUlURV9EQl9VU0VSXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3dMYWJlbFwiOiBbXCIqXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXF1aXJlZFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRiX3Bhc3N3b3JkXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImRiX3Bhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2bmFtZVwiOiBcIkxCTF9EQkNPTkZfREJfUEFTU1dPUkRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxLZXlcIjogXCJMQkxfREJDT05GX0RCX1BBU1NXT1JEXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3dMYWJlbFwiOiBbXCIqXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXF1aXJlZFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRiX2hvc3RcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiZGJfaG9zdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidmFyY2hhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2bmFtZVwiOiBcIkxCTF9EQkNPTkZfSE9TVF9OQU1FXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsS2V5XCI6IFwiTEJMX0RCQ09ORl9IT1NUX05BTUVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd0xhYmVsXCI6IFtcIipcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlcXVpcmVkXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGJfbmFtZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJkYl9uYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ2YXJjaGFyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZuYW1lXCI6IFwiTEJMX0RCQ09ORl9EQl9OQU1FXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsS2V5XCI6IFwiTEJMX0RCQ09ORl9EQl9OQU1FXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3dMYWJlbFwiOiBbXCIqXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXF1aXJlZFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRiX3BvcnRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiZGJfcG9ydFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidmFyY2hhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2bmFtZVwiOiBcIkxCTF9EQkNPTkZfREJfUE9SVFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbEtleVwiOiBcIkxCTF9EQkNPTkZfREJfUE9SVFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93TGFiZWxcIjogW1wiKlwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVxdWlyZWRcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjonMzMwNicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlZmF1bHRWYWx1ZU1vZGVzXCI6IFtcImNyZWF0ZVwiLCBcImVkaXRcIl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0xhYmVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXQ6IFsnKiddXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBhcyBGaWVsZERlZmluaXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gYXMgUGFuZWxDZWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRtaW5fY29uZmlnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnTEJMX1NJVEVDRkdfVElUTEUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2dyb3VwZWQtZmllbGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGREZWZpbml0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJhZG1pbl9jb25maWdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bmFtZTogXCJMQkxfU0lURUNGR19USVRMRVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZ3JvdXBlZC1maWVsZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpdGVfdXNlcm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXRlX3Bhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcInZlcnRpY2FsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBGaWVsZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXRlX3VzZXJuYW1lXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInNpdGVfdXNlcm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInZhcmNoYXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidm5hbWVcIjogXCJMQkxfU0lURUNGR19BRE1JTl9OYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsS2V5XCI6IFwiTEJMX1NJVEVDRkdfQURNSU5fTmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93TGFiZWxcIjogW1wiZWRpdFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVxdWlyZWRcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcImFkbWluXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlZmF1bHRWYWx1ZU1vZGVzXCI6IFtcImNyZWF0ZVwiLCBcImVkaXRcIl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXRlX3Bhc3N3b3JkXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInNpdGVfcGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZuYW1lXCI6IFwiTEJMX1NJVEVDRkdfQURNSU5fUEFTU1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbEtleVwiOiBcIkxCTF9TSVRFQ0ZHX0FETUlOX1BBU1NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd0xhYmVsXCI6IFtcImVkaXRcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlcXVpcmVkXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93TGFiZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdDogWycqJ11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGFzIEZpZWxkRGVmaW5pdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBhcyBQYW5lbENlbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdIGFzIFBhbmVsQ2VsbFtdXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGFzIFBhbmVsUm93XG4gICAgICAgICAgICAgICAgICAgIF0gYXMgUGFuZWxSb3dbXVxuICAgICAgICAgICAgICAgIH0gYXMgUGFuZWxcbiAgICAgICAgICAgIF0gYXMgUGFuZWxbXSxcbiAgICAgICAgfSBhcyBJbnN0YWxsVmlld01ldGFkYXRhO1xuICAgIH1cblxuICAgIGdldE1ldGFkYXRhJCgpOiBPYnNlcnZhYmxlPEluc3RhbGxWaWV3TWV0YWRhdGE+IHtcbiAgICAgICAgcmV0dXJuIG9mKHRoaXMuZ2V0TWV0YWRhdGEoKSk7XG4gICAgfVxuXG4gICAgZ2V0TW9kdWxlTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ2luc3RhbGwnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlIHF1ZXJ5IHBhcmFtc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHBhcmFtcyB0byBzZXRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgcGFyc2VQYXJhbXMocGFyYW1zOiBQYXJhbXMgPSB7fSk6IHZvaWQge1xuICAgICAgICBpZiAoIXBhcmFtcykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3VycmVudFBhcmFtcyA9IHsuLi50aGlzLmludGVybmFsU3RhdGUucGFyYW1zfTtcbiAgICAgICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKHBhcmFtS2V5ID0+IHtcbiAgICAgICAgICAgIGlmICghaXNWb2lkKGN1cnJlbnRQYXJhbXNbcGFyYW1LZXldKSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQYXJhbXNbcGFyYW1LZXldID0gcGFyYW1zW3BhcmFtS2V5XTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgc3RhdGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzdGF0ZSB0byBzZXRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgdXBkYXRlU3RhdGUoc3RhdGU6IEluc3RhbGxWaWV3U3RhdGUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdG9yZS5uZXh0KHRoaXMuaW50ZXJuYWxTdGF0ZSA9IHN0YXRlKTtcbiAgICB9XG5cbiAgICBnZXRJZ25vcmVTeXN0ZW1DaGVja3NGaWVsZCgpOiBGaWVsZCB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlY29yZFN0b3JlLmdldFN0YWdpbmcoKS5maWVsZHNbJ3N5c19jaGVja19vcHRpb24nXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdmlldyBmaWVsZHMgb2JzZXJ2YWJsZVxuICAgICAqXG4gICAgICogQHJldHVybnMge29iamVjdH0gT2JzZXJ2YWJsZTxWaWV3RmllbGREZWZpbml0aW9uW10+XG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldFZpZXdGaWVsZHNPYnNlcnZhYmxlKCk6IE9ic2VydmFibGU8Vmlld0ZpZWxkRGVmaW5pdGlvbltdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldE1ldGFkYXRhJCgpLnBpcGUobWFwKChtZXRhOiBJbnN0YWxsVmlld01ldGFkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWVsZHM6IFZpZXdGaWVsZERlZmluaXRpb25bXSA9IFtdO1xuICAgICAgICAgICAgbWV0YS5wYW5lbHMuZm9yRWFjaChwYW5lbCA9PiB7XG4gICAgICAgICAgICAgICAgcGFuZWwucm93cy5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJvdy5jb2xzLmZvckVhY2goY29sID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkcy5wdXNoKGNvbCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGZpZWxkcy5wdXNoKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwic3lzX2NoZWNrX29wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkRGVmaW5pdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwic3lzX2NoZWNrX29wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2bmFtZVwiOiBcIkxCTF9TWVNfQ0hFQ0tfV0FSTklOR1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbEtleVwiOiBcIkxCTF9TWVNfQ0hFQ0tfV0FSTklOR1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93TGFiZWxcIjogW1wiZWRpdFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmVxdWlyZWRcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6ICdmYWxzZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogJ2ZhbHNlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVmYXVsdFZhbHVlTW9kZXNcIjogW1wiY3JlYXRlXCIsIFwiZWRpdFwiXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBhcyBWaWV3RmllbGREZWZpbml0aW9uXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICByZXR1cm4gZmllbGRzO1xuICAgICAgICB9KSk7XG4gICAgfVxufVxuIl19