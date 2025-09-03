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
import { of } from 'rxjs';
import * as i0 from "@angular/core";
export class ModalRecordFilterAdapter {
    getConfig(store) {
        return {
            klass: 'light-filter',
            panelMode: 'collapsible',
            isCollapsed: true,
            collapseOnSearch: true,
            savedFilterEdit: false,
            displayHeader: true,
            module: store.recordList.getModule(),
            filter$: store.recordList.criteria$.pipe(map(criteria => {
                return {
                    key: 'default',
                    criteria
                };
            })),
            savedFilters$: of([]),
            searchFields$: store.searchMetadata$.pipe(map((searchMeta) => {
                if (!searchMeta) {
                    return {};
                }
                let type = 'advanced';
                if (!searchMeta.layout.advanced) {
                    type = 'basic';
                }
                return searchMeta.layout[type];
            })),
            listFields: [],
            onClose: () => {
            },
            onSearch: () => {
            },
            updateFilter: (filter, reload = true) => {
                store.recordList.updateSearchCriteria(filter.criteria, reload);
            },
            resetFilter: (reload) => {
                store.recordList.resetSearchCriteria(reload);
            },
            addSavedFilter: (filter) => {
            },
            removeSavedFilter: (filter) => {
            },
            setOpenFilter: (filter) => {
            },
        };
    }
    static { this.ɵfac = function ModalRecordFilterAdapter_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ModalRecordFilterAdapter)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ModalRecordFilterAdapter, factory: ModalRecordFilterAdapter.ɵfac }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalRecordFilterAdapter, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9yZWNvcmQtbGlzdC1tb2RhbC9hZGFwdGVycy9maWx0ZXIuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFLbkMsT0FBTyxFQUFDLEVBQUUsRUFBQyxNQUFNLE1BQU0sQ0FBQzs7QUFHeEIsTUFBTSxPQUFPLHdCQUF3QjtJQUVqQyxTQUFTLENBQUMsS0FBMkI7UUFDakMsT0FBTztZQUNILEtBQUssRUFBRSxjQUFjO1lBQ3JCLFNBQVMsRUFBRSxhQUFhO1lBQ3hCLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLGdCQUFnQixFQUFFLElBQUk7WUFDdEIsZUFBZSxFQUFFLEtBQUs7WUFDdEIsYUFBYSxFQUFFLElBQUk7WUFDbkIsTUFBTSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFO1lBQ3BDLE9BQU8sRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQ3BDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDWCxPQUFPO29CQUNILEdBQUcsRUFBRSxTQUFTO29CQUNkLFFBQVE7aUJBQ0ksQ0FBQTtZQUNwQixDQUFDLENBQUMsQ0FDTDtZQUNELGFBQWEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ3JCLGFBQWEsRUFBRSxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FDckMsR0FBRyxDQUFDLENBQUMsVUFBc0IsRUFBRSxFQUFFO2dCQUUzQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ2QsT0FBTyxFQUF3QixDQUFDO2dCQUNwQyxDQUFDO2dCQUVELElBQUksSUFBSSxHQUFHLFVBQVUsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQzlCLElBQUksR0FBRyxPQUFPLENBQUM7Z0JBQ25CLENBQUM7Z0JBRUQsT0FBTyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25DLENBQUMsQ0FBQyxDQUNMO1lBQ0QsVUFBVSxFQUFFLEVBQUU7WUFFZCxPQUFPLEVBQUUsR0FBUyxFQUFFO1lBQ3BCLENBQUM7WUFFRCxRQUFRLEVBQUUsR0FBUyxFQUFFO1lBQ3JCLENBQUM7WUFFRCxZQUFZLEVBQUUsQ0FBQyxNQUFtQixFQUFFLE1BQU0sR0FBRyxJQUFJLEVBQVEsRUFBRTtnQkFDdkQsS0FBSyxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ25FLENBQUM7WUFFRCxXQUFXLEVBQUUsQ0FBQyxNQUFnQixFQUFRLEVBQUU7Z0JBQ3BDLEtBQUssQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDakQsQ0FBQztZQUVELGNBQWMsRUFBRSxDQUFDLE1BQW1CLEVBQVEsRUFBRTtZQUM5QyxDQUFDO1lBRUQsaUJBQWlCLEVBQUUsQ0FBQyxNQUFtQixFQUFRLEVBQUU7WUFDakQsQ0FBQztZQUVELGFBQWEsRUFBRSxDQUFDLE1BQW1CLEVBQVEsRUFBRTtZQUM3QyxDQUFDO1NBQ1ksQ0FBQztJQUN0QixDQUFDO3lIQTVEUSx3QkFBd0I7dUVBQXhCLHdCQUF3QixXQUF4Qix3QkFBd0I7O2lGQUF4Qix3QkFBd0I7Y0FEcEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U2VhcmNoTWV0YSwgU2VhcmNoTWV0YUZpZWxkTWFwfSBmcm9tICcuLi8uLi8uLi9jb21tb24vbWV0YWRhdGEvbGlzdC5tZXRhZGF0YS5tb2RlbCc7XG5pbXBvcnQge21hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtSZWNvcmRMaXN0TW9kYWxTdG9yZX0gZnJvbSAnLi4vc3RvcmUvcmVjb3JkLWxpc3QtbW9kYWwvcmVjb3JkLWxpc3QtbW9kYWwuc3RvcmUnO1xuaW1wb3J0IHtSZWNvcmRMaXN0TW9kYWxGaWx0ZXJBZGFwdGVySW50ZXJmYWNlfSBmcm9tICcuL2FkYXB0ZXIubW9kZWwnO1xuaW1wb3J0IHtGaWx0ZXJDb25maWd9IGZyb20gJy4uLy4uL2xpc3QtZmlsdGVyL2NvbXBvbmVudHMvbGlzdC1maWx0ZXIvbGlzdC1maWx0ZXIubW9kZWwnO1xuaW1wb3J0IHtTYXZlZEZpbHRlcn0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvc2F2ZWQtZmlsdGVycy9zYXZlZC1maWx0ZXIubW9kZWwnO1xuaW1wb3J0IHtvZn0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNb2RhbFJlY29yZEZpbHRlckFkYXB0ZXIgaW1wbGVtZW50cyBSZWNvcmRMaXN0TW9kYWxGaWx0ZXJBZGFwdGVySW50ZXJmYWNlIHtcblxuICAgIGdldENvbmZpZyhzdG9yZTogUmVjb3JkTGlzdE1vZGFsU3RvcmUpOiBGaWx0ZXJDb25maWcge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAga2xhc3M6ICdsaWdodC1maWx0ZXInLFxuICAgICAgICAgICAgcGFuZWxNb2RlOiAnY29sbGFwc2libGUnLFxuICAgICAgICAgICAgaXNDb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgICBjb2xsYXBzZU9uU2VhcmNoOiB0cnVlLFxuICAgICAgICAgICAgc2F2ZWRGaWx0ZXJFZGl0OiBmYWxzZSxcbiAgICAgICAgICAgIGRpc3BsYXlIZWFkZXI6IHRydWUsXG4gICAgICAgICAgICBtb2R1bGU6IHN0b3JlLnJlY29yZExpc3QuZ2V0TW9kdWxlKCksXG4gICAgICAgICAgICBmaWx0ZXIkOiBzdG9yZS5yZWNvcmRMaXN0LmNyaXRlcmlhJC5waXBlKFxuICAgICAgICAgICAgICAgIG1hcChjcml0ZXJpYSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdkZWZhdWx0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyaXRlcmlhXG4gICAgICAgICAgICAgICAgICAgIH0gYXMgU2F2ZWRGaWx0ZXJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHNhdmVkRmlsdGVycyQ6IG9mKFtdKSxcbiAgICAgICAgICAgIHNlYXJjaEZpZWxkcyQ6IHN0b3JlLnNlYXJjaE1ldGFkYXRhJC5waXBlKFxuICAgICAgICAgICAgICAgIG1hcCgoc2VhcmNoTWV0YTogU2VhcmNoTWV0YSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghc2VhcmNoTWV0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHt9IGFzIFNlYXJjaE1ldGFGaWVsZE1hcDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCB0eXBlID0gJ2FkdmFuY2VkJztcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzZWFyY2hNZXRhLmxheW91dC5hZHZhbmNlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9ICdiYXNpYyc7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VhcmNoTWV0YS5sYXlvdXRbdHlwZV07XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBsaXN0RmllbGRzOiBbXSxcblxuICAgICAgICAgICAgb25DbG9zZTogKCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgb25TZWFyY2g6ICgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHVwZGF0ZUZpbHRlcjogKGZpbHRlcjogU2F2ZWRGaWx0ZXIsIHJlbG9hZCA9IHRydWUpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICBzdG9yZS5yZWNvcmRMaXN0LnVwZGF0ZVNlYXJjaENyaXRlcmlhKGZpbHRlci5jcml0ZXJpYSwgcmVsb2FkKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHJlc2V0RmlsdGVyOiAocmVsb2FkPzogYm9vbGVhbik6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIHN0b3JlLnJlY29yZExpc3QucmVzZXRTZWFyY2hDcml0ZXJpYShyZWxvYWQpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgYWRkU2F2ZWRGaWx0ZXI6IChmaWx0ZXI6IFNhdmVkRmlsdGVyKTogdm9pZCA9PiB7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICByZW1vdmVTYXZlZEZpbHRlcjogKGZpbHRlcjogU2F2ZWRGaWx0ZXIpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHNldE9wZW5GaWx0ZXI6IChmaWx0ZXI6IFNhdmVkRmlsdGVyKTogdm9pZCA9PiB7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9IGFzIEZpbHRlckNvbmZpZztcbiAgICB9XG59XG4iXX0=