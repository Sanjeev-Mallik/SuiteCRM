/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2023 SalesAgility Ltd.
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
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { LanguageStore } from '../../store/language/language.store';
import { SystemConfigStore } from '../../store/system-config/system-config.store';
import { MessageService } from "../../services/message/message.service";
import { NotificationsService } from '../../store/notification/notifications.service';
import { NotificationStore } from '../../store/notification/notification.store';
import * as i0 from "@angular/core";
import * as i1 from "../../store/language/language.store";
import * as i2 from "../../store/system-config/system-config.store";
import * as i3 from "../../services/message/message.service";
import * as i4 from "../../store/notification/notifications.service";
import * as i5 from "../../store/notification/notification.store";
import * as i6 from "@angular/common";
import * as i7 from "../../components/label/label.component";
import * as i8 from "../record-thread/components/record-thread/record-thread.component";
function NotificationsComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵelement(2, "scrm-label", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
function NotificationsComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-record-thread", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("config", ctx_r0.recordThreadConfig);
} }
export class NotificationsComponent {
    constructor(language, systemConfig, message, notificationService, notificationStore) {
        this.language = language;
        this.systemConfig = systemConfig;
        this.message = message;
        this.notificationService = notificationService;
        this.notificationStore = notificationStore;
    }
    ngOnInit() {
        this.options = this.notificationService.getOptions();
        this.recordThreadConfig = this.getConfig();
    }
    getConfig() {
        const config = {
            filters$: of({
                orderBy: this?.options?.filters?.orderBy ?? 'date_entered',
                sortOrder: this?.options?.filters?.sortOrder ?? 'asc',
                preset: { type: 'alerts' }
            }),
            module: this.options.module,
            klass: this.options.class ?? '',
            maxListHeight: this.options.maxListHeight ?? 350,
            direction: this.options.direction || 'asc',
            autoRefreshFrequency: this.options.autoRefreshFrequency || 0,
            autoRefreshDeviationMin: this.options.autoRefreshDeviationMin ?? 0,
            autoRefreshDeviationMax: this.options.autoRefreshDeviationMax ?? 0,
            onRefresh: () => {
                this.notificationService.onRefresh(this.store, this.notificationStore);
            },
            onLoadMore: () => {
                this.notificationService.onLoadMore(this.notificationStore);
            },
            loadMorePosition: this.options?.loadMorePosition ?? '',
            create: false,
            listActionsClass: this.options?.listActionsClass ?? '',
            listActionsButtonClass: this.options?.listActionsButtonClass ?? '',
            listActionsButtonGroupClass: this.options?.listActionsButtonGroupClass ?? '',
            pageSize: this.options?.pageSize ?? '',
            showNoDataMessage: this.options?.showNoDataMessage,
            noDataLabel: this.options?.noDataLabel,
        };
        this.notificationService.setupListActions(config, this.options);
        this.notificationService.setupItemConfig(config, this.options);
        config.store = this.notificationStore.getNotificationStore();
        this.store = this.notificationStore.getNotificationStore();
        return config;
    }
    static { this.ɵfac = function NotificationsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || NotificationsComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore), i0.ɵɵdirectiveInject(i2.SystemConfigStore), i0.ɵɵdirectiveInject(i3.MessageService), i0.ɵɵdirectiveInject(i4.NotificationsService), i0.ɵɵdirectiveInject(i5.NotificationStore)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NotificationsComponent, selectors: [["scrm-notifications"]], decls: 3, vars: 2, consts: [["widget-body", "", 1, "notifications"], [4, "ngIf"], [1, "p-3", "widget-message"], ["labelKey", "LBL_BAD_CONFIG"], [3, "config"]], template: function NotificationsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, NotificationsComponent_ng_container_1_Template, 3, 0, "ng-container", 1)(2, NotificationsComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.options);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.options);
        } }, dependencies: [i6.NgIf, i7.LabelComponent, i8.RecordThreadComponent], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NotificationsComponent, [{
        type: Component,
        args: [{ selector: 'scrm-notifications', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2023 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n\n<div class=\"notifications\" widget-body>\n\n    <ng-container *ngIf=\"!options\">\n        <div class=\"p-3 widget-message\">\n            <scrm-label labelKey=\"LBL_BAD_CONFIG\"></scrm-label>\n        </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"options\">\n        <scrm-record-thread [config]=\"recordThreadConfig\"></scrm-record-thread>\n    </ng-container>\n\n</div>\n" }]
    }], () => [{ type: i1.LanguageStore }, { type: i2.SystemConfigStore }, { type: i3.MessageService }, { type: i4.NotificationsService }, { type: i5.NotificationStore }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(NotificationsComponent, { className: "NotificationsComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbnRhaW5lcnMvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBR2hELE9BQU8sRUFBQyxFQUFFLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDeEIsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBRWxFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBRWhGLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx3Q0FBd0MsQ0FBQztBQUN0RSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxnREFBZ0QsQ0FBQztBQUNwRixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQzs7Ozs7Ozs7Ozs7SUNOMUUsNkJBQStCO0lBQzNCLDhCQUFnQztJQUM1QixnQ0FBbUQ7SUFDdkQsaUJBQU07Ozs7SUFHViw2QkFBOEI7SUFDMUIsd0NBQXVFOzs7O0lBQW5ELGNBQTZCO0lBQTdCLGtEQUE2Qjs7QURNekQsTUFBTSxPQUFPLHNCQUFzQjtJQU0vQixZQUNjLFFBQXVCLEVBQ3ZCLFlBQStCLEVBQy9CLE9BQXVCLEVBQ3ZCLG1CQUF5QyxFQUN6QyxpQkFBb0M7UUFKcEMsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQUN2QixpQkFBWSxHQUFaLFlBQVksQ0FBbUI7UUFDL0IsWUFBTyxH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WUFJbEMsaUJBQU07O1lBVmEsY0FBYztZQUFkLG1DQUFjO1lBTWQsY0FBYTtZQUFiLGtDQUFhOzs7aUZET25CLHNCQUFzQjtjQUxsQyxTQUFTOzJCQUNJLG9CQUFvQjs7a0ZBSXJCLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIzIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1NlYXJjaENyaXRlcmlhfSBmcm9tICcuLi8uLi9jb21tb24vdmlld3MvbGlzdC9zZWFyY2gtY3JpdGVyaWEubW9kZWwnO1xuaW1wb3J0IHtkZWVwQ2xvbmV9IGZyb20gJy4uLy4uL2NvbW1vbi91dGlscy9vYmplY3QtdXRpbHMnO1xuaW1wb3J0IHtvZn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7UmVjb3JkVGhyZWFkQ29uZmlnfSBmcm9tICcuLi9yZWNvcmQtdGhyZWFkL2NvbXBvbmVudHMvcmVjb3JkLXRocmVhZC9yZWNvcmQtdGhyZWFkLm1vZGVsJztcbmltcG9ydCB7U3lzdGVtQ29uZmlnU3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL3N5c3RlbS1jb25maWcvc3lzdGVtLWNvbmZpZy5zdG9yZSc7XG5pbXBvcnQge1JlY29yZFRocmVhZFN0b3JlfSBmcm9tIFwiLi4vcmVjb3JkLXRocmVhZC9zdG9yZS9yZWNvcmQtdGhyZWFkL3JlY29yZC10aHJlYWQuc3RvcmVcIjtcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9tZXNzYWdlL21lc3NhZ2Uuc2VydmljZVwiO1xuaW1wb3J0IHtOb3RpZmljYXRpb25zU2VydmljZX0gZnJvbSAnLi4vLi4vc3RvcmUvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbnMuc2VydmljZSc7XG5pbXBvcnQge05vdGlmaWNhdGlvblN0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLnN0b3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLW5vdGlmaWNhdGlvbnMnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9ub3RpZmljYXRpb25zLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcmVjb3JkVGhyZWFkQ29uZmlnOiBSZWNvcmRUaHJlYWRDb25maWc7XG4gICAgc3RvcmU6IFJlY29yZFRocmVhZFN0b3JlO1xuICAgIG9wdGlvbnM6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBzeXN0ZW1Db25maWc6IFN5c3RlbUNvbmZpZ1N0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbWVzc2FnZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25zU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIG5vdGlmaWNhdGlvblN0b3JlOiBOb3RpZmljYXRpb25TdG9yZVxuICAgICkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2UuZ2V0T3B0aW9ucygpO1xuICAgICAgICB0aGlzLnJlY29yZFRocmVhZENvbmZpZyA9IHRoaXMuZ2V0Q29uZmlnKCk7XG4gICAgfVxuXG4gICAgZ2V0Q29uZmlnKCk6IFJlY29yZFRocmVhZENvbmZpZyB7XG5cbiAgICAgICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgICAgICAgZmlsdGVycyQ6IG9mKHtcbiAgICAgICAgICAgICAgICBvcmRlckJ5OiB0aGlzPy5vcHRpb25zPy5maWx0ZXJzPy5vcmRlckJ5ID8/ICdkYXRlX2VudGVyZWQnLFxuICAgICAgICAgICAgICAgIHNvcnRPcmRlcjogdGhpcz8ub3B0aW9ucz8uZmlsdGVycz8uc29ydE9yZGVyID8/ICdhc2MnLFxuICAgICAgICAgICAgICAgIHByZXNldDoge3R5cGU6ICdhbGVydHMnfVxuICAgICAgICAgICAgfSBhcyBTZWFyY2hDcml0ZXJpYSksXG4gICAgICAgICAgICBtb2R1bGU6IHRoaXMub3B0aW9ucy5tb2R1bGUsXG4gICAgICAgICAgICBrbGFzczogdGhpcy5vcHRpb25zLmNsYXNzID8/ICcnLFxuICAgICAgICAgICAgbWF4TGlzdEhlaWdodDogdGhpcy5vcHRpb25zLm1heExpc3RIZWlnaHQgPz8gMzUwLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiB0aGlzLm9wdGlvbnMuZGlyZWN0aW9uIHx8ICdhc2MnLFxuICAgICAgICAgICAgYXV0b1JlZnJlc2hGcmVxdWVuY3k6IHRoaXMub3B0aW9ucy5hdXRvUmVmcmVzaEZyZXF1ZW5jeSB8fCAwLFxuICAgICAgICAgICAgYXV0b1JlZnJlc2hEZXZpYXRpb25NaW46IHRoaXMub3B0aW9ucy5hdXRvUmVmcmVzaERldmlhdGlvbk1pbiA/PyAwLFxuICAgICAgICAgICAgYXV0b1JlZnJlc2hEZXZpYXRpb25NYXg6IHRoaXMub3B0aW9ucy5hdXRvUmVmcmVzaERldmlhdGlvbk1heCA/PyAwLFxuICAgICAgICAgICAgb25SZWZyZXNoOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLm9uUmVmcmVzaCh0aGlzLnN0b3JlLCB0aGlzLm5vdGlmaWNhdGlvblN0b3JlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkxvYWRNb3JlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLm9uTG9hZE1vcmUodGhpcy5ub3RpZmljYXRpb25TdG9yZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbG9hZE1vcmVQb3NpdGlvbjogdGhpcy5vcHRpb25zPy5sb2FkTW9yZVBvc2l0aW9uID8/ICcnLFxuICAgICAgICAgICAgY3JlYXRlOiBmYWxzZSxcbiAgICAgICAgICAgIGxpc3RBY3Rpb25zQ2xhc3M6IHRoaXMub3B0aW9ucz8ubGlzdEFjdGlvbnNDbGFzcyA/PyAnJyxcbiAgICAgICAgICAgIGxpc3RBY3Rpb25zQnV0dG9uQ2xhc3M6IHRoaXMub3B0aW9ucz8ubGlzdEFjdGlvbnNCdXR0b25DbGFzcyA/PyAnJyxcbiAgICAgICAgICAgIGxpc3RBY3Rpb25zQnV0dG9uR3JvdXBDbGFzczogdGhpcy5vcHRpb25zPy5saXN0QWN0aW9uc0J1dHRvbkdyb3VwQ2xhc3MgPz8gJycsXG4gICAgICAgICAgICBwYWdlU2l6ZTogdGhpcy5vcHRpb25zPy5wYWdlU2l6ZSA/PyAnJyxcbiAgICAgICAgICAgIHNob3dOb0RhdGFNZXNzYWdlOiB0aGlzLm9wdGlvbnM/LnNob3dOb0RhdGFNZXNzYWdlLFxuICAgICAgICAgICAgbm9EYXRhTGFiZWw6IHRoaXMub3B0aW9ucz8ubm9EYXRhTGFiZWwsXG4gICAgICAgIH0gYXMgUmVjb3JkVGhyZWFkQ29uZmlnO1xuXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5zZXR1cExpc3RBY3Rpb25zKGNvbmZpZywgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLnNldHVwSXRlbUNvbmZpZyhjb25maWcsIHRoaXMub3B0aW9ucyk7XG5cbiAgICAgICAgY29uZmlnLnN0b3JlID0gdGhpcy5ub3RpZmljYXRpb25TdG9yZS5nZXROb3RpZmljYXRpb25TdG9yZSgpO1xuICAgICAgICB0aGlzLnN0b3JlID0gdGhpcy5ub3RpZmljYXRpb25TdG9yZS5nZXROb3RpZmljYXRpb25TdG9yZSgpO1xuICAgICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjMgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cblxuPGRpdiBjbGFzcz1cIm5vdGlmaWNhdGlvbnNcIiB3aWRnZXQtYm9keT5cblxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhb3B0aW9uc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicC0zIHdpZGdldC1tZXNzYWdlXCI+XG4gICAgICAgICAgICA8c2NybS1sYWJlbCBsYWJlbEtleT1cIkxCTF9CQURfQ09ORklHXCI+PC9zY3JtLWxhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJvcHRpb25zXCI+XG4gICAgICAgIDxzY3JtLXJlY29yZC10aHJlYWQgW2NvbmZpZ109XCJyZWNvcmRUaHJlYWRDb25maWdcIj48L3Njcm0tcmVjb3JkLXRocmVhZD5cbiAgICA8L25nLWNvbnRhaW5lcj5cblxuPC9kaXY+XG4iXX0=