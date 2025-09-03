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
import { StatisticsFetchGQL } from '../statistics/graphql/api.statistics.get';
import { StatisticsStore } from '../statistics/statistics.store';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { deepClone } from '../../common/utils/object-utils';
import * as i0 from "@angular/core";
import * as i1 from "../statistics/graphql/api.statistics.get";
const initialState = {
    module: '',
    query: {},
    statistic: {
        id: '',
        data: {}
    },
    loading: false
};
export class SeriesStatisticsStore extends StatisticsStore {
    constructor(fetchGQL) {
        super(fetchGQL);
        this.fetchGQL = fetchGQL;
        this.cache$ = null;
        this.internalState = deepClone(initialState);
        this.store = new BehaviorSubject(this.internalState);
        this.state$ = this.store.asObservable();
        this.statistic$ = this.state$.pipe(map(state => state.statistic), distinctUntilChanged());
    }
    /**
     * Update the state
     *
     * @param {object} state to set
     */
    updateState(state) {
        super.updateState(state);
    }
    static { this.ɵfac = function SeriesStatisticsStore_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SeriesStatisticsStore)(i0.ɵɵinject(i1.StatisticsFetchGQL)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SeriesStatisticsStore, factory: SeriesStatisticsStore.ɵfac }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SeriesStatisticsStore, [{
        type: Injectable
    }], () => [{ type: i1.StatisticsFetchGQL }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VyaWVzLXN0YXRpc3RpY3Muc3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc3RvcmUvc2VyaWVzLXN0YXRpc3RpY3Mvc2VyaWVzLXN0YXRpc3RpY3Muc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGVBQWUsRUFBYSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSwwQ0FBMEMsQ0FBQztBQUM1RSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDL0QsT0FBTyxFQUFDLG9CQUFvQixFQUFFLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBR3pELE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQzs7O0FBRzFELE1BQU0sWUFBWSxHQUFHO0lBQ2pCLE1BQU0sRUFBRSxFQUFFO0lBQ1YsS0FBSyxFQUFFLEVBQXFCO0lBQzVCLFNBQVMsRUFBRTtRQUNQLEVBQUUsRUFBRSxFQUFFO1FBQ04sSUFBSSxFQUFFLEVBQWtCO0tBQ1I7SUFDcEIsT0FBTyxFQUFFLEtBQUs7Q0FDUSxDQUFDO0FBTzNCLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxlQUFlO0lBT3RELFlBQ2MsUUFBNEI7UUFFdEMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRk4sYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFMaEMsV0FBTSxHQUFvQixJQUFJLENBQUM7UUFDL0Isa0JBQWEsR0FBMEIsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQy9ELFVBQUssR0FBRyxJQUFJLGVBQWUsQ0FBd0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBTTdFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxvQkFBb0IsRUFBRSxDQUFDLENBQUM7SUFDOUYsQ0FBQztJQUVEOzs7O09BSUc7SUFDTyxXQUFXLENBQUMsS0FBNEI7UUFDOUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO3NIQXRCUSxxQkFBcUI7dUVBQXJCLHFCQUFxQixXQUFyQixxQkFBcUI7O2lGQUFyQixxQkFBcUI7Y0FEakMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7U3RhdGlzdGljc0ZldGNoR1FMfSBmcm9tICcuLi9zdGF0aXN0aWNzL2dyYXBocWwvYXBpLnN0YXRpc3RpY3MuZ2V0JztcbmltcG9ydCB7U3RhdGlzdGljc1N0b3JlfSBmcm9tICcuLi9zdGF0aXN0aWNzL3N0YXRpc3RpY3Muc3RvcmUnO1xuaW1wb3J0IHtkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1Nlcmllc1Jlc3VsdH0gZnJvbSAnLi4vLi4vY29tbW9uL2NvbnRhaW5lcnMvY2hhcnQvY2hhcnQubW9kZWwnO1xuaW1wb3J0IHtTdGF0aXN0aWNzU3RhdGV9IGZyb20gJy4uLy4uL2NvbW1vbi9zdGF0aXN0aWNzL3N0YXRpc3RpY3Mtc3RvcmUubW9kZWwnO1xuaW1wb3J0IHtkZWVwQ2xvbmV9IGZyb20gJy4uLy4uL2NvbW1vbi91dGlscy9vYmplY3QtdXRpbHMnO1xuaW1wb3J0IHtTZXJpZXNTdGF0aXN0aWMsIFN0YXRpc3RpY3NRdWVyeX0gZnJvbSAnLi4vLi4vY29tbW9uL3N0YXRpc3RpY3Mvc3RhdGlzdGljcy5tb2RlbCc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBtb2R1bGU6ICcnLFxuICAgIHF1ZXJ5OiB7fSBhcyBTdGF0aXN0aWNzUXVlcnksXG4gICAgc3RhdGlzdGljOiB7XG4gICAgICAgIGlkOiAnJyxcbiAgICAgICAgZGF0YToge30gYXMgU2VyaWVzUmVzdWx0XG4gICAgfSBhcyBTZXJpZXNTdGF0aXN0aWMsXG4gICAgbG9hZGluZzogZmFsc2Vcbn0gYXMgU2VyaWVzU3RhdGlzdGljc1N0YXRlO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlcmllc1N0YXRpc3RpY3NTdGF0ZSBleHRlbmRzIFN0YXRpc3RpY3NTdGF0ZSB7XG4gICAgc3RhdGlzdGljOiBTZXJpZXNTdGF0aXN0aWM7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZXJpZXNTdGF0aXN0aWNzU3RvcmUgZXh0ZW5kcyBTdGF0aXN0aWNzU3RvcmUge1xuICAgIHN0YXRlJDogT2JzZXJ2YWJsZTxTZXJpZXNTdGF0aXN0aWNzU3RhdGU+O1xuICAgIHN0YXRpc3RpYyQ6IE9ic2VydmFibGU8U2VyaWVzU3RhdGlzdGljPjtcbiAgICBwcm90ZWN0ZWQgY2FjaGUkOiBPYnNlcnZhYmxlPGFueT4gPSBudWxsO1xuICAgIHByb3RlY3RlZCBpbnRlcm5hbFN0YXRlOiBTZXJpZXNTdGF0aXN0aWNzU3RhdGUgPSBkZWVwQ2xvbmUoaW5pdGlhbFN0YXRlKTtcbiAgICBwcm90ZWN0ZWQgc3RvcmUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFNlcmllc1N0YXRpc3RpY3NTdGF0ZT4odGhpcy5pbnRlcm5hbFN0YXRlKTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgZmV0Y2hHUUw6IFN0YXRpc3RpY3NGZXRjaEdRTCxcbiAgICApIHtcbiAgICAgICAgc3VwZXIoZmV0Y2hHUUwpO1xuICAgICAgICB0aGlzLnN0YXRlJCA9IHRoaXMuc3RvcmUuYXNPYnNlcnZhYmxlKCk7XG4gICAgICAgIHRoaXMuc3RhdGlzdGljJCA9IHRoaXMuc3RhdGUkLnBpcGUobWFwKHN0YXRlID0+IHN0YXRlLnN0YXRpc3RpYyksIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgc3RhdGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzdGF0ZSB0byBzZXRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgdXBkYXRlU3RhdGUoc3RhdGU6IFNlcmllc1N0YXRpc3RpY3NTdGF0ZSk6IHZvaWQge1xuICAgICAgICBzdXBlci51cGRhdGVTdGF0ZShzdGF0ZSk7XG4gICAgfVxufVxuIl19