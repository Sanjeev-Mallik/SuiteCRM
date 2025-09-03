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
import { BaseActionManager } from '../../services/actions/base-action-manager.service';
import { DisplayTypeAction } from './display-type/display-type.action';
import * as i0 from "@angular/core";
import * as i1 from "./display-type/display-type.action";
export class FieldLogicDisplayManager extends BaseActionManager {
    constructor(displayType) {
        super();
        displayType.modes.forEach(mode => this.actions[mode][displayType.key] = displayType);
    }
    runAll(field, record, mode) {
        let toDisplay = 'show';
        if (!field.displayLogic) {
            return;
        }
        const validModeLogic = Object.values(field.displayLogic).filter(logic => {
            const allowedModes = logic['modes'] ?? [];
            return !!(allowedModes.length && allowedModes.includes(mode));
        });
        if (!validModeLogic || !validModeLogic.length) {
            field.display.set(toDisplay);
            return;
        }
        let defaultDisplay = field.defaultDisplay ?? 'show';
        let targetDisplay = 'none';
        if (defaultDisplay === 'none') {
            targetDisplay = 'show';
        }
        const context = {
            record,
            field,
            module: record.module
        };
        const isActive = validModeLogic.some(logic => {
            const data = this.buildActionData(logic, context);
            return this.actions[mode][logic.key].run(data, logic);
        });
        if (isActive) {
            defaultDisplay = targetDisplay;
        }
        toDisplay = defaultDisplay;
        if (defaultDisplay === 'show') {
            toDisplay = 'show';
        }
        field.display.set(toDisplay);
    }
    buildActionData(action, context) {
        return {
            field: context.field,
            record: (context && context.record) || null,
        };
    }
    static { this.ɵfac = function FieldLogicDisplayManager_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FieldLogicDisplayManager)(i0.ɵɵinject(i1.DisplayTypeAction)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FieldLogicDisplayManager, factory: FieldLogicDisplayManager.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FieldLogicDisplayManager, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.DisplayTypeAction }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtbG9naWMtZGlzcGxheS5tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2ZpZWxkcy9maWVsZC1sb2dpYy1kaXNwbGF5L2ZpZWxkLWxvZ2ljLWRpc3BsYXkubWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxvREFBb0QsQ0FBQztBQU1yRixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQzs7O0FBS3JFLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxpQkFBOEM7SUFFeEYsWUFDSSxXQUE4QjtRQUU5QixLQUFLLEVBQUUsQ0FBQztRQUNSLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUM7SUFDekYsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUFZLEVBQUUsTUFBYyxFQUFFLElBQWM7UUFDL0MsSUFBSSxTQUFTLEdBQWdCLE1BQU0sQ0FBQztRQUVwQyxJQUFHLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3JCLE9BQU87UUFDWCxDQUFDO1FBRUQsTUFBTSxjQUFjLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3BFLE1BQU0sWUFBWSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDMUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxJQUFJLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNsRSxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDNUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDN0IsT0FBTztRQUNYLENBQUM7UUFFRCxJQUFJLGNBQWMsR0FBRyxLQUFLLENBQUMsY0FBYyxJQUFJLE1BQU0sQ0FBQztRQUVwRCxJQUFJLGFBQWEsR0FBZ0IsTUFBTSxDQUFDO1FBRXhDLElBQUksY0FBYyxLQUFLLE1BQU0sRUFBRSxDQUFDO1lBQzVCLGFBQWEsR0FBRyxNQUFNLENBQUM7UUFDM0IsQ0FBQztRQUVELE1BQU0sT0FBTyxHQUFHO1lBQ1osTUFBTTtZQUNOLEtBQUs7WUFDTCxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU07U0FDUCxDQUFDO1FBR25CLE1BQU0sUUFBUSxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDekMsTUFBTSxJQUFJLEdBQWdDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQy9FLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMxRCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksUUFBUSxFQUFFLENBQUM7WUFDWCxjQUFjLEdBQUcsYUFBYSxDQUFDO1FBRW5DLENBQUM7UUFFRCxTQUFTLEdBQUcsY0FBNkIsQ0FBQztRQUUxQyxJQUFJLGNBQWMsS0FBSyxNQUFNLEVBQUUsQ0FBQztZQUM1QixTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7UUFFRCxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUVqQyxDQUFDO0lBRVMsZUFBZSxDQUFDLE1BQWMsRUFBRSxPQUF1QjtRQUM3RCxPQUFPO1lBQ0gsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1lBQ3BCLE1BQU0sRUFBRSxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSTtTQUNmLENBQUM7SUFDckMsQ0FBQzt5SEFsRVEsd0JBQXdCO3VFQUF4Qix3QkFBd0IsV0FBeEIsd0JBQXdCLG1CQUZyQixNQUFNOztpRkFFVCx3QkFBd0I7Y0FIcEMsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjMgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCYXNlQWN0aW9uTWFuYWdlcn0gZnJvbSAnLi4vLi4vc2VydmljZXMvYWN0aW9ucy9iYXNlLWFjdGlvbi1tYW5hZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHtGaWVsZExvZ2ljRGlzcGxheUFjdGlvbkRhdGF9IGZyb20gJy4vZmllbGQtbG9naWMtZGlzcGxheS5hY3Rpb24nO1xuaW1wb3J0IHtBY3Rpb24sIEFjdGlvbkNvbnRleHR9IGZyb20gJy4uLy4uL2NvbW1vbi9hY3Rpb25zL2FjdGlvbi5tb2RlbCc7XG5pbXBvcnQge0Rpc3BsYXlUeXBlLCBGaWVsZH0gZnJvbSAnLi4vLi4vY29tbW9uL3JlY29yZC9maWVsZC5tb2RlbCc7XG5pbXBvcnQge1JlY29yZH0gZnJvbSAnLi4vLi4vY29tbW9uL3JlY29yZC9yZWNvcmQubW9kZWwnO1xuaW1wb3J0IHtWaWV3TW9kZX0gZnJvbSAnLi4vLi4vY29tbW9uL3ZpZXdzL3ZpZXcubW9kZWwnO1xuaW1wb3J0IHtEaXNwbGF5VHlwZUFjdGlvbn0gZnJvbSAnLi9kaXNwbGF5LXR5cGUvZGlzcGxheS10eXBlLmFjdGlvbic7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRmllbGRMb2dpY0Rpc3BsYXlNYW5hZ2VyIGV4dGVuZHMgQmFzZUFjdGlvbk1hbmFnZXI8RmllbGRMb2dpY0Rpc3BsYXlBY3Rpb25EYXRhPiB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZGlzcGxheVR5cGU6IERpc3BsYXlUeXBlQWN0aW9uLFxuICAgICkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBkaXNwbGF5VHlwZS5tb2Rlcy5mb3JFYWNoKG1vZGUgPT4gdGhpcy5hY3Rpb25zW21vZGVdW2Rpc3BsYXlUeXBlLmtleV0gPSBkaXNwbGF5VHlwZSk7XG4gICAgfVxuXG4gICAgcnVuQWxsKGZpZWxkOiBGaWVsZCwgcmVjb3JkOiBSZWNvcmQsIG1vZGU6IFZpZXdNb2RlKTogdm9pZCB7XG4gICAgICAgIGxldCB0b0Rpc3BsYXk6IERpc3BsYXlUeXBlID0gJ3Nob3cnO1xuXG4gICAgICAgIGlmKCFmaWVsZC5kaXNwbGF5TG9naWMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZhbGlkTW9kZUxvZ2ljID0gT2JqZWN0LnZhbHVlcyhmaWVsZC5kaXNwbGF5TG9naWMpLmZpbHRlcihsb2dpYyA9PiB7XG4gICAgICAgICAgICBjb25zdCBhbGxvd2VkTW9kZXMgPSBsb2dpY1snbW9kZXMnXSA/PyBbXTtcbiAgICAgICAgICAgIHJldHVybiAhIShhbGxvd2VkTW9kZXMubGVuZ3RoICYmIGFsbG93ZWRNb2Rlcy5pbmNsdWRlcyhtb2RlKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghdmFsaWRNb2RlTG9naWMgfHwgIXZhbGlkTW9kZUxvZ2ljLmxlbmd0aCkge1xuICAgICAgICAgICAgZmllbGQuZGlzcGxheS5zZXQodG9EaXNwbGF5KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkZWZhdWx0RGlzcGxheSA9IGZpZWxkLmRlZmF1bHREaXNwbGF5ID8/ICdzaG93JztcblxuICAgICAgICBsZXQgdGFyZ2V0RGlzcGxheTogRGlzcGxheVR5cGUgPSAnbm9uZSc7XG5cbiAgICAgICAgaWYgKGRlZmF1bHREaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgICAgIHRhcmdldERpc3BsYXkgPSAnc2hvdyc7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb250ZXh0ID0ge1xuICAgICAgICAgICAgcmVjb3JkLFxuICAgICAgICAgICAgZmllbGQsXG4gICAgICAgICAgICBtb2R1bGU6IHJlY29yZC5tb2R1bGVcbiAgICAgICAgfSBhcyBBY3Rpb25Db250ZXh0O1xuXG5cbiAgICAgICAgY29uc3QgaXNBY3RpdmUgPSB2YWxpZE1vZGVMb2dpYy5zb21lKGxvZ2ljID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGE6IEZpZWxkTG9naWNEaXNwbGF5QWN0aW9uRGF0YSA9IHRoaXMuYnVpbGRBY3Rpb25EYXRhKGxvZ2ljLCBjb250ZXh0KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFjdGlvbnNbbW9kZV1bbG9naWMua2V5XS5ydW4oZGF0YSwgbG9naWMpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoaXNBY3RpdmUpIHtcbiAgICAgICAgICAgIGRlZmF1bHREaXNwbGF5ID0gdGFyZ2V0RGlzcGxheTtcblxuICAgICAgICB9XG5cbiAgICAgICAgdG9EaXNwbGF5ID0gZGVmYXVsdERpc3BsYXkgYXMgRGlzcGxheVR5cGU7XG5cbiAgICAgICAgaWYgKGRlZmF1bHREaXNwbGF5ID09PSAnc2hvdycpIHtcbiAgICAgICAgICAgIHRvRGlzcGxheSA9ICdzaG93JztcbiAgICAgICAgfVxuXG4gICAgICAgIGZpZWxkLmRpc3BsYXkuc2V0KHRvRGlzcGxheSk7XG5cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYnVpbGRBY3Rpb25EYXRhKGFjdGlvbjogQWN0aW9uLCBjb250ZXh0PzogQWN0aW9uQ29udGV4dCk6IEZpZWxkTG9naWNEaXNwbGF5QWN0aW9uRGF0YSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmaWVsZDogY29udGV4dC5maWVsZCxcbiAgICAgICAgICAgIHJlY29yZDogKGNvbnRleHQgJiYgY29udGV4dC5yZWNvcmQpIHx8IG51bGwsXG4gICAgICAgIH0gYXMgRmllbGRMb2dpY0Rpc3BsYXlBY3Rpb25EYXRhO1xuICAgIH1cblxufVxuIl19