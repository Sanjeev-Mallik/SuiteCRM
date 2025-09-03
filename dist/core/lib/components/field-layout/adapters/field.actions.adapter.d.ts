import { Observable } from 'rxjs';
import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { FieldActionManager } from '../actions/field-action-manager.service';
import { AsyncActionInput, AsyncActionService } from '../../../services/process/processes/async-action/async-action';
import { FieldActionData } from '../actions/field.action';
import { LanguageStore } from '../../../store/language/language.store';
import { MessageService } from '../../../services/message/message.service';
import { Process } from '../../../services/process/process.service';
import { ConfirmationModalService } from '../../../services/modals/confirmation-modal.service';
import { BaseFieldActionsAdapter } from '../../../services/actions/base-field-action.adapter';
import { SelectModalService } from '../../../services/modals/select-modal.service';
import { RecordViewStore } from '../../../views/record/store/record-view/record-view.store';
import { AppMetadataStore } from "../../../store/app-metadata/app-metadata.store.service";
import { Action, ActionContext } from "../../../common/actions/action.model";
import { ViewMode } from "../../../common/views/view.model";
import * as i0 from "@angular/core";
export declare class FieldActionsAdapter extends BaseFieldActionsAdapter<FieldActionData> {
    protected store: RecordViewStore;
    protected metadata: MetadataStore;
    protected appMetadataStore: AppMetadataStore;
    protected language: LanguageStore;
    protected actionManager: FieldActionManager;
    protected asyncActionService: AsyncActionService;
    protected message: MessageService;
    protected confirmation: ConfirmationModalService;
    protected selectModalService: SelectModalService;
    protected viewName: string;
    protected fieldName: string;
    constructor(store: RecordViewStore, metadata: MetadataStore, appMetadataStore: AppMetadataStore, language: LanguageStore, actionManager: FieldActionManager, asyncActionService: AsyncActionService, message: MessageService, confirmation: ConfirmationModalService, selectModalService: SelectModalService, viewName: string, fieldName: string);
    getActions(context?: ActionContext): Observable<Action[]>;
    protected buildActionData(action: Action, context?: ActionContext): FieldActionData;
    /**
     * Build backend process input
     *
     * @param action
     * @param actionName
     * @param moduleName
     * @param context
     */
    protected buildActionInput(action: Action, actionName: string, moduleName: string, context?: ActionContext): AsyncActionInput;
    protected getMode(): ViewMode;
    protected getModuleName(context?: ActionContext): string;
    protected reload(action: Action, process: Process, context?: ActionContext): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FieldActionsAdapter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FieldActionsAdapter>;
}
