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
import { combineLatestWith } from 'rxjs';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../field-grid/field-grid.component";
import * as i3 from "../action-group-menu/action-group-menu.component";
function RecordGridComponent_ng_container_0_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 4);
    i0.ɵɵelement(1, "scrm-action-group-menu", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("buttonClass", ctx_r0.config.buttonClass)("config", ctx_r0.config.actions);
} }
function RecordGridComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "scrm-field-grid", 2);
    i0.ɵɵtemplate(2, RecordGridComponent_ng_container_0_div_1_span_2_Template, 2, 2, "span", 3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("record-grid ", ctx_r0.config && ctx_r0.config.klass || "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("actions", !!ctx_r0.config.actions)("appendActions", ctx_r0.config && ctx_r0.config.appendActions || false)("colClass", ctx_r0.config && ctx_r0.config.colClass)("fieldMode", ctx_r0.mode)("fields", ctx_r0.fields)("record", ctx_r0.record)("inputClass", ctx_r0.config && ctx_r0.config.inputClass)("labelClass", ctx_r0.config && ctx_r0.config.labelClass)("labelDisplay", ctx_r0.config && ctx_r0.config.labelDisplay || "top")("maxColumns", ctx_r0.maxColumns)("record", ctx_r0.record)("rowClass", ctx_r0.config && ctx_r0.config.rowClass)("sizeMap", ctx_r0.sizeMap)("colAlignItems", ctx_r0.config.colAlignItems);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.config.actions);
} }
function RecordGridComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RecordGridComponent_ng_container_0_div_1_Template, 3, 18, "div", 1);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(2, 1, ctx_r0.vm$));
} }
export class RecordGridComponent {
    constructor() {
        this.mode = 'detail';
        this.maxColumns = 4;
        this.sizeMap = {
            handset: 1,
            tablet: 2,
            web: 3,
            wide: 4
        };
        this.fields = [];
        this.special = [];
    }
    ngOnInit() {
        if (!this.config) {
            return;
        }
        const config = this.config;
        this.vm$ = config.record$.pipe(combineLatestWith(config.mode$, config.fields$, config.maxColumns$, config.sizeMap$), map(([record, mode, fields, maxColumns, sizeMap]) => {
            this.mode = mode;
            this.maxColumns = maxColumns;
            this.sizeMap = sizeMap;
            this.fields = this.getFields(record, fields);
            this.record = record;
            return { record, mode, fields, maxColumns };
        }));
    }
    getFields(record, fieldKeys) {
        if (!record || !fieldKeys || !record.fields) {
            return [];
        }
        const fields = [];
        fieldKeys.forEach(fieldKey => {
            if (!record.fields[fieldKey]) {
                return;
            }
            fields.push(record.fields[fieldKey]);
        });
        return fields;
    }
    static { this.ɵfac = function RecordGridComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RecordGridComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RecordGridComponent, selectors: [["scrm-record-grid"]], inputs: { config: "config" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "class", 4, "ngIf"], [3, "actions", "appendActions", "colClass", "fieldMode", "fields", "record", "inputClass", "labelClass", "labelDisplay", "maxColumns", "rowClass", "sizeMap", "colAlignItems"], ["class", "float-right", "field-grid-actions", "", 4, "ngIf"], ["field-grid-actions", "", 1, "float-right"], [3, "buttonClass", "config"]], template: function RecordGridComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, RecordGridComponent_ng_container_0_Template, 3, 3, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.config);
        } }, dependencies: [i1.NgIf, i2.FieldGridComponent, i3.ActionGroupMenuComponent, i1.AsyncPipe], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordGridComponent, [{
        type: Component,
        args: [{ selector: 'scrm-record-grid', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container *ngIf=\"config\">\n    <div *ngIf=\"(vm$ | async) as vm\" class=\"record-grid {{(config && config.klass) || ''}}\">\n        <scrm-field-grid [actions]=\"!!config.actions\"\n                         [appendActions]=\"(config && config.appendActions) || false\"\n                         [colClass]=\"config && config.colClass\"\n                         [fieldMode]=\"mode\"\n                         [fields]=\"fields\"\n                         [record]=\"record\"\n                         [inputClass]=\"config && config.inputClass\"\n                         [labelClass]=\"config && config.labelClass\"\n                         [labelDisplay]=\"(config && config.labelDisplay) || 'top'\"\n                         [maxColumns]=\"maxColumns\"\n                         [record]=\"record\"\n                         [rowClass]=\"config && config.rowClass\"\n                         [sizeMap]=\"sizeMap\"\n                         [colAlignItems]=\"config.colAlignItems\"\n        >\n        <span *ngIf=\"config.actions\" class=\"float-right\" field-grid-actions>\n            <scrm-action-group-menu [buttonClass]=\"config.buttonClass\"\n                                    [config]=\"config.actions\"></scrm-action-group-menu>\n        </span>\n        </scrm-field-grid>\n    </div>\n</ng-container>\n" }]
    }], () => [], { config: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RecordGridComponent, { className: "RecordGridComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLWdyaWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvcmVjb3JkLWdyaWQvcmVjb3JkLWdyaWQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvcmVjb3JkLWdyaWQvcmVjb3JkLWdyaWQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBS3ZELE9BQU8sRUFBQyxpQkFBaUIsRUFBYSxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7OztJQ1kzQiwrQkFBb0U7SUFDaEUsNENBQzJFO0lBQy9FLGlCQUFPOzs7SUFGcUIsY0FBa0M7SUFDbEMsQUFEQSx1REFBa0MsaUNBQ1Q7OztJQWpCckQsQUFESiwyQkFBd0YseUJBZW5GO0lBQ0QsMkZBQW9FO0lBS3hFLEFBREksaUJBQWtCLEVBQ2hCOzs7SUFyQjJCLHlGQUFzRDtJQUNsRSxjQUE0QjtJQWE1QixBQURBLEFBREEsQUFEQSxBQURBLEFBREEsQUFEQSxBQURBLEFBREEsQUFEQSxBQURBLEFBREEsQUFEQSxBQURBLGlEQUE0Qix3RUFDK0IscURBQ3JCLDBCQUNwQix5QkFDRCx5QkFDQSx5REFDeUIseURBQ0Esc0VBQ2UsaUNBQ2hDLHlCQUNSLHFEQUNxQiwyQkFDbkIsOENBQ21CO0lBRWhELGNBQW9CO0lBQXBCLDRDQUFvQjs7O0lBakJuQyw2QkFBNkI7SUFDekIsb0ZBQXdGOzs7OztJQUFsRixjQUFvQjtJQUFwQix1REFBb0I7O0FEWTlCLE1BQU0sT0FBTyxtQkFBbUI7SUFrQjVCO1FBZEEsU0FBSSxHQUFhLFFBQVEsQ0FBQztRQUMxQixlQUFVLEdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLFlBQU8sR0FBa0I7WUFDckIsT0FBTyxFQUFFLENBQUM7WUFDVixNQUFNLEVBQUUsQ0FBQztZQUNULEdBQUcsRUFBRSxDQUFDO1lBQ04sSUFBSSxFQUFFLENBQUM7U0FDVixDQUFDO1FBQ0YsV0FBTSxHQUFZLEVBQUUsQ0FBQztRQUNyQixZQUFPLEdBQVksRUFBRSxDQUFDO0lBTXRCLENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNmLE9BQU87UUFDWCxDQUFDO1FBQ0QsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUUzQixJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUMxQixpQkFBaUIsQ0FDVCxNQUFNLENBQUMsS0FBSyxFQUNaLE1BQU0sQ0FBQyxPQUFPLEVBQ2QsTUFBTSxDQUFDLFdBQVcsRUFDbEIsTUFBTSxDQUFDLFFBQVEsQ0FDdEIsRUFDRCxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsRUFBRSxFQUFFO1lBQ2hELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1lBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDckIsT0FBTyxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBQyxDQUFDO1FBQzlDLENBQUMsQ0FBQyxDQUNMLENBQUM7SUFDTixDQUFDO0lBRUQsU0FBUyxDQUFDLE1BQWMsRUFBRSxTQUFtQjtRQUN6QyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzFDLE9BQU8sRUFBRSxDQUFDO1FBQ2QsQ0FBQztRQUVELE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUVsQixTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7Z0JBQzNCLE9BQU87WUFDWCxDQUFDO1lBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO29IQTVEUSxtQkFBbUI7b0VBQW5CLG1CQUFtQjtZQ2JoQyxzRkFBNkI7O1lBQWQsaUNBQVk7OztpRkRhZCxtQkFBbUI7Y0FML0IsU0FBUzsyQkFDSSxrQkFBa0I7b0JBTW5CLE1BQU07a0JBQWQsS0FBSzs7a0ZBRkcsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JlY29yZH0gZnJvbSAnLi4vLi4vY29tbW9uL3JlY29yZC9yZWNvcmQubW9kZWwnO1xuaW1wb3J0IHtGaWVsZH0gZnJvbSAnLi4vLi4vY29tbW9uL3JlY29yZC9maWVsZC5tb2RlbCc7XG5pbXBvcnQge1NjcmVlblNpemVNYXB9IGZyb20gJy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy91aS9yZXNpemUubW9kZWwnO1xuaW1wb3J0IHtWaWV3TW9kZX0gZnJvbSAnLi4vLi4vY29tbW9uL3ZpZXdzL3ZpZXcubW9kZWwnO1xuaW1wb3J0IHtjb21iaW5lTGF0ZXN0V2l0aCwgT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge21hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtSZWNvcmRHcmlkQ29uZmlnLCBSZWNvcmRHcmlkVmlld01vZGVsfSBmcm9tICcuL3JlY29yZC1ncmlkLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLXJlY29yZC1ncmlkJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcmVjb3JkLWdyaWQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW11cbn0pXG5leHBvcnQgY2xhc3MgUmVjb3JkR3JpZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoKSBjb25maWc6IFJlY29yZEdyaWRDb25maWc7XG5cbiAgICBtb2RlOiBWaWV3TW9kZSA9ICdkZXRhaWwnO1xuICAgIG1heENvbHVtbnM6IG51bWJlciA9IDQ7XG4gICAgc2l6ZU1hcDogU2NyZWVuU2l6ZU1hcCA9IHtcbiAgICAgICAgaGFuZHNldDogMSxcbiAgICAgICAgdGFibGV0OiAyLFxuICAgICAgICB3ZWI6IDMsXG4gICAgICAgIHdpZGU6IDRcbiAgICB9O1xuICAgIGZpZWxkczogRmllbGRbXSA9IFtdO1xuICAgIHNwZWNpYWw6IEZpZWxkW10gPSBbXTtcbiAgICByZWNvcmQ6IFJlY29yZDtcblxuICAgIHZtJDogT2JzZXJ2YWJsZTxSZWNvcmRHcmlkVmlld01vZGVsPjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuY29uZmlnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWc7XG5cbiAgICAgICAgdGhpcy52bSQgPSBjb25maWcucmVjb3JkJC5waXBlKFxuICAgICAgICAgICAgY29tYmluZUxhdGVzdFdpdGgoXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5tb2RlJCxcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLmZpZWxkcyQsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5tYXhDb2x1bW5zJCxcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLnNpemVNYXAkXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgbWFwKChbcmVjb3JkLCBtb2RlLCBmaWVsZHMsIG1heENvbHVtbnMsIHNpemVNYXBdKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlID0gbW9kZTtcbiAgICAgICAgICAgICAgICB0aGlzLm1heENvbHVtbnMgPSBtYXhDb2x1bW5zO1xuICAgICAgICAgICAgICAgIHRoaXMuc2l6ZU1hcCA9IHNpemVNYXA7XG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZHMgPSB0aGlzLmdldEZpZWxkcyhyZWNvcmQsIGZpZWxkcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWNvcmQgPSByZWNvcmQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtyZWNvcmQsIG1vZGUsIGZpZWxkcywgbWF4Q29sdW1uc307XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGdldEZpZWxkcyhyZWNvcmQ6IFJlY29yZCwgZmllbGRLZXlzOiBzdHJpbmdbXSk6IEZpZWxkW10ge1xuICAgICAgICBpZiAoIXJlY29yZCB8fCAhZmllbGRLZXlzIHx8ICFyZWNvcmQuZmllbGRzKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmaWVsZHMgPSBbXTtcblxuICAgICAgICBmaWVsZEtleXMuZm9yRWFjaChmaWVsZEtleSA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlY29yZC5maWVsZHNbZmllbGRLZXldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmllbGRzLnB1c2gocmVjb3JkLmZpZWxkc1tmaWVsZEtleV0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZmllbGRzO1xuICAgIH1cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJjb25maWdcIj5cbiAgICA8ZGl2ICpuZ0lmPVwiKHZtJCB8IGFzeW5jKSBhcyB2bVwiIGNsYXNzPVwicmVjb3JkLWdyaWQge3soY29uZmlnICYmIGNvbmZpZy5rbGFzcykgfHwgJyd9fVwiPlxuICAgICAgICA8c2NybS1maWVsZC1ncmlkIFthY3Rpb25zXT1cIiEhY29uZmlnLmFjdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFthcHBlbmRBY3Rpb25zXT1cIihjb25maWcgJiYgY29uZmlnLmFwcGVuZEFjdGlvbnMpIHx8IGZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbY29sQ2xhc3NdPVwiY29uZmlnICYmIGNvbmZpZy5jb2xDbGFzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgW2ZpZWxkTW9kZV09XCJtb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbZmllbGRzXT1cImZpZWxkc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgW3JlY29yZF09XCJyZWNvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFtpbnB1dENsYXNzXT1cImNvbmZpZyAmJiBjb25maWcuaW5wdXRDbGFzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgW2xhYmVsQ2xhc3NdPVwiY29uZmlnICYmIGNvbmZpZy5sYWJlbENsYXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbbGFiZWxEaXNwbGF5XT1cIihjb25maWcgJiYgY29uZmlnLmxhYmVsRGlzcGxheSkgfHwgJ3RvcCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFttYXhDb2x1bW5zXT1cIm1heENvbHVtbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFtyZWNvcmRdPVwicmVjb3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbcm93Q2xhc3NdPVwiY29uZmlnICYmIGNvbmZpZy5yb3dDbGFzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgW3NpemVNYXBdPVwic2l6ZU1hcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgW2NvbEFsaWduSXRlbXNdPVwiY29uZmlnLmNvbEFsaWduSXRlbXNcIlxuICAgICAgICA+XG4gICAgICAgIDxzcGFuICpuZ0lmPVwiY29uZmlnLmFjdGlvbnNcIiBjbGFzcz1cImZsb2F0LXJpZ2h0XCIgZmllbGQtZ3JpZC1hY3Rpb25zPlxuICAgICAgICAgICAgPHNjcm0tYWN0aW9uLWdyb3VwLW1lbnUgW2J1dHRvbkNsYXNzXT1cImNvbmZpZy5idXR0b25DbGFzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29uZmlnXT1cImNvbmZpZy5hY3Rpb25zXCI+PC9zY3JtLWFjdGlvbi1ncm91cC1tZW51PlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvc2NybS1maWVsZC1ncmlkPlxuICAgIDwvZGl2PlxuPC9uZy1jb250YWluZXI+XG4iXX0=