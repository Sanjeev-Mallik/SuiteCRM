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
import { DataTypeUnitConverter } from '../../../../unit-converters/data-type.unit-converter.service';
import { DataTypeFormatter } from '../../../../formatters/data-type.formatter.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../../unit-converters/data-type.unit-converter.service";
import * as i2 from "../../../../formatters/data-type.formatter.service";
export class DataTypeSeriesMapper {
    constructor(converter, formatter) {
        this.converter = converter;
        this.formatter = formatter;
    }
    visit(item, options) {
        const dataType = options?.dataType ?? null;
        const direction = options?.direction ?? 'user-unit';
        if (!dataType) {
            return;
        }
        // Convert from user format to internal format before parsing to handle custom separators
        const internalValue = this.formatter.toInternalFormat(dataType, item.value.toString());
        const numberValue = parseFloat(internalValue.toString());
        if (!isFinite(numberValue)) {
            return;
        }
        if (direction === 'user-unit') {
            item.value = this.converter.toUserFormat(dataType, numberValue.toString());
            return;
        }
        item.value = this.converter.toInternalFormat(dataType, numberValue.toString());
    }
    static { this.ɵfac = function DataTypeSeriesMapper_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DataTypeSeriesMapper)(i0.ɵɵinject(i1.DataTypeUnitConverter), i0.ɵɵinject(i2.DataTypeFormatter)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DataTypeSeriesMapper, factory: DataTypeSeriesMapper.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataTypeSeriesMapper, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.DataTypeUnitConverter }, { type: i2.DataTypeFormatter }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10eXBlLnNlcmllcy1tYXBwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc2VydmljZXMvc3RhdGlzdGljcy9zZXJpZXMvbWFwcGVyL2RhdGEtdHlwZS1tYXBwZXIvZGF0YS10eXBlLnNlcmllcy1tYXBwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sOERBQThELENBQUM7QUFJbkcsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sb0RBQW9ELENBQUM7Ozs7QUFLckYsTUFBTSxPQUFPLG9CQUFvQjtJQUc3QixZQUFzQixTQUFnQyxFQUFZLFNBQTRCO1FBQXhFLGNBQVMsR0FBVCxTQUFTLENBQXVCO1FBQVksY0FBUyxHQUFULFNBQVMsQ0FBbUI7SUFDOUYsQ0FBQztJQUVELEtBQUssQ0FBQyxJQUFjLEVBQUUsT0FBbUI7UUFFckMsTUFBTSxRQUFRLEdBQUcsT0FBTyxFQUFFLFFBQVEsSUFBSSxJQUFJLENBQUM7UUFDM0MsTUFBTSxTQUFTLEdBQUcsT0FBTyxFQUFFLFNBQVMsSUFBSSxXQUFXLENBQUM7UUFFcEQsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ1osT0FBTztRQUNYLENBQUM7UUFFRCx5RkFBeUY7UUFDekYsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZGLE1BQU0sV0FBVyxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUV6RCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUM7WUFDekIsT0FBTztRQUNYLENBQUM7UUFFRCxJQUFJLFNBQVMsS0FBSyxXQUFXLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUMzRSxPQUFPO1FBQ1gsQ0FBQztRQUVELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFFbkYsQ0FBQztxSEE5QlEsb0JBQW9CO3VFQUFwQixvQkFBb0IsV0FBcEIsb0JBQW9CLG1CQUZqQixNQUFNOztpRkFFVCxvQkFBb0I7Y0FIaEMsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEYXRhVHlwZVVuaXRDb252ZXJ0ZXJ9IGZyb20gJy4uLy4uLy4uLy4uL3VuaXQtY29udmVydGVycy9kYXRhLXR5cGUudW5pdC1jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQge1Nlcmllc1Zpc2l0b3J9IGZyb20gJy4uL3Nlcmllcy10cmF2ZXJzZXIuc2VydmljZSc7XG5pbXBvcnQge0RhdGFJdGVtfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY29udGFpbmVycy9jaGFydC9jaGFydC5tb2RlbCc7XG5pbXBvcnQge09iamVjdE1hcH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL3R5cGVzL29iamVjdC1tYXAnO1xuaW1wb3J0IHtEYXRhVHlwZUZvcm1hdHRlcn0gZnJvbSAnLi4vLi4vLi4vLi4vZm9ybWF0dGVycy9kYXRhLXR5cGUuZm9ybWF0dGVyLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhdGFUeXBlU2VyaWVzTWFwcGVyIGltcGxlbWVudHMgU2VyaWVzVmlzaXRvciB7XG5cblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjb252ZXJ0ZXI6IERhdGFUeXBlVW5pdENvbnZlcnRlciwgcHJvdGVjdGVkIGZvcm1hdHRlcjogRGF0YVR5cGVGb3JtYXR0ZXIpIHtcbiAgICB9XG5cbiAgICB2aXNpdChpdGVtOiBEYXRhSXRlbSwgb3B0aW9ucz86IE9iamVjdE1hcCk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IGRhdGFUeXBlID0gb3B0aW9ucz8uZGF0YVR5cGUgPz8gbnVsbDtcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gb3B0aW9ucz8uZGlyZWN0aW9uID8/ICd1c2VyLXVuaXQnO1xuXG4gICAgICAgIGlmICghZGF0YVR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENvbnZlcnQgZnJvbSB1c2VyIGZvcm1hdCB0byBpbnRlcm5hbCBmb3JtYXQgYmVmb3JlIHBhcnNpbmcgdG8gaGFuZGxlIGN1c3RvbSBzZXBhcmF0b3JzXG4gICAgICAgIGNvbnN0IGludGVybmFsVmFsdWUgPSB0aGlzLmZvcm1hdHRlci50b0ludGVybmFsRm9ybWF0KGRhdGFUeXBlLCBpdGVtLnZhbHVlLnRvU3RyaW5nKCkpO1xuICAgICAgICBjb25zdCBudW1iZXJWYWx1ZSA9IHBhcnNlRmxvYXQoaW50ZXJuYWxWYWx1ZS50b1N0cmluZygpKTtcblxuICAgICAgICBpZiAoIWlzRmluaXRlKG51bWJlclZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3VzZXItdW5pdCcpIHtcbiAgICAgICAgICAgIGl0ZW0udmFsdWUgPSB0aGlzLmNvbnZlcnRlci50b1VzZXJGb3JtYXQoZGF0YVR5cGUsIG51bWJlclZhbHVlLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaXRlbS52YWx1ZSA9IHRoaXMuY29udmVydGVyLnRvSW50ZXJuYWxGb3JtYXQoZGF0YVR5cGUsIG51bWJlclZhbHVlLnRvU3RyaW5nKCkpO1xuXG4gICAgfVxuXG5cbn1cbiJdfQ==