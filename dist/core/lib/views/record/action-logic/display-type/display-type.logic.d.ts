import { LogicDefinitions } from '../../../../common/metadata/metadata.model';
import { Action } from '../../../../common/actions/action.model';
import { ViewMode } from '../../../../common/views/view.model';
import { RecordActionData } from '../../actions/record.action';
import { ActionLogicHandler } from '../../../../services/actions/action-logic-handler';
import { ActiveFieldsChecker } from "../../../../services/condition-operators/active-fields-checker.service";
import * as i0 from "@angular/core";
export declare class RecordActionDisplayTypeLogic extends ActionLogicHandler<RecordActionData> {
    protected activeFieldsChecker: ActiveFieldsChecker;
    key: string;
    modes: ViewMode[];
    constructor(activeFieldsChecker: ActiveFieldsChecker);
    runAll(displayLogic: LogicDefinitions, data: RecordActionData): boolean;
    run(data: RecordActionData, logic: Action): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecordActionDisplayTypeLogic, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RecordActionDisplayTypeLogic>;
}
