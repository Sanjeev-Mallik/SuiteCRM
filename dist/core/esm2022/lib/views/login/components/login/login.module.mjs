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
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginUiComponent } from './login.component';
import { LoginUiRoutes } from './login.routes';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonLoadingUiModule } from '../../../../directives/button-loading/button-loading.module';
import { LogoUiModule } from '../../../../components/logo/logo.module';
import { ImageModule } from '../../../../components/image/image.module';
import { TwoFactorCheckModule } from "../../../2fa/components/2fa-check/2fa-check.module";
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class LoginUiModule {
    static { this.ɵfac = function LoginUiModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LoginUiModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: LoginUiModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [FormsModule,
            LogoUiModule,
            RouterModule.forChild(LoginUiRoutes),
            CommonModule,
            AngularSvgIconModule,
            ImageModule,
            ButtonLoadingUiModule,
            TwoFactorCheckModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoginUiModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    LoginUiComponent
                ],
                exports: [
                    LoginUiComponent
                ],
                imports: [
                    FormsModule,
                    LogoUiModule,
                    RouterModule.forChild(LoginUiRoutes),
                    CommonModule,
                    AngularSvgIconModule,
                    ImageModule,
                    ButtonLoadingUiModule,
                    TwoFactorCheckModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(LoginUiModule, { declarations: [LoginUiComponent], imports: [FormsModule,
        LogoUiModule, i1.RouterModule, CommonModule,
        AngularSvgIconModule,
        ImageModule,
        ButtonLoadingUiModule,
        TwoFactorCheckModule], exports: [LoginUiComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3ZpZXdzL2xvZ2luL2NvbXBvbmVudHMvbG9naW4vbG9naW4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSw2REFBNkQsQ0FBQztBQUNsRyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0seUNBQXlDLENBQUM7QUFDckUsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLG9EQUFvRCxDQUFDOzs7QUFvQnhGLE1BQU0sT0FBTyxhQUFhOzhHQUFiLGFBQWE7bUVBQWIsYUFBYTt1RUFWbEIsV0FBVztZQUNYLFlBQVk7WUFDWixZQUFZLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQztZQUNwQyxZQUFZO1lBQ1osb0JBQW9CO1lBQ3BCLFdBQVc7WUFDWCxxQkFBcUI7WUFDckIsb0JBQW9COztpRkFHZixhQUFhO2NBbEJ6QixRQUFRO2VBQUM7Z0JBQ04sWUFBWSxFQUFFO29CQUNWLGdCQUFnQjtpQkFDbkI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLGdCQUFnQjtpQkFDbkI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLFdBQVc7b0JBQ1gsWUFBWTtvQkFDWixZQUFZLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQztvQkFDcEMsWUFBWTtvQkFDWixvQkFBb0I7b0JBQ3BCLFdBQVc7b0JBQ1gscUJBQXFCO29CQUNyQixvQkFBb0I7aUJBQ3ZCO2FBQ0o7O3dGQUNZLGFBQWEsbUJBaEJsQixnQkFBZ0IsYUFNaEIsV0FBVztRQUNYLFlBQVksbUJBRVosWUFBWTtRQUNaLG9CQUFvQjtRQUNwQixXQUFXO1FBQ1gscUJBQXFCO1FBQ3JCLG9CQUFvQixhQVZwQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1JvdXRlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7TG9naW5VaUNvbXBvbmVudH0gZnJvbSAnLi9sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHtMb2dpblVpUm91dGVzfSBmcm9tICcuL2xvZ2luLnJvdXRlcyc7XG5pbXBvcnQge0FuZ3VsYXJTdmdJY29uTW9kdWxlfSBmcm9tICdhbmd1bGFyLXN2Zy1pY29uJztcbmltcG9ydCB7QnV0dG9uTG9hZGluZ1VpTW9kdWxlfSBmcm9tICcuLi8uLi8uLi8uLi9kaXJlY3RpdmVzL2J1dHRvbi1sb2FkaW5nL2J1dHRvbi1sb2FkaW5nLm1vZHVsZSc7XG5pbXBvcnQge0xvZ29VaU1vZHVsZX0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9sb2dvL2xvZ28ubW9kdWxlJztcbmltcG9ydCB7SW1hZ2VNb2R1bGV9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaW1hZ2UvaW1hZ2UubW9kdWxlJztcbmltcG9ydCB7VHdvRmFjdG9yQ2hlY2tNb2R1bGV9IGZyb20gXCIuLi8uLi8uLi8yZmEvY29tcG9uZW50cy8yZmEtY2hlY2svMmZhLWNoZWNrLm1vZHVsZVwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBMb2dpblVpQ29tcG9uZW50XG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIExvZ2luVWlDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgRm9ybXNNb2R1bGUsXG4gICAgICAgIExvZ29VaU1vZHVsZSxcbiAgICAgICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKExvZ2luVWlSb3V0ZXMpLFxuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIEFuZ3VsYXJTdmdJY29uTW9kdWxlLFxuICAgICAgICBJbWFnZU1vZHVsZSxcbiAgICAgICAgQnV0dG9uTG9hZGluZ1VpTW9kdWxlLFxuICAgICAgICBUd29GYWN0b3JDaGVja01vZHVsZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5VaU1vZHVsZSB7XG59XG4iXX0=