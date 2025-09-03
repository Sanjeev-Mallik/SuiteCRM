import { ValidatorInterface } from '../validator.Interface';
import { FormControlUtils } from '../../field/form-control.utils';
import { Record } from '../../../../common/record/record.model';
import { StandardValidatorFn } from '../../../../common/services/validators/validators.model';
import { ViewFieldDefinition } from '../../../../common/metadata/metadata.model';
import * as i0 from "@angular/core";
export declare const requiredValidator: (utils: FormControlUtils) => StandardValidatorFn;
export declare const booleanRequiredValidator: (utils: FormControlUtils) => StandardValidatorFn;
export declare const multienumRequiredValidator: (viewField: ViewFieldDefinition, record: Record, utils: FormControlUtils) => StandardValidatorFn;
export declare class RequiredValidator implements ValidatorInterface {
    protected utils: FormControlUtils;
    constructor(utils: FormControlUtils);
    applies(record: Record, viewField: ViewFieldDefinition): boolean;
    getValidator(viewField: ViewFieldDefinition, record: Record): StandardValidatorFn[];
    static ɵfac: i0.ɵɵFactoryDeclaration<RequiredValidator, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RequiredValidator>;
}
