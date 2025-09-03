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
import { isTrue } from '../../common/utils/value-utils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../fields/field.component";
import * as i3 from "../label/label.component";
import * as i4 from "../action-group-menu/action-group-menu.component";
import * as i5 from "../dynamic-label/dynamic-label.component";
function RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_ng_container_2_ng_container_1_ng_container_1_ng_container_1_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r1 = i0.ɵɵnextContext(3).ngIf;
    const col_r2 = i0.ɵɵnextContext(4).$implicit;
    const ctx_r2 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngClass", ctx_r2.getLabelClass(col_r2));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", field_r1.label, " ");
} }
function RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_ng_container_2_ng_container_1_ng_container_1_ng_container_1_scrm_label_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-label", 9);
} if (rf & 2) {
    const field_r1 = i0.ɵɵnextContext(3).ngIf;
    const col_r2 = i0.ɵɵnextContext(4).$implicit;
    const ctx_r2 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("labelKey", field_r1.labelKey)("ngClass", ctx_r2.getLabelClass(col_r2));
} }
function RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_ng_container_2_ng_container_1_ng_container_1_ng_container_1_scrm_dynamic_label_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-dynamic-label", 10);
} if (rf & 2) {
    const field_r1 = i0.ɵɵnextContext(3).ngIf;
    const ctx_r2 = i0.ɵɵnextContext(8);
    i0.ɵɵproperty("labelKey", field_r1.dynamicLabelKey)("fields", ctx_r2.record.fields);
} }
function RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_ng_container_2_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_ng_container_2_ng_container_1_ng_container_1_ng_container_1_label_2_Template, 2, 2, "label", 6)(3, RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_ng_container_2_ng_container_1_ng_container_1_ng_container_1_scrm_label_3_Template, 1, 2, "scrm-label", 7)(4, RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_ng_container_2_ng_container_1_ng_container_1_ng_container_1_scrm_dynamic_label_4_Template, 1, 2, "scrm-dynamic-label", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r1 = i0.ɵɵnextContext(2).ngIf;
    const col_r2 = i0.ɵɵnextContext(4).$implicit;
    const ctx_r2 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("pr-3", ctx_r2.getLabelDisplay(col_r2, ctx_r2.mode) === "inline" && ctx_r2.getDisplay(col_r2) !== "none");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", field_r1.label);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !field_r1.label && field_r1.labelKey);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", field_r1.dynamicLabelKey);
} }
function RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_ng_container_2_ng_container_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵelement(2, "scrm-field", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r1 = i0.ɵɵnextContext(2).ngIf;
    const col_r2 = i0.ɵɵnextContext(4).$implicit;
    const ctx_r2 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("flex-grow-1", ctx_r2.getLabelDisplay(col_r2, ctx_r2.mode) === "inline");
    i0.ɵɵadvance();
    i0.ɵɵproperty("field", field_r1)("klass", ctx_r2.getFieldClass(col_r2))("mode", ctx_r2.mode)("record", ctx_r2.record)("type", field_r1.type);
} }
function RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_ng_container_2_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_ng_container_2_ng_container_1_ng_container_1_ng_container_1_Template, 5, 5, "ng-container", 1)(2, RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_ng_container_2_ng_container_1_ng_container_1_ng_container_2_Template, 3, 7, "ng-container", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const col_r2 = i0.ɵɵnextContext(5).$implicit;
    const ctx_r2 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.getLabelDisplay(col_r2, ctx_r2.mode) !== "none");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.getDisplay(col_r2) !== "none");
} }
function RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_ng_container_2_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r1 = ctx.ngIf;
    const col_r2 = i0.ɵɵnextContext(4).$implicit;
    const ctx_r2 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.shouldDisplay(col_r2, field_r1, ctx_r2.mode));
} }
function RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_ng_container_2_ng_container_1_Template, 2, 1, "ng-container", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const col_r2 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r2 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.getField(ctx_r2.record, col_r2.field));
} }
function RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-action-group-menu", 12);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    let tmp_9_0;
    let tmp_10_0;
    const ctx_r2 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance();
    i0.ɵɵproperty("buttonClass", (tmp_9_0 = ctx_r2.config.buttonClass) !== null && tmp_9_0 !== undefined ? tmp_9_0 : "")("buttonGroupClass", (tmp_10_0 = ctx_r2.config.buttonGroupClass) !== null && tmp_10_0 !== undefined ? tmp_10_0 : "")("config", ctx_r2.config.actions);
} }
function RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵtemplate(2, RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 1)(3, RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_ng_container_3_Template, 2, 3, "ng-container", 1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const col_r2 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r2 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("align-items-center", ctx_r2.getLabelDisplay(col_r2, ctx_r2.mode) === "inline")("flex-column", ctx_r2.getLabelDisplay(col_r2, ctx_r2.mode) === "top")("flex-row", ctx_r2.getLabelDisplay(col_r2, ctx_r2.mode) === "inline")("justify-content-end", !col_r2.field);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.record);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", col_r2.actionSlot && ctx_r2.config.actions);
} }
function RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtemplate(1, RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_Template, 4, 10, "ng-container", 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_8_0;
    const col_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext(4);
    i0.ɵɵclassMapInterpolate1("record-flexbox-col ", ctx_r2.getClass(col_r2), "");
    i0.ɵɵproperty("ngClass", (tmp_8_0 = ctx_r2.config.colClass) !== null && tmp_8_0 !== undefined ? tmp_8_0 : null);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", col_r2.display !== "hidden" && ctx_r2.shouldColDisplayInMode(col_r2, ctx_r2.mode));
} }
function RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_Template, 2, 5, "div", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const col_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", col_r2.display !== "hidden" && ctx_r2.shouldColDisplayInMode(col_r2, ctx_r2.mode));
} }
function RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵtemplate(2, RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    let tmp_5_0;
    const item_r4 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate3("d-flex record-flexbox-row ", ctx_r2.getJustify(item_r4.justify), " ", ctx_r2.getAlign(item_r4.align), " ", ctx_r2.getLayoutRowClass(item_r4), "");
    i0.ɵɵproperty("ngClass", (tmp_5_0 = ctx_r2.config.rowClass) !== null && tmp_5_0 !== undefined ? tmp_5_0 : null);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r4.cols);
} }
function RecordFlexboxComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_Template, 3, 7, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.layout.rows);
} }
function RecordFlexboxComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, RecordFlexboxComponent_div_0_ng_container_1_Template, 2, 1, "ng-container", 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate2("d-flex ", (ctx_r2.config && ctx_r2.config.flexDirection ? ctx_r2.config.flexDirection : "flex-column") || "", " ", ctx_r2.config && ctx_r2.config.klass || "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.layout && ctx_r2.layout.rows);
} }
export class RecordFlexboxComponent {
    constructor() {
        this.mode = 'detail';
        this.maxColumns = 4;
        this.sizeMap = {
            handset: 1,
            tablet: 2,
            web: 3,
            wide: 4
        };
        this.subs = [];
    }
    ngOnInit() {
        if (!this.config) {
            return;
        }
        const config = this.config;
        if (config.record$) {
            this.subs.push(config.record$.subscribe(record => {
                this.record = record ?? null;
            }));
        }
        if (config.mode$) {
            this.subs.push(config.mode$.subscribe(mode => {
                this.mode = mode ?? 'detail';
            }));
        }
        if (config.layout$) {
            this.subs.push(config.layout$.subscribe(layout => {
                this.layout = layout ?? null;
            }));
        }
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    getRowClass() {
        return this.config.rowClass;
    }
    getColClass() {
        return this.config.colClass;
    }
    getSizeClass(size) {
        const sizeMap = {
            regular: 'text-regular',
            medium: 'text-medium',
            large: 'text-large',
            'x-large': 'text-x-large',
            'xx-large': 'text-xx-large',
            huge: 'text-huge'
        };
        return sizeMap[size] || 'text-regular';
    }
    getFontWeight(bold) {
        let fontWeight = 'font-weight-normal';
        if (bold && isTrue(bold)) {
            fontWeight = 'font-weight-bolder';
        }
        return fontWeight;
    }
    getColor(color) {
        const sizeMap = {
            yellow: 'text-yellow',
            blue: 'text-blue',
            green: 'text-green',
            red: 'text-red',
            purple: 'text-purple',
            dark: 'text-dark',
            grey: 'text-grey'
        };
        return sizeMap[color] || '';
    }
    getJustify(justify) {
        const justifyMap = {
            start: 'justify-content-start',
            end: 'justify-content-end',
            center: 'justify-content-center',
            between: 'justify-content-between',
            around: 'justify-content-around'
        };
        return justifyMap[justify] || '';
    }
    getAlign(align) {
        const alignMap = {
            start: 'align-items-start',
            end: 'align-items-end',
            center: 'align-items-center',
            baseline: 'align-items-baseline',
            stretch: 'align-items-stretch'
        };
        return alignMap[align] || '';
    }
    getLayoutRowClass(row) {
        return (row && row.class) || '';
    }
    getClass(layoutCol) {
        if (!layoutCol) {
            return '';
        }
        const klasses = [];
        klasses.push(layoutCol.class || '');
        layoutCol.size && klasses.push(this.getSizeClass(layoutCol.size) || '');
        layoutCol.bold && klasses.push(this.getFontWeight(layoutCol.bold) || '');
        layoutCol.color && klasses.push(this.getColor(layoutCol.color) || '');
        return klasses.join(' ');
    }
    getLabelDisplay(col, mode) {
        const displayInMode = this.shouldLabelDisplayInMode(col, mode);
        if (!displayInMode) {
            return 'none';
        }
        return col.labelDisplay || (this.config && this.config.labelDisplay) || 'inline';
    }
    getField(record, field) {
        if (!field || !field.name || !record || !record.fields) {
            return null;
        }
        return record.fields[field.name] ?? null;
    }
    getFieldClass(col) {
        let klasses = this.config.inputClass || {};
        if (col.inputClass) {
            klasses[col.inputClass] = true;
        }
        return klasses;
    }
    getLabelClass(col) {
        let klasses = this.config.labelClass || {};
        if (col.labelClass) {
            klasses[col.labelClass] = true;
        }
        return klasses;
    }
    shouldDisplay(col, field, mode) {
        const displayInMode = this.shouldFieldDisplayInMode(col, mode);
        if (!displayInMode) {
            return false;
        }
        if (!col.hideIfEmpty) {
            return true;
        }
        let hasValue = false;
        hasValue = hasValue || !!field.value;
        hasValue = hasValue || !!(field.valueList && field.valueList.length);
        hasValue = hasValue || !!(field.valueObject && Object.keys(field.valueObject).length);
        return hasValue;
    }
    shouldColDisplayInMode(col, mode) {
        return this.shouldFieldDisplayInMode(col, mode) || this.shouldLabelDisplayInMode(col, mode);
    }
    shouldFieldDisplayInMode(col, mode) {
        const modes = col?.modes ?? null;
        return !(modes && modes.length && !modes.includes(mode));
    }
    shouldLabelDisplayInMode(col, mode) {
        const modes = col?.labelModes ?? null;
        return !(modes && modes.length && !modes.includes(mode));
    }
    getDisplay(col) {
        return col.display || '';
    }
    static { this.ɵfac = function RecordFlexboxComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RecordFlexboxComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RecordFlexboxComponent, selectors: [["scrm-record-flexbox"]], inputs: { config: "config" }, decls: 1, vars: 1, consts: [[3, "class", 4, "ngIf"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "ngClass"], [3, "ngClass", "class", 4, "ngIf"], [1, "d-flex"], [3, "ngClass", 4, "ngIf"], [3, "labelKey", "ngClass", 4, "ngIf"], [3, "labelKey", "fields", 4, "ngIf"], [3, "labelKey", "ngClass"], [3, "labelKey", "fields"], [3, "field", "klass", "mode", "record", "type"], [3, "buttonClass", "buttonGroupClass", "config"]], template: function RecordFlexboxComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, RecordFlexboxComponent_div_0_Template, 2, 5, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.config);
        } }, dependencies: [i1.NgClass, i1.NgForOf, i1.NgIf, i2.FieldComponent, i3.LabelComponent, i4.ActionGroupMenuComponent, i5.DynamicLabelComponent], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordFlexboxComponent, [{
        type: Component,
        args: [{ selector: 'scrm-record-flexbox', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n\n<div *ngIf=\"config\" class=\"d-flex {{((config && config.flexDirection) ? config.flexDirection : 'flex-column' ) || ''}} {{(config && config.klass) || ''}}\"   >\n    <ng-container *ngIf=\"layout && layout.rows\">\n        <ng-container *ngFor=\"let item of layout.rows\">\n\n            <div [ngClass]=\"config.rowClass ?? null\"\n                 class=\"d-flex record-flexbox-row {{getJustify(item.justify)}} {{getAlign(item.align)}} {{getLayoutRowClass(item)}}\">\n\n                <ng-container *ngFor=\"let col of item.cols\">\n\n                <div *ngIf=\"col.display !== 'hidden' && shouldColDisplayInMode(col, mode)\"\n                     [ngClass]=\"config.colClass ?? null\"\n                     class=\"record-flexbox-col {{getClass(col)}}\">\n\n                    <ng-container *ngIf=\"col.display !== 'hidden' && shouldColDisplayInMode(col, mode)\">\n\n                        <div [class.align-items-center]=\"getLabelDisplay(col, mode) === 'inline'\"\n                             [class.flex-column]=\"getLabelDisplay(col, mode) === 'top'\"\n                             [class.flex-row]=\"getLabelDisplay(col, mode) === 'inline'\"\n                             [class.justify-content-end]=\"!col.field\"\n                             class=\"d-flex\"\n                        >\n                            <ng-container *ngIf=\"record\">\n                                <ng-container *ngIf=\"getField(record, col.field) as field\">\n\n                                    <ng-container *ngIf=\"shouldDisplay(col, field, mode)\">\n                                        <ng-container *ngIf=\"getLabelDisplay(col, mode) !== 'none'\">\n\n                                            <div\n                                                [class.pr-3]=\"getLabelDisplay(col, mode) === 'inline' && getDisplay(col) !== 'none'\">\n\n                                                <label *ngIf=\"field.label\" [ngClass]=\"getLabelClass(col)\">\n                                                    {{field.label}}\n                                                </label>\n\n                                                <scrm-label *ngIf=\"!field.label && field.labelKey\"\n                                                            [labelKey]=\"field.labelKey\"\n                                                            [ngClass]=\"getLabelClass(col)\">\n                                                </scrm-label>\n\n                                                <scrm-dynamic-label *ngIf=\"field.dynamicLabelKey\"\n                                                                    [labelKey]=\"field.dynamicLabelKey\"\n                                                                    [fields]=\"record.fields\">\n                                                </scrm-dynamic-label>\n                                            </div>\n\n                                        </ng-container>\n\n                                        <ng-container *ngIf=\"getDisplay(col) !== 'none'\">\n\n                                            <div [class.flex-grow-1]=\"getLabelDisplay(col, mode) === 'inline'\">\n                                                <scrm-field [field]=\"field\"\n                                                            [klass]=\"getFieldClass(col)\"\n                                                            [mode]=\"mode\"\n                                                            [record]=\"record\"\n                                                            [type]=\"field.type\">\n                                                </scrm-field>\n\n                                            </div>\n\n                                        </ng-container>\n\n\n                                    </ng-container>\n\n                                </ng-container>\n                            </ng-container>\n\n                            <ng-container *ngIf=\"col.actionSlot && this.config.actions\">\n                                <scrm-action-group-menu [buttonClass]=\"config.buttonClass ?? ''\"\n                                                        [buttonGroupClass]=\"config.buttonGroupClass ?? ''\"\n                                                        [config]=\"config.actions\">\n                                </scrm-action-group-menu>\n                            </ng-container>\n\n                        </div>\n                    </ng-container>\n\n                </div>\n                </ng-container>\n            </div>\n        </ng-container>\n    </ng-container>\n</div>\n" }]
    }], () => [], { config: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RecordFlexboxComponent, { className: "RecordFlexboxComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLWZsZXhib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvcmVjb3JkLWZsZXhib3gvcmVjb3JkLWZsZXhib3guY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvcmVjb3JkLWZsZXhib3gvcmVjb3JkLWZsZXhib3guY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQWFsRSxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sZ0NBQWdDLENBQUM7Ozs7Ozs7O0lDbUJOLGdDQUEwRDtJQUN0RCxZQUNKO0lBQUEsaUJBQVE7Ozs7O0lBRm1CLHNEQUE4QjtJQUNyRCxjQUNKO0lBREksK0NBQ0o7OztJQUVBLGdDQUdhOzs7OztJQURELEFBREEsNENBQTJCLHlDQUNHOzs7SUFHMUMseUNBR3FCOzs7O0lBREQsQUFEQSxtREFBa0MsZ0NBQ1Y7OztJQWhCcEQsNkJBQTREO0lBRXhELDJCQUN5RjtJQVdyRixBQUxBLEFBSkEsK01BQTBELDRNQU1mLDROQUtFO0lBRWpELGlCQUFNOzs7Ozs7SUFmRixjQUFvRjtJQUFwRix3SEFBb0Y7SUFFNUUsY0FBaUI7SUFBakIscUNBQWlCO0lBSVosY0FBb0M7SUFBcEMsMkRBQW9DO0lBSzVCLGNBQTJCO0lBQTNCLCtDQUEyQjs7O0lBUXhELDZCQUFpRDtJQUU3QywyQkFBbUU7SUFDL0QsaUNBS2E7SUFFakIsaUJBQU07Ozs7OztJQVJELGNBQTZEO0lBQTdELHVGQUE2RDtJQUNsRCxjQUFlO0lBSWYsQUFEQSxBQURBLEFBREEsQUFEQSxnQ0FBZSx1Q0FDYSxxQkFDZix5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LElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDaEcsQ0FBQztJQUVELHdCQUF3QixDQUFDLEdBQW9CLEVBQUUsSUFBYztRQUN6RCxNQUFNLEtBQUssR0FBRyxHQUFHLEVBQUUsS0FBSyxJQUFJLElBQUksQ0FBQztRQUNqQyxPQUFPLENBQUMsQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsd0JBQXdCLENBQUMsR0FBb0IsRUFBRSxJQUFjO1FBQ3pELE1BQU0sS0FBSyxHQUFHLEdBQUcsRUFBRSxVQUFVLElBQUksSUFBSSxDQUFDO1FBQ3RDLE9BQU8sQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxVQUFVLENBQUMsR0FBb0I7UUFDM0IsT0FBTyxHQUFHLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztJQUM3QixDQUFDO3VIQXBOUSxzQkFBc0I7b0VBQXRCLHNCQUFzQjtZQ3JCbkMsdUVBQThKOztZQUF4SixpQ0FBWTs7O2lGRHFCTCxzQkFBc0I7Y0FMbEMsU0FBUzsyQkFDSSxxQkFBcUI7b0JBTXRCLE1BQU07a0JBQWQsS0FBSzs7a0ZBRkcsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gICAgQ29udGVudEFsaWduLFxuICAgIENvbnRlbnRKdXN0aWZ5LFxuICAgIFN0YXRpc3RpY1dpZGdldExheW91dFJvdyxcbiAgICBUZXh0Q29sb3IsXG4gICAgVGV4dFNpemVzLFxufSBmcm9tICcuLi8uLi9jb21tb24vbWV0YWRhdGEvd2lkZ2V0Lm1ldGFkYXRhJztcbmltcG9ydCB7UmVjb3JkfSBmcm9tICcuLi8uLi9jb21tb24vcmVjb3JkL3JlY29yZC5tb2RlbCc7XG5pbXBvcnQge0ZpZWxkfSBmcm9tICcuLi8uLi9jb21tb24vcmVjb3JkL2ZpZWxkLm1vZGVsJztcbmltcG9ydCB7U2NyZWVuU2l6ZU1hcH0gZnJvbSAnLi4vLi4vY29tbW9uL3NlcnZpY2VzL3VpL3Jlc2l6ZS5tb2RlbCc7XG5pbXBvcnQge1ZpZXdGaWVsZERlZmluaXRpb259IGZyb20gJy4uLy4uL2NvbW1vbi9tZXRhZGF0YS9tZXRhZGF0YS5tb2RlbCc7XG5pbXBvcnQge1ZpZXdNb2RlfSBmcm9tICcuLi8uLi9jb21tb24vdmlld3Mvdmlldy5tb2RlbCc7XG5pbXBvcnQge2lzVHJ1ZX0gZnJvbSAnLi4vLi4vY29tbW9uL3V0aWxzL3ZhbHVlLXV0aWxzJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7RmllbGRGbGV4Ym94LCBGaWVsZEZsZXhib3hDb2wsIFJlY29yZEZsZXhib3hDb25maWd9IGZyb20gJy4vcmVjb3JkLWZsZXhib3gubW9kZWwnO1xuaW1wb3J0IHtMYWJlbERpc3BsYXl9IGZyb20gJy4uL2ZpZWxkLWdyaWQvZmllbGQtZ3JpZC5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1yZWNvcmQtZmxleGJveCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3JlY29yZC1mbGV4Ym94LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFJlY29yZEZsZXhib3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBASW5wdXQoKSBjb25maWc6IFJlY29yZEZsZXhib3hDb25maWc7XG5cbiAgICBtb2RlOiBWaWV3TW9kZSA9ICdkZXRhaWwnO1xuICAgIHJlY29yZDogUmVjb3JkO1xuICAgIGxheW91dDogRmllbGRGbGV4Ym94O1xuXG4gICAgbWF4Q29sdW1uczogbnVtYmVyID0gNDtcbiAgICBzaXplTWFwOiBTY3JlZW5TaXplTWFwID0ge1xuICAgICAgICBoYW5kc2V0OiAxLFxuICAgICAgICB0YWJsZXQ6IDIsXG4gICAgICAgIHdlYjogMyxcbiAgICAgICAgd2lkZTogNFxuICAgIH07XG5cbiAgICBwcm90ZWN0ZWQgc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuY29uZmlnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWc7XG5cbiAgICAgICAgaWYgKGNvbmZpZy5yZWNvcmQkKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnMucHVzaChjb25maWcucmVjb3JkJC5zdWJzY3JpYmUocmVjb3JkID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlY29yZCA9IHJlY29yZCA/PyBudWxsO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZy5tb2RlJCkge1xuICAgICAgICAgICAgdGhpcy5zdWJzLnB1c2goY29uZmlnLm1vZGUkLnN1YnNjcmliZShtb2RlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGUgPSBtb2RlID8/ICdkZXRhaWwnO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZy5sYXlvdXQkKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnMucHVzaChjb25maWcubGF5b3V0JC5zdWJzY3JpYmUobGF5b3V0ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxheW91dCA9IGxheW91dCA/PyBudWxsO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc3Vicy5mb3JFYWNoKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgZ2V0Um93Q2xhc3MoKTogeyBba2xhc3M6IHN0cmluZ106IGFueSB9IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLnJvd0NsYXNzO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDb2xDbGFzcygpOiB7IFtrbGFzczogc3RyaW5nXTogYW55IH0ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuY29sQ2xhc3M7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFNpemVDbGFzcyhzaXplOiBUZXh0U2l6ZXMpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBzaXplTWFwID0ge1xuICAgICAgICAgICAgcmVndWxhcjogJ3RleHQtcmVndWxhcicsXG4gICAgICAgICAgICBtZWRpdW06ICd0ZXh0LW1lZGl1bScsXG4gICAgICAgICAgICBsYXJnZTogJ3RleHQtbGFyZ2UnLFxuICAgICAgICAgICAgJ3gtbGFyZ2UnOiAndGV4dC14LWxhcmdlJyxcbiAgICAgICAgICAgICd4eC1sYXJnZSc6ICd0ZXh0LXh4LWxhcmdlJyxcbiAgICAgICAgICAgIGh1Z2U6ICd0ZXh0LWh1Z2UnXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHNpemVNYXBbc2l6ZV0gfHwgJ3RleHQtcmVndWxhcic7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEZvbnRXZWlnaHQoYm9sZDogc3RyaW5nIHwgYm9vbGVhbik6IHN0cmluZyB7XG4gICAgICAgIGxldCBmb250V2VpZ2h0ID0gJ2ZvbnQtd2VpZ2h0LW5vcm1hbCc7XG5cbiAgICAgICAgaWYgKGJvbGQgJiYgaXNUcnVlKGJvbGQpKSB7XG4gICAgICAgICAgICBmb250V2VpZ2h0ID0gJ2ZvbnQtd2VpZ2h0LWJvbGRlcic7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZm9udFdlaWdodDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q29sb3IoY29sb3I6IFRleHRDb2xvcik6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHNpemVNYXAgPSB7XG4gICAgICAgICAgICB5ZWxsb3c6ICd0ZXh0LXllbGxvdycsXG4gICAgICAgICAgICBibHVlOiAndGV4dC1ibHVlJyxcbiAgICAgICAgICAgIGdyZWVuOiAndGV4dC1ncmVlbicsXG4gICAgICAgICAgICByZWQ6ICd0ZXh0LXJlZCcsXG4gICAgICAgICAgICBwdXJwbGU6ICd0ZXh0LXB1cnBsZScsXG4gICAgICAgICAgICBkYXJrOiAndGV4dC1kYXJrJyxcbiAgICAgICAgICAgIGdyZXk6ICd0ZXh0LWdyZXknXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHNpemVNYXBbY29sb3JdIHx8ICcnO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRKdXN0aWZ5KGp1c3RpZnk6IENvbnRlbnRKdXN0aWZ5KTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QganVzdGlmeU1hcCA9IHtcbiAgICAgICAgICAgIHN0YXJ0OiAnanVzdGlmeS1jb250ZW50LXN0YXJ0JyxcbiAgICAgICAgICAgIGVuZDogJ2p1c3RpZnktY29udGVudC1lbmQnLFxuICAgICAgICAgICAgY2VudGVyOiAnanVzdGlmeS1jb250ZW50LWNlbnRlcicsXG4gICAgICAgICAgICBiZXR3ZWVuOiAnanVzdGlmeS1jb250ZW50LWJldHdlZW4nLFxuICAgICAgICAgICAgYXJvdW5kOiAnanVzdGlmeS1jb250ZW50LWFyb3VuZCdcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4ganVzdGlmeU1hcFtqdXN0aWZ5XSB8fCAnJztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0QWxpZ24oYWxpZ246IENvbnRlbnRBbGlnbik6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGFsaWduTWFwID0ge1xuICAgICAgICAgICAgc3RhcnQ6ICdhbGlnbi1pdGVtcy1zdGFydCcsXG4gICAgICAgICAgICBlbmQ6ICdhbGlnbi1pdGVtcy1lbmQnLFxuICAgICAgICAgICAgY2VudGVyOiAnYWxpZ24taXRlbXMtY2VudGVyJyxcbiAgICAgICAgICAgIGJhc2VsaW5lOiAnYWxpZ24taXRlbXMtYmFzZWxpbmUnLFxuICAgICAgICAgICAgc3RyZXRjaDogJ2FsaWduLWl0ZW1zLXN0cmV0Y2gnXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGFsaWduTWFwW2FsaWduXSB8fCAnJztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TGF5b3V0Um93Q2xhc3Mocm93OiBTdGF0aXN0aWNXaWRnZXRMYXlvdXRSb3cpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gKHJvdyAmJiByb3cuY2xhc3MpIHx8ICcnO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDbGFzcyhsYXlvdXRDb2w6IEZpZWxkRmxleGJveENvbCk6IHN0cmluZyB7XG5cbiAgICAgICAgaWYgKCFsYXlvdXRDb2wpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGtsYXNzZXMgPSBbXTtcbiAgICAgICAga2xhc3Nlcy5wdXNoKGxheW91dENvbC5jbGFzcyB8fCAnJyk7XG4gICAgICAgIGxheW91dENvbC5zaXplICYmIGtsYXNzZXMucHVzaCh0aGlzLmdldFNpemVDbGFzcyhsYXlvdXRDb2wuc2l6ZSkgfHwgJycpO1xuICAgICAgICBsYXlvdXRDb2wuYm9sZCAmJiBrbGFzc2VzLnB1c2godGhpcy5nZXRGb250V2VpZ2h0KGxheW91dENvbC5ib2xkKSB8fCAnJyk7XG4gICAgICAgIGxheW91dENvbC5jb2xvciAmJiBrbGFzc2VzLnB1c2godGhpcy5nZXRDb2xvcihsYXlvdXRDb2wuY29sb3IpIHx8ICcnKTtcblxuICAgICAgICByZXR1cm4ga2xhc3Nlcy5qb2luKCcgJyk7XG4gICAgfVxuXG4gICAgZ2V0TGFiZWxEaXNwbGF5KGNvbDogRmllbGRGbGV4Ym94Q29sLCBtb2RlOiBWaWV3TW9kZSk6IExhYmVsRGlzcGxheSB7XG4gICAgICAgIGNvbnN0IGRpc3BsYXlJbk1vZGUgPSB0aGlzLnNob3VsZExhYmVsRGlzcGxheUluTW9kZShjb2wsIG1vZGUpO1xuICAgICAgICBpZiAoIWRpc3BsYXlJbk1vZGUpe1xuICAgICAgICAgICAgcmV0dXJuICdub25lJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb2wubGFiZWxEaXNwbGF5IHx8ICh0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbmZpZy5sYWJlbERpc3BsYXkpIHx8ICdpbmxpbmUnO1xuICAgIH1cblxuICAgIGdldEZpZWxkKHJlY29yZDogUmVjb3JkLCBmaWVsZDogVmlld0ZpZWxkRGVmaW5pdGlvbik6IEZpZWxkIHtcbiAgICAgICAgaWYgKCFmaWVsZCB8fCAhZmllbGQubmFtZSB8fCAhcmVjb3JkIHx8ICFyZWNvcmQuZmllbGRzKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZWNvcmQuZmllbGRzW2ZpZWxkLm5hbWVdID8/IG51bGw7XG4gICAgfVxuXG4gICAgZ2V0RmllbGRDbGFzcyhjb2w6IEZpZWxkRmxleGJveENvbCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0ge1xuICAgICAgICBsZXQga2xhc3NlcyA9IHRoaXMuY29uZmlnLmlucHV0Q2xhc3MgfHwge30gYXMgeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcblxuICAgICAgICBpZiAoY29sLmlucHV0Q2xhc3MpIHtcbiAgICAgICAgICAgIGtsYXNzZXNbY29sLmlucHV0Q2xhc3NdID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBrbGFzc2VzO1xuICAgIH1cblxuICAgIGdldExhYmVsQ2xhc3MoY29sOiBGaWVsZEZsZXhib3hDb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHtcbiAgICAgICAgbGV0IGtsYXNzZXMgPSB0aGlzLmNvbmZpZy5sYWJlbENsYXNzIHx8IHt9IGFzIHsgW2tleTogc3RyaW5nXTogYW55IH07XG5cbiAgICAgICAgaWYgKGNvbC5sYWJlbENsYXNzKSB7XG4gICAgICAgICAgICBrbGFzc2VzW2NvbC5sYWJlbENsYXNzXSA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBrbGFzc2VzO1xuICAgIH1cblxuICAgIHNob3VsZERpc3BsYXkoY29sOiBGaWVsZEZsZXhib3hDb2wsIGZpZWxkOiBGaWVsZCwgbW9kZTogVmlld01vZGUpIHtcblxuICAgICAgICBjb25zdCBkaXNwbGF5SW5Nb2RlID0gdGhpcy5zaG91bGRGaWVsZERpc3BsYXlJbk1vZGUoY29sLCBtb2RlKTtcblxuICAgICAgICBpZiAoIWRpc3BsYXlJbk1vZGUpe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFjb2wuaGlkZUlmRW1wdHkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGhhc1ZhbHVlID0gZmFsc2U7XG4gICAgICAgIGhhc1ZhbHVlID0gaGFzVmFsdWUgfHwgISFmaWVsZC52YWx1ZTtcbiAgICAgICAgaGFzVmFsdWUgPSBoYXNWYWx1ZSB8fCAhIShmaWVsZC52YWx1ZUxpc3QgJiYgZmllbGQudmFsdWVMaXN0Lmxlbmd0aCk7XG4gICAgICAgIGhhc1ZhbHVlID0gaGFzVmFsdWUgfHwgISEoZmllbGQudmFsdWVPYmplY3QgJiYgT2JqZWN0LmtleXMoZmllbGQudmFsdWVPYmplY3QpLmxlbmd0aCk7XG5cbiAgICAgICAgcmV0dXJuIGhhc1ZhbHVlO1xuICAgIH1cblxuICAgIHNob3VsZENvbERpc3BsYXlJbk1vZGUoY29sOiBGaWVsZEZsZXhib3hDb2wsIG1vZGU6IFZpZXdNb2RlKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNob3VsZEZpZWxkRGlzcGxheUluTW9kZShjb2wsIG1vZGUpIHx8IHRoaXMuc2hvdWxkTGFiZWxEaXNwbGF5SW5Nb2RlKGNvbCwgbW9kZSk7XG4gICAgfVxuXG4gICAgc2hvdWxkRmllbGREaXNwbGF5SW5Nb2RlKGNvbDogRmllbGRGbGV4Ym94Q29sLCBtb2RlOiBWaWV3TW9kZSk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBtb2RlcyA9IGNvbD8ubW9kZXMgPz8gbnVsbDtcbiAgICAgICAgcmV0dXJuICEobW9kZXMgJiYgbW9kZXMubGVuZ3RoICYmICFtb2Rlcy5pbmNsdWRlcyhtb2RlKSk7XG4gICAgfVxuXG4gICAgc2hvdWxkTGFiZWxEaXNwbGF5SW5Nb2RlKGNvbDogRmllbGRGbGV4Ym94Q29sLCBtb2RlOiBWaWV3TW9kZSk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBtb2RlcyA9IGNvbD8ubGFiZWxNb2RlcyA/PyBudWxsO1xuICAgICAgICByZXR1cm4gIShtb2RlcyAmJiBtb2Rlcy5sZW5ndGggJiYgIW1vZGVzLmluY2x1ZGVzKG1vZGUpKTtcbiAgICB9XG5cbiAgICBnZXREaXNwbGF5KGNvbDogRmllbGRGbGV4Ym94Q29sKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGNvbC5kaXNwbGF5IHx8ICcnO1xuICAgIH1cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cblxuPGRpdiAqbmdJZj1cImNvbmZpZ1wiIGNsYXNzPVwiZC1mbGV4IHt7KChjb25maWcgJiYgY29uZmlnLmZsZXhEaXJlY3Rpb24pID8gY29uZmlnLmZsZXhEaXJlY3Rpb24gOiAnZmxleC1jb2x1bW4nICkgfHwgJyd9fSB7eyhjb25maWcgJiYgY29uZmlnLmtsYXNzKSB8fCAnJ319XCIgICA+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImxheW91dCAmJiBsYXlvdXQucm93c1wiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIGxheW91dC5yb3dzXCI+XG5cbiAgICAgICAgICAgIDxkaXYgW25nQ2xhc3NdPVwiY29uZmlnLnJvd0NsYXNzID8/IG51bGxcIlxuICAgICAgICAgICAgICAgICBjbGFzcz1cImQtZmxleCByZWNvcmQtZmxleGJveC1yb3cge3tnZXRKdXN0aWZ5KGl0ZW0uanVzdGlmeSl9fSB7e2dldEFsaWduKGl0ZW0uYWxpZ24pfX0ge3tnZXRMYXlvdXRSb3dDbGFzcyhpdGVtKX19XCI+XG5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBjb2wgb2YgaXRlbS5jb2xzXCI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiY29sLmRpc3BsYXkgIT09ICdoaWRkZW4nICYmIHNob3VsZENvbERpc3BsYXlJbk1vZGUoY29sLCBtb2RlKVwiXG4gICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJjb25maWcuY29sQ2xhc3MgPz8gbnVsbFwiXG4gICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJlY29yZC1mbGV4Ym94LWNvbCB7e2dldENsYXNzKGNvbCl9fVwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb2wuZGlzcGxheSAhPT0gJ2hpZGRlbicgJiYgc2hvdWxkQ29sRGlzcGxheUluTW9kZShjb2wsIG1vZGUpXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgW2NsYXNzLmFsaWduLWl0ZW1zLWNlbnRlcl09XCJnZXRMYWJlbERpc3BsYXkoY29sLCBtb2RlKSA9PT0gJ2lubGluZSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3MuZmxleC1jb2x1bW5dPVwiZ2V0TGFiZWxEaXNwbGF5KGNvbCwgbW9kZSkgPT09ICd0b3AnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmZsZXgtcm93XT1cImdldExhYmVsRGlzcGxheShjb2wsIG1vZGUpID09PSAnaW5saW5lJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzcy5qdXN0aWZ5LWNvbnRlbnQtZW5kXT1cIiFjb2wuZmllbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImQtZmxleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInJlY29yZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZ2V0RmllbGQocmVjb3JkLCBjb2wuZmllbGQpIGFzIGZpZWxkXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzaG91bGREaXNwbGF5KGNvbCwgZmllbGQsIG1vZGUpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImdldExhYmVsRGlzcGxheShjb2wsIG1vZGUpICE9PSAnbm9uZSdcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3MucHItM109XCJnZXRMYWJlbERpc3BsYXkoY29sLCBtb2RlKSA9PT0gJ2lubGluZScgJiYgZ2V0RGlzcGxheShjb2wpICE9PSAnbm9uZSdcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsICpuZ0lmPVwiZmllbGQubGFiZWxcIiBbbmdDbGFzc109XCJnZXRMYWJlbENsYXNzKGNvbClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2ZpZWxkLmxhYmVsfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWxhYmVsICpuZ0lmPVwiIWZpZWxkLmxhYmVsICYmIGZpZWxkLmxhYmVsS2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsYWJlbEtleV09XCJmaWVsZC5sYWJlbEtleVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJnZXRMYWJlbENsYXNzKGNvbClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2NybS1sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tZHluYW1pYy1sYWJlbCAqbmdJZj1cImZpZWxkLmR5bmFtaWNMYWJlbEtleVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsYWJlbEtleV09XCJmaWVsZC5keW5hbWljTGFiZWxLZXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZmllbGRzXT1cInJlY29yZC5maWVsZHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2NybS1keW5hbWljLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImdldERpc3BsYXkoY29sKSAhPT0gJ25vbmUnXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBbY2xhc3MuZmxleC1ncm93LTFdPVwiZ2V0TGFiZWxEaXNwbGF5KGNvbCwgbW9kZSkgPT09ICdpbmxpbmUnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1maWVsZCBbZmllbGRdPVwiZmllbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2tsYXNzXT1cImdldEZpZWxkQ2xhc3MoY29sKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbW9kZV09XCJtb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyZWNvcmRdPVwicmVjb3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0eXBlXT1cImZpZWxkLnR5cGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2NybS1maWVsZD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbC5hY3Rpb25TbG90ICYmIHRoaXMuY29uZmlnLmFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tYWN0aW9uLWdyb3VwLW1lbnUgW2J1dHRvbkNsYXNzXT1cImNvbmZpZy5idXR0b25DbGFzcyA/PyAnJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtidXR0b25Hcm91cENsYXNzXT1cImNvbmZpZy5idXR0b25Hcm91cENsYXNzID8/ICcnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbmZpZ109XCJjb25maWcuYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Njcm0tYWN0aW9uLWdyb3VwLW1lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbmctY29udGFpbmVyPlxuPC9kaXY+XG4iXX0=