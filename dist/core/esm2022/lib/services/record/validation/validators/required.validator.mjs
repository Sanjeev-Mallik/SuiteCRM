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
import { isTrue } from '../../../../common/utils/value-utils';
import { FormControlUtils } from '../../field/form-control.utils';
import * as i0 from "@angular/core";
import * as i1 from "../../field/form-control.utils";
export const requiredValidator = (utils) => ((control) => {
    if (utils.isEmptyTrimmedInputValue(control.value)) {
        return {
            required: {
                required: true,
                message: {
                    labelKey: 'LBL_VALIDATION_ERROR_REQUIRED',
                    context: {
                        value: control.value
                    }
                }
            }
        };
    }
    return null;
});
export const booleanRequiredValidator = (utils) => ((control) => {
    if (utils.isEmptyBooleanInputValue(control.value)) {
        return {
            required: {
                required: true,
                message: {
                    labelKey: 'LBL_VALIDATION_ERROR_REQUIRED',
                    context: {
                        value: control.value
                    }
                }
            }
        };
    }
    return null;
});
export const multienumRequiredValidator = (viewField, record, utils) => ((control) => {
    const name = viewField.name || '';
    if (!name || !record || !record.fields) {
        return null;
    }
    const field = record?.fields[name] ?? {};
    if (!field) {
        return null;
    }
    const activeItems = field.valueList;
    if (activeItems && activeItems.length > 0) {
        return null;
    }
    return {
        required: {
            required: true,
            message: {
                labelKey: 'LBL_VALIDATION_ERROR_REQUIRED',
                context: {}
            }
        }
    };
});
export class RequiredValidator {
    constructor(utils) {
        this.utils = utils;
    }
    applies(record, viewField) {
        if (!viewField || !viewField.fieldDefinition) {
            return false;
        }
        const viewFieldType = viewField?.type ?? null;
        const fieldDefinitionType = viewField?.fieldDefinition?.type ?? null;
        if (viewFieldType === 'line-items' || fieldDefinitionType === 'line-items') {
            return false;
        }
        return isTrue(viewField.fieldDefinition.required);
    }
    getValidator(viewField, record) {
        const type = viewField?.type ?? viewField?.fieldDefinition?.type ?? '';
        if (type === 'boolean') {
            return [booleanRequiredValidator(this.utils)];
        }
        if (type === 'multienum') {
            return [multienumRequiredValidator(viewField, record, this.utils)];
        }
        return [requiredValidator(this.utils)];
    }
    static { this.ɵfac = function RequiredValidator_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RequiredValidator)(i0.ɵɵinject(i1.FormControlUtils)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RequiredValidator, factory: RequiredValidator.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RequiredValidator, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.FormControlUtils }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWlyZWQudmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3NlcnZpY2VzL3JlY29yZC92YWxpZGF0aW9uL3ZhbGlkYXRvcnMvcmVxdWlyZWQudmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBR3pDLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUM1RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQzs7O0FBTWhFLE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFHLENBQUMsS0FBdUIsRUFBdUIsRUFBRSxDQUFDLENBQy9FLENBQUMsT0FBd0IsRUFBbUMsRUFBRTtJQUUxRCxJQUFJLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztRQUNoRCxPQUFPO1lBQ0gsUUFBUSxFQUFFO2dCQUNOLFFBQVEsRUFBRSxJQUFJO2dCQUNkLE9BQU8sRUFBRTtvQkFDTCxRQUFRLEVBQUUsK0JBQStCO29CQUN6QyxPQUFPLEVBQUU7d0JBQ0wsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO3FCQUN2QjtpQkFDSjthQUNKO1NBQ0osQ0FBQztJQUNOLENBQUM7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDLENBQ0osQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLHdCQUF3QixHQUFHLENBQUMsS0FBdUIsRUFBdUIsRUFBRSxDQUFDLENBQ3RGLENBQUMsT0FBd0IsRUFBbUMsRUFBRTtJQUUxRCxJQUFJLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztRQUNoRCxPQUFPO1lBQ0gsUUFB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N0IsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtWYWxpZGF0b3JJbnRlcmZhY2V9IGZyb20gJy4uL3ZhbGlkYXRvci5JbnRlcmZhY2UnO1xuaW1wb3J0IHtBYnN0cmFjdENvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7aXNUcnVlfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vdXRpbHMvdmFsdWUtdXRpbHMnO1xuaW1wb3J0IHtGb3JtQ29udHJvbFV0aWxzfSBmcm9tICcuLi8uLi9maWVsZC9mb3JtLWNvbnRyb2wudXRpbHMnO1xuaW1wb3J0IHtSZWNvcmR9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9yZWNvcmQvcmVjb3JkLm1vZGVsJztcbmltcG9ydCB7U3RhbmRhcmRWYWxpZGF0aW9uRXJyb3JzLCBTdGFuZGFyZFZhbGlkYXRvckZufSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vc2VydmljZXMvdmFsaWRhdG9ycy92YWxpZGF0b3JzLm1vZGVsJztcbmltcG9ydCB7Vmlld0ZpZWxkRGVmaW5pdGlvbn0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL21ldGFkYXRhL21ldGFkYXRhLm1vZGVsJztcbmltcG9ydCB7RmllbGR9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vcmVjb3JkL2ZpZWxkLm1vZGVsXCI7XG5cbmV4cG9ydCBjb25zdCByZXF1aXJlZFZhbGlkYXRvciA9ICh1dGlsczogRm9ybUNvbnRyb2xVdGlscyk6IFN0YW5kYXJkVmFsaWRhdG9yRm4gPT4gKFxuICAgIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBTdGFuZGFyZFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcblxuICAgICAgICBpZiAodXRpbHMuaXNFbXB0eVRyaW1tZWRJbnB1dFZhbHVlKGNvbnRyb2wudmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbEtleTogJ0xCTF9WQUxJREFUSU9OX0VSUk9SX1JFUVVJUkVEJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY29udHJvbC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbik7XG5cbmV4cG9ydCBjb25zdCBib29sZWFuUmVxdWlyZWRWYWxpZGF0b3IgPSAodXRpbHM6IEZvcm1Db250cm9sVXRpbHMpOiBTdGFuZGFyZFZhbGlkYXRvckZuID0+IChcbiAgICAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogU3RhbmRhcmRWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzRW1wdHlCb29sZWFuSW5wdXRWYWx1ZShjb250cm9sLnZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDoge1xuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxLZXk6ICdMQkxfVkFMSURBVElPTl9FUlJPUl9SRVFVSVJFRCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNvbnRyb2wudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4pO1xuXG5leHBvcnQgY29uc3QgbXVsdGllbnVtUmVxdWlyZWRWYWxpZGF0b3IgPSAodmlld0ZpZWxkOiBWaWV3RmllbGREZWZpbml0aW9uLCByZWNvcmQ6IFJlY29yZCwgdXRpbHM6IEZvcm1Db250cm9sVXRpbHMpOiBTdGFuZGFyZFZhbGlkYXRvckZuID0+IChcbiAgICAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogU3RhbmRhcmRWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSB2aWV3RmllbGQubmFtZSB8fCAnJztcblxuICAgICAgICBpZiAoIW5hbWUgfHwgIXJlY29yZCB8fCAhcmVjb3JkLmZpZWxkcykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmaWVsZCA9IHJlY29yZD8uZmllbGRzW25hbWVdID8/IHt9IGFzIEZpZWxkO1xuXG4gICAgICAgIGlmICghZmllbGQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWN0aXZlSXRlbXMgPSBmaWVsZC52YWx1ZUxpc3RcblxuICAgICAgICBpZiAoYWN0aXZlSXRlbXMgJiYgYWN0aXZlSXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsS2V5OiAnTEJMX1ZBTElEQVRJT05fRVJST1JfUkVRVUlSRUQnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiB7fVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4pO1xuXG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUmVxdWlyZWRWYWxpZGF0b3IgaW1wbGVtZW50cyBWYWxpZGF0b3JJbnRlcmZhY2Uge1xuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIHV0aWxzOiBGb3JtQ29udHJvbFV0aWxzKSB7XG4gICAgfVxuXG4gICAgYXBwbGllcyhyZWNvcmQ6IFJlY29yZCwgdmlld0ZpZWxkOiBWaWV3RmllbGREZWZpbml0aW9uKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICghdmlld0ZpZWxkIHx8ICF2aWV3RmllbGQuZmllbGREZWZpbml0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2aWV3RmllbGRUeXBlID0gdmlld0ZpZWxkPy50eXBlID8/IG51bGw7XG4gICAgICAgIGNvbnN0IGZpZWxkRGVmaW5pdGlvblR5cGUgPSB2aWV3RmllbGQ/LmZpZWxkRGVmaW5pdGlvbj8udHlwZSA/PyBudWxsO1xuXG4gICAgICAgIGlmICh2aWV3RmllbGRUeXBlID09PSAnbGluZS1pdGVtcycgfHwgZmllbGREZWZpbml0aW9uVHlwZSA9PT0gJ2xpbmUtaXRlbXMnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaXNUcnVlKHZpZXdGaWVsZC5maWVsZERlZmluaXRpb24ucmVxdWlyZWQpO1xuICAgIH1cblxuICAgIGdldFZhbGlkYXRvcih2aWV3RmllbGQ6IFZpZXdGaWVsZERlZmluaXRpb24sIHJlY29yZDogUmVjb3JkKTogU3RhbmRhcmRWYWxpZGF0b3JGbltdIHtcblxuICAgICAgICBjb25zdCB0eXBlID0gdmlld0ZpZWxkPy50eXBlID8/IHZpZXdGaWVsZD8uZmllbGREZWZpbml0aW9uPy50eXBlID8/ICcnO1xuXG4gICAgICAgIGlmICh0eXBlID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIHJldHVybiBbYm9vbGVhblJlcXVpcmVkVmFsaWRhdG9yKHRoaXMudXRpbHMpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlID09PSAnbXVsdGllbnVtJykge1xuICAgICAgICAgICAgcmV0dXJuIFttdWx0aWVudW1SZXF1aXJlZFZhbGlkYXRvcih2aWV3RmllbGQsIHJlY29yZCwgdGhpcy51dGlscyldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFtyZXF1aXJlZFZhbGlkYXRvcih0aGlzLnV0aWxzKV07XG4gICAgfVxuXG59XG4iXX0=