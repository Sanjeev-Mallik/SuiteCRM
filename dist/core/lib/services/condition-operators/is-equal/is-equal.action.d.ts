import { ConditionOperatorActionHandler } from '../condition-operator.action';
import { Field } from '../../../common/record/field.model';
import { Record } from '../../../common/record/record.model';
import { LogicRuleValues } from '../../../common/metadata/metadata.model';
import { ConditionOperatorModel } from '../condition-operator.model';
import * as i0 from "@angular/core";
export declare class IsEqualAction extends ConditionOperatorActionHandler implements ConditionOperatorModel {
    key: string;
    constructor();
    run(record: Record, field: Field, opsConfig: LogicRuleValues): boolean;
    protected getFieldComparisonValue(record: Record, opsConfig: LogicRuleValues): string[];
    protected getStaticComparisonValue(opsConfig: LogicRuleValues): any[];
    protected compareToField(opsConfig: LogicRuleValues): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<IsEqualAction, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<IsEqualAction>;
}
