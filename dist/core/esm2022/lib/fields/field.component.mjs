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
import { Component, HostBinding, Input } from '@angular/core';
import { viewFieldsMap } from './field.manifest';
import { FieldRegistry } from './field.registry';
import * as i0 from "@angular/core";
import * as i1 from "./field.registry";
import * as i2 from "@angular/common";
import * as i3 from "./dynamic-field/dynamic-field.component";
import * as i4 from "./line-items/line-items.component";
function FieldComponent_ng_container_0_scrm_dynamic_field_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-dynamic-field", 3);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("componentType", ctx_r0.componentType)("field", ctx_r0.field)("klass", ctx_r0.klass)("mode", ctx_r0.componentMode)("originalMode", ctx_r0.mode)("record", ctx_r0.record)("parent", ctx_r0.record)("type", ctx_r0.type);
} }
function FieldComponent_ng_container_0_scrm_line_items_field_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-line-items-field", 4);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("field", ctx_r0.field)("klass", ctx_r0.klass)("mode", ctx_r0.componentMode)("originalMode", ctx_r0.mode)("record", ctx_r0.record)("parent", ctx_r0.record);
} }
function FieldComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, FieldComponent_ng_container_0_scrm_dynamic_field_1_Template, 1, 8, "scrm-dynamic-field", 1)(2, FieldComponent_ng_container_0_scrm_line_items_field_2_Template, 1, 6, "scrm-line-items-field", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.type !== "line-items");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.type === "line-items");
} }
export class FieldComponent {
    constructor(registry) {
        this.registry = registry;
        this.record = null;
        this.klass = null;
        this.class = 'field';
        this.map = viewFieldsMap;
    }
    ngOnInit() {
        this.setHostClass();
    }
    get componentMode() {
        let mode = this.mode;
        if (mode === 'create') {
            mode = 'edit';
        }
        if (['edit', 'filter'].includes(mode) && this.field.readonly) {
            mode = 'detail';
        }
        return mode;
    }
    get componentType() {
        let module = (this.record && this.record.module) || 'default';
        const displayType = (this.field.definition && this.field.definition.displayType) || '';
        return this.registry.getDisplayType(module, this.type, displayType, this.componentMode, this.field.name);
    }
    setHostClass() {
        const classes = [];
        classes.push('field');
        if (this.mode) {
            classes.push('field-mode-' + this.mode);
        }
        if (this.type) {
            classes.push('field-type-' + this.type);
        }
        if (this.field && this.field.name) {
            classes.push('field-name-' + this.field.name);
        }
        this.class = classes.join(' ');
    }
    static { this.ɵfac = function FieldComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FieldComponent)(i0.ɵɵdirectiveInject(i1.FieldRegistry)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FieldComponent, selectors: [["scrm-field"]], hostVars: 2, hostBindings: function FieldComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassMap(ctx.class);
        } }, inputs: { mode: "mode", type: "type", field: "field", record: "record", klass: "klass" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "componentType", "field", "klass", "mode", "originalMode", "record", "parent", "type", 4, "ngIf"], [3, "field", "klass", "mode", "originalMode", "record", "parent", 4, "ngIf"], [3, "componentType", "field", "klass", "mode", "originalMode", "record", "parent", "type"], [3, "field", "klass", "mode", "originalMode", "record", "parent"]], template: function FieldComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, FieldComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.field && (ctx.field == null ? null : ctx.field.display()) !== "none");
        } }, dependencies: [i2.NgIf, i3.DynamicFieldComponent, i4.LineItemsComponent], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FieldComponent, [{
        type: Component,
        args: [{ selector: 'scrm-field', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container *ngIf=\"field && field?.display() !== 'none'\">\n    <scrm-dynamic-field *ngIf=\"type !== 'line-items'\"\n                        [componentType]=\"componentType\"\n                        [field]=\"field\"\n                        [klass]=\"klass\"\n                        [mode]=\"componentMode\"\n                        [originalMode]=\"mode\"\n                        [record]=\"record\"\n                        [parent]=\"record\"\n                        [type]=\"type\">\n    </scrm-dynamic-field>\n    <scrm-line-items-field *ngIf=\"type === 'line-items'\"\n                           [field]=\"field\"\n                           [klass]=\"klass\"\n                           [mode]=\"componentMode\"\n                           [originalMode]=\"mode\"\n                           [record]=\"record\"\n                           [parent]=\"record\">\n    </scrm-line-items-field>\n</ng-container>\n\n" }]
    }], () => [{ type: i1.FieldRegistry }], { mode: [{
            type: Input,
            args: ['mode']
        }], type: [{
            type: Input,
            args: ['type']
        }], field: [{
            type: Input,
            args: ['field']
        }], record: [{
            type: Input,
            args: ['record']
        }], klass: [{
            type: Input,
            args: ['klass']
        }], class: [{
            type: HostBinding,
            args: ['class']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FieldComponent, { className: "FieldComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2ZpZWxkcy9maWVsZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvZmllbGRzL2ZpZWxkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBRy9DLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7OztJQ0YzQyx3Q0FTcUI7OztJQURELEFBREEsQUFEQSxBQURBLEFBREEsQUFEQSxBQURBLEFBREEsb0RBQStCLHVCQUNoQix1QkFDQSw4QkFDTyw2QkFDRCx5QkFDSix5QkFDQSxxQkFDSjs7O0lBRWpDLDJDQU93Qjs7O0lBREQsQUFEQSxBQURBLEFBREEsQUFEQSxBQURBLG9DQUFlLHVCQUNBLDhCQUNPLDZCQUNELHlCQUNKLHlCQUNBOzs7SUFqQjVDLDZCQUEyRDtJQVd2RCxBQVZBLDRHQVFrQyxxR0FRTzs7OztJQWhCcEIsY0FBMkI7SUFBM0IsbURBQTJCO0lBVXhCLGNBQTJCO0lBQTNCLG1EQUEyQjs7QUREdkQsTUFBTSxPQUFPLGNBQWM7SUFVdkIsWUFBc0IsUUFBdUI7UUFBdkIsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQU41QixXQUFNLEdBQVcsSUFBSSxDQUFDO1FBQ3ZCLFVBQUssR0FBMkIsSUFBSSxDQUFDO1FBQy9CLFVBQUssR0FBRyxPQUFPLENBQUM7UUFFdEMsUUFBRyxHQUFHLGFBQWEsQ0FBQztJQUlwQixDQUFDO0lBRUQsUUFBUTtRQUNKLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFBSSxhQUFhO1FBQ2IsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUVyQixJQUFJLElBQUksS0FBSyxRQUFRLEVBQUUsQ0FBQztZQUNwQixJQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ2xCLENBQUM7UUFFRCxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzNELElBQUksR0FBRyxRQUFRLENBQUM7UUFDcEIsQ0FBQztRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxJQUFJLGFBQWE7UUFDYixJQUFJLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxTQUFTLENBQUM7UUFFOUQsTUFBTSxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFdkYsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdHLENBQUM7SUFFTSxZQUFZO1FBQ2YsTUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ25CLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFdEIsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDWixPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDM0MsQ0FBQztRQUVELElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ1osT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzNDLENBQUM7UUFFRCxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNoQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ2pELENBQUM7UUFFRCxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkMsQ0FBQzsrR0F6RFEsY0FBYztvRUFBZCxjQUFjO1lBQWQsd0JBQWM7O1lDVjNCLGlGQUEyRDs7WUFBNUMsK0ZBQTBDOzs7aUZEVTVDLGNBQWM7Y0FMMUIsU0FBUzsyQkFDSSxZQUFZOzhDQUtQLElBQUk7a0JBQWxCLEtBQUs7bUJBQUMsTUFBTTtZQUNFLElBQUk7a0JBQWxCLEtBQUs7bUJBQUMsTUFBTTtZQUNHLEtBQUs7a0JBQXBCLEtBQUs7bUJBQUMsT0FBTztZQUNHLE1BQU07a0JBQXRCLEtBQUs7bUJBQUMsUUFBUTtZQUNDLEtBQUs7a0JBQXBCLEtBQUs7bUJBQUMsT0FBTztZQUNRLEtBQUs7a0JBQTFCLFdBQVc7bUJBQUMsT0FBTzs7a0ZBTlgsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7dmlld0ZpZWxkc01hcH0gZnJvbSAnLi9maWVsZC5tYW5pZmVzdCc7XG5pbXBvcnQge0ZpZWxkfSBmcm9tICcuLi9jb21tb24vcmVjb3JkL2ZpZWxkLm1vZGVsJztcbmltcG9ydCB7UmVjb3JkfSBmcm9tICcuLi9jb21tb24vcmVjb3JkL3JlY29yZC5tb2RlbCc7XG5pbXBvcnQge0ZpZWxkUmVnaXN0cnl9IGZyb20gJy4vZmllbGQucmVnaXN0cnknO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tZmllbGQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9maWVsZC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBGaWVsZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQElucHV0KCdtb2RlJykgbW9kZTogc3RyaW5nO1xuICAgIEBJbnB1dCgndHlwZScpIHR5cGU6IHN0cmluZztcbiAgICBASW5wdXQoJ2ZpZWxkJykgZmllbGQ6IEZpZWxkO1xuICAgIEBJbnB1dCgncmVjb3JkJykgcmVjb3JkOiBSZWNvcmQgPSBudWxsO1xuICAgIEBJbnB1dCgna2xhc3MnKSBrbGFzczogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IG51bGw7XG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIGNsYXNzID0gJ2ZpZWxkJztcblxuICAgIG1hcCA9IHZpZXdGaWVsZHNNYXA7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcmVnaXN0cnk6IEZpZWxkUmVnaXN0cnkpIHtcblxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNldEhvc3RDbGFzcygpO1xuICAgIH1cblxuICAgIGdldCBjb21wb25lbnRNb2RlKCk6IHN0cmluZyB7XG4gICAgICAgIGxldCBtb2RlID0gdGhpcy5tb2RlO1xuXG4gICAgICAgIGlmIChtb2RlID09PSAnY3JlYXRlJykge1xuICAgICAgICAgICAgbW9kZSA9ICdlZGl0JztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChbJ2VkaXQnLCAnZmlsdGVyJ10uaW5jbHVkZXMobW9kZSkgJiYgdGhpcy5maWVsZC5yZWFkb25seSkge1xuICAgICAgICAgICAgbW9kZSA9ICdkZXRhaWwnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1vZGU7XG4gICAgfVxuXG4gICAgZ2V0IGNvbXBvbmVudFR5cGUoKTogYW55IHtcbiAgICAgICAgbGV0IG1vZHVsZSA9ICh0aGlzLnJlY29yZCAmJiB0aGlzLnJlY29yZC5tb2R1bGUpIHx8ICdkZWZhdWx0JztcblxuICAgICAgICBjb25zdCBkaXNwbGF5VHlwZSA9ICh0aGlzLmZpZWxkLmRlZmluaXRpb24gJiYgdGhpcy5maWVsZC5kZWZpbml0aW9uLmRpc3BsYXlUeXBlKSB8fCAnJztcblxuICAgICAgICByZXR1cm4gdGhpcy5yZWdpc3RyeS5nZXREaXNwbGF5VHlwZShtb2R1bGUsIHRoaXMudHlwZSwgZGlzcGxheVR5cGUsIHRoaXMuY29tcG9uZW50TW9kZSwgdGhpcy5maWVsZC5uYW1lKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0SG9zdENsYXNzKCkge1xuICAgICAgICBjb25zdCBjbGFzc2VzID0gW107XG4gICAgICAgIGNsYXNzZXMucHVzaCgnZmllbGQnKTtcblxuICAgICAgICBpZiAodGhpcy5tb2RlKSB7XG4gICAgICAgICAgICBjbGFzc2VzLnB1c2goJ2ZpZWxkLW1vZGUtJyArIHRoaXMubW9kZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnR5cGUpIHtcbiAgICAgICAgICAgIGNsYXNzZXMucHVzaCgnZmllbGQtdHlwZS0nICsgdGhpcy50eXBlKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZmllbGQgJiYgdGhpcy5maWVsZC5uYW1lKSB7XG4gICAgICAgICAgICBjbGFzc2VzLnB1c2goJ2ZpZWxkLW5hbWUtJyArIHRoaXMuZmllbGQubmFtZSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2xhc3MgPSBjbGFzc2VzLmpvaW4oJyAnKTtcbiAgICB9XG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48bmctY29udGFpbmVyICpuZ0lmPVwiZmllbGQgJiYgZmllbGQ/LmRpc3BsYXkoKSAhPT0gJ25vbmUnXCI+XG4gICAgPHNjcm0tZHluYW1pYy1maWVsZCAqbmdJZj1cInR5cGUgIT09ICdsaW5lLWl0ZW1zJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBbY29tcG9uZW50VHlwZV09XCJjb21wb25lbnRUeXBlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtmaWVsZF09XCJmaWVsZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBba2xhc3NdPVwia2xhc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW21vZGVdPVwiY29tcG9uZW50TW9kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbb3JpZ2luYWxNb2RlXT1cIm1vZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW3JlY29yZF09XCJyZWNvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW3BhcmVudF09XCJyZWNvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW3R5cGVdPVwidHlwZVwiPlxuICAgIDwvc2NybS1keW5hbWljLWZpZWxkPlxuICAgIDxzY3JtLWxpbmUtaXRlbXMtZmllbGQgKm5nSWY9XCJ0eXBlID09PSAnbGluZS1pdGVtcydcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ZpZWxkXT1cImZpZWxkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFtrbGFzc109XCJrbGFzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbbW9kZV09XCJjb21wb25lbnRNb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFtvcmlnaW5hbE1vZGVdPVwibW9kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbcmVjb3JkXT1cInJlY29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbcGFyZW50XT1cInJlY29yZFwiPlxuICAgIDwvc2NybS1saW5lLWl0ZW1zLWZpZWxkPlxuPC9uZy1jb250YWluZXI+XG5cbiJdfQ==