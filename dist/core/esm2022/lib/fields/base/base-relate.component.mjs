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
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ModuleNameMapper } from '../../services/navigation/module-name-mapper/module-name-mapper.service';
import { BaseFieldComponent } from './base-field.component';
import { DataTypeFormatter } from '../../services/formatters/data-type.formatter.service';
import { LanguageStore } from '../../store/language/language.store';
import { RelateService } from '../../services/record/relate/relate.service';
import { FieldLogicManager } from '../field-logic/field-logic.manager';
import { FieldLogicDisplayManager } from '../field-logic-display/field-logic-display.manager';
import * as i0 from "@angular/core";
import * as i1 from "../../store/language/language.store";
import * as i2 from "../../services/formatters/data-type.formatter.service";
import * as i3 from "../../services/record/relate/relate.service";
import * as i4 from "../../services/navigation/module-name-mapper/module-name-mapper.service";
import * as i5 from "../field-logic/field-logic.manager";
import * as i6 from "../field-logic-display/field-logic-display.manager";
export class BaseRelateComponent extends BaseFieldComponent {
    constructor(languages, typeFormatter, relateService, moduleNameMapper, logic, logicDisplay) {
        super(typeFormatter, logic, logicDisplay);
        this.languages = languages;
        this.typeFormatter = typeFormatter;
        this.relateService = relateService;
        this.moduleNameMapper = moduleNameMapper;
        this.logic = logic;
        this.logicDisplay = logicDisplay;
        this.selectedValues = [];
        this.options = [];
        this.status = '';
        this.initModule = '';
        this.search = (text) => {
            if (text === '') {
                return of([]);
            }
            this.status = 'searching';
            return this.relateService.search(text, this.getRelateFieldName()).pipe(tap(() => this.status = 'found'), catchError(() => {
                this.status = 'error';
                return of([]);
            }), map(records => {
                if (!records || records.length < 1) {
                    this.status = 'not-found';
                    return [];
                }
                const flatRecords = [];
                records.forEach((record) => {
                    if (record && record.attributes) {
                        flatRecords.push(record.attributes);
                    }
                });
                this.status = '';
                return flatRecords;
            }));
        };
    }
    get module() {
        if (!this.record || !this.record.module) {
            return null;
        }
        return this.record.module;
    }
    ngOnInit() {
        super.ngOnInit();
        this.init();
        this.subs.push(this.field.valueChanges$.subscribe(() => {
            this.onModuleChange();
        }));
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    onModuleChange() {
        const currentModule = this.initModule;
        const newModule = this?.field?.definition?.module ?? '';
        if (currentModule === newModule) {
            return;
        }
        this.initModule = newModule;
        if (currentModule === '' && currentModule !== newModule) {
            this.init();
        }
        if (newModule === '') {
            this.status = 'no-module';
        }
        else {
            this.init();
            this.status = '';
            this.selectedValues = [];
            this.options = [];
        }
    }
    getRelateFieldName() {
        if (!this.field?.definition?.metadata?.relateSearchField) {
            return (this.field && this.field.definition && this.field.definition.rname) || 'name';
        }
        return this.field.definition.metadata.relateSearchField;
    }
    getRelateIdField() {
        return (this.field && this.field.definition && this.field.definition.id_name) || '';
    }
    getRelatedModule() {
        const legacyName = (this.field && this.field.definition && this.field.definition.module) || '';
        if (!legacyName) {
            return '';
        }
        return this.moduleNameMapper.toFrontend(legacyName);
    }
    getMessage() {
        const messages = {
            searching: 'LBL_SEARCHING',
            'not-found': 'LBL_NOT_FOUND',
            error: 'LBL_SEARCH_ERROR',
            found: 'LBL_FOUND',
            'no-module': 'LBL_NO_MODULE_SELECTED'
        };
        if (messages[this.status]) {
            return messages[this.status];
        }
        return '';
    }
    getInvalidClass() {
        if (this.validateOnlyOnSubmit ? this.isInvalid() : (this.field.formControl.invalid && this.field.formControl.touched)) {
            return 'is-invalid';
        }
        if (this.hasSearchError()) {
            return 'is-invalid';
        }
        return '';
    }
    hasSearchError() {
        return this.status === 'error' || this.status === 'not-found';
    }
    resetStatus() {
        this.status = '';
    }
    getPlaceholderLabel() {
        return this.languages.getAppString('LBL_TYPE_TO_SEARCH') || '';
    }
    init() {
        this.initModule = this?.field?.definition?.module ?? '';
        if (this.relateService) {
            this.relateService.init(this.getRelatedModule());
        }
    }
    buildRelate(id, relateValue) {
        const relate = { id };
        if (this.getRelateFieldName()) {
            relate[this.getRelateFieldName()] = relateValue;
        }
        return relate;
    }
    static { this.ɵfac = function BaseRelateComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BaseRelateComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore), i0.ɵɵdirectiveInject(i2.DataTypeFormatter), i0.ɵɵdirectiveInject(i3.RelateService), i0.ɵɵdirectiveInject(i4.ModuleNameMapper), i0.ɵɵdirectiveInject(i5.FieldLogicManager), i0.ɵɵdirectiveInject(i6.FieldLogicDisplayManager)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BaseRelateComponent, selectors: [["ng-component"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function BaseRelateComponent_Template(rf, ctx) { }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseRelateComponent, [{
        type: Component,
        args: [{ template: '' }]
    }], () => [{ type: i1.LanguageStore }, { type: i2.DataTypeFormatter }, { type: i3.RelateService }, { type: i4.ModuleNameMapper }, { type: i5.FieldLogicManager }, { type: i6.FieldLogicDisplayManager }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BaseRelateComponent, { className: "BaseRelateComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1yZWxhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2ZpZWxkcy9iYXNlL2Jhc2UtcmVsYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUFhLEVBQUUsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUNwQyxPQUFPLEVBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUdwRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSx5RUFBeUUsQ0FBQztBQUN6RyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSx1REFBdUQsQ0FBQztBQUN4RixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDbEUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQzFFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLG9DQUFvQyxDQUFDO0FBQ3JFLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLG9EQUFvRCxDQUFDOzs7Ozs7OztBQUc1RixNQUFNLE9BQU8sbUJBQW9CLFNBQVEsa0JBQWtCO0lBT3ZELFlBQ2MsU0FBd0IsRUFDeEIsYUFBZ0MsRUFDaEMsYUFBNEIsRUFDNUIsZ0JBQWtDLEVBQ2xDLEtBQXdCLEVBQ3hCLFlBQXNDO1FBRWhELEtBQUssQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBUGhDLGNBQVMsR0FBVCxTQUFTLENBQWU7UUFDeEIsa0JBQWEsR0FBYixhQUFhLENBQW1CO1FBQ2hDLGtC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LE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELG1CQUFtQjtRQUNmLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbkUsQ0FBQztJQUVTLElBQUk7UUFFVixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFFeEQsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztRQUNyRCxDQUFDO0lBQ0wsQ0FBQztJQUVTLFdBQVcsQ0FBQyxFQUFVLEVBQUUsV0FBbUI7UUFDakQsTUFBTSxNQUFNLEdBQUcsRUFBQyxFQUFFLEVBQUMsQ0FBQztRQUVwQixJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLENBQUM7WUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDO1FBQ3BELENBQUM7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO29IQXBMUSxtQkFBbUI7b0VBQW5CLG1CQUFtQjs7aUZBQW5CLG1CQUFtQjtjQUQvQixTQUFTO2VBQUMsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFDOztrRkFDWixtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGUsIG9mfSBmcm9tICdyeGpzJztcbmltcG9ydCB7Y2F0Y2hFcnJvciwgbWFwLCB0YXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7QXR0cmlidXRlTWFwfSBmcm9tICcuLi8uLi9jb21tb24vcmVjb3JkL3JlY29yZC5tb2RlbCc7XG5pbXBvcnQge1JlY29yZH0gZnJvbSAnLi4vLi4vY29tbW9uL3JlY29yZC9yZWNvcmQubW9kZWwnO1xuaW1wb3J0IHtNb2R1bGVOYW1lTWFwcGVyfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL21vZHVsZS1uYW1lLW1hcHBlci9tb2R1bGUtbmFtZS1tYXBwZXIuc2VydmljZSc7XG5pbXBvcnQge0Jhc2VGaWVsZENvbXBvbmVudH0gZnJvbSAnLi9iYXNlLWZpZWxkLmNvbXBvbmVudCc7XG5pbXBvcnQge0RhdGFUeXBlRm9ybWF0dGVyfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mb3JtYXR0ZXJzL2RhdGEtdHlwZS5mb3JtYXR0ZXIuc2VydmljZSc7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7UmVsYXRlU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvcmVjb3JkL3JlbGF0ZS9yZWxhdGUuc2VydmljZSc7XG5pbXBvcnQge0ZpZWxkTG9naWNNYW5hZ2VyfSBmcm9tICcuLi9maWVsZC1sb2dpYy9maWVsZC1sb2dpYy5tYW5hZ2VyJztcbmltcG9ydCB7RmllbGRMb2dpY0Rpc3BsYXlNYW5hZ2VyfSBmcm9tICcuLi9maWVsZC1sb2dpYy1kaXNwbGF5L2ZpZWxkLWxvZ2ljLWRpc3BsYXkubWFuYWdlcic7XG5cbkBDb21wb25lbnQoe3RlbXBsYXRlOiAnJ30pXG5leHBvcnQgY2xhc3MgQmFzZVJlbGF0ZUNvbXBvbmVudCBleHRlbmRzIEJhc2VGaWVsZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBzZWxlY3RlZFZhbHVlczogQXR0cmlidXRlTWFwW10gPSBbXTtcbiAgICBvcHRpb25zOiBBdHRyaWJ1dGVNYXBbXSA9IFtdO1xuXG4gICAgc3RhdHVzOiAnJyB8ICdzZWFyY2hpbmcnIHwgJ25vdC1mb3VuZCcgfCAnZXJyb3InIHwgJ2ZvdW5kJyB8ICduby1tb2R1bGUnID0gJyc7XG4gICAgaW5pdE1vZHVsZSA9ICcnO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBsYW5ndWFnZXM6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCB0eXBlRm9ybWF0dGVyOiBEYXRhVHlwZUZvcm1hdHRlcixcbiAgICAgICAgcHJvdGVjdGVkIHJlbGF0ZVNlcnZpY2U6IFJlbGF0ZVNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBtb2R1bGVOYW1lTWFwcGVyOiBNb2R1bGVOYW1lTWFwcGVyLFxuICAgICAgICBwcm90ZWN0ZWQgbG9naWM6IEZpZWxkTG9naWNNYW5hZ2VyLFxuICAgICAgICBwcm90ZWN0ZWQgbG9naWNEaXNwbGF5OiBGaWVsZExvZ2ljRGlzcGxheU1hbmFnZXJcbiAgICApIHtcbiAgICAgICAgc3VwZXIodHlwZUZvcm1hdHRlciwgbG9naWMsIGxvZ2ljRGlzcGxheSk7XG4gICAgfVxuXG4gICAgZ2V0IG1vZHVsZSgpOiBzdHJpbmcge1xuICAgICAgICBpZiAoIXRoaXMucmVjb3JkIHx8ICF0aGlzLnJlY29yZC5tb2R1bGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVjb3JkLm1vZHVsZTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgICAgICBzdXBlci5uZ09uSW5pdCgpO1xuXG4gICAgICAgIHRoaXMuaW5pdCgpO1xuXG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMuZmllbGQudmFsdWVDaGFuZ2VzJC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vbk1vZHVsZUNoYW5nZSgpO1xuICAgICAgICB9KSk7XG4gICAgfVxuXG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdWJzLmZvckVhY2goc3ViID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcbiAgICB9XG5cbiAgICBvbk1vZHVsZUNoYW5nZSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY3VycmVudE1vZHVsZSA9IHRoaXMuaW5pdE1vZHVsZTtcbiAgICAgICAgY29uc3QgbmV3TW9kdWxlID0gdGhpcz8uZmllbGQ/LmRlZmluaXRpb24/Lm1vZHVsZSA/PyAnJztcblxuICAgICAgICBpZiAoY3VycmVudE1vZHVsZSA9PT0gbmV3TW9kdWxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluaXRNb2R1bGUgPSBuZXdNb2R1bGU7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRNb2R1bGUgPT09ICcnICYmIGN1cnJlbnRNb2R1bGUgIT09IG5ld01vZHVsZSkge1xuICAgICAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV3TW9kdWxlID09PSAnJykge1xuICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSAnbm8tbW9kdWxlJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSAnJztcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZXMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IFtdO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWFyY2ggPSAodGV4dDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+ID0+IHtcblxuICAgICAgICBpZih0ZXh0ID09PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuIG9mKFtdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3RhdHVzID0gJ3NlYXJjaGluZyc7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVsYXRlU2VydmljZS5zZWFyY2godGV4dCwgdGhpcy5nZXRSZWxhdGVGaWVsZE5hbWUoKSkucGlwZShcbiAgICAgICAgICAgIHRhcCgoKSA9PiB0aGlzLnN0YXR1cyA9ICdmb3VuZCcpLFxuICAgICAgICAgICAgY2F0Y2hFcnJvcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSAnZXJyb3InO1xuICAgICAgICAgICAgICAgIHJldHVybiBvZihbXSk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIG1hcChyZWNvcmRzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlY29yZHMgfHwgcmVjb3Jkcy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gJ25vdC1mb3VuZCc7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBmbGF0UmVjb3JkczogQXR0cmlidXRlTWFwW10gPSBbXTtcblxuICAgICAgICAgICAgICAgIHJlY29yZHMuZm9yRWFjaCgocmVjb3JkOiBSZWNvcmQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlY29yZCAmJiByZWNvcmQuYXR0cmlidXRlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxhdFJlY29yZHMucHVzaChyZWNvcmQuYXR0cmlidXRlcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gJyc7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZmxhdFJlY29yZHM7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgZ2V0UmVsYXRlRmllbGROYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICghdGhpcy5maWVsZD8uZGVmaW5pdGlvbj8ubWV0YWRhdGE/LnJlbGF0ZVNlYXJjaEZpZWxkKSB7XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMuZmllbGQgJiYgdGhpcy5maWVsZC5kZWZpbml0aW9uICYmIHRoaXMuZmllbGQuZGVmaW5pdGlvbi5ybmFtZSkgfHwgJ25hbWUnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZmllbGQuZGVmaW5pdGlvbi5tZXRhZGF0YS5yZWxhdGVTZWFyY2hGaWVsZDtcbiAgICB9XG5cbiAgICBnZXRSZWxhdGVJZEZpZWxkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAodGhpcy5maWVsZCAmJiB0aGlzLmZpZWxkLmRlZmluaXRpb24gJiYgdGhpcy5maWVsZC5kZWZpbml0aW9uLmlkX25hbWUpIHx8ICcnO1xuICAgIH1cblxuICAgIGdldFJlbGF0ZWRNb2R1bGUoKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgbGVnYWN5TmFtZSA9ICh0aGlzLmZpZWxkICYmIHRoaXMuZmllbGQuZGVmaW5pdGlvbiAmJiB0aGlzLmZpZWxkLmRlZmluaXRpb24ubW9kdWxlKSB8fCAnJztcbiAgICAgICAgaWYgKCFsZWdhY3lOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5tb2R1bGVOYW1lTWFwcGVyLnRvRnJvbnRlbmQobGVnYWN5TmFtZSk7XG4gICAgfVxuXG4gICAgZ2V0TWVzc2FnZSgpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBtZXNzYWdlcyA9IHtcbiAgICAgICAgICAgIHNlYXJjaGluZzogJ0xCTF9TRUFSQ0hJTkcnLFxuICAgICAgICAgICAgJ25vdC1mb3VuZCc6ICdMQkxfTk9UX0ZPVU5EJyxcbiAgICAgICAgICAgIGVycm9yOiAnTEJMX1NFQVJDSF9FUlJPUicsXG4gICAgICAgICAgICBmb3VuZDogJ0xCTF9GT1VORCcsXG4gICAgICAgICAgICAnbm8tbW9kdWxlJzogJ0xCTF9OT19NT0RVTEVfU0VMRUNURUQnXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKG1lc3NhZ2VzW3RoaXMuc3RhdHVzXSkge1xuICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2VzW3RoaXMuc3RhdHVzXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBnZXRJbnZhbGlkQ2xhc3MoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdGVPbmx5T25TdWJtaXQgPyB0aGlzLmlzSW52YWxpZCgpIDogKHRoaXMuZmllbGQuZm9ybUNvbnRyb2wuaW52YWxpZCAmJiB0aGlzLmZpZWxkLmZvcm1Db250cm9sLnRvdWNoZWQpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2lzLWludmFsaWQnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaGFzU2VhcmNoRXJyb3IoKSkge1xuICAgICAgICAgICAgcmV0dXJuICdpcy1pbnZhbGlkJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBoYXNTZWFyY2hFcnJvcigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAnZXJyb3InIHx8IHRoaXMuc3RhdHVzID09PSAnbm90LWZvdW5kJztcbiAgICB9XG5cbiAgICByZXNldFN0YXR1cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSAnJztcbiAgICB9XG5cbiAgICBnZXRQbGFjZWhvbGRlckxhYmVsKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmxhbmd1YWdlcy5nZXRBcHBTdHJpbmcoJ0xCTF9UWVBFX1RPX1NFQVJDSCcpIHx8ICcnO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBpbml0KCk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMuaW5pdE1vZHVsZSA9IHRoaXM/LmZpZWxkPy5kZWZpbml0aW9uPy5tb2R1bGUgPz8gJyc7XG5cbiAgICAgICAgaWYgKHRoaXMucmVsYXRlU2VydmljZSkge1xuICAgICAgICAgICAgdGhpcy5yZWxhdGVTZXJ2aWNlLmluaXQodGhpcy5nZXRSZWxhdGVkTW9kdWxlKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGJ1aWxkUmVsYXRlKGlkOiBzdHJpbmcsIHJlbGF0ZVZhbHVlOiBzdHJpbmcpOiBhbnkge1xuICAgICAgICBjb25zdCByZWxhdGUgPSB7aWR9O1xuXG4gICAgICAgIGlmICh0aGlzLmdldFJlbGF0ZUZpZWxkTmFtZSgpKSB7XG4gICAgICAgICAgICByZWxhdGVbdGhpcy5nZXRSZWxhdGVGaWVsZE5hbWUoKV0gPSByZWxhdGVWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZWxhdGU7XG4gICAgfVxuXG59XG4iXX0=