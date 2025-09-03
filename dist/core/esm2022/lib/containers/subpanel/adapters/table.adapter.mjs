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
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { SubpanelStore } from '../store/subpanel/subpanel.store';
import { SubpanelLineActionsAdapterFactory } from './line-actions.adapter.factory';
import { UserPreferenceStore } from '../../../store/user-preference/user-preference.store';
import { SystemConfigStore } from "../../../store/system-config/system-config.store";
import * as i0 from "@angular/core";
import * as i1 from "../store/subpanel/subpanel.store";
import * as i2 from "./line-actions.adapter.factory";
import * as i3 from "../../../store/user-preference/user-preference.store";
import * as i4 from "../../../store/system-config/system-config.store";
export class SubpanelTableAdapter {
    constructor(store, lineActionsAdapterFactory, preferences, systemConfigs) {
        this.store = store;
        this.lineActionsAdapterFactory = lineActionsAdapterFactory;
        this.preferences = preferences;
        this.systemConfigs = systemConfigs;
    }
    getTable() {
        return {
            showHeader: false,
            showFooter: true,
            module: this.store.metadata.headerModule,
            columns: this.getColumns(),
            lineActions: this.getLineActions(),
            sort$: this.store.recordList.sort$,
            maxColumns$: of(5),
            loading$: this.store.recordList.loading$,
            dataSource: this.store.recordList,
            pagination: this.store.recordList,
            toggleRecordSelection: (id) => {
                this.store.recordList.toggleSelection(id);
            },
            updateSorting: (orderBy, sortOrder) => {
                this.store.recordList.updateSorting(orderBy, sortOrder);
                const parentModule = this.store.parentModule;
                const module = this.store.recordList.getModule();
                const sort = { orderBy, sortOrder };
                this.preferences.setUi(parentModule, module + '-subpanel-sort', sort);
            },
            maxListHeight: this.preferences.getUserPreference('subpanel_max_height') ?? this.systemConfigs.getConfigValue('subpanel_max_height'),
            paginationType: this.preferences.getUserPreference('subpanel_pagination_type') ?? this.systemConfigs.getConfigValue('subpanel_pagination_type'),
            loadMore: () => {
                const jump = this.preferences.getUserPreference('list_max_entries_per_subpanel') ?? this.systemConfigs.getConfigValue('list_max_entries_per_subpanel');
                const pagination = this.store.recordList.getPagination();
                const currentPageSize = pagination.pageSize || 0;
                const newPageSize = Number(currentPageSize) + Number(jump);
                this.store.recordList.setPageSize(newPageSize);
                this.store.recordList.updatePagination(pagination.current);
            },
            allLoaded: () => {
                const pagination = this.store.recordList.getPagination();
                if (!pagination) {
                    return false;
                }
                if (Number(pagination.pageLast) >= Number(pagination.total)) {
                    return true;
                }
                return Number(pagination.pageSize) >= Number(pagination.total);
            }
        };
    }
    getColumns() {
        return this.store.metadata$.pipe(map(metadata => metadata.columns));
    }
    getLineActions() {
        return this.lineActionsAdapterFactory.create(this.store);
    }
    static { this.ɵfac = function SubpanelTableAdapter_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SubpanelTableAdapter)(i0.ɵɵinject(i1.SubpanelStore), i0.ɵɵinject(i2.SubpanelLineActionsAdapterFactory), i0.ɵɵinject(i3.UserPreferenceStore), i0.ɵɵinject(i4.SystemConfigStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SubpanelTableAdapter, factory: SubpanelTableAdapter.ɵfac }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SubpanelTableAdapter, [{
        type: Injectable
    }], () => [{ type: i1.SubpanelStore }, { type: i2.SubpanelLineActionsAdapterFactory }, { type: i3.UserPreferenceStore }, { type: i4.SystemConfigStore }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb250YWluZXJzL3N1YnBhbmVsL2FkYXB0ZXJzL3RhYmxlLmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBYSxFQUFFLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDcEMsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFLbkMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBQy9ELE9BQU8sRUFBQyxpQ0FBaUMsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ2pGLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHNEQUFzRCxDQUFDO0FBQ3pGLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGtEQUFrRCxDQUFDOzs7Ozs7QUFHbkYsTUFBTSxPQUFPLG9CQUFvQjtJQUU3QixZQUNjLEtBQW9CLEVBQ3BCLHlCQUE0RCxFQUM1RCxXQUFnQyxFQUNoQyxhQUFnQztRQUhoQyxVQUFLLEdBQUwsS0FBSyxDQUFlO1FBQ3BCLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBbUM7UUFDNUQsZ0JBQVcsR0FBWCxXQUFXLENBQXFCO1FBQ2hDLGtCQUFhLEdBQWIsYUFBYSxDQUFtQjtJQUU5QyxDQUFDO0lBRUQsUUFBUTtRQUNKLE9BQU87WUFDSCxVQUFVLEVBQUUsS0FBSztZQUNqQixVQUFVLEVBQUUsSUFBSTtZQUVoQixNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsWUFBWTtZQUV4QyxPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUMxQixXQUFXLEVBQUUsSUFBSSxDQUFDLGNB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Q3JCLENBQUM7SUFFUyxVQUFVO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFUyxjQUFjO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0QsQ0FBQztxSEE5RVEsb0JBQW9CO3VFQUFwQixvQkFBb0IsV0FBcEIsb0JBQW9COztpRkFBcEIsb0JBQW9CO2NBRGhDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7T2JzZXJ2YWJsZSwgb2Z9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7bWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge0NvbHVtbkRlZmluaXRpb259IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9tZXRhZGF0YS9saXN0Lm1ldGFkYXRhLm1vZGVsJztcbmltcG9ydCB7QWN0aW9uRGF0YVNvdXJjZX0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2FjdGlvbnMvYWN0aW9uLm1vZGVsJztcbmltcG9ydCB7U29ydERpcmVjdGlvbiwgU29ydGluZ1NlbGVjdGlvbn0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3ZpZXdzL2xpc3QvbGlzdC1uYXZpZ2F0aW9uLm1vZGVsJztcbmltcG9ydCB7VGFibGVDb25maWd9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvdGFibGUvdGFibGUubW9kZWwnO1xuaW1wb3J0IHtTdWJwYW5lbFN0b3JlfSBmcm9tICcuLi9zdG9yZS9zdWJwYW5lbC9zdWJwYW5lbC5zdG9yZSc7XG5pbXBvcnQge1N1YnBhbmVsTGluZUFjdGlvbnNBZGFwdGVyRmFjdG9yeX0gZnJvbSAnLi9saW5lLWFjdGlvbnMuYWRhcHRlci5mYWN0b3J5JztcbmltcG9ydCB7VXNlclByZWZlcmVuY2VTdG9yZX0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvdXNlci1wcmVmZXJlbmNlL3VzZXItcHJlZmVyZW5jZS5zdG9yZSc7XG5pbXBvcnQge1N5c3RlbUNvbmZpZ1N0b3JlfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmUvc3lzdGVtLWNvbmZpZy9zeXN0ZW0tY29uZmlnLnN0b3JlXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdWJwYW5lbFRhYmxlQWRhcHRlciB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIHN0b3JlOiBTdWJwYW5lbFN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbGluZUFjdGlvbnNBZGFwdGVyRmFjdG9yeTogU3VicGFuZWxMaW5lQWN0aW9uc0FkYXB0ZXJGYWN0b3J5LFxuICAgICAgICBwcm90ZWN0ZWQgcHJlZmVyZW5jZXM6IFVzZXJQcmVmZXJlbmNlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBzeXN0ZW1Db25maWdzOiBTeXN0ZW1Db25maWdTdG9yZVxuICAgICkge1xuICAgIH1cblxuICAgIGdldFRhYmxlKCk6IFRhYmxlQ29uZmlnIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNob3dIZWFkZXI6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd0Zvb3RlcjogdHJ1ZSxcblxuICAgICAgICAgICAgbW9kdWxlOiB0aGlzLnN0b3JlLm1ldGFkYXRhLmhlYWRlck1vZHVsZSxcblxuICAgICAgICAgICAgY29sdW1uczogdGhpcy5nZXRDb2x1bW5zKCksXG4gICAgICAgICAgICBsaW5lQWN0aW9uczogdGhpcy5nZXRMaW5lQWN0aW9ucygpLFxuICAgICAgICAgICAgc29ydCQ6IHRoaXMuc3RvcmUucmVjb3JkTGlzdC5zb3J0JCxcbiAgICAgICAgICAgIG1heENvbHVtbnMkOiBvZig1KSxcbiAgICAgICAgICAgIGxvYWRpbmckOiB0aGlzLnN0b3JlLnJlY29yZExpc3QubG9hZGluZyQsXG5cbiAgICAgICAgICAgIGRhdGFTb3VyY2U6IHRoaXMuc3RvcmUucmVjb3JkTGlzdCxcbiAgICAgICAgICAgIHBhZ2luYXRpb246IHRoaXMuc3RvcmUucmVjb3JkTGlzdCxcblxuICAgICAgICAgICAgdG9nZ2xlUmVjb3JkU2VsZWN0aW9uOiAoaWQ6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUucmVjb3JkTGlzdC50b2dnbGVTZWxlY3Rpb24oaWQpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgdXBkYXRlU29ydGluZzogKG9yZGVyQnk6IHN0cmluZywgc29ydE9yZGVyOiBTb3J0RGlyZWN0aW9uKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5yZWNvcmRMaXN0LnVwZGF0ZVNvcnRpbmcob3JkZXJCeSwgc29ydE9yZGVyKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudE1vZHVsZSA9IHRoaXMuc3RvcmUucGFyZW50TW9kdWxlO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vZHVsZSA9IHRoaXMuc3RvcmUucmVjb3JkTGlzdC5nZXRNb2R1bGUoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzb3J0ID0ge29yZGVyQnksIHNvcnRPcmRlcn0gYXMgU29ydGluZ1NlbGVjdGlvbjtcblxuICAgICAgICAgICAgICAgIHRoaXMucHJlZmVyZW5jZXMuc2V0VWkocGFyZW50TW9kdWxlLCBtb2R1bGUgKyAnLXN1YnBhbmVsLXNvcnQnLCBzb3J0KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG1heExpc3RIZWlnaHQ6IHRoaXMucHJlZmVyZW5jZXMuZ2V0VXNlclByZWZlcmVuY2UoJ3N1YnBhbmVsX21heF9oZWlnaHQnKSA/PyB0aGlzLnN5c3RlbUNvbmZpZ3MuZ2V0Q29uZmlnVmFsdWUoJ3N1YnBhbmVsX21heF9oZWlnaHQnKSxcblxuICAgICAgICAgICAgcGFnaW5hdGlvblR5cGU6IHRoaXMucHJlZmVyZW5jZXMuZ2V0VXNlclByZWZlcmVuY2UoJ3N1YnBhbmVsX3BhZ2luYXRpb25fdHlwZScpID8/IHRoaXMuc3lzdGVtQ29uZmlncy5nZXRDb25maWdWYWx1ZSgnc3VicGFuZWxfcGFnaW5hdGlvbl90eXBlJyksXG5cbiAgICAgICAgICAgIGxvYWRNb3JlOiAoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QganVtcCA9IHRoaXMucHJlZmVyZW5jZXMuZ2V0VXNlclByZWZlcmVuY2UoJ2xpc3RfbWF4X2VudHJpZXNfcGVyX3N1YnBhbmVsJykgPz8gdGhpcy5zeXN0ZW1Db25maWdzLmdldENvbmZpZ1ZhbHVlKCdsaXN0X21heF9lbnRyaWVzX3Blcl9zdWJwYW5lbCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhZ2luYXRpb24gPSB0aGlzLnN0b3JlLnJlY29yZExpc3QuZ2V0UGFnaW5hdGlvbigpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQYWdlU2l6ZSA9IHBhZ2luYXRpb24ucGFnZVNpemUgfHwgMDtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQYWdlU2l6ZSA9IE51bWJlcihjdXJyZW50UGFnZVNpemUpICsgTnVtYmVyKGp1bXApO1xuXG5cbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLnJlY29yZExpc3Quc2V0UGFnZVNpemUobmV3UGFnZVNpemUpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUucmVjb3JkTGlzdC51cGRhdGVQYWdpbmF0aW9uKHBhZ2luYXRpb24uY3VycmVudClcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGFsbExvYWRlZDogKCk6IGJvb2xlYW4gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhZ2luYXRpb24gPSB0aGlzLnN0b3JlLnJlY29yZExpc3QuZ2V0UGFnaW5hdGlvbigpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFwYWdpbmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoTnVtYmVyKHBhZ2luYXRpb24ucGFnZUxhc3QpID49IE51bWJlcihwYWdpbmF0aW9uLnRvdGFsKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyKHBhZ2luYXRpb24ucGFnZVNpemUpID49IE51bWJlcihwYWdpbmF0aW9uLnRvdGFsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGFzIFRhYmxlQ29uZmlnO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zKCk6IE9ic2VydmFibGU8Q29sdW1uRGVmaW5pdGlvbltdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlLm1ldGFkYXRhJC5waXBlKG1hcChtZXRhZGF0YSA9PiBtZXRhZGF0YS5jb2x1bW5zKSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldExpbmVBY3Rpb25zKCk6IEFjdGlvbkRhdGFTb3VyY2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5saW5lQWN0aW9uc0FkYXB0ZXJGYWN0b3J5LmNyZWF0ZSh0aGlzLnN0b3JlKTtcbiAgICB9XG59XG4iXX0=