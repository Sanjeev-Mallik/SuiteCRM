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
import { PanelLogicActionHandler } from '../panel-logic.action';
import { isVoid } from '../../../common/utils/value-utils';
import { isEmpty } from 'lodash-es';
import * as i0 from "@angular/core";
export class PanelLogicDisplayTypeAction extends PanelLogicActionHandler {
    constructor() {
        super();
        this.key = 'displayType';
        this.modes = ['edit', 'detail', 'list', 'create', 'massupdate', 'filter'];
    }
    run(data, action) {
        const record = data.record;
        const field = data.field;
        if (!record || !field) {
            return true;
        }
        const activeOnFields = (action.params && action.params.activeOnFields) || {};
        const relatedFields = Object.keys(activeOnFields);
        const activeOnAttributes = (action.params && action.params.activeOnAttributes) || {};
        const relatedAttributesFields = Object.keys(activeOnAttributes);
        if (!relatedFields.length && !relatedAttributesFields.length) {
            return true;
        }
        return this.isActive(relatedFields, record, activeOnFields, relatedAttributesFields, activeOnAttributes);
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
                return this.isValueActive(attribute, activeValues);
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
            return this.isValueActive(field, activeValues);
        });
    }
    /**
     * Is value active
     * @param {object} field
     * @param {array} activeValues
     */
    isValueActive(field, activeValues) {
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
        if (!isVoid(field.value)) {
            activeValues.some(activeValue => {
                if (activeValue === field.value) {
                    isActive = true;
                }
            });
        }
        return isActive;
    }
    static { this.ɵfac = function PanelLogicDisplayTypeAction_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PanelLogicDisplayTypeAction)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PanelLogicDisplayTypeAction, factory: PanelLogicDisplayTypeAction.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PanelLogicDisplayTypeAction, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtbG9naWMtZGlzcGxheS10eXBlLWFjdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvcGFuZWwtbG9naWMvZGlzcGxheS10eXBlL3BhbmVsLWxvZ2ljLWRpc3BsYXktdHlwZS1hY3Rpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQXVCLHVCQUF1QixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDcEYsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBT3pELE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxXQUFXLENBQUM7O0FBS2xDLE1BQU0sT0FBTywyQkFBNEIsU0FBUSx1QkFBdUI7SUFLcEU7UUFDSSxLQUFLLEVBQUUsQ0FBQztRQUpaLFFBQUcsR0FBRyxhQUFhLENBQUM7UUFDcEIsVUFBSyxHQUFHLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxRQUFRLENBQWUsQ0FBQztJQUluRixDQUFDO0lBRUQsR0FBRyxDQUFDLElBQTBCLEVBQUUsTUFBYztRQUMxQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzNCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFekIsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3BCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRCxNQUFNLGNBQWMsR0FBbUIsQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUks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LENBQUM7Z0JBQ3BCLENBQUM7WUFFTCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFFRCxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDOzRIQTlJUSwyQkFBMkI7dUVBQTNCLDJCQUEyQixXQUEzQiwyQkFBMkIsbUJBRnhCLE1BQU07O2lGQUVULDJCQUEyQjtjQUh2QyxVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMyBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1BhbmVsTG9naWNBY3Rpb25EYXRhLCBQYW5lbExvZ2ljQWN0aW9uSGFuZGxlcn0gZnJvbSAnLi4vcGFuZWwtbG9naWMuYWN0aW9uJztcbmltcG9ydCB7aXNWb2lkfSBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvdmFsdWUtdXRpbHMnO1xuaW1wb3J0IHtSZWNvcmR9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9yZWNvcmQvcmVjb3JkLm1vZGVsJztcbmltcG9ydCB7Vmlld01vZGV9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi92aWV3cy92aWV3Lm1vZGVsJztcbmltcG9ydCB7RmllbGR9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9yZWNvcmQvZmllbGQubW9kZWwnO1xuaW1wb3J0IHtBY3Rpb259IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9hY3Rpb25zL2FjdGlvbi5tb2RlbCc7XG5pbXBvcnQge1N0cmluZ0FycmF5TWFwfSBmcm9tICcuLi8uLi8uLi9jb21tb24vdHlwZXMvc3RyaW5nLW1hcCc7XG5pbXBvcnQge1N0cmluZ0FycmF5TWF0cml4fSBmcm9tICcuLi8uLi8uLi9jb21tb24vdHlwZXMvc3RyaW5nLW1hdHJpeCc7XG5pbXBvcnQge2lzRW1wdHl9IGZyb20gJ2xvZGFzaC1lcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUGFuZWxMb2dpY0Rpc3BsYXlUeXBlQWN0aW9uIGV4dGVuZHMgUGFuZWxMb2dpY0FjdGlvbkhhbmRsZXIge1xuXG4gICAga2V5ID0gJ2Rpc3BsYXlUeXBlJztcbiAgICBtb2RlcyA9IFsnZWRpdCcsICdkZXRhaWwnLCAnbGlzdCcsICdjcmVhdGUnLCAnbWFzc3VwZGF0ZScsICdmaWx0ZXInXSBhcyBWaWV3TW9kZVtdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgcnVuKGRhdGE6IFBhbmVsTG9naWNBY3Rpb25EYXRhLCBhY3Rpb246IEFjdGlvbik6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCByZWNvcmQgPSBkYXRhLnJlY29yZDtcbiAgICAgICAgY29uc3QgZmllbGQgPSBkYXRhLmZpZWxkO1xuXG4gICAgICAgIGlmICghcmVjb3JkIHx8ICFmaWVsZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhY3RpdmVPbkZpZWxkczogU3RyaW5nQXJyYXlNYXAgPSAoYWN0aW9uLnBhcmFtcyAmJiBhY3Rpb24ucGFyYW1zLmFjdGl2ZU9uRmllbGRzKSB8fCB7fSBhcyBTdHJpbmdBcnJheU1hcDtcbiAgICAgICAgY29uc3QgcmVsYXRlZEZpZWxkczogc3RyaW5nW10gPSBPYmplY3Qua2V5cyhhY3RpdmVPbkZpZWxkcyk7XG5cbiAgICAgICAgY29uc3QgYWN0aXZlT25BdHRyaWJ1dGVzOiBTdHJpbmdBcnJheU1hdHJpeCA9IChhY3Rpb24ucGFyYW1zICYmIGFjdGlvbi5wYXJhbXMuYWN0aXZlT25BdHRyaWJ1dGVzKSB8fCB7fSBhcyBTdHJpbmdBcnJheU1hdHJpeDtcbiAgICAgICAgY29uc3QgcmVsYXRlZEF0dHJpYnV0ZXNGaWVsZHM6IHN0cmluZ1tdID0gT2JqZWN0LmtleXMoYWN0aXZlT25BdHRyaWJ1dGVzKTtcblxuICAgICAgICBpZiAoIXJlbGF0ZWRGaWVsZHMubGVuZ3RoICYmICFyZWxhdGVkQXR0cmlidXRlc0ZpZWxkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaXNBY3RpdmUocmVsYXRlZEZpZWxkcywgcmVjb3JkLCBhY3RpdmVPbkZpZWxkcywgcmVsYXRlZEF0dHJpYnV0ZXNGaWVsZHMsIGFjdGl2ZU9uQXR0cmlidXRlcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgYW55IG9mIHRoZSBjb25maWd1cmVkIHZhbHVlcyBpcyBjdXJyZW50bHkgc2V0XG4gICAgICogQHBhcmFtIHthcnJheX0gcmVsYXRlZEZpZWxkc1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZWNvcmRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gYWN0aXZlT25GaWVsZHNcbiAgICAgKiBAcGFyYW0ge2FycmF5fSByZWxhdGVkQXR0cmlidXRlc0ZpZWxkc1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBhY3RpdmVPbkF0dHJpYnV0ZXNcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgaXNBY3RpdmUoXG4gICAgICAgIHJlbGF0ZWRGaWVsZHM6IHN0cmluZ1tdLFxuICAgICAgICByZWNvcmQ6IFJlY29yZCxcbiAgICAgICAgYWN0aXZlT25GaWVsZHM6IFN0cmluZ0FycmF5TWFwLFxuICAgICAgICByZWxhdGVkQXR0cmlidXRlc0ZpZWxkczogc3RyaW5nW10sXG4gICAgICAgIGFjdGl2ZU9uQXR0cmlidXRlczogU3RyaW5nQXJyYXlNYXRyaXhcbiAgICApIHtcbiAgICAgICAgbGV0IGlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgaWYgKCFpc0VtcHR5KGFjdGl2ZU9uRmllbGRzKSkge1xuICAgICAgICAgICAgaXNBY3RpdmUgPSB0aGlzLmFyZUZpZWxkc0FjdGl2ZShyZWxhdGVkRmllbGRzLCByZWNvcmQsIGFjdGl2ZU9uRmllbGRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNFbXB0eShhY3RpdmVPbkF0dHJpYnV0ZXMpKSB7XG4gICAgICAgICAgICBpc0FjdGl2ZSA9IGlzQWN0aXZlICYmIHRoaXMuYXJlQXR0cmlidXRlc0FjdGl2ZShyZWxhdGVkQXR0cmlidXRlc0ZpZWxkcywgcmVjb3JkLCBhY3RpdmVPbkF0dHJpYnV0ZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGlzQWN0aXZlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFyZSBhdHRyaWJ1dGVzIGFjdGl2ZVxuICAgICAqIEBwYXJhbSB7YXJyYXl9IHJlbGF0ZWRBdHRyaWJ1dGVzRmllbGRzXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlY29yZFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBhY3RpdmVPbkF0dHJpYnV0ZXNcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYXJlQXR0cmlidXRlc0FjdGl2ZShcbiAgICAgICAgcmVsYXRlZEF0dHJpYnV0ZXNGaWVsZHM6IHN0cmluZ1tdLFxuICAgICAgICByZWNvcmQ6IFJlY29yZCxcbiAgICAgICAgYWN0aXZlT25BdHRyaWJ1dGVzOiBTdHJpbmdBcnJheU1hdHJpeFxuICAgICk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gcmVsYXRlZEF0dHJpYnV0ZXNGaWVsZHMuZXZlcnkoZmllbGRLZXkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBmaWVsZHMgPSByZWNvcmQuZmllbGRzO1xuICAgICAgICAgICAgY29uc3QgZmllbGQgPSAoZmllbGRzICYmIHJlY29yZC5maWVsZHNbZmllbGRLZXldKSB8fCBudWxsO1xuICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlcyA9IGFjdGl2ZU9uQXR0cmlidXRlc1tmaWVsZEtleV0gJiYgT2JqZWN0LmtleXMoYWN0aXZlT25BdHRyaWJ1dGVzW2ZpZWxkS2V5XSk7XG4gICAgICAgICAgICBpZiAoIWZpZWxkIHx8ICFhdHRyaWJ1dGVzIHx8ICFhdHRyaWJ1dGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZXMuc29tZShhdHRyaWJ1dGVLZXkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFjdGl2ZVZhbHVlcyA9IGFjdGl2ZU9uQXR0cmlidXRlc1tmaWVsZEtleV1bYXR0cmlidXRlS2V5XTtcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGUgPSBmaWVsZC5hdHRyaWJ1dGVzICYmIGZpZWxkLmF0dHJpYnV0ZXNbYXR0cmlidXRlS2V5XTtcblxuICAgICAgICAgICAgICAgIGlmICghYWN0aXZlVmFsdWVzIHx8ICFhY3RpdmVWYWx1ZXMubGVuZ3RoIHx8ICFhdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmlzVmFsdWVBY3RpdmUoYXR0cmlidXRlLCBhY3RpdmVWYWx1ZXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFyZSBmaWVsZHMgYWN0aXZlXG4gICAgICogQHBhcmFtIHthcnJheX0gcmVsYXRlZEZpZWxkc1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZWNvcmRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gYWN0aXZlT25GaWVsZHNcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYXJlRmllbGRzQWN0aXZlKHJlbGF0ZWRGaWVsZHM6IHN0cmluZ1tdLCByZWNvcmQ6IFJlY29yZCwgYWN0aXZlT25GaWVsZHM6IFN0cmluZ0FycmF5TWFwKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiByZWxhdGVkRmllbGRzLmV2ZXJ5KGZpZWxkS2V5ID0+IHtcblxuICAgICAgICAgICAgY29uc3QgZmllbGRzID0gcmVjb3JkLmZpZWxkcztcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gKGZpZWxkcyAmJiByZWNvcmQuZmllbGRzW2ZpZWxkS2V5XSkgfHwgbnVsbDtcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZVZhbHVlcyA9IGFjdGl2ZU9uRmllbGRzW2ZpZWxkS2V5XTtcblxuICAgICAgICAgICAgaWYgKCFmaWVsZCB8fCAhYWN0aXZlVmFsdWVzIHx8ICFhY3RpdmVWYWx1ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbHVlQWN0aXZlKGZpZWxkLCBhY3RpdmVWYWx1ZXMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJcyB2YWx1ZSBhY3RpdmVcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZmllbGRcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBhY3RpdmVWYWx1ZXNcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgaXNWYWx1ZUFjdGl2ZShmaWVsZDogRmllbGQsIGFjdGl2ZVZhbHVlczogc3RyaW5nW10pOiBib29sZWFuIHtcbiAgICAgICAgbGV0IGlzQWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKGZpZWxkLnZhbHVlTGlzdCAmJiBmaWVsZC52YWx1ZUxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICBmaWVsZC52YWx1ZUxpc3Quc29tZSh2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjdGl2ZVZhbHVlcy5zb21lKGFjdGl2ZVZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGl2ZVZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBpc0FjdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNWb2lkKGZpZWxkLnZhbHVlKSkge1xuICAgICAgICAgICAgYWN0aXZlVmFsdWVzLnNvbWUoYWN0aXZlVmFsdWUgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYgKGFjdGl2ZVZhbHVlID09PSBmaWVsZC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpc0FjdGl2ZTtcbiAgICB9XG59XG4iXX0=