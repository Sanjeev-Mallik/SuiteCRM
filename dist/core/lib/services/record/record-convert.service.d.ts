import { Observable } from "rxjs";
import { SystemConfigStore } from "../../store/system-config/system-config.store";
import { Metadata } from "../../store/metadata/metadata.store.service";
import { FieldDefinitionMap } from "../../common/record/field.model";
import { Record } from "../../common/record/record.model";
import { ViewFieldDefinition } from "../../common/metadata/metadata.model";
import * as i0 from "@angular/core";
export declare class RecordConvertService {
    protected systemConfigStore: SystemConfigStore;
    constructor(systemConfigStore: SystemConfigStore);
    duplicateOnModule(prevRecord: Record, newRecord: Record, vardefs: FieldDefinitionMap, moduleMetadata: Metadata): Record;
    getViewFieldsObservable(meta: Metadata): Observable<ViewFieldDefinition[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecordConvertService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RecordConvertService>;
}
