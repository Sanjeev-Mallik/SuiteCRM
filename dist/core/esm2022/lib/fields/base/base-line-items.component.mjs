/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2021 SalesAgility Ltd.
 *
 * This program is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License version 3 as published by the
 * Free Software Foundation with the addition of the following permission added
 * to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK
 * IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE
 * WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * In accordance with Section 7(b) of the GNU Affero General Public License
 * version 3, these Appropriate Legal Notices must retain the display of the
 * "Supercharged by SuiteCRM" logo. If the display of the logos is not reasonably
 * feasible for technical reasons, the Appropriate Legal Notices must display
 * the words "Supercharged by SuiteCRM".
 */
import { Component, inject } from '@angular/core';
import { BaseFieldComponent } from './base-field.component';
import { DataTypeFormatter } from '../../services/formatters/data-type.formatter.service';
import { RecordManager } from '../../services/record/record.manager';
import { isTrue } from '../../common/utils/value-utils';
import { emptyObject } from '../../common/utils/object-utils';
import { isEditable } from '../../common/utils/view-utils';
import { LineActionEvent } from '../../common/actions/field-logic-action.model';
import set from 'lodash-es/set';
import { FieldLogicManager } from '../field-logic/field-logic.manager';
import { FieldManager } from '../../services/record/field/field.manager';
import { FieldRegistry } from '../field.registry';
import { FieldLogicDisplayManager } from '../field-logic-display/field-logic-display.manager';
import { RecordValidationHandler } from "../../services/record/validation/record-validation.handler";
import * as i0 from "@angular/core";
import * as i1 from "../../services/formatters/data-type.formatter.service";
import * as i2 from "../field.registry";
import * as i3 from "../../services/record/record.manager";
import * as i4 from "../field-logic/field-logic.manager";
import * as i5 from "../../services/record/field/field.manager";
import * as i6 from "../field-logic-display/field-logic-display.manager";
export class BaseLineItemsComponent extends BaseFieldComponent {
    constructor(typeFormatter, registry, recordManager, logic, fieldManager, logicDisplay) {
        super(typeFormatter, logic, logicDisplay);
        this.typeFormatter = typeFormatter;
        this.registry = registry;
        this.recordManager = recordManager;
        this.logic = logic;
        this.fieldManager = fieldManager;
        this.logicDisplay = logicDisplay;
        this.recordValidationHandler = inject(RecordValidationHandler);
    }
    ngOnInit() {
        super.ngOnInit();
        this.initUpdateParentSubscription();
        this.initItems();
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    /**
     * Get component type
     * @param {string} type
     * @param {FieldDefinition} definition
     * @returns {}
     */
    getComponentType(type, definition) {
        const module = (this.record && this.record.module) || 'default';
        const displayType = (definition && definition.displayType) || '';
        return this.registry.getDisplayType(module, type, displayType, this.getMode(), this.field.name);
    }
    /**
     * Get the list of items
     *
     * @returns {object} Record[]
     */
    initItems() {
        this.field.items = this.field.items || [];
        const items = this.field.items;
        const activeItems = items && items.filter(item => !(item && item.attributes && item.attributes.deleted));
        const labelOnFirstLine = !!(this.field?.definition?.lineItems?.labelOnFirstLine ?? false);
        activeItems.forEach((item, index) => {
            const show = !labelOnFirstLine || index <= 0;
            this.setAttributeLabelDisplay(item, show);
        });
    }
    initEmptyItem() {
        this.field.items = this.field.items || [];
        const items = this.field.items;
        const activeItems = items && items.filter(item => !(item && item.attributes && item.attributes.deleted));
        if (['edit', 'create'].includes(this.mode) && !activeItems.length) {
            this.addEmptyItem();
        }
    }
    /**
     * Get the fields for the item record
     *
     * @param {Record} item
     * @returns {object} Field[]
     */
    getItemFields(item) {
        const fields = item.fields || {};
        return Object.keys(fields).map(key => fields[key]);
    }
    /**
     * Remove item from array
     *
     * @param {number} index
     * @return {void}
     */
    removeItem(index) {
        this.fieldManager.removeLineItem(this.field, index);
        const activeItems = this.getActiveItems();
        const itemCount = activeItems?.length ?? 0;
        if (itemCount) {
            this.setAttributeLabelOnItem(0, activeItems);
        }
        this.updateItems(this.field.items);
        this.triggerLineActionEvents(LineActionEvent.onLineItemRemove);
    }
    /**
     * Add item to array
     *
     * @return {void}
     */
    addEmptyItem() {
        const itemDefinition = this.field?.definition?.lineItems?.definition || {};
        this.fieldManager.addLineItem(itemDefinition, this.record, this.field);
        const activeItems = this.getActiveItems();
        const itemCount = activeItems?.length ?? 0;
        if (itemCount) {
            this.setAttributeLabelOnItem(0, activeItems);
            this.setAttributeLabelOnItem(itemCount - 1, activeItems);
        }
        this.recordValidationHandler.initLineItemsValidators(this.field);
        this.triggerLineActionEvents(LineActionEvent.onLineItemAdd);
    }
    /**
     * Update items
     *
     * @param {Record[]} items
     * @return {void}
     */
    updateItems(items) {
        this.field.items = items;
    }
    /**
     * Get module
     *
     * @return {string}
     */
    getModule() {
        if (!this.record) {
            return null;
        }
        return this.record.module;
    }
    /**
     * Get Mode
     *
     * @return {string}
     */
    getMode() {
        if (this.mode === 'filter') {
            return 'edit';
        }
        return this.mode;
    }
    /**
     * Get flex direction to be used
     *
     * @returns {string} direction
     */
    getDirection() {
        let direction = 'flex-column';
        if (this.field.definition.display === 'inline') {
            direction = 'flex-row';
        }
        return direction;
    }
    /**
     * Check if is configured
     *
     * @returns {boolean} is configured
     */
    isConfigured() {
        return this.hasItemConfig();
    }
    /**
     * Check if its editable
     */
    isEditable() {
        return isEditable(this.mode);
    }
    /**
     * Show label
     *
     * @param {FieldAttribute} attribute
     * @returns {boolean}
     */
    showLabel(attribute) {
        const definition = attribute.definition || null;
        const showLabel = definition.showLabel || null;
        if (!definition || !showLabel) {
            return false;
        }
        return (showLabel.includes('*') || showLabel.includes(this.mode));
    }
    /**
     * Get message context
     *
     * @param {} item
     * @param {Record} record
     * @return {object} StringMap
     */
    getMessageContext(item, record) {
        const context = item && item.message && item.message.context || {};
        context.module = (record && record.module) || '';
        return context;
    }
    /**
     * Get message label key
     *
     * @param {} item
     * @return {string}
     */
    getMessageLabelKey(item) {
        return (item && item.message && item.message.labelKey) || '';
    }
    /**
     * Get active items
     */
    getActiveItems() {
        const items = this?.field?.items ?? [];
        return items.filter(item => !(item?.attributes?.deleted ?? false));
    }
    /**
     * Calculate if items' attribute label should show or hide
     * @param index on the element
     * @param items list
     */
    setAttributeLabelOnItem(index, items) {
        const labelOnFirstLine = !!(this.field?.definition?.lineItems?.labelOnFirstLine ?? false);
        const show = !labelOnFirstLine || (index <= 0);
        this.setAttributeLabelDisplay(items[index], show);
    }
    /**
     * Check if groupFields are configured
     *
     * @returns {boolean} has groupFields
     */
    hasItemConfig() {
        return !!(this.field?.definition?.lineItems?.definition ?? null);
    }
    /**
     * Init Update parent subscription
     */
    initUpdateParentSubscription() {
        if (!this.field.attributes) {
            return;
        }
        Object.keys(this.field.attributes).forEach(attributeKey => {
            const attribute = this.field.attributes[attributeKey];
            if (!attribute.valueChanges$) {
                return;
            }
            this.subs.push(attribute.valueChanges$.subscribe(value => {
                const val = value.valueObject || value.valueList || value.value;
                this.setValueOnParent(attribute, val);
            }));
        });
    }
    /**
     * Set attribute value on parent
     *
     * @param {object} attribute
     * @param {} value
     * @returns {void}
     */
    setValueOnParent(attribute, value) {
        if (attribute.valuePath) {
            set(this.field, attribute.valuePath, value);
            return;
        }
        set(this.field.valueObject, attribute.name, value);
    }
    /**
     * Set attribute label display
     *
     * @param {object} itemRecord
     * @param {boolean} showLabel
     * @returns {void}
     */
    setAttributeLabelDisplay(itemRecord, showLabel) {
        const subfields = itemRecord.fields || {};
        Object.keys(subfields).forEach(subFieldKey => {
            const subField = subfields[subFieldKey];
            if (subField.type !== 'composite') {
                return;
            }
            const subFieldAttributes = subField.attributes || {};
            Object.keys(subFieldAttributes).forEach(subFieldAttributeKey => {
                const subFieldAttribute = subFieldAttributes[subFieldAttributeKey];
                const metadata = subFieldAttribute.metadata || {};
                metadata.labelDisplay = !showLabel ? 'hide' : 'default';
                subFieldAttribute.metadata = metadata;
            });
        });
    }
    /**
     * Check and if enabled, Run custom field logic on line action events
     * e.g. on line items row add/remove and so on as required
     *
     * @param {LineActionEvent} lineActionEvent
     * @returns {void}
     */
    triggerLineActionEvents(lineActionEvent) {
        const fieldLogics = this.field?.logic || {};
        if (emptyObject(fieldLogics)) {
            return;
        }
        Object.keys(fieldLogics).forEach(logicKey => {
            const fieldLogic = fieldLogics[logicKey] || null;
            const onEvent = fieldLogic?.params?.triggerOnEvents?.[lineActionEvent];
            if (isTrue(onEvent)) {
                this.logic.runLogic(this.field, this.mode, this.record);
            }
        });
    }
    static { this.ɵfac = function BaseLineItemsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BaseLineItemsComponent)(i0.ɵɵdirectiveInject(i1.DataTypeFormatter), i0.ɵɵdirectiveInject(i2.FieldRegistry), i0.ɵɵdirectiveInject(i3.RecordManager), i0.ɵɵdirectiveInject(i4.FieldLogicManager), i0.ɵɵdirectiveInject(i5.FieldManager), i0.ɵɵdirectiveInject(i6.FieldLogicDisplayManager)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BaseLineItemsComponent, selectors: [["ng-component"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function BaseLineItemsComponent_Template(rf, ctx) { }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseLineItemsComponent, [{
        type: Component,
        args: [{ template: '' }]
    }], () => [{ type: i1.DataTypeFormatter }, { type: i2.FieldRegistry }, { type: i3.RecordManager }, { type: i4.FieldLogicManager }, { type: i5.FieldManager }, { type: i6.FieldLogicDisplayManager }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BaseLineItemsComponent, { className: "BaseLineItemsComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1saW5lLWl0ZW1zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9maWVsZHMvYmFzZS9iYXNlLWxpbmUtaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDeEYsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQ25FLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDNUQsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBR3pELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUk5RSxPQUFPLEdBQUcsTUFBTSxlQUFlLENBQUM7QUFDaEMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDckUsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRCxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxvREFBb0QsQ0FBQztBQUM1RixPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw0REFBNEQsQ0FBQzs7Ozs7Ozs7QUFHbkcsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGtCQUFrQjtJQUcxRCxZQUNjLGFBQWdDLEVBQ2hDLFFBQXVCLEVB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LENBQUMsQ0FBQztZQUN4RSxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO3VIQXRXUSxzQkFBc0I7b0VBQXRCLHNCQUFzQjs7aUZBQXRCLHNCQUFzQjtjQURsQyxTQUFTO2VBQUMsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFDOztrRkFDWixzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBpbmplY3QsIE9uRGVzdHJveSwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmFzZUZpZWxkQ29tcG9uZW50fSBmcm9tICcuL2Jhc2UtZmllbGQuY29tcG9uZW50JztcbmltcG9ydCB7RGF0YVR5cGVGb3JtYXR0ZXJ9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Zvcm1hdHRlcnMvZGF0YS10eXBlLmZvcm1hdHRlci5zZXJ2aWNlJztcbmltcG9ydCB7UmVjb3JkTWFuYWdlcn0gZnJvbSAnLi4vLi4vc2VydmljZXMvcmVjb3JkL3JlY29yZC5tYW5hZ2VyJztcbmltcG9ydCB7aXNUcnVlfSBmcm9tICcuLi8uLi9jb21tb24vdXRpbHMvdmFsdWUtdXRpbHMnO1xuaW1wb3J0IHtlbXB0eU9iamVjdH0gZnJvbSAnLi4vLi4vY29tbW9uL3V0aWxzL29iamVjdC11dGlscyc7XG5pbXBvcnQge2lzRWRpdGFibGV9IGZyb20gJy4uLy4uL2NvbW1vbi91dGlscy92aWV3LXV0aWxzJztcbmltcG9ydCB7RmllbGQsIEZpZWxkRGVmaW5pdGlvbiwgRmllbGRBdHRyaWJ1dGV9IGZyb20gJy4uLy4uL2NvbW1vbi9yZWNvcmQvZmllbGQubW9kZWwnO1xuaW1wb3J0IHtGaWVsZExvZ2ljTWFwfSBmcm9tICcuLi8uLi9jb21tb24vYWN0aW9ucy9maWVsZC1sb2dpYy1hY3Rpb24ubW9kZWwnO1xuaW1wb3J0IHtMaW5lQWN0aW9uRXZlbnR9IGZyb20gJy4uLy4uL2NvbW1vbi9hY3Rpb25zL2ZpZWxkLWxvZ2ljLWFjdGlvbi5tb2RlbCc7XG5pbXBvcnQge1JlY29yZH0gZnJvbSAnLi4vLi4vY29tbW9uL3JlY29yZC9yZWNvcmQubW9kZWwnO1xuaW1wb3J0IHtTdHJpbmdNYXB9IGZyb20gJy4uLy4uL2NvbW1vbi90eXBlcy9zdHJpbmctbWFwJztcbmltcG9ydCB7Vmlld01vZGV9IGZyb20gJy4uLy4uL2NvbW1vbi92aWV3cy92aWV3Lm1vZGVsJztcbmltcG9ydCBzZXQgZnJvbSAnbG9kYXNoLWVzL3NldCc7XG5pbXBvcnQge0ZpZWxkTG9naWNNYW5hZ2VyfSBmcm9tICcuLi9maWVsZC1sb2dpYy9maWVsZC1sb2dpYy5tYW5hZ2VyJztcbmltcG9ydCB7RmllbGRNYW5hZ2VyfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9yZWNvcmQvZmllbGQvZmllbGQubWFuYWdlcic7XG5pbXBvcnQge0ZpZWxkUmVnaXN0cnl9IGZyb20gJy4uL2ZpZWxkLnJlZ2lzdHJ5JztcbmltcG9ydCB7RmllbGRMb2dpY0Rpc3BsYXlNYW5hZ2VyfSBmcm9tICcuLi9maWVsZC1sb2dpYy1kaXNwbGF5L2ZpZWxkLWxvZ2ljLWRpc3BsYXkubWFuYWdlcic7XG5pbXBvcnQge1JlY29yZFZhbGlkYXRpb25IYW5kbGVyfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvcmVjb3JkL3ZhbGlkYXRpb24vcmVjb3JkLXZhbGlkYXRpb24uaGFuZGxlclwiO1xuXG5AQ29tcG9uZW50KHt0ZW1wbGF0ZTogJyd9KVxuZXhwb3J0IGNsYXNzIEJhc2VMaW5lSXRlbXNDb21wb25lbnQgZXh0ZW5kcyBCYXNlRmllbGRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJvdGVjdGVkIHJlY29yZFZhbGlkYXRpb25IYW5kbGVyOiBSZWNvcmRWYWxpZGF0aW9uSGFuZGxlcjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgdHlwZUZvcm1hdHRlcjogRGF0YVR5cGVGb3JtYXR0ZXIsXG4gICAgICAgIHByb3RlY3RlZCByZWdpc3RyeTogRmllbGRSZWdpc3RyeSxcbiAgICAgICAgcHJvdGVjdGVkIHJlY29yZE1hbmFnZXI6IFJlY29yZE1hbmFnZXIsXG4gICAgICAgIHByb3RlY3RlZCBsb2dpYzogRmllbGRMb2dpY01hbmFnZXIsXG4gICAgICAgIHByb3RlY3RlZCBmaWVsZE1hbmFnZXI6IEZpZWxkTWFuYWdlcixcbiAgICAgICAgcHJvdGVjdGVkIGxvZ2ljRGlzcGxheTogRmllbGRMb2dpY0Rpc3BsYXlNYW5hZ2VyXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKHR5cGVGb3JtYXR0ZXIsIGxvZ2ljLCBsb2dpY0Rpc3BsYXkpO1xuXG4gICAgICAgIHRoaXMucmVjb3JkVmFsaWRhdGlvbkhhbmRsZXIgPSBpbmplY3QoUmVjb3JkVmFsaWRhdGlvbkhhbmRsZXIpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBzdXBlci5uZ09uSW5pdCgpO1xuICAgICAgICB0aGlzLmluaXRVcGRhdGVQYXJlbnRTdWJzY3JpcHRpb24oKTtcbiAgICAgICAgdGhpcy5pbml0SXRlbXMoKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdWJzLmZvckVhY2goc3ViID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgY29tcG9uZW50IHR5cGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICAgICAqIEBwYXJhbSB7RmllbGREZWZpbml0aW9ufSBkZWZpbml0aW9uXG4gICAgICogQHJldHVybnMge31cbiAgICAgKi9cbiAgICBnZXRDb21wb25lbnRUeXBlKHR5cGU6IHN0cmluZywgZGVmaW5pdGlvbjogRmllbGREZWZpbml0aW9uKTogYW55IHtcbiAgICAgICAgY29uc3QgbW9kdWxlID0gKHRoaXMucmVjb3JkICYmIHRoaXMucmVjb3JkLm1vZHVsZSkgfHwgJ2RlZmF1bHQnO1xuXG4gICAgICAgIGNvbnN0IGRpc3BsYXlUeXBlID0gKGRlZmluaXRpb24gJiYgZGVmaW5pdGlvbi5kaXNwbGF5VHlwZSkgfHwgJyc7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVnaXN0cnkuZ2V0RGlzcGxheVR5cGUobW9kdWxlLCB0eXBlLCBkaXNwbGF5VHlwZSwgdGhpcy5nZXRNb2RlKCksIHRoaXMuZmllbGQubmFtZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBsaXN0IG9mIGl0ZW1zXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBSZWNvcmRbXVxuICAgICAqL1xuICAgIGluaXRJdGVtcygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5maWVsZC5pdGVtcyA9IHRoaXMuZmllbGQuaXRlbXMgfHwgW107XG5cbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLmZpZWxkLml0ZW1zO1xuICAgICAgICBjb25zdCBhY3RpdmVJdGVtcyA9IGl0ZW1zICYmIGl0ZW1zLmZpbHRlcihpdGVtID0+ICEoaXRlbSAmJiBpdGVtLmF0dHJpYnV0ZXMgJiYgaXRlbS5hdHRyaWJ1dGVzLmRlbGV0ZWQpKTtcblxuICAgICAgICBjb25zdCBsYWJlbE9uRmlyc3RMaW5lID0gISEodGhpcy5maWVsZD8uZGVmaW5pdGlvbj8ubGluZUl0ZW1zPy5sYWJlbE9uRmlyc3RMaW5lID8/IGZhbHNlKTtcblxuICAgICAgICBhY3RpdmVJdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2hvdyA9ICFsYWJlbE9uRmlyc3RMaW5lIHx8IGluZGV4IDw9IDA7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZUxhYmVsRGlzcGxheShpdGVtLCBzaG93KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5pdEVtcHR5SXRlbSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5maWVsZC5pdGVtcyA9IHRoaXMuZmllbGQuaXRlbXMgfHwgW107XG5cbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLmZpZWxkLml0ZW1zO1xuICAgICAgICBjb25zdCBhY3RpdmVJdGVtcyA9IGl0ZW1zICYmIGl0ZW1zLmZpbHRlcihpdGVtID0+ICEoaXRlbSAmJiBpdGVtLmF0dHJpYnV0ZXMgJiYgaXRlbS5hdHRyaWJ1dGVzLmRlbGV0ZWQpKTtcblxuICAgICAgICBpZiAoWydlZGl0JywgJ2NyZWF0ZSddLmluY2x1ZGVzKHRoaXMubW9kZSkgJiYgIWFjdGl2ZUl0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5hZGRFbXB0eUl0ZW0oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZmllbGRzIGZvciB0aGUgaXRlbSByZWNvcmRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UmVjb3JkfSBpdGVtXG4gICAgICogQHJldHVybnMge29iamVjdH0gRmllbGRbXVxuICAgICAqL1xuICAgIGdldEl0ZW1GaWVsZHMoaXRlbTogUmVjb3JkKTogRmllbGRbXSB7XG4gICAgICAgIGNvbnN0IGZpZWxkcyA9IGl0ZW0uZmllbGRzIHx8IHt9O1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoZmllbGRzKS5tYXAoa2V5ID0+IGZpZWxkc1trZXldKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgaXRlbSBmcm9tIGFycmF5XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHJlbW92ZUl0ZW0oaW5kZXg6IG51bWJlcik6IHZvaWQge1xuXG4gICAgICAgIHRoaXMuZmllbGRNYW5hZ2VyLnJlbW92ZUxpbmVJdGVtKFxuICAgICAgICAgICAgdGhpcy5maWVsZCxcbiAgICAgICAgICAgIGluZGV4XG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgYWN0aXZlSXRlbXMgPSB0aGlzLmdldEFjdGl2ZUl0ZW1zKCk7XG4gICAgICAgIGNvbnN0IGl0ZW1Db3VudCA9IGFjdGl2ZUl0ZW1zPy5sZW5ndGggPz8gMDtcbiAgICAgICAgaWYgKGl0ZW1Db3VudCkge1xuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGVMYWJlbE9uSXRlbSgwLCBhY3RpdmVJdGVtcyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZUl0ZW1zKHRoaXMuZmllbGQuaXRlbXMpO1xuXG4gICAgICAgIHRoaXMudHJpZ2dlckxpbmVBY3Rpb25FdmVudHMoTGluZUFjdGlvbkV2ZW50Lm9uTGluZUl0ZW1SZW1vdmUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBpdGVtIHRvIGFycmF5XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIGFkZEVtcHR5SXRlbSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaXRlbURlZmluaXRpb246IEZpZWxkRGVmaW5pdGlvbiA9IHRoaXMuZmllbGQ/LmRlZmluaXRpb24/LmxpbmVJdGVtcz8uZGVmaW5pdGlvbiB8fCB7fTtcblxuICAgICAgICB0aGlzLmZpZWxkTWFuYWdlci5hZGRMaW5lSXRlbShcbiAgICAgICAgICAgIGl0ZW1EZWZpbml0aW9uLFxuICAgICAgICAgICAgdGhpcy5yZWNvcmQsXG4gICAgICAgICAgICB0aGlzLmZpZWxkXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgYWN0aXZlSXRlbXMgPSB0aGlzLmdldEFjdGl2ZUl0ZW1zKCk7XG4gICAgICAgIGNvbnN0IGl0ZW1Db3VudCA9IGFjdGl2ZUl0ZW1zPy5sZW5ndGggPz8gMDtcbiAgICAgICAgaWYgKGl0ZW1Db3VudCkge1xuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGVMYWJlbE9uSXRlbSgwLCBhY3RpdmVJdGVtcyk7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZUxhYmVsT25JdGVtKGl0ZW1Db3VudCAtIDEsIGFjdGl2ZUl0ZW1zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVjb3JkVmFsaWRhdGlvbkhhbmRsZXIuaW5pdExpbmVJdGVtc1ZhbGlkYXRvcnModGhpcy5maWVsZCk7XG5cbiAgICAgICAgdGhpcy50cmlnZ2VyTGluZUFjdGlvbkV2ZW50cyhMaW5lQWN0aW9uRXZlbnQub25MaW5lSXRlbUFkZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGl0ZW1zXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1JlY29yZFtdfSBpdGVtc1xuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgdXBkYXRlSXRlbXMoaXRlbXM6IFJlY29yZFtdKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZmllbGQuaXRlbXMgPSBpdGVtcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgbW9kdWxlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0TW9kdWxlKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICghdGhpcy5yZWNvcmQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVjb3JkLm1vZHVsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgTW9kZVxuICAgICAqXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldE1vZGUoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMubW9kZSA9PT0gJ2ZpbHRlcicpIHtcbiAgICAgICAgICAgIHJldHVybiAnZWRpdCc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5tb2RlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBmbGV4IGRpcmVjdGlvbiB0byBiZSB1c2VkXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBkaXJlY3Rpb25cbiAgICAgKi9cbiAgICBnZXREaXJlY3Rpb24oKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IGRpcmVjdGlvbiA9ICdmbGV4LWNvbHVtbic7XG5cbiAgICAgICAgaWYgKHRoaXMuZmllbGQuZGVmaW5pdGlvbi5kaXNwbGF5ID09PSAnaW5saW5lJykge1xuICAgICAgICAgICAgZGlyZWN0aW9uID0gJ2ZsZXgtcm93JztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkaXJlY3Rpb247XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgaXMgY29uZmlndXJlZFxuICAgICAqXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IGlzIGNvbmZpZ3VyZWRcbiAgICAgKi9cbiAgICBpc0NvbmZpZ3VyZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc0l0ZW1Db25maWcoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBpdHMgZWRpdGFibGVcbiAgICAgKi9cbiAgICBpc0VkaXRhYmxlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gaXNFZGl0YWJsZSh0aGlzLm1vZGUgYXMgVmlld01vZGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3cgbGFiZWxcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RmllbGRBdHRyaWJ1dGV9IGF0dHJpYnV0ZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIHNob3dMYWJlbChhdHRyaWJ1dGU6IEZpZWxkQXR0cmlidXRlKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBhdHRyaWJ1dGUuZGVmaW5pdGlvbiB8fCBudWxsO1xuICAgICAgICBjb25zdCBzaG93TGFiZWwgPSBkZWZpbml0aW9uLnNob3dMYWJlbCB8fCBudWxsO1xuXG4gICAgICAgIGlmICghZGVmaW5pdGlvbiB8fCAhc2hvd0xhYmVsKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKHNob3dMYWJlbC5pbmNsdWRlcygnKicpIHx8IHNob3dMYWJlbC5pbmNsdWRlcyh0aGlzLm1vZGUpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgbWVzc2FnZSBjb250ZXh0XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge30gaXRlbVxuICAgICAqIEBwYXJhbSB7UmVjb3JkfSByZWNvcmRcbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9IFN0cmluZ01hcFxuICAgICAqL1xuICAgIGdldE1lc3NhZ2VDb250ZXh0KGl0ZW06IGFueSwgcmVjb3JkOiBSZWNvcmQpOiBTdHJpbmdNYXAge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gaXRlbSAmJiBpdGVtLm1lc3NhZ2UgJiYgaXRlbS5tZXNzYWdlLmNvbnRleHQgfHwge307XG4gICAgICAgIGNvbnRleHQubW9kdWxlID0gKHJlY29yZCAmJiByZWNvcmQubW9kdWxlKSB8fCAnJztcblxuICAgICAgICByZXR1cm4gY29udGV4dDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgbWVzc2FnZSBsYWJlbCBrZXlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7fSBpdGVtXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldE1lc3NhZ2VMYWJlbEtleShpdGVtOiBhbnkpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gKGl0ZW0gJiYgaXRlbS5tZXNzYWdlICYmIGl0ZW0ubWVzc2FnZS5sYWJlbEtleSkgfHwgJyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGFjdGl2ZSBpdGVtc1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRBY3RpdmVJdGVtcygpOiBSZWNvcmRbXSB7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcz8uZmllbGQ/Lml0ZW1zID8/IFtdO1xuICAgICAgICByZXR1cm4gaXRlbXMuZmlsdGVyKGl0ZW0gPT4gIShpdGVtPy5hdHRyaWJ1dGVzPy5kZWxldGVkID8/IGZhbHNlKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlIGlmIGl0ZW1zJyBhdHRyaWJ1dGUgbGFiZWwgc2hvdWxkIHNob3cgb3IgaGlkZVxuICAgICAqIEBwYXJhbSBpbmRleCBvbiB0aGUgZWxlbWVudFxuICAgICAqIEBwYXJhbSBpdGVtcyBsaXN0XG4gICAgICovXG4gICAgcHJvdGVjdGVkIHNldEF0dHJpYnV0ZUxhYmVsT25JdGVtKGluZGV4OiBudW1iZXIsIGl0ZW1zOiBSZWNvcmRbXSk6IHZvaWQge1xuICAgICAgICBjb25zdCBsYWJlbE9uRmlyc3RMaW5lID0gISEodGhpcy5maWVsZD8uZGVmaW5pdGlvbj8ubGluZUl0ZW1zPy5sYWJlbE9uRmlyc3RMaW5lID8/IGZhbHNlKTtcblxuICAgICAgICBjb25zdCBzaG93ID0gIWxhYmVsT25GaXJzdExpbmUgfHwgKGluZGV4IDw9IDApO1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZUxhYmVsRGlzcGxheShpdGVtc1tpbmRleF0sIHNob3cpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGdyb3VwRmllbGRzIGFyZSBjb25maWd1cmVkXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gaGFzIGdyb3VwRmllbGRzXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGhhc0l0ZW1Db25maWcoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhISh0aGlzLmZpZWxkPy5kZWZpbml0aW9uPy5saW5lSXRlbXM/LmRlZmluaXRpb24gPz8gbnVsbCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdCBVcGRhdGUgcGFyZW50IHN1YnNjcmlwdGlvblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBpbml0VXBkYXRlUGFyZW50U3Vic2NyaXB0aW9uKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuZmllbGQuYXR0cmlidXRlcykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5maWVsZC5hdHRyaWJ1dGVzKS5mb3JFYWNoKGF0dHJpYnV0ZUtleSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGUgPSB0aGlzLmZpZWxkLmF0dHJpYnV0ZXNbYXR0cmlidXRlS2V5XTtcblxuICAgICAgICAgICAgaWYgKCFhdHRyaWJ1dGUudmFsdWVDaGFuZ2VzJCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zdWJzLnB1c2goYXR0cmlidXRlLnZhbHVlQ2hhbmdlcyQuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSB2YWx1ZS52YWx1ZU9iamVjdCB8fCB2YWx1ZS52YWx1ZUxpc3QgfHwgdmFsdWUudmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZU9uUGFyZW50KGF0dHJpYnV0ZSwgdmFsKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGF0dHJpYnV0ZSB2YWx1ZSBvbiBwYXJlbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBhdHRyaWJ1dGVcbiAgICAgKiBAcGFyYW0ge30gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgc2V0VmFsdWVPblBhcmVudChhdHRyaWJ1dGU6IEZpZWxkQXR0cmlidXRlLCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICAgIGlmIChhdHRyaWJ1dGUudmFsdWVQYXRoKSB7XG4gICAgICAgICAgICBzZXQodGhpcy5maWVsZCwgYXR0cmlidXRlLnZhbHVlUGF0aCwgdmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0KHRoaXMuZmllbGQudmFsdWVPYmplY3QsIGF0dHJpYnV0ZS5uYW1lLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGF0dHJpYnV0ZSBsYWJlbCBkaXNwbGF5XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gaXRlbVJlY29yZFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2hvd0xhYmVsXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgcHJvdGVjdGVkIHNldEF0dHJpYnV0ZUxhYmVsRGlzcGxheShpdGVtUmVjb3JkOiBSZWNvcmQsIHNob3dMYWJlbDogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBjb25zdCBzdWJmaWVsZHMgPSBpdGVtUmVjb3JkLmZpZWxkcyB8fCB7fTtcblxuICAgICAgICBPYmplY3Qua2V5cyhzdWJmaWVsZHMpLmZvckVhY2goc3ViRmllbGRLZXkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3ViRmllbGQgPSBzdWJmaWVsZHNbc3ViRmllbGRLZXldO1xuXG4gICAgICAgICAgICBpZiAoc3ViRmllbGQudHlwZSAhPT0gJ2NvbXBvc2l0ZScpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHN1YkZpZWxkQXR0cmlidXRlcyA9IHN1YkZpZWxkLmF0dHJpYnV0ZXMgfHwge307XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzdWJGaWVsZEF0dHJpYnV0ZXMpLmZvckVhY2goc3ViRmllbGRBdHRyaWJ1dGVLZXkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN1YkZpZWxkQXR0cmlidXRlID0gc3ViRmllbGRBdHRyaWJ1dGVzW3N1YkZpZWxkQXR0cmlidXRlS2V5XTtcbiAgICAgICAgICAgICAgICBjb25zdCBtZXRhZGF0YSA9IHN1YkZpZWxkQXR0cmlidXRlLm1ldGFkYXRhIHx8IHt9O1xuICAgICAgICAgICAgICAgIG1ldGFkYXRhLmxhYmVsRGlzcGxheSA9ICFzaG93TGFiZWwgPyAnaGlkZScgOiAnZGVmYXVsdCc7XG4gICAgICAgICAgICAgICAgc3ViRmllbGRBdHRyaWJ1dGUubWV0YWRhdGEgPSBtZXRhZGF0YTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBhbmQgaWYgZW5hYmxlZCwgUnVuIGN1c3RvbSBmaWVsZCBsb2dpYyBvbiBsaW5lIGFjdGlvbiBldmVudHNcbiAgICAgKiBlLmcuIG9uIGxpbmUgaXRlbXMgcm93IGFkZC9yZW1vdmUgYW5kIHNvIG9uIGFzIHJlcXVpcmVkXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0xpbmVBY3Rpb25FdmVudH0gbGluZUFjdGlvbkV2ZW50XG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgcHJvdGVjdGVkIHRyaWdnZXJMaW5lQWN0aW9uRXZlbnRzKGxpbmVBY3Rpb25FdmVudDogTGluZUFjdGlvbkV2ZW50KTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgZmllbGRMb2dpY3MgPSB0aGlzLmZpZWxkPy5sb2dpYyB8fCB7fSBhcyBGaWVsZExvZ2ljTWFwO1xuXG4gICAgICAgIGlmIChlbXB0eU9iamVjdChmaWVsZExvZ2ljcykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5rZXlzKGZpZWxkTG9naWNzKS5mb3JFYWNoKGxvZ2ljS2V5ID0+IHtcblxuICAgICAgICAgICAgY29uc3QgZmllbGRMb2dpYyA9IGZpZWxkTG9naWNzW2xvZ2ljS2V5XSB8fCBudWxsO1xuXG4gICAgICAgICAgICBjb25zdCBvbkV2ZW50ID0gZmllbGRMb2dpYz8ucGFyYW1zPy50cmlnZ2VyT25FdmVudHM/LltsaW5lQWN0aW9uRXZlbnRdO1xuXG4gICAgICAgICAgICBpZiAoaXNUcnVlKG9uRXZlbnQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dpYy5ydW5Mb2dpYyh0aGlzLmZpZWxkLCB0aGlzLm1vZGUgYXMgVmlld01vZGUsIHRoaXMucmVjb3JkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19