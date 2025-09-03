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
import { debounceTime } from "rxjs/operators";
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/ui/screen-size-observer/screen-size-observer.service";
import * as i2 from "@angular/common";
import * as i3 from "@swimlane/ngx-charts";
import * as i4 from "../chart-message-area/chart-message-area.component";
import * as i5 from "../../../loading-spinner/loading-spinner.component";
function VerticalBarChartComponent_scrm_chart_message_area_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-chart-message-area", 4);
} }
function VerticalBarChartComponent_ng_container_1_ngx_charts_bar_vertical_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const model_r1 = ctx.model;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(model_r1.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.formatTooltipValue(model_r1.value));
} }
function VerticalBarChartComponent_ng_container_1_ngx_charts_bar_vertical_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ngx-charts-bar-vertical", 6);
    i0.ɵɵtemplate(1, VerticalBarChartComponent_ng_container_1_ngx_charts_bar_vertical_1_ng_template_1_Template, 4, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("animations", false)("results", ctx_r1.results)("view", ctx_r1.view())("scheme", ctx_r1.scheme)("gradient", ctx_r1.gradient)("xAxis", ctx_r1.xAxis)("yAxis", ctx_r1.yAxis)("legend", ctx_r1.legend)("legendPosition", "below")("showXAxisLabel", ctx_r1.showXAxisLabel)("showYAxisLabel", ctx_r1.showYAxisLabel)("xAxisLabel", ctx_r1.xAxisLabel)("yAxisLabel", ctx_r1.yAxisLabel)("yAxisTickFormatting", ctx_r1.yAxisTickFormatting);
} }
function VerticalBarChartComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, VerticalBarChartComponent_ng_container_1_ngx_charts_bar_vertical_1_Template, 3, 14, "ngx-charts-bar-vertical", 5);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.results && ctx_r1.results.length > 0);
} }
function VerticalBarChartComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelement(1, "scrm-loading-spinner");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵclassProp("m-5", true);
} }
export class VerticalBarChartComponent extends BaseChartComponent {
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
        this.subs.push(this.dataSource.getResults().pipe(debounceTime(500)).subscribe(value => {
            this.results = value.singleSeries;
            this.calculateView();
        }));
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    get scheme() {
        return this.dataSource.options.scheme || 'picnic';
    }
    get gradient() {
        return this.dataSource.options.gradient || false;
    }
    get xAxis() {
        return this.dataSource.options.xAxis || false;
    }
    get yAxis() {
        return !isFalse(this.dataSource.options.yAxis);
    }
    get legend() {
        return !isFalse(this.dataSource.options.legend);
    }
    get showXAxisLabel() {
        return this.dataSource.options.showXAxisLabel || false;
    }
    get showYAxisLabel() {
        return this.dataSource.options.showYAxisLabel || false;
    }
    get xAxisLabel() {
        return this.dataSource.options.xAxisLabel || '';
    }
    get yAxisLabel() {
        return this.dataSource.options.yAxisLabel || '';
    }
    get yAxisTickFormatting() {
        if (this.dataSource.options.yAxisTickFormatting) {
            return this.dataSource.tickFormatting;
        }
        return null;
    }
    formatTooltipValue(value) {
        if (!this.dataSource || !this.dataSource.tooltipFormatting) {
            return value;
        }
        return this.dataSource.tooltipFormatting(value);
    }
    static { this.ɵfac = function VerticalBarChartComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || VerticalBarChartComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.ScreenSizeObserverService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: VerticalBarChartComponent, selectors: [["scrm-vertical-bar-chart"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 3, consts: [["tooltipTemplate", ""], ["labelKey", "LBL_NO_DATA", 4, "ngIf"], [4, "ngIf"], ["class", "chart-loading", 3, "m-5", 4, "ngIf"], ["labelKey", "LBL_NO_DATA"], ["class", "vertical-bar-chart", 3, "animations", "results", "view", "scheme", "gradient", "xAxis", "yAxis", "legend", "legendPosition", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "yAxisTickFormatting", 4, "ngIf"], [1, "vertical-bar-chart", 3, "animations", "results", "view", "scheme", "gradient", "xAxis", "yAxis", "legend", "legendPosition", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "yAxisTickFormatting"], [1, "chart-loading"]], template: function VerticalBarChartComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, VerticalBarChartComponent_scrm_chart_message_area_0_Template, 1, 0, "scrm-chart-message-area", 1)(1, VerticalBarChartComponent_ng_container_1_Template, 2, 1, "ng-container", 2)(2, VerticalBarChartComponent_div_2_Template, 2, 2, "div", 3);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.results || !ctx.results.length || ctx.results.length < 1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.view().length);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.view().length && ctx.results && ctx.results.length > 0);
        } }, dependencies: [i2.NgIf, i3.BarVerticalComponent, i4.ChartMessageAreaComponent, i5.LoadingSpinnerComponent], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(VerticalBarChartComponent, [{
        type: Component,
        args: [{ selector: 'scrm-vertical-bar-chart', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<scrm-chart-message-area *ngIf=\"!results || !results.length || results.length < 1\"\n                         labelKey=\"LBL_NO_DATA\"></scrm-chart-message-area>\n<ng-container *ngIf=\"view().length\">\n    <ngx-charts-bar-vertical *ngIf=\"results && results.length > 0\"\n                             class=\"vertical-bar-chart\"\n                             [animations]=\"false\"\n                             [results]=\"results\"\n                             [view]=\"view()\"\n                             [scheme]=\"scheme\"\n                             [gradient]=\"gradient\"\n                             [xAxis]=\"xAxis\"\n                             [yAxis]=\"yAxis\"\n                             [legend]=\"legend\"\n                             [legendPosition]=\"'below'\"\n                             [showXAxisLabel]=\"showXAxisLabel\"\n                             [showYAxisLabel]=\"showYAxisLabel\"\n                             [xAxisLabel]=\"xAxisLabel\"\n                             [yAxisLabel]=\"yAxisLabel\"\n                             [yAxisTickFormatting]=\"yAxisTickFormatting\">\n        <ng-template #tooltipTemplate let-model=\"model\">\n            <div>{{model.name}}</div>\n            <div>{{ formatTooltipValue(model.value) }}</div>\n        </ng-template>\n    </ngx-charts-bar-vertical>\n</ng-container>\n<div *ngIf=\"!view().length && results && results.length > 0\" [class.m-5]=\"true\" class=\"chart-loading\">\n    <scrm-loading-spinner></scrm-loading-spinner>\n</div>\n\n\n" }]
    }], () => [{ type: i0.ElementRef }, { type: i1.ScreenSizeObserverService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(VerticalBarChartComponent, { className: "VerticalBarChartComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtYmFyLWNoYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb21wb25lbnRzL2NoYXJ0L2NvbXBvbmVudHMvdmVydGljYWwtYmFyLWNoYXJ0L3ZlcnRpY2FsLWJhci1jaGFydC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9jaGFydC9jb21wb25lbnRzL3ZlcnRpY2FsLWJhci1jaGFydC92ZXJ0aWNhbC1iYXItY2hhcnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUV2RSxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDN0QsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDdEUsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sMkVBQTJFLENBQUM7QUFDcEgsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7OztJQ0o1Qyw2Q0FDMEU7OztJQW1COUQsMkJBQUs7SUFBQSxZQUFjO0lBQUEsaUJBQU07SUFDekIsMkJBQUs7SUFBQSxZQUFxQztJQUFBLGlCQUFNOzs7O0lBRDNDLGNBQWM7SUFBZCxtQ0FBYztJQUNkLGVBQXFDO0lBQXJDLCtEQUFxQzs7O0lBbEJsRCxrREFlcUU7SUFDakUsb0tBQWdEO0lBSXBELGlCQUEwQjs7O0lBTEQsQUFEQSxBQURBLEFBREEsQUFEQSxBQURBLEFBREEsQUFEQSxBQURBLEFBREEsQUFEQSxBQURBLEFBREEsQUFEQSxrQ0FBb0IsMkJBQ0QsdUJBQ0oseUJBQ0Us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LElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsa0JBQWtCLENBQUMsS0FBVTtRQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUN6RCxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBQ0QsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BELENBQUM7MEhBekVRLHlCQUF5QjtvRUFBekIseUJBQXlCO1lDY3RDLEFBdkJBLEFBRkEsa0hBQ2dELCtFQUNaLDZEQXVCa0U7O1lBekI1RSxvRkFBdUQ7WUFFbEUsY0FBbUI7WUFBbkIsd0NBQW1CO1lBdUI1QixjQUFxRDtZQUFyRCxrRkFBcUQ7OztpRkRkOUMseUJBQXlCO2NBTHJDLFNBQVM7MkJBQ0kseUJBQXlCOztrRkFJMUIseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgT25EZXN0cm95LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTaW5nbGVTZXJpZXN9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jb250YWluZXJzL2NoYXJ0L2NoYXJ0Lm1vZGVsJztcbmltcG9ydCB7aXNGYWxzZX0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3V0aWxzL3ZhbHVlLXV0aWxzJztcbmltcG9ydCB7QmFzZUNoYXJ0Q29tcG9uZW50fSBmcm9tICcuLi9iYXNlLWNoYXJ0L2Jhc2UtY2hhcnQuY29tcG9uZW50JztcbmltcG9ydCB7U2NyZWVuU2l6ZU9ic2VydmVyU2VydmljZX0gZnJvbSBcIi4uLy4uLy4uLy4uL3NlcnZpY2VzL3VpL3NjcmVlbi1zaXplLW9ic2VydmVyL3NjcmVlbi1zaXplLW9ic2VydmVyLnNlcnZpY2VcIjtcbmltcG9ydCB7ZGVib3VuY2VUaW1lfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLXZlcnRpY2FsLWJhci1jaGFydCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3ZlcnRpY2FsLWJhci1jaGFydC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBWZXJ0aWNhbEJhckNoYXJ0Q29tcG9uZW50IGV4dGVuZHMgQmFzZUNoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgcmVzdWx0czogU2luZ2xlU2VyaWVzO1xuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCBzY3JlZW5TaXplOiBTY3JlZW5TaXplT2JzZXJ2ZXJTZXJ2aWNlKSB7XG4gICAgICAgIHN1cGVyKGVsZW1lbnRSZWYsIHNjcmVlblNpemUpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5kYXRhU291cmNlLm9wdGlvbnMuaGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMuZGF0YVNvdXJjZS5vcHRpb25zLmhlaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5pdFJlc2l6ZUxpc3RlbmVyKCk7XG5cbiAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5kYXRhU291cmNlLmdldFJlc3VsdHMoKS5waXBlKGRlYm91bmNlVGltZSg1MDApKS5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZXN1bHRzID0gdmFsdWUuc2luZ2xlU2VyaWVzO1xuICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVWaWV3KClcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cblxuICAgIGdldCBzY2hlbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVNvdXJjZS5vcHRpb25zLnNjaGVtZSB8fCAncGljbmljJztcbiAgICB9XG5cbiAgICBnZXQgZ3JhZGllbnQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFTb3VyY2Uub3B0aW9ucy5ncmFkaWVudCB8fCBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXQgeEF4aXMoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFTb3VyY2Uub3B0aW9ucy54QXhpcyB8fCBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXQgeUF4aXMoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhaXNGYWxzZSh0aGlzLmRhdGFTb3VyY2Uub3B0aW9ucy55QXhpcyk7XG4gICAgfVxuXG4gICAgZ2V0IGxlZ2VuZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICFpc0ZhbHNlKHRoaXMuZGF0YVNvdXJjZS5vcHRpb25zLmxlZ2VuZCk7XG4gICAgfVxuXG4gICAgZ2V0IHNob3dYQXhpc0xhYmVsKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhU291cmNlLm9wdGlvbnMuc2hvd1hBeGlzTGFiZWwgfHwgZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0IHNob3dZQXhpc0xhYmVsKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhU291cmNlLm9wdGlvbnMuc2hvd1lBeGlzTGFiZWwgfHwgZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0IHhBeGlzTGFiZWwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVNvdXJjZS5vcHRpb25zLnhBeGlzTGFiZWwgfHwgJyc7XG4gICAgfVxuXG4gICAgZ2V0IHlBeGlzTGFiZWwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVNvdXJjZS5vcHRpb25zLnlBeGlzTGFiZWwgfHwgJyc7XG4gICAgfVxuXG4gICAgZ2V0IHlBeGlzVGlja0Zvcm1hdHRpbmcoKTogRnVuY3Rpb24ge1xuICAgICAgICBpZiAodGhpcy5kYXRhU291cmNlLm9wdGlvbnMueUF4aXNUaWNrRm9ybWF0dGluZykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVNvdXJjZS50aWNrRm9ybWF0dGluZztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmb3JtYXRUb29sdGlwVmFsdWUodmFsdWU6IGFueSk6IGFueSB7XG4gICAgICAgIGlmICghdGhpcy5kYXRhU291cmNlIHx8ICF0aGlzLmRhdGFTb3VyY2UudG9vbHRpcEZvcm1hdHRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhU291cmNlLnRvb2x0aXBGb3JtYXR0aW5nKHZhbHVlKTtcbiAgICB9XG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48c2NybS1jaGFydC1tZXNzYWdlLWFyZWEgKm5nSWY9XCIhcmVzdWx0cyB8fCAhcmVzdWx0cy5sZW5ndGggfHwgcmVzdWx0cy5sZW5ndGggPCAxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbEtleT1cIkxCTF9OT19EQVRBXCI+PC9zY3JtLWNoYXJ0LW1lc3NhZ2UtYXJlYT5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJ2aWV3KCkubGVuZ3RoXCI+XG4gICAgPG5neC1jaGFydHMtYmFyLXZlcnRpY2FsICpuZ0lmPVwicmVzdWx0cyAmJiByZXN1bHRzLmxlbmd0aCA+IDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInZlcnRpY2FsLWJhci1jaGFydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthbmltYXRpb25zXT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Jlc3VsdHNdPVwicmVzdWx0c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt2aWV3XT1cInZpZXcoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzY2hlbWVdPVwic2NoZW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2dyYWRpZW50XT1cImdyYWRpZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3hBeGlzXT1cInhBeGlzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3lBeGlzXT1cInlBeGlzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xlZ2VuZF09XCJsZWdlbmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbGVnZW5kUG9zaXRpb25dPVwiJ2JlbG93J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzaG93WEF4aXNMYWJlbF09XCJzaG93WEF4aXNMYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzaG93WUF4aXNMYWJlbF09XCJzaG93WUF4aXNMYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt4QXhpc0xhYmVsXT1cInhBeGlzTGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbeUF4aXNMYWJlbF09XCJ5QXhpc0xhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3lBeGlzVGlja0Zvcm1hdHRpbmddPVwieUF4aXNUaWNrRm9ybWF0dGluZ1wiPlxuICAgICAgICA8bmctdGVtcGxhdGUgI3Rvb2x0aXBUZW1wbGF0ZSBsZXQtbW9kZWw9XCJtb2RlbFwiPlxuICAgICAgICAgICAgPGRpdj57e21vZGVsLm5hbWV9fTwvZGl2PlxuICAgICAgICAgICAgPGRpdj57eyBmb3JtYXRUb29sdGlwVmFsdWUobW9kZWwudmFsdWUpIH19PC9kaXY+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9uZ3gtY2hhcnRzLWJhci12ZXJ0aWNhbD5cbjwvbmctY29udGFpbmVyPlxuPGRpdiAqbmdJZj1cIiF2aWV3KCkubGVuZ3RoICYmIHJlc3VsdHMgJiYgcmVzdWx0cy5sZW5ndGggPiAwXCIgW2NsYXNzLm0tNV09XCJ0cnVlXCIgY2xhc3M9XCJjaGFydC1sb2FkaW5nXCI+XG4gICAgPHNjcm0tbG9hZGluZy1zcGlubmVyPjwvc2NybS1sb2FkaW5nLXNwaW5uZXI+XG48L2Rpdj5cblxuXG4iXX0=