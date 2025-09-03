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
import * as i0 from "@angular/core";
export class FormControlUtils {
    getTrimmedInputValue(inputValue) {
        // Handle the cases, when input values are not string e.g. multienums: String[]
        // Process the input, only when it's a string else return as it is
        if (typeof inputValue !== 'string') {
            return inputValue;
        }
        return inputValue.trim();
    }
    isEmptyInputValue(inputValue) {
        // Handle the cases, when input value is an string, array, objects or any other type
        return inputValue == null
            || typeof inputValue === 'undefined'
            || inputValue === ''
            || inputValue.length === 0;
    }
    isEmptyTrimmedInputValue(inputValue) {
        return this.isEmptyInputValue(this.getTrimmedInputValue(inputValue));
    }
    isEmptyBooleanInputValue(inputValue) {
        return this.isEmptyInputValue(inputValue) || inputValue === 'false' || inputValue === false || inputValue === '';
    }
    static { this.ɵfac = function FormControlUtils_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FormControlUtils)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FormControlUtils, factory: FormControlUtils.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormControlUtils, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1jb250cm9sLnV0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3NlcnZpY2VzL3JlY29yZC9maWVsZC9mb3JtLWNvbnRyb2wudXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBTXpDLE1BQU0sT0FBTyxnQkFBZ0I7SUFFekIsb0JBQW9CLENBQUMsVUFBZTtRQUNoQywrRUFBK0U7UUFDL0Usa0VBQWtFO1FBQ2xFLElBQUksT0FBTyxVQUFVLEtBQUssUUFBUSxFQUFFLENBQUM7WUFDakMsT0FBTyxVQUFVLENBQUM7UUFDdEIsQ0FBQztRQUNELE9BQU8sVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxVQUFlO1FBQzdCLG9GQUFvRjtRQUNwRixPQUFPLFVBQVUsSUFBSSxJQUFJO2VBQ2xCLE9BQU8sVUFBVSxLQUFLLFdBQVc7ZUFDakMsVUFBVSxLQUFLLEVBQUU7ZUFDakIsVUFBVSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELHdCQUF3QixDQUFDLFVBQWU7UUFDcEMsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVELHdCQUF3QixDQUFDLFVBQWU7UUFDcEMsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLElBQUksVUFBVSxLQUFLLE9BQU8sSUFBSSxVQUFVLEtBQUssS0FBSyxJQUFJLFVBQVUsS0FBSyxFQUFFLENBQUM7SUFDckgsQ0FBQztpSEF6QlEsZ0JBQWdCO3VFQUFoQixnQkFBZ0IsV0FBaEIsZ0JBQWdCLG1CQUhiLE1BQU07O2lGQUdULGdCQUFnQjtjQUo1QixVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBGb3JtQ29udHJvbFV0aWxzIHtcblxuICAgIGdldFRyaW1tZWRJbnB1dFZhbHVlKGlucHV0VmFsdWU6IGFueSk6IGFueSB7XG4gICAgICAgIC8vIEhhbmRsZSB0aGUgY2FzZXMsIHdoZW4gaW5wdXQgdmFsdWVzIGFyZSBub3Qgc3RyaW5nIGUuZy4gbXVsdGllbnVtczogU3RyaW5nW11cbiAgICAgICAgLy8gUHJvY2VzcyB0aGUgaW5wdXQsIG9ubHkgd2hlbiBpdCdzIGEgc3RyaW5nIGVsc2UgcmV0dXJuIGFzIGl0IGlzXG4gICAgICAgIGlmICh0eXBlb2YgaW5wdXRWYWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBpbnB1dFZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnB1dFZhbHVlLnRyaW0oKTtcbiAgICB9XG5cbiAgICBpc0VtcHR5SW5wdXRWYWx1ZShpbnB1dFZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgLy8gSGFuZGxlIHRoZSBjYXNlcywgd2hlbiBpbnB1dCB2YWx1ZSBpcyBhbiBzdHJpbmcsIGFycmF5LCBvYmplY3RzIG9yIGFueSBvdGhlciB0eXBlXG4gICAgICAgIHJldHVybiBpbnB1dFZhbHVlID09IG51bGxcbiAgICAgICAgICAgIHx8IHR5cGVvZiBpbnB1dFZhbHVlID09PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgfHwgaW5wdXRWYWx1ZSA9PT0gJydcbiAgICAgICAgICAgIHx8IGlucHV0VmFsdWUubGVuZ3RoID09PSAwO1xuICAgIH1cblxuICAgIGlzRW1wdHlUcmltbWVkSW5wdXRWYWx1ZShpbnB1dFZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNFbXB0eUlucHV0VmFsdWUodGhpcy5nZXRUcmltbWVkSW5wdXRWYWx1ZShpbnB1dFZhbHVlKSk7XG4gICAgfVxuXG4gICAgaXNFbXB0eUJvb2xlYW5JbnB1dFZhbHVlKGlucHV0VmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0VtcHR5SW5wdXRWYWx1ZShpbnB1dFZhbHVlKSB8fCBpbnB1dFZhbHVlID09PSAnZmFsc2UnIHx8IGlucHV0VmFsdWUgPT09IGZhbHNlIHx8IGlucHV0VmFsdWUgPT09ICcnO1xuICAgIH1cbn1cbiJdfQ==