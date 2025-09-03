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
import { Router } from '@angular/router';
import { ModuleNameMapper, } from '../../../../services/navigation/module-name-mapper/module-name-mapper.service';
import { isVoid } from '../../../../common/utils/value-utils';
import get from 'lodash-es/get';
import { SubpanelActionHandler } from '../subpanel.action';
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/navigation/module-name-mapper/module-name-mapper.service";
import * as i2 from "@angular/router";
export class SubpanelCreateAction extends SubpanelActionHandler {
    constructor(moduleNameMapper, router) {
        super();
        this.moduleNameMapper = moduleNameMapper;
        this.router = router;
        this.key = 'create';
        this.modes = ['list'];
    }
    run(data) {
        const moduleName = data.module;
        const moduleAction = data?.action?.moduleAction ?? 'edit';
        const parentId = data?.parentId ?? '';
        const parentModule = data.parentModule ?? '';
        const route = `/${moduleName}/${moduleAction}`;
        const queryParams = {
            // eslint-disable-next-line camelcase,@typescript-eslint/camelcase
            return_module: this.moduleNameMapper.toLegacy(parentModule),
            // eslint-disable-next-line camelcase,@typescript-eslint/camelcase
            return_action: 'DetailView',
            // eslint-disable-next-line camelcase,@typescript-eslint/camelcase
            return_id: parentId,
            relate_to: parentModule,
            relate_id: parentId,
        };
        this.addAdditionalFields(data, queryParams);
        this.addParams(data, queryParams);
        this.router.navigate([route], {
            queryParams
        }).then();
    }
    shouldDisplay() {
        return true;
    }
    /**
     * Add additional record fields
     *
     * @param {object} data SubpanelActionData
     * @param {object} queryParams Params map
     */
    addAdditionalFields(data, queryParams) {
        const parentAttributes = (data.store.parentRecord && data.store.parentRecord.attributes) || {};
        if (!parentAttributes && !Object.keys(parentAttributes).length) {
            return;
        }
        const additionalFields = data.action.additionalFields ?? {};
        const additionalFieldKeys = Object.keys(additionalFields) || [];
        additionalFieldKeys.forEach(additionalFieldKey => {
            if (!additionalFieldKey || !additionalFields[additionalFieldKey]) {
                return;
            }
            const parentAttribute = additionalFields[additionalFieldKey];
            const attribute = get(parentAttributes, parentAttribute, null);
            if (isVoid(attribute)) {
                return;
            }
            queryParams[additionalFieldKey] = attribute;
        });
    }
    /**
     * Add configuration defined params
     *
     * @param {object} data SubpanelActionData
     * @param {object} queryParams Params map
     */
    addParams(data, queryParams) {
        const params = data.action.extraParams ?? {};
        const paramKeys = Object.keys(params) || [];
        paramKeys.forEach(paramKey => {
            if (!paramKey || !params[paramKey]) {
                return;
            }
            queryParams[paramKey] = params[paramKey];
        });
    }
    static { this.ɵfac = function SubpanelCreateAction_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SubpanelCreateAction)(i0.ɵɵinject(i1.ModuleNameMapper), i0.ɵɵinject(i2.Router)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SubpanelCreateAction, factory: SubpanelCreateAction.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SubpanelCreateAction, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.ModuleNameMapper }, { type: i2.Router }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb250YWluZXJzL3N1YnBhbmVsL2FjdGlvbnMvY3JlYXRlL2NyZWF0ZS5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFTLE1BQU0sRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBQyxnQkFBZ0IsR0FBRSxNQUFNLCtFQUErRSxDQUFDO0FBR2hILE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUM1RCxPQUFPLEdBQUcsTUFBTSxlQUFlLENBQUM7QUFDaEMsT0FBTyxFQUFxQixxQkFBcUIsRUFBQyxNQUFNLG9CQUFvQixDQUFDOzs7O0FBTTdFLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxxQkFBcUI7SUFJM0QsWUFDYyxnQkFBa0MsRUFDbEMsTUFBYztRQUV4QixLQUFLLEVBQUUsQ0FBQztRQUhFLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUw1QixRQUFHLEdBQUcsUUFBUSxDQUFDO1FBQ2YsVUFBSyxHQUFHLENBQUMsTUFBa0IsQ0FBQyxDQUFDO0lBTzdCLENBQUM7SUFFRCxHQUFHLENBQUMsSUFBd0I7UUFFeEIsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMvQixNQUFNLFlBQVksR0FBRyxJQUFJLEVBQUUsTUFBTSxFQUFFLFlBQVksSUFBSSxNQUFNLENBQUM7UUFFMUQsTUFBTSxRQUFRLEdBQUcsSUFBSSxFQUFFLFFBQVEsSUFBSSxFQUFFLENBQUM7UUFDdEMsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVks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RSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtQYXJhbXMsIFJvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7TW9kdWxlTmFtZU1hcHBlcix9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL25hdmlnYXRpb24vbW9kdWxlLW5hbWUtbWFwcGVyL21vZHVsZS1uYW1lLW1hcHBlci5zZXJ2aWNlJztcbmltcG9ydCB7Vmlld01vZGV9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi92aWV3cy92aWV3Lm1vZGVsJztcbmltcG9ydCB7QXR0cmlidXRlTWFwfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vcmVjb3JkL3JlY29yZC5tb2RlbCc7XG5pbXBvcnQge2lzVm9pZH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3V0aWxzL3ZhbHVlLXV0aWxzJztcbmltcG9ydCBnZXQgZnJvbSAnbG9kYXNoLWVzL2dldCc7XG5pbXBvcnQge1N1YnBhbmVsQWN0aW9uRGF0YSwgU3VicGFuZWxBY3Rpb25IYW5kbGVyfSBmcm9tICcuLi9zdWJwYW5lbC5hY3Rpb24nO1xuXG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU3VicGFuZWxDcmVhdGVBY3Rpb24gZXh0ZW5kcyBTdWJwYW5lbEFjdGlvbkhhbmRsZXIge1xuICAgIGtleSA9ICdjcmVhdGUnO1xuICAgIG1vZGVzID0gWydsaXN0JyBhcyBWaWV3TW9kZV07XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIG1vZHVsZU5hbWVNYXBwZXI6IE1vZHVsZU5hbWVNYXBwZXIsXG4gICAgICAgIHByb3RlY3RlZCByb3V0ZXI6IFJvdXRlclxuICAgICkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHJ1bihkYXRhOiBTdWJwYW5lbEFjdGlvbkRhdGEpOiB2b2lkIHtcblxuICAgICAgICBjb25zdCBtb2R1bGVOYW1lID0gZGF0YS5tb2R1bGU7XG4gICAgICAgIGNvbnN0IG1vZHVsZUFjdGlvbiA9IGRhdGE/LmFjdGlvbj8ubW9kdWxlQWN0aW9uID8/ICdlZGl0JztcblxuICAgICAgICBjb25zdCBwYXJlbnRJZCA9IGRhdGE/LnBhcmVudElkID8/ICcnO1xuICAgICAgICBjb25zdCBwYXJlbnRNb2R1bGUgPSBkYXRhLnBhcmVudE1vZHVsZSA/PyAnJztcblxuICAgICAgICBjb25zdCByb3V0ZSA9IGAvJHttb2R1bGVOYW1lfS8ke21vZHVsZUFjdGlvbn1gO1xuXG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0ge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZSxAdHlwZXNjcmlwdC1lc2xpbnQvY2FtZWxjYXNlXG4gICAgICAgICAgICByZXR1cm5fbW9kdWxlOiB0aGlzLm1vZHVsZU5hbWVNYXBwZXIudG9MZWdhY3kocGFyZW50TW9kdWxlKSxcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2UsQHR5cGVzY3JpcHQtZXNsaW50L2NhbWVsY2FzZVxuICAgICAgICAgICAgcmV0dXJuX2FjdGlvbjogJ0RldGFpbFZpZXcnLFxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZSxAdHlwZXNjcmlwdC1lc2xpbnQvY2FtZWxjYXNlXG4gICAgICAgICAgICByZXR1cm5faWQ6IHBhcmVudElkLFxuICAgICAgICAgICAgcmVsYXRlX3RvOiBwYXJlbnRNb2R1bGUsXG4gICAgICAgICAgICByZWxhdGVfaWQ6IHBhcmVudElkLFxuICAgICAgICB9IGFzIFBhcmFtcztcbiAgICAgICAgdGhpcy5hZGRBZGRpdGlvbmFsRmllbGRzKGRhdGEsIHF1ZXJ5UGFyYW1zKTtcbiAgICAgICAgdGhpcy5hZGRQYXJhbXMoZGF0YSwgcXVlcnlQYXJhbXMpO1xuXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtyb3V0ZV0sIHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zXG4gICAgICAgIH0pLnRoZW4oKTtcbiAgICB9XG5cbiAgICBzaG91bGREaXNwbGF5KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYWRkaXRpb25hbCByZWNvcmQgZmllbGRzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSBTdWJwYW5lbEFjdGlvbkRhdGFcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcXVlcnlQYXJhbXMgUGFyYW1zIG1hcFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBhZGRBZGRpdGlvbmFsRmllbGRzKGRhdGE6IFN1YnBhbmVsQWN0aW9uRGF0YSwgcXVlcnlQYXJhbXM6IFBhcmFtcyk6IHZvaWQge1xuICAgICAgICBjb25zdCBwYXJlbnRBdHRyaWJ1dGVzID0gKGRhdGEuc3RvcmUucGFyZW50UmVjb3JkICYmIGRhdGEuc3RvcmUucGFyZW50UmVjb3JkLmF0dHJpYnV0ZXMpIHx8IHt9IGFzIEF0dHJpYnV0ZU1hcDtcblxuICAgICAgICBpZiAoIXBhcmVudEF0dHJpYnV0ZXMgJiYgIU9iamVjdC5rZXlzKHBhcmVudEF0dHJpYnV0ZXMpLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWRkaXRpb25hbEZpZWxkcyA9IGRhdGEuYWN0aW9uLmFkZGl0aW9uYWxGaWVsZHMgPz8ge30gYXMgeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgICAgICAgY29uc3QgYWRkaXRpb25hbEZpZWxkS2V5cyA9IE9iamVjdC5rZXlzKGFkZGl0aW9uYWxGaWVsZHMpIHx8IFtdO1xuXG4gICAgICAgIGFkZGl0aW9uYWxGaWVsZEtleXMuZm9yRWFjaChhZGRpdGlvbmFsRmllbGRLZXkgPT4ge1xuICAgICAgICAgICAgaWYgKCFhZGRpdGlvbmFsRmllbGRLZXkgfHwgIWFkZGl0aW9uYWxGaWVsZHNbYWRkaXRpb25hbEZpZWxkS2V5XSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcGFyZW50QXR0cmlidXRlID0gYWRkaXRpb25hbEZpZWxkc1thZGRpdGlvbmFsRmllbGRLZXldO1xuICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlID0gZ2V0KHBhcmVudEF0dHJpYnV0ZXMsIHBhcmVudEF0dHJpYnV0ZSwgbnVsbCk7XG5cbiAgICAgICAgICAgIGlmIChpc1ZvaWQoYXR0cmlidXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcXVlcnlQYXJhbXNbYWRkaXRpb25hbEZpZWxkS2V5XSA9IGF0dHJpYnV0ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGNvbmZpZ3VyYXRpb24gZGVmaW5lZCBwYXJhbXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIFN1YnBhbmVsQWN0aW9uRGF0YVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBxdWVyeVBhcmFtcyBQYXJhbXMgbWFwXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFkZFBhcmFtcyhkYXRhOiBTdWJwYW5lbEFjdGlvbkRhdGEsIHF1ZXJ5UGFyYW1zOiBQYXJhbXMpOiB2b2lkIHtcblxuICAgICAgICBjb25zdCBwYXJhbXMgPSBkYXRhLmFjdGlvbi5leHRyYVBhcmFtcyA/PyB7fSBhcyB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAgICAgICBjb25zdCBwYXJhbUtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpIHx8IFtdO1xuXG4gICAgICAgIHBhcmFtS2V5cy5mb3JFYWNoKHBhcmFtS2V5ID0+IHtcbiAgICAgICAgICAgIGlmICghcGFyYW1LZXkgfHwgIXBhcmFtc1twYXJhbUtleV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zW3BhcmFtS2V5XSA9IHBhcmFtc1twYXJhbUtleV07XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==