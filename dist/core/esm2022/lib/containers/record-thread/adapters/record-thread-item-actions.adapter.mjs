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
import { isTrue } from '../../../common/utils/value-utils';
import { combineLatestWith } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AsyncActionService } from '../../../services/process/processes/async-action/async-action';
import { LanguageStore } from '../../../store/language/language.store';
import { MessageService } from '../../../services/message/message.service';
import { ConfirmationModalService } from '../../../services/modals/confirmation-modal.service';
import { BaseRecordActionsAdapter } from '../../../services/actions/base-record-action.adapter';
import { SelectModalService } from '../../../services/modals/select-modal.service';
import { RecordThreadItemActionManager } from '../actions/item-actions/record-thread-item-action-manager.service';
import { RecordThreadItemStore } from '../store/record-thread/record-thread-item.store';
import { RecordThreadStore } from '../store/record-thread/record-thread.store';
import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { AppMetadataStore } from "../../../store/app-metadata/app-metadata.store.service";
import * as i0 from "@angular/core";
import * as i1 from "../store/record-thread/record-thread-item.store";
import * as i2 from "../store/record-thread/record-thread.store";
import * as i3 from "../../../store/language/language.store";
import * as i4 from "../actions/item-actions/record-thread-item-action-manager.service";
import * as i5 from "../../../services/process/processes/async-action/async-action";
import * as i6 from "../../../services/message/message.service";
import * as i7 from "../../../services/modals/confirmation-modal.service";
import * as i8 from "../../../services/modals/select-modal.service";
import * as i9 from "../../../store/metadata/metadata.store.service";
import * as i10 from "../../../store/app-metadata/app-metadata.store.service";
export class RecordThreadItemActionsAdapter extends BaseRecordActionsAdapter {
    constructor(itemStore, threadStore, language, actionManager, asyncActionService, message, confirmation, selectModalService, metadata, appMetadataStore) {
        super(actionManager, asyncActionService, message, confirmation, language, selectModalService, metadata, appMetadataStore);
        this.itemStore = itemStore;
        this.threadStore = threadStore;
        this.language = language;
        this.actionManager = actionManager;
        this.asyncActionService = asyncActionService;
        this.message = message;
        this.confirmation = confirmation;
        this.selectModalService = selectModalService;
        this.metadata = metadata;
        this.appMetadataStore = appMetadataStore;
        this.defaultActions = {
            detail: [],
            edit: [],
            create: [],
        };
        this.collapseButtons = false;
    }
    getActions(context) {
        return this.itemStore.meta$.pipe(combineLatestWith(this.itemStore.mode$), map(([meta, mode]) => {
            if (!mode || !meta) {
                return [];
            }
            return this.parseModeActions(meta.actions, mode, this.itemStore.getViewContext());
        }));
    }
    /**
     * Get action name
     * @param action
     */
    getActionName(action) {
        return `record-thread-item-${action.key}`;
    }
    buildActionData(action, context) {
        return {
            itemStore: this.itemStore,
            threadStore: this.threadStore,
            action: action
        };
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
        const baseRecord = this.itemStore.getBaseRecord();
        this.message.removeMessages();
        return {
            action: actionName,
            module: baseRecord.module,
            id: baseRecord.id,
            params: (action && action.params) || []
        };
    }
    getMode() {
        return this.itemStore.getMode();
    }
    getModuleName(context) {
        return this.itemStore.getModuleName();
    }
    reload(action, process, context) {
        const reload = process?.data?.reload ?? false;
        const reloadThread = process?.data?.reloadThread ?? false;
        if (isTrue(reload)) {
            this.itemStore.load(false).pipe(take(1)).subscribe();
        }
        if (isTrue(reloadThread)) {
            this.threadStore.reload();
        }
    }
    /**
     * @inheritDoc
     */
    shouldReload(process) {
        const reload = process?.data?.reload ?? false;
        const reloadThread = process?.data?.reloadThread ?? false;
        return isTrue(reload) || isTrue(reloadThread);
    }
    static { this.ɵfac = function RecordThreadItemActionsAdapter_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RecordThreadItemActionsAdapter)(i0.ɵɵinject(i1.RecordThreadItemStore), i0.ɵɵinject(i2.RecordThreadStore), i0.ɵɵinject(i3.LanguageStore), i0.ɵɵinject(i4.RecordThreadItemActionManager), i0.ɵɵinject(i5.AsyncActionService), i0.ɵɵinject(i6.MessageService), i0.ɵɵinject(i7.ConfirmationModalService), i0.ɵɵinject(i8.SelectModalService), i0.ɵɵinject(i9.MetadataStore), i0.ɵɵinject(i10.AppMetadataStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordThreadItemActionsAdapter, factory: RecordThreadItemActionsAdapter.ɵfac }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordThreadItemActionsAdapter, [{
        type: Injectable
    }], () => [{ type: i1.RecordThreadItemStore }, { type: i2.RecordThreadStore }, { type: i3.LanguageStore }, { type: i4.RecordThreadItemActionManager }, { type: i5.AsyncActionService }, { type: i6.MessageService }, { type: i7.ConfirmationModalService }, { type: i8.SelectModalService }, { type: i9.MetadataStore }, { type: i10.AppMetadataStore }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLXRocmVhZC1pdGVtLWFjdGlvbnMuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb250YWluZXJzL3JlY29yZC10aHJlYWQvYWRhcHRlcnMvcmVjb3JkLXRocmVhZC1pdGVtLWFjdGlvbnMuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUd6QyxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDekQsT0FBTyxFQUFDLGlCQUFpQixFQUFhLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDekMsT0FBTyxFQUFtQixrQkFBa0IsRUFBQyxNQUFNLCtEQUErRCxDQUFDO0FBQ25ILE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3Q0FBd0MsQ0FBQztBQUNyRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFFekUsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0scURBQXFELENBQUM7QUFDN0YsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sc0RBQXNELENBQUM7QUFDOUYsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFFakYsT0FBTyxFQUFDLDZCQUE2QixFQUFDLE1BQU0sbUVBQW1FLENBQUM7QUFDaEgsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0saURBQWlELENBQUM7QUFDdEYsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNENBQTRDLENBQUM7QUFDN0UsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGdEQUFnRCxDQUFDO0FBQzdFLE9BQU8sRUFB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Q0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVTLE1BQU0sQ0FBQyxNQUFjLEVBQUUsT0FBZ0IsRUFBRSxPQUF1QjtRQUN0RSxNQUFNLE1BQU0sR0FBRyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sSUFBSSxLQUFLLENBQUM7UUFDOUMsTUFBTSxZQUFZLEdBQUcsT0FBTyxFQUFFLElBQUksRUFBRSxZQUFZLElBQUksS0FBSyxDQUFDO1FBRTFELElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3pELENBQUM7UUFFRCxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDOUIsQ0FBQztJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNPLFlBQVksQ0FBQyxPQUFnQjtRQUNuQyxNQUFNLE1BQU0sR0FBRyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sSUFBSSxLQUFLLENBQUM7UUFDOUMsTUFBTSxZQUFZLEdBQUcsT0FBTyxFQUFFLElBQUksRUFBRSxZQUFZLElBQUksS0FBSyxDQUFDO1FBQzFELE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsRCxDQUFDOytIQWhIUSw4QkFBOEI7dUVBQTlCLDhCQUE4QixXQUE5Qiw4QkFBOEI7O2lGQUE5Qiw4QkFBOEI7Y0FEMUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QWN0aW9uLCBBY3Rpb25Db250ZXh0LCBNb2RlQWN0aW9uc30gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2FjdGlvbnMvYWN0aW9uLm1vZGVsJztcbmltcG9ydCB7Vmlld01vZGV9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi92aWV3cy92aWV3Lm1vZGVsJztcbmltcG9ydCB7aXNUcnVlfSBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvdmFsdWUtdXRpbHMnO1xuaW1wb3J0IHtjb21iaW5lTGF0ZXN0V2l0aCwgT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge21hcCwgdGFrZX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtBc3luY0FjdGlvbklucHV0LCBBc3luY0FjdGlvblNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3Byb2Nlc3MvcHJvY2Vzc2VzL2FzeW5jLWFjdGlvbi9hc3luYy1hY3Rpb24nO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9tZXNzYWdlL21lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQge1Byb2Nlc3N9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3Byb2Nlc3MvcHJvY2Vzcy5zZXJ2aWNlJztcbmltcG9ydCB7Q29uZmlybWF0aW9uTW9kYWxTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9tb2RhbHMvY29uZmlybWF0aW9uLW1vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHtCYXNlUmVjb3JkQWN0aW9uc0FkYXB0ZXJ9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2FjdGlvbnMvYmFzZS1yZWNvcmQtYWN0aW9uLmFkYXB0ZXInO1xuaW1wb3J0IHtTZWxlY3RNb2RhbFNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL21vZGFscy9zZWxlY3QtbW9kYWwuc2VydmljZSc7XG5pbXBvcnQge1JlY29yZFRocmVhZEl0ZW1BY3Rpb25EYXRhfSBmcm9tICcuLi9hY3Rpb25zL2l0ZW0tYWN0aW9ucy9yZWNvcmQtdGhyZWFkLWl0ZW0uYWN0aW9uJztcbmltcG9ydCB7UmVjb3JkVGhyZWFkSXRlbUFjdGlvbk1hbmFnZXJ9IGZyb20gJy4uL2FjdGlvbnMvaXRlbS1hY3Rpb25zL3JlY29yZC10aHJlYWQtaXRlbS1hY3Rpb24tbWFuYWdlci5zZXJ2aWNlJztcbmltcG9ydCB7UmVjb3JkVGhyZWFkSXRlbVN0b3JlfSBmcm9tICcuLi9zdG9yZS9yZWNvcmQtdGhyZWFkL3JlY29yZC10aHJlYWQtaXRlbS5zdG9yZSc7XG5pbXBvcnQge1JlY29yZFRocmVhZFN0b3JlfSBmcm9tICcuLi9zdG9yZS9yZWNvcmQtdGhyZWFkL3JlY29yZC10aHJlYWQuc3RvcmUnO1xuaW1wb3J0IHtNZXRhZGF0YVN0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9tZXRhZGF0YS9tZXRhZGF0YS5zdG9yZS5zZXJ2aWNlJztcbmltcG9ydCB7QXBwTWV0YWRhdGFTdG9yZX0gZnJvbSBcIi4uLy4uLy4uL3N0b3JlL2FwcC1tZXRhZGF0YS9hcHAtbWV0YWRhdGEuc3RvcmUuc2VydmljZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVjb3JkVGhyZWFkSXRlbUFjdGlvbnNBZGFwdGVyIGV4dGVuZHMgQmFzZVJlY29yZEFjdGlvbnNBZGFwdGVyPFJlY29yZFRocmVhZEl0ZW1BY3Rpb25EYXRhPiB7XG5cbiAgICBkZWZhdWx0QWN0aW9uczogTW9kZUFjdGlvbnMgPSB7XG4gICAgICAgIGRldGFpbDogW10sXG4gICAgICAgIGVkaXQ6IFtdLFxuICAgICAgICBjcmVhdGU6IFtdLFxuICAgIH07XG4gICAgY29sbGFwc2VCdXR0b25zID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGl0ZW1TdG9yZTogUmVjb3JkVGhyZWFkSXRlbVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgdGhyZWFkU3RvcmU6IFJlY29yZFRocmVhZFN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBhY3Rpb25NYW5hZ2VyOiBSZWNvcmRUaHJlYWRJdGVtQWN0aW9uTWFuYWdlcixcbiAgICAgICAgcHJvdGVjdGVkIGFzeW5jQWN0aW9uU2VydmljZTogQXN5bmNBY3Rpb25TZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgbWVzc2FnZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBjb25maXJtYXRpb246IENvbmZpcm1hdGlvbk1vZGFsU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIHNlbGVjdE1vZGFsU2VydmljZTogU2VsZWN0TW9kYWxTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgbWV0YWRhdGE6IE1ldGFkYXRhU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBhcHBNZXRhZGF0YVN0b3JlOiBBcHBNZXRhZGF0YVN0b3JlXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgYWN0aW9uTWFuYWdlcixcbiAgICAgICAgICAgIGFzeW5jQWN0aW9uU2VydmljZSxcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICBjb25maXJtYXRpb24sXG4gICAgICAgICAgICBsYW5ndWFnZSxcbiAgICAgICAgICAgIHNlbGVjdE1vZGFsU2VydmljZSxcbiAgICAgICAgICAgIG1ldGFkYXRhLFxuICAgICAgICAgICAgYXBwTWV0YWRhdGFTdG9yZVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGdldEFjdGlvbnMoY29udGV4dD86IEFjdGlvbkNvbnRleHQpOiBPYnNlcnZhYmxlPEFjdGlvbltdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1TdG9yZS5tZXRhJC5waXBlKFxuICAgICAgICAgICAgY29tYmluZUxhdGVzdFdpdGgodGhpcy5pdGVtU3RvcmUubW9kZSQpLFxuICAgICAgICAgICAgbWFwKChbbWV0YSwgbW9kZV06IFthbnksVmlld01vZGVdKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIW1vZGUgfHwgIW1ldGEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlTW9kZUFjdGlvbnMobWV0YS5hY3Rpb25zLCBtb2RlLCB0aGlzLml0ZW1TdG9yZS5nZXRWaWV3Q29udGV4dCgpKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGFjdGlvbiBuYW1lXG4gICAgICogQHBhcmFtIGFjdGlvblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRBY3Rpb25OYW1lKGFjdGlvbjogQWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBgcmVjb3JkLXRocmVhZC1pdGVtLSR7YWN0aW9uLmtleX1gO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBidWlsZEFjdGlvbkRhdGEoYWN0aW9uOiBBY3Rpb24sIGNvbnRleHQ/OiBBY3Rpb25Db250ZXh0KTogUmVjb3JkVGhyZWFkSXRlbUFjdGlvbkRhdGEge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXRlbVN0b3JlOiB0aGlzLml0ZW1TdG9yZSxcbiAgICAgICAgICAgIHRocmVhZFN0b3JlOiB0aGlzLnRocmVhZFN0b3JlLFxuICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb25cbiAgICAgICAgfSBhcyBSZWNvcmRUaHJlYWRJdGVtQWN0aW9uRGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCBiYWNrZW5kIHByb2Nlc3MgaW5wdXRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhY3Rpb25cbiAgICAgKiBAcGFyYW0gYWN0aW9uTmFtZVxuICAgICAqIEBwYXJhbSBtb2R1bGVOYW1lXG4gICAgICogQHBhcmFtIGNvbnRleHRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYnVpbGRBY3Rpb25JbnB1dChhY3Rpb246IEFjdGlvbiwgYWN0aW9uTmFtZTogc3RyaW5nLCBtb2R1bGVOYW1lOiBzdHJpbmcsIGNvbnRleHQ6IEFjdGlvbkNvbnRleHQgPSBudWxsKTogQXN5bmNBY3Rpb25JbnB1dCB7XG4gICAgICAgIGNvbnN0IGJhc2VSZWNvcmQgPSB0aGlzLml0ZW1TdG9yZS5nZXRCYXNlUmVjb3JkKCk7XG5cbiAgICAgICAgdGhpcy5tZXNzYWdlLnJlbW92ZU1lc3NhZ2VzKCk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uTmFtZSxcbiAgICAgICAgICAgIG1vZHVsZTogYmFzZVJlY29yZC5tb2R1bGUsXG4gICAgICAgICAgICBpZDogYmFzZVJlY29yZC5pZCxcbiAgICAgICAgICAgIHBhcmFtczogKGFjdGlvbiAmJiBhY3Rpb24ucGFyYW1zKSB8fCBbXVxuICAgICAgICB9IGFzIEFzeW5jQWN0aW9uSW5wdXQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldE1vZGUoKTogVmlld01vZGUge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtU3RvcmUuZ2V0TW9kZSgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRNb2R1bGVOYW1lKGNvbnRleHQ/OiBBY3Rpb25Db250ZXh0KTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbVN0b3JlLmdldE1vZHVsZU5hbWUoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVsb2FkKGFjdGlvbjogQWN0aW9uLCBwcm9jZXNzOiBQcm9jZXNzLCBjb250ZXh0PzogQWN0aW9uQ29udGV4dCk6IHZvaWQge1xuICAgICAgICBjb25zdCByZWxvYWQgPSBwcm9jZXNzPy5kYXRhPy5yZWxvYWQgPz8gZmFsc2U7XG4gICAgICAgIGNvbnN0IHJlbG9hZFRocmVhZCA9IHByb2Nlc3M/LmRhdGE/LnJlbG9hZFRocmVhZCA/PyBmYWxzZTtcblxuICAgICAgICBpZiAoaXNUcnVlKHJlbG9hZCkpIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbVN0b3JlLmxvYWQoZmFsc2UpLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNUcnVlKHJlbG9hZFRocmVhZCkpIHtcbiAgICAgICAgICAgIHRoaXMudGhyZWFkU3RvcmUucmVsb2FkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBzaG91bGRSZWxvYWQocHJvY2VzczogUHJvY2Vzcyk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCByZWxvYWQgPSBwcm9jZXNzPy5kYXRhPy5yZWxvYWQgPz8gZmFsc2U7XG4gICAgICAgIGNvbnN0IHJlbG9hZFRocmVhZCA9IHByb2Nlc3M/LmRhdGE/LnJlbG9hZFRocmVhZCA/PyBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGlzVHJ1ZShyZWxvYWQpIHx8IGlzVHJ1ZShyZWxvYWRUaHJlYWQpO1xuICAgIH1cbn1cbiJdfQ==