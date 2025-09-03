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
import { Component, ElementRef, ViewChild } from '@angular/core';
import { emptyObject } from '../../../../common/utils/object-utils';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModuleNameMapper } from '../../../../services/navigation/module-name-mapper/module-name-mapper.service';
import { DataTypeFormatter } from '../../../../services/formatters/data-type.formatter.service';
import { RecordListModalComponent } from '../../../../containers/record-list-modal/components/record-list-modal/record-list-modal.component';
import { BaseRelateComponent } from '../../../base/base-relate.component';
import { LanguageStore } from '../../../../store/language/language.store';
import { RelateService } from '../../../../services/record/relate/relate.service';
import { FieldLogicManager } from '../../../field-logic/field-logic.manager';
import { FieldLogicDisplayManager } from '../../../field-logic-display/field-logic-display.manager';
import { map, take } from "rxjs/operators";
import { Dropdown } from "primeng/dropdown";
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/language/language.store";
import * as i2 from "../../../../services/formatters/data-type.formatter.service";
import * as i3 from "../../../../services/record/relate/relate.service";
import * as i4 from "../../../../services/navigation/module-name-mapper/module-name-mapper.service";
import * as i5 from "@ng-bootstrap/ng-bootstrap";
import * as i6 from "../../../field-logic/field-logic.manager";
import * as i7 from "../../../field-logic-display/field-logic-display.manager";
import * as i8 from "@angular/common";
import * as i9 from "@angular/forms";
import * as i10 from "../../../../components/button/button.component";
import * as i11 from "primeng/api";
import * as i12 from "../../../../components/image/image.component";
import * as i13 from "primeng/dropdown";
import * as i14 from "primeng/inputtext";
const _c0 = ["tag"];
const _c1 = ["dropdownFilterInput"];
function RelateEditFieldComponent_ng_container_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-image", 9);
} }
function RelateEditFieldComponent_ng_container_1_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵlistener("click", function RelateEditFieldComponent_ng_container_1_ng_template_5_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r4); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementStart(1, "input", 11, 1);
    i0.ɵɵtwoWayListener("ngModelChange", function RelateEditFieldComponent_ng_container_1_ng_template_5_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.filterValue, $event) || (ctx_r1.filterValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("keyup", function RelateEditFieldComponent_ng_container_1_ng_template_5_Template_input_keyup_1_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onFilterInput($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "scrm-image", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.filterValue);
} }
function RelateEditFieldComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 4)(2, "p-dropdown", 5, 0);
    i0.ɵɵtwoWayListener("ngModelChange", function RelateEditFieldComponent_ng_container_1_Template_p_dropdown_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.selectedValue, $event) || (ctx_r1.selectedValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("onChange", function RelateEditFieldComponent_ng_container_1_Template_p_dropdown_onChange_2_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onAdd($event.value)); })("onLazyLoad", function RelateEditFieldComponent_ng_container_1_Template_p_dropdown_onLazyLoad_2_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onFilter()); })("onShow", function RelateEditFieldComponent_ng_container_1_Template_p_dropdown_onShow_2_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.focusFilterInput()); })("onHide", function RelateEditFieldComponent_ng_container_1_Template_p_dropdown_onHide_2_listener() { i0.ɵɵrestoreView(_r1); const tag_r3 = i0.ɵɵreference(3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.resetFunction(tag_r3.options)); })("onClear", function RelateEditFieldComponent_ng_container_1_Template_p_dropdown_onClear_2_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onClear($event)); });
    i0.ɵɵtemplate(4, RelateEditFieldComponent_ng_container_1_ng_template_4_Template, 1, 0, "ng-template", 6)(5, RelateEditFieldComponent_ng_container_1_ng_template_5_Template, 4, 1, "ng-template", 7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div");
    i0.ɵɵelement(7, "scrm-button", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("options", ctx_r1.options);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.selectedValue);
    i0.ɵɵproperty("optionLabel", ctx_r1.getRelateFieldName())("emptyMessage", ctx_r1.emptyFilterLabel)("emptyFilterMessage", ctx_r1.emptyFilterLabel)("placeholder", ctx_r1.placeholderLabel)("autoOptionFocus", false)("autofocusFilter", false)("focusOnHover", true)("filter", true)("lazy", true)("dataKey", "id")("filterBy", ctx_r1.getRelateFieldName())("showClear", true)("styleClass", "w-100 " + ctx_r1.getInvalidClass());
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("config", ctx_r1.selectButton);
} }
export class RelateEditFieldComponent extends BaseRelateComponent {
    /**
     * Constructor
     *
     * @param {object} languages service
     * @param {object} typeFormatter service
     * @param {object} relateService service
     * @param {object} moduleNameMapper service
     * @param {object} modalService service
     * @param {object} logic
     * @param {object} logicDisplay
     */
    constructor(languages, typeFormatter, relateService, moduleNameMapper, modalService, logic, logicDisplay) {
        super(languages, typeFormatter, relateService, moduleNameMapper, logic, logicDisplay);
        this.languages = languages;
        this.typeFormatter = typeFormatter;
        this.relateService = relateService;
        this.moduleNameMapper = moduleNameMapper;
        this.modalService = modalService;
        this.logic = logic;
        this.logicDisplay = logicDisplay;
        this.selectedValue = {};
        this.placeholderLabel = '';
        this.emptyFilterLabel = '';
        this.filterValue = '';
    }
    /**
     * On init handler
     */
    ngOnInit() {
        super.ngOnInit();
        this.init();
        this.getTranslatedLabels();
        this.selectButton = {
            klass: ['btn', 'btn-sm', 'btn-outline-secondary', 'm-0', 'border-0'],
            onClick: () => {
                this.showSelectModal();
            },
            icon: 'cursor'
        };
    }
    init() {
        super.init();
        this.initValue();
        const idFieldName = this.getRelateIdField();
        if (idFieldName && this.record && this.record.fields && this.record.fields[idFieldName]) {
            this.idField = this.record.fields[idFieldName];
        }
    }
    initValue() {
        if (!this.field.valueObject) {
            this.selectedValue = {};
            this.field.formControl.setValue('');
            return;
        }
        if (!this.field.valueObject.id) {
            this.selectedValue = {};
            this.field.formControl.setValue('');
            return;
        }
        if (this.field?.metadata?.relateSearchField) {
            const rname = this.field?.definition?.rname ?? 'name';
            this.field.valueObject[this.field.metadata.relateSearchField] = this.field.valueObject[rname];
        }
        this.selectedValue = this.field.valueObject;
        this.options = [this.field.valueObject];
    }
    /**
     * Handle newly added item
     *
     * @param {object} item added
     */
    onAdd(item) {
        if (item) {
            const relateName = this.getRelateFieldName();
            this.setValue(item.id, item[relateName]);
            return;
        }
        this.setValue('', '');
        this.selectedValue = {};
        return;
    }
    /**
     * Handle item removal
     */
    onRemove() {
        this.setValue('', '');
        this.selectedValue = {};
        this.options = [];
    }
    onClear(event) {
        this.selectedValue = {};
        this.filterValue = '';
        this.options = [];
        this.onRemove();
    }
    onFilter() {
        const relateName = this.getRelateFieldName();
        this.filterValue = this.filterValue ?? '';
        const matches = this.filterValue.match(/^\s*$/g);
        if (matches && matches.length) {
            this.filterValue = '';
        }
        let term = this.filterValue;
        this.search(term).pipe(take(1), map(data => data.filter(item => item[relateName] !== '')), map(filteredData => filteredData.map(item => ({
            id: item.id,
            [relateName]: item[relateName]
        })))).subscribe(filteredOptions => {
            this.options = filteredOptions;
            if (!this?.selectedValue || !this?.selectedValue?.id) {
                return;
            }
            let found = false;
            filteredOptions.some(value => {
                if (value?.id === this.selectedValue.id) {
                    found = true;
                    return true;
                }
                return false;
            });
            if (found === false && this.selectedValue) {
                this.options.push(this.selectedValue);
            }
        });
    }
    resetFunction(options) {
        this.filterValue = '';
        this.options = [];
        if (!emptyObject(this.selectedValue)) {
            this.options = [this.selectedValue];
        }
    }
    onFilterInput(event) {
        event.stopPropagation();
        this.tag.onLazyLoad.emit();
    }
    /**
     * Set value on field
     *
     * @param {string} id to set
     * @param {string} relateValue to set
     */
    setValue(id, relateValue) {
        const relate = this.buildRelate(id, relateValue);
        this.field.value = relateValue;
        this.field.valueObject = relate;
        this.field.formControl.setValue(relateValue);
        this.field.formControl.markAsDirty();
        if (this.idField) {
            this.idField.value = id;
            this.idField.formControl.setValue(id);
            this.idField.formControl.markAsDirty();
        }
        if (relateValue) {
            const relateName = this.getRelateFieldName();
            this.selectedValue = { id: id, [relateName]: relateValue };
        }
        this.options = [this.selectedValue];
    }
    /**
     * Show record selection modal
     */
    showSelectModal() {
        const modal = this.modalService.open(RecordListModalComponent, { size: 'xl', scrollable: true });
        modal.componentInstance.module = this.getRelatedModule();
        modal.result.then((data) => {
            if (!data || !data.selection || !data.selection.selected) {
                return;
            }
            const record = this.getSelectedRecord(data);
            this.setItem(record);
        });
    }
    /**
     * Get Selected Record
     *
     * @param {object} data RecordListModalResult
     * @returns {object} Record
     */
    getSelectedRecord(data) {
        let id = '';
        Object.keys(data.selection.selected).some(selected => {
            id = selected;
            return true;
        });
        let record = null;
        data.records.some(rec => {
            if (rec && rec.id === id) {
                record = rec;
                return true;
            }
        });
        return record;
    }
    /**
     * Set the record as the selected item
     *
     * @param {object} record to set
     */
    setItem(record) {
        this.tag.writeValue(record.attributes);
        this.onAdd(record.attributes);
    }
    getTranslatedLabels() {
        this.placeholderLabel = this.languages.getAppString('LBL_SELECT_ITEM') || '';
        this.emptyFilterLabel = this.languages.getAppString('ERR_SEARCH_NO_RESULTS') || '';
    }
    focusFilterInput() {
        this.dropdownFilterInput.nativeElement.focus();
    }
    static { this.ɵfac = function RelateEditFieldComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RelateEditFieldComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore), i0.ɵɵdirectiveInject(i2.DataTypeFormatter), i0.ɵɵdirectiveInject(i3.RelateService), i0.ɵɵdirectiveInject(i4.ModuleNameMapper), i0.ɵɵdirectiveInject(i5.NgbModal), i0.ɵɵdirectiveInject(i6.FieldLogicManager), i0.ɵɵdirectiveInject(i7.FieldLogicDisplayManager)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RelateEditFieldComponent, selectors: [["scrm-relate-edit"]], viewQuery: function RelateEditFieldComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tag = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dropdownFilterInput = _t.first);
        } }, features: [i0.ɵɵProvidersFeature([RelateService]), i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 1, consts: [["tag", ""], ["dropdownFilterInput", ""], [1, "d-flex", "align-items-center"], [4, "ngIf"], [1, "flex-grow-1", "w-100", "mr-1"], [3, "ngModelChange", "onChange", "onLazyLoad", "onShow", "onHide", "onClear", "options", "ngModel", "optionLabel", "emptyMessage", "emptyFilterMessage", "placeholder", "autoOptionFocus", "autofocusFilter", "focusOnHover", "filter", "lazy", "dataKey", "filterBy", "showClear", "styleClass"], ["pTemplate", "dropdownicon"], ["pTemplate", "filter"], [3, "config"], ["image", "down_carret"], [1, "p-dropdown-filter-container", 3, "click"], ["type", "text", "pInputText", "", "autocomplete", "off", "tabindex", "0", 1, "p-dropdown-filter", "p-component", 3, "ngModelChange", "keyup", "ngModel"], ["image", "search", 1, "p-element", "p-dropdown-filter-search-icon"]], template: function RelateEditFieldComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 2);
            i0.ɵɵtemplate(1, RelateEditFieldComponent_ng_container_1_Template, 8, 16, "ng-container", 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.initModule);
        } }, dependencies: [i8.NgIf, i9.DefaultValueAccessor, i9.NgControlStatus, i9.NgModel, i10.ButtonComponent, i11.PrimeTemplate, i12.ImageComponent, i13.Dropdown, i14.InputText], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RelateEditFieldComponent, [{
        type: Component,
        args: [{ selector: 'scrm-relate-edit', providers: [RelateService], template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div class=\"d-flex align-items-center\">\n    <ng-container *ngIf=\"initModule\">\n        <div class=\"flex-grow-1 w-100 mr-1\">\n            <p-dropdown\n                #tag\n                [options]=\"options\"\n                [(ngModel)]=\"selectedValue\"\n                [optionLabel]=\"getRelateFieldName()\"\n                (onChange)=\"onAdd($event.value)\"\n                (onLazyLoad)=\"onFilter()\"\n                (onShow)=\"focusFilterInput()\"\n                (onHide)=\"resetFunction(tag.options)\"\n                [emptyMessage]=\"emptyFilterLabel\"\n                [emptyFilterMessage]=\"emptyFilterLabel\"\n                [placeholder]=\"placeholderLabel\"\n                [autoOptionFocus]=\"false\"\n                [autofocusFilter]=\"false\"\n                [focusOnHover] = \"true\"\n                [filter]=\"true\"\n                [lazy]=\"true\"\n                [dataKey]=\"'id'\"\n                [filterBy]=\"getRelateFieldName()\"\n                [showClear]=\"true\"\n                (onClear)=\"onClear($event)\"\n                [styleClass]=\"'w-100 ' + getInvalidClass()\"\n            >\n                <ng-template pTemplate=\"dropdownicon\">\n                    <scrm-image image=\"down_carret\"></scrm-image>\n                </ng-template>\n                <ng-template pTemplate=\"filter\" let-options=\"options\">\n\n                    <div class=\"p-dropdown-filter-container\" (click)=\"$event.stopPropagation()\">\n                        <input #dropdownFilterInput\n                               type=\"text\"\n                               pInputText\n                               autocomplete=\"off\"\n                               class=\"p-dropdown-filter p-component\"\n                               [(ngModel)]=\"filterValue\"\n                               (keyup)=\"onFilterInput($event)\"\n                               tabindex=\"0\">\n                        <scrm-image image=\"search\" class=\"p-element p-dropdown-filter-search-icon\"></scrm-image>\n                    </div>\n\n                </ng-template>\n            </p-dropdown>\n        </div>\n        <div>\n            <scrm-button [config]=\"selectButton\">\n            </scrm-button>\n        </div>\n    </ng-container>\n</div>\n\n" }]
    }], () => [{ type: i1.LanguageStore }, { type: i2.DataTypeFormatter }, { type: i3.RelateService }, { type: i4.ModuleNameMapper }, { type: i5.NgbModal }, { type: i6.FieldLogicManager }, { type: i7.FieldLogicDisplayManager }], { tag: [{
            type: ViewChild,
            args: ['tag']
        }], dropdownFilterInput: [{
            type: ViewChild,
            args: ['dropdownFilterInput']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RelateEditFieldComponent, { className: "RelateEditFieldComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVsYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9maWVsZHMvcmVsYXRlL3RlbXBsYXRlcy9lZGl0L3JlbGF0ZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvZmllbGRzL3JlbGF0ZS90ZW1wbGF0ZXMvZWRpdC9yZWxhdGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMvRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFJbEUsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQ3BELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLCtFQUErRSxDQUFDO0FBQy9HLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDZEQUE2RCxDQUFDO0FBQzlGLE9BQU8sRUFDSCx3QkFBd0IsRUFDM0IsTUFBTSxtR0FBbUcsQ0FBQztBQUMzRyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDeEUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLG1EQUFtRCxDQUFDO0FBSWhGLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDBDQUEwQyxDQUFDO0FBQzNFLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLDBEQUEwRCxDQUFDO0FBQ2xHLE9BQU8sRUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDekMsT0FBTyxFQUFDLFFBQVEs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LFNBQVM7bUJBQUMsS0FBSztZQUNrQixtQkFBbUI7a0JBQXBELFNBQVM7bUJBQUMscUJBQXFCOztrRkFGdkIsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7ZW1wdHlPYmplY3R9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi91dGlscy9vYmplY3QtdXRpbHMnO1xuaW1wb3J0IHtCdXR0b25JbnRlcmZhY2V9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24ubW9kZWwnO1xuaW1wb3J0IHtGaWVsZH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3JlY29yZC9maWVsZC5tb2RlbCc7XG5pbXBvcnQge1JlY29yZCwgQXR0cmlidXRlTWFwfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vcmVjb3JkL3JlY29yZC5tb2RlbCc7XG5pbXBvcnQge05nYk1vZGFsfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQge01vZHVsZU5hbWVNYXBwZXJ9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL25hdmlnYXRpb24vbW9kdWxlLW5hbWUtbWFwcGVyL21vZHVsZS1uYW1lLW1hcHBlci5zZXJ2aWNlJztcbmltcG9ydCB7RGF0YVR5cGVGb3JtYXR0ZXJ9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL2Zvcm1hdHRlcnMvZGF0YS10eXBlLmZvcm1hdHRlci5zZXJ2aWNlJztcbmltcG9ydCB7XG4gICAgUmVjb3JkTGlzdE1vZGFsQ29tcG9uZW50XG59IGZyb20gJy4uLy4uLy4uLy4uL2NvbnRhaW5lcnMvcmVjb3JkLWxpc3QtbW9kYWwvY29tcG9uZW50cy9yZWNvcmQtbGlzdC1tb2RhbC9yZWNvcmQtbGlzdC1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHtCYXNlUmVsYXRlQ29tcG9uZW50fSBmcm9tICcuLi8uLi8uLi9iYXNlL2Jhc2UtcmVsYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7UmVsYXRlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvcmVjb3JkL3JlbGF0ZS9yZWxhdGUuc2VydmljZSc7XG5pbXBvcnQge1xuICAgIFJlY29yZExpc3RNb2RhbFJlc3VsdFxufSBmcm9tICcuLi8uLi8uLi8uLi9jb250YWluZXJzL3JlY29yZC1saXN0LW1vZGFsL2NvbXBvbmVudHMvcmVjb3JkLWxpc3QtbW9kYWwvcmVjb3JkLWxpc3QtbW9kYWwubW9kZWwnO1xuaW1wb3J0IHtGaWVsZExvZ2ljTWFuYWdlcn0gZnJvbSAnLi4vLi4vLi4vZmllbGQtbG9naWMvZmllbGQtbG9naWMubWFuYWdlcic7XG5pbXBvcnQge0ZpZWxkTG9naWNEaXNwbGF5TWFuYWdlcn0gZnJvbSAnLi4vLi4vLi4vZmllbGQtbG9naWMtZGlzcGxheS9maWVsZC1sb2dpYy1kaXNwbGF5Lm1hbmFnZXInO1xuaW1wb3J0IHttYXAsIHRha2V9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHtEcm9wZG93biwgRHJvcGRvd25GaWx0ZXJPcHRpb25zfSBmcm9tIFwicHJpbWVuZy9kcm9wZG93blwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tcmVsYXRlLWVkaXQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9yZWxhdGUuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW10sXG4gICAgcHJvdmlkZXJzOiBbUmVsYXRlU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgUmVsYXRlRWRpdEZpZWxkQ29tcG9uZW50IGV4dGVuZHMgQmFzZVJlbGF0ZUNvbXBvbmVudCB7XG4gICAgQFZpZXdDaGlsZCgndGFnJykgdGFnOiBEcm9wZG93bjtcbiAgICBAVmlld0NoaWxkKCdkcm9wZG93bkZpbHRlcklucHV0JykgZHJvcGRvd25GaWx0ZXJJbnB1dDogRWxlbWVudFJlZjtcbiAgICBzZWxlY3RCdXR0b246IEJ1dHRvbkludGVyZmFjZTtcbiAgICBpZEZpZWxkOiBGaWVsZDtcbiAgICBzZWxlY3RlZFZhbHVlOiBBdHRyaWJ1dGVNYXAgPSB7fTtcblxuICAgIHBsYWNlaG9sZGVyTGFiZWw6IHN0cmluZyA9ICcnO1xuICAgIGVtcHR5RmlsdGVyTGFiZWw6IHN0cmluZyA9ICcnO1xuICAgIGZpbHRlclZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAnJztcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbGFuZ3VhZ2VzIHNlcnZpY2VcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdHlwZUZvcm1hdHRlciBzZXJ2aWNlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlbGF0ZVNlcnZpY2Ugc2VydmljZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtb2R1bGVOYW1lTWFwcGVyIHNlcnZpY2VcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbW9kYWxTZXJ2aWNlIHNlcnZpY2VcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbG9naWNcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbG9naWNEaXNwbGF5XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBsYW5ndWFnZXM6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCB0eXBlRm9ybWF0dGVyOiBEYXRhVHlwZUZvcm1hdHRlcixcbiAgICAgICAgcHJvdGVjdGVkIHJlbGF0ZVNlcnZpY2U6IFJlbGF0ZVNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBtb2R1bGVOYW1lTWFwcGVyOiBNb2R1bGVOYW1lTWFwcGVyLFxuICAgICAgICBwcm90ZWN0ZWQgbW9kYWxTZXJ2aWNlOiBOZ2JNb2RhbCxcbiAgICAgICAgcHJvdGVjdGVkIGxvZ2ljOiBGaWVsZExvZ2ljTWFuYWdlcixcbiAgICAgICAgcHJvdGVjdGVkIGxvZ2ljRGlzcGxheTogRmllbGRMb2dpY0Rpc3BsYXlNYW5hZ2VyXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKGxhbmd1YWdlcywgdHlwZUZvcm1hdHRlciwgcmVsYXRlU2VydmljZSwgbW9kdWxlTmFtZU1hcHBlciwgbG9naWMsIGxvZ2ljRGlzcGxheSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT24gaW5pdCBoYW5kbGVyXG4gICAgICovXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICAgICAgc3VwZXIubmdPbkluaXQoKTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIHRoaXMuZ2V0VHJhbnNsYXRlZExhYmVscygpO1xuXG4gICAgICAgIHRoaXMuc2VsZWN0QnV0dG9uID0ge1xuICAgICAgICAgICAga2xhc3M6IFsnYnRuJywgJ2J0bi1zbScsICdidG4tb3V0bGluZS1zZWNvbmRhcnknLCAnbS0wJywgJ2JvcmRlci0wJ10sXG4gICAgICAgICAgICBvbkNsaWNrOiAoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93U2VsZWN0TW9kYWwoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpY29uOiAnY3Vyc29yJ1xuICAgICAgICB9IGFzIEJ1dHRvbkludGVyZmFjZTtcblxuICAgIH1cblxuICAgIHByb3RlY3RlZCBpbml0KCk6IHZvaWQge1xuXG4gICAgICAgIHN1cGVyLmluaXQoKTtcblxuICAgICAgICB0aGlzLmluaXRWYWx1ZSgpO1xuXG4gICAgICAgIGNvbnN0IGlkRmllbGROYW1lID0gdGhpcy5nZXRSZWxhdGVJZEZpZWxkKCk7XG4gICAgICAgIGlmIChpZEZpZWxkTmFtZSAmJiB0aGlzLnJlY29yZCAmJiB0aGlzLnJlY29yZC5maWVsZHMgJiYgdGhpcy5yZWNvcmQuZmllbGRzW2lkRmllbGROYW1lXSkge1xuICAgICAgICAgICAgdGhpcy5pZEZpZWxkID0gdGhpcy5yZWNvcmQuZmllbGRzW2lkRmllbGROYW1lXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBpbml0VmFsdWUoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5maWVsZC52YWx1ZU9iamVjdCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlID0ge307XG4gICAgICAgICAgICB0aGlzLmZpZWxkLmZvcm1Db250cm9sLnNldFZhbHVlKCcnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5maWVsZC52YWx1ZU9iamVjdC5pZCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlID0ge307XG4gICAgICAgICAgICB0aGlzLmZpZWxkLmZvcm1Db250cm9sLnNldFZhbHVlKCcnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmZpZWxkPy5tZXRhZGF0YT8ucmVsYXRlU2VhcmNoRmllbGQpIHtcbiAgICAgICAgICAgIGNvbnN0IHJuYW1lID0gdGhpcy5maWVsZD8uZGVmaW5pdGlvbj8ucm5hbWUgPz8gJ25hbWUnO1xuICAgICAgICAgICAgdGhpcy5maWVsZC52YWx1ZU9iamVjdFt0aGlzLmZpZWxkLm1ldGFkYXRhLnJlbGF0ZVNlYXJjaEZpZWxkXSA9IHRoaXMuZmllbGQudmFsdWVPYmplY3Rbcm5hbWVdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlID0gdGhpcy5maWVsZC52YWx1ZU9iamVjdDtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gW3RoaXMuZmllbGQudmFsdWVPYmplY3RdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBuZXdseSBhZGRlZCBpdGVtXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gaXRlbSBhZGRlZFxuICAgICAqL1xuICAgIG9uQWRkKGl0ZW0pOiB2b2lkIHtcbiAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIGNvbnN0IHJlbGF0ZU5hbWUgPSB0aGlzLmdldFJlbGF0ZUZpZWxkTmFtZSgpO1xuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZShpdGVtLmlkLCBpdGVtW3JlbGF0ZU5hbWVdKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0VmFsdWUoJycsICcnKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlID0ge307XG5cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBpdGVtIHJlbW92YWxcbiAgICAgKi9cbiAgICBvblJlbW92ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSgnJywgJycpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkVmFsdWUgPSB7fTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gW107XG4gICAgfVxuXG4gICAgb25DbGVhcihldmVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNlbGVjdGVkVmFsdWUgPSB7fTtcbiAgICAgICAgdGhpcy5maWx0ZXJWYWx1ZSA9ICcnO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBbXTtcbiAgICAgICAgdGhpcy5vblJlbW92ZSgpO1xuICAgIH1cblxuICAgIG9uRmlsdGVyKCk6IHZvaWQge1xuICAgICAgICBjb25zdCByZWxhdGVOYW1lID0gdGhpcy5nZXRSZWxhdGVGaWVsZE5hbWUoKTtcbiAgICAgICAgdGhpcy5maWx0ZXJWYWx1ZSA9IHRoaXMuZmlsdGVyVmFsdWUgPz8gJyc7XG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSB0aGlzLmZpbHRlclZhbHVlLm1hdGNoKC9eXFxzKiQvZyk7XG4gICAgICAgIGlmIChtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmZpbHRlclZhbHVlID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRlcm0gPSB0aGlzLmZpbHRlclZhbHVlO1xuICAgICAgICB0aGlzLnNlYXJjaCh0ZXJtKS5waXBlKFxuICAgICAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgICAgIG1hcChkYXRhID0+IGRhdGEuZmlsdGVyKGl0ZW0gPT4gaXRlbVtyZWxhdGVOYW1lXSAhPT0gJycpKSxcbiAgICAgICAgICAgIG1hcChmaWx0ZXJlZERhdGEgPT4gZmlsdGVyZWREYXRhLm1hcChpdGVtID0+ICh7XG4gICAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgICAgICAgICAgW3JlbGF0ZU5hbWVdOiBpdGVtW3JlbGF0ZU5hbWVdXG4gICAgICAgICAgICB9KSkpXG4gICAgICAgICkuc3Vic2NyaWJlKGZpbHRlcmVkT3B0aW9ucyA9PiB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBmaWx0ZXJlZE9wdGlvbnM7XG5cbiAgICAgICAgICAgIGlmICghdGhpcz8uc2VsZWN0ZWRWYWx1ZSB8fCAhdGhpcz8uc2VsZWN0ZWRWYWx1ZT8uaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgZmlsdGVyZWRPcHRpb25zLnNvbWUodmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZT8uaWQgPT09IHRoaXMuc2VsZWN0ZWRWYWx1ZS5pZCkge1xuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoZm91bmQgPT09IGZhbHNlICYmIHRoaXMuc2VsZWN0ZWRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5wdXNoKHRoaXMuc2VsZWN0ZWRWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVzZXRGdW5jdGlvbihvcHRpb25zOiBEcm9wZG93bkZpbHRlck9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5maWx0ZXJWYWx1ZSA9ICcnO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBbXTtcbiAgICAgICAgaWYgKCFlbXB0eU9iamVjdCh0aGlzLnNlbGVjdGVkVmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBbdGhpcy5zZWxlY3RlZFZhbHVlXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRmlsdGVySW5wdXQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgdGhpcy50YWcub25MYXp5TG9hZC5lbWl0KClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdmFsdWUgb24gZmllbGRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCB0byBzZXRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcmVsYXRlVmFsdWUgdG8gc2V0XG4gICAgICovXG4gICAgcHJvdGVjdGVkIHNldFZhbHVlKGlkOiBzdHJpbmcsIHJlbGF0ZVZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcmVsYXRlID0gdGhpcy5idWlsZFJlbGF0ZShpZCwgcmVsYXRlVmFsdWUpO1xuICAgICAgICB0aGlzLmZpZWxkLnZhbHVlID0gcmVsYXRlVmFsdWU7XG4gICAgICAgIHRoaXMuZmllbGQudmFsdWVPYmplY3QgPSByZWxhdGU7XG4gICAgICAgIHRoaXMuZmllbGQuZm9ybUNvbnRyb2wuc2V0VmFsdWUocmVsYXRlVmFsdWUpO1xuICAgICAgICB0aGlzLmZpZWxkLmZvcm1Db250cm9sLm1hcmtBc0RpcnR5KCk7XG5cbiAgICAgICAgaWYgKHRoaXMuaWRGaWVsZCkge1xuICAgICAgICAgICAgdGhpcy5pZEZpZWxkLnZhbHVlID0gaWQ7XG4gICAgICAgICAgICB0aGlzLmlkRmllbGQuZm9ybUNvbnRyb2wuc2V0VmFsdWUoaWQpO1xuICAgICAgICAgICAgdGhpcy5pZEZpZWxkLmZvcm1Db250cm9sLm1hcmtBc0RpcnR5KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVsYXRlVmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlbGF0ZU5hbWUgPSB0aGlzLmdldFJlbGF0ZUZpZWxkTmFtZSgpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlID0ge2lkOiBpZCwgW3JlbGF0ZU5hbWVdOiByZWxhdGVWYWx1ZX07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBbdGhpcy5zZWxlY3RlZFZhbHVlXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93IHJlY29yZCBzZWxlY3Rpb24gbW9kYWxcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgc2hvd1NlbGVjdE1vZGFsKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBtb2RhbCA9IHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oUmVjb3JkTGlzdE1vZGFsQ29tcG9uZW50LCB7c2l6ZTogJ3hsJywgc2Nyb2xsYWJsZTogdHJ1ZX0pO1xuXG4gICAgICAgIG1vZGFsLmNvbXBvbmVudEluc3RhbmNlLm1vZHVsZSA9IHRoaXMuZ2V0UmVsYXRlZE1vZHVsZSgpO1xuXG4gICAgICAgIG1vZGFsLnJlc3VsdC50aGVuKChkYXRhOiBSZWNvcmRMaXN0TW9kYWxSZXN1bHQpID0+IHtcblxuICAgICAgICAgICAgaWYgKCFkYXRhIHx8ICFkYXRhLnNlbGVjdGlvbiB8fCAhZGF0YS5zZWxlY3Rpb24uc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHJlY29yZCA9IHRoaXMuZ2V0U2VsZWN0ZWRSZWNvcmQoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLnNldEl0ZW0ocmVjb3JkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IFNlbGVjdGVkIFJlY29yZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgUmVjb3JkTGlzdE1vZGFsUmVzdWx0XG4gICAgICogQHJldHVybnMge29iamVjdH0gUmVjb3JkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldFNlbGVjdGVkUmVjb3JkKGRhdGE6IFJlY29yZExpc3RNb2RhbFJlc3VsdCk6IFJlY29yZCB7XG4gICAgICAgIGxldCBpZCA9ICcnO1xuICAgICAgICBPYmplY3Qua2V5cyhkYXRhLnNlbGVjdGlvbi5zZWxlY3RlZCkuc29tZShzZWxlY3RlZCA9PiB7XG4gICAgICAgICAgICBpZCA9IHNlbGVjdGVkO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCByZWNvcmQ6IFJlY29yZCA9IG51bGw7XG5cbiAgICAgICAgZGF0YS5yZWNvcmRzLnNvbWUocmVjID0+IHtcbiAgICAgICAgICAgIGlmIChyZWMgJiYgcmVjLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgIHJlY29yZCA9IHJlYztcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlY29yZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIHJlY29yZCBhcyB0aGUgc2VsZWN0ZWQgaXRlbVxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlY29yZCB0byBzZXRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgc2V0SXRlbShyZWNvcmQ6IFJlY29yZCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRhZy53cml0ZVZhbHVlKHJlY29yZC5hdHRyaWJ1dGVzKTtcbiAgICAgICAgdGhpcy5vbkFkZChyZWNvcmQuYXR0cmlidXRlcyk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFRyYW5zbGF0ZWRMYWJlbHMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGxhY2Vob2xkZXJMYWJlbCA9IHRoaXMubGFuZ3VhZ2VzLmdldEFwcFN0cmluZygnTEJMX1NFTEVDVF9JVEVNJykgfHwgJyc7XG4gICAgICAgIHRoaXMuZW1wdHlGaWx0ZXJMYWJlbCA9IHRoaXMubGFuZ3VhZ2VzLmdldEFwcFN0cmluZygnRVJSX1NFQVJDSF9OT19SRVNVTFRTJykgfHwgJyc7XG4gICAgfVxuXG4gICAgZm9jdXNGaWx0ZXJJbnB1dCgpIHtcbiAgICAgICAgdGhpcy5kcm9wZG93bkZpbHRlcklucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKVxuICAgIH1cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjxkaXYgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImluaXRNb2R1bGVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtZ3Jvdy0xIHctMTAwIG1yLTFcIj5cbiAgICAgICAgICAgIDxwLWRyb3Bkb3duXG4gICAgICAgICAgICAgICAgI3RhZ1xuICAgICAgICAgICAgICAgIFtvcHRpb25zXT1cIm9wdGlvbnNcIlxuICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwic2VsZWN0ZWRWYWx1ZVwiXG4gICAgICAgICAgICAgICAgW29wdGlvbkxhYmVsXT1cImdldFJlbGF0ZUZpZWxkTmFtZSgpXCJcbiAgICAgICAgICAgICAgICAob25DaGFuZ2UpPVwib25BZGQoJGV2ZW50LnZhbHVlKVwiXG4gICAgICAgICAgICAgICAgKG9uTGF6eUxvYWQpPVwib25GaWx0ZXIoKVwiXG4gICAgICAgICAgICAgICAgKG9uU2hvdyk9XCJmb2N1c0ZpbHRlcklucHV0KClcIlxuICAgICAgICAgICAgICAgIChvbkhpZGUpPVwicmVzZXRGdW5jdGlvbih0YWcub3B0aW9ucylcIlxuICAgICAgICAgICAgICAgIFtlbXB0eU1lc3NhZ2VdPVwiZW1wdHlGaWx0ZXJMYWJlbFwiXG4gICAgICAgICAgICAgICAgW2VtcHR5RmlsdGVyTWVzc2FnZV09XCJlbXB0eUZpbHRlckxhYmVsXCJcbiAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJMYWJlbFwiXG4gICAgICAgICAgICAgICAgW2F1dG9PcHRpb25Gb2N1c109XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgW2F1dG9mb2N1c0ZpbHRlcl09XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgW2ZvY3VzT25Ib3Zlcl0gPSBcInRydWVcIlxuICAgICAgICAgICAgICAgIFtmaWx0ZXJdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgW2xhenldPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgW2RhdGFLZXldPVwiJ2lkJ1wiXG4gICAgICAgICAgICAgICAgW2ZpbHRlckJ5XT1cImdldFJlbGF0ZUZpZWxkTmFtZSgpXCJcbiAgICAgICAgICAgICAgICBbc2hvd0NsZWFyXT1cInRydWVcIlxuICAgICAgICAgICAgICAgIChvbkNsZWFyKT1cIm9uQ2xlYXIoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgW3N0eWxlQ2xhc3NdPVwiJ3ctMTAwICcgKyBnZXRJbnZhbGlkQ2xhc3MoKVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIHBUZW1wbGF0ZT1cImRyb3Bkb3duaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICA8c2NybS1pbWFnZSBpbWFnZT1cImRvd25fY2FycmV0XCI+PC9zY3JtLWltYWdlPlxuICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIHBUZW1wbGF0ZT1cImZpbHRlclwiIGxldC1vcHRpb25zPVwib3B0aW9uc1wiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWRyb3Bkb3duLWZpbHRlci1jb250YWluZXJcIiAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgI2Ryb3Bkb3duRmlsdGVySW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcElucHV0VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwLWRyb3Bkb3duLWZpbHRlciBwLWNvbXBvbmVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWx0ZXJWYWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGtleXVwKT1cIm9uRmlsdGVySW5wdXQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiaW5kZXg9XCIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1pbWFnZSBpbWFnZT1cInNlYXJjaFwiIGNsYXNzPVwicC1lbGVtZW50IHAtZHJvcGRvd24tZmlsdGVyLXNlYXJjaC1pY29uXCI+PC9zY3JtLWltYWdlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3AtZHJvcGRvd24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHNjcm0tYnV0dG9uIFtjb25maWddPVwic2VsZWN0QnV0dG9uXCI+XG4gICAgICAgICAgICA8L3Njcm0tYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbjwvZGl2PlxuXG4iXX0=