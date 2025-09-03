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
import { Router } from '@angular/router';
import { ModuleNameMapper } from '../../../../services/navigation/module-name-mapper/module-name-mapper.service';
import { RecordActionHandler } from '../record.action';
import { ActionNameMapper } from '../../../../services/navigation/action-name-mapper/action-name-mapper.service';
import { MessageModalComponent } from '../../../../components/modal/components/message-modal/message-modal.component';
import * as i0 from "@angular/core";
import * as i1 from "@ng-bootstrap/ng-bootstrap";
import * as i2 from "@angular/router";
import * as i3 from "../../../../services/navigation/module-name-mapper/module-name-mapper.service";
import * as i4 from "../../../../services/navigation/action-name-mapper/action-name-mapper.service";
export class CancelCreateAction extends RecordActionHandler {
    constructor(modalService, router, moduleNameMapper, actionNameMapper) {
        super();
        this.modalService = modalService;
        this.router = router;
        this.moduleNameMapper = moduleNameMapper;
        this.actionNameMapper = actionNameMapper;
        this.key = 'cancelCreate';
        this.modes = ['create'];
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
        const store = data.store;
        let returnAction = store.params.return_action || '';
        let returnId = store.params.return_id || '';
        let returnModule = store.getModuleName();
        if (store.params.return_module) {
            returnModule = this.moduleNameMapper.toFrontend(store.params.return_module);
        }
        if (store.params.isConvert) {
            returnModule = this.moduleNameMapper.toFrontend(store.params.convertModule);
            returnId = store.params.originalId;
        }
        let route = '/' + returnModule;
        if (returnAction) {
            returnAction = this.actionNameMapper.toFrontend(returnAction);
            if (returnAction !== 'record' || returnId) {
                route += '/' + returnAction;
            }
        }
        if (returnId) {
            route += '/' + returnId;
        }
        this.router.navigate([route]).then();
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
                labelKey: 'LBL_OK',
                klass: ['btn-main'],
                onClick: activeModal => {
                    this.cancel(data);
                    activeModal.close();
                }
            },
        ];
    }
    static { this.ɵfac = function CancelCreateAction_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CancelCreateAction)(i0.ɵɵinject(i1.NgbModal), i0.ɵɵinject(i2.Router), i0.ɵɵinject(i3.ModuleNameMapper), i0.ɵɵinject(i4.ActionNameMapper)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CancelCreateAction, factory: CancelCreateAction.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CancelCreateAction, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.NgbModal }, { type: i2.Router }, { type: i3.ModuleNameMapper }, { type: i4.ActionNameMapper }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuY2VsLWNyZWF0ZS5hY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvcmVjb3JkL2FjdGlvbnMvY2FuY2VsLWNyZWF0ZS9jYW5jZWwtY3JlYXRlLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUd6QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDcEQsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLCtFQUErRSxDQUFDO0FBQy9HLE9BQU8sRUFBbUIsbUJBQW1CLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUN2RSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSwrRUFBK0UsQ0FBQztBQUMvRyxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSwrRUFBK0UsQ0FBQzs7Ozs7O0FBS3BILE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxtQkFBbUI7SUFLdkQsWUFDWSxZQUFzQixFQUNwQixNQUFjLEVBQ2QsZ0JBQWtDLEVBQ2xDLGdCQUFrQztRQUU1QyxLQUFLLEVBQUUsQ0FBQztRQUxBLGlCQUFZLEdBQVosWUFBWSxDQUFVO1FBQ3BCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFQaEQsUUFBRyxHQUFHLGNBQWMsQ0FBQztRQUNyQixVQUFLLEdBQUcsQ0FBQyxRQUFvQixDQUFDLENBQUM7SUFTL0IsQ0FBQztJQUVELEdBQUcsQ0FBQyxJQUFzQjtRQUV0QixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMs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aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNb2RhbEJ1dHRvbkludGVyZmFjZX0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwubW9kZWwnO1xuaW1wb3J0IHtWaWV3TW9kZX0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3ZpZXdzL3ZpZXcubW9kZWwnO1xuaW1wb3J0IHtOZ2JNb2RhbH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge01vZHVsZU5hbWVNYXBwZXJ9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL25hdmlnYXRpb24vbW9kdWxlLW5hbWUtbWFwcGVyL21vZHVsZS1uYW1lLW1hcHBlci5zZXJ2aWNlJztcbmltcG9ydCB7UmVjb3JkQWN0aW9uRGF0YSwgUmVjb3JkQWN0aW9uSGFuZGxlcn0gZnJvbSAnLi4vcmVjb3JkLmFjdGlvbic7XG5pbXBvcnQge0FjdGlvbk5hbWVNYXBwZXJ9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL25hdmlnYXRpb24vYWN0aW9uLW5hbWUtbWFwcGVyL2FjdGlvbi1uYW1lLW1hcHBlci5zZXJ2aWNlJztcbmltcG9ydCB7TWVzc2FnZU1vZGFsQ29tcG9uZW50fSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL21vZGFsL2NvbXBvbmVudHMvbWVzc2FnZS1tb2RhbC9tZXNzYWdlLW1vZGFsLmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ2FuY2VsQ3JlYXRlQWN0aW9uIGV4dGVuZHMgUmVjb3JkQWN0aW9uSGFuZGxlciB7XG5cbiAgICBrZXkgPSAnY2FuY2VsQ3JlYXRlJztcbiAgICBtb2RlcyA9IFsnY3JlYXRlJyBhcyBWaWV3TW9kZV07XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE5nYk1vZGFsLFxuICAgICAgICBwcm90ZWN0ZWQgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByb3RlY3RlZCBtb2R1bGVOYW1lTWFwcGVyOiBNb2R1bGVOYW1lTWFwcGVyLFxuICAgICAgICBwcm90ZWN0ZWQgYWN0aW9uTmFtZU1hcHBlcjogQWN0aW9uTmFtZU1hcHBlclxuICAgICkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHJ1bihkYXRhOiBSZWNvcmRBY3Rpb25EYXRhKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKGRhdGEuc3RvcmUucmVjb3JkU3RvcmUuaXNEaXJ0eSgpKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dDb25maXJtYXRpb25Nb2RhbChkYXRhKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FuY2VsKGRhdGEpO1xuICAgIH1cblxuICAgIHNob3VsZERpc3BsYXkoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjYW5jZWwoZGF0YTogUmVjb3JkQWN0aW9uRGF0YSk6IHZvaWQge1xuICAgICAgICBjb25zdCBzdG9yZSA9IGRhdGEuc3RvcmU7XG5cbiAgICAgICAgbGV0IHJldHVybkFjdGlvbiA9IHN0b3JlLnBhcmFtcy5yZXR1cm5fYWN0aW9uIHx8ICcnO1xuICAgICAgICBsZXQgcmV0dXJuSWQgPSBzdG9yZS5wYXJhbXMucmV0dXJuX2lkIHx8ICcnO1xuICAgICAgICBsZXQgcmV0dXJuTW9kdWxlID0gc3RvcmUuZ2V0TW9kdWxlTmFtZSgpO1xuXG4gICAgICAgIGlmIChzdG9yZS5wYXJhbXMucmV0dXJuX21vZHVsZSkge1xuICAgICAgICAgICAgcmV0dXJuTW9kdWxlID0gdGhpcy5tb2R1bGVOYW1lTWFwcGVyLnRvRnJvbnRlbmQoc3RvcmUucGFyYW1zLnJldHVybl9tb2R1bGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0b3JlLnBhcmFtcy5pc0NvbnZlcnQpIHtcbiAgICAgICAgICAgIHJldHVybk1vZHVsZSA9IHRoaXMubW9kdWxlTmFtZU1hcHBlci50b0Zyb250ZW5kKHN0b3JlLnBhcmFtcy5jb252ZXJ0TW9kdWxlKTtcbiAgICAgICAgICAgIHJldHVybklkID0gc3RvcmUucGFyYW1zLm9yaWdpbmFsSWQ7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcm91dGUgPSAnLycgKyByZXR1cm5Nb2R1bGU7XG5cbiAgICAgICAgaWYgKHJldHVybkFjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuQWN0aW9uID0gdGhpcy5hY3Rpb25OYW1lTWFwcGVyLnRvRnJvbnRlbmQocmV0dXJuQWN0aW9uKTtcblxuICAgICAgICAgICAgaWYgKHJldHVybkFjdGlvbiAhPT0gJ3JlY29yZCcgfHwgcmV0dXJuSWQpIHtcbiAgICAgICAgICAgICAgICByb3V0ZSArPSAnLycgKyByZXR1cm5BY3Rpb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmV0dXJuSWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9ICcvJyArIHJldHVybklkO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3JvdXRlXSkudGhlbigpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzaG93Q29uZmlybWF0aW9uTW9kYWwoZGF0YTogUmVjb3JkQWN0aW9uRGF0YSk6IHZvaWQge1xuICAgICAgICBjb25zdCBtb2RhbCA9IHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oTWVzc2FnZU1vZGFsQ29tcG9uZW50KTtcblxuICAgICAgICBtb2RhbC5jb21wb25lbnRJbnN0YW5jZS50ZXh0S2V5ID0gJ1dBUk5fVU5TQVZFRF9DSEFOR0VTJztcbiAgICAgICAgbW9kYWwuY29tcG9uZW50SW5zdGFuY2UuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsYWJlbEtleTogJ0xCTF9DQU5DRUwnLFxuICAgICAgICAgICAgICAgIGtsYXNzOiBbJ2J0bi1zZWNvbmRhcnknXSxcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiBhY3RpdmVNb2RhbCA9PiBhY3RpdmVNb2RhbC5kaXNtaXNzKClcbiAgICAgICAgICAgIH0gYXMgTW9kYWxCdXR0b25JbnRlcmZhY2UsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWxLZXk6ICdMQkxfT0snLFxuICAgICAgICAgICAgICAgIGtsYXNzOiBbJ2J0bi1tYWluJ10sXG4gICAgICAgICAgICAgICAgb25DbGljazogYWN0aXZlTW9kYWwgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbmNlbChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlTW9kYWwuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGFzIE1vZGFsQnV0dG9uSW50ZXJmYWNlLFxuICAgICAgICBdO1xuICAgIH1cbn1cbiJdfQ==