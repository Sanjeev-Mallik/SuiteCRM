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
import { of } from 'rxjs';
import { catchError, take, tap } from 'rxjs/operators';
import { ProcessService } from '../../process.service';
import { AppStateStore } from '../../../../store/app-state/app-state.store';
import { MessageService } from '../../../message/message.service';
import { RedirectAsyncAction } from './actions/redirect/redirect.async-action';
import { ExportAsyncAction } from './actions/export/export.async-action';
import { NoopAsyncAction } from './actions/noop/noop.async-action';
import { ChangelogAsyncAction } from './actions/changelog/changelog.async-action';
import * as i0 from "@angular/core";
import * as i1 from "../../process.service";
import * as i2 from "../../../../store/app-state/app-state.store";
import * as i3 from "../../../message/message.service";
import * as i4 from "./actions/redirect/redirect.async-action";
import * as i5 from "./actions/export/export.async-action";
import * as i6 from "./actions/noop/noop.async-action";
import * as i7 from "./actions/changelog/changelog.async-action";
export class AsyncActionService {
    constructor(processService, appStateStore, message, redirectAction, exportAction, noopAction, changelogAction) {
        this.processService = processService;
        this.appStateStore = appStateStore;
        this.message = message;
        this.redirectAction = redirectAction;
        this.exportAction = exportAction;
        this.noopAction = noopAction;
        this.changelogAction = changelogAction;
        this.actions = {};
        this.registerHandler(redirectAction);
        this.registerHandler(exportAction);
        this.registerHandler(noopAction);
        this.registerHandler(changelogAction);
    }
    registerHandler(handler) {
        this.actions[handler.key] = handler;
    }
    /**
     * Send action request
     *
     * @param {string} actionName to submit
     * @param {string} data to send
     * @param {string} presetHandlerKey to use
     * @param params
     * @returns {object} Observable<Process>
     */
    run(actionName, data, presetHandlerKey = null, params = null) {
        const options = {
            ...data
        };
        this.appStateStore.updateLoading(actionName, true);
        return this.processService
            .submit(actionName, options)
            .pipe(take(1), tap((process) => {
            this.appStateStore.updateLoading(actionName, false);
            let handler = 'addSuccessMessageByKey';
            if (process.status === 'error') {
                handler = 'addDangerMessageByKey';
            }
            if (process.messages) {
                process.messages.forEach(message => {
                    if (!!message) {
                        this.message[handler](message);
                    }
                });
            }
            if (process.status === 'error') {
                return;
            }
            const actionHandlerKey = presetHandlerKey || (process.data && process.data.handler) || null;
            if (!actionHandlerKey) {
                return;
            }
            const actionHandler = this.actions[actionHandlerKey];
            if (!actionHandler) {
                this.message.addDangerMessageByKey('LBL_MISSING_HANDLER');
                return;
            }
            actionHandler.run(process.data.params);
        }), catchError((err) => {
            const errorMessage = err?.message ?? '';
            if (errorMessage === 'Access Denied.') {
                this.appStateStore.updateLoading(actionName, false);
                return of(null);
            }
            this.appStateStore.updateLoading(actionName, false);
            if (params?.errorMessageLabel ?? false) {
                this.message.addDangerMessage(params?.errorMessageLabel);
                return of(null);
            }
            if (params?.errorMessageLabelKey ?? false) {
                this.message.addDangerMessageByKey(params?.errorMessageLabelKey, 'Unexpected error when calling action, please contact your system administrator.');
                return of(null);
            }
            this.message.addDangerMessageByKey('LBL_ACTION_ERROR', 'Unexpected error when calling action, please contact your system administrator.');
            return of(null);
        }));
    }
    static { this.ɵfac = function AsyncActionService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AsyncActionService)(i0.ɵɵinject(i1.ProcessService), i0.ɵɵinject(i2.AppStateStore), i0.ɵɵinject(i3.MessageService), i0.ɵɵinject(i4.RedirectAsyncAction), i0.ɵɵinject(i5.ExportAsyncAction), i0.ɵɵinject(i6.NoopAsyncAction), i0.ɵɵinject(i7.ChangelogAsyncAction)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AsyncActionService, factory: AsyncActionService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AsyncActionService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.ProcessService }, { type: i2.AppStateStore }, { type: i3.MessageService }, { type: i4.RedirectAsyncAction }, { type: i5.ExportAsyncAction }, { type: i6.NoopAsyncAction }, { type: i7.ChangelogAsyncAction }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN5bmMtYWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3NlcnZpY2VzL3Byb2Nlc3MvcHJvY2Vzc2VzL2FzeW5jLWFjdGlvbi9hc3luYy1hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFhLEVBQUUsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUNwQyxPQUFPLEVBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQVUsY0FBYyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDOUQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQzFFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUtoRSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSwwQ0FBMEMsQ0FBQztBQUM3RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sNENBQTRDLENBQUM7Ozs7Ozs7OztBQW1CaEYsTUFBTSxPQUFPLGtCQUFrQjtJQUkzQixZQUNZLGNBQThCLEVBQzlCLGFBQTRCLEVBQzFCLE9BQXVCLEVBQ3ZCLGNBQW1DLEVBQ25DLFlBQStCLEVBQy9CLFVBQTJCLEVBQzNCLGVBQXFDO1FBTnZDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUMxQixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixtQkFBYyxHQUFkLGNB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QztZQUNwQixDQUFDO1lBRUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBRXBELElBQUksTUFBTSxFQUFFLGlCQUFpQixJQUFJLEtBQUssRUFBRSxDQUFDO2dCQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO2dCQUN6RCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQixDQUFDO1lBRUQsSUFBSSxNQUFNLEVBQUUsb0JBQW9CLElBQUksS0FBSyxFQUFFLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsTUFBTSxFQUFFLG9CQUFvQixFQUFFLGlGQUFpRixDQUFDLENBQUM7Z0JBQ3BKLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BCLENBQUM7WUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLGtCQUFrQixFQUFHLGlGQUFpRixDQUFDLENBQUM7WUFFM0ksT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQ0wsQ0FBQztJQUNWLENBQUM7bUhBeEdRLGtCQUFrQjt1RUFBbEIsa0JBQWtCLFdBQWxCLGtCQUFrQixtQkFGZixNQUFNOztpRkFFVCxrQkFBa0I7Y0FIOUIsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBvZn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2NhdGNoRXJyb3IsIHRha2UsIHRhcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtQcm9jZXNzLCBQcm9jZXNzU2VydmljZX0gZnJvbSAnLi4vLi4vcHJvY2Vzcy5zZXJ2aWNlJztcbmltcG9ydCB7QXBwU3RhdGVTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvYXBwLXN0YXRlL2FwcC1zdGF0ZS5zdG9yZSc7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9tZXNzYWdlL21lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQge0FzeW5jQWN0aW9uSGFuZGxlcn0gZnJvbSAnLi9hc3luYy1hY3Rpb24ubW9kZWwnO1xuaW1wb3J0IHtSZWNvcmR9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9yZWNvcmQvcmVjb3JkLm1vZGVsJztcbmltcG9ydCB7U2VhcmNoQ3JpdGVyaWF9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi92aWV3cy9saXN0L3NlYXJjaC1jcml0ZXJpYS5tb2RlbCc7XG5pbXBvcnQge1NvcnRpbmdTZWxlY3Rpb259IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi92aWV3cy9saXN0L2xpc3QtbmF2aWdhdGlvbi5tb2RlbCc7XG5pbXBvcnQge1JlZGlyZWN0QXN5bmNBY3Rpb259IGZyb20gJy4vYWN0aW9ucy9yZWRpcmVjdC9yZWRpcmVjdC5hc3luYy1hY3Rpb24nO1xuaW1wb3J0IHtFeHBvcnRBc3luY0FjdGlvbn0gZnJvbSAnLi9hY3Rpb25zL2V4cG9ydC9leHBvcnQuYXN5bmMtYWN0aW9uJztcbmltcG9ydCB7Tm9vcEFzeW5jQWN0aW9ufSBmcm9tICcuL2FjdGlvbnMvbm9vcC9ub29wLmFzeW5jLWFjdGlvbic7XG5pbXBvcnQge0NoYW5nZWxvZ0FzeW5jQWN0aW9ufSBmcm9tICcuL2FjdGlvbnMvY2hhbmdlbG9nL2NoYW5nZWxvZy5hc3luYy1hY3Rpb24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFzeW5jQWN0aW9uSW5wdXQge1xuICAgIGFjdGlvbj86IHN0cmluZztcbiAgICBtb2R1bGU/OiBzdHJpbmc7XG4gICAgY3JpdGVyaWE/OiBTZWFyY2hDcml0ZXJpYTtcbiAgICBzb3J0PzogU29ydGluZ1NlbGVjdGlvbjtcbiAgICBpZHM/OiBzdHJpbmdbXTtcbiAgICBpZD86IHN0cmluZztcbiAgICBwYXlsb2FkPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcbiAgICBtb2RhbFJlY29yZD86IFJlY29yZDtcbiAgICByZWNvcmQ/OiBSZWNvcmQ7XG5cbiAgICBba2V5OiBzdHJpbmddOiBhbnlcbn1cblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQXN5bmNBY3Rpb25TZXJ2aWNlIHtcblxuICAgIGFjdGlvbnM6IHsgW2tleTogc3RyaW5nXTogQXN5bmNBY3Rpb25IYW5kbGVyIH0gPSB7fTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHByb2Nlc3NTZXJ2aWNlOiBQcm9jZXNzU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBhcHBTdGF0ZVN0b3JlOiBBcHBTdGF0ZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbWVzc2FnZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCByZWRpcmVjdEFjdGlvbjogUmVkaXJlY3RBc3luY0FjdGlvbixcbiAgICAgICAgcHJvdGVjdGVkIGV4cG9ydEFjdGlvbjogRXhwb3J0QXN5bmNBY3Rpb24sXG4gICAgICAgIHByb3RlY3RlZCBub29wQWN0aW9uOiBOb29wQXN5bmNBY3Rpb24sXG4gICAgICAgIHByb3RlY3RlZCBjaGFuZ2Vsb2dBY3Rpb246IENoYW5nZWxvZ0FzeW5jQWN0aW9uXG4gICAgKSB7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJIYW5kbGVyKHJlZGlyZWN0QWN0aW9uKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckhhbmRsZXIoZXhwb3J0QWN0aW9uKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckhhbmRsZXIobm9vcEFjdGlvbik7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJIYW5kbGVyKGNoYW5nZWxvZ0FjdGlvbik7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVySGFuZGxlcihoYW5kbGVyOiBBc3luY0FjdGlvbkhhbmRsZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hY3Rpb25zW2hhbmRsZXIua2V5XSA9IGhhbmRsZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VuZCBhY3Rpb24gcmVxdWVzdFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbk5hbWUgdG8gc3VibWl0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGEgdG8gc2VuZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwcmVzZXRIYW5kbGVyS2V5IHRvIHVzZVxuICAgICAqIEBwYXJhbSBwYXJhbXNcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBPYnNlcnZhYmxlPFByb2Nlc3M+XG4gICAgICovXG4gICAgcHVibGljIHJ1bihhY3Rpb25OYW1lOiBzdHJpbmcsIGRhdGE6IEFzeW5jQWN0aW9uSW5wdXQsIHByZXNldEhhbmRsZXJLZXk6IHN0cmluZyA9IG51bGwsIHBhcmFtczogYW55ID0gbnVsbCk6IE9ic2VydmFibGU8UHJvY2Vzcz4ge1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgLi4uZGF0YVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuYXBwU3RhdGVTdG9yZS51cGRhdGVMb2FkaW5nKGFjdGlvbk5hbWUsIHRydWUpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NTZXJ2aWNlXG4gICAgICAgICAgICAuc3VibWl0KGFjdGlvbk5hbWUsIG9wdGlvbnMpXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICB0YWtlKDEpLFxuICAgICAgICAgICAgICAgIHRhcCgocHJvY2VzczogUHJvY2VzcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcFN0YXRlU3RvcmUudXBkYXRlTG9hZGluZyhhY3Rpb25OYW1lLCBmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGhhbmRsZXIgPSAnYWRkU3VjY2Vzc01lc3NhZ2VCeUtleSc7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLnN0YXR1cyA9PT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlciA9ICdhZGREYW5nZXJNZXNzYWdlQnlLZXknO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MubWVzc2FnZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3MubWVzc2FnZXMuZm9yRWFjaChtZXNzYWdlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZighIW1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlW2hhbmRsZXJdKG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3Muc3RhdHVzID09PSAnZXJyb3InKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhY3Rpb25IYW5kbGVyS2V5ID0gcHJlc2V0SGFuZGxlcktleSB8fCAocHJvY2Vzcy5kYXRhICYmIHByb2Nlc3MuZGF0YS5oYW5kbGVyKSB8fCBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghYWN0aW9uSGFuZGxlcktleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWN0aW9uSGFuZGxlcjogQXN5bmNBY3Rpb25IYW5kbGVyID0gdGhpcy5hY3Rpb25zW2FjdGlvbkhhbmRsZXJLZXldO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghYWN0aW9uSGFuZGxlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlLmFkZERhbmdlck1lc3NhZ2VCeUtleSgnTEJMX01JU1NJTkdfSEFORExFUicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uSGFuZGxlci5ydW4ocHJvY2Vzcy5kYXRhLnBhcmFtcyk7XG5cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBjYXRjaEVycm9yKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyPy5tZXNzYWdlID8/ICcnXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yTWVzc2FnZSA9PT0gJ0FjY2VzcyBEZW5pZWQuJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBTdGF0ZVN0b3JlLnVwZGF0ZUxvYWRpbmcoYWN0aW9uTmFtZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBTdGF0ZVN0b3JlLnVwZGF0ZUxvYWRpbmcoYWN0aW9uTmFtZSwgZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbXM/LmVycm9yTWVzc2FnZUxhYmVsID8/IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UuYWRkRGFuZ2VyTWVzc2FnZShwYXJhbXM/LmVycm9yTWVzc2FnZUxhYmVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvZihudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbXM/LmVycm9yTWVzc2FnZUxhYmVsS2V5ID8/IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UuYWRkRGFuZ2VyTWVzc2FnZUJ5S2V5KHBhcmFtcz8uZXJyb3JNZXNzYWdlTGFiZWxLZXksICdVbmV4cGVjdGVkIGVycm9yIHdoZW4gY2FsbGluZyBhY3Rpb24sIHBsZWFzZSBjb250YWN0IHlvdXIgc3lzdGVtIGFkbWluaXN0cmF0b3IuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2YobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UuYWRkRGFuZ2VyTWVzc2FnZUJ5S2V5KCdMQkxfQUNUSU9OX0VSUk9SJywgICdVbmV4cGVjdGVkIGVycm9yIHdoZW4gY2FsbGluZyBhY3Rpb24sIHBsZWFzZSBjb250YWN0IHlvdXIgc3lzdGVtIGFkbWluaXN0cmF0b3IuJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKG51bGwpO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=