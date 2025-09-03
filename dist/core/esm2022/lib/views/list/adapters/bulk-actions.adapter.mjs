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
import { isFalse } from '../../../common/utils/value-utils';
import { map, take } from 'rxjs/operators';
import { AsyncActionService } from '../../../services/process/processes/async-action/async-action';
import { MessageService } from '../../../services/message/message.service';
import { ListViewStore } from '../store/list-view/list-view.store';
import { ConfirmationModalService } from '../../../services/modals/confirmation-modal.service';
import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { SelectModalService } from '../../../services/modals/select-modal.service';
import { AppMetadataStore } from "../../../store/app-metadata/app-metadata.store.service";
import * as i0 from "@angular/core";
import * as i1 from "../store/list-view/list-view.store";
import * as i2 from "../../../services/message/message.service";
import * as i3 from "../../../services/modals/confirmation-modal.service";
import * as i4 from "../../../services/modals/select-modal.service";
import * as i5 from "../../../services/process/processes/async-action/async-action";
import * as i6 from "../../../store/metadata/metadata.store.service";
import * as i7 from "../../../store/app-metadata/app-metadata.store.service";
export class BulkActionsAdapter {
    constructor(store, message, confirmation, selectModalService, asyncAction, metadata, appMetadataStore) {
        this.store = store;
        this.message = message;
        this.confirmation = confirmation;
        this.selectModalService = selectModalService;
        this.asyncAction = asyncAction;
        this.metadata = metadata;
        this.appMetadataStore = appMetadataStore;
    }
    /**
     * Get bulk action
     * @returns {object} Observable<BulkActionsMap>
     */
    getBulkActions() {
        return this.store.metadata$.pipe(map((metadata) => metadata.listView.bulkActions));
    }
    /**
     * Execute bulk actions
     * @param {string} action
     */
    executeBulkAction(action) {
        const selection = this.store.recordList.selection;
        const definition = this.store.metadata.listView.bulkActions[action];
        const actionName = `bulk-${action}`;
        this.message.removeMessages();
        if (isFalse(definition.params.allowAll) && selection.all) {
            let message = this.store.appStrings.LBL_SELECT_ALL_NOT_ALLOWED;
            this.message.addDangerMessage(message);
            return;
        }
        if (definition.params.min && selection.count < definition.params.min) {
            let message = this.store.appStrings.LBL_TOO_FEW_SELECTED;
            message = message.replace('{min}', definition.params.min);
            this.message.addDangerMessage(message);
            return;
        }
        if (definition.params.max && selection.count > definition.params.max) {
            let message = this.store.appStrings.LBL_TOO_MANY_SELECTED;
            message = message.replace('{max}', definition.params.max);
            this.message.addDangerMessage(message);
            return;
        }
        const displayedFields = [];
        this.store.metadata.listView.fields.forEach(value => {
            displayedFields.push(value.name);
        });
        const data = {
            action: actionName,
            module: this.store.getModuleName(),
            criteria: null,
            sort: null,
            ids: null,
            fields: displayedFields
        };
        if (selection.all && selection.count > this.store.recordList.records.length) {
            data.criteria = this.store.recordList.criteria;
            data.sort = this.store.recordList.sort;
        }
        if (selection.all && selection.count <= this.store.recordList.records.length) {
            data.ids = [];
            this.store.recordList.records.forEach(record => {
                data.ids.push(record.id);
            });
        }
        if (!selection.all) {
            data.ids = Object.keys(selection.selected);
        }
        const params = (definition && definition.params) || {};
        const displayConfirmation = params.displayConfirmation || false;
        const confirmationLabel = params.confirmationLabel || '';
        const selectModal = definition.params && definition.params.selectModal;
        const selectModule = selectModal && selectModal.module;
        const recordPanel = definition.params && definition.params.recordPanel;
        if (recordPanel) {
            this.store.openRecordPanel(recordPanel);
            return;
        }
        if (displayConfirmation) {
            this.confirmation.showModal(confirmationLabel, () => {
                if (!selectModule) {
                    this.runBulkAction(actionName, data);
                    return;
                }
                this.showSelectModal(selectModal.module, actionName, data);
            });
            return;
        }
        if (!selectModule) {
            this.runBulkAction(actionName, data);
            return;
        }
        this.showSelectModal(selectModal.module, actionName, data);
    }
    /**
     * Run async buk action
     *
     * @returns void
     * @param {string} selectModule: module for which records are listed in Select Modal/Popup
     * @param {string} asyncAction: bulk action name
     * @param {AsyncActionInput} asyncData: data passed to the async process
     */
    showSelectModal(selectModule, asyncAction, asyncData) {
        this.selectModalService.showSelectModal(selectModule, (modalRecord) => {
            if (modalRecord) {
                const { fields, formGroup, ...baseRecord } = modalRecord;
                asyncData.modalRecord = baseRecord;
            }
            this.runBulkAction(asyncAction, asyncData);
        });
    }
    /**
     * Run async buk action
     *
     * @returns void
     * @param {string} asyncAction: bulk action name
     * @param {AsyncActionInput} asyncData: data passed to the async process
     */
    runBulkAction(asyncAction, asyncData) {
        this.asyncAction.run(asyncAction, asyncData).subscribe((process) => {
            this.handleProcessResult(process);
        });
    }
    /**
     * Run this function once the process is executed
     *
     * @returns void
     * @param {Process} process: data returned by the process once the process is executed
     */
    handleProcessResult(process) {
        if (process?.data && process?.data?.reload) {
            this.store.recordList.clearSelection();
            this.store.load(false).pipe(take(1)).subscribe();
        }
        if (process?.data && process?.data?.dataUpdated) {
            this.store.triggerDataUpdate();
        }
        this.reloadMetadata(this.store.getModuleName(), process);
    }
    /**
     * Reload the metadata for the module
     * @param moduleName
     * @param process
     * @protected
     */
    reloadMetadata(moduleName, process) {
        const typesToLoad = [];
        if (this.shouldReloadRecentlyViewed(process)) {
            typesToLoad.push(this.metadata.typeKeys.recentlyViewed);
        }
        if (this.shouldReloadFavorites(process)) {
            typesToLoad.push(this.metadata.typeKeys.favorites);
        }
        if (typesToLoad && typesToLoad.length) {
            this.metadata.reloadModuleMetadata(moduleName, typesToLoad, false).pipe(take(1)).subscribe();
        }
        if (this.shouldReloadGlobalRecentlyViewed(process)) {
            this.appMetadataStore.load(moduleName, ['globalRecentlyViewed'], false).pipe(take(1)).subscribe();
        }
    }
    /**
     * Should reload page
     * @param process
     */
    shouldReloadGlobalRecentlyViewed(process) {
        return !!(process?.data && process?.data?.reloadGlobalRecentlyViewed);
    }
    /**
     * Should reload page
     * @param process
     */
    shouldReloadRecentlyViewed(process) {
        return !!(process?.data && process?.data?.reloadRecentlyViewed);
    }
    /**
     * Should reload page
     * @param process
     */
    shouldReloadFavorites(process) {
        return !!(process?.data && process.data?.reloadFavorites);
    }
    static { this.ɵfac = function BulkActionsAdapter_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BulkActionsAdapter)(i0.ɵɵinject(i1.ListViewStore), i0.ɵɵinject(i2.MessageService), i0.ɵɵinject(i3.ConfirmationModalService), i0.ɵɵinject(i4.SelectModalService), i0.ɵɵinject(i5.AsyncActionService), i0.ɵɵinject(i6.MetadataStore), i0.ɵɵinject(i7.AppMetadataStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: BulkActionsAdapter, factory: BulkActionsAdapter.ɵfac }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BulkActionsAdapter, [{
        type: Injectable
    }], () => [{ type: i1.ListViewStore }, { type: i2.MessageService }, { type: i3.ConfirmationModalService }, { type: i4.SelectModalService }, { type: i5.AsyncActionService }, { type: i6.MetadataStore }, { type: i7.AppMetadataStore }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVsay1hY3Rpb25zLmFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvbGlzdC9hZGFwdGVycy9idWxrLWFjdGlvbnMuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUd6QyxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFFMUQsT0FBTyxFQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6QyxPQUFPLEVBQW1CLGtCQUFrQixFQUFDLE1BQU0sK0RBQStELENBQUM7QUFDbkgsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBRXpFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUNqRSxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxxREFBcUQsQ0FBQztBQUU3RixPQUFPLEVBQVcsYUFBYSxFQUFDLE1BQU0sZ0RBQWdELENBQUM7QUFDdkYsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDakYsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sd0RBQXdELENBQUM7Ozs7Ozs7OztBQUd4RixNQUFNLE9BQU8sa0JBQWtCO0lBRTNCLFlBQ2MsS0FBb0IsRUFDcEIsT0FBdUIsRUFDdkIsWUFBc0MsRUFDdEMsa0JBQXNDLEVBQ3RDLFdBQStCLEVBQy9CLFFBQXVCLEVBQ3ZCLGdCQUFrQztRQU5sQyxVQUFLLEdBQUwsS0FBSyxDQUFlO1FBQ3BCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLGlCQUFZLEdBQVosWUFBWSxDQUEwQjtRQUN0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9C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RUQ7OztPQUdHO0lBQ08scUJBQXFCLENBQUMsT0FBZ0I7UUFDNUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxJQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDOUQsQ0FBQzttSEE1TlEsa0JBQWtCO3VFQUFsQixrQkFBa0IsV0FBbEIsa0JBQWtCOztpRkFBbEIsa0JBQWtCO2NBRDlCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0J1bGtBY3Rpb25zTWFwfSBmcm9tICcuLi8uLi8uLi9jb21tb24vYWN0aW9ucy9idWxrLWFjdGlvbi5tb2RlbCc7XG5pbXBvcnQge1JlY29yZH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3JlY29yZC9yZWNvcmQubW9kZWwnO1xuaW1wb3J0IHtpc0ZhbHNlfSBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvdmFsdWUtdXRpbHMnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7bWFwLCB0YWtlfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge0FzeW5jQWN0aW9uSW5wdXQsIEFzeW5jQWN0aW9uU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvcHJvY2Vzcy9wcm9jZXNzZXMvYXN5bmMtYWN0aW9uL2FzeW5jLWFjdGlvbic7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9tZXNzYWdlL21lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQge1Byb2Nlc3N9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3Byb2Nlc3MvcHJvY2Vzcy5zZXJ2aWNlJztcbmltcG9ydCB7TGlzdFZpZXdTdG9yZX0gZnJvbSAnLi4vc3RvcmUvbGlzdC12aWV3L2xpc3Qtdmlldy5zdG9yZSc7XG5pbXBvcnQge0NvbmZpcm1hdGlvbk1vZGFsU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbW9kYWxzL2NvbmZpcm1hdGlvbi1tb2RhbC5zZXJ2aWNlJztcbmltcG9ydCB7QnVsa0FjdGlvbkRhdGFTb3VyY2V9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvYnVsay1hY3Rpb24tbWVudS9idWxrLWFjdGlvbi1tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQge01ldGFkYXRhLCBNZXRhZGF0YVN0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9tZXRhZGF0YS9tZXRhZGF0YS5zdG9yZS5zZXJ2aWNlJztcbmltcG9ydCB7U2VsZWN0TW9kYWxTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9tb2RhbHMvc2VsZWN0LW1vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHtBcHBNZXRhZGF0YVN0b3JlfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmUvYXBwLW1ldGFkYXRhL2FwcC1tZXRhZGF0YS5zdG9yZS5zZXJ2aWNlXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCdWxrQWN0aW9uc0FkYXB0ZXIgaW1wbGVtZW50cyBCdWxrQWN0aW9uRGF0YVNvdXJjZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIHN0b3JlOiBMaXN0Vmlld1N0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbWVzc2FnZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBjb25maXJtYXRpb246IENvbmZpcm1hdGlvbk1vZGFsU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIHNlbGVjdE1vZGFsU2VydmljZTogU2VsZWN0TW9kYWxTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgYXN5bmNBY3Rpb246IEFzeW5jQWN0aW9uU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIG1ldGFkYXRhOiBNZXRhZGF0YVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgYXBwTWV0YWRhdGFTdG9yZTogQXBwTWV0YWRhdGFTdG9yZVxuICAgICkge1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBidWxrIGFjdGlvblxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IE9ic2VydmFibGU8QnVsa0FjdGlvbnNNYXA+XG4gICAgICovXG4gICAgcHVibGljIGdldEJ1bGtBY3Rpb25zKCk6IE9ic2VydmFibGU8QnVsa0FjdGlvbnNNYXA+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmUubWV0YWRhdGEkLnBpcGUoXG4gICAgICAgICAgICBtYXAoKG1ldGFkYXRhOiBNZXRhZGF0YSkgPT4gbWV0YWRhdGEubGlzdFZpZXcuYnVsa0FjdGlvbnMpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXhlY3V0ZSBidWxrIGFjdGlvbnNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uXG4gICAgICovXG4gICAgcHVibGljIGV4ZWN1dGVCdWxrQWN0aW9uKGFjdGlvbjogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHRoaXMuc3RvcmUucmVjb3JkTGlzdC5zZWxlY3Rpb247XG4gICAgICAgIGNvbnN0IGRlZmluaXRpb24gPSB0aGlzLnN0b3JlLm1ldGFkYXRhLmxpc3RWaWV3LmJ1bGtBY3Rpb25zW2FjdGlvbl07XG4gICAgICAgIGNvbnN0IGFjdGlvbk5hbWUgPSBgYnVsay0ke2FjdGlvbn1gO1xuXG4gICAgICAgIHRoaXMubWVzc2FnZS5yZW1vdmVNZXNzYWdlcygpO1xuXG4gICAgICAgIGlmIChpc0ZhbHNlKGRlZmluaXRpb24ucGFyYW1zLmFsbG93QWxsKSAmJiBzZWxlY3Rpb24uYWxsKSB7XG4gICAgICAgICAgICBsZXQgbWVzc2FnZSA9IHRoaXMuc3RvcmUuYXBwU3RyaW5ncy5MQkxfU0VMRUNUX0FMTF9OT1RfQUxMT1dFRDtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZS5hZGREYW5nZXJNZXNzYWdlKG1lc3NhZ2UpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRlZmluaXRpb24ucGFyYW1zLm1pbiAmJiBzZWxlY3Rpb24uY291bnQgPCBkZWZpbml0aW9uLnBhcmFtcy5taW4pIHtcbiAgICAgICAgICAgIGxldCBtZXNzYWdlID0gdGhpcy5zdG9yZS5hcHBTdHJpbmdzLkxCTF9UT09fRkVXX1NFTEVDVEVEO1xuICAgICAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UucmVwbGFjZSgne21pbn0nLCBkZWZpbml0aW9uLnBhcmFtcy5taW4pO1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlLmFkZERhbmdlck1lc3NhZ2UobWVzc2FnZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGVmaW5pdGlvbi5wYXJhbXMubWF4ICYmIHNlbGVjdGlvbi5jb3VudCA+IGRlZmluaXRpb24ucGFyYW1zLm1heCkge1xuICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSB0aGlzLnN0b3JlLmFwcFN0cmluZ3MuTEJMX1RPT19NQU5ZX1NFTEVDVEVEO1xuICAgICAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UucmVwbGFjZSgne21heH0nLCBkZWZpbml0aW9uLnBhcmFtcy5tYXgpO1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlLmFkZERhbmdlck1lc3NhZ2UobWVzc2FnZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkaXNwbGF5ZWRGaWVsZHMgPSBbXTtcblxuICAgICAgICB0aGlzLnN0b3JlLm1ldGFkYXRhLmxpc3RWaWV3LmZpZWxkcy5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgICAgICAgIGRpc3BsYXllZEZpZWxkcy5wdXNoKHZhbHVlLm5hbWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb25OYW1lLFxuICAgICAgICAgICAgbW9kdWxlOiB0aGlzLnN0b3JlLmdldE1vZHVsZU5hbWUoKSxcbiAgICAgICAgICAgIGNyaXRlcmlhOiBudWxsLFxuICAgICAgICAgICAgc29ydDogbnVsbCxcbiAgICAgICAgICAgIGlkczogbnVsbCxcbiAgICAgICAgICAgIGZpZWxkczogZGlzcGxheWVkRmllbGRzXG4gICAgICAgIH0gYXMgQXN5bmNBY3Rpb25JbnB1dDtcblxuICAgICAgICBpZiAoc2VsZWN0aW9uLmFsbCAmJiBzZWxlY3Rpb24uY291bnQgPiB0aGlzLnN0b3JlLnJlY29yZExpc3QucmVjb3Jkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGRhdGEuY3JpdGVyaWEgPSB0aGlzLnN0b3JlLnJlY29yZExpc3QuY3JpdGVyaWE7XG4gICAgICAgICAgICBkYXRhLnNvcnQgPSB0aGlzLnN0b3JlLnJlY29yZExpc3Quc29ydDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWxlY3Rpb24uYWxsICYmIHNlbGVjdGlvbi5jb3VudCA8PSB0aGlzLnN0b3JlLnJlY29yZExpc3QucmVjb3Jkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGRhdGEuaWRzID0gW107XG4gICAgICAgICAgICB0aGlzLnN0b3JlLnJlY29yZExpc3QucmVjb3Jkcy5mb3JFYWNoKHJlY29yZCA9PiB7XG4gICAgICAgICAgICAgICAgZGF0YS5pZHMucHVzaChyZWNvcmQuaWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXNlbGVjdGlvbi5hbGwpIHtcbiAgICAgICAgICAgIGRhdGEuaWRzID0gT2JqZWN0LmtleXMoc2VsZWN0aW9uLnNlbGVjdGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IChkZWZpbml0aW9uICYmIGRlZmluaXRpb24ucGFyYW1zKSB8fCB7fSBhcyB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xuICAgICAgICBjb25zdCBkaXNwbGF5Q29uZmlybWF0aW9uID0gcGFyYW1zLmRpc3BsYXlDb25maXJtYXRpb24gfHwgZmFsc2U7XG4gICAgICAgIGNvbnN0IGNvbmZpcm1hdGlvbkxhYmVsID0gcGFyYW1zLmNvbmZpcm1hdGlvbkxhYmVsIHx8ICcnO1xuICAgICAgICBjb25zdCBzZWxlY3RNb2RhbCA9IGRlZmluaXRpb24ucGFyYW1zICYmIGRlZmluaXRpb24ucGFyYW1zLnNlbGVjdE1vZGFsO1xuICAgICAgICBjb25zdCBzZWxlY3RNb2R1bGUgPSBzZWxlY3RNb2RhbCAmJiBzZWxlY3RNb2RhbC5tb2R1bGU7XG4gICAgICAgIGNvbnN0IHJlY29yZFBhbmVsID0gZGVmaW5pdGlvbi5wYXJhbXMgJiYgZGVmaW5pdGlvbi5wYXJhbXMucmVjb3JkUGFuZWw7XG5cbiAgICAgICAgaWYgKHJlY29yZFBhbmVsKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3JlLm9wZW5SZWNvcmRQYW5lbChyZWNvcmRQYW5lbCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmIChkaXNwbGF5Q29uZmlybWF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1hdGlvbi5zaG93TW9kYWwoY29uZmlybWF0aW9uTGFiZWwsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXNlbGVjdE1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJ1bkJ1bGtBY3Rpb24oYWN0aW9uTmFtZSwgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93U2VsZWN0TW9kYWwoc2VsZWN0TW9kYWwubW9kdWxlLCBhY3Rpb25OYW1lLCBkYXRhKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXNlbGVjdE1vZHVsZSkge1xuICAgICAgICAgICAgdGhpcy5ydW5CdWxrQWN0aW9uKGFjdGlvbk5hbWUsIGRhdGEpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hvd1NlbGVjdE1vZGFsKHNlbGVjdE1vZGFsLm1vZHVsZSwgYWN0aW9uTmFtZSwgZGF0YSk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSdW4gYXN5bmMgYnVrIGFjdGlvblxuICAgICAqXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RNb2R1bGU6IG1vZHVsZSBmb3Igd2hpY2ggcmVjb3JkcyBhcmUgbGlzdGVkIGluIFNlbGVjdCBNb2RhbC9Qb3B1cFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhc3luY0FjdGlvbjogYnVsayBhY3Rpb24gbmFtZVxuICAgICAqIEBwYXJhbSB7QXN5bmNBY3Rpb25JbnB1dH0gYXN5bmNEYXRhOiBkYXRhIHBhc3NlZCB0byB0aGUgYXN5bmMgcHJvY2Vzc1xuICAgICAqL1xuICAgIHB1YmxpYyBzaG93U2VsZWN0TW9kYWwoc2VsZWN0TW9kdWxlOiBzdHJpbmcsIGFzeW5jQWN0aW9uOiBzdHJpbmcsIGFzeW5jRGF0YTogQXN5bmNBY3Rpb25JbnB1dCkge1xuXG4gICAgICAgIHRoaXMuc2VsZWN0TW9kYWxTZXJ2aWNlLnNob3dTZWxlY3RNb2RhbChzZWxlY3RNb2R1bGUsIChtb2RhbFJlY29yZDogUmVjb3JkKSA9PiB7XG4gICAgICAgICAgICBpZiAobW9kYWxSZWNvcmQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7ZmllbGRzLCBmb3JtR3JvdXAsIC4uLmJhc2VSZWNvcmR9ID0gbW9kYWxSZWNvcmQ7XG4gICAgICAgICAgICAgICAgYXN5bmNEYXRhLm1vZGFsUmVjb3JkID0gYmFzZVJlY29yZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucnVuQnVsa0FjdGlvbihhc3luY0FjdGlvbiwgYXN5bmNEYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUnVuIGFzeW5jIGJ1ayBhY3Rpb25cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYXN5bmNBY3Rpb246IGJ1bGsgYWN0aW9uIG5hbWVcbiAgICAgKiBAcGFyYW0ge0FzeW5jQWN0aW9uSW5wdXR9IGFzeW5jRGF0YTogZGF0YSBwYXNzZWQgdG8gdGhlIGFzeW5jIHByb2Nlc3NcbiAgICAgKi9cbiAgICBwdWJsaWMgcnVuQnVsa0FjdGlvbihhc3luY0FjdGlvbjogc3RyaW5nLCBhc3luY0RhdGE6IEFzeW5jQWN0aW9uSW5wdXQpOiB2b2lkIHtcblxuICAgICAgICB0aGlzLmFzeW5jQWN0aW9uLnJ1bihhc3luY0FjdGlvbiwgYXN5bmNEYXRhKS5zdWJzY3JpYmUoKHByb2Nlc3M6IFByb2Nlc3MpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUHJvY2Vzc1Jlc3VsdChwcm9jZXNzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUnVuIHRoaXMgZnVuY3Rpb24gb25jZSB0aGUgcHJvY2VzcyBpcyBleGVjdXRlZFxuICAgICAqXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqIEBwYXJhbSB7UHJvY2Vzc30gcHJvY2VzczogZGF0YSByZXR1cm5lZCBieSB0aGUgcHJvY2VzcyBvbmNlIHRoZSBwcm9jZXNzIGlzIGV4ZWN1dGVkXG4gICAgICovXG4gICAgcHVibGljIGhhbmRsZVByb2Nlc3NSZXN1bHQocHJvY2VzczogUHJvY2Vzcyk6IHZvaWQge1xuXG4gICAgICAgIGlmIChwcm9jZXNzPy5kYXRhICYmIHByb2Nlc3M/LmRhdGE/LnJlbG9hZCkge1xuICAgICAgICAgICAgdGhpcy5zdG9yZS5yZWNvcmRMaXN0LmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLnN0b3JlLmxvYWQoZmFsc2UpLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvY2Vzcz8uZGF0YSAmJiBwcm9jZXNzPy5kYXRhPy5kYXRhVXBkYXRlZCkge1xuICAgICAgICAgICAgdGhpcy5zdG9yZS50cmlnZ2VyRGF0YVVwZGF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZWxvYWRNZXRhZGF0YSh0aGlzLnN0b3JlLmdldE1vZHVsZU5hbWUoKSwgcHJvY2Vzcyk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSZWxvYWQgdGhlIG1ldGFkYXRhIGZvciB0aGUgbW9kdWxlXG4gICAgICogQHBhcmFtIG1vZHVsZU5hbWVcbiAgICAgKiBAcGFyYW0gcHJvY2Vzc1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgcmVsb2FkTWV0YWRhdGEobW9kdWxlTmFtZTogc3RyaW5nLCBwcm9jZXNzOiBQcm9jZXNzKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHR5cGVzVG9Mb2FkID0gW107XG5cbiAgICAgICAgaWYgKHRoaXMuc2hvdWxkUmVsb2FkUmVjZW50bHlWaWV3ZWQocHJvY2VzcykpIHtcbiAgICAgICAgICAgIHR5cGVzVG9Mb2FkLnB1c2godGhpcy5tZXRhZGF0YS50eXBlS2V5cy5yZWNlbnRseVZpZXdlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zaG91bGRSZWxvYWRGYXZvcml0ZXMocHJvY2VzcykpIHtcbiAgICAgICAgICAgIHR5cGVzVG9Mb2FkLnB1c2godGhpcy5tZXRhZGF0YS50eXBlS2V5cy5mYXZvcml0ZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVzVG9Mb2FkICYmIHR5cGVzVG9Mb2FkLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5tZXRhZGF0YS5yZWxvYWRNb2R1bGVNZXRhZGF0YShtb2R1bGVOYW1lLCB0eXBlc1RvTG9hZCwgZmFsc2UpLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zaG91bGRSZWxvYWRHbG9iYWxSZWNlbnRseVZpZXdlZChwcm9jZXNzKSkge1xuICAgICAgICAgICAgdGhpcy5hcHBNZXRhZGF0YVN0b3JlLmxvYWQobW9kdWxlTmFtZSwgWydnbG9iYWxSZWNlbnRseVZpZXdlZCddLCBmYWxzZSkucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3VsZCByZWxvYWQgcGFnZVxuICAgICAqIEBwYXJhbSBwcm9jZXNzXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHNob3VsZFJlbG9hZEdsb2JhbFJlY2VudGx5Vmlld2VkKHByb2Nlc3M6IFByb2Nlc3MpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICEhKHByb2Nlc3M/LmRhdGEgJiYgcHJvY2Vzcz8uZGF0YT8ucmVsb2FkR2xvYmFsUmVjZW50bHlWaWV3ZWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3VsZCByZWxvYWQgcGFnZVxuICAgICAqIEBwYXJhbSBwcm9jZXNzXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHNob3VsZFJlbG9hZFJlY2VudGx5Vmlld2VkKHByb2Nlc3M6IFByb2Nlc3MpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICEhKHByb2Nlc3M/LmRhdGEgJiYgcHJvY2Vzcz8uZGF0YT8ucmVsb2FkUmVjZW50bHlWaWV3ZWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3VsZCByZWxvYWQgcGFnZVxuICAgICAqIEBwYXJhbSBwcm9jZXNzXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHNob3VsZFJlbG9hZEZhdm9yaXRlcyhwcm9jZXNzOiBQcm9jZXNzKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhIShwcm9jZXNzPy5kYXRhICYmIHByb2Nlc3MuZGF0YT8ucmVsb2FkRmF2b3JpdGVzKTtcbiAgICB9XG59XG4iXX0=