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
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { SubpanelStore } from "../store/subpanel/subpanel.store";
import * as i0 from "@angular/core";
import * as i1 from "../store/subpanel/subpanel.store";
export class SubpanelFilterAdapter {
    constructor(store) {
        this.store = store;
    }
    getConfig() {
        return {
            panelMode: 'collapsible',
            collapseOnSearch: true,
            savedFilterEdit: false,
            module: this.store.recordList.getModule(),
            displayHeader: false,
            filter$: this.store.recordList.openFilter$,
            savedFilters$: this.store.filterList.records$,
            searchFields$: this.store.searchMetadata$.pipe(map((searchMeta) => {
                if (this.store.metadata.searchdefs) {
                    return this.store.metadata.searchdefs;
                }
                if (!searchMeta) {
                    return {};
                }
                let type = 'advanced';
                if (!searchMeta?.layout?.advanced) {
                    type = 'basic';
                }
                return searchMeta?.layout[type];
            })),
            listFields: [],
            onClose: () => {
            },
            onSearch: () => {
                this.store.searchFilter();
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
            },
            removeSavedFilter: (filter) => {
            },
            setOpenFilter: (filter) => {
            },
        };
    }
    static { this.ɵfac = function SubpanelFilterAdapter_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SubpanelFilterAdapter)(i0.ɵɵinject(i1.SubpanelStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SubpanelFilterAdapter, factory: SubpanelFilterAdapter.ɵfac }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SubpanelFilterAdapter, [{
        type: Injectable
    }], () => [{ type: i1.SubpanelStore }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9zdWJwYW5lbC9hZGFwdGVycy9maWx0ZXIuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFHbkMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtDQUFrQyxDQUFDOzs7QUFHL0QsTUFBTSxPQUFPLHFCQUFxQjtJQUU5QixZQUFzQixLQUFvQjtRQUFwQixVQUFLLEdBQUwsS0FBSyxDQUFlO0lBQzFDLENBQUM7SUFFRCxTQUFTO1FBQ0wsT0FBTztZQUNILFNBQVMsRUFBRSxhQUFhO1lBQ3hCLGdCQUFnQixFQUFFLElBQUk7WUFDdEIsZUFBZSxFQUFFLEtBQUs7WUFDdEIsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRTtZQUN6QyxhQUFhLEVBQUUsS0FBSztZQUNwQixPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsV0FBVztZQUMxQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsUUFBUTtZQUM3QyxhQUFhLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUMxQyxHQUFHLENBQUMsQ0FBQyxVQUFzQixFQUFFLEVBQUU7Z0JBRTNCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFDLENBQUM7b0JBQ2hDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFBO2dCQUN6QyxDQUFDO2dCQUVELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDZCxPQUFPLEVBQXdCLENBQUM7Z0JBQ3BDLENBQUM7Z0JBRUQsSUFBSSxJQUFJLEdBQUcsVUFBVSxDQUFDO2dCQUN0QixJQUFJLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsQ0FBQztvQkFDaEMsSUFBSSxHQUFHLE9BQU8sQ0FBQztnQkFDbkIsQ0FBQztnQkFFRCxPQUFPLFVBQVUsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEMsQ0FBQyxDQUFDLENBQ0w7WUFDRCxVQUFVLEVBQUUsRUFBRTtZQUVkLE9BQU8sRUFBRSxHQUFTLEVBQUU7WUFDcEIsQ0FBQztZQUVELFFBQVEsRUFBRSxHQUFTLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDOUIsQ0FBQztZQUVELFlBQVksRUFBRSxDQUFDLE1BQW1CLEVBQUUsTUFBTSxHQUFHLElBQUksRUFBUSxFQUFFO2dCQUN2RCxNQUFNLE9BQU8sR0FBRyxFQUFvQixDQUFDO2dCQUNyQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQztnQkFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQzNDLENBQUM7WUFFRCxXQUFXLEVBQUUsQ0FBQyxNQUFnQixFQUFRLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BDLENBQUM7WUFFRCxjQUFjLEVBQUUsQ0FBQyxNQUFtQixFQUFRLEVBQUU7WUFDOUMsQ0FBQztZQUVELGlCQUFpQixFQUFFLENBQUMsTUFBbUIsRUFBUSxFQUFFO1lBQ2pELENBQUM7WUFFRCxhQUFhLEVBQUUsQ0FBQyxNQUFtQixFQUFRLEVBQUU7WUFDN0MsQ0FBQztTQUNZLENBQUM7SUFDdEIsQ0FBQztzSEE3RFEscUJBQXFCO3VFQUFyQixxQkFBcUIsV0FBckIscUJBQXFCOztpRkFBckIscUJBQXFCO2NBRGpDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMyBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7RmlsdGVyQ29uZmlnfSBmcm9tIFwiLi4vLi4vbGlzdC1maWx0ZXIvY29tcG9uZW50cy9saXN0LWZpbHRlci9saXN0LWZpbHRlci5tb2RlbFwiO1xuaW1wb3J0IHttYXB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHtTYXZlZEZpbHRlciwgU2F2ZWRGaWx0ZXJNYXB9IGZyb20gXCIuLi8uLi8uLi9zdG9yZS9zYXZlZC1maWx0ZXJzL3NhdmVkLWZpbHRlci5tb2RlbFwiO1xuaW1wb3J0IHtTZWFyY2hNZXRhLCBTZWFyY2hNZXRhRmllbGRNYXB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9tZXRhZGF0YS9saXN0Lm1ldGFkYXRhLm1vZGVsJztcbmltcG9ydCB7U3VicGFuZWxTdG9yZX0gZnJvbSBcIi4uL3N0b3JlL3N1YnBhbmVsL3N1YnBhbmVsLnN0b3JlXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdWJwYW5lbEZpbHRlckFkYXB0ZXIge1xuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIHN0b3JlOiBTdWJwYW5lbFN0b3JlKSB7XG4gICAgfVxuXG4gICAgZ2V0Q29uZmlnKCk6IEZpbHRlckNvbmZpZyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwYW5lbE1vZGU6ICdjb2xsYXBzaWJsZScsXG4gICAgICAgICAgICBjb2xsYXBzZU9uU2VhcmNoOiB0cnVlLFxuICAgICAgICAgICAgc2F2ZWRGaWx0ZXJFZGl0OiBmYWxzZSxcbiAgICAgICAgICAgIG1vZHVsZTogdGhpcy5zdG9yZS5yZWNvcmRMaXN0LmdldE1vZHVsZSgpLFxuICAgICAgICAgICAgZGlzcGxheUhlYWRlcjogZmFsc2UsXG4gICAgICAgICAgICBmaWx0ZXIkOiB0aGlzLnN0b3JlLnJlY29yZExpc3Qub3BlbkZpbHRlciQsXG4gICAgICAgICAgICBzYXZlZEZpbHRlcnMkOiB0aGlzLnN0b3JlLmZpbHRlckxpc3QucmVjb3JkcyQsXG4gICAgICAgICAgICBzZWFyY2hGaWVsZHMkOiB0aGlzLnN0b3JlLnNlYXJjaE1ldGFkYXRhJC5waXBlKFxuICAgICAgICAgICAgICAgIG1hcCgoc2VhcmNoTWV0YTogU2VhcmNoTWV0YSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0b3JlLm1ldGFkYXRhLnNlYXJjaGRlZnMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmUubWV0YWRhdGEuc2VhcmNoZGVmc1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzZWFyY2hNZXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge30gYXMgU2VhcmNoTWV0YUZpZWxkTWFwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHR5cGUgPSAnYWR2YW5jZWQnO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXNlYXJjaE1ldGE/LmxheW91dD8uYWR2YW5jZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSAnYmFzaWMnO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlYXJjaE1ldGE/LmxheW91dFt0eXBlXTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGxpc3RGaWVsZHM6IFtdLFxuXG4gICAgICAgICAgICBvbkNsb3NlOiAoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBvblNlYXJjaDogKCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUuc2VhcmNoRmlsdGVyKCk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB1cGRhdGVGaWx0ZXI6IChmaWx0ZXI6IFNhdmVkRmlsdGVyLCByZWxvYWQgPSB0cnVlKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlsdGVycyA9IHt9IGFzIFNhdmVkRmlsdGVyTWFwO1xuICAgICAgICAgICAgICAgIGZpbHRlcnNbZmlsdGVyLmtleV0gPSBmaWx0ZXI7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5zZXRGaWx0ZXJzKGZpbHRlcnMsIHJlbG9hZCk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICByZXNldEZpbHRlcjogKHJlbG9hZD86IGJvb2xlYW4pOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLnJlc2V0RmlsdGVycyhyZWxvYWQpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgYWRkU2F2ZWRGaWx0ZXI6IChmaWx0ZXI6IFNhdmVkRmlsdGVyKTogdm9pZCA9PiB7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICByZW1vdmVTYXZlZEZpbHRlcjogKGZpbHRlcjogU2F2ZWRGaWx0ZXIpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHNldE9wZW5GaWx0ZXI6IChmaWx0ZXI6IFNhdmVkRmlsdGVyKTogdm9pZCA9PiB7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9IGFzIEZpbHRlckNvbmZpZztcbiAgICB9XG59XG4iXX0=