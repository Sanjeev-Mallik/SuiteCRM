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
import * as i0 from "@angular/core";
export class LocalStorageService {
    constructor() {
        this.storageKey = 'scrm-session-storage';
        this.stickyStorageKey = 'scrm-sticky-session-storage';
    }
    clear() {
        this.getLocalStorage().removeItem(this.storageKey);
        const sticky = this.getLocalStorage().getItem(this.stickyStorageKey);
        if (sticky) {
            this.getLocalStorage().setItem(this.storageKey, sticky);
        }
    }
    set(key, data, sticky = false) {
        this.store(this.storageKey, key, data);
        if (sticky) {
            this.store(this.stickyStorageKey, key, data);
        }
    }
    store(storageKey, key, data) {
        const storeJson = this.getLocalStorage().getItem(storageKey);
        let store = {};
        if (storeJson) {
            store = JSON.parse(storeJson);
        }
        store[key] = data;
        this.getLocalStorage().setItem(storageKey, JSON.stringify(store));
    }
    get(key) {
        const storeJson = this.getLocalStorage().getItem(this.storageKey);
        let store = {};
        if (storeJson) {
            store = JSON.parse(storeJson);
        }
        return store[key];
    }
    getLocalStorage() {
        return localStorage;
    }
    static { this.ɵfac = function LocalStorageService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LocalStorageService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LocalStorageService, factory: LocalStorageService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LocalStorageService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3NlcnZpY2VzL2xvY2FsLXN0b3JhZ2UvbG9jYWwtc3RvcmFnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDOztBQUt6QyxNQUFNLE9BQU8sbUJBQW1CO0lBSzVCO1FBSFUsZUFBVSxHQUFHLHNCQUFzQixDQUFDO1FBQ3BDLHFCQUFnQixHQUFHLDZCQUE2QixDQUFDO0lBRzNELENBQUM7SUFFRCxLQUFLO1FBQ0QsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUVyRSxJQUFJLE1BQU0sRUFBRSxDQUFDO1lBQ1QsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzVELENBQUM7SUFDTCxDQUFDO0lBRUQsR0FBRyxDQUFDLEdBQVcsRUFBRSxJQUFTLEVBQUUsTUFBTSxHQUFHLEtBQUs7UUFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUV2QyxJQUFJLE1BQU0sRUFBRSxDQUFDO1lBQ1QsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pELENBQUM7SUFDTCxDQUFDO0lBRVMsS0FBSyxDQUFDLFVBQWtCLEVBQUUsR0FBVyxFQUFFLElBQVM7UUFDdEQsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM3RCxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7UUFFZixJQUFJLFNBQVMsRUFBRSxDQUFDO1lBQ1osS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbEMsQ0FBQztRQUVELEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7UUFFbEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRCxHQUFHLENBQUMsR0FBVztRQUNYLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xFLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUVmLElBQUksU0FBUyxFQUFFLENBQUM7WUFDWixLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsQyxDQUFDO1FBRUQsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVTLGVBQWU7UUFDckIsT0FBTyxZQUFZLENBQUM7SUFDeEIsQ0FBQztvSEFuRFEsbUJBQW1CO3VFQUFuQixtQkFBbUIsV0FBbkIsbUJBQW1CLG1CQUZoQixNQUFNOztpRkFFVCxtQkFBbUI7Y0FIL0IsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIExvY2FsU3RvcmFnZVNlcnZpY2Uge1xuXG4gICAgcHJvdGVjdGVkIHN0b3JhZ2VLZXkgPSAnc2NybS1zZXNzaW9uLXN0b3JhZ2UnO1xuICAgIHByb3RlY3RlZCBzdGlja3lTdG9yYWdlS2V5ID0gJ3Njcm0tc3RpY2t5LXNlc3Npb24tc3RvcmFnZSc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBjbGVhcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5nZXRMb2NhbFN0b3JhZ2UoKS5yZW1vdmVJdGVtKHRoaXMuc3RvcmFnZUtleSk7XG4gICAgICAgIGNvbnN0IHN0aWNreSA9IHRoaXMuZ2V0TG9jYWxTdG9yYWdlKCkuZ2V0SXRlbSh0aGlzLnN0aWNreVN0b3JhZ2VLZXkpO1xuXG4gICAgICAgIGlmIChzdGlja3kpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0TG9jYWxTdG9yYWdlKCkuc2V0SXRlbSh0aGlzLnN0b3JhZ2VLZXksIHN0aWNreSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXQoa2V5OiBzdHJpbmcsIGRhdGE6IGFueSwgc3RpY2t5ID0gZmFsc2UpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdG9yZSh0aGlzLnN0b3JhZ2VLZXksIGtleSwgZGF0YSk7XG5cbiAgICAgICAgaWYgKHN0aWNreSkge1xuICAgICAgICAgICAgdGhpcy5zdG9yZSh0aGlzLnN0aWNreVN0b3JhZ2VLZXksIGtleSwgZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc3RvcmUoc3RvcmFnZUtleTogc3RyaW5nLCBrZXk6IHN0cmluZywgZGF0YTogYW55KSB7XG4gICAgICAgIGNvbnN0IHN0b3JlSnNvbiA9IHRoaXMuZ2V0TG9jYWxTdG9yYWdlKCkuZ2V0SXRlbShzdG9yYWdlS2V5KTtcbiAgICAgICAgbGV0IHN0b3JlID0ge307XG5cbiAgICAgICAgaWYgKHN0b3JlSnNvbikge1xuICAgICAgICAgICAgc3RvcmUgPSBKU09OLnBhcnNlKHN0b3JlSnNvbik7XG4gICAgICAgIH1cblxuICAgICAgICBzdG9yZVtrZXldID0gZGF0YTtcblxuICAgICAgICB0aGlzLmdldExvY2FsU3RvcmFnZSgpLnNldEl0ZW0oc3RvcmFnZUtleSwgSlNPTi5zdHJpbmdpZnkoc3RvcmUpKTtcbiAgICB9XG5cbiAgICBnZXQoa2V5OiBzdHJpbmcpOiBhbnkge1xuICAgICAgICBjb25zdCBzdG9yZUpzb24gPSB0aGlzLmdldExvY2FsU3RvcmFnZSgpLmdldEl0ZW0odGhpcy5zdG9yYWdlS2V5KTtcbiAgICAgICAgbGV0IHN0b3JlID0ge307XG5cbiAgICAgICAgaWYgKHN0b3JlSnNvbikge1xuICAgICAgICAgICAgc3RvcmUgPSBKU09OLnBhcnNlKHN0b3JlSnNvbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RvcmVba2V5XTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxTdG9yYWdlKCk6IFN0b3JhZ2Uge1xuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlO1xuICAgIH1cbn1cbiJdfQ==