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
import { Injectable, signal } from '@angular/core';
import { ValidationManager } from '../validation/validation.manager';
import { DataTypeFormatter } from '../../formatters/data-type.formatter.service';
import { isFalse, isTrue } from '../../../common/utils/value-utils';
import { UntypedFormArray, UntypedFormControl } from '@angular/forms';
import get from 'lodash-es/get';
import { isEmpty, merge } from 'lodash-es';
import { FieldObjectRegistry } from "./field-object-type.registry";
import * as i0 from "@angular/core";
import * as i1 from "../validation/validation.manager";
import * as i2 from "../../formatters/data-type.formatter.service";
import * as i3 from "./field-object-type.registry";
export class FieldBuilder {
    constructor(validationManager, typeFormatter, fieldRegistry) {
        this.validationManager = validationManager;
        this.typeFormatter = typeFormatter;
        this.fieldRegistry = fieldRegistry;
    }
    /**
     * Build field
     *
     * @param {object} record Record
     * @param {object} viewField ViewFieldDefinition
     * @param {object} language LanguageStore
     * @returns {object}Field
     */
    buildField(record, viewField, language = null) {
        const module = record?.module ?? '';
        let definition = viewField?.fieldDefinition ?? {};
        const multiModuleDefinitions = viewField?.multiModuleDefinitions ?? {};
        const currentModuleDefinitions = multiModuleDefinitions[module] ?? {};
        if (!isEmpty(currentModuleDefinitions)) {
            definition = currentModuleDefinitions;
        }
        const { value, valueList, valueObject } = this.parseValue(viewField, definition, record);
        const { validators, asyncValidators, itemFormArraySaveValidators } = this.getSaveValidators(record, viewField);
        const field = this.setupField(record.module, viewField, value, valueList, valueObject, record, definition, validators, asyncValidators, language);
        field.itemFormArraySaveValidators = itemFormArraySaveValidators;
        return field;
    }
    getFieldLabel(label, module, language) {
        const languages = language.getLanguageStrings();
        return language.getFieldLabel(label, module, languages);
    }
    /**
     * Parse value from record
     *
     * @param {object} viewField ViewFieldDefinition
     * @param {object} definition FieldDefinition
     * @param {object} record Record
     * @returns {object} value object
     */
    parseValue(viewField, definition, record) {
        const type = (viewField && viewField.type) || '';
        const source = (definition && definition.source) || '';
        const rname = (definition && definition.rname) || 'name';
        const viewName = viewField.name || '';
        let value = null;
        let valueList = null;
        if (!viewName || (!record.attributes[viewName] && !isFalse(record.attributes[viewName]))) {
            value = '';
        }
        else if (type === 'relate' && source === 'non-db' && rname !== '') {
            value = record.attributes[viewName][rname];
            const valueObject = record.attributes[viewName];
            return { value, valueList, valueObject };
        }
        else {
            value = record.attributes[viewName];
        }
        if (type === 'line-items') {
            return { value: null, valueList };
        }
        if (Array.isArray(value)) {
            valueList = value;
            value = null;
        }
        return { value, valueList };
    }
    /**
     * Build and initialize field object
     *
     * @param {string} module to use
     * @param {object} viewField ViewFieldDefinition
     * @param {string} value string
     * @param {[]} valueList string[]
     * @param {} valueObject value object
     * @param {object} record Record
     * @param {object} definition FieldDefinition
     * @param {[]} validators ValidatorFn[]
     * @param {[]} asyncValidators AsyncValidatorFn[]
     * @param {object} language LanguageStore
     * @returns {object} BaseField
     */
    setupField(module, viewField, value, valueList, valueObject, record, definition, validators, asyncValidators, language) {
        const metadata = merge(definition?.metadata ?? {}, viewField?.metadata ?? {});
        const formattedValue = this.typeFormatter.toUserFormat(viewField.type, value, { mode: 'edit', metadata });
        if (viewField.link) {
            metadata.link = viewField.link;
        }
        const type = viewField.type || definition.type;
        const FieldObjectType = this.fieldRegistry.get(module, type);
        const field = new FieldObjectType();
        field.type = type;
        field.name = viewField.name || definition.name || '';
        field.vardefBased = viewField?.vardefBased ?? definition?.vardefBased ?? false;
        field.readonly = isTrue(viewField.readonly) || isTrue(definition.readonly) || false;
        field.display = signal((viewField.display || definition.display || 'default'));
        field.required = signal(isTrue(definition?.required) ?? isTrue(viewField?.fieldDefinition?.required) ?? false);
        field.defaultDisplay = field?.display();
        if (field.defaultDisplay === 'default') {
            field.defaultDisplay = 'show';
        }
        field.value = value;
        field.metadata = metadata;
        field.definition = definition;
        if (viewField?.lineItems) {
            field.definition.lineItems = viewField.lineItems;
        }
        field.labelKey = viewField.label || definition.vname || '';
        field.dynamicLabelKey = viewField.dynamicLabelKey || definition.dynamicLabelKey || '';
        const defaultValue = viewField?.defaultValue ?? definition?.default ?? definition?.defaultValue ?? null;
        if (defaultValue) {
            field.default = defaultValue;
        }
        field.defaultValueModes = viewField?.defaultValueModes ?? definition?.defaultValueModes ?? [];
        field.validators = validators;
        field.asyncValidators = asyncValidators;
        if (field.type === 'line-items') {
            field.valueObjectArray = record.attributes[field.name];
            field.itemFormArray = new UntypedFormArray([]);
            field.formControl = new UntypedFormControl(formattedValue);
        }
        else {
            field.formControl = new UntypedFormControl(formattedValue);
        }
        field.useFullColumn = viewField?.useFullColumn || definition?.useFullColumn || null;
        field.attributes = {};
        field.source = 'field';
        field.logic = viewField.logic || definition.logic || null;
        field.displayLogic = viewField.displayLogic || definition.displayLogic || null;
        const fieldDependencies = {};
        const attributeDependencies = {};
        this.addFieldDependencies(field.logic, fieldDependencies, attributeDependencies, 'logic');
        this.addFieldDependencies(field.displayLogic, fieldDependencies, attributeDependencies, 'displayLogic');
        field.attributeDependencies = Object.keys(attributeDependencies).map(key => attributeDependencies[key]);
        field.fieldDependencies = fieldDependencies;
        if (valueList) {
            field.valueList = valueList;
        }
        if (valueObject) {
            field.valueObject = valueObject;
        }
        if (language) {
            field.label = this.getFieldLabel(viewField.label, module, language);
        }
        if (!field.labelKey && viewField.label) {
            field.labelKey = viewField.label;
        }
        return field;
    }
    addFieldDependencies(config, fieldDependencies, attributeDependencies, type) {
        if (config && Object.keys(config).length) {
            Object.keys(config).forEach(logicKey => {
                const entry = config[logicKey] || {};
                if (!entry.params) {
                    return;
                }
                if (entry.params && entry.params.attributeDependencies) {
                    entry.params.attributeDependencies.forEach(dependency => {
                        const dependencyKey = dependency.field + '.' + dependency.attribute;
                        attributeDependencies[dependencyKey] = dependency;
                    });
                }
                if (entry.params && entry.params.fieldDependencies) {
                    entry.params.fieldDependencies.forEach(dependency => {
                        const fieldDependency = fieldDependencies[dependency] ?? {};
                        const types = fieldDependency['types'] ?? [];
                        types.push(type);
                        fieldDependencies[dependency] = {
                            field: dependency,
                            type: types
                        };
                    });
                }
            });
        }
    }
    /**
     * Get save validators for the given field definition
     *
     * @param {object} record Record
     * @param {object} viewField ViewFieldDefinition
     * @returns {object} Validator map
     */
    getSaveValidators(record, viewField) {
        const validators = this.validationManager.getSaveValidations(record.module, viewField, record);
        const asyncValidators = this.validationManager.getAsyncSaveValidations(record.module, viewField, record);
        const itemFormArraySaveValidators = this.validationManager.getItemFormArraySaveValidations(record.module, viewField, record);
        return { validators, asyncValidators, itemFormArraySaveValidators };
    }
    /**
     * Set attribute value on parent
     *
     * @param {object} record Record
     * @param {object} field Field
     * @param {string} name String
     * @param {object} definition FieldDefinition
     * @returns any
     */
    getParentValue(record, field, name, definition) {
        const valueParent = definition.valueParent ?? 'field';
        const parent = valueParent === 'record' ? record : field;
        if (definition.valuePath) {
            return get(parent, definition.valuePath, '');
        }
        if (valueParent === 'record') {
            return get(record.attributes, name, '');
        }
        return get(field.valueObject, name, '');
    }
    static { this.ɵfac = function FieldBuilder_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FieldBuilder)(i0.ɵɵinject(i1.ValidationManager), i0.ɵɵinject(i2.DataTypeFormatter), i0.ɵɵinject(i3.FieldObjectRegistry)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FieldBuilder, factory: FieldBuilder.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FieldBuilder, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.ValidationManager }, { type: i2.DataTypeFormatter }, { type: i3.FieldObjectRegistry }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9zZXJ2aWNlcy9yZWNvcmQvZmllbGQvZmllbGQuYnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDbkUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sOENBQThDLENBQUM7QUFDL0UsT0FBTyxFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQU1sRSxPQUFPLEVBQW1CLGdCQUFnQixFQUFFLGtCQUFrQixFQUFjLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkcsT0FBTyxHQUFHLE1BQU0sZUFBZSxDQUFDO0FBQ2hDLE9BQU8sRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLDhCQUE4QixDQUFDOzs7OztBQU1qRSxNQUFNLE9BQU8sWUFBWTtJQUVyQixZQUNjLGlCQUFvQyxFQUNwQyxhQUFnQyxFQUNoQyxhQUFrQztRQUZsQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLGtCQUFhLEdBQWIsYUFBYSxDQUFtQjtRQUNoQyxrQkFBYSxHQUFiLGFBQWEsQ0FBcUI7SUFFaEQsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSSxVQUFVLENBQUMsTUFBYyxFQUFFLFNBQThCLEVBQUUsV0FBMEIsSUFBSTtRQUU1RixNQUFNLE1BQU0sR0FBRyxNQUFNLEVBQUUsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUNwQyxJQUFJLFVBQVUsR0FBRyxTQUFTLEVBQUUsZUFB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UUFBUSxFQUFFLENBQUM7WUFDM0IsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDNUMsQ0FBQztRQUVELE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7NkdBalNRLFlBQVk7dUVBQVosWUFBWSxXQUFaLFlBQVksbUJBRlQsTUFBTTs7aUZBRVQsWUFBWTtjQUh4QixVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZSwgc2lnbmFsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VmFsaWRhdGlvbk1hbmFnZXJ9IGZyb20gJy4uL3ZhbGlkYXRpb24vdmFsaWRhdGlvbi5tYW5hZ2VyJztcbmltcG9ydCB7RGF0YVR5cGVGb3JtYXR0ZXJ9IGZyb20gJy4uLy4uL2Zvcm1hdHRlcnMvZGF0YS10eXBlLmZvcm1hdHRlci5zZXJ2aWNlJztcbmltcG9ydCB7aXNGYWxzZSwgaXNUcnVlfSBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvdmFsdWUtdXRpbHMnO1xuaW1wb3J0IHtPYmplY3RNYXB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi90eXBlcy9vYmplY3QtbWFwJztcbmltcG9ydCB7QXR0cmlidXRlRGVwZW5kZW5jeSwgQmFzZUZpZWxkLCBEaXNwbGF5VHlwZSwgRmllbGQsIEZpZWxkRGVmaW5pdGlvbn0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3JlY29yZC9maWVsZC5tb2RlbCc7XG5pbXBvcnQge0ZpZWxkTG9naWMsIEZpZWxkTG9naWNNYXB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9hY3Rpb25zL2ZpZWxkLWxvZ2ljLWFjdGlvbi5tb2RlbCc7XG5pbXBvcnQge1JlY29yZH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3JlY29yZC9yZWNvcmQubW9kZWwnO1xuaW1wb3J0IHtWaWV3RmllbGREZWZpbml0aW9ufSBmcm9tICcuLi8uLi8uLi9jb21tb24vbWV0YWRhdGEvbWV0YWRhdGEubW9kZWwnO1xuaW1wb3J0IHtBc3luY1ZhbGlkYXRvckZuLCBVbnR5cGVkRm9ybUFycmF5LCBVbnR5cGVkRm9ybUNvbnRyb2wsIFZhbGlkYXRvckZufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCBnZXQgZnJvbSAnbG9kYXNoLWVzL2dldCc7XG5pbXBvcnQge2lzRW1wdHksIG1lcmdlfSBmcm9tICdsb2Rhc2gtZXMnO1xuaW1wb3J0IHtGaWVsZE9iamVjdFJlZ2lzdHJ5fSBmcm9tIFwiLi9maWVsZC1vYmplY3QtdHlwZS5yZWdpc3RyeVwiO1xuXG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRmllbGRCdWlsZGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgdmFsaWRhdGlvbk1hbmFnZXI6IFZhbGlkYXRpb25NYW5hZ2VyLFxuICAgICAgICBwcm90ZWN0ZWQgdHlwZUZvcm1hdHRlcjogRGF0YVR5cGVGb3JtYXR0ZXIsXG4gICAgICAgIHByb3RlY3RlZCBmaWVsZFJlZ2lzdHJ5OiBGaWVsZE9iamVjdFJlZ2lzdHJ5XG4gICAgKSB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGQgZmllbGRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZWNvcmQgUmVjb3JkXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHZpZXdGaWVsZCBWaWV3RmllbGREZWZpbml0aW9uXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGxhbmd1YWdlIExhbmd1YWdlU3RvcmVcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fUZpZWxkXG4gICAgICovXG4gICAgcHVibGljIGJ1aWxkRmllbGQocmVjb3JkOiBSZWNvcmQsIHZpZXdGaWVsZDogVmlld0ZpZWxkRGVmaW5pdGlvbiwgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmUgPSBudWxsKTogRmllbGQge1xuXG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IHJlY29yZD8ubW9kdWxlID8/ICcnO1xuICAgICAgICBsZXQgZGVmaW5pdGlvbiA9IHZpZXdGaWVsZD8uZmllbGREZWZpbml0aW9uID8/IHt9IGFzIEZpZWxkRGVmaW5pdGlvbjtcbiAgICAgICAgY29uc3QgbXVsdGlNb2R1bGVEZWZpbml0aW9ucyA9IHZpZXdGaWVsZD8ubXVsdGlNb2R1bGVEZWZpbml0aW9ucyA/PyB7fSBhcyBPYmplY3RNYXA7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRNb2R1bGVEZWZpbml0aW9ucyA9IG11bHRpTW9kdWxlRGVmaW5pdGlvbnNbbW9kdWxlXSA/PyB7fSBhcyBGaWVsZERlZmluaXRpb247XG5cbiAgICAgICAgaWYgKCFpc0VtcHR5KGN1cnJlbnRNb2R1bGVEZWZpbml0aW9ucykpIHtcbiAgICAgICAgICAgIGRlZmluaXRpb24gPSBjdXJyZW50TW9kdWxlRGVmaW5pdGlvbnM7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7dmFsdWUsIHZhbHVlTGlzdCwgdmFsdWVPYmplY3R9ID0gdGhpcy5wYXJzZVZhbHVlKHZpZXdGaWVsZCwgZGVmaW5pdGlvbiwgcmVjb3JkKTtcbiAgICAgICAgY29uc3Qge3ZhbGlkYXRvcnMsIGFzeW5jVmFsaWRhdG9ycywgaXRlbUZvcm1BcnJheVNhdmVWYWxpZGF0b3JzfSA9IHRoaXMuZ2V0U2F2ZVZhbGlkYXRvcnMocmVjb3JkLCB2aWV3RmllbGQpO1xuXG4gICAgICAgIGNvbnN0IGZpZWxkID0gdGhpcy5zZXR1cEZpZWxkKFxuICAgICAgICAgICAgcmVjb3JkLm1vZHVsZSxcbiAgICAgICAgICAgIHZpZXdGaWVsZCxcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgdmFsdWVMaXN0LFxuICAgICAgICAgICAgdmFsdWVPYmplY3QsXG4gICAgICAgICAgICByZWNvcmQsXG4gICAgICAgICAgICBkZWZpbml0aW9uLFxuICAgICAgICAgICAgdmFsaWRhdG9ycyxcbiAgICAgICAgICAgIGFzeW5jVmFsaWRhdG9ycyxcbiAgICAgICAgICAgIGxhbmd1YWdlXG4gICAgICAgICk7XG5cbiAgICAgICAgZmllbGQuaXRlbUZvcm1BcnJheVNhdmVWYWxpZGF0b3JzID0gaXRlbUZvcm1BcnJheVNhdmVWYWxpZGF0b3JzO1xuXG4gICAgICAgIHJldHVybiBmaWVsZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RmllbGRMYWJlbChsYWJlbDogc3RyaW5nLCBtb2R1bGU6IHN0cmluZywgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmUpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBsYW5ndWFnZXMgPSBsYW5ndWFnZS5nZXRMYW5ndWFnZVN0cmluZ3MoKTtcbiAgICAgICAgcmV0dXJuIGxhbmd1YWdlLmdldEZpZWxkTGFiZWwobGFiZWwsIG1vZHVsZSwgbGFuZ3VhZ2VzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZSB2YWx1ZSBmcm9tIHJlY29yZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHZpZXdGaWVsZCBWaWV3RmllbGREZWZpbml0aW9uXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGRlZmluaXRpb24gRmllbGREZWZpbml0aW9uXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlY29yZCBSZWNvcmRcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSB2YWx1ZSBvYmplY3RcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgcGFyc2VWYWx1ZShcbiAgICAgICAgdmlld0ZpZWxkOiBWaWV3RmllbGREZWZpbml0aW9uLFxuICAgICAgICBkZWZpbml0aW9uOiBGaWVsZERlZmluaXRpb24sXG4gICAgICAgIHJlY29yZDogUmVjb3JkXG4gICAgKTogeyB2YWx1ZTogc3RyaW5nOyB2YWx1ZUxpc3Q6IHN0cmluZ1tdOyB2YWx1ZU9iamVjdD86IGFueSB9IHtcblxuICAgICAgICBjb25zdCB0eXBlID0gKHZpZXdGaWVsZCAmJiB2aWV3RmllbGQudHlwZSkgfHwgJyc7XG4gICAgICAgIGNvbnN0IHNvdXJjZSA9IChkZWZpbml0aW9uICYmIGRlZmluaXRpb24uc291cmNlKSB8fCAnJztcbiAgICAgICAgY29uc3Qgcm5hbWUgPSAoZGVmaW5pdGlvbiAmJiBkZWZpbml0aW9uLnJuYW1lKSB8fCAnbmFtZSc7XG4gICAgICAgIGNvbnN0IHZpZXdOYW1lID0gdmlld0ZpZWxkLm5hbWUgfHwgJyc7XG4gICAgICAgIGxldCB2YWx1ZTogc3RyaW5nID0gbnVsbDtcbiAgICAgICAgbGV0IHZhbHVlTGlzdDogc3RyaW5nW10gPSBudWxsO1xuXG4gICAgICAgIGlmICghdmlld05hbWUgfHwgKCFyZWNvcmQuYXR0cmlidXRlc1t2aWV3TmFtZV0gJiYgIWlzRmFsc2UocmVjb3JkLmF0dHJpYnV0ZXNbdmlld05hbWVdKSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gJyc7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3JlbGF0ZScgJiYgc291cmNlID09PSAnbm9uLWRiJyAmJiBybmFtZSAhPT0gJycpIHtcbiAgICAgICAgICAgIHZhbHVlID0gcmVjb3JkLmF0dHJpYnV0ZXNbdmlld05hbWVdW3JuYW1lXTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlT2JqZWN0ID0gcmVjb3JkLmF0dHJpYnV0ZXNbdmlld05hbWVdO1xuICAgICAgICAgICAgcmV0dXJuIHt2YWx1ZSwgdmFsdWVMaXN0LCB2YWx1ZU9iamVjdH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHJlY29yZC5hdHRyaWJ1dGVzW3ZpZXdOYW1lXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlID09PSAnbGluZS1pdGVtcycpIHtcbiAgICAgICAgICAgIHJldHVybiB7dmFsdWU6IG51bGwsIHZhbHVlTGlzdH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlTGlzdCA9IHZhbHVlO1xuICAgICAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHt2YWx1ZSwgdmFsdWVMaXN0fTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCBhbmQgaW5pdGlhbGl6ZSBmaWVsZCBvYmplY3RcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtb2R1bGUgdG8gdXNlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHZpZXdGaWVsZCBWaWV3RmllbGREZWZpbml0aW9uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIHN0cmluZ1xuICAgICAqIEBwYXJhbSB7W119IHZhbHVlTGlzdCBzdHJpbmdbXVxuICAgICAqIEBwYXJhbSB7fSB2YWx1ZU9iamVjdCB2YWx1ZSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVjb3JkIFJlY29yZFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBkZWZpbml0aW9uIEZpZWxkRGVmaW5pdGlvblxuICAgICAqIEBwYXJhbSB7W119IHZhbGlkYXRvcnMgVmFsaWRhdG9yRm5bXVxuICAgICAqIEBwYXJhbSB7W119IGFzeW5jVmFsaWRhdG9ycyBBc3luY1ZhbGlkYXRvckZuW11cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbGFuZ3VhZ2UgTGFuZ3VhZ2VTdG9yZVxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IEJhc2VGaWVsZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBzZXR1cEZpZWxkKFxuICAgICAgICBtb2R1bGU6IHN0cmluZyxcbiAgICAgICAgdmlld0ZpZWxkOiBWaWV3RmllbGREZWZpbml0aW9uLFxuICAgICAgICB2YWx1ZTogc3RyaW5nLFxuICAgICAgICB2YWx1ZUxpc3Q6IHN0cmluZ1tdLFxuICAgICAgICB2YWx1ZU9iamVjdDogYW55LFxuICAgICAgICByZWNvcmQ6IFJlY29yZCxcbiAgICAgICAgZGVmaW5pdGlvbjogRmllbGREZWZpbml0aW9uLFxuICAgICAgICB2YWxpZGF0b3JzOiBWYWxpZGF0b3JGbltdLFxuICAgICAgICBhc3luY1ZhbGlkYXRvcnM6IEFzeW5jVmFsaWRhdG9yRm5bXSxcbiAgICAgICAgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmVcbiAgICApOiBCYXNlRmllbGQge1xuXG4gICAgICAgIGNvbnN0IG1ldGFkYXRhID0gbWVyZ2UoZGVmaW5pdGlvbj8ubWV0YWRhdGEgPz8ge30sIHZpZXdGaWVsZD8ubWV0YWRhdGEgPz8ge30pO1xuXG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZFZhbHVlID0gdGhpcy50eXBlRm9ybWF0dGVyLnRvVXNlckZvcm1hdCh2aWV3RmllbGQudHlwZSwgdmFsdWUsIHttb2RlOiAnZWRpdCcsIG1ldGFkYXRhfSk7XG5cbiAgICAgICAgaWYgKHZpZXdGaWVsZC5saW5rKSB7XG4gICAgICAgICAgICBtZXRhZGF0YS5saW5rID0gdmlld0ZpZWxkLmxpbms7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0eXBlID0gdmlld0ZpZWxkLnR5cGUgfHwgZGVmaW5pdGlvbi50eXBlO1xuICAgICAgICBjb25zdCBGaWVsZE9iamVjdFR5cGUgPSB0aGlzLmZpZWxkUmVnaXN0cnkuZ2V0KG1vZHVsZSwgdHlwZSk7XG5cbiAgICAgICAgY29uc3QgZmllbGQgPSBuZXcgRmllbGRPYmplY3RUeXBlKCk7XG5cbiAgICAgICAgZmllbGQudHlwZSA9IHR5cGU7XG4gICAgICAgIGZpZWxkLm5hbWUgPSB2aWV3RmllbGQubmFtZSB8fCBkZWZpbml0aW9uLm5hbWUgfHwgJyc7XG4gICAgICAgIGZpZWxkLnZhcmRlZkJhc2VkID0gdmlld0ZpZWxkPy52YXJkZWZCYXNlZCA/PyBkZWZpbml0aW9uPy52YXJkZWZCYXNlZCA/PyBmYWxzZTtcbiAgICAgICAgZmllbGQucmVhZG9ubHkgPSBpc1RydWUodmlld0ZpZWxkLnJlYWRvbmx5KSB8fCBpc1RydWUoZGVmaW5pdGlvbi5yZWFkb25seSkgfHwgZmFsc2U7XG4gICAgICAgIGZpZWxkLmRpc3BsYXkgPSBzaWduYWwoKHZpZXdGaWVsZC5kaXNwbGF5IHx8IGRlZmluaXRpb24uZGlzcGxheSB8fCAnZGVmYXVsdCcpIGFzIERpc3BsYXlUeXBlKTtcbiAgICAgICAgZmllbGQucmVxdWlyZWQgPSBzaWduYWwoaXNUcnVlKGRlZmluaXRpb24/LnJlcXVpcmVkKSA/PyBpc1RydWUodmlld0ZpZWxkPy5maWVsZERlZmluaXRpb24/LnJlcXVpcmVkKSA/PyBmYWxzZSk7XG4gICAgICAgIGZpZWxkLmRlZmF1bHREaXNwbGF5ID0gZmllbGQ/LmRpc3BsYXkoKTtcbiAgICAgICAgaWYgKGZpZWxkLmRlZmF1bHREaXNwbGF5ID09PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgICAgIGZpZWxkLmRlZmF1bHREaXNwbGF5ID0gJ3Nob3cnO1xuICAgICAgICB9XG4gICAgICAgIGZpZWxkLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIGZpZWxkLm1ldGFkYXRhID0gbWV0YWRhdGE7XG4gICAgICAgIGZpZWxkLmRlZmluaXRpb24gPSBkZWZpbml0aW9uO1xuICAgICAgICBpZiAodmlld0ZpZWxkPy5saW5lSXRlbXMpIHtcbiAgICAgICAgICAgIGZpZWxkLmRlZmluaXRpb24ubGluZUl0ZW1zID0gdmlld0ZpZWxkLmxpbmVJdGVtcztcbiAgICAgICAgfVxuICAgICAgICBmaWVsZC5sYWJlbEtleSA9IHZpZXdGaWVsZC5sYWJlbCB8fCBkZWZpbml0aW9uLnZuYW1lIHx8ICcnO1xuICAgICAgICBmaWVsZC5keW5hbWljTGFiZWxLZXkgPSB2aWV3RmllbGQuZHluYW1pY0xhYmVsS2V5IHx8IGRlZmluaXRpb24uZHluYW1pY0xhYmVsS2V5IHx8ICcnO1xuXG4gICAgICAgIGNvbnN0IGRlZmF1bHRWYWx1ZSA9IHZpZXdGaWVsZD8uZGVmYXVsdFZhbHVlID8/IGRlZmluaXRpb24/LmRlZmF1bHQgPz8gZGVmaW5pdGlvbj8uZGVmYXVsdFZhbHVlID8/IG51bGw7XG4gICAgICAgIGlmIChkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgICAgIGZpZWxkLmRlZmF1bHQgPSBkZWZhdWx0VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBmaWVsZC5kZWZhdWx0VmFsdWVNb2RlcyA9IHZpZXdGaWVsZD8uZGVmYXVsdFZhbHVlTW9kZXMgPz8gZGVmaW5pdGlvbj8uZGVmYXVsdFZhbHVlTW9kZXMgPz8gW107XG5cbiAgICAgICAgZmllbGQudmFsaWRhdG9ycyA9IHZhbGlkYXRvcnM7XG4gICAgICAgIGZpZWxkLmFzeW5jVmFsaWRhdG9ycyA9IGFzeW5jVmFsaWRhdG9ycztcblxuICAgICAgICBpZiAoZmllbGQudHlwZSA9PT0gJ2xpbmUtaXRlbXMnKSB7XG4gICAgICAgICAgICBmaWVsZC52YWx1ZU9iamVjdEFycmF5ID0gcmVjb3JkLmF0dHJpYnV0ZXNbZmllbGQubmFtZV07XG4gICAgICAgICAgICBmaWVsZC5pdGVtRm9ybUFycmF5ID0gbmV3IFVudHlwZWRGb3JtQXJyYXkoW10pO1xuICAgICAgICAgICAgZmllbGQuZm9ybUNvbnRyb2wgPSBuZXcgVW50eXBlZEZvcm1Db250cm9sKGZvcm1hdHRlZFZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZpZWxkLmZvcm1Db250cm9sID0gbmV3IFVudHlwZWRGb3JtQ29udHJvbChmb3JtYXR0ZWRWYWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBmaWVsZC51c2VGdWxsQ29sdW1uID0gdmlld0ZpZWxkPy51c2VGdWxsQ29sdW1uIHx8IGRlZmluaXRpb24/LnVzZUZ1bGxDb2x1bW4gfHwgbnVsbDtcbiAgICAgICAgZmllbGQuYXR0cmlidXRlcyA9IHt9O1xuICAgICAgICBmaWVsZC5zb3VyY2UgPSAnZmllbGQnO1xuICAgICAgICBmaWVsZC5sb2dpYyA9IHZpZXdGaWVsZC5sb2dpYyB8fCBkZWZpbml0aW9uLmxvZ2ljIHx8IG51bGw7XG4gICAgICAgIGZpZWxkLmRpc3BsYXlMb2dpYyA9IHZpZXdGaWVsZC5kaXNwbGF5TG9naWMgfHwgZGVmaW5pdGlvbi5kaXNwbGF5TG9naWMgfHwgbnVsbDtcbiAgICAgICAgY29uc3QgZmllbGREZXBlbmRlbmNpZXM6IE9iamVjdE1hcCA9IHt9O1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVEZXBlbmRlbmNpZXM6IHsgW2tleTogc3RyaW5nXTogQXR0cmlidXRlRGVwZW5kZW5jeSB9ID0ge307XG5cblxuICAgICAgICB0aGlzLmFkZEZpZWxkRGVwZW5kZW5jaWVzKGZpZWxkLmxvZ2ljLCBmaWVsZERlcGVuZGVuY2llcywgYXR0cmlidXRlRGVwZW5kZW5jaWVzLCAnbG9naWMnKTtcbiAgICAgICAgdGhpcy5hZGRGaWVsZERlcGVuZGVuY2llcyhmaWVsZC5kaXNwbGF5TG9naWMsIGZpZWxkRGVwZW5kZW5jaWVzLCBhdHRyaWJ1dGVEZXBlbmRlbmNpZXMsICdkaXNwbGF5TG9naWMnKTtcblxuICAgICAgICBmaWVsZC5hdHRyaWJ1dGVEZXBlbmRlbmNpZXMgPSBPYmplY3Qua2V5cyhhdHRyaWJ1dGVEZXBlbmRlbmNpZXMpLm1hcChrZXkgPT4gYXR0cmlidXRlRGVwZW5kZW5jaWVzW2tleV0pO1xuICAgICAgICBmaWVsZC5maWVsZERlcGVuZGVuY2llcyA9IGZpZWxkRGVwZW5kZW5jaWVzO1xuXG4gICAgICAgIGlmICh2YWx1ZUxpc3QpIHtcbiAgICAgICAgICAgIGZpZWxkLnZhbHVlTGlzdCA9IHZhbHVlTGlzdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZU9iamVjdCkge1xuICAgICAgICAgICAgZmllbGQudmFsdWVPYmplY3QgPSB2YWx1ZU9iamVjdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsYW5ndWFnZSkge1xuICAgICAgICAgICAgZmllbGQubGFiZWwgPSB0aGlzLmdldEZpZWxkTGFiZWwodmlld0ZpZWxkLmxhYmVsLCBtb2R1bGUsIGxhbmd1YWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZmllbGQubGFiZWxLZXkgJiYgdmlld0ZpZWxkLmxhYmVsKSB7XG4gICAgICAgICAgICBmaWVsZC5sYWJlbEtleSA9IHZpZXdGaWVsZC5sYWJlbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmllbGQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFkZEZpZWxkRGVwZW5kZW5jaWVzKGNvbmZpZzogRmllbGRMb2dpY01hcCwgZmllbGREZXBlbmRlbmNpZXM6IE9iamVjdE1hcCwgYXR0cmlidXRlRGVwZW5kZW5jaWVzOiB7XG4gICAgICAgIFtrZXk6IHN0cmluZ106IEF0dHJpYnV0ZURlcGVuZGVuY3lcbiAgICB9LCB0eXBlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKGNvbmZpZyAmJiBPYmplY3Qua2V5cyhjb25maWcpLmxlbmd0aCkge1xuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjb25maWcpLmZvckVhY2gobG9naWNLZXkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVudHJ5ID0gY29uZmlnW2xvZ2ljS2V5XSB8fCB7fSBhcyBGaWVsZExvZ2ljO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFlbnRyeS5wYXJhbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5wYXJhbXMgJiYgZW50cnkucGFyYW1zLmF0dHJpYnV0ZURlcGVuZGVuY2llcykge1xuICAgICAgICAgICAgICAgICAgICBlbnRyeS5wYXJhbXMuYXR0cmlidXRlRGVwZW5kZW5jaWVzLmZvckVhY2goZGVwZW5kZW5jeSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXBlbmRlbmN5S2V5ID0gZGVwZW5kZW5jeS5maWVsZCArICcuJyArIGRlcGVuZGVuY3kuYXR0cmlidXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3lLZXldID0gZGVwZW5kZW5jeTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoZW50cnkucGFyYW1zICYmIGVudHJ5LnBhcmFtcy5maWVsZERlcGVuZGVuY2llcykge1xuICAgICAgICAgICAgICAgICAgICBlbnRyeS5wYXJhbXMuZmllbGREZXBlbmRlbmNpZXMuZm9yRWFjaChkZXBlbmRlbmN5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkRGVwZW5kZW5jeSA9IGZpZWxkRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3ldID8/IHt9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0eXBlcyA9IGZpZWxkRGVwZW5kZW5jeVsndHlwZXMnXSA/PyBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVzLnB1c2godHlwZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3ldID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBkZXBlbmRlbmN5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVzXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHNhdmUgdmFsaWRhdG9ycyBmb3IgdGhlIGdpdmVuIGZpZWxkIGRlZmluaXRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZWNvcmQgUmVjb3JkXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHZpZXdGaWVsZCBWaWV3RmllbGREZWZpbml0aW9uXG4gICAgICogQHJldHVybnMge29iamVjdH0gVmFsaWRhdG9yIG1hcFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRTYXZlVmFsaWRhdG9ycyhcbiAgICAgICAgcmVjb3JkOiBSZWNvcmQsXG4gICAgICAgIHZpZXdGaWVsZDogVmlld0ZpZWxkRGVmaW5pdGlvblxuICAgICk6IHtcbiAgICAgICAgdmFsaWRhdG9yczogVmFsaWRhdG9yRm5bXTtcbiAgICAgICAgYXN5bmNWYWxpZGF0b3JzOiBBc3luY1ZhbGlkYXRvckZuW107XG4gICAgICAgIGl0ZW1Gb3JtQXJyYXlTYXZlVmFsaWRhdG9ycz86IFZhbGlkYXRvckZuW107XG4gICAgfSB7XG5cbiAgICAgICAgY29uc3QgdmFsaWRhdG9ycyA9IHRoaXMudmFsaWRhdGlvbk1hbmFnZXIuZ2V0U2F2ZVZhbGlkYXRpb25zKHJlY29yZC5tb2R1bGUsIHZpZXdGaWVsZCwgcmVjb3JkKTtcbiAgICAgICAgY29uc3QgYXN5bmNWYWxpZGF0b3JzID0gdGhpcy52YWxpZGF0aW9uTWFuYWdlci5nZXRBc3luY1NhdmVWYWxpZGF0aW9ucyhyZWNvcmQubW9kdWxlLCB2aWV3RmllbGQsIHJlY29yZCk7XG4gICAgICAgIGNvbnN0IGl0ZW1Gb3JtQXJyYXlTYXZlVmFsaWRhdG9ycyA9IHRoaXMudmFsaWRhdGlvbk1hbmFnZXIuZ2V0SXRlbUZvcm1BcnJheVNhdmVWYWxpZGF0aW9ucyhyZWNvcmQubW9kdWxlLCB2aWV3RmllbGQsIHJlY29yZCk7XG4gICAgICAgIHJldHVybiB7dmFsaWRhdG9ycywgYXN5bmNWYWxpZGF0b3JzLCBpdGVtRm9ybUFycmF5U2F2ZVZhbGlkYXRvcnN9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBhdHRyaWJ1dGUgdmFsdWUgb24gcGFyZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVjb3JkIFJlY29yZFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBmaWVsZCBGaWVsZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFN0cmluZ1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBkZWZpbml0aW9uIEZpZWxkRGVmaW5pdGlvblxuICAgICAqIEByZXR1cm5zIGFueVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRQYXJlbnRWYWx1ZShyZWNvcmQ6IFJlY29yZCwgZmllbGQ6IEZpZWxkLCBuYW1lOiBzdHJpbmcsIGRlZmluaXRpb246IEZpZWxkRGVmaW5pdGlvbik6IGFueSB7XG4gICAgICAgIGNvbnN0IHZhbHVlUGFyZW50ID0gZGVmaW5pdGlvbi52YWx1ZVBhcmVudCA/PyAnZmllbGQnO1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB2YWx1ZVBhcmVudCA9PT0gJ3JlY29yZCcgPyByZWNvcmQgOiBmaWVsZDtcblxuICAgICAgICBpZiAoZGVmaW5pdGlvbi52YWx1ZVBhdGgpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXQocGFyZW50LCBkZWZpbml0aW9uLnZhbHVlUGF0aCwgJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlUGFyZW50ID09PSAncmVjb3JkJykge1xuICAgICAgICAgICAgcmV0dXJuIGdldChyZWNvcmQuYXR0cmlidXRlcywgbmFtZSwgJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdldChmaWVsZC52YWx1ZU9iamVjdCwgbmFtZSwgJycpO1xuICAgIH1cblxufVxuIl19