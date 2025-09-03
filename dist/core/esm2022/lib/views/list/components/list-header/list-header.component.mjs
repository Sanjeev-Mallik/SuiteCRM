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
import { ListViewStore } from '../../store/list-view/list-view.store';
import { FilterAdapter } from '../../adapters/filter.adapter';
import { ModuleNavigation } from '../../../../services/navigation/module-navigation/module-navigation.service';
import { RecordPanelAdapter } from '../../adapters/record-panel.adapter';
import { QuickFiltersService } from "../../services/quick-filters.service";
import { isTrue } from '../../../../common/utils/value-utils';
import * as i0 from "@angular/core";
import * as i1 from "../../adapters/filter.adapter";
import * as i2 from "../../store/list-view/list-view.store";
import * as i3 from "../../../../services/navigation/module-navigation/module-navigation.service";
import * as i4 from "../../adapters/record-panel.adapter";
import * as i5 from "../../services/quick-filters.service";
import * as i6 from "@angular/common";
import * as i7 from "../../../../components/module-title/module-title.component";
import * as i8 from "../settings-menu/settings-menu.component";
import * as i9 from "../../../../containers/list-filter/components/list-filter/list-filter.component";
import * as i10 from "../../../../containers/record-panel/components/record-panel/record-panel.component";
import * as i11 from "../../../../components/button-group/button-group.component";
import * as i12 from "../../../../components/label/label.component";
function ListHeaderComponent_div_7_scrm_button_group_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-button-group", 14);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("config$", ctx_r0.quickFilters.config$)("klass", "quick-filter-button");
} }
function ListHeaderComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9)(1, "div", 10);
    i0.ɵɵelement(2, "scrm-label", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 12);
    i0.ɵɵtemplate(4, ListHeaderComponent_div_7_scrm_button_group_4_Template, 1, 2, "scrm-button-group", 13);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r0.quickFilters.config$);
} }
function ListHeaderComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15)(1, "div", 16)(2, "div", 17);
    i0.ɵɵelement(3, "scrm-list-filter", 18);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("config", ctx_r0.filterAdapter.getConfig());
} }
function ListHeaderComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15)(1, "div", 16)(2, "div", 17);
    i0.ɵɵelement(3, "scrm-record-panel", 18);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("config", ctx_r0.recordPanelConfig);
} }
export class ListHeaderComponent {
    constructor(filterAdapter, listStore, moduleNavigation, recordPanelAdapter, quickFilters) {
        this.filterAdapter = filterAdapter;
        this.listStore = listStore;
        this.moduleNavigation = moduleNavigation;
        this.recordPanelAdapter = recordPanelAdapter;
        this.quickFilters = quickFilters;
        this.actionPanel = '';
        this.showQuickFilters = false;
        this.enableQuickFilters = false;
        this.subs = [];
    }
    get moduleTitle() {
        const module = this.listStore.vm.appData.module;
        const appListStrings = this.listStore.vm.appData.language.appListStrings;
        return this.moduleNavigation.getModuleLabel(module, appListStrings);
    }
    ngOnInit() {
        this.listStore.actionPanel$.subscribe(actionPanel => {
            this.actionPanel = actionPanel;
            if (this.actionPanel === 'recordPanel') {
                this.recordPanelConfig = this.recordPanelAdapter.getConfig();
            }
            else {
                this.recordPanelConfig = null;
            }
        });
        this.subs.push(this.quickFilters.breakdown$.subscribe(breakdown => {
            this.showQuickFilters = isTrue(breakdown);
        }));
        this.subs.push(this.quickFilters.enabled$.subscribe(enabled => {
            this.enableQuickFilters = isTrue(enabled ?? false);
        }));
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
        this.recordPanelConfig = null;
    }
    static { this.ɵfac = function ListHeaderComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ListHeaderComponent)(i0.ɵɵdirectiveInject(i1.FilterAdapter), i0.ɵɵdirectiveInject(i2.ListViewStore), i0.ɵɵdirectiveInject(i3.ModuleNavigation), i0.ɵɵdirectiveInject(i4.RecordPanelAdapter), i0.ɵɵdirectiveInject(i5.QuickFiltersService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ListHeaderComponent, selectors: [["scrm-list-header"]], features: [i0.ɵɵProvidersFeature([FilterAdapter, RecordPanelAdapter])], decls: 12, vars: 10, consts: [[1, "list-view-header"], [1, "row", "mr-0", "justify-content-md-between"], [1, "custom-col-4", "d-none", "d-md-flex", "align-items-center"], [1, "list-view-title", 3, "title"], [1, "custom-col-8", "d-flex", "align-items-center"], ["class", "d-flex align-items-baseline w-100 justify-content-end pr-3", 4, "ngIf"], [1, "list-view-hr-container"], [1, "list-view-hr"], ["class", "container-fluid pt-2 small-font", 4, "ngIf"], [1, "d-flex", "align-items-baseline", "w-100", "justify-content-end", "pr-3"], [1, "text-nowrap", "text-muted", "fs-70", "pl-1", "mr-1"], ["labelKey", "LBL_QUICK_FILTERS"], [1, "pr-xxl-1", "mr-xxl-1"], [3, "config$", "klass", 4, "ngIf"], [3, "config$", "klass"], [1, "container-fluid", "pt-2", "small-font"], [1, "row"], [1, "col"], [3, "config"]], template: function ListHeaderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "div", 0)(2, "div", 1)(3, "div", 2);
            i0.ɵɵelement(4, "scrm-module-title", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div", 4);
            i0.ɵɵelement(6, "scrm-settings-menu");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(7, ListHeaderComponent_div_7_Template, 5, 1, "div", 5);
            i0.ɵɵelementStart(8, "div", 6);
            i0.ɵɵelement(9, "hr", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(10, ListHeaderComponent_div_10_Template, 4, 1, "div", 8)(11, ListHeaderComponent_div_11_Template, 4, 1, "div", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("justify-content-center", !(ctx.showQuickFilters && ctx.enableQuickFilters))("justify-content-end", ctx.showQuickFilters && ctx.enableQuickFilters);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("title", ctx.moduleTitle);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("pr-3", ctx.showQuickFilters && ctx.enableQuickFilters);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.showQuickFilters && ctx.enableQuickFilters);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.actionPanel === "filters");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.actionPanel === "recordPanel" && ctx.recordPanelConfig);
        } }, dependencies: [i6.NgIf, i7.ModuleTitleComponent, i8.SettingsMenuComponent, i9.ListFilterComponent, i10.RecordPanelComponent, i11.ButtonGroupComponent, i12.LabelComponent], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListHeaderComponent, [{
        type: Component,
        args: [{ selector: 'scrm-list-header', providers: [FilterAdapter, RecordPanelAdapter], template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container>\n    <div class=\"list-view-header\">\n        <div class=\"row mr-0 justify-content-md-between\"\n             [class.justify-content-center]=\"!(showQuickFilters && enableQuickFilters)\"\n             [class.justify-content-end]=\"(showQuickFilters && enableQuickFilters)\">\n            <div class=\"custom-col-4 d-none d-md-flex align-items-center\">\n                <scrm-module-title class=\"list-view-title\" [title]=\"moduleTitle\"></scrm-module-title>\n            </div>\n            <div class=\"custom-col-8 d-flex align-items-center\"\n                 [class.pr-3]=\"(showQuickFilters && enableQuickFilters)\"\n            >\n                <scrm-settings-menu></scrm-settings-menu>\n            </div>\n        </div>\n\n        <div *ngIf=\"showQuickFilters && enableQuickFilters\"\n             class=\"d-flex align-items-baseline w-100 justify-content-end pr-3\">\n            <div class=\"text-nowrap text-muted fs-70 pl-1 mr-1\">\n                <scrm-label labelKey=\"LBL_QUICK_FILTERS\"></scrm-label>\n            </div>\n            <div class=\"pr-xxl-1 mr-xxl-1\">\n                <scrm-button-group *ngIf=\"quickFilters.config$\" [config$]=\"quickFilters.config$\" [klass]=\"'quick-filter-button'\"></scrm-button-group>\n            </div>\n        </div>\n\n        <div class=\"list-view-hr-container\">\n            <hr class=\"list-view-hr\">\n        </div>\n        <div *ngIf=\"actionPanel === 'filters'\" class=\"container-fluid pt-2 small-font\">\n            <div class=\"row\">\n                <div class=\"col\">\n                    <scrm-list-filter [config]=\"filterAdapter.getConfig()\"></scrm-list-filter>\n                </div>\n            </div>\n        </div>\n        <div *ngIf=\"actionPanel === 'recordPanel' && recordPanelConfig\" class=\"container-fluid pt-2 small-font\">\n            <div class=\"row\">\n                <div class=\"col\">\n                    <scrm-record-panel [config]=\"recordPanelConfig\"></scrm-record-panel>\n                </div>\n            </div>\n        </div>\n    </div>\n</ng-container>\n" }]
    }], () => [{ type: i1.FilterAdapter }, { type: i2.ListViewStore }, { type: i3.ModuleNavigation }, { type: i4.RecordPanelAdapter }, { type: i5.QuickFiltersService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ListHeaderComponent, { className: "ListHeaderComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3ZpZXdzL2xpc3QvY29tcG9uZW50cy9saXN0LWhlYWRlci9saXN0LWhlYWRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvbGlzdC9jb21wb25lbnRzL2xpc3QtaGVhZGVyL2xpc3QtaGVhZGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDcEUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBQzVELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDZFQUE2RSxDQUFDO0FBRzdHLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0lDYzVDLHdDQUFxSTs7O0lBQXBELEFBQWpDLHFEQUFnQyxnQ0FBZ0M7OztJQUpwSCxBQUZKLDhCQUN3RSxjQUNoQjtJQUNoRCxpQ0FBc0Q7SUFDMUQsaUJBQU07SUFDTiwrQkFBK0I7SUFDM0IsdUdBQWlIO0lBRXpILEFBREksaUJBQU0sRUFDSjs7O0lBRnNCLGVBQTBCO0lBQTFCLGtEQUEwQjs7O0lBUzlDLEFBREosQUFESiwrQkFBK0UsY0FDMUQsY0FDSTtJQUNiLHVDQUEwRTtJQUd0RixBQURJLEFBREksaUJB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QUErRSx5REFPeUI7WUFPNUcsaUJBQU07OztZQXZDRyxlQUEwRTtZQUMxRSxBQURBLDJGQUEwRSx1RUFDSjtZQUV4QixlQUFxQjtZQUFyQix1Q0FBcUI7WUFHL0QsY0FBdUQ7WUFBdkQsc0VBQXVEO1lBTTFELGVBQTRDO1lBQTVDLHFFQUE0QztZQWE1QyxlQUErQjtZQUEvQixvREFBK0I7WUFPL0IsY0FBd0Q7WUFBeEQsaUZBQXdEOzs7aUZEckJ6RCxtQkFBbUI7Y0FML0IsU0FBUzsyQkFDSSxrQkFBa0IsYUFFakIsQ0FBQyxhQUFhLEVBQUUsa0JBQWtCLENBQUM7O2tGQUVyQyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0xpc3RWaWV3U3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL2xpc3Qtdmlldy9saXN0LXZpZXcuc3RvcmUnO1xuaW1wb3J0IHtGaWx0ZXJBZGFwdGVyfSBmcm9tICcuLi8uLi9hZGFwdGVycy9maWx0ZXIuYWRhcHRlcic7XG5pbXBvcnQge01vZHVsZU5hdmlnYXRpb259IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL25hdmlnYXRpb24vbW9kdWxlLW5hdmlnYXRpb24vbW9kdWxlLW5hdmlnYXRpb24uc2VydmljZSc7XG5pbXBvcnQge1JlY29yZFBhbmVsQ29uZmlnfSBmcm9tICcuLi8uLi8uLi8uLi9jb250YWluZXJzL3JlY29yZC1wYW5lbC9jb21wb25lbnRzL3JlY29yZC1wYW5lbC9yZWNvcmQtcGFuZWwubW9kZWwnO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtSZWNvcmRQYW5lbEFkYXB0ZXJ9IGZyb20gJy4uLy4uL2FkYXB0ZXJzL3JlY29yZC1wYW5lbC5hZGFwdGVyJztcbmltcG9ydCB7UXVpY2tGaWx0ZXJzU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3F1aWNrLWZpbHRlcnMuc2VydmljZVwiO1xuaW1wb3J0IHtpc1RydWV9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi91dGlscy92YWx1ZS11dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1saXN0LWhlYWRlcicsXG4gICAgdGVtcGxhdGVVcmw6ICdsaXN0LWhlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gICAgcHJvdmlkZXJzOiBbRmlsdGVyQWRhcHRlciwgUmVjb3JkUGFuZWxBZGFwdGVyXSxcbn0pXG5leHBvcnQgY2xhc3MgTGlzdEhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIGFjdGlvblBhbmVsID0gJyc7XG4gICAgcmVjb3JkUGFuZWxDb25maWc6IFJlY29yZFBhbmVsQ29uZmlnO1xuICAgIHNob3dRdWlja0ZpbHRlcnMgPSBmYWxzZTtcbiAgICBlbmFibGVRdWlja0ZpbHRlcnMgPSBmYWxzZTtcbiAgICBwcm90ZWN0ZWQgc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgZmlsdGVyQWRhcHRlcjogRmlsdGVyQWRhcHRlcixcbiAgICAgICAgcHJvdGVjdGVkIGxpc3RTdG9yZTogTGlzdFZpZXdTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIG1vZHVsZU5hdmlnYXRpb246IE1vZHVsZU5hdmlnYXRpb24sXG4gICAgICAgIHByb3RlY3RlZCByZWNvcmRQYW5lbEFkYXB0ZXI6IFJlY29yZFBhbmVsQWRhcHRlcixcbiAgICAgICAgcHVibGljIHF1aWNrRmlsdGVyczogUXVpY2tGaWx0ZXJzU2VydmljZVxuICAgICkge1xuICAgIH1cblxuICAgIGdldCBtb2R1bGVUaXRsZSgpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBtb2R1bGUgPSB0aGlzLmxpc3RTdG9yZS52bS5hcHBEYXRhLm1vZHVsZTtcbiAgICAgICAgY29uc3QgYXBwTGlzdFN0cmluZ3MgPSB0aGlzLmxpc3RTdG9yZS52bS5hcHBEYXRhLmxhbmd1YWdlLmFwcExpc3RTdHJpbmdzO1xuICAgICAgICByZXR1cm4gdGhpcy5tb2R1bGVOYXZpZ2F0aW9uLmdldE1vZHVsZUxhYmVsKG1vZHVsZSwgYXBwTGlzdFN0cmluZ3MpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmxpc3RTdG9yZS5hY3Rpb25QYW5lbCQuc3Vic2NyaWJlKGFjdGlvblBhbmVsID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uUGFuZWwgPSBhY3Rpb25QYW5lbDtcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGlvblBhbmVsID09PSAncmVjb3JkUGFuZWwnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWNvcmRQYW5lbENvbmZpZyA9IHRoaXMucmVjb3JkUGFuZWxBZGFwdGVyLmdldENvbmZpZygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlY29yZFBhbmVsQ29uZmlnID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5xdWlja0ZpbHRlcnMuYnJlYWtkb3duJC5zdWJzY3JpYmUoYnJlYWtkb3duID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1F1aWNrRmlsdGVycyA9IGlzVHJ1ZShicmVha2Rvd24pO1xuICAgICAgICB9KSlcblxuICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLnF1aWNrRmlsdGVycy5lbmFibGVkJC5zdWJzY3JpYmUoZW5hYmxlZCA9PiB7XG4gICAgICAgICAgICB0aGlzLmVuYWJsZVF1aWNrRmlsdGVycyA9IGlzVHJ1ZShlbmFibGVkID8/IGZhbHNlKTtcbiAgICAgICAgfSkpXG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3Vicy5mb3JFYWNoKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XG4gICAgICAgIHRoaXMucmVjb3JkUGFuZWxDb25maWcgPSBudWxsO1xuICAgIH1cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjxuZy1jb250YWluZXI+XG4gICAgPGRpdiBjbGFzcz1cImxpc3Qtdmlldy1oZWFkZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBtci0wIGp1c3RpZnktY29udGVudC1tZC1iZXR3ZWVuXCJcbiAgICAgICAgICAgICBbY2xhc3MuanVzdGlmeS1jb250ZW50LWNlbnRlcl09XCIhKHNob3dRdWlja0ZpbHRlcnMgJiYgZW5hYmxlUXVpY2tGaWx0ZXJzKVwiXG4gICAgICAgICAgICAgW2NsYXNzLmp1c3RpZnktY29udGVudC1lbmRdPVwiKHNob3dRdWlja0ZpbHRlcnMgJiYgZW5hYmxlUXVpY2tGaWx0ZXJzKVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImN1c3RvbS1jb2wtNCBkLW5vbmUgZC1tZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxzY3JtLW1vZHVsZS10aXRsZSBjbGFzcz1cImxpc3Qtdmlldy10aXRsZVwiIFt0aXRsZV09XCJtb2R1bGVUaXRsZVwiPjwvc2NybS1tb2R1bGUtdGl0bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjdXN0b20tY29sLTggZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgICAgICAgIFtjbGFzcy5wci0zXT1cIihzaG93UXVpY2tGaWx0ZXJzICYmIGVuYWJsZVF1aWNrRmlsdGVycylcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzY3JtLXNldHRpbmdzLW1lbnU+PC9zY3JtLXNldHRpbmdzLW1lbnU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiAqbmdJZj1cInNob3dRdWlja0ZpbHRlcnMgJiYgZW5hYmxlUXVpY2tGaWx0ZXJzXCJcbiAgICAgICAgICAgICBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1iYXNlbGluZSB3LTEwMCBqdXN0aWZ5LWNvbnRlbnQtZW5kIHByLTNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LW5vd3JhcCB0ZXh0LW11dGVkIGZzLTcwIHBsLTEgbXItMVwiPlxuICAgICAgICAgICAgICAgIDxzY3JtLWxhYmVsIGxhYmVsS2V5PVwiTEJMX1FVSUNLX0ZJTFRFUlNcIj48L3Njcm0tbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwci14eGwtMSBtci14eGwtMVwiPlxuICAgICAgICAgICAgICAgIDxzY3JtLWJ1dHRvbi1ncm91cCAqbmdJZj1cInF1aWNrRmlsdGVycy5jb25maWckXCIgW2NvbmZpZyRdPVwicXVpY2tGaWx0ZXJzLmNvbmZpZyRcIiBba2xhc3NdPVwiJ3F1aWNrLWZpbHRlci1idXR0b24nXCI+PC9zY3JtLWJ1dHRvbi1ncm91cD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdC12aWV3LWhyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGhyIGNsYXNzPVwibGlzdC12aWV3LWhyXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2ICpuZ0lmPVwiYWN0aW9uUGFuZWwgPT09ICdmaWx0ZXJzJ1wiIGNsYXNzPVwiY29udGFpbmVyLWZsdWlkIHB0LTIgc21hbGwtZm9udFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNjcm0tbGlzdC1maWx0ZXIgW2NvbmZpZ109XCJmaWx0ZXJBZGFwdGVyLmdldENvbmZpZygpXCI+PC9zY3JtLWxpc3QtZmlsdGVyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2ICpuZ0lmPVwiYWN0aW9uUGFuZWwgPT09ICdyZWNvcmRQYW5lbCcgJiYgcmVjb3JkUGFuZWxDb25maWdcIiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZCBwdC0yIHNtYWxsLWZvbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzY3JtLXJlY29yZC1wYW5lbCBbY29uZmlnXT1cInJlY29yZFBhbmVsQ29uZmlnXCI+PC9zY3JtLXJlY29yZC1wYW5lbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvbmctY29udGFpbmVyPlxuIl19