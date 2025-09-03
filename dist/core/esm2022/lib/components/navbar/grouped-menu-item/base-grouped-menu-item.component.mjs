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
import { Component, Input, signal } from '@angular/core';
import { Subject } from "rxjs";
import { AppStateStore } from "../../../store/app-state/app-state.store";
import { ModuleNavigation } from "../../../services/navigation/module-navigation/module-navigation.service";
import { SystemConfigStore } from "../../../store/system-config/system-config.store";
import * as i0 from "@angular/core";
import * as i1 from "../../../store/app-state/app-state.store";
import * as i2 from "../../../services/navigation/module-navigation/module-navigation.service";
import * as i3 from "../../../store/system-config/system-config.store";
import * as i4 from "@angular/common";
import * as i5 from "../sub-menu-recently-viewed/sub-menu-recently-viewed.component";
import * as i6 from "../sub-menu-favorites/sub-menu-favorites.component";
import * as i7 from "../menu-item-link/menu-item-link.component";
import * as i8 from "../../../pipes/truncate/truncate.pipe";
const _c0 = (a0, a1, a2) => ({ "top-nav-link": true, "nav-link-grouped": true, "dropdown-toggle": a0, "hover-enabled": a1, "nav-link-activated": a2 });
const _c1 = (a0, a1) => ({ "sub-nav-link": true, "nav-link": true, "action-link": true, "dropdown-item": a0, "dropdown-toggle": a1 });
function BaseGroupedMenuItemComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function BaseGroupedMenuItemComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BaseGroupedMenuItemComponent_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const groupedMenuItem_r1 = i0.ɵɵreference(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", groupedMenuItem_r1);
} }
function BaseGroupedMenuItemComponent_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function BaseGroupedMenuItemComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BaseGroupedMenuItemComponent_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const groupedMenuItem_r1 = i0.ɵɵreference(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", groupedMenuItem_r1);
} }
function BaseGroupedMenuItemComponent_ng_template_2_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 7);
    i0.ɵɵlistener("click", function BaseGroupedMenuItemComponent_ng_template_2_span_1_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.toggleDropdown()); });
    i0.ɵɵelementStart(1, "a", 8);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "truncate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("hover-enabled", ctx_r2.hoverEnabled());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(3, 3, ctx_r2.item.link.label, ctx_r2.charSize.minLength), " ");
} }
function BaseGroupedMenuItemComponent_ng_template_2_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 7);
    i0.ɵɵlistener("click", function BaseGroupedMenuItemComponent_ng_template_2_span_2_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.toggleDropdown()); });
    i0.ɵɵelementStart(1, "li", 9);
    i0.ɵɵelement(2, "scrm-menu-item-link", 10);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(i0.ɵɵpureFunction3(3, _c0, ctx_r2.item.submenu.length, ctx_r2.hoverEnabled(), ctx_r2.showDropdown()));
    i0.ɵɵproperty("link", ctx_r2.item.link);
} }
function BaseGroupedMenuItemComponent_ng_template_2_li_4_ul_2_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 16)(1, "scrm-menu-item-link", 17);
    i0.ɵɵlistener("click", function BaseGroupedMenuItemComponent_ng_template_2_li_4_ul_2_li_1_Template_scrm_menu_item_link_click_1_listener() { i0.ɵɵrestoreView(_r6); const ctx_r2 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r2.hideDropdown()); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const subitem_r7 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵclassMap("submenu-nav-link nav-link action-link");
    i0.ɵɵproperty("icon", subitem_r7.icon)("link", subitem_r7.link);
} }
function BaseGroupedMenuItemComponent_ng_template_2_li_4_ul_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "scrm-sub-menu-recently-viewed", 18);
    i0.ɵɵlistener("click", function BaseGroupedMenuItemComponent_ng_template_2_li_4_ul_2_ng_container_2_Template_scrm_sub_menu_recently_viewed_click_1_listener($event) { i0.ɵɵrestoreView(_r8); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "scrm-sub-menu-favorites", 18);
    i0.ɵɵlistener("click", function BaseGroupedMenuItemComponent_ng_template_2_li_4_ul_2_ng_container_2_Template_scrm_sub_menu_favorites_click_2_listener($event) { i0.ɵɵrestoreView(_r8); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const sub_r9 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("module", sub_r9.module)("config", ctx_r2.recentlyViewedConfig);
    i0.ɵɵadvance();
    i0.ɵɵproperty("module", sub_r9.module)("config", ctx_r2.favoritesConfig);
} }
function BaseGroupedMenuItemComponent_ng_template_2_li_4_ul_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ul", 14);
    i0.ɵɵlistener("click", function BaseGroupedMenuItemComponent_ng_template_2_li_4_ul_2_Template_ul_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.hideDropdown()); });
    i0.ɵɵtemplate(1, BaseGroupedMenuItemComponent_ng_template_2_li_4_ul_2_li_1_Template, 2, 4, "li", 15)(2, BaseGroupedMenuItemComponent_ng_template_2_li_4_ul_2_ng_container_2_Template, 3, 4, "ng-container", 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    const sub_r9 = ctx_r9.$implicit;
    const i_r11 = ctx_r9.index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("rounded-0", sub_r9.submenu && sub_r9.submenu.length === 1)("active", ctx_r2.showSubDropdown[i_r11]());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", sub_r9.submenu);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sub_r9 && sub_r9.module);
} }
function BaseGroupedMenuItemComponent_ng_template_2_li_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 11);
    i0.ɵɵelement(1, "scrm-menu-item-link", 12);
    i0.ɵɵtemplate(2, BaseGroupedMenuItemComponent_ng_template_2_li_4_ul_2_Template, 3, 6, "ul", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sub_r9 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵclassMap(i0.ɵɵpureFunction2(5, _c1, sub_r9.submenu.length, sub_r9.submenu.length));
    i0.ɵɵproperty("link", sub_r9.link)("config", ctx_r2.getConfig(sub_r9, i_r11));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", sub_r9.submenu.length);
} }
function BaseGroupedMenuItemComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtemplate(1, BaseGroupedMenuItemComponent_ng_template_2_span_1_Template, 4, 6, "span", 4)(2, BaseGroupedMenuItemComponent_ng_template_2_span_2_Template, 3, 7, "span", 4);
    i0.ɵɵelementStart(3, "ul", 5);
    i0.ɵɵtemplate(4, BaseGroupedMenuItemComponent_ng_template_2_li_4_Template, 3, 8, "li", 6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r2.item.isGroupedMenu);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.item.isGroupedMenu);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("show", ctx_r2.showDropdown())("hover-enabled", ctx_r2.hoverEnabled())("mobile-admin-dropdown", ctx_r2.item.isGroupedMenu);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.item.submenu);
} }
export class BaseGroupedMenuItemComponent {
    constructor(appStateStore, moduleNavigation, systemConfigStore) {
        this.appStateStore = appStateStore;
        this.moduleNavigation = moduleNavigation;
        this.systemConfigStore = systemConfigStore;
        this.index = 0;
        this.showDropdown = signal(false);
        this.showSubDropdown = [];
        this.hoverEnabled = signal(true);
        this.subs = [];
        this.clickType = 'click';
        this.openSubDropdown = null;
        this.charSize = {
            minLength: 20,
            mediumLength: 20,
            maxLength: 20
        };
    }
    ngOnInit() {
        this.showRecentlyViewed = new Subject();
        this.showFavorites = new Subject();
        const characterSizes = this.systemConfigStore.getUi('navbar_truncate_character_sizes');
        this.charSize = { ...characterSizes };
        this.subs.push(this.appStateStore.activeNavbarDropdown$.subscribe((activeDropdown) => {
            if (this.index !== activeDropdown) {
                this.hideDropdown();
            }
        }));
        const submenuItems = this?.item?.submenu ?? [];
        submenuItems.forEach(() => {
            this.showSubDropdown.push(signal(false));
        });
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
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
        this.showRecentlyViewed.unsubscribe();
        this.showFavorites.unsubscribe();
    }
    hideDropdown() {
        this.showDropdown.set(false);
        this.hoverEnabled.set(true);
        this.showSubDropdown.forEach(subDropdown => {
            subDropdown.set(false);
        });
    }
    toggleDropdown() {
        this.showDropdown.set(!this.showDropdown());
        if (this.showDropdown()) {
            this.appStateStore.setActiveDropdown(this.index);
            this.hoverEnabled.set(false);
        }
        else {
            this.appStateStore.resetActiveDropdown();
            this.hideDropdown();
        }
    }
    navigate() {
        this.moduleNavigation.navigateUsingMenuItem(this.item);
    }
    onSubItemClick($event, item, index) {
        if (this.clickType === 'click') {
            this.navigate();
            return;
        }
        this.toggleSubDropdown(index);
        this.clickType = 'click';
    }
    toggleSubDropdown(index) {
        const openSubDropdownIndex = this.openSubDropdown ?? -1;
        if (index !== openSubDropdownIndex && openSubDropdownIndex >= 0) {
            this?.showSubDropdown[openSubDropdownIndex]?.set(false);
        }
        this.showSubDropdown[index]?.set(!this.showSubDropdown[index]());
        this.openSubDropdown = index;
        if (!this.showSubDropdown[index]()) {
            this.openSubDropdown = null;
        }
    }
    getConfig(sub, index) {
        return {
            onClick: (event) => {
                this.onSubItemClick(event, sub, index);
            },
            onTouchStart: (event) => {
                this.clickType = 'touch';
            }
        };
    }
    static { this.ɵfac = function BaseGroupedMenuItemComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BaseGroupedMenuItemComponent)(i0.ɵɵdirectiveInject(i1.AppStateStore), i0.ɵɵdirectiveInject(i2.ModuleNavigation), i0.ɵɵdirectiveInject(i3.SystemConfigStore)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BaseGroupedMenuItemComponent, selectors: [["scrm-base-grouped-menu-item"]], inputs: { item: "item", subNavCollapse: "subNavCollapse", index: "index" }, decls: 4, vars: 2, consts: [["groupedMenuItem", ""], [4, "ngIf"], [4, "ngTemplateOutlet"], [1, "menu-item-wrapper"], ["data-target", ".navbar-collapse", "data-toggle", "collapse", 3, "click", 4, "ngIf"], ["aria-labelledby", "navbarDropdownMenuLink", 1, "dropdown-menu", "main"], ["class", "nav-item dropdown-submenu submenu", 4, "ngFor", "ngForOf"], ["data-target", ".navbar-collapse", "data-toggle", "collapse", 3, "click"], ["data-toggle", "dropdown", 1, "top-nav-link", "nav-link-grouped", "dropdown-toggle", "active"], [1, "nav-item", "active"], [3, "link"], [1, "nav-item", "dropdown-submenu", "submenu"], [3, "link", "config"], ["class", "dropdown-menu submenu", 3, "rounded-0", "active", "click", 4, "ngIf"], [1, "dropdown-menu", "submenu", 3, "click"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "nav-item"], [3, "click", "icon", "link"], [3, "click", "module", "config"]], template: function BaseGroupedMenuItemComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, BaseGroupedMenuItemComponent_ng_container_0_Template, 2, 1, "ng-container", 1)(1, BaseGroupedMenuItemComponent_ng_container_1_Template, 2, 1, "ng-container", 1)(2, BaseGroupedMenuItemComponent_ng_template_2_Template, 5, 9, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.hoverEnabled());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.hoverEnabled());
        } }, dependencies: [i4.NgForOf, i4.NgIf, i4.NgTemplateOutlet, i5.SubMenuRecentlyViewedComponent, i6.SubMenuFavoritesComponent, i7.MenuItemLinkComponent, i8.TruncatePipe], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseGroupedMenuItemComponent, [{
        type: Component,
        args: [{ selector: 'scrm-base-grouped-menu-item', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container *ngIf=\"hoverEnabled()\">\n    <ng-container *ngTemplateOutlet=\"groupedMenuItem\"></ng-container>\n</ng-container>\n<ng-container *ngIf=\"!hoverEnabled()\">\n    <ng-container *ngTemplateOutlet=\"groupedMenuItem\"></ng-container>\n</ng-container>\n\n\n<ng-template #groupedMenuItem>\n    <div class=\"menu-item-wrapper\">\n        <span data-target=\".navbar-collapse\" data-toggle=\"collapse\" *ngIf=\"!item.isGroupedMenu\"\n          (click)=\"toggleDropdown()\">\n            <a class=\"top-nav-link nav-link-grouped dropdown-toggle active\"\n               data-toggle=\"dropdown\" [class.hover-enabled]=\"hoverEnabled()\">\n                {{ item.link.label | truncate: charSize.minLength }}\n            </a>\n        </span>\n\n        <span data-target=\".navbar-collapse\" data-toggle=\"collapse\" *ngIf=\"item.isGroupedMenu\"\n              (click)=\"toggleDropdown()\">\n            <li class=\"nav-item active\">\n                <scrm-menu-item-link [class]=\"{\n                                            'top-nav-link': true,\n                                            'nav-link-grouped': true,\n                                            'dropdown-toggle': item.submenu.length,\n                                            'hover-enabled': hoverEnabled(),\n                                            'nav-link-activated': showDropdown()\n                                        }\"\n                                     [link]=\"item.link\">\n                </scrm-menu-item-link>\n            </li>\n        </span>\n        <ul aria-labelledby=\"navbarDropdownMenuLink\"\n            class=\"dropdown-menu main\"\n            [class.show]=\"showDropdown()\"\n            [class.hover-enabled]=\"hoverEnabled()\"\n            [class.mobile-admin-dropdown]=\"item.isGroupedMenu\"\n        >\n            <li *ngFor=\"let sub of item.submenu; index as i;\" class=\"nav-item dropdown-submenu submenu\">\n\n                <scrm-menu-item-link [class]=\"{\n                                        'sub-nav-link': true,\n                                        'nav-link': true,\n                                        'action-link': true,\n                                        'dropdown-item': sub.submenu.length,\n                                        'dropdown-toggle': sub.submenu.length,\n                                      }\"\n                                     [link]=\"sub.link\"\n                                     [config]=\"getConfig(sub, i)\"\n                >\n                </scrm-menu-item-link>\n\n                <ul *ngIf=\"sub.submenu.length\"\n                    (click)=\"hideDropdown()\"\n                    [class.rounded-0]=\"sub.submenu && sub.submenu.length === 1\"\n                    [class.active]=\"this.showSubDropdown[i]()\"\n                    class=\"dropdown-menu submenu\"\n                >\n\n                    <li *ngFor=\"let subitem of sub.submenu\" class=\"nav-item\">\n\n                        <scrm-menu-item-link (click)=\"hideDropdown()\"\n                                             [class]=\"'submenu-nav-link nav-link action-link'\"\n                                             [icon]=\"subitem.icon\"\n                                             [link]=\"subitem.link\">\n                        </scrm-menu-item-link>\n                    </li>\n                    <ng-container *ngIf=\"sub && sub.module\">\n                        <scrm-sub-menu-recently-viewed [module]=\"sub.module\"\n                                                       [config]=\"recentlyViewedConfig\"\n                                                       (click)=\"$event.stopPropagation();\" >\n                        </scrm-sub-menu-recently-viewed>\n                        <scrm-sub-menu-favorites [module]=\"sub.module\"\n                                                 [config]=\"favoritesConfig\"\n                                                 (click)=\"$event.stopPropagation()\">\n                        </scrm-sub-menu-favorites>\n                    </ng-container>\n                </ul>\n            </li>\n        </ul>\n    </div>\n</ng-template>\n" }]
    }], () => [{ type: i1.AppStateStore }, { type: i2.ModuleNavigation }, { type: i3.SystemConfigStore }], { item: [{
            type: Input
        }], subNavCollapse: [{
            type: Input
        }], index: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BaseGroupedMenuItemComponent, { className: "BaseGroupedMenuItemComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1ncm91cGVkLW1lbnUtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9uYXZiYXIvZ3JvdXBlZC1tZW51LWl0ZW0vYmFzZS1ncm91cGVkLW1lbnUtaXRlbS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9uYXZiYXIvZ3JvdXBlZC1tZW51LWl0ZW0vYmFzZS1ncm91cGVkLW1lbnUtaXRlbS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFMUYsT0FBTyxFQUFDLE9BQU8sRUFBZSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sMENBQTBDLENBQUM7QUFFdkUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMEVBQTBFLENBQUM7QUFHMUcsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0RBQWtELENBQUM7Ozs7Ozs7Ozs7Ozs7SUNOL0Usd0JBQWlFOzs7SUFEckUsNkJBQXFDO0lBQ2pDLDhHQUFrRDs7Ozs7SUFBbkMsY0FBaUM7SUFBakMscURBQWlDOzs7SUFHaEQsd0JBQWlFOzs7SUFEckUsNkJBQXNDO0lBQ2xDLDhHQUFrRDs7Ozs7SUFBbkMsY0FBaUM7SUFBakMscURBQWlDOzs7O0lBTTVDLCtCQUM2QjtJQUEzQixzTUFBUyx1QkFBZ0IsS0FBQztJQUN4Qiw0QkFDaUU7SUFDN0QsWUFDSjs7SUFDSixBQURJLGlCQUFJLEVBQ0Q7OztJQUh1QixjQUFzQztJQUF0QyxzREFBc0M7SUFDNUQsY0FDSjtJQURJLHdH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RUFBRSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLENBQUM7SUFDTCxDQUFDO0lBRUQsU0FBUyxDQUFDLEdBQWEsRUFBRSxLQUFhO1FBQ2xDLE9BQU87WUFDSCxPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDZixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUE7WUFDMUMsQ0FBQztZQUNELFlBQVksRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztZQUM3QixDQUFDO1NBQ2tCLENBQUM7SUFDNUIsQ0FBQzs2SEF0SlEsNEJBQTRCO29FQUE1Qiw0QkFBNEI7WUNOekMsQUFMQSxBQUhBLCtGQUFxQyxrRkFHQyxpSEFLUjs7WUFSZix5Q0FBb0I7WUFHcEIsY0FBcUI7WUFBckIsMENBQXFCOzs7aUZEV3ZCLDRCQUE0QjtjQUx4QyxTQUFTOzJCQUNJLDZCQUE2Qjs2R0FLOUIsSUFBSTtrQkFBWixLQUFLO1lBQ0csY0FBYztrQkFBdEIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSzs7a0ZBSEcsNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBzaWduYWwsIFdyaXRhYmxlU2lnbmFsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWVudUl0ZW19IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9tZW51L21lbnUubW9kZWwnO1xuaW1wb3J0IHtTdWJqZWN0LCBTdWJzY3JpcHRpb259IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge0FwcFN0YXRlU3RvcmV9IGZyb20gXCIuLi8uLi8uLi9zdG9yZS9hcHAtc3RhdGUvYXBwLXN0YXRlLnN0b3JlXCI7XG5pbXBvcnQge01lbnVJdGVtTGlua0NvbmZpZ30gZnJvbSBcIi4uL21lbnUtaXRlbS1saW5rL21lbnUtaXRlbS1saW5rLWNvbmZpZy5tb2RlbFwiO1xuaW1wb3J0IHtNb2R1bGVOYXZpZ2F0aW9ufSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvbmF2aWdhdGlvbi9tb2R1bGUtbmF2aWdhdGlvbi9tb2R1bGUtbmF2aWdhdGlvbi5zZXJ2aWNlXCI7XG5pbXBvcnQge1N1Yk1lbnVSZWNlbnRseVZpZXdlZENvbmZpZ30gZnJvbSBcIi4uL3N1Yi1tZW51LXJlY2VudGx5LXZpZXdlZC9zdWItbWVudS1yZWNlbnRseS12aWV3ZWQtY29uZmlnLm1vZGVsXCI7XG5pbXBvcnQge1N1Yk1lbnVGYXZvcml0ZXNDb25maWd9IGZyb20gXCIuLi9zdWItbWVudS1mYXZvcml0ZXMvc3ViLW1lbnUtZmF2b3JpdGVzLWNvbmZpZy5tb2RlbFwiO1xuaW1wb3J0IHtTeXN0ZW1Db25maWdTdG9yZX0gZnJvbSBcIi4uLy4uLy4uL3N0b3JlL3N5c3RlbS1jb25maWcvc3lzdGVtLWNvbmZpZy5zdG9yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tYmFzZS1ncm91cGVkLW1lbnUtaXRlbScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Jhc2UtZ3JvdXBlZC1tZW51LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW11cbn0pXG5leHBvcnQgY2xhc3MgQmFzZUdyb3VwZWRNZW51SXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBASW5wdXQoKSBpdGVtOiBNZW51SXRlbTtcbiAgICBASW5wdXQoKSBzdWJOYXZDb2xsYXBzZTogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBpbmRleDogbnVtYmVyID0gMDtcblxuICAgIHNob3dEcm9wZG93biA9IHNpZ25hbDxib29sZWFuPihmYWxzZSk7XG4gICAgc2hvd1N1YkRyb3Bkb3duOiBXcml0YWJsZVNpZ25hbDxib29sZWFuPltdID0gW107XG4gICAgaG92ZXJFbmFibGVkID0gc2lnbmFsPGJvb2xlYW4+KHRydWUpO1xuICAgIHJlY2VudGx5Vmlld2VkQ29uZmlnOiBTdWJNZW51UmVjZW50bHlWaWV3ZWRDb25maWc7XG4gICAgZmF2b3JpdGVzQ29uZmlnOiBTdWJNZW51RmF2b3JpdGVzQ29uZmlnO1xuICAgIHNob3dSZWNlbnRseVZpZXdlZDogU3ViamVjdDxib29sZWFuPjtcbiAgICBzaG93RmF2b3JpdGVzOiBTdWJqZWN0PGJvb2xlYW4+O1xuXG4gICAgc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgICBjbGlja1R5cGU6IHN0cmluZyA9ICdjbGljayc7XG4gICAgcHJpdmF0ZSBvcGVuU3ViRHJvcGRvd24/OiBudW1iZXIgPSBudWxsO1xuXG4gICAgY2hhclNpemUgPSB7XG4gICAgICAgIG1pbkxlbmd0aDogMjAsXG4gICAgICAgIG1lZGl1bUxlbmd0aDogMjAsXG4gICAgICAgIG1heExlbmd0aDogMjBcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGFwcFN0YXRlU3RvcmU6IEFwcFN0YXRlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBtb2R1bGVOYXZpZ2F0aW9uOiBNb2R1bGVOYXZpZ2F0aW9uLFxuICAgICAgICBwcm90ZWN0ZWQgc3lzdGVtQ29uZmlnU3RvcmU6IFN5c3RlbUNvbmZpZ1N0b3JlXG4gICAgKSB7fVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2hvd1JlY2VudGx5Vmlld2VkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgICAgICAgdGhpcy5zaG93RmF2b3JpdGVzID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuICAgICAgICBjb25zdCBjaGFyYWN0ZXJTaXplcyA9IHRoaXMuc3lzdGVtQ29uZmlnU3RvcmUuZ2V0VWkoJ25hdmJhcl90cnVuY2F0ZV9jaGFyYWN0ZXJfc2l6ZXMnKTtcbiAgICAgICAgdGhpcy5jaGFyU2l6ZSA9IHsuLi5jaGFyYWN0ZXJTaXplc31cblxuICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLmFwcFN0YXRlU3RvcmUuYWN0aXZlTmF2YmFyRHJvcGRvd24kLnN1YnNjcmliZShcbiAgICAgICAgICAgIChhY3RpdmVEcm9wZG93bjogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5kZXggIT09IGFjdGl2ZURyb3Bkb3duKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZURyb3Bkb3duKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApKTtcblxuICAgICAgICBjb25zdCBzdWJtZW51SXRlbXMgPSB0aGlzPy5pdGVtPy5zdWJtZW51ID8/IFtdO1xuICAgICAgICBzdWJtZW51SXRlbXMuZm9yRWFjaCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dTdWJEcm9wZG93bi5wdXNoKHNpZ25hbDxib29sZWFuPihmYWxzZSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnJlY2VudGx5Vmlld2VkQ29uZmlnID0ge1xuICAgICAgICAgICAgb25JdGVtQ2xpY2s6IChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsaWNrVHlwZSA9PT0gJ3RvdWNoJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVEcm9wZG93bigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaWNrVHlwZSA9ICdjbGljayc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uSXRlbVRvdWNoU3RhcnQ6IChldmVudCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xpY2tUeXBlID0gJ3RvdWNoJztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblRvZ2dsZURyb3Bkb3duOiAoc2hvd0Ryb3Bkb3duKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHNob3dEcm9wZG93bikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dGYXZvcml0ZXMubmV4dChmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob3dEcm9wZG93biQ6IHRoaXMuc2hvd1JlY2VudGx5Vmlld2VkLmFzT2JzZXJ2YWJsZSgpXG4gICAgICAgIH0gYXMgU3ViTWVudVJlY2VudGx5Vmlld2VkQ29uZmlnXG5cbiAgICAgICAgdGhpcy5mYXZvcml0ZXNDb25maWcgPSB7XG4gICAgICAgICAgICBvbkl0ZW1DbGljazogKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2xpY2tUeXBlID09PSAndG91Y2gnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZURyb3Bkb3duKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xpY2tUeXBlID0gJ2NsaWNrJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25JdGVtVG91Y2hTdGFydDogKGV2ZW50KTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGlja1R5cGUgPSAndG91Y2gnO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uVG9nZ2xlRHJvcGRvd246IChzaG93RHJvcGRvd24pOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc2hvd0Ryb3Bkb3duKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1JlY2VudGx5Vmlld2VkLm5leHQoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93RHJvcGRvd24kOiB0aGlzLnNob3dGYXZvcml0ZXMuYXNPYnNlcnZhYmxlKClcbiAgICAgICAgfSBhcyBTdWJNZW51RmF2b3JpdGVzQ29uZmlnXG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3Vicy5mb3JFYWNoKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XG4gICAgICAgIHRoaXMuc2hvd1JlY2VudGx5Vmlld2VkLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMuc2hvd0Zhdm9yaXRlcy51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIGhpZGVEcm9wZG93bigpIHtcbiAgICAgICAgdGhpcy5zaG93RHJvcGRvd24uc2V0KGZhbHNlKTtcbiAgICAgICAgdGhpcy5ob3ZlckVuYWJsZWQuc2V0KHRydWUpO1xuICAgICAgICB0aGlzLnNob3dTdWJEcm9wZG93bi5mb3JFYWNoKHN1YkRyb3Bkb3duID0+IHtcbiAgICAgICAgICAgIHN1YkRyb3Bkb3duLnNldChmYWxzZSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgdG9nZ2xlRHJvcGRvd24oKSB7XG4gICAgICAgIHRoaXMuc2hvd0Ryb3Bkb3duLnNldCghdGhpcy5zaG93RHJvcGRvd24oKSk7XG4gICAgICAgIGlmICh0aGlzLnNob3dEcm9wZG93bigpKSB7XG4gICAgICAgICAgICB0aGlzLmFwcFN0YXRlU3RvcmUuc2V0QWN0aXZlRHJvcGRvd24odGhpcy5pbmRleCk7XG4gICAgICAgICAgICB0aGlzLmhvdmVyRW5hYmxlZC5zZXQoZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hcHBTdGF0ZVN0b3JlLnJlc2V0QWN0aXZlRHJvcGRvd24oKTtcbiAgICAgICAgICAgIHRoaXMuaGlkZURyb3Bkb3duKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuYXZpZ2F0ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tb2R1bGVOYXZpZ2F0aW9uLm5hdmlnYXRlVXNpbmdNZW51SXRlbSh0aGlzLml0ZW0pO1xuICAgIH1cblxuICAgIG9uU3ViSXRlbUNsaWNrKCRldmVudDogUG9pbnRlckV2ZW50LCBpdGVtOiBNZW51SXRlbSwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5jbGlja1R5cGUgPT09ICdjbGljaycpIHtcbiAgICAgICAgICAgIHRoaXMubmF2aWdhdGUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudG9nZ2xlU3ViRHJvcGRvd24oaW5kZXgpO1xuICAgICAgICB0aGlzLmNsaWNrVHlwZSA9ICdjbGljayc7XG4gICAgfVxuXG4gICAgdG9nZ2xlU3ViRHJvcGRvd24oaW5kZXg6IG51bWJlcik6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IG9wZW5TdWJEcm9wZG93bkluZGV4ID0gdGhpcy5vcGVuU3ViRHJvcGRvd24gPz8gLTE7XG5cbiAgICAgICAgaWYgKGluZGV4ICE9PSBvcGVuU3ViRHJvcGRvd25JbmRleCAmJiBvcGVuU3ViRHJvcGRvd25JbmRleCA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzPy5zaG93U3ViRHJvcGRvd25bb3BlblN1YkRyb3Bkb3duSW5kZXhdPy5zZXQoZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zaG93U3ViRHJvcGRvd25baW5kZXhdPy5zZXQoIXRoaXMuc2hvd1N1YkRyb3Bkb3duW2luZGV4XSgpKTtcblxuICAgICAgICB0aGlzLm9wZW5TdWJEcm9wZG93biA9IGluZGV4O1xuICAgICAgICBpZiAoIXRoaXMuc2hvd1N1YkRyb3Bkb3duW2luZGV4XSgpKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW5TdWJEcm9wZG93biA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRDb25maWcoc3ViOiBNZW51SXRlbSwgaW5kZXg6IG51bWJlcik6IE1lbnVJdGVtTGlua0NvbmZpZyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvbkNsaWNrOiAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uU3ViSXRlbUNsaWNrKGV2ZW50LCBzdWIsIGluZGV4KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uVG91Y2hTdGFydDogKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGlja1R5cGUgPSAndG91Y2gnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGFzIE1lbnVJdGVtTGlua0NvbmZpZztcbiAgICB9XG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48bmctY29udGFpbmVyICpuZ0lmPVwiaG92ZXJFbmFibGVkKClcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZ3JvdXBlZE1lbnVJdGVtXCI+PC9uZy1jb250YWluZXI+XG48L25nLWNvbnRhaW5lcj5cbjxuZy1jb250YWluZXIgKm5nSWY9XCIhaG92ZXJFbmFibGVkKClcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZ3JvdXBlZE1lbnVJdGVtXCI+PC9uZy1jb250YWluZXI+XG48L25nLWNvbnRhaW5lcj5cblxuXG48bmctdGVtcGxhdGUgI2dyb3VwZWRNZW51SXRlbT5cbiAgICA8ZGl2IGNsYXNzPVwibWVudS1pdGVtLXdyYXBwZXJcIj5cbiAgICAgICAgPHNwYW4gZGF0YS10YXJnZXQ9XCIubmF2YmFyLWNvbGxhcHNlXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiICpuZ0lmPVwiIWl0ZW0uaXNHcm91cGVkTWVudVwiXG4gICAgICAgICAgKGNsaWNrKT1cInRvZ2dsZURyb3Bkb3duKClcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwidG9wLW5hdi1saW5rIG5hdi1saW5rLWdyb3VwZWQgZHJvcGRvd24tdG9nZ2xlIGFjdGl2ZVwiXG4gICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgW2NsYXNzLmhvdmVyLWVuYWJsZWRdPVwiaG92ZXJFbmFibGVkKClcIj5cbiAgICAgICAgICAgICAgICB7eyBpdGVtLmxpbmsubGFiZWwgfCB0cnVuY2F0ZTogY2hhclNpemUubWluTGVuZ3RoIH19XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvc3Bhbj5cblxuICAgICAgICA8c3BhbiBkYXRhLXRhcmdldD1cIi5uYXZiYXItY29sbGFwc2VcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgKm5nSWY9XCJpdGVtLmlzR3JvdXBlZE1lbnVcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlRHJvcGRvd24oKVwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW0gYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgPHNjcm0tbWVudS1pdGVtLWxpbmsgW2NsYXNzXT1cIntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RvcC1uYXYtbGluayc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICduYXYtbGluay1ncm91cGVkJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Ryb3Bkb3duLXRvZ2dsZSc6IGl0ZW0uc3VibWVudS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdob3Zlci1lbmFibGVkJzogaG92ZXJFbmFibGVkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICduYXYtbGluay1hY3RpdmF0ZWQnOiBzaG93RHJvcGRvd24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsaW5rXT1cIml0ZW0ubGlua1wiPlxuICAgICAgICAgICAgICAgIDwvc2NybS1tZW51LWl0ZW0tbGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHVsIGFyaWEtbGFiZWxsZWRieT1cIm5hdmJhckRyb3Bkb3duTWVudUxpbmtcIlxuICAgICAgICAgICAgY2xhc3M9XCJkcm9wZG93bi1tZW51IG1haW5cIlxuICAgICAgICAgICAgW2NsYXNzLnNob3ddPVwic2hvd0Ryb3Bkb3duKClcIlxuICAgICAgICAgICAgW2NsYXNzLmhvdmVyLWVuYWJsZWRdPVwiaG92ZXJFbmFibGVkKClcIlxuICAgICAgICAgICAgW2NsYXNzLm1vYmlsZS1hZG1pbi1kcm9wZG93bl09XCJpdGVtLmlzR3JvdXBlZE1lbnVcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IHN1YiBvZiBpdGVtLnN1Ym1lbnU7IGluZGV4IGFzIGk7XCIgY2xhc3M9XCJuYXYtaXRlbSBkcm9wZG93bi1zdWJtZW51IHN1Ym1lbnVcIj5cblxuICAgICAgICAgICAgICAgIDxzY3JtLW1lbnUtaXRlbS1saW5rIFtjbGFzc109XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3N1Yi1uYXYtbGluayc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25hdi1saW5rJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYWN0aW9uLWxpbmsnOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkcm9wZG93bi1pdGVtJzogc3ViLnN1Ym1lbnUubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkcm9wZG93bi10b2dnbGUnOiBzdWIuc3VibWVudS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsaW5rXT1cInN1Yi5saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29uZmlnXT1cImdldENvbmZpZyhzdWIsIGkpXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPC9zY3JtLW1lbnUtaXRlbS1saW5rPlxuXG4gICAgICAgICAgICAgICAgPHVsICpuZ0lmPVwic3ViLnN1Ym1lbnUubGVuZ3RoXCJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImhpZGVEcm9wZG93bigpXCJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzLnJvdW5kZWQtMF09XCJzdWIuc3VibWVudSAmJiBzdWIuc3VibWVudS5sZW5ndGggPT09IDFcIlxuICAgICAgICAgICAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cInRoaXMuc2hvd1N1YkRyb3Bkb3duW2ldKClcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImRyb3Bkb3duLW1lbnUgc3VibWVudVwiXG4gICAgICAgICAgICAgICAgPlxuXG4gICAgICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgc3ViaXRlbSBvZiBzdWIuc3VibWVudVwiIGNsYXNzPVwibmF2LWl0ZW1cIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tbWVudS1pdGVtLWxpbmsgKGNsaWNrKT1cImhpZGVEcm9wZG93bigpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzc109XCInc3VibWVudS1uYXYtbGluayBuYXYtbGluayBhY3Rpb24tbGluaydcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ljb25dPVwic3ViaXRlbS5pY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsaW5rXT1cInN1Yml0ZW0ubGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zY3JtLW1lbnUtaXRlbS1saW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic3ViICYmIHN1Yi5tb2R1bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLXN1Yi1tZW51LXJlY2VudGx5LXZpZXdlZCBbbW9kdWxlXT1cInN1Yi5tb2R1bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb25maWddPVwicmVjZW50bHlWaWV3ZWRDb25maWdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zY3JtLXN1Yi1tZW51LXJlY2VudGx5LXZpZXdlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLXN1Yi1tZW51LWZhdm9yaXRlcyBbbW9kdWxlXT1cInN1Yi5tb2R1bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb25maWddPVwiZmF2b3JpdGVzQ29uZmlnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Njcm0tc3ViLW1lbnUtZmF2b3JpdGVzPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG4iXX0=