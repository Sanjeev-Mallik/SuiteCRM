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
import { Component, Input } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { BaseFieldGridComponent } from '../field-grid/base-field-grid.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/layout";
import * as i2 from "@angular/common";
import * as i3 from "../../fields/field.component";
import * as i4 from "../image/image.component";
import * as i5 from "../action-group-menu/action-group-menu.component";
const _c0 = [[["", "field-grid-actions", ""]], [["", "field-grid-special", ""]]];
const _c1 = ["[field-grid-actions]", "[field-grid-special]"];
const _c2 = () => ["edit", "create"];
const _c3 = a0 => ({ "align-items-center": a0 });
function FieldLayoutComponent_div_1_div_1_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 11);
    i0.ɵɵtext(2, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
function FieldLayoutComponent_div_1_div_1_ng_container_1_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵelement(2, "scrm-action-group-menu", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    let tmp_9_0;
    let tmp_10_0;
    const col_r1 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("config", col_r1.adaptor)("buttonGroupClass", (tmp_9_0 = col_r1.fieldActions == null ? null : col_r1.fieldActions.containerKlass) !== null && tmp_9_0 !== undefined ? tmp_9_0 : "")("klass", (tmp_10_0 = col_r1.fieldActions == null ? null : col_r1.fieldActions.klass) !== null && tmp_10_0 !== undefined ? tmp_10_0 : "");
} }
function FieldLayoutComponent_div_1_div_1_ng_container_1_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 13);
    i0.ɵɵlistener("click", function FieldLayoutComponent_div_1_div_1_ng_container_1_button_13_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r2.dataSource.getEditAction()); });
    i0.ɵɵelement(1, "scrm-image", 14);
    i0.ɵɵelementEnd();
} }
function FieldLayoutComponent_div_1_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 6)(2, "div")(3, "strong");
    i0.ɵɵtemplate(4, FieldLayoutComponent_div_1_div_1_ng_container_1_ng_container_4_Template, 3, 0, "ng-container", 4);
    i0.ɵɵelementStart(5, "label", 7);
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "uppercase");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "div", 7)(9, "div", 8);
    i0.ɵɵelement(10, "scrm-field", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, FieldLayoutComponent_div_1_div_1_ng_container_1_ng_container_11_Template, 3, 3, "ng-container", 4);
    i0.ɵɵelementStart(12, "div");
    i0.ɵɵtemplate(13, FieldLayoutComponent_div_1_div_1_ng_container_1_button_13_Template, 2, 0, "button", 10);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    let tmp_18_0;
    const col_r1 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("", col_r1 == null ? null : col_r1.headerColumnClass, " field-layout-field-label-wrapper col-form-label label-container");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", (col_r1.field == null ? null : col_r1.field.required()) && i0.ɵɵpureFunction0(19, _c2).includes(ctx_r2.config.mode));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r2.labelClass);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(7, 17, col_r1.field.label));
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("", col_r1 == null ? null : col_r1.valueColumnClass, " d-flex flex-grow-1 field-layout-field-wrapper");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(20, _c3, (col_r1 == null ? null : col_r1.fieldActions) && (col_r1 == null ? null : col_r1.fieldActions == null ? null : col_r1.fieldActions.position) === "inline"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("type", col_r1.field.type)("mode", ctx_r2.config.mode)("klass", ctx_r2.inputClass)("field", col_r1.field)("record", ctx_r2.record);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (col_r1 == null ? null : col_r1.fieldActions) && ((tmp_18_0 = col_r1 == null ? null : col_r1.fieldActions == null ? null : col_r1.fieldActions.position) !== null && tmp_18_0 !== undefined ? tmp_18_0 : "inline") === "inline");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", col_r1.field.definition.inline_edit !== false && !col_r1.field.readonly && !col_r1.field.definition.readonly && ctx_r2.dataSource.inlineEdit && ctx_r2.config.mode === "detail");
} }
function FieldLayoutComponent_div_1_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-action-group-menu", 12);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    let tmp_8_0;
    let tmp_9_0;
    const col_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("config", col_r1.adaptor)("buttonGroupClass", (tmp_8_0 = col_r1.fieldActions == null ? null : col_r1.fieldActions.containerKlass) !== null && tmp_8_0 !== undefined ? tmp_8_0 : "")("klass", (tmp_9_0 = col_r1.fieldActions == null ? null : col_r1.fieldActions.klass) !== null && tmp_9_0 !== undefined ? tmp_9_0 : "");
} }
function FieldLayoutComponent_div_1_div_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵprojection(1);
    i0.ɵɵelementContainerEnd();
} }
function FieldLayoutComponent_div_1_div_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵprojection(1, 1);
    i0.ɵɵelementContainerEnd();
} }
function FieldLayoutComponent_div_1_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 15);
} }
function FieldLayoutComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtemplate(1, FieldLayoutComponent_div_1_div_1_ng_container_1_Template, 14, 22, "ng-container", 4)(2, FieldLayoutComponent_div_1_div_1_ng_container_2_Template, 2, 3, "ng-container", 4)(3, FieldLayoutComponent_div_1_div_1_ng_container_3_Template, 2, 0, "ng-container", 4)(4, FieldLayoutComponent_div_1_div_1_ng_container_4_Template, 2, 0, "ng-container", 4)(5, FieldLayoutComponent_div_1_div_1_div_5_Template, 1, 0, "div", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_9_0;
    const col_r1 = ctx.$implicit;
    const colNumber_r4 = ctx.index;
    const ctx_r4 = i0.ɵɵnextContext();
    const row_r6 = ctx_r4.$implicit;
    const i_r7 = ctx_r4.index;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("field-column-bordered", row_r6.cols.length > 1 && colNumber_r4 < row_r6.cols.length - 1);
    i0.ɵɵproperty("ngClass", ctx_r2.colClass);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", col_r1.field && col_r1.field.display() !== "none");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (col_r1 == null ? null : col_r1.fieldActions) && ((tmp_9_0 = col_r1 == null ? null : col_r1.fieldActions == null ? null : col_r1.fieldActions.position) !== null && tmp_9_0 !== undefined ? tmp_9_0 : "inline") === "vertical");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", col_r1.actionSlot);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", col_r1.specialSlot);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", col_r1.field && (col_r1.field == null ? null : col_r1.field.display()) !== "none" && i_r7 < ctx_r2.fieldGrid.length - 1);
} }
function FieldLayoutComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, FieldLayoutComponent_div_1_div_1_Template, 6, 8, "div", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r2.rowClass);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", row_r6.cols);
} }
export class FieldLayoutComponent extends BaseFieldGridComponent {
    constructor(breakpointObserver) {
        super(breakpointObserver);
        this.breakpointObserver = breakpointObserver;
        this.baseColClass = {
            col: true,
            'form-group': true,
            'm-1': false,
            'm-0': true,
            'pl-3': true,
            'pb-2': true,
            'pr-3': true,
            'd-flex': true,
            'flex-column': true,
            'justify-content-between': true
        };
        this.baseRowClass = {
            'form-row': true,
            'align-items-stretch': true
        };
    }
    ngOnInit() {
        this.subscriptions.push(this.dataSource.getConfig().subscribe(config => {
            this.config = { ...config };
        }));
        this.subscriptions.push(this.dataSource.getLayout().subscribe(layout => {
            this.layout = { ...layout };
        }));
        this.subscriptions.push(this.dataSource.getFields().subscribe(fields => {
            this.fields = { ...fields };
        }));
        this.subscriptions.push(this.dataSource.getRecord().subscribe(record => {
            this.record = { ...record };
        }));
        super.ngOnInit();
    }
    buildGrid() {
        const grid = [];
        if (!this.fields || Object.keys(this.fields).length === 0) {
            this.fieldGrid = [];
            return;
        }
        this.layout.rows.forEach(layoutRow => {
            let row = {
                cols: []
            };
            layoutRow.cols.forEach((layoutCol, colIndex) => {
                const fieldName = layoutCol.name;
                const field = this.fields[fieldName] || null;
                const fieldActions = layoutCol.fieldActions || null;
                const adaptor = layoutCol.adaptor ?? null;
                const useFullColumn = field?.useFullColumn ?? field?.definition?.useFullColumn ?? [];
                let headerColumnClass = 'col-sm-12 col-md-12 col-lg-3';
                let valueColumnClass = 'col-sm-12 col-md-12 col-lg-9';
                const headerColSizes = { 'xs': '12', 'sm': '12', 'md': '12', 'lg': '3', 'xl': '3' };
                const valuesColSizes = { 'xs': '12', 'sm': '12', 'md': '12', 'lg': '9', 'xl': '9' };
                const useFullColumnsMaps = useFullColumn.reduce((ac, a) => ({ ...ac, [a]: true }), {});
                if (useFullColumn.length) {
                    headerColumnClass = Object.keys(headerColSizes).map(size => {
                        if (useFullColumnsMaps[size]) {
                            return `col-${size}-12`;
                        }
                        return `col-${size}-${headerColSizes[size]}`;
                    }).join(' ');
                    valueColumnClass = Object.keys(valuesColSizes).map(size => {
                        if (useFullColumnsMaps[size]) {
                            return `col-${size}-12`;
                        }
                        return `col-${size}-${valuesColSizes[size]}`;
                    }).join(' ');
                }
                if (!field) {
                    row.cols.push({});
                    return;
                }
                row.cols.push({
                    field,
                    fieldActions,
                    adaptor,
                    valueColumnClass,
                    headerColumnClass
                });
                if (this.colNumber === 1 && colIndex < layoutRow.cols.length - 1) {
                    grid.push(row);
                    row = {
                        cols: []
                    };
                }
            });
            if (row.cols.length < this.colNumber) {
                this.fillRow(row);
            }
            grid.push(row);
        });
        this.addSpecialSlots(grid);
        this.fieldGrid = grid;
    }
    get colNumber() {
        const size = this.sizeMap[this.currentSize];
        if (size === 1) {
            return 1;
        }
        return this.config.maxColumns;
    }
    static { this.ɵfac = function FieldLayoutComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FieldLayoutComponent)(i0.ɵɵdirectiveInject(i1.BreakpointObserver)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FieldLayoutComponent, selectors: [["scrm-field-layout"]], inputs: { dataSource: "dataSource" }, features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c1, decls: 2, vars: 4, consts: [["class", "field-layout-row", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "field-layout-row", 3, "ngClass"], ["class", "field-layout-col", 3, "field-column-bordered", "ngClass", 4, "ngFor", "ngForOf"], [1, "field-layout-col", 3, "ngClass"], [4, "ngIf"], ["class", "field-separation mt-2", 4, "ngIf"], [1, "field-layout-field-group-wrapper", "form-group", "row"], [3, "ngClass"], [1, "flex-grow-1", "text-break", "field-layout-field-value-wrapper"], [3, "type", "mode", "klass", "field", "record"], ["type", "button", "class", "record-action-button", 3, "click", 4, "ngIf"], [1, "required"], [3, "config", "buttonGroupClass", "klass"], ["type", "button", 1, "record-action-button", 3, "click"], ["image", "pencil", 1, "sicon"], [1, "field-separation", "mt-2"]], template: function FieldLayoutComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵelementStart(0, "form");
            i0.ɵɵtemplate(1, FieldLayoutComponent_div_1_Template, 2, 2, "div", 0);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassMapInterpolate1("field-layout ", ctx.config.mode, "");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.fieldGrid);
        } }, dependencies: [i2.NgClass, i2.NgForOf, i2.NgIf, i3.FieldComponent, i4.ImageComponent, i5.ActionGroupMenuComponent, i2.UpperCasePipe], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FieldLayoutComponent, [{
        type: Component,
        args: [{ selector: 'scrm-field-layout', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<form class=\"field-layout {{config.mode}}\">\n    <div [ngClass]=\"rowClass\" class=\"field-layout-row\" *ngFor=\"let row of fieldGrid; index as i\">\n\n        <div *ngFor=\"let col of row.cols; index as colNumber\"\n             [class.field-column-bordered]=\"row.cols.length > 1 && colNumber < row.cols.length - 1\"\n             [ngClass]=\"colClass\"\n             class=\"field-layout-col\">\n\n            <ng-container *ngIf=\"col.field && col.field.display() !== 'none'\">\n                <div class=\"field-layout-field-group-wrapper form-group row\">\n                    <div class=\"{{col?.headerColumnClass}} field-layout-field-label-wrapper col-form-label label-container\">\n                        <strong>\n                            <ng-container\n                                *ngIf=\"col.field?.required()  && (['edit', 'create'].includes(config.mode))\">\n                                <span class=\"required\">*</span>\n                            </ng-container>\n                            <label [ngClass]=\"labelClass\">{{col.field.label | uppercase}}</label>\n                        </strong>\n                    </div>\n                    <div class=\"{{col?.valueColumnClass}} d-flex flex-grow-1 field-layout-field-wrapper\"\n                        [ngClass]=\"{ 'align-items-center': (col?.fieldActions && col?.fieldActions?.position === 'inline') }\">\n                        <div class=\"flex-grow-1 text-break field-layout-field-value-wrapper\">\n                            <scrm-field [type]=\"col.field.type\"\n                                        [mode]=\"config.mode\"\n                                        [klass]=\"inputClass\"\n                                        [field]=\"col.field\"\n                                        [record]=\"record\">\n                            </scrm-field>\n                        </div>\n\n                        <ng-container *ngIf=\"col?.fieldActions && ((col?.fieldActions?.position ?? 'inline') === 'inline')\">\n                            <div>\n                                <scrm-action-group-menu\n                                    [config]=\"col.adaptor\"\n                                    [buttonGroupClass] = \"col.fieldActions?.containerKlass ?? ''\"\n                                    [klass] = \"col.fieldActions?.klass ?? ''\"\n                                >\n                                </scrm-action-group-menu>\n                            </div>\n                        </ng-container>\n\n                        <div>\n                            <button type=\"button\" class=\"record-action-button\"\n                                    (click)=\"this.dataSource.getEditAction()\"\n                                    *ngIf=\"col.field.definition.inline_edit !== false && !col.field.readonly && !col.field.definition.readonly && this.dataSource.inlineEdit && config.mode === 'detail'\">\n                                <scrm-image class=\"sicon\" image=\"pencil\"></scrm-image>\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </ng-container>\n\n            <ng-container *ngIf=\"col?.fieldActions && ((col?.fieldActions?.position ?? 'inline' ) === 'vertical')\">\n                <scrm-action-group-menu\n                    [config]=\"col.adaptor\"\n                    [buttonGroupClass]=\"col.fieldActions?.containerKlass ?? ''\"\n                    [klass] = \"col.fieldActions?.klass ?? ''\"\n                >\n                </scrm-action-group-menu>\n            </ng-container>\n\n            <ng-container *ngIf=\"col.actionSlot\">\n                <ng-content select=\"[field-grid-actions]\"></ng-content>\n            </ng-container>\n\n            <ng-container *ngIf=\"col.specialSlot\">\n                <ng-content select=\"[field-grid-special]\"></ng-content>\n            </ng-container>\n\n            <div *ngIf=\"col.field && col.field?.display() !== 'none' && i < fieldGrid.length - 1\"\n                 class=\"field-separation mt-2\">\n            </div>\n        </div>\n    </div>\n</form>\n" }]
    }], () => [{ type: i1.BreakpointObserver }], { dataSource: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FieldLayoutComponent, { className: "FieldLayoutComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtbGF5b3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb21wb25lbnRzL2ZpZWxkLWxheW91dC9maWVsZC1sYXlvdXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvZmllbGQtbGF5b3V0L2ZpZWxkLWxheW91dC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFJL0MsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFFdkQsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0seUNBQXlDLENBQUM7Ozs7Ozs7Ozs7OztJQ09uRCw2QkFDaUY7SUFDN0UsZ0NBQXVCO0lBQUEsaUJBQUM7SUFBQSxpQkFBTzs7OztJQWdCdkMsNkJBQW9HO0lBQ2hHLDJCQUFLO0lBQ0QsNkNBS3lCO0lBQzdCLGlCQUFNOzs7Ozs7SUFMRSxlQUFzQjtJQUV0QixBQURBLEFBREEsdUNBQXNCLDBKQUN1Qyx5SUFDcEI7Ozs7SUFPakQsa0NBRThLO0lBRHRLLGdOQUFTLGlDQUErQixLQUFDO0lBRTdDLGlDQUFzRDtJQUMxRCxpQkFBUzs7O0lBdEN6Qiw2QkFBa0U7SUFHdEQsQUFESixBQURKLDhCQUE2RCxVQUMrQyxhQUM1RjtJQUNKLGtIQUNpRjtJQUdqRixnQ0FBOEI7SUFBQSxZQUErQjs7SUFFckUsQUFESSxBQURpRSxpQkFBUSxFQUNoRSxFQUNQO0lBR0YsQUFGSiw4QkFDMEcsYUFDakM7SUFDakUsaUNBS2E7SUFDakIsaUJBQU07SUFFTixvSEFBb0c7SUFXcEcsNEJBQUs7SUFDRCx5R0FFOEs7SUFLMUws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QUFLLENBQUMsRUFBRSxDQUFDO1lBQ2IsT0FBTyxDQUFDLENBQUM7UUFDYixDQUFDO1FBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztJQUNsQyxDQUFDO3FIQXRJUSxvQkFBb0I7b0VBQXBCLG9CQUFvQjs7WUNaakMsNEJBQTJDO1lBQ3ZDLHFFQUE2RjtZQXlFakcsaUJBQU87O1lBMUVELCtEQUFvQztZQUM2QixjQUFjO1lBQWQsdUNBQWM7OztpRkRXeEUsb0JBQW9CO2NBSmhDLFNBQVM7MkJBQ0ksbUJBQW1CO21EQUtwQixVQUFVO2tCQUFsQixLQUFLOztrRkFGRyxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0ZpZWxkTWFwfSBmcm9tICcuLi8uLi9jb21tb24vcmVjb3JkL2ZpZWxkLm1vZGVsJztcbmltcG9ydCB7UGFuZWx9IGZyb20gJy4uLy4uL2NvbW1vbi9tZXRhZGF0YS9tZXRhZGF0YS5tb2RlbCc7XG5pbXBvcnQge1JlY29yZH0gZnJvbSAnLi4vLi4vY29tbW9uL3JlY29yZC9yZWNvcmQubW9kZWwnO1xuaW1wb3J0IHtCcmVha3BvaW50T2JzZXJ2ZXJ9IGZyb20gJ0Bhbmd1bGFyL2Nkay9sYXlvdXQnO1xuaW1wb3J0IHtGaWVsZEdyaWRDb2x1bW4sIEZpZWxkR3JpZFJvd30gZnJvbSAnLi4vZmllbGQtZ3JpZC9maWVsZC1ncmlkLm1vZGVsJztcbmltcG9ydCB7QmFzZUZpZWxkR3JpZENvbXBvbmVudH0gZnJvbSAnLi4vZmllbGQtZ3JpZC9iYXNlLWZpZWxkLWdyaWQuY29tcG9uZW50JztcbmltcG9ydCB7RmllbGRMYXlvdXRDb25maWcsIEZpZWxkTGF5b3V0RGF0YVNvdXJjZX0gZnJvbSAnLi9maWVsZC1sYXlvdXQubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tZmllbGQtbGF5b3V0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZmllbGQtbGF5b3V0LmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBGaWVsZExheW91dENvbXBvbmVudCBleHRlbmRzIEJhc2VGaWVsZEdyaWRDb21wb25lbnQge1xuXG4gICAgQElucHV0KCkgZGF0YVNvdXJjZTogRmllbGRMYXlvdXREYXRhU291cmNlO1xuICAgIGNvbmZpZzogRmllbGRMYXlvdXRDb25maWc7XG4gICAgbGF5b3V0OiBQYW5lbDtcbiAgICBmaWVsZHM6IEZpZWxkTWFwO1xuICAgIHJlY29yZDogUmVjb3JkO1xuXG4gICAgYmFzZUNvbENsYXNzID0ge1xuICAgICAgICBjb2w6IHRydWUsXG4gICAgICAgICdmb3JtLWdyb3VwJzogdHJ1ZSxcbiAgICAgICAgJ20tMSc6IGZhbHNlLFxuICAgICAgICAnbS0wJzogdHJ1ZSxcbiAgICAgICAgJ3BsLTMnOiB0cnVlLFxuICAgICAgICAncGItMic6IHRydWUsXG4gICAgICAgICdwci0zJzogdHJ1ZSxcbiAgICAgICAgJ2QtZmxleCc6IHRydWUsXG4gICAgICAgICdmbGV4LWNvbHVtbic6IHRydWUsXG4gICAgICAgICdqdXN0aWZ5LWNvbnRlbnQtYmV0d2Vlbic6IHRydWVcbiAgICB9IGFzIHsgW2tleTpzdHJpbmddOiBib29sZWFuIH07XG5cbiAgICBiYXNlUm93Q2xhc3MgPSB7XG4gICAgICAgICdmb3JtLXJvdyc6IHRydWUsXG4gICAgICAgICdhbGlnbi1pdGVtcy1zdHJldGNoJzogdHJ1ZVxuICAgIH0gYXMgeyBba2V5OnN0cmluZ106IGJvb2xlYW4gfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBicmVha3BvaW50T2JzZXJ2ZXI6IEJyZWFrcG9pbnRPYnNlcnZlcikge1xuICAgICAgICBzdXBlcihicmVha3BvaW50T2JzZXJ2ZXIpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMuZGF0YVNvdXJjZS5nZXRDb25maWcoKS5zdWJzY3JpYmUoY29uZmlnID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnID0gey4uLmNvbmZpZ307XG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy5kYXRhU291cmNlLmdldExheW91dCgpLnN1YnNjcmliZShsYXlvdXQgPT4ge1xuICAgICAgICAgICAgdGhpcy5sYXlvdXQgPSB7Li4ubGF5b3V0fTtcbiAgICAgICAgfSkpO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLmRhdGFTb3VyY2UuZ2V0RmllbGRzKCkuc3Vic2NyaWJlKGZpZWxkcyA9PiB7XG4gICAgICAgICAgICB0aGlzLmZpZWxkcyA9IHsuLi5maWVsZHN9O1xuICAgICAgICB9KSk7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMuZGF0YVNvdXJjZS5nZXRSZWNvcmQoKS5zdWJzY3JpYmUocmVjb3JkID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVjb3JkID0gey4uLnJlY29yZH07XG4gICAgICAgIH0pKTtcblxuICAgICAgICBzdXBlci5uZ09uSW5pdCgpO1xuICAgIH1cblxuICAgIGJ1aWxkR3JpZCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZ3JpZDogRmllbGRHcmlkUm93W10gPSBbXTtcblxuICAgICAgICBpZiAoIXRoaXMuZmllbGRzIHx8IE9iamVjdC5rZXlzKHRoaXMuZmllbGRzKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZmllbGRHcmlkID0gW107XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxheW91dC5yb3dzLmZvckVhY2gobGF5b3V0Um93ID0+IHtcbiAgICAgICAgICAgIGxldCByb3cgPSB7XG4gICAgICAgICAgICAgICAgY29sczogW11cbiAgICAgICAgICAgIH0gYXMgRmllbGRHcmlkUm93O1xuXG4gICAgICAgICAgICBsYXlvdXRSb3cuY29scy5mb3JFYWNoKChsYXlvdXRDb2wsIGNvbEluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmllbGROYW1lID0gbGF5b3V0Q29sLm5hbWU7XG4gICAgICAgICAgICAgICAgY29uc3QgZmllbGQgPSB0aGlzLmZpZWxkc1tmaWVsZE5hbWVdIHx8IG51bGw7XG4gICAgICAgICAgICAgICAgY29uc3QgZmllbGRBY3Rpb25zID0gbGF5b3V0Q29sLmZpZWxkQWN0aW9ucyB8fCBudWxsO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFkYXB0b3IgPSBsYXlvdXRDb2wuYWRhcHRvciA/PyBudWxsO1xuICAgICAgICAgICAgICAgIGNvbnN0IHVzZUZ1bGxDb2x1bW4gPSBmaWVsZD8udXNlRnVsbENvbHVtbiA/PyBmaWVsZD8uZGVmaW5pdGlvbj8udXNlRnVsbENvbHVtbiA/PyBbXTtcblxuICAgICAgICAgICAgICAgIGxldCBoZWFkZXJDb2x1bW5DbGFzcyA9ICdjb2wtc20tMTIgY29sLW1kLTEyIGNvbC1sZy0zJztcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWVDb2x1bW5DbGFzcyA9ICdjb2wtc20tMTIgY29sLW1kLTEyIGNvbC1sZy05JztcblxuICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRlckNvbFNpemVzID0geyd4cyc6ICcxMicsICdzbSc6ICcxMicsICdtZCc6ICcxMicsICdsZyc6ICczJywgJ3hsJzogJzMnfTtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZXNDb2xTaXplcyA9IHsneHMnOiAnMTInLCAnc20nOiAnMTInLCAnbWQnOiAnMTInLCAnbGcnOiAnOScsICd4bCc6ICc5J307XG4gICAgICAgICAgICAgICAgY29uc3QgdXNlRnVsbENvbHVtbnNNYXBzID0gdXNlRnVsbENvbHVtbi5yZWR1Y2UoKGFjLGEpID0+ICh7Li4uYWMsW2FdOnRydWV9KSx7fSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodXNlRnVsbENvbHVtbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyQ29sdW1uQ2xhc3MgPSBPYmplY3Qua2V5cyhoZWFkZXJDb2xTaXplcykubWFwKHNpemUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVzZUZ1bGxDb2x1bW5zTWFwc1tzaXplXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgY29sLSR7c2l6ZX0tMTJgO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYGNvbC0ke3NpemV9LSR7aGVhZGVyQ29sU2l6ZXNbc2l6ZV19YFxuICAgICAgICAgICAgICAgICAgICB9KS5qb2luKCcgJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFsdWVDb2x1bW5DbGFzcyA9IE9iamVjdC5rZXlzKHZhbHVlc0NvbFNpemVzKS5tYXAoc2l6ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodXNlRnVsbENvbHVtbnNNYXBzW3NpemVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGBjb2wtJHtzaXplfS0xMmA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgY29sLSR7c2l6ZX0tJHt2YWx1ZXNDb2xTaXplc1tzaXplXX1gXG4gICAgICAgICAgICAgICAgICAgIH0pLmpvaW4oJyAnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIWZpZWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdy5jb2xzLnB1c2goe30gYXMgRmllbGRHcmlkQ29sdW1uKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJvdy5jb2xzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBmaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgZmllbGRBY3Rpb25zLFxuICAgICAgICAgICAgICAgICAgICBhZGFwdG9yLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZUNvbHVtbkNsYXNzLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJDb2x1bW5DbGFzc1xuICAgICAgICAgICAgICAgIH0gYXMgRmllbGRHcmlkQ29sdW1uKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbE51bWJlciA9PT0gMSAmJiBjb2xJbmRleCA8IGxheW91dFJvdy5jb2xzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC5wdXNoKHJvdyk7XG5cbiAgICAgICAgICAgICAgICAgICAgcm93ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sczogW11cbiAgICAgICAgICAgICAgICAgICAgfSBhcyBGaWVsZEdyaWRSb3c7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChyb3cuY29scy5sZW5ndGggPCB0aGlzLmNvbE51bWJlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsbFJvdyhyb3cpO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIGdyaWQucHVzaChyb3cpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFkZFNwZWNpYWxTbG90cyhncmlkKTtcblxuICAgICAgICB0aGlzLmZpZWxkR3JpZCA9IGdyaWQ7XG4gICAgfVxuXG4gICAgZ2V0IGNvbE51bWJlcigpOiBudW1iZXIge1xuICAgICAgICBjb25zdCBzaXplID0gdGhpcy5zaXplTWFwW3RoaXMuY3VycmVudFNpemVdO1xuICAgICAgICBpZiAoc2l6ZSA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLm1heENvbHVtbnM7XG4gICAgfVxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPGZvcm0gY2xhc3M9XCJmaWVsZC1sYXlvdXQge3tjb25maWcubW9kZX19XCI+XG4gICAgPGRpdiBbbmdDbGFzc109XCJyb3dDbGFzc1wiIGNsYXNzPVwiZmllbGQtbGF5b3V0LXJvd1wiICpuZ0Zvcj1cImxldCByb3cgb2YgZmllbGRHcmlkOyBpbmRleCBhcyBpXCI+XG5cbiAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgY29sIG9mIHJvdy5jb2xzOyBpbmRleCBhcyBjb2xOdW1iZXJcIlxuICAgICAgICAgICAgIFtjbGFzcy5maWVsZC1jb2x1bW4tYm9yZGVyZWRdPVwicm93LmNvbHMubGVuZ3RoID4gMSAmJiBjb2xOdW1iZXIgPCByb3cuY29scy5sZW5ndGggLSAxXCJcbiAgICAgICAgICAgICBbbmdDbGFzc109XCJjb2xDbGFzc1wiXG4gICAgICAgICAgICAgY2xhc3M9XCJmaWVsZC1sYXlvdXQtY29sXCI+XG5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb2wuZmllbGQgJiYgY29sLmZpZWxkLmRpc3BsYXkoKSAhPT0gJ25vbmUnXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkLWxheW91dC1maWVsZC1ncm91cC13cmFwcGVyIGZvcm0tZ3JvdXAgcm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ7e2NvbD8uaGVhZGVyQ29sdW1uQ2xhc3N9fSBmaWVsZC1sYXlvdXQtZmllbGQtbGFiZWwtd3JhcHBlciBjb2wtZm9ybS1sYWJlbCBsYWJlbC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImNvbC5maWVsZD8ucmVxdWlyZWQoKSAgJiYgKFsnZWRpdCcsICdjcmVhdGUnXS5pbmNsdWRlcyhjb25maWcubW9kZSkpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmVxdWlyZWRcIj4qPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBbbmdDbGFzc109XCJsYWJlbENsYXNzXCI+e3tjb2wuZmllbGQubGFiZWwgfCB1cHBlcmNhc2V9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ7e2NvbD8udmFsdWVDb2x1bW5DbGFzc319IGQtZmxleCBmbGV4LWdyb3ctMSBmaWVsZC1sYXlvdXQtZmllbGQtd3JhcHBlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7ICdhbGlnbi1pdGVtcy1jZW50ZXInOiAoY29sPy5maWVsZEFjdGlvbnMgJiYgY29sPy5maWVsZEFjdGlvbnM/LnBvc2l0aW9uID09PSAnaW5saW5lJykgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtZ3Jvdy0xIHRleHQtYnJlYWsgZmllbGQtbGF5b3V0LWZpZWxkLXZhbHVlLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1maWVsZCBbdHlwZV09XCJjb2wuZmllbGQudHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW21vZGVdPVwiY29uZmlnLm1vZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtrbGFzc109XCJpbnB1dENsYXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZmllbGRdPVwiY29sLmZpZWxkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcmVjb3JkXT1cInJlY29yZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2NybS1maWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29sPy5maWVsZEFjdGlvbnMgJiYgKChjb2w/LmZpZWxkQWN0aW9ucz8ucG9zaXRpb24gPz8gJ2lubGluZScpID09PSAnaW5saW5lJylcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1hY3Rpb24tZ3JvdXAtbWVudVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbmZpZ109XCJjb2wuYWRhcHRvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYnV0dG9uR3JvdXBDbGFzc10gPSBcImNvbC5maWVsZEFjdGlvbnM/LmNvbnRhaW5lcktsYXNzID8/ICcnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtrbGFzc10gPSBcImNvbC5maWVsZEFjdGlvbnM/LmtsYXNzID8/ICcnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Njcm0tYWN0aW9uLWdyb3VwLW1lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInJlY29yZC1hY3Rpb24tYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJ0aGlzLmRhdGFTb3VyY2UuZ2V0RWRpdEFjdGlvbigpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiY29sLmZpZWxkLmRlZmluaXRpb24uaW5saW5lX2VkaXQgIT09IGZhbHNlICYmICFjb2wuZmllbGQucmVhZG9ubHkgJiYgIWNvbC5maWVsZC5kZWZpbml0aW9uLnJlYWRvbmx5ICYmIHRoaXMuZGF0YVNvdXJjZS5pbmxpbmVFZGl0ICYmIGNvbmZpZy5tb2RlID09PSAnZGV0YWlsJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1pbWFnZSBjbGFzcz1cInNpY29uXCIgaW1hZ2U9XCJwZW5jaWxcIj48L3Njcm0taW1hZ2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbD8uZmllbGRBY3Rpb25zICYmICgoY29sPy5maWVsZEFjdGlvbnM/LnBvc2l0aW9uID8/ICdpbmxpbmUnICkgPT09ICd2ZXJ0aWNhbCcpXCI+XG4gICAgICAgICAgICAgICAgPHNjcm0tYWN0aW9uLWdyb3VwLW1lbnVcbiAgICAgICAgICAgICAgICAgICAgW2NvbmZpZ109XCJjb2wuYWRhcHRvclwiXG4gICAgICAgICAgICAgICAgICAgIFtidXR0b25Hcm91cENsYXNzXT1cImNvbC5maWVsZEFjdGlvbnM/LmNvbnRhaW5lcktsYXNzID8/ICcnXCJcbiAgICAgICAgICAgICAgICAgICAgW2tsYXNzXSA9IFwiY29sLmZpZWxkQWN0aW9ucz8ua2xhc3MgPz8gJydcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8L3Njcm0tYWN0aW9uLWdyb3VwLW1lbnU+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbC5hY3Rpb25TbG90XCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2ZpZWxkLWdyaWQtYWN0aW9uc11cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbC5zcGVjaWFsU2xvdFwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltmaWVsZC1ncmlkLXNwZWNpYWxdXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJjb2wuZmllbGQgJiYgY29sLmZpZWxkPy5kaXNwbGF5KCkgIT09ICdub25lJyAmJiBpIDwgZmllbGRHcmlkLmxlbmd0aCAtIDFcIlxuICAgICAgICAgICAgICAgICBjbGFzcz1cImZpZWxkLXNlcGFyYXRpb24gbXQtMlwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9mb3JtPlxuIl19