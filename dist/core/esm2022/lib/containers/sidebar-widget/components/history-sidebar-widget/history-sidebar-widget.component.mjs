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
import { Component, signal } from '@angular/core';
import { HistoryTimelineAdapter } from './history-timeline.adapter.service';
import { BaseWidgetComponent } from '../../../widgets/base-widget.model';
import { LanguageStore } from '../../../../store/language/language.store';
import { HistoryTimelineAdapterFactory } from './history-timeline.adapter.factory';
import { combineLatestWith, Subscription, timer } from 'rxjs';
import { debounce, map } from 'rxjs/operators';
import { ModuleNavigation } from "../../../../services/navigation/module-navigation/module-navigation.service";
import * as i0 from "@angular/core";
import * as i1 from "./history-timeline.adapter.factory";
import * as i2 from "../../../../store/language/language.store";
import * as i3 from "../../../../services/navigation/module-navigation/module-navigation.service";
import * as i4 from "@angular/common";
import * as i5 from "../../../../components/image/image.component";
import * as i6 from "../../../../fields/field.component";
import * as i7 from "../../../../components/widget-panel/widget-panel.component";
import * as i8 from "../../../../components/loading-spinner/loading-spinner.component";
import * as i9 from "../../../../components/chart/components/chart-message-area/chart-message-area.component";
import * as i10 from "@angular/router";
import * as i11 from "../../../../components/button/button.component";
import * as i12 from "./history-sidebar-skeleton-loading/history-sidebar-skeleton-loading.component";
const _c0 = a0 => [a0];
function HistorySidebarWidgetComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelement(1, "scrm-history-sidebar-skeleton-loading");
    i0.ɵɵelementEnd();
} }
function HistorySidebarWidgetComponent_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelement(1, "scrm-loading-spinner", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵproperty("overlay", true);
} }
function HistorySidebarWidgetComponent_div_1_div_4_scrm_chart_message_area_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-chart-message-area", 14);
} }
function HistorySidebarWidgetComponent_div_1_div_4_div_2_div_1_a_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 32);
    i0.ɵɵelement(1, "scrm-field", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const entry_r1 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("routerLink", ctx_r1.redirectLink(entry_r1.record.module, entry_r1.record.id));
    i0.ɵɵadvance();
    i0.ɵɵproperty("type", entry_r1.title.type)("field", entry_r1.title)("record", entry_r1.record);
} }
function HistorySidebarWidgetComponent_div_1_div_4_div_2_div_1_a_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a");
    i0.ɵɵelement(1, "scrm-field", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const entry_r1 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("type", entry_r1.title.type)("field", entry_r1.title)("record", entry_r1.record);
} }
function HistorySidebarWidgetComponent_div_1_div_4_div_2_div_1_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 33)(1, "small", 28);
    i0.ɵɵelement(2, "scrm-field", 34);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const entry_r1 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("type", entry_r1.description.type)("field", entry_r1.description)("record", entry_r1.record);
} }
function HistorySidebarWidgetComponent_div_1_div_4_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 16)(2, "div", 17)(3, "div", 18);
    i0.ɵɵelement(4, "scrm-image", 19);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(5, "div", 20)(6, "div", 21)(7, "div", 22)(8, "p", 23);
    i0.ɵɵtemplate(9, HistorySidebarWidgetComponent_div_1_div_4_div_2_div_1_a_9_Template, 2, 4, "a", 24)(10, HistorySidebarWidgetComponent_div_1_div_4_div_2_div_1_a_10_Template, 2, 3, "a", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, HistorySidebarWidgetComponent_div_1_div_4_div_2_div_1_div_11_Template, 3, 3, "div", 26);
    i0.ɵɵelementStart(12, "div", 27)(13, "small", 28);
    i0.ɵɵelement(14, "scrm-field", 29);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 30)(16, "small", 31);
    i0.ɵɵelement(17, "scrm-field", 29);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const entry_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵclassMapInterpolate1("d-flex flex-row m-2 history-timeline-entry entry-", entry_r1.color, "");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("image", entry_r1.icon);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", entry_r1.record.module !== "audit");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", entry_r1.record.module === "audit");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", entry_r1.description);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("type", entry_r1.user.type)("field", entry_r1.user)("record", entry_r1.record);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("type", entry_r1.date.type)("field", entry_r1.date)("record", entry_r1.record);
} }
function HistorySidebarWidgetComponent_div_1_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, HistorySidebarWidgetComponent_div_1_div_4_div_2_div_1_Template, 18, 13, "div", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const vm_r3 = i0.ɵɵnextContext(2).ngIf;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", vm_r3.length > 0);
} }
function HistorySidebarWidgetComponent_div_1_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 35);
    i0.ɵɵelement(1, "scrm-button", 36);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("config", ctx_r1.getLoadMoreButton());
} }
function HistorySidebarWidgetComponent_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtemplate(1, HistorySidebarWidgetComponent_div_1_div_4_scrm_chart_message_area_1_Template, 1, 0, "scrm-chart-message-area", 11)(2, HistorySidebarWidgetComponent_div_1_div_4_div_2_Template, 2, 1, "div", 12)(3, HistorySidebarWidgetComponent_div_1_div_4_div_3_Template, 2, 1, "div", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const vm_r3 = i0.ɵɵnextContext().ngIf;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c0, vm_r3.length <= 0 ? "history-timeline-viewport-no-data" : "history-timeline-viewport"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !(ctx_r1.adapter == null ? null : ctx_r1.adapter.initializing()) && !(ctx_r1.adapter == null ? null : ctx_r1.adapter.loading()) && vm_r3.length <= 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", vm_r3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.adapter.initializing() && !ctx_r1.adapter.allLoaded());
} }
function HistorySidebarWidgetComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 3);
    i0.ɵɵtemplate(2, HistorySidebarWidgetComponent_div_1_div_2_Template, 2, 0, "div", 4)(3, HistorySidebarWidgetComponent_div_1_div_3_Template, 2, 1, "div", 5)(4, HistorySidebarWidgetComponent_div_1_div_4_Template, 4, 6, "div", 6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", (ctx_r1.adapter == null ? null : ctx_r1.adapter.initializing()) || (ctx_r1.adapter == null ? null : ctx_r1.adapter.firstLoad()) && (ctx_r1.adapter == null ? null : ctx_r1.adapter.loading()));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !(ctx_r1.adapter == null ? null : ctx_r1.adapter.firstLoad()) && (ctx_r1.adapter == null ? null : ctx_r1.adapter.loading()));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !((ctx_r1.adapter == null ? null : ctx_r1.adapter.firstLoad()) && (ctx_r1.adapter == null ? null : ctx_r1.adapter.loading())));
} }
export class HistorySidebarWidgetComponent extends BaseWidgetComponent {
    constructor(historyTimelineAdapterFactory, languageStore, navigation) {
        super();
        this.historyTimelineAdapterFactory = historyTimelineAdapterFactory;
        this.languageStore = languageStore;
        this.navigation = navigation;
        this.initialLoad = signal(false);
        this.subscription = new Subscription();
    }
    ngOnInit() {
        this.adapter = this.historyTimelineAdapterFactory.create();
        this.adapter.init(this.context);
    }
    ngAfterViewInit() {
        // watch out for the data list updates on the related subpanels activities and history
        // reload request will be ignored;
        // if they are notified multiple times within the dueTime/delay 500 ms
        const reloadMap = [];
        reloadMap.push(this.config.reload$);
        reloadMap.push(this.config.subpanelReload$);
        const subpanelsToWatch = ['history', 'activities'];
        const reload$ = reloadMap[0].pipe(combineLatestWith(...reloadMap), map(([reload, subpanelReload = {}]) => {
            if (reload) {
                return reload;
            }
            if (!subpanelReload) {
                return false;
            }
            return subpanelsToWatch.some(subpanelKey => !!subpanelReload[subpanelKey]);
        }));
        const debouncedReload = reload$.pipe(debounce(() => timer(400)));
        this.subscription.add(debouncedReload.subscribe(reload => {
            if (reload) {
                this.adapter.fetchTimelineEntries(true);
            }
        }));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    /**
     * @returns {string} Timeline Entry
     * @description {fetch language label for the timeline widget header}
     */
    getHeaderLabel() {
        return this.languageStore.getFieldLabel('LBL_QUICK_HISTORY');
    }
    getLoadMoreButton() {
        return {
            klass: 'load-more-button btn btn-link btn-sm',
            labelKey: 'LBL_LOAD_MORE',
            onClick: () => {
                this.adapter.fetchTimelineEntries(false);
            }
        };
    }
    redirectLink(module, id) {
        if (module === 'audit') {
            return;
        }
        return this.navigation.getRecordRouterLink(module, id);
    }
    static { this.ɵfac = function HistorySidebarWidgetComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HistorySidebarWidgetComponent)(i0.ɵɵdirectiveInject(i1.HistoryTimelineAdapterFactory), i0.ɵɵdirectiveInject(i2.LanguageStore), i0.ɵɵdirectiveInject(i3.ModuleNavigation)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HistorySidebarWidgetComponent, selectors: [["scrm-history-timeline-widget"]], features: [i0.ɵɵProvidersFeature([HistoryTimelineAdapter]), i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 4, consts: [[3, "title"], ["widget-body", "", 4, "ngIf"], ["widget-body", ""], [1, "widget-background", "history-timeline", "p-2", "pt-0"], ["class", "record-thread-loading", 4, "ngIf"], ["class", "d-flex record-thread-loading justify-content-center", 4, "ngIf"], ["class", "history-timeline-viewport", 3, "ngClass", 4, "ngIf"], [1, "record-thread-loading"], [1, "d-flex", "record-thread-loading", "justify-content-center"], [3, "overlay"], [1, "history-timeline-viewport", 3, "ngClass"], ["labelKey", "LBL_NO_DATA", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "record-thread-load-more d-flex justify-content-center flex-grow-1", 4, "ngIf"], ["labelKey", "LBL_NO_DATA"], [3, "class", 4, "ngIf"], [1, "history-timeline-entry-icon"], [1, "rounded-square", "icon-square"], [1, "d-flex", "justify-content-center", "align-items-center", "h-100", "history-timeline-image"], [3, "image"], [1, "flex-grow-1"], [1, "card"], [1, "card-body", "p-1", "pr-2", "pl-2"], [1, "card-title", "text-break", "history-timeline-entry-title"], [3, "routerLink", 4, "ngIf"], [4, "ngIf"], ["class", "card-text history-timeline-entry-description", 4, "ngIf"], [1, "card-text", "history-timeline-entry-user", "text-uppercase"], [1, "text-break"], ["mode", "list", 3, "type", "field", "record"], [1, "card-text", "text-break", "history-timeline-entry-date"], [1, "font-italic"], [3, "routerLink"], [1, "card-text", "history-timeline-entry-description"], ["mode", "detail", 3, "type", "field", "record"], [1, "record-thread-load-more", "d-flex", "justify-content-center", "flex-grow-1"], [3, "config"]], template: function HistorySidebarWidgetComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "scrm-widget-panel", 0);
            i0.ɵɵtemplate(1, HistorySidebarWidgetComponent_div_1_Template, 5, 3, "div", 1);
            i0.ɵɵpipe(2, "async");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("title", ctx.getHeaderLabel());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(2, 2, ctx.adapter == null ? null : ctx.adapter.dataStream$));
        } }, dependencies: [i4.NgClass, i4.NgForOf, i4.NgIf, i5.ImageComponent, i6.FieldComponent, i7.WidgetPanelComponent, i8.LoadingSpinnerComponent, i9.ChartMessageAreaComponent, i10.RouterLink, i11.ButtonComponent, i12.HistorySidebarSkeletonLoadingComponent, i4.AsyncPipe], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HistorySidebarWidgetComponent, [{
        type: Component,
        args: [{ selector: 'scrm-history-timeline-widget', providers: [HistoryTimelineAdapter], template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<scrm-widget-panel [title]=\"getHeaderLabel()\">\n    <div widget-body *ngIf=\"(adapter?.dataStream$| async) as vm\">\n\n        <div class=\"widget-background history-timeline p-2 pt-0\">\n\n            <div *ngIf=\"adapter?.initializing() || (adapter?.firstLoad() && adapter?.loading())\" class=\"record-thread-loading\">\n                <scrm-history-sidebar-skeleton-loading></scrm-history-sidebar-skeleton-loading>\n            </div>\n\n            <div *ngIf=\"!adapter?.firstLoad() && adapter?.loading()\" class=\"d-flex record-thread-loading justify-content-center\">\n                <scrm-loading-spinner [overlay]=\"true\"></scrm-loading-spinner>\n            </div>\n\n            <div class=\"history-timeline-viewport\"\n                 *ngIf=\"!(adapter?.firstLoad() && adapter?.loading())\"\n                 [ngClass]=\"[vm.length <= 0 ? 'history-timeline-viewport-no-data' : 'history-timeline-viewport']\"\n            >\n\n                <scrm-chart-message-area *ngIf=\"!adapter?.initializing() && !adapter?.loading() && vm.length <= 0\"\n                                         labelKey=\"LBL_NO_DATA\"></scrm-chart-message-area>\n\n                <div *ngFor=\"let entry of vm;\">\n                    <div *ngIf=\"vm.length > 0\"\n                         class=\"d-flex flex-row m-2 history-timeline-entry entry-{{entry.color}}\">\n                        <div class=\"history-timeline-entry-icon\">\n                            <div class=\"rounded-square icon-square\">\n                                <div\n                                        class=\"d-flex justify-content-center align-items-center h-100 history-timeline-image\">\n                                    <scrm-image [image]=\"entry.icon\"></scrm-image>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"flex-grow-1\">\n\n                            <div class=\"card\">\n                                <div class=\"card-body p-1 pr-2 pl-2\">\n                                    <p class=\"card-title text-break history-timeline-entry-title\">\n                                        <a *ngIf=\"entry.record.module !== 'audit'\"\n                                           [routerLink]=\"redirectLink(entry.record.module, entry.record.id)\"\n                                        >\n                                            <scrm-field [type]=\"entry.title.type\"\n                                                        mode=\"list\"\n                                                        [field]=\"entry.title\"\n                                                        [record]=\"entry.record\">\n                                            </scrm-field>\n                                        </a>\n                                        <a *ngIf=\"entry.record.module === 'audit'\">\n                                            <scrm-field [type]=\"entry.title.type\"\n                                                        mode=\"list\"\n                                                        [field]=\"entry.title\"\n                                                        [record]=\"entry.record\">\n                                            </scrm-field>\n                                        </a>\n                                    </p>\n                                    <div *ngIf=\"entry.description\"\n                                         class=\"card-text history-timeline-entry-description\">\n                                        <small class=\"text-break\">\n                                            <scrm-field [type]=\"entry.description.type\"\n                                                        mode=\"detail\"\n                                                        [field]=\"entry.description\"\n                                                        [record]=\"entry.record\">\n                                            </scrm-field>\n                                        </small>\n                                    </div>\n                                    <div class=\"card-text history-timeline-entry-user text-uppercase\">\n                                        <small class=\"text-break\">\n                                            <scrm-field [type]=\"entry.user.type\"\n                                                        mode=\"list\"\n                                                        [field]=\"entry.user\"\n                                                        [record]=\"entry.record\">\n                                            </scrm-field>\n                                        </small>\n                                    </div>\n                                    <div class=\"card-text text-break history-timeline-entry-date\">\n                                        <small class=\"font-italic\">\n                                            <scrm-field [type]=\"entry.date.type\"\n                                                        mode=\"list\"\n                                                        [field]=\"entry.date\"\n                                                        [record]=\"entry.record\"></scrm-field>\n                                        </small>\n                                    </div>\n                                </div>\n                            </div>\n\n                        </div>\n                    </div>\n\n                </div>\n                <div *ngIf=\"!adapter.initializing() && !adapter.allLoaded()\"\n                        class=\"record-thread-load-more d-flex justify-content-center flex-grow-1\">\n                    <scrm-button [config]=\"getLoadMoreButton()\"></scrm-button>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</scrm-widget-panel>\n" }]
    }], () => [{ type: i1.HistoryTimelineAdapterFactory }, { type: i2.LanguageStore }, { type: i3.ModuleNavigation }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(HistorySidebarWidgetComponent, { className: "HistorySidebarWidgetComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlzdG9yeS1zaWRlYmFyLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9zaWRlYmFyLXdpZGdldC9jb21wb25lbnRzL2hpc3Rvcnktc2lkZWJhci13aWRnZXQvaGlzdG9yeS1zaWRlYmFyLXdpZGdldC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9zaWRlYmFyLXdpZGdldC9jb21wb25lbnRzL2hpc3Rvcnktc2lkZWJhci13aWRnZXQvaGlzdG9yeS1zaWRlYmFyLXdpZGdldC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFnQixTQUFTLEVBQXFCLE1BQU0sRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDbEcsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDMUUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDdkUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ3hFLE9BQU8sRUFBQyw2QkFBNkIsRUFBQyxNQUFNLG9DQUFvQyxDQUFDO0FBQ2pGLE9BQU8sRUFBQyxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQzVELE9BQU8sRUFBQyxRQUFRLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNkVBQTZFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7SUNEakcsOEJBQW1IO0lBQy9HLHdEQUErRTtJQUNuRixpQkFBTTs7O0lBRU4sOEJBQXFIO0lBQ2pILDBD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Q0FBQztJQUNSLENBQUM7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsY0FBYztRQUNWLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsaUJBQWlCO1FBQ2IsT0FBTztZQUNILEtBQUssRUFBRSxzQ0FBc0M7WUFDN0MsUUFBUSxFQUFFLGVBQWU7WUFDekIsT0FBTyxFQUFFLEdBQUcsRUFBRTtnQkFDVixJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdDLENBQUM7U0FDZSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxZQUFZLENBQUMsTUFBYyxFQUFFLEVBQVU7UUFDbkMsSUFBSSxNQUFNLEtBQUssT0FBTyxFQUFFLENBQUM7WUFDckIsT0FBTztRQUNYLENBQUM7UUFDRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBQzFELENBQUM7OEhBaEZRLDZCQUE2QjtvRUFBN0IsNkJBQTZCLGtGQUYzQixDQUFDLHNCQUFzQixDQUFDO1lDYnZDLDRDQUE4QztZQUMxQyw4RUFBNkQ7O1lBK0ZqRSxpQkFBb0I7O1lBaEdELDRDQUEwQjtZQUN2QixjQUFvQztZQUFwQyxpR0FBb0M7OztpRkRjN0MsNkJBQTZCO2NBTnpDLFNBQVM7MkJBQ0ksOEJBQThCLGFBRzdCLENBQUMsc0JBQXNCLENBQUM7O2tGQUUxQiw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCwgc2lnbmFsLCBXcml0YWJsZVNpZ25hbH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0hpc3RvcnlUaW1lbGluZUFkYXB0ZXJ9IGZyb20gJy4vaGlzdG9yeS10aW1lbGluZS5hZGFwdGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtCYXNlV2lkZ2V0Q29tcG9uZW50fSBmcm9tICcuLi8uLi8uLi93aWRnZXRzL2Jhc2Utd2lkZ2V0Lm1vZGVsJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtIaXN0b3J5VGltZWxpbmVBZGFwdGVyRmFjdG9yeX0gZnJvbSAnLi9oaXN0b3J5LXRpbWVsaW5lLmFkYXB0ZXIuZmFjdG9yeSc7XG5pbXBvcnQge2NvbWJpbmVMYXRlc3RXaXRoLCBTdWJzY3JpcHRpb24sIHRpbWVyfSBmcm9tICdyeGpzJztcbmltcG9ydCB7ZGVib3VuY2UsIG1hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtNb2R1bGVOYXZpZ2F0aW9ufSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZXMvbmF2aWdhdGlvbi9tb2R1bGUtbmF2aWdhdGlvbi9tb2R1bGUtbmF2aWdhdGlvbi5zZXJ2aWNlXCI7XG5pbXBvcnQge0J1dHRvbkludGVyZmFjZX0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24ubW9kZWxcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLWhpc3RvcnktdGltZWxpbmUtd2lkZ2V0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vaGlzdG9yeS1zaWRlYmFyLXdpZGdldC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbXSxcbiAgICBwcm92aWRlcnM6IFtIaXN0b3J5VGltZWxpbmVBZGFwdGVyXVxufSlcbmV4cG9ydCBjbGFzcyBIaXN0b3J5U2lkZWJhcldpZGdldENvbXBvbmVudCBleHRlbmRzIEJhc2VXaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG5cbiAgICBwdWJsaWMgaW5pdGlhbExvYWQ6IFdyaXRhYmxlU2lnbmFsPGJvb2xlYW4+ID0gc2lnbmFsKGZhbHNlKTtcbiAgICBwdWJsaWMgYWRhcHRlcjogSGlzdG9yeVRpbWVsaW5lQWRhcHRlcjtcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgaGlzdG9yeVRpbWVsaW5lQWRhcHRlckZhY3Rvcnk6IEhpc3RvcnlUaW1lbGluZUFkYXB0ZXJGYWN0b3J5LFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2VTdG9yZTogTGFuZ3VhZ2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIG5hdmlnYXRpb246IE1vZHVsZU5hdmlnYXRpb24pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyID0gdGhpcy5oaXN0b3J5VGltZWxpbmVBZGFwdGVyRmFjdG9yeS5jcmVhdGUoKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLmluaXQodGhpcy5jb250ZXh0KTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG5cbiAgICAgICAgLy8gd2F0Y2ggb3V0IGZvciB0aGUgZGF0YSBsaXN0IHVwZGF0ZXMgb24gdGhlIHJlbGF0ZWQgc3VicGFuZWxzIGFjdGl2aXRpZXMgYW5kIGhpc3RvcnlcbiAgICAgICAgLy8gcmVsb2FkIHJlcXVlc3Qgd2lsbCBiZSBpZ25vcmVkO1xuICAgICAgICAvLyBpZiB0aGV5IGFyZSBub3RpZmllZCBtdWx0aXBsZSB0aW1lcyB3aXRoaW4gdGhlIGR1ZVRpbWUvZGVsYXkgNTAwIG1zXG5cbiAgICAgICAgY29uc3QgcmVsb2FkTWFwID0gW107XG4gICAgICAgIHJlbG9hZE1hcC5wdXNoKHRoaXMuY29uZmlnLnJlbG9hZCQpO1xuICAgICAgICByZWxvYWRNYXAucHVzaCh0aGlzLmNvbmZpZy5zdWJwYW5lbFJlbG9hZCQpO1xuXG4gICAgICAgIGNvbnN0IHN1YnBhbmVsc1RvV2F0Y2ggPSBbJ2hpc3RvcnknLCAnYWN0aXZpdGllcyddO1xuICAgICAgICBjb25zdCByZWxvYWQkID0gcmVsb2FkTWFwWzBdLnBpcGUoXG4gICAgICAgICAgICBjb21iaW5lTGF0ZXN0V2l0aCguLi5yZWxvYWRNYXApLFxuICAgICAgICAgICAgbWFwKChbcmVsb2FkLCBzdWJwYW5lbFJlbG9hZD17fV0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVsb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWxvYWQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFzdWJwYW5lbFJlbG9hZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1YnBhbmVsc1RvV2F0Y2guc29tZShzdWJwYW5lbEtleSA9PiAhIXN1YnBhbmVsUmVsb2FkW3N1YnBhbmVsS2V5XSk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgZGVib3VuY2VkUmVsb2FkID0gcmVsb2FkJC5waXBlKGRlYm91bmNlKCgpID0+IHRpbWVyKDQwMCkpKTtcblxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoZGVib3VuY2VkUmVsb2FkLnN1YnNjcmliZShyZWxvYWQgPT4ge1xuICAgICAgICAgICAgaWYgKHJlbG9hZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRlci5mZXRjaFRpbWVsaW5lRW50cmllcyh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IFRpbWVsaW5lIEVudHJ5XG4gICAgICogQGRlc2NyaXB0aW9uIHtmZXRjaCBsYW5ndWFnZSBsYWJlbCBmb3IgdGhlIHRpbWVsaW5lIHdpZGdldCBoZWFkZXJ9XG4gICAgICovXG4gICAgZ2V0SGVhZGVyTGFiZWwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGFuZ3VhZ2VTdG9yZS5nZXRGaWVsZExhYmVsKCdMQkxfUVVJQ0tfSElTVE9SWScpO1xuICAgIH1cblxuICAgIGdldExvYWRNb3JlQnV0dG9uKCk6IEJ1dHRvbkludGVyZmFjZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBrbGFzczogJ2xvYWQtbW9yZS1idXR0b24gYnRuIGJ0bi1saW5rIGJ0bi1zbScsXG4gICAgICAgICAgICBsYWJlbEtleTogJ0xCTF9MT0FEX01PUkUnLFxuICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRlci5mZXRjaFRpbWVsaW5lRW50cmllcyhmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gYXMgQnV0dG9uSW50ZXJmYWNlO1xuICAgIH1cblxuICAgIHJlZGlyZWN0TGluayhtb2R1bGU6IHN0cmluZywgaWQ6IHN0cmluZykge1xuICAgICAgICBpZiAobW9kdWxlID09PSAnYXVkaXQnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubmF2aWdhdGlvbi5nZXRSZWNvcmRSb3V0ZXJMaW5rKG1vZHVsZSwgaWQpXG4gICAgfVxuXG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48c2NybS13aWRnZXQtcGFuZWwgW3RpdGxlXT1cImdldEhlYWRlckxhYmVsKClcIj5cbiAgICA8ZGl2IHdpZGdldC1ib2R5ICpuZ0lmPVwiKGFkYXB0ZXI/LmRhdGFTdHJlYW0kfCBhc3luYykgYXMgdm1cIj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwid2lkZ2V0LWJhY2tncm91bmQgaGlzdG9yeS10aW1lbGluZSBwLTIgcHQtMFwiPlxuXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiYWRhcHRlcj8uaW5pdGlhbGl6aW5nKCkgfHwgKGFkYXB0ZXI/LmZpcnN0TG9hZCgpICYmIGFkYXB0ZXI/LmxvYWRpbmcoKSlcIiBjbGFzcz1cInJlY29yZC10aHJlYWQtbG9hZGluZ1wiPlxuICAgICAgICAgICAgICAgIDxzY3JtLWhpc3Rvcnktc2lkZWJhci1za2VsZXRvbi1sb2FkaW5nPjwvc2NybS1oaXN0b3J5LXNpZGViYXItc2tlbGV0b24tbG9hZGluZz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiIWFkYXB0ZXI/LmZpcnN0TG9hZCgpICYmIGFkYXB0ZXI/LmxvYWRpbmcoKVwiIGNsYXNzPVwiZC1mbGV4IHJlY29yZC10aHJlYWQtbG9hZGluZyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPHNjcm0tbG9hZGluZy1zcGlubmVyIFtvdmVybGF5XT1cInRydWVcIj48L3Njcm0tbG9hZGluZy1zcGlubmVyPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoaXN0b3J5LXRpbWVsaW5lLXZpZXdwb3J0XCJcbiAgICAgICAgICAgICAgICAgKm5nSWY9XCIhKGFkYXB0ZXI/LmZpcnN0TG9hZCgpICYmIGFkYXB0ZXI/LmxvYWRpbmcoKSlcIlxuICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJbdm0ubGVuZ3RoIDw9IDAgPyAnaGlzdG9yeS10aW1lbGluZS12aWV3cG9ydC1uby1kYXRhJyA6ICdoaXN0b3J5LXRpbWVsaW5lLXZpZXdwb3J0J11cIlxuICAgICAgICAgICAgPlxuXG4gICAgICAgICAgICAgICAgPHNjcm0tY2hhcnQtbWVzc2FnZS1hcmVhICpuZ0lmPVwiIWFkYXB0ZXI/LmluaXRpYWxpemluZygpICYmICFhZGFwdGVyPy5sb2FkaW5nKCkgJiYgdm0ubGVuZ3RoIDw9IDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbEtleT1cIkxCTF9OT19EQVRBXCI+PC9zY3JtLWNoYXJ0LW1lc3NhZ2UtYXJlYT5cblxuICAgICAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGVudHJ5IG9mIHZtO1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwidm0ubGVuZ3RoID4gMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkLWZsZXggZmxleC1yb3cgbS0yIGhpc3RvcnktdGltZWxpbmUtZW50cnkgZW50cnkte3tlbnRyeS5jb2xvcn19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGlzdG9yeS10aW1lbGluZS1lbnRyeS1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdW5kZWQtc3F1YXJlIGljb24tc3F1YXJlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBoLTEwMCBoaXN0b3J5LXRpbWVsaW5lLWltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1pbWFnZSBbaW1hZ2VdPVwiZW50cnkuaWNvblwiPjwvc2NybS1pbWFnZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LWdyb3ctMVwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keSBwLTEgcHItMiBwbC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGl0bGUgdGV4dC1icmVhayBoaXN0b3J5LXRpbWVsaW5lLWVudHJ5LXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgKm5nSWY9XCJlbnRyeS5yZWNvcmQubW9kdWxlICE9PSAnYXVkaXQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcm91dGVyTGlua109XCJyZWRpcmVjdExpbmsoZW50cnkucmVjb3JkLm1vZHVsZSwgZW50cnkucmVjb3JkLmlkKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1maWVsZCBbdHlwZV09XCJlbnRyeS50aXRsZS50eXBlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZT1cImxpc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZmllbGRdPVwiZW50cnkudGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcmVjb3JkXT1cImVudHJ5LnJlY29yZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Njcm0tZmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhICpuZ0lmPVwiZW50cnkucmVjb3JkLm1vZHVsZSA9PT0gJ2F1ZGl0J1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1maWVsZCBbdHlwZV09XCJlbnRyeS50aXRsZS50eXBlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZT1cImxpc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZmllbGRdPVwiZW50cnkudGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcmVjb3JkXT1cImVudHJ5LnJlY29yZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Njcm0tZmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImVudHJ5LmRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjYXJkLXRleHQgaGlzdG9yeS10aW1lbGluZS1lbnRyeS1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtYnJlYWtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tZmllbGQgW3R5cGVdPVwiZW50cnkuZGVzY3JpcHRpb24udHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9XCJkZXRhaWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZmllbGRdPVwiZW50cnkuZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcmVjb3JkXT1cImVudHJ5LnJlY29yZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Njcm0tZmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtdGV4dCBoaXN0b3J5LXRpbWVsaW5lLWVudHJ5LXVzZXIgdGV4dC11cHBlcmNhc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJ0ZXh0LWJyZWFrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWZpZWxkIFt0eXBlXT1cImVudHJ5LnVzZXIudHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9XCJsaXN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ZpZWxkXT1cImVudHJ5LnVzZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcmVjb3JkXT1cImVudHJ5LnJlY29yZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Njcm0tZmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtdGV4dCB0ZXh0LWJyZWFrIGhpc3RvcnktdGltZWxpbmUtZW50cnktZGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImZvbnQtaXRhbGljXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWZpZWxkIFt0eXBlXT1cImVudHJ5LmRhdGUudHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9XCJsaXN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ZpZWxkXT1cImVudHJ5LmRhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcmVjb3JkXT1cImVudHJ5LnJlY29yZFwiPjwvc2NybS1maWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiIWFkYXB0ZXIuaW5pdGlhbGl6aW5nKCkgJiYgIWFkYXB0ZXIuYWxsTG9hZGVkKClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJyZWNvcmQtdGhyZWFkLWxvYWQtbW9yZSBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBmbGV4LWdyb3ctMVwiPlxuICAgICAgICAgICAgICAgICAgICA8c2NybS1idXR0b24gW2NvbmZpZ109XCJnZXRMb2FkTW9yZUJ1dHRvbigpXCI+PC9zY3JtLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9zY3JtLXdpZGdldC1wYW5lbD5cbiJdfQ==