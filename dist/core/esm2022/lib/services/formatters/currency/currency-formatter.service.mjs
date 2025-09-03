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
import { formatCurrency, formatNumber } from '@angular/common';
import { NumberFormatter } from '../number/number-formatter.service';
import { SystemConfigStore } from "../../../store/system-config/system-config.store";
import { isVoid } from "../../../common/utils/value-utils";
import * as i0 from "@angular/core";
import * as i1 from "../../../store/user-preference/user-preference.store";
import * as i2 from "../../../store/system-config/system-config.store";
import * as i3 from "../number/number-formatter.service";
export class CurrencyFormatter {
    constructor(preferences, configs, numberFormatter, locale) {
        this.preferences = preferences;
        this.configs = configs;
        this.numberFormatter = numberFormatter;
        this.locale = locale;
    }
    toUserFormat(value, options = null) {
        if (isVoid(value) || value === '') {
            return '';
        }
        const symbol = (options && options.symbol) || this.getSymbol();
        const code = (options && options.code) || this.getCode();
        const defaultGroup = this.configs.getConfigValue('default_number_grouping_seperator');
        let digits = null;
        if (options && options.digits !== null && isFinite(options.digits)) {
            digits = options.digits;
        }
        const digitsInfo = this.getDigitsInfo(digits);
        let formatted;
        if (options?.fromFormat === 'system' && value.includes(defaultGroup)) {
            value = value.replace(defaultGroup, '');
        }
        else {
            value = this.replaceSeparatorsToInternalFormat(value);
        }
        if (options && options.mode === 'edit') {
            formatted = formatNumber(Number(value), this.locale, digitsInfo);
            return this.replaceSeparators(formatted);
        }
        formatted = formatCurrency(Number(value), this.locale, symbol, code, digitsInfo);
        return this.replaceSeparators(formatted);
    }
    toInternalFormat(value) {
        if (!value) {
            return '';
        }
        const transformed = value.replace(this.getSymbol(), '');
        return this.numberFormatter.toInternalFormat(transformed);
    }
    getCurrencyFormat() {
        const currencyFormat = this.preferences.getUserPreference('currency');
        if (currencyFormat) {
            return currencyFormat;
        }
        return this.getDefaultFormat();
    }
    getDefaultFormat() {
        return {
            iso4217: 'USD',
            name: 'US Dollars',
            symbol: '$'
        };
    }
    getCode() {
        return this.getCurrencyFormat().iso4217;
    }
    getSymbol() {
        return this.getCurrencyFormat().symbol;
    }
    getDigits() {
        const digits = this.preferences.getUserPreference('default_currency_significant_digits');
        if (digits) {
            return digits;
        }
        return 2;
    }
    getDigitsInfo(definedDigits) {
        let digitInfo = '1.2-2';
        let digits = this.getDigits();
        if (definedDigits !== null && isFinite(definedDigits)) {
            digits = definedDigits;
        }
        if (digits !== null && isFinite(digits)) {
            if (digits < 1) {
                digitInfo = '1.0-0';
            }
            else {
                digitInfo = `1.${digits}-${digits}`;
            }
        }
        return digitInfo;
    }
    replaceSeparators(transformed) {
        return this.numberFormatter.replaceSeparators(transformed);
    }
    replaceSeparatorsToInternalFormat(value) {
        return this.numberFormatter.replaceSeparatorsToInternalFormat(value);
    }
    static { this.ɵfac = function CurrencyFormatter_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CurrencyFormatter)(i0.ɵɵinject(i1.UserPreferenceStore), i0.ɵɵinject(i2.SystemConfigStore), i0.ɵɵinject(i3.NumberFormatter), i0.ɵɵinject(LOCALE_ID)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CurrencyFormatter, factory: CurrencyFormatter.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CurrencyFormatter, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.UserPreferenceStore }, { type: i2.SystemConfigStore }, { type: i3.NumberFormatter }, { type: undefined, decorators: [{
                type: Inject,
                args: [LOCALE_ID]
            }] }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3ktZm9ybWF0dGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc2VydmljZXMvZm9ybWF0dGVycy9jdXJyZW5jeS9jdXJyZW5jeS1mb3JtYXR0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHNEQUFzRCxDQUFDO0FBQ3pGLE9BQU8sRUFBQyxjQUFjLEVBQUUsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0QsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG9DQUFvQyxDQUFDO0FBRW5FLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGtEQUFrRCxDQUFDO0FBQ25GLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7QUFXekQsTUFBTSxPQUFPLGlCQUFpQjtJQUUxQixZQUNjLFdBQWdDLEVBQ2hDLE9BQTBCLEVBQzFCLGVBQWdDLEVBQ2hCLE1BQWM7UUFIOUIsZ0JBQVcsR0FBWCxXQUFXLENBQXFCO1FBQ2hDLFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBQzFCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQixXQUFNLEdBQU4sTUFBTSxDQUFRO0lBRTVDLENBQUM7SUFFRCxZQUFZLENBQUMsS0FBYSxFQUFFLFVBQXlCLElBQUk7UUFFckQsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxLQUFLLEVBQUUsRUFBRSxDQUFDO1lBQ2hDLE9BQU8sRUFBRSxDQUFDO1FBQ2QsQ0FBQztRQUVELE1BQU0sTUFBTSxHQUFHLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FB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QU8sTUFBTSxDQUFDO1FBQ2xCLENBQUM7UUFFRCxPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFRCxhQUFhLENBQUMsYUFBc0I7UUFDaEMsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDO1FBQ3hCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUU5QixJQUFJLGFBQWEsS0FBSyxJQUFJLElBQUksUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUM7WUFDcEQsTUFBTSxHQUFHLGFBQWEsQ0FBQztRQUMzQixDQUFDO1FBRUQsSUFBSSxNQUFNLEtBQUssSUFBSSxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1lBQ3RDLElBQUksTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO2dCQUNiLFNBQVMsR0FBRyxPQUFPLENBQUM7WUFDeEIsQ0FBQztpQkFBTSxDQUFDO2dCQUNKLFNBQVMsR0FBRyxLQUFLLE1BQU0sSUFBSSxNQUFNLEVBQUUsQ0FBQztZQUN4QyxDQUFDO1FBQ0wsQ0FBQztRQUVELE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxXQUFtQjtRQUNqQyxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELGlDQUFpQyxDQUFDLEtBQWE7UUFDM0MsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLGlDQUFpQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pFLENBQUM7a0hBakhRLGlCQUFpQix1SEFNZCxTQUFTO3VFQU5aLGlCQUFpQixXQUFqQixpQkFBaUIsbUJBRmQsTUFBTTs7aUZBRVQsaUJBQWlCO2NBSDdCLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQjs7c0JBT1EsTUFBTTt1QkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZSwgTE9DQUxFX0lEfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VXNlclByZWZlcmVuY2VTdG9yZX0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvdXNlci1wcmVmZXJlbmNlL3VzZXItcHJlZmVyZW5jZS5zdG9yZSc7XG5pbXBvcnQge2Zvcm1hdEN1cnJlbmN5LCBmb3JtYXROdW1iZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge051bWJlckZvcm1hdHRlcn0gZnJvbSAnLi4vbnVtYmVyL251bWJlci1mb3JtYXR0ZXIuc2VydmljZSc7XG5pbXBvcnQge0Zvcm1hdE9wdGlvbnMsIEZvcm1hdHRlcn0gZnJvbSAnLi4vZm9ybWF0dGVyLm1vZGVsJztcbmltcG9ydCB7U3lzdGVtQ29uZmlnU3RvcmV9IGZyb20gXCIuLi8uLi8uLi9zdG9yZS9zeXN0ZW0tY29uZmlnL3N5c3RlbS1jb25maWcuc3RvcmVcIjtcbmltcG9ydCB7aXNWb2lkfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3V0aWxzL3ZhbHVlLXV0aWxzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3VycmVuY3lGb3JtYXQge1xuICAgIGlzbzQyMTc6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgc3ltYm9sOiBzdHJpbmc7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ3VycmVuY3lGb3JtYXR0ZXIgaW1wbGVtZW50cyBGb3JtYXR0ZXIge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBwcmVmZXJlbmNlczogVXNlclByZWZlcmVuY2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGNvbmZpZ3M6IFN5c3RlbUNvbmZpZ1N0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbnVtYmVyRm9ybWF0dGVyOiBOdW1iZXJGb3JtYXR0ZXIsXG4gICAgICAgIEBJbmplY3QoTE9DQUxFX0lEKSBwdWJsaWMgbG9jYWxlOiBzdHJpbmdcbiAgICApIHtcbiAgICB9XG5cbiAgICB0b1VzZXJGb3JtYXQodmFsdWU6IHN0cmluZywgb3B0aW9uczogRm9ybWF0T3B0aW9ucyA9IG51bGwpOiBzdHJpbmcge1xuXG4gICAgICAgIGlmIChpc1ZvaWQodmFsdWUpIHx8IHZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3ltYm9sID0gKG9wdGlvbnMgJiYgb3B0aW9ucy5zeW1ib2wpIHx8IHRoaXMuZ2V0U3ltYm9sKCk7XG4gICAgICAgIGNvbnN0IGNvZGUgPSAob3B0aW9ucyAmJiBvcHRpb25zLmNvZGUpIHx8IHRoaXMuZ2V0Q29kZSgpO1xuICAgICAgICBjb25zdCBkZWZhdWx0R3JvdXAgPSB0aGlzLmNvbmZpZ3MuZ2V0Q29uZmlnVmFsdWUoJ2RlZmF1bHRfbnVtYmVyX2dyb3VwaW5nX3NlcGVyYXRvcicpO1xuICAgICAgICBsZXQgZGlnaXRzID0gbnVsbDtcbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5kaWdpdHMgIT09IG51bGwgJiYgaXNGaW5pdGUob3B0aW9ucy5kaWdpdHMpKSB7XG4gICAgICAgICAgICBkaWdpdHMgPSBvcHRpb25zLmRpZ2l0cztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRpZ2l0c0luZm8gPSB0aGlzLmdldERpZ2l0c0luZm8oZGlnaXRzKTtcbiAgICAgICAgbGV0IGZvcm1hdHRlZDogc3RyaW5nO1xuXG4gICAgICAgIGlmIChvcHRpb25zPy5mcm9tRm9ybWF0ID09PSAnc3lzdGVtJyAmJiB2YWx1ZS5pbmNsdWRlcyhkZWZhdWx0R3JvdXApKXtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZShkZWZhdWx0R3JvdXAsICcnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5yZXBsYWNlU2VwYXJhdG9yc1RvSW50ZXJuYWxGb3JtYXQodmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5tb2RlID09PSAnZWRpdCcpIHtcbiAgICAgICAgICAgIGZvcm1hdHRlZCA9IGZvcm1hdE51bWJlcihOdW1iZXIodmFsdWUpLCB0aGlzLmxvY2FsZSwgZGlnaXRzSW5mbyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXBsYWNlU2VwYXJhdG9ycyhmb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9ybWF0dGVkID0gZm9ybWF0Q3VycmVuY3koTnVtYmVyKHZhbHVlKSwgdGhpcy5sb2NhbGUsIHN5bWJvbCwgY29kZSwgZGlnaXRzSW5mbyk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcGxhY2VTZXBhcmF0b3JzKGZvcm1hdHRlZCk7XG4gICAgfVxuXG4gICAgdG9JbnRlcm5hbEZvcm1hdCh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdHJhbnNmb3JtZWQgPSB2YWx1ZS5yZXBsYWNlKHRoaXMuZ2V0U3ltYm9sKCksICcnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtYmVyRm9ybWF0dGVyLnRvSW50ZXJuYWxGb3JtYXQodHJhbnNmb3JtZWQpO1xuICAgIH1cblxuICAgIGdldEN1cnJlbmN5Rm9ybWF0KCk6IEN1cnJlbmN5Rm9ybWF0IHtcbiAgICAgICAgY29uc3QgY3VycmVuY3lGb3JtYXQgPSB0aGlzLnByZWZlcmVuY2VzLmdldFVzZXJQcmVmZXJlbmNlKCdjdXJyZW5jeScpO1xuXG4gICAgICAgIGlmIChjdXJyZW5jeUZvcm1hdCkge1xuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbmN5Rm9ybWF0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGVmYXVsdEZvcm1hdCgpO1xuICAgIH1cblxuICAgIGdldERlZmF1bHRGb3JtYXQoKTogQ3VycmVuY3lGb3JtYXQge1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc280MjE3OiAnVVNEJyxcbiAgICAgICAgICAgIG5hbWU6ICdVUyBEb2xsYXJzJyxcbiAgICAgICAgICAgIHN5bWJvbDogJyQnXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0Q29kZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDdXJyZW5jeUZvcm1hdCgpLmlzbzQyMTc7XG4gICAgfVxuXG4gICAgZ2V0U3ltYm9sKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEN1cnJlbmN5Rm9ybWF0KCkuc3ltYm9sO1xuICAgIH1cblxuICAgIGdldERpZ2l0cygpOiBudW1iZXIge1xuICAgICAgICBjb25zdCBkaWdpdHMgPSB0aGlzLnByZWZlcmVuY2VzLmdldFVzZXJQcmVmZXJlbmNlKCdkZWZhdWx0X2N1cnJlbmN5X3NpZ25pZmljYW50X2RpZ2l0cycpO1xuXG4gICAgICAgIGlmIChkaWdpdHMpIHtcbiAgICAgICAgICAgIHJldHVybiBkaWdpdHM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gMjtcbiAgICB9XG5cbiAgICBnZXREaWdpdHNJbmZvKGRlZmluZWREaWdpdHM/OiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICBsZXQgZGlnaXRJbmZvID0gJzEuMi0yJztcbiAgICAgICAgbGV0IGRpZ2l0cyA9IHRoaXMuZ2V0RGlnaXRzKCk7XG5cbiAgICAgICAgaWYgKGRlZmluZWREaWdpdHMgIT09IG51bGwgJiYgaXNGaW5pdGUoZGVmaW5lZERpZ2l0cykpIHtcbiAgICAgICAgICAgIGRpZ2l0cyA9IGRlZmluZWREaWdpdHM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGlnaXRzICE9PSBudWxsICYmIGlzRmluaXRlKGRpZ2l0cykpIHtcbiAgICAgICAgICAgIGlmIChkaWdpdHMgPCAxKSB7XG4gICAgICAgICAgICAgICAgZGlnaXRJbmZvID0gJzEuMC0wJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGlnaXRJbmZvID0gYDEuJHtkaWdpdHN9LSR7ZGlnaXRzfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGlnaXRJbmZvO1xuICAgIH1cblxuICAgIHJlcGxhY2VTZXBhcmF0b3JzKHRyYW5zZm9ybWVkOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5udW1iZXJGb3JtYXR0ZXIucmVwbGFjZVNlcGFyYXRvcnModHJhbnNmb3JtZWQpO1xuICAgIH1cblxuICAgIHJlcGxhY2VTZXBhcmF0b3JzVG9JbnRlcm5hbEZvcm1hdCh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtYmVyRm9ybWF0dGVyLnJlcGxhY2VTZXBhcmF0b3JzVG9JbnRlcm5hbEZvcm1hdCh2YWx1ZSk7XG4gICAgfVxufVxuIl19