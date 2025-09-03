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
import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../image/image.component";
import * as i3 from "@ng-bootstrap/ng-bootstrap";
const _c0 = ["*"];
function DropdownSubmenuComponent_scrm_image_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-image", 5);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("image", ctx_r0.item.icon);
} }
function DropdownSubmenuComponent_div_5_li_2_scrm_image_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-image", 5);
} if (rf & 2) {
    const subItem_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("image", subItem_r3.icon);
} }
function DropdownSubmenuComponent_div_5_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 9)(1, "a", 10);
    i0.ɵɵlistener("click", function DropdownSubmenuComponent_div_5_li_2_Template_a_click_1_listener() { const subItem_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.click(subItem_r3)); });
    i0.ɵɵtemplate(2, DropdownSubmenuComponent_div_5_li_2_scrm_image_2_Template, 1, 1, "scrm-image", 2);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const subItem_r3 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", subItem_r3 && subItem_r3.klass);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", subItem_r3.icon);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", subItem_r3 && subItem_r3.label, " ");
} }
function DropdownSubmenuComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "ul", 7);
    i0.ɵɵtemplate(2, DropdownSubmenuComponent_div_5_li_2_Template, 4, 3, "li", 8);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngbCollapse", ctx_r0.isCollapsed);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.item.items);
} }
export class DropdownSubmenuComponent {
    constructor() {
        this.itemClicked = new EventEmitter();
        this.isCollapsed = true;
    }
    ngOnInit() {
    }
    click(item) {
        if (item && item.onClick) {
            item.onClick();
        }
        this.itemClicked.emit(true);
    }
    static { this.ɵfac = function DropdownSubmenuComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DropdownSubmenuComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DropdownSubmenuComponent, selectors: [["scrm-dropdown-submenu"]], inputs: { item: "item" }, outputs: { itemClicked: "item-clicked" }, ngContentSelectors: _c0, decls: 8, vars: 3, consts: [[1, "dropdown-submenu-items-container"], [1, "dropdown-submenu-parent-button", "dropdown-item", "dropdown-toggle", 3, "click"], [3, "image", 4, "ngIf"], [3, "ngbCollapse", 4, "ngIf"], [1, "dropdown-submenu-extra"], [3, "image"], [3, "ngbCollapse"], [1, "dropdown-submenu", "pl-2", "mb-1"], ["class", "dropdown-submenu-item dropdown-item", 4, "ngFor", "ngForOf"], [1, "dropdown-submenu-item", "dropdown-item"], [1, "action-link", "dropdown-submenu-item-link", 3, "click", "ngClass"]], template: function DropdownSubmenuComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div")(1, "div", 0)(2, "a", 1);
            i0.ɵɵlistener("click", function DropdownSubmenuComponent_Template_a_click_2_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
            i0.ɵɵtemplate(3, DropdownSubmenuComponent_scrm_image_3_Template, 1, 1, "scrm-image", 2);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, DropdownSubmenuComponent_div_5_Template, 3, 2, "div", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 4);
            i0.ɵɵprojection(7);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.item && ctx.item.icon);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.item && ctx.item.label, " ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.item && ctx.item.items.length);
        } }, dependencies: [i1.NgClass, i1.NgForOf, i1.NgIf, i2.ImageComponent, i3.NgbCollapse], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DropdownSubmenuComponent, [{
        type: Component,
        args: [{ selector: 'scrm-dropdown-submenu', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div>\n    <div class=\"dropdown-submenu-items-container\">\n        <a (click)=\"isCollapsed = !isCollapsed\"\n           class=\"dropdown-submenu-parent-button dropdown-item dropdown-toggle\"\n        >\n            <scrm-image *ngIf=\"item && item.icon\" [image]=\"item.icon\"></scrm-image>\n            {{item && item.label}}\n        </a>\n        <div *ngIf=\"item && item.items.length\" [ngbCollapse]=\"isCollapsed\">\n            <ul class=\"dropdown-submenu pl-2 mb-1\">\n\n                <li *ngFor=\"let subItem of item.items\" class=\"dropdown-submenu-item dropdown-item\">\n\n                    <a class=\"action-link dropdown-submenu-item-link\"\n                       [ngClass]=\"subItem && subItem.klass\"\n                       (click)=\"click(subItem)\">\n                        <scrm-image *ngIf=\"subItem.icon\" [image]=\"subItem.icon\"></scrm-image>\n                        {{subItem && subItem.label}}\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"dropdown-submenu-extra\">\n        <ng-content></ng-content>\n    </div>\n</div>\n" }]
    }], () => [], { item: [{
            type: Input
        }], itemClicked: [{
            type: Output,
            args: ['item-clicked']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DropdownSubmenuComponent, { className: "DropdownSubmenuComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tc3VibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9kcm9wZG93bi1zdWJtZW51L2Ryb3Bkb3duLXN1Ym1lbnUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvZHJvcGRvd24tc3VibWVudS9kcm9wZG93bi1zdWJtZW51LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0lDTWpFLGdDQUF1RTs7O0lBQWpDLHdDQUFtQjs7O0lBVzdDLGdDQUFxRTs7O0lBQXBDLHVDQUFzQjs7OztJQUgzRCxBQUZKLDZCQUFtRixZQUluRDtJQUF6QixrTkFBUyx3QkFBYyxLQUFDO0lBQ3ZCLGtHQUF3RDtJQUN4RCxZQUNKO0lBQ0osQUFESSxpQkFBSSxFQUNIOzs7SUFMRSxjQUFvQztJQUFwQyx3REFBb0M7SUFFdEIsY0FBa0I7SUFBbEIsc0NBQWtCO0lBQy9CLGNBQ0o7SUFESSwrREFDSjs7O0lBVFIsQUFESiw4QkFBbUUsWUFDeEI7SUFFbkMsNkVBQW1GO0lBVTNGLEFBREksaUJBQUssRUFDSDs7O0lBYmlDLGdEQUEyQjtJQUdsQyxlQUFhO0lBQWIsMkNBQWE7O0FESnJELE1BQU0sT0FBTyx3QkFBd0I7SUFLakM7UUFId0IsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBQ2xFLGdCQUFXLEdBQUcsSUFBSSxDQUFDO0lBR25CLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVELEtBQUssQ0FBQyxJQUF3QjtRQUUxQixJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ25CLENBQUM7UUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO3lIQWxCUSx3QkFBd0I7b0VBQXhCLHdCQUF3Qjs7WUNMN0IsQUFESixBQURKLDJCQUFLLGFBQzZDLFdBR3pDO1lBRkUsc0lBQW9DO1lBR25DLHVGQUEwRDtZQUMxRCxZQUNKO1lBQUEsaUJBQUk7WUFDSix5RUFBbUU7WUFjdkUsaUJBQU07WUFDTiw4QkFBb0M7WUFDaEMsa0JBQXlCO1lBRWpDLEFBREksaUJBQU0sRUFDSjs7WUFyQm1CLGVBQXVCO1lBQXZCLGdEQUF1QjtZQUNwQyxjQUNKO1lBREksMkRBQ0o7WUFDTSxjQUErQjtZQUEvQix3REFBK0I7OztpRkREaEMsd0JBQXdCO2NBTHBDLFNBQVM7MkJBQ0ksdUJBQXVCO29CQUt4QixJQUFJO2tCQUFaLEtBQUs7WUFDa0IsV0FBVztrQkFBbEMsTUFBTTttQkFBQyxjQUFjOztrRkFGYix3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Ryb3Bkb3duQnV0dG9uSW50ZXJmYWNlLCBBbnlCdXR0b25JbnRlcmZhY2V9IGZyb20gJy4uLy4uL2NvbW1vbi9jb21wb25lbnRzL2J1dHRvbi9kcm9wZG93bi1idXR0b24ubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tZHJvcGRvd24tc3VibWVudScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Ryb3Bkb3duLXN1Ym1lbnUuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgRHJvcGRvd25TdWJtZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoKSBpdGVtOiBEcm9wZG93bkJ1dHRvbkludGVyZmFjZTtcbiAgICBAT3V0cHV0KCdpdGVtLWNsaWNrZWQnKSBpdGVtQ2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgICBpc0NvbGxhcHNlZCA9IHRydWU7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBjbGljayhpdGVtOiBBbnlCdXR0b25JbnRlcmZhY2UpOiB2b2lkIHtcblxuICAgICAgICBpZiAoaXRlbSAmJiBpdGVtLm9uQ2xpY2spIHtcbiAgICAgICAgICAgIGl0ZW0ub25DbGljaygpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pdGVtQ2xpY2tlZC5lbWl0KHRydWUpO1xuICAgIH1cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjxkaXY+XG4gICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLXN1Ym1lbnUtaXRlbXMtY29udGFpbmVyXCI+XG4gICAgICAgIDxhIChjbGljayk9XCJpc0NvbGxhcHNlZCA9ICFpc0NvbGxhcHNlZFwiXG4gICAgICAgICAgIGNsYXNzPVwiZHJvcGRvd24tc3VibWVudS1wYXJlbnQtYnV0dG9uIGRyb3Bkb3duLWl0ZW0gZHJvcGRvd24tdG9nZ2xlXCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPHNjcm0taW1hZ2UgKm5nSWY9XCJpdGVtICYmIGl0ZW0uaWNvblwiIFtpbWFnZV09XCJpdGVtLmljb25cIj48L3Njcm0taW1hZ2U+XG4gICAgICAgICAgICB7e2l0ZW0gJiYgaXRlbS5sYWJlbH19XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGRpdiAqbmdJZj1cIml0ZW0gJiYgaXRlbS5pdGVtcy5sZW5ndGhcIiBbbmdiQ29sbGFwc2VdPVwiaXNDb2xsYXBzZWRcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzcz1cImRyb3Bkb3duLXN1Ym1lbnUgcGwtMiBtYi0xXCI+XG5cbiAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IHN1Ykl0ZW0gb2YgaXRlbS5pdGVtc1wiIGNsYXNzPVwiZHJvcGRvd24tc3VibWVudS1pdGVtIGRyb3Bkb3duLWl0ZW1cIj5cblxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImFjdGlvbi1saW5rIGRyb3Bkb3duLXN1Ym1lbnUtaXRlbS1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwic3ViSXRlbSAmJiBzdWJJdGVtLmtsYXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImNsaWNrKHN1Ykl0ZW0pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1pbWFnZSAqbmdJZj1cInN1Ykl0ZW0uaWNvblwiIFtpbWFnZV09XCJzdWJJdGVtLmljb25cIj48L3Njcm0taW1hZ2U+XG4gICAgICAgICAgICAgICAgICAgICAgICB7e3N1Ykl0ZW0gJiYgc3ViSXRlbS5sYWJlbH19XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLXN1Ym1lbnUtZXh0cmFcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuPC9kaXY+XG4iXX0=