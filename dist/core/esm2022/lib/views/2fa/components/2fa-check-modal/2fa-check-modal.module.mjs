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
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ModalModule } from "../../../../components/modal/components/modal/modal.module";
import { TwoFactorCheckModalComponent } from "./2fa-check-modal.component";
import { TwoFactorCheckModule } from "../2fa-check/2fa-check.module";
import { FormsModule } from "@angular/forms";
import { LabelModule } from "../../../../components/label/label.module";
import { TrustHtmlModule } from "../../../../pipes/trust-html/trust-html.module";
import { ButtonModule } from "../../../../components/button/button.module";
import * as i0 from "@angular/core";
export class TwoFactorCheckModalModule {
    static { this.ɵfac = function TwoFactorCheckModalModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TwoFactorCheckModalModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: TwoFactorCheckModalModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            ModalModule,
            TwoFactorCheckModule,
            FormsModule,
            LabelModule,
            TrustHtmlModule,
            ButtonModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TwoFactorCheckModalModule, [{
        type: NgModule,
        args: [{
                declarations: [TwoFactorCheckModalComponent],
                imports: [
                    CommonModule,
                    ModalModule,
                    TwoFactorCheckModule,
                    FormsModule,
                    LabelModule,
                    TrustHtmlModule,
                    ButtonModule,
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TwoFactorCheckModalModule, { declarations: [TwoFactorCheckModalComponent], imports: [CommonModule,
        ModalModule,
        TwoFactorCheckModule,
        FormsModule,
        LabelModule,
        TrustHtmlModule,
        ButtonModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMmZhLWNoZWNrLW1vZGFsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi92aWV3cy8yZmEvY29tcG9uZW50cy8yZmEtY2hlY2stbW9kYWwvMmZhLWNoZWNrLW1vZGFsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLDREQUE0RCxDQUFDO0FBQ3ZGLE9BQU8sRUFBQyw0QkFBNEIsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQ3pFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBQ25FLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDdEUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLGdEQUFnRCxDQUFDO0FBQy9FLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQzs7QUFjekUsTUFBTSxPQUFPLHlCQUF5QjswSEFBekIseUJBQXlCO21FQUF6Qix5QkFBeUI7dUVBVDlCLFlBQVk7WUFDWixXQUFXO1lBQ1gsb0JBQW9CO1lBQ3BCLFdBQVc7WUFDWCxXQUFXO1lBQ1gsZUFBZTtZQUNmLFlBQVk7O2lGQUdQLHlCQUF5QjtjQVpyQyxRQUFRO2VBQUM7Z0JBQ04sWUFBWSxFQUFFLENBQUMsNEJBQTRCLENBQUM7Z0JBQzVDLE9BQU8sRUFBRTtvQkFDTCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsb0JBQW9CO29CQUNwQixXQUFXO29CQUNYLFdBQVc7b0JBQ1gsZUFBZTtvQkFDZixZQUFZO2lCQUNmO2FBQ0o7O3dGQUNZLHlCQUF5QixtQkFYbkIsNEJBQTRCLGFBRXZDLFlBQVk7UUFDWixXQUFXO1FBQ1gsb0JBQW9CO1FBQ3BCLFdBQVc7UUFDWCxXQUFXO1FBQ1gsZUFBZTtRQUNmLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyNCBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHtNb2RhbE1vZHVsZX0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvbW9kYWwvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5tb2R1bGVcIjtcbmltcG9ydCB7VHdvRmFjdG9yQ2hlY2tNb2RhbENvbXBvbmVudH0gZnJvbSBcIi4vMmZhLWNoZWNrLW1vZGFsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtUd29GYWN0b3JDaGVja01vZHVsZX0gZnJvbSBcIi4uLzJmYS1jaGVjay8yZmEtY2hlY2subW9kdWxlXCI7XG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7TGFiZWxNb2R1bGV9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2xhYmVsL2xhYmVsLm1vZHVsZVwiO1xuaW1wb3J0IHtUcnVzdEh0bWxNb2R1bGV9IGZyb20gXCIuLi8uLi8uLi8uLi9waXBlcy90cnVzdC1odG1sL3RydXN0LWh0bWwubW9kdWxlXCI7XG5pbXBvcnQge0J1dHRvbk1vZHVsZX0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5tb2R1bGVcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtUd29GYWN0b3JDaGVja01vZGFsQ29tcG9uZW50XSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgTW9kYWxNb2R1bGUsXG4gICAgICAgIFR3b0ZhY3RvckNoZWNrTW9kdWxlLFxuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgTGFiZWxNb2R1bGUsXG4gICAgICAgIFRydXN0SHRtbE1vZHVsZSxcbiAgICAgICAgQnV0dG9uTW9kdWxlLFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgVHdvRmFjdG9yQ2hlY2tNb2RhbE1vZHVsZSB7XG59XG4iXX0=