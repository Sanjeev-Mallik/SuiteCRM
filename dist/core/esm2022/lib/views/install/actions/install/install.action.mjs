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
import { take } from 'rxjs/operators';
import { InstallViewActionHandler } from '../install-view.action';
import { MessageService } from '../../../../services/message/message.service';
import { AsyncActionService } from '../../../../services/process/processes/async-action/async-action';
import { Router } from '@angular/router';
import { InstallErrorModalComponent } from '../../../../components/install-error-modal/install-error-modal.component';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { StateManager } from '../../../../store/state-manager';
import { LocalStorageService } from '../../../../services/local-storage/local-storage.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/message/message.service";
import * as i2 from "../../../../services/process/processes/async-action/async-action";
import * as i3 from "@angular/router";
import * as i4 from "@ng-bootstrap/ng-bootstrap";
import * as i5 from "../../../../store/state-manager";
import * as i6 from "../../../../services/local-storage/local-storage.service";
export class InstallAction extends InstallViewActionHandler {
    constructor(message, asyncActionService, router, modalService, state, localStorage) {
        super();
        this.message = message;
        this.asyncActionService = asyncActionService;
        this.router = router;
        this.modalService = modalService;
        this.state = state;
        this.localStorage = localStorage;
        this.key = 'install';
        this.modes = ['edit'];
    }
    run(data) {
        data.store.recordStore.validate().pipe(take(1)).subscribe(valid => {
            if (valid) {
                const stagingRecord = data.store.recordStore.getStaging();
                this.runInstall(stagingRecord);
                return;
            }
            this.message.addWarningMessageByKey('LBL_VALIDATION_ERRORS');
        });
    }
    shouldDisplay() {
        return true;
    }
    runInstall(stagingRecord) {
        const actionName = `suitecrm-app-${this.key}`;
        this.message.removeMessages();
        const asyncData = {
            action: actionName,
            module: stagingRecord.module,
            id: stagingRecord.id,
            payload: stagingRecord.formGroup.value
        };
        this.asyncActionService.run(actionName, asyncData, null, {
            errorMessageLabel: 'An error occurred while installing SuiteCRM. Please check the \'/logs/install.log\'.'
        }).pipe(take(1)).subscribe((process) => {
            if (process.data.statusCode === 3) {
                // system validation pre-check failed; display errors modal
                this.openErrorModalDialog(process.data.errors);
            }
            // redirect to /, if request is successful
            if (process.data.statusCode === 0) {
                this.state.clear();
                this.localStorage.clear();
                this.router.navigate(['/'], {}).then();
            }
        });
    }
    openErrorModalDialog(errors) {
        const modalRef = this.modalService.open(InstallErrorModalComponent, {
            ariaLabelledBy: 'modal-basic-title',
            centered: true,
            size: 'lg',
            windowClass: 'custom-modal',
            modalDialogClass: 'custom-modal'
        });
        modalRef.componentInstance.errors = errors;
    }
    static { this.ɵfac = function InstallAction_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || InstallAction)(i0.ɵɵinject(i1.MessageService), i0.ɵɵinject(i2.AsyncActionService), i0.ɵɵinject(i3.Router), i0.ɵɵinject(i4.NgbModal), i0.ɵɵinject(i5.StateManager), i0.ɵɵinject(i6.LocalStorageService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: InstallAction, factory: InstallAction.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InstallAction, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.MessageService }, { type: i2.AsyncActionService }, { type: i3.Router }, { type: i4.NgbModal }, { type: i5.StateManager }, { type: i6.LocalStorageService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFsbC5hY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvaW5zdGFsbC9hY3Rpb25zL2luc3RhbGwvaW5zdGFsbC5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFHekMsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3BDLE9BQU8sRUFBd0Isd0JBQXdCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RixPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sOENBQThDLENBQUM7QUFDNUUsT0FBTyxFQUFtQixrQkFBa0IsRUFBQyxNQUFNLGtFQUFrRSxDQUFDO0FBRXRILE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN2QyxPQUFPLEVBQUMsMEJBQTBCLEVBQUMsTUFBTSwwRUFBMEUsQ0FBQztBQUNwSCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDcEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQzdELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLDBEQUEwRCxDQUFDOzs7Ozs7OztBQUs3RixNQUFNLE9BQU8sYUFBYyxTQUFRLHdCQUF3QjtJQUt2RCxZQUNjLE9BQXVCLEVBQ3ZCLGtCQUFzQyxFQUN0QyxNQUFjLEVBQ2QsWUFBc0IsRUFDdEIsS0FBbUIsRUFDbkIsWUFBaUM7UUFFM0MsS0FBSyxFQUFFLENBQUM7UUFQRSxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxpQkFBWSxHQUFaLFlBQVks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c0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSZWNvcmR9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9yZWNvcmQvcmVjb3JkLm1vZGVsJztcbmltcG9ydCB7Vmlld01vZGV9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi92aWV3cy92aWV3Lm1vZGVsJztcbmltcG9ydCB7dGFrZX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtJbnN0YWxsVmlld0FjdGlvbkRhdGEsIEluc3RhbGxWaWV3QWN0aW9uSGFuZGxlcn0gZnJvbSAnLi4vaW5zdGFsbC12aWV3LmFjdGlvbic7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9tZXNzYWdlL21lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQge0FzeW5jQWN0aW9uSW5wdXQsIEFzeW5jQWN0aW9uU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvcHJvY2Vzcy9wcm9jZXNzZXMvYXN5bmMtYWN0aW9uL2FzeW5jLWFjdGlvbic7XG5pbXBvcnQge1Byb2Nlc3N9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL3Byb2Nlc3MvcHJvY2Vzcy5zZXJ2aWNlJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtJbnN0YWxsRXJyb3JNb2RhbENvbXBvbmVudH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9pbnN0YWxsLWVycm9yLW1vZGFsL2luc3RhbGwtZXJyb3ItbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7TmdiTW9kYWx9IGZyb20gXCJAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcFwiO1xuaW1wb3J0IHtTdGF0ZU1hbmFnZXJ9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3N0YXRlLW1hbmFnZXInO1xuaW1wb3J0IHtMb2NhbFN0b3JhZ2VTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9sb2NhbC1zdG9yYWdlL2xvY2FsLXN0b3JhZ2Uuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgSW5zdGFsbEFjdGlvbiBleHRlbmRzIEluc3RhbGxWaWV3QWN0aW9uSGFuZGxlciB7XG5cbiAgICBrZXkgPSAnaW5zdGFsbCc7XG4gICAgbW9kZXMgPSBbJ2VkaXQnIGFzIFZpZXdNb2RlXTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgbWVzc2FnZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBhc3luY0FjdGlvblNlcnZpY2U6IEFzeW5jQWN0aW9uU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwcm90ZWN0ZWQgbW9kYWxTZXJ2aWNlOiBOZ2JNb2RhbCxcbiAgICAgICAgcHJvdGVjdGVkIHN0YXRlOiBTdGF0ZU1hbmFnZXIsXG4gICAgICAgIHByb3RlY3RlZCBsb2NhbFN0b3JhZ2U6IExvY2FsU3RvcmFnZVNlcnZpY2VcbiAgICApIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBydW4oZGF0YTogSW5zdGFsbFZpZXdBY3Rpb25EYXRhKTogdm9pZCB7XG4gICAgICAgIGRhdGEuc3RvcmUucmVjb3JkU3RvcmUudmFsaWRhdGUoKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSh2YWxpZCA9PiB7XG4gICAgICAgICAgICBpZiAodmFsaWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFnaW5nUmVjb3JkID0gZGF0YS5zdG9yZS5yZWNvcmRTdG9yZS5nZXRTdGFnaW5nKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ydW5JbnN0YWxsKHN0YWdpbmdSZWNvcmQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlLmFkZFdhcm5pbmdNZXNzYWdlQnlLZXkoJ0xCTF9WQUxJREFUSU9OX0VSUk9SUycpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaG91bGREaXNwbGF5KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBydW5JbnN0YWxsKHN0YWdpbmdSZWNvcmQ6IFJlY29yZCk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IGFjdGlvbk5hbWUgPSBgc3VpdGVjcm0tYXBwLSR7dGhpcy5rZXl9YDtcblxuICAgICAgICB0aGlzLm1lc3NhZ2UucmVtb3ZlTWVzc2FnZXMoKTtcblxuICAgICAgICBjb25zdCBhc3luY0RhdGEgPSB7XG4gICAgICAgICAgICBhY3Rpb246IGFjdGlvbk5hbWUsXG4gICAgICAgICAgICBtb2R1bGU6IHN0YWdpbmdSZWNvcmQubW9kdWxlLFxuICAgICAgICAgICAgaWQ6IHN0YWdpbmdSZWNvcmQuaWQsXG4gICAgICAgICAgICBwYXlsb2FkOiBzdGFnaW5nUmVjb3JkLmZvcm1Hcm91cC52YWx1ZVxuICAgICAgICB9IGFzIEFzeW5jQWN0aW9uSW5wdXQ7XG5cbiAgICAgICAgdGhpcy5hc3luY0FjdGlvblNlcnZpY2UucnVuKFxuICAgICAgICAgICAgYWN0aW9uTmFtZSxcbiAgICAgICAgICAgIGFzeW5jRGF0YSxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlTGFiZWw6ICdBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBpbnN0YWxsaW5nIFN1aXRlQ1JNLiBQbGVhc2UgY2hlY2sgdGhlIFxcJy9sb2dzL2luc3RhbGwubG9nXFwnLidcbiAgICAgICAgICAgIH1cbiAgICAgICAgKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgocHJvY2VzczogUHJvY2VzcykgPT4ge1xuXG4gICAgICAgICAgICBpZihwcm9jZXNzLmRhdGEuc3RhdHVzQ29kZSA9PT0gMykge1xuICAgICAgICAgICAgICAgIC8vIHN5c3RlbSB2YWxpZGF0aW9uIHByZS1jaGVjayBmYWlsZWQ7IGRpc3BsYXkgZXJyb3JzIG1vZGFsXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuRXJyb3JNb2RhbERpYWxvZyhwcm9jZXNzLmRhdGEuZXJyb3JzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gcmVkaXJlY3QgdG8gLywgaWYgcmVxdWVzdCBpcyBzdWNjZXNzZnVsXG4gICAgICAgICAgICBpZihwcm9jZXNzLmRhdGEuc3RhdHVzQ29kZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLyddLCB7fSkudGhlbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvcGVuRXJyb3JNb2RhbERpYWxvZyhlcnJvcnM6IFtdKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgbW9kYWxSZWYgPSB0aGlzLm1vZGFsU2VydmljZS5vcGVuKEluc3RhbGxFcnJvck1vZGFsQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBhcmlhTGFiZWxsZWRCeTogJ21vZGFsLWJhc2ljLXRpdGxlJyxcbiAgICAgICAgICAgIGNlbnRlcmVkOiB0cnVlLFxuICAgICAgICAgICAgc2l6ZTogJ2xnJyxcbiAgICAgICAgICAgIHdpbmRvd0NsYXNzOiAnY3VzdG9tLW1vZGFsJyxcbiAgICAgICAgICAgIG1vZGFsRGlhbG9nQ2xhc3M6ICdjdXN0b20tbW9kYWwnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1vZGFsUmVmLmNvbXBvbmVudEluc3RhbmNlLmVycm9ycyA9IGVycm9ycztcbiAgICB9XG5cbn1cbiJdfQ==