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
import { BaseWidgetComponent } from '../../../widgets/base-widget.model';
import { SidebarWidgetRegistry } from './sidebar-widget.registry';
import * as i0 from "@angular/core";
import * as i1 from "./sidebar-widget.registry";
import * as i2 from "@angular/common";
import * as i3 from "ng-dynamic-component";
import * as i4 from "../../../../components/label/label.component";
const _c0 = (a0, a1, a2) => ({ "config": a0, "context": a1, "context$": a2 });
function SidebarWidgetComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 3);
    i0.ɵɵelement(2, "scrm-label", 4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("labelKey", ctx_r0.getErrorMessage());
} }
function SidebarWidgetComponent_ndc_dynamic_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ndc-dynamic", 5);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ndcDynamicComponent", ctx_r0.componentType)("ndcDynamicInputs", i0.ɵɵpureFunction3(2, _c0, ctx_r0.config, ctx_r0.context, ctx_r0.context$));
} }
export class SidebarWidgetComponent extends BaseWidgetComponent {
    constructor(registry) {
        super();
        this.registry = registry;
    }
    get componentType() {
        const module = this.context.module ?? 'default';
        return this.registry.get(module, this.type);
    }
    getErrorMessage() {
        if (!this.type || !this.config) {
            return 'LBL_CONFIG_NO_CONFIG';
        }
        if (!this.componentType) {
            return 'LBL_WIDGET_NOT_FOUND';
        }
        return 'LBL_BAD_CONFIG';
    }
    static { this.ɵfac = function SidebarWidgetComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SidebarWidgetComponent)(i0.ɵɵdirectiveInject(i1.SidebarWidgetRegistry)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SidebarWidgetComponent, selectors: [["scrm-sidebar-widget"]], inputs: { type: "type" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 2, consts: [["class", "d-flex mb-4 mt-4 justify-content-center", 4, "ngIf"], [3, "ndcDynamicComponent", "ndcDynamicInputs", 4, "ngIf"], [1, "d-flex", "mb-4", "mt-4", "justify-content-center"], [1, "lead"], [3, "labelKey"], [3, "ndcDynamicComponent", "ndcDynamicInputs"]], template: function SidebarWidgetComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SidebarWidgetComponent_div_0_Template, 3, 1, "div", 0)(1, SidebarWidgetComponent_ndc_dynamic_1_Template, 1, 6, "ndc-dynamic", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !(ctx.type && ctx.config && ctx.componentType));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.type && ctx.config && ctx.componentType);
        } }, dependencies: [i2.NgIf, i3.DynamicIoDirective, i3.DynamicComponent, i4.LabelComponent], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SidebarWidgetComponent, [{
        type: Component,
        args: [{ selector: 'scrm-sidebar-widget', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div *ngIf=\"!(type && config && componentType)\"\n     class=\"d-flex mb-4 mt-4 justify-content-center\">\n    <div class=\"lead\">\n        <scrm-label [labelKey]=\"getErrorMessage()\"></scrm-label>\n    </div>\n</div>\n<ndc-dynamic *ngIf=\"type && config && componentType\"\n             [ndcDynamicComponent]=\"componentType\"\n             [ndcDynamicInputs]=\"{\n                'config': config,\n                'context': context,\n                'context$': context$\n            }\"\n></ndc-dynamic>\n" }]
    }], () => [{ type: i1.SidebarWidgetRegistry }], { type: [{
            type: Input,
            args: ['type']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SidebarWidgetComponent, { className: "SidebarWidgetComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci13aWRnZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbnRhaW5lcnMvc2lkZWJhci13aWRnZXQvY29tcG9uZW50cy9zaWRlYmFyLXdpZGdldC9zaWRlYmFyLXdpZGdldC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9zaWRlYmFyLXdpZGdldC9jb21wb25lbnRzL3NpZGViYXItd2lkZ2V0L3NpZGViYXItd2lkZ2V0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUN2RSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7Ozs7SUNDNUQsQUFGSiw4QkFDcUQsYUFDL0I7SUFDZCxnQ0FBd0Q7SUFFaEUsQUFESSxpQkFBTSxFQUNKOzs7SUFGYyxlQUE4QjtJQUE5QixtREFBOEI7OztJQUdsRCxpQ0FPZTs7O0lBTEYsQUFEQSwwREFBcUMsZ0dBS3BDOztBREpkLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxtQkFBbUI7SUFJM0QsWUFBc0IsUUFBK0I7UUFDakQsS0FBSyxFQUFFLENBQUM7UUFEVSxhQUFRLEdBQVIsUUFBUSxDQUF1QjtJQUVyRCxDQUFDO0lBRUQsSUFBSSxhQUFhO1FBQ2IsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksU0FBUyxDQUFDO1FBQ2hELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsZUFBZTtRQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzdCLE9BQU8sc0JBQXNCLENBQUM7UUFDbEMsQ0FBQztRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDdEIsT0FBTyxzQkFBc0IsQ0FBQztRQUNsQyxDQUFDO1FBRUQsT0FBTyxnQkFBZ0IsQ0FBQztJQUM1QixDQUFDO3VIQXZCUSxzQkFBc0I7b0VBQXRCLHNCQUFzQjtZQ0ZuQyxBQU5BLHVFQUNxRCwwRUFZcEQ7O1lBYksscUVBQXdDO1lBTWhDLGNBQXFDO1lBQXJDLGtFQUFxQzs7O2lGREV0QyxzQkFBc0I7Y0FMbEMsU0FBUzsyQkFDSSxxQkFBcUI7c0RBTWhCLElBQUk7a0JBQWxCLEtBQUs7bUJBQUMsTUFBTTs7a0ZBRkosc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCYXNlV2lkZ2V0Q29tcG9uZW50fSBmcm9tICcuLi8uLi8uLi93aWRnZXRzL2Jhc2Utd2lkZ2V0Lm1vZGVsJztcbmltcG9ydCB7U2lkZWJhcldpZGdldFJlZ2lzdHJ5fSBmcm9tICcuL3NpZGViYXItd2lkZ2V0LnJlZ2lzdHJ5JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLXNpZGViYXItd2lkZ2V0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vc2lkZWJhci13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgU2lkZWJhcldpZGdldENvbXBvbmVudCBleHRlbmRzIEJhc2VXaWRnZXRDb21wb25lbnQge1xuXG4gICAgQElucHV0KCd0eXBlJykgdHlwZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIHJlZ2lzdHJ5OiBTaWRlYmFyV2lkZ2V0UmVnaXN0cnkpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBnZXQgY29tcG9uZW50VHlwZSgpOiBhbnkge1xuICAgICAgICBjb25zdCBtb2R1bGUgPSB0aGlzLmNvbnRleHQubW9kdWxlID8/ICdkZWZhdWx0JztcbiAgICAgICAgcmV0dXJuIHRoaXMucmVnaXN0cnkuZ2V0KG1vZHVsZSwgdGhpcy50eXBlKTtcbiAgICB9XG5cbiAgICBnZXRFcnJvck1lc3NhZ2UoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKCF0aGlzLnR5cGUgfHwgIXRoaXMuY29uZmlnKSB7XG4gICAgICAgICAgICByZXR1cm4gJ0xCTF9DT05GSUdfTk9fQ09ORklHJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5jb21wb25lbnRUeXBlKSB7XG4gICAgICAgICAgICByZXR1cm4gJ0xCTF9XSURHRVRfTk9UX0ZPVU5EJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnTEJMX0JBRF9DT05GSUcnO1xuICAgIH1cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjxkaXYgKm5nSWY9XCIhKHR5cGUgJiYgY29uZmlnICYmIGNvbXBvbmVudFR5cGUpXCJcbiAgICAgY2xhc3M9XCJkLWZsZXggbWItNCBtdC00IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwibGVhZFwiPlxuICAgICAgICA8c2NybS1sYWJlbCBbbGFiZWxLZXldPVwiZ2V0RXJyb3JNZXNzYWdlKClcIj48L3Njcm0tbGFiZWw+XG4gICAgPC9kaXY+XG48L2Rpdj5cbjxuZGMtZHluYW1pYyAqbmdJZj1cInR5cGUgJiYgY29uZmlnICYmIGNvbXBvbmVudFR5cGVcIlxuICAgICAgICAgICAgIFtuZGNEeW5hbWljQ29tcG9uZW50XT1cImNvbXBvbmVudFR5cGVcIlxuICAgICAgICAgICAgIFtuZGNEeW5hbWljSW5wdXRzXT1cIntcbiAgICAgICAgICAgICAgICAnY29uZmlnJzogY29uZmlnLFxuICAgICAgICAgICAgICAgICdjb250ZXh0JzogY29udGV4dCxcbiAgICAgICAgICAgICAgICAnY29udGV4dCQnOiBjb250ZXh0JFxuICAgICAgICAgICAgfVwiXG4+PC9uZGMtZHluYW1pYz5cbiJdfQ==