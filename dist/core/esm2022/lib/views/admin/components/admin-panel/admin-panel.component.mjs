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
import { Component } from '@angular/core';
import { AdminMetadataStore } from '../../../../store/admin-metadata/admin-metadata.store';
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/admin-metadata/admin-metadata.store";
import * as i2 from "@angular/common";
import * as i3 from "../admin-card/admin-card.component";
function AdminPanelComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelement(1, "scrm-admin-card", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("content", data_r1);
} }
export class AdminPanelComponent {
    constructor(adminMetaData) {
        this.adminMetaData = adminMetaData;
        this.adminPanelData = [];
    }
    ngOnInit() {
        const adminData = this.adminMetaData.getAdminPanel();
        this.setData(adminData);
    }
    setData(adminData) {
        adminData.forEach(({ icon, titleLabelKey, descriptionLabelKey, linkGroup }) => {
            this.adminPanelData.push({
                icon,
                titleLabelKey,
                descriptionLabelKey,
                linkGroup: this.setLinkGroups(linkGroup)
            });
        });
    }
    setLinkGroups(groupData) {
        let linkGroups = [];
        let linkGroupKeys = Object.keys(groupData);
        for (let j = 0; j < linkGroupKeys.length; j++) {
            let linkGroup = groupData[linkGroupKeys[j]];
            let links = Object.values(linkGroup);
            for (let i = 0; i < links.length; i++) {
                linkGroups.push(links[i]);
            }
        }
        return linkGroups;
    }
    static { this.ɵfac = function AdminPanelComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AdminPanelComponent)(i0.ɵɵdirectiveInject(i1.AdminMetadataStore)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminPanelComponent, selectors: [["scrm-admin-panel"]], decls: 3, vars: 1, consts: [[1, "admin-view", "full-height-view", "d-flex", "align-items-center"], [1, "row", "flex-grow-1"], ["class", "col-12 col-sm-6 col-lg-4 col-xl-3 mt-3 mb-3", 4, "ngFor", "ngForOf"], [1, "col-12", "col-sm-6", "col-lg-4", "col-xl-3", "mt-3", "mb-3"], [3, "content"]], template: function AdminPanelComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵtemplate(2, AdminPanelComponent_div_2_Template, 2, 1, "div", 2);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.adminPanelData);
        } }, dependencies: [i2.NgForOf, i3.AdminCardComponent], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminPanelComponent, [{
        type: Component,
        args: [{ selector: 'scrm-admin-panel', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2023 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n\n<div class=\"admin-view full-height-view d-flex align-items-center\">\n    <div class=\"row flex-grow-1\">\n        <div *ngFor=\"let data of adminPanelData\" class=\"col-12 col-sm-6 col-lg-4 col-xl-3 mt-3 mb-3\">\n\n            <scrm-admin-card [content]=\"data\"></scrm-admin-card>\n\n        </div>\n    </div>\n</div>\n" }]
    }], () => [{ type: i1.AdminMetadataStore }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminPanelComponent, { className: "AdminPanelComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4tcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3ZpZXdzL2FkbWluL2NvbXBvbmVudHMvYWRtaW4tcGFuZWwvYWRtaW4tcGFuZWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3ZpZXdzL2FkbWluL2NvbXBvbmVudHMvYWRtaW4tcGFuZWwvYWRtaW4tcGFuZWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sdURBQXVELENBQUM7Ozs7OztJQ0dqRiw4QkFBNkY7SUFFekYscUNBQW9EO0lBRXhELGlCQUFNOzs7SUFGZSxjQUFnQjtJQUFoQixpQ0FBZ0I7O0FEUTdDLE1BQU0sT0FBTyxtQkFBbUI7SUFJNUIsWUFBc0IsYUFBaUM7UUFBakMsa0JBQWEsR0FBYixhQUFhLENBQW9CO1FBRnZELG1CQUFjLEdBQXlCLEVBQUUsQ0FBQztJQUcxQyxDQUFDO0lBRUQsUUFBUTtRQUNKLE1BQU0sU0FBUyxHQUFrQixJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3BFLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVTLE9BQU8sQ0FBQyxTQUF3QjtRQUN0QyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBQyxJQUFJLEVBQUUsYUFBYSxFQUFFLG1CQUFtQixFQUFFLFNBQVMsRUFBQyxFQUFFLEVBQUU7WUFDeEUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7Z0JBQ3JCLElBQUk7Z0JBQ0osYUFBYTtnQkFDYixtQkFBbUI7Z0JBQ25CLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQzthQUMzQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFUyxhQUFhLENBQUMsU0FBOEI7UUFDbEQsSUFBSSxVQUFVLEdBQTBCLEVBQUUsQ0FBQztRQUMzQyxJQUFJLGFBQWEsR0FBYSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDNUMsSUFBSSxTQUFTLEdBQUcsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVDLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDckMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDcEMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixDQUFDO1FBQ0wsQ0FBQztRQUNELE9BQU8sVUFBVSxDQUFDO0lBQ3RCLENBQUM7b0hBbENRLG1CQUFtQjtvRUFBbkIsbUJBQW1CO1lDWDVCLEFBREosOEJBQW1FLGFBQ2xDO1lBQ3pCLG9FQUE2RjtZQU1yRyxBQURJLGlCQUFNLEVBQ0o7O1lBTndCLGVBQWlCO1lBQWpCLDRDQUFpQjs7O2lGRFVsQyxtQkFBbUI7Y0FML0IsU0FBUzsyQkFDSSxrQkFBa0I7O2tGQUluQixtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMyBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBZG1pbk1ldGFkYXRhU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL2FkbWluLW1ldGFkYXRhL2FkbWluLW1ldGFkYXRhLnN0b3JlJztcbmltcG9ydCB7XG4gICAgQWRtaW5MaW5rR3JvdXBNb2RlbCxcbiAgICBBZG1pbk1ldGFkYXRhLFxuICAgIEFkbWluTWV0YWRhdGFNb2RlbFxufSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9hZG1pbi1tZXRhZGF0YS9hZG1pbi1tZXRhZGF0YS5tb2RlbCc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLWFkbWluLXBhbmVsJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYWRtaW4tcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW10sXG59KVxuZXhwb3J0IGNsYXNzIEFkbWluUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgYWRtaW5QYW5lbERhdGE6IEFkbWluTWV0YWRhdGFNb2RlbFtdID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYWRtaW5NZXRhRGF0YTogQWRtaW5NZXRhZGF0YVN0b3JlKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGFkbWluRGF0YTogQWRtaW5NZXRhZGF0YSA9IHRoaXMuYWRtaW5NZXRhRGF0YS5nZXRBZG1pblBhbmVsKCk7XG4gICAgICAgIHRoaXMuc2V0RGF0YShhZG1pbkRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZXREYXRhKGFkbWluRGF0YTogQWRtaW5NZXRhZGF0YSk6IHZvaWQge1xuICAgICAgICBhZG1pbkRhdGEuZm9yRWFjaCgoe2ljb24sIHRpdGxlTGFiZWxLZXksIGRlc2NyaXB0aW9uTGFiZWxLZXksIGxpbmtHcm91cH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRtaW5QYW5lbERhdGEucHVzaCh7XG4gICAgICAgICAgICAgICAgaWNvbixcbiAgICAgICAgICAgICAgICB0aXRsZUxhYmVsS2V5LFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uTGFiZWxLZXksXG4gICAgICAgICAgICAgICAgbGlua0dyb3VwOiB0aGlzLnNldExpbmtHcm91cHMobGlua0dyb3VwKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZXRMaW5rR3JvdXBzKGdyb3VwRGF0YTogQWRtaW5MaW5rR3JvdXBNb2RlbCk6IEFkbWluTGlua0dyb3VwTW9kZWxbXSB7XG4gICAgICAgIGxldCBsaW5rR3JvdXBzOiBBZG1pbkxpbmtHcm91cE1vZGVsW10gPSBbXTtcbiAgICAgICAgbGV0IGxpbmtHcm91cEtleXM6IHN0cmluZ1tdID0gT2JqZWN0LmtleXMoZ3JvdXBEYXRhKTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsaW5rR3JvdXBLZXlzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBsZXQgbGlua0dyb3VwID0gZ3JvdXBEYXRhW2xpbmtHcm91cEtleXNbal1dO1xuICAgICAgICAgICAgbGV0IGxpbmtzID0gT2JqZWN0LnZhbHVlcyhsaW5rR3JvdXApO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5rcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxpbmtHcm91cHMucHVzaChsaW5rc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpbmtHcm91cHM7XG4gICAgfVxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMyBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuXG48ZGl2IGNsYXNzPVwiYWRtaW4tdmlldyBmdWxsLWhlaWdodC12aWV3IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwicm93IGZsZXgtZ3Jvdy0xXCI+XG4gICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGRhdGEgb2YgYWRtaW5QYW5lbERhdGFcIiBjbGFzcz1cImNvbC0xMiBjb2wtc20tNiBjb2wtbGctNCBjb2wteGwtMyBtdC0zIG1iLTNcIj5cblxuICAgICAgICAgICAgPHNjcm0tYWRtaW4tY2FyZCBbY29udGVudF09XCJkYXRhXCI+PC9zY3JtLWFkbWluLWNhcmQ+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==