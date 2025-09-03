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
import { deepClone } from '../../../../../common/utils/object-utils';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class SavedSearchRecordMapper {
    getKey() {
        return 'criteria';
    }
    map(record) {
        const savedFilter = record;
        if (savedFilter.criteria) {
            const contents = savedFilter?.attributes?.contents ?? {};
            const filters = savedFilter?.criteria?.filters ?? {};
            contents.filters = deepClone(filters);
            if (record.fields.name) {
                contents.name = record.fields.name.value;
                savedFilter.criteria.name = contents.name;
            }
            if (record.fields.orderBy) {
                contents.orderBy = record.fields.orderBy.value;
                savedFilter.criteria.orderBy = contents.orderBy;
            }
            if (record.fields.sortOrder) {
                contents.sortOrder = record.fields.sortOrder.value;
                savedFilter.criteria.sortOrder = contents.sortOrder;
            }
            if (record.attributes.search_module) {
                contents.searchModule = record.attributes.search_module;
                savedFilter.criteria.searchModule = contents.searchModule;
            }
            savedFilter.attributes.contents = contents;
        }
        let key = savedFilter.key || '';
        if (key === 'default') {
            key = '';
        }
        savedFilter.id = key;
        savedFilter.attributes.id = key;
    }
    static { this.ɵfac = function SavedSearchRecordMapper_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SavedSearchRecordMapper)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SavedSearchRecordMapper, factory: SavedSearchRecordMapper.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SavedSearchRecordMapper, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZWQtc2VhcmNoLnJlY29yZC1tYXBwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9saXN0LWZpbHRlci9zdG9yZS9zYXZlZC1maWx0ZXIvcmVjb3JkLW1hcHBlcnMvc2F2ZWQtc2VhcmNoLnJlY29yZC1tYXBwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSwwQ0FBMEMsQ0FBQztBQUduRSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDOztBQU16QyxNQUFNLE9BQU8sdUJBQXVCO0lBRWhDLE1BQU07UUFDRixPQUFPLFVBQVUsQ0FBQztJQUN0QixDQUFDO0lBRUQsR0FBRyxDQUFDLE1BQWM7UUFDZCxNQUFNLFdBQVcsR0FBZ0IsTUFBTSxDQUFDO1FBQ3hDLElBQUksV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3ZCLE1BQU0sUUFBUSxHQUFHLFdBQVcsRUFBRSxVQUFVLEVBQUUsUUFBUSxJQUFJLEVBQUUsQ0FBQztZQUN6RCxNQUFNLE9BQU8sR0FBRyxXQUFXLEVBQUUsUUFBUSxFQUFFLE9BQU8sSUFBSSxFQUFFLENBQUM7WUFDckQsUUFBUSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFdEMsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNyQixRQUFRLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDekMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztZQUM5QyxDQUFDO1lBRUQsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUN4QixRQUFRLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztnQkFDL0MsV0FBVyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUNwRCxDQUFDO1lBRUQsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUMxQixRQUFRLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztnQkFDbkQsV0FBVyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQztZQUN4RCxDQUFDO1lBRUQsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUNsQyxRQUFRLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO2dCQUN4RCxXQUFXLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDO1lBQzlELENBQUM7WUFFRCxXQUFXLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDL0MsQ0FBQztRQUVELElBQUksR0FBRyxHQUFHLFdBQVcsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDO1FBQ2hDLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ3BCLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDYixDQUFDO1FBRUQsV0FBVyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFDckIsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDO0lBQ3BDLENBQUM7d0hBM0NRLHVCQUF1Qjt1RUFBdkIsdUJBQXVCLFdBQXZCLHVCQUF1QixtQkFGcEIsTUFBTTs7aUZBRVQsdUJBQXVCO2NBSG5DLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtkZWVwQ2xvbmV9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi91dGlscy9vYmplY3QtdXRpbHMnO1xuaW1wb3J0IHtSZWNvcmR9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9yZWNvcmQvcmVjb3JkLm1vZGVsJztcbmltcG9ydCB7UmVjb3JkTWFwcGVyfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vcmVjb3JkL3JlY29yZC1tYXBwZXJzL3JlY29yZC1tYXBwZXIubW9kZWwnO1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U2F2ZWRGaWx0ZXJ9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0b3JlL3NhdmVkLWZpbHRlcnMvc2F2ZWQtZmlsdGVyLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTYXZlZFNlYXJjaFJlY29yZE1hcHBlciBpbXBsZW1lbnRzIFJlY29yZE1hcHBlciB7XG5cbiAgICBnZXRLZXkoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdjcml0ZXJpYSc7XG4gICAgfVxuXG4gICAgbWFwKHJlY29yZDogUmVjb3JkKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNhdmVkRmlsdGVyOiBTYXZlZEZpbHRlciA9IHJlY29yZDtcbiAgICAgICAgaWYgKHNhdmVkRmlsdGVyLmNyaXRlcmlhKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50cyA9IHNhdmVkRmlsdGVyPy5hdHRyaWJ1dGVzPy5jb250ZW50cyA/PyB7fTtcbiAgICAgICAgICAgIGNvbnN0IGZpbHRlcnMgPSBzYXZlZEZpbHRlcj8uY3JpdGVyaWE/LmZpbHRlcnMgPz8ge307XG4gICAgICAgICAgICBjb250ZW50cy5maWx0ZXJzID0gZGVlcENsb25lKGZpbHRlcnMpO1xuXG4gICAgICAgICAgICBpZiAocmVjb3JkLmZpZWxkcy5uYW1lKSB7XG4gICAgICAgICAgICAgICAgY29udGVudHMubmFtZSA9IHJlY29yZC5maWVsZHMubmFtZS52YWx1ZTtcbiAgICAgICAgICAgICAgICBzYXZlZEZpbHRlci5jcml0ZXJpYS5uYW1lID0gY29udGVudHMubmFtZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJlY29yZC5maWVsZHMub3JkZXJCeSkge1xuICAgICAgICAgICAgICAgIGNvbnRlbnRzLm9yZGVyQnkgPSByZWNvcmQuZmllbGRzLm9yZGVyQnkudmFsdWU7XG4gICAgICAgICAgICAgICAgc2F2ZWRGaWx0ZXIuY3JpdGVyaWEub3JkZXJCeSA9IGNvbnRlbnRzLm9yZGVyQnk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyZWNvcmQuZmllbGRzLnNvcnRPcmRlcikge1xuICAgICAgICAgICAgICAgIGNvbnRlbnRzLnNvcnRPcmRlciA9IHJlY29yZC5maWVsZHMuc29ydE9yZGVyLnZhbHVlO1xuICAgICAgICAgICAgICAgIHNhdmVkRmlsdGVyLmNyaXRlcmlhLnNvcnRPcmRlciA9IGNvbnRlbnRzLnNvcnRPcmRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJlY29yZC5hdHRyaWJ1dGVzLnNlYXJjaF9tb2R1bGUpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50cy5zZWFyY2hNb2R1bGUgPSByZWNvcmQuYXR0cmlidXRlcy5zZWFyY2hfbW9kdWxlO1xuICAgICAgICAgICAgICAgIHNhdmVkRmlsdGVyLmNyaXRlcmlhLnNlYXJjaE1vZHVsZSA9IGNvbnRlbnRzLnNlYXJjaE1vZHVsZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2F2ZWRGaWx0ZXIuYXR0cmlidXRlcy5jb250ZW50cyA9IGNvbnRlbnRzO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGtleSA9IHNhdmVkRmlsdGVyLmtleSB8fCAnJztcbiAgICAgICAgaWYgKGtleSA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgICAgICBrZXkgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIHNhdmVkRmlsdGVyLmlkID0ga2V5O1xuICAgICAgICBzYXZlZEZpbHRlci5hdHRyaWJ1dGVzLmlkID0ga2V5O1xuICAgIH1cbn1cbiJdfQ==