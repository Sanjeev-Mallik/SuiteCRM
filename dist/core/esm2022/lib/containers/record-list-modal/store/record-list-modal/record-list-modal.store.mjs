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
import { BehaviorSubject } from 'rxjs';
import { emptyObject } from '../../../../common/utils/object-utils';
import { map, take, tap } from 'rxjs/operators';
import { RecordListStoreFactory } from '../../../../store/record-list/record-list.store.factory';
import { MetadataStore } from '../../../../store/metadata/metadata.store.service';
import { UserPreferenceStore } from '../../../../store/user-preference/user-preference.store';
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/record-list/record-list.store.factory";
import * as i2 from "../../../../store/metadata/metadata.store.service";
import * as i3 from "../../../../store/user-preference/user-preference.store";
export class RecordListModalStore {
    constructor(listStoreFactory, meta, preferences) {
        this.listStoreFactory = listStoreFactory;
        this.meta = meta;
        this.preferences = preferences;
        this.module = '';
        this.parentModule = '';
        this.recordList = listStoreFactory.create();
        this.loading$ = this.recordList.loading$;
        this.metadataLoadingState = new BehaviorSubject(false);
        this.linkClickedState = new BehaviorSubject(false);
        this.linkClicked$ = this.linkClickedState.asObservable();
        this.metadataLoading$ = this.metadataLoadingState.asObservable();
        this.selection$ = this.recordList.selection$;
        this.selectedCount$ = this.recordList.selectedCount$;
        this.selectedStatus$ = this.recordList.selectedStatus$;
    }
    clear() {
        this.recordList.clear();
        this.recordList = null;
    }
    clearAuthBased() {
        this.recordList.clearAuthBased();
    }
    /**
     * Initial list records load if not cached and update state.
     * Returns observable to be used in resolver if needed
     *
     * @param {string} module name
     * @param {string} parentModule
     */
    init(module, parentModule = '') {
        this.module = module;
        this.parentModule = parentModule;
        this.loadCurrentSort();
        this.metadataLoadingState.next(true);
        const meta$ = this.meta.getMetadata(module).pipe(tap(() => {
            this.metadataLoadingState.next(false);
            this.recordList.load().pipe(take(1)).subscribe();
        }));
        this.listMetadata$ = meta$.pipe(map(meta => meta.listView));
        this.searchMetadata$ = meta$.pipe(map(meta => meta.search));
        this.recordList.init(module, false, 'list_max_entries_per_modal');
        this.columns$ = this.listMetadata$.pipe(map(metadata => metadata.fields));
    }
    /**
     * Load / reload records using current pagination and criteria
     *
     * @param {boolean} useCache if to use cache
     * @returns {object} Observable<RecordList>
     */
    load(useCache = true) {
        return this.recordList.load(useCache);
    }
    /**
     * Load current sorting
     */
    loadCurrentSort() {
        if (!this.parentModule) {
            return;
        }
        const currentSort = this.loadPreference(this.parentModule, 'current-sort');
        if (!currentSort || emptyObject(currentSort)) {
            return;
        }
        this.recordList.sort = currentSort;
    }
    /**
     * Load current sorting
     */
    saveCurrentSort() {
        if (!this.parentModule) {
            return;
        }
        this.savePreference(this.parentModule, 'current-sort', this.recordList.sort);
    }
    /**
     * Emit Clicked Event
     */
    emitLinkClicked() {
        this.linkClickedState.next(true);
    }
    /**
     * Build ui user preference key
     * @param storageKey
     * @protected
     */
    getPreferenceKey(storageKey) {
        return this.module + '-record-list-modal-' + storageKey;
    }
    /**
     * Save ui user preference
     * @param module
     * @param storageKey
     * @param value
     * @protected
     */
    savePreference(module, storageKey, value) {
        this.preferences.setUi(module, this.getPreferenceKey(storageKey), value);
    }
    /**
     * Load ui user preference
     * @param parentModule
     * @param storageKey
     * @protected
     */
    loadPreference(parentModule, storageKey) {
        return this.preferences.getUi(parentModule, this.getPreferenceKey(storageKey));
    }
    static { this.ɵfac = function RecordListModalStore_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RecordListModalStore)(i0.ɵɵinject(i1.RecordListStoreFactory), i0.ɵɵinject(i2.MetadataStore), i0.ɵɵinject(i3.UserPreferenceStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordListModalStore, factory: RecordListModalStore.ɵfac }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordListModalStore, [{
        type: Injectable
    }], () => [{ type: i1.RecordListStoreFactory }, { type: i2.MetadataStore }, { type: i3.UserPreferenceStore }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLWxpc3QtbW9kYWwuc3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9yZWNvcmQtbGlzdC1tb2RhbC9zdG9yZS9yZWNvcmQtbGlzdC1tb2RhbC9yZWNvcmQtbGlzdC1tb2RhbC5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsZUFBZSxFQUFhLE1BQU0sTUFBTSxDQUFDO0FBRWpELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUdsRSxPQUFPLEVBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSx5REFBeUQsQ0FBQztBQUMvRixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sbURBQW1ELENBQUM7QUFHaEYsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0seURBQXlELENBQUM7Ozs7O0FBRzVGLE1BQU0sT0FBTyxvQkFBb0I7SUFrQjdCLFlBQ2MsZ0JBQXdDLEVBQ3hDLElBQW1CLEVBQ25CLFdBQWdDO1FBRmhDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBd0I7UUFDeEMsU0FBSSxHQUFKLElBQUksQ0FBZTtRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBcUI7UUFuQjlDLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsaUJBQVksR0FBVyxFQUFFLENBQUM7UUFvQnRCLElBQUksQ0FBQyxVQUFVLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDNUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FB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QzNDLE9BQU87UUFDWCxDQUFDO1FBRUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO0lBQ3ZDLENBQUM7SUFFRDs7T0FFRztJQUNJLGVBQWU7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNyQixPQUFPO1FBQ1gsQ0FBQztRQUVELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBRUQ7O09BRUc7SUFDSSxlQUFlO1FBQ2xCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVEOzs7O09BSUc7SUFDTyxnQkFBZ0IsQ0FBQyxVQUFrQjtRQUN6QyxPQUFPLElBQUksQ0FBQyxNQUFNLEdBQUcscUJBQXFCLEdBQUcsVUFBVSxDQUFDO0lBQzVELENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDTyxjQUFjLENBQUMsTUFBYyxFQUFFLFVBQWtCLEVBQUUsS0FBVTtRQUNuRSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNPLGNBQWMsQ0FBQyxZQUFvQixFQUFFLFVBQWtCO1FBQzdELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ25GLENBQUM7cUhBbEpRLG9CQUFvQjt1RUFBcEIsb0JBQW9CLFdBQXBCLG9CQUFvQjs7aUZBQXBCLG9CQUFvQjtjQURoQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtDb2x1bW5EZWZpbml0aW9uLCBTZWFyY2hNZXRhLCBSZWNvcmRMaXN0TWV0YX0gIGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9tZXRhZGF0YS9saXN0Lm1ldGFkYXRhLm1vZGVsJztcbmltcG9ydCB7ZW1wdHlPYmplY3R9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi91dGlscy9vYmplY3QtdXRpbHMnO1xuaW1wb3J0IHtSZWNvcmRTZWxlY3Rpb24sIFNlbGVjdGlvblN0YXR1c30gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3ZpZXdzL2xpc3QvcmVjb3JkLXNlbGVjdGlvbi5tb2RlbCc7XG5cbmltcG9ydCB7bWFwLCB0YWtlLCB0YXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7UmVjb3JkTGlzdFN0b3JlRmFjdG9yeX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvcmVjb3JkLWxpc3QvcmVjb3JkLWxpc3Quc3RvcmUuZmFjdG9yeSc7XG5pbXBvcnQge01ldGFkYXRhU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL21ldGFkYXRhL21ldGFkYXRhLnN0b3JlLnNlcnZpY2UnO1xuaW1wb3J0IHtSZWNvcmRMaXN0LCBSZWNvcmRMaXN0U3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3JlY29yZC1saXN0L3JlY29yZC1saXN0LnN0b3JlJztcbmltcG9ydCB7U3RhdGVTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvc3RhdGUnO1xuaW1wb3J0IHtVc2VyUHJlZmVyZW5jZVN0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS91c2VyLXByZWZlcmVuY2UvdXNlci1wcmVmZXJlbmNlLnN0b3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJlY29yZExpc3RNb2RhbFN0b3JlIGltcGxlbWVudHMgU3RhdGVTdG9yZSB7XG5cbiAgICBtb2R1bGU6IHN0cmluZyA9ICcnO1xuICAgIHBhcmVudE1vZHVsZTogc3RyaW5nID0gJyc7XG4gICAgcmVjb3JkTGlzdDogUmVjb3JkTGlzdFN0b3JlO1xuICAgIGxpc3RNZXRhZGF0YSQ6IE9ic2VydmFibGU8UmVjb3JkTGlzdE1ldGE+O1xuICAgIHNlYXJjaE1ldGFkYXRhJDogT2JzZXJ2YWJsZTxTZWFyY2hNZXRhPjtcbiAgICBzZWxlY3Rpb24kOiBPYnNlcnZhYmxlPFJlY29yZFNlbGVjdGlvbj47XG4gICAgc2VsZWN0ZWRDb3VudCQ6IE9ic2VydmFibGU8bnVtYmVyPjtcbiAgICBzZWxlY3RlZFN0YXR1cyQ6IE9ic2VydmFibGU8U2VsZWN0aW9uU3RhdHVzPjtcbiAgICBjb2x1bW5zJDogT2JzZXJ2YWJsZTxDb2x1bW5EZWZpbml0aW9uW10+O1xuICAgIGxpc3RNZXRhZGF0YTogUmVjb3JkTGlzdE1ldGE7XG4gICAgbGlua0NsaWNrZWQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIGxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIG1ldGFkYXRhTG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgcHJvdGVjdGVkIG1ldGFkYXRhTG9hZGluZ1N0YXRlOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj47XG4gICAgcHJvdGVjdGVkIGxpbmtDbGlja2VkU3RhdGU6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgbGlzdFN0b3JlRmFjdG9yeTogUmVjb3JkTGlzdFN0b3JlRmFjdG9yeSxcbiAgICAgICAgcHJvdGVjdGVkIG1ldGE6IE1ldGFkYXRhU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBwcmVmZXJlbmNlczogVXNlclByZWZlcmVuY2VTdG9yZVxuICAgICkge1xuICAgICAgICB0aGlzLnJlY29yZExpc3QgPSBsaXN0U3RvcmVGYWN0b3J5LmNyZWF0ZSgpO1xuICAgICAgICB0aGlzLmxvYWRpbmckID0gdGhpcy5yZWNvcmRMaXN0LmxvYWRpbmckO1xuXG4gICAgICAgIHRoaXMubWV0YWRhdGFMb2FkaW5nU3RhdGUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcbiAgICAgICAgdGhpcy5saW5rQ2xpY2tlZFN0YXRlID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG4gICAgICAgIHRoaXMubGlua0NsaWNrZWQkID0gdGhpcy5saW5rQ2xpY2tlZFN0YXRlLmFzT2JzZXJ2YWJsZSgpO1xuICAgICAgICB0aGlzLm1ldGFkYXRhTG9hZGluZyQgPSB0aGlzLm1ldGFkYXRhTG9hZGluZ1N0YXRlLmFzT2JzZXJ2YWJsZSgpO1xuICAgICAgICB0aGlzLnNlbGVjdGlvbiQgPSB0aGlzLnJlY29yZExpc3Quc2VsZWN0aW9uJDtcbiAgICAgICAgdGhpcy5zZWxlY3RlZENvdW50JCA9IHRoaXMucmVjb3JkTGlzdC5zZWxlY3RlZENvdW50JDtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFN0YXR1cyQgPSB0aGlzLnJlY29yZExpc3Quc2VsZWN0ZWRTdGF0dXMkO1xuICAgIH1cblxuICAgIGNsZWFyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlY29yZExpc3QuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5yZWNvcmRMaXN0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBjbGVhckF1dGhCYXNlZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZWNvcmRMaXN0LmNsZWFyQXV0aEJhc2VkKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbCBsaXN0IHJlY29yZHMgbG9hZCBpZiBub3QgY2FjaGVkIGFuZCB1cGRhdGUgc3RhdGUuXG4gICAgICogUmV0dXJucyBvYnNlcnZhYmxlIHRvIGJlIHVzZWQgaW4gcmVzb2x2ZXIgaWYgbmVlZGVkXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kdWxlIG5hbWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyZW50TW9kdWxlXG4gICAgICovXG4gICAgcHVibGljIGluaXQobW9kdWxlOiBzdHJpbmcsIHBhcmVudE1vZHVsZTogc3RyaW5nID0gJycpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tb2R1bGUgPSBtb2R1bGU7XG4gICAgICAgIHRoaXMucGFyZW50TW9kdWxlID0gcGFyZW50TW9kdWxlO1xuXG4gICAgICAgIHRoaXMubG9hZEN1cnJlbnRTb3J0KCk7XG5cbiAgICAgICAgdGhpcy5tZXRhZGF0YUxvYWRpbmdTdGF0ZS5uZXh0KHRydWUpO1xuICAgICAgICBjb25zdCBtZXRhJCA9IHRoaXMubWV0YS5nZXRNZXRhZGF0YShtb2R1bGUpLnBpcGUoXG4gICAgICAgICAgICB0YXAoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubWV0YWRhdGFMb2FkaW5nU3RhdGUubmV4dChmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWNvcmRMaXN0LmxvYWQoKS5waXBlKFxuICAgICAgICAgICAgICAgICAgICB0YWtlKDEpXG4gICAgICAgICAgICAgICAgKS5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMubGlzdE1ldGFkYXRhJCA9IG1ldGEkLnBpcGUobWFwKG1ldGEgPT4gbWV0YS5saXN0VmlldykpO1xuICAgICAgICB0aGlzLnNlYXJjaE1ldGFkYXRhJCA9IG1ldGEkLnBpcGUobWFwKG1ldGEgPT4gbWV0YS5zZWFyY2gpKTtcbiAgICAgICAgdGhpcy5yZWNvcmRMaXN0LmluaXQobW9kdWxlLCBmYWxzZSwgJ2xpc3RfbWF4X2VudHJpZXNfcGVyX21vZGFsJyk7XG4gICAgICAgIHRoaXMuY29sdW1ucyQgPSB0aGlzLmxpc3RNZXRhZGF0YSQucGlwZShtYXAobWV0YWRhdGEgPT4gbWV0YWRhdGEuZmllbGRzKSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBMb2FkIC8gcmVsb2FkIHJlY29yZHMgdXNpbmcgY3VycmVudCBwYWdpbmF0aW9uIGFuZCBjcml0ZXJpYVxuICAgICAqXG4gICAgICogQHBhcmFtIHtib29sZWFufSB1c2VDYWNoZSBpZiB0byB1c2UgY2FjaGVcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBPYnNlcnZhYmxlPFJlY29yZExpc3Q+XG4gICAgICovXG4gICAgcHVibGljIGxvYWQodXNlQ2FjaGUgPSB0cnVlKTogT2JzZXJ2YWJsZTxSZWNvcmRMaXN0PiB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVjb3JkTGlzdC5sb2FkKHVzZUNhY2hlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkIGN1cnJlbnQgc29ydGluZ1xuICAgICAqL1xuICAgIHB1YmxpYyBsb2FkQ3VycmVudFNvcnQoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5wYXJlbnRNb2R1bGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRTb3J0ID0gdGhpcy5sb2FkUHJlZmVyZW5jZSh0aGlzLnBhcmVudE1vZHVsZSwgJ2N1cnJlbnQtc29ydCcpO1xuICAgICAgICBpZiAoIWN1cnJlbnRTb3J0IHx8IGVtcHR5T2JqZWN0KGN1cnJlbnRTb3J0KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZWNvcmRMaXN0LnNvcnQgPSBjdXJyZW50U29ydDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkIGN1cnJlbnQgc29ydGluZ1xuICAgICAqL1xuICAgIHB1YmxpYyBzYXZlQ3VycmVudFNvcnQoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5wYXJlbnRNb2R1bGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2F2ZVByZWZlcmVuY2UodGhpcy5wYXJlbnRNb2R1bGUsICdjdXJyZW50LXNvcnQnLCB0aGlzLnJlY29yZExpc3Quc29ydCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRW1pdCBDbGlja2VkIEV2ZW50XG4gICAgICovXG4gICAgcHVibGljIGVtaXRMaW5rQ2xpY2tlZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5saW5rQ2xpY2tlZFN0YXRlLm5leHQodHJ1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGQgdWkgdXNlciBwcmVmZXJlbmNlIGtleVxuICAgICAqIEBwYXJhbSBzdG9yYWdlS2V5XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRQcmVmZXJlbmNlS2V5KHN0b3JhZ2VLZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZHVsZSArICctcmVjb3JkLWxpc3QtbW9kYWwtJyArIHN0b3JhZ2VLZXk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2F2ZSB1aSB1c2VyIHByZWZlcmVuY2VcbiAgICAgKiBAcGFyYW0gbW9kdWxlXG4gICAgICogQHBhcmFtIHN0b3JhZ2VLZXlcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHNhdmVQcmVmZXJlbmNlKG1vZHVsZTogc3RyaW5nLCBzdG9yYWdlS2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wcmVmZXJlbmNlcy5zZXRVaShtb2R1bGUsIHRoaXMuZ2V0UHJlZmVyZW5jZUtleShzdG9yYWdlS2V5KSwgdmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvYWQgdWkgdXNlciBwcmVmZXJlbmNlXG4gICAgICogQHBhcmFtIHBhcmVudE1vZHVsZVxuICAgICAqIEBwYXJhbSBzdG9yYWdlS2V5XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBsb2FkUHJlZmVyZW5jZShwYXJlbnRNb2R1bGU6IHN0cmluZywgc3RvcmFnZUtleTogc3RyaW5nKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJlZmVyZW5jZXMuZ2V0VWkocGFyZW50TW9kdWxlLCB0aGlzLmdldFByZWZlcmVuY2VLZXkoc3RvcmFnZUtleSkpO1xuICAgIH1cbn1cbiJdfQ==