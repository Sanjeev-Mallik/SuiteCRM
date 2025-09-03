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
import { of } from 'rxjs';
import { isTrue } from '../../common/utils/value-utils';
import { map, shareReplay } from 'rxjs/operators';
import { LanguageStore } from '../../store/language/language.store';
import { emptyObject } from "../../common/utils/object-utils";
import * as i0 from "@angular/core";
import * as i1 from "../../store/language/language.store";
import * as i2 from "@angular/common";
import * as i3 from "../panel/panel.component";
import * as i4 from "@ng-bootstrap/ng-bootstrap";
import * as i5 from "../field-layout/field-layout.component";
import * as i6 from "../../pipes/toObservable/toObservable.pipe";
const _c0 = [[["", "top-right-placement", ""]]];
const _c1 = ["[top-right-placement]"];
function RecordContentComponent_ng_container_0_div_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8)(1, "scrm-panel", 9);
    i0.ɵɵpipe(2, "toObservable");
    i0.ɵɵelementStart(3, "div", 10);
    i0.ɵɵelement(4, "scrm-field-layout", 11);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const panel_r1 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("title", panel_r1.label)("isCollapsed$", i0.ɵɵpipeBind1(2, 6, panel_r1.isCollapsed));
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("panel-", panel_r1.key, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("dataSource", ctx_r1.getLayoutDataSource(panel_r1));
} }
function RecordContentComponent_ng_container_0_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtemplate(1, RecordContentComponent_ng_container_0_div_1_div_1_div_1_Template, 5, 8, "div", 7);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const panel_r1 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(2, 1, panel_r1.display$));
} }
function RecordContentComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtemplate(1, RecordContentComponent_ng_container_0_div_1_div_1_Template, 3, 3, "div", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.panels);
} }
function RecordContentComponent_ng_container_0_div_2_ng_container_4_ng_container_1_li_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "scrm-field-layout", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const panel_r4 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate1("tab-", panel_r4.key, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("dataSource", ctx_r1.getLayoutDataSource(panel_r4));
} }
function RecordContentComponent_ng_container_0_div_2_ng_container_4_ng_container_1_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 18)(1, "a", 19);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, RecordContentComponent_ng_container_0_div_2_ng_container_4_ng_container_1_li_1_ng_template_3_Template, 2, 4, "ng-template", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    const panel_r4 = ctx_r4.$implicit;
    const i_r6 = ctx_r4.index;
    i0.ɵɵproperty("ngbNavItem", i_r6 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(panel_r4.label);
} }
function RecordContentComponent_ng_container_0_div_2_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RecordContentComponent_ng_container_0_div_2_ng_container_4_ng_container_1_li_1_Template, 4, 2, "li", 17);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const panelDisplay_r7 = ctx.ngIf;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !!panelDisplay_r7);
} }
function RecordContentComponent_ng_container_0_div_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RecordContentComponent_ng_container_0_div_2_ng_container_4_ng_container_1_Template, 2, 1, "ng-container", 1);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const panel_r4 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(2, 1, panel_r4.display$));
} }
function RecordContentComponent_ng_container_0_div_2_ng_container_7_ng_container_1_div_1_ng_container_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8)(1, "scrm-panel", 9);
    i0.ɵɵpipe(2, "toObservable");
    i0.ɵɵelementStart(3, "div", 10);
    i0.ɵɵelement(4, "scrm-field-layout", 11);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const panel_r8 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("title", panel_r8.label)("isCollapsed$", i0.ɵɵpipeBind1(2, 6, panel_r8.isCollapsed));
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("panel-", panel_r8.key, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("dataSource", ctx_r1.getLayoutDataSource(panel_r8));
} }
function RecordContentComponent_ng_container_0_div_2_ng_container_7_ng_container_1_div_1_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵtemplate(1, RecordContentComponent_ng_container_0_div_2_ng_container_7_ng_container_1_div_1_ng_container_1_div_1_div_1_Template, 5, 8, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const j_r9 = i0.ɵɵnextContext(3).index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", j_r9 == ctx_r1.active - 1);
} }
function RecordContentComponent_ng_container_0_div_2_ng_container_7_ng_container_1_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RecordContentComponent_ng_container_0_div_2_ng_container_7_ng_container_1_div_1_ng_container_1_div_1_Template, 2, 1, "div", 21);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const panelDisplay_r10 = ctx.ngIf;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !!panelDisplay_r10);
} }
function RecordContentComponent_ng_container_0_div_2_ng_container_7_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, RecordContentComponent_ng_container_0_div_2_ng_container_7_ng_container_1_div_1_ng_container_1_Template, 2, 1, "ng-container", 1);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const panel_r8 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(2, 1, panel_r8.display$));
} }
function RecordContentComponent_ng_container_0_div_2_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RecordContentComponent_ng_container_0_div_2_ng_container_7_ng_container_1_div_1_Template, 3, 3, "div", 15);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const panel_r11 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", panel_r11.subPanels);
} }
function RecordContentComponent_ng_container_0_div_2_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RecordContentComponent_ng_container_0_div_2_ng_container_7_ng_container_1_Template, 2, 1, "ng-container", 15);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.panels);
} }
function RecordContentComponent_ng_container_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12)(1, "div", 13)(2, "ul", 14, 0);
    i0.ɵɵtwoWayListener("activeIdChange", function RecordContentComponent_ng_container_0_div_2_Template_ul_activeIdChange_2_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.active, $event) || (ctx_r1.active = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵtemplate(4, RecordContentComponent_ng_container_0_div_2_ng_container_4_Template, 3, 3, "ng-container", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵprojection(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "div", 16);
    i0.ɵɵtemplate(7, RecordContentComponent_ng_container_0_div_2_ng_container_7_Template, 2, 1, "ng-container", 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const nav_r12 = i0.ɵɵreference(3);
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("activeId", ctx_r1.active);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.panels);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngbNavOutlet", nav_r12);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.panelsInPrevTab && ctx_r1.panelsInPrevTab.length);
} }
function RecordContentComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RecordContentComponent_ng_container_0_div_1_Template, 2, 1, "div", 2)(2, RecordContentComponent_ng_container_0_div_2_Template, 8, 4, "div", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.config && ctx_r1.config.layout === "panels");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.config && ctx_r1.config.layout === "tabs");
} }
export class RecordContentComponent {
    constructor(language) {
        this.language = language;
        this.config = {};
        this.panelsInPrevTab = [];
        this.active = 1;
        this.subs = [];
    }
    ngOnInit() {
        this.subs.push(this.dataSource.getDisplayConfig().subscribe(config => {
            this.config = { ...config };
        }));
        this.subs.push(this.dataSource.getPanels().subscribe(panels => {
            this.panels = [...panels];
            if (this?.config?.layout === 'panels') {
                this.updatePanelCollapseState();
            }
            else {
                this.updatePanelsInTabs();
            }
        }));
        this.subs.push(this.dataSource.getRecord().subscribe(record => {
            this.record = { ...record };
            this.fields = record.fields;
        }));
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    updatePanelsInTabs() {
        let tempPanels = [];
        let prevTabKey = '';
        const panelsMap = this.buildPanelMap();
        const tabDefs = this.mapTabDefs();
        if (emptyObject(tabDefs)) {
            return;
        }
        Object.keys(tabDefs).forEach(tabDefKey => {
            const tabDef = tabDefs[tabDefKey];
            if (isTrue(tabDef.newTab)) {
                tempPanels = [...tempPanels, panelsMap[tabDefKey]];
                prevTabKey = tabDefKey;
            }
            else {
                const prevTab = tabDefs[prevTabKey];
                const panel = panelsMap[prevTabKey];
                if (!this.panelsInPrevTab.includes(panel)) {
                    this.panelsInPrevTab.push(panel);
                }
                const panelToAdd = panelsMap[tabDefKey];
                if (isTrue(prevTab?.newTab) && this.panelsInPrevTab.length > 0) {
                    this.addToPrevTab(panelToAdd);
                }
            }
        });
        this.panels = tempPanels;
    }
    addToPrevTab(panelToAdd) {
        const index = this.panelsInPrevTab.length - 1;
        if (!(this.panelsInPrevTab[index]?.subPanels ?? null)) {
            this.panelsInPrevTab[index].subPanels = [];
        }
        this.panelsInPrevTab[index].subPanels.push(panelToAdd);
    }
    updatePanelCollapseState() {
        const panelMap = this.buildPanelMap();
        this.panels.forEach(panel => {
            const panelKey = panel.key.toUpperCase();
            if (panelMap[panelKey]) {
                panel.isCollapsed = panelMap[panelKey].isCollapsed;
            }
        });
    }
    buildPanelMap() {
        const panelMap = {};
        this.panels.forEach(panel => {
            let isCollapsed = false;
            panel.label = panel?.label?.toUpperCase() ?? '';
            const panelKey = panel?.key?.toUpperCase() ?? '';
            if (panel.meta?.panelDefault === 'collapsed') {
                isCollapsed = true;
            }
            panel.isCollapsed = isCollapsed;
            panelMap[panelKey] = panel;
        });
        return panelMap;
    }
    mapTabDefs() {
        const tabDefs = {};
        Object.keys(this?.config?.tabDefs ?? {}).forEach(key => {
            tabDefs[key.toUpperCase()] = this?.config?.tabDefs[key];
        });
        return tabDefs;
    }
    getLayoutDataSource(panel) {
        return {
            inlineEdit: true,
            getConfig: () => this.dataSource.getDisplayConfig().pipe(map(config => ({
                mode: config.mode,
                maxColumns: config.maxColumns,
            }))),
            getLayout: () => of(panel).pipe(shareReplay(1)),
            getFields: () => this.dataSource.getRecord().pipe(map(record => (record.fields))),
            getRecord: () => this.dataSource.getRecord(),
            getEditAction: () => this.dataSource.getEditAction()
        };
    }
    static { this.ɵfac = function RecordContentComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RecordContentComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RecordContentComponent, selectors: [["scrm-record-content"]], inputs: { dataSource: "dataSource" }, ngContentSelectors: _c1, decls: 1, vars: 1, consts: [["nav", "ngbNav"], [4, "ngIf"], ["class", "record-content panel-layout container-fluid pl-0 pr-0", 4, "ngIf"], ["class", "record-content tabs-layout container-fluid pl-0 pr-0", 4, "ngIf"], [1, "record-content", "panel-layout", "container-fluid", "pl-0", "pr-0"], ["class", "row no-gutters mb-3", 4, "ngFor", "ngForOf"], [1, "row", "no-gutters", "mb-3"], ["class", "col", 4, "ngIf"], [1, "col"], ["mode", "collapsible", 3, "title", "isCollapsed$"], ["panel-body", ""], [3, "dataSource"], [1, "record-content", "tabs-layout", "container-fluid", "pl-0", "pr-0"], [1, "d-flex", "flex-column", "flex-column-reverse", "flex-sm-row", "justify-content-between"], ["ngbNav", "", 1, "nav-tabs", 3, "activeIdChange", "activeId"], [4, "ngFor", "ngForOf"], [1, "p-2", "pt-3", "rounded-right", "rounded-bottom", 3, "ngbNavOutlet"], ["class", "tab", 3, "ngbNavItem", 4, "ngIf"], [1, "tab", 3, "ngbNavItem"], ["ngbNavLink", "", 1, "tab-link", "d-flex", "align-items-end"], ["ngbNavContent", ""], ["class", "row no-gutters mt-3", 4, "ngIf"], [1, "row", "no-gutters", "mt-3"]], template: function RecordContentComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵtemplate(0, RecordContentComponent_ng_container_0_Template, 3, 2, "ng-container", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.dataSource);
        } }, dependencies: [i2.NgForOf, i2.NgIf, i3.PanelComponent, i4.NgbNavContent, i4.NgbNav, i4.NgbNavItem, i4.NgbNavItemRole, i4.NgbNavLink, i4.NgbNavLinkBase, i4.NgbNavOutlet, i5.FieldLayoutComponent, i2.AsyncPipe, i6.ToObservablePipe], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordContentComponent, [{
        type: Component,
        args: [{ selector: 'scrm-record-content', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container *ngIf=\"dataSource\">\n    <div *ngIf=\"config && config.layout === 'panels'\" class=\"record-content panel-layout container-fluid pl-0 pr-0\">\n        <div class=\"row no-gutters mb-3\" *ngFor=\"let panel of panels\">\n            <div class=\"col\" *ngIf=\"panel.display$ | async\">\n                <scrm-panel [title]=\"panel.label\" [isCollapsed$]=\"(panel.isCollapsed | toObservable)\" mode=\"collapsible\">\n                    <div panel-body class=\"panel-{{panel.key}}\">\n                        <scrm-field-layout [dataSource]=\"getLayoutDataSource(panel)\"></scrm-field-layout>\n                    </div>\n                </scrm-panel>\n            </div>\n        </div>\n\n    </div>\n\n    <div *ngIf=\"config && config.layout === 'tabs'\" class=\"record-content tabs-layout container-fluid pl-0 pr-0\">\n        <div class=\"d-flex flex-column flex-column-reverse flex-sm-row justify-content-between\">\n            <ul ngbNav #nav=\"ngbNav\" class=\"nav-tabs\" [(activeId)]=\"active\">\n                <ng-container *ngFor=\"let panel of panels; index as i;\">\n                    <ng-container *ngIf=\"(panel.display$ | async) as panelDisplay\">\n                        <li class=\"tab\" [ngbNavItem]=\"i+1\" *ngIf=\"!!panelDisplay\">\n                            <a class=\"tab-link d-flex align-items-end\" ngbNavLink>{{panel.label}}</a>\n                            <ng-template ngbNavContent>\n                                <div class=\"tab-{{panel.key}}\">\n                                    <scrm-field-layout [dataSource]=\"getLayoutDataSource(panel)\"></scrm-field-layout>\n                                </div>\n                            </ng-template>\n                        </li>\n                    </ng-container>\n                </ng-container>\n            </ul>\n            <ng-content select=\"[top-right-placement]\"></ng-content>\n        </div>\n\n        <div [ngbNavOutlet]=\"nav\" class=\"p-2 pt-3 rounded-right rounded-bottom\"></div>\n\n\n        <ng-container *ngIf=\"panelsInPrevTab && panelsInPrevTab.length\">\n            <ng-container *ngFor=\"let panel of panels; let j = index;\">\n                <div *ngFor=\"let panel of panel.subPanels;\">\n                    <ng-container *ngIf=\"(panel.display$ | async) as panelDisplay\">\n                        <div class=\"row no-gutters mt-3\" *ngIf=\"!!panelDisplay\">\n                            <div class=\"col\" *ngIf=\"j==active-1\">\n                                <scrm-panel [title]=\"panel.label\" [isCollapsed$]=\"(panel.isCollapsed | toObservable)\" mode=\"collapsible\">\n                                    <div panel-body class=\"panel-{{panel.key}}\">\n                                        <scrm-field-layout [dataSource]=\"getLayoutDataSource(panel)\"></scrm-field-layout>\n                                    </div>\n                                </scrm-panel>\n                            </div>\n                        </div>\n                    </ng-container>\n                </div>\n            </ng-container>\n        </ng-container>\n\n    </div>\n\n</ng-container>\n" }]
    }], () => [{ type: i1.LanguageStore }], { dataSource: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RecordContentComponent, { className: "RecordContentComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLWNvbnRlbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvcmVjb3JkLWNvbnRlbnQvcmVjb3JkLWNvbnRlbnQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvcmVjb3JkLWNvbnRlbnQvcmVjb3JkLWNvbnRlbnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUNsRSxPQUFPLEVBQWEsRUFBRSxFQUFlLE1BQU0sTUFBTSxDQUFDO0FBSWxELE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RCxPQUFPLEVBQUMsR0FBRyxFQUFFLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBR2hELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUNsRSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0saUNBQWlDLENBQUM7Ozs7Ozs7Ozs7O0lDTDVDLEFBREosOEJBQWdELG9CQUM2RDs7SUFDckcsK0JBQTRDO0lBQ3hDLHdDQUFpRjtJQUc3RixBQURJLEFBREksaUJBQU0sRUFDRyxFQUNYOzs7O0lBTFUsY0FBcUI7SUFBQyxBQUF0QixzQ0FBcUIsNERBQW9EO0lBQ2pFLGVBQTJCO0lBQTNCLHFEQUEyQjtJQUNwQixjQUF5QztJQUF6QyxpRUFBeUM7OztJQUo1RSw4QkFBOEQ7SUFDMUQsa0dBQWdEOztJQU9wRCxpQkFBTTs7O0lBUGdCLGNBQTRCO0lBQTVCLDhEQUE0Qjs7O0lBRnRELDhCQUFnSDtJQUM1Ryw0RkFBOEQ7SUFVbEUsaUJBQU07OztJQVZpRCxjQUFTO0lBQVQsdUNBQVM7OztJQW9CcEMsMkJBQStCO0lBQzNCLHdDQUFpRjtJQUNyRixpQkFBTTs7OztJQUZELG1EQUF5QjtJQUNQLGNBQXlDO0lBQXpDLGlFQUF5Qzs7O0lBSHBFLEFBREosOEJBQTBELFlBQ0E7SUFBQSxZQUFlO0lBQUEsaUJBQUk7SUFDekUsZ0pBQTJCO0lBSy9CLGlCQUFLOzs7OztJQVBXLHFDQUFrQjtJQUN3QixlQUFlO0lBQWYsb0NBQWU7OztJQUY3RSw2QkFBK0Q7SUFDM0QseUhBQTBEOzs7O0lBQXRCLGNBQW9CO0lBQXBCLHdDQUFvQjs7O0lBRmhFLDZCQUF3RDtJQUNwRCw2SEFBK0Q7Ozs7O0lBQWhELGNBQStCO0lBQS9CLDhEQUErQjs7O0lBd0JsQyxBQURKLDhCQUFxQyxvQkFDd0U7O0lBQ3JHLCtCQUE0QztJQUN4Qyx3Q0FBaUY7SUFHN0YsQUFESSxBQURJLGlCQUFNLEVBQ0csRUFDWDs7OztJQUxVLGNBQXFCO0lBQUMsQUFBdEIsc0NBQXFCLDREQUFvRDtJQUNqRSxlQUEyQjtJQUEzQixxREFBMkI7SUFDcEIsY0FBeUM7SUFBekMsaUVBQXlDOzs7SUFKNUUsK0JBQXdEO0lBQ3BELHFKQUFxQztJQU96QyxpQkFBTTs7OztJQVBnQixjQUFpQjtJQUFqQixnREFBaUI7OztJQUYzQyw2QkFBK0Q7SUFDM0QsZ0pBQXdEOzs7O0lBQXRCLGNBQW9CO0lBQXBCLHlDQUFvQjs7O0lBRjlELDJCQUE0QztJQUN4QyxrSkFBK0Q7O0lBV25FLGlCQUFNOzs7SUFYYSxjQUErQjtJQUEvQiw4REFBK0I7OztJQUZ0RCw2QkFBMkQ7SUFDdkQsMkhBQTRDOzs7O0lBQXJCLGNBQW1CO0lBQW5CLDZDQUFtQjs7O0lBRmxELDZCQUFnRTtJQUM1RCw4SEFBMkQ7Ozs7SUFBM0IsY0FBVztJQUFYLHVDQUFXOzs7O0lBckIzQyxBQURKLEFBREosK0JBQTZHLGNBQ2pCLGdCQUNwQjtJQUF0QixpVEFBcUI7SUFDM0QsK0dBQXdEO0lBWTVELGlCQUFLO0lBQ0wsa0JBQXdEO0lBQzVELGlCQUFNO0lBRU4sMEJBQThFO0lBRzlFLDhHQUFnRTtJQWtCcEUsaUJBQU07Ozs7SUF0QzRDLGVBQXFCO0lBQXJCLDhDQUFxQjtJQUMzQixlQUFXO0lBQVgsdUNBQVc7SUFnQjlDLGVBQW9CO0lBQXBCLHNDQUFvQjtJQUdWLGNBQStDO0lBQS9DLDhFQUErQzs7O0lBcEN0RSw2QkFBaUM7SUFjN0IsQUFiQSxzRkFBZ0gseUVBYUg7Ozs7SUFidkcsY0FBMEM7SUFBMUMseUVBQTBDO0lBYTFDLGNBQXdDO0lBQXhDLHVFQUF3Qzs7QURFbEQsTUFBTSxPQUFPLHNCQUFzQjtJQVkvQixZQUNjLFFBQXVCO1FBQXZCLGFBQVEsR0FBUixRQUFRLENBQWU7UUFUckMsV0FBTSxHQUF3QixFQUF5QixDQUFDO1FBRXhELG9CQUFlLEdBQVksRUFBRSxDQUFDO1FBQzlCLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFHSCxTQUFJLEdBQW1CLEVBQUUsQ0FBQztJQUkvQixDQUFDO0lBRUosUUFBUTtRQUNKLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDakUsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFDLEdBQUcsTUFBTSxFQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNKLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzFELElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1lBQzFCLElBQUksSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEtBQUssUUFBUSxFQUFFLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1lBQ3BDLENBQUM7aUJBQU0sQ0FBQztnQkFDSixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUM5QixDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNKLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzFELElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBQyxHQUFHLE1BQU0sRUFBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBR1IsQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxrQkFBa0I7UUFDZCxJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBRXBCLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUV2QyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFFbEMsSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUMsQ0FBQztZQUN0QixPQUFPO1FBQ1gsQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3JDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUVsQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztnQkFDeEIsVUFBVSxHQUFHLENBQUMsR0FBRyxVQUFVLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25ELFVBQVUsR0FBRyxTQUFTLENBQUM7WUFDM0IsQ0FBQztpQkFBTSxDQUFDO2dCQUNKLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDcEMsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztvQkFDeEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3JDLENBQUM7Z0JBRUQsTUFBTSxVQUFVLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN4QyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7b0JBQzdELElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ2xDLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQztJQUU3QixDQUFDO0lBRUQsWUFBWSxDQUFDLFVBQWU7UUFFeEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRTlDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLEVBQUUsU0FBUyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDcEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQy9DLENBQUM7UUFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFFM0QsQ0FBQztJQUVELHdCQUF3QjtRQUNwQixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDeEIsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN6QyxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO2dCQUNyQixLQUFLLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUM7WUFDdkQsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGFBQWE7UUFDVCxNQUFNLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFFcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDeEIsSUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUM7WUFDaEQsTUFBTSxRQUFRLEdBQUcsS0FBSyxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUM7WUFDakQsSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFLFlBQVksS0FBSyxXQUFXLEVBQUUsQ0FBQztnQkFDM0MsV0FBVyxHQUFHLElBQUksQ0FBQztZQUN2QixDQUFDO1lBQ0QsS0FBSyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7WUFDaEMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxVQUFVO1FBQ04sTUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBRW5CLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1RCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxLQUFZO1FBQzVCLE9BQU87WUFDSCxVQUFVLEVBQUUsSUFBSTtZQUNoQixTQUFTLEVBQUUsR0FBa0MsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDbkcsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO2dCQUNqQixVQUFVLEVBQUUsTUFBTSxDQUFDLFVBQVU7YUFDaEMsQ0FBQyxDQUFDLENBQUM7WUFDSixTQUFTLEVBQUUsR0FBc0IsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xFLFNBQVMsRUFBRSxHQUF5QixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN2RyxTQUFTLEVBQUUsR0FBdUIsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFO1lBQ2hFLGFBQWEsRUFBRSxHQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTtTQUNwQyxDQUFDO0lBQy9CLENBQUM7dUhBeklRLHNCQUFzQjtvRUFBdEIsc0JBQXNCOztZQ2hCbkMseUZBQWlDOztZQUFsQixxQ0FBZ0I7OztpRkRnQmxCLHNCQUFzQjtjQUxsQyxTQUFTOzJCQUNJLHFCQUFxQjs4Q0FNdEIsVUFBVTtrQkFBbEIsS0FBSzs7a0ZBRkcsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgb2YsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0ZpZWxkTWFwfSBmcm9tICcuLi8uLi9jb21tb24vcmVjb3JkL2ZpZWxkLm1vZGVsJztcbmltcG9ydCB7UGFuZWx9IGZyb20gJy4uLy4uL2NvbW1vbi9tZXRhZGF0YS9tZXRhZGF0YS5tb2RlbCc7XG5pbXBvcnQge1JlY29yZH0gZnJvbSAnLi4vLi4vY29tbW9uL3JlY29yZC9yZWNvcmQubW9kZWwnO1xuaW1wb3J0IHtpc1RydWV9IGZyb20gJy4uLy4uL2NvbW1vbi91dGlscy92YWx1ZS11dGlscyc7XG5pbXBvcnQge21hcCwgc2hhcmVSZXBsYXl9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7UmVjb3JkQ29udGVudENvbmZpZywgUmVjb3JkQ29udGVudERhdGFTb3VyY2V9IGZyb20gJy4vcmVjb3JkLWNvbnRlbnQubW9kZWwnO1xuaW1wb3J0IHtGaWVsZExheW91dENvbmZpZywgRmllbGRMYXlvdXREYXRhU291cmNlfSBmcm9tICcuLi9maWVsZC1sYXlvdXQvZmllbGQtbGF5b3V0Lm1vZGVsJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZX0gZnJvbSAnLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtlbXB0eU9iamVjdH0gZnJvbSBcIi4uLy4uL2NvbW1vbi91dGlscy9vYmplY3QtdXRpbHNcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLXJlY29yZC1jb250ZW50JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcmVjb3JkLWNvbnRlbnQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlczogW10sXG59KVxuZXhwb3J0IGNsYXNzIFJlY29yZENvbnRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBASW5wdXQoKSBkYXRhU291cmNlOiBSZWNvcmRDb250ZW50RGF0YVNvdXJjZTtcblxuICAgIGNvbmZpZzogUmVjb3JkQ29udGVudENvbmZpZyA9IHt9IGFzIFJlY29yZENvbnRlbnRDb25maWc7XG4gICAgcGFuZWxzOiBQYW5lbFtdO1xuICAgIHBhbmVsc0luUHJldlRhYjogUGFuZWxbXSA9IFtdO1xuICAgIGFjdGl2ZSA9IDE7XG4gICAgcHJvdGVjdGVkIHJlY29yZDogUmVjb3JkO1xuICAgIHByb3RlY3RlZCBmaWVsZHM6IEZpZWxkTWFwO1xuICAgIHByaXZhdGUgc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmVcbiAgICApIHt9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5kYXRhU291cmNlLmdldERpc3BsYXlDb25maWcoKS5zdWJzY3JpYmUoY29uZmlnID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnID0gey4uLmNvbmZpZ307XG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5kYXRhU291cmNlLmdldFBhbmVscygpLnN1YnNjcmliZShwYW5lbHMgPT4ge1xuICAgICAgICAgICAgdGhpcy5wYW5lbHMgPSBbLi4ucGFuZWxzXTtcbiAgICAgICAgICAgIGlmICh0aGlzPy5jb25maWc/LmxheW91dCA9PT0gJ3BhbmVscycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVBhbmVsQ29sbGFwc2VTdGF0ZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVBhbmVsc0luVGFicygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMuZGF0YVNvdXJjZS5nZXRSZWNvcmQoKS5zdWJzY3JpYmUocmVjb3JkID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVjb3JkID0gey4uLnJlY29yZH07XG4gICAgICAgICAgICB0aGlzLmZpZWxkcyA9IHJlY29yZC5maWVsZHM7XG4gICAgICAgIH0pKTtcblxuXG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3Vicy5mb3JFYWNoKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XG4gICAgfVxuXG4gICAgdXBkYXRlUGFuZWxzSW5UYWJzKCk6IHZvaWQge1xuICAgICAgICBsZXQgdGVtcFBhbmVscyA9IFtdO1xuICAgICAgICBsZXQgcHJldlRhYktleSA9ICcnO1xuXG4gICAgICAgIGNvbnN0IHBhbmVsc01hcCA9IHRoaXMuYnVpbGRQYW5lbE1hcCgpO1xuXG4gICAgICAgIGNvbnN0IHRhYkRlZnMgPSB0aGlzLm1hcFRhYkRlZnMoKTtcblxuICAgICAgICBpZiAoZW1wdHlPYmplY3QodGFiRGVmcykpe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmtleXModGFiRGVmcykuZm9yRWFjaCh0YWJEZWZLZXkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFiRGVmID0gdGFiRGVmc1t0YWJEZWZLZXldO1xuXG4gICAgICAgICAgICBpZiAoaXNUcnVlKHRhYkRlZi5uZXdUYWIpKSB7XG4gICAgICAgICAgICAgICAgdGVtcFBhbmVscyA9IFsuLi50ZW1wUGFuZWxzLCBwYW5lbHNNYXBbdGFiRGVmS2V5XV07XG4gICAgICAgICAgICAgICAgcHJldlRhYktleSA9IHRhYkRlZktleTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJldlRhYiA9IHRhYkRlZnNbcHJldlRhYktleV07XG4gICAgICAgICAgICAgICAgY29uc3QgcGFuZWwgPSBwYW5lbHNNYXBbcHJldlRhYktleV07XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnBhbmVsc0luUHJldlRhYi5pbmNsdWRlcyhwYW5lbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYW5lbHNJblByZXZUYWIucHVzaChwYW5lbCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgcGFuZWxUb0FkZCA9IHBhbmVsc01hcFt0YWJEZWZLZXldO1xuICAgICAgICAgICAgICAgIGlmIChpc1RydWUocHJldlRhYj8ubmV3VGFiKSAmJiB0aGlzLnBhbmVsc0luUHJldlRhYi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkVG9QcmV2VGFiKHBhbmVsVG9BZGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wYW5lbHMgPSB0ZW1wUGFuZWxzO1xuXG4gICAgfVxuXG4gICAgYWRkVG9QcmV2VGFiKHBhbmVsVG9BZGQ6IGFueSk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5wYW5lbHNJblByZXZUYWIubGVuZ3RoIC0gMTtcblxuICAgICAgICBpZiAoISh0aGlzLnBhbmVsc0luUHJldlRhYltpbmRleF0/LnN1YlBhbmVscyA/PyBudWxsKSkge1xuICAgICAgICAgICAgdGhpcy5wYW5lbHNJblByZXZUYWJbaW5kZXhdLnN1YlBhbmVscyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGFuZWxzSW5QcmV2VGFiW2luZGV4XS5zdWJQYW5lbHMucHVzaChwYW5lbFRvQWRkKTtcblxuICAgIH1cblxuICAgIHVwZGF0ZVBhbmVsQ29sbGFwc2VTdGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcGFuZWxNYXAgPSB0aGlzLmJ1aWxkUGFuZWxNYXAoKTtcblxuICAgICAgICB0aGlzLnBhbmVscy5mb3JFYWNoKHBhbmVsID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhbmVsS2V5ID0gcGFuZWwua2V5LnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICBpZiAocGFuZWxNYXBbcGFuZWxLZXldKSB7XG4gICAgICAgICAgICAgICAgcGFuZWwuaXNDb2xsYXBzZWQgPSBwYW5lbE1hcFtwYW5lbEtleV0uaXNDb2xsYXBzZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJ1aWxkUGFuZWxNYXAoKTogYW55IHtcbiAgICAgICAgY29uc3QgcGFuZWxNYXAgPSB7fTtcblxuICAgICAgICB0aGlzLnBhbmVscy5mb3JFYWNoKHBhbmVsID0+IHtcbiAgICAgICAgICAgIGxldCBpc0NvbGxhcHNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgcGFuZWwubGFiZWwgPSBwYW5lbD8ubGFiZWw/LnRvVXBwZXJDYXNlKCkgPz8gJyc7XG4gICAgICAgICAgICBjb25zdCBwYW5lbEtleSA9IHBhbmVsPy5rZXk/LnRvVXBwZXJDYXNlKCkgPz8gJyc7XG4gICAgICAgICAgICBpZiAocGFuZWwubWV0YT8ucGFuZWxEZWZhdWx0ID09PSAnY29sbGFwc2VkJykge1xuICAgICAgICAgICAgICAgIGlzQ29sbGFwc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhbmVsLmlzQ29sbGFwc2VkID0gaXNDb2xsYXBzZWQ7XG4gICAgICAgICAgICBwYW5lbE1hcFtwYW5lbEtleV0gPSBwYW5lbDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHBhbmVsTWFwO1xuICAgIH1cblxuICAgIG1hcFRhYkRlZnMoKTogYW55IHtcbiAgICAgICAgY29uc3QgdGFiRGVmcyA9IHt9O1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXM/LmNvbmZpZz8udGFiRGVmcyA/PyB7fSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgdGFiRGVmc1trZXkudG9VcHBlckNhc2UoKV0gPSB0aGlzPy5jb25maWc/LnRhYkRlZnNba2V5XTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRhYkRlZnM7XG4gICAgfVxuXG4gICAgZ2V0TGF5b3V0RGF0YVNvdXJjZShwYW5lbDogUGFuZWwpOiBGaWVsZExheW91dERhdGFTb3VyY2Uge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5saW5lRWRpdDogdHJ1ZSxcbiAgICAgICAgICAgIGdldENvbmZpZzogKCk6IE9ic2VydmFibGU8RmllbGRMYXlvdXRDb25maWc+ID0+IHRoaXMuZGF0YVNvdXJjZS5nZXREaXNwbGF5Q29uZmlnKCkucGlwZShtYXAoY29uZmlnID0+ICh7XG4gICAgICAgICAgICAgICAgbW9kZTogY29uZmlnLm1vZGUsXG4gICAgICAgICAgICAgICAgbWF4Q29sdW1uczogY29uZmlnLm1heENvbHVtbnMsXG4gICAgICAgICAgICB9KSkpLFxuICAgICAgICAgICAgZ2V0TGF5b3V0OiAoKTogT2JzZXJ2YWJsZTxQYW5lbD4gPT4gb2YocGFuZWwpLnBpcGUoc2hhcmVSZXBsYXkoMSkpLFxuICAgICAgICAgICAgZ2V0RmllbGRzOiAoKTogT2JzZXJ2YWJsZTxGaWVsZE1hcD4gPT4gdGhpcy5kYXRhU291cmNlLmdldFJlY29yZCgpLnBpcGUobWFwKHJlY29yZCA9PiAocmVjb3JkLmZpZWxkcykpKSxcbiAgICAgICAgICAgIGdldFJlY29yZDogKCk6IE9ic2VydmFibGU8UmVjb3JkPiA9PiB0aGlzLmRhdGFTb3VyY2UuZ2V0UmVjb3JkKCksXG4gICAgICAgICAgICBnZXRFZGl0QWN0aW9uOiAoKTogdm9pZCA9PiB0aGlzLmRhdGFTb3VyY2UuZ2V0RWRpdEFjdGlvbigpXG4gICAgICAgIH0gYXMgRmllbGRMYXlvdXREYXRhU291cmNlO1xuICAgIH1cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJkYXRhU291cmNlXCI+XG4gICAgPGRpdiAqbmdJZj1cImNvbmZpZyAmJiBjb25maWcubGF5b3V0ID09PSAncGFuZWxzJ1wiIGNsYXNzPVwicmVjb3JkLWNvbnRlbnQgcGFuZWwtbGF5b3V0IGNvbnRhaW5lci1mbHVpZCBwbC0wIHByLTBcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBuby1ndXR0ZXJzIG1iLTNcIiAqbmdGb3I9XCJsZXQgcGFuZWwgb2YgcGFuZWxzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCIgKm5nSWY9XCJwYW5lbC5kaXNwbGF5JCB8IGFzeW5jXCI+XG4gICAgICAgICAgICAgICAgPHNjcm0tcGFuZWwgW3RpdGxlXT1cInBhbmVsLmxhYmVsXCIgW2lzQ29sbGFwc2VkJF09XCIocGFuZWwuaXNDb2xsYXBzZWQgfCB0b09ic2VydmFibGUpXCIgbW9kZT1cImNvbGxhcHNpYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgcGFuZWwtYm9keSBjbGFzcz1cInBhbmVsLXt7cGFuZWwua2V5fX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWZpZWxkLWxheW91dCBbZGF0YVNvdXJjZV09XCJnZXRMYXlvdXREYXRhU291cmNlKHBhbmVsKVwiPjwvc2NybS1maWVsZC1sYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2NybS1wYW5lbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiAqbmdJZj1cImNvbmZpZyAmJiBjb25maWcubGF5b3V0ID09PSAndGFicydcIiBjbGFzcz1cInJlY29yZC1jb250ZW50IHRhYnMtbGF5b3V0IGNvbnRhaW5lci1mbHVpZCBwbC0wIHByLTBcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBmbGV4LWNvbHVtbiBmbGV4LWNvbHVtbi1yZXZlcnNlIGZsZXgtc20tcm93IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8dWwgbmdiTmF2ICNuYXY9XCJuZ2JOYXZcIiBjbGFzcz1cIm5hdi10YWJzXCIgWyhhY3RpdmVJZCldPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgcGFuZWwgb2YgcGFuZWxzOyBpbmRleCBhcyBpO1wiPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiKHBhbmVsLmRpc3BsYXkkIHwgYXN5bmMpIGFzIHBhbmVsRGlzcGxheVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwidGFiXCIgW25nYk5hdkl0ZW1dPVwiaSsxXCIgKm5nSWY9XCIhIXBhbmVsRGlzcGxheVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwidGFiLWxpbmsgZC1mbGV4IGFsaWduLWl0ZW1zLWVuZFwiIG5nYk5hdkxpbms+e3twYW5lbC5sYWJlbH19PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBuZ2JOYXZDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiLXt7cGFuZWwua2V5fX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWZpZWxkLWxheW91dCBbZGF0YVNvdXJjZV09XCJnZXRMYXlvdXREYXRhU291cmNlKHBhbmVsKVwiPjwvc2NybS1maWVsZC1sYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbdG9wLXJpZ2h0LXBsYWNlbWVudF1cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgW25nYk5hdk91dGxldF09XCJuYXZcIiBjbGFzcz1cInAtMiBwdC0zIHJvdW5kZWQtcmlnaHQgcm91bmRlZC1ib3R0b21cIj48L2Rpdj5cblxuXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJwYW5lbHNJblByZXZUYWIgJiYgcGFuZWxzSW5QcmV2VGFiLmxlbmd0aFwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgcGFuZWwgb2YgcGFuZWxzOyBsZXQgaiA9IGluZGV4O1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IHBhbmVsIG9mIHBhbmVsLnN1YlBhbmVscztcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIihwYW5lbC5kaXNwbGF5JCB8IGFzeW5jKSBhcyBwYW5lbERpc3BsYXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgbm8tZ3V0dGVycyBtdC0zXCIgKm5nSWY9XCIhIXBhbmVsRGlzcGxheVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIiAqbmdJZj1cImo9PWFjdGl2ZS0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLXBhbmVsIFt0aXRsZV09XCJwYW5lbC5sYWJlbFwiIFtpc0NvbGxhcHNlZCRdPVwiKHBhbmVsLmlzQ29sbGFwc2VkIHwgdG9PYnNlcnZhYmxlKVwiIG1vZGU9XCJjb2xsYXBzaWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBwYW5lbC1ib2R5IGNsYXNzPVwicGFuZWwte3twYW5lbC5rZXl9fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWZpZWxkLWxheW91dCBbZGF0YVNvdXJjZV09XCJnZXRMYXlvdXREYXRhU291cmNlKHBhbmVsKVwiPjwvc2NybS1maWVsZC1sYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zY3JtLXBhbmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPC9kaXY+XG5cbjwvbmctY29udGFpbmVyPlxuIl19