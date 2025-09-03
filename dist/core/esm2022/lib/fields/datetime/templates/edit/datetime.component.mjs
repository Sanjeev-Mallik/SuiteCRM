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
import { Component, ViewChild, } from '@angular/core';
import { NgbCalendar, NgbPopover, NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';
import { isVoid, isEmptyString } from '../../../../common/utils/value-utils';
import { BaseDateTimeComponent } from '../../../base/datetime/base-datetime.component';
import { DataTypeFormatter } from '../../../../services/formatters/data-type.formatter.service';
import { DatetimeFormatter } from "../../../../services/formatters/datetime/datetime-formatter.service";
import { DateTimeModel } from "../../datetime.model";
import { FieldLogicManager } from '../../../field-logic/field-logic.manager';
import { FieldLogicDisplayManager } from '../../../field-logic-display/field-logic-display.manager';
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/formatters/datetime/datetime-formatter.service";
import * as i2 from "../../../../services/formatters/data-type.formatter.service";
import * as i3 from "@ng-bootstrap/ng-bootstrap";
import * as i4 from "../../../field-logic/field-logic.manager";
import * as i5 from "../../../field-logic-display/field-logic-display.manager";
import * as i6 from "@angular/common";
import * as i7 from "@angular/forms";
import * as i8 from "../../../../components/button/button.component";
function DateTimeEditFieldComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "div")(2, "ngb-datepicker", 5);
    i0.ɵɵlistener("dateSelect", function DateTimeEditFieldComponent_ng_template_4_Template_ngb_datepicker_dateSelect_2_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onDateChange($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 6)(4, "ngb-timepicker", 7);
    i0.ɵɵlistener("ngModelChange", function DateTimeEditFieldComponent_ng_template_4_Template_ngb_timepicker_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onTimeChange($event)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r2.dateTimeModel.date)("startDate", ctx_r2.dateTimeModel.date);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r2.dateTimeModel.time)("seconds", ctx_r2.dateTimeModel.displaySeconds)("hourStep", ctx_r2.dateTimeModel.hourStep)("minuteStep", ctx_r2.dateTimeModel.minuteStep)("secondStep", ctx_r2.dateTimeModel.secondStep);
} }
export class DateTimeEditFieldComponent extends BaseDateTimeComponent {
    constructor(formatter, typeFormatter, calendar, config, logic, logicDisplay) {
        super(formatter, typeFormatter, logic, logicDisplay);
        this.formatter = formatter;
        this.typeFormatter = typeFormatter;
        this.calendar = calendar;
        this.config = config;
        this.logic = logic;
        this.logicDisplay = logicDisplay;
        this.dateTimeModel = new DateTimeModel();
        config.autoClose = "outside";
        config.placement = this.getPlacement();
    }
    ngOnInit() {
        // Note: handle NgbDatePicker default validation
        // Note: convert empty form value to null for the ngb date validator to pass it
        if (isVoid(this.field.value) || isEmptyString(this.field.value)) {
            this.dateTimeModel.date = this.calendar.getToday();
            this.dateTimeModel.time = { hour: 0, minute: 0, second: 0 };
            this.field.formControl.setValue(null);
        }
        else {
            this.dateTimeModel = DateTimeModel.internalToDateTimeStruct(this.formatter, this.field.value);
            if (this.dateTimeModel === null) {
                this.field.formControl.setValue(null);
                return;
            }
            this.setFormValues(this.dateTimeModel.toUserFormat(this.formatter, { toFormat: this.getDateTimeFormat() }));
        }
        // enable seconds in timepicker
        if (this.formatter.getTimeFormat().includes('ss')) {
            this.dateTimeModel.displaySeconds = true;
        }
        this.subscribeValueChanges();
    }
    ngOnDestroy() {
        this.unsubscribeAll();
    }
    setFormValues(dateTimeString) {
        this.field.formControl.setValue(dateTimeString);
    }
    onDateChange(date) {
        this.dateTimeModel.date = date;
        this.setFormValues(this.dateTimeModel.toUserFormat(this.formatter, { toFormat: this.getDateTimeFormat() }));
        this.field.formControl.markAsDirty();
    }
    onTimeChange(time) {
        this.dateTimeModel.time = time;
        this.setFormValues(this.dateTimeModel.toUserFormat(this.formatter, { toFormat: this.getDateTimeFormat() }));
        this.field.formControl.markAsDirty();
    }
    onInputChange($event) {
        const dateTimeModel = DateTimeModel.toDateTimeStruct(this.formatter, $event.target.value);
        if (!dateTimeModel) {
            return;
        }
        this.dateTimeModel = dateTimeModel;
    }
    getOpenButton() {
        return {
            klass: 'btn btn-sm btn-outline-secondary m-0 border-0',
            icon: 'calendar'
        };
    }
    getPlacement() {
        return ['bottom-right', 'top-right', 'bottom-left', 'top-left'];
    }
    static { this.ɵfac = function DateTimeEditFieldComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DateTimeEditFieldComponent)(i0.ɵɵdirectiveInject(i1.DatetimeFormatter), i0.ɵɵdirectiveInject(i2.DataTypeFormatter), i0.ɵɵdirectiveInject(i3.NgbCalendar), i0.ɵɵdirectiveInject(i3.NgbPopoverConfig), i0.ɵɵdirectiveInject(i4.FieldLogicManager), i0.ɵɵdirectiveInject(i5.FieldLogicDisplayManager)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DateTimeEditFieldComponent, selectors: [["scrm-datetime-edit"]], viewQuery: function DateTimeEditFieldComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(NgbPopover, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.popover = _t.first);
        } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 6, vars: 8, consts: [["calendarContent", ""], [1, "input-group", "mr-2"], [3, "change", "ngClass", "placeholder", "formControl", "ngbPopover"], [1, "input-group-append"], [3, "config", "ngbPopover"], ["name", "datepicker", 3, "dateSelect", "ngModel", "startDate"], [1, "d-flex", "justify-content-center", "mt-auto"], ["name", "timepicker", 3, "ngModelChange", "ngModel", "seconds", "hourStep", "minuteStep", "secondStep"]], template: function DateTimeEditFieldComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1)(1, "input", 2);
            i0.ɵɵlistener("change", function DateTimeEditFieldComponent_Template_input_change_1_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onInputChange($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "div", 3);
            i0.ɵɵelement(3, "scrm-button", 4);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(4, DateTimeEditFieldComponent_ng_template_4_Template, 5, 7, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            const calendarContent_r4 = i0.ɵɵreference(5);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("is-invalid", ctx.validateOnlyOnSubmit ? ctx.isInvalid() : ctx.field.formControl.invalid && ctx.field.formControl.touched);
            i0.ɵɵproperty("ngClass", ctx.klass)("placeholder", ctx.getDateTimeFormat().toLowerCase())("formControl", ctx.field.formControl)("ngbPopover", calendarContent_r4);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("config", ctx.getOpenButton())("ngbPopover", calendarContent_r4);
        } }, dependencies: [i6.NgClass, i7.DefaultValueAccessor, i7.NgControlStatus, i7.NgModel, i3.NgbDatepicker, i3.NgbTimepicker, i8.ButtonComponent, i7.FormControlDirective, i3.NgbPopover], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DateTimeEditFieldComponent, [{
        type: Component,
        args: [{ selector: 'scrm-datetime-edit', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n\n<div class=\"input-group mr-2\">\n\n    <input\n        [ngClass]=\"klass\"\n        [placeholder]=\"getDateTimeFormat().toLowerCase()\"\n        [class.is-invalid]=\"validateOnlyOnSubmit ? isInvalid() : (field.formControl.invalid && field.formControl.touched)\"\n        [formControl]=\"field.formControl\"\n        (change)=\"onInputChange($event)\"\n        [ngbPopover]=\"calendarContent\"\n    >\n\n    <div class=\"input-group-append\">\n        <scrm-button [config]=\"getOpenButton()\" [ngbPopover]=\"calendarContent\">\n        </scrm-button>\n    </div>\n</div>\n\n<ng-template #calendarContent>\n    <div>\n        <div>\n            <ngb-datepicker name=\"datepicker\"\n                            [ngModel]=\"dateTimeModel.date\"\n                            (dateSelect)=\"onDateChange($event)\" [startDate]=\"dateTimeModel.date\"></ngb-datepicker>\n        </div>\n\n        <div class=\"d-flex justify-content-center mt-auto\">\n            <ngb-timepicker name=\"timepicker\"\n                            [ngModel]=\"dateTimeModel.time\" (ngModelChange)=\"onTimeChange($event)\"\n                            [seconds]=\"dateTimeModel.displaySeconds\" [hourStep]=\"dateTimeModel.hourStep\"\n                            [minuteStep]=\"dateTimeModel.minuteStep\"\n                            [secondStep]=\"dateTimeModel.secondStep\">\n            </ngb-timepicker>\n        </div>\n    </div>\n</ng-template>\n" }]
    }], () => [{ type: i1.DatetimeFormatter }, { type: i2.DataTypeFormatter }, { type: i3.NgbCalendar }, { type: i3.NgbPopoverConfig }, { type: i4.FieldLogicManager }, { type: i5.FieldLogicDisplayManager }], { popover: [{
            type: ViewChild,
            args: [NgbPopover, { static: true }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DateTimeEditFieldComponent, { className: "DateTimeEditFieldComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXRpbWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2ZpZWxkcy9kYXRldGltZS90ZW1wbGF0ZXMvZWRpdC9kYXRldGltZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvZmllbGRzL2RhdGV0aW1lL3RlbXBsYXRlcy9lZGl0L2RhdGV0aW1lLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFxQixTQUFTLEdBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFDLFdBQVcsRUFBaUIsVUFBVSxFQUFFLGdCQUFnQixFQUFnQixNQUFNLDRCQUE0QixDQUFDO0FBQ25ILE9BQU8sRUFBQyxNQUFNLEVBQUUsYUFBYSxFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFFM0UsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sZ0RBQWdELENBQUM7QUFDckYsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNkRBQTZELENBQUM7QUFDOUYsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0scUVBQXFFLENBQUM7QUFDdEcsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRW5ELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDBDQUEwQyxDQUFDO0FBQzNFLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLDBEQUEwRCxDQUFDOzs7Ozs7Ozs7Ozs7SUNZdEYsQUFESixBQURKLDJCQUFLLFVBQ0ksd0JBR29GO0lBQXJFLHNOQUFjLDJCQUFvQixLQUFDO0lBQ3ZELEFBRHlGLGlCQUFpQixFQUNwRztJQUdGLEFBREosOEJBQW1ELHdCQUtTO0lBSFQsNE5BQWlC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OEJBQThCLGVBU3pCO1lBRkcsb0pBQVUseUJBQXFCLEtBQUM7WUFMcEMsaUJBT0M7WUFFRCw4QkFBZ0M7WUFDNUIsaUNBQ2M7WUFFdEIsQUFESSxpQkFBTSxFQUNKO1lBRU4sNEhBQThCOzs7WUFadEIsY0FBa0g7WUFBbEgseUlBQWtIO1lBR2xILEFBRkEsQUFGQSxBQURBLG1DQUFpQixzREFDZ0Msc0NBRWhCLGtDQUVIO1lBSWpCLGVBQTBCO1lBQUMsQUFBM0IsNENBQTBCLGtDQUErQjs7O2lGREdqRSwwQkFBMEI7Y0FMdEMsU0FBUzsyQkFDSSxvQkFBb0I7a05BT3RCLE9BQU87a0JBRGQsU0FBUzttQkFBQyxVQUFVLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDOztrRkFGNUIsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIFZpZXdDaGlsZCx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOZ2JDYWxlbmRhciwgTmdiRGF0ZVN0cnVjdCwgTmdiUG9wb3ZlciwgTmdiUG9wb3ZlckNvbmZpZywgTmdiVGltZVN0cnVjdH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHtpc1ZvaWQsIGlzRW1wdHlTdHJpbmd9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi91dGlscy92YWx1ZS11dGlscyc7XG5pbXBvcnQge0J1dHRvbkludGVyZmFjZX0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5tb2RlbCc7XG5pbXBvcnQge0Jhc2VEYXRlVGltZUNvbXBvbmVudH0gZnJvbSAnLi4vLi4vLi4vYmFzZS9kYXRldGltZS9iYXNlLWRhdGV0aW1lLmNvbXBvbmVudCc7XG5pbXBvcnQge0RhdGFUeXBlRm9ybWF0dGVyfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9mb3JtYXR0ZXJzL2RhdGEtdHlwZS5mb3JtYXR0ZXIuc2VydmljZSc7XG5pbXBvcnQge0RhdGV0aW1lRm9ybWF0dGVyfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZXMvZm9ybWF0dGVycy9kYXRldGltZS9kYXRldGltZS1mb3JtYXR0ZXIuc2VydmljZVwiO1xuaW1wb3J0IHtEYXRlVGltZU1vZGVsfSBmcm9tIFwiLi4vLi4vZGF0ZXRpbWUubW9kZWxcIjtcbmltcG9ydCB7UGxhY2VtZW50QXJyYXl9IGZyb20gXCJAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcC91dGlsL3Bvc2l0aW9uaW5nXCI7XG5pbXBvcnQge0ZpZWxkTG9naWNNYW5hZ2VyfSBmcm9tICcuLi8uLi8uLi9maWVsZC1sb2dpYy9maWVsZC1sb2dpYy5tYW5hZ2VyJztcbmltcG9ydCB7RmllbGRMb2dpY0Rpc3BsYXlNYW5hZ2VyfSBmcm9tICcuLi8uLi8uLi9maWVsZC1sb2dpYy1kaXNwbGF5L2ZpZWxkLWxvZ2ljLWRpc3BsYXkubWFuYWdlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1kYXRldGltZS1lZGl0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZGF0ZXRpbWUuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW11cbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVRpbWVFZGl0RmllbGRDb21wb25lbnQgZXh0ZW5kcyBCYXNlRGF0ZVRpbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBAVmlld0NoaWxkKE5nYlBvcG92ZXIsIHtzdGF0aWM6IHRydWV9KVxuICAgIHByaXZhdGUgcG9wb3ZlcjogTmdiUG9wb3ZlcjtcblxuICAgIGRhdGVUaW1lTW9kZWw6IERhdGVUaW1lTW9kZWwgPSBuZXcgRGF0ZVRpbWVNb2RlbCgpO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBmb3JtYXR0ZXI6IERhdGV0aW1lRm9ybWF0dGVyLFxuICAgICAgICBwcm90ZWN0ZWQgdHlwZUZvcm1hdHRlcjogRGF0YVR5cGVGb3JtYXR0ZXIsXG4gICAgICAgIHByb3RlY3RlZCBjYWxlbmRhcjogTmdiQ2FsZW5kYXIsXG4gICAgICAgIHByb3RlY3RlZCBjb25maWc6IE5nYlBvcG92ZXJDb25maWcsXG4gICAgICAgIHByb3RlY3RlZCBsb2dpYzogRmllbGRMb2dpY01hbmFnZXIsXG4gICAgICAgIHByb3RlY3RlZCBsb2dpY0Rpc3BsYXk6IEZpZWxkTG9naWNEaXNwbGF5TWFuYWdlclxuICAgICkge1xuICAgICAgICBzdXBlcihmb3JtYXR0ZXIsIHR5cGVGb3JtYXR0ZXIsIGxvZ2ljLCBsb2dpY0Rpc3BsYXkpO1xuICAgICAgICBjb25maWcuYXV0b0Nsb3NlID0gXCJvdXRzaWRlXCI7XG4gICAgICAgIGNvbmZpZy5wbGFjZW1lbnQgPSB0aGlzLmdldFBsYWNlbWVudCgpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgICAgIC8vIE5vdGU6IGhhbmRsZSBOZ2JEYXRlUGlja2VyIGRlZmF1bHQgdmFsaWRhdGlvblxuICAgICAgICAvLyBOb3RlOiBjb252ZXJ0IGVtcHR5IGZvcm0gdmFsdWUgdG8gbnVsbCBmb3IgdGhlIG5nYiBkYXRlIHZhbGlkYXRvciB0byBwYXNzIGl0XG4gICAgICAgIGlmIChpc1ZvaWQodGhpcy5maWVsZC52YWx1ZSkgfHwgaXNFbXB0eVN0cmluZyh0aGlzLmZpZWxkLnZhbHVlKSkge1xuICAgICAgICAgICAgdGhpcy5kYXRlVGltZU1vZGVsLmRhdGUgPSB0aGlzLmNhbGVuZGFyLmdldFRvZGF5KCkgYXMgTmdiRGF0ZVN0cnVjdDtcbiAgICAgICAgICAgIHRoaXMuZGF0ZVRpbWVNb2RlbC50aW1lID0ge2hvdXI6IDAsIG1pbnV0ZTogMCwgc2Vjb25kOiAwfSBhcyBOZ2JUaW1lU3RydWN0O1xuICAgICAgICAgICAgdGhpcy5maWVsZC5mb3JtQ29udHJvbC5zZXRWYWx1ZShudWxsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGF0ZVRpbWVNb2RlbCA9IERhdGVUaW1lTW9kZWwuaW50ZXJuYWxUb0RhdGVUaW1lU3RydWN0KHRoaXMuZm9ybWF0dGVyLCB0aGlzLmZpZWxkLnZhbHVlKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGVUaW1lTW9kZWwgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpZWxkLmZvcm1Db250cm9sLnNldFZhbHVlKG51bGwpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0Rm9ybVZhbHVlcyh0aGlzLmRhdGVUaW1lTW9kZWwudG9Vc2VyRm9ybWF0KHRoaXMuZm9ybWF0dGVyLCB7dG9Gb3JtYXQ6IHRoaXMuZ2V0RGF0ZVRpbWVGb3JtYXQoKX0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGVuYWJsZSBzZWNvbmRzIGluIHRpbWVwaWNrZXJcbiAgICAgICAgaWYgKHRoaXMuZm9ybWF0dGVyLmdldFRpbWVGb3JtYXQoKS5pbmNsdWRlcygnc3MnKSkge1xuICAgICAgICAgICAgdGhpcy5kYXRlVGltZU1vZGVsLmRpc3BsYXlTZWNvbmRzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlVmFsdWVDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmVBbGwoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2V0Rm9ybVZhbHVlcyhkYXRlVGltZVN0cmluZzogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZmllbGQuZm9ybUNvbnRyb2wuc2V0VmFsdWUoZGF0ZVRpbWVTdHJpbmcpO1xuICAgIH1cblxuICAgIG9uRGF0ZUNoYW5nZShkYXRlOiBOZ2JEYXRlU3RydWN0IHwgbnVsbCkge1xuICAgICAgICB0aGlzLmRhdGVUaW1lTW9kZWwuZGF0ZSA9IGRhdGU7XG4gICAgICAgIHRoaXMuc2V0Rm9ybVZhbHVlcyh0aGlzLmRhdGVUaW1lTW9kZWwudG9Vc2VyRm9ybWF0KHRoaXMuZm9ybWF0dGVyLCB7dG9Gb3JtYXQ6IHRoaXMuZ2V0RGF0ZVRpbWVGb3JtYXQoKX0pKTtcbiAgICAgICAgdGhpcy5maWVsZC5mb3JtQ29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICAgIH1cblxuICAgIG9uVGltZUNoYW5nZSh0aW1lOiBOZ2JUaW1lU3RydWN0IHwgbnVsbCkge1xuICAgICAgICB0aGlzLmRhdGVUaW1lTW9kZWwudGltZSA9IHRpbWU7XG4gICAgICAgIHRoaXMuc2V0Rm9ybVZhbHVlcyh0aGlzLmRhdGVUaW1lTW9kZWwudG9Vc2VyRm9ybWF0KHRoaXMuZm9ybWF0dGVyLCB7dG9Gb3JtYXQ6IHRoaXMuZ2V0RGF0ZVRpbWVGb3JtYXQoKX0pKTtcbiAgICAgICAgdGhpcy5maWVsZC5mb3JtQ29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICAgIH1cblxuICAgIG9uSW5wdXRDaGFuZ2UoJGV2ZW50OiBhbnkpIHtcbiAgICAgICAgY29uc3QgZGF0ZVRpbWVNb2RlbCA9IERhdGVUaW1lTW9kZWwudG9EYXRlVGltZVN0cnVjdCh0aGlzLmZvcm1hdHRlciwgJGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgIGlmKCFkYXRlVGltZU1vZGVsKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRhdGVUaW1lTW9kZWwgPSBkYXRlVGltZU1vZGVsO1xuICAgIH1cblxuICAgIGdldE9wZW5CdXR0b24oKTogQnV0dG9uSW50ZXJmYWNlIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGtsYXNzOiAnYnRuIGJ0bi1zbSBidG4tb3V0bGluZS1zZWNvbmRhcnkgbS0wIGJvcmRlci0wJyxcbiAgICAgICAgICAgIGljb246ICdjYWxlbmRhcidcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXRQbGFjZW1lbnQoKTogUGxhY2VtZW50QXJyYXkge1xuICAgICAgICByZXR1cm4gWydib3R0b20tcmlnaHQnLCAndG9wLXJpZ2h0JywgJ2JvdHRvbS1sZWZ0JywgJ3RvcC1sZWZ0J107XG4gICAgfVxuXG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG5cbjxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBtci0yXCI+XG5cbiAgICA8aW5wdXRcbiAgICAgICAgW25nQ2xhc3NdPVwia2xhc3NcIlxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwiZ2V0RGF0ZVRpbWVGb3JtYXQoKS50b0xvd2VyQ2FzZSgpXCJcbiAgICAgICAgW2NsYXNzLmlzLWludmFsaWRdPVwidmFsaWRhdGVPbmx5T25TdWJtaXQgPyBpc0ludmFsaWQoKSA6IChmaWVsZC5mb3JtQ29udHJvbC5pbnZhbGlkICYmIGZpZWxkLmZvcm1Db250cm9sLnRvdWNoZWQpXCJcbiAgICAgICAgW2Zvcm1Db250cm9sXT1cImZpZWxkLmZvcm1Db250cm9sXCJcbiAgICAgICAgKGNoYW5nZSk9XCJvbklucHV0Q2hhbmdlKCRldmVudClcIlxuICAgICAgICBbbmdiUG9wb3Zlcl09XCJjYWxlbmRhckNvbnRlbnRcIlxuICAgID5cblxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cbiAgICAgICAgPHNjcm0tYnV0dG9uIFtjb25maWddPVwiZ2V0T3BlbkJ1dHRvbigpXCIgW25nYlBvcG92ZXJdPVwiY2FsZW5kYXJDb250ZW50XCI+XG4gICAgICAgIDwvc2NybS1idXR0b24+XG4gICAgPC9kaXY+XG48L2Rpdj5cblxuPG5nLXRlbXBsYXRlICNjYWxlbmRhckNvbnRlbnQ+XG4gICAgPGRpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxuZ2ItZGF0ZXBpY2tlciBuYW1lPVwiZGF0ZXBpY2tlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nTW9kZWxdPVwiZGF0ZVRpbWVNb2RlbC5kYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZGF0ZVNlbGVjdCk9XCJvbkRhdGVDaGFuZ2UoJGV2ZW50KVwiIFtzdGFydERhdGVdPVwiZGF0ZVRpbWVNb2RlbC5kYXRlXCI+PC9uZ2ItZGF0ZXBpY2tlcj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LWF1dG9cIj5cbiAgICAgICAgICAgIDxuZ2ItdGltZXBpY2tlciBuYW1lPVwidGltZXBpY2tlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nTW9kZWxdPVwiZGF0ZVRpbWVNb2RlbC50aW1lXCIgKG5nTW9kZWxDaGFuZ2UpPVwib25UaW1lQ2hhbmdlKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzZWNvbmRzXT1cImRhdGVUaW1lTW9kZWwuZGlzcGxheVNlY29uZHNcIiBbaG91clN0ZXBdPVwiZGF0ZVRpbWVNb2RlbC5ob3VyU3RlcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW21pbnV0ZVN0ZXBdPVwiZGF0ZVRpbWVNb2RlbC5taW51dGVTdGVwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc2Vjb25kU3RlcF09XCJkYXRlVGltZU1vZGVsLnNlY29uZFN0ZXBcIj5cbiAgICAgICAgICAgIDwvbmdiLXRpbWVwaWNrZXI+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==