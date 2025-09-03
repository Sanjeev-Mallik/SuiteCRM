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
import { AppStateStore } from '../app-state/app-state.store';
import { deepClone, emptyObject } from '../../common/utils/object-utils';
import { SvgIconRegistryService } from 'angular-svg-icon';
import * as i0 from "@angular/core";
import * as i1 from "../../services/api/graphql-api/api.entity.get";
import * as i2 from "../app-state/app-state.store";
import * as i3 from "angular-svg-icon";
const initialState = {
    theme: null,
    images: {}
};
let internalState = deepClone(initialState);
let cachedTheme = null;
let cache$ = null;
export class ThemeImagesStore {
    constructor(recordGQL, appStateStore, iconRegistry) {
        this.recordGQL = recordGQL;
        this.appStateStore = appStateStore;
        this.iconRegistry = iconRegistry;
        this.store = new BehaviorSubject(internalState);
        this.state$ = this.store.asObservable();
        this.resourceName = 'themeImages';
        this.frontendName = 'theme-images';
        this.fieldsMetadata = {
            fields: [
                'id',
                '_id',
                'items'
            ]
        };
        this.images$ = this.state$.pipe(map(state => state.images), distinctUntilChanged());
    }
    /**
     * Public Api
     */
    /**
     * Clear state
     */
    clear() {
        cachedTheme = null;
        cache$ = null;
        this.updateState(deepClone(initialState));
    }
    clearAuthBased() {
    }
    /**
     * Change the current theme
     *
     * @param {string} theme to set
     */
    changeTheme(theme) {
        this.appStateStore.updateLoading('change-theme', true);
        this.load(theme).pipe(tap(() => this.appStateStore.updateLoading('change-theme', false))).subscribe();
    }
    /**
     * Returns the currently active image theme
     *
     * @returns {string} the theme
     */
    getTheme() {
        return internalState.theme;
    }
    /**
     * Initial ThemeImages load if not cached and update state.
     * Returns observable to be used in resolver if needed
     *
     * @param {string} theme to load
     * @returns {object} Observable<any>
     */
    load(theme) {
        return this.getThemeImages(theme).pipe(tap(images => {
            this.updateState({ ...internalState, images, theme });
        }));
    }
    /**
     * Check if loaded
     */
    isCached() {
        return cache$ !== null;
    }
    /**
     * Set pre-loaded theme images and cache
     */
    set(theme, images) {
        cachedTheme = theme;
        this.registerSvgs(images);
        cache$ = of(images).pipe(shareReplay(1));
        this.updateState({ ...internalState, images });
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
     * Get theme images cached Observable or call the backend
     *
     * @param {string} theme to retrieve
     * @returns {object} Observable<any>
     */
    getThemeImages(theme) {
        if (cachedTheme !== theme || cache$ === null) {
            cachedTheme = theme;
            cache$ = this.fetch(theme).pipe(shareReplay(1));
        }
        return cache$;
    }
    registerSvgs(images) {
        Object.keys(images).forEach(key => {
            const image = images[key];
            const content = image['content'] ?? '';
            const name = image['name'] ?? '';
            if (content === '' || name === '') {
                return;
            }
            this.iconRegistry.addSvg(name, content);
        });
    }
    /**
     * Fetch the theme images from the backend
     *
     * @param {string} theme to load
     * @returns {object} Observable<any>
     */
    fetch(theme) {
        return this.recordGQL
            .fetch(this.resourceName, `/api/${this.frontendName}/${theme}`, this.fieldsMetadata)
            .pipe(map(({ data }) => {
            let images = {};
            if (data && data.themeImages) {
                images = data.themeImages.items;
            }
            if (!emptyObject(images)) {
                const parsedImages = {};
                this.registerSvgs(images);
                Object.keys(images).forEach(key => {
                    const { content, ...image } = images[key] ?? {};
                    parsedImages[key] = image;
                });
                return parsedImages;
            }
            return images;
        }));
    }
    static { this.ɵfac = function ThemeImagesStore_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ThemeImagesStore)(i0.ɵɵinject(i1.EntityGQL), i0.ɵɵinject(i2.AppStateStore), i0.ɵɵinject(i3.SvgIconRegistryService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ThemeImagesStore, factory: ThemeImagesStore.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ThemeImagesStore, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.EntityGQL }, { type: i2.AppStateStore }, { type: i3.SvgIconRegistryService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtaW1hZ2VzLnN0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3N0b3JlL3RoZW1lLWltYWdlcy90aGVtZS1pbWFnZXMuc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGVBQWUsRUFBYyxFQUFFLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFDLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0UsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBQ3hFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUUzRCxPQUFPLEVBQUMsU0FBUyxFQUFFLFdBQVcsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLGtCQUFrQixDQUFDOzs7OztBQWtCeEQsTUFBTSxZQUFZLEdBQWdCO0lBQzlCLEtBQUssRUFBRSxJQUFJO0lBQ1gsTUFBTSxFQUFFLEVBQUU7Q0FDYixDQUFDO0FBRUYsSUFBSSxhQUFhLEdBQWdCLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUV6RCxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUM7QUFDdkIsSUFBSSxNQUFNLEdBQW9CLElBQUksQ0FBQztBQUtuQyxNQUFNLE9BQU8sZ0JBQWdCO0lBbUJ6QixZQUNjLFNBQW9CLEVBQ3BCLGFBQTRCLEVBQzVCLFlBQW9DO1FBRnBDLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsaUJBQVksR0FBWixZQUFZLENBQXdCO1FBZnhD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TSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUM5QixNQUFNLEVBQUMsT0FBTyxFQUFFLEdBQUcsS0FBSyxFQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDOUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztnQkFDOUIsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsT0FBTyxZQUFZLENBQUM7WUFDeEIsQ0FBQztZQUVELE9BQU8sTUFBTSxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUNMLENBQUM7SUFDVixDQUFDO2lIQXRMUSxnQkFBZ0I7dUVBQWhCLGdCQUFnQixXQUFoQixnQkFBZ0IsbUJBRmIsTUFBTTs7aUZBRVQsZ0JBQWdCO2NBSDVCLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBvZn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2Rpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAsIHNoYXJlUmVwbGF5LCB0YXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7RW50aXR5R1FMfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGkvZ3JhcGhxbC1hcGkvYXBpLmVudGl0eS5nZXQnO1xuaW1wb3J0IHtBcHBTdGF0ZVN0b3JlfSBmcm9tICcuLi9hcHAtc3RhdGUvYXBwLXN0YXRlLnN0b3JlJztcbmltcG9ydCB7U3RhdGVTdG9yZX0gZnJvbSAnLi4vc3RhdGUnO1xuaW1wb3J0IHtkZWVwQ2xvbmUsIGVtcHR5T2JqZWN0fSBmcm9tICcuLi8uLi9jb21tb24vdXRpbHMvb2JqZWN0LXV0aWxzJztcbmltcG9ydCB7U3ZnSWNvblJlZ2lzdHJ5U2VydmljZX0gZnJvbSAnYW5ndWxhci1zdmctaWNvbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGhlbWVJbWFnZSB7XG4gICAgcGF0aDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICB0eXBlOiBzdHJpbmc7XG4gICAgY29udGVudD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUaGVtZUltYWdlcyB7XG4gICAgdGhlbWU6IHN0cmluZztcbiAgICBpbWFnZXM6IFRoZW1lSW1hZ2VNYXA7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGhlbWVJbWFnZU1hcCB7XG4gICAgW2tleTogc3RyaW5nXTogVGhlbWVJbWFnZTtcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlOiBUaGVtZUltYWdlcyA9IHtcbiAgICB0aGVtZTogbnVsbCxcbiAgICBpbWFnZXM6IHt9XG59O1xuXG5sZXQgaW50ZXJuYWxTdGF0ZTogVGhlbWVJbWFnZXMgPSBkZWVwQ2xvbmUoaW5pdGlhbFN0YXRlKTtcblxubGV0IGNhY2hlZFRoZW1lID0gbnVsbDtcbmxldCBjYWNoZSQ6IE9ic2VydmFibGU8YW55PiA9IG51bGw7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFRoZW1lSW1hZ2VzU3RvcmUgaW1wbGVtZW50cyBTdGF0ZVN0b3JlIHtcblxuICAgIC8qKlxuICAgICAqIFB1YmxpYyBsb25nLWxpdmVkIG9ic2VydmFibGUgc3RyZWFtc1xuICAgICAqL1xuICAgIGltYWdlcyQ6IE9ic2VydmFibGU8VGhlbWVJbWFnZU1hcD47XG5cbiAgICBwcm90ZWN0ZWQgc3RvcmUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFRoZW1lSW1hZ2VzPihpbnRlcm5hbFN0YXRlKTtcbiAgICBwcm90ZWN0ZWQgc3RhdGUkID0gdGhpcy5zdG9yZS5hc09ic2VydmFibGUoKTtcbiAgICBwcm90ZWN0ZWQgcmVzb3VyY2VOYW1lID0gJ3RoZW1lSW1hZ2VzJztcbiAgICBwcm90ZWN0ZWQgZnJvbnRlbmROYW1lID0gJ3RoZW1lLWltYWdlcyc7XG4gICAgcHJvdGVjdGVkIGZpZWxkc01ldGFkYXRhID0ge1xuICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAgICdpZCcsXG4gICAgICAgICAgICAnX2lkJyxcbiAgICAgICAgICAgICdpdGVtcydcbiAgICAgICAgXVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIHJlY29yZEdRTDogRW50aXR5R1FMLFxuICAgICAgICBwcm90ZWN0ZWQgYXBwU3RhdGVTdG9yZTogQXBwU3RhdGVTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGljb25SZWdpc3RyeTogU3ZnSWNvblJlZ2lzdHJ5U2VydmljZVxuICAgICkge1xuICAgICAgICB0aGlzLmltYWdlcyQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5pbWFnZXMpLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFB1YmxpYyBBcGlcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIENsZWFyIHN0YXRlXG4gICAgICovXG4gICAgcHVibGljIGNsZWFyKCk6IHZvaWQge1xuICAgICAgICBjYWNoZWRUaGVtZSA9IG51bGw7XG4gICAgICAgIGNhY2hlJCA9IG51bGw7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoZGVlcENsb25lKGluaXRpYWxTdGF0ZSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhckF1dGhCYXNlZCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdGhlIGN1cnJlbnQgdGhlbWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0aGVtZSB0byBzZXRcbiAgICAgKi9cbiAgICBwdWJsaWMgY2hhbmdlVGhlbWUodGhlbWU6IHN0cmluZyk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMuYXBwU3RhdGVTdG9yZS51cGRhdGVMb2FkaW5nKCdjaGFuZ2UtdGhlbWUnLCB0cnVlKTtcblxuICAgICAgICB0aGlzLmxvYWQodGhlbWUpLnBpcGUoXG4gICAgICAgICAgICB0YXAoKCkgPT4gdGhpcy5hcHBTdGF0ZVN0b3JlLnVwZGF0ZUxvYWRpbmcoJ2NoYW5nZS10aGVtZScsIGZhbHNlKSlcbiAgICAgICAgKS5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50bHkgYWN0aXZlIGltYWdlIHRoZW1lXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgdGhlbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0VGhlbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGludGVybmFsU3RhdGUudGhlbWU7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsIFRoZW1lSW1hZ2VzIGxvYWQgaWYgbm90IGNhY2hlZCBhbmQgdXBkYXRlIHN0YXRlLlxuICAgICAqIFJldHVybnMgb2JzZXJ2YWJsZSB0byBiZSB1c2VkIGluIHJlc29sdmVyIGlmIG5lZWRlZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRoZW1lIHRvIGxvYWRcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBPYnNlcnZhYmxlPGFueT5cbiAgICAgKi9cbiAgICBwdWJsaWMgbG9hZCh0aGVtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcblxuICAgICAgICByZXR1cm4gdGhpcy5nZXRUaGVtZUltYWdlcyh0aGVtZSkucGlwZShcbiAgICAgICAgICAgIHRhcChpbWFnZXMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoey4uLmludGVybmFsU3RhdGUsIGltYWdlcywgdGhlbWV9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgbG9hZGVkXG4gICAgICovXG4gICAgcHVibGljIGlzQ2FjaGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gY2FjaGUkICE9PSBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBwcmUtbG9hZGVkIHRoZW1lIGltYWdlcyBhbmQgY2FjaGVcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0KHRoZW1lOiBzdHJpbmcsIGltYWdlczogVGhlbWVJbWFnZU1hcCk6IHZvaWQge1xuXG4gICAgICAgIGNhY2hlZFRoZW1lID0gdGhlbWU7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJTdmdzKGltYWdlcyk7XG5cbiAgICAgICAgY2FjaGUkID0gb2YoaW1hZ2VzKS5waXBlKHNoYXJlUmVwbGF5KDEpKTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7Li4uaW50ZXJuYWxTdGF0ZSwgaW1hZ2VzfSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBBUElcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgc3RhdGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzdGF0ZSB0byBzZXRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgdXBkYXRlU3RhdGUoc3RhdGU6IFRoZW1lSW1hZ2VzKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RvcmUubmV4dChpbnRlcm5hbFN0YXRlID0gc3RhdGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGVtZSBpbWFnZXMgY2FjaGVkIE9ic2VydmFibGUgb3IgY2FsbCB0aGUgYmFja2VuZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRoZW1lIHRvIHJldHJpZXZlXG4gICAgICogQHJldHVybnMge29iamVjdH0gT2JzZXJ2YWJsZTxhbnk+XG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldFRoZW1lSW1hZ2VzKHRoZW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgICAgIGlmIChjYWNoZWRUaGVtZSAhPT0gdGhlbWUgfHwgY2FjaGUkID09PSBudWxsKSB7XG4gICAgICAgICAgICBjYWNoZWRUaGVtZSA9IHRoZW1lO1xuICAgICAgICAgICAgY2FjaGUkID0gdGhpcy5mZXRjaCh0aGVtZSkucGlwZShcbiAgICAgICAgICAgICAgICBzaGFyZVJlcGxheSgxKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjYWNoZSQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlZ2lzdGVyU3ZncyhpbWFnZXM6IFRoZW1lSW1hZ2VNYXApIHtcbiAgICAgICAgT2JqZWN0LmtleXMoaW1hZ2VzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IGltYWdlc1trZXldO1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGltYWdlWydjb250ZW50J10gPz8gJyc7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gaW1hZ2VbJ25hbWUnXSA/PyAnJztcblxuICAgICAgICAgICAgaWYgKGNvbnRlbnQgPT09ICcnIHx8IG5hbWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmljb25SZWdpc3RyeS5hZGRTdmcobmFtZSwgY29udGVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZldGNoIHRoZSB0aGVtZSBpbWFnZXMgZnJvbSB0aGUgYmFja2VuZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRoZW1lIHRvIGxvYWRcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBPYnNlcnZhYmxlPGFueT5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZmV0Y2godGhlbWU6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVjb3JkR1FMXG4gICAgICAgICAgICAuZmV0Y2godGhpcy5yZXNvdXJjZU5hbWUsIGAvYXBpLyR7dGhpcy5mcm9udGVuZE5hbWV9LyR7dGhlbWV9YCwgdGhpcy5maWVsZHNNZXRhZGF0YSlcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIG1hcCgoe2RhdGF9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpbWFnZXMgPSB7fTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLnRoZW1lSW1hZ2VzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZXMgPSBkYXRhLnRoZW1lSW1hZ2VzLml0ZW1zO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlbXB0eU9iamVjdChpbWFnZXMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRJbWFnZXMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJTdmdzKGltYWdlcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGltYWdlcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHtjb250ZW50LCAuLi5pbWFnZX0gPSBpbWFnZXNba2V5XSA/PyB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWRJbWFnZXNba2V5XSA9IGltYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZWRJbWFnZXM7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW1hZ2VzO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgIH1cbn1cbiJdfQ==