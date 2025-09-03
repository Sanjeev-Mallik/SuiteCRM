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
import { BaseFieldComponent } from './base-field.component';
import { Component } from '@angular/core';
import { isVoid, isEmptyString } from '../../common/utils/value-utils';
import { DataTypeFormatter } from '../../services/formatters/data-type.formatter.service';
import { LanguageStore } from '../../store/language/language.store';
import { FieldLogicManager } from '../field-logic/field-logic.manager';
import { FieldLogicDisplayManager } from '../field-logic-display/field-logic-display.manager';
import { isNull, isObject } from "lodash-es";
import * as i0 from "@angular/core";
import * as i1 from "../../store/language/language.store";
import * as i2 from "../../services/formatters/data-type.formatter.service";
import * as i3 from "../field-logic/field-logic.manager";
import * as i4 from "../field-logic-display/field-logic-display.manager";
export class BaseEnumComponent extends BaseFieldComponent {
    constructor(languages, typeFormatter, logic, logicDisplay) {
        super(typeFormatter, logic, logicDisplay);
        this.languages = languages;
        this.typeFormatter = typeFormatter;
        this.logic = logic;
        this.logicDisplay = logicDisplay;
        this.selectedValues = [];
        this.valueLabel = '';
        this.options = [];
        this.subs = [];
        this.isDynamicEnum = false;
    }
    ngOnInit() {
        super.ngOnInit();
        const options$ = this?.field?.metadata?.options$ ?? null;
        if (options$) {
            this.subs.push(this.field.metadata.options$.subscribe((options) => {
                this.buildProvidedOptions(options);
                this.initValue();
            }));
            return;
        }
        const options = this?.field?.definition?.options ?? null;
        if (options) {
            this.subs.push(this.languages.vm$.subscribe((strings) => {
                this.buildAppStringListOptions(strings.appListStrings);
                this.initValue();
            }));
        }
        if (!options && !options$) {
            this.initValue();
        }
    }
    ngOnDestroy() {
        this.isDynamicEnum = false;
        this.subs.forEach(sub => sub.unsubscribe());
        this.options = [];
        this.optionsMap = {};
        this.selectedValues = [];
    }
    getInvalidClass() {
        if (this.validateOnlyOnSubmit ? this.isInvalid() : (this.field.formControl.invalid && this.field.formControl.touched)) {
            return 'is-invalid';
        }
        return '';
    }
    buildProvidedOptions(options) {
        this.options = options;
        this.optionsMap = {};
        options.forEach(option => {
            this.optionsMap[option.value] = option.label;
        });
    }
    buildAppStringListOptions(appStrings) {
        this.optionsMap = {};
        this.addExtraOptions();
        if (appStrings && this.field.definition.options && appStrings[this.field.definition.options]) {
            const options = appStrings[this.field.definition.options];
            if (this.options && Object.keys(this.options)) {
                this.optionsMap = { ...this.optionsMap, ...options };
            }
        }
        this.buildOptionsArray(appStrings);
    }
    addExtraOptions() {
        const extraOptions = (this.field.metadata && this.field.metadata.extraOptions) || [];
        extraOptions.forEach((item) => {
            if (isVoid(item.value)) {
                return;
            }
            let label = item.label || '';
            if (item.labelKey) {
                label = this.languages.getFieldLabel(item.labelKey);
            }
            this.optionsMap[item.value] = label;
        });
    }
    buildOptionsArray(appStrings) {
        this.options = [];
        Object.keys(this.optionsMap).forEach(key => {
            const isOptionEmpty = isEmptyString(this.optionsMap[key]);
            if (isOptionEmpty && this.isSkipEmptyMode()) {
                return;
            }
            if (isOptionEmpty && !this.addEmptyStringOption()) {
                return;
            }
            this.options.push({
                value: key,
                label: this.optionsMap[key]
            });
        });
        if (this.isDynamicEnum) {
            this.buildDynamicEnumOptions(appStrings);
        }
    }
    addEmptyStringOption() {
        return this.field.type !== 'multienum';
    }
    isSkipEmptyMode() {
        return this.mode === 'massupdate' || this.mode === 'filter';
    }
    initValue() {
        this.selectedValues = [];
        if (this.field.criteria) {
            this.initValueLabel();
            return;
        }
        if (typeof this.field.value !== 'string') {
            return;
        }
        if (!this.optionsMap) {
            return;
        }
        if (typeof this.optionsMap[this.field.value] !== 'string') {
            return;
        }
        this.initValueLabel();
    }
    initValueLabel() {
        const fieldValue = this.field.value || this.field.criteria?.target || undefined;
        if (fieldValue !== undefined) {
            this.valueLabel = this.optionsMap[fieldValue];
            this.selectedValues.push({
                value: fieldValue,
                label: this.valueLabel
            });
        }
    }
    /**
     *  Initialize the default value for the enum
     *
     *  @returns {void}
     *  @description set default enum value, if defined in vardefs
     * */
    initEnumDefault() {
        if (!isEmptyString(this.record?.id)) {
            this.field?.formControl.setValue('');
            return;
        }
        let defaultVal = this?.field?.default ?? this?.field?.definition?.default ?? null;
        if (typeof defaultVal === 'string') {
            defaultVal = defaultVal.trim();
        }
        if (!defaultVal) {
            this.field.formControl.setValue('');
            return;
        }
        this.selectedValues.push({
            value: defaultVal,
            label: this.optionsMap[defaultVal]
        });
        this.initEnumDefaultFieldValues(defaultVal);
    }
    initEnumDefaultFieldValues(defaultVal) {
        if (this.field.type === 'multienum') {
            const defaultValues = this.selectedValues.map(option => option.value);
            this.field.valueList = defaultValues;
            this.field.formControl.setValue(defaultValues);
        }
        else {
            this.field.value = defaultVal;
            this.field.formControl.setValue(defaultVal);
        }
        this.field.formControl.markAsDirty();
    }
    checkAndInitAsDynamicEnum() {
        const definition = (this.field && this.field.definition) || {};
        const dynamic = (definition && definition.dynamic) || false;
        const parentEnumKey = (definition && definition.parentenum) || '';
        const fields = (this.record && this.record.fields) || null;
        if (dynamic && parentEnumKey && fields) {
            this.isDynamicEnum = true;
            const parentEnum = fields[parentEnumKey];
            if (parentEnum) {
                this.subscribeToParentValueChanges(parentEnum);
            }
        }
    }
    buildDynamicEnumOptions(appStrings) {
        const parentEnum = this.record.fields[this.field.definition.parentenum];
        if (parentEnum) {
            const parentOptionMap = appStrings[parentEnum.definition.options];
            if (parentOptionMap && Object.keys(parentOptionMap).length !== 0) {
                this.mappedOptions = this.createParentChildOptionsMap(parentOptionMap, this.options);
                let parentValues = [];
                if (parentEnum.definition.type === 'multienum') {
                    parentValues = parentEnum.valueList;
                }
                else {
                    parentValues.push(parentEnum.value);
                }
                this.options = this.filterMatchingOptions(parentValues);
                if (parentValues && parentValues.length) {
                    this.setValueToAvailableOption();
                }
            }
        }
    }
    filterMatchingOptions(values) {
        let filteredOptions = [];
        if (!values || !values.length) {
            return [];
        }
        values.forEach(value => {
            if (!this.mappedOptions[value]) {
                return;
            }
            filteredOptions = filteredOptions.concat([...this.mappedOptions[value]]);
        });
        return filteredOptions;
    }
    createParentChildOptionsMap(parentOptions, childOptions) {
        const mappedOptions = {};
        Object.keys(parentOptions).forEach(key => {
            mappedOptions[key] = childOptions.filter(option => String(option.value).startsWith(key));
        });
        return mappedOptions;
    }
    subscribeToParentValueChanges(parentEnum) {
        if (parentEnum.formControl) {
            this.subs.push(parentEnum.formControl.valueChanges.subscribe(values => {
                if (typeof values === 'string') {
                    values = [values];
                }
                // Rebuild available enum options
                this.options = this.filterMatchingOptions(values);
                this.setValueToAvailableOption();
                this.initValue();
            }));
        }
    }
    setValueToAvailableOption() {
        if (!this?.options?.length) {
            this.field.value = '';
            this.field.formControl.setValue('');
            return;
        }
        if (!this.options.some(option => option.value === this.field.value)) {
            this.field.value = this.options[0].value;
            this.field.formControl.setValue(this.options[0].value);
        }
    }
    buildOptionFromValue(value) {
        const option = { value: '', label: '' };
        if (isNull(value)) {
            return option;
        }
        option.value = (typeof value !== 'string' ? JSON.stringify(value) : value).trim();
        option.label = option.value;
        const valueLabel = this.optionsMap[option.value] ?? option.label;
        if (isObject(valueLabel)) {
            return option;
        }
        option.label = (typeof valueLabel !== 'string' ? JSON.stringify(valueLabel) : valueLabel).trim();
        return option;
    }
    static { this.ɵfac = function BaseEnumComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BaseEnumComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore), i0.ɵɵdirectiveInject(i2.DataTypeFormatter), i0.ɵɵdirectiveInject(i3.FieldLogicManager), i0.ɵɵdirectiveInject(i4.FieldLogicDisplayManager)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BaseEnumComponent, selectors: [["ng-component"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function BaseEnumComponent_Template(rf, ctx) { }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseEnumComponent, [{
        type: Component,
        args: [{ template: '' }]
    }], () => [{ type: i1.LanguageStore }, { type: i2.DataTypeFormatter }, { type: i3.FieldLogicManager }, { type: i4.FieldLogicDisplayManager }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BaseEnumComponent, { className: "BaseEnumComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1lbnVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9maWVsZHMvYmFzZS9iYXNlLWVudW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUMsU0FBUyxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUczRCxPQUFPLEVBQUMsTUFBTSxFQUFFLGFBQWEsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ3JFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHVEQUF1RCxDQUFDO0FBQ3hGLE9BQU8sRUFFSCxhQUFhLEVBR2hCLE1BQU0scUNBQXFDLENBQUM7QUFDN0MsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDckUsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sb0RBQW9ELENBQUM7QUFDNUYsT0FBTyxFQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUMsTUFBTSxXQUFXLENBQUM7Ozs7OztBQUczQyxNQUFNLE9BQU8saUJBQWtCLFNBQVEsa0JBQWtCO0lBVXJELFlBQ2MsU0FBd0IsRUFDeEIsYUFBZ0MsRUFDaEMsS0FBd0IsRUFDeEIsWUFBc0M7UUFFaEQsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFMaEMsY0FBUyxHQUFULFNBQVMsQ0FBZTtRQUN4QixrQkFBYSxHQUFiLGFBQWEsQ0FBbUI7UUFDaEMsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFDeEIsaUJBQVksR0FBWixZQUFZLENBQTBCO1FBYnBELG1CQUFjLEdBQWEsRUFBRSxDQUFDO1FBQzlCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFFaEIsWUFBTyxHQUFhLEVB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ZUFBQyxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUM7O2tGQUNaLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtCYXNlRmllbGRDb21wb25lbnR9IGZyb20gJy4vYmFzZS1maWVsZC5jb21wb25lbnQnO1xuaW1wb3J0IHtDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7RmllbGQsIEZpZWxkRGVmaW5pdGlvbiwgT3B0aW9ufSBmcm9tICcuLi8uLi9jb21tb24vcmVjb3JkL2ZpZWxkLm1vZGVsJztcbmltcG9ydCB7aXNWb2lkLCBpc0VtcHR5U3RyaW5nfSBmcm9tICcuLi8uLi9jb21tb24vdXRpbHMvdmFsdWUtdXRpbHMnO1xuaW1wb3J0IHtEYXRhVHlwZUZvcm1hdHRlcn0gZnJvbSAnLi4vLi4vc2VydmljZXMvZm9ybWF0dGVycy9kYXRhLXR5cGUuZm9ybWF0dGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgICBMYW5ndWFnZUxpc3RTdHJpbmdNYXAsXG4gICAgTGFuZ3VhZ2VTdG9yZSxcbiAgICBMYW5ndWFnZVN0cmluZ01hcCxcbiAgICBMYW5ndWFnZVN0cmluZ3Ncbn0gZnJvbSAnLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtGaWVsZExvZ2ljTWFuYWdlcn0gZnJvbSAnLi4vZmllbGQtbG9naWMvZmllbGQtbG9naWMubWFuYWdlcic7XG5pbXBvcnQge0ZpZWxkTG9naWNEaXNwbGF5TWFuYWdlcn0gZnJvbSAnLi4vZmllbGQtbG9naWMtZGlzcGxheS9maWVsZC1sb2dpYy1kaXNwbGF5Lm1hbmFnZXInO1xuaW1wb3J0IHtpc051bGwsIGlzT2JqZWN0fSBmcm9tIFwibG9kYXNoLWVzXCI7XG5cbkBDb21wb25lbnQoe3RlbXBsYXRlOiAnJ30pXG5leHBvcnQgY2xhc3MgQmFzZUVudW1Db21wb25lbnQgZXh0ZW5kcyBCYXNlRmllbGRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgc2VsZWN0ZWRWYWx1ZXM6IE9wdGlvbltdID0gW107XG4gICAgdmFsdWVMYWJlbCA9ICcnO1xuICAgIG9wdGlvbnNNYXA6IExhbmd1YWdlU3RyaW5nTWFwO1xuICAgIG9wdGlvbnM6IE9wdGlvbltdID0gW107XG4gICAgbGFiZWxzOiBMYW5ndWFnZVN0cmluZ01hcDtcbiAgICBwcm90ZWN0ZWQgc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgICBwcm90ZWN0ZWQgbWFwcGVkT3B0aW9uczogeyBba2V5OiBzdHJpbmddOiBPcHRpb25bXSB9O1xuICAgIHByb3RlY3RlZCBpc0R5bmFtaWNFbnVtID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGxhbmd1YWdlczogTGFuZ3VhZ2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIHR5cGVGb3JtYXR0ZXI6IERhdGFUeXBlRm9ybWF0dGVyLFxuICAgICAgICBwcm90ZWN0ZWQgbG9naWM6IEZpZWxkTG9naWNNYW5hZ2VyLFxuICAgICAgICBwcm90ZWN0ZWQgbG9naWNEaXNwbGF5OiBGaWVsZExvZ2ljRGlzcGxheU1hbmFnZXJcbiAgICApIHtcbiAgICAgICAgc3VwZXIodHlwZUZvcm1hdHRlciwgbG9naWMsIGxvZ2ljRGlzcGxheSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICAgICAgc3VwZXIubmdPbkluaXQoKTtcblxuICAgICAgICBjb25zdCBvcHRpb25zJCA9IHRoaXM/LmZpZWxkPy5tZXRhZGF0YT8ub3B0aW9ucyQgPz8gbnVsbDtcbiAgICAgICAgaWYgKG9wdGlvbnMkKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLmZpZWxkLm1ldGFkYXRhLm9wdGlvbnMkLnN1YnNjcmliZSgob3B0aW9uczogT3B0aW9uW10pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkUHJvdmlkZWRPcHRpb25zKG9wdGlvbnMpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0VmFsdWUoKTtcblxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcz8uZmllbGQ/LmRlZmluaXRpb24/Lm9wdGlvbnMgPz8gbnVsbDtcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMubGFuZ3VhZ2VzLnZtJC5zdWJzY3JpYmUoKHN0cmluZ3M6IExhbmd1YWdlU3RyaW5ncykgPT4ge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5idWlsZEFwcFN0cmluZ0xpc3RPcHRpb25zKHN0cmluZ3MuYXBwTGlzdFN0cmluZ3MpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdFZhbHVlKCk7XG5cbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghb3B0aW9ucyAmJiAhb3B0aW9ucyQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdFZhbHVlKCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmlzRHluYW1pY0VudW0gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdWJzLmZvckVhY2goc3ViID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gW107XG4gICAgICAgIHRoaXMub3B0aW9uc01hcCA9IHt9O1xuICAgICAgICB0aGlzLnNlbGVjdGVkVmFsdWVzID0gW107XG4gICAgfVxuXG4gICAgZ2V0SW52YWxpZENsYXNzKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRlT25seU9uU3VibWl0ID8gdGhpcy5pc0ludmFsaWQoKSA6ICh0aGlzLmZpZWxkLmZvcm1Db250cm9sLmludmFsaWQgJiYgdGhpcy5maWVsZC5mb3JtQ29udHJvbC50b3VjaGVkKSkge1xuICAgICAgICAgICAgcmV0dXJuICdpcy1pbnZhbGlkJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGJ1aWxkUHJvdmlkZWRPcHRpb25zKG9wdGlvbnM6IE9wdGlvbltdKTogdm9pZCB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRoaXMub3B0aW9uc01hcCA9IHt9O1xuXG4gICAgICAgIG9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zTWFwW29wdGlvbi52YWx1ZV0gPSBvcHRpb24ubGFiZWw7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGJ1aWxkQXBwU3RyaW5nTGlzdE9wdGlvbnMoYXBwU3RyaW5nczogTGFuZ3VhZ2VMaXN0U3RyaW5nTWFwKTogdm9pZCB7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zTWFwID0ge30gYXMgTGFuZ3VhZ2VTdHJpbmdNYXA7XG4gICAgICAgIHRoaXMuYWRkRXh0cmFPcHRpb25zKCk7XG5cbiAgICAgICAgaWYgKGFwcFN0cmluZ3MgJiYgdGhpcy5maWVsZC5kZWZpbml0aW9uLm9wdGlvbnMgJiYgYXBwU3RyaW5nc1t0aGlzLmZpZWxkLmRlZmluaXRpb24ub3B0aW9uc10pIHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSBhcHBTdHJpbmdzW3RoaXMuZmllbGQuZGVmaW5pdGlvbi5vcHRpb25zXSBhcyBMYW5ndWFnZVN0cmluZ01hcDtcblxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucyAmJiBPYmplY3Qua2V5cyh0aGlzLm9wdGlvbnMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zTWFwID0gey4uLnRoaXMub3B0aW9uc01hcCwgLi4ub3B0aW9uc307XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJ1aWxkT3B0aW9uc0FycmF5KGFwcFN0cmluZ3MpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhZGRFeHRyYU9wdGlvbnMoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGV4dHJhT3B0aW9ucyA9ICh0aGlzLmZpZWxkLm1ldGFkYXRhICYmIHRoaXMuZmllbGQubWV0YWRhdGEuZXh0cmFPcHRpb25zKSB8fCBbXTtcblxuICAgICAgICBleHRyYU9wdGlvbnMuZm9yRWFjaCgoaXRlbTogT3B0aW9uKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNWb2lkKGl0ZW0udmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgbGFiZWwgPSBpdGVtLmxhYmVsIHx8ICcnO1xuICAgICAgICAgICAgaWYgKGl0ZW0ubGFiZWxLZXkpIHtcbiAgICAgICAgICAgICAgICBsYWJlbCA9IHRoaXMubGFuZ3VhZ2VzLmdldEZpZWxkTGFiZWwoaXRlbS5sYWJlbEtleSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMub3B0aW9uc01hcFtpdGVtLnZhbHVlXSA9IGxhYmVsO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYnVpbGRPcHRpb25zQXJyYXkoYXBwU3RyaW5nczogTGFuZ3VhZ2VMaXN0U3RyaW5nTWFwKTogdm9pZCB7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zID0gW107XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMub3B0aW9uc01hcCkuZm9yRWFjaChrZXkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBpc09wdGlvbkVtcHR5ID0gaXNFbXB0eVN0cmluZyh0aGlzLm9wdGlvbnNNYXBba2V5XSk7XG5cbiAgICAgICAgICAgIGlmIChpc09wdGlvbkVtcHR5ICYmIHRoaXMuaXNTa2lwRW1wdHlNb2RlKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpc09wdGlvbkVtcHR5ICYmICF0aGlzLmFkZEVtcHR5U3RyaW5nT3B0aW9uKCkpe1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnB1c2goe1xuICAgICAgICAgICAgICAgIHZhbHVlOiBrZXksXG4gICAgICAgICAgICAgICAgbGFiZWw6IHRoaXMub3B0aW9uc01hcFtrZXldXG4gICAgICAgICAgICB9IGFzIE9wdGlvbik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLmlzRHluYW1pY0VudW0pIHtcbiAgICAgICAgICAgIHRoaXMuYnVpbGREeW5hbWljRW51bU9wdGlvbnMoYXBwU3RyaW5ncyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWRkRW1wdHlTdHJpbmdPcHRpb24oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkLnR5cGUgIT09ICdtdWx0aWVudW0nO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBpc1NraXBFbXB0eU1vZGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGUgPT09ICdtYXNzdXBkYXRlJyB8fCB0aGlzLm1vZGUgPT09ICdmaWx0ZXInO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBpbml0VmFsdWUoKTogdm9pZCB7XG5cbiAgICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlcyA9IFtdO1xuXG4gICAgICAgIGlmICh0aGlzLmZpZWxkLmNyaXRlcmlhKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRWYWx1ZUxhYmVsKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuZmllbGQudmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMub3B0aW9uc01hcCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnNNYXBbdGhpcy5maWVsZC52YWx1ZV0gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluaXRWYWx1ZUxhYmVsKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGluaXRWYWx1ZUxhYmVsKCkge1xuICAgICAgICBjb25zdCBmaWVsZFZhbHVlID0gdGhpcy5maWVsZC52YWx1ZSB8fCB0aGlzLmZpZWxkLmNyaXRlcmlhPy50YXJnZXQgfHwgdW5kZWZpbmVkO1xuICAgICAgICBpZiAoZmllbGRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlTGFiZWwgPSB0aGlzLm9wdGlvbnNNYXBbZmllbGRWYWx1ZV07XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkVmFsdWVzLnB1c2goe1xuICAgICAgICAgICAgICAgIHZhbHVlOiBmaWVsZFZhbHVlLFxuICAgICAgICAgICAgICAgIGxhYmVsOiB0aGlzLnZhbHVlTGFiZWxcbiAgICAgICAgICAgIH0gYXMgT3B0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqICBJbml0aWFsaXplIHRoZSBkZWZhdWx0IHZhbHVlIGZvciB0aGUgZW51bVxuICAgICAqXG4gICAgICogIEByZXR1cm5zIHt2b2lkfVxuICAgICAqICBAZGVzY3JpcHRpb24gc2V0IGRlZmF1bHQgZW51bSB2YWx1ZSwgaWYgZGVmaW5lZCBpbiB2YXJkZWZzXG4gICAgICogKi9cbiAgICBwcm90ZWN0ZWQgaW5pdEVudW1EZWZhdWx0KCk6IHZvaWQge1xuXG4gICAgICAgIGlmICghaXNFbXB0eVN0cmluZyh0aGlzLnJlY29yZD8uaWQpKSB7XG4gICAgICAgICAgICB0aGlzLmZpZWxkPy5mb3JtQ29udHJvbC5zZXRWYWx1ZSgnJyk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkZWZhdWx0VmFsID0gdGhpcz8uZmllbGQ/LmRlZmF1bHQgPz8gdGhpcz8uZmllbGQ/LmRlZmluaXRpb24/LmRlZmF1bHQgPz8gbnVsbDtcbiAgICAgICAgaWYgKHR5cGVvZiBkZWZhdWx0VmFsID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgZGVmYXVsdFZhbCA9IGRlZmF1bHRWYWwudHJpbSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZGVmYXVsdFZhbCkge1xuICAgICAgICAgICAgdGhpcy5maWVsZC5mb3JtQ29udHJvbC5zZXRWYWx1ZSgnJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlcy5wdXNoKHtcbiAgICAgICAgICAgIHZhbHVlOiBkZWZhdWx0VmFsLFxuICAgICAgICAgICAgbGFiZWw6IHRoaXMub3B0aW9uc01hcFtkZWZhdWx0VmFsXVxuICAgICAgICB9IGFzIE9wdGlvbik7XG4gICAgICAgIHRoaXMuaW5pdEVudW1EZWZhdWx0RmllbGRWYWx1ZXMoZGVmYXVsdFZhbCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGluaXRFbnVtRGVmYXVsdEZpZWxkVmFsdWVzKGRlZmF1bHRWYWw6IHN0cmluZyk6IHZvaWQge1xuXG4gICAgICAgIGlmICh0aGlzLmZpZWxkLnR5cGUgPT09ICdtdWx0aWVudW0nKSB7XG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0VmFsdWVzID0gdGhpcy5zZWxlY3RlZFZhbHVlcy5tYXAob3B0aW9uID0+IG9wdGlvbi52YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLmZpZWxkLnZhbHVlTGlzdCA9IGRlZmF1bHRWYWx1ZXM7XG4gICAgICAgICAgICB0aGlzLmZpZWxkLmZvcm1Db250cm9sLnNldFZhbHVlKGRlZmF1bHRWYWx1ZXMpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZpZWxkLnZhbHVlID0gZGVmYXVsdFZhbDtcbiAgICAgICAgICAgIHRoaXMuZmllbGQuZm9ybUNvbnRyb2wuc2V0VmFsdWUoZGVmYXVsdFZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maWVsZC5mb3JtQ29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjaGVja0FuZEluaXRBc0R5bmFtaWNFbnVtKCk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IGRlZmluaXRpb24gPSAodGhpcy5maWVsZCAmJiB0aGlzLmZpZWxkLmRlZmluaXRpb24pIHx8IHt9IGFzIEZpZWxkRGVmaW5pdGlvbjtcbiAgICAgICAgY29uc3QgZHluYW1pYyA9IChkZWZpbml0aW9uICYmIGRlZmluaXRpb24uZHluYW1pYykgfHwgZmFsc2U7XG4gICAgICAgIGNvbnN0IHBhcmVudEVudW1LZXkgPSAoZGVmaW5pdGlvbiAmJiBkZWZpbml0aW9uLnBhcmVudGVudW0pIHx8ICcnO1xuICAgICAgICBjb25zdCBmaWVsZHMgPSAodGhpcy5yZWNvcmQgJiYgdGhpcy5yZWNvcmQuZmllbGRzKSB8fCBudWxsO1xuXG4gICAgICAgIGlmIChkeW5hbWljICYmIHBhcmVudEVudW1LZXkgJiYgZmllbGRzKSB7XG4gICAgICAgICAgICB0aGlzLmlzRHluYW1pY0VudW0gPSB0cnVlO1xuICAgICAgICAgICAgY29uc3QgcGFyZW50RW51bTogRmllbGQgPSBmaWVsZHNbcGFyZW50RW51bUtleV07XG4gICAgICAgICAgICBpZiAocGFyZW50RW51bSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlVG9QYXJlbnRWYWx1ZUNoYW5nZXMocGFyZW50RW51bSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYnVpbGREeW5hbWljRW51bU9wdGlvbnMoYXBwU3RyaW5nczogTGFuZ3VhZ2VMaXN0U3RyaW5nTWFwKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgcGFyZW50RW51bSA9IHRoaXMucmVjb3JkLmZpZWxkc1t0aGlzLmZpZWxkLmRlZmluaXRpb24ucGFyZW50ZW51bV07XG5cbiAgICAgICAgaWYgKHBhcmVudEVudW0pIHtcblxuICAgICAgICAgICAgY29uc3QgcGFyZW50T3B0aW9uTWFwOiBMYW5ndWFnZVN0cmluZ01hcCA9IGFwcFN0cmluZ3NbcGFyZW50RW51bS5kZWZpbml0aW9uLm9wdGlvbnNdIGFzIExhbmd1YWdlU3RyaW5nTWFwO1xuXG4gICAgICAgICAgICBpZiAocGFyZW50T3B0aW9uTWFwICYmIE9iamVjdC5rZXlzKHBhcmVudE9wdGlvbk1hcCkubGVuZ3RoICE9PSAwKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLm1hcHBlZE9wdGlvbnMgPSB0aGlzLmNyZWF0ZVBhcmVudENoaWxkT3B0aW9uc01hcChwYXJlbnRPcHRpb25NYXAsIHRoaXMub3B0aW9ucyk7XG5cbiAgICAgICAgICAgICAgICBsZXQgcGFyZW50VmFsdWVzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnRFbnVtLmRlZmluaXRpb24udHlwZSA9PT0gJ211bHRpZW51bScpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50VmFsdWVzID0gcGFyZW50RW51bS52YWx1ZUxpc3Q7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50VmFsdWVzLnB1c2gocGFyZW50RW51bS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuZmlsdGVyTWF0Y2hpbmdPcHRpb25zKHBhcmVudFZhbHVlcyk7XG5cbiAgICAgICAgICAgICAgICBpZiAocGFyZW50VmFsdWVzICYmIHBhcmVudFZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZVRvQXZhaWxhYmxlT3B0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZmlsdGVyTWF0Y2hpbmdPcHRpb25zKHZhbHVlczogc3RyaW5nW10pOiBPcHRpb25bXSB7XG5cbiAgICAgICAgbGV0IGZpbHRlcmVkT3B0aW9uczogT3B0aW9uW10gPSBbXTtcblxuICAgICAgICBpZiAoIXZhbHVlcyB8fCAhdmFsdWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFsdWVzLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLm1hcHBlZE9wdGlvbnNbdmFsdWVdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmlsdGVyZWRPcHRpb25zID0gZmlsdGVyZWRPcHRpb25zLmNvbmNhdChbLi4udGhpcy5tYXBwZWRPcHRpb25zW3ZhbHVlXV0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZmlsdGVyZWRPcHRpb25zO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVQYXJlbnRDaGlsZE9wdGlvbnNNYXAocGFyZW50T3B0aW9uczogTGFuZ3VhZ2VTdHJpbmdNYXAsIGNoaWxkT3B0aW9uczogT3B0aW9uW10pOiB7IFtrZXk6IHN0cmluZ106IE9wdGlvbltdIH0ge1xuICAgICAgICBjb25zdCBtYXBwZWRPcHRpb25zOiB7IFtrZXk6IHN0cmluZ106IE9wdGlvbltdIH0gPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMocGFyZW50T3B0aW9ucykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgbWFwcGVkT3B0aW9uc1trZXldID0gY2hpbGRPcHRpb25zLmZpbHRlcihcbiAgICAgICAgICAgICAgICBvcHRpb24gPT4gU3RyaW5nKG9wdGlvbi52YWx1ZSkuc3RhcnRzV2l0aChrZXkpXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG1hcHBlZE9wdGlvbnM7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHN1YnNjcmliZVRvUGFyZW50VmFsdWVDaGFuZ2VzKHBhcmVudEVudW06IEZpZWxkKTogdm9pZCB7XG4gICAgICAgIGlmIChwYXJlbnRFbnVtLmZvcm1Db250cm9sKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnMucHVzaChwYXJlbnRFbnVtLmZvcm1Db250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsdWVzID0+IHtcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWVzID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZXMgPSBbdmFsdWVzXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBSZWJ1aWxkIGF2YWlsYWJsZSBlbnVtIG9wdGlvbnNcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLmZpbHRlck1hdGNoaW5nT3B0aW9ucyh2YWx1ZXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0VmFsdWVUb0F2YWlsYWJsZU9wdGlvbigpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0VmFsdWUoKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZXRWYWx1ZVRvQXZhaWxhYmxlT3B0aW9uKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXM/Lm9wdGlvbnM/Lmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5maWVsZC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5maWVsZC5mb3JtQ29udHJvbC5zZXRWYWx1ZSgnJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5zb21lKG9wdGlvbiA9PiBvcHRpb24udmFsdWUgPT09IHRoaXMuZmllbGQudmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLmZpZWxkLnZhbHVlID0gdGhpcy5vcHRpb25zWzBdLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5maWVsZC5mb3JtQ29udHJvbC5zZXRWYWx1ZSh0aGlzLm9wdGlvbnNbMF0udmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGJ1aWxkT3B0aW9uRnJvbVZhbHVlKHZhbHVlOiBzdHJpbmcpOiBPcHRpb24ge1xuICAgICAgICBjb25zdCBvcHRpb246IE9wdGlvbiA9IHt2YWx1ZTogJycsIGxhYmVsOiAnJ307XG5cbiAgICAgICAgaWYgKGlzTnVsbCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb247XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9uLnZhbHVlID0gKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycgPyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgOiB2YWx1ZSkudHJpbSgpO1xuICAgICAgICBvcHRpb24ubGFiZWwgPSBvcHRpb24udmFsdWU7XG5cbiAgICAgICAgY29uc3QgdmFsdWVMYWJlbCA9IHRoaXMub3B0aW9uc01hcFtvcHRpb24udmFsdWVdID8/IG9wdGlvbi5sYWJlbDtcbiAgICAgICAgaWYgKGlzT2JqZWN0KHZhbHVlTGFiZWwpKSB7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9uO1xuICAgICAgICB9XG4gICAgICAgIG9wdGlvbi5sYWJlbCA9ICh0eXBlb2YgdmFsdWVMYWJlbCAhPT0gJ3N0cmluZycgPyBKU09OLnN0cmluZ2lmeSh2YWx1ZUxhYmVsKSA6IHZhbHVlTGFiZWwpLnRyaW0oKTtcblxuICAgICAgICByZXR1cm4gb3B0aW9uO1xuICAgIH1cblxufVxuIl19