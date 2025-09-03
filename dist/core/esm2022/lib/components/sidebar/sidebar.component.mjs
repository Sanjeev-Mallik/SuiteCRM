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
import { Component, signal, ViewChild } from '@angular/core';
import { AppStateStore } from "../../store/app-state/app-state.store";
import { combineLatestWith } from "rxjs";
import { NavigationStore } from "../../store/navigation/navigation.store";
import { ModuleNameMapper } from "../../services/navigation/module-name-mapper/module-name-mapper.service";
import { ModuleNavigation } from "../../services/navigation/module-navigation/module-navigation.service";
import { LanguageStore } from "../../store/language/language.store";
import { map } from "rxjs/operators";
import { CommonModule } from "@angular/common";
import { SidebarModule } from "primeng/sidebar";
import { ImageModule } from "../image/image.module";
import { MobileMenuComponent } from "./mobile-menu/mobile-menu.component";
import { SearchBarModule } from "../search-bar/search-bar.module";
import { SearchBarComponent } from "../search-bar/search-bar.component";
import * as i0 from "@angular/core";
import * as i1 from "../../store/app-state/app-state.store";
import * as i2 from "../../store/navigation/navigation.store";
import * as i3 from "../../services/navigation/module-name-mapper/module-name-mapper.service";
import * as i4 from "../../services/navigation/module-navigation/module-navigation.service";
import * as i5 from "../../store/language/language.store";
import * as i6 from "@angular/common";
import * as i7 from "primeng/sidebar";
import * as i8 from "primeng/api";
import * as i9 from "../image/image.component";
import * as i10 from "../search-bar/search-bar.component";
const _c0 = ["searchBarComponent"];
function SidebarComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4)(1, "div", 5)(2, "button", 6);
    i0.ɵɵlistener("click", function SidebarComponent_ng_template_1_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.toggleSidebar()); });
    i0.ɵɵelement(3, "scrm-image", 7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 8)(5, "scrm-search-bar", 9, 0);
    i0.ɵɵlistener("searchExpression", function SidebarComponent_ng_template_1_Template_scrm_search_bar_searchExpression_5_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.search($event)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("labelKey", "LBL_FILTER_MODULES")("klass", "search-bar-mobile-menu")("searchTrigger", "input");
} }
function SidebarComponent_ng_template_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-mobile-menu", 12);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("menuItems", ctx_r1.displayedItems);
} }
function SidebarComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtemplate(1, SidebarComponent_ng_template_2_ng_container_1_Template, 2, 1, "ng-container", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.displayedItems());
} }
export class SidebarComponent {
    constructor(appStateStore, navigationStore, moduleNameMapper, moduleNavigation, language) {
        this.appStateStore = appStateStore;
        this.navigationStore = navigationStore;
        this.moduleNameMapper = moduleNameMapper;
        this.moduleNavigation = moduleNavigation;
        this.language = language;
        this.isSidebarVisible = false;
        this.menuItems = [];
        this.displayedItems = signal([]);
        this.subs = [];
    }
    ngOnInit() {
        this.subs.push(this.navigationStore.vm$.pipe(combineLatestWith(this.language.vm$), map(([navigation, language]) => {
            this.setMenuItems(navigation.modules, navigation.tabs, language.appListStrings);
        })).subscribe());
        this.subs.push(this.appStateStore.isSidebarVisible$.subscribe((isSidebarVisible) => {
            this.isSidebarVisible = isSidebarVisible;
            if (!this.isSidebarVisible) {
                this.clearFilter();
            }
        }));
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    setMenuItems(modules, tabs, appListStrings) {
        const menuItems = [];
        tabs.forEach((tab) => {
            const moduleInfo = modules[tab];
            const moduleRoute = this.moduleNavigation.getModuleRoute(moduleInfo);
            const menuItem = {
                link: {
                    label: this.moduleNavigation.getModuleLabel(moduleInfo, appListStrings),
                    url: moduleRoute.url,
                    route: moduleRoute.route,
                    params: null
                },
                icon: this.moduleNameMapper.toLegacy(moduleInfo?.name) ?? null,
                submenu: [],
                module: moduleInfo?.name ?? null
            };
            menuItems.push(menuItem);
        });
        this.menuItems = [...menuItems];
        this.displayedItems.set([...menuItems]);
    }
    toggleSidebar() {
        this.appStateStore.toggleSidebar();
    }
    closeSidebar() {
        this.clearFilter();
        this.appStateStore.closeSidebar();
    }
    search(searchTerm) {
        this.displayedItems.set([]);
        if (searchTerm.length && searchTerm.trim() !== '') {
            this.displayedItems.set(this.menuItems.filter(item => {
                return item?.link?.label.toLowerCase().includes(searchTerm.toLowerCase());
            }) ?? []);
        }
        else {
            this.resetMenuItems();
        }
    }
    resetMenuItems() {
        this.displayedItems.set([...this.menuItems]);
    }
    clearFilter() {
        this.resetMenuItems();
        this?.searchBarComponent?.clearSearchTerm();
    }
    static { this.ɵfac = function SidebarComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SidebarComponent)(i0.ɵɵdirectiveInject(i1.AppStateStore), i0.ɵɵdirectiveInject(i2.NavigationStore), i0.ɵɵdirectiveInject(i3.ModuleNameMapper), i0.ɵɵdirectiveInject(i4.ModuleNavigation), i0.ɵɵdirectiveInject(i5.LanguageStore)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SidebarComponent, selectors: [["scrm-sidebar"]], viewQuery: function SidebarComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.searchBarComponent = _t.first);
        } }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 3, vars: 2, consts: [["searchBarComponent", ""], [3, "visibleChange", "onHide", "visible", "showCloseIcon"], ["pTemplate", "header"], ["pTemplate", "content"], [1, "d-flex", "justify-content-start"], [1, "flex-shrink-1"], ["type", "button", 1, "navbar-toggler", 3, "click"], ["image", "hamburger", 1, "responsive-menu-toggler"], [1, "d-flex", "flex-grow-1", "justify-content-center"], [3, "searchExpression", "labelKey", "klass", "searchTrigger"], [1, "sidebar-container"], [4, "ngIf"], [3, "menuItems"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p-sidebar", 1);
            i0.ɵɵtwoWayListener("visibleChange", function SidebarComponent_Template_p_sidebar_visibleChange_0_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.isSidebarVisible, $event) || (ctx.isSidebarVisible = $event); return $event; });
            i0.ɵɵlistener("onHide", function SidebarComponent_Template_p_sidebar_onHide_0_listener() { return ctx.closeSidebar(); });
            i0.ɵɵtemplate(1, SidebarComponent_ng_template_1_Template, 7, 3, "ng-template", 2)(2, SidebarComponent_ng_template_2_Template, 2, 1, "ng-template", 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵtwoWayProperty("visible", ctx.isSidebarVisible);
            i0.ɵɵproperty("showCloseIcon", false);
        } }, dependencies: [CommonModule, i6.NgIf, SidebarModule, i7.Sidebar, i8.PrimeTemplate, ImageModule, i9.ImageComponent, MobileMenuComponent, SearchBarModule, i10.SearchBarComponent], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SidebarComponent, [{
        type: Component,
        args: [{ selector: 'scrm-sidebar', standalone: true, imports: [CommonModule, SidebarModule, ImageModule, MobileMenuComponent, SearchBarModule], template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2024 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<p-sidebar [(visible)]=\"isSidebarVisible\" [showCloseIcon]=\"false\" (onHide)=\"closeSidebar()\">\n    <ng-template pTemplate=\"header\">\n        <div class=\"d-flex justify-content-start\">\n            <div class=\"flex-shrink-1\">\n                <button (click)=\"toggleSidebar()\" class=\"navbar-toggler\" type=\"button\">\n                    <scrm-image class=\"responsive-menu-toggler\" image=\"hamburger\"></scrm-image>\n                </button>\n            </div>\n\n            <div class=\"d-flex flex-grow-1 justify-content-center\">\n                <scrm-search-bar\n                        #searchBarComponent\n                        [labelKey]=\"'LBL_FILTER_MODULES'\"\n                        [klass]=\"'search-bar-mobile-menu'\"\n                        [searchTrigger]=\"'input'\"\n                        (searchExpression)=\"search($event)\">\n                </scrm-search-bar>\n            </div>\n        </div>\n    </ng-template>\n    <ng-template pTemplate=\"content\">\n        <div class=\"sidebar-container\">\n            <ng-container *ngIf=\"displayedItems()\">\n                <scrm-mobile-menu [menuItems]=\"displayedItems\"></scrm-mobile-menu>\n            </ng-container>\n        </div>\n    </ng-template>\n</p-sidebar>\n" }]
    }], () => [{ type: i1.AppStateStore }, { type: i2.NavigationStore }, { type: i3.ModuleNameMapper }, { type: i4.ModuleNavigation }, { type: i5.LanguageStore }], { searchBarComponent: [{
            type: ViewChild,
            args: ['searchBarComponent']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SidebarComponent, { className: "SidebarComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFxQixNQUFNLEVBQUUsU0FBUyxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDcEUsT0FBTyxFQUFDLGlCQUFpQixFQUFlLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBOEIsZUFBZSxFQUFDLE1BQU0seUNBQXlDLENBQUM7QUFFckcsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0seUVBQXlFLENBQUM7QUFDekcsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sdUVBQXVFLENBQUM7QUFDdkcsT0FBTyxFQUF3QixhQUFhLEVBQWtCLE1BQU0scUNBQXFDLENBQUM7QUFDMUcsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ25DLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDOUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ2xELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUNoRSxPQUFPLEVBQUMsa0JB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QUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDZCxDQUFDO2FBQU0sQ0FBQztZQUNKLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMxQixDQUFDO0lBQ0wsQ0FBQztJQUVTLGNBQWM7UUFDcEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFUyxXQUFXO1FBQ2pCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLEVBQUUsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLENBQUM7SUFDaEQsQ0FBQztpSEE1RlEsZ0JBQWdCO29FQUFoQixnQkFBZ0I7Ozs7OztZQ3RCN0Isb0NBQTRGO1lBQWpGLDhOQUE4QjtZQUF5QixrR0FBVSxrQkFBYyxJQUFDO1lBb0J2RixBQW5CQSxpRkFBZ0Msb0VBbUJDO1lBT3JDLGlCQUFZOztZQTNCRCxvREFBOEI7WUFBQyxxQ0FBdUI7NEJEbUJuRCxZQUFZLFdBQUUsYUFBYSxnQ0FBRSxXQUFXLHFCQUFFLG1CQUFtQixFQUFFLGVBQWU7O2lGQUcvRSxnQkFBZ0I7Y0FQNUIsU0FBUzsyQkFDSSxjQUFjLGNBRVosSUFBSSxXQUNQLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsZUFBZSxDQUFDO3NLQUt4RCxrQkFBa0I7a0JBQWxELFNBQVM7bUJBQUMsb0JBQW9COztrRkFGdEIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjQgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIHNpZ25hbCwgVmlld0NoaWxkLCBXcml0YWJsZVNpZ25hbH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FwcFN0YXRlU3RvcmV9IGZyb20gXCIuLi8uLi9zdG9yZS9hcHAtc3RhdGUvYXBwLXN0YXRlLnN0b3JlXCI7XG5pbXBvcnQge2NvbWJpbmVMYXRlc3RXaXRoLCBTdWJzY3JpcHRpb259IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge05hdmJhck1vZHVsZU1hcCwgTmF2aWdhdGlvbiwgTmF2aWdhdGlvblN0b3JlfSBmcm9tIFwiLi4vLi4vc3RvcmUvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLnN0b3JlXCI7XG5pbXBvcnQge01lbnVJdGVtfSBmcm9tICcuLi8uLi9jb21tb24vbWVudS9tZW51Lm1vZGVsJztcbmltcG9ydCB7TW9kdWxlTmFtZU1hcHBlcn0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL25hdmlnYXRpb24vbW9kdWxlLW5hbWUtbWFwcGVyL21vZHVsZS1uYW1lLW1hcHBlci5zZXJ2aWNlXCI7XG5pbXBvcnQge01vZHVsZU5hdmlnYXRpb259IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL21vZHVsZS1uYXZpZ2F0aW9uL21vZHVsZS1uYXZpZ2F0aW9uLnNlcnZpY2VcIjtcbmltcG9ydCB7TGFuZ3VhZ2VMaXN0U3RyaW5nTWFwLCBMYW5ndWFnZVN0b3JlLCBMYW5ndWFnZVN0cmluZ3N9IGZyb20gXCIuLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZVwiO1xuaW1wb3J0IHttYXB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7U2lkZWJhck1vZHVsZX0gZnJvbSBcInByaW1lbmcvc2lkZWJhclwiO1xuaW1wb3J0IHtJbWFnZU1vZHVsZX0gZnJvbSBcIi4uL2ltYWdlL2ltYWdlLm1vZHVsZVwiO1xuaW1wb3J0IHtNb2JpbGVNZW51Q29tcG9uZW50fSBmcm9tIFwiLi9tb2JpbGUtbWVudS9tb2JpbGUtbWVudS5jb21wb25lbnRcIjtcbmltcG9ydCB7U2VhcmNoQmFyTW9kdWxlfSBmcm9tIFwiLi4vc2VhcmNoLWJhci9zZWFyY2gtYmFyLm1vZHVsZVwiO1xuaW1wb3J0IHtTZWFyY2hCYXJDb21wb25lbnR9IGZyb20gXCIuLi9zZWFyY2gtYmFyL3NlYXJjaC1iYXIuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1zaWRlYmFyJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3NpZGViYXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgU2lkZWJhck1vZHVsZSwgSW1hZ2VNb2R1bGUsIE1vYmlsZU1lbnVDb21wb25lbnQsIFNlYXJjaEJhck1vZHVsZV0sXG59KVxuXG5leHBvcnQgY2xhc3MgU2lkZWJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIEBWaWV3Q2hpbGQoJ3NlYXJjaEJhckNvbXBvbmVudCcpIHNlYXJjaEJhckNvbXBvbmVudDogU2VhcmNoQmFyQ29tcG9uZW50O1xuICAgIGlzU2lkZWJhclZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBtZW51SXRlbXM6IE1lbnVJdGVtW10gPSBbXTtcbiAgICBkaXNwbGF5ZWRJdGVtczogV3JpdGFibGVTaWduYWw8TWVudUl0ZW1bXT4gPSBzaWduYWw8TWVudUl0ZW1bXT4oW10pO1xuXG4gICAgcHJvdGVjdGVkIHN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGFwcFN0YXRlU3RvcmU6IEFwcFN0YXRlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBuYXZpZ2F0aW9uU3RvcmU6IE5hdmlnYXRpb25TdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIG1vZHVsZU5hbWVNYXBwZXI6IE1vZHVsZU5hbWVNYXBwZXIsXG4gICAgICAgIHByb3RlY3RlZCBtb2R1bGVOYXZpZ2F0aW9uOiBNb2R1bGVOYXZpZ2F0aW9uLFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmVcbiAgICApIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5uYXZpZ2F0aW9uU3RvcmUudm0kLnBpcGUoXG4gICAgICAgICAgICBjb21iaW5lTGF0ZXN0V2l0aCh0aGlzLmxhbmd1YWdlLnZtJCksXG4gICAgICAgICAgICBtYXAoKFtuYXZpZ2F0aW9uLCBsYW5ndWFnZV06IFtOYXZpZ2F0aW9uLCBMYW5ndWFnZVN0cmluZ3NdKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRNZW51SXRlbXMobmF2aWdhdGlvbi5tb2R1bGVzLCBuYXZpZ2F0aW9uLnRhYnMsIGxhbmd1YWdlLmFwcExpc3RTdHJpbmdzKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICkuc3Vic2NyaWJlKCkpO1xuXG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMuYXBwU3RhdGVTdG9yZS5pc1NpZGViYXJWaXNpYmxlJC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAoaXNTaWRlYmFyVmlzaWJsZTogYm9vbGVhbikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTaWRlYmFyVmlzaWJsZSA9IGlzU2lkZWJhclZpc2libGU7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzU2lkZWJhclZpc2libGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhckZpbHRlcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3Vicy5mb3JFYWNoKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XG4gICAgfVxuXG4gICAgc2V0TWVudUl0ZW1zKG1vZHVsZXM6IE5hdmJhck1vZHVsZU1hcCwgdGFiczogc3RyaW5nW10sIGFwcExpc3RTdHJpbmdzOiBMYW5ndWFnZUxpc3RTdHJpbmdNYXApOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbWVudUl0ZW1zID0gW107XG4gICAgICAgIHRhYnMuZm9yRWFjaCgodGFiOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1vZHVsZUluZm8gPSBtb2R1bGVzW3RhYl07XG4gICAgICAgICAgICBjb25zdCBtb2R1bGVSb3V0ZSA9IHRoaXMubW9kdWxlTmF2aWdhdGlvbi5nZXRNb2R1bGVSb3V0ZShtb2R1bGVJbmZvKTtcblxuICAgICAgICAgICAgY29uc3QgbWVudUl0ZW06IE1lbnVJdGVtID0ge1xuICAgICAgICAgICAgICAgIGxpbms6IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHRoaXMubW9kdWxlTmF2aWdhdGlvbi5nZXRNb2R1bGVMYWJlbChtb2R1bGVJbmZvLCBhcHBMaXN0U3RyaW5ncyksXG4gICAgICAgICAgICAgICAgICAgIHVybDogbW9kdWxlUm91dGUudXJsLFxuICAgICAgICAgICAgICAgICAgICByb3V0ZTogbW9kdWxlUm91dGUucm91dGUsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczogbnVsbFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaWNvbjogdGhpcy5tb2R1bGVOYW1lTWFwcGVyLnRvTGVnYWN5KG1vZHVsZUluZm8/Lm5hbWUpID8/IG51bGwsXG4gICAgICAgICAgICAgICAgc3VibWVudTogW10sXG4gICAgICAgICAgICAgICAgbW9kdWxlOiBtb2R1bGVJbmZvPy5uYW1lID8/IG51bGxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBtZW51SXRlbXMucHVzaChtZW51SXRlbSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubWVudUl0ZW1zID0gWy4uLm1lbnVJdGVtc107XG5cbiAgICAgICAgdGhpcy5kaXNwbGF5ZWRJdGVtcy5zZXQoWy4uLm1lbnVJdGVtc10pO1xuICAgIH1cblxuICAgIHRvZ2dsZVNpZGViYXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYXBwU3RhdGVTdG9yZS50b2dnbGVTaWRlYmFyKCk7XG4gICAgfVxuXG4gICAgY2xvc2VTaWRlYmFyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNsZWFyRmlsdGVyKCk7XG4gICAgICAgIHRoaXMuYXBwU3RhdGVTdG9yZS5jbG9zZVNpZGViYXIoKTtcbiAgICB9XG5cbiAgICBzZWFyY2goc2VhcmNoVGVybTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGlzcGxheWVkSXRlbXMuc2V0KFtdKTtcbiAgICAgICAgaWYgKHNlYXJjaFRlcm0ubGVuZ3RoICYmIHNlYXJjaFRlcm0udHJpbSgpICE9PSAnJykge1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5ZWRJdGVtcy5zZXQodGhpcy5tZW51SXRlbXMuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtPy5saW5rPy5sYWJlbC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgICB9KSA/PyBbXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0TWVudUl0ZW1zKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVzZXRNZW51SXRlbXMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGlzcGxheWVkSXRlbXMuc2V0KFsuLi50aGlzLm1lbnVJdGVtc10pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjbGVhckZpbHRlcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZXNldE1lbnVJdGVtcygpO1xuICAgICAgICB0aGlzPy5zZWFyY2hCYXJDb21wb25lbnQ/LmNsZWFyU2VhcmNoVGVybSgpO1xuICAgIH1cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjQgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjxwLXNpZGViYXIgWyh2aXNpYmxlKV09XCJpc1NpZGViYXJWaXNpYmxlXCIgW3Nob3dDbG9zZUljb25dPVwiZmFsc2VcIiAob25IaWRlKT1cImNsb3NlU2lkZWJhcigpXCI+XG4gICAgPG5nLXRlbXBsYXRlIHBUZW1wbGF0ZT1cImhlYWRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1zdGFydFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtc2hyaW5rLTFcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJ0b2dnbGVTaWRlYmFyKClcIiBjbGFzcz1cIm5hdmJhci10b2dnbGVyXCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8c2NybS1pbWFnZSBjbGFzcz1cInJlc3BvbnNpdmUtbWVudS10b2dnbGVyXCIgaW1hZ2U9XCJoYW1idXJnZXJcIj48L3Njcm0taW1hZ2U+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBmbGV4LWdyb3ctMSBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPHNjcm0tc2VhcmNoLWJhclxuICAgICAgICAgICAgICAgICAgICAgICAgI3NlYXJjaEJhckNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgW2xhYmVsS2V5XT1cIidMQkxfRklMVEVSX01PRFVMRVMnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtrbGFzc109XCInc2VhcmNoLWJhci1tb2JpbGUtbWVudSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW3NlYXJjaFRyaWdnZXJdPVwiJ2lucHV0J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAoc2VhcmNoRXhwcmVzc2lvbik9XCJzZWFyY2goJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgIDwvc2NybS1zZWFyY2gtYmFyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlIHBUZW1wbGF0ZT1cImNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNpZGViYXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZGlzcGxheWVkSXRlbXMoKVwiPlxuICAgICAgICAgICAgICAgIDxzY3JtLW1vYmlsZS1tZW51IFttZW51SXRlbXNdPVwiZGlzcGxheWVkSXRlbXNcIj48L3Njcm0tbW9iaWxlLW1lbnU+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbjwvcC1zaWRlYmFyPlxuIl19