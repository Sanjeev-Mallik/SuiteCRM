/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2023 SalesAgility Ltd.
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
import { BehaviorSubject, of } from 'rxjs';
import { distinctUntilChanged, map, shareReplay } from 'rxjs/operators';
import { deepClone } from '../../common/utils/object-utils';
import * as i0 from "@angular/core";
const initialState = {
    globalRecentlyViewed: []
};
let internalState = deepClone(initialState);
let cache$ = null;
export class GlobalRecentlyViewedStore {
    constructor() {
        this.store = new BehaviorSubject(internalState);
        this.state$ = this.store.asObservable();
        this.globalRecentlyViewed$ = this.state$.pipe(map(state => state.globalRecentlyViewed), distinctUntilChanged());
    }
    /**
     * Public Api
     */
    /**
     * Clear state
     */
    clear() {
        cache$ = null;
        this.updateState(deepClone(initialState));
    }
    clearAuthBased() {
        this.clear();
    }
    /**
     * Returns the currently active globalRecentlyViewedMetadata
     *
     * @returns {object} the globalRecentlyViewedMetadata
     */
    getGlobalRecentlyViewed() {
        return internalState.globalRecentlyViewed;
    }
    /**
     * Check if loaded
     */
    isCached() {
        return cache$ !== null;
    }
    /**
     * Internal API
     */
    /**
     * Update the state
     *
     * @param {object} state to set
     */
    updateState(state) {
        this.store.next(internalState = state);
    }
    /**
     * Set pre-loaded globalRecentlyViewedMetadata and cache
     */
    set(globalRecentlyViewedMetadata) {
        cache$ = of(globalRecentlyViewedMetadata).pipe(shareReplay(1));
        this.updateState({ globalRecentlyViewed: globalRecentlyViewedMetadata });
    }
    addToState(data) {
        const currentList = this.getGlobalRecentlyViewed();
        const newList = currentList.filter((obj) => obj?.attributes?.item_id !== data?.attributes?.item_id);
        newList.unshift(data);
        this.updateState({ globalRecentlyViewed: newList });
    }
    static { this.ɵfac = function GlobalRecentlyViewedStore_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || GlobalRecentlyViewedStore)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: GlobalRecentlyViewedStore, factory: GlobalRecentlyViewedStore.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GlobalRecentlyViewedStore, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLXJlY2VudGx5LXZpZXdlZC5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9zdG9yZS9nbG9iYWwtcmVjZW50bHktdmlld2VkL2dsb2JhbC1yZWNlbnRseS12aWV3ZWQuc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGVBQWUsRUFBYyxFQUFFLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFDLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0saUNBQWlDLENBQUM7O0FBSTFELE1BQU0sWUFBWSxHQUF5QjtJQUN2QyxvQkFBb0IsRUFBRSxFQUFFO0NBQzNCLENBQUM7QUFFRixJQUFJLGFBQWEsR0FBeUIsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBRWxFLElBQUksTUFBTSxHQUFvQixJQUFJLENBQUM7QUFLbkMsTUFBTSxPQUFPLHlCQUF5QjtJQVVsQztRQUhVLFVBQUssR0FBRyxJQUFJLGVBQWUsQ0FBdUIsYUFBYSxDQUFDLENBQUM7UUFDakUsV0FBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFHekMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLG9CQUFvQixFQUFFLENBQUMsQ0FBQztJQUNwSCxDQUFDO0lBRUQ7O09BRUc7SUFFSDs7T0FFRztJQUNJLEtBQUs7UUFDUixNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRU0sY0FBYztRQUNqQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSx1QkFBdUI7UUFDMUIsT0FBTyxhQUFhLENBQUMsb0JBQW9CLENBQUM7SUFDOUMsQ0FBQztJQUVEOztPQUVHO0lBQ0ksUUFBUTtRQUNYLE9BQU8sTUFBTSxLQUFLLElBQUksQ0FBQztJQUMzQixDQUFDO0lBRUQ7O09BRUc7SUFFSDs7OztPQUlHO0lBQ08sV0FBVyxDQUFDLEtBQTJCO1FBQzdDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQ7O09BRUc7SUFDSSxHQUFHLENBQUMsNEJBQThDO1FBQ3JELE1BQU0sR0FBRyxFQUFFLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFDLG9CQUFvQixFQUFFLDRCQUE0QixFQUFDLENBQUMsQ0FBQztJQUUzRSxDQUFDO0lBRU0sVUFBVSxDQUFDLElBQW9CO1FBQ2xDLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBQ25ELE1BQU0sT0FBTyxHQUFxQixXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBa0IsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLFVBQVUsRUFBRSxPQUFPLEtBQUssSUFBSSxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNySSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBQyxvQkFBb0IsRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7MEhBekVRLHlCQUF5Qjt1RUFBekIseUJBQXlCLFdBQXpCLHlCQUF5QixtQkFGdEIsTUFBTTs7aUZBRVQseUJBQXlCO2NBSHJDLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIzIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBvZn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2Rpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAsIHNoYXJlUmVwbGF5fSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1N0YXRlU3RvcmV9IGZyb20gJy4uL3N0YXRlJztcbmltcG9ydCB7ZGVlcENsb25lfSBmcm9tICcuLi8uLi9jb21tb24vdXRpbHMvb2JqZWN0LXV0aWxzJztcbmltcG9ydCB7UmVjZW50bHlWaWV3ZWQsIEdsb2JhbFJlY2VudGx5Vmlld2VkfSBmcm9tICcuLi8uLi9jb21tb24vcmVjb3JkL3JlY2VudGx5LXZpZXdlZC5tb2RlbCc7XG5cblxuY29uc3QgaW5pdGlhbFN0YXRlOiBHbG9iYWxSZWNlbnRseVZpZXdlZCA9IHtcbiAgICBnbG9iYWxSZWNlbnRseVZpZXdlZDogW11cbn07XG5cbmxldCBpbnRlcm5hbFN0YXRlOiBHbG9iYWxSZWNlbnRseVZpZXdlZCA9IGRlZXBDbG9uZShpbml0aWFsU3RhdGUpO1xuXG5sZXQgY2FjaGUkOiBPYnNlcnZhYmxlPGFueT4gPSBudWxsO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBHbG9iYWxSZWNlbnRseVZpZXdlZFN0b3JlIGltcGxlbWVudHMgU3RhdGVTdG9yZSB7XG5cbiAgICAvKipcbiAgICAgKiBQdWJsaWMgbG9uZy1saXZlZCBvYnNlcnZhYmxlIHN0cmVhbXNcbiAgICAgKi9cbiAgICBnbG9iYWxSZWNlbnRseVZpZXdlZCQ6IE9ic2VydmFibGU8UmVjZW50bHlWaWV3ZWRbXT47XG5cbiAgICBwcm90ZWN0ZWQgc3RvcmUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEdsb2JhbFJlY2VudGx5Vmlld2VkPihpbnRlcm5hbFN0YXRlKTtcbiAgICBwcm90ZWN0ZWQgc3RhdGUkID0gdGhpcy5zdG9yZS5hc09ic2VydmFibGUoKTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmdsb2JhbFJlY2VudGx5Vmlld2VkJCA9IHRoaXMuc3RhdGUkLnBpcGUobWFwKHN0YXRlID0+IHN0YXRlLmdsb2JhbFJlY2VudGx5Vmlld2VkKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHVibGljIEFwaVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgc3RhdGVcbiAgICAgKi9cbiAgICBwdWJsaWMgY2xlYXIoKTogdm9pZCB7XG4gICAgICAgIGNhY2hlJCA9IG51bGw7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoZGVlcENsb25lKGluaXRpYWxTdGF0ZSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhckF1dGhCYXNlZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnRseSBhY3RpdmUgZ2xvYmFsUmVjZW50bHlWaWV3ZWRNZXRhZGF0YVxuICAgICAqXG4gICAgICogQHJldHVybnMge29iamVjdH0gdGhlIGdsb2JhbFJlY2VudGx5Vmlld2VkTWV0YWRhdGFcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0R2xvYmFsUmVjZW50bHlWaWV3ZWQoKTogUmVjZW50bHlWaWV3ZWRbXSB7XG4gICAgICAgIHJldHVybiBpbnRlcm5hbFN0YXRlLmdsb2JhbFJlY2VudGx5Vmlld2VkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGxvYWRlZFxuICAgICAqL1xuICAgIHB1YmxpYyBpc0NhY2hlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlJCAhPT0gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBBUElcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgc3RhdGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzdGF0ZSB0byBzZXRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgdXBkYXRlU3RhdGUoc3RhdGU6IEdsb2JhbFJlY2VudGx5Vmlld2VkKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RvcmUubmV4dChpbnRlcm5hbFN0YXRlID0gc3RhdGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBwcmUtbG9hZGVkIGdsb2JhbFJlY2VudGx5Vmlld2VkTWV0YWRhdGEgYW5kIGNhY2hlXG4gICAgICovXG4gICAgcHVibGljIHNldChnbG9iYWxSZWNlbnRseVZpZXdlZE1ldGFkYXRhOiBSZWNlbnRseVZpZXdlZFtdKTogdm9pZCB7XG4gICAgICAgIGNhY2hlJCA9IG9mKGdsb2JhbFJlY2VudGx5Vmlld2VkTWV0YWRhdGEpLnBpcGUoc2hhcmVSZXBsYXkoMSkpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtnbG9iYWxSZWNlbnRseVZpZXdlZDogZ2xvYmFsUmVjZW50bHlWaWV3ZWRNZXRhZGF0YX0pO1xuXG4gICAgfVxuXG4gICAgcHVibGljIGFkZFRvU3RhdGUoZGF0YTogUmVjZW50bHlWaWV3ZWQpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY3VycmVudExpc3QgPSB0aGlzLmdldEdsb2JhbFJlY2VudGx5Vmlld2VkKCk7XG4gICAgICAgIGNvbnN0IG5ld0xpc3Q6IFJlY2VudGx5Vmlld2VkW10gPSBjdXJyZW50TGlzdC5maWx0ZXIoKG9iajpSZWNlbnRseVZpZXdlZCkgPT4gb2JqPy5hdHRyaWJ1dGVzPy5pdGVtX2lkICE9PSBkYXRhPy5hdHRyaWJ1dGVzPy5pdGVtX2lkKTtcbiAgICAgICAgbmV3TGlzdC51bnNoaWZ0KGRhdGEpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtnbG9iYWxSZWNlbnRseVZpZXdlZDogbmV3TGlzdH0pO1xuICAgIH1cblxuXG59XG4iXX0=