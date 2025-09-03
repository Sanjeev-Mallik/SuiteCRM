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
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { UserPreferenceStore } from '../../../store/user-preference/user-preference.store';
import { formatNumber } from '@angular/common';
import { isFalse, isVoid } from '../../../common/utils/value-utils';
import { FormControlUtils } from '../../record/field/form-control.utils';
import * as i0 from "@angular/core";
import * as i1 from "../../../store/user-preference/user-preference.store";
import * as i2 from "../../record/field/form-control.utils";
export class NumberFormatter {
    constructor(preferences, formUtils, locale) {
        this.preferences = preferences;
        this.formUtils = formUtils;
        this.locale = locale;
    }
    toUserFormat(value, options) {
        if (isVoid(value) || value === '') {
            return '';
        }
        if (isFalse(options?.metadata?.format ?? true)) {
            return value;
        }
        const formatted = formatNumber(Number(value), this.locale);
        return this.replaceSeparators(formatted);
    }
    toInternalFormat(value) {
        if (!value) {
            return value;
        }
        const decimalSymbol = this.getDecimalsSymbol() || '.';
        const groupSymbol = this.getGroupSymbol() || ',';
        let decimalSymbolRegex = new RegExp(decimalSymbol, 'g');
        if (decimalSymbol === '.') {
            decimalSymbolRegex = new RegExp('\\.', 'g');
        }
        let groupSymbolRegex = new RegExp(groupSymbol, 'g');
        if (groupSymbol === '.') {
            groupSymbolRegex = new RegExp('\\.', 'g');
        }
        value = value ?? '';
        value = value.toString().replace(groupSymbolRegex, 'group_separator');
        value = value.toString().replace(decimalSymbolRegex, 'decimal_separator');
        value = value.toString().replace(/decimal_separator/g, '.');
        value = value.toString().replace(/group_separator/g, '');
        return value;
    }
    getFloatUserFormatPattern() {
        const group = this.getGroupSymbol();
        const decimals = this.getDecimalsSymbol();
        let pattern = '^-?(';
        pattern += '(\\d{1,3}(\\' + group + '\\d{3})*(\\' + decimals + '\\d+)?)|';
        pattern += '\\d*|';
        pattern += '(\\d+(\\' + decimals + '\\d+)?)|';
        pattern += '(\\d+(\\.\\d+)?)';
        pattern += ')$';
        return pattern;
    }
    getIntUserFormatPattern() {
        const group = this.getGroupSymbol();
        let pattern = '^-?(';
        pattern += '(\\d{1,3}(\\' + group + '\\d{3})*)|';
        pattern += '\\d*';
        pattern += ')$';
        return pattern;
    }
    getGroupSymbol() {
        const separator = this.preferences.getUserPreference('num_grp_sep');
        if (separator) {
            return separator;
        }
        return ',';
    }
    getDecimalsSymbol() {
        const separator = this.preferences.getUserPreference('dec_sep');
        if (separator) {
            return separator;
        }
        return '.';
    }
    replaceSeparators(transformed) {
        if (!transformed) {
            return transformed;
        }
        transformed = transformed ?? '';
        transformed = transformed.toString().replace(/,/g, 'group_separator');
        transformed = transformed.toString().replace(/\./g, 'decimal_separator');
        const decimalSymbol = this.getDecimalsSymbol() || '.';
        const groupSymbol = this.getGroupSymbol() || ',';
        transformed = transformed.toString().replace(/decimal_separator/g, decimalSymbol);
        transformed = transformed.toString().replace(/group_separator/g, groupSymbol);
        return transformed;
    }
    replaceSeparatorsToInternalFormat(value) {
        const decimalSymbol = this.getDecimalsSymbol() || '.';
        const formattedValue = this.toInternalFormat(value);
        if (decimalSymbol !== '.' && value?.toString()?.includes(decimalSymbol)) {
            value = formattedValue;
        }
        return value;
    }
    validateIntUserFormat(inputValue) {
        const trimmedInputValue = this.formUtils.getTrimmedInputValue(inputValue);
        if (this.formUtils.isEmptyInputValue(trimmedInputValue)) {
            return false;
        }
        const regex = new RegExp(this.getIntUserFormatPattern());
        return !regex.test(trimmedInputValue);
    }
    validateFloatUserFormat(inputValue) {
        const trimmedInputValue = this.formUtils.getTrimmedInputValue(inputValue);
        if (this.formUtils.isEmptyInputValue(trimmedInputValue)) {
            return false;
        }
        const regex = new RegExp(this.getFloatUserFormatPattern());
        return !regex.test(trimmedInputValue);
    }
    static { this.ɵfac = function NumberFormatter_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || NumberFormatter)(i0.ɵɵinject(i1.UserPreferenceStore), i0.ɵɵinject(i2.FormControlUtils), i0.ɵɵinject(LOCALE_ID)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: NumberFormatter, factory: NumberFormatter.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NumberFormatter, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.UserPreferenceStore }, { type: i2.FormControlUtils }, { type: undefined, decorators: [{
                type: Inject,
                args: [LOCALE_ID]
            }] }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWZvcm1hdHRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3NlcnZpY2VzL2Zvcm1hdHRlcnMvbnVtYmVyL251bWJlci1mb3JtYXR0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHNEQUFzRCxDQUFDO0FBQ3pGLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUU3QyxPQUFPLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHVDQUF1QyxDQUFDOzs7O0FBS3ZFLE1BQU0sT0FBTyxlQUFlO0lBRXhCLFlBQ2MsV0FBZ0MsRUFDaEMsU0FBMkIsRUFDWCxNQUFjO1FBRjlCLGdCQUFXLEdBQVgsV0FBVyxDQUFxQjtRQUNoQyxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUNYLFdBQU0sR0FBTixNQUFNLENBQVE7SUFFNUMsQ0FBQztJQUVELFlBQVksQ0FBQyxLQUFhLEVBQUcsT0FBdUI7UUFFaEQsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxLQUFLLEVBQUUsRUFBRSxDQUFDO1lBQ2hDLE9BQU8sRUFBRSxDQUFDO1FBQ2QsQ0FBQztRQUVELElBQUcsT0FBTyxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDNUMsT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQztRQUVELE1BQU0sU0FBUyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMs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Q1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0LCBJbmplY3RhYmxlLCBMT0NBTEVfSUR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtVc2VyUHJlZmVyZW5jZVN0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS91c2VyLXByZWZlcmVuY2UvdXNlci1wcmVmZXJlbmNlLnN0b3JlJztcbmltcG9ydCB7Zm9ybWF0TnVtYmVyfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtGb3JtYXRPcHRpb25zLCBGb3JtYXR0ZXJ9IGZyb20gJy4uL2Zvcm1hdHRlci5tb2RlbCc7XG5pbXBvcnQge2lzRmFsc2UsIGlzVm9pZH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL3ZhbHVlLXV0aWxzJztcbmltcG9ydCB7Rm9ybUNvbnRyb2xVdGlsc30gZnJvbSAnLi4vLi4vcmVjb3JkL2ZpZWxkL2Zvcm0tY29udHJvbC51dGlscyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTnVtYmVyRm9ybWF0dGVyIGltcGxlbWVudHMgRm9ybWF0dGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgcHJlZmVyZW5jZXM6IFVzZXJQcmVmZXJlbmNlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBmb3JtVXRpbHM6IEZvcm1Db250cm9sVXRpbHMsXG4gICAgICAgIEBJbmplY3QoTE9DQUxFX0lEKSBwdWJsaWMgbG9jYWxlOiBzdHJpbmdcbiAgICApIHtcbiAgICB9XG5cbiAgICB0b1VzZXJGb3JtYXQodmFsdWU6IHN0cmluZywgIG9wdGlvbnM/OiBGb3JtYXRPcHRpb25zKTogc3RyaW5nIHtcblxuICAgICAgICBpZiAoaXNWb2lkKHZhbHVlKSB8fCB2YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGlzRmFsc2Uob3B0aW9ucz8ubWV0YWRhdGE/LmZvcm1hdCA/PyB0cnVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZm9ybWF0dGVkID0gZm9ybWF0TnVtYmVyKE51bWJlcih2YWx1ZSksIHRoaXMubG9jYWxlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVwbGFjZVNlcGFyYXRvcnMoZm9ybWF0dGVkKTtcbiAgICB9XG5cbiAgICB0b0ludGVybmFsRm9ybWF0KHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuXG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRlY2ltYWxTeW1ib2wgPSB0aGlzLmdldERlY2ltYWxzU3ltYm9sKCkgfHwgJy4nO1xuICAgICAgICBjb25zdCBncm91cFN5bWJvbCA9IHRoaXMuZ2V0R3JvdXBTeW1ib2woKSB8fCAnLCc7XG5cbiAgICAgICAgbGV0IGRlY2ltYWxTeW1ib2xSZWdleCA9IG5ldyBSZWdFeHAoZGVjaW1hbFN5bWJvbCwgJ2cnKTtcbiAgICAgICAgaWYgKGRlY2ltYWxTeW1ib2wgPT09ICcuJykge1xuICAgICAgICAgICAgZGVjaW1hbFN5bWJvbFJlZ2V4ID0gbmV3IFJlZ0V4cCgnXFxcXC4nLCAnZycpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGdyb3VwU3ltYm9sUmVnZXggPSBuZXcgUmVnRXhwKGdyb3VwU3ltYm9sLCAnZycpO1xuICAgICAgICBpZiAoZ3JvdXBTeW1ib2wgPT09ICcuJykge1xuICAgICAgICAgICAgZ3JvdXBTeW1ib2xSZWdleCA9IG5ldyBSZWdFeHAoJ1xcXFwuJywgJ2cnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhbHVlID0gdmFsdWUgPz8gJyc7XG5cbiAgICAgICAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpLnJlcGxhY2UoZ3JvdXBTeW1ib2xSZWdleCwgJ2dyb3VwX3NlcGFyYXRvcicpO1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCkucmVwbGFjZShkZWNpbWFsU3ltYm9sUmVnZXgsICdkZWNpbWFsX3NlcGFyYXRvcicpO1xuXG5cbiAgICAgICAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpLnJlcGxhY2UoL2RlY2ltYWxfc2VwYXJhdG9yL2csICcuJyk7XG4gICAgICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKS5yZXBsYWNlKC9ncm91cF9zZXBhcmF0b3IvZywgJycpO1xuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXRGbG9hdFVzZXJGb3JtYXRQYXR0ZXJuKCk6IHN0cmluZyB7XG5cbiAgICAgICAgY29uc3QgZ3JvdXAgPSB0aGlzLmdldEdyb3VwU3ltYm9sKCk7XG4gICAgICAgIGNvbnN0IGRlY2ltYWxzID0gdGhpcy5nZXREZWNpbWFsc1N5bWJvbCgpO1xuXG4gICAgICAgIGxldCBwYXR0ZXJuID0gJ14tPygnO1xuICAgICAgICBwYXR0ZXJuICs9ICcoXFxcXGR7MSwzfShcXFxcJyArIGdyb3VwICsgJ1xcXFxkezN9KSooXFxcXCcgKyBkZWNpbWFscyArICdcXFxcZCspPyl8JztcbiAgICAgICAgcGF0dGVybiArPSAnXFxcXGQqfCc7XG4gICAgICAgIHBhdHRlcm4gKz0gJyhcXFxcZCsoXFxcXCcgKyBkZWNpbWFscyArICdcXFxcZCspPyl8JztcbiAgICAgICAgcGF0dGVybiArPSAnKFxcXFxkKyhcXFxcLlxcXFxkKyk/KSc7XG4gICAgICAgIHBhdHRlcm4gKz0gJykkJztcbiAgICAgICAgcmV0dXJuIHBhdHRlcm47XG4gICAgfVxuXG4gICAgZ2V0SW50VXNlckZvcm1hdFBhdHRlcm4oKTogc3RyaW5nIHtcblxuICAgICAgICBjb25zdCBncm91cCA9IHRoaXMuZ2V0R3JvdXBTeW1ib2woKTtcblxuICAgICAgICBsZXQgcGF0dGVybiA9ICdeLT8oJztcbiAgICAgICAgcGF0dGVybiArPSAnKFxcXFxkezEsM30oXFxcXCcgKyBncm91cCArICdcXFxcZHszfSkqKXwnO1xuICAgICAgICBwYXR0ZXJuICs9ICdcXFxcZConO1xuICAgICAgICBwYXR0ZXJuICs9ICcpJCc7XG4gICAgICAgIHJldHVybiBwYXR0ZXJuO1xuICAgIH1cblxuICAgIGdldEdyb3VwU3ltYm9sKCk6IHN0cmluZyB7XG5cbiAgICAgICAgY29uc3Qgc2VwYXJhdG9yID0gdGhpcy5wcmVmZXJlbmNlcy5nZXRVc2VyUHJlZmVyZW5jZSgnbnVtX2dycF9zZXAnKTtcblxuICAgICAgICBpZiAoc2VwYXJhdG9yKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VwYXJhdG9yO1xuICAgICAgICB9XG5cblxuICAgICAgICByZXR1cm4gJywnO1xuICAgIH1cblxuICAgIGdldERlY2ltYWxzU3ltYm9sKCk6IHN0cmluZyB7XG5cbiAgICAgICAgY29uc3Qgc2VwYXJhdG9yID0gdGhpcy5wcmVmZXJlbmNlcy5nZXRVc2VyUHJlZmVyZW5jZSgnZGVjX3NlcCcpO1xuXG4gICAgICAgIGlmIChzZXBhcmF0b3IpIHtcbiAgICAgICAgICAgIHJldHVybiBzZXBhcmF0b3I7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJy4nO1xuICAgIH1cblxuICAgIHJlcGxhY2VTZXBhcmF0b3JzKHRyYW5zZm9ybWVkOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBpZiAoIXRyYW5zZm9ybWVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJhbnNmb3JtZWQ7XG4gICAgICAgIH1cblxuICAgICAgICB0cmFuc2Zvcm1lZCA9IHRyYW5zZm9ybWVkID8/ICcnO1xuICAgICAgICB0cmFuc2Zvcm1lZCA9IHRyYW5zZm9ybWVkLnRvU3RyaW5nKCkucmVwbGFjZSgvLC9nLCAnZ3JvdXBfc2VwYXJhdG9yJyk7XG4gICAgICAgIHRyYW5zZm9ybWVkID0gdHJhbnNmb3JtZWQudG9TdHJpbmcoKS5yZXBsYWNlKC9cXC4vZywgJ2RlY2ltYWxfc2VwYXJhdG9yJyk7XG5cbiAgICAgICAgY29uc3QgZGVjaW1hbFN5bWJvbCA9IHRoaXMuZ2V0RGVjaW1hbHNTeW1ib2woKSB8fCAnLic7XG4gICAgICAgIGNvbnN0IGdyb3VwU3ltYm9sID0gdGhpcy5nZXRHcm91cFN5bWJvbCgpIHx8ICcsJztcblxuICAgICAgICB0cmFuc2Zvcm1lZCA9IHRyYW5zZm9ybWVkLnRvU3RyaW5nKCkucmVwbGFjZSgvZGVjaW1hbF9zZXBhcmF0b3IvZywgZGVjaW1hbFN5bWJvbCk7XG4gICAgICAgIHRyYW5zZm9ybWVkID0gdHJhbnNmb3JtZWQudG9TdHJpbmcoKS5yZXBsYWNlKC9ncm91cF9zZXBhcmF0b3IvZywgZ3JvdXBTeW1ib2wpO1xuXG4gICAgICAgIHJldHVybiB0cmFuc2Zvcm1lZDtcbiAgICB9XG5cbiAgICByZXBsYWNlU2VwYXJhdG9yc1RvSW50ZXJuYWxGb3JtYXQodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGRlY2ltYWxTeW1ib2wgPSB0aGlzLmdldERlY2ltYWxzU3ltYm9sKCkgfHwgJy4nO1xuXG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZFZhbHVlID0gdGhpcy50b0ludGVybmFsRm9ybWF0KHZhbHVlKTtcblxuICAgICAgICBpZiAoZGVjaW1hbFN5bWJvbCAhPT0gJy4nICYmIHZhbHVlPy50b1N0cmluZygpPy5pbmNsdWRlcyhkZWNpbWFsU3ltYm9sKSkge1xuICAgICAgICAgICAgdmFsdWUgPSBmb3JtYXR0ZWRWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgdmFsaWRhdGVJbnRVc2VyRm9ybWF0KGlucHV0VmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuXG4gICAgICAgIGNvbnN0IHRyaW1tZWRJbnB1dFZhbHVlID0gdGhpcy5mb3JtVXRpbHMuZ2V0VHJpbW1lZElucHV0VmFsdWUoaW5wdXRWYWx1ZSk7XG4gICAgICAgIGlmICh0aGlzLmZvcm1VdGlscy5pc0VtcHR5SW5wdXRWYWx1ZSh0cmltbWVkSW5wdXRWYWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAodGhpcy5nZXRJbnRVc2VyRm9ybWF0UGF0dGVybigpKTtcbiAgICAgICAgcmV0dXJuICFyZWdleC50ZXN0KHRyaW1tZWRJbnB1dFZhbHVlKTtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZUZsb2F0VXNlckZvcm1hdChpbnB1dFZhbHVlOiBhbnkpOiBib29sZWFuIHtcblxuICAgICAgICBjb25zdCB0cmltbWVkSW5wdXRWYWx1ZSA9IHRoaXMuZm9ybVV0aWxzLmdldFRyaW1tZWRJbnB1dFZhbHVlKGlucHV0VmFsdWUpO1xuICAgICAgICBpZiAodGhpcy5mb3JtVXRpbHMuaXNFbXB0eUlucHV0VmFsdWUodHJpbW1lZElucHV0VmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKHRoaXMuZ2V0RmxvYXRVc2VyRm9ybWF0UGF0dGVybigpKTtcbiAgICAgICAgcmV0dXJuICFyZWdleC50ZXN0KHRyaW1tZWRJbnB1dFZhbHVlKTtcblxuICAgIH1cblxufVxuIl19