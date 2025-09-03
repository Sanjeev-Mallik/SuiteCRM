/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2024 SalesAgility Ltd.
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
import { isArray, isEmpty } from 'lodash-es';
import { DateTime } from 'luxon';
import { isEmptyString } from '../../../common/utils/value-utils';
import { Injectable } from '@angular/core';
import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { SystemConfigStore } from '../../../store/system-config/system-config.store';
import { DataTypeFormatter } from '../../../services/formatters/data-type.formatter.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../store/system-config/system-config.store";
import * as i2 from "../../../store/metadata/metadata.store.service";
import * as i3 from "../../../services/formatters/data-type.formatter.service";
const MONTH_YEAR_REGEX = new RegExp('^(\\d{4})-(0[1-9]|1[0-2])$');
const MONTH_REGEX = new RegExp('^(\\d{4})$');
export class ListViewUrlQueryService {
    constructor(systemConfig, metadataStore, dataTypeFormatter) {
        this.systemConfig = systemConfig;
        this.metadataStore = metadataStore;
        this.dataTypeFormatter = dataTypeFormatter;
        /**
         * Array of allowed properties to be set to the searchCriteriaFieldFilter from url_query_filter_mapping
         */
        this.allowedProperties = [
            'operator',
            'target',
            'values',
            'start',
            'end'
        ];
        /**
         * An array containing properties that can be converted into dbFormat.
         */
        this.convertableProperties = [
            'target',
            'values',
            'start',
            'end'
        ];
    }
    /**
     * Builds a URL query-based filter.
     *
     * @param {string} module - The module name.
     * @param {SavedFilter} defaultFilter - The default filter.
     * @param {Params} rawQueryParams - The raw query parameters.
     * @returns {SavedFilter|null} - The built URL query-based filter, or null if no filter criteria are found.
     */
    buildUrlQueryBasedFilter(module, defaultFilter, rawQueryParams) {
        const filterFieldDefinitions = this.metadataStore.get().recordView.vardefs;
        const queryParams = Object.entries(rawQueryParams)
            .reduce((acc, [queryParamKey, queryParamVal]) => {
            const [cleanQueryParamKey, cleanQueryParamVal] = this.cleanQueryParam([
                queryParamKey,
                queryParamVal
            ]);
            acc[cleanQueryParamKey] = cleanQueryParamVal;
            return acc;
        }, {});
        const filterCriteria = this.getQueryFilterCriteria(filterFieldDefinitions, module, queryParams);
        if (isEmpty(filterCriteria.filters)) {
            return null;
        }
        return {
            key: 'default',
            searchModule: module,
            module: 'saved-search',
            criteria: filterCriteria
        };
    }
    /**
     * Generates the query filter criteria based on the provided field definitions map, module, and query parameters.
     *
     * @param {FieldDefinitionMap} fieldDefinitionMap - The field definition map.
     * @param {string} module - The module name.
     * @param {Params} queryParams - The query parameters.
     * @returns {SearchCriteria} - The generated search criteria.
     * @protected
     */
    getQueryFilterCriteria(fieldDefinitionMap, module, queryParams) {
        const criteria = {
            name: 'default',
            filters: {}
        };
        const queryParamsKeys = Object.keys(queryParams);
        const fieldDefinitions = Object.values(fieldDefinitionMap)
            .filter(({ name }) => queryParamsKeys.some(qPKey => qPKey.includes(name)));
        const listviewUrlQueryFilterMapping = this.systemConfig.getConfigValue('listview_url_query_filter_mapping');
        const listviewUrlQueryFilterMappingEntries = Object.entries(listviewUrlQueryFilterMapping);
        listviewUrlQueryFilterMappingEntries.push(['', {}]);
        let searchType;
        switch (queryParams['searchFormTab']) {
            case 'basic_search':
                searchType = 'basic';
                break;
            case 'advanced_search':
                searchType = 'advanced';
                break;
            default:
                searchType = 'advanced';
        }
        for (const fieldDefinition of fieldDefinitions) {
            const fieldFilterName = fieldDefinition.name;
            const fieldFilterKeys = [
                fieldFilterName,
                `${fieldFilterName}_${searchType}`
            ];
            for (const [queryFilterOperatorKeyTemplate, queryFilterOperatorParamsMap] of listviewUrlQueryFilterMappingEntries) {
                if (!isEmpty(criteria.filters[fieldFilterName])) {
                    break;
                }
                for (const fieldFilterKey of fieldFilterKeys) {
                    if (!isEmpty(criteria.filters[fieldFilterName])) {
                        break;
                    }
                    const searchCriteriaFieldFilter = this.buildSearchCriteriaFieldFilter(fieldFilterName, fieldDefinition.type, queryParams, fieldFilterKey, queryFilterOperatorKeyTemplate, queryFilterOperatorParamsMap);
                    if (isEmpty(searchCriteriaFieldFilter)) {
                        continue;
                    }
                    try {
                        this.convertableProperties.forEach((convertableProperty) => {
                            if (!searchCriteriaFieldFilter[convertableProperty]) {
                                return;
                            }
                            let internalFormatValue;
                            if (isArray(searchCriteriaFieldFilter[convertableProperty])) {
                                internalFormatValue = searchCriteriaFieldFilter[convertableProperty].map(prop => this.toInternalFormat(fieldDefinition.type, prop));
                            }
                            else {
                                internalFormatValue = this.toInternalFormat(fieldDefinition.type, searchCriteriaFieldFilter[convertableProperty]);
                            }
                            searchCriteriaFieldFilter[convertableProperty] = internalFormatValue;
                        });
                    }
                    catch (e) {
                        continue;
                    }
                    criteria.filters[fieldFilterName] = searchCriteriaFieldFilter;
                }
            }
        }
        return criteria;
    }
    /**
     * Builds a search criteria field filter object based on the provided parameters.
     *
     * @param {string} fieldFilterName - The name of the field filter.
     * @param {string} fieldFilterFieldType - The type of the field filter.
     * @param {Params} queryParams - The query parameters.
     * @param {string} fieldFilterKey - The key of the field filter in the query parameters.
     * @param {string} queryFilterOperatorKeyTemplate - The template for the query filter operator key.
     * @param {NestedGenericMap<string>} queryFilterOperatorParamsMap - The map of query filter operator keys to their respective parameter maps.
     * @returns {SearchCriteriaFieldFilter | null} The built search criteria field filter object.
     * @protected
     */
    buildSearchCriteriaFieldFilter(fieldFilterName, fieldFilterFieldType, queryParams, fieldFilterKey, queryFilterOperatorKeyTemplate, queryFilterOperatorParamsMap) {
        const searchCriteriaFieldFilter = {
            field: fieldFilterName,
            fieldType: fieldFilterFieldType,
            operator: '=',
            values: []
        };
        if (isEmpty(queryFilterOperatorKeyTemplate) || isEmpty(queryFilterOperatorParamsMap)) {
            const fieldFilterValue = this.getQueryParamValue(fieldFilterKey, fieldFilterKey, queryParams);
            if (isEmpty(fieldFilterValue) && !isEmptyString(fieldFilterValue)) {
                return null;
            }
            const values = isArray(fieldFilterValue)
                ? fieldFilterValue
                : [fieldFilterValue];
            searchCriteriaFieldFilter.values = values;
            searchCriteriaFieldFilter.target = values[0];
            return this.checkDateSpecialsOrReturn(searchCriteriaFieldFilter, searchCriteriaFieldFilter.target);
        }
        const queryFilterOperatorKey = this.getQueryParamValue(queryFilterOperatorKeyTemplate, fieldFilterKey, queryParams, { forceSingleString: true });
        const queryFilterOperatorParams = (queryFilterOperatorParamsMap[queryFilterOperatorKey] ??
            Object
                .values(queryFilterOperatorParamsMap)
                .reduce((prev, curr) => ({ ...prev, ...curr }), {})
            ?? {});
        if (isEmpty(queryFilterOperatorParams)) {
            return null;
        }
        let returnEmpty = true;
        searchCriteriaFieldFilter.operator = queryFilterOperatorKey;
        Object.entries(queryFilterOperatorParams)
            .filter(([_, searchCriteriaPropertyKey]) => (typeof searchCriteriaPropertyKey === 'string'
            && this.allowedProperties.includes(searchCriteriaPropertyKey)))
            .forEach(([searchCriteriaPropertyValueTemplate, searchCriteriaPropertyKey]) => {
            const rawSearchCriteriaPropertyValue = this.getQueryParamValue(searchCriteriaPropertyValueTemplate, fieldFilterKey, queryParams);
            if (isEmpty(rawSearchCriteriaPropertyValue)) {
                return;
            }
            returnEmpty = false;
            let searchCriteriaPropertyValue = rawSearchCriteriaPropertyValue;
            if (searchCriteriaPropertyKey === 'values') {
                if (!isArray(searchCriteriaPropertyValue)) {
                    searchCriteriaPropertyValue = [searchCriteriaPropertyValue];
                }
                searchCriteriaFieldFilter['target'] = searchCriteriaPropertyValue[0];
            }
            else if (searchCriteriaPropertyKey === 'target') {
                if (isArray(searchCriteriaPropertyValue)) {
                    searchCriteriaPropertyValue = searchCriteriaPropertyValue[0];
                }
                searchCriteriaFieldFilter['values'] = [searchCriteriaPropertyValue];
            }
            searchCriteriaFieldFilter[searchCriteriaPropertyKey] = searchCriteriaPropertyValue;
            if (!isArray(searchCriteriaPropertyValue)) {
                this.checkDateSpecialsOrReturn(searchCriteriaFieldFilter, searchCriteriaPropertyValue, {
                    operator: queryFilterOperatorKey,
                    key: searchCriteriaPropertyKey
                });
            }
        });
        return !returnEmpty ? this.checkForMissingOperator(searchCriteriaFieldFilter) : null;
    }
    /**
     * Retrieves the value of a query parameter based on the provided queryParamKeyTemplate,
     * fieldFilterKey, and queryParams.
     *
     * @param {string} queryParamKeyTemplate - The template for the query parameter key, with "{field}" as a placeholder for fieldFilterKey.
     * @param {string} fieldFilterKey - The field filter key used to replace the "{field}" placeholder in queryParamKeyTemplate.
     * @param {Params} queryParams - The object containing the query parameters.
     * @param {object} options - Optional parameters to customize the behavior of the method.
     * @param {boolean} options.forceSingleString - Flag indicating whether the result should always be a single string value.
     * @returns {string|string[]} - The value of the query parameter. If forceSingleString is false, it will be either a string or an array of strings.
     * @protected
     */
    getQueryParamValue(queryParamKeyTemplate, fieldFilterKey, queryParams, { forceSingleString = false } = {}) {
        const queryParamKey = queryParamKeyTemplate.replace('{field}', fieldFilterKey) ?? '';
        let queryParamValue = queryParams[queryParamKey];
        if (!queryParamValue) {
            return null;
        }
        if (isArray(queryParamValue)) {
            queryParamValue = queryParamValue.map(this.transform);
        }
        else {
            queryParamValue = this.transform(queryParamValue);
        }
        if (forceSingleString && isArray(queryParamValue)) {
            return queryParamValue[0] ?? '';
        }
        return queryParamValue;
    }
    /**
     * Cleans the query parameter key by removing the '[]' brackets if present.
     *
     * @returns {string} - The cleaned query parameter key.
     * @protected
     * @param queryParam
     */
    cleanQueryParam(queryParam) {
        let [queryParamKey, queryParamVal] = queryParam;
        const queryParamKeyReversed = queryParamKey.split('').reverse().join('');
        if (queryParamKeyReversed.indexOf('][') === 0 && typeof queryParamVal === 'string') {
            queryParamKey = queryParamKey.replace('[]', '');
            queryParamVal = queryParamVal.split(',');
        }
        return [queryParamKey, queryParamVal];
    }
    /**
     * Checks if given fieldFilterValue matches MONTH_YEAR_REGEX or yearRegex and returns
     * overridesSearchCriteriaFieldFilter if true, else returns searchCriteriaFieldFilter.
     *
     * @param {SearchCriteriaFieldFilter} searchCriteriaFieldFilter - The search criteria field filter.
     * @param {string} fieldFilterValue - The field filter value.
     * @param {Object} options - The options object.
     * @param {string} [options.operator='='] - The range option.
     * @param {string} [options.key='target'] - The key option.
     * @returns {SearchCriteriaFieldFilter} - The updated search criteria field filter.
     * @protected
     */
    checkDateSpecialsOrReturn(searchCriteriaFieldFilter, fieldFilterValue, { operator = '=', key = 'target' } = {}) {
        if (fieldFilterValue.match(MONTH_YEAR_REGEX)) {
            return this.overridesSearchCriteriaFieldFilter(searchCriteriaFieldFilter, fieldFilterValue, { type: 'month', operator, key });
        }
        if (fieldFilterValue.match(MONTH_REGEX)) {
            return this.overridesSearchCriteriaFieldFilter(searchCriteriaFieldFilter, fieldFilterValue, { type: 'year', operator, key });
        }
        return searchCriteriaFieldFilter;
    }
    /**
     * Overrides the search criteria field filter based on the provided parameters.
     *
     * @param {SearchCriteriaFieldFilter} searchCriteriaFieldFilter - The original search criteria field filter.
     * @param {string} fieldFilterValue - The value of the field filter.
     * @param {Object} options - The options for overriding the field filter.
     * @param {string} options.type - The type of the field filter.
     * @param {string} [options.operator='equal'] - The operator for the field filter.
     * @param {string} [options.key='target'] - The key for the field filter.
     * @protected
     * @returns {SearchCriteriaFieldFilter} - The overridden search criteria field filter.
     */
    overridesSearchCriteriaFieldFilter(searchCriteriaFieldFilter, fieldFilterValue, { type = '', operator = 'equal', key = 'target' }) {
        let plusObject;
        let fmt;
        switch (type) {
            case 'year':
                plusObject = { year: 1 };
                fmt = 'yyyy';
                break;
            case 'month':
                plusObject = { month: 1 };
                fmt = 'yyyy-MM';
                break;
            default:
                return searchCriteriaFieldFilter;
        }
        const start = DateTime.fromFormat(fieldFilterValue, fmt);
        const end = start.plus(plusObject).minus({ day: 1 });
        if (key !== 'target') {
            switch (key) {
                case 'start':
                    searchCriteriaFieldFilter.start = start.toFormat('yyyy-MM-dd');
                    break;
                case 'end':
                    searchCriteriaFieldFilter.end = end.toFormat('yyyy-MM-dd');
                    break;
            }
            return searchCriteriaFieldFilter;
        }
        searchCriteriaFieldFilter.operator = operator;
        switch (operator) {
            case 'greater_than':
            case 'greater_than_equals':
                searchCriteriaFieldFilter.start = start.toFormat('yyyy-MM-dd');
                searchCriteriaFieldFilter.target = searchCriteriaFieldFilter.start;
                searchCriteriaFieldFilter.values = [searchCriteriaFieldFilter.target];
                break;
            case 'less_than':
            case 'less_than_equals':
                searchCriteriaFieldFilter.end = end.toFormat('yyyy-MM-dd');
                searchCriteriaFieldFilter.target = searchCriteriaFieldFilter.end;
                searchCriteriaFieldFilter.values = [searchCriteriaFieldFilter.target];
                break;
            case 'not_equal':
                searchCriteriaFieldFilter.start = start.toFormat('yyyy-MM-dd');
                searchCriteriaFieldFilter.end = end.toFormat('yyyy-MM-dd');
                searchCriteriaFieldFilter.target = fieldFilterValue;
                searchCriteriaFieldFilter.values = [fieldFilterValue];
                break;
            case 'equal':
            case 'between':
            default:
                searchCriteriaFieldFilter.operator = 'between';
                searchCriteriaFieldFilter.start = start.toFormat('yyyy-MM-dd');
                searchCriteriaFieldFilter.end = end.toFormat('yyyy-MM-dd');
                searchCriteriaFieldFilter.target = '';
                searchCriteriaFieldFilter.values = [];
                break;
        }
        return searchCriteriaFieldFilter;
    }
    /**
     * Converts the given value to the internal format based on the specified type.
     *
     * @param {string} type - The type of value to convert to.
     * @param {string} value - The value to convert.
     * @return {string} - The converted value in the internal format.
     * @protected
     */
    toInternalFormat(type, value) {
        if (value.match(MONTH_REGEX) || value.match(MONTH_YEAR_REGEX)) {
            return value;
        }
        return this.dataTypeFormatter.toInternalFormat(type, value);
    }
    ;
    /**
     * Transforms the given value from url to a value understandable by backend.
     *
     * @param {any} value - The value to be transformed.
     * @protected
     * @return {string} The transformed value.
     */
    transform(value) {
        switch (value) {
            case '':
                return '__SuiteCRMEmptyString__';
            default:
                return value;
        }
    }
    checkForMissingOperator(searchCriteriaFieldFilter) {
        if (!isEmpty(searchCriteriaFieldFilter.start)
            && !isEmpty(searchCriteriaFieldFilter.end)) {
            searchCriteriaFieldFilter.operator = 'between';
        }
        return searchCriteriaFieldFilter;
    }
    static { this.ɵfac = function ListViewUrlQueryService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ListViewUrlQueryService)(i0.ɵɵinject(i1.SystemConfigStore), i0.ɵɵinject(i2.MetadataStore), i0.ɵɵinject(i3.DataTypeFormatter)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ListViewUrlQueryService, factory: ListViewUrlQueryService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListViewUrlQueryService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.SystemConfigStore }, { type: i2.MetadataStore }, { type: i3.DataTypeFormatter }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXVybC1xdWVyeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3ZpZXdzL2xpc3Qvc2VydmljZXMvbGlzdC12aWV3LXVybC1xdWVyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUMzQyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBQy9CLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUdoRSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBR3pDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxnREFBZ0QsQ0FBQztBQUM3RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxrREFBa0QsQ0FBQztBQUNuRixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSwwREFBMEQsQ0FBQzs7Ozs7QUFNM0YsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLE1BQU0sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0FBQ2xFLE1BQU0sV0FBVyxHQUFHLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBRzdDLE1BQU0sT0FBTyx1QkFBdUI7SUF1QmhDLFlBQ2MsWUFBK0IsRUFDL0IsYUFBNEIsRUFDNUIsaUJBQW9DO1FBRnBDLGlCQUFZLEdBQVosWUFBWSxDQUFtQjtRQUMvQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBeEJsRDs7V0FFRztRQUNLLHNCQUFpQixHQUFHO1lBQ3hCLFVBQVU7WUFDVixRQUFRO1lBQ1IsUUFBUTtZQUNSLE9BQU87WUFDUCxLQUFLO1NBQ1IsQ0FBQztRQUVG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QkFDdEMsTUFBTTtRQUNkLENBQUM7UUFFRCxPQUFPLHlCQUF5QixDQUFDO0lBQ3JDLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ08sZ0JBQWdCLENBQUUsSUFBWSxFQUFFLEtBQWE7UUFDbkQsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDO1lBQzVELE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFDRCxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUFBLENBQUM7SUFFRjs7Ozs7O09BTUc7SUFDTyxTQUFTLENBQUUsS0FBVTtRQUMzQixRQUFRLEtBQUssRUFBRSxDQUFDO1lBQ1osS0FBSyxFQUFFO2dCQUNILE9BQU8seUJBQXlCLENBQUM7WUFDckM7Z0JBQ0ksT0FBTyxLQUFLLENBQUM7UUFDckIsQ0FBQztJQUNMLENBQUM7SUFFUyx1QkFBdUIsQ0FBRSx5QkFBb0Q7UUFDbkYsSUFDSSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUM7ZUFDdEMsQ0FBQyxPQUFPLENBQUMseUJBQXlCLENBQUMsR0FBRyxDQUFDLEVBQzVDLENBQUM7WUFDQyx5QkFBeUIsQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO1FBQ25ELENBQUM7UUFFRCxPQUFPLHlCQUF5QixDQUFDO0lBQ3JDLENBQUM7d0hBeGdCUSx1QkFBdUI7dUVBQXZCLHVCQUF1QixXQUF2Qix1QkFBdUIsbUJBRFYsTUFBTTs7aUZBQ25CLHVCQUF1QjtjQURuQyxVQUFVO2VBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjQgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge2lzQXJyYXksIGlzRW1wdHl9IGZyb20gJ2xvZGFzaC1lcyc7XG5pbXBvcnQge0RhdGVUaW1lfSBmcm9tICdsdXhvbic7XG5pbXBvcnQge2lzRW1wdHlTdHJpbmd9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy92YWx1ZS11dGlscyc7XG5pbXBvcnQge0ZpZWxkRGVmaW5pdGlvbk1hcH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3JlY29yZC9maWVsZC5tb2RlbCc7XG5pbXBvcnQge1NlYXJjaENyaXRlcmlhLCBTZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyfSBmcm9tICcuLi8uLi8uLi9jb21tb24vdmlld3MvbGlzdC9zZWFyY2gtY3JpdGVyaWEubW9kZWwnO1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UGFyYW1zfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtTYXZlZEZpbHRlcn0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvc2F2ZWQtZmlsdGVycy9zYXZlZC1maWx0ZXIubW9kZWwnO1xuaW1wb3J0IHtNZXRhZGF0YVN0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9tZXRhZGF0YS9tZXRhZGF0YS5zdG9yZS5zZXJ2aWNlJztcbmltcG9ydCB7U3lzdGVtQ29uZmlnU3RvcmV9IGZyb20gJy4uLy4uLy4uL3N0b3JlL3N5c3RlbS1jb25maWcvc3lzdGVtLWNvbmZpZy5zdG9yZSc7XG5pbXBvcnQge0RhdGFUeXBlRm9ybWF0dGVyfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9mb3JtYXR0ZXJzL2RhdGEtdHlwZS5mb3JtYXR0ZXIuc2VydmljZSc7XG5cbnR5cGUgR2VuZXJpY01hcDxUPiA9IHsgW2tleTogc3RyaW5nXTogVCB9O1xudHlwZSBOZXN0ZWRHZW5lcmljTWFwPFQ+ID0gR2VuZXJpY01hcDxHZW5lcmljTWFwPFQ+PjtcbnR5cGUgRG91YmxlTmVzdGVkR2VuZXJpY01hcDxUPiA9IEdlbmVyaWNNYXA8TmVzdGVkR2VuZXJpY01hcDxUPj47XG5cbmNvbnN0IE1PTlRIX1lFQVJfUkVHRVggPSBuZXcgUmVnRXhwKCdeKFxcXFxkezR9KS0oMFsxLTldfDFbMC0yXSkkJyk7XG5jb25zdCBNT05USF9SRUdFWCA9IG5ldyBSZWdFeHAoJ14oXFxcXGR7NH0pJCcpO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3VXJsUXVlcnlTZXJ2aWNlIHtcblxuICAgIC8qKlxuICAgICAqIEFycmF5IG9mIGFsbG93ZWQgcHJvcGVydGllcyB0byBiZSBzZXQgdG8gdGhlIHNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIgZnJvbSB1cmxfcXVlcnlfZmlsdGVyX21hcHBpbmdcbiAgICAgKi9cbiAgICBwcml2YXRlIGFsbG93ZWRQcm9wZXJ0aWVzID0gW1xuICAgICAgICAnb3BlcmF0b3InLFxuICAgICAgICAndGFyZ2V0JyxcbiAgICAgICAgJ3ZhbHVlcycsXG4gICAgICAgICdzdGFydCcsXG4gICAgICAgICdlbmQnXG4gICAgXTtcblxuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IGNvbnRhaW5pbmcgcHJvcGVydGllcyB0aGF0IGNhbiBiZSBjb252ZXJ0ZWQgaW50byBkYkZvcm1hdC5cbiAgICAgKi9cbiAgICBwcml2YXRlIGNvbnZlcnRhYmxlUHJvcGVydGllcyA9IFtcbiAgICAgICAgJ3RhcmdldCcsXG4gICAgICAgICd2YWx1ZXMnLFxuICAgICAgICAnc3RhcnQnLFxuICAgICAgICAnZW5kJ1xuICAgIF07XG5cbiAgICBjb25zdHJ1Y3RvciAoXG4gICAgICAgIHByb3RlY3RlZCBzeXN0ZW1Db25maWc6IFN5c3RlbUNvbmZpZ1N0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbWV0YWRhdGFTdG9yZTogTWV0YWRhdGFTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGRhdGFUeXBlRm9ybWF0dGVyOiBEYXRhVHlwZUZvcm1hdHRlclxuICAgICkge1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkcyBhIFVSTCBxdWVyeS1iYXNlZCBmaWx0ZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kdWxlIC0gVGhlIG1vZHVsZSBuYW1lLlxuICAgICAqIEBwYXJhbSB7U2F2ZWRGaWx0ZXJ9IGRlZmF1bHRGaWx0ZXIgLSBUaGUgZGVmYXVsdCBmaWx0ZXIuXG4gICAgICogQHBhcmFtIHtQYXJhbXN9IHJhd1F1ZXJ5UGFyYW1zIC0gVGhlIHJhdyBxdWVyeSBwYXJhbWV0ZXJzLlxuICAgICAqIEByZXR1cm5zIHtTYXZlZEZpbHRlcnxudWxsfSAtIFRoZSBidWlsdCBVUkwgcXVlcnktYmFzZWQgZmlsdGVyLCBvciBudWxsIGlmIG5vIGZpbHRlciBjcml0ZXJpYSBhcmUgZm91bmQuXG4gICAgICovXG4gICAgcHVibGljIGJ1aWxkVXJsUXVlcnlCYXNlZEZpbHRlciAoXG4gICAgICAgIG1vZHVsZTogc3RyaW5nLFxuICAgICAgICBkZWZhdWx0RmlsdGVyOiBTYXZlZEZpbHRlcixcbiAgICAgICAgcmF3UXVlcnlQYXJhbXM6IFBhcmFtc1xuICAgICk6IFNhdmVkRmlsdGVyIHwgbnVsbCB7XG4gICAgICAgIGNvbnN0IGZpbHRlckZpZWxkRGVmaW5pdGlvbnMgPSB0aGlzLm1ldGFkYXRhU3RvcmUuZ2V0KCkucmVjb3JkVmlldy52YXJkZWZzO1xuXG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gT2JqZWN0LmVudHJpZXMocmF3UXVlcnlQYXJhbXMpXG4gICAgICAgICAgICAucmVkdWNlKChhY2MsIFtxdWVyeVBhcmFtS2V5LCBxdWVyeVBhcmFtVmFsXSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtjbGVhblF1ZXJ5UGFyYW1LZXksIGNsZWFuUXVlcnlQYXJhbVZhbF0gPSB0aGlzLmNsZWFuUXVlcnlQYXJhbShbXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1LZXksXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1WYWxdKTtcbiAgICAgICAgICAgICAgICBhY2NbY2xlYW5RdWVyeVBhcmFtS2V5XSA9IGNsZWFuUXVlcnlQYXJhbVZhbDtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgfSwge30gYXMgUGFyYW1zKTtcblxuICAgICAgICBjb25zdCBmaWx0ZXJDcml0ZXJpYTogU2VhcmNoQ3JpdGVyaWEgPSB0aGlzLmdldFF1ZXJ5RmlsdGVyQ3JpdGVyaWEoXG4gICAgICAgICAgICBmaWx0ZXJGaWVsZERlZmluaXRpb25zLFxuICAgICAgICAgICAgbW9kdWxlLFxuICAgICAgICAgICAgcXVlcnlQYXJhbXNcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoaXNFbXB0eShmaWx0ZXJDcml0ZXJpYS5maWx0ZXJzKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAga2V5OiAnZGVmYXVsdCcsXG4gICAgICAgICAgICBzZWFyY2hNb2R1bGU6IG1vZHVsZSxcbiAgICAgICAgICAgIG1vZHVsZTogJ3NhdmVkLXNlYXJjaCcsXG4gICAgICAgICAgICBjcml0ZXJpYTogZmlsdGVyQ3JpdGVyaWFcbiAgICAgICAgfSBhcyBTYXZlZEZpbHRlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgdGhlIHF1ZXJ5IGZpbHRlciBjcml0ZXJpYSBiYXNlZCBvbiB0aGUgcHJvdmlkZWQgZmllbGQgZGVmaW5pdGlvbnMgbWFwLCBtb2R1bGUsIGFuZCBxdWVyeSBwYXJhbWV0ZXJzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtGaWVsZERlZmluaXRpb25NYXB9IGZpZWxkRGVmaW5pdGlvbk1hcCAtIFRoZSBmaWVsZCBkZWZpbml0aW9uIG1hcC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kdWxlIC0gVGhlIG1vZHVsZSBuYW1lLlxuICAgICAqIEBwYXJhbSB7UGFyYW1zfSBxdWVyeVBhcmFtcyAtIFRoZSBxdWVyeSBwYXJhbWV0ZXJzLlxuICAgICAqIEByZXR1cm5zIHtTZWFyY2hDcml0ZXJpYX0gLSBUaGUgZ2VuZXJhdGVkIHNlYXJjaCBjcml0ZXJpYS5cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldFF1ZXJ5RmlsdGVyQ3JpdGVyaWEgKFxuICAgICAgICBmaWVsZERlZmluaXRpb25NYXA6IEZpZWxkRGVmaW5pdGlvbk1hcCxcbiAgICAgICAgbW9kdWxlOiBzdHJpbmcsXG4gICAgICAgIHF1ZXJ5UGFyYW1zOiBQYXJhbXNcbiAgICApOiBTZWFyY2hDcml0ZXJpYSB7XG4gICAgICAgIGNvbnN0IGNyaXRlcmlhOiBTZWFyY2hDcml0ZXJpYSA9IHtcbiAgICAgICAgICAgIG5hbWU6ICdkZWZhdWx0JyxcbiAgICAgICAgICAgIGZpbHRlcnM6IHt9XG4gICAgICAgIH0gYXMgU2VhcmNoQ3JpdGVyaWE7XG5cbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXNLZXlzID0gT2JqZWN0LmtleXMocXVlcnlQYXJhbXMpO1xuICAgICAgICBjb25zdCBmaWVsZERlZmluaXRpb25zID0gT2JqZWN0LnZhbHVlcyhmaWVsZERlZmluaXRpb25NYXApXG4gICAgICAgICAgICAuZmlsdGVyKCh7IG5hbWUgfSkgPT4gcXVlcnlQYXJhbXNLZXlzLnNvbWUocVBLZXkgPT4gcVBLZXkuaW5jbHVkZXMobmFtZSkpKTtcblxuICAgICAgICBjb25zdCBsaXN0dmlld1VybFF1ZXJ5RmlsdGVyTWFwcGluZyA9IHRoaXMuc3lzdGVtQ29uZmlnLmdldENvbmZpZ1ZhbHVlKFxuICAgICAgICAgICAgJ2xpc3R2aWV3X3VybF9xdWVyeV9maWx0ZXJfbWFwcGluZydcbiAgICAgICAgKSBhcyBEb3VibGVOZXN0ZWRHZW5lcmljTWFwPHN0cmluZz47XG4gICAgICAgIGNvbnN0IGxpc3R2aWV3VXJsUXVlcnlGaWx0ZXJNYXBwaW5nRW50cmllcyA9IE9iamVjdC5lbnRyaWVzKGxpc3R2aWV3VXJsUXVlcnlGaWx0ZXJNYXBwaW5nKTtcbiAgICAgICAgbGlzdHZpZXdVcmxRdWVyeUZpbHRlck1hcHBpbmdFbnRyaWVzLnB1c2goWycnLCB7fV0pO1xuXG4gICAgICAgIGxldCBzZWFyY2hUeXBlO1xuICAgICAgICBzd2l0Y2ggKHF1ZXJ5UGFyYW1zWydzZWFyY2hGb3JtVGFiJ10pIHtcbiAgICAgICAgICAgIGNhc2UgJ2Jhc2ljX3NlYXJjaCc6XG4gICAgICAgICAgICAgICAgc2VhcmNoVHlwZSA9ICdiYXNpYyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhZHZhbmNlZF9zZWFyY2gnOlxuICAgICAgICAgICAgICAgIHNlYXJjaFR5cGUgPSAnYWR2YW5jZWQnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBzZWFyY2hUeXBlID0gJ2FkdmFuY2VkJztcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3QgZmllbGREZWZpbml0aW9uIG9mIGZpZWxkRGVmaW5pdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkRmlsdGVyTmFtZSA9IGZpZWxkRGVmaW5pdGlvbi5uYW1lO1xuICAgICAgICAgICAgY29uc3QgZmllbGRGaWx0ZXJLZXlzID0gW1xuICAgICAgICAgICAgICAgIGZpZWxkRmlsdGVyTmFtZSxcbiAgICAgICAgICAgICAgICBgJHtmaWVsZEZpbHRlck5hbWV9XyR7c2VhcmNoVHlwZX1gXG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtxdWVyeUZpbHRlck9wZXJhdG9yS2V5VGVtcGxhdGUsIHF1ZXJ5RmlsdGVyT3BlcmF0b3JQYXJhbXNNYXBdIG9mIGxpc3R2aWV3VXJsUXVlcnlGaWx0ZXJNYXBwaW5nRW50cmllcykge1xuICAgICAgICAgICAgICAgIGlmICghaXNFbXB0eShjcml0ZXJpYS5maWx0ZXJzW2ZpZWxkRmlsdGVyTmFtZV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZmllbGRGaWx0ZXJLZXkgb2YgZmllbGRGaWx0ZXJLZXlzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNFbXB0eShjcml0ZXJpYS5maWx0ZXJzW2ZpZWxkRmlsdGVyTmFtZV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIgPSB0aGlzLmJ1aWxkU2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkRmlsdGVyTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkRGVmaW5pdGlvbi50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZEZpbHRlcktleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5RmlsdGVyT3BlcmF0b3JLZXlUZW1wbGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5RmlsdGVyT3BlcmF0b3JQYXJhbXNNYXBcbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNFbXB0eShzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb252ZXJ0YWJsZVByb3BlcnRpZXMuZm9yRWFjaCgoY29udmVydGFibGVQcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlcltjb252ZXJ0YWJsZVByb3BlcnR5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGludGVybmFsRm9ybWF0VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQXJyYXkoc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlcltjb252ZXJ0YWJsZVByb3BlcnR5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJuYWxGb3JtYXRWYWx1ZSA9IHNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXJbY29udmVydGFibGVQcm9wZXJ0eV0ubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcCA9PiB0aGlzLnRvSW50ZXJuYWxGb3JtYXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGREZWZpbml0aW9uLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJuYWxGb3JtYXRWYWx1ZSA9IHRoaXMudG9JbnRlcm5hbEZvcm1hdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkRGVmaW5pdGlvbi50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlcltjb252ZXJ0YWJsZVByb3BlcnR5XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXJbY29udmVydGFibGVQcm9wZXJ0eV0gPSBpbnRlcm5hbEZvcm1hdFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY3JpdGVyaWEuZmlsdGVyc1tmaWVsZEZpbHRlck5hbWVdID0gc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY3JpdGVyaWE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGRzIGEgc2VhcmNoIGNyaXRlcmlhIGZpZWxkIGZpbHRlciBvYmplY3QgYmFzZWQgb24gdGhlIHByb3ZpZGVkIHBhcmFtZXRlcnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGRGaWx0ZXJOYW1lIC0gVGhlIG5hbWUgb2YgdGhlIGZpZWxkIGZpbHRlci5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGRGaWx0ZXJGaWVsZFR5cGUgLSBUaGUgdHlwZSBvZiB0aGUgZmllbGQgZmlsdGVyLlxuICAgICAqIEBwYXJhbSB7UGFyYW1zfSBxdWVyeVBhcmFtcyAtIFRoZSBxdWVyeSBwYXJhbWV0ZXJzLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZEZpbHRlcktleSAtIFRoZSBrZXkgb2YgdGhlIGZpZWxkIGZpbHRlciBpbiB0aGUgcXVlcnkgcGFyYW1ldGVycy5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnlGaWx0ZXJPcGVyYXRvcktleVRlbXBsYXRlIC0gVGhlIHRlbXBsYXRlIGZvciB0aGUgcXVlcnkgZmlsdGVyIG9wZXJhdG9yIGtleS5cbiAgICAgKiBAcGFyYW0ge05lc3RlZEdlbmVyaWNNYXA8c3RyaW5nPn0gcXVlcnlGaWx0ZXJPcGVyYXRvclBhcmFtc01hcCAtIFRoZSBtYXAgb2YgcXVlcnkgZmlsdGVyIG9wZXJhdG9yIGtleXMgdG8gdGhlaXIgcmVzcGVjdGl2ZSBwYXJhbWV0ZXIgbWFwcy5cbiAgICAgKiBAcmV0dXJucyB7U2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlciB8IG51bGx9IFRoZSBidWlsdCBzZWFyY2ggY3JpdGVyaWEgZmllbGQgZmlsdGVyIG9iamVjdC5cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGJ1aWxkU2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlciAoXG4gICAgICAgIGZpZWxkRmlsdGVyTmFtZTogc3RyaW5nLFxuICAgICAgICBmaWVsZEZpbHRlckZpZWxkVHlwZTogc3RyaW5nLFxuICAgICAgICBxdWVyeVBhcmFtczogUGFyYW1zLFxuICAgICAgICBmaWVsZEZpbHRlcktleTogc3RyaW5nLFxuICAgICAgICBxdWVyeUZpbHRlck9wZXJhdG9yS2V5VGVtcGxhdGU6IHN0cmluZyxcbiAgICAgICAgcXVlcnlGaWx0ZXJPcGVyYXRvclBhcmFtc01hcDogTmVzdGVkR2VuZXJpY01hcDxzdHJpbmc+XG4gICAgKTogU2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlciB8IG51bGwge1xuICAgICAgICBjb25zdCBzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyID0ge1xuICAgICAgICAgICAgZmllbGQ6IGZpZWxkRmlsdGVyTmFtZSxcbiAgICAgICAgICAgIGZpZWxkVHlwZTogZmllbGRGaWx0ZXJGaWVsZFR5cGUsXG4gICAgICAgICAgICBvcGVyYXRvcjogJz0nLFxuICAgICAgICAgICAgdmFsdWVzOiBbXVxuICAgICAgICB9IGFzIFNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXI7XG5cbiAgICAgICAgaWYgKGlzRW1wdHkocXVlcnlGaWx0ZXJPcGVyYXRvcktleVRlbXBsYXRlKSB8fCBpc0VtcHR5KHF1ZXJ5RmlsdGVyT3BlcmF0b3JQYXJhbXNNYXApKSB7XG4gICAgICAgICAgICBjb25zdCBmaWVsZEZpbHRlclZhbHVlID0gdGhpcy5nZXRRdWVyeVBhcmFtVmFsdWUoXG4gICAgICAgICAgICAgICAgZmllbGRGaWx0ZXJLZXksXG4gICAgICAgICAgICAgICAgZmllbGRGaWx0ZXJLZXksXG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXNcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoaXNFbXB0eShmaWVsZEZpbHRlclZhbHVlKSAmJiAhaXNFbXB0eVN0cmluZyhmaWVsZEZpbHRlclZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBpc0FycmF5KGZpZWxkRmlsdGVyVmFsdWUpXG4gICAgICAgICAgICAgICAgPyBmaWVsZEZpbHRlclZhbHVlXG4gICAgICAgICAgICAgICAgOiBbZmllbGRGaWx0ZXJWYWx1ZV07XG5cbiAgICAgICAgICAgIHNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIudmFsdWVzID0gdmFsdWVzO1xuICAgICAgICAgICAgc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlci50YXJnZXQgPSB2YWx1ZXNbMF07XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoZWNrRGF0ZVNwZWNpYWxzT3JSZXR1cm4oXG4gICAgICAgICAgICAgICAgc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlcixcbiAgICAgICAgICAgICAgICBzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyLnRhcmdldFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHF1ZXJ5RmlsdGVyT3BlcmF0b3JLZXkgPSB0aGlzLmdldFF1ZXJ5UGFyYW1WYWx1ZShcbiAgICAgICAgICAgIHF1ZXJ5RmlsdGVyT3BlcmF0b3JLZXlUZW1wbGF0ZSxcbiAgICAgICAgICAgIGZpZWxkRmlsdGVyS2V5LFxuICAgICAgICAgICAgcXVlcnlQYXJhbXMsXG4gICAgICAgICAgICB7IGZvcmNlU2luZ2xlU3RyaW5nOiB0cnVlIH1cbiAgICAgICAgKSBhcyBzdHJpbmc7XG4gICAgICAgIGNvbnN0IHF1ZXJ5RmlsdGVyT3BlcmF0b3JQYXJhbXMgPSAoXG4gICAgICAgICAgICBxdWVyeUZpbHRlck9wZXJhdG9yUGFyYW1zTWFwW3F1ZXJ5RmlsdGVyT3BlcmF0b3JLZXldID8/XG4gICAgICAgICAgICBPYmplY3RcbiAgICAgICAgICAgICAgICAudmFsdWVzKHF1ZXJ5RmlsdGVyT3BlcmF0b3JQYXJhbXNNYXApXG4gICAgICAgICAgICAgICAgLnJlZHVjZSgocHJldiwgY3VycikgPT4gKFxuICAgICAgICAgICAgICAgICAgICB7IC4uLnByZXYsIC4uLmN1cnIgfVxuICAgICAgICAgICAgICAgICksIHt9KVxuICAgICAgICAgICAgPz8ge31cbiAgICAgICAgKSBhcyBHZW5lcmljTWFwPHN0cmluZz47XG4gICAgICAgIGlmIChpc0VtcHR5KHF1ZXJ5RmlsdGVyT3BlcmF0b3JQYXJhbXMpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXR1cm5FbXB0eSA9IHRydWU7XG4gICAgICAgIHNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIub3BlcmF0b3IgPSBxdWVyeUZpbHRlck9wZXJhdG9yS2V5O1xuICAgICAgICBPYmplY3QuZW50cmllcyhxdWVyeUZpbHRlck9wZXJhdG9yUGFyYW1zKVxuICAgICAgICAgICAgLmZpbHRlcigoW18sIHNlYXJjaENyaXRlcmlhUHJvcGVydHlLZXldKSA9PiAoXG4gICAgICAgICAgICAgICAgdHlwZW9mIHNlYXJjaENyaXRlcmlhUHJvcGVydHlLZXkgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgJiYgdGhpcy5hbGxvd2VkUHJvcGVydGllcy5pbmNsdWRlcyhzZWFyY2hDcml0ZXJpYVByb3BlcnR5S2V5KVxuICAgICAgICAgICAgKSlcbiAgICAgICAgICAgIC5mb3JFYWNoKChbc2VhcmNoQ3JpdGVyaWFQcm9wZXJ0eVZhbHVlVGVtcGxhdGUsIHNlYXJjaENyaXRlcmlhUHJvcGVydHlLZXldKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmF3U2VhcmNoQ3JpdGVyaWFQcm9wZXJ0eVZhbHVlID0gdGhpcy5nZXRRdWVyeVBhcmFtVmFsdWUoXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaENyaXRlcmlhUHJvcGVydHlWYWx1ZVRlbXBsYXRlLFxuICAgICAgICAgICAgICAgICAgICBmaWVsZEZpbHRlcktleSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXNcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgaWYgKGlzRW1wdHkocmF3U2VhcmNoQ3JpdGVyaWFQcm9wZXJ0eVZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybkVtcHR5ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBsZXQgc2VhcmNoQ3JpdGVyaWFQcm9wZXJ0eVZhbHVlID0gcmF3U2VhcmNoQ3JpdGVyaWFQcm9wZXJ0eVZhbHVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNlYXJjaENyaXRlcmlhUHJvcGVydHlLZXkgPT09ICd2YWx1ZXMnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNBcnJheShzZWFyY2hDcml0ZXJpYVByb3BlcnR5VmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hDcml0ZXJpYVByb3BlcnR5VmFsdWUgPSBbc2VhcmNoQ3JpdGVyaWFQcm9wZXJ0eVZhbHVlXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXJbJ3RhcmdldCddID0gc2VhcmNoQ3JpdGVyaWFQcm9wZXJ0eVZhbHVlWzBdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VhcmNoQ3JpdGVyaWFQcm9wZXJ0eUtleSA9PT0gJ3RhcmdldCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQXJyYXkoc2VhcmNoQ3JpdGVyaWFQcm9wZXJ0eVZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoQ3JpdGVyaWFQcm9wZXJ0eVZhbHVlID0gc2VhcmNoQ3JpdGVyaWFQcm9wZXJ0eVZhbHVlWzBdO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlclsndmFsdWVzJ10gPSBbc2VhcmNoQ3JpdGVyaWFQcm9wZXJ0eVZhbHVlXSBhcyBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyW3NlYXJjaENyaXRlcmlhUHJvcGVydHlLZXldID0gc2VhcmNoQ3JpdGVyaWFQcm9wZXJ0eVZhbHVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFpc0FycmF5KHNlYXJjaENyaXRlcmlhUHJvcGVydHlWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja0RhdGVTcGVjaWFsc09yUmV0dXJuKFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaENyaXRlcmlhUHJvcGVydHlWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRvcjogcXVlcnlGaWx0ZXJPcGVyYXRvcktleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHNlYXJjaENyaXRlcmlhUHJvcGVydHlLZXlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gIXJldHVybkVtcHR5ID8gdGhpcy5jaGVja0Zvck1pc3NpbmdPcGVyYXRvcihzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyKSA6IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIHRoZSB2YWx1ZSBvZiBhIHF1ZXJ5IHBhcmFtZXRlciBiYXNlZCBvbiB0aGUgcHJvdmlkZWQgcXVlcnlQYXJhbUtleVRlbXBsYXRlLFxuICAgICAqIGZpZWxkRmlsdGVyS2V5LCBhbmQgcXVlcnlQYXJhbXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnlQYXJhbUtleVRlbXBsYXRlIC0gVGhlIHRlbXBsYXRlIGZvciB0aGUgcXVlcnkgcGFyYW1ldGVyIGtleSwgd2l0aCBcIntmaWVsZH1cIiBhcyBhIHBsYWNlaG9sZGVyIGZvciBmaWVsZEZpbHRlcktleS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGRGaWx0ZXJLZXkgLSBUaGUgZmllbGQgZmlsdGVyIGtleSB1c2VkIHRvIHJlcGxhY2UgdGhlIFwie2ZpZWxkfVwiIHBsYWNlaG9sZGVyIGluIHF1ZXJ5UGFyYW1LZXlUZW1wbGF0ZS5cbiAgICAgKiBAcGFyYW0ge1BhcmFtc30gcXVlcnlQYXJhbXMgLSBUaGUgb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHF1ZXJ5IHBhcmFtZXRlcnMuXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBPcHRpb25hbCBwYXJhbWV0ZXJzIHRvIGN1c3RvbWl6ZSB0aGUgYmVoYXZpb3Igb2YgdGhlIG1ldGhvZC5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMuZm9yY2VTaW5nbGVTdHJpbmcgLSBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgcmVzdWx0IHNob3VsZCBhbHdheXMgYmUgYSBzaW5nbGUgc3RyaW5nIHZhbHVlLlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd8c3RyaW5nW119IC0gVGhlIHZhbHVlIG9mIHRoZSBxdWVyeSBwYXJhbWV0ZXIuIElmIGZvcmNlU2luZ2xlU3RyaW5nIGlzIGZhbHNlLCBpdCB3aWxsIGJlIGVpdGhlciBhIHN0cmluZyBvciBhbiBhcnJheSBvZiBzdHJpbmdzLlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0UXVlcnlQYXJhbVZhbHVlIChcbiAgICAgICAgcXVlcnlQYXJhbUtleVRlbXBsYXRlOiBzdHJpbmcsXG4gICAgICAgIGZpZWxkRmlsdGVyS2V5OiBzdHJpbmcsXG4gICAgICAgIHF1ZXJ5UGFyYW1zOiBQYXJhbXMsXG4gICAgICAgIHsgZm9yY2VTaW5nbGVTdHJpbmcgPSBmYWxzZSB9ID0ge31cbiAgICApOiBzdHJpbmcgfCBzdHJpbmdbXSB8IG51bGwge1xuICAgICAgICBjb25zdCBxdWVyeVBhcmFtS2V5ID0gcXVlcnlQYXJhbUtleVRlbXBsYXRlLnJlcGxhY2UoXG4gICAgICAgICAgICAne2ZpZWxkfScsXG4gICAgICAgICAgICBmaWVsZEZpbHRlcktleVxuICAgICAgICApID8/ICcnO1xuXG4gICAgICAgIGxldCBxdWVyeVBhcmFtVmFsdWUgPSBxdWVyeVBhcmFtc1txdWVyeVBhcmFtS2V5XTtcblxuICAgICAgICBpZiAoIXF1ZXJ5UGFyYW1WYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNBcnJheShxdWVyeVBhcmFtVmFsdWUpKSB7XG4gICAgICAgICAgICBxdWVyeVBhcmFtVmFsdWUgPSBxdWVyeVBhcmFtVmFsdWUubWFwKHRoaXMudHJhbnNmb3JtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1WYWx1ZSA9IHRoaXMudHJhbnNmb3JtKHF1ZXJ5UGFyYW1WYWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZm9yY2VTaW5nbGVTdHJpbmcgJiYgaXNBcnJheShxdWVyeVBhcmFtVmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gcXVlcnlQYXJhbVZhbHVlWzBdID8/ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHF1ZXJ5UGFyYW1WYWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhbnMgdGhlIHF1ZXJ5IHBhcmFtZXRlciBrZXkgYnkgcmVtb3ZpbmcgdGhlICdbXScgYnJhY2tldHMgaWYgcHJlc2VudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IC0gVGhlIGNsZWFuZWQgcXVlcnkgcGFyYW1ldGVyIGtleS5cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHBhcmFtIHF1ZXJ5UGFyYW1cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgY2xlYW5RdWVyeVBhcmFtIChxdWVyeVBhcmFtOiBbc3RyaW5nLCBzdHJpbmcgfCBzdHJpbmdbXV0pOiBbc3RyaW5nLCBzdHJpbmcgfCBzdHJpbmdbXV0ge1xuICAgICAgICBsZXQgW3F1ZXJ5UGFyYW1LZXksIHF1ZXJ5UGFyYW1WYWxdID0gcXVlcnlQYXJhbTtcblxuICAgICAgICBjb25zdCBxdWVyeVBhcmFtS2V5UmV2ZXJzZWQgPSBxdWVyeVBhcmFtS2V5LnNwbGl0KCcnKS5yZXZlcnNlKCkuam9pbignJyk7XG4gICAgICAgIGlmIChxdWVyeVBhcmFtS2V5UmV2ZXJzZWQuaW5kZXhPZignXVsnKSA9PT0gMCAmJiB0eXBlb2YgcXVlcnlQYXJhbVZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1LZXkgPSBxdWVyeVBhcmFtS2V5LnJlcGxhY2UoJ1tdJywgJycpO1xuICAgICAgICAgICAgcXVlcnlQYXJhbVZhbCA9IHF1ZXJ5UGFyYW1WYWwuc3BsaXQoJywnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBbcXVlcnlQYXJhbUtleSwgcXVlcnlQYXJhbVZhbF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIGdpdmVuIGZpZWxkRmlsdGVyVmFsdWUgbWF0Y2hlcyBNT05USF9ZRUFSX1JFR0VYIG9yIHllYXJSZWdleCBhbmQgcmV0dXJuc1xuICAgICAqIG92ZXJyaWRlc1NlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIgaWYgdHJ1ZSwgZWxzZSByZXR1cm5zIHNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1NlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXJ9IHNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIgLSBUaGUgc2VhcmNoIGNyaXRlcmlhIGZpZWxkIGZpbHRlci5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGRGaWx0ZXJWYWx1ZSAtIFRoZSBmaWVsZCBmaWx0ZXIgdmFsdWUuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLm9wZXJhdG9yPSc9J10gLSBUaGUgcmFuZ2Ugb3B0aW9uLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5rZXk9J3RhcmdldCddIC0gVGhlIGtleSBvcHRpb24uXG4gICAgICogQHJldHVybnMge1NlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXJ9IC0gVGhlIHVwZGF0ZWQgc2VhcmNoIGNyaXRlcmlhIGZpZWxkIGZpbHRlci5cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGNoZWNrRGF0ZVNwZWNpYWxzT3JSZXR1cm4gKFxuICAgICAgICBzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyOiBTZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyLFxuICAgICAgICBmaWVsZEZpbHRlclZhbHVlOiBzdHJpbmcsXG4gICAgICAgIHsgb3BlcmF0b3IgPSAnPScsIGtleSA9ICd0YXJnZXQnIH06IHsgb3BlcmF0b3I/OiBzdHJpbmcsIGtleT86IHN0cmluZyB9ID0ge31cbiAgICApOiBTZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyIHtcbiAgICAgICAgaWYgKGZpZWxkRmlsdGVyVmFsdWUubWF0Y2goTU9OVEhfWUVBUl9SRUdFWCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm92ZXJyaWRlc1NlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIoXG4gICAgICAgICAgICAgICAgc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlcixcbiAgICAgICAgICAgICAgICBmaWVsZEZpbHRlclZhbHVlLFxuICAgICAgICAgICAgICAgIHsgdHlwZTogJ21vbnRoJywgb3BlcmF0b3IsIGtleSB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZpZWxkRmlsdGVyVmFsdWUubWF0Y2goTU9OVEhfUkVHRVgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vdmVycmlkZXNTZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyKFxuICAgICAgICAgICAgICAgIHNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIsXG4gICAgICAgICAgICAgICAgZmllbGRGaWx0ZXJWYWx1ZSxcbiAgICAgICAgICAgICAgICB7IHR5cGU6ICd5ZWFyJywgb3BlcmF0b3IsIGtleSB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGVzIHRoZSBzZWFyY2ggY3JpdGVyaWEgZmllbGQgZmlsdGVyIGJhc2VkIG9uIHRoZSBwcm92aWRlZCBwYXJhbWV0ZXJzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyfSBzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyIC0gVGhlIG9yaWdpbmFsIHNlYXJjaCBjcml0ZXJpYSBmaWVsZCBmaWx0ZXIuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkRmlsdGVyVmFsdWUgLSBUaGUgdmFsdWUgb2YgdGhlIGZpZWxkIGZpbHRlci5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFRoZSBvcHRpb25zIGZvciBvdmVycmlkaW5nIHRoZSBmaWVsZCBmaWx0ZXIuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudHlwZSAtIFRoZSB0eXBlIG9mIHRoZSBmaWVsZCBmaWx0ZXIuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLm9wZXJhdG9yPSdlcXVhbCddIC0gVGhlIG9wZXJhdG9yIGZvciB0aGUgZmllbGQgZmlsdGVyLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5rZXk9J3RhcmdldCddIC0gVGhlIGtleSBmb3IgdGhlIGZpZWxkIGZpbHRlci5cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHJldHVybnMge1NlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXJ9IC0gVGhlIG92ZXJyaWRkZW4gc2VhcmNoIGNyaXRlcmlhIGZpZWxkIGZpbHRlci5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGVzU2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlciAoXG4gICAgICAgIHNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXI6IFNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIsXG4gICAgICAgIGZpZWxkRmlsdGVyVmFsdWU6IHN0cmluZyxcbiAgICAgICAgeyB0eXBlID0gJycsIG9wZXJhdG9yID0gJ2VxdWFsJywga2V5ID0gJ3RhcmdldCcgfToge1xuICAgICAgICAgICAgdHlwZTogc3RyaW5nLFxuICAgICAgICAgICAgb3BlcmF0b3I/OiBzdHJpbmcsXG4gICAgICAgICAgICBrZXk/OiBzdHJpbmdcbiAgICAgICAgfVxuICAgICk6IFNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIge1xuICAgICAgICBsZXQgcGx1c09iamVjdDtcbiAgICAgICAgbGV0IGZtdDtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICd5ZWFyJzpcbiAgICAgICAgICAgICAgICBwbHVzT2JqZWN0ID0geyB5ZWFyOiAxIH07XG4gICAgICAgICAgICAgICAgZm10ID0gJ3l5eXknO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICAgICAgICAgIHBsdXNPYmplY3QgPSB7IG1vbnRoOiAxIH07XG4gICAgICAgICAgICAgICAgZm10ID0gJ3l5eXktTU0nO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gRGF0ZVRpbWUuZnJvbUZvcm1hdChmaWVsZEZpbHRlclZhbHVlLCBmbXQpO1xuICAgICAgICBjb25zdCBlbmQgPSBzdGFydC5wbHVzKHBsdXNPYmplY3QpLm1pbnVzKHsgZGF5OiAxIH0pO1xuXG4gICAgICAgIGlmIChrZXkgIT09ICd0YXJnZXQnKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlci5zdGFydCA9IHN0YXJ0LnRvRm9ybWF0KCd5eXl5LU1NLWRkJyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIuZW5kID0gZW5kLnRvRm9ybWF0KCd5eXl5LU1NLWRkJyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgICAgIHN3aXRjaCAob3BlcmF0b3IpIHtcbiAgICAgICAgICAgIGNhc2UgJ2dyZWF0ZXJfdGhhbic6XG4gICAgICAgICAgICBjYXNlICdncmVhdGVyX3RoYW5fZXF1YWxzJzpcbiAgICAgICAgICAgICAgICBzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyLnN0YXJ0ID0gc3RhcnQudG9Gb3JtYXQoJ3l5eXktTU0tZGQnKTtcbiAgICAgICAgICAgICAgICBzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyLnRhcmdldCA9IHNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIuc3RhcnQ7XG4gICAgICAgICAgICAgICAgc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlci52YWx1ZXMgPSBbc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlci50YXJnZXRdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbGVzc190aGFuJzpcbiAgICAgICAgICAgIGNhc2UgJ2xlc3NfdGhhbl9lcXVhbHMnOlxuICAgICAgICAgICAgICAgIHNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIuZW5kID0gZW5kLnRvRm9ybWF0KCd5eXl5LU1NLWRkJyk7XG4gICAgICAgICAgICAgICAgc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlci50YXJnZXQgPSBzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyLmVuZDtcbiAgICAgICAgICAgICAgICBzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyLnZhbHVlcyA9IFtzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyLnRhcmdldF07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdub3RfZXF1YWwnOlxuICAgICAgICAgICAgICAgIHNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIuc3RhcnQgPSBzdGFydC50b0Zvcm1hdCgneXl5eS1NTS1kZCcpO1xuICAgICAgICAgICAgICAgIHNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIuZW5kID0gZW5kLnRvRm9ybWF0KCd5eXl5LU1NLWRkJyk7XG4gICAgICAgICAgICAgICAgc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlci50YXJnZXQgPSBmaWVsZEZpbHRlclZhbHVlO1xuICAgICAgICAgICAgICAgIHNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIudmFsdWVzID0gW2ZpZWxkRmlsdGVyVmFsdWVdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZXF1YWwnOlxuICAgICAgICAgICAgY2FzZSAnYmV0d2Vlbic6XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIub3BlcmF0b3IgPSAnYmV0d2Vlbic7XG4gICAgICAgICAgICAgICAgc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlci5zdGFydCA9IHN0YXJ0LnRvRm9ybWF0KCd5eXl5LU1NLWRkJyk7XG4gICAgICAgICAgICAgICAgc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlci5lbmQgPSBlbmQudG9Gb3JtYXQoJ3l5eXktTU0tZGQnKTtcbiAgICAgICAgICAgICAgICBzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyLnRhcmdldCA9ICcnO1xuICAgICAgICAgICAgICAgIHNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIudmFsdWVzID0gW107XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gdmFsdWUgdG8gdGhlIGludGVybmFsIGZvcm1hdCBiYXNlZCBvbiB0aGUgc3BlY2lmaWVkIHR5cGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtIFRoZSB0eXBlIG9mIHZhbHVlIHRvIGNvbnZlcnQgdG8uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gICAgICogQHJldHVybiB7c3RyaW5nfSAtIFRoZSBjb252ZXJ0ZWQgdmFsdWUgaW4gdGhlIGludGVybmFsIGZvcm1hdC5cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHRvSW50ZXJuYWxGb3JtYXQgKHR5cGU6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGlmICh2YWx1ZS5tYXRjaChNT05USF9SRUdFWCkgfHwgdmFsdWUubWF0Y2goTU9OVEhfWUVBUl9SRUdFWCkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhVHlwZUZvcm1hdHRlci50b0ludGVybmFsRm9ybWF0KHR5cGUsIHZhbHVlKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVHJhbnNmb3JtcyB0aGUgZ2l2ZW4gdmFsdWUgZnJvbSB1cmwgdG8gYSB2YWx1ZSB1bmRlcnN0YW5kYWJsZSBieSBiYWNrZW5kLlxuICAgICAqXG4gICAgICogQHBhcmFtIHthbnl9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGJlIHRyYW5zZm9ybWVkLlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSB0cmFuc2Zvcm1lZCB2YWx1ZS5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgdHJhbnNmb3JtICh2YWx1ZTogYW55KTogc3RyaW5nIHtcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSAnJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ19fU3VpdGVDUk1FbXB0eVN0cmluZ19fJztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNoZWNrRm9yTWlzc2luZ09wZXJhdG9yIChzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyOiBTZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyKTogU2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlciB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICFpc0VtcHR5KHNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIuc3RhcnQpXG4gICAgICAgICAgICAmJiAhaXNFbXB0eShzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyLmVuZClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyLm9wZXJhdG9yID0gJ2JldHdlZW4nO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXI7XG4gICAgfVxufVxuIl19