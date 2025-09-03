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
import { Component, ElementRef } from '@angular/core';
import { isFalse } from '../../../../common/utils/value-utils';
import { BaseChartComponent } from '../base-chart/base-chart.component';
import { ScreenSizeObserverService } from "../../../../services/ui/screen-size-observer/screen-size-observer.service";
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/ui/screen-size-observer/screen-size-observer.service";
import * as i2 from "@angular/common";
import * as i3 from "@swimlane/ngx-charts";
import * as i4 from "../chart-message-area/chart-message-area.component";
import * as i5 from "../../../loading-spinner/loading-spinner.component";
function LineChartComponent_scrm_chart_message_area_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-chart-message-area", 3);
} }
function LineChartComponent_ng_container_1_ngx_charts_line_chart_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ngx-charts-line-chart", 5);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("animations", false)("results", ctx_r0.results)("view", ctx_r0.view())("scheme", ctx_r0.scheme)("gradient", ctx_r0.gradient)("xAxis", ctx_r0.xAxis)("yAxis", ctx_r0.yAxis)("legend", ctx_r0.legend)("xScaleMin", ctx_r0.xScaleMin)("xScaleMax", ctx_r0.xScaleMax)("xAxisTicks", ctx_r0.xAxisTicks)("showXAxisLabel", ctx_r0.showXAxisLabel)("showYAxisLabel", ctx_r0.showYAxisLabel)("xAxisLabel", ctx_r0.xAxisLabel)("legendPosition", "below")("autoScale", true)("yAxisTickFormatting", ctx_r0.yAxisTickFormatting)("xAxisTickFormatting", ctx_r0.xAxisTickFormatting)("tooltipDisabled", ctx_r0.tooltipDisabled)("yAxisLabel", ctx_r0.yAxisLabel);
} }
function LineChartComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, LineChartComponent_ng_container_1_ngx_charts_line_chart_1_Template, 1, 20, "ngx-charts-line-chart", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.results && ctx_r0.results.length > 0);
} }
function LineChartComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "scrm-loading-spinner");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵclassProp("m-5", true);
} }
export class LineChartComponent extends BaseChartComponent {
    constructor(elementRef, screenSize) {
        super(elementRef, screenSize);
        this.elementRef = elementRef;
        this.screenSize = screenSize;
    }
    ngOnInit() {
        if (this.dataSource.options.height) {
            this.height = this.dataSource.options.height;
        }
        this.initResizeListener();
        this.subs.push(this.dataSource.getResults().subscribe(value => {
            this.results = value.multiSeries;
            this.calculateView();
        }));
        this.scheme = this.getScheme();
        this.gradient = this.getGradient();
        this.xAxis = this.getXAxis();
        this.yAxis = this.getYAxis();
        this.legend = this.getLegend();
        this.xScaleMin = this.getXScaleMin();
        this.xScaleMax = this.getXScaleMax();
        this.xAxisTicks = this.getXAxisTicks();
        this.showXAxisLabel = this.getShowXAxisLabel();
        this.showYAxisLabel = this.getShowYAxisLabel();
        this.xAxisLabel = this.getXAxisLabel();
        this.yAxisLabel = this.getYAxisLabel();
        this.yAxisTickFormatting = this.getYAxisTickFormatting();
        this.xAxisTickFormatting = this.getXAxisTickFormatting();
        this.tooltipDisabled = this.getTooltipDisabled();
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    getScheme() {
        return this.dataSource.options.scheme || 'picnic';
    }
    getGradient() {
        return this.dataSource.options.gradient || false;
    }
    getXAxis() {
        return !isFalse(this.dataSource.options.xAxis);
    }
    getYAxis() {
        return !isFalse(this.dataSource.options.yAxis);
    }
    getLegend() {
        return !isFalse(this.dataSource.options.legend);
    }
    getXScaleMin() {
        return this.dataSource.options.xScaleMin || null;
    }
    getXScaleMax() {
        return this.dataSource.options.xScaleMax || null;
    }
    getXAxisTicks() {
        return this.dataSource.options.xAxisTicks || null;
    }
    getShowXAxisLabel() {
        return !isFalse(this.dataSource.options.showXAxisLabel);
    }
    getShowYAxisLabel() {
        return this.dataSource.options.showYAxisLabel || false;
    }
    getXAxisLabel() {
        return this.dataSource.options.xAxisLabel || '';
    }
    getYAxisLabel() {
        return this.dataSource.options.yAxisLabel || '';
    }
    getYAxisTickFormatting() {
        if (!this.dataSource.options.yAxisTickFormatting) {
            return null;
        }
        return this.dataSource.tickFormatting || null;
    }
    getXAxisTickFormatting() {
        if (!this.dataSource.options.xAxisTickFormatting) {
            return null;
        }
        return this.dataSource.tickFormatting || null;
    }
    getTooltipDisabled() {
        return this.dataSource.options.tooltipDisabled || false;
    }
    static { this.ɵfac = function LineChartComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LineChartComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.ScreenSizeObserverService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LineChartComponent, selectors: [["scrm-line-chart"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 3, consts: [["labelKey", "LBL_NO_DATA", 4, "ngIf"], [4, "ngIf"], ["class", "chart-loading", 3, "m-5", 4, "ngIf"], ["labelKey", "LBL_NO_DATA"], ["class", "line-chart", 3, "animations", "results", "view", "scheme", "gradient", "xAxis", "yAxis", "legend", "xScaleMin", "xScaleMax", "xAxisTicks", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "legendPosition", "autoScale", "yAxisTickFormatting", "xAxisTickFormatting", "tooltipDisabled", "yAxisLabel", 4, "ngIf"], [1, "line-chart", 3, "animations", "results", "view", "scheme", "gradient", "xAxis", "yAxis", "legend", "xScaleMin", "xScaleMax", "xAxisTicks", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "legendPosition", "autoScale", "yAxisTickFormatting", "xAxisTickFormatting", "tooltipDisabled", "yAxisLabel"], [1, "chart-loading"]], template: function LineChartComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, LineChartComponent_scrm_chart_message_area_0_Template, 1, 0, "scrm-chart-message-area", 0)(1, LineChartComponent_ng_container_1_Template, 2, 1, "ng-container", 1)(2, LineChartComponent_div_2_Template, 2, 2, "div", 2);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.results || !ctx.results.length || ctx.results.length < 1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.view().length);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.view().length && ctx.results && ctx.results.length > 0);
        } }, dependencies: [i2.NgIf, i3.LineChartComponent, i4.ChartMessageAreaComponent, i5.LoadingSpinnerComponent], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LineChartComponent, [{
        type: Component,
        args: [{ selector: 'scrm-line-chart', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<scrm-chart-message-area *ngIf=\"!results || !results.length || results.length < 1\"\n                         labelKey=\"LBL_NO_DATA\"></scrm-chart-message-area>\n<ng-container *ngIf=\"view().length\">\n    <ngx-charts-line-chart *ngIf=\"results && results.length > 0\"\n                           class=\"line-chart\"\n                           [animations]=\"false\"\n                           [results]=\"results\"\n                           [view]=\"view()\"\n                           [scheme]=\"scheme\"\n                           [gradient]=\"gradient\"\n                           [xAxis]=\"xAxis\"\n                           [yAxis]=\"yAxis\"\n                           [legend]=\"legend\"\n                           [xScaleMin]=\"xScaleMin\"\n                           [xScaleMax]=\"xScaleMax\"\n                           [xAxisTicks]=\"xAxisTicks\"\n                           [showXAxisLabel]=\"showXAxisLabel\"\n                           [showYAxisLabel]=\"showYAxisLabel\"\n                           [xAxisLabel]=\"xAxisLabel\"\n                           [legendPosition]=\"'below'\"\n                           [autoScale]=\"true\"\n                           [yAxisTickFormatting]=\"yAxisTickFormatting\"\n                           [xAxisTickFormatting]=\"xAxisTickFormatting\"\n                           [tooltipDisabled]=\"tooltipDisabled\"\n                           [yAxisLabel]=\"yAxisLabel\">\n    </ngx-charts-line-chart>\n</ng-container>\n<div *ngIf=\"!view().length && results && results.length > 0\" [class.m-5]=\"true\" class=\"chart-loading\">\n    <scrm-loading-spinner></scrm-loading-spinner>\n</div>\n" }]
    }], () => [{ type: i0.ElementRef }, { type: i1.ScreenSizeObserverService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LineChartComponent, { className: "LineChartComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9jaGFydC9jb21wb25lbnRzL2xpbmUtY2hhcnQvbGluZS1jaGFydC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9jaGFydC9jb21wb25lbnRzL2xpbmUtY2hhcnQvbGluZS1jaGFydC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBRXZFLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUM3RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUN0RSxPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSwyRUFBMkUsQ0FBQzs7Ozs7Ozs7SUNIcEgsNkNBQzBFOzs7SUFFdEUsMkNBc0J3Qjs7O0lBREQsQUFEQSxBQURBLEFBREEsQUFEQSxBQURBLEFBREEsQUFEQSxBQURBLEFBREEsQUFEQSxBQURBLEFBREEsQUFEQSxBQURBLEFBREEsQUFEQSxBQURBLEFBREEsQUFEQSxrQ0FBb0IsMkJBQ0QsdUJBQ0oseUJBQ0UsNkJBQ0ksdUJBQ04sdUJBQ0EseUJBQ0UsK0JBQ00sK0JBQ0EsaUNBQ0UseUNBQ1EseUNBQ0EsaUNBQ1IsMkJBQ0MsbUJBQ1IsbURBQ3lCLG1EQUNBLDJDQUNSLGlDQUNWOzs7SUF0QnBELDZCQUFvQztJQUNoQyx1SEFxQmlEOzs7O0lBckJ6QixjQUFtQztJQUFuQyxrRUFBbUM7OztJQXdCL0QsOEJBQXNHO0lBQ2xHLHVDQUE2QztJQUNqRCxpQkFBTTs7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RUFBRSxDQUFDO1lBQy9DLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFDRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQztJQUNsRCxDQUFDO0lBRUQsa0JBQWtCO1FBQ2QsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxlQUFlLElBQUksS0FBSyxDQUFDO0lBQzVELENBQUM7bUhBeEhRLGtCQUFrQjtvRUFBbEIsa0JBQWtCO1lDaUIvQixBQXpCQSxBQUZBLDJHQUNnRCx3RUFDWixzREF5QmtFOztZQTNCNUUsb0ZBQXVEO1lBRWxFLGNBQW1CO1lBQW5CLHdDQUFtQjtZQXlCNUIsY0FBcUQ7WUFBckQsa0ZBQXFEOzs7aUZEakI5QyxrQkFBa0I7Y0FMOUIsU0FBUzsyQkFDSSxpQkFBaUI7O2tGQUlsQixrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkRlc3Ryb3ksIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge011bHRpU2VyaWVzfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY29udGFpbmVycy9jaGFydC9jaGFydC5tb2RlbCc7XG5pbXBvcnQge2lzRmFsc2V9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi91dGlscy92YWx1ZS11dGlscyc7XG5pbXBvcnQge0Jhc2VDaGFydENvbXBvbmVudH0gZnJvbSAnLi4vYmFzZS1jaGFydC9iYXNlLWNoYXJ0LmNvbXBvbmVudCc7XG5pbXBvcnQge1NjcmVlblNpemVPYnNlcnZlclNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi8uLi9zZXJ2aWNlcy91aS9zY3JlZW4tc2l6ZS1vYnNlcnZlci9zY3JlZW4tc2l6ZS1vYnNlcnZlci5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1saW5lLWNoYXJ0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbGluZS1jaGFydC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBMaW5lQ2hhcnRDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICByZXN1bHRzOiBNdWx0aVNlcmllcztcbiAgICBzY2hlbWU6IHN0cmluZztcbiAgICBncmFkaWVudDogYm9vbGVhbjtcbiAgICB4QXhpczogYm9vbGVhbjtcbiAgICB5QXhpczogYm9vbGVhbjtcbiAgICBsZWdlbmQ6IGJvb2xlYW47XG4gICAgeFNjYWxlTWluOiBudW1iZXIgfCBzdHJpbmc7XG4gICAgeFNjYWxlTWF4OiBudW1iZXIgfCBzdHJpbmc7XG4gICAgeEF4aXNUaWNrczogYW55O1xuICAgIHNob3dYQXhpc0xhYmVsOiBib29sZWFuO1xuICAgIHNob3dZQXhpc0xhYmVsOiBib29sZWFuO1xuICAgIHhBeGlzTGFiZWw6IHN0cmluZztcbiAgICB5QXhpc0xhYmVsOiBzdHJpbmc7XG4gICAgeUF4aXNUaWNrRm9ybWF0dGluZzogRnVuY3Rpb247XG4gICAgeEF4aXNUaWNrRm9ybWF0dGluZzogRnVuY3Rpb247XG4gICAgdG9vbHRpcERpc2FibGVkOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCBzY3JlZW5TaXplOiBTY3JlZW5TaXplT2JzZXJ2ZXJTZXJ2aWNlKSB7XG4gICAgICAgIHN1cGVyKGVsZW1lbnRSZWYsIHNjcmVlblNpemUpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5kYXRhU291cmNlLm9wdGlvbnMuaGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMuZGF0YVNvdXJjZS5vcHRpb25zLmhlaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5pdFJlc2l6ZUxpc3RlbmVyKCk7XG5cbiAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5kYXRhU291cmNlLmdldFJlc3VsdHMoKS5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZXN1bHRzID0gdmFsdWUubXVsdGlTZXJpZXM7XG4gICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZVZpZXcoKTtcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHRoaXMuc2NoZW1lID0gdGhpcy5nZXRTY2hlbWUoKTtcbiAgICAgICAgdGhpcy5ncmFkaWVudCA9IHRoaXMuZ2V0R3JhZGllbnQoKTtcbiAgICAgICAgdGhpcy54QXhpcyA9IHRoaXMuZ2V0WEF4aXMoKTtcbiAgICAgICAgdGhpcy55QXhpcyA9IHRoaXMuZ2V0WUF4aXMoKTtcbiAgICAgICAgdGhpcy5sZWdlbmQgPSB0aGlzLmdldExlZ2VuZCgpO1xuICAgICAgICB0aGlzLnhTY2FsZU1pbiA9IHRoaXMuZ2V0WFNjYWxlTWluKCk7XG4gICAgICAgIHRoaXMueFNjYWxlTWF4ID0gdGhpcy5nZXRYU2NhbGVNYXgoKTtcbiAgICAgICAgdGhpcy54QXhpc1RpY2tzID0gdGhpcy5nZXRYQXhpc1RpY2tzKCk7XG4gICAgICAgIHRoaXMuc2hvd1hBeGlzTGFiZWwgPSB0aGlzLmdldFNob3dYQXhpc0xhYmVsKCk7XG4gICAgICAgIHRoaXMuc2hvd1lBeGlzTGFiZWwgPSB0aGlzLmdldFNob3dZQXhpc0xhYmVsKCk7XG4gICAgICAgIHRoaXMueEF4aXNMYWJlbCA9IHRoaXMuZ2V0WEF4aXNMYWJlbCgpO1xuICAgICAgICB0aGlzLnlBeGlzTGFiZWwgPSB0aGlzLmdldFlBeGlzTGFiZWwoKTtcbiAgICAgICAgdGhpcy55QXhpc1RpY2tGb3JtYXR0aW5nID0gdGhpcy5nZXRZQXhpc1RpY2tGb3JtYXR0aW5nKCk7XG4gICAgICAgIHRoaXMueEF4aXNUaWNrRm9ybWF0dGluZyA9IHRoaXMuZ2V0WEF4aXNUaWNrRm9ybWF0dGluZygpO1xuICAgICAgICB0aGlzLnRvb2x0aXBEaXNhYmxlZCA9IHRoaXMuZ2V0VG9vbHRpcERpc2FibGVkKCk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3Vicy5mb3JFYWNoKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XG4gICAgfVxuXG4gICAgZ2V0U2NoZW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFTb3VyY2Uub3B0aW9ucy5zY2hlbWUgfHwgJ3BpY25pYyc7XG4gICAgfVxuXG4gICAgZ2V0R3JhZGllbnQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFTb3VyY2Uub3B0aW9ucy5ncmFkaWVudCB8fCBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXRYQXhpcygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICFpc0ZhbHNlKHRoaXMuZGF0YVNvdXJjZS5vcHRpb25zLnhBeGlzKTtcbiAgICB9XG5cbiAgICBnZXRZQXhpcygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICFpc0ZhbHNlKHRoaXMuZGF0YVNvdXJjZS5vcHRpb25zLnlBeGlzKTtcbiAgICB9XG5cbiAgICBnZXRMZWdlbmQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhaXNGYWxzZSh0aGlzLmRhdGFTb3VyY2Uub3B0aW9ucy5sZWdlbmQpO1xuICAgIH1cblxuICAgIGdldFhTY2FsZU1pbigpOiBudW1iZXIgfCBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhU291cmNlLm9wdGlvbnMueFNjYWxlTWluIHx8IG51bGw7XG4gICAgfVxuXG4gICAgZ2V0WFNjYWxlTWF4KCk6IG51bWJlciB8IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFTb3VyY2Uub3B0aW9ucy54U2NhbGVNYXggfHwgbnVsbDtcbiAgICB9XG5cbiAgICBnZXRYQXhpc1RpY2tzKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFTb3VyY2Uub3B0aW9ucy54QXhpc1RpY2tzIHx8IG51bGw7XG4gICAgfVxuXG4gICAgZ2V0U2hvd1hBeGlzTGFiZWwoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhaXNGYWxzZSh0aGlzLmRhdGFTb3VyY2Uub3B0aW9ucy5zaG93WEF4aXNMYWJlbCk7XG4gICAgfVxuXG4gICAgZ2V0U2hvd1lBeGlzTGFiZWwoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFTb3VyY2Uub3B0aW9ucy5zaG93WUF4aXNMYWJlbCB8fCBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXRYQXhpc0xhYmVsKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFTb3VyY2Uub3B0aW9ucy54QXhpc0xhYmVsIHx8ICcnO1xuICAgIH1cblxuICAgIGdldFlBeGlzTGFiZWwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVNvdXJjZS5vcHRpb25zLnlBeGlzTGFiZWwgfHwgJyc7XG4gICAgfVxuXG4gICAgZ2V0WUF4aXNUaWNrRm9ybWF0dGluZygpOiBGdW5jdGlvbiB7XG4gICAgICAgIGlmICghdGhpcy5kYXRhU291cmNlLm9wdGlvbnMueUF4aXNUaWNrRm9ybWF0dGluZykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVNvdXJjZS50aWNrRm9ybWF0dGluZyB8fCBudWxsO1xuICAgIH1cblxuICAgIGdldFhBeGlzVGlja0Zvcm1hdHRpbmcoKTogRnVuY3Rpb24ge1xuICAgICAgICBpZiAoIXRoaXMuZGF0YVNvdXJjZS5vcHRpb25zLnhBeGlzVGlja0Zvcm1hdHRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFTb3VyY2UudGlja0Zvcm1hdHRpbmcgfHwgbnVsbDtcbiAgICB9XG5cbiAgICBnZXRUb29sdGlwRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFTb3VyY2Uub3B0aW9ucy50b29sdGlwRGlzYWJsZWQgfHwgZmFsc2U7XG4gICAgfVxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPHNjcm0tY2hhcnQtbWVzc2FnZS1hcmVhICpuZ0lmPVwiIXJlc3VsdHMgfHwgIXJlc3VsdHMubGVuZ3RoIHx8IHJlc3VsdHMubGVuZ3RoIDwgMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxLZXk9XCJMQkxfTk9fREFUQVwiPjwvc2NybS1jaGFydC1tZXNzYWdlLWFyZWE+XG48bmctY29udGFpbmVyICpuZ0lmPVwidmlldygpLmxlbmd0aFwiPlxuICAgIDxuZ3gtY2hhcnRzLWxpbmUtY2hhcnQgKm5nSWY9XCJyZXN1bHRzICYmIHJlc3VsdHMubGVuZ3RoID4gMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxpbmUtY2hhcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW2FuaW1hdGlvbnNdPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Jlc3VsdHNdPVwicmVzdWx0c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbdmlld109XCJ2aWV3KClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW3NjaGVtZV09XCJzY2hlbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW2dyYWRpZW50XT1cImdyYWRpZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFt4QXhpc109XCJ4QXhpc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbeUF4aXNdPVwieUF4aXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xlZ2VuZF09XCJsZWdlbmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW3hTY2FsZU1pbl09XCJ4U2NhbGVNaW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW3hTY2FsZU1heF09XCJ4U2NhbGVNYXhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW3hBeGlzVGlja3NdPVwieEF4aXNUaWNrc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbc2hvd1hBeGlzTGFiZWxdPVwic2hvd1hBeGlzTGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Nob3dZQXhpc0xhYmVsXT1cInNob3dZQXhpc0xhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFt4QXhpc0xhYmVsXT1cInhBeGlzTGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xlZ2VuZFBvc2l0aW9uXT1cIidiZWxvdydcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F1dG9TY2FsZV09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFt5QXhpc1RpY2tGb3JtYXR0aW5nXT1cInlBeGlzVGlja0Zvcm1hdHRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW3hBeGlzVGlja0Zvcm1hdHRpbmddPVwieEF4aXNUaWNrRm9ybWF0dGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbdG9vbHRpcERpc2FibGVkXT1cInRvb2x0aXBEaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbeUF4aXNMYWJlbF09XCJ5QXhpc0xhYmVsXCI+XG4gICAgPC9uZ3gtY2hhcnRzLWxpbmUtY2hhcnQ+XG48L25nLWNvbnRhaW5lcj5cbjxkaXYgKm5nSWY9XCIhdmlldygpLmxlbmd0aCAmJiByZXN1bHRzICYmIHJlc3VsdHMubGVuZ3RoID4gMFwiIFtjbGFzcy5tLTVdPVwidHJ1ZVwiIGNsYXNzPVwiY2hhcnQtbG9hZGluZ1wiPlxuICAgIDxzY3JtLWxvYWRpbmctc3Bpbm5lcj48L3Njcm0tbG9hZGluZy1zcGlubmVyPlxuPC9kaXY+XG4iXX0=