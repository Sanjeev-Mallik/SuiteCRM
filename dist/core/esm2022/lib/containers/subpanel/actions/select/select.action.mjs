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
import { SubpanelActionHandler } from '../subpanel.action';
import { RecordListModalComponent } from "../../../record-list-modal/components/record-list-modal/record-list-modal.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { take } from 'rxjs/operators';
import { AsyncActionService } from '../../../../services/process/processes/async-action/async-action';
import { MessageService } from '../../../../services/message/message.service';
import * as i0 from "@angular/core";
import * as i1 from "@ng-bootstrap/ng-bootstrap";
import * as i2 from "../../../../services/message/message.service";
import * as i3 from "../../../../services/process/processes/async-action/async-action";
export class SubpanelSelectAction extends SubpanelActionHandler {
    constructor(modalService, message, asyncActionService) {
        super();
        this.modalService = modalService;
        this.message = message;
        this.asyncActionService = asyncActionService;
        this.key = 'select';
        this.modes = ['list'];
    }
    shouldDisplay(data) {
        return true;
    }
    run(data) {
        this.showSelectModal(data);
    }
    /**
     * Show record selection modal
     */
    showSelectModal(data) {
        const modal = this.modalService.open(RecordListModalComponent, { size: 'xl', scrollable: true });
        const module = data.module;
        modal.componentInstance.module = module;
        modal.componentInstance.parentModule = data?.parentModule ?? '';
        modal.componentInstance.multiSelect = true;
        modal.componentInstance.multiSelectButtonLabel = 'LBL_LINK';
        modal.result.then((result) => {
            if (!result || !result.selection || !result.selection.selected) {
                return;
            }
            const recordIds = this.getSelectedIds(result);
            let linkField = data.subpanelMeta.get_subpanel_data;
            const collectionList = data.subpanelMeta?.collection_list ?? null;
            if (collectionList && collectionList?.[module]?.get_subpanel_data) {
                linkField = collectionList[module].get_subpanel_data;
            }
            const input = {
                action: 'record-select',
                module: data.store.parentModule,
                id: data.store.parentId || '',
                payload: {
                    baseModule: data.parentModule,
                    baseRecordId: data.parentId,
                    linkField,
                    relateModule: module,
                    relateRecordIds: recordIds
                },
            };
            this.runAsyncAction(input, data);
        });
    }
    /**
     * Get Selected Record
     *
     * @param {object} data RecordListModalResult
     * @returns {object} Record
     **/
    getSelectedIds(data) {
        const ids = [];
        Object.keys(data.selection.selected).forEach((selected) => {
            if (selected) {
                ids.push(selected);
            }
        });
        return ids;
    }
    runAsyncAction(asyncData, data) {
        const actionName = 'record-select';
        this.message.removeMessages();
        this.asyncActionService.run(actionName, asyncData).pipe(take(1)).subscribe(() => {
            data.store.load(false).pipe(take(1)).subscribe();
            data.store.loadAllStatistics(false).pipe(take(1)).subscribe();
        });
    }
    static { this.ɵfac = function SubpanelSelectAction_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SubpanelSelectAction)(i0.ɵɵinject(i1.NgbModal), i0.ɵɵinject(i2.MessageService), i0.ɵɵinject(i3.AsyncActionService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SubpanelSelectAction, factory: SubpanelSelectAction.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SubpanelSelectAction, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.NgbModal }, { type: i2.MessageService }, { type: i3.AsyncActionService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb250YWluZXJzL3N1YnBhbmVsL2FjdGlvbnMvc2VsZWN0L3NlbGVjdC5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFHekMsT0FBTyxFQUFxQixxQkFBcUIsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQzdFLE9BQU8sRUFDSCx3QkFBd0IsRUFDM0IsTUFBTSxxRkFBcUYsQ0FBQztBQUU3RixPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDcEQsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3BDLE9BQU8sRUFBbUIsa0JBQWtCLEVBQUMsTUFBTSxrRUFBa0UsQ0FBQztBQUN0SCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sOENBQThDLENBQUM7Ozs7O0FBTTVFLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxxQkFBcUI7SUFLM0QsWUFDYyxZQUFzQixFQUN0QixPQUF1QixFQUN2QixrQkFBc0M7UUFFaEQsS0FBSyxFQUFFLENBQUM7UUFKRSxpQkFBWSxHQUFaLFlBQVksQ0FBVTtRQUN0QixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBUHBELFFBQUcsR0FBRyxRQUFRLENBQUM7UUFFZixVQUFLLEdBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQVE3QixDQUFDO0lBR0QsYUFBYSxDQUFDLElBQXdCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxHQUFHLENBQUMsSUFBd0I7UUFFeEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMs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SUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNqRCxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNsRSxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7cUhBL0ZRLG9CQUFvQjt1RUFBcEIsb0JBQW9CLFdBQXBCLG9CQUFvQixtQkFGakIsTUFBTTs7aUZBRVQsb0JBQW9CO2NBSGhDLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UmVjb3JkfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vcmVjb3JkL3JlY29yZC5tb2RlbCc7XG5pbXBvcnQge1ZpZXdNb2RlfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vdmlld3Mvdmlldy5tb2RlbCc7XG5pbXBvcnQge1N1YnBhbmVsQWN0aW9uRGF0YSwgU3VicGFuZWxBY3Rpb25IYW5kbGVyfSBmcm9tICcuLi9zdWJwYW5lbC5hY3Rpb24nO1xuaW1wb3J0IHtcbiAgICBSZWNvcmRMaXN0TW9kYWxDb21wb25lbnRcbn0gZnJvbSBcIi4uLy4uLy4uL3JlY29yZC1saXN0LW1vZGFsL2NvbXBvbmVudHMvcmVjb3JkLWxpc3QtbW9kYWwvcmVjb3JkLWxpc3QtbW9kYWwuY29tcG9uZW50XCI7XG5pbXBvcnQge1JlY29yZExpc3RNb2RhbFJlc3VsdH0gZnJvbSBcIi4uLy4uLy4uL3JlY29yZC1saXN0LW1vZGFsL2NvbXBvbmVudHMvcmVjb3JkLWxpc3QtbW9kYWwvcmVjb3JkLWxpc3QtbW9kYWwubW9kZWxcIjtcbmltcG9ydCB7TmdiTW9kYWx9IGZyb20gXCJAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcFwiO1xuaW1wb3J0IHt0YWtlfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge0FzeW5jQWN0aW9uSW5wdXQsIEFzeW5jQWN0aW9uU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvcHJvY2Vzcy9wcm9jZXNzZXMvYXN5bmMtYWN0aW9uL2FzeW5jLWFjdGlvbic7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9tZXNzYWdlL21lc3NhZ2Uuc2VydmljZSc7XG5cblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTdWJwYW5lbFNlbGVjdEFjdGlvbiBleHRlbmRzIFN1YnBhbmVsQWN0aW9uSGFuZGxlciB7XG4gICAga2V5ID0gJ3NlbGVjdCc7XG5cbiAgICBtb2RlczogVmlld01vZGVbXSA9IFsnbGlzdCddO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBtb2RhbFNlcnZpY2U6IE5nYk1vZGFsLFxuICAgICAgICBwcm90ZWN0ZWQgbWVzc2FnZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBhc3luY0FjdGlvblNlcnZpY2U6IEFzeW5jQWN0aW9uU2VydmljZVxuICAgICkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuXG4gICAgc2hvdWxkRGlzcGxheShkYXRhOiBTdWJwYW5lbEFjdGlvbkRhdGEpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcnVuKGRhdGE6IFN1YnBhbmVsQWN0aW9uRGF0YSk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMuc2hvd1NlbGVjdE1vZGFsKGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3cgcmVjb3JkIHNlbGVjdGlvbiBtb2RhbFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBzaG93U2VsZWN0TW9kYWwoZGF0YTogU3VicGFuZWxBY3Rpb25EYXRhKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihSZWNvcmRMaXN0TW9kYWxDb21wb25lbnQsIHtzaXplOiAneGwnLCBzY3JvbGxhYmxlOiB0cnVlfSk7XG5cbiAgICAgICAgY29uc3QgbW9kdWxlID0gZGF0YS5tb2R1bGVcbiAgICAgICAgbW9kYWwuY29tcG9uZW50SW5zdGFuY2UubW9kdWxlID0gbW9kdWxlO1xuICAgICAgICBtb2RhbC5jb21wb25lbnRJbnN0YW5jZS5wYXJlbnRNb2R1bGUgPSBkYXRhPy5wYXJlbnRNb2R1bGUgPz8gJyc7XG4gICAgICAgIG1vZGFsLmNvbXBvbmVudEluc3RhbmNlLm11bHRpU2VsZWN0ID0gdHJ1ZTtcbiAgICAgICAgbW9kYWwuY29tcG9uZW50SW5zdGFuY2UubXVsdGlTZWxlY3RCdXR0b25MYWJlbCA9ICdMQkxfTElOSyc7XG5cbiAgICAgICAgbW9kYWwucmVzdWx0LnRoZW4oKHJlc3VsdDogUmVjb3JkTGlzdE1vZGFsUmVzdWx0KSA9PiB7XG5cbiAgICAgICAgICAgIGlmICghcmVzdWx0IHx8ICFyZXN1bHQuc2VsZWN0aW9uIHx8ICFyZXN1bHQuc2VsZWN0aW9uLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCByZWNvcmRJZHMgPSB0aGlzLmdldFNlbGVjdGVkSWRzKHJlc3VsdCk7XG5cbiAgICAgICAgICAgIGxldCBsaW5rRmllbGQ6IHN0cmluZyA9IGRhdGEuc3VicGFuZWxNZXRhLmdldF9zdWJwYW5lbF9kYXRhO1xuXG4gICAgICAgICAgICBjb25zdCBjb2xsZWN0aW9uTGlzdCA9IGRhdGEuc3VicGFuZWxNZXRhPy5jb2xsZWN0aW9uX2xpc3QgPz8gbnVsbDtcblxuICAgICAgICAgICAgaWYgKGNvbGxlY3Rpb25MaXN0ICYmIGNvbGxlY3Rpb25MaXN0Py5bbW9kdWxlXT8uZ2V0X3N1YnBhbmVsX2RhdGEpIHtcbiAgICAgICAgICAgICAgICBsaW5rRmllbGQgPSBjb2xsZWN0aW9uTGlzdFttb2R1bGVdLmdldF9zdWJwYW5lbF9kYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiAncmVjb3JkLXNlbGVjdCcsXG4gICAgICAgICAgICAgICAgbW9kdWxlOiBkYXRhLnN0b3JlLnBhcmVudE1vZHVsZSxcbiAgICAgICAgICAgICAgICBpZDogZGF0YS5zdG9yZS5wYXJlbnRJZCB8fCAnJyxcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgIGJhc2VNb2R1bGU6IGRhdGEucGFyZW50TW9kdWxlLFxuICAgICAgICAgICAgICAgICAgICBiYXNlUmVjb3JkSWQ6IGRhdGEucGFyZW50SWQsXG4gICAgICAgICAgICAgICAgICAgIGxpbmtGaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgcmVsYXRlTW9kdWxlOiBtb2R1bGUsXG4gICAgICAgICAgICAgICAgICAgIHJlbGF0ZVJlY29yZElkczogcmVjb3JkSWRzXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0gYXMgQXN5bmNBY3Rpb25JbnB1dFxuXG4gICAgICAgICAgICB0aGlzLnJ1bkFzeW5jQWN0aW9uKGlucHV0LCBkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBHZXQgU2VsZWN0ZWQgUmVjb3JkXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSBSZWNvcmRMaXN0TW9kYWxSZXN1bHRcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBSZWNvcmRcbiAgICAgKiovXG4gICAgcHJvdGVjdGVkIGdldFNlbGVjdGVkSWRzKGRhdGE6IFJlY29yZExpc3RNb2RhbFJlc3VsdCk6IFJlY29yZFtdIHtcbiAgICAgICAgY29uc3QgaWRzID0gW107XG4gICAgICAgIE9iamVjdC5rZXlzKGRhdGEuc2VsZWN0aW9uLnNlbGVjdGVkKS5mb3JFYWNoKChzZWxlY3RlZCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgaWRzLnB1c2goc2VsZWN0ZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gaWRzO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBydW5Bc3luY0FjdGlvbihhc3luY0RhdGE6IEFzeW5jQWN0aW9uSW5wdXQsIGRhdGE6IFN1YnBhbmVsQWN0aW9uRGF0YSk6IHZvaWQge1xuICAgICAgICBjb25zdCBhY3Rpb25OYW1lID0gJ3JlY29yZC1zZWxlY3QnO1xuXG4gICAgICAgIHRoaXMubWVzc2FnZS5yZW1vdmVNZXNzYWdlcygpO1xuXG5cbiAgICAgICAgdGhpcy5hc3luY0FjdGlvblNlcnZpY2UucnVuKGFjdGlvbk5hbWUsIGFzeW5jRGF0YSkucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgZGF0YS5zdG9yZS5sb2FkKGZhbHNlKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgZGF0YS5zdG9yZS5sb2FkQWxsU3RhdGlzdGljcyhmYWxzZSkucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG4iXX0=