/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2023 SalesAgility Ltd.
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
import { FieldLogicActionHandler } from '../field-logic.action';
import { ActiveFieldsChecker } from "../../../services/condition-operators/active-fields-checker.service";
import { CurrencyFormatter } from "../../../services/formatters/currency/currency-formatter.service";
import * as i0 from "@angular/core";
import * as i1 from "../../../services/condition-operators/active-fields-checker.service";
import * as i2 from "../../../services/formatters/currency/currency-formatter.service";
export class UpdateValueAction extends FieldLogicActionHandler {
    constructor(activeFieldsChecker, currencyFormatter) {
        super();
        this.activeFieldsChecker = activeFieldsChecker;
        this.currencyFormatter = currencyFormatter;
        this.key = 'updateValue';
        this.modes = ['edit', 'detail', 'list', 'create', 'massupdate', 'filter'];
    }
    run(data, action) {
        const record = data.record;
        const field = data.field;
        if (!record || !field) {
            return;
        }
        const activeOnFields = (action.params && action.params.activeOnFields) || {};
        const relatedFields = Object.keys(activeOnFields);
        const activeOnAttributes = (action.params && action.params.activeOnAttributes) || {};
        const relatedAttributesFields = Object.keys(activeOnAttributes);
        if (!relatedFields.length && !relatedAttributesFields.length) {
            return;
        }
        const targetValue = action.params && action.params.targetValue;
        if (!targetValue) {
            return;
        }
        const isActive = this.activeFieldsChecker.isActive(relatedFields, record, activeOnFields, relatedAttributesFields, activeOnAttributes);
        let value = data.field?.value;
        if (isActive) {
            value = targetValue;
        }
        if (this.isCurrencyField(field)) {
            const options = {
                mode: 'edit',
                fromFormat: 'system'
            };
            value = this.currencyFormatter.toUserFormat(value, options);
        }
        this.updateValue(field, value.toString(), record);
    }
    getTriggeringStatus() {
        return ['onDependencyChange'];
    }
    /**
     * Update the new value
     * @param {object} field
     * @param value
     * @param {object} record
     */
    updateValue(field, value, record) {
        field.value = value.toString();
        field.formControl.setValue(value);
        // re-validate the parent form-control after value update
        record.formGroup.updateValueAndValidity({ onlySelf: true, emitEvent: true });
    }
    isCurrencyField(field) {
        return field.type === 'currency';
    }
    static { this.ɵfac = function UpdateValueAction_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || UpdateValueAction)(i0.ɵɵinject(i1.ActiveFieldsChecker), i0.ɵɵinject(i2.CurrencyFormatter)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: UpdateValueAction, factory: UpdateValueAction.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UpdateValueAction, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.ActiveFieldsChecker }, { type: i2.CurrencyFormatter }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXZhbHVlLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9maWVsZHMvZmllbGQtbG9naWMvdXBkYXRlLXZhbHVlL3VwZGF0ZS12YWx1ZS5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUF1Qix1QkFBdUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBT3BGLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHFFQUFxRSxDQUFDO0FBQ3hHLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGtFQUFrRSxDQUFDOzs7O0FBS25HLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSx1QkFBdUI7SUFLMUQsWUFBc0IsbUJBQXdDLEVBQWEsaUJBQW9DO1FBQzNHLEtBQUssRUFBRSxDQUFDO1FBRFUsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUFhLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFIL0csUUFBRyxHQUFHLGFBQWEsQ0FBQztRQUNwQixVQUFLLEdBQUcsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLFFBQVEsQ0FBZSxDQUFDO0lBSW5GLENBQUM7SUFFRCxHQUFHLENBQUMsSUFBMEIsRUFBRSxNQUFjO1FBQzFDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDM0IsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUV6QixJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDcEIsT0FBTztRQUNYLENBQUM7UUFFRCxNQUFNLGNBQWMsR0FBbUIsQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBb0IsQ0FBQztRQUMvRyxNQUFNLGFBQWEsR0FBYSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRTVELE1BQU0sa0JBQWtCLEdBQXNCLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBdUIsQ0FBQztRQUM3SCxNQUFNLHVCQUF1QixHQUFhLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUUxRSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sSUFBSSxDQUFDLHVCQUF1QixDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzNELE9BQU87UUFDWCxDQUFDO1FBRUQsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUUvRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDZixPQUFPO1FBQ1gsQ0FBQztRQUVELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsdUJBQXVCLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUV2SSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQztRQUU5QixJQUFJLFFBQVEsRUFBRSxDQUFDO1lBQ1gsS0FBSyxHQUFHLFdBQVcsQ0FBQztRQUN4QixDQUFDO1FBRUQsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDOUIsTUFBTSxPQUFPLEdBQUc7Z0JBQ1osSUFBSSxFQUFFLE1BQWtCO2dCQUN4QixVQUFVLEVBQUUsUUFBUTthQUN2QixDQUFBO1lBQ0QsS0FBSyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2hFLENBQUM7UUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFFdEQsQ0FBQztJQUVELG1CQUFtQjtRQUNmLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNPLFdBQVcsQ0FBQyxLQUFZLEVBQUUsS0FBYSxFQUFFLE1BQWM7UUFFN0QsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDL0IsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEMseURBQXlEO1FBQ3pELE1BQU0sQ0FBQyxTQUFTLENBQUMsc0JBQXNCLENBQUMsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFFUyxlQUFlLENBQUMsS0FBWTtRQUNsQyxPQUFPLEtBQUssQ0FBQyxJQUFJLEtBQUssVUFBVSxDQUFDO0lBQ3JDLENBQUM7a0hBekVRLGlCQUFpQjt1RUFBakIsaUJBQWlCLFdBQWpCLGlCQUFpQixtQkFGZCxNQUFNOztpRkFFVCxpQkFBaUI7Y0FIN0IsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjMgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGaWVsZExvZ2ljQWN0aW9uRGF0YSwgRmllbGRMb2dpY0FjdGlvbkhhbmRsZXJ9IGZyb20gJy4uL2ZpZWxkLWxvZ2ljLmFjdGlvbic7XG5pbXBvcnQge0FjdGlvbn0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2FjdGlvbnMvYWN0aW9uLm1vZGVsJztcbmltcG9ydCB7UmVjb3JkfSBmcm9tICcuLi8uLi8uLi9jb21tb24vcmVjb3JkL3JlY29yZC5tb2RlbCc7XG5pbXBvcnQge0ZpZWxkfSBmcm9tICcuLi8uLi8uLi9jb21tb24vcmVjb3JkL2ZpZWxkLm1vZGVsJztcbmltcG9ydCB7U3RyaW5nQXJyYXlNYXB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi90eXBlcy9zdHJpbmctbWFwJztcbmltcG9ydCB7U3RyaW5nQXJyYXlNYXRyaXh9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi90eXBlcy9zdHJpbmctbWF0cml4JztcbmltcG9ydCB7Vmlld01vZGV9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi92aWV3cy92aWV3Lm1vZGVsJztcbmltcG9ydCB7QWN0aXZlRmllbGRzQ2hlY2tlcn0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL2NvbmRpdGlvbi1vcGVyYXRvcnMvYWN0aXZlLWZpZWxkcy1jaGVja2VyLnNlcnZpY2VcIjtcbmltcG9ydCB7Q3VycmVuY3lGb3JtYXR0ZXJ9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9mb3JtYXR0ZXJzL2N1cnJlbmN5L2N1cnJlbmN5LWZvcm1hdHRlci5zZXJ2aWNlXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVXBkYXRlVmFsdWVBY3Rpb24gZXh0ZW5kcyBGaWVsZExvZ2ljQWN0aW9uSGFuZGxlciB7XG5cbiAgICBrZXkgPSAndXBkYXRlVmFsdWUnO1xuICAgIG1vZGVzID0gWydlZGl0JywgJ2RldGFpbCcsICdsaXN0JywgJ2NyZWF0ZScsICdtYXNzdXBkYXRlJywgJ2ZpbHRlciddIGFzIFZpZXdNb2RlW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYWN0aXZlRmllbGRzQ2hlY2tlcjogQWN0aXZlRmllbGRzQ2hlY2tlciwgIHByb3RlY3RlZCBjdXJyZW5jeUZvcm1hdHRlcjogQ3VycmVuY3lGb3JtYXR0ZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBydW4oZGF0YTogRmllbGRMb2dpY0FjdGlvbkRhdGEsIGFjdGlvbjogQWN0aW9uKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHJlY29yZCA9IGRhdGEucmVjb3JkO1xuICAgICAgICBjb25zdCBmaWVsZCA9IGRhdGEuZmllbGQ7XG5cbiAgICAgICAgaWYgKCFyZWNvcmQgfHwgIWZpZWxkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhY3RpdmVPbkZpZWxkczogU3RyaW5nQXJyYXlNYXAgPSAoYWN0aW9uLnBhcmFtcyAmJiBhY3Rpb24ucGFyYW1zLmFjdGl2ZU9uRmllbGRzKSB8fCB7fSBhcyBTdHJpbmdBcnJheU1hcDtcbiAgICAgICAgY29uc3QgcmVsYXRlZEZpZWxkczogc3RyaW5nW10gPSBPYmplY3Qua2V5cyhhY3RpdmVPbkZpZWxkcyk7XG5cbiAgICAgICAgY29uc3QgYWN0aXZlT25BdHRyaWJ1dGVzOiBTdHJpbmdBcnJheU1hdHJpeCA9IChhY3Rpb24ucGFyYW1zICYmIGFjdGlvbi5wYXJhbXMuYWN0aXZlT25BdHRyaWJ1dGVzKSB8fCB7fSBhcyBTdHJpbmdBcnJheU1hdHJpeDtcbiAgICAgICAgY29uc3QgcmVsYXRlZEF0dHJpYnV0ZXNGaWVsZHM6IHN0cmluZ1tdID0gT2JqZWN0LmtleXMoYWN0aXZlT25BdHRyaWJ1dGVzKTtcblxuICAgICAgICBpZiAoIXJlbGF0ZWRGaWVsZHMubGVuZ3RoICYmICFyZWxhdGVkQXR0cmlidXRlc0ZpZWxkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRhcmdldFZhbHVlID0gYWN0aW9uLnBhcmFtcyAmJiBhY3Rpb24ucGFyYW1zLnRhcmdldFZhbHVlO1xuXG4gICAgICAgIGlmICghdGFyZ2V0VmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlzQWN0aXZlID0gdGhpcy5hY3RpdmVGaWVsZHNDaGVja2VyLmlzQWN0aXZlKHJlbGF0ZWRGaWVsZHMsIHJlY29yZCwgYWN0aXZlT25GaWVsZHMsIHJlbGF0ZWRBdHRyaWJ1dGVzRmllbGRzLCBhY3RpdmVPbkF0dHJpYnV0ZXMpO1xuXG4gICAgICAgIGxldCB2YWx1ZSA9IGRhdGEuZmllbGQ/LnZhbHVlO1xuXG4gICAgICAgIGlmIChpc0FjdGl2ZSkge1xuICAgICAgICAgICAgdmFsdWUgPSB0YXJnZXRWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlzQ3VycmVuY3lGaWVsZChmaWVsZCkpIHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgbW9kZTogJ2VkaXQnIGFzIFZpZXdNb2RlLFxuICAgICAgICAgICAgICAgIGZyb21Gb3JtYXQ6ICdzeXN0ZW0nXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuY3VycmVuY3lGb3JtYXR0ZXIudG9Vc2VyRm9ybWF0KHZhbHVlLCBvcHRpb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWUoZmllbGQsIHZhbHVlLnRvU3RyaW5nKCksIHJlY29yZCk7XG5cbiAgICB9XG5cbiAgICBnZXRUcmlnZ2VyaW5nU3RhdHVzKCk6IHN0cmluZ1tdIHtcbiAgICAgICAgcmV0dXJuIFsnb25EZXBlbmRlbmN5Q2hhbmdlJ107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBuZXcgdmFsdWVcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZmllbGRcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVjb3JkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVZhbHVlKGZpZWxkOiBGaWVsZCwgdmFsdWU6IHN0cmluZywgcmVjb3JkOiBSZWNvcmQpOiB2b2lkIHtcblxuICAgICAgICBmaWVsZC52YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgIGZpZWxkLmZvcm1Db250cm9sLnNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgLy8gcmUtdmFsaWRhdGUgdGhlIHBhcmVudCBmb3JtLWNvbnRyb2wgYWZ0ZXIgdmFsdWUgdXBkYXRlXG4gICAgICAgIHJlY29yZC5mb3JtR3JvdXAudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7b25seVNlbGY6IHRydWUsIGVtaXRFdmVudDogdHJ1ZX0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBpc0N1cnJlbmN5RmllbGQoZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBmaWVsZC50eXBlID09PSAnY3VycmVuY3knO1xuICAgIH1cbn1cbiJdfQ==