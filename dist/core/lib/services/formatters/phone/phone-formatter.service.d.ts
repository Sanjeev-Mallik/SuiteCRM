import { Formatter } from '../formatter.model';
import { FormControlUtils } from '../../record/field/form-control.utils';
import { SystemConfigStore } from "../../../store/system-config/system-config.store";
import * as i0 from "@angular/core";
export declare class PhoneFormatter implements Formatter {
    protected formUtils: FormControlUtils;
    protected systemConfigStore: SystemConfigStore;
    constructor(formUtils: FormControlUtils, systemConfigStore: SystemConfigStore);
    toUserFormat(value: string): string;
    toInternalFormat(value: string): string;
    getDefaultFormatPattern(): string;
    validateUserFormat(inputValue: any, regexPattern: string): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<PhoneFormatter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PhoneFormatter>;
}
