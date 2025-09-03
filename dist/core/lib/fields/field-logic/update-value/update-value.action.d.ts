import { FieldLogicActionData, FieldLogicActionHandler } from '../field-logic.action';
import { Action } from '../../../common/actions/action.model';
import { Record } from '../../../common/record/record.model';
import { Field } from '../../../common/record/field.model';
import { ViewMode } from '../../../common/views/view.model';
import { ActiveFieldsChecker } from "../../../services/condition-operators/active-fields-checker.service";
import { CurrencyFormatter } from "../../../services/formatters/currency/currency-formatter.service";
import * as i0 from "@angular/core";
export declare class UpdateValueAction extends FieldLogicActionHandler {
    protected activeFieldsChecker: ActiveFieldsChecker;
    protected currencyFormatter: CurrencyFormatter;
    key: string;
    modes: ViewMode[];
    constructor(activeFieldsChecker: ActiveFieldsChecker, currencyFormatter: CurrencyFormatter);
    run(data: FieldLogicActionData, action: Action): void;
    getTriggeringStatus(): string[];
    /**
     * Update the new value
     * @param {object} field
     * @param value
     * @param {object} record
     */
    protected updateValue(field: Field, value: string, record: Record): void;
    protected isCurrencyField(field: Field): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<UpdateValueAction, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UpdateValueAction>;
}
