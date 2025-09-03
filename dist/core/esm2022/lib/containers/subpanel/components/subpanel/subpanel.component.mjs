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
import { Observable } from 'rxjs';
import { SubpanelTableAdapter } from '../../adapters/table.adapter';
import { LanguageStore } from '../../../../store/language/language.store';
import { SubpanelStore } from '../../store/subpanel/subpanel.store';
import { SubpanelActionManager } from './action-manager.service';
import { SubpanelTableAdapterFactory } from '../../adapters/table.adapter.factory';
import { UserPreferenceStore } from '../../../../store/user-preference/user-preference.store';
import { SystemConfigStore } from "../../../../store/system-config/system-config.store";
import { SubpanelFilterAdapterFactory } from "../../adapters/filter.adapter.factory";
import { SubpanelActionAdapterFactory } from "../../adapters/actions.adapter.factory";
import * as i0 from "@angular/core";
import * as i1 from "./action-manager.service";
import * as i2 from "../../../../store/language/language.store";
import * as i3 from "../../adapters/table.adapter.factory";
import * as i4 from "../../../../store/user-preference/user-preference.store";
import * as i5 from "../../../../store/system-config/system-config.store";
import * as i6 from "../../adapters/filter.adapter.factory";
import * as i7 from "../../adapters/actions.adapter.factory";
import * as i8 from "@angular/common";
import * as i9 from "../../../../components/image/image.component";
import * as i10 from "../../../../components/panel/panel.component";
import * as i11 from "../../../../components/table/table.component";
import * as i12 from "../../../list-filter/components/list-filter/list-filter.component";
import * as i13 from "../../../../components/action-group-menu/action-group-menu.component";
function SubpanelComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 7);
    i0.ɵɵelement(1, "scrm-image", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("image", ctx_r0.store.getIcon());
} }
function SubpanelComponent_scrm_list_filter_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-list-filter", 6);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("config", ctx_r0.filterConfig);
} }
export class SubpanelComponent {
    constructor(actionManager, languages, tableAdapterFactory, preferences, systemConfigs, filterAdapterFactory, actionAdapterFactory) {
        this.actionManager = actionManager;
        this.languages = languages;
        this.tableAdapterFactory = tableAdapterFactory;
        this.preferences = preferences;
        this.systemConfigs = systemConfigs;
        this.filterAdapterFactory = filterAdapterFactory;
        this.actionAdapterFactory = actionAdapterFactory;
        this.panelHeaderButtonClass = 'btn btn-sm btn-outline-light';
    }
    ngOnInit() {
        this.buildAdapters();
        if (this.maxColumns$) {
            this.tableConfig.maxColumns$ = this.maxColumns$;
        }
        if (this.store?.metadata?.max_height) {
            this.tableConfig.maxListHeight = this.store.metadata.max_height;
        }
        if (!this.tableConfig?.maxListHeight) {
            const ui = this.systemConfigs.getConfigValue('ui') ?? {};
            this.tableConfig.maxListHeight = ui.subpanel_max_height;
        }
        this.tableConfig.paginationType = this?.store?.metadata?.pagination_type ?? this.tableConfig.paginationType;
        const parentModule = this.store.parentModule;
        const module = this.store.recordList.getModule();
        const sort = this.preferences.getUi(parentModule, module + '-subpanel-sort');
        if (sort) {
            this.store.recordList.updateSorting(sort.orderBy, sort.sortOrder);
        }
        this.closeButton = {
            onClick: () => {
                this.onClose && this.onClose();
            }
        };
    }
    getActionContext() {
        const module = this.store?.metadata?.module ?? '';
        return { module };
    }
    buildAdapters() {
        this.adapter = this.tableAdapterFactory.create(this.store);
        this.tableConfig = this.adapter.getTable();
        this.filterAdapter = this.filterAdapterFactory.create(this.store);
        this.filterConfig = this.filterAdapter.getConfig();
        this.actionsAdapter = this.actionAdapterFactory.create(this.store);
    }
    static { this.ɵfac = function SubpanelComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SubpanelComponent)(i0.ɵɵdirectiveInject(i1.SubpanelActionManager), i0.ɵɵdirectiveInject(i2.LanguageStore), i0.ɵɵdirectiveInject(i3.SubpanelTableAdapterFactory), i0.ɵɵdirectiveInject(i4.UserPreferenceStore), i0.ɵɵdirectiveInject(i5.SystemConfigStore), i0.ɵɵdirectiveInject(i6.SubpanelFilterAdapterFactory), i0.ɵɵdirectiveInject(i7.SubpanelActionAdapterFactory)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SubpanelComponent, selectors: [["scrm-subpanel"]], inputs: { store: "store", maxColumns$: "maxColumns$", onClose: "onClose", filterConfig: "filterConfig", panelHeaderButtonClass: "panelHeaderButtonClass" }, features: [i0.ɵɵProvidersFeature([
                SubpanelTableAdapter
            ])], decls: 8, vars: 11, consts: [["bodyPadding", "0", 3, "title", "mode", "close", "klass"], ["class", "subpanel-icon pl-1", "panel-icon-area", "", 4, "ngIf"], ["panel-header-button", ""], [3, "config", "actionContext", "actionLimitConfig", "buttonClass"], ["panel-body", ""], [3, "config", 4, "ngIf"], [3, "config"], ["panel-icon-area", "", 1, "subpanel-icon", "pl-1"], [3, "image"]], template: function SubpanelComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "scrm-panel", 0);
            i0.ɵɵtemplate(2, SubpanelComponent_span_2_Template, 2, 1, "span", 1);
            i0.ɵɵelementStart(3, "span", 2);
            i0.ɵɵelement(4, "scrm-action-group-menu", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div", 4);
            i0.ɵɵtemplate(6, SubpanelComponent_scrm_list_filter_6_Template, 1, 1, "scrm-list-filter", 5);
            i0.ɵɵelement(7, "scrm-table", 6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementContainerEnd();
        } if (rf & 2) {
            let tmp_1_0;
            let tmp_3_0;
            i0.ɵɵadvance();
            i0.ɵɵproperty("title", ctx.store.getTitle())("mode", (tmp_1_0 = ctx.store == null ? null : ctx.store.panelCollapseMode()) !== null && tmp_1_0 !== undefined ? tmp_1_0 : "closable")("close", ctx.closeButton)("klass", (tmp_3_0 = "subpanel-" + (ctx.store == null ? null : ctx.store.metadata == null ? null : ctx.store.metadata.name)) !== null && tmp_3_0 !== undefined ? tmp_3_0 : "");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.store.getIcon());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("config", ctx.actionsAdapter)("actionContext", ctx.getActionContext())("actionLimitConfig", "subpanelview_actions_limits")("buttonClass", ctx.panelHeaderButtonClass);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.store.showFilter());
            i0.ɵɵadvance();
            i0.ɵɵproperty("config", ctx.tableConfig);
        } }, dependencies: [i8.NgIf, i9.ImageComponent, i10.PanelComponent, i11.TableComponent, i12.ListFilterComponent, i13.ActionGroupMenuComponent], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SubpanelComponent, [{
        type: Component,
        args: [{ selector: 'scrm-subpanel', providers: [
                    SubpanelTableAdapter
                ], template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container>\n    <scrm-panel [title]=\"store.getTitle()\" [mode]=\"store?.panelCollapseMode() ?? 'closable'\" [close]=\"closeButton\" bodyPadding=\"0\" [klass]=\"'subpanel-' + store?.metadata?.name ?? ''\">\n        <span class=\"subpanel-icon pl-1\" panel-icon-area *ngIf=\"store.getIcon()\">\n            <scrm-image [image]=\"store.getIcon()\"></scrm-image>\n        </span>\n        <span panel-header-button>\n            <scrm-action-group-menu [config]=\"actionsAdapter\"\n                                    [actionContext]=\"getActionContext()\"\n                                    [actionLimitConfig]=\"'subpanelview_actions_limits'\"\n                                    [buttonClass]=\"panelHeaderButtonClass\"\n            ></scrm-action-group-menu>\n        </span>\n        <div panel-body>\n            <scrm-list-filter *ngIf=\"store.showFilter()\" [config]=\"filterConfig\"></scrm-list-filter>\n            <scrm-table [config]=\"tableConfig\"></scrm-table>\n        </div>\n    </scrm-panel>\n</ng-container>\n" }]
    }], () => [{ type: i1.SubpanelActionManager }, { type: i2.LanguageStore }, { type: i3.SubpanelTableAdapterFactory }, { type: i4.UserPreferenceStore }, { type: i5.SystemConfigStore }, { type: i6.SubpanelFilterAdapterFactory }, { type: i7.SubpanelActionAdapterFactory }], { store: [{
            type: Input
        }], maxColumns$: [{
            type: Input
        }], onClose: [{
            type: Input
        }], filterConfig: [{
            type: Input
        }], panelHeaderButtonClass: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SubpanelComponent, { className: "SubpanelComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VicGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbnRhaW5lcnMvc3VicGFuZWwvY29tcG9uZW50cy9zdWJwYW5lbC9zdWJwYW5lbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9zdWJwYW5lbC9jb21wb25lbnRzL3N1YnBhbmVsL3N1YnBhbmVsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUl2RCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRWhDLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUN4RSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDbEUsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDL0QsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDakYsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0seURBQXlELENBQUM7QUFDNUYsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0scURBQXFELENBQUM7QUFFdEYsT0FBTyxFQUFDLDRCQUE0QixFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFFbkYsT0FBTyxFQUFDLDRCQUE0QixFQUFDLE1BQU0sd0NBQXdDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7SUNiNUUsK0JBQXlFO0lBQ3JFLGdDQUFtRDtJQUN2RCxpQkFBTzs7O0lB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QUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2RSxDQUFDO2tIQXZFUSxpQkFBaUI7b0VBQWpCLGlCQUFpQiwrTkFKZjtnQkFDUCxvQkFBb0I7YUFDdkI7WUN2QkwsNkJBQWM7WUFDVixxQ0FBbUw7WUFDL0ssb0VBQXlFO1lBR3pFLCtCQUEwQjtZQUN0Qiw0Q0FJMEI7WUFDOUIsaUJBQU87WUFDUCw4QkFBZ0I7WUFDWiw0RkFBcUU7WUFDckUsZ0NBQWdEO1lBRXhELEFBREksaUJBQU0sRUFDRzs7Ozs7WUFmRCxjQUEwQjtZQUF5RixBQUF0QyxBQUFsRCxBQUEzQiw0Q0FBMEIsdUlBQWtELDBCQUFzQiw4S0FBb0U7WUFDNUgsY0FBcUI7WUFBckIsMENBQXFCO1lBSTNDLGVBQXlCO1lBR3pCLEFBREEsQUFEQSxBQURBLDJDQUF5Qix5Q0FDVyxvREFDZSwyQ0FDYjtZQUkzQyxlQUF3QjtZQUF4Qiw2Q0FBd0I7WUFDL0IsY0FBc0I7WUFBdEIsd0NBQXNCOzs7aUZEV2pDLGlCQUFpQjtjQVA3QixTQUFTOzJCQUNJLGVBQWUsYUFFZDtvQkFDUCxvQkFBb0I7aUJBQ3ZCO29SQUdRLEtBQUs7a0JBQWIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csc0JBQXNCO2tCQUE5QixLQUFLOztrRkFMRyxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QWN0aW9uQ29udGV4dH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2FjdGlvbnMvYWN0aW9uLm1vZGVsJztcbmltcG9ydCB7QnV0dG9uSW50ZXJmYWNlfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY29tcG9uZW50cy9idXR0b24vYnV0dG9uLm1vZGVsJztcbmltcG9ydCB7QnV0dG9uR3JvdXBJbnRlcmZhY2V9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24tZ3JvdXAubW9kZWwnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7VGFibGVDb25maWd9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvdGFibGUvdGFibGUubW9kZWwnO1xuaW1wb3J0IHtTdWJwYW5lbFRhYmxlQWRhcHRlcn0gZnJvbSAnLi4vLi4vYWRhcHRlcnMvdGFibGUuYWRhcHRlcic7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7U3VicGFuZWxTdG9yZX0gZnJvbSAnLi4vLi4vc3RvcmUvc3VicGFuZWwvc3VicGFuZWwuc3RvcmUnO1xuaW1wb3J0IHtTdWJwYW5lbEFjdGlvbk1hbmFnZXJ9IGZyb20gJy4vYWN0aW9uLW1hbmFnZXIuc2VydmljZSc7XG5pbXBvcnQge1N1YnBhbmVsVGFibGVBZGFwdGVyRmFjdG9yeX0gZnJvbSAnLi4vLi4vYWRhcHRlcnMvdGFibGUuYWRhcHRlci5mYWN0b3J5JztcbmltcG9ydCB7VXNlclByZWZlcmVuY2VTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvdXNlci1wcmVmZXJlbmNlL3VzZXItcHJlZmVyZW5jZS5zdG9yZSc7XG5pbXBvcnQge1N5c3RlbUNvbmZpZ1N0b3JlfSBmcm9tIFwiLi4vLi4vLi4vLi4vc3RvcmUvc3lzdGVtLWNvbmZpZy9zeXN0ZW0tY29uZmlnLnN0b3JlXCI7XG5pbXBvcnQge0ZpbHRlckNvbmZpZ30gZnJvbSBcIi4uLy4uLy4uL2xpc3QtZmlsdGVyL2NvbXBvbmVudHMvbGlzdC1maWx0ZXIvbGlzdC1maWx0ZXIubW9kZWxcIjtcbmltcG9ydCB7U3VicGFuZWxGaWx0ZXJBZGFwdGVyRmFjdG9yeX0gZnJvbSBcIi4uLy4uL2FkYXB0ZXJzL2ZpbHRlci5hZGFwdGVyLmZhY3RvcnlcIjtcbmltcG9ydCB7U3VicGFuZWxGaWx0ZXJBZGFwdGVyfSBmcm9tIFwiLi4vLi4vYWRhcHRlcnMvZmlsdGVyLmFkYXB0ZXJcIjtcbmltcG9ydCB7U3VicGFuZWxBY3Rpb25BZGFwdGVyRmFjdG9yeX0gZnJvbSBcIi4uLy4uL2FkYXB0ZXJzL2FjdGlvbnMuYWRhcHRlci5mYWN0b3J5XCI7XG5pbXBvcnQge1N1YnBhbmVsQWN0aW9uc0FkYXB0ZXJ9IGZyb20gXCIuLi8uLi9hZGFwdGVycy9hY3Rpb25zLmFkYXB0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLXN1YnBhbmVsJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3N1YnBhbmVsLmNvbXBvbmVudC5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgU3VicGFuZWxUYWJsZUFkYXB0ZXJcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFN1YnBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoKSBzdG9yZTogU3VicGFuZWxTdG9yZTtcbiAgICBASW5wdXQoKSBtYXhDb2x1bW5zJDogT2JzZXJ2YWJsZTxudW1iZXI+O1xuICAgIEBJbnB1dCgpIG9uQ2xvc2U6IEZ1bmN0aW9uO1xuICAgIEBJbnB1dCgpIGZpbHRlckNvbmZpZzogRmlsdGVyQ29uZmlnO1xuICAgIEBJbnB1dCgpIHBhbmVsSGVhZGVyQnV0dG9uQ2xhc3M6IHN0cmluZyA9ICdidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLWxpZ2h0JztcblxuICAgIGNsb3NlQnV0dG9uOiBCdXR0b25JbnRlcmZhY2U7XG4gICAgYWRhcHRlcjogU3VicGFuZWxUYWJsZUFkYXB0ZXI7XG4gICAgY29uZmlnJDogT2JzZXJ2YWJsZTxCdXR0b25Hcm91cEludGVyZmFjZT47XG4gICAgdGFibGVDb25maWc6IFRhYmxlQ29uZmlnO1xuICAgIGZpbHRlckFkYXB0ZXI6IFN1YnBhbmVsRmlsdGVyQWRhcHRlcjtcbiAgICBhY3Rpb25zQWRhcHRlcjogU3VicGFuZWxBY3Rpb25zQWRhcHRlcjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgYWN0aW9uTWFuYWdlcjogU3VicGFuZWxBY3Rpb25NYW5hZ2VyLFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2VzOiBMYW5ndWFnZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgdGFibGVBZGFwdGVyRmFjdG9yeTogU3VicGFuZWxUYWJsZUFkYXB0ZXJGYWN0b3J5LFxuICAgICAgICBwcm90ZWN0ZWQgcHJlZmVyZW5jZXM6IFVzZXJQcmVmZXJlbmNlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBzeXN0ZW1Db25maWdzOiBTeXN0ZW1Db25maWdTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGZpbHRlckFkYXB0ZXJGYWN0b3J5OiBTdWJwYW5lbEZpbHRlckFkYXB0ZXJGYWN0b3J5LFxuICAgICAgICBwcm90ZWN0ZWQgYWN0aW9uQWRhcHRlckZhY3Rvcnk6IFN1YnBhbmVsQWN0aW9uQWRhcHRlckZhY3RvcnlcbiAgICApIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgICAgICB0aGlzLmJ1aWxkQWRhcHRlcnMoKTtcblxuICAgICAgICBpZiAodGhpcy5tYXhDb2x1bW5zJCkge1xuICAgICAgICAgICAgdGhpcy50YWJsZUNvbmZpZy5tYXhDb2x1bW5zJCA9IHRoaXMubWF4Q29sdW1ucyQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdG9yZT8ubWV0YWRhdGE/Lm1heF9oZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMudGFibGVDb25maWcubWF4TGlzdEhlaWdodCA9IHRoaXMuc3RvcmUubWV0YWRhdGEubWF4X2hlaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy50YWJsZUNvbmZpZz8ubWF4TGlzdEhlaWdodCkge1xuICAgICAgICAgICAgY29uc3QgdWkgPSB0aGlzLnN5c3RlbUNvbmZpZ3MuZ2V0Q29uZmlnVmFsdWUoJ3VpJykgPz8ge307XG4gICAgICAgICAgICB0aGlzLnRhYmxlQ29uZmlnLm1heExpc3RIZWlnaHQgPSB1aS5zdWJwYW5lbF9tYXhfaGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50YWJsZUNvbmZpZy5wYWdpbmF0aW9uVHlwZSA9IHRoaXM/LnN0b3JlPy5tZXRhZGF0YT8ucGFnaW5hdGlvbl90eXBlID8/IHRoaXMudGFibGVDb25maWcucGFnaW5hdGlvblR5cGU7XG5cbiAgICAgICAgY29uc3QgcGFyZW50TW9kdWxlID0gdGhpcy5zdG9yZS5wYXJlbnRNb2R1bGU7XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IHRoaXMuc3RvcmUucmVjb3JkTGlzdC5nZXRNb2R1bGUoKTtcblxuICAgICAgICBjb25zdCBzb3J0ID0gdGhpcy5wcmVmZXJlbmNlcy5nZXRVaShwYXJlbnRNb2R1bGUsIG1vZHVsZSArICctc3VicGFuZWwtc29ydCcpO1xuXG4gICAgICAgIGlmIChzb3J0KSB7XG4gICAgICAgICAgICB0aGlzLnN0b3JlLnJlY29yZExpc3QudXBkYXRlU29ydGluZyhzb3J0Lm9yZGVyQnksIHNvcnQuc29ydE9yZGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2xvc2VCdXR0b24gPSB7XG4gICAgICAgICAgICBvbkNsaWNrOiAoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkNsb3NlICYmIHRoaXMub25DbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGFzIEJ1dHRvbkludGVyZmFjZTtcbiAgICB9XG5cbiAgICBnZXRBY3Rpb25Db250ZXh0KCk6IEFjdGlvbkNvbnRleHQge1xuICAgICAgICBjb25zdCBtb2R1bGUgPSB0aGlzLnN0b3JlPy5tZXRhZGF0YT8ubW9kdWxlID8/ICcnO1xuICAgICAgICByZXR1cm4ge21vZHVsZX0gYXMgQWN0aW9uQ29udGV4dDtcbiAgICB9XG5cbiAgICBidWlsZEFkYXB0ZXJzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFkYXB0ZXIgPSB0aGlzLnRhYmxlQWRhcHRlckZhY3RvcnkuY3JlYXRlKHRoaXMuc3RvcmUpO1xuICAgICAgICB0aGlzLnRhYmxlQ29uZmlnID0gdGhpcy5hZGFwdGVyLmdldFRhYmxlKCk7XG4gICAgICAgIHRoaXMuZmlsdGVyQWRhcHRlciA9IHRoaXMuZmlsdGVyQWRhcHRlckZhY3RvcnkuY3JlYXRlKHRoaXMuc3RvcmUpO1xuICAgICAgICB0aGlzLmZpbHRlckNvbmZpZyA9IHRoaXMuZmlsdGVyQWRhcHRlci5nZXRDb25maWcoKTtcbiAgICAgICAgdGhpcy5hY3Rpb25zQWRhcHRlciA9IHRoaXMuYWN0aW9uQWRhcHRlckZhY3RvcnkuY3JlYXRlKHRoaXMuc3RvcmUpO1xuICAgIH1cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjxuZy1jb250YWluZXI+XG4gICAgPHNjcm0tcGFuZWwgW3RpdGxlXT1cInN0b3JlLmdldFRpdGxlKClcIiBbbW9kZV09XCJzdG9yZT8ucGFuZWxDb2xsYXBzZU1vZGUoKSA/PyAnY2xvc2FibGUnXCIgW2Nsb3NlXT1cImNsb3NlQnV0dG9uXCIgYm9keVBhZGRpbmc9XCIwXCIgW2tsYXNzXT1cIidzdWJwYW5lbC0nICsgc3RvcmU/Lm1ldGFkYXRhPy5uYW1lID8/ICcnXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwic3VicGFuZWwtaWNvbiBwbC0xXCIgcGFuZWwtaWNvbi1hcmVhICpuZ0lmPVwic3RvcmUuZ2V0SWNvbigpXCI+XG4gICAgICAgICAgICA8c2NybS1pbWFnZSBbaW1hZ2VdPVwic3RvcmUuZ2V0SWNvbigpXCI+PC9zY3JtLWltYWdlPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuIHBhbmVsLWhlYWRlci1idXR0b24+XG4gICAgICAgICAgICA8c2NybS1hY3Rpb24tZ3JvdXAtbWVudSBbY29uZmlnXT1cImFjdGlvbnNBZGFwdGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthY3Rpb25Db250ZXh0XT1cImdldEFjdGlvbkNvbnRleHQoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYWN0aW9uTGltaXRDb25maWddPVwiJ3N1YnBhbmVsdmlld19hY3Rpb25zX2xpbWl0cydcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2J1dHRvbkNsYXNzXT1cInBhbmVsSGVhZGVyQnV0dG9uQ2xhc3NcIlxuICAgICAgICAgICAgPjwvc2NybS1hY3Rpb24tZ3JvdXAtbWVudT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8ZGl2IHBhbmVsLWJvZHk+XG4gICAgICAgICAgICA8c2NybS1saXN0LWZpbHRlciAqbmdJZj1cInN0b3JlLnNob3dGaWx0ZXIoKVwiIFtjb25maWddPVwiZmlsdGVyQ29uZmlnXCI+PC9zY3JtLWxpc3QtZmlsdGVyPlxuICAgICAgICAgICAgPHNjcm0tdGFibGUgW2NvbmZpZ109XCJ0YWJsZUNvbmZpZ1wiPjwvc2NybS10YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9zY3JtLXBhbmVsPlxuPC9uZy1jb250YWluZXI+XG4iXX0=