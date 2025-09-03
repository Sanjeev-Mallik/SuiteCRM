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
import { Component, } from '@angular/core';
import { NgbDateAdapter, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { isVoid, isEmptyString } from '../../../../common/utils/value-utils';
import { DataTypeFormatter } from '../../../../services/formatters/data-type.formatter.service';
import { DateParserFormatter } from '../../../base/datetime/date/date-parser-formatter.service';
import { DateFormatter } from '../../../../services/formatters/datetime/date-formatter.service';
import { DateAdapter } from '../../../base/datetime/date/date-adapter.service';
import { FieldLogicManager } from '../../../field-logic/field-logic.manager';
import { FieldLogicDisplayManager } from '../../../field-logic-display/field-logic-display.manager';
import { BaseDateComponent } from '../../../base/datetime/base-date.component';
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/formatters/datetime/date-formatter.service";
import * as i2 from "@ng-bootstrap/ng-bootstrap";
import * as i3 from "../../../../services/formatters/data-type.formatter.service";
import * as i4 from "../../../field-logic/field-logic.manager";
import * as i5 from "../../../field-logic-display/field-logic-display.manager";
import * as i6 from "@angular/common";
import * as i7 from "@angular/forms";
import * as i8 from "../../../../components/button/button.component";
export class DateEditFieldComponent extends BaseDateComponent {
    constructor(formatter, dateAdapter, dateParserFormatter, typeFormatter, logic, logicDisplay) {
        super(formatter, typeFormatter, logic, logicDisplay);
        this.formatter = formatter;
        this.dateAdapter = dateAdapter;
        this.dateParserFormatter = dateParserFormatter;
        this.typeFormatter = typeFormatter;
        this.logic = logic;
        this.logicDisplay = logicDisplay;
    }
    ngOnInit() {
        // Note: handle NgbDatePicker default validation
        // Note: convert empty form value to null for the ngb date validator to pass it
        if (isVoid(this.field.value) || isEmptyString(this.field.value)) {
            this.field.formControl.setValue(null);
        }
        else {
            this.field.formControl.setValue(this.formatter.toUserFormat(this.field.value, { toFormat: this.getDateFormat() }));
        }
        const adapter = this.dateAdapter;
        adapter.setUserFormat(this.getDateFormat());
        const parserFormatter = this.dateParserFormatter;
        parserFormatter.setUserFormat(this.getDateFormat());
        this.dateModel = this.formatter.dateFormatToStruct(this.field.value, this.formatter.getInternalFormat());
        this.subscribeValueChanges();
    }
    ngOnDestroy() {
        this.unsubscribeAll();
    }
    setModel(value) {
        this.field.value = this.formatter.toInternalFormat(value, { fromFormat: this.getDateFormat() });
        this.dateModel = this.formatter.dateFormatToStruct(value, this.getDateFormat());
    }
    getOpenButton(datepicker) {
        return {
            klass: 'btn btn-sm btn-outline-secondary m-0 border-0',
            // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
            onClick: () => {
                datepicker.toggle();
                datepicker.navigateTo(this.dateModel);
            },
            icon: 'calendar'
        };
    }
    openDatePicker(datepicker) {
        datepicker.toggle(); // Open the datepicker popup
        datepicker.navigateTo(this.dateModel);
    }
    getPlacement() {
        return ['bottom-left', 'bottom-right', 'top-left', 'top-right'];
    }
    static { this.ɵfac = function DateEditFieldComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DateEditFieldComponent)(i0.ɵɵdirectiveInject(i1.DateFormatter), i0.ɵɵdirectiveInject(i2.NgbDateAdapter), i0.ɵɵdirectiveInject(i2.NgbDateParserFormatter), i0.ɵɵdirectiveInject(i3.DataTypeFormatter), i0.ɵɵdirectiveInject(i4.FieldLogicManager), i0.ɵɵdirectiveInject(i5.FieldLogicDisplayManager)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DateEditFieldComponent, selectors: [["scrm-date-edit"]], features: [i0.ɵɵProvidersFeature([
                { provide: NgbDateAdapter, useClass: DateAdapter },
                { provide: NgbDateParserFormatter, useClass: DateParserFormatter }
            ]), i0.ɵɵInheritDefinitionFeature], decls: 5, vars: 8, consts: [["datepicker", "ngbDatepicker"], [1, "field-datetime-edit", "input-group"], ["ngbDatepicker", "", 3, "ngModelChange", "click", "ngClass", "placement", "placeholder", "formControl", "startDate"], [1, "input-group-append", "align-items-end"], [3, "config"]], template: function DateEditFieldComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1)(1, "input", 2, 0);
            i0.ɵɵlistener("ngModelChange", function DateEditFieldComponent_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.setModel($event)); })("click", function DateEditFieldComponent_Template_input_click_1_listener() { i0.ɵɵrestoreView(_r1); const datepicker_r2 = i0.ɵɵreference(2); return i0.ɵɵresetView(ctx.openDatePicker(datepicker_r2)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "span", 3);
            i0.ɵɵelement(4, "scrm-button", 4);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            const datepicker_r2 = i0.ɵɵreference(2);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("is-invalid", ctx.validateOnlyOnSubmit ? ctx.isInvalid() : ctx.field.formControl.invalid && ctx.field.formControl.touched);
            i0.ɵɵproperty("ngClass", ctx.klass)("placement", ctx.getPlacement())("placeholder", ctx.getDateFormat().toLowerCase())("formControl", ctx.field.formControl)("startDate", ctx.dateModel);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("config", ctx.getOpenButton(datepicker_r2));
        } }, dependencies: [i6.NgClass, i7.DefaultValueAccessor, i7.NgControlStatus, i2.NgbInputDatepicker, i8.ButtonComponent, i7.FormControlDirective], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DateEditFieldComponent, [{
        type: Component,
        args: [{ selector: 'scrm-date-edit', providers: [
                    { provide: NgbDateAdapter, useClass: DateAdapter },
                    { provide: NgbDateParserFormatter, useClass: DateParserFormatter }
                ], template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div class=\"field-datetime-edit input-group\">\n    <input ngbDatepicker\n           [ngClass]=\"klass\"\n           [placement]=\"getPlacement()\"\n           [placeholder]=\"getDateFormat().toLowerCase()\"\n           [class.is-invalid]=\"validateOnlyOnSubmit ? isInvalid() : (field.formControl.invalid && field.formControl.touched)\"\n           [formControl]=\"field.formControl\"\n           [startDate]=\"dateModel\"\n           (ngModelChange)=\"setModel($event)\"\n           (click)=\"openDatePicker(datepicker)\"\n           #datepicker=\"ngbDatepicker\">\n    <span class=\"input-group-append align-items-end\">\n        <scrm-button [config]=\"getOpenButton(datepicker)\">\n        </scrm-button>\n    </span>\n</div>\n" }]
    }], () => [{ type: i1.DateFormatter }, { type: i2.NgbDateAdapter }, { type: i2.NgbDateParserFormatter }, { type: i3.DataTypeFormatter }, { type: i4.FieldLogicManager }, { type: i5.FieldLogicDisplayManager }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DateEditFieldComponent, { className: "DateEditFieldComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvZmllbGRzL2RhdGUvdGVtcGxhdGVzL2VkaXQvZGF0ZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvZmllbGRzL2RhdGUvdGVtcGxhdGVzL2VkaXQvZGF0ZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsR0FBcUIsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFDLGNBQWMsRUFBRSxzQkFBc0IsRUFBb0MsTUFBTSw0QkFBNEIsQ0FBQztBQUNySCxPQUFPLEVBQUMsTUFBTSxFQUFFLGFBQWEsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBRTNFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDZEQUE2RCxDQUFDO0FBQzlGLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLDJEQUEyRCxDQUFDO0FBQzlGLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxpRUFBaUUsQ0FBQztBQUU5RixPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sa0RBQWtELENBQUM7QUFDN0UsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sMENBQTBDLENBQUM7QUFDM0UsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sMERBQTBELENBQUM7QUFDbEcsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNENBQTRDLENBQUM7Ozs7Ozs7Ozs7QUFXN0UsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGlCQUFpQjtJQUl6RCxZQUNjLFNBQXdCLEVBQ3hCLFdBQW1DLEVBQ25DLG1CQUEyQyxFQUMzQyxhQUFnQyxFQUNoQyxLQUF3QixFQUN4QixZQUFzQztRQUVo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QWMsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFDO2dCQUNoRCxFQUFDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUM7YUFDbkU7O1lDbEJELEFBREosOEJBQTZDLGtCQVVOO1lBRDVCLEFBREEsOEpBQWlCLG9CQUFnQixLQUFDLG9LQUN6QixpQ0FBMEIsS0FBQztZQVIzQyxpQkFTbUM7WUFDbkMsK0JBQWlEO1lBQzdDLGlDQUNjO1lBRXRCLEFBREksaUJBQU8sRUFDTDs7O1lBVkssY0FBa0g7WUFBbEgseUlBQWtIO1lBRWxILEFBREEsQUFGQSxBQURBLEFBREEsbUNBQWlCLGlDQUNXLGtEQUNpQixzQ0FFWiw0QkFDVjtZQUtiLGVBQW9DO1lBQXBDLHlEQUFvQzs7O2lGRFM1QyxzQkFBc0I7Y0FUbEMsU0FBUzsyQkFDSSxnQkFBZ0IsYUFHZjtvQkFDUCxFQUFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBQztvQkFDaEQsRUFBQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFDO2lCQUNuRTs7a0ZBRVEsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmdiRGF0ZUFkYXB0ZXIsIE5nYkRhdGVQYXJzZXJGb3JtYXR0ZXIsIE5nYkRhdGVTdHJ1Y3QsIE5nYklucHV0RGF0ZXBpY2tlcn0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHtpc1ZvaWQsIGlzRW1wdHlTdHJpbmd9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi91dGlscy92YWx1ZS11dGlscyc7XG5pbXBvcnQge0J1dHRvbkludGVyZmFjZX0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5tb2RlbCc7XG5pbXBvcnQge0RhdGFUeXBlRm9ybWF0dGVyfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9mb3JtYXR0ZXJzL2RhdGEtdHlwZS5mb3JtYXR0ZXIuc2VydmljZSc7XG5pbXBvcnQge0RhdGVQYXJzZXJGb3JtYXR0ZXJ9IGZyb20gJy4uLy4uLy4uL2Jhc2UvZGF0ZXRpbWUvZGF0ZS9kYXRlLXBhcnNlci1mb3JtYXR0ZXIuc2VydmljZSc7XG5pbXBvcnQge0RhdGVGb3JtYXR0ZXJ9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL2Zvcm1hdHRlcnMvZGF0ZXRpbWUvZGF0ZS1mb3JtYXR0ZXIuc2VydmljZSc7XG5pbXBvcnQge1BsYWNlbWVudEFycmF5fSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcC91dGlsL3Bvc2l0aW9uaW5nJztcbmltcG9ydCB7RGF0ZUFkYXB0ZXJ9IGZyb20gJy4uLy4uLy4uL2Jhc2UvZGF0ZXRpbWUvZGF0ZS9kYXRlLWFkYXB0ZXIuc2VydmljZSc7XG5pbXBvcnQge0ZpZWxkTG9naWNNYW5hZ2VyfSBmcm9tICcuLi8uLi8uLi9maWVsZC1sb2dpYy9maWVsZC1sb2dpYy5tYW5hZ2VyJztcbmltcG9ydCB7RmllbGRMb2dpY0Rpc3BsYXlNYW5hZ2VyfSBmcm9tICcuLi8uLi8uLi9maWVsZC1sb2dpYy1kaXNwbGF5L2ZpZWxkLWxvZ2ljLWRpc3BsYXkubWFuYWdlcic7XG5pbXBvcnQge0Jhc2VEYXRlQ29tcG9uZW50fSBmcm9tICcuLi8uLi8uLi9iYXNlL2RhdGV0aW1lL2Jhc2UtZGF0ZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tZGF0ZS1lZGl0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZGF0ZS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge3Byb3ZpZGU6IE5nYkRhdGVBZGFwdGVyLCB1c2VDbGFzczogRGF0ZUFkYXB0ZXJ9LFxuICAgICAgICB7cHJvdmlkZTogTmdiRGF0ZVBhcnNlckZvcm1hdHRlciwgdXNlQ2xhc3M6IERhdGVQYXJzZXJGb3JtYXR0ZXJ9XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRlRWRpdEZpZWxkQ29tcG9uZW50IGV4dGVuZHMgQmFzZURhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBwdWJsaWMgZGF0ZU1vZGVsOiBOZ2JEYXRlU3RydWN0O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBmb3JtYXR0ZXI6IERhdGVGb3JtYXR0ZXIsXG4gICAgICAgIHByb3RlY3RlZCBkYXRlQWRhcHRlcjogTmdiRGF0ZUFkYXB0ZXI8c3RyaW5nPixcbiAgICAgICAgcHJvdGVjdGVkIGRhdGVQYXJzZXJGb3JtYXR0ZXI6IE5nYkRhdGVQYXJzZXJGb3JtYXR0ZXIsXG4gICAgICAgIHByb3RlY3RlZCB0eXBlRm9ybWF0dGVyOiBEYXRhVHlwZUZvcm1hdHRlcixcbiAgICAgICAgcHJvdGVjdGVkIGxvZ2ljOiBGaWVsZExvZ2ljTWFuYWdlcixcbiAgICAgICAgcHJvdGVjdGVkIGxvZ2ljRGlzcGxheTogRmllbGRMb2dpY0Rpc3BsYXlNYW5hZ2VyXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKGZvcm1hdHRlciwgdHlwZUZvcm1hdHRlciwgbG9naWMsIGxvZ2ljRGlzcGxheSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICAgICAgLy8gTm90ZTogaGFuZGxlIE5nYkRhdGVQaWNrZXIgZGVmYXVsdCB2YWxpZGF0aW9uXG4gICAgICAgIC8vIE5vdGU6IGNvbnZlcnQgZW1wdHkgZm9ybSB2YWx1ZSB0byBudWxsIGZvciB0aGUgbmdiIGRhdGUgdmFsaWRhdG9yIHRvIHBhc3MgaXRcbiAgICAgICAgaWYgKGlzVm9pZCh0aGlzLmZpZWxkLnZhbHVlKSB8fCBpc0VtcHR5U3RyaW5nKHRoaXMuZmllbGQudmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLmZpZWxkLmZvcm1Db250cm9sLnNldFZhbHVlKG51bGwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5maWVsZC5mb3JtQ29udHJvbC5zZXRWYWx1ZSh0aGlzLmZvcm1hdHRlci50b1VzZXJGb3JtYXQodGhpcy5maWVsZC52YWx1ZSwge3RvRm9ybWF0OiB0aGlzLmdldERhdGVGb3JtYXQoKX0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFkYXB0ZXIgPSB0aGlzLmRhdGVBZGFwdGVyIGFzIERhdGVBZGFwdGVyO1xuICAgICAgICBhZGFwdGVyLnNldFVzZXJGb3JtYXQodGhpcy5nZXREYXRlRm9ybWF0KCkpO1xuICAgICAgICBjb25zdCBwYXJzZXJGb3JtYXR0ZXIgPSB0aGlzLmRhdGVQYXJzZXJGb3JtYXR0ZXIgYXMgRGF0ZVBhcnNlckZvcm1hdHRlcjtcbiAgICAgICAgcGFyc2VyRm9ybWF0dGVyLnNldFVzZXJGb3JtYXQodGhpcy5nZXREYXRlRm9ybWF0KCkpO1xuICAgICAgICB0aGlzLmRhdGVNb2RlbCA9IHRoaXMuZm9ybWF0dGVyLmRhdGVGb3JtYXRUb1N0cnVjdCh0aGlzLmZpZWxkLnZhbHVlLCB0aGlzLmZvcm1hdHRlci5nZXRJbnRlcm5hbEZvcm1hdCgpKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVWYWx1ZUNoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZUFsbCgpO1xuICAgIH1cblxuICAgIHNldE1vZGVsKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5maWVsZC52YWx1ZSA9IHRoaXMuZm9ybWF0dGVyLnRvSW50ZXJuYWxGb3JtYXQodmFsdWUsIHtmcm9tRm9ybWF0OiB0aGlzLmdldERhdGVGb3JtYXQoKX0pO1xuICAgICAgICB0aGlzLmRhdGVNb2RlbCA9IHRoaXMuZm9ybWF0dGVyLmRhdGVGb3JtYXRUb1N0cnVjdCh2YWx1ZSwgdGhpcy5nZXREYXRlRm9ybWF0KCkpO1xuICAgIH1cblxuICAgIGdldE9wZW5CdXR0b24oZGF0ZXBpY2tlcjogTmdiSW5wdXREYXRlcGlja2VyKTogQnV0dG9uSW50ZXJmYWNlIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGtsYXNzOiAnYnRuIGJ0bi1zbSBidG4tb3V0bGluZS1zZWNvbmRhcnkgbS0wIGJvcmRlci0wJyxcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtZnVuY3Rpb24tcmV0dXJuLXR5cGVcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBkYXRlcGlja2VyLnRvZ2dsZSgpO1xuICAgICAgICAgICAgICAgIGRhdGVwaWNrZXIubmF2aWdhdGVUbyh0aGlzLmRhdGVNb2RlbCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaWNvbjogJ2NhbGVuZGFyJ1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIG9wZW5EYXRlUGlja2VyKGRhdGVwaWNrZXI6IGFueSk6IHZvaWQge1xuICAgICAgICBkYXRlcGlja2VyLnRvZ2dsZSgpOyAvLyBPcGVuIHRoZSBkYXRlcGlja2VyIHBvcHVwXG4gICAgICAgIGRhdGVwaWNrZXIubmF2aWdhdGVUbyh0aGlzLmRhdGVNb2RlbCk7XG4gICAgfVxuXG4gICAgZ2V0UGxhY2VtZW50KCk6IFBsYWNlbWVudEFycmF5IHtcbiAgICAgICAgcmV0dXJuIFsnYm90dG9tLWxlZnQnLCAnYm90dG9tLXJpZ2h0JywgJ3RvcC1sZWZ0JywgJ3RvcC1yaWdodCddO1xuICAgIH1cblxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPGRpdiBjbGFzcz1cImZpZWxkLWRhdGV0aW1lLWVkaXQgaW5wdXQtZ3JvdXBcIj5cbiAgICA8aW5wdXQgbmdiRGF0ZXBpY2tlclxuICAgICAgICAgICBbbmdDbGFzc109XCJrbGFzc1wiXG4gICAgICAgICAgIFtwbGFjZW1lbnRdPVwiZ2V0UGxhY2VtZW50KClcIlxuICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiZ2V0RGF0ZUZvcm1hdCgpLnRvTG93ZXJDYXNlKClcIlxuICAgICAgICAgICBbY2xhc3MuaXMtaW52YWxpZF09XCJ2YWxpZGF0ZU9ubHlPblN1Ym1pdCA/IGlzSW52YWxpZCgpIDogKGZpZWxkLmZvcm1Db250cm9sLmludmFsaWQgJiYgZmllbGQuZm9ybUNvbnRyb2wudG91Y2hlZClcIlxuICAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwiZmllbGQuZm9ybUNvbnRyb2xcIlxuICAgICAgICAgICBbc3RhcnREYXRlXT1cImRhdGVNb2RlbFwiXG4gICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldE1vZGVsKCRldmVudClcIlxuICAgICAgICAgICAoY2xpY2spPVwib3BlbkRhdGVQaWNrZXIoZGF0ZXBpY2tlcilcIlxuICAgICAgICAgICAjZGF0ZXBpY2tlcj1cIm5nYkRhdGVwaWNrZXJcIj5cbiAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZCBhbGlnbi1pdGVtcy1lbmRcIj5cbiAgICAgICAgPHNjcm0tYnV0dG9uIFtjb25maWddPVwiZ2V0T3BlbkJ1dHRvbihkYXRlcGlja2VyKVwiPlxuICAgICAgICA8L3Njcm0tYnV0dG9uPlxuICAgIDwvc3Bhbj5cbjwvZGl2PlxuIl19