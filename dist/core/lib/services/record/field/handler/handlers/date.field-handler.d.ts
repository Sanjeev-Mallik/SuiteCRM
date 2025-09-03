import { ProcessService } from "../../../../process/process.service";
import { BaseField, Field } from '../../../../../common/record/field.model';
import { Record } from '../../../../../common/record/record.model';
import { BaseFieldHandler } from "./base.field-handler";
import { MessageService } from "../../../../message/message.service";
import * as i0 from "@angular/core";
export declare class DateFieldHandler extends BaseFieldHandler<BaseField> {
    protected processService: ProcessService;
    protected messages: MessageService;
    constructor(processService: ProcessService, messages: MessageService);
    initDefaultValue(field: BaseField, record: Record): void;
    protected updateValue(field: Field, value: string, record: Record): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DateFieldHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DateFieldHandler>;
}
