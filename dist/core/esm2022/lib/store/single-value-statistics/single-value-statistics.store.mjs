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
import { BehaviorSubject } from 'rxjs';
import { deepClone } from '../../common/utils/object-utils';
import { StatisticsFetchGQL } from '../statistics/graphql/api.statistics.get';
import { StatisticsStore } from '../statistics/statistics.store';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { FieldManager } from '../../services/record/field/field.manager';
import * as i0 from "@angular/core";
import * as i1 from "../statistics/graphql/api.statistics.get";
import * as i2 from "../../services/record/field/field.manager";
const initialState = {
    module: '',
    query: {},
    statistic: {
        id: '',
        data: {}
    },
    loading: false
};
export class SingleValueStatisticsStore extends StatisticsStore {
    constructor(fetchGQL, fieldManager) {
        super(fetchGQL);
        this.fetchGQL = fetchGQL;
        this.fieldManager = fieldManager;
        this.cache$ = null;
        this.internalState = deepClone(initialState);
        this.store = new BehaviorSubject(this.internalState);
        this.state$ = this.store.asObservable();
        this.statistic$ = this.state$.pipe(map(state => state.statistic), distinctUntilChanged());
        this.loading$ = this.state$.pipe(map(state => state.loading), distinctUntilChanged());
    }
    addNewState(statistic) {
        if (!statistic.metadata || !statistic.metadata.dataType) {
            return;
        }
        const field = this.fieldManager.buildShallowField(statistic.metadata.dataType, statistic.data.value);
        field.metadata = {
            digits: 0
        };
        this.updateState({
            ...this.internalState,
            statistic,
            field,
            loading: false
        });
    }
    /**
     * Update the state
     *
     * @param {object} state to set
     */
    updateState(state) {
        super.updateState(state);
    }
    static { this.ɵfac = function SingleValueStatisticsStore_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SingleValueStatisticsStore)(i0.ɵɵinject(i1.StatisticsFetchGQL), i0.ɵɵinject(i2.FieldManager)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SingleValueStatisticsStore, factory: SingleValueStatisticsStore.ɵfac }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SingleValueStatisticsStore, [{
        type: Injectable
    }], () => [{ type: i1.StatisticsFetchGQL }, { type: i2.FieldManager }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlLXZhbHVlLXN0YXRpc3RpY3Muc3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc3RvcmUvc2luZ2xlLXZhbHVlLXN0YXRpc3RpY3Mvc2luZ2xlLXZhbHVlLXN0YXRpc3RpY3Muc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGVBQWUsRUFBYSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDMUQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sMENBQTBDLENBQUM7QUFDNUUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQy9ELE9BQU8sRUFBQyxvQkFBb0IsRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sMkNBQTJDLENBQUM7Ozs7QUFJdkUsTUFBTSxZQUFZLEdBQUc7SUFDakIsTUFBTSxFQUFFLEVBQUU7SUFDVixLQUFLLEVBQUUsRUFBcUI7SUFDNUIsU0FBUyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEVBQUU7UUFDTixJQUFJLEVBQUUsRUFBK0I7S0FDaEI7SUFDekIsT0FBTyxFQUFFLEtBQUs7Q0FDYSxDQUFDO0FBSWhDLE1BQU0sT0FBTywwQkFBMkIsU0FBUSxlQUFlO0lBUTNELFlBQ2MsUUFBNEIsRUFDNUIsWUFBMEI7UUFFcEMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBSE4sYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFDNUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFOOUIsV0FBTSxHQUFvQixJQUFJLENBQUM7UUFDL0Isa0JBQWEsR0FBK0IsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3BFLFVBQUssR0FBRyxJQUFJLGVBQWUsQ0FBNkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBT2xGLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxvQkFBb0IsRUFBRSxDQUFDLENBQUM7UUFDMUYsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO0lBQzFGLENBQUM7SUFFUyxXQUFXLENBQUMsU0FBb0I7UUFFdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3RELE9BQU87UUFDWCxDQUFDO1FBRUQsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXJHLEtBQUssQ0FBQyxRQUFRLEdBQUc7WUFDYixNQUFNLEVBQUUsQ0FBQztTQUNaLENBQUM7UUFFRixJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ2IsR0FBRyxJQUFJLENBQUMsYUFBYTtZQUNyQixTQUFTO1lBQ1QsS0FBSztZQUNMLE9BQU8sRUFBRSxLQUFLO1NBQ2pCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7OztPQUlHO0lBQ08sV0FBVyxDQUFDLEtBQWlDO1FBQ25ELEtBQUssQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQzsySEE3Q1EsMEJBQTBCO3VFQUExQiwwQkFBMEIsV0FBMUIsMEJBQTBCOztpRkFBMUIsMEJBQTBCO2NBRHRDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2RlZXBDbG9uZX0gZnJvbSAnLi4vLi4vY29tbW9uL3V0aWxzL29iamVjdC11dGlscyc7XG5pbXBvcnQge1N0YXRpc3RpY3NGZXRjaEdRTH0gZnJvbSAnLi4vc3RhdGlzdGljcy9ncmFwaHFsL2FwaS5zdGF0aXN0aWNzLmdldCc7XG5pbXBvcnQge1N0YXRpc3RpY3NTdG9yZX0gZnJvbSAnLi4vc3RhdGlzdGljcy9zdGF0aXN0aWNzLnN0b3JlJztcbmltcG9ydCB7ZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtGaWVsZE1hbmFnZXJ9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3JlY29yZC9maWVsZC9maWVsZC5tYW5hZ2VyJztcbmltcG9ydCB7U2luZ2xlVmFsdWVTdGF0aXN0aWMsIFNpbmdsZVZhbHVlU3RhdGlzdGljc0RhdGEsIFN0YXRpc3RpYywgU3RhdGlzdGljc1F1ZXJ5fSBmcm9tICcuLi8uLi9jb21tb24vc3RhdGlzdGljcy9zdGF0aXN0aWNzLm1vZGVsJztcbmltcG9ydCB7U2luZ2xlVmFsdWVTdGF0aXN0aWNzU3RhdGUsIFNpbmdsZVZhbHVlU3RhdGlzdGljc1N0b3JlSW50ZXJmYWNlfSBmcm9tICcuLi8uLi9jb21tb24vc3RhdGlzdGljcy9zdGF0aXN0aWNzLXN0b3JlLm1vZGVsJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIG1vZHVsZTogJycsXG4gICAgcXVlcnk6IHt9IGFzIFN0YXRpc3RpY3NRdWVyeSxcbiAgICBzdGF0aXN0aWM6IHtcbiAgICAgICAgaWQ6ICcnLFxuICAgICAgICBkYXRhOiB7fSBhcyBTaW5nbGVWYWx1ZVN0YXRpc3RpY3NEYXRhXG4gICAgfSBhcyBTaW5nbGVWYWx1ZVN0YXRpc3RpYyxcbiAgICBsb2FkaW5nOiBmYWxzZVxufSBhcyBTaW5nbGVWYWx1ZVN0YXRpc3RpY3NTdGF0ZTtcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2luZ2xlVmFsdWVTdGF0aXN0aWNzU3RvcmUgZXh0ZW5kcyBTdGF0aXN0aWNzU3RvcmUgaW1wbGVtZW50cyBTaW5nbGVWYWx1ZVN0YXRpc3RpY3NTdG9yZUludGVyZmFjZSB7XG4gICAgc3RhdGUkOiBPYnNlcnZhYmxlPFNpbmdsZVZhbHVlU3RhdGlzdGljc1N0YXRlPjtcbiAgICBzdGF0aXN0aWMkOiBPYnNlcnZhYmxlPFN0YXRpc3RpYz47XG4gICAgbG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgcHJvdGVjdGVkIGNhY2hlJDogT2JzZXJ2YWJsZTxhbnk+ID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgaW50ZXJuYWxTdGF0ZTogU2luZ2xlVmFsdWVTdGF0aXN0aWNzU3RhdGUgPSBkZWVwQ2xvbmUoaW5pdGlhbFN0YXRlKTtcbiAgICBwcm90ZWN0ZWQgc3RvcmUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFNpbmdsZVZhbHVlU3RhdGlzdGljc1N0YXRlPih0aGlzLmludGVybmFsU3RhdGUpO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBmZXRjaEdRTDogU3RhdGlzdGljc0ZldGNoR1FMLFxuICAgICAgICBwcm90ZWN0ZWQgZmllbGRNYW5hZ2VyOiBGaWVsZE1hbmFnZXJcbiAgICApIHtcbiAgICAgICAgc3VwZXIoZmV0Y2hHUUwpO1xuICAgICAgICB0aGlzLnN0YXRlJCA9IHRoaXMuc3RvcmUuYXNPYnNlcnZhYmxlKCk7XG4gICAgICAgIHRoaXMuc3RhdGlzdGljJCA9IHRoaXMuc3RhdGUkLnBpcGUobWFwKHN0YXRlID0+IHN0YXRlLnN0YXRpc3RpYyksIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICAgICAgICB0aGlzLmxvYWRpbmckID0gdGhpcy5zdGF0ZSQucGlwZShtYXAoc3RhdGUgPT4gc3RhdGUubG9hZGluZyksIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhZGROZXdTdGF0ZShzdGF0aXN0aWM6IFN0YXRpc3RpYyk6IHZvaWQge1xuXG4gICAgICAgIGlmICghc3RhdGlzdGljLm1ldGFkYXRhIHx8ICFzdGF0aXN0aWMubWV0YWRhdGEuZGF0YVR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZpZWxkID0gdGhpcy5maWVsZE1hbmFnZXIuYnVpbGRTaGFsbG93RmllbGQoc3RhdGlzdGljLm1ldGFkYXRhLmRhdGFUeXBlLCBzdGF0aXN0aWMuZGF0YS52YWx1ZSk7XG5cbiAgICAgICAgZmllbGQubWV0YWRhdGEgPSB7XG4gICAgICAgICAgICBkaWdpdHM6IDBcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgIC4uLnRoaXMuaW50ZXJuYWxTdGF0ZSxcbiAgICAgICAgICAgIHN0YXRpc3RpYyxcbiAgICAgICAgICAgIGZpZWxkLFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBzdGF0ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHN0YXRlIHRvIHNldFxuICAgICAqL1xuICAgIHByb3RlY3RlZCB1cGRhdGVTdGF0ZShzdGF0ZTogU2luZ2xlVmFsdWVTdGF0aXN0aWNzU3RhdGUpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIudXBkYXRlU3RhdGUoc3RhdGUpO1xuICAgIH1cbn1cbiJdfQ==