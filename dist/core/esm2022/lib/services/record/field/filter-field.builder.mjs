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
import { FieldBuilder } from './field.builder';
import { Injectable } from '@angular/core';
import { ValidationManager } from '../validation/validation.manager';
import { DataTypeFormatter } from '../../formatters/data-type.formatter.service';
import { deepClone } from '../../../common/utils/object-utils';
import { FieldObjectRegistry } from "./field-object-type.registry";
import * as i0 from "@angular/core";
import * as i1 from "../validation/validation.manager";
import * as i2 from "../../formatters/data-type.formatter.service";
import * as i3 from "./field-object-type.registry";
export class FilterFieldBuilder extends FieldBuilder {
    constructor(validationManager, typeFormatter, fieldRegistry) {
        super(validationManager, typeFormatter, fieldRegistry);
        this.validationManager = validationManager;
        this.typeFormatter = typeFormatter;
        this.fieldRegistry = fieldRegistry;
    }
    /**
     * Build filter field
     *
     * @param {object} savedFilter SavedFilter
     * @param {object} viewField ViewFieldDefinition
     * @param {object} language LanguageStore
     * @returns {object} Field
     */
    buildFilterField(savedFilter, viewField, language = null) {
        const definition = (viewField && viewField.fieldDefinition) || {};
        const { validators, asyncValidators } = this.getFilterValidators(savedFilter, viewField);
        const field = this.setupField(savedFilter.searchModule, viewField, null, null, null, savedFilter, definition, validators, asyncValidators, language);
        field.criteria = this.initFieldFilter(savedFilter.criteria, viewField, field);
        return field;
    }
    /**
     * Get Filter Validators for given field definition
     *
     * @param {object} record  Record
     * @param {object} viewField ViewFieldDefinition
     * @returns {object} validator map
     */
    getFilterValidators(record, viewField) {
        const validators = this.validationManager.getFilterValidations(record.searchModule, viewField, record);
        const asyncValidators = [];
        return { validators, asyncValidators };
    }
    /**
     * Init filter fields
     *
     * @param {object} searchCriteria to use
     * @param {object} viewField to init
     * @param {object} field to init
     * @returns {object} SearchCriteriaFieldFilter
     */
    initFieldFilter(searchCriteria, viewField, field) {
        let fieldCriteria;
        const fieldName = viewField.name;
        let fieldType = viewField.type;
        let rangeSearch = false;
        if (fieldType === 'composite') {
            fieldType = field.definition.type;
            rangeSearch = true;
        }
        if (searchCriteria.filters[fieldName] && searchCriteria.filters[fieldName].fieldType) {
            fieldCriteria = deepClone(searchCriteria.filters[fieldName]);
        }
        else {
            fieldCriteria = {
                field: fieldName,
                fieldType,
                operator: '',
                values: []
            };
        }
        fieldCriteria.rangeSearch = rangeSearch;
        this.mapEnumEmptyOption(fieldCriteria, field);
        this.mapRelateFields(fieldCriteria, field, searchCriteria);
        return fieldCriteria;
    }
    mapEnumEmptyOption(fieldCriteria, field) {
        if (!['multienum', 'enum'].includes(fieldCriteria.fieldType)) {
            return;
        }
        let emptyOption = this.getEmptyOption(field);
        if (!emptyOption) {
            return;
        }
        if (!fieldCriteria.values || !fieldCriteria.values.length) {
            return;
        }
        fieldCriteria.values = fieldCriteria.values.map(value => {
            if (value !== '') {
                return value;
            }
            return '__SuiteCRMEmptyString__';
        });
    }
    mapRelateFields(fieldCriteria, field, searchCriteria) {
        if (!['relate'].includes(fieldCriteria.fieldType)) {
            return;
        }
        if (!fieldCriteria.values || !fieldCriteria.values.length) {
            return;
        }
        const idFieldName = (field && field.definition && field.definition.id_name) || '';
        const relateFieldName = (field && field.definition && field.definition.rname) || 'name';
        const idValues = searchCriteria?.filters[idFieldName]?.values ?? [];
        fieldCriteria.valueObjectArray = fieldCriteria.valueObjectArray ?? [];
        const relateFieldMap = {};
        if (fieldCriteria.valueObjectArray.length) {
            fieldCriteria.valueObjectArray.forEach(value => {
                relateFieldMap[value.id] = value;
            });
        }
        for (let i = 0; i < fieldCriteria.values.length; i++) {
            let value = fieldCriteria.values[i];
            const relateValue = {};
            relateValue[relateFieldName] = value;
            relateValue['id'] = idValues[i] ?? '';
            if (!relateFieldMap[relateValue['id']]) {
                relateFieldMap[relateValue['id']] = relateValue;
                fieldCriteria.valueObjectArray.push(relateValue);
            }
        }
    }
    getEmptyOption(field) {
        let emptyOption = null;
        const extraOptions = field?.definition?.metadata?.extraOptions ?? [];
        extraOptions.forEach(option => {
            if (option.value === '__SuiteCRMEmptyString__') {
                emptyOption = option;
            }
        });
        return emptyOption;
    }
    /**
     * Is criteria field initialized in record
     *
     * @param {object} record Record
     * @param {string} fieldName field
     * @returns {boolean} isInitialized
     */
    isCriteriaFieldInitialized(record, fieldName) {
        const criteriaField = record.criteriaFields[fieldName];
        return !!criteriaField && !criteriaField.vardefBased;
    }
    /**
     * Add field to SavedFilter
     *
     * @param {object} savedFilter SavedFilter
     * @param {string} name string
     * @param {object} field Field
     */
    addToSavedFilter(savedFilter, name, field) {
        if (!savedFilter || !name || !field) {
            return;
        }
        if (!savedFilter.criteriaFields) {
            savedFilter.criteriaFields = {};
        }
        savedFilter.criteriaFields[name] = field;
        if (!savedFilter.criteria.filters) {
            savedFilter.criteria.filters = {};
        }
        savedFilter.criteria.filters[name] = field.criteria;
        if (savedFilter.criteriaFormGroup && field.formControl) {
            savedFilter.criteriaFormGroup.addControl(name, field.formControl);
        }
    }
    static { this.ɵfac = function FilterFieldBuilder_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FilterFieldBuilder)(i0.ɵɵinject(i1.ValidationManager), i0.ɵɵinject(i2.DataTypeFormatter), i0.ɵɵinject(i3.FieldObjectRegistry)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FilterFieldBuilder, factory: FilterFieldBuilder.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilterFieldBuilder, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.ValidationManager }, { type: i2.DataTypeFormatter }, { type: i3.FieldObjectRegistry }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWZpZWxkLmJ1aWxkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc2VydmljZXMvcmVjb3JkL2ZpZWxkL2ZpbHRlci1maWVsZC5idWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw4Q0FBOEMsQ0FBQztBQUUvRSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFNN0QsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sOEJBQThCLENBQUM7Ozs7O0FBS2pFLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxZQUFZO0lBRWhELFlBQ2MsaUJBQW9DLEVBQ3BDLGFBQWdDLEVBQ2hDLGFBQWtDO1FBRTVDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxhQUFhLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFKN0Msc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxrQkFBYSxHQUFiLGFBQWEsQ0FBbUI7UUFDaEMsa0JBQWEsR0FBYixhQUFhLENBQXFCO0lBR2hELENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0ksZ0JBQWdCLENBQUMsV0FBd0IsRUFBRSxTQUE4QixFQUFFLFdBQTBCLElBQUk7UUFFNUcsTUFBTSxVQUFVLEdBQUcsQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQXFCLENBQUM7UUFDckYsTUFBTSxFQUFDLFVBQVUsRUFBRSxlQUFlLEVBQUMsR0FBRyxJQUFJLENB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Q0FBQyxXQUFXLENBQUM7SUFDekQsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLGdCQUFnQixDQUFDLFdBQXdCLEVBQUUsSUFBWSxFQUFFLEtBQVk7UUFFeEUsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2xDLE9BQU87UUFDWCxDQUFDO1FBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUM5QixXQUFXLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztRQUNwQyxDQUFDO1FBRUQsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7UUFFekMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDaEMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ3RDLENBQUM7UUFFRCxXQUFXLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBRXBELElBQUksV0FBVyxDQUFDLGlCQUFpQixJQUFJLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNyRCxXQUFXLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdEUsQ0FBQztJQUNMLENBQUM7bUhBak5RLGtCQUFrQjt1RUFBbEIsa0JBQWtCLFdBQWxCLGtCQUFrQixtQkFGZixNQUFNOztpRkFFVCxrQkFBa0I7Y0FIOUIsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0ZpZWxkQnVpbGRlcn0gZnJvbSAnLi9maWVsZC5idWlsZGVyJztcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1ZhbGlkYXRpb25NYW5hZ2VyfSBmcm9tICcuLi92YWxpZGF0aW9uL3ZhbGlkYXRpb24ubWFuYWdlcic7XG5pbXBvcnQge0RhdGFUeXBlRm9ybWF0dGVyfSBmcm9tICcuLi8uLi9mb3JtYXR0ZXJzL2RhdGEtdHlwZS5mb3JtYXR0ZXIuc2VydmljZSc7XG5pbXBvcnQge1NhdmVkRmlsdGVyfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9zYXZlZC1maWx0ZXJzL3NhdmVkLWZpbHRlci5tb2RlbCc7XG5pbXBvcnQge2RlZXBDbG9uZX0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL29iamVjdC11dGlscyc7XG5pbXBvcnQge0ZpZWxkLCBGaWVsZERlZmluaXRpb24sIE9wdGlvbn0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3JlY29yZC9maWVsZC5tb2RlbCc7XG5pbXBvcnQge1NlYXJjaENyaXRlcmlhLCBTZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyfSBmcm9tICcuLi8uLi8uLi9jb21tb24vdmlld3MvbGlzdC9zZWFyY2gtY3JpdGVyaWEubW9kZWwnO1xuaW1wb3J0IHtWaWV3RmllbGREZWZpbml0aW9ufSBmcm9tICcuLi8uLi8uLi9jb21tb24vbWV0YWRhdGEvbWV0YWRhdGEubW9kZWwnO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5pbXBvcnQge0FzeW5jVmFsaWRhdG9yRm4sIFZhbGlkYXRvckZufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0ZpZWxkT2JqZWN0UmVnaXN0cnl9IGZyb20gXCIuL2ZpZWxkLW9iamVjdC10eXBlLnJlZ2lzdHJ5XCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRmlsdGVyRmllbGRCdWlsZGVyIGV4dGVuZHMgRmllbGRCdWlsZGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgdmFsaWRhdGlvbk1hbmFnZXI6IFZhbGlkYXRpb25NYW5hZ2VyLFxuICAgICAgICBwcm90ZWN0ZWQgdHlwZUZvcm1hdHRlcjogRGF0YVR5cGVGb3JtYXR0ZXIsXG4gICAgICAgIHByb3RlY3RlZCBmaWVsZFJlZ2lzdHJ5OiBGaWVsZE9iamVjdFJlZ2lzdHJ5XG4gICAgKSB7XG4gICAgICAgIHN1cGVyKHZhbGlkYXRpb25NYW5hZ2VyLCB0eXBlRm9ybWF0dGVyLCBmaWVsZFJlZ2lzdHJ5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCBmaWx0ZXIgZmllbGRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzYXZlZEZpbHRlciBTYXZlZEZpbHRlclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB2aWV3RmllbGQgVmlld0ZpZWxkRGVmaW5pdGlvblxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBsYW5ndWFnZSBMYW5ndWFnZVN0b3JlXG4gICAgICogQHJldHVybnMge29iamVjdH0gRmllbGRcbiAgICAgKi9cbiAgICBwdWJsaWMgYnVpbGRGaWx0ZXJGaWVsZChzYXZlZEZpbHRlcjogU2F2ZWRGaWx0ZXIsIHZpZXdGaWVsZDogVmlld0ZpZWxkRGVmaW5pdGlvbiwgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmUgPSBudWxsKTogRmllbGQge1xuXG4gICAgICAgIGNvbnN0IGRlZmluaXRpb24gPSAodmlld0ZpZWxkICYmIHZpZXdGaWVsZC5maWVsZERlZmluaXRpb24pIHx8IHt9IGFzIEZpZWxkRGVmaW5pdGlvbjtcbiAgICAgICAgY29uc3Qge3ZhbGlkYXRvcnMsIGFzeW5jVmFsaWRhdG9yc30gPSB0aGlzLmdldEZpbHRlclZhbGlkYXRvcnMoc2F2ZWRGaWx0ZXIsIHZpZXdGaWVsZCk7XG5cbiAgICAgICAgY29uc3QgZmllbGQgPSB0aGlzLnNldHVwRmllbGQoXG4gICAgICAgICAgICBzYXZlZEZpbHRlci5zZWFyY2hNb2R1bGUsXG4gICAgICAgICAgICB2aWV3RmllbGQsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBzYXZlZEZpbHRlcixcbiAgICAgICAgICAgIGRlZmluaXRpb24sXG4gICAgICAgICAgICB2YWxpZGF0b3JzLFxuICAgICAgICAgICAgYXN5bmNWYWxpZGF0b3JzLFxuICAgICAgICAgICAgbGFuZ3VhZ2VcbiAgICAgICAgKTtcbiAgICAgICAgZmllbGQuY3JpdGVyaWEgPSB0aGlzLmluaXRGaWVsZEZpbHRlcihzYXZlZEZpbHRlci5jcml0ZXJpYSwgdmlld0ZpZWxkLCBmaWVsZCk7XG4gICAgICAgIHJldHVybiBmaWVsZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgRmlsdGVyIFZhbGlkYXRvcnMgZm9yIGdpdmVuIGZpZWxkIGRlZmluaXRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZWNvcmQgIFJlY29yZFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB2aWV3RmllbGQgVmlld0ZpZWxkRGVmaW5pdGlvblxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IHZhbGlkYXRvciBtYXBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0RmlsdGVyVmFsaWRhdG9ycyhcbiAgICAgICAgcmVjb3JkOiBTYXZlZEZpbHRlcixcbiAgICAgICAgdmlld0ZpZWxkOiBWaWV3RmllbGREZWZpbml0aW9uXG4gICAgKTogeyB2YWxpZGF0b3JzOiBWYWxpZGF0b3JGbltdOyBhc3luY1ZhbGlkYXRvcnM6IEFzeW5jVmFsaWRhdG9yRm5bXSB9IHtcblxuICAgICAgICBjb25zdCB2YWxpZGF0b3JzID0gdGhpcy52YWxpZGF0aW9uTWFuYWdlci5nZXRGaWx0ZXJWYWxpZGF0aW9ucyhyZWNvcmQuc2VhcmNoTW9kdWxlLCB2aWV3RmllbGQsIHJlY29yZCk7XG4gICAgICAgIGNvbnN0IGFzeW5jVmFsaWRhdG9yczogQXN5bmNWYWxpZGF0b3JGbltdID0gW107XG5cbiAgICAgICAgcmV0dXJuIHt2YWxpZGF0b3JzLCBhc3luY1ZhbGlkYXRvcnN9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXQgZmlsdGVyIGZpZWxkc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHNlYXJjaENyaXRlcmlhIHRvIHVzZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB2aWV3RmllbGQgdG8gaW5pdFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBmaWVsZCB0byBpbml0XG4gICAgICogQHJldHVybnMge29iamVjdH0gU2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlclxuICAgICAqL1xuICAgIHB1YmxpYyBpbml0RmllbGRGaWx0ZXIoc2VhcmNoQ3JpdGVyaWE6IFNlYXJjaENyaXRlcmlhLCB2aWV3RmllbGQ6IFZpZXdGaWVsZERlZmluaXRpb24sIGZpZWxkOiBGaWVsZCk6IFNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIge1xuICAgICAgICBsZXQgZmllbGRDcml0ZXJpYTogU2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlcjtcblxuICAgICAgICBjb25zdCBmaWVsZE5hbWUgPSB2aWV3RmllbGQubmFtZTtcbiAgICAgICAgbGV0IGZpZWxkVHlwZSA9IHZpZXdGaWVsZC50eXBlO1xuICAgICAgICBsZXQgcmFuZ2VTZWFyY2ggPSBmYWxzZTtcblxuICAgICAgICBpZiAoZmllbGRUeXBlID09PSAnY29tcG9zaXRlJykge1xuICAgICAgICAgICAgZmllbGRUeXBlID0gZmllbGQuZGVmaW5pdGlvbi50eXBlO1xuICAgICAgICAgICAgcmFuZ2VTZWFyY2ggPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlYXJjaENyaXRlcmlhLmZpbHRlcnNbZmllbGROYW1lXSAmJiBzZWFyY2hDcml0ZXJpYS5maWx0ZXJzW2ZpZWxkTmFtZV0uZmllbGRUeXBlKSB7XG4gICAgICAgICAgICBmaWVsZENyaXRlcmlhID0gZGVlcENsb25lKHNlYXJjaENyaXRlcmlhLmZpbHRlcnNbZmllbGROYW1lXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmaWVsZENyaXRlcmlhID0ge1xuICAgICAgICAgICAgICAgIGZpZWxkOiBmaWVsZE5hbWUsXG4gICAgICAgICAgICAgICAgZmllbGRUeXBlLFxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiAnJyxcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IFtdXG4gICAgICAgICAgICB9IGFzIFNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBmaWVsZENyaXRlcmlhLnJhbmdlU2VhcmNoID0gcmFuZ2VTZWFyY2g7XG5cbiAgICAgICAgdGhpcy5tYXBFbnVtRW1wdHlPcHRpb24oZmllbGRDcml0ZXJpYSwgZmllbGQpO1xuXG4gICAgICAgIHRoaXMubWFwUmVsYXRlRmllbGRzKGZpZWxkQ3JpdGVyaWEsIGZpZWxkLCBzZWFyY2hDcml0ZXJpYSk7XG5cbiAgICAgICAgcmV0dXJuIGZpZWxkQ3JpdGVyaWE7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG1hcEVudW1FbXB0eU9wdGlvbihmaWVsZENyaXRlcmlhOiBTZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyLCBmaWVsZDogRmllbGQpOiB2b2lkIHtcbiAgICAgICAgaWYgKCFbJ211bHRpZW51bScsICdlbnVtJ10uaW5jbHVkZXMoZmllbGRDcml0ZXJpYS5maWVsZFR5cGUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZW1wdHlPcHRpb24gPSB0aGlzLmdldEVtcHR5T3B0aW9uKGZpZWxkKTtcblxuICAgICAgICBpZiAoIWVtcHR5T3B0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWZpZWxkQ3JpdGVyaWEudmFsdWVzIHx8ICFmaWVsZENyaXRlcmlhLnZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZpZWxkQ3JpdGVyaWEudmFsdWVzID0gZmllbGRDcml0ZXJpYS52YWx1ZXMubWFwKHZhbHVlID0+IHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAnX19TdWl0ZUNSTUVtcHR5U3RyaW5nX18nO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbWFwUmVsYXRlRmllbGRzKGZpZWxkQ3JpdGVyaWE6IFNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIsIGZpZWxkOiBGaWVsZCwgc2VhcmNoQ3JpdGVyaWE6IFNlYXJjaENyaXRlcmlhKTogdm9pZCB7XG4gICAgICAgIGlmICghWydyZWxhdGUnXS5pbmNsdWRlcyhmaWVsZENyaXRlcmlhLmZpZWxkVHlwZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZmllbGRDcml0ZXJpYS52YWx1ZXMgfHwgIWZpZWxkQ3JpdGVyaWEudmFsdWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaWRGaWVsZE5hbWUgPSAoZmllbGQgJiYgZmllbGQuZGVmaW5pdGlvbiAmJiBmaWVsZC5kZWZpbml0aW9uLmlkX25hbWUpIHx8ICcnO1xuICAgICAgICBjb25zdCByZWxhdGVGaWVsZE5hbWUgPSAoZmllbGQgJiYgZmllbGQuZGVmaW5pdGlvbiAmJiBmaWVsZC5kZWZpbml0aW9uLnJuYW1lKSB8fCAnbmFtZSc7XG4gICAgICAgIGNvbnN0IGlkVmFsdWVzID0gc2VhcmNoQ3JpdGVyaWE/LmZpbHRlcnNbaWRGaWVsZE5hbWVdPy52YWx1ZXMgPz8gW107XG5cbiAgICAgICAgZmllbGRDcml0ZXJpYS52YWx1ZU9iamVjdEFycmF5ID0gZmllbGRDcml0ZXJpYS52YWx1ZU9iamVjdEFycmF5ID8/IFtdO1xuICAgICAgICBjb25zdCByZWxhdGVGaWVsZE1hcCA9IHt9O1xuICAgICAgICBpZiAoZmllbGRDcml0ZXJpYS52YWx1ZU9iamVjdEFycmF5Lmxlbmd0aCkge1xuICAgICAgICAgICAgZmllbGRDcml0ZXJpYS52YWx1ZU9iamVjdEFycmF5LmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgIHJlbGF0ZUZpZWxkTWFwW3ZhbHVlLmlkXSA9IHZhbHVlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmllbGRDcml0ZXJpYS52YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IGZpZWxkQ3JpdGVyaWEudmFsdWVzW2ldO1xuXG4gICAgICAgICAgICBjb25zdCByZWxhdGVWYWx1ZSA9IHt9O1xuICAgICAgICAgICAgcmVsYXRlVmFsdWVbcmVsYXRlRmllbGROYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgcmVsYXRlVmFsdWVbJ2lkJ10gPSBpZFZhbHVlc1tpXSA/PyAnJztcblxuICAgICAgICAgICAgaWYgKCFyZWxhdGVGaWVsZE1hcFtyZWxhdGVWYWx1ZVsnaWQnXV0pIHtcbiAgICAgICAgICAgICAgICByZWxhdGVGaWVsZE1hcFtyZWxhdGVWYWx1ZVsnaWQnXV0gPSByZWxhdGVWYWx1ZTtcbiAgICAgICAgICAgICAgICBmaWVsZENyaXRlcmlhLnZhbHVlT2JqZWN0QXJyYXkucHVzaChyZWxhdGVWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0RW1wdHlPcHRpb24oZmllbGQ6IEZpZWxkKTogT3B0aW9uIHtcbiAgICAgICAgbGV0IGVtcHR5T3B0aW9uID0gbnVsbDtcbiAgICAgICAgY29uc3QgZXh0cmFPcHRpb25zID0gZmllbGQ/LmRlZmluaXRpb24/Lm1ldGFkYXRhPy5leHRyYU9wdGlvbnMgPz8gW107XG5cbiAgICAgICAgZXh0cmFPcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgICAgIGlmIChvcHRpb24udmFsdWUgPT09ICdfX1N1aXRlQ1JNRW1wdHlTdHJpbmdfXycpIHtcbiAgICAgICAgICAgICAgICBlbXB0eU9wdGlvbiA9IG9wdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGVtcHR5T3B0aW9uO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElzIGNyaXRlcmlhIGZpZWxkIGluaXRpYWxpemVkIGluIHJlY29yZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlY29yZCBSZWNvcmRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGROYW1lIGZpZWxkXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IGlzSW5pdGlhbGl6ZWRcbiAgICAgKi9cbiAgICBwdWJsaWMgaXNDcml0ZXJpYUZpZWxkSW5pdGlhbGl6ZWQocmVjb3JkOiBTYXZlZEZpbHRlciwgZmllbGROYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgY3JpdGVyaWFGaWVsZCA9IHJlY29yZC5jcml0ZXJpYUZpZWxkc1tmaWVsZE5hbWVdO1xuICAgICAgICByZXR1cm4gISFjcml0ZXJpYUZpZWxkICYmICFjcml0ZXJpYUZpZWxkLnZhcmRlZkJhc2VkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBmaWVsZCB0byBTYXZlZEZpbHRlclxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHNhdmVkRmlsdGVyIFNhdmVkRmlsdGVyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgc3RyaW5nXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGZpZWxkIEZpZWxkXG4gICAgICovXG4gICAgcHVibGljIGFkZFRvU2F2ZWRGaWx0ZXIoc2F2ZWRGaWx0ZXI6IFNhdmVkRmlsdGVyLCBuYW1lOiBzdHJpbmcsIGZpZWxkOiBGaWVsZCk6IHZvaWQge1xuXG4gICAgICAgIGlmICghc2F2ZWRGaWx0ZXIgfHwgIW5hbWUgfHwgIWZpZWxkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXNhdmVkRmlsdGVyLmNyaXRlcmlhRmllbGRzKSB7XG4gICAgICAgICAgICBzYXZlZEZpbHRlci5jcml0ZXJpYUZpZWxkcyA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgc2F2ZWRGaWx0ZXIuY3JpdGVyaWFGaWVsZHNbbmFtZV0gPSBmaWVsZDtcblxuICAgICAgICBpZiAoIXNhdmVkRmlsdGVyLmNyaXRlcmlhLmZpbHRlcnMpIHtcbiAgICAgICAgICAgIHNhdmVkRmlsdGVyLmNyaXRlcmlhLmZpbHRlcnMgPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNhdmVkRmlsdGVyLmNyaXRlcmlhLmZpbHRlcnNbbmFtZV0gPSBmaWVsZC5jcml0ZXJpYTtcblxuICAgICAgICBpZiAoc2F2ZWRGaWx0ZXIuY3JpdGVyaWFGb3JtR3JvdXAgJiYgZmllbGQuZm9ybUNvbnRyb2wpIHtcbiAgICAgICAgICAgIHNhdmVkRmlsdGVyLmNyaXRlcmlhRm9ybUdyb3VwLmFkZENvbnRyb2wobmFtZSwgZmllbGQuZm9ybUNvbnRyb2wpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19