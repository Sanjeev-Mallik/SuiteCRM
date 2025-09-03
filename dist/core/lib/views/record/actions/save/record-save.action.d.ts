import { ViewMode } from '../../../../common/views/view.model';
import { RecordActionData, RecordActionHandler } from '../record.action';
import { MessageService } from '../../../../services/message/message.service';
import { ModuleNavigation } from '../../../../services/navigation/module-navigation/module-navigation.service';
import { NotificationStore } from '../../../../store/notification/notification.store';
import { RecentlyViewedService } from "../../../../services/navigation/recently-viewed/recently-viewed.service";
import { Router } from "@angular/router";
import { RecordPaginationService } from "../../store/record-pagination/record-pagination.service";
import * as i0 from "@angular/core";
export declare class RecordSaveAction extends RecordActionHandler {
    protected router: Router;
    protected message: MessageService;
    protected navigation: ModuleNavigation;
    protected notificationStore: NotificationStore;
    protected recentlyViewedService: RecentlyViewedService;
    protected recordPaginationService: RecordPaginationService;
    key: string;
    modes: ViewMode[];
    constructor(router: Router, message: MessageService, navigation: ModuleNavigation, notificationStore: NotificationStore, recentlyViewedService: RecentlyViewedService, recordPaginationService: RecordPaginationService);
    run(data: RecordActionData): void;
    shouldDisplay(data: RecordActionData): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecordSaveAction, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RecordSaveAction>;
}
