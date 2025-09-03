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
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { RecordActionHandler } from '../record.action';
import { MessageService } from '../../../../services/message/message.service';
import { ModuleNavigation } from '../../../../services/navigation/module-navigation/module-navigation.service';
import { NotificationStore } from '../../../../store/notification/notification.store';
import { RecentlyViewedService } from "../../../../services/navigation/recently-viewed/recently-viewed.service";
import { RecordPaginationService } from "../../store/record-pagination/record-pagination.service";
import { SystemConfigStore } from "../../../../store/system-config/system-config.store";
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/message/message.service";
import * as i2 from "../../../../services/navigation/module-navigation/module-navigation.service";
import * as i3 from "../../../../store/notification/notification.store";
import * as i4 from "../../../../store/system-config/system-config.store";
import * as i5 from "../../../../services/navigation/recently-viewed/recently-viewed.service";
import * as i6 from "../../store/record-pagination/record-pagination.service";
export class RecordSaveContinueAction extends RecordActionHandler {
    constructor(message, navigation, notificationStore, systemConfigStore, recentlyViewedService, recordPaginationService) {
        super();
        this.message = message;
        this.navigation = navigation;
        this.notificationStore = notificationStore;
        this.systemConfigStore = systemConfigStore;
        this.recentlyViewedService = recentlyViewedService;
        this.recordPaginationService = recordPaginationService;
        this.key = 'saveContinue';
        this.modes = ['edit'];
    }
    run(data) {
        const isFieldLoading = Object.keys(data.store.recordStore.getStaging().fields).some(fieldKey => {
            const field = data.store.recordStore.getStaging().fields[fieldKey];
            return field?.loading() ?? false;
        });
        if (isFieldLoading) {
            this.message.addWarningMessageByKey('LBL_LOADING_IN_PROGRESS');
            return;
        }
        data.store.recordStore.validate().pipe(take(1)).subscribe(valid => {
            if (valid) {
                data.store.saveOnEdit().pipe(take(1)).subscribe(record => {
                    const moduleName = data.store.getModuleName();
                    const id = record.id;
                    this.notificationStore.conditionalNotificationRefresh('edit');
                    const recentlyViewed = this.recentlyViewedService.buildRecentlyViewed(moduleName, id);
                    this.recentlyViewedService.addRecentlyViewed(moduleName, recentlyViewed);
                });
                this.recordPaginationService.triggerNextRecord(true);
                return;
            }
            this.message.addWarningMessageByKey('LBL_VALIDATION_ERRORS');
        });
    }
    shouldDisplay(data) {
        const isEnabled = this.systemConfigStore.getConfigValue('enable_record_pagination');
        if (!isEnabled) {
            return false;
        }
        const totalRecords = this.recordPaginationService.getTotalRecords();
        const offset = this.recordPaginationService.getOffsetFromUrl();
        if (!totalRecords || !offset ||
            (offset >= totalRecords) ||
            (offset <= 0)) {
            return false;
        }
        return this.recordPaginationService.checkRecordValid(data.store.getRecordId());
    }
    static { this.ɵfac = function RecordSaveContinueAction_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RecordSaveContinueAction)(i0.ɵɵinject(i1.MessageService), i0.ɵɵinject(i2.ModuleNavigation), i0.ɵɵinject(i3.NotificationStore), i0.ɵɵinject(i4.SystemConfigStore), i0.ɵɵinject(i5.RecentlyViewedService), i0.ɵɵinject(i6.RecordPaginationService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordSaveContinueAction, factory: RecordSaveContinueAction.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordSaveContinueAction, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.MessageService }, { type: i2.ModuleNavigation }, { type: i3.NotificationStore }, { type: i4.SystemConfigStore }, { type: i5.RecentlyViewedService }, { type: i6.RecordPaginationService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLXNhdmUtY29udGludWUuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3ZpZXdzL3JlY29yZC9hY3Rpb25zL3NhdmUtY29udGludWUvcmVjb3JkLXNhdmUtY29udGludWUuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwQyxPQUFPLEVBQW1CLG1CQUFtQixFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDdkUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDhDQUE4QyxDQUFDO0FBQzVFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDZFQUE2RSxDQUFDO0FBQzdHLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLG1EQUFtRCxDQUFDO0FBQ3BGLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHlFQUF5RSxDQUFDO0FBQzlHLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLHlEQUF5RCxDQUFDO0FBQ2hHLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHFEQUFxRCxDQUFDOzs7Ozs7OztBQU10RixNQUFNLE9BQU8sd0JBQXlCLFNBQVEsbUJBQW1CO0lBSzdELFlBQ2MsT0FBdUIsRUFDdkIsVUFBNEIsRUFDNUIsaUJBQW9DLEVBQ3BDLGlCQUFvQyxFQUNwQyxxQkFBNEMsRUFDNUMsdUJBQWdEO1FBRTFELEtBQUssRUFBRSxDQUFDO1FBUEUsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsZUFBVSxHQUFWLFVBQVUsQ0FBa0I7UUFDNUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxzQkFBaUIsR0FBakIsaUJB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QkFBd0I7dUVBQXhCLHdCQUF3QixXQUF4Qix3QkFBd0IsbUJBRnJCLE1BQU07O2lGQUVULHdCQUF3QjtjQUhwQyxVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyNCBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge3Rha2V9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7UmVjb3JkQWN0aW9uRGF0YSwgUmVjb3JkQWN0aW9uSGFuZGxlcn0gZnJvbSAnLi4vcmVjb3JkLmFjdGlvbic7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9tZXNzYWdlL21lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQge01vZHVsZU5hdmlnYXRpb259IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL25hdmlnYXRpb24vbW9kdWxlLW5hdmlnYXRpb24vbW9kdWxlLW5hdmlnYXRpb24uc2VydmljZSc7XG5pbXBvcnQge05vdGlmaWNhdGlvblN0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLnN0b3JlJztcbmltcG9ydCB7UmVjZW50bHlWaWV3ZWRTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZXMvbmF2aWdhdGlvbi9yZWNlbnRseS12aWV3ZWQvcmVjZW50bHktdmlld2VkLnNlcnZpY2VcIjtcbmltcG9ydCB7UmVjb3JkUGFnaW5hdGlvblNlcnZpY2V9IGZyb20gXCIuLi8uLi9zdG9yZS9yZWNvcmQtcGFnaW5hdGlvbi9yZWNvcmQtcGFnaW5hdGlvbi5zZXJ2aWNlXCI7XG5pbXBvcnQge1N5c3RlbUNvbmZpZ1N0b3JlfSBmcm9tIFwiLi4vLi4vLi4vLi4vc3RvcmUvc3lzdGVtLWNvbmZpZy9zeXN0ZW0tY29uZmlnLnN0b3JlXCI7XG5pbXBvcnQge1ZpZXdNb2RlfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3ZpZXdzL3ZpZXcubW9kZWxcIjtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBSZWNvcmRTYXZlQ29udGludWVBY3Rpb24gZXh0ZW5kcyBSZWNvcmRBY3Rpb25IYW5kbGVyIHtcblxuICAgIGtleSA9ICdzYXZlQ29udGludWUnO1xuICAgIG1vZGVzID0gWydlZGl0JyBhcyBWaWV3TW9kZV07XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIG1lc3NhZ2U6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgbmF2aWdhdGlvbjogTW9kdWxlTmF2aWdhdGlvbixcbiAgICAgICAgcHJvdGVjdGVkIG5vdGlmaWNhdGlvblN0b3JlOiBOb3RpZmljYXRpb25TdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIHN5c3RlbUNvbmZpZ1N0b3JlOiBTeXN0ZW1Db25maWdTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIHJlY2VudGx5Vmlld2VkU2VydmljZTogUmVjZW50bHlWaWV3ZWRTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgcmVjb3JkUGFnaW5hdGlvblNlcnZpY2U6IFJlY29yZFBhZ2luYXRpb25TZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgcnVuKGRhdGE6IFJlY29yZEFjdGlvbkRhdGEpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaXNGaWVsZExvYWRpbmcgPSBPYmplY3Qua2V5cyhkYXRhLnN0b3JlLnJlY29yZFN0b3JlLmdldFN0YWdpbmcoKS5maWVsZHMpLnNvbWUoZmllbGRLZXkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmllbGQgPSBkYXRhLnN0b3JlLnJlY29yZFN0b3JlLmdldFN0YWdpbmcoKS5maWVsZHNbZmllbGRLZXldO1xuICAgICAgICAgICAgcmV0dXJuIGZpZWxkPy5sb2FkaW5nKCkgPz8gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmKGlzRmllbGRMb2FkaW5nKSB7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UuYWRkV2FybmluZ01lc3NhZ2VCeUtleSgnTEJMX0xPQURJTkdfSU5fUFJPR1JFU1MnKTtcbiAgICAgICAgICAgIHJldHVybiA7XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhLnN0b3JlLnJlY29yZFN0b3JlLnZhbGlkYXRlKCkucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUodmFsaWQgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbGlkKSB7XG4gICAgICAgICAgICAgICAgZGF0YS5zdG9yZS5zYXZlT25FZGl0KCkucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUocmVjb3JkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kdWxlTmFtZSA9IGRhdGEuc3RvcmUuZ2V0TW9kdWxlTmFtZSgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpZCA9IHJlY29yZC5pZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25TdG9yZS5jb25kaXRpb25hbE5vdGlmaWNhdGlvblJlZnJlc2goJ2VkaXQnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVjZW50bHlWaWV3ZWQgPSB0aGlzLnJlY2VudGx5Vmlld2VkU2VydmljZS5idWlsZFJlY2VudGx5Vmlld2VkKG1vZHVsZU5hbWUsIGlkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWNlbnRseVZpZXdlZFNlcnZpY2UuYWRkUmVjZW50bHlWaWV3ZWQobW9kdWxlTmFtZSwgcmVjZW50bHlWaWV3ZWQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMucmVjb3JkUGFnaW5hdGlvblNlcnZpY2UudHJpZ2dlck5leHRSZWNvcmQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UuYWRkV2FybmluZ01lc3NhZ2VCeUtleSgnTEJMX1ZBTElEQVRJT05fRVJST1JTJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNob3VsZERpc3BsYXkoZGF0YTogUmVjb3JkQWN0aW9uRGF0YSk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBpc0VuYWJsZWQgPSB0aGlzLnN5c3RlbUNvbmZpZ1N0b3JlLmdldENvbmZpZ1ZhbHVlKCdlbmFibGVfcmVjb3JkX3BhZ2luYXRpb24nKTtcbiAgICAgICAgaWYgKCFpc0VuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRvdGFsUmVjb3JkcyA9IHRoaXMucmVjb3JkUGFnaW5hdGlvblNlcnZpY2UuZ2V0VG90YWxSZWNvcmRzKCk7XG4gICAgICAgIGNvbnN0IG9mZnNldCA9IHRoaXMucmVjb3JkUGFnaW5hdGlvblNlcnZpY2UuZ2V0T2Zmc2V0RnJvbVVybCgpO1xuICAgICAgICBpZiAoIXRvdGFsUmVjb3JkcyB8fCAhb2Zmc2V0IHx8XG4gICAgICAgICAgICAob2Zmc2V0ID49IHRvdGFsUmVjb3JkcykgfHxcbiAgICAgICAgICAgIChvZmZzZXQgPD0gMCkgKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5yZWNvcmRQYWdpbmF0aW9uU2VydmljZS5jaGVja1JlY29yZFZhbGlkKGRhdGEuc3RvcmUuZ2V0UmVjb3JkSWQoKSk7XG4gICAgfVxufVxuIl19