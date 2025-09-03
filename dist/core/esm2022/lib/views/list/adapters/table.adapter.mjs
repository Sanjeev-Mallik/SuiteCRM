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
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { ListViewStore } from '../store/list-view/list-view.store';
import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { LineActionsAdapter } from './line-actions.adapter';
import { LineActionActionManager } from '../../../components/table/line-actions/line-action-manager.service';
import { AsyncActionService } from '../../../services/process/processes/async-action/async-action';
import { MessageService } from '../../../services/message/message.service';
import { ConfirmationModalService } from '../../../services/modals/confirmation-modal.service';
import { LanguageStore } from '../../../store/language/language.store';
import { BulkActionsAdapterFactory } from './bulk-actions.adapter.factory';
import { SelectModalService } from '../../../services/modals/select-modal.service';
import { UserPreferenceStore } from "../../../store/user-preference/user-preference.store";
import { SystemConfigStore } from "../../../store/system-config/system-config.store";
import { ListviewTableActionsAdapterFactory } from "./listview-table-actions.adapter.factory";
import { AppMetadataStore } from "../../../store/app-metadata/app-metadata.store.service";
import * as i0 from "@angular/core";
import * as i1 from "../store/list-view/list-view.store";
import * as i2 from "../../../store/metadata/metadata.store.service";
import * as i3 from "../../../components/table/line-actions/line-action-manager.service";
import * as i4 from "../../../services/process/processes/async-action/async-action";
import * as i5 from "../../../services/message/message.service";
import * as i6 from "../../../services/modals/confirmation-modal.service";
import * as i7 from "../../../store/language/language.store";
import * as i8 from "./bulk-actions.adapter.factory";
import * as i9 from "./listview-table-actions.adapter.factory";
import * as i10 from "../../../services/modals/select-modal.service";
import * as i11 from "../../../store/user-preference/user-preference.store";
import * as i12 from "../../../store/system-config/system-config.store";
import * as i13 from "../../../store/app-metadata/app-metadata.store.service";
export class TableAdapter {
    constructor(store, metadata, actionManager, asyncActionService, message, confirmation, language, bulkActionsAdapterFactory, listviewTableActionsAdapterFactory, selectModalService, preferences, systemConfigs, appMetadataStore) {
        this.store = store;
        this.metadata = metadata;
        this.actionManager = actionManager;
        this.asyncActionService = asyncActionService;
        this.message = message;
        this.confirmation = confirmation;
        this.language = language;
        this.bulkActionsAdapterFactory = bulkActionsAdapterFactory;
        this.listviewTableActionsAdapterFactory = listviewTableActionsAdapterFactory;
        this.selectModalService = selectModalService;
        this.preferences = preferences;
        this.systemConfigs = systemConfigs;
        this.appMetadataStore = appMetadataStore;
    }
    getTable() {
        return {
            showHeader: true,
            showFooter: true,
            module: this.store.getModuleName(),
            columns: this.store.columns$,
            lineActions: this.getLineActionsDataSource(),
            selection$: this.store.selection$,
            sort$: this.store.sort$,
            maxColumns$: of(4),
            loading$: this.store.recordList.loading$,
            dataSource: this.store.recordList,
            selection: this.store.recordList,
            bulkActions: this.getBulkActionsDataSource(this.store),
            tableActions: this.getTableActions(this.store),
            pagination: this.store.recordList,
            paginationType: this.preferences.getUserPreference('listview_pagination_type') ?? this.systemConfigs.getConfigValue('listview_pagination_type'),
            maxListHeight: this.preferences.getUserPreference('listview_max_height') ?? this.systemConfigs.getConfigValue('listview_max_height'),
            toggleRecordSelection: (id) => {
                this.store.recordList.toggleSelection(id);
            },
            updateSorting: (orderBy, sortOrder) => {
                this.store.recordList.updateSorting(orderBy, sortOrder);
                this.store.updateSortLocalStorage();
            },
            loadMore: () => {
                const jump = this.preferences.getUserPreference('list_max_entries_per_page') ?? this.systemConfigs.getConfigValue('list_max_entries_per_page');
                const pagination = this.store.recordList.getPagination();
                const currentPageSize = pagination.pageSize || 0;
                const newPageSize = Number(currentPageSize) + Number(jump);
                this.store.recordList.setPageSize(newPageSize);
                this.store.recordList.updatePagination(pagination.current);
            },
            allLoaded: () => {
                const pagination = this.store.recordList.getPagination();
                if (!pagination) {
                    return false;
                }
                if (Number(pagination.pageLast) >= Number(pagination.total)) {
                    return true;
                }
                return Number(pagination.pageSize) >= Number(pagination.total);
            }
        };
    }
    getLineActionsDataSource() {
        return new LineActionsAdapter(this.store, this.actionManager, this.asyncActionService, this.message, this.confirmation, this.language, this.selectModalService, this.metadata, this.appMetadataStore);
    }
    getBulkActionsDataSource(store) {
        return this.bulkActionsAdapterFactory.create(store);
    }
    getTableActions(store) {
        return this.listviewTableActionsAdapterFactory.create(store);
    }
    static { this.ɵfac = function TableAdapter_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TableAdapter)(i0.ɵɵinject(i1.ListViewStore), i0.ɵɵinject(i2.MetadataStore), i0.ɵɵinject(i3.LineActionActionManager), i0.ɵɵinject(i4.AsyncActionService), i0.ɵɵinject(i5.MessageService), i0.ɵɵinject(i6.ConfirmationModalService), i0.ɵɵinject(i7.LanguageStore), i0.ɵɵinject(i8.BulkActionsAdapterFactory), i0.ɵɵinject(i9.ListviewTableActionsAdapterFactory), i0.ɵɵinject(i10.SelectModalService), i0.ɵɵinject(i11.UserPreferenceStore), i0.ɵɵinject(i12.SystemConfigStore), i0.ɵɵinject(i13.AppMetadataStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: TableAdapter, factory: TableAdapter.ɵfac }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableAdapter, [{
        type: Injectable
    }], () => [{ type: i1.ListViewStore }, { type: i2.MetadataStore }, { type: i3.LineActionActionManager }, { type: i4.AsyncActionService }, { type: i5.MessageService }, { type: i6.ConfirmationModalService }, { type: i7.LanguageStore }, { type: i8.BulkActionsAdapterFactory }, { type: i9.ListviewTableActionsAdapterFactory }, { type: i10.SelectModalService }, { type: i11.UserPreferenceStore }, { type: i12.SystemConfigStore }, { type: i13.AppMetadataStore }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi92aWV3cy9saXN0L2FkYXB0ZXJzL3RhYmxlLmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxFQUFFLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDeEIsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUd6QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDakUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGdEQUFnRCxDQUFDO0FBRTdFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLG9FQUFvRSxDQUFDO0FBQzNHLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLCtEQUErRCxDQUFDO0FBQ2pHLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUN6RSxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxxREFBcUQsQ0FBQztBQUM3RixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0NBQXdDLENBQUM7QUFDckUsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFFekUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDakYsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sc0RBQXNELENBQUM7QUFDekYsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0RBQWtELENBQUM7QUFDbkYsT0FBTyxFQUFDLGtDQUFrQyxFQUFDLE1BQU0sMENBQTBDLENBQUM7QUFDNUYsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sd0RBQXdELENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQUd4RixNQUFNLE9BQU8sWUFBWTtJQUVyQixZQUNjLEtBQW9CLEVBQ3BCLFFBQXVCLEVBQ3ZCLGFBQXNDLEVBQ3RDLGtCQUFzQyxFQUN0QyxPQUF1QixFQUN2QixZQUFzQyxFQUN0QyxRQUF1QixFQUN2Qix5QkFBb0QsRUFDcEQsa0NBQXNFLEVBQ3RFLGtCQUFzQyxFQUN0QyxXQUFnQyxFQUNoQyxhQUFnQyxFQUNoQyxnQkFBa0M7UUFabEMsVUFBSyxHQUFMLEtBQUssQ0FBZTtRQUNwQixhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLGtCQUFhLEdBQWIsYUFBYSxDQUF5QjtRQUN0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLGlCQUFZLEdBQVosWUFBWSxDQUEwQjtRQUN0QyxhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFDcEQsdUNBQWtDLEdBQWxDLGtDQUFrQyxDQUFvQztRQUN0RSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLGdCQUFXLEdBQVgsV0FBVyxDQUFxQjtRQUNoQyxrQkFBYSxHQUFiLGFBQWEsQ0FBbUI7UUFDaEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUVoRCxDQUFDO0lBRUQsUUFBUTtRQUNKLE9BQU87WUFDSCxVQUFVLEVBQUUsSUFBSTtZQUNoQixVQUFVLEVBQUUsSUFBSTtZQUVoQixNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUU7WUFFbEMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTtZQUM1QixXQUFXLEVBQUUsSUFBSSxDQUFDLHdCQUF3QixFQUFFO1lBQzVDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVU7WUFDakMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSztZQUN2QixXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNsQixRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsUUFBUTtZQUV4QyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVO1lBQ2pDLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVU7WUFDaEMsV0FBVyxFQUFFLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3RELFlBQVksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDOUMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVTtZQUVqQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLDBCQUEwQixDQUFDO1lBQy9JLGFBQWEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixDQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMscUJBQXFCLENBQUM7WUFFcEkscUJBQXFCLEVBQUUsQ0FBQyxFQUFVLEVBQVEsRUFBRTtnQkFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlDLENBQUM7WUFFRCxhQUFhLEVBQUUsQ0FBQyxPQUFlLEVBQUUsU0FBd0IsRUFBUSxFQUFFO2dCQUMvRCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUN4RCxJQUFJLENBQUMsS0FBSyxDQUFDLHNCQUFzQixFQUFFLENBQUM7WUFDeEMsQ0FBQztZQUVELFFBQVEsRUFBRSxHQUFTLEVBQUU7Z0JBQ2pCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsMkJBQTJCLENBQUMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO2dCQUMvSSxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDekQsTUFBTSxlQUFlLEdBQUcsVUFBVSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUM7Z0JBQ2pELE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRTNELElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQzlELENBQUM7WUFFRCxTQUFTLEVBQUUsR0FBWSxFQUFFO2dCQUNyQixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFFekQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUNkLE9BQU8sS0FBSyxDQUFDO2dCQUNqQixDQUFDO2dCQUVELElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7b0JBQzFELE9BQU8sSUFBSSxDQUFDO2dCQUNoQixDQUFDO2dCQUVELE9BQU8sTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25FLENBQUM7U0FFVyxDQUFDO0lBQ3JCLENBQUM7SUFFRCx3QkFBd0I7UUFFcEIsT0FBTyxJQUFJLGtCQUFrQixDQUN6QixJQUFJLENBQUMsS0FBSyxFQUNWLElBQUksQ0FBQyxhQUFhLEVBQ2xCLElBQUksQ0FBQyxrQkFBa0IsRUFDdkIsSUFBSSxDQUFDLE9BQU8sRUFDWixJQUFJLENBQUMsWUFBWSxFQUNqQixJQUFJLENBQUMsUUFBUSxFQUNiLElBQUksQ0FBQyxrQkFBa0IsRUFDdkIsSUFBSSxDQUFDLFFBQVEsRUFDYixJQUFJLENBQUMsZ0JBQWdCLENBQ3hCLENBQUM7SUFDTixDQUFDO0lBRUQsd0JBQXdCLENBQUMsS0FBb0I7UUFDekMsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFTyxlQUFlLENBQUMsS0FBb0I7UUFDeEMsT0FBTyxJQUFJLENBQUMsa0NBQWtDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pFLENBQUM7NkdBbkdRLFlBQVk7dUVBQVosWUFBWSxXQUFaLFlBQVk7O2lGQUFaLFlBQVk7Y0FEeEIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtvZn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBY3Rpb25EYXRhU291cmNlfSBmcm9tICcuLi8uLi8uLi9jb21tb24vYWN0aW9ucy9hY3Rpb24ubW9kZWwnO1xuaW1wb3J0IHtTb3J0RGlyZWN0aW9ufSBmcm9tICcuLi8uLi8uLi9jb21tb24vdmlld3MvbGlzdC9saXN0LW5hdmlnYXRpb24ubW9kZWwnO1xuaW1wb3J0IHtMaXN0Vmlld1N0b3JlfSBmcm9tICcuLi9zdG9yZS9saXN0LXZpZXcvbGlzdC12aWV3LnN0b3JlJztcbmltcG9ydCB7TWV0YWRhdGFTdG9yZX0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvbWV0YWRhdGEvbWV0YWRhdGEuc3RvcmUuc2VydmljZSc7XG5pbXBvcnQge1RhYmxlQ29uZmlnfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLm1vZGVsJztcbmltcG9ydCB7TGluZUFjdGlvbnNBZGFwdGVyfSBmcm9tICcuL2xpbmUtYWN0aW9ucy5hZGFwdGVyJztcbmltcG9ydCB7TGluZUFjdGlvbkFjdGlvbk1hbmFnZXJ9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvdGFibGUvbGluZS1hY3Rpb25zL2xpbmUtYWN0aW9uLW1hbmFnZXIuc2VydmljZSc7XG5pbXBvcnQge0FzeW5jQWN0aW9uU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvcHJvY2Vzcy9wcm9jZXNzZXMvYXN5bmMtYWN0aW9uL2FzeW5jLWFjdGlvbic7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9tZXNzYWdlL21lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQge0NvbmZpcm1hdGlvbk1vZGFsU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbW9kYWxzL2NvbmZpcm1hdGlvbi1tb2RhbC5zZXJ2aWNlJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZX0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtCdWxrQWN0aW9uc0FkYXB0ZXJGYWN0b3J5fSBmcm9tICcuL2J1bGstYWN0aW9ucy5hZGFwdGVyLmZhY3RvcnknO1xuaW1wb3J0IHtCdWxrQWN0aW9uc0FkYXB0ZXJ9IGZyb20gJy4vYnVsay1hY3Rpb25zLmFkYXB0ZXInO1xuaW1wb3J0IHtTZWxlY3RNb2RhbFNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL21vZGFscy9zZWxlY3QtbW9kYWwuc2VydmljZSc7XG5pbXBvcnQge1VzZXJQcmVmZXJlbmNlU3RvcmV9IGZyb20gXCIuLi8uLi8uLi9zdG9yZS91c2VyLXByZWZlcmVuY2UvdXNlci1wcmVmZXJlbmNlLnN0b3JlXCI7XG5pbXBvcnQge1N5c3RlbUNvbmZpZ1N0b3JlfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmUvc3lzdGVtLWNvbmZpZy9zeXN0ZW0tY29uZmlnLnN0b3JlXCI7XG5pbXBvcnQge0xpc3R2aWV3VGFibGVBY3Rpb25zQWRhcHRlckZhY3Rvcnl9IGZyb20gXCIuL2xpc3R2aWV3LXRhYmxlLWFjdGlvbnMuYWRhcHRlci5mYWN0b3J5XCI7XG5pbXBvcnQge0FwcE1ldGFkYXRhU3RvcmV9IGZyb20gXCIuLi8uLi8uLi9zdG9yZS9hcHAtbWV0YWRhdGEvYXBwLW1ldGFkYXRhLnN0b3JlLnNlcnZpY2VcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRhYmxlQWRhcHRlciB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIHN0b3JlOiBMaXN0Vmlld1N0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbWV0YWRhdGE6IE1ldGFkYXRhU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBhY3Rpb25NYW5hZ2VyOiBMaW5lQWN0aW9uQWN0aW9uTWFuYWdlcixcbiAgICAgICAgcHJvdGVjdGVkIGFzeW5jQWN0aW9uU2VydmljZTogQXN5bmNBY3Rpb25TZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgbWVzc2FnZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBjb25maXJtYXRpb246IENvbmZpcm1hdGlvbk1vZGFsU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIGxhbmd1YWdlOiBMYW5ndWFnZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgYnVsa0FjdGlvbnNBZGFwdGVyRmFjdG9yeTogQnVsa0FjdGlvbnNBZGFwdGVyRmFjdG9yeSxcbiAgICAgICAgcHJvdGVjdGVkIGxpc3R2aWV3VGFibGVBY3Rpb25zQWRhcHRlckZhY3Rvcnk6IExpc3R2aWV3VGFibGVBY3Rpb25zQWRhcHRlckZhY3RvcnksXG4gICAgICAgIHByb3RlY3RlZCBzZWxlY3RNb2RhbFNlcnZpY2U6IFNlbGVjdE1vZGFsU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIHByZWZlcmVuY2VzOiBVc2VyUHJlZmVyZW5jZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgc3lzdGVtQ29uZmlnczogU3lzdGVtQ29uZmlnU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBhcHBNZXRhZGF0YVN0b3JlOiBBcHBNZXRhZGF0YVN0b3JlXG4gICAgKSB7XG4gICAgfVxuXG4gICAgZ2V0VGFibGUoKTogVGFibGVDb25maWcge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2hvd0hlYWRlcjogdHJ1ZSxcbiAgICAgICAgICAgIHNob3dGb290ZXI6IHRydWUsXG5cbiAgICAgICAgICAgIG1vZHVsZTogdGhpcy5zdG9yZS5nZXRNb2R1bGVOYW1lKCksXG5cbiAgICAgICAgICAgIGNvbHVtbnM6IHRoaXMuc3RvcmUuY29sdW1ucyQsXG4gICAgICAgICAgICBsaW5lQWN0aW9uczogdGhpcy5nZXRMaW5lQWN0aW9uc0RhdGFTb3VyY2UoKSxcbiAgICAgICAgICAgIHNlbGVjdGlvbiQ6IHRoaXMuc3RvcmUuc2VsZWN0aW9uJCxcbiAgICAgICAgICAgIHNvcnQkOiB0aGlzLnN0b3JlLnNvcnQkLFxuICAgICAgICAgICAgbWF4Q29sdW1ucyQ6IG9mKDQpLFxuICAgICAgICAgICAgbG9hZGluZyQ6IHRoaXMuc3RvcmUucmVjb3JkTGlzdC5sb2FkaW5nJCxcblxuICAgICAgICAgICAgZGF0YVNvdXJjZTogdGhpcy5zdG9yZS5yZWNvcmRMaXN0LFxuICAgICAgICAgICAgc2VsZWN0aW9uOiB0aGlzLnN0b3JlLnJlY29yZExpc3QsXG4gICAgICAgICAgICBidWxrQWN0aW9uczogdGhpcy5nZXRCdWxrQWN0aW9uc0RhdGFTb3VyY2UodGhpcy5zdG9yZSksXG4gICAgICAgICAgICB0YWJsZUFjdGlvbnM6IHRoaXMuZ2V0VGFibGVBY3Rpb25zKHRoaXMuc3RvcmUpLFxuICAgICAgICAgICAgcGFnaW5hdGlvbjogdGhpcy5zdG9yZS5yZWNvcmRMaXN0LFxuXG4gICAgICAgICAgICBwYWdpbmF0aW9uVHlwZTogdGhpcy5wcmVmZXJlbmNlcy5nZXRVc2VyUHJlZmVyZW5jZSgnbGlzdHZpZXdfcGFnaW5hdGlvbl90eXBlJykgPz8gdGhpcy5zeXN0ZW1Db25maWdzLmdldENvbmZpZ1ZhbHVlKCdsaXN0dmlld19wYWdpbmF0aW9uX3R5cGUnKSxcbiAgICAgICAgICAgIG1heExpc3RIZWlnaHQ6IHRoaXMucHJlZmVyZW5jZXMuZ2V0VXNlclByZWZlcmVuY2UoJ2xpc3R2aWV3X21heF9oZWlnaHQnKSA/PyB0aGlzLnN5c3RlbUNvbmZpZ3MuZ2V0Q29uZmlnVmFsdWUoJ2xpc3R2aWV3X21heF9oZWlnaHQnKSxcblxuICAgICAgICAgICAgdG9nZ2xlUmVjb3JkU2VsZWN0aW9uOiAoaWQ6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUucmVjb3JkTGlzdC50b2dnbGVTZWxlY3Rpb24oaWQpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgdXBkYXRlU29ydGluZzogKG9yZGVyQnk6IHN0cmluZywgc29ydE9yZGVyOiBTb3J0RGlyZWN0aW9uKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5yZWNvcmRMaXN0LnVwZGF0ZVNvcnRpbmcob3JkZXJCeSwgc29ydE9yZGVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLnVwZGF0ZVNvcnRMb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGxvYWRNb3JlOiAoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QganVtcCA9IHRoaXMucHJlZmVyZW5jZXMuZ2V0VXNlclByZWZlcmVuY2UoJ2xpc3RfbWF4X2VudHJpZXNfcGVyX3BhZ2UnKSA/PyB0aGlzLnN5c3RlbUNvbmZpZ3MuZ2V0Q29uZmlnVmFsdWUoJ2xpc3RfbWF4X2VudHJpZXNfcGVyX3BhZ2UnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwYWdpbmF0aW9uID0gdGhpcy5zdG9yZS5yZWNvcmRMaXN0LmdldFBhZ2luYXRpb24oKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50UGFnZVNpemUgPSBwYWdpbmF0aW9uLnBhZ2VTaXplIHx8IDA7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3UGFnZVNpemUgPSBOdW1iZXIoY3VycmVudFBhZ2VTaXplKSArIE51bWJlcihqdW1wKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUucmVjb3JkTGlzdC5zZXRQYWdlU2l6ZShuZXdQYWdlU2l6ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5yZWNvcmRMaXN0LnVwZGF0ZVBhZ2luYXRpb24ocGFnaW5hdGlvbi5jdXJyZW50KVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgYWxsTG9hZGVkOiAoKTogYm9vbGVhbiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFnaW5hdGlvbiA9IHRoaXMuc3RvcmUucmVjb3JkTGlzdC5nZXRQYWdpbmF0aW9uKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXBhZ2luYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChOdW1iZXIocGFnaW5hdGlvbi5wYWdlTGFzdCkgPj0gTnVtYmVyKHBhZ2luYXRpb24udG90YWwpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBOdW1iZXIocGFnaW5hdGlvbi5wYWdlU2l6ZSkgPj0gTnVtYmVyKHBhZ2luYXRpb24udG90YWwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gYXMgVGFibGVDb25maWc7XG4gICAgfVxuXG4gICAgZ2V0TGluZUFjdGlvbnNEYXRhU291cmNlKCk6IEFjdGlvbkRhdGFTb3VyY2Uge1xuXG4gICAgICAgIHJldHVybiBuZXcgTGluZUFjdGlvbnNBZGFwdGVyKFxuICAgICAgICAgICAgdGhpcy5zdG9yZSxcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uTWFuYWdlcixcbiAgICAgICAgICAgIHRoaXMuYXN5bmNBY3Rpb25TZXJ2aWNlLFxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlLFxuICAgICAgICAgICAgdGhpcy5jb25maXJtYXRpb24sXG4gICAgICAgICAgICB0aGlzLmxhbmd1YWdlLFxuICAgICAgICAgICAgdGhpcy5zZWxlY3RNb2RhbFNlcnZpY2UsXG4gICAgICAgICAgICB0aGlzLm1ldGFkYXRhLFxuICAgICAgICAgICAgdGhpcy5hcHBNZXRhZGF0YVN0b3JlXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0QnVsa0FjdGlvbnNEYXRhU291cmNlKHN0b3JlOiBMaXN0Vmlld1N0b3JlKTogQnVsa0FjdGlvbnNBZGFwdGVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVsa0FjdGlvbnNBZGFwdGVyRmFjdG9yeS5jcmVhdGUoc3RvcmUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0VGFibGVBY3Rpb25zKHN0b3JlOiBMaXN0Vmlld1N0b3JlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxpc3R2aWV3VGFibGVBY3Rpb25zQWRhcHRlckZhY3RvcnkuY3JlYXRlKHN0b3JlKTtcbiAgICB9XG59XG4iXX0=