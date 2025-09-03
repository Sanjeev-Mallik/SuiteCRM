/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2024 SalesAgility Ltd.
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
import { Component, HostListener } from "@angular/core";
import { AuthService } from "../../../../services/auth/auth.service";
import { NotificationStore } from "../../../../store/notification/notification.store";
import { Router } from "@angular/router";
import { MessageService } from "../../../../services/message/message.service";
import { AppStateStore } from "../../../../store/app-state/app-state.store";
import { isTrue } from '../../../../common/utils/value-utils';
import { LanguageStore } from "../../../../store/language/language.store";
import { BaseRouteService } from "../../../../services/base-route/base-route.service";
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/auth/auth.service";
import * as i2 from "../../../../services/message/message.service";
import * as i3 from "../../../../store/app-state/app-state.store";
import * as i4 from "../../../../store/notification/notification.store";
import * as i5 from "@angular/router";
import * as i6 from "../../../../services/base-route/base-route.service";
import * as i7 from "../../../../store/language/language.store";
import * as i8 from "../../../../components/label/label.component";
import * as i9 from "@angular/forms";
import * as i10 from "../../../../components/button/button.component";
export class TwoFactorCheckComponent {
    onEnterKey() {
        this.verifyCode();
    }
    constructor(authService, message, appState, notificationStore, router, baseRoute, languageStore) {
        this.authService = authService;
        this.message = message;
        this.appState = appState;
        this.notificationStore = notificationStore;
        this.router = router;
        this.baseRoute = baseRoute;
        this.languageStore = languageStore;
    }
    ngOnInit() {
        this.submitCodeButtonConfig = {
            klass: 'submit-button login-button',
            onClick: (() => {
                this.verifyCode();
            }),
            labelKey: 'LBL_VERIFY_2FA',
            titleKey: ''
        };
    }
    verifyCode() {
        const authCode = this.authCode;
        this.authService.verifyOtp(authCode).subscribe(response => {
            if (isTrue(response?.login_success) && isTrue(response?.two_factor_complete)) {
                this.message.addSuccessMessageByKey('LBL_FACTOR_AUTH_SUCCESS');
                if (this.baseRoute.isNativeAuth()) {
                    window.location.href = this.baseRoute.removeNativeAuth();
                }
                this.appState.updateInitialAppLoading(true);
                this.authService.setLanguage(response);
                this.authService.isUserLoggedIn.next(true);
                this.authService.setCurrentUser(response);
                this.notificationStore.enableNotifications();
                this.notificationStore.refreshNotifications();
                if (response?.redirect && response?.redirect?.route) {
                    this.router.navigate([response.redirect.route], {
                        queryParams: response.redirect.queryParams ?? {}
                    }).then();
                    return;
                }
                return;
            }
            if (response?.error === '2fa_failed') {
                this.message.addDangerMessageByKey('LBL_FACTOR_AUTH_FAIL');
                return;
            }
            const defaultTooManyFailedMessage = 'Too many failed login attempts, please try again later.';
            const message = this.getTooManyFailedMessage(defaultTooManyFailedMessage);
            this.message.addDangerMessage(message);
        });
    }
    getTooManyFailedMessage(defaultTooManyFailedMessage) {
        let tooManyFailedMessage = this.languageStore.getFieldLabel('LOGIN_TOO_MANY_FAILED');
        if (!tooManyFailedMessage) {
            tooManyFailedMessage = defaultTooManyFailedMessage;
        }
        return tooManyFailedMessage;
    }
    static { this.ɵfac = function TwoFactorCheckComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TwoFactorCheckComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.MessageService), i0.ɵɵdirectiveInject(i3.AppStateStore), i0.ɵɵdirectiveInject(i4.NotificationStore), i0.ɵɵdirectiveInject(i5.Router), i0.ɵɵdirectiveInject(i6.BaseRouteService), i0.ɵɵdirectiveInject(i7.LanguageStore)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TwoFactorCheckComponent, selectors: [["scrm-2fa-check"]], hostBindings: function TwoFactorCheckComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keyup.control.enter", function TwoFactorCheckComponent_keyup_control_enter_HostBindingHandler() { return ctx.onEnterKey(); });
        } }, decls: 8, vars: 2, consts: [[1, "d-flex", "flex-column", "pt-4", "align-items-center"], ["labelKey", "LBL_ENTER_AUTH_APP_2FA_CODE"], ["id", "auth_code", "type", "text", "autocomplete", "one-time-code", "name", "auth_code", 1, "mb-2", "mt-2", "pl-0", 3, "ngModelChange", "ngModel"], ["id", "submit-2fa-code", "type", "submit", 3, "config"], [1, "small", "mt-2", "text-muted"], ["labelKey", "LBL_PROBLEMS_GENERATING_CODE"], [1, "small", "mb-2", "text-muted"], ["labelKey", "LBL_BACKUP_CODES_FALLBACK_INSTRUCTIONS"]], template: function TwoFactorCheckComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelement(1, "scrm-label", 1);
            i0.ɵɵelementStart(2, "input", 2);
            i0.ɵɵtwoWayListener("ngModelChange", function TwoFactorCheckComponent_Template_input_ngModelChange_2_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.authCode, $event) || (ctx.authCode = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "scrm-button", 3);
            i0.ɵɵelementStart(4, "div", 4);
            i0.ɵɵelement(5, "scrm-label", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 6);
            i0.ɵɵelement(7, "scrm-label", 7);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtwoWayProperty("ngModel", ctx.authCode);
            i0.ɵɵadvance();
            i0.ɵɵproperty("config", ctx.submitCodeButtonConfig);
        } }, dependencies: [i8.LabelComponent, i9.DefaultValueAccessor, i9.NgControlStatus, i9.NgModel, i10.ButtonComponent], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TwoFactorCheckComponent, [{
        type: Component,
        args: [{ selector: 'scrm-2fa-check', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2024 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div class='d-flex flex-column pt-4 align-items-center'>\n    <scrm-label labelKey='LBL_ENTER_AUTH_APP_2FA_CODE'></scrm-label>\n    <input [(ngModel)]=\"authCode\"\n           id='auth_code'\n           type='text'\n           autocomplete='one-time-code'\n           name='auth_code'\n           class='mb-2 mt-2 pl-0'>\n\n    <scrm-button id='submit-2fa-code' type='submit' [config]=\"submitCodeButtonConfig\">\n    </scrm-button>\n\n    <div class='small mt-2 text-muted'>\n        <scrm-label  labelKey='LBL_PROBLEMS_GENERATING_CODE'></scrm-label>\n    </div>\n    <div class='small mb-2 text-muted'>\n        <scrm-label  labelKey='LBL_BACKUP_CODES_FALLBACK_INSTRUCTIONS'></scrm-label>\n    </div>\n\n</div>\n" }]
    }], () => [{ type: i1.AuthService }, { type: i2.MessageService }, { type: i3.AppStateStore }, { type: i4.NotificationStore }, { type: i5.Router }, { type: i6.BaseRouteService }, { type: i7.LanguageStore }], { onEnterKey: [{
            type: HostListener,
            args: ['keyup.control.enter']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TwoFactorCheckComponent, { className: "TwoFactorCheckComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMmZhLWNoZWNrLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi92aWV3cy8yZmEvY29tcG9uZW50cy8yZmEtY2hlY2svMmZhLWNoZWNrLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi92aWV3cy8yZmEvY29tcG9uZW50cy8yZmEtY2hlY2svMmZhLWNoZWNrLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFDSCxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sd0NBQXdDLENBQUM7QUFDbkUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sbURBQW1ELENBQUM7QUFDcEYsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSw4Q0FBOEMsQ0FBQztBQUM1RSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDMUUsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQzVELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUV4RSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxvREFBb0QsQ0FBQzs7Ozs7Ozs7Ozs7O0FBT3BGLE1BQU0sT0FBTyx1QkFBdUI7SUFNaEMsVUFBVTtRQUNOLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsWUFBc0IsV0FBd0IsRUFDeEIsT0FBdUIsRUFDdkIsUUFBdUIsRUFDdkIsaUJBQW9DLEVBQ3BDLE1BQWMsRUFDZCxTQUEyQixFQUMz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O1FBRXJGLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1lBQ3hCLG9CQUFvQixHQUFHLDJCQUEyQixDQUFDO1FBQ3ZELENBQUM7UUFDRCxPQUFPLG9CQUFvQixDQUFDO0lBQ2hDLENBQUM7d0hBbEZRLHVCQUF1QjtvRUFBdkIsdUJBQXVCO1lBQXZCLHdIQUFBLGdCQUFZLElBQVc7O1lDZHBDLDhCQUF3RDtZQUNwRCxnQ0FBZ0U7WUFDaEUsZ0NBSzhCO1lBTHZCLGlOQUFzQjtZQUE3QixpQkFLOEI7WUFFOUIsaUNBQ2M7WUFFZCw4QkFBbUM7WUFDL0IsZ0NBQWtFO1lBQ3RFLGlCQUFNO1lBQ04sOEJBQW1DO1lBQy9CLGdDQUE0RTtZQUdwRixBQUZJLGlCQUFNLEVBRUo7O1lBakJLLGVBQXNCO1lBQXRCLDRDQUFzQjtZQU9tQixjQUFpQztZQUFqQyxtREFBaUM7OztpRkRLeEUsdUJBQXVCO2NBTG5DLFNBQVM7MkJBQ0ksZ0JBQWdCO3FOQVUxQixVQUFVO2tCQURULFlBQVk7bUJBQUMscUJBQXFCOztrRkFMMUIsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjQgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuaW1wb3J0IHtDb21wb25lbnQsIEhvc3RMaXN0ZW5lciwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uLy4uLy4uLy4uL3NlcnZpY2VzL2F1dGgvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQge05vdGlmaWNhdGlvblN0b3JlfSBmcm9tIFwiLi4vLi4vLi4vLi4vc3RvcmUvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5zdG9yZVwiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi8uLi9zZXJ2aWNlcy9tZXNzYWdlL21lc3NhZ2Uuc2VydmljZVwiO1xuaW1wb3J0IHtBcHBTdGF0ZVN0b3JlfSBmcm9tIFwiLi4vLi4vLi4vLi4vc3RvcmUvYXBwLXN0YXRlL2FwcC1zdGF0ZS5zdG9yZVwiO1xuaW1wb3J0IHtpc1RydWV9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi91dGlscy92YWx1ZS11dGlscyc7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gXCIuLi8uLi8uLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZVwiO1xuaW1wb3J0IHtCdXR0b25DYWxsYmFjaywgQnV0dG9uSW50ZXJmYWNlfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5tb2RlbFwiO1xuaW1wb3J0IHtCYXNlUm91dGVTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZXMvYmFzZS1yb3V0ZS9iYXNlLXJvdXRlLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLTJmYS1jaGVjaycsXG4gICAgdGVtcGxhdGVVcmw6ICcuLzJmYS1jaGVjay5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgVHdvRmFjdG9yQ2hlY2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cbiAgICBhdXRoQ29kZTogc3RyaW5nO1xuICAgIHN1Ym1pdENvZGVCdXR0b25Db25maWc6IEJ1dHRvbkludGVyZmFjZTtcblxuICAgIEBIb3N0TGlzdGVuZXIoJ2tleXVwLmNvbnRyb2wuZW50ZXInKVxuICAgIG9uRW50ZXJLZXkoKSB7XG4gICAgICAgIHRoaXMudmVyaWZ5Q29kZSgpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJvdGVjdGVkIG1lc3NhZ2U6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByb3RlY3RlZCBhcHBTdGF0ZTogQXBwU3RhdGVTdG9yZSxcbiAgICAgICAgICAgICAgICBwcm90ZWN0ZWQgbm90aWZpY2F0aW9uU3RvcmU6IE5vdGlmaWNhdGlvblN0b3JlLFxuICAgICAgICAgICAgICAgIHByb3RlY3RlZCByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcm90ZWN0ZWQgYmFzZVJvdXRlOiBCYXNlUm91dGVTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByb3RlY3RlZCBsYW5ndWFnZVN0b3JlOiBMYW5ndWFnZVN0b3JlXG4gICAgKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuc3VibWl0Q29kZUJ1dHRvbkNvbmZpZyA9IHtcbiAgICAgICAgICAgIGtsYXNzOiAnc3VibWl0LWJ1dHRvbiBsb2dpbi1idXR0b24nLFxuICAgICAgICAgICAgb25DbGljazogKCgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnZlcmlmeUNvZGUoKVxuICAgICAgICAgICAgfSkgYXMgQnV0dG9uQ2FsbGJhY2ssXG4gICAgICAgICAgICBsYWJlbEtleTogJ0xCTF9WRVJJRllfMkZBJyxcbiAgICAgICAgICAgIHRpdGxlS2V5OiAnJ1xuICAgICAgICB9IGFzIEJ1dHRvbkludGVyZmFjZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmVyaWZ5Q29kZSgpIHtcbiAgICAgICAgY29uc3QgYXV0aENvZGUgPSB0aGlzLmF1dGhDb2RlO1xuXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UudmVyaWZ5T3RwKGF1dGhDb2RlKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuXG4gICAgICAgICAgICBpZiAoaXNUcnVlKHJlc3BvbnNlPy5sb2dpbl9zdWNjZXNzKSAmJiBpc1RydWUocmVzcG9uc2U/LnR3b19mYWN0b3JfY29tcGxldGUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlLmFkZFN1Y2Nlc3NNZXNzYWdlQnlLZXkoJ0xCTF9GQUNUT1JfQVVUSF9TVUNDRVNTJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5iYXNlUm91dGUuaXNOYXRpdmVBdXRoKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLmJhc2VSb3V0ZS5yZW1vdmVOYXRpdmVBdXRoKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBTdGF0ZS51cGRhdGVJbml0aWFsQXBwTG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLnNldExhbmd1YWdlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmlzVXNlckxvZ2dlZEluLm5leHQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5zZXRDdXJyZW50VXNlcihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25TdG9yZS5lbmFibGVOb3RpZmljYXRpb25zKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25TdG9yZS5yZWZyZXNoTm90aWZpY2F0aW9ucygpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlPy5yZWRpcmVjdCAmJiByZXNwb25zZT8ucmVkaXJlY3Q/LnJvdXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgW3Jlc3BvbnNlLnJlZGlyZWN0LnJvdXRlXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtczogcmVzcG9uc2UucmVkaXJlY3QucXVlcnlQYXJhbXMgPz8ge31cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZT8uZXJyb3IgPT09ICcyZmFfZmFpbGVkJykge1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZS5hZGREYW5nZXJNZXNzYWdlQnlLZXkoJ0xCTF9GQUNUT1JfQVVUSF9GQUlMJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0VG9vTWFueUZhaWxlZE1lc3NhZ2UgPSAnVG9vIG1hbnkgZmFpbGVkIGxvZ2luIGF0dGVtcHRzLCBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyLic7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5nZXRUb29NYW55RmFpbGVkTWVzc2FnZShkZWZhdWx0VG9vTWFueUZhaWxlZE1lc3NhZ2UpO1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlLmFkZERhbmdlck1lc3NhZ2UobWVzc2FnZSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldFRvb01hbnlGYWlsZWRNZXNzYWdlKGRlZmF1bHRUb29NYW55RmFpbGVkTWVzc2FnZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHRvb01hbnlGYWlsZWRNZXNzYWdlID0gdGhpcy5sYW5ndWFnZVN0b3JlLmdldEZpZWxkTGFiZWwoJ0xPR0lOX1RPT19NQU5ZX0ZBSUxFRCcpO1xuXG4gICAgICAgIGlmICghdG9vTWFueUZhaWxlZE1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHRvb01hbnlGYWlsZWRNZXNzYWdlID0gZGVmYXVsdFRvb01hbnlGYWlsZWRNZXNzYWdlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b29NYW55RmFpbGVkTWVzc2FnZTtcbiAgICB9XG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDI0IFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48ZGl2IGNsYXNzPSdkLWZsZXggZmxleC1jb2x1bW4gcHQtNCBhbGlnbi1pdGVtcy1jZW50ZXInPlxuICAgIDxzY3JtLWxhYmVsIGxhYmVsS2V5PSdMQkxfRU5URVJfQVVUSF9BUFBfMkZBX0NPREUnPjwvc2NybS1sYWJlbD5cbiAgICA8aW5wdXQgWyhuZ01vZGVsKV09XCJhdXRoQ29kZVwiXG4gICAgICAgICAgIGlkPSdhdXRoX2NvZGUnXG4gICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgIGF1dG9jb21wbGV0ZT0nb25lLXRpbWUtY29kZSdcbiAgICAgICAgICAgbmFtZT0nYXV0aF9jb2RlJ1xuICAgICAgICAgICBjbGFzcz0nbWItMiBtdC0yIHBsLTAnPlxuXG4gICAgPHNjcm0tYnV0dG9uIGlkPSdzdWJtaXQtMmZhLWNvZGUnIHR5cGU9J3N1Ym1pdCcgW2NvbmZpZ109XCJzdWJtaXRDb2RlQnV0dG9uQ29uZmlnXCI+XG4gICAgPC9zY3JtLWJ1dHRvbj5cblxuICAgIDxkaXYgY2xhc3M9J3NtYWxsIG10LTIgdGV4dC1tdXRlZCc+XG4gICAgICAgIDxzY3JtLWxhYmVsICBsYWJlbEtleT0nTEJMX1BST0JMRU1TX0dFTkVSQVRJTkdfQ09ERSc+PC9zY3JtLWxhYmVsPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9J3NtYWxsIG1iLTIgdGV4dC1tdXRlZCc+XG4gICAgICAgIDxzY3JtLWxhYmVsICBsYWJlbEtleT0nTEJMX0JBQ0tVUF9DT0RFU19GQUxMQkFDS19JTlNUUlVDVElPTlMnPjwvc2NybS1sYWJlbD5cbiAgICA8L2Rpdj5cblxuPC9kaXY+XG4iXX0=