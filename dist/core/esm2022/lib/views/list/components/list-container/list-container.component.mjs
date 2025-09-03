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
import { MaxColumnsCalculator } from '../../../../services/ui/max-columns-calculator/max-columns-calculator.service';
import { LanguageStore } from '../../../../store/language/language.store';
import { ScreenSize } from '../../../../services/ui/screen-size-observer/screen-size-observer.service';
import { ListViewStore } from '../../store/list-view/list-view.store';
import { TableAdapter } from '../../adapters/table.adapter';
import { ListViewSidebarWidgetAdapter } from '../../adapters/sidebar-widget.adapter';
import { SystemConfigStore } from "../../../../store/system-config/system-config.store";
import { ListViewSidebarWidgetService } from "../../services/list-view-sidebar-widget.service";
import * as i0 from "@angular/core";
import * as i1 from "../../store/list-view/list-view.store";
import * as i2 from "../../adapters/table.adapter";
import * as i3 from "../../../../services/ui/max-columns-calculator/max-columns-calculator.service";
import * as i4 from "../../../../store/language/language.store";
import * as i5 from "../../adapters/sidebar-widget.adapter";
import * as i6 from "../../../../store/system-config/system-config.store";
import * as i7 from "../../services/list-view-sidebar-widget.service";
import * as i8 from "@angular/common";
import * as i9 from "../../../../components/table/table.component";
import * as i10 from "../../../../containers/sidebar-widget/components/sidebar-widget/sidebar-widget.component";
const _c0 = a0 => ({ "col-lg-12": a0 });
function ListContainerComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵelement(2, "scrm-table", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c0, !ctx_r0.displayWidgets));
    i0.ɵɵadvance();
    i0.ɵɵproperty("config", ctx_r0.tableConfig);
} }
function ListContainerComponent_ng_container_3_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelement(1, "scrm-sidebar-widget", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const widget_r2 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("config", widget_r2)("context", ctx_r0.getViewContext())("context$", ctx_r0.store.context$)("type", widget_r2.type);
} }
function ListContainerComponent_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵtemplate(2, ListContainerComponent_ng_container_3_ng_container_1_div_2_Template, 2, 4, "div", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("display", ctx_r0.widgetDisplayType);
    i0.ɵɵclassProp("mt-0", ctx_r0.swapWidgets);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.sidebarWidgetConfig.widgets);
} }
function ListContainerComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListContainerComponent_ng_container_3_ng_container_1_Template, 3, 5, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.swapWidgets || ctx_r0.swapWidgets && ctx_r0.displayWidgets);
} }
export class ListContainerComponent {
    constructor(store, adapter, maxColumnCalculator, languageStore, sidebarWidgetAdapter, systemConfigs, sidebarWidgetHandler) {
        this.store = store;
        this.adapter = adapter;
        this.maxColumnCalculator = maxColumnCalculator;
        this.languageStore = languageStore;
        this.sidebarWidgetAdapter = sidebarWidgetAdapter;
        this.systemConfigs = systemConfigs;
        this.sidebarWidgetHandler = sidebarWidgetHandler;
        this.screen = ScreenSize.Medium;
        this.maxColumns = 5;
        this.displayWidgets = true;
        this.swapWidgets = false;
        this.widgetDisplayType = 'none';
        this.subs = [];
    }
    ngOnInit() {
        this.tableConfig = this.adapter.getTable();
        this.tableConfig.maxColumns$ = this.getMaxColumns();
        if (this.store?.metadata?.listView?.maxHeight) {
            this.tableConfig.maxListHeight = this.store.metadata.listView.maxHeight;
        }
        if (!this.tableConfig?.maxListHeight) {
            const ui = this.systemConfigs.getConfigValue('ui');
            this.tableConfig.maxListHeight = ui.listview_max_height;
        }
        this.tableConfig.paginationType = this?.store?.metadata?.listView?.paginationType ?? this.tableConfig.paginationType;
        this.subs.push(this.sidebarWidgetAdapter.config$.subscribe(sidebarWidgetConfig => {
            this.sidebarWidgetConfig = sidebarWidgetConfig;
            this.displayWidgets = this.store.widgets && this.store.showSidebarWidgets;
            this.widgetDisplayType = this.getDisplay(!!(this.sidebarWidgetConfig.show && this.sidebarWidgetConfig.widgets));
        }));
        this.subs.push(this.sidebarWidgetHandler.widgetSwap$.subscribe(swap => {
            this.swapWidgets = swap;
        }));
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
        this.subs = [];
    }
    getMaxColumns() {
        return this.maxColumnCalculator.getMaxColumns(this.store.widgets$);
    }
    getDisplayWidgets() {
        return this.store.widgets && this.store.showSidebarWidgets;
    }
    getDisplay(display) {
        let displayType = 'none';
        if (display) {
            displayType = 'block';
        }
        return displayType;
    }
    getViewContext() {
        return this.store.getViewContext();
    }
    static { this.ɵfac = function ListContainerComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ListContainerComponent)(i0.ɵɵdirectiveInject(i1.ListViewStore), i0.ɵɵdirectiveInject(i2.TableAdapter), i0.ɵɵdirectiveInject(i3.MaxColumnsCalculator), i0.ɵɵdirectiveInject(i4.LanguageStore), i0.ɵɵdirectiveInject(i5.ListViewSidebarWidgetAdapter), i0.ɵɵdirectiveInject(i6.SystemConfigStore), i0.ɵɵdirectiveInject(i7.ListViewSidebarWidgetService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ListContainerComponent, selectors: [["scrm-list-container"]], features: [i0.ɵɵProvidersFeature([TableAdapter, MaxColumnsCalculator, ListViewSidebarWidgetAdapter])], decls: 4, vars: 2, consts: [[1, "list-view-container", "container-fluid", "pt-2"], [1, "row"], [4, "ngIf"], [1, "col-lg-9", 3, "ngClass"], [3, "config"], [1, "col-lg-3", "list-widget-container", "pl-0"], ["class", "mb-3", 4, "ngFor", "ngForOf"], [1, "mb-3"], [3, "config", "context", "context$", "type"]], template: function ListContainerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵtemplate(2, ListContainerComponent_ng_container_2_Template, 3, 4, "ng-container", 2)(3, ListContainerComponent_ng_container_3_Template, 2, 1, "ng-container", 2);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.swapWidgets || ctx.swapWidgets && !ctx.displayWidgets);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.sidebarWidgetConfig.widgetsEnabled);
        } }, dependencies: [i8.NgClass, i8.NgForOf, i8.NgIf, i9.TableComponent, i10.SidebarWidgetComponent], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListContainerComponent, [{
        type: Component,
        args: [{ selector: 'scrm-list-container', providers: [TableAdapter, MaxColumnsCalculator, ListViewSidebarWidgetAdapter], template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<!-- Start List View Container Section -->\n\n<div class=\"list-view-container container-fluid pt-2\">\n    <div class=\"row\">\n        <ng-container *ngIf=\"!swapWidgets || (swapWidgets && !displayWidgets)\">\n            <div [ngClass]=\"{ 'col-lg-12': !displayWidgets }\"\n                 class=\"col-lg-9\"\n            >\n                <scrm-table [config]=\"tableConfig\"></scrm-table>\n            </div>\n        </ng-container>\n\n\n        <ng-container *ngIf=\"sidebarWidgetConfig.widgetsEnabled\">\n            <ng-container *ngIf=\"!swapWidgets || (swapWidgets && displayWidgets)\">\n            <div [style.display]=\"widgetDisplayType\"\n                 [class.mt-0]=\"swapWidgets\"\n                 class=\"col-lg-3 list-widget-container pl-0\">\n                <div *ngFor=\"let widget of sidebarWidgetConfig.widgets\" class=\"mb-3\">\n                    <scrm-sidebar-widget [config]=\"widget\"\n                                         [context]=\"getViewContext()\"\n                                         [context$]=\"store.context$\"\n                                         [type]=\"widget.type\">\n                    </scrm-sidebar-widget>\n                </div>\n            </div>\n            </ng-container>\n        </ng-container>\n\n\n    </div>\n</div>\n\n<!-- End List View Container Section -->\n" }]
    }], () => [{ type: i1.ListViewStore }, { type: i2.TableAdapter }, { type: i3.MaxColumnsCalculator }, { type: i4.LanguageStore }, { type: i5.ListViewSidebarWidgetAdapter }, { type: i6.SystemConfigStore }, { type: i7.ListViewSidebarWidgetService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ListContainerComponent, { className: "ListContainerComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3ZpZXdzL2xpc3QvY29tcG9uZW50cy9saXN0LWNvbnRhaW5lci9saXN0LWNvbnRhaW5lci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvbGlzdC9jb21wb25lbnRzL2xpc3QtY29udGFpbmVyL2xpc3QtY29udGFpbmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUkzRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwrRUFBK0UsQ0FBQztBQUNuSCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDeEUsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLDJFQUEyRSxDQUFDO0FBQ3JHLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUVwRSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDMUQsT0FBTyxFQUFDLDRCQUE0QixFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDbkYsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0scURBQXFELENBQUM7QUFDdEYsT0FBTyxFQUFDLDRCQUE0QixFQUFDLE1BQU0saURBQWlELENBQUM7Ozs7Ozs7Ozs7Ozs7O0lDUHJGLDZCQUF1RTtJQUNuRSw4QkFFQztJQUNHLGdDQUFnRDtJQUNwRCxpQkFBTTs7OztJQUpELGNBQTRDO0lBQTVDLDRFQUE0QztJQUdqQyxjQUFzQjtJQUF0QiwyQ0FBc0I7OztJQVVsQyw4QkFBcUU7SUFDakUseUNBSXNCO0lBQzFCLGlCQUFNOzs7O0lBTG1CLGNBQWlCO0lBR2pCLEFBREEsQUFEQSxBQURBLGtDQUFpQixvQ0FDVyxtQ0FDRCx3QkFDUDs7O0lBUmpELDZCQUFzRTtJQUN0RSw4QkFFaUQ7SUFDN0MscUdBQXFFO0lBT3pFLGlCQUFNOzs7O0lBVkQsY0FBbUM7SUFBbkMsbURBQW1DO0lBQ25DLDBDQUEwQjtJQUVILGNBQThCO0lBQTlCLDREQUE4Qjs7O0lBTDlELDZCQUF5RDtJQUNyRCx3R0FBc0U7Ozs7SUFBdkQsY0FBcUQ7SUFBckQseUZBQXFEOztBRGFoRixNQUFNLE9BQU8sc0JBQXNCO0lBVy9CLFlBQ1csS0FBb0IsRUFDakIsT0FBcUIsRUFDckIsbUJBQXlDLEVBQzVDLGFBQTRCLEVBQ3pCLG9CQUFrRCxFQUNsRCxhQUFnQyxFQUNoQyxvQkFBa0Q7UUFOckQsVUFBSyxHQUFMLEtBQUssQ0FBZTtRQUNqQixZQUFPLEdBQVAsT0FBTyxDQUFjO1FBQ3JCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBc0I7UUFDNUMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDekIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUE4QjtRQUNsRCxrQkFBYSxHQUFiLGFBQWEsQ0FBbUI7UUFDaEMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUE4QjtRQWpCaEUsV0FBTSxHQUFlLFVBQVUsQ0FBQyxNQUFNLENBQUM7UUFDdkMsZUFBVSxHQUFHLENBQUMsQ0FBQztRQUVmLG1CQUFjLEdBQVksSUFBSSxDQUFDO1FBQy9CLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBRTdCLHNCQUFpQixHQUFXLE1BQU0sQ0FBQztRQUV6QixTQUFJLEdBQW1CLEVBQUUsQ0FBQztJQVdwQyxDQUFDO0lBRUQsUUFBUTtRQUNKLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFcEQsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLENBQUM7WUFDNUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUM1RSxDQUFDO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsYUFBYSxFQUFFLENBQUM7WUFDbkMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1FBQzVELENBQUM7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsR0FBRyxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsY0FBYyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDO1FBR3JILElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLEVBQUU7WUFDN0UsSUFBSSxDQUFDLG1CQUFtQixHQUFHLG1CQUFtQixDQUFDO1lBQy9DLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQztZQUMxRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3BILENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFSixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNsRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxhQUFhO1FBQ1QsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVELGlCQUFpQjtRQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQztJQUMvRCxDQUFDO0lBRUQsVUFBVSxDQUFDLE9BQWdCO1FBQ3ZCLElBQUksV0FBVyxHQUFHLE1BQU0sQ0FBQztRQUV6QixJQUFJLE9BQU8sRUFBRSxDQUFDO1lBQ1YsV0FBVyxHQUFHLE9BQU8sQ0FBQztRQUMxQixDQUFDO1FBRUQsT0FBTyxXQUFXLENBQUM7SUFDdkIsQ0FBQztJQUVELGNBQWM7UUFDVixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdkMsQ0FBQzt1SEF4RVEsc0JBQXNCO29FQUF0QixzQkFBc0IseUVBSHBCLENBQUMsWUFBWSxFQUFFLG9CQUFvQixFQUFFLDRCQUE0QixDQUFDO1lDckI3RSxBQURKLDhCQUFzRCxhQUNqQztZQVViLEFBVEEseUZBQXVFLDRFQVNkO1lBa0JqRSxBQURJLGlCQUFNLEVBQ0o7O1lBM0JpQixlQUFzRDtZQUF0RCxpRkFBc0Q7WUFTdEQsY0FBd0M7WUFBeEMsNkRBQXdDOzs7aUZEY2xELHNCQUFzQjtjQU5sQyxTQUFTOzJCQUNJLHFCQUFxQixhQUVwQixDQUFDLFlBQVksRUFBRSxvQkFBb0IsRUFBRSw0QkFBNEIsQ0FBQzs7a0ZBR3BFLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7Vmlld0NvbnRleHR9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi92aWV3cy92aWV3Lm1vZGVsJztcbmltcG9ydCB7V2lkZ2V0TWV0YWRhdGF9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9tZXRhZGF0YS93aWRnZXQubWV0YWRhdGEnO1xuaW1wb3J0IHtNYXhDb2x1bW5zQ2FsY3VsYXRvcn0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvdWkvbWF4LWNvbHVtbnMtY2FsY3VsYXRvci9tYXgtY29sdW1ucy1jYWxjdWxhdG9yLnNlcnZpY2UnO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5pbXBvcnQge1NjcmVlblNpemV9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL3VpL3NjcmVlbi1zaXplLW9ic2VydmVyL3NjcmVlbi1zaXplLW9ic2VydmVyLnNlcnZpY2UnO1xuaW1wb3J0IHtMaXN0Vmlld1N0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS9saXN0LXZpZXcvbGlzdC12aWV3LnN0b3JlJztcbmltcG9ydCB7VGFibGVDb25maWd9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvdGFibGUvdGFibGUubW9kZWwnO1xuaW1wb3J0IHtUYWJsZUFkYXB0ZXJ9IGZyb20gJy4uLy4uL2FkYXB0ZXJzL3RhYmxlLmFkYXB0ZXInO1xuaW1wb3J0IHtMaXN0Vmlld1NpZGViYXJXaWRnZXRBZGFwdGVyfSBmcm9tICcuLi8uLi9hZGFwdGVycy9zaWRlYmFyLXdpZGdldC5hZGFwdGVyJztcbmltcG9ydCB7U3lzdGVtQ29uZmlnU3RvcmV9IGZyb20gXCIuLi8uLi8uLi8uLi9zdG9yZS9zeXN0ZW0tY29uZmlnL3N5c3RlbS1jb25maWcuc3RvcmVcIjtcbmltcG9ydCB7TGlzdFZpZXdTaWRlYmFyV2lkZ2V0U2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2xpc3Qtdmlldy1zaWRlYmFyLXdpZGdldC5zZXJ2aWNlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGlzdENvbnRhaW5lclN0YXRlIHtcbiAgICBzaWRlYmFyV2lkZ2V0Q29uZmlnOiB7XG4gICAgICAgIHdpZGdldHM6IFdpZGdldE1ldGFkYXRhW107XG4gICAgICAgIHNob3c6IGJvb2xlYW47XG4gICAgICAgIHdpZGdldHNFbmFibGVkOiBib29sZWFuO1xuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLWxpc3QtY29udGFpbmVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2xpc3QtY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtUYWJsZUFkYXB0ZXIsIE1heENvbHVtbnNDYWxjdWxhdG9yLCBMaXN0Vmlld1NpZGViYXJXaWRnZXRBZGFwdGVyXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBMaXN0Q29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHNjcmVlbjogU2NyZWVuU2l6ZSA9IFNjcmVlblNpemUuTWVkaXVtO1xuICAgIG1heENvbHVtbnMgPSA1O1xuICAgIHRhYmxlQ29uZmlnOiBUYWJsZUNvbmZpZztcbiAgICBkaXNwbGF5V2lkZ2V0czogYm9vbGVhbiA9IHRydWU7XG4gICAgc3dhcFdpZGdldHM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBzaWRlYmFyV2lkZ2V0Q29uZmlnOiBhbnk7XG4gICAgd2lkZ2V0RGlzcGxheVR5cGU6IHN0cmluZyA9ICdub25lJztcblxuICAgIHByb3RlY3RlZCBzdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBzdG9yZTogTGlzdFZpZXdTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGFkYXB0ZXI6IFRhYmxlQWRhcHRlcixcbiAgICAgICAgcHJvdGVjdGVkIG1heENvbHVtbkNhbGN1bGF0b3I6IE1heENvbHVtbnNDYWxjdWxhdG9yLFxuICAgICAgICBwdWJsaWMgbGFuZ3VhZ2VTdG9yZTogTGFuZ3VhZ2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIHNpZGViYXJXaWRnZXRBZGFwdGVyOiBMaXN0Vmlld1NpZGViYXJXaWRnZXRBZGFwdGVyLFxuICAgICAgICBwcm90ZWN0ZWQgc3lzdGVtQ29uZmlnczogU3lzdGVtQ29uZmlnU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBzaWRlYmFyV2lkZ2V0SGFuZGxlcjogTGlzdFZpZXdTaWRlYmFyV2lkZ2V0U2VydmljZVxuICAgICkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRhYmxlQ29uZmlnID0gdGhpcy5hZGFwdGVyLmdldFRhYmxlKCk7XG4gICAgICAgIHRoaXMudGFibGVDb25maWcubWF4Q29sdW1ucyQgPSB0aGlzLmdldE1heENvbHVtbnMoKTtcblxuICAgICAgICBpZiAodGhpcy5zdG9yZT8ubWV0YWRhdGE/Lmxpc3RWaWV3Py5tYXhIZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMudGFibGVDb25maWcubWF4TGlzdEhlaWdodCA9IHRoaXMuc3RvcmUubWV0YWRhdGEubGlzdFZpZXcubWF4SGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy50YWJsZUNvbmZpZz8ubWF4TGlzdEhlaWdodCkge1xuICAgICAgICAgICAgY29uc3QgdWkgPSB0aGlzLnN5c3RlbUNvbmZpZ3MuZ2V0Q29uZmlnVmFsdWUoJ3VpJyk7XG4gICAgICAgICAgICB0aGlzLnRhYmxlQ29uZmlnLm1heExpc3RIZWlnaHQgPSB1aS5saXN0dmlld19tYXhfaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGFibGVDb25maWcucGFnaW5hdGlvblR5cGUgPSB0aGlzPy5zdG9yZT8ubWV0YWRhdGE/Lmxpc3RWaWV3Py5wYWdpbmF0aW9uVHlwZSA/PyB0aGlzLnRhYmxlQ29uZmlnLnBhZ2luYXRpb25UeXBlO1xuXG5cbiAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5zaWRlYmFyV2lkZ2V0QWRhcHRlci5jb25maWckLnN1YnNjcmliZShzaWRlYmFyV2lkZ2V0Q29uZmlnID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2lkZWJhcldpZGdldENvbmZpZyA9IHNpZGViYXJXaWRnZXRDb25maWc7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlXaWRnZXRzID0gdGhpcy5zdG9yZS53aWRnZXRzICYmIHRoaXMuc3RvcmUuc2hvd1NpZGViYXJXaWRnZXRzO1xuICAgICAgICAgICAgdGhpcy53aWRnZXREaXNwbGF5VHlwZSA9IHRoaXMuZ2V0RGlzcGxheSghISh0aGlzLnNpZGViYXJXaWRnZXRDb25maWcuc2hvdyAmJiB0aGlzLnNpZGViYXJXaWRnZXRDb25maWcud2lkZ2V0cykpO1xuICAgICAgICB9KSk7XG5cbiAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5zaWRlYmFyV2lkZ2V0SGFuZGxlci53aWRnZXRTd2FwJC5zdWJzY3JpYmUoc3dhcCA9PiB7XG4gICAgICAgICAgICB0aGlzLnN3YXBXaWRnZXRzID0gc3dhcDtcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuICAgICAgICB0aGlzLnN1YnMgPSBbXTtcbiAgICB9XG5cbiAgICBnZXRNYXhDb2x1bW5zKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gICAgICAgIHJldHVybiB0aGlzLm1heENvbHVtbkNhbGN1bGF0b3IuZ2V0TWF4Q29sdW1ucyh0aGlzLnN0b3JlLndpZGdldHMkKTtcbiAgICB9XG5cbiAgICBnZXREaXNwbGF5V2lkZ2V0cygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmUud2lkZ2V0cyAmJiB0aGlzLnN0b3JlLnNob3dTaWRlYmFyV2lkZ2V0cztcbiAgICB9XG5cbiAgICBnZXREaXNwbGF5KGRpc3BsYXk6IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgICAgICBsZXQgZGlzcGxheVR5cGUgPSAnbm9uZSc7XG5cbiAgICAgICAgaWYgKGRpc3BsYXkpIHtcbiAgICAgICAgICAgIGRpc3BsYXlUeXBlID0gJ2Jsb2NrJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkaXNwbGF5VHlwZTtcbiAgICB9XG5cbiAgICBnZXRWaWV3Q29udGV4dCgpOiBWaWV3Q29udGV4dCB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlLmdldFZpZXdDb250ZXh0KCk7XG4gICAgfVxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPCEtLSBTdGFydCBMaXN0IFZpZXcgQ29udGFpbmVyIFNlY3Rpb24gLS0+XG5cbjxkaXYgY2xhc3M9XCJsaXN0LXZpZXctY29udGFpbmVyIGNvbnRhaW5lci1mbHVpZCBwdC0yXCI+XG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXN3YXBXaWRnZXRzIHx8IChzd2FwV2lkZ2V0cyAmJiAhZGlzcGxheVdpZGdldHMpXCI+XG4gICAgICAgICAgICA8ZGl2IFtuZ0NsYXNzXT1cInsgJ2NvbC1sZy0xMic6ICFkaXNwbGF5V2lkZ2V0cyB9XCJcbiAgICAgICAgICAgICAgICAgY2xhc3M9XCJjb2wtbGctOVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNjcm0tdGFibGUgW2NvbmZpZ109XCJ0YWJsZUNvbmZpZ1wiPjwvc2NybS10YWJsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzaWRlYmFyV2lkZ2V0Q29uZmlnLndpZGdldHNFbmFibGVkXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXN3YXBXaWRnZXRzIHx8IChzd2FwV2lkZ2V0cyAmJiBkaXNwbGF5V2lkZ2V0cylcIj5cbiAgICAgICAgICAgIDxkaXYgW3N0eWxlLmRpc3BsYXldPVwid2lkZ2V0RGlzcGxheVR5cGVcIlxuICAgICAgICAgICAgICAgICBbY2xhc3MubXQtMF09XCJzd2FwV2lkZ2V0c1wiXG4gICAgICAgICAgICAgICAgIGNsYXNzPVwiY29sLWxnLTMgbGlzdC13aWRnZXQtY29udGFpbmVyIHBsLTBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCB3aWRnZXQgb2Ygc2lkZWJhcldpZGdldENvbmZpZy53aWRnZXRzXCIgY2xhc3M9XCJtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzY3JtLXNpZGViYXItd2lkZ2V0IFtjb25maWddPVwid2lkZ2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbnRleHRdPVwiZ2V0Vmlld0NvbnRleHQoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb250ZXh0JF09XCJzdG9yZS5jb250ZXh0JFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0eXBlXT1cIndpZGdldC50eXBlXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvc2NybS1zaWRlYmFyLXdpZGdldD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuXG48IS0tIEVuZCBMaXN0IFZpZXcgQ29udGFpbmVyIFNlY3Rpb24gLS0+XG4iXX0=