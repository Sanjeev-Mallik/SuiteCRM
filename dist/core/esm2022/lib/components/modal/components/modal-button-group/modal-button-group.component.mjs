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
import { Observable } from 'rxjs';
import { deepClone } from '../../../../common/utils/object-utils';
import { map } from 'rxjs/operators';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import defaults from 'lodash-es/defaults';
import { ButtonUtils } from '../../../button/button.utils';
import { SystemConfigStore } from '../../../../store/system-config/system-config.store';
import * as i0 from "@angular/core";
import * as i1 from "../../../button/button.utils";
import * as i2 from "../../../../store/system-config/system-config.store";
import * as i3 from "../../../button-group/button-group.component";
export class ModalButtonGroupComponent {
    constructor(buttonUtils, config) {
        this.buttonUtils = buttonUtils;
        this.config = config;
        this.activeModal = null;
        this.defaultButtonGroup = {
            breakpoint: 4,
            wrapperKlass: ['modal-buttons'],
            buttonKlass: ['modal-button', 'btn', 'btn-sm'],
            buttons: []
        };
        const ui = this.config.getConfigValue('ui');
        if (ui && ui.modal_button_group_breakpoint) {
            this.defaultButtonGroup.breakpoint = ui.modal_buttons_collapse_breakpoint;
        }
    }
    ngOnInit() {
        if (this.config$) {
            this.buttonGroup$ = this.config$.pipe(map((config) => this.mapButtonGroup(config)));
        }
    }
    mapButtonGroup(config) {
        const group = defaults({ ...config }, deepClone(this.defaultButtonGroup));
        this.mapButtons(group);
        return group;
    }
    mapButtons(group) {
        const buttons = group.buttons || [];
        group.buttons = [];
        if (buttons.length > 0) {
            buttons.forEach(modalButton => {
                const button = this.buttonUtils.addOnClickPartial(modalButton, this.activeModal);
                group.buttons.push(button);
            });
        }
    }
    static { this.ɵfac = function ModalButtonGroupComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ModalButtonGroupComponent)(i0.ɵɵdirectiveInject(i1.ButtonUtils), i0.ɵɵdirectiveInject(i2.SystemConfigStore)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ModalButtonGroupComponent, selectors: [["scrm-modal-button-group"]], inputs: { config$: "config$", activeModal: "activeModal" }, decls: 1, vars: 1, consts: [[3, "config$"]], template: function ModalButtonGroupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "scrm-button-group", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("config$", ctx.buttonGroup$);
        } }, dependencies: [i3.ButtonGroupComponent], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalButtonGroupComponent, [{
        type: Component,
        args: [{ selector: 'scrm-modal-button-group', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<scrm-button-group [config$]=\"buttonGroup$\"></scrm-button-group>\n" }]
    }], () => [{ type: i1.ButtonUtils }, { type: i2.SystemConfigStore }], { config$: [{
            type: Input
        }], activeModal: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ModalButtonGroupComponent, { className: "ModalButtonGroupComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtYnV0dG9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb21wb25lbnRzL21vZGFsL2NvbXBvbmVudHMvbW9kYWwtYnV0dG9uLWdyb3VwL21vZGFsLWJ1dHRvbi1ncm91cC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9tb2RhbC9jb21wb25lbnRzL21vZGFsLWJ1dHRvbi1ncm91cC9tb2RhbC1idXR0b24tZ3JvdXAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFHaEMsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBQ2hFLE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuQyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDMUQsT0FBTyxRQUFRLE1BQU0sb0JBQW9CLENBQUM7QUFDMUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ3pELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHFEQUFxRCxDQUFDOzs7OztBQU90RixNQUFNLE9BQU8seUJBQXlCO0lBYWxDLFlBQ2MsV0FBd0IsRUFDeEIsTUFBeUI7UUFEekIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFaOUIsZ0JBQVcsR0FBbUIsSUFBSSxDQUFDO1FBR2xDLHVCQUFrQixHQUF5QjtZQUNqRCxVQUFVLEVBQUUsQ0FBQztZQUNiLFlBQVksRUFBRSxDQUFDLGVBQWUsQ0FBQztZQUMvQixXQUFXLEVBQUUsQ0FBQyxjQUFjLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQztZQUM5QyxPQUFPLEVBQUUsRUFBRTtTQUNkLENBQUM7UUFNRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsNkJBQTZCLEVBQUUsQ0FBQztZQUN6QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztRQUM5RSxDQUFDO0lBQ0wsQ0FBQztJQUVELFFBQVE7UUFFSixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNmLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQ2pDLEdBQUcsQ0FBQyxDQUFDLE1BQTRCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FDckUsQ0FBQztRQUNOLENBQUM7SUFDTCxDQUFDO0lBRVMsY0FBYyxDQUFDLE1BQTRCO1FBQ2pELE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxFQUFDLEdBQUcsTUFBTSxFQUFDLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7UUFFeEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV2QixPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRVMsVUFBVSxDQUFDLEtBQTJCO1FBQzVDLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO1FBQ3BDLEtBQUssQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBRW5CLElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUNyQixPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFO2dCQUMxQixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ2pGLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQy9CLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztJQUNMLENBQUM7MEhBbERRLHlCQUF5QjtvRUFBekIseUJBQXlCO1lDZnRDLHVDQUFnRTs7WUFBN0MsMENBQXdCOzs7aUZEZTlCLHlCQUF5QjtjQUxyQyxTQUFTOzJCQUNJLHlCQUF5Qjs0RUFNMUIsT0FBTztrQkFBZixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSzs7a0ZBSEcseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtCdXR0b25Hcm91cEludGVyZmFjZX0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi1ncm91cC5tb2RlbCc7XG5pbXBvcnQge01vZGFsQnV0dG9uR3JvdXBJbnRlcmZhY2V9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jb21wb25lbnRzL21vZGFsL21vZGFsLm1vZGVsJztcbmltcG9ydCB7ZGVlcENsb25lfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vdXRpbHMvb2JqZWN0LXV0aWxzJztcbmltcG9ydCB7bWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge05nYkFjdGl2ZU1vZGFsfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgZGVmYXVsdHMgZnJvbSAnbG9kYXNoLWVzL2RlZmF1bHRzJztcbmltcG9ydCB7QnV0dG9uVXRpbHN9IGZyb20gJy4uLy4uLy4uL2J1dHRvbi9idXR0b24udXRpbHMnO1xuaW1wb3J0IHtTeXN0ZW1Db25maWdTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvc3lzdGVtLWNvbmZpZy9zeXN0ZW0tY29uZmlnLnN0b3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLW1vZGFsLWJ1dHRvbi1ncm91cCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL21vZGFsLWJ1dHRvbi1ncm91cC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbEJ1dHRvbkdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBJbnB1dCgpIGNvbmZpZyQ6IE9ic2VydmFibGU8TW9kYWxCdXR0b25Hcm91cEludGVyZmFjZT47XG4gICAgQElucHV0KCkgYWN0aXZlTW9kYWw6IE5nYkFjdGl2ZU1vZGFsID0gbnVsbDtcblxuICAgIGJ1dHRvbkdyb3VwJDogT2JzZXJ2YWJsZTxCdXR0b25Hcm91cEludGVyZmFjZT47XG4gICAgcHJvdGVjdGVkIGRlZmF1bHRCdXR0b25Hcm91cDogQnV0dG9uR3JvdXBJbnRlcmZhY2UgPSB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDQsXG4gICAgICAgIHdyYXBwZXJLbGFzczogWydtb2RhbC1idXR0b25zJ10sXG4gICAgICAgIGJ1dHRvbktsYXNzOiBbJ21vZGFsLWJ1dHRvbicsICdidG4nLCAnYnRuLXNtJ10sXG4gICAgICAgIGJ1dHRvbnM6IFtdXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgYnV0dG9uVXRpbHM6IEJ1dHRvblV0aWxzLFxuICAgICAgICBwcm90ZWN0ZWQgY29uZmlnOiBTeXN0ZW1Db25maWdTdG9yZSxcbiAgICApIHtcbiAgICAgICAgY29uc3QgdWkgPSB0aGlzLmNvbmZpZy5nZXRDb25maWdWYWx1ZSgndWknKTtcbiAgICAgICAgaWYgKHVpICYmIHVpLm1vZGFsX2J1dHRvbl9ncm91cF9icmVha3BvaW50KSB7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRCdXR0b25Hcm91cC5icmVha3BvaW50ID0gdWkubW9kYWxfYnV0dG9uc19jb2xsYXBzZV9icmVha3BvaW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnJCkge1xuICAgICAgICAgICAgdGhpcy5idXR0b25Hcm91cCQgPSB0aGlzLmNvbmZpZyQucGlwZShcbiAgICAgICAgICAgICAgICBtYXAoKGNvbmZpZzogQnV0dG9uR3JvdXBJbnRlcmZhY2UpID0+IHRoaXMubWFwQnV0dG9uR3JvdXAoY29uZmlnKSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbWFwQnV0dG9uR3JvdXAoY29uZmlnOiBCdXR0b25Hcm91cEludGVyZmFjZSk6IEJ1dHRvbkdyb3VwSW50ZXJmYWNlIHtcbiAgICAgICAgY29uc3QgZ3JvdXAgPSBkZWZhdWx0cyh7Li4uY29uZmlnfSwgZGVlcENsb25lKHRoaXMuZGVmYXVsdEJ1dHRvbkdyb3VwKSk7XG5cbiAgICAgICAgdGhpcy5tYXBCdXR0b25zKGdyb3VwKTtcblxuICAgICAgICByZXR1cm4gZ3JvdXA7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG1hcEJ1dHRvbnMoZ3JvdXA6IEJ1dHRvbkdyb3VwSW50ZXJmYWNlKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBncm91cC5idXR0b25zIHx8IFtdO1xuICAgICAgICBncm91cC5idXR0b25zID0gW107XG5cbiAgICAgICAgaWYgKGJ1dHRvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgYnV0dG9ucy5mb3JFYWNoKG1vZGFsQnV0dG9uID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBidXR0b24gPSB0aGlzLmJ1dHRvblV0aWxzLmFkZE9uQ2xpY2tQYXJ0aWFsKG1vZGFsQnV0dG9uLCB0aGlzLmFjdGl2ZU1vZGFsKTtcbiAgICAgICAgICAgICAgICBncm91cC5idXR0b25zLnB1c2goYnV0dG9uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPHNjcm0tYnV0dG9uLWdyb3VwIFtjb25maWckXT1cImJ1dHRvbkdyb3VwJFwiPjwvc2NybS1idXR0b24tZ3JvdXA+XG4iXX0=