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
import { BaseDateTimeComponent } from './datetime/base-datetime.component';
import { BaseFieldComponent } from './base-field.component';
import { BaseNumberComponent } from './base-number.component';
import { BaseBooleanComponent } from './base-boolean.component';
import { BaseEnumComponent } from './base-enum.component';
import { BaseMultiEnumComponent } from './base-multienum.component';
import { BaseNameComponent } from './base-name.component';
import { BaseRelateComponent } from './base-relate.component';
import { BaseDateComponent } from './datetime/base-date.component';
import * as i0 from "@angular/core";
export class BaseFieldModule {
    static { this.ɵfac = function BaseFieldModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BaseFieldModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: BaseFieldModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseFieldModule, [{
        type: NgModule,
        args: [{
                exports: [
                    BaseBooleanComponent,
                    BaseEnumComponent,
                    BaseFieldComponent,
                    BaseMultiEnumComponent,
                    BaseNameComponent,
                    BaseNumberComponent,
                    BaseRelateComponent,
                    BaseDateTimeComponent,
                    BaseDateComponent
                ],
                declarations: [
                    BaseBooleanComponent,
                    BaseEnumComponent,
                    BaseFieldComponent,
                    BaseMultiEnumComponent,
                    BaseNameComponent,
                    BaseNumberComponent,
                    BaseRelateComponent,
                    BaseDateTimeComponent,
                    BaseDateComponent
                ],
                imports: [
                    CommonModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(BaseFieldModule, { declarations: [BaseBooleanComponent,
        BaseEnumComponent,
        BaseFieldComponent,
        BaseMultiEnumComponent,
        BaseNameComponent,
        BaseNumberComponent,
        BaseRelateComponent,
        BaseDateTimeComponent,
        BaseDateComponent], imports: [CommonModule], exports: [BaseBooleanComponent,
        BaseEnumComponent,
        BaseFieldComponent,
        BaseMultiEnumComponent,
        BaseNameComponent,
        BaseNumberComponent,
        BaseRelateComponent,
        BaseDateTimeComponent,
        BaseDateComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1maWVsZC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvZmllbGRzL2Jhc2UvYmFzZS1maWVsZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLG9DQUFvQyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQzVELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQzlELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3hELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQ2xFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3hELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQzVELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGdDQUFnQyxDQUFDOztBQTZCakUsTUFBTSxPQUFPLGVBQWU7Z0hBQWYsZUFBZTttRUFBZixlQUFlO3VFQUhwQixZQUFZOztpRkFHUCxlQUFlO2NBM0IzQixRQUFRO2VBQUM7Z0JBQ04sT0FBTyxFQUFFO29CQUNMLG9CQUFvQjtvQkFDcEIsaUJBQWlCO29CQUNqQixrQkFBa0I7b0JBQ2xCLHNCQUFzQjtvQkFDdEIsaUJBQWlCO29CQUNqQixtQkFBbUI7b0JBQ25CLG1CQUFtQjtvQkFDbkIscUJBQXFCO29CQUNyQixpQkFBaUI7aUJBQ3BCO2dCQUNELFlBQVksRUFBRTtvQkFDVixvQkFBb0I7b0JBQ3BCLGlCQUFpQjtvQkFDakIsa0JBQWtCO29CQUNsQixzQkFBc0I7b0JBQ3RCLGlCQUFpQjtvQkFDakIsbUJBQW1CO29CQUNuQixtQkFBbUI7b0JBQ25CLHFCQUFxQjtvQkFDckIsaUJBQWlCO2lCQUNwQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ0wsWUFBWTtpQkFDZjthQUNKOzt3RkFDWSxlQUFlLG1CQWRwQixvQkFBb0I7UUFDcEIsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixzQkFBc0I7UUFDdEIsaUJBQWlCO1FBQ2pCLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIscUJBQXFCO1FBQ3JCLGlCQUFpQixhQUdqQixZQUFZLGFBdEJaLG9CQUFvQjtRQUNwQixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLHNCQUFzQjtRQUN0QixpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixxQkFBcUI7UUFDckIsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtCYXNlRGF0ZVRpbWVDb21wb25lbnR9IGZyb20gJy4vZGF0ZXRpbWUvYmFzZS1kYXRldGltZS5jb21wb25lbnQnO1xuaW1wb3J0IHtCYXNlRmllbGRDb21wb25lbnR9IGZyb20gJy4vYmFzZS1maWVsZC5jb21wb25lbnQnO1xuaW1wb3J0IHtCYXNlTnVtYmVyQ29tcG9uZW50fSBmcm9tICcuL2Jhc2UtbnVtYmVyLmNvbXBvbmVudCc7XG5pbXBvcnQge0Jhc2VCb29sZWFuQ29tcG9uZW50fSBmcm9tICcuL2Jhc2UtYm9vbGVhbi5jb21wb25lbnQnO1xuaW1wb3J0IHtCYXNlRW51bUNvbXBvbmVudH0gZnJvbSAnLi9iYXNlLWVudW0uY29tcG9uZW50JztcbmltcG9ydCB7QmFzZU11bHRpRW51bUNvbXBvbmVudH0gZnJvbSAnLi9iYXNlLW11bHRpZW51bS5jb21wb25lbnQnO1xuaW1wb3J0IHtCYXNlTmFtZUNvbXBvbmVudH0gZnJvbSAnLi9iYXNlLW5hbWUuY29tcG9uZW50JztcbmltcG9ydCB7QmFzZVJlbGF0ZUNvbXBvbmVudH0gZnJvbSAnLi9iYXNlLXJlbGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHtCYXNlRGF0ZUNvbXBvbmVudH0gZnJvbSAnLi9kYXRldGltZS9iYXNlLWRhdGUuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIEJhc2VCb29sZWFuQ29tcG9uZW50LFxuICAgICAgICBCYXNlRW51bUNvbXBvbmVudCxcbiAgICAgICAgQmFzZUZpZWxkQ29tcG9uZW50LFxuICAgICAgICBCYXNlTXVsdGlFbnVtQ29tcG9uZW50LFxuICAgICAgICBCYXNlTmFtZUNvbXBvbmVudCxcbiAgICAgICAgQmFzZU51bWJlckNvbXBvbmVudCxcbiAgICAgICAgQmFzZVJlbGF0ZUNvbXBvbmVudCxcbiAgICAgICAgQmFzZURhdGVUaW1lQ29tcG9uZW50LFxuICAgICAgICBCYXNlRGF0ZUNvbXBvbmVudFxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEJhc2VCb29sZWFuQ29tcG9uZW50LFxuICAgICAgICBCYXNlRW51bUNvbXBvbmVudCxcbiAgICAgICAgQmFzZUZpZWxkQ29tcG9uZW50LFxuICAgICAgICBCYXNlTXVsdGlFbnVtQ29tcG9uZW50LFxuICAgICAgICBCYXNlTmFtZUNvbXBvbmVudCxcbiAgICAgICAgQmFzZU51bWJlckNvbXBvbmVudCxcbiAgICAgICAgQmFzZVJlbGF0ZUNvbXBvbmVudCxcbiAgICAgICAgQmFzZURhdGVUaW1lQ29tcG9uZW50LFxuICAgICAgICBCYXNlRGF0ZUNvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEJhc2VGaWVsZE1vZHVsZSB7XG59XG4iXX0=