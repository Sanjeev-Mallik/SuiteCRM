import { FieldActionData, FieldActionHandler } from '../field.action';
import { ViewMode } from "../../../../common/views/view.model";
import * as i0 from "@angular/core";
export declare class FieldClearAction extends FieldActionHandler {
    key: string;
    modes: ViewMode[];
    constructor();
    run(data: FieldActionData): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FieldClearAction, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FieldClearAction>;
}
