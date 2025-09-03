/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2023 SalesAgility Ltd.
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
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FieldManager } from "../../../../services/record/field/field.manager";
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/record/field/field.manager";
import * as i2 from "@angular/common";
import * as i3 from "../popup-button/popup-button.component";
import * as i4 from "../../../../fields/field.component";
import * as i5 from "../../../label/label.component";
function RecordDetailsPopupButtonComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4)(1, "div", 5);
    i0.ɵɵelement(2, "scrm-label", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 7);
    i0.ɵɵelement(4, "scrm-field", 8);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const column_r1 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("labelKey", column_r1.label)("module", ctx_r1.record.module);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("mode", "list")("field", ctx_r1.getField(column_r1, ctx_r1.record))("type", column_r1.type)("record", ctx_r1.record);
} }
function RecordDetailsPopupButtonComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtemplate(1, RecordDetailsPopupButtonComponent_div_1_div_1_Template, 5, 6, "div", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.columns);
} }
export class RecordDetailsPopupButtonComponent {
    constructor(fieldManager) {
        this.fieldManager = fieldManager;
    }
    getField(column, record) {
        if (!column || !record) {
            return null;
        }
        return this.fieldManager.addField(record, column);
    }
    static { this.ɵfac = function RecordDetailsPopupButtonComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RecordDetailsPopupButtonComponent)(i0.ɵɵdirectiveInject(i1.FieldManager)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RecordDetailsPopupButtonComponent, selectors: [["scrm-record-details-popup-button"]], inputs: { record: "record", columns: "columns" }, decls: 2, vars: 2, consts: [[3, "icon"], ["popup-content", "", "class", "container container-popover scrollbar-thin", 4, "ngIf"], ["popup-content", "", 1, "container", "container-popover", "scrollbar-thin"], ["class", "row py-1", 4, "ngFor", "ngForOf"], [1, "row", "py-1"], [1, "col", "font-weight-bold", "text-muted"], [3, "labelKey", "module"], [1, "col"], [3, "mode", "field", "type", "record"]], template: function RecordDetailsPopupButtonComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "scrm-popup-button", 0);
            i0.ɵɵtemplate(1, RecordDetailsPopupButtonComponent_div_1_Template, 2, 1, "div", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("icon", "dots-vertical");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.columns);
        } }, dependencies: [i2.NgForOf, i2.NgIf, i3.PopupButtonComponent, i4.FieldComponent, i5.LabelComponent], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordDetailsPopupButtonComponent, [{
        type: Component,
        args: [{ selector: 'scrm-record-details-popup-button', changeDetection: ChangeDetectionStrategy.OnPush, template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2023 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<scrm-popup-button [icon]=\"'dots-vertical'\">\n    <div popup-content *ngIf=\"columns\" class=\"container container-popover scrollbar-thin\">\n        <div *ngFor=\"let column of columns\" class=\"row py-1\">\n            <div class=\"col font-weight-bold text-muted\">\n                <scrm-label [labelKey]=\"column.label\" [module]=\"record.module\"></scrm-label>\n            </div>\n            <div class=\"col\">\n                <scrm-field [mode]=\"'list'\"\n                            [field]=\"getField(column, record)\"\n                            [type]=\"column.type\"\n                            [record]=\"record\">\n                </scrm-field>\n            </div>\n        </div>\n    </div>\n</scrm-popup-button>\n" }]
    }], () => [{ type: i1.FieldManager }], { record: [{
            type: Input
        }], columns: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RecordDetailsPopupButtonComponent, { className: "RecordDetailsPopupButtonComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLWRldGFpbHMtcG9wdXAtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb21wb25lbnRzL3BvcHVwcy9jb21wb25lbnRzL3JlY29yZC1kZXRhaWxzLXBvcHVwLWJ1dHRvbi9yZWNvcmQtZGV0YWlscy1wb3B1cC1idXR0b24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvcG9wdXBzL2NvbXBvbmVudHMvcmVjb3JkLWRldGFpbHMtcG9wdXAtYnV0dG9uL3JlY29yZC1kZXRhaWxzLXBvcHVwLWJ1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFJeEUsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlEQUFpRCxDQUFDOzs7Ozs7OztJQ0FqRSxBQURKLDhCQUFxRCxhQUNKO0lBQ3pDLGdDQUE0RTtJQUNoRixpQkFBTTtJQUNOLDhCQUFpQjtJQUNiLGdDQUlhO0lBRXJCLEFBREksaUJBQU0sRUFDSjs7OztJQVRjLGVBQXlCO0lBQUMsQUFBMUIsMENBQXlCLGdDQUF5QjtJQUdsRCxlQUFlO0lBR2YsQUFEQSxBQURBLEFBREEsNkJBQWUsb0RBQ21CLHdCQUNkLHlCQUNIOzs7SUFUekMsOEJBQXNGO0lBQ2xGLHdGQUFxRDtJQVl6RCxpQkFBTTs7O0lBWnNCLGNBQVU7SUFBVix3Q0FBVTs7QURTMUMsTUFBTSxPQUFPLGlDQUFpQztJQUsxQyxZQUFzQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUNoRCxDQUFDO0lBRUQsUUFBUSxDQUFDLE1BQXdCLEVBQUUsTUFBYztRQUU3QyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDckIsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3RELENBQUM7a0lBZlEsaUNBQWlDO29FQUFqQyxpQ0FBaUM7WUNYOUMsNENBQTRDO1lBQ3hDLGtGQUFzRjtZQWMxRixpQkFBb0I7O1lBZkQsc0NBQXdCO1lBQ25CLGNBQWE7WUFBYixrQ0FBYTs7O2lGRFV4QixpQ0FBaUM7Y0FON0MsU0FBUzsyQkFDSSxrQ0FBa0MsbUJBRTNCLHVCQUF1QixDQUFDLE1BQU07NkNBS3RDLE1BQU07a0JBQWQsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSzs7a0ZBSEcsaUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjMgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29sdW1uRGVmaW5pdGlvbn0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL21ldGFkYXRhL2xpc3QubWV0YWRhdGEubW9kZWwnO1xuaW1wb3J0IHtGaWVsZH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3JlY29yZC9maWVsZC5tb2RlbCc7XG5pbXBvcnQge1JlY29yZH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3JlY29yZC9yZWNvcmQubW9kZWwnO1xuaW1wb3J0IHtGaWVsZE1hbmFnZXJ9IGZyb20gXCIuLi8uLi8uLi8uLi9zZXJ2aWNlcy9yZWNvcmQvZmllbGQvZmllbGQubWFuYWdlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tcmVjb3JkLWRldGFpbHMtcG9wdXAtYnV0dG9uJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3JlY29yZC1kZXRhaWxzLXBvcHVwLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5cbmV4cG9ydCBjbGFzcyBSZWNvcmREZXRhaWxzUG9wdXBCdXR0b25Db21wb25lbnQge1xuXG4gICAgQElucHV0KCkgcmVjb3JkOiBSZWNvcmQ7XG4gICAgQElucHV0KCkgY29sdW1uczogQ29sdW1uRGVmaW5pdGlvbltdO1xuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGZpZWxkTWFuYWdlcjogRmllbGRNYW5hZ2VyKSB7XG4gICAgfVxuXG4gICAgZ2V0RmllbGQoY29sdW1uOiBDb2x1bW5EZWZpbml0aW9uLCByZWNvcmQ6IFJlY29yZCk6IEZpZWxkIHtcblxuICAgICAgICBpZiAoIWNvbHVtbiB8fCAhcmVjb3JkKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkTWFuYWdlci5hZGRGaWVsZChyZWNvcmQsIGNvbHVtbik7XG4gICAgfVxuXG5cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjMgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjxzY3JtLXBvcHVwLWJ1dHRvbiBbaWNvbl09XCInZG90cy12ZXJ0aWNhbCdcIj5cbiAgICA8ZGl2IHBvcHVwLWNvbnRlbnQgKm5nSWY9XCJjb2x1bW5zXCIgY2xhc3M9XCJjb250YWluZXIgY29udGFpbmVyLXBvcG92ZXIgc2Nyb2xsYmFyLXRoaW5cIj5cbiAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGNvbHVtbnNcIiBjbGFzcz1cInJvdyBweS0xXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIGZvbnQtd2VpZ2h0LWJvbGQgdGV4dC1tdXRlZFwiPlxuICAgICAgICAgICAgICAgIDxzY3JtLWxhYmVsIFtsYWJlbEtleV09XCJjb2x1bW4ubGFiZWxcIiBbbW9kdWxlXT1cInJlY29yZC5tb2R1bGVcIj48L3Njcm0tbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8c2NybS1maWVsZCBbbW9kZV09XCInbGlzdCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmaWVsZF09XCJnZXRGaWVsZChjb2x1bW4sIHJlY29yZClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0eXBlXT1cImNvbHVtbi50eXBlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcmVjb3JkXT1cInJlY29yZFwiPlxuICAgICAgICAgICAgICAgIDwvc2NybS1maWVsZD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvc2NybS1wb3B1cC1idXR0b24+XG4iXX0=