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
import { SubpanelCreateAction } from '../../actions/create/create.action';
import { SubpanelSelectAction } from "../../actions/select/select.action";
import { AsyncProcessSubpanelAction } from '../../actions/async-process/async-process.action';
import { SubpanelShowFilterAction } from "../../actions/show-filter/show-filter.action";
import { BaseActionManager } from "../../../../services/actions/base-action-manager.service";
import { SubpanelClearFilterAction } from "../../actions/clear-filter/clear-filter.action";
import * as i0 from "@angular/core";
import * as i1 from "../../actions/create/create.action";
import * as i2 from "../../actions/select/select.action";
import * as i3 from "../../actions/async-process/async-process.action";
import * as i4 from "../../actions/show-filter/show-filter.action";
import * as i5 from "../../actions/clear-filter/clear-filter.action";
export class SubpanelActionManager extends BaseActionManager {
    constructor(create, select, async, showFilter, clearFilter) {
        super();
        this.create = create;
        this.select = select;
        this.async = async;
        this.showFilter = showFilter;
        this.clearFilter = clearFilter;
        async.modes.forEach(mode => this.actions[mode][async.key] = async);
        create.modes.forEach(mode => this.actions[mode][create.key] = create);
        select.modes.forEach(mode => this.actions[mode][select.key] = select);
        showFilter.modes.forEach(mode => this.actions[mode][showFilter.key] = showFilter);
        clearFilter.modes.forEach(mode => this.actions[mode][clearFilter.key] = clearFilter);
    }
    static { this.ɵfac = function SubpanelActionManager_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SubpanelActionManager)(i0.ɵɵinject(i1.SubpanelCreateAction), i0.ɵɵinject(i2.SubpanelSelectAction), i0.ɵɵinject(i3.AsyncProcessSubpanelAction), i0.ɵɵinject(i4.SubpanelShowFilterAction), i0.ɵɵinject(i5.SubpanelClearFilterAction)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SubpanelActionManager, factory: SubpanelActionManager.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SubpanelActionManager, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.SubpanelCreateAction }, { type: i2.SubpanelSelectAction }, { type: i3.AsyncProcessSubpanelAction }, { type: i4.SubpanelShowFilterAction }, { type: i5.SubpanelClearFilterAction }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLW1hbmFnZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb250YWluZXJzL3N1YnBhbmVsL2NvbXBvbmVudHMvc3VicGFuZWwvYWN0aW9uLW1hbmFnZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUV4RSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RSxPQUFPLEVBQUMsMEJBQTBCLEVBQUMsTUFBTSxrREFBa0QsQ0FBQztBQUM1RixPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSw4Q0FBOEMsQ0FBQztBQUN0RixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSwwREFBMEQsQ0FBQztBQUMzRixPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSxnREFBZ0QsQ0FBQzs7Ozs7OztBQUt6RixNQUFNLE9BQU8scUJBQXNCLFNBQVEsaUJBQXFDO0lBRTVFLFlBQ2MsTUFBNEIsRUFDNUIsTUFBNEIsRUFDNUIsS0FBaUMsRUFDakMsVUFBb0MsRUFDcEMsV0FBc0M7UUFFaEQsS0FBSyxFQUFFLENBQUM7UUFORSxXQUFNLEdBQU4sTUFBTSxDQUFzQjtRQUM1QixXQUFNLEdBQU4sTUFBTSxDQUFzQjtRQUM1QixVQUFLLEdBQUwsS0FBSyxDQUE0QjtRQUNqQyxlQUFVLEdBQVYsVUFBVSxDQUEwQjtRQUNwQyxnQkFBVyxHQUFYLFdBQVcsQ0FBMkI7UUFHaEQsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUNuRSxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQ3RFLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDdEUsVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQztRQUNsRixXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7c0hBZlEscUJBQXFCO3VFQUFyQixxQkFBcUIsV0FBckIscUJBQXFCLG1CQUZsQixNQUFNOztpRkFFVCxxQkFBcUI7Y0FIakMsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTdWJwYW5lbENyZWF0ZUFjdGlvbn0gZnJvbSAnLi4vLi4vYWN0aW9ucy9jcmVhdGUvY3JlYXRlLmFjdGlvbic7XG5pbXBvcnQge1N1YnBhbmVsQWN0aW9uRGF0YX0gZnJvbSAnLi4vLi4vYWN0aW9ucy9zdWJwYW5lbC5hY3Rpb24nO1xuaW1wb3J0IHtTdWJwYW5lbFNlbGVjdEFjdGlvbn0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvc2VsZWN0L3NlbGVjdC5hY3Rpb25cIjtcbmltcG9ydCB7QXN5bmNQcm9jZXNzU3VicGFuZWxBY3Rpb259IGZyb20gJy4uLy4uL2FjdGlvbnMvYXN5bmMtcHJvY2Vzcy9hc3luYy1wcm9jZXNzLmFjdGlvbic7XG5pbXBvcnQge1N1YnBhbmVsU2hvd0ZpbHRlckFjdGlvbn0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvc2hvdy1maWx0ZXIvc2hvdy1maWx0ZXIuYWN0aW9uXCI7XG5pbXBvcnQge0Jhc2VBY3Rpb25NYW5hZ2VyfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZXMvYWN0aW9ucy9iYXNlLWFjdGlvbi1tYW5hZ2VyLnNlcnZpY2VcIjtcbmltcG9ydCB7U3VicGFuZWxDbGVhckZpbHRlckFjdGlvbn0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvY2xlYXItZmlsdGVyL2NsZWFyLWZpbHRlci5hY3Rpb25cIjtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgU3VicGFuZWxBY3Rpb25NYW5hZ2VyIGV4dGVuZHMgQmFzZUFjdGlvbk1hbmFnZXI8U3VicGFuZWxBY3Rpb25EYXRhPiB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGNyZWF0ZTogU3VicGFuZWxDcmVhdGVBY3Rpb24sXG4gICAgICAgIHByb3RlY3RlZCBzZWxlY3Q6IFN1YnBhbmVsU2VsZWN0QWN0aW9uLFxuICAgICAgICBwcm90ZWN0ZWQgYXN5bmM6IEFzeW5jUHJvY2Vzc1N1YnBhbmVsQWN0aW9uLFxuICAgICAgICBwcm90ZWN0ZWQgc2hvd0ZpbHRlcjogU3VicGFuZWxTaG93RmlsdGVyQWN0aW9uLFxuICAgICAgICBwcm90ZWN0ZWQgY2xlYXJGaWx0ZXI6IFN1YnBhbmVsQ2xlYXJGaWx0ZXJBY3Rpb25cbiAgICApIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgYXN5bmMubW9kZXMuZm9yRWFjaChtb2RlID0+IHRoaXMuYWN0aW9uc1ttb2RlXVthc3luYy5rZXldID0gYXN5bmMpO1xuICAgICAgICBjcmVhdGUubW9kZXMuZm9yRWFjaChtb2RlID0+IHRoaXMuYWN0aW9uc1ttb2RlXVtjcmVhdGUua2V5XSA9IGNyZWF0ZSk7XG4gICAgICAgIHNlbGVjdC5tb2Rlcy5mb3JFYWNoKG1vZGUgPT4gdGhpcy5hY3Rpb25zW21vZGVdW3NlbGVjdC5rZXldID0gc2VsZWN0KTtcbiAgICAgICAgc2hvd0ZpbHRlci5tb2Rlcy5mb3JFYWNoKG1vZGUgPT4gdGhpcy5hY3Rpb25zW21vZGVdW3Nob3dGaWx0ZXIua2V5XSA9IHNob3dGaWx0ZXIpO1xuICAgICAgICBjbGVhckZpbHRlci5tb2Rlcy5mb3JFYWNoKG1vZGUgPT4gdGhpcy5hY3Rpb25zW21vZGVdW2NsZWFyRmlsdGVyLmtleV0gPSBjbGVhckZpbHRlcik7XG4gICAgfVxufVxuIl19