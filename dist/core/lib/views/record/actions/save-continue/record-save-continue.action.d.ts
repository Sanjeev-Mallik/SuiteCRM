import { RecordActionData, RecordActionHandler } from '../record.action';
import { MessageService } from '../../../../services/message/message.service';
import { ModuleNavigation } from '../../../../services/navigation/module-navigation/module-navigation.service';
import { NotificationStore } from '../../../../store/notification/notification.store';
import { RecentlyViewedService } from "../../../../services/navigation/recently-viewed/recently-viewed.service";
import { RecordPaginationService } from "../../store/record-pagination/record-pagination.service";
import { SystemConfigStore } from "../../../../store/system-config/system-config.store";
import { ViewMode } from "../../../../common/views/view.model";
import * as i0 from "@angular/core";
export declare class RecordSaveContinueAction extends RecordActionHandler {
    protected message: MessageService;
    protected navigation: ModuleNavigation;
    protected notificationStore: NotificationStore;
    protected systemConfigStore: SystemConfigStore;
    protected recentlyViewedService: RecentlyViewedService;
    protected recordPaginationService: RecordPaginationService;
    key: string;
    modes: ViewMode[];
    constructor(message: MessageService, navigation: ModuleNavigation, notificationStore: NotificationStore, systemConfigStore: SystemConfigStore, recentlyViewedService: RecentlyViewedService, recordPaginationService: RecordPaginationService);
    run(data: RecordActionData): void;
    shouldDisplay(data: RecordActionData): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecordSaveContinueAction, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RecordSaveContinueAction>;
}
