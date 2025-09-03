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
import { BehaviorSubject, of } from 'rxjs';
import { distinctUntilChanged, map, shareReplay, tap } from 'rxjs/operators';
import { EntityGQL } from '../../services/api/graphql-api/api.entity.get';
import { deepClone } from '../../common/utils/object-utils';
import { AppStateStore } from '../app-state/app-state.store';
import * as i0 from "@angular/core";
import * as i1 from "../../services/api/graphql-api/api.entity.get";
import * as i2 from "../app-state/app-state.store";
const initialState = {
    module: '',
    detailView: {},
    editView: {},
    listView: {},
    search: {},
    recordView: {},
    subPanel: {},
    massUpdate: {},
    recentlyViewed: [],
    favorites: [],
    fieldActions: {}
};
const initialModuleMetadataState = {};
let internalState = deepClone(initialState);
let allModulesState = deepClone(initialModuleMetadataState);
const initialCache = {};
let cache = deepClone(initialCache);
export class MetadataStore {
    constructor(recordGQL, appState) {
        this.recordGQL = recordGQL;
        this.appState = appState;
        this.typeKeys = {
            listView: 'listView',
            search: 'search',
            recordView: 'recordView',
            subPanel: 'subPanel',
            massUpdate: 'massUpdate',
            recentlyViewed: 'recentlyViewed',
            favorites: 'favorites'
        };
        this.store = new BehaviorSubject(internalState);
        this.state$ = this.store.asObservable();
        this.allModuleStore = new BehaviorSubject(allModulesState);
        this.allModulesState$ = this.allModuleStore.asObservable();
        this.resourceName = 'moduleMetadata';
        this.fieldsMetadata = {
            fields: [
                'id',
                '_id',
            ]
        };
        this.types = [
            'listView',
            'search',
            'recordView',
            'subPanel',
            'massUpdate',
            'recentlyViewed',
            'favorites'
        ];
        this.baseTypes = [
            'listView',
            'search',
            'recordView',
            'subPanel',
            'favorites'
        ];
        this.listViewColumns$ = this.state$.pipe(map(state => state.listView.fields), distinctUntilChanged());
        this.listViewLineActions$ = this.state$.pipe(map(state => state.listView.lineActions), distinctUntilChanged());
        this.listViewTableActions$ = this.state$.pipe(map(state => state.listView.tableActions), distinctUntilChanged());
        this.listMetadata$ = this.state$.pipe(map(state => state.listView), distinctUntilChanged());
        this.searchMetadata$ = this.state$.pipe(map(state => state.search), distinctUntilChanged());
        this.recordViewMetadata$ = this.state$.pipe(map(state => state.recordView), distinctUntilChanged());
        this.fieldActions$ = this.state$.pipe(map(state => state.fieldActions), distinctUntilChanged());
        this.subPanelMetadata$ = this.state$.pipe(map(state => state.subPanel), distinctUntilChanged());
        this.metadata$ = this.state$;
        this.allModuleMetadata$ = this.allModulesState$;
    }
    /**
     * Clear state
     */
    clear() {
        cache = deepClone(initialCache);
        allModulesState = deepClone(initialModuleMetadataState);
        this.updateState('', deepClone(initialState));
    }
    clearAuthBased() {
        this.clear();
    }
    /**
     * Get all metadata types
     *
     * @returns {string[]} metadata types
     */
    getMetadataTypes() {
        return this.types;
    }
    getModule() {
        return internalState.module;
    }
    get() {
        return internalState;
    }
    getModuleMeta(module) {
        const meta = allModulesState[module] ?? {};
        return { ...meta };
    }
    setModuleMetadata(module, metadata) {
        cache[module] = of(metadata).pipe(shareReplay(1));
        this.updateAllModulesState(module, metadata);
    }
    /**
     * Initial ListViewMeta load if not cached and update state.
     *
     * @param {string} moduleID to fetch
     * @param {string[]} types to fetch
     * @param useCache
     * @returns any data
     */
    reloadModuleMetadata(moduleID, types, useCache = true) {
        if (!types) {
            types = this.getMetadataTypes();
        }
        return this.getMetadata(moduleID, types, useCache).pipe(tap((metadata) => {
            this.updateAllModulesState(moduleID, metadata);
        }));
    }
    /**
     * Initial ListViewMeta load if not cached and update state.
     *
     * @param {string} moduleID to fetch
     * @param {string[]} types to fetch
     * @param useCache
     * @returns any data
     */
    load(moduleID, types, useCache = true) {
        if (!types) {
            types = this.getMetadataTypes();
        }
        return this.getMetadata(moduleID, types, useCache).pipe(tap((metadata) => {
            this.updateState(moduleID, metadata);
        }));
    }
    /**
     * Check if loaded
     */
    isCached(module) {
        return (cache[module] ?? null) !== null;
    }
    /**
     * Get empty Metadata
     */
    getEmpty() {
        return deepClone(initialState);
    }
    /**
     * Set pre-loaded navigation and cache
     */
    set(module, metadata) {
        cache[module] = of(metadata).pipe(shareReplay(1));
        this.updateState(module, metadata);
    }
    /**
     * Get ListViewMeta cached Observable or call the backend
     *
     * @param {string} module to fetch
     * @param {string[]} types to retrieve
     * @param useCache
     * @returns {object} Observable<any>
     */
    getMetadata(module, types = null, useCache = true) {
        if (cache[module] == null || useCache === false) {
            cache[module] = this.fetchMetadata(module, types).pipe(shareReplay(1));
        }
        return cache[module];
    }
    /**
     * Internal API
     */
    mapMetadata(module, data) {
        const moduleMetadata = allModulesState[module] ?? {};
        const metadata = { ...moduleMetadata };
        this.parseListViewMetadata(data, metadata);
        this.parseSearchMetadata(data, metadata);
        this.parseRecordViewMetadata(data, metadata);
        this.parseSubPanelMetadata(data, metadata);
        this.parseMassUpdateMetadata(data, metadata);
        this.parseRecentlyViewedMetadata(data, metadata);
        this.parseFavoritesMetadata(data, metadata);
        this.parseFieldViewMetada(data, metadata);
        return metadata;
    }
    /**
     * Update the state
     *
     * @param {string} module
     * @param {object} state to set
     */
    updateState(module, state) {
        this.updateAllModulesState(module, state);
        this.store.next(internalState = { ...state, module });
    }
    /**
     * Update the state
     *
     * @param {string} module
     * @param {object} state to set
     */
    updateAllModulesState(module, state) {
        if (module !== '') {
            const newState = {
                ...allModulesState
            };
            newState[module] = { ...state };
            this.allModuleStore.next(allModulesState = newState);
        }
    }
    /**
     * Fetch the Metadata from the backend
     *
     * @param {string} module to fetch
     * @param {string[]} types to retrieve
     * @returns {object} Observable<{}>
     */
    fetchMetadata(module, types) {
        const fieldsToRetrieve = {
            fields: [
                ...this.fieldsMetadata.fields,
                ...(types ?? this.baseTypes)
            ]
        };
        return this.recordGQL.fetch(this.resourceName, `/api/module-metadata/${module}`, fieldsToRetrieve)
            .pipe(map(({ data }) => {
            return this.mapMetadata(module, data.moduleMetadata);
        }));
    }
    parseListViewMetadata(data, metadata) {
        if (!data || !data.listView) {
            return;
        }
        const listViewMeta = {
            fields: [],
            bulkActions: {},
            lineActions: [],
            tableActions: [],
            chartTypes: {},
            filters: []
        };
        if (data.listView.columns) {
            data.listView.columns.forEach((field) => {
                listViewMeta.fields.push(field);
            });
        }
        const entries = {
            bulkActions: 'bulkActions',
            lineActions: 'lineActions',
            tableActions: 'tableActions',
            sidebarWidgets: 'sidebarWidgets',
            availableFilters: 'filters',
            paginationType: 'paginationType'
        };
        this.addDefinedMeta(listViewMeta, data.listView, entries);
        metadata.listView = listViewMeta;
    }
    parseFieldViewMetada(data, metadata) {
        if (!data || !data.recordView || !data.recordView.panels) {
            return;
        }
        const fieldActions = {
            recordView: {}
        };
        data.recordView.panels.forEach(panel => {
            if (panel.rows) {
                panel.rows.forEach(row => {
                    if (row.cols) {
                        row.cols.forEach(col => {
                            if (col.fieldActions && col.fieldActions.actions) {
                                Object.values(col.fieldActions.actions).forEach(action => {
                                    action['fieldName'] = col.name;
                                    const viewFieldActions = fieldActions['recordView'][col.name] ?? [];
                                    viewFieldActions.push(action);
                                    fieldActions['recordView'][col.name] = viewFieldActions;
                                });
                            }
                        });
                    }
                });
            }
        });
        metadata.fieldActions = fieldActions;
    }
    parseSearchMetadata(data, metadata) {
        if (data && data.search) {
            metadata.search = data.search;
        }
    }
    parseSubPanelMetadata(data, metadata) {
        if (data && data.subPanel) {
            metadata.subPanel = data.subPanel;
        }
    }
    parseMassUpdateMetadata(data, metadata) {
        if (data && data.massUpdate) {
            metadata.massUpdate = data.massUpdate;
        }
    }
    parseRecordViewMetadata(data, metadata) {
        if (!data || !data.recordView) {
            return;
        }
        const recordViewMeta = {
            actions: [],
            templateMeta: {},
            panels: []
        };
        const receivedMeta = data.recordView;
        const entries = {
            templateMeta: 'templateMeta',
            actions: 'actions',
            panels: 'panels',
            topWidget: 'topWidget',
            sidebarWidgets: 'sidebarWidgets',
            bottomWidgets: 'bottomWidgets',
            summaryTemplates: 'summaryTemplates',
            vardefs: 'vardefs',
            metadata: 'metadata'
        };
        this.addDefinedMeta(recordViewMeta, receivedMeta, entries);
        metadata.recordView = recordViewMeta;
    }
    parseRecentlyViewedMetadata(data, metadata) {
        if (data && data.recentlyViewed) {
            metadata.recentlyViewed = data.recentlyViewed;
        }
    }
    parseFavoritesMetadata(data, metadata) {
        if (data && data.favorites) {
            metadata.favorites = data.favorites;
        }
    }
    addDefinedMeta(metadata, received, keyMap) {
        Object.keys(keyMap).forEach(dataKey => {
            const metadataKey = keyMap[dataKey];
            if (received[dataKey]) {
                metadata[metadataKey] = received[dataKey];
            }
        });
    }
    static { this.ɵfac = function MetadataStore_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MetadataStore)(i0.ɵɵinject(i1.EntityGQL), i0.ɵɵinject(i2.AppStateStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: MetadataStore, factory: MetadataStore.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MetadataStore, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.EntityGQL }, { type: i2.AppStateStore }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEuc3RvcmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9zdG9yZS9tZXRhZGF0YS9tZXRhZGF0YS5zdG9yZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxlQUFlLEVBQWMsRUFBRSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBQyxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNFLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUl4RSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFPMUQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDhCQUE4QixDQUFDOzs7O0FBMkMzRCxNQUFNLFlBQVksR0FBYTtJQUMzQixNQUFNLEVBQUUsRUFBRTtJQUNWLFVBQVUsRUFBRSxFQUFFO0lBQ2QsUUFBUSxFQUFFLEVBQUU7SUFDWixRQUFRLEVBQUUsRUFBa0I7SUFDNUIsTUFBTSxFQUFFLEVBQWdCO0lBQ3hCLFVBQVUsRUFBRSxFQUF3QjtJQUNwQyxRQUFRLEVBQUUsRUFBa0I7SUFDNUIsVUFBVSxFQUFFLEVBQW9CO0lBQ2hDLGNBQWMsRUFBRSxFQUFFO0lBQ2xCLFNBQVMsRUFBRSxFQUFFO0lBQ2IsWUFBWSxFQUFFLEVBQWtCO0NBQ25DLENBQUM7QUFFRixNQUFNLDBCQUEwQixHQUFnQixFQUFFLENBQUM7QUFHbkQsSUFBSSxhQUFhLEdBQWEsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3RELElBQUksZUFBZSxHQUFnQixTQUFTLENBQUMsMEJBQTBCLENB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QUFNOztpRkFFVCxhQUFhO2NBSHpCLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBvZn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2Rpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAsIHNoYXJlUmVwbGF5LCB0YXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7RW50aXR5R1FMfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGkvZ3JhcGhxbC1hcGkvYXBpLmVudGl0eS5nZXQnO1xuaW1wb3J0IHtBY3Rpb259IGZyb20gJy4uLy4uL2NvbW1vbi9hY3Rpb25zL2FjdGlvbi5tb2RlbCc7XG5pbXBvcnQge0NvbHVtbkRlZmluaXRpb24sIExpc3RWaWV3TWV0YSwgTWFzc1VwZGF0ZU1ldGEsIFNlYXJjaE1ldGF9IGZyb20gJy4uLy4uL2NvbW1vbi9tZXRhZGF0YS9saXN0Lm1ldGFkYXRhLm1vZGVsJztcbmltcG9ydCB7RmllbGREZWZpbml0aW9uTWFwfSBmcm9tICcuLi8uLi9jb21tb24vcmVjb3JkL2ZpZWxkLm1vZGVsJztcbmltcG9ydCB7ZGVlcENsb25lfSBmcm9tICcuLi8uLi9jb21tb24vdXRpbHMvb2JqZWN0LXV0aWxzJztcbmltcG9ydCB7UmVjZW50bHlWaWV3ZWR9IGZyb20gJy4uLy4uL2NvbW1vbi9yZWNvcmQvcmVjZW50bHktdmlld2VkLm1vZGVsJztcbmltcG9ydCB7RmF2b3JpdGV9IGZyb20gJy4uLy4uL2NvbW1vbi9yZWNvcmQvZmF2b3JpdGVzLm1vZGVsJztcbmltcG9ydCB7RmllbGRBY3Rpb25zLCBQYW5lbCwgVGFiRGVmaW5pdGlvbnN9IGZyb20gJy4uLy4uL2NvbW1vbi9tZXRhZGF0YS9tZXRhZGF0YS5tb2RlbCc7XG5pbXBvcnQge1N1YlBhbmVsTWV0YX0gZnJvbSAnLi4vLi4vY29tbW9uL21ldGFkYXRhL3N1YnBhbmVsLm1ldGFkYXRhLm1vZGVsJztcbmltcG9ydCB7V2lkZ2V0TWV0YWRhdGF9IGZyb20gJy4uLy4uL2NvbW1vbi9tZXRhZGF0YS93aWRnZXQubWV0YWRhdGEnO1xuaW1wb3J0IHtTdGF0ZVN0b3JlfSBmcm9tICcuLi9zdGF0ZSc7XG5pbXBvcnQge0FwcFN0YXRlU3RvcmV9IGZyb20gJy4uL2FwcC1zdGF0ZS9hcHAtc3RhdGUuc3RvcmUnO1xuaW1wb3J0IHtPYmplY3RNYXB9IGZyb20gXCIuLi8uLi9jb21tb24vdHlwZXMvb2JqZWN0LW1hcFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN1bW1hcnlUZW1wbGF0ZXMge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZWNvcmRWaWV3TWV0YWRhdGEge1xuICAgIHRvcFdpZGdldD86IFdpZGdldE1ldGFkYXRhO1xuICAgIHNpZGViYXJXaWRnZXRzPzogV2lkZ2V0TWV0YWRhdGFbXTtcbiAgICBib3R0b21XaWRnZXRzPzogV2lkZ2V0TWV0YWRhdGFbXTtcbiAgICBhY3Rpb25zPzogQWN0aW9uW107XG4gICAgdGVtcGxhdGVNZXRhPzogUmVjb3JkVGVtcGxhdGVNZXRhZGF0YTtcbiAgICBwYW5lbHM/OiBQYW5lbFtdO1xuICAgIHN1bW1hcnlUZW1wbGF0ZXM/OiBTdW1tYXJ5VGVtcGxhdGVzO1xuICAgIHZhcmRlZnM/OiBGaWVsZERlZmluaXRpb25NYXA7XG4gICAgbWV0YWRhdGE/OiBPYmplY3RNYXA7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVjb3JkVGVtcGxhdGVNZXRhZGF0YSB7XG4gICAgbWF4Q29sdW1uczogbnVtYmVyO1xuICAgIHVzZVRhYnM6IGJvb2xlYW47XG4gICAgdGFiRGVmczogVGFiRGVmaW5pdGlvbnM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWV0YWRhdGEge1xuICAgIG1vZHVsZT86IHN0cmluZztcbiAgICBkZXRhaWxWaWV3PzogYW55O1xuICAgIGVkaXRWaWV3PzogYW55O1xuICAgIGxpc3RWaWV3PzogTGlzdFZpZXdNZXRhO1xuICAgIHNlYXJjaD86IFNlYXJjaE1ldGE7XG4gICAgcmVjb3JkVmlldz86IFJlY29yZFZpZXdNZXRhZGF0YTtcbiAgICBzdWJQYW5lbD86IFN1YlBhbmVsTWV0YTtcbiAgICBtYXNzVXBkYXRlPzogTWFzc1VwZGF0ZU1ldGE7XG4gICAgcmVjZW50bHlWaWV3ZWQ/OiBSZWNlbnRseVZpZXdlZFtdO1xuICAgIGZhdm9yaXRlcz86IEZhdm9yaXRlW107XG4gICAgZmllbGRBY3Rpb25zPzogRmllbGRBY3Rpb25zO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1ldGFkYXRhTWFwIHtcbiAgICBba2V5OiBzdHJpbmddOiBNZXRhZGF0YTtcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlOiBNZXRhZGF0YSA9IHtcbiAgICBtb2R1bGU6ICcnLFxuICAgIGRldGFpbFZpZXc6IHt9LFxuICAgIGVkaXRWaWV3OiB7fSxcbiAgICBsaXN0Vmlldzoge30gYXMgTGlzdFZpZXdNZXRhLFxuICAgIHNlYXJjaDoge30gYXMgU2VhcmNoTWV0YSxcbiAgICByZWNvcmRWaWV3OiB7fSBhcyBSZWNvcmRWaWV3TWV0YWRhdGEsXG4gICAgc3ViUGFuZWw6IHt9IGFzIFN1YlBhbmVsTWV0YSxcbiAgICBtYXNzVXBkYXRlOiB7fSBhcyBNYXNzVXBkYXRlTWV0YSxcbiAgICByZWNlbnRseVZpZXdlZDogW10sXG4gICAgZmF2b3JpdGVzOiBbXSxcbiAgICBmaWVsZEFjdGlvbnM6IHt9IGFzIEZpZWxkQWN0aW9uc1xufTtcblxuY29uc3QgaW5pdGlhbE1vZHVsZU1ldGFkYXRhU3RhdGU6IE1ldGFkYXRhTWFwID0ge307XG5cblxubGV0IGludGVybmFsU3RhdGU6IE1ldGFkYXRhID0gZGVlcENsb25lKGluaXRpYWxTdGF0ZSk7XG5sZXQgYWxsTW9kdWxlc1N0YXRlOiBNZXRhZGF0YU1hcCA9IGRlZXBDbG9uZShpbml0aWFsTW9kdWxlTWV0YWRhdGFTdGF0ZSk7XG5cblxuZXhwb3J0IGludGVyZmFjZSBNZXRhZGF0YUNhY2hlIHtcbiAgICBba2V5OiBzdHJpbmddOiBPYnNlcnZhYmxlPE1ldGFkYXRhPjtcbn1cblxuY29uc3QgaW5pdGlhbENhY2hlOiBNZXRhZGF0YUNhY2hlID0ge30gYXMgTWV0YWRhdGFDYWNoZTtcblxubGV0IGNhY2hlOiBNZXRhZGF0YUNhY2hlID0gZGVlcENsb25lKGluaXRpYWxDYWNoZSk7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE1ldGFkYXRhU3RvcmUgaW1wbGVtZW50cyBTdGF0ZVN0b3JlIHtcblxuICAgIC8qKlxuICAgICAqIFB1YmxpYyBsb25nLWxpdmVkIG9ic2VydmFibGUgc3RyZWFtc1xuICAgICAqL1xuICAgIGxpc3RWaWV3Q29sdW1ucyQ6IE9ic2VydmFibGU8Q29sdW1uRGVmaW5pdGlvbltdPjtcbiAgICBsaXN0Vmlld0xpbmVBY3Rpb25zJDogT2JzZXJ2YWJsZTxBY3Rpb25bXT47XG4gICAgbGlzdFZpZXdUYWJsZUFjdGlvbnMkOiBPYnNlcnZhYmxlPEFjdGlvbltdPjtcbiAgICBsaXN0TWV0YWRhdGEkOiBPYnNlcnZhYmxlPExpc3RWaWV3TWV0YT47XG4gICAgc2VhcmNoTWV0YWRhdGEkOiBPYnNlcnZhYmxlPFNlYXJjaE1ldGE+O1xuICAgIHJlY29yZFZpZXdNZXRhZGF0YSQ6IE9ic2VydmFibGU8UmVjb3JkVmlld01ldGFkYXRhPjtcbiAgICBmaWVsZEFjdGlvbnMkOiBPYnNlcnZhYmxlPGFueT47XG4gICAgbWV0YWRhdGEkOiBPYnNlcnZhYmxlPE1ldGFkYXRhPjtcbiAgICBhbGxNb2R1bGVNZXRhZGF0YSQ6IE9ic2VydmFibGU8TWV0YWRhdGFNYXA+O1xuICAgIHN1YlBhbmVsTWV0YWRhdGEkOiBPYnNlcnZhYmxlPFN1YlBhbmVsTWV0YT47XG5cbiAgICBwdWJsaWMgdHlwZUtleXMgPSB7XG4gICAgICAgIGxpc3RWaWV3OiAnbGlzdFZpZXcnLFxuICAgICAgICBzZWFyY2g6ICdzZWFyY2gnLFxuICAgICAgICByZWNvcmRWaWV3OiAncmVjb3JkVmlldycsXG4gICAgICAgIHN1YlBhbmVsOiAnc3ViUGFuZWwnLFxuICAgICAgICBtYXNzVXBkYXRlOiAnbWFzc1VwZGF0ZScsXG4gICAgICAgIHJlY2VudGx5Vmlld2VkOiAncmVjZW50bHlWaWV3ZWQnLFxuICAgICAgICBmYXZvcml0ZXM6ICdmYXZvcml0ZXMnXG4gICAgfTtcblxuICAgIHByb3RlY3RlZCBzdG9yZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TWV0YWRhdGE+KGludGVybmFsU3RhdGUpO1xuICAgIHByb3RlY3RlZCBzdGF0ZSQgPSB0aGlzLnN0b3JlLmFzT2JzZXJ2YWJsZSgpO1xuICAgIHByb3RlY3RlZCBhbGxNb2R1bGVTdG9yZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TWV0YWRhdGFNYXA+KGFsbE1vZHVsZXNTdGF0ZSk7XG4gICAgcHJvdGVjdGVkIGFsbE1vZHVsZXNTdGF0ZSQgPSB0aGlzLmFsbE1vZHVsZVN0b3JlLmFzT2JzZXJ2YWJsZSgpO1xuICAgIHByb3RlY3RlZCByZXNvdXJjZU5hbWUgPSAnbW9kdWxlTWV0YWRhdGEnO1xuICAgIHByb3RlY3RlZCBmaWVsZHNNZXRhZGF0YSA9IHtcbiAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICAnaWQnLFxuICAgICAgICAgICAgJ19pZCcsXG4gICAgICAgIF1cbiAgICB9O1xuICAgIHByb3RlY3RlZCB0eXBlcyA9IFtcbiAgICAgICAgJ2xpc3RWaWV3JyxcbiAgICAgICAgJ3NlYXJjaCcsXG4gICAgICAgICdyZWNvcmRWaWV3JyxcbiAgICAgICAgJ3N1YlBhbmVsJyxcbiAgICAgICAgJ21hc3NVcGRhdGUnLFxuICAgICAgICAncmVjZW50bHlWaWV3ZWQnLFxuICAgICAgICAnZmF2b3JpdGVzJ1xuICAgIF07XG4gICAgcHJvdGVjdGVkIGJhc2VUeXBlcyA9IFtcbiAgICAgICAgJ2xpc3RWaWV3JyxcbiAgICAgICAgJ3NlYXJjaCcsXG4gICAgICAgICdyZWNvcmRWaWV3JyxcbiAgICAgICAgJ3N1YlBhbmVsJyxcbiAgICAgICAgJ2Zhdm9yaXRlcydcbiAgICBdO1xuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIHJlY29yZEdRTDogRW50aXR5R1FMLCBwcm90ZWN0ZWQgYXBwU3RhdGU6IEFwcFN0YXRlU3RvcmUpIHtcbiAgICAgICAgdGhpcy5saXN0Vmlld0NvbHVtbnMkID0gdGhpcy5zdGF0ZSQucGlwZShtYXAoc3RhdGUgPT4gc3RhdGUubGlzdFZpZXcuZmllbGRzKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gICAgICAgIHRoaXMubGlzdFZpZXdMaW5lQWN0aW9ucyQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5saXN0Vmlldy5saW5lQWN0aW9ucyksIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICAgICAgICB0aGlzLmxpc3RWaWV3VGFibGVBY3Rpb25zJCA9IHRoaXMuc3RhdGUkLnBpcGUobWFwKHN0YXRlID0+IHN0YXRlLmxpc3RWaWV3LnRhYmxlQWN0aW9ucyksIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICAgICAgICB0aGlzLmxpc3RNZXRhZGF0YSQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5saXN0VmlldyksIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICAgICAgICB0aGlzLnNlYXJjaE1ldGFkYXRhJCA9IHRoaXMuc3RhdGUkLnBpcGUobWFwKHN0YXRlID0+IHN0YXRlLnNlYXJjaCksIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICAgICAgICB0aGlzLnJlY29yZFZpZXdNZXRhZGF0YSQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5yZWNvcmRWaWV3KSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gICAgICAgIHRoaXMuZmllbGRBY3Rpb25zJCA9IHRoaXMuc3RhdGUkLnBpcGUobWFwKHN0YXRlID0+IHN0YXRlLmZpZWxkQWN0aW9ucyksIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICAgICAgICB0aGlzLnN1YlBhbmVsTWV0YWRhdGEkID0gdGhpcy5zdGF0ZSQucGlwZShtYXAoc3RhdGUgPT4gc3RhdGUuc3ViUGFuZWwpLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgICAgICAgdGhpcy5tZXRhZGF0YSQgPSB0aGlzLnN0YXRlJDtcbiAgICAgICAgdGhpcy5hbGxNb2R1bGVNZXRhZGF0YSQgPSB0aGlzLmFsbE1vZHVsZXNTdGF0ZSQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgc3RhdGVcbiAgICAgKi9cbiAgICBwdWJsaWMgY2xlYXIoKTogdm9pZCB7XG4gICAgICAgIGNhY2hlID0gZGVlcENsb25lKGluaXRpYWxDYWNoZSk7XG4gICAgICAgIGFsbE1vZHVsZXNTdGF0ZSA9IGRlZXBDbG9uZShpbml0aWFsTW9kdWxlTWV0YWRhdGFTdGF0ZSk7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoJycsIGRlZXBDbG9uZShpbml0aWFsU3RhdGUpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYXJBdXRoQmFzZWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYWxsIG1ldGFkYXRhIHR5cGVzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nW119IG1ldGFkYXRhIHR5cGVzXG4gICAgICovXG4gICAgcHVibGljIGdldE1ldGFkYXRhVHlwZXMoKTogc3RyaW5nW10ge1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlcztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TW9kdWxlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBpbnRlcm5hbFN0YXRlLm1vZHVsZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0KCk6IE1ldGFkYXRhIHtcbiAgICAgICAgcmV0dXJuIGludGVybmFsU3RhdGU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldE1vZHVsZU1ldGEobW9kdWxlOiBzdHJpbmcpOiBNZXRhZGF0YSB7XG4gICAgICAgIGNvbnN0IG1ldGEgPSBhbGxNb2R1bGVzU3RhdGVbbW9kdWxlXSA/PyB7fTtcbiAgICAgICAgcmV0dXJuIHsuLi5tZXRhfTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0TW9kdWxlTWV0YWRhdGEobW9kdWxlOiBzdHJpbmcsIG1ldGFkYXRhOiBNZXRhZGF0YSk6IHZvaWQge1xuICAgICAgICBjYWNoZVttb2R1bGVdID0gb2YobWV0YWRhdGEpLnBpcGUoc2hhcmVSZXBsYXkoMSkpO1xuICAgICAgICB0aGlzLnVwZGF0ZUFsbE1vZHVsZXNTdGF0ZShtb2R1bGUsIG1ldGFkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsIExpc3RWaWV3TWV0YSBsb2FkIGlmIG5vdCBjYWNoZWQgYW5kIHVwZGF0ZSBzdGF0ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtb2R1bGVJRCB0byBmZXRjaFxuICAgICAqIEBwYXJhbSB7c3RyaW5nW119IHR5cGVzIHRvIGZldGNoXG4gICAgICogQHBhcmFtIHVzZUNhY2hlXG4gICAgICogQHJldHVybnMgYW55IGRhdGFcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVsb2FkTW9kdWxlTWV0YWRhdGEobW9kdWxlSUQ6IHN0cmluZywgdHlwZXM6IHN0cmluZ1tdLCB1c2VDYWNoZTogYm9vbGVhbiA9IHRydWUpOiBhbnkge1xuXG4gICAgICAgIGlmICghdHlwZXMpIHtcbiAgICAgICAgICAgIHR5cGVzID0gdGhpcy5nZXRNZXRhZGF0YVR5cGVzKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5nZXRNZXRhZGF0YShtb2R1bGVJRCwgdHlwZXMsIHVzZUNhY2hlKS5waXBlKFxuICAgICAgICAgICAgdGFwKChtZXRhZGF0YTogTWV0YWRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUFsbE1vZHVsZXNTdGF0ZShtb2R1bGVJRCwgbWV0YWRhdGEpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsIExpc3RWaWV3TWV0YSBsb2FkIGlmIG5vdCBjYWNoZWQgYW5kIHVwZGF0ZSBzdGF0ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtb2R1bGVJRCB0byBmZXRjaFxuICAgICAqIEBwYXJhbSB7c3RyaW5nW119IHR5cGVzIHRvIGZldGNoXG4gICAgICogQHBhcmFtIHVzZUNhY2hlXG4gICAgICogQHJldHVybnMgYW55IGRhdGFcbiAgICAgKi9cbiAgICBwdWJsaWMgbG9hZChtb2R1bGVJRDogc3RyaW5nLCB0eXBlczogc3RyaW5nW10sIHVzZUNhY2hlOiBib29sZWFuID0gdHJ1ZSk6IE9ic2VydmFibGU8YW55PiB7XG5cbiAgICAgICAgaWYgKCF0eXBlcykge1xuICAgICAgICAgICAgdHlwZXMgPSB0aGlzLmdldE1ldGFkYXRhVHlwZXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmdldE1ldGFkYXRhKG1vZHVsZUlELCB0eXBlcywgdXNlQ2FjaGUpLnBpcGUoXG4gICAgICAgICAgICB0YXAoKG1ldGFkYXRhOiBNZXRhZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUobW9kdWxlSUQsIG1ldGFkYXRhKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgbG9hZGVkXG4gICAgICovXG4gICAgcHVibGljIGlzQ2FjaGVkKG1vZHVsZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAoY2FjaGVbbW9kdWxlXSA/PyBudWxsKSAhPT0gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgZW1wdHkgTWV0YWRhdGFcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0RW1wdHkoKTogTWV0YWRhdGEge1xuICAgICAgICByZXR1cm4gZGVlcENsb25lKGluaXRpYWxTdGF0ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHByZS1sb2FkZWQgbmF2aWdhdGlvbiBhbmQgY2FjaGVcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0KG1vZHVsZTogc3RyaW5nLCBtZXRhZGF0YTogTWV0YWRhdGEpOiB2b2lkIHtcbiAgICAgICAgY2FjaGVbbW9kdWxlXSA9IG9mKG1ldGFkYXRhKS5waXBlKHNoYXJlUmVwbGF5KDEpKTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShtb2R1bGUsIG1ldGFkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgTGlzdFZpZXdNZXRhIGNhY2hlZCBPYnNlcnZhYmxlIG9yIGNhbGwgdGhlIGJhY2tlbmRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtb2R1bGUgdG8gZmV0Y2hcbiAgICAgKiBAcGFyYW0ge3N0cmluZ1tdfSB0eXBlcyB0byByZXRyaWV2ZVxuICAgICAqIEBwYXJhbSB1c2VDYWNoZVxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IE9ic2VydmFibGU8YW55PlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRNZXRhZGF0YShtb2R1bGU6IHN0cmluZywgdHlwZXM6IHN0cmluZ1tdID0gbnVsbCwgdXNlQ2FjaGU6IGJvb2xlYW4gPSB0cnVlKTogT2JzZXJ2YWJsZTxNZXRhZGF0YT4ge1xuXG4gICAgICAgIGlmIChjYWNoZVttb2R1bGVdID09IG51bGwgfHwgdXNlQ2FjaGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBjYWNoZVttb2R1bGVdID0gdGhpcy5mZXRjaE1ldGFkYXRhKG1vZHVsZSwgdHlwZXMpLnBpcGUoXG4gICAgICAgICAgICAgICAgc2hhcmVSZXBsYXkoMSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2FjaGVbbW9kdWxlXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBBUElcbiAgICAgKi9cblxuICAgIHB1YmxpYyBtYXBNZXRhZGF0YShtb2R1bGU6IHN0cmluZywgZGF0YTogYW55KTogTWV0YWRhdGEge1xuICAgICAgICBjb25zdCBtb2R1bGVNZXRhZGF0YTogTWV0YWRhdGEgPSBhbGxNb2R1bGVzU3RhdGVbbW9kdWxlXSA/PyB7fTtcbiAgICAgICAgY29uc3QgbWV0YWRhdGE6IE1ldGFkYXRhID0gey4uLm1vZHVsZU1ldGFkYXRhfTtcbiAgICAgICAgdGhpcy5wYXJzZUxpc3RWaWV3TWV0YWRhdGEoZGF0YSwgbWV0YWRhdGEpO1xuICAgICAgICB0aGlzLnBhcnNlU2VhcmNoTWV0YWRhdGEoZGF0YSwgbWV0YWRhdGEpO1xuICAgICAgICB0aGlzLnBhcnNlUmVjb3JkVmlld01ldGFkYXRhKGRhdGEsIG1ldGFkYXRhKTtcbiAgICAgICAgdGhpcy5wYXJzZVN1YlBhbmVsTWV0YWRhdGEoZGF0YSwgbWV0YWRhdGEpO1xuICAgICAgICB0aGlzLnBhcnNlTWFzc1VwZGF0ZU1ldGFkYXRhKGRhdGEsIG1ldGFkYXRhKTtcbiAgICAgICAgdGhpcy5wYXJzZVJlY2VudGx5Vmlld2VkTWV0YWRhdGEoZGF0YSwgbWV0YWRhdGEpO1xuICAgICAgICB0aGlzLnBhcnNlRmF2b3JpdGVzTWV0YWRhdGEoZGF0YSwgbWV0YWRhdGEpO1xuICAgICAgICB0aGlzLnBhcnNlRmllbGRWaWV3TWV0YWRhKGRhdGEsIG1ldGFkYXRhKTtcbiAgICAgICAgcmV0dXJuIG1ldGFkYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgc3RhdGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtb2R1bGVcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gc3RhdGUgdG8gc2V0XG4gICAgICovXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVN0YXRlKG1vZHVsZTogc3RyaW5nLCBzdGF0ZTogTWV0YWRhdGEpOiB2b2lkIHtcblxuICAgICAgICB0aGlzLnVwZGF0ZUFsbE1vZHVsZXNTdGF0ZShtb2R1bGUsIHN0YXRlKTtcblxuICAgICAgICB0aGlzLnN0b3JlLm5leHQoaW50ZXJuYWxTdGF0ZSA9IHsuLi5zdGF0ZSwgbW9kdWxlfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBzdGF0ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1vZHVsZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzdGF0ZSB0byBzZXRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgdXBkYXRlQWxsTW9kdWxlc1N0YXRlKG1vZHVsZTogc3RyaW5nLCBzdGF0ZTogTWV0YWRhdGEpOiB2b2lkIHtcblxuICAgICAgICBpZiAobW9kdWxlICE9PSAnJykge1xuICAgICAgICAgICAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgLi4uYWxsTW9kdWxlc1N0YXRlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbmV3U3RhdGVbbW9kdWxlXSA9IHsuLi5zdGF0ZX07XG5cbiAgICAgICAgICAgIHRoaXMuYWxsTW9kdWxlU3RvcmUubmV4dChhbGxNb2R1bGVzU3RhdGUgPSBuZXdTdGF0ZSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZldGNoIHRoZSBNZXRhZGF0YSBmcm9tIHRoZSBiYWNrZW5kXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kdWxlIHRvIGZldGNoXG4gICAgICogQHBhcmFtIHtzdHJpbmdbXX0gdHlwZXMgdG8gcmV0cmlldmVcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBPYnNlcnZhYmxlPHt9PlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBmZXRjaE1ldGFkYXRhKG1vZHVsZTogc3RyaW5nLCB0eXBlczogc3RyaW5nW10pOiBPYnNlcnZhYmxlPE1ldGFkYXRhPiB7XG5cbiAgICAgICAgY29uc3QgZmllbGRzVG9SZXRyaWV2ZSA9IHtcbiAgICAgICAgICAgIGZpZWxkczogW1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuZmllbGRzTWV0YWRhdGEuZmllbGRzLFxuICAgICAgICAgICAgICAgIC4uLih0eXBlcyA/PyB0aGlzLmJhc2VUeXBlcylcbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gdGhpcy5yZWNvcmRHUUwuZmV0Y2godGhpcy5yZXNvdXJjZU5hbWUsIGAvYXBpL21vZHVsZS1tZXRhZGF0YS8ke21vZHVsZX1gLCBmaWVsZHNUb1JldHJpZXZlKVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgbWFwKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFwTWV0YWRhdGEobW9kdWxlLCBkYXRhLm1vZHVsZU1ldGFkYXRhKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcGFyc2VMaXN0Vmlld01ldGFkYXRhKGRhdGEsIG1ldGFkYXRhOiBNZXRhZGF0YSk6IHZvaWQge1xuXG4gICAgICAgIGlmICghZGF0YSB8fCAhZGF0YS5saXN0Vmlldykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbGlzdFZpZXdNZXRhOiBMaXN0Vmlld01ldGEgPSB7XG4gICAgICAgICAgICBmaWVsZHM6IFtdLFxuICAgICAgICAgICAgYnVsa0FjdGlvbnM6IHt9LFxuICAgICAgICAgICAgbGluZUFjdGlvbnM6IFtdLFxuICAgICAgICAgICAgdGFibGVBY3Rpb25zOiBbXSxcbiAgICAgICAgICAgIGNoYXJ0VHlwZXM6IHt9LFxuICAgICAgICAgICAgZmlsdGVyczogW11cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZGF0YS5saXN0Vmlldy5jb2x1bW5zKSB7XG4gICAgICAgICAgICBkYXRhLmxpc3RWaWV3LmNvbHVtbnMuZm9yRWFjaCgoZmllbGQ6IENvbHVtbkRlZmluaXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICBsaXN0Vmlld01ldGEuZmllbGRzLnB1c2goXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZW50cmllcyA9IHtcbiAgICAgICAgICAgIGJ1bGtBY3Rpb25zOiAnYnVsa0FjdGlvbnMnLFxuICAgICAgICAgICAgbGluZUFjdGlvbnM6ICdsaW5lQWN0aW9ucycsXG4gICAgICAgICAgICB0YWJsZUFjdGlvbnM6ICd0YWJsZUFjdGlvbnMnLFxuICAgICAgICAgICAgc2lkZWJhcldpZGdldHM6ICdzaWRlYmFyV2lkZ2V0cycsXG4gICAgICAgICAgICBhdmFpbGFibGVGaWx0ZXJzOiAnZmlsdGVycycsXG4gICAgICAgICAgICBwYWdpbmF0aW9uVHlwZTogJ3BhZ2luYXRpb25UeXBlJ1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuYWRkRGVmaW5lZE1ldGEobGlzdFZpZXdNZXRhLCBkYXRhLmxpc3RWaWV3LCBlbnRyaWVzKTtcblxuICAgICAgICBtZXRhZGF0YS5saXN0VmlldyA9IGxpc3RWaWV3TWV0YTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcGFyc2VGaWVsZFZpZXdNZXRhZGEoZGF0YSwgbWV0YWRhdGE6IE1ldGFkYXRhKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKCFkYXRhIHx8ICFkYXRhLnJlY29yZFZpZXcgfHwgIWRhdGEucmVjb3JkVmlldy5wYW5lbHMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZpZWxkQWN0aW9uczogYW55ID0ge1xuICAgICAgICAgICAgcmVjb3JkVmlldzoge31cbiAgICAgICAgfTtcblxuICAgICAgICBkYXRhLnJlY29yZFZpZXcucGFuZWxzLmZvckVhY2gocGFuZWwgPT4ge1xuICAgICAgICAgICAgaWYgKHBhbmVsLnJvd3MpIHtcbiAgICAgICAgICAgICAgICBwYW5lbC5yb3dzLmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJvdy5jb2xzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3cuY29scy5mb3JFYWNoKGNvbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbC5maWVsZEFjdGlvbnMgJiYgY29sLmZpZWxkQWN0aW9ucy5hY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC52YWx1ZXMoY29sLmZpZWxkQWN0aW9ucy5hY3Rpb25zKS5mb3JFYWNoKGFjdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25bJ2ZpZWxkTmFtZSddID0gY29sLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2aWV3RmllbGRBY3Rpb25zID0gZmllbGRBY3Rpb25zWydyZWNvcmRWaWV3J11bY29sLm5hbWVdID8/IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0ZpZWxkQWN0aW9ucy5wdXNoKGFjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZEFjdGlvbnNbJ3JlY29yZFZpZXcnXVtjb2wubmFtZV0gPSB2aWV3RmllbGRBY3Rpb25zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgbWV0YWRhdGEuZmllbGRBY3Rpb25zID0gZmllbGRBY3Rpb25zO1xuXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHBhcnNlU2VhcmNoTWV0YWRhdGEoZGF0YSwgbWV0YWRhdGE6IE1ldGFkYXRhKTogdm9pZCB7XG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEuc2VhcmNoKSB7XG4gICAgICAgICAgICBtZXRhZGF0YS5zZWFyY2ggPSBkYXRhLnNlYXJjaDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBwYXJzZVN1YlBhbmVsTWV0YWRhdGEoZGF0YSwgbWV0YWRhdGE6IE1ldGFkYXRhKTogdm9pZCB7XG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEuc3ViUGFuZWwpIHtcbiAgICAgICAgICAgIG1ldGFkYXRhLnN1YlBhbmVsID0gZGF0YS5zdWJQYW5lbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBwYXJzZU1hc3NVcGRhdGVNZXRhZGF0YShkYXRhLCBtZXRhZGF0YTogTWV0YWRhdGEpOiB2b2lkIHtcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5tYXNzVXBkYXRlKSB7XG4gICAgICAgICAgICBtZXRhZGF0YS5tYXNzVXBkYXRlID0gZGF0YS5tYXNzVXBkYXRlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHBhcnNlUmVjb3JkVmlld01ldGFkYXRhKGRhdGEsIG1ldGFkYXRhOiBNZXRhZGF0YSk6IHZvaWQge1xuICAgICAgICBpZiAoIWRhdGEgfHwgIWRhdGEucmVjb3JkVmlldykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVjb3JkVmlld01ldGE6IFJlY29yZFZpZXdNZXRhZGF0YSA9IHtcbiAgICAgICAgICAgIGFjdGlvbnM6IFtdIGFzIEFjdGlvbltdLFxuICAgICAgICAgICAgdGVtcGxhdGVNZXRhOiB7fSBhcyBSZWNvcmRUZW1wbGF0ZU1ldGFkYXRhLFxuICAgICAgICAgICAgcGFuZWxzOiBbXVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHJlY2VpdmVkTWV0YSA9IGRhdGEucmVjb3JkVmlldztcbiAgICAgICAgY29uc3QgZW50cmllcyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlTWV0YTogJ3RlbXBsYXRlTWV0YScsXG4gICAgICAgICAgICBhY3Rpb25zOiAnYWN0aW9ucycsXG4gICAgICAgICAgICBwYW5lbHM6ICdwYW5lbHMnLFxuICAgICAgICAgICAgdG9wV2lkZ2V0OiAndG9wV2lkZ2V0JyxcbiAgICAgICAgICAgIHNpZGViYXJXaWRnZXRzOiAnc2lkZWJhcldpZGdldHMnLFxuICAgICAgICAgICAgYm90dG9tV2lkZ2V0czogJ2JvdHRvbVdpZGdldHMnLFxuICAgICAgICAgICAgc3VtbWFyeVRlbXBsYXRlczogJ3N1bW1hcnlUZW1wbGF0ZXMnLFxuICAgICAgICAgICAgdmFyZGVmczogJ3ZhcmRlZnMnLFxuICAgICAgICAgICAgbWV0YWRhdGE6ICdtZXRhZGF0YSdcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmFkZERlZmluZWRNZXRhKHJlY29yZFZpZXdNZXRhLCByZWNlaXZlZE1ldGEsIGVudHJpZXMpO1xuXG4gICAgICAgIG1ldGFkYXRhLnJlY29yZFZpZXcgPSByZWNvcmRWaWV3TWV0YTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcGFyc2VSZWNlbnRseVZpZXdlZE1ldGFkYXRhKGRhdGEsIG1ldGFkYXRhOiBNZXRhZGF0YSk6IHZvaWQge1xuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLnJlY2VudGx5Vmlld2VkKSB7XG4gICAgICAgICAgICBtZXRhZGF0YS5yZWNlbnRseVZpZXdlZCA9IGRhdGEucmVjZW50bHlWaWV3ZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcGFyc2VGYXZvcml0ZXNNZXRhZGF0YShkYXRhLCBtZXRhZGF0YTogTWV0YWRhdGEpOiB2b2lkIHtcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5mYXZvcml0ZXMpIHtcbiAgICAgICAgICAgIG1ldGFkYXRhLmZhdm9yaXRlcyA9IGRhdGEuZmF2b3JpdGVzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFkZERlZmluZWRNZXRhKFxuICAgICAgICBtZXRhZGF0YTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSxcbiAgICAgICAgcmVjZWl2ZWQ6IHsgW2tleTogc3RyaW5nXTogYW55IH0sXG4gICAgICAgIGtleU1hcDogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfVxuICAgICk6IHZvaWQge1xuICAgICAgICBPYmplY3Qua2V5cyhrZXlNYXApLmZvckVhY2goZGF0YUtleSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhZGF0YUtleSA9IGtleU1hcFtkYXRhS2V5XTtcbiAgICAgICAgICAgIGlmIChyZWNlaXZlZFtkYXRhS2V5XSkge1xuICAgICAgICAgICAgICAgIG1ldGFkYXRhW21ldGFkYXRhS2V5XSA9IHJlY2VpdmVkW2RhdGFLZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=