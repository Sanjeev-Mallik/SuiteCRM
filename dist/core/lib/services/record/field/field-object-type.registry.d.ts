import { BaseField } from '../../../common/record/field.model';
import { BaseTypeRegistry } from '../../../common/registry/base-type.registry';
import { FieldObjectTypeMap } from "./field-object.model";
import * as i0 from "@angular/core";
export declare class FieldObjectRegistry extends BaseTypeRegistry<BaseField> {
    protected initDefault(): void;
    protected getDefaultMap(): FieldObjectTypeMap;
    static ɵfac: i0.ɵɵFactoryDeclaration<FieldObjectRegistry, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FieldObjectRegistry>;
}
