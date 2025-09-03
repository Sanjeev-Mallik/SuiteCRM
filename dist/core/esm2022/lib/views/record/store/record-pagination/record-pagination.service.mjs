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
import { Injectable } from "@angular/core";
import { AppStateStore } from "../../../../store/app-state/app-state.store";
import { UserPreferenceStore } from "../../../../store/user-preference/user-preference.store";
import { LocalStorageService } from "../../../../services/local-storage/local-storage.service";
import { BehaviorSubject } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { toNumber } from "lodash-es";
import { PaginationType } from "../../../../common/views/list/list-navigation.model";
import { emptyObject } from "../../../../common/utils/object-utils";
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/local-storage/local-storage.service";
import * as i2 from "../../../../store/user-preference/user-preference.store";
import * as i3 from "../../../../store/app-state/app-state.store";
import * as i4 from "@angular/router";
export class RecordPaginationService {
    constructor(localStorageService, preferences, appStateStore, route) {
        this.localStorageService = localStorageService;
        this.preferences = preferences;
        this.appStateStore = appStateStore;
        this.route = route;
        this.nextRecordSubject = new BehaviorSubject(false);
        this.nextRecord$ = this.nextRecordSubject.asObservable();
        this.paginationType = PaginationType.PAGINATION;
        this.subs = [];
    }
    triggerNextRecord(value) {
        this.nextRecordSubject.next(value);
    }
    updateRecordListLocalStorage(records, pagination) {
        const module = this.getModule();
        const recordPaginationObj = {
            pagination: pagination,
            recordIds: this.mapRecordIds(records)
        };
        this.updatePaginationLocalStorage(pagination);
        this.savePreference(module, 'current-record-pagination', recordPaginationObj);
    }
    updatePaginationLocalStorage(pagination) {
        const module = this.getModule();
        const key = module + '-' + 'listview-current-pagination';
        this.localStorageService.set(key, pagination);
    }
    savePreference(module, storageKey, value) {
        this.preferences.setUi(module, this.getPreferenceKey(storageKey), value);
    }
    getPreferenceKey(storageKey) {
        return 'recordview-' + storageKey;
    }
    mapRecordIds(records) {
        return records.map(record => ({ id: record.id }));
    }
    getModule() {
        return this.appStateStore.getModule();
    }
    getTotalRecords() {
        const key = this.getModule() + '-' + 'listview-current-pagination';
        const currentPagination = this.localStorageService.get(key);
        return currentPagination?.total;
    }
    checkRecordValid(recordId) {
        const paginationObj = this.getRecordPaginationObj(this.getModule());
        const pagination = paginationObj?.pagination;
        const recordIds = paginationObj?.recordIds;
        if (!pagination) {
            return false;
        }
        const pageSize = this.getPageSize();
        const offset = this.getOffsetFromUrl();
        if (this.paginationType === PaginationType.LOAD_MORE && (offset > pageSize)) {
            return false;
        }
        let index = (offset - 1) % pageSize;
        if (this.paginationType === PaginationType.LOAD_MORE) {
            index = offset - 1;
        }
        if (index >= 0 && index < recordIds.length) {
            return recordIds[index]?.id === recordId;
        }
        return false;
    }
    getPageSize() {
        const paginationObj = this.getRecordPaginationObj(this.getModule());
        return paginationObj?.pagination?.pageSize;
    }
    getOffsetFromUrl() {
        const queryParams = this.route.snapshot.queryParamMap;
        return toNumber(queryParams.get('offset'));
    }
    getRecordPaginationObj(module) {
        const key = module + '-' + 'recordview-current-record-pagination';
        const data = this.localStorageService.get(key)[module];
        if (!data || emptyObject(data)) {
            return;
        }
        return data;
    }
    static { this.ɵfac = function RecordPaginationService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RecordPaginationService)(i0.ɵɵinject(i1.LocalStorageService), i0.ɵɵinject(i2.UserPreferenceStore), i0.ɵɵinject(i3.AppStateStore), i0.ɵɵinject(i4.ActivatedRoute)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordPaginationService, factory: RecordPaginationService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordPaginationService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.LocalStorageService }, { type: i2.UserPreferenceStore }, { type: i3.AppStateStore }, { type: i4.ActivatedRoute }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLXBhZ2luYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi92aWV3cy9yZWNvcmQvc3RvcmUvcmVjb3JkLXBhZ2luYXRpb24vcmVjb3JkLXBhZ2luYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDMUUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0seURBQXlELENBQUM7QUFDNUYsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sMERBQTBELENBQUM7QUFDN0YsT0FBTyxFQUFDLGVBQWUsRUFBZSxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUVuQyxPQUFPLEVBQWEsY0FBYyxFQUFDLE1BQU0scURBQXFELENBQUM7QUFHL0YsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHVDQUF1QyxDQUFDOzs7Ozs7QUFLbEUsTUFBTSxPQUFPLHVCQUF1QjtJQVFoQyxZQUNjLG1CQUF3QyxFQUN4QyxXQUFnQyxFQUNoQyxhQUE0QixFQUM1QixLQUFxQjtRQUhyQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLGdCQUFXLEdBQVgsV0FBVyxDQUFxQjtRQUNoQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQVYzQixzQkFBaUIsR0FBRyxJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUNoRSxnQkFBVyxHQUFHLElBQUks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QVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDI0IFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtBcHBTdGF0ZVN0b3JlfSBmcm9tIFwiLi4vLi4vLi4vLi4vc3RvcmUvYXBwLXN0YXRlL2FwcC1zdGF0ZS5zdG9yZVwiO1xuaW1wb3J0IHtVc2VyUHJlZmVyZW5jZVN0b3JlfSBmcm9tIFwiLi4vLi4vLi4vLi4vc3RvcmUvdXNlci1wcmVmZXJlbmNlL3VzZXItcHJlZmVyZW5jZS5zdG9yZVwiO1xuaW1wb3J0IHtMb2NhbFN0b3JhZ2VTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZXMvbG9jYWwtc3RvcmFnZS9sb2NhbC1zdG9yYWdlLnNlcnZpY2VcIjtcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBTdWJzY3JpcHRpb259IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge3RvTnVtYmVyfSBmcm9tIFwibG9kYXNoLWVzXCI7XG5pbXBvcnQge1JlY29yZFBhZ2luYXRpb25Nb2RlbH0gZnJvbSBcIi4vcmVjb3JkLXBhZ2luYXRpb24ubW9kZWxcIjtcbmltcG9ydCB7UGFnaW5hdGlvbiwgUGFnaW5hdGlvblR5cGV9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vdmlld3MvbGlzdC9saXN0LW5hdmlnYXRpb24ubW9kZWxcIjtcbmltcG9ydCB7T2JqZWN0TWFwfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3R5cGVzL29iamVjdC1tYXBcIjtcbmltcG9ydCB7UmVjb3JkfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3JlY29yZC9yZWNvcmQubW9kZWxcIjtcbmltcG9ydCB7ZW1wdHlPYmplY3R9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vdXRpbHMvb2JqZWN0LXV0aWxzXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUmVjb3JkUGFnaW5hdGlvblNlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSBuZXh0UmVjb3JkU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuICAgIG5leHRSZWNvcmQkID0gdGhpcy5uZXh0UmVjb3JkU3ViamVjdC5hc09ic2VydmFibGUoKTtcblxuICAgIHBhZ2luYXRpb25UeXBlOiBzdHJpbmcgPSBQYWdpbmF0aW9uVHlwZS5QQUdJTkFUSU9OO1xuICAgIHByb3RlY3RlZCBzdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBsb2NhbFN0b3JhZ2VTZXJ2aWNlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgcHJlZmVyZW5jZXM6IFVzZXJQcmVmZXJlbmNlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBhcHBTdGF0ZVN0b3JlOiBBcHBTdGF0ZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICkge1xuICAgIH1cblxuICAgIHB1YmxpYyB0cmlnZ2VyTmV4dFJlY29yZCh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLm5leHRSZWNvcmRTdWJqZWN0Lm5leHQodmFsdWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVSZWNvcmRMaXN0TG9jYWxTdG9yYWdlKHJlY29yZHM6IFJlY29yZFtdLCBwYWdpbmF0aW9uOiBQYWdpbmF0aW9uKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IHRoaXMuZ2V0TW9kdWxlKCk7XG4gICAgICAgIGNvbnN0IHJlY29yZFBhZ2luYXRpb25PYmo6IFJlY29yZFBhZ2luYXRpb25Nb2RlbCA9IHtcbiAgICAgICAgICAgIHBhZ2luYXRpb246IHBhZ2luYXRpb24sXG4gICAgICAgICAgICByZWNvcmRJZHM6IHRoaXMubWFwUmVjb3JkSWRzKHJlY29yZHMpXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudXBkYXRlUGFnaW5hdGlvbkxvY2FsU3RvcmFnZShwYWdpbmF0aW9uKTtcbiAgICAgICAgdGhpcy5zYXZlUHJlZmVyZW5jZShtb2R1bGUsICdjdXJyZW50LXJlY29yZC1wYWdpbmF0aW9uJywgcmVjb3JkUGFnaW5hdGlvbk9iaik7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZVBhZ2luYXRpb25Mb2NhbFN0b3JhZ2UocGFnaW5hdGlvbjogUGFnaW5hdGlvbik6IHZvaWQge1xuICAgICAgICBjb25zdCBtb2R1bGUgPSB0aGlzLmdldE1vZHVsZSgpO1xuICAgICAgICBjb25zdCBrZXkgPSBtb2R1bGUgKyAnLScgKyAnbGlzdHZpZXctY3VycmVudC1wYWdpbmF0aW9uJztcbiAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldChrZXksIHBhZ2luYXRpb24pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzYXZlUHJlZmVyZW5jZShtb2R1bGU6IHN0cmluZywgc3RvcmFnZUtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMucHJlZmVyZW5jZXMuc2V0VWkobW9kdWxlLCB0aGlzLmdldFByZWZlcmVuY2VLZXkoc3RvcmFnZUtleSksIHZhbHVlKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0UHJlZmVyZW5jZUtleShzdG9yYWdlS2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ3JlY29yZHZpZXctJyArIHN0b3JhZ2VLZXk7XG4gICAgfVxuXG4gICAgcHVibGljIG1hcFJlY29yZElkcyhyZWNvcmRzOiBSZWNvcmRbXSk6IE9iamVjdE1hcFtdIHtcbiAgICAgICAgcmV0dXJuIHJlY29yZHMubWFwKHJlY29yZCA9PiAoe2lkOiByZWNvcmQuaWR9KSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldE1vZHVsZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5hcHBTdGF0ZVN0b3JlLmdldE1vZHVsZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRUb3RhbFJlY29yZHMoKTogbnVtYmVyIHtcbiAgICAgICAgY29uc3Qga2V5ID0gdGhpcy5nZXRNb2R1bGUoKSArICctJyArICdsaXN0dmlldy1jdXJyZW50LXBhZ2luYXRpb24nO1xuICAgICAgICBjb25zdCBjdXJyZW50UGFnaW5hdGlvbiA9IHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5nZXQoa2V5KSBhcyBQYWdpbmF0aW9uO1xuICAgICAgICByZXR1cm4gY3VycmVudFBhZ2luYXRpb24/LnRvdGFsO1xuICAgIH1cblxuICAgIHB1YmxpYyBjaGVja1JlY29yZFZhbGlkKHJlY29yZElkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgcGFnaW5hdGlvbk9iajogUmVjb3JkUGFnaW5hdGlvbk1vZGVsID0gdGhpcy5nZXRSZWNvcmRQYWdpbmF0aW9uT2JqKHRoaXMuZ2V0TW9kdWxlKCkpO1xuICAgICAgICBjb25zdCBwYWdpbmF0aW9uOiBQYWdpbmF0aW9uID0gcGFnaW5hdGlvbk9iaj8ucGFnaW5hdGlvbjtcbiAgICAgICAgY29uc3QgcmVjb3JkSWRzOiBPYmplY3RNYXBbXSA9IHBhZ2luYXRpb25PYmo/LnJlY29yZElkcztcblxuICAgICAgICBpZiAoIXBhZ2luYXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhZ2VTaXplID0gdGhpcy5nZXRQYWdlU2l6ZSgpO1xuICAgICAgICBjb25zdCBvZmZzZXQgPSB0aGlzLmdldE9mZnNldEZyb21VcmwoKTtcblxuICAgICAgICBpZiAodGhpcy5wYWdpbmF0aW9uVHlwZSA9PT0gUGFnaW5hdGlvblR5cGUuTE9BRF9NT1JFICYmIChvZmZzZXQgPiBwYWdlU2l6ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpbmRleCA9IChvZmZzZXQgLSAxKSAlIHBhZ2VTaXplO1xuICAgICAgICBpZiAodGhpcy5wYWdpbmF0aW9uVHlwZSA9PT0gUGFnaW5hdGlvblR5cGUuTE9BRF9NT1JFKSB7XG4gICAgICAgICAgICBpbmRleCA9IG9mZnNldCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCByZWNvcmRJZHMubGVuZ3RoKSB7XG5cbiAgICAgICAgICAgIHJldHVybiByZWNvcmRJZHNbaW5kZXhdPy5pZCA9PT0gcmVjb3JkSWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFBhZ2VTaXplKCk6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IHBhZ2luYXRpb25PYmo6IFJlY29yZFBhZ2luYXRpb25Nb2RlbCA9IHRoaXMuZ2V0UmVjb3JkUGFnaW5hdGlvbk9iaih0aGlzLmdldE1vZHVsZSgpKTtcbiAgICAgICAgcmV0dXJuIHBhZ2luYXRpb25PYmo/LnBhZ2luYXRpb24/LnBhZ2VTaXplO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRPZmZzZXRGcm9tVXJsKCk6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtTWFwO1xuICAgICAgICByZXR1cm4gdG9OdW1iZXIocXVlcnlQYXJhbXMuZ2V0KCdvZmZzZXQnKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFJlY29yZFBhZ2luYXRpb25PYmoobW9kdWxlOiBzdHJpbmcpOiBSZWNvcmRQYWdpbmF0aW9uTW9kZWwge1xuICAgICAgICBjb25zdCBrZXkgPSBtb2R1bGUgKyAnLScgKyAncmVjb3Jkdmlldy1jdXJyZW50LXJlY29yZC1wYWdpbmF0aW9uJztcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5nZXQoa2V5KVttb2R1bGVdO1xuICAgICAgICBpZiAoIWRhdGEgfHwgZW1wdHlPYmplY3QoZGF0YSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG59XG4iXX0=