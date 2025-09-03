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
import { Router, UrlTree } from '@angular/router';
import { forkJoin, of } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { AsyncActionService } from '../process/processes/async-action/async-action';
import { AppStateStore } from '../../store/app-state/app-state.store';
import { RouteConverter } from '../navigation/route-converter/route-converter.service';
import { isEmptyString } from '../../common/utils/value-utils';
import { LanguageStore } from '../../store/language/language.store';
import { NotificationStore } from '../../store/notification/notification.store';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./auth.service";
import * as i3 from "../process/processes/async-action/async-action";
import * as i4 from "../../store/app-state/app-state.store";
import * as i5 from "../navigation/route-converter/route-converter.service";
import * as i6 from "../../store/language/language.store";
import * as i7 from "../../store/notification/notification.store";
export class AuthGuard {
    constructor(router, authService, asyncActionService, appState, routeConverter, language, notificationStore) {
        this.router = router;
        this.authService = authService;
        this.asyncActionService = asyncActionService;
        this.appState = appState;
        this.routeConverter = routeConverter;
        this.language = language;
        this.notificationStore = notificationStore;
    }
    canActivate(route, snapshot) {
        return this.authorizeUser(route, snapshot);
    }
    /**
     * Authorize user session and acl together in conjunction
     *
     * @returns {object} Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
     * @param {ActivatedRouteSnapshot} route information about the current route
     * @param snapshot
     */
    authorizeUser(route, snapshot) {
        // Note: this session and acl are not always booleans
        return forkJoin([
            this.authService.authorizeUserSession(route, snapshot),
            this.authorizeUserACL(route)
        ]).pipe(map(([session, acl]) => {
            if (session instanceof UrlTree) {
                return session;
            }
            if (acl instanceof UrlTree) {
                return acl;
            }
            if (session && acl) {
                const isLoginWizardCompleted = this.appState.getLoginWizardComplete();
                if (!isLoginWizardCompleted && snapshot.url !== '/users/Wizard') {
                    return this.router.parseUrl('/users/Wizard');
                }
                return true;
            }
            return false;
        }));
    }
    /**
     * Authorize user acl
     *
     * @returns {object} Observable<boolean | UrlTree>
     * @param {ActivatedRouteSnapshot} activatedRoute information about the current route
     */
    authorizeUserACL(activatedRoute) {
        const routeInfo = this.routeConverter.parseRouteURL(activatedRoute.url);
        const routeURL = this.appState.getRouteUrl() ?? '';
        if (!routeInfo.module || routeInfo.module === 'home') {
            return of(true);
        }
        const homeUrl = '';
        const homeUrlTree = this.router.parseUrl(homeUrl);
        const actionName = 'user-acl';
        const asyncData = {
            action: actionName,
            module: routeInfo.module,
            payload: {
                routeAction: routeInfo.action,
                record: routeInfo.record,
                routeURL,
                queryParams: activatedRoute?.queryParams ?? []
            }
        };
        return this.asyncActionService.run(actionName, asyncData)
            .pipe(take(1), map((process) => {
            if (process.data && process.data.result === true) {
                return true;
            }
            if (isEmptyString(routeURL)) {
                // Re-direct to home
                return homeUrlTree;
            }
            const currentUrlTree = this.router.parseUrl(this.router.url);
            if (this.routeConverter.isClassicViewRoute(currentUrlTree)) {
                return currentUrlTree;
            }
            return false;
        }), catchError(() => of(homeUrlTree)));
    }
    static { this.ɵfac = function AuthGuard_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AuthGuard)(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i2.AuthService), i0.ɵɵinject(i3.AsyncActionService), i0.ɵɵinject(i4.AppStateStore), i0.ɵɵinject(i5.RouteConverter), i0.ɵɵinject(i6.LanguageStore), i0.ɵɵinject(i7.NotificationStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthGuard, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.Router }, { type: i2.AuthService }, { type: i3.AsyncActionService }, { type: i4.AppStateStore }, { type: i5.RouteConverter }, { type: i6.LanguageStore }, { type: i7.NotificationStore }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1ndWFyZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3NlcnZpY2VzL2F1dGgvYXV0aC1ndWFyZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBeUIsTUFBTSxFQUF1QixPQUFPLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3RixPQUFPLEVBQUMsUUFBUSxFQUFjLEVBQUUsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUMsVUFBVSxFQUFVLEdBQUcsRUFBRSxJQUFJLEVBQU0sTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUMsV0FBVyxFQUFnQixNQUFNLGdCQUFnQixDQUFDO0FBRTFELE9BQU8sRUFBbUIsa0JBQWtCLEVBQUMsTUFBTSxnREFBZ0QsQ0FBQztBQUNwRyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDcEUsT0FBTyxFQUFDLGNBQWMsRUFBWSxNQUFNLHVEQUF1RCxDQUFDO0FBQ2hHLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU3RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDbEUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7Ozs7Ozs7OztBQUs5RSxNQUFNLE9BQU8sU0FBUztJQUNsQixZQUNjLE1BQWMsRUFDZCxXQUF3QixFQUN4QixrQkFBc0MsRUFDdEMsUUFBdUIsRUFDdkIsY0FBOEIsRUFDOUIsUUFBdUIsRUFDdkIsaUJBQW9DO1FBTnBDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qix1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QUUsQ0FBQztnQkFDL0MsT0FBTyxJQUFJLENBQUM7WUFDaEIsQ0FBQztZQUVELElBQUksYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7Z0JBQzFCLG9CQUFvQjtnQkFDcEIsT0FBTyxXQUFXLENBQUM7WUFDdkIsQ0FBQztZQUVELE1BQU0sY0FBYyxHQUFZLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFdEUsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUM7Z0JBQ3pELE9BQU8sY0FBYyxDQUFDO1lBQzFCLENBQUM7WUFFRCxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDLENBQUMsRUFDRixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQ3BDLENBQUM7SUFDVixDQUFDOzBHQS9HUSxTQUFTO3VFQUFULFNBQVMsV0FBVCxTQUFTLG1CQUZOLE1BQU07O2lGQUVULFNBQVM7Y0FIckIsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXIsIFJvdXRlclN0YXRlU25hcHNob3QsIFVybFRyZWV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge2ZvcmtKb2luLCBPYnNlcnZhYmxlLCBvZn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2NhdGNoRXJyb3IsIGZpbHRlciwgbWFwLCB0YWtlLCB0YXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7QXV0aFNlcnZpY2UsIFNlc3Npb25TdGF0dXN9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7UHJvY2Vzc30gZnJvbSAnLi4vcHJvY2Vzcy9wcm9jZXNzLnNlcnZpY2UnO1xuaW1wb3J0IHtBc3luY0FjdGlvbklucHV0LCBBc3luY0FjdGlvblNlcnZpY2V9IGZyb20gJy4uL3Byb2Nlc3MvcHJvY2Vzc2VzL2FzeW5jLWFjdGlvbi9hc3luYy1hY3Rpb24nO1xuaW1wb3J0IHtBcHBTdGF0ZVN0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS9hcHAtc3RhdGUvYXBwLXN0YXRlLnN0b3JlJztcbmltcG9ydCB7Um91dGVDb252ZXJ0ZXIsIFJvdXRlSW5mb30gZnJvbSAnLi4vbmF2aWdhdGlvbi9yb3V0ZS1jb252ZXJ0ZXIvcm91dGUtY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtpc0VtcHR5U3RyaW5nfSBmcm9tICcuLi8uLi9jb21tb24vdXRpbHMvdmFsdWUtdXRpbHMnO1xuaW1wb3J0IHtlbXB0eU9iamVjdH0gZnJvbSAnLi4vLi4vY29tbW9uL3V0aWxzL29iamVjdC11dGlscyc7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7Tm90aWZpY2F0aW9uU3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uc3RvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhHdWFyZCAge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBhc3luY0FjdGlvblNlcnZpY2U6IEFzeW5jQWN0aW9uU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIGFwcFN0YXRlOiBBcHBTdGF0ZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgcm91dGVDb252ZXJ0ZXI6IFJvdXRlQ29udmVydGVyLFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBub3RpZmljYXRpb25TdG9yZTogTm90aWZpY2F0aW9uU3RvcmVcbiAgICApIHtcbiAgICB9XG5cbiAgICBjYW5BY3RpdmF0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc25hcHNob3Q6IFJvdXRlclN0YXRlU25hcHNob3QpOlxuICAgICAgICBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB8IFByb21pc2U8Ym9vbGVhbiB8IFVybFRyZWU+IHwgYm9vbGVhbiB8IFVybFRyZWUge1xuICAgICAgICByZXR1cm4gdGhpcy5hdXRob3JpemVVc2VyKHJvdXRlLCBzbmFwc2hvdCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXV0aG9yaXplIHVzZXIgc2Vzc2lvbiBhbmQgYWNsIHRvZ2V0aGVyIGluIGNvbmp1bmN0aW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB8IFByb21pc2U8Ym9vbGVhbiB8IFVybFRyZWU+IHwgYm9vbGVhbiB8IFVybFRyZWVcbiAgICAgKiBAcGFyYW0ge0FjdGl2YXRlZFJvdXRlU25hcHNob3R9IHJvdXRlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjdXJyZW50IHJvdXRlXG4gICAgICogQHBhcmFtIHNuYXBzaG90XG4gICAgICovXG4gICAgcHJvdGVjdGVkIGF1dGhvcml6ZVVzZXIocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHNuYXBzaG90OiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4gfCBQcm9taXNlPGJvb2xlYW4gfCBVcmxUcmVlPiB8IGJvb2xlYW4gfCBVcmxUcmVlIHtcbiAgICAgICAgLy8gTm90ZTogdGhpcyBzZXNzaW9uIGFuZCBhY2wgYXJlIG5vdCBhbHdheXMgYm9vbGVhbnNcbiAgICAgICAgcmV0dXJuIGZvcmtKb2luKFtcbiAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuYXV0aG9yaXplVXNlclNlc3Npb24ocm91dGUsIHNuYXBzaG90KSxcbiAgICAgICAgICAgIHRoaXMuYXV0aG9yaXplVXNlckFDTChyb3V0ZSlcbiAgICAgICAgXSkucGlwZShtYXAoKFtzZXNzaW9uLCBhY2xdOiBhbnkpID0+IHtcblxuXG5cbiAgICAgICAgICAgICAgICBpZiAoc2Vzc2lvbiBpbnN0YW5jZW9mIFVybFRyZWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChhY2wgaW5zdGFuY2VvZiBVcmxUcmVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2w7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzZXNzaW9uICYmIGFjbCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0xvZ2luV2l6YXJkQ29tcGxldGVkID0gdGhpcy5hcHBTdGF0ZS5nZXRMb2dpbldpemFyZENvbXBsZXRlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0xvZ2luV2l6YXJkQ29tcGxldGVkICYmIHNuYXBzaG90LnVybCAhPT0gJy91c2Vycy9XaXphcmQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZXIucGFyc2VVcmwoJy91c2Vycy9XaXphcmQnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKSk7XG5cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEF1dGhvcml6ZSB1c2VyIGFjbFxuICAgICAqXG4gICAgICogQHJldHVybnMge29iamVjdH0gT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT5cbiAgICAgKiBAcGFyYW0ge0FjdGl2YXRlZFJvdXRlU25hcHNob3R9IGFjdGl2YXRlZFJvdXRlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjdXJyZW50IHJvdXRlXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGF1dGhvcml6ZVVzZXJBQ0woYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOlxuICAgICAgICBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB7XG5cbiAgICAgICAgY29uc3Qgcm91dGVJbmZvOiBSb3V0ZUluZm8gPSB0aGlzLnJvdXRlQ29udmVydGVyLnBhcnNlUm91dGVVUkwoYWN0aXZhdGVkUm91dGUudXJsKTtcblxuICAgICAgICBjb25zdCByb3V0ZVVSTDogc3RyaW5nID0gdGhpcy5hcHBTdGF0ZS5nZXRSb3V0ZVVybCgpID8/ICcnO1xuXG4gICAgICAgIGlmICghcm91dGVJbmZvLm1vZHVsZSB8fCByb3V0ZUluZm8ubW9kdWxlID09PSAnaG9tZScpIHtcbiAgICAgICAgICAgIHJldHVybiBvZih0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhvbWVVcmwgPSAnJztcbiAgICAgICAgY29uc3QgaG9tZVVybFRyZWU6IFVybFRyZWUgPSB0aGlzLnJvdXRlci5wYXJzZVVybChob21lVXJsKTtcblxuICAgICAgICBjb25zdCBhY3Rpb25OYW1lID0gJ3VzZXItYWNsJztcblxuICAgICAgICBjb25zdCBhc3luY0RhdGEgPSB7XG4gICAgICAgICAgICBhY3Rpb246IGFjdGlvbk5hbWUsXG4gICAgICAgICAgICBtb2R1bGU6IHJvdXRlSW5mby5tb2R1bGUsXG4gICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgcm91dGVBY3Rpb246IHJvdXRlSW5mby5hY3Rpb24sXG4gICAgICAgICAgICAgICAgcmVjb3JkOiByb3V0ZUluZm8ucmVjb3JkLFxuICAgICAgICAgICAgICAgIHJvdXRlVVJMLFxuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiBhY3RpdmF0ZWRSb3V0ZT8ucXVlcnlQYXJhbXMgPz8gW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBhcyBBc3luY0FjdGlvbklucHV0O1xuICAgICAgICByZXR1cm4gdGhpcy5hc3luY0FjdGlvblNlcnZpY2UucnVuKGFjdGlvbk5hbWUsIGFzeW5jRGF0YSlcbiAgICAgICAgICAgIC5waXBlKHRha2UoMSksXG4gICAgICAgICAgICAgICAgbWFwKChwcm9jZXNzOiBQcm9jZXNzKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZGF0YSAmJiBwcm9jZXNzLmRhdGEucmVzdWx0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0VtcHR5U3RyaW5nKHJvdXRlVVJMKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmUtZGlyZWN0IHRvIGhvbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBob21lVXJsVHJlZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRVcmxUcmVlOiBVcmxUcmVlID0gdGhpcy5yb3V0ZXIucGFyc2VVcmwodGhpcy5yb3V0ZXIudXJsKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yb3V0ZUNvbnZlcnRlci5pc0NsYXNzaWNWaWV3Um91dGUoY3VycmVudFVybFRyZWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudFVybFRyZWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgY2F0Y2hFcnJvcigoKSA9PiBvZihob21lVXJsVHJlZSkpXG4gICAgICAgICAgICApO1xuICAgIH1cbn1cblxuXG4iXX0=