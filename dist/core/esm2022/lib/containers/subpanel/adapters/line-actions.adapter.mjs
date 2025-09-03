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
import { combineLatestWith, of } from 'rxjs';
import { map, shareReplay, take } from 'rxjs/operators';
import { AsyncActionService } from '../../../services/process/processes/async-action/async-action';
import { MessageService } from '../../../services/message/message.service';
import { ConfirmationModalService } from '../../../services/modals/confirmation-modal.service';
import { LanguageStore } from '../../../store/language/language.store';
import { BaseRecordActionsAdapter } from '../../../services/actions/base-record-action.adapter';
import { SubpanelStore } from '../store/subpanel/subpanel.store';
import { SubpanelLineActionManager } from '../line-actions/line-action-manager.service';
import { SelectModalService } from "../../../services/modals/select-modal.service";
import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { AppMetadataStore } from "../../../store/app-metadata/app-metadata.store.service";
import * as i0 from "@angular/core";
import * as i1 from "../store/subpanel/subpanel.store";
import * as i2 from "../line-actions/line-action-manager.service";
import * as i3 from "../../../services/process/processes/async-action/async-action";
import * as i4 from "../../../services/message/message.service";
import * as i5 from "../../../services/modals/confirmation-modal.service";
import * as i6 from "../../../store/language/language.store";
import * as i7 from "../../../services/modals/select-modal.service";
import * as i8 from "../../../store/metadata/metadata.store.service";
import * as i9 from "../../../store/app-metadata/app-metadata.store.service";
export class SubpanelLineActionsAdapter extends BaseRecordActionsAdapter {
    constructor(store, actionManager, asyncActionService, message, confirmation, language, selectModalService, metadata, appMetadataStore) {
        super(actionManager, asyncActionService, message, confirmation, language, selectModalService, metadata, appMetadataStore);
        this.store = store;
        this.actionManager = actionManager;
        this.asyncActionService = asyncActionService;
        this.message = message;
        this.confirmation = confirmation;
        this.language = language;
        this.selectModalService = selectModalService;
        this.metadata = metadata;
        this.appMetadataStore = appMetadataStore;
    }
    getActions(context = null) {
        return this.store.metadata$.pipe(map(metadata => metadata.lineActions)).pipe(combineLatestWith(of('list').pipe(shareReplay())), map(([actions, mode]) => {
            return this.parseModeActions(actions, mode, context);
        }));
    }
    buildActionData(action, context) {
        return {
            record: (context && context.record) || null,
            store: this.store,
            action: action
        };
    }
    getMode() {
        return 'list';
    }
    getModuleName(context) {
        return this.store.metadata.module;
    }
    reload(action, process, context) {
        this.store.load(false).pipe(take(1)).subscribe();
        this.store.loadAllStatistics(false).pipe(take(1)).subscribe();
    }
    /**
     * Build backend process input
     *
     * @param action
     * @param actionName
     * @param moduleName
     * @param context
     */
    buildActionInput(action, actionName, moduleName, context = null) {
        const metadata = this.store.metadata;
        const collectionList = metadata.collection_list || null;
        const module = (context && context.module) || moduleName;
        let linkField = metadata.get_subpanel_data;
        if (collectionList && collectionList[module] && collectionList[module].get_subpanel_data) {
            linkField = collectionList[module].get_subpanel_data;
        }
        if (linkField && action && action.params && action.params.linkFieldMapping) {
            Object.keys(action.params.linkFieldMapping).some(key => {
                if (linkField.includes(key)) {
                    linkField = action.params.linkFieldMapping[key];
                    return true;
                }
            });
        }
        return {
            action: actionName,
            module: moduleName,
            id: (context && context.record && context.record.id) || '',
            payload: {
                baseModule: this.store.parentModule,
                baseRecordId: this.store.parentId,
                linkField,
                recordModule: module,
                relateModule: this.store.metadata.module,
                relateRecordId: (context && context.record && context.record.id) || '',
            }
        };
    }
    static { this.ɵfac = function SubpanelLineActionsAdapter_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SubpanelLineActionsAdapter)(i0.ɵɵinject(i1.SubpanelStore), i0.ɵɵinject(i2.SubpanelLineActionManager), i0.ɵɵinject(i3.AsyncActionService), i0.ɵɵinject(i4.MessageService), i0.ɵɵinject(i5.ConfirmationModalService), i0.ɵɵinject(i6.LanguageStore), i0.ɵɵinject(i7.SelectModalService), i0.ɵɵinject(i8.MetadataStore), i0.ɵɵinject(i9.AppMetadataStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SubpanelLineActionsAdapter, factory: SubpanelLineActionsAdapter.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SubpanelLineActionsAdapter, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.SubpanelStore }, { type: i2.SubpanelLineActionManager }, { type: i3.AsyncActionService }, { type: i4.MessageService }, { type: i5.ConfirmationModalService }, { type: i6.LanguageStore }, { type: i7.SelectModalService }, { type: i8.MetadataStore }, { type: i9.AppMetadataStore }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS1hY3Rpb25zLmFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9zdWJwYW5lbC9hZGFwdGVycy9saW5lLWFjdGlvbnMuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUd6QyxPQUFPLEVBQUMsaUJBQWlCLEVBQWMsRUFBRSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxHQUFHLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3RELE9BQU8sRUFBbUIsa0JBQWtCLEVBQUMsTUFBTSwrREFBK0QsQ0FBQztBQUNuSCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFFekUsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0scURBQXFELENBQUM7QUFDN0YsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdDQUF3QyxDQUFDO0FBQ3JFLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLHNEQUFzRCxDQUFDO0FBRTlGLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRCxPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUN0RixPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUNqRixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sZ0RBQWdELENBQUM7QUFDN0UsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sd0RBQXdELENBQUM7Ozs7Ozs7Ozs7O0FBS3hGLE1BQU0sT0FBTywwQkFBMkIsU0FBUSx3QkFBZ0Q7SUFFNUYsWUFDYyxLQUFvQixFQUNwQixhQUF3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RnZCLE1BQU07O2lGQUVULDBCQUEwQjtjQUh0QyxVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FjdGlvbiwgQWN0aW9uQ29udGV4dH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2FjdGlvbnMvYWN0aW9uLm1vZGVsJztcbmltcG9ydCB7Vmlld01vZGV9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi92aWV3cy92aWV3Lm1vZGVsJztcbmltcG9ydCB7Y29tYmluZUxhdGVzdFdpdGgsIE9ic2VydmFibGUsIG9mfSBmcm9tICdyeGpzJztcbmltcG9ydCB7bWFwLCBzaGFyZVJlcGxheSwgdGFrZX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtBc3luY0FjdGlvbklucHV0LCBBc3luY0FjdGlvblNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3Byb2Nlc3MvcHJvY2Vzc2VzL2FzeW5jLWFjdGlvbi9hc3luYy1hY3Rpb24nO1xuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbWVzc2FnZS9tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHtQcm9jZXNzfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9wcm9jZXNzL3Byb2Nlc3Muc2VydmljZSc7XG5pbXBvcnQge0NvbmZpcm1hdGlvbk1vZGFsU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbW9kYWxzL2NvbmZpcm1hdGlvbi1tb2RhbC5zZXJ2aWNlJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZX0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtCYXNlUmVjb3JkQWN0aW9uc0FkYXB0ZXJ9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2FjdGlvbnMvYmFzZS1yZWNvcmQtYWN0aW9uLmFkYXB0ZXInO1xuaW1wb3J0IHtTdWJwYW5lbExpbmVBY3Rpb25EYXRhfSBmcm9tICcuLi9saW5lLWFjdGlvbnMvbGluZS5hY3Rpb24nO1xuaW1wb3J0IHtTdWJwYW5lbFN0b3JlfSBmcm9tICcuLi9zdG9yZS9zdWJwYW5lbC9zdWJwYW5lbC5zdG9yZSc7XG5pbXBvcnQge1N1YnBhbmVsTGluZUFjdGlvbk1hbmFnZXJ9IGZyb20gJy4uL2xpbmUtYWN0aW9ucy9saW5lLWFjdGlvbi1tYW5hZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHtTZWxlY3RNb2RhbFNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9tb2RhbHMvc2VsZWN0LW1vZGFsLnNlcnZpY2VcIjtcbmltcG9ydCB7TWV0YWRhdGFTdG9yZX0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvbWV0YWRhdGEvbWV0YWRhdGEuc3RvcmUuc2VydmljZSc7XG5pbXBvcnQge0FwcE1ldGFkYXRhU3RvcmV9IGZyb20gXCIuLi8uLi8uLi9zdG9yZS9hcHAtbWV0YWRhdGEvYXBwLW1ldGFkYXRhLnN0b3JlLnNlcnZpY2VcIjtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgU3VicGFuZWxMaW5lQWN0aW9uc0FkYXB0ZXIgZXh0ZW5kcyBCYXNlUmVjb3JkQWN0aW9uc0FkYXB0ZXI8U3VicGFuZWxMaW5lQWN0aW9uRGF0YT4ge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBzdG9yZTogU3VicGFuZWxTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGFjdGlvbk1hbmFnZXI6IFN1YnBhbmVsTGluZUFjdGlvbk1hbmFnZXIsXG4gICAgICAgIHByb3RlY3RlZCBhc3luY0FjdGlvblNlcnZpY2U6IEFzeW5jQWN0aW9uU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIG1lc3NhZ2U6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgY29uZmlybWF0aW9uOiBDb25maXJtYXRpb25Nb2RhbFNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBsYW5ndWFnZTogTGFuZ3VhZ2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIHNlbGVjdE1vZGFsU2VydmljZTogU2VsZWN0TW9kYWxTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgbWV0YWRhdGE6IE1ldGFkYXRhU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBhcHBNZXRhZGF0YVN0b3JlOiBBcHBNZXRhZGF0YVN0b3JlXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgYWN0aW9uTWFuYWdlcixcbiAgICAgICAgICAgIGFzeW5jQWN0aW9uU2VydmljZSxcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICBjb25maXJtYXRpb24sXG4gICAgICAgICAgICBsYW5ndWFnZSxcbiAgICAgICAgICAgIHNlbGVjdE1vZGFsU2VydmljZSxcbiAgICAgICAgICAgIG1ldGFkYXRhLFxuICAgICAgICAgICAgYXBwTWV0YWRhdGFTdG9yZVxuICAgICAgICApXG4gICAgfVxuXG4gICAgZ2V0QWN0aW9ucyhjb250ZXh0OiBBY3Rpb25Db250ZXh0ID0gbnVsbCk6IE9ic2VydmFibGU8QWN0aW9uW10+IHtcblxuICAgICAgICByZXR1cm4gdGhpcy5zdG9yZS5tZXRhZGF0YSQucGlwZShtYXAobWV0YWRhdGEgPT4gbWV0YWRhdGEubGluZUFjdGlvbnMpKS5waXBlKFxuICAgICAgICAgICAgY29tYmluZUxhdGVzdFdpdGgob2YoJ2xpc3QnIGFzIFZpZXdNb2RlKS5waXBlKHNoYXJlUmVwbGF5KCkpKSxcbiAgICAgICAgICAgIG1hcCgoW2FjdGlvbnMsIG1vZGVdOiBbQWN0aW9uW10sIFZpZXdNb2RlXSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlTW9kZUFjdGlvbnMoYWN0aW9ucywgbW9kZSwgY29udGV4dCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGJ1aWxkQWN0aW9uRGF0YShhY3Rpb246IEFjdGlvbiwgY29udGV4dD86IEFjdGlvbkNvbnRleHQpOiBTdWJwYW5lbExpbmVBY3Rpb25EYXRhIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlY29yZDogKGNvbnRleHQgJiYgY29udGV4dC5yZWNvcmQpIHx8IG51bGwsXG4gICAgICAgICAgICBzdG9yZTogdGhpcy5zdG9yZSxcbiAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uXG4gICAgICAgIH0gYXMgU3VicGFuZWxMaW5lQWN0aW9uRGF0YTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0TW9kZSgpOiBWaWV3TW9kZSB7XG4gICAgICAgIHJldHVybiAnbGlzdCcgYXMgVmlld01vZGU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldE1vZHVsZU5hbWUoY29udGV4dD86IEFjdGlvbkNvbnRleHQpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5zdG9yZS5tZXRhZGF0YS5tb2R1bGU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlbG9hZChhY3Rpb246IEFjdGlvbiwgcHJvY2VzczogUHJvY2VzcywgY29udGV4dD86IEFjdGlvbkNvbnRleHQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdG9yZS5sb2FkKGZhbHNlKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLnN0b3JlLmxvYWRBbGxTdGF0aXN0aWNzKGZhbHNlKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIGJhY2tlbmQgcHJvY2VzcyBpbnB1dFxuICAgICAqXG4gICAgICogQHBhcmFtIGFjdGlvblxuICAgICAqIEBwYXJhbSBhY3Rpb25OYW1lXG4gICAgICogQHBhcmFtIG1vZHVsZU5hbWVcbiAgICAgKiBAcGFyYW0gY29udGV4dFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBidWlsZEFjdGlvbklucHV0KGFjdGlvbjogQWN0aW9uLCBhY3Rpb25OYW1lOiBzdHJpbmcsIG1vZHVsZU5hbWU6IHN0cmluZywgY29udGV4dDogQWN0aW9uQ29udGV4dCA9IG51bGwpOiBBc3luY0FjdGlvbklucHV0IHtcblxuICAgICAgICBjb25zdCBtZXRhZGF0YSA9IHRoaXMuc3RvcmUubWV0YWRhdGE7XG4gICAgICAgIGNvbnN0IGNvbGxlY3Rpb25MaXN0ID0gbWV0YWRhdGEuY29sbGVjdGlvbl9saXN0IHx8IG51bGw7XG5cbiAgICAgICAgY29uc3QgbW9kdWxlID0gKGNvbnRleHQgJiYgY29udGV4dC5tb2R1bGUpIHx8IG1vZHVsZU5hbWU7XG5cbiAgICAgICAgbGV0IGxpbmtGaWVsZDogc3RyaW5nID0gbWV0YWRhdGEuZ2V0X3N1YnBhbmVsX2RhdGE7XG5cbiAgICAgICAgaWYoY29sbGVjdGlvbkxpc3QgJiYgY29sbGVjdGlvbkxpc3RbbW9kdWxlXSAmJiBjb2xsZWN0aW9uTGlzdFttb2R1bGVdLmdldF9zdWJwYW5lbF9kYXRhKXtcbiAgICAgICAgICAgIGxpbmtGaWVsZCA9IGNvbGxlY3Rpb25MaXN0W21vZHVsZV0uZ2V0X3N1YnBhbmVsX2RhdGE7XG4gICAgICAgIH1cblxuICAgICAgICBpZihsaW5rRmllbGQgJiYgYWN0aW9uICYmIGFjdGlvbi5wYXJhbXMgJiYgYWN0aW9uLnBhcmFtcy5saW5rRmllbGRNYXBwaW5nKXtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGFjdGlvbi5wYXJhbXMubGlua0ZpZWxkTWFwcGluZykuc29tZShrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChsaW5rRmllbGQuaW5jbHVkZXMoa2V5KSl7XG4gICAgICAgICAgICAgICAgICAgIGxpbmtGaWVsZCA9IGFjdGlvbi5wYXJhbXMubGlua0ZpZWxkTWFwcGluZ1trZXldO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uTmFtZSxcbiAgICAgICAgICAgIG1vZHVsZTogbW9kdWxlTmFtZSxcbiAgICAgICAgICAgIGlkOiAoY29udGV4dCAmJiBjb250ZXh0LnJlY29yZCAmJiBjb250ZXh0LnJlY29yZC5pZCkgfHwgJycsXG4gICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgYmFzZU1vZHVsZTogdGhpcy5zdG9yZS5wYXJlbnRNb2R1bGUsXG4gICAgICAgICAgICAgICAgYmFzZVJlY29yZElkOiB0aGlzLnN0b3JlLnBhcmVudElkLFxuICAgICAgICAgICAgICAgIGxpbmtGaWVsZCxcbiAgICAgICAgICAgICAgICByZWNvcmRNb2R1bGU6IG1vZHVsZSxcbiAgICAgICAgICAgICAgICByZWxhdGVNb2R1bGU6IHRoaXMuc3RvcmUubWV0YWRhdGEubW9kdWxlLFxuICAgICAgICAgICAgICAgIHJlbGF0ZVJlY29yZElkOiAoY29udGV4dCAmJiBjb250ZXh0LnJlY29yZCAmJiBjb250ZXh0LnJlY29yZC5pZCkgfHwgJycsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gYXMgQXN5bmNBY3Rpb25JbnB1dDtcbiAgICB9XG59XG4iXX0=