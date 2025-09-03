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
import { BehaviorSubject, of } from 'rxjs';
import { deepClone } from '../../common/utils/object-utils';
import { distinctUntilChanged, map, shareReplay, tap } from 'rxjs/operators';
import { StatisticsFetchGQL } from './graphql/api.statistics.get';
import * as i0 from "@angular/core";
import * as i1 from "./graphql/api.statistics.get";
const initialState = {
    module: '',
    query: {},
    statistic: {
        id: '',
        data: {}
    },
    loading: false
};
export class StatisticsStore {
    constructor(fetchGQL) {
        this.fetchGQL = fetchGQL;
        this.cache$ = null;
        this.internalState = deepClone(initialState);
        this.store = new BehaviorSubject(this.internalState);
        this.state$ = this.store.asObservable();
        this.statistic$ = this.state$.pipe(map(state => state.statistic), distinctUntilChanged());
        this.loading$ = this.state$.pipe(map(state => state.loading), distinctUntilChanged());
    }
    clear() {
        this.store.unsubscribe();
        this.cache$ = null;
    }
    clearAuthBased() {
        this.clear();
    }
    /**
     * Get Statistic query
     *
     * @returns {object} StatisticsQuery
     */
    getQuery() {
        return deepClone(this.internalState.query);
    }
    get context() {
        return this.internalState.query.context;
    }
    set context(context) {
        const query = deepClone(this.internalState.query);
        query.context = context;
        this.updateState({
            ...this.internalState,
            query
        });
    }
    /**
     * Initial list records load if not cached and update state.
     * Returns observable to be used in resolver if needed
     *
     * @param {string} module to use
     * @param {object} query to use
     * @param {boolean} load if to load
     * @returns {object} Observable<any>
     */
    init(module, query, load = true) {
        this.internalState.module = module;
        this.updateState({
            ...this.internalState,
            module,
            query
        });
        if (load === false) {
            return null;
        }
        return this.load();
    }
    /**
     * Load / reload statistics
     *
     * @param {boolean} useCache if to use cache
     * @returns {object} Observable<ListViewState>
     */
    load(useCache = true) {
        this.updateState({
            ...this.internalState,
            loading: true,
        });
        return this.fetchStatistics(this.internalState.module, this.getQuery(), useCache).pipe(map((data) => this.mapStatistics(data)), tap((statistic) => {
            this.addNewState(statistic);
        }));
    }
    /**
     * Set loading
     *
     * @param {boolean} loading bool
     */
    setLoading(loading) {
        this.updateState({
            ...this.internalState,
            loading
        });
    }
    /**
     * Set Statistic value
     *
     * @param {string} key string
     * @param {object} statistic Statistic
     * @param {boolean} cache bool
     */
    setStatistic(key, statistic, cache = false) {
        this.addNewState(statistic);
        if (!cache) {
            return;
        }
        const statMap = {};
        statMap[key] = statistic;
        this.cache$ = of(statMap).pipe(shareReplay(1));
    }
    addNewState(statistic) {
        this.updateState({
            ...this.internalState,
            statistic,
            loading: false
        });
    }
    mapStatistics(data) {
        const keys = Object.keys(data);
        const key = keys && keys.length && keys[0];
        let statistic = { id: '', data: {} };
        if (key) {
            statistic = data[key];
        }
        return statistic;
    }
    /**
     * Update the state
     *
     * @param {object} state to set
     */
    updateState(state) {
        this.store.next(this.internalState = state);
    }
    /**
     * Get records cached Observable or call the backend
     *
     * @param {string} module to use
     * @param {object} query to use
     * @param {boolean} useCache if to use cache
     * @returns {object} Observable<any>
     */
    fetchStatistics(module, query, useCache = true) {
        const queries = {};
        queries[query.key] = query;
        if (this.cache$ == null || useCache === false) {
            this.cache$ = this.fetchGQL.fetch(module, queries).pipe(shareReplay(1));
        }
        return this.cache$;
    }
    static { this.ɵfac = function StatisticsStore_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StatisticsStore)(i0.ɵɵinject(i1.StatisticsFetchGQL)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: StatisticsStore, factory: StatisticsStore.ɵfac }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StatisticsStore, [{
        type: Injectable
    }], () => [{ type: i1.StatisticsFetchGQL }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGlzdGljcy5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9zdG9yZS9zdGF0aXN0aWNzL3N0YXRpc3RpY3Muc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFDLGVBQWUsRUFBYyxFQUFFLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBSTFELE9BQU8sRUFBQyxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDOzs7QUFFaEUsTUFBTSxZQUFZLEdBQUc7SUFDakIsTUFBTSxFQUFFLEVBQUU7SUFDVixLQUFLLEVBQUUsRUFBcUI7SUFDNUIsU0FBUyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEVBQUU7UUFDTixJQUFJLEVBQUUsRUFBRTtLQUNFO0lBQ2QsT0FBTyxFQUFFLEtBQUs7Q0FDRSxDQUFDO0FBR3JCLE1BQU0sT0FBTyxlQUFlO0lBUXhCLFlBQ2MsUUFBNEI7UUFBNUIsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFMaEMsV0FBTSxHQUFvQixJQUFJLENBQUM7UUFDL0Isa0JBQWEsR0FBb0IsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3pELFVBQUssR0FBRyxJQUFJLGVBQWUsQ0FBa0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBS3ZFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUks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QixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxJQUFJLFFBQVEsS0FBSyxLQUFLLEVBQUUsQ0FBQztZQUM1QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQ25ELFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FDakIsQ0FBQztRQUNOLENBQUM7UUFDRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztnSEFoTFEsZUFBZTt1RUFBZixlQUFlLFdBQWYsZUFBZTs7aUZBQWYsZUFBZTtjQUQzQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTdGF0ZVN0b3JlfSBmcm9tICcuLi9zdGF0ZSc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgb2Z9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtkZWVwQ2xvbmV9IGZyb20gJy4uLy4uL2NvbW1vbi91dGlscy9vYmplY3QtdXRpbHMnO1xuaW1wb3J0IHtTdGF0aXN0aWNzU3RhdGV9IGZyb20gJy4uLy4uL2NvbW1vbi9zdGF0aXN0aWNzL3N0YXRpc3RpY3Mtc3RvcmUubW9kZWwnO1xuaW1wb3J0IHtTdGF0aXN0aWNzUXVlcnksIFN0YXRpc3RpYywgU3RhdGlzdGljc01hcH0gZnJvbSAnLi4vLi4vY29tbW9uL3N0YXRpc3RpY3Mvc3RhdGlzdGljcy5tb2RlbCc7XG5pbXBvcnQge1ZpZXdDb250ZXh0fSBmcm9tICcuLi8uLi9jb21tb24vdmlld3Mvdmlldy5tb2RlbCc7XG5pbXBvcnQge2Rpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAsIHNoYXJlUmVwbGF5LCB0YXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7U3RhdGlzdGljc0ZldGNoR1FMfSBmcm9tICcuL2dyYXBocWwvYXBpLnN0YXRpc3RpY3MuZ2V0JztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIG1vZHVsZTogJycsXG4gICAgcXVlcnk6IHt9IGFzIFN0YXRpc3RpY3NRdWVyeSxcbiAgICBzdGF0aXN0aWM6IHtcbiAgICAgICAgaWQ6ICcnLFxuICAgICAgICBkYXRhOiB7fVxuICAgIH0gYXMgU3RhdGlzdGljLFxuICAgIGxvYWRpbmc6IGZhbHNlXG59IGFzIFN0YXRpc3RpY3NTdGF0ZTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0YXRpc3RpY3NTdG9yZSBpbXBsZW1lbnRzIFN0YXRlU3RvcmUge1xuICAgIHN0YXRlJDogT2JzZXJ2YWJsZTxTdGF0aXN0aWNzU3RhdGU+O1xuICAgIHN0YXRpc3RpYyQ6IE9ic2VydmFibGU8U3RhdGlzdGljPjtcbiAgICBsb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBwcm90ZWN0ZWQgY2FjaGUkOiBPYnNlcnZhYmxlPGFueT4gPSBudWxsO1xuICAgIHByb3RlY3RlZCBpbnRlcm5hbFN0YXRlOiBTdGF0aXN0aWNzU3RhdGUgPSBkZWVwQ2xvbmUoaW5pdGlhbFN0YXRlKTtcbiAgICBwcm90ZWN0ZWQgc3RvcmUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFN0YXRpc3RpY3NTdGF0ZT4odGhpcy5pbnRlcm5hbFN0YXRlKTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgZmV0Y2hHUUw6IFN0YXRpc3RpY3NGZXRjaEdRTCxcbiAgICApIHtcbiAgICAgICAgdGhpcy5zdGF0ZSQgPSB0aGlzLnN0b3JlLmFzT2JzZXJ2YWJsZSgpO1xuICAgICAgICB0aGlzLnN0YXRpc3RpYyQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5zdGF0aXN0aWMpLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgICAgICAgdGhpcy5sb2FkaW5nJCA9IHRoaXMuc3RhdGUkLnBpcGUobWFwKHN0YXRlID0+IHN0YXRlLmxvYWRpbmcpLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgICB9XG5cbiAgICBjbGVhcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdG9yZS51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLmNhY2hlJCA9IG51bGw7XG4gICAgfVxuXG4gICAgY2xlYXJBdXRoQmFzZWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgU3RhdGlzdGljIHF1ZXJ5XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBTdGF0aXN0aWNzUXVlcnlcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0UXVlcnkoKTogU3RhdGlzdGljc1F1ZXJ5IHtcbiAgICAgICAgcmV0dXJuIGRlZXBDbG9uZSh0aGlzLmludGVybmFsU3RhdGUucXVlcnkpO1xuICAgIH1cblxuICAgIGdldCBjb250ZXh0KCk6IFZpZXdDb250ZXh0IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxTdGF0ZS5xdWVyeS5jb250ZXh0O1xuICAgIH1cblxuICAgIHNldCBjb250ZXh0KGNvbnRleHQ6IFZpZXdDb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gZGVlcENsb25lKHRoaXMuaW50ZXJuYWxTdGF0ZS5xdWVyeSk7XG4gICAgICAgIHF1ZXJ5LmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgICAgICAgLi4udGhpcy5pbnRlcm5hbFN0YXRlLFxuICAgICAgICAgICAgcXVlcnlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbCBsaXN0IHJlY29yZHMgbG9hZCBpZiBub3QgY2FjaGVkIGFuZCB1cGRhdGUgc3RhdGUuXG4gICAgICogUmV0dXJucyBvYnNlcnZhYmxlIHRvIGJlIHVzZWQgaW4gcmVzb2x2ZXIgaWYgbmVlZGVkXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kdWxlIHRvIHVzZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBxdWVyeSB0byB1c2VcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGxvYWQgaWYgdG8gbG9hZFxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IE9ic2VydmFibGU8YW55PlxuICAgICAqL1xuICAgIHB1YmxpYyBpbml0KG1vZHVsZTogc3RyaW5nLCBxdWVyeTogU3RhdGlzdGljc1F1ZXJ5LCBsb2FkID0gdHJ1ZSk6IE9ic2VydmFibGU8U3RhdGlzdGljPiB7XG4gICAgICAgIHRoaXMuaW50ZXJuYWxTdGF0ZS5tb2R1bGUgPSBtb2R1bGU7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgICAgICAgLi4udGhpcy5pbnRlcm5hbFN0YXRlLFxuICAgICAgICAgICAgbW9kdWxlLFxuICAgICAgICAgICAgcXVlcnlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGxvYWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmxvYWQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkIC8gcmVsb2FkIHN0YXRpc3RpY3NcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gdXNlQ2FjaGUgaWYgdG8gdXNlIGNhY2hlXG4gICAgICogQHJldHVybnMge29iamVjdH0gT2JzZXJ2YWJsZTxMaXN0Vmlld1N0YXRlPlxuICAgICAqL1xuICAgIHB1YmxpYyBsb2FkKHVzZUNhY2hlID0gdHJ1ZSk6IE9ic2VydmFibGU8U3RhdGlzdGljPiB7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgICAgICAgLi4udGhpcy5pbnRlcm5hbFN0YXRlLFxuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZmV0Y2hTdGF0aXN0aWNzKHRoaXMuaW50ZXJuYWxTdGF0ZS5tb2R1bGUsIHRoaXMuZ2V0UXVlcnkoKSwgdXNlQ2FjaGUpLnBpcGUoXG4gICAgICAgICAgICBtYXAoKGRhdGE6IFN0YXRpc3RpY3NNYXApID0+IHRoaXMubWFwU3RhdGlzdGljcyhkYXRhKSksXG4gICAgICAgICAgICB0YXAoKHN0YXRpc3RpYzogU3RhdGlzdGljKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGROZXdTdGF0ZShzdGF0aXN0aWMpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgbG9hZGluZ1xuICAgICAqXG4gICAgICogQHBhcmFtIHtib29sZWFufSBsb2FkaW5nIGJvb2xcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0TG9hZGluZyhsb2FkaW5nOiBib29sZWFuKTogdm9pZCB7XG5cbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICAgICAgICAuLi50aGlzLmludGVybmFsU3RhdGUsXG4gICAgICAgICAgICBsb2FkaW5nXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBTdGF0aXN0aWMgdmFsdWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgc3RyaW5nXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHN0YXRpc3RpYyBTdGF0aXN0aWNcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGNhY2hlIGJvb2xcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0U3RhdGlzdGljKGtleTogc3RyaW5nLCBzdGF0aXN0aWM6IFN0YXRpc3RpYywgY2FjaGUgPSBmYWxzZSk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMuYWRkTmV3U3RhdGUoc3RhdGlzdGljKTtcblxuICAgICAgICBpZiAoIWNhY2hlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdGF0TWFwOiBTdGF0aXN0aWNzTWFwID0ge307XG4gICAgICAgIHN0YXRNYXBba2V5XSA9IHN0YXRpc3RpYztcblxuICAgICAgICB0aGlzLmNhY2hlJCA9IG9mKHN0YXRNYXApLnBpcGUoc2hhcmVSZXBsYXkoMSkpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhZGROZXdTdGF0ZShzdGF0aXN0aWM6IFN0YXRpc3RpYyk6IHZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgIC4uLnRoaXMuaW50ZXJuYWxTdGF0ZSxcbiAgICAgICAgICAgIHN0YXRpc3RpYyxcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBtYXBTdGF0aXN0aWNzKGRhdGE6IFN0YXRpc3RpY3NNYXApOiBTdGF0aXN0aWMge1xuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZGF0YSk7XG4gICAgICAgIGNvbnN0IGtleSA9IGtleXMgJiYga2V5cy5sZW5ndGggJiYga2V5c1swXTtcbiAgICAgICAgbGV0IHN0YXRpc3RpYyA9IHtpZDogJycsIGRhdGE6IHt9fSBhcyBTdGF0aXN0aWM7XG4gICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgIHN0YXRpc3RpYyA9IGRhdGFba2V5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RhdGlzdGljO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgc3RhdGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzdGF0ZSB0byBzZXRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgdXBkYXRlU3RhdGUoc3RhdGU6IFN0YXRpc3RpY3NTdGF0ZSk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0b3JlLm5leHQodGhpcy5pbnRlcm5hbFN0YXRlID0gc3RhdGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCByZWNvcmRzIGNhY2hlZCBPYnNlcnZhYmxlIG9yIGNhbGwgdGhlIGJhY2tlbmRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtb2R1bGUgdG8gdXNlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHF1ZXJ5IHRvIHVzZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gdXNlQ2FjaGUgaWYgdG8gdXNlIGNhY2hlXG4gICAgICogQHJldHVybnMge29iamVjdH0gT2JzZXJ2YWJsZTxhbnk+XG4gICAgICovXG4gICAgcHJvdGVjdGVkIGZldGNoU3RhdGlzdGljcyhcbiAgICAgICAgbW9kdWxlOiBzdHJpbmcsXG4gICAgICAgIHF1ZXJ5OiBTdGF0aXN0aWNzUXVlcnksXG4gICAgICAgIHVzZUNhY2hlID0gdHJ1ZVxuICAgICk6IE9ic2VydmFibGU8U3RhdGlzdGljc01hcD4ge1xuXG4gICAgICAgIGNvbnN0IHF1ZXJpZXMgPSB7fTtcbiAgICAgICAgcXVlcmllc1txdWVyeS5rZXldID0gcXVlcnk7XG5cbiAgICAgICAgaWYgKHRoaXMuY2FjaGUkID09IG51bGwgfHwgdXNlQ2FjaGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLmNhY2hlJCA9IHRoaXMuZmV0Y2hHUUwuZmV0Y2gobW9kdWxlLCBxdWVyaWVzKS5waXBlKFxuICAgICAgICAgICAgICAgIHNoYXJlUmVwbGF5KDEpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlJDtcbiAgICB9XG5cbn1cbiJdfQ==