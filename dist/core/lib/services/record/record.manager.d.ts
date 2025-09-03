import { ViewFieldDefinition } from '../../common/metadata/metadata.model';
import { FieldMap, FieldDefinitionMap } from '../../common/record/field.model';
import { Record } from '../../common/record/record.model';
import { LanguageStore } from '../../store/language/language.store';
import { FieldManager } from './field/field.manager';
import { Params } from '@angular/router';
import { FieldHandlerRegistry } from "./field/handler/field-handler.registry";
import * as i0 from "@angular/core";
export declare class RecordManager {
    protected fieldManager: FieldManager;
    protected language: LanguageStore;
    protected fieldHandlerRegistry: FieldHandlerRegistry;
    constructor(fieldManager: FieldManager, language: LanguageStore, fieldHandlerRegistry: FieldHandlerRegistry);
    /**
     * Get empty record
     *
     * @param {string} module string
     * @returns {object} Record
     */
    buildEmptyRecord(module: string): Record;
    /**
     * Init Fields
     *
     * @param {object} record to use
     * @param {object} viewFieldDefinitions to use
     * @returns {object} fields
     */
    initFields(record: Record, viewFieldDefinitions: ViewFieldDefinition[]): FieldMap;
    initFieldDefaults(record: Record): void;
    /**
     * Inject param fields
     *
     * @param {object} params Params
     * @param {object} record Record
     * @param {object} vardefs FieldDefinitionMap
     */
    injectParamFields(params: Params, record: Record, vardefs: FieldDefinitionMap): void;
    protected handleLinkTypeRelationship(paramKey: string, params: Params, vardefs: FieldDefinitionMap, record: Record): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecordManager, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RecordManager>;
}
