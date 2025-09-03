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
import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { emptyObject } from '../../../../common/utils/object-utils';
import { take } from 'rxjs/operators';
import { HistoryTimelineStoreFactory } from './history-timeline.store.factory';
import * as i0 from "@angular/core";
import * as i1 from "./history-timeline.store.factory";
export class HistoryTimelineAdapter {
    constructor(historyTimelineStoreFactory) {
        this.historyTimelineStoreFactory = historyTimelineStoreFactory;
        this.loading = signal(false);
        this.initializing = signal(true);
        this.firstLoad = signal(true);
        this.allLoaded = signal(false);
        this.cache = [];
        this.dataStream = new BehaviorSubject(this.cache);
        this.dataStream$ = this.dataStream.asObservable();
        this.defaultPageSize = 10;
    }
    /**
     * @returns {void}
     * @param {ViewContext} context - parent module context
     * @description adapter init function to initialize timeline store
     */
    init(context) {
        this.store = this.historyTimelineStoreFactory.create();
        this.store.init(context);
    }
    /**
     * @returns {Observable<HistoryTimelineEntry[]>} return observable array of timeline entries
     * @description retrieve next set of records starting from the current offset
     * represented by the field this.cache.length
     * @param {boolean} reload timeline
     */
    fetchTimelineEntries(reload) {
        if (this.loading() === true) {
            return;
        }
        if (reload === true) {
            this.cache.length = 0;
        }
        this.store.initSearchCriteria(this.cache.length, this.defaultPageSize);
        this.loading.set(true);
        this.initializing.set(false);
        this.store.load(false).pipe(take(1)).subscribe(value => {
            this.loading.set(false);
            this.firstLoad.set(false);
            const records = value.records;
            if (!emptyObject(records)) {
                Object.keys(records).forEach(key => {
                    this.cache.push(this.buildTimelineEntry(records[key]));
                });
            }
            this.allLoaded.set((value?.pagination?.pageLast ?? 0) < (value?.pagination?.pageSize ?? 0));
            this.dataStream.next([...this.cache]);
        });
        return this.dataStream$;
    }
    /**
     * @returns {string} color code
     * @param {string} activity the valid activity types
     * @description {returns the mapped background color code defined for an activity}
     */
    getActivityGridColor(activity) {
        const colorMap = {
            calls: 'yellow',
            tasks: 'green',
            meetings: 'blue',
            notes: 'orange',
            audit: 'purple',
            history: 'purple'
        };
        return colorMap[activity] || 'yellow';
    }
    /**
     * @returns {HistoryTimelineEntry} Timeline Entry
     * @param {Record} record object
     * @description {returns the mapped record to timeline entry}
     */
    buildTimelineEntry(record) {
        const timelineModule = record.module;
        let moduleIcon = record.attributes.module_name;
        if (timelineModule === 'audit') {
            moduleIcon = 'History';
        }
        const gridColor = this.getActivityGridColor(record.module);
        const timelineEntry = {
            module: timelineModule,
            icon: moduleIcon,
            color: gridColor,
            title: {
                type: 'varchar',
                value: record.attributes.name,
                loading: signal(false),
                display: signal('default')
            },
            user: {
                type: 'varchar',
                value: record.attributes.assigned_user_name.user_name,
                loading: signal(false),
                display: signal('default')
            },
            date: {
                type: 'datetime',
                value: record.attributes.date_end,
                loading: signal(false),
                display: signal('default')
            },
            record
        };
        if (timelineModule === 'audit') {
            timelineEntry.description = {
                type: 'html',
                value: record.attributes.description,
                loading: signal(false),
                display: signal('default')
            };
        }
        return timelineEntry;
    }
    static { this.ɵfac = function HistoryTimelineAdapter_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HistoryTimelineAdapter)(i0.ɵɵinject(i1.HistoryTimelineStoreFactory)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: HistoryTimelineAdapter, factory: HistoryTimelineAdapter.ɵfac }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HistoryTimelineAdapter, [{
        type: Injectable
    }], () => [{ type: i1.HistoryTimelineStoreFactory }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlzdG9yeS10aW1lbGluZS5hZGFwdGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9zaWRlYmFyLXdpZGdldC9jb21wb25lbnRzL2hpc3Rvcnktc2lkZWJhci13aWRnZXQvaGlzdG9yeS10aW1lbGluZS5hZGFwdGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUVqRSxPQUFPLEVBQUMsZUFBZSxFQUFhLE1BQU0sTUFBTSxDQUFDO0FBRWpELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUdsRSxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEMsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7OztBQUs3RSxNQUFNLE9BQU8sc0JBQXNCO0lBYS9CLFlBQXNCLDJCQUF3RDtRQUF4RCxnQ0FBMkIsR0FBM0IsMkJBQTJCLENBQTZCO1FBWjlFLFlBQU8sR0FBNEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pELGlCQUFZLEdBQTRCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyRCxjQUFTLEdBQTRCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRCxjQUFTLEdBQTRCLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVuRCxVQUFLLEdBQTJCLEVBQUUsQ0FBQztRQUNuQyxlQUFVLEdBQUcsSUFBSSxlQUFlLENBQXlCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyRSxnQkFBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFckMsb0JBQWUsR0FBRyxFQUFFLENBQUM7SUFLN0IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFJLENBQUMsT0FBb0I7UUFFckIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsMkJBQTJCLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDdkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsb0JBQW9CLENBQUMsTUFBZTtRQUVoQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUMxQixPQUFPO1FBQ1gsQ0FBQztRQUVELElBQUksTUFBTSxLQUFLLElBQUksRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUMxQixDQUFDO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFdkUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNuRCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxQixNQUFNLE9BQU8sR0FBYyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBRXpDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztnQkFFeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBRS9CLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzRCxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUM7WUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsUUFBUSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxRQUFRLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUU1RixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxvQkFBb0IsQ0FBQyxRQUF1QjtRQUN4QyxNQUFNLFFBQVEsR0FBRztZQUNiLEtBQUssRUFBRSxRQUFRO1lBQ2YsS0FBSyxFQUFFLE9BQU87WUFDZCxRQUFRLEVBQUUsTUFBTTtZQUNoQixLQUFLLEVBQUUsUUFBUTtZQUNmLEtBQUssRUFBRSxRQUFRO1lBQ2YsT0FBTyxFQUFFLFFBQVE7U0FDcEIsQ0FBQztRQUNGLE9BQU8sUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLFFBQVEsQ0FBQztJQUMxQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGtCQUFrQixDQUFDLE1BQWM7UUFFN0IsTUFBTSxjQUFjLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUVyQyxJQUFJLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztRQUMvQyxJQUFJLGNBQWMsS0FBSyxPQUFPLEVBQUUsQ0FBQztZQUM3QixVQUFVLEdBQUcsU0FBUyxDQUFDO1FBQzNCLENBQUM7UUFFRCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTNELE1BQU0sYUFBYSxHQUFHO1lBQ2xCLE1BQU0sRUFBRSxjQUFjO1lBQ3RCLElBQUksRUFBRSxVQUFVO1lBQ2hCLEtBQUssRUFBRSxTQUFTO1lBQ2hCLEtBQUssRUFBRTtnQkFDSCxJQUFJLEVBQUUsU0FBUztnQkFDZixLQUFLLEVBQUUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJO2dCQUM3QixPQUFPLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDdEIsT0FBTyxFQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUM7YUFDN0I7WUFDRCxJQUFJLEVBQUU7Z0JBQ0YsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsS0FBSyxFQUFFLE1BQU0sQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsU0FBUztnQkFDckQsT0FBTyxFQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQ3ZCLE9BQU8sRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDO2FBQzdCO1lBQ0QsSUFBSSxFQUFFO2dCQUNGLElBQUksRUFBRSxVQUFVO2dCQUNoQixLQUFLLEVBQUUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRO2dCQUNqQyxPQUFPLEVBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDdkIsT0FBTyxFQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUM7YUFDN0I7WUFDRCxNQUFNO1NBQ2UsQ0FBQztRQUUxQixJQUFJLGNBQWMsS0FBSyxPQUFPLEVBQUUsQ0FBQztZQUU3QixhQUFhLENBQUMsV0FBVyxHQUFHO2dCQUN4QixJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxXQUFXO2dCQUNwQyxPQUFPLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDdEIsT0FBTyxFQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUM7YUFDN0IsQ0FBQztRQUNOLENBQUM7UUFDRCxPQUFPLGFBQWEsQ0FBQztJQUN6QixDQUFDO3VIQXZJUSxzQkFBc0I7dUVBQXRCLHNCQUFzQixXQUF0QixzQkFBc0I7O2lGQUF0QixzQkFBc0I7Y0FEbEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlLCBzaWduYWwsIFdyaXRhYmxlU2lnbmFsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SGlzdG9yeVRpbWVsaW5lRW50cnl9IGZyb20gJy4vaGlzdG9yeS1zaWRlYmFyLXdpZGdldC5tb2RlbCc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0hpc3RvcnlUaW1lbGluZVN0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS9oaXN0b3J5LXRpbWVsaW5lL2hpc3RvcnktdGltZWxpbmUuc3RvcmUnO1xuaW1wb3J0IHtlbXB0eU9iamVjdH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3V0aWxzL29iamVjdC11dGlscyc7XG5pbXBvcnQge1JlY29yZH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3JlY29yZC9yZWNvcmQubW9kZWwnO1xuaW1wb3J0IHtWaWV3Q29udGV4dH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3ZpZXdzL3ZpZXcubW9kZWwnO1xuaW1wb3J0IHt0YWtlfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge0hpc3RvcnlUaW1lbGluZVN0b3JlRmFjdG9yeX0gZnJvbSAnLi9oaXN0b3J5LXRpbWVsaW5lLnN0b3JlLmZhY3RvcnknO1xuXG5leHBvcnQgdHlwZSBBY3Rpdml0eVR5cGVzID0gJ2NhbGxzJyB8ICd0YXNrcycgfCAnbWVldGluZ3MnIHwgJ2hpc3RvcnknIHwgJ2F1ZGl0JyB8ICdub3RlcycgfCBzdHJpbmc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIaXN0b3J5VGltZWxpbmVBZGFwdGVyIHtcbiAgICBsb2FkaW5nOiBXcml0YWJsZVNpZ25hbDxib29sZWFuPiA9IHNpZ25hbChmYWxzZSk7XG4gICAgaW5pdGlhbGl6aW5nOiBXcml0YWJsZVNpZ25hbDxib29sZWFuPiA9IHNpZ25hbCh0cnVlKTtcbiAgICBmaXJzdExvYWQ6IFdyaXRhYmxlU2lnbmFsPGJvb2xlYW4+ID0gc2lnbmFsKHRydWUpO1xuICAgIGFsbExvYWRlZDogV3JpdGFibGVTaWduYWw8Ym9vbGVhbj4gPSBzaWduYWwoZmFsc2UpO1xuXG4gICAgY2FjaGU6IEhpc3RvcnlUaW1lbGluZUVudHJ5W10gPSBbXTtcbiAgICBkYXRhU3RyZWFtID0gbmV3IEJlaGF2aW9yU3ViamVjdDxIaXN0b3J5VGltZWxpbmVFbnRyeVtdPih0aGlzLmNhY2hlKTtcbiAgICBkYXRhU3RyZWFtJCA9IHRoaXMuZGF0YVN0cmVhbS5hc09ic2VydmFibGUoKTtcblxuICAgIHByaXZhdGUgZGVmYXVsdFBhZ2VTaXplID0gMTA7XG4gICAgcHJpdmF0ZSBzdG9yZTogSGlzdG9yeVRpbWVsaW5lU3RvcmU7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgaGlzdG9yeVRpbWVsaW5lU3RvcmVGYWN0b3J5OiBIaXN0b3J5VGltZWxpbmVTdG9yZUZhY3RvcnlcbiAgICApIHtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKiBAcGFyYW0ge1ZpZXdDb250ZXh0fSBjb250ZXh0IC0gcGFyZW50IG1vZHVsZSBjb250ZXh0XG4gICAgICogQGRlc2NyaXB0aW9uIGFkYXB0ZXIgaW5pdCBmdW5jdGlvbiB0byBpbml0aWFsaXplIHRpbWVsaW5lIHN0b3JlXG4gICAgICovXG4gICAgaW5pdChjb250ZXh0OiBWaWV3Q29udGV4dCk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMuc3RvcmUgPSB0aGlzLmhpc3RvcnlUaW1lbGluZVN0b3JlRmFjdG9yeS5jcmVhdGUoKTtcbiAgICAgICAgdGhpcy5zdG9yZS5pbml0KGNvbnRleHQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEhpc3RvcnlUaW1lbGluZUVudHJ5W10+fSByZXR1cm4gb2JzZXJ2YWJsZSBhcnJheSBvZiB0aW1lbGluZSBlbnRyaWVzXG4gICAgICogQGRlc2NyaXB0aW9uIHJldHJpZXZlIG5leHQgc2V0IG9mIHJlY29yZHMgc3RhcnRpbmcgZnJvbSB0aGUgY3VycmVudCBvZmZzZXRcbiAgICAgKiByZXByZXNlbnRlZCBieSB0aGUgZmllbGQgdGhpcy5jYWNoZS5sZW5ndGhcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJlbG9hZCB0aW1lbGluZVxuICAgICAqL1xuICAgIGZldGNoVGltZWxpbmVFbnRyaWVzKHJlbG9hZDogYm9vbGVhbik6IE9ic2VydmFibGU8SGlzdG9yeVRpbWVsaW5lRW50cnlbXT4ge1xuXG4gICAgICAgIGlmICh0aGlzLmxvYWRpbmcoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlbG9hZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5jYWNoZS5sZW5ndGggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RvcmUuaW5pdFNlYXJjaENyaXRlcmlhKHRoaXMuY2FjaGUubGVuZ3RoLCB0aGlzLmRlZmF1bHRQYWdlU2l6ZSk7XG5cbiAgICAgICAgdGhpcy5sb2FkaW5nLnNldCh0cnVlKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXppbmcuc2V0KGZhbHNlKVxuICAgICAgICB0aGlzLnN0b3JlLmxvYWQoZmFsc2UpLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZy5zZXQoZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5maXJzdExvYWQuc2V0KGZhbHNlKTtcbiAgICAgICAgICAgIGNvbnN0IHJlY29yZHM6IFJlY29yZCBbXSA9IHZhbHVlLnJlY29yZHM7XG5cbiAgICAgICAgICAgIGlmICghZW1wdHlPYmplY3QocmVjb3JkcykpIHtcblxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHJlY29yZHMpLmZvckVhY2goa2V5ID0+IHtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1c2godGhpcy5idWlsZFRpbWVsaW5lRW50cnkocmVjb3Jkc1trZXldKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuYWxsTG9hZGVkLnNldCgodmFsdWU/LnBhZ2luYXRpb24/LnBhZ2VMYXN0ID8/IDApIDwgKHZhbHVlPy5wYWdpbmF0aW9uPy5wYWdlU2l6ZSA/PyAwKSk7XG5cbiAgICAgICAgICAgIHRoaXMuZGF0YVN0cmVhbS5uZXh0KFsuLi50aGlzLmNhY2hlXSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhU3RyZWFtJDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBjb2xvciBjb2RlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFjdGl2aXR5IHRoZSB2YWxpZCBhY3Rpdml0eSB0eXBlc1xuICAgICAqIEBkZXNjcmlwdGlvbiB7cmV0dXJucyB0aGUgbWFwcGVkIGJhY2tncm91bmQgY29sb3IgY29kZSBkZWZpbmVkIGZvciBhbiBhY3Rpdml0eX1cbiAgICAgKi9cbiAgICBnZXRBY3Rpdml0eUdyaWRDb2xvcihhY3Rpdml0eTogQWN0aXZpdHlUeXBlcyk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGNvbG9yTWFwID0ge1xuICAgICAgICAgICAgY2FsbHM6ICd5ZWxsb3cnLFxuICAgICAgICAgICAgdGFza3M6ICdncmVlbicsXG4gICAgICAgICAgICBtZWV0aW5nczogJ2JsdWUnLFxuICAgICAgICAgICAgbm90ZXM6ICdvcmFuZ2UnLFxuICAgICAgICAgICAgYXVkaXQ6ICdwdXJwbGUnLFxuICAgICAgICAgICAgaGlzdG9yeTogJ3B1cnBsZSdcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGNvbG9yTWFwW2FjdGl2aXR5XSB8fCAneWVsbG93JztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7SGlzdG9yeVRpbWVsaW5lRW50cnl9IFRpbWVsaW5lIEVudHJ5XG4gICAgICogQHBhcmFtIHtSZWNvcmR9IHJlY29yZCBvYmplY3RcbiAgICAgKiBAZGVzY3JpcHRpb24ge3JldHVybnMgdGhlIG1hcHBlZCByZWNvcmQgdG8gdGltZWxpbmUgZW50cnl9XG4gICAgICovXG4gICAgYnVpbGRUaW1lbGluZUVudHJ5KHJlY29yZDogUmVjb3JkKTogSGlzdG9yeVRpbWVsaW5lRW50cnkge1xuXG4gICAgICAgIGNvbnN0IHRpbWVsaW5lTW9kdWxlID0gcmVjb3JkLm1vZHVsZTtcblxuICAgICAgICBsZXQgbW9kdWxlSWNvbiA9IHJlY29yZC5hdHRyaWJ1dGVzLm1vZHVsZV9uYW1lO1xuICAgICAgICBpZiAodGltZWxpbmVNb2R1bGUgPT09ICdhdWRpdCcpIHtcbiAgICAgICAgICAgIG1vZHVsZUljb24gPSAnSGlzdG9yeSc7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBncmlkQ29sb3IgPSB0aGlzLmdldEFjdGl2aXR5R3JpZENvbG9yKHJlY29yZC5tb2R1bGUpO1xuXG4gICAgICAgIGNvbnN0IHRpbWVsaW5lRW50cnkgPSB7XG4gICAgICAgICAgICBtb2R1bGU6IHRpbWVsaW5lTW9kdWxlLFxuICAgICAgICAgICAgaWNvbjogbW9kdWxlSWNvbixcbiAgICAgICAgICAgIGNvbG9yOiBncmlkQ29sb3IsXG4gICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgIHR5cGU6ICd2YXJjaGFyJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmF0dHJpYnV0ZXMubmFtZSxcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBzaWduYWwoZmFsc2UpLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHNpZ25hbCgnZGVmYXVsdCcpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXNlcjoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICd2YXJjaGFyJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmF0dHJpYnV0ZXMuYXNzaWduZWRfdXNlcl9uYW1lLnVzZXJfbmFtZSxcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiAgc2lnbmFsKGZhbHNlKSxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBzaWduYWwoJ2RlZmF1bHQnKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhdGU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnZGF0ZXRpbWUnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXR0cmlidXRlcy5kYXRlX2VuZCxcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiAgc2lnbmFsKGZhbHNlKSxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBzaWduYWwoJ2RlZmF1bHQnKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlY29yZFxuICAgICAgICB9IGFzIEhpc3RvcnlUaW1lbGluZUVudHJ5O1xuXG4gICAgICAgIGlmICh0aW1lbGluZU1vZHVsZSA9PT0gJ2F1ZGl0Jykge1xuXG4gICAgICAgICAgICB0aW1lbGluZUVudHJ5LmRlc2NyaXB0aW9uID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdodG1sJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmF0dHJpYnV0ZXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgbG9hZGluZzogc2lnbmFsKGZhbHNlKSxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBzaWduYWwoJ2RlZmF1bHQnKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGltZWxpbmVFbnRyeTtcbiAgICB9XG59XG4iXX0=