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
import { ConditionOperatorActionHandler } from '../condition-operator.action';
import * as i0 from "@angular/core";
export class IsEqualAction extends ConditionOperatorActionHandler {
    constructor() {
        super();
        this.key = 'is-equal';
    }
    run(record, field, opsConfig) {
        let comparisonValue = null;
        if (this.compareToField(opsConfig)) {
            comparisonValue = this.getFieldComparisonValue(record, opsConfig);
        }
        else {
            comparisonValue = this.getStaticComparisonValue(opsConfig);
        }
        if (comparisonValue) {
            return comparisonValue.includes(field.value.toString());
        }
        return false;
    }
    getFieldComparisonValue(record, opsConfig) {
        return [record.fields[opsConfig.field]?.value];
    }
    getStaticComparisonValue(opsConfig) {
        if (Array.isArray(opsConfig.values)) {
            return opsConfig.values.map(value => value?.toString());
        }
        return [opsConfig.value].map(value => value?.toString());
    }
    compareToField(opsConfig) {
        if (opsConfig?.field) {
            return true;
        }
        return false;
    }
    static { this.ɵfac = function IsEqualAction_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || IsEqualAction)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: IsEqualAction, factory: IsEqualAction.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IsEqualAction, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtZXF1YWwuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3NlcnZpY2VzL2NvbmRpdGlvbi1vcGVyYXRvcnMvaXMtZXF1YWwvaXMtZXF1YWwuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyw4QkFBOEIsRUFBQyxNQUFNLDhCQUE4QixDQUFDOztBQVM1RSxNQUFNLE9BQU8sYUFBYyxTQUFRLDhCQUE4QjtJQUk3RDtRQUNJLEtBQUssRUFBRSxDQUFDO1FBSFosUUFBRyxHQUFHLFVBQVUsQ0FBQztJQUlqQixDQUFDO0lBRUQsR0FBRyxDQUFDLE1BQWMsRUFBRSxLQUFZLEVBQUUsU0FBMEI7UUFDeEQsSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBRTNCLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDO1lBQ2pDLGVBQWUsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3RFLENBQUM7YUFBTSxDQUFDO1lBQ0osZUFBZSxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvRCxDQUFDO1FBRUQsSUFBSSxlQUFlLEVBQUUsQ0FBQztZQUNsQixPQUFPLGVBQWUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzVELENBQUM7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRVMsdUJBQXVCLENBQUMsTUFBYyxFQUFFLFNBQTBCO1FBQ3hFLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRVMsd0JBQXdCLENBQUMsU0FBMEI7UUFDekQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1lBQ2xDLE9BQU8sU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUM1RCxDQUFDO1FBRUQsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRVMsY0FBYyxDQUFDLFNBQTBCO1FBQy9DLElBQUksU0FBUyxFQUFFLEtBQUssRUFBQyxDQUFDO1lBQ2xCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDOzhHQXhDUSxhQUFhO3VFQUFiLGFBQWEsV0FBYixhQUFhLG1CQUZWLE1BQU07O2lGQUVULGFBQWE7Y0FIekIsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjMgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb25kaXRpb25PcGVyYXRvckFjdGlvbkhhbmRsZXJ9IGZyb20gJy4uL2NvbmRpdGlvbi1vcGVyYXRvci5hY3Rpb24nO1xuaW1wb3J0IHtGaWVsZH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3JlY29yZC9maWVsZC5tb2RlbCc7XG5pbXBvcnQge1JlY29yZH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3JlY29yZC9yZWNvcmQubW9kZWwnO1xuaW1wb3J0IHtMb2dpY1J1bGVWYWx1ZXN9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9tZXRhZGF0YS9tZXRhZGF0YS5tb2RlbCc7XG5pbXBvcnQge0NvbmRpdGlvbk9wZXJhdG9yTW9kZWx9IGZyb20gJy4uL2NvbmRpdGlvbi1vcGVyYXRvci5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgSXNFcXVhbEFjdGlvbiBleHRlbmRzIENvbmRpdGlvbk9wZXJhdG9yQWN0aW9uSGFuZGxlciBpbXBsZW1lbnRzIENvbmRpdGlvbk9wZXJhdG9yTW9kZWwge1xuXG4gICAga2V5ID0gJ2lzLWVxdWFsJztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHJ1bihyZWNvcmQ6IFJlY29yZCwgZmllbGQ6IEZpZWxkLCBvcHNDb25maWc6IExvZ2ljUnVsZVZhbHVlcyk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgY29tcGFyaXNvblZhbHVlID0gbnVsbDtcblxuICAgICAgICBpZiAodGhpcy5jb21wYXJlVG9GaWVsZChvcHNDb25maWcpKSB7XG4gICAgICAgICAgICBjb21wYXJpc29uVmFsdWUgPSB0aGlzLmdldEZpZWxkQ29tcGFyaXNvblZhbHVlKHJlY29yZCwgb3BzQ29uZmlnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbXBhcmlzb25WYWx1ZSA9IHRoaXMuZ2V0U3RhdGljQ29tcGFyaXNvblZhbHVlKG9wc0NvbmZpZyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29tcGFyaXNvblZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gY29tcGFyaXNvblZhbHVlLmluY2x1ZGVzKGZpZWxkLnZhbHVlLnRvU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0RmllbGRDb21wYXJpc29uVmFsdWUocmVjb3JkOiBSZWNvcmQsIG9wc0NvbmZpZzogTG9naWNSdWxlVmFsdWVzKTogc3RyaW5nW10ge1xuICAgICAgICByZXR1cm4gW3JlY29yZC5maWVsZHNbb3BzQ29uZmlnLmZpZWxkXT8udmFsdWVdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRTdGF0aWNDb21wYXJpc29uVmFsdWUob3BzQ29uZmlnOiBMb2dpY1J1bGVWYWx1ZXMpOiBhbnlbXSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG9wc0NvbmZpZy52YWx1ZXMpKSB7XG4gICAgICAgICAgICByZXR1cm4gb3BzQ29uZmlnLnZhbHVlcy5tYXAodmFsdWUgPT4gdmFsdWU/LnRvU3RyaW5nKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFtvcHNDb25maWcudmFsdWVdLm1hcCh2YWx1ZSA9PiB2YWx1ZT8udG9TdHJpbmcoKSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNvbXBhcmVUb0ZpZWxkKG9wc0NvbmZpZzogTG9naWNSdWxlVmFsdWVzKTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChvcHNDb25maWc/LmZpZWxkKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG4iXX0=