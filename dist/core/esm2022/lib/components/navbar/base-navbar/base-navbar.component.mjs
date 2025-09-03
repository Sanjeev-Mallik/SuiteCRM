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
import { Component, ElementRef, HostListener, signal, ViewChild } from '@angular/core';
import { combineLatestWith } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { NavbarAbstract } from '../navbar.abstract';
import { transition, trigger, useAnimation } from '@angular/animations';
import { backInDown } from 'ng-animate';
import { ActionNameMapper } from '../../../services/navigation/action-name-mapper/action-name-mapper.service';
import { SystemConfigStore } from '../../../store/system-config/system-config.store';
import { NavigationStore } from '../../../store/navigation/navigation.store';
import { UserPreferenceStore } from '../../../store/user-preference/user-preference.store';
import { ScreenSize, ScreenSizeObserverService } from '../../../services/ui/screen-size-observer/screen-size-observer.service';
import { RouteConverter } from '../../../services/navigation/route-converter/route-converter.service';
import { LanguageStore } from '../../../store/language/language.store';
import { ModuleNavigation } from '../../../services/navigation/module-navigation/module-navigation.service';
import { ModuleNameMapper } from '../../../services/navigation/module-name-mapper/module-name-mapper.service';
import { AppStateStore } from '../../../store/app-state/app-state.store';
import { AuthService } from '../../../services/auth/auth.service';
import { ready } from '../../../common/utils/object-utils';
import { AsyncActionService } from '../../../services/process/processes/async-action/async-action';
import { NotificationStore } from "../../../store/notification/notification.store";
import { GlobalRecentlyViewedStore } from "../../../store/global-recently-viewed/global-recently-viewed.store";
import { GlobalSearch } from "../../../services/navigation/global-search/global-search.service";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { SearchBarComponent } from "../../search-bar/search-bar.component";
import { NavigationEnd, Router } from "@angular/router";
import { NgbDropdown } from "@ng-bootstrap/ng-bootstrap";
import * as i0 from "@angular/core";
import * as i1 from "../../../store/navigation/navigation.store";
import * as i2 from "../../../store/language/language.store";
import * as i3 from "../../../store/user-preference/user-preference.store";
import * as i4 from "../../../store/system-config/system-config.store";
import * as i5 from "../../../store/app-state/app-state.store";
import * as i6 from "../../../services/auth/auth.service";
import * as i7 from "../../../services/navigation/module-navigation/module-navigation.service";
import * as i8 from "../../../services/ui/screen-size-observer/screen-size-observer.service";
import * as i9 from "../../../services/process/processes/async-action/async-action";
import * as i10 from "../../../store/notification/notification.store";
import * as i11 from "../../../store/global-recently-viewed/global-recently-viewed.store";
import * as i12 from "../../../services/navigation/global-search/global-search.service";
import * as i13 from "@angular/cdk/layout";
import * as i14 from "@angular/router";
import * as i15 from "@angular/common";
import * as i16 from "../../logo/logo.component";
import * as i17 from "../../logout/logout.component";
import * as i18 from "@ng-bootstrap/ng-bootstrap";
import * as i19 from "../../image/image.component";
import * as i20 from "../../label/label.component";
import * as i21 from "../../../containers/notifications/notifications.component";
import * as i22 from "../../search-bar/search-bar.component";
import * as i23 from "../recently-viewed/recently-viewed.component";
import * as i24 from "../menu-item/menu-item.component";
import * as i25 from "../home-menu-item/home-menu-item.component";
import * as i26 from "../grouped-menu-item/grouped-menu-item.component";
import * as i27 from "../menu-items-list/menu-items-list.component";
const _c0 = ["mobileGlobalLinkTitle"];
const _c1 = ["searchTerm"];
const _c2 = ["alertDropdown"];
const _c3 = () => [];
function BaseNavbarComponent_div_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nav", 8)(1, "div", 9)(2, "ul", 10)(3, "li", 11);
    i0.ɵɵtext(4, "\u00A0 ");
    i0.ɵɵelementEnd()()()();
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "nav", 12)(2, "div", 13)(3, "ul", 10)(4, "li", 14);
    i0.ɵɵelement(5, "scrm-logo-ui");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementContainerEnd();
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_2_li_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 31);
    i0.ɵɵelement(1, "scrm-menu-item", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("item", ctx_r1.navbar.current);
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_2_li_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 33);
    i0.ɵɵelement(1, "scrm-grouped-menu-item", 34);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("item", ctx_r1.navbar.current)("subNavCollapse", ctx_r1.subNavCollapse);
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_2_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_2_ng_template_19_ng_container_0_hr_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "hr");
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_2_ng_template_19_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 36);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, BaseNavbarComponent_div_0_ng_container_2_ng_container_2_ng_template_19_ng_container_0_hr_3_Template, 1, 0, "hr", 7);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const globalAction_r3 = ctx.$implicit;
    const first_r4 = ctx.first;
    const last_r5 = ctx.last;
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("href", globalAction_r3.link.url, i0.ɵɵsanitizeUrl);
    i0.ɵɵpropertyInterpolate("target", globalAction_r3.link.target);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", globalAction_r3.link.label, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", last_r5 === true || first_r4 === true);
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_2_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, BaseNavbarComponent_div_0_ng_container_2_ng_container_2_ng_template_19_ng_container_0_Template, 4, 4, "ng-container", 35);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngForOf", ctx_r1.navbar.globalActions);
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "ul", 15)(2, "div", 16)(3, "button", 17);
    i0.ɵɵlistener("click", function BaseNavbarComponent_div_0_ng_container_2_ng_container_2_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.toggleSidebar()); });
    i0.ɵɵelement(4, "scrm-image", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "nav", 19)(6, "ul", 20);
    i0.ɵɵtemplate(7, BaseNavbarComponent_div_0_ng_container_2_ng_container_2_li_7_Template, 2, 1, "li", 21)(8, BaseNavbarComponent_div_0_ng_container_2_ng_container_2_li_8_Template, 2, 2, "li", 22);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div", 23);
    i0.ɵɵtemplate(10, BaseNavbarComponent_div_0_ng_container_2_ng_container_2_ng_container_10_Template, 1, 0, "ng-container", 24);
    i0.ɵɵelementStart(11, "div", 25)(12, "li", 26)(13, "a", 27, 1);
    i0.ɵɵelement(15, "scrm-image", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "div", 29)(17, "span", 30);
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(19, BaseNavbarComponent_div_0_ng_container_2_ng_container_2_ng_template_19_Template, 1, 1, "ng-template", 6);
    i0.ɵɵelement(20, "scrm-logout-ui");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const mobileGlobalLinkTitle_r6 = i0.ɵɵreference(14);
    i0.ɵɵnextContext(2);
    const actionIcons_r7 = i0.ɵɵreference(4);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngClass", ctx_r1.isSmallScreen() && ctx_r1.isSearchBoxVisible() ? "d-none" : "d-block");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.navbar.current && !ctx_r1.navbar.current.isGroupedMenu);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.navbar.current == null ? null : ctx_r1.navbar.current.submenu) && ctx_r1.navbar.current.isGroupedMenu);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", actionIcons_r7);
    i0.ɵɵadvance(6);
    i0.ɵɵstyleProp("min-width", mobileGlobalLinkTitle_r6.offsetWidth, "px");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ctx_r1.navbar.currentUser.firstName, " ", ctx_r1.navbar.currentUser.lastName, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.navbar.globalActions);
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "li", 46);
    i0.ɵɵelement(2, "scrm-grouped-menu-item", 47);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("item", ctx_r1.navbar.current)("subNavCollapse", ctx_r1.subNavCollapse)("index", 1);
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_4_li_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 48);
    i0.ɵɵelement(1, "scrm-menu-item", 49);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("item", ctx_r1.navbar.current)("index", 1);
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_4_li_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 46);
    i0.ɵɵelement(1, "scrm-grouped-menu-item", 47);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("item", item_r8)("subNavCollapse", ctx_r1.subNavCollapse)("index", i_r9 + 2);
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "ul", 42);
    i0.ɵɵtemplate(2, BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_4_ng_container_2_Template, 3, 3, "ng-container", 7)(3, BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_4_li_3_Template, 2, 2, "li", 43)(4, BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_4_li_4_Template, 2, 3, "li", 44);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "scrm-menu-items-list", 45);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.navbar.current && ctx_r1.navbar.current.isGroupedMenu);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.navbar.current && !ctx_r1.navbar.current.isGroupedMenu);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.navbar.menu);
    i0.ɵɵadvance();
    i0.ɵɵproperty("items", ctx_r1.navbar.all.modules)("index", ctx_r1.navbar.menu.length + 2);
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_5_li_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 48);
    i0.ɵɵelement(1, "scrm-menu-item", 49);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("item", ctx_r1.navbar.current)("index", 1);
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "li", 46);
    i0.ɵɵelement(2, "scrm-grouped-menu-item", 47);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("item", ctx_r1.navbar.current)("subNavCollapse", ctx_r1.subNavCollapse)("index", 1);
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_5_li_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 52);
    i0.ɵɵelement(1, "scrm-menu-item", 49);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    i0.ɵɵadvance();
    i0.ɵɵproperty("item", item_r10)("index", i_r11 + 2);
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "ul", 10);
    i0.ɵɵtemplate(2, BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_5_li_2_Template, 2, 2, "li", 43)(3, BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_5_ng_container_3_Template, 3, 3, "ng-container", 7)(4, BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_5_li_4_Template, 2, 2, "li", 50);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "scrm-menu-items-list", 51);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.navbar.current && !ctx_r1.navbar.current.isGroupedMenu);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.navbar.current == null ? null : ctx_r1.navbar.current.submenu) && ctx_r1.navbar.current.isGroupedMenu);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.navbar.menu);
    i0.ɵɵadvance();
    i0.ɵɵproperty("items", ctx_r1.navbar.all.modules)("index", ctx_r1.navbar.menu.length + 2);
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_15_ng_container_1_hr_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "hr");
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_15_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 36);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_15_ng_container_1_hr_3_Template, 1, 0, "hr", 7);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const globalAction_r12 = ctx.$implicit;
    const first_r13 = ctx.first;
    const last_r14 = ctx.last;
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("href", globalAction_r12.link.url, i0.ɵɵsanitizeUrl);
    i0.ɵɵpropertyInterpolate("target", globalAction_r12.link.target);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", globalAction_r12.link.label, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", last_r14 === true || first_r13 === true);
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_15_ng_container_1_Template, 4, 4, "ng-container", 35);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.navbar.globalActions);
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "nav", 37)(2, "div", 38);
    i0.ɵɵelement(3, "scrm-home-menu-item", 39);
    i0.ɵɵtemplate(4, BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_4_Template, 6, 5, "ng-container", 7)(5, BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_5_Template, 6, 5, "ng-container", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_6_Template, 1, 0, "ng-container", 24);
    i0.ɵɵelementStart(7, "div", 25)(8, "ul", 10)(9, "li", 26)(10, "a", 40);
    i0.ɵɵelement(11, "scrm-image", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 41)(13, "span", 30);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(15, BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_15_Template, 2, 1, "ng-container", 7);
    i0.ɵɵelement(16, "scrm-logout-ui");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const vm_r15 = i0.ɵɵnextContext(2).ngIf;
    const actionIcons_r7 = i0.ɵɵreference(4);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngbCollapse", ctx_r1.mainNavCollapse);
    i0.ɵɵadvance();
    i0.ɵɵproperty("active", vm_r15.appState.module && vm_r15.appState.module === "home")("route", ctx_r1.getHomePage());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", vm_r15.userPreferences["navigation_paradigm"] == "gm");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", vm_r15.userPreferences["navigation_paradigm"] != "gm");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", actionIcons_r7);
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate2("", ctx_r1.navbar.currentUser.firstName, " ", ctx_r1.navbar.currentUser.lastName, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.navbar.globalActions);
} }
function BaseNavbarComponent_div_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BaseNavbarComponent_div_0_ng_container_2_ng_container_1_Template, 6, 0, "ng-container", 7)(2, BaseNavbarComponent_div_0_ng_container_2_ng_container_2_Template, 21, 9, "ng-container", 7)(3, BaseNavbarComponent_div_0_ng_container_2_ng_container_3_Template, 17, 9, "ng-container", 7);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.isUserLoggedIn);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isUserLoggedIn && ctx_r1.mobileNavbar);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isUserLoggedIn && !ctx_r1.mobileNavbar);
} }
function BaseNavbarComponent_div_0_ng_template_3_ng_container_7_li_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 74);
    i0.ɵɵelement(2, "scrm-label", 75);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    let tmp_10_0;
    const moduleQuickAction_r17 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", moduleQuickAction_r17.url)("queryParams", (tmp_10_0 = moduleQuickAction_r17 == null ? null : moduleQuickAction_r17.params) !== null && tmp_10_0 !== undefined ? tmp_10_0 : null);
    i0.ɵɵadvance();
    i0.ɵɵproperty("labelKey", moduleQuickAction_r17.labelKey)("module", ctx_r1.navbar.current.module);
} }
function BaseNavbarComponent_div_0_ng_template_3_ng_container_7_li_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 76);
    i0.ɵɵlistener("click", function BaseNavbarComponent_div_0_ng_template_3_ng_container_7_li_3_ng_container_2_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r18); const moduleQuickAction_r17 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.handleProcess(moduleQuickAction_r17)); });
    i0.ɵɵelement(2, "scrm-label", 75);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const moduleQuickAction_r17 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("labelKey", moduleQuickAction_r17.labelKey)("module", ctx_r1.navbar.current.module);
} }
function BaseNavbarComponent_div_0_ng_template_3_ng_container_7_li_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 73);
    i0.ɵɵtemplate(1, BaseNavbarComponent_div_0_ng_template_3_ng_container_7_li_3_ng_container_1_Template, 3, 4, "ng-container", 7)(2, BaseNavbarComponent_div_0_ng_template_3_ng_container_7_li_3_ng_container_2_Template, 3, 2, "ng-container", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const moduleQuickAction_r17 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !moduleQuickAction_r17.process);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", moduleQuickAction_r17.process);
} }
function BaseNavbarComponent_div_0_ng_template_3_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "li", 70);
    i0.ɵɵelement(2, "scrm-label", 71);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, BaseNavbarComponent_div_0_ng_template_3_ng_container_7_li_3_Template, 3, 2, "li", 72);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("module", ctx_r1.navbar.current.module);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.currentQuickActions);
} }
function BaseNavbarComponent_div_0_ng_template_3_ng_container_8_li_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 74);
    i0.ɵɵelement(2, "scrm-label", 75);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    let tmp_10_0;
    const quickAction_r19 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", quickAction_r19.url)("queryParams", (tmp_10_0 = quickAction_r19 == null ? null : quickAction_r19.params) !== null && tmp_10_0 !== undefined ? tmp_10_0 : null);
    i0.ɵɵadvance();
    i0.ɵɵproperty("labelKey", quickAction_r19.labelKey)("module", quickAction_r19.module);
} }
function BaseNavbarComponent_div_0_ng_template_3_ng_container_8_li_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 76);
    i0.ɵɵlistener("click", function BaseNavbarComponent_div_0_ng_template_3_ng_container_8_li_3_ng_container_2_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r20); const quickAction_r19 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.handleProcess(quickAction_r19)); });
    i0.ɵɵelement(2, "scrm-label", 75);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const quickAction_r19 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("labelKey", quickAction_r19.labelKey)("module", quickAction_r19.module);
} }
function BaseNavbarComponent_div_0_ng_template_3_ng_container_8_li_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 73);
    i0.ɵɵtemplate(1, BaseNavbarComponent_div_0_ng_template_3_ng_container_8_li_3_ng_container_1_Template, 3, 4, "ng-container", 7)(2, BaseNavbarComponent_div_0_ng_template_3_ng_container_8_li_3_ng_container_2_Template, 3, 2, "ng-container", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const quickAction_r19 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !quickAction_r19.process);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", quickAction_r19.process);
} }
function BaseNavbarComponent_div_0_ng_template_3_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "li", 70);
    i0.ɵɵelement(2, "scrm-label", 77);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, BaseNavbarComponent_div_0_ng_template_3_ng_container_8_li_3_Template, 3, 2, "li", 72);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    let tmp_6_0;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", (tmp_6_0 = ctx_r1 == null ? null : ctx_r1.navigation == null ? null : ctx_r1.navigation.quickActions) !== null && tmp_6_0 !== undefined ? tmp_6_0 : i0.ɵɵpureFunction0(1, _c3));
} }
function BaseNavbarComponent_div_0_ng_template_3_div_24_ng_container_6_span_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const notificationCount_r22 = i0.ɵɵnextContext(2).ngIf;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(notificationCount_r22);
} }
function BaseNavbarComponent_div_0_ng_template_3_div_24_ng_container_6_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 83);
    i0.ɵɵtemplate(1, BaseNavbarComponent_div_0_ng_template_3_div_24_ng_container_6_span_1_ng_container_1_Template, 2, 1, "ng-container", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const notificationCount_r22 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", notificationCount_r22 > 0);
} }
function BaseNavbarComponent_div_0_ng_template_3_div_24_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BaseNavbarComponent_div_0_ng_template_3_div_24_ng_container_6_span_1_Template, 2, 1, "span", 82);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    let tmp_9_0;
    const notificationCount_r22 = ctx.ngIf;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (tmp_9_0 = notificationCount_r22) !== null && tmp_9_0 !== undefined ? tmp_9_0 : false);
} }
function BaseNavbarComponent_div_0_ng_template_3_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 78, 3)(2, "ul", 55)(3, "li", 26)(4, "a", 79);
    i0.ɵɵlistener("mouseenter", function BaseNavbarComponent_div_0_ng_template_3_div_24_Template_a_mouseenter_4_listener() { i0.ɵɵrestoreView(_r21); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.markAsRead()); });
    i0.ɵɵelement(5, "scrm-image", 80);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, BaseNavbarComponent_div_0_ng_template_3_div_24_ng_container_6_Template, 2, 1, "ng-container", 7);
    i0.ɵɵpipe(7, "async");
    i0.ɵɵelementStart(8, "div", 81);
    i0.ɵɵlistener("click", function BaseNavbarComponent_div_0_ng_template_3_div_24_Template_div_click_8_listener() { i0.ɵɵrestoreView(_r21); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.closeNotificationMenu()); });
    i0.ɵɵelement(9, "scrm-notifications");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(7, 1, ctx_r1.notificationCount$));
} }
function BaseNavbarComponent_div_0_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 53)(1, "div", 54)(2, "ul", 55)(3, "li", 26)(4, "a", 56);
    i0.ɵɵelement(5, "scrm-image", 57);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "ul", 58);
    i0.ɵɵtemplate(7, BaseNavbarComponent_div_0_ng_template_3_ng_container_7_Template, 4, 2, "ng-container", 7)(8, BaseNavbarComponent_div_0_ng_template_3_ng_container_8_Template, 4, 2, "ng-container", 7);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(9, "div", 59)(10, "ul", 55)(11, "li", 26)(12, "a", 60);
    i0.ɵɵelement(13, "scrm-image", 61);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 62);
    i0.ɵɵelement(15, "scrm-recently-viewed", 63);
    i0.ɵɵpipe(16, "async");
    i0.ɵɵpipe(17, "slice");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(18, "div", 64)(19, "a", 65);
    i0.ɵɵlistener("click", function BaseNavbarComponent_div_0_ng_template_3_Template_a_click_19_listener() { i0.ɵɵrestoreView(_r16); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.openSearchBox()); });
    i0.ɵɵelement(20, "scrm-image", 66);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "div", 67)(22, "scrm-search-bar", 68, 2);
    i0.ɵɵlistener("isSearchVisible", function BaseNavbarComponent_div_0_ng_template_3_Template_scrm_search_bar_isSearchVisible_22_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.closeSearchBox($event)); })("searchExpression", function BaseNavbarComponent_div_0_ng_template_3_Template_scrm_search_bar_searchExpression_22_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.search($event)); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(24, BaseNavbarComponent_div_0_ng_template_3_div_24_Template, 10, 3, "div", 69);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_7_0;
    let tmp_8_0;
    const vm_r15 = i0.ɵɵnextContext().ngIf;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵclassProp("dropdown-menu-right", !ctx_r1.mobileNavbar)("dropdown-menu-right-center", ctx_r1.mobileNavbar);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ((tmp_7_0 = ctx_r1.navbar == null ? null : ctx_r1.navbar.current == null ? null : ctx_r1.navbar.current.module) !== null && tmp_7_0 !== undefined ? tmp_7_0 : "") && ctx_r1.currentQuickActions.length);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ((tmp_8_0 = ctx_r1 == null ? null : ctx_r1.navigation == null ? null : ctx_r1.navigation.quickActions) !== null && tmp_8_0 !== undefined ? tmp_8_0 : i0.ɵɵpureFunction0(23, _c3)).length);
    i0.ɵɵadvance(6);
    i0.ɵɵclassProp("dropdown-menu-right", !ctx_r1.mobileNavbar);
    i0.ɵɵadvance();
    i0.ɵɵproperty("menuItems", i0.ɵɵpipeBind3(17, 19, i0.ɵɵpipeBind1(16, 17, ctx_r1.recentlyViewed$), 0, ctx_r1.recentlyViewedCount));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngClass", ctx_r1.isSearchBoxVisible() ? "d-none" : "d-block");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", ctx_r1.isSearchBoxVisible() ? "d-block" : "d-none")("@mobileSearchBarAnm", undefined);
    i0.ɵɵadvance();
    i0.ɵɵproperty("labelKey", "LBL_SEARCH")("klass", "search-bar-global")("searchTrigger", "enter")("isMobile", ctx_r1.isSmallScreen());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.notificationsEnabled() && ctx_r1.checkAppStrings(vm_r15.appStrings) && ctx_r1.arePreferencesInitialized(vm_r15.userPreferences));
} }
function BaseNavbarComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtemplate(1, BaseNavbarComponent_div_0_ng_template_1_Template, 5, 0, "ng-template", 6)(2, BaseNavbarComponent_div_0_ng_container_2_Template, 4, 3, "ng-container", 7)(3, BaseNavbarComponent_div_0_ng_template_3_Template, 25, 24, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.loaded);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.loaded);
} }
export class BaseNavbarComponent {
    static { this.instances = []; }
    constructor(navigationStore, languageStore, userPreferenceStore, systemConfigStore, appState, authService, moduleNavigation, screenSize, asyncActionService, notificationStore, globalRecentlyViewedStore, globalSearch, breakpointObserver, router) {
        this.navigationStore = navigationStore;
        this.languageStore = languageStore;
        this.userPreferenceStore = userPreferenceStore;
        this.systemConfigStore = systemConfigStore;
        this.appState = appState;
        this.authService = authService;
        this.moduleNavigation = moduleNavigation;
        this.screenSize = screenSize;
        this.asyncActionService = asyncActionService;
        this.notificationStore = notificationStore;
        this.globalRecentlyViewedStore = globalRecentlyViewedStore;
        this.globalSearch = globalSearch;
        this.breakpointObserver = breakpointObserver;
        this.router = router;
        this.loaded = true;
        this.mainNavCollapse = true;
        this.subNavCollapse = true;
        this.mobileSubNav = false;
        this.backLink = false;
        this.mainNavLink = true;
        this.submenu = [];
        this.moduleNameMapper = new ModuleNameMapper(this.systemConfigStore);
        this.actionNameMapper = new ActionNameMapper(this.systemConfigStore);
        this.routeConverter = new RouteConverter(this.moduleNameMapper, this.actionNameMapper, this.systemConfigStore);
        this.maxTabs = 8;
        this.screen = ScreenSize.Medium;
        this.notificationsEnabled = signal(false);
        this.subs = [];
        this.mobileNavbar = false;
        this.isSmallScreen = signal(false);
        this.isTabletScreen = signal(false);
        this.recentlyViewedCount = 10;
        this.isSearchBoxVisible = signal(false);
        this.languages$ = this.languageStore.vm$;
        this.userPreferences$ = this.userPreferenceStore.userPreferences$;
        this.currentUser$ = this.authService.currentUser$;
        this.appState$ = this.appState.vm$;
        this.navigation$ = this.navigationStore.vm$;
        this.recentlyViewed$ = this.globalRecentlyViewedStore.globalRecentlyViewed$;
        this.vm$ = this.navigation$.pipe(combineLatestWith(this.userPreferences$, this.currentUser$, this.appState$, this.screenSize.screenSize$, this.languages$), map(([navigation, userPreferences, currentUser, appState, screenSize, language]) => {
            if (screenSize) {
                this.screen = screenSize;
                this.onResize();
            }
            if (navigation && navigation.modules) {
                this.navigation = navigation;
            }
            this.calculateMaxTabs(navigation);
            this.getModuleQuickActions(appState.module);
            this.navbar.resetMenu();
            if (ready([language.appStrings, language.modStrings, language.appListStrings, userPreferences, currentUser])) {
                this.navbar.build(navigation, currentUser, this.maxTabs);
            }
            return {
                navigation,
                userPreferences,
                appState,
                appStrings: language.appStrings || {},
                appListStrings: language.appListStrings || {}
            };
        }));
    }
    /**
     * Public API
     */
    onResize() {
        const innerWidth = window.innerWidth;
        this.mobileNavbar = innerWidth <= 768;
        this.isSmallScreen.set(innerWidth < 600);
        this.isTabletScreen.set(innerWidth <= 992);
        this.isSearchBoxVisible.set(innerWidth >= 600);
    }
    ngOnInit() {
        const navbar = new NavbarAbstract(this.routeConverter, this.moduleNavigation, this.userPreferenceStore, this.languageStore, this.appState, this.moduleNameMapper);
        this.setNavbar(navbar);
        this.authService.isUserLoggedIn.subscribe(value => {
            this.isUserLoggedIn = value;
        });
        window.dispatchEvent(new Event('resize'));
        this.notificationCount$ = this.notificationStore.notificationsUnreadTotal$;
        this.recentlyViewedCount = this.systemConfigStore.getUi('global_recently_viewed');
        this.subs.push(this.notificationStore.notificationsEnabled$.subscribe(notificationsEnabled => {
            this.notificationsEnabled.set(notificationsEnabled);
        }));
        this.subs.push(this.breakpointObserver.observe([
            Breakpoints.XSmall,
        ]).subscribe((result) => {
            let hasSearchTerm;
            if (!!this.searchTermRef?.searchForm.get('searchTerm').value) {
                hasSearchTerm = true;
            }
            else {
                hasSearchTerm = false;
            }
            if (result.matches && !hasSearchTerm) {
                this.isSearchBoxVisible.set(false);
            }
        }));
    }
    ngOnDestroy() {
        this.authService.isUserLoggedIn.unsubscribe();
        this.subs.forEach(sub => sub.unsubscribe());
    }
    checkAppStrings(appStrings) {
        return appStrings && Object.keys(appStrings).length > 0;
    }
    arePreferencesInitialized(preferences) {
        return preferences && Object.keys(preferences).length;
    }
    markAsRead() {
        this.notificationStore.markNotificationsAsRead();
    }
    ngAfterViewInit() {
        if (!this.mobileGlobalLinkTitle?.nativeElement?.offsetWidth) {
            return;
        }
        this.dropdownLength = this.mobileGlobalLinkTitle.nativeElement.offsetWidth;
    }
    /**
     * Change subnavigation
     *
     * @param {object} event triggered
     * @param {object} items
     */
    changeSubNav(event, items) {
        this.mobileSubNav = !this.mobileSubNav;
        this.backLink = !this.backLink;
        this.mainNavLink = !this.mainNavLink;
        this.submenu = items;
    }
    /**
     * Set link flags
     */
    navBackLink() {
        this.mobileSubNav = !this.mobileSubNav;
        this.backLink = !this.backLink;
        this.mainNavLink = !this.mainNavLink;
    }
    /**
     * Get home page
     *
     * @returns {string} homepage
     */
    getHomePage() {
        return this.systemConfigStore.getHomePage();
    }
    /**
     * Internal API
     */
    /**
     * Set navbar model
     *
     * @param {object} navbar model
     */
    setNavbar(navbar) {
        this.navbar = navbar;
        this.loaded = true;
    }
    /**
     * Check if is loaded
     *
     * @returns {{boolean}} is loaded
     */
    isLoaded() {
        return this.loaded;
    }
    calculateMaxTabs(navigation) {
        const sizeMap = this.systemConfigStore.getConfigValue('navigation_tab_limits');
        if (this.screen && sizeMap) {
            let maxTabs = sizeMap[this.screen];
            if (!maxTabs || navigation.maxTabs && navigation.maxTabs < maxTabs) {
                maxTabs = navigation.maxTabs;
            }
            this.maxTabs = maxTabs;
        }
    }
    getModuleQuickActions(module) {
        const moduleNavigation = this?.navigation?.modules[module] ?? null;
        const moduleNavigationMenu = moduleNavigation?.menu ?? [];
        if (moduleNavigation === null || !moduleNavigationMenu.length) {
            this.currentQuickActions = [];
        }
        const actions = [];
        moduleNavigationMenu.forEach(entry => {
            if (!entry.url || !entry.quickAction) {
                return;
            }
            const url = entry?.url ?? '';
            actions.push({
                ...entry,
                url: url.replace('/#/', '/')
            });
        });
        this.currentQuickActions = actions;
    }
    handleProcess(action) {
        if (!action.process) {
            return;
        }
        const processType = action.process;
        const options = {
            action: processType,
            module: action.module,
        };
        this.asyncActionService.run(processType, options).pipe(take(1)).subscribe();
    }
    openSearchBox() {
        if (this.isSmallScreen()) {
            this.isSearchBoxVisible.set(true);
        }
    }
    closeSearchBox(isVisible) {
        this.isSearchBoxVisible.set(isVisible);
    }
    search(searchTerm) {
        const searchController = this.systemConfigStore.getConfigValue('search')?.controller ?? '';
        this.globalSearch.navigateToSearch(searchTerm, searchController).finally();
    }
    toggleSidebar() {
        this.appState.toggleSidebar();
    }
    closeNotificationMenu() {
        this.subs.push(this.router.events.pipe(filter(event => event instanceof NavigationEnd), take(1)).subscribe(() => {
            this.alertDropdown.close();
        }));
    }
    static { this.ɵfac = function BaseNavbarComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BaseNavbarComponent)(i0.ɵɵdirectiveInject(i1.NavigationStore), i0.ɵɵdirectiveInject(i2.LanguageStore), i0.ɵɵdirectiveInject(i3.UserPreferenceStore), i0.ɵɵdirectiveInject(i4.SystemConfigStore), i0.ɵɵdirectiveInject(i5.AppStateStore), i0.ɵɵdirectiveInject(i6.AuthService), i0.ɵɵdirectiveInject(i7.ModuleNavigation), i0.ɵɵdirectiveInject(i8.ScreenSizeObserverService), i0.ɵɵdirectiveInject(i9.AsyncActionService), i0.ɵɵdirectiveInject(i10.NotificationStore), i0.ɵɵdirectiveInject(i11.GlobalRecentlyViewedStore), i0.ɵɵdirectiveInject(i12.GlobalSearch), i0.ɵɵdirectiveInject(i13.BreakpointObserver), i0.ɵɵdirectiveInject(i14.Router)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BaseNavbarComponent, selectors: [["scrm-base-navbar"]], viewQuery: function BaseNavbarComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
            i0.ɵɵviewQuery(_c2, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.mobileGlobalLinkTitle = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.searchTermRef = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.alertDropdown = _t.first);
        } }, hostBindings: function BaseNavbarComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("resize", function BaseNavbarComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, i0.ɵɵresolveWindow);
        } }, decls: 2, vars: 3, consts: [["actionIcons", ""], ["mobileGlobalLinkTitle", ""], ["searchTerm", ""], ["alertDropdown", "ngbDropdown"], ["class", "top-panel fixed-top", 4, "ngIf"], [1, "top-panel", "fixed-top"], [3, "ngIf"], [4, "ngIf"], [1, "navbar", "navbar-expand-lg"], [1, "navbar-collapse", "collapse", "order-4", "order-md-0", "collapsenav"], [1, "navbar-nav"], [1, "top-nav", "nav-item"], [1, "navbar", "ml-0", "pl-0"], [1, "navbar-collapse"], [1, "pl-0"], [1, "navbar", "mobile-nav-block", "mobilenavbar"], [1, "d-flex"], ["type", "button", 1, "navbar-toggler", 3, "click"], ["image", "hamburger", 1, "responsive-menu-toggler"], [1, "navbar-expand", 3, "ngClass"], [1, "navbar-nav", "h-100"], ["class", "top-nav nav-item dropdown mobile-navbar-active-module h-100 non-grouped", 4, "ngIf"], ["class", "top-nav nav-item dropdown mobile-navbar-active-module main-grouped", 4, "ngIf"], [1, "d-flex", "align-items-center"], [4, "ngTemplateOutlet"], ["ngbDropdown", "", 1, "global-links", "action-dropdown"], [1, "global-link-item"], ["ngbDropdownToggle", "", 1, "nav-link", "primary-global-link", "dropdown-toggle"], ["image", "user", 1, "global-action-icon", "sicon-2x"], ["aria-labelledby", "navbarDropdownMenuLink", "ngbDropdownMenu", "", 1, "dropdown-menu", "global-links-dropdown", "border", "shadow-sm-2"], [1, "global-user-name"], [1, "top-nav", "nav-item", "dropdown", "mobile-navbar-active-module", "h-100", "non-grouped"], [3, "item"], [1, "top-nav", "nav-item", "dropdown", "mobile-navbar-active-module", "main-grouped"], [3, "item", "subNavCollapse"], [4, "ngFor", "ngForOf"], ["ngbDropdownItem", "", 1, "dropdown-item", "global-links-sublink", 3, "href", "target"], [1, "navbar", "navbar-expand-md", "navbar-1"], [1, "navbar-collapse", "collapse", "collapsenav", 3, "ngbCollapse"], [3, "active", "route"], ["ngbDropdownToggle", "", 1, "nav-link", "primary-global-link"], ["aria-labelledby", "navbarDropdownMenuLink", "ngbDropdownMenu", "", 1, "dropdown-menu", "global-links-dropdown", "border", "shadow-sm-2", "dropdown-menu-right"], [1, "navbar-nav", "grouped"], ["class", "top-nav nav-item dropdown non-grouped active", 4, "ngIf"], ["class", "top-nav nav-item dropdown main-grouped", 4, "ngFor", "ngForOf"], ["labelKey", "LBL_TABGROUP_ALL", 3, "items", "index"], [1, "top-nav", "nav-item", "dropdown", "main-grouped"], [3, "item", "subNavCollapse", "index"], [1, "top-nav", "nav-item", "dropdown", "non-grouped", "active"], [3, "item", "index"], ["class", "top-nav nav-item dropdown non-grouped", 4, "ngFor", "ngForOf"], ["labelKey", "LBL_MORE", 3, "items", "index"], [1, "top-nav", "nav-item", "dropdown", "non-grouped"], [1, "action-group", "navbar-action-group"], ["ngbDropdown", "", 1, "action-new", "action-dropdown"], [1, "navbar-nav", "border-0"], ["type", "button", "aria-label", "Quick Create", "ngbDropdownToggle", "", 1, "action-link", "primary-global-link"], ["image", "plus", 1, "action-btn-icon"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-left", "border", "shadow-sm-2"], ["ngbDropdown", "", 1, "action-history", "action-dropdown"], ["type", "button", "aria-label", "Recently Viewed", "ngbDropdownToggle", "", 1, "action-link", "primary-global-link"], ["image", "recently_viewed", 1, "action-btn-icon"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "border", "shadow-sm-2", "dropdown-menu-right", "scrollbar-thick", "recently-viewed-nav-header"], ["ngbDropdownItem", "", 1, "recently-viewed", 3, "menuItems"], [1, "d-flex", "align-items-center", "px-1", "action-search"], ["type", "button", "aria-label", "Search", 1, "search-mobile-view", "action-link", "primary-global-link", 3, "click", "ngClass"], ["image", "search", 1, "action-btn-icon"], [3, "ngClass"], [3, "isSearchVisible", "searchExpression", "labelKey", "klass", "searchTrigger", "isMobile"], ["class", "action-alert action-dropdown", "ngbDropdown", "", 4, "ngIf"], [1, "new-list-item-header", "font-weight-bold"], ["labelKey", "LBL_MODULE_NAME", 3, "module"], ["class", "new-list-item", "ngbDropdownItem", "", 4, "ngFor", "ngForOf"], ["ngbDropdownItem", "", 1, "new-list-item"], [1, "d-flex", "align-items-center", 3, "routerLink", "queryParams"], [1, "new-list-item-label", 3, "labelKey", "module"], [1, "d-flex", "align-items-center", 3, "click"], ["labelKey", "LBL_QUICK_ACTIONS"], ["ngbDropdown", "", 1, "action-alert", "action-dropdown"], ["type", "button", "ngbDropdownToggle", "", 1, "action-link", "primary-global-link", 3, "mouseenter"], ["image", "alert", 1, "action-btn-icon"], ["aria-labelledby", "navbarDropdownMenuLink", "ngbDropdownMenu", "", 1, "dropdown-menu", "border", "shadow-sm-2", "dropdown-menu-right", 3, "click"], ["class", "badge badge-position rounded-pill bg-danger text-white", 4, "ngIf"], [1, "badge", "badge-position", "rounded-pill", "bg-danger", "text-white"]], template: function BaseNavbarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, BaseNavbarComponent_div_0_Template, 5, 2, "div", 4);
            i0.ɵɵpipe(1, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.vm$));
        } }, dependencies: [i15.NgClass, i15.NgForOf, i15.NgIf, i15.NgTemplateOutlet, i16.LogoUiComponent, i17.LogoutUiComponent, i18.NgbCollapse, i18.NgbDropdown, i18.NgbDropdownToggle, i18.NgbDropdownMenu, i18.NgbDropdownItem, i14.RouterLink, i19.ImageComponent, i20.LabelComponent, i21.NotificationsComponent, i22.SearchBarComponent, i23.RecentlyViewedComponent, i24.MenuItemComponent, i25.HomeMenuItemComponent, i26.GroupedMenuItemComponent, i27.MenuItemsListComponent, i15.AsyncPipe, i15.SlicePipe], encapsulation: 2, data: { animation: [
                trigger('mobileSearchBarAnm', [
                    transition(':enter', useAnimation(backInDown, {
                        params: { timing: 0.5, delay: 0 }
                    })),
                ])
            ] } }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseNavbarComponent, [{
        type: Component,
        args: [{ selector: 'scrm-base-navbar', animations: [
                    trigger('mobileSearchBarAnm', [
                        transition(':enter', useAnimation(backInDown, {
                            params: { timing: 0.5, delay: 0 }
                        })),
                    ])
                ], template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<!-- Start of main navbar section -->\n\n<div *ngIf=\"(vm$ | async) as vm\" class=\"top-panel fixed-top\">\n\n    <!-- Start of empty navbar section until data is loaded -->\n\n    <ng-template [ngIf]=\"!loaded\">\n        <nav class=\"navbar navbar-expand-lg\">\n            <div class=\"navbar-collapse collapse order-4 order-md-0 collapsenav\">\n                <ul class=\"navbar-nav\">\n                    <li class=\"top-nav nav-item\">&nbsp;\n                    </li>\n                </ul>\n            </div>\n        </nav>\n    </ng-template>\n\n    <!-- End of empty  section until data is loaded -->\n\n    <!-- Start of empty navbar with logo -->\n\n    <ng-container *ngIf=\"loaded\">\n        <ng-container *ngIf=\"!this.isUserLoggedIn\">\n            <nav class=\"navbar ml-0 pl-0\">\n                <div class=\"navbar-collapse\">\n                    <ul class=\"navbar-nav\">\n                        <li class=\"pl-0\">\n                            <scrm-logo-ui></scrm-logo-ui>\n                        </li>\n                    </ul>\n                </div>\n            </nav>\n        </ng-container>\n\n        <!-- End of empty navbar section with logo -->\n\n        <!-- Start of mobile navigation section -->\n\n        <ng-container *ngIf=\"this.isUserLoggedIn && mobileNavbar\">\n            <ul class=\"navbar mobile-nav-block mobilenavbar\">\n                <div class=\"d-flex\">\n                    <button (click)=\"toggleSidebar()\" class=\"navbar-toggler\" type=\"button\">\n                        <scrm-image class=\"responsive-menu-toggler\" image=\"hamburger\"></scrm-image>\n                    </button>\n                    <nav class=\"navbar-expand\" [ngClass]=\"(isSmallScreen() && isSearchBoxVisible()) ? 'd-none' : 'd-block'\">\n                        <ul class=\"navbar-nav h-100\">\n                            <li *ngIf=\"navbar.current && !navbar.current.isGroupedMenu\" class=\"top-nav nav-item dropdown mobile-navbar-active-module h-100 non-grouped\">\n                                <scrm-menu-item [item]=\"navbar.current\"></scrm-menu-item>\n                            </li>\n                            <li *ngIf=\"navbar.current?.submenu  && navbar.current.isGroupedMenu\" class=\"top-nav nav-item dropdown mobile-navbar-active-module main-grouped\">\n                                <scrm-grouped-menu-item\n                                    [item]=\"navbar.current\"\n                                    [subNavCollapse]=\"subNavCollapse\">\n                                </scrm-grouped-menu-item>\n                            </li>\n                        </ul>\n                    </nav>\n                </div>\n\n                <div class=\"d-flex align-items-center\">\n                    <ng-container *ngTemplateOutlet=\"actionIcons\"></ng-container>\n                    <div class=\"global-links action-dropdown\" ngbDropdown>\n                        <li class=\"global-link-item\">\n                            <a #mobileGlobalLinkTitle class=\"nav-link primary-global-link dropdown-toggle\"\n                               ngbDropdownToggle>\n                                <scrm-image class=\"global-action-icon sicon-2x\" image=\"user\"></scrm-image>\n                            </a>\n                            <div [style.min-width.px]=\"mobileGlobalLinkTitle.offsetWidth\"\n                                 aria-labelledby=\"navbarDropdownMenuLink\"\n                                 class=\"dropdown-menu global-links-dropdown border shadow-sm-2\" ngbDropdownMenu>\n                                <span\n                                    class=\"global-user-name\">{{ navbar.currentUser.firstName }} {{ navbar.currentUser.lastName }}</span>\n                                <ng-template [ngIf]=\"navbar.globalActions\">\n                                    <ng-container\n                                        *ngFor=\"let globalAction of navbar.globalActions; let first = first; let last = last;\">\n                                        <a class=\"dropdown-item global-links-sublink\"\n                                           href=\"{{ globalAction.link.url }}\"\n                                           ngbDropdownItem\n                                           target=\"{{ globalAction.link.target }}\">{{ globalAction.link.label }}\n                                        </a>\n                                        <hr *ngIf=\"last === true || first === true\"/>\n                                    </ng-container>\n                                </ng-template>\n                                <scrm-logout-ui></scrm-logout-ui>\n                            </div>\n                        </li>\n                    </div>\n                </div>\n\n            </ul>\n\n        </ng-container>\n\n        <!-- End of mobile navigation section-->\n\n        <!-- Start of navbar section with data once authenticated -->\n\n        <ng-container *ngIf=\"this.isUserLoggedIn && !mobileNavbar\">\n            <nav class=\"navbar navbar-expand-md navbar-1\">\n                <div [ngbCollapse]=\"mainNavCollapse\" class=\"navbar-collapse collapse collapsenav\">\n                        <scrm-home-menu-item\n                            [active]=\"vm.appState.module && vm.appState.module === 'home'\"\n                            [route]=\"getHomePage()\"\n                        ></scrm-home-menu-item>\n\n                        <!-- Navbar with grouped tabs -->\n\n                        <ng-container *ngIf=\"vm.userPreferences['navigation_paradigm'] == 'gm'\">\n\n                            <ul class=\"navbar-nav grouped\">\n\n                                <ng-container *ngIf=\"navbar.current && navbar.current.isGroupedMenu\">\n                                    <li class=\"top-nav nav-item dropdown main-grouped\">\n                                        <scrm-grouped-menu-item\n                                                [item]=\"navbar.current\"\n                                                [subNavCollapse]=\"subNavCollapse\"\n                                                [index]=\"1\"\n                                        >\n                                        </scrm-grouped-menu-item>\n\n                                    </li>\n                                </ng-container>\n\n                                <li *ngIf=\"navbar.current && !navbar.current.isGroupedMenu\" class=\"top-nav nav-item dropdown non-grouped active\">\n                                    <scrm-menu-item [item]=\"navbar.current\" [index]=\"1\"></scrm-menu-item>\n                                </li>\n\n                                <li *ngFor=\"let item of navbar.menu; let i = index;\" class=\"top-nav nav-item dropdown main-grouped\">\n                                    <scrm-grouped-menu-item\n                                        [item]=\"item\"\n                                        [subNavCollapse]=\"subNavCollapse\"\n                                        [index]=\"i+2\"\n                                    >\n                                    </scrm-grouped-menu-item>\n\n                                </li>\n                            </ul>\n\n                            <scrm-menu-items-list [items]=\"navbar.all.modules\"\n                                                  labelKey=\"LBL_TABGROUP_ALL\"\n                                                  [index]=\"navbar.menu.length + 2\">\n                            </scrm-menu-items-list>\n\n                        </ng-container>\n\n\n                        <!-- END Navbar with grouped tabs -->\n\n                        <!-- Navbar with non-grouped tabs -->\n\n                        <ng-container *ngIf=\"vm.userPreferences['navigation_paradigm'] != 'gm'\">\n\n                            <ul class=\"navbar-nav\">\n                                <li *ngIf=\"navbar.current && !navbar.current.isGroupedMenu\" class=\"top-nav nav-item dropdown non-grouped active\">\n                                    <scrm-menu-item [item]=\"navbar.current\" [index]=\"1\"></scrm-menu-item>\n                                </li>\n\n                                <ng-container *ngIf=\"navbar.current?.submenu  && navbar.current.isGroupedMenu\">\n                                    <li class=\"top-nav nav-item dropdown main-grouped\">\n                                        <scrm-grouped-menu-item\n                                            [item]=\"navbar.current\"\n                                            [subNavCollapse]=\"subNavCollapse\"\n                                            [index]=\"1\">\n                                        </scrm-grouped-menu-item>\n                                    </li>\n                                </ng-container>\n\n                                <li *ngFor=\"let item of navbar.menu; let i = index\" class=\"top-nav nav-item dropdown non-grouped\">\n                                    <scrm-menu-item [item]=\"item\" [index]=\"i+2\"></scrm-menu-item>\n                                </li>\n                            </ul>\n\n                        <scrm-menu-items-list [items]=\"navbar.all.modules\"\n                                              labelKey=\"LBL_MORE\"\n                                                [index]=\"navbar.menu.length + 2\">\n                        </scrm-menu-items-list>\n\n                        </ng-container>\n\n                        <!-- END Navbar with non-grouped tabs -->\n\n                </div>\n\n                <ng-container *ngTemplateOutlet=\"actionIcons\"></ng-container>\n\n                <!-- Global Links -->\n\n                <div class=\"global-links action-dropdown\" ngbDropdown>\n                    <ul class=\"navbar-nav\">\n                        <li class=\"global-link-item\">\n                            <a class=\"nav-link primary-global-link\" ngbDropdownToggle>\n                                <scrm-image class=\"global-action-icon sicon-2x\" image=\"user\"></scrm-image>\n                            </a>\n                            <div aria-labelledby=\"navbarDropdownMenuLink\"\n                                 class=\"dropdown-menu global-links-dropdown border shadow-sm-2 dropdown-menu-right\" ngbDropdownMenu>\n                                <span\n                                    class=\"global-user-name\">{{ navbar.currentUser.firstName }} {{ navbar.currentUser.lastName }}</span>\n                                <ng-container *ngIf=\"navbar.globalActions\">\n                                    <ng-container\n                                        *ngFor=\"let globalAction of navbar.globalActions; let first = first; let last = last;\">\n                                        <a class=\"dropdown-item global-links-sublink\"\n                                           href=\"{{ globalAction.link.url }}\"\n                                           ngbDropdownItem\n                                           target=\"{{ globalAction.link.target }}\">{{ globalAction.link.label }}\n                                        </a>\n                                        <hr *ngIf=\"last === true || first === true\"/>\n                                    </ng-container>\n\n                                </ng-container>\n                                <scrm-logout-ui></scrm-logout-ui>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n\n                <!-- END Global Links -->\n\n            </nav>\n\n            <!-- End of navbar section with data once authenticated -->\n\n        </ng-container>\n    </ng-container>\n\n    <ng-template #actionIcons>\n        <div class=\"action-group navbar-action-group\">\n            <!--Quick Create-->\n            <div class=\"action-new action-dropdown\" ngbDropdown>\n                <ul class=\"navbar-nav border-0\">\n                    <li class=\"global-link-item\">\n                        <a class=\"action-link primary-global-link\" type=\"button\" aria-label=\"Quick Create\" ngbDropdownToggle>\n                            <scrm-image class=\"action-btn-icon\" image=\"plus\"></scrm-image>\n                        </a>\n                        <ul [class.dropdown-menu-right]=\"!mobileNavbar\"\n                            [class.dropdown-menu-right-center]=\"mobileNavbar\"\n                            class=\"dropdown-menu dropdown-menu-left border shadow-sm-2\" ngbDropdownMenu>\n\n                            <ng-container *ngIf=\"(navbar?.current?.module ?? '') && currentQuickActions.length\">\n                                <li class=\"new-list-item-header font-weight-bold\">\n                                    <scrm-label labelKey=\"LBL_MODULE_NAME\" [module]=\"navbar.current.module\"></scrm-label>\n                                </li>\n                                <li class=\"new-list-item\" *ngFor=\"let moduleQuickAction of currentQuickActions\" ngbDropdownItem>\n                                    <ng-container *ngIf=\"!moduleQuickAction.process\">\n                                        <a [routerLink]=\"moduleQuickAction.url\" [queryParams]=\"moduleQuickAction?.params ?? null\" class=\"d-flex align-items-center\">\n                                            <scrm-label [labelKey]=\"moduleQuickAction.labelKey\" [module]=\"navbar.current.module\" class=\"new-list-item-label\"></scrm-label>\n                                        </a>\n                                    </ng-container>\n                                    <ng-container *ngIf=\"moduleQuickAction.process\">\n                                        <a (click)=\"handleProcess(moduleQuickAction)\" class=\"d-flex align-items-center\">\n                                            <scrm-label [labelKey]=\"moduleQuickAction.labelKey\" [module]=\"navbar.current.module\" class=\"new-list-item-label\"></scrm-label>\n                                        </a>\n                                    </ng-container>\n\n                                </li>\n                            </ng-container>\n\n                            <ng-container *ngIf=\"(this?.navigation?.quickActions ?? []).length\">\n                                <li class=\"new-list-item-header font-weight-bold\">\n                                    <scrm-label labelKey=\"LBL_QUICK_ACTIONS\"></scrm-label>\n                                </li>\n                                <li class=\"new-list-item\" *ngFor=\"let quickAction of (this?.navigation?.quickActions ?? [])\" ngbDropdownItem>\n                                    <ng-container *ngIf=\"!quickAction.process\">\n                                        <a [routerLink]=\"quickAction.url\" [queryParams]=\"quickAction?.params ?? null\" class=\"d-flex align-items-center\">\n                                            <scrm-label [labelKey]=\"quickAction.labelKey\" [module]=\"quickAction.module\" class=\"new-list-item-label\"></scrm-label>\n                                        </a>\n                                    </ng-container>\n                                    <ng-container *ngIf=\"quickAction.process\">\n                                        <a (click)=\"handleProcess(quickAction)\" class=\"d-flex align-items-center\">\n                                            <scrm-label [labelKey]=\"quickAction.labelKey\" [module]=\"quickAction.module\" class=\"new-list-item-label\"></scrm-label>\n                                        </a>\n                                    </ng-container>\n                                </li>\n                            </ng-container>\n                        </ul>\n                    </li>\n                </ul>\n            </div>\n            <!--Recently Viewed-->\n            <div class=\"action-history action-dropdown\" ngbDropdown>\n                <ul class=\"navbar-nav border-0\">\n                    <li class=\"global-link-item\">\n                        <a class=\"action-link primary-global-link\" type=\"button\" aria-label=\"Recently Viewed\" ngbDropdownToggle>\n                            <scrm-image class=\"action-btn-icon\" image=\"recently_viewed\"></scrm-image>\n                        </a>\n                        <div class=\"dropdown-menu border shadow-sm-2 dropdown-menu-right scrollbar-thick recently-viewed-nav-header\"\n                             [class.dropdown-menu-right]=\"!mobileNavbar\" ngbDropdownMenu>\n                                 <scrm-recently-viewed [menuItems]=\"recentlyViewed$ | async | slice:0:recentlyViewedCount\"\n                                                       ngbDropdownItem class=\"recently-viewed\"></scrm-recently-viewed>\n                        </div>\n                    </li>\n                </ul>\n            </div>\n\n            <!--Searchbar-->\n            <div class=\"d-flex align-items-center px-1 action-search\">\n                <a class=\"search-mobile-view action-link primary-global-link\" [ngClass]=\"isSearchBoxVisible() ? 'd-none' : 'd-block'\"\n                   type=\"button\" (click)=\"openSearchBox()\" aria-label=\"Search\">\n                    <scrm-image class=\"action-btn-icon\" image=\"search\"></scrm-image>\n                </a>\n\n                <div [ngClass]=\"isSearchBoxVisible() ? 'd-block' : 'd-none'\" [@mobileSearchBarAnm]>\n                    <scrm-search-bar\n                        [labelKey]=\"'LBL_SEARCH'\"\n                        [klass]=\"'search-bar-global'\"\n                        [searchTrigger]=\"'enter'\"\n                        [isMobile]=\"isSmallScreen()\"\n                        (isSearchVisible)=\"closeSearchBox($event)\"\n                        (searchExpression)=\"search($event)\" #searchTerm>\n                    </scrm-search-bar>\n                </div>\n            </div>\n            <!--Notifications-->\n            <div *ngIf=\"notificationsEnabled() && checkAppStrings(vm.appStrings) && arePreferencesInitialized(vm.userPreferences)\"\n                 class=\"action-alert action-dropdown\" ngbDropdown #alertDropdown=\"ngbDropdown\">\n                <ul class=\"navbar-nav border-0\">\n                    <li class=\"global-link-item\">\n                        <a class=\"action-link primary-global-link\" type=\"button\"\n                           (mouseenter)=\"markAsRead()\" ngbDropdownToggle>\n                            <scrm-image class=\"action-btn-icon\" image=\"alert\"></scrm-image>\n                        </a>\n                        <ng-container *ngIf=\"(notificationCount$ | async) as notificationCount\">\n                                    <span *ngIf=\"(notificationCount ?? false)\"\n                                          class=\"badge badge-position rounded-pill bg-danger text-white\">\n                                        <ng-container *ngIf=\"notificationCount > 0\">{{notificationCount }}</ng-container>\n                                    </span>\n                        </ng-container>\n                        <div class=\"dropdown-menu border shadow-sm-2 dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\"\n                             (click)=\"closeNotificationMenu()\" ngbDropdownMenu>\n                            <scrm-notifications></scrm-notifications>\n                        </div>\n                    </li>\n                </ul>\n            </div>\n\n        </div>\n    </ng-template>\n\n</div>\n\n<!-- End of main navbar section -->\n" }]
    }], () => [{ type: i1.NavigationStore }, { type: i2.LanguageStore }, { type: i3.UserPreferenceStore }, { type: i4.SystemConfigStore }, { type: i5.AppStateStore }, { type: i6.AuthService }, { type: i7.ModuleNavigation }, { type: i8.ScreenSizeObserverService }, { type: i9.AsyncActionService }, { type: i10.NotificationStore }, { type: i11.GlobalRecentlyViewedStore }, { type: i12.GlobalSearch }, { type: i13.BreakpointObserver }, { type: i14.Router }], { mobileGlobalLinkTitle: [{
            type: ViewChild,
            args: ['mobileGlobalLinkTitle']
        }], searchTermRef: [{
            type: ViewChild,
            args: ['searchTerm', { static: false }]
        }], alertDropdown: [{
            type: ViewChild,
            args: ['alertDropdown']
        }], onResize: [{
            type: HostListener,
            args: ['window:resize', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BaseNavbarComponent, { className: "BaseNavbarComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1uYXZiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvbmF2YmFyL2Jhc2UtbmF2YmFyL2Jhc2UtbmF2YmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb21wb25lbnRzL25hdmJhci9iYXNlLW5hdmJhci9iYXNlLW5hdmJhci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUVILFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUdaLE1BQU0sRUFDTixTQUFTLEVBRVosTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGlCQUFpQixFQUEyQixNQUFNLE1BQU0sQ0FBQztBQUNqRSxPQUFPLEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDdEUsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLFlBQVksQ0FBQztBQUN0QyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw0RUFBNEUsQ0FBQztBQUM1RyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxrREFBa0QsQ0FBQztBQUNuRixPQUFPLEVBQTJCLGVBQWUsRUFBQyxNQUFNLDRDQUE0QyxDQUFDO0FBQ3JHLE9BQU8sRUFBb0IsbUJBQW1CLEVBQUMsTUFBTSxzREFBc0QsQ0FBQztBQUM1RyxPQUFPLEVBQ0gsVUFBVSxFQUNWLHlCQUF5QixFQUM1QixNQUFNLHdFQUF3RSxD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Ozs7Ozs7WUFBbkIsZ0dBQUEsb0JBQWdCLCtCQUFHOztZQ3BEaEMsb0VBQTZEOzs7WUFBdkQsb0RBQW9COzhoQkQ0Q1Y7Z0JBQ1IsT0FBTyxDQUFDLG9CQUFvQixFQUFFO29CQUMxQixVQUFVLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxVQUFVLEVBQUU7d0JBQzFDLE1BQU0sRUFBRSxFQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBQztxQkFDbEMsQ0FBQyxDQUFDO2lCQUNOLENBQUM7YUFDTDs7aUZBRVEsbUJBQW1CO2NBWi9CLFNBQVM7MkJBQ0ksa0JBQWtCLGNBR2hCO29CQUNSLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRTt3QkFDMUIsVUFBVSxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsVUFBVSxFQUFFOzRCQUMxQyxNQUFNLEVBQUUsRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUM7eUJBQ2xDLENBQUMsQ0FBQztxQkFDTixDQUFDO2lCQUNMOzBjQUltQyxxQkFBcUI7a0JBQXhELFNBQVM7bUJBQUMsdUJBQXVCO1lBQ1UsYUFBYTtrQkFBeEQsU0FBUzttQkFBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO1lBQ2QsYUFBYTtrQkFBeEMsU0FBUzttQkFBQyxlQUFlO1lBd0cxQixRQUFRO2tCQURQLFlBQVk7bUJBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDOztrRkEzR2hDLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtcbiAgICBBZnRlclZpZXdJbml0LFxuICAgIENvbXBvbmVudCxcbiAgICBFbGVtZW50UmVmLFxuICAgIEhvc3RMaXN0ZW5lcixcbiAgICBPbkRlc3Ryb3ksXG4gICAgT25Jbml0LFxuICAgIHNpZ25hbCxcbiAgICBWaWV3Q2hpbGQsXG4gICAgV3JpdGFibGVTaWduYWxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2NvbWJpbmVMYXRlc3RXaXRoLCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtmaWx0ZXIsIG1hcCwgdGFrZX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtOYXZiYXJNb2RlbH0gZnJvbSAnLi4vbmF2YmFyLW1vZGVsJztcbmltcG9ydCB7TmF2YmFyQWJzdHJhY3R9IGZyb20gJy4uL25hdmJhci5hYnN0cmFjdCc7XG5pbXBvcnQge3RyYW5zaXRpb24sIHRyaWdnZXIsIHVzZUFuaW1hdGlvbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQge2JhY2tJbkRvd259IGZyb20gJ25nLWFuaW1hdGUnO1xuaW1wb3J0IHtBY3Rpb25OYW1lTWFwcGVyfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL2FjdGlvbi1uYW1lLW1hcHBlci9hY3Rpb24tbmFtZS1tYXBwZXIuc2VydmljZSc7XG5pbXBvcnQge1N5c3RlbUNvbmZpZ1N0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9zeXN0ZW0tY29uZmlnL3N5c3RlbS1jb25maWcuc3RvcmUnO1xuaW1wb3J0IHtNb2R1bGVBY3Rpb24sIE5hdmlnYXRpb24sIE5hdmlnYXRpb25TdG9yZX0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLnN0b3JlJztcbmltcG9ydCB7VXNlclByZWZlcmVuY2VNYXAsIFVzZXJQcmVmZXJlbmNlU3RvcmV9IGZyb20gJy4uLy4uLy4uL3N0b3JlL3VzZXItcHJlZmVyZW5jZS91c2VyLXByZWZlcmVuY2Uuc3RvcmUnO1xuaW1wb3J0IHtcbiAgICBTY3JlZW5TaXplLFxuICAgIFNjcmVlblNpemVPYnNlcnZlclNlcnZpY2Vcbn0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvdWkvc2NyZWVuLXNpemUtb2JzZXJ2ZXIvc2NyZWVuLXNpemUtb2JzZXJ2ZXIuc2VydmljZSc7XG5pbXBvcnQge1JvdXRlQ29udmVydGVyfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL3JvdXRlLWNvbnZlcnRlci9yb3V0ZS1jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmUsIExhbmd1YWdlU3RyaW5nc30gZnJvbSAnLi4vLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtNb2R1bGVOYXZpZ2F0aW9ufSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL21vZHVsZS1uYXZpZ2F0aW9uL21vZHVsZS1uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHtNb2R1bGVOYW1lTWFwcGVyfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL21vZHVsZS1uYW1lLW1hcHBlci9tb2R1bGUtbmFtZS1tYXBwZXIuc2VydmljZSc7XG5pbXBvcnQge0FwcFN0YXRlLCBBcHBTdGF0ZVN0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9hcHAtc3RhdGUvYXBwLXN0YXRlLnN0b3JlJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2F1dGgvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7cmVhZHl9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy9vYmplY3QtdXRpbHMnO1xuaW1wb3J0IHtNZW51SXRlbX0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL21lbnUvbWVudS5tb2RlbCc7XG5pbXBvcnQge1JlY2VudGx5Vmlld2VkfSBmcm9tICcuLi8uLi8uLi9jb21tb24vcmVjb3JkL3JlY2VudGx5LXZpZXdlZC5tb2RlbCc7XG5pbXBvcnQge0FzeW5jQWN0aW9uSW5wdXQsIEFzeW5jQWN0aW9uU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvcHJvY2Vzcy9wcm9jZXNzZXMvYXN5bmMtYWN0aW9uL2FzeW5jLWFjdGlvbic7XG5pbXBvcnQge05vdGlmaWNhdGlvblN0b3JlfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmUvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5zdG9yZVwiO1xuaW1wb3J0IHtHbG9iYWxSZWNlbnRseVZpZXdlZFN0b3JlfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmUvZ2xvYmFsLXJlY2VudGx5LXZpZXdlZC9nbG9iYWwtcmVjZW50bHktdmlld2VkLnN0b3JlXCI7XG5pbXBvcnQge0dsb2JhbFNlYXJjaH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL25hdmlnYXRpb24vZ2xvYmFsLXNlYXJjaC9nbG9iYWwtc2VhcmNoLnNlcnZpY2VcIjtcbmltcG9ydCB7QnJlYWtwb2ludE9ic2VydmVyLCBCcmVha3BvaW50cywgQnJlYWtwb2ludFN0YXRlfSBmcm9tIFwiQGFuZ3VsYXIvY2RrL2xheW91dFwiO1xuaW1wb3J0IHtTZWFyY2hCYXJDb21wb25lbnR9IGZyb20gXCIuLi8uLi9zZWFyY2gtYmFyL3NlYXJjaC1iYXIuY29tcG9uZW50XCI7XG5pbXBvcnQge05hdmlnYXRpb25FbmQsIFJvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtOZ2JEcm9wZG93bn0gZnJvbSBcIkBuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1iYXNlLW5hdmJhcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Jhc2UtbmF2YmFyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtdLFxuICAgIGFuaW1hdGlvbnM6IFtcbiAgICAgICAgdHJpZ2dlcignbW9iaWxlU2VhcmNoQmFyQW5tJywgW1xuICAgICAgICAgICAgdHJhbnNpdGlvbignOmVudGVyJywgdXNlQW5pbWF0aW9uKGJhY2tJbkRvd24sIHtcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHt0aW1pbmc6IDAuNSwgZGVsYXk6IDB9XG4gICAgICAgICAgICB9KSksXG4gICAgICAgIF0pXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBCYXNlTmF2YmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuXG4gICAgQFZpZXdDaGlsZCgnbW9iaWxlR2xvYmFsTGlua1RpdGxlJykgbW9iaWxlR2xvYmFsTGlua1RpdGxlOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoJ3NlYXJjaFRlcm0nLCB7IHN0YXRpYzogZmFsc2UgfSkgc2VhcmNoVGVybVJlZjogU2VhcmNoQmFyQ29tcG9uZW50O1xuICAgIEBWaWV3Q2hpbGQoJ2FsZXJ0RHJvcGRvd24nKSBhbGVydERyb3Bkb3duOiBOZ2JEcm9wZG93bjtcblxuICAgIHByb3RlY3RlZCBzdGF0aWMgaW5zdGFuY2VzOiBCYXNlTmF2YmFyQ29tcG9uZW50W10gPSBbXTtcblxuICAgIGxvYWRlZCA9IHRydWU7XG4gICAgaXNVc2VyTG9nZ2VkSW46IGJvb2xlYW47XG4gICAgbWFpbk5hdkNvbGxhcHNlID0gdHJ1ZTtcbiAgICBzdWJOYXZDb2xsYXBzZSA9IHRydWU7XG4gICAgbW9iaWxlU3ViTmF2ID0gZmFsc2U7XG4gICAgYmFja0xpbmsgPSBmYWxzZTtcbiAgICBtYWluTmF2TGluayA9IHRydWU7XG4gICAgc3VibWVudTogYW55ID0gW107XG4gICAgbW9kdWxlTmFtZU1hcHBlciA9IG5ldyBNb2R1bGVOYW1lTWFwcGVyKHRoaXMuc3lzdGVtQ29uZmlnU3RvcmUpO1xuICAgIGFjdGlvbk5hbWVNYXBwZXIgPSBuZXcgQWN0aW9uTmFtZU1hcHBlcih0aGlzLnN5c3RlbUNvbmZpZ1N0b3JlKTtcbiAgICByb3V0ZUNvbnZlcnRlciA9IG5ldyBSb3V0ZUNvbnZlcnRlcih0aGlzLm1vZHVsZU5hbWVNYXBwZXIsIHRoaXMuYWN0aW9uTmFtZU1hcHBlciwgdGhpcy5zeXN0ZW1Db25maWdTdG9yZSk7XG4gICAgbmF2YmFyOiBOYXZiYXJNb2RlbDtcbiAgICBtYXhUYWJzID0gODtcbiAgICBzY3JlZW46IFNjcmVlblNpemUgPSBTY3JlZW5TaXplLk1lZGl1bTtcbiAgICBub3RpZmljYXRpb25zRW5hYmxlZDogV3JpdGFibGVTaWduYWw8Ym9vbGVhbj4gPSBzaWduYWw8Ym9vbGVhbj4oZmFsc2UpO1xuICAgIHN1YnM6IFN1YnNjcmlwdGlvbltdID0gW11cbiAgICBuYXZpZ2F0aW9uOiBOYXZpZ2F0aW9uO1xuICAgIG1vYmlsZU5hdmJhciA9IGZhbHNlO1xuICAgIGlzU21hbGxTY3JlZW4gPSBzaWduYWw8Ym9vbGVhbj4oZmFsc2UpO1xuICAgIGlzVGFibGV0U2NyZWVuID0gc2lnbmFsPGJvb2xlYW4+KGZhbHNlKTtcbiAgICBkcm9wZG93bkxlbmd0aDogbnVtYmVyO1xuICAgIHJlY2VudGx5Vmlld2VkQ291bnQ6IG51bWJlciA9IDEwO1xuXG4gICAgY3VycmVudFF1aWNrQWN0aW9uczogTW9kdWxlQWN0aW9uW107XG4gICAgaXNTZWFyY2hCb3hWaXNpYmxlID0gc2lnbmFsPGJvb2xlYW4+KGZhbHNlKTtcblxuICAgIGxhbmd1YWdlcyQ6IE9ic2VydmFibGU8TGFuZ3VhZ2VTdHJpbmdzPiA9IHRoaXMubGFuZ3VhZ2VTdG9yZS52bSQ7XG4gICAgdXNlclByZWZlcmVuY2VzJDogT2JzZXJ2YWJsZTxVc2VyUHJlZmVyZW5jZU1hcD4gPSB0aGlzLnVzZXJQcmVmZXJlbmNlU3RvcmUudXNlclByZWZlcmVuY2VzJDtcbiAgICBjdXJyZW50VXNlciQ6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuYXV0aFNlcnZpY2UuY3VycmVudFVzZXIkO1xuICAgIGFwcFN0YXRlJDogT2JzZXJ2YWJsZTxBcHBTdGF0ZT4gPSB0aGlzLmFwcFN0YXRlLnZtJDtcbiAgICBuYXZpZ2F0aW9uJDogT2JzZXJ2YWJsZTxOYXZpZ2F0aW9uPiA9IHRoaXMubmF2aWdhdGlvblN0b3JlLnZtJDtcbiAgICByZWNlbnRseVZpZXdlZCQ6IE9ic2VydmFibGU8UmVjZW50bHlWaWV3ZWRbXT4gPSB0aGlzLmdsb2JhbFJlY2VudGx5Vmlld2VkU3RvcmUuZ2xvYmFsUmVjZW50bHlWaWV3ZWQkO1xuXG4gICAgbm90aWZpY2F0aW9uQ291bnQkOiBPYnNlcnZhYmxlPG51bWJlcj47XG5cbiAgICB2bSQgPSB0aGlzLm5hdmlnYXRpb24kLnBpcGUoXG4gICAgICAgIGNvbWJpbmVMYXRlc3RXaXRoKFxuICAgICAgICAgICAgdGhpcy51c2VyUHJlZmVyZW5jZXMkLFxuICAgICAgICAgICAgdGhpcy5jdXJyZW50VXNlciQsXG4gICAgICAgICAgICB0aGlzLmFwcFN0YXRlJCxcbiAgICAgICAgICAgIHRoaXMuc2NyZWVuU2l6ZS5zY3JlZW5TaXplJCxcbiAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2VzJCxcbiAgICAgICAgKSxcbiAgICAgICAgbWFwKChbbmF2aWdhdGlvbiwgdXNlclByZWZlcmVuY2VzLCBjdXJyZW50VXNlciwgYXBwU3RhdGUsIHNjcmVlblNpemUsIGxhbmd1YWdlXSkgPT4ge1xuXG4gICAgICAgICAgICBpZiAoc2NyZWVuU2l6ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2NyZWVuID0gc2NyZWVuU2l6ZTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uUmVzaXplKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChuYXZpZ2F0aW9uICYmIG5hdmlnYXRpb24ubW9kdWxlcykge1xuICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGlvbiA9IG5hdmlnYXRpb247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlTWF4VGFicyhuYXZpZ2F0aW9uKTtcblxuICAgICAgICAgICAgdGhpcy5nZXRNb2R1bGVRdWlja0FjdGlvbnMoYXBwU3RhdGUubW9kdWxlKTtcblxuICAgICAgICAgICAgdGhpcy5uYXZiYXIucmVzZXRNZW51KCk7XG4gICAgICAgICAgICBpZiAocmVhZHkoW2xhbmd1YWdlLmFwcFN0cmluZ3MsIGxhbmd1YWdlLm1vZFN0cmluZ3MsIGxhbmd1YWdlLmFwcExpc3RTdHJpbmdzLCB1c2VyUHJlZmVyZW5jZXMsIGN1cnJlbnRVc2VyXSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdmJhci5idWlsZChcbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFVzZXIsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWF4VGFicyxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5hdmlnYXRpb24sXG4gICAgICAgICAgICAgICAgdXNlclByZWZlcmVuY2VzLFxuICAgICAgICAgICAgICAgIGFwcFN0YXRlLFxuICAgICAgICAgICAgICAgIGFwcFN0cmluZ3M6IGxhbmd1YWdlLmFwcFN0cmluZ3MgfHwge30sXG4gICAgICAgICAgICAgICAgYXBwTGlzdFN0cmluZ3M6IGxhbmd1YWdlLmFwcExpc3RTdHJpbmdzIHx8IHt9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KVxuICAgICk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIG5hdmlnYXRpb25TdG9yZTogTmF2aWdhdGlvblN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2VTdG9yZTogTGFuZ3VhZ2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIHVzZXJQcmVmZXJlbmNlU3RvcmU6IFVzZXJQcmVmZXJlbmNlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBzeXN0ZW1Db25maWdTdG9yZTogU3lzdGVtQ29uZmlnU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBhcHBTdGF0ZTogQXBwU3RhdGVTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIG1vZHVsZU5hdmlnYXRpb246IE1vZHVsZU5hdmlnYXRpb24sXG4gICAgICAgIHByb3RlY3RlZCBzY3JlZW5TaXplOiBTY3JlZW5TaXplT2JzZXJ2ZXJTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgYXN5bmNBY3Rpb25TZXJ2aWNlOiBBc3luY0FjdGlvblNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBub3RpZmljYXRpb25TdG9yZTogTm90aWZpY2F0aW9uU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBnbG9iYWxSZWNlbnRseVZpZXdlZFN0b3JlOiBHbG9iYWxSZWNlbnRseVZpZXdlZFN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgZ2xvYmFsU2VhcmNoOiBHbG9iYWxTZWFyY2gsXG4gICAgICAgIHByb3RlY3RlZCBicmVha3BvaW50T2JzZXJ2ZXI6IEJyZWFrcG9pbnRPYnNlcnZlcixcbiAgICAgICAgcHJvdGVjdGVkIHJvdXRlcjogUm91dGVyXG4gICAgKSB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHVibGljIEFQSVxuICAgICAqL1xuXG4gICAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScsIFsnJGV2ZW50J10pXG4gICAgb25SZXNpemUoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGlubmVyV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgdGhpcy5tb2JpbGVOYXZiYXIgPSBpbm5lcldpZHRoIDw9IDc2ODtcbiAgICAgICAgdGhpcy5pc1NtYWxsU2NyZWVuLnNldChpbm5lcldpZHRoIDwgNjAwKTtcbiAgICAgICAgdGhpcy5pc1RhYmxldFNjcmVlbi5zZXQoaW5uZXJXaWR0aCA8PSA5OTIpO1xuICAgICAgICB0aGlzLmlzU2VhcmNoQm94VmlzaWJsZS5zZXQoaW5uZXJXaWR0aCA+PSA2MDApO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBjb25zdCBuYXZiYXIgPSBuZXcgTmF2YmFyQWJzdHJhY3QoXG4gICAgICAgICAgICB0aGlzLnJvdXRlQ29udmVydGVyLFxuICAgICAgICAgICAgdGhpcy5tb2R1bGVOYXZpZ2F0aW9uLFxuICAgICAgICAgICAgdGhpcy51c2VyUHJlZmVyZW5jZVN0b3JlLFxuICAgICAgICAgICAgdGhpcy5sYW5ndWFnZVN0b3JlLFxuICAgICAgICAgICAgdGhpcy5hcHBTdGF0ZSxcbiAgICAgICAgICAgIHRoaXMubW9kdWxlTmFtZU1hcHBlclxuICAgICAgICApO1xuICAgICAgICB0aGlzLnNldE5hdmJhcihuYXZiYXIpO1xuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmlzVXNlckxvZ2dlZEluLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzVXNlckxvZ2dlZEluID0gdmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgncmVzaXplJykpO1xuXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uQ291bnQkID0gdGhpcy5ub3RpZmljYXRpb25TdG9yZS5ub3RpZmljYXRpb25zVW5yZWFkVG90YWwkO1xuXG4gICAgICAgIHRoaXMucmVjZW50bHlWaWV3ZWRDb3VudCA9IHRoaXMuc3lzdGVtQ29uZmlnU3RvcmUuZ2V0VWkoJ2dsb2JhbF9yZWNlbnRseV92aWV3ZWQnKTtcblxuICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLm5vdGlmaWNhdGlvblN0b3JlLm5vdGlmaWNhdGlvbnNFbmFibGVkJC5zdWJzY3JpYmUobm90aWZpY2F0aW9uc0VuYWJsZWQgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zRW5hYmxlZC5zZXQobm90aWZpY2F0aW9uc0VuYWJsZWQpO1xuICAgICAgICB9KSk7XG5cbiAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5icmVha3BvaW50T2JzZXJ2ZXIub2JzZXJ2ZShbXG4gICAgICAgICAgICBCcmVha3BvaW50cy5YU21hbGwsXG4gICAgICAgIF0pLnN1YnNjcmliZSgocmVzdWx0OiBCcmVha3BvaW50U3RhdGUpID0+IHtcbiAgICAgICAgICAgIGxldCBoYXNTZWFyY2hUZXJtO1xuICAgICAgICAgICAgaWYoISF0aGlzLnNlYXJjaFRlcm1SZWY/LnNlYXJjaEZvcm0uZ2V0KCdzZWFyY2hUZXJtJykudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBoYXNTZWFyY2hUZXJtID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaGFzU2VhcmNoVGVybSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlc3VsdC5tYXRjaGVzICYmICFoYXNTZWFyY2hUZXJtKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1NlYXJjaEJveFZpc2libGUuc2V0KGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmlzVXNlckxvZ2dlZEluLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMuc3Vicy5mb3JFYWNoKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XG4gICAgfVxuXG4gICAgY2hlY2tBcHBTdHJpbmdzKGFwcFN0cmluZ3MpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGFwcFN0cmluZ3MgJiYgT2JqZWN0LmtleXMoYXBwU3RyaW5ncykubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICBhcmVQcmVmZXJlbmNlc0luaXRpYWxpemVkKHByZWZlcmVuY2VzOiBVc2VyUHJlZmVyZW5jZU1hcCkge1xuICAgICAgICByZXR1cm4gcHJlZmVyZW5jZXMgJiYgT2JqZWN0LmtleXMocHJlZmVyZW5jZXMpLmxlbmd0aDtcbiAgICB9XG5cbiAgICBtYXJrQXNSZWFkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvblN0b3JlLm1hcmtOb3RpZmljYXRpb25zQXNSZWFkKCk7XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMubW9iaWxlR2xvYmFsTGlua1RpdGxlPy5uYXRpdmVFbGVtZW50Py5vZmZzZXRXaWR0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJvcGRvd25MZW5ndGggPSB0aGlzLm1vYmlsZUdsb2JhbExpbmtUaXRsZS5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoYW5nZSBzdWJuYXZpZ2F0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgdHJpZ2dlcmVkXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGl0ZW1zXG4gICAgICovXG4gICAgcHVibGljIGNoYW5nZVN1Yk5hdihldmVudDogRXZlbnQsIGl0ZW1zOiBNZW51SXRlbVtdKTogdm9pZCB7XG4gICAgICAgIHRoaXMubW9iaWxlU3ViTmF2ID0gIXRoaXMubW9iaWxlU3ViTmF2O1xuICAgICAgICB0aGlzLmJhY2tMaW5rID0gIXRoaXMuYmFja0xpbms7XG4gICAgICAgIHRoaXMubWFpbk5hdkxpbmsgPSAhdGhpcy5tYWluTmF2TGluaztcbiAgICAgICAgdGhpcy5zdWJtZW51ID0gaXRlbXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGxpbmsgZmxhZ3NcbiAgICAgKi9cbiAgICBwdWJsaWMgbmF2QmFja0xpbmsoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubW9iaWxlU3ViTmF2ID0gIXRoaXMubW9iaWxlU3ViTmF2O1xuICAgICAgICB0aGlzLmJhY2tMaW5rID0gIXRoaXMuYmFja0xpbms7XG4gICAgICAgIHRoaXMubWFpbk5hdkxpbmsgPSAhdGhpcy5tYWluTmF2TGluaztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgaG9tZSBwYWdlXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBob21lcGFnZVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRIb21lUGFnZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5zeXN0ZW1Db25maWdTdG9yZS5nZXRIb21lUGFnZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludGVybmFsIEFQSVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogU2V0IG5hdmJhciBtb2RlbFxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG5hdmJhciBtb2RlbFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBzZXROYXZiYXIobmF2YmFyOiBOYXZiYXJNb2RlbCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5hdmJhciA9IG5hdmJhcjtcbiAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGlzIGxvYWRlZFxuICAgICAqXG4gICAgICogQHJldHVybnMge3tib29sZWFufX0gaXMgbG9hZGVkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGlzTG9hZGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2FkZWQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNhbGN1bGF0ZU1heFRhYnMobmF2aWdhdGlvbjogTmF2aWdhdGlvbik6IHZvaWQge1xuICAgICAgICBjb25zdCBzaXplTWFwID0gdGhpcy5zeXN0ZW1Db25maWdTdG9yZS5nZXRDb25maWdWYWx1ZSgnbmF2aWdhdGlvbl90YWJfbGltaXRzJyk7XG4gICAgICAgIGlmICh0aGlzLnNjcmVlbiAmJiBzaXplTWFwKSB7XG5cbiAgICAgICAgICAgIGxldCBtYXhUYWJzID0gc2l6ZU1hcFt0aGlzLnNjcmVlbl07XG4gICAgICAgICAgICBpZiAoIW1heFRhYnMgfHwgbmF2aWdhdGlvbi5tYXhUYWJzICYmIG5hdmlnYXRpb24ubWF4VGFicyA8IG1heFRhYnMpIHtcbiAgICAgICAgICAgICAgICBtYXhUYWJzID0gbmF2aWdhdGlvbi5tYXhUYWJzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLm1heFRhYnMgPSBtYXhUYWJzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TW9kdWxlUXVpY2tBY3Rpb25zKG1vZHVsZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG1vZHVsZU5hdmlnYXRpb24gPSB0aGlzPy5uYXZpZ2F0aW9uPy5tb2R1bGVzW21vZHVsZV0gPz8gbnVsbDtcbiAgICAgICAgY29uc3QgbW9kdWxlTmF2aWdhdGlvbk1lbnUgPSBtb2R1bGVOYXZpZ2F0aW9uPy5tZW51ID8/IFtdO1xuICAgICAgICBpZiAobW9kdWxlTmF2aWdhdGlvbiA9PT0gbnVsbCB8fCAhbW9kdWxlTmF2aWdhdGlvbk1lbnUubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRRdWlja0FjdGlvbnMgPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFjdGlvbnMgPSBbXSBhcyBNb2R1bGVBY3Rpb25bXTtcblxuICAgICAgICBtb2R1bGVOYXZpZ2F0aW9uTWVudS5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgICAgIGlmICghZW50cnkudXJsIHx8ICFlbnRyeS5xdWlja0FjdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdXJsID0gZW50cnk/LnVybCA/PyAnJztcblxuICAgICAgICAgICAgYWN0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAuLi5lbnRyeSxcbiAgICAgICAgICAgICAgICB1cmw6IHVybC5yZXBsYWNlKCcvIy8nLCAnLycpXG4gICAgICAgICAgICB9IGFzIE1vZHVsZUFjdGlvbik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY3VycmVudFF1aWNrQWN0aW9ucyA9IGFjdGlvbnM7XG4gICAgfVxuXG4gICAgaGFuZGxlUHJvY2VzcyhhY3Rpb246IE1vZHVsZUFjdGlvbikge1xuICAgICAgICBpZiAoIWFjdGlvbi5wcm9jZXNzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcm9jZXNzVHlwZSA9IGFjdGlvbi5wcm9jZXNzO1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBhY3Rpb246IHByb2Nlc3NUeXBlLFxuICAgICAgICAgICAgbW9kdWxlOiBhY3Rpb24ubW9kdWxlLFxuICAgICAgICB9IGFzIEFzeW5jQWN0aW9uSW5wdXQ7XG5cbiAgICAgICAgdGhpcy5hc3luY0FjdGlvblNlcnZpY2UucnVuKHByb2Nlc3NUeXBlLCBvcHRpb25zKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIG9wZW5TZWFyY2hCb3goKSB7XG4gICAgICAgIGlmKHRoaXMuaXNTbWFsbFNjcmVlbigpKSB7XG4gICAgICAgICAgICB0aGlzLmlzU2VhcmNoQm94VmlzaWJsZS5zZXQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbG9zZVNlYXJjaEJveChpc1Zpc2libGU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5pc1NlYXJjaEJveFZpc2libGUuc2V0KGlzVmlzaWJsZSk7XG4gICAgfVxuXG4gICAgc2VhcmNoKHNlYXJjaFRlcm06IHN0cmluZykge1xuICAgICAgICBjb25zdCBzZWFyY2hDb250cm9sbGVyID0gdGhpcy5zeXN0ZW1Db25maWdTdG9yZS5nZXRDb25maWdWYWx1ZSgnc2VhcmNoJyk/LmNvbnRyb2xsZXIgPz8gJyc7XG4gICAgICAgIHRoaXMuZ2xvYmFsU2VhcmNoLm5hdmlnYXRlVG9TZWFyY2goc2VhcmNoVGVybSwgc2VhcmNoQ29udHJvbGxlcikuZmluYWxseSgpO1xuICAgIH1cblxuICAgIHRvZ2dsZVNpZGViYXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYXBwU3RhdGUudG9nZ2xlU2lkZWJhcigpO1xuICAgIH1cblxuICAgIGNsb3NlTm90aWZpY2F0aW9uTWVudSgpIHtcbiAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5yb3V0ZXIuZXZlbnRzLnBpcGUoXG4gICAgICAgICAgICBmaWx0ZXIoZXZlbnQgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSxcbiAgICAgICAgICAgIHRha2UoMSlcbiAgICAgICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hbGVydERyb3Bkb3duLmNsb3NlKCk7XG4gICAgICAgIH0pKTtcbiAgICB9XG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48IS0tIFN0YXJ0IG9mIG1haW4gbmF2YmFyIHNlY3Rpb24gLS0+XG5cbjxkaXYgKm5nSWY9XCIodm0kIHwgYXN5bmMpIGFzIHZtXCIgY2xhc3M9XCJ0b3AtcGFuZWwgZml4ZWQtdG9wXCI+XG5cbiAgICA8IS0tIFN0YXJ0IG9mIGVtcHR5IG5hdmJhciBzZWN0aW9uIHVudGlsIGRhdGEgaXMgbG9hZGVkIC0tPlxuXG4gICAgPG5nLXRlbXBsYXRlIFtuZ0lmXT1cIiFsb2FkZWRcIj5cbiAgICAgICAgPG5hdiBjbGFzcz1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLWNvbGxhcHNlIGNvbGxhcHNlIG9yZGVyLTQgb3JkZXItbWQtMCBjb2xsYXBzZW5hdlwiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdmJhci1uYXZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwidG9wLW5hdiBuYXYtaXRlbVwiPiZuYnNwO1xuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uYXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgIDwhLS0gRW5kIG9mIGVtcHR5ICBzZWN0aW9uIHVudGlsIGRhdGEgaXMgbG9hZGVkIC0tPlxuXG4gICAgPCEtLSBTdGFydCBvZiBlbXB0eSBuYXZiYXIgd2l0aCBsb2dvIC0tPlxuXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImxvYWRlZFwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXRoaXMuaXNVc2VyTG9nZ2VkSW5cIj5cbiAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJuYXZiYXIgbWwtMCBwbC0wXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdmJhci1jb2xsYXBzZVwiPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXZiYXItbmF2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwbC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tbG9nby11aT48L3Njcm0tbG9nby11aT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPCEtLSBFbmQgb2YgZW1wdHkgbmF2YmFyIHNlY3Rpb24gd2l0aCBsb2dvIC0tPlxuXG4gICAgICAgIDwhLS0gU3RhcnQgb2YgbW9iaWxlIG5hdmlnYXRpb24gc2VjdGlvbiAtLT5cblxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidGhpcy5pc1VzZXJMb2dnZWRJbiAmJiBtb2JpbGVOYXZiYXJcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdmJhciBtb2JpbGUtbmF2LWJsb2NrIG1vYmlsZW5hdmJhclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwidG9nZ2xlU2lkZWJhcigpXCIgY2xhc3M9XCJuYXZiYXItdG9nZ2xlclwiIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWltYWdlIGNsYXNzPVwicmVzcG9uc2l2ZS1tZW51LXRvZ2dsZXJcIiBpbWFnZT1cImhhbWJ1cmdlclwiPjwvc2NybS1pbWFnZT5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJuYXZiYXItZXhwYW5kXCIgW25nQ2xhc3NdPVwiKGlzU21hbGxTY3JlZW4oKSAmJiBpc1NlYXJjaEJveFZpc2libGUoKSkgPyAnZC1ub25lJyA6ICdkLWJsb2NrJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2YmFyLW5hdiBoLTEwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSAqbmdJZj1cIm5hdmJhci5jdXJyZW50ICYmICFuYXZiYXIuY3VycmVudC5pc0dyb3VwZWRNZW51XCIgY2xhc3M9XCJ0b3AtbmF2IG5hdi1pdGVtIGRyb3Bkb3duIG1vYmlsZS1uYXZiYXItYWN0aXZlLW1vZHVsZSBoLTEwMCBub24tZ3JvdXBlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1tZW51LWl0ZW0gW2l0ZW1dPVwibmF2YmFyLmN1cnJlbnRcIj48L3Njcm0tbWVudS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpICpuZ0lmPVwibmF2YmFyLmN1cnJlbnQ/LnN1Ym1lbnUgICYmIG5hdmJhci5jdXJyZW50LmlzR3JvdXBlZE1lbnVcIiBjbGFzcz1cInRvcC1uYXYgbmF2LWl0ZW0gZHJvcGRvd24gbW9iaWxlLW5hdmJhci1hY3RpdmUtbW9kdWxlIG1haW4tZ3JvdXBlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1ncm91cGVkLW1lbnUtaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2l0ZW1dPVwibmF2YmFyLmN1cnJlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N1Yk5hdkNvbGxhcHNlXT1cInN1Yk5hdkNvbGxhcHNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2NybS1ncm91cGVkLW1lbnUtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiYWN0aW9uSWNvbnNcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdsb2JhbC1saW5rcyBhY3Rpb24tZHJvcGRvd25cIiBuZ2JEcm9wZG93bj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImdsb2JhbC1saW5rLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSAjbW9iaWxlR2xvYmFsTGlua1RpdGxlIGNsYXNzPVwibmF2LWxpbmsgcHJpbWFyeS1nbG9iYWwtbGluayBkcm9wZG93bi10b2dnbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5nYkRyb3Bkb3duVG9nZ2xlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1pbWFnZSBjbGFzcz1cImdsb2JhbC1hY3Rpb24taWNvbiBzaWNvbi0yeFwiIGltYWdlPVwidXNlclwiPjwvc2NybS1pbWFnZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBbc3R5bGUubWluLXdpZHRoLnB4XT1cIm1vYmlsZUdsb2JhbExpbmtUaXRsZS5vZmZzZXRXaWR0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJuYXZiYXJEcm9wZG93bk1lbnVMaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZHJvcGRvd24tbWVudSBnbG9iYWwtbGlua3MtZHJvcGRvd24gYm9yZGVyIHNoYWRvdy1zbS0yXCIgbmdiRHJvcGRvd25NZW51PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJnbG9iYWwtdXNlci1uYW1lXCI+e3sgbmF2YmFyLmN1cnJlbnRVc2VyLmZpcnN0TmFtZSB9fSB7eyBuYXZiYXIuY3VycmVudFVzZXIubGFzdE5hbWUgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCJuYXZiYXIuZ2xvYmFsQWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBnbG9iYWxBY3Rpb24gb2YgbmF2YmFyLmdsb2JhbEFjdGlvbnM7IGxldCBmaXJzdCA9IGZpcnN0OyBsZXQgbGFzdCA9IGxhc3Q7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtIGdsb2JhbC1saW5rcy1zdWJsaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwie3sgZ2xvYmFsQWN0aW9uLmxpbmsudXJsIH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZ2JEcm9wZG93bkl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJ7eyBnbG9iYWxBY3Rpb24ubGluay50YXJnZXQgfX1cIj57eyBnbG9iYWxBY3Rpb24ubGluay5sYWJlbCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgKm5nSWY9XCJsYXN0ID09PSB0cnVlIHx8IGZpcnN0ID09PSB0cnVlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWxvZ291dC11aT48L3Njcm0tbG9nb3V0LXVpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPCEtLSBFbmQgb2YgbW9iaWxlIG5hdmlnYXRpb24gc2VjdGlvbi0tPlxuXG4gICAgICAgIDwhLS0gU3RhcnQgb2YgbmF2YmFyIHNlY3Rpb24gd2l0aCBkYXRhIG9uY2UgYXV0aGVudGljYXRlZCAtLT5cblxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidGhpcy5pc1VzZXJMb2dnZWRJbiAmJiAhbW9iaWxlTmF2YmFyXCI+XG4gICAgICAgICAgICA8bmF2IGNsYXNzPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbWQgbmF2YmFyLTFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IFtuZ2JDb2xsYXBzZV09XCJtYWluTmF2Q29sbGFwc2VcIiBjbGFzcz1cIm5hdmJhci1jb2xsYXBzZSBjb2xsYXBzZSBjb2xsYXBzZW5hdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0taG9tZS1tZW51LWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYWN0aXZlXT1cInZtLmFwcFN0YXRlLm1vZHVsZSAmJiB2bS5hcHBTdGF0ZS5tb2R1bGUgPT09ICdob21lJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3JvdXRlXT1cImdldEhvbWVQYWdlKClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvc2NybS1ob21lLW1lbnUtaXRlbT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBOYXZiYXIgd2l0aCBncm91cGVkIHRhYnMgLS0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ2bS51c2VyUHJlZmVyZW5jZXNbJ25hdmlnYXRpb25fcGFyYWRpZ20nXSA9PSAnZ20nXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXZiYXItbmF2IGdyb3VwZWRcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibmF2YmFyLmN1cnJlbnQgJiYgbmF2YmFyLmN1cnJlbnQuaXNHcm91cGVkTWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwidG9wLW5hdiBuYXYtaXRlbSBkcm9wZG93biBtYWluLWdyb3VwZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1ncm91cGVkLW1lbnUtaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2l0ZW1dPVwibmF2YmFyLmN1cnJlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N1Yk5hdkNvbGxhcHNlXT1cInN1Yk5hdkNvbGxhcHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpbmRleF09XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zY3JtLWdyb3VwZWQtbWVudS1pdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgKm5nSWY9XCJuYXZiYXIuY3VycmVudCAmJiAhbmF2YmFyLmN1cnJlbnQuaXNHcm91cGVkTWVudVwiIGNsYXNzPVwidG9wLW5hdiBuYXYtaXRlbSBkcm9wZG93biBub24tZ3JvdXBlZCBhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLW1lbnUtaXRlbSBbaXRlbV09XCJuYXZiYXIuY3VycmVudFwiIFtpbmRleF09XCIxXCI+PC9zY3JtLW1lbnUtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgbmF2YmFyLm1lbnU7IGxldCBpID0gaW5kZXg7XCIgY2xhc3M9XCJ0b3AtbmF2IG5hdi1pdGVtIGRyb3Bkb3duIG1haW4tZ3JvdXBlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tZ3JvdXBlZC1tZW51LWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaXRlbV09XCJpdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc3ViTmF2Q29sbGFwc2VdPVwic3ViTmF2Q29sbGFwc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpbmRleF09XCJpKzJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zY3JtLWdyb3VwZWQtbWVudS1pdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLW1lbnUtaXRlbXMtbGlzdCBbaXRlbXNdPVwibmF2YmFyLmFsbC5tb2R1bGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxLZXk9XCJMQkxfVEFCR1JPVVBfQUxMXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2luZGV4XT1cIm5hdmJhci5tZW51Lmxlbmd0aCArIDJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Njcm0tbWVudS1pdGVtcy1saXN0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIEVORCBOYXZiYXIgd2l0aCBncm91cGVkIHRhYnMgLS0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gTmF2YmFyIHdpdGggbm9uLWdyb3VwZWQgdGFicyAtLT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInZtLnVzZXJQcmVmZXJlbmNlc1snbmF2aWdhdGlvbl9wYXJhZGlnbSddICE9ICdnbSdcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdmJhci1uYXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpICpuZ0lmPVwibmF2YmFyLmN1cnJlbnQgJiYgIW5hdmJhci5jdXJyZW50LmlzR3JvdXBlZE1lbnVcIiBjbGFzcz1cInRvcC1uYXYgbmF2LWl0ZW0gZHJvcGRvd24gbm9uLWdyb3VwZWQgYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1tZW51LWl0ZW0gW2l0ZW1dPVwibmF2YmFyLmN1cnJlbnRcIiBbaW5kZXhdPVwiMVwiPjwvc2NybS1tZW51LWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm5hdmJhci5jdXJyZW50Py5zdWJtZW51ICAmJiBuYXZiYXIuY3VycmVudC5pc0dyb3VwZWRNZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJ0b3AtbmF2IG5hdi1pdGVtIGRyb3Bkb3duIG1haW4tZ3JvdXBlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWdyb3VwZWQtbWVudS1pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpdGVtXT1cIm5hdmJhci5jdXJyZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N1Yk5hdkNvbGxhcHNlXT1cInN1Yk5hdkNvbGxhcHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2luZGV4XT1cIjFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Njcm0tZ3JvdXBlZC1tZW51LWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgbmF2YmFyLm1lbnU7IGxldCBpID0gaW5kZXhcIiBjbGFzcz1cInRvcC1uYXYgbmF2LWl0ZW0gZHJvcGRvd24gbm9uLWdyb3VwZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLW1lbnUtaXRlbSBbaXRlbV09XCJpdGVtXCIgW2luZGV4XT1cImkrMlwiPjwvc2NybS1tZW51LWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tbWVudS1pdGVtcy1saXN0IFtpdGVtc109XCJuYXZiYXIuYWxsLm1vZHVsZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsS2V5PVwiTEJMX01PUkVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2luZGV4XT1cIm5hdmJhci5tZW51Lmxlbmd0aCArIDJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2NybS1tZW51LWl0ZW1zLWxpc3Q+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIEVORCBOYXZiYXIgd2l0aCBub24tZ3JvdXBlZCB0YWJzIC0tPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiYWN0aW9uSWNvbnNcIj48L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgIDwhLS0gR2xvYmFsIExpbmtzIC0tPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdsb2JhbC1saW5rcyBhY3Rpb24tZHJvcGRvd25cIiBuZ2JEcm9wZG93bj5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2YmFyLW5hdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZ2xvYmFsLWxpbmstaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmsgcHJpbWFyeS1nbG9iYWwtbGlua1wiIG5nYkRyb3Bkb3duVG9nZ2xlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1pbWFnZSBjbGFzcz1cImdsb2JhbC1hY3Rpb24taWNvbiBzaWNvbi0yeFwiIGltYWdlPVwidXNlclwiPjwvc2NybS1pbWFnZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBhcmlhLWxhYmVsbGVkYnk9XCJuYXZiYXJEcm9wZG93bk1lbnVMaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZHJvcGRvd24tbWVudSBnbG9iYWwtbGlua3MtZHJvcGRvd24gYm9yZGVyIHNoYWRvdy1zbS0yIGRyb3Bkb3duLW1lbnUtcmlnaHRcIiBuZ2JEcm9wZG93bk1lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImdsb2JhbC11c2VyLW5hbWVcIj57eyBuYXZiYXIuY3VycmVudFVzZXIuZmlyc3ROYW1lIH19IHt7IG5hdmJhci5jdXJyZW50VXNlci5sYXN0TmFtZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm5hdmJhci5nbG9iYWxBY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGdsb2JhbEFjdGlvbiBvZiBuYXZiYXIuZ2xvYmFsQWN0aW9uczsgbGV0IGZpcnN0ID0gZmlyc3Q7IGxldCBsYXN0ID0gbGFzdDtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW0gZ2xvYmFsLWxpbmtzLXN1YmxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJ7eyBnbG9iYWxBY3Rpb24ubGluay51cmwgfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5nYkRyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cInt7IGdsb2JhbEFjdGlvbi5saW5rLnRhcmdldCB9fVwiPnt7IGdsb2JhbEFjdGlvbi5saW5rLmxhYmVsIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAqbmdJZj1cImxhc3QgPT09IHRydWUgfHwgZmlyc3QgPT09IHRydWVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tbG9nb3V0LXVpPjwvc2NybS1sb2dvdXQtdWk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPCEtLSBFTkQgR2xvYmFsIExpbmtzIC0tPlxuXG4gICAgICAgICAgICA8L25hdj5cblxuICAgICAgICAgICAgPCEtLSBFbmQgb2YgbmF2YmFyIHNlY3Rpb24gd2l0aCBkYXRhIG9uY2UgYXV0aGVudGljYXRlZCAtLT5cblxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgIDxuZy10ZW1wbGF0ZSAjYWN0aW9uSWNvbnM+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhY3Rpb24tZ3JvdXAgbmF2YmFyLWFjdGlvbi1ncm91cFwiPlxuICAgICAgICAgICAgPCEtLVF1aWNrIENyZWF0ZS0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFjdGlvbi1uZXcgYWN0aW9uLWRyb3Bkb3duXCIgbmdiRHJvcGRvd24+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2YmFyLW5hdiBib3JkZXItMFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJnbG9iYWwtbGluay1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImFjdGlvbi1saW5rIHByaW1hcnktZ2xvYmFsLWxpbmtcIiB0eXBlPVwiYnV0dG9uXCIgYXJpYS1sYWJlbD1cIlF1aWNrIENyZWF0ZVwiIG5nYkRyb3Bkb3duVG9nZ2xlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWltYWdlIGNsYXNzPVwiYWN0aW9uLWJ0bi1pY29uXCIgaW1hZ2U9XCJwbHVzXCI+PC9zY3JtLWltYWdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIFtjbGFzcy5kcm9wZG93bi1tZW51LXJpZ2h0XT1cIiFtb2JpbGVOYXZiYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzcy5kcm9wZG93bi1tZW51LXJpZ2h0LWNlbnRlcl09XCJtb2JpbGVOYXZiYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LWxlZnQgYm9yZGVyIHNoYWRvdy1zbS0yXCIgbmdiRHJvcGRvd25NZW51PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIihuYXZiYXI/LmN1cnJlbnQ/Lm1vZHVsZSA/PyAnJykgJiYgY3VycmVudFF1aWNrQWN0aW9ucy5sZW5ndGhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmV3LWxpc3QtaXRlbS1oZWFkZXIgZm9udC13ZWlnaHQtYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tbGFiZWwgbGFiZWxLZXk9XCJMQkxfTU9EVUxFX05BTUVcIiBbbW9kdWxlXT1cIm5hdmJhci5jdXJyZW50Lm1vZHVsZVwiPjwvc2NybS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmV3LWxpc3QtaXRlbVwiICpuZ0Zvcj1cImxldCBtb2R1bGVRdWlja0FjdGlvbiBvZiBjdXJyZW50UXVpY2tBY3Rpb25zXCIgbmdiRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFtb2R1bGVRdWlja0FjdGlvbi5wcm9jZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwibW9kdWxlUXVpY2tBY3Rpb24udXJsXCIgW3F1ZXJ5UGFyYW1zXT1cIm1vZHVsZVF1aWNrQWN0aW9uPy5wYXJhbXMgPz8gbnVsbFwiIGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1sYWJlbCBbbGFiZWxLZXldPVwibW9kdWxlUXVpY2tBY3Rpb24ubGFiZWxLZXlcIiBbbW9kdWxlXT1cIm5hdmJhci5jdXJyZW50Lm1vZHVsZVwiIGNsYXNzPVwibmV3LWxpc3QtaXRlbS1sYWJlbFwiPjwvc2NybS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJtb2R1bGVRdWlja0FjdGlvbi5wcm9jZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cImhhbmRsZVByb2Nlc3MobW9kdWxlUXVpY2tBY3Rpb24pXCIgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWxhYmVsIFtsYWJlbEtleV09XCJtb2R1bGVRdWlja0FjdGlvbi5sYWJlbEtleVwiIFttb2R1bGVdPVwibmF2YmFyLmN1cnJlbnQubW9kdWxlXCIgY2xhc3M9XCJuZXctbGlzdC1pdGVtLWxhYmVsXCI+PC9zY3JtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiKHRoaXM/Lm5hdmlnYXRpb24/LnF1aWNrQWN0aW9ucyA/PyBbXSkubGVuZ3RoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5ldy1saXN0LWl0ZW0taGVhZGVyIGZvbnQtd2VpZ2h0LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWxhYmVsIGxhYmVsS2V5PVwiTEJMX1FVSUNLX0FDVElPTlNcIj48L3Njcm0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5ldy1saXN0LWl0ZW1cIiAqbmdGb3I9XCJsZXQgcXVpY2tBY3Rpb24gb2YgKHRoaXM/Lm5hdmlnYXRpb24/LnF1aWNrQWN0aW9ucyA/PyBbXSlcIiBuZ2JEcm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXF1aWNrQWN0aW9uLnByb2Nlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJxdWlja0FjdGlvbi51cmxcIiBbcXVlcnlQYXJhbXNdPVwicXVpY2tBY3Rpb24/LnBhcmFtcyA/PyBudWxsXCIgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWxhYmVsIFtsYWJlbEtleV09XCJxdWlja0FjdGlvbi5sYWJlbEtleVwiIFttb2R1bGVdPVwicXVpY2tBY3Rpb24ubW9kdWxlXCIgY2xhc3M9XCJuZXctbGlzdC1pdGVtLWxhYmVsXCI+PC9zY3JtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInF1aWNrQWN0aW9uLnByb2Nlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVwiaGFuZGxlUHJvY2VzcyhxdWlja0FjdGlvbilcIiBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tbGFiZWwgW2xhYmVsS2V5XT1cInF1aWNrQWN0aW9uLmxhYmVsS2V5XCIgW21vZHVsZV09XCJxdWlja0FjdGlvbi5tb2R1bGVcIiBjbGFzcz1cIm5ldy1saXN0LWl0ZW0tbGFiZWxcIj48L3Njcm0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwhLS1SZWNlbnRseSBWaWV3ZWQtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhY3Rpb24taGlzdG9yeSBhY3Rpb24tZHJvcGRvd25cIiBuZ2JEcm9wZG93bj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXZiYXItbmF2IGJvcmRlci0wXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImdsb2JhbC1saW5rLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYWN0aW9uLWxpbmsgcHJpbWFyeS1nbG9iYWwtbGlua1wiIHR5cGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPVwiUmVjZW50bHkgVmlld2VkXCIgbmdiRHJvcGRvd25Ub2dnbGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0taW1hZ2UgY2xhc3M9XCJhY3Rpb24tYnRuLWljb25cIiBpbWFnZT1cInJlY2VudGx5X3ZpZXdlZFwiPjwvc2NybS1pbWFnZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51IGJvcmRlciBzaGFkb3ctc20tMiBkcm9wZG93bi1tZW51LXJpZ2h0IHNjcm9sbGJhci10aGljayByZWNlbnRseS12aWV3ZWQtbmF2LWhlYWRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzcy5kcm9wZG93bi1tZW51LXJpZ2h0XT1cIiFtb2JpbGVOYXZiYXJcIiBuZ2JEcm9wZG93bk1lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1yZWNlbnRseS12aWV3ZWQgW21lbnVJdGVtc109XCJyZWNlbnRseVZpZXdlZCQgfCBhc3luYyB8IHNsaWNlOjA6cmVjZW50bHlWaWV3ZWRDb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmdiRHJvcGRvd25JdGVtIGNsYXNzPVwicmVjZW50bHktdmlld2VkXCI+PC9zY3JtLXJlY2VudGx5LXZpZXdlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPCEtLVNlYXJjaGJhci0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgcHgtMSBhY3Rpb24tc2VhcmNoXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJzZWFyY2gtbW9iaWxlLXZpZXcgYWN0aW9uLWxpbmsgcHJpbWFyeS1nbG9iYWwtbGlua1wiIFtuZ0NsYXNzXT1cImlzU2VhcmNoQm94VmlzaWJsZSgpID8gJ2Qtbm9uZScgOiAnZC1ibG9jaydcIlxuICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwib3BlblNlYXJjaEJveCgpXCIgYXJpYS1sYWJlbD1cIlNlYXJjaFwiPlxuICAgICAgICAgICAgICAgICAgICA8c2NybS1pbWFnZSBjbGFzcz1cImFjdGlvbi1idG4taWNvblwiIGltYWdlPVwic2VhcmNoXCI+PC9zY3JtLWltYWdlPlxuICAgICAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgICAgIDxkaXYgW25nQ2xhc3NdPVwiaXNTZWFyY2hCb3hWaXNpYmxlKCkgPyAnZC1ibG9jaycgOiAnZC1ub25lJ1wiIFtAbW9iaWxlU2VhcmNoQmFyQW5tXT5cbiAgICAgICAgICAgICAgICAgICAgPHNjcm0tc2VhcmNoLWJhclxuICAgICAgICAgICAgICAgICAgICAgICAgW2xhYmVsS2V5XT1cIidMQkxfU0VBUkNIJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBba2xhc3NdPVwiJ3NlYXJjaC1iYXItZ2xvYmFsJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBbc2VhcmNoVHJpZ2dlcl09XCInZW50ZXInXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtpc01vYmlsZV09XCJpc1NtYWxsU2NyZWVuKClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKGlzU2VhcmNoVmlzaWJsZSk9XCJjbG9zZVNlYXJjaEJveCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChzZWFyY2hFeHByZXNzaW9uKT1cInNlYXJjaCgkZXZlbnQpXCIgI3NlYXJjaFRlcm0+XG4gICAgICAgICAgICAgICAgICAgIDwvc2NybS1zZWFyY2gtYmFyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8IS0tTm90aWZpY2F0aW9ucy0tPlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cIm5vdGlmaWNhdGlvbnNFbmFibGVkKCkgJiYgY2hlY2tBcHBTdHJpbmdzKHZtLmFwcFN0cmluZ3MpICYmIGFyZVByZWZlcmVuY2VzSW5pdGlhbGl6ZWQodm0udXNlclByZWZlcmVuY2VzKVwiXG4gICAgICAgICAgICAgICAgIGNsYXNzPVwiYWN0aW9uLWFsZXJ0IGFjdGlvbi1kcm9wZG93blwiIG5nYkRyb3Bkb3duICNhbGVydERyb3Bkb3duPVwibmdiRHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXZiYXItbmF2IGJvcmRlci0wXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImdsb2JhbC1saW5rLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYWN0aW9uLWxpbmsgcHJpbWFyeS1nbG9iYWwtbGlua1wiIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKG1vdXNlZW50ZXIpPVwibWFya0FzUmVhZCgpXCIgbmdiRHJvcGRvd25Ub2dnbGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0taW1hZ2UgY2xhc3M9XCJhY3Rpb24tYnRuLWljb25cIiBpbWFnZT1cImFsZXJ0XCI+PC9zY3JtLWltYWdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIihub3RpZmljYXRpb25Db3VudCQgfCBhc3luYykgYXMgbm90aWZpY2F0aW9uQ291bnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiKG5vdGlmaWNhdGlvbkNvdW50ID8/IGZhbHNlKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJhZGdlIGJhZGdlLXBvc2l0aW9uIHJvdW5kZWQtcGlsbCBiZy1kYW5nZXIgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJub3RpZmljYXRpb25Db3VudCA+IDBcIj57e25vdGlmaWNhdGlvbkNvdW50IH19PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51IGJvcmRlciBzaGFkb3ctc20tMiBkcm9wZG93bi1tZW51LXJpZ2h0XCIgYXJpYS1sYWJlbGxlZGJ5PVwibmF2YmFyRHJvcGRvd25NZW51TGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJjbG9zZU5vdGlmaWNhdGlvbk1lbnUoKVwiIG5nYkRyb3Bkb3duTWVudT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1ub3RpZmljYXRpb25zPjwvc2NybS1ub3RpZmljYXRpb25zPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG5cbjwvZGl2PlxuXG48IS0tIEVuZCBvZiBtYWluIG5hdmJhciBzZWN0aW9uIC0tPlxuIl19