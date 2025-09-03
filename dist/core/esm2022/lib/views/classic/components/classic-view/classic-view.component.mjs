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
import { Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { IframeResizeHandlerHandler } from '../../services/iframe-resize-handler.service';
import { SystemConfigStore } from '../../../../store/system-config/system-config.store';
import { AuthService } from '../../../../services/auth/auth.service';
import { RouteConverter } from '../../../../services/navigation/route-converter/route-converter.service';
import { IframePageChangeObserver } from '../../services/iframe-page-change-observer.service';
import { take } from "rxjs/operators";
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/platform-browser";
import * as i3 from "../../../../services/navigation/route-converter/route-converter.service";
import * as i4 from "../../../../services/auth/auth.service";
import * as i5 from "../../../../store/system-config/system-config.store";
const _c0 = ["dataContainer"];
export class ClassicViewUiComponent {
    constructor(route, router, sanitizer, routeConverter, auth, ngZone, systemConfigs) {
        this.route = route;
        this.router = router;
        this.sanitizer = sanitizer;
        this.routeConverter = routeConverter;
        this.auth = auth;
        this.ngZone = ngZone;
        this.systemConfigs = systemConfigs;
        this.iframe = null;
    }
    ngOnInit() {
        this.url = this.route.snapshot.data.legacyUrl;
    }
    ngAfterViewInit() {
        this.initIframe();
    }
    ngOnDestroy() {
        this.cleanObservers();
        this.iframe = null;
        const placeholder = this.wrapper;
        if (this.wrapper.firstChild) {
            placeholder.removeChild(placeholder.firstChild);
        }
        placeholder.innerHTML = '<iframe></iframe>';
        this.wrapper = null;
    }
    cleanObservers() {
        if (this.iframeResizeHandler) {
            this.iframeResizeHandler.destroy();
            this.iframeResizeHandler = null;
        }
        if (this.iframePageChangeHandler) {
            this.iframePageChangeHandler.destroy();
            this.iframePageChangeHandler = null;
        }
    }
    initIframe() {
        this.wrapper = this.dataContainer.nativeElement;
        if (this.wrapper.firstChild) {
            this.wrapper.removeChild(this.wrapper.firstChild);
        }
        const iframe = document.createElement('iframe');
        iframe.src = this.url;
        this.wrapper.appendChild(iframe);
        this.iframe = iframe;
        this.iframe.style.display = 'block';
        this.initObservers();
    }
    initObservers() {
        this.iframePageChangeHandler = this.buildIframePageChangeObserver();
        this.iframeResizeHandler = this.buildIframeResizeHandlerHandler();
        if (this.iframePageChangeHandler) {
            this.iframePageChangeHandler.init();
        }
    }
    onPageChange(newLocation) {
        if (this.shouldRedirect(newLocation) === false) {
            this.iframe.style.display = 'block';
            this.cleanObservers();
            this.initObservers();
            return;
        }
        const location = this.routeConverter.toFrontEndRoute(newLocation);
        if (location === '/users/login') {
            this.auth.logout('LBL_SESSION_EXPIRED');
            return;
        }
        this.ngZone.run(() => this.router.navigateByUrl(location).then()).then();
    }
    onIFrameLoad() {
        // Do not show scroll at any time, to avoid flickering
        this.iframe.contentWindow.document.body.style.overflow = 'hidden';
        // Init resize handler
        this.iframeResizeHandler.init(this.iframe);
        this.forceCacheRebuildAfterRepairAndRebuild();
    }
    // Temporary solution. Force a cache rebuild after quick repair and rebuild.
    // Can be removed after Repair and Rebuild page is re-done with to Suite8 views.
    forceCacheRebuildAfterRepairAndRebuild() {
        const iframeUrl = this.iframe.contentWindow.location.href;
        const url = new URL(iframeUrl);
        const params = new URLSearchParams(url.search);
        if (params.get('module') === 'Administration' && params.get('action') === 'repair') {
            this.auth.fetchSessionStatus().pipe(take(1)).subscribe();
        }
    }
    onIFrameUnload() {
        // hide iframe, while being re-directed
        this.iframe.style.display = 'none';
        this.iframeResizeHandler.destroy();
    }
    buildIframePageChangeObserver() {
        return new IframePageChangeObserver(this.iframe, this.onPageChange.bind(this), this.onIFrameLoad.bind(this), this.onIFrameUnload.bind(this));
    }
    buildIframeResizeHandlerHandler() {
        return new IframeResizeHandlerHandler();
    }
    /**
     * Check if should re-direct to link or if it was excluded
     *
     * @param {string} legacyLink to check
     * @returns {boolean} should redirect
     */
    shouldRedirect(legacyLink) {
        if (legacyLink && legacyLink.includes('/#/')) {
            return true;
        }
        const routeInfo = this.routeConverter.parse(legacyLink);
        // if no route or no module, don't re-direct
        if (!routeInfo || !routeInfo.module) {
            return false;
        }
        const reuse = this.routeConverter.matchesActiveRoute(this.route, routeInfo);
        if (reuse === true) {
            return false;
        }
        if (!routeInfo.action) {
            return true;
        }
        return this.toExclude(routeInfo);
    }
    /**
     * Check if given route is to exclude from redirection
     *
     * @param {object} routeInfo to check
     * @returns {boolean} is to exclude
     */
    toExclude(routeInfo) {
        const exclusions = this.systemConfigs.getConfigValue('classicview_routing_exclusions');
        if (!exclusions || Object.keys(exclusions).length === 0) {
            return true;
        }
        // if action is excluded for any module, don't re-direct
        if (exclusions.any && exclusions.any.includes(routeInfo.action)) {
            return false;
        }
        if (!exclusions[routeInfo.module]) {
            return true;
        }
        // if module action is excluded, don't re-direct
        const moduleExclusions = exclusions[routeInfo.module];
        return !(moduleExclusions && moduleExclusions.includes(routeInfo.action));
    }
    static { this.ɵfac = function ClassicViewUiComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ClassicViewUiComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.DomSanitizer), i0.ɵɵdirectiveInject(i3.RouteConverter), i0.ɵɵdirectiveInject(i4.AuthService), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i5.SystemConfigStore)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ClassicViewUiComponent, selectors: [["scrm-classic-view-ui"]], viewQuery: function ClassicViewUiComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dataContainer = _t.first);
        } }, decls: 3, vars: 0, consts: [["dataContainer", ""], [1, "classic-view-container"]], template: function ClassicViewUiComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 1, 0);
            i0.ɵɵelement(2, "iframe");
            i0.ɵɵelementEnd();
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ClassicViewUiComponent, [{
        type: Component,
        args: [{ selector: 'scrm-classic-view-ui', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div class=\"classic-view-container\" #dataContainer>\n    <iframe></iframe>\n</div>\n" }]
    }], () => [{ type: i1.ActivatedRoute }, { type: i1.Router }, { type: i2.DomSanitizer }, { type: i3.RouteConverter }, { type: i4.AuthService }, { type: i0.NgZone }, { type: i5.SystemConfigStore }], { dataContainer: [{
            type: ViewChild,
            args: ['dataContainer', { static: true }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ClassicViewUiComponent, { className: "ClassicViewUiComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NpYy12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi92aWV3cy9jbGFzc2ljL2NvbXBvbmVudHMvY2xhc3NpYy12aWV3L2NsYXNzaWMtdmlldy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvY2xhc3NpYy9jb21wb25lbnRzL2NsYXNzaWMtdmlldy9jbGFzc2ljLXZpZXcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBZ0IsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQXFCLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6RyxPQUFPLEVBQUMsY0FBYyxFQUFFLE1BQU0sRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsMEJBQTBCLEVBQUMsTUFBTSw4Q0FBOEMsQ0FBQztBQUN4RixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxxREFBcUQsQ0FBQztBQUN0RixPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sd0NBQXdDLENBQUM7QUFDbkUsT0FBTyxFQUFDLGNBQWMsRUFBWSxNQUFNLHlFQUF5RSxDQUFDO0FBQ2xILE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLG9EQUFvRCxDQUFDO0FBQzVGLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7QUFXcEMsTUFBTSxPQUFPLHNCQUFzQjtJQVMvQixZQUNZLEtBQXFCLEVBQ3JCLE1BQWMsRUFDZCxTQUF1QixFQUN2QixjQUE4QixFQUM5QixJQUFpQixFQUNqQixNQUFjLEVBQ2Qs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bEJuQyxpQ0FBbUQ7WUFDL0MseUJBQWlCO1lBQ3JCLGlCQUFNOzs7aUZEZ0JPLHNCQUFzQjtjQUxsQyxTQUFTOzJCQUNJLHNCQUFzQjsyTUFNWSxhQUFhO2tCQUF4RCxTQUFTO21CQUFDLGVBQWUsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUM7O2tGQUZqQyxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBOZ1pvbmUsIE9uRGVzdHJveSwgT25Jbml0LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtEb21TYW5pdGl6ZXJ9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHtJZnJhbWVSZXNpemVIYW5kbGVySGFuZGxlcn0gZnJvbSAnLi4vLi4vc2VydmljZXMvaWZyYW1lLXJlc2l6ZS1oYW5kbGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtTeXN0ZW1Db25maWdTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvc3lzdGVtLWNvbmZpZy9zeXN0ZW0tY29uZmlnLnN0b3JlJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL2F1dGgvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7Um91dGVDb252ZXJ0ZXIsIFJvdXRlSW5mb30gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbmF2aWdhdGlvbi9yb3V0ZS1jb252ZXJ0ZXIvcm91dGUtY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtJZnJhbWVQYWdlQ2hhbmdlT2JzZXJ2ZXJ9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2lmcmFtZS1wYWdlLWNoYW5nZS1vYnNlcnZlci5zZXJ2aWNlJztcbmltcG9ydCB7dGFrZX0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5cbmludGVyZmFjZSBSb3V0aW5nRXhjbHVzaW9ucyB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nW107XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1jbGFzc2ljLXZpZXctdWknLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9jbGFzc2ljLXZpZXcuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW11cbn0pXG5leHBvcnQgY2xhc3MgQ2xhc3NpY1ZpZXdVaUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcblxuICAgIEBWaWV3Q2hpbGQoJ2RhdGFDb250YWluZXInLCB7c3RhdGljOiB0cnVlfSkgZGF0YUNvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgICBwdWJsaWMgd3JhcHBlcjogYW55O1xuICAgIHB1YmxpYyB1cmw6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgaWZyYW1lID0gbnVsbDtcbiAgICBwcml2YXRlIGlmcmFtZVBhZ2VDaGFuZ2VIYW5kbGVyOiBJZnJhbWVQYWdlQ2hhbmdlT2JzZXJ2ZXI7XG4gICAgcHJpdmF0ZSBpZnJhbWVSZXNpemVIYW5kbGVyOiBJZnJhbWVSZXNpemVIYW5kbGVySGFuZGxlcjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcixcbiAgICAgICAgcHJpdmF0ZSByb3V0ZUNvbnZlcnRlcjogUm91dGVDb252ZXJ0ZXIsXG4gICAgICAgIHByaXZhdGUgYXV0aDogQXV0aFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgICAgIHByaXZhdGUgc3lzdGVtQ29uZmlnczogU3lzdGVtQ29uZmlnU3RvcmUsXG4gICAgKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudXJsID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5kYXRhLmxlZ2FjeVVybDtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW5pdElmcmFtZSgpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNsZWFuT2JzZXJ2ZXJzKCk7XG5cbiAgICAgICAgdGhpcy5pZnJhbWUgPSBudWxsO1xuICAgICAgICBjb25zdCBwbGFjZWhvbGRlciA9IHRoaXMud3JhcHBlcjtcbiAgICAgICAgaWYgKHRoaXMud3JhcHBlci5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBwbGFjZWhvbGRlci5yZW1vdmVDaGlsZChwbGFjZWhvbGRlci5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBwbGFjZWhvbGRlci5pbm5lckhUTUwgPSAnPGlmcmFtZT48L2lmcmFtZT4nO1xuICAgICAgICB0aGlzLndyYXBwZXIgPSBudWxsO1xuICAgIH1cblxuICAgIGNsZWFuT2JzZXJ2ZXJzKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5pZnJhbWVSZXNpemVIYW5kbGVyKSB7XG4gICAgICAgICAgICB0aGlzLmlmcmFtZVJlc2l6ZUhhbmRsZXIuZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy5pZnJhbWVSZXNpemVIYW5kbGVyID0gbnVsbDtcblxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlmcmFtZVBhZ2VDaGFuZ2VIYW5kbGVyKSB7XG4gICAgICAgICAgICB0aGlzLmlmcmFtZVBhZ2VDaGFuZ2VIYW5kbGVyLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuaWZyYW1lUGFnZUNoYW5nZUhhbmRsZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5pdElmcmFtZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy53cmFwcGVyID0gdGhpcy5kYXRhQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHRoaXMud3JhcHBlci5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICB0aGlzLndyYXBwZXIucmVtb3ZlQ2hpbGQodGhpcy53cmFwcGVyLmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgICAgICBpZnJhbWUuc3JjID0gdGhpcy51cmw7XG5cbiAgICAgICAgdGhpcy53cmFwcGVyLmFwcGVuZENoaWxkKGlmcmFtZSk7XG5cbiAgICAgICAgdGhpcy5pZnJhbWUgPSBpZnJhbWU7XG5cbiAgICAgICAgdGhpcy5pZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgICAgICAgdGhpcy5pbml0T2JzZXJ2ZXJzKCk7XG4gICAgfVxuXG4gICAgaW5pdE9ic2VydmVycygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pZnJhbWVQYWdlQ2hhbmdlSGFuZGxlciA9IHRoaXMuYnVpbGRJZnJhbWVQYWdlQ2hhbmdlT2JzZXJ2ZXIoKTtcbiAgICAgICAgdGhpcy5pZnJhbWVSZXNpemVIYW5kbGVyID0gdGhpcy5idWlsZElmcmFtZVJlc2l6ZUhhbmRsZXJIYW5kbGVyKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuaWZyYW1lUGFnZUNoYW5nZUhhbmRsZXIpIHtcbiAgICAgICAgICAgIHRoaXMuaWZyYW1lUGFnZUNoYW5nZUhhbmRsZXIuaW5pdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uUGFnZUNoYW5nZShuZXdMb2NhdGlvbik6IHZvaWQge1xuXG4gICAgICAgIGlmICh0aGlzLnNob3VsZFJlZGlyZWN0KG5ld0xvY2F0aW9uKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMuaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgdGhpcy5jbGVhbk9ic2VydmVycygpO1xuICAgICAgICAgICAgdGhpcy5pbml0T2JzZXJ2ZXJzKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsb2NhdGlvbiA9IHRoaXMucm91dGVDb252ZXJ0ZXIudG9Gcm9udEVuZFJvdXRlKG5ld0xvY2F0aW9uKTtcblxuICAgICAgICBpZiAobG9jYXRpb24gPT09ICcvdXNlcnMvbG9naW4nKSB7XG4gICAgICAgICAgICB0aGlzLmF1dGgubG9nb3V0KCdMQkxfU0VTU0lPTl9FWFBJUkVEJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChsb2NhdGlvbikudGhlbigpKS50aGVuKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uSUZyYW1lTG9hZCgpOiB2b2lkIHtcbiAgICAgICAgLy8gRG8gbm90IHNob3cgc2Nyb2xsIGF0IGFueSB0aW1lLCB0byBhdm9pZCBmbGlja2VyaW5nXG4gICAgICAgIHRoaXMuaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuXG4gICAgICAgIC8vIEluaXQgcmVzaXplIGhhbmRsZXJcbiAgICAgICAgdGhpcy5pZnJhbWVSZXNpemVIYW5kbGVyLmluaXQodGhpcy5pZnJhbWUpO1xuXG4gICAgICAgIHRoaXMuZm9yY2VDYWNoZVJlYnVpbGRBZnRlclJlcGFpckFuZFJlYnVpbGQoKTtcbiAgICB9XG5cbiAgICAvLyBUZW1wb3Jhcnkgc29sdXRpb24uIEZvcmNlIGEgY2FjaGUgcmVidWlsZCBhZnRlciBxdWljayByZXBhaXIgYW5kIHJlYnVpbGQuXG4gICAgLy8gQ2FuIGJlIHJlbW92ZWQgYWZ0ZXIgUmVwYWlyIGFuZCBSZWJ1aWxkIHBhZ2UgaXMgcmUtZG9uZSB3aXRoIHRvIFN1aXRlOCB2aWV3cy5cbiAgICBwcm90ZWN0ZWQgZm9yY2VDYWNoZVJlYnVpbGRBZnRlclJlcGFpckFuZFJlYnVpbGQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGlmcmFtZVVybCA9IHRoaXMuaWZyYW1lLmNvbnRlbnRXaW5kb3cubG9jYXRpb24uaHJlZjtcblxuICAgICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGlmcmFtZVVybCk7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXModXJsLnNlYXJjaCk7XG5cbiAgICAgICAgaWYgKHBhcmFtcy5nZXQoJ21vZHVsZScpID09PSAnQWRtaW5pc3RyYXRpb24nICYmIHBhcmFtcy5nZXQoJ2FjdGlvbicpID09PSAncmVwYWlyJykge1xuICAgICAgICAgICAgdGhpcy5hdXRoLmZldGNoU2Vzc2lvblN0YXR1cygpLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25JRnJhbWVVbmxvYWQoKTogdm9pZCB7XG4gICAgICAgIC8vIGhpZGUgaWZyYW1lLCB3aGlsZSBiZWluZyByZS1kaXJlY3RlZFxuICAgICAgICB0aGlzLmlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLmlmcmFtZVJlc2l6ZUhhbmRsZXIuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBidWlsZElmcmFtZVBhZ2VDaGFuZ2VPYnNlcnZlcigpOiBJZnJhbWVQYWdlQ2hhbmdlT2JzZXJ2ZXIge1xuICAgICAgICByZXR1cm4gbmV3IElmcmFtZVBhZ2VDaGFuZ2VPYnNlcnZlcihcbiAgICAgICAgICAgIHRoaXMuaWZyYW1lLFxuICAgICAgICAgICAgdGhpcy5vblBhZ2VDaGFuZ2UuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIHRoaXMub25JRnJhbWVMb2FkLmJpbmQodGhpcyksXG4gICAgICAgICAgICB0aGlzLm9uSUZyYW1lVW5sb2FkLmJpbmQodGhpcyksXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGJ1aWxkSWZyYW1lUmVzaXplSGFuZGxlckhhbmRsZXIoKTogSWZyYW1lUmVzaXplSGFuZGxlckhhbmRsZXIge1xuICAgICAgICByZXR1cm4gbmV3IElmcmFtZVJlc2l6ZUhhbmRsZXJIYW5kbGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgc2hvdWxkIHJlLWRpcmVjdCB0byBsaW5rIG9yIGlmIGl0IHdhcyBleGNsdWRlZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGxlZ2FjeUxpbmsgdG8gY2hlY2tcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gc2hvdWxkIHJlZGlyZWN0XG4gICAgICovXG4gICAgcHJvdGVjdGVkIHNob3VsZFJlZGlyZWN0KGxlZ2FjeUxpbms6IHN0cmluZyk6IGJvb2xlYW4ge1xuXG4gICAgICAgIGlmIChsZWdhY3lMaW5rICYmIGxlZ2FjeUxpbmsuaW5jbHVkZXMoJy8jLycpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IHRoaXMucm91dGVDb252ZXJ0ZXIucGFyc2UobGVnYWN5TGluayk7XG5cbiAgICAgICAgLy8gaWYgbm8gcm91dGUgb3Igbm8gbW9kdWxlLCBkb24ndCByZS1kaXJlY3RcbiAgICAgICAgaWYgKCFyb3V0ZUluZm8gfHwgIXJvdXRlSW5mby5tb2R1bGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJldXNlID0gdGhpcy5yb3V0ZUNvbnZlcnRlci5tYXRjaGVzQWN0aXZlUm91dGUodGhpcy5yb3V0ZSwgcm91dGVJbmZvKTtcblxuICAgICAgICBpZiAocmV1c2UgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcm91dGVJbmZvLmFjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy50b0V4Y2x1ZGUocm91dGVJbmZvKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBnaXZlbiByb3V0ZSBpcyB0byBleGNsdWRlIGZyb20gcmVkaXJlY3Rpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByb3V0ZUluZm8gdG8gY2hlY2tcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gaXMgdG8gZXhjbHVkZVxuICAgICAqL1xuICAgIHByb3RlY3RlZCB0b0V4Y2x1ZGUocm91dGVJbmZvOiBSb3V0ZUluZm8pOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgZXhjbHVzaW9uczogUm91dGluZ0V4Y2x1c2lvbnMgPSB0aGlzLnN5c3RlbUNvbmZpZ3MuZ2V0Q29uZmlnVmFsdWUoJ2NsYXNzaWN2aWV3X3JvdXRpbmdfZXhjbHVzaW9ucycpO1xuXG4gICAgICAgIGlmICghZXhjbHVzaW9ucyB8fCBPYmplY3Qua2V5cyhleGNsdXNpb25zKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgYWN0aW9uIGlzIGV4Y2x1ZGVkIGZvciBhbnkgbW9kdWxlLCBkb24ndCByZS1kaXJlY3RcbiAgICAgICAgaWYgKGV4Y2x1c2lvbnMuYW55ICYmIGV4Y2x1c2lvbnMuYW55LmluY2x1ZGVzKHJvdXRlSW5mby5hY3Rpb24pKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWV4Y2x1c2lvbnNbcm91dGVJbmZvLm1vZHVsZV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgbW9kdWxlIGFjdGlvbiBpcyBleGNsdWRlZCwgZG9uJ3QgcmUtZGlyZWN0XG4gICAgICAgIGNvbnN0IG1vZHVsZUV4Y2x1c2lvbnMgPSBleGNsdXNpb25zW3JvdXRlSW5mby5tb2R1bGVdO1xuICAgICAgICByZXR1cm4gIShtb2R1bGVFeGNsdXNpb25zICYmIG1vZHVsZUV4Y2x1c2lvbnMuaW5jbHVkZXMocm91dGVJbmZvLmFjdGlvbikpO1xuICAgIH1cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjxkaXYgY2xhc3M9XCJjbGFzc2ljLXZpZXctY29udGFpbmVyXCIgI2RhdGFDb250YWluZXI+XG4gICAgPGlmcmFtZT48L2lmcmFtZT5cbjwvZGl2PlxuIl19