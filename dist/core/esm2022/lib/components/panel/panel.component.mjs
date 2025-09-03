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
import { Button } from '../../common/components/button/button.model';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../close-button/close-button.component";
import * as i3 from "@ng-bootstrap/ng-bootstrap";
import * as i4 from "../minimise-button/minimise-button.component";
import * as i5 from "../label/label.component";
const _c0 = [[["", "panel-body", ""]], [["", "panel-icon-area", ""]], [["", "panel-status-area", ""]], [["", "panel-header-button", ""]]];
const _c1 = ["[panel-body]", "[panel-icon-area]", "[panel-status-area]", "[panel-header-button]"];
function PanelComponent_div_1_scrm_close_button_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-close-button", 11);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("config", ctx_r0.getCloseButton());
} }
function PanelComponent_div_1_scrm_minimise_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-minimise-button", 12);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("config", ctx_r0.minimiseButton)("status", ctx_r0.minimiseStatus);
} }
function PanelComponent_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13)(1, "div", 14);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.title);
} }
function PanelComponent_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵelement(1, "scrm-label", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("labelKey", ctx_r0.titleKey);
} }
function PanelComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
    i0.ɵɵtemplate(3, PanelComponent_div_1_scrm_close_button_3_Template, 1, 1, "scrm-close-button", 5)(4, PanelComponent_div_1_scrm_minimise_button_4_Template, 1, 2, "scrm-minimise-button", 6);
    i0.ɵɵprojection(5, 1);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, PanelComponent_div_1_div_6_Template, 3, 1, "div", 7)(7, PanelComponent_div_1_div_7_Template, 2, 1, "div", 8);
    i0.ɵɵelementStart(8, "div", 9);
    i0.ɵɵprojection(9, 2);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 10);
    i0.ɵɵprojection(11, 3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.isClosable());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isCollapsible());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.title);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.titleKey);
} }
export class PanelComponent {
    constructor() {
        this.klass = '';
        this.bodyPadding = 2;
        this.mode = 'closable';
        this.close = {
            klass: ['btn', 'btn-outline-light', 'btn-sm']
        };
        this.showHeader = true;
        this.isCollapsed = false;
        this.buttonClasses = ['btn', 'btn-outline-light', 'btn-sm'];
        this.subs = [];
    }
    ngOnInit() {
        if (this.isCollapsed$) {
            this.subs.push(this.isCollapsed$.subscribe(collapse => {
                this.isCollapsed = collapse;
                this.initMinimiseButton();
            }));
        }
        this.initMinimiseButton();
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    getCloseButton() {
        if (!this.close) {
            return null;
        }
        const btn = Button.fromButton(this.close);
        btn.addClasses(this.buttonClasses);
        this.close = btn;
        return btn;
    }
    isClosable() {
        return this.mode === 'closable';
    }
    isCollapsible() {
        return this.mode === 'collapsible';
    }
    initMinimiseButton() {
        this.minimiseButton = {
            klass: ['btn', 'btn-outline-light', 'btn-sm'],
            onClick: () => {
                this.isCollapsed = !this.isCollapsed;
                this.initMinimiseStatus();
            },
        };
        this.initMinimiseStatus();
    }
    initMinimiseStatus() {
        if (this.isCollapsed) {
            this.minimiseStatus = 'minimised';
            return;
        }
        this.minimiseStatus = 'maximised';
    }
    static { this.ɵfac = function PanelComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PanelComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PanelComponent, selectors: [["scrm-panel"]], inputs: { klass: "klass", bodyPadding: "bodyPadding", title: "title", titleKey: "titleKey", mode: "mode", isCollapsed$: "isCollapsed$", close: "close", showHeader: "showHeader" }, ngContentSelectors: _c1, decls: 4, vars: 10, consts: [["class", "card-header d-flex justify-content-between align-items-center", 4, "ngIf"], [3, "ngbCollapse"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "flex-grow-1", "align-items-center", "d-flex"], [1, "d-flex", "align-items-center"], [3, "config", 4, "ngIf"], [3, "config", "status", 4, "ngIf"], ["class", "pl-1 panel-title d-inline-block align-items-center", 4, "ngIf"], ["class", "pl-1 panel-title", 4, "ngIf"], [1, "pl-1"], [1, "panel-buttons", "float-right"], [3, "config"], [3, "config", "status"], [1, "pl-1", "panel-title", "d-inline-block", "align-items-center"], [1, "lh-100"], [1, "pl-1", "panel-title"], [3, "labelKey"]], template: function PanelComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵtemplate(1, PanelComponent_div_1_Template, 12, 4, "div", 0);
            i0.ɵɵelementStart(2, "div", 1);
            i0.ɵɵprojection(3);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵclassMapInterpolate1("card panel-card ", ctx.klass, "");
            i0.ɵɵclassProp("collapsed", ctx.isCollapsed);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showHeader);
            i0.ɵɵadvance();
            i0.ɵɵclassMapInterpolate1("card-body p-", ctx.bodyPadding, "");
            i0.ɵɵproperty("ngbCollapse", ctx.isCollapsed);
        } }, dependencies: [i1.NgIf, i2.CloseButtonComponent, i3.NgbCollapse, i4.MinimiseButtonComponent, i5.LabelComponent], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PanelComponent, [{
        type: Component,
        args: [{ selector: 'scrm-panel', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div [class.collapsed]=\"isCollapsed\" class=\"card panel-card {{klass}}\">\n\n    <div *ngIf=\"showHeader\" class=\"card-header d-flex justify-content-between align-items-center\">\n\n        <div class=\"flex-grow-1 align-items-center d-flex\">\n\n            <div class=\"d-flex align-items-center\">\n                <scrm-close-button *ngIf=\"isClosable()\" [config]=\"getCloseButton()\"></scrm-close-button>\n                <scrm-minimise-button *ngIf=\"isCollapsible()\"\n                                      [config]=\"minimiseButton\"\n                                      [status]=\"minimiseStatus\">\n                </scrm-minimise-button>\n                <ng-content select=\"[panel-icon-area]\"></ng-content>\n            </div>\n\n            <div *ngIf=\"title\" class=\"pl-1 panel-title d-inline-block align-items-center\"><div class=\"lh-100\">{{title}}</div></div>\n            <div *ngIf=\"titleKey\" class=\"pl-1 panel-title\">\n                <scrm-label [labelKey]=\"titleKey\"></scrm-label>\n            </div>\n            <div class=\"pl-1\">\n                <ng-content select=\"[panel-status-area]\"></ng-content>\n            </div>\n        </div>\n\n\n        <div class=\"panel-buttons float-right\">\n            <ng-content select=\"[panel-header-button]\"></ng-content>\n        </div>\n    </div>\n\n    <div class=\"card-body p-{{bodyPadding}}\" [ngbCollapse]=\"isCollapsed\">\n        <ng-content select=\"[panel-body]\"></ng-content>\n    </div>\n</div>\n" }]
    }], () => [], { klass: [{
            type: Input
        }], bodyPadding: [{
            type: Input
        }], title: [{
            type: Input
        }], titleKey: [{
            type: Input
        }], mode: [{
            type: Input
        }], isCollapsed$: [{
            type: Input
        }], close: [{
            type: Input
        }], showHeader: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PanelComponent, { className: "PanelComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvcGFuZWwvcGFuZWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvcGFuZWwvcGFuZWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUNsRSxPQUFPLEVBQUMsTUFBTSxFQUFrQixNQUFNLDZDQUE2QyxDQUFDO0FBQ3BGLE9BQU8sRUFBQyxVQUFVLEVBQWUsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7Ozs7SUNNOUIsd0NBQXdGOzs7SUFBaEQsZ0RBQTJCOzs7SUFDbkUsMkNBR3VCOzs7SUFERCxBQURBLDhDQUF5QixpQ0FDQTs7O0lBSzJCLEFBQTlFLCtCQUE4RSxjQUFvQjtJQUFBLFlBQVM7SUFBTSxBQUFOLGlCQUFNLEVBQU07OztJQUFyQixlQUFTO0lBQVQsa0NBQVM7OztJQUMzRywrQkFBK0M7SUFDM0MsaUNBQStDO0lBQ25ELGlCQUFNOzs7SUFEVSxjQUFxQjtJQUFyQiwwQ0FBcUI7OztJQVhyQyxBQUZKLEFBRkosOEJBQThGLGFBRXZDLGFBRVI7SUFFbkMsQUFEQSxpR0FBb0UsMEZBR3BCO0lBRWhELHFCQUFvRDtJQUN4RCxpQkFBTTtJQUdOLEFBREEscUVBQThFLHdEQUMvQjtJQUcvQyw4QkFBa0I7SUFDZCxxQkFBc0Q7SUFFOUQsQUFESSxpQkFBTSxFQUNKO0lBR04sZ0NBQXVDO0lBQ25DLHNCQUF3RDtJQUVoRSxBQURJLGlCQUFNLEVBQ0o7OztJQXJCMEIsZUFBa0I7SUFBbEIsMENBQWtCO0lBQ2YsY0FBcUI7SUFBckIsNkNBQXFC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QUs7a0JBQWIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUdHLFVBQVU7a0JBQWxCLEtBQUs7O2tGQVhHLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCdXR0b24sIEJ1dHRvbkludGVyZmFjZX0gZnJvbSAnLi4vLi4vY29tbW9uL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5tb2RlbCc7XG5pbXBvcnQge09ic2VydmFibGUsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge01pbmltaXNlQnV0dG9uU3RhdHVzfSBmcm9tICcuLi9taW5pbWlzZS1idXR0b24vbWluaW1pc2UtYnV0dG9uLmNvbXBvbmVudCc7XG5cbmV4cG9ydCB0eXBlIFBhbmVsQ29sbGFwc2VNb2RlID0gJ2NvbGxhcHNpYmxlJyB8ICdjbG9zYWJsZScgfCAnbm9uZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1wYW5lbCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3BhbmVsLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgQElucHV0KCkga2xhc3MgPSAnJztcbiAgICBASW5wdXQoKSBib2R5UGFkZGluZyA9IDI7XG4gICAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgICBASW5wdXQoKSB0aXRsZUtleTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIG1vZGU6IFBhbmVsQ29sbGFwc2VNb2RlID0gJ2Nsb3NhYmxlJztcbiAgICBASW5wdXQoKSBpc0NvbGxhcHNlZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgQElucHV0KCkgY2xvc2U6IEJ1dHRvbkludGVyZmFjZSA9IHtcbiAgICAgICAga2xhc3M6IFsnYnRuJywgJ2J0bi1vdXRsaW5lLWxpZ2h0JywgJ2J0bi1zbSddXG4gICAgfSBhcyBCdXR0b25JbnRlcmZhY2U7XG4gICAgQElucHV0KCkgc2hvd0hlYWRlciA9IHRydWU7XG5cbiAgICBpc0NvbGxhcHNlZCA9IGZhbHNlO1xuICAgIG1pbmltaXNlQnV0dG9uOiBCdXR0b25JbnRlcmZhY2U7XG4gICAgbWluaW1pc2VTdGF0dXM6IE1pbmltaXNlQnV0dG9uU3RhdHVzO1xuXG4gICAgcHJvdGVjdGVkIGJ1dHRvbkNsYXNzZXMgPSBbJ2J0bicsICdidG4tb3V0bGluZS1saWdodCcsICdidG4tc20nXTtcbiAgICBwcm90ZWN0ZWQgc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5pc0NvbGxhcHNlZCQpIHtcbiAgICAgICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMuaXNDb2xsYXBzZWQkLnN1YnNjcmliZShjb2xsYXBzZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0NvbGxhcHNlZCA9IGNvbGxhcHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdE1pbmltaXNlQnV0dG9uKCk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbml0TWluaW1pc2VCdXR0b24oKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdWJzLmZvckVhY2goc3ViID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcbiAgICB9XG5cbiAgICBnZXRDbG9zZUJ1dHRvbigpOiBCdXR0b25JbnRlcmZhY2Uge1xuICAgICAgICBpZiAoIXRoaXMuY2xvc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYnRuID0gQnV0dG9uLmZyb21CdXR0b24odGhpcy5jbG9zZSk7XG4gICAgICAgIGJ0bi5hZGRDbGFzc2VzKHRoaXMuYnV0dG9uQ2xhc3Nlcyk7XG5cbiAgICAgICAgdGhpcy5jbG9zZSA9IGJ0bjtcblxuICAgICAgICByZXR1cm4gYnRuO1xuICAgIH1cblxuICAgIGlzQ2xvc2FibGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGUgPT09ICdjbG9zYWJsZSc7XG4gICAgfVxuXG4gICAgaXNDb2xsYXBzaWJsZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZSA9PT0gJ2NvbGxhcHNpYmxlJztcbiAgICB9XG5cbiAgICBpbml0TWluaW1pc2VCdXR0b24oKTogdm9pZCB7XG4gICAgICAgIHRoaXMubWluaW1pc2VCdXR0b24gPSB7XG4gICAgICAgICAgICBrbGFzczogWydidG4nLCAnYnRuLW91dGxpbmUtbGlnaHQnLCAnYnRuLXNtJ10sXG4gICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0NvbGxhcHNlZCA9ICF0aGlzLmlzQ29sbGFwc2VkO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdE1pbmltaXNlU3RhdHVzKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9IGFzIEJ1dHRvbkludGVyZmFjZTtcbiAgICAgICAgdGhpcy5pbml0TWluaW1pc2VTdGF0dXMoKTtcbiAgICB9XG5cbiAgICBpbml0TWluaW1pc2VTdGF0dXMoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmlzQ29sbGFwc2VkKSB7XG4gICAgICAgICAgICB0aGlzLm1pbmltaXNlU3RhdHVzID0gJ21pbmltaXNlZCc7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5taW5pbWlzZVN0YXR1cyA9ICdtYXhpbWlzZWQnO1xuICAgIH1cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjxkaXYgW2NsYXNzLmNvbGxhcHNlZF09XCJpc0NvbGxhcHNlZFwiIGNsYXNzPVwiY2FyZCBwYW5lbC1jYXJkIHt7a2xhc3N9fVwiPlxuXG4gICAgPGRpdiAqbmdJZj1cInNob3dIZWFkZXJcIiBjbGFzcz1cImNhcmQtaGVhZGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1ncm93LTEgYWxpZ24taXRlbXMtY2VudGVyIGQtZmxleFwiPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxzY3JtLWNsb3NlLWJ1dHRvbiAqbmdJZj1cImlzQ2xvc2FibGUoKVwiIFtjb25maWddPVwiZ2V0Q2xvc2VCdXR0b24oKVwiPjwvc2NybS1jbG9zZS1idXR0b24+XG4gICAgICAgICAgICAgICAgPHNjcm0tbWluaW1pc2UtYnV0dG9uICpuZ0lmPVwiaXNDb2xsYXBzaWJsZSgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbmZpZ109XCJtaW5pbWlzZUJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzdGF0dXNdPVwibWluaW1pc2VTdGF0dXNcIj5cbiAgICAgICAgICAgICAgICA8L3Njcm0tbWluaW1pc2UtYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltwYW5lbC1pY29uLWFyZWFdXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJ0aXRsZVwiIGNsYXNzPVwicGwtMSBwYW5lbC10aXRsZSBkLWlubGluZS1ibG9jayBhbGlnbi1pdGVtcy1jZW50ZXJcIj48ZGl2IGNsYXNzPVwibGgtMTAwXCI+e3t0aXRsZX19PC9kaXY+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwidGl0bGVLZXlcIiBjbGFzcz1cInBsLTEgcGFuZWwtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICA8c2NybS1sYWJlbCBbbGFiZWxLZXldPVwidGl0bGVLZXlcIj48L3Njcm0tbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbC0xXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3BhbmVsLXN0YXR1cy1hcmVhXVwiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1idXR0b25zIGZsb2F0LXJpZ2h0XCI+XG4gICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbcGFuZWwtaGVhZGVyLWJ1dHRvbl1cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keSBwLXt7Ym9keVBhZGRpbmd9fVwiIFtuZ2JDb2xsYXBzZV09XCJpc0NvbGxhcHNlZFwiPlxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbcGFuZWwtYm9keV1cIj48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==