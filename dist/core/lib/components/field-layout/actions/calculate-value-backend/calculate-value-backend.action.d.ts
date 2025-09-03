import { FieldActionData, FieldActionHandler } from "../field.action";
import { AsyncActionService } from "../../../../services/process/processes/async-action/async-action";
import { ActiveFieldsChecker } from "../../../../services/condition-operators/active-fields-checker.service";
import { MessageService } from "../../../../services/message/message.service";
import { ProcessService } from "../../../../services/process/process.service";
import { BaseSaveRecordMapper } from "../../../../store/record/record-mappers/base-save.record-mapper";
import { ViewMode } from "../../../../common/views/view.model";
import { RecordMapperRegistry } from "../../../../common/record/record-mappers/record-mapper.registry";
import { Record } from "../../../../common/record/record.model";
import { Field } from "../../../../common/record/field.model";
import * as i0 from "@angular/core";
export declare class CalculateValueBackendAction extends FieldActionHandler {
    protected asyncActionService: AsyncActionService;
    protected processService: ProcessService;
    protected messages: MessageService;
    protected recordMappers: RecordMapperRegistry;
    protected baseMapper: BaseSaveRecordMapper;
    protected activeFieldsChecker: ActiveFieldsChecker;
    key: string;
    modes: ViewMode[];
    constructor(asyncActionService: AsyncActionService, processService: ProcessService, messages: MessageService, recordMappers: RecordMapperRegistry, baseMapper: BaseSaveRecordMapper, activeFieldsChecker: ActiveFieldsChecker);
    run(data: FieldActionData): void;
    getBaseRecord(record: Record): Record;
    /**
     * Map staging fields
     */
    protected mapRecordFields(record: Record): void;
    /**
     * Update the new value
     * @param {object} field
     * @param {string} value
     * @param {object} record
     */
    protected updateValue(field: Field, value: string, record: Record): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CalculateValueBackendAction, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CalculateValueBackendAction>;
}
