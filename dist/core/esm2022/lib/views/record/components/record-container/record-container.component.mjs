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
import { Component, HostListener } from '@angular/core';
import { combineLatestWith } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { MetadataStore } from '../../../../store/metadata/metadata.store.service';
import { LanguageStore } from '../../../../store/language/language.store';
import { SidebarWidgetAdapter } from '../../adapters/sidebar-widget.adapter';
import { RecordViewStore } from '../../store/record-view/record-view.store';
import { RecordContentAdapter } from '../../adapters/record-content.adapter';
import { TopWidgetAdapter } from '../../adapters/top-widget.adapter';
import { BottomWidgetAdapter } from '../../adapters/bottom-widget.adapter';
import { RecordActionsAdapter } from '../../adapters/actions.adapter';
import { RecordViewSidebarWidgetService } from "../../services/record-view-sidebar-widget.service";
import { ActivatedRoute } from "@angular/router";
import * as i0 from "@angular/core";
import * as i1 from "../../store/record-view/record-view.store";
import * as i2 from "../../../../store/language/language.store";
import * as i3 from "../../../../store/metadata/metadata.store.service";
import * as i4 from "../../adapters/record-content.adapter";
import * as i5 from "../../adapters/top-widget.adapter";
import * as i6 from "../../adapters/sidebar-widget.adapter";
import * as i7 from "../../adapters/bottom-widget.adapter";
import * as i8 from "../../adapters/actions.adapter";
import * as i9 from "../../services/record-view-sidebar-widget.service";
import * as i10 from "@angular/router";
import * as i11 from "@angular/common";
import * as i12 from "../../../../containers/subpanel/components/subpanel-container/subpanel-container.component";
import * as i13 from "../../../../components/record-content/record-content.component";
import * as i14 from "../../../../containers/top-widget/components/top-widget/top-widget.component";
import * as i15 from "../../../../containers/sidebar-widget/components/sidebar-widget/sidebar-widget.component";
import * as i16 from "../../../../components/record-content-skeleton/record-content-skeleton.component";
import * as i17 from "../record-pagination/record-pagination.component";
const _c0 = a0 => ({ "col-lg-12": a0 });
function RecordContainerComponent_div_0_ng_container_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-record-content-skeleton");
    i0.ɵɵelementContainerEnd();
} }
function RecordContainerComponent_div_0_ng_container_2_ng_container_6_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵelement(1, "scrm-record-pagination");
    i0.ɵɵelementEnd();
} }
function RecordContainerComponent_div_0_ng_container_2_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "scrm-record-content", 10);
    i0.ɵɵtemplate(2, RecordContainerComponent_div_0_ng_container_2_ng_container_6_div_2_Template, 2, 0, "div", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("dataSource", ctx_r0.getContentAdapter());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isOffsetExist);
} }
function RecordContainerComponent_div_0_ng_container_2_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵelement(1, "scrm-sidebar-widget", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const widget_r2 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("config", widget_r2)("context$", ctx_r0.getViewContext$())("context", ctx_r0.getViewContext())("type", widget_r2.type);
} }
function RecordContainerComponent_div_0_ng_container_2_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13)(1, "div", 7);
    i0.ɵɵtemplate(2, RecordContainerComponent_div_0_ng_container_2_div_7_div_2_Template, 2, 4, "div", 14);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const vm_r3 = i0.ɵɵnextContext(2).ngIf;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", vm_r3.bottomWidgetConfig.widgets);
} }
function RecordContainerComponent_div_0_ng_container_2_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17)(1, "div", 7);
    i0.ɵɵelement(2, "scrm-subpanel-container", 18);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("config", ctx_r0.getSubpanelsConfig());
} }
function RecordContainerComponent_div_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "div", 7);
    i0.ɵɵtemplate(5, RecordContainerComponent_div_0_ng_container_2_ng_container_5_Template, 2, 0, "ng-container", 3)(6, RecordContainerComponent_div_0_ng_container_2_ng_container_6_Template, 3, 2, "ng-container", 3);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(7, RecordContainerComponent_div_0_ng_container_2_div_7_Template, 3, 1, "div", 8)(8, RecordContainerComponent_div_0_ng_container_2_div_8_Template, 3, 1, "div", 9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const vm_r3 = i0.ɵɵnextContext().ngIf;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c0, !ctx_r0.sidebarWidgetConfig.show));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r0.loading);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.loading);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", vm_r3.bottomWidgetConfig.show && vm_r3.bottomWidgetConfig.widgets && vm_r3.bottomWidgetConfig.widgets.length);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", vm_r3.showSubpanels);
} }
function RecordContainerComponent_div_0_ng_container_3_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22)(1, "div", 23)(2, "div", 24);
    i0.ɵɵelement(3, "div", 25);
    i0.ɵɵelementEnd()()();
} }
function RecordContainerComponent_div_0_ng_container_3_div_1_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15)(1, "div", 27);
    i0.ɵɵelement(2, "scrm-top-widget", 28);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const vm_r3 = i0.ɵɵnextContext(4).ngIf;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("config", vm_r3.topWidgetConfig.widget)("context", ctx_r0.getViewContext())("type", vm_r3.topWidgetConfig.widget.type);
} }
function RecordContainerComponent_div_0_ng_container_3_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RecordContainerComponent_div_0_ng_container_3_div_1_ng_container_2_div_1_Template, 3, 3, "div", 26);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const vm_r3 = i0.ɵɵnextContext(3).ngIf;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", vm_r3.topWidgetConfig.show && ctx_r0.hasTopWidgetMetadata(vm_r3.topWidgetConfig.widget));
} }
function RecordContainerComponent_div_0_ng_container_3_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵelement(1, "scrm-sidebar-widget", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const widget_r4 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("type", widget_r4.type)("context", ctx_r0.getViewContext())("context$", ctx_r0.getViewContext$())("config", widget_r4);
} }
function RecordContainerComponent_div_0_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtemplate(1, RecordContainerComponent_div_0_ng_container_3_div_1_div_1_Template, 4, 0, "div", 21)(2, RecordContainerComponent_div_0_ng_container_3_div_1_ng_container_2_Template, 2, 1, "ng-container", 3)(3, RecordContainerComponent_div_0_ng_container_3_div_1_div_3_Template, 2, 4, "div", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("mt-0", ctx_r0.swapWidgets);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.loading);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.loading);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.sidebarWidgetConfig.widgets);
} }
function RecordContainerComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RecordContainerComponent_div_0_ng_container_3_div_1_Template, 4, 5, "div", 19);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.displayWidgets);
} }
function RecordContainerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 2);
    i0.ɵɵtemplate(2, RecordContainerComponent_div_0_ng_container_2_Template, 9, 7, "ng-container", 3)(3, RecordContainerComponent_div_0_ng_container_3_Template, 2, 1, "ng-container", 3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r0.swapWidgets || ctx_r0.swapWidgets && !ctx_r0.displayWidgets);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.swapWidgets || ctx_r0.swapWidgets && ctx_r0.displayWidgets);
} }
export class RecordContainerComponent {
    onEnterKey() {
        if (!this.saveAction || !this.context) {
            return;
        }
        this.actionsAdapter.runAction(this.saveAction, this.context);
    }
    constructor(recordViewStore, language, metadata, contentAdapter, topWidgetAdapter, sidebarWidgetAdapter, bottomWidgetAdapter, actionsAdapter, sidebarWidgetHandler, activatedRoute) {
        this.recordViewStore = recordViewStore;
        this.language = language;
        this.metadata = metadata;
        this.contentAdapter = contentAdapter;
        this.topWidgetAdapter = topWidgetAdapter;
        this.sidebarWidgetAdapter = sidebarWidgetAdapter;
        this.bottomWidgetAdapter = bottomWidgetAdapter;
        this.actionsAdapter = actionsAdapter;
        this.sidebarWidgetHandler = sidebarWidgetHandler;
        this.activatedRoute = activatedRoute;
        this.subs = [];
        this.loading = true;
        this.language$ = this.language.vm$;
        this.isOffsetExist = false;
        this.displayWidgets = true;
        this.swapWidgets = false;
        this.vm$ = this.language$.pipe(combineLatestWith(this.bottomWidgetAdapter.config$, this.topWidgetAdapter.config$, this.recordViewStore.showSubpanels$), map(([language, bottomWidgetConfig, topWidgetConfig, showSubpanels]) => ({
            language,
            bottomWidgetConfig,
            topWidgetConfig,
            showSubpanels
        })));
        this.actionConfig$ = this.recordViewStore.mode$.pipe(combineLatestWith(this.actionsAdapter.getActions(), this.getViewContext$()), filter(([mode, actions, context]) => mode === 'edit'), map(([mode, actions, context]) => ({
            mode,
            actions,
            context
        })));
        const queryParams = this.activatedRoute.snapshot.queryParamMap;
        this.isOffsetExist = !!queryParams.get('offset');
    }
    ngOnInit() {
        this.subs.push(this.recordViewStore.loading$.subscribe(loading => {
            this.loading = loading;
        }));
        this.subs.push(this.actionConfig$.subscribe(config => {
            this.context = config.context;
            config.actions.forEach(actionItem => {
                if (actionItem.key === 'save') {
                    this.saveAction = actionItem;
                }
            });
        }));
        this.subs.push(this.sidebarWidgetAdapter.config$.subscribe(sidebarWidgetConfig => {
            this.sidebarWidgetConfig = sidebarWidgetConfig;
            this.displayWidgets = this.sidebarWidgetConfig.show && this.sidebarWidgetConfig.widgets;
        }));
        this.subs.push(this.sidebarWidgetHandler.widgetSwap$.subscribe(swap => {
            this.swapWidgets = swap;
        }));
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
        this.contentAdapter.clean();
    }
    getContentAdapter() {
        return this.contentAdapter;
    }
    getSubpanelsConfig() {
        return {
            parentModule: this.recordViewStore.getModuleName(),
            subpanels$: this.recordViewStore.subpanels$,
            sidebarActive$: this.recordViewStore.widgets$
        };
    }
    getViewContext() {
        return this.recordViewStore.getViewContext();
    }
    getViewContext$() {
        return this.recordViewStore.viewContext$;
    }
    hasTopWidgetMetadata(meta) {
        return !!(meta && meta.type);
    }
    static { this.ɵfac = function RecordContainerComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RecordContainerComponent)(i0.ɵɵdirectiveInject(i1.RecordViewStore), i0.ɵɵdirectiveInject(i2.LanguageStore), i0.ɵɵdirectiveInject(i3.MetadataStore), i0.ɵɵdirectiveInject(i4.RecordContentAdapter), i0.ɵɵdirectiveInject(i5.TopWidgetAdapter), i0.ɵɵdirectiveInject(i6.SidebarWidgetAdapter), i0.ɵɵdirectiveInject(i7.BottomWidgetAdapter), i0.ɵɵdirectiveInject(i8.RecordActionsAdapter), i0.ɵɵdirectiveInject(i9.RecordViewSidebarWidgetService), i0.ɵɵdirectiveInject(i10.ActivatedRoute)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RecordContainerComponent, selectors: [["scrm-record-container"]], hostBindings: function RecordContainerComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keyup.control.enter", function RecordContainerComponent_keyup_control_enter_HostBindingHandler() { return ctx.onEnterKey(); });
        } }, features: [i0.ɵɵProvidersFeature([RecordContentAdapter, TopWidgetAdapter, SidebarWidgetAdapter, BottomWidgetAdapter])], decls: 2, vars: 3, consts: [["class", "record-view-container view-container container-fluid pt-0 pb-3 small-font", 4, "ngIf"], [1, "record-view-container", "view-container", "container-fluid", "pt-0", "pb-3", "small-font"], [1, "row"], [4, "ngIf"], [1, "col-lg-9", 3, "ngClass"], [1, "container-fluid", "pl-0", "pr-0"], [1, "row", "no-gutters", "mt-1"], [1, "col"], ["class", "row no-gutters mt-2", 4, "ngIf"], ["class", "row no-gutters pt-3 pb-4", 4, "ngIf"], [3, "dataSource"], ["top-right-placement", "", 4, "ngIf"], ["top-right-placement", ""], [1, "row", "no-gutters", "mt-2"], ["class", "mb-3", 4, "ngFor", "ngForOf"], [1, "mb-3"], [3, "config", "context$", "context", "type"], [1, "row", "no-gutters", "pt-3", "pb-4"], [3, "config"], ["class", "col-lg-3 record-widget-container pl-0", 3, "mt-0", 4, "ngIf"], [1, "col-lg-3", "record-widget-container", "pl-0"], ["class", "row no-gutters", 4, "ngIf"], [1, "row", "no-gutters"], [1, "col", "pb-3"], [1, "d-flex", "justify-content-center", "widget-bar", "rounded", "pb-1", "pt-3", "box-loading"], [1, "d-flex", "justify-content-center", "align-items-baseline", "widget-bar-entry", "p-2"], ["class", "mb-3", 4, "ngIf"], [1, ""], [3, "config", "context", "type"], [3, "type", "context", "context$", "config"]], template: function RecordContainerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, RecordContainerComponent_div_0_Template, 4, 2, "div", 0);
            i0.ɵɵpipe(1, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.vm$));
        } }, dependencies: [i11.NgClass, i11.NgForOf, i11.NgIf, i12.SubpanelContainerComponent, i13.RecordContentComponent, i14.TopWidgetComponent, i15.SidebarWidgetComponent, i16.RecordContentSkeletonComponent, i17.RecordPaginationComponent, i11.AsyncPipe], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordContainerComponent, [{
        type: Component,
        args: [{ selector: 'scrm-record-container', providers: [RecordContentAdapter, TopWidgetAdapter, SidebarWidgetAdapter, BottomWidgetAdapter], template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<!-- Start Record View Container Section -->\n\n<div *ngIf=\"(vm$ | async) as vm\"\n     class=\"record-view-container view-container container-fluid pt-0 pb-3 small-font\">\n    <div class=\"row\">\n        <ng-container *ngIf=\"!swapWidgets || (swapWidgets && !displayWidgets)\">\n            <div class=\"col-lg-9\" [ngClass]=\"{ 'col-lg-12': !sidebarWidgetConfig.show }\">\n\n                <div class=\"container-fluid pl-0 pr-0\">\n\n                    <div class=\"row no-gutters mt-1\">\n                        <div class=\"col\">\n                            <ng-container *ngIf=\"loading\">\n                                <scrm-record-content-skeleton></scrm-record-content-skeleton>\n                            </ng-container>\n                            <ng-container *ngIf=\"!loading\">\n                                <scrm-record-content [dataSource]=\"getContentAdapter()\">\n                                    <div top-right-placement *ngIf=\"isOffsetExist\">\n                                        <scrm-record-pagination></scrm-record-pagination>\n                                    </div>\n                                </scrm-record-content>\n                            </ng-container>\n                        </div>\n                    </div>\n\n                    <div *ngIf=\"vm.bottomWidgetConfig.show && vm.bottomWidgetConfig.widgets && vm.bottomWidgetConfig.widgets.length\"\n                         class=\"row no-gutters mt-2\">\n                        <div class=\"col\">\n                            <div *ngFor=\"let widget of vm.bottomWidgetConfig.widgets\" class=\"mb-3\">\n                                <scrm-sidebar-widget [config]=\"widget\"\n                                                     [context$]=\"getViewContext$()\"\n                                                     [context]=\"getViewContext()\"\n                                                     [type]=\"widget.type\">\n                                </scrm-sidebar-widget>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div *ngIf=\"vm.showSubpanels\"\n                         class=\"row no-gutters pt-3 pb-4\">\n                        <div class=\"col\">\n                            <scrm-subpanel-container [config]=\"getSubpanelsConfig()\"></scrm-subpanel-container>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </ng-container>\n\n        <ng-container *ngIf=\"!swapWidgets || (swapWidgets && displayWidgets)\">\n            <div class=\"col-lg-3 record-widget-container pl-0\"\n                 [class.mt-0]=\"swapWidgets\"\n                 *ngIf=\"displayWidgets\">\n                <div *ngIf=\"loading\" class=\"row no-gutters\">\n                    <div class=\"col pb-3\">\n                        <div class=\"d-flex justify-content-center widget-bar rounded  pb-1 pt-3 box-loading\">\n                            <div class=\"d-flex justify-content-center align-items-baseline widget-bar-entry p-2\">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <ng-container *ngIf=\"!loading\">\n                    <div *ngIf=\"vm.topWidgetConfig.show && hasTopWidgetMetadata(vm.topWidgetConfig.widget)\"\n                         class=\"mb-3\">\n                        <div class=\"\">\n                            <scrm-top-widget [config]=\"vm.topWidgetConfig.widget\"\n                                             [context]=\"getViewContext()\"\n                                             [type]=\"vm.topWidgetConfig.widget.type\">\n                            </scrm-top-widget>\n                        </div>\n                    </div>\n                </ng-container>\n                <div class=\"mb-3\" *ngFor=\"let widget of sidebarWidgetConfig.widgets\">\n                    <scrm-sidebar-widget [type]=\"widget.type\"\n                                         [context]=\"getViewContext()\"\n                                         [context$]=\"getViewContext$()\"\n                                         [config]=\"widget\">\n                    </scrm-sidebar-widget>\n                </div>\n            </div>\n        </ng-container>\n\n    </div>\n</div>\n\n<!-- End Record View Container Section -->\n" }]
    }], () => [{ type: i1.RecordViewStore }, { type: i2.LanguageStore }, { type: i3.MetadataStore }, { type: i4.RecordContentAdapter }, { type: i5.TopWidgetAdapter }, { type: i6.SidebarWidgetAdapter }, { type: i7.BottomWidgetAdapter }, { type: i8.RecordActionsAdapter }, { type: i9.RecordViewSidebarWidgetService }, { type: i10.ActivatedRoute }], { onEnterKey: [{
            type: HostListener,
            args: ['keyup.control.enter']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RecordContainerComponent, { className: "RecordContainerComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvcmVjb3JkL2NvbXBvbmVudHMvcmVjb3JkLWNvbnRhaW5lci9yZWNvcmQtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi92aWV3cy9yZWNvcmQvY29tcG9uZW50cy9yZWNvcmQtY29udGFpbmVyL3JlY29yZC1jb250YWluZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUMsaUJBQWlCLEVBQTJCLE1BQU0sTUFBTSxDQUFDO0FBQ2pFLE9BQU8sRUFBQyxHQUFHLEVBQUUsTUFBTSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFHM0MsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLG1EQUFtRCxDQUFDO0FBQ2hGLE9BQU8sRUFBQyxhQUFhLEVBQWtCLE1BQU0sMkNBQTJDLENBQUM7QUFJekYsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDM0UsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQzFFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBRTNFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQ25FLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBRXBFLE9BQU8sRUFBQyw4QkFB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LENBQUM7SUFFRCxvQkFBb0IsQ0FBQyxJQUFvQjtRQUNyQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQzt5SEExSFEsd0JBQXdCO29FQUF4Qix3QkFBd0I7WUFBeEIseUhBQUEsZ0JBQVksSUFBWTs4Q0FGdEIsQ0FBQyxvQkFBb0IsRUFBRSxnQkFBZ0IsRUFBRSxvQkFBb0IsRUFBRSxtQkFBbUIsQ0FBQztZQ3JCbEcseUVBQ3VGOzs7WUFEakYsb0RBQW9COzs7aUZEdUJiLHdCQUF3QjtjQUxwQyxTQUFTOzJCQUNJLHVCQUF1QixhQUV0QixDQUFDLG9CQUFvQixFQUFFLGdCQUFnQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixDQUFDOzZWQWlEOUYsVUFBVTtrQkFEVCxZQUFZO21CQUFDLHFCQUFxQjs7a0ZBOUMxQix3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBIb3N0TGlzdGVuZXIsIE9uRGVzdHJveSwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Y29tYmluZUxhdGVzdFdpdGgsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge21hcCwgZmlsdGVyfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1ZpZXdDb250ZXh0fSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vdmlld3Mvdmlldy5tb2RlbCc7XG5pbXBvcnQge1dpZGdldE1ldGFkYXRhfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vbWV0YWRhdGEvd2lkZ2V0Lm1ldGFkYXRhJztcbmltcG9ydCB7TWV0YWRhdGFTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvbWV0YWRhdGEvbWV0YWRhdGEuc3RvcmUuc2VydmljZSc7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmUsIExhbmd1YWdlU3RyaW5nc30gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtcbiAgICBTdWJwYW5lbENvbnRhaW5lckNvbmZpZ1xufSBmcm9tICcuLi8uLi8uLi8uLi9jb250YWluZXJzL3N1YnBhbmVsL2NvbXBvbmVudHMvc3VicGFuZWwtY29udGFpbmVyL3N1YnBhbmVsLWNvbnRhaW5lci5tb2RlbCc7XG5pbXBvcnQge1NpZGViYXJXaWRnZXRBZGFwdGVyfSBmcm9tICcuLi8uLi9hZGFwdGVycy9zaWRlYmFyLXdpZGdldC5hZGFwdGVyJztcbmltcG9ydCB7UmVjb3JkVmlld1N0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS9yZWNvcmQtdmlldy9yZWNvcmQtdmlldy5zdG9yZSc7XG5pbXBvcnQge1JlY29yZENvbnRlbnRBZGFwdGVyfSBmcm9tICcuLi8uLi9hZGFwdGVycy9yZWNvcmQtY29udGVudC5hZGFwdGVyJztcbmltcG9ydCB7UmVjb3JkQ29udGVudERhdGFTb3VyY2V9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcmVjb3JkLWNvbnRlbnQvcmVjb3JkLWNvbnRlbnQubW9kZWwnO1xuaW1wb3J0IHtUb3BXaWRnZXRBZGFwdGVyfSBmcm9tICcuLi8uLi9hZGFwdGVycy90b3Atd2lkZ2V0LmFkYXB0ZXInO1xuaW1wb3J0IHtCb3R0b21XaWRnZXRBZGFwdGVyfSBmcm9tICcuLi8uLi9hZGFwdGVycy9ib3R0b20td2lkZ2V0LmFkYXB0ZXInO1xuaW1wb3J0IHtSZWNvcmRBY3Rpb25zQWRhcHRlcn0gZnJvbSAnLi4vLi4vYWRhcHRlcnMvYWN0aW9ucy5hZGFwdGVyJztcbmltcG9ydCB7QWN0aW9uLCBBY3Rpb25Db250ZXh0fSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vYWN0aW9ucy9hY3Rpb24ubW9kZWwnO1xuaW1wb3J0IHtSZWNvcmRWaWV3U2lkZWJhcldpZGdldFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9yZWNvcmQtdmlldy1zaWRlYmFyLXdpZGdldC5zZXJ2aWNlXCI7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1yZWNvcmQtY29udGFpbmVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3JlY29yZC1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHByb3ZpZGVyczogW1JlY29yZENvbnRlbnRBZGFwdGVyLCBUb3BXaWRnZXRBZGFwdGVyLCBTaWRlYmFyV2lkZ2V0QWRhcHRlciwgQm90dG9tV2lkZ2V0QWRhcHRlcl1cbn0pXG5leHBvcnQgY2xhc3MgUmVjb3JkQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgcHJvdGVjdGVkIHN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgICBzYXZlQWN0aW9uOiBBY3Rpb247XG4gICAgY29udGV4dDogQWN0aW9uQ29udGV4dDtcbiAgICBsb2FkaW5nOiBib29sZWFuID0gdHJ1ZTtcbiAgICBsYW5ndWFnZSQ6IE9ic2VydmFibGU8TGFuZ3VhZ2VTdHJpbmdzPiA9IHRoaXMubGFuZ3VhZ2Uudm0kO1xuICAgIGlzT2Zmc2V0RXhpc3Q6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBkaXNwbGF5V2lkZ2V0czogYm9vbGVhbiA9IHRydWU7XG4gICAgc3dhcFdpZGdldHM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBzaWRlYmFyV2lkZ2V0Q29uZmlnOiBhbnk7XG5cbiAgICB2bSQgPSB0aGlzLmxhbmd1YWdlJC5waXBlKFxuICAgICAgICBjb21iaW5lTGF0ZXN0V2l0aChcbiAgICAgICAgICAgIHRoaXMuYm90dG9tV2lkZ2V0QWRhcHRlci5jb25maWckLFxuICAgICAgICAgICAgdGhpcy50b3BXaWRnZXRBZGFwdGVyLmNvbmZpZyQsXG4gICAgICAgICAgICB0aGlzLnJlY29yZFZpZXdTdG9yZS5zaG93U3VicGFuZWxzJFxuICAgICAgICApLFxuICAgICAgICBtYXAoKFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIGxhbmd1YWdlLFxuICAgICAgICAgICAgICAgIGJvdHRvbVdpZGdldENvbmZpZyxcbiAgICAgICAgICAgICAgICB0b3BXaWRnZXRDb25maWcsXG4gICAgICAgICAgICAgICAgc2hvd1N1YnBhbmVsc1xuICAgICAgICAgICAgXVxuICAgICAgICApID0+ICh7XG4gICAgICAgICAgICBsYW5ndWFnZSxcbiAgICAgICAgICAgIGJvdHRvbVdpZGdldENvbmZpZyxcbiAgICAgICAgICAgIHRvcFdpZGdldENvbmZpZyxcbiAgICAgICAgICAgIHNob3dTdWJwYW5lbHNcbiAgICAgICAgfSkpXG4gICAgKTtcblxuICAgIGFjdGlvbkNvbmZpZyQgPSAgdGhpcy5yZWNvcmRWaWV3U3RvcmUubW9kZSQucGlwZShcbiAgICAgICAgY29tYmluZUxhdGVzdFdpdGgoXG4gICAgICAgICAgICB0aGlzLmFjdGlvbnNBZGFwdGVyLmdldEFjdGlvbnMoKSxcbiAgICAgICAgICAgIHRoaXMuZ2V0Vmlld0NvbnRleHQkKCkpLFxuICAgICAgICBmaWx0ZXIoKFttb2RlLCBhY3Rpb25zLCBjb250ZXh0XSkgPT4gbW9kZSA9PT0gJ2VkaXQnKSxcbiAgICAgICAgbWFwKChbbW9kZSwgYWN0aW9ucywgY29udGV4dF0pID0+ICh7XG4gICAgICAgICAgICBtb2RlLFxuICAgICAgICAgICAgYWN0aW9ucyxcbiAgICAgICAgICAgIGNvbnRleHRcbiAgICAgICAgfSkpXG4gICAgKTtcblxuICAgIEBIb3N0TGlzdGVuZXIoJ2tleXVwLmNvbnRyb2wuZW50ZXInKVxuICAgIG9uRW50ZXJLZXkoKSB7XG4gICAgICAgIGlmICghdGhpcy5zYXZlQWN0aW9uIHx8ICF0aGlzLmNvbnRleHQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFjdGlvbnNBZGFwdGVyLnJ1bkFjdGlvbih0aGlzLnNhdmVBY3Rpb24sIHRoaXMuY29udGV4dCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyByZWNvcmRWaWV3U3RvcmU6IFJlY29yZFZpZXdTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGxhbmd1YWdlOiBMYW5ndWFnZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbWV0YWRhdGE6IE1ldGFkYXRhU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBjb250ZW50QWRhcHRlcjogUmVjb3JkQ29udGVudEFkYXB0ZXIsXG4gICAgICAgIHByb3RlY3RlZCB0b3BXaWRnZXRBZGFwdGVyOiBUb3BXaWRnZXRBZGFwdGVyLFxuICAgICAgICBwcm90ZWN0ZWQgc2lkZWJhcldpZGdldEFkYXB0ZXI6IFNpZGViYXJXaWRnZXRBZGFwdGVyLFxuICAgICAgICBwcm90ZWN0ZWQgYm90dG9tV2lkZ2V0QWRhcHRlcjogQm90dG9tV2lkZ2V0QWRhcHRlcixcbiAgICAgICAgcHJvdGVjdGVkIGFjdGlvbnNBZGFwdGVyOiBSZWNvcmRBY3Rpb25zQWRhcHRlcixcbiAgICAgICAgcHJvdGVjdGVkIHNpZGViYXJXaWRnZXRIYW5kbGVyOiBSZWNvcmRWaWV3U2lkZWJhcldpZGdldFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlXG4gICAgKSB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gdGhpcy5hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtTWFwO1xuICAgICAgICB0aGlzLmlzT2Zmc2V0RXhpc3QgPSAhIXF1ZXJ5UGFyYW1zLmdldCgnb2Zmc2V0Jyk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMucmVjb3JkVmlld1N0b3JlLmxvYWRpbmckLnN1YnNjcmliZShsb2FkaW5nID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGxvYWRpbmc7XG4gICAgICAgIH0pKTtcblxuICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLmFjdGlvbkNvbmZpZyQuc3Vic2NyaWJlKGNvbmZpZyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0ID0gY29uZmlnLmNvbnRleHQ7XG4gICAgICAgICAgICAgICAgY29uZmlnLmFjdGlvbnMuZm9yRWFjaChhY3Rpb25JdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGlvbkl0ZW0ua2V5ID09PSAnc2F2ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUFjdGlvbiA9IGFjdGlvbkl0ZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5zaWRlYmFyV2lkZ2V0QWRhcHRlci5jb25maWckLnN1YnNjcmliZShzaWRlYmFyV2lkZ2V0Q29uZmlnID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2lkZWJhcldpZGdldENvbmZpZyA9IHNpZGViYXJXaWRnZXRDb25maWc7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlXaWRnZXRzID0gdGhpcy5zaWRlYmFyV2lkZ2V0Q29uZmlnLnNob3cgJiYgdGhpcy5zaWRlYmFyV2lkZ2V0Q29uZmlnLndpZGdldHM7XG4gICAgICAgIH0pKTtcblxuICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLnNpZGViYXJXaWRnZXRIYW5kbGVyLndpZGdldFN3YXAkLnN1YnNjcmliZShzd2FwID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3dhcFdpZGdldHMgPSBzd2FwO1xuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc3Vicy5mb3JFYWNoKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XG4gICAgICAgIHRoaXMuY29udGVudEFkYXB0ZXIuY2xlYW4oKTtcbiAgICB9XG5cbiAgICBnZXRDb250ZW50QWRhcHRlcigpOiBSZWNvcmRDb250ZW50RGF0YVNvdXJjZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRlbnRBZGFwdGVyO1xuICAgIH1cblxuICAgIGdldFN1YnBhbmVsc0NvbmZpZygpOiBTdWJwYW5lbENvbnRhaW5lckNvbmZpZyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwYXJlbnRNb2R1bGU6IHRoaXMucmVjb3JkVmlld1N0b3JlLmdldE1vZHVsZU5hbWUoKSxcbiAgICAgICAgICAgIHN1YnBhbmVscyQ6IHRoaXMucmVjb3JkVmlld1N0b3JlLnN1YnBhbmVscyQsXG4gICAgICAgICAgICBzaWRlYmFyQWN0aXZlJDogdGhpcy5yZWNvcmRWaWV3U3RvcmUud2lkZ2V0cyRcbiAgICAgICAgfSBhcyBTdWJwYW5lbENvbnRhaW5lckNvbmZpZztcbiAgICB9XG5cbiAgICBnZXRWaWV3Q29udGV4dCgpOiBWaWV3Q29udGV4dCB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlY29yZFZpZXdTdG9yZS5nZXRWaWV3Q29udGV4dCgpO1xuICAgIH1cblxuICAgIGdldFZpZXdDb250ZXh0JCgpOiBPYnNlcnZhYmxlPFZpZXdDb250ZXh0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlY29yZFZpZXdTdG9yZS52aWV3Q29udGV4dCQ7XG4gICAgfVxuXG4gICAgaGFzVG9wV2lkZ2V0TWV0YWRhdGEobWV0YTogV2lkZ2V0TWV0YWRhdGEpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICEhKG1ldGEgJiYgbWV0YS50eXBlKTtcbiAgICB9XG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48IS0tIFN0YXJ0IFJlY29yZCBWaWV3IENvbnRhaW5lciBTZWN0aW9uIC0tPlxuXG48ZGl2ICpuZ0lmPVwiKHZtJCB8IGFzeW5jKSBhcyB2bVwiXG4gICAgIGNsYXNzPVwicmVjb3JkLXZpZXctY29udGFpbmVyIHZpZXctY29udGFpbmVyIGNvbnRhaW5lci1mbHVpZCBwdC0wIHBiLTMgc21hbGwtZm9udFwiPlxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFzd2FwV2lkZ2V0cyB8fCAoc3dhcFdpZGdldHMgJiYgIWRpc3BsYXlXaWRnZXRzKVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy05XCIgW25nQ2xhc3NdPVwieyAnY29sLWxnLTEyJzogIXNpZGViYXJXaWRnZXRDb25maWcuc2hvdyB9XCI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkIHBsLTAgcHItMFwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgbm8tZ3V0dGVycyBtdC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImxvYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tcmVjb3JkLWNvbnRlbnQtc2tlbGV0b24+PC9zY3JtLXJlY29yZC1jb250ZW50LXNrZWxldG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhbG9hZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1yZWNvcmQtY29udGVudCBbZGF0YVNvdXJjZV09XCJnZXRDb250ZW50QWRhcHRlcigpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRvcC1yaWdodC1wbGFjZW1lbnQgKm5nSWY9XCJpc09mZnNldEV4aXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tcmVjb3JkLXBhZ2luYXRpb24+PC9zY3JtLXJlY29yZC1wYWdpbmF0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2NybS1yZWNvcmQtY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwidm0uYm90dG9tV2lkZ2V0Q29uZmlnLnNob3cgJiYgdm0uYm90dG9tV2lkZ2V0Q29uZmlnLndpZGdldHMgJiYgdm0uYm90dG9tV2lkZ2V0Q29uZmlnLndpZGdldHMubGVuZ3RoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJvdyBuby1ndXR0ZXJzIG10LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCB3aWRnZXQgb2Ygdm0uYm90dG9tV2lkZ2V0Q29uZmlnLndpZGdldHNcIiBjbGFzcz1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tc2lkZWJhci13aWRnZXQgW2NvbmZpZ109XCJ3aWRnZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29udGV4dCRdPVwiZ2V0Vmlld0NvbnRleHQkKClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29udGV4dF09XCJnZXRWaWV3Q29udGV4dCgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3R5cGVdPVwid2lkZ2V0LnR5cGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zY3JtLXNpZGViYXItd2lkZ2V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJ2bS5zaG93U3VicGFuZWxzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJvdyBuby1ndXR0ZXJzIHB0LTMgcGItNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLXN1YnBhbmVsLWNvbnRhaW5lciBbY29uZmlnXT1cImdldFN1YnBhbmVsc0NvbmZpZygpXCI+PC9zY3JtLXN1YnBhbmVsLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXN3YXBXaWRnZXRzIHx8IChzd2FwV2lkZ2V0cyAmJiBkaXNwbGF5V2lkZ2V0cylcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMyByZWNvcmQtd2lkZ2V0LWNvbnRhaW5lciBwbC0wXCJcbiAgICAgICAgICAgICAgICAgW2NsYXNzLm10LTBdPVwic3dhcFdpZGdldHNcIlxuICAgICAgICAgICAgICAgICAqbmdJZj1cImRpc3BsYXlXaWRnZXRzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImxvYWRpbmdcIiBjbGFzcz1cInJvdyBuby1ndXR0ZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgcGItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHdpZGdldC1iYXIgcm91bmRlZCAgcGItMSBwdC0zIGJveC1sb2FkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWJhc2VsaW5lIHdpZGdldC1iYXItZW50cnkgcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFsb2FkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJ2bS50b3BXaWRnZXRDb25maWcuc2hvdyAmJiBoYXNUb3BXaWRnZXRNZXRhZGF0YSh2bS50b3BXaWRnZXRDb25maWcud2lkZ2V0KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tdG9wLXdpZGdldCBbY29uZmlnXT1cInZtLnRvcFdpZGdldENvbmZpZy53aWRnZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbnRleHRdPVwiZ2V0Vmlld0NvbnRleHQoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdHlwZV09XCJ2bS50b3BXaWRnZXRDb25maWcud2lkZ2V0LnR5cGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Njcm0tdG9wLXdpZGdldD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItM1wiICpuZ0Zvcj1cImxldCB3aWRnZXQgb2Ygc2lkZWJhcldpZGdldENvbmZpZy53aWRnZXRzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzY3JtLXNpZGViYXItd2lkZ2V0IFt0eXBlXT1cIndpZGdldC50eXBlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbnRleHRdPVwiZ2V0Vmlld0NvbnRleHQoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb250ZXh0JF09XCJnZXRWaWV3Q29udGV4dCQoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb25maWddPVwid2lkZ2V0XCI+XG4gICAgICAgICAgICAgICAgICAgIDwvc2NybS1zaWRlYmFyLXdpZGdldD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgIDwvZGl2PlxuPC9kaXY+XG5cbjwhLS0gRW5kIFJlY29yZCBWaWV3IENvbnRhaW5lciBTZWN0aW9uIC0tPlxuIl19