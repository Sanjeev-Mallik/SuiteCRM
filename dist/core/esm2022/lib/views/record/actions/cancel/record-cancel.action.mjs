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
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RecordActionHandler } from '../record.action';
import { MessageModalComponent } from '../../../../components/modal/components/message-modal/message-modal.component';
import { ModuleNavigation } from '../../../../services/navigation/module-navigation/module-navigation.service';
import { Router } from "@angular/router";
import { RecordPaginationService } from "../../store/record-pagination/record-pagination.service";
import * as i0 from "@angular/core";
import * as i1 from "@ng-bootstrap/ng-bootstrap";
import * as i2 from "../../../../services/navigation/module-navigation/module-navigation.service";
import * as i3 from "@angular/router";
import * as i4 from "../../store/record-pagination/record-pagination.service";
export class RecordCancelAction extends RecordActionHandler {
    constructor(modalService, navigation, router, recordPaginationService) {
        super();
        this.modalService = modalService;
        this.navigation = navigation;
        this.router = router;
        this.recordPaginationService = recordPaginationService;
        this.key = 'cancel';
        this.modes = ['edit', 'detail'];
    }
    run(data) {
        if (data.store.recordStore.isDirty()) {
            this.showConfirmationModal(data);
            return;
        }
        this.cancel(data);
    }
    shouldDisplay() {
        return true;
    }
    cancel(data) {
        const params = data.store.params;
        const moduleName = data.store.getModuleName();
        const id = data.store.getRecordId();
        const record = data.store.getBaseRecord();
        const currentUrl = this.router.url;
        if (currentUrl.includes('edit')) {
            this.navigateBackToDetail(this.navigation, this.router, this.recordPaginationService, id, moduleName);
        }
        else {
            this.navigateBack(this.navigation, params, id, moduleName, record);
        }
        data.store.recordStore.resetStaging();
        data.store.setMode('detail');
    }
    showConfirmationModal(data) {
        const modal = this.modalService.open(MessageModalComponent);
        modal.componentInstance.textKey = 'WARN_UNSAVED_CHANGES';
        modal.componentInstance.buttons = [
            {
                labelKey: 'LBL_CANCEL',
                klass: ['btn-secondary'],
                onClick: activeModal => activeModal.dismiss()
            },
            {
                labelKey: 'LBL_PROCEED',
                klass: ['btn-main'],
                onClick: activeModal => {
                    this.cancel(data);
                    activeModal.close();
                }
            },
        ];
    }
    static { this.ɵfac = function RecordCancelAction_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RecordCancelAction)(i0.ɵɵinject(i1.NgbModal), i0.ɵɵinject(i2.ModuleNavigation), i0.ɵɵinject(i3.Router), i0.ɵɵinject(i4.RecordPaginationService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordCancelAction, factory: RecordCancelAction.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordCancelAction, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.NgbModal }, { type: i2.ModuleNavigation }, { type: i3.Router }, { type: i4.RecordPaginationService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLWNhbmNlbC5hY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvcmVjb3JkL2FjdGlvbnMvY2FuY2VsL3JlY29yZC1jYW5jZWwuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBR3pDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRCxPQUFPLEVBQW1CLG1CQUFtQixFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDdkUsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sK0VBQStFLENBQUM7QUFDcEgsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNkVBQTZFLENBQUM7QUFDN0csT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZDLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLHlEQUF5RCxDQUFDOzs7Ozs7QUFLaEcsTUFBTSxPQUFPLGtCQUFtQixTQUFRLG1CQUFtQjtJQUt2RCxZQUNZLFlBQXNCLEVBQ3RCLFVBQTRCLEVBQzVCLE1BQWMsRUFDZCx1QkFBZ0Q7UUFFeEQsS0FBSyxFQUFFLENBQUM7UUFMQSxpQkFBWSxHQUFaLFlBQVksQ0FBVTtRQUN0QixlQUFVLEdBQVYsVUFBVSxDQUFrQjtRQUM1QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQVA1RCxRQUFHLEdBQUcsUUFBUSxDQUFDO1FBQ2YsVUFBSyxHQUFHLENBQUMsTUFBa0IsRUFBRSxRQUFvQixDQUFDLENBQUM7SUFTbkQsQ0FBQztJQUVELEdBQUcsQ0FBQyxJQUFzQjtRQUV0QixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7WUFDbkMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pDLE9BQU87UUFDWCxDQUFDO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsYUFBYTtRQUNULE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFUyxNQUFNLENBQUMsSUFBc0I7UUFFbkMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDakMsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUM5QyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFMUMsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFFbkMsSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7WUFDOUIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsdUJBQXVCLEVBQUUsRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQzFHLENBQUM7YUFBTSxDQUFDO1lBQ0osSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZFLENBQUM7UUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFvQixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVTLHFCQUFxQixDQUFDLElBQXNCO1FBQ2xELE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFFNUQsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sR0FBRyxzQkFBc0IsQ0FBQztRQUN6RCxLQUFLLENBQUMsaUJBQWlCLENBQUMsT0FBTyxHQUFHO1lBQzlCO2dCQUNJLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixLQUFLLEVBQUUsQ0FBQyxlQUFlLENBQUM7Z0JBQ3hCLE9BQU8sRUFBRSxXQUFXLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUU7YUFDeEI7WUFDekI7Z0JBQ0ksUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLEtBQUssRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDbkIsT0FBTyxFQUFFLFdBQVcsQ0FBQyxFQUFFO29CQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNsQixXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ3hCLENBQUM7YUFDb0I7U0FDNUIsQ0FBQztJQUNOLENBQUM7bUhBbEVRLGtCQUFrQjt1RUFBbEIsa0JBQWtCLFdBQWxCLGtCQUFrQixtQkFGZixNQUFNOztpRkFFVCxrQkFBa0I7Y0FIOUIsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNb2RhbEJ1dHRvbkludGVyZmFjZX0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwubW9kZWwnO1xuaW1wb3J0IHtWaWV3TW9kZX0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3ZpZXdzL3ZpZXcubW9kZWwnO1xuaW1wb3J0IHtOZ2JNb2RhbH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHtSZWNvcmRBY3Rpb25EYXRhLCBSZWNvcmRBY3Rpb25IYW5kbGVyfSBmcm9tICcuLi9yZWNvcmQuYWN0aW9uJztcbmltcG9ydCB7TWVzc2FnZU1vZGFsQ29tcG9uZW50fSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL21vZGFsL2NvbXBvbmVudHMvbWVzc2FnZS1tb2RhbC9tZXNzYWdlLW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQge01vZHVsZU5hdmlnYXRpb259IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL25hdmlnYXRpb24vbW9kdWxlLW5hdmlnYXRpb24vbW9kdWxlLW5hdmlnYXRpb24uc2VydmljZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtSZWNvcmRQYWdpbmF0aW9uU2VydmljZX0gZnJvbSBcIi4uLy4uL3N0b3JlL3JlY29yZC1wYWdpbmF0aW9uL3JlY29yZC1wYWdpbmF0aW9uLnNlcnZpY2VcIjtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBSZWNvcmRDYW5jZWxBY3Rpb24gZXh0ZW5kcyBSZWNvcmRBY3Rpb25IYW5kbGVyIHtcblxuICAgIGtleSA9ICdjYW5jZWwnO1xuICAgIG1vZGVzID0gWydlZGl0JyBhcyBWaWV3TW9kZSwgJ2RldGFpbCcgYXMgVmlld01vZGVdO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBOZ2JNb2RhbCxcbiAgICAgICAgcHJpdmF0ZSBuYXZpZ2F0aW9uOiBNb2R1bGVOYXZpZ2F0aW9uLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIHJlY29yZFBhZ2luYXRpb25TZXJ2aWNlOiBSZWNvcmRQYWdpbmF0aW9uU2VydmljZVxuICAgICkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHJ1bihkYXRhOiBSZWNvcmRBY3Rpb25EYXRhKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKGRhdGEuc3RvcmUucmVjb3JkU3RvcmUuaXNEaXJ0eSgpKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dDb25maXJtYXRpb25Nb2RhbChkYXRhKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FuY2VsKGRhdGEpO1xuICAgIH1cblxuICAgIHNob3VsZERpc3BsYXkoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjYW5jZWwoZGF0YTogUmVjb3JkQWN0aW9uRGF0YSk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IGRhdGEuc3RvcmUucGFyYW1zO1xuICAgICAgICBjb25zdCBtb2R1bGVOYW1lID0gZGF0YS5zdG9yZS5nZXRNb2R1bGVOYW1lKCk7XG4gICAgICAgIGNvbnN0IGlkID0gZGF0YS5zdG9yZS5nZXRSZWNvcmRJZCgpO1xuICAgICAgICBjb25zdCByZWNvcmQgPSBkYXRhLnN0b3JlLmdldEJhc2VSZWNvcmQoKTtcblxuICAgICAgICBjb25zdCBjdXJyZW50VXJsID0gdGhpcy5yb3V0ZXIudXJsO1xuXG4gICAgICAgIGlmIChjdXJyZW50VXJsLmluY2x1ZGVzKCdlZGl0JykpIHtcbiAgICAgICAgICAgIHRoaXMubmF2aWdhdGVCYWNrVG9EZXRhaWwodGhpcy5uYXZpZ2F0aW9uLCB0aGlzLnJvdXRlciwgdGhpcy5yZWNvcmRQYWdpbmF0aW9uU2VydmljZSwgaWQsIG1vZHVsZU5hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZUJhY2sodGhpcy5uYXZpZ2F0aW9uLCBwYXJhbXMsIGlkLCBtb2R1bGVOYW1lLCByZWNvcmQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YS5zdG9yZS5yZWNvcmRTdG9yZS5yZXNldFN0YWdpbmcoKTtcbiAgICAgICAgZGF0YS5zdG9yZS5zZXRNb2RlKCdkZXRhaWwnIGFzIFZpZXdNb2RlKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2hvd0NvbmZpcm1hdGlvbk1vZGFsKGRhdGE6IFJlY29yZEFjdGlvbkRhdGEpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbW9kYWwgPSB0aGlzLm1vZGFsU2VydmljZS5vcGVuKE1lc3NhZ2VNb2RhbENvbXBvbmVudCk7XG5cbiAgICAgICAgbW9kYWwuY29tcG9uZW50SW5zdGFuY2UudGV4dEtleSA9ICdXQVJOX1VOU0FWRURfQ0hBTkdFUyc7XG4gICAgICAgIG1vZGFsLmNvbXBvbmVudEluc3RhbmNlLmJ1dHRvbnMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWxLZXk6ICdMQkxfQ0FOQ0VMJyxcbiAgICAgICAgICAgICAgICBrbGFzczogWydidG4tc2Vjb25kYXJ5J10sXG4gICAgICAgICAgICAgICAgb25DbGljazogYWN0aXZlTW9kYWwgPT4gYWN0aXZlTW9kYWwuZGlzbWlzcygpXG4gICAgICAgICAgICB9IGFzIE1vZGFsQnV0dG9uSW50ZXJmYWNlLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsS2V5OiAnTEJMX1BST0NFRUQnLFxuICAgICAgICAgICAgICAgIGtsYXNzOiBbJ2J0bi1tYWluJ10sXG4gICAgICAgICAgICAgICAgb25DbGljazogYWN0aXZlTW9kYWwgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbmNlbChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlTW9kYWwuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGFzIE1vZGFsQnV0dG9uSW50ZXJmYWNlLFxuICAgICAgICBdO1xuICAgIH1cbn1cbiJdfQ==