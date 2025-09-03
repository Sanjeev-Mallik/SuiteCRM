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
import { SeriesTraverser } from './series-traverser.service';
import { DataTypeSeriesMapper } from './data-type-mapper/data-type.series-mapper';
import * as i0 from "@angular/core";
import * as i1 from "./series-traverser.service";
import * as i2 from "./data-type-mapper/data-type.series-mapper";
export class SeriesMapper {
    constructor(traverser, dataTypeMapper) {
        this.traverser = traverser;
        this.dataTypeMapper = dataTypeMapper;
        this.registry = {};
        this.addMapper('data-type-unit-converter', dataTypeMapper);
    }
    addMapper(unitType, mapper) {
        this.registry[unitType] = mapper;
    }
    map(result, mapperType, options) {
        const mapper = this?.registry[mapperType] ?? null;
        if (!mapper) {
            return;
        }
        this.traverser.traverse(result, mapper, options);
    }
    static { this.ɵfac = function SeriesMapper_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SeriesMapper)(i0.ɵɵinject(i1.SeriesTraverser), i0.ɵɵinject(i2.DataTypeSeriesMapper)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SeriesMapper, factory: SeriesMapper.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SeriesMapper, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.SeriesTraverser }, { type: i2.DataTypeSeriesMapper }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VyaWVzLW1hcHBlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3NlcnZpY2VzL3N0YXRpc3RpY3Mvc2VyaWVzL21hcHBlci9zZXJpZXMtbWFwcGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFHekMsT0FBTyxFQUFDLGVBQWUsRUFBa0MsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RixPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSw0Q0FBNEMsQ0FBQzs7OztBQUtoRixNQUFNLE9BQU8sWUFBWTtJQUlyQixZQUNjLFNBQTBCLEVBQzFCLGNBQW9DO1FBRHBDLGNBQVMsR0FBVCxTQUFTLENBQWlCO1FBQzFCLG1CQUFjLEdBQWQsY0FBYyxDQUFzQjtRQUpsRCxhQUFRLEdBQXFCLEVBQUUsQ0FBQztRQU01QixJQUFJLENBQUMsU0FBUyxDQUFDLDBCQUEwQixFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCxTQUFTLENBQUMsUUFBZ0IsRUFBRSxNQUFxQjtRQUM3QyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLE1BQU0sQ0FBQztJQUNyQyxDQUFDO0lBRUQsR0FBRyxDQUFDLE1BQW9CLEVBQUUsVUFBa0IsRUFBRSxPQUFtQjtRQUU3RCxNQUFNLE1BQU0sR0FBRyxJQUFJLEVBQUUsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQztRQUVsRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDVixPQUFPO1FBQ1gsQ0FBQztRQUVELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDckQsQ0FBQzs2R0F4QlEsWUFBWTt1RUFBWixZQUFZLFdBQVosWUFBWSxtQkFGVCxNQUFNOztpRkFFVCxZQUFZO2NBSHhCLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U2VyaWVzUmVzdWx0fSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY29udGFpbmVycy9jaGFydC9jaGFydC5tb2RlbCc7XG5pbXBvcnQge09iamVjdE1hcH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3R5cGVzL29iamVjdC1tYXAnO1xuaW1wb3J0IHtTZXJpZXNUcmF2ZXJzZXIsIFNlcmllc1Zpc2l0b3IsIFNlcmllc1Zpc2l0b3JNYXB9IGZyb20gJy4vc2VyaWVzLXRyYXZlcnNlci5zZXJ2aWNlJztcbmltcG9ydCB7RGF0YVR5cGVTZXJpZXNNYXBwZXJ9IGZyb20gJy4vZGF0YS10eXBlLW1hcHBlci9kYXRhLXR5cGUuc2VyaWVzLW1hcHBlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2VyaWVzTWFwcGVyIHtcblxuICAgIHJlZ2lzdHJ5OiBTZXJpZXNWaXNpdG9yTWFwID0ge307XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIHRyYXZlcnNlcjogU2VyaWVzVHJhdmVyc2VyLFxuICAgICAgICBwcm90ZWN0ZWQgZGF0YVR5cGVNYXBwZXI6IERhdGFUeXBlU2VyaWVzTWFwcGVyXG4gICAgKSB7XG4gICAgICAgIHRoaXMuYWRkTWFwcGVyKCdkYXRhLXR5cGUtdW5pdC1jb252ZXJ0ZXInLCBkYXRhVHlwZU1hcHBlcik7XG4gICAgfVxuXG4gICAgYWRkTWFwcGVyKHVuaXRUeXBlOiBzdHJpbmcsIG1hcHBlcjogU2VyaWVzVmlzaXRvcik6IHZvaWQge1xuICAgICAgICB0aGlzLnJlZ2lzdHJ5W3VuaXRUeXBlXSA9IG1hcHBlcjtcbiAgICB9XG5cbiAgICBtYXAocmVzdWx0OiBTZXJpZXNSZXN1bHQsIG1hcHBlclR5cGU6IHN0cmluZywgb3B0aW9ucz86IE9iamVjdE1hcCk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IG1hcHBlciA9IHRoaXM/LnJlZ2lzdHJ5W21hcHBlclR5cGVdID8/IG51bGw7XG5cbiAgICAgICAgaWYgKCFtYXBwZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudHJhdmVyc2VyLnRyYXZlcnNlKHJlc3VsdCwgbWFwcGVyLCBvcHRpb25zKTtcbiAgICB9XG59XG4iXX0=