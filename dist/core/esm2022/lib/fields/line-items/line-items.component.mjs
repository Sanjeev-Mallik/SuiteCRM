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
import { Component } from '@angular/core';
import { DataTypeFormatter } from '../../services/formatters/data-type.formatter.service';
import { RecordManager } from '../../services/record/record.manager';
import { FieldLogicManager } from '../field-logic/field-logic.manager';
import { BaseLineItemsComponent } from '../base/base-line-items.component';
import { FieldManager } from '../../services/record/field/field.manager';
import { FieldRegistry } from '../field.registry';
import { FieldLogicDisplayManager } from '../field-logic-display/field-logic-display.manager';
import * as i0 from "@angular/core";
import * as i1 from "../../services/formatters/data-type.formatter.service";
import * as i2 from "../field.registry";
import * as i3 from "../../services/record/record.manager";
import * as i4 from "../field-logic/field-logic.manager";
import * as i5 from "../../services/record/field/field.manager";
import * as i6 from "../field-logic-display/field-logic-display.manager";
import * as i7 from "@angular/common";
import * as i8 from "../../components/label/label.component";
import * as i9 from "../dynamic-field/dynamic-field.component";
import * as i10 from "../../components/button/button.component";
import * as i11 from "../../components/dynamic-label/dynamic-label.component";
const _c0 = a0 => ({ field: a0 });
function LineItemsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-label", 1);
    i0.ɵɵelementContainerEnd();
} }
function LineItemsComponent_ng_container_1_ng_container_1_ng_container_3_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "scrm-dynamic-field", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const itemField_r1 = ctx.$implicit;
    const item_r2 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate2("", itemField_r1.type, " ", itemField_r1.name, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("componentType", ctx_r2.getComponentType(itemField_r1.type, itemField_r1.definition))("field", itemField_r1)("klass", ctx_r2.klass)("mode", ctx_r2.mode)("originalMode", ctx_r2.originalMode)("record", item_r2)("parent", ctx_r2.parent)("type", itemField_r1.type);
} }
function LineItemsComponent_ng_container_1_ng_container_1_ng_container_3_div_1_scrm_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-button", 11);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    const item_r2 = ctx_r3.$implicit;
    const i_r5 = ctx_r3.index;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("config", ctx_r2.getRemoveItemButton(item_r2, i_r5));
} }
function LineItemsComponent_ng_container_1_ng_container_1_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "div", 7);
    i0.ɵɵtemplate(2, LineItemsComponent_ng_container_1_ng_container_1_ng_container_3_div_1_div_2_Template, 2, 12, "div", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 9);
    i0.ɵɵtemplate(4, LineItemsComponent_ng_container_1_ng_container_1_ng_container_3_div_1_scrm_button_4_Template, 1, 1, "scrm-button", 4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r2.getItemFields(item_r2));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.isEditable());
} }
function LineItemsComponent_ng_container_1_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, LineItemsComponent_ng_container_1_ng_container_1_ng_container_3_div_1_Template, 5, 2, "div", 5);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !(item_r2 && item_r2.attributes && item_r2.attributes.deleted));
} }
function LineItemsComponent_ng_container_1_ng_container_1_scrm_button_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-button", 11);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("config", ctx_r2.getAddItemButton());
} }
function LineItemsComponent_ng_container_1_ng_container_1_ng_container_6_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelement(1, "scrm-dynamic-label", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("context", ctx_r2.getMessageContext(item_r6.value, ctx_r2.record))("fields", i0.ɵɵpureFunction1(3, _c0, ctx_r2.field))("labelKey", ctx_r2.getMessageLabelKey(item_r6.value));
} }
function LineItemsComponent_ng_container_1_ng_container_1_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, LineItemsComponent_ng_container_1_ng_container_1_ng_container_6_ng_container_1_div_1_Template, 2, 5, "div", 12);
    i0.ɵɵpipe(2, "keyvalue");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx_r2.field.itemFormArray.errors));
} }
function LineItemsComponent_ng_container_1_ng_container_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, LineItemsComponent_ng_container_1_ng_container_1_ng_container_6_ng_container_1_Template, 3, 3, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.field.itemFormArray.invalid);
} }
function LineItemsComponent_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div")(2, "div");
    i0.ɵɵtemplate(3, LineItemsComponent_ng_container_1_ng_container_1_ng_container_3_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 3);
    i0.ɵɵtemplate(5, LineItemsComponent_ng_container_1_ng_container_1_scrm_button_5_Template, 1, 1, "scrm-button", 4);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(6, LineItemsComponent_ng_container_1_ng_container_1_ng_container_6_Template, 2, 1, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("line-items d-flex flex-column ", ctx_r2.field.type, " ", ctx_r2.field.name, "");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("d-flex ", ctx_r2.getDirection(), " justify-content-start align-items-end line-item h-100");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.field.items);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.isEditable());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r2.mode === "edit" || ctx_r2.mode === "filter") && ctx_r2.field.itemFormArray && ctx_r2.field.itemFormArray.errors);
} }
function LineItemsComponent_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 15);
    i0.ɵɵelement(2, "div", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
function LineItemsComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, LineItemsComponent_ng_container_1_ng_container_1_Template, 7, 10, "ng-container", 0)(2, LineItemsComponent_ng_container_1_ng_container_2_Template, 3, 0, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !(ctx_r2.field == null ? null : ctx_r2.field.loading()));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.field == null ? null : ctx_r2.field.loading());
} }
export class LineItemsComponent extends BaseLineItemsComponent {
    constructor(typeFormatter, registry, recordManager, logic, fieldManager, logicDisplay) {
        super(typeFormatter, registry, recordManager, logic, fieldManager, logicDisplay);
        this.typeFormatter = typeFormatter;
        this.registry = registry;
        this.recordManager = recordManager;
        this.logic = logic;
        this.fieldManager = fieldManager;
        this.logicDisplay = logicDisplay;
    }
    ngOnInit() {
        super.ngOnInit();
        this.field.metadata = this?.field?.metadata ?? {};
        const emptyItemInitialized = this?.field?.metadata?.emptyItemInitialized ?? false;
        if (['create'].includes(this.originalMode) && !emptyItemInitialized) {
            this.initEmptyItem();
            this.field.metadata.emptyItemInitialized = true;
        }
    }
    /**
     * Add item button config
     * @returns {object} ButtonInterface
     */
    getAddItemButton() {
        return {
            klass: 'btn btn-sm btn-outline-secondary m-0 border-0',
            icon: 'plus',
            onClick: () => {
                this.addEmptyItem();
            },
        };
    }
    /**
     * Remove item button config
     * @param {object} item
     * @param {number} index
     * @returns {object} ButtonInterface
     */
    getRemoveItemButton(item, index) {
        return {
            klass: 'btn btn-sm btn-outline-secondary m-0 border-0',
            icon: 'minimise',
            onClick: () => {
                this.removeItem(index);
            },
        };
    }
    static { this.ɵfac = function LineItemsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LineItemsComponent)(i0.ɵɵdirectiveInject(i1.DataTypeFormatter), i0.ɵɵdirectiveInject(i2.FieldRegistry), i0.ɵɵdirectiveInject(i3.RecordManager), i0.ɵɵdirectiveInject(i4.FieldLogicManager), i0.ɵɵdirectiveInject(i5.FieldManager), i0.ɵɵdirectiveInject(i6.FieldLogicDisplayManager)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LineItemsComponent, selectors: [["scrm-line-items-field"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 2, consts: [[4, "ngIf"], ["labelKey", "LBL_LINE_ITEMS_FIELD_CONFIG"], [4, "ngFor", "ngForOf"], [1, "line-item-buttons", "d-flex", "justify-content-end", "mt-1"], [3, "config", 4, "ngIf"], ["class", "d-flex flex-row line-item-entry w-100 align-items-end", 4, "ngIf"], [1, "d-flex", "flex-row", "line-item-entry", "w-100", "align-items-end"], [1, "flex-grow-1", "line-item-entry-composite"], [3, "class", 4, "ngFor", "ngForOf"], [1, "line-item-entry-buttons", "mb-1"], [3, "componentType", "field", "klass", "mode", "originalMode", "record", "parent", "type"], [3, "config"], ["class", "invalid-feedback d-block", 4, "ngFor", "ngForOf"], [1, "invalid-feedback", "d-block"], [3, "context", "fields", "labelKey"], [1, "dynamic-field"], [1, "flex-grow-1", "text-break", "rounded", "box-loading", "skeleton-field-content"]], template: function LineItemsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, LineItemsComponent_ng_container_0_Template, 2, 0, "ng-container", 0)(1, LineItemsComponent_ng_container_1_Template, 3, 2, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.isConfigured());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isConfigured());
        } }, dependencies: [i7.NgForOf, i7.NgIf, i8.LabelComponent, i9.DynamicFieldComponent, i10.ButtonComponent, i11.DynamicLabelComponent, i7.KeyValuePipe], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LineItemsComponent, [{
        type: Component,
        args: [{ selector: 'scrm-line-items-field', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container *ngIf=\"!isConfigured()\">\n    <scrm-label labelKey=\"LBL_LINE_ITEMS_FIELD_CONFIG\"></scrm-label>\n</ng-container>\n\n<ng-container *ngIf=\"isConfigured()\">\n\n    <ng-container *ngIf=\"!field?.loading()\">\n        <div class=\"line-items d-flex flex-column {{field.type}} {{field.name}}\">\n\n            <div class=\"d-flex {{getDirection()}} justify-content-start align-items-end line-item h-100\">\n                <ng-container *ngFor=\"let item of field.items; index as i\">\n                    <div *ngIf=\"!(item && item.attributes && item.attributes.deleted)\"\n                         class=\"d-flex flex-row line-item-entry w-100 align-items-end\">\n\n                        <div class=\"flex-grow-1 line-item-entry-composite\">\n                            <div *ngFor=\"let itemField of getItemFields(item)\"\n                                 class=\"{{itemField.type}} {{itemField.name}}\">\n                                <scrm-dynamic-field [componentType]=\"getComponentType(itemField.type, itemField.definition)\"\n                                                    [field]=\"itemField\"\n                                                    [klass]=\"klass\"\n                                                    [mode]=\"mode\"\n                                                    [originalMode]=\"originalMode\"\n                                                    [record]=\"item\"\n                                                    [parent]=\"parent\"\n                                                    [type]=\"itemField.type\">\n                                </scrm-dynamic-field>\n                            </div>\n                        </div>\n\n                        <div class=\"line-item-entry-buttons mb-1\">\n                            <scrm-button *ngIf=\"isEditable()\" [config]=\"getRemoveItemButton(item, i)\">\n                            </scrm-button>\n                        </div>\n                    </div>\n                </ng-container>\n\n\n            </div>\n            <div class=\"line-item-buttons d-flex justify-content-end mt-1\">\n                <scrm-button *ngIf=\"isEditable()\" [config]=\"getAddItemButton()\">\n                </scrm-button>\n            </div>\n\n        </div>\n\n        <ng-container *ngIf=\"(mode === 'edit' || mode === 'filter') && field.itemFormArray && field.itemFormArray.errors\">\n            <ng-container *ngIf=\"field.itemFormArray.invalid\">\n                <div *ngFor=\"let item of field.itemFormArray.errors | keyvalue\" class=\"invalid-feedback d-block\">\n                    <scrm-dynamic-label [context]=\"getMessageContext(item.value, record)\"\n                                        [fields]=\"{field: field}\"\n                                        [labelKey]=\"getMessageLabelKey(item.value)\">\n                    </scrm-dynamic-label>\n                </div>\n            </ng-container>\n        </ng-container>\n    </ng-container>\n\n\n    <ng-container *ngIf=\"field?.loading()\">\n        <div class= \"dynamic-field\">\n            <div class=\"flex-grow-1 text-break rounded box-loading skeleton-field-content\"></div>\n        </div>\n    </ng-container>\n\n</ng-container>\n" }]
    }], () => [{ type: i1.DataTypeFormatter }, { type: i2.FieldRegistry }, { type: i3.RecordManager }, { type: i4.FieldLogicManager }, { type: i5.FieldManager }, { type: i6.FieldLogicDisplayManager }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LineItemsComponent, { className: "LineItemsComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS1pdGVtcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvZmllbGRzL2xpbmUtaXRlbXMvbGluZS1pdGVtcy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvZmllbGRzL2xpbmUtaXRlbXMvbGluZS1pdGVtcy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSx1REFBdUQsQ0FBQztBQUN4RixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDbkUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDckUsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFHekUsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRCxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxvREFBb0QsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0lDUjVGLDZCQUFzQztJQUNsQyxnQ0FBZ0U7Ozs7SUFjeEMsMkJBQ21EO0lBQy9DLHlDQVFxQjtJQUN6QixpQkFBTTs7Ozs7SUFWRCw0RUFBNkM7SUFDMUIsY0FBd0U7SUFPeEUsQUFEQSxBQURBLEFBREEsQUFEQSxBQURBLEFBREEsQUFEQSxtR0FBd0UsdUJBQ3JELHVCQUNKLHFCQUNGLHFDQUNnQixtQkFDZCx5QkFDRSwyQkFDTTs7O0lBTS9DLGtDQUNjOzs7Ozs7SUFEb0Isa0VBQXVDOzs7SUFoQjdFLEFBSEosOEJBQ21FLGFBRVo7SUFDL0MsdUhBQ21EO0lBV3ZELGlCQUFNO0lBRU4sOEJBQTBDO0lBQ3RDLHNJQUEwRTtJQUdsRixBQURJLGlCQUFNLEVBQ0o7Ozs7SUFsQjZCLGVBQXNCO0lBQXRCLHVEQUFzQjtJQWVuQyxlQUFrQjtJQUFsQiwwQ0FBa0I7OztJQXBCNUMsNkJBQTJEO0lBQ3ZELGdIQUNtRTs7OztJQUQ3RCxjQUEyRDtJQUEzRCxxRkFBMkQ7OztJQTRCckUsa0NBQ2M7OztJQURvQixrREFBNkI7OztJQVEvRCwrQkFBaUc7SUFDN0YseUNBR3FCO0lBQ3pCLGlCQUFNOzs7O0lBSmtCLGNBQWlEO0lBRWpELEFBREEsQUFEQSxnRkFBaUQsb0RBQ3hCLHNEQUNrQjs7O0lBSnZFLDZCQUFrRDtJQUM5QyxnSUFBaUc7Ozs7O0lBQTNFLGNBQXdDO0lBQXhDLGlGQUF3Qzs7O0lBRnRFLDZCQUFrSDtJQUM5RyxrSUFBa0Q7Ozs7SUFBbkMsY0FBaUM7SUFBakMseURBQWlDOzs7SUF4Q3hELDZCQUF3QztJQUdoQyxBQUZKLDJCQUF5RSxVQUV3QjtJQUN6RixtSEFBMkQ7SUEyQi9ELGlCQUFNO0lBQ04sOEJBQStEO0lBQzNELGlIQUFnRTtJQUl4RSxBQUZJLGlCQUFNLEVBRUo7SUFFTixtSEFBa0g7Ozs7SUF0QzdHLGNBQW1FO0lBQW5FLDBHQUFtRTtJQUUvRCxjQUF1RjtJQUF2RixxSEFBdUY7SUFDekQsY0FBZ0I7SUFBaEIsNENBQWdCO0lBNkJqQyxlQUFrQjtJQUFsQiwwQ0FBa0I7SUFNekIsY0FBaUc7SUFBakcsOElBQWlHOzs7SUFhcEgsNkJBQXVDO0lBQ25DLCtCQUE0QjtJQUN4QiwwQkFBcUY7SUFDekYsaUJBQU07Ozs7SUF6RGQsNkJBQXFDO0lBc0RqQyxBQXBEQSxxR0FBd0MsdUZBb0REOzs7O0lBcER4QixjQUF1QjtJQUF2Qiw4RUFBdUI7SUFvRHZCLGNBQXNCO0lBQXRCLDJFQUFzQjs7QUQxQ3pDLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxzQkFBc0I7SUFFMUQsWUFDYyxhQUFnQyxFQUNoQyxRQUF1QixFQUN2QixhQUE0QixFQUM1QixLQUF3QixFQUN4QixZQUEwQixFQUMxQixZQUFzQztRQUVoRCxLQUFLLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztRQVB2RSxrQkFBYSxHQUFiLGFBQWEsQ0FBbUI7UUFDaEMsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQUN2QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUN4QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixpQkFBWSxHQUFaLFlBQVksQ0FBMEI7SUFHcEQsQ0FBQztJQUVELFFBQVE7UUFDSixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLElBQUksRUFBRSxDQUFDO1FBQ2xELE1BQU0sb0JBQW9CLEdBQUcsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsb0JBQW9CLElBQUksS0FBSyxDQUFDO1FBQ2xGLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQXdCLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7WUFDOUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQztRQUNwRCxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNILGdCQUFnQjtRQUNaLE9BQU87WUFDSCxLQUFLLEVBQUUsK0NBQStDO1lBQ3RELElBQUksRUFBRSxNQUFNO1lBQ1osT0FBTyxFQUFFLEdBQVMsRUFBRTtnQkFDaEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3hCLENBQUM7U0FFSixDQUFDO0lBQ04sQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsbUJBQW1CLENBQUMsSUFBZSxFQUFFLEtBQWE7UUFDOUMsT0FBTztZQUNILEtBQUssRUFBRSwrQ0FBK0M7WUFDdEQsSUFBSSxFQUFFLFVBQVU7WUFDaEIsT0FBTyxFQUFFLEdBQVMsRUFBRTtnQkFDaEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzQixDQUFDO1NBQ0osQ0FBQztJQUNOLENBQUM7bUhBckRRLGtCQUFrQjtvRUFBbEIsa0JBQWtCO1lDWi9CLEFBSkEscUZBQXNDLHdFQUlEOztZQUp0QiwwQ0FBcUI7WUFJckIsY0FBb0I7WUFBcEIseUNBQW9COzs7aUZEWXRCLGtCQUFrQjtjQUw5QixTQUFTOzJCQUNJLHVCQUF1Qjs7a0ZBSXhCLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEYXRhVHlwZUZvcm1hdHRlcn0gZnJvbSAnLi4vLi4vc2VydmljZXMvZm9ybWF0dGVycy9kYXRhLXR5cGUuZm9ybWF0dGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtSZWNvcmRNYW5hZ2VyfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9yZWNvcmQvcmVjb3JkLm1hbmFnZXInO1xuaW1wb3J0IHtGaWVsZExvZ2ljTWFuYWdlcn0gZnJvbSAnLi4vZmllbGQtbG9naWMvZmllbGQtbG9naWMubWFuYWdlcic7XG5pbXBvcnQge0Jhc2VMaW5lSXRlbXNDb21wb25lbnR9IGZyb20gJy4uL2Jhc2UvYmFzZS1saW5lLWl0ZW1zLmNvbXBvbmVudCc7XG5pbXBvcnQge09iamVjdE1hcH0gZnJvbSAnLi4vLi4vY29tbW9uL3R5cGVzL29iamVjdC1tYXAnO1xuaW1wb3J0IHtCdXR0b25JbnRlcmZhY2V9IGZyb20gJy4uLy4uL2NvbW1vbi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24ubW9kZWwnO1xuaW1wb3J0IHtGaWVsZE1hbmFnZXJ9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3JlY29yZC9maWVsZC9maWVsZC5tYW5hZ2VyJztcbmltcG9ydCB7RmllbGRSZWdpc3RyeX0gZnJvbSAnLi4vZmllbGQucmVnaXN0cnknO1xuaW1wb3J0IHtGaWVsZExvZ2ljRGlzcGxheU1hbmFnZXJ9IGZyb20gJy4uL2ZpZWxkLWxvZ2ljLWRpc3BsYXkvZmllbGQtbG9naWMtZGlzcGxheS5tYW5hZ2VyJztcbmltcG9ydCB7Vmlld01vZGV9IGZyb20gXCIuLi8uLi9jb21tb24vdmlld3Mvdmlldy5tb2RlbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tbGluZS1pdGVtcy1maWVsZCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2xpbmUtaXRlbXMuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW11cbn0pXG5leHBvcnQgY2xhc3MgTGluZUl0ZW1zQ29tcG9uZW50IGV4dGVuZHMgQmFzZUxpbmVJdGVtc0NvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIHR5cGVGb3JtYXR0ZXI6IERhdGFUeXBlRm9ybWF0dGVyLFxuICAgICAgICBwcm90ZWN0ZWQgcmVnaXN0cnk6IEZpZWxkUmVnaXN0cnksXG4gICAgICAgIHByb3RlY3RlZCByZWNvcmRNYW5hZ2VyOiBSZWNvcmRNYW5hZ2VyLFxuICAgICAgICBwcm90ZWN0ZWQgbG9naWM6IEZpZWxkTG9naWNNYW5hZ2VyLFxuICAgICAgICBwcm90ZWN0ZWQgZmllbGRNYW5hZ2VyOiBGaWVsZE1hbmFnZXIsXG4gICAgICAgIHByb3RlY3RlZCBsb2dpY0Rpc3BsYXk6IEZpZWxkTG9naWNEaXNwbGF5TWFuYWdlclxuICAgICkge1xuICAgICAgICBzdXBlcih0eXBlRm9ybWF0dGVyLCByZWdpc3RyeSwgcmVjb3JkTWFuYWdlciwgbG9naWMsIGZpZWxkTWFuYWdlciwgbG9naWNEaXNwbGF5KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIubmdPbkluaXQoKTtcblxuICAgICAgICB0aGlzLmZpZWxkLm1ldGFkYXRhID0gdGhpcz8uZmllbGQ/Lm1ldGFkYXRhID8/IHt9O1xuICAgICAgICBjb25zdCBlbXB0eUl0ZW1Jbml0aWFsaXplZCA9IHRoaXM/LmZpZWxkPy5tZXRhZGF0YT8uZW1wdHlJdGVtSW5pdGlhbGl6ZWQgPz8gZmFsc2U7XG4gICAgICAgIGlmIChbJ2NyZWF0ZSddLmluY2x1ZGVzKHRoaXMub3JpZ2luYWxNb2RlIGFzIFZpZXdNb2RlKSAmJiAhZW1wdHlJdGVtSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdEVtcHR5SXRlbSgpO1xuICAgICAgICAgICAgdGhpcy5maWVsZC5tZXRhZGF0YS5lbXB0eUl0ZW1Jbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgaXRlbSBidXR0b24gY29uZmlnXG4gICAgICogQHJldHVybnMge29iamVjdH0gQnV0dG9uSW50ZXJmYWNlXG4gICAgICovXG4gICAgZ2V0QWRkSXRlbUJ1dHRvbigpOiBCdXR0b25JbnRlcmZhY2Uge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAga2xhc3M6ICdidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBtLTAgYm9yZGVyLTAnLFxuICAgICAgICAgICAgaWNvbjogJ3BsdXMnLFxuICAgICAgICAgICAgb25DbGljazogKCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkRW1wdHlJdGVtKCk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGl0ZW0gYnV0dG9uIGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBpdGVtXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAgICogQHJldHVybnMge29iamVjdH0gQnV0dG9uSW50ZXJmYWNlXG4gICAgICovXG4gICAgZ2V0UmVtb3ZlSXRlbUJ1dHRvbihpdGVtOiBPYmplY3RNYXAsIGluZGV4OiBudW1iZXIpOiBCdXR0b25JbnRlcmZhY2Uge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAga2xhc3M6ICdidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBtLTAgYm9yZGVyLTAnLFxuICAgICAgICAgICAgaWNvbjogJ21pbmltaXNlJyxcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUl0ZW0oaW5kZXgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG5cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjxuZy1jb250YWluZXIgKm5nSWY9XCIhaXNDb25maWd1cmVkKClcIj5cbiAgICA8c2NybS1sYWJlbCBsYWJlbEtleT1cIkxCTF9MSU5FX0lURU1TX0ZJRUxEX0NPTkZJR1wiPjwvc2NybS1sYWJlbD5cbjwvbmctY29udGFpbmVyPlxuXG48bmctY29udGFpbmVyICpuZ0lmPVwiaXNDb25maWd1cmVkKClcIj5cblxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhZmllbGQ/LmxvYWRpbmcoKVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibGluZS1pdGVtcyBkLWZsZXggZmxleC1jb2x1bW4ge3tmaWVsZC50eXBlfX0ge3tmaWVsZC5uYW1lfX1cIj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCB7e2dldERpcmVjdGlvbigpfX0ganVzdGlmeS1jb250ZW50LXN0YXJ0IGFsaWduLWl0ZW1zLWVuZCBsaW5lLWl0ZW0gaC0xMDBcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIGZpZWxkLml0ZW1zOyBpbmRleCBhcyBpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCIhKGl0ZW0gJiYgaXRlbS5hdHRyaWJ1dGVzICYmIGl0ZW0uYXR0cmlidXRlcy5kZWxldGVkKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkLWZsZXggZmxleC1yb3cgbGluZS1pdGVtLWVudHJ5IHctMTAwIGFsaWduLWl0ZW1zLWVuZFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1ncm93LTEgbGluZS1pdGVtLWVudHJ5LWNvbXBvc2l0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGl0ZW1GaWVsZCBvZiBnZXRJdGVtRmllbGRzKGl0ZW0pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwie3tpdGVtRmllbGQudHlwZX19IHt7aXRlbUZpZWxkLm5hbWV9fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1keW5hbWljLWZpZWxkIFtjb21wb25lbnRUeXBlXT1cImdldENvbXBvbmVudFR5cGUoaXRlbUZpZWxkLnR5cGUsIGl0ZW1GaWVsZC5kZWZpbml0aW9uKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ZpZWxkXT1cIml0ZW1GaWVsZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2tsYXNzXT1cImtsYXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbW9kZV09XCJtb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbb3JpZ2luYWxNb2RlXT1cIm9yaWdpbmFsTW9kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3JlY29yZF09XCJpdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcGFyZW50XT1cInBhcmVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3R5cGVdPVwiaXRlbUZpZWxkLnR5cGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zY3JtLWR5bmFtaWMtZmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpbmUtaXRlbS1lbnRyeS1idXR0b25zIG1iLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1idXR0b24gKm5nSWY9XCJpc0VkaXRhYmxlKClcIiBbY29uZmlnXT1cImdldFJlbW92ZUl0ZW1CdXR0b24oaXRlbSwgaSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Njcm0tYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpbmUtaXRlbS1idXR0b25zIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kIG10LTFcIj5cbiAgICAgICAgICAgICAgICA8c2NybS1idXR0b24gKm5nSWY9XCJpc0VkaXRhYmxlKClcIiBbY29uZmlnXT1cImdldEFkZEl0ZW1CdXR0b24oKVwiPlxuICAgICAgICAgICAgICAgIDwvc2NybS1idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiKG1vZGUgPT09ICdlZGl0JyB8fCBtb2RlID09PSAnZmlsdGVyJykgJiYgZmllbGQuaXRlbUZvcm1BcnJheSAmJiBmaWVsZC5pdGVtRm9ybUFycmF5LmVycm9yc1wiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZpZWxkLml0ZW1Gb3JtQXJyYXkuaW52YWxpZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZmllbGQuaXRlbUZvcm1BcnJheS5lcnJvcnMgfCBrZXl2YWx1ZVwiIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzY3JtLWR5bmFtaWMtbGFiZWwgW2NvbnRleHRdPVwiZ2V0TWVzc2FnZUNvbnRleHQoaXRlbS52YWx1ZSwgcmVjb3JkKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ZpZWxkc109XCJ7ZmllbGQ6IGZpZWxkfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xhYmVsS2V5XT1cImdldE1lc3NhZ2VMYWJlbEtleShpdGVtLnZhbHVlKVwiPlxuICAgICAgICAgICAgICAgICAgICA8L3Njcm0tZHluYW1pYy1sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLWNvbnRhaW5lcj5cblxuXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZpZWxkPy5sb2FkaW5nKClcIj5cbiAgICAgICAgPGRpdiBjbGFzcz0gXCJkeW5hbWljLWZpZWxkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1ncm93LTEgdGV4dC1icmVhayByb3VuZGVkIGJveC1sb2FkaW5nIHNrZWxldG9uLWZpZWxkLWNvbnRlbnRcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbjwvbmctY29udGFpbmVyPlxuIl19