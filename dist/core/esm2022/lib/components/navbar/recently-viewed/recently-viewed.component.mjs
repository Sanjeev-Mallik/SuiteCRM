/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2023 SalesAgility Ltd.
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
import { ChangeDetectionStrategy, Component, computed, Input, signal } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ImageModule } from "../../image/image.module";
import { RouterLink } from "@angular/router";
import { ModuleNameMapper } from "../../../services/navigation/module-name-mapper/module-name-mapper.service";
import { ModuleNavigation } from "../../../services/navigation/module-navigation/module-navigation.service";
import { LabelModule } from "../../label/label.module";
import * as i0 from "@angular/core";
import * as i1 from "../../../services/navigation/module-name-mapper/module-name-mapper.service";
import * as i2 from "../../../services/navigation/module-navigation/module-navigation.service";
import * as i3 from "@angular/common";
import * as i4 from "../../image/image.component";
import * as i5 from "../../label/label.component";
function RecentlyViewedComponent_ng_container_0_li_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 4)(1, "a", 5);
    i0.ɵɵelement(2, "scrm-image", 6);
    i0.ɵɵelementStart(3, "div", 7)(4, "span", 8);
    i0.ɵɵelement(5, "scrm-label", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 10);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", item_r1.attributes == null ? null : item_r1.attributes.route);
    i0.ɵɵadvance();
    i0.ɵɵproperty("image", item_r1 == null ? null : item_r1.attributes == null ? null : item_r1.attributes.module_name);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("labelKey", item_r1 == null ? null : item_r1.attributes == null ? null : item_r1.attributes.module_name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r1 == null ? null : item_r1.attributes == null ? null : item_r1.attributes.item_summary);
} }
function RecentlyViewedComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "ul", 2);
    i0.ɵɵtemplate(2, RecentlyViewedComponent_ng_container_0_li_2_Template, 8, 4, "li", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.itemWithRoutes());
} }
function RecentlyViewedComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h6", 11);
    i0.ɵɵelement(1, "scrm-label", 12);
    i0.ɵɵelementEnd();
} }
export class RecentlyViewedComponent {
    set menuItems(value) {
        this._menuItems.set(value);
    }
    constructor(nameMapper, navigation) {
        this.nameMapper = nameMapper;
        this.navigation = navigation;
        this._menuItems = signal([]);
        this.itemWithRoutes = computed(() => this._menuItems().map(item => {
            if (item.attributes?.route) {
                return item;
            }
            return {
                ...item,
                attributes: {
                    ...item.attributes,
                    route: this.buildRoute(item)
                }
            };
        }));
    }
    /**
     * Build route from recently viewed item
     * @param item
     */
    buildRoute(item) {
        const legacyName = item.attributes.module_name ?? '';
        const module = this.nameMapper.toFrontend(legacyName) ?? '';
        const id = item.attributes.item_id ?? '';
        return this.navigation.getRecordRouterLink(module, id);
    }
    static { this.ɵfac = function RecentlyViewedComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RecentlyViewedComponent)(i0.ɵɵdirectiveInject(i1.ModuleNameMapper), i0.ɵɵdirectiveInject(i2.ModuleNavigation)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RecentlyViewedComponent, selectors: [["scrm-recently-viewed"]], inputs: { menuItems: "menuItems" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 3, vars: 2, consts: [["noItems", ""], [4, "ngIf", "ngIfElse"], [1, "p-0", "mb-0"], ["class", "recently-viewed-header d-flex", 4, "ngFor", "ngForOf"], [1, "recently-viewed-header", "d-flex"], [1, "new-list-item", "d-flex", 3, "routerLink"], [1, "action-btn-icon", "mr-3", 3, "image"], [1, "d-flex", "flex-column"], [1, "text-title", "text-uppercase"], ["listKey", "moduleList", 3, "labelKey"], [1, "text-subtitle"], [1, "d-flex", "justify-content-center", "pt-3", "pb-2"], ["labelKey", "LBL_LAST_VIEWED_NO_RESULT"]], template: function RecentlyViewedComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, RecentlyViewedComponent_ng_container_0_Template, 3, 1, "ng-container", 1)(1, RecentlyViewedComponent_ng_template_1_Template, 2, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            const noItems_r3 = i0.ɵɵreference(2);
            i0.ɵɵproperty("ngIf", ctx.itemWithRoutes() && ctx.itemWithRoutes().length)("ngIfElse", noItems_r3);
        } }, dependencies: [CommonModule, i3.NgForOf, i3.NgIf, ImageModule, i4.ImageComponent, RouterLink, LabelModule, i5.LabelComponent], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecentlyViewedComponent, [{
        type: Component,
        args: [{ selector: 'scrm-recently-viewed', standalone: true, imports: [CommonModule, ImageModule, RouterLink, LabelModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2023 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container *ngIf=\"itemWithRoutes() && itemWithRoutes().length; else noItems\">\n    <ul class=\"p-0 mb-0\">\n        <li *ngFor=\"let item of itemWithRoutes();\" class=\"recently-viewed-header d-flex\">\n            <a class=\"new-list-item d-flex\" [routerLink]=\"item.attributes?.route\">\n                <scrm-image class=\"action-btn-icon mr-3\" [image]=\"item?.attributes?.module_name\"></scrm-image>\n                <div class=\"d-flex flex-column\">\n                <span class=\"text-title text-uppercase\">\n                    <scrm-label listKey=\"moduleList\" [labelKey]=\"item?.attributes?.module_name\"></scrm-label>\n                </span>\n                    <span class=\"text-subtitle\">{{ item?.attributes?.item_summary }}</span>\n                </div>\n            </a>\n        </li>\n    </ul>\n</ng-container>\n<ng-template #noItems>\n    <h6 class=\"d-flex justify-content-center pt-3 pb-2\">\n        <scrm-label labelKey=\"LBL_LAST_VIEWED_NO_RESULT\"></scrm-label>\n    </h6>\n</ng-template>\n\n\n\n" }]
    }], () => [{ type: i1.ModuleNameMapper }, { type: i2.ModuleNavigation }], { menuItems: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RecentlyViewedComponent, { className: "RecentlyViewedComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjZW50bHktdmlld2VkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb21wb25lbnRzL25hdmJhci9yZWNlbnRseS12aWV3ZWQvcmVjZW50bHktdmlld2VkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb21wb25lbnRzL25hdmJhci9yZWNlbnRseS12aWV3ZWQvcmVjZW50bHktdmlld2VkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzFGLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDckQsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDRFQUE0RSxDQUFDO0FBQzVHLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDBFQUEwRSxDQUFDO0FBRTFHLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7Ozs7SUNIekMsQUFESiw2QkFBaUYsV0FDUDtJQUNsRSxnQ0FBOEY7SUFFOUYsQUFEQSw4QkFBZ0MsY0FDUTtJQUNwQyxnQ0FBeUY7SUFDN0YsaUJBQU87SUFDSCxnQ0FBNEI7SUFBQSxZQUFvQztJQUc1RSxBQURJLEFBREksQUFEb0UsaUJBQU8sRUFDckUsRUFDTixFQUNIOzs7SUFUK0IsY0FBcUM7SUFBckMseUZBQXFDO0lBQ3hCLGNBQXVDO0lBQXZDLG1IQUF1QztJQUczQyxlQUEwQztJQUExQyxzSEFBMEM7SUFFL0MsZUFBb0M7SUFBcEMsa0hBQW9DOzs7SUFUcEYsNkJBQWdGO0lBQzVFLDZCQUFxQjtJQUNqQixxRkFBaUY7SUFXckYsaUJBQUs7Ozs7SUFYb0IsZUFBb0I7SUFBcEIsaURBQW9COzs7SUFjN0MsOEJBQW9EO0lBQ2hELGlDQUE4RDtJQUNsRSxpQkFBSzs7QURGVCxNQUFNLE9BQU8sdUJBQXVCO0lBRWhDLElBQWEsU0FBUyxDQUFDLEtBQXVCO1FBQzFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFlRCxZQUNjLFVBQTRCLEVBQzVCLFVBQTRCO1FBRDVCLGVBQVUsR0FBVixVQUFVLENBQWtCO1FBQzVCLGVBQVUsR0FBVixVQUFVLENBQWtCO1FBcEIxQyxlQUFVLEdBQUcsTUFBTSxDQUFtQixFQUFFLENBQUMsQ0FBQztRQUsxQyxtQkFBYyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxFQUFFO1lBQzFELElBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQztnQkFDeEIsT0FBTyxJQUFJLENBQUM7WUFDaEIsQ0FBQztZQUNELE9BQU87Z0JBQ0gsR0FBRyxJQUFJO2dCQUNQLFVBQVUsRUFBRTtvQkFDUixHQUFHLElBQUksQ0FBQyxVQUFVO29CQUNsQixLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7aUJBQy9CO2FBQ0osQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFLRCxDQUFDO0lBRUo7OztPQUdHO0lBQ0gsVUFBVSxDQUFDLElBQVM7UUFDaEIsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDO1FBQ3JELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM1RCxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7UUFDekMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMzRCxDQUFDO3dIQWpDUSx1QkFBdUI7b0VBQXZCLHVCQUF1QjtZQ0RwQyxBQWZBLDBGQUFnRiw0R0FlMUQ7OztZQWY0QyxBQUFuRCwwRUFBbUQsd0JBQVk7NEJEYWhFLFlBQVksdUJBQUUsV0FBVyxxQkFBRSxVQUFVLEVBQUUsV0FBVzs7aUZBR25ELHVCQUF1QjtjQVJuQyxTQUFTOzJCQUNJLHNCQUFzQixjQUdwQixJQUFJLFdBQ1AsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxXQUFXLENBQUMsbUJBQzVDLHVCQUF1QixDQUFDLE1BQU07Z0ZBSWxDLFNBQVM7a0JBQXJCLEtBQUs7O2tGQUZHLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIzIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBjb21wdXRlZCwgSW5wdXQsIHNpZ25hbH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHtJbWFnZU1vZHVsZX0gZnJvbSBcIi4uLy4uL2ltYWdlL2ltYWdlLm1vZHVsZVwiO1xuaW1wb3J0IHtSb3V0ZXJMaW5rfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge01vZHVsZU5hbWVNYXBwZXJ9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL21vZHVsZS1uYW1lLW1hcHBlci9tb2R1bGUtbmFtZS1tYXBwZXIuc2VydmljZVwiO1xuaW1wb3J0IHtNb2R1bGVOYXZpZ2F0aW9ufSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvbmF2aWdhdGlvbi9tb2R1bGUtbmF2aWdhdGlvbi9tb2R1bGUtbmF2aWdhdGlvbi5zZXJ2aWNlXCI7XG5pbXBvcnQge1JlY2VudGx5Vmlld2VkfSBmcm9tICcuLi8uLi8uLi9jb21tb24vcmVjb3JkL3JlY2VudGx5LXZpZXdlZC5tb2RlbCc7XG5pbXBvcnQge0xhYmVsTW9kdWxlfSBmcm9tIFwiLi4vLi4vbGFiZWwvbGFiZWwubW9kdWxlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1yZWNlbnRseS12aWV3ZWQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9yZWNlbnRseS12aWV3ZWQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW10sXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBJbWFnZU1vZHVsZSwgUm91dGVyTGluaywgTGFiZWxNb2R1bGVdLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBSZWNlbnRseVZpZXdlZENvbXBvbmVudCB7XG4gICAgX21lbnVJdGVtcyA9IHNpZ25hbDxSZWNlbnRseVZpZXdlZFtdPihbXSk7XG4gICAgQElucHV0KCkgc2V0IG1lbnVJdGVtcyh2YWx1ZTogUmVjZW50bHlWaWV3ZWRbXSkge1xuICAgICAgICB0aGlzLl9tZW51SXRlbXMuc2V0KHZhbHVlKTtcbiAgICB9XG5cbiAgICBpdGVtV2l0aFJvdXRlcyA9IGNvbXB1dGVkKCgpID0+IHRoaXMuX21lbnVJdGVtcygpLm1hcCggaXRlbSA9PiB7XG4gICAgICAgIGlmKGl0ZW0uYXR0cmlidXRlcz8ucm91dGUpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5pdGVtLFxuICAgICAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgICAgIC4uLml0ZW0uYXR0cmlidXRlcyxcbiAgICAgICAgICAgICAgICByb3V0ZTogdGhpcy5idWlsZFJvdXRlKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSkpO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBuYW1lTWFwcGVyOiBNb2R1bGVOYW1lTWFwcGVyLFxuICAgICAgICBwcm90ZWN0ZWQgbmF2aWdhdGlvbjogTW9kdWxlTmF2aWdhdGlvblxuICAgICkge31cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIHJvdXRlIGZyb20gcmVjZW50bHkgdmlld2VkIGl0ZW1cbiAgICAgKiBAcGFyYW0gaXRlbVxuICAgICAqL1xuICAgIGJ1aWxkUm91dGUoaXRlbTogYW55KTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgbGVnYWN5TmFtZSA9IGl0ZW0uYXR0cmlidXRlcy5tb2R1bGVfbmFtZSA/PyAnJztcbiAgICAgICAgY29uc3QgbW9kdWxlID0gdGhpcy5uYW1lTWFwcGVyLnRvRnJvbnRlbmQobGVnYWN5TmFtZSkgPz8gJyc7XG4gICAgICAgIGNvbnN0IGlkID0gaXRlbS5hdHRyaWJ1dGVzLml0ZW1faWQgPz8gJyc7XG4gICAgICAgIHJldHVybiB0aGlzLm5hdmlnYXRpb24uZ2V0UmVjb3JkUm91dGVyTGluayhtb2R1bGUsIGlkKTtcbiAgICB9XG5cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjMgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJpdGVtV2l0aFJvdXRlcygpICYmIGl0ZW1XaXRoUm91dGVzKCkubGVuZ3RoOyBlbHNlIG5vSXRlbXNcIj5cbiAgICA8dWwgY2xhc3M9XCJwLTAgbWItMFwiPlxuICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbVdpdGhSb3V0ZXMoKTtcIiBjbGFzcz1cInJlY2VudGx5LXZpZXdlZC1oZWFkZXIgZC1mbGV4XCI+XG4gICAgICAgICAgICA8YSBjbGFzcz1cIm5ldy1saXN0LWl0ZW0gZC1mbGV4XCIgW3JvdXRlckxpbmtdPVwiaXRlbS5hdHRyaWJ1dGVzPy5yb3V0ZVwiPlxuICAgICAgICAgICAgICAgIDxzY3JtLWltYWdlIGNsYXNzPVwiYWN0aW9uLWJ0bi1pY29uIG1yLTNcIiBbaW1hZ2VdPVwiaXRlbT8uYXR0cmlidXRlcz8ubW9kdWxlX25hbWVcIj48L3Njcm0taW1hZ2U+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBmbGV4LWNvbHVtblwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC10aXRsZSB0ZXh0LXVwcGVyY2FzZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c2NybS1sYWJlbCBsaXN0S2V5PVwibW9kdWxlTGlzdFwiIFtsYWJlbEtleV09XCJpdGVtPy5hdHRyaWJ1dGVzPy5tb2R1bGVfbmFtZVwiPjwvc2NybS1sYWJlbD5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1zdWJ0aXRsZVwiPnt7IGl0ZW0/LmF0dHJpYnV0ZXM/Lml0ZW1fc3VtbWFyeSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICA8L3VsPlxuPC9uZy1jb250YWluZXI+XG48bmctdGVtcGxhdGUgI25vSXRlbXM+XG4gICAgPGg2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgcHQtMyBwYi0yXCI+XG4gICAgICAgIDxzY3JtLWxhYmVsIGxhYmVsS2V5PVwiTEJMX0xBU1RfVklFV0VEX05PX1JFU1VMVFwiPjwvc2NybS1sYWJlbD5cbiAgICA8L2g2PlxuPC9uZy10ZW1wbGF0ZT5cblxuXG5cbiJdfQ==