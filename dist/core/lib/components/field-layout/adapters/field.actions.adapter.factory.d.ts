import { AsyncActionService } from '../../../services/process/processes/async-action/async-action';
import { MessageService } from '../../../services/message/message.service';
import { ConfirmationModalService } from '../../../services/modals/confirmation-modal.service';
import { SelectModalService } from '../../../services/modals/select-modal.service';
import { LanguageStore } from '../../../store/language/language.store';
import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { FieldActionsAdapter } from './field.actions.adapter';
import { FieldActionManager } from '../actions/field-action-manager.service';
import { RecordViewStore } from '../../../views/record/store/record-view/record-view.store';
import { AppMetadataStore } from "../../../store/app-metadata/app-metadata.store.service";
import * as i0 from "@angular/core";
export declare class FieldActionsAdapterFactory {
    protected metadata: MetadataStore;
    protected appMetadataStore: AppMetadataStore;
    protected language: LanguageStore;
    protected actionManager: FieldActionManager;
    protected asyncActionService: AsyncActionService;
    protected message: MessageService;
    protected confirmation: ConfirmationModalService;
    protected selectModalService: SelectModalService;
    constructor(metadata: MetadataStore, appMetadataStore: AppMetadataStore, language: LanguageStore, actionManager: FieldActionManager, asyncActionService: AsyncActionService, message: MessageService, confirmation: ConfirmationModalService, selectModalService: SelectModalService);
    create(viewName: string, fieldName: string, store: RecordViewStore): FieldActionsAdapter;
    static ɵfac: i0.ɵɵFactoryDeclaration<FieldActionsAdapterFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FieldActionsAdapterFactory>;
}
