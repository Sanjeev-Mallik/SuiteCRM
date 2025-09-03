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
import { BaseFieldGridComponent } from './base-field-grid.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/layout";
import * as i2 from "@angular/common";
import * as i3 from "../../fields/field.component";
import * as i4 from "../label/label.component";
const _c0 = [[["", "field-grid-actions", ""]], [["", "field-grid-special", ""]]];
const _c1 = ["[field-grid-actions]", "[field-grid-special]"];
function FieldGridComponent_div_1_div_1_div_2_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 1);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r1 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r1.labelClass);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(col_r1.field.label);
} }
function FieldGridComponent_div_1_div_1_div_2_scrm_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-label", 8);
} if (rf & 2) {
    const col_r1 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("labelKey", col_r1.field.labelKey)("ngClass", ctx_r1.labelClass);
} }
function FieldGridComponent_div_1_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, FieldGridComponent_div_1_div_1_div_2_label_1_Template, 2, 2, "label", 6)(2, FieldGridComponent_div_1_div_1_div_2_scrm_label_2_Template, 1, 2, "scrm-label", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r1 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("pr-3", ctx_r1.labelDisplay === "inline");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", col_r1.field.label);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !col_r1.field.label && col_r1.field.labelKey);
} }
function FieldGridComponent_div_1_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "scrm-field", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r1 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("flex-grow-1", ctx_r1.labelDisplay === "inline");
    i0.ɵɵadvance();
    i0.ɵɵproperty("field", col_r1.field)("klass", ctx_r1.inputClass)("mode", ctx_r1.fieldMode)("record", ctx_r1.record)("type", col_r1.field.type);
} }
function FieldGridComponent_div_1_div_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵprojection(1);
    i0.ɵɵelementContainerEnd();
} }
function FieldGridComponent_div_1_div_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵprojection(1, 1);
    i0.ɵɵelementContainerEnd();
} }
function FieldGridComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 2);
    i0.ɵɵtemplate(2, FieldGridComponent_div_1_div_1_div_2_Template, 3, 4, "div", 3)(3, FieldGridComponent_div_1_div_1_div_3_Template, 2, 7, "div", 4)(4, FieldGridComponent_div_1_div_1_ng_container_4_Template, 2, 0, "ng-container", 5)(5, FieldGridComponent_div_1_div_1_ng_container_5_Template, 2, 0, "ng-container", 5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const col_r1 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r1.colClass);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("align-items-center", ctx_r1.labelDisplay === "inline" && !ctx_r1.colAlignItems)("flex-column", ctx_r1.labelDisplay === "top")("flex-row", ctx_r1.labelDisplay === "inline")("justify-content-end", !col_r1.field);
    i0.ɵɵproperty("ngClass", ctx_r1.colAlignItems ? ctx_r1.colAlignItems : "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", col_r1.field && (col_r1.field == null ? null : col_r1.field.display()) !== "none");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", col_r1.field && (col_r1.field == null ? null : col_r1.field.display()) !== "none");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", col_r1.actionSlot);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", col_r1.specialSlot);
} }
function FieldGridComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, FieldGridComponent_div_1_div_1_Template, 6, 14, "div", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r3 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r1.rowClass);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", row_r3.cols);
} }
export class FieldGridComponent extends BaseFieldGridComponent {
    constructor(breakpointObserver) {
        super(breakpointObserver);
        this.breakpointObserver = breakpointObserver;
        this.fieldMode = 'detail';
    }
    ngOnChanges() {
        this.buildGrid();
    }
    buildGrid() {
        const grid = [];
        if (!this.fields || this.fields.length === 0) {
            this.fieldGrid = [];
            return;
        }
        let col = 0;
        let row = {
            cols: []
        };
        grid.push(row);
        this.fields.forEach(field => {
            if (col >= this.colNumber) {
                col = 0;
                row = {
                    cols: []
                };
                grid.push(row);
            }
            row.cols.push({
                field
            });
            col++;
        });
        this.addSpecialSlots(grid);
        this.fieldGrid = grid;
    }
    static { this.ɵfac = function FieldGridComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FieldGridComponent)(i0.ɵɵdirectiveInject(i1.BreakpointObserver)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FieldGridComponent, selectors: [["scrm-field-grid"]], inputs: { fields: "fields", record: "record", fieldMode: "fieldMode" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c1, decls: 2, vars: 1, consts: [[3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "d-flex", 3, "ngClass"], [3, "pr-3", 4, "ngIf"], [3, "flex-grow-1", 4, "ngIf"], [4, "ngIf"], [3, "ngClass", 4, "ngIf"], [3, "labelKey", "ngClass", 4, "ngIf"], [3, "labelKey", "ngClass"], [3, "field", "klass", "mode", "record", "type"]], template: function FieldGridComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵelementStart(0, "form");
            i0.ɵɵtemplate(1, FieldGridComponent_div_1_Template, 2, 2, "div", 0);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.fieldGrid);
        } }, dependencies: [i2.NgClass, i2.NgForOf, i2.NgIf, i3.FieldComponent, i4.LabelComponent], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FieldGridComponent, [{
        type: Component,
        args: [{ selector: 'scrm-field-grid', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<form>\n    <div [ngClass]=\"rowClass\" *ngFor=\"let row of fieldGrid\">\n\n        <div [ngClass]=\"colClass\" *ngFor=\"let col of row.cols\">\n            <div [class.align-items-center]=\"labelDisplay === 'inline' && !colAlignItems\"\n                     [class.flex-column]=\"labelDisplay === 'top'\"\n                     [class.flex-row]=\"labelDisplay === 'inline'\"\n                     [class.justify-content-end]=\"!col.field\"\n                     [ngClass]=\"colAlignItems ? colAlignItems : ''\"\n                     class=\"d-flex\"\n                >\n                    <div *ngIf=\"col.field && col.field?.display() !== 'none'\"\n                         [class.pr-3]=\"labelDisplay === 'inline'\" >\n                        <label *ngIf=\"col.field.label\" [ngClass]=\"labelClass\">{{col.field.label}}</label>\n                        <scrm-label *ngIf=\"!col.field.label && col.field.labelKey\"\n                                    [labelKey]=\"col.field.labelKey\"\n                                    [ngClass]=\"labelClass\"></scrm-label>\n                    </div>\n                    <div *ngIf=\"col.field && col.field?.display()!== 'none'\"\n                         [class.flex-grow-1]=\"labelDisplay === 'inline'\">\n                        <scrm-field [field]=\"col.field\"\n                                    [klass]=\"inputClass\"\n                                    [mode]=\"fieldMode\"\n                                    [record]=\"record\"\n                                    [type]=\"col.field.type\">\n                        </scrm-field>\n                    </div>\n                    <ng-container *ngIf=\"col.actionSlot\">\n                        <ng-content select=\"[field-grid-actions]\"></ng-content>\n                    </ng-container>\n                    <ng-container *ngIf=\"col.specialSlot\">\n                        <ng-content select=\"[field-grid-special]\"></ng-content>\n                    </ng-container>\n                </div>\n        </div>\n    </div>\n</form>\n" }]
    }], () => [{ type: i1.BreakpointObserver }], { fields: [{
            type: Input
        }], record: [{
            type: Input
        }], fieldMode: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FieldGridComponent, { className: "FieldGridComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtZ3JpZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9maWVsZC1ncmlkL2ZpZWxkLWdyaWQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvZmllbGQtZ3JpZC9maWVsZC1ncmlkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUl2RCxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7Ozs7O0lDUzNDLGdDQUFzRDtJQUFBLFlBQW1CO0lBQUEsaUJBQVE7Ozs7SUFBbEQsMkNBQXNCO0lBQUMsY0FBbUI7SUFBbkIsd0NBQW1COzs7SUFDekUsZ0NBRWdEOzs7O0lBQXBDLEFBREEsZ0RBQStCLDhCQUNUOzs7SUFMdEMsMkJBQytDO0lBRTNDLEFBREEseUZBQXNELHNGQUduQjtJQUN2QyxpQkFBTTs7OztJQUxELHdEQUF3QztJQUNqQyxjQUFxQjtJQUFyQix5Q0FBcUI7SUFDaEIsY0FBNEM7SUFBNUMsbUVBQTRDOzs7SUFJN0QsMkJBQ3FEO0lBQ2pELGdDQUthO0lBQ2pCLGlCQUFNOzs7O0lBUEQsK0RBQStDO0lBQ3BDLGNBQW1CO0lBSW5CLEFBREEsQUFEQSxBQURBLEFBREEsb0NBQW1CLDRCQUNDLDBCQUNGLHlCQUNELDJCQUNNOzs7SUFHdkMsNkJBQXFDO0lBQ2pDLGtCQUF1RDs7OztJQUUzRCw2QkFBc0M7SUFDbEMscUJBQXVEOzs7O0lBM0JuRSxBQURKLDhCQUF1RCxhQU85QztJQW9CRyxBQUhBLEFBVEEsQUFQQSwrRUFDK0Msa0VBT00sb0ZBUWhCLG9GQUdDO0lBSWxELEFBRFEsaUJBQU0sRUFDUjs7OztJQS9CRCx5Q0FBb0I7SUFDaEIsY0FBd0U7SUFHcEUsQUFEQSxBQURBLEFBREosK0ZBQXdFLDhDQUN4Qiw4Q0FDQSxzQ0FDSjtJQUN4QywwRUFBOEM7SUFHekMsY0FBa0Q7SUFBbEQsd0dBQWtEO0lBT2xELGNBQWlEO0lBQWpELHdHQUFpRDtJQVN4QyxjQUFvQjtJQUFwQix3Q0FBb0I7SUFHcEIsY0FBcUI7SUFBckIseUNBQXFCOzs7SUE3QnBELDhCQUF3RDtJQUVwRCwwRUFBdUQ7SUFnQzNELGlCQUFNOzs7O0lBbENELHlDQUFvQjtJQUVxQixjQUFXO0lBQVgscUNBQVc7O0FEUTdELE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxzQkFBc0I7SUFNMUQsWUFBc0Isa0JBQXNDO1FBQ3hELEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBRFIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUZuRCxjQUFTLEdBQUcsUUFBUSxDQUFDO0lBSTlCLENBQUM7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxTQUFTO1FBQ0wsTUFBTSxJQUFJLEdBQW1CLEVBQUUsQ0FBQztRQUVoQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztZQUNwQixPQUFPO1FBQ1gsQ0FBQztRQUVELElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNaLElBQUksR0FBRyxHQUFHO1lBQ04sSUFBSSxFQUFFLEVBQUU7U0FDSyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFZixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUV4QixJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ3hCLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0JBQ1IsR0FBRyxHQUFHO29CQUNGLElBQUksRUFBRSxFQUFFO2lCQUNLLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkIsQ0FBQztZQUVELEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUNWLEtBQUs7YUFDVyxDQUFDLENBQUM7WUFFdEIsR0FBRyxFQUFFLENBQUM7UUFDVixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQzttSEFoRFEsa0JBQWtCO29FQUFsQixrQkFBa0I7O1lDWC9CLDRCQUFNO1lBQ0YsbUVBQXdEO1lBbUM1RCxpQkFBTzs7WUFuQ3VDLGNBQVk7WUFBWix1Q0FBWTs7O2lGRFU3QyxrQkFBa0I7Y0FMOUIsU0FBUzsyQkFDSSxpQkFBaUI7bURBTWxCLE1BQU07a0JBQWQsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7O2tGQUpHLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCcmVha3BvaW50T2JzZXJ2ZXJ9IGZyb20gJ0Bhbmd1bGFyL2Nkay9sYXlvdXQnO1xuaW1wb3J0IHtGaWVsZH0gZnJvbSAnLi4vLi4vY29tbW9uL3JlY29yZC9maWVsZC5tb2RlbCc7XG5pbXBvcnQge1JlY29yZH0gZnJvbSAnLi4vLi4vY29tbW9uL3JlY29yZC9yZWNvcmQubW9kZWwnO1xuaW1wb3J0IHtGaWVsZEdyaWRDb2x1bW4sIEZpZWxkR3JpZFJvd30gZnJvbSAnLi9maWVsZC1ncmlkLm1vZGVsJztcbmltcG9ydCB7QmFzZUZpZWxkR3JpZENvbXBvbmVudH0gZnJvbSAnLi9iYXNlLWZpZWxkLWdyaWQuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLWZpZWxkLWdyaWQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9maWVsZC1ncmlkLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEZpZWxkR3JpZENvbXBvbmVudCBleHRlbmRzIEJhc2VGaWVsZEdyaWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gICAgQElucHV0KCkgZmllbGRzOiBGaWVsZFtdO1xuICAgIEBJbnB1dCgpIHJlY29yZDogUmVjb3JkO1xuICAgIEBJbnB1dCgpIGZpZWxkTW9kZSA9ICdkZXRhaWwnO1xuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGJyZWFrcG9pbnRPYnNlcnZlcjogQnJlYWtwb2ludE9ic2VydmVyKSB7XG4gICAgICAgIHN1cGVyKGJyZWFrcG9pbnRPYnNlcnZlcik7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYnVpbGRHcmlkKCk7XG4gICAgfVxuXG4gICAgYnVpbGRHcmlkKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBncmlkOiBGaWVsZEdyaWRSb3dbXSA9IFtdO1xuXG4gICAgICAgIGlmICghdGhpcy5maWVsZHMgfHwgdGhpcy5maWVsZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmZpZWxkR3JpZCA9IFtdO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNvbCA9IDA7XG4gICAgICAgIGxldCByb3cgPSB7XG4gICAgICAgICAgICBjb2xzOiBbXVxuICAgICAgICB9IGFzIEZpZWxkR3JpZFJvdztcbiAgICAgICAgZ3JpZC5wdXNoKHJvdyk7XG5cbiAgICAgICAgdGhpcy5maWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XG5cbiAgICAgICAgICAgIGlmIChjb2wgPj0gdGhpcy5jb2xOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICBjb2wgPSAwO1xuICAgICAgICAgICAgICAgIHJvdyA9IHtcbiAgICAgICAgICAgICAgICAgICAgY29sczogW11cbiAgICAgICAgICAgICAgICB9IGFzIEZpZWxkR3JpZFJvdztcbiAgICAgICAgICAgICAgICBncmlkLnB1c2gocm93KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcm93LmNvbHMucHVzaCh7XG4gICAgICAgICAgICAgICAgZmllbGRcbiAgICAgICAgICAgIH0gYXMgRmllbGRHcmlkQ29sdW1uKTtcblxuICAgICAgICAgICAgY29sKys7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYWRkU3BlY2lhbFNsb3RzKGdyaWQpO1xuXG4gICAgICAgIHRoaXMuZmllbGRHcmlkID0gZ3JpZDtcbiAgICB9XG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48Zm9ybT5cbiAgICA8ZGl2IFtuZ0NsYXNzXT1cInJvd0NsYXNzXCIgKm5nRm9yPVwibGV0IHJvdyBvZiBmaWVsZEdyaWRcIj5cblxuICAgICAgICA8ZGl2IFtuZ0NsYXNzXT1cImNvbENsYXNzXCIgKm5nRm9yPVwibGV0IGNvbCBvZiByb3cuY29sc1wiPlxuICAgICAgICAgICAgPGRpdiBbY2xhc3MuYWxpZ24taXRlbXMtY2VudGVyXT1cImxhYmVsRGlzcGxheSA9PT0gJ2lubGluZScgJiYgIWNvbEFsaWduSXRlbXNcIlxuICAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmZsZXgtY29sdW1uXT1cImxhYmVsRGlzcGxheSA9PT0gJ3RvcCdcIlxuICAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmZsZXgtcm93XT1cImxhYmVsRGlzcGxheSA9PT0gJ2lubGluZSdcIlxuICAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmp1c3RpZnktY29udGVudC1lbmRdPVwiIWNvbC5maWVsZFwiXG4gICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJjb2xBbGlnbkl0ZW1zID8gY29sQWxpZ25JdGVtcyA6ICcnXCJcbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZC1mbGV4XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJjb2wuZmllbGQgJiYgY29sLmZpZWxkPy5kaXNwbGF5KCkgIT09ICdub25lJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzLnByLTNdPVwibGFiZWxEaXNwbGF5ID09PSAnaW5saW5lJ1wiID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCAqbmdJZj1cImNvbC5maWVsZC5sYWJlbFwiIFtuZ0NsYXNzXT1cImxhYmVsQ2xhc3NcIj57e2NvbC5maWVsZC5sYWJlbH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWxhYmVsICpuZ0lmPVwiIWNvbC5maWVsZC5sYWJlbCAmJiBjb2wuZmllbGQubGFiZWxLZXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xhYmVsS2V5XT1cImNvbC5maWVsZC5sYWJlbEtleVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJsYWJlbENsYXNzXCI+PC9zY3JtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImNvbC5maWVsZCAmJiBjb2wuZmllbGQ/LmRpc3BsYXkoKSE9PSAnbm9uZSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzcy5mbGV4LWdyb3ctMV09XCJsYWJlbERpc3BsYXkgPT09ICdpbmxpbmUnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1maWVsZCBbZmllbGRdPVwiY29sLmZpZWxkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtrbGFzc109XCJpbnB1dENsYXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFttb2RlXT1cImZpZWxkTW9kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcmVjb3JkXT1cInJlY29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdHlwZV09XCJjb2wuZmllbGQudHlwZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zY3JtLWZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbC5hY3Rpb25TbG90XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbZmllbGQtZ3JpZC1hY3Rpb25zXVwiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb2wuc3BlY2lhbFNsb3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltmaWVsZC1ncmlkLXNwZWNpYWxdXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Zvcm0+XG4iXX0=