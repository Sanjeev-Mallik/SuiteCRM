import { ColumnDefinition } from '../../../../common/metadata/list.metadata.model';
import { Field } from '../../../../common/record/field.model';
import { Record } from '../../../../common/record/record.model';
import { FieldManager } from "../../../../services/record/field/field.manager";
import * as i0 from "@angular/core";
export declare class RecordDetailsPopupButtonComponent {
    protected fieldManager: FieldManager;
    record: Record;
    columns: ColumnDefinition[];
    constructor(fieldManager: FieldManager);
    getField(column: ColumnDefinition, record: Record): Field;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecordDetailsPopupButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RecordDetailsPopupButtonComponent, "scrm-record-details-popup-button", never, { "record": { "alias": "record"; "required": false; }; "columns": { "alias": "columns"; "required": false; }; }, {}, never, never, false, never>;
}
