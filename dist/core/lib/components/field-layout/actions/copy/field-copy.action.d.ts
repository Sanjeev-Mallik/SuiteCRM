import { FieldActionData, FieldActionHandler } from '../field.action';
import { Clipboard } from '@angular/cdk/clipboard';
import * as i0 from "@angular/core";
export declare class FieldCopyAction extends FieldActionHandler {
    private clipboard;
    key: string;
    modes: import("../../../../common/views/view.model").ViewMode[];
    constructor(clipboard: Clipboard);
    run(data: FieldActionData): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FieldCopyAction, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FieldCopyAction>;
}
