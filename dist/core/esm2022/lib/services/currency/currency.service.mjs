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
import { SystemConfigStore } from '../../store/system-config/system-config.store';
import { divide, multiply, round } from 'mathjs';
import { UserPreferenceStore } from '../../store/user-preference/user-preference.store';
import * as i0 from "@angular/core";
import * as i1 from "../../store/system-config/system-config.store";
import * as i2 from "../../store/user-preference/user-preference.store";
export class CurrencyService {
    constructor(config, preferences) {
        this.config = config;
        this.preferences = preferences;
    }
    getFieldCurrencyValue(field, record) {
        const isBase = this.isBase(field);
        const currencyId = this.getCurrencyId(record);
        if (!isBase && currencyId !== null) {
            return field.value;
        }
        const value = parseFloat(field.value);
        if (!isFinite(value)) {
            return field.value;
        }
        const userCurrency = this.getUserCurrency();
        return this.baseToCurrency(userCurrency.id, value).toString();
    }
    baseToCurrency(currencyId, value) {
        const conversionRate = this.getConversionRate(currencyId);
        if (!isFinite(conversionRate)) {
            return value;
        }
        return this.round(multiply(value, conversionRate));
    }
    currencyToBase(currencyId, value) {
        const conversionRate = this.getConversionRate(currencyId);
        if (!isFinite(conversionRate)) {
            return value;
        }
        return this.round(divide(value, conversionRate));
    }
    round(value) {
        const precision = this.getPrecision();
        return round(value, precision);
    }
    getCurrencyId(record) {
        return record?.fields?.currency_id?.value ?? null;
    }
    isBase(field) {
        return field?.metadata?.isBaseCurrency ?? false;
    }
    getCurrency(id) {
        const currencies = this.config.getConfigValue('currencies');
        return currencies[id] ?? [];
    }
    getBaseCurrency() {
        return this.config.getConfigValue('currency');
    }
    getUserCurrency() {
        return this.preferences.getUserPreference('currency');
    }
    getPrecision() {
        const userPrecision = parseInt(this.preferences.getUserPreference('default_currency_significant_digits'));
        if (isFinite(userPrecision)) {
            return userPrecision;
        }
        const systemPrecision = parseInt(this.config.getConfigValue('default_currency_significant_digits'));
        if (isFinite(systemPrecision)) {
            return systemPrecision;
        }
        return 0;
    }
    getConversionRate(id) {
        const currency = this.getCurrency(id);
        return parseFloat(currency['conversion_rate']);
    }
    getCode(id) {
        return this.getCurrency(id).iso4217;
    }
    getSymbol(id) {
        return this.getCurrency(id).symbol;
    }
    static { this.ɵfac = function CurrencyService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CurrencyService)(i0.ɵɵinject(i1.SystemConfigStore), i0.ɵɵinject(i2.UserPreferenceStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CurrencyService, factory: CurrencyService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CurrencyService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.SystemConfigStore }, { type: i2.UserPreferenceStore }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3kuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9zZXJ2aWNlcy9jdXJyZW5jeS9jdXJyZW5jeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBR2hGLE9BQU8sRUFBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBQyxNQUFNLFFBQVEsQ0FBQztBQUMvQyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxtREFBbUQsQ0FBQzs7OztBQUt0RixNQUFNLE9BQU8sZUFBZTtJQUV4QixZQUNjLE1BQXlCLEVBQ3pCLFdBQWdDO1FBRGhDLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBQ3pCLGdCQUFXLEdBQVgsV0FBVyxDQUFxQjtJQUU5QyxDQUFDO0lBRUQscUJBQXFCLENBQUMsS0FBWSxFQUFFLE1BQWM7UUFDOUMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQyxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTlDLElBQUksQ0FBQyxNQUFNLElBQUksVUFBVSxLQUFLLElBQUksRUFBRSxDQUFDO1lBQ2pDLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN2QixDQUFDO1FBRUQsTUFBTSxLQUFLLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV0QyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDbkIsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3ZCLENBQUM7UUFF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QztJQUVELFNBQVMsQ0FBQyxFQUFVO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDdkMsQ0FBQztnSEF0R1EsZUFBZTt1RUFBZixlQUFlLFdBQWYsZUFBZSxtQkFGWixNQUFNOztpRkFFVCxlQUFlO2NBSDNCLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U3lzdGVtQ29uZmlnU3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL3N5c3RlbS1jb25maWcvc3lzdGVtLWNvbmZpZy5zdG9yZSc7XG5pbXBvcnQge0ZpZWxkfSBmcm9tICcuLi8uLi9jb21tb24vcmVjb3JkL2ZpZWxkLm1vZGVsJztcbmltcG9ydCB7UmVjb3JkfSBmcm9tICcuLi8uLi9jb21tb24vcmVjb3JkL3JlY29yZC5tb2RlbCc7XG5pbXBvcnQge2RpdmlkZSwgbXVsdGlwbHksIHJvdW5kfSBmcm9tICdtYXRoanMnO1xuaW1wb3J0IHtVc2VyUHJlZmVyZW5jZVN0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS91c2VyLXByZWZlcmVuY2UvdXNlci1wcmVmZXJlbmNlLnN0b3JlJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDdXJyZW5jeVNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBjb25maWc6IFN5c3RlbUNvbmZpZ1N0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgcHJlZmVyZW5jZXM6IFVzZXJQcmVmZXJlbmNlU3RvcmVcbiAgICApIHtcbiAgICB9XG5cbiAgICBnZXRGaWVsZEN1cnJlbmN5VmFsdWUoZmllbGQ6IEZpZWxkLCByZWNvcmQ6IFJlY29yZCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGlzQmFzZSA9IHRoaXMuaXNCYXNlKGZpZWxkKTtcbiAgICAgICAgY29uc3QgY3VycmVuY3lJZCA9IHRoaXMuZ2V0Q3VycmVuY3lJZChyZWNvcmQpO1xuXG4gICAgICAgIGlmICghaXNCYXNlICYmIGN1cnJlbmN5SWQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBmaWVsZC52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZhbHVlID0gcGFyc2VGbG9hdChmaWVsZC52YWx1ZSk7XG5cbiAgICAgICAgaWYgKCFpc0Zpbml0ZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmaWVsZC52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVzZXJDdXJyZW5jeSA9IHRoaXMuZ2V0VXNlckN1cnJlbmN5KCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzZVRvQ3VycmVuY3kodXNlckN1cnJlbmN5LmlkLCB2YWx1ZSkudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICBiYXNlVG9DdXJyZW5jeShjdXJyZW5jeUlkOiBzdHJpbmcsIHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xuXG4gICAgICAgIGNvbnN0IGNvbnZlcnNpb25SYXRlID0gdGhpcy5nZXRDb252ZXJzaW9uUmF0ZShjdXJyZW5jeUlkKTtcbiAgICAgICAgaWYgKCFpc0Zpbml0ZShjb252ZXJzaW9uUmF0ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnJvdW5kKG11bHRpcGx5KHZhbHVlLCBjb252ZXJzaW9uUmF0ZSkpO1xuICAgIH1cblxuICAgIGN1cnJlbmN5VG9CYXNlKGN1cnJlbmN5SWQ6IHN0cmluZywgdmFsdWU6IG51bWJlcik6IG51bWJlciB7XG5cbiAgICAgICAgY29uc3QgY29udmVyc2lvblJhdGUgPSB0aGlzLmdldENvbnZlcnNpb25SYXRlKGN1cnJlbmN5SWQpO1xuICAgICAgICBpZiAoIWlzRmluaXRlKGNvbnZlcnNpb25SYXRlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucm91bmQoZGl2aWRlKHZhbHVlLCBjb252ZXJzaW9uUmF0ZSkpO1xuICAgIH1cblxuICAgIHJvdW5kKHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBjb25zdCBwcmVjaXNpb24gPSB0aGlzLmdldFByZWNpc2lvbigpO1xuICAgICAgICByZXR1cm4gcm91bmQodmFsdWUsIHByZWNpc2lvbik7XG4gICAgfVxuXG4gICAgZ2V0Q3VycmVuY3lJZChyZWNvcmQ6IFJlY29yZCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiByZWNvcmQ/LmZpZWxkcz8uY3VycmVuY3lfaWQ/LnZhbHVlID8/IG51bGw7XG4gICAgfVxuXG4gICAgaXNCYXNlKGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gZmllbGQ/Lm1ldGFkYXRhPy5pc0Jhc2VDdXJyZW5jeSA/PyBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXRDdXJyZW5jeShpZDogc3RyaW5nKTogYW55IHtcbiAgICAgICAgY29uc3QgY3VycmVuY2llcyA9IHRoaXMuY29uZmlnLmdldENvbmZpZ1ZhbHVlKCdjdXJyZW5jaWVzJyk7XG5cbiAgICAgICAgcmV0dXJuIGN1cnJlbmNpZXNbaWRdID8/IFtdO1xuICAgIH1cblxuICAgIGdldEJhc2VDdXJyZW5jeSgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuZ2V0Q29uZmlnVmFsdWUoJ2N1cnJlbmN5Jyk7XG4gICAgfVxuXG4gICAgZ2V0VXNlckN1cnJlbmN5KCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByZWZlcmVuY2VzLmdldFVzZXJQcmVmZXJlbmNlKCdjdXJyZW5jeScpO1xuICAgIH1cblxuICAgIGdldFByZWNpc2lvbigpOiBudW1iZXIge1xuXG4gICAgICAgIGNvbnN0IHVzZXJQcmVjaXNpb24gPSBwYXJzZUludCh0aGlzLnByZWZlcmVuY2VzLmdldFVzZXJQcmVmZXJlbmNlKCdkZWZhdWx0X2N1cnJlbmN5X3NpZ25pZmljYW50X2RpZ2l0cycpKTtcblxuICAgICAgICBpZiAoaXNGaW5pdGUodXNlclByZWNpc2lvbikpIHtcbiAgICAgICAgICAgIHJldHVybiB1c2VyUHJlY2lzaW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3lzdGVtUHJlY2lzaW9uID0gcGFyc2VJbnQodGhpcy5jb25maWcuZ2V0Q29uZmlnVmFsdWUoJ2RlZmF1bHRfY3VycmVuY3lfc2lnbmlmaWNhbnRfZGlnaXRzJykpO1xuXG4gICAgICAgIGlmIChpc0Zpbml0ZShzeXN0ZW1QcmVjaXNpb24pKSB7XG4gICAgICAgICAgICByZXR1cm4gc3lzdGVtUHJlY2lzaW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgZ2V0Q29udmVyc2lvblJhdGUoaWQ6IHN0cmluZyk6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IGN1cnJlbmN5ID0gdGhpcy5nZXRDdXJyZW5jeShpZCk7XG4gICAgICAgIHJldHVybiBwYXJzZUZsb2F0KGN1cnJlbmN5Wydjb252ZXJzaW9uX3JhdGUnXSk7XG4gICAgfVxuXG4gICAgZ2V0Q29kZShpZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q3VycmVuY3koaWQpLmlzbzQyMTc7XG4gICAgfVxuXG4gICAgZ2V0U3ltYm9sKGlkOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDdXJyZW5jeShpZCkuc3ltYm9sO1xuICAgIH1cbn1cbiJdfQ==