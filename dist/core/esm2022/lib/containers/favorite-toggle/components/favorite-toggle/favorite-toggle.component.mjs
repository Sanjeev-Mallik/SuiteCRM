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
import { FavoritesService } from '../../../../services/navigation/favorites/favorites.service';
import { ImmediateDebounce } from '../../../../services/utils/immediate-debounce.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/navigation/favorites/favorites.service";
import * as i2 from "@angular/common";
import * as i3 from "../../../../components/button/button.component";
function FavoriteToggleComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-button", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("config", ctx_r0.addButton);
} }
function FavoriteToggleComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-button", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("config", ctx_r0.removeButton);
} }
export class FavoriteToggleComponent {
    constructor(handler) {
        this.handler = handler;
        this.favorite = false;
    }
    ngOnInit() {
        if (!this.record) {
            return;
        }
        this.debounceService = new ImmediateDebounce();
        this.debounceService.init();
        this.favorite = this?.record?.favorite ?? false;
        this.addButton = {
            klass: ['btn btn-sm btn-outline-light favorite-star favorite-off'],
            onClick: () => {
                this.debounceService.debounce(() => {
                    this.add();
                });
            },
            icon: 'star'
        };
        this.removeButton = {
            klass: ['btn btn-sm btn-outline-light favorite-star favorite-on'],
            onClick: () => {
                this.debounceService.debounce(() => {
                    this.remove();
                });
            },
            icon: 'star'
        };
    }
    ngOnDestroy() {
        this.debounceService.destroy();
    }
    add() {
        this.record.favorite = true;
        this.favorite = true;
        const favorite = this.handler.build(this.record.module, this.record.id);
        this.handler.add(this.record.module, favorite);
    }
    remove() {
        this.record.favorite = false;
        this.favorite = false;
        const favorite = this.handler.build(this.record.module, this.record.id);
        this.handler.remove(this.record.module, favorite);
    }
    static { this.ɵfac = function FavoriteToggleComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FavoriteToggleComponent)(i0.ɵɵdirectiveInject(i1.FavoritesService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FavoriteToggleComponent, selectors: [["scrm-favorite-toggle"]], inputs: { record: "record" }, decls: 2, vars: 2, consts: [[4, "ngIf"], [3, "config"]], template: function FavoriteToggleComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, FavoriteToggleComponent_ng_container_0_Template, 2, 1, "ng-container", 0)(1, FavoriteToggleComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.favorite);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.favorite);
        } }, dependencies: [i2.NgIf, i3.ButtonComponent], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FavoriteToggleComponent, [{
        type: Component,
        args: [{ selector: 'scrm-favorite-toggle', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container *ngIf=\"!favorite\">\n    <scrm-button [config]=\"addButton\"></scrm-button>\n</ng-container>\n<ng-container *ngIf=\"favorite\">\n    <scrm-button [config]=\"removeButton\"></scrm-button>\n</ng-container>\n" }]
    }], () => [{ type: i1.FavoritesService }], { record: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FavoriteToggleComponent, { className: "FavoriteToggleComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF2b3JpdGUtdG9nZ2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb250YWluZXJzL2Zhdm9yaXRlLXRvZ2dsZS9jb21wb25lbnRzL2Zhdm9yaXRlLXRvZ2dsZS9mYXZvcml0ZS10b2dnbGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbnRhaW5lcnMvZmF2b3JpdGUtdG9nZ2xlL2NvbXBvbmVudHMvZmF2b3JpdGUtdG9nZ2xlL2Zhdm9yaXRlLXRvZ2dsZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBR2xFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDZEQUE2RCxDQUFDO0FBQzdGLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHVEQUF1RCxDQUFDOzs7Ozs7SUNIeEYsNkJBQWdDO0lBQzVCLGlDQUFnRDs7OztJQUFuQyxjQUFvQjtJQUFwQix5Q0FBb0I7OztJQUVyQyw2QkFBK0I7SUFDM0IsaUNBQW1EOzs7O0lBQXRDLGNBQXVCO0lBQXZCLDRDQUF1Qjs7QURNeEMsTUFBTSxPQUFPLHVCQUF1QjtJQU9oQyxZQUNjLE9BQXlCO1FBQXpCLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBSnZDLGFBQVEsR0FBWSxLQUFLLENBQUM7SUFNMUIsQ0FBQztJQUVELFFBQVE7UUFFSixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2YsT0FBTztRQUNYLENBQUM7UUFFRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQztRQUMvQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRTVCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLElBQUksS0FBSyxDQUFDO1FBRWhELElBQUksQ0FBQyxTQUFTLEdBQUc7WUFDYixLQUFLLEVBQUUsQ0FBQyx5REFBeUQsQ0FBQztZQUNsRSxPQUFPLEVBQUUsR0FBRyxFQUFFO2dCQUNWLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRTtvQkFDL0IsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUNmLENBQUMsQ0FBQyxDQUFBO1lBQ04sQ0FBQztZQUNELElBQUksRUFBRSxNQUFNO1NBQ0ksQ0FBQztRQUVyQixJQUFJLENBQUMsWUFBWSxHQUFHO1lBQ2hCLEtBQUssRUFBRSxDQUFDLHdEQUF3RCxDQUFDO1lBQ2pFLE9BQU8sRUFBRSxHQUFHLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFO29CQUMvQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ2xCLENBQUMsQ0FBQyxDQUFBO1lBQ04sQ0FBQztZQUNELElBQUksRUFBRSxNQUFNO1NBQ0ksQ0FBQztJQUN6QixDQUFDO0lBRUQsV0FBVztRQUNQLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVTLEdBQUc7UUFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRVMsTUFBTTtRQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3RELENBQUM7d0hBNURRLHVCQUF1QjtvRUFBdkIsdUJBQXVCO1lDUHBDLEFBSEEsMEZBQWdDLDZFQUdEOztZQUhoQixvQ0FBZTtZQUdmLGNBQWM7WUFBZCxtQ0FBYzs7O2lGRE9oQix1QkFBdUI7Y0FMbkMsU0FBUzsyQkFDSSxzQkFBc0I7aURBS3ZCLE1BQU07a0JBQWQsS0FBSzs7a0ZBREcsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QnV0dG9uSW50ZXJmYWNlfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY29tcG9uZW50cy9idXR0b24vYnV0dG9uLm1vZGVsJztcbmltcG9ydCB7UmVjb3JkfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vcmVjb3JkL3JlY29yZC5tb2RlbCc7XG5pbXBvcnQge0Zhdm9yaXRlc1NlcnZpY2V9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL25hdmlnYXRpb24vZmF2b3JpdGVzL2Zhdm9yaXRlcy5zZXJ2aWNlJztcbmltcG9ydCB7SW1tZWRpYXRlRGVib3VuY2V9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL3V0aWxzL2ltbWVkaWF0ZS1kZWJvdW5jZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLWZhdm9yaXRlLXRvZ2dsZScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Zhdm9yaXRlLXRvZ2dsZS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBGYXZvcml0ZVRvZ2dsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBASW5wdXQoKSByZWNvcmQ6IFJlY29yZDtcbiAgICBhZGRCdXR0b246IEJ1dHRvbkludGVyZmFjZTtcbiAgICByZW1vdmVCdXR0b246IEJ1dHRvbkludGVyZmFjZTtcbiAgICBmYXZvcml0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByb3RlY3RlZCBkZWJvdW5jZVNlcnZpY2U6IEltbWVkaWF0ZURlYm91bmNlO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBoYW5kbGVyOiBGYXZvcml0ZXNTZXJ2aWNlLFxuICAgICkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgICAgIGlmICghdGhpcy5yZWNvcmQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGVib3VuY2VTZXJ2aWNlID0gbmV3IEltbWVkaWF0ZURlYm91bmNlKCk7XG4gICAgICAgIHRoaXMuZGVib3VuY2VTZXJ2aWNlLmluaXQoKTtcblxuICAgICAgICB0aGlzLmZhdm9yaXRlID0gdGhpcz8ucmVjb3JkPy5mYXZvcml0ZSA/PyBmYWxzZTtcblxuICAgICAgICB0aGlzLmFkZEJ1dHRvbiA9IHtcbiAgICAgICAgICAgIGtsYXNzOiBbJ2J0biBidG4tc20gYnRuLW91dGxpbmUtbGlnaHQgZmF2b3JpdGUtc3RhciBmYXZvcml0ZS1vZmYnXSxcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlYm91bmNlU2VydmljZS5kZWJvdW5jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpY29uOiAnc3RhcidcbiAgICAgICAgfSBhcyBCdXR0b25JbnRlcmZhY2U7XG5cbiAgICAgICAgdGhpcy5yZW1vdmVCdXR0b24gPSB7XG4gICAgICAgICAgICBrbGFzczogWydidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLWxpZ2h0IGZhdm9yaXRlLXN0YXIgZmF2b3JpdGUtb24nXSxcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlYm91bmNlU2VydmljZS5kZWJvdW5jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpY29uOiAnc3RhcidcbiAgICAgICAgfSBhcyBCdXR0b25JbnRlcmZhY2U7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGVib3VuY2VTZXJ2aWNlLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWRkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlY29yZC5mYXZvcml0ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZmF2b3JpdGUgPSB0cnVlO1xuICAgICAgICBjb25zdCBmYXZvcml0ZSA9IHRoaXMuaGFuZGxlci5idWlsZCh0aGlzLnJlY29yZC5tb2R1bGUsIHRoaXMucmVjb3JkLmlkKTtcbiAgICAgICAgdGhpcy5oYW5kbGVyLmFkZCh0aGlzLnJlY29yZC5tb2R1bGUsIGZhdm9yaXRlKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVtb3ZlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlY29yZC5mYXZvcml0ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZhdm9yaXRlID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGZhdm9yaXRlID0gdGhpcy5oYW5kbGVyLmJ1aWxkKHRoaXMucmVjb3JkLm1vZHVsZSwgdGhpcy5yZWNvcmQuaWQpO1xuICAgICAgICB0aGlzLmhhbmRsZXIucmVtb3ZlKHRoaXMucmVjb3JkLm1vZHVsZSwgZmF2b3JpdGUpO1xuICAgIH1cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjxuZy1jb250YWluZXIgKm5nSWY9XCIhZmF2b3JpdGVcIj5cbiAgICA8c2NybS1idXR0b24gW2NvbmZpZ109XCJhZGRCdXR0b25cIj48L3Njcm0tYnV0dG9uPlxuPC9uZy1jb250YWluZXI+XG48bmctY29udGFpbmVyICpuZ0lmPVwiZmF2b3JpdGVcIj5cbiAgICA8c2NybS1idXR0b24gW2NvbmZpZ109XCJyZW1vdmVCdXR0b25cIj48L3Njcm0tYnV0dG9uPlxuPC9uZy1jb250YWluZXI+XG4iXX0=