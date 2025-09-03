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
import { distinctUntilChanged, map, shareReplay } from 'rxjs/operators';
import { SeriesStatisticsStore } from '../series-statistics/series-statistics.store';
import { StatisticsFetchGQL } from '../statistics/graphql/api.statistics.get';
import { DataTypeFormatter } from '../../services/formatters/data-type.formatter.service';
import { SeriesMapper } from '../../services/statistics/series/mapper/series-mapper.service';
import * as i0 from "@angular/core";
import * as i1 from "../statistics/graphql/api.statistics.get";
import * as i2 from "../../services/formatters/data-type.formatter.service";
import * as i3 from "../../services/statistics/series/mapper/series-mapper.service";
const initialState = {
    module: '',
    query: {},
    statistic: {
        id: '',
        data: {}
    },
    loading: false
};
export class ChartDataStore extends SeriesStatisticsStore {
    constructor(fetchGQL, formatter, seriesMapper) {
        super(fetchGQL);
        this.fetchGQL = fetchGQL;
        this.formatter = formatter;
        this.seriesMapper = seriesMapper;
        this.internalState = deepClone(initialState);
        this.store = new BehaviorSubject(this.internalState);
        this.defaultOptions = {};
        this.state$ = this.store.asObservable();
        this.statistic$ = this.state$.pipe(map(state => state.statistic), distinctUntilChanged());
        this.loading$ = this.state$.pipe(map(state => state.loading), distinctUntilChanged());
    }
    setDefaultOptions(chartOptions) {
        this.defaultOptions = chartOptions;
    }
    getDataSource() {
        return this.internalState.dataSource;
    }
    addNewState(statistic) {
        if (!statistic.metadata || !statistic.metadata.dataType) {
            return;
        }
        this.injectDefaultValues(statistic);
        const dataSource = this.buildCharDataSource(statistic);
        this.updateState({
            ...this.internalState,
            statistic,
            dataSource,
            loading: false
        });
    }
    injectDefaultValues(statistic) {
        if (!statistic.metadata.chartOptions) {
            statistic.metadata.chartOptions = deepClone(this.defaultOptions);
            return;
        }
        Object.keys(this.defaultOptions).forEach(optionKey => {
            if (!(optionKey in statistic.metadata.chartOptions)) {
                statistic.metadata.chartOptions[optionKey] = this.defaultOptions[optionKey];
            }
        });
    }
    buildCharDataSource(statistic) {
        const dataType = statistic.metadata.dataType || '';
        let formatOptions = null;
        const digits = (statistic.metadata && statistic.metadata.digits) || null;
        if (digits !== null) {
            formatOptions = {
                digits
            };
        }
        return {
            options: statistic.metadata.chartOptions || {},
            getResults: () => of(this.buildSeriesResult(statistic)).pipe(shareReplay(1)),
            tickFormatting: (value) => this.formatter.toUserFormat(dataType, value, formatOptions),
            tooltipFormatting: (value) => this.formatter.toUserFormat(dataType, value, formatOptions)
        };
    }
    buildSeriesResult(statistic) {
        const dataType = statistic.metadata.dataType || '';
        const result = {};
        const singleSeries = statistic.data.singleSeries || null;
        if (singleSeries) {
            result.singleSeries = singleSeries;
        }
        const multiSeries = statistic.data.multiSeries || null;
        if (multiSeries) {
            result.multiSeries = multiSeries;
        }
        this.seriesMapper.map(result, 'data-type-unit-converter', { dataType });
        return result;
    }
    /**
     * Update the state
     *
     * @param {object} state to set
     */
    updateState(state) {
        super.updateState(state);
    }
    static { this.ɵfac = function ChartDataStore_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ChartDataStore)(i0.ɵɵinject(i1.StatisticsFetchGQL), i0.ɵɵinject(i2.DataTypeFormatter), i0.ɵɵinject(i3.SeriesMapper)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ChartDataStore, factory: ChartDataStore.ɵfac }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChartDataStore, [{
        type: Injectable
    }], () => [{ type: i1.StatisticsFetchGQL }, { type: i2.DataTypeFormatter }, { type: i3.SeriesMapper }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtZGF0YS5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9zdG9yZS9jaGFydC1kYXRhL2NoYXJ0LWRhdGEuc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGVBQWUsRUFBYyxFQUFFLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBSzFELE9BQU8sRUFBQyxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEUsT0FBTyxFQUF3QixxQkFBcUIsRUFBQyxNQUFNLDhDQUE4QyxDQUFDO0FBQzFHLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDBDQUEwQyxDQUFDO0FBQzVFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHVEQUF1RCxDQUFDO0FBQ3hGLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwrREFBK0QsQ0FBQzs7Ozs7QUFFM0YsTUFBTSxZQUFZLEdBQUc7SUFDakIsTUFBTSxFQUFFLEVBQUU7SUFDVixLQUFLLEVBQUUsRUFBcUI7SUFDNUIsU0FBUyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEVBQUU7UUFDTixJQUFJLEVBQUUsRUFBa0I7S0FDUjtJQUNwQixPQUFPLEVBQUUsS0FBSztDQUNDLENBQUM7QUFPcEIsTUFBTSxPQUFPLGNBQWUsU0FBUSxxQkFBcUI7SUFTckQsWUFDYyxRQUE0QixFQUM1QixTQUE0QixFQUM1QixZQUEwQjtRQUVwQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFKTixhQUFRLEdBQVIsUUFBUSxDQUFvQjtRQUM1QixjQUFTLEdBQVQsU0FBUyxDQUFt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YyxXQUFkLGNBQWM7O2lGQUFkLGNBQWM7Y0FEMUIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBvZn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2RlZXBDbG9uZX0gZnJvbSAnLi4vLi4vY29tbW9uL3V0aWxzL29iamVjdC11dGlscyc7XG5pbXBvcnQge1Nlcmllc1N0YXRpc3RpYywgU3RhdGlzdGljLCBTdGF0aXN0aWNzUXVlcnl9IGZyb20gJy4uLy4uL2NvbW1vbi9zdGF0aXN0aWNzL3N0YXRpc3RpY3MubW9kZWwnO1xuaW1wb3J0IHtTZXJpZXNSZXN1bHR9IGZyb20gJy4uLy4uL2NvbW1vbi9jb250YWluZXJzL2NoYXJ0L2NoYXJ0Lm1vZGVsJztcbmltcG9ydCB7Q2hhcnRPcHRpb25zfSBmcm9tICcuLi8uLi9jb21tb24vbWV0YWRhdGEvY2hhcnRzLXdpZGdldC5tZXRhZGF0YSc7XG5pbXBvcnQge0NoYXJ0RGF0YVNvdXJjZSwgQ2hhcnRPcHRpb25NYXB9IGZyb20gJy4uLy4uL2NvbW1vbi9jb250YWluZXJzL2NoYXJ0L2NoYXJ0Lm1vZGVsJztcbmltcG9ydCB7ZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCwgc2hhcmVSZXBsYXl9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7U2VyaWVzU3RhdGlzdGljc1N0YXRlLCBTZXJpZXNTdGF0aXN0aWNzU3RvcmV9IGZyb20gJy4uL3Nlcmllcy1zdGF0aXN0aWNzL3Nlcmllcy1zdGF0aXN0aWNzLnN0b3JlJztcbmltcG9ydCB7U3RhdGlzdGljc0ZldGNoR1FMfSBmcm9tICcuLi9zdGF0aXN0aWNzL2dyYXBocWwvYXBpLnN0YXRpc3RpY3MuZ2V0JztcbmltcG9ydCB7RGF0YVR5cGVGb3JtYXR0ZXJ9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Zvcm1hdHRlcnMvZGF0YS10eXBlLmZvcm1hdHRlci5zZXJ2aWNlJztcbmltcG9ydCB7U2VyaWVzTWFwcGVyfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zdGF0aXN0aWNzL3Nlcmllcy9tYXBwZXIvc2VyaWVzLW1hcHBlci5zZXJ2aWNlJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIG1vZHVsZTogJycsXG4gICAgcXVlcnk6IHt9IGFzIFN0YXRpc3RpY3NRdWVyeSxcbiAgICBzdGF0aXN0aWM6IHtcbiAgICAgICAgaWQ6ICcnLFxuICAgICAgICBkYXRhOiB7fSBhcyBTZXJpZXNSZXN1bHRcbiAgICB9IGFzIFNlcmllc1N0YXRpc3RpYyxcbiAgICBsb2FkaW5nOiBmYWxzZVxufSBhcyBDaGFydERhdGFTdGF0ZTtcblxuZXhwb3J0IGludGVyZmFjZSBDaGFydERhdGFTdGF0ZSBleHRlbmRzIFNlcmllc1N0YXRpc3RpY3NTdGF0ZSB7XG4gICAgZGF0YVNvdXJjZT86IENoYXJ0RGF0YVNvdXJjZTtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENoYXJ0RGF0YVN0b3JlIGV4dGVuZHMgU2VyaWVzU3RhdGlzdGljc1N0b3JlIHtcblxuICAgIHN0YXRlJDogT2JzZXJ2YWJsZTxDaGFydERhdGFTdGF0ZT47XG4gICAgc3RhdGlzdGljJDogT2JzZXJ2YWJsZTxTZXJpZXNTdGF0aXN0aWM+O1xuICAgIGxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIHByb3RlY3RlZCBpbnRlcm5hbFN0YXRlOiBDaGFydERhdGFTdGF0ZSA9IGRlZXBDbG9uZShpbml0aWFsU3RhdGUpO1xuICAgIHByb3RlY3RlZCBzdG9yZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Q2hhcnREYXRhU3RhdGU+KHRoaXMuaW50ZXJuYWxTdGF0ZSk7XG4gICAgcHJvdGVjdGVkIGRlZmF1bHRPcHRpb25zOiBDaGFydE9wdGlvbnMgPSB7fTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgZmV0Y2hHUUw6IFN0YXRpc3RpY3NGZXRjaEdRTCxcbiAgICAgICAgcHJvdGVjdGVkIGZvcm1hdHRlcjogRGF0YVR5cGVGb3JtYXR0ZXIsXG4gICAgICAgIHByb3RlY3RlZCBzZXJpZXNNYXBwZXI6IFNlcmllc01hcHBlclxuICAgICkge1xuICAgICAgICBzdXBlcihmZXRjaEdRTCk7XG4gICAgICAgIHRoaXMuc3RhdGUkID0gdGhpcy5zdG9yZS5hc09ic2VydmFibGUoKTtcbiAgICAgICAgdGhpcy5zdGF0aXN0aWMkID0gdGhpcy5zdGF0ZSQucGlwZShtYXAoc3RhdGUgPT4gc3RhdGUuc3RhdGlzdGljKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gICAgICAgIHRoaXMubG9hZGluZyQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5sb2FkaW5nKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldERlZmF1bHRPcHRpb25zKGNoYXJ0T3B0aW9uczogQ2hhcnRPcHRpb25zKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGVmYXVsdE9wdGlvbnMgPSBjaGFydE9wdGlvbnM7XG4gICAgfVxuXG4gICAgcHVibGljIGdldERhdGFTb3VyY2UoKTogQ2hhcnREYXRhU291cmNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxTdGF0ZS5kYXRhU291cmNlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhZGROZXdTdGF0ZShzdGF0aXN0aWM6IFN0YXRpc3RpYyk6IHZvaWQge1xuXG4gICAgICAgIGlmICghc3RhdGlzdGljLm1ldGFkYXRhIHx8ICFzdGF0aXN0aWMubWV0YWRhdGEuZGF0YVR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluamVjdERlZmF1bHRWYWx1ZXMoc3RhdGlzdGljKTtcblxuICAgICAgICBjb25zdCBkYXRhU291cmNlID0gdGhpcy5idWlsZENoYXJEYXRhU291cmNlKHN0YXRpc3RpYyk7XG5cbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICAgICAgICAuLi50aGlzLmludGVybmFsU3RhdGUsXG4gICAgICAgICAgICBzdGF0aXN0aWMsXG4gICAgICAgICAgICBkYXRhU291cmNlLFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGluamVjdERlZmF1bHRWYWx1ZXMoc3RhdGlzdGljOiBTdGF0aXN0aWMpOiB2b2lkIHtcbiAgICAgICAgaWYgKCFzdGF0aXN0aWMubWV0YWRhdGEuY2hhcnRPcHRpb25zKSB7XG4gICAgICAgICAgICBzdGF0aXN0aWMubWV0YWRhdGEuY2hhcnRPcHRpb25zID0gZGVlcENsb25lKHRoaXMuZGVmYXVsdE9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5kZWZhdWx0T3B0aW9ucykuZm9yRWFjaChvcHRpb25LZXkgPT4ge1xuICAgICAgICAgICAgaWYgKCEob3B0aW9uS2V5IGluIHN0YXRpc3RpYy5tZXRhZGF0YS5jaGFydE9wdGlvbnMpKSB7XG4gICAgICAgICAgICAgICAgc3RhdGlzdGljLm1ldGFkYXRhLmNoYXJ0T3B0aW9uc1tvcHRpb25LZXldID0gdGhpcy5kZWZhdWx0T3B0aW9uc1tvcHRpb25LZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYnVpbGRDaGFyRGF0YVNvdXJjZShzdGF0aXN0aWM6IFN0YXRpc3RpYyk6IENoYXJ0RGF0YVNvdXJjZSB7XG4gICAgICAgIGNvbnN0IGRhdGFUeXBlID0gc3RhdGlzdGljLm1ldGFkYXRhLmRhdGFUeXBlIHx8ICcnO1xuXG4gICAgICAgIGxldCBmb3JtYXRPcHRpb25zID0gbnVsbDtcbiAgICAgICAgY29uc3QgZGlnaXRzID0gKHN0YXRpc3RpYy5tZXRhZGF0YSAmJiBzdGF0aXN0aWMubWV0YWRhdGEuZGlnaXRzKSB8fCBudWxsO1xuXG4gICAgICAgIGlmIChkaWdpdHMgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGZvcm1hdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgZGlnaXRzXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG9wdGlvbnM6IHN0YXRpc3RpYy5tZXRhZGF0YS5jaGFydE9wdGlvbnMgfHwge30gYXMgQ2hhcnRPcHRpb25NYXAsXG5cbiAgICAgICAgICAgIGdldFJlc3VsdHM6ICgpOiBPYnNlcnZhYmxlPFNlcmllc1Jlc3VsdD4gPT4gb2YodGhpcy5idWlsZFNlcmllc1Jlc3VsdChzdGF0aXN0aWMpKS5waXBlKHNoYXJlUmVwbGF5KDEpKSxcbiAgICAgICAgICAgIHRpY2tGb3JtYXR0aW5nOiAodmFsdWU6IGFueSk6IGFueSA9PiB0aGlzLmZvcm1hdHRlci50b1VzZXJGb3JtYXQoZGF0YVR5cGUsIHZhbHVlLCBmb3JtYXRPcHRpb25zKSxcbiAgICAgICAgICAgIHRvb2x0aXBGb3JtYXR0aW5nOiAodmFsdWU6IGFueSk6IGFueSA9PiB0aGlzLmZvcm1hdHRlci50b1VzZXJGb3JtYXQoZGF0YVR5cGUsIHZhbHVlLCBmb3JtYXRPcHRpb25zKVxuICAgICAgICB9IGFzIENoYXJ0RGF0YVNvdXJjZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYnVpbGRTZXJpZXNSZXN1bHQoc3RhdGlzdGljOiBTdGF0aXN0aWMpOiBTZXJpZXNSZXN1bHQge1xuXG4gICAgICAgIGNvbnN0IGRhdGFUeXBlID0gc3RhdGlzdGljLm1ldGFkYXRhLmRhdGFUeXBlIHx8ICcnO1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHt9IGFzIFNlcmllc1Jlc3VsdDtcblxuICAgICAgICBjb25zdCBzaW5nbGVTZXJpZXMgPSBzdGF0aXN0aWMuZGF0YS5zaW5nbGVTZXJpZXMgfHwgbnVsbDtcbiAgICAgICAgaWYgKHNpbmdsZVNlcmllcykge1xuICAgICAgICAgICAgcmVzdWx0LnNpbmdsZVNlcmllcyA9IHNpbmdsZVNlcmllcztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG11bHRpU2VyaWVzID0gc3RhdGlzdGljLmRhdGEubXVsdGlTZXJpZXMgfHwgbnVsbDtcbiAgICAgICAgaWYgKG11bHRpU2VyaWVzKSB7XG4gICAgICAgICAgICByZXN1bHQubXVsdGlTZXJpZXMgPSBtdWx0aVNlcmllcztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2VyaWVzTWFwcGVyLm1hcChyZXN1bHQsICdkYXRhLXR5cGUtdW5pdC1jb252ZXJ0ZXInLCB7ZGF0YVR5cGV9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgc3RhdGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzdGF0ZSB0byBzZXRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgdXBkYXRlU3RhdGUoc3RhdGU6IENoYXJ0RGF0YVN0YXRlKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLnVwZGF0ZVN0YXRlKHN0YXRlKTtcbiAgICB9XG59XG4iXX0=