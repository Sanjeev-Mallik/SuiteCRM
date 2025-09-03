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
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HistorySidebarWidgetComponent } from './history-sidebar-widget.component';
import { FieldModule } from '../../../../fields/field.module';
import { WidgetPanelModule } from '../../../../components/widget-panel/widget-panel.module';
import { ImageModule } from '../../../../components/image/image.module';
import { LoadingSpinnerModule } from '../../../../components/loading-spinner/loading-spinner.module';
import { LabelModule } from '../../../../components/label/label.module';
import { ChartMessageAreaModule } from '../../../../components/chart/components/chart-message-area/chart-message-area.module';
import { RouterModule } from "@angular/router";
import { ButtonModule } from "../../../../components/button/button.module";
import { HistorySidebarSkeletonLoadingComponent } from "./history-sidebar-skeleton-loading/history-sidebar-skeleton-loading.component";
import * as i0 from "@angular/core";
export class HistorySidebarWidgetModule {
    static { this.ɵfac = function HistorySidebarWidgetModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HistorySidebarWidgetModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: HistorySidebarWidgetModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            ScrollingModule,
            ImageModule,
            FieldModule,
            WidgetPanelModule,
            LoadingSpinnerModule,
            LabelModule,
            ChartMessageAreaModule,
            RouterModule,
            ButtonModule,
            HistorySidebarSkeletonLoadingComponent] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HistorySidebarWidgetModule, [{
        type: NgModule,
        args: [{
                declarations: [HistorySidebarWidgetComponent],
                exports: [
                    HistorySidebarWidgetComponent
                ],
                imports: [
                    CommonModule,
                    ScrollingModule,
                    ImageModule,
                    FieldModule,
                    WidgetPanelModule,
                    LoadingSpinnerModule,
                    LabelModule,
                    ChartMessageAreaModule,
                    RouterModule,
                    ButtonModule,
                    HistorySidebarSkeletonLoadingComponent,
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(HistorySidebarWidgetModule, { declarations: [HistorySidebarWidgetComponent], imports: [CommonModule,
        ScrollingModule,
        ImageModule,
        FieldModule,
        WidgetPanelModule,
        LoadingSpinnerModule,
        LabelModule,
        ChartMessageAreaModule,
        RouterModule,
        ButtonModule,
        HistorySidebarSkeletonLoadingComponent], exports: [HistorySidebarWidgetComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlzdG9yeS1zaWRlYmFyLXdpZGdldC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9zaWRlYmFyLXdpZGdldC9jb21wb25lbnRzL2hpc3Rvcnktc2lkZWJhci13aWRnZXQvaGlzdG9yeS1zaWRlYmFyLXdpZGdldC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUNqRixPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDNUQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0seURBQXlELENBQUM7QUFDMUYsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLCtEQUErRCxDQUFDO0FBQ25HLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUN0RSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSxzRkFBc0YsQ0FBQztBQUM1SCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ3pFLE9BQU8sRUFDSCxzQ0FBc0MsRUFDekMsTUFBTSwrRUFBK0UsQ0FBQzs7QUFxQnZGLE1BQU0sT0FBTywwQkFBMEI7MkhBQTFCLDBCQUEwQjttRUFBMUIsMEJBQTBCO3VFQWIvQixZQUFZO1lBQ1osZUFBZTtZQUNmLFdBQVc7WUFDWCxXQUFXO1lBQ1gsaUJBQWlCO1lBQ2pCLG9CQUFvQjtZQUNwQixXQUFXO1lBQ1gsc0JBQXNCO1lBQ3RCLFlBQVk7WUFDWixZQUFZO1lBQ1osc0NBQXNDOztpRkFHakMsMEJBQTBCO2NBbkJ0QyxRQUFRO2VBQUM7Z0JBQ04sWUFBWSxFQUFFLENBQUMsNkJBQTZCLENBQUM7Z0JBQzdDLE9BQU8sRUFBRTtvQkFDTCw2QkFBNkI7aUJBQ2hDO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxZQUFZO29CQUNaLGVBQWU7b0JBQ2YsV0FBVztvQkFDWCxXQUFXO29CQUNYLGlCQUFpQjtvQkFDakIsb0JBQW9CO29CQUNwQixXQUFXO29CQUNYLHNCQUFzQjtvQkFDdEIsWUFBWTtvQkFDWixZQUFZO29CQUNaLHNDQUFzQztpQkFDekM7YUFDSjs7d0ZBQ1ksMEJBQTBCLG1CQWxCcEIsNkJBQTZCLGFBS3hDLFlBQVk7UUFDWixlQUFlO1FBQ2YsV0FBVztRQUNYLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsb0JBQW9CO1FBQ3BCLFdBQVc7UUFDWCxzQkFBc0I7UUFDdEIsWUFBWTtRQUNaLFlBQVk7UUFDWixzQ0FBc0MsYUFidEMsNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtTY3JvbGxpbmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xuaW1wb3J0IHtIaXN0b3J5U2lkZWJhcldpZGdldENvbXBvbmVudH0gZnJvbSAnLi9oaXN0b3J5LXNpZGViYXItd2lkZ2V0LmNvbXBvbmVudCc7XG5pbXBvcnQge0ZpZWxkTW9kdWxlfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZHMvZmllbGQubW9kdWxlJztcbmltcG9ydCB7V2lkZ2V0UGFuZWxNb2R1bGV9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvd2lkZ2V0LXBhbmVsL3dpZGdldC1wYW5lbC5tb2R1bGUnO1xuaW1wb3J0IHtJbWFnZU1vZHVsZX0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9pbWFnZS9pbWFnZS5tb2R1bGUnO1xuaW1wb3J0IHtMb2FkaW5nU3Bpbm5lck1vZHVsZX0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9sb2FkaW5nLXNwaW5uZXIvbG9hZGluZy1zcGlubmVyLm1vZHVsZSc7XG5pbXBvcnQge0xhYmVsTW9kdWxlfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2xhYmVsL2xhYmVsLm1vZHVsZSc7XG5pbXBvcnQge0NoYXJ0TWVzc2FnZUFyZWFNb2R1bGV9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvY2hhcnQvY29tcG9uZW50cy9jaGFydC1tZXNzYWdlLWFyZWEvY2hhcnQtbWVzc2FnZS1hcmVhLm1vZHVsZSc7XG5pbXBvcnQge1JvdXRlck1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtCdXR0b25Nb2R1bGV9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24ubW9kdWxlXCI7XG5pbXBvcnQge1xuICAgIEhpc3RvcnlTaWRlYmFyU2tlbGV0b25Mb2FkaW5nQ29tcG9uZW50XG59IGZyb20gXCIuL2hpc3Rvcnktc2lkZWJhci1za2VsZXRvbi1sb2FkaW5nL2hpc3Rvcnktc2lkZWJhci1za2VsZXRvbi1sb2FkaW5nLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW0hpc3RvcnlTaWRlYmFyV2lkZ2V0Q29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIEhpc3RvcnlTaWRlYmFyV2lkZ2V0Q29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgU2Nyb2xsaW5nTW9kdWxlLFxuICAgICAgICBJbWFnZU1vZHVsZSxcbiAgICAgICAgRmllbGRNb2R1bGUsXG4gICAgICAgIFdpZGdldFBhbmVsTW9kdWxlLFxuICAgICAgICBMb2FkaW5nU3Bpbm5lck1vZHVsZSxcbiAgICAgICAgTGFiZWxNb2R1bGUsXG4gICAgICAgIENoYXJ0TWVzc2FnZUFyZWFNb2R1bGUsXG4gICAgICAgIFJvdXRlck1vZHVsZSxcbiAgICAgICAgQnV0dG9uTW9kdWxlLFxuICAgICAgICBIaXN0b3J5U2lkZWJhclNrZWxldG9uTG9hZGluZ0NvbXBvbmVudCxcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEhpc3RvcnlTaWRlYmFyV2lkZ2V0TW9kdWxlIHtcbn1cbiJdfQ==