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
import { Component } from '@angular/core';
import { ListViewStore } from '../../store/list-view/list-view.store';
import { AppStateStore } from '../../../../store/app-state/app-state.store';
import { QuickFiltersService } from "../../services/quick-filters.service";
import { ListViewSidebarWidgetService } from "../../services/list-view-sidebar-widget.service";
import { RecordPaginationService } from "../../../record/store/record-pagination/record-pagination.service";
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/app-state/app-state.store";
import * as i2 from "../../store/list-view/list-view.store";
import * as i3 from "../../services/quick-filters.service";
import * as i4 from "../../services/list-view-sidebar-widget.service";
import * as i5 from "../../../record/store/record-pagination/record-pagination.service";
import * as i6 from "@angular/common";
import * as i7 from "../list-header/list-header.component";
import * as i8 from "../list-container/list-container.component";
function ListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelement(1, "scrm-list-header")(2, "scrm-list-container");
    i0.ɵɵelementEnd();
} }
export class ListComponent {
    constructor(appState, listStore, quickFilters, sidebarWidgetHandler, recordPaginationService) {
        this.appState = appState;
        this.listStore = listStore;
        this.quickFilters = quickFilters;
        this.sidebarWidgetHandler = sidebarWidgetHandler;
        this.recordPaginationService = recordPaginationService;
        this.vm$ = null;
    }
    ngOnInit() {
        this.appState.removeAllPrevRoutes();
        this.module = this.appState.getModule();
        this.listSub = this.listStore.init(this.module).subscribe();
        this.vm$ = this.listStore.vm$;
    }
    ngOnDestroy() {
        if (this.listSub) {
            this.listSub.unsubscribe();
        }
        this.updateListLocalStorage();
        this.quickFilters.destroy();
        this.sidebarWidgetHandler.destroy();
        this.listStore.destroy();
    }
    updateListLocalStorage() {
        this.recordPaginationService.updateRecordListLocalStorage(this.listStore.recordList.records, this.listStore.recordList.pagination);
    }
    static { this.ɵfac = function ListComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ListComponent)(i0.ɵɵdirectiveInject(i1.AppStateStore), i0.ɵɵdirectiveInject(i2.ListViewStore), i0.ɵɵdirectiveInject(i3.QuickFiltersService), i0.ɵɵdirectiveInject(i4.ListViewSidebarWidgetService), i0.ɵɵdirectiveInject(i5.RecordPaginationService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ListComponent, selectors: [["scrm-list"]], features: [i0.ɵɵProvidersFeature([ListViewStore, QuickFiltersService, ListViewSidebarWidgetService])], decls: 2, vars: 3, consts: [["class", "list-view", 4, "ngIf"], [1, "list-view"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ListComponent_div_0_Template, 3, 0, "div", 0);
            i0.ɵɵpipe(1, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.vm$));
        } }, dependencies: [i6.NgIf, i7.ListHeaderComponent, i8.ListContainerComponent, i6.AsyncPipe], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListComponent, [{
        type: Component,
        args: [{ selector: 'scrm-list', providers: [ListViewStore, QuickFiltersService, ListViewSidebarWidgetService], template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<!-- Start List View Section -->\n<div class=\"list-view\" *ngIf=\"(vm$ | async) as vm\">\n    <scrm-list-header></scrm-list-header>\n    <scrm-list-container></scrm-list-container>\n</div>\n<!-- End List View Section -->\n" }]
    }], () => [{ type: i1.AppStateStore }, { type: i2.ListViewStore }, { type: i3.QuickFiltersService }, { type: i4.ListViewSidebarWidgetService }, { type: i5.RecordPaginationService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ListComponent, { className: "ListComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvbGlzdC9jb21wb25lbnRzL2xpc3Qtdmlldy9saXN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi92aWV3cy9saXN0L2NvbXBvbmVudHMvbGlzdC12aWV3L2xpc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBRTNELE9BQU8sRUFBZ0IsYUFBYSxFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDbkYsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQzFFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyw0QkFBNEIsRUFBQyxNQUFNLGlEQUFpRCxDQUFDO0FBQzdGLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLG1FQUFtRSxDQUFDOzs7Ozs7Ozs7OztJQ0oxRyw4QkFBbUQ7SUFFL0MsQUFEQSxtQ0FBcUMsMEJBQ007SUFDL0MsaUJBQU07O0FEU04sTUFBTSxPQUFPLGFBQWE7SUFNdEIsWUFDYyxRQUF1QixFQUN2QixTQUF3QixFQUN4QixZQUFpQyxFQUNqQyxvQkFBa0QsRUFDbEQsdUJBQWdEO1FBSmhELGFBQVEsR0FBUixRQUFRLENBQWU7UUFDdkIsY0FBUyxHQUFULFNBQVMsQ0FBZTtRQUN4QixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDakMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUE4QjtRQUNsRCw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBUDlELFFBQUcsR0FBOEIsSUFBSSxDQUFDO0lBVXRDLENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM1RCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxXQUFXO1FBQ1AsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDZixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQy9CLENBQUM7UUFFRCxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUU5QixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUVwQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFTSxzQkFBc0I7UUFDekIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN2SSxDQUFDOzhHQXRDUSxhQUFhO29FQUFiLGFBQWEsK0RBRlgsQ0FBQyxhQUFhLEVBQUUsbUJBQW1CLEVBQUUsNEJBQTRCLENBQUM7WUNWakYsOERBQW1EOzs7WUFBM0Isb0RBQW9COzs7aUZEWS9CLGFBQWE7Y0FOekIsU0FBUzsyQkFDSSxXQUFXLGFBR1YsQ0FBQyxhQUFhLEVBQUUsbUJBQW1CLEVBQUUsNEJBQTRCLENBQUM7O2tGQUVwRSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtMaXN0Vmlld01vZGVsLCBMaXN0Vmlld1N0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS9saXN0LXZpZXcvbGlzdC12aWV3LnN0b3JlJztcbmltcG9ydCB7QXBwU3RhdGVTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvYXBwLXN0YXRlL2FwcC1zdGF0ZS5zdG9yZSc7XG5pbXBvcnQge1F1aWNrRmlsdGVyc1NlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9xdWljay1maWx0ZXJzLnNlcnZpY2VcIjtcbmltcG9ydCB7TGlzdFZpZXdTaWRlYmFyV2lkZ2V0U2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2xpc3Qtdmlldy1zaWRlYmFyLXdpZGdldC5zZXJ2aWNlXCI7XG5pbXBvcnQge1JlY29yZFBhZ2luYXRpb25TZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vcmVjb3JkL3N0b3JlL3JlY29yZC1wYWdpbmF0aW9uL3JlY29yZC1wYWdpbmF0aW9uLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLWxpc3QnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtdLFxuICAgIHByb3ZpZGVyczogW0xpc3RWaWV3U3RvcmUsIFF1aWNrRmlsdGVyc1NlcnZpY2UsIExpc3RWaWV3U2lkZWJhcldpZGdldFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgbGlzdFN1YjogU3Vic2NyaXB0aW9uO1xuICAgIG1vZHVsZTogc3RyaW5nO1xuXG4gICAgdm0kOiBPYnNlcnZhYmxlPExpc3RWaWV3TW9kZWw+ID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgYXBwU3RhdGU6IEFwcFN0YXRlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBsaXN0U3RvcmU6IExpc3RWaWV3U3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBxdWlja0ZpbHRlcnM6IFF1aWNrRmlsdGVyc1NlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBzaWRlYmFyV2lkZ2V0SGFuZGxlcjogTGlzdFZpZXdTaWRlYmFyV2lkZ2V0U2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIHJlY29yZFBhZ2luYXRpb25TZXJ2aWNlOiBSZWNvcmRQYWdpbmF0aW9uU2VydmljZVxuICAgICkge1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYXBwU3RhdGUucmVtb3ZlQWxsUHJldlJvdXRlcygpO1xuICAgICAgICB0aGlzLm1vZHVsZSA9IHRoaXMuYXBwU3RhdGUuZ2V0TW9kdWxlKCk7XG4gICAgICAgIHRoaXMubGlzdFN1YiA9IHRoaXMubGlzdFN0b3JlLmluaXQodGhpcy5tb2R1bGUpLnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLnZtJCA9IHRoaXMubGlzdFN0b3JlLnZtJDtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubGlzdFN1Yikge1xuICAgICAgICAgICAgdGhpcy5saXN0U3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZUxpc3RMb2NhbFN0b3JhZ2UoKTtcblxuICAgICAgICB0aGlzLnF1aWNrRmlsdGVycy5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuc2lkZWJhcldpZGdldEhhbmRsZXIuZGVzdHJveSgpO1xuXG4gICAgICAgIHRoaXMubGlzdFN0b3JlLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlTGlzdExvY2FsU3RvcmFnZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZWNvcmRQYWdpbmF0aW9uU2VydmljZS51cGRhdGVSZWNvcmRMaXN0TG9jYWxTdG9yYWdlKHRoaXMubGlzdFN0b3JlLnJlY29yZExpc3QucmVjb3JkcywgdGhpcy5saXN0U3RvcmUucmVjb3JkTGlzdC5wYWdpbmF0aW9uKTtcbiAgICB9XG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48IS0tIFN0YXJ0IExpc3QgVmlldyBTZWN0aW9uIC0tPlxuPGRpdiBjbGFzcz1cImxpc3Qtdmlld1wiICpuZ0lmPVwiKHZtJCB8IGFzeW5jKSBhcyB2bVwiPlxuICAgIDxzY3JtLWxpc3QtaGVhZGVyPjwvc2NybS1saXN0LWhlYWRlcj5cbiAgICA8c2NybS1saXN0LWNvbnRhaW5lcj48L3Njcm0tbGlzdC1jb250YWluZXI+XG48L2Rpdj5cbjwhLS0gRW5kIExpc3QgVmlldyBTZWN0aW9uIC0tPlxuIl19