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
import { isEmpty } from 'lodash-es';
import { LanguageStore } from '../../../store/language/language.store';
import { Injectable, signal } from '@angular/core';
import { FieldBuilder } from './field.builder';
import { GroupFieldBuilder } from './group-field.builder';
import { AttributeBuilder } from './attribute.builder';
import { FilterFieldBuilder } from './filter-field.builder';
import { FilterAttributeBuilder } from './filter-attribute.builder';
import { LineItemBuilder } from './line-item.builder';
import { UntypedFormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "./field.builder";
import * as i2 from "./group-field.builder";
import * as i3 from "./attribute.builder";
import * as i4 from "./filter-field.builder";
import * as i5 from "./filter-attribute.builder";
import * as i6 from "./line-item.builder";
import * as i7 from "../../../store/language/language.store";
export class FieldManager {
    constructor(fieldBuilder, groupFieldBuilder, attributeBuilder, filterFieldBuilder, filterAttributeBuilder, lineItemBuilder, languageStore) {
        this.fieldBuilder = fieldBuilder;
        this.groupFieldBuilder = groupFieldBuilder;
        this.attributeBuilder = attributeBuilder;
        this.filterFieldBuilder = filterFieldBuilder;
        this.filterAttributeBuilder = filterAttributeBuilder;
        this.lineItemBuilder = lineItemBuilder;
        this.languageStore = languageStore;
    }
    /**
     * Build minimally initialised field object
     *
     * @param {string} type field type
     * @param {string} value field value
     * @returns {object} Field
     */
    buildShallowField(type, value) {
        return {
            type,
            value,
            definition: {
                type
            },
            loading: signal(false),
            display: signal('default')
        };
    }
    /**
     * Build and add field to record
     *
     * @param {object} record Record
     * @param {object} viewField ViewFieldDefinition
     * @param {object} language LanguageStore
     * @returns {object}Field
     */
    addField(record, viewField, language = null) {
        const field = this.fieldBuilder.buildField(record, viewField, language);
        this.addToRecord(record, viewField.name, field);
        this.groupFieldBuilder.addGroupFields(record, viewField, language, this.isFieldInitialized.bind(this), this.fieldBuilder.buildField.bind(this.fieldBuilder), this.addToRecord.bind(this));
        this.attributeBuilder.addAttributes(record, record.fields, viewField, language, this.attributeBuilder.buildAttribute.bind(this.attributeBuilder), this.attributeBuilder.addAttributeToRecord.bind(this.attributeBuilder));
        this.lineItemBuilder.addLineItems(record, record.fields, viewField, language, this.addField.bind(this));
        return field;
    }
    /**
     * Build and add filter field to record
     *
     * @param {object} record Record
     * @param {object} viewField ViewFieldDefinition
     * @param {object} language LanguageStore
     * @returns {object}Field
     */
    addFilterField(record, viewField, language = null) {
        if (viewField.vardefBased && !isEmpty(record.criteriaFields[viewField.name])) {
            return record.criteriaFields[viewField.name];
        }
        const field = this.filterFieldBuilder.buildFilterField(record, viewField, language);
        this.filterFieldBuilder.addToSavedFilter(record, viewField.name, field);
        this.groupFieldBuilder.addGroupFields(record, viewField, language, this.filterFieldBuilder.isCriteriaFieldInitialized.bind(this.filterFieldBuilder), this.filterFieldBuilder.buildFilterField.bind(this.filterFieldBuilder), this.filterFieldBuilder.addToSavedFilter.bind(this.filterFieldBuilder));
        this.attributeBuilder.addAttributes(record, record.criteriaFields, viewField, language, this.filterAttributeBuilder.buildFilterAttribute.bind(this.filterAttributeBuilder), this.filterAttributeBuilder.addAttributeToSavedFilter.bind(this.filterAttributeBuilder));
        return field;
    }
    /**
     * Build line item and add to record
     *
     * @param {FieldDefinition} itemDefinition Item Definition
     * @param {Record} parentRecord Parent Record
     * @param {Field} parentField Parent Field
     * @param {Record | null} item Item
     */
    addLineItem(itemDefinition, parentRecord, parentField, item = null) {
        if (!item) {
            item = {
                id: '',
                module: parentField.definition.module || '',
                attributes: {},
                fields: {},
                formGroup: new UntypedFormGroup({}),
            };
        }
        this.lineItemBuilder.addLineItem(itemDefinition, item, this.addField.bind(this), this.languageStore, parentRecord, parentField);
        parentField.itemFormArray.updateValueAndValidity();
    }
    /**
     * Remove line item
     *
     * @param {Field} parentField Parent Field
     * @param {number} index Index
     */
    removeLineItem(parentField, index) {
        const item = parentField.items[index];
        if (!item) {
            return;
        }
        item.attributes.deleted = 1;
        parentField.itemFormArray.clear();
        parentField.items.forEach(parentItem => {
            const deleted = parentItem && parentItem.attributes && parentItem.attributes.deleted;
            if (!parentItem || deleted) {
                return;
            }
            parentField.itemFormArray.push(parentItem.formGroup);
        });
        parentField.itemFormArray.updateValueAndValidity();
    }
    /**
     * Add field to record
     *
     * @param {object} record Record
     * @param {string} name string
     * @param {object} field Field
     */
    addToRecord(record, name, field) {
        if (!record || !name || !field) {
            return;
        }
        if (!record.fields) {
            record.fields = {};
        }
        record.fields[name] = field;
        if (record.formGroup && field.itemFormArray) {
            record.formGroup.addControl(name + '-items', field.itemFormArray);
        }
        if (record.formGroup && field.formControl) {
            record.formGroup.addControl(name, field.formControl);
        }
    }
    /**
     * Build and add vardef only field to record
     *
     * @param {object} record Record
     * @param {object} viewField ViewFieldDefinition
     * @param {object} language LanguageStore
     * @returns {object}Field
     */
    addVardefOnlyField(record, viewField, language = null) {
        const field = this.fieldBuilder.buildField(record, viewField, language);
        this.addVardefOnlyFieldToRecord(record, viewField.name, field);
        return field;
    }
    /**
     * Add field to record
     *
     * @param {object} record Record
     * @param {string} name string
     * @param {object} field Field
     */
    addVardefOnlyFieldToRecord(record, name, field) {
        if (!record || !name || !field) {
            return;
        }
        if (!record.fields) {
            record.fields = {};
        }
        record.fields[name] = field;
    }
    /**
     * Is field initialized in record
     *
     * @param {object} record Record
     * @param {string} fieldName field
     * @returns {boolean} isInitialized
     */
    isFieldInitialized(record, fieldName) {
        return !!record.fields[fieldName];
    }
    static { this.ɵfac = function FieldManager_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FieldManager)(i0.ɵɵinject(i1.FieldBuilder), i0.ɵɵinject(i2.GroupFieldBuilder), i0.ɵɵinject(i3.AttributeBuilder), i0.ɵɵinject(i4.FilterFieldBuilder), i0.ɵɵinject(i5.FilterAttributeBuilder), i0.ɵɵinject(i6.LineItemBuilder), i0.ɵɵinject(i7.LanguageStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FieldManager, factory: FieldManager.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FieldManager, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.FieldBuilder }, { type: i2.GroupFieldBuilder }, { type: i3.AttributeBuilder }, { type: i4.FilterFieldBuilder }, { type: i5.FilterAttributeBuilder }, { type: i6.LineItemBuilder }, { type: i7.LanguageStore }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQubWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9zZXJ2aWNlcy9yZWNvcmQvZmllbGQvZmllbGQubWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUlsQyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0NBQXdDLENBQUM7QUFDckUsT0FBTyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3hELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3JELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQ2xFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7O0FBS2hELE1BQU0sT0FBTyxZQUFZO0lBRXJCLFlBQ2MsWUFBMEIsRUFDMUIsaUJBQW9DLEVBQ3BDLGdCQUFrQyxFQUNsQyxrQkFBc0MsRUFDdEMsc0JBQThDLEVBQzlDLGVBQWdDLEVBQ2hDLGFBQTRCO1FBTjVCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FB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RUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge2lzRW1wdHl9IGZyb20gJ2xvZGFzaC1lcyc7XG5pbXBvcnQge0ZpZWxkLCBGaWVsZERlZmluaXRpb259IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9yZWNvcmQvZmllbGQubW9kZWwnO1xuaW1wb3J0IHtSZWNvcmR9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9yZWNvcmQvcmVjb3JkLm1vZGVsJztcbmltcG9ydCB7Vmlld0ZpZWxkRGVmaW5pdGlvbn0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL21ldGFkYXRhL21ldGFkYXRhLm1vZGVsJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZX0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtJbmplY3RhYmxlLCBzaWduYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTYXZlZEZpbHRlcn0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvc2F2ZWQtZmlsdGVycy9zYXZlZC1maWx0ZXIubW9kZWwnO1xuaW1wb3J0IHtGaWVsZEJ1aWxkZXJ9IGZyb20gJy4vZmllbGQuYnVpbGRlcic7XG5pbXBvcnQge0dyb3VwRmllbGRCdWlsZGVyfSBmcm9tICcuL2dyb3VwLWZpZWxkLmJ1aWxkZXInO1xuaW1wb3J0IHtBdHRyaWJ1dGVCdWlsZGVyfSBmcm9tICcuL2F0dHJpYnV0ZS5idWlsZGVyJztcbmltcG9ydCB7RmlsdGVyRmllbGRCdWlsZGVyfSBmcm9tICcuL2ZpbHRlci1maWVsZC5idWlsZGVyJztcbmltcG9ydCB7RmlsdGVyQXR0cmlidXRlQnVpbGRlcn0gZnJvbSAnLi9maWx0ZXItYXR0cmlidXRlLmJ1aWxkZXInO1xuaW1wb3J0IHtMaW5lSXRlbUJ1aWxkZXJ9IGZyb20gJy4vbGluZS1pdGVtLmJ1aWxkZXInO1xuaW1wb3J0IHtVbnR5cGVkRm9ybUdyb3VwfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRmllbGRNYW5hZ2VyIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgZmllbGRCdWlsZGVyOiBGaWVsZEJ1aWxkZXIsXG4gICAgICAgIHByb3RlY3RlZCBncm91cEZpZWxkQnVpbGRlcjogR3JvdXBGaWVsZEJ1aWxkZXIsXG4gICAgICAgIHByb3RlY3RlZCBhdHRyaWJ1dGVCdWlsZGVyOiBBdHRyaWJ1dGVCdWlsZGVyLFxuICAgICAgICBwcm90ZWN0ZWQgZmlsdGVyRmllbGRCdWlsZGVyOiBGaWx0ZXJGaWVsZEJ1aWxkZXIsXG4gICAgICAgIHByb3RlY3RlZCBmaWx0ZXJBdHRyaWJ1dGVCdWlsZGVyOiBGaWx0ZXJBdHRyaWJ1dGVCdWlsZGVyLFxuICAgICAgICBwcm90ZWN0ZWQgbGluZUl0ZW1CdWlsZGVyOiBMaW5lSXRlbUJ1aWxkZXIsXG4gICAgICAgIHByb3RlY3RlZCBsYW5ndWFnZVN0b3JlOiBMYW5ndWFnZVN0b3JlXG4gICAgKSB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGQgbWluaW1hbGx5IGluaXRpYWxpc2VkIGZpZWxkIG9iamVjdFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgZmllbGQgdHlwZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBmaWVsZCB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IEZpZWxkXG4gICAgICovXG4gICAgcHVibGljIGJ1aWxkU2hhbGxvd0ZpZWxkKHR5cGU6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IEZpZWxkIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIGRlZmluaXRpb246IHtcbiAgICAgICAgICAgICAgICB0eXBlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbG9hZGluZzogc2lnbmFsKGZhbHNlKSxcbiAgICAgICAgICAgIGRpc3BsYXk6IHNpZ25hbCgnZGVmYXVsdCcpXG4gICAgICAgIH0gYXMgRmllbGQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGQgYW5kIGFkZCBmaWVsZCB0byByZWNvcmRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZWNvcmQgUmVjb3JkXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHZpZXdGaWVsZCBWaWV3RmllbGREZWZpbml0aW9uXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGxhbmd1YWdlIExhbmd1YWdlU3RvcmVcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fUZpZWxkXG4gICAgICovXG4gICAgcHVibGljIGFkZEZpZWxkKHJlY29yZDogUmVjb3JkLCB2aWV3RmllbGQ6IFZpZXdGaWVsZERlZmluaXRpb24sIGxhbmd1YWdlOiBMYW5ndWFnZVN0b3JlID0gbnVsbCk6IEZpZWxkIHtcblxuICAgICAgICBjb25zdCBmaWVsZCA9IHRoaXMuZmllbGRCdWlsZGVyLmJ1aWxkRmllbGQocmVjb3JkLCB2aWV3RmllbGQsIGxhbmd1YWdlKTtcblxuICAgICAgICB0aGlzLmFkZFRvUmVjb3JkKHJlY29yZCwgdmlld0ZpZWxkLm5hbWUsIGZpZWxkKTtcbiAgICAgICAgdGhpcy5ncm91cEZpZWxkQnVpbGRlci5hZGRHcm91cEZpZWxkcyhcbiAgICAgICAgICAgIHJlY29yZCxcbiAgICAgICAgICAgIHZpZXdGaWVsZCxcbiAgICAgICAgICAgIGxhbmd1YWdlLFxuICAgICAgICAgICAgdGhpcy5pc0ZpZWxkSW5pdGlhbGl6ZWQuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIHRoaXMuZmllbGRCdWlsZGVyLmJ1aWxkRmllbGQuYmluZCh0aGlzLmZpZWxkQnVpbGRlciksXG4gICAgICAgICAgICB0aGlzLmFkZFRvUmVjb3JkLmJpbmQodGhpcylcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmF0dHJpYnV0ZUJ1aWxkZXIuYWRkQXR0cmlidXRlcyhcbiAgICAgICAgICAgIHJlY29yZCxcbiAgICAgICAgICAgIHJlY29yZC5maWVsZHMsXG4gICAgICAgICAgICB2aWV3RmllbGQsXG4gICAgICAgICAgICBsYW5ndWFnZSxcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlQnVpbGRlci5idWlsZEF0dHJpYnV0ZS5iaW5kKHRoaXMuYXR0cmlidXRlQnVpbGRlciksXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZUJ1aWxkZXIuYWRkQXR0cmlidXRlVG9SZWNvcmQuYmluZCh0aGlzLmF0dHJpYnV0ZUJ1aWxkZXIpXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5saW5lSXRlbUJ1aWxkZXIuYWRkTGluZUl0ZW1zKFxuICAgICAgICAgICAgcmVjb3JkLFxuICAgICAgICAgICAgcmVjb3JkLmZpZWxkcyxcbiAgICAgICAgICAgIHZpZXdGaWVsZCxcbiAgICAgICAgICAgIGxhbmd1YWdlLFxuICAgICAgICAgICAgdGhpcy5hZGRGaWVsZC5iaW5kKHRoaXMpLFxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBmaWVsZDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIGFuZCBhZGQgZmlsdGVyIGZpZWxkIHRvIHJlY29yZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlY29yZCBSZWNvcmRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdmlld0ZpZWxkIFZpZXdGaWVsZERlZmluaXRpb25cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbGFuZ3VhZ2UgTGFuZ3VhZ2VTdG9yZVxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9RmllbGRcbiAgICAgKi9cbiAgICBwdWJsaWMgYWRkRmlsdGVyRmllbGQocmVjb3JkOiBTYXZlZEZpbHRlciwgdmlld0ZpZWxkOiBWaWV3RmllbGREZWZpbml0aW9uLCBsYW5ndWFnZTogTGFuZ3VhZ2VTdG9yZSA9IG51bGwpOiBGaWVsZCB7XG4gICAgICAgIGlmICh2aWV3RmllbGQudmFyZGVmQmFzZWQgJiYgIWlzRW1wdHkocmVjb3JkLmNyaXRlcmlhRmllbGRzW3ZpZXdGaWVsZC5uYW1lXSkpIHtcbiAgICAgICAgICAgIHJldHVybiByZWNvcmQuY3JpdGVyaWFGaWVsZHNbdmlld0ZpZWxkLm5hbWVdO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmllbGQgPSB0aGlzLmZpbHRlckZpZWxkQnVpbGRlci5idWlsZEZpbHRlckZpZWxkKHJlY29yZCwgdmlld0ZpZWxkLCBsYW5ndWFnZSk7XG5cbiAgICAgICAgdGhpcy5maWx0ZXJGaWVsZEJ1aWxkZXIuYWRkVG9TYXZlZEZpbHRlcihyZWNvcmQsIHZpZXdGaWVsZC5uYW1lLCBmaWVsZCk7XG4gICAgICAgIHRoaXMuZ3JvdXBGaWVsZEJ1aWxkZXIuYWRkR3JvdXBGaWVsZHMoXG4gICAgICAgICAgICByZWNvcmQsXG4gICAgICAgICAgICB2aWV3RmllbGQsXG4gICAgICAgICAgICBsYW5ndWFnZSxcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyRmllbGRCdWlsZGVyLmlzQ3JpdGVyaWFGaWVsZEluaXRpYWxpemVkLmJpbmQodGhpcy5maWx0ZXJGaWVsZEJ1aWxkZXIpLFxuICAgICAgICAgICAgdGhpcy5maWx0ZXJGaWVsZEJ1aWxkZXIuYnVpbGRGaWx0ZXJGaWVsZC5iaW5kKHRoaXMuZmlsdGVyRmllbGRCdWlsZGVyKSxcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyRmllbGRCdWlsZGVyLmFkZFRvU2F2ZWRGaWx0ZXIuYmluZCh0aGlzLmZpbHRlckZpZWxkQnVpbGRlcilcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmF0dHJpYnV0ZUJ1aWxkZXIuYWRkQXR0cmlidXRlcyhcbiAgICAgICAgICAgIHJlY29yZCxcbiAgICAgICAgICAgIHJlY29yZC5jcml0ZXJpYUZpZWxkcyxcbiAgICAgICAgICAgIHZpZXdGaWVsZCxcbiAgICAgICAgICAgIGxhbmd1YWdlLFxuICAgICAgICAgICAgdGhpcy5maWx0ZXJBdHRyaWJ1dGVCdWlsZGVyLmJ1aWxkRmlsdGVyQXR0cmlidXRlLmJpbmQodGhpcy5maWx0ZXJBdHRyaWJ1dGVCdWlsZGVyKSxcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyQXR0cmlidXRlQnVpbGRlci5hZGRBdHRyaWJ1dGVUb1NhdmVkRmlsdGVyLmJpbmQodGhpcy5maWx0ZXJBdHRyaWJ1dGVCdWlsZGVyKVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBmaWVsZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCBsaW5lIGl0ZW0gYW5kIGFkZCB0byByZWNvcmRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RmllbGREZWZpbml0aW9ufSBpdGVtRGVmaW5pdGlvbiBJdGVtIERlZmluaXRpb25cbiAgICAgKiBAcGFyYW0ge1JlY29yZH0gcGFyZW50UmVjb3JkIFBhcmVudCBSZWNvcmRcbiAgICAgKiBAcGFyYW0ge0ZpZWxkfSBwYXJlbnRGaWVsZCBQYXJlbnQgRmllbGRcbiAgICAgKiBAcGFyYW0ge1JlY29yZCB8IG51bGx9IGl0ZW0gSXRlbVxuICAgICAqL1xuICAgIHB1YmxpYyBhZGRMaW5lSXRlbShcbiAgICAgICAgaXRlbURlZmluaXRpb246IEZpZWxkRGVmaW5pdGlvbixcbiAgICAgICAgcGFyZW50UmVjb3JkOiBSZWNvcmQsXG4gICAgICAgIHBhcmVudEZpZWxkOiBGaWVsZCxcbiAgICAgICAgaXRlbTogUmVjb3JkID0gbnVsbFxuICAgICk6IHZvaWQge1xuICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICAgIGl0ZW0gPSB7XG4gICAgICAgICAgICAgICAgaWQ6ICcnLFxuICAgICAgICAgICAgICAgIG1vZHVsZTogcGFyZW50RmllbGQuZGVmaW5pdGlvbi5tb2R1bGUgfHwgJycsXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczoge30sXG4gICAgICAgICAgICAgICAgZmllbGRzOiB7fSxcbiAgICAgICAgICAgICAgICBmb3JtR3JvdXA6IG5ldyBVbnR5cGVkRm9ybUdyb3VwKHt9KSxcbiAgICAgICAgICAgIH0gYXMgUmVjb3JkO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5saW5lSXRlbUJ1aWxkZXIuYWRkTGluZUl0ZW0oXG4gICAgICAgICAgICBpdGVtRGVmaW5pdGlvbixcbiAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICB0aGlzLmFkZEZpZWxkLmJpbmQodGhpcyksXG4gICAgICAgICAgICB0aGlzLmxhbmd1YWdlU3RvcmUsXG4gICAgICAgICAgICBwYXJlbnRSZWNvcmQsXG4gICAgICAgICAgICBwYXJlbnRGaWVsZFxuICAgICAgICApO1xuXG4gICAgICAgIHBhcmVudEZpZWxkLml0ZW1Gb3JtQXJyYXkudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBsaW5lIGl0ZW1cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RmllbGR9IHBhcmVudEZpZWxkIFBhcmVudCBGaWVsZFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBJbmRleFxuICAgICAqL1xuICAgIHB1YmxpYyByZW1vdmVMaW5lSXRlbShwYXJlbnRGaWVsZDogRmllbGQsIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IHBhcmVudEZpZWxkLml0ZW1zW2luZGV4XTtcblxuICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGl0ZW0uYXR0cmlidXRlcy5kZWxldGVkID0gMTtcblxuICAgICAgICBwYXJlbnRGaWVsZC5pdGVtRm9ybUFycmF5LmNsZWFyKCk7XG5cbiAgICAgICAgcGFyZW50RmllbGQuaXRlbXMuZm9yRWFjaChwYXJlbnRJdGVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZWQgPSBwYXJlbnRJdGVtICYmIHBhcmVudEl0ZW0uYXR0cmlidXRlcyAmJiBwYXJlbnRJdGVtLmF0dHJpYnV0ZXMuZGVsZXRlZDtcbiAgICAgICAgICAgIGlmICghcGFyZW50SXRlbSB8fCBkZWxldGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwYXJlbnRGaWVsZC5pdGVtRm9ybUFycmF5LnB1c2gocGFyZW50SXRlbS5mb3JtR3JvdXApO1xuICAgICAgICB9KTtcblxuICAgICAgICBwYXJlbnRGaWVsZC5pdGVtRm9ybUFycmF5LnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEFkZCBmaWVsZCB0byByZWNvcmRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZWNvcmQgUmVjb3JkXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgc3RyaW5nXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGZpZWxkIEZpZWxkXG4gICAgICovXG4gICAgcHVibGljIGFkZFRvUmVjb3JkKHJlY29yZDogUmVjb3JkLCBuYW1lOiBzdHJpbmcsIGZpZWxkOiBGaWVsZCk6IHZvaWQge1xuXG4gICAgICAgIGlmICghcmVjb3JkIHx8ICFuYW1lIHx8ICFmaWVsZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFyZWNvcmQuZmllbGRzKSB7XG4gICAgICAgICAgICByZWNvcmQuZmllbGRzID0ge307XG4gICAgICAgIH1cblxuICAgICAgICByZWNvcmQuZmllbGRzW25hbWVdID0gZmllbGQ7XG5cbiAgICAgICAgaWYgKHJlY29yZC5mb3JtR3JvdXAgJiYgZmllbGQuaXRlbUZvcm1BcnJheSkge1xuICAgICAgICAgICAgcmVjb3JkLmZvcm1Hcm91cC5hZGRDb250cm9sKG5hbWUgKyAnLWl0ZW1zJywgZmllbGQuaXRlbUZvcm1BcnJheSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVjb3JkLmZvcm1Hcm91cCAmJiBmaWVsZC5mb3JtQ29udHJvbCkge1xuICAgICAgICAgICAgcmVjb3JkLmZvcm1Hcm91cC5hZGRDb250cm9sKG5hbWUsIGZpZWxkLmZvcm1Db250cm9sKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQnVpbGQgYW5kIGFkZCB2YXJkZWYgb25seSBmaWVsZCB0byByZWNvcmRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZWNvcmQgUmVjb3JkXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHZpZXdGaWVsZCBWaWV3RmllbGREZWZpbml0aW9uXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGxhbmd1YWdlIExhbmd1YWdlU3RvcmVcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fUZpZWxkXG4gICAgICovXG4gICAgcHVibGljIGFkZFZhcmRlZk9ubHlGaWVsZChyZWNvcmQ6IFJlY29yZCwgdmlld0ZpZWxkOiBWaWV3RmllbGREZWZpbml0aW9uLCBsYW5ndWFnZTogTGFuZ3VhZ2VTdG9yZSA9IG51bGwpOiBGaWVsZCB7XG5cbiAgICAgICAgY29uc3QgZmllbGQgPSB0aGlzLmZpZWxkQnVpbGRlci5idWlsZEZpZWxkKHJlY29yZCwgdmlld0ZpZWxkLCBsYW5ndWFnZSk7XG5cbiAgICAgICAgdGhpcy5hZGRWYXJkZWZPbmx5RmllbGRUb1JlY29yZChyZWNvcmQsIHZpZXdGaWVsZC5uYW1lLCBmaWVsZCk7XG5cbiAgICAgICAgcmV0dXJuIGZpZWxkO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQWRkIGZpZWxkIHRvIHJlY29yZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlY29yZCBSZWNvcmRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBzdHJpbmdcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZmllbGQgRmllbGRcbiAgICAgKi9cbiAgICBwdWJsaWMgYWRkVmFyZGVmT25seUZpZWxkVG9SZWNvcmQocmVjb3JkOiBSZWNvcmQsIG5hbWU6IHN0cmluZywgZmllbGQ6IEZpZWxkKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKCFyZWNvcmQgfHwgIW5hbWUgfHwgIWZpZWxkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXJlY29yZC5maWVsZHMpIHtcbiAgICAgICAgICAgIHJlY29yZC5maWVsZHMgPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlY29yZC5maWVsZHNbbmFtZV0gPSBmaWVsZDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIElzIGZpZWxkIGluaXRpYWxpemVkIGluIHJlY29yZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlY29yZCBSZWNvcmRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGROYW1lIGZpZWxkXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IGlzSW5pdGlhbGl6ZWRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgaXNGaWVsZEluaXRpYWxpemVkKHJlY29yZDogUmVjb3JkLCBmaWVsZE5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gISFyZWNvcmQuZmllbGRzW2ZpZWxkTmFtZV07XG4gICAgfVxuXG59XG4iXX0=