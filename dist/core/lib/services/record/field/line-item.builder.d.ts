import { Field, FieldMap, FieldDefinition } from '../../../common/record/field.model';
import { Record } from '../../../common/record/record.model';
import { ViewFieldDefinition } from '../../../common/metadata/metadata.model';
import { LanguageStore } from '../../../store/language/language.store';
import { ValidationManager } from '../validation/validation.manager';
import { DataTypeFormatter } from '../../formatters/data-type.formatter.service';
import { AttributeBuilder } from './attribute.builder';
import { FieldObjectRegistry } from "./field-object-type.registry";
import * as i0 from "@angular/core";
export declare class LineItemBuilder extends AttributeBuilder {
    protected validationManager: ValidationManager;
    protected typeFormatter: DataTypeFormatter;
    protected fieldRegistry: FieldObjectRegistry;
    constructor(validationManager: ValidationManager, typeFormatter: DataTypeFormatter, fieldRegistry: FieldObjectRegistry);
    /**
     * Create and add attributes fields to field
     *
     * @param {object} record Record
     * @param {object} fields FieldMap
     * @param {object} viewField ViewFieldDefinition
     * @param {object} language LanguageStore
     * @param {function} buildLineItemFunction
     */
    addLineItems(record: Record, fields: FieldMap, viewField: ViewFieldDefinition, language: LanguageStore, buildLineItemFunction: Function): void;
    /**
     * Create and add attributes fields to field
     *
     * @param {object} record Record
     * @param {object} field Field
     * @param {object} language LanguageStore
     * @param {function} buildLineItemFunction
     */
    addFieldLineItems(record: Record, field: Field, language: LanguageStore, buildLineItemFunction: Function): void;
    /**
     * Build line item and and to record
     * @param {object} itemDefinition
     * @param {object }item
     * @param {object} buildLineItemFunction
     * @param {object} language
     * @param {object} parentRecord
     * @param {object} parentField
     */
    addLineItem(itemDefinition: FieldDefinition, item: Record, buildLineItemFunction: Function, language: LanguageStore, parentRecord: Record, parentField: Field): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LineItemBuilder, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LineItemBuilder>;
}
