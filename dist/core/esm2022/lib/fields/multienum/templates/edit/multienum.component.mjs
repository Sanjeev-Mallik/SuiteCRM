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
import { Component, ViewChild } from '@angular/core';
import { DataTypeFormatter } from '../../../../services/formatters/data-type.formatter.service';
import { BaseMultiEnumComponent } from '../../../base/base-multienum.component';
import { LanguageStore } from '../../../../store/language/language.store';
import { FieldLogicManager } from '../../../field-logic/field-logic.manager';
import { FieldLogicDisplayManager } from '../../../field-logic-display/field-logic-display.manager';
import { ScreenSizeObserverService } from "../../../../services/ui/screen-size-observer/screen-size-observer.service";
import { take } from "rxjs/operators";
import { SystemConfigStore } from "../../../../store/system-config/system-config.store";
import { PrimeNGConfig } from "primeng/api";
import { MultiSelect } from "primeng/multiselect";
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/language/language.store";
import * as i2 from "../../../../services/formatters/data-type.formatter.service";
import * as i3 from "../../../field-logic/field-logic.manager";
import * as i4 from "../../../field-logic-display/field-logic-display.manager";
import * as i5 from "../../../../services/ui/screen-size-observer/screen-size-observer.service";
import * as i6 from "../../../../store/system-config/system-config.store";
import * as i7 from "primeng/api";
import * as i8 from "@angular/forms";
import * as i9 from "primeng/multiselect";
import * as i10 from "../../../../components/image/image.component";
const _c0 = ["multiSelect"];
function MultiEnumEditFieldComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-image", 6);
} }
function MultiEnumEditFieldComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-image", 7);
} }
function MultiEnumEditFieldComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-image", 8);
} }
export class MultiEnumEditFieldComponent extends BaseMultiEnumComponent {
    constructor(languages, typeFormatter, logic, logicDisplay, screenSize, systemConfigStore, primengConfig) {
        super(languages, typeFormatter, logic, logicDisplay);
        this.languages = languages;
        this.typeFormatter = typeFormatter;
        this.logic = logic;
        this.logicDisplay = logicDisplay;
        this.screenSize = screenSize;
        this.systemConfigStore = systemConfigStore;
        this.primengConfig = primengConfig;
        this.placeholderLabel = '';
        this.selectedItemsLabel = '';
        this.emptyFilterLabel = '';
        this.maxSelectedLabels = 20;
        this.selectAll = false;
    }
    ngOnInit() {
        this.checkAndInitAsDynamicEnum();
        this.getTranslatedLabels();
        super.ngOnInit();
        const maxSelectedLabelsForDisplay = this.systemConfigStore.getUi('multiselect_max_number');
        this.screenSize.screenSize$
            .pipe(take(1))
            .subscribe((screenSize) => {
            this.maxSelectedLabels = maxSelectedLabelsForDisplay[screenSize] || this.maxSelectedLabels;
        });
        this.primengConfig.ripple = true;
        this.clearButton = {
            klass: ['btn', 'btn-sm', 'btn-outline-secondary', 'm-0', 'border-0'],
            onClick: (event) => {
                this.onRemove();
            },
            icon: 'cross'
        };
    }
    onAdd() {
        const value = this.selectedValues.map(option => option.value);
        this.field.valueList = value;
        this.field.formControl.setValue(value);
        this.field.formControl.markAsDirty();
        this.calculateSelectAll();
    }
    onSelectAll(event) {
        this.selectAll = event.checked;
        if (this.selectAll) {
            if (this.multiSelect.visibleOptions() && this.multiSelect.visibleOptions().length) {
                this.selectedValues = this.multiSelect.visibleOptions();
            }
            else {
                this.selectedValues = this.options;
            }
            this.onAdd();
        }
        else {
            this.selectedValues = [];
            this.onRemove();
        }
    }
    onRemove() {
        const value = this.selectedValues.map(option => option.value);
        this.field.valueList = value;
        this.field.formControl.setValue(value);
        this.field.formControl.markAsDirty();
        this.calculateSelectAll();
    }
    onClear() {
        this.selectedValues = [];
        this.multiSelect.filterValue = '';
        this.onRemove();
    }
    onPanelShow() {
        this.multiSelect.filterInputChild.nativeElement.focus();
        this.multiSelect.filterValue = '';
        this.calculateSelectAll();
    }
    onFilter() {
        this.calculateSelectAll();
    }
    getTranslatedLabels() {
        this.placeholderLabel = this.languages.getAppString('LBL_SELECT_ITEM') || '';
        this.selectedItemsLabel = this.languages.getAppString('LBL_ITEMS_SELECTED') || '';
        this.emptyFilterLabel = this.languages.getAppString('ERR_SEARCH_NO_RESULTS') || '';
    }
    calculateSelectAll() {
        const visibleOptions = this?.multiSelect?.visibleOptions() ?? [];
        const selectedValuesKeys = (this?.selectedValues ?? []).map(item => item.value);
        if (!visibleOptions.length || !selectedValuesKeys.length) {
            this.selectAll = false;
            return;
        }
        if (visibleOptions.length > selectedValuesKeys.length) {
            this.selectAll = false;
            return;
        }
        this.selectAll = visibleOptions.every(item => selectedValuesKeys.includes(item.value));
    }
    static { this.ɵfac = function MultiEnumEditFieldComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MultiEnumEditFieldComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore), i0.ɵɵdirectiveInject(i2.DataTypeFormatter), i0.ɵɵdirectiveInject(i3.FieldLogicManager), i0.ɵɵdirectiveInject(i4.FieldLogicDisplayManager), i0.ɵɵdirectiveInject(i5.ScreenSizeObserverService), i0.ɵɵdirectiveInject(i6.SystemConfigStore), i0.ɵɵdirectiveInject(i7.PrimeNGConfig)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MultiEnumEditFieldComponent, selectors: [["scrm-multienum-edit"]], viewQuery: function MultiEnumEditFieldComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.multiSelect = _t.first);
        } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 6, vars: 14, consts: [["multiSelect", ""], [1, "d-flex", "align-items-center"], [3, "ngModelChange", "onChange", "onSelectAllChange", "onRemove", "onPanelShow", "onFilter", "onClear", "options", "ngModel", "optionLabel", "placeholder", "selectedItemsLabel", "emptyFilterMessage", "maxSelectedLabels", "styleClass", "showToggleAll", "selectAll", "autoOptionFocus", "autofocusFilter", "showClear", "focusOnHover"], ["pTemplate", "dropdownicon"], ["pTemplate", "filtericon"], ["pTemplate", "checkicon"], ["image", "down_carret"], ["image", "search"], ["image", "checkbox_cross"]], template: function MultiEnumEditFieldComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1)(1, "p-multiSelect", 2, 0);
            i0.ɵɵtwoWayListener("ngModelChange", function MultiEnumEditFieldComponent_Template_p_multiSelect_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.selectedValues, $event) || (ctx.selectedValues = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵlistener("onChange", function MultiEnumEditFieldComponent_Template_p_multiSelect_onChange_1_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onAdd()); })("onSelectAllChange", function MultiEnumEditFieldComponent_Template_p_multiSelect_onSelectAllChange_1_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onSelectAll($event)); })("onRemove", function MultiEnumEditFieldComponent_Template_p_multiSelect_onRemove_1_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onRemove()); })("onPanelShow", function MultiEnumEditFieldComponent_Template_p_multiSelect_onPanelShow_1_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onPanelShow()); })("onFilter", function MultiEnumEditFieldComponent_Template_p_multiSelect_onFilter_1_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onFilter()); })("onClear", function MultiEnumEditFieldComponent_Template_p_multiSelect_onClear_1_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onClear()); });
            i0.ɵɵtemplate(3, MultiEnumEditFieldComponent_ng_template_3_Template, 1, 0, "ng-template", 3)(4, MultiEnumEditFieldComponent_ng_template_4_Template, 1, 0, "ng-template", 4)(5, MultiEnumEditFieldComponent_ng_template_5_Template, 1, 0, "ng-template", 5);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("options", ctx.options);
            i0.ɵɵtwoWayProperty("ngModel", ctx.selectedValues);
            i0.ɵɵproperty("optionLabel", "label")("placeholder", ctx.placeholderLabel)("selectedItemsLabel", "{0} " + ctx.selectedItemsLabel)("emptyFilterMessage", ctx.emptyFilterLabel)("maxSelectedLabels", ctx.maxSelectedLabels)("styleClass", "w-100 " + ctx.getInvalidClass())("showToggleAll", true)("selectAll", ctx.selectAll)("autoOptionFocus", false)("autofocusFilter", true)("showClear", true)("focusOnHover", true);
        } }, dependencies: [i8.NgControlStatus, i8.NgModel, i9.MultiSelect, i7.PrimeTemplate, i10.ImageComponent], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MultiEnumEditFieldComponent, [{
        type: Component,
        args: [{ selector: 'scrm-multienum-edit', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div class=\"d-flex align-items-center\">\n    <p-multiSelect\n        #multiSelect\n        [options]=\"options\"\n        [(ngModel)]=\"selectedValues\"\n        [optionLabel]=\"'label'\"\n        (onChange)=\"onAdd()\"\n        (onSelectAllChange)=\"onSelectAll($event)\"\n        (onRemove)=\"onRemove()\"\n        (onPanelShow)=\"onPanelShow()\"\n        (onFilter)=\"onFilter()\"\n        [placeholder]=\"placeholderLabel\"\n        [selectedItemsLabel]=\"'{0} ' + selectedItemsLabel\"\n        [emptyFilterMessage]=\"emptyFilterLabel\"\n        [maxSelectedLabels]=\"maxSelectedLabels\"\n        [styleClass]=\"'w-100 ' + getInvalidClass()\"\n        [showToggleAll]=\"true\"\n        [selectAll]=\"selectAll\"\n        [autoOptionFocus]=\"false\"\n        [autofocusFilter]=\"true\"\n        [showClear]=\"true\"\n        (onClear)=\"onClear()\"\n        [focusOnHover]=\"true\"\n    >\n        <ng-template pTemplate=\"dropdownicon\">\n            <scrm-image image=\"down_carret\"></scrm-image>\n        </ng-template>\n        <ng-template pTemplate=\"filtericon\">\n            <scrm-image image=\"search\"></scrm-image>\n        </ng-template>\n        <ng-template pTemplate=\"checkicon\">\n            <scrm-image image=\"checkbox_cross\"></scrm-image>\n        </ng-template>\n    </p-multiSelect>\n</div>\n\n" }]
    }], () => [{ type: i1.LanguageStore }, { type: i2.DataTypeFormatter }, { type: i3.FieldLogicManager }, { type: i4.FieldLogicDisplayManager }, { type: i5.ScreenSizeObserverService }, { type: i6.SystemConfigStore }, { type: i7.PrimeNGConfig }], { multiSelect: [{
            type: ViewChild,
            args: ['multiSelect']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MultiEnumEditFieldComponent, { className: "MultiEnumEditFieldComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGllbnVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9maWVsZHMvbXVsdGllbnVtL3RlbXBsYXRlcy9lZGl0L211bHRpZW51bS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvZmllbGRzL211bHRpZW51bS90ZW1wbGF0ZXMvZWRpdC9tdWx0aWVudW0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDZEQUE2RCxDQUFDO0FBQzlGLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLHdDQUF3QyxDQUFDO0FBQzlFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUN4RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSwwQ0FBMEMsQ0FBQztBQUMzRSxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSwwREFBMEQsQ0FBQztBQUNsRyxPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSwyRUFBMkUsQ0FBQztBQUNwSCxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0scURBQXFELENBQUM7QUFDdEYsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUUxQyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7Ozs7Ozs7O0lDZXBDLGdDQUE2Qzs7O0lBRzdDLGdDQUF3Qzs7O0lBR3hDLGdDQUFnRDs7QURkNUQsTUFBTSxPQUFP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QUNSLGlCQUFhLEtBQUMsOElBQ2pCLGNBQVUsS0FBQyw0SUFXWixhQUFTLEtBQUM7WUFTckIsQUFIQSxBQUhBLDRGQUFzQywrRUFHRiwrRUFHRDtZQUkzQyxBQURJLGlCQUFnQixFQUNkOztZQS9CRSxjQUFtQjtZQUFuQixxQ0FBbUI7WUFDbkIsa0RBQTRCO1lBa0I1QixBQUZBLEFBREEsQUFEQSxBQURBLEFBREEsQUFEQSxBQURBLEFBREEsQUFEQSxBQURBLEFBTkEscUNBQXVCLHFDQU1TLHVEQUNrQiw0Q0FDWCw0Q0FDQSxnREFDSSx1QkFDckIsNEJBQ0MsMEJBQ0UseUJBQ0QsbUJBQ04sc0JBRUc7OztpRkRMaEIsMkJBQTJCO2NBTHZDLFNBQVM7MkJBQ0kscUJBQXFCO3lQQUtMLFdBQVc7a0JBQXBDLFNBQVM7bUJBQUMsYUFBYTs7a0ZBRGYsMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGF0YVR5cGVGb3JtYXR0ZXJ9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL2Zvcm1hdHRlcnMvZGF0YS10eXBlLmZvcm1hdHRlci5zZXJ2aWNlJztcbmltcG9ydCB7QmFzZU11bHRpRW51bUNvbXBvbmVudH0gZnJvbSAnLi4vLi4vLi4vYmFzZS9iYXNlLW11bHRpZW51bS5jb21wb25lbnQnO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5pbXBvcnQge0ZpZWxkTG9naWNNYW5hZ2VyfSBmcm9tICcuLi8uLi8uLi9maWVsZC1sb2dpYy9maWVsZC1sb2dpYy5tYW5hZ2VyJztcbmltcG9ydCB7RmllbGRMb2dpY0Rpc3BsYXlNYW5hZ2VyfSBmcm9tICcuLi8uLi8uLi9maWVsZC1sb2dpYy1kaXNwbGF5L2ZpZWxkLWxvZ2ljLWRpc3BsYXkubWFuYWdlcic7XG5pbXBvcnQge1NjcmVlblNpemVPYnNlcnZlclNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi8uLi9zZXJ2aWNlcy91aS9zY3JlZW4tc2l6ZS1vYnNlcnZlci9zY3JlZW4tc2l6ZS1vYnNlcnZlci5zZXJ2aWNlXCI7XG5pbXBvcnQge3Rha2V9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHtTeXN0ZW1Db25maWdTdG9yZX0gZnJvbSBcIi4uLy4uLy4uLy4uL3N0b3JlL3N5c3RlbS1jb25maWcvc3lzdGVtLWNvbmZpZy5zdG9yZVwiO1xuaW1wb3J0IHtQcmltZU5HQ29uZmlnfSBmcm9tIFwicHJpbWVuZy9hcGlcIjtcbmltcG9ydCB7QnV0dG9uSW50ZXJmYWNlfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY29tcG9uZW50cy9idXR0b24vYnV0dG9uLm1vZGVsJztcbmltcG9ydCB7TXVsdGlTZWxlY3R9IGZyb20gXCJwcmltZW5nL211bHRpc2VsZWN0XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1tdWx0aWVudW0tZWRpdCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL211bHRpZW51bS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBNdWx0aUVudW1FZGl0RmllbGRDb21wb25lbnQgZXh0ZW5kcyBCYXNlTXVsdGlFbnVtQ29tcG9uZW50IHtcbiAgICBAVmlld0NoaWxkKCdtdWx0aVNlbGVjdCcpIG11bHRpU2VsZWN0OiBNdWx0aVNlbGVjdDtcblxuICAgIHBsYWNlaG9sZGVyTGFiZWw6IHN0cmluZyA9ICcnO1xuICAgIHNlbGVjdGVkSXRlbXNMYWJlbDogc3RyaW5nID0gJyc7XG4gICAgZW1wdHlGaWx0ZXJMYWJlbDogc3RyaW5nID0gJyc7XG4gICAgbWF4U2VsZWN0ZWRMYWJlbHM6IG51bWJlciA9IDIwO1xuICAgIHNlbGVjdEFsbDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGNsZWFyQnV0dG9uOiBCdXR0b25JbnRlcmZhY2U7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGxhbmd1YWdlczogTGFuZ3VhZ2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIHR5cGVGb3JtYXR0ZXI6IERhdGFUeXBlRm9ybWF0dGVyLFxuICAgICAgICBwcm90ZWN0ZWQgbG9naWM6IEZpZWxkTG9naWNNYW5hZ2VyLFxuICAgICAgICBwcm90ZWN0ZWQgbG9naWNEaXNwbGF5OiBGaWVsZExvZ2ljRGlzcGxheU1hbmFnZXIsXG4gICAgICAgIHByb3RlY3RlZCBzY3JlZW5TaXplOiBTY3JlZW5TaXplT2JzZXJ2ZXJTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgc3lzdGVtQ29uZmlnU3RvcmU6IFN5c3RlbUNvbmZpZ1N0b3JlLFxuICAgICAgICBwcml2YXRlIHByaW1lbmdDb25maWc6IFByaW1lTkdDb25maWdcbiAgICApIHtcbiAgICAgICAgc3VwZXIobGFuZ3VhZ2VzLCB0eXBlRm9ybWF0dGVyLCBsb2dpYywgbG9naWNEaXNwbGF5KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jaGVja0FuZEluaXRBc0R5bmFtaWNFbnVtKCk7XG4gICAgICAgIHRoaXMuZ2V0VHJhbnNsYXRlZExhYmVscygpO1xuICAgICAgICBzdXBlci5uZ09uSW5pdCgpO1xuICAgICAgICBjb25zdCBtYXhTZWxlY3RlZExhYmVsc0ZvckRpc3BsYXkgPSB0aGlzLnN5c3RlbUNvbmZpZ1N0b3JlLmdldFVpKCdtdWx0aXNlbGVjdF9tYXhfbnVtYmVyJyk7XG4gICAgICAgIHRoaXMuc2NyZWVuU2l6ZS5zY3JlZW5TaXplJFxuICAgICAgICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHNjcmVlblNpemU6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubWF4U2VsZWN0ZWRMYWJlbHMgPSBtYXhTZWxlY3RlZExhYmVsc0ZvckRpc3BsYXlbc2NyZWVuU2l6ZV0gfHwgdGhpcy5tYXhTZWxlY3RlZExhYmVscztcbiAgICAgICAgICAgIH0pXG4gICAgICAgIHRoaXMucHJpbWVuZ0NvbmZpZy5yaXBwbGUgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuY2xlYXJCdXR0b24gPSB7XG4gICAgICAgICAgICBrbGFzczogWydidG4nLCAnYnRuLXNtJywgJ2J0bi1vdXRsaW5lLXNlY29uZGFyeScsICdtLTAnLCAnYm9yZGVyLTAnXSxcbiAgICAgICAgICAgIG9uQ2xpY2s6IChldmVudCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub25SZW1vdmUoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpY29uOiAnY3Jvc3MnXG4gICAgICAgIH0gYXMgQnV0dG9uSW50ZXJmYWNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkFkZCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNlbGVjdGVkVmFsdWVzLm1hcChvcHRpb24gPT4gb3B0aW9uLnZhbHVlKTtcbiAgICAgICAgdGhpcy5maWVsZC52YWx1ZUxpc3QgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5maWVsZC5mb3JtQ29udHJvbC5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIHRoaXMuZmllbGQuZm9ybUNvbnRyb2wubWFya0FzRGlydHkoKTtcblxuICAgICAgICB0aGlzLmNhbGN1bGF0ZVNlbGVjdEFsbCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblNlbGVjdEFsbChldmVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNlbGVjdEFsbCA9IGV2ZW50LmNoZWNrZWQ7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdEFsbCkge1xuICAgICAgICAgICAgaWYgKHRoaXMubXVsdGlTZWxlY3QudmlzaWJsZU9wdGlvbnMoKSAmJiB0aGlzLm11bHRpU2VsZWN0LnZpc2libGVPcHRpb25zKCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlcyA9IHRoaXMubXVsdGlTZWxlY3QudmlzaWJsZU9wdGlvbnMoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlcyA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMub25BZGQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZXMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMub25SZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvblJlbW92ZSgpOiB2b2lkIHtcblxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2VsZWN0ZWRWYWx1ZXMubWFwKG9wdGlvbiA9PiBvcHRpb24udmFsdWUpO1xuICAgICAgICB0aGlzLmZpZWxkLnZhbHVlTGlzdCA9IHZhbHVlO1xuICAgICAgICB0aGlzLmZpZWxkLmZvcm1Db250cm9sLnNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgdGhpcy5maWVsZC5mb3JtQ29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlU2VsZWN0QWxsKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uQ2xlYXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZXMgPSBbXTtcbiAgICAgICAgdGhpcy5tdWx0aVNlbGVjdC5maWx0ZXJWYWx1ZSA9ICcnO1xuICAgICAgICB0aGlzLm9uUmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgb25QYW5lbFNob3coKTogdm9pZCB7XG4gICAgICAgIHRoaXMubXVsdGlTZWxlY3QuZmlsdGVySW5wdXRDaGlsZC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIHRoaXMubXVsdGlTZWxlY3QuZmlsdGVyVmFsdWUgPSAnJztcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVTZWxlY3RBbGwoKTtcbiAgICB9XG5cbiAgICBvbkZpbHRlcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVTZWxlY3RBbGwoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0VHJhbnNsYXRlZExhYmVscygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wbGFjZWhvbGRlckxhYmVsID0gdGhpcy5sYW5ndWFnZXMuZ2V0QXBwU3RyaW5nKCdMQkxfU0VMRUNUX0lURU0nKSB8fCAnJztcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zTGFiZWwgPSB0aGlzLmxhbmd1YWdlcy5nZXRBcHBTdHJpbmcoJ0xCTF9JVEVNU19TRUxFQ1RFRCcpIHx8ICcnO1xuICAgICAgICB0aGlzLmVtcHR5RmlsdGVyTGFiZWwgPSB0aGlzLmxhbmd1YWdlcy5nZXRBcHBTdHJpbmcoJ0VSUl9TRUFSQ0hfTk9fUkVTVUxUUycpIHx8ICcnO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjYWxjdWxhdGVTZWxlY3RBbGwoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHZpc2libGVPcHRpb25zID0gdGhpcz8ubXVsdGlTZWxlY3Q/LnZpc2libGVPcHRpb25zKCkgPz8gW107XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkVmFsdWVzS2V5cyA9ICh0aGlzPy5zZWxlY3RlZFZhbHVlcyA/PyBbXSkubWFwKGl0ZW0gPT4gaXRlbS52YWx1ZSk7XG5cbiAgICAgICAgaWYgKCF2aXNpYmxlT3B0aW9ucy5sZW5ndGggfHwgIXNlbGVjdGVkVmFsdWVzS2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0QWxsID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmlzaWJsZU9wdGlvbnMubGVuZ3RoID4gc2VsZWN0ZWRWYWx1ZXNLZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RBbGwgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2VsZWN0QWxsID0gdmlzaWJsZU9wdGlvbnMuZXZlcnkoaXRlbSA9PiBzZWxlY3RlZFZhbHVlc0tleXMuaW5jbHVkZXMoaXRlbS52YWx1ZSkpO1xuICAgIH1cblxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPGRpdiBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICA8cC1tdWx0aVNlbGVjdFxuICAgICAgICAjbXVsdGlTZWxlY3RcbiAgICAgICAgW29wdGlvbnNdPVwib3B0aW9uc1wiXG4gICAgICAgIFsobmdNb2RlbCldPVwic2VsZWN0ZWRWYWx1ZXNcIlxuICAgICAgICBbb3B0aW9uTGFiZWxdPVwiJ2xhYmVsJ1wiXG4gICAgICAgIChvbkNoYW5nZSk9XCJvbkFkZCgpXCJcbiAgICAgICAgKG9uU2VsZWN0QWxsQ2hhbmdlKT1cIm9uU2VsZWN0QWxsKCRldmVudClcIlxuICAgICAgICAob25SZW1vdmUpPVwib25SZW1vdmUoKVwiXG4gICAgICAgIChvblBhbmVsU2hvdyk9XCJvblBhbmVsU2hvdygpXCJcbiAgICAgICAgKG9uRmlsdGVyKT1cIm9uRmlsdGVyKClcIlxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJMYWJlbFwiXG4gICAgICAgIFtzZWxlY3RlZEl0ZW1zTGFiZWxdPVwiJ3swfSAnICsgc2VsZWN0ZWRJdGVtc0xhYmVsXCJcbiAgICAgICAgW2VtcHR5RmlsdGVyTWVzc2FnZV09XCJlbXB0eUZpbHRlckxhYmVsXCJcbiAgICAgICAgW21heFNlbGVjdGVkTGFiZWxzXT1cIm1heFNlbGVjdGVkTGFiZWxzXCJcbiAgICAgICAgW3N0eWxlQ2xhc3NdPVwiJ3ctMTAwICcgKyBnZXRJbnZhbGlkQ2xhc3MoKVwiXG4gICAgICAgIFtzaG93VG9nZ2xlQWxsXT1cInRydWVcIlxuICAgICAgICBbc2VsZWN0QWxsXT1cInNlbGVjdEFsbFwiXG4gICAgICAgIFthdXRvT3B0aW9uRm9jdXNdPVwiZmFsc2VcIlxuICAgICAgICBbYXV0b2ZvY3VzRmlsdGVyXT1cInRydWVcIlxuICAgICAgICBbc2hvd0NsZWFyXT1cInRydWVcIlxuICAgICAgICAob25DbGVhcik9XCJvbkNsZWFyKClcIlxuICAgICAgICBbZm9jdXNPbkhvdmVyXT1cInRydWVcIlxuICAgID5cbiAgICAgICAgPG5nLXRlbXBsYXRlIHBUZW1wbGF0ZT1cImRyb3Bkb3duaWNvblwiPlxuICAgICAgICAgICAgPHNjcm0taW1hZ2UgaW1hZ2U9XCJkb3duX2NhcnJldFwiPjwvc2NybS1pbWFnZT5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPG5nLXRlbXBsYXRlIHBUZW1wbGF0ZT1cImZpbHRlcmljb25cIj5cbiAgICAgICAgICAgIDxzY3JtLWltYWdlIGltYWdlPVwic2VhcmNoXCI+PC9zY3JtLWltYWdlPlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8bmctdGVtcGxhdGUgcFRlbXBsYXRlPVwiY2hlY2tpY29uXCI+XG4gICAgICAgICAgICA8c2NybS1pbWFnZSBpbWFnZT1cImNoZWNrYm94X2Nyb3NzXCI+PC9zY3JtLWltYWdlPlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvcC1tdWx0aVNlbGVjdD5cbjwvZGl2PlxuXG4iXX0=