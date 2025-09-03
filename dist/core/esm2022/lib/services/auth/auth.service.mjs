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
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, of, throwError } from 'rxjs';
import { catchError, distinctUntilChanged, filter, finalize, map, take, tap } from 'rxjs/operators';
import { emptyObject } from '../../common/utils/object-utils';
import { isEmptyString, isTrue } from '../../common/utils/value-utils';
import { MessageService } from '../message/message.service';
import { StateManager } from '../../store/state-manager';
import { LanguageStore } from '../../store/language/language.store';
import { AppStateStore } from '../../store/app-state/app-state.store';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { SystemConfigStore } from '../../store/system-config/system-config.store';
import { BaseRouteService } from "../base-route/base-route.service";
import { NotificationStore } from "../../store/notification/notification.store";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@angular/router";
import * as i3 from "../message/message.service";
import * as i4 from "../../store/state-manager";
import * as i5 from "../../store/language/language.store";
import * as i6 from "../../store/app-state/app-state.store";
import * as i7 from "../local-storage/local-storage.service";
import * as i8 from "../../store/system-config/system-config.store";
import * as i9 from "../base-route/base-route.service";
import * as i10 from "../../store/notification/notification.store";
export class AuthService {
    constructor(http, router, message, stateManager, languageStore, appStateStore, localStorage, configs, baseRoute, notificationStore) {
        this.http = http;
        this.router = router;
        this.message = message;
        this.stateManager = stateManager;
        this.languageStore = languageStore;
        this.appStateStore = appStateStore;
        this.localStorage = localStorage;
        this.configs = configs;
        this.baseRoute = baseRoute;
        this.notificationStore = notificationStore;
        this.isUserLoggedIn = new BehaviorSubject(false);
        this.currentUserSubject = new BehaviorSubject({});
        this.currentUser$ = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());
    }
    isLoggedIn() {
        return this.isUserLoggedIn.value;
    }
    getCurrentUser() {
        return this.currentUserSubject.value;
    }
    setCurrentUser(data) {
        this.appStateStore.setCurrentUser(data);
        this.currentUserSubject.next(data);
        this.isUserLoggedIn.next(true);
    }
    doLogin(username, password, onSuccess, onError, onTwoFactor) {
        let loginUrl = 'login';
        loginUrl = this.baseRoute.appendNativeAuth(loginUrl);
        loginUrl = this.baseRoute.calculateRoute(loginUrl);
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http.post(loginUrl, {
            username,
            password
        }, { headers }).subscribe((response) => {
            if (response?.two_factor_complete === 'false') {
                this.isUserLoggedIn.next(false);
                onTwoFactor(response);
                return;
            }
            if (this.baseRoute.isNativeAuth()) {
                window.location.href = this.baseRoute.removeNativeAuth();
            }
            this.appStateStore.updateInitialAppLoading(true);
            onSuccess(response);
            this.isUserLoggedIn.next(true);
            this.setCurrentUser(response);
            setTimeout(() => {
                this.notificationStore.enableNotifications();
                this.notificationStore.refreshNotifications();
            }, 2000);
        }, (error) => {
            onError(error);
        });
    }
    /**
     * Logout user
     *
     * @param {string} messageKey of message to display
     * @param {boolean} redirect to home
     */
    logout(messageKey = 'LBL_LOGOUT_SUCCESS', redirect = true) {
        this.appStateStore.updateLoading('logout', true, false);
        const logoutConfig = this.configs.getConfigValue('logout') ?? [];
        let logoutUrl = (logoutConfig?.path ?? 'logout');
        let redirectLogout = isTrue(logoutConfig?.redirect ?? false);
        const afterLogoutPath = (logoutConfig?.after_logout_path ?? './');
        if (this.baseRoute.isNativeAuth()) {
            logoutUrl = this.baseRoute.getNativeOutLogoutUrl();
            redirectLogout = false;
        }
        logoutUrl = this.baseRoute.calculateRoute(logoutUrl);
        const body = new HttpParams();
        const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
        if (this.appStateStore.getActiveRequests() < 1) {
            this.callLogout(logoutUrl, body, headers, redirect, messageKey, redirectLogout, afterLogoutPath);
        }
        else {
            this.appStateStore.activeRequests$.pipe(filter(value => value < 1), take(1)).subscribe(() => {
                this.callLogout(logoutUrl, body, headers, redirect, messageKey, redirectLogout, afterLogoutPath);
            });
        }
    }
    enable2fa() {
        let route = './2fa/enable';
        route = this.baseRoute.appendNativeAuth(route);
        route = this.baseRoute.calculateRoute(route);
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http.get(route, { headers });
    }
    disable2fa() {
        let route = './2fa/disable';
        route = this.baseRoute.appendNativeAuth(route);
        route = this.baseRoute.calculateRoute(route);
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http.get(route, { headers });
    }
    check2fa(code) {
        let route = './2fa_check';
        console.log("check2fa" + code);
        route = this.baseRoute.appendNativeAuth(route);
        route = this.baseRoute.calculateRoute(route);
        const headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
        });
        console.log(code);
        return this.http.post(route, { _auth_code: code }, { headers: headers });
    }
    verifyOtp(code) {
        console.log("verifyOtp" + code);
        return of({
            "login_success": true,
            "two_factor_complete": true
        });
    }
    finalize2fa(code) {
        let route = './2fa/enable-finalize';
        route = this.baseRoute.appendNativeAuth(route);
        route = this.baseRoute.calculateRoute(route);
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        const body = JSON.stringify({ _auth_code: code });
        return this.http.post(route, { auth_code: code }, { headers: headers });
    }
    setLanguage(result) {
        this.languageStore.setSessionLanguage()
            .pipe(catchError(() => of({})))
            .subscribe(() => {
            if (result && result.redirect && result.redirect.route) {
                this.router.navigate([result.redirect.route], {
                    queryParams: result.redirect.queryParams ?? {}
                }).then();
                return;
            }
            if (this.appStateStore.getPreLoginUrl()) {
                this.router.navigateByUrl(this.appStateStore.getPreLoginUrl()).then(() => {
                    this.appStateStore.setPreLoginUrl('');
                });
                return;
            }
            const defaultModule = this.configs.getHomePage();
            this.router.navigate(['/' + defaultModule]).then();
        });
        if (this.configs.getConfigValue('login_language')) {
            this.languageStore.setUserLanguage().subscribe();
        }
        return;
    }
    /**
     * Call logout
     * @param logoutUrl
     * @param body
     * @param headers
     * @param redirect
     * @param messageKey
     * @param redirectLogout
     * @protected
     */
    callLogout(logoutUrl, body, headers, redirect, messageKey, redirectLogout, afterLogoutPath) {
        this.resetState();
        if (redirectLogout) {
            window.location.href = logoutUrl;
            return;
        }
        this.http.post(logoutUrl, body.toString(), { headers, responseType: 'text' })
            .pipe(take(1), catchError(err => {
            this.message.log('Logout failed');
            return throwError(err);
        }), finalize(() => {
            this.appStateStore.updateInitialAppLoading(true);
            this.appStateStore.updateLoading('logout', false, false);
            this.appStateStore.setCurrentUser(null);
            this.stateManager.clearAuthBased();
            this.configs.clear();
            if (redirect === true) {
                window.location.href = afterLogoutPath;
            }
        }))
            .subscribe(() => {
            this.message.log('Logout success');
            if (!isEmptyString(messageKey)) {
                this.message.addSuccessMessageByKey(messageKey);
            }
        }, () => {
            this.message.log('Error on logout');
            if (!isEmptyString(messageKey)) {
                this.message.addSuccessMessageByKey(messageKey);
            }
        });
    }
    /**
     * On logout state reset
     */
    resetState() {
        this.stateManager.clearAuthBased();
        this.localStorage.clear();
        this.isUserLoggedIn.next(false);
    }
    /**
     * Fetch session status from backend
     *
     * @returns {{}} Observable<SessionStatus>
     */
    fetchSessionStatus() {
        let url = 'session-status';
        url = this.baseRoute.appendNativeAuth(url);
        url = this.baseRoute.calculateRoute(url);
        const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
        return this.http.get(url, { headers });
    }
    /**
     * Authorize user session
     *
     * @returns {object} Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
     * @param {ActivatedRouteSnapshot} route information about the current route
     * @param snapshot
     */
    authorizeUserSession(route, snapshot) {
        if (this.isUserLoggedIn.value && route.data.checkSession !== true) {
            return of(true);
        }
        let sessionExpiredUrl = this.getSessionExpiredRoute();
        const redirect = this.sessionExpiredRedirect();
        const sessionExpiredUrlTree = this.router.parseUrl(sessionExpiredUrl);
        return this.fetchSessionStatus()
            .pipe(take(1), map((user) => {
            const isLoginWizardCompleted = user.appStatus.loginWizardCompleted ?? false;
            this.appStateStore.setLoginWizardComplete(isLoginWizardCompleted);
            if (user && user.appStatus.installed === false) {
                return this.router.parseUrl('install');
            }
            if (user && user.active === true) {
                const wasLoggedIn = !!this.appStateStore.getCurrentUser();
                this.setCurrentUser(user);
                if (!wasLoggedIn) {
                    this.languageStore.appStrings$.pipe(filter(appStrings => appStrings && !emptyObject(appStrings)), tap(() => {
                        setTimeout(() => {
                            this.notificationStore.enableNotifications();
                            this.notificationStore.refreshNotifications();
                        }, 2000);
                    }), take(1)).subscribe();
                }
                if (user?.redirect?.route && (!snapshot.url.includes(user.redirect.route))) {
                    const redirectUrlTree = this.router.parseUrl(user.redirect.route);
                    redirectUrlTree.queryParams = user?.redirect?.queryParams ?? {};
                    return redirectUrlTree;
                }
                return true;
            }
            this.appStateStore.setPreLoginUrl(snapshot.url);
            this.resetState();
            if (redirect) {
                this.handleSessionExpiredRedirect();
                return false;
            }
            // Re-direct to login
            return sessionExpiredUrlTree;
        }), catchError(() => {
            if (redirect) {
                this.handleSessionExpiredRedirect();
                return of(false);
            }
            this.logout('LBL_SESSION_EXPIRED', false);
            return of(sessionExpiredUrlTree);
        }), tap((result) => {
            if (result === true) {
                this.isUserLoggedIn.next(true);
            }
        }));
    }
    /**
     * Get route for session expired handling
     * @return string
     */
    getSessionExpiredRoute() {
        const sessionExpiredConfig = this.configs.getConfigValue('session-expired') ?? [];
        return (sessionExpiredConfig?.path ?? 'Login');
    }
    /**
     * Handle invalid session on request
     * @return boolean
     */
    handleInvalidSession(message) {
        const redirect = this.sessionExpiredRedirect();
        if (redirect) {
            this.handleSessionExpiredRedirect();
            return;
        }
        this.logout(message);
    }
    /**
     * Redirect to route configured for session expiry
     */
    handleSessionExpiredRedirect() {
        window.location.href = this.getSessionExpiredRoute();
    }
    /**
     * Is to re-direct on session expiry
     * @return boolean
     */
    sessionExpiredRedirect() {
        const sessionExpiredConfig = this.configs.getConfigValue('session-expired') ?? [];
        return isTrue(sessionExpiredConfig?.redirect ?? false);
    }
    static { this.ɵfac = function AuthService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AuthService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.Router), i0.ɵɵinject(i3.MessageService), i0.ɵɵinject(i4.StateManager), i0.ɵɵinject(i5.LanguageStore), i0.ɵɵinject(i6.AppStateStore), i0.ɵɵinject(i7.LocalStorageService), i0.ɵɵinject(i8.SystemConfigStore), i0.ɵɵinject(i9.BaseRouteService), i0.ɵɵinject(i10.NotificationStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.HttpClient }, { type: i2.Router }, { type: i3.MessageService }, { type: i4.StateManager }, { type: i5.LanguageStore }, { type: i6.AppStateStore }, { type: i7.LocalStorageService }, { type: i8.SystemConfigStore }, { type: i9.BaseRouteService }, { type: i10.NotificationStore }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3NlcnZpY2VzL2F1dGgvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBeUIsTUFBTSxFQUErQixNQUFNLGlCQUFpQixDQUFDO0FBQzdGLE9BQU8sRUFBQyxVQUFVLEVBQXFCLFdBQVcsRUFBRSxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUM1RixPQUFPLEVBQUMsZUFBZSxFQUFjLEVBQUUsRUFBZ0IsVUFBVSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQy9FLE9BQU8sRUFBQyxVQUFVLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRWxHLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUM1RCxPQUFPLEVBQUMsYUFBYSxFQUFFLE1BQU0sRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ3JFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUMxRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUNwRSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx3Q0FBd0MsQ0FBQztBQUMzRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUNoRixPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFB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LFdBQVcsV0FBWCxXQUFXLG1CQUZSLE1BQU07O2lGQUVULFdBQVc7Y0FIdkIsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXIsIFJvdXRlclN0YXRlU25hcHNob3QsIFVybFRyZWV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge0h0dHBDbGllbnQsIEh0dHBFcnJvclJlc3BvbnNlLCBIdHRwSGVhZGVycywgSHR0cFBhcmFtc30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIG9mLCBTdWJzY3JpcHRpb24sIHRocm93RXJyb3J9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtjYXRjaEVycm9yLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBmaW5hbGl6ZSwgbWFwLCB0YWtlLCB0YXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7VXNlcn0gZnJvbSAnLi4vLi4vY29tbW9uL3R5cGVzL3VzZXInO1xuaW1wb3J0IHtlbXB0eU9iamVjdH0gZnJvbSAnLi4vLi4vY29tbW9uL3V0aWxzL29iamVjdC11dGlscyc7XG5pbXBvcnQge2lzRW1wdHlTdHJpbmcsIGlzVHJ1ZX0gZnJvbSAnLi4vLi4vY29tbW9uL3V0aWxzL3ZhbHVlLXV0aWxzJztcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gJy4uL21lc3NhZ2UvbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7U3RhdGVNYW5hZ2VyfSBmcm9tICcuLi8uLi9zdG9yZS9zdGF0ZS1tYW5hZ2VyJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZX0gZnJvbSAnLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtBcHBTdGF0ZVN0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS9hcHAtc3RhdGUvYXBwLXN0YXRlLnN0b3JlJztcbmltcG9ydCB7TG9jYWxTdG9yYWdlU2VydmljZX0gZnJvbSAnLi4vbG9jYWwtc3RvcmFnZS9sb2NhbC1zdG9yYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHtTeXN0ZW1Db25maWdTdG9yZX0gZnJvbSAnLi4vLi4vc3RvcmUvc3lzdGVtLWNvbmZpZy9zeXN0ZW0tY29uZmlnLnN0b3JlJztcbmltcG9ydCB7QmFzZVJvdXRlU2VydmljZX0gZnJvbSBcIi4uL2Jhc2Utcm91dGUvYmFzZS1yb3V0ZS5zZXJ2aWNlXCI7XG5pbXBvcnQge05vdGlmaWNhdGlvblN0b3JlfSBmcm9tIFwiLi4vLi4vc3RvcmUvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5zdG9yZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlc3Npb25TdGF0dXMge1xuICAgIGFwcFN0YXR1cz86IEFwcFN0YXR1cztcbiAgICBhY3RpdmU/OiBib29sZWFuO1xuICAgIGlkPzogc3RyaW5nO1xuICAgIGZpcnN0TmFtZT86IHN0cmluZztcbiAgICBsYXN0TmFtZT86IHN0cmluZztcbiAgICByZWRpcmVjdD86IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBTdGF0dXMge1xuICAgIGluc3RhbGxlZD86IGJvb2xlYW47XG4gICAgbG9ja2VkPzogYm9vbGVhbjtcbiAgICBsb2dpbldpemFyZENvbXBsZXRlZD86IGJvb2xlYW47XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuXG4gICAgY3VycmVudFVzZXIkOiBPYnNlcnZhYmxlPFVzZXI+O1xuICAgIGlzVXNlckxvZ2dlZEluOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcbiAgICBwcm90ZWN0ZWQgY3VycmVudFVzZXJTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxVc2VyPih7fSBhcyBVc2VyKTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCxcbiAgICAgICAgcHJvdGVjdGVkIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwcm90ZWN0ZWQgbWVzc2FnZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBzdGF0ZU1hbmFnZXI6IFN0YXRlTWFuYWdlcixcbiAgICAgICAgcHJvdGVjdGVkIGxhbmd1YWdlU3RvcmU6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBhcHBTdGF0ZVN0b3JlOiBBcHBTdGF0ZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbG9jYWxTdG9yYWdlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgY29uZmlnczogU3lzdGVtQ29uZmlnU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBiYXNlUm91dGU6IEJhc2VSb3V0ZVNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBub3RpZmljYXRpb25TdG9yZTogTm90aWZpY2F0aW9uU3RvcmVcbiAgICApIHtcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlciQgPSB0aGlzLmN1cnJlbnRVc2VyU3ViamVjdC5hc09ic2VydmFibGUoKS5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICAgIH1cblxuICAgIGlzTG9nZ2VkSW4oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzVXNlckxvZ2dlZEluLnZhbHVlO1xuICAgIH1cblxuICAgIGdldEN1cnJlbnRVc2VyKCk6IFVzZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50VXNlclN1YmplY3QudmFsdWU7XG4gICAgfVxuXG4gICAgc2V0Q3VycmVudFVzZXIoZGF0YSk6IHZvaWQge1xuICAgICAgICB0aGlzLmFwcFN0YXRlU3RvcmUuc2V0Q3VycmVudFVzZXIoZGF0YSk7XG4gICAgICAgIHRoaXMuY3VycmVudFVzZXJTdWJqZWN0Lm5leHQoZGF0YSk7XG4gICAgICAgIHRoaXMuaXNVc2VyTG9nZ2VkSW4ubmV4dCh0cnVlKTtcbiAgICB9XG5cbiAgICBkb0xvZ2luKFxuICAgICAgICB1c2VybmFtZTogc3RyaW5nLFxuICAgICAgICBwYXNzd29yZDogc3RyaW5nLFxuICAgICAgICBvblN1Y2Nlc3M6IChyZXNwb25zZTogc3RyaW5nKSA9PiB2b2lkLFxuICAgICAgICBvbkVycm9yOiAoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB2b2lkLFxuICAgICAgICBvblR3b0ZhY3RvcjogKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4gdm9pZFxuICAgICk6IFN1YnNjcmlwdGlvbiB7XG4gICAgICAgIGxldCBsb2dpblVybCA9ICdsb2dpbic7XG4gICAgICAgIGxvZ2luVXJsID0gdGhpcy5iYXNlUm91dGUuYXBwZW5kTmF0aXZlQXV0aChsb2dpblVybCk7XG4gICAgICAgIGxvZ2luVXJsID0gdGhpcy5iYXNlUm91dGUuY2FsY3VsYXRlUm91dGUobG9naW5VcmwpO1xuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcbiAgICAgICAgICAgIGxvZ2luVXJsLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge2hlYWRlcnN9XG4gICAgICAgICkuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZT8udHdvX2ZhY3Rvcl9jb21wbGV0ZSA9PT0gJ2ZhbHNlJykge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNVc2VyTG9nZ2VkSW4ubmV4dChmYWxzZSk7XG4gICAgICAgICAgICAgICAgb25Ud29GYWN0b3IocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuYmFzZVJvdXRlLmlzTmF0aXZlQXV0aCgpKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLmJhc2VSb3V0ZS5yZW1vdmVOYXRpdmVBdXRoKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuYXBwU3RhdGVTdG9yZS51cGRhdGVJbml0aWFsQXBwTG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgIG9uU3VjY2VzcyhyZXNwb25zZSk7XG4gICAgICAgICAgICB0aGlzLmlzVXNlckxvZ2dlZEluLm5leHQodHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLnNldEN1cnJlbnRVc2VyKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uU3RvcmUuZW5hYmxlTm90aWZpY2F0aW9ucygpO1xuICAgICAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uU3RvcmUucmVmcmVzaE5vdGlmaWNhdGlvbnMoKTtcbiAgICAgICAgICAgIH0sIDIwMDApO1xuXG4gICAgICAgIH0sIChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIG9uRXJyb3IoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2dvdXQgdXNlclxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VLZXkgb2YgbWVzc2FnZSB0byBkaXNwbGF5XG4gICAgICogQHBhcmFtIHtib29sZWFufSByZWRpcmVjdCB0byBob21lXG4gICAgICovXG4gICAgcHVibGljIGxvZ291dChtZXNzYWdlS2V5ID0gJ0xCTF9MT0dPVVRfU1VDQ0VTUycsIHJlZGlyZWN0ID0gdHJ1ZSk6IHZvaWQge1xuICAgICAgICB0aGlzLmFwcFN0YXRlU3RvcmUudXBkYXRlTG9hZGluZygnbG9nb3V0JywgdHJ1ZSwgZmFsc2UpO1xuXG4gICAgICAgIGNvbnN0IGxvZ291dENvbmZpZyA9IHRoaXMuY29uZmlncy5nZXRDb25maWdWYWx1ZSgnbG9nb3V0JykgPz8gW107XG4gICAgICAgIGxldCBsb2dvdXRVcmwgPSAobG9nb3V0Q29uZmlnPy5wYXRoID8/ICdsb2dvdXQnKSBhcyBzdHJpbmc7XG4gICAgICAgIGxldCByZWRpcmVjdExvZ291dCA9IGlzVHJ1ZShsb2dvdXRDb25maWc/LnJlZGlyZWN0ID8/IGZhbHNlKTtcbiAgICAgICAgY29uc3QgYWZ0ZXJMb2dvdXRQYXRoID0gKGxvZ291dENvbmZpZz8uYWZ0ZXJfbG9nb3V0X3BhdGggPz8gJy4vJykgYXMgc3RyaW5nO1xuXG4gICAgICAgIGlmICh0aGlzLmJhc2VSb3V0ZS5pc05hdGl2ZUF1dGgoKSkge1xuICAgICAgICAgICAgbG9nb3V0VXJsID0gdGhpcy5iYXNlUm91dGUuZ2V0TmF0aXZlT3V0TG9nb3V0VXJsKCk7XG4gICAgICAgICAgICByZWRpcmVjdExvZ291dCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgbG9nb3V0VXJsID0gdGhpcy5iYXNlUm91dGUuY2FsY3VsYXRlUm91dGUobG9nb3V0VXJsKTtcbiAgICAgICAgY29uc3QgYm9keSA9IG5ldyBIdHRwUGFyYW1zKCk7XG5cbiAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpLnNldCgnQ29udGVudC1UeXBlJywgJ3RleHQvcGxhaW47IGNoYXJzZXQ9dXRmLTgnKTtcblxuICAgICAgICBpZiAodGhpcy5hcHBTdGF0ZVN0b3JlLmdldEFjdGl2ZVJlcXVlc3RzKCkgPCAxKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxMb2dvdXQobG9nb3V0VXJsLCBib2R5LCBoZWFkZXJzLCByZWRpcmVjdCwgbWVzc2FnZUtleSwgcmVkaXJlY3RMb2dvdXQsIGFmdGVyTG9nb3V0UGF0aCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFwcFN0YXRlU3RvcmUuYWN0aXZlUmVxdWVzdHMkLnBpcGUoXG4gICAgICAgICAgICAgICAgZmlsdGVyKHZhbHVlID0+IHZhbHVlIDwgMSksXG4gICAgICAgICAgICAgICAgdGFrZSgxKVxuICAgICAgICAgICAgKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGxMb2dvdXQobG9nb3V0VXJsLCBib2R5LCBoZWFkZXJzLCByZWRpcmVjdCwgbWVzc2FnZUtleSwgcmVkaXJlY3RMb2dvdXQsIGFmdGVyTG9nb3V0UGF0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGVuYWJsZTJmYSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICBsZXQgcm91dGUgPSAnLi8yZmEvZW5hYmxlJztcbiAgICAgICAgcm91dGUgPSB0aGlzLmJhc2VSb3V0ZS5hcHBlbmROYXRpdmVBdXRoKHJvdXRlKTtcblxuICAgICAgICByb3V0ZSA9IHRoaXMuYmFzZVJvdXRlLmNhbGN1bGF0ZVJvdXRlKHJvdXRlKTtcblxuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHJvdXRlLCB7aGVhZGVyc30pO1xuICAgIH1cblxuICAgIHB1YmxpYyBkaXNhYmxlMmZhKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIGxldCByb3V0ZSA9ICcuLzJmYS9kaXNhYmxlJztcbiAgICAgICAgcm91dGUgPSB0aGlzLmJhc2VSb3V0ZS5hcHBlbmROYXRpdmVBdXRoKHJvdXRlKTtcblxuICAgICAgICByb3V0ZSA9IHRoaXMuYmFzZVJvdXRlLmNhbGN1bGF0ZVJvdXRlKHJvdXRlKTtcblxuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHJvdXRlLCB7aGVhZGVyc30pO1xuICAgIH1cblxuICAgIHB1YmxpYyBjaGVjazJmYShjb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgICAgIGxldCByb3V0ZSA9ICcuLzJmYV9jaGVjayc7XG4gICAgICAgICBjb25zb2xlLmxvZyhcImNoZWNrMmZhXCIgKyBjb2RlKTtcblxuICAgICAgICByb3V0ZSA9IHRoaXMuYmFzZVJvdXRlLmFwcGVuZE5hdGl2ZUF1dGgocm91dGUpO1xuICAgICAgICByb3V0ZSA9IHRoaXMuYmFzZVJvdXRlLmNhbGN1bGF0ZVJvdXRlKHJvdXRlKTtcblxuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhjb2RlKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Qocm91dGUsIHtfYXV0aF9jb2RlOiBjb2RlfSwge2hlYWRlcnM6IGhlYWRlcnN9KTtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIHZlcmlmeU90cChjb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcInZlcmlmeU90cFwiICsgY29kZSk7XG4gICAgICAgIHJldHVybiBvZih7XG4gICAgICAgICAgICBcImxvZ2luX3N1Y2Nlc3NcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwidHdvX2ZhY3Rvcl9jb21wbGV0ZVwiOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBmaW5hbGl6ZTJmYShjb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgICAgIGxldCByb3V0ZSA9ICcuLzJmYS9lbmFibGUtZmluYWxpemUnO1xuXG4gICAgICAgIHJvdXRlID0gdGhpcy5iYXNlUm91dGUuYXBwZW5kTmF0aXZlQXV0aChyb3V0ZSk7XG4gICAgICAgIHJvdXRlID0gdGhpcy5iYXNlUm91dGUuY2FsY3VsYXRlUm91dGUocm91dGUpO1xuXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHtfYXV0aF9jb2RlOiBjb2RlfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHJvdXRlLCB7YXV0aF9jb2RlOiBjb2RlfSwge2hlYWRlcnM6IGhlYWRlcnN9KTtcbiAgICB9XG5cbiAgICBzZXRMYW5ndWFnZShyZXN1bHQ6IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmxhbmd1YWdlU3RvcmUuc2V0U2Vzc2lvbkxhbmd1YWdlKClcbiAgICAgICAgICAgIC5waXBlKGNhdGNoRXJyb3IoKCkgPT4gb2Yoe30pKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnJlZGlyZWN0ICYmIHJlc3VsdC5yZWRpcmVjdC5yb3V0ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIFtyZXN1bHQucmVkaXJlY3Qucm91dGVdLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiByZXN1bHQucmVkaXJlY3QucXVlcnlQYXJhbXMgPz8ge31cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFwcFN0YXRlU3RvcmUuZ2V0UHJlTG9naW5VcmwoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMuYXBwU3RhdGVTdG9yZS5nZXRQcmVMb2dpblVybCgpKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwU3RhdGVTdG9yZS5zZXRQcmVMb2dpblVybCgnJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgZGVmYXVsdE1vZHVsZSA9IHRoaXMuY29uZmlncy5nZXRIb21lUGFnZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLycgKyBkZWZhdWx0TW9kdWxlXSkudGhlbigpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlncy5nZXRDb25maWdWYWx1ZSgnbG9naW5fbGFuZ3VhZ2UnKSkge1xuICAgICAgICAgICAgdGhpcy5sYW5ndWFnZVN0b3JlLnNldFVzZXJMYW5ndWFnZSgpLnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsIGxvZ291dFxuICAgICAqIEBwYXJhbSBsb2dvdXRVcmxcbiAgICAgKiBAcGFyYW0gYm9keVxuICAgICAqIEBwYXJhbSBoZWFkZXJzXG4gICAgICogQHBhcmFtIHJlZGlyZWN0XG4gICAgICogQHBhcmFtIG1lc3NhZ2VLZXlcbiAgICAgKiBAcGFyYW0gcmVkaXJlY3RMb2dvdXRcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGNhbGxMb2dvdXQoXG4gICAgICAgIGxvZ291dFVybDogc3RyaW5nLFxuICAgICAgICBib2R5OiBIdHRwUGFyYW1zLFxuICAgICAgICBoZWFkZXJzOiBIdHRwSGVhZGVycyxcbiAgICAgICAgcmVkaXJlY3Q6IGJvb2xlYW4sXG4gICAgICAgIG1lc3NhZ2VLZXk6IHN0cmluZyxcbiAgICAgICAgcmVkaXJlY3RMb2dvdXQ6IGJvb2xlYW4sXG4gICAgICAgIGFmdGVyTG9nb3V0UGF0aDogc3RyaW5nXG4gICAgKSB7XG4gICAgICAgIHRoaXMucmVzZXRTdGF0ZSgpO1xuXG4gICAgICAgIGlmIChyZWRpcmVjdExvZ291dCkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBsb2dvdXRVcmw7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5odHRwLnBvc3QobG9nb3V0VXJsLCBib2R5LnRvU3RyaW5nKCksIHtoZWFkZXJzLCByZXNwb25zZVR5cGU6ICd0ZXh0J30pXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICB0YWtlKDEpLFxuICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlLmxvZygnTG9nb3V0IGZhaWxlZCcpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIGZpbmFsaXplKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBTdGF0ZVN0b3JlLnVwZGF0ZUluaXRpYWxBcHBMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcFN0YXRlU3RvcmUudXBkYXRlTG9hZGluZygnbG9nb3V0JywgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBTdGF0ZVN0b3JlLnNldEN1cnJlbnRVc2VyKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlTWFuYWdlci5jbGVhckF1dGhCYXNlZCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ3MuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlZGlyZWN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFmdGVyTG9nb3V0UGF0aDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlLmxvZygnTG9nb3V0IHN1Y2Nlc3MnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0VtcHR5U3RyaW5nKG1lc3NhZ2VLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UuYWRkU3VjY2Vzc01lc3NhZ2VCeUtleShtZXNzYWdlS2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UubG9nKCdFcnJvciBvbiBsb2dvdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0VtcHR5U3RyaW5nKG1lc3NhZ2VLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UuYWRkU3VjY2Vzc01lc3NhZ2VCeUtleShtZXNzYWdlS2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT24gbG9nb3V0IHN0YXRlIHJlc2V0XG4gICAgICovXG4gICAgcHVibGljIHJlc2V0U3RhdGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RhdGVNYW5hZ2VyLmNsZWFyQXV0aEJhc2VkKCk7XG4gICAgICAgIHRoaXMubG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuaXNVc2VyTG9nZ2VkSW4ubmV4dChmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmV0Y2ggc2Vzc2lvbiBzdGF0dXMgZnJvbSBiYWNrZW5kXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7e319IE9ic2VydmFibGU8U2Vzc2lvblN0YXR1cz5cbiAgICAgKi9cbiAgICBwdWJsaWMgZmV0Y2hTZXNzaW9uU3RhdHVzKCk6IE9ic2VydmFibGU8U2Vzc2lvblN0YXR1cz4ge1xuXG4gICAgICAgIGxldCB1cmwgPSAnc2Vzc2lvbi1zdGF0dXMnO1xuICAgICAgICB1cmwgPSB0aGlzLmJhc2VSb3V0ZS5hcHBlbmROYXRpdmVBdXRoKHVybCk7XG4gICAgICAgIHVybCA9IHRoaXMuYmFzZVJvdXRlLmNhbGN1bGF0ZVJvdXRlKHVybCk7XG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKS5zZXQoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L3BsYWluOyBjaGFyc2V0PXV0Zi04Jyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsLCB7aGVhZGVyc30pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEF1dGhvcml6ZSB1c2VyIHNlc3Npb25cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHwgUHJvbWlzZTxib29sZWFuIHwgVXJsVHJlZT4gfCBib29sZWFuIHwgVXJsVHJlZVxuICAgICAqIEBwYXJhbSB7QWN0aXZhdGVkUm91dGVTbmFwc2hvdH0gcm91dGUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGN1cnJlbnQgcm91dGVcbiAgICAgKiBAcGFyYW0gc25hcHNob3RcbiAgICAgKi9cbiAgICBwdWJsaWMgYXV0aG9yaXplVXNlclNlc3Npb24ocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHNuYXBzaG90OiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4ge1xuXG4gICAgICAgIGlmICh0aGlzLmlzVXNlckxvZ2dlZEluLnZhbHVlICYmIHJvdXRlLmRhdGEuY2hlY2tTZXNzaW9uICE9PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gb2YodHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc2Vzc2lvbkV4cGlyZWRVcmwgPSB0aGlzLmdldFNlc3Npb25FeHBpcmVkUm91dGUoKTtcbiAgICAgICAgY29uc3QgcmVkaXJlY3QgPSB0aGlzLnNlc3Npb25FeHBpcmVkUmVkaXJlY3QoKTtcblxuICAgICAgICBjb25zdCBzZXNzaW9uRXhwaXJlZFVybFRyZWU6IFVybFRyZWUgPSB0aGlzLnJvdXRlci5wYXJzZVVybChzZXNzaW9uRXhwaXJlZFVybCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZmV0Y2hTZXNzaW9uU3RhdHVzKClcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICAgICAgICAgbWFwKCh1c2VyOiBTZXNzaW9uU3RhdHVzKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNMb2dpbldpemFyZENvbXBsZXRlZCA9IHVzZXIuYXBwU3RhdHVzLmxvZ2luV2l6YXJkQ29tcGxldGVkID8/IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcFN0YXRlU3RvcmUuc2V0TG9naW5XaXphcmRDb21wbGV0ZShpc0xvZ2luV2l6YXJkQ29tcGxldGVkKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodXNlciAmJiB1c2VyLmFwcFN0YXR1cy5pbnN0YWxsZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZXIucGFyc2VVcmwoJ2luc3RhbGwnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh1c2VyICYmIHVzZXIuYWN0aXZlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB3YXNMb2dnZWRJbiA9ICEhdGhpcy5hcHBTdGF0ZVN0b3JlLmdldEN1cnJlbnRVc2VyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEN1cnJlbnRVc2VyKHVzZXIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXdhc0xvZ2dlZEluKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5ndWFnZVN0b3JlLmFwcFN0cmluZ3MkLnBpcGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcihhcHBTdHJpbmdzID0+IGFwcFN0cmluZ3MgJiYgIWVtcHR5T2JqZWN0KGFwcFN0cmluZ3MpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFwKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uU3RvcmUuZW5hYmxlTm90aWZpY2F0aW9ucygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uU3RvcmUucmVmcmVzaE5vdGlmaWNhdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFrZSgxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1c2VyPy5yZWRpcmVjdD8ucm91dGUgJiYgKCFzbmFwc2hvdC51cmwuaW5jbHVkZXModXNlci5yZWRpcmVjdC5yb3V0ZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVkaXJlY3RVcmxUcmVlOiBVcmxUcmVlID0gdGhpcy5yb3V0ZXIucGFyc2VVcmwodXNlci5yZWRpcmVjdC5yb3V0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RVcmxUcmVlLnF1ZXJ5UGFyYW1zID0gdXNlcj8ucmVkaXJlY3Q/LnF1ZXJ5UGFyYW1zID8/IHt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZGlyZWN0VXJsVHJlZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBTdGF0ZVN0b3JlLnNldFByZUxvZ2luVXJsKHNuYXBzaG90LnVybCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRTdGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWRpcmVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVTZXNzaW9uRXhwaXJlZFJlZGlyZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBSZS1kaXJlY3QgdG8gbG9naW5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlc3Npb25FeHBpcmVkVXJsVHJlZTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBjYXRjaEVycm9yKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlZGlyZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVNlc3Npb25FeHBpcmVkUmVkaXJlY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvZihmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ291dCgnTEJMX1NFU1NJT05fRVhQSVJFRCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKHNlc3Npb25FeHBpcmVkVXJsVHJlZSk7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgdGFwKChyZXN1bHQ6IGJvb2xlYW4gfCBVcmxUcmVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNVc2VyTG9nZ2VkSW4ubmV4dCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCByb3V0ZSBmb3Igc2Vzc2lvbiBleHBpcmVkIGhhbmRsaW5nXG4gICAgICogQHJldHVybiBzdHJpbmdcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0U2Vzc2lvbkV4cGlyZWRSb3V0ZSgpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBzZXNzaW9uRXhwaXJlZENvbmZpZyA9IHRoaXMuY29uZmlncy5nZXRDb25maWdWYWx1ZSgnc2Vzc2lvbi1leHBpcmVkJykgPz8gW107XG4gICAgICAgIHJldHVybiAoc2Vzc2lvbkV4cGlyZWRDb25maWc/LnBhdGggPz8gJ0xvZ2luJykgYXMgc3RyaW5nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBpbnZhbGlkIHNlc3Npb24gb24gcmVxdWVzdFxuICAgICAqIEByZXR1cm4gYm9vbGVhblxuICAgICAqL1xuICAgIHB1YmxpYyBoYW5kbGVJbnZhbGlkU2Vzc2lvbihtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcmVkaXJlY3QgPSB0aGlzLnNlc3Npb25FeHBpcmVkUmVkaXJlY3QoKVxuXG4gICAgICAgIGlmIChyZWRpcmVjdCkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVTZXNzaW9uRXhwaXJlZFJlZGlyZWN0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvZ291dChtZXNzYWdlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWRpcmVjdCB0byByb3V0ZSBjb25maWd1cmVkIGZvciBzZXNzaW9uIGV4cGlyeVxuICAgICAqL1xuICAgIHB1YmxpYyBoYW5kbGVTZXNzaW9uRXhwaXJlZFJlZGlyZWN0KCk6IHZvaWQge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMuZ2V0U2Vzc2lvbkV4cGlyZWRSb3V0ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElzIHRvIHJlLWRpcmVjdCBvbiBzZXNzaW9uIGV4cGlyeVxuICAgICAqIEByZXR1cm4gYm9vbGVhblxuICAgICAqL1xuICAgIHB1YmxpYyBzZXNzaW9uRXhwaXJlZFJlZGlyZWN0KCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBzZXNzaW9uRXhwaXJlZENvbmZpZyA9IHRoaXMuY29uZmlncy5nZXRDb25maWdWYWx1ZSgnc2Vzc2lvbi1leHBpcmVkJykgPz8gW107XG4gICAgICAgIHJldHVybiBpc1RydWUoc2Vzc2lvbkV4cGlyZWRDb25maWc/LnJlZGlyZWN0ID8/IGZhbHNlKTtcbiAgICB9XG59XG4iXX0=