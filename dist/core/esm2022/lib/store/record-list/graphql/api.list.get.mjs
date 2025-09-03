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
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { toInteger } from "lodash-es";
import * as i0 from "@angular/core";
import * as i1 from "apollo-angular";
export class ListGQL {
    constructor(apollo) {
        this.apollo = apollo;
        this.fieldsMetadata = {
            fields: [
                'id',
                '_id',
                'meta',
                'records'
            ]
        };
    }
    /**
     * Fetch data either from backend
     *
     * @param {string} module to get from
     * @param {number} limit  page limit
     * @param {number} offset  current offset
     * @param {object} criteria filter criteria
     * @param {object} sort selection
     * @param {object} metadata with the fields to ask for
     * @returns {object} Observable<ApolloQueryResult<any>>
     */
    fetch(module, limit, offset, criteria, sort, metadata) {
        const fields = metadata.fields;
        const queryOptions = {
            query: gql `
              query recordList($module: String!, $limit: Int, $offset: Int, $criteria: Iterable, $sort: Iterable) {
                recordList(module: $module, limit: $limit, offset: $offset, criteria: $criteria, sort: $sort) {
                  ${fields.join('\n')}
                }
              }
            `,
            variables: {
                module,
                limit,
                offset,
                criteria,
                sort
            },
        };
        return this.apollo.query(queryOptions);
    }
    /**
     * Fetch the List records from the backend
     *
     * @param {string} module to use
     * @param {object} criteria to use
     * @param {object} sort to use
     * @param {object} pagination to use
     * @returns {object} Observable<any>
     */
    get(module, criteria, sort, pagination) {
        const mappedSort = this.mapSort(sort);
        return this.fetch(module, toInteger(pagination.pageSize), toInteger(pagination.current), criteria, mappedSort, this.fieldsMetadata)
            .pipe(map(({ data }) => {
            const recordsList = {
                records: [],
                pagination: { ...pagination }
            };
            if (!data || !data.recordList) {
                return recordsList;
            }
            const listData = data.recordList;
            if (listData.records) {
                listData.records.forEach((record) => {
                    recordsList.records.push(this.mapRecord(record));
                });
            }
            if (!listData.meta) {
                return recordsList;
            }
            if (listData.meta.offsets) {
                const paginationFieldMap = {
                    current: 'current',
                    next: 'next',
                    prev: 'previous',
                    total: 'total',
                    end: 'last',
                };
                Object.keys(paginationFieldMap).forEach((key) => {
                    if (key in listData.meta.offsets) {
                        const paginationField = paginationFieldMap[key];
                        recordsList.pagination[paginationField] = listData.meta.offsets[key];
                    }
                });
            }
            recordsList.meta = listData.meta;
            return recordsList;
        }));
    }
    /**
     * Map sort.
     * @param {object} sort to map
     */
    mapSort(sort) {
        const sortOrderMap = {
            NONE: '',
            ASC: 'ASC',
            DESC: 'DESC'
        };
        return {
            sortOrder: sortOrderMap[sort.sortOrder],
            orderBy: sort.orderBy
        };
    }
    /**
     * Map record. Allow for extensions
     * @param record
     */
    mapRecord(record) {
        return record;
    }
    static { this.ɵfac = function ListGQL_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ListGQL)(i0.ɵɵinject(i1.Apollo)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ListGQL, factory: ListGQL.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListGQL, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.Apollo }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmxpc3QuZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3N0b3JlL3JlY29yZC1saXN0L2dyYXBocWwvYXBpLmxpc3QuZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFNM0MsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRW5DLE9BQU8sRUFBWSxTQUFTLEVBQUMsTUFBTSxXQUFXLENBQUM7OztBQUsvQyxNQUFNLE9BQU8sT0FBTztJQVdoQixZQUFzQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVQxQixtQkFBYyxHQUFHO1lBQ3ZCLE1BQU0sRUFBRTtnQkFDSixJQUFJO2dCQUNKLEtBQUs7Z0JBQ0wsTUFBTTtnQkFDTixTQUFTO2FBQ1o7U0FDSixDQUFDO0lBR0YsQ0FBQztJQUVEOzs7Ozs7Ozs7O09BVUc7SUFDSSxLQUFLLENBQ1IsTUFBYyxFQUNkLEtBQWEsRUFDYixNQUFjLEVBQ2QsUUFBZ0MsRUFDaEMsSUFBNEIsRUFDNUIsUUFBOEI7UUFHOUIsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUUvQixNQUFNLFlBQVksR0FBRztZQUNqQixLQUFLLEVBQUUsR0FBRyxDQUFBOzs7b0JBR0YsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7OzthQUd4QjtZQUNELFNBQVMsRUFBRTtnQkFDUCxNQUFNO2dCQUNOLEtBQUs7Z0JBQ0wsTUFBTTtnQkFDTixRQUFRO2dCQUNSLElBQUk7YUFDUDtTQUNKLENBQUM7UUFFRixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNJLEdBQUcsQ0FBQyxNQUFjLEVBQUUsUUFBd0IsRUFBRSxJQUFzQixFQUFFLFVBQXNCO1FBQy9GLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDO2FBQzlILElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUU7WUFDakIsTUFBTSxXQUFXLEdBQWU7Z0JBQzVCLE9BQU8sRUFBRSxFQUFFO2dCQUNYLFVBQVUsRUFBRSxFQUFDLEdBQUcsVUFBVSxFQUFlO2FBQzVDLENBQUM7WUFFRixJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUM1QixPQUFPLFdBQVcsQ0FBQztZQUN2QixDQUFDO1lBRUQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUVqQyxJQUFJLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDbkIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtvQkFDckMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQ3BCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQ3pCLENBQUM7Z0JBQ04sQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDO1lBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDakIsT0FBTyxXQUFXLENBQUM7WUFDdkIsQ0FBQztZQUVELElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFFeEIsTUFBTSxrQkFBa0IsR0FBRztvQkFDdkIsT0FBTyxFQUFFLFNBQVM7b0JBQ2xCLElBQUksRUFBRSxNQUFNO29CQUNaLElBQUksRUFBRSxVQUFVO29CQUNoQixLQUFLLEVBQUUsT0FBTztvQkFDZCxHQUFHLEVBQUUsTUFBTTtpQkFDZCxDQUFDO2dCQUVGLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtvQkFDNUMsSUFBSSxHQUFHLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzt3QkFDL0IsTUFBTSxlQUFlLEdBQUcsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ2hELFdBQVcsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3pFLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDO1lBRUQsV0FBVyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBRWpDLE9BQU8sV0FBVyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDWixDQUFDO0lBRUQ7OztPQUdHO0lBQ08sT0FBTyxDQUFDLElBQXNCO1FBQ3BDLE1BQU0sWUFBWSxHQUFHO1lBQ2pCLElBQUksRUFBRSxFQUFFO1lBQ1IsR0FBRyxFQUFFLEtBQUs7WUFDVixJQUFJLEVBQUUsTUFBTTtTQUNmLENBQUM7UUFFRixPQUFPO1lBQ0gsU0FBUyxFQUFFLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ3ZDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUN4QixDQUFDO0lBQ04sQ0FBQztJQUVEOzs7T0FHRztJQUNPLFNBQVMsQ0FBQyxNQUFXO1FBQzNCLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7d0dBNUlRLE9BQU87dUVBQVAsT0FBTyxXQUFQLE9BQU8sbUJBRkosTUFBTTs7aUZBRVQsT0FBTztjQUhuQixVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Fwb2xsbywgZ3FsfSBmcm9tICdhcG9sbG8tYW5ndWxhcic7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtBcG9sbG9RdWVyeVJlc3VsdH0gZnJvbSAnQGFwb2xsby9jbGllbnQvY29yZSc7XG5pbXBvcnQge1BhZ2luYXRpb24sIFNvcnRpbmdTZWxlY3Rpb259IGZyb20gJy4uLy4uLy4uL2NvbW1vbi92aWV3cy9saXN0L2xpc3QtbmF2aWdhdGlvbi5tb2RlbCc7XG5pbXBvcnQge1JlY29yZH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3JlY29yZC9yZWNvcmQubW9kZWwnO1xuaW1wb3J0IHtTZWFyY2hDcml0ZXJpYX0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3ZpZXdzL2xpc3Qvc2VhcmNoLWNyaXRlcmlhLm1vZGVsJztcbmltcG9ydCB7bWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1JlY29yZExpc3R9IGZyb20gJy4uL3JlY29yZC1saXN0LnN0b3JlJztcbmltcG9ydCB7aXNJbnRlZ2VyLCB0b0ludGVnZXJ9IGZyb20gXCJsb2Rhc2gtZXNcIjtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMaXN0R1FMIHtcblxuICAgIHByb3RlY3RlZCBmaWVsZHNNZXRhZGF0YSA9IHtcbiAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICAnaWQnLFxuICAgICAgICAgICAgJ19pZCcsXG4gICAgICAgICAgICAnbWV0YScsXG4gICAgICAgICAgICAncmVjb3JkcydcbiAgICAgICAgXVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYXBvbGxvOiBBcG9sbG8pIHtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGZXRjaCBkYXRhIGVpdGhlciBmcm9tIGJhY2tlbmRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtb2R1bGUgdG8gZ2V0IGZyb21cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbGltaXQgIHBhZ2UgbGltaXRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0ICBjdXJyZW50IG9mZnNldFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjcml0ZXJpYSBmaWx0ZXIgY3JpdGVyaWFcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gc29ydCBzZWxlY3Rpb25cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbWV0YWRhdGEgd2l0aCB0aGUgZmllbGRzIHRvIGFzayBmb3JcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBPYnNlcnZhYmxlPEFwb2xsb1F1ZXJ5UmVzdWx0PGFueT4+XG4gICAgICovXG4gICAgcHVibGljIGZldGNoKFxuICAgICAgICBtb2R1bGU6IHN0cmluZyxcbiAgICAgICAgbGltaXQ6IG51bWJlcixcbiAgICAgICAgb2Zmc2V0OiBudW1iZXIsXG4gICAgICAgIGNyaXRlcmlhOiB7IFtrZXk6IHN0cmluZ106IGFueSB9LFxuICAgICAgICBzb3J0OiB7IFtrZXk6IHN0cmluZ106IGFueSB9LFxuICAgICAgICBtZXRhZGF0YTogeyBmaWVsZHM6IHN0cmluZ1tdIH1cbiAgICApOiBPYnNlcnZhYmxlPEFwb2xsb1F1ZXJ5UmVzdWx0PGFueT4+IHtcblxuICAgICAgICBjb25zdCBmaWVsZHMgPSBtZXRhZGF0YS5maWVsZHM7XG5cbiAgICAgICAgY29uc3QgcXVlcnlPcHRpb25zID0ge1xuICAgICAgICAgICAgcXVlcnk6IGdxbGBcbiAgICAgICAgICAgICAgcXVlcnkgcmVjb3JkTGlzdCgkbW9kdWxlOiBTdHJpbmchLCAkbGltaXQ6IEludCwgJG9mZnNldDogSW50LCAkY3JpdGVyaWE6IEl0ZXJhYmxlLCAkc29ydDogSXRlcmFibGUpIHtcbiAgICAgICAgICAgICAgICByZWNvcmRMaXN0KG1vZHVsZTogJG1vZHVsZSwgbGltaXQ6ICRsaW1pdCwgb2Zmc2V0OiAkb2Zmc2V0LCBjcml0ZXJpYTogJGNyaXRlcmlhLCBzb3J0OiAkc29ydCkge1xuICAgICAgICAgICAgICAgICAgJHtmaWVsZHMuam9pbignXFxuJyl9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgLFxuICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLFxuICAgICAgICAgICAgICAgIGxpbWl0LFxuICAgICAgICAgICAgICAgIG9mZnNldCxcbiAgICAgICAgICAgICAgICBjcml0ZXJpYSxcbiAgICAgICAgICAgICAgICBzb3J0XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB0aGlzLmFwb2xsby5xdWVyeShxdWVyeU9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZldGNoIHRoZSBMaXN0IHJlY29yZHMgZnJvbSB0aGUgYmFja2VuZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1vZHVsZSB0byB1c2VcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY3JpdGVyaWEgdG8gdXNlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHNvcnQgdG8gdXNlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHBhZ2luYXRpb24gdG8gdXNlXG4gICAgICogQHJldHVybnMge29iamVjdH0gT2JzZXJ2YWJsZTxhbnk+XG4gICAgICovXG4gICAgcHVibGljIGdldChtb2R1bGU6IHN0cmluZywgY3JpdGVyaWE6IFNlYXJjaENyaXRlcmlhLCBzb3J0OiBTb3J0aW5nU2VsZWN0aW9uLCBwYWdpbmF0aW9uOiBQYWdpbmF0aW9uKTogT2JzZXJ2YWJsZTxSZWNvcmRMaXN0PiB7XG4gICAgICAgIGNvbnN0IG1hcHBlZFNvcnQgPSB0aGlzLm1hcFNvcnQoc29ydCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZmV0Y2gobW9kdWxlLCB0b0ludGVnZXIocGFnaW5hdGlvbi5wYWdlU2l6ZSksIHRvSW50ZWdlcihwYWdpbmF0aW9uLmN1cnJlbnQpLCBjcml0ZXJpYSwgbWFwcGVkU29ydCwgdGhpcy5maWVsZHNNZXRhZGF0YSlcbiAgICAgICAgICAgIC5waXBlKG1hcCgoe2RhdGF9KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVjb3Jkc0xpc3Q6IFJlY29yZExpc3QgPSB7XG4gICAgICAgICAgICAgICAgICAgIHJlY29yZHM6IFtdLFxuICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uOiB7Li4ucGFnaW5hdGlvbn0gYXMgUGFnaW5hdGlvblxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpZiAoIWRhdGEgfHwgIWRhdGEucmVjb3JkTGlzdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVjb3Jkc0xpc3Q7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgbGlzdERhdGEgPSBkYXRhLnJlY29yZExpc3Q7XG5cbiAgICAgICAgICAgICAgICBpZiAobGlzdERhdGEucmVjb3Jkcykge1xuICAgICAgICAgICAgICAgICAgICBsaXN0RGF0YS5yZWNvcmRzLmZvckVhY2goKHJlY29yZDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWNvcmRzTGlzdC5yZWNvcmRzLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXBSZWNvcmQocmVjb3JkKVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFsaXN0RGF0YS5tZXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWNvcmRzTGlzdDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobGlzdERhdGEubWV0YS5vZmZzZXRzKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFnaW5hdGlvbkZpZWxkTWFwID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudDogJ2N1cnJlbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dDogJ25leHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldjogJ3ByZXZpb3VzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsOiAndG90YWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiAnbGFzdCcsXG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMocGFnaW5hdGlvbkZpZWxkTWFwKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXkgaW4gbGlzdERhdGEubWV0YS5vZmZzZXRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFnaW5hdGlvbkZpZWxkID0gcGFnaW5hdGlvbkZpZWxkTWFwW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjb3Jkc0xpc3QucGFnaW5hdGlvbltwYWdpbmF0aW9uRmllbGRdID0gbGlzdERhdGEubWV0YS5vZmZzZXRzW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJlY29yZHNMaXN0Lm1ldGEgPSBsaXN0RGF0YS5tZXRhO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlY29yZHNMaXN0O1xuICAgICAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1hcCBzb3J0LlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzb3J0IHRvIG1hcFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBtYXBTb3J0KHNvcnQ6IFNvcnRpbmdTZWxlY3Rpb24pOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcbiAgICAgICAgY29uc3Qgc29ydE9yZGVyTWFwID0ge1xuICAgICAgICAgICAgTk9ORTogJycsXG4gICAgICAgICAgICBBU0M6ICdBU0MnLFxuICAgICAgICAgICAgREVTQzogJ0RFU0MnXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNvcnRPcmRlcjogc29ydE9yZGVyTWFwW3NvcnQuc29ydE9yZGVyXSxcbiAgICAgICAgICAgIG9yZGVyQnk6IHNvcnQub3JkZXJCeVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1hcCByZWNvcmQuIEFsbG93IGZvciBleHRlbnNpb25zXG4gICAgICogQHBhcmFtIHJlY29yZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBtYXBSZWNvcmQocmVjb3JkOiBhbnkpOiBSZWNvcmQge1xuICAgICAgICByZXR1cm4gcmVjb3JkO1xuICAgIH1cbn1cbiJdfQ==