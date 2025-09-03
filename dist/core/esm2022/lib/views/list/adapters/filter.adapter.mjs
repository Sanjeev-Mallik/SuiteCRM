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
import { map } from 'rxjs/operators';
import { ListViewStore } from '../store/list-view/list-view.store';
import * as i0 from "@angular/core";
import * as i1 from "../store/list-view/list-view.store";
export class FilterAdapter {
    constructor(store) {
        this.store = store;
    }
    getConfig() {
        return {
            savedFilterEdit: true,
            displayHeader: true,
            module: this.store.getModuleName(),
            filter$: this.store.openFilter$,
            savedFilters$: this.store.filterList.records$,
            searchFields$: this.store.metadata$.pipe(map((meta) => {
                if (!meta || !meta.search) {
                    return {};
                }
                const searchMeta = meta.search;
                let type = 'advanced';
                if (!searchMeta?.layout?.advanced) {
                    type = 'basic';
                }
                return searchMeta?.layout[type];
            })),
            listFields: this.store.metadata.listView.fields,
            onClose: () => {
                this.store.showFilters = false;
            },
            onSearch: () => {
                this.store.showFilters = false;
            },
            updateFilter: (filter, reload = true) => {
                const filters = {};
                filters[filter.key] = filter;
                this.store.setFilters(filters, reload);
            },
            resetFilter: (reload) => {
                this.store.resetFilters(reload);
            },
            addSavedFilter: (filter) => {
                this.store.addSavedFilter(filter);
            },
            removeSavedFilter: (filter) => {
                this.store.removeSavedFilter(filter);
            },
            setOpenFilter: (filter) => {
                this.store.setOpenFilter(filter);
            },
        };
    }
    static { this.ɵfac = function FilterAdapter_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FilterAdapter)(i0.ɵɵinject(i1.ListViewStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FilterAdapter, factory: FilterAdapter.ɵfac }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilterAdapter, [{
        type: Injectable
    }], () => [{ type: i1.ListViewStore }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvbGlzdC9hZGFwdGVycy9maWx0ZXIuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLG9DQUFvQyxDQUFDOzs7QUFNakUsTUFBTSxPQUFPLGFBQWE7SUFFdEIsWUFBc0IsS0FBb0I7UUFBcEIsVUFBSyxHQUFMLEtBQUssQ0FBZTtJQUMxQyxDQUFDO0lBRUQsU0FBUztRQUNMLE9BQU87WUFDSCxlQUFlLEVBQUUsSUFBSTtZQUNyQixhQUFhLEVBQUUsSUFBSTtZQUNuQixNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUU7WUFDbEMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVztZQUMvQixhQUFhLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsUUFBUTtZQUM3QyxhQUFhLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUNwQyxHQUFHLENBQUMsQ0FBQyxJQUFjLEVBQUUsRUFBRTtnQkFFbkIsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDeEIsT0FBTyxFQUF3QixDQUFDO2dCQUNwQyxDQUFDO2dCQUVELE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBRS9CLElBQUksSUFBSSxHQUFHLFVBQVUsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLENBQUM7b0JBQ2hDLElBQUksR0FBRyxPQUFPLENBQUM7Z0JBQ25CLENBQUM7Z0JBRUQsT0FBTyxVQUFVLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BDLENBQUMsQ0FBQyxDQUNMO1lBQ0QsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNO1lBRS9DLE9BQU8sRUFBRSxHQUFTLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUNuQyxDQUFDO1lBRUQsUUFBUSxFQUFFLEdBQVMsRUFBRTtnQkFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ25DLENBQUM7WUFFRCxZQUFZLEVBQUUsQ0FBQyxNQUFtQixFQUFFLE1BQU0sR0FBRyxJQUFJLEVBQVEsRUFBRTtnQkFFdkQsTUFBTSxPQUFPLEdBQUcsRUFBb0IsQ0FBQztnQkFDckMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztZQUMzQyxDQUFDO1lBRUQsV0FBVyxFQUFFLENBQUMsTUFBZ0IsRUFBUSxFQUFFO2dCQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQyxDQUFDO1lBRUQsY0FBYyxFQUFFLENBQUMsTUFBbUIsRUFBUSxFQUFFO2dCQUMxQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN0QyxDQUFDO1lBRUQsaUJBQWlCLEVBQUUsQ0FBQyxNQUFtQixFQUFRLEVBQUU7Z0JBQzdDLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDekMsQ0FBQztZQUVELGFBQWEsRUFBRSxDQUFDLE1BQW1CLEVBQVEsRUFBRTtnQkFDekMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDckMsQ0FBQztTQUVZLENBQUM7SUFDdEIsQ0FBQzs4R0EvRFEsYUFBYTt1RUFBYixhQUFhLFdBQWIsYUFBYTs7aUZBQWIsYUFBYTtjQUR6QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTZWFyY2hNZXRhRmllbGRNYXB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9tZXRhZGF0YS9saXN0Lm1ldGFkYXRhLm1vZGVsJztcbmltcG9ydCB7bWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge0xpc3RWaWV3U3RvcmV9IGZyb20gJy4uL3N0b3JlL2xpc3Qtdmlldy9saXN0LXZpZXcuc3RvcmUnO1xuaW1wb3J0IHtNZXRhZGF0YX0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvbWV0YWRhdGEvbWV0YWRhdGEuc3RvcmUuc2VydmljZSc7XG5pbXBvcnQge0ZpbHRlckNvbmZpZ30gZnJvbSAnLi4vLi4vLi4vY29udGFpbmVycy9saXN0LWZpbHRlci9jb21wb25lbnRzL2xpc3QtZmlsdGVyL2xpc3QtZmlsdGVyLm1vZGVsJztcbmltcG9ydCB7U2F2ZWRGaWx0ZXIsIFNhdmVkRmlsdGVyTWFwfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9zYXZlZC1maWx0ZXJzL3NhdmVkLWZpbHRlci5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWx0ZXJBZGFwdGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzdG9yZTogTGlzdFZpZXdTdG9yZSkge1xuICAgIH1cblxuICAgIGdldENvbmZpZygpOiBGaWx0ZXJDb25maWcge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2F2ZWRGaWx0ZXJFZGl0OiB0cnVlLFxuICAgICAgICAgICAgZGlzcGxheUhlYWRlcjogdHJ1ZSxcbiAgICAgICAgICAgIG1vZHVsZTogdGhpcy5zdG9yZS5nZXRNb2R1bGVOYW1lKCksXG4gICAgICAgICAgICBmaWx0ZXIkOiB0aGlzLnN0b3JlLm9wZW5GaWx0ZXIkLFxuICAgICAgICAgICAgc2F2ZWRGaWx0ZXJzJDogdGhpcy5zdG9yZS5maWx0ZXJMaXN0LnJlY29yZHMkLFxuICAgICAgICAgICAgc2VhcmNoRmllbGRzJDogdGhpcy5zdG9yZS5tZXRhZGF0YSQucGlwZShcbiAgICAgICAgICAgICAgICBtYXAoKG1ldGE6IE1ldGFkYXRhKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFtZXRhIHx8ICFtZXRhLnNlYXJjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHt9IGFzIFNlYXJjaE1ldGFGaWVsZE1hcDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlYXJjaE1ldGEgPSBtZXRhLnNlYXJjaDtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgdHlwZSA9ICdhZHZhbmNlZCc7XG4gICAgICAgICAgICAgICAgICAgIGlmICghc2VhcmNoTWV0YT8ubGF5b3V0Py5hZHZhbmNlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9ICdiYXNpYyc7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VhcmNoTWV0YT8ubGF5b3V0W3R5cGVdO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgbGlzdEZpZWxkczogdGhpcy5zdG9yZS5tZXRhZGF0YS5saXN0Vmlldy5maWVsZHMsXG5cbiAgICAgICAgICAgIG9uQ2xvc2U6ICgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLnNob3dGaWx0ZXJzID0gZmFsc2U7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBvblNlYXJjaDogKCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUuc2hvd0ZpbHRlcnMgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHVwZGF0ZUZpbHRlcjogKGZpbHRlcjogU2F2ZWRGaWx0ZXIsIHJlbG9hZCA9IHRydWUpOiB2b2lkID0+IHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbHRlcnMgPSB7fSBhcyBTYXZlZEZpbHRlck1hcDtcbiAgICAgICAgICAgICAgICBmaWx0ZXJzW2ZpbHRlci5rZXldID0gZmlsdGVyO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUuc2V0RmlsdGVycyhmaWx0ZXJzLCByZWxvYWQpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgcmVzZXRGaWx0ZXI6IChyZWxvYWQ/OiBib29sZWFuKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5yZXNldEZpbHRlcnMocmVsb2FkKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGFkZFNhdmVkRmlsdGVyOiAoZmlsdGVyOiBTYXZlZEZpbHRlcik6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUuYWRkU2F2ZWRGaWx0ZXIoZmlsdGVyKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHJlbW92ZVNhdmVkRmlsdGVyOiAoZmlsdGVyOiBTYXZlZEZpbHRlcik6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUucmVtb3ZlU2F2ZWRGaWx0ZXIoZmlsdGVyKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHNldE9wZW5GaWx0ZXI6IChmaWx0ZXI6IFNhdmVkRmlsdGVyKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5zZXRPcGVuRmlsdGVyKGZpbHRlcik7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgIH0gYXMgRmlsdGVyQ29uZmlnO1xuICAgIH1cbn1cbiJdfQ==