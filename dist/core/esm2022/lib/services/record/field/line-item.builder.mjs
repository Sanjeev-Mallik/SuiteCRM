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
import { deepClone } from '../../../common/utils/object-utils';
import { ValidationManager } from '../validation/validation.manager';
import { DataTypeFormatter } from '../../formatters/data-type.formatter.service';
import { Injectable } from '@angular/core';
import { AttributeBuilder } from './attribute.builder';
import { UntypedFormGroup } from '@angular/forms';
import { FieldObjectRegistry } from "./field-object-type.registry";
import * as i0 from "@angular/core";
import * as i1 from "../validation/validation.manager";
import * as i2 from "../../formatters/data-type.formatter.service";
import * as i3 from "./field-object-type.registry";
export class LineItemBuilder extends AttributeBuilder {
    constructor(validationManager, typeFormatter, fieldRegistry) {
        super(validationManager, typeFormatter, fieldRegistry);
        this.validationManager = validationManager;
        this.typeFormatter = typeFormatter;
        this.fieldRegistry = fieldRegistry;
    }
    /**
     * Create and add attributes fields to field
     *
     * @param {object} record Record
     * @param {object} fields FieldMap
     * @param {object} viewField ViewFieldDefinition
     * @param {object} language LanguageStore
     * @param {function} buildLineItemFunction
     */
    addLineItems(record, fields, viewField, language, buildLineItemFunction) {
        const fieldKeys = Object.keys(fields) || [];
        if (fieldKeys.length < 1) {
            return;
        }
        fieldKeys.forEach(key => {
            const field = fields[key];
            this.addFieldLineItems(record, field, language, buildLineItemFunction);
        });
    }
    /**
     * Create and add attributes fields to field
     *
     * @param {object} record Record
     * @param {object} field Field
     * @param {object} language LanguageStore
     * @param {function} buildLineItemFunction
     */
    addFieldLineItems(record, field, language, buildLineItemFunction) {
        const definition = (field && field.definition) || {};
        const type = (field && field.type) || '';
        const items = (field.valueObjectArray && field.valueObjectArray) || [];
        if (type !== 'line-items' || !items.length) {
            return;
        }
        const itemDefinition = definition.lineItems?.definition || {};
        field.items = [];
        items.forEach(item => {
            this.addLineItem(itemDefinition, item, buildLineItemFunction, language, record, field);
        });
    }
    /**
     * Build line item and and to record
     * @param {object} itemDefinition
     * @param {object }item
     * @param {object} buildLineItemFunction
     * @param {object} language
     * @param {object} parentRecord
     * @param {object} parentField
     */
    addLineItem(itemDefinition, item, buildLineItemFunction, language, parentRecord, parentField) {
        const itemViewField = {
            name: itemDefinition.name,
            label: itemDefinition.vname,
            type: itemDefinition.type,
            fieldDefinition: deepClone(itemDefinition)
        };
        const itemRecord = {
            id: item.id || '',
            type: item.type || '',
            module: item.module || '',
            attributes: item.attributes || {},
            fields: {},
            formGroup: new UntypedFormGroup({})
        };
        buildLineItemFunction(itemRecord, itemViewField, language);
        parentField.itemFormArray.push(itemRecord.formGroup);
        parentField.items.push(itemRecord);
    }
    static { this.ɵfac = function LineItemBuilder_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LineItemBuilder)(i0.ɵɵinject(i1.ValidationManager), i0.ɵɵinject(i2.DataTypeFormatter), i0.ɵɵinject(i3.FieldObjectRegistry)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LineItemBuilder, factory: LineItemBuilder.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LineItemBuilder, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.ValidationManager }, { type: i2.DataTypeFormatter }, { type: i3.FieldObjectRegistry }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS1pdGVtLmJ1aWxkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc2VydmljZXMvcmVjb3JkL2ZpZWxkL2xpbmUtaXRlbS5idWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFLN0QsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDbkUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sOENBQThDLENBQUM7QUFDL0UsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7QUFLakUsTUFBTSxPQUFPLGVBQWdCLFNBQVEsZ0JBQWdCO0lBRWpELFlBQ2MsaUJBQW9DLEVBQ3BDLGFBQWdDLEVBQ2hDLGFBQWtDO1FBRTVDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxhQUFhLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFKN0Msc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxrQkFBYSxHQUFiLGFBQWEsQ0FBbUI7UUFDaEMsa0JBQWEsR0FBYixhQUFhLENBQXFCO0lBR2hELENBQUM7SUFHRDs7Ozs7Ozs7T0FRRztJQUNJLFlBQVksQ0FDZixNQUFjLEVBQ2QsTUFBZ0IsRUFDaEIsU0FBOEIsRUFDOUIsUUFBdUIsRUFDdkIscUJBQStCO1FBRS9CLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRzVDLElBQUksU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUN2QixPQUFPO1FBQ1gsQ0FBQztRQUVELFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDcEIsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxpQkFBaUIsQ0FDbEIsTUFBTSxFQUNOLEtBQUssRUFDTCxRQUFRLEVBQ1IscUJBQXFCLENBQ3hCLENBQUE7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0ksaUJBQWlCLENBQ3BCLE1BQWMsRUFDZCxLQUFZLEVBQ1osUUFBdUIsRUFDdkIscUJBQStCO1FBRy9CLE1BQU0sVUFBVSxHQUFHLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckQsTUFBTSxJQUFJLEdBQUcsQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QyxNQUFNLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFdkUsSUFBSSxJQUFJLEtBQUssWUFBWSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3pDLE9BQU87UUFDWCxDQUFDO1FBRUQsTUFBTSxjQUFjLEdBQW9CLFVBQVUsQ0FBQyxTQUFTLEVBQUUsVUFBVSxJQUFJLEVBQUUsQ0FBQztRQUMvRSxLQUFLLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUVqQixLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLElBQWMsRUFBRSxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3JHLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0ksV0FBVyxDQUNkLGNBQStCLEVBQy9CLElBQVksRUFDWixxQkFBK0IsRUFDL0IsUUFBdUIsRUFDdkIsWUFBb0IsRUFDcEIsV0FBa0I7UUFHbEIsTUFBTSxhQUFhLEdBQUc7WUFDbEIsSUFBSSxFQUFFLGNBQWMsQ0FBQyxJQUFJO1lBQ3pCLEtBQUssRUFBRSxjQUFjLENBQUMsS0FBSztZQUMzQixJQUFJLEVBQUUsY0FBYyxDQUFDLElBQUk7WUFDekIsZUFBZSxFQUFFLFNBQVMsQ0FBQyxjQUFjLENBQUM7U0FDN0MsQ0FBQztRQUVGLE1BQU0sVUFBVSxHQUFHO1lBQ2YsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRTtZQUNqQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFO1lBQ3JCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUU7WUFDekIsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLElBQUksRUFBRTtZQUNqQyxNQUFNLEVBQUUsRUFBRTtZQUNWLFNBQVMsRUFBRSxJQUFJLGdCQUFnQixDQUFDLEVBQUUsQ0FBQztTQUM1QixDQUFDO1FBRVoscUJBQXFCLENBQUMsVUFBVSxFQUFFLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUUzRCxXQUFXLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFckQsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdkMsQ0FBQztnSEFwSFEsZUFBZTt1RUFBZixlQUFlLFdBQWYsZUFBZSxtQkFGWixNQUFNOztpRkFFVCxlQUFlO2NBSDNCLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtkZWVwQ2xvbmV9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy9vYmplY3QtdXRpbHMnO1xuaW1wb3J0IHtGaWVsZCwgRmllbGRNYXAsIEZpZWxkRGVmaW5pdGlvbn0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3JlY29yZC9maWVsZC5tb2RlbCc7XG5pbXBvcnQge1JlY29yZH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3JlY29yZC9yZWNvcmQubW9kZWwnO1xuaW1wb3J0IHtWaWV3RmllbGREZWZpbml0aW9ufSBmcm9tICcuLi8uLi8uLi9jb21tb24vbWV0YWRhdGEvbWV0YWRhdGEubW9kZWwnO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5pbXBvcnQge1ZhbGlkYXRpb25NYW5hZ2VyfSBmcm9tICcuLi92YWxpZGF0aW9uL3ZhbGlkYXRpb24ubWFuYWdlcic7XG5pbXBvcnQge0RhdGFUeXBlRm9ybWF0dGVyfSBmcm9tICcuLi8uLi9mb3JtYXR0ZXJzL2RhdGEtdHlwZS5mb3JtYXR0ZXIuc2VydmljZSc7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBdHRyaWJ1dGVCdWlsZGVyfSBmcm9tICcuL2F0dHJpYnV0ZS5idWlsZGVyJztcbmltcG9ydCB7VW50eXBlZEZvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtGaWVsZE9iamVjdFJlZ2lzdHJ5fSBmcm9tIFwiLi9maWVsZC1vYmplY3QtdHlwZS5yZWdpc3RyeVwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIExpbmVJdGVtQnVpbGRlciBleHRlbmRzIEF0dHJpYnV0ZUJ1aWxkZXIge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCB2YWxpZGF0aW9uTWFuYWdlcjogVmFsaWRhdGlvbk1hbmFnZXIsXG4gICAgICAgIHByb3RlY3RlZCB0eXBlRm9ybWF0dGVyOiBEYXRhVHlwZUZvcm1hdHRlcixcbiAgICAgICAgcHJvdGVjdGVkIGZpZWxkUmVnaXN0cnk6IEZpZWxkT2JqZWN0UmVnaXN0cnlcbiAgICApIHtcbiAgICAgICAgc3VwZXIodmFsaWRhdGlvbk1hbmFnZXIsIHR5cGVGb3JtYXR0ZXIsIGZpZWxkUmVnaXN0cnkpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGFuZCBhZGQgYXR0cmlidXRlcyBmaWVsZHMgdG8gZmllbGRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZWNvcmQgUmVjb3JkXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGZpZWxkcyBGaWVsZE1hcFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB2aWV3RmllbGQgVmlld0ZpZWxkRGVmaW5pdGlvblxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBsYW5ndWFnZSBMYW5ndWFnZVN0b3JlXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gYnVpbGRMaW5lSXRlbUZ1bmN0aW9uXG4gICAgICovXG4gICAgcHVibGljIGFkZExpbmVJdGVtcyhcbiAgICAgICAgcmVjb3JkOiBSZWNvcmQsXG4gICAgICAgIGZpZWxkczogRmllbGRNYXAsXG4gICAgICAgIHZpZXdGaWVsZDogVmlld0ZpZWxkRGVmaW5pdGlvbixcbiAgICAgICAgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIGJ1aWxkTGluZUl0ZW1GdW5jdGlvbjogRnVuY3Rpb24sXG4gICAgKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGZpZWxkS2V5cyA9IE9iamVjdC5rZXlzKGZpZWxkcykgfHwgW107XG5cblxuICAgICAgICBpZiAoZmllbGRLZXlzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZpZWxkS2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWVsZCA9IGZpZWxkc1trZXldO1xuICAgICAgICAgICAgdGhpcy5hZGRGaWVsZExpbmVJdGVtcyhcbiAgICAgICAgICAgICAgICByZWNvcmQsXG4gICAgICAgICAgICAgICAgZmllbGQsXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2UsXG4gICAgICAgICAgICAgICAgYnVpbGRMaW5lSXRlbUZ1bmN0aW9uLFxuICAgICAgICAgICAgKVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhbmQgYWRkIGF0dHJpYnV0ZXMgZmllbGRzIHRvIGZpZWxkXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVjb3JkIFJlY29yZFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBmaWVsZCBGaWVsZFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBsYW5ndWFnZSBMYW5ndWFnZVN0b3JlXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gYnVpbGRMaW5lSXRlbUZ1bmN0aW9uXG4gICAgICovXG4gICAgcHVibGljIGFkZEZpZWxkTGluZUl0ZW1zKFxuICAgICAgICByZWNvcmQ6IFJlY29yZCxcbiAgICAgICAgZmllbGQ6IEZpZWxkLFxuICAgICAgICBsYW5ndWFnZTogTGFuZ3VhZ2VTdG9yZSxcbiAgICAgICAgYnVpbGRMaW5lSXRlbUZ1bmN0aW9uOiBGdW5jdGlvbixcbiAgICApOiB2b2lkIHtcblxuICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gKGZpZWxkICYmIGZpZWxkLmRlZmluaXRpb24pIHx8IHt9O1xuICAgICAgICBjb25zdCB0eXBlID0gKGZpZWxkICYmIGZpZWxkLnR5cGUpIHx8ICcnO1xuICAgICAgICBjb25zdCBpdGVtcyA9IChmaWVsZC52YWx1ZU9iamVjdEFycmF5ICYmIGZpZWxkLnZhbHVlT2JqZWN0QXJyYXkpIHx8IFtdO1xuXG4gICAgICAgIGlmICh0eXBlICE9PSAnbGluZS1pdGVtcycgfHwgIWl0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXRlbURlZmluaXRpb246IEZpZWxkRGVmaW5pdGlvbiA9IGRlZmluaXRpb24ubGluZUl0ZW1zPy5kZWZpbml0aW9uIHx8IHt9O1xuICAgICAgICBmaWVsZC5pdGVtcyA9IFtdO1xuXG4gICAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZExpbmVJdGVtKGl0ZW1EZWZpbml0aW9uLCBpdGVtIGFzIFJlY29yZCwgYnVpbGRMaW5lSXRlbUZ1bmN0aW9uLCBsYW5ndWFnZSwgcmVjb3JkLCBmaWVsZCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIGxpbmUgaXRlbSBhbmQgYW5kIHRvIHJlY29yZFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBpdGVtRGVmaW5pdGlvblxuICAgICAqIEBwYXJhbSB7b2JqZWN0IH1pdGVtXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGJ1aWxkTGluZUl0ZW1GdW5jdGlvblxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBsYW5ndWFnZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJlbnRSZWNvcmRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcGFyZW50RmllbGRcbiAgICAgKi9cbiAgICBwdWJsaWMgYWRkTGluZUl0ZW0oXG4gICAgICAgIGl0ZW1EZWZpbml0aW9uOiBGaWVsZERlZmluaXRpb24sXG4gICAgICAgIGl0ZW06IFJlY29yZCxcbiAgICAgICAgYnVpbGRMaW5lSXRlbUZ1bmN0aW9uOiBGdW5jdGlvbixcbiAgICAgICAgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHBhcmVudFJlY29yZDogUmVjb3JkLFxuICAgICAgICBwYXJlbnRGaWVsZDogRmllbGRcbiAgICApIHtcblxuICAgICAgICBjb25zdCBpdGVtVmlld0ZpZWxkID0ge1xuICAgICAgICAgICAgbmFtZTogaXRlbURlZmluaXRpb24ubmFtZSxcbiAgICAgICAgICAgIGxhYmVsOiBpdGVtRGVmaW5pdGlvbi52bmFtZSxcbiAgICAgICAgICAgIHR5cGU6IGl0ZW1EZWZpbml0aW9uLnR5cGUsXG4gICAgICAgICAgICBmaWVsZERlZmluaXRpb246IGRlZXBDbG9uZShpdGVtRGVmaW5pdGlvbilcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBpdGVtUmVjb3JkID0ge1xuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQgfHwgJycsXG4gICAgICAgICAgICB0eXBlOiBpdGVtLnR5cGUgfHwgJycsXG4gICAgICAgICAgICBtb2R1bGU6IGl0ZW0ubW9kdWxlIHx8ICcnLFxuICAgICAgICAgICAgYXR0cmlidXRlczogaXRlbS5hdHRyaWJ1dGVzIHx8IHt9LFxuICAgICAgICAgICAgZmllbGRzOiB7fSxcbiAgICAgICAgICAgIGZvcm1Hcm91cDogbmV3IFVudHlwZWRGb3JtR3JvdXAoe30pXG4gICAgICAgIH0gYXMgUmVjb3JkO1xuXG4gICAgICAgIGJ1aWxkTGluZUl0ZW1GdW5jdGlvbihpdGVtUmVjb3JkLCBpdGVtVmlld0ZpZWxkLCBsYW5ndWFnZSk7XG5cbiAgICAgICAgcGFyZW50RmllbGQuaXRlbUZvcm1BcnJheS5wdXNoKGl0ZW1SZWNvcmQuZm9ybUdyb3VwKTtcblxuICAgICAgICBwYXJlbnRGaWVsZC5pdGVtcy5wdXNoKGl0ZW1SZWNvcmQpO1xuICAgIH1cbn1cbiJdfQ==