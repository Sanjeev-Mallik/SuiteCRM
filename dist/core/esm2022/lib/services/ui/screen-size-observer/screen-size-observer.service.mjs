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
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { BehaviorSubject, merge } from 'rxjs';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/layout";
export var ScreenSize;
(function (ScreenSize) {
    ScreenSize["XSmall"] = "XSmall";
    ScreenSize["Small"] = "Small";
    ScreenSize["Medium"] = "Medium";
    ScreenSize["Large"] = "Large";
    ScreenSize["XLarge"] = "XLarge";
})(ScreenSize || (ScreenSize = {}));
export class ScreenSizeObserverService {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.screenSize = new BehaviorSubject(ScreenSize.Medium);
        this.screenSize$ = this.screenSize.asObservable();
        this.initScreenSizeObservable();
    }
    initScreenSizeObservable() {
        merge(this.breakpointObserver.observe([
            Breakpoints.XSmall,
        ]).pipe(map((result) => {
            if (result.matches) {
                return ScreenSize.XSmall;
            }
        })), this.breakpointObserver.observe([
            Breakpoints.Small,
        ]).pipe(map((result) => {
            if (result.matches) {
                return ScreenSize.Small;
            }
        })), this.breakpointObserver.observe([
            Breakpoints.Medium,
        ]).pipe(map((result) => {
            if (result.matches) {
                return ScreenSize.Medium;
            }
        })), this.breakpointObserver.observe([
            Breakpoints.Large,
        ]).pipe(map((result) => {
            if (result.matches) {
                return ScreenSize.Large;
            }
        })), this.breakpointObserver.observe([
            Breakpoints.XLarge,
        ]).pipe(map((result) => {
            if (result.matches) {
                return ScreenSize.XLarge;
            }
        }))).subscribe((value) => {
            if (value) {
                this.screenSize.next(value);
            }
        });
    }
    static { this.ɵfac = function ScreenSizeObserverService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ScreenSizeObserverService)(i0.ɵɵinject(i1.BreakpointObserver)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ScreenSizeObserverService, factory: ScreenSizeObserverService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ScreenSizeObserverService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.BreakpointObserver }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVuLXNpemUtb2JzZXJ2ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9zZXJ2aWNlcy91aS9zY3JlZW4tc2l6ZS1vYnNlcnZlci9zY3JlZW4tc2l6ZS1vYnNlcnZlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxrQkFBa0IsRUFBRSxXQUFXLEVBQWtCLE1BQU0scUJBQXFCLENBQUM7QUFDckYsT0FBTyxFQUFDLGVBQWUsRUFBRSxLQUFLLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDNUMsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7QUFFbkMsTUFBTSxDQUFOLElBQVksVUFNWDtBQU5ELFdBQVksVUFBVTtJQUNsQiwrQkFBaUIsQ0FBQTtJQUNqQiw2QkFBZSxDQUFBO0lBQ2YsK0JBQWlCLENBQUE7SUFDakIsNkJBQWUsQ0FBQTtJQUNmLCtCQUFpQixDQUFBO0FBQ3JCLENBQUMsRUFOVyxVQUFVLEtBQVYsVUFBVSxRQU1yQjtBQUtELE1BQU0sT0FBTyx5QkFBeUI7SUFLbEMsWUFBc0Isa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFINUQsZUFBVSxHQUFHLElBQUksZUFBZSxDQUFhLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoRSxnQkFBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUM7UUFHekMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVTLHdCQUF3QjtRQUM5QixLQUFLLENBQ0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQztZQUM1QixXQUFXLENBQUMsTUFBTTtTQUNyQixDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQXVCLEVBQUUsRUFBRTtZQUNwQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDakIsT0FBTyxVQUFVLENBQUMsTUFBTSxDQUFDO1lBQzdCLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQyxFQUNILElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7WUFDNUIsV0FBVyxDQUFDLEtBQUs7U0FDcEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUF1QixFQUFFLEVBQUU7WUFDcEMsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ2pCLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQztZQUM1QixDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUMsRUFDSCxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDO1lBQzVCLFdBQVcsQ0FBQyxNQUFNO1NBQ3JCLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBdUIsRUFBRSxFQUFFO1lBQ3BDLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNqQixPQUFPLFVBQVUsQ0FBQyxNQUFNLENBQUM7WUFDN0IsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDLEVBQ0gsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQztZQUM1QixXQUFXLENBQUMsS0FBSztTQUNwQixDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQXVCLEVBQUUsRUFBRTtZQUNwQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDakIsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDO1lBQzVCLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQyxFQUNILElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7WUFDNUIsV0FBVyxDQUFDLE1BQU07U0FDckIsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUF1QixFQUFFLEVBQUU7WUFDcEMsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ2pCLE9BQU8sVUFBVSxDQUFDLE1BQU0sQ0FBQztZQUM3QixDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FDTixDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ2xCLElBQUksS0FBSyxFQUFFLENBQUM7Z0JBQ1IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzswSEFuRFEseUJBQXlCO3VFQUF6Qix5QkFBeUIsV0FBekIseUJBQXlCLG1CQUZ0QixNQUFNOztpRkFFVCx5QkFBeUI7Y0FIckMsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCcmVha3BvaW50T2JzZXJ2ZXIsIEJyZWFrcG9pbnRzLCBCcmVha3BvaW50U3RhdGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9sYXlvdXQnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIG1lcmdlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7bWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBlbnVtIFNjcmVlblNpemUge1xuICAgIFhTbWFsbCA9ICdYU21hbGwnLFxuICAgIFNtYWxsID0gJ1NtYWxsJyxcbiAgICBNZWRpdW0gPSAnTWVkaXVtJyxcbiAgICBMYXJnZSA9ICdMYXJnZScsXG4gICAgWExhcmdlID0gJ1hMYXJnZSdcbn1cblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTY3JlZW5TaXplT2JzZXJ2ZXJTZXJ2aWNlIHtcblxuICAgIHNjcmVlblNpemUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFNjcmVlblNpemU+KFNjcmVlblNpemUuTWVkaXVtKTtcbiAgICBzY3JlZW5TaXplJCA9IHRoaXMuc2NyZWVuU2l6ZS5hc09ic2VydmFibGUoKTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBicmVha3BvaW50T2JzZXJ2ZXI6IEJyZWFrcG9pbnRPYnNlcnZlcikge1xuICAgICAgICB0aGlzLmluaXRTY3JlZW5TaXplT2JzZXJ2YWJsZSgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBpbml0U2NyZWVuU2l6ZU9ic2VydmFibGUoKTogdm9pZCB7XG4gICAgICAgIG1lcmdlKFxuICAgICAgICAgICAgdGhpcy5icmVha3BvaW50T2JzZXJ2ZXIub2JzZXJ2ZShbXG4gICAgICAgICAgICAgICAgQnJlYWtwb2ludHMuWFNtYWxsLFxuICAgICAgICAgICAgXSkucGlwZShtYXAoKHJlc3VsdDogQnJlYWtwb2ludFN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5tYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTY3JlZW5TaXplLlhTbWFsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSksXG4gICAgICAgICAgICB0aGlzLmJyZWFrcG9pbnRPYnNlcnZlci5vYnNlcnZlKFtcbiAgICAgICAgICAgICAgICBCcmVha3BvaW50cy5TbWFsbCxcbiAgICAgICAgICAgIF0pLnBpcGUobWFwKChyZXN1bHQ6IEJyZWFrcG9pbnRTdGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQubWF0Y2hlcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU2NyZWVuU2l6ZS5TbWFsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSksXG4gICAgICAgICAgICB0aGlzLmJyZWFrcG9pbnRPYnNlcnZlci5vYnNlcnZlKFtcbiAgICAgICAgICAgICAgICBCcmVha3BvaW50cy5NZWRpdW0sXG4gICAgICAgICAgICBdKS5waXBlKG1hcCgocmVzdWx0OiBCcmVha3BvaW50U3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0Lm1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFNjcmVlblNpemUuTWVkaXVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgIHRoaXMuYnJlYWtwb2ludE9ic2VydmVyLm9ic2VydmUoW1xuICAgICAgICAgICAgICAgIEJyZWFrcG9pbnRzLkxhcmdlLFxuICAgICAgICAgICAgXSkucGlwZShtYXAoKHJlc3VsdDogQnJlYWtwb2ludFN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5tYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTY3JlZW5TaXplLkxhcmdlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgIHRoaXMuYnJlYWtwb2ludE9ic2VydmVyLm9ic2VydmUoW1xuICAgICAgICAgICAgICAgIEJyZWFrcG9pbnRzLlhMYXJnZSxcbiAgICAgICAgICAgIF0pLnBpcGUobWFwKChyZXN1bHQ6IEJyZWFrcG9pbnRTdGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQubWF0Y2hlcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU2NyZWVuU2l6ZS5YTGFyZ2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpXG4gICAgICAgICkuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JlZW5TaXplLm5leHQodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=