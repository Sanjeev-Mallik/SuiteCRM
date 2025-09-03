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
import { catchError, map, shareReplay, tap } from 'rxjs/operators';
import { EntityGQL } from '../../services/api/graphql-api/api.entity.get';
import { deepClone, emptyObject } from '../../common/utils/object-utils';
import { LanguageStore } from '../language/language.store';
import { SystemConfigStore } from '../system-config/system-config.store';
import { ThemeImagesStore } from '../theme-images/theme-images.store';
import { UserPreferenceStore } from '../user-preference/user-preference.store';
import { NavigationStore } from '../navigation/navigation.store';
import { MetadataStore } from '../metadata/metadata.store.service';
import { AdminMetadataStore } from '../admin-metadata/admin-metadata.store';
import { GlobalRecentlyViewedStore } from "../global-recently-viewed/global-recently-viewed.store";
import * as i0 from "@angular/core";
import * as i1 from "../../services/api/graphql-api/api.entity.get";
import * as i2 from "../metadata/metadata.store.service";
import * as i3 from "../language/language.store";
import * as i4 from "../theme-images/theme-images.store";
import * as i5 from "../system-config/system-config.store";
import * as i6 from "../user-preference/user-preference.store";
import * as i7 from "../navigation/navigation.store";
import * as i8 from "../admin-metadata/admin-metadata.store";
import * as i9 from "../global-recently-viewed/global-recently-viewed.store";
const initialState = {
    systemConfig: false,
    userPreferences: false,
    appStrings: false,
    appListStrings: false,
    modStrings: false,
    themeImages: false,
    navigation: false,
    moduleMetadata: false,
    adminMetadata: false,
    globalRecentlyViewed: false
};
let internalState = deepClone(initialState);
let cache$ = null;
export class AppMetadataStore {
    constructor(recordGQL, metadata, language, themeImages, config, preferences, navigation, adminMetadataStore, globalRecentlyViewedStore) {
        this.recordGQL = recordGQL;
        this.metadata = metadata;
        this.language = language;
        this.themeImages = themeImages;
        this.config = config;
        this.preferences = preferences;
        this.navigation = navigation;
        this.adminMetadataStore = adminMetadataStore;
        this.globalRecentlyViewedStore = globalRecentlyViewedStore;
        this.store = new BehaviorSubject(internalState);
        this.state$ = this.store.asObservable();
        this.resourceName = 'appMetadata';
        this.fieldsMetadata = {
            fields: [
                'id',
                '_id',
            ]
        };
        this.types = [
            'systemConfig',
            'userPreferences',
            'language',
            'themeImages',
            'navigation',
            'moduleMetadata',
            'adminMetadata',
            'globalRecentlyViewed'
        ];
        this.metadata$ = this.state$;
    }
    /**
     * Clear state
     */
    clear() {
        cache$ = null;
        this.updateState(deepClone(initialState));
    }
    clearAuthBased() {
        this.clear();
    }
    get() {
        return internalState;
    }
    /**
     * Initial AppMetadata load if not cached and update state.
     *
     * @returns any data
     */
    load(module = 'login', types = [], useCache = true) {
        const notLoaded = this.getNotLoadedTypes();
        useCache = useCache && notLoaded.length < 1;
        if (!types || types.length < 1) {
            types = notLoaded;
            types.push('minimalModuleMetadata');
        }
        return this.getMetadata(module, types, useCache).pipe(tap((metadata) => {
            this.updateState(metadata);
        }));
    }
    /**
     * Initial AppMetadata load if not cached and update state.
     *
     * @returns any data
     */
    loadModuleMetadata(module = 'login', useCache = true) {
        let isLoaded = internalState?.moduleMetadata ?? false;
        useCache = useCache && isLoaded;
        return this.getMetadata(module, ['moduleMetadata'], useCache).pipe(tap((metadata) => {
            this.updateState(metadata);
        }));
    }
    /**
     * Get metadata cached Observable or call the backend
     *
     * @returns {object} Observable<AppMetadataFlags>
     */
    getMetadata(module = 'app', types = [], useCache = true) {
        if (!types || types.length < 1) {
            types = [...this.types];
        }
        if (cache$ == null || useCache !== true) {
            cache$ = this.fetch(module, types).pipe(shareReplay(1));
        }
        return cache$;
    }
    getNotLoadedTypes() {
        const types = [];
        if (!this.isNavigationLoaded()) {
            types.push('navigation');
        }
        if (!this.arePreferencesLoaded()) {
            types.push('userPreferences');
        }
        if (!this.areSystemConfigsLoaded()) {
            types.push('systemConfig');
        }
        if (!this.areAllLanguageStringsLoaded()) {
            types.push('language');
        }
        if (!this.areThemeImagesLoaded()) {
            types.push('themeImages');
        }
        if (!this.isAdminMetadataLoaded()) {
            types.push('adminMetadata');
        }
        if (!this.isGlobalRecentlyViewedLoaded()) {
            types.push('globalRecentlyViewed');
        }
        return types;
    }
    areAllLanguageStringsLoaded() {
        return this.language.areAllCached();
    }
    arePreferencesLoaded() {
        return this.preferences.isCached();
    }
    areSystemConfigsLoaded() {
        return this.config.isCached();
    }
    areThemeImagesLoaded() {
        return this.themeImages.isCached();
    }
    isNavigationLoaded() {
        return this.navigation.isCached();
    }
    isAdminMetadataLoaded() {
        return !!(internalState.adminMetadata ?? false);
    }
    isGlobalRecentlyViewedLoaded() {
        return !!(internalState.globalRecentlyViewed ?? false);
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
     * Fetch the Metadata from the backend
     *
     * @returns {object} Observable<{}>
     */
    fetch(module, types = []) {
        const fieldsToRetrieve = {
            fields: [
                ...this.fieldsMetadata.fields,
                ...types
            ]
        };
        return this.recordGQL.fetch(this.resourceName, `/api/app-metadata/${module}`, fieldsToRetrieve)
            .pipe(catchError(() => {
            return of({});
        }), map(({ data }) => {
            const result = data?.appMetadata;
            const appMetadata = { ...internalState };
            if (emptyObject(result)) {
                return appMetadata;
            }
            this.setConfig(appMetadata, result);
            this.setPreferences(appMetadata, result);
            this.setThemeImages(appMetadata, result);
            this.setNavigation(appMetadata, result);
            this.setLanguages(appMetadata, result);
            this.setModuleMetadata(appMetadata, result);
            this.setAdminMetadata(appMetadata, result);
            this.setGlobalRecentlyViewed(appMetadata, result);
            return appMetadata;
        }));
    }
    setModuleMetadata(currentMetadata, appMetadata) {
        let moduleMetadata = appMetadata?.moduleMetadata ?? {};
        let metaKey = 'moduleMetadata';
        if (emptyObject(moduleMetadata)) {
            moduleMetadata = appMetadata?.minimalModuleMetadata ?? {};
            metaKey = 'minimalModuleMetadata';
        }
        if (!emptyObject(moduleMetadata)) {
            currentMetadata[metaKey] = true;
            Object.keys(moduleMetadata).forEach(module => {
                const meta = moduleMetadata[module] ?? {};
                if (!emptyObject(meta)) {
                    const parsedMeta = this.metadata.mapMetadata(module, moduleMetadata[module]);
                    if (this.metadata.getModule() !== module) {
                        this.metadata.setModuleMetadata(module, parsedMeta);
                    }
                    else if (!this.metadata.isCached(module)) {
                        this.metadata.set(module, parsedMeta);
                    }
                }
            });
        }
    }
    setLanguages(currentMetadata, appMetadata) {
        const lang = appMetadata?.language ?? {};
        if (!emptyObject(lang)) {
            const languageStrings = {};
            languageStrings.languageKey = lang.id ?? '';
            languageStrings.appStrings = lang?.appStrings?.items ?? {};
            languageStrings.appListStrings = lang?.appListStrings?.items ?? {};
            languageStrings.modStrings = lang?.modStrings?.items ?? {};
            currentMetadata.appStrings = !emptyObject(languageStrings.appStrings);
            currentMetadata.appListStrings = !emptyObject(languageStrings.appListStrings);
            currentMetadata.modStrings = !emptyObject(languageStrings.modStrings);
            this.language.set(languageStrings.languageKey, languageStrings);
        }
    }
    setNavigation(currentMetadata, appMetadata) {
        const navigation = appMetadata?.navigation ?? {};
        if (!emptyObject(navigation)) {
            currentMetadata.navigation = true;
            this.navigation.set(navigation);
        }
    }
    setThemeImages(currentMetadata, appMetadata) {
        const themeImages = appMetadata?.themeImages ?? {};
        const images = themeImages?.items ?? {};
        if (!emptyObject(themeImages) && !emptyObject(images)) {
            currentMetadata.themeImages = true;
            const theme = themeImages.id;
            this.themeImages.set(theme, images);
        }
    }
    setPreferences(currentMetadata, appMetadata) {
        const prefs = appMetadata?.userPreferences ?? {};
        if (!emptyObject(prefs)) {
            currentMetadata.userPreferences = true;
            const userPreferences = this.mapPreferences(prefs);
            this.preferences.set(userPreferences);
        }
    }
    setConfig(currentMetadata, appMetadata) {
        const configs = appMetadata?.systemConfig ?? {};
        if (!emptyObject(configs)) {
            currentMetadata.systemConfig = true;
            this.config.set(configs);
        }
    }
    setAdminMetadata(currentMetadata, appMetadata) {
        const adminMetadata = appMetadata?.adminMetadata ?? {};
        if (!emptyObject(adminMetadata)) {
            currentMetadata.adminMetadata = true;
            this.adminMetadataStore.set(adminMetadata);
        }
    }
    setGlobalRecentlyViewed(currentMetadata, appMetadata) {
        const globalRecentlyViewed = appMetadata?.globalRecentlyViewed ?? [];
        if (globalRecentlyViewed.length) {
            currentMetadata.globalRecentlyViewed = true;
            this.globalRecentlyViewedStore.set(globalRecentlyViewed);
        }
        else if (appMetadata?.globalRecentlyViewed) {
            this.globalRecentlyViewedStore.set(globalRecentlyViewed);
        }
    }
    mapPreferences(preferences) {
        const userPreferences = {};
        Object.keys(preferences).forEach((prefKey) => {
            if (!preferences[prefKey].items) {
                return;
            }
            Object.keys(preferences[prefKey].items).forEach(key => {
                userPreferences[key] = preferences[prefKey].items[key];
            });
        });
        return userPreferences;
    }
    static { this.ɵfac = function AppMetadataStore_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AppMetadataStore)(i0.ɵɵinject(i1.EntityGQL), i0.ɵɵinject(i2.MetadataStore), i0.ɵɵinject(i3.LanguageStore), i0.ɵɵinject(i4.ThemeImagesStore), i0.ɵɵinject(i5.SystemConfigStore), i0.ɵɵinject(i6.UserPreferenceStore), i0.ɵɵinject(i7.NavigationStore), i0.ɵɵinject(i8.AdminMetadataStore), i0.ɵɵinject(i9.GlobalRecentlyViewedStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AppMetadataStore, factory: AppMetadataStore.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppMetadataStore, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.EntityGQL }, { type: i2.MetadataStore }, { type: i3.LanguageStore }, { type: i4.ThemeImagesStore }, { type: i5.SystemConfigStore }, { type: i6.UserPreferenceStore }, { type: i7.NavigationStore }, { type: i8.AdminMetadataStore }, { type: i9.GlobalRecentlyViewedStore }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLW1ldGFkYXRhLnN0b3JlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc3RvcmUvYXBwLW1ldGFkYXRhL2FwcC1tZXRhZGF0YS5zdG9yZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxlQUFlLEVBQWMsRUFBRSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBQyxVQUFVLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDeEUsT0FBTyxFQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUV2RSxPQUFPLEVBQUMsYUFBYSxFQUFrQixNQUFNLDRCQUE0QixDQUFDO0FBQzFFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLG9DQUFvQyxDQUFDO0FBQ3BFLE9BQU8sRUFBb0IsbUJBQW1CLEVBQUMsTUFBTSwwQ0FBMEMsQ0FBQztBQUNoRyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDL0QsT0FBTyxFQUF3QixhQUFhLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUV4RixPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3Q0FBd0MsQ0FBQztBQUUxRSxPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSx3REFBd0QsQ0FBQzs7Ozs7Ozs7Ozs7QUErQmpHLE1BQU0sWUFBWSxHQUFxQjtJQUNuQyxZQUFZLEVBQUUsS0FBSztJ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QUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQzdELENBQUM7YUFBTSxJQUFHLFdBQVcsRUFBRSxvQkFBb0IsRUFBRSxDQUFDO1lBQ3RDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNqRSxDQUFDO0lBQ0wsQ0FBQztJQUVTLGNBQWMsQ0FBQyxXQUFnQjtRQUNyQyxNQUFNLGVBQWUsR0FBc0IsRUFBRSxDQUFDO1FBQzlDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFFekMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDOUIsT0FBTztZQUNYLENBQUM7WUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2xELGVBQWUsQ0FBQyxHQUFHLENBQUMsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzNELENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLGVBQWUsQ0FBQztJQUMzQixDQUFDO2lIQXRWUSxnQkFBZ0I7dUVBQWhCLGdCQUFnQixXQUFoQixnQkFBZ0IsbUJBRmIsTUFBTTs7aUZBRVQsZ0JBQWdCO2NBSDVCLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBvZn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2NhdGNoRXJyb3IsIG1hcCwgc2hhcmVSZXBsYXksIHRhcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtFbnRpdHlHUUx9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FwaS9ncmFwaHFsLWFwaS9hcGkuZW50aXR5LmdldCc7XG5pbXBvcnQge2RlZXBDbG9uZSwgZW1wdHlPYmplY3R9IGZyb20gJy4uLy4uL2NvbW1vbi91dGlscy9vYmplY3QtdXRpbHMnO1xuaW1wb3J0IHtTdGF0ZVN0b3JlfSBmcm9tICcuLi9zdGF0ZSc7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmUsIExhbmd1YWdlU3RyaW5nc30gZnJvbSAnLi4vbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtTeXN0ZW1Db25maWdTdG9yZX0gZnJvbSAnLi4vc3lzdGVtLWNvbmZpZy9zeXN0ZW0tY29uZmlnLnN0b3JlJztcbmltcG9ydCB7VGhlbWVJbWFnZXNTdG9yZX0gZnJvbSAnLi4vdGhlbWUtaW1hZ2VzL3RoZW1lLWltYWdlcy5zdG9yZSc7XG5pbXBvcnQge1VzZXJQcmVmZXJlbmNlTWFwLCBVc2VyUHJlZmVyZW5jZVN0b3JlfSBmcm9tICcuLi91c2VyLXByZWZlcmVuY2UvdXNlci1wcmVmZXJlbmNlLnN0b3JlJztcbmltcG9ydCB7TmF2aWdhdGlvblN0b3JlfSBmcm9tICcuLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uc3RvcmUnO1xuaW1wb3J0IHtNZXRhZGF0YSwgTWV0YWRhdGFNYXAsIE1ldGFkYXRhU3RvcmV9IGZyb20gJy4uL21ldGFkYXRhL21ldGFkYXRhLnN0b3JlLnNlcnZpY2UnO1xuaW1wb3J0IHtBcG9sbG9RdWVyeVJlc3VsdH0gZnJvbSAnQGFwb2xsby9jbGllbnQvY29yZSc7XG5pbXBvcnQge0FkbWluTWV0YWRhdGFTdG9yZX0gZnJvbSAnLi4vYWRtaW4tbWV0YWRhdGEvYWRtaW4tbWV0YWRhdGEuc3RvcmUnO1xuaW1wb3J0IHtBZG1pbk1ldGFkYXRhfSBmcm9tICcuLi9hZG1pbi1tZXRhZGF0YS9hZG1pbi1tZXRhZGF0YS5tb2RlbCc7XG5pbXBvcnQge0dsb2JhbFJlY2VudGx5Vmlld2VkU3RvcmV9IGZyb20gXCIuLi9nbG9iYWwtcmVjZW50bHktdmlld2VkL2dsb2JhbC1yZWNlbnRseS12aWV3ZWQuc3RvcmVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBBcHBNZXRhZGF0YSB7XG4gICAgbG9hZGVkPzogYm9vbGVhbjtcbiAgICBtb2R1bGVNZXRhZGF0YUxvYWRlZD86IGJvb2xlYW47XG4gICAgc3lzdGVtQ29uZmlnPzogYW55O1xuICAgIHVzZXJQcmVmZXJlbmNlcz86IGFueTtcbiAgICBsYW5ndWFnZT86IGFueTtcbiAgICB0aGVtZUltYWdlcz86IGFueTtcbiAgICBuYXZpZ2F0aW9uPzogYW55O1xuICAgIG1vZHVsZU1ldGFkYXRhPzogTWV0YWRhdGFNYXA7XG4gICAgbWluaW1hbE1vZHVsZU1ldGFkYXRhPzogTWV0YWRhdGFNYXA7XG4gICAgYWRtaW5NZXRhZGF0YT86IEFkbWluTWV0YWRhdGE7XG4gICAgZ2xvYmFsUmVjZW50bHlWaWV3ZWQ/OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwTWV0YWRhdGFGbGFncyB7XG4gICAgc3lzdGVtQ29uZmlnPzogYm9vbGVhbjtcbiAgICB1c2VyUHJlZmVyZW5jZXM/OiBib29sZWFuO1xuICAgIGFwcFN0cmluZ3M/OiBib29sZWFuO1xuICAgIGFwcExpc3RTdHJpbmdzPzogYm9vbGVhbjtcbiAgICBtb2RTdHJpbmdzPzogYm9vbGVhbjtcbiAgICB0aGVtZUltYWdlcz86IGJvb2xlYW47XG4gICAgbmF2aWdhdGlvbj86IGJvb2xlYW47XG4gICAgbW9kdWxlTWV0YWRhdGE/OiBib29sZWFuO1xuICAgIG1pbmltYWxNb2R1bGVNZXRhZGF0YT86IGJvb2xlYW47XG4gICAgYWRtaW5NZXRhZGF0YT86IGJvb2xlYW47XG4gICAgZ2xvYmFsUmVjZW50bHlWaWV3ZWQ/OiBib29sZWFuO1xufVxuXG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogQXBwTWV0YWRhdGFGbGFncyA9IHtcbiAgICBzeXN0ZW1Db25maWc6IGZhbHNlLFxuICAgIHVzZXJQcmVmZXJlbmNlczogZmFsc2UsXG4gICAgYXBwU3RyaW5nczogZmFsc2UsXG4gICAgYXBwTGlzdFN0cmluZ3M6IGZhbHNlLFxuICAgIG1vZFN0cmluZ3M6IGZhbHNlLFxuICAgIHRoZW1lSW1hZ2VzOiBmYWxzZSxcbiAgICBuYXZpZ2F0aW9uOiBmYWxzZSxcbiAgICBtb2R1bGVNZXRhZGF0YTogZmFsc2UsXG4gICAgYWRtaW5NZXRhZGF0YTogZmFsc2UsXG4gICAgZ2xvYmFsUmVjZW50bHlWaWV3ZWQ6IGZhbHNlXG59O1xuXG5sZXQgaW50ZXJuYWxTdGF0ZTogQXBwTWV0YWRhdGFGbGFncyA9IGRlZXBDbG9uZShpbml0aWFsU3RhdGUpO1xuXG5sZXQgY2FjaGUkOiBPYnNlcnZhYmxlPEFwcE1ldGFkYXRhRmxhZ3M+ID0gbnVsbDtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQXBwTWV0YWRhdGFTdG9yZSBpbXBsZW1lbnRzIFN0YXRlU3RvcmUge1xuXG4gICAgLyoqXG4gICAgICogUHVibGljIGxvbmctbGl2ZWQgb2JzZXJ2YWJsZSBzdHJlYW1zXG4gICAgICovXG4gICAgbWV0YWRhdGEkOiBPYnNlcnZhYmxlPEFwcE1ldGFkYXRhRmxhZ3M+O1xuXG4gICAgcHJvdGVjdGVkIHN0b3JlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxBcHBNZXRhZGF0YUZsYWdzPihpbnRlcm5hbFN0YXRlKTtcbiAgICBwcm90ZWN0ZWQgc3RhdGUkID0gdGhpcy5zdG9yZS5hc09ic2VydmFibGUoKTtcbiAgICBwcm90ZWN0ZWQgcmVzb3VyY2VOYW1lID0gJ2FwcE1ldGFkYXRhJztcbiAgICBwcm90ZWN0ZWQgZmllbGRzTWV0YWRhdGEgPSB7XG4gICAgICAgIGZpZWxkczogW1xuICAgICAgICAgICAgJ2lkJyxcbiAgICAgICAgICAgICdfaWQnLFxuICAgICAgICBdXG4gICAgfTtcbiAgICBwcm90ZWN0ZWQgdHlwZXMgPSBbXG4gICAgICAgICdzeXN0ZW1Db25maWcnLFxuICAgICAgICAndXNlclByZWZlcmVuY2VzJyxcbiAgICAgICAgJ2xhbmd1YWdlJyxcbiAgICAgICAgJ3RoZW1lSW1hZ2VzJyxcbiAgICAgICAgJ25hdmlnYXRpb24nLFxuICAgICAgICAnbW9kdWxlTWV0YWRhdGEnLFxuICAgICAgICAnYWRtaW5NZXRhZGF0YScsXG4gICAgICAgICdnbG9iYWxSZWNlbnRseVZpZXdlZCdcbiAgICBdO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCByZWNvcmRHUUw6IEVudGl0eUdRTCxcbiAgICAgICAgcHJvdGVjdGVkIG1ldGFkYXRhOiBNZXRhZGF0YVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCB0aGVtZUltYWdlczogVGhlbWVJbWFnZXNTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGNvbmZpZzogU3lzdGVtQ29uZmlnU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBwcmVmZXJlbmNlczogVXNlclByZWZlcmVuY2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIG5hdmlnYXRpb246IE5hdmlnYXRpb25TdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGFkbWluTWV0YWRhdGFTdG9yZTpBZG1pbk1ldGFkYXRhU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBnbG9iYWxSZWNlbnRseVZpZXdlZFN0b3JlOiBHbG9iYWxSZWNlbnRseVZpZXdlZFN0b3JlXG4gICAgKSB7XG4gICAgICAgIHRoaXMubWV0YWRhdGEkID0gdGhpcy5zdGF0ZSQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgc3RhdGVcbiAgICAgKi9cbiAgICBwdWJsaWMgY2xlYXIoKTogdm9pZCB7XG4gICAgICAgIGNhY2hlJCA9IG51bGw7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoZGVlcENsb25lKGluaXRpYWxTdGF0ZSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhckF1dGhCYXNlZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQoKTogQXBwTWV0YWRhdGFGbGFncyB7XG4gICAgICAgIHJldHVybiBpbnRlcm5hbFN0YXRlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWwgQXBwTWV0YWRhdGEgbG9hZCBpZiBub3QgY2FjaGVkIGFuZCB1cGRhdGUgc3RhdGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBhbnkgZGF0YVxuICAgICAqL1xuICAgIHB1YmxpYyBsb2FkKG1vZHVsZTogc3RyaW5nID0gJ2xvZ2luJywgdHlwZXM6IHN0cmluZ1tdID0gW10sIHVzZUNhY2hlID0gdHJ1ZSk6IE9ic2VydmFibGU8QXBwTWV0YWRhdGFGbGFncz4ge1xuXG4gICAgICAgIGNvbnN0IG5vdExvYWRlZCA9IHRoaXMuZ2V0Tm90TG9hZGVkVHlwZXMoKTtcbiAgICAgICAgdXNlQ2FjaGUgPSB1c2VDYWNoZSAmJiBub3RMb2FkZWQubGVuZ3RoIDwgMTtcblxuICAgICAgICBpZiAoIXR5cGVzIHx8IHR5cGVzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgIHR5cGVzID0gbm90TG9hZGVkO1xuICAgICAgICAgICAgdHlwZXMucHVzaCgnbWluaW1hbE1vZHVsZU1ldGFkYXRhJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5nZXRNZXRhZGF0YShtb2R1bGUsIHR5cGVzLCB1c2VDYWNoZSkucGlwZShcbiAgICAgICAgICAgIHRhcCgobWV0YWRhdGE6IEFwcE1ldGFkYXRhRmxhZ3MpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKG1ldGFkYXRhKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbCBBcHBNZXRhZGF0YSBsb2FkIGlmIG5vdCBjYWNoZWQgYW5kIHVwZGF0ZSBzdGF0ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIGFueSBkYXRhXG4gICAgICovXG4gICAgcHVibGljIGxvYWRNb2R1bGVNZXRhZGF0YShtb2R1bGU6IHN0cmluZyA9ICdsb2dpbicsIHVzZUNhY2hlID0gdHJ1ZSk6IE9ic2VydmFibGU8QXBwTWV0YWRhdGFGbGFncz4ge1xuICAgICAgICBsZXQgaXNMb2FkZWQgPSBpbnRlcm5hbFN0YXRlPy5tb2R1bGVNZXRhZGF0YSA/PyBmYWxzZTtcblxuICAgICAgICB1c2VDYWNoZSA9IHVzZUNhY2hlICYmIGlzTG9hZGVkO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmdldE1ldGFkYXRhKG1vZHVsZSwgWydtb2R1bGVNZXRhZGF0YSddLCB1c2VDYWNoZSkucGlwZShcbiAgICAgICAgICAgIHRhcCgobWV0YWRhdGE6IEFwcE1ldGFkYXRhRmxhZ3MpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKG1ldGFkYXRhKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IG1ldGFkYXRhIGNhY2hlZCBPYnNlcnZhYmxlIG9yIGNhbGwgdGhlIGJhY2tlbmRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IE9ic2VydmFibGU8QXBwTWV0YWRhdGFGbGFncz5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0TWV0YWRhdGEobW9kdWxlOiBzdHJpbmcgPSAnYXBwJywgdHlwZXM6IHN0cmluZ1tdID0gW10sIHVzZUNhY2hlID0gdHJ1ZSk6IE9ic2VydmFibGU8QXBwTWV0YWRhdGFGbGFncz4ge1xuXG4gICAgICAgIGlmICghdHlwZXMgfHwgdHlwZXMubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgdHlwZXMgPSBbLi4udGhpcy50eXBlc107XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2FjaGUkID09IG51bGwgfHwgdXNlQ2FjaGUgIT09IHRydWUpIHtcbiAgICAgICAgICAgIGNhY2hlJCA9IHRoaXMuZmV0Y2gobW9kdWxlLCB0eXBlcykucGlwZShcbiAgICAgICAgICAgICAgICBzaGFyZVJlcGxheSgxKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjYWNoZSQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldE5vdExvYWRlZFR5cGVzKCk6IHN0cmluZ1tdIHtcbiAgICAgICAgY29uc3QgdHlwZXMgPSBbXTtcblxuICAgICAgICBpZiAoIXRoaXMuaXNOYXZpZ2F0aW9uTG9hZGVkKCkpIHtcbiAgICAgICAgICAgIHR5cGVzLnB1c2goJ25hdmlnYXRpb24nKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmFyZVByZWZlcmVuY2VzTG9hZGVkKCkpIHtcbiAgICAgICAgICAgIHR5cGVzLnB1c2goJ3VzZXJQcmVmZXJlbmNlcycpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuYXJlU3lzdGVtQ29uZmlnc0xvYWRlZCgpKSB7XG4gICAgICAgICAgICB0eXBlcy5wdXNoKCdzeXN0ZW1Db25maWcnKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmFyZUFsbExhbmd1YWdlU3RyaW5nc0xvYWRlZCgpKSB7XG4gICAgICAgICAgICB0eXBlcy5wdXNoKCdsYW5ndWFnZScpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuYXJlVGhlbWVJbWFnZXNMb2FkZWQoKSkge1xuICAgICAgICAgICAgdHlwZXMucHVzaCgndGhlbWVJbWFnZXMnKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzQWRtaW5NZXRhZGF0YUxvYWRlZCgpKSB7XG4gICAgICAgICAgICB0eXBlcy5wdXNoKCdhZG1pbk1ldGFkYXRhJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuaXNHbG9iYWxSZWNlbnRseVZpZXdlZExvYWRlZCgpKSB7XG4gICAgICAgICAgICB0eXBlcy5wdXNoKCdnbG9iYWxSZWNlbnRseVZpZXdlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHR5cGVzO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhcmVBbGxMYW5ndWFnZVN0cmluZ3NMb2FkZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmxhbmd1YWdlLmFyZUFsbENhY2hlZCgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhcmVQcmVmZXJlbmNlc0xvYWRlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJlZmVyZW5jZXMuaXNDYWNoZWQoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYXJlU3lzdGVtQ29uZmlnc0xvYWRlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmlzQ2FjaGVkKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFyZVRoZW1lSW1hZ2VzTG9hZGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy50aGVtZUltYWdlcy5pc0NhY2hlZCgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBpc05hdmlnYXRpb25Mb2FkZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hdmlnYXRpb24uaXNDYWNoZWQoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaXNBZG1pbk1ldGFkYXRhTG9hZGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gISEoaW50ZXJuYWxTdGF0ZS5hZG1pbk1ldGFkYXRhID8/IGZhbHNlKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaXNHbG9iYWxSZWNlbnRseVZpZXdlZExvYWRlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICEhKGludGVybmFsU3RhdGUuZ2xvYmFsUmVjZW50bHlWaWV3ZWQgPz8gZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludGVybmFsIEFQSVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBzdGF0ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHN0YXRlIHRvIHNldFxuICAgICAqL1xuICAgIHByb3RlY3RlZCB1cGRhdGVTdGF0ZShzdGF0ZTogQXBwTWV0YWRhdGFGbGFncyk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0b3JlLm5leHQoaW50ZXJuYWxTdGF0ZSA9IHN0YXRlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGZXRjaCB0aGUgTWV0YWRhdGEgZnJvbSB0aGUgYmFja2VuZFxuICAgICAqXG4gICAgICogQHJldHVybnMge29iamVjdH0gT2JzZXJ2YWJsZTx7fT5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZmV0Y2gobW9kdWxlOiBzdHJpbmcsIHR5cGVzOiBzdHJpbmdbXSA9IFtdKTogT2JzZXJ2YWJsZTxBcHBNZXRhZGF0YUZsYWdzPiB7XG4gICAgICAgIGNvbnN0IGZpZWxkc1RvUmV0cmlldmUgPSB7XG4gICAgICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAgICAgICAuLi50aGlzLmZpZWxkc01ldGFkYXRhLmZpZWxkcyxcbiAgICAgICAgICAgICAgICAuLi50eXBlc1xuICAgICAgICAgICAgXVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJlY29yZEdRTC5mZXRjaCh0aGlzLnJlc291cmNlTmFtZSwgYC9hcGkvYXBwLW1ldGFkYXRhLyR7bW9kdWxlfWAsIGZpZWxkc1RvUmV0cmlldmUpXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICBjYXRjaEVycm9yKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKHt9IGFzIEFwb2xsb1F1ZXJ5UmVzdWx0PGFueT4pO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIG1hcCgoe2RhdGF9KSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZGF0YT8uYXBwTWV0YWRhdGEgYXMgQXBwTWV0YWRhdGE7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFwcE1ldGFkYXRhID0gey4uLmludGVybmFsU3RhdGV9IGFzIEFwcE1ldGFkYXRhRmxhZ3M7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbXB0eU9iamVjdChyZXN1bHQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXBwTWV0YWRhdGE7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldENvbmZpZyhhcHBNZXRhZGF0YSwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQcmVmZXJlbmNlcyhhcHBNZXRhZGF0YSwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRUaGVtZUltYWdlcyhhcHBNZXRhZGF0YSwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXROYXZpZ2F0aW9uKGFwcE1ldGFkYXRhLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldExhbmd1YWdlcyhhcHBNZXRhZGF0YSwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRNb2R1bGVNZXRhZGF0YShhcHBNZXRhZGF0YSwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBZG1pbk1ldGFkYXRhKGFwcE1ldGFkYXRhLHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0R2xvYmFsUmVjZW50bHlWaWV3ZWQoYXBwTWV0YWRhdGEscmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFwcE1ldGFkYXRhO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZXRNb2R1bGVNZXRhZGF0YShjdXJyZW50TWV0YWRhdGE6IEFwcE1ldGFkYXRhRmxhZ3MsIGFwcE1ldGFkYXRhOiBBcHBNZXRhZGF0YSkge1xuICAgICAgICBsZXQgbW9kdWxlTWV0YWRhdGEgPSBhcHBNZXRhZGF0YT8ubW9kdWxlTWV0YWRhdGEgPz8ge307XG4gICAgICAgIGxldCBtZXRhS2V5ID0gJ21vZHVsZU1ldGFkYXRhJztcblxuICAgICAgICBpZiAoZW1wdHlPYmplY3QobW9kdWxlTWV0YWRhdGEpKSB7XG4gICAgICAgICAgICBtb2R1bGVNZXRhZGF0YSA9IGFwcE1ldGFkYXRhPy5taW5pbWFsTW9kdWxlTWV0YWRhdGEgPz8ge307XG4gICAgICAgICAgICBtZXRhS2V5ID0gJ21pbmltYWxNb2R1bGVNZXRhZGF0YSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWVtcHR5T2JqZWN0KG1vZHVsZU1ldGFkYXRhKSkge1xuXG4gICAgICAgICAgICBjdXJyZW50TWV0YWRhdGFbbWV0YUtleV0gPSB0cnVlO1xuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhtb2R1bGVNZXRhZGF0YSkuZm9yRWFjaChtb2R1bGUgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1ldGEgPSBtb2R1bGVNZXRhZGF0YVttb2R1bGVdID8/IHt9IGFzIE1ldGFkYXRhO1xuICAgICAgICAgICAgICAgIGlmICghZW1wdHlPYmplY3QobWV0YSkpIHtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRNZXRhID0gdGhpcy5tZXRhZGF0YS5tYXBNZXRhZGF0YShtb2R1bGUsIG1vZHVsZU1ldGFkYXRhW21vZHVsZV0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1ldGFkYXRhLmdldE1vZHVsZSgpICE9PSBtb2R1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWV0YWRhdGEuc2V0TW9kdWxlTWV0YWRhdGEobW9kdWxlLCBwYXJzZWRNZXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5tZXRhZGF0YS5pc0NhY2hlZChtb2R1bGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1ldGFkYXRhLnNldChtb2R1bGUsIHBhcnNlZE1ldGEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2V0TGFuZ3VhZ2VzKGN1cnJlbnRNZXRhZGF0YTogQXBwTWV0YWRhdGFGbGFncywgYXBwTWV0YWRhdGE6IEFwcE1ldGFkYXRhKSB7XG4gICAgICAgIGNvbnN0IGxhbmcgPSBhcHBNZXRhZGF0YT8ubGFuZ3VhZ2UgPz8ge307XG4gICAgICAgIGlmICghZW1wdHlPYmplY3QobGFuZykpIHtcbiAgICAgICAgICAgIGNvbnN0IGxhbmd1YWdlU3RyaW5ncyA9IHt9IGFzIExhbmd1YWdlU3RyaW5ncztcbiAgICAgICAgICAgIGxhbmd1YWdlU3RyaW5ncy5sYW5ndWFnZUtleSA9IGxhbmcuaWQgPz8gJyc7XG4gICAgICAgICAgICBsYW5ndWFnZVN0cmluZ3MuYXBwU3RyaW5ncyA9IGxhbmc/LmFwcFN0cmluZ3M/Lml0ZW1zID8/IHt9O1xuICAgICAgICAgICAgbGFuZ3VhZ2VTdHJpbmdzLmFwcExpc3RTdHJpbmdzID0gbGFuZz8uYXBwTGlzdFN0cmluZ3M/Lml0ZW1zID8/IHt9O1xuICAgICAgICAgICAgbGFuZ3VhZ2VTdHJpbmdzLm1vZFN0cmluZ3MgPSBsYW5nPy5tb2RTdHJpbmdzPy5pdGVtcyA/PyB7fTtcblxuICAgICAgICAgICAgY3VycmVudE1ldGFkYXRhLmFwcFN0cmluZ3MgPSAhZW1wdHlPYmplY3QobGFuZ3VhZ2VTdHJpbmdzLmFwcFN0cmluZ3MpO1xuICAgICAgICAgICAgY3VycmVudE1ldGFkYXRhLmFwcExpc3RTdHJpbmdzID0gIWVtcHR5T2JqZWN0KGxhbmd1YWdlU3RyaW5ncy5hcHBMaXN0U3RyaW5ncyk7XG4gICAgICAgICAgICBjdXJyZW50TWV0YWRhdGEubW9kU3RyaW5ncyA9ICFlbXB0eU9iamVjdChsYW5ndWFnZVN0cmluZ3MubW9kU3RyaW5ncyk7XG5cbiAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2Uuc2V0KGxhbmd1YWdlU3RyaW5ncy5sYW5ndWFnZUtleSwgbGFuZ3VhZ2VTdHJpbmdzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZXROYXZpZ2F0aW9uKGN1cnJlbnRNZXRhZGF0YTogQXBwTWV0YWRhdGFGbGFncywgYXBwTWV0YWRhdGE6IEFwcE1ldGFkYXRhKSB7XG4gICAgICAgIGNvbnN0IG5hdmlnYXRpb24gPSBhcHBNZXRhZGF0YT8ubmF2aWdhdGlvbiA/PyB7fTtcbiAgICAgICAgaWYgKCFlbXB0eU9iamVjdChuYXZpZ2F0aW9uKSkge1xuICAgICAgICAgICAgY3VycmVudE1ldGFkYXRhLm5hdmlnYXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5uYXZpZ2F0aW9uLnNldChuYXZpZ2F0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZXRUaGVtZUltYWdlcyhjdXJyZW50TWV0YWRhdGE6IEFwcE1ldGFkYXRhRmxhZ3MsIGFwcE1ldGFkYXRhOiBBcHBNZXRhZGF0YSkge1xuICAgICAgICBjb25zdCB0aGVtZUltYWdlcyA9IGFwcE1ldGFkYXRhPy50aGVtZUltYWdlcyA/PyB7fTtcbiAgICAgICAgY29uc3QgaW1hZ2VzID0gdGhlbWVJbWFnZXM/Lml0ZW1zID8/IHt9O1xuICAgICAgICBpZiAoIWVtcHR5T2JqZWN0KHRoZW1lSW1hZ2VzKSAmJiAhZW1wdHlPYmplY3QoaW1hZ2VzKSkge1xuICAgICAgICAgICAgY3VycmVudE1ldGFkYXRhLnRoZW1lSW1hZ2VzID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnN0IHRoZW1lID0gdGhlbWVJbWFnZXMuaWQ7XG4gICAgICAgICAgICB0aGlzLnRoZW1lSW1hZ2VzLnNldCh0aGVtZSwgaW1hZ2VzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZXRQcmVmZXJlbmNlcyhjdXJyZW50TWV0YWRhdGE6IEFwcE1ldGFkYXRhRmxhZ3MsIGFwcE1ldGFkYXRhOiBBcHBNZXRhZGF0YSkge1xuICAgICAgICBjb25zdCBwcmVmcyA9IGFwcE1ldGFkYXRhPy51c2VyUHJlZmVyZW5jZXMgPz8ge307XG4gICAgICAgIGlmICghZW1wdHlPYmplY3QocHJlZnMpKSB7XG4gICAgICAgICAgICBjdXJyZW50TWV0YWRhdGEudXNlclByZWZlcmVuY2VzID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJQcmVmZXJlbmNlcyA9IHRoaXMubWFwUHJlZmVyZW5jZXMocHJlZnMpO1xuICAgICAgICAgICAgdGhpcy5wcmVmZXJlbmNlcy5zZXQodXNlclByZWZlcmVuY2VzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZXRDb25maWcoY3VycmVudE1ldGFkYXRhOiBBcHBNZXRhZGF0YUZsYWdzLCBhcHBNZXRhZGF0YTogQXBwTWV0YWRhdGEpIHtcbiAgICAgICAgY29uc3QgY29uZmlncyA9IGFwcE1ldGFkYXRhPy5zeXN0ZW1Db25maWcgPz8ge307XG4gICAgICAgIGlmICghZW1wdHlPYmplY3QoY29uZmlncykpIHtcbiAgICAgICAgICAgIGN1cnJlbnRNZXRhZGF0YS5zeXN0ZW1Db25maWcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jb25maWcuc2V0KGNvbmZpZ3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNldEFkbWluTWV0YWRhdGEoY3VycmVudE1ldGFkYXRhOiBBcHBNZXRhZGF0YUZsYWdzLCBhcHBNZXRhZGF0YTogQXBwTWV0YWRhdGEpIHtcbiAgICAgICAgY29uc3QgYWRtaW5NZXRhZGF0YSA9IGFwcE1ldGFkYXRhPy5hZG1pbk1ldGFkYXRhID8/IHt9O1xuICAgICAgICBpZiAoIWVtcHR5T2JqZWN0KGFkbWluTWV0YWRhdGEpKSB7XG4gICAgICAgICAgICBjdXJyZW50TWV0YWRhdGEuYWRtaW5NZXRhZGF0YSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmFkbWluTWV0YWRhdGFTdG9yZS5zZXQoYWRtaW5NZXRhZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2V0R2xvYmFsUmVjZW50bHlWaWV3ZWQoY3VycmVudE1ldGFkYXRhOiBBcHBNZXRhZGF0YUZsYWdzLCBhcHBNZXRhZGF0YTogQXBwTWV0YWRhdGEpIHtcbiAgICAgICAgY29uc3QgZ2xvYmFsUmVjZW50bHlWaWV3ZWQgPSBhcHBNZXRhZGF0YT8uZ2xvYmFsUmVjZW50bHlWaWV3ZWQgPz8gW107XG4gICAgICAgIGlmIChnbG9iYWxSZWNlbnRseVZpZXdlZC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGN1cnJlbnRNZXRhZGF0YS5nbG9iYWxSZWNlbnRseVZpZXdlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmdsb2JhbFJlY2VudGx5Vmlld2VkU3RvcmUuc2V0KGdsb2JhbFJlY2VudGx5Vmlld2VkKTtcbiAgICAgICAgfSBlbHNlIGlmKGFwcE1ldGFkYXRhPy5nbG9iYWxSZWNlbnRseVZpZXdlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2xvYmFsUmVjZW50bHlWaWV3ZWRTdG9yZS5zZXQoZ2xvYmFsUmVjZW50bHlWaWV3ZWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG1hcFByZWZlcmVuY2VzKHByZWZlcmVuY2VzOiBhbnkpOiBVc2VyUHJlZmVyZW5jZU1hcCB7XG4gICAgICAgIGNvbnN0IHVzZXJQcmVmZXJlbmNlczogVXNlclByZWZlcmVuY2VNYXAgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMocHJlZmVyZW5jZXMpLmZvckVhY2goKHByZWZLZXkpID0+IHtcblxuICAgICAgICAgICAgaWYgKCFwcmVmZXJlbmNlc1twcmVmS2V5XS5pdGVtcykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgT2JqZWN0LmtleXMocHJlZmVyZW5jZXNbcHJlZktleV0uaXRlbXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICB1c2VyUHJlZmVyZW5jZXNba2V5XSA9IHByZWZlcmVuY2VzW3ByZWZLZXldLml0ZW1zW2tleV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB1c2VyUHJlZmVyZW5jZXM7XG4gICAgfVxufVxuIl19