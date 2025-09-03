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
import { PanelLogicDisplayTypeAction } from './display-type/panel-logic-display-type-action.service';
import * as i0 from "@angular/core";
import * as i1 from "./display-type/panel-logic-display-type-action.service";
export class PanelLogicManager extends BaseActionManager {
    constructor(displayType) {
        super();
        displayType.modes.forEach(mode => this.actions[mode][displayType.key] = displayType);
    }
    /**
     * Run logic for the given field
     * @param {string} logicType
     * @param {object} field
     * @param {object} panel
     * @param {object} record
     * @param {object} mode
     */
    runLogic(logicType, field, panel, record, mode) {
        let toDisplay = true;
        const validModeLogic = Object.values(panel.meta.displayLogic).filter(logic => {
            const allowedModes = logic['modes'] ?? [];
            return !!(allowedModes.length && allowedModes.includes(mode));
        });
        if (!validModeLogic || !validModeLogic.length) {
            return toDisplay;
        }
        let defaultDisplay = panel.meta.display ?? 'show';
        let targetDisplay = 'hide';
        if (defaultDisplay === 'hide') {
            targetDisplay = 'show';
        }
        const context = {
            panel,
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
        toDisplay = (defaultDisplay === 'show');
        panel.displayState.next(toDisplay);
    }
    buildActionData(action, context) {
        return {
            field: context.field,
            record: (context && context.record) || null,
            panel: context.panel || null,
        };
    }
    static { this.ɵfac = function PanelLogicManager_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PanelLogicManager)(i0.ɵɵinject(i1.PanelLogicDisplayTypeAction)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PanelLogicManager, factory: PanelLogicManager.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PanelLogicManager, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.PanelLogicDisplayTypeAction }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtbG9naWMubWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb21wb25lbnRzL3BhbmVsLWxvZ2ljL3BhbmVsLWxvZ2ljLm1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sb0RBQW9ELENBQUM7QUFPckYsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0sd0RBQXdELENBQUM7OztBQUtuRyxNQUFNLE9BQU8saUJBQWtCLFNBQVEsaUJBQXVDO0lBRTFFLFlBQ0ksV0FBd0M7UUFFeEMsS0FBSyxFQUFFLENBQUM7UUFDUixXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0gsUUFBUSxDQUFDLFNBQWlCLEVBQUUsS0FBWSxFQUFFLEtBQVksRUFBRSxNQUFjLEVBQUUsSUFBYztRQUNsRixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFFckIsTUFBTSxjQUFjLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN6RSxNQUFNLFlBQVksR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sSUFBSSxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbEUsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzVDLE9BQU8sU0FBUyxDQUFDO1FBQ3JCLENBQUM7UUFFRCxJQUFJLGNBQWMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUM7UUFDbEQsSUFBSSxhQUFhLEdBQUcsTUFBTSxDQUFDO1FBQzNCLElBQUksY0FBYyxLQUFLLE1BQU0sRUFBRSxDQUFDO1lBQzVCLGFBQWEsR0FBRyxNQUFNLENBQUM7UUFDM0IsQ0FBQztRQUVELE1BQU0sT0FBTyxHQUFHO1lBQ1osS0FBSztZQUNMLE1BQU07WUFDTixLQUFLO1lBQ0wsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNO1NBQ1AsQ0FBQztRQUVuQixNQUFNLFFBQVEsR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3pDLE1BQU0sSUFBSSxHQUF5QixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztZQUN4RSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUQsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLFFBQVEsRUFBRSxDQUFDO1lBQ1gsY0FBYyxHQUFJLGFBQWEsQ0FBQztRQUNwQyxDQUFDO1FBRUQsU0FBUyxHQUFHLENBQUMsY0FBYyxLQUFLLE1BQU0sQ0FBQyxDQUFDO1FBRXhDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFUyxlQUFlLENBQUMsTUFBYyxFQUFFLE9BQXVCO1FBQzdELE9BQU87WUFDSCxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7WUFDcEIsTUFBTSxFQUFFLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJO1lBQzNDLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSyxJQUFJLElBQUk7U0FDUCxDQUFDO0lBQzlCLENBQUM7a0hBOURRLGlCQUFpQjt1RUFBakIsaUJBQWlCLFdBQWpCLGlCQUFpQixtQkFGZCxNQUFNOztpRkFFVCxpQkFBaUI7Y0FIN0IsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjMgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCYXNlQWN0aW9uTWFuYWdlcn0gZnJvbSAnLi4vLi4vc2VydmljZXMvYWN0aW9ucy9iYXNlLWFjdGlvbi1tYW5hZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHtQYW5lbExvZ2ljQWN0aW9uRGF0YX0gZnJvbSAnLi9wYW5lbC1sb2dpYy5hY3Rpb24nO1xuaW1wb3J0IHtBY3Rpb24sIEFjdGlvbkNvbnRleHR9IGZyb20gJy4uLy4uL2NvbW1vbi9hY3Rpb25zL2FjdGlvbi5tb2RlbCc7XG5pbXBvcnQge0ZpZWxkfSBmcm9tICcuLi8uLi9jb21tb24vcmVjb3JkL2ZpZWxkLm1vZGVsJztcbmltcG9ydCB7UGFuZWx9IGZyb20gJy4uLy4uL2NvbW1vbi9tZXRhZGF0YS9tZXRhZGF0YS5tb2RlbCc7XG5pbXBvcnQge1JlY29yZH0gZnJvbSAnLi4vLi4vY29tbW9uL3JlY29yZC9yZWNvcmQubW9kZWwnO1xuaW1wb3J0IHtWaWV3TW9kZX0gZnJvbSAnLi4vLi4vY29tbW9uL3ZpZXdzL3ZpZXcubW9kZWwnO1xuaW1wb3J0IHtQYW5lbExvZ2ljRGlzcGxheVR5cGVBY3Rpb259IGZyb20gJy4vZGlzcGxheS10eXBlL3BhbmVsLWxvZ2ljLWRpc3BsYXktdHlwZS1hY3Rpb24uc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUGFuZWxMb2dpY01hbmFnZXIgZXh0ZW5kcyBCYXNlQWN0aW9uTWFuYWdlcjxQYW5lbExvZ2ljQWN0aW9uRGF0YT4ge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGRpc3BsYXlUeXBlOiBQYW5lbExvZ2ljRGlzcGxheVR5cGVBY3Rpb24sXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGRpc3BsYXlUeXBlLm1vZGVzLmZvckVhY2gobW9kZSA9PiB0aGlzLmFjdGlvbnNbbW9kZV1bZGlzcGxheVR5cGUua2V5XSA9IGRpc3BsYXlUeXBlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSdW4gbG9naWMgZm9yIHRoZSBnaXZlbiBmaWVsZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsb2dpY1R5cGVcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZmllbGRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcGFuZWxcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVjb3JkXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG1vZGVcbiAgICAgKi9cbiAgICBydW5Mb2dpYyhsb2dpY1R5cGU6IHN0cmluZywgZmllbGQ6IEZpZWxkLCBwYW5lbDogUGFuZWwsIHJlY29yZDogUmVjb3JkLCBtb2RlOiBWaWV3TW9kZSkge1xuICAgICAgICBsZXQgdG9EaXNwbGF5ID0gdHJ1ZTtcblxuICAgICAgICBjb25zdCB2YWxpZE1vZGVMb2dpYyA9IE9iamVjdC52YWx1ZXMocGFuZWwubWV0YS5kaXNwbGF5TG9naWMpLmZpbHRlcihsb2dpYyA9PiB7XG4gICAgICAgICAgICBjb25zdCBhbGxvd2VkTW9kZXMgPSBsb2dpY1snbW9kZXMnXSA/PyBbXTtcbiAgICAgICAgICAgIHJldHVybiAhIShhbGxvd2VkTW9kZXMubGVuZ3RoICYmIGFsbG93ZWRNb2Rlcy5pbmNsdWRlcyhtb2RlKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghdmFsaWRNb2RlTG9naWMgfHwgIXZhbGlkTW9kZUxvZ2ljLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRvRGlzcGxheTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkZWZhdWx0RGlzcGxheSA9IHBhbmVsLm1ldGEuZGlzcGxheSA/PyAnc2hvdyc7XG4gICAgICAgIGxldCB0YXJnZXREaXNwbGF5ID0gJ2hpZGUnO1xuICAgICAgICBpZiAoZGVmYXVsdERpc3BsYXkgPT09ICdoaWRlJykge1xuICAgICAgICAgICAgdGFyZ2V0RGlzcGxheSA9ICdzaG93JztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB7XG4gICAgICAgICAgICBwYW5lbCxcbiAgICAgICAgICAgIHJlY29yZCxcbiAgICAgICAgICAgIGZpZWxkLFxuICAgICAgICAgICAgbW9kdWxlOiByZWNvcmQubW9kdWxlXG4gICAgICAgIH0gYXMgQWN0aW9uQ29udGV4dDtcblxuICAgICAgICBjb25zdCBpc0FjdGl2ZSA9IHZhbGlkTW9kZUxvZ2ljLnNvbWUobG9naWMgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF0YTogUGFuZWxMb2dpY0FjdGlvbkRhdGEgPSB0aGlzLmJ1aWxkQWN0aW9uRGF0YShsb2dpYywgY29udGV4dCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hY3Rpb25zW21vZGVdW2xvZ2ljLmtleV0ucnVuKGRhdGEsIGxvZ2ljKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICAgICAgICBkZWZhdWx0RGlzcGxheSAgPSB0YXJnZXREaXNwbGF5O1xuICAgICAgICB9XG5cbiAgICAgICAgdG9EaXNwbGF5ID0gKGRlZmF1bHREaXNwbGF5ID09PSAnc2hvdycpO1xuXG4gICAgICAgIHBhbmVsLmRpc3BsYXlTdGF0ZS5uZXh0KHRvRGlzcGxheSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGJ1aWxkQWN0aW9uRGF0YShhY3Rpb246IEFjdGlvbiwgY29udGV4dD86IEFjdGlvbkNvbnRleHQpOiBQYW5lbExvZ2ljQWN0aW9uRGF0YSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmaWVsZDogY29udGV4dC5maWVsZCxcbiAgICAgICAgICAgIHJlY29yZDogKGNvbnRleHQgJiYgY29udGV4dC5yZWNvcmQpIHx8IG51bGwsXG4gICAgICAgICAgICBwYW5lbDogY29udGV4dC5wYW5lbCB8fCBudWxsLFxuICAgICAgICB9IGFzIFBhbmVsTG9naWNBY3Rpb25EYXRhO1xuICAgIH1cblxufVxuIl19