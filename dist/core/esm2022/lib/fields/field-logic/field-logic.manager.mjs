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
import { Injectable } from '@angular/core';
import { BaseActionManager } from '../../services/actions/base-action-manager.service';
import { FieldLogicDisplayTypeAction } from './display-type/field-logic-display-type.action';
import { EmailPrimarySelectAction } from './email-primary-select/email-primary-select.action';
import { RequiredAction } from './required/required.action';
import { UpdateBaseCurrencyAction } from './currency-conversion/update-base-currency.action';
import { UpdateCurrencyAction } from './currency-conversion/update-currency.action';
import { UpdateFlexRelateModuleAction } from './update-flex-relate-module/update-flex-relate-module.action';
import { UpdateValueAction } from './update-value/update-value.action';
import { UpdateValueBackendAction } from './update-value-backend/update-value-backend.action';
import { DisplayTypeBackendAction } from './display-type-backend/display-type-backend.action';
import * as i0 from "@angular/core";
import * as i1 from "./display-type/field-logic-display-type.action";
import * as i2 from "./email-primary-select/email-primary-select.action";
import * as i3 from "./required/required.action";
import * as i4 from "./currency-conversion/update-base-currency.action";
import * as i5 from "./currency-conversion/update-currency.action";
import * as i6 from "./update-value/update-value.action";
import * as i7 from "./update-flex-relate-module/update-flex-relate-module.action";
import * as i8 from "./update-value-backend/update-value-backend.action";
import * as i9 from "./display-type-backend/display-type-backend.action";
export class FieldLogicManager extends BaseActionManager {
    constructor(displayType, emailPrimarySelectAction, required, updateBaseCurrency, updateCurrency, updateValue, updateFlexRelateModule, updateValueBackend, dislayTypeBackend) {
        super();
        this.actions = {
            edit: {},
            create: {},
            list: {},
            detail: {},
            massupdate: {},
            filter: {}
        };
        displayType.modes.forEach(mode => this.actions[mode][displayType.key] = displayType);
        emailPrimarySelectAction.modes.forEach(mode => this.actions[mode][emailPrimarySelectAction.key] = emailPrimarySelectAction);
        required.modes.forEach(mode => this.actions[mode][required.key] = required);
        updateBaseCurrency.modes.forEach(mode => this.actions[mode][updateBaseCurrency.key] = updateBaseCurrency);
        updateCurrency.modes.forEach(mode => this.actions[mode][updateCurrency.key] = updateCurrency);
        updateFlexRelateModule.modes.forEach(mode => this.actions[mode][updateFlexRelateModule.key] = updateFlexRelateModule);
        updateValue.modes.forEach(mode => this.actions[mode][updateValue.key] = updateValue);
        updateValueBackend.modes.forEach(mode => this.actions[mode][updateValueBackend.key] = updateValueBackend);
        dislayTypeBackend.modes.forEach(mode => this.actions[mode][dislayTypeBackend.key] = dislayTypeBackend);
    }
    /**
     * Run logic for the given field
     * @param {object} field
     * @param {object} mode
     * @param {object} record
     * @param triggeringStatus
     * @param dependentField
     */
    runLogic(field, mode, record, triggeringStatus = '', dependentField = {}) {
        if (!field.logic) {
            return;
        }
        const actions = Object.keys(field.logic).map(key => field.logic[key]);
        const modeActions = this.parseModeActions(actions, mode, triggeringStatus, dependentField);
        const context = {
            record,
            field,
            module: record.module
        };
        modeActions.forEach(action => {
            this.runAction(action, mode, context);
        });
    }
    /**
     * Run the action using given context
     * @param action
     * @param mode
     * @param context
     */
    runAction(action, mode, context = null) {
        this.runFrontEndAction(action, mode, context);
    }
    /**
     * Run front end action
     * @param {object} action
     * @param {object} mode
     * @param {object} context
     */
    runFrontEndAction(action, mode, context = null) {
        const data = this.buildActionData(action, context);
        this.run(action, mode, data);
    }
    /**
     * Get module name
     * @param {object} context
     */
    getModuleName(context) {
        return context.module;
    }
    buildActionData(action, context) {
        return {
            field: context.field,
            record: (context && context.record) || null,
        };
    }
    /**
     * Parse mode actions
     * @param declaredActions
     * @param mode
     * @param triggeringStatus
     */
    parseModeActions(declaredActions, mode, triggeringStatus, fieldDependent) {
        if (!declaredActions) {
            return [];
        }
        const availableActions = {
            list: [],
            detail: [],
            edit: [],
            create: [],
            massupdate: [],
            filter: [],
        };
        if (declaredActions && declaredActions.length) {
            declaredActions.forEach(action => {
                if (!action.modes || !action.modes.length) {
                    return;
                }
                action.modes.forEach(actionMode => {
                    if (!availableActions[actionMode] && !action.asyncProcess) {
                        return;
                    }
                    availableActions[actionMode].push(action);
                });
            });
        }
        const actions = [];
        const defaultTriggeringStatus = ['onDependencyChange'];
        availableActions[mode].forEach(action => {
            const dependentFieldsKeys = Object.keys(action?.params?.activeOnFields ?? {});
            const frontendActionTriggeringStatus = this?.actions[mode][action.key]?.getTriggeringStatus() ?? null;
            let actionTriggeringStatus = action?.triggeringStatus ?? frontendActionTriggeringStatus ?? defaultTriggeringStatus;
            if (actionTriggeringStatus.includes('onValueChange')) {
                actionTriggeringStatus = actionTriggeringStatus.filter(value => value !== 'onValueChange');
                actionTriggeringStatus = ['onAnyLogic', ...actionTriggeringStatus];
            }
            if (actionTriggeringStatus.includes('onAnyLogic') && triggeringStatus !== 'onFieldInitialize') {
                actions.push(action);
                return;
            }
            if (triggeringStatus && !actionTriggeringStatus.includes(triggeringStatus)) {
                return;
            }
            if (actionTriggeringStatus.includes('onDependencyChange') && !dependentFieldsKeys?.includes(fieldDependent.name)) {
                return;
            }
            actions.push(action);
        });
        return actions;
    }
    static { this.ɵfac = function FieldLogicManager_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FieldLogicManager)(i0.ɵɵinject(i1.FieldLogicDisplayTypeAction), i0.ɵɵinject(i2.EmailPrimarySelectAction), i0.ɵɵinject(i3.RequiredAction), i0.ɵɵinject(i4.UpdateBaseCurrencyAction), i0.ɵɵinject(i5.UpdateCurrencyAction), i0.ɵɵinject(i6.UpdateValueAction), i0.ɵɵinject(i7.UpdateFlexRelateModuleAction), i0.ɵɵinject(i8.UpdateValueBackendAction), i0.ɵɵinject(i9.DisplayTypeBackendAction)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FieldLogicManager, factory: FieldLogicManager.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FieldLogicManager, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.FieldLogicDisplayTypeAction }, { type: i2.EmailPrimarySelectAction }, { type: i3.RequiredAction }, { type: i4.UpdateBaseCurrencyAction }, { type: i5.UpdateCurrencyAction }, { type: i6.UpdateValueAction }, { type: i7.UpdateFlexRelateModuleAction }, { type: i8.UpdateValueBackendAction }, { type: i9.DisplayTypeBackendAction }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtbG9naWMubWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9maWVsZHMvZmllbGQtbG9naWMvZmllbGQtbG9naWMubWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxvREFBb0QsQ0FBQztBQU1yRixPQUFPLEVBQUMsMkJBQTJCLEVBQUMsTUFBTSxnREFBZ0QsQ0FBQztBQUMzRixPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxvREFBb0QsQ0FBQztBQUM1RixPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDMUQsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sbURBQW1ELENBQUM7QUFDM0YsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sOENBQThDLENBQUM7QUFDbEYsT0FBTyxFQUFDLDRCQUE0QixFQUFDLE1BQU0sOERBQThELENBQUM7QUFDMUcsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDckUsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sb0RBQW9ELENBQUM7QUFDNUYsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sb0RBQW9ELENBQUM7Ozs7Ozs7Ozs7O0FBSzVGLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxpQkFBdUM7SUFXMUUsWUFDSSxXQUF3QyxFQUN4Qyx3QkFBa0QsRUFDbEQsUUFBd0IsRUFDeEIsa0JBQTRDLEVBQzVDLGNBQW9DLEVBQ3BDLFdBQThCLEVBQzlCLHNCQUFvRCxFQUNwRCxrQkFBNEMsRUFDNUMsaUJBQTJDO1FBRTNDLEtBQUssRUFBRSxDQUFDO1FBcEJaLFlBQU8sR0FB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QUFHLE1BQU0sRUFBRSxnQkFBZ0IsSUFBSSw4QkFBOEIsSUFBSSx1QkFBdUIsQ0FBQztZQUVuSCxJQUFJLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDO2dCQUNuRCxzQkFBc0IsR0FBRyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEtBQUssZUFBZSxDQUFDLENBQUM7Z0JBQzNGLHNCQUFzQixHQUFHLENBQUMsWUFBWSxFQUFFLEdBQUcsc0JBQXNCLENBQUMsQ0FBQztZQUN2RSxDQUFDO1lBRUQsSUFBSSxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksZ0JBQWdCLEtBQUssbUJBQW1CLEVBQUUsQ0FBQztnQkFDNUYsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDckIsT0FBTztZQUNYLENBQUM7WUFFRCxJQUFJLGdCQUFnQixJQUFJLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQztnQkFDekUsT0FBTztZQUNYLENBQUM7WUFFRCxJQUFJLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUMvRyxPQUFPO1lBQ1gsQ0FBQztZQUVELE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO2tIQXRLUSxpQkFBaUI7dUVBQWpCLGlCQUFpQixXQUFqQixpQkFBaUIsbUJBRmQsTUFBTTs7aUZBRVQsaUJBQWlCO2NBSDdCLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmFzZUFjdGlvbk1hbmFnZXJ9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FjdGlvbnMvYmFzZS1hY3Rpb24tbWFuYWdlci5zZXJ2aWNlJztcbmltcG9ydCB7RmllbGRMb2dpY0FjdGlvbkRhdGEsIEZpZWxkTG9naWNBY3Rpb25IYW5kbGVyTWFwfSBmcm9tICcuL2ZpZWxkLWxvZ2ljLmFjdGlvbic7XG5pbXBvcnQge0FjdGlvbiwgQWN0aW9uQ29udGV4dCwgTW9kZUFjdGlvbnN9IGZyb20gJy4uLy4uL2NvbW1vbi9hY3Rpb25zL2FjdGlvbi5tb2RlbCc7XG5pbXBvcnQge0ZpZWxkfSBmcm9tICcuLi8uLi9jb21tb24vcmVjb3JkL2ZpZWxkLm1vZGVsJztcbmltcG9ydCB7UmVjb3JkfSBmcm9tICcuLi8uLi9jb21tb24vcmVjb3JkL3JlY29yZC5tb2RlbCc7XG5pbXBvcnQge1ZpZXdNb2RlfSBmcm9tICcuLi8uLi9jb21tb24vdmlld3Mvdmlldy5tb2RlbCc7XG5pbXBvcnQge0ZpZWxkTG9naWNEaXNwbGF5VHlwZUFjdGlvbn0gZnJvbSAnLi9kaXNwbGF5LXR5cGUvZmllbGQtbG9naWMtZGlzcGxheS10eXBlLmFjdGlvbic7XG5pbXBvcnQge0VtYWlsUHJpbWFyeVNlbGVjdEFjdGlvbn0gZnJvbSAnLi9lbWFpbC1wcmltYXJ5LXNlbGVjdC9lbWFpbC1wcmltYXJ5LXNlbGVjdC5hY3Rpb24nO1xuaW1wb3J0IHtSZXF1aXJlZEFjdGlvbn0gZnJvbSAnLi9yZXF1aXJlZC9yZXF1aXJlZC5hY3Rpb24nO1xuaW1wb3J0IHtVcGRhdGVCYXNlQ3VycmVuY3lBY3Rpb259IGZyb20gJy4vY3VycmVuY3ktY29udmVyc2lvbi91cGRhdGUtYmFzZS1jdXJyZW5jeS5hY3Rpb24nO1xuaW1wb3J0IHtVcGRhdGVDdXJyZW5jeUFjdGlvbn0gZnJvbSAnLi9jdXJyZW5jeS1jb252ZXJzaW9uL3VwZGF0ZS1jdXJyZW5jeS5hY3Rpb24nO1xuaW1wb3J0IHtVcGRhdGVGbGV4UmVsYXRlTW9kdWxlQWN0aW9ufSBmcm9tICcuL3VwZGF0ZS1mbGV4LXJlbGF0ZS1tb2R1bGUvdXBkYXRlLWZsZXgtcmVsYXRlLW1vZHVsZS5hY3Rpb24nO1xuaW1wb3J0IHtVcGRhdGVWYWx1ZUFjdGlvbn0gZnJvbSAnLi91cGRhdGUtdmFsdWUvdXBkYXRlLXZhbHVlLmFjdGlvbic7XG5pbXBvcnQge1VwZGF0ZVZhbHVlQmFja2VuZEFjdGlvbn0gZnJvbSAnLi91cGRhdGUtdmFsdWUtYmFja2VuZC91cGRhdGUtdmFsdWUtYmFja2VuZC5hY3Rpb24nO1xuaW1wb3J0IHtEaXNwbGF5VHlwZUJhY2tlbmRBY3Rpb259IGZyb20gJy4vZGlzcGxheS10eXBlLWJhY2tlbmQvZGlzcGxheS10eXBlLWJhY2tlbmQuYWN0aW9uJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBGaWVsZExvZ2ljTWFuYWdlciBleHRlbmRzIEJhc2VBY3Rpb25NYW5hZ2VyPEZpZWxkTG9naWNBY3Rpb25EYXRhPiB7XG5cbiAgICBhY3Rpb25zOiB7IFtrZXk6IHN0cmluZ106IEZpZWxkTG9naWNBY3Rpb25IYW5kbGVyTWFwIH0gPSB7XG4gICAgICAgIGVkaXQ6IHt9IGFzIEZpZWxkTG9naWNBY3Rpb25IYW5kbGVyTWFwLFxuICAgICAgICBjcmVhdGU6IHt9IGFzIEZpZWxkTG9naWNBY3Rpb25IYW5kbGVyTWFwLFxuICAgICAgICBsaXN0OiB7fSBhcyBGaWVsZExvZ2ljQWN0aW9uSGFuZGxlck1hcCxcbiAgICAgICAgZGV0YWlsOiB7fSBhcyBGaWVsZExvZ2ljQWN0aW9uSGFuZGxlck1hcCxcbiAgICAgICAgbWFzc3VwZGF0ZToge30gYXMgRmllbGRMb2dpY0FjdGlvbkhhbmRsZXJNYXAsXG4gICAgICAgIGZpbHRlcjoge30gYXMgRmllbGRMb2dpY0FjdGlvbkhhbmRsZXJNYXBcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGRpc3BsYXlUeXBlOiBGaWVsZExvZ2ljRGlzcGxheVR5cGVBY3Rpb24sXG4gICAgICAgIGVtYWlsUHJpbWFyeVNlbGVjdEFjdGlvbjogRW1haWxQcmltYXJ5U2VsZWN0QWN0aW9uLFxuICAgICAgICByZXF1aXJlZDogUmVxdWlyZWRBY3Rpb24sXG4gICAgICAgIHVwZGF0ZUJhc2VDdXJyZW5jeTogVXBkYXRlQmFzZUN1cnJlbmN5QWN0aW9uLFxuICAgICAgICB1cGRhdGVDdXJyZW5jeTogVXBkYXRlQ3VycmVuY3lBY3Rpb24sXG4gICAgICAgIHVwZGF0ZVZhbHVlOiBVcGRhdGVWYWx1ZUFjdGlvbixcbiAgICAgICAgdXBkYXRlRmxleFJlbGF0ZU1vZHVsZTogVXBkYXRlRmxleFJlbGF0ZU1vZHVsZUFjdGlvbixcbiAgICAgICAgdXBkYXRlVmFsdWVCYWNrZW5kOiBVcGRhdGVWYWx1ZUJhY2tlbmRBY3Rpb24sXG4gICAgICAgIGRpc2xheVR5cGVCYWNrZW5kOiBEaXNwbGF5VHlwZUJhY2tlbmRBY3Rpb25cbiAgICApIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgZGlzcGxheVR5cGUubW9kZXMuZm9yRWFjaChtb2RlID0+IHRoaXMuYWN0aW9uc1ttb2RlXVtkaXNwbGF5VHlwZS5rZXldID0gZGlzcGxheVR5cGUpO1xuICAgICAgICBlbWFpbFByaW1hcnlTZWxlY3RBY3Rpb24ubW9kZXMuZm9yRWFjaChtb2RlID0+IHRoaXMuYWN0aW9uc1ttb2RlXVtlbWFpbFByaW1hcnlTZWxlY3RBY3Rpb24ua2V5XSA9IGVtYWlsUHJpbWFyeVNlbGVjdEFjdGlvbik7XG4gICAgICAgIHJlcXVpcmVkLm1vZGVzLmZvckVhY2gobW9kZSA9PiB0aGlzLmFjdGlvbnNbbW9kZV1bcmVxdWlyZWQua2V5XSA9IHJlcXVpcmVkKTtcbiAgICAgICAgdXBkYXRlQmFzZUN1cnJlbmN5Lm1vZGVzLmZvckVhY2gobW9kZSA9PiB0aGlzLmFjdGlvbnNbbW9kZV1bdXBkYXRlQmFzZUN1cnJlbmN5LmtleV0gPSB1cGRhdGVCYXNlQ3VycmVuY3kpO1xuICAgICAgICB1cGRhdGVDdXJyZW5jeS5tb2Rlcy5mb3JFYWNoKG1vZGUgPT4gdGhpcy5hY3Rpb25zW21vZGVdW3VwZGF0ZUN1cnJlbmN5LmtleV0gPSB1cGRhdGVDdXJyZW5jeSk7XG4gICAgICAgIHVwZGF0ZUZsZXhSZWxhdGVNb2R1bGUubW9kZXMuZm9yRWFjaChtb2RlID0+IHRoaXMuYWN0aW9uc1ttb2RlXVt1cGRhdGVGbGV4UmVsYXRlTW9kdWxlLmtleV0gPSB1cGRhdGVGbGV4UmVsYXRlTW9kdWxlKTtcbiAgICAgICAgdXBkYXRlVmFsdWUubW9kZXMuZm9yRWFjaChtb2RlID0+IHRoaXMuYWN0aW9uc1ttb2RlXVt1cGRhdGVWYWx1ZS5rZXldID0gdXBkYXRlVmFsdWUpO1xuICAgICAgICB1cGRhdGVWYWx1ZUJhY2tlbmQubW9kZXMuZm9yRWFjaChtb2RlID0+IHRoaXMuYWN0aW9uc1ttb2RlXVt1cGRhdGVWYWx1ZUJhY2tlbmQua2V5XSA9IHVwZGF0ZVZhbHVlQmFja2VuZCk7XG4gICAgICAgIGRpc2xheVR5cGVCYWNrZW5kLm1vZGVzLmZvckVhY2gobW9kZSA9PiB0aGlzLmFjdGlvbnNbbW9kZV1bZGlzbGF5VHlwZUJhY2tlbmQua2V5XSA9IGRpc2xheVR5cGVCYWNrZW5kKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSdW4gbG9naWMgZm9yIHRoZSBnaXZlbiBmaWVsZFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBmaWVsZFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtb2RlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlY29yZFxuICAgICAqIEBwYXJhbSB0cmlnZ2VyaW5nU3RhdHVzXG4gICAgICogQHBhcmFtIGRlcGVuZGVudEZpZWxkXG4gICAgICovXG4gICAgcnVuTG9naWMoZmllbGQ6IEZpZWxkLCBtb2RlOiBWaWV3TW9kZSwgcmVjb3JkOiBSZWNvcmQsIHRyaWdnZXJpbmdTdGF0dXM6IHN0cmluZyA9ICcnLCBkZXBlbmRlbnRGaWVsZDogRmllbGQgPSB7fSBhcyBGaWVsZCk6IHZvaWQge1xuICAgICAgICBpZiAoIWZpZWxkLmxvZ2ljKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhY3Rpb25zID0gT2JqZWN0LmtleXMoZmllbGQubG9naWMpLm1hcChrZXkgPT4gZmllbGQubG9naWNba2V5XSk7XG5cbiAgICAgICAgY29uc3QgbW9kZUFjdGlvbnMgPSB0aGlzLnBhcnNlTW9kZUFjdGlvbnMoYWN0aW9ucywgbW9kZSwgdHJpZ2dlcmluZ1N0YXR1cywgZGVwZW5kZW50RmllbGQpO1xuICAgICAgICBjb25zdCBjb250ZXh0ID0ge1xuICAgICAgICAgICAgcmVjb3JkLFxuICAgICAgICAgICAgZmllbGQsXG4gICAgICAgICAgICBtb2R1bGU6IHJlY29yZC5tb2R1bGVcbiAgICAgICAgfSBhcyBBY3Rpb25Db250ZXh0O1xuXG4gICAgICAgIG1vZGVBY3Rpb25zLmZvckVhY2goYWN0aW9uID0+IHtcbiAgICAgICAgICAgIHRoaXMucnVuQWN0aW9uKGFjdGlvbiwgbW9kZSwgY29udGV4dCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJ1biB0aGUgYWN0aW9uIHVzaW5nIGdpdmVuIGNvbnRleHRcbiAgICAgKiBAcGFyYW0gYWN0aW9uXG4gICAgICogQHBhcmFtIG1vZGVcbiAgICAgKiBAcGFyYW0gY29udGV4dFxuICAgICAqL1xuICAgIHJ1bkFjdGlvbihhY3Rpb246IEFjdGlvbiwgbW9kZTogVmlld01vZGUsIGNvbnRleHQ6IEFjdGlvbkNvbnRleHQgPSBudWxsKTogdm9pZCB7XG4gICAgICAgIHRoaXMucnVuRnJvbnRFbmRBY3Rpb24oYWN0aW9uLCBtb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSdW4gZnJvbnQgZW5kIGFjdGlvblxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBhY3Rpb25cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbW9kZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0XG4gICAgICovXG4gICAgcHJvdGVjdGVkIHJ1bkZyb250RW5kQWN0aW9uKGFjdGlvbjogQWN0aW9uLCBtb2RlOiBWaWV3TW9kZSwgY29udGV4dDogQWN0aW9uQ29udGV4dCA9IG51bGwpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZGF0YTogRmllbGRMb2dpY0FjdGlvbkRhdGEgPSB0aGlzLmJ1aWxkQWN0aW9uRGF0YShhY3Rpb24sIGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMucnVuKGFjdGlvbiwgbW9kZSwgZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IG1vZHVsZSBuYW1lXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0TW9kdWxlTmFtZShjb250ZXh0PzogQWN0aW9uQ29udGV4dCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBjb250ZXh0Lm1vZHVsZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYnVpbGRBY3Rpb25EYXRhKGFjdGlvbjogQWN0aW9uLCBjb250ZXh0PzogQWN0aW9uQ29udGV4dCk6IEZpZWxkTG9naWNBY3Rpb25EYXRhIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZpZWxkOiBjb250ZXh0LmZpZWxkLFxuICAgICAgICAgICAgcmVjb3JkOiAoY29udGV4dCAmJiBjb250ZXh0LnJlY29yZCkgfHwgbnVsbCxcbiAgICAgICAgfSBhcyBGaWVsZExvZ2ljQWN0aW9uRGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZSBtb2RlIGFjdGlvbnNcbiAgICAgKiBAcGFyYW0gZGVjbGFyZWRBY3Rpb25zXG4gICAgICogQHBhcmFtIG1vZGVcbiAgICAgKiBAcGFyYW0gdHJpZ2dlcmluZ1N0YXR1c1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBwYXJzZU1vZGVBY3Rpb25zKGRlY2xhcmVkQWN0aW9uczogQWN0aW9uW10sIG1vZGU6IFZpZXdNb2RlLCB0cmlnZ2VyaW5nU3RhdHVzOiBzdHJpbmcsIGZpZWxkRGVwZW5kZW50OiBGaWVsZCkge1xuICAgICAgICBpZiAoIWRlY2xhcmVkQWN0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYXZhaWxhYmxlQWN0aW9ucyA9IHtcbiAgICAgICAgICAgIGxpc3Q6IFtdLFxuICAgICAgICAgICAgZGV0YWlsOiBbXSxcbiAgICAgICAgICAgIGVkaXQ6IFtdLFxuICAgICAgICAgICAgY3JlYXRlOiBbXSxcbiAgICAgICAgICAgIG1hc3N1cGRhdGU6IFtdLFxuICAgICAgICAgICAgZmlsdGVyOiBbXSxcbiAgICAgICAgfSBhcyBNb2RlQWN0aW9ucztcblxuICAgICAgICBpZiAoZGVjbGFyZWRBY3Rpb25zICYmIGRlY2xhcmVkQWN0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGRlY2xhcmVkQWN0aW9ucy5mb3JFYWNoKGFjdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFhY3Rpb24ubW9kZXMgfHwgIWFjdGlvbi5tb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGFjdGlvbi5tb2Rlcy5mb3JFYWNoKGFjdGlvbk1vZGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWF2YWlsYWJsZUFjdGlvbnNbYWN0aW9uTW9kZV0gJiYgIWFjdGlvbi5hc3luY1Byb2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhdmFpbGFibGVBY3Rpb25zW2FjdGlvbk1vZGVdLnB1c2goYWN0aW9uKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWN0aW9ucyA9IFtdO1xuICAgICAgICBjb25zdCBkZWZhdWx0VHJpZ2dlcmluZ1N0YXR1cyA9IFsnb25EZXBlbmRlbmN5Q2hhbmdlJ107XG5cbiAgICAgICAgYXZhaWxhYmxlQWN0aW9uc1ttb2RlXS5mb3JFYWNoKGFjdGlvbiA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGRlcGVuZGVudEZpZWxkc0tleXMgPSBPYmplY3Qua2V5cyhhY3Rpb24/LnBhcmFtcz8uYWN0aXZlT25GaWVsZHMgPz8ge30pO1xuXG4gICAgICAgICAgICBjb25zdCBmcm9udGVuZEFjdGlvblRyaWdnZXJpbmdTdGF0dXMgPSB0aGlzPy5hY3Rpb25zW21vZGVdW2FjdGlvbi5rZXldPy5nZXRUcmlnZ2VyaW5nU3RhdHVzKCkgPz8gbnVsbDtcblxuICAgICAgICAgICAgbGV0IGFjdGlvblRyaWdnZXJpbmdTdGF0dXMgPSBhY3Rpb24/LnRyaWdnZXJpbmdTdGF0dXMgPz8gZnJvbnRlbmRBY3Rpb25UcmlnZ2VyaW5nU3RhdHVzID8/IGRlZmF1bHRUcmlnZ2VyaW5nU3RhdHVzO1xuXG4gICAgICAgICAgICBpZiAoYWN0aW9uVHJpZ2dlcmluZ1N0YXR1cy5pbmNsdWRlcygnb25WYWx1ZUNoYW5nZScpKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uVHJpZ2dlcmluZ1N0YXR1cyA9IGFjdGlvblRyaWdnZXJpbmdTdGF0dXMuZmlsdGVyKHZhbHVlID0+IHZhbHVlICE9PSAnb25WYWx1ZUNoYW5nZScpO1xuICAgICAgICAgICAgICAgIGFjdGlvblRyaWdnZXJpbmdTdGF0dXMgPSBbJ29uQW55TG9naWMnLCAuLi5hY3Rpb25UcmlnZ2VyaW5nU3RhdHVzXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGFjdGlvblRyaWdnZXJpbmdTdGF0dXMuaW5jbHVkZXMoJ29uQW55TG9naWMnKSAmJiB0cmlnZ2VyaW5nU3RhdHVzICE9PSAnb25GaWVsZEluaXRpYWxpemUnKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9ucy5wdXNoKGFjdGlvbik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHJpZ2dlcmluZ1N0YXR1cyAmJiAhYWN0aW9uVHJpZ2dlcmluZ1N0YXR1cy5pbmNsdWRlcyh0cmlnZ2VyaW5nU3RhdHVzKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGFjdGlvblRyaWdnZXJpbmdTdGF0dXMuaW5jbHVkZXMoJ29uRGVwZW5kZW5jeUNoYW5nZScpICYmICFkZXBlbmRlbnRGaWVsZHNLZXlzPy5pbmNsdWRlcyhmaWVsZERlcGVuZGVudC5uYW1lKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYWN0aW9ucy5wdXNoKGFjdGlvbik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBhY3Rpb25zO1xuICAgIH1cblxufVxuIl19