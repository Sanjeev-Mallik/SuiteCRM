import { Action } from '../../../common/actions/action.model';
import { Field } from '../../../common/record/field.model';
import { Record } from '../../../common/record/record.model';
import { ViewMode } from '../../../common/views/view.model';
import { FieldLogicActionData, FieldLogicActionHandler } from '../field-logic.action';
import { CurrencyService } from '../../../services/currency/currency.service';
import { CurrencyFormatter } from "../../../services/formatters/currency/currency-formatter.service";
import * as i0 from "@angular/core";
export declare class UpdateCurrencyAction extends FieldLogicActionHandler {
    protected currencyService: CurrencyService;
    protected currencyFormatter: CurrencyFormatter;
    key: string;
    modes: ViewMode[];
    constructor(currencyService: CurrencyService, currencyFormatter: CurrencyFormatter);
    run(data: FieldLogicActionData, action: Action): void;
    protected updateValue(field: Field, value: number, record: Record): void;
    getTriggeringStatus(): string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<UpdateCurrencyAction, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UpdateCurrencyAction>;
}
