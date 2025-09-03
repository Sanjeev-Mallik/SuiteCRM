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
import { isFalse } from '../../../../../common/utils/value-utils';
import { take } from 'rxjs/operators';
import { ConfirmationModalService } from '../../../../../services/modals/confirmation-modal.service';
import { ListViewRecordPanelActionHandler } from '../record-panel.action';
import { MessageService } from '../../../../../services/message/message.service';
import { AsyncActionService } from '../../../../../services/process/processes/async-action/async-action';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../services/message/message.service";
import * as i2 from "../../../../../services/process/processes/async-action/async-action";
import * as i3 from "../../../../../services/modals/confirmation-modal.service";
export class RunBulkActionRecordPanelAction extends ListViewRecordPanelActionHandler {
    constructor(message, asyncActionService, confirmation, asyncAction) {
        super();
        this.message = message;
        this.asyncActionService = asyncActionService;
        this.confirmation = confirmation;
        this.asyncAction = asyncAction;
        this.key = 'bulk-action';
        this.modes = [
            'detail',
            'edit',
            'list',
            'create',
            'massupdate'
        ];
    }
    run(data) {
        const definition = data.action;
        const selection = data.listStore.recordList.selection;
        const params = (definition && definition.params) || {};
        if (isFalse(params.allowAll) && selection.all) {
            let message = data.listStore.appStrings.LBL_SELECT_ALL_NOT_ALLOWED;
            this.message.addDangerMessage(message);
            return;
        }
        if (params.min && selection.count < params.min) {
            let message = data.listStore.appStrings.LBL_TOO_FEW_SELECTED;
            message = message.replace('{min}', params.min);
            this.message.addDangerMessage(message);
            return;
        }
        if (params.max && selection.count > params.max) {
            let message = data.listStore.appStrings.LBL_TOO_MANY_SELECTED;
            message = message.replace('{max}', params.max);
            this.message.addDangerMessage(message);
            return;
        }
        this.runBulkAction(data);
    }
    shouldDisplay() {
        return true;
    }
    /**
     * Run async buk action
     *
     * @returns void
     * @param {AsyncActionInput} data: data passed to the async process
     */
    runBulkAction(data) {
        const actionName = `bulk-${data.action.params.bulkAction}`;
        const asyncData = this.buildActionInput(actionName, data);
        this.asyncAction.run(actionName, asyncData).subscribe((process) => {
            this.handleProcessResult(process, data);
        });
    }
    /**
     * Build backend bulk action input
     * @param actionName
     * @param data
     */
    buildActionInput(actionName, data) {
        const displayedFields = [];
        data.listStore.metadata.listView.fields.forEach(value => {
            displayedFields.push(value.name);
        });
        const asyncData = {
            action: actionName,
            module: data.listStore.getModuleName(),
            criteria: null,
            sort: null,
            ids: null,
            fields: displayedFields,
            payload: {
                panelRecord: data.store.recordStore.getBaseStaging()
            }
        };
        const selection = data.listStore.recordList.selection;
        if (selection.all && selection.count > data.listStore.recordList.records.length) {
            asyncData.criteria = data.listStore.recordList.criteria;
            asyncData.sort = data.listStore.recordList.sort;
        }
        if (selection.all && selection.count <= data.listStore.recordList.records.length) {
            asyncData.ids = [];
            data.listStore.recordList.records.forEach(record => {
                data.ids.push(record.id);
            });
        }
        if (!selection.all) {
            asyncData.ids = Object.keys(selection.selected);
        }
        return asyncData;
    }
    /**
     * Run this function once the process is executed
     *
     * @returns void
     * @param {object} process Process data returned by the process once the process is executed
     * @param {object} data ListViewRecordPanelActionData
     */
    handleProcessResult(process, data) {
        if (process.data && process.data.reload) {
            data.listStore.recordList.clearSelection();
            data.listStore.load(false).pipe(take(1)).subscribe();
        }
        if (process.data && process.data.dataUpdated) {
            data.listStore.triggerDataUpdate();
        }
        data.listStore.closeRecordPanel();
    }
    static { this.ɵfac = function RunBulkActionRecordPanelAction_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RunBulkActionRecordPanelAction)(i0.ɵɵinject(i1.MessageService), i0.ɵɵinject(i2.AsyncActionService), i0.ɵɵinject(i3.ConfirmationModalService), i0.ɵɵinject(i2.AsyncActionService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RunBulkActionRecordPanelAction, factory: RunBulkActionRecordPanelAction.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RunBulkActionRecordPanelAction, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.MessageService }, { type: i2.AsyncActionService }, { type: i3.ConfirmationModalService }, { type: i2.AsyncActionService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVuLWJ1bGstYWN0aW9uLnJlY29yZC1wYW5lbC5hY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvbGlzdC9hY3Rpb25zL3JlY29yZC1wYW5lbC9idWxrLWFjdGlvbi9ydW4tYnVsay1hY3Rpb24ucmVjb3JkLXBhbmVsLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0seUNBQXlDLENBQUM7QUFDaEUsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRXBDLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLDJEQUEyRCxDQUFDO0FBQ25HLE9BQU8sRUFBZ0MsZ0NBQWdDLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0saURBQWlELENBQUM7QUFDL0UsT0FBTyxFQUVILGtCQUFrQixFQUNyQixNQUFNLHFFQUFxRSxDQUFDOzs7OztBQUs3RSxNQUFNLE9BQU8sOEJBQStCLFNBQVEsZ0NBQWdDO0lBV2hGLFlBQ2MsT0FBdUIsRUFDdkIsa0JBQXNDLEVBQ3RDLFlBQXNDLEVBQ3RDLFdBQStCO1FBRXpDLEtBQUssRUFBRSxDQUFDO1FBTEUsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxpQkFBWSxHQUFaLFlBQVksQ0FBMEI7UUFDdEMsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBYjdDLFFBQUcsR0FBRyxhQUFhLENBQUM7UUFDcEIsVUFBSyxHQUFHO1lBQ0osUUFBb0I7WUFDcEIsTUFBa0I7WUFDbEIsTUFBa0I7WUFDbEIsUUFB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QztJQUVEOzs7Ozs7T0FNRztJQUNPLG1CQUFtQixDQUFDLE9BQWdCLEVBQUUsSUFBbUM7UUFFL0UsSUFBSSxPQUFPLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDM0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3pELENBQUM7UUFFRCxJQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUMzQyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDdkMsQ0FBQztRQUVELElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUN0QyxDQUFDOytIQXhJUSw4QkFBOEI7dUVBQTlCLDhCQUE4QixXQUE5Qiw4QkFBOEIsbUJBRjNCLE1BQU07O2lGQUVULDhCQUE4QjtjQUgxQyxVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1ZpZXdNb2RlfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vdmlld3Mvdmlldy5tb2RlbCc7XG5pbXBvcnQge2lzRmFsc2V9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi91dGlscy92YWx1ZS11dGlscyc7XG5pbXBvcnQge3Rha2V9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7UHJvY2Vzc30gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2VydmljZXMvcHJvY2Vzcy9wcm9jZXNzLnNlcnZpY2UnO1xuaW1wb3J0IHtDb25maXJtYXRpb25Nb2RhbFNlcnZpY2V9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NlcnZpY2VzL21vZGFscy9jb25maXJtYXRpb24tbW9kYWwuc2VydmljZSc7XG5pbXBvcnQge0xpc3RWaWV3UmVjb3JkUGFuZWxBY3Rpb25EYXRhLCBMaXN0Vmlld1JlY29yZFBhbmVsQWN0aW9uSGFuZGxlcn0gZnJvbSAnLi4vcmVjb3JkLXBhbmVsLmFjdGlvbic7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zZXJ2aWNlcy9tZXNzYWdlL21lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQge1xuICAgIEFzeW5jQWN0aW9uSW5wdXQsXG4gICAgQXN5bmNBY3Rpb25TZXJ2aWNlXG59IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NlcnZpY2VzL3Byb2Nlc3MvcHJvY2Vzc2VzL2FzeW5jLWFjdGlvbi9hc3luYy1hY3Rpb24nO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFJ1bkJ1bGtBY3Rpb25SZWNvcmRQYW5lbEFjdGlvbiBleHRlbmRzIExpc3RWaWV3UmVjb3JkUGFuZWxBY3Rpb25IYW5kbGVyIHtcblxuICAgIGtleSA9ICdidWxrLWFjdGlvbic7XG4gICAgbW9kZXMgPSBbXG4gICAgICAgICdkZXRhaWwnIGFzIFZpZXdNb2RlLFxuICAgICAgICAnZWRpdCcgYXMgVmlld01vZGUsXG4gICAgICAgICdsaXN0JyBhcyBWaWV3TW9kZSxcbiAgICAgICAgJ2NyZWF0ZScgYXMgVmlld01vZGUsXG4gICAgICAgICdtYXNzdXBkYXRlJyBhcyBWaWV3TW9kZVxuICAgIF07XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIG1lc3NhZ2U6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgYXN5bmNBY3Rpb25TZXJ2aWNlOiBBc3luY0FjdGlvblNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBjb25maXJtYXRpb246IENvbmZpcm1hdGlvbk1vZGFsU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIGFzeW5jQWN0aW9uOiBBc3luY0FjdGlvblNlcnZpY2VcbiAgICApIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBydW4oZGF0YTogTGlzdFZpZXdSZWNvcmRQYW5lbEFjdGlvbkRhdGEpOiB2b2lkIHtcblxuICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gZGF0YS5hY3Rpb247XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IGRhdGEubGlzdFN0b3JlLnJlY29yZExpc3Quc2VsZWN0aW9uO1xuXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IChkZWZpbml0aW9uICYmIGRlZmluaXRpb24ucGFyYW1zKSB8fCB7fSBhcyB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xuXG4gICAgICAgIGlmIChpc0ZhbHNlKHBhcmFtcy5hbGxvd0FsbCkgJiYgc2VsZWN0aW9uLmFsbCkge1xuICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBkYXRhLmxpc3RTdG9yZS5hcHBTdHJpbmdzLkxCTF9TRUxFQ1RfQUxMX05PVF9BTExPV0VEO1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlLmFkZERhbmdlck1lc3NhZ2UobWVzc2FnZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyYW1zLm1pbiAmJiBzZWxlY3Rpb24uY291bnQgPCBwYXJhbXMubWluKSB7XG4gICAgICAgICAgICBsZXQgbWVzc2FnZSA9IGRhdGEubGlzdFN0b3JlLmFwcFN0cmluZ3MuTEJMX1RPT19GRVdfU0VMRUNURUQ7XG4gICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKCd7bWlufScsIHBhcmFtcy5taW4pO1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlLmFkZERhbmdlck1lc3NhZ2UobWVzc2FnZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyYW1zLm1heCAmJiBzZWxlY3Rpb24uY291bnQgPiBwYXJhbXMubWF4KSB7XG4gICAgICAgICAgICBsZXQgbWVzc2FnZSA9IGRhdGEubGlzdFN0b3JlLmFwcFN0cmluZ3MuTEJMX1RPT19NQU5ZX1NFTEVDVEVEO1xuICAgICAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UucmVwbGFjZSgne21heH0nLCBwYXJhbXMubWF4KTtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZS5hZGREYW5nZXJNZXNzYWdlKG1lc3NhZ2UpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ydW5CdWxrQWN0aW9uKGRhdGEpO1xuICAgIH1cblxuICAgIHNob3VsZERpc3BsYXkoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJ1biBhc3luYyBidWsgYWN0aW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICogQHBhcmFtIHtBc3luY0FjdGlvbklucHV0fSBkYXRhOiBkYXRhIHBhc3NlZCB0byB0aGUgYXN5bmMgcHJvY2Vzc1xuICAgICAqL1xuICAgIHB1YmxpYyBydW5CdWxrQWN0aW9uKGRhdGE6IExpc3RWaWV3UmVjb3JkUGFuZWxBY3Rpb25EYXRhKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgYWN0aW9uTmFtZSA9IGBidWxrLSR7ZGF0YS5hY3Rpb24ucGFyYW1zLmJ1bGtBY3Rpb259YDtcblxuICAgICAgICBjb25zdCBhc3luY0RhdGEgPSB0aGlzLmJ1aWxkQWN0aW9uSW5wdXQoYWN0aW9uTmFtZSwgZGF0YSk7XG5cbiAgICAgICAgdGhpcy5hc3luY0FjdGlvbi5ydW4oYWN0aW9uTmFtZSwgYXN5bmNEYXRhKS5zdWJzY3JpYmUoKHByb2Nlc3M6IFByb2Nlc3MpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUHJvY2Vzc1Jlc3VsdChwcm9jZXNzLCBkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGQgYmFja2VuZCBidWxrIGFjdGlvbiBpbnB1dFxuICAgICAqIEBwYXJhbSBhY3Rpb25OYW1lXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYnVpbGRBY3Rpb25JbnB1dChhY3Rpb25OYW1lOiBzdHJpbmcsIGRhdGE6IExpc3RWaWV3UmVjb3JkUGFuZWxBY3Rpb25EYXRhKSB7XG5cbiAgICAgICAgY29uc3QgZGlzcGxheWVkRmllbGRzID0gW107XG5cbiAgICAgICAgZGF0YS5saXN0U3RvcmUubWV0YWRhdGEubGlzdFZpZXcuZmllbGRzLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgICAgZGlzcGxheWVkRmllbGRzLnB1c2godmFsdWUubmFtZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGFzeW5jRGF0YSA9IHtcbiAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uTmFtZSxcbiAgICAgICAgICAgIG1vZHVsZTogZGF0YS5saXN0U3RvcmUuZ2V0TW9kdWxlTmFtZSgpLFxuICAgICAgICAgICAgY3JpdGVyaWE6IG51bGwsXG4gICAgICAgICAgICBzb3J0OiBudWxsLFxuICAgICAgICAgICAgaWRzOiBudWxsLFxuICAgICAgICAgICAgZmllbGRzOiBkaXNwbGF5ZWRGaWVsZHMsXG4gICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgcGFuZWxSZWNvcmQ6IGRhdGEuc3RvcmUucmVjb3JkU3RvcmUuZ2V0QmFzZVN0YWdpbmcoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGFzIEFzeW5jQWN0aW9uSW5wdXQ7XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gZGF0YS5saXN0U3RvcmUucmVjb3JkTGlzdC5zZWxlY3Rpb247XG5cbiAgICAgICAgaWYgKHNlbGVjdGlvbi5hbGwgJiYgc2VsZWN0aW9uLmNvdW50ID4gZGF0YS5saXN0U3RvcmUucmVjb3JkTGlzdC5yZWNvcmRzLmxlbmd0aCkge1xuICAgICAgICAgICAgYXN5bmNEYXRhLmNyaXRlcmlhID0gZGF0YS5saXN0U3RvcmUucmVjb3JkTGlzdC5jcml0ZXJpYTtcbiAgICAgICAgICAgIGFzeW5jRGF0YS5zb3J0ID0gZGF0YS5saXN0U3RvcmUucmVjb3JkTGlzdC5zb3J0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGVjdGlvbi5hbGwgJiYgc2VsZWN0aW9uLmNvdW50IDw9IGRhdGEubGlzdFN0b3JlLnJlY29yZExpc3QucmVjb3Jkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGFzeW5jRGF0YS5pZHMgPSBbXTtcbiAgICAgICAgICAgIGRhdGEubGlzdFN0b3JlLnJlY29yZExpc3QucmVjb3Jkcy5mb3JFYWNoKHJlY29yZCA9PiB7XG4gICAgICAgICAgICAgICAgZGF0YS5pZHMucHVzaChyZWNvcmQuaWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXNlbGVjdGlvbi5hbGwpIHtcbiAgICAgICAgICAgIGFzeW5jRGF0YS5pZHMgPSBPYmplY3Qua2V5cyhzZWxlY3Rpb24uc2VsZWN0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFzeW5jRGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSdW4gdGhpcyBmdW5jdGlvbiBvbmNlIHRoZSBwcm9jZXNzIGlzIGV4ZWN1dGVkXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHByb2Nlc3MgUHJvY2VzcyBkYXRhIHJldHVybmVkIGJ5IHRoZSBwcm9jZXNzIG9uY2UgdGhlIHByb2Nlc3MgaXMgZXhlY3V0ZWRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSBMaXN0Vmlld1JlY29yZFBhbmVsQWN0aW9uRGF0YVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBoYW5kbGVQcm9jZXNzUmVzdWx0KHByb2Nlc3M6IFByb2Nlc3MsIGRhdGE6IExpc3RWaWV3UmVjb3JkUGFuZWxBY3Rpb25EYXRhKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZGF0YSAmJiBwcm9jZXNzLmRhdGEucmVsb2FkKSB7XG4gICAgICAgICAgICBkYXRhLmxpc3RTdG9yZS5yZWNvcmRMaXN0LmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgICAgICAgICBkYXRhLmxpc3RTdG9yZS5sb2FkKGZhbHNlKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZGF0YSAmJiBwcm9jZXNzLmRhdGEuZGF0YVVwZGF0ZWQpIHtcbiAgICAgICAgICAgIGRhdGEubGlzdFN0b3JlLnRyaWdnZXJEYXRhVXBkYXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhLmxpc3RTdG9yZS5jbG9zZVJlY29yZFBhbmVsKCk7XG4gICAgfVxufVxuIl19