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
import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatestWith } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeIn } from 'ng-animate';
import { RecoverPasswordService } from '../../../../services/process/processes/recover-password/recover-password';
import { SystemConfigStore } from '../../../../store/system-config/system-config.store';
import { AuthService } from '../../../../services/auth/auth.service';
import { LanguageStore } from '../../../../store/language/language.store';
import { MessageService } from '../../../../services/message/message.service';
import { AppStateStore } from "../../../../store/app-state/app-state.store";
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../../../services/auth/auth.service";
import * as i3 from "../../../../services/message/message.service";
import * as i4 from "../../../../store/system-config/system-config.store";
import * as i5 from "../../../../store/language/language.store";
import * as i6 from "../../../../services/process/processes/recover-password/recover-password";
import * as i7 from "../../../../store/app-state/app-state.store";
import * as i8 from "@angular/forms";
import * as i9 from "../../../../components/logo/logo.component";
import * as i10 from "@angular/common";
import * as i11 from "../../../../components/image/image.component";
import * as i12 from "../../../../directives/button-loading/button-loading.directive";
import * as i13 from "../../../2fa/components/2fa-check/2fa-check.component";
function LoginUiComponent_div_0_div_6_option_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 20);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_7_0;
    const item_r4 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("selected", ((tmp_7_0 = ctx_r2.language) !== null && tmp_7_0 !== undefined ? tmp_7_0 : "en_us") === item_r4)("value", item_r4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.getEnabledLanguages()[item_r4], " ");
} }
function LoginUiComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 14)(1, "div", 9)(2, "label", 15);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(4, "div", 16);
    i0.ɵɵelementStart(5, "div", 9)(6, "div", 17)(7, "select", 18, 1);
    i0.ɵɵlistener("change", function LoginUiComponent_div_0_div_6_Template_select_change_7_listener() { i0.ɵɵrestoreView(_r1); const languageSelect_r2 = i0.ɵɵreference(8); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onLanguageSelect(languageSelect_r2.value)); });
    i0.ɵɵtemplate(9, LoginUiComponent_div_0_div_6_option_9_Template, 2, 3, "option", 19);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const vm_r5 = i0.ɵɵnextContext().ngIf;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(vm_r5.appStrings["LBL_LANGUAGE"]);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r2.getEnabledLanguagesKeys());
} }
function LoginUiComponent_div_0_div_8_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const vm_r5 = i0.ɵɵnextContext(2).ngIf;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", vm_r5.appStrings["ERR_MISSING_REQUIRED_FIELDS"], " ");
} }
function LoginUiComponent_div_0_div_8_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const vm_r5 = i0.ɵɵnextContext(2).ngIf;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", vm_r5.appStrings["ERR_MISSING_REQUIRED_FIELDS"], " ");
} }
function LoginUiComponent_div_0_div_8_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 30)(1, "a", 31);
    i0.ɵɵlistener("click", function LoginUiComponent_div_0_div_8_div_13_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.flipCard()); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const vm_r5 = i0.ɵɵnextContext(2).ngIf;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", vm_r5.appStrings["LBL_LOGIN_FORGOT_PASSWORD"], " ");
} }
function LoginUiComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 21)(1, "div", 17);
    i0.ɵɵelement(2, "scrm-image", 22);
    i0.ɵɵelementStart(3, "input", 23, 2);
    i0.ɵɵtwoWayListener("ngModelChange", function LoginUiComponent_div_0_div_8_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r2 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r2.uname, $event) || (ctx_r2.uname = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, LoginUiComponent_div_0_div_8_div_5_Template, 2, 1, "div", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 17);
    i0.ɵɵelement(7, "scrm-image", 25);
    i0.ɵɵelementStart(8, "input", 26, 3);
    i0.ɵɵtwoWayListener("ngModelChange", function LoginUiComponent_div_0_div_8_Template_input_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r2 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r2.passw, $event) || (ctx_r2.passw = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, LoginUiComponent_div_0_div_8_div_10_Template, 2, 1, "div", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 27);
    i0.ɵɵlistener("click", function LoginUiComponent_div_0_div_8_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r6); i0.ɵɵnextContext(); const loginForm_r7 = i0.ɵɵreference(2); const ctx_r2 = i0.ɵɵnextContext(); loginForm_r7.control.markAllAsTouched(); return i0.ɵɵresetView(loginForm_r7.valid && ctx_r2.doLogin()); });
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(13, LoginUiComponent_div_0_div_8_div_13_Template, 3, 1, "div", 28);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const username_r9 = i0.ɵɵreference(4);
    const password_r10 = i0.ɵɵreference(9);
    const vm_r5 = i0.ɵɵnextContext().ngIf;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("@fade", undefined);
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("is-invalid", username_r9.invalid && username_r9.touched);
    i0.ɵɵpropertyInterpolate("placeholder", vm_r5.appStrings["LBL_USER_NAME"]);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.uname);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", username_r9.invalid && username_r9.touched);
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("is-invalid", password_r10.invalid && password_r10.touched);
    i0.ɵɵpropertyInterpolate("placeholder", vm_r5.appStrings["LBL_PASSWORD"]);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.passw);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", password_r10.invalid && password_r10.touched);
    i0.ɵɵadvance();
    i0.ɵɵproperty("scrm-button-loading", ctx_r2.loading);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", vm_r5.appStrings["LBL_LOGIN_BUTTON_LABEL"], " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", vm_r5.showForgotPassword);
} }
function LoginUiComponent_div_0_div_9_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const vm_r5 = i0.ɵɵnextContext(2).ngIf;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", vm_r5.appStrings["ERR_MISSING_REQUIRED_FIELDS"], " ");
} }
function LoginUiComponent_div_0_div_9_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const vm_r5 = i0.ɵɵnextContext(2).ngIf;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", vm_r5.appStrings["ERR_MISSING_REQUIRED_FIELDS"], " ");
} }
function LoginUiComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 32)(1, "div", 17);
    i0.ɵɵelement(2, "scrm-image", 22);
    i0.ɵɵelementStart(3, "input", 23, 2);
    i0.ɵɵtwoWayListener("ngModelChange", function LoginUiComponent_div_0_div_9_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r2 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r2.uname, $event) || (ctx_r2.uname = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, LoginUiComponent_div_0_div_9_div_5_Template, 2, 1, "div", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 17);
    i0.ɵɵelement(7, "scrm-image", 33);
    i0.ɵɵelementStart(8, "input", 34, 4);
    i0.ɵɵtwoWayListener("ngModelChange", function LoginUiComponent_div_0_div_9_Template_input_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r2 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r2.email, $event) || (ctx_r2.email = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, LoginUiComponent_div_0_div_9_div_10_Template, 2, 1, "div", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 35);
    i0.ɵɵlistener("click", function LoginUiComponent_div_0_div_9_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r11); i0.ɵɵnextContext(); const loginForm_r7 = i0.ɵɵreference(2); const ctx_r2 = i0.ɵɵnextContext(); loginForm_r7.control.markAllAsTouched(); return i0.ɵɵresetView(loginForm_r7.valid && ctx_r2.recoverPassword()); });
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div")(14, "a", 36);
    i0.ɵɵlistener("click", function LoginUiComponent_div_0_div_9_Template_a_click_14_listener() { i0.ɵɵrestoreView(_r11); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.flipCard()); });
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const username_r12 = i0.ɵɵreference(4);
    const mail_r13 = i0.ɵɵreference(9);
    const vm_r5 = i0.ɵɵnextContext().ngIf;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("@fade", undefined);
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("is-invalid", username_r12.invalid && username_r12.touched);
    i0.ɵɵpropertyInterpolate("placeholder", vm_r5.appStrings["LBL_USER_NAME"]);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.uname);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", username_r12.invalid && username_r12.touched);
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("is-invalid", mail_r13.invalid && mail_r13.touched);
    i0.ɵɵpropertyInterpolate("placeholder", vm_r5.appStrings["LBL_EMAIL"]);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.email);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", mail_r13.invalid && mail_r13.touched);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", vm_r5.appStrings["LBL_GENERATE_PASSWORD_BUTTON_TITLE"], " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", vm_r5.appStrings["LBL_BACK"], " ");
} }
function LoginUiComponent_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 32)(1, "div", 17);
    i0.ɵɵelement(2, "scrm-2fa-check", 37);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div")(4, "a", 36);
    i0.ɵɵlistener("click", function LoginUiComponent_div_0_div_10_Template_a_click_4_listener() { i0.ɵɵrestoreView(_r14); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.returnToLogin()); });
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const vm_r5 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵproperty("@fade", undefined);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", vm_r5.appStrings["LBL_BACK"], " ");
} }
function LoginUiComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "form", 7, 0)(3, "div", 8)(4, "div", 9);
    i0.ɵɵelement(5, "scrm-logo-ui");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(6, LoginUiComponent_div_0_div_6_Template, 10, 2, "div", 10);
    i0.ɵɵelementStart(7, "div", 11);
    i0.ɵɵtemplate(8, LoginUiComponent_div_0_div_8_Template, 14, 14, "div", 12)(9, LoginUiComponent_div_0_div_9_Template, 16, 13, "div", 13)(10, LoginUiComponent_div_0_div_10_Template, 6, 2, "div", 13);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const vm_r5 = ctx.ngIf;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", vm_r5.showLanguages && ctx_r2.cardState() !== "2fa");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.cardState() === "front");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.cardState() === "back");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.cardState() === "2fa");
} }
export class LoginUiComponent {
    constructor(router, auth, message, configs, languageStore, recoverPasswordService, appState) {
        this.router = router;
        this.auth = auth;
        this.message = message;
        this.configs = configs;
        this.languageStore = languageStore;
        this.recoverPasswordService = recoverPasswordService;
        this.appState = appState;
        this.hidden = true;
        this.loading = false;
        this.error = '';
        this.uname = '';
        this.passw = '';
        this.email = '';
        this.cardState = signal('front');
        this.systemConfigs$ = this.configs.configs$;
        this.appStrings$ = this.languageStore.appStrings$;
        this.language = null;
        this.vm$ = this.systemConfigs$.pipe(combineLatestWith(this.appStrings$), map(([systemConfigs, appStrings]) => {
            let showLanguages = false;
            let showForgotPassword = false;
            if (systemConfigs.languages && systemConfigs.languages.items && systemConfigs.login_language.value) {
                showLanguages = Object.keys(systemConfigs.languages.items).length > 1;
            }
            if (systemConfigs.passwordsetting && systemConfigs.passwordsetting.items) {
                const forgotPasswordProperty = systemConfigs.passwordsetting.items.forgotpasswordON;
                showForgotPassword = [true, '1', 'true'].includes(forgotPasswordProperty);
            }
            return {
                systemConfigs,
                appStrings,
                showLanguages,
                showForgotPassword
            };
        }));
        this.loading = false;
        this.hidden = false;
        this.language = null;
    }
    ngOnInit() {
        this.setCurrentLanguage();
        this.appState.removeAllPrevRoutes();
    }
    onLanguageSelect(language) {
        if (!language) {
            return;
        }
        if (language === this.language) {
            return;
        }
        this.changeLanguage(language);
    }
    changeLanguage(language) {
        this.language = language;
        let languagesLoading = false;
        if (this?.appState?.updateLoading) {
            this.appState.updateLoading('change-language', true);
            languagesLoading = true;
        }
        this.languageStore.changeLanguage(language, true).pipe(tap(() => {
            if (languagesLoading) {
                this.appState.updateLoading('change-language', false);
            }
        })).subscribe();
    }
    getEnabledLanguages() {
        return this.languageStore.getEnabledLanguages();
    }
    getEnabledLanguagesKeys() {
        return Object.keys(this.languageStore.getEnabledLanguages() ?? {}) ?? [];
    }
    flipCard() {
        if (this.cardState() === 'front') {
            this.cardState.set('back');
        }
        else {
            this.cardState.set('front');
        }
    }
    returnToLogin() {
        this.cardState.set('front');
        this.auth.isUserLoggedIn.next(false);
        this.auth.handleInvalidSession('LBL_2FA_LOGIN_CANCEL');
        return;
    }
    doLogin() {
        this.loading = true;
        this.auth.doLogin(this.uname, this.passw, this.onLoginSuccess.bind(this), this.onLoginError.bind(this), this.onTwoFactor.bind(this));
    }
    recoverPassword() {
        this.recoverPasswordService
            .run(this.uname, this.email)
            .subscribe((process) => {
            this.message.log('Recover Password Status: ' + process.status);
            let handler = 'addSuccessMessageByKey';
            if (process.status === 'error') {
                handler = 'addDangerMessageByKey';
            }
            if (process.messages) {
                process.messages.forEach(message => {
                    this.message[handler](message);
                });
            }
        }, () => {
            this.message.log('Recover Password failed');
            this.message.addDangerMessageByKey('ERR_AJAX_LOAD_FAILURE');
        });
    }
    onLoginSuccess(result) {
        this.loading = false;
        this.message.log('Login success');
        this.message.removeMessages();
        this.auth.setLanguage(result);
        return;
    }
    onLoginError(httpError) {
        this.loading = false;
        this.message.log('Login failed');
        const defaultMessage = 'Login credentials incorrect, please try again.';
        const defaultTooManyFailedMessage = 'Too many failed login attempts, please try again later.';
        let message = this.languageStore.getFieldLabel('LOGIN_INCORRECT');
        const errorMessage = httpError?.error?.error ?? '';
        if (typeof errorMessage === 'string' && errorMessage.includes('Too many failed login attempts, please try again in')) {
            message = this.getTooManyFailedMessage(defaultTooManyFailedMessage);
        }
        if (!message) {
            message = defaultMessage;
        }
        this.message.addDangerMessage(message);
    }
    onTwoFactor(result) {
        this.cardState.set('2fa');
    }
    getTooManyFailedMessage(defaultTooManyFailedMessage) {
        let tooManyFailedMessage = this.languageStore.getFieldLabel('LOGIN_TOO_MANY_FAILED');
        if (!tooManyFailedMessage) {
            tooManyFailedMessage = defaultTooManyFailedMessage;
        }
        return tooManyFailedMessage;
    }
    setCurrentLanguage() {
        let currentLanguage = this.languageStore.getSelectedLanguage() ?? '';
        const activeLanguage = this.languageStore.getActiveLanguage();
        if (!currentLanguage) {
            currentLanguage = activeLanguage;
        }
        if (!this.languageStore.isLanguageEnabled(currentLanguage)) {
            currentLanguage = '';
        }
        if (this.language && currentLanguage === this.language) {
            return;
        }
        const defaultLanguage = this.configs.getConfigValue('default_language') ?? 'en_us';
        if (!currentLanguage) {
            currentLanguage = defaultLanguage;
        }
        if (!this.languageStore.isLanguageEnabled(currentLanguage)) {
            currentLanguage = this.languageStore.getFirstLanguage();
        }
        this.language = currentLanguage;
        this.changeLanguage(currentLanguage);
    }
    static { this.ɵfac = function LoginUiComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LoginUiComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.AuthService), i0.ɵɵdirectiveInject(i3.MessageService), i0.ɵɵdirectiveInject(i4.SystemConfigStore), i0.ɵɵdirectiveInject(i5.LanguageStore), i0.ɵɵdirectiveInject(i6.RecoverPasswordService), i0.ɵɵdirectiveInject(i7.AppStateStore)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LoginUiComponent, selectors: [["scrm-login-ui"]], decls: 2, vars: 3, consts: [["loginForm", "ngForm"], ["languageSelect", ""], ["username", "ngModel"], ["password", "ngModel"], ["mail", "ngModel"], ["class", "login-view full-height-view d-flex align-items-center", 4, "ngIf"], [1, "login-view", "full-height-view", "d-flex", "align-items-center"], ["name", "login", 1, "login-form"], [1, "form-row", "form-group"], [1, "col"], ["class", "form-row", 4, "ngIf"], [1, "form-row", "fade-card"], ["class", "fade-card-front col", 4, "ngIf"], ["class", "fade-card-back col", 4, "ngIf"], [1, "form-row"], ["for", "languages", 1, ""], [1, "w-100"], [1, "inner-addon", "left-addon"], ["id", "languages", 3, "change"], [3, "selected", "value", 4, "ngFor", "ngForOf"], [3, "selected", "value"], [1, "fade-card-front", "col"], ["image", "login_user"], ["type", "text", "name", "username", "aria-label", "Username", "autocomplete", "username", "required", "", 3, "ngModelChange", "ngModel", "placeholder"], ["class", "invalid-feedback", 4, "ngIf"], ["image", "login_password"], ["type", "password", "name", "password", "aria-label", "Password", "autocomplete", "current-password", "required", "", 3, "ngModelChange", "ngModel", "placeholder"], ["id", "login-button", 1, "login-button", 3, "click", "scrm-button-loading"], ["class", "forgotten-password", 4, "ngIf"], [1, "invalid-feedback"], [1, "forgotten-password"], [1, "forgotten-password-link", 3, "click"], [1, "fade-card-back", "col"], ["image", "email"], ["type", "email", "name", "email", "aria-label", "Email", "autocomplete", "email", "required", "", 3, "ngModelChange", "ngModel", "placeholder"], ["scrm-button-loading", "", 1, "submit-button", "login-button", 3, "click"], [1, "back-link", "forgotten-password-link", 3, "click"], [1, "login-button"]], template: function LoginUiComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, LoginUiComponent_div_0_Template, 11, 4, "div", 5);
            i0.ɵɵpipe(1, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.vm$));
        } }, dependencies: [i8.ɵNgNoValidate, i8.NgSelectOption, i8.ɵNgSelectMultipleOption, i8.DefaultValueAccessor, i8.NgControlStatus, i8.NgControlStatusGroup, i8.RequiredValidator, i8.NgModel, i8.NgForm, i9.LogoUiComponent, i10.NgForOf, i10.NgIf, i11.ImageComponent, i12.ButtonLoadingDirective, i13.TwoFactorCheckComponent, i10.AsyncPipe], encapsulation: 2, data: { animation: [
                trigger('fade', [
                    transition(':enter', useAnimation(fadeIn, {
                        params: { timing: 0.5, delay: 0 }
                    })),
                ])
            ] } }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoginUiComponent, [{
        type: Component,
        args: [{ selector: 'scrm-login-ui', animations: [
                    trigger('fade', [
                        transition(':enter', useAnimation(fadeIn, {
                            params: { timing: 0.5, delay: 0 }
                        })),
                    ])
                ], template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div *ngIf=\"(vm$ | async) as vm\" class=\"login-view full-height-view d-flex align-items-center\">\n\n    <!-- Start of login form section -->\n\n    <form name=\"login\" class=\"login-form\" #loginForm=\"ngForm\">\n        <div class=\"form-row form-group\">\n            <div class=\"col\">\n                <scrm-logo-ui></scrm-logo-ui>\n            </div>\n        </div>\n        <div class=\"form-row\" *ngIf=\"vm.showLanguages && cardState() !== '2fa'\">\n            <div class=\"col\">\n                <label class=\"\" for=\"languages\">{{vm.appStrings['LBL_LANGUAGE']}}</label>\n            </div>\n            <div class=\"w-100\"></div>\n            <div class=\"col\">\n                <div class=\"inner-addon left-addon\">\n                    <select #languageSelect id=\"languages\"\n                            (change)=\"onLanguageSelect(languageSelect.value)\">\n                        <option *ngFor=\"let item of getEnabledLanguagesKeys()\"\n                                [selected]=\"(language ?? 'en_us') === item\"\n                                [value]=\"item\">\n                            {{getEnabledLanguages()[item]}}\n                        </option>\n                    </select>\n                </div>\n            </div>\n        </div>\n\n\n        <div class=\"form-row fade-card\">\n\n            <!-- Card front -->\n            <div class=\"fade-card-front col\"\n                 *ngIf=\"cardState() === 'front'\"\n                 [@fade]>\n\n                <div class=\"inner-addon left-addon\">\n                    <scrm-image image=\"login_user\"></scrm-image>\n                    <input [(ngModel)]=\"uname\"\n                           type=\"text\"\n                           name=\"username\"\n                           [class.is-invalid]=\"username.invalid && username.touched\"\n                           #username=\"ngModel\"\n                           placeholder=\"{{vm.appStrings['LBL_USER_NAME']}}\"\n                           aria-label=\"Username\"\n                           autocomplete=\"username\"\n                           required>\n                    <div *ngIf=\"username.invalid && username.touched\" class=\"invalid-feedback\">\n                        {{vm.appStrings['ERR_MISSING_REQUIRED_FIELDS']}}\n                    </div>\n                </div>\n\n                <div class=\"inner-addon left-addon\">\n                    <scrm-image image=\"login_password\"></scrm-image>\n                    <input [(ngModel)]=\"passw\"\n                           type=\"password\"\n                           name=\"password\"\n                           [class.is-invalid]=\"password.invalid && password.touched\"\n                           #password=\"ngModel\"\n                           placeholder=\"{{vm.appStrings['LBL_PASSWORD']}}\"\n                           aria-label=\"Password\"\n                           autocomplete=\"current-password\"\n                           required>\n                    <div *ngIf=\"password.invalid && password.touched\" class=\"invalid-feedback\">\n                        {{vm.appStrings['ERR_MISSING_REQUIRED_FIELDS']}}\n                    </div>\n                </div>\n\n\n                <button id=\"login-button\" class=\"login-button\"\n                        [scrm-button-loading]=\"loading\"\n                        (click)=\"loginForm.control.markAllAsTouched(); loginForm.valid && doLogin()\">\n                    {{vm.appStrings['LBL_LOGIN_BUTTON_LABEL']}}\n                </button>\n                <div class=\"forgotten-password\" *ngIf=\"vm.showForgotPassword\">\n                    <a class=\"forgotten-password-link\" (click)=\"flipCard()\">\n                        {{vm.appStrings['LBL_LOGIN_FORGOT_PASSWORD']}}\n                    </a>\n                </div>\n\n            </div>\n\n            <!-- Card back-->\n            <div class=\"fade-card-back col\"\n                 *ngIf=\"cardState() === 'back'\"\n                 [@fade]>\n                <div class=\"inner-addon left-addon\">\n                    <scrm-image image=\"login_user\"></scrm-image>\n                    <input [(ngModel)]=\"uname\"\n                           type=\"text\"\n                           name=\"username\"\n                           [class.is-invalid]=\"username.invalid && username.touched\"\n                           #username=\"ngModel\"\n                           placeholder=\"{{vm.appStrings['LBL_USER_NAME']}}\"\n                           aria-label=\"Username\"\n                           autocomplete=\"username\"\n                           required>\n                    <div *ngIf=\"username.invalid && username.touched\" class=\"invalid-feedback\">\n                        {{vm.appStrings['ERR_MISSING_REQUIRED_FIELDS']}}\n                    </div>\n                </div>\n\n                <div class=\"inner-addon left-addon\">\n                    <scrm-image image=\"email\"></scrm-image>\n                    <input [(ngModel)]=\"email\"\n                           type=\"email\"\n                           name=\"email\"\n                           [class.is-invalid]=\"mail.invalid && mail.touched\"\n                           #mail=\"ngModel\"\n                           placeholder=\"{{vm.appStrings['LBL_EMAIL']}}\"\n                           aria-label=\"Email\"\n                           autocomplete=\"email\"\n                           required>\n                    <div *ngIf=\"mail.invalid && mail.touched\" class=\"invalid-feedback\">\n                        {{vm.appStrings['ERR_MISSING_REQUIRED_FIELDS']}}\n                    </div>\n                </div>\n\n                <button class=\"submit-button login-button\"\n                        scrm-button-loading\n                        (click)=\"loginForm.control.markAllAsTouched(); loginForm.valid && recoverPassword()\">\n                    {{vm.appStrings['LBL_GENERATE_PASSWORD_BUTTON_TITLE']}}\n                </button>\n                <div>\n                    <a class=\"back-link forgotten-password-link\" (click)=\"flipCard()\">\n                        {{vm.appStrings['LBL_BACK']}}\n                    </a>\n                </div>\n            </div>\n\n            <!-- 2fa Card-->\n            <div class=\"fade-card-back col\"\n                 *ngIf=\"cardState() === '2fa'\"\n                 [@fade]>\n                <div class=\"inner-addon left-addon\">\n                    <scrm-2fa-check class='login-button'></scrm-2fa-check>\n                </div>\n                <div>\n                    <a class=\"back-link forgotten-password-link\" (click)=\"returnToLogin()\">\n                        {{vm.appStrings['LBL_BACK']}}\n                    </a>\n                </div>\n            </div>\n        </div>\n    </form>\n\n    <!-- End of login form section -->\n\n</div>\n\n<!-- End of login component section -->\n" }]
    }], () => [{ type: i1.Router }, { type: i2.AuthService }, { type: i3.MessageService }, { type: i4.SystemConfigStore }, { type: i5.LanguageStore }, { type: i6.RecoverPasswordService }, { type: i7.AppStateStore }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LoginUiComponent, { className: "LoginUiComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3ZpZXdzL2xvZ2luL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3ZpZXdzL2xvZ2luL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQVUsTUFBTSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDdkMsT0FBTyxFQUFDLGlCQUFpQixFQUFhLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBQyxHQUFHLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEMsT0FBTyxFQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDdEUsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLFlBQVksQ0FBQztBQUNsQyxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSwwRUFBMEUsQ0FBQztBQUNoSCxPQUFPLEVBQWtCLGlCQUFpQixFQUFDLE1BQU0scURBQXFELENBQUM7QUFDdkcsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHdDQUF3QyxDQUFDO0FBQ25FLE9BQU8sRUFBQyxhQUFhLEVBQW9CLE1BQU0sMkNBQTJDLENBQUM7QUFDM0YsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDhDQUE4QyxDQUFDO0FBSTVFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztJQ01sRCxr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VUFBVSxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsTUFBTSxFQUFFOzRCQUN0QyxNQUFNLEVBQUUsRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUM7eUJBQ2xDLENBQUMsQ0FBQztxQkFDTixDQUFDO2lCQUNMOztrRkFFUSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIHNpZ25hbCwgV3JpdGFibGVTaWduYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge2NvbWJpbmVMYXRlc3RXaXRoLCBPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7bWFwLCB0YXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7dHJhbnNpdGlvbiwgdHJpZ2dlciwgdXNlQW5pbWF0aW9ufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7ZmFkZUlufSBmcm9tICduZy1hbmltYXRlJztcbmltcG9ydCB7UmVjb3ZlclBhc3N3b3JkU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvcHJvY2Vzcy9wcm9jZXNzZXMvcmVjb3Zlci1wYXNzd29yZC9yZWNvdmVyLXBhc3N3b3JkJztcbmltcG9ydCB7U3lzdGVtQ29uZmlnTWFwLCBTeXN0ZW1Db25maWdTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvc3lzdGVtLWNvbmZpZy9zeXN0ZW0tY29uZmlnLnN0b3JlJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL2F1dGgvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZSwgTGFuZ3VhZ2VTdHJpbmdNYXB9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL21lc3NhZ2UvbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7UHJvY2Vzc30gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvcHJvY2Vzcy9wcm9jZXNzLnNlcnZpY2UnO1xuaW1wb3J0IHtTdHJpbmdNYXB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi90eXBlcy9zdHJpbmctbWFwJztcbmltcG9ydCB7SHR0cEVycm9yUmVzcG9uc2V9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7QXBwU3RhdGVTdG9yZX0gZnJvbSBcIi4uLy4uLy4uLy4uL3N0b3JlL2FwcC1zdGF0ZS9hcHAtc3RhdGUuc3RvcmVcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tbG9naW4tdWknLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbXSxcbiAgICBhbmltYXRpb25zOiBbXG4gICAgICAgIHRyaWdnZXIoJ2ZhZGUnLCBbXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCB1c2VBbmltYXRpb24oZmFkZUluLCB7XG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7dGltaW5nOiAwLjUsIGRlbGF5OiAwfVxuICAgICAgICAgICAgfSkpLFxuICAgICAgICBdKVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5VaUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgaGlkZGVuID0gdHJ1ZTtcbiAgICBsb2FkaW5nID0gZmFsc2U7XG4gICAgZXJyb3IgPSAnJztcbiAgICB1bmFtZSA9ICcnO1xuICAgIHBhc3N3ID0gJyc7XG4gICAgZW1haWwgPSAnJztcblxuICAgIGNhcmRTdGF0ZTogV3JpdGFibGVTaWduYWw8c3RyaW5nPiA9IHNpZ25hbCgnZnJvbnQnKTtcblxuICAgIHN5c3RlbUNvbmZpZ3MkOiBPYnNlcnZhYmxlPFN5c3RlbUNvbmZpZ01hcD4gPSB0aGlzLmNvbmZpZ3MuY29uZmlncyQ7XG4gICAgYXBwU3RyaW5ncyQ6IE9ic2VydmFibGU8TGFuZ3VhZ2VTdHJpbmdNYXA+ID0gdGhpcy5sYW5ndWFnZVN0b3JlLmFwcFN0cmluZ3MkO1xuXG4gICAgbGFuZ3VhZ2U6IHN0cmluZyA9IG51bGw7XG5cbiAgICB2bSQgPSB0aGlzLnN5c3RlbUNvbmZpZ3MkLnBpcGUoXG4gICAgICAgIGNvbWJpbmVMYXRlc3RXaXRoKHRoaXMuYXBwU3RyaW5ncyQpLFxuICAgICAgICBtYXAoKFtzeXN0ZW1Db25maWdzLCBhcHBTdHJpbmdzXTogW1N5c3RlbUNvbmZpZ01hcCwgTGFuZ3VhZ2VTdHJpbmdNYXBdKSA9PiB7XG4gICAgICAgICAgICBsZXQgc2hvd0xhbmd1YWdlcyA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IHNob3dGb3Jnb3RQYXNzd29yZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAoc3lzdGVtQ29uZmlncy5sYW5ndWFnZXMgJiYgc3lzdGVtQ29uZmlncy5sYW5ndWFnZXMuaXRlbXMgJiYgc3lzdGVtQ29uZmlncy5sb2dpbl9sYW5ndWFnZS52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHNob3dMYW5ndWFnZXMgPSBPYmplY3Qua2V5cyhzeXN0ZW1Db25maWdzLmxhbmd1YWdlcy5pdGVtcykubGVuZ3RoID4gMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHN5c3RlbUNvbmZpZ3MucGFzc3dvcmRzZXR0aW5nICYmIHN5c3RlbUNvbmZpZ3MucGFzc3dvcmRzZXR0aW5nLml0ZW1zKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZm9yZ290UGFzc3dvcmRQcm9wZXJ0eSA9IHN5c3RlbUNvbmZpZ3MucGFzc3dvcmRzZXR0aW5nLml0ZW1zLmZvcmdvdHBhc3N3b3JkT047XG4gICAgICAgICAgICAgICAgc2hvd0ZvcmdvdFBhc3N3b3JkID0gW3RydWUsICcxJywgJ3RydWUnXS5pbmNsdWRlcyhmb3Jnb3RQYXNzd29yZFByb3BlcnR5KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzeXN0ZW1Db25maWdzLFxuICAgICAgICAgICAgICAgIGFwcFN0cmluZ3MsXG4gICAgICAgICAgICAgICAgc2hvd0xhbmd1YWdlcyxcbiAgICAgICAgICAgICAgICBzaG93Rm9yZ290UGFzc3dvcmRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pXG4gICAgKTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByb3RlY3RlZCBhdXRoOiBBdXRoU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIG1lc3NhZ2U6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgY29uZmlnczogU3lzdGVtQ29uZmlnU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBsYW5ndWFnZVN0b3JlOiBMYW5ndWFnZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgcmVjb3ZlclBhc3N3b3JkU2VydmljZTogUmVjb3ZlclBhc3N3b3JkU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIGFwcFN0YXRlOiBBcHBTdGF0ZVN0b3JlXG4gICAgKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxhbmd1YWdlID0gbnVsbDtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zZXRDdXJyZW50TGFuZ3VhZ2UoKTtcbiAgICAgICAgdGhpcy5hcHBTdGF0ZS5yZW1vdmVBbGxQcmV2Um91dGVzKCk7XG4gICAgfVxuXG4gICAgb25MYW5ndWFnZVNlbGVjdChsYW5ndWFnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICghbGFuZ3VhZ2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsYW5ndWFnZSA9PT0gdGhpcy5sYW5ndWFnZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hhbmdlTGFuZ3VhZ2UobGFuZ3VhZ2UpO1xuICAgIH1cblxuICAgIGNoYW5nZUxhbmd1YWdlKGxhbmd1YWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5sYW5ndWFnZSA9IGxhbmd1YWdlO1xuXG4gICAgICAgIGxldCBsYW5ndWFnZXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzPy5hcHBTdGF0ZT8udXBkYXRlTG9hZGluZykge1xuICAgICAgICAgICAgdGhpcy5hcHBTdGF0ZS51cGRhdGVMb2FkaW5nKCdjaGFuZ2UtbGFuZ3VhZ2UnLCB0cnVlKTtcbiAgICAgICAgICAgIGxhbmd1YWdlc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sYW5ndWFnZVN0b3JlLmNoYW5nZUxhbmd1YWdlKGxhbmd1YWdlLCB0cnVlKS5waXBlKFxuICAgICAgICAgICAgdGFwKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobGFuZ3VhZ2VzTG9hZGluZykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcFN0YXRlLnVwZGF0ZUxvYWRpbmcoJ2NoYW5nZS1sYW5ndWFnZScsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICkuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgZ2V0RW5hYmxlZExhbmd1YWdlcygpOiBTdHJpbmdNYXAge1xuICAgICAgICByZXR1cm4gdGhpcy5sYW5ndWFnZVN0b3JlLmdldEVuYWJsZWRMYW5ndWFnZXMoKTtcbiAgICB9XG5cbiAgICBnZXRFbmFibGVkTGFuZ3VhZ2VzS2V5cygpOiBzdHJpbmdbXSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmxhbmd1YWdlU3RvcmUuZ2V0RW5hYmxlZExhbmd1YWdlcygpID8/IHt9KSA/PyBbXTtcbiAgICB9XG5cbiAgICBmbGlwQ2FyZCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuY2FyZFN0YXRlKCkgPT09ICdmcm9udCcpIHtcbiAgICAgICAgICAgIHRoaXMuY2FyZFN0YXRlLnNldCgnYmFjaycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jYXJkU3RhdGUuc2V0KCdmcm9udCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuVG9Mb2dpbigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jYXJkU3RhdGUuc2V0KCdmcm9udCcpO1xuICAgICAgICB0aGlzLmF1dGguaXNVc2VyTG9nZ2VkSW4ubmV4dChmYWxzZSk7XG4gICAgICAgIHRoaXMuYXV0aC5oYW5kbGVJbnZhbGlkU2Vzc2lvbignTEJMXzJGQV9MT0dJTl9DQU5DRUwnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRvTG9naW4oKTogdm9pZCB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuYXV0aC5kb0xvZ2luKHRoaXMudW5hbWUsIHRoaXMucGFzc3csIHRoaXMub25Mb2dpblN1Y2Nlc3MuYmluZCh0aGlzKSwgdGhpcy5vbkxvZ2luRXJyb3IuYmluZCh0aGlzKSwgdGhpcy5vblR3b0ZhY3Rvci5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICByZWNvdmVyUGFzc3dvcmQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVjb3ZlclBhc3N3b3JkU2VydmljZVxuICAgICAgICAgICAgLnJ1bih0aGlzLnVuYW1lLCB0aGlzLmVtYWlsKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAocHJvY2VzczogUHJvY2VzcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UubG9nKCdSZWNvdmVyIFBhc3N3b3JkIFN0YXR1czogJyArIHByb2Nlc3Muc3RhdHVzKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgaGFuZGxlciA9ICdhZGRTdWNjZXNzTWVzc2FnZUJ5S2V5JztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3Muc3RhdHVzID09PSAnZXJyb3InKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyID0gJ2FkZERhbmdlck1lc3NhZ2VCeUtleSc7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5tZXNzYWdlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5tZXNzYWdlcy5mb3JFYWNoKG1lc3NhZ2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZVtoYW5kbGVyXShtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZS5sb2coJ1JlY292ZXIgUGFzc3dvcmQgZmFpbGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZS5hZGREYW5nZXJNZXNzYWdlQnlLZXkoJ0VSUl9BSkFYX0xPQURfRkFJTFVSRScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgb25Mb2dpblN1Y2Nlc3MocmVzdWx0OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWVzc2FnZS5sb2coJ0xvZ2luIHN1Y2Nlc3MnKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlLnJlbW92ZU1lc3NhZ2VzKCk7XG5cbiAgICAgICAgdGhpcy5hdXRoLnNldExhbmd1YWdlKHJlc3VsdCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBvbkxvZ2luRXJyb3IoaHR0cEVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSk6IHZvaWQge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tZXNzYWdlLmxvZygnTG9naW4gZmFpbGVkJyk7XG5cbiAgICAgICAgY29uc3QgZGVmYXVsdE1lc3NhZ2UgPSAnTG9naW4gY3JlZGVudGlhbHMgaW5jb3JyZWN0LCBwbGVhc2UgdHJ5IGFnYWluLic7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRUb29NYW55RmFpbGVkTWVzc2FnZSA9ICdUb28gbWFueSBmYWlsZWQgbG9naW4gYXR0ZW1wdHMsIHBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJztcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSB0aGlzLmxhbmd1YWdlU3RvcmUuZ2V0RmllbGRMYWJlbCgnTE9HSU5fSU5DT1JSRUNUJyk7XG5cbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gaHR0cEVycm9yPy5lcnJvcj8uZXJyb3IgPz8gJyc7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBlcnJvck1lc3NhZ2UgPT09ICdzdHJpbmcnICYmIGVycm9yTWVzc2FnZS5pbmNsdWRlcygnVG9vIG1hbnkgZmFpbGVkIGxvZ2luIGF0dGVtcHRzLCBwbGVhc2UgdHJ5IGFnYWluIGluJykpIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSB0aGlzLmdldFRvb01hbnlGYWlsZWRNZXNzYWdlKGRlZmF1bHRUb29NYW55RmFpbGVkTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW1lc3NhZ2UpIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBkZWZhdWx0TWVzc2FnZVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubWVzc2FnZS5hZGREYW5nZXJNZXNzYWdlKG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIG9uVHdvRmFjdG9yKHJlc3VsdDogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2FyZFN0YXRlLnNldCgnMmZhJyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldFRvb01hbnlGYWlsZWRNZXNzYWdlKGRlZmF1bHRUb29NYW55RmFpbGVkTWVzc2FnZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHRvb01hbnlGYWlsZWRNZXNzYWdlID0gdGhpcy5sYW5ndWFnZVN0b3JlLmdldEZpZWxkTGFiZWwoJ0xPR0lOX1RPT19NQU5ZX0ZBSUxFRCcpO1xuXG4gICAgICAgIGlmICghdG9vTWFueUZhaWxlZE1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHRvb01hbnlGYWlsZWRNZXNzYWdlID0gZGVmYXVsdFRvb01hbnlGYWlsZWRNZXNzYWdlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b29NYW55RmFpbGVkTWVzc2FnZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2V0Q3VycmVudExhbmd1YWdlKCk6IHZvaWQge1xuICAgICAgICBsZXQgY3VycmVudExhbmd1YWdlID0gdGhpcy5sYW5ndWFnZVN0b3JlLmdldFNlbGVjdGVkTGFuZ3VhZ2UoKSA/PyAnJztcbiAgICAgICAgY29uc3QgYWN0aXZlTGFuZ3VhZ2UgPSB0aGlzLmxhbmd1YWdlU3RvcmUuZ2V0QWN0aXZlTGFuZ3VhZ2UoKTtcblxuICAgICAgICBpZiAoIWN1cnJlbnRMYW5ndWFnZSkge1xuICAgICAgICAgICAgY3VycmVudExhbmd1YWdlID0gYWN0aXZlTGFuZ3VhZ2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMubGFuZ3VhZ2VTdG9yZS5pc0xhbmd1YWdlRW5hYmxlZChjdXJyZW50TGFuZ3VhZ2UpKSB7XG4gICAgICAgICAgICBjdXJyZW50TGFuZ3VhZ2UgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmxhbmd1YWdlICYmIGN1cnJlbnRMYW5ndWFnZSA9PT0gdGhpcy5sYW5ndWFnZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGVmYXVsdExhbmd1YWdlID0gdGhpcy5jb25maWdzLmdldENvbmZpZ1ZhbHVlKCdkZWZhdWx0X2xhbmd1YWdlJykgPz8gJ2VuX3VzJztcblxuICAgICAgICBpZiAoIWN1cnJlbnRMYW5ndWFnZSkge1xuICAgICAgICAgICAgY3VycmVudExhbmd1YWdlID0gZGVmYXVsdExhbmd1YWdlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmxhbmd1YWdlU3RvcmUuaXNMYW5ndWFnZUVuYWJsZWQoY3VycmVudExhbmd1YWdlKSkge1xuICAgICAgICAgICAgY3VycmVudExhbmd1YWdlID0gdGhpcy5sYW5ndWFnZVN0b3JlLmdldEZpcnN0TGFuZ3VhZ2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGFuZ3VhZ2UgPSBjdXJyZW50TGFuZ3VhZ2U7XG4gICAgICAgIHRoaXMuY2hhbmdlTGFuZ3VhZ2UoY3VycmVudExhbmd1YWdlKTtcbiAgICB9XG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48ZGl2ICpuZ0lmPVwiKHZtJCB8IGFzeW5jKSBhcyB2bVwiIGNsYXNzPVwibG9naW4tdmlldyBmdWxsLWhlaWdodC12aWV3IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblxuICAgIDwhLS0gU3RhcnQgb2YgbG9naW4gZm9ybSBzZWN0aW9uIC0tPlxuXG4gICAgPGZvcm0gbmFtZT1cImxvZ2luXCIgY2xhc3M9XCJsb2dpbi1mb3JtXCIgI2xvZ2luRm9ybT1cIm5nRm9ybVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1yb3cgZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxzY3JtLWxvZ28tdWk+PC9zY3JtLWxvZ28tdWk+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiICpuZ0lmPVwidm0uc2hvd0xhbmd1YWdlcyAmJiBjYXJkU3RhdGUoKSAhPT0gJzJmYSdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJcIiBmb3I9XCJsYW5ndWFnZXNcIj57e3ZtLmFwcFN0cmluZ3NbJ0xCTF9MQU5HVUFHRSddfX08L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xMDBcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXItYWRkb24gbGVmdC1hZGRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0ICNsYW5ndWFnZVNlbGVjdCBpZD1cImxhbmd1YWdlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJvbkxhbmd1YWdlU2VsZWN0KGxhbmd1YWdlU2VsZWN0LnZhbHVlKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBnZXRFbmFibGVkTGFuZ3VhZ2VzS2V5cygpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3NlbGVjdGVkXT1cIihsYW5ndWFnZSA/PyAnZW5fdXMnKSA9PT0gaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3tnZXRFbmFibGVkTGFuZ3VhZ2VzKClbaXRlbV19fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tcm93IGZhZGUtY2FyZFwiPlxuXG4gICAgICAgICAgICA8IS0tIENhcmQgZnJvbnQgLS0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmFkZS1jYXJkLWZyb250IGNvbFwiXG4gICAgICAgICAgICAgICAgICpuZ0lmPVwiY2FyZFN0YXRlKCkgPT09ICdmcm9udCdcIlxuICAgICAgICAgICAgICAgICBbQGZhZGVdPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyLWFkZG9uIGxlZnQtYWRkb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNjcm0taW1hZ2UgaW1hZ2U9XCJsb2dpbl91c2VyXCI+PC9zY3JtLWltYWdlPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgWyhuZ01vZGVsKV09XCJ1bmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmlzLWludmFsaWRdPVwidXNlcm5hbWUuaW52YWxpZCAmJiB1c2VybmFtZS50b3VjaGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICN1c2VybmFtZT1cIm5nTW9kZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7e3ZtLmFwcFN0cmluZ3NbJ0xCTF9VU0VSX05BTUUnXX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJVc2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cInVzZXJuYW1lLmludmFsaWQgJiYgdXNlcm5hbWUudG91Y2hlZFwiIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3t2bS5hcHBTdHJpbmdzWydFUlJfTUlTU0lOR19SRVFVSVJFRF9GSUVMRFMnXX19XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyLWFkZG9uIGxlZnQtYWRkb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNjcm0taW1hZ2UgaW1hZ2U9XCJsb2dpbl9wYXNzd29yZFwiPjwvc2NybS1pbWFnZT5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFsobmdNb2RlbCldPVwicGFzc3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3MuaXMtaW52YWxpZF09XCJwYXNzd29yZC5pbnZhbGlkICYmIHBhc3N3b3JkLnRvdWNoZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgI3Bhc3N3b3JkPVwibmdNb2RlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInt7dm0uYXBwU3RyaW5nc1snTEJMX1BBU1NXT1JEJ119fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cInBhc3N3b3JkLmludmFsaWQgJiYgcGFzc3dvcmQudG91Y2hlZFwiIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3t2bS5hcHBTdHJpbmdzWydFUlJfTUlTU0lOR19SRVFVSVJFRF9GSUVMRFMnXX19XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwibG9naW4tYnV0dG9uXCIgY2xhc3M9XCJsb2dpbi1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgW3Njcm0tYnV0dG9uLWxvYWRpbmddPVwibG9hZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwibG9naW5Gb3JtLmNvbnRyb2wubWFya0FsbEFzVG91Y2hlZCgpOyBsb2dpbkZvcm0udmFsaWQgJiYgZG9Mb2dpbigpXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7dm0uYXBwU3RyaW5nc1snTEJMX0xPR0lOX0JVVFRPTl9MQUJFTCddfX1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9yZ290dGVuLXBhc3N3b3JkXCIgKm5nSWY9XCJ2bS5zaG93Rm9yZ290UGFzc3dvcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJmb3Jnb3R0ZW4tcGFzc3dvcmQtbGlua1wiIChjbGljayk9XCJmbGlwQ2FyZCgpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7e3ZtLmFwcFN0cmluZ3NbJ0xCTF9MT0dJTl9GT1JHT1RfUEFTU1dPUkQnXX19XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwhLS0gQ2FyZCBiYWNrLS0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmFkZS1jYXJkLWJhY2sgY29sXCJcbiAgICAgICAgICAgICAgICAgKm5nSWY9XCJjYXJkU3RhdGUoKSA9PT0gJ2JhY2snXCJcbiAgICAgICAgICAgICAgICAgW0BmYWRlXT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXItYWRkb24gbGVmdC1hZGRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8c2NybS1pbWFnZSBpbWFnZT1cImxvZ2luX3VzZXJcIj48L3Njcm0taW1hZ2U+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBbKG5nTW9kZWwpXT1cInVuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3MuaXMtaW52YWxpZF09XCJ1c2VybmFtZS5pbnZhbGlkICYmIHVzZXJuYW1lLnRvdWNoZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgI3VzZXJuYW1lPVwibmdNb2RlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInt7dm0uYXBwU3RyaW5nc1snTEJMX1VTRVJfTkFNRSddfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwidXNlcm5hbWUuaW52YWxpZCAmJiB1c2VybmFtZS50b3VjaGVkXCIgY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7e3ZtLmFwcFN0cmluZ3NbJ0VSUl9NSVNTSU5HX1JFUVVJUkVEX0ZJRUxEUyddfX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXItYWRkb24gbGVmdC1hZGRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8c2NybS1pbWFnZSBpbWFnZT1cImVtYWlsXCI+PC9zY3JtLWltYWdlPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgWyhuZ01vZGVsKV09XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzcy5pcy1pbnZhbGlkXT1cIm1haWwuaW52YWxpZCAmJiBtYWlsLnRvdWNoZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgI21haWw9XCJuZ01vZGVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwie3t2bS5hcHBTdHJpbmdzWydMQkxfRU1BSUwnXX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJFbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIm1haWwuaW52YWxpZCAmJiBtYWlsLnRvdWNoZWRcIiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7dm0uYXBwU3RyaW5nc1snRVJSX01JU1NJTkdfUkVRVUlSRURfRklFTERTJ119fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJzdWJtaXQtYnV0dG9uIGxvZ2luLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JtLWJ1dHRvbi1sb2FkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwibG9naW5Gb3JtLmNvbnRyb2wubWFya0FsbEFzVG91Y2hlZCgpOyBsb2dpbkZvcm0udmFsaWQgJiYgcmVjb3ZlclBhc3N3b3JkKClcIj5cbiAgICAgICAgICAgICAgICAgICAge3t2bS5hcHBTdHJpbmdzWydMQkxfR0VORVJBVEVfUEFTU1dPUkRfQlVUVE9OX1RJVExFJ119fVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYmFjay1saW5rIGZvcmdvdHRlbi1wYXNzd29yZC1saW5rXCIgKGNsaWNrKT1cImZsaXBDYXJkKClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7dm0uYXBwU3RyaW5nc1snTEJMX0JBQ0snXX19XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8IS0tIDJmYSBDYXJkLS0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmFkZS1jYXJkLWJhY2sgY29sXCJcbiAgICAgICAgICAgICAgICAgKm5nSWY9XCJjYXJkU3RhdGUoKSA9PT0gJzJmYSdcIlxuICAgICAgICAgICAgICAgICBbQGZhZGVdPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lci1hZGRvbiBsZWZ0LWFkZG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzY3JtLTJmYS1jaGVjayBjbGFzcz0nbG9naW4tYnV0dG9uJz48L3Njcm0tMmZhLWNoZWNrPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYmFjay1saW5rIGZvcmdvdHRlbi1wYXNzd29yZC1saW5rXCIgKGNsaWNrKT1cInJldHVyblRvTG9naW4oKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3t2bS5hcHBTdHJpbmdzWydMQkxfQkFDSyddfX1cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cblxuICAgIDwhLS0gRW5kIG9mIGxvZ2luIGZvcm0gc2VjdGlvbiAtLT5cblxuPC9kaXY+XG5cbjwhLS0gRW5kIG9mIGxvZ2luIGNvbXBvbmVudCBzZWN0aW9uIC0tPlxuIl19