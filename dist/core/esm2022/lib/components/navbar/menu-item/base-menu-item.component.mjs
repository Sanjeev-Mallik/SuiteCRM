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
import { Component, ElementRef, Input, signal, ViewChild } from '@angular/core';
import { Subject } from "rxjs";
import { AppStateStore } from "../../../store/app-state/app-state.store";
import { ModuleNavigation } from "../../../services/navigation/module-navigation/module-navigation.service";
import * as i0 from "@angular/core";
import * as i1 from "../../../store/app-state/app-state.store";
import * as i2 from "../../../services/navigation/module-navigation/module-navigation.service";
import * as i3 from "@angular/common";
import * as i4 from "../sub-menu-recently-viewed/sub-menu-recently-viewed.component";
import * as i5 from "../sub-menu-favorites/sub-menu-favorites.component";
import * as i6 from "../menu-item-link/menu-item-link.component";
const _c0 = ["topLink"];
const _c1 = (a0, a1, a2) => ({ "top-nav-link": true, "nav-link-nongrouped": true, "dropdown-toggle": a0, "hover-enabled": a1, "nav-link-activated": a2 });
function BaseMenuItemComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function BaseMenuItemComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BaseMenuItemComponent_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const menuItem_r1 = i0.ɵɵreference(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", menuItem_r1);
} }
function BaseMenuItemComponent_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function BaseMenuItemComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BaseMenuItemComponent_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const menuItem_r1 = i0.ɵɵreference(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", menuItem_r1);
} }
function BaseMenuItemComponent_ng_template_2_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵelement(1, "scrm-menu-item-link", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sub_r5 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵclassMap("sub-nav-link nav-link action-link");
    i0.ɵɵproperty("icon", sub_r5.icon)("link", sub_r5.link);
} }
function BaseMenuItemComponent_ng_template_2_div_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "scrm-sub-menu-recently-viewed", 13);
    i0.ɵɵlistener("click", function BaseMenuItemComponent_ng_template_2_div_5_ng_container_2_Template_scrm_sub_menu_recently_viewed_click_1_listener($event) { i0.ɵɵrestoreView(_r6); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "scrm-sub-menu-favorites", 13);
    i0.ɵɵlistener("click", function BaseMenuItemComponent_ng_template_2_div_5_ng_container_2_Template_scrm_sub_menu_favorites_click_2_listener($event) { i0.ɵɵrestoreView(_r6); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("module", ctx_r2.item.module)("config", ctx_r2.recentlyViewedConfig);
    i0.ɵɵadvance();
    i0.ɵɵproperty("module", ctx_r2.item.module)("config", ctx_r2.favoritesConfig);
} }
function BaseMenuItemComponent_ng_template_2_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵlistener("click", function BaseMenuItemComponent_ng_template_2_div_5_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.hideDropdown()); });
    i0.ɵɵtemplate(1, BaseMenuItemComponent_ng_template_2_div_5_div_1_Template, 2, 4, "div", 10)(2, BaseMenuItemComponent_ng_template_2_div_5_ng_container_2_Template, 3, 4, "ng-container", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("show", ctx_r2.showDropdown())("hover-enabled", ctx_r2.hoverEnabled());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.item.submenu);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.item && ctx_r2.item.module);
} }
function BaseMenuItemComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5, 1)(2, "span", 6, 2);
    i0.ɵɵlistener("touchstart", function BaseMenuItemComponent_ng_template_2_Template_span_touchstart_2_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onTouchStart()); })("touchend", function BaseMenuItemComponent_ng_template_2_Template_span_touchend_2_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onTouchEnd()); })("click", function BaseMenuItemComponent_ng_template_2_Template_span_click_2_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onClick($event)); });
    i0.ɵɵelement(4, "scrm-menu-item-link", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, BaseMenuItemComponent_ng_template_2_div_5_Template, 3, 6, "div", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵclassMap(i0.ɵɵpureFunction3(5, _c1, ctx_r2.item.submenu.length, ctx_r2.hoverEnabled(), ctx_r2.showDropdown()));
    i0.ɵɵproperty("link", ctx_r2.item.link)("config", ctx_r2.topLinkConfig);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.item.submenu.length);
} }
export class BaseMenuItemComponent {
    constructor(appStateStore, moduleNavigation) {
        this.appStateStore = appStateStore;
        this.moduleNavigation = moduleNavigation;
        this.index = 0;
        this.showDropdown = signal(false);
        this.hoverEnabled = signal(true);
        this.clickType = 'click';
        this.subs = [];
    }
    ngOnInit() {
        this.showRecentlyViewed = new Subject();
        this.showFavorites = new Subject();
        this.topLinkConfig = {
            onClick: (event) => {
            },
            onTouchStart: (event) => {
            }
        };
        this.recentlyViewedConfig = {
            onItemClick: (event) => {
                if (this.clickType === 'touch') {
                    this.hideDropdown();
                    this.clickType = 'click';
                }
            },
            onItemTouchStart: (event) => {
                this.clickType = 'touch';
            },
            onToggleDropdown: (showDropdown) => {
                if (showDropdown) {
                    this.showFavorites.next(false);
                }
            },
            showDropdown$: this.showRecentlyViewed.asObservable()
        };
        this.favoritesConfig = {
            onItemClick: (event) => {
                if (this.clickType === 'touch') {
                    this.hideDropdown();
                    this.clickType = 'click';
                }
            },
            onItemTouchStart: (event) => {
                this.clickType = 'touch';
            },
            onToggleDropdown: (showDropdown) => {
                if (showDropdown) {
                    this.showRecentlyViewed.next(false);
                }
            },
            showDropdown$: this.showFavorites.asObservable()
        };
        this.subs.push(this.appStateStore.activeNavbarDropdown$.subscribe((activeDropdown) => {
            if (this.index !== activeDropdown) {
                this.hideDropdown();
            }
        }));
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
        this.showRecentlyViewed.unsubscribe();
        this.showFavorites.unsubscribe();
    }
    hideDropdown() {
        this.showDropdown.set(false);
        this.hoverEnabled.set(true);
    }
    navigate() {
        this.moduleNavigation.navigateUsingMenuItem(this.item);
    }
    onTopItemClick($event) {
        if (this.clickType === 'click') {
            this.appStateStore.resetActiveDropdown();
            this.navigate();
            return;
        }
        this.toggleDropdown();
        this.clickType = 'click';
    }
    toggleDropdown() {
        this.showDropdown.set(!this.showDropdown());
        if (this.showDropdown()) {
            this.appStateStore.setActiveDropdown(this.index);
            this.hoverEnabled.set(false);
        }
        else {
            this.appStateStore.resetActiveDropdown();
            this.hoverEnabled.set(true);
        }
    }
    onTouchStart() {
        this.clickType = 'touch';
    }
    onTouchEnd() {
        this.clickType = 'touch';
    }
    onClick(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.onTopItemClick(event);
    }
    static { this.ɵfac = function BaseMenuItemComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BaseMenuItemComponent)(i0.ɵɵdirectiveInject(i1.AppStateStore), i0.ɵɵdirectiveInject(i2.ModuleNavigation)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BaseMenuItemComponent, selectors: [["scrm-base-menu-item"]], viewQuery: function BaseMenuItemComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.topLink = _t.first);
        } }, inputs: { item: "item", index: "index" }, decls: 4, vars: 2, consts: [["menuItem", ""], ["menuItemWrapper", ""], ["topLink", ""], [4, "ngIf"], [4, "ngTemplateOutlet"], [1, "menu-item-wrapper"], ["data-target", ".navbar-collapse", "data-toggle", "collapse", 3, "touchstart", "touchend", "click"], [3, "link", "config"], ["aria-labelledby", "navbarDropdownMenuLink", "class", "dropdown-menu submenu", 3, "show", "hover-enabled", "click", 4, "ngIf"], ["aria-labelledby", "navbarDropdownMenuLink", 1, "dropdown-menu", "submenu", 3, "click"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "nav-item"], [3, "icon", "link"], [3, "click", "module", "config"]], template: function BaseMenuItemComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, BaseMenuItemComponent_ng_container_0_Template, 2, 1, "ng-container", 3)(1, BaseMenuItemComponent_ng_container_1_Template, 2, 1, "ng-container", 3)(2, BaseMenuItemComponent_ng_template_2_Template, 6, 9, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.hoverEnabled());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.hoverEnabled());
        } }, dependencies: [i3.NgForOf, i3.NgIf, i3.NgTemplateOutlet, i4.SubMenuRecentlyViewedComponent, i5.SubMenuFavoritesComponent, i6.MenuItemLinkComponent], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseMenuItemComponent, [{
        type: Component,
        args: [{ selector: 'scrm-base-menu-item', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container *ngIf=\"hoverEnabled()\">\n    <ng-container *ngTemplateOutlet=\"menuItem\"></ng-container>\n</ng-container>\n<ng-container *ngIf=\"!hoverEnabled()\">\n    <ng-container *ngTemplateOutlet=\"menuItem\"></ng-container>\n</ng-container>\n\n<ng-template #menuItem>\n    <div class=\"menu-item-wrapper\" #menuItemWrapper>\n        <span data-target=\".navbar-collapse\" data-toggle=\"collapse\" #topLink\n              (touchstart)=\"onTouchStart()\"\n              (touchend)=\"onTouchEnd()\"\n              (click)=\"onClick($event)\"\n        >\n                <scrm-menu-item-link [class]=\"{\n                                            'top-nav-link': true,\n                                            'nav-link-nongrouped': true,\n                                            'dropdown-toggle': item.submenu.length,\n                                            'hover-enabled': hoverEnabled(),\n                                            'nav-link-activated': showDropdown()\n                                        }\"\n                                     [link]=\"item.link\"\n                                     [config]=\"this.topLinkConfig\">\n                </scrm-menu-item-link>\n        </span>\n\n        <div (click)=\"hideDropdown()\"\n             aria-labelledby=\"navbarDropdownMenuLink\"\n             *ngIf=\"item.submenu.length\"\n             class=\"dropdown-menu submenu\"\n             [class.show]=\"showDropdown()\"\n             [class.hover-enabled]=\"hoverEnabled()\">\n\n            <div *ngFor=\"let sub of item.submenu\" class=\"nav-item\">\n\n                <scrm-menu-item-link\n                        [class]=\"'sub-nav-link nav-link action-link'\"\n                        [icon]=\"sub.icon\"\n                        [link]=\"sub.link\">\n                </scrm-menu-item-link>\n\n            </div>\n\n            <ng-container *ngIf=\"item && item.module\">\n                <scrm-sub-menu-recently-viewed\n                        [module]=\"item.module\"\n                        [config]=\"recentlyViewedConfig\"\n                        (click)=\"$event.stopPropagation();\">\n\n                </scrm-sub-menu-recently-viewed>\n                <scrm-sub-menu-favorites\n                        [module]=\"item.module\"\n                        [config]=\"favoritesConfig\"\n                        (click)=\"$event.stopPropagation()\"></scrm-sub-menu-favorites>\n            </ng-container>\n        </div>\n    </div>\n</ng-template>\n" }]
    }], () => [{ type: i1.AppStateStore }, { type: i2.ModuleNavigation }], { item: [{
            type: Input
        }], index: [{
            type: Input
        }], topLink: [{
            type: ViewChild,
            args: ['topLink']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BaseMenuItemComponent, { className: "BaseMenuItemComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1tZW51LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvbmF2YmFyL21lbnUtaXRlbS9iYXNlLW1lbnUtaXRlbS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9uYXZiYXIvbWVudS1pdGVtL2Jhc2UtbWVudS1pdGVtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFakcsT0FBTyxFQUFDLE9BQU8sRUFBZSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sMENBQTBDLENBQUM7QUFDdkUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMEVBQTBFLENBQUM7Ozs7Ozs7Ozs7O0lDRnRHLHdCQUEwRDs7O0lBRDlELDZCQUFxQztJQUNqQyx1R0FBMkM7Ozs7O0lBQTVCLGNBQTBCO0lBQTFCLDhDQUEwQjs7O0lBR3pDLHdCQUEwRDs7O0lBRDlELDZCQUFzQztJQUNsQyx1R0FBMkM7Ozs7O0lBQTVCLGNBQTBCO0lBQTFCLDhDQUEwQjs7O0lBNkJqQywrQkFBdUQ7SUFFbkQsMENBSXNCO0lBRTFCLGlCQUFNOzs7SUFMTSxjQUE2QztJQUE3QyxrREFBNkM7SUFFN0MsQUFEQSxrQ0FBaUIscUJBQ0E7Ozs7SUFLN0IsNkJBQTBDO0lBQ3RDLHlEQUc0QztJQUFwQyx3TUFBUyx3QkFBd0IsS0FBRTtJQUUzQyxpQkFBZ0M7SUFDaEMsbURBRzJDO0lBQW5DLGtNQUFTLHdCQUF3QixLQUFDO0lBQUMsaUJBQTBCOzs7O0lBUjdELGNBQXNCO0lBQ3RCLEFBREEsMkNBQXNCLHVDQUNTO0lBSy9CLGNBQXNCO0lBQ3RCLEFBREEsMkNBQXNCLGtDQUNJOzs7O0lBMUIxQyw4QkFLNEM7SUFMdkMsNkxBQVMscUJBQWMsS0FBQztJQWlCekIsQUFWQSwyRkFBdUQsK0ZBVWI7SUFZOUMsaUJBQU07OztJQXhCRCxBQURBLDZDQUE2Qix3Q0FDUztJQUVsQixjQUFlO0lBQWYsNkNBQWU7SUFVckIsY0FBeUI7SUFBekIsd0RBQXlCOzs7O0lBbEM1QyxBQURKLGlDQUFnRCxpQkFLM0M7SUFESyxBQURBLEFBREEsaU1BQWMscUJBQWMsS0FBQyxnTEFDakIsbUJBQVksS0FBQyxnTEFDaEIsc0JBQWUsS0FBQztJQUV2Qix5Q0FTc0I7SUFDOUIsaUJBQU87SUFFUCxvRkFLNEM7SUF5QmhELGlCQUFNOzs7SUExQzJCLGVBTUs7SUFOTCxtSEFNSztJQUVMLEFBREEsdUNBQWtCLGdDQUNXO0lBTXBELGNBQXlCO0lBQXpCLGlEQUF5Qjs7QURmdkMsTUFBTSxPQUFPLHFCQUFxQjtJQWdCOUIsWUFBc0IsYUFBNEIsRUFBWSxnQkFBa0M7UUFBMUUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBWSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBZHZGLFVBQUssR0FBVyxDQUFDLENBQUM7UUFHM0IsaUJBQVksR0FBRyxNQUFNLENBQVUsS0FBSyxDQUFDLENBQUM7UUFDdEMsaUJBQVksR0FBRyxNQUFNLENBQVUsSUFBSSxDQUFDLENBQUM7UUFNckMsY0FBUyxHQUFXLE9BQU8sQ0FBQztRQUU1QixTQUFJLEdBQW1CLEVBQUUsQ0FBQztJQUcxQixDQUFDO0lBRUQsUUFBUTtRQUVKLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLE9BQU8sRUFBVyxDQUFDO1FBQ2pELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxPQUFPLEVBQVcsQ0FBQztRQUU1QyxJQUFJLENBQUMsYUFBYSxHQUFHO1lBQ2pCLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ25CLENBQUM7WUFDRCxZQUFZLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUN4QixDQUFDO1NBQ2tCLENBQUE7UUFFdkIsSUFBSSxDQUFDLG9CQUFvQixHQUFHO1lBQ3hCLFdBQVcsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUNuQixJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssT0FBTyxFQUFFLENBQUM7b0JBQzdCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7Z0JBQzdCLENBQUM7WUFDTCxDQUFDO1lBQ0QsZ0JBQWdCLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7WUFDN0IsQ0FBQztZQUNELGdCQUFnQixFQUFFLENBQUMsWUFBWSxFQUFRLEVBQUU7Z0JBQ3JDLElBQUksWUFBWSxFQUFFLENBQUM7b0JBQ2YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ25DLENBQUM7WUFDTCxDQUFDO1lBQ0QsYUFBYSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUU7U0FDekIsQ0FBQTtRQUVoQyxJQUFJLENBQUMsZUFBZSxHQUFHO1lBQ25CLFdBQVcsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUNuQixJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssT0FBTyxFQUFFLENBQUM7b0JBQzdCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7Z0JBQzdCLENBQUM7WUFDTCxDQUFDO1lBQ0QsZ0JBQWdCLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7WUFDN0IsQ0FBQztZQUNELGdCQUFnQixFQUFFLENBQUMsWUFBWSxFQUFRLEVBQUU7Z0JBQ3JDLElBQUksWUFBWSxFQUFFLENBQUM7b0JBQ2YsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDeEMsQ0FBQztZQUNMLENBQUM7WUFDRCxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUU7U0FDekIsQ0FBQTtRQUUzQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FDN0QsQ0FBQyxjQUFzQixFQUFFLEVBQUU7WUFDdkIsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLGNBQWMsRUFBRSxDQUFDO2dCQUNoQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDeEIsQ0FBQztRQUNMLENBQUMsQ0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsV0FBVztRQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVELFlBQVk7UUFDUixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsUUFBUTtRQUNKLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELGNBQWMsQ0FBQyxNQUFvQjtRQUUvQixJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssT0FBTyxFQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNoQixPQUFPO1FBQ1gsQ0FBQztRQUVELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztJQUM3QixDQUFDO0lBRUQsY0FBYztRQUNWLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7UUFDNUMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxDQUFDO2FBQU0sQ0FBQztZQUNKLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUN6QyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFlBQVk7UUFDUixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztJQUM3QixDQUFDO0lBRUQsVUFBVTtRQUNOLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO0lBQzdCLENBQUM7SUFFRCxPQUFPLENBQUMsS0FBSztRQUNULEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQ2pDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzlCLENBQUM7c0hBOUhRLHFCQUFxQjtvRUFBckIscUJBQXFCOzs7Ozs7WUNObEMsQUFKQSxBQUhBLHdGQUFxQywyRUFHQywwR0FJZjs7WUFQUix5Q0FBb0I7WUFHcEIsY0FBcUI7WUFBckIsMENBQXFCOzs7aUZEVXZCLHFCQUFxQjtjQUxqQyxTQUFTOzJCQUNJLHFCQUFxQjs2RUFLdEIsSUFBSTtrQkFBWixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ2dCLE9BQU87a0JBQTVCLFNBQVM7bUJBQUMsU0FBUzs7a0ZBSFgscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBzaWduYWwsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01lbnVJdGVtfSBmcm9tICcuLi8uLi8uLi9jb21tb24vbWVudS9tZW51Lm1vZGVsJztcbmltcG9ydCB7U3ViamVjdCwgU3Vic2NyaXB0aW9ufSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtBcHBTdGF0ZVN0b3JlfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmUvYXBwLXN0YXRlL2FwcC1zdGF0ZS5zdG9yZVwiO1xuaW1wb3J0IHtNb2R1bGVOYXZpZ2F0aW9ufSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvbmF2aWdhdGlvbi9tb2R1bGUtbmF2aWdhdGlvbi9tb2R1bGUtbmF2aWdhdGlvbi5zZXJ2aWNlXCI7XG5pbXBvcnQge01lbnVJdGVtTGlua0NvbmZpZ30gZnJvbSBcIi4uL21lbnUtaXRlbS1saW5rL21lbnUtaXRlbS1saW5rLWNvbmZpZy5tb2RlbFwiO1xuaW1wb3J0IHtTdWJNZW51UmVjZW50bHlWaWV3ZWRDb25maWd9IGZyb20gXCIuLi9zdWItbWVudS1yZWNlbnRseS12aWV3ZWQvc3ViLW1lbnUtcmVjZW50bHktdmlld2VkLWNvbmZpZy5tb2RlbFwiO1xuaW1wb3J0IHtTdWJNZW51RmF2b3JpdGVzQ29uZmlnfSBmcm9tIFwiLi4vc3ViLW1lbnUtZmF2b3JpdGVzL3N1Yi1tZW51LWZhdm9yaXRlcy1jb25maWcubW9kZWxcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLWJhc2UtbWVudS1pdGVtJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYmFzZS1tZW51LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW11cbn0pXG5leHBvcnQgY2xhc3MgQmFzZU1lbnVJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIEBJbnB1dCgpIGl0ZW06IE1lbnVJdGVtO1xuICAgIEBJbnB1dCgpIGluZGV4OiBudW1iZXIgPSAwO1xuICAgIEBWaWV3Q2hpbGQoJ3RvcExpbmsnKSB0b3BMaW5rOiBFbGVtZW50UmVmO1xuXG4gICAgc2hvd0Ryb3Bkb3duID0gc2lnbmFsPGJvb2xlYW4+KGZhbHNlKTtcbiAgICBob3ZlckVuYWJsZWQgPSBzaWduYWw8Ym9vbGVhbj4odHJ1ZSk7XG4gICAgdG9wTGlua0NvbmZpZzogTWVudUl0ZW1MaW5rQ29uZmlnO1xuICAgIHJlY2VudGx5Vmlld2VkQ29uZmlnOiBTdWJNZW51UmVjZW50bHlWaWV3ZWRDb25maWc7XG4gICAgZmF2b3JpdGVzQ29uZmlnOiBTdWJNZW51RmF2b3JpdGVzQ29uZmlnO1xuICAgIHNob3dSZWNlbnRseVZpZXdlZDogU3ViamVjdDxib29sZWFuPjtcbiAgICBzaG93RmF2b3JpdGVzOiBTdWJqZWN0PGJvb2xlYW4+O1xuICAgIGNsaWNrVHlwZTogc3RyaW5nID0gJ2NsaWNrJztcblxuICAgIHN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYXBwU3RhdGVTdG9yZTogQXBwU3RhdGVTdG9yZSwgcHJvdGVjdGVkIG1vZHVsZU5hdmlnYXRpb246IE1vZHVsZU5hdmlnYXRpb24pIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgICAgICB0aGlzLnNob3dSZWNlbnRseVZpZXdlZCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gICAgICAgIHRoaXMuc2hvd0Zhdm9yaXRlcyA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cbiAgICAgICAgdGhpcy50b3BMaW5rQ29uZmlnID0ge1xuICAgICAgICAgICAgb25DbGljazogKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25Ub3VjaFN0YXJ0OiAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBhcyBNZW51SXRlbUxpbmtDb25maWdcblxuICAgICAgICB0aGlzLnJlY2VudGx5Vmlld2VkQ29uZmlnID0ge1xuICAgICAgICAgICAgb25JdGVtQ2xpY2s6IChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsaWNrVHlwZSA9PT0gJ3RvdWNoJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVEcm9wZG93bigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaWNrVHlwZSA9ICdjbGljayc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uSXRlbVRvdWNoU3RhcnQ6IChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xpY2tUeXBlID0gJ3RvdWNoJztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblRvZ2dsZURyb3Bkb3duOiAoc2hvd0Ryb3Bkb3duKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHNob3dEcm9wZG93bikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dGYXZvcml0ZXMubmV4dChmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob3dEcm9wZG93biQ6IHRoaXMuc2hvd1JlY2VudGx5Vmlld2VkLmFzT2JzZXJ2YWJsZSgpXG4gICAgICAgIH0gYXMgU3ViTWVudVJlY2VudGx5Vmlld2VkQ29uZmlnXG5cbiAgICAgICAgdGhpcy5mYXZvcml0ZXNDb25maWcgPSB7XG4gICAgICAgICAgICBvbkl0ZW1DbGljazogKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2xpY2tUeXBlID09PSAndG91Y2gnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZURyb3Bkb3duKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xpY2tUeXBlID0gJ2NsaWNrJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25JdGVtVG91Y2hTdGFydDogKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGlja1R5cGUgPSAndG91Y2gnO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uVG9nZ2xlRHJvcGRvd246IChzaG93RHJvcGRvd24pOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc2hvd0Ryb3Bkb3duKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1JlY2VudGx5Vmlld2VkLm5leHQoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93RHJvcGRvd24kOiB0aGlzLnNob3dGYXZvcml0ZXMuYXNPYnNlcnZhYmxlKClcbiAgICAgICAgfSBhcyBTdWJNZW51RmF2b3JpdGVzQ29uZmlnXG5cbiAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5hcHBTdGF0ZVN0b3JlLmFjdGl2ZU5hdmJhckRyb3Bkb3duJC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAoYWN0aXZlRHJvcGRvd246IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmluZGV4ICE9PSBhY3RpdmVEcm9wZG93bikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVEcm9wZG93bigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3Vicy5mb3JFYWNoKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XG4gICAgICAgIHRoaXMuc2hvd1JlY2VudGx5Vmlld2VkLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMuc2hvd0Zhdm9yaXRlcy51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIGhpZGVEcm9wZG93bigpIHtcbiAgICAgICAgdGhpcy5zaG93RHJvcGRvd24uc2V0KGZhbHNlKTtcbiAgICAgICAgdGhpcy5ob3ZlckVuYWJsZWQuc2V0KHRydWUpO1xuICAgIH1cblxuICAgIG5hdmlnYXRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm1vZHVsZU5hdmlnYXRpb24ubmF2aWdhdGVVc2luZ01lbnVJdGVtKHRoaXMuaXRlbSk7XG4gICAgfVxuXG4gICAgb25Ub3BJdGVtQ2xpY2soJGV2ZW50OiBQb2ludGVyRXZlbnQpOiB2b2lkIHtcblxuICAgICAgICBpZiAodGhpcy5jbGlja1R5cGUgPT09ICdjbGljaycpIHtcbiAgICAgICAgICAgIHRoaXMuYXBwU3RhdGVTdG9yZS5yZXNldEFjdGl2ZURyb3Bkb3duKCk7XG4gICAgICAgICAgICB0aGlzLm5hdmlnYXRlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRvZ2dsZURyb3Bkb3duKCk7XG4gICAgICAgIHRoaXMuY2xpY2tUeXBlID0gJ2NsaWNrJztcbiAgICB9XG5cbiAgICB0b2dnbGVEcm9wZG93bigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zaG93RHJvcGRvd24uc2V0KCF0aGlzLnNob3dEcm9wZG93bigpKTtcbiAgICAgICAgaWYgKHRoaXMuc2hvd0Ryb3Bkb3duKCkpIHtcbiAgICAgICAgICAgIHRoaXMuYXBwU3RhdGVTdG9yZS5zZXRBY3RpdmVEcm9wZG93bih0aGlzLmluZGV4KTtcbiAgICAgICAgICAgIHRoaXMuaG92ZXJFbmFibGVkLnNldChmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFwcFN0YXRlU3RvcmUucmVzZXRBY3RpdmVEcm9wZG93bigpO1xuICAgICAgICAgICAgdGhpcy5ob3ZlckVuYWJsZWQuc2V0KHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Ub3VjaFN0YXJ0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNsaWNrVHlwZSA9ICd0b3VjaCc7XG4gICAgfVxuXG4gICAgb25Ub3VjaEVuZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jbGlja1R5cGUgPSAndG91Y2gnO1xuICAgIH1cblxuICAgIG9uQ2xpY2soZXZlbnQpOiB2b2lkIHtcbiAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLm9uVG9wSXRlbUNsaWNrKGV2ZW50KVxuICAgIH1cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJob3ZlckVuYWJsZWQoKVwiPlxuICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJtZW51SXRlbVwiPjwvbmctY29udGFpbmVyPlxuPC9uZy1jb250YWluZXI+XG48bmctY29udGFpbmVyICpuZ0lmPVwiIWhvdmVyRW5hYmxlZCgpXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cIm1lbnVJdGVtXCI+PC9uZy1jb250YWluZXI+XG48L25nLWNvbnRhaW5lcj5cblxuPG5nLXRlbXBsYXRlICNtZW51SXRlbT5cbiAgICA8ZGl2IGNsYXNzPVwibWVudS1pdGVtLXdyYXBwZXJcIiAjbWVudUl0ZW1XcmFwcGVyPlxuICAgICAgICA8c3BhbiBkYXRhLXRhcmdldD1cIi5uYXZiYXItY29sbGFwc2VcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgI3RvcExpbmtcbiAgICAgICAgICAgICAgKHRvdWNoc3RhcnQpPVwib25Ub3VjaFN0YXJ0KClcIlxuICAgICAgICAgICAgICAodG91Y2hlbmQpPVwib25Ub3VjaEVuZCgpXCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uQ2xpY2soJGV2ZW50KVwiXG4gICAgICAgID5cbiAgICAgICAgICAgICAgICA8c2NybS1tZW51LWl0ZW0tbGluayBbY2xhc3NdPVwie1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndG9wLW5hdi1saW5rJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25hdi1saW5rLW5vbmdyb3VwZWQnOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZHJvcGRvd24tdG9nZ2xlJzogaXRlbS5zdWJtZW51Lmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2hvdmVyLWVuYWJsZWQnOiBob3ZlckVuYWJsZWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25hdi1saW5rLWFjdGl2YXRlZCc6IHNob3dEcm9wZG93bigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xpbmtdPVwiaXRlbS5saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29uZmlnXT1cInRoaXMudG9wTGlua0NvbmZpZ1wiPlxuICAgICAgICAgICAgICAgIDwvc2NybS1tZW51LWl0ZW0tbGluaz5cbiAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgIDxkaXYgKGNsaWNrKT1cImhpZGVEcm9wZG93bigpXCJcbiAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJuYXZiYXJEcm9wZG93bk1lbnVMaW5rXCJcbiAgICAgICAgICAgICAqbmdJZj1cIml0ZW0uc3VibWVudS5sZW5ndGhcIlxuICAgICAgICAgICAgIGNsYXNzPVwiZHJvcGRvd24tbWVudSBzdWJtZW51XCJcbiAgICAgICAgICAgICBbY2xhc3Muc2hvd109XCJzaG93RHJvcGRvd24oKVwiXG4gICAgICAgICAgICAgW2NsYXNzLmhvdmVyLWVuYWJsZWRdPVwiaG92ZXJFbmFibGVkKClcIj5cblxuICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgc3ViIG9mIGl0ZW0uc3VibWVudVwiIGNsYXNzPVwibmF2LWl0ZW1cIj5cblxuICAgICAgICAgICAgICAgIDxzY3JtLW1lbnUtaXRlbS1saW5rXG4gICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3NdPVwiJ3N1Yi1uYXYtbGluayBuYXYtbGluayBhY3Rpb24tbGluaydcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2ljb25dPVwic3ViLmljb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2xpbmtdPVwic3ViLmxpbmtcIj5cbiAgICAgICAgICAgICAgICA8L3Njcm0tbWVudS1pdGVtLWxpbms+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbSAmJiBpdGVtLm1vZHVsZVwiPlxuICAgICAgICAgICAgICAgIDxzY3JtLXN1Yi1tZW51LXJlY2VudGx5LXZpZXdlZFxuICAgICAgICAgICAgICAgICAgICAgICAgW21vZHVsZV09XCJpdGVtLm1vZHVsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbY29uZmlnXT1cInJlY2VudGx5Vmlld2VkQ29uZmlnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XCI+XG5cbiAgICAgICAgICAgICAgICA8L3Njcm0tc3ViLW1lbnUtcmVjZW50bHktdmlld2VkPlxuICAgICAgICAgICAgICAgIDxzY3JtLXN1Yi1tZW51LWZhdm9yaXRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgW21vZHVsZV09XCJpdGVtLm1vZHVsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbY29uZmlnXT1cImZhdm9yaXRlc0NvbmZpZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCI+PC9zY3JtLXN1Yi1tZW51LWZhdm9yaXRlcz5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG4iXX0=