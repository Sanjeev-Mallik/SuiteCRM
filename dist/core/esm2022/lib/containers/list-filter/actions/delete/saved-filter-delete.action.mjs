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
import { MessageService } from '../../../../services/message/message.service';
import { SavedFilterActionHandler } from '../saved-filter.action';
import { AsyncActionService } from '../../../../services/process/processes/async-action/async-action';
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/message/message.service";
import * as i2 from "../../../../services/process/processes/async-action/async-action";
export class SavedFilterDeleteAction extends SavedFilterActionHandler {
    constructor(message, asyncActionService) {
        super();
        this.message = message;
        this.asyncActionService = asyncActionService;
        this.key = 'delete';
        this.modes = ['edit', 'detail'];
    }
    run(data) {
        const actionName = `record-${this.key}`;
        const baseRecord = (data.store.getBaseRecord()) || {};
        if (!baseRecord.id) {
            this.message.addWarningMessageByKey('LBL_FILTER_ID_NOT_DEFINED');
            return;
        }
        this.message.removeMessages();
        const asyncData = {
            action: actionName,
            module: baseRecord.module,
            id: baseRecord.id,
        };
        this.asyncActionService.run(actionName, asyncData, 'noop').pipe(take(1)).subscribe(() => {
            data.listFilterStore.config.removeSavedFilter(baseRecord);
        });
    }
    shouldDisplay(data) {
        const store = data && data.store;
        const filter = (store && store.recordStore.getBaseRecord()) || {};
        return !!filter.id;
    }
    static { this.ɵfac = function SavedFilterDeleteAction_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SavedFilterDeleteAction)(i0.ɵɵinject(i1.MessageService), i0.ɵɵinject(i2.AsyncActionService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SavedFilterDeleteAction, factory: SavedFilterDeleteAction.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SavedFilterDeleteAction, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.MessageService }, { type: i2.AsyncActionService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZWQtZmlsdGVyLWRlbGV0ZS5hY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9saXN0LWZpbHRlci9hY3Rpb25zL2RlbGV0ZS9zYXZlZC1maWx0ZXItZGVsZXRlLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEMsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDhDQUE4QyxDQUFDO0FBQzVFLE9BQU8sRUFBd0Isd0JBQXdCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RixPQUFPLEVBQW1CLGtCQUFrQixFQUFDLE1BQU0sa0VBQWtFLENBQUM7Ozs7QUFNdEgsTUFBTSxPQUFPLHVCQUF3QixTQUFRLHdCQUF3QjtJQUtqRSxZQUNjLE9BQXVCLEVBQ3ZCLGtCQUFzQztRQUVoRCxLQUFLLEVBQUUsQ0FBQztRQUhFLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFMcEQsUUFBRyxHQUFHLFFBQVEsQ0FBQztRQUNmLFVBQUssR0FBRyxDQUFDLE1BQWtCLEVBQUUsUUFBb0IsQ0FBQyxDQUFDO0lBT25ELENBQUM7SUFFRCxHQUFHLENBQUMsSUFBMkI7UUFFM0IsTUFBTSxVQUFVLEdBQUcsVUFBVSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDeEMsTUFBTSxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksRUFBaUIsQ0FBQztRQUNyRSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsMkJBQTJCLENBQUMsQ0FBQztZQUNqRSxPQUFPO1FBQ1gsQ0FBQztRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFOUIsTUFBTSxTQUFTLEdBQUc7WUFDZCxNQUFNLEVBQUUsVUFBVTtZQUNsQixNQUFNLEVBQUUsVUFBVSxDQUFDLE1BQU07WUFDekIsRUFBRSxFQUFFLFVBQVUsQ0FBQyxFQUFFO1NBQ0EsQ0FBQztRQUV0QixJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUN2QixVQUFVLEVBQ1YsU0FBUyxFQUNULE1BQU0sQ0FDVCxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQzNCLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzlELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGFBQWEsQ0FBQyxJQUEyQjtRQUNyQyxNQUFNLEtBQUssR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNqQyxNQUFNLE1BQU0sR0FBRyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksRUFBaUIsQ0FBQztRQUVqRixPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7d0hBM0NRLHVCQUF1Qjt1RUFBdkIsdUJBQXVCLFdBQXZCLHVCQUF1QixtQkFGcEIsTUFBTTs7aUZBRVQsdUJBQXVCO2NBSG5DLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Vmlld01vZGV9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi92aWV3cy92aWV3Lm1vZGVsJztcbmltcG9ydCB7dGFrZX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbWVzc2FnZS9tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHtTYXZlZEZpbHRlckFjdGlvbkRhdGEsIFNhdmVkRmlsdGVyQWN0aW9uSGFuZGxlcn0gZnJvbSAnLi4vc2F2ZWQtZmlsdGVyLmFjdGlvbic7XG5pbXBvcnQge0FzeW5jQWN0aW9uSW5wdXQsIEFzeW5jQWN0aW9uU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvcHJvY2Vzcy9wcm9jZXNzZXMvYXN5bmMtYWN0aW9uL2FzeW5jLWFjdGlvbic7XG5pbXBvcnQge1NhdmVkRmlsdGVyfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9zYXZlZC1maWx0ZXJzL3NhdmVkLWZpbHRlci5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2F2ZWRGaWx0ZXJEZWxldGVBY3Rpb24gZXh0ZW5kcyBTYXZlZEZpbHRlckFjdGlvbkhhbmRsZXIge1xuXG4gICAga2V5ID0gJ2RlbGV0ZSc7XG4gICAgbW9kZXMgPSBbJ2VkaXQnIGFzIFZpZXdNb2RlLCAnZGV0YWlsJyBhcyBWaWV3TW9kZV07XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIG1lc3NhZ2U6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgYXN5bmNBY3Rpb25TZXJ2aWNlOiBBc3luY0FjdGlvblNlcnZpY2VcbiAgICApIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBydW4oZGF0YTogU2F2ZWRGaWx0ZXJBY3Rpb25EYXRhKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgYWN0aW9uTmFtZSA9IGByZWNvcmQtJHt0aGlzLmtleX1gO1xuICAgICAgICBjb25zdCBiYXNlUmVjb3JkID0gKGRhdGEuc3RvcmUuZ2V0QmFzZVJlY29yZCgpKSB8fCB7fSBhcyBTYXZlZEZpbHRlcjtcbiAgICAgICAgaWYgKCFiYXNlUmVjb3JkLmlkKSB7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UuYWRkV2FybmluZ01lc3NhZ2VCeUtleSgnTEJMX0ZJTFRFUl9JRF9OT1RfREVGSU5FRCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tZXNzYWdlLnJlbW92ZU1lc3NhZ2VzKCk7XG5cbiAgICAgICAgY29uc3QgYXN5bmNEYXRhID0ge1xuICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb25OYW1lLFxuICAgICAgICAgICAgbW9kdWxlOiBiYXNlUmVjb3JkLm1vZHVsZSxcbiAgICAgICAgICAgIGlkOiBiYXNlUmVjb3JkLmlkLFxuICAgICAgICB9IGFzIEFzeW5jQWN0aW9uSW5wdXQ7XG5cbiAgICAgICAgdGhpcy5hc3luY0FjdGlvblNlcnZpY2UucnVuKFxuICAgICAgICAgICAgYWN0aW9uTmFtZSxcbiAgICAgICAgICAgIGFzeW5jRGF0YSxcbiAgICAgICAgICAgICdub29wJ1xuICAgICAgICApLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIGRhdGEubGlzdEZpbHRlclN0b3JlLmNvbmZpZy5yZW1vdmVTYXZlZEZpbHRlcihiYXNlUmVjb3JkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2hvdWxkRGlzcGxheShkYXRhOiBTYXZlZEZpbHRlckFjdGlvbkRhdGEpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3Qgc3RvcmUgPSBkYXRhICYmIGRhdGEuc3RvcmU7XG4gICAgICAgIGNvbnN0IGZpbHRlciA9IChzdG9yZSAmJiBzdG9yZS5yZWNvcmRTdG9yZS5nZXRCYXNlUmVjb3JkKCkpIHx8IHt9IGFzIFNhdmVkRmlsdGVyO1xuXG4gICAgICAgIHJldHVybiAhIWZpbHRlci5pZDtcbiAgICB9XG59XG4iXX0=