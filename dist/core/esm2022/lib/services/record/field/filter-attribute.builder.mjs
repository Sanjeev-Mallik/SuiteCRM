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
import { Injectable } from '@angular/core';
import { ValidationManager } from '../validation/validation.manager';
import { DataTypeFormatter } from '../../formatters/data-type.formatter.service';
import { FilterFieldBuilder } from './filter-field.builder';
import isObjectLike from 'lodash-es/isObjectLike';
import { FieldObjectRegistry } from "./field-object-type.registry";
import * as i0 from "@angular/core";
import * as i1 from "../validation/validation.manager";
import * as i2 from "../../formatters/data-type.formatter.service";
import * as i3 from "./field-object-type.registry";
export class FilterAttributeBuilder extends FilterFieldBuilder {
    constructor(validationManager, typeFormatter, fieldRegistry) {
        super(validationManager, typeFormatter, fieldRegistry);
        this.validationManager = validationManager;
        this.typeFormatter = typeFormatter;
        this.fieldRegistry = fieldRegistry;
    }
    /**
     * Build filter attribute
     *
     * @param {object} savedFilter SavedFilter
     * @param {object} parentField Field
     * @param {object} viewField ViewFieldDefinition
     * @param {object} language LanguageStore
     * @returns {object} FieldAttribute
     */
    buildFilterAttribute(savedFilter, parentField, viewField, language = null) {
        const definition = (viewField && viewField.fieldDefinition) || {};
        if (!definition.valuePath) {
            definition.valuePath = 'criteria.' + (viewField.name || definition.name);
        }
        const { value, valueList, valueObject } = this.parseFilterAttributeValue(viewField, definition, savedFilter, parentField);
        const { validators, asyncValidators } = this.getFilterValidators(savedFilter, viewField);
        const field = this.setupField(savedFilter.searchModule, viewField, value, valueList, valueObject, savedFilter, definition, validators, asyncValidators, language);
        const fieldAttribute = field;
        fieldAttribute.valuePath = definition.valuePath;
        fieldAttribute.source = 'attribute';
        fieldAttribute.parentKey = parentField.definition.name;
        return fieldAttribute;
    }
    /**
     * Add attribute to SavedFilter
     *
     * @param {object} savedFilter SavedFilter
     * @param {object} field Field
     * @param {string} name string
     * @param {object} attribute FieldAttribute
     */
    addAttributeToSavedFilter(savedFilter, field, name, attribute) {
        if (!savedFilter || !name || !field || !attribute) {
            return;
        }
        field.attributes = field.attributes || {};
        field.attributes[name] = attribute;
        if (savedFilter.criteriaFormGroup && attribute.formControl) {
            savedFilter.criteriaFormGroup.addControl(name, attribute.formControl);
        }
    }
    /**
     * Parse filter attribute from field
     *
     * @param {object} viewField ViewFieldDefinition
     * @param {object} definition FieldDefinition
     * @param {object} record Record
     * @param {object} field Field
     * @returns {object} value object
     */
    parseFilterAttributeValue(viewField, definition, record, field) {
        const viewName = viewField.name || '';
        let value;
        if (!viewName) {
            value = '';
        }
        else {
            value = this.getParentValue(record, field, viewName, definition);
        }
        if (Array.isArray(value)) {
            return {
                value: null,
                valueList: value,
                valueObject: null
            };
        }
        if (isObjectLike(value)) {
            return {
                value: null,
                valueList: null,
                valueObject: value
            };
        }
        return { value, valueList: null, valueObject: null };
    }
    static { this.ɵfac = function FilterAttributeBuilder_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FilterAttributeBuilder)(i0.ɵɵinject(i1.ValidationManager), i0.ɵɵinject(i2.DataTypeFormatter), i0.ɵɵinject(i3.FieldObjectRegistry)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FilterAttributeBuilder, factory: FilterAttributeBuilder.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilterAttributeBuilder, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.ValidationManager }, { type: i2.DataTypeFormatter }, { type: i3.FieldObjectRegistry }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWF0dHJpYnV0ZS5idWlsZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3NlcnZpY2VzL3JlY29yZC9maWVsZC9maWx0ZXItYXR0cmlidXRlLmJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDbkUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sOENBQThDLENBQUM7QUFNL0UsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxZQUFZLE1BQU0sd0JBQXdCLENBQUM7QUFDbEQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sOEJBQThCLENBQUM7Ozs7O0FBS2pFLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxrQkFBa0I7SUFFMUQsWUFDYyxpQkFBb0MsRUFDcEMsYUFBZ0MsRUFDaEMsYUFBa0M7UUFFNUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUo3QyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLGtCQUFhLEdBQWIsYUFBYSxDQUFtQjtRQUNoQyxrQkFBYSxHQUFiLGFBQWEsQ0FBcUI7SUFHaEQsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0ksb0JBQW9CLENBQ3ZCLFdBQXdCLEVBQ3hCLFdBQWtCLEVBQ2xCLFNBQThCLEVBQzlCLFdBQTBCLElBQUk7UUFHOUIsTUFBTSxVQUFVLEdBQUcsQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQXFCLENBQUM7UUFFckYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFT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QXRCLHNCQUFzQixtQkFGbkIsTUFBTTs7aUZBRVQsc0JBQXNCO2NBSGxDLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VmFsaWRhdGlvbk1hbmFnZXJ9IGZyb20gJy4uL3ZhbGlkYXRpb24vdmFsaWRhdGlvbi5tYW5hZ2VyJztcbmltcG9ydCB7RGF0YVR5cGVGb3JtYXR0ZXJ9IGZyb20gJy4uLy4uL2Zvcm1hdHRlcnMvZGF0YS10eXBlLmZvcm1hdHRlci5zZXJ2aWNlJztcbmltcG9ydCB7U2F2ZWRGaWx0ZXJ9IGZyb20gJy4uLy4uLy4uL3N0b3JlL3NhdmVkLWZpbHRlcnMvc2F2ZWQtZmlsdGVyLm1vZGVsJztcbmltcG9ydCB7RmllbGQsIEZpZWxkQXR0cmlidXRlLCBGaWVsZERlZmluaXRpb259IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9yZWNvcmQvZmllbGQubW9kZWwnO1xuaW1wb3J0IHtSZWNvcmR9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9yZWNvcmQvcmVjb3JkLm1vZGVsJztcbmltcG9ydCB7Vmlld0ZpZWxkRGVmaW5pdGlvbn0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL21ldGFkYXRhL21ldGFkYXRhLm1vZGVsJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZX0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtGaWx0ZXJGaWVsZEJ1aWxkZXJ9IGZyb20gJy4vZmlsdGVyLWZpZWxkLmJ1aWxkZXInO1xuaW1wb3J0IGlzT2JqZWN0TGlrZSBmcm9tICdsb2Rhc2gtZXMvaXNPYmplY3RMaWtlJztcbmltcG9ydCB7RmllbGRPYmplY3RSZWdpc3RyeX0gZnJvbSBcIi4vZmllbGQtb2JqZWN0LXR5cGUucmVnaXN0cnlcIjtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJBdHRyaWJ1dGVCdWlsZGVyIGV4dGVuZHMgRmlsdGVyRmllbGRCdWlsZGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgdmFsaWRhdGlvbk1hbmFnZXI6IFZhbGlkYXRpb25NYW5hZ2VyLFxuICAgICAgICBwcm90ZWN0ZWQgdHlwZUZvcm1hdHRlcjogRGF0YVR5cGVGb3JtYXR0ZXIsXG4gICAgICAgIHByb3RlY3RlZCBmaWVsZFJlZ2lzdHJ5OiBGaWVsZE9iamVjdFJlZ2lzdHJ5XG4gICAgKSB7XG4gICAgICAgIHN1cGVyKHZhbGlkYXRpb25NYW5hZ2VyLCB0eXBlRm9ybWF0dGVyLCBmaWVsZFJlZ2lzdHJ5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCBmaWx0ZXIgYXR0cmlidXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gc2F2ZWRGaWx0ZXIgU2F2ZWRGaWx0ZXJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcGFyZW50RmllbGQgRmllbGRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdmlld0ZpZWxkIFZpZXdGaWVsZERlZmluaXRpb25cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbGFuZ3VhZ2UgTGFuZ3VhZ2VTdG9yZVxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IEZpZWxkQXR0cmlidXRlXG4gICAgICovXG4gICAgcHVibGljIGJ1aWxkRmlsdGVyQXR0cmlidXRlKFxuICAgICAgICBzYXZlZEZpbHRlcjogU2F2ZWRGaWx0ZXIsXG4gICAgICAgIHBhcmVudEZpZWxkOiBGaWVsZCxcbiAgICAgICAgdmlld0ZpZWxkOiBWaWV3RmllbGREZWZpbml0aW9uLFxuICAgICAgICBsYW5ndWFnZTogTGFuZ3VhZ2VTdG9yZSA9IG51bGxcbiAgICApOiBGaWVsZEF0dHJpYnV0ZSB7XG5cbiAgICAgICAgY29uc3QgZGVmaW5pdGlvbiA9ICh2aWV3RmllbGQgJiYgdmlld0ZpZWxkLmZpZWxkRGVmaW5pdGlvbikgfHwge30gYXMgRmllbGREZWZpbml0aW9uO1xuXG4gICAgICAgIGlmICghZGVmaW5pdGlvbi52YWx1ZVBhdGgpIHtcbiAgICAgICAgICAgIGRlZmluaXRpb24udmFsdWVQYXRoID0gJ2NyaXRlcmlhLicgKyAodmlld0ZpZWxkLm5hbWUgfHwgZGVmaW5pdGlvbi5uYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHt2YWx1ZSwgdmFsdWVMaXN0LCB2YWx1ZU9iamVjdH0gPSB0aGlzLnBhcnNlRmlsdGVyQXR0cmlidXRlVmFsdWUodmlld0ZpZWxkLCBkZWZpbml0aW9uLCBzYXZlZEZpbHRlciwgcGFyZW50RmllbGQpO1xuICAgICAgICBjb25zdCB7dmFsaWRhdG9ycywgYXN5bmNWYWxpZGF0b3JzfSA9IHRoaXMuZ2V0RmlsdGVyVmFsaWRhdG9ycyhzYXZlZEZpbHRlciwgdmlld0ZpZWxkKTtcblxuICAgICAgICBjb25zdCBmaWVsZCA9IHRoaXMuc2V0dXBGaWVsZChcbiAgICAgICAgICAgIHNhdmVkRmlsdGVyLnNlYXJjaE1vZHVsZSxcbiAgICAgICAgICAgIHZpZXdGaWVsZCxcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgdmFsdWVMaXN0LFxuICAgICAgICAgICAgdmFsdWVPYmplY3QsXG4gICAgICAgICAgICBzYXZlZEZpbHRlcixcbiAgICAgICAgICAgIGRlZmluaXRpb24sXG4gICAgICAgICAgICB2YWxpZGF0b3JzLFxuICAgICAgICAgICAgYXN5bmNWYWxpZGF0b3JzLFxuICAgICAgICAgICAgbGFuZ3VhZ2VcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBmaWVsZEF0dHJpYnV0ZSA9IGZpZWxkIGFzIEZpZWxkQXR0cmlidXRlO1xuICAgICAgICBmaWVsZEF0dHJpYnV0ZS52YWx1ZVBhdGggPSBkZWZpbml0aW9uLnZhbHVlUGF0aDtcbiAgICAgICAgZmllbGRBdHRyaWJ1dGUuc291cmNlID0gJ2F0dHJpYnV0ZSc7XG4gICAgICAgIGZpZWxkQXR0cmlidXRlLnBhcmVudEtleSA9IHBhcmVudEZpZWxkLmRlZmluaXRpb24ubmFtZTtcblxuICAgICAgICByZXR1cm4gZmllbGRBdHRyaWJ1dGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGF0dHJpYnV0ZSB0byBTYXZlZEZpbHRlclxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHNhdmVkRmlsdGVyIFNhdmVkRmlsdGVyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGZpZWxkIEZpZWxkXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgc3RyaW5nXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGF0dHJpYnV0ZSBGaWVsZEF0dHJpYnV0ZVxuICAgICAqL1xuICAgIHB1YmxpYyBhZGRBdHRyaWJ1dGVUb1NhdmVkRmlsdGVyKHNhdmVkRmlsdGVyOiBTYXZlZEZpbHRlciwgZmllbGQ6IEZpZWxkLCBuYW1lOiBzdHJpbmcsIGF0dHJpYnV0ZTogRmllbGRBdHRyaWJ1dGUpOiB2b2lkIHtcblxuICAgICAgICBpZiAoIXNhdmVkRmlsdGVyIHx8ICFuYW1lIHx8ICFmaWVsZCB8fCAhYXR0cmlidXRlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmaWVsZC5hdHRyaWJ1dGVzID0gZmllbGQuYXR0cmlidXRlcyB8fCB7fTtcblxuICAgICAgICBmaWVsZC5hdHRyaWJ1dGVzW25hbWVdID0gYXR0cmlidXRlO1xuXG4gICAgICAgIGlmIChzYXZlZEZpbHRlci5jcml0ZXJpYUZvcm1Hcm91cCAmJiBhdHRyaWJ1dGUuZm9ybUNvbnRyb2wpIHtcbiAgICAgICAgICAgIHNhdmVkRmlsdGVyLmNyaXRlcmlhRm9ybUdyb3VwLmFkZENvbnRyb2wobmFtZSwgYXR0cmlidXRlLmZvcm1Db250cm9sKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlIGZpbHRlciBhdHRyaWJ1dGUgZnJvbSBmaWVsZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHZpZXdGaWVsZCBWaWV3RmllbGREZWZpbml0aW9uXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGRlZmluaXRpb24gRmllbGREZWZpbml0aW9uXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlY29yZCBSZWNvcmRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZmllbGQgRmllbGRcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSB2YWx1ZSBvYmplY3RcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgcGFyc2VGaWx0ZXJBdHRyaWJ1dGVWYWx1ZShcbiAgICAgICAgdmlld0ZpZWxkOiBWaWV3RmllbGREZWZpbml0aW9uLFxuICAgICAgICBkZWZpbml0aW9uOiBGaWVsZERlZmluaXRpb24sXG4gICAgICAgIHJlY29yZDogUmVjb3JkLFxuICAgICAgICBmaWVsZDogRmllbGRcbiAgICApOiB7IHZhbHVlOiBzdHJpbmc7IHZhbHVlTGlzdDogc3RyaW5nW107IHZhbHVlT2JqZWN0PzogYW55IH0ge1xuXG4gICAgICAgIGNvbnN0IHZpZXdOYW1lID0gdmlld0ZpZWxkLm5hbWUgfHwgJyc7XG4gICAgICAgIGxldCB2YWx1ZTogYW55O1xuXG4gICAgICAgIGlmICghdmlld05hbWUpIHtcbiAgICAgICAgICAgIHZhbHVlID0gJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuZ2V0UGFyZW50VmFsdWUocmVjb3JkLCBmaWVsZCwgdmlld05hbWUsIGRlZmluaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICAgIHZhbHVlTGlzdDogdmFsdWUsXG4gICAgICAgICAgICAgICAgdmFsdWVPYmplY3Q6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc09iamVjdExpa2UodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICAgIHZhbHVlTGlzdDogbnVsbCxcbiAgICAgICAgICAgICAgICB2YWx1ZU9iamVjdDogdmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7dmFsdWUsIHZhbHVlTGlzdDogbnVsbCwgdmFsdWVPYmplY3Q6IG51bGx9O1xuICAgIH1cbn1cbiJdfQ==