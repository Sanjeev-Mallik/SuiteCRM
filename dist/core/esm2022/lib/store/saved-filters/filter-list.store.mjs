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
import { AuthService } from '../../services/auth/auth.service';
import { RecordListStore } from '../record-list/record-list.store';
import { ModuleNameMapper } from '../../services/navigation/module-name-mapper/module-name-mapper.service';
import { SystemConfigStore } from '../system-config/system-config.store';
import { UserPreferenceStore } from '../user-preference/user-preference.store';
import { LanguageStore } from '../language/language.store';
import { MessageService } from '../../services/message/message.service';
import { FiltersListGQL } from './graphql/api.list.get';
import { LocalStorageService } from "../../services/local-storage/local-storage.service";
import * as i0 from "@angular/core";
import * as i1 from "./graphql/api.list.get";
import * as i2 from "../system-config/system-config.store";
import * as i3 from "../user-preference/user-preference.store";
import * as i4 from "../language/language.store";
import * as i5 from "../../services/message/message.service";
import * as i6 from "../../services/auth/auth.service";
import * as i7 from "../../services/navigation/module-name-mapper/module-name-mapper.service";
import * as i8 from "../../services/local-storage/local-storage.service";
export class FilterListStore extends RecordListStore {
    /**
     * Constructor
     * @param listGQL
     * @param configs
     * @param preferences
     * @param language
     * @param message
     * @param auth
     * @param moduleNameMapper
     * @param localStorageService
     */
    constructor(listGQL, configs, preferences, language, message, auth, moduleNameMapper, localStorageService) {
        super(listGQL, configs, preferences, language, message, localStorageService);
        this.listGQL = listGQL;
        this.configs = configs;
        this.preferences = preferences;
        this.language = language;
        this.message = message;
        this.auth = auth;
        this.moduleNameMapper = moduleNameMapper;
        this.localStorageService = localStorageService;
        this.moduleName = 'saved-search';
        this.filterFields = {
            module: 'search_module',
            user: 'assigned_user_id',
        };
    }
    /**
     * Initialize store
     * @param module
     */
    init(module) {
        const result$ = super.init(this.moduleName, false);
        this.initCriteria(module);
        return result$;
    }
    /**
     * Load / reload records using current pagination and criteria
     *
     * @param {boolean} useCache if to use cache
     * @returns {object} Observable<RecordList>
     */
    load(useCache = true) {
        return super.load(useCache);
    }
    /**
     * Get current list of saved filters
     */
    getFilters() {
        return this.records;
    }
    /**
     * Add new filter to list
     * @param filter
     */
    addFilter(filter) {
        let isNew = true;
        const filters = this.records;
        const newList = [];
        filters.forEach(record => {
            if (record.id === filter.id) {
                newList.push(filter);
                isNew = false;
                return;
            }
            newList.push(record);
        });
        if (isNew) {
            newList.push(filter);
        }
        this.updateState({
            ...this.internalState,
            records: newList,
        });
    }
    /**
     * Remove existing filter
     * @param filter
     */
    removeFilter(filter) {
        if (!filter || !filter.id) {
            return;
        }
        const filters = this.records;
        const newList = [];
        filters.forEach(record => {
            if (record.id === filter.id) {
                return;
            }
            newList.push(record);
        });
        this.updateState({
            ...this.internalState,
            records: newList,
        });
    }
    /**
     * Initialize criteria
     * @param module
     */
    initCriteria(module) {
        const criteria = this.criteria;
        criteria.filters[this.filterFields.module] = {
            field: this.filterFields.module,
            operator: '=',
            values: [this.moduleNameMapper.toLegacy(module)]
        };
        criteria.filters[this.filterFields.user] = {
            field: this.filterFields.user,
            operator: '=',
            values: [this.auth.getCurrentUser().id]
        };
        this.updateSearchCriteria(criteria, false);
    }
    static { this.ɵfac = function FilterListStore_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FilterListStore)(i0.ɵɵinject(i1.FiltersListGQL), i0.ɵɵinject(i2.SystemConfigStore), i0.ɵɵinject(i3.UserPreferenceStore), i0.ɵɵinject(i4.LanguageStore), i0.ɵɵinject(i5.MessageService), i0.ɵɵinject(i6.AuthService), i0.ɵɵinject(i7.ModuleNameMapper), i0.ɵɵinject(i8.LocalStorageService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FilterListStore, factory: FilterListStore.ɵfac }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilterListStore, [{
        type: Injectable
    }], () => [{ type: i1.FiltersListGQL }, { type: i2.SystemConfigStore }, { type: i3.UserPreferenceStore }, { type: i4.LanguageStore }, { type: i5.MessageService }, { type: i6.AuthService }, { type: i7.ModuleNameMapper }, { type: i8.LocalStorageService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWxpc3Quc3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc3RvcmUvc2F2ZWQtZmlsdGVycy9maWx0ZXItbGlzdC5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUd6QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDN0QsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBRWpFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHlFQUF5RSxDQUFDO0FBQ3pHLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLDBDQUEwQyxDQUFDO0FBQzdFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sd0NBQXdDLENBQUM7QUFDdEUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLG9EQUFvRCxDQUFDOzs7Ozs7Ozs7O0FBR3ZGLE1BQU0sT0FBTyxlQUFnQixTQUFRLGVBQWU7SUFVaEQ7Ozs7Ozs7Ozs7T0FVRztJQUNILFlBQ2MsT0FBdUIsRUFDdkIsT0FBMEIsRUFDMUIsV0FBZ0MsRUFDaEMsUUFBdUIsRUFDdkIsT0FBdUIsRUFDdkIsSUFBaUIsRUFDakIsZ0JBQWtDLEVBQ2xDLG1CQUF3QztRQUVsRCxLQUFLLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBVG5FLFlB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QUFDLE1BQU0sQ0FBQyxHQUFHO1lBQ3pDLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU07WUFDL0IsUUFBUSxFQUFFLEdBQUc7WUFDYixNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ25ELENBQUM7UUFFRixRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUc7WUFDdkMsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSTtZQUM3QixRQUFRLEVBQUUsR0FBRztZQUNiLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsRUFBRSxDQUFDO1NBQzFDLENBQUM7UUFFRixJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQy9DLENBQUM7Z0hBOUlRLGVBQWU7dUVBQWYsZUFBZSxXQUFmLGVBQWU7O2lGQUFmLGVBQWU7Y0FEM0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U3RyaW5nTWFwfSBmcm9tICcuLi8uLi9jb21tb24vdHlwZXMvc3RyaW5nLW1hcCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXV0aC9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHtSZWNvcmRMaXN0U3RvcmV9IGZyb20gJy4uL3JlY29yZC1saXN0L3JlY29yZC1saXN0LnN0b3JlJztcbmltcG9ydCB7U2F2ZWRGaWx0ZXIsIFNhdmVkRmlsdGVyTGlzdH0gZnJvbSAnLi9zYXZlZC1maWx0ZXIubW9kZWwnO1xuaW1wb3J0IHtNb2R1bGVOYW1lTWFwcGVyfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL21vZHVsZS1uYW1lLW1hcHBlci9tb2R1bGUtbmFtZS1tYXBwZXIuc2VydmljZSc7XG5pbXBvcnQge1N5c3RlbUNvbmZpZ1N0b3JlfSBmcm9tICcuLi9zeXN0ZW0tY29uZmlnL3N5c3RlbS1jb25maWcuc3RvcmUnO1xuaW1wb3J0IHtVc2VyUHJlZmVyZW5jZVN0b3JlfSBmcm9tICcuLi91c2VyLXByZWZlcmVuY2UvdXNlci1wcmVmZXJlbmNlLnN0b3JlJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZX0gZnJvbSAnLi4vbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvbWVzc2FnZS9tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHtGaWx0ZXJzTGlzdEdRTH0gZnJvbSAnLi9ncmFwaHFsL2FwaS5saXN0LmdldCc7XG5pbXBvcnQge0xvY2FsU3RvcmFnZVNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9sb2NhbC1zdG9yYWdlL2xvY2FsLXN0b3JhZ2Uuc2VydmljZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlsdGVyTGlzdFN0b3JlIGV4dGVuZHMgUmVjb3JkTGlzdFN0b3JlIHtcblxuICAgIHJlY29yZHMkOiBPYnNlcnZhYmxlPFNhdmVkRmlsdGVyW10+O1xuXG4gICAgcHJvdGVjdGVkIG1vZHVsZU5hbWUgPSAnc2F2ZWQtc2VhcmNoJztcbiAgICBwcm90ZWN0ZWQgZmlsdGVyRmllbGRzOiBTdHJpbmdNYXAgPSB7XG4gICAgICAgIG1vZHVsZTogJ3NlYXJjaF9tb2R1bGUnLFxuICAgICAgICB1c2VyOiAnYXNzaWduZWRfdXNlcl9pZCcsXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIGxpc3RHUUxcbiAgICAgKiBAcGFyYW0gY29uZmlnc1xuICAgICAqIEBwYXJhbSBwcmVmZXJlbmNlc1xuICAgICAqIEBwYXJhbSBsYW5ndWFnZVxuICAgICAqIEBwYXJhbSBtZXNzYWdlXG4gICAgICogQHBhcmFtIGF1dGhcbiAgICAgKiBAcGFyYW0gbW9kdWxlTmFtZU1hcHBlclxuICAgICAqIEBwYXJhbSBsb2NhbFN0b3JhZ2VTZXJ2aWNlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBsaXN0R1FMOiBGaWx0ZXJzTGlzdEdRTCxcbiAgICAgICAgcHJvdGVjdGVkIGNvbmZpZ3M6IFN5c3RlbUNvbmZpZ1N0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgcHJlZmVyZW5jZXM6IFVzZXJQcmVmZXJlbmNlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBsYW5ndWFnZTogTGFuZ3VhZ2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIG1lc3NhZ2U6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgYXV0aDogQXV0aFNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBtb2R1bGVOYW1lTWFwcGVyOiBNb2R1bGVOYW1lTWFwcGVyLFxuICAgICAgICBwcm90ZWN0ZWQgbG9jYWxTdG9yYWdlU2VydmljZTogTG9jYWxTdG9yYWdlU2VydmljZVxuICAgICkge1xuICAgICAgICBzdXBlcihsaXN0R1FMLCBjb25maWdzLCBwcmVmZXJlbmNlcywgbGFuZ3VhZ2UsIG1lc3NhZ2UsIGxvY2FsU3RvcmFnZVNlcnZpY2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgc3RvcmVcbiAgICAgKiBAcGFyYW0gbW9kdWxlXG4gICAgICovXG4gICAgaW5pdChtb2R1bGU6IHN0cmluZyk6IE9ic2VydmFibGU8U2F2ZWRGaWx0ZXJMaXN0PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCQgPSBzdXBlci5pbml0KHRoaXMubW9kdWxlTmFtZSwgZmFsc2UpO1xuICAgICAgICB0aGlzLmluaXRDcml0ZXJpYShtb2R1bGUpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvYWQgLyByZWxvYWQgcmVjb3JkcyB1c2luZyBjdXJyZW50IHBhZ2luYXRpb24gYW5kIGNyaXRlcmlhXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHVzZUNhY2hlIGlmIHRvIHVzZSBjYWNoZVxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IE9ic2VydmFibGU8UmVjb3JkTGlzdD5cbiAgICAgKi9cbiAgICBsb2FkKHVzZUNhY2hlID0gdHJ1ZSk6IE9ic2VydmFibGU8U2F2ZWRGaWx0ZXJMaXN0PiB7XG4gICAgICAgIHJldHVybiBzdXBlci5sb2FkKHVzZUNhY2hlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgY3VycmVudCBsaXN0IG9mIHNhdmVkIGZpbHRlcnNcbiAgICAgKi9cbiAgICBnZXRGaWx0ZXJzKCk6IFNhdmVkRmlsdGVyW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWNvcmRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBuZXcgZmlsdGVyIHRvIGxpc3RcbiAgICAgKiBAcGFyYW0gZmlsdGVyXG4gICAgICovXG4gICAgYWRkRmlsdGVyKGZpbHRlcjogU2F2ZWRGaWx0ZXIpOiB2b2lkIHtcblxuICAgICAgICBsZXQgaXNOZXcgPSB0cnVlO1xuICAgICAgICBjb25zdCBmaWx0ZXJzID0gdGhpcy5yZWNvcmRzO1xuXG4gICAgICAgIGNvbnN0IG5ld0xpc3QgPSBbXTtcblxuICAgICAgICBmaWx0ZXJzLmZvckVhY2gocmVjb3JkID0+IHtcbiAgICAgICAgICAgIGlmIChyZWNvcmQuaWQgPT09IGZpbHRlci5pZCkge1xuICAgICAgICAgICAgICAgIG5ld0xpc3QucHVzaChmaWx0ZXIpO1xuICAgICAgICAgICAgICAgIGlzTmV3ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuZXdMaXN0LnB1c2gocmVjb3JkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGlzTmV3KSB7XG4gICAgICAgICAgICBuZXdMaXN0LnB1c2goZmlsdGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgICAgICAgLi4udGhpcy5pbnRlcm5hbFN0YXRlLFxuICAgICAgICAgICAgcmVjb3JkczogbmV3TGlzdCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGV4aXN0aW5nIGZpbHRlclxuICAgICAqIEBwYXJhbSBmaWx0ZXJcbiAgICAgKi9cbiAgICByZW1vdmVGaWx0ZXIoZmlsdGVyOiBTYXZlZEZpbHRlcik6IHZvaWQge1xuXG5cbiAgICAgICAgaWYgKCFmaWx0ZXIgfHwgIWZpbHRlci5pZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmlsdGVycyA9IHRoaXMucmVjb3JkcztcblxuICAgICAgICBjb25zdCBuZXdMaXN0ID0gW107XG5cbiAgICAgICAgZmlsdGVycy5mb3JFYWNoKHJlY29yZCA9PiB7XG4gICAgICAgICAgICBpZiAocmVjb3JkLmlkID09PSBmaWx0ZXIuaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5ld0xpc3QucHVzaChyZWNvcmQpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgIC4uLnRoaXMuaW50ZXJuYWxTdGF0ZSxcbiAgICAgICAgICAgIHJlY29yZHM6IG5ld0xpc3QsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgY3JpdGVyaWFcbiAgICAgKiBAcGFyYW0gbW9kdWxlXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGluaXRDcml0ZXJpYShtb2R1bGU6IHN0cmluZyk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IGNyaXRlcmlhID0gdGhpcy5jcml0ZXJpYTtcbiAgICAgICAgY3JpdGVyaWEuZmlsdGVyc1t0aGlzLmZpbHRlckZpZWxkcy5tb2R1bGVdID0ge1xuICAgICAgICAgICAgZmllbGQ6IHRoaXMuZmlsdGVyRmllbGRzLm1vZHVsZSxcbiAgICAgICAgICAgIG9wZXJhdG9yOiAnPScsXG4gICAgICAgICAgICB2YWx1ZXM6IFt0aGlzLm1vZHVsZU5hbWVNYXBwZXIudG9MZWdhY3kobW9kdWxlKV1cbiAgICAgICAgfTtcblxuICAgICAgICBjcml0ZXJpYS5maWx0ZXJzW3RoaXMuZmlsdGVyRmllbGRzLnVzZXJdID0ge1xuICAgICAgICAgICAgZmllbGQ6IHRoaXMuZmlsdGVyRmllbGRzLnVzZXIsXG4gICAgICAgICAgICBvcGVyYXRvcjogJz0nLFxuICAgICAgICAgICAgdmFsdWVzOiBbdGhpcy5hdXRoLmdldEN1cnJlbnRVc2VyKCkuaWRdXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy51cGRhdGVTZWFyY2hDcml0ZXJpYShjcml0ZXJpYSwgZmFsc2UpO1xuICAgIH1cblxufVxuIl19