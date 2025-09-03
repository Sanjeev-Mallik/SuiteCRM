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
import { combineLatestWith, of } from 'rxjs';
import { map, shareReplay, take, tap } from 'rxjs/operators';
import { SingleValueStatisticsStoreFactory } from '../../store/single-value-statistics/single-value-statistics.store.factory';
import { LanguageStore } from '../../store/language/language.store';
import { isTrue } from '../../common/utils/value-utils';
import * as i0 from "@angular/core";
import * as i1 from "../../store/language/language.store";
import * as i2 from "../../store/single-value-statistics/single-value-statistics.store.factory";
import * as i3 from "@angular/common";
import * as i4 from "../../fields/field.component";
import * as i5 from "../inline-loading-spinner/inline-loading-spinner.component";
import * as i6 from "../label/label.component";
import * as i7 from "../image/image.component";
import * as i8 from "../dynamic-label/dynamic-label.component";
import * as i9 from "@ng-bootstrap/ng-bootstrap";
function GridWidgetComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelement(1, "scrm-label", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("labelKey", ctx_r0.messageLabelKey);
} }
function GridWidgetComponent_div_1_ng_container_1_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 7);
    i0.ɵɵelement(2, "scrm-image", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const col_r2 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("image", col_r2.icon)("klass", col_r2.iconClass);
} }
function GridWidgetComponent_div_1_ng_container_1_ng_container_2_ng_container_2_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵelement(1, "scrm-field", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const statistics_r3 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵadvance();
    i0.ɵɵproperty("type", statistics_r3.field.type)("field", statistics_r3.field);
} }
function GridWidgetComponent_div_1_ng_container_1_ng_container_2_ng_container_2_ng_container_2_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13)(1, "div", 14)(2, "div", 15);
    i0.ɵɵtext(3, " ... ");
    i0.ɵɵelementEnd()()();
} }
function GridWidgetComponent_div_1_ng_container_1_ng_container_2_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, GridWidgetComponent_div_1_ng_container_1_ng_container_2_ng_container_2_ng_container_2_div_1_Template, 2, 2, "div", 9)(2, GridWidgetComponent_div_1_ng_container_1_ng_container_2_ng_container_2_ng_container_2_div_2_Template, 4, 0, "div", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const statistics_r3 = ctx.ngIf;
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", statistics_r3.field);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.initializing() || statistics_r3.loading && ctx_r0.loading);
} }
function GridWidgetComponent_div_1_ng_container_1_ng_container_2_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 16);
    i0.ɵɵelement(2, "scrm-label", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const col_r2 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("labelKey", col_r2.labelKey)("module", ctx_r0.getContextModule());
} }
function GridWidgetComponent_div_1_ng_container_1_ng_container_2_ng_container_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 18)(2, "label");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const vm_r4 = i0.ɵɵnextContext(4).ngIf;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(vm_r4.description);
} }
function GridWidgetComponent_div_1_ng_container_1_ng_container_2_ng_container_2_ng_container_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelement(1, "scrm-dynamic-label", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r2 = i0.ɵɵnextContext(3).$implicit;
    const vm_r4 = i0.ɵɵnextContext(2).ngIf;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("context", ctx_r0.getMessageContext())("fields", ctx_r0.getMessageFields(vm_r4.statistics))("labelKey", col_r2.dynamicLabel);
} }
function GridWidgetComponent_div_1_ng_container_1_ng_container_2_ng_container_2_ng_container_5_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelement(1, "scrm-inline-loading-spinner");
    i0.ɵɵelementEnd();
} }
function GridWidgetComponent_div_1_ng_container_1_ng_container_2_ng_container_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, GridWidgetComponent_div_1_ng_container_1_ng_container_2_ng_container_2_ng_container_5_div_1_Template, 2, 3, "div", 19)(2, GridWidgetComponent_div_1_ng_container_1_ng_container_2_ng_container_2_ng_container_5_div_2_Template, 2, 0, "div", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.loading);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.loading);
} }
function GridWidgetComponent_div_1_ng_container_1_ng_container_2_ng_container_2_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtext(2, " - ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const col_r2 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("widget-entry-value ", ctx_r0.getSizeClass(col_r2.size), "");
} }
function GridWidgetComponent_div_1_ng_container_1_ng_container_2_ng_container_2_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, GridWidgetComponent_div_1_ng_container_1_ng_container_2_ng_container_2_ng_container_6_ng_container_1_Template, 3, 3, "ng-container", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const col_r2 = i0.ɵɵnextContext(2).$implicit;
    const vm_r4 = i0.ɵɵnextContext(2).ngIf;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", col_r2.statistic && !ctx_r0.loading && (!vm_r4.statistics[col_r2.statistic].field || vm_r4.statistics[col_r2.statistic].field && ctx_r0.isEmptyFieldValue(vm_r4.statistics[col_r2.statistic].field.value)));
} }
function GridWidgetComponent_div_1_ng_container_1_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, GridWidgetComponent_div_1_ng_container_1_ng_container_2_ng_container_2_ng_container_1_Template, 3, 2, "ng-container", 6)(2, GridWidgetComponent_div_1_ng_container_1_ng_container_2_ng_container_2_ng_container_2_Template, 3, 2, "ng-container", 6)(3, GridWidgetComponent_div_1_ng_container_1_ng_container_2_ng_container_2_ng_container_3_Template, 3, 2, "ng-container", 6)(4, GridWidgetComponent_div_1_ng_container_1_ng_container_2_ng_container_2_ng_container_4_Template, 4, 1, "ng-container", 6)(5, GridWidgetComponent_div_1_ng_container_1_ng_container_2_ng_container_2_ng_container_5_Template, 3, 2, "ng-container", 6)(6, GridWidgetComponent_div_1_ng_container_1_ng_container_2_ng_container_2_ng_container_6_Template, 2, 1, "ng-container", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const col_r2 = i0.ɵɵnextContext().$implicit;
    const vm_r4 = i0.ɵɵnextContext(2).ngIf;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", col_r2.icon);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", col_r2.statistic && vm_r4.statistics[col_r2.statistic]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", col_r2.labelKey);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", col_r2.descriptionKey);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", col_r2.dynamicLabel);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.initializing());
} }
function GridWidgetComponent_div_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, GridWidgetComponent_div_1_ng_container_1_ng_container_2_ng_container_2_Template, 7, 6, "ng-container", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const col_r2 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("", ctx_r0.getColClass(), " ", ctx_r0.getClass(col_r2), "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", col_r2.display !== "hidden");
} }
function GridWidgetComponent_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, GridWidgetComponent_div_1_ng_container_1_ng_container_2_Template, 3, 5, "ng-container", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate4("d-flex ", ctx_r0.getJustify(item_r5.justify), " ", ctx_r0.getAlign(item_r5.align), " ", ctx_r0.getRowClass(), " ", ctx_r0.getLayoutRowClass(item_r5), "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r5.cols);
} }
function GridWidgetComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtemplate(1, GridWidgetComponent_div_1_ng_container_1_Template, 3, 7, "ng-container", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const vm_r4 = ctx.ngIf;
    i0.ɵɵpropertyInterpolate("ngbTooltip", vm_r4.tooltipTitleText);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", vm_r4.layout);
} }
export class GridWidgetComponent {
    constructor(language, factory) {
        this.language = language;
        this.factory = factory;
        this.loading = true;
        this.initializing = signal(true);
        this.subs = [];
        this.statistics = {};
    }
    ngOnInit() {
        const isValid = this.validateConfig();
        if (!isValid) {
            return;
        }
        this.gridWidgetInput = this.config;
        this.buildStatistics();
        this.setupLoading$();
        this.setupVM();
        this.setupReload();
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    validateConfig() {
        if (!this.config || !this.config.layout) {
            this.messageLabelKey = 'LBL_CONFIG_NO_CONFIG';
            return false;
        }
        if (!this.config.queryArgs.context || !this.config.queryArgs.module) {
            this.messageLabelKey = 'LBL_CONFIG_BAD_CONTEXT';
            return false;
        }
        if (!this.config.widgetConfig) {
            this.messageLabelKey = 'LBL_CONFIG_NO_CONFIG';
            return false;
        }
        if (!this.config.layout || !this.config.layout.rows) {
            this.messageLabelKey = 'LBL_CONFIG_NO_STATISTICS_KEY';
            return false;
        }
        return true;
    }
    getRowClass() {
        return this.gridWidgetInput.rowClass;
    }
    getColClass() {
        return this.gridWidgetInput.columnClass;
    }
    getContextModule() {
        return this.gridWidgetInput.queryArgs.context.module;
    }
    getMessageContext() {
        const module = this.getContextModule();
        if (!module) {
            return {};
        }
        return {
            module
        };
    }
    getMessageFields(statistics) {
        if (!statistics || !Object.keys(statistics).length) {
            return {};
        }
        const fields = {};
        Object.keys(statistics).forEach(key => {
            const statistic = statistics[key];
            fields[key] = statistic.field;
        });
        return fields;
    }
    getSizeClass(size) {
        const sizeMap = {
            regular: 'text-regular',
            medium: 'text-medium',
            large: 'text-large',
            'x-large': 'text-x-large',
            'xx-large': 'text-xx-large',
            huge: 'text-huge'
        };
        return sizeMap[size] || 'text-regular';
    }
    getFontWeight(bold) {
        let fontWeight = 'font-weight-normal';
        if (bold && isTrue(bold)) {
            fontWeight = 'font-weight-bolder';
        }
        return fontWeight;
    }
    getColor(color) {
        const sizeMap = {
            yellow: 'text-yellow',
            blue: 'text-blue',
            green: 'text-green',
            red: 'text-red',
            purple: 'text-purple',
            dark: 'text-dark',
            grey: 'text-grey'
        };
        return sizeMap[color] || '';
    }
    getJustify(justify) {
        const justifyMap = {
            start: 'justify-content-start',
            end: 'justify-content-end',
            center: 'justify-content-center',
            between: 'justify-content-between',
            around: 'justify-content-around'
        };
        return justifyMap[justify] || 'justify-content-center';
    }
    getAlign(align) {
        const alignMap = {
            start: 'align-items-start',
            end: 'align-items-end',
            center: 'align-items-center',
            baseline: 'align-items-baseline',
            stretch: 'align-items-stretch'
        };
        return alignMap[align] || 'align-items-center';
    }
    getLayoutRowClass(row) {
        let className = '';
        if (row && row.class) {
            className = row.class;
        }
        return className;
    }
    getClass(layoutCol) {
        let className = '';
        if (layoutCol) {
            className = layoutCol.class;
        }
        className = className + ' '
            + this.getSizeClass(layoutCol.size) + ' '
            + this.getFontWeight(layoutCol.bold) + ' '
            + this.getColor(layoutCol.color);
        return className;
    }
    isEmptyFieldValue(fieldValue) {
        // Handle the cases, when input value is an string, array, objects or any other type
        if (typeof fieldValue === 'string') {
            fieldValue = fieldValue.trim();
        }
        return fieldValue == null
            || typeof fieldValue === 'undefined'
            || fieldValue === ''
            || fieldValue.length === 0;
    }
    getLabel(statisticMetadata, attribute) {
        let label = '';
        if (statisticMetadata && statisticMetadata[attribute]) {
            label = this.language.getFieldLabel(statisticMetadata[attribute]);
        }
        return label;
    }
    getLayout() {
        return this.gridWidgetInput.layout.rows;
    }
    buildStatistics() {
        this.gridWidgetInput.layout.rows.forEach(row => {
            if (!row.cols || !row.cols.length) {
                return;
            }
            row.cols.forEach(col => {
                if (!col.statistic) {
                    return;
                }
                if (col.store) {
                    this.statistics[col.statistic] = {
                        type: col.statistic,
                        store: col.store
                    };
                    return;
                }
                this.statistics[col.statistic] = {
                    type: col.statistic,
                    store: this.factory.create()
                };
                this.statistics[col.statistic].store.init(this.gridWidgetInput.queryArgs.module, {
                    key: col.statistic,
                    context: { ...this.gridWidgetInput.queryArgs.context },
                    params: { ...this.gridWidgetInput.queryArgs.params }
                }).pipe(take(1)).subscribe();
            });
        });
    }
    setupLoading$() {
        const loadings$ = [];
        Object.keys(this.statistics).forEach(type => loadings$.push(this.statistics[type].store.loading$));
        let statisticObs = of([]);
        if (loadings$.length < 1) {
            statisticObs = of([]);
        }
        else if (loadings$.length === 1) {
            statisticObs = loadings$[0].pipe(map(value => [value]));
        }
        else {
            let firsObs = null;
            let others;
            [firsObs, ...others] = loadings$;
            statisticObs = firsObs.pipe(combineLatestWith(others));
        }
        this.loading$ = statisticObs.pipe(map((loadings) => {
            if (!loadings || loadings.length < 1) {
                this.loading = false;
                return false;
            }
            let loading = true;
            loadings.forEach(value => {
                loading = loading && value;
            });
            this.loading = loading;
            return loading;
        }));
        this.subs.push(this.loading$.subscribe());
    }
    setupReload() {
        if (this.gridWidgetInput.widgetConfig.reload$) {
            this.subs.push(this.gridWidgetInput.widgetConfig.reload$.subscribe(() => {
                if (this.loading === false) {
                    this.loading = true;
                    Object.keys(this.statistics).forEach(statisticKey => {
                        const statistic = this.statistics[statisticKey];
                        if (!statistic.store) {
                            return;
                        }
                        statistic.store.load(false).pipe(take(1)).subscribe();
                    });
                }
            }));
        }
    }
    setupVM() {
        let allStatistics$ = of([]).pipe(shareReplay());
        const layout$ = of(this.getLayout()).pipe(shareReplay());
        if (this.statistics && Object.keys(this.statistics).length > 0) {
            const statistics$ = [];
            Object.keys(this.statistics).forEach(type => statistics$.push(this.statistics[type].store.state$));
            if (statistics$.length < 1) {
                allStatistics$ = of([]);
            }
            else if (statistics$.length === 1) {
                allStatistics$ = statistics$[0].pipe(map(value => [value]));
            }
            else {
                let firsObs = null;
                let others;
                [firsObs, ...others] = statistics$;
                allStatistics$ = firsObs.pipe(combineLatestWith(others));
            }
        }
        allStatistics$ = allStatistics$.pipe(tap(() => {
            if (this.initializing()) {
                this.initializing.set(false);
            }
        }));
        this.vm$ = allStatistics$.pipe(combineLatestWith(layout$), map(([statistics, layout]) => {
            const statsMap = {};
            const tooltipTitles = [];
            const descriptions = [];
            statistics.forEach(value => {
                statsMap[value.query.key] = value;
                const tooltip = this.getLabel(value.statistic.metadata, 'tooltip_title_key');
                if (tooltip) {
                    tooltipTitles.push(tooltip);
                }
                const description = this.getLabel(value.statistic.metadata, 'descriptionKey');
                if (description) {
                    descriptions.push(description);
                }
            });
            return {
                layout,
                statistics: statsMap,
                tooltipTitleText: tooltipTitles.join(' | '),
                description: descriptions.join(' | '),
            };
        }));
    }
    static { this.ɵfac = function GridWidgetComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || GridWidgetComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore), i0.ɵɵdirectiveInject(i2.SingleValueStatisticsStoreFactory)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GridWidgetComponent, selectors: [["scrm-grid-widget"]], inputs: { config: "config" }, decls: 3, vars: 4, consts: [["class", "p-3 widget-message", 4, "ngIf"], ["class", "grid-widget d-flex flex-column", "placement", "auto", "container", "body", 3, "ngbTooltip", 4, "ngIf"], [1, "p-3", "widget-message"], [3, "labelKey"], ["placement", "auto", "container", "body", 1, "grid-widget", "d-flex", "flex-column", 3, "ngbTooltip"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "widget-entry-icon"], [3, "image", "klass"], ["class", "widget-entry-value", 4, "ngIf"], ["class", "widget-entry-loading", 4, "ngIf"], [1, "widget-entry-value"], ["mode", "list", 3, "type", "field"], [1, "widget-entry-loading"], [1, "pb-2", "widget-entry-value"], [1, "rounded", "box-loading", "skeleton-field-content"], [1, "widget-entry-label", "text-truncate"], [3, "labelKey", "module"], [1, "text-truncate", "widget-entry-label"], ["class", "widget-entry-dynamic-label", 4, "ngIf"], [1, "widget-entry-dynamic-label"], [3, "context", "fields", "labelKey"]], template: function GridWidgetComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, GridWidgetComponent_div_0_Template, 2, 1, "div", 0)(1, GridWidgetComponent_div_1_Template, 2, 2, "div", 1);
            i0.ɵɵpipe(2, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.messageLabelKey);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.messageLabelKey && i0.ɵɵpipeBind1(2, 2, ctx.vm$));
        } }, dependencies: [i3.NgForOf, i3.NgIf, i4.FieldComponent, i5.InlineLoadingSpinnerComponent, i6.LabelComponent, i7.ImageComponent, i8.DynamicLabelComponent, i9.NgbTooltip, i3.AsyncPipe], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GridWidgetComponent, [{
        type: Component,
        args: [{ selector: 'scrm-grid-widget', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div *ngIf=\"this.messageLabelKey\" class=\"p-3 widget-message\">\n    <scrm-label [labelKey]=\"this.messageLabelKey\"></scrm-label>\n</div>\n\n<div *ngIf=\"!this.messageLabelKey && (vm$| async) as vm\"\n     class=\"grid-widget d-flex flex-column\"\n     ngbTooltip=\"{{vm.tooltipTitleText}}\" placement=\"auto\" container=\"body\">\n\n    <ng-container *ngFor=\"let item of vm.layout\">\n\n        <div class=\"d-flex {{getJustify(item.justify)}} {{getAlign(item.align)}} {{getRowClass()}} {{getLayoutRowClass(item)}}\">\n\n            <ng-container *ngFor=\"let col of item.cols\">\n                <div class=\"{{getColClass()}} {{getClass(col)}}\">\n\n                    <ng-container *ngIf=\"col.display !== 'hidden'\">\n\n                        <!-- ICON -->\n                        <ng-container *ngIf=\"col.icon\">\n                            <div class=\"widget-entry-icon\">\n                                <scrm-image [image]=\"col.icon\" [klass]=\"col.iconClass\"></scrm-image>\n                            </div>\n                        </ng-container>\n\n                        <!-- VALUE -->\n                        <ng-container *ngIf=\"col.statistic && (vm.statistics[col.statistic]) as statistics\">\n\n                            <div *ngIf=\"statistics.field\" class=\"widget-entry-value\">\n\n                                <scrm-field [type]=\"statistics.field.type\"\n                                            [field]=\"statistics.field\"\n                                            mode=\"list\">\n                                </scrm-field>\n\n                            </div>\n                            <div *ngIf=\"initializing() || (statistics.loading && loading)\" class=\"widget-entry-loading\">\n\n                                <div class=\"pb-2 widget-entry-value\">\n                                    <div class=\" rounded box-loading skeleton-field-content\">\n                                        ...\n                                    </div>\n                                </div>\n\n                            </div>\n                        </ng-container>\n\n                        <!-- LABEL -->\n                        <ng-container *ngIf=\"col.labelKey\">\n\n                            <div class=\"widget-entry-label text-truncate\">\n\n                                <scrm-label [labelKey]=\"col.labelKey\" [module]=\"getContextModule()\"></scrm-label>\n\n                            </div>\n\n                        </ng-container>\n\n                        <!-- DESCRIPTION TEXT -->\n                        <ng-container *ngIf=\"col.descriptionKey\">\n\n                            <div class=\"text-truncate widget-entry-label\">\n\n                                <label>{{vm.description}}</label>\n\n                            </div>\n\n                        </ng-container>\n\n                        <!-- DYNAMIC LABEL -->\n                        <ng-container *ngIf=\"col.dynamicLabel\">\n\n                            <div *ngIf=\"!loading\" class=\"widget-entry-dynamic-label\">\n\n                                <scrm-dynamic-label [context]=\"getMessageContext()\"\n                                                    [fields]=\"getMessageFields(vm.statistics)\"\n                                                    [labelKey]=\"col.dynamicLabel\">\n                                </scrm-dynamic-label>\n\n                            </div>\n\n                            <div *ngIf=\"loading\" class=\"widget-entry-loading\">\n                                <scrm-inline-loading-spinner></scrm-inline-loading-spinner>\n                            </div>\n\n                        </ng-container>\n\n                        <!-- MISCONFIGURATION -->\n                        <ng-container *ngIf=\"!initializing()\">\n                            <ng-container\n                                    *ngIf=\"col.statistic && !loading && (!vm.statistics[col.statistic].field || (vm.statistics[col.statistic].field && isEmptyFieldValue(vm.statistics[col.statistic].field.value)))\">\n                                <div class=\"widget-entry-value {{getSizeClass(col.size)}}\">\n                                    -\n                                </div>\n                            </ng-container>\n                        </ng-container>\n\n\n                    </ng-container>\n\n                </div>\n            </ng-container>\n\n\n        </div>\n    </ng-container>\n</div>\n" }]
    }], () => [{ type: i1.LanguageStore }, { type: i2.SingleValueStatisticsStoreFactory }], { config: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(GridWidgetComponent, { className: "GridWidgetComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC13aWRnZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvZ3JpZC13aWRnZXQvZ3JpZC13aWRnZXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvZ3JpZC13aWRnZXQvZ3JpZC13aWRnZXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRTFGLE9BQU8sRUFBQyxpQkFBaUIsRUFBYyxFQUFFLEVBQWUsTUFBTSxNQUFNLENBQUM7QUFDckUsT0FBTyxFQUFDLEdBQUcsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNELE9BQU8sRUFBQyxpQ0FBaUMsRUFBQyxNQUFNLDJFQUEyRSxDQUFDO0FBQzVILE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQWdCbEUsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGdDQUFnQyxDQUFDOzs7Ozs7Ozs7Ozs7SUNwQnRELDhCQUE2RDtJQUN6RCxnQ0FBMkQ7SUFDL0QsaUJBQU07OztJQURVLGNBQWlDO0lBQWpDLGlEQUFpQzs7O0lBaUJ6Qiw2QkFBK0I7SUFDM0IsOEJBQStCO0lBQzNCLGdDQUFvRTtJQUN4RSxpQkFBTTs7OztJQURVLGVBQWtCO0lBQUMsQUFBbkIsbUNBQWtCLDJCQUF3Qjs7O0lBTzFELCtCQUF5RDtJQUVyRCxpQ0FHYTtJQUVqQixpQkFBTTs7O0lBTFUsY0FBOEI7SUFDOUIsQUFEQSwrQ0FBOEIsOEJBQ0o7OztJQVFsQyxBQURKLEFBRkosK0JBQTRGLGNBRW5ELGNBQ3dCO0lBQ3JELHFCQUNKO0lBR1IsQUFGSSxBQURJLGlCQUFNLEVBQ0osRUFFSjs7O0lBbEJWLDZCQUFvRjtJQVVoRixBQVJBLHNJQUF5RCwwSEFRbUM7Ozs7O0lBUnRGLGNBQXNCO0lBQXRCLDBDQUFzQjtJQVF0QixjQUF1RDtJQUF2RCx1RkFBdUQ7OztJQVlqRSw2QkFBbUM7SUFFL0IsK0JBQThDO0lBRTFDLGlDQUFpRjtJQUVyRixpQkFBTTs7Ozs7SUFGVSxlQUF5QjtJQUFDLEFBQTFCLDBDQUF5QixxQ0FBOEI7OztJQU8zRSw2QkFBeUM7SUFJakMsQUFGSiwrQkFBOEMsWUFFbkM7SUFBQSxZQUFrQjtJQUU3QixBQUY2QixpQkFBUSxFQUUvQjs7OztJQUZLLGVBQWtCO0lBQWxCLHVDQUFrQjs7O0lBUzdCLCtCQUF5RDtJQUVyRCx5Q0FHcUI7SUFFekIsaUJBQU07Ozs7O0lBTGtCLGNBQStCO0lBRS9CLEFBREEsQUFEQSxvREFBK0IscURBQ1csaUNBQ2I7OztJQUtyRCwrQkFBa0Q7SUFDOUMsOENBQTJEO0lBQy9ELGlCQUFNOzs7SUFiViw2QkFBdUM7SUFXbkMsQUFUQSx1SUFBeUQsMEhBU1A7Ozs7SUFUNUMsY0FBYztJQUFkLHNDQUFjO0lBU2QsY0FBYTtJQUFiLHFDQUFhOzs7SUFRbkIsNkJBQzBMO0lBQ3RMLDJCQUEyRDtJQUN2RCxtQkFDSjtJQUFBLGlCQUFNOzs7OztJQUZELGNBQXFEO0lBQXJELHNGQUFxRDs7O0lBSGxFLDZCQUFzQztJQUNsQyx3SkFDMEw7Ozs7OztJQUFqTCxjQUErSztJQUEvSyxpT0FBK0s7OztJQTFFaE0sNkJBQStDO0lBd0UzQyxBQWxCQSxBQVhBLEFBWEEsQUF0QkEsQUFQQSx5SUFBK0IsNEhBT3FELDRIQXNCakQsNEhBV00sNEhBV0YsNEhBa0JEOzs7Ozs7SUFyRXZCLGNBQWM7SUFBZCxrQ0FBYztJQU9kLGNBQXNEO0lBQXRELDZFQUFzRDtJQXNCdEQsY0FBa0I7SUFBbEIsc0NBQWtCO0lBV2xCLGNBQXdCO0lBQXhCLDRDQUF3QjtJQVd4QixjQUFzQjtJQUF0QiwwQ0FBc0I7SUFrQnRCLGNBQXFCO0lBQXJCLDZDQUFxQjs7O0lBM0VoRCw2QkFBNEM7SUFDeEMsMkJBQWlEO0lBRTdDLDBIQUErQztJQW9GbkQsaUJBQU07Ozs7O0lBdEZELGNBQTJDO0lBQTNDLHFGQUEyQztJQUU3QixjQUE4QjtJQUE5QixrREFBOEI7OztJQVA3RCw2QkFBNkM7SUFFekMsMkJBQXdIO0lBRXBILDJHQUE0QztJQTJGaEQsaUJBQU07Ozs7O0lBN0ZELGNBQWtIO0lBQWxILG9MQUFrSDtJQUVyRixjQUFZO0lBQVosc0NBQVk7OztJQVJ0RCw4QkFFNEU7SUFFeEUsNEZBQTZDO0lBaUdqRCxpQkFBTTs7O0lBbkdELDhEQUFvQztJQUVOLGNBQVk7SUFBWixzQ0FBWTs7QURzRC9DLE1BQU0sT0FBTyxtQkFBbUI7SUFXNUIsWUFDYyxRQUF1QixFQUN2QixPQUEwQztRQUQxQyxhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLFlBQU8sR0FBUCxPQUFPLENBQW1DO1FBVnhELFlBQU8sR0FBRyxJQUFJLENBQUM7UUFFZixpQkFBWSxHQUE0QixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsU0FBSSxHQUFtQixFQUFFLENBQUM7UUFDMUIsZUFBVSxHQUF1QixFQUFFLENBQUM7SUFRNUMsQ0FBQztJQUVELFFBQVE7UUFFSixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ1gsT0FBTztRQUNYLENBQUM7UUFDRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDbkMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFTSxjQUFjO1FBRWpCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN0QyxJQUFJLENBQUMsZUFBZSxHQUFHLHNCQUFzQixDQUFDO1lBQzlDLE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDbEUsSUFBSSxDQUFDLGVBQWUsR0FBRyx3QkFBd0IsQ0FBQztZQUNoRCxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxzQkFBc0IsQ0FBQztZQUM5QyxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbEQsSUFBSSxDQUFDLGVBQWUsR0FBRyw4QkFBOEIsQ0FBQztZQUN0RCxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLFdBQVc7UUFDZCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDO0lBQ3pDLENBQUM7SUFFTSxXQUFXO1FBQ2QsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQztJQUM1QyxDQUFDO0lBRU0sZ0JBQWdCO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztJQUN6RCxDQUFDO0lBRU0saUJBQWlCO1FBQ3BCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBRXZDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNWLE9BQU8sRUFBRSxDQUFDO1FBQ2QsQ0FBQztRQUVELE9BQU87WUFDSCxNQUFNO1NBQ1QsQ0FBQztJQUNOLENBQUM7SUFFTSxnQkFBZ0IsQ0FBQyxVQUF5QjtRQUU3QyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNqRCxPQUFPLEVBQUUsQ0FBQztRQUNkLENBQUM7UUFFRCxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFFbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDbEMsTUFBTSxTQUFTLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVELFlBQVksQ0FBQyxJQUFlO1FBQ3hCLE1BQU0sT0FBTyxHQUFHO1lBQ1osT0FBTyxFQUFFLGNBQWM7WUFDdkIsTUFBTSxFQUFFLGFBQWE7WUFDckIsS0FBSyxFQUFFLFlBQVk7WUFDbkIsU0FBUyxFQUFFLGNBQWM7WUFDekIsVUFBVSxFQUFFLGVBQWU7WUFDM0IsSUFBSSxFQUFFLFdBQVc7U0FDcEIsQ0FBQztRQUVGLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLGNBQWMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsYUFBYSxDQUFDLElBQXNCO1FBQ2hDLElBQUksVUFBVSxHQUFHLG9CQUFvQixDQUFDO1FBRXRDLElBQUksSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ3ZCLFVBQVUsR0FBRyxvQkFBb0IsQ0FBQztRQUN0QyxDQUFDO1FBRUQsT0FBTyxVQUFVLENBQUM7SUFDdEIsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFnQjtRQUNyQixNQUFNLE9BQU8sR0FBRztZQUNaLE1BQU0sRUFBRSxhQUFhO1lBQ3JCLElBQUksRUFBRSxXQUFXO1lBQ2pCLEtBQUssRUFBRSxZQUFZO1lBQ25CLEdBQUcsRUFBRSxVQUFVO1lBQ2YsTUFBTSxFQUFFLGFBQWE7WUFDckIsSUFBSSxFQUFFLFdBQVc7WUFDakIsSUFBSSxFQUFFLFdBQVc7U0FDcEIsQ0FBQztRQUVGLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRUQsVUFBVSxDQUFDLE9BQXVCO1FBQzlCLE1BQU0sVUFBVSxHQUFHO1lBQ2YsS0FBSyxFQUFFLHVCQUF1QjtZQUM5QixHQUFHLEVBQUUscUJBQXFCO1lBQzFCLE1BQU0sRUFBRSx3QkFBd0I7WUFDaEMsT0FBTyxFQUFFLHlCQUF5QjtZQUNsQyxNQUFNLEVBQUUsd0JBQXdCO1NBQ25DLENBQUM7UUFFRixPQUFPLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSx3QkFBd0IsQ0FBQztJQUMzRCxDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQW1CO1FBQ3hCLE1BQU0sUUFBUSxHQUFHO1lBQ2IsS0FBSyxFQUFFLG1CQUFtQjtZQUMxQixHQUFHLEVBQUUsaUJBQWlCO1lBQ3RCLE1BQU0sRUFBRSxvQkFBb0I7WUFDNUIsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxPQUFPLEVBQUUscUJBQXFCO1NBQ2pDLENBQUM7UUFFRixPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxvQkFBb0IsQ0FBQztJQUNuRCxDQUFDO0lBRUQsaUJBQWlCLENBQUMsR0FBNkI7UUFDM0MsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNuQixTQUFTLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUMxQixDQUFDO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUVELFFBQVEsQ0FBQyxTQUFtQztRQUN4QyxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxTQUFTLEVBQUUsQ0FBQztZQUNaLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO1FBQ2hDLENBQUM7UUFFRCxTQUFTLEdBQUcsU0FBUyxHQUFHLEdBQUc7Y0FDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRztjQUN2QyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHO2NBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXJDLE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxVQUFlO1FBQzdCLG9GQUFvRjtRQUNwRixJQUFJLE9BQU8sVUFBVSxLQUFLLFFBQVEsRUFBRSxDQUFDO1lBQ2pDLFVBQVUsR0FBRyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkMsQ0FBQztRQUVELE9BQU8sVUFBVSxJQUFJLElBQUk7ZUFDbEIsT0FBTyxVQUFVLEtBQUssV0FBVztlQUNqQyxVQUFVLEtBQUssRUFBRTtlQUNqQixVQUFVLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsUUFBUSxDQUFDLGlCQUFvQyxFQUFFLFNBQWlCO1FBRTVELElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksaUJBQWlCLElBQUksaUJBQWlCLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQztZQUNwRCxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUN0RSxDQUFDO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVELFNBQVM7UUFDTCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUM1QyxDQUFDO0lBRVMsZUFBZTtRQUVyQixJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBRTNDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDaEMsT0FBTztZQUNYLENBQUM7WUFFRCxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFFbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDakIsT0FBTztnQkFDWCxDQUFDO2dCQUVELElBQUksR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUNaLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHO3dCQUM3QixJQUFJLEVBQUUsR0FBRyxDQUFDLFNBQVM7d0JBQ25CLEtBQUssRUFBRSxHQUFHLENBQUMsS0FBSztxQkFDbkIsQ0FBQztvQkFDRixPQUFPO2dCQUNYLENBQUM7Z0JBRUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUc7b0JBQzdCLElBQUksRUFBRSxHQUFHLENBQUMsU0FBUztvQkFDbkIsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO2lCQUMvQixDQUFDO2dCQUVGLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3JDLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFDckM7b0JBQ0ksR0FBRyxFQUFFLEdBQUcsQ0FBQyxTQUFTO29CQUNsQixPQUFPLEVBQUUsRUFBQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBQztvQkFDcEQsTUFBTSxFQUFFLEVBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUM7aUJBQ2xDLENBQ3ZCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2hDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBRVMsYUFBYTtRQUVuQixNQUFNLFNBQVMsR0FBMEIsRUFBRSxDQUFDO1FBQzVDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUVuRyxJQUFJLFlBQVksR0FBMEIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRWpELElBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUN0QixZQUFZLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzFCLENBQUM7YUFBTSxJQUFHLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFDLENBQUM7WUFDOUIsWUFBWSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQzVCLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDeEIsQ0FBQztRQUNOLENBQUM7YUFBTSxDQUFDO1lBQ0osSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksTUFBTSxDQUFDO1lBQ1gsQ0FBQyxPQUFPLEVBQUUsR0FBRyxNQUFNLENBQUMsR0FBRyxTQUFTLENBQUM7WUFDakMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQ3ZCLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUM1QixDQUFDO1FBQ04sQ0FBQztRQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FDN0IsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFFYixJQUFJLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2dCQUNyQixPQUFPLEtBQUssQ0FBQztZQUNqQixDQUFDO1lBQ0QsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBRW5CLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3JCLE9BQU8sR0FBRyxPQUFPLElBQUksS0FBSyxDQUFDO1lBQy9CLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFFdkIsT0FBTyxPQUFPLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRVMsV0FBVztRQUVqQixJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO2dCQUNwRSxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssS0FBSyxFQUFFLENBQUM7b0JBRXpCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO29CQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUU7d0JBQ2hELE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7d0JBRWhELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7NEJBQ25CLE9BQU87d0JBQ1gsQ0FBQzt3QkFFRCxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQzFELENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ1IsQ0FBQztJQUNMLENBQUM7SUFFUyxPQUFPO1FBRWIsSUFBSSxjQUFjLEdBQTZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUMxRixNQUFNLE9BQU8sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFFekQsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUM3RCxNQUFNLFdBQVcsR0FBNkMsRUFBRSxDQUFDO1lBQ2pFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUVuRyxJQUFHLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7Z0JBQ3hCLGNBQWMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDNUIsQ0FBQztpQkFBTSxJQUFHLFdBQVcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFDLENBQUM7Z0JBQ2hDLGNBQWMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUNoQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQ3hCLENBQUM7WUFDTixDQUFDO2lCQUFNLENBQUM7Z0JBQ0osSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNuQixJQUFJLE1BQU0sQ0FBQztnQkFDWCxDQUFDLE9BQU8sRUFBRSxHQUFHLE1BQU0sQ0FBQyxHQUFHLFdBQVcsQ0FBQztnQkFDbkMsY0FBYyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQ3pCLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUM1QixDQUFDO1lBQ04sQ0FBQztRQUNMLENBQUM7UUFFRCxjQUFjLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFO1lBQzFDLElBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRUosSUFBSSxDQUFDLEdBQUcsR0FBRyxjQUFjLENBQUMsSUFBSSxDQUMxQixpQkFBaUIsQ0FBQyxPQUFPLENBQUMsRUFDMUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUE2RCxFQUFFLEVBQUU7WUFFckYsTUFBTSxRQUFRLEdBQWtELEVBQUUsQ0FBQztZQUNuRSxNQUFNLGFBQWEsR0FBRyxFQUFFLENBQUM7WUFDekIsTUFBTSxZQUFZLEdBQUcsRUFBRSxDQUFDO1lBRXhCLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBRXZCLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztnQkFFbEMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO2dCQUM3RSxJQUFJLE9BQU8sRUFBRSxDQUFDO29CQUNWLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2hDLENBQUM7Z0JBRUQsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUM5RSxJQUFJLFdBQVcsRUFBRSxDQUFDO29CQUNkLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ25DLENBQUM7WUFHTCxDQUFDLENBQUMsQ0FBQztZQUVILE9BQU87Z0JBQ0gsTUFBTTtnQkFDTixVQUFVLEVBQUUsUUFBUTtnQkFDcEIsZ0JBQWdCLEVBQUUsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQzNDLFdBQVcsRUFBRSxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUNyQixDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDWixDQUFDO29IQXJYUSxtQkFBbUI7b0VBQW5CLG1CQUFtQjtZQzFEaEMsQUFKQSxvRUFBNkQsdURBTWU7OztZQU50RSwwQ0FBMEI7WUFJMUIsY0FBNEM7WUFBNUMsNEVBQTRDOzs7aUZEMERyQyxtQkFBbUI7Y0FOL0IsU0FBUzsyQkFDSSxrQkFBa0I7OEZBTW5CLE1BQU07a0JBQWQsS0FBSzs7a0ZBREcsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBzaWduYWwsIFdyaXRhYmxlU2lnbmFsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtjb21iaW5lTGF0ZXN0V2l0aCwgT2JzZXJ2YWJsZSwgb2YsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge21hcCwgc2hhcmVSZXBsYXksIHRha2UsIHRhcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtTaW5nbGVWYWx1ZVN0YXRpc3RpY3NTdG9yZUZhY3Rvcnl9IGZyb20gJy4uLy4uL3N0b3JlL3NpbmdsZS12YWx1ZS1zdGF0aXN0aWNzL3NpbmdsZS12YWx1ZS1zdGF0aXN0aWNzLnN0b3JlLmZhY3RvcnknO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5pbXBvcnQge1xuICAgIENvbnRlbnRBbGlnbixcbiAgICBDb250ZW50SnVzdGlmeSxcbiAgICBTdGF0aXN0aWNXaWRnZXRMYXlvdXRDb2wsXG4gICAgU3RhdGlzdGljV2lkZ2V0TGF5b3V0Um93LFxuICAgIFN0YXRpc3RpY1dpZGdldE9wdGlvbnMsXG4gICAgVGV4dENvbG9yLFxuICAgIFRleHRTaXplcyxcbiAgICBXaWRnZXRNZXRhZGF0YVxufSBmcm9tICcuLi8uLi9jb21tb24vbWV0YWRhdGEvd2lkZ2V0Lm1ldGFkYXRhJztcbmltcG9ydCB7RmllbGRNYXB9IGZyb20gJy4uLy4uL2NvbW1vbi9yZWNvcmQvZmllbGQubW9kZWwnO1xuaW1wb3J0IHtTaW5nbGVWYWx1ZVN0YXRpc3RpY3NTdGF0ZSwgU2luZ2xlVmFsdWVTdGF0aXN0aWNzU3RvcmVJbnRlcmZhY2V9IGZyb20gJy4uLy4uL2NvbW1vbi9zdGF0aXN0aWNzL3N0YXRpc3RpY3Mtc3RvcmUubW9kZWwnO1xuaW1wb3J0IHtTdGF0aXN0aWNNZXRhZGF0YSwgU3RhdGlzdGljc1F1ZXJ5fSBmcm9tICcuLi8uLi9jb21tb24vc3RhdGlzdGljcy9zdGF0aXN0aWNzLm1vZGVsJztcbmltcG9ydCB7U3RyaW5nTWFwfSBmcm9tICcuLi8uLi9jb21tb24vdHlwZXMvc3RyaW5nLW1hcCc7XG5pbXBvcnQge1ZpZXdDb250ZXh0fSBmcm9tICcuLi8uLi9jb21tb24vdmlld3Mvdmlldy5tb2RlbCc7XG5pbXBvcnQge2lzVHJ1ZX0gZnJvbSAnLi4vLi4vY29tbW9uL3V0aWxzL3ZhbHVlLXV0aWxzJztcbmludGVyZmFjZSBTdGF0aXN0aWNzRW50cnkge1xuICAgIGxhYmVsS2V5Pzogc3RyaW5nO1xuICAgIHR5cGU6IHN0cmluZztcbiAgICBzdG9yZTogU2luZ2xlVmFsdWVTdGF0aXN0aWNzU3RvcmVJbnRlcmZhY2U7XG59XG5cbmludGVyZmFjZSBTdGF0aXN0aWNzRW50cnlNYXAge1xuICAgIFtrZXk6IHN0cmluZ106IFN0YXRpc3RpY3NFbnRyeTtcbn1cblxuaW50ZXJmYWNlIFN0YXRpc3RpY3NNYXAge1xuICAgIFtrZXk6IHN0cmluZ106IFNpbmdsZVZhbHVlU3RhdGlzdGljc1N0YXRlO1xufVxuXG5pbnRlcmZhY2UgR3JpZFdpZGdldFN0YXRlIHtcbiAgICBsYXlvdXQ6IFN0YXRpc3RpY1dpZGdldExheW91dFJvd1tdO1xuICAgIHN0YXRpc3RpY3M6IFN0YXRpc3RpY3NNYXA7XG4gICAgdG9vbHRpcFRpdGxlVGV4dD86IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHcmlkV2lkZ2V0Q29uZmlnIHtcbiAgICByb3dDbGFzcz86IHN0cmluZztcbiAgICBjb2x1bW5DbGFzcz86IHN0cmluZztcbiAgICBsYXlvdXQ6IFN0YXRpc3RpY1dpZGdldE9wdGlvbnM7XG4gICAgd2lkZ2V0Q29uZmlnPzogV2lkZ2V0TWV0YWRhdGE7XG4gICAgcXVlcnlBcmdzPzogU3RhdGlzdGljc1F1ZXJ5QXJncztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdGF0aXN0aWNzUXVlcnlBcmdzIHtcbiAgICBtb2R1bGU6IHN0cmluZztcbiAgICBjb250ZXh0OiBWaWV3Q29udGV4dDtcbiAgICBwYXJhbXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1ncmlkLXdpZGdldCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2dyaWQtd2lkZ2V0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZXM6IFtdXG59KVxuXG5leHBvcnQgY2xhc3MgR3JpZFdpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBASW5wdXQoKSBjb25maWc6IEdyaWRXaWRnZXRDb25maWc7XG4gICAgdm0kOiBPYnNlcnZhYmxlPEdyaWRXaWRnZXRTdGF0ZT47XG4gICAgbG9hZGluZyA9IHRydWU7XG4gICAgbWVzc2FnZUxhYmVsS2V5OiBzdHJpbmc7XG4gICAgaW5pdGlhbGl6aW5nOiBXcml0YWJsZVNpZ25hbDxib29sZWFuPiA9IHNpZ25hbCh0cnVlKTtcbiAgICBwcml2YXRlIHN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gICAgcHJpdmF0ZSBzdGF0aXN0aWNzOiBTdGF0aXN0aWNzRW50cnlNYXAgPSB7fTtcbiAgICBwcml2YXRlIGxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIHByaXZhdGUgZ3JpZFdpZGdldElucHV0OiBHcmlkV2lkZ2V0Q29uZmlnO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBsYW5ndWFnZTogTGFuZ3VhZ2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGZhY3Rvcnk6IFNpbmdsZVZhbHVlU3RhdGlzdGljc1N0b3JlRmFjdG9yeVxuICAgICkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IGlzVmFsaWQgPSB0aGlzLnZhbGlkYXRlQ29uZmlnKCk7XG4gICAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ3JpZFdpZGdldElucHV0ID0gdGhpcy5jb25maWc7XG4gICAgICAgIHRoaXMuYnVpbGRTdGF0aXN0aWNzKCk7XG4gICAgICAgIHRoaXMuc2V0dXBMb2FkaW5nJCgpO1xuICAgICAgICB0aGlzLnNldHVwVk0oKTtcbiAgICAgICAgdGhpcy5zZXR1cFJlbG9hZCgpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyB2YWxpZGF0ZUNvbmZpZygpOiBib29sZWFuIHtcblxuICAgICAgICBpZiAoIXRoaXMuY29uZmlnIHx8ICF0aGlzLmNvbmZpZy5sYXlvdXQpIHtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUxhYmVsS2V5ID0gJ0xCTF9DT05GSUdfTk9fQ09ORklHJztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5jb25maWcucXVlcnlBcmdzLmNvbnRleHQgfHwgIXRoaXMuY29uZmlnLnF1ZXJ5QXJncy5tb2R1bGUpIHtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUxhYmVsS2V5ID0gJ0xCTF9DT05GSUdfQkFEX0NPTlRFWFQnO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZy53aWRnZXRDb25maWcpIHtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUxhYmVsS2V5ID0gJ0xCTF9DT05GSUdfTk9fQ09ORklHJztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5jb25maWcubGF5b3V0IHx8ICF0aGlzLmNvbmZpZy5sYXlvdXQucm93cykge1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlTGFiZWxLZXkgPSAnTEJMX0NPTkZJR19OT19TVEFUSVNUSUNTX0tFWSc7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Um93Q2xhc3MoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZFdpZGdldElucHV0LnJvd0NsYXNzO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDb2xDbGFzcygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkV2lkZ2V0SW5wdXQuY29sdW1uQ2xhc3M7XG4gICAgfVxuXG4gICAgcHVibGljIGdldENvbnRleHRNb2R1bGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZFdpZGdldElucHV0LnF1ZXJ5QXJncy5jb250ZXh0Lm1vZHVsZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TWVzc2FnZUNvbnRleHQoKTogU3RyaW5nTWFwIHtcbiAgICAgICAgY29uc3QgbW9kdWxlID0gdGhpcy5nZXRDb250ZXh0TW9kdWxlKCk7XG5cbiAgICAgICAgaWYgKCFtb2R1bGUpIHtcbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtb2R1bGVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TWVzc2FnZUZpZWxkcyhzdGF0aXN0aWNzOiBTdGF0aXN0aWNzTWFwKTogRmllbGRNYXAge1xuXG4gICAgICAgIGlmICghc3RhdGlzdGljcyB8fCAhT2JqZWN0LmtleXMoc3RhdGlzdGljcykubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmaWVsZHMgPSB7fTtcblxuICAgICAgICBPYmplY3Qua2V5cyhzdGF0aXN0aWNzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdGF0aXN0aWMgPSBzdGF0aXN0aWNzW2tleV07XG4gICAgICAgICAgICBmaWVsZHNba2V5XSA9IHN0YXRpc3RpYy5maWVsZDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGZpZWxkcztcbiAgICB9XG5cbiAgICBnZXRTaXplQ2xhc3Moc2l6ZTogVGV4dFNpemVzKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3Qgc2l6ZU1hcCA9IHtcbiAgICAgICAgICAgIHJlZ3VsYXI6ICd0ZXh0LXJlZ3VsYXInLFxuICAgICAgICAgICAgbWVkaXVtOiAndGV4dC1tZWRpdW0nLFxuICAgICAgICAgICAgbGFyZ2U6ICd0ZXh0LWxhcmdlJyxcbiAgICAgICAgICAgICd4LWxhcmdlJzogJ3RleHQteC1sYXJnZScsXG4gICAgICAgICAgICAneHgtbGFyZ2UnOiAndGV4dC14eC1sYXJnZScsXG4gICAgICAgICAgICBodWdlOiAndGV4dC1odWdlJ1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBzaXplTWFwW3NpemVdIHx8ICd0ZXh0LXJlZ3VsYXInO1xuICAgIH1cblxuICAgIGdldEZvbnRXZWlnaHQoYm9sZDogc3RyaW5nIHwgYm9vbGVhbik6IHN0cmluZyB7XG4gICAgICAgIGxldCBmb250V2VpZ2h0ID0gJ2ZvbnQtd2VpZ2h0LW5vcm1hbCc7XG5cbiAgICAgICAgaWYgKGJvbGQgJiYgaXNUcnVlKGJvbGQpKSB7XG4gICAgICAgICAgICBmb250V2VpZ2h0ID0gJ2ZvbnQtd2VpZ2h0LWJvbGRlcic7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZm9udFdlaWdodDtcbiAgICB9XG5cbiAgICBnZXRDb2xvcihjb2xvcjogVGV4dENvbG9yKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3Qgc2l6ZU1hcCA9IHtcbiAgICAgICAgICAgIHllbGxvdzogJ3RleHQteWVsbG93JyxcbiAgICAgICAgICAgIGJsdWU6ICd0ZXh0LWJsdWUnLFxuICAgICAgICAgICAgZ3JlZW46ICd0ZXh0LWdyZWVuJyxcbiAgICAgICAgICAgIHJlZDogJ3RleHQtcmVkJyxcbiAgICAgICAgICAgIHB1cnBsZTogJ3RleHQtcHVycGxlJyxcbiAgICAgICAgICAgIGRhcms6ICd0ZXh0LWRhcmsnLFxuICAgICAgICAgICAgZ3JleTogJ3RleHQtZ3JleSdcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gc2l6ZU1hcFtjb2xvcl0gfHwgJyc7XG4gICAgfVxuXG4gICAgZ2V0SnVzdGlmeShqdXN0aWZ5OiBDb250ZW50SnVzdGlmeSk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGp1c3RpZnlNYXAgPSB7XG4gICAgICAgICAgICBzdGFydDogJ2p1c3RpZnktY29udGVudC1zdGFydCcsXG4gICAgICAgICAgICBlbmQ6ICdqdXN0aWZ5LWNvbnRlbnQtZW5kJyxcbiAgICAgICAgICAgIGNlbnRlcjogJ2p1c3RpZnktY29udGVudC1jZW50ZXInLFxuICAgICAgICAgICAgYmV0d2VlbjogJ2p1c3RpZnktY29udGVudC1iZXR3ZWVuJyxcbiAgICAgICAgICAgIGFyb3VuZDogJ2p1c3RpZnktY29udGVudC1hcm91bmQnXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGp1c3RpZnlNYXBbanVzdGlmeV0gfHwgJ2p1c3RpZnktY29udGVudC1jZW50ZXInO1xuICAgIH1cblxuICAgIGdldEFsaWduKGFsaWduOiBDb250ZW50QWxpZ24pOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBhbGlnbk1hcCA9IHtcbiAgICAgICAgICAgIHN0YXJ0OiAnYWxpZ24taXRlbXMtc3RhcnQnLFxuICAgICAgICAgICAgZW5kOiAnYWxpZ24taXRlbXMtZW5kJyxcbiAgICAgICAgICAgIGNlbnRlcjogJ2FsaWduLWl0ZW1zLWNlbnRlcicsXG4gICAgICAgICAgICBiYXNlbGluZTogJ2FsaWduLWl0ZW1zLWJhc2VsaW5lJyxcbiAgICAgICAgICAgIHN0cmV0Y2g6ICdhbGlnbi1pdGVtcy1zdHJldGNoJ1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBhbGlnbk1hcFthbGlnbl0gfHwgJ2FsaWduLWl0ZW1zLWNlbnRlcic7XG4gICAgfVxuXG4gICAgZ2V0TGF5b3V0Um93Q2xhc3Mocm93OiBTdGF0aXN0aWNXaWRnZXRMYXlvdXRSb3cpOiBzdHJpbmcge1xuICAgICAgICBsZXQgY2xhc3NOYW1lID0gJyc7XG4gICAgICAgIGlmIChyb3cgJiYgcm93LmNsYXNzKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSByb3cuY2xhc3M7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgICB9XG5cbiAgICBnZXRDbGFzcyhsYXlvdXRDb2w6IFN0YXRpc3RpY1dpZGdldExheW91dENvbCk6IHN0cmluZyB7XG4gICAgICAgIGxldCBjbGFzc05hbWUgPSAnJztcbiAgICAgICAgaWYgKGxheW91dENvbCkge1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gbGF5b3V0Q29sLmNsYXNzO1xuICAgICAgICB9XG5cbiAgICAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lICsgJyAnXG4gICAgICAgICAgICArIHRoaXMuZ2V0U2l6ZUNsYXNzKGxheW91dENvbC5zaXplKSArICcgJ1xuICAgICAgICAgICAgKyB0aGlzLmdldEZvbnRXZWlnaHQobGF5b3V0Q29sLmJvbGQpICsgJyAnXG4gICAgICAgICAgICArIHRoaXMuZ2V0Q29sb3IobGF5b3V0Q29sLmNvbG9yKTtcblxuICAgICAgICByZXR1cm4gY2xhc3NOYW1lO1xuICAgIH1cblxuICAgIGlzRW1wdHlGaWVsZFZhbHVlKGZpZWxkVmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICAvLyBIYW5kbGUgdGhlIGNhc2VzLCB3aGVuIGlucHV0IHZhbHVlIGlzIGFuIHN0cmluZywgYXJyYXksIG9iamVjdHMgb3IgYW55IG90aGVyIHR5cGVcbiAgICAgICAgaWYgKHR5cGVvZiBmaWVsZFZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgZmllbGRWYWx1ZSA9IGZpZWxkVmFsdWUudHJpbSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZpZWxkVmFsdWUgPT0gbnVsbFxuICAgICAgICAgICAgfHwgdHlwZW9mIGZpZWxkVmFsdWUgPT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICB8fCBmaWVsZFZhbHVlID09PSAnJ1xuICAgICAgICAgICAgfHwgZmllbGRWYWx1ZS5sZW5ndGggPT09IDA7XG4gICAgfVxuXG4gICAgZ2V0TGFiZWwoc3RhdGlzdGljTWV0YWRhdGE6IFN0YXRpc3RpY01ldGFkYXRhLCBhdHRyaWJ1dGU6IHN0cmluZyk6IHN0cmluZyB7XG5cbiAgICAgICAgbGV0IGxhYmVsID0gJyc7XG4gICAgICAgIGlmIChzdGF0aXN0aWNNZXRhZGF0YSAmJiBzdGF0aXN0aWNNZXRhZGF0YVthdHRyaWJ1dGVdKSB7XG4gICAgICAgICAgICBsYWJlbCA9IHRoaXMubGFuZ3VhZ2UuZ2V0RmllbGRMYWJlbChzdGF0aXN0aWNNZXRhZGF0YVthdHRyaWJ1dGVdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9XG5cbiAgICBnZXRMYXlvdXQoKTogU3RhdGlzdGljV2lkZ2V0TGF5b3V0Um93W10ge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkV2lkZ2V0SW5wdXQubGF5b3V0LnJvd3M7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGJ1aWxkU3RhdGlzdGljcygpOiB2b2lkIHtcblxuICAgICAgICB0aGlzLmdyaWRXaWRnZXRJbnB1dC5sYXlvdXQucm93cy5mb3JFYWNoKHJvdyA9PiB7XG5cbiAgICAgICAgICAgIGlmICghcm93LmNvbHMgfHwgIXJvdy5jb2xzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcm93LmNvbHMuZm9yRWFjaChjb2wgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYgKCFjb2wuc3RhdGlzdGljKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoY29sLnN0b3JlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGlzdGljc1tjb2wuc3RhdGlzdGljXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGNvbC5zdGF0aXN0aWMsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZTogY29sLnN0b3JlXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRpc3RpY3NbY29sLnN0YXRpc3RpY10gPSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IGNvbC5zdGF0aXN0aWMsXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlOiB0aGlzLmZhY3RvcnkuY3JlYXRlKClcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0aXN0aWNzW2NvbC5zdGF0aXN0aWNdLnN0b3JlLmluaXQoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JpZFdpZGdldElucHV0LnF1ZXJ5QXJncy5tb2R1bGUsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogY29sLnN0YXRpc3RpYyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IHsuLi50aGlzLmdyaWRXaWRnZXRJbnB1dC5xdWVyeUFyZ3MuY29udGV4dH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHsuLi50aGlzLmdyaWRXaWRnZXRJbnB1dC5xdWVyeUFyZ3MucGFyYW1zfVxuICAgICAgICAgICAgICAgICAgICB9IGFzIFN0YXRpc3RpY3NRdWVyeSxcbiAgICAgICAgICAgICAgICApLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2V0dXBMb2FkaW5nJCgpOiB2b2lkIHtcblxuICAgICAgICBjb25zdCBsb2FkaW5ncyQ6IE9ic2VydmFibGU8Ym9vbGVhbj5bXSA9IFtdO1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnN0YXRpc3RpY3MpLmZvckVhY2godHlwZSA9PiBsb2FkaW5ncyQucHVzaCh0aGlzLnN0YXRpc3RpY3NbdHlwZV0uc3RvcmUubG9hZGluZyQpKTtcblxuICAgICAgICBsZXQgc3RhdGlzdGljT2JzOiBPYnNlcnZhYmxlPGJvb2xlYW5bXT4gPSBvZihbXSk7XG5cbiAgICAgICAgaWYobG9hZGluZ3MkLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgIHN0YXRpc3RpY09icyA9IG9mKFtdKTtcbiAgICAgICAgfSBlbHNlIGlmKGxvYWRpbmdzJC5sZW5ndGggPT09IDEpe1xuICAgICAgICAgICAgc3RhdGlzdGljT2JzID0gbG9hZGluZ3MkWzBdLnBpcGUoXG4gICAgICAgICAgICAgICAgbWFwKHZhbHVlID0+IFt2YWx1ZV0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGZpcnNPYnMgPSBudWxsO1xuICAgICAgICAgICAgbGV0IG90aGVycztcbiAgICAgICAgICAgIFtmaXJzT2JzLCAuLi5vdGhlcnNdID0gbG9hZGluZ3MkO1xuICAgICAgICAgICAgc3RhdGlzdGljT2JzID0gZmlyc09icy5waXBlKFxuICAgICAgICAgICAgICAgIGNvbWJpbmVMYXRlc3RXaXRoKG90aGVycylcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvYWRpbmckID0gc3RhdGlzdGljT2JzLnBpcGUoXG4gICAgICAgICAgICBtYXAoKGxvYWRpbmdzKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWxvYWRpbmdzIHx8IGxvYWRpbmdzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IGxvYWRpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgbG9hZGluZ3MuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmcgPSBsb2FkaW5nICYmIHZhbHVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGxvYWRpbmc7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbG9hZGluZztcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5sb2FkaW5nJC5zdWJzY3JpYmUoKSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNldHVwUmVsb2FkKCk6IHZvaWQge1xuXG4gICAgICAgIGlmICh0aGlzLmdyaWRXaWRnZXRJbnB1dC53aWRnZXRDb25maWcucmVsb2FkJCkge1xuICAgICAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5ncmlkV2lkZ2V0SW5wdXQud2lkZ2V0Q29uZmlnLnJlbG9hZCQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2FkaW5nID09PSBmYWxzZSkge1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuc3RhdGlzdGljcykuZm9yRWFjaChzdGF0aXN0aWNLZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdGlzdGljID0gdGhpcy5zdGF0aXN0aWNzW3N0YXRpc3RpY0tleV07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc3RhdGlzdGljLnN0b3JlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aXN0aWMuc3RvcmUubG9hZChmYWxzZSkucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNldHVwVk0oKTogdm9pZCB7XG5cbiAgICAgICAgbGV0IGFsbFN0YXRpc3RpY3MkOiBPYnNlcnZhYmxlPFNpbmdsZVZhbHVlU3RhdGlzdGljc1N0YXRlW10+ID0gb2YoW10pLnBpcGUoc2hhcmVSZXBsYXkoKSk7XG4gICAgICAgIGNvbnN0IGxheW91dCQgPSBvZih0aGlzLmdldExheW91dCgpKS5waXBlKHNoYXJlUmVwbGF5KCkpO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRpc3RpY3MgJiYgT2JqZWN0LmtleXModGhpcy5zdGF0aXN0aWNzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0aXN0aWNzJDogT2JzZXJ2YWJsZTxTaW5nbGVWYWx1ZVN0YXRpc3RpY3NTdGF0ZT5bXSA9IFtdO1xuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5zdGF0aXN0aWNzKS5mb3JFYWNoKHR5cGUgPT4gc3RhdGlzdGljcyQucHVzaCh0aGlzLnN0YXRpc3RpY3NbdHlwZV0uc3RvcmUuc3RhdGUkKSk7XG5cbiAgICAgICAgICAgIGlmKHN0YXRpc3RpY3MkLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgICAgICBhbGxTdGF0aXN0aWNzJCA9IG9mKFtdKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZihzdGF0aXN0aWNzJC5sZW5ndGggPT09IDEpe1xuICAgICAgICAgICAgICAgIGFsbFN0YXRpc3RpY3MkID0gc3RhdGlzdGljcyRbMF0ucGlwZShcbiAgICAgICAgICAgICAgICAgICAgbWFwKHZhbHVlID0+IFt2YWx1ZV0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IGZpcnNPYnMgPSBudWxsO1xuICAgICAgICAgICAgICAgIGxldCBvdGhlcnM7XG4gICAgICAgICAgICAgICAgW2ZpcnNPYnMsIC4uLm90aGVyc10gPSBzdGF0aXN0aWNzJDtcbiAgICAgICAgICAgICAgICBhbGxTdGF0aXN0aWNzJCA9IGZpcnNPYnMucGlwZShcbiAgICAgICAgICAgICAgICAgICAgY29tYmluZUxhdGVzdFdpdGgob3RoZXJzKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBhbGxTdGF0aXN0aWNzJCA9IGFsbFN0YXRpc3RpY3MkLnBpcGUodGFwKCgpID0+IHtcbiAgICAgICAgICAgIGlmKHRoaXMuaW5pdGlhbGl6aW5nKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxpemluZy5zZXQoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG5cbiAgICAgICAgdGhpcy52bSQgPSBhbGxTdGF0aXN0aWNzJC5waXBlKFxuICAgICAgICAgICAgY29tYmluZUxhdGVzdFdpdGgobGF5b3V0JCksXG4gICAgICAgICAgICBtYXAoKFtzdGF0aXN0aWNzLCBsYXlvdXRdOiBbU2luZ2xlVmFsdWVTdGF0aXN0aWNzU3RhdGVbXSwgU3RhdGlzdGljV2lkZ2V0TGF5b3V0Um93W11dKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0c01hcDogeyBba2V5OiBzdHJpbmddOiBTaW5nbGVWYWx1ZVN0YXRpc3RpY3NTdGF0ZSB9ID0ge307XG4gICAgICAgICAgICAgICAgY29uc3QgdG9vbHRpcFRpdGxlcyA9IFtdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9ucyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgc3RhdGlzdGljcy5mb3JFYWNoKHZhbHVlID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBzdGF0c01hcFt2YWx1ZS5xdWVyeS5rZXldID0gdmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9vbHRpcCA9IHRoaXMuZ2V0TGFiZWwodmFsdWUuc3RhdGlzdGljLm1ldGFkYXRhLCAndG9vbHRpcF90aXRsZV9rZXknKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvb2x0aXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBUaXRsZXMucHVzaCh0b29sdGlwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdGhpcy5nZXRMYWJlbCh2YWx1ZS5zdGF0aXN0aWMubWV0YWRhdGEsICdkZXNjcmlwdGlvbktleScpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9ucy5wdXNoKGRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGxheW91dCxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGlzdGljczogc3RhdHNNYXAsXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXBUaXRsZVRleHQ6IHRvb2x0aXBUaXRsZXMuam9pbignIHwgJyksXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbnMuam9pbignIHwgJyksXG4gICAgICAgICAgICAgICAgfSBhcyBHcmlkV2lkZ2V0U3RhdGU7XG4gICAgICAgICAgICB9KSk7XG4gICAgfVxuXG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48ZGl2ICpuZ0lmPVwidGhpcy5tZXNzYWdlTGFiZWxLZXlcIiBjbGFzcz1cInAtMyB3aWRnZXQtbWVzc2FnZVwiPlxuICAgIDxzY3JtLWxhYmVsIFtsYWJlbEtleV09XCJ0aGlzLm1lc3NhZ2VMYWJlbEtleVwiPjwvc2NybS1sYWJlbD5cbjwvZGl2PlxuXG48ZGl2ICpuZ0lmPVwiIXRoaXMubWVzc2FnZUxhYmVsS2V5ICYmICh2bSR8IGFzeW5jKSBhcyB2bVwiXG4gICAgIGNsYXNzPVwiZ3JpZC13aWRnZXQgZC1mbGV4IGZsZXgtY29sdW1uXCJcbiAgICAgbmdiVG9vbHRpcD1cInt7dm0udG9vbHRpcFRpdGxlVGV4dH19XCIgcGxhY2VtZW50PVwiYXV0b1wiIGNvbnRhaW5lcj1cImJvZHlcIj5cblxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygdm0ubGF5b3V0XCI+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCB7e2dldEp1c3RpZnkoaXRlbS5qdXN0aWZ5KX19IHt7Z2V0QWxpZ24oaXRlbS5hbGlnbil9fSB7e2dldFJvd0NsYXNzKCl9fSB7e2dldExheW91dFJvd0NsYXNzKGl0ZW0pfX1cIj5cblxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgY29sIG9mIGl0ZW0uY29sc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ7e2dldENvbENsYXNzKCl9fSB7e2dldENsYXNzKGNvbCl9fVwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb2wuZGlzcGxheSAhPT0gJ2hpZGRlbidcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBJQ09OIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbC5pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndpZGdldC1lbnRyeS1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWltYWdlIFtpbWFnZV09XCJjb2wuaWNvblwiIFtrbGFzc109XCJjb2wuaWNvbkNsYXNzXCI+PC9zY3JtLWltYWdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gVkFMVUUgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29sLnN0YXRpc3RpYyAmJiAodm0uc3RhdGlzdGljc1tjb2wuc3RhdGlzdGljXSkgYXMgc3RhdGlzdGljc1wiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cInN0YXRpc3RpY3MuZmllbGRcIiBjbGFzcz1cIndpZGdldC1lbnRyeS12YWx1ZVwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWZpZWxkIFt0eXBlXT1cInN0YXRpc3RpY3MuZmllbGQudHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmaWVsZF09XCJzdGF0aXN0aWNzLmZpZWxkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZT1cImxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zY3JtLWZpZWxkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImluaXRpYWxpemluZygpIHx8IChzdGF0aXN0aWNzLmxvYWRpbmcgJiYgbG9hZGluZylcIiBjbGFzcz1cIndpZGdldC1lbnRyeS1sb2FkaW5nXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBiLTIgd2lkZ2V0LWVudHJ5LXZhbHVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiIHJvdW5kZWQgYm94LWxvYWRpbmcgc2tlbGV0b24tZmllbGQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBMQUJFTCAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb2wubGFiZWxLZXlcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aWRnZXQtZW50cnktbGFiZWwgdGV4dC10cnVuY2F0ZVwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWxhYmVsIFtsYWJlbEtleV09XCJjb2wubGFiZWxLZXlcIiBbbW9kdWxlXT1cImdldENvbnRleHRNb2R1bGUoKVwiPjwvc2NybS1sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBERVNDUklQVElPTiBURVhUIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbC5kZXNjcmlwdGlvbktleVwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtdHJ1bmNhdGUgd2lkZ2V0LWVudHJ5LWxhYmVsXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPnt7dm0uZGVzY3JpcHRpb259fTwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gRFlOQU1JQyBMQUJFTCAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb2wuZHluYW1pY0xhYmVsXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiIWxvYWRpbmdcIiBjbGFzcz1cIndpZGdldC1lbnRyeS1keW5hbWljLWxhYmVsXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tZHluYW1pYy1sYWJlbCBbY29udGV4dF09XCJnZXRNZXNzYWdlQ29udGV4dCgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZmllbGRzXT1cImdldE1lc3NhZ2VGaWVsZHModm0uc3RhdGlzdGljcylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsYWJlbEtleV09XCJjb2wuZHluYW1pY0xhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2NybS1keW5hbWljLWxhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwibG9hZGluZ1wiIGNsYXNzPVwid2lkZ2V0LWVudHJ5LWxvYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0taW5saW5lLWxvYWRpbmctc3Bpbm5lcj48L3Njcm0taW5saW5lLWxvYWRpbmctc3Bpbm5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gTUlTQ09ORklHVVJBVElPTiAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaW5pdGlhbGl6aW5nKClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImNvbC5zdGF0aXN0aWMgJiYgIWxvYWRpbmcgJiYgKCF2bS5zdGF0aXN0aWNzW2NvbC5zdGF0aXN0aWNdLmZpZWxkIHx8ICh2bS5zdGF0aXN0aWNzW2NvbC5zdGF0aXN0aWNdLmZpZWxkICYmIGlzRW1wdHlGaWVsZFZhbHVlKHZtLnN0YXRpc3RpY3NbY29sLnN0YXRpc3RpY10uZmllbGQudmFsdWUpKSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndpZGdldC1lbnRyeS12YWx1ZSB7e2dldFNpemVDbGFzcyhjb2wuc2l6ZSl9fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9uZy1jb250YWluZXI+XG48L2Rpdj5cbiJdfQ==