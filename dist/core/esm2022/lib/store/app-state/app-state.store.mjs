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
import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, combineLatestWith } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { isVoid } from '../../common/utils/value-utils';
import { deepClone } from '../../common/utils/object-utils';
import { LoadingBufferFactory } from '../../services/ui/loading-buffer/loading-buffer.factory';
import { SystemConfigStore } from '../system-config/system-config.store';
import * as i0 from "@angular/core";
import * as i1 from "../../services/ui/loading-buffer/loading-buffer.factory";
import * as i2 from "../system-config/system-config.store";
const initialState = {
    loading: false,
    initialAppLoading: true,
    module: null,
    view: null,
    loaded: false,
    routeUrl: null,
    preLoginUrl: null,
    currentUser: null,
    activeRequests: 0,
    prevRoutes: [],
    isSidebarVisible: false,
    activeNavbarDropdown: 0
};
let internalState = deepClone(initialState);
export class AppStateStore {
    constructor(loadingBufferFactory, configs) {
        this.loadingBufferFactory = loadingBufferFactory;
        this.configs = configs;
        this.store = new BehaviorSubject(internalState);
        this.state$ = this.store.asObservable();
        this.loadingQueue = {};
        this.subs = [];
        this.isLoginWizardCompleted = signal(true);
        this.loading$ = this.state$.pipe(map(state => state.loading), distinctUntilChanged());
        this.module$ = this.state$.pipe(map(state => state.module), distinctUntilChanged());
        this.view$ = this.state$.pipe(map(state => state.view), distinctUntilChanged());
        this.initialAppLoading$ = this.state$.pipe(map(state => state.initialAppLoading), distinctUntilChanged());
        this.activeRequests$ = this.state$.pipe(map(state => state.activeRequests), distinctUntilChanged());
        this.isSidebarVisible$ = this.state$.pipe(map(state => state.isSidebarVisible), distinctUntilChanged());
        this.activeNavbarDropdown$ = this.state$.pipe(map(state => state.activeNavbarDropdown), distinctUntilChanged());
        this.vm$ = this.loading$.pipe(combineLatestWith(this.module$, this.view$, this.initialAppLoading$), map(([loading, module, view, initialAppLoading]) => ({
            loading,
            module,
            view,
            loaded: internalState.loaded,
            initialAppLoading,
            isSidebarVisible: internalState.isSidebarVisible,
            activeNavbarDropdown: internalState.activeNavbarDropdown
        })));
    }
    /**
     * Public Api
     */
    /**
     * Clear state
     */
    clear() {
        this.loadingQueue = {};
        this.updateState(deepClone(initialState));
        this.subs.forEach(sub => sub.unsubscribe());
    }
    clearAuthBased() {
    }
    init() {
        this.initLoadingBuffer();
    }
    /**
     * Check if is logged in
     */
    isLoggedIn() {
        return !!(internalState.currentUser ?? false);
    }
    /**
     * Get current user
     */
    getCurrentUser() {
        return internalState.currentUser;
    }
    /**
     * Set current user
     * @param user
     */
    setCurrentUser(user) {
        if (!isVoid(user)) {
            this.onLogin();
        }
        else {
            this.onLogout();
        }
        this.updateState({ ...internalState, currentUser: user });
    }
    /**
     * On login handlers
     * @protected
     */
    onLogin() {
    }
    /**
     * On logout handlers
     * @protected
     */
    onLogout() {
        this.updateState({ ...internalState, preLoginUrl: null });
    }
    /**
     * Get number of active requests
     */
    getActiveRequests() {
        return internalState.activeRequests;
    }
    /**
     * Add active request to counter
     */
    addActiveRequest() {
        let activeRequests = internalState.activeRequests;
        if (isVoid(activeRequests)) {
            activeRequests = 0;
        }
        activeRequests++;
        this.updateState({ ...internalState, activeRequests });
    }
    /**
     * Remove active request to counter
     */
    removeActiveRequest() {
        let activeRequests = internalState.activeRequests;
        if (isVoid(activeRequests)) {
            activeRequests = 0;
        }
        else {
            activeRequests--;
        }
        if (activeRequests < 0) {
            activeRequests = 0;
        }
        this.updateState({ ...internalState, activeRequests });
    }
    /**
     * Update loading status for given key
     *
     * @param {string} key to update
     * @param {boolean} loading status to set
     * @param {boolean} delay
     */
    updateLoading(key, loading, delay = true) {
        this.initLoadingBuffer();
        if (loading === true) {
            this.addToLoadingQueue(key);
            this.loadingBuffer.updateLoading(loading);
            if (!delay) {
                this.updateState({ ...internalState, loading });
            }
            return;
        }
        this.removeFromLoadingQueue(key);
        if (this.hasActiveLoading()) {
            this.loadingBuffer.updateLoading(loading);
            this.updateState({ ...internalState, loading });
        }
    }
    /**
     * Update loading status for given key
     *
     * @param {boolean} initialAppLoading status to set
     */
    updateInitialAppLoading(initialAppLoading) {
        this.updateState({ ...internalState, initialAppLoading });
    }
    /**
     * Has app been initially loaded
     *
     * @returns {boolean} is loaded
     */
    isLoaded() {
        return internalState.loaded;
    }
    /**
     * Set initial app load status
     *
     * @param {string} loaded flag
     */
    setLoaded(loaded) {
        this.updateState({ ...internalState, loaded });
    }
    /**
     * Set current module
     *
     * @param {string} module to set as current module
     */
    setModule(module) {
        this.updateState({ ...internalState, module });
    }
    /**
     * Get the current module
     *
     * @returns {string} current view
     */
    getModule() {
        return internalState?.module ?? '';
    }
    /**
     * Set current View
     *
     * @param {string} view to set as current view
     */
    setView(view) {
        this.updateState({ ...internalState, view });
    }
    /**
     * Get the current view
     *
     * @returns {string} current view
     */
    getView() {
        return internalState.view;
    }
    /**
     * Set route url
     *
     * @param {string} routeUrl to set
     */
    setRouteUrl(routeUrl) {
        this.updateState({ ...internalState, routeUrl });
    }
    /**
     * Get the route ulr
     *
     * @returns {string} current route url
     */
    getRouteUrl() {
        return internalState.routeUrl;
    }
    /**
     * set pre login url
     *
     * @param preLoginUrl
     */
    setPreLoginUrl(preLoginUrl) {
        this.updateState({ ...internalState, preLoginUrl });
    }
    /**
     * get pre login url
     *
     * @returns string
     */
    getPreLoginUrl() {
        return internalState.preLoginUrl ?? '';
    }
    /**
     * Internal API
     */
    /**
     * Init loading buffer
     * @protected
     */
    initLoadingBuffer() {
        if (!this.loadingBuffer) {
            this.loadingBuffer = this.loadingBufferFactory.create();
            this.subs.push(this.loadingBuffer.loading$.subscribe((loading) => {
                this.updateState({ ...internalState, loading });
            }));
        }
    }
    /**
     *  Check if there are still active loadings
     *
     *  @returns {boolean} active loading
     */
    hasActiveLoading() {
        return Object.keys(this.loadingQueue).length < 1;
    }
    /**
     * Remove key from loading queue
     *
     * @param {string} key to remove
     */
    removeFromLoadingQueue(key) {
        if (this.loadingQueue[key]) {
            delete this.loadingQueue[key];
        }
    }
    /**
     * Add key to loading queue
     *
     * @param {string} key to add
     */
    addToLoadingQueue(key) {
        this.loadingQueue[key] = true;
    }
    /**
     * Update the state
     *
     * @param {{}} state app state
     */
    updateState(state) {
        this.store.next(internalState = state);
    }
    toggleSidebar() {
        this.updateState({ ...internalState, isSidebarVisible: !internalState.isSidebarVisible });
    }
    closeSidebar() {
        this.updateState({ ...internalState, isSidebarVisible: false });
    }
    getLatestPrevRoute() {
        return internalState.prevRoutes[internalState.prevRoutes.length - 2];
    }
    getPrevRoutes() {
        return internalState.prevRoutes;
    }
    addToPrevRoute(route) {
        const prevRoutes = this.getPrevRoutes();
        if (prevRoutes.length > 0 && prevRoutes[prevRoutes.length - 1] === route) {
            return;
        }
        prevRoutes.push(route);
        this.updateState({ ...internalState });
    }
    removeLatestPrevRoute() {
        const prevRoutes = this.getPrevRoutes();
        const newArr = prevRoutes.slice(0, prevRoutes.length - 1);
        this.updateState({ ...internalState, prevRoutes: newArr });
    }
    removeAllPrevRoutes() {
        this.updateState({ ...internalState, prevRoutes: [] });
    }
    setActiveDropdown(key) {
        this.updateState({ ...internalState, activeNavbarDropdown: key });
    }
    getActiveDropdown() {
        return internalState.activeNavbarDropdown;
    }
    resetActiveDropdown() {
        this.updateState({ ...internalState, activeNavbarDropdown: 0 });
    }
    setLoginWizardComplete(isComplete) {
        this.isLoginWizardCompleted.set(isComplete);
    }
    getLoginWizardComplete() {
        return this.isLoginWizardCompleted();
    }
    static { this.ɵfac = function AppStateStore_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AppStateStore)(i0.ɵɵinject(i1.LoadingBufferFactory), i0.ɵɵinject(i2.SystemConfigStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AppStateStore, factory: AppStateStore.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppStateStore, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.LoadingBufferFactory }, { type: i2.SystemConfigStore }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXN0YXRlLnN0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3N0b3JlL2FwcC1zdGF0ZS9hcHAtc3RhdGUuc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUMsZUFBZSxFQUFFLGlCQUFpQixFQUEyQixNQUFNLE1BQU0sQ0FBQztBQUNsRixPQUFPLEVBQUMsb0JBQW9CLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDekQsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ3RELE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUcxRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx5REFBeUQsQ0FBQztBQUU3RixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQzs7OztBQWlCdkUsTUFBTSxZQUFZLEdBQWE7SUFDM0IsT0FBTyxFQUFFLEtBQUs7SUFDZCxpQkFBaUIsRUFBRSxJQUFJO0lBQ3ZCLE1BQU0sRUFBRSxJQUFJO0lBQ1osSUFBSSxFQUFFLElBQUk7SUFDVixNQUFNLEVBQUUsS0FBSztJQUNiLFFBQVEsRUFBRSxJQUFJO0lBQ2QsV0FBVyxFQUFFLElBQUk7SUFDakIsV0FBVyxFQUFFLElBQUk7SUFDakIsY0FBYyxFQUFFLENBQUM7SUFDakIsVUFBVSxFQUFFLEVBQUU7SUFDZCxnQkFBZ0IsRUFBRSxLQUFLO0lBQ3ZCLG9CQUFvQixFQUFFLENBQUM7Q0FDMUIsQ0FBQztBQUVGLElBQUksYUFBYSxHQUFhLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUt0RCxNQUFNLE9BQU8sYUFBYTtJQTBCdEIs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QyxDQUFDO1FBQzFELElBQUksQ0FBQyxXQUFXLENBQUMsRUFBQyxHQUFHLGFBQWEsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsbUJBQW1CO1FBQ2YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFDLEdBQUcsYUFBYSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFTSxpQkFBaUIsQ0FBQyxHQUFXO1FBQ2hDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBQyxHQUFHLGFBQWEsRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFTSxpQkFBaUI7UUFDcEIsT0FBTyxhQUFhLENBQUMsb0JBQW9CLENBQUM7SUFDOUMsQ0FBQztJQUVNLG1CQUFtQjtRQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUMsR0FBRyxhQUFhLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRU0sc0JBQXNCLENBQUMsVUFBbUI7UUFDN0MsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRU0sc0JBQXNCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDekMsQ0FBQzs4R0F0WVEsYUFBYTt1RUFBYixhQUFhLFdBQWIsYUFBYSxtQkFGVixNQUFNOztpRkFFVCxhQUFhO2NBSHpCLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlLCBzaWduYWwsIFdyaXRhYmxlU2lnbmFsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBjb21iaW5lTGF0ZXN0V2l0aCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7ZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtpc1ZvaWR9IGZyb20gJy4uLy4uL2NvbW1vbi91dGlscy92YWx1ZS11dGlscyc7XG5pbXBvcnQge2RlZXBDbG9uZX0gZnJvbSAnLi4vLi4vY29tbW9uL3V0aWxzL29iamVjdC11dGlscyc7XG5pbXBvcnQge1VzZXJ9IGZyb20gJy4uLy4uL2NvbW1vbi90eXBlcy91c2VyJztcbmltcG9ydCB7U3RhdGVTdG9yZX0gZnJvbSAnLi4vc3RhdGUnO1xuaW1wb3J0IHtMb2FkaW5nQnVmZmVyRmFjdG9yeX0gZnJvbSAnLi4vLi4vc2VydmljZXMvdWkvbG9hZGluZy1idWZmZXIvbG9hZGluZy1idWZmZXIuZmFjdG9yeSc7XG5pbXBvcnQge0xvYWRpbmdCdWZmZXJ9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VpL2xvYWRpbmctYnVmZmVyL2xvYWRpbmctYnVmZmVyLnNlcnZpY2UnO1xuaW1wb3J0IHtTeXN0ZW1Db25maWdTdG9yZX0gZnJvbSAnLi4vc3lzdGVtLWNvbmZpZy9zeXN0ZW0tY29uZmlnLnN0b3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBBcHBTdGF0ZSB7XG4gICAgbG9hZGluZz86IGJvb2xlYW47XG4gICAgaW5pdGlhbEFwcExvYWRpbmc/OiBib29sZWFuO1xuICAgIG1vZHVsZT86IHN0cmluZztcbiAgICB2aWV3Pzogc3RyaW5nO1xuICAgIGxvYWRlZD86IGJvb2xlYW47XG4gICAgcm91dGVVcmw/OiBzdHJpbmc7XG4gICAgcHJlTG9naW5Vcmw/OiBzdHJpbmc7XG4gICAgY3VycmVudFVzZXI/OiBVc2VyO1xuICAgIGFjdGl2ZVJlcXVlc3RzPzogbnVtYmVyO1xuICAgIHByZXZSb3V0ZXM/OiBzdHJpbmdbXTtcbiAgICBpc1NpZGViYXJWaXNpYmxlPzogYm9vbGVhbjtcbiAgICBhY3RpdmVOYXZiYXJEcm9wZG93bj86IG51bWJlcjtcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlOiBBcHBTdGF0ZSA9IHtcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBpbml0aWFsQXBwTG9hZGluZzogdHJ1ZSxcbiAgICBtb2R1bGU6IG51bGwsXG4gICAgdmlldzogbnVsbCxcbiAgICBsb2FkZWQ6IGZhbHNlLFxuICAgIHJvdXRlVXJsOiBudWxsLFxuICAgIHByZUxvZ2luVXJsOiBudWxsLFxuICAgIGN1cnJlbnRVc2VyOiBudWxsLFxuICAgIGFjdGl2ZVJlcXVlc3RzOiAwLFxuICAgIHByZXZSb3V0ZXM6IFtdLFxuICAgIGlzU2lkZWJhclZpc2libGU6IGZhbHNlLFxuICAgIGFjdGl2ZU5hdmJhckRyb3Bkb3duOiAwXG59O1xuXG5sZXQgaW50ZXJuYWxTdGF0ZTogQXBwU3RhdGUgPSBkZWVwQ2xvbmUoaW5pdGlhbFN0YXRlKTtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQXBwU3RhdGVTdG9yZSBpbXBsZW1lbnRzIFN0YXRlU3RvcmUge1xuXG4gICAgLyoqXG4gICAgICogUHVibGljIGxvbmctbGl2ZWQgb2JzZXJ2YWJsZSBzdHJlYW1zXG4gICAgICovXG4gICAgbG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgbW9kdWxlJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAgIHZpZXckOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gICAgaW5pdGlhbEFwcExvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIGFjdGl2ZVJlcXVlc3RzJDogT2JzZXJ2YWJsZTxudW1iZXI+O1xuICAgIGlzU2lkZWJhclZpc2libGUkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIGFjdGl2ZU5hdmJhckRyb3Bkb3duJDogT2JzZXJ2YWJsZTxudW1iZXI+O1xuXG4gICAgLyoqXG4gICAgICogVmlld01vZGVsIHRoYXQgcmVzb2x2ZXMgb25jZSBhbGwgdGhlIGRhdGEgaXMgcmVhZHkgKG9yIHVwZGF0ZWQpLi4uXG4gICAgICovXG4gICAgdm0kOiBPYnNlcnZhYmxlPEFwcFN0YXRlPjtcblxuICAgIHByb3RlY3RlZCBzdG9yZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8QXBwU3RhdGU+KGludGVybmFsU3RhdGUpO1xuICAgIHByb3RlY3RlZCBzdGF0ZSQgPSB0aGlzLnN0b3JlLmFzT2JzZXJ2YWJsZSgpO1xuICAgIHByb3RlY3RlZCBsb2FkaW5nUXVldWUgPSB7fTtcbiAgICBwcm90ZWN0ZWQgbG9hZGluZ0J1ZmZlcjogTG9hZGluZ0J1ZmZlcjtcbiAgICBwcm90ZWN0ZWQgc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICAgIHByaXZhdGUgaXNMb2dpbldpemFyZENvbXBsZXRlZDogV3JpdGFibGVTaWduYWw8Ym9vbGVhbj4gPSBzaWduYWw8Ym9vbGVhbj4odHJ1ZSk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGxvYWRpbmdCdWZmZXJGYWN0b3J5OiBMb2FkaW5nQnVmZmVyRmFjdG9yeSxcbiAgICAgICAgcHJvdGVjdGVkIGNvbmZpZ3M6IFN5c3RlbUNvbmZpZ1N0b3JlXG4gICAgKSB7XG5cbiAgICAgICAgdGhpcy5sb2FkaW5nJCA9IHRoaXMuc3RhdGUkLnBpcGUobWFwKHN0YXRlID0+IHN0YXRlLmxvYWRpbmcpLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgICAgICAgdGhpcy5tb2R1bGUkID0gdGhpcy5zdGF0ZSQucGlwZShtYXAoc3RhdGUgPT4gc3RhdGUubW9kdWxlKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gICAgICAgIHRoaXMudmlldyQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS52aWV3KSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gICAgICAgIHRoaXMuaW5pdGlhbEFwcExvYWRpbmckID0gdGhpcy5zdGF0ZSQucGlwZShtYXAoc3RhdGUgPT4gc3RhdGUuaW5pdGlhbEFwcExvYWRpbmcpLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgICAgICAgdGhpcy5hY3RpdmVSZXF1ZXN0cyQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5hY3RpdmVSZXF1ZXN0cyksIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICAgICAgICB0aGlzLmlzU2lkZWJhclZpc2libGUkID0gdGhpcy5zdGF0ZSQucGlwZShtYXAoc3RhdGUgPT4gc3RhdGUuaXNTaWRlYmFyVmlzaWJsZSksIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICAgICAgICB0aGlzLmFjdGl2ZU5hdmJhckRyb3Bkb3duJCA9IHRoaXMuc3RhdGUkLnBpcGUobWFwKHN0YXRlID0+IHN0YXRlLmFjdGl2ZU5hdmJhckRyb3Bkb3duKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG5cbiAgICAgICAgdGhpcy52bSQgPSB0aGlzLmxvYWRpbmckLnBpcGUoXG4gICAgICAgICAgICBjb21iaW5lTGF0ZXN0V2l0aCh0aGlzLm1vZHVsZSQsIHRoaXMudmlldyQsIHRoaXMuaW5pdGlhbEFwcExvYWRpbmckKSxcbiAgICAgICAgICAgIG1hcCgoW2xvYWRpbmcsIG1vZHVsZSwgdmlldywgaW5pdGlhbEFwcExvYWRpbmddKSA9PiAoe1xuICAgICAgICAgICAgICAgIGxvYWRpbmcsXG4gICAgICAgICAgICAgICAgbW9kdWxlLFxuICAgICAgICAgICAgICAgIHZpZXcsXG4gICAgICAgICAgICAgICAgbG9hZGVkOiBpbnRlcm5hbFN0YXRlLmxvYWRlZCxcbiAgICAgICAgICAgICAgICBpbml0aWFsQXBwTG9hZGluZyxcbiAgICAgICAgICAgICAgICBpc1NpZGViYXJWaXNpYmxlOiBpbnRlcm5hbFN0YXRlLmlzU2lkZWJhclZpc2libGUsXG4gICAgICAgICAgICAgICAgYWN0aXZlTmF2YmFyRHJvcGRvd246IGludGVybmFsU3RhdGUuYWN0aXZlTmF2YmFyRHJvcGRvd25cblxuICAgICAgICAgICAgfSkpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHVibGljIEFwaVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgc3RhdGVcbiAgICAgKi9cbiAgICBwdWJsaWMgY2xlYXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubG9hZGluZ1F1ZXVlID0ge307XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoZGVlcENsb25lKGluaXRpYWxTdGF0ZSkpO1xuICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhckF1dGhCYXNlZCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbml0TG9hZGluZ0J1ZmZlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGlzIGxvZ2dlZCBpblxuICAgICAqL1xuICAgIGlzTG9nZ2VkSW4oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhIShpbnRlcm5hbFN0YXRlLmN1cnJlbnRVc2VyID8/IGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgY3VycmVudCB1c2VyXG4gICAgICovXG4gICAgZ2V0Q3VycmVudFVzZXIoKTogVXNlciB7XG4gICAgICAgIHJldHVybiBpbnRlcm5hbFN0YXRlLmN1cnJlbnRVc2VyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBjdXJyZW50IHVzZXJcbiAgICAgKiBAcGFyYW0gdXNlclxuICAgICAqL1xuICAgIHNldEN1cnJlbnRVc2VyKHVzZXI6IFVzZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKCFpc1ZvaWQodXNlcikpIHtcbiAgICAgICAgICAgIHRoaXMub25Mb2dpbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vbkxvZ291dCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoey4uLmludGVybmFsU3RhdGUsIGN1cnJlbnRVc2VyOiB1c2VyfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT24gbG9naW4gaGFuZGxlcnNcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIG9uTG9naW4oKTogdm9pZCB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT24gbG9nb3V0IGhhbmRsZXJzXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBvbkxvZ291dCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7Li4uaW50ZXJuYWxTdGF0ZSwgcHJlTG9naW5Vcmw6IG51bGx9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgbnVtYmVyIG9mIGFjdGl2ZSByZXF1ZXN0c1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXRBY3RpdmVSZXF1ZXN0cygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gaW50ZXJuYWxTdGF0ZS5hY3RpdmVSZXF1ZXN0cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYWN0aXZlIHJlcXVlc3QgdG8gY291bnRlclxuICAgICAqL1xuICAgIHB1YmxpYyBhZGRBY3RpdmVSZXF1ZXN0KCk6IHZvaWQge1xuICAgICAgICBsZXQgYWN0aXZlUmVxdWVzdHMgPSBpbnRlcm5hbFN0YXRlLmFjdGl2ZVJlcXVlc3RzO1xuICAgICAgICBpZiAoaXNWb2lkKGFjdGl2ZVJlcXVlc3RzKSkge1xuICAgICAgICAgICAgYWN0aXZlUmVxdWVzdHMgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGFjdGl2ZVJlcXVlc3RzKys7XG5cbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7Li4uaW50ZXJuYWxTdGF0ZSwgYWN0aXZlUmVxdWVzdHN9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYWN0aXZlIHJlcXVlc3QgdG8gY291bnRlclxuICAgICAqL1xuICAgIHB1YmxpYyByZW1vdmVBY3RpdmVSZXF1ZXN0KCk6IHZvaWQge1xuICAgICAgICBsZXQgYWN0aXZlUmVxdWVzdHMgPSBpbnRlcm5hbFN0YXRlLmFjdGl2ZVJlcXVlc3RzO1xuICAgICAgICBpZiAoaXNWb2lkKGFjdGl2ZVJlcXVlc3RzKSkge1xuICAgICAgICAgICAgYWN0aXZlUmVxdWVzdHMgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWN0aXZlUmVxdWVzdHMtLTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhY3RpdmVSZXF1ZXN0cyA8IDApIHtcbiAgICAgICAgICAgIGFjdGl2ZVJlcXVlc3RzID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoey4uLmludGVybmFsU3RhdGUsIGFjdGl2ZVJlcXVlc3RzfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGxvYWRpbmcgc3RhdHVzIGZvciBnaXZlbiBrZXlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdG8gdXBkYXRlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBsb2FkaW5nIHN0YXR1cyB0byBzZXRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGRlbGF5XG4gICAgICovXG4gICAgcHVibGljIHVwZGF0ZUxvYWRpbmcoa2V5OiBzdHJpbmcsIGxvYWRpbmc6IGJvb2xlYW4sIGRlbGF5ID0gdHJ1ZSk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMuaW5pdExvYWRpbmdCdWZmZXIoKTtcblxuICAgICAgICBpZiAobG9hZGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5hZGRUb0xvYWRpbmdRdWV1ZShrZXkpO1xuXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdCdWZmZXIudXBkYXRlTG9hZGluZyhsb2FkaW5nKTtcbiAgICAgICAgICAgIGlmICghZGVsYXkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHsuLi5pbnRlcm5hbFN0YXRlLCBsb2FkaW5nfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVtb3ZlRnJvbUxvYWRpbmdRdWV1ZShrZXkpO1xuXG4gICAgICAgIGlmICh0aGlzLmhhc0FjdGl2ZUxvYWRpbmcoKSkge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nQnVmZmVyLnVwZGF0ZUxvYWRpbmcobG9hZGluZyk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHsuLi5pbnRlcm5hbFN0YXRlLCBsb2FkaW5nfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgbG9hZGluZyBzdGF0dXMgZm9yIGdpdmVuIGtleVxuICAgICAqXG4gICAgICogQHBhcmFtIHtib29sZWFufSBpbml0aWFsQXBwTG9hZGluZyBzdGF0dXMgdG8gc2V0XG4gICAgICovXG4gICAgcHVibGljIHVwZGF0ZUluaXRpYWxBcHBMb2FkaW5nKGluaXRpYWxBcHBMb2FkaW5nOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoey4uLmludGVybmFsU3RhdGUsIGluaXRpYWxBcHBMb2FkaW5nfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFzIGFwcCBiZWVuIGluaXRpYWxseSBsb2FkZWRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSBpcyBsb2FkZWRcbiAgICAgKi9cbiAgICBwdWJsaWMgaXNMb2FkZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBpbnRlcm5hbFN0YXRlLmxvYWRlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgaW5pdGlhbCBhcHAgbG9hZCBzdGF0dXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsb2FkZWQgZmxhZ1xuICAgICAqL1xuICAgIHB1YmxpYyBzZXRMb2FkZWQobG9hZGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoey4uLmludGVybmFsU3RhdGUsIGxvYWRlZH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBjdXJyZW50IG1vZHVsZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1vZHVsZSB0byBzZXQgYXMgY3VycmVudCBtb2R1bGVcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0TW9kdWxlKG1vZHVsZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoey4uLmludGVybmFsU3RhdGUsIG1vZHVsZX0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgY3VycmVudCBtb2R1bGVcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IGN1cnJlbnQgdmlld1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXRNb2R1bGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGludGVybmFsU3RhdGU/Lm1vZHVsZSA/PyAnJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgY3VycmVudCBWaWV3XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmlldyB0byBzZXQgYXMgY3VycmVudCB2aWV3XG4gICAgICovXG4gICAgcHVibGljIHNldFZpZXcodmlldzogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoey4uLmludGVybmFsU3RhdGUsIHZpZXd9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGN1cnJlbnQgdmlld1xuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ30gY3VycmVudCB2aWV3XG4gICAgICovXG4gICAgcHVibGljIGdldFZpZXcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGludGVybmFsU3RhdGUudmlldztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgcm91dGUgdXJsXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcm91dGVVcmwgdG8gc2V0XG4gICAgICovXG4gICAgcHVibGljIHNldFJvdXRlVXJsKHJvdXRlVXJsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7Li4uaW50ZXJuYWxTdGF0ZSwgcm91dGVVcmx9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHJvdXRlIHVsclxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ30gY3VycmVudCByb3V0ZSB1cmxcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0Um91dGVVcmwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGludGVybmFsU3RhdGUucm91dGVVcmw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogc2V0IHByZSBsb2dpbiB1cmxcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwcmVMb2dpblVybFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRQcmVMb2dpblVybChwcmVMb2dpblVybDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoey4uLmludGVybmFsU3RhdGUsIHByZUxvZ2luVXJsfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZ2V0IHByZSBsb2dpbiB1cmxcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHN0cmluZ1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXRQcmVMb2dpblVybCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gaW50ZXJuYWxTdGF0ZS5wcmVMb2dpblVybCA/PyAnJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBBUElcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEluaXQgbG9hZGluZyBidWZmZXJcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGluaXRMb2FkaW5nQnVmZmVyKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMubG9hZGluZ0J1ZmZlcikge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nQnVmZmVyID0gdGhpcy5sb2FkaW5nQnVmZmVyRmFjdG9yeS5jcmVhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMubG9hZGluZ0J1ZmZlci5sb2FkaW5nJC5zdWJzY3JpYmUoKGxvYWRpbmcpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHsuLi5pbnRlcm5hbFN0YXRlLCBsb2FkaW5nfSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAgQ2hlY2sgaWYgdGhlcmUgYXJlIHN0aWxsIGFjdGl2ZSBsb2FkaW5nc1xuICAgICAqXG4gICAgICogIEByZXR1cm5zIHtib29sZWFufSBhY3RpdmUgbG9hZGluZ1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBoYXNBY3RpdmVMb2FkaW5nKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5sb2FkaW5nUXVldWUpLmxlbmd0aCA8IDE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGtleSBmcm9tIGxvYWRpbmcgcXVldWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdG8gcmVtb3ZlXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHJlbW92ZUZyb21Mb2FkaW5nUXVldWUoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubG9hZGluZ1F1ZXVlW2tleV0pIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmxvYWRpbmdRdWV1ZVtrZXldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGtleSB0byBsb2FkaW5nIHF1ZXVlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRvIGFkZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBhZGRUb0xvYWRpbmdRdWV1ZShrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmxvYWRpbmdRdWV1ZVtrZXldID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIHN0YXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3t9fSBzdGF0ZSBhcHAgc3RhdGVcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgdXBkYXRlU3RhdGUoc3RhdGU6IEFwcFN0YXRlKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RvcmUubmV4dChpbnRlcm5hbFN0YXRlID0gc3RhdGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGVTaWRlYmFyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHsuLi5pbnRlcm5hbFN0YXRlLCBpc1NpZGViYXJWaXNpYmxlOiAhaW50ZXJuYWxTdGF0ZS5pc1NpZGViYXJWaXNpYmxlfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsb3NlU2lkZWJhcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7Li4uaW50ZXJuYWxTdGF0ZSwgaXNTaWRlYmFyVmlzaWJsZTogZmFsc2V9KTtcbiAgICB9XG4gICAgZ2V0TGF0ZXN0UHJldlJvdXRlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBpbnRlcm5hbFN0YXRlLnByZXZSb3V0ZXNbaW50ZXJuYWxTdGF0ZS5wcmV2Um91dGVzLmxlbmd0aCAtIDJdO1xuICAgIH1cblxuICAgIGdldFByZXZSb3V0ZXMoKTogc3RyaW5nW10ge1xuICAgICAgICByZXR1cm4gaW50ZXJuYWxTdGF0ZS5wcmV2Um91dGVzO1xuICAgIH1cblxuICAgIGFkZFRvUHJldlJvdXRlKHJvdXRlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcHJldlJvdXRlcyA9IHRoaXMuZ2V0UHJldlJvdXRlcygpO1xuICAgICAgICBpZihwcmV2Um91dGVzLmxlbmd0aCA+IDAgJiYgcHJldlJvdXRlc1twcmV2Um91dGVzLmxlbmd0aCAtIDFdID09PSByb3V0ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHByZXZSb3V0ZXMucHVzaChyb3V0ZSk7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoey4uLmludGVybmFsU3RhdGV9KTtcbiAgICB9XG5cbiAgICByZW1vdmVMYXRlc3RQcmV2Um91dGUoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHByZXZSb3V0ZXMgPSB0aGlzLmdldFByZXZSb3V0ZXMoKTtcbiAgICAgICAgY29uc3QgbmV3QXJyID0gcHJldlJvdXRlcy5zbGljZSgwLCBwcmV2Um91dGVzLmxlbmd0aCAtIDEpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHsuLi5pbnRlcm5hbFN0YXRlLCBwcmV2Um91dGVzOiBuZXdBcnJ9KTtcbiAgICB9XG5cbiAgICByZW1vdmVBbGxQcmV2Um91dGVzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHsuLi5pbnRlcm5hbFN0YXRlLCBwcmV2Um91dGVzOiBbXX0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRBY3RpdmVEcm9wZG93bihrZXk6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHsuLi5pbnRlcm5hbFN0YXRlLCBhY3RpdmVOYXZiYXJEcm9wZG93bjoga2V5fSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEFjdGl2ZURyb3Bkb3duKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBpbnRlcm5hbFN0YXRlLmFjdGl2ZU5hdmJhckRyb3Bkb3duO1xuICAgIH1cblxuICAgIHB1YmxpYyByZXNldEFjdGl2ZURyb3Bkb3duKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHsuLi5pbnRlcm5hbFN0YXRlLCBhY3RpdmVOYXZiYXJEcm9wZG93bjogMH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRMb2dpbldpemFyZENvbXBsZXRlKGlzQ29tcGxldGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pc0xvZ2luV2l6YXJkQ29tcGxldGVkLnNldChpc0NvbXBsZXRlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TG9naW5XaXphcmRDb21wbGV0ZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNMb2dpbldpemFyZENvbXBsZXRlZCgpO1xuICAgIH1cbn1cbiJdfQ==