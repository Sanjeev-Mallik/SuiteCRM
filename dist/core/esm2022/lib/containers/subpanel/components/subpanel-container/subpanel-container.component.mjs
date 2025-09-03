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
import { Component, computed, Input, signal } from '@angular/core';
import { take } from 'rxjs/operators';
import { LanguageStore } from '../../../../store/language/language.store';
import { MaxColumnsCalculator } from '../../../../services/ui/max-columns-calculator/max-columns-calculator.service';
import { isTrue } from '../../../../common/utils/value-utils';
import { LocalStorageService } from "../../../../services/local-storage/local-storage.service";
import { UserPreferenceStore } from '../../../../store/user-preference/user-preference.store';
import { SystemConfigStore } from "../../../../store/system-config/system-config.store";
import { ScreenSizeObserverService } from "../../../../services/ui/screen-size-observer/screen-size-observer.service";
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/language/language.store";
import * as i2 from "../../../../services/ui/max-columns-calculator/max-columns-calculator.service";
import * as i3 from "../../../../services/local-storage/local-storage.service";
import * as i4 from "../../../../store/user-preference/user-preference.store";
import * as i5 from "../../../../store/system-config/system-config.store";
import * as i6 from "../../../../services/ui/screen-size-observer/screen-size-observer.service";
import * as i7 from "@angular/common";
import * as i8 from "@ng-bootstrap/ng-bootstrap";
import * as i9 from "../../../../components/image/image.component";
import * as i10 from "../subpanel/subpanel.component";
import * as i11 from "../../../../components/grid-widget/grid-widget.component";
import * as i12 from "../../../../components/label/label.component";
const _c0 = a0 => ({ "sub-panel-banner-button-active": a0 });
function SubpanelContainerComponent_div_0_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵlistener("click", function SubpanelContainerComponent_div_0_div_10_div_1_Template_div_click_0_listener() { const subpanelKey_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.showSubpanel(ctx_r1.subpanels[subpanelKey_r4].metadata.name, ctx_r1.subpanels[subpanelKey_r4])); });
    i0.ɵɵelement(1, "scrm-grid-widget", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const subpanelKey_r4 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c0, ctx_r1.subpanels[subpanelKey_r4].show === true));
    i0.ɵɵadvance();
    i0.ɵɵproperty("config", ctx_r1.getGridConfig(ctx_r1.subpanels[subpanelKey_r4]));
} }
function SubpanelContainerComponent_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵtemplate(1, SubpanelContainerComponent_div_0_div_10_div_1_Template, 2, 4, "div", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.headerSubpanels());
} }
function SubpanelContainerComponent_div_0_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-image", 22);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵproperty("image", "chevron-down");
    i0.ɵɵattribute("aria-expanded", false);
} }
function SubpanelContainerComponent_div_0_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-image", 22);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵproperty("image", "chevron-up");
    i0.ɵɵattribute("aria-expanded", true);
} }
function SubpanelContainerComponent_div_0_ng_template_17_tr_2_td_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 29);
    i0.ɵɵlistener("click", function SubpanelContainerComponent_div_0_ng_template_17_tr_2_td_1_ng_container_1_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r5); const subpanelKey_r6 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.showSubpanel(ctx_r1.subpanels[subpanelKey_r6].metadata.name, ctx_r1.subpanels[subpanelKey_r6])); });
    i0.ɵɵelement(2, "scrm-grid-widget", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const subpanelKey_r6 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c0, ctx_r1.subpanels[subpanelKey_r6].show === true));
    i0.ɵɵadvance();
    i0.ɵɵproperty("config", ctx_r1.getGridConfig(ctx_r1.subpanels[subpanelKey_r6]));
} }
function SubpanelContainerComponent_div_0_ng_template_17_tr_2_td_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 28);
    i0.ɵɵtemplate(1, SubpanelContainerComponent_div_0_ng_template_17_tr_2_td_1_ng_container_1_Template, 3, 4, "ng-container", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const subpanelKey_r6 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", subpanelKey_r6);
} }
function SubpanelContainerComponent_div_0_ng_template_17_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 26);
    i0.ɵɵtemplate(1, SubpanelContainerComponent_div_0_ng_template_17_tr_2_td_1_Template, 2, 1, "td", 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const subpanelRow_r7 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", subpanelRow_r7);
} }
function SubpanelContainerComponent_div_0_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23)(1, "table", 24);
    i0.ɵɵtemplate(2, SubpanelContainerComponent_div_0_ng_template_17_tr_2_Template, 2, 1, "tr", 25);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.bodySubpanels());
} }
function SubpanelContainerComponent_div_0_ng_container_19_ng_container_1_scrm_subpanel_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-subpanel", 31);
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext().ngIf;
    const subpanelKey_r9 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("maxColumns$", ctx_r1.maxColumns$)("store", item_r8)("filterConfig", ctx_r1.filterConfig)("onClose", ctx_r1.getCloseCallBack(subpanelKey_r9, item_r8));
} }
function SubpanelContainerComponent_div_0_ng_container_19_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, SubpanelContainerComponent_div_0_ng_container_19_ng_container_1_scrm_subpanel_1_Template, 1, 4, "scrm-subpanel", 30);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = ctx.ngIf;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r8.show);
} }
function SubpanelContainerComponent_div_0_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, SubpanelContainerComponent_div_0_ng_container_19_ng_container_1_Template, 2, 1, "ng-container", 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const subpanelKey_r9 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.subpanels[subpanelKey_r9]);
} }
function SubpanelContainerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 3, 0)(3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "div", 7)(7, "a", 8);
    i0.ɵɵlistener("click", function SubpanelContainerComponent_div_0_Template_a_click_7_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.toggleSubPanels()); });
    i0.ɵɵelement(8, "scrm-label", 9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 10);
    i0.ɵɵtemplate(10, SubpanelContainerComponent_div_0_div_10_Template, 2, 1, "div", 11);
    i0.ɵɵelementStart(11, "div", 12)(12, "a", 13);
    i0.ɵɵlistener("click", function SubpanelContainerComponent_div_0_Template_a_click_12_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.toggleSubPanels()); });
    i0.ɵɵtemplate(13, SubpanelContainerComponent_div_0_ng_container_13_Template, 2, 2, "ng-container", 14)(14, SubpanelContainerComponent_div_0_ng_container_14_Template, 2, 2, "ng-container", 14);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(15, "div", 15)(16, "div", 16);
    i0.ɵɵtemplate(17, SubpanelContainerComponent_div_0_ng_template_17_Template, 3, 1, "ng-template");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(18, "div");
    i0.ɵɵtemplate(19, SubpanelContainerComponent_div_0_ng_container_19_Template, 2, 1, "ng-container", 17);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_6_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("collapsed", ctx_r1.isCollapsed());
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r1.isCollapsed());
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.isCollapsed());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.isCollapsed());
    i0.ɵɵadvance(4);
    i0.ɵɵclassMapInterpolate1("sub-panels ", ctx_r1.isCollapsed() && !((tmp_6_0 = ctx_r1.openSubpanels()) == null ? null : tmp_6_0.length) ? "pb-1" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.openSubpanels());
} }
export class SubpanelContainerComponent {
    constructor(languageStore, maxColumnCalculator, localStorage, preferences, systemConfigs, screenSize) {
        this.languageStore = languageStore;
        this.maxColumnCalculator = maxColumnCalculator;
        this.localStorage = localStorage;
        this.preferences = preferences;
        this.systemConfigs = systemConfigs;
        this.screenSize = screenSize;
        this.isCollapsed = signal(true);
        this.toggleIcon = signal('arrow_down_filled');
        this.orderedSubpanels = signal([]);
        this.headerSubpanels = signal([]);
        this.bodySubpanels = signal([]);
        this.openSubpanels = signal([]);
        this.activeHiddenButtonsCount = signal(0);
        this.subs = [];
        this.subpanelButtonLimits = {
            XSmall: 2,
            Small: 3,
            Medium: 3,
            Large: 5,
            XLarge: 5
        };
        this.subpanelButtonBreakpoint = signal(3);
    }
    ngOnInit() {
        const module = this?.config?.parentModule ?? 'default';
        this.setCollapsed(isTrue(this.preferences.getUi(module, 'subpanel-container-collapse') ?? true));
        const subpanelButtonLimits = this.systemConfigs.getConfigValue('recordview_subpanel_button_limits') ?? {};
        if (subpanelButtonLimits && Object.keys(subpanelButtonLimits).length) {
            this.subpanelButtonLimits = subpanelButtonLimits;
        }
        this.openSubpanels.set(this.preferences.getUi(module, 'subpanel-container-open-subpanels') ?? []);
        this.subs.push(this.config.subpanels$.subscribe({
            next: (subpanelsMap) => {
                this.subpanels = { ...subpanelsMap };
                const orderedSubpanels = Object.values(this.subpanels)
                    .filter(item => item?.metadata?.order !== undefined)
                    .sort((a, b) => (a.metadata.order ?? 0) - (b.metadata.order ?? 0))
                    .map(item => item.metadata.name);
                if (orderedSubpanels) {
                    this.orderedSubpanels.set(orderedSubpanels);
                }
                if (!this.subpanels || !Object.keys(this.subpanels).length) {
                    return;
                }
                if (!this.openSubpanels() || this.openSubpanels().length < 1) {
                    return;
                }
                this.openSubpanels().forEach(subpanelKey => {
                    const subpanel = this.subpanels[subpanelKey];
                    if (!subpanel || subpanel.show) {
                        return;
                    }
                    subpanel.show = true;
                    subpanel.load().pipe(take(1)).subscribe();
                });
            }
        }));
        this.headerSubpanels = computed(() => this.orderedSubpanels().slice(0, this.subpanelButtonBreakpoint()));
        this.bodySubpanels = computed(() => {
            const sliced = [...this.orderedSubpanels()];
            let count = 0;
            const groups = [];
            sliced.forEach(value => {
                if (count === 0) {
                    groups.push([]);
                }
                groups[groups.length - 1].push(value);
                count++;
                if (count >= this.subpanelButtonBreakpoint()) {
                    count = 0;
                }
            });
            if (count < this.subpanelButtonBreakpoint() && groups.length > 0) {
                const lastGroup = groups[groups.length - 1];
                const diff = this.subpanelButtonBreakpoint() - lastGroup.length;
                for (let i = 0; i < diff; i++) {
                    lastGroup.push('');
                }
                groups[groups.length - 1] = lastGroup;
            }
            return groups;
        });
        this.activeHiddenButtonsCount = computed(() => {
            const openSubpanelsSet = new Set(this.openSubpanels());
            const headerSubpanelsSet = new Set(this.headerSubpanels());
            return this.bodySubpanels().flat().reduce((count, subpanelKey) => {
                const isOpen = openSubpanelsSet.has(subpanelKey);
                const inHeader = headerSubpanelsSet.has(subpanelKey);
                return count + ((isOpen && !inHeader) ? 1 : 0);
            }, 0);
        });
        this.subs.push(this.screenSize.screenSize$.subscribe({
            next: (screenSize) => {
                if (screenSize && this.subpanelButtonLimits[screenSize]) {
                    this.subpanelButtonBreakpoint.set(this.subpanelButtonLimits[screenSize]);
                }
            }
        }));
        this.maxColumns$ = this.getMaxColumns();
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    getMaxColumns() {
        return this.maxColumnCalculator.getMaxColumns(this.config.sidebarActive$);
    }
    toggleSubPanels() {
        this.setCollapsed(!this.isCollapsed());
        const module = this?.config?.parentModule ?? 'default';
        this.preferences.setUi(module, 'subpanel-container-collapse', this.isCollapsed());
    }
    showSubpanel(key, item) {
        item.show = !item.show;
        let openSubpanels = [...this.openSubpanels()];
        if (item.show) {
            if (!openSubpanels.includes(key)) {
                openSubpanels.push(key);
            }
            item.load().pipe(take(1)).subscribe();
        }
        else {
            openSubpanels = openSubpanels.filter(subpanelKey => subpanelKey != key);
        }
        this.openSubpanels.set(openSubpanels);
        const module = this?.config?.parentModule ?? 'default';
        this.preferences.setUi(module, 'subpanel-container-open-subpanels', this.openSubpanels());
    }
    getCloseCallBack(key, item) {
        return () => this.showSubpanel(key, item);
    }
    getGridConfig(vm) {
        if (!vm.metadata || !vm.metadata.subpanelWidget) {
            return {
                layout: null,
            };
        }
        const layout = vm.getWidgetLayout();
        layout.rows.forEach(row => {
            if (!row.cols || !row.cols.length) {
                return;
            }
            row.cols.forEach(col => {
                if (!col.statistic) {
                    return;
                }
                const store = vm.getStatistic(col.statistic);
                if (store) {
                    col.store = store;
                }
            });
        });
        return {
            rowClass: 'statistics-sidebar-widget-row',
            columnClass: 'statistics-sidebar-widget-col',
            layout,
            widgetConfig: {},
            queryArgs: {
                module: vm.metadata.name,
                context: { module: vm.parentModule, id: vm.parentId },
                params: { subpanel: vm.metadata.name },
            },
        };
    }
    setCollapsed(newCollapsedValue) {
        this.isCollapsed.set(newCollapsedValue);
        this.setToggleIcon();
    }
    setToggleIcon() {
        this.toggleIcon.set((this.isCollapsed()) ? 'arrow_up_filled' : 'arrow_down_filled');
    }
    static { this.ɵfac = function SubpanelContainerComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SubpanelContainerComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore), i0.ɵɵdirectiveInject(i2.MaxColumnsCalculator), i0.ɵɵdirectiveInject(i3.LocalStorageService), i0.ɵɵdirectiveInject(i4.UserPreferenceStore), i0.ɵɵdirectiveInject(i5.SystemConfigStore), i0.ɵɵdirectiveInject(i6.ScreenSizeObserverService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SubpanelContainerComponent, selectors: [["scrm-subpanel-container"]], inputs: { config: "config" }, features: [i0.ɵɵProvidersFeature([MaxColumnsCalculator])], decls: 1, vars: 1, consts: [["accordion", "ngbAccordion"], ["class", "card border shadow-sm", 4, "ngIf"], [1, "card", "border", "shadow-sm"], ["ngbAccordion", "", "activeIds", "sub-panel-buttons", 1, "sub-panel-banner"], ["ngbAccordionItem", "", "id", "sub-panel-buttons", 1, "card", 3, "collapsed"], ["ngbAccordionHeader", "", 1, "card-header"], [1, "d-flex", "justify-content-between"], [1, "d-flex", "align-items-start", "sub-panel-banner-header"], [1, "clickable", 3, "click"], ["labelKey", "LBL_RELATIONSHIPS"], [1, "d-flex", "align-items-center", "justify-content-end"], ["class", "row insight-panel", 4, "ngIf"], [1, "d-flex", "align-items-center", "sub-panel-header-toggle"], [1, "clickable", "position-relative", 3, "click"], [4, "ngIf"], ["ngbAccordionCollapse", ""], ["ngbAccordionBody", ""], [4, "ngFor", "ngForOf"], [1, "row", "insight-panel"], ["class", "col-auto mr-3 insight-panel-card border-insight", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "col-auto", "mr-3", "insight-panel-card", "border-insight", 3, "click", "ngClass"], [3, "config"], ["aria-controls", "collapseShowSubPanels", 1, "float-right", 3, "image"], ["id", "collapseShowSubPanels", 1, "sub-panel-banner-body", "d-flex", "align-items-center", "justify-content-center", "border-bottom", "border-top", "pt-2", "pb-3", "ml-2", "mr-2", "mb-2"], [1, "sub-panel-banner-body-table"], ["class", "insight-panel sub-panel-banner-body-table-row", 4, "ngFor", "ngForOf"], [1, "insight-panel", "sub-panel-banner-body-table-row"], ["class", "sub-panel-banner-body-table-col", 4, "ngFor", "ngForOf"], [1, "sub-panel-banner-body-table-col"], [1, "insight-panel-card", "border-insight", "pl-2", "pr-2", 3, "click", "ngClass"], ["class", "sub-panel minimal-table", 3, "maxColumns$", "store", "filterConfig", "onClose", 4, "ngIf"], [1, "sub-panel", "minimal-table", 3, "maxColumns$", "store", "filterConfig", "onClose"]], template: function SubpanelContainerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SubpanelContainerComponent_div_0_Template, 20, 8, "div", 1);
        } if (rf & 2) {
            let tmp_0_0;
            i0.ɵɵproperty("ngIf", (tmp_0_0 = ctx.bodySubpanels()) == null ? null : tmp_0_0.length);
        } }, dependencies: [i7.NgClass, i7.NgForOf, i7.NgIf, i8.NgbAccordionDirective, i8.NgbAccordionItem, i8.NgbAccordionHeader, i8.NgbAccordionBody, i8.NgbAccordionCollapse, i9.ImageComponent, i10.SubpanelComponent, i11.GridWidgetComponent, i12.LabelComponent], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SubpanelContainerComponent, [{
        type: Component,
        args: [{ selector: 'scrm-subpanel-container', providers: [MaxColumnsCalculator], template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div class=\"card border shadow-sm\" *ngIf=\"bodySubpanels()?.length\">\n    <div ngbAccordion class=\"sub-panel-banner\" #accordion=\"ngbAccordion\" activeIds=\"sub-panel-buttons\">\n        <div ngbAccordionItem id=\"sub-panel-buttons\" class=\"card\" [collapsed]=\"isCollapsed()\">\n            <div ngbAccordionHeader class=\"card-header\">\n                <div class=\"d-flex justify-content-between\">\n                    <div class=\"d-flex align-items-start sub-panel-banner-header\">\n                        <a (click)=\"toggleSubPanels()\" class=\"clickable\">\n                            <scrm-label labelKey=\"LBL_RELATIONSHIPS\"></scrm-label>\n                        </a>\n                    </div>\n\n                    <div class=\"d-flex align-items-center justify-content-end\">\n\n                        <div class=\"row insight-panel\" *ngIf=\"isCollapsed()\">\n                            <div class=\"col-auto mr-3 insight-panel-card border-insight\"\n                                 *ngFor=\"let subpanelKey of headerSubpanels()\"\n                                 [ngClass]=\"{'sub-panel-banner-button-active': subpanels[subpanelKey].show === true}\"\n                                 (click)=\"showSubpanel(subpanels[subpanelKey].metadata.name, subpanels[subpanelKey])\">\n                                <scrm-grid-widget\n                                        [config]=\"getGridConfig(subpanels[subpanelKey])\"></scrm-grid-widget>\n                            </div>\n                        </div>\n\n                        <div class=\"d-flex align-items-center sub-panel-header-toggle\">\n                            <a (click)=\"toggleSubPanels()\" class=\"clickable position-relative\">\n                                <ng-container *ngIf=\"isCollapsed()\">\n                                    <scrm-image\n                                            [attr.aria-expanded]=\"false\"\n                                            [image]=\"'chevron-down'\"\n                                            aria-controls=\"collapseShowSubPanels\"\n                                            class=\"float-right\">\n                                    </scrm-image>\n                                </ng-container>\n                                <ng-container *ngIf=\"!isCollapsed()\">\n                                    <scrm-image\n                                            [attr.aria-expanded]=\"true\"\n                                            [image]=\"'chevron-up'\"\n                                            aria-controls=\"collapseShowSubPanels\"\n                                            class=\"float-right\">\n                                    </scrm-image>\n                                </ng-container>\n                            </a>\n                        </div>\n\n                    </div>\n                </div>\n\n            </div>\n            <div ngbAccordionCollapse>\n                <div ngbAccordionBody>\n                    <ng-template>\n                        <div id=\"collapseShowSubPanels\" class=\"sub-panel-banner-body d-flex align-items-center justify-content-center border-bottom border-top pt-2 pb-3 ml-2 mr-2 mb-2\">\n                            <table class=\"sub-panel-banner-body-table\">\n                                <tr class=\"insight-panel sub-panel-banner-body-table-row\" *ngFor=\"let subpanelRow of bodySubpanels()\">\n                                    <td *ngFor=\"let subpanelKey of subpanelRow\" class=\"sub-panel-banner-body-table-col\">\n                                        <ng-container *ngIf=\"subpanelKey\">\n                                            <div class=\"insight-panel-card border-insight pl-2 pr-2\"\n                                                 [ngClass]=\"{'sub-panel-banner-button-active': subpanels[subpanelKey].show === true}\"\n                                                 (click)=\"showSubpanel(subpanels[subpanelKey].metadata.name, subpanels[subpanelKey])\">\n                                                <scrm-grid-widget\n                                                        [config]=\"getGridConfig(subpanels[subpanelKey])\"></scrm-grid-widget>\n                                            </div>\n                                        </ng-container>\n                                    </td>\n                                </tr>\n                            </table>\n                        </div>\n                    </ng-template>\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n    <div class=\"sub-panels {{(isCollapsed() && !openSubpanels()?.length) ? 'pb-1' : ''}}\">\n        <ng-container *ngFor=\"let subpanelKey of this.openSubpanels()\">\n            <ng-container *ngIf=\"(subpanels[subpanelKey]) as item\">\n                <scrm-subpanel *ngIf=\"item.show\"\n                               [maxColumns$]=\"maxColumns$\"\n                               [store]=\"item\"\n                               [filterConfig]=\"filterConfig\"\n                               [onClose]=\"getCloseCallBack(subpanelKey, item)\"\n                               class=\"sub-panel minimal-table\">\n                </scrm-subpanel>\n            </ng-container>\n        </ng-container>\n\n    </div>\n\n</div>\n" }]
    }], () => [{ type: i1.LanguageStore }, { type: i2.MaxColumnsCalculator }, { type: i3.LocalStorageService }, { type: i4.UserPreferenceStore }, { type: i5.SystemConfigStore }, { type: i6.ScreenSizeObserverService }], { config: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SubpanelContainerComponent, { className: "SubpanelContainerComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VicGFuZWwtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb250YWluZXJzL3N1YnBhbmVsL2NvbXBvbmVudHMvc3VicGFuZWwtY29udGFpbmVyL3N1YnBhbmVsLWNvbnRhaW5lci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9zdWJwYW5lbC9jb21wb25lbnRzL3N1YnBhbmVsLWNvbnRhaW5lci9zdWJwYW5lbC1jb250YWluZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBNkIsTUFBTSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUM1RyxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFHcEMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBRXhFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLCtFQUErRSxDQUFDO0FBR25ILE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUU1RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSwwREFBMEQsQ0FBQztBQUU3RixPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx5REFBeUQsQ0FBQztBQUM1RixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxxREFBcUQsQ0FBQztBQUN0RixPQUFPLEVBRUgseUJBQXlCLEVBQzVCLE1BQU0sMkVBQTJFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDSHZELCtCQUcwRjtJQUFyRixrT0FBUyxxR0FBMEUsS0FBQztJQUNyRix1Q0FDNEU7SUFDaEYsaUJBQU07Ozs7SUFKRCxvR0FBb0Y7SUFHN0UsY0FBZ0Q7SUFBaEQsK0VBQWdEOzs7SUFOaEUsK0JBQXFEO0lBQ2pELHlGQUcwRjtJQUk5RixpQkFBTTs7O0lBTjJCLGNBQW9CO0lBQXBCLGtEQUFvQjs7O0lBVTdDLDZCQUFvQztJQUNoQyxpQ0FLYTs7O0lBSEwsY0FBd0I7SUFBeEIsc0NBQXdCOzs7O0lBS3BDLDZCQUFxQztJQUNqQyxpQ0FLYTs7O0lBSEwsY0FBc0I7SUFBdEIsb0NBQXNCOzs7OztJQW1CMUIsNkJBQWtDO0lBQzlCLCtCQUUwRjtJQUFyRixpUkFBUyxxR0FBMEUsS0FBQztJQUNyRix1Q0FDNEU7SUFDaEYsaUJBQU07Ozs7O0lBSkQsY0FBb0Y7SUFBcEYsb0dBQW9GO0lBRzdFLGNBQWdEO0lBQWhELCtFQUFnRDs7O0lBTnBFLDhCQUFvRjtJQUNoRiw2SEFBa0M7SUFRdEMsaUJBQUs7OztJQVJjLGNBQWlCO0lBQWpCLHFDQUFpQjs7O0lBRnhDLDhCQUFzRztJQUNsRyxvR0FBb0Y7SUFVeEYsaUJBQUs7OztJQVYyQixjQUFjO0lBQWQsd0NBQWM7OztJQUZsRCxBQURKLCtCQUFpSyxnQkFDbEg7SUFDdkMsK0ZBQXNHO0lBYTlHLEFBREksaUJBQVEsRUFDTjs7O0lBYm9GLGVBQWtCO0lBQWxCLGdEQUFrQjs7O0lBd0JwSCxvQ0FNZ0I7Ozs7O0lBRkQsQUFEQSxBQURBLEFBREEsZ0RBQTJCLGtCQUNiLHFDQUNlLDZEQUNrQjs7O0lBTGxFLDZCQUF1RDtJQUNuRCxxSUFLK0M7Ozs7SUFML0IsY0FBZTtJQUFmLG1DQUFlOzs7SUFGdkMsNkJBQStEO0lBQzNELG9IQUF1RDs7Ozs7SUFBeEMsY0FBK0I7SUFBL0IsdURBQStCOzs7O0lBdEVsQyxBQURKLEFBREosQUFESixBQURKLEFBREosQUFESiw4QkFBbUUsZ0JBQ29DLGFBQ1QsYUFDdEMsYUFDSSxhQUNzQixXQUNUO0lBQTlDLGlMQUFTLHdCQUFpQixLQUFDO0lBQzFCLGdDQUFzRDtJQUU5RCxBQURJLGlCQUFJLEVBQ0Y7SUFFTiwrQkFBMkQ7SUFFdkQsb0ZBQXFEO0lBV2pELEFBREosZ0NBQStELGFBQ1E7SUFBaEUsa0xBQVMsd0JBQWlCLEtBQUM7SUFTMUIsQUFSQSxzR0FBb0MseUZBUUM7SUFjekQsQUFGSSxBQURJLEFBRkksQUFESSxpQkFBSSxFQUNGLEVBRUosRUFDSixFQUVKO0lBRUYsQUFESixnQ0FBMEIsZUFDQTtJQUNsQixnR0FBYTtJQXNCN0IsQUFESSxBQUZJLEFBREksaUJBQU0sRUFDSixFQUVKLEVBQ0o7SUFFTiw0QkFBc0Y7SUFDbEYsc0dBQStEO0lBY3ZFLEFBRkksaUJBQU0sRUFFSjs7OztJQXZGNEQsZUFBMkI7SUFBM0IsZ0RBQTJCO0lBV3JDLGVBQW1CO0lBQW5CLDJDQUFtQjtJQVk1QixlQUFtQjtJQUFuQiwyQ0FBbUI7SUFRbkIsY0FBb0I7SUFBcEIsNENBQW9CO0lBeUMxRCxlQUFnRjtJQUFoRix5SkFBZ0Y7SUFDM0MsY0FBdUI7SUFBdkIsZ0RBQXVCOztBRG5EckUsTUFBTSxPQUFPLDBCQUEwQjtJQTJCbkMsWUFDYyxhQUE0QixFQUM1QixtQkFBeUMsRUFDekMsWUFBaUMsRUFDakMsV0FBZ0MsRUFDaEMsYUFBZ0MsRUFDaEMsVUFBcUM7UUFMckMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFzQjtRQUN6QyxpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDakMsZ0JBQVcsR0FBWCxXQUFXLENBQXFCO1FBQ2hDLGtCQUFhLEdBQWIsYUFBYSxDQUFtQjtRQUNoQyxlQUFVLEdBQVYsVUFBVSxDQUEyQjtRQTdCbkQsZ0JBQVcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsZUFBVSxHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBSXpDLHFCQUFnQixHQUE2QixNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEQsb0JBQWUsR0FBcUIsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9DLGtCQUFhLEdBQXFCLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3QyxrQkFBYSxHQUE2QixNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckQsNkJBQXdCLEdBQW1CLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUdyRCxTQUFJLEdBQW1CLEVBQUUsQ0FBQztRQUNoQix5QkFBb0IsR0FBUTtZQUNsQyxNQUFNLEVBQUUsQ0FBQztZQUNULEtBQUssRUFBRSxDQUFDO1lBQ1IsTUFBTSxFQUFFLENBQUM7WUFDVCxLQUFLLEVBQUUsQ0FBQztZQUNSLE1BQU0sRUFBRSxDQUFDO1NBQ1osQ0FBQztRQUNRLDZCQUF3QixHQUEyQixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFXdkUsQ0FBQztJQUVELFFBQVE7UUFDSixNQUFNLE1BQU0sR0FBRyxJQUFJLEVBQUUsTUFBTSxFQUFFLFlBQVksSUFBSSxTQUFTLENBQUM7UUFDdkQsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLDZCQUE2QixDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztRQUVqRyxNQUFNLG9CQUFvQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLG1DQUFtQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzFHLElBQUksb0JBQW9CLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ25FLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxvQkFBb0IsQ0FBQztRQUNyRCxDQUFDO1FBRUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLG1DQUFtQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFFbEcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO1lBQ3hDLElBQUksRUFBRSxDQUFDLFlBQVksRUFBRSxFQUFFO2dCQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUMsR0FBRyxZQUFZLEVBQUMsQ0FBQztnQkFFbkMsTUFBTSxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7cUJBQ2pELE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxLQUFLLFNBQVMsQ0FBQztxQkFDbkQsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO3FCQUNqRSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUVyQyxJQUFJLGdCQUFnQixFQUFFLENBQUM7b0JBQ25CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDaEQsQ0FBQztnQkFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUN6RCxPQUFPO2dCQUNYLENBQUM7Z0JBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO29CQUMzRCxPQUFPO2dCQUNYLENBQUM7Z0JBRUQsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRTtvQkFDdkMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFFN0MsSUFBSSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7d0JBQzdCLE9BQU87b0JBQ1gsQ0FBQztvQkFFRCxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFDckIsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDOUMsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDO1NBQ0osQ0FBQyxDQUNMLENBQUM7UUFFRixJQUFJLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN6RyxJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUU7WUFDL0IsTUFBTSxNQUFNLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7WUFFNUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ25CLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRSxDQUFDO29CQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3BCLENBQUM7Z0JBRUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUV0QyxLQUFLLEVBQUUsQ0FBQztnQkFDUixJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsd0JBQXdCLEVBQUUsRUFBRSxDQUFDO29CQUMzQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2dCQUNkLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztZQUVILElBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7Z0JBQzlELE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUM1QyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDO2dCQUNoRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7b0JBQzVCLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3ZCLENBQUM7Z0JBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDO1lBQzFDLENBQUM7WUFFRCxPQUFPLE1BQU0sQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyx3QkFBd0IsR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFO1lBQzFDLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7WUFDdkQsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztZQUUzRCxPQUFPLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQ3JDLENBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxFQUFFO2dCQUNuQixNQUFNLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ2pELE1BQU0sUUFBUSxHQUFHLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDckQsT0FBTyxLQUFLLEdBQUcsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25ELENBQUMsRUFDRCxDQUFDLENBQ0osQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDO1lBQ2pELElBQUksRUFBRSxDQUFDLFVBQXNCLEVBQUUsRUFBRTtnQkFDN0IsSUFBSSxVQUFVLElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7b0JBQ3RELElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQzdFLENBQUM7WUFDTCxDQUFDO1NBQ0osQ0FBQyxDQUFDLENBQUM7UUFFSixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBRUQsV0FBVztRQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELGFBQWE7UUFDVCxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRUQsZUFBZTtRQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUV2QyxNQUFNLE1BQU0sR0FBRyxJQUFJLEVBQUUsTUFBTSxFQUFFLFlBQVksSUFBSSxTQUFTLENBQUM7UUFDdkQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLDZCQUE2QixFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFFRCxZQUFZLENBQUMsR0FBVyxFQUFFLElBQW1CO1FBQ3pDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRXZCLElBQUksYUFBYSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztRQUU5QyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNaLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7Z0JBQy9CLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDNUIsQ0FBQztZQUNELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDMUMsQ0FBQzthQUFNLENBQUM7WUFDSixhQUFhLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLFdBQVcsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUM1RSxDQUFDO1FBRUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFdEMsTUFBTSxNQUFNLEdBQUcsSUFBSSxFQUFFLE1BQU0sRUFBRSxZQUFZLElBQUksU0FBUyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxtQ0FBbUMsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUM5RixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsR0FBVyxFQUFFLElBQW1CO1FBQzdDLE9BQU8sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELGFBQWEsQ0FBQyxFQUFpQjtRQUUzQixJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDOUMsT0FBTztnQkFDSCxNQUFNLEVBQUUsSUFBSTthQUNLLENBQUM7UUFDMUIsQ0FBQztRQUdELE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUVwQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUV0QixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ2hDLE9BQU87WUFDWCxDQUFDO1lBRUQsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBRW5CLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQ2pCLE9BQU87Z0JBQ1gsQ0FBQztnQkFFRCxNQUFNLEtBQUssR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDN0MsSUFBSSxLQUFLLEVBQUUsQ0FBQztvQkFDUixHQUFHLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDdEIsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBRVAsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPO1lBQ0gsUUFBUSxFQUFFLCtCQUErQjtZQUN6QyxXQUFXLEVBQUUsK0JBQStCO1lBQzVDLE1BQU07WUFDTixZQUFZLEVBQUUsRUFBb0I7WUFDbEMsU0FBUyxFQUFFO2dCQUNQLE1BQU0sRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUk7Z0JBQ3hCLE9BQU8sRUFBRSxFQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsWUFBWSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsUUFBUSxFQUFnQjtnQkFDbEUsTUFBTSxFQUFFLEVBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFDO2FBQ2hCO1NBQ1AsQ0FBQztJQUMxQixDQUFDO0lBRVMsWUFBWSxDQUFDLGlCQUEwQjtRQUM3QyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRVMsYUFBYTtRQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUN4RixDQUFDOzJIQXJPUSwwQkFBMEI7b0VBQTFCLDBCQUEwQiwyR0FGeEIsQ0FBQyxvQkFBb0IsQ0FBQztZQ3RCckMsNEVBQW1FOzs7WUFBL0Isc0ZBQTZCOzs7aUZEd0JwRCwwQkFBMEI7Y0FMdEMsU0FBUzsyQkFDSSx5QkFBeUIsYUFFeEIsQ0FBQyxvQkFBb0IsQ0FBQzs2TkFJeEIsTUFBTTtrQkFBZCxLQUFLOztrRkFGRywwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBjb21wdXRlZCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBTaWduYWwsIHNpZ25hbCwgV3JpdGFibGVTaWduYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHt0YWtlfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge09ic2VydmFibGUsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1N1YnBhbmVsQ29udGFpbmVyQ29uZmlnfSBmcm9tICcuL3N1YnBhbmVsLWNvbnRhaW5lci5tb2RlbCc7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7U3VicGFuZWxTdG9yZSwgU3VicGFuZWxTdG9yZU1hcH0gZnJvbSAnLi4vLi4vc3RvcmUvc3VicGFuZWwvc3VicGFuZWwuc3RvcmUnO1xuaW1wb3J0IHtNYXhDb2x1bW5zQ2FsY3VsYXRvcn0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvdWkvbWF4LWNvbHVtbnMtY2FsY3VsYXRvci9tYXgtY29sdW1ucy1jYWxjdWxhdG9yLnNlcnZpY2UnO1xuaW1wb3J0IHtWaWV3Q29udGV4dH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3ZpZXdzL3ZpZXcubW9kZWwnO1xuaW1wb3J0IHtXaWRnZXRNZXRhZGF0YX0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL21ldGFkYXRhL3dpZGdldC5tZXRhZGF0YSc7XG5pbXBvcnQge2lzVHJ1ZX0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3V0aWxzL3ZhbHVlLXV0aWxzJztcbmltcG9ydCB7R3JpZFdpZGdldENvbmZpZywgU3RhdGlzdGljc1F1ZXJ5QXJnc30gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9ncmlkLXdpZGdldC9ncmlkLXdpZGdldC5jb21wb25lbnQnO1xuaW1wb3J0IHtMb2NhbFN0b3JhZ2VTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZXMvbG9jYWwtc3RvcmFnZS9sb2NhbC1zdG9yYWdlLnNlcnZpY2VcIjtcbmltcG9ydCB7RmlsdGVyQ29uZmlnfSBmcm9tIFwiLi4vLi4vLi4vbGlzdC1maWx0ZXIvY29tcG9uZW50cy9saXN0LWZpbHRlci9saXN0LWZpbHRlci5tb2RlbFwiO1xuaW1wb3J0IHtVc2VyUHJlZmVyZW5jZVN0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS91c2VyLXByZWZlcmVuY2UvdXNlci1wcmVmZXJlbmNlLnN0b3JlJztcbmltcG9ydCB7U3lzdGVtQ29uZmlnU3RvcmV9IGZyb20gXCIuLi8uLi8uLi8uLi9zdG9yZS9zeXN0ZW0tY29uZmlnL3N5c3RlbS1jb25maWcuc3RvcmVcIjtcbmltcG9ydCB7XG4gICAgU2NyZWVuU2l6ZSxcbiAgICBTY3JlZW5TaXplT2JzZXJ2ZXJTZXJ2aWNlXG59IGZyb20gXCIuLi8uLi8uLi8uLi9zZXJ2aWNlcy91aS9zY3JlZW4tc2l6ZS1vYnNlcnZlci9zY3JlZW4tc2l6ZS1vYnNlcnZlci5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1zdWJwYW5lbC1jb250YWluZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnc3VicGFuZWwtY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtNYXhDb2x1bW5zQ2FsY3VsYXRvcl1cbn0pXG5leHBvcnQgY2xhc3MgU3VicGFuZWxDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBASW5wdXQoKSBjb25maWc6IFN1YnBhbmVsQ29udGFpbmVyQ29uZmlnO1xuXG4gICAgaXNDb2xsYXBzZWQgPSBzaWduYWwodHJ1ZSk7XG4gICAgdG9nZ2xlSWNvbiA9IHNpZ25hbCgnYXJyb3dfZG93bl9maWxsZWQnKTtcbiAgICBtYXhDb2x1bW5zJDogT2JzZXJ2YWJsZTxudW1iZXI+O1xuXG4gICAgc3VicGFuZWxzOiBTdWJwYW5lbFN0b3JlTWFwO1xuICAgIG9yZGVyZWRTdWJwYW5lbHM6IFdyaXRhYmxlU2lnbmFsPHN0cmluZ1tdPiA9IHNpZ25hbChbXSk7XG4gICAgaGVhZGVyU3VicGFuZWxzOiBTaWduYWw8c3RyaW5nW10+ID0gc2lnbmFsKFtdKTtcbiAgICBib2R5U3VicGFuZWxzOiBTaWduYWw8c3RyaW5nW10+ID0gc2lnbmFsKFtdKTtcbiAgICBvcGVuU3VicGFuZWxzOiBXcml0YWJsZVNpZ25hbDxzdHJpbmdbXT4gPSBzaWduYWwoW10pO1xuICAgIGFjdGl2ZUhpZGRlbkJ1dHRvbnNDb3VudDogU2lnbmFsPG51bWJlcj4gPSBzaWduYWwoMCk7XG5cbiAgICBmaWx0ZXJDb25maWc6IEZpbHRlckNvbmZpZztcbiAgICBzdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuICAgIHByb3RlY3RlZCBzdWJwYW5lbEJ1dHRvbkxpbWl0czogYW55ID0ge1xuICAgICAgICBYU21hbGw6IDIsXG4gICAgICAgIFNtYWxsOiAzLFxuICAgICAgICBNZWRpdW06IDMsXG4gICAgICAgIExhcmdlOiA1LFxuICAgICAgICBYTGFyZ2U6IDVcbiAgICB9O1xuICAgIHByb3RlY3RlZCBzdWJwYW5lbEJ1dHRvbkJyZWFrcG9pbnQ6IFdyaXRhYmxlU2lnbmFsPG51bWJlcj4gPSBzaWduYWwoMyk7XG5cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2VTdG9yZTogTGFuZ3VhZ2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIG1heENvbHVtbkNhbGN1bGF0b3I6IE1heENvbHVtbnNDYWxjdWxhdG9yLFxuICAgICAgICBwcm90ZWN0ZWQgbG9jYWxTdG9yYWdlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgcHJlZmVyZW5jZXM6IFVzZXJQcmVmZXJlbmNlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBzeXN0ZW1Db25maWdzOiBTeXN0ZW1Db25maWdTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIHNjcmVlblNpemU6IFNjcmVlblNpemVPYnNlcnZlclNlcnZpY2UsXG4gICAgKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IHRoaXM/LmNvbmZpZz8ucGFyZW50TW9kdWxlID8/ICdkZWZhdWx0JztcbiAgICAgICAgdGhpcy5zZXRDb2xsYXBzZWQoaXNUcnVlKHRoaXMucHJlZmVyZW5jZXMuZ2V0VWkobW9kdWxlLCAnc3VicGFuZWwtY29udGFpbmVyLWNvbGxhcHNlJykgPz8gdHJ1ZSkpO1xuXG4gICAgICAgIGNvbnN0IHN1YnBhbmVsQnV0dG9uTGltaXRzID0gdGhpcy5zeXN0ZW1Db25maWdzLmdldENvbmZpZ1ZhbHVlKCdyZWNvcmR2aWV3X3N1YnBhbmVsX2J1dHRvbl9saW1pdHMnKSA/PyB7fTtcbiAgICAgICAgaWYgKHN1YnBhbmVsQnV0dG9uTGltaXRzICYmIE9iamVjdC5rZXlzKHN1YnBhbmVsQnV0dG9uTGltaXRzKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuc3VicGFuZWxCdXR0b25MaW1pdHMgPSBzdWJwYW5lbEJ1dHRvbkxpbWl0cztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub3BlblN1YnBhbmVscy5zZXQodGhpcy5wcmVmZXJlbmNlcy5nZXRVaShtb2R1bGUsICdzdWJwYW5lbC1jb250YWluZXItb3Blbi1zdWJwYW5lbHMnKSA/PyBbXSk7XG5cbiAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5jb25maWcuc3VicGFuZWxzJC5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgICAgIG5leHQ6IChzdWJwYW5lbHNNYXApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJwYW5lbHMgPSB7Li4uc3VicGFuZWxzTWFwfTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcmRlcmVkU3VicGFuZWxzID0gT2JqZWN0LnZhbHVlcyh0aGlzLnN1YnBhbmVscylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtPy5tZXRhZGF0YT8ub3JkZXIgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiAoYS5tZXRhZGF0YS5vcmRlciA/PyAwKSAtIChiLm1ldGFkYXRhLm9yZGVyID8/IDApKVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChpdGVtID0+IGl0ZW0ubWV0YWRhdGEubmFtZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9yZGVyZWRTdWJwYW5lbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3JkZXJlZFN1YnBhbmVscy5zZXQob3JkZXJlZFN1YnBhbmVscyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc3VicGFuZWxzIHx8ICFPYmplY3Qua2V5cyh0aGlzLnN1YnBhbmVscykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMub3BlblN1YnBhbmVscygpIHx8IHRoaXMub3BlblN1YnBhbmVscygpLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3BlblN1YnBhbmVscygpLmZvckVhY2goc3VicGFuZWxLZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3VicGFuZWwgPSB0aGlzLnN1YnBhbmVsc1tzdWJwYW5lbEtleV07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc3VicGFuZWwgfHwgc3VicGFuZWwuc2hvdykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgc3VicGFuZWwuc2hvdyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJwYW5lbC5sb2FkKCkucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmhlYWRlclN1YnBhbmVscyA9IGNvbXB1dGVkKCgpID0+IHRoaXMub3JkZXJlZFN1YnBhbmVscygpLnNsaWNlKDAsIHRoaXMuc3VicGFuZWxCdXR0b25CcmVha3BvaW50KCkpKTtcbiAgICAgICAgdGhpcy5ib2R5U3VicGFuZWxzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2xpY2VkID0gWy4uLnRoaXMub3JkZXJlZFN1YnBhbmVscygpXTtcblxuICAgICAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwcyA9IFtdO1xuICAgICAgICAgICAgc2xpY2VkLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBncm91cHMucHVzaChbXSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZ3JvdXBzW2dyb3Vwcy5sZW5ndGggLSAxXS5wdXNoKHZhbHVlKTtcblxuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ID49IHRoaXMuc3VicGFuZWxCdXR0b25CcmVha3BvaW50KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZihjb3VudCA8IHRoaXMuc3VicGFuZWxCdXR0b25CcmVha3BvaW50KCkgJiYgZ3JvdXBzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsYXN0R3JvdXAgPSBncm91cHNbZ3JvdXBzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpZmYgPSB0aGlzLnN1YnBhbmVsQnV0dG9uQnJlYWtwb2ludCgpIC0gbGFzdEdyb3VwLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpZmY7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsYXN0R3JvdXAucHVzaCgnJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGdyb3Vwc1tncm91cHMubGVuZ3RoIC0gMV0gPSBsYXN0R3JvdXA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBncm91cHM7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYWN0aXZlSGlkZGVuQnV0dG9uc0NvdW50ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3BlblN1YnBhbmVsc1NldCA9IG5ldyBTZXQodGhpcy5vcGVuU3VicGFuZWxzKCkpO1xuICAgICAgICAgICAgY29uc3QgaGVhZGVyU3VicGFuZWxzU2V0ID0gbmV3IFNldCh0aGlzLmhlYWRlclN1YnBhbmVscygpKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm9keVN1YnBhbmVscygpLmZsYXQoKS5yZWR1Y2UoXG4gICAgICAgICAgICAgICAgKGNvdW50LCBzdWJwYW5lbEtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc09wZW4gPSBvcGVuU3VicGFuZWxzU2V0LmhhcyhzdWJwYW5lbEtleSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluSGVhZGVyID0gaGVhZGVyU3VicGFuZWxzU2V0LmhhcyhzdWJwYW5lbEtleSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb3VudCArICgoaXNPcGVuICYmICFpbkhlYWRlcikgPyAxIDogMCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLnNjcmVlblNpemUuc2NyZWVuU2l6ZSQuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgIG5leHQ6IChzY3JlZW5TaXplOiBTY3JlZW5TaXplKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHNjcmVlblNpemUgJiYgdGhpcy5zdWJwYW5lbEJ1dHRvbkxpbWl0c1tzY3JlZW5TaXplXSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1YnBhbmVsQnV0dG9uQnJlYWtwb2ludC5zZXQodGhpcy5zdWJwYW5lbEJ1dHRvbkxpbWl0c1tzY3JlZW5TaXplXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG5cbiAgICAgICAgdGhpcy5tYXhDb2x1bW5zJCA9IHRoaXMuZ2V0TWF4Q29sdW1ucygpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cblxuICAgIGdldE1heENvbHVtbnMoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWF4Q29sdW1uQ2FsY3VsYXRvci5nZXRNYXhDb2x1bW5zKHRoaXMuY29uZmlnLnNpZGViYXJBY3RpdmUkKTtcbiAgICB9XG5cbiAgICB0b2dnbGVTdWJQYW5lbHMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2V0Q29sbGFwc2VkKCF0aGlzLmlzQ29sbGFwc2VkKCkpO1xuXG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IHRoaXM/LmNvbmZpZz8ucGFyZW50TW9kdWxlID8/ICdkZWZhdWx0JztcbiAgICAgICAgdGhpcy5wcmVmZXJlbmNlcy5zZXRVaShtb2R1bGUsICdzdWJwYW5lbC1jb250YWluZXItY29sbGFwc2UnLCB0aGlzLmlzQ29sbGFwc2VkKCkpO1xuICAgIH1cblxuICAgIHNob3dTdWJwYW5lbChrZXk6IHN0cmluZywgaXRlbTogU3VicGFuZWxTdG9yZSk6IHZvaWQge1xuICAgICAgICBpdGVtLnNob3cgPSAhaXRlbS5zaG93O1xuXG4gICAgICAgIGxldCBvcGVuU3VicGFuZWxzID0gWy4uLnRoaXMub3BlblN1YnBhbmVscygpXTtcblxuICAgICAgICBpZiAoaXRlbS5zaG93KSB7XG4gICAgICAgICAgICBpZiAoIW9wZW5TdWJwYW5lbHMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgICAgIG9wZW5TdWJwYW5lbHMucHVzaChrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXRlbS5sb2FkKCkucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9wZW5TdWJwYW5lbHMgPSBvcGVuU3VicGFuZWxzLmZpbHRlcihzdWJwYW5lbEtleSA9PiBzdWJwYW5lbEtleSAhPSBrZXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vcGVuU3VicGFuZWxzLnNldChvcGVuU3VicGFuZWxzKTtcblxuICAgICAgICBjb25zdCBtb2R1bGUgPSB0aGlzPy5jb25maWc/LnBhcmVudE1vZHVsZSA/PyAnZGVmYXVsdCc7XG4gICAgICAgIHRoaXMucHJlZmVyZW5jZXMuc2V0VWkobW9kdWxlLCAnc3VicGFuZWwtY29udGFpbmVyLW9wZW4tc3VicGFuZWxzJywgdGhpcy5vcGVuU3VicGFuZWxzKCkpO1xuICAgIH1cblxuICAgIGdldENsb3NlQ2FsbEJhY2soa2V5OiBzdHJpbmcsIGl0ZW06IFN1YnBhbmVsU3RvcmUpOiBGdW5jdGlvbiB7XG4gICAgICAgIHJldHVybiAoKSA9PiB0aGlzLnNob3dTdWJwYW5lbChrZXksIGl0ZW0pO1xuICAgIH1cblxuICAgIGdldEdyaWRDb25maWcodm06IFN1YnBhbmVsU3RvcmUpOiBHcmlkV2lkZ2V0Q29uZmlnIHtcblxuICAgICAgICBpZiAoIXZtLm1ldGFkYXRhIHx8ICF2bS5tZXRhZGF0YS5zdWJwYW5lbFdpZGdldCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsYXlvdXQ6IG51bGwsXG4gICAgICAgICAgICB9IGFzIEdyaWRXaWRnZXRDb25maWc7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGNvbnN0IGxheW91dCA9IHZtLmdldFdpZGdldExheW91dCgpO1xuXG4gICAgICAgIGxheW91dC5yb3dzLmZvckVhY2gocm93ID0+IHtcblxuICAgICAgICAgICAgaWYgKCFyb3cuY29scyB8fCAhcm93LmNvbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByb3cuY29scy5mb3JFYWNoKGNvbCA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWNvbC5zdGF0aXN0aWMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IHN0b3JlID0gdm0uZ2V0U3RhdGlzdGljKGNvbC5zdGF0aXN0aWMpO1xuICAgICAgICAgICAgICAgIGlmIChzdG9yZSkge1xuICAgICAgICAgICAgICAgICAgICBjb2wuc3RvcmUgPSBzdG9yZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcm93Q2xhc3M6ICdzdGF0aXN0aWNzLXNpZGViYXItd2lkZ2V0LXJvdycsXG4gICAgICAgICAgICBjb2x1bW5DbGFzczogJ3N0YXRpc3RpY3Mtc2lkZWJhci13aWRnZXQtY29sJyxcbiAgICAgICAgICAgIGxheW91dCxcbiAgICAgICAgICAgIHdpZGdldENvbmZpZzoge30gYXMgV2lkZ2V0TWV0YWRhdGEsXG4gICAgICAgICAgICBxdWVyeUFyZ3M6IHtcbiAgICAgICAgICAgICAgICBtb2R1bGU6IHZtLm1ldGFkYXRhLm5hbWUsXG4gICAgICAgICAgICAgICAgY29udGV4dDoge21vZHVsZTogdm0ucGFyZW50TW9kdWxlLCBpZDogdm0ucGFyZW50SWR9IGFzIFZpZXdDb250ZXh0LFxuICAgICAgICAgICAgICAgIHBhcmFtczoge3N1YnBhbmVsOiB2bS5tZXRhZGF0YS5uYW1lfSxcbiAgICAgICAgICAgIH0gYXMgU3RhdGlzdGljc1F1ZXJ5QXJncyxcbiAgICAgICAgfSBhcyBHcmlkV2lkZ2V0Q29uZmlnO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZXRDb2xsYXBzZWQobmV3Q29sbGFwc2VkVmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pc0NvbGxhcHNlZC5zZXQobmV3Q29sbGFwc2VkVmFsdWUpO1xuICAgICAgICB0aGlzLnNldFRvZ2dsZUljb24oKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2V0VG9nZ2xlSWNvbigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50b2dnbGVJY29uLnNldCgodGhpcy5pc0NvbGxhcHNlZCgpKSA/ICdhcnJvd191cF9maWxsZWQnIDogJ2Fycm93X2Rvd25fZmlsbGVkJyk7XG4gICAgfVxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPGRpdiBjbGFzcz1cImNhcmQgYm9yZGVyIHNoYWRvdy1zbVwiICpuZ0lmPVwiYm9keVN1YnBhbmVscygpPy5sZW5ndGhcIj5cbiAgICA8ZGl2IG5nYkFjY29yZGlvbiBjbGFzcz1cInN1Yi1wYW5lbC1iYW5uZXJcIiAjYWNjb3JkaW9uPVwibmdiQWNjb3JkaW9uXCIgYWN0aXZlSWRzPVwic3ViLXBhbmVsLWJ1dHRvbnNcIj5cbiAgICAgICAgPGRpdiBuZ2JBY2NvcmRpb25JdGVtIGlkPVwic3ViLXBhbmVsLWJ1dHRvbnNcIiBjbGFzcz1cImNhcmRcIiBbY29sbGFwc2VkXT1cImlzQ29sbGFwc2VkKClcIj5cbiAgICAgICAgICAgIDxkaXYgbmdiQWNjb3JkaW9uSGVhZGVyIGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtc3RhcnQgc3ViLXBhbmVsLWJhbm5lci1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJ0b2dnbGVTdWJQYW5lbHMoKVwiIGNsYXNzPVwiY2xpY2thYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tbGFiZWwgbGFiZWxLZXk9XCJMQkxfUkVMQVRJT05TSElQU1wiPjwvc2NybS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWVuZFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGluc2lnaHQtcGFuZWxcIiAqbmdJZj1cImlzQ29sbGFwc2VkKClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWF1dG8gbXItMyBpbnNpZ2h0LXBhbmVsLWNhcmQgYm9yZGVyLWluc2lnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IHN1YnBhbmVsS2V5IG9mIGhlYWRlclN1YnBhbmVscygpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnc3ViLXBhbmVsLWJhbm5lci1idXR0b24tYWN0aXZlJzogc3VicGFuZWxzW3N1YnBhbmVsS2V5XS5zaG93ID09PSB0cnVlfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwic2hvd1N1YnBhbmVsKHN1YnBhbmVsc1tzdWJwYW5lbEtleV0ubWV0YWRhdGEubmFtZSwgc3VicGFuZWxzW3N1YnBhbmVsS2V5XSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tZ3JpZC13aWRnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29uZmlnXT1cImdldEdyaWRDb25maWcoc3VicGFuZWxzW3N1YnBhbmVsS2V5XSlcIj48L3Njcm0tZ3JpZC13aWRnZXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgc3ViLXBhbmVsLWhlYWRlci10b2dnbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVwidG9nZ2xlU3ViUGFuZWxzKClcIiBjbGFzcz1cImNsaWNrYWJsZSBwb3NpdGlvbi1yZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNDb2xsYXBzZWQoKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0taW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1leHBhbmRlZF09XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpbWFnZV09XCInY2hldnJvbi1kb3duJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJjb2xsYXBzZVNob3dTdWJQYW5lbHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZsb2F0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Njcm0taW1hZ2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWlzQ29sbGFwc2VkKClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtZXhwYW5kZWRdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpbWFnZV09XCInY2hldnJvbi11cCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwiY29sbGFwc2VTaG93U3ViUGFuZWxzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmbG9hdC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zY3JtLWltYWdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IG5nYkFjY29yZGlvbkNvbGxhcHNlPlxuICAgICAgICAgICAgICAgIDxkaXYgbmdiQWNjb3JkaW9uQm9keT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImNvbGxhcHNlU2hvd1N1YlBhbmVsc1wiIGNsYXNzPVwic3ViLXBhbmVsLWJhbm5lci1ib2R5IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlciBib3JkZXItYm90dG9tIGJvcmRlci10b3AgcHQtMiBwYi0zIG1sLTIgbXItMiBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwic3ViLXBhbmVsLWJhbm5lci1ib2R5LXRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzcz1cImluc2lnaHQtcGFuZWwgc3ViLXBhbmVsLWJhbm5lci1ib2R5LXRhYmxlLXJvd1wiICpuZ0Zvcj1cImxldCBzdWJwYW5lbFJvdyBvZiBib2R5U3VicGFuZWxzKClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgc3VicGFuZWxLZXkgb2Ygc3VicGFuZWxSb3dcIiBjbGFzcz1cInN1Yi1wYW5lbC1iYW5uZXItYm9keS10YWJsZS1jb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic3VicGFuZWxLZXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluc2lnaHQtcGFuZWwtY2FyZCBib3JkZXItaW5zaWdodCBwbC0yIHByLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnc3ViLXBhbmVsLWJhbm5lci1idXR0b24tYWN0aXZlJzogc3VicGFuZWxzW3N1YnBhbmVsS2V5XS5zaG93ID09PSB0cnVlfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInNob3dTdWJwYW5lbChzdWJwYW5lbHNbc3VicGFuZWxLZXldLm1ldGFkYXRhLm5hbWUsIHN1YnBhbmVsc1tzdWJwYW5lbEtleV0pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1ncmlkLXdpZGdldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29uZmlnXT1cImdldEdyaWRDb25maWcoc3VicGFuZWxzW3N1YnBhbmVsS2V5XSlcIj48L3Njcm0tZ3JpZC13aWRnZXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJzdWItcGFuZWxzIHt7KGlzQ29sbGFwc2VkKCkgJiYgIW9wZW5TdWJwYW5lbHMoKT8ubGVuZ3RoKSA/ICdwYi0xJyA6ICcnfX1cIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgc3VicGFuZWxLZXkgb2YgdGhpcy5vcGVuU3VicGFuZWxzKClcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIoc3VicGFuZWxzW3N1YnBhbmVsS2V5XSkgYXMgaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxzY3JtLXN1YnBhbmVsICpuZ0lmPVwiaXRlbS5zaG93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbWF4Q29sdW1ucyRdPVwibWF4Q29sdW1ucyRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzdG9yZV09XCJpdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZmlsdGVyQ29uZmlnXT1cImZpbHRlckNvbmZpZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW29uQ2xvc2VdPVwiZ2V0Q2xvc2VDYWxsQmFjayhzdWJwYW5lbEtleSwgaXRlbSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic3ViLXBhbmVsIG1pbmltYWwtdGFibGVcIj5cbiAgICAgICAgICAgICAgICA8L3Njcm0tc3VicGFuZWw+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8L2Rpdj5cblxuPC9kaXY+XG4iXX0=