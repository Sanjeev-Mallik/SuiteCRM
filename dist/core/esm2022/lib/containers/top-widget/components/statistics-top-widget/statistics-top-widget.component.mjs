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
import { BaseWidgetComponent } from '../../../widgets/base-widget.model';
import { SingleValueStatisticsStoreFactory } from '../../../../store/single-value-statistics/single-value-statistics.store.factory';
import { map, take } from 'rxjs/operators';
import { LanguageStore } from '../../../../store/language/language.store';
import { combineLatestWith, of } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/language/language.store";
import * as i2 from "../../../../store/single-value-statistics/single-value-statistics.store.factory";
import * as i3 from "@angular/common";
import * as i4 from "../../../../fields/field.component";
function StatisticsTopWidgetComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "uppercase");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const vm_r1 = i0.ɵɵnextContext().ngIf;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, vm_r1.appStrings[ctx_r1.messageLabelKey] || ""), " ");
} }
function StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_2_ng_container_2_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "uppercase");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, ctx_r1.getLabel(item_r3.value.labelKey)), ": ");
} }
function StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_2_ng_container_2_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "uppercase");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, ctx_r1.getLabel(item_r3.value.labelKey)), " ");
} }
function StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_2_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtemplate(1, StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_2_ng_container_2_div_1_ng_container_1_Template, 3, 3, "ng-container", 3)(2, StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_2_ng_container_2_div_1_ng_container_2_Template, 3, 3, "ng-container", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext(2).$implicit;
    const vm_r1 = i0.ɵɵnextContext(2).ngIf;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.isValueEmpty(vm_r1.statistics[item_r3.key]));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isValueEmpty(vm_r1.statistics[item_r3.key]));
} }
function StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_2_ng_container_2_div_1_Template, 3, 2, "div", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r3.value.labelKey && ctx_r1.getLabel(item_r3.value.labelKey));
} }
function StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_2_ng_container_3_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-field", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext(3).$implicit;
    const vm_r1 = i0.ɵɵnextContext(2).ngIf;
    i0.ɵɵadvance();
    i0.ɵɵproperty("type", vm_r1.statistics[item_r3.key].field.type)("field", vm_r1.statistics[item_r3.key].field);
} }
function StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_2_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵtemplate(1, StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_2_ng_container_3_div_1_ng_container_1_Template, 2, 2, "ng-container", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext(2).$implicit;
    const vm_r1 = i0.ɵɵnextContext(2).ngIf;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.isValueEmpty(vm_r1.statistics[item_r3.key]) || item_r3.value.hideValueIfEmpty !== true);
} }
function StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_2_ng_container_3_div_1_Template, 2, 1, "div", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext().$implicit;
    const vm_r1 = i0.ɵɵnextContext(2).ngIf;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !vm_r1.statistics[item_r3.key].loading && vm_r1.statistics[item_r3.key].field);
} }
function StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_2_div_4_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, " - ");
    i0.ɵɵelementContainerEnd();
} }
function StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_2_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14)(1, "div", 15)(2, "div", 16);
    i0.ɵɵtext(3, " . ");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(4, StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_2_div_4_ng_container_4_Template, 2, 0, "ng-container", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const loading_r4 = ctx.ngIf;
    const item_r3 = i0.ɵɵnextContext().$implicit;
    const vm_r1 = i0.ɵɵnextContext(2).ngIf;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", !loading_r4 && (!item_r3.key || !vm_r1.statistics[item_r3.key]));
} }
function StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_2_ng_container_6_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "uppercase");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, ctx_r1.getLabel(item_r3.value.endLabelKey)), " ");
} }
function StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_2_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_2_ng_container_6_div_1_Template, 3, 3, "div", 17);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r3.value.endLabelKey && ctx_r1.getLabel(item_r3.value.endLabelKey));
} }
function StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 7);
    i0.ɵɵtemplate(2, StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_2_ng_container_2_Template, 2, 1, "ng-container", 3)(3, StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 3)(4, StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_2_div_4_Template, 5, 1, "div", 8);
    i0.ɵɵpipe(5, "async");
    i0.ɵɵtemplate(6, StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_2_ng_container_6_Template, 2, 1, "ng-container", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const i_r5 = ctx.index;
    const isLast_r6 = ctx.last;
    const total_r7 = ctx.count;
    const vm_r1 = i0.ɵɵnextContext(2).ngIf;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassProp("border-right", total_r7 > 1 && i_r5 % 2 === 0 && !isLast_r6)("col", total_r7 === 1)("col-6", total_r7 >= 2)("mt-3", total_r7 >= 2 && i_r5 > 2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.shouldHide(vm_r1.statistics[item_r3.key], item_r3.value));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r3.key && vm_r1.statistics[item_r3.key] && !ctx_r1.shouldHide(vm_r1.statistics[item_r3.key], item_r3.value));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(5, 12, item_r3.value.store.loading$));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.shouldHide(vm_r1.statistics[item_r3.key], item_r3.value));
} }
function StatisticsTopWidgetComponent_div_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵtemplate(2, StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_2_Template, 7, 14, "ng-container", 6);
    i0.ɵɵpipe(3, "keyvalue");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(3, 1, ctx_r1.statistics));
} }
function StatisticsTopWidgetComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 19)(2, "div", 12)(3, "div", 15)(4, "div", 16);
    i0.ɵɵtext(5, " . ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "div", 20);
    i0.ɵɵtext(7, " . ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 19)(9, "div", 12)(10, "div", 15)(11, "div", 16);
    i0.ɵɵtext(12, " . ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(13, "div", 20);
    i0.ɵɵtext(14, " . ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} }
function StatisticsTopWidgetComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, StatisticsTopWidgetComponent_div_0_div_1_Template, 3, 3, "div", 2)(2, StatisticsTopWidgetComponent_div_0_ng_container_2_Template, 4, 3, "ng-container", 3)(3, StatisticsTopWidgetComponent_div_0_ng_container_3_Template, 15, 0, "ng-container", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.messageLabelKey);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.loading());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.loading());
} }
export class StatisticsTopWidgetComponent extends BaseWidgetComponent {
    constructor(language, factory) {
        super();
        this.language = language;
        this.factory = factory;
        this.statistics = {};
        this.loading = signal(true);
        this.subs = [];
        this.signal = signal;
    }
    ngOnInit() {
        if (!this.context || !this.context.module) {
            this.messageLabelKey = 'LBL_CONFIG_BAD_CONTEXT';
            return;
        }
        if (!this.config) {
            this.messageLabelKey = 'LBL_CONFIG_NO_CONFIG';
            return;
        }
        if (!this.config.options || !this.config.options.statistics || !this.config.options.statistics.length) {
            this.messageLabelKey = 'LBL_CONFIG_NO_STATISTICS_KEY';
            return;
        }
        if (this.context$) {
            this.subs.push(this.context$.subscribe((context) => {
                this.context = context;
            }));
        }
        const statistics$ = [];
        const loadings$ = [];
        this.config.options.statistics.forEach(statistic => {
            if (!statistic.type) {
                return;
            }
            this.statistics[statistic.type] = {
                labelKey: statistic.labelKey || '',
                endLabelKey: statistic.endLabelKey || '',
                hideValueIfEmpty: statistic.hideValueIfEmpty || false,
                type: statistic.type,
                store: this.factory.create()
            };
            this.statistics[statistic.type].store.init(this.context.module, {
                key: statistic.type,
                context: { ...this.context }
            }).pipe(take(1)).subscribe();
            statistics$.push(this.statistics[statistic.type].store.state$);
            loadings$.push(this.statistics[statistic.type].store.loading$);
        });
        let statisticObs = null;
        if (statistics$.length < 1) {
            statisticObs = of([]);
        }
        else if (statistics$.length === 1) {
            statisticObs = statistics$[0].pipe(map(value => [value]));
        }
        else {
            let firsObs = null;
            let others;
            [firsObs, ...others] = statistics$;
            statisticObs = firsObs.pipe(combineLatestWith(others));
        }
        this.loading$ = loadings$[0].pipe(combineLatestWith(...loadings$), map((loadings) => {
            if (!loadings || loadings.length < 1) {
                this.loading.set(false);
                return false;
            }
            let loading = true;
            loadings.forEach(value => {
                loading = loading && value;
            });
            this.loading.set(loading);
            return loading;
        }));
        this.subs.push(this.loading$.subscribe());
        this.vm$ = statisticObs.pipe(combineLatestWith(this.language.appStrings$), map(([statistics, appStrings]) => {
            const statsMap = {};
            statistics.forEach(value => {
                statsMap[value.query.key] = value;
                this.statistics[value.query.key].labelKey = this.getMetadataEntry(value, 'labelKey');
                this.statistics[value.query.key].endLabelKey = this.getMetadataEntry(value, 'endLabelKey');
            });
            return {
                statistics: statsMap,
                appStrings
            };
        }));
        if (this.config.reload$) {
            this.subs.push(this.config.reload$.subscribe(() => {
                if (this.loading() === false) {
                    this.loading.set(true);
                    this.config.options.statistics.forEach(statistic => {
                        if (!statistic.type) {
                            return;
                        }
                        if (!this.statistics[statistic.type] || !this.statistics[statistic.type].store) {
                            return;
                        }
                        this.statistics[statistic.type].store.load(false).pipe(take(1)).subscribe();
                    });
                }
            }));
        }
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    /**
     * Check if statistics should be hidden
     * @param stats
     * @param item
     */
    shouldHide(stats, item) {
        return this.hasLoaded(stats) && this.isValueEmpty(stats) && item.hideIfEmpty === true;
    }
    /**
     * Check if statistics have been loaded
     * @param stats
     */
    hasLoaded(stats) {
        return !stats.loading;
    }
    /**
     * Check if value is empty
     * @param stats
     */
    isValueEmpty(stats) {
        const emptyValue = stats?.statistic?.metadata?.emptyValueString ?? null;
        if (emptyValue !== null) {
            return true;
        }
        const value = stats?.field?.value ?? null;
        if (value) {
            return false;
        }
        return emptyValue === value;
    }
    /**
     * Get metadata entry for statistic
     * @param stat
     * @param name
     */
    getMetadataEntry(stat, name) {
        const value = stat.statistic.metadata && stat.statistic.metadata[name];
        if (value !== null && typeof value !== 'undefined') {
            return value;
        }
        return this.statistics[stat.query.key][name];
    }
    /**
     * Get label value
     * @param key
     */
    getLabel(key) {
        const context = this.context || {};
        const module = context.module || '';
        return this.language.getFieldLabel(key, module);
    }
    static { this.ɵfac = function StatisticsTopWidgetComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StatisticsTopWidgetComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore), i0.ɵɵdirectiveInject(i2.SingleValueStatisticsStoreFactory)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StatisticsTopWidgetComponent, selectors: [["scrm-statistics-top-widget"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 3, consts: [["class", "d-sm-flex justify-content-center widget-bar rounded container-fluid p-0", 4, "ngIf"], [1, "d-sm-flex", "justify-content-center", "widget-bar", "rounded", "container-fluid", "p-0"], ["class", "p-2 widget-bar-entry-message", 4, "ngIf"], [4, "ngIf"], [1, "p-2", "widget-bar-entry-message"], [1, "d-flex", "h-100", "row", "justify-content-center", "align-items-center", "w-100", "mt-3", "mb-3", "mr-0", "ml-0"], [4, "ngFor", "ngForOf"], [1, "d-flex", "h-100", "flex-column", "justify-content-start", "align-items-center", "widget-bar-entry"], ["class", "pl-1 pr-1 widget-bar-entry-loading", 4, "ngIf"], ["class", "pr-1 widget-bar-entry-label", 4, "ngIf"], [1, "pr-1", "widget-bar-entry-label"], ["class", "pl-1 pr-1 widget-bar-entry-value", 4, "ngIf"], [1, "pl-1", "pr-1", "widget-bar-entry-value"], ["mode", "list", 3, "type", "field"], [1, "pl-1", "pr-1", "widget-bar-entry-loading"], [1, "pb-2"], [1, "large-size-text-skeleton", "small-length-text-skeleton", "rounded", "box-loading", "skeleton-field-content"], ["class", "pl-1 widget-bar-entry-end-label", 4, "ngIf"], [1, "pl-1", "widget-bar-entry-end-label"], [1, "d-flex", "flex-column", "justify-content-center", "align-items-baseline", "widget-bar-entry", "p-2"], [1, "pr-1", "widget-bar-entry-label", "large-length-text-skeleton", "rounded", "box-loading", "skeleton-field-content"]], template: function StatisticsTopWidgetComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, StatisticsTopWidgetComponent_div_0_Template, 4, 3, "div", 0);
            i0.ɵɵpipe(1, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.vm$));
        } }, dependencies: [i3.NgForOf, i3.NgIf, i4.FieldComponent, i3.AsyncPipe, i3.UpperCasePipe, i3.KeyValuePipe], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StatisticsTopWidgetComponent, [{
        type: Component,
        args: [{ selector: 'scrm-statistics-top-widget', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div *ngIf=\"(vm$ | async) as vm\"\n     class=\"d-sm-flex justify-content-center widget-bar rounded container-fluid p-0\">\n    <div class=\"p-2 widget-bar-entry-message\" *ngIf=\"this.messageLabelKey\">\n        {{vm.appStrings[this.messageLabelKey] || '' | uppercase}}\n    </div>\n    <ng-container *ngIf=\"!loading()\">\n        <div class=\"d-flex h-100 row justify-content-center align-items-center w-100 mt-3 mb-3 mr-0 ml-0\">\n            <ng-container *ngFor=\"let item of statistics | keyvalue; index as i; last as isLast; count as total\">\n                <div class=\"d-flex h-100 flex-column justify-content-start align-items-center widget-bar-entry\"\n                    [class.border-right]=\"total > 1 && i%2 === 0 && !isLast\"\n                    [class.col]=\"total === 1\"\n                    [class.col-6]=\"total >= 2\"\n                    [class.mt-3]=\"total >= 2 && i>2\">\n\n                    <ng-container *ngIf=\"!shouldHide(vm.statistics[item.key], item.value)\">\n\n                        <div *ngIf=\"item.value.labelKey && getLabel(item.value.labelKey)\" class=\"pr-1 widget-bar-entry-label\">\n                            <ng-container *ngIf=\"!isValueEmpty(vm.statistics[item.key])\">\n                                {{getLabel(item.value.labelKey) | uppercase}}:\n                            </ng-container>\n                            <ng-container *ngIf=\"isValueEmpty(vm.statistics[item.key])\">\n                                {{getLabel(item.value.labelKey) | uppercase}}\n                            </ng-container>\n                        </div>\n\n                    </ng-container>\n\n                    <ng-container\n                            *ngIf=\"item.key && vm.statistics[item.key] && !shouldHide(vm.statistics[item.key], item.value)\">\n\n                        <div class=\"pl-1 pr-1 widget-bar-entry-value\"\n                             *ngIf=\"!vm.statistics[item.key].loading && vm.statistics[item.key].field\">\n                            <ng-container\n                                    *ngIf=\"!isValueEmpty(vm.statistics[item.key]) || item.value.hideValueIfEmpty !== true\">\n                                <scrm-field [type]=\"vm.statistics[item.key].field.type\" [field]=\"vm.statistics[item.key].field\"\n                                            mode=\"list\"></scrm-field>\n\n                            </ng-container>\n                        </div>\n\n                    </ng-container>\n\n                    <div class=\"pl-1 pr-1 widget-bar-entry-loading\" *ngIf=\"(item.value.store.loading$ | async) as loading\">\n                        <div class=\"pb-2\">\n                            <div class=\"large-size-text-skeleton small-length-text-skeleton rounded box-loading skeleton-field-content\">\n                                .\n                            </div>\n                        </div>\n\n                        <ng-container *ngIf=\"!loading && (!item.key || !vm.statistics[item.key])\">\n                            -\n                        </ng-container>\n                    </div>\n\n                    <ng-container *ngIf=\"!shouldHide(vm.statistics[item.key], item.value)\">\n\n                        <div *ngIf=\"item.value.endLabelKey && getLabel(item.value.endLabelKey)\"\n                             class=\"pl-1 widget-bar-entry-end-label\">\n                            {{getLabel(item.value.endLabelKey) | uppercase}}\n                        </div>\n\n                    </ng-container>\n\n                </div>\n\n            </ng-container>\n        </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"loading()\">\n        <div class=\"d-flex flex-column justify-content-center align-items-baseline widget-bar-entry p-2\">\n\n            <div class=\"pl-1 pr-1 widget-bar-entry-value\">\n                <div class=\"pb-2\">\n                    <div class=\"large-size-text-skeleton small-length-text-skeleton rounded box-loading skeleton-field-content\">\n                        .\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"pr-1 widget-bar-entry-label large-length-text-skeleton rounded box-loading skeleton-field-content\">\n                .\n            </div>\n\n\n        </div>\n        <div class=\"d-flex flex-column justify-content-center align-items-baseline widget-bar-entry p-2\">\n\n            <div class=\"pl-1 pr-1 widget-bar-entry-value\">\n                <div class=\"pb-2\">\n                    <div class=\"large-size-text-skeleton small-length-text-skeleton rounded box-loading skeleton-field-content\">\n                        .\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"pr-1 widget-bar-entry-label large-length-text-skeleton rounded box-loading skeleton-field-content\">\n                .\n            </div>\n\n\n        </div>\n    </ng-container>\n</div>\n" }]
    }], () => [{ type: i1.LanguageStore }, { type: i2.SingleValueStatisticsStoreFactory }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StatisticsTopWidgetComponent, { className: "StatisticsTopWidgetComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGlzdGljcy10b3Atd2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb250YWluZXJzL3RvcC13aWRnZXQvY29tcG9uZW50cy9zdGF0aXN0aWNzLXRvcC13aWRnZXQvc3RhdGlzdGljcy10b3Atd2lkZ2V0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb250YWluZXJzL3RvcC13aWRnZXQvY29tcG9uZW50cy9zdGF0aXN0aWNzLXRvcC13aWRnZXQvc3RhdGlzdGljcy10b3Atd2lkZ2V0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFxQixNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLG9DQUFvQyxDQUFDO0FBRXZFLE9BQU8sRUFDSCxpQ0FBaUMsRUFDcEMsTUFBTSxpRkFBaUYsQ0FBQztBQUN6RixPQUFPLEVBQUMsR0FBRyxFQUFFLElBQUksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3pDLE9BQU8sRUFBQyxhQUFhLEVBQW9CLE1BQU0sMkNBQTJDLENBQUM7QUFDM0YsT0FBTyxFQUFDLGlCQUFpQixFQUFjLEVBQUUsRUFBZSxNQUFNLE1BQU0sQ0FBQzs7Ozs7OztJQ0xqRSw4QkFBdUU7SUFDbkUsWUFDSjs7SUFBQSxpQkFBTTs7OztJQURGLGNBQ0o7SUFESSxxR0FDSjs7O0lBYXdCLDZCQUE2RDtJQUN6RCxZQUNKOzs7Ozs7SUFESSxjQUNKO0lBREksK0ZBQ0o7OztJQUNBLDZCQUE0RDtJQUN4RCxZQUNKOzs7Ozs7SUFESSxjQUNKO0lBREksOEZBQ0o7OztJQU5KLCtCQUFzRztJQUlsRyxBQUhBLHdKQUE2RCwySUFHRDtJQUdoRSxpQkFBTTs7Ozs7SUFOYSxjQUE0QztJQUE1QywwRUFBNEM7SUFHNUMsY0FBMkM7SUFBM0MseUVBQTJDOzs7SUFObEUsNkJBQXVFO0lBRW5FLGdJQUFzRzs7Ozs7SUFBaEcsY0FBMEQ7SUFBMUQsd0ZBQTBEOzs7SUFnQjVELDZCQUMrRjtJQUMzRixpQ0FDcUM7Ozs7O0lBRHpCLGNBQTJDO0lBQUMsQUFBNUMsK0RBQTJDLDhDQUF3Qzs7O0lBSnZHLCtCQUMrRTtJQUMzRSx3SkFDK0Y7SUFLbkcsaUJBQU07Ozs7O0lBTE8sY0FBb0Y7SUFBcEYscUhBQW9GOzs7SUFOckcsNkJBQ3dHO0lBRXBHLGlJQUMrRTs7Ozs7SUFBekUsY0FBdUU7SUFBdkUsb0dBQXVFOzs7SUFrQjdFLDZCQUEwRTtJQUN0RSxtQkFDSjs7OztJQVBJLEFBREosQUFESiwrQkFBdUcsY0FDakYsY0FDOEY7SUFDeEcsbUJBQ0o7SUFDSixBQURJLGlCQUFNLEVBQ0o7SUFFTix5SUFBMEU7SUFHOUUsaUJBQU07Ozs7O0lBSGEsZUFBeUQ7SUFBekQsc0ZBQXlEOzs7SUFPeEUsK0JBQzZDO0lBQ3pDLFlBQ0o7O0lBQUEsaUJBQU07Ozs7SUFERixjQUNKO0lBREksaUdBQ0o7OztJQUxKLDZCQUF1RTtJQUVuRSxpSUFDNkM7Ozs7O0lBRHZDLGNBQWdFO0lBQWhFLDhGQUFnRTs7O0lBakRsRiw2QkFBcUc7SUFDakcsOEJBSXFDO0lBOEJqQyxBQWZBLEFBYkEsbUlBQXVFLHNIQWNpQyxvR0FjRDs7SUFZdkcsbUlBQXVFO0lBUzNFLGlCQUFNOzs7Ozs7Ozs7SUF0REYsY0FBd0Q7SUFHeEQsQUFEQSxBQURBLEFBREEsNEVBQXdELHVCQUMvQix3QkFDQyxtQ0FDTTtJQUVqQixjQUFzRDtJQUF0RCx1RkFBc0Q7SUFjNUQsY0FBNkY7SUFBN0YsdUlBQTZGO0lBY3JELGNBQTBDO0lBQTFDLDBFQUEwQztJQVk1RSxlQUFzRDtJQUF0RCx1RkFBc0Q7OztJQWpEckYsNkJBQWlDO0lBQzdCLDhCQUFrRztJQUM5RixxSEFBcUc7O0lBMkR6RyxpQkFBTTs7OztJQTNENkIsZUFBMEI7SUFBMUIsaUVBQTBCOzs7SUE4RGpFLDZCQUFnQztJQUtoQixBQURKLEFBREosQUFGSiwrQkFBaUcsY0FFL0MsY0FDeEIsY0FDOEY7SUFDeEcsbUJBQ0o7SUFFUixBQURJLEFBREksaUJBQU0sRUFDSixFQUNKO0lBRU4sK0JBQStHO0lBQzNHLG1CQUNKO0lBR0osQUFISSxpQkFBTSxFQUdKO0lBS00sQUFESixBQURKLEFBRkosK0JBQWlHLGNBRS9DLGVBQ3hCLGVBQzhGO0lBQ3hHLG9CQUNKO0lBRVIsQUFESSxBQURJLGlCQUFNLEVBQ0osRUFDSjtJQUVOLGdDQUErRztJQUMzRyxvQkFDSjtJQUdKLEFBSEksaUJBQU0sRUFHSjs7OztJQXJHZCw4QkFDcUY7SUFvRWpGLEFBaEVBLEFBSEEsbUZBQXVFLHdGQUd0Qyx5RkFnRUQ7SUFrQ3BDLGlCQUFNOzs7SUFyR3lDLGNBQTBCO0lBQTFCLDZDQUEwQjtJQUd0RCxjQUFnQjtJQUFoQix3Q0FBZ0I7SUFnRWhCLGNBQWU7SUFBZix1Q0FBZTs7QURsQ2xDLE1BQU0sT0FBTyw0QkFBNkIsU0FBUSxtQkFBbUI7SUFRakUsWUFDYyxRQUF1QixFQUN2QixPQUEwQztRQUVwRCxLQUFLLEVBQUUsQ0FBQztRQUhFLGFBQVEsR0FBUixRQUFRLENBQWU7UUFDdkIsWUFBTyxHQUFQLE9BQU8sQ0FBbUM7UUFUeEQsZUFBVSxHQUF1QixFQUFFLENBQUM7UUFJMUIsWUFBTyxHQUE0QixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEQsU0FBSSxHQUFtQixFQUFFLENBQUM7UUFnTmpCLFdBQU0sR0FBRyxNQUFNLENBQUM7SUF6TW5DLENBQUM7SUFHRCxRQUFRO1FBRUosSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxlQUFlLEdBQUcsd0JBQXdCLENBQUM7WUFDaEQsT0FBTztRQUNYLENBQUM7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2YsSUFBSSxDQUFDLGVBQWUsR0FBRyxzQkFBc0IsQ0FBQztZQUM5QyxPQUFPO1FBQ1gsQ0FBQztRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNwRyxJQUFJLENBQUMsZUFBZSxHQUFHLDhCQUE4QixDQUFDO1lBQ3RELE9BQU87UUFDWCxDQUFDO1FBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFvQixFQUFFLEVBQUU7Z0JBQzVELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQzNCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDUixDQUFDO1FBRUQsTUFBTSxXQUFXLEdBQTZDLEVBQUUsQ0FBQztRQUNqRSxNQUFNLFNBQVMsR0FBMEIsRUFBRSxDQUFDO1FBQzVDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFFL0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDbEIsT0FBTztZQUNYLENBQUM7WUFFRCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRztnQkFDOUIsUUFBUSxFQUFFLFNBQVMsQ0FBQyxRQUFRLElBQUksRUFBRTtnQkFDbEMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxXQUFXLElBQUksRUFBRTtnQkFDeEMsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDLGdCQUFnQixJQUFJLEtBQUs7Z0JBQ3JELElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtnQkFDcEIsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO2FBQy9CLENBQUM7WUFFRixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFDbkI7Z0JBQ0ksR0FBRyxFQUFFLFNBQVMsQ0FBQyxJQUFJO2dCQUNuQixPQUFPLEVBQUUsRUFBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUM7YUFDVixDQUN2QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUU1QixXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMvRCxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuRSxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksWUFBWSxHQUFHLElBQUksQ0FBQztRQUV4QixJQUFHLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDeEIsWUFBWSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxQixDQUFDO2FBQU0sSUFBRyxXQUFXLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBQyxDQUFDO1lBQ2hDLFlBQVksR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUM5QixHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQ3hCLENBQUM7UUFDTixDQUFDO2FBQU0sQ0FBQztZQUNKLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLE1BQU0sQ0FBQztZQUNYLENBQUMsT0FBTyxFQUFFLEdBQUcsTUFBTSxDQUFDLEdBQUcsV0FBVyxDQUFDO1lBQ25DLFlBQVksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUN2QixpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FDNUIsQ0FBQztRQUNOLENBQUM7UUFFRixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQzVCLGlCQUFpQixDQUFDLEdBQUcsU0FBUyxDQUFDLEVBQy9CLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ2IsSUFBSSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO2dCQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDeEIsT0FBTyxLQUFLLENBQUM7WUFDakIsQ0FBQztZQUVELElBQUksT0FBTyxHQUFHLElBQUksQ0FBQztZQUVuQixRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNyQixPQUFPLEdBQUcsT0FBTyxJQUFJLEtBQUssQ0FBQztZQUMvQixDQUFDLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRTFCLE9BQU8sT0FBTyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUNMLENBQUM7UUFFRixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFFNUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxZQUFZLENBQUMsSUFBSSxDQUN4QixpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUM1QyxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsRUFBRSxFQUFFO1lBQzdCLE1BQU0sUUFBUSxHQUFrRCxFQUFFLENBQUM7WUFDbkUsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDdkIsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO2dCQUVsQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUM7Z0JBQ3JGLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQztZQUMvRixDQUFDLENBQUMsQ0FBQztZQUVILE9BQU87Z0JBQ0gsVUFBVSxFQUFFLFFBQVE7Z0JBQ3BCLFVBQVU7YUFDYixDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQ0wsQ0FBQztRQUVBLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO2dCQUM5QyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxLQUFLLEVBQUUsQ0FBQztvQkFFM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7d0JBRS9DLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7NEJBQ2xCLE9BQU87d0JBQ1gsQ0FBQzt3QkFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs0QkFDN0UsT0FBTzt3QkFDWCxDQUFDO3dCQUVELElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUNoRixDQUFDLENBQUMsQ0FBQztnQkFFUCxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNSLENBQUM7SUFHTCxDQUFDO0lBRUQsV0FBVztRQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxVQUFVLENBQUMsS0FBaUMsRUFBRSxJQUFxQjtRQUMvRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLElBQUksQ0FBQztJQUMxRixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsU0FBUyxDQUFDLEtBQWlDO1FBQ3ZDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQzFCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxZQUFZLENBQUMsS0FBaUM7UUFDMUMsTUFBTSxVQUFVLEdBQUcsS0FBSyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLElBQUksSUFBSSxDQUFDO1FBQ3hFLElBQUksVUFBVSxLQUFLLElBQUksRUFBRSxDQUFDO1lBQ3RCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRCxNQUFNLEtBQUssR0FBRyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssSUFBSSxJQUFJLENBQUM7UUFFMUMsSUFBSSxLQUFLLEVBQUUsQ0FBQztZQUNSLE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFFRCxPQUFPLFVBQVUsS0FBSyxLQUFLLENBQUM7SUFDaEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxnQkFBZ0IsQ0FBQyxJQUFnQyxFQUFFLElBQVk7UUFDM0QsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkUsSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLE9BQU8sS0FBSyxLQUFLLFdBQVcsRUFBRSxDQUFDO1lBQ2pELE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFFRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsUUFBUSxDQUFDLEdBQVc7UUFDaEIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxFQUFpQixDQUFDO1FBQ2xELE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDO1FBRXBDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3BELENBQUM7NkhBcE5RLDRCQUE0QjtvRUFBNUIsNEJBQTRCO1lDbkN6Qyw2RUFDcUY7OztZQUQvRSxvREFBb0I7OztpRkRtQ2IsNEJBQTRCO2NBTHhDLFNBQVM7MkJBQ0ksNEJBQTRCOztrRkFJN0IsNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIHNpZ25hbCwgV3JpdGFibGVTaWduYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCYXNlV2lkZ2V0Q29tcG9uZW50fSBmcm9tICcuLi8uLi8uLi93aWRnZXRzL2Jhc2Utd2lkZ2V0Lm1vZGVsJztcbmltcG9ydCB7U2luZ2xlVmFsdWVTdGF0aXN0aWNzU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3NpbmdsZS12YWx1ZS1zdGF0aXN0aWNzL3NpbmdsZS12YWx1ZS1zdGF0aXN0aWNzLnN0b3JlJztcbmltcG9ydCB7XG4gICAgU2luZ2xlVmFsdWVTdGF0aXN0aWNzU3RvcmVGYWN0b3J5XG59IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3NpbmdsZS12YWx1ZS1zdGF0aXN0aWNzL3NpbmdsZS12YWx1ZS1zdGF0aXN0aWNzLnN0b3JlLmZhY3RvcnknO1xuaW1wb3J0IHttYXAsIHRha2V9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZSwgTGFuZ3VhZ2VTdHJpbmdNYXB9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7Y29tYmluZUxhdGVzdFdpdGgsIE9ic2VydmFibGUsIG9mLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtTdGF0aXN0aWNzUXVlcnl9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9zdGF0aXN0aWNzL3N0YXRpc3RpY3MubW9kZWwnO1xuaW1wb3J0IHtTaW5nbGVWYWx1ZVN0YXRpc3RpY3NTdGF0ZX0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3N0YXRpc3RpY3Mvc3RhdGlzdGljcy1zdG9yZS5tb2RlbCc7XG5pbXBvcnQge1ZpZXdDb250ZXh0fSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vdmlld3Mvdmlldy5tb2RlbCc7XG5cbmludGVyZmFjZSBTdGF0aXN0aWNzVG9wV2lkZ2V0U3RhdGUge1xuICAgIHN0YXRpc3RpY3M6IHsgW2tleTogc3RyaW5nXTogU2luZ2xlVmFsdWVTdGF0aXN0aWNzU3RhdGUgfTtcbiAgICBhcHBTdHJpbmdzOiBMYW5ndWFnZVN0cmluZ01hcDtcbn1cblxuaW50ZXJmYWNlIFN0YXRpc3RpY3NFbnRyeSB7XG4gICAgbGFiZWxLZXk6IHN0cmluZztcbiAgICBlbmRMYWJlbEtleT86IHN0cmluZztcbiAgICBoaWRlVmFsdWVJZkVtcHR5PzogYm9vbGVhbjtcbiAgICBoaWRlSWZFbXB0eT86IGJvb2xlYW47XG4gICAgdHlwZTogc3RyaW5nO1xuICAgIHN0b3JlOiBTaW5nbGVWYWx1ZVN0YXRpc3RpY3NTdG9yZTtcbn1cblxuaW50ZXJmYWNlIFN0YXRpc3RpY3NFbnRyeU1hcCB7XG4gICAgW2tleTogc3RyaW5nXTogU3RhdGlzdGljc0VudHJ5O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tc3RhdGlzdGljcy10b3Atd2lkZ2V0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vc3RhdGlzdGljcy10b3Atd2lkZ2V0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFN0YXRpc3RpY3NUb3BXaWRnZXRDb21wb25lbnQgZXh0ZW5kcyBCYXNlV2lkZ2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHN0YXRpc3RpY3M6IFN0YXRpc3RpY3NFbnRyeU1hcCA9IHt9O1xuICAgIHZtJDogT2JzZXJ2YWJsZTxTdGF0aXN0aWNzVG9wV2lkZ2V0U3RhdGU+O1xuICAgIG1lc3NhZ2VMYWJlbEtleTogc3RyaW5nO1xuICAgIGxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIHByb3RlY3RlZCBsb2FkaW5nOiBXcml0YWJsZVNpZ25hbDxib29sZWFuPiA9IHNpZ25hbCh0cnVlKTtcbiAgICBwcm90ZWN0ZWQgc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBmYWN0b3J5OiBTaW5nbGVWYWx1ZVN0YXRpc3RpY3NTdG9yZUZhY3RvcnlcbiAgICApIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgICAgIGlmICghdGhpcy5jb250ZXh0IHx8ICF0aGlzLmNvbnRleHQubW9kdWxlKSB7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VMYWJlbEtleSA9ICdMQkxfQ09ORklHX0JBRF9DT05URVhUJztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5jb25maWcpIHtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUxhYmVsS2V5ID0gJ0xCTF9DT05GSUdfTk9fQ09ORklHJztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5jb25maWcub3B0aW9ucyB8fCAhdGhpcy5jb25maWcub3B0aW9ucy5zdGF0aXN0aWNzIHx8ICF0aGlzLmNvbmZpZy5vcHRpb25zLnN0YXRpc3RpY3MubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VMYWJlbEtleSA9ICdMQkxfQ09ORklHX05PX1NUQVRJU1RJQ1NfS0VZJztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQkKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLmNvbnRleHQkLnN1YnNjcmliZSgoY29udGV4dDogVmlld0NvbnRleHQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3RhdGlzdGljcyQ6IE9ic2VydmFibGU8U2luZ2xlVmFsdWVTdGF0aXN0aWNzU3RhdGU+W10gPSBbXTtcbiAgICAgICAgY29uc3QgbG9hZGluZ3MkOiBPYnNlcnZhYmxlPGJvb2xlYW4+W10gPSBbXTtcbiAgICAgICAgdGhpcy5jb25maWcub3B0aW9ucy5zdGF0aXN0aWNzLmZvckVhY2goc3RhdGlzdGljID0+IHtcblxuICAgICAgICAgICAgaWYgKCFzdGF0aXN0aWMudHlwZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zdGF0aXN0aWNzW3N0YXRpc3RpYy50eXBlXSA9IHtcbiAgICAgICAgICAgICAgICBsYWJlbEtleTogc3RhdGlzdGljLmxhYmVsS2V5IHx8ICcnLFxuICAgICAgICAgICAgICAgIGVuZExhYmVsS2V5OiBzdGF0aXN0aWMuZW5kTGFiZWxLZXkgfHwgJycsXG4gICAgICAgICAgICAgICAgaGlkZVZhbHVlSWZFbXB0eTogc3RhdGlzdGljLmhpZGVWYWx1ZUlmRW1wdHkgfHwgZmFsc2UsXG4gICAgICAgICAgICAgICAgdHlwZTogc3RhdGlzdGljLnR5cGUsXG4gICAgICAgICAgICAgICAgc3RvcmU6IHRoaXMuZmFjdG9yeS5jcmVhdGUoKVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5zdGF0aXN0aWNzW3N0YXRpc3RpYy50eXBlXS5zdG9yZS5pbml0KFxuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5tb2R1bGUsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IHN0YXRpc3RpYy50eXBlLFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiB7Li4udGhpcy5jb250ZXh0fVxuICAgICAgICAgICAgICAgIH0gYXMgU3RhdGlzdGljc1F1ZXJ5LFxuICAgICAgICAgICAgKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgpO1xuXG4gICAgICAgICAgICBzdGF0aXN0aWNzJC5wdXNoKHRoaXMuc3RhdGlzdGljc1tzdGF0aXN0aWMudHlwZV0uc3RvcmUuc3RhdGUkKTtcbiAgICAgICAgICAgIGxvYWRpbmdzJC5wdXNoKHRoaXMuc3RhdGlzdGljc1tzdGF0aXN0aWMudHlwZV0uc3RvcmUubG9hZGluZyQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgc3RhdGlzdGljT2JzID0gbnVsbDtcblxuICAgICAgICBpZihzdGF0aXN0aWNzJC5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICBzdGF0aXN0aWNPYnMgPSBvZihbXSk7XG4gICAgICAgIH0gZWxzZSBpZihzdGF0aXN0aWNzJC5sZW5ndGggPT09IDEpe1xuICAgICAgICAgICAgc3RhdGlzdGljT2JzID0gc3RhdGlzdGljcyRbMF0ucGlwZShcbiAgICAgICAgICAgICAgICBtYXAodmFsdWUgPT4gW3ZhbHVlXSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZmlyc09icyA9IG51bGw7XG4gICAgICAgICAgICBsZXQgb3RoZXJzO1xuICAgICAgICAgICAgW2ZpcnNPYnMsIC4uLm90aGVyc10gPSBzdGF0aXN0aWNzJDtcbiAgICAgICAgICAgIHN0YXRpc3RpY09icyA9IGZpcnNPYnMucGlwZShcbiAgICAgICAgICAgICAgICBjb21iaW5lTGF0ZXN0V2l0aChvdGhlcnMpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICB0aGlzLmxvYWRpbmckID0gbG9hZGluZ3MkWzBdLnBpcGUoXG4gICAgICAgICAgICBjb21iaW5lTGF0ZXN0V2l0aCguLi5sb2FkaW5ncyQpLFxuICAgICAgICAgICAgbWFwKChsb2FkaW5ncykgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghbG9hZGluZ3MgfHwgbG9hZGluZ3MubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcuc2V0KGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCBsb2FkaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIGxvYWRpbmdzLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nID0gbG9hZGluZyAmJiB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZy5zZXQobG9hZGluZyk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbG9hZGluZztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5sb2FkaW5nJC5zdWJzY3JpYmUoKSk7XG5cbiAgICAgIHRoaXMudm0kID0gc3RhdGlzdGljT2JzLnBpcGUoXG4gICAgICAgICAgY29tYmluZUxhdGVzdFdpdGgodGhpcy5sYW5ndWFnZS5hcHBTdHJpbmdzJCksXG4gICAgICAgICAgbWFwKChbc3RhdGlzdGljcywgYXBwU3RyaW5nc10pID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc3RhdHNNYXA6IHsgW2tleTogc3RyaW5nXTogU2luZ2xlVmFsdWVTdGF0aXN0aWNzU3RhdGUgfSA9IHt9O1xuICAgICAgICAgICAgICBzdGF0aXN0aWNzLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgICAgc3RhdHNNYXBbdmFsdWUucXVlcnkua2V5XSA9IHZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRpc3RpY3NbdmFsdWUucXVlcnkua2V5XS5sYWJlbEtleSA9IHRoaXMuZ2V0TWV0YWRhdGFFbnRyeSh2YWx1ZSwgJ2xhYmVsS2V5Jyk7XG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRpc3RpY3NbdmFsdWUucXVlcnkua2V5XS5lbmRMYWJlbEtleSA9IHRoaXMuZ2V0TWV0YWRhdGFFbnRyeSh2YWx1ZSwgJ2VuZExhYmVsS2V5Jyk7XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICBzdGF0aXN0aWNzOiBzdGF0c01hcCxcbiAgICAgICAgICAgICAgICAgIGFwcFN0cmluZ3NcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgICAgICBpZiAodGhpcy5jb25maWcucmVsb2FkJCkge1xuICAgICAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5jb25maWcucmVsb2FkJC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvYWRpbmcoKSA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcuc2V0KHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5vcHRpb25zLnN0YXRpc3RpY3MuZm9yRWFjaChzdGF0aXN0aWMgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXN0YXRpc3RpYy50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc3RhdGlzdGljc1tzdGF0aXN0aWMudHlwZV0gfHwgIXRoaXMuc3RhdGlzdGljc1tzdGF0aXN0aWMudHlwZV0uc3RvcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGlzdGljc1tzdGF0aXN0aWMudHlwZV0uc3RvcmUubG9hZChmYWxzZSkucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cblxuXG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3Vicy5mb3JFYWNoKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgc3RhdGlzdGljcyBzaG91bGQgYmUgaGlkZGVuXG4gICAgICogQHBhcmFtIHN0YXRzXG4gICAgICogQHBhcmFtIGl0ZW1cbiAgICAgKi9cbiAgICBzaG91bGRIaWRlKHN0YXRzOiBTaW5nbGVWYWx1ZVN0YXRpc3RpY3NTdGF0ZSwgaXRlbTogU3RhdGlzdGljc0VudHJ5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc0xvYWRlZChzdGF0cykgJiYgdGhpcy5pc1ZhbHVlRW1wdHkoc3RhdHMpICYmIGl0ZW0uaGlkZUlmRW1wdHkgPT09IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgc3RhdGlzdGljcyBoYXZlIGJlZW4gbG9hZGVkXG4gICAgICogQHBhcmFtIHN0YXRzXG4gICAgICovXG4gICAgaGFzTG9hZGVkKHN0YXRzOiBTaW5nbGVWYWx1ZVN0YXRpc3RpY3NTdGF0ZSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gIXN0YXRzLmxvYWRpbmc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdmFsdWUgaXMgZW1wdHlcbiAgICAgKiBAcGFyYW0gc3RhdHNcbiAgICAgKi9cbiAgICBpc1ZhbHVlRW1wdHkoc3RhdHM6IFNpbmdsZVZhbHVlU3RhdGlzdGljc1N0YXRlKSB7XG4gICAgICAgIGNvbnN0IGVtcHR5VmFsdWUgPSBzdGF0cz8uc3RhdGlzdGljPy5tZXRhZGF0YT8uZW1wdHlWYWx1ZVN0cmluZyA/PyBudWxsO1xuICAgICAgICBpZiAoZW1wdHlWYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2YWx1ZSA9IHN0YXRzPy5maWVsZD8udmFsdWUgPz8gbnVsbDtcblxuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbXB0eVZhbHVlID09PSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgbWV0YWRhdGEgZW50cnkgZm9yIHN0YXRpc3RpY1xuICAgICAqIEBwYXJhbSBzdGF0XG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKi9cbiAgICBnZXRNZXRhZGF0YUVudHJ5KHN0YXQ6IFNpbmdsZVZhbHVlU3RhdGlzdGljc1N0YXRlLCBuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHN0YXQuc3RhdGlzdGljLm1ldGFkYXRhICYmIHN0YXQuc3RhdGlzdGljLm1ldGFkYXRhW25hbWVdO1xuICAgICAgICBpZiAodmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGlzdGljc1tzdGF0LnF1ZXJ5LmtleV1bbmFtZV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGxhYmVsIHZhbHVlXG4gICAgICogQHBhcmFtIGtleVxuICAgICAqL1xuICAgIGdldExhYmVsKGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuY29udGV4dCB8fCB7fSBhcyBWaWV3Q29udGV4dDtcbiAgICAgICAgY29uc3QgbW9kdWxlID0gY29udGV4dC5tb2R1bGUgfHwgJyc7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubGFuZ3VhZ2UuZ2V0RmllbGRMYWJlbChrZXksIG1vZHVsZSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHNpZ25hbCA9IHNpZ25hbDtcbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjxkaXYgKm5nSWY9XCIodm0kIHwgYXN5bmMpIGFzIHZtXCJcbiAgICAgY2xhc3M9XCJkLXNtLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciB3aWRnZXQtYmFyIHJvdW5kZWQgY29udGFpbmVyLWZsdWlkIHAtMFwiPlxuICAgIDxkaXYgY2xhc3M9XCJwLTIgd2lkZ2V0LWJhci1lbnRyeS1tZXNzYWdlXCIgKm5nSWY9XCJ0aGlzLm1lc3NhZ2VMYWJlbEtleVwiPlxuICAgICAgICB7e3ZtLmFwcFN0cmluZ3NbdGhpcy5tZXNzYWdlTGFiZWxLZXldIHx8ICcnIHwgdXBwZXJjYXNlfX1cbiAgICA8L2Rpdj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWxvYWRpbmcoKVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGgtMTAwIHJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciB3LTEwMCBtdC0zIG1iLTMgbXItMCBtbC0wXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIHN0YXRpc3RpY3MgfCBrZXl2YWx1ZTsgaW5kZXggYXMgaTsgbGFzdCBhcyBpc0xhc3Q7IGNvdW50IGFzIHRvdGFsXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBoLTEwMCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtc3RhcnQgYWxpZ24taXRlbXMtY2VudGVyIHdpZGdldC1iYXItZW50cnlcIlxuICAgICAgICAgICAgICAgICAgICBbY2xhc3MuYm9yZGVyLXJpZ2h0XT1cInRvdGFsID4gMSAmJiBpJTIgPT09IDAgJiYgIWlzTGFzdFwiXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzcy5jb2xdPVwidG90YWwgPT09IDFcIlxuICAgICAgICAgICAgICAgICAgICBbY2xhc3MuY29sLTZdPVwidG90YWwgPj0gMlwiXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzcy5tdC0zXT1cInRvdGFsID49IDIgJiYgaT4yXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFzaG91bGRIaWRlKHZtLnN0YXRpc3RpY3NbaXRlbS5rZXldLCBpdGVtLnZhbHVlKVwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaXRlbS52YWx1ZS5sYWJlbEtleSAmJiBnZXRMYWJlbChpdGVtLnZhbHVlLmxhYmVsS2V5KVwiIGNsYXNzPVwicHItMSB3aWRnZXQtYmFyLWVudHJ5LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpc1ZhbHVlRW1wdHkodm0uc3RhdGlzdGljc1tpdGVtLmtleV0pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7Z2V0TGFiZWwoaXRlbS52YWx1ZS5sYWJlbEtleSkgfCB1cHBlcmNhc2V9fTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNWYWx1ZUVtcHR5KHZtLnN0YXRpc3RpY3NbaXRlbS5rZXldKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2dldExhYmVsKGl0ZW0udmFsdWUubGFiZWxLZXkpIHwgdXBwZXJjYXNlfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIml0ZW0ua2V5ICYmIHZtLnN0YXRpc3RpY3NbaXRlbS5rZXldICYmICFzaG91bGRIaWRlKHZtLnN0YXRpc3RpY3NbaXRlbS5rZXldLCBpdGVtLnZhbHVlKVwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGwtMSBwci0xIHdpZGdldC1iYXItZW50cnktdmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIiF2bS5zdGF0aXN0aWNzW2l0ZW0ua2V5XS5sb2FkaW5nICYmIHZtLnN0YXRpc3RpY3NbaXRlbS5rZXldLmZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCIhaXNWYWx1ZUVtcHR5KHZtLnN0YXRpc3RpY3NbaXRlbS5rZXldKSB8fCBpdGVtLnZhbHVlLmhpZGVWYWx1ZUlmRW1wdHkgIT09IHRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tZmllbGQgW3R5cGVdPVwidm0uc3RhdGlzdGljc1tpdGVtLmtleV0uZmllbGQudHlwZVwiIFtmaWVsZF09XCJ2bS5zdGF0aXN0aWNzW2l0ZW0ua2V5XS5maWVsZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9XCJsaXN0XCI+PC9zY3JtLWZpZWxkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGwtMSBwci0xIHdpZGdldC1iYXItZW50cnktbG9hZGluZ1wiICpuZ0lmPVwiKGl0ZW0udmFsdWUuc3RvcmUubG9hZGluZyQgfCBhc3luYykgYXMgbG9hZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBiLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFyZ2Utc2l6ZS10ZXh0LXNrZWxldG9uIHNtYWxsLWxlbmd0aC10ZXh0LXNrZWxldG9uIHJvdW5kZWQgYm94LWxvYWRpbmcgc2tlbGV0b24tZmllbGQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFsb2FkaW5nICYmICghaXRlbS5rZXkgfHwgIXZtLnN0YXRpc3RpY3NbaXRlbS5rZXldKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXNob3VsZEhpZGUodm0uc3RhdGlzdGljc1tpdGVtLmtleV0sIGl0ZW0udmFsdWUpXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJpdGVtLnZhbHVlLmVuZExhYmVsS2V5ICYmIGdldExhYmVsKGl0ZW0udmFsdWUuZW5kTGFiZWxLZXkpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwbC0xIHdpZGdldC1iYXItZW50cnktZW5kLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3tnZXRMYWJlbChpdGVtLnZhbHVlLmVuZExhYmVsS2V5KSB8IHVwcGVyY2FzZX19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibG9hZGluZygpXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1iYXNlbGluZSB3aWRnZXQtYmFyLWVudHJ5IHAtMlwiPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGwtMSBwci0xIHdpZGdldC1iYXItZW50cnktdmFsdWVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGItMlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFyZ2Utc2l6ZS10ZXh0LXNrZWxldG9uIHNtYWxsLWxlbmd0aC10ZXh0LXNrZWxldG9uIHJvdW5kZWQgYm94LWxvYWRpbmcgc2tlbGV0b24tZmllbGQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgLlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHItMSB3aWRnZXQtYmFyLWVudHJ5LWxhYmVsIGxhcmdlLWxlbmd0aC10ZXh0LXNrZWxldG9uIHJvdW5kZWQgYm94LWxvYWRpbmcgc2tlbGV0b24tZmllbGQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgIC5cbiAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1iYXNlbGluZSB3aWRnZXQtYmFyLWVudHJ5IHAtMlwiPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGwtMSBwci0xIHdpZGdldC1iYXItZW50cnktdmFsdWVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGItMlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFyZ2Utc2l6ZS10ZXh0LXNrZWxldG9uIHNtYWxsLWxlbmd0aC10ZXh0LXNrZWxldG9uIHJvdW5kZWQgYm94LWxvYWRpbmcgc2tlbGV0b24tZmllbGQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgLlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHItMSB3aWRnZXQtYmFyLWVudHJ5LWxhYmVsIGxhcmdlLWxlbmd0aC10ZXh0LXNrZWxldG9uIHJvdW5kZWQgYm94LWxvYWRpbmcgc2tlbGV0b24tZmllbGQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgIC5cbiAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9uZy1jb250YWluZXI+XG48L2Rpdj5cbiJdfQ==