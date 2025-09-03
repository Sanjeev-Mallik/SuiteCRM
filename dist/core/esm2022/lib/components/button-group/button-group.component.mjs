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
import { Button } from '../../common/components/button/button.model';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../button/button.component";
import * as i3 from "../dropdown-button/dropdown-button.component";
import * as i4 from "../grouped-button/grouped-button.component";
function ButtonGroupComponent_div_0_ng_container_1_scrm_button_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-button", 4);
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("config", item_r1);
} }
function ButtonGroupComponent_div_0_ng_container_1_scrm_dropdown_button_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-dropdown-button", 4);
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("config", item_r1);
} }
function ButtonGroupComponent_div_0_ng_container_1_scrm_grouped_button_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-grouped-button", 4);
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("config", item_r1);
} }
function ButtonGroupComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ButtonGroupComponent_div_0_ng_container_1_scrm_button_1_Template, 1, 1, "scrm-button", 3)(2, ButtonGroupComponent_div_0_ng_container_1_scrm_dropdown_button_2_Template, 1, 1, "scrm-dropdown-button", 3)(3, ButtonGroupComponent_div_0_ng_container_1_scrm_grouped_button_3_Template, 1, 1, "scrm-grouped-button", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    const item_r1 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r1 && !((tmp_3_0 = item_r1 == null ? null : item_r1.items) !== null && tmp_3_0 !== undefined ? tmp_3_0 : ""));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r1 && ((tmp_4_0 = item_r1 == null ? null : item_r1.items) !== null && tmp_4_0 !== undefined ? tmp_4_0 : "") && ((tmp_4_0 = item_r1 == null ? null : item_r1.type) !== null && tmp_4_0 !== undefined ? tmp_4_0 : "dropdown") === "dropdown");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r1 && ((tmp_5_0 = item_r1 == null ? null : item_r1.items) !== null && tmp_5_0 !== undefined ? tmp_5_0 : "") && ((tmp_5_0 = item_r1 == null ? null : item_r1.type) !== null && tmp_5_0 !== undefined ? tmp_5_0 : "dropdown") === "grouped");
} }
function ButtonGroupComponent_div_0_scrm_dropdown_button_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-dropdown-button", 5);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("config", ctx_r1.dropdownConfig);
} }
function ButtonGroupComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, ButtonGroupComponent_div_0_ng_container_1_Template, 4, 3, "ng-container", 1)(2, ButtonGroupComponent_div_0_scrm_dropdown_button_2_Template, 1, 1, "scrm-dropdown-button", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r1.klass);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.buttons.expanded);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.buttons.collapsed.length);
} }
export class ButtonGroupComponent {
    constructor() {
        this.klass = '';
        this.buttons = {
            expanded: [],
            collapsed: [],
        };
    }
    ngOnInit() {
        this.sub = this.config$.subscribe(config => {
            this.internalConfig = { ...config };
            this.splitButtons();
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    buildDropdownConfig() {
        let buttonClasses = ['button-group-button'];
        if (this.internalConfig.buttonKlass && this.internalConfig.buttonKlass.length > 0) {
            buttonClasses = buttonClasses.concat(this.internalConfig.buttonKlass);
        }
        if (this?.internalConfig?.dropdownOptions?.klass) {
            buttonClasses = buttonClasses.concat(this.internalConfig.dropdownOptions.klass);
        }
        let wrapperClasses = ['button-group-dropdown'];
        const dropdownOptions = this.internalConfig.dropdownOptions;
        const optionsWrapperKlass = dropdownOptions && dropdownOptions.wrapperKlass;
        if (optionsWrapperKlass && optionsWrapperKlass.length > 0) {
            wrapperClasses = wrapperClasses.concat(optionsWrapperKlass);
        }
        this.dropdownConfig = {
            label: this.internalConfig.dropdownLabel,
            klass: [...buttonClasses],
            wrapperKlass: wrapperClasses,
            items: this.buttons.collapsed,
        };
        if (this.internalConfig.dropdownOptions && this.internalConfig.dropdownOptions.placement) {
            this.dropdownConfig.placement = this.internalConfig.dropdownOptions.placement;
        }
        if (this.internalConfig.dropdownOptions && this.internalConfig.dropdownOptions.icon) {
            this.dropdownConfig.icon = this.internalConfig.dropdownOptions.icon;
        }
    }
    getBreakpoint() {
        if (!this.internalConfig.breakpoint && this.internalConfig.breakpoint !== 0) {
            return 4;
        }
        return this.internalConfig.breakpoint;
    }
    splitButtons() {
        this.buttons.expanded = [];
        this.buttons.collapsed = [];
        if (!this.internalConfig.buttons || this.internalConfig.buttons.length < 1) {
            return;
        }
        let count = 0;
        const showAfterBreakpoint = this.internalConfig.showAfterBreakpoint ?? true;
        this.internalConfig.buttons.forEach(button => {
            if (!button) {
                return;
            }
            if (count < this.getBreakpoint()) {
                let classes = ['button-group-button'];
                if (this.internalConfig.buttonKlass && this.internalConfig.buttonKlass.length > 0) {
                    classes = classes.concat(this.internalConfig.buttonKlass);
                }
                const newButton = { ...button };
                Button.appendClasses(newButton, [...classes]);
                this.buttons.expanded.push(newButton);
            }
            else if (showAfterBreakpoint === true) {
                this.buttons.collapsed.push({ ...button });
            }
            count++;
        });
        this.buildDropdownConfig();
    }
    static { this.ɵfac = function ButtonGroupComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ButtonGroupComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ButtonGroupComponent, selectors: [["scrm-button-group"]], inputs: { config$: "config$", klass: "klass" }, decls: 1, vars: 1, consts: [[3, "class", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["autoClose", "outside", 3, "config", 4, "ngIf"], [3, "config", 4, "ngIf"], [3, "config"], ["autoClose", "outside", 3, "config"]], template: function ButtonGroupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ButtonGroupComponent_div_0_Template, 3, 4, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.config$);
        } }, dependencies: [i1.NgForOf, i1.NgIf, i2.ButtonComponent, i3.DropdownButtonComponent, i4.GroupedButtonComponent], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ButtonGroupComponent, [{
        type: Component,
        args: [{ selector: 'scrm-button-group', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div *ngIf=\"config$\" [class]=\"klass\">\n    <ng-container *ngFor=\"let item of buttons.expanded\">\n        <scrm-button *ngIf=\"item && !(item?.items ?? '')\"\n                     [config]=\"item\">\n        </scrm-button>\n        <scrm-dropdown-button *ngIf=\"item && (item?.items ?? '') && ((item?.type ?? 'dropdown') === 'dropdown')\"\n                              [config]=\"item\">\n        </scrm-dropdown-button>\n        <scrm-grouped-button *ngIf=\"item && (item?.items ?? '') && ((item?.type ?? 'dropdown') === 'grouped')\"\n                              [config]=\"item\">\n        </scrm-grouped-button>\n    </ng-container>\n\n    <scrm-dropdown-button autoClose=\"outside\"\n                          *ngIf=\"buttons.collapsed.length\"\n                          [config]=\"dropdownConfig\"></scrm-dropdown-button>\n</div>\n" }]
    }], () => [], { config$: [{
            type: Input
        }], klass: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ButtonGroupComponent, { className: "ButtonGroupComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb21wb25lbnRzL2J1dHRvbi1ncm91cC9idXR0b24tZ3JvdXAuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvYnV0dG9uLWdyb3VwL2J1dHRvbi1ncm91cC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUluRSxPQUFPLEVBQUMsVUFBVSxFQUFlLE1BQU0sTUFBTSxDQUFDOzs7Ozs7O0lDRnRDLGlDQUVjOzs7SUFERCxnQ0FBZTs7O0lBRTVCLDBDQUV1Qjs7O0lBREQsZ0NBQWU7OztJQUVyQyx5Q0FFc0I7OztJQURBLGdDQUFlOzs7SUFSekMsNkJBQW9EO0lBT2hELEFBSEEsQUFIQSwwR0FDNkIsK0dBR1MsNkdBR0E7Ozs7Ozs7SUFQeEIsY0FBa0M7SUFBbEMsd0lBQWtDO0lBR3pCLGNBQWdGO0lBQWhGLHNRQUFnRjtJQUdqRixjQUErRTtJQUEvRSxxUUFBK0U7OztJQUt6RywwQ0FFdUU7OztJQUFqRCw4Q0FBeUI7OztJQWZuRCwyQkFBcUM7SUFhakMsQUFaQSw2RkFBb0QsZ0dBY0o7SUFDcEQsaUJBQU07OztJQWhCZSwyQkFBZTtJQUNELGNBQW1CO0lBQW5CLGlEQUFtQjtJQWEzQixjQUE4QjtJQUE5QixzREFBOEI7O0FERXpELE1BQU0sT0FBTyxvQkFBb0I7SUFnQjdCO1FBYlMsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUU1QixZQUFPLEdBQWlCO1lBQ3BCLFFBQVEs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QUFDO1FBQ1osQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUMvQixDQUFDO3FIQWhIUSxvQkFBb0I7b0VBQXBCLG9CQUFvQjtZQ2hCakMscUVBQXFDOztZQUEvQixrQ0FBYTs7O2lGRGdCTixvQkFBb0I7Y0FMaEMsU0FBUzsyQkFDSSxtQkFBbUI7b0JBTXBCLE9BQU87a0JBQWYsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSzs7a0ZBSEcsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QnV0dG9ufSBmcm9tICcuLi8uLi9jb21tb24vY29tcG9uZW50cy9idXR0b24vYnV0dG9uLm1vZGVsJztcbmltcG9ydCB7QnV0dG9uR3JvdXBJbnRlcmZhY2V9IGZyb20gJy4uLy4uL2NvbW1vbi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24tZ3JvdXAubW9kZWwnO1xuaW1wb3J0IHtEcm9wZG93bkJ1dHRvbkludGVyZmFjZSwgQW55QnV0dG9uSW50ZXJmYWNlfSBmcm9tICcuLi8uLi9jb21tb24vY29tcG9uZW50cy9idXR0b24vZHJvcGRvd24tYnV0dG9uLm1vZGVsJztcblxuaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuXG5pbnRlcmZhY2UgU3BsaXRCdXR0b25zIHtcbiAgICBleHBhbmRlZDogQW55QnV0dG9uSW50ZXJmYWNlW107XG4gICAgY29sbGFwc2VkOiBBbnlCdXR0b25JbnRlcmZhY2VbXTtcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLWJ1dHRvbi1ncm91cCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2J1dHRvbi1ncm91cC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVzOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uR3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBASW5wdXQoKSBjb25maWckOiBPYnNlcnZhYmxlPEJ1dHRvbkdyb3VwSW50ZXJmYWNlPjtcbiAgICBASW5wdXQoKSBrbGFzczogc3RyaW5nID0gJyc7XG5cbiAgICBidXR0b25zOiBTcGxpdEJ1dHRvbnMgPSB7XG4gICAgICAgIGV4cGFuZGVkOiBbXSxcbiAgICAgICAgY29sbGFwc2VkOiBbXSxcbiAgICB9O1xuXG4gICAgZHJvcGRvd25Db25maWc6IERyb3Bkb3duQnV0dG9uSW50ZXJmYWNlO1xuXG4gICAgcHJvdGVjdGVkIGludGVybmFsQ29uZmlnOiBCdXR0b25Hcm91cEludGVyZmFjZTtcbiAgICBwcml2YXRlIHN1YjogU3Vic2NyaXB0aW9uO1xuXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLmNvbmZpZyQuc3Vic2NyaWJlKGNvbmZpZyA9PiB7XG4gICAgICAgICAgICB0aGlzLmludGVybmFsQ29uZmlnID0gey4uLmNvbmZpZ307XG4gICAgICAgICAgICB0aGlzLnNwbGl0QnV0dG9ucygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBidWlsZERyb3Bkb3duQ29uZmlnKCk6IHZvaWQge1xuXG4gICAgICAgIGxldCBidXR0b25DbGFzc2VzID0gWydidXR0b24tZ3JvdXAtYnV0dG9uJ107XG5cbiAgICAgICAgaWYgKHRoaXMuaW50ZXJuYWxDb25maWcuYnV0dG9uS2xhc3MgJiYgdGhpcy5pbnRlcm5hbENvbmZpZy5idXR0b25LbGFzcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBidXR0b25DbGFzc2VzID0gYnV0dG9uQ2xhc3Nlcy5jb25jYXQodGhpcy5pbnRlcm5hbENvbmZpZy5idXR0b25LbGFzcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcz8uaW50ZXJuYWxDb25maWc/LmRyb3Bkb3duT3B0aW9ucz8ua2xhc3MpIHtcbiAgICAgICAgICAgIGJ1dHRvbkNsYXNzZXMgPSBidXR0b25DbGFzc2VzLmNvbmNhdCh0aGlzLmludGVybmFsQ29uZmlnLmRyb3Bkb3duT3B0aW9ucy5rbGFzcyk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgd3JhcHBlckNsYXNzZXMgPSBbJ2J1dHRvbi1ncm91cC1kcm9wZG93biddO1xuXG4gICAgICAgIGNvbnN0IGRyb3Bkb3duT3B0aW9ucyA9IHRoaXMuaW50ZXJuYWxDb25maWcuZHJvcGRvd25PcHRpb25zO1xuICAgICAgICBjb25zdCBvcHRpb25zV3JhcHBlcktsYXNzID0gZHJvcGRvd25PcHRpb25zICYmIGRyb3Bkb3duT3B0aW9ucy53cmFwcGVyS2xhc3M7XG5cbiAgICAgICAgaWYgKG9wdGlvbnNXcmFwcGVyS2xhc3MgJiYgb3B0aW9uc1dyYXBwZXJLbGFzcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB3cmFwcGVyQ2xhc3NlcyA9IHdyYXBwZXJDbGFzc2VzLmNvbmNhdChvcHRpb25zV3JhcHBlcktsYXNzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZHJvcGRvd25Db25maWcgPSB7XG4gICAgICAgICAgICBsYWJlbDogdGhpcy5pbnRlcm5hbENvbmZpZy5kcm9wZG93bkxhYmVsLFxuICAgICAgICAgICAga2xhc3M6IFsuLi5idXR0b25DbGFzc2VzXSxcbiAgICAgICAgICAgIHdyYXBwZXJLbGFzczogd3JhcHBlckNsYXNzZXMsXG4gICAgICAgICAgICBpdGVtczogdGhpcy5idXR0b25zLmNvbGxhcHNlZCxcbiAgICAgICAgfSBhcyBEcm9wZG93bkJ1dHRvbkludGVyZmFjZTtcblxuICAgICAgICBpZiAodGhpcy5pbnRlcm5hbENvbmZpZy5kcm9wZG93bk9wdGlvbnMgJiYgdGhpcy5pbnRlcm5hbENvbmZpZy5kcm9wZG93bk9wdGlvbnMucGxhY2VtZW50KSB7XG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duQ29uZmlnLnBsYWNlbWVudCA9IHRoaXMuaW50ZXJuYWxDb25maWcuZHJvcGRvd25PcHRpb25zLnBsYWNlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmludGVybmFsQ29uZmlnLmRyb3Bkb3duT3B0aW9ucyAmJiB0aGlzLmludGVybmFsQ29uZmlnLmRyb3Bkb3duT3B0aW9ucy5pY29uKSB7XG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duQ29uZmlnLmljb24gPSB0aGlzLmludGVybmFsQ29uZmlnLmRyb3Bkb3duT3B0aW9ucy5pY29uO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldEJyZWFrcG9pbnQoKTogbnVtYmVyIHtcblxuICAgICAgICBpZiAoIXRoaXMuaW50ZXJuYWxDb25maWcuYnJlYWtwb2ludCAmJiB0aGlzLmludGVybmFsQ29uZmlnLmJyZWFrcG9pbnQgIT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiA0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxDb25maWcuYnJlYWtwb2ludDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc3BsaXRCdXR0b25zKCk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMuYnV0dG9ucy5leHBhbmRlZCA9IFtdO1xuICAgICAgICB0aGlzLmJ1dHRvbnMuY29sbGFwc2VkID0gW107XG5cbiAgICAgICAgaWYgKCF0aGlzLmludGVybmFsQ29uZmlnLmJ1dHRvbnMgfHwgdGhpcy5pbnRlcm5hbENvbmZpZy5idXR0b25zLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG5cbiAgICAgICAgY29uc3Qgc2hvd0FmdGVyQnJlYWtwb2ludCA9IHRoaXMuaW50ZXJuYWxDb25maWcuc2hvd0FmdGVyQnJlYWtwb2ludCA/PyB0cnVlO1xuXG4gICAgICAgIHRoaXMuaW50ZXJuYWxDb25maWcuYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG5cbiAgICAgICAgICAgIGlmICghYnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY291bnQgPCB0aGlzLmdldEJyZWFrcG9pbnQoKSkge1xuICAgICAgICAgICAgICAgIGxldCBjbGFzc2VzID0gWydidXR0b24tZ3JvdXAtYnV0dG9uJ107XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaW50ZXJuYWxDb25maWcuYnV0dG9uS2xhc3MgJiYgdGhpcy5pbnRlcm5hbENvbmZpZy5idXR0b25LbGFzcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXMgPSBjbGFzc2VzLmNvbmNhdCh0aGlzLmludGVybmFsQ29uZmlnLmJ1dHRvbktsYXNzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3QnV0dG9uID0gey4uLmJ1dHRvbn07XG4gICAgICAgICAgICAgICAgQnV0dG9uLmFwcGVuZENsYXNzZXMobmV3QnV0dG9uLCBbLi4uY2xhc3Nlc10pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b25zLmV4cGFuZGVkLnB1c2gobmV3QnV0dG9uKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZihzaG93QWZ0ZXJCcmVha3BvaW50ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b25zLmNvbGxhcHNlZC5wdXNoKHsuLi5idXR0b259KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5idWlsZERyb3Bkb3duQ29uZmlnKCk7XG4gICAgfVxuXG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48ZGl2ICpuZ0lmPVwiY29uZmlnJFwiIFtjbGFzc109XCJrbGFzc1wiPlxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgYnV0dG9ucy5leHBhbmRlZFwiPlxuICAgICAgICA8c2NybS1idXR0b24gKm5nSWY9XCJpdGVtICYmICEoaXRlbT8uaXRlbXMgPz8gJycpXCJcbiAgICAgICAgICAgICAgICAgICAgIFtjb25maWddPVwiaXRlbVwiPlxuICAgICAgICA8L3Njcm0tYnV0dG9uPlxuICAgICAgICA8c2NybS1kcm9wZG93bi1idXR0b24gKm5nSWY9XCJpdGVtICYmIChpdGVtPy5pdGVtcyA/PyAnJykgJiYgKChpdGVtPy50eXBlID8/ICdkcm9wZG93bicpID09PSAnZHJvcGRvd24nKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29uZmlnXT1cIml0ZW1cIj5cbiAgICAgICAgPC9zY3JtLWRyb3Bkb3duLWJ1dHRvbj5cbiAgICAgICAgPHNjcm0tZ3JvdXBlZC1idXR0b24gKm5nSWY9XCJpdGVtICYmIChpdGVtPy5pdGVtcyA/PyAnJykgJiYgKChpdGVtPy50eXBlID8/ICdkcm9wZG93bicpID09PSAnZ3JvdXBlZCcpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb25maWddPVwiaXRlbVwiPlxuICAgICAgICA8L3Njcm0tZ3JvdXBlZC1idXR0b24+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8c2NybS1kcm9wZG93bi1idXR0b24gYXV0b0Nsb3NlPVwib3V0c2lkZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiYnV0dG9ucy5jb2xsYXBzZWQubGVuZ3RoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbmZpZ109XCJkcm9wZG93bkNvbmZpZ1wiPjwvc2NybS1kcm9wZG93bi1idXR0b24+XG48L2Rpdj5cbiJdfQ==