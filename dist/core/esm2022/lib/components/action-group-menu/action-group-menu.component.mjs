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
import { Component, Input, signal } from '@angular/core';
import { Button } from '../../common/components/button/button.model';
import { isFalse } from '../../common/utils/value-utils';
import { BehaviorSubject, combineLatestWith } from 'rxjs';
import { map } from 'rxjs/operators';
import { SystemConfigStore } from '../../store/system-config/system-config.store';
import { ScreenSize, ScreenSizeObserverService } from '../../services/ui/screen-size-observer/screen-size-observer.service';
import { LanguageStore } from '../../store/language/language.store';
import * as i0 from "@angular/core";
import * as i1 from "../../store/language/language.store";
import * as i2 from "../../services/ui/screen-size-observer/screen-size-observer.service";
import * as i3 from "../../store/system-config/system-config.store";
import * as i4 from "@angular/common";
import * as i5 from "../button/button.component";
import * as i6 from "../button-group/button-group.component";
import * as i7 from "../label/label.component";
import * as i8 from "../dynamic-label/dynamic-label.component";
import * as i9 from "../inline-loading-spinner/inline-loading-spinner.component";
const _c0 = () => ({});
function ActionGroupMenuComponent_ng_container_0_ng_container_2_scrm_button_group_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-button-group", 2);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("config$", ctx_r0.config$)("klass", ctx_r0.buttonGroupClass);
} }
function ActionGroupMenuComponent_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ActionGroupMenuComponent_ng_container_0_ng_container_2_scrm_button_group_1_Template, 1, 2, "scrm-button-group", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.config$);
} }
function ActionGroupMenuComponent_ng_container_0_ng_container_3_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "scrm-label", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("labelKey", ctx_r0.confirmationLabel);
} }
function ActionGroupMenuComponent_ng_container_0_ng_container_3_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "scrm-dynamic-label", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("labelKey", ctx_r0.confirmationDynamicLabel)("module", (tmp_5_0 = ctx_r0.actionContext == null ? null : ctx_r0.actionContext.module) !== null && tmp_5_0 !== undefined ? tmp_5_0 : "")("fields", (tmp_6_0 = ctx_r0.actionContext == null ? null : ctx_r0.actionContext.record == null ? null : ctx_r0.actionContext.record.fields) !== null && tmp_6_0 !== undefined ? tmp_6_0 : i0.ɵɵpureFunction0(3, _c0));
} }
function ActionGroupMenuComponent_ng_container_0_ng_container_3_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelement(1, "scrm-button", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("config", ctx_r0.inlineCancelButton);
} }
function ActionGroupMenuComponent_ng_container_0_ng_container_3_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelement(1, "scrm-button", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("config", ctx_r0.inlineConfirmButton);
} }
function ActionGroupMenuComponent_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵtemplate(2, ActionGroupMenuComponent_ng_container_0_ng_container_3_div_2_Template, 2, 1, "div", 4)(3, ActionGroupMenuComponent_ng_container_0_ng_container_3_div_3_Template, 2, 4, "div", 4)(4, ActionGroupMenuComponent_ng_container_0_ng_container_3_div_4_Template, 2, 1, "div", 5)(5, ActionGroupMenuComponent_ng_container_0_ng_container_3_div_5_Template, 2, 1, "div", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.confirmationLabel);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.confirmationDynamicLabel && !ctx_r0.confirmationLabel);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.inlineCancelButton);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.inlineConfirmButton);
} }
function ActionGroupMenuComponent_ng_container_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-inline-loading-spinner", 11);
    i0.ɵɵelementContainerEnd();
} }
function ActionGroupMenuComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ActionGroupMenuComponent_ng_container_0_ng_container_2_Template, 2, 1, "ng-container", 0)(3, ActionGroupMenuComponent_ng_container_0_ng_container_3_Template, 6, 4, "ng-container", 0)(4, ActionGroupMenuComponent_ng_container_0_ng_container_4_Template, 2, 0, "ng-container", 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("", ctx_r0.klass, " float-right action-group-menu");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.inlineConfirmationEnabled() && !ctx_r0.loading());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.inlineConfirmationEnabled() && !ctx_r0.loading());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.loading());
} }
export class ActionGroupMenuComponent {
    constructor(languages, screenSize, systemConfigStore) {
        this.languages = languages;
        this.screenSize = screenSize;
        this.systemConfigStore = systemConfigStore;
        this.klass = '';
        this.buttonClass = 'btn btn-sm';
        this.buttonGroupClass = '';
        this.actionLimitConfig = 'recordview_actions_limits';
        this.configState = new BehaviorSubject({ buttons: [] });
        this.config$ = this.configState.asObservable();
        this.inlineConfirmationEnabled = signal(false);
        this.confirmationLabel = '';
        this.confirmationDynamicLabel = '';
        this.inlineCancelButton = null;
        this.inlineConfirmButton = null;
        this.loading = signal(false);
        this.buttonGroupDropdownClass = 'dropdown-button-secondary';
        this.screen = ScreenSize.Medium;
        this.defaultBreakpoint = 4;
    }
    ngOnInit() {
        this.vm$ = this.config?.getActions().pipe(combineLatestWith(this.screenSize.screenSize$, this.languages.vm$), map(([actions, screenSize, languages]) => {
            if (screenSize) {
                this.screen = screenSize;
            }
            this.configState.next(this.getButtonGroupConfig(actions));
            return { actions, screenSize, languages };
        }));
    }
    isXSmallScreen() {
        return this.screen === ScreenSize.XSmall;
    }
    getButtonGroupConfig(actions) {
        const expanded = [];
        const collapsed = [];
        actions.forEach((action) => {
            const button = this.buildButton(action);
            if (action.params && action.params.collapsedMobile && this.isXSmallScreen()) {
                collapsed.push(button);
                return;
            }
            if (action.params && action.params.expanded) {
                expanded.push(button);
                return;
            }
            collapsed.push(button);
        });
        const collapseButtons = this.config.collapseButtons ?? true;
        let breakpoint = actions.length;
        if (collapseButtons === true) {
            breakpoint = this.getBreakpoint();
            if (expanded.length < breakpoint) {
                breakpoint = expanded.length;
            }
        }
        const buttons = expanded.concat(collapsed);
        return {
            buttonKlass: [this.buttonClass],
            dropdownLabel: this.languages.getAppString('LBL_ACTIONS') || '',
            breakpoint,
            dropdownOptions: {
                placement: ['bottom-right'],
                wrapperKlass: [(this.buttonGroupDropdownClass)]
            },
            buttons
        };
    }
    getBreakpoint() {
        const breakpointMap = this.systemConfigStore.getConfigValue(this.actionLimitConfig);
        if (this.screen && breakpointMap && breakpointMap[this.screen]) {
            this.breakpoint = breakpointMap[this.screen];
            return this.breakpoint;
        }
        if (this.breakpoint) {
            return this.breakpoint;
        }
        return this.defaultBreakpoint;
    }
    buildButton(action) {
        const button = {
            label: action.label || '',
            labelModule: this?.actionContext?.module ?? '',
            labelKey: action.labelKey || '',
            klass: this.buttonClass,
            titleKey: action.titleKey || '',
            onClick: () => {
                const inlineConfirmation = action?.params?.inlineConfirmation ?? false;
                if (inlineConfirmation) {
                    this.triggerTemporaryLoading();
                    const callback = () => {
                        this.config.runAction(action, this.actionContext);
                    };
                    this.initInlineConfirmation(action, callback);
                    return;
                }
                this.config.runAction(action, this.actionContext);
            }
        };
        if (!button.label) {
            button.labelKey = action.labelKey ?? '';
        }
        const debounceClick = action?.params?.debounceClick ?? null;
        button.debounceClick = true;
        if (isFalse(debounceClick)) {
            button.debounceClick = false;
        }
        if (action.icon) {
            button.icon = action.icon;
        }
        if (action.status) {
            Button.appendClasses(button, [action.status]);
        }
        if (action.klass) {
            Button.appendClasses(button, action.klass);
        }
        return button;
    }
    triggerTemporaryLoading() {
        this.loading.set(true);
        const delay = parseInt(this.systemConfigStore.getUi('inline_confirmation_loading_delay')) ?? 200;
        setTimeout(() => {
            this.loading.set(false);
        }, delay);
    }
    initInlineConfirmation(action, callback) {
        const cancelConfig = action?.params?.inlineConfirmationButtons?.cancel ?? {};
        const confirmConfig = action?.params?.inlineConfirmationButtons?.confirm ?? {};
        this.confirmationLabel = action?.params?.confirmationLabel ?? '';
        this.confirmationDynamicLabel = action?.params?.confirmationDynamicLabel ?? '';
        this.inlineCancelButton = this.buildInlineCancelButton(cancelConfig);
        this.inlineConfirmButton = this.buildInlineConfirmButton(confirmConfig, callback);
        this.inlineConfirmationEnabled.set(true);
    }
    buildInlineCancelButton(config) {
        const defaults = {
            labelKey: 'LBL_NO',
            klass: 'btn btn-sm p-0 m-0 btn-link border-0 line-height-initial',
            debounceClick: true,
        };
        const button = { ...defaults, ...(config ?? {}) };
        button.onClick = () => {
            this.triggerTemporaryLoading();
            this.resetInlineConfirmation();
        };
        return button;
    }
    buildInlineConfirmButton(config, callback) {
        const defaults = {
            labelKey: 'LBL_YES',
            klass: 'btn btn-sm p-0 m-0 btn-link border-0 line-height-initial',
            debounceClick: true,
        };
        const button = { ...defaults, ...(config ?? {}) };
        button.onClick = () => {
            this.triggerTemporaryLoading();
            callback();
            this.resetInlineConfirmation();
        };
        return button;
    }
    resetInlineConfirmation() {
        this.inlineConfirmationEnabled.set(false);
        this.confirmationDynamicLabel = '';
        this.confirmationLabel = '';
        this.inlineConfirmButton = null;
        this.inlineCancelButton = null;
    }
    static { this.ɵfac = function ActionGroupMenuComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ActionGroupMenuComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore), i0.ɵɵdirectiveInject(i2.ScreenSizeObserverService), i0.ɵɵdirectiveInject(i3.SystemConfigStore)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ActionGroupMenuComponent, selectors: [["scrm-action-group-menu"]], inputs: { klass: "klass", buttonClass: "buttonClass", buttonGroupClass: "buttonGroupClass", actionContext: "actionContext", config: "config", actionLimitConfig: "actionLimitConfig" }, decls: 2, vars: 3, consts: [[4, "ngIf"], [3, "config$", "klass", 4, "ngIf"], [3, "config$", "klass"], [1, "d-flex", "align-items-start", "justify-content-end", "inline-confirmation"], ["class", "pl-1 inline-confirmation-label", 4, "ngIf"], ["class", "pl-1 inline-confirmation-button", 4, "ngIf"], [1, "pl-1", "inline-confirmation-label"], [3, "labelKey"], [3, "labelKey", "module", "fields"], [1, "pl-1", "inline-confirmation-button"], [3, "config"], ["klass", "inline-spinner-md"]], template: function ActionGroupMenuComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ActionGroupMenuComponent_ng_container_0_Template, 5, 6, "ng-container", 0);
            i0.ɵɵpipe(1, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.vm$));
        } }, dependencies: [i4.NgIf, i5.ButtonComponent, i6.ButtonGroupComponent, i7.LabelComponent, i8.DynamicLabelComponent, i9.InlineLoadingSpinnerComponent, i4.AsyncPipe], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ActionGroupMenuComponent, [{
        type: Component,
        args: [{ selector: 'scrm-action-group-menu', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container *ngIf=\"(vm$ | async) as vm\">\n    <div class=\"{{klass}} float-right action-group-menu\">\n        <ng-container *ngIf=\"!inlineConfirmationEnabled() && !loading()\">\n            <scrm-button-group *ngIf=\"config$\" [config$]=\"config$\" [klass]=\"buttonGroupClass\"></scrm-button-group>\n        </ng-container>\n        <ng-container *ngIf=\"inlineConfirmationEnabled() && !loading()\">\n            <div class=\"d-flex align-items-start justify-content-end inline-confirmation\">\n                <div *ngIf=\"confirmationLabel\" class=\"pl-1 inline-confirmation-label\">\n                    <scrm-label [labelKey]=\"confirmationLabel\"></scrm-label>\n                </div>\n                <div *ngIf=\"confirmationDynamicLabel && !confirmationLabel\" class=\"pl-1 inline-confirmation-label\">\n                    <scrm-dynamic-label [labelKey]=\"confirmationDynamicLabel\"\n                                        [module]=\"actionContext?.module ?? ''\"\n                                        [fields]=\"actionContext?.record?.fields ?? {}\"\n                    >\n                    </scrm-dynamic-label>\n                </div>\n                <div *ngIf=\"inlineCancelButton\" class=\"pl-1 inline-confirmation-button\">\n                    <scrm-button [config]=\"inlineCancelButton\"></scrm-button>\n                </div>\n                <div *ngIf=\"inlineConfirmButton\" class=\"pl-1 inline-confirmation-button\">\n                    <scrm-button [config]=\"inlineConfirmButton\"></scrm-button>\n                </div>\n            </div>\n        </ng-container>\n        <ng-container *ngIf=\"loading()\">\n            <scrm-inline-loading-spinner klass=\"inline-spinner-md\"></scrm-inline-loading-spinner>\n        </ng-container>\n    </div>\n</ng-container>\n" }]
    }], () => [{ type: i1.LanguageStore }, { type: i2.ScreenSizeObserverService }, { type: i3.SystemConfigStore }], { klass: [{
            type: Input
        }], buttonClass: [{
            type: Input
        }], buttonGroupClass: [{
            type: Input
        }], actionContext: [{
            type: Input
        }], config: [{
            type: Input
        }], actionLimitConfig: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ActionGroupMenuComponent, { className: "ActionGroupMenuComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLWdyb3VwLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvYWN0aW9uLWdyb3VwLW1lbnUvYWN0aW9uLWdyb3VwLW1lbnUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvYWN0aW9uLWdyb3VwLW1lbnUvYWN0aW9uLWdyb3VwLW1lbnUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFL0UsT0FBTyxFQUFDLE1BQU0sRUFBa0IsTUFBTSw2Q0FBNkMsQ0FBQztBQUVwRixPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDdkQsT0FBTyxFQUFDLGVBQWUsRUFBRSxpQkFBaUIsRUFBMkIsTUFBTSxNQUFNLENBQUM7QUFDbEYsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ25DLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBQ2hGLE9BQU8sRUFDSCxVQUFVLEVBQ1YseUJBQXlCLEVBQzVCLE1BQU0scUVBQXFFLENBQUM7QUFDN0UsT0FBTyxFQUFDLGFBQWEsRUFBa0IsTUFBTSxxQ0FBcUMsQ0FBQzs7Ozs7Ozs7Ozs7OztJQ1J2RSx1Q0FBc0c7OztJQUEvQyxBQUFwQix3Q0FBbUIsa0NBQTJCOzs7SUFEckYsNkJBQWlFO0lBQzdELG1JQUFrRjs7OztJQUE5RCxjQUFhO0lBQWIscUNBQWE7OztJQUk3Qiw4QkFBc0U7SUFDbEUsZ0NBQXdEO0lBQzVELGlCQUFNOzs7SUFEVSxjQUE4QjtJQUE5Qixt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QUFDLHdCQUF3QixHQUFHLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUM7UUFDaEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztJQUNuQyxDQUFDO3lIQWpPUSx3QkFBd0I7b0VBQXhCLHdCQUF3QjtZQ3ZCckMsMkZBQTBDOzs7WUFBM0Isb0RBQW9COzs7aUZEdUJ0Qix3QkFBd0I7Y0FKcEMsU0FBUzsyQkFDSSx3QkFBd0I7c0hBS3pCLEtBQUs7a0JBQWIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxnQkFBZ0I7a0JBQXhCLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csaUJBQWlCO2tCQUF6QixLQUFLOztrRkFQRyx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBzaWduYWwsIFdyaXRhYmxlU2lnbmFsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QWN0aW9uLCBBY3Rpb25Db250ZXh0LCBBY3Rpb25EYXRhU291cmNlfSBmcm9tICcuLi8uLi9jb21tb24vYWN0aW9ucy9hY3Rpb24ubW9kZWwnO1xuaW1wb3J0IHtCdXR0b24sIEJ1dHRvbkludGVyZmFjZX0gZnJvbSAnLi4vLi4vY29tbW9uL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5tb2RlbCc7XG5pbXBvcnQge0J1dHRvbkdyb3VwSW50ZXJmYWNlfSBmcm9tICcuLi8uLi9jb21tb24vY29tcG9uZW50cy9idXR0b24vYnV0dG9uLWdyb3VwLm1vZGVsJztcbmltcG9ydCB7aXNGYWxzZX0gZnJvbSAnLi4vLi4vY29tbW9uL3V0aWxzL3ZhbHVlLXV0aWxzJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBjb21iaW5lTGF0ZXN0V2l0aCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7bWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1N5c3RlbUNvbmZpZ1N0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS9zeXN0ZW0tY29uZmlnL3N5c3RlbS1jb25maWcuc3RvcmUnO1xuaW1wb3J0IHtcbiAgICBTY3JlZW5TaXplLFxuICAgIFNjcmVlblNpemVPYnNlcnZlclNlcnZpY2Vcbn0gZnJvbSAnLi4vLi4vc2VydmljZXMvdWkvc2NyZWVuLXNpemUtb2JzZXJ2ZXIvc2NyZWVuLXNpemUtb2JzZXJ2ZXIuc2VydmljZSc7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmUsIExhbmd1YWdlU3RyaW5nc30gZnJvbSAnLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGlvbkdyb3VwTWVudVZpZXdNb2RlbCB7XG4gICAgYWN0aW9uczogQWN0aW9uW107XG4gICAgc2NyZWVuU2l6ZTogU2NyZWVuU2l6ZTtcbiAgICBsYW5ndWFnZXM6IExhbmd1YWdlU3RyaW5ncztcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLWFjdGlvbi1ncm91cC1tZW51JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYWN0aW9uLWdyb3VwLW1lbnUuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBBY3Rpb25Hcm91cE1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KCkga2xhc3MgPSAnJztcbiAgICBASW5wdXQoKSBidXR0b25DbGFzcyA9ICdidG4gYnRuLXNtJztcbiAgICBASW5wdXQoKSBidXR0b25Hcm91cENsYXNzID0gJyc7XG4gICAgQElucHV0KCkgYWN0aW9uQ29udGV4dDogQWN0aW9uQ29udGV4dDtcbiAgICBASW5wdXQoKSBjb25maWc6IEFjdGlvbkRhdGFTb3VyY2U7XG4gICAgQElucHV0KCkgYWN0aW9uTGltaXRDb25maWc6IHN0cmluZyA9ICdyZWNvcmR2aWV3X2FjdGlvbnNfbGltaXRzJztcbiAgICBjb25maWdTdGF0ZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8QnV0dG9uR3JvdXBJbnRlcmZhY2U+KHtidXR0b25zOiBbXX0pO1xuICAgIGNvbmZpZyQgPSB0aGlzLmNvbmZpZ1N0YXRlLmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgdm0kOiBPYnNlcnZhYmxlPEFjdGlvbkdyb3VwTWVudVZpZXdNb2RlbD47XG5cbiAgICBpbmxpbmVDb25maXJtYXRpb25FbmFibGVkOiBXcml0YWJsZVNpZ25hbDxib29sZWFuPiA9ICBzaWduYWwoZmFsc2UpO1xuICAgIGNvbmZpcm1hdGlvbkxhYmVsID0gJyc7XG4gICAgY29uZmlybWF0aW9uRHluYW1pY0xhYmVsID0gJyc7XG4gICAgaW5saW5lQ2FuY2VsQnV0dG9uOiBCdXR0b25JbnRlcmZhY2UgPSBudWxsO1xuICAgIGlubGluZUNvbmZpcm1CdXR0b246IEJ1dHRvbkludGVyZmFjZSA9IG51bGw7XG4gICAgbG9hZGluZzogV3JpdGFibGVTaWduYWw8Ym9vbGVhbj4gPSBzaWduYWwoZmFsc2UpO1xuXG4gICAgcHJvdGVjdGVkIGJ1dHRvbkdyb3VwRHJvcGRvd25DbGFzcyA9ICdkcm9wZG93bi1idXR0b24tc2Vjb25kYXJ5JztcblxuICAgIHByb3RlY3RlZCBzdWJzOiBTdWJzY3JpcHRpb25bXTtcbiAgICBwcm90ZWN0ZWQgc2NyZWVuOiBTY3JlZW5TaXplID0gU2NyZWVuU2l6ZS5NZWRpdW07XG4gICAgcHJvdGVjdGVkIGRlZmF1bHRCcmVha3BvaW50ID0gNDtcbiAgICBwcm90ZWN0ZWQgYnJlYWtwb2ludDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBsYW5ndWFnZXM6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBzY3JlZW5TaXplOiBTY3JlZW5TaXplT2JzZXJ2ZXJTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgc3lzdGVtQ29uZmlnU3RvcmU6IFN5c3RlbUNvbmZpZ1N0b3JlLFxuICAgICkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnZtJCA9IHRoaXMuY29uZmlnPy5nZXRBY3Rpb25zKCkucGlwZShcbiAgICAgICAgICAgIGNvbWJpbmVMYXRlc3RXaXRoKFxuICAgICAgICAgICAgICAgIHRoaXMuc2NyZWVuU2l6ZS5zY3JlZW5TaXplJCxcbiAgICAgICAgICAgICAgICB0aGlzLmxhbmd1YWdlcy52bSRcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBtYXAoKFthY3Rpb25zLCBzY3JlZW5TaXplLCBsYW5ndWFnZXNdKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHNjcmVlblNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JlZW4gPSBzY3JlZW5TaXplO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ1N0YXRlLm5leHQodGhpcy5nZXRCdXR0b25Hcm91cENvbmZpZyhhY3Rpb25zKSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge2FjdGlvbnMsIHNjcmVlblNpemUsIGxhbmd1YWdlc307XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGlzWFNtYWxsU2NyZWVuKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zY3JlZW4gPT09IFNjcmVlblNpemUuWFNtYWxsO1xuICAgIH1cblxuICAgIGdldEJ1dHRvbkdyb3VwQ29uZmlnKGFjdGlvbnM6IEFjdGlvbltdKTogQnV0dG9uR3JvdXBJbnRlcmZhY2Uge1xuXG4gICAgICAgIGNvbnN0IGV4cGFuZGVkID0gW107XG4gICAgICAgIGNvbnN0IGNvbGxhcHNlZCA9IFtdO1xuXG4gICAgICAgIGFjdGlvbnMuZm9yRWFjaCgoYWN0aW9uOiBBY3Rpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMuYnVpbGRCdXR0b24oYWN0aW9uKTtcblxuICAgICAgICAgICAgaWYgKGFjdGlvbi5wYXJhbXMgJiYgYWN0aW9uLnBhcmFtcy5jb2xsYXBzZWRNb2JpbGUgJiYgdGhpcy5pc1hTbWFsbFNjcmVlbigpKSB7XG4gICAgICAgICAgICAgICAgY29sbGFwc2VkLnB1c2goYnV0dG9uKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhY3Rpb24ucGFyYW1zICYmIGFjdGlvbi5wYXJhbXMuZXhwYW5kZWQpIHtcbiAgICAgICAgICAgICAgICBleHBhbmRlZC5wdXNoKGJ1dHRvbik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb2xsYXBzZWQucHVzaChidXR0b24pO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBjb2xsYXBzZUJ1dHRvbnMgPSB0aGlzLmNvbmZpZy5jb2xsYXBzZUJ1dHRvbnMgPz8gdHJ1ZTtcblxuICAgICAgICBsZXQgYnJlYWtwb2ludCA9IGFjdGlvbnMubGVuZ3RoO1xuICAgICAgICBpZiAoY29sbGFwc2VCdXR0b25zID09PSB0cnVlKSB7XG4gICAgICAgICAgICBicmVha3BvaW50ID0gdGhpcy5nZXRCcmVha3BvaW50KCk7XG4gICAgICAgICAgICBpZiAoZXhwYW5kZWQubGVuZ3RoIDwgYnJlYWtwb2ludCkge1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQgPSBleHBhbmRlZC5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBidXR0b25zID0gZXhwYW5kZWQuY29uY2F0KGNvbGxhcHNlZCk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJ1dHRvbktsYXNzOiBbdGhpcy5idXR0b25DbGFzc10sXG4gICAgICAgICAgICBkcm9wZG93bkxhYmVsOiB0aGlzLmxhbmd1YWdlcy5nZXRBcHBTdHJpbmcoJ0xCTF9BQ1RJT05TJykgfHwgJycsXG4gICAgICAgICAgICBicmVha3BvaW50LFxuICAgICAgICAgICAgZHJvcGRvd25PcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgcGxhY2VtZW50OiBbJ2JvdHRvbS1yaWdodCddLFxuICAgICAgICAgICAgICAgIHdyYXBwZXJLbGFzczogWyh0aGlzLmJ1dHRvbkdyb3VwRHJvcGRvd25DbGFzcyldXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnV0dG9uc1xuICAgICAgICB9IGFzIEJ1dHRvbkdyb3VwSW50ZXJmYWNlO1xuICAgIH1cblxuICAgIGdldEJyZWFrcG9pbnQoKTogbnVtYmVyIHtcblxuICAgICAgICBjb25zdCBicmVha3BvaW50TWFwID0gdGhpcy5zeXN0ZW1Db25maWdTdG9yZS5nZXRDb25maWdWYWx1ZSh0aGlzLmFjdGlvbkxpbWl0Q29uZmlnKTtcblxuICAgICAgICBpZiAodGhpcy5zY3JlZW4gJiYgYnJlYWtwb2ludE1hcCAmJiBicmVha3BvaW50TWFwW3RoaXMuc2NyZWVuXSkge1xuICAgICAgICAgICAgdGhpcy5icmVha3BvaW50ID0gYnJlYWtwb2ludE1hcFt0aGlzLnNjcmVlbl07XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5icmVha3BvaW50O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYnJlYWtwb2ludCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnJlYWtwb2ludDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRCcmVha3BvaW50O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBidWlsZEJ1dHRvbihhY3Rpb246IEFjdGlvbik6IEJ1dHRvbkludGVyZmFjZSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IHtcbiAgICAgICAgICAgIGxhYmVsOiBhY3Rpb24ubGFiZWwgfHwgJycsXG4gICAgICAgICAgICBsYWJlbE1vZHVsZTogdGhpcz8uYWN0aW9uQ29udGV4dD8ubW9kdWxlID8/ICcnLFxuICAgICAgICAgICAgbGFiZWxLZXk6IGFjdGlvbi5sYWJlbEtleSB8fCAnJyxcbiAgICAgICAgICAgIGtsYXNzOiB0aGlzLmJ1dHRvbkNsYXNzLFxuICAgICAgICAgICAgdGl0bGVLZXk6IGFjdGlvbi50aXRsZUtleSB8fCAnJyxcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpOiB2b2lkID0+IHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGlubGluZUNvbmZpcm1hdGlvbiA9IGFjdGlvbj8ucGFyYW1zPy5pbmxpbmVDb25maXJtYXRpb24gPz8gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKGlubGluZUNvbmZpcm1hdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXJUZW1wb3JhcnlMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gKCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWcucnVuQWN0aW9uKGFjdGlvbiwgdGhpcy5hY3Rpb25Db250ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRJbmxpbmVDb25maXJtYXRpb24oYWN0aW9uLCBjYWxsYmFjayk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLnJ1bkFjdGlvbihhY3Rpb24sIHRoaXMuYWN0aW9uQ29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gYXMgQnV0dG9uSW50ZXJmYWNlO1xuXG4gICAgICAgIGlmICghYnV0dG9uLmxhYmVsKXtcbiAgICAgICAgICAgIGJ1dHRvbi5sYWJlbEtleSA9IGFjdGlvbi5sYWJlbEtleSA/PyAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRlYm91bmNlQ2xpY2sgPSBhY3Rpb24/LnBhcmFtcz8uZGVib3VuY2VDbGljayA/PyBudWxsO1xuXG4gICAgICAgIGJ1dHRvbi5kZWJvdW5jZUNsaWNrID0gdHJ1ZTtcblxuICAgICAgICBpZiAoaXNGYWxzZShkZWJvdW5jZUNsaWNrKSkge1xuICAgICAgICAgICAgYnV0dG9uLmRlYm91bmNlQ2xpY2sgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhY3Rpb24uaWNvbikge1xuICAgICAgICAgICAgYnV0dG9uLmljb24gPSBhY3Rpb24uaWNvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhY3Rpb24uc3RhdHVzKSB7XG4gICAgICAgICAgICBCdXR0b24uYXBwZW5kQ2xhc3NlcyhidXR0b24sIFthY3Rpb24uc3RhdHVzXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWN0aW9uLmtsYXNzKSB7XG4gICAgICAgICAgICBCdXR0b24uYXBwZW5kQ2xhc3NlcyhidXR0b24sIGFjdGlvbi5rbGFzcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYnV0dG9uO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCB0cmlnZ2VyVGVtcG9yYXJ5TG9hZGluZygpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nLnNldCh0cnVlKTtcbiAgICAgICAgY29uc3QgZGVsYXkgPSBwYXJzZUludCh0aGlzLnN5c3RlbUNvbmZpZ1N0b3JlLmdldFVpKCdpbmxpbmVfY29uZmlybWF0aW9uX2xvYWRpbmdfZGVsYXknKSkgPz8gMjAwO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZy5zZXQoZmFsc2UpO1xuICAgICAgICB9LCBkZWxheSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGluaXRJbmxpbmVDb25maXJtYXRpb24oYWN0aW9uOiBBY3Rpb24sIGNhbGxiYWNrOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNhbmNlbENvbmZpZyA9IGFjdGlvbj8ucGFyYW1zPy5pbmxpbmVDb25maXJtYXRpb25CdXR0b25zPy5jYW5jZWwgPz8ge307XG4gICAgICAgIGNvbnN0IGNvbmZpcm1Db25maWcgPSBhY3Rpb24/LnBhcmFtcz8uaW5saW5lQ29uZmlybWF0aW9uQnV0dG9ucz8uY29uZmlybSA/PyB7fTtcbiAgICAgICAgdGhpcy5jb25maXJtYXRpb25MYWJlbCA9IGFjdGlvbj8ucGFyYW1zPy5jb25maXJtYXRpb25MYWJlbCA/PyAnJztcbiAgICAgICAgdGhpcy5jb25maXJtYXRpb25EeW5hbWljTGFiZWwgPSBhY3Rpb24/LnBhcmFtcz8uY29uZmlybWF0aW9uRHluYW1pY0xhYmVsID8/ICcnO1xuXG4gICAgICAgIHRoaXMuaW5saW5lQ2FuY2VsQnV0dG9uID0gdGhpcy5idWlsZElubGluZUNhbmNlbEJ1dHRvbihjYW5jZWxDb25maWcpXG4gICAgICAgIHRoaXMuaW5saW5lQ29uZmlybUJ1dHRvbiA9IHRoaXMuYnVpbGRJbmxpbmVDb25maXJtQnV0dG9uKGNvbmZpcm1Db25maWcsIGNhbGxiYWNrKVxuICAgICAgICB0aGlzLmlubGluZUNvbmZpcm1hdGlvbkVuYWJsZWQuc2V0KHRydWUpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBidWlsZElubGluZUNhbmNlbEJ1dHRvbihjb25maWc6IEJ1dHRvbkludGVyZmFjZSk6IEJ1dHRvbkludGVyZmFjZSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgbGFiZWxLZXk6ICdMQkxfTk8nLFxuICAgICAgICAgICAga2xhc3M6ICdidG4gYnRuLXNtIHAtMCBtLTAgYnRuLWxpbmsgYm9yZGVyLTAgbGluZS1oZWlnaHQtaW5pdGlhbCcsXG4gICAgICAgICAgICBkZWJvdW5jZUNsaWNrOiB0cnVlLFxuICAgICAgICB9IGFzIEJ1dHRvbkludGVyZmFjZTtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gey4uLmRlZmF1bHRzLCAuLi4oY29uZmlnID8/IHt9KX07XG5cbiAgICAgICAgYnV0dG9uLm9uQ2xpY2sgPSAoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJUZW1wb3JhcnlMb2FkaW5nKCk7XG4gICAgICAgICAgICB0aGlzLnJlc2V0SW5saW5lQ29uZmlybWF0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYnV0dG9uO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBidWlsZElubGluZUNvbmZpcm1CdXR0b24oY29uZmlnOiBCdXR0b25JbnRlcmZhY2UsIGNhbGxiYWNrOiBGdW5jdGlvbik6IEJ1dHRvbkludGVyZmFjZSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgbGFiZWxLZXk6ICdMQkxfWUVTJyxcbiAgICAgICAgICAgIGtsYXNzOiAnYnRuIGJ0bi1zbSBwLTAgbS0wIGJ0bi1saW5rIGJvcmRlci0wIGxpbmUtaGVpZ2h0LWluaXRpYWwnLFxuICAgICAgICAgICAgZGVib3VuY2VDbGljazogdHJ1ZSxcbiAgICAgICAgfSBhcyBCdXR0b25JbnRlcmZhY2U7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IHsuLi5kZWZhdWx0cywgLi4uKGNvbmZpZyA/PyB7fSl9O1xuXG4gICAgICAgIGJ1dHRvbi5vbkNsaWNrID0gKCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyVGVtcG9yYXJ5TG9hZGluZygpO1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIHRoaXMucmVzZXRJbmxpbmVDb25maXJtYXRpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBidXR0b247XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlc2V0SW5saW5lQ29uZmlybWF0aW9uKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmlubGluZUNvbmZpcm1hdGlvbkVuYWJsZWQuc2V0KGZhbHNlKTtcbiAgICAgICAgdGhpcy5jb25maXJtYXRpb25EeW5hbWljTGFiZWwgPSAnJztcbiAgICAgICAgdGhpcy5jb25maXJtYXRpb25MYWJlbCA9ICcnO1xuICAgICAgICB0aGlzLmlubGluZUNvbmZpcm1CdXR0b24gPSBudWxsO1xuICAgICAgICB0aGlzLmlubGluZUNhbmNlbEJ1dHRvbiA9IG51bGw7XG4gICAgfVxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPG5nLWNvbnRhaW5lciAqbmdJZj1cIih2bSQgfCBhc3luYykgYXMgdm1cIj5cbiAgICA8ZGl2IGNsYXNzPVwie3trbGFzc319IGZsb2F0LXJpZ2h0IGFjdGlvbi1ncm91cC1tZW51XCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaW5saW5lQ29uZmlybWF0aW9uRW5hYmxlZCgpICYmICFsb2FkaW5nKClcIj5cbiAgICAgICAgICAgIDxzY3JtLWJ1dHRvbi1ncm91cCAqbmdJZj1cImNvbmZpZyRcIiBbY29uZmlnJF09XCJjb25maWckXCIgW2tsYXNzXT1cImJ1dHRvbkdyb3VwQ2xhc3NcIj48L3Njcm0tYnV0dG9uLWdyb3VwPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlubGluZUNvbmZpcm1hdGlvbkVuYWJsZWQoKSAmJiAhbG9hZGluZygpXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLXN0YXJ0IGp1c3RpZnktY29udGVudC1lbmQgaW5saW5lLWNvbmZpcm1hdGlvblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJjb25maXJtYXRpb25MYWJlbFwiIGNsYXNzPVwicGwtMSBpbmxpbmUtY29uZmlybWF0aW9uLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzY3JtLWxhYmVsIFtsYWJlbEtleV09XCJjb25maXJtYXRpb25MYWJlbFwiPjwvc2NybS1sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiY29uZmlybWF0aW9uRHluYW1pY0xhYmVsICYmICFjb25maXJtYXRpb25MYWJlbFwiIGNsYXNzPVwicGwtMSBpbmxpbmUtY29uZmlybWF0aW9uLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzY3JtLWR5bmFtaWMtbGFiZWwgW2xhYmVsS2V5XT1cImNvbmZpcm1hdGlvbkR5bmFtaWNMYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW21vZHVsZV09XCJhY3Rpb25Db250ZXh0Py5tb2R1bGUgPz8gJydcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmaWVsZHNdPVwiYWN0aW9uQ29udGV4dD8ucmVjb3JkPy5maWVsZHMgPz8ge31cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDwvc2NybS1keW5hbWljLWxhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJpbmxpbmVDYW5jZWxCdXR0b25cIiBjbGFzcz1cInBsLTEgaW5saW5lLWNvbmZpcm1hdGlvbi1idXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNjcm0tYnV0dG9uIFtjb25maWddPVwiaW5saW5lQ2FuY2VsQnV0dG9uXCI+PC9zY3JtLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaW5saW5lQ29uZmlybUJ1dHRvblwiIGNsYXNzPVwicGwtMSBpbmxpbmUtY29uZmlybWF0aW9uLWJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8c2NybS1idXR0b24gW2NvbmZpZ109XCJpbmxpbmVDb25maXJtQnV0dG9uXCI+PC9zY3JtLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImxvYWRpbmcoKVwiPlxuICAgICAgICAgICAgPHNjcm0taW5saW5lLWxvYWRpbmctc3Bpbm5lciBrbGFzcz1cImlubGluZS1zcGlubmVyLW1kXCI+PC9zY3JtLWlubGluZS1sb2FkaW5nLXNwaW5uZXI+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuPC9uZy1jb250YWluZXI+XG4iXX0=