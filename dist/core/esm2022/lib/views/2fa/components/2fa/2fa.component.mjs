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
import { Component, HostListener, signal } from "@angular/core";
import { AuthService } from "../../../../services/auth/auth.service";
import { Router } from "@angular/router";
import { MessageService } from "../../../../services/message/message.service";
import { isTrue } from '../../../../common/utils/value-utils';
import { LanguageStore } from "../../../../store/language/language.store";
import { UserPreferenceStore } from "../../../../store/user-preference/user-preference.store";
import { Clipboard } from '@angular/cdk/clipboard';
import { GenerateBackupCodes } from "../../../../services/process/processes/generate-backup-codes/generate-backup-codes";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { TwoFactorCheckModalComponent } from "../2fa-check-modal/2fa-check-modal.component";
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/auth/auth.service";
import * as i2 from "@angular/router";
import * as i3 from "../../../../services/message/message.service";
import * as i4 from "../../../../store/language/language.store";
import * as i5 from "../../../../store/user-preference/user-preference.store";
import * as i6 from "@ng-bootstrap/ng-bootstrap";
import * as i7 from "@angular/cdk/clipboard";
import * as i8 from "../../../../services/process/processes/generate-backup-codes/generate-backup-codes";
import * as i9 from "@angular/common";
import * as i10 from "../../../../components/module-title/module-title.component";
import * as i11 from "../../../../components/label/label.component";
import * as i12 from "../../../../components/image/image.component";
import * as i13 from "../../../../components/button/button.component";
import * as i14 from "@angular/forms";
import * as i15 from "../../../../components/widget-panel/widget-panel.component";
import * as i16 from "../../../../pipes/trust-html/trust-html.pipe";
function TwoFactorComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 22);
    i0.ɵɵelement(1, "scrm-label", 23);
    i0.ɵɵelementEnd();
} }
function TwoFactorComponent_scrm_button_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-button", 24);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("config", ctx_r0.enableAppMethodButtonConfig);
} }
function TwoFactorComponent_scrm_button_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-button", 24);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("config", ctx_r0.cancelAppMethodButtonConfig);
} }
function TwoFactorComponent_scrm_button_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-button", 24);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("config", ctx_r0.disableAppMethodButtonConfig);
} }
function TwoFactorComponent_div_23_div_3_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 38)(1, "a", 39);
    i0.ɵɵlistener("click", function TwoFactorComponent_div_23_div_3_div_4_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.setShowSecret(true)); });
    i0.ɵɵelement(2, "scrm-label", 40);
    i0.ɵɵelementEnd()();
} }
function TwoFactorComponent_div_23_div_3_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 38)(1, "a", 39);
    i0.ɵɵlistener("click", function TwoFactorComponent_div_23_div_3_div_5_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.setShowSecret(false)); });
    i0.ɵɵelement(2, "scrm-label", 41);
    i0.ɵɵelementEnd()();
} }
function TwoFactorComponent_div_23_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 34)(1, "div", 35);
    i0.ɵɵelement(2, "div", 36);
    i0.ɵɵpipe(3, "trustHtml");
    i0.ɵɵtemplate(4, TwoFactorComponent_div_23_div_3_div_4_Template, 3, 0, "div", 37)(5, TwoFactorComponent_div_23_div_3_div_5_Template, 3, 0, "div", 37);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(3, 3, ctx_r0.qrCodeSvg), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r0.showSecret());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.showSecret());
} }
function TwoFactorComponent_div_23_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 42);
    i0.ɵɵelement(1, "scrm-label", 43);
    i0.ɵɵelementStart(2, "span", 44);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "scrm-button", 45);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.secret);
    i0.ɵɵadvance();
    i0.ɵɵproperty("config", ctx_r0.copySecretButtonConfig);
} }
function TwoFactorComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 25)(1, "div", 26)(2, "div", 9);
    i0.ɵɵtemplate(3, TwoFactorComponent_div_23_div_3_Template, 6, 5, "div", 27);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 9);
    i0.ɵɵtemplate(5, TwoFactorComponent_div_23_div_5_Template, 5, 2, "div", 28);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 29)(7, "div", 9)(8, "div");
    i0.ɵɵelement(9, "scrm-label", 30);
    i0.ɵɵelementStart(10, "div", 31)(11, "input", 32);
    i0.ɵɵtwoWayListener("ngModelChange", function TwoFactorComponent_div_23_Template_input_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.authCode, $event) || (ctx_r0.authCode = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(12, "scrm-button", 33);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.qrCodeSvg);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.showSecret());
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.authCode);
    i0.ɵɵadvance();
    i0.ɵɵproperty("config", ctx_r0.verifyCodeButtonConfig);
} }
function TwoFactorComponent_div_24_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 22);
    i0.ɵɵelement(1, "scrm-label", 51);
    i0.ɵɵelementEnd();
} }
function TwoFactorComponent_div_24_scrm_button_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-button", 24);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("config", ctx_r0.regenerateBackupCodesButtonConfig);
} }
function TwoFactorComponent_div_24_ng_container_12_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 56);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const codes_r5 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(codes_r5);
} }
function TwoFactorComponent_div_24_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 52);
    i0.ɵɵelement(2, "scrm-button", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 53)(4, "div")(5, "div", 54);
    i0.ɵɵtemplate(6, TwoFactorComponent_div_24_ng_container_12_ng_container_6_Template, 3, 1, "ng-container", 55);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("config", ctx_r0.copyBackupButtonConfig);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r0.backupCodes);
} }
function TwoFactorComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 46)(1, "div", 47)(2, "scrm-widget-panel", 10)(3, "span", 11);
    i0.ɵɵelement(4, "scrm-image", 48);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 13);
    i0.ɵɵtemplate(6, TwoFactorComponent_div_24_span_6_Template, 2, 0, "span", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span", 15);
    i0.ɵɵtemplate(8, TwoFactorComponent_div_24_scrm_button_8_Template, 1, 1, "scrm-button", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 17)(10, "div", 18);
    i0.ɵɵelement(11, "scrm-label", 49);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(12, TwoFactorComponent_div_24_ng_container_12_Template, 7, 2, "ng-container", 50);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("title", ctx_r0.recoveryCodesHeaderLabel);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r0.areRecoveryCodesGenerated());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.isAppMethodEnabled());
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r0.areRecoveryCodesGenerated() && ctx_r0.backupCodes);
} }
export class TwoFactorComponent {
    onEnterKey() {
        this.finalize2fa();
    }
    constructor(authService, router, message, language, userPreference, modalService, clipboard, generateBackupCodesService) {
        this.authService = authService;
        this.router = router;
        this.message = message;
        this.language = language;
        this.userPreference = userPreference;
        this.modalService = modalService;
        this.clipboard = clipboard;
        this.generateBackupCodesService = generateBackupCodesService;
        this.isAppMethodEnabled = signal(false);
        this.areRecoveryCodesGenerated = signal(false);
        this.isQrCodeGenerated = signal(false);
        this.showSecret = signal(false);
        this.title = '';
        this.appMethodHeaderLabel = '';
        this.recoveryCodesHeaderLabel = '';
    }
    ngOnInit() {
        this.title = this.language.getAppString('LBL_TWO_FACTOR_AUTH');
        this.appMethodHeaderLabel = this.language.getAppString('LBL_TWO_FACTOR_AUTH_APP_METHOD');
        this.recoveryCodesHeaderLabel = this.language.getAppString('LBL_BACKUP_CODES');
        const isEnabled = this.userPreference.getUserPreference('is_two_factor_enabled') ?? false;
        this.isAppMethodEnabled.set(isEnabled);
        this.areRecoveryCodesGenerated.set(isEnabled);
        this.showSecret.set(false);
        this.initButtons();
    }
    enable2fa() {
        this.authService.enable2fa().subscribe({
            next: (response) => {
                this.qrCodeUrl = response?.url;
                this.qrCodeSvg = response?.svg;
                this.secret = response.secret;
                this.areRecoveryCodesGenerated.set(true);
                this.isQrCodeGenerated.set(true);
            },
            error: () => {
                this.isAppMethodEnabled.set(false);
                this.areRecoveryCodesGenerated.set(false);
            }
        });
    }
    disable2FactorAuth() {
        const modal = this.modalService.open(TwoFactorCheckModalComponent, { size: 'lg' });
        modal.result.then((result) => {
            if (!result.two_factor_complete) {
                this.message.addDangerMessageByKey('LBL_FACTOR_AUTH_FAIL');
                return;
            }
            this.disable2fa();
            return;
        }).catch();
    }
    cancel2fa() {
        this.disable2fa();
    }
    disable2fa() {
        this.authService.disable2fa().subscribe({
            next: (response) => {
                if (isTrue(response?.two_factor_disabled)) {
                    this.isAppMethodEnabled.set(false);
                    this.areRecoveryCodesGenerated.set(false);
                    this.isQrCodeGenerated.set(false);
                    this.message.addSuccessMessageByKey('LBL_FACTOR_AUTH_DISABLE');
                }
            },
            error: () => {
                this.isAppMethodEnabled.set(true);
                this.areRecoveryCodesGenerated.set(true);
            }
        });
    }
    getTitle() {
        return this.title;
    }
    finalize2fa() {
        this.authService.finalize2fa(this.authCode).subscribe(response => {
            const verified = response?.two_factor_setup_complete ?? false;
            if (isTrue(verified)) {
                this.generateCodes();
                this.message.addSuccessMessageByKey('LBL_FACTOR_AUTH_SUCCESS');
                this.isAppMethodEnabled.set(true);
                this.isQrCodeGenerated.set(false);
                this.authCode = '';
                return;
            }
            this.message.addDangerMessageByKey('LBL_FACTOR_AUTH_FAIL');
        });
    }
    copyBackupCodes() {
        this.clipboard.copy(this.backupCodes);
    }
    copySecret() {
        this.clipboard.copy(this.secret);
    }
    generateCodes() {
        this.backupCodes = null;
        this.generateBackupCodesService.generate().subscribe({
            next: (response) => {
                this.backupCodes = response?.data.backupCodes;
                this.areRecoveryCodesGenerated.set(true);
            },
            error: () => {
                this.areRecoveryCodesGenerated.set(false);
            }
        });
        return;
    }
    generateBackupCodes() {
        const modal = this.modalService.open(TwoFactorCheckModalComponent, { size: 'lg' });
        modal.result.then((result) => {
            if (!result.two_factor_complete) {
                this.message.addDangerMessageByKey('LBL_FACTOR_AUTH_FAIL');
                return;
            }
            this.areRecoveryCodesGenerated.set(false);
            this.generateCodes();
            this.message.addSuccessMessageByKey('LBL_REGENERATED_BACKUP_CODES');
        }).catch();
    }
    setShowSecret(value) {
        this.showSecret.set(value);
        return;
    }
    initButtons() {
        this.enableAppMethodButtonConfig = {
            klass: 'btn btn-sm btn-main',
            onClick: (() => {
                this.enable2fa();
            }),
            labelKey: 'LBL_ENABLE',
            titleKey: ''
        };
        this.disableAppMethodButtonConfig = {
            klass: 'btn btn-sm btn-main',
            onClick: (() => {
                this.disable2FactorAuth();
            }),
            labelKey: 'LBL_DISABLE',
            titleKey: ''
        };
        this.cancelAppMethodButtonConfig = {
            klass: 'btn btn-sm btn-main',
            onClick: (() => {
                this.cancel2fa();
            }),
            labelKey: 'LBL_CANCEL',
            titleKey: ''
        };
        this.regenerateBackupCodesButtonConfig = {
            klass: 'btn btn-sm btn-main',
            onClick: (() => {
                this.generateBackupCodes();
            }),
            labelKey: 'LBL_REGENERATE_CODES',
            titleKey: ''
        };
        this.verifyCodeButtonConfig = {
            klass: 'btn btn-sm btn-main mb-2',
            onClick: (() => {
                this.finalize2fa();
            }),
            labelKey: 'LBL_VERIFY_2FA',
            titleKey: ''
        };
        this.copyBackupButtonConfig = {
            klass: 'btn btn-sm btn-main copy-button',
            onClick: (() => {
                this.copyBackupCodes();
            }),
            labelKey: 'LBL_COPY',
            titleKey: '',
            icon: 'clipboard'
        };
        this.copySecretButtonConfig = {
            klass: 'btn btn-sm btn-main ml-0',
            onClick: (() => {
                this.copySecret();
            }),
            labelKey: 'LBL_COPY',
            titleKey: '',
            icon: 'clipboard'
        };
    }
    static { this.ɵfac = function TwoFactorComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TwoFactorComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i3.MessageService), i0.ɵɵdirectiveInject(i4.LanguageStore), i0.ɵɵdirectiveInject(i5.UserPreferenceStore), i0.ɵɵdirectiveInject(i6.NgbModal), i0.ɵɵdirectiveInject(i7.Clipboard), i0.ɵɵdirectiveInject(i8.GenerateBackupCodes)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TwoFactorComponent, selectors: [["scrm-2fa"]], hostBindings: function TwoFactorComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keyup.control.enter", function TwoFactorComponent_keyup_control_enter_HostBindingHandler() { return ctx.onEnterKey(); });
        } }, decls: 25, vars: 8, consts: [["id", "two-factor", 1, "m-0", "pt-5"], [1, "list-view-header", "pb-3"], [1, "row", "mr-0"], [1, "col-md-12", "d-flex"], [1, "list-view-title", "title-font", 3, "title"], [1, "list-view-hr-container"], [1, "list-view-hr"], [1, "container"], [1, "row", "mb-3"], [1, "col"], [3, "title"], ["widget-header-icon-area", ""], ["image", "mobile-phone"], ["widget-header-status-area", ""], ["class", "badge badge-pill badge-success", 4, "ngIf"], ["widget-header-button", ""], [3, "config", 4, "ngIf"], ["widget-body", ""], [1, "d-flex", "col-md-12", "pl-4", "pr-4", "pt-2", "pb-2"], ["labelKey", "LBL_OTP_SETUP", 1, "small"], ["class", "row-container", 4, "ngIf"], ["class", "row pt-3", 4, "ngIf"], [1, "badge", "badge-pill", "badge-success"], ["labelKey", "LBL_ENABLED"], [3, "config"], [1, "row-container"], [1, "qr-code-container"], ["class", "qr-code-col", 4, "ngIf"], ["class", "qr-code-secret", 4, "ngIf"], [1, "row"], ["labelKey", "LBL_QR_CODE_HELP", 1, "pl-3", "d-inline-block", "qr-code-label"], [1, "d-flex", "flex-column", "pt-4", "align-items-center"], ["id", "auth_code", "type", "text", "name", "auth_code", "autocomplete", "one-time-code", 1, "mb-3", "auth-input", 3, "ngModelChange", "ngModel"], ["id", "submit-2fa-code", 3, "config"], [1, "qr-code-col"], [1, "qr-code"], [3, "innerHTML"], ["class", "secret-container", 4, "ngIf"], [1, "secret-container"], [1, "small", "show-secret-link", "pl-1", 3, "click"], ["labelKey", "LBL_USE_SECRET"], ["labelKey", "LBL_HIDE_SECRET"], [1, "qr-code-secret"], ["labelKey", "LBL_USE_SECRET_DESC", 1, "pb-3"], [1, "font-weight-bold", "pb-2", "secret"], [1, "pb-2", 3, "config"], [1, "row", "pt-3"], [1, "col", "mb-4"], ["image", "key"], ["labelKey", "LBL_BACKUP_CODES_INFO", 1, "small"], [4, "ngIf"], ["labelKey", "LBL_GENERATED"], [1, "d-flex", "flex-column"], [1, "d-flex", "col-md-12", "pl-4", "pr-4", "pt-2", "pb-3"], [1, "backup-codes-container"], [4, "ngFor", "ngForOf"], [1, "backup-codes"]], template: function TwoFactorComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3);
            i0.ɵɵelement(5, "scrm-module-title", 4);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "div", 5);
            i0.ɵɵelement(7, "hr", 6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "scrm-widget-panel", 10)(12, "span", 11);
            i0.ɵɵelement(13, "scrm-image", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "span", 13);
            i0.ɵɵtemplate(15, TwoFactorComponent_span_15_Template, 2, 0, "span", 14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "span", 15);
            i0.ɵɵtemplate(17, TwoFactorComponent_scrm_button_17_Template, 1, 1, "scrm-button", 16)(18, TwoFactorComponent_scrm_button_18_Template, 1, 1, "scrm-button", 16)(19, TwoFactorComponent_scrm_button_19_Template, 1, 1, "scrm-button", 16);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "div", 17)(21, "div", 18);
            i0.ɵɵelement(22, "scrm-label", 19);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(23, TwoFactorComponent_div_23_Template, 13, 4, "div", 20);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵtemplate(24, TwoFactorComponent_div_24_Template, 13, 4, "div", 21);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementContainerEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("title", ctx.getTitle());
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("title", ctx.appMethodHeaderLabel);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.isAppMethodEnabled());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.isAppMethodEnabled() && !ctx.isQrCodeGenerated());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.isAppMethodEnabled() && ctx.isQrCodeGenerated());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isAppMethodEnabled() && !ctx.isQrCodeGenerated());
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.isQrCodeGenerated());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isAppMethodEnabled());
        } }, dependencies: [i9.NgForOf, i9.NgIf, i10.ModuleTitleComponent, i11.LabelComponent, i12.ImageComponent, i13.ButtonComponent, i14.DefaultValueAccessor, i14.NgControlStatus, i14.NgModel, i15.WidgetPanelComponent, i16.TrustHtmlPipe], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TwoFactorComponent, [{
        type: Component,
        args: [{ selector: 'scrm-2fa', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2024 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n\n<ng-container>\n    <div class='m-0 pt-5' id='two-factor'>\n        <div class='list-view-header pb-3'>\n            <div class='row mr-0'>\n                <div class='col-md-12 d-flex'>\n                    <scrm-module-title [title]=\"getTitle()\" class='list-view-title title-font'></scrm-module-title>\n                </div>\n            </div>\n\n            <div class='list-view-hr-container'>\n                <hr class='list-view-hr'>\n            </div>\n        </div>\n\n        <div class='container'>\n            <div class='row mb-3'>\n                <div class='col'>\n                    <scrm-widget-panel [title]=\"appMethodHeaderLabel\">\n                        <span widget-header-icon-area>\n                            <scrm-image image='mobile-phone'></scrm-image>\n                        </span>\n                        <span widget-header-status-area>\n                            <span *ngIf=\"isAppMethodEnabled()\" class='badge badge-pill badge-success'>\n                                <scrm-label labelKey='LBL_ENABLED'></scrm-label>\n                            </span>\n                        </span>\n                        <span widget-header-button>\n                            <scrm-button *ngIf=\"!isAppMethodEnabled() && !isQrCodeGenerated()\"\n                                         [config]=\"enableAppMethodButtonConfig\"></scrm-button>\n                            <scrm-button *ngIf=\"!isAppMethodEnabled() && isQrCodeGenerated()\"\n                                         [config]=\"cancelAppMethodButtonConfig\"></scrm-button>\n                            <scrm-button *ngIf=\"isAppMethodEnabled() && !isQrCodeGenerated()\"\n                                         [config]=\"disableAppMethodButtonConfig\"></scrm-button>\n                        </span>\n                        <div widget-body>\n                            <div class='d-flex col-md-12 pl-4 pr-4 pt-2 pb-2'>\n                                <scrm-label labelKey='LBL_OTP_SETUP' class='small'></scrm-label>\n                            </div>\n                            <div *ngIf=\"isQrCodeGenerated()\" class=\"row-container\">\n                                <div class=\"qr-code-container\">\n                                    <div class=\"col\">\n                                        <div *ngIf=\"qrCodeSvg\" class='qr-code-col'>\n                                            <div class='qr-code'>\n                                                <div [innerHTML]=\"qrCodeSvg | trustHtml\">\n                                                </div>\n                                                <div *ngIf=\"!showSecret()\" class=\"secret-container\">\n                                                    <a class=\"small show-secret-link pl-1\"\n                                                       (click)=\"setShowSecret(true)\">\n                                                        <scrm-label labelKey='LBL_USE_SECRET'>\n                                                        </scrm-label>\n                                                    </a>\n                                                </div>\n                                                <div *ngIf=\"showSecret()\" class=\"secret-container\">\n                                                    <a class=\"small show-secret-link pl-1\"\n                                                       (click)=\"setShowSecret(false)\">\n                                                        <scrm-label labelKey='LBL_HIDE_SECRET'>\n                                                        </scrm-label>\n                                                    </a>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col\">\n                                        <div *ngIf=\"showSecret()\" class='qr-code-secret'>\n                                            <scrm-label class=\"pb-3\" labelKey='LBL_USE_SECRET_DESC'>\n                                            </scrm-label>\n\n                                            <span class=\"font-weight-bold pb-2 secret\">{{ secret }}</span>\n\n                                            <scrm-button class=\"pb-2\"\n                                                         [config]=\"copySecretButtonConfig\"></scrm-button>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"col\">\n                                        <div>\n                                            <scrm-label labelKey='LBL_QR_CODE_HELP'\n                                                        class='pl-3 d-inline-block qr-code-label'>\n                                            </scrm-label>\n                                            <div class='d-flex flex-column pt-4 align-items-center'>\n                                                <input [(ngModel)]=\"authCode\"\n                                                       id='auth_code'\n                                                       type='text'\n                                                       name='auth_code'\n                                                       autocomplete='one-time-code'\n                                                       class='mb-3 auth-input'/>\n\n                                                <scrm-button id='submit-2fa-code'\n                                                             [config]=\"verifyCodeButtonConfig\">\n                                                </scrm-button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </scrm-widget-panel>\n                </div>\n\n            </div>\n            <div *ngIf=\"isAppMethodEnabled()\" class='row pt-3'>\n                <div class='col mb-4'>\n                    <scrm-widget-panel [title]=\"recoveryCodesHeaderLabel\">\n                        <span widget-header-icon-area>\n                            <scrm-image image='key'></scrm-image>\n                        </span>\n                        <span widget-header-status-area>\n                            <span *ngIf=\"areRecoveryCodesGenerated()\" class='badge badge-pill badge-success'>\n                                <scrm-label labelKey='LBL_GENERATED'></scrm-label>\n                            </span>\n                        </span>\n                        <span widget-header-button>\n                            <scrm-button *ngIf=\"isAppMethodEnabled()\"\n                                         [config]=\"regenerateBackupCodesButtonConfig\"></scrm-button>\n                        </span>\n                        <div widget-body>\n                            <div class='d-flex col-md-12 pl-4 pr-4 pt-2 pb-2'>\n                                <scrm-label class='small' labelKey='LBL_BACKUP_CODES_INFO'></scrm-label>\n                            </div>\n\n                            <ng-container *ngIf=\"areRecoveryCodesGenerated() && backupCodes\">\n                                <div class='d-flex flex-column'>\n                                    <scrm-button [config]=\"copyBackupButtonConfig\"></scrm-button>\n                                </div>\n                                <div class='d-flex col-md-12 pl-4 pr-4 pt-2 pb-3'>\n                                    <div>\n                                        <div class='backup-codes-container'>\n                                            <ng-container *ngFor=\"let codes of backupCodes;\">\n                                                <div class='backup-codes'>{{ codes }}</div>\n                                            </ng-container>\n                                        </div>\n                                    </div>\n\n                                </div>\n                            </ng-container>\n\n                        </div>\n                    </scrm-widget-panel>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</ng-container>\n" }]
    }], () => [{ type: i1.AuthService }, { type: i2.Router }, { type: i3.MessageService }, { type: i4.LanguageStore }, { type: i5.UserPreferenceStore }, { type: i6.NgbModal }, { type: i7.Clipboard }, { type: i8.GenerateBackupCodes }], { onEnterKey: [{
            type: HostListener,
            args: ['keyup.control.enter']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TwoFactorComponent, { className: "TwoFactorComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMmZhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi92aWV3cy8yZmEvY29tcG9uZW50cy8yZmEvMmZhLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi92aWV3cy8yZmEvY29tcG9uZW50cy8yZmEvMmZhLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBVSxNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3RGLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSx3Q0FBd0MsQ0FBQztBQUNuRSxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDdkMsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDhDQUE4QyxDQUFDO0FBQzVFLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUM1RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFFeEUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0seURBQXlELENBQUM7QUFDNUYsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ2pELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLG9GQUFvRixDQUFDO0FBQ3ZILE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRCxPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSw4Q0FBOEMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2E5RCxnQ0FBMEU7SUFDdEUsaUNBQWdEO0lBQ3BELGlCQUFPOzs7SUFHUCxrQ0FDa0U7OztJQUFyRCwyREFBc0M7OztJQUNuRCxrQ0FD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dGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyNCBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBIb3N0TGlzdGVuZXIsIE9uSW5pdCwgc2lnbmFsLCBXcml0YWJsZVNpZ25hbH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi8uLi9zZXJ2aWNlcy9hdXRoL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi8uLi9zZXJ2aWNlcy9tZXNzYWdlL21lc3NhZ2Uuc2VydmljZVwiO1xuaW1wb3J0IHtpc1RydWV9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi91dGlscy92YWx1ZS11dGlscyc7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gXCIuLi8uLi8uLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZVwiO1xuaW1wb3J0IHtCdXR0b25DYWxsYmFjaywgQnV0dG9uSW50ZXJmYWNlfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5tb2RlbFwiO1xuaW1wb3J0IHtVc2VyUHJlZmVyZW5jZVN0b3JlfSBmcm9tIFwiLi4vLi4vLi4vLi4vc3RvcmUvdXNlci1wcmVmZXJlbmNlL3VzZXItcHJlZmVyZW5jZS5zdG9yZVwiO1xuaW1wb3J0IHtDbGlwYm9hcmR9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jbGlwYm9hcmQnO1xuaW1wb3J0IHtHZW5lcmF0ZUJhY2t1cENvZGVzfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZXMvcHJvY2Vzcy9wcm9jZXNzZXMvZ2VuZXJhdGUtYmFja3VwLWNvZGVzL2dlbmVyYXRlLWJhY2t1cC1jb2Rlc1wiO1xuaW1wb3J0IHtOZ2JNb2RhbH0gZnJvbSBcIkBuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwXCI7XG5pbXBvcnQge1R3b0ZhY3RvckNoZWNrTW9kYWxDb21wb25lbnR9IGZyb20gXCIuLi8yZmEtY2hlY2stbW9kYWwvMmZhLWNoZWNrLW1vZGFsLmNvbXBvbmVudFwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS0yZmEnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi8yZmEuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW10sXG59KVxuZXhwb3J0IGNsYXNzIFR3b0ZhY3RvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBxckNvZGVVcmw6IHN0cmluZztcbiAgICBxckNvZGVTdmc6IHN0cmluZztcbiAgICBzZWNyZXQ6IHN0cmluZztcbiAgICBiYWNrdXBDb2RlczogYW55O1xuICAgIGF1dGhDb2RlOiBzdHJpbmc7XG4gICAgaXNBcHBNZXRob2RFbmFibGVkOiBXcml0YWJsZVNpZ25hbDxib29sZWFuPiA9IHNpZ25hbChmYWxzZSk7XG4gICAgYXJlUmVjb3ZlcnlDb2Rlc0dlbmVyYXRlZDogV3JpdGFibGVTaWduYWw8Ym9vbGVhbj4gPSBzaWduYWwoZmFsc2UpO1xuICAgIGlzUXJDb2RlR2VuZXJhdGVkOiBXcml0YWJsZVNpZ25hbDxib29sZWFuPiA9IHNpZ25hbChmYWxzZSk7XG4gICAgc2hvd1NlY3JldDogV3JpdGFibGVTaWduYWw8Ym9vbGVhbj4gPSBzaWduYWwoZmFsc2UpO1xuXG4gICAgdGl0bGU6IHN0cmluZyA9ICcnO1xuICAgIGFwcE1ldGhvZEhlYWRlckxhYmVsOiBzdHJpbmcgPSAnJztcbiAgICBlbmFibGVBcHBNZXRob2RCdXR0b25Db25maWc6IEJ1dHRvbkludGVyZmFjZTtcbiAgICBkaXNhYmxlQXBwTWV0aG9kQnV0dG9uQ29uZmlnOiBCdXR0b25JbnRlcmZhY2U7XG4gICAgY2FuY2VsQXBwTWV0aG9kQnV0dG9uQ29uZmlnOiBCdXR0b25JbnRlcmZhY2U7XG4gICAgcmVnZW5lcmF0ZUJhY2t1cENvZGVzQnV0dG9uQ29uZmlnOiBCdXR0b25JbnRlcmZhY2U7XG4gICAgdmVyaWZ5Q29kZUJ1dHRvbkNvbmZpZzogQnV0dG9uSW50ZXJmYWNlO1xuICAgIGNvcHlCYWNrdXBCdXR0b25Db25maWc6IEJ1dHRvbkludGVyZmFjZTtcbiAgICBjb3B5U2VjcmV0QnV0dG9uQ29uZmlnOiBCdXR0b25JbnRlcmZhY2U7XG4gICAgcmVjb3ZlcnlDb2Rlc0hlYWRlckxhYmVsOiBzdHJpbmcgPSAnJztcblxuICAgIEBIb3N0TGlzdGVuZXIoJ2tleXVwLmNvbnRyb2wuZW50ZXInKVxuICAgIG9uRW50ZXJLZXkoKSB7XG4gICAgICAgIHRoaXMuZmluYWxpemUyZmEoKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwcm90ZWN0ZWQgbWVzc2FnZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBsYW5ndWFnZTogTGFuZ3VhZ2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIHVzZXJQcmVmZXJlbmNlOiBVc2VyUHJlZmVyZW5jZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbW9kYWxTZXJ2aWNlOiBOZ2JNb2RhbCxcbiAgICAgICAgcHJvdGVjdGVkIGNsaXBib2FyZDogQ2xpcGJvYXJkLFxuICAgICAgICBwcm90ZWN0ZWQgZ2VuZXJhdGVCYWNrdXBDb2Rlc1NlcnZpY2U6IEdlbmVyYXRlQmFja3VwQ29kZXMsXG4gICAgKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aGlzLmxhbmd1YWdlLmdldEFwcFN0cmluZygnTEJMX1RXT19GQUNUT1JfQVVUSCcpO1xuICAgICAgICB0aGlzLmFwcE1ldGhvZEhlYWRlckxhYmVsID0gdGhpcy5sYW5ndWFnZS5nZXRBcHBTdHJpbmcoJ0xCTF9UV09fRkFDVE9SX0FVVEhfQVBQX01FVEhPRCcpO1xuICAgICAgICB0aGlzLnJlY292ZXJ5Q29kZXNIZWFkZXJMYWJlbCA9IHRoaXMubGFuZ3VhZ2UuZ2V0QXBwU3RyaW5nKCdMQkxfQkFDS1VQX0NPREVTJyk7XG5cbiAgICAgICAgY29uc3QgaXNFbmFibGVkID0gdGhpcy51c2VyUHJlZmVyZW5jZS5nZXRVc2VyUHJlZmVyZW5jZSgnaXNfdHdvX2ZhY3Rvcl9lbmFibGVkJykgPz8gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5pc0FwcE1ldGhvZEVuYWJsZWQuc2V0KGlzRW5hYmxlZCk7XG4gICAgICAgIHRoaXMuYXJlUmVjb3ZlcnlDb2Rlc0dlbmVyYXRlZC5zZXQoaXNFbmFibGVkKTtcbiAgICAgICAgdGhpcy5zaG93U2VjcmV0LnNldChmYWxzZSk7XG4gICAgICAgIHRoaXMuaW5pdEJ1dHRvbnMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZW5hYmxlMmZhKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmVuYWJsZTJmYSgpLnN1YnNjcmliZSh7XG4gICAgICAgICAgICBuZXh0OiAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnFyQ29kZVVybCA9IHJlc3BvbnNlPy51cmw7XG4gICAgICAgICAgICAgICAgdGhpcy5xckNvZGVTdmcgPSByZXNwb25zZT8uc3ZnO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VjcmV0ID0gcmVzcG9uc2Uuc2VjcmV0O1xuICAgICAgICAgICAgICAgIHRoaXMuYXJlUmVjb3ZlcnlDb2Rlc0dlbmVyYXRlZC5zZXQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1FyQ29kZUdlbmVyYXRlZC5zZXQodHJ1ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQXBwTWV0aG9kRW5hYmxlZC5zZXQoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXJlUmVjb3ZlcnlDb2Rlc0dlbmVyYXRlZC5zZXQoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGlzYWJsZTJGYWN0b3JBdXRoKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBtb2RhbCA9IHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oVHdvRmFjdG9yQ2hlY2tNb2RhbENvbXBvbmVudCwge3NpemU6ICdsZyd9KTtcblxuICAgICAgICBtb2RhbC5yZXN1bHQudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlc3VsdC50d29fZmFjdG9yX2NvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlLmFkZERhbmdlck1lc3NhZ2VCeUtleSgnTEJMX0ZBQ1RPUl9BVVRIX0ZBSUwnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRpc2FibGUyZmEoKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9KS5jYXRjaCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjYW5jZWwyZmEoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGlzYWJsZTJmYSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkaXNhYmxlMmZhKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmRpc2FibGUyZmEoKS5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgbmV4dDogKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGlzVHJ1ZShyZXNwb25zZT8udHdvX2ZhY3Rvcl9kaXNhYmxlZCkpIHtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQXBwTWV0aG9kRW5hYmxlZC5zZXQoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFyZVJlY292ZXJ5Q29kZXNHZW5lcmF0ZWQuc2V0KGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1FyQ29kZUdlbmVyYXRlZC5zZXQoZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZS5hZGRTdWNjZXNzTWVzc2FnZUJ5S2V5KCdMQkxfRkFDVE9SX0FVVEhfRElTQUJMRScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNBcHBNZXRob2RFbmFibGVkLnNldCh0cnVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFyZVJlY292ZXJ5Q29kZXNHZW5lcmF0ZWQuc2V0KHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRUaXRsZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZmluYWxpemUyZmEoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZmluYWxpemUyZmEodGhpcy5hdXRoQ29kZSkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZlcmlmaWVkID0gcmVzcG9uc2U/LnR3b19mYWN0b3Jfc2V0dXBfY29tcGxldGUgPz8gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmIChpc1RydWUodmVyaWZpZWQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUNvZGVzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlLmFkZFN1Y2Nlc3NNZXNzYWdlQnlLZXkoJ0xCTF9GQUNUT1JfQVVUSF9TVUNDRVNTJyk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmlzQXBwTWV0aG9kRW5hYmxlZC5zZXQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1FyQ29kZUdlbmVyYXRlZC5zZXQoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0aENvZGUgPSAnJztcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlLmFkZERhbmdlck1lc3NhZ2VCeUtleSgnTEJMX0ZBQ1RPUl9BVVRIX0ZBSUwnKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwdWJsaWMgY29weUJhY2t1cENvZGVzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNsaXBib2FyZC5jb3B5KHRoaXMuYmFja3VwQ29kZXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb3B5U2VjcmV0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNsaXBib2FyZC5jb3B5KHRoaXMuc2VjcmV0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2VuZXJhdGVDb2RlcygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5iYWNrdXBDb2RlcyA9IG51bGw7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVCYWNrdXBDb2Rlc1NlcnZpY2UuZ2VuZXJhdGUoKS5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgbmV4dDogKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5iYWNrdXBDb2RlcyA9IHJlc3BvbnNlPy5kYXRhLmJhY2t1cENvZGVzO1xuICAgICAgICAgICAgICAgIHRoaXMuYXJlUmVjb3ZlcnlDb2Rlc0dlbmVyYXRlZC5zZXQodHJ1ZSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYXJlUmVjb3ZlcnlDb2Rlc0dlbmVyYXRlZC5zZXQoZmFsc2UpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgZ2VuZXJhdGVCYWNrdXBDb2RlcygpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbW9kYWwgPSB0aGlzLm1vZGFsU2VydmljZS5vcGVuKFR3b0ZhY3RvckNoZWNrTW9kYWxDb21wb25lbnQsIHtzaXplOiAnbGcnfSk7XG5cbiAgICAgICAgbW9kYWwucmVzdWx0LnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZXN1bHQudHdvX2ZhY3Rvcl9jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZS5hZGREYW5nZXJNZXNzYWdlQnlLZXkoJ0xCTF9GQUNUT1JfQVVUSF9GQUlMJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmFyZVJlY292ZXJ5Q29kZXNHZW5lcmF0ZWQuc2V0KGZhbHNlKVxuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUNvZGVzKClcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZS5hZGRTdWNjZXNzTWVzc2FnZUJ5S2V5KCdMQkxfUkVHRU5FUkFURURfQkFDS1VQX0NPREVTJyk7XG4gICAgICAgIH0pLmNhdGNoKCk7XG4gICAgfVxuXG4gICAgc2V0U2hvd1NlY3JldCh2YWx1ZSk6IHZvaWQge1xuICAgICAgICB0aGlzLnNob3dTZWNyZXQuc2V0KHZhbHVlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBpbml0QnV0dG9ucygpIHtcbiAgICAgICAgdGhpcy5lbmFibGVBcHBNZXRob2RCdXR0b25Db25maWcgPSB7XG4gICAgICAgICAgICBrbGFzczogJ2J0biBidG4tc20gYnRuLW1haW4nLFxuICAgICAgICAgICAgb25DbGljazogKCgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuYWJsZTJmYSgpXG4gICAgICAgICAgICB9KSBhcyBCdXR0b25DYWxsYmFjayxcbiAgICAgICAgICAgIGxhYmVsS2V5OiAnTEJMX0VOQUJMRScsXG4gICAgICAgICAgICB0aXRsZUtleTogJydcbiAgICAgICAgfSBhcyBCdXR0b25JbnRlcmZhY2U7XG5cbiAgICAgICAgdGhpcy5kaXNhYmxlQXBwTWV0aG9kQnV0dG9uQ29uZmlnID0ge1xuICAgICAgICAgICAga2xhc3M6ICdidG4gYnRuLXNtIGJ0bi1tYWluJyxcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlMkZhY3RvckF1dGgoKVxuICAgICAgICAgICAgfSkgYXMgQnV0dG9uQ2FsbGJhY2ssXG4gICAgICAgICAgICBsYWJlbEtleTogJ0xCTF9ESVNBQkxFJyxcbiAgICAgICAgICAgIHRpdGxlS2V5OiAnJ1xuICAgICAgICB9IGFzIEJ1dHRvbkludGVyZmFjZTtcblxuICAgICAgICB0aGlzLmNhbmNlbEFwcE1ldGhvZEJ1dHRvbkNvbmZpZyA9IHtcbiAgICAgICAgICAgIGtsYXNzOiAnYnRuIGJ0bi1zbSBidG4tbWFpbicsXG4gICAgICAgICAgICBvbkNsaWNrOiAoKCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FuY2VsMmZhKClcbiAgICAgICAgICAgIH0pIGFzIEJ1dHRvbkNhbGxiYWNrLFxuICAgICAgICAgICAgbGFiZWxLZXk6ICdMQkxfQ0FOQ0VMJyxcbiAgICAgICAgICAgIHRpdGxlS2V5OiAnJ1xuICAgICAgICB9IGFzIEJ1dHRvbkludGVyZmFjZTtcblxuICAgICAgICB0aGlzLnJlZ2VuZXJhdGVCYWNrdXBDb2Rlc0J1dHRvbkNvbmZpZyA9IHtcbiAgICAgICAgICAgIGtsYXNzOiAnYnRuIGJ0bi1zbSBidG4tbWFpbicsXG4gICAgICAgICAgICBvbkNsaWNrOiAoKCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVCYWNrdXBDb2RlcygpO1xuICAgICAgICAgICAgfSkgYXMgQnV0dG9uQ2FsbGJhY2ssXG4gICAgICAgICAgICBsYWJlbEtleTogJ0xCTF9SRUdFTkVSQVRFX0NPREVTJyxcbiAgICAgICAgICAgIHRpdGxlS2V5OiAnJ1xuICAgICAgICB9IGFzIEJ1dHRvbkludGVyZmFjZTtcblxuICAgICAgICB0aGlzLnZlcmlmeUNvZGVCdXR0b25Db25maWcgPSB7XG4gICAgICAgICAgICBrbGFzczogJ2J0biBidG4tc20gYnRuLW1haW4gbWItMicsXG4gICAgICAgICAgICBvbkNsaWNrOiAoKCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZmluYWxpemUyZmEoKVxuICAgICAgICAgICAgfSkgYXMgQnV0dG9uQ2FsbGJhY2ssXG4gICAgICAgICAgICBsYWJlbEtleTogJ0xCTF9WRVJJRllfMkZBJyxcbiAgICAgICAgICAgIHRpdGxlS2V5OiAnJ1xuICAgICAgICB9IGFzIEJ1dHRvbkludGVyZmFjZTtcblxuICAgICAgICB0aGlzLmNvcHlCYWNrdXBCdXR0b25Db25maWcgPSB7XG4gICAgICAgICAgICBrbGFzczogJ2J0biBidG4tc20gYnRuLW1haW4gY29weS1idXR0b24nLFxuICAgICAgICAgICAgb25DbGljazogKCgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvcHlCYWNrdXBDb2RlcygpXG4gICAgICAgICAgICB9KSBhcyBCdXR0b25DYWxsYmFjayxcbiAgICAgICAgICAgIGxhYmVsS2V5OiAnTEJMX0NPUFknLFxuICAgICAgICAgICAgdGl0bGVLZXk6ICcnLFxuICAgICAgICAgICAgaWNvbjogJ2NsaXBib2FyZCdcbiAgICAgICAgfSBhcyBCdXR0b25JbnRlcmZhY2U7XG5cbiAgICAgICAgdGhpcy5jb3B5U2VjcmV0QnV0dG9uQ29uZmlnID0ge1xuICAgICAgICAgICAga2xhc3M6ICdidG4gYnRuLXNtIGJ0bi1tYWluIG1sLTAnLFxuICAgICAgICAgICAgb25DbGljazogKCgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvcHlTZWNyZXQoKVxuICAgICAgICAgICAgfSkgYXMgQnV0dG9uQ2FsbGJhY2ssXG4gICAgICAgICAgICBsYWJlbEtleTogJ0xCTF9DT1BZJyxcbiAgICAgICAgICAgIHRpdGxlS2V5OiAnJyxcbiAgICAgICAgICAgIGljb246ICdjbGlwYm9hcmQnXG4gICAgICAgIH0gYXMgQnV0dG9uSW50ZXJmYWNlO1xuICAgIH1cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjQgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cblxuPG5nLWNvbnRhaW5lcj5cbiAgICA8ZGl2IGNsYXNzPSdtLTAgcHQtNScgaWQ9J3R3by1mYWN0b3InPlxuICAgICAgICA8ZGl2IGNsYXNzPSdsaXN0LXZpZXctaGVhZGVyIHBiLTMnPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ncm93IG1yLTAnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2NvbC1tZC0xMiBkLWZsZXgnPlxuICAgICAgICAgICAgICAgICAgICA8c2NybS1tb2R1bGUtdGl0bGUgW3RpdGxlXT1cImdldFRpdGxlKClcIiBjbGFzcz0nbGlzdC12aWV3LXRpdGxlIHRpdGxlLWZvbnQnPjwvc2NybS1tb2R1bGUtdGl0bGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nbGlzdC12aWV3LWhyLWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgPGhyIGNsYXNzPSdsaXN0LXZpZXctaHInPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9J2NvbnRhaW5lcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdyb3cgbWItMyc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nY29sJz5cbiAgICAgICAgICAgICAgICAgICAgPHNjcm0td2lkZ2V0LXBhbmVsIFt0aXRsZV09XCJhcHBNZXRob2RIZWFkZXJMYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gd2lkZ2V0LWhlYWRlci1pY29uLWFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0taW1hZ2UgaW1hZ2U9J21vYmlsZS1waG9uZSc+PC9zY3JtLWltYWdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gd2lkZ2V0LWhlYWRlci1zdGF0dXMtYXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImlzQXBwTWV0aG9kRW5hYmxlZCgpXCIgY2xhc3M9J2JhZGdlIGJhZGdlLXBpbGwgYmFkZ2Utc3VjY2Vzcyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWxhYmVsIGxhYmVsS2V5PSdMQkxfRU5BQkxFRCc+PC9zY3JtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHdpZGdldC1oZWFkZXItYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWJ1dHRvbiAqbmdJZj1cIiFpc0FwcE1ldGhvZEVuYWJsZWQoKSAmJiAhaXNRckNvZGVHZW5lcmF0ZWQoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb25maWddPVwiZW5hYmxlQXBwTWV0aG9kQnV0dG9uQ29uZmlnXCI+PC9zY3JtLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1idXR0b24gKm5nSWY9XCIhaXNBcHBNZXRob2RFbmFibGVkKCkgJiYgaXNRckNvZGVHZW5lcmF0ZWQoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb25maWddPVwiY2FuY2VsQXBwTWV0aG9kQnV0dG9uQ29uZmlnXCI+PC9zY3JtLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1idXR0b24gKm5nSWY9XCJpc0FwcE1ldGhvZEVuYWJsZWQoKSAmJiAhaXNRckNvZGVHZW5lcmF0ZWQoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb25maWddPVwiZGlzYWJsZUFwcE1ldGhvZEJ1dHRvbkNvbmZpZ1wiPjwvc2NybS1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHdpZGdldC1ib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2QtZmxleCBjb2wtbWQtMTIgcGwtNCBwci00IHB0LTIgcGItMic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWxhYmVsIGxhYmVsS2V5PSdMQkxfT1RQX1NFVFVQJyBjbGFzcz0nc21hbGwnPjwvc2NybS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaXNRckNvZGVHZW5lcmF0ZWQoKVwiIGNsYXNzPVwicm93LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicXItY29kZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwicXJDb2RlU3ZnXCIgY2xhc3M9J3FyLWNvZGUtY29sJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ncXItY29kZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFtpbm5lckhUTUxdPVwicXJDb2RlU3ZnIHwgdHJ1c3RIdG1sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCIhc2hvd1NlY3JldCgpXCIgY2xhc3M9XCJzZWNyZXQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJzbWFsbCBzaG93LXNlY3JldC1saW5rIHBsLTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJzZXRTaG93U2VjcmV0KHRydWUpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWxhYmVsIGxhYmVsS2V5PSdMQkxfVVNFX1NFQ1JFVCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2NybS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJzaG93U2VjcmV0KClcIiBjbGFzcz1cInNlY3JldC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInNtYWxsIHNob3ctc2VjcmV0LWxpbmsgcGwtMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInNldFNob3dTZWNyZXQoZmFsc2UpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWxhYmVsIGxhYmVsS2V5PSdMQkxfSElERV9TRUNSRVQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Njcm0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cInNob3dTZWNyZXQoKVwiIGNsYXNzPSdxci1jb2RlLXNlY3JldCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWxhYmVsIGNsYXNzPVwicGItM1wiIGxhYmVsS2V5PSdMQkxfVVNFX1NFQ1JFVF9ERVNDJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zY3JtLWxhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZm9udC13ZWlnaHQtYm9sZCBwYi0yIHNlY3JldFwiPnt7IHNlY3JldCB9fTwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1idXR0b24gY2xhc3M9XCJwYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb25maWddPVwiY29weVNlY3JldEJ1dHRvbkNvbmZpZ1wiPjwvc2NybS1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1sYWJlbCBsYWJlbEtleT0nTEJMX1FSX0NPREVfSEVMUCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9J3BsLTMgZC1pbmxpbmUtYmxvY2sgcXItY29kZS1sYWJlbCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2NybS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZC1mbGV4IGZsZXgtY29sdW1uIHB0LTQgYWxpZ24taXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBbKG5nTW9kZWwpXT1cImF1dGhDb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nYXV0aF9jb2RlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nYXV0aF9jb2RlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT0nb25lLXRpbWUtY29kZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz0nbWItMyBhdXRoLWlucHV0Jy8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWJ1dHRvbiBpZD0nc3VibWl0LTJmYS1jb2RlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb25maWddPVwidmVyaWZ5Q29kZUJ1dHRvbkNvbmZpZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zY3JtLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9zY3JtLXdpZGdldC1wYW5lbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaXNBcHBNZXRob2RFbmFibGVkKClcIiBjbGFzcz0ncm93IHB0LTMnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2NvbCBtYi00Jz5cbiAgICAgICAgICAgICAgICAgICAgPHNjcm0td2lkZ2V0LXBhbmVsIFt0aXRsZV09XCJyZWNvdmVyeUNvZGVzSGVhZGVyTGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHdpZGdldC1oZWFkZXItaWNvbi1hcmVhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWltYWdlIGltYWdlPSdrZXknPjwvc2NybS1pbWFnZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHdpZGdldC1oZWFkZXItc3RhdHVzLWFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJhcmVSZWNvdmVyeUNvZGVzR2VuZXJhdGVkKClcIiBjbGFzcz0nYmFkZ2UgYmFkZ2UtcGlsbCBiYWRnZS1zdWNjZXNzJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tbGFiZWwgbGFiZWxLZXk9J0xCTF9HRU5FUkFURUQnPjwvc2NybS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB3aWRnZXQtaGVhZGVyLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1idXR0b24gKm5nSWY9XCJpc0FwcE1ldGhvZEVuYWJsZWQoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb25maWddPVwicmVnZW5lcmF0ZUJhY2t1cENvZGVzQnV0dG9uQ29uZmlnXCI+PC9zY3JtLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgd2lkZ2V0LWJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZC1mbGV4IGNvbC1tZC0xMiBwbC00IHByLTQgcHQtMiBwYi0yJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tbGFiZWwgY2xhc3M9J3NtYWxsJyBsYWJlbEtleT0nTEJMX0JBQ0tVUF9DT0RFU19JTkZPJz48L3Njcm0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiYXJlUmVjb3ZlcnlDb2Rlc0dlbmVyYXRlZCgpICYmIGJhY2t1cENvZGVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2QtZmxleCBmbGV4LWNvbHVtbic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1idXR0b24gW2NvbmZpZ109XCJjb3B5QmFja3VwQnV0dG9uQ29uZmlnXCI+PC9zY3JtLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2QtZmxleCBjb2wtbWQtMTIgcGwtNCBwci00IHB0LTIgcGItMyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2JhY2t1cC1jb2Rlcy1jb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBjb2RlcyBvZiBiYWNrdXBDb2RlcztcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2JhY2t1cC1jb2Rlcyc+e3sgY29kZXMgfX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvc2NybS13aWRnZXQtcGFuZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbjwvbmctY29udGFpbmVyPlxuIl19