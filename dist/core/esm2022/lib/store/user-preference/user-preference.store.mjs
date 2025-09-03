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
import { debounceTime, distinctUntilChanged, map, shareReplay, take, tap } from 'rxjs/operators';
import { CollectionGQL } from '../../services/api/graphql-api/api.collection.get';
import { deepClone } from '../../common/utils/object-utils';
import { SystemConfigStore } from '../system-config/system-config.store';
import { ProcessService } from '../../services/process/process.service';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';
import * as i0 from "@angular/core";
import * as i1 from "../../services/api/graphql-api/api.collection.get";
import * as i2 from "../system-config/system-config.store";
import * as i3 from "../../services/process/process.service";
import * as i4 from "../../services/local-storage/local-storage.service";
const initialState = {
    userPreferences: {},
    loading: false
};
let internalState = deepClone(initialState);
let cache$ = null;
export class UserPreferenceStore {
    constructor(collectionGQL, config, processService, localStorage) {
        this.collectionGQL = collectionGQL;
        this.config = config;
        this.processService = processService;
        this.localStorage = localStorage;
        this.store = new BehaviorSubject(internalState);
        this.state$ = this.store.asObservable();
        this.saveBufferStore = new BehaviorSubject(false);
        this.subs = [];
        this.resourceName = 'userPreferences';
        this.fieldsMetadata = {
            fields: [
                'id',
                '_id',
                'value',
                'items'
            ]
        };
        /**
         * Public long-lived observable streams
         */
        this.userPreferences$ = this.state$.pipe(map(state => state.userPreferences), distinctUntilChanged());
        this.loading$ = this.state$.pipe(map(state => state.loading));
        const uiSettings = config.getConfigValue('ui') ?? {};
        const delay = uiSettings.user_preferences_save_delay ?? 2500;
        this.saveBuffer$ = this.saveBufferStore.asObservable().pipe(debounceTime(delay ?? 2500));
        this.subs.push(this.saveBuffer$.subscribe((value) => {
            if (!value) {
                return;
            }
            this.saveUiPreferences();
        }));
    }
    /**
     * Public Api
     */
    /**
     * Clear state
     */
    clear() {
        cache$ = null;
        this.updateState(deepClone(initialState));
        this.subs.forEach(sub => sub.unsubscribe());
    }
    clearAuthBased() {
        this.clear();
    }
    /**
     * Get user preferences value by key
     *
     * @param {string} key to retrieve
     * @returns any users preference
     */
    getUserPreference(key) {
        if (!internalState.userPreferences || !internalState.userPreferences[key]) {
            return null;
        }
        return internalState.userPreferences[key];
    }
    /**
     * Get ui user preferences value by key
     *
     * @param module
     * @param {string} key to retrieve
     * @returns any users preference
     */
    getUi(module, key) {
        const storageKey = module + '-' + key;
        const value = this.storageLoad(module, storageKey);
        if (value != null) {
            return value;
        }
        const ui = internalState?.userPreferences?.ui ?? {};
        return ui[storageKey] ?? null;
    }
    /**
     * Set user preferences value by key
     *
     * @param {string} module name
     * @param {string} key to retrieve
     * @param value
     * @returns any users preference
     */
    setUi(module, key, value) {
        const storageKey = module + '-' + key;
        this.storageSave(module, storageKey, value);
        const ui = internalState?.userPreferences?.ui ?? {};
        ui[storageKey] = value;
        internalState.userPreferences.ui = ui;
        this.saveBufferStore.next(true);
    }
    saveUiPreferences() {
        const processType = 'save-ui-user-preferences';
        const options = {
            preferences: internalState.userPreferences.ui
        };
        this.processService.submit(processType, options).pipe(take(1)).subscribe();
    }
    /**
     * Store the data in local storage
     *
     * @param {string} module to store in
     * @param {string} storageKey to store in
     * @param {} data to store
     */
    storageSave(module, storageKey, data) {
        let storage = this.localStorage.get(storageKey);
        if (!storage) {
            storage = {};
        }
        storage[module] = data;
        this.localStorage.set(storageKey, storage);
    }
    /**
     * Store the key in local storage
     *
     * @param {string} module to load from
     * @param {string} storageKey from load from
     */
    storageLoad(module, storageKey) {
        const storage = this.localStorage.get(storageKey);
        if (!storage || !storage[module]) {
            return null;
        }
        return storage[module];
    }
    /**
     * Initial UserPreferences load if not cached and update state.
     * Returns observable to be used in resolver if needed
     *
     * @returns {object} Observable<any>
     */
    load() {
        this.updateState({ ...internalState, loading: true });
        return this.getUserPreferences().pipe(tap(userPreferences => {
            this.updateState({ ...internalState, userPreferences, loading: false });
        }));
    }
    /**
     * Check if loaded
     */
    isCached() {
        return cache$ !== null;
    }
    /**
     * Set pre-loaded preferences and cache
     */
    set(userPreferences) {
        cache$ = of(userPreferences).pipe(shareReplay(1));
        this.updateState({ ...internalState, userPreferences, loading: false });
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
        this.store.next(internalState = state);
    }
    /**
     * Get UserPreferences cached Observable or call the backend
     *
     * @returns {object} Observable<any>
     */
    getUserPreferences() {
        if (cache$ == null) {
            cache$ = this.fetch().pipe(shareReplay(1));
        }
        return cache$;
    }
    /**
     * Fetch the User Preferences from the backend
     *
     * @returns {object} Observable<any>
     */
    fetch() {
        return this.collectionGQL
            .fetchAll(this.resourceName, this.fieldsMetadata).pipe(map(({ data }) => {
            const userPreferences = {};
            if (data.userPreferences && data.userPreferences.edges) {
                data.userPreferences.edges.forEach((edge) => {
                    if (!edge.node.items) {
                        return;
                    }
                    Object.keys(edge.node.items).forEach(key => {
                        userPreferences[key] = edge.node.items[key];
                    });
                });
            }
            return userPreferences;
        }));
    }
    static { this.ɵfac = function UserPreferenceStore_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || UserPreferenceStore)(i0.ɵɵinject(i1.CollectionGQL), i0.ɵɵinject(i2.SystemConfigStore), i0.ɵɵinject(i3.ProcessService), i0.ɵɵinject(i4.LocalStorageService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: UserPreferenceStore, factory: UserPreferenceStore.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UserPreferenceStore, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.CollectionGQL }, { type: i2.SystemConfigStore }, { type: i3.ProcessService }, { type: i4.LocalStorageService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1wcmVmZXJlbmNlLnN0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3N0b3JlL3VzZXItcHJlZmVyZW5jZS91c2VyLXByZWZlcmVuY2Uuc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGVBQWUsRUFBYyxFQUFFLEVBQWUsTUFBTSxNQUFNLENBQUM7QUFDbkUsT0FBTyxFQUFDLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sbURBQW1ELENBQUM7QUFDaEYsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBRTFELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx3Q0FBd0MsQ0FBQztBQUN0RSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxvREFBb0QsQ0FBQzs7Ozs7O0FBV3ZGLE1BQU0sWUFBWSxHQUFvQjtJQUNsQyxlQUFlLEVBQUUsRUFBRTtJQUNuQixPQUFPLEVBQUUsS0FBSztDQUNqQixDQUFDO0FBRUYsSUFBSSxhQUFhLEdBQW9CLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUU3RCxJQUFJLE1BQU0sR0FBb0IsSUFBSSxDQUFDO0FBS25DLE1BQU0sT0FBTyxtQkFBbUI7SUFzQjVCLFlBQ2MsYUFBNEIsRUFDNUIsTUFBeUIsRUFDekIsY0FBOEIsRUFDOUIsWUFBaUM7UUFIakMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFDekIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQXpCckMsVUFBSyxHQUFHLElBQUksZUFBZSxDQUFrQixhQUFhLENBQUMsQ0FBQztRQUM1RCxXQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNuQyxvQkFBZSxHQUFHLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBRXRELFNBQUksR0FBbUIsRUFBRSxDQUFDO1FBQzFCLGlCQUFZLEdBQUcsaUJBQWlCLENBQUM7UUFDakMsbUJBQWMsR0FBRztZQUN2QixNQUFNLEVBQUU7Z0JBQ0osSUFBSTtnQkFDSixLQUFLO2dCQUNMLE9BQU87Z0JBQ1AsT0FBTzthQUNWO1NBQ0osQ0FBQztRQUVGOztXQUVHO1FBQ0gscUJBQWdCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxFQUFFLG9CQUFvQixFQUFFLENBQUMsQ0FBQztRQUNqRyxhQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFRckQsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckQsTUFBTSxLQUFLLEdBQUcsVUFBVSxDQUFDLDJCQUEyQixJQUFJLElBQUksQ0FBQztRQUM3RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN6RixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ2hELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDVCxPQUFPO1lBQ1gsQ0FBQztZQUNELElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDO0lBRUQ7O09BRUc7SUFFSDs7T0FFRztJQUNJLEtBQUs7UUFDUixNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFTSxjQUFjO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxpQkFBaUIsQ0FBQyxHQUFXO1FBRWhDLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ3hFLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRCxPQUFPLGFBQWEsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLEtBQUssQ0FBQyxNQUFjLEVBQUUsR0FBVztRQUVwQyxNQUFNLFVBQVUsR0FBRyxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUN0QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztRQUVuRCxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUNoQixPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBRUQsTUFBTSxFQUFFLEdBQUcsYUFBYSxFQUFFLGVBQWUsRUFBRSxFQUFFLElBQUksRUFBUyxDQUFDO1FBQzNELE9BQU8sRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQztJQUNsQyxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNJLEtBQUssQ0FBQyxNQUFjLEVBQUUsR0FBVyxFQUFFLEtBQVU7UUFFaEQsTUFBTSxVQUFVLEdBQUcsTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRTVDLE1BQU0sRUFBRSxHQUFHLGFBQWEsRUFBRSxlQUFlLEVBQUUsRUFBRSxJQUFJLEVBQVMsQ0FBQztRQUMzRCxFQUFFLENBQUMsVUFBVSxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBRXZCLGFBQWEsQ0FBQyxlQUFlLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUV0QyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRVMsaUJBQWlCO1FBRXZCLE1BQU0sV0FBVyxHQUFHLDBCQUEwQixDQUFDO1FBRS9DLE1BQU0sT0FBTyxHQUFHO1lBQ1osV0FBVyxFQUFFLGFBQWEsQ0FBQyxlQUFlLENBQUMsRUFBRTtTQUNoRCxDQUFDO1FBR0YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMvRSxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ08sV0FBVyxDQUFDLE1BQWMsRUFBRSxVQUFrQixFQUFFLElBQVM7UUFDL0QsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFaEQsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ1gsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNqQixDQUFDO1FBRUQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQztRQUV2QixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ08sV0FBVyxDQUFDLE1BQWMsRUFBRSxVQUFrQjtRQUNwRCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUVsRCxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7WUFDL0IsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVELE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFHRDs7Ozs7T0FLRztJQUNJLElBQUk7UUFDUCxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUMsR0FBRyxhQUFhLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7UUFFcEQsT0FBTyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxJQUFJLENBQ2pDLEdBQUcsQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUMsR0FBRyxhQUFhLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO1FBQzFFLENBQUMsQ0FBQyxDQUNMLENBQUM7SUFDTixDQUFDO0lBRUQ7O09BRUc7SUFDSSxRQUFRO1FBQ1gsT0FBTyxNQUFNLEtBQUssSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFFRDs7T0FFRztJQUNJLEdBQUcsQ0FBQyxlQUFrQztRQUN6QyxNQUFNLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUMsR0FBRyxhQUFhLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFRDs7T0FFRztJQUVIOzs7O09BSUc7SUFDTyxXQUFXLENBQUMsS0FBc0I7UUFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRDs7OztPQUlHO0lBQ08sa0JBQWtCO1FBRXhCLElBQUksTUFBTSxJQUFJLElBQUksRUFBRSxDQUFDO1lBQ2pCLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUN0QixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQ2pCLENBQUM7UUFDTixDQUFDO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDTyxLQUFLO1FBRVgsT0FBTyxJQUFJLENBQUMsYUFBYTthQUNwQixRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBRTtZQUNsRSxNQUFNLGVBQWUsR0FBc0IsRUFBRSxDQUFDO1lBRTlDLElBQUksSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNyRCxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtvQkFFeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7d0JBQ25CLE9BQU87b0JBQ1gsQ0FBQztvQkFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO3dCQUN2QyxlQUFlLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2hELENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztZQUVELE9BQU8sZUFBZSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDWixDQUFDO29IQXRQUSxtQkFBbUI7dUVBQW5CLG1CQUFtQixXQUFuQixtQkFBbUIsbUJBRmhCLE1BQU07O2lGQUVULG1CQUFtQjtjQUgvQixVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgb2YsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2RlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCwgc2hhcmVSZXBsYXksIHRha2UsIHRhcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtDb2xsZWN0aW9uR1FMfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGkvZ3JhcGhxbC1hcGkvYXBpLmNvbGxlY3Rpb24uZ2V0JztcbmltcG9ydCB7ZGVlcENsb25lfSBmcm9tICcuLi8uLi9jb21tb24vdXRpbHMvb2JqZWN0LXV0aWxzJztcbmltcG9ydCB7U3RhdGVTdG9yZX0gZnJvbSAnLi4vc3RhdGUnO1xuaW1wb3J0IHtTeXN0ZW1Db25maWdTdG9yZX0gZnJvbSAnLi4vc3lzdGVtLWNvbmZpZy9zeXN0ZW0tY29uZmlnLnN0b3JlJztcbmltcG9ydCB7UHJvY2Vzc1NlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3Byb2Nlc3MvcHJvY2Vzcy5zZXJ2aWNlJztcbmltcG9ydCB7TG9jYWxTdG9yYWdlU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvbG9jYWwtc3RvcmFnZS9sb2NhbC1zdG9yYWdlLnNlcnZpY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJQcmVmZXJlbmNlTWFwIHtcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlclByZWZlcmVuY2VzIHtcbiAgICB1c2VyUHJlZmVyZW5jZXM6IFVzZXJQcmVmZXJlbmNlTWFwO1xuICAgIGxvYWRpbmc6IGJvb2xlYW47XG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogVXNlclByZWZlcmVuY2VzID0ge1xuICAgIHVzZXJQcmVmZXJlbmNlczoge30sXG4gICAgbG9hZGluZzogZmFsc2Vcbn07XG5cbmxldCBpbnRlcm5hbFN0YXRlOiBVc2VyUHJlZmVyZW5jZXMgPSBkZWVwQ2xvbmUoaW5pdGlhbFN0YXRlKTtcblxubGV0IGNhY2hlJDogT2JzZXJ2YWJsZTxhbnk+ID0gbnVsbDtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVXNlclByZWZlcmVuY2VTdG9yZSBpbXBsZW1lbnRzIFN0YXRlU3RvcmUge1xuICAgIHByb3RlY3RlZCBzdG9yZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8VXNlclByZWZlcmVuY2VzPihpbnRlcm5hbFN0YXRlKTtcbiAgICBwcm90ZWN0ZWQgc3RhdGUkID0gdGhpcy5zdG9yZS5hc09ic2VydmFibGUoKTtcbiAgICBwcm90ZWN0ZWQgc2F2ZUJ1ZmZlclN0b3JlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG4gICAgcHJvdGVjdGVkIHNhdmVCdWZmZXIkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIHByb3RlY3RlZCBzdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuICAgIHByb3RlY3RlZCByZXNvdXJjZU5hbWUgPSAndXNlclByZWZlcmVuY2VzJztcbiAgICBwcm90ZWN0ZWQgZmllbGRzTWV0YWRhdGEgPSB7XG4gICAgICAgIGZpZWxkczogW1xuICAgICAgICAgICAgJ2lkJyxcbiAgICAgICAgICAgICdfaWQnLFxuICAgICAgICAgICAgJ3ZhbHVlJyxcbiAgICAgICAgICAgICdpdGVtcydcbiAgICAgICAgXVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQdWJsaWMgbG9uZy1saXZlZCBvYnNlcnZhYmxlIHN0cmVhbXNcbiAgICAgKi9cbiAgICB1c2VyUHJlZmVyZW5jZXMkID0gdGhpcy5zdGF0ZSQucGlwZShtYXAoc3RhdGUgPT4gc3RhdGUudXNlclByZWZlcmVuY2VzKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gICAgbG9hZGluZyQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5sb2FkaW5nKSk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGNvbGxlY3Rpb25HUUw6IENvbGxlY3Rpb25HUUwsXG4gICAgICAgIHByb3RlY3RlZCBjb25maWc6IFN5c3RlbUNvbmZpZ1N0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgcHJvY2Vzc1NlcnZpY2U6IFByb2Nlc3NTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgbG9jYWxTdG9yYWdlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxuICAgICkge1xuICAgICAgICBjb25zdCB1aVNldHRpbmdzID0gY29uZmlnLmdldENvbmZpZ1ZhbHVlKCd1aScpID8/IHt9O1xuICAgICAgICBjb25zdCBkZWxheSA9IHVpU2V0dGluZ3MudXNlcl9wcmVmZXJlbmNlc19zYXZlX2RlbGF5ID8/IDI1MDA7XG4gICAgICAgIHRoaXMuc2F2ZUJ1ZmZlciQgPSB0aGlzLnNhdmVCdWZmZXJTdG9yZS5hc09ic2VydmFibGUoKS5waXBlKGRlYm91bmNlVGltZShkZWxheSA/PyAyNTAwKSk7XG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMuc2F2ZUJ1ZmZlciQuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2F2ZVVpUHJlZmVyZW5jZXMoKTtcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFB1YmxpYyBBcGlcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIENsZWFyIHN0YXRlXG4gICAgICovXG4gICAgcHVibGljIGNsZWFyKCk6IHZvaWQge1xuICAgICAgICBjYWNoZSQgPSBudWxsO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKGRlZXBDbG9uZShpbml0aWFsU3RhdGUpKTtcbiAgICAgICAgdGhpcy5zdWJzLmZvckVhY2goc3ViID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYXJBdXRoQmFzZWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdXNlciBwcmVmZXJlbmNlcyB2YWx1ZSBieSBrZXlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdG8gcmV0cmlldmVcbiAgICAgKiBAcmV0dXJucyBhbnkgdXNlcnMgcHJlZmVyZW5jZVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRVc2VyUHJlZmVyZW5jZShrZXk6IHN0cmluZyk6IGFueSB7XG5cbiAgICAgICAgaWYgKCFpbnRlcm5hbFN0YXRlLnVzZXJQcmVmZXJlbmNlcyB8fCAhaW50ZXJuYWxTdGF0ZS51c2VyUHJlZmVyZW5jZXNba2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW50ZXJuYWxTdGF0ZS51c2VyUHJlZmVyZW5jZXNba2V5XTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdWkgdXNlciBwcmVmZXJlbmNlcyB2YWx1ZSBieSBrZXlcbiAgICAgKlxuICAgICAqIEBwYXJhbSBtb2R1bGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRvIHJldHJpZXZlXG4gICAgICogQHJldHVybnMgYW55IHVzZXJzIHByZWZlcmVuY2VcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0VWkobW9kdWxlOiBzdHJpbmcsIGtleTogc3RyaW5nKTogYW55IHtcblxuICAgICAgICBjb25zdCBzdG9yYWdlS2V5ID0gbW9kdWxlICsgJy0nICsga2V5O1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc3RvcmFnZUxvYWQobW9kdWxlLCBzdG9yYWdlS2V5KTtcblxuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdWkgPSBpbnRlcm5hbFN0YXRlPy51c2VyUHJlZmVyZW5jZXM/LnVpID8/IHt9IGFzIGFueTtcbiAgICAgICAgcmV0dXJuIHVpW3N0b3JhZ2VLZXldID8/IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHVzZXIgcHJlZmVyZW5jZXMgdmFsdWUgYnkga2V5XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kdWxlIG5hbWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRvIHJldHJpZXZlXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICogQHJldHVybnMgYW55IHVzZXJzIHByZWZlcmVuY2VcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0VWkobW9kdWxlOiBzdHJpbmcsIGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG5cbiAgICAgICAgY29uc3Qgc3RvcmFnZUtleSA9IG1vZHVsZSArICctJyArIGtleTtcbiAgICAgICAgdGhpcy5zdG9yYWdlU2F2ZShtb2R1bGUsIHN0b3JhZ2VLZXksIHZhbHVlKTtcblxuICAgICAgICBjb25zdCB1aSA9IGludGVybmFsU3RhdGU/LnVzZXJQcmVmZXJlbmNlcz8udWkgPz8ge30gYXMgYW55O1xuICAgICAgICB1aVtzdG9yYWdlS2V5XSA9IHZhbHVlO1xuXG4gICAgICAgIGludGVybmFsU3RhdGUudXNlclByZWZlcmVuY2VzLnVpID0gdWk7XG5cbiAgICAgICAgdGhpcy5zYXZlQnVmZmVyU3RvcmUubmV4dCh0cnVlKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2F2ZVVpUHJlZmVyZW5jZXMoKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgcHJvY2Vzc1R5cGUgPSAnc2F2ZS11aS11c2VyLXByZWZlcmVuY2VzJztcblxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgcHJlZmVyZW5jZXM6IGludGVybmFsU3RhdGUudXNlclByZWZlcmVuY2VzLnVpXG4gICAgICAgIH07XG5cblxuICAgICAgICB0aGlzLnByb2Nlc3NTZXJ2aWNlLnN1Ym1pdChwcm9jZXNzVHlwZSwgb3B0aW9ucykucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdG9yZSB0aGUgZGF0YSBpbiBsb2NhbCBzdG9yYWdlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kdWxlIHRvIHN0b3JlIGluXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0b3JhZ2VLZXkgdG8gc3RvcmUgaW5cbiAgICAgKiBAcGFyYW0ge30gZGF0YSB0byBzdG9yZVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBzdG9yYWdlU2F2ZShtb2R1bGU6IHN0cmluZywgc3RvcmFnZUtleTogc3RyaW5nLCBkYXRhOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgbGV0IHN0b3JhZ2UgPSB0aGlzLmxvY2FsU3RvcmFnZS5nZXQoc3RvcmFnZUtleSk7XG5cbiAgICAgICAgaWYgKCFzdG9yYWdlKSB7XG4gICAgICAgICAgICBzdG9yYWdlID0ge307XG4gICAgICAgIH1cblxuICAgICAgICBzdG9yYWdlW21vZHVsZV0gPSBkYXRhO1xuXG4gICAgICAgIHRoaXMubG9jYWxTdG9yYWdlLnNldChzdG9yYWdlS2V5LCBzdG9yYWdlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdG9yZSB0aGUga2V5IGluIGxvY2FsIHN0b3JhZ2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtb2R1bGUgdG8gbG9hZCBmcm9tXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0b3JhZ2VLZXkgZnJvbSBsb2FkIGZyb21cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgc3RvcmFnZUxvYWQobW9kdWxlOiBzdHJpbmcsIHN0b3JhZ2VLZXk6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIGNvbnN0IHN0b3JhZ2UgPSB0aGlzLmxvY2FsU3RvcmFnZS5nZXQoc3RvcmFnZUtleSk7XG5cbiAgICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlW21vZHVsZV0pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0b3JhZ2VbbW9kdWxlXTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWwgVXNlclByZWZlcmVuY2VzIGxvYWQgaWYgbm90IGNhY2hlZCBhbmQgdXBkYXRlIHN0YXRlLlxuICAgICAqIFJldHVybnMgb2JzZXJ2YWJsZSB0byBiZSB1c2VkIGluIHJlc29sdmVyIGlmIG5lZWRlZFxuICAgICAqXG4gICAgICogQHJldHVybnMge29iamVjdH0gT2JzZXJ2YWJsZTxhbnk+XG4gICAgICovXG4gICAgcHVibGljIGxvYWQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7Li4uaW50ZXJuYWxTdGF0ZSwgbG9hZGluZzogdHJ1ZX0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmdldFVzZXJQcmVmZXJlbmNlcygpLnBpcGUoXG4gICAgICAgICAgICB0YXAodXNlclByZWZlcmVuY2VzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHsuLi5pbnRlcm5hbFN0YXRlLCB1c2VyUHJlZmVyZW5jZXMsIGxvYWRpbmc6IGZhbHNlfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGxvYWRlZFxuICAgICAqL1xuICAgIHB1YmxpYyBpc0NhY2hlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlJCAhPT0gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgcHJlLWxvYWRlZCBwcmVmZXJlbmNlcyBhbmQgY2FjaGVcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0KHVzZXJQcmVmZXJlbmNlczogVXNlclByZWZlcmVuY2VNYXApOiB2b2lkIHtcbiAgICAgICAgY2FjaGUkID0gb2YodXNlclByZWZlcmVuY2VzKS5waXBlKHNoYXJlUmVwbGF5KDEpKTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7Li4uaW50ZXJuYWxTdGF0ZSwgdXNlclByZWZlcmVuY2VzLCBsb2FkaW5nOiBmYWxzZX0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludGVybmFsIEFQSVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBzdGF0ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHN0YXRlIHRvIHNldFxuICAgICAqL1xuICAgIHByb3RlY3RlZCB1cGRhdGVTdGF0ZShzdGF0ZTogVXNlclByZWZlcmVuY2VzKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RvcmUubmV4dChpbnRlcm5hbFN0YXRlID0gc3RhdGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBVc2VyUHJlZmVyZW5jZXMgY2FjaGVkIE9ic2VydmFibGUgb3IgY2FsbCB0aGUgYmFja2VuZFxuICAgICAqXG4gICAgICogQHJldHVybnMge29iamVjdH0gT2JzZXJ2YWJsZTxhbnk+XG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldFVzZXJQcmVmZXJlbmNlcygpOiBPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgICAgIGlmIChjYWNoZSQgPT0gbnVsbCkge1xuICAgICAgICAgICAgY2FjaGUkID0gdGhpcy5mZXRjaCgpLnBpcGUoXG4gICAgICAgICAgICAgICAgc2hhcmVSZXBsYXkoMSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2FjaGUkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZldGNoIHRoZSBVc2VyIFByZWZlcmVuY2VzIGZyb20gdGhlIGJhY2tlbmRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IE9ic2VydmFibGU8YW55PlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBmZXRjaCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb25HUUxcbiAgICAgICAgICAgIC5mZXRjaEFsbCh0aGlzLnJlc291cmNlTmFtZSwgdGhpcy5maWVsZHNNZXRhZGF0YSkucGlwZShtYXAoKHtkYXRhfSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJQcmVmZXJlbmNlczogVXNlclByZWZlcmVuY2VNYXAgPSB7fTtcblxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnVzZXJQcmVmZXJlbmNlcyAmJiBkYXRhLnVzZXJQcmVmZXJlbmNlcy5lZGdlcykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLnVzZXJQcmVmZXJlbmNlcy5lZGdlcy5mb3JFYWNoKChlZGdlKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZWRnZS5ub2RlLml0ZW1zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhlZGdlLm5vZGUuaXRlbXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyUHJlZmVyZW5jZXNba2V5XSA9IGVkZ2Uubm9kZS5pdGVtc1trZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VyUHJlZmVyZW5jZXM7XG4gICAgICAgICAgICB9KSk7XG4gICAgfVxufVxuIl19