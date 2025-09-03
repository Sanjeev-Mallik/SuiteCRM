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
import { Component, Input, signal } from '@angular/core';
import { Router, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { SearchBarModule } from "../../search-bar/search-bar.module";
import { ImageModule } from "../../image/image.module";
import { LabelModule } from "../../label/label.module";
import { AppStateStore } from "../../../store/app-state/app-state.store";
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../../store/app-state/app-state.store";
import * as i3 from "@angular/common";
import * as i4 from "../../image/image.component";
import * as i5 from "../../label/label.component";
function MobileMenuComponent_ng_container_1_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 6);
    i0.ɵɵlistener("click", function MobileMenuComponent_ng_container_1_li_2_Template_li_click_0_listener() { const item_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.navigateRoute(item_r2 == null ? null : item_r2.link == null ? null : item_r2.link.route)); });
    i0.ɵɵelement(1, "scrm-image", 7);
    i0.ɵɵelementStart(2, "a", 8);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("image", item_r2.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r2.link.label);
} }
function MobileMenuComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 4);
    i0.ɵɵtemplate(2, MobileMenuComponent_ng_container_1_li_2_Template, 4, 2, "li", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r2.menuItems());
} }
function MobileMenuComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelement(1, "scrm-label", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵproperty("labelKey", "LBL_MODULE_NOT_FOUND");
} }
export class MobileMenuComponent {
    constructor(router, appStateStore) {
        this.router = router;
        this.appStateStore = appStateStore;
        this.menuItems = signal([]);
    }
    ngOnInit() {
    }
    navigateRoute(route) {
        this.router.navigate([route]).then();
        this.appStateStore.toggleSidebar();
    }
    static { this.ɵfac = function MobileMenuComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MobileMenuComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.AppStateStore)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MobileMenuComponent, selectors: [["scrm-mobile-menu"]], inputs: { menuItems: "menuItems" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 4, vars: 2, consts: [[1, "mobile-menu-container"], [4, "ngIf"], [1, "border-0"], ["class", "d-flex justify-content-center", 4, "ngIf"], [1, "mobile-menu-items", "scrollbar-thin"], ["class", "d-flex align-items-center", 3, "click", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", 3, "click"], [1, "sicon", "mobile-nav-icon", "pl-3", 3, "image"], [1, "flex-grow-1", "mobile-nav-link", "px-3", "py-2", "mobile-menu-item-label"], [1, "d-flex", "justify-content-center"], [3, "labelKey"]], template: function MobileMenuComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, MobileMenuComponent_ng_container_1_Template, 3, 1, "ng-container", 1);
            i0.ɵɵelementStart(2, "li", 2);
            i0.ɵɵtemplate(3, MobileMenuComponent_div_3_Template, 2, 1, "div", 3);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            let tmp_1_0;
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.menuItems() && ctx.menuItems().length);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.menuItems() || !((tmp_1_0 = ctx.menuItems()) == null ? null : tmp_1_0.length));
        } }, dependencies: [CommonModule, i3.NgForOf, i3.NgIf, RouterModule, SearchBarModule, ImageModule, i4.ImageComponent, LabelModule, i5.LabelComponent], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MobileMenuComponent, [{
        type: Component,
        args: [{ selector: 'scrm-mobile-menu', standalone: true, imports: [CommonModule, RouterModule, SearchBarModule, ImageModule, LabelModule], template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2024 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n\n<div class=\"mobile-menu-container\">\n    <ng-container *ngIf=\"menuItems() && menuItems().length\">\n        <div class=\"mobile-menu-items scrollbar-thin\">\n            <li class=\"d-flex align-items-center\" (click)=\"navigateRoute(item?.link?.route)\" *ngFor=\"let item of menuItems()\">\n                <scrm-image class=\"sicon mobile-nav-icon pl-3\" [image]=\"item.icon\"\n               ></scrm-image>\n                <a class=\"flex-grow-1 mobile-nav-link px-3 py-2 mobile-menu-item-label\">{{ item.link.label }}</a>\n            </li>\n        </div>\n    </ng-container>\n\n    <li class=\"border-0\">\n        <div *ngIf=\"!menuItems() || !menuItems()?.length\" class=\"d-flex justify-content-center\">\n            <scrm-label [labelKey]=\"'LBL_MODULE_NOT_FOUND'\"></scrm-label>\n        </div>\n    </li>\n</div>\n\n\n" }]
    }], () => [{ type: i1.Router }, { type: i2.AppStateStore }], { menuItems: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MobileMenuComponent, { className: "MobileMenuComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9iaWxlLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvc2lkZWJhci9tb2JpbGUtbWVudS9tb2JpbGUtbWVudS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9zaWRlYmFyL21vYmlsZS1tZW51L21vYmlsZS1tZW51LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRS9FLE9BQU8sRUFBQyxNQUFNLEVBQUUsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDckQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUNuRSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDckQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3JELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwwQ0FBMEMsQ0FBQzs7Ozs7Ozs7O0lDRjNELDZCQUFrSDtJQUE1RSxvTkFBUywrRkFBZ0MsS0FBQztJQUM1RSxnQ0FDYTtJQUNiLDRCQUF3RTtJQUFBLFlBQXFCO0lBQ2pHLEFBRGlHLGlCQUFJLEVBQ2hHOzs7SUFIOEMsY0FBbUI7SUFBbkIsb0NBQW1CO0lBRU0sZUFBcUI7SUFBckIsd0NBQXFCOzs7SUFMekcsNkJBQXdEO0lBQ3BELDhCQUE4QztJQUMxQyxpRkFBa0g7SUFLdEgsaUJBQU07Ozs7SUFMZ0csZUFBYztJQUFkLDRDQUFjOzs7SUFTcEgsOEJBQXdGO0lBQ3BGLGlDQUE2RDtJQUNqRSxpQkFBTTs7SUFEVSxjQUFtQztJQUFuQyxpREFBbUM7O0FEQzNELE1BQU0sT0FBTyxtQkFBbUI7SUFJNUIsWUFBc0IsTUFBYyxFQUFZLGFBQTRCO1FBQXRELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBWSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUhuRSxjQUFTLEdBQStCLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUk1RCxDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7SUFHRCxhQUFhLENBQUMsS0FBYTtRQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QyxDQUFDO29IQWRRLG1CQUFtQjtvRUFBbkIsbUJBQW1CO1lDZGhDLDhCQUFtQztZQUMvQixzRkFBd0Q7WUFVeEQsNkJBQXFCO1lBQ2pCLG9FQUF3RjtZQUloRyxBQURJLGlCQUFLLEVBQ0g7OztZQWZhLGNBQXVDO1lBQXZDLGdFQUF1QztZQVc1QyxlQUEwQztZQUExQyx5R0FBMEM7NEJEQTFDLFlBQVksdUJBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxXQUFXLHFCQUFFLFdBQVc7O2lGQUV0RSxtQkFBbUI7Y0FQL0IsU0FBUzsyQkFDSSxrQkFBa0IsY0FHaEIsSUFBSSxXQUNQLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQzttRUFHdkUsU0FBUztrQkFBakIsS0FBSzs7a0ZBREcsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjQgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgc2lnbmFsLCBXcml0YWJsZVNpZ25hbH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01lbnVJdGVtfSBmcm9tICcuLi8uLi8uLi9jb21tb24vbWVudS9tZW51Lm1vZGVsJztcbmltcG9ydCB7Um91dGVyLCBSb3V0ZXJNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQge1NlYXJjaEJhck1vZHVsZX0gZnJvbSBcIi4uLy4uL3NlYXJjaC1iYXIvc2VhcmNoLWJhci5tb2R1bGVcIjtcbmltcG9ydCB7SW1hZ2VNb2R1bGV9IGZyb20gXCIuLi8uLi9pbWFnZS9pbWFnZS5tb2R1bGVcIjtcbmltcG9ydCB7TGFiZWxNb2R1bGV9IGZyb20gXCIuLi8uLi9sYWJlbC9sYWJlbC5tb2R1bGVcIjtcbmltcG9ydCB7QXBwU3RhdGVTdG9yZX0gZnJvbSBcIi4uLy4uLy4uL3N0b3JlL2FwcC1zdGF0ZS9hcHAtc3RhdGUuc3RvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLW1vYmlsZS1tZW51JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbW9iaWxlLW1lbnUuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW10sXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBSb3V0ZXJNb2R1bGUsIFNlYXJjaEJhck1vZHVsZSwgSW1hZ2VNb2R1bGUsIExhYmVsTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBNb2JpbGVNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoKSBtZW51SXRlbXM6IFdyaXRhYmxlU2lnbmFsPE1lbnVJdGVtW10+ID0gc2lnbmFsKFtdKTtcblxuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIHJvdXRlcjogUm91dGVyLCBwcm90ZWN0ZWQgYXBwU3RhdGVTdG9yZTogQXBwU3RhdGVTdG9yZSkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIH1cblxuXG4gICAgbmF2aWdhdGVSb3V0ZShyb3V0ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtyb3V0ZV0pLnRoZW4oKTtcbiAgICAgICAgdGhpcy5hcHBTdGF0ZVN0b3JlLnRvZ2dsZVNpZGViYXIoKTtcbiAgICB9XG5cblxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyNCBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuXG48ZGl2IGNsYXNzPVwibW9iaWxlLW1lbnUtY29udGFpbmVyXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm1lbnVJdGVtcygpICYmIG1lbnVJdGVtcygpLmxlbmd0aFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9iaWxlLW1lbnUtaXRlbXMgc2Nyb2xsYmFyLXRoaW5cIj5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIiAoY2xpY2spPVwibmF2aWdhdGVSb3V0ZShpdGVtPy5saW5rPy5yb3V0ZSlcIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBtZW51SXRlbXMoKVwiPlxuICAgICAgICAgICAgICAgIDxzY3JtLWltYWdlIGNsYXNzPVwic2ljb24gbW9iaWxlLW5hdi1pY29uIHBsLTNcIiBbaW1hZ2VdPVwiaXRlbS5pY29uXCJcbiAgICAgICAgICAgICAgID48L3Njcm0taW1hZ2U+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJmbGV4LWdyb3ctMSBtb2JpbGUtbmF2LWxpbmsgcHgtMyBweS0yIG1vYmlsZS1tZW51LWl0ZW0tbGFiZWxcIj57eyBpdGVtLmxpbmsubGFiZWwgfX08L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgIDxsaSBjbGFzcz1cImJvcmRlci0wXCI+XG4gICAgICAgIDxkaXYgKm5nSWY9XCIhbWVudUl0ZW1zKCkgfHwgIW1lbnVJdGVtcygpPy5sZW5ndGhcIiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICA8c2NybS1sYWJlbCBbbGFiZWxLZXldPVwiJ0xCTF9NT0RVTEVfTk9UX0ZPVU5EJ1wiPjwvc2NybS1sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9saT5cbjwvZGl2PlxuXG5cbiJdfQ==