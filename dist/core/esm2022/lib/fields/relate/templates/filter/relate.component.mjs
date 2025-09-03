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
import { deepClone } from '../../../../common/utils/object-utils';
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
import { MultiSelect } from "primeng/multiselect";
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
import * as i11 from "../../../../components/image/image.component";
import * as i12 from "primeng/multiselect";
import * as i13 from "primeng/api";
import * as i14 from "primeng/inputtext";
const _c0 = ["tag"];
const _c1 = ["dropdownFilterInput"];
function RelateFilterFieldComponent_ng_container_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-image", 10);
} }
function RelateFilterFieldComponent_ng_container_1_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-image", 11);
} }
function RelateFilterFieldComponent_ng_container_1_ng_template_6_scrm_image_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-image", 11);
} }
function RelateFilterFieldComponent_ng_container_1_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵlistener("click", function RelateFilterFieldComponent_ng_container_1_ng_template_6_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r3); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementStart(1, "div", 13);
    i0.ɵɵelement(2, "input", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 15);
    i0.ɵɵlistener("click", function RelateFilterFieldComponent_ng_container_1_ng_template_6_Template_div_click_3_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onSelectAll()); });
    i0.ɵɵtemplate(4, RelateFilterFieldComponent_ng_container_1_ng_template_6_scrm_image_4_Template, 1, 0, "scrm-image", 16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 17);
    i0.ɵɵlistener("click", function RelateFilterFieldComponent_ng_container_1_ng_template_6_Template_div_click_5_listener($event) { i0.ɵɵrestoreView(_r3); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementStart(6, "input", 18, 1);
    i0.ɵɵtwoWayListener("ngModelChange", function RelateFilterFieldComponent_ng_container_1_ng_template_6_Template_input_ngModelChange_6_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.filterValue, $event) || (ctx_r1.filterValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("keyup", function RelateFilterFieldComponent_ng_container_1_ng_template_6_Template_input_keyup_6_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onFilterInput($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span", 19);
    i0.ɵɵelement(9, "scrm-image", 20);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r1.selectAll);
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.filterValue);
} }
function RelateFilterFieldComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 4)(2, "p-multiSelect", 5, 0);
    i0.ɵɵtwoWayListener("ngModelChange", function RelateFilterFieldComponent_ng_container_1_Template_p_multiSelect_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.selectedValues, $event) || (ctx_r1.selectedValues = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("onChange", function RelateFilterFieldComponent_ng_container_1_Template_p_multiSelect_onChange_2_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onAdd()); })("onLazyLoad", function RelateFilterFieldComponent_ng_container_1_Template_p_multiSelect_onLazyLoad_2_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onFilter()); })("onRemove", function RelateFilterFieldComponent_ng_container_1_Template_p_multiSelect_onRemove_2_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onRemove()); })("onPanelShow", function RelateFilterFieldComponent_ng_container_1_Template_p_multiSelect_onPanelShow_2_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onPanelShow()); })("onPanelHide", function RelateFilterFieldComponent_ng_container_1_Template_p_multiSelect_onPanelHide_2_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.resetFunction()); })("onClear", function RelateFilterFieldComponent_ng_container_1_Template_p_multiSelect_onClear_2_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onClear()); });
    i0.ɵɵtemplate(4, RelateFilterFieldComponent_ng_container_1_ng_template_4_Template, 1, 0, "ng-template", 6)(5, RelateFilterFieldComponent_ng_container_1_ng_template_5_Template, 1, 0, "ng-template", 7)(6, RelateFilterFieldComponent_ng_container_1_ng_template_6_Template, 10, 2, "ng-template", 8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div");
    i0.ɵɵelement(8, "scrm-button", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("options", ctx_r1.options);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.selectedValues);
    i0.ɵɵproperty("optionLabel", ctx_r1.getRelateFieldName())("placeholder", ctx_r1.placeholderLabel)("selectedItemsLabel", "{0} " + ctx_r1.selectedItemsLabel)("emptyFilterMessage", ctx_r1.emptyFilterLabel)("emptyMessage", ctx_r1.emptyFilterLabel)("maxSelectedLabels", ctx_r1.maxSelectedLabels)("styleClass", "w-100 " + ctx_r1.getInvalidClass())("showToggleAll", true)("selectAll", ctx_r1.selectAll)("autoOptionFocus", false)("autofocusFilter", false)("focusOnHover", true)("showClear", true)("filter", true)("lazy", true)("dataKey", "id")("filterBy", ctx_r1.getRelateFieldName());
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("config", ctx_r1.selectButton);
} }
export class RelateFilterFieldComponent extends BaseRelateComponent {
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
        this.placeholderLabel = '';
        this.selectedItemsLabel = '';
        this.emptyFilterLabel = '';
        this.maxSelectedLabels = 20;
        this.selectAll = false;
        this.filterValue = '';
        this.selectButton = {
            klass: ['btn', 'btn-sm', 'btn-outline-secondary', 'm-0', 'border-0'],
            onClick: () => {
                this.showSelectModal();
            },
            icon: 'cursor'
        };
    }
    /**
     * On init handler
     */
    ngOnInit() {
        this.selectAll = false;
        const filter = this.record;
        this.field.valueList = [];
        this.field.valueObjectArray = [];
        let values = (this.field && this.field.criteria && this.field.criteria.values) || [];
        values = values.filter(value => !value);
        if (values.length > 0) {
            this.field.valueList = values;
        }
        let valueObjectArray = (this.field && this.field.criteria && this.field.criteria.valueObjectArray) || [];
        valueObjectArray = valueObjectArray.map(value => {
            const mapped = { ...value };
            mapped[this.getRelateFieldName()] = value[this.getRelateFieldName()] ?? value?.name ?? '';
            return mapped;
        });
        if (valueObjectArray.length > 0) {
            this.field.valueObjectArray = deepClone(valueObjectArray);
            this.selectedValues = deepClone(valueObjectArray);
        }
        super.ngOnInit();
        this.options = this.options ?? [];
        this.getTranslatedLabels();
        this.addCurrentlySelectedToOptions(this.options ?? []);
        const idFieldName = this.getRelateIdField();
        if (idFieldName && filter && filter.criteriaFields && filter.criteriaFields[idFieldName]) {
            this.idField = filter.criteriaFields[idFieldName];
            this.idField.valueList = [];
            let idValues = (this.idField && this.idField.criteria && this.idField.criteria.values) || [];
            idValues = idValues.filter(value => !!value);
            if (idValues.length > 0) {
                this.idField.valueList = deepClone(idValues);
            }
        }
    }
    /**
     * Handle newly added item
     */
    onAdd() {
        this.updateFieldValues();
        this.calculateSelectAll();
    }
    /**
     * Handle item removal
     */
    onRemove() {
        this.updateFieldValues();
        this.calculateSelectAll();
    }
    onClear() {
        this.options = [];
        this.selectedValues = [];
        this.selectAll = false;
        this.filterValue = '';
        this.onRemove();
    }
    onSelectAll() {
        this.selectAll = !this.selectAll;
        if (this.selectAll) {
            if (this.tag.visibleOptions() && this.tag.visibleOptions().length) {
                this.selectedValues = this.tag.visibleOptions();
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
    getTranslatedLabels() {
        this.placeholderLabel = this.languages.getAppString('LBL_SELECT_ITEM') || '';
        this.selectedItemsLabel = this.languages.getAppString('LBL_ITEMS_SELECTED') || '';
        this.emptyFilterLabel = this.languages.getAppString('ERR_SEARCH_NO_RESULTS') || '';
    }
    onPanelShow() {
        this.dropdownFilterInput.nativeElement.focus();
        this.calculateSelectAll();
    }
    resetFunction() {
        this.filterValue = '';
        this.options = this.selectedValues;
    }
    onFilterInput(event) {
        event?.stopPropagation();
        this.selectAll = false;
        this.tag.onLazyLoad.emit();
    }
    onFilter() {
        const relateName = this.getRelateFieldName();
        this.filterValue = this.filterValue ?? '';
        const matches = this.filterValue.match(/^\s*$/g);
        if (matches && matches.length) {
            this.filterValue = '';
        }
        let term = this.filterValue;
        this.search(term).pipe(take(1), map(data => data.filter((item) => item[relateName] !== '')), map(filteredData => filteredData.map((item) => ({
            id: item.id,
            [relateName]: item[relateName]
        })))).subscribe(filteredOptions => {
            this.options = filteredOptions;
            this.addCurrentlySelectedToOptions(filteredOptions);
            this.calculateSelectAll();
        });
    }
    updateFieldValues() {
        let value = this?.selectedValues?.map(option => option[this.getRelateFieldName()]) ?? null;
        if (!value) {
            value = [];
        }
        this.field.valueList = value;
        this.field.valueObjectArray = deepClone(this.selectedValues ?? []);
        this.updateSearchCriteria(this.field);
        this.field.criteria.valueObjectArray = deepClone(this.field.valueObjectArray);
        this.updateIdField();
    }
    updateIdField() {
        if (!this.idField) {
            return;
        }
        this.idField.valueList = this?.selectedValues?.map(option => option.id) ?? [];
        this.updateSearchCriteria(this.idField);
    }
    /**
     * Set value on field
     *
     * @param item
     */
    setValue(item) {
        const relateName = this.getRelateFieldName();
        const id = item?.id ?? '';
        const relateValue = item[relateName];
        if (this.idField && this.idField.valueList.includes(id)) {
            return;
        }
        if (!this.idField && this.field.valueList.includes(relateValue)) {
            return;
        }
        const valueObject = {};
        valueObject.id = id;
        valueObject[relateName] = relateValue;
        this.field.valueObjectArray.push(valueObject);
        this.field.valueList.push(relateValue);
        if (this.idField) {
            this.idField.valueList.push(id);
            this.updateSearchCriteria(this.idField);
        }
        this.updateSearchCriteria(this.field);
        if (!this.field.criteria.valueObjectArray) {
            this.field.criteria.valueObjectArray = [];
        }
        this.field.criteria.valueObjectArray.push(valueObject);
    }
    /**
     * Set value on field criteria and form
     */
    updateSearchCriteria(field) {
        field.criteria.operator = '=';
        field.criteria.values = field.valueList;
        field.formControl.setValue(field.valueList);
        field.formControl.markAsDirty();
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
            const found = this.field.valueObjectArray.find(element => element.id === record.id);
            if (found) {
                return;
            }
            this.setItem(record);
            this.tag.updateModel(this.selectedValues);
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
        const relateName = this.getRelateFieldName();
        const newItem = {
            id: record?.attributes?.id,
            [relateName]: record?.attributes[relateName]
        };
        const inList = this.isInList(this.selectedValues, newItem);
        if (inList) {
            return;
        }
        this.selectedValues.push(newItem);
        this.addCurrentlySelectedToOptions(this.options);
        this.onAdd();
    }
    addCurrentlySelectedToOptions(filteredOptions) {
        if (!this?.selectedValues || !this?.selectedValues.length) {
            return;
        }
        this.selectedValues.forEach(selectedValue => {
            let found = this.isInList(filteredOptions, selectedValue);
            if (found === false && selectedValue) {
                this.options.push(selectedValue);
            }
        });
    }
    isInList(filteredOptions, selectedValue) {
        let found = false;
        filteredOptions.some((value) => {
            if (value?.id === selectedValue?.id) {
                found = true;
                return true;
            }
            return false;
        });
        return found;
    }
    calculateSelectAll() {
        const visibleOptions = this?.tag?.visibleOptions() ?? [];
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
    static { this.ɵfac = function RelateFilterFieldComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RelateFilterFieldComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore), i0.ɵɵdirectiveInject(i2.DataTypeFormatter), i0.ɵɵdirectiveInject(i3.RelateService), i0.ɵɵdirectiveInject(i4.ModuleNameMapper), i0.ɵɵdirectiveInject(i5.NgbModal), i0.ɵɵdirectiveInject(i6.FieldLogicManager), i0.ɵɵdirectiveInject(i7.FieldLogicDisplayManager)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RelateFilterFieldComponent, selectors: [["scrm-relate-filter"]], viewQuery: function RelateFilterFieldComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tag = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dropdownFilterInput = _t.first);
        } }, features: [i0.ɵɵProvidersFeature([RelateService]), i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 1, consts: [["tag", ""], ["dropdownFilterInput", ""], [1, "d-flex", "align-items-center"], [4, "ngIf"], [1, "flex-grow-1", "w-100", "mr-1"], [3, "ngModelChange", "onChange", "onLazyLoad", "onRemove", "onPanelShow", "onPanelHide", "onClear", "options", "ngModel", "optionLabel", "placeholder", "selectedItemsLabel", "emptyFilterMessage", "emptyMessage", "maxSelectedLabels", "styleClass", "showToggleAll", "selectAll", "autoOptionFocus", "autofocusFilter", "focusOnHover", "showClear", "filter", "lazy", "dataKey", "filterBy"], ["pTemplate", "dropdownicon"], ["pTemplate", "checkicon"], ["pTemplate", "filter"], [3, "config"], ["image", "down_carret"], ["image", "checkbox_cross"], [1, "p-checkbox", "p-component", 3, "click"], ["data-p-hidden-accessible", "true", 1, "p-hidden-accessible"], ["type", "checkbox", "checked", "false", "aria-label", "All items unselected"], ["role", "checkbox", "aria-checked", "false", 1, "p-checkbox-box", 3, "click"], ["image", "checkbox_cross", 4, "ngIf"], [1, "p-multiselect-filter-container", 3, "click"], ["type", "text", "pInputText", "", "autocomplete", "off", "tabindex", "0", 1, "p-multiselect-filter", "p-inputtext", "p-component", 3, "ngModelChange", "keyup", "ngModel"], [1, "p-multiselect-filter-icon"], ["image", "search", 1, "p-element", "p-dropdown-filter-search-icon"]], template: function RelateFilterFieldComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 2);
            i0.ɵɵtemplate(1, RelateFilterFieldComponent_ng_container_1_Template, 9, 20, "ng-container", 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.initModule);
        } }, dependencies: [i8.NgIf, i9.DefaultValueAccessor, i9.NgControlStatus, i9.NgModel, i10.ButtonComponent, i11.ImageComponent, i12.MultiSelect, i13.PrimeTemplate, i14.InputText], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RelateFilterFieldComponent, [{
        type: Component,
        args: [{ selector: 'scrm-relate-filter', providers: [RelateService], template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div class=\"d-flex align-items-center\">\n    <ng-container *ngIf=\"initModule\">\n        <div class=\"flex-grow-1 w-100 mr-1\">\n            <p-multiSelect\n                #tag\n                [options]=\"this.options\"\n                [(ngModel)]=\"selectedValues\"\n                [optionLabel]=\"getRelateFieldName()\"\n                (onChange)=\"onAdd()\"\n                (onLazyLoad)=\"onFilter()\"\n                (onRemove)=\"onRemove()\"\n                (onPanelShow)=\"onPanelShow()\"\n                (onPanelHide)=\"resetFunction()\"\n                [placeholder]=\"placeholderLabel\"\n                [selectedItemsLabel]=\"'{0} ' + selectedItemsLabel\"\n                [emptyFilterMessage]=\"emptyFilterLabel\"\n                [emptyMessage]=\"emptyFilterLabel\"\n                [maxSelectedLabels]=\"maxSelectedLabels\"\n                [styleClass]=\"'w-100 ' + getInvalidClass()\"\n                [showToggleAll]=\"true\"\n                [selectAll]=\"selectAll\"\n                [autoOptionFocus]=\"false\"\n                [autofocusFilter]=\"false\"\n                [focusOnHover]=\"true\"\n                [showClear]=\"true\"\n                (onClear)=\"onClear()\"\n                [filter]=\"true\"\n                [lazy]=\"true\"\n                [dataKey]=\"'id'\"\n                [filterBy]=\"getRelateFieldName()\"\n            >\n                <ng-template pTemplate=\"dropdownicon\">\n                    <scrm-image image=\"down_carret\"></scrm-image>\n                </ng-template>\n                <ng-template pTemplate=\"checkicon\">\n                    <scrm-image image=\"checkbox_cross\"></scrm-image>\n                </ng-template>\n\n                <ng-template pTemplate=\"filter\" let-options=\"options\">\n\n                    <div class=\"p-checkbox p-component\" (click)=\"$event.stopPropagation()\">\n                        <div class=\"p-hidden-accessible\" data-p-hidden-accessible=\"true\">\n                            <input type=\"checkbox\" checked=\"false\" aria-label=\"All items unselected\">\n                        </div>\n                        <div role=\"checkbox\" class=\"p-checkbox-box\" aria-checked=\"false\" (click)=\"onSelectAll()\">\n                            <scrm-image image=\"checkbox_cross\" *ngIf=\"selectAll\"></scrm-image>\n                        </div>\n                    </div>\n                    <div class=\"p-multiselect-filter-container\" (click)=\"$event.stopPropagation()\">\n                        <input #dropdownFilterInput\n                               type=\"text\"\n                               pInputText\n                               autocomplete=\"off\"\n                               class=\"p-multiselect-filter p-inputtext p-component\"\n                               [(ngModel)]=\"filterValue\"\n                               (keyup)=\"onFilterInput($event);\"\n                               tabindex=\"0\">\n                        <span class=\"p-multiselect-filter-icon\">\n                            <scrm-image image=\"search\" class=\"p-element p-dropdown-filter-search-icon\"></scrm-image>\n                        </span>\n                    </div>\n\n                </ng-template>\n\n\n\n            </p-multiSelect>\n        </div>\n        <div>\n            <scrm-button [config]=\"selectButton\">\n            </scrm-button>\n        </div>\n    </ng-container>\n</div>\n\n\n\n" }]
    }], () => [{ type: i1.LanguageStore }, { type: i2.DataTypeFormatter }, { type: i3.RelateService }, { type: i4.ModuleNameMapper }, { type: i5.NgbModal }, { type: i6.FieldLogicManager }, { type: i7.FieldLogicDisplayManager }], { tag: [{
            type: ViewChild,
            args: ['tag']
        }], dropdownFilterInput: [{
            type: ViewChild,
            args: ['dropdownFilterInput']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RelateFilterFieldComponent, { className: "RelateFilterFieldComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVsYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9maWVsZHMvcmVsYXRlL3RlbXBsYXRlcy9maWx0ZXIvcmVsYXRlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9maWVsZHMvcmVsYXRlL3RlbXBsYXRlcy9maWx0ZXIvcmVsYXRlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFL0QsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBS2hFLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSwrRUFBK0UsQ0FBQztBQUMvRyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw2REFBNkQsQ0FBQztBQUM5RixPQUFPLEVBQ0gsd0JBQXdCLEVBQzNCLE1BQU0sbUdBQW1HLENBQUM7QUFDM0csT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDeEUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ3hFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxtREFBbUQsQ0FBQztBQUloRixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSwwQ0FBMEMsQ0FBQztBQUUzRSxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSwwREFBMEQsQ0FBQztBQUNsRyxPQUFPLEVBQUMsR0FBRyxFQUFFLElBQUksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3pDLE9BQU8sRUFBQyxX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QUFFLENBQUM7WUFDcEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsT0FBTztRQUNYLENBQUM7UUFFRCxJQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDM0YsQ0FBQzsySEFwWFEsMEJBQTBCO29FQUExQiwwQkFBMEI7Ozs7Ozs7OENBRnhCLENBQUMsYUFBYSxDQUFDO1lDNUI5Qiw4QkFBdUM7WUFDbkMsOEZBQWlDO1lBd0VyQyxpQkFBTTs7WUF4RWEsY0FBZ0I7WUFBaEIscUNBQWdCOzs7aUZENkJ0QiwwQkFBMEI7Y0FOdEMsU0FBUzsyQkFDSSxvQkFBb0IsYUFHbkIsQ0FBQyxhQUFhLENBQUM7dU9BR1IsR0FBRztrQkFBcEIsU0FBUzttQkFBQyxLQUFLO1lBQ2tCLG1CQUFtQjtrQkFBcEQsU0FBUzttQkFBQyxxQkFBcUI7O2tGQUZ2QiwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBdHRyaWJ1dGVNYXB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9yZWNvcmQvcmVjb3JkLm1vZGVsJztcbmltcG9ydCB7ZGVlcENsb25lfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vdXRpbHMvb2JqZWN0LXV0aWxzJztcbmltcG9ydCB7T2JqZWN0TWFwfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vdHlwZXMvb2JqZWN0LW1hcCc7XG5pbXBvcnQge0ZpZWxkfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vcmVjb3JkL2ZpZWxkLm1vZGVsJztcbmltcG9ydCB7UmVjb3JkfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vcmVjb3JkL3JlY29yZC5tb2RlbCc7XG5pbXBvcnQge0J1dHRvbkludGVyZmFjZX0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5tb2RlbCc7XG5pbXBvcnQge05nYk1vZGFsfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQge01vZHVsZU5hbWVNYXBwZXJ9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL25hdmlnYXRpb24vbW9kdWxlLW5hbWUtbWFwcGVyL21vZHVsZS1uYW1lLW1hcHBlci5zZXJ2aWNlJztcbmltcG9ydCB7RGF0YVR5cGVGb3JtYXR0ZXJ9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL2Zvcm1hdHRlcnMvZGF0YS10eXBlLmZvcm1hdHRlci5zZXJ2aWNlJztcbmltcG9ydCB7XG4gICAgUmVjb3JkTGlzdE1vZGFsQ29tcG9uZW50XG59IGZyb20gJy4uLy4uLy4uLy4uL2NvbnRhaW5lcnMvcmVjb3JkLWxpc3QtbW9kYWwvY29tcG9uZW50cy9yZWNvcmQtbGlzdC1tb2RhbC9yZWNvcmQtbGlzdC1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHtCYXNlUmVsYXRlQ29tcG9uZW50fSBmcm9tICcuLi8uLi8uLi9iYXNlL2Jhc2UtcmVsYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7UmVsYXRlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvcmVjb3JkL3JlbGF0ZS9yZWxhdGUuc2VydmljZSc7XG5pbXBvcnQge1xuICAgIFJlY29yZExpc3RNb2RhbFJlc3VsdFxufSBmcm9tICcuLi8uLi8uLi8uLi9jb250YWluZXJzL3JlY29yZC1saXN0LW1vZGFsL2NvbXBvbmVudHMvcmVjb3JkLWxpc3QtbW9kYWwvcmVjb3JkLWxpc3QtbW9kYWwubW9kZWwnO1xuaW1wb3J0IHtGaWVsZExvZ2ljTWFuYWdlcn0gZnJvbSAnLi4vLi4vLi4vZmllbGQtbG9naWMvZmllbGQtbG9naWMubWFuYWdlcic7XG5pbXBvcnQge1NhdmVkRmlsdGVyfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9zYXZlZC1maWx0ZXJzL3NhdmVkLWZpbHRlci5tb2RlbCc7XG5pbXBvcnQge0ZpZWxkTG9naWNEaXNwbGF5TWFuYWdlcn0gZnJvbSAnLi4vLi4vLi4vZmllbGQtbG9naWMtZGlzcGxheS9maWVsZC1sb2dpYy1kaXNwbGF5Lm1hbmFnZXInO1xuaW1wb3J0IHttYXAsIHRha2V9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHtNdWx0aVNlbGVjdH0gZnJvbSBcInByaW1lbmcvbXVsdGlzZWxlY3RcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLXJlbGF0ZS1maWx0ZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9yZWxhdGUuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW10sXG4gICAgcHJvdmlkZXJzOiBbUmVsYXRlU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgUmVsYXRlRmlsdGVyRmllbGRDb21wb25lbnQgZXh0ZW5kcyBCYXNlUmVsYXRlQ29tcG9uZW50IHtcbiAgICBAVmlld0NoaWxkKCd0YWcnKSB0YWc6IE11bHRpU2VsZWN0O1xuICAgIEBWaWV3Q2hpbGQoJ2Ryb3Bkb3duRmlsdGVySW5wdXQnKSBkcm9wZG93bkZpbHRlcklucHV0OiBFbGVtZW50UmVmO1xuICAgIHNlbGVjdEJ1dHRvbjogQnV0dG9uSW50ZXJmYWNlO1xuICAgIGlkRmllbGQ6IEZpZWxkO1xuXG4gICAgcGxhY2Vob2xkZXJMYWJlbDogc3RyaW5nID0gJyc7XG4gICAgc2VsZWN0ZWRJdGVtc0xhYmVsOiBzdHJpbmcgPSAnJztcbiAgICBlbXB0eUZpbHRlckxhYmVsOiBzdHJpbmcgPSAnJztcbiAgICBtYXhTZWxlY3RlZExhYmVsczogbnVtYmVyID0gMjA7XG4gICAgc2VsZWN0QWxsOiBib29sZWFuID0gZmFsc2U7XG4gICAgZmlsdGVyVmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICcnO1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3JcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBsYW5ndWFnZXMgc2VydmljZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0eXBlRm9ybWF0dGVyIHNlcnZpY2VcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVsYXRlU2VydmljZSBzZXJ2aWNlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG1vZHVsZU5hbWVNYXBwZXIgc2VydmljZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtb2RhbFNlcnZpY2Ugc2VydmljZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBsb2dpY1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBsb2dpY0Rpc3BsYXlcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGxhbmd1YWdlczogTGFuZ3VhZ2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIHR5cGVGb3JtYXR0ZXI6IERhdGFUeXBlRm9ybWF0dGVyLFxuICAgICAgICBwcm90ZWN0ZWQgcmVsYXRlU2VydmljZTogUmVsYXRlU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIG1vZHVsZU5hbWVNYXBwZXI6IE1vZHVsZU5hbWVNYXBwZXIsXG4gICAgICAgIHByb3RlY3RlZCBtb2RhbFNlcnZpY2U6IE5nYk1vZGFsLFxuICAgICAgICBwcm90ZWN0ZWQgbG9naWM6IEZpZWxkTG9naWNNYW5hZ2VyLFxuICAgICAgICBwcm90ZWN0ZWQgbG9naWNEaXNwbGF5OiBGaWVsZExvZ2ljRGlzcGxheU1hbmFnZXJcbiAgICApIHtcbiAgICAgICAgc3VwZXIobGFuZ3VhZ2VzLCB0eXBlRm9ybWF0dGVyLCByZWxhdGVTZXJ2aWNlLCBtb2R1bGVOYW1lTWFwcGVyLCBsb2dpYywgbG9naWNEaXNwbGF5KTtcblxuICAgICAgICB0aGlzLnNlbGVjdEJ1dHRvbiA9IHtcbiAgICAgICAgICAgIGtsYXNzOiBbJ2J0bicsICdidG4tc20nLCAnYnRuLW91dGxpbmUtc2Vjb25kYXJ5JywgJ20tMCcsICdib3JkZXItMCddLFxuICAgICAgICAgICAgb25DbGljazogKCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1NlbGVjdE1vZGFsKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaWNvbjogJ2N1cnNvcidcbiAgICAgICAgfSBhcyBCdXR0b25JbnRlcmZhY2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT24gaW5pdCBoYW5kbGVyXG4gICAgICovXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2VsZWN0QWxsID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGZpbHRlciA9IHRoaXMucmVjb3JkIGFzIFNhdmVkRmlsdGVyO1xuXG4gICAgICAgIHRoaXMuZmllbGQudmFsdWVMaXN0ID0gW107XG5cbiAgICAgICAgdGhpcy5maWVsZC52YWx1ZU9iamVjdEFycmF5ID0gW107XG5cbiAgICAgICAgbGV0IHZhbHVlcyA9ICh0aGlzLmZpZWxkICYmIHRoaXMuZmllbGQuY3JpdGVyaWEgJiYgdGhpcy5maWVsZC5jcml0ZXJpYS52YWx1ZXMpIHx8IFtdO1xuICAgICAgICB2YWx1ZXMgPSB2YWx1ZXMuZmlsdGVyKHZhbHVlID0+ICF2YWx1ZSk7XG5cbiAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmZpZWxkLnZhbHVlTGlzdCA9IHZhbHVlcztcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB2YWx1ZU9iamVjdEFycmF5ID0gKHRoaXMuZmllbGQgJiYgdGhpcy5maWVsZC5jcml0ZXJpYSAmJiB0aGlzLmZpZWxkLmNyaXRlcmlhLnZhbHVlT2JqZWN0QXJyYXkpIHx8IFtdO1xuICAgICAgICB2YWx1ZU9iamVjdEFycmF5ID0gdmFsdWVPYmplY3RBcnJheS5tYXAodmFsdWUgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWFwcGVkID0gey4uLnZhbHVlfVxuICAgICAgICAgICAgbWFwcGVkW3RoaXMuZ2V0UmVsYXRlRmllbGROYW1lKCldID0gdmFsdWVbdGhpcy5nZXRSZWxhdGVGaWVsZE5hbWUoKV0gPz8gdmFsdWU/Lm5hbWUgPz8gJyc7XG4gICAgICAgICAgICByZXR1cm4gbWFwcGVkO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodmFsdWVPYmplY3RBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmZpZWxkLnZhbHVlT2JqZWN0QXJyYXkgPSBkZWVwQ2xvbmUodmFsdWVPYmplY3RBcnJheSk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkVmFsdWVzID0gZGVlcENsb25lKHZhbHVlT2JqZWN0QXJyYXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIubmdPbkluaXQoKTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnMgPz8gW107XG5cbiAgICAgICAgdGhpcy5nZXRUcmFuc2xhdGVkTGFiZWxzKCk7XG5cbiAgICAgICAgdGhpcy5hZGRDdXJyZW50bHlTZWxlY3RlZFRvT3B0aW9ucyh0aGlzLm9wdGlvbnMgPz8gW10pO1xuXG4gICAgICAgIGNvbnN0IGlkRmllbGROYW1lID0gdGhpcy5nZXRSZWxhdGVJZEZpZWxkKCk7XG5cbiAgICAgICAgaWYgKGlkRmllbGROYW1lICYmIGZpbHRlciAmJiBmaWx0ZXIuY3JpdGVyaWFGaWVsZHMgJiYgZmlsdGVyLmNyaXRlcmlhRmllbGRzW2lkRmllbGROYW1lXSkge1xuICAgICAgICAgICAgdGhpcy5pZEZpZWxkID0gZmlsdGVyLmNyaXRlcmlhRmllbGRzW2lkRmllbGROYW1lXTtcbiAgICAgICAgICAgIHRoaXMuaWRGaWVsZC52YWx1ZUxpc3QgPSBbXTtcbiAgICAgICAgICAgIGxldCBpZFZhbHVlcyA9ICh0aGlzLmlkRmllbGQgJiYgdGhpcy5pZEZpZWxkLmNyaXRlcmlhICYmIHRoaXMuaWRGaWVsZC5jcml0ZXJpYS52YWx1ZXMpIHx8IFtdO1xuICAgICAgICAgICAgaWRWYWx1ZXMgPSBpZFZhbHVlcy5maWx0ZXIodmFsdWUgPT4gISF2YWx1ZSk7XG5cbiAgICAgICAgICAgIGlmIChpZFZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pZEZpZWxkLnZhbHVlTGlzdCA9IGRlZXBDbG9uZShpZFZhbHVlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgbmV3bHkgYWRkZWQgaXRlbVxuICAgICAqL1xuICAgIG9uQWRkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkVmFsdWVzKCk7XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlU2VsZWN0QWxsKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIGl0ZW0gcmVtb3ZhbFxuICAgICAqL1xuICAgIG9uUmVtb3ZlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkVmFsdWVzKCk7XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlU2VsZWN0QWxsKCk7XG4gICAgfVxuXG4gICAgb25DbGVhcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gW107XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZXMgPSBbXTtcbiAgICAgICAgdGhpcy5zZWxlY3RBbGwgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5maWx0ZXJWYWx1ZSA9ICcnO1xuICAgICAgICB0aGlzLm9uUmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgb25TZWxlY3RBbGwoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2VsZWN0QWxsID0gIXRoaXMuc2VsZWN0QWxsO1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RBbGwpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRhZy52aXNpYmxlT3B0aW9ucygpICYmIHRoaXMudGFnLnZpc2libGVPcHRpb25zKCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlcyA9IHRoaXMudGFnLnZpc2libGVPcHRpb25zKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZXMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm9uQWRkKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkVmFsdWVzID0gW107XG4gICAgICAgICAgICB0aGlzLm9uUmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRUcmFuc2xhdGVkTGFiZWxzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnBsYWNlaG9sZGVyTGFiZWwgPSB0aGlzLmxhbmd1YWdlcy5nZXRBcHBTdHJpbmcoJ0xCTF9TRUxFQ1RfSVRFTScpIHx8ICcnO1xuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXNMYWJlbCA9IHRoaXMubGFuZ3VhZ2VzLmdldEFwcFN0cmluZygnTEJMX0lURU1TX1NFTEVDVEVEJykgfHwgJyc7XG4gICAgICAgIHRoaXMuZW1wdHlGaWx0ZXJMYWJlbCA9IHRoaXMubGFuZ3VhZ2VzLmdldEFwcFN0cmluZygnRVJSX1NFQVJDSF9OT19SRVNVTFRTJykgfHwgJyc7XG5cbiAgICB9XG5cbiAgICBvblBhbmVsU2hvdygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kcm9wZG93bkZpbHRlcklucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKVxuICAgICAgICB0aGlzLmNhbGN1bGF0ZVNlbGVjdEFsbCgpO1xuICAgIH1cblxuICAgIHJlc2V0RnVuY3Rpb24oKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZmlsdGVyVmFsdWUgPSAnJztcbiAgICAgICAgdGhpcy5vcHRpb25zID0gdGhpcy5zZWxlY3RlZFZhbHVlcztcbiAgICB9XG5cbiAgICBvbkZpbHRlcklucHV0KGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgICAgIGV2ZW50Py5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5zZWxlY3RBbGwgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50YWcub25MYXp5TG9hZC5lbWl0KClcbiAgICB9XG5cbiAgICBvbkZpbHRlcigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcmVsYXRlTmFtZSA9IHRoaXMuZ2V0UmVsYXRlRmllbGROYW1lKCk7XG4gICAgICAgIHRoaXMuZmlsdGVyVmFsdWUgPSB0aGlzLmZpbHRlclZhbHVlID8/ICcnO1xuICAgICAgICBjb25zdCBtYXRjaGVzID0gdGhpcy5maWx0ZXJWYWx1ZS5tYXRjaCgvXlxccyokL2cpO1xuICAgICAgICBpZiAobWF0Y2hlcyAmJiBtYXRjaGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5maWx0ZXJWYWx1ZSA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGxldCB0ZXJtID0gdGhpcy5maWx0ZXJWYWx1ZTtcbiAgICAgICAgdGhpcy5zZWFyY2godGVybSkucGlwZShcbiAgICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICAgICBtYXAoZGF0YSA9PiBkYXRhLmZpbHRlcigoaXRlbTogT2JqZWN0TWFwKSA9PiBpdGVtW3JlbGF0ZU5hbWVdICE9PSAnJykpLFxuICAgICAgICAgICAgbWFwKGZpbHRlcmVkRGF0YSA9PiBmaWx0ZXJlZERhdGEubWFwKChpdGVtOiBPYmplY3RNYXApID0+ICh7XG4gICAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgICAgICAgICAgW3JlbGF0ZU5hbWVdOiBpdGVtW3JlbGF0ZU5hbWVdXG4gICAgICAgICAgICB9KSkpXG4gICAgICAgICkuc3Vic2NyaWJlKGZpbHRlcmVkT3B0aW9ucyA9PiB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBmaWx0ZXJlZE9wdGlvbnM7XG4gICAgICAgICAgICB0aGlzLmFkZEN1cnJlbnRseVNlbGVjdGVkVG9PcHRpb25zKGZpbHRlcmVkT3B0aW9ucyk7XG4gICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZVNlbGVjdEFsbCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlRmllbGRWYWx1ZXMoKTogdm9pZCB7XG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXM/LnNlbGVjdGVkVmFsdWVzPy5tYXAob3B0aW9uID0+IG9wdGlvblt0aGlzLmdldFJlbGF0ZUZpZWxkTmFtZSgpXSkgPz8gbnVsbDtcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgdmFsdWUgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZpZWxkLnZhbHVlTGlzdCA9IHZhbHVlO1xuXG4gICAgICAgIHRoaXMuZmllbGQudmFsdWVPYmplY3RBcnJheSA9IGRlZXBDbG9uZSh0aGlzLnNlbGVjdGVkVmFsdWVzID8/IFtdKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZVNlYXJjaENyaXRlcmlhKHRoaXMuZmllbGQpO1xuXG4gICAgICAgIHRoaXMuZmllbGQuY3JpdGVyaWEudmFsdWVPYmplY3RBcnJheSA9IGRlZXBDbG9uZSh0aGlzLmZpZWxkLnZhbHVlT2JqZWN0QXJyYXkpO1xuICAgICAgICB0aGlzLnVwZGF0ZUlkRmllbGQoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlSWRGaWVsZCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmlkRmllbGQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlkRmllbGQudmFsdWVMaXN0ID0gdGhpcz8uc2VsZWN0ZWRWYWx1ZXM/Lm1hcChvcHRpb24gPT4gb3B0aW9uLmlkKSA/PyBbXTtcbiAgICAgICAgdGhpcy51cGRhdGVTZWFyY2hDcml0ZXJpYSh0aGlzLmlkRmllbGQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB2YWx1ZSBvbiBmaWVsZFxuICAgICAqXG4gICAgICogQHBhcmFtIGl0ZW1cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgc2V0VmFsdWUoaXRlbTogYW55KTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgcmVsYXRlTmFtZSA9IHRoaXMuZ2V0UmVsYXRlRmllbGROYW1lKCk7XG4gICAgICAgIGNvbnN0IGlkID0gaXRlbT8uaWQgPz8gJyc7XG4gICAgICAgIGNvbnN0IHJlbGF0ZVZhbHVlID0gaXRlbVtyZWxhdGVOYW1lXTtcblxuICAgICAgICBpZiAodGhpcy5pZEZpZWxkICYmIHRoaXMuaWRGaWVsZC52YWx1ZUxpc3QuaW5jbHVkZXMoaWQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuaWRGaWVsZCAmJiB0aGlzLmZpZWxkLnZhbHVlTGlzdC5pbmNsdWRlcyhyZWxhdGVWYWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZhbHVlT2JqZWN0ID0ge30gYXMgYW55O1xuICAgICAgICB2YWx1ZU9iamVjdC5pZCA9IGlkO1xuICAgICAgICB2YWx1ZU9iamVjdFtyZWxhdGVOYW1lXSA9IHJlbGF0ZVZhbHVlO1xuXG4gICAgICAgIHRoaXMuZmllbGQudmFsdWVPYmplY3RBcnJheS5wdXNoKHZhbHVlT2JqZWN0KTtcbiAgICAgICAgdGhpcy5maWVsZC52YWx1ZUxpc3QucHVzaChyZWxhdGVWYWx1ZSk7XG5cbiAgICAgICAgaWYgKHRoaXMuaWRGaWVsZCkge1xuICAgICAgICAgICAgdGhpcy5pZEZpZWxkLnZhbHVlTGlzdC5wdXNoKGlkKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2VhcmNoQ3JpdGVyaWEodGhpcy5pZEZpZWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlU2VhcmNoQ3JpdGVyaWEodGhpcy5maWVsZCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLmZpZWxkLmNyaXRlcmlhLnZhbHVlT2JqZWN0QXJyYXkpIHtcbiAgICAgICAgICAgIHRoaXMuZmllbGQuY3JpdGVyaWEudmFsdWVPYmplY3RBcnJheSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5maWVsZC5jcml0ZXJpYS52YWx1ZU9iamVjdEFycmF5LnB1c2godmFsdWVPYmplY3QpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB2YWx1ZSBvbiBmaWVsZCBjcml0ZXJpYSBhbmQgZm9ybVxuICAgICAqL1xuICAgIHByb3RlY3RlZCB1cGRhdGVTZWFyY2hDcml0ZXJpYShmaWVsZDogRmllbGQpOiB2b2lkIHtcbiAgICAgICAgZmllbGQuY3JpdGVyaWEub3BlcmF0b3IgPSAnPSc7XG4gICAgICAgIGZpZWxkLmNyaXRlcmlhLnZhbHVlcyA9IGZpZWxkLnZhbHVlTGlzdDtcbiAgICAgICAgZmllbGQuZm9ybUNvbnRyb2wuc2V0VmFsdWUoZmllbGQudmFsdWVMaXN0KTtcbiAgICAgICAgZmllbGQuZm9ybUNvbnRyb2wubWFya0FzRGlydHkoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93IHJlY29yZCBzZWxlY3Rpb24gbW9kYWxcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgc2hvd1NlbGVjdE1vZGFsKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBtb2RhbCA9IHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oUmVjb3JkTGlzdE1vZGFsQ29tcG9uZW50LCB7c2l6ZTogJ3hsJywgc2Nyb2xsYWJsZTogdHJ1ZX0pO1xuXG4gICAgICAgIG1vZGFsLmNvbXBvbmVudEluc3RhbmNlLm1vZHVsZSA9IHRoaXMuZ2V0UmVsYXRlZE1vZHVsZSgpO1xuXG4gICAgICAgIG1vZGFsLnJlc3VsdC50aGVuKChkYXRhOiBSZWNvcmRMaXN0TW9kYWxSZXN1bHQpID0+IHtcblxuICAgICAgICAgICAgaWYgKCFkYXRhIHx8ICFkYXRhLnNlbGVjdGlvbiB8fCAhZGF0YS5zZWxlY3Rpb24uc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHJlY29yZCA9IHRoaXMuZ2V0U2VsZWN0ZWRSZWNvcmQoZGF0YSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGZvdW5kID0gdGhpcy5maWVsZC52YWx1ZU9iamVjdEFycmF5LmZpbmQoZWxlbWVudCA9PiBlbGVtZW50LmlkID09PSByZWNvcmQuaWQpO1xuXG4gICAgICAgICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2V0SXRlbShyZWNvcmQpO1xuICAgICAgICAgICAgdGhpcy50YWcudXBkYXRlTW9kZWwodGhpcy5zZWxlY3RlZFZhbHVlcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBTZWxlY3RlZCBSZWNvcmRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIFJlY29yZExpc3RNb2RhbFJlc3VsdFxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IFJlY29yZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRTZWxlY3RlZFJlY29yZChkYXRhOiBSZWNvcmRMaXN0TW9kYWxSZXN1bHQpOiBSZWNvcmQge1xuICAgICAgICBsZXQgaWQgPSAnJztcbiAgICAgICAgT2JqZWN0LmtleXMoZGF0YS5zZWxlY3Rpb24uc2VsZWN0ZWQpLnNvbWUoc2VsZWN0ZWQgPT4ge1xuICAgICAgICAgICAgaWQgPSBzZWxlY3RlZDtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgcmVjb3JkOiBSZWNvcmQgPSBudWxsO1xuXG4gICAgICAgIGRhdGEucmVjb3Jkcy5zb21lKHJlYyA9PiB7XG4gICAgICAgICAgICBpZiAocmVjICYmIHJlYy5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICByZWNvcmQgPSByZWM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZWNvcmQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSByZWNvcmQgYXMgdGhlIHNlbGVjdGVkIGl0ZW1cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZWNvcmQgdG8gc2V0XG4gICAgICovXG4gICAgcHJvdGVjdGVkIHNldEl0ZW0ocmVjb3JkOiBSZWNvcmQpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcmVsYXRlTmFtZSA9IHRoaXMuZ2V0UmVsYXRlRmllbGROYW1lKCk7XG4gICAgICAgIGNvbnN0IG5ld0l0ZW0gPSB7XG4gICAgICAgICAgICBpZDogcmVjb3JkPy5hdHRyaWJ1dGVzPy5pZCxcbiAgICAgICAgICAgIFtyZWxhdGVOYW1lXTogcmVjb3JkPy5hdHRyaWJ1dGVzW3JlbGF0ZU5hbWVdXG4gICAgICAgIH0gYXMgT2JqZWN0TWFwO1xuXG4gICAgICAgIGNvbnN0IGluTGlzdCA9IHRoaXMuaXNJbkxpc3QodGhpcy5zZWxlY3RlZFZhbHVlcywgbmV3SXRlbSk7XG4gICAgICAgIGlmIChpbkxpc3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZXMucHVzaChuZXdJdGVtKVxuICAgICAgICB0aGlzLmFkZEN1cnJlbnRseVNlbGVjdGVkVG9PcHRpb25zKHRoaXMub3B0aW9ucyk7XG5cbiAgICAgICAgdGhpcy5vbkFkZCgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhZGRDdXJyZW50bHlTZWxlY3RlZFRvT3B0aW9ucyhmaWx0ZXJlZE9wdGlvbnMpIHtcbiAgICAgICAgaWYgKCF0aGlzPy5zZWxlY3RlZFZhbHVlcyB8fCAhdGhpcz8uc2VsZWN0ZWRWYWx1ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNlbGVjdGVkVmFsdWVzLmZvckVhY2goc2VsZWN0ZWRWYWx1ZSA9PiB7XG4gICAgICAgICAgICBsZXQgZm91bmQgPSB0aGlzLmlzSW5MaXN0KGZpbHRlcmVkT3B0aW9ucywgc2VsZWN0ZWRWYWx1ZSk7XG5cbiAgICAgICAgICAgIGlmIChmb3VuZCA9PT0gZmFsc2UgJiYgc2VsZWN0ZWRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5wdXNoKHNlbGVjdGVkVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaXNJbkxpc3QoZmlsdGVyZWRPcHRpb25zOiBBdHRyaWJ1dGVNYXBbXSwgc2VsZWN0ZWRWYWx1ZTogQXR0cmlidXRlTWFwKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBmb3VuZCA9IGZhbHNlXG5cbiAgICAgICAgZmlsdGVyZWRPcHRpb25zLnNvbWUoKHZhbHVlOiBBdHRyaWJ1dGVNYXApID0+IHtcblxuICAgICAgICAgICAgaWYgKHZhbHVlPy5pZCA9PT0gc2VsZWN0ZWRWYWx1ZT8uaWQpIHtcbiAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBmb3VuZDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY2FsY3VsYXRlU2VsZWN0QWxsKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB2aXNpYmxlT3B0aW9ucyA9IHRoaXM/LnRhZz8udmlzaWJsZU9wdGlvbnMoKSA/PyBbXTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZXNLZXlzID0gKHRoaXM/LnNlbGVjdGVkVmFsdWVzID8/IFtdKS5tYXAoaXRlbSA9PiBpdGVtLnZhbHVlKTtcblxuICAgICAgICBpZiAoIXZpc2libGVPcHRpb25zLmxlbmd0aCB8fCAhc2VsZWN0ZWRWYWx1ZXNLZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RBbGwgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2aXNpYmxlT3B0aW9ucy5sZW5ndGggPiBzZWxlY3RlZFZhbHVlc0tleXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdEFsbCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZWxlY3RBbGwgPSB2aXNpYmxlT3B0aW9ucy5ldmVyeShpdGVtID0+IHNlbGVjdGVkVmFsdWVzS2V5cy5pbmNsdWRlcyhpdGVtLnZhbHVlKSk7XG4gICAgfVxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPGRpdiBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaW5pdE1vZHVsZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1ncm93LTEgdy0xMDAgbXItMVwiPlxuICAgICAgICAgICAgPHAtbXVsdGlTZWxlY3RcbiAgICAgICAgICAgICAgICAjdGFnXG4gICAgICAgICAgICAgICAgW29wdGlvbnNdPVwidGhpcy5vcHRpb25zXCJcbiAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInNlbGVjdGVkVmFsdWVzXCJcbiAgICAgICAgICAgICAgICBbb3B0aW9uTGFiZWxdPVwiZ2V0UmVsYXRlRmllbGROYW1lKClcIlxuICAgICAgICAgICAgICAgIChvbkNoYW5nZSk9XCJvbkFkZCgpXCJcbiAgICAgICAgICAgICAgICAob25MYXp5TG9hZCk9XCJvbkZpbHRlcigpXCJcbiAgICAgICAgICAgICAgICAob25SZW1vdmUpPVwib25SZW1vdmUoKVwiXG4gICAgICAgICAgICAgICAgKG9uUGFuZWxTaG93KT1cIm9uUGFuZWxTaG93KClcIlxuICAgICAgICAgICAgICAgIChvblBhbmVsSGlkZSk9XCJyZXNldEZ1bmN0aW9uKClcIlxuICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlckxhYmVsXCJcbiAgICAgICAgICAgICAgICBbc2VsZWN0ZWRJdGVtc0xhYmVsXT1cIid7MH0gJyArIHNlbGVjdGVkSXRlbXNMYWJlbFwiXG4gICAgICAgICAgICAgICAgW2VtcHR5RmlsdGVyTWVzc2FnZV09XCJlbXB0eUZpbHRlckxhYmVsXCJcbiAgICAgICAgICAgICAgICBbZW1wdHlNZXNzYWdlXT1cImVtcHR5RmlsdGVyTGFiZWxcIlxuICAgICAgICAgICAgICAgIFttYXhTZWxlY3RlZExhYmVsc109XCJtYXhTZWxlY3RlZExhYmVsc1wiXG4gICAgICAgICAgICAgICAgW3N0eWxlQ2xhc3NdPVwiJ3ctMTAwICcgKyBnZXRJbnZhbGlkQ2xhc3MoKVwiXG4gICAgICAgICAgICAgICAgW3Nob3dUb2dnbGVBbGxdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgW3NlbGVjdEFsbF09XCJzZWxlY3RBbGxcIlxuICAgICAgICAgICAgICAgIFthdXRvT3B0aW9uRm9jdXNdPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgIFthdXRvZm9jdXNGaWx0ZXJdPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgIFtmb2N1c09uSG92ZXJdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgW3Nob3dDbGVhcl09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAob25DbGVhcik9XCJvbkNsZWFyKClcIlxuICAgICAgICAgICAgICAgIFtmaWx0ZXJdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgW2xhenldPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgW2RhdGFLZXldPVwiJ2lkJ1wiXG4gICAgICAgICAgICAgICAgW2ZpbHRlckJ5XT1cImdldFJlbGF0ZUZpZWxkTmFtZSgpXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgcFRlbXBsYXRlPVwiZHJvcGRvd25pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzY3JtLWltYWdlIGltYWdlPVwiZG93bl9jYXJyZXRcIj48L3Njcm0taW1hZ2U+XG4gICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgcFRlbXBsYXRlPVwiY2hlY2tpY29uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzY3JtLWltYWdlIGltYWdlPVwiY2hlY2tib3hfY3Jvc3NcIj48L3Njcm0taW1hZ2U+XG4gICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBwVGVtcGxhdGU9XCJmaWx0ZXJcIiBsZXQtb3B0aW9ucz1cIm9wdGlvbnNcIj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1jaGVja2JveCBwLWNvbXBvbmVudFwiIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWhpZGRlbi1hY2Nlc3NpYmxlXCIgZGF0YS1wLWhpZGRlbi1hY2Nlc3NpYmxlPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiQWxsIGl0ZW1zIHVuc2VsZWN0ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiByb2xlPVwiY2hlY2tib3hcIiBjbGFzcz1cInAtY2hlY2tib3gtYm94XCIgYXJpYS1jaGVja2VkPVwiZmFsc2VcIiAoY2xpY2spPVwib25TZWxlY3RBbGwoKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWltYWdlIGltYWdlPVwiY2hlY2tib3hfY3Jvc3NcIiAqbmdJZj1cInNlbGVjdEFsbFwiPjwvc2NybS1pbWFnZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtbXVsdGlzZWxlY3QtZmlsdGVyLWNvbnRhaW5lclwiIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAjZHJvcGRvd25GaWx0ZXJJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwSW5wdXRUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInAtbXVsdGlzZWxlY3QtZmlsdGVyIHAtaW5wdXR0ZXh0IHAtY29tcG9uZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImZpbHRlclZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoa2V5dXApPVwib25GaWx0ZXJJbnB1dCgkZXZlbnQpO1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiaW5kZXg9XCIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtbXVsdGlzZWxlY3QtZmlsdGVyLWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1pbWFnZSBpbWFnZT1cInNlYXJjaFwiIGNsYXNzPVwicC1lbGVtZW50IHAtZHJvcGRvd24tZmlsdGVyLXNlYXJjaC1pY29uXCI+PC9zY3JtLWltYWdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG5cblxuXG4gICAgICAgICAgICA8L3AtbXVsdGlTZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHNjcm0tYnV0dG9uIFtjb25maWddPVwic2VsZWN0QnV0dG9uXCI+XG4gICAgICAgICAgICA8L3Njcm0tYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbjwvZGl2PlxuXG5cblxuIl19