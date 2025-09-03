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
import { Component, Input } from '@angular/core';
import { SortDirection } from '../../common/views/list/list-navigation.model';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../image/image.component";
function SortButtonComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 1);
    i0.ɵɵlistener("click", function SortButtonComponent_ng_container_0_Template_a_click_1_listener() { const direction_r2 = i0.ɵɵrestoreView(_r1).ngIf; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.changeSorting(direction_r2)); });
    i0.ɵɵelement(2, "scrm-image", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const direction_r2 = ctx.ngIf;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("image", ctx_r2.getStatusIcon(direction_r2));
} }
export class SortButtonComponent {
    constructor() {
        this.statusIcons = {
            NONE: 'sort',
            ASC: 'sort_ascend',
            DESC: 'sort_descend'
        };
        this.nextDirection = {
            NONE: SortDirection.DESC,
            ASC: SortDirection.NONE,
            DESC: SortDirection.ASC
        };
    }
    ngOnInit() {
        this.direction$ = this.state.getSortDirection();
    }
    getStatusIcon(direction) {
        return this.statusIcons[direction];
    }
    changeSorting(direction) {
        const newDirection = this.nextDirection[direction];
        this.state.changeSortDirection(newDirection);
    }
    static { this.ɵfac = function SortButtonComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SortButtonComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SortButtonComponent, selectors: [["scrm-sort-button"]], inputs: { state: "state" }, decls: 2, vars: 3, consts: [[4, "ngIf"], [1, "btn", "btn-sm", "p-0", "sort-button", 3, "click"], [1, "sort-icon", "sicon", 3, "image"]], template: function SortButtonComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SortButtonComponent_ng_container_0_Template, 3, 1, "ng-container", 0);
            i0.ɵɵpipe(1, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.direction$));
        } }, dependencies: [i1.NgIf, i2.ImageComponent, i1.AsyncPipe], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SortButtonComponent, [{
        type: Component,
        args: [{ selector: 'scrm-sort-button', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container *ngIf=\"(direction$ | async) as direction\">\n    <a class=\"btn btn-sm p-0 sort-button\" (click)=\"changeSorting(direction)\">\n        <scrm-image class=\"sort-icon sicon\" [image]=\"getStatusIcon(direction)\"></scrm-image>\n    </a>\n</ng-container>\n\n" }]
    }], () => [], { state: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SortButtonComponent, { className: "SortButtonComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvc29ydC1idXR0b24vc29ydC1idXR0b24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvc29ydC1idXR0b24vc29ydC1idXR0b24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQy9DLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQzs7Ozs7O0lDQTVFLDZCQUF3RDtJQUNwRCw0QkFBeUU7SUFBbkMsNk1BQVMsa0NBQXdCLEtBQUM7SUFDcEUsZ0NBQW9GO0lBQ3hGLGlCQUFJOzs7OztJQURvQyxlQUFrQztJQUFsQywwREFBa0M7O0FETzlFLE1BQU0sT0FBTyxtQkFBbUI7SUFnQjVCO1FBWlUsZ0JBQVcsR0FBRztZQUNwQixJQUFJLEVBQUUsTUFBTTtZQUNaLEdBQUcsRUFBRSxhQUFhO1lBQ2xCLElBQUksRUFBRSxjQUFjO1NBQ3ZCLENBQUM7UUFFUSxrQkFBYSxHQUFHO1lBQ3RCLElBQUksRUFBRSxhQUFhLENBQUMsSUFBSTtZQUN4QixHQUFHLEVBQUUsYUFBYSxDQUFDLElBQUk7WUFDdkIsSUFBSSxFQUFFLGFBQWEsQ0FBQyxHQUFHO1NBQzFCLENBQUM7SUFHRixDQUFDO0lBRUQsUUFBUTtRQUNKLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ3BELENBQUM7SUFFRCxhQUFhLENBQUMsU0FBd0I7UUFDbEMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxhQUFhLENBQUMsU0FBd0I7UUFDbEMsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2pELENBQUM7b0hBOUJRLG1CQUFtQjtvRUFBbkIsbUJBQW1CO1lDVGhDLHNGQUF3RDs7O1lBQXpDLDJEQUEyQjs7O2lGRFM3QixtQkFBbUI7Y0FML0IsU0FBUzsyQkFDSSxrQkFBa0I7b0JBS25CLEtBQUs7a0JBQWIsS0FBSzs7a0ZBREcsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTb3J0RGlyZWN0aW9ufSBmcm9tICcuLi8uLi9jb21tb24vdmlld3MvbGlzdC9saXN0LW5hdmlnYXRpb24ubW9kZWwnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7U29ydERpcmVjdGlvbkRhdGFTb3VyY2V9IGZyb20gJy4vc29ydC1idXR0b24ubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tc29ydC1idXR0b24nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zb3J0LWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBTb3J0QnV0dG9uQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBzdGF0ZTogU29ydERpcmVjdGlvbkRhdGFTb3VyY2U7XG4gICAgZGlyZWN0aW9uJDogT2JzZXJ2YWJsZTxTb3J0RGlyZWN0aW9uPjtcblxuICAgIHByb3RlY3RlZCBzdGF0dXNJY29ucyA9IHtcbiAgICAgICAgTk9ORTogJ3NvcnQnLFxuICAgICAgICBBU0M6ICdzb3J0X2FzY2VuZCcsXG4gICAgICAgIERFU0M6ICdzb3J0X2Rlc2NlbmQnXG4gICAgfTtcblxuICAgIHByb3RlY3RlZCBuZXh0RGlyZWN0aW9uID0ge1xuICAgICAgICBOT05FOiBTb3J0RGlyZWN0aW9uLkRFU0MsXG4gICAgICAgIEFTQzogU29ydERpcmVjdGlvbi5OT05FLFxuICAgICAgICBERVNDOiBTb3J0RGlyZWN0aW9uLkFTQ1xuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24kID0gdGhpcy5zdGF0ZS5nZXRTb3J0RGlyZWN0aW9uKCk7XG4gICAgfVxuXG4gICAgZ2V0U3RhdHVzSWNvbihkaXJlY3Rpb246IFNvcnREaXJlY3Rpb24pOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0dXNJY29uc1tkaXJlY3Rpb25dO1xuICAgIH1cblxuICAgIGNoYW5nZVNvcnRpbmcoZGlyZWN0aW9uOiBTb3J0RGlyZWN0aW9uKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG5ld0RpcmVjdGlvbiA9IHRoaXMubmV4dERpcmVjdGlvbltkaXJlY3Rpb25dO1xuICAgICAgICB0aGlzLnN0YXRlLmNoYW5nZVNvcnREaXJlY3Rpb24obmV3RGlyZWN0aW9uKTtcbiAgICB9XG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48bmctY29udGFpbmVyICpuZ0lmPVwiKGRpcmVjdGlvbiQgfCBhc3luYykgYXMgZGlyZWN0aW9uXCI+XG4gICAgPGEgY2xhc3M9XCJidG4gYnRuLXNtIHAtMCBzb3J0LWJ1dHRvblwiIChjbGljayk9XCJjaGFuZ2VTb3J0aW5nKGRpcmVjdGlvbilcIj5cbiAgICAgICAgPHNjcm0taW1hZ2UgY2xhc3M9XCJzb3J0LWljb24gc2ljb25cIiBbaW1hZ2VdPVwiZ2V0U3RhdHVzSWNvbihkaXJlY3Rpb24pXCI+PC9zY3JtLWltYWdlPlxuICAgIDwvYT5cbjwvbmctY29udGFpbmVyPlxuXG4iXX0=