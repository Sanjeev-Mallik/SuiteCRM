import { Action } from '../../../common/actions/action.model';
import { Field } from '../../../common/record/field.model';
import { Record } from '../../../common/record/record.model';
import { ViewMode } from '../../../common/views/view.model';
import { FieldLogicActionData, FieldLogicActionHandler } from '../field-logic.action';
import * as i0 from "@angular/core";
export declare class UpdateFlexRelateModuleAction extends FieldLogicActionHandler {
    key: string;
    modes: ViewMode[];
    constructor();
    run(data: FieldLogicActionData, action: Action): void;
    protected updateValue(field: Field, valueObject: any, value: string, record: Record): void;
    getTriggeringStatus(): string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<UpdateFlexRelateModuleAction, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UpdateFlexRelateModuleAction>;
}
