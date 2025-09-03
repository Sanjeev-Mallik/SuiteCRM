import { BaseField } from '../../../../../common/record/field.model';
import { Record } from '../../../../../common/record/record.model';
import { FieldHandler } from "../field-handler.model";
import * as i0 from "@angular/core";
export declare class BaseFieldHandler<T extends BaseField> implements FieldHandler<T> {
    initDefaultValue(field: T, record: Record): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseFieldHandler<any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BaseFieldHandler<any>>;
}
