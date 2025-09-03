import { Formatter } from '../formatter.model';
import { FormControlUtils } from '../../record/field/form-control.utils';
import { SystemConfigStore } from "../../../store/system-config/system-config.store";
import * as i0 from "@angular/core";
export declare class EmailFormatter implements Formatter {
    protected formUtils: FormControlUtils;
    protected configs: SystemConfigStore;
    constructor(formUtils: FormControlUtils, configs: SystemConfigStore);
    toUserFormat(value: string): string;
    toInternalFormat(value: string): string;
    getUserFormatPattern(): string;
    validateUserFormat(inputValue: any, validationRegexPattern?: string): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<EmailFormatter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EmailFormatter>;
}
