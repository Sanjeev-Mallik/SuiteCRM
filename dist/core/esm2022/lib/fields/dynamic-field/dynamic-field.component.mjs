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
import { Component, computed, HostBinding, Input, signal, Type } from '@angular/core';
import { EDITABLE_VIEW_MODES } from '../../common/views/view.model';
import { Router } from '@angular/router';
import { ModuleNameMapper } from '../../services/navigation/module-name-mapper/module-name-mapper.service';
import { ModuleNavigation } from '../../services/navigation/module-navigation/module-navigation.service';
import { DynamicLabelService } from '../../services/language/dynamic-label.service';
import { LinkRouteAsyncActionService } from '../../services/navigation/link-route-async-action/link-route-async-action.service';
import * as i0 from "@angular/core";
import * as i1 from "../../services/navigation/module-navigation/module-navigation.service";
import * as i2 from "../../services/navigation/module-name-mapper/module-name-mapper.service";
import * as i3 from "@angular/router";
import * as i4 from "../../services/language/dynamic-label.service";
import * as i5 from "../../services/navigation/link-route-async-action/link-route-async-action.service";
import * as i6 from "@angular/common";
import * as i7 from "../../components/dynamic-label/dynamic-label.component";
import * as i8 from "ng-dynamic-component";
const _c0 = (a0, a1, a2, a3, a4, a5) => ({ "mode": a0, "originalMode": a1, "field": a2, "klass": a3, "record": a4, "parent": a5 });
const _c1 = a0 => ({ field: a0 });
function DynamicFieldComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 1);
    i0.ɵɵlistener("click", function DynamicFieldComponent_ng_container_0_ng_container_1_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onClick()); });
    i0.ɵɵelement(2, "ndc-dynamic", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ndcDynamicComponent", ctx_r1.componentType)("ndcDynamicInputs", i0.ɵɵpureFunction6(2, _c0, ctx_r1.mode, ctx_r1.originalMode, ctx_r1.field, ctx_r1.klass, ctx_r1.record, ctx_r1.parent));
} }
function DynamicFieldComponent_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 3);
    i0.ɵɵelement(2, "ndc-dynamic", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", ctx_r1.getLink())("queryParams", ctx_r1.record == null ? null : ctx_r1.record.metadata == null ? null : ctx_r1.record.metadata.queryParams);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ndcDynamicComponent", ctx_r1.componentType)("ndcDynamicInputs", i0.ɵɵpureFunction6(4, _c0, ctx_r1.mode, ctx_r1.originalMode, ctx_r1.field, ctx_r1.klass, ctx_r1.record, ctx_r1.parent));
} }
function DynamicFieldComponent_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "ndc-dynamic", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ndcDynamicComponent", ctx_r1.componentType)("ndcDynamicInputs", i0.ɵɵpureFunction6(2, _c0, ctx_r1.mode, ctx_r1.originalMode, ctx_r1.field, ctx_r1.klass, ctx_r1.record, ctx_r1.parent));
} }
function DynamicFieldComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DynamicFieldComponent_ng_container_0_ng_container_1_Template, 3, 9, "ng-container", 0)(2, DynamicFieldComponent_ng_container_0_ng_container_2_Template, 3, 11, "ng-container", 0)(3, DynamicFieldComponent_ng_container_0_ng_container_3_Template, 2, 9, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.hasOnClick());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isLink() && !ctx_r1.hasOnClick());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.isLink() && !ctx_r1.hasOnClick());
} }
function DynamicFieldComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 4);
    i0.ɵɵelement(2, "div", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
function DynamicFieldComponent_ng_container_2_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelement(1, "scrm-dynamic-label", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("context", ctx_r1.getMessageContext(item_r3.value, ctx_r1.record))("fields", i0.ɵɵpureFunction1(3, _c1, ctx_r1.field))("labelKey", ctx_r1.getMessageLabelKey(item_r3.value));
} }
function DynamicFieldComponent_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DynamicFieldComponent_ng_container_2_ng_container_1_div_1_Template, 2, 5, "div", 6);
    i0.ɵɵpipe(2, "keyvalue");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx_r1.field.formControl.errors));
} }
function DynamicFieldComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DynamicFieldComponent_ng_container_2_ng_container_1_Template, 3, 3, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.validateOnlyOnSubmit ? ctx_r1.isInvalid() : ctx_r1.field.formControl.invalid && ctx_r1.field.formControl.touched);
} }
export class DynamicFieldComponent {
    constructor(navigation, moduleNameMapper, router, dynamicLabelService, linkRouteAsyncActionService) {
        this.navigation = navigation;
        this.moduleNameMapper = moduleNameMapper;
        this.router = router;
        this.dynamicLabelService = dynamicLabelService;
        this.linkRouteAsyncActionService = linkRouteAsyncActionService;
        this.record = null;
        this.parent = null;
        this.klass = null;
        this.class = 'dynamic-field';
        this.isInvalid = signal(false);
        this.validateOnlyOnSubmit = false;
    }
    get getRelateLink() {
        let linkModule = this.field.definition.module;
        if (this.field.definition.type_name === 'parent_type') {
            linkModule = this.record.attributes.parent_type;
        }
        if (this.field.definition.id_name && linkModule) {
            const moduleName = this.moduleNameMapper.toFrontend(linkModule);
            return this.navigation.getRecordRouterLink(moduleName, this.record.attributes[this.field.definition.id_name]);
        }
        return '';
    }
    ngOnInit() {
        this.setHostClass();
        this.validateOnlyOnSubmit = this.record?.metadata?.validateOnlyOnSubmit;
        if (this.record?.validationTriggered) {
            this.isInvalid = computed(() => {
                if (this.validateOnlyOnSubmit && this.record?.validationTriggered() && this.field.formControl?.invalid) {
                    return true;
                }
                return false;
            });
        }
    }
    isLink() {
        if (EDITABLE_VIEW_MODES.includes(this.mode)) {
            return false;
        }
        if (!this.field || !this.record) {
            return false;
        }
        if (this.type === 'relate') {
            return true;
        }
        return !!(this?.field?.metadata && this?.field?.metadata?.link);
    }
    hasOnClick() {
        const fieldMetadata = this?.field?.metadata ?? {};
        const linkAsyncAction = fieldMetadata?.linkAsyncAction ?? null;
        const linkOnClick = fieldMetadata?.onClick ?? null;
        return !!(linkAsyncAction || linkOnClick);
    }
    isEdit() {
        return this.mode === 'edit' || this.mode === 'filter';
    }
    getLink() {
        if (this.type === 'relate') {
            return this.getRelateLink;
        }
        const fieldMetadata = this?.field?.metadata ?? null;
        const linkRoute = fieldMetadata.linkRoute ?? null;
        if (fieldMetadata && linkRoute) {
            return this.dynamicLabelService.parse(linkRoute, {}, this.record.fields);
        }
        return this.navigation.getRecordRouterLink(this.record.module, this.record.id);
    }
    getMessageContext(item, record) {
        const context = item && item.message && item.message.context || {};
        context.module = (record && record.module) || '';
        return context;
    }
    getMessageLabelKey(item) {
        return (item && item.message && item.message.labelKey) || '';
    }
    onClick() {
        const fieldMetadata = this?.field?.metadata ?? null;
        if (fieldMetadata && fieldMetadata.onClick) {
            this.field.metadata.onClick(this.field, this.record);
            return;
        }
        const linkAsyncAction = fieldMetadata.linkAsyncAction ?? null;
        if (fieldMetadata && linkAsyncAction) {
            this.linkRouteAsyncActionService.run(linkAsyncAction, this.field, this.record);
            return;
        }
        this.router.navigateByUrl(this.getLink()).then();
        return false;
    }
    setHostClass() {
        const classes = [];
        classes.push('dynamic-field');
        if (this.mode) {
            classes.push('dynamic-field-mode-' + this.mode);
        }
        if (this.type) {
            classes.push('dynamic-field-type-' + this.type);
        }
        if (this.field && this.field.name) {
            classes.push('dynamic-field-name-' + this.field.name);
        }
        this.class = classes.join(' ');
    }
    static { this.ɵfac = function DynamicFieldComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DynamicFieldComponent)(i0.ɵɵdirectiveInject(i1.ModuleNavigation), i0.ɵɵdirectiveInject(i2.ModuleNameMapper), i0.ɵɵdirectiveInject(i3.Router), i0.ɵɵdirectiveInject(i4.DynamicLabelService), i0.ɵɵdirectiveInject(i5.LinkRouteAsyncActionService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DynamicFieldComponent, selectors: [["scrm-dynamic-field"]], hostVars: 2, hostBindings: function DynamicFieldComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassMap(ctx.class);
        } }, inputs: { mode: "mode", originalMode: "originalMode", type: "type", field: "field", record: "record", parent: "parent", klass: "klass", componentType: "componentType" }, decls: 3, vars: 3, consts: [[4, "ngIf"], [1, "clickable", "field-link", 3, "click"], [3, "ndcDynamicComponent", "ndcDynamicInputs"], [1, "field-link", 3, "routerLink", "queryParams"], [1, "dynamic-field"], [1, "flex-grow-1", "text-break", "rounded", "box-loading", "skeleton-field-content"], ["class", "invalid-feedback d-block", 4, "ngFor", "ngForOf"], [1, "invalid-feedback", "d-block"], [3, "context", "fields", "labelKey"]], template: function DynamicFieldComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, DynamicFieldComponent_ng_container_0_Template, 4, 3, "ng-container", 0)(1, DynamicFieldComponent_ng_container_1_Template, 3, 0, "ng-container", 0)(2, DynamicFieldComponent_ng_container_2_Template, 2, 1, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !(ctx.field == null ? null : ctx.field.loading()));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.field == null ? null : ctx.field.loading());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isEdit() && ctx.field.formControl && ctx.field.formControl.errors);
        } }, dependencies: [i6.NgForOf, i6.NgIf, i3.RouterLink, i7.DynamicLabelComponent, i8.DynamicIoDirective, i8.DynamicComponent, i6.KeyValuePipe], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DynamicFieldComponent, [{
        type: Component,
        args: [{ selector: 'scrm-dynamic-field', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container *ngIf=\"!field?.loading()\">\n    <ng-container *ngIf=\"hasOnClick()\">\n        <a (click)=\"onClick()\" class=\"clickable field-link\">\n            <ndc-dynamic\n                [ndcDynamicComponent]=\"componentType\"\n                [ndcDynamicInputs]=\"{\n                'mode': mode,\n                'originalMode': originalMode,\n                'field': field,\n                'klass': klass,\n                'record': record,\n                'parent': parent\n            }\"\n            ></ndc-dynamic>\n        </a>\n    </ng-container>\n    <ng-container *ngIf=\"isLink() && !hasOnClick()\">\n        <a [routerLink]=\"getLink()\" [queryParams]=\"record?.metadata?.queryParams\" class=\"field-link\">\n            <ndc-dynamic\n                [ndcDynamicComponent]=\"componentType\"\n                [ndcDynamicInputs]=\"{\n                'mode': mode,\n                'originalMode': originalMode,\n                'field': field,\n                'klass': klass,\n                'record': record,\n                'parent': parent\n            }\"\n            ></ndc-dynamic>\n        </a>\n    </ng-container>\n    <ng-container *ngIf=\"!isLink() && !hasOnClick()\">\n        <ndc-dynamic\n            [ndcDynamicComponent]=\"componentType\"\n            [ndcDynamicInputs]=\"{\n            'mode': mode,\n            'originalMode': originalMode,\n            'field': field,\n            'klass': klass,\n            'record': record,\n            'parent': parent\n        }\"\n        ></ndc-dynamic>\n    </ng-container>\n</ng-container>\n\n<ng-container *ngIf=\"field?.loading()\">\n   <div class= \"dynamic-field\">\n        <div class=\"flex-grow-1 text-break rounded box-loading skeleton-field-content\"></div>\n   </div>\n</ng-container>\n<ng-container *ngIf=\"isEdit() && field.formControl && field.formControl.errors\">\n    <ng-container *ngIf=\"validateOnlyOnSubmit ? isInvalid() : (field.formControl.invalid && field.formControl.touched)\">\n        <div *ngFor=\"let item of field.formControl.errors | keyvalue\" class=\"invalid-feedback d-block\">\n            <scrm-dynamic-label [context]=\"getMessageContext(item.value, record)\"\n                                [fields]=\"{field: field}\"\n                                [labelKey]=\"getMessageLabelKey(item.value)\">\n            </scrm-dynamic-label>\n        </div>\n    </ng-container>\n</ng-container>\n" }]
    }], () => [{ type: i1.ModuleNavigation }, { type: i2.ModuleNameMapper }, { type: i3.Router }, { type: i4.DynamicLabelService }, { type: i5.LinkRouteAsyncActionService }], { mode: [{
            type: Input,
            args: ['mode']
        }], originalMode: [{
            type: Input,
            args: ['originalMode']
        }], type: [{
            type: Input,
            args: ['type']
        }], field: [{
            type: Input,
            args: ['field']
        }], record: [{
            type: Input,
            args: ['record']
        }], parent: [{
            type: Input,
            args: ['parent']
        }], klass: [{
            type: Input,
            args: ['klass']
        }], componentType: [{
            type: Input,
            args: ['componentType']
        }], class: [{
            type: HostBinding,
            args: ['class']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DynamicFieldComponent, { className: "DynamicFieldComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvZmllbGRzL2R5bmFtaWMtZmllbGQvZHluYW1pYy1maWVsZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvZmllbGRzL2R5bmFtaWMtZmllbGQvZHluYW1pYy1maWVsZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsV0FBVyxFQUNYLEtBQUssRUFDRyxNQUFNLEVBRWQsSUFBSSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBQyxtQkFBbUIsRUFBVyxNQUFNLCtCQUErQixDQUFDO0FBRTVFLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN2QyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSx5RUFBeUUsQ0FBQztBQUN6RyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSx1RUFBdUUsQ0FBQztBQUN2RyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUNsRixPQUFPLEVBQ0gsMkJBQTJCLEVBQzlCLE1BQU0sbUZBQW1GLENBQUM7Ozs7Ozs7Ozs7Ozs7O0lDakJ2Riw2QkFBbUM7SUFDL0IsNEJBQW9EO0lBQWpELHFNQUFTLGdCQUFTLEtBQUM7SUFDbEIsaUNBVWU7SUFDbkIsaUJBQUk7Ozs7SUFWSSxlQUFxQztJQUNyQyxBQURBLDBEQUFxQyw0SUFRdkM7OztJQUlWLDZCQUFnRDtJQUM1Qyw0QkFBNkY7SUFDekYsaUNBVWU7SUFDbkIsaUJBQUk7Ozs7SUFaRCxjQUF3QjtJQUFDLEFBQXpCLDZDQUF3QiwwSEFBOEM7SUFFakUsY0FB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QUF3QywyRUE4Q0QsMkVBS3lDOztZQW5EakUsd0VBQXVCO1lBOEN2QixjQUFzQjtZQUF0QixxRUFBc0I7WUFLdEIsY0FBK0Q7WUFBL0QsNEZBQStEOzs7aUZEMUJqRSxxQkFBcUI7Y0FMakMsU0FBUzsyQkFDSSxvQkFBb0I7aUxBTWYsSUFBSTtrQkFBbEIsS0FBSzttQkFBQyxNQUFNO1lBQ1UsWUFBWTtrQkFBbEMsS0FBSzttQkFBQyxjQUFjO1lBQ04sSUFBSTtrQkFBbEIsS0FBSzttQkFBQyxNQUFNO1lBQ0csS0FBSztrQkFBcEIsS0FBSzttQkFBQyxPQUFPO1lBQ0csTUFBTTtrQkFBdEIsS0FBSzttQkFBQyxRQUFRO1lBQ0UsTUFBTTtrQkFBdEIsS0FBSzttQkFBQyxRQUFRO1lBQ0MsS0FBSztrQkFBcEIsS0FBSzttQkFBQyxPQUFPO1lBQ1UsYUFBYTtrQkFBcEMsS0FBSzttQkFBQyxlQUFlO1lBRUEsS0FBSztrQkFBMUIsV0FBVzttQkFBQyxPQUFPOztrRkFYWCxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIGNvbXB1dGVkLFxuICAgIEhvc3RCaW5kaW5nLFxuICAgIElucHV0LFxuICAgIE9uSW5pdCwgc2lnbmFsLFxuICAgIFNpZ25hbCxcbiAgICBUeXBlXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSZWNvcmR9IGZyb20gJy4uLy4uL2NvbW1vbi9yZWNvcmQvcmVjb3JkLm1vZGVsJztcbmltcG9ydCB7RmllbGR9IGZyb20gJy4uLy4uL2NvbW1vbi9yZWNvcmQvZmllbGQubW9kZWwnO1xuaW1wb3J0IHtFRElUQUJMRV9WSUVXX01PREVTLCBWaWV3TW9kZX0gZnJvbSAnLi4vLi4vY29tbW9uL3ZpZXdzL3ZpZXcubW9kZWwnO1xuaW1wb3J0IHtTdHJpbmdNYXB9IGZyb20gJy4uLy4uL2NvbW1vbi90eXBlcy9zdHJpbmctbWFwJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtNb2R1bGVOYW1lTWFwcGVyfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL21vZHVsZS1uYW1lLW1hcHBlci9tb2R1bGUtbmFtZS1tYXBwZXIuc2VydmljZSc7XG5pbXBvcnQge01vZHVsZU5hdmlnYXRpb259IGZyb20gJy4uLy4uL3NlcnZpY2VzL25hdmlnYXRpb24vbW9kdWxlLW5hdmlnYXRpb24vbW9kdWxlLW5hdmlnYXRpb24uc2VydmljZSc7XG5pbXBvcnQge0R5bmFtaWNMYWJlbFNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xhbmd1YWdlL2R5bmFtaWMtbGFiZWwuc2VydmljZSc7XG5pbXBvcnQge1xuICAgIExpbmtSb3V0ZUFzeW5jQWN0aW9uU2VydmljZVxufSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL2xpbmstcm91dGUtYXN5bmMtYWN0aW9uL2xpbmstcm91dGUtYXN5bmMtYWN0aW9uLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tZHluYW1pYy1maWVsZCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2R5bmFtaWMtZmllbGQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW11cbn0pXG5leHBvcnQgY2xhc3MgRHluYW1pY0ZpZWxkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBJbnB1dCgnbW9kZScpIG1vZGU6IHN0cmluZztcbiAgICBASW5wdXQoJ29yaWdpbmFsTW9kZScpIG9yaWdpbmFsTW9kZTogc3RyaW5nO1xuICAgIEBJbnB1dCgndHlwZScpIHR5cGU6IHN0cmluZztcbiAgICBASW5wdXQoJ2ZpZWxkJykgZmllbGQ6IEZpZWxkO1xuICAgIEBJbnB1dCgncmVjb3JkJykgcmVjb3JkOiBSZWNvcmQgPSBudWxsO1xuICAgIEBJbnB1dCgncGFyZW50JykgcGFyZW50OiBSZWNvcmQgPSBudWxsO1xuICAgIEBJbnB1dCgna2xhc3MnKSBrbGFzczogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IG51bGw7XG4gICAgQElucHV0KCdjb21wb25lbnRUeXBlJykgY29tcG9uZW50VHlwZTogVHlwZTxhbnk+O1xuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIGNsYXNzID0gJ2R5bmFtaWMtZmllbGQnO1xuXG4gICAgaXNJbnZhbGlkOiBTaWduYWw8Ym9vbGVhbj4gPSBzaWduYWwoZmFsc2UpO1xuICAgIHZhbGlkYXRlT25seU9uU3VibWl0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIG5hdmlnYXRpb246IE1vZHVsZU5hdmlnYXRpb24sXG4gICAgICAgIHByb3RlY3RlZCBtb2R1bGVOYW1lTWFwcGVyOiBNb2R1bGVOYW1lTWFwcGVyLFxuICAgICAgICBwcm90ZWN0ZWQgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByb3RlY3RlZCBkeW5hbWljTGFiZWxTZXJ2aWNlOiBEeW5hbWljTGFiZWxTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgbGlua1JvdXRlQXN5bmNBY3Rpb25TZXJ2aWNlOiBMaW5rUm91dGVBc3luY0FjdGlvblNlcnZpY2UsXG4gICAgKSB7XG4gICAgfVxuXG4gICAgZ2V0IGdldFJlbGF0ZUxpbmsoKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IGxpbmtNb2R1bGUgPSB0aGlzLmZpZWxkLmRlZmluaXRpb24ubW9kdWxlO1xuXG4gICAgICAgIGlmICh0aGlzLmZpZWxkLmRlZmluaXRpb24udHlwZV9uYW1lID09PSAncGFyZW50X3R5cGUnKSB7XG4gICAgICAgICAgICBsaW5rTW9kdWxlID0gdGhpcy5yZWNvcmQuYXR0cmlidXRlcy5wYXJlbnRfdHlwZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmZpZWxkLmRlZmluaXRpb24uaWRfbmFtZSAmJiBsaW5rTW9kdWxlKSB7XG4gICAgICAgICAgICBjb25zdCBtb2R1bGVOYW1lID0gdGhpcy5tb2R1bGVOYW1lTWFwcGVyLnRvRnJvbnRlbmQobGlua01vZHVsZSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uYXZpZ2F0aW9uLmdldFJlY29yZFJvdXRlckxpbmsoXG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZSxcbiAgICAgICAgICAgICAgICB0aGlzLnJlY29yZC5hdHRyaWJ1dGVzW3RoaXMuZmllbGQuZGVmaW5pdGlvbi5pZF9uYW1lXVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZXRIb3N0Q2xhc3MoKTtcbiAgICAgICAgdGhpcy52YWxpZGF0ZU9ubHlPblN1Ym1pdCA9IHRoaXMucmVjb3JkPy5tZXRhZGF0YT8udmFsaWRhdGVPbmx5T25TdWJtaXQ7XG5cbiAgICAgICAgaWYodGhpcy5yZWNvcmQ/LnZhbGlkYXRpb25UcmlnZ2VyZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNJbnZhbGlkID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHRoaXMudmFsaWRhdGVPbmx5T25TdWJtaXQgJiYgdGhpcy5yZWNvcmQ/LnZhbGlkYXRpb25UcmlnZ2VyZWQoKSAmJiB0aGlzLmZpZWxkLmZvcm1Db250cm9sPy5pbnZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNMaW5rKCk6IGJvb2xlYW4ge1xuXG4gICAgICAgIGlmIChFRElUQUJMRV9WSUVXX01PREVTLmluY2x1ZGVzKHRoaXMubW9kZSBhcyBWaWV3TW9kZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5maWVsZCB8fCAhdGhpcy5yZWNvcmQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdyZWxhdGUnKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISh0aGlzPy5maWVsZD8ubWV0YWRhdGEgJiYgdGhpcz8uZmllbGQ/Lm1ldGFkYXRhPy5saW5rKTtcbiAgICB9XG5cbiAgICBoYXNPbkNsaWNrKCk6IGJvb2xlYW4ge1xuXG4gICAgICAgIGNvbnN0IGZpZWxkTWV0YWRhdGEgPSB0aGlzPy5maWVsZD8ubWV0YWRhdGEgPz8ge307XG4gICAgICAgIGNvbnN0IGxpbmtBc3luY0FjdGlvbiA9IGZpZWxkTWV0YWRhdGE/LmxpbmtBc3luY0FjdGlvbiA/PyBudWxsO1xuICAgICAgICBjb25zdCBsaW5rT25DbGljayA9IGZpZWxkTWV0YWRhdGE/Lm9uQ2xpY2sgPz8gbnVsbDtcblxuICAgICAgICByZXR1cm4gISEobGlua0FzeW5jQWN0aW9uIHx8IGxpbmtPbkNsaWNrKTtcbiAgICB9XG5cbiAgICBpc0VkaXQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGUgPT09ICdlZGl0JyB8fCB0aGlzLm1vZGUgPT09ICdmaWx0ZXInO1xuICAgIH1cblxuICAgIGdldExpbmsoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ3JlbGF0ZScpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFJlbGF0ZUxpbms7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmaWVsZE1ldGFkYXRhID0gdGhpcz8uZmllbGQ/Lm1ldGFkYXRhID8/IG51bGw7XG4gICAgICAgIGNvbnN0IGxpbmtSb3V0ZSA9IGZpZWxkTWV0YWRhdGEubGlua1JvdXRlID8/IG51bGw7XG4gICAgICAgIGlmIChmaWVsZE1ldGFkYXRhICYmIGxpbmtSb3V0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZHluYW1pY0xhYmVsU2VydmljZS5wYXJzZShsaW5rUm91dGUsIHt9LCB0aGlzLnJlY29yZC5maWVsZHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubmF2aWdhdGlvbi5nZXRSZWNvcmRSb3V0ZXJMaW5rKHRoaXMucmVjb3JkLm1vZHVsZSwgdGhpcy5yZWNvcmQuaWQpO1xuICAgIH1cblxuICAgIGdldE1lc3NhZ2VDb250ZXh0KGl0ZW06IGFueSwgcmVjb3JkOiBSZWNvcmQpOiBTdHJpbmdNYXAge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gaXRlbSAmJiBpdGVtLm1lc3NhZ2UgJiYgaXRlbS5tZXNzYWdlLmNvbnRleHQgfHwge307XG4gICAgICAgIGNvbnRleHQubW9kdWxlID0gKHJlY29yZCAmJiByZWNvcmQubW9kdWxlKSB8fCAnJztcblxuICAgICAgICByZXR1cm4gY29udGV4dDtcbiAgICB9XG5cbiAgICBnZXRNZXNzYWdlTGFiZWxLZXkoaXRlbTogYW55KTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIChpdGVtICYmIGl0ZW0ubWVzc2FnZSAmJiBpdGVtLm1lc3NhZ2UubGFiZWxLZXkpIHx8ICcnO1xuICAgIH1cblxuICAgIG9uQ2xpY2soKTogYm9vbGVhbiB7XG5cbiAgICAgICAgY29uc3QgZmllbGRNZXRhZGF0YSA9IHRoaXM/LmZpZWxkPy5tZXRhZGF0YSA/PyBudWxsO1xuICAgICAgICBpZiAoZmllbGRNZXRhZGF0YSAmJiBmaWVsZE1ldGFkYXRhLm9uQ2xpY2spIHtcbiAgICAgICAgICAgIHRoaXMuZmllbGQubWV0YWRhdGEub25DbGljayh0aGlzLmZpZWxkLCB0aGlzLnJlY29yZCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsaW5rQXN5bmNBY3Rpb24gPSBmaWVsZE1ldGFkYXRhLmxpbmtBc3luY0FjdGlvbiA/PyBudWxsO1xuICAgICAgICBpZiAoZmllbGRNZXRhZGF0YSAmJiBsaW5rQXN5bmNBY3Rpb24pIHtcbiAgICAgICAgICAgIHRoaXMubGlua1JvdXRlQXN5bmNBY3Rpb25TZXJ2aWNlLnJ1bihsaW5rQXN5bmNBY3Rpb24sIHRoaXMuZmllbGQsIHRoaXMucmVjb3JkKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodGhpcy5nZXRMaW5rKCkpLnRoZW4oKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRIb3N0Q2xhc3MoKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXTtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKCdkeW5hbWljLWZpZWxkJyk7XG5cbiAgICAgICAgaWYgKHRoaXMubW9kZSkge1xuICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKCdkeW5hbWljLWZpZWxkLW1vZGUtJyArIHRoaXMubW9kZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnR5cGUpIHtcbiAgICAgICAgICAgIGNsYXNzZXMucHVzaCgnZHluYW1pYy1maWVsZC10eXBlLScgKyB0aGlzLnR5cGUpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5maWVsZCAmJiB0aGlzLmZpZWxkLm5hbWUpIHtcbiAgICAgICAgICAgIGNsYXNzZXMucHVzaCgnZHluYW1pYy1maWVsZC1uYW1lLScgKyB0aGlzLmZpZWxkLm5hbWUpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNsYXNzID0gY2xhc3Nlcy5qb2luKCcgJyk7XG4gICAgfVxuXG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48bmctY29udGFpbmVyICpuZ0lmPVwiIWZpZWxkPy5sb2FkaW5nKClcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaGFzT25DbGljaygpXCI+XG4gICAgICAgIDxhIChjbGljayk9XCJvbkNsaWNrKClcIiBjbGFzcz1cImNsaWNrYWJsZSBmaWVsZC1saW5rXCI+XG4gICAgICAgICAgICA8bmRjLWR5bmFtaWNcbiAgICAgICAgICAgICAgICBbbmRjRHluYW1pY0NvbXBvbmVudF09XCJjb21wb25lbnRUeXBlXCJcbiAgICAgICAgICAgICAgICBbbmRjRHluYW1pY0lucHV0c109XCJ7XG4gICAgICAgICAgICAgICAgJ21vZGUnOiBtb2RlLFxuICAgICAgICAgICAgICAgICdvcmlnaW5hbE1vZGUnOiBvcmlnaW5hbE1vZGUsXG4gICAgICAgICAgICAgICAgJ2ZpZWxkJzogZmllbGQsXG4gICAgICAgICAgICAgICAgJ2tsYXNzJzoga2xhc3MsXG4gICAgICAgICAgICAgICAgJ3JlY29yZCc6IHJlY29yZCxcbiAgICAgICAgICAgICAgICAncGFyZW50JzogcGFyZW50XG4gICAgICAgICAgICB9XCJcbiAgICAgICAgICAgID48L25kYy1keW5hbWljPlxuICAgICAgICA8L2E+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzTGluaygpICYmICFoYXNPbkNsaWNrKClcIj5cbiAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiZ2V0TGluaygpXCIgW3F1ZXJ5UGFyYW1zXT1cInJlY29yZD8ubWV0YWRhdGE/LnF1ZXJ5UGFyYW1zXCIgY2xhc3M9XCJmaWVsZC1saW5rXCI+XG4gICAgICAgICAgICA8bmRjLWR5bmFtaWNcbiAgICAgICAgICAgICAgICBbbmRjRHluYW1pY0NvbXBvbmVudF09XCJjb21wb25lbnRUeXBlXCJcbiAgICAgICAgICAgICAgICBbbmRjRHluYW1pY0lucHV0c109XCJ7XG4gICAgICAgICAgICAgICAgJ21vZGUnOiBtb2RlLFxuICAgICAgICAgICAgICAgICdvcmlnaW5hbE1vZGUnOiBvcmlnaW5hbE1vZGUsXG4gICAgICAgICAgICAgICAgJ2ZpZWxkJzogZmllbGQsXG4gICAgICAgICAgICAgICAgJ2tsYXNzJzoga2xhc3MsXG4gICAgICAgICAgICAgICAgJ3JlY29yZCc6IHJlY29yZCxcbiAgICAgICAgICAgICAgICAncGFyZW50JzogcGFyZW50XG4gICAgICAgICAgICB9XCJcbiAgICAgICAgICAgID48L25kYy1keW5hbWljPlxuICAgICAgICA8L2E+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpc0xpbmsoKSAmJiAhaGFzT25DbGljaygpXCI+XG4gICAgICAgIDxuZGMtZHluYW1pY1xuICAgICAgICAgICAgW25kY0R5bmFtaWNDb21wb25lbnRdPVwiY29tcG9uZW50VHlwZVwiXG4gICAgICAgICAgICBbbmRjRHluYW1pY0lucHV0c109XCJ7XG4gICAgICAgICAgICAnbW9kZSc6IG1vZGUsXG4gICAgICAgICAgICAnb3JpZ2luYWxNb2RlJzogb3JpZ2luYWxNb2RlLFxuICAgICAgICAgICAgJ2ZpZWxkJzogZmllbGQsXG4gICAgICAgICAgICAna2xhc3MnOiBrbGFzcyxcbiAgICAgICAgICAgICdyZWNvcmQnOiByZWNvcmQsXG4gICAgICAgICAgICAncGFyZW50JzogcGFyZW50XG4gICAgICAgIH1cIlxuICAgICAgICA+PC9uZGMtZHluYW1pYz5cbiAgICA8L25nLWNvbnRhaW5lcj5cbjwvbmctY29udGFpbmVyPlxuXG48bmctY29udGFpbmVyICpuZ0lmPVwiZmllbGQ/LmxvYWRpbmcoKVwiPlxuICAgPGRpdiBjbGFzcz0gXCJkeW5hbWljLWZpZWxkXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LWdyb3ctMSB0ZXh0LWJyZWFrIHJvdW5kZWQgYm94LWxvYWRpbmcgc2tlbGV0b24tZmllbGQtY29udGVudFwiPjwvZGl2PlxuICAgPC9kaXY+XG48L25nLWNvbnRhaW5lcj5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJpc0VkaXQoKSAmJiBmaWVsZC5mb3JtQ29udHJvbCAmJiBmaWVsZC5mb3JtQ29udHJvbC5lcnJvcnNcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidmFsaWRhdGVPbmx5T25TdWJtaXQgPyBpc0ludmFsaWQoKSA6IChmaWVsZC5mb3JtQ29udHJvbC5pbnZhbGlkICYmIGZpZWxkLmZvcm1Db250cm9sLnRvdWNoZWQpXCI+XG4gICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZmllbGQuZm9ybUNvbnRyb2wuZXJyb3JzIHwga2V5dmFsdWVcIiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2sgZC1ibG9ja1wiPlxuICAgICAgICAgICAgPHNjcm0tZHluYW1pYy1sYWJlbCBbY29udGV4dF09XCJnZXRNZXNzYWdlQ29udGV4dChpdGVtLnZhbHVlLCByZWNvcmQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ZpZWxkc109XCJ7ZmllbGQ6IGZpZWxkfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsYWJlbEtleV09XCJnZXRNZXNzYWdlTGFiZWxLZXkoaXRlbS52YWx1ZSlcIj5cbiAgICAgICAgICAgIDwvc2NybS1keW5hbWljLWxhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbjwvbmctY29udGFpbmVyPlxuIl19