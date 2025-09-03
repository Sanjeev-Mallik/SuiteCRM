/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2023 SalesAgility Ltd.
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
import { isEmpty } from "lodash-es";
import { ConditionOperatorManager } from "./condition-operator.manager";
import { isFalse, isTrue } from "../../common/utils/value-utils";
import * as i0 from "@angular/core";
import * as i1 from "./condition-operator.manager";
export class ActiveFieldsChecker {
    constructor(operatorManager) {
        this.operatorManager = operatorManager;
    }
    /**
     * Check if any of the configured values is currently set
     * @param {array} relatedFields
     * @param {object} record
     * @param {object} activeOnFields
     * @param {array} relatedAttributesFields
     * @param {object} activeOnAttributes
     */
    isActive(relatedFields, record, activeOnFields, relatedAttributesFields, activeOnAttributes) {
        let isActive = true;
        if (!isEmpty(activeOnFields)) {
            isActive = this.areFieldsActive(relatedFields, record, activeOnFields);
        }
        if (!isEmpty(activeOnAttributes)) {
            isActive = isActive && this.areAttributesActive(relatedAttributesFields, record, activeOnAttributes);
        }
        return isActive;
    }
    /**
     * Are attributes active
     * @param {array} relatedAttributesFields
     * @param {object} record
     * @param {object} activeOnAttributes
     */
    areAttributesActive(relatedAttributesFields, record, activeOnAttributes) {
        return relatedAttributesFields.every(fieldKey => {
            const fields = record.fields;
            const field = (fields && record.fields[fieldKey]) || null;
            const attributes = activeOnAttributes[fieldKey] && Object.keys(activeOnAttributes[fieldKey]);
            if (!field || !attributes || !attributes.length) {
                return;
            }
            return attributes.some(attributeKey => {
                const activeValues = activeOnAttributes[fieldKey][attributeKey];
                const attribute = field.attributes && field.attributes[attributeKey];
                if (!activeValues || !activeValues.length || !attribute) {
                    return;
                }
                return this.isValueActive(record, attribute, activeValues);
            });
        });
    }
    /**
     * Are fields active
     * @param {array} relatedFields
     * @param {object} record
     * @param {object} activeOnFields
     */
    areFieldsActive(relatedFields, record, activeOnFields) {
        return relatedFields.every(fieldKey => {
            const fields = record.fields;
            const field = (fields && record.fields[fieldKey]) || null;
            const activeValues = activeOnFields[fieldKey];
            if (!field || !activeValues || !activeValues.length) {
                return true;
            }
            return this.isValueActive(record, field, activeValues);
        });
    }
    /**
     * Is value active
     * @param {object} record
     * @param {object} field
     * @param {array} activeValues
     */
    isValueActive(record, field, activeValues) {
        let isActive = false;
        if (field.valueList && field.valueList.length) {
            field.valueList.some(value => {
                return activeValues.some(activeValue => {
                    if (activeValue === value) {
                        isActive = true;
                        return true;
                    }
                });
            });
            return isActive;
        }
        const fields = Object.keys(record.fields);
        let opsArr = [];
        activeValues.some(activeValue => {
            if (activeValue.field && !fields.includes(activeValue.field)) {
                return;
            }
            if (isTrue(activeValue) || isFalse(activeValue)) {
                isActive = activeValue.toString() === field.value.toString();
                return;
            }
            const operatorKey = activeValue?.operator ?? 'is-equal';
            if (typeof activeValue === 'string') {
                activeValue = {
                    operator: operatorKey,
                    values: [activeValue]
                };
            }
            const operator = this.operatorManager.get(operatorKey);
            opsArr.push(operator.run(record, field, activeValue));
            isActive = opsArr.every(data => data);
        });
        return isActive;
    }
    static { this.ɵfac = function ActiveFieldsChecker_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ActiveFieldsChecker)(i0.ɵɵinject(i1.ConditionOperatorManager)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ActiveFieldsChecker, factory: ActiveFieldsChecker.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ActiveFieldsChecker, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.ConditionOperatorManager }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWZpZWxkcy1jaGVja2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc2VydmljZXMvY29uZGl0aW9uLW9wZXJhdG9ycy9hY3RpdmUtZmllbGRzLWNoZWNrZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUt6QyxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQ2xDLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ3RFLE9BQU8sRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFDLE1BQU0sZ0NBQWdDLENBQUM7OztBQU0vRCxNQUFNLE9BQU8sbUJBQW1CO0lBRTVCLFlBQXNCLGVBQXlDO1FBQXpDLG9CQUFlLEdBQWYsZUFBZSxDQUEwQjtJQUMvRCxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNJLFFBQVEsQ0FDWCxhQUF1QixFQUN2QixNQUFjLEVBQ2QsY0FBOEIsRUFDOUIsdUJBQWlDLEVBQ2pDLGtCQUFxQztRQUVyQyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDO1lBQzNCLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDM0UsQ0FBQztRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDO1lBQy9CLFFBQVEsR0FBRyxRQUFRLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLHVCQUF1QixFQUFFLE1BQU0sRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3pHLENBQUM7UUFFRCxP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Q1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMyBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JlY29yZH0gZnJvbSAnLi4vLi4vY29tbW9uL3JlY29yZC9yZWNvcmQubW9kZWwnO1xuaW1wb3J0IHtGaWVsZH0gZnJvbSAnLi4vLi4vY29tbW9uL3JlY29yZC9maWVsZC5tb2RlbCc7XG5pbXBvcnQge1N0cmluZ0FycmF5TWFwfSBmcm9tICcuLi8uLi9jb21tb24vdHlwZXMvc3RyaW5nLW1hcCc7XG5pbXBvcnQge1N0cmluZ0FycmF5TWF0cml4fSBmcm9tICcuLi8uLi9jb21tb24vdHlwZXMvc3RyaW5nLW1hdHJpeCc7XG5pbXBvcnQge2lzRW1wdHl9IGZyb20gXCJsb2Rhc2gtZXNcIjtcbmltcG9ydCB7Q29uZGl0aW9uT3BlcmF0b3JNYW5hZ2VyfSBmcm9tIFwiLi9jb25kaXRpb24tb3BlcmF0b3IubWFuYWdlclwiO1xuaW1wb3J0IHtpc0ZhbHNlLCBpc1RydWV9IGZyb20gXCIuLi8uLi9jb21tb24vdXRpbHMvdmFsdWUtdXRpbHNcIjtcbmltcG9ydCB7TG9naWNSdWxlVmFsdWVzfSBmcm9tIFwiLi4vLi4vY29tbW9uL21ldGFkYXRhL21ldGFkYXRhLm1vZGVsXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQWN0aXZlRmllbGRzQ2hlY2tlciB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgb3BlcmF0b3JNYW5hZ2VyOiBDb25kaXRpb25PcGVyYXRvck1hbmFnZXIpIHtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBhbnkgb2YgdGhlIGNvbmZpZ3VyZWQgdmFsdWVzIGlzIGN1cnJlbnRseSBzZXRcbiAgICAgKiBAcGFyYW0ge2FycmF5fSByZWxhdGVkRmllbGRzXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlY29yZFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBhY3RpdmVPbkZpZWxkc1xuICAgICAqIEBwYXJhbSB7YXJyYXl9IHJlbGF0ZWRBdHRyaWJ1dGVzRmllbGRzXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGFjdGl2ZU9uQXR0cmlidXRlc1xuICAgICAqL1xuICAgIHB1YmxpYyBpc0FjdGl2ZShcbiAgICAgICAgcmVsYXRlZEZpZWxkczogc3RyaW5nW10sXG4gICAgICAgIHJlY29yZDogUmVjb3JkLFxuICAgICAgICBhY3RpdmVPbkZpZWxkczogU3RyaW5nQXJyYXlNYXAsXG4gICAgICAgIHJlbGF0ZWRBdHRyaWJ1dGVzRmllbGRzOiBzdHJpbmdbXSxcbiAgICAgICAgYWN0aXZlT25BdHRyaWJ1dGVzOiBTdHJpbmdBcnJheU1hdHJpeFxuICAgICkge1xuICAgICAgICBsZXQgaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICBpZiAoIWlzRW1wdHkoYWN0aXZlT25GaWVsZHMpKSB7XG4gICAgICAgICAgICBpc0FjdGl2ZSA9IHRoaXMuYXJlRmllbGRzQWN0aXZlKHJlbGF0ZWRGaWVsZHMsIHJlY29yZCwgYWN0aXZlT25GaWVsZHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc0VtcHR5KGFjdGl2ZU9uQXR0cmlidXRlcykpIHtcbiAgICAgICAgICAgIGlzQWN0aXZlID0gaXNBY3RpdmUgJiYgdGhpcy5hcmVBdHRyaWJ1dGVzQWN0aXZlKHJlbGF0ZWRBdHRyaWJ1dGVzRmllbGRzLCByZWNvcmQsIGFjdGl2ZU9uQXR0cmlidXRlcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaXNBY3RpdmU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXJlIGF0dHJpYnV0ZXMgYWN0aXZlXG4gICAgICogQHBhcmFtIHthcnJheX0gcmVsYXRlZEF0dHJpYnV0ZXNGaWVsZHNcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVjb3JkXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGFjdGl2ZU9uQXR0cmlidXRlc1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBhcmVBdHRyaWJ1dGVzQWN0aXZlKFxuICAgICAgICByZWxhdGVkQXR0cmlidXRlc0ZpZWxkczogc3RyaW5nW10sXG4gICAgICAgIHJlY29yZDogUmVjb3JkLFxuICAgICAgICBhY3RpdmVPbkF0dHJpYnV0ZXM6IFN0cmluZ0FycmF5TWF0cml4XG4gICAgKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiByZWxhdGVkQXR0cmlidXRlc0ZpZWxkcy5ldmVyeShmaWVsZEtleSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGZpZWxkcyA9IHJlY29yZC5maWVsZHM7XG4gICAgICAgICAgICBjb25zdCBmaWVsZCA9IChmaWVsZHMgJiYgcmVjb3JkLmZpZWxkc1tmaWVsZEtleV0pIHx8IG51bGw7XG4gICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0gYWN0aXZlT25BdHRyaWJ1dGVzW2ZpZWxkS2V5XSAmJiBPYmplY3Qua2V5cyhhY3RpdmVPbkF0dHJpYnV0ZXNbZmllbGRLZXldKTtcbiAgICAgICAgICAgIGlmICghZmllbGQgfHwgIWF0dHJpYnV0ZXMgfHwgIWF0dHJpYnV0ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYXR0cmlidXRlcy5zb21lKGF0dHJpYnV0ZUtleSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWN0aXZlVmFsdWVzID0gYWN0aXZlT25BdHRyaWJ1dGVzW2ZpZWxkS2V5XVthdHRyaWJ1dGVLZXldO1xuICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IGZpZWxkLmF0dHJpYnV0ZXMgJiYgZmllbGQuYXR0cmlidXRlc1thdHRyaWJ1dGVLZXldO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFhY3RpdmVWYWx1ZXMgfHwgIWFjdGl2ZVZhbHVlcy5sZW5ndGggfHwgIWF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmlzVmFsdWVBY3RpdmUocmVjb3JkLCBhdHRyaWJ1dGUsIGFjdGl2ZVZhbHVlcyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXJlIGZpZWxkcyBhY3RpdmVcbiAgICAgKiBAcGFyYW0ge2FycmF5fSByZWxhdGVkRmllbGRzXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlY29yZFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBhY3RpdmVPbkZpZWxkc1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBhcmVGaWVsZHNBY3RpdmUocmVsYXRlZEZpZWxkczogc3RyaW5nW10sIHJlY29yZDogUmVjb3JkLCBhY3RpdmVPbkZpZWxkczogU3RyaW5nQXJyYXlNYXApOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHJlbGF0ZWRGaWVsZHMuZXZlcnkoZmllbGRLZXkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmllbGRzID0gcmVjb3JkLmZpZWxkcztcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gKGZpZWxkcyAmJiByZWNvcmQuZmllbGRzW2ZpZWxkS2V5XSkgfHwgbnVsbDtcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZVZhbHVlcyA9IGFjdGl2ZU9uRmllbGRzW2ZpZWxkS2V5XTtcbiAgICAgICAgICAgIGlmICghZmllbGQgfHwgIWFjdGl2ZVZhbHVlcyB8fCAhYWN0aXZlVmFsdWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNWYWx1ZUFjdGl2ZShyZWNvcmQsIGZpZWxkLCBhY3RpdmVWYWx1ZXMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJcyB2YWx1ZSBhY3RpdmVcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVjb3JkXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGZpZWxkXG4gICAgICogQHBhcmFtIHthcnJheX0gYWN0aXZlVmFsdWVzXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGlzVmFsdWVBY3RpdmUocmVjb3JkOiBSZWNvcmQsIGZpZWxkOiBGaWVsZCwgYWN0aXZlVmFsdWVzOiBzdHJpbmdbXSB8IGFueSk6IGJvb2xlYW4ge1xuXG4gICAgICAgIGxldCBpc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBpZiAoZmllbGQudmFsdWVMaXN0ICYmIGZpZWxkLnZhbHVlTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZpZWxkLnZhbHVlTGlzdC5zb21lKHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWN0aXZlVmFsdWVzLnNvbWUoYWN0aXZlVmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWN0aXZlVmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGlzQWN0aXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmllbGRzID0gT2JqZWN0LmtleXMocmVjb3JkLmZpZWxkcyk7XG4gICAgICAgIGxldCBvcHNBcnI6IGJvb2xlYW5bXSA9IFtdO1xuXG4gICAgICAgIGFjdGl2ZVZhbHVlcy5zb21lKGFjdGl2ZVZhbHVlID0+IHtcblxuICAgICAgICAgICAgaWYgKGFjdGl2ZVZhbHVlLmZpZWxkICYmICFmaWVsZHMuaW5jbHVkZXMoYWN0aXZlVmFsdWUuZmllbGQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXNUcnVlKGFjdGl2ZVZhbHVlKSB8fCBpc0ZhbHNlKGFjdGl2ZVZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlzQWN0aXZlID0gYWN0aXZlVmFsdWUudG9TdHJpbmcoKSA9PT0gZmllbGQudmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yS2V5ID0gYWN0aXZlVmFsdWU/Lm9wZXJhdG9yID8/ICdpcy1lcXVhbCc7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgYWN0aXZlVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlVmFsdWUgPSB7XG4gICAgICAgICAgICAgICAgICAgIG9wZXJhdG9yOiBvcGVyYXRvcktleSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzOiBbYWN0aXZlVmFsdWVdXG4gICAgICAgICAgICAgICAgfSBhcyBMb2dpY1J1bGVWYWx1ZXM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yID0gdGhpcy5vcGVyYXRvck1hbmFnZXIuZ2V0KG9wZXJhdG9yS2V5KTtcbiAgICAgICAgICAgIG9wc0Fyci5wdXNoKG9wZXJhdG9yLnJ1bihyZWNvcmQsIGZpZWxkLCBhY3RpdmVWYWx1ZSkpXG4gICAgICAgICAgICBpc0FjdGl2ZSA9IG9wc0Fyci5ldmVyeShkYXRhID0+IGRhdGEpO1xuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiBpc0FjdGl2ZTtcbiAgICB9XG59XG4iXX0=