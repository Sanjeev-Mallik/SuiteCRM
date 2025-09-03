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
import { Component } from '@angular/core';
import { combineLatestWith, of } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { ChartDataStoreFactory } from '../../../../store/chart-data/chart-data.store.factory';
import { BaseWidgetComponent } from '../../../widgets/base-widget.model';
import { LanguageStore } from '../../../../store/language/language.store';
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/language/language.store";
import * as i2 from "../../../../store/chart-data/chart-data.store.factory";
import * as i3 from "@angular/common";
import * as i4 from "../../../../components/widget-panel/widget-panel.component";
import * as i5 from "@angular/forms";
import * as i6 from "../../../../components/chart/components/chart/chart.component";
import * as i7 from "../../../../components/loading-spinner/loading-spinner.component";
function ChartSidebarWidgetComponent_scrm_widget_panel_0_div_5_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const chart_r3 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("value", ctx_r1.getKey(chart_r3));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.language.getFieldLabel(chart_r3.labelKey), " ");
} }
function ChartSidebarWidgetComponent_scrm_widget_panel_0_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13)(1, "div", 14)(2, "form", 15)(3, "select", 16);
    i0.ɵɵlistener("ngModelChange", function ChartSidebarWidgetComponent_scrm_widget_panel_0_div_5_Template_select_ngModelChange_3_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onChartSelect()); });
    i0.ɵɵtwoWayListener("ngModelChange", function ChartSidebarWidgetComponent_scrm_widget_panel_0_div_5_Template_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.selectedChart, $event) || (ctx_r1.selectedChart = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵtemplate(4, ChartSidebarWidgetComponent_scrm_widget_panel_0_div_5_option_4_Template, 2, 2, "option", 17);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.selectedChart);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.configuredCharts);
} }
function ChartSidebarWidgetComponent_scrm_widget_panel_0_ng_container_9_scrm_chart_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-chart", 20);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("dataSource", ctx_r1.dataSource)("type", ctx_r1.chartType);
} }
function ChartSidebarWidgetComponent_scrm_widget_panel_0_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ChartSidebarWidgetComponent_scrm_widget_panel_0_ng_container_9_scrm_chart_1_Template, 1, 2, "scrm-chart", 19);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.dataSource && ctx_r1.chartType);
} }
function ChartSidebarWidgetComponent_scrm_widget_panel_0_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵelement(1, "scrm-loading-spinner", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("m-3", !ctx_r1.dataSource);
    i0.ɵɵadvance();
    i0.ɵɵproperty("overlay", true);
} }
function ChartSidebarWidgetComponent_scrm_widget_panel_0_p_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.language.getFieldLabel(ctx_r1.messageLabelKey), " ");
} }
function ChartSidebarWidgetComponent_scrm_widget_panel_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "scrm-widget-panel", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5);
    i0.ɵɵtemplate(5, ChartSidebarWidgetComponent_scrm_widget_panel_0_div_5_Template, 5, 2, "div", 6);
    i0.ɵɵelementStart(6, "div", 7)(7, "div", 8)(8, "div", 9);
    i0.ɵɵtemplate(9, ChartSidebarWidgetComponent_scrm_widget_panel_0_ng_container_9_Template, 2, 1, "ng-container", 10)(10, ChartSidebarWidgetComponent_scrm_widget_panel_0_div_10_Template, 2, 3, "div", 11)(11, ChartSidebarWidgetComponent_scrm_widget_panel_0_p_11_Template, 2, 1, "p", 12);
    i0.ɵɵelementEnd()()()()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("title", ctx_r1.title);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r1.isConfigured && ctx_r1.chartOptions.toggle);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r1.selectedChart && !ctx_r1.loading);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.loading);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.loading && (!ctx_r1.isConfigured() || !ctx_r1.dataSource));
} }
export class ChartSidebarWidgetComponent extends BaseWidgetComponent {
    constructor(language, factory) {
        super();
        this.language = language;
        this.factory = factory;
        this.charts = {};
        this.titleLabelKey = 'LBL_INSIGHTS';
        this.title = '';
        this.messageLabelKey = 'LBL_CHART_NOT_FOUND';
        this.selectedChart = '';
        this.chartType = '';
        this.loading = true;
        this.subs = [];
    }
    ngOnInit() {
        this.appStrings$ = this.language.appStrings$;
        if (this.validateConfig() === false) {
            return;
        }
        if (this.context$) {
            this.subs.push(this.context$.subscribe((context) => {
                this.context = context;
                Object.keys(this.charts).forEach(key => {
                    const chart = this.charts[key];
                    chart.store.context = context;
                });
            }));
        }
        const options = this.config.options;
        const charts = options.charts;
        if (options.defaultChart) {
            this.selectedChart = options.defaultChart || '';
        }
        this.setupCharts(charts);
        this.setHeaderTitle(options);
        this.reloadSelectedChart();
        this.setupLoading();
        this.setupVM();
        this.setupReload();
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    get configuredCharts() {
        return this.chartOptions.charts || [];
    }
    get chartOptions() {
        return this.config.options || {};
    }
    isConfigured() {
        return !!(this.config.options.charts && this.config.options.charts.length);
    }
    getLabelKey(stat) {
        const labelKey = stat.statistic.metadata && stat.statistic.metadata.labelKey;
        if (labelKey) {
            return labelKey;
        }
        return this.charts[stat.query.key].labelKey;
    }
    getKey(chart) {
        return chart.chartKey || chart.statisticsType || '';
    }
    validateConfig() {
        if (!this.context || !this.context.module) {
            this.messageLabelKey = 'LBL_BAD_CONFIG_BAD_CONTEXT';
            return false;
        }
        if (!this.config) {
            this.messageLabelKey = 'LBL_BAD_CONFIG_NO_CONFIG';
            return false;
        }
        const options = this.config.options;
        if (!options || !options.charts || !options.charts.length) {
            this.messageLabelKey = 'LBL_BAD_CONFIG_NO_STATISTICS_KEY';
            return false;
        }
        return true;
    }
    setupCharts(charts) {
        this.selectedChart = '';
        charts.forEach((chart) => {
            const key = this.getKey(chart);
            if (!key) {
                return;
            }
            if (!this.selectedChart) {
                this.selectedChart = key || '';
                this.chartType = chart.chartType;
            }
            this.buildChartInfo(key, chart);
            this.initChartStore(key, chart);
        });
    }
    buildChartInfo(key, chart) {
        this.charts[key] = {
            key,
            labelKey: chart.labelKey || '',
            chartType: chart.chartType,
            statisticsType: chart.statisticsType,
            store: this.factory.create(),
            reload: true
        };
    }
    initChartStore(key, chart) {
        this.charts[key].store.init(this.context.module, {
            key: chart.statisticsType,
            context: { ...this.context }
        }, false);
        this.charts[key].store.setDefaultOptions(chart.chartOptions);
    }
    setHeaderTitle(options) {
        if (this.config.labelKey) {
            this.titleLabelKey = this.config.labelKey;
        }
        if (options.headerTitle) {
            if (!this.charts || !this.charts[this.selectedChart] || !this.charts[this.selectedChart].labelKey) {
                return;
            }
            this.titleLabelKey = this.charts[this.selectedChart].labelKey;
        }
        this.title = this.language.getFieldLabel(this.titleLabelKey);
    }
    onChartSelect() {
        this.dataSource = null;
        this.chartType = this.charts[this.selectedChart].chartType;
        this.reloadSelectedChart(false);
    }
    setupVM() {
        const statistics$ = [];
        Object.keys(this.charts).forEach(key => statistics$.push(this.charts[key].store.state$));
        let statisticObs = of([]);
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
        this.vm$ = statisticObs.pipe(combineLatestWith(this.language.appStrings$), map(([statistics, appStrings]) => {
            const statsMap = this.mapChartData(statistics);
            return {
                statistics: statsMap,
                appStrings
            };
        }));
    }
    mapChartData(statistics) {
        const statsMap = {};
        statistics.forEach((statistic) => {
            if (!statistic.query.key) {
                return;
            }
            statsMap[statistic.query.key] = statistic;
            this.charts[statistic.query.key].labelKey = this.getLabelKey(statistic);
        });
        return statsMap;
    }
    setupReload() {
        if (!this.config.reload$) {
            return;
        }
        this.subs.push(this.config.reload$.subscribe(() => {
            if (this.loading === true) {
                return;
            }
            this.loading = true;
            Object.keys(this.charts).forEach(chartKey => {
                this.charts[chartKey].reload = true;
            });
            this.reloadSelectedChart();
        }));
    }
    setupLoading() {
        const loadings$ = [];
        Object.keys(this.charts).forEach(key => loadings$.push(this.charts[key].store.loading$));
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
            let loading = false;
            loadings.forEach(value => {
                loading = loading || value;
            });
            this.loading = loading;
            return loading;
        }));
        this.subs.push(this.loading$.subscribe());
    }
    reloadSelectedChart(useCache = false) {
        if (!this.charts || !this.charts[this.selectedChart] || !this.charts[this.selectedChart].store) {
            return;
        }
        useCache = useCache && !this.charts[this.selectedChart].reload;
        this.charts[this.selectedChart].store.load(useCache).pipe(take(1), tap(() => {
            this.dataSource = this.charts[this.selectedChart]?.store?.getDataSource() ?? null;
            this.charts[this.selectedChart].reload = false;
        })).subscribe();
    }
    static { this.ɵfac = function ChartSidebarWidgetComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ChartSidebarWidgetComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore), i0.ɵɵdirectiveInject(i2.ChartDataStoreFactory)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ChartSidebarWidgetComponent, selectors: [["chart-sidebar-widget"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 3, consts: [[3, "title", 4, "ngIf"], [3, "title"], ["widget-body", ""], [1, "widget-background", "chart-sidebar-widget"], [1, "mb-2", "ml-1", "mr-1"], [1, "container-fluid"], ["class", "row", 4, "ngIf"], [1, "row", "mt-3", "chart-widget"], [1, "col", "pl-0", "pr-0", "pb-1", "pt-1", "d-flex", "justify-content-center"], [1, "flex-grow-1"], [4, "ngIf"], ["class", "chart-loading", 3, "m-3", 4, "ngIf"], ["class", "lead text-center pt-3", 4, "ngIf"], [1, "row"], [1, "col", "pr-2", "pl-2"], [1, "login-form", "mb-0", "mt-2", "w-100"], ["name", "chart", 1, "m-0", "w-100", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [3, "dataSource", "type", 4, "ngIf"], [3, "dataSource", "type"], [1, "chart-loading"], [3, "overlay"], [1, "lead", "text-center", "pt-3"]], template: function ChartSidebarWidgetComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ChartSidebarWidgetComponent_scrm_widget_panel_0_Template, 12, 5, "scrm-widget-panel", 0);
            i0.ɵɵpipe(1, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.vm$));
        } }, dependencies: [i3.NgForOf, i3.NgIf, i4.WidgetPanelComponent, i5.ɵNgNoValidate, i5.NgSelectOption, i5.ɵNgSelectMultipleOption, i5.SelectControlValueAccessor, i5.NgControlStatus, i5.NgControlStatusGroup, i5.NgModel, i5.NgForm, i6.ChartComponent, i7.LoadingSpinnerComponent, i3.AsyncPipe], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChartSidebarWidgetComponent, [{
        type: Component,
        args: [{ selector: 'chart-sidebar-widget', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<scrm-widget-panel [title]=\"this.title\" *ngIf=\"(vm$ | async) as vm\">\n    <div widget-body>\n        <div class=\"widget-background chart-sidebar-widget\">\n            <div class=\"mb-2 ml-1 mr-1\">\n                <div class=\"container-fluid\">\n                    <div class=\"row\" *ngIf=\"isConfigured && chartOptions.toggle\">\n                        <div class=\"col pr-2 pl-2\">\n                            <form class=\"login-form mb-0 mt-2 w-100\">\n\n                                <select (ngModelChange)=\"onChartSelect()\" [(ngModel)]=\"selectedChart\" class=\"m-0 w-100\"\n                                        name=\"chart\">\n                                    <option *ngFor=\"let chart of configuredCharts; index as i\"\n                                            [value]=\"getKey(chart)\">\n                                        {{language.getFieldLabel(chart.labelKey)}}\n                                    </option>\n                                </select>\n                            </form>\n                        </div>\n                    </div>\n\n                    <div class=\"row mt-3 chart-widget\">\n                        <div class=\"col pl-0 pr-0 pb-1 pt-1 d-flex justify-content-center\">\n                            <div class=\"flex-grow-1\">\n                                <ng-container *ngIf=\"selectedChart && !loading\">\n                                    <scrm-chart *ngIf=\"dataSource && chartType\"\n                                                [dataSource]=\"dataSource\"\n                                                [type]=\"chartType\">\n                                    </scrm-chart>\n                                </ng-container>\n                                <div *ngIf=\"loading\" [class.m-3]=\"!dataSource\" class=\"chart-loading\">\n                                    <scrm-loading-spinner [overlay]=\"true\"></scrm-loading-spinner>\n                                </div>\n                                <p *ngIf=\"!loading && (!isConfigured() || !dataSource)\"\n                                   class=\"lead text-center pt-3\">\n                                    {{language.getFieldLabel(this.messageLabelKey)}}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</scrm-widget-panel>\n" }]
    }], () => [{ type: i1.LanguageStore }, { type: i2.ChartDataStoreFactory }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ChartSidebarWidgetComponent, { className: "ChartSidebarWidgetComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtc2lkZWJhci13aWRnZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbnRhaW5lcnMvc2lkZWJhci13aWRnZXQvY29tcG9uZW50cy9jaGFydC1zaWRlYmFyLXdpZGdldC9jaGFydC1zaWRlYmFyLXdpZGdldC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9zaWRlYmFyLXdpZGdldC9jb21wb25lbnRzL2NoYXJ0LXNpZGViYXItd2lkZ2V0L2NoYXJ0LXNpZGViYXItd2lkZ2V0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBS2hELE9BQU8sRUFBQyxpQkFBaUIsRUFBYyxFQUFFLEVBQWUsTUFBTSxNQUFNLENBQUM7QUFDckUsT0FBTyxFQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDNUYsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDdkUsT0FBTyxFQUFDLGFBQWEsRUFBb0IsTUFBTSwyQ0FBMkMsQ0FBQzs7Ozs7Ozs7OztJQ0d2RCxrQ0FDZ0M7SUFDNUIsWUFDSjtJQUFBLGlCQUFTOzs7O0lBRkQsK0NBQXVCO0lBQzNCLGNBQ0o7SUFESSxpRkFDSjs7OztJQUxKLEFBRkosQUFESixBQURKLCtCQUE2RCxjQUM5QixlQUNrQixpQkFHaEI7SUFEYiw0TkFBaUIsc0JBQWUsS0FBQztJQUFDLDJVQUEyQjtJQUVqRSw2R0FDZ0M7SUFNaEQsQUFE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QUM7SUFDOUMsQ0FBQztJQUVTLG1CQUFtQixDQUFDLFFBQVEsR0FBRyxLQUFLO1FBRTFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUM3RixPQUFPO1FBQ1gsQ0FBQztRQUVELFFBQVEsR0FBRyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFFL0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQ3JELElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxHQUFHLENBQUMsR0FBRyxFQUFFO1lBQ0wsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLElBQUksSUFBSSxDQUFDO1lBQ2xGLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDbkQsQ0FBQyxDQUFDLENBQ0wsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNsQixDQUFDOzRIQWxUUSwyQkFBMkI7b0VBQTNCLDJCQUEyQjtZQ3RDeEMseUdBQW9FOzs7WUFBM0Isb0RBQW9COzs7aUZEc0NoRCwyQkFBMkI7Y0FMdkMsU0FBUzsyQkFDSSxzQkFBc0I7O2tGQUl2QiwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDaGFydERhdGFTb3VyY2V9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jb250YWluZXJzL2NoYXJ0L2NoYXJ0Lm1vZGVsJztcbmltcG9ydCB7Q2hhcnRNZXRhZGF0YSwgQ2hhcnRzV2lkZ2V0T3B0aW9uc30gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL21ldGFkYXRhL2NoYXJ0cy13aWRnZXQubWV0YWRhdGEnO1xuaW1wb3J0IHtTdGF0aXN0aWNzUXVlcnl9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9zdGF0aXN0aWNzL3N0YXRpc3RpY3MubW9kZWwnO1xuaW1wb3J0IHtWaWV3Q29udGV4dH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3ZpZXdzL3ZpZXcubW9kZWwnO1xuaW1wb3J0IHtjb21iaW5lTGF0ZXN0V2l0aCwgT2JzZXJ2YWJsZSwgb2YsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge21hcCwgdGFrZSwgdGFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge0NoYXJ0RGF0YVN0b3JlRmFjdG9yeX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvY2hhcnQtZGF0YS9jaGFydC1kYXRhLnN0b3JlLmZhY3RvcnknO1xuaW1wb3J0IHtCYXNlV2lkZ2V0Q29tcG9uZW50fSBmcm9tICcuLi8uLi8uLi93aWRnZXRzL2Jhc2Utd2lkZ2V0Lm1vZGVsJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZSwgTGFuZ3VhZ2VTdHJpbmdNYXB9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7Q2hhcnREYXRhU3RhdGUsIENoYXJ0RGF0YVN0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9jaGFydC1kYXRhL2NoYXJ0LWRhdGEuc3RvcmUnO1xuXG5pbnRlcmZhY2UgQ2hhcnRTdGF0aXN0aWMge1xuICAgIGtleTogc3RyaW5nO1xuICAgIGNoYXJ0VHlwZTogc3RyaW5nO1xuICAgIHN0YXRpc3RpY3NUeXBlOiBzdHJpbmc7XG4gICAgbGFiZWxLZXk6IHN0cmluZztcbiAgICBzdG9yZTogQ2hhcnREYXRhU3RvcmU7XG4gICAgcmVsb2FkOiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgQ2hhckRhdGFNYXAge1xuICAgIFtrZXk6IHN0cmluZ106IENoYXJ0RGF0YVN0YXRlO1xufVxuXG5pbnRlcmZhY2UgQ2hhcnRTdGF0aXN0aWNNYXAge1xuICAgIFtrZXk6IHN0cmluZ106IENoYXJ0U3RhdGlzdGljO1xufVxuXG5pbnRlcmZhY2UgQ2hhcnRTaWRlYmFyV2lkZ2V0U3RhdGUge1xuICAgIHN0YXRpc3RpY3M6IHsgW2tleTogc3RyaW5nXTogQ2hhcnREYXRhU3RhdGUgfTtcbiAgICBhcHBTdHJpbmdzOiBMYW5ndWFnZVN0cmluZ01hcDtcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjaGFydC1zaWRlYmFyLXdpZGdldCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NoYXJ0LXNpZGViYXItd2lkZ2V0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIENoYXJ0U2lkZWJhcldpZGdldENvbXBvbmVudCBleHRlbmRzIEJhc2VXaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGNoYXJ0czogQ2hhcnRTdGF0aXN0aWNNYXAgPSB7fTtcbiAgICB0aXRsZUxhYmVsS2V5ID0gJ0xCTF9JTlNJR0hUUyc7XG4gICAgdGl0bGUgPSAnJztcbiAgICBtZXNzYWdlTGFiZWxLZXkgPSAnTEJMX0NIQVJUX05PVF9GT1VORCc7XG4gICAgc2VsZWN0ZWRDaGFydCA9ICcnO1xuICAgIGNoYXJ0VHlwZSA9ICcnO1xuICAgIGRhdGFTb3VyY2U6IENoYXJ0RGF0YVNvdXJjZTtcbiAgICB2bSQ6IE9ic2VydmFibGU8Q2hhcnRTaWRlYmFyV2lkZ2V0U3RhdGU+O1xuICAgIGxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIGFwcFN0cmluZ3MkOiBPYnNlcnZhYmxlPExhbmd1YWdlU3RyaW5nTWFwPjtcbiAgICBsb2FkaW5nID0gdHJ1ZTtcbiAgICBwcm90ZWN0ZWQgc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuXG4gICAgY29uc3RydWN0b3IocHVibGljIGxhbmd1YWdlOiBMYW5ndWFnZVN0b3JlLCBwcm90ZWN0ZWQgZmFjdG9yeTogQ2hhcnREYXRhU3RvcmVGYWN0b3J5KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYXBwU3RyaW5ncyQgPSB0aGlzLmxhbmd1YWdlLmFwcFN0cmluZ3MkO1xuXG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRlQ29uZmlnKCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb250ZXh0JCkge1xuICAgICAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5jb250ZXh0JC5zdWJzY3JpYmUoKGNvbnRleHQ6IFZpZXdDb250ZXh0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuY2hhcnRzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoYXJ0ID0gdGhpcy5jaGFydHNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgY2hhcnQuc3RvcmUuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvcHRpb25zOiBDaGFydHNXaWRnZXRPcHRpb25zID0gdGhpcy5jb25maWcub3B0aW9ucztcbiAgICAgICAgY29uc3QgY2hhcnRzOiBDaGFydE1ldGFkYXRhW10gPSBvcHRpb25zLmNoYXJ0cztcblxuICAgICAgICBpZiAob3B0aW9ucy5kZWZhdWx0Q2hhcnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDaGFydCA9IG9wdGlvbnMuZGVmYXVsdENoYXJ0IHx8ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXR1cENoYXJ0cyhjaGFydHMpO1xuICAgICAgICB0aGlzLnNldEhlYWRlclRpdGxlKG9wdGlvbnMpO1xuICAgICAgICB0aGlzLnJlbG9hZFNlbGVjdGVkQ2hhcnQoKTtcbiAgICAgICAgdGhpcy5zZXR1cExvYWRpbmcoKTtcbiAgICAgICAgdGhpcy5zZXR1cFZNKCk7XG4gICAgICAgIHRoaXMuc2V0dXBSZWxvYWQoKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdWJzLmZvckVhY2goc3ViID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcbiAgICB9XG5cbiAgICBnZXQgY29uZmlndXJlZENoYXJ0cygpOiBDaGFydE1ldGFkYXRhW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFydE9wdGlvbnMuY2hhcnRzIHx8IFtdO1xuICAgIH1cblxuICAgIGdldCBjaGFydE9wdGlvbnMoKTogQ2hhcnRzV2lkZ2V0T3B0aW9ucyB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5vcHRpb25zIHx8IHt9O1xuICAgIH1cblxuICAgIGlzQ29uZmlndXJlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICEhKHRoaXMuY29uZmlnLm9wdGlvbnMuY2hhcnRzICYmIHRoaXMuY29uZmlnLm9wdGlvbnMuY2hhcnRzLmxlbmd0aCk7XG4gICAgfVxuXG4gICAgZ2V0TGFiZWxLZXkoc3RhdDogQ2hhcnREYXRhU3RhdGUpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBsYWJlbEtleSA9IHN0YXQuc3RhdGlzdGljLm1ldGFkYXRhICYmIHN0YXQuc3RhdGlzdGljLm1ldGFkYXRhLmxhYmVsS2V5O1xuICAgICAgICBpZiAobGFiZWxLZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBsYWJlbEtleTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmNoYXJ0c1tzdGF0LnF1ZXJ5LmtleV0ubGFiZWxLZXk7XG4gICAgfVxuXG4gICAgZ2V0S2V5KGNoYXJ0OiBDaGFydE1ldGFkYXRhKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGNoYXJ0LmNoYXJ0S2V5IHx8IGNoYXJ0LnN0YXRpc3RpY3NUeXBlIHx8ICcnO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCB2YWxpZGF0ZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRleHQgfHwgIXRoaXMuY29udGV4dC5tb2R1bGUpIHtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUxhYmVsS2V5ID0gJ0xCTF9CQURfQ09ORklHX0JBRF9DT05URVhUJztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5jb25maWcpIHtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUxhYmVsS2V5ID0gJ0xCTF9CQURfQ09ORklHX05PX0NPTkZJRyc7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvcHRpb25zOiBDaGFydHNXaWRnZXRPcHRpb25zID0gdGhpcy5jb25maWcub3B0aW9ucztcblxuICAgICAgICBpZiAoIW9wdGlvbnMgfHwgIW9wdGlvbnMuY2hhcnRzIHx8ICFvcHRpb25zLmNoYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUxhYmVsS2V5ID0gJ0xCTF9CQURfQ09ORklHX05PX1NUQVRJU1RJQ1NfS0VZJztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZXR1cENoYXJ0cyhjaGFydHM6IENoYXJ0TWV0YWRhdGFbXSk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDaGFydCA9ICcnO1xuXG4gICAgICAgIGNoYXJ0cy5mb3JFYWNoKChjaGFydDogQ2hhcnRNZXRhZGF0YSkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBrZXkgPSB0aGlzLmdldEtleShjaGFydCk7XG5cbiAgICAgICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXRoaXMuc2VsZWN0ZWRDaGFydCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDaGFydCA9IGtleSB8fCAnJztcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJ0VHlwZSA9IGNoYXJ0LmNoYXJ0VHlwZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5idWlsZENoYXJ0SW5mbyhrZXksIGNoYXJ0KTtcbiAgICAgICAgICAgIHRoaXMuaW5pdENoYXJ0U3RvcmUoa2V5LCBjaGFydCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBidWlsZENoYXJ0SW5mbyhrZXk6IHN0cmluZywgY2hhcnQ6IENoYXJ0TWV0YWRhdGEpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jaGFydHNba2V5XSA9IHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGxhYmVsS2V5OiBjaGFydC5sYWJlbEtleSB8fCAnJyxcbiAgICAgICAgICAgIGNoYXJ0VHlwZTogY2hhcnQuY2hhcnRUeXBlLFxuICAgICAgICAgICAgc3RhdGlzdGljc1R5cGU6IGNoYXJ0LnN0YXRpc3RpY3NUeXBlLFxuICAgICAgICAgICAgc3RvcmU6IHRoaXMuZmFjdG9yeS5jcmVhdGUoKSxcbiAgICAgICAgICAgIHJlbG9hZDogdHJ1ZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBpbml0Q2hhcnRTdG9yZShrZXk6IHN0cmluZywgY2hhcnQ6IENoYXJ0TWV0YWRhdGEpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jaGFydHNba2V5XS5zdG9yZS5pbml0KFxuICAgICAgICAgICAgdGhpcy5jb250ZXh0Lm1vZHVsZSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IGNoYXJ0LnN0YXRpc3RpY3NUeXBlLFxuICAgICAgICAgICAgICAgIGNvbnRleHQ6IHsuLi50aGlzLmNvbnRleHR9XG4gICAgICAgICAgICB9IGFzIFN0YXRpc3RpY3NRdWVyeSxcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuY2hhcnRzW2tleV0uc3RvcmUuc2V0RGVmYXVsdE9wdGlvbnMoY2hhcnQuY2hhcnRPcHRpb25zKTtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBzZXRIZWFkZXJUaXRsZShvcHRpb25zOiBDaGFydHNXaWRnZXRPcHRpb25zKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmxhYmVsS2V5KSB7XG4gICAgICAgICAgICB0aGlzLnRpdGxlTGFiZWxLZXkgPSB0aGlzLmNvbmZpZy5sYWJlbEtleTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLmhlYWRlclRpdGxlKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY2hhcnRzIHx8ICF0aGlzLmNoYXJ0c1t0aGlzLnNlbGVjdGVkQ2hhcnRdIHx8ICF0aGlzLmNoYXJ0c1t0aGlzLnNlbGVjdGVkQ2hhcnRdLmxhYmVsS2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnRpdGxlTGFiZWxLZXkgPSB0aGlzLmNoYXJ0c1t0aGlzLnNlbGVjdGVkQ2hhcnRdLmxhYmVsS2V5O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50aXRsZSA9IHRoaXMubGFuZ3VhZ2UuZ2V0RmllbGRMYWJlbCh0aGlzLnRpdGxlTGFiZWxLZXkpO1xuICAgIH1cblxuICAgIG9uQ2hhcnRTZWxlY3QoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG51bGw7XG4gICAgICAgIHRoaXMuY2hhcnRUeXBlID0gdGhpcy5jaGFydHNbdGhpcy5zZWxlY3RlZENoYXJ0XS5jaGFydFR5cGU7XG4gICAgICAgIHRoaXMucmVsb2FkU2VsZWN0ZWRDaGFydChmYWxzZSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNldHVwVk0oKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3Qgc3RhdGlzdGljcyQ6IE9ic2VydmFibGU8Q2hhcnREYXRhU3RhdGU+W10gPSBbXTtcblxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmNoYXJ0cykuZm9yRWFjaChrZXkgPT4gc3RhdGlzdGljcyQucHVzaCh0aGlzLmNoYXJ0c1trZXldLnN0b3JlLnN0YXRlJCkpO1xuXG4gICAgICAgIGxldCBzdGF0aXN0aWNPYnM6IE9ic2VydmFibGU8Q2hhcnREYXRhU3RhdGVbXT4gPSBvZihbXSk7XG5cbiAgICAgICAgaWYoc3RhdGlzdGljcyQubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgc3RhdGlzdGljT2JzID0gb2YoW10pO1xuICAgICAgICB9IGVsc2UgaWYoc3RhdGlzdGljcyQubGVuZ3RoID09PSAxKXtcbiAgICAgICAgICAgIHN0YXRpc3RpY09icyA9IHN0YXRpc3RpY3MkWzBdLnBpcGUoXG4gICAgICAgICAgICAgICAgbWFwKHZhbHVlID0+IFt2YWx1ZV0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGZpcnNPYnMgPSBudWxsO1xuICAgICAgICAgICAgbGV0IG90aGVycztcbiAgICAgICAgICAgIFtmaXJzT2JzLCAuLi5vdGhlcnNdID0gc3RhdGlzdGljcyQ7XG4gICAgICAgICAgICBzdGF0aXN0aWNPYnMgPSBmaXJzT2JzLnBpcGUoXG4gICAgICAgICAgICAgICAgY29tYmluZUxhdGVzdFdpdGgob3RoZXJzKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudm0kID0gc3RhdGlzdGljT2JzLnBpcGUoXG4gICAgICAgICAgICBjb21iaW5lTGF0ZXN0V2l0aCh0aGlzLmxhbmd1YWdlLmFwcFN0cmluZ3MkKSxcbiAgICAgICAgICAgIG1hcCgoW3N0YXRpc3RpY3MsIGFwcFN0cmluZ3NdKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdHNNYXAgPSB0aGlzLm1hcENoYXJ0RGF0YShzdGF0aXN0aWNzKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpc3RpY3M6IHN0YXRzTWFwLFxuICAgICAgICAgICAgICAgICAgICBhcHBTdHJpbmdzXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG1hcENoYXJ0RGF0YShzdGF0aXN0aWNzOiBDaGFydERhdGFTdGF0ZVtdKTogQ2hhckRhdGFNYXAge1xuICAgICAgICBjb25zdCBzdGF0c01hcDogQ2hhckRhdGFNYXAgPSB7fTtcblxuICAgICAgICBzdGF0aXN0aWNzLmZvckVhY2goKHN0YXRpc3RpYzogQ2hhcnREYXRhU3RhdGUpID0+IHtcblxuICAgICAgICAgICAgaWYgKCFzdGF0aXN0aWMucXVlcnkua2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdGF0c01hcFtzdGF0aXN0aWMucXVlcnkua2V5XSA9IHN0YXRpc3RpYztcblxuICAgICAgICAgICAgdGhpcy5jaGFydHNbc3RhdGlzdGljLnF1ZXJ5LmtleV0ubGFiZWxLZXkgPSB0aGlzLmdldExhYmVsS2V5KHN0YXRpc3RpYyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzdGF0c01hcDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2V0dXBSZWxvYWQoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5jb25maWcucmVsb2FkJCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5jb25maWcucmVsb2FkJC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMubG9hZGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5jaGFydHMpLmZvckVhY2goY2hhcnRLZXkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhcnRzW2NoYXJ0S2V5XS5yZWxvYWQgPSB0cnVlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMucmVsb2FkU2VsZWN0ZWRDaGFydCgpO1xuICAgICAgICB9KSk7XG5cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2V0dXBMb2FkaW5nKCk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IGxvYWRpbmdzJDogT2JzZXJ2YWJsZTxib29sZWFuPltdID0gW107XG5cbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5jaGFydHMpLmZvckVhY2goa2V5ID0+IGxvYWRpbmdzJC5wdXNoKHRoaXMuY2hhcnRzW2tleV0uc3RvcmUubG9hZGluZyQpKTtcblxuICAgICAgICBsZXQgc3RhdGlzdGljT2JzOiBPYnNlcnZhYmxlPGJvb2xlYW5bXT4gPSBvZihbXSk7XG5cbiAgICAgICAgaWYobG9hZGluZ3MkLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgIHN0YXRpc3RpY09icyA9IG9mKFtdKTtcbiAgICAgICAgfSBlbHNlIGlmKGxvYWRpbmdzJC5sZW5ndGggPT09IDEpe1xuICAgICAgICAgICAgc3RhdGlzdGljT2JzID0gbG9hZGluZ3MkWzBdLnBpcGUoXG4gICAgICAgICAgICAgICAgbWFwKHZhbHVlID0+IFt2YWx1ZV0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGZpcnNPYnMgPSBudWxsO1xuICAgICAgICAgICAgbGV0IG90aGVycztcbiAgICAgICAgICAgIFtmaXJzT2JzLCAuLi5vdGhlcnNdID0gbG9hZGluZ3MkO1xuICAgICAgICAgICAgc3RhdGlzdGljT2JzID0gZmlyc09icy5waXBlKFxuICAgICAgICAgICAgICAgIGNvbWJpbmVMYXRlc3RXaXRoKG90aGVycylcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvYWRpbmckID0gc3RhdGlzdGljT2JzLnBpcGUoXG4gICAgICAgICAgICBtYXAoKGxvYWRpbmdzKSA9PiB7XG5cbiAgICAgICAgICAgIGlmICghbG9hZGluZ3MgfHwgbG9hZGluZ3MubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGxvYWRpbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgbG9hZGluZ3MuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgbG9hZGluZyA9IGxvYWRpbmcgfHwgdmFsdWU7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gbG9hZGluZztcblxuICAgICAgICAgICAgcmV0dXJuIGxvYWRpbmc7XG4gICAgICAgIH0pKTtcblxuICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLmxvYWRpbmckLnN1YnNjcmliZSgpKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVsb2FkU2VsZWN0ZWRDaGFydCh1c2VDYWNoZSA9IGZhbHNlKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKCF0aGlzLmNoYXJ0cyB8fCAhdGhpcy5jaGFydHNbdGhpcy5zZWxlY3RlZENoYXJ0XSB8fCAhdGhpcy5jaGFydHNbdGhpcy5zZWxlY3RlZENoYXJ0XS5zdG9yZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdXNlQ2FjaGUgPSB1c2VDYWNoZSAmJiAhdGhpcy5jaGFydHNbdGhpcy5zZWxlY3RlZENoYXJ0XS5yZWxvYWQ7XG5cbiAgICAgICAgdGhpcy5jaGFydHNbdGhpcy5zZWxlY3RlZENoYXJ0XS5zdG9yZS5sb2FkKHVzZUNhY2hlKS5waXBlKFxuICAgICAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgICAgIHRhcCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlID0gdGhpcy5jaGFydHNbdGhpcy5zZWxlY3RlZENoYXJ0XT8uc3RvcmU/LmdldERhdGFTb3VyY2UoKSA/PyBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhcnRzW3RoaXMuc2VsZWN0ZWRDaGFydF0ucmVsb2FkID0gZmFsc2U7XG4gICAgICAgICAgICB9KVxuICAgICAgICApLnN1YnNjcmliZSgpO1xuICAgIH1cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjxzY3JtLXdpZGdldC1wYW5lbCBbdGl0bGVdPVwidGhpcy50aXRsZVwiICpuZ0lmPVwiKHZtJCB8IGFzeW5jKSBhcyB2bVwiPlxuICAgIDxkaXYgd2lkZ2V0LWJvZHk+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3aWRnZXQtYmFja2dyb3VuZCBjaGFydC1zaWRlYmFyLXdpZGdldFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTIgbWwtMSBtci0xXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgKm5nSWY9XCJpc0NvbmZpZ3VyZWQgJiYgY2hhcnRPcHRpb25zLnRvZ2dsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBwci0yIHBsLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzcz1cImxvZ2luLWZvcm0gbWItMCBtdC0yIHctMTAwXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCAobmdNb2RlbENoYW5nZSk9XCJvbkNoYXJ0U2VsZWN0KClcIiBbKG5nTW9kZWwpXT1cInNlbGVjdGVkQ2hhcnRcIiBjbGFzcz1cIm0tMCB3LTEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNoYXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBjaGFydCBvZiBjb25maWd1cmVkQ2hhcnRzOyBpbmRleCBhcyBpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cImdldEtleShjaGFydClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2xhbmd1YWdlLmdldEZpZWxkTGFiZWwoY2hhcnQubGFiZWxLZXkpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBtdC0zIGNoYXJ0LXdpZGdldFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBwbC0wIHByLTAgcGItMSBwdC0xIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtZ3Jvdy0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzZWxlY3RlZENoYXJ0ICYmICFsb2FkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1jaGFydCAqbmdJZj1cImRhdGFTb3VyY2UgJiYgY2hhcnRUeXBlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3R5cGVdPVwiY2hhcnRUeXBlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Njcm0tY2hhcnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwibG9hZGluZ1wiIFtjbGFzcy5tLTNdPVwiIWRhdGFTb3VyY2VcIiBjbGFzcz1cImNoYXJ0LWxvYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWxvYWRpbmctc3Bpbm5lciBbb3ZlcmxheV09XCJ0cnVlXCI+PC9zY3JtLWxvYWRpbmctc3Bpbm5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwICpuZ0lmPVwiIWxvYWRpbmcgJiYgKCFpc0NvbmZpZ3VyZWQoKSB8fCAhZGF0YVNvdXJjZSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxlYWQgdGV4dC1jZW50ZXIgcHQtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tsYW5ndWFnZS5nZXRGaWVsZExhYmVsKHRoaXMubWVzc2FnZUxhYmVsS2V5KX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvc2NybS13aWRnZXQtcGFuZWw+XG4iXX0=