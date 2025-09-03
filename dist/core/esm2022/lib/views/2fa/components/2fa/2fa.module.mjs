/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2024 SalesAgility Ltd.
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
import { TwoFactorComponent } from "./2fa.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { LabelModule } from "../../../../components/label/label.module";
import { ImageModule } from "../../../../components/image/image.module";
import { ModuleTitleModule } from '../../../../components/module-title/module-title.module';
import { RecordContainerModule } from "../../../record/components/record-container/record-container.module";
import { RecordHeaderModule } from "../../../record/components/record-header/record-header.module";
import { StatusBarModule } from "../../../../components/status-bar/status-bar.module";
import { FieldModule } from "../../../../fields/field.module";
import { ButtonModule } from "../../../../components/button/button.module";
import { SvgIconComponent } from "angular-svg-icon";
import { HtmlSanitizeModule } from "../../../../pipes/html-sanitize/html-sanitize.module";
import { TrustHtmlModule } from "../../../../pipes/trust-html/trust-html.module";
import { PaginatorModule } from "primeng/paginator";
import { TwoFactorCheckModule } from "../2fa-check/2fa-check.module";
import { RecordThreadModule } from "../../../../containers/record-thread/components/record-thread/record-thread.module";
import { WidgetPanelModule } from "../../../../components/widget-panel/widget-panel.module";
import * as i0 from "@angular/core";
export class TwoFactorModule {
    static { this.ɵfac = function TwoFactorModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TwoFactorModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: TwoFactorModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            RouterModule,
            ModuleTitleModule,
            LabelModule,
            ImageModule,
            RecordContainerModule,
            RecordHeaderModule,
            StatusBarModule,
            FieldModule,
            ButtonModule,
            SvgIconComponent,
            HtmlSanitizeModule,
            TrustHtmlModule,
            PaginatorModule,
            TwoFactorCheckModule,
            RecordThreadModule,
            WidgetPanelModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TwoFactorModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    TwoFactorComponent
                ],
                exports: [
                    TwoFactorComponent
                ],
                imports: [
                    CommonModule,
                    RouterModule,
                    ModuleTitleModule,
                    LabelModule,
                    ImageModule,
                    RecordContainerModule,
                    RecordHeaderModule,
                    StatusBarModule,
                    FieldModule,
                    ButtonModule,
                    SvgIconComponent,
                    HtmlSanitizeModule,
                    TrustHtmlModule,
                    PaginatorModule,
                    TwoFactorCheckModule,
                    RecordThreadModule,
                    WidgetPanelModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TwoFactorModule, { declarations: [TwoFactorComponent], imports: [CommonModule,
        RouterModule,
        ModuleTitleModule,
        LabelModule,
        ImageModule,
        RecordContainerModule,
        RecordHeaderModule,
        StatusBarModule,
        FieldModule,
        ButtonModule,
        SvgIconComponent,
        HtmlSanitizeModule,
        TrustHtmlModule,
        PaginatorModule,
        TwoFactorCheckModule,
        RecordThreadModule,
        WidgetPanelModule], exports: [TwoFactorComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMmZhLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi92aWV3cy8yZmEvY29tcG9uZW50cy8yZmEvMmZhLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUN0RSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDdEUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0seURBQXlELENBQUM7QUFDMUYsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0scUVBQXFFLENBQUM7QUFDMUcsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sK0RBQStELENBQUM7QUFDakcsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHFEQUFxRCxDQUFDO0FBQ3BGLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUM1RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDekUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDbEQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sc0RBQXNELENBQUM7QUFDeEYsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLGdEQUFnRCxDQUFDO0FBQy9FLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUNuRSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxvRkFBb0YsQ0FBQztBQUN0SCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSx5REFBeUQsQ0FBQzs7QUE2QjFGLE1BQU0sT0FBTyxlQUFlO2dIQUFmLGVBQWU7bUVBQWYsZUFBZTt1RUFuQnBCLFlBQVk7WUFDWixZQUFZO1lBQ1osaUJBQWlCO1lBQ2pCLFdBQVc7WUFDWCxXQUFXO1lBQ1gscUJBQXFCO1lBQ3JCLGtCQUFrQjtZQUNsQixlQUFlO1lBQ2YsV0FBVztZQUNYLFlBQVk7WUFDWixnQkFBZ0I7WUFDaEIsa0JBQWtCO1lBQ2xCLGVBQWU7WUFDZixlQUFlO1lBQ2Ysb0JBQW9CO1lBQ3BCLGtCQUFrQjtZQUNsQixpQkFBaUI7O2lGQUdaLGVBQWU7Y0EzQjNCLFFBQVE7ZUFBQztnQkFDTixZQUFZLEVBQUU7b0JBQ1Ysa0JBQWtCO2lCQUNyQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ0wsa0JBQWtCO2lCQUNyQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ0wsWUFBWTtvQkFDWixZQUFZO29CQUNaLGlCQUFpQjtvQkFDakIsV0FBVztvQkFDWCxXQUFXO29CQUNYLHFCQUFxQjtvQkFDckIsa0JBQWtCO29CQUNsQixlQUFlO29CQUNmLFdBQVc7b0JBQ1gsWUFBWTtvQkFDWixnQkFBZ0I7b0JBQ2hCLGtCQUFrQjtvQkFDbEIsZUFBZTtvQkFDZixlQUFlO29CQUNmLG9CQUFvQjtvQkFDcEIsa0JBQWtCO29CQUNsQixpQkFBaUI7aUJBQ3BCO2FBQ0o7O3dGQUNZLGVBQWUsbUJBekJwQixrQkFBa0IsYUFNbEIsWUFBWTtRQUNaLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsV0FBVztRQUNYLFdBQVc7UUFDWCxxQkFBcUI7UUFDckIsa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixXQUFXO1FBQ1gsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLGVBQWU7UUFDZixvQkFBb0I7UUFDcEIsa0JBQWtCO1FBQ2xCLGlCQUFpQixhQW5CakIsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjQgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VHdvRmFjdG9yQ29tcG9uZW50fSBmcm9tIFwiLi8yZmEuY29tcG9uZW50XCI7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHtSb3V0ZXJNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7TGFiZWxNb2R1bGV9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2xhYmVsL2xhYmVsLm1vZHVsZVwiO1xuaW1wb3J0IHtJbWFnZU1vZHVsZX0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaW1hZ2UvaW1hZ2UubW9kdWxlXCI7XG5pbXBvcnQge01vZHVsZVRpdGxlTW9kdWxlfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL21vZHVsZS10aXRsZS9tb2R1bGUtdGl0bGUubW9kdWxlJztcbmltcG9ydCB7UmVjb3JkQ29udGFpbmVyTW9kdWxlfSBmcm9tIFwiLi4vLi4vLi4vcmVjb3JkL2NvbXBvbmVudHMvcmVjb3JkLWNvbnRhaW5lci9yZWNvcmQtY29udGFpbmVyLm1vZHVsZVwiO1xuaW1wb3J0IHtSZWNvcmRIZWFkZXJNb2R1bGV9IGZyb20gXCIuLi8uLi8uLi9yZWNvcmQvY29tcG9uZW50cy9yZWNvcmQtaGVhZGVyL3JlY29yZC1oZWFkZXIubW9kdWxlXCI7XG5pbXBvcnQge1N0YXR1c0Jhck1vZHVsZX0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvc3RhdHVzLWJhci9zdGF0dXMtYmFyLm1vZHVsZVwiO1xuaW1wb3J0IHtGaWVsZE1vZHVsZX0gZnJvbSBcIi4uLy4uLy4uLy4uL2ZpZWxkcy9maWVsZC5tb2R1bGVcIjtcbmltcG9ydCB7QnV0dG9uTW9kdWxlfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9idXR0b24vYnV0dG9uLm1vZHVsZVwiO1xuaW1wb3J0IHtTdmdJY29uQ29tcG9uZW50fSBmcm9tIFwiYW5ndWxhci1zdmctaWNvblwiO1xuaW1wb3J0IHtIdG1sU2FuaXRpemVNb2R1bGV9IGZyb20gXCIuLi8uLi8uLi8uLi9waXBlcy9odG1sLXNhbml0aXplL2h0bWwtc2FuaXRpemUubW9kdWxlXCI7XG5pbXBvcnQge1RydXN0SHRtbE1vZHVsZX0gZnJvbSBcIi4uLy4uLy4uLy4uL3BpcGVzL3RydXN0LWh0bWwvdHJ1c3QtaHRtbC5tb2R1bGVcIjtcbmltcG9ydCB7UGFnaW5hdG9yTW9kdWxlfSBmcm9tIFwicHJpbWVuZy9wYWdpbmF0b3JcIjtcbmltcG9ydCB7VHdvRmFjdG9yQ2hlY2tNb2R1bGV9IGZyb20gXCIuLi8yZmEtY2hlY2svMmZhLWNoZWNrLm1vZHVsZVwiO1xuaW1wb3J0IHtSZWNvcmRUaHJlYWRNb2R1bGV9IGZyb20gXCIuLi8uLi8uLi8uLi9jb250YWluZXJzL3JlY29yZC10aHJlYWQvY29tcG9uZW50cy9yZWNvcmQtdGhyZWFkL3JlY29yZC10aHJlYWQubW9kdWxlXCI7XG5pbXBvcnQge1dpZGdldFBhbmVsTW9kdWxlfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy93aWRnZXQtcGFuZWwvd2lkZ2V0LXBhbmVsLm1vZHVsZVwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBUd29GYWN0b3JDb21wb25lbnRcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgVHdvRmFjdG9yQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgUm91dGVyTW9kdWxlLFxuICAgICAgICBNb2R1bGVUaXRsZU1vZHVsZSxcbiAgICAgICAgTGFiZWxNb2R1bGUsXG4gICAgICAgIEltYWdlTW9kdWxlLFxuICAgICAgICBSZWNvcmRDb250YWluZXJNb2R1bGUsXG4gICAgICAgIFJlY29yZEhlYWRlck1vZHVsZSxcbiAgICAgICAgU3RhdHVzQmFyTW9kdWxlLFxuICAgICAgICBGaWVsZE1vZHVsZSxcbiAgICAgICAgQnV0dG9uTW9kdWxlLFxuICAgICAgICBTdmdJY29uQ29tcG9uZW50LFxuICAgICAgICBIdG1sU2FuaXRpemVNb2R1bGUsXG4gICAgICAgIFRydXN0SHRtbE1vZHVsZSxcbiAgICAgICAgUGFnaW5hdG9yTW9kdWxlLFxuICAgICAgICBUd29GYWN0b3JDaGVja01vZHVsZSxcbiAgICAgICAgUmVjb3JkVGhyZWFkTW9kdWxlLFxuICAgICAgICBXaWRnZXRQYW5lbE1vZHVsZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgVHdvRmFjdG9yTW9kdWxlIHtcbn1cbiJdfQ==