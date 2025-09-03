import { FieldActionData } from './field.action';
import { BaseActionManager } from '../../../services/actions/base-action-manager.service';
import { FieldClearAction } from './clear/field-clear.action';
import { FieldCopyAction } from "./copy/field-copy.action";
import { CalculateValueBackendAction } from "./calculate-value-backend/calculate-value-backend.action";
import * as i0 from "@angular/core";
export declare class FieldActionManager extends BaseActionManager<FieldActionData> {
    protected calculate: CalculateValueBackendAction;
    protected clear: FieldClearAction;
    protected copy: FieldCopyAction;
    constructor(calculate: CalculateValueBackendAction, clear: FieldClearAction, copy: FieldCopyAction);
    static ɵfac: i0.ɵɵFactoryDeclaration<FieldActionManager, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FieldActionManager>;
}
