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
import { Component, HostListener, Input } from '@angular/core';
import { of } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ListFilterStoreFactory } from '../../store/list-filter/list-filter.store.factory';
import { SavedFilterActionAdapterFactory } from '../../adapters/actions.adapter.factory';
import * as i0 from "@angular/core";
import * as i1 from "../../store/list-filter/list-filter.store.factory";
import * as i2 from "../../adapters/actions.adapter.factory";
import * as i3 from "@angular/common";
import * as i4 from "../../../../components/button/button.component";
import * as i5 from "../../../../components/panel/panel.component";
import * as i6 from "../../../../components/field-grid/field-grid.component";
import * as i7 from "../../../../components/dropdown-button/dropdown-button.component";
import * as i8 from "../../../../components/label/label.component";
import * as i9 from "../../../../components/record-grid/record-grid.component";
import * as i10 from "../../../../fields/field.component";
function ListFilterComponent_scrm_panel_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "scrm-dropdown-button", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("config", ctx_r0.store.myFilterButton);
} }
function ListFilterComponent_scrm_panel_0_scrm_field_grid_3_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13)(1, "label", 14);
    i0.ɵɵelement(2, "scrm-label", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "scrm-field", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const vm_r4 = i0.ɵɵnextContext(3).ngIf;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("labelKey", item_r3.labelKey);
    i0.ɵɵadvance();
    i0.ɵɵproperty("field", item_r3)("mode", ctx_r0.store.mode)("record", vm_r4)("type", item_r3.type);
} }
function ListFilterComponent_scrm_panel_0_scrm_field_grid_3_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵtemplate(1, ListFilterComponent_scrm_panel_0_scrm_field_grid_3_div_1_div_1_Template, 4, 5, "div", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.store.special);
} }
function ListFilterComponent_scrm_panel_0_scrm_field_grid_3_div_2_scrm_button_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-button", 7);
} if (rf & 2) {
    const button_r5 = ctx.$implicit;
    i0.ɵɵproperty("config", button_r5);
} }
function ListFilterComponent_scrm_panel_0_scrm_field_grid_3_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵtemplate(1, ListFilterComponent_scrm_panel_0_scrm_field_grid_3_div_2_scrm_button_1_Template, 1, 1, "scrm-button", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.store.gridButtons);
} }
function ListFilterComponent_scrm_panel_0_scrm_field_grid_3_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "scrm-field-grid", 8);
    i0.ɵɵlistener("click", function ListFilterComponent_scrm_panel_0_scrm_field_grid_3_Template_scrm_field_grid_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.onFocusSearch()); });
    i0.ɵɵtemplate(1, ListFilterComponent_scrm_panel_0_scrm_field_grid_3_div_1_Template, 2, 1, "div", 9)(2, ListFilterComponent_scrm_panel_0_scrm_field_grid_3_div_2_Template, 2, 1, "div", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const vm_r4 = i0.ɵɵnextContext().ngIf;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("actions", true)("appendActions", false)("fieldMode", ctx_r0.store.mode)("fields", ctx_r0.store.displayFields)("record", vm_r4)("special", ctx_r0.store.special.length > 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.store.special.length > 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.store.gridButtons);
} }
function ListFilterComponent_scrm_panel_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 19);
    i0.ɵɵlistener("click", function ListFilterComponent_scrm_panel_0_ng_container_4_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r6); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.onFocusSave()); });
    i0.ɵɵelement(2, "scrm-record-grid", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("config", ctx_r0.gridConfig);
} }
function ListFilterComponent_scrm_panel_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "scrm-panel", 1);
    i0.ɵɵtemplate(1, ListFilterComponent_scrm_panel_0_div_1_Template, 2, 1, "div", 2);
    i0.ɵɵelementStart(2, "div", 3);
    i0.ɵɵtemplate(3, ListFilterComponent_scrm_panel_0_scrm_field_grid_3_Template, 3, 8, "scrm-field-grid", 4)(4, ListFilterComponent_scrm_panel_0_ng_container_4_Template, 3, 1, "ng-container", 5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate1("klass", "filter-panel m-0 ", ctx_r0.config && ctx_r0.config.klass || "", "");
    i0.ɵɵproperty("showHeader", ctx_r0.config.displayHeader)("close", ctx_r0.store.closeButton)("isCollapsed$", ctx_r0.store.isCollapsed$)("mode", ctx_r0.store.panelMode)("titleKey", "LBL_BASIC_FILTER");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.store.myFilterButton);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.store.displayFields && ctx_r0.store.displayFields.length);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.config && ctx_r0.config.savedFilterEdit && ctx_r0.store.filterStore.getMode() !== "detail");
} }
export class ListFilterComponent {
    onEnterKey() {
        if (!this.selectedActionButton) {
            return;
        }
        this.selectedActionButton.onClick();
        event.preventDefault();
    }
    constructor(storeFactory, actionAdapterFactory) {
        this.storeFactory = storeFactory;
        this.actionAdapterFactory = actionAdapterFactory;
        this.subs = [];
        this.store = storeFactory.create();
        this.filterActionsAdapter = actionAdapterFactory.create(this.store.filterStore, this.store);
    }
    ngOnInit() {
        this.store.init(this.config);
        this.vm$ = this.store.vm$.pipe(map(([savedFilter]) => {
            const record = { ...savedFilter };
            record.fields = savedFilter.criteriaFields;
            return record;
        }));
        this.searchActionButton = this.store.gridButtons.find(button => button.id === "search");
        this.saveActionButton = {
            id: 'save',
            onClick: () => {
                this.filterActionsAdapter.run('save');
            }
        };
        this.gridConfig = {
            record$: this.store.filterStore.stagingRecord$,
            mode$: this.store.filterStore.mode$,
            fields$: this.store.filterStore.getViewFieldsKeys$(),
            actions: this.filterActionsAdapter,
            appendActions: true,
            klass: 'mt-2 p-2 saved-search-container rounded',
            buttonClass: 'btn btn-outline-danger btn-sm',
            labelDisplay: 'inline',
            rowClass: {
                'align-items-start': true,
                'align-items-center': false
            },
            colAlignItems: 'align-items-start',
            maxColumns$: of(4).pipe(shareReplay(1)),
            sizeMap$: of({
                handset: 1,
                tablet: 2,
                web: 4,
                wide: 4
            }).pipe(shareReplay(1))
        };
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
        this.store.clear();
        this.store = null;
    }
    onFocusSearch() {
        this.selectedActionButton = this.searchActionButton;
    }
    onFocusSave() {
        this.selectedActionButton = this.saveActionButton;
    }
    static { this.ɵfac = function ListFilterComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ListFilterComponent)(i0.ɵɵdirectiveInject(i1.ListFilterStoreFactory), i0.ɵɵdirectiveInject(i2.SavedFilterActionAdapterFactory)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ListFilterComponent, selectors: [["scrm-list-filter"]], hostBindings: function ListFilterComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keydown.enter", function ListFilterComponent_keydown_enter_HostBindingHandler($event) { return ctx.onEnterKey($event); });
        } }, inputs: { config: "config" }, decls: 2, vars: 3, consts: [[3, "showHeader", "close", "isCollapsed$", "mode", "klass", "titleKey", 4, "ngIf"], [3, "showHeader", "close", "isCollapsed$", "mode", "klass", "titleKey"], ["panel-header-button", "", 4, "ngIf"], ["panel-body", "", 1, "p-2", "filter-body"], [3, "actions", "appendActions", "fieldMode", "fields", "record", "special", "click", 4, "ngIf"], [4, "ngIf"], ["panel-header-button", ""], [3, "config"], [3, "click", "actions", "appendActions", "fieldMode", "fields", "record", "special"], ["class", "special-field-grid", "field-grid-special", "", 4, "ngIf"], ["class", "mt-4 align-self-end", "field-grid-actions", "", 4, "ngIf"], ["field-grid-special", "", 1, "special-field-grid"], ["class", "d-inline-block mr-sm-2 w-25 special-field-grid-col", 4, "ngFor", "ngForOf"], [1, "d-inline-block", "mr-sm-2", "w-25", "special-field-grid-col"], [1, "form-check-label"], [3, "labelKey"], [3, "field", "mode", "record", "type"], ["field-grid-actions", "", 1, "mt-4", "align-self-end"], [3, "config", 4, "ngFor", "ngForOf"], [3, "click"]], template: function ListFilterComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ListFilterComponent_scrm_panel_0_Template, 5, 10, "scrm-panel", 0);
            i0.ɵɵpipe(1, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.vm$));
        } }, dependencies: [i3.NgForOf, i3.NgIf, i4.ButtonComponent, i5.PanelComponent, i6.FieldGridComponent, i7.DropdownButtonComponent, i8.LabelComponent, i9.RecordGridComponent, i10.FieldComponent, i3.AsyncPipe], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListFilterComponent, [{
        type: Component,
        args: [{ selector: 'scrm-list-filter', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<scrm-panel *ngIf=\"(vm$ | async) as vm\"\n            [showHeader]=\"config.displayHeader\"\n            [close]=\"store.closeButton\"\n            [isCollapsed$]=\"store.isCollapsed$\"\n            [mode]=\"store.panelMode\"\n            klass=\"filter-panel m-0 {{ (config && config.klass) || ''}}\"\n            [titleKey]=\"'LBL_BASIC_FILTER'\"\n>\n\n    <div *ngIf=\"store.myFilterButton\" panel-header-button>\n        <scrm-dropdown-button [config]=\"store.myFilterButton\"></scrm-dropdown-button>\n    </div>\n\n    <div class=\"p-2 filter-body\" panel-body>\n\n        <scrm-field-grid *ngIf=\"store.displayFields && store.displayFields.length\"\n                         [actions]=\"true\"\n                         [appendActions]=\"false\"\n                         [fieldMode]=\"store.mode\"\n                         [fields]=\"store.displayFields\"\n                         [record]=\"vm\"\n                         [special]=\"store.special.length > 0\"\n                         (click)=\"onFocusSearch()\"\n        >\n\n            <div *ngIf=\"store.special.length > 0\" class=\"special-field-grid\" field-grid-special>\n\n                <div *ngFor=\"let item of store.special \" class=\"d-inline-block mr-sm-2 w-25 special-field-grid-col\">\n\n                    <label class=\"form-check-label\">\n                        <scrm-label [labelKey]=\"item.labelKey\"></scrm-label>\n                    </label>\n\n                    <scrm-field [field]=\"item\"\n                                [mode]=\"store.mode\"\n                                [record]=\"vm\"\n                                [type]=\"item.type\">\n                    </scrm-field>\n\n                </div>\n            </div>\n\n            <div *ngIf=\"store.gridButtons\" class=\"mt-4 align-self-end\" field-grid-actions>\n                <scrm-button *ngFor=\"let button of store.gridButtons\" [config]=\"button\"></scrm-button>\n            </div>\n        </scrm-field-grid>\n\n        <ng-container *ngIf=\"config && config.savedFilterEdit && store.filterStore.getMode() !== 'detail'\">\n            <div (click)=\"onFocusSave()\">\n                <scrm-record-grid [config]=\"gridConfig\"></scrm-record-grid>\n            </div>\n\n        </ng-container>\n    </div>\n\n</scrm-panel>\n" }]
    }], () => [{ type: i1.ListFilterStoreFactory }, { type: i2.SavedFilterActionAdapterFactory }], { config: [{
            type: Input
        }], onEnterKey: [{
            type: HostListener,
            args: ['keydown.enter', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ListFilterComponent, { className: "ListFilterComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1maWx0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbnRhaW5lcnMvbGlzdC1maWx0ZXIvY29tcG9uZW50cy9saXN0LWZpbHRlci9saXN0LWZpbHRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9saXN0LWZpbHRlci9jb21wb25lbnRzL2xpc3QtZmlsdGVyL2xpc3QtZmlsdGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBSWhGLE9BQU8sRUFBYSxFQUFFLEVBQWUsTUFBTSxNQUFNLENBQUM7QUFDbEQsT0FBTyxFQUFDLEdBQUcsRUFBRSxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUdoRCxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSxtREFBbUQsQ0FBQztBQUd6RixPQUFPLEVBQUMsK0JBQStCLEVBQUMsTUFBTSx3Q0FBd0MsQ0FBQzs7Ozs7Ozs7Ozs7OztJQ0RuRiw4QkFBc0Q7SUFDbEQsMENBQTZFO0lBQ2pGLGlCQUFNOzs7SUFEb0IsY0FBK0I7SUFBL0Isb0RBQStCOzs7SUFtQnpDLEFBRkosK0JBQW9HLGdCQUVoRTtJQUM1QixpQ0FBb0Q7SUFDeEQsaUJBQVE7SUFFUixpQ0FJYTtJQUVqQixpQkFBTTs7Ozs7SUFUYyxlQUEwQjtJQUExQiwyQ0FBMEI7SUFHOUIsY0FBYztJQUdkLEFBREEsQUFEQSxBQURBLCtCQUFjLDJCQUNLLGlCQUNOLHNCQUNLOzs7SUFYdEMsK0JBQW9GO0lBRWhGLDBHQUFvRztJQWF4RyxpQkFBTTs7O0lBYm9C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QUFtQjtvRUFBbkIsbUJBQW1CO1lBQW5CLDhHQUFBLHNCQUFrQixJQUFDOztZQ2pCaEMsbUZBT0M7OztZQVBZLG9EQUFvQjs7O2lGRGlCcEIsbUJBQW1CO2NBTC9CLFNBQVM7MkJBQ0ksa0JBQWtCO3FHQU1uQixNQUFNO2tCQUFkLEtBQUs7WUFhTixVQUFVO2tCQURULFlBQVk7bUJBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDOztrRkFkaEMsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCdXR0b25JbnRlcmZhY2V9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24ubW9kZWwnO1xuaW1wb3J0IHtSZWNvcmR9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9yZWNvcmQvcmVjb3JkLm1vZGVsJztcbmltcG9ydCB7U2NyZWVuU2l6ZU1hcH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL3VpL3Jlc2l6ZS5tb2RlbCc7XG5pbXBvcnQge09ic2VydmFibGUsIG9mLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHttYXAsIHNoYXJlUmVwbGF5fSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge0ZpbHRlckNvbmZpZ30gZnJvbSAnLi9saXN0LWZpbHRlci5tb2RlbCc7XG5pbXBvcnQge1JlY29yZEdyaWRDb25maWd9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcmVjb3JkLWdyaWQvcmVjb3JkLWdyaWQubW9kZWwnO1xuaW1wb3J0IHtMaXN0RmlsdGVyU3RvcmVGYWN0b3J5fSBmcm9tICcuLi8uLi9zdG9yZS9saXN0LWZpbHRlci9saXN0LWZpbHRlci5zdG9yZS5mYWN0b3J5JztcbmltcG9ydCB7TGlzdEZpbHRlclN0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS9saXN0LWZpbHRlci9saXN0LWZpbHRlci5zdG9yZSc7XG5pbXBvcnQge1NhdmVkRmlsdGVyQWN0aW9uc0FkYXB0ZXJ9IGZyb20gJy4uLy4uL2FkYXB0ZXJzL2FjdGlvbnMuYWRhcHRlcic7XG5pbXBvcnQge1NhdmVkRmlsdGVyQWN0aW9uQWRhcHRlckZhY3Rvcnl9IGZyb20gJy4uLy4uL2FkYXB0ZXJzL2FjdGlvbnMuYWRhcHRlci5mYWN0b3J5JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLWxpc3QtZmlsdGVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbGlzdC1maWx0ZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW10sXG59KVxuZXhwb3J0IGNsYXNzIExpc3RGaWx0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBASW5wdXQoKSBjb25maWc6IEZpbHRlckNvbmZpZztcblxuICAgIHZtJDogT2JzZXJ2YWJsZTxSZWNvcmQ+O1xuICAgIHN0b3JlOiBMaXN0RmlsdGVyU3RvcmU7XG4gICAgZmlsdGVyQWN0aW9uc0FkYXB0ZXI6IFNhdmVkRmlsdGVyQWN0aW9uc0FkYXB0ZXI7XG4gICAgc2VsZWN0ZWRBY3Rpb25CdXR0b246QnV0dG9uSW50ZXJmYWNlO1xuICAgIHNlYXJjaEFjdGlvbkJ1dHRvbjogQnV0dG9uSW50ZXJmYWNlO1xuICAgIHNhdmVBY3Rpb25CdXR0b246IEJ1dHRvbkludGVyZmFjZTtcbiAgICBncmlkQ29uZmlnOiBSZWNvcmRHcmlkQ29uZmlnO1xuXG4gICAgcHJvdGVjdGVkIHN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duLmVudGVyJywgWyckZXZlbnQnXSlcbiAgICBvbkVudGVyS2V5KCkge1xuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0ZWRBY3Rpb25CdXR0b24pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlbGVjdGVkQWN0aW9uQnV0dG9uLm9uQ2xpY2soKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIHN0b3JlRmFjdG9yeTogTGlzdEZpbHRlclN0b3JlRmFjdG9yeSxcbiAgICAgICAgcHJvdGVjdGVkIGFjdGlvbkFkYXB0ZXJGYWN0b3J5OiBTYXZlZEZpbHRlckFjdGlvbkFkYXB0ZXJGYWN0b3J5XG4gICAgKSB7XG4gICAgICAgIHRoaXMuc3RvcmUgPSBzdG9yZUZhY3RvcnkuY3JlYXRlKCk7XG4gICAgICAgIHRoaXMuZmlsdGVyQWN0aW9uc0FkYXB0ZXIgPSBhY3Rpb25BZGFwdGVyRmFjdG9yeS5jcmVhdGUodGhpcy5zdG9yZS5maWx0ZXJTdG9yZSwgdGhpcy5zdG9yZSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RvcmUuaW5pdCh0aGlzLmNvbmZpZyk7XG4gICAgICAgIHRoaXMudm0kID0gdGhpcy5zdG9yZS52bSQucGlwZShtYXAoKFtzYXZlZEZpbHRlcl0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlY29yZCA9IHsuLi5zYXZlZEZpbHRlcn07XG4gICAgICAgICAgICByZWNvcmQuZmllbGRzID0gc2F2ZWRGaWx0ZXIuY3JpdGVyaWFGaWVsZHM7XG4gICAgICAgICAgICByZXR1cm4gcmVjb3JkO1xuICAgICAgICB9KSk7XG5cbiAgICAgICAgdGhpcy5zZWFyY2hBY3Rpb25CdXR0b24gPSB0aGlzLnN0b3JlLmdyaWRCdXR0b25zLmZpbmQoYnV0dG9uID0+IGJ1dHRvbi5pZCA9PT0gXCJzZWFyY2hcIik7XG5cbiAgICAgICAgdGhpcy5zYXZlQWN0aW9uQnV0dG9uID0ge1xuICAgICAgICAgICAgaWQ6ICdzYXZlJyxcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckFjdGlvbnNBZGFwdGVyLnJ1bignc2F2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGFzIEJ1dHRvbkludGVyZmFjZTtcblxuICAgICAgICB0aGlzLmdyaWRDb25maWcgPSB7XG4gICAgICAgICAgICByZWNvcmQkOiB0aGlzLnN0b3JlLmZpbHRlclN0b3JlLnN0YWdpbmdSZWNvcmQkLFxuICAgICAgICAgICAgbW9kZSQ6IHRoaXMuc3RvcmUuZmlsdGVyU3RvcmUubW9kZSQsXG4gICAgICAgICAgICBmaWVsZHMkOiB0aGlzLnN0b3JlLmZpbHRlclN0b3JlLmdldFZpZXdGaWVsZHNLZXlzJCgpLFxuICAgICAgICAgICAgYWN0aW9uczogdGhpcy5maWx0ZXJBY3Rpb25zQWRhcHRlcixcbiAgICAgICAgICAgIGFwcGVuZEFjdGlvbnM6IHRydWUsXG4gICAgICAgICAgICBrbGFzczogJ210LTIgcC0yIHNhdmVkLXNlYXJjaC1jb250YWluZXIgcm91bmRlZCcsXG4gICAgICAgICAgICBidXR0b25DbGFzczogJ2J0biBidG4tb3V0bGluZS1kYW5nZXIgYnRuLXNtJyxcbiAgICAgICAgICAgIGxhYmVsRGlzcGxheTogJ2lubGluZScsXG4gICAgICAgICAgICByb3dDbGFzczoge1xuICAgICAgICAgICAgICAgICdhbGlnbi1pdGVtcy1zdGFydCc6IHRydWUsXG4gICAgICAgICAgICAgICAgJ2FsaWduLWl0ZW1zLWNlbnRlcic6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29sQWxpZ25JdGVtczogJ2FsaWduLWl0ZW1zLXN0YXJ0JyxcbiAgICAgICAgICAgIG1heENvbHVtbnMkOiBvZig0KS5waXBlKHNoYXJlUmVwbGF5KDEpKSxcbiAgICAgICAgICAgIHNpemVNYXAkOiBvZih7XG4gICAgICAgICAgICAgICAgaGFuZHNldDogMSxcbiAgICAgICAgICAgICAgICB0YWJsZXQ6IDIsXG4gICAgICAgICAgICAgICAgd2ViOiA0LFxuICAgICAgICAgICAgICAgIHdpZGU6IDRcbiAgICAgICAgICAgIH0gYXMgU2NyZWVuU2l6ZU1hcCkucGlwZShzaGFyZVJlcGxheSgxKSlcbiAgICAgICAgfSBhcyBSZWNvcmRHcmlkQ29uZmlnO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuICAgICAgICB0aGlzLnN0b3JlLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuc3RvcmUgPSBudWxsO1xuICAgIH1cblxuICAgIG9uRm9jdXNTZWFyY2goKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRBY3Rpb25CdXR0b24gPSB0aGlzLnNlYXJjaEFjdGlvbkJ1dHRvbjtcbiAgICB9XG5cbiAgICBvbkZvY3VzU2F2ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEFjdGlvbkJ1dHRvbiA9IHRoaXMuc2F2ZUFjdGlvbkJ1dHRvbjtcbiAgICB9XG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48c2NybS1wYW5lbCAqbmdJZj1cIih2bSQgfCBhc3luYykgYXMgdm1cIlxuICAgICAgICAgICAgW3Nob3dIZWFkZXJdPVwiY29uZmlnLmRpc3BsYXlIZWFkZXJcIlxuICAgICAgICAgICAgW2Nsb3NlXT1cInN0b3JlLmNsb3NlQnV0dG9uXCJcbiAgICAgICAgICAgIFtpc0NvbGxhcHNlZCRdPVwic3RvcmUuaXNDb2xsYXBzZWQkXCJcbiAgICAgICAgICAgIFttb2RlXT1cInN0b3JlLnBhbmVsTW9kZVwiXG4gICAgICAgICAgICBrbGFzcz1cImZpbHRlci1wYW5lbCBtLTAge3sgKGNvbmZpZyAmJiBjb25maWcua2xhc3MpIHx8ICcnfX1cIlxuICAgICAgICAgICAgW3RpdGxlS2V5XT1cIidMQkxfQkFTSUNfRklMVEVSJ1wiXG4+XG5cbiAgICA8ZGl2ICpuZ0lmPVwic3RvcmUubXlGaWx0ZXJCdXR0b25cIiBwYW5lbC1oZWFkZXItYnV0dG9uPlxuICAgICAgICA8c2NybS1kcm9wZG93bi1idXR0b24gW2NvbmZpZ109XCJzdG9yZS5teUZpbHRlckJ1dHRvblwiPjwvc2NybS1kcm9wZG93bi1idXR0b24+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwicC0yIGZpbHRlci1ib2R5XCIgcGFuZWwtYm9keT5cblxuICAgICAgICA8c2NybS1maWVsZC1ncmlkICpuZ0lmPVwic3RvcmUuZGlzcGxheUZpZWxkcyAmJiBzdG9yZS5kaXNwbGF5RmllbGRzLmxlbmd0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgW2FjdGlvbnNdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgW2FwcGVuZEFjdGlvbnNdPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFtmaWVsZE1vZGVdPVwic3RvcmUubW9kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgW2ZpZWxkc109XCJzdG9yZS5kaXNwbGF5RmllbGRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbcmVjb3JkXT1cInZtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbc3BlY2lhbF09XCJzdG9yZS5zcGVjaWFsLmxlbmd0aCA+IDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkZvY3VzU2VhcmNoKClcIlxuICAgICAgICA+XG5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJzdG9yZS5zcGVjaWFsLmxlbmd0aCA+IDBcIiBjbGFzcz1cInNwZWNpYWwtZmllbGQtZ3JpZFwiIGZpZWxkLWdyaWQtc3BlY2lhbD5cblxuICAgICAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygc3RvcmUuc3BlY2lhbCBcIiBjbGFzcz1cImQtaW5saW5lLWJsb2NrIG1yLXNtLTIgdy0yNSBzcGVjaWFsLWZpZWxkLWdyaWQtY29sXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tbGFiZWwgW2xhYmVsS2V5XT1cIml0ZW0ubGFiZWxLZXlcIj48L3Njcm0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgPHNjcm0tZmllbGQgW2ZpZWxkXT1cIml0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbW9kZV09XCJzdG9yZS5tb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3JlY29yZF09XCJ2bVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0eXBlXT1cIml0ZW0udHlwZVwiPlxuICAgICAgICAgICAgICAgICAgICA8L3Njcm0tZmllbGQ+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwic3RvcmUuZ3JpZEJ1dHRvbnNcIiBjbGFzcz1cIm10LTQgYWxpZ24tc2VsZi1lbmRcIiBmaWVsZC1ncmlkLWFjdGlvbnM+XG4gICAgICAgICAgICAgICAgPHNjcm0tYnV0dG9uICpuZ0Zvcj1cImxldCBidXR0b24gb2Ygc3RvcmUuZ3JpZEJ1dHRvbnNcIiBbY29uZmlnXT1cImJ1dHRvblwiPjwvc2NybS1idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zY3JtLWZpZWxkLWdyaWQ+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbmZpZyAmJiBjb25maWcuc2F2ZWRGaWx0ZXJFZGl0ICYmIHN0b3JlLmZpbHRlclN0b3JlLmdldE1vZGUoKSAhPT0gJ2RldGFpbCdcIj5cbiAgICAgICAgICAgIDxkaXYgKGNsaWNrKT1cIm9uRm9jdXNTYXZlKClcIj5cbiAgICAgICAgICAgICAgICA8c2NybS1yZWNvcmQtZ3JpZCBbY29uZmlnXT1cImdyaWRDb25maWdcIj48L3Njcm0tcmVjb3JkLWdyaWQ+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cblxuPC9zY3JtLXBhbmVsPlxuIl19