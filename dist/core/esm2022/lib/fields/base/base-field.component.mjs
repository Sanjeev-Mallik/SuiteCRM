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
import { Component, computed, inject, Input, signal } from '@angular/core';
import { isVoid } from '../../common/utils/value-utils';
import { BehaviorSubject } from 'rxjs';
import { DataTypeFormatter } from '../../services/formatters/data-type.formatter.service';
import { debounceTime } from 'rxjs/operators';
import { FieldLogicManager } from '../field-logic/field-logic.manager';
import { FieldLogicDisplayManager } from '../field-logic-display/field-logic-display.manager';
import { isEqual } from "lodash-es";
import { FieldHandlerRegistry } from "../../services/record/field/handler/field-handler.registry";
import * as i0 from "@angular/core";
import * as i1 from "../../services/formatters/data-type.formatter.service";
import * as i2 from "../field-logic/field-logic.manager";
import * as i3 from "../field-logic-display/field-logic-display.manager";
export class BaseFieldComponent {
    get mode() {
        return this._mode;
    }
    set mode(value) {
        this._mode = value;
        this.modeState.next(this._mode);
    }
    constructor(typeFormatter, logic, logicDisplay) {
        this.typeFormatter = typeFormatter;
        this.logic = logic;
        this.logicDisplay = logicDisplay;
        this.originalMode = '';
        this.klass = null;
        this._mode = '';
        this.dependentFields = {};
        this.dependentAttributes = [];
        this.subs = [];
        this.validateOnlyOnSubmit = false;
        this.isInvalid = signal(false);
        this.modeState = new BehaviorSubject('');
        this.mode$ = this.modeState.asObservable();
        this.fieldHandlerRegistry = inject(FieldHandlerRegistry);
    }
    ngOnInit() {
        this.baseInit();
        if (!this.originalMode) {
            this.originalMode = this.mode;
        }
        const defaultValueModes = this?.field?.defaultValueModes ?? [];
        if (defaultValueModes.includes(this.originalMode)) {
            const fieldHandler = this.fieldHandlerRegistry.get(this.record.module, this.field.type);
            fieldHandler.initDefaultValue(this.field, this.record);
        }
    }
    ngOnDestroy() {
        this.unsubscribeAll();
    }
    baseInit() {
        this.initDependencyHandlers();
        this.validateOnlyOnSubmit = this.record?.metadata?.validateOnlyOnSubmit;
        if (this.record?.validationTriggered) {
            this.isInvalid = computed(() => {
                if (this.record?.metadata?.validateOnlyOnSubmit && this.record?.validationTriggered() && this.field.formControl?.invalid) {
                    return true;
                }
                return false;
            });
        }
    }
    /**
     * Calculate and init dependency handlers
     */
    initDependencyHandlers() {
        if (!this.record) {
            return;
        }
        const fieldKeys = (this.record.fields && Object.keys(this.record.fields)) || [];
        if (fieldKeys.length > 1) {
            this.calculateDependentFields(fieldKeys);
            this.field.previousValue = this.field.value;
            if ((this.dependentFields && Object.keys(this.dependentFields).length) || this.dependentAttributes.length) {
                Object.keys(this.dependentFields).forEach(fieldKey => {
                    const field = this.record.fields[fieldKey] || null;
                    if (!field) {
                        return;
                    }
                    const types = this.dependentFields[fieldKey].type ?? [];
                    if (types.includes('logic')) {
                        this.logic.runLogic(field, this.originalMode, this.record, 'onFieldInitialize');
                    }
                    if (types.includes('displayLogic')) {
                        this.logicDisplay.runAll(field, this.record, this.originalMode);
                    }
                });
            }
            if (this.field.valueChanges$ && ((this.dependentFields && Object.keys(this.dependentFields).length) || this.dependentAttributes.length)) {
                this.subs.push(this.field.valueChanges$.pipe(debounceTime(500)).subscribe((data) => {
                    Object.keys(this.dependentFields).forEach(fieldKey => {
                        const dependentFieldKey = this.dependentFields[fieldKey];
                        const field = this.record.fields[fieldKey] || null;
                        const dependentField = this.record.fields[dependentFieldKey.field] || null;
                        if (!field) {
                            return;
                        }
                        if (this.field.previousValue != data.value) {
                            const types = dependentFieldKey.type ?? [];
                            if (types.includes('logic')) {
                                this.logic.runLogic(field, this.originalMode, this.record, 'onDependencyChange', dependentField);
                            }
                            if (types.includes('displayLogic')) {
                                this.logicDisplay.runAll(field, this.record, this.originalMode);
                            }
                        }
                    });
                    this.field.previousValue = data.value;
                    this.dependentAttributes.forEach(dependency => {
                        const field = this.record.fields[dependency.field] || {};
                        const attribute = (field && field.attributes && field.attributes[dependency.attribute]) || null;
                        if (!attribute) {
                            return;
                        }
                        this.logic.runLogic(attribute, this.mode, this.record, 'onAttributeChange');
                    });
                }));
            }
        }
    }
    /**
     * Calculate dependent fields
     * @param {array} fieldKeys
     */
    calculateDependentFields(fieldKeys) {
        fieldKeys.forEach(key => {
            if (this.field.source === 'field' || this.field.source === 'groupField') {
                this.addFieldDependency(key, this.dependentFields, this.dependentAttributes);
                return;
            }
            if (this.field.source === 'attribute') {
                this.addAttributeDependency(key, this.dependentFields, this.dependentAttributes);
                return;
            }
        });
    }
    /**
     * Add field dependency
     * @param {string} fieldKey
     * @param {array} dependentFields
     * @param {object} dependentAttributes
     */
    addFieldDependency(fieldKey, dependentFields, dependentAttributes) {
        const field = this.record.fields[fieldKey];
        const name = this.field.name || this.field.definition.name || '';
        if (fieldKey === name || !field) {
            return;
        }
        if (field.fieldDependencies && this.isDependencyField(field.fieldDependencies)) {
            dependentFields[fieldKey] = field.fieldDependencies[name];
        }
        const attributeKeys = (field.attributes && Object.keys(field.attributes)) || [];
        attributeKeys.forEach(attributeKey => {
            const attribute = field.attributes[attributeKey];
            if (!attribute || !attribute.fieldDependencies || !attribute.fieldDependencies.length) {
                return;
            }
            if (this.isDependencyField(attribute.fieldDependencies)) {
                dependentAttributes.push({
                    field: fieldKey,
                    attribute: attributeKey,
                    types: dependentFields[name]['types'] ?? []
                });
            }
        });
    }
    /**
     * Check if field is dependency
     * @param dependencies
     * @returns {boolean}
     */
    isDependencyField(dependencies) {
        const name = this.field.name || this.field.definition.name || '';
        return !!(dependencies[name] ?? false);
    }
    /**
     * Add attribute dependency
     * @param {string} fieldKey
     * @param {array} dependentFields
     * @param {object} dependentAttributes
     */
    addAttributeDependency(fieldKey, dependentFields, dependentAttributes) {
        const field = this.record.fields[fieldKey];
        const name = this.field.name || this.field.definition.name || '';
        if (fieldKey === name || !field) {
            return;
        }
        if (field.attributeDependencies && field.attributeDependencies.length && this.isDependencyAttribute(field.attributeDependencies)) {
            dependentFields[name] = field.fieldDependencies[name];
        }
        const attributeKeys = (field.attributes && Object.keys(field.attributes)) || [];
        attributeKeys.forEach(attributeKey => {
            const attribute = field.attributes[attributeKey];
            if (attribute && attribute.attributeDependencies && attribute.attributeDependencies.length) {
                const hasDependency = this.isDependencyAttribute(attribute.attributeDependencies);
                if (hasDependency) {
                    dependentAttributes.push({
                        field: fieldKey,
                        attribute: attributeKey,
                        types: (dependentFields[name] ?? {})['types'] ?? []
                    });
                }
            }
        });
    }
    /**
     * Check if attribute is dependency
     * @param {object} attributeDependencies
     * @returns {boolean}
     */
    isDependencyAttribute(attributeDependencies) {
        const parentKey = this.field.parentKey || '';
        const name = this.field.name || this.field.definition.name || '';
        return attributeDependencies.some(dependency => parentKey === dependency.field && name === dependency.attribute);
    }
    subscribeValueChanges() {
        if (this.field && this.field.formControl) {
            this.subs.push(this.field.formControl.valueChanges.subscribe(value => {
                if (!isVoid(value)) {
                    value = value.trim();
                }
                else {
                    value = '';
                }
                if (this.typeFormatter && this.field.type) {
                    value = this.toInternalFormat(this.field.type, value);
                }
                this.setFieldValue(value);
            }));
        }
    }
    toInternalFormat(fieldType, value) {
        return this.typeFormatter.toInternalFormat(fieldType, value);
    }
    setFieldValue(newValue) {
        this.field.value = newValue;
    }
    setFormControlValue(newValue) {
        if (isEqual(this.field.formControl.value, newValue)) {
            this.field.formControl.markAsPristine();
            return;
        }
        this.field.formControl.setValue(newValue);
        this.field.formControl.markAsDirty();
    }
    unsubscribeAll() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    static { this.ɵfac = function BaseFieldComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BaseFieldComponent)(i0.ɵɵdirectiveInject(i1.DataTypeFormatter), i0.ɵɵdirectiveInject(i2.FieldLogicManager), i0.ɵɵdirectiveInject(i3.FieldLogicDisplayManager)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BaseFieldComponent, selectors: [["ng-component"]], inputs: { originalMode: "originalMode", field: "field", record: "record", parent: "parent", klass: "klass", mode: "mode" }, decls: 0, vars: 0, template: function BaseFieldComponent_Template(rf, ctx) { }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseFieldComponent, [{
        type: Component,
        args: [{ template: '' }]
    }], () => [{ type: i1.DataTypeFormatter }, { type: i2.FieldLogicManager }, { type: i3.FieldLogicDisplayManager }], { originalMode: [{
            type: Input
        }], field: [{
            type: Input
        }], record: [{
            type: Input
        }], parent: [{
            type: Input
        }], klass: [{
            type: Input
        }], mode: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BaseFieldComponent, { className: "BaseFieldComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvZmllbGRzL2Jhc2UvYmFzZS1maWVsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUlwRyxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFJdEQsT0FBTyxFQUFDLGVBQWUsRUFBMkIsTUFBTSxNQUFNLENBQUM7QUFDL0QsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDeEYsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLG9DQUFvQyxDQUFDO0FBQ3JFLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLG9EQUFvRCxDQUFDO0FBQzVGLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDbEMsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sNERBQTRELENBQUM7Ozs7O0FBR2hHLE1BQU0sT0FBTyxrQkFBa0I7SUFRM0IsSUFDVyxJQUFJO1FBQ1gsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxJQUFXLElBQUksQ0FBQyxLQUFhO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBYUQsWUFDYyxhQUFnQyxFQUNoQyxLQUF3QixFQUN4QixZQUFzQztRQUZ0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LENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRWpFLENBQUM7SUFFUyxhQUFhLENBQUMsUUFBUTtRQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7SUFDaEMsQ0FBQztJQUVTLG1CQUFtQixDQUFDLFFBQTJCO1FBQ3JELElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQ2xELElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3hDLE9BQU87UUFDWCxDQUFDO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFFUyxjQUFjO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDaEQsQ0FBQzttSEExU1Esa0JBQWtCO29FQUFsQixrQkFBa0I7O2lGQUFsQixrQkFBa0I7Y0FEOUIsU0FBUztlQUFDLEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBQzt5SEFHWixZQUFZO2tCQUFwQixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBR0ssSUFBSTtrQkFEZCxLQUFLOztrRkFSRyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBjb21wdXRlZCwgaW5qZWN0LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIHNpZ25hbCwgU2lnbmFsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RmllbGRDb21wb25lbnRJbnRlcmZhY2V9IGZyb20gJy4vZmllbGQuaW50ZXJmYWNlJztcbmltcG9ydCB7QXR0cmlidXRlRGVwZW5kZW5jeX0gZnJvbSAnLi4vLi4vY29tbW9uL3JlY29yZC9maWVsZC5tb2RlbCc7XG5pbXBvcnQge09iamVjdE1hcH0gZnJvbSAnLi4vLi4vY29tbW9uL3R5cGVzL29iamVjdC1tYXAnO1xuaW1wb3J0IHtpc1ZvaWR9IGZyb20gJy4uLy4uL2NvbW1vbi91dGlscy92YWx1ZS11dGlscyc7XG5pbXBvcnQge0ZpZWxkfSBmcm9tICcuLi8uLi9jb21tb24vcmVjb3JkL2ZpZWxkLm1vZGVsJztcbmltcG9ydCB7Vmlld01vZGV9IGZyb20gJy4uLy4uL2NvbW1vbi92aWV3cy92aWV3Lm1vZGVsJztcbmltcG9ydCB7UmVjb3JkfSBmcm9tICcuLi8uLi9jb21tb24vcmVjb3JkL3JlY29yZC5tb2RlbCc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7RGF0YVR5cGVGb3JtYXR0ZXJ9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Zvcm1hdHRlcnMvZGF0YS10eXBlLmZvcm1hdHRlci5zZXJ2aWNlJztcbmltcG9ydCB7ZGVib3VuY2VUaW1lfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge0ZpZWxkTG9naWNNYW5hZ2VyfSBmcm9tICcuLi9maWVsZC1sb2dpYy9maWVsZC1sb2dpYy5tYW5hZ2VyJztcbmltcG9ydCB7RmllbGRMb2dpY0Rpc3BsYXlNYW5hZ2VyfSBmcm9tICcuLi9maWVsZC1sb2dpYy1kaXNwbGF5L2ZpZWxkLWxvZ2ljLWRpc3BsYXkubWFuYWdlcic7XG5pbXBvcnQge2lzRXF1YWx9IGZyb20gXCJsb2Rhc2gtZXNcIjtcbmltcG9ydCB7RmllbGRIYW5kbGVyUmVnaXN0cnl9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9yZWNvcmQvZmllbGQvaGFuZGxlci9maWVsZC1oYW5kbGVyLnJlZ2lzdHJ5XCI7XG5cbkBDb21wb25lbnQoe3RlbXBsYXRlOiAnJ30pXG5leHBvcnQgY2xhc3MgQmFzZUZpZWxkQ29tcG9uZW50IGltcGxlbWVudHMgRmllbGRDb21wb25lbnRJbnRlcmZhY2UsIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIEBJbnB1dCgpIG9yaWdpbmFsTW9kZTogc3RyaW5nID0gJyc7XG4gICAgQElucHV0KCkgZmllbGQ6IEZpZWxkO1xuICAgIEBJbnB1dCgpIHJlY29yZDogUmVjb3JkO1xuICAgIEBJbnB1dCgpIHBhcmVudDogUmVjb3JkO1xuICAgIEBJbnB1dCgpIGtsYXNzOiB7IFtrbGFzczogc3RyaW5nXTogYW55IH0gPSBudWxsO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IG1vZGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vZGU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBtb2RlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fbW9kZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLm1vZGVTdGF0ZS5uZXh0KHRoaXMuX21vZGUpO1xuICAgIH1cblxuICAgIF9tb2RlOiBzdHJpbmcgPSAnJztcbiAgICBkZXBlbmRlbnRGaWVsZHM6IE9iamVjdE1hcCA9IHt9O1xuICAgIGRlcGVuZGVudEF0dHJpYnV0ZXM6IEF0dHJpYnV0ZURlcGVuZGVuY3lbXSA9IFtdO1xuICAgIHByb3RlY3RlZCBzdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuICAgIHByb3RlY3RlZCBtb2RlU3RhdGU6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+O1xuICAgIHByb3RlY3RlZCBtb2RlJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAgIHByb3RlY3RlZCBmaWVsZEhhbmRsZXJSZWdpc3RyeTogRmllbGRIYW5kbGVyUmVnaXN0cnk7XG5cbiAgICB2YWxpZGF0ZU9ubHlPblN1Ym1pdDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzSW52YWxpZDogU2lnbmFsPGJvb2xlYW4+ID0gc2lnbmFsKGZhbHNlKTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgdHlwZUZvcm1hdHRlcjogRGF0YVR5cGVGb3JtYXR0ZXIsXG4gICAgICAgIHByb3RlY3RlZCBsb2dpYzogRmllbGRMb2dpY01hbmFnZXIsXG4gICAgICAgIHByb3RlY3RlZCBsb2dpY0Rpc3BsYXk6IEZpZWxkTG9naWNEaXNwbGF5TWFuYWdlclxuICAgICkge1xuICAgICAgICB0aGlzLm1vZGVTdGF0ZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPignJyk7XG4gICAgICAgIHRoaXMubW9kZSQgPSB0aGlzLm1vZGVTdGF0ZS5hc09ic2VydmFibGUoKTtcbiAgICAgICAgdGhpcy5maWVsZEhhbmRsZXJSZWdpc3RyeSA9IGluamVjdChGaWVsZEhhbmRsZXJSZWdpc3RyeSlcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5iYXNlSW5pdCgpO1xuXG4gICAgICAgIGlmICghdGhpcy5vcmlnaW5hbE1vZGUpIHtcbiAgICAgICAgICAgIHRoaXMub3JpZ2luYWxNb2RlID0gdGhpcy5tb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGVmYXVsdFZhbHVlTW9kZXMgPSB0aGlzPy5maWVsZD8uZGVmYXVsdFZhbHVlTW9kZXMgPz8gW107XG4gICAgICAgIGlmIChkZWZhdWx0VmFsdWVNb2Rlcy5pbmNsdWRlcyh0aGlzLm9yaWdpbmFsTW9kZSBhcyBWaWV3TW9kZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkSGFuZGxlciA9IHRoaXMuZmllbGRIYW5kbGVyUmVnaXN0cnkuZ2V0KHRoaXMucmVjb3JkLm1vZHVsZSwgdGhpcy5maWVsZC50eXBlKTtcbiAgICAgICAgICAgIGZpZWxkSGFuZGxlci5pbml0RGVmYXVsdFZhbHVlKHRoaXMuZmllbGQsIHRoaXMucmVjb3JkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlQWxsKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGJhc2VJbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmluaXREZXBlbmRlbmN5SGFuZGxlcnMoKTtcblxuICAgICAgICB0aGlzLnZhbGlkYXRlT25seU9uU3VibWl0ID0gdGhpcy5yZWNvcmQ/Lm1ldGFkYXRhPy52YWxpZGF0ZU9ubHlPblN1Ym1pdDtcbiAgICAgICAgaWYodGhpcy5yZWNvcmQ/LnZhbGlkYXRpb25UcmlnZ2VyZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNJbnZhbGlkID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHRoaXMucmVjb3JkPy5tZXRhZGF0YT8udmFsaWRhdGVPbmx5T25TdWJtaXQgJiYgdGhpcy5yZWNvcmQ/LnZhbGlkYXRpb25UcmlnZ2VyZWQoKSAmJiB0aGlzLmZpZWxkLmZvcm1Db250cm9sPy5pbnZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlIGFuZCBpbml0IGRlcGVuZGVuY3kgaGFuZGxlcnNcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgaW5pdERlcGVuZGVuY3lIYW5kbGVycygpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLnJlY29yZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZpZWxkS2V5cyA9ICh0aGlzLnJlY29yZC5maWVsZHMgJiYgT2JqZWN0LmtleXModGhpcy5yZWNvcmQuZmllbGRzKSkgfHwgW107XG4gICAgICAgIGlmIChmaWVsZEtleXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVEZXBlbmRlbnRGaWVsZHMoZmllbGRLZXlzKTtcbiAgICAgICAgICAgIHRoaXMuZmllbGQucHJldmlvdXNWYWx1ZSA9IHRoaXMuZmllbGQudmFsdWU7XG5cbiAgICAgICAgICAgIGlmICgodGhpcy5kZXBlbmRlbnRGaWVsZHMgJiYgT2JqZWN0LmtleXModGhpcy5kZXBlbmRlbnRGaWVsZHMpLmxlbmd0aCkgfHwgdGhpcy5kZXBlbmRlbnRBdHRyaWJ1dGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZGVwZW5kZW50RmllbGRzKS5mb3JFYWNoKGZpZWxkS2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGQgPSB0aGlzLnJlY29yZC5maWVsZHNbZmllbGRLZXldIHx8IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZmllbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHR5cGVzID0gdGhpcy5kZXBlbmRlbnRGaWVsZHNbZmllbGRLZXldLnR5cGUgPz8gW107XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVzLmluY2x1ZGVzKCdsb2dpYycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2ljLnJ1bkxvZ2ljKGZpZWxkLCB0aGlzLm9yaWdpbmFsTW9kZSBhcyBWaWV3TW9kZSwgdGhpcy5yZWNvcmQsICdvbkZpZWxkSW5pdGlhbGl6ZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVzLmluY2x1ZGVzKCdkaXNwbGF5TG9naWMnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpY0Rpc3BsYXkucnVuQWxsKGZpZWxkLCB0aGlzLnJlY29yZCwgdGhpcy5vcmlnaW5hbE1vZGUgYXMgVmlld01vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkLnZhbHVlQ2hhbmdlcyQgJiYgKCh0aGlzLmRlcGVuZGVudEZpZWxkcyAmJiBPYmplY3Qua2V5cyh0aGlzLmRlcGVuZGVudEZpZWxkcykubGVuZ3RoKSB8fCB0aGlzLmRlcGVuZGVudEF0dHJpYnV0ZXMubGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMuZmllbGQudmFsdWVDaGFuZ2VzJC5waXBlKGRlYm91bmNlVGltZSg1MDApKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5kZXBlbmRlbnRGaWVsZHMpLmZvckVhY2goZmllbGRLZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVwZW5kZW50RmllbGRLZXkgPSB0aGlzLmRlcGVuZGVudEZpZWxkc1tmaWVsZEtleV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWVsZCA9IHRoaXMucmVjb3JkLmZpZWxkc1tmaWVsZEtleV0gfHwgbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlcGVuZGVudEZpZWxkID0gdGhpcy5yZWNvcmQuZmllbGRzW2RlcGVuZGVudEZpZWxkS2V5LmZpZWxkXSB8fCBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFmaWVsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZmllbGQucHJldmlvdXNWYWx1ZSAhPSBkYXRhLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdHlwZXMgPSBkZXBlbmRlbnRGaWVsZEtleS50eXBlID8/IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVzLmluY2x1ZGVzKCdsb2dpYycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naWMucnVuTG9naWMoZmllbGQsIHRoaXMub3JpZ2luYWxNb2RlIGFzIFZpZXdNb2RlLCB0aGlzLnJlY29yZCwgJ29uRGVwZW5kZW5jeUNoYW5nZScsIGRlcGVuZGVudEZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZXMuaW5jbHVkZXMoJ2Rpc3BsYXlMb2dpYycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naWNEaXNwbGF5LnJ1bkFsbChmaWVsZCwgdGhpcy5yZWNvcmQsIHRoaXMub3JpZ2luYWxNb2RlIGFzIFZpZXdNb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkLnByZXZpb3VzVmFsdWUgPSBkYXRhLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVwZW5kZW50QXR0cmlidXRlcy5mb3JFYWNoKGRlcGVuZGVuY3kgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGQgPSB0aGlzLnJlY29yZC5maWVsZHNbZGVwZW5kZW5jeS5maWVsZF0gfHwge30gYXMgRmllbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGUgPSAoZmllbGQgJiYgZmllbGQuYXR0cmlidXRlcyAmJiBmaWVsZC5hdHRyaWJ1dGVzW2RlcGVuZGVuY3kuYXR0cmlidXRlXSkgfHwgbnVsbDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFhdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naWMucnVuTG9naWMoYXR0cmlidXRlLCB0aGlzLm1vZGUgYXMgVmlld01vZGUsIHRoaXMucmVjb3JkLCAnb25BdHRyaWJ1dGVDaGFuZ2UnKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZSBkZXBlbmRlbnQgZmllbGRzXG4gICAgICogQHBhcmFtIHthcnJheX0gZmllbGRLZXlzXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGNhbGN1bGF0ZURlcGVuZGVudEZpZWxkcyhmaWVsZEtleXM6IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgICAgIGZpZWxkS2V5cy5mb3JFYWNoKGtleSA9PiB7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkLnNvdXJjZSA9PT0gJ2ZpZWxkJyB8fCB0aGlzLmZpZWxkLnNvdXJjZSA9PT0gJ2dyb3VwRmllbGQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRGaWVsZERlcGVuZGVuY3koa2V5LCB0aGlzLmRlcGVuZGVudEZpZWxkcywgdGhpcy5kZXBlbmRlbnRBdHRyaWJ1dGVzKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkLnNvdXJjZSA9PT0gJ2F0dHJpYnV0ZScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEF0dHJpYnV0ZURlcGVuZGVuY3koa2V5LCB0aGlzLmRlcGVuZGVudEZpZWxkcywgdGhpcy5kZXBlbmRlbnRBdHRyaWJ1dGVzKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGZpZWxkIGRlcGVuZGVuY3lcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGRLZXlcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBkZXBlbmRlbnRGaWVsZHNcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZGVwZW5kZW50QXR0cmlidXRlc1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBhZGRGaWVsZERlcGVuZGVuY3koZmllbGRLZXk6IHN0cmluZywgZGVwZW5kZW50RmllbGRzOiBPYmplY3RNYXAsIGRlcGVuZGVudEF0dHJpYnV0ZXM6IEF0dHJpYnV0ZURlcGVuZGVuY3lbXSk6IHZvaWQge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHRoaXMucmVjb3JkLmZpZWxkc1tmaWVsZEtleV07XG4gICAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLmZpZWxkLm5hbWUgfHwgdGhpcy5maWVsZC5kZWZpbml0aW9uLm5hbWUgfHwgJyc7XG4gICAgICAgIGlmIChmaWVsZEtleSA9PT0gbmFtZSB8fCAhZmllbGQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmaWVsZC5maWVsZERlcGVuZGVuY2llcyAmJiB0aGlzLmlzRGVwZW5kZW5jeUZpZWxkKGZpZWxkLmZpZWxkRGVwZW5kZW5jaWVzKSkge1xuICAgICAgICAgICAgZGVwZW5kZW50RmllbGRzW2ZpZWxkS2V5XSA9IGZpZWxkLmZpZWxkRGVwZW5kZW5jaWVzW25hbWVdO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYXR0cmlidXRlS2V5cyA9IChmaWVsZC5hdHRyaWJ1dGVzICYmIE9iamVjdC5rZXlzKGZpZWxkLmF0dHJpYnV0ZXMpKSB8fCBbXTtcblxuICAgICAgICBhdHRyaWJ1dGVLZXlzLmZvckVhY2goYXR0cmlidXRlS2V5ID0+IHtcblxuICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlID0gZmllbGQuYXR0cmlidXRlc1thdHRyaWJ1dGVLZXldO1xuICAgICAgICAgICAgaWYgKCFhdHRyaWJ1dGUgfHwgIWF0dHJpYnV0ZS5maWVsZERlcGVuZGVuY2llcyB8fCAhYXR0cmlidXRlLmZpZWxkRGVwZW5kZW5jaWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuaXNEZXBlbmRlbmN5RmllbGQoYXR0cmlidXRlLmZpZWxkRGVwZW5kZW5jaWVzKSkge1xuICAgICAgICAgICAgICAgIGRlcGVuZGVudEF0dHJpYnV0ZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiBmaWVsZEtleSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlOiBhdHRyaWJ1dGVLZXksXG4gICAgICAgICAgICAgICAgICAgIHR5cGVzOiBkZXBlbmRlbnRGaWVsZHNbbmFtZV1bJ3R5cGVzJ10gPz8gW11cbiAgICAgICAgICAgICAgICB9IGFzIEF0dHJpYnV0ZURlcGVuZGVuY3kpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBmaWVsZCBpcyBkZXBlbmRlbmN5XG4gICAgICogQHBhcmFtIGRlcGVuZGVuY2llc1xuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBpc0RlcGVuZGVuY3lGaWVsZChkZXBlbmRlbmNpZXM6IE9iamVjdE1hcCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBuYW1lID0gdGhpcy5maWVsZC5uYW1lIHx8IHRoaXMuZmllbGQuZGVmaW5pdGlvbi5uYW1lIHx8ICcnO1xuXG4gICAgICAgIHJldHVybiAhIShkZXBlbmRlbmNpZXNbbmFtZV0gPz8gZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBhdHRyaWJ1dGUgZGVwZW5kZW5jeVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZEtleVxuICAgICAqIEBwYXJhbSB7YXJyYXl9IGRlcGVuZGVudEZpZWxkc1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBkZXBlbmRlbnRBdHRyaWJ1dGVzXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFkZEF0dHJpYnV0ZURlcGVuZGVuY3koZmllbGRLZXk6IHN0cmluZywgZGVwZW5kZW50RmllbGRzOiBPYmplY3RNYXAsIGRlcGVuZGVudEF0dHJpYnV0ZXM6IEF0dHJpYnV0ZURlcGVuZGVuY3lbXSk6IHZvaWQge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHRoaXMucmVjb3JkLmZpZWxkc1tmaWVsZEtleV07XG4gICAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLmZpZWxkLm5hbWUgfHwgdGhpcy5maWVsZC5kZWZpbml0aW9uLm5hbWUgfHwgJyc7XG4gICAgICAgIGlmIChmaWVsZEtleSA9PT0gbmFtZSB8fCAhZmllbGQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmaWVsZC5hdHRyaWJ1dGVEZXBlbmRlbmNpZXMgJiYgZmllbGQuYXR0cmlidXRlRGVwZW5kZW5jaWVzLmxlbmd0aCAmJiB0aGlzLmlzRGVwZW5kZW5jeUF0dHJpYnV0ZShmaWVsZC5hdHRyaWJ1dGVEZXBlbmRlbmNpZXMpKSB7XG4gICAgICAgICAgICBkZXBlbmRlbnRGaWVsZHNbbmFtZV0gPSBmaWVsZC5maWVsZERlcGVuZGVuY2llc1tuYW1lXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZUtleXMgPSAoZmllbGQuYXR0cmlidXRlcyAmJiBPYmplY3Qua2V5cyhmaWVsZC5hdHRyaWJ1dGVzKSkgfHwgW107XG5cbiAgICAgICAgYXR0cmlidXRlS2V5cy5mb3JFYWNoKGF0dHJpYnV0ZUtleSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IGZpZWxkLmF0dHJpYnV0ZXNbYXR0cmlidXRlS2V5XTtcbiAgICAgICAgICAgIGlmIChhdHRyaWJ1dGUgJiYgYXR0cmlidXRlLmF0dHJpYnV0ZURlcGVuZGVuY2llcyAmJiBhdHRyaWJ1dGUuYXR0cmlidXRlRGVwZW5kZW5jaWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhhc0RlcGVuZGVuY3kgPSB0aGlzLmlzRGVwZW5kZW5jeUF0dHJpYnV0ZShhdHRyaWJ1dGUuYXR0cmlidXRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICAgICAgICAgIGlmIChoYXNEZXBlbmRlbmN5KSB7XG4gICAgICAgICAgICAgICAgICAgIGRlcGVuZGVudEF0dHJpYnV0ZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogZmllbGRLZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGU6IGF0dHJpYnV0ZUtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVzOiAgKGRlcGVuZGVudEZpZWxkc1tuYW1lXSA/PyB7fSlbJ3R5cGVzJ10gPz8gW11cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBhdHRyaWJ1dGUgaXMgZGVwZW5kZW5jeVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBhdHRyaWJ1dGVEZXBlbmRlbmNpZXNcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgaXNEZXBlbmRlbmN5QXR0cmlidXRlKGF0dHJpYnV0ZURlcGVuZGVuY2llczogQXR0cmlidXRlRGVwZW5kZW5jeVtdKTogYm9vbGVhbiB7XG5cbiAgICAgICAgY29uc3QgcGFyZW50S2V5ID0gdGhpcy5maWVsZC5wYXJlbnRLZXkgfHwgJyc7XG4gICAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLmZpZWxkLm5hbWUgfHwgdGhpcy5maWVsZC5kZWZpbml0aW9uLm5hbWUgfHwgJyc7XG5cbiAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZURlcGVuZGVuY2llcy5zb21lKGRlcGVuZGVuY3kgPT4gcGFyZW50S2V5ID09PSBkZXBlbmRlbmN5LmZpZWxkICYmIG5hbWUgPT09IGRlcGVuZGVuY3kuYXR0cmlidXRlKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc3Vic2NyaWJlVmFsdWVDaGFuZ2VzKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5maWVsZCAmJiB0aGlzLmZpZWxkLmZvcm1Db250cm9sKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLmZpZWxkLmZvcm1Db250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsdWUgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZvaWQodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUudHJpbSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudHlwZUZvcm1hdHRlciAmJiB0aGlzLmZpZWxkLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnRvSW50ZXJuYWxGb3JtYXQodGhpcy5maWVsZC50eXBlLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRGaWVsZFZhbHVlKHZhbHVlKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCB0b0ludGVybmFsRm9ybWF0KGZpZWxkVHlwZSwgdmFsdWUpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlRm9ybWF0dGVyLnRvSW50ZXJuYWxGb3JtYXQoZmllbGRUeXBlLCB2YWx1ZSk7XG5cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2V0RmllbGRWYWx1ZShuZXdWYWx1ZSk6IHZvaWQge1xuICAgICAgICB0aGlzLmZpZWxkLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNldEZvcm1Db250cm9sVmFsdWUobmV3VmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgICAgIGlmIChpc0VxdWFsKHRoaXMuZmllbGQuZm9ybUNvbnRyb2wudmFsdWUsIG5ld1ZhbHVlKSkge1xuICAgICAgICAgICAgdGhpcy5maWVsZC5mb3JtQ29udHJvbC5tYXJrQXNQcmlzdGluZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmllbGQuZm9ybUNvbnRyb2wuc2V0VmFsdWUobmV3VmFsdWUpO1xuICAgICAgICB0aGlzLmZpZWxkLmZvcm1Db250cm9sLm1hcmtBc0RpcnR5KCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHVuc3Vic2NyaWJlQWxsKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cbn1cbiJdfQ==