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
import { ModuleNameMapper } from '../module-name-mapper/module-name-mapper.service';
import { ActionNameMapper } from '../action-name-mapper/action-name-mapper.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../module-name-mapper/module-name-mapper.service";
import * as i3 from "../action-name-mapper/action-name-mapper.service";
const ROUTE_PREFIX = './#';
export class ModuleNavigation {
    constructor(router, moduleNameMapper, actionNameMapper) {
        this.router = router;
        this.moduleNameMapper = moduleNameMapper;
        this.actionNameMapper = actionNameMapper;
    }
    /**
     * Public Api
     */
    /**
     * Get module info
     *
     * @param {string} module name
     * @param {object} navigation info
     * @returns {object} module info
     */
    getModuleInfo(module, navigation) {
        if (!navigation || !navigation.modules) {
            return null;
        }
        return navigation.modules[module];
    }
    /**
     * Get module label
     *
     * @param {object} module info
     * @param {object} appListStrings map
     * @returns {string} the module label
     */
    getModuleLabel(module, appListStrings) {
        if (!appListStrings || !appListStrings.moduleList || !module) {
            return '';
        }
        const labelKey = (module && module.labelKey) || '';
        return appListStrings.moduleList[labelKey] || labelKey;
    }
    /**
     * Get module route
     *
     * @param {object} module NavbarModule
     * @returns {object} NavigationRoute
     */
    getModuleRoute(module) {
        let url = (module && module.defaultRoute) || '';
        let route = null;
        const params = null;
        if (url.startsWith(ROUTE_PREFIX)) {
            route = url.replace(ROUTE_PREFIX, '');
            url = null;
        }
        return { route, url, params };
    }
    /**
     * Navigate using action information
     *
     * @param {object} item ModuleAction
     * @returns {object} Promise<boolean>
     */
    navigate(item) {
        const route = this.getActionRoute(item);
        return this.router.navigate([route.route], {
            queryParams: route.params
        });
    }
    /**
     * Navigate using menu item information
     *
     * @param {object} item MenuItem
     */
    navigateUsingMenuItem(item) {
        if (item.link.route) {
            this.router.navigate([item.link.route ?? ''], {
                queryParams: item.link.params ?? {}
            }).then();
            return;
        }
        if (item.link.url) {
            this.router.navigateByUrl(item.link.url ?? '').then();
            return;
        }
    }
    /**
     * Get action route info
     *
     * @param {object} action ModuleAction
     * @returns {object} NavigationRoute
     */
    getActionRoute(action) {
        let url = action.url;
        let route = null;
        let params = {};
        let process = action?.process;
        if (url.startsWith(ROUTE_PREFIX)) {
            route = url.replace(ROUTE_PREFIX, '');
            url = null;
            if (action.params) {
                params = action.params;
            }
            else {
                const routeParts = route.split('?');
                route = routeParts[0];
                const queryParamsStr = routeParts[1];
                const queryParamsObj = {};
                if (queryParamsStr) {
                    queryParamsStr.split('&').forEach(param => {
                        const keyValue = param.split('=');
                        queryParamsObj[keyValue[0]] = keyValue[1];
                    });
                }
                params = queryParamsObj;
            }
        }
        return { route, url, params, process };
    }
    /**
     * Get label for module action item
     *
     * @param {string} module name
     * @param {object} item action
     * @param {object} languages map
     * @param {string} labelKey to use
     * @returns {string} label
     */
    getActionLabel(module, item, languages, labelKey = '') {
        if (!languages || !languages.modStrings || !item || !module) {
            return '';
        }
        let key = labelKey;
        if (!key) {
            key = item.labelKey;
        }
        let label = languages.modStrings[module] && languages.modStrings[module][key];
        if (!label) {
            label = languages.appStrings && languages.appStrings[key];
        }
        if (!label && item.module) {
            label = languages.modStrings[item.module] && languages.modStrings[item.module][key];
        }
        if (!label) {
            label = languages.modStrings.administration && languages.modStrings.administration[key];
        }
        return label || '';
    }
    /**
     * Get record router link route info
     *
     * @param {string} module name
     * @param {string} id fo the record
     * @returns {string} router link
     */
    getRecordRouterLink(module, id, isEdit) {
        if (isEdit) {
            return `/${module}/edit/${id}`;
        }
        return `/${module}/record/${id}`;
    }
    /**
     * Navigate back using return params
     * @param record
     * @param moduleName
     * @param params
     */
    navigateBack(record, moduleName, params) {
        let returnModule = this.getReturnModule(params);
        let returnAction = this.getReturnAction(params);
        const returnId = this.getReturnId(params);
        let route = '';
        if (returnModule) {
            route += '/' + returnModule;
        }
        if (returnAction) {
            route += '/' + returnAction;
        }
        if (returnId) {
            route += '/' + returnId;
        }
        if (returnModule === moduleName && returnAction === 'record') {
            const rid = !returnId ? record.id : returnId;
            route = '/' + moduleName + '/record/' + rid;
        }
        if (!route && record && record.id) {
            route = '/' + moduleName + '/record/' + record.id;
        }
        if (!route && record && record.id) {
            route = '/' + moduleName;
        }
        this.router.navigate([route]).then();
    }
    /**
     * Extract return id
     * @param params
     */
    getReturnId(params) {
        return params.return_id || '';
    }
    /**
     * Extract and map return action
     * @param params
     */
    getReturnAction(params) {
        let returnAction = '';
        if (params.return_action) {
            returnAction = this.actionNameMapper.toFrontend(params.return_action);
        }
        return returnAction;
    }
    /**
     * Extract and map return action
     * @param params
     */
    getReturnModule(params) {
        let returnModule = '';
        if (params.return_module) {
            returnModule = this.moduleNameMapper.toFrontend(params.return_module);
        }
        return returnModule;
    }
    static { this.ɵfac = function ModuleNavigation_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ModuleNavigation)(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i2.ModuleNameMapper), i0.ɵɵinject(i3.ActionNameMapper)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ModuleNavigation, factory: ModuleNavigation.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModuleNavigation, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.Router }, { type: i2.ModuleNameMapper }, { type: i3.ActionNameMapper }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLW5hdmlnYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL21vZHVsZS1uYXZpZ2F0aW9uL21vZHVsZS1uYXZpZ2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBS3ZDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGtEQUFrRCxDQUFDO0FBQ2xGLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGtEQUFrRCxDQUFDOzs7OztBQVNsRixNQUFNLFlBQVksR0FBRyxLQUFLLENBQUM7QUFHM0IsTUFBTSxPQUFPLGdCQUFnQjtJQUV6QixZQUNjLE1BQWMsRUFDZCxnQkFBa0MsRUFDbEMsZ0JBQWtDO1FBRmxDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFFaEQsQ0FBQztJQUVEOztPQUVHO0lBRUg7Ozs7OztPQU1HO0lBQ0ksYUFBYSxDQUFDLE1BQWMsRUFBRSxVQUFzQjtRQUN2RCxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3JDLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRCxPQUFPLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLGNBQWMsQ0FBQyxNQUFvQixFQUFFLGNBQXFDO1FBQzdFLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxj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LENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzFFLENBQUM7UUFDRCxPQUFPLFlBQVksQ0FBQztJQUN4QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksZUFBZSxDQUFDLE1BQStCO1FBQ2xELElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUV0QixJQUFJLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN2QixZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDMUUsQ0FBQztRQUVELE9BQU8sWUFBWSxDQUFDO0lBQ3hCLENBQUM7aUhBNVFRLGdCQUFnQjt1RUFBaEIsZ0JBQWdCLFdBQWhCLGdCQUFnQixtQkFESixNQUFNOztpRkFDbEIsZ0JBQWdCO2NBRDVCLFVBQVU7ZUFBQyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7TW9kdWxlQWN0aW9uLCBOYXZiYXJNb2R1bGUsIE5hdmlnYXRpb259IGZyb20gJy4uLy4uLy4uL3N0b3JlL25hdmlnYXRpb24vbmF2aWdhdGlvbi5zdG9yZSc7XG5pbXBvcnQge0xhbmd1YWdlTGlzdFN0cmluZ01hcCwgTGFuZ3VhZ2VTdHJpbmdzfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5pbXBvcnQge01lbnVJdGVtfSBmcm9tICcuLi8uLi8uLi9jb21tb24vbWVudS9tZW51Lm1vZGVsJztcbmltcG9ydCB7UmVjb3JkfSBmcm9tICcuLi8uLi8uLi9jb21tb24vcmVjb3JkL3JlY29yZC5tb2RlbCc7XG5pbXBvcnQge01vZHVsZU5hbWVNYXBwZXJ9IGZyb20gJy4uL21vZHVsZS1uYW1lLW1hcHBlci9tb2R1bGUtbmFtZS1tYXBwZXIuc2VydmljZSc7XG5pbXBvcnQge0FjdGlvbk5hbWVNYXBwZXJ9IGZyb20gJy4uL2FjdGlvbi1uYW1lLW1hcHBlci9hY3Rpb24tbmFtZS1tYXBwZXIuc2VydmljZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2aWdhdGlvblJvdXRlIHtcbiAgICByb3V0ZTogc3RyaW5nO1xuICAgIHVybDogc3RyaW5nO1xuICAgIHBhcmFtczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgICBwcm9jZXNzPzogc3RyaW5nO1xufVxuXG5jb25zdCBST1VURV9QUkVGSVggPSAnLi8jJztcblxuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXG5leHBvcnQgY2xhc3MgTW9kdWxlTmF2aWdhdGlvbiB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwcm90ZWN0ZWQgbW9kdWxlTmFtZU1hcHBlcjogTW9kdWxlTmFtZU1hcHBlcixcbiAgICAgICAgcHJvdGVjdGVkIGFjdGlvbk5hbWVNYXBwZXI6IEFjdGlvbk5hbWVNYXBwZXJcbiAgICApIHtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQdWJsaWMgQXBpXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBHZXQgbW9kdWxlIGluZm9cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtb2R1bGUgbmFtZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBuYXZpZ2F0aW9uIGluZm9cbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBtb2R1bGUgaW5mb1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXRNb2R1bGVJbmZvKG1vZHVsZTogc3RyaW5nLCBuYXZpZ2F0aW9uOiBOYXZpZ2F0aW9uKTogTmF2YmFyTW9kdWxlIHtcbiAgICAgICAgaWYgKCFuYXZpZ2F0aW9uIHx8ICFuYXZpZ2F0aW9uLm1vZHVsZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5hdmlnYXRpb24ubW9kdWxlc1ttb2R1bGVdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBtb2R1bGUgbGFiZWxcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtb2R1bGUgaW5mb1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBhcHBMaXN0U3RyaW5ncyBtYXBcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgbW9kdWxlIGxhYmVsXG4gICAgICovXG4gICAgcHVibGljIGdldE1vZHVsZUxhYmVsKG1vZHVsZTogTmF2YmFyTW9kdWxlLCBhcHBMaXN0U3RyaW5nczogTGFuZ3VhZ2VMaXN0U3RyaW5nTWFwKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKCFhcHBMaXN0U3RyaW5ncyB8fCAhYXBwTGlzdFN0cmluZ3MubW9kdWxlTGlzdCB8fCAhbW9kdWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbGFiZWxLZXkgPSAobW9kdWxlICYmIG1vZHVsZS5sYWJlbEtleSkgfHwgJyc7XG5cbiAgICAgICAgcmV0dXJuIGFwcExpc3RTdHJpbmdzLm1vZHVsZUxpc3RbbGFiZWxLZXldIHx8IGxhYmVsS2V5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBtb2R1bGUgcm91dGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtb2R1bGUgTmF2YmFyTW9kdWxlXG4gICAgICogQHJldHVybnMge29iamVjdH0gTmF2aWdhdGlvblJvdXRlXG4gICAgICovXG4gICAgcHVibGljIGdldE1vZHVsZVJvdXRlKG1vZHVsZTogTmF2YmFyTW9kdWxlKTogTmF2aWdhdGlvblJvdXRlIHtcbiAgICAgICAgbGV0IHVybCA9IChtb2R1bGUgJiYgbW9kdWxlLmRlZmF1bHRSb3V0ZSkgfHwgJyc7XG4gICAgICAgIGxldCByb3V0ZSA9IG51bGw7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IG51bGw7XG5cbiAgICAgICAgaWYgKHVybC5zdGFydHNXaXRoKFJPVVRFX1BSRUZJWCkpIHtcbiAgICAgICAgICAgIHJvdXRlID0gdXJsLnJlcGxhY2UoUk9VVEVfUFJFRklYLCAnJyk7XG4gICAgICAgICAgICB1cmwgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtyb3V0ZSwgdXJsLCBwYXJhbXN9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE5hdmlnYXRlIHVzaW5nIGFjdGlvbiBpbmZvcm1hdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGl0ZW0gTW9kdWxlQWN0aW9uXG4gICAgICogQHJldHVybnMge29iamVjdH0gUHJvbWlzZTxib29sZWFuPlxuICAgICAqL1xuICAgIHB1YmxpYyBuYXZpZ2F0ZShpdGVtOiBNb2R1bGVBY3Rpb24pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgY29uc3Qgcm91dGUgPSB0aGlzLmdldEFjdGlvblJvdXRlKGl0ZW0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbcm91dGUucm91dGVdLCB7XG4gICAgICAgICAgICBxdWVyeVBhcmFtczogcm91dGUucGFyYW1zXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE5hdmlnYXRlIHVzaW5nIG1lbnUgaXRlbSBpbmZvcm1hdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGl0ZW0gTWVudUl0ZW1cbiAgICAgKi9cbiAgICBwdWJsaWMgbmF2aWdhdGVVc2luZ01lbnVJdGVtKGl0ZW06IE1lbnVJdGVtKTogdm9pZCB7XG5cbiAgICAgICAgaWYoaXRlbS5saW5rLnJvdXRlKSB7XG5cbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtpdGVtLmxpbmsucm91dGUgPz8gJyddLCB7XG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXM6IGl0ZW0ubGluay5wYXJhbXMgPz8ge31cbiAgICAgICAgICAgIH0pLnRoZW4oKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoaXRlbS5saW5rLnVybCkge1xuXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGl0ZW0ubGluay51cmwgPz8gJycpLnRoZW4oKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGFjdGlvbiByb3V0ZSBpbmZvXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gYWN0aW9uIE1vZHVsZUFjdGlvblxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IE5hdmlnYXRpb25Sb3V0ZVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRBY3Rpb25Sb3V0ZShhY3Rpb246IE1vZHVsZUFjdGlvbik6IE5hdmlnYXRpb25Sb3V0ZSB7XG4gICAgICAgIGxldCB1cmwgPSBhY3Rpb24udXJsO1xuICAgICAgICBsZXQgcm91dGUgPSBudWxsO1xuICAgICAgICBsZXQgcGFyYW1zID0ge307XG4gICAgICAgIGxldCBwcm9jZXNzID0gYWN0aW9uPy5wcm9jZXNzXG5cbiAgICAgICAgaWYgKHVybC5zdGFydHNXaXRoKFJPVVRFX1BSRUZJWCkpIHtcbiAgICAgICAgICAgIHJvdXRlID0gdXJsLnJlcGxhY2UoUk9VVEVfUFJFRklYLCAnJyk7XG4gICAgICAgICAgICB1cmwgPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAoYWN0aW9uLnBhcmFtcykge1xuICAgICAgICAgICAgICAgIHBhcmFtcyA9IGFjdGlvbi5wYXJhbXM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlUGFydHMgPSByb3V0ZS5zcGxpdCgnPycpO1xuICAgICAgICAgICAgICAgIHJvdXRlID0gcm91dGVQYXJ0c1swXTtcbiAgICAgICAgICAgICAgICBjb25zdCBxdWVyeVBhcmFtc1N0ciA9IHJvdXRlUGFydHNbMV07XG4gICAgICAgICAgICAgICAgY29uc3QgcXVlcnlQYXJhbXNPYmogPSB7fTtcblxuICAgICAgICAgICAgICAgIGlmIChxdWVyeVBhcmFtc1N0cikge1xuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtc1N0ci5zcGxpdCgnJicpLmZvckVhY2gocGFyYW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5VmFsdWUgPSBwYXJhbS5zcGxpdCgnPScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXNPYmpba2V5VmFsdWVbMF1dID0ga2V5VmFsdWVbMV07XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXJhbXMgPSBxdWVyeVBhcmFtc09iajtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7cm91dGUsIHVybCwgcGFyYW1zLCBwcm9jZXNzfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgbGFiZWwgZm9yIG1vZHVsZSBhY3Rpb24gaXRlbVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1vZHVsZSBuYW1lXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGl0ZW0gYWN0aW9uXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGxhbmd1YWdlcyBtYXBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGFiZWxLZXkgdG8gdXNlXG4gICAgICogQHJldHVybnMge3N0cmluZ30gbGFiZWxcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0QWN0aW9uTGFiZWwobW9kdWxlOiBzdHJpbmcsIGl0ZW06IE1vZHVsZUFjdGlvbiwgbGFuZ3VhZ2VzOiBMYW5ndWFnZVN0cmluZ3MsIGxhYmVsS2V5ID0gJycpOiBzdHJpbmcge1xuICAgICAgICBpZiAoIWxhbmd1YWdlcyB8fCAhbGFuZ3VhZ2VzLm1vZFN0cmluZ3MgfHwgIWl0ZW0gfHwgIW1vZHVsZSkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGtleSA9IGxhYmVsS2V5O1xuICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAga2V5ID0gaXRlbS5sYWJlbEtleTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBsYWJlbCA9IGxhbmd1YWdlcy5tb2RTdHJpbmdzW21vZHVsZV0gJiYgbGFuZ3VhZ2VzLm1vZFN0cmluZ3NbbW9kdWxlXVtrZXldO1xuXG4gICAgICAgIGlmICghbGFiZWwpIHtcbiAgICAgICAgICAgIGxhYmVsID0gbGFuZ3VhZ2VzLmFwcFN0cmluZ3MgJiYgbGFuZ3VhZ2VzLmFwcFN0cmluZ3Nba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghbGFiZWwgJiYgaXRlbS5tb2R1bGUpIHtcbiAgICAgICAgICAgIGxhYmVsID0gbGFuZ3VhZ2VzLm1vZFN0cmluZ3NbaXRlbS5tb2R1bGVdICYmIGxhbmd1YWdlcy5tb2RTdHJpbmdzW2l0ZW0ubW9kdWxlXVtrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFsYWJlbCkge1xuICAgICAgICAgICAgbGFiZWwgPSBsYW5ndWFnZXMubW9kU3RyaW5ncy5hZG1pbmlzdHJhdGlvbiAmJiBsYW5ndWFnZXMubW9kU3RyaW5ncy5hZG1pbmlzdHJhdGlvbltrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxhYmVsIHx8ICcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCByZWNvcmQgcm91dGVyIGxpbmsgcm91dGUgaW5mb1xuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1vZHVsZSBuYW1lXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIGZvIHRoZSByZWNvcmRcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSByb3V0ZXIgbGlua1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXRSZWNvcmRSb3V0ZXJMaW5rKG1vZHVsZTogc3RyaW5nLCBpZDogc3RyaW5nLCBpc0VkaXQ/OiBib29sZWFuKTogc3RyaW5nIHtcblxuICAgICAgICBpZihpc0VkaXQpIHtcbiAgICAgICAgICAgIHJldHVybiBgLyR7bW9kdWxlfS9lZGl0LyR7aWR9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBgLyR7bW9kdWxlfS9yZWNvcmQvJHtpZH1gO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE5hdmlnYXRlIGJhY2sgdXNpbmcgcmV0dXJuIHBhcmFtc1xuICAgICAqIEBwYXJhbSByZWNvcmRcbiAgICAgKiBAcGFyYW0gbW9kdWxlTmFtZVxuICAgICAqIEBwYXJhbSBwYXJhbXNcbiAgICAgKi9cbiAgICBwdWJsaWMgbmF2aWdhdGVCYWNrKFxuICAgICAgICByZWNvcmQ6IFJlY29yZCxcbiAgICAgICAgbW9kdWxlTmFtZTogc3RyaW5nLFxuICAgICAgICBwYXJhbXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH1cbiAgICApIHtcblxuICAgICAgICBsZXQgcmV0dXJuTW9kdWxlID0gdGhpcy5nZXRSZXR1cm5Nb2R1bGUocGFyYW1zKTtcbiAgICAgICAgbGV0IHJldHVybkFjdGlvbiA9IHRoaXMuZ2V0UmV0dXJuQWN0aW9uKHBhcmFtcyk7XG4gICAgICAgIGNvbnN0IHJldHVybklkID0gdGhpcy5nZXRSZXR1cm5JZChwYXJhbXMpO1xuXG4gICAgICAgIGxldCByb3V0ZSA9ICcnO1xuICAgICAgICBpZiAocmV0dXJuTW9kdWxlKSB7XG4gICAgICAgICAgICByb3V0ZSArPSAnLycgKyByZXR1cm5Nb2R1bGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmV0dXJuQWN0aW9uKSB7XG4gICAgICAgICAgICByb3V0ZSArPSAnLycgKyByZXR1cm5BY3Rpb247XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmV0dXJuSWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9ICcvJyArIHJldHVybklkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJldHVybk1vZHVsZSA9PT0gbW9kdWxlTmFtZSAmJiByZXR1cm5BY3Rpb24gPT09ICdyZWNvcmQnKSB7XG4gICAgICAgICAgICBjb25zdCByaWQgPSAhcmV0dXJuSWQgPyByZWNvcmQuaWQgOiByZXR1cm5JZDtcbiAgICAgICAgICAgIHJvdXRlID0gJy8nICsgbW9kdWxlTmFtZSArICcvcmVjb3JkLycgKyByaWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXJvdXRlICYmIHJlY29yZCAmJiByZWNvcmQuaWQpIHtcbiAgICAgICAgICAgIHJvdXRlID0gJy8nICsgbW9kdWxlTmFtZSArICcvcmVjb3JkLycgKyByZWNvcmQuaWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXJvdXRlICYmIHJlY29yZCAmJiByZWNvcmQuaWQpIHtcbiAgICAgICAgICAgIHJvdXRlID0gJy8nICsgbW9kdWxlTmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtyb3V0ZV0pLnRoZW4oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0IHJldHVybiBpZFxuICAgICAqIEBwYXJhbSBwYXJhbXNcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0UmV0dXJuSWQocGFyYW1zOiB7IFtwOiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgICAgICByZXR1cm4gcGFyYW1zLnJldHVybl9pZCB8fCAnJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0IGFuZCBtYXAgcmV0dXJuIGFjdGlvblxuICAgICAqIEBwYXJhbSBwYXJhbXNcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0UmV0dXJuQWN0aW9uKHBhcmFtczogeyBbcDogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICAgICAgbGV0IHJldHVybkFjdGlvbiA9ICcnO1xuXG4gICAgICAgIGlmIChwYXJhbXMucmV0dXJuX2FjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuQWN0aW9uID0gdGhpcy5hY3Rpb25OYW1lTWFwcGVyLnRvRnJvbnRlbmQocGFyYW1zLnJldHVybl9hY3Rpb24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXR1cm5BY3Rpb247XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdCBhbmQgbWFwIHJldHVybiBhY3Rpb25cbiAgICAgKiBAcGFyYW0gcGFyYW1zXG4gICAgICovXG4gICAgcHVibGljIGdldFJldHVybk1vZHVsZShwYXJhbXM6IHsgW3A6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgICAgIGxldCByZXR1cm5Nb2R1bGUgPSAnJztcblxuICAgICAgICBpZiAocGFyYW1zLnJldHVybl9tb2R1bGUpIHtcbiAgICAgICAgICAgIHJldHVybk1vZHVsZSA9IHRoaXMubW9kdWxlTmFtZU1hcHBlci50b0Zyb250ZW5kKHBhcmFtcy5yZXR1cm5fbW9kdWxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXR1cm5Nb2R1bGU7XG4gICAgfVxufVxuIl19