import { ViewMode } from '../../../../common/views/view.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RecordActionData, RecordActionHandler } from '../record.action';
import { ModuleNavigation } from '../../../../services/navigation/module-navigation/module-navigation.service';
import { Router } from "@angular/router";
import { RecordPaginationService } from "../../store/record-pagination/record-pagination.service";
import * as i0 from "@angular/core";
export declare class RecordCancelAction extends RecordActionHandler {
    private modalService;
    private navigation;
    private router;
    private recordPaginationService;
    key: string;
    modes: ViewMode[];
    constructor(modalService: NgbModal, navigation: ModuleNavigation, router: Router, recordPaginationService: RecordPaginationService);
    run(data: RecordActionData): void;
    shouldDisplay(): boolean;
    protected cancel(data: RecordActionData): void;
    protected showConfirmationModal(data: RecordActionData): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecordCancelAction, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RecordCancelAction>;
}
