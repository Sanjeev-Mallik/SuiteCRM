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
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { of } from 'rxjs';
import { debounceTime, shareReplay } from 'rxjs/operators';
import { RecordThreadItemActionsAdapterFactory } from '../../adapters/record-thread-item-actions.adapter.factory';
import * as i0 from "@angular/core";
import * as i1 from "../../adapters/record-thread-item-actions.adapter.factory";
import * as i2 from "@angular/common";
import * as i3 from "../../../../components/button/button.component";
import * as i4 from "../../../../components/record-flexbox/record-flexbox.component";
const _c0 = ["body"];
function RecordThreadItemComponent_div_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-record-flexbox", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("config", ctx_r0.buildConfig(ctx_r0.config.metadata.headerLayout));
} }
function RecordThreadItemComponent_div_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-record-flexbox", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("config", ctx_r0.buildConfig(ctx_r0.config.metadata.bodyLayout));
} }
function RecordThreadItemComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 7);
} }
function RecordThreadItemComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelement(1, "scrm-button", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("config", ctx_r0.getCollapseButton());
} }
function RecordThreadItemComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 2);
    i0.ɵɵtemplate(2, RecordThreadItemComponent_div_0_ng_container_2_Template, 2, 1, "ng-container", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", null, 0);
    i0.ɵɵtemplate(5, RecordThreadItemComponent_div_0_ng_container_5_Template, 2, 1, "ng-container", 3)(6, RecordThreadItemComponent_div_0_div_6_Template, 1, 0, "div", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, RecordThreadItemComponent_div_0_div_7_Template, 2, 1, "div", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate2("d-flex flex-column record-thread-item ", ctx_r0.config && ctx_r0.config.klass || "", " ", ctx_r0.dynamicClass, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.config.metadata && ctx_r0.config.metadata.headerLayout);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("record-thread-item-body flex-grow-1 ", ctx_r0.getBodyClass(), "");
    i0.ɵɵclassProp("collapsed", ctx_r0.collapsible && ctx_r0.collapsed)("expanded", ctx_r0.collapsible && !ctx_r0.collapsed);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.config.metadata && ctx_r0.config.metadata.bodyLayout);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.collapsible && ctx_r0.collapsed);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.collapsible);
} }
export class RecordThreadItemComponent {
    constructor(actionAdapterFactory) {
        this.actionAdapterFactory = actionAdapterFactory;
        this.collapsed = false;
        this.collapsible = false;
        this.collapseLimit = 300;
        this.dynamicClass = '';
        this.subs = [];
        this.dynamicClassesMap = {};
        this.dynamicClassFieldSubs = [];
    }
    ngOnInit() {
        this.actionAdapter = this.actionAdapterFactory.create(this.config.store, this.config.threadStore, this.config);
        this.initDynamicClass();
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
        this.dynamicClassFieldSubs.forEach(sub => sub.unsubscribe());
    }
    ngAfterViewInit() {
        if (!this.config || !this.config.collapsible) {
            return;
        }
        setTimeout(() => {
            const collapseLimit = this.config.collapseLimit || this.collapseLimit;
            let height = this.bodyEl.nativeElement.offsetHeight || this.bodyEl.nativeElement.height;
            if (height > collapseLimit) {
                this.collapsible = true;
                this.collapsed = true;
            }
        }, 2000);
    }
    /**
     *
     * Build layout data source according to received configuration
     * @param {object} layout: FieldFlexboxRow[]
     * @returns {object} RecordFlexboxConfig
     */
    buildConfig(layout) {
        return {
            record$: this.config.store.stagingRecord$,
            mode$: this.config.store.mode$,
            layout$: of(layout).pipe(shareReplay(1)),
            inputClass: {
                ...(this.config.inputClass || {}),
                'form-control form-control-sm': true
            },
            buttonClass: this?.config?.buttonClass ?? '',
            buttonGroupClass: this?.config?.buttonGroupClass ?? '',
            labelClass: this?.config?.labelClass ?? {},
            rowClass: this?.config?.rowClass ?? {},
            colClass: this?.config?.colClass ?? {},
            actions: this?.actionAdapter,
            klass: this?.config?.containerClass,
            flexDirection: this?.config?.flexDirection || ''
        };
    }
    getCollapseButton() {
        return {
            klass: 'collapse-button btn btn-link btn-sm',
            labelKey: this.collapsed ? 'LBL_SHOW_MORE' : 'LBL_SHOW_LESS',
            onClick: () => {
                this.collapsed = !this.collapsed;
                if (this.collapsed) {
                    this.config && this.config.collapsed();
                }
                else {
                    this.config && this.config.expanded();
                }
            }
        };
    }
    initDynamicClass() {
        if (!this.config || !this.config.dynamicClass || !this.config.dynamicClass.length) {
            return;
        }
        this.subs.push(this.config.store.stagingRecord$.subscribe(record => {
            const klassesMap = {};
            this.dynamicClassFieldSubs.forEach(sub => sub.unsubscribe());
            if (!record || !record.fields || !Object.keys(record.fields).length) {
                return;
            }
            this.config.dynamicClass.forEach(fieldKey => {
                if (!fieldKey) {
                    return;
                }
                if (!record.fields[fieldKey] && !record.attributes[fieldKey]) {
                    return;
                }
                if (record.fields[fieldKey]) {
                    this.dynamicClassFieldSubs.push(record.fields[fieldKey].valueChanges$.pipe(debounceTime(100)).subscribe(() => {
                        const klass = this.getDynamicClasses(fieldKey, record) ?? '';
                        if (klass !== '') {
                            this.dynamicClassesMap[fieldKey] = klass;
                            this.calculateDynamicClasses();
                        }
                    }));
                }
                const klass = this.getDynamicClasses(fieldKey, record) ?? '';
                if (klass !== '') {
                    klassesMap[fieldKey] = klass;
                }
            });
            this.dynamicClassesMap = klassesMap;
            this.calculateDynamicClasses();
        }));
    }
    /**
     * Calculate dynamic classes
     */
    calculateDynamicClasses() {
        const klasses = [];
        Object.keys(this.dynamicClassesMap ?? {}).forEach(field => {
            const klass = this.dynamicClassesMap[field] ?? '';
            if (klass === '') {
                return;
            }
            klasses.push(klass);
        });
        this.dynamicClass = klasses.join(' ');
    }
    /**
     * Get Dynamic classes for record
     * @param fieldKey
     * @param record
     * @protected
     */
    getDynamicClasses(fieldKey, record) {
        const prefix = fieldKey + '-';
        let values = [];
        if (!record.fields[fieldKey]) {
            if (Array.isArray(record.attributes[fieldKey])) {
                values = values.concat(record.attributes[fieldKey]);
            }
            else if (typeof record.attributes[fieldKey] !== 'object') {
                values.push(record.attributes[fieldKey]);
            }
        }
        else {
            if (record.fields[fieldKey].value) {
                values.push(record.fields[fieldKey].value);
            }
            if (record.fields[fieldKey].valueList && record.fields[fieldKey].valueList.length) {
                values = values.concat(record.fields[fieldKey].valueList);
            }
        }
        if (!values || !values.length) {
            return '';
        }
        return prefix + values.join(' ' + prefix);
    }
    /**
     * Get body class
     */
    getBodyClass() {
        return this.config?.metadata?.bodyLayout?.class ?? '';
    }
    static { this.ɵfac = function RecordThreadItemComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RecordThreadItemComponent)(i0.ɵɵdirectiveInject(i1.RecordThreadItemActionsAdapterFactory)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RecordThreadItemComponent, selectors: [["scrm-record-thread-item"]], viewQuery: function RecordThreadItemComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.bodyEl = _t.first);
        } }, inputs: { config: "config" }, decls: 1, vars: 1, consts: [["body", ""], [3, "class", 4, "ngIf"], [1, "record-thread-item-header", "flex-grow-1"], [4, "ngIf"], ["class", "fadeout", 4, "ngIf"], ["class", "record-thread-item-collapse d-flex justify-content-center flex-grow-1", 4, "ngIf"], [3, "config"], [1, "fadeout"], [1, "record-thread-item-collapse", "d-flex", "justify-content-center", "flex-grow-1"]], template: function RecordThreadItemComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, RecordThreadItemComponent_div_0_Template, 8, 15, "div", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.config);
        } }, dependencies: [i2.NgIf, i3.ButtonComponent, i4.RecordFlexboxComponent], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordThreadItemComponent, [{
        type: Component,
        args: [{ selector: 'scrm-record-thread-item', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n\n<div *ngIf=\"config\"\n     class=\"d-flex flex-column record-thread-item {{(config && config.klass) || ''}} {{dynamicClass}}\">\n    <div class=\"record-thread-item-header flex-grow-1\">\n\n        <ng-container *ngIf=\"config.metadata && config.metadata.headerLayout\">\n\n            <scrm-record-flexbox [config]=\"buildConfig(config.metadata.headerLayout)\"></scrm-record-flexbox>\n        </ng-container>\n\n    </div>\n    <div #body\n         [class.collapsed]=\"collapsible && collapsed\"\n         [class.expanded]=\"collapsible && !collapsed\"\n         class=\"record-thread-item-body flex-grow-1 {{getBodyClass()}}\">\n\n        <ng-container *ngIf=\"config.metadata && config.metadata.bodyLayout\">\n            <scrm-record-flexbox [config]=\"buildConfig(config.metadata.bodyLayout)\"></scrm-record-flexbox>\n        </ng-container>\n\n        <div *ngIf=\"collapsible && collapsed\" class=\"fadeout\"></div>\n\n    </div>\n\n    <div *ngIf=\"collapsible\" class=\"record-thread-item-collapse d-flex justify-content-center flex-grow-1\">\n        <scrm-button [config]=\"getCollapseButton()\"></scrm-button>\n    </div>\n</div>\n" }]
    }], () => [{ type: i1.RecordThreadItemActionsAdapterFactory }], { config: [{
            type: Input
        }], bodyEl: [{
            type: ViewChild,
            args: ['body']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RecordThreadItemComponent, { className: "RecordThreadItemComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLXRocmVhZC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb250YWluZXJzL3JlY29yZC10aHJlYWQvY29tcG9uZW50cy9yZWNvcmQtdGhyZWFkLWl0ZW0vcmVjb3JkLXRocmVhZC1pdGVtLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb250YWluZXJzL3JlY29yZC10aHJlYWQvY29tcG9uZW50cy9yZWNvcmQtdGhyZWFkLWl0ZW0vcmVjb3JkLXRocmVhZC1pdGVtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQWdCLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFxQixTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFeEcsT0FBTyxFQUFDLEVBQUUsRUFBZSxNQUFNLE1BQU0sQ0FBQztBQUV0QyxPQUFPLEVBQUMsWUFBWSxFQUFFLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBS3pELE9BQU8sRUFBQyxxQ0FBcUMsRUFBQyxNQUFNLDJEQUEyRCxDQUFDOzs7Ozs7OztJQ0h4Ryw2QkFBc0U7SUFFbEUseUNBQWdHOzs7O0lBQTNFLGNBQW9EO0lBQXBELGdGQUFvRDs7O0lBUzdFLDZCQUFvRTtJQUNoRSx5Q0FBOEY7Ozs7SUFBekUsY0FBa0Q7SUFBbEQsOEVBQWtEOzs7SUFHM0UseUJBQTREOzs7SUFJaEUsOEJBQXVHO0lBQ25HLGlDQUEwRDtJQUM5RCxpQkFBTTs7O0lBRFcsY0FBOEI7SUFBOUIsbURBQThCOzs7SUF0Qi9DLEFBRkosMkJBQ3VHLGFBQ2hEO0lBRS9DLGtHQUFzRTtJQUsxRSxpQkFBTTtJQUNOLG9DQUdvRTtJQU1oRSxBQUpBLGtHQUFv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QztJQUVEOztPQUVHO0lBQ0gsWUFBWTtRQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLEtBQUssSUFBSSxFQUFFLENBQUE7SUFDekQsQ0FBQzswSEFoTVEseUJBQXlCO29FQUF6Qix5QkFBeUI7Ozs7OztZQ2R0QywyRUFDdUc7O1lBRGpHLGlDQUFZOzs7aUZEY0wseUJBQXlCO2NBTHJDLFNBQVM7MkJBQ0kseUJBQXlCO3NFQU0xQixNQUFNO2tCQUFkLEtBQUs7WUFDYSxNQUFNO2tCQUF4QixTQUFTO21CQUFDLE1BQU07O2tGQUhSLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UmVjb3JkVGhyZWFkSXRlbUNvbmZpZ30gZnJvbSAnLi9yZWNvcmQtdGhyZWFkLWl0ZW0ubW9kZWwnO1xuaW1wb3J0IHtvZiwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7RmllbGRGbGV4Ym94LCBSZWNvcmRGbGV4Ym94Q29uZmlnfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3JlY29yZC1mbGV4Ym94L3JlY29yZC1mbGV4Ym94Lm1vZGVsJztcbmltcG9ydCB7ZGVib3VuY2VUaW1lLCBzaGFyZVJlcGxheX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtTdHJpbmdNYXB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi90eXBlcy9zdHJpbmctbWFwJztcbmltcG9ydCB7QnV0dG9uSW50ZXJmYWNlfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY29tcG9uZW50cy9idXR0b24vYnV0dG9uLm1vZGVsJztcbmltcG9ydCB7UmVjb3JkfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vcmVjb3JkL3JlY29yZC5tb2RlbCc7XG5pbXBvcnQge1JlY29yZFRocmVhZEl0ZW1BY3Rpb25zQWRhcHRlcn0gZnJvbSAnLi4vLi4vYWRhcHRlcnMvcmVjb3JkLXRocmVhZC1pdGVtLWFjdGlvbnMuYWRhcHRlcic7XG5pbXBvcnQge1JlY29yZFRocmVhZEl0ZW1BY3Rpb25zQWRhcHRlckZhY3Rvcnl9IGZyb20gJy4uLy4uL2FkYXB0ZXJzL3JlY29yZC10aHJlYWQtaXRlbS1hY3Rpb25zLmFkYXB0ZXIuZmFjdG9yeSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1yZWNvcmQtdGhyZWFkLWl0ZW0nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9yZWNvcmQtdGhyZWFkLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW10sXG59KVxuZXhwb3J0IGNsYXNzIFJlY29yZFRocmVhZEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgICBASW5wdXQoKSBjb25maWc6IFJlY29yZFRocmVhZEl0ZW1Db25maWc7XG4gICAgQFZpZXdDaGlsZCgnYm9keScpIGJvZHlFbDogRWxlbWVudFJlZjtcbiAgICBjb2xsYXBzZWQgPSBmYWxzZTtcbiAgICBjb2xsYXBzaWJsZSA9IGZhbHNlO1xuICAgIGNvbGxhcHNlTGltaXQgPSAzMDA7XG4gICAgZHluYW1pY0NsYXNzID0gJyc7XG4gICAgcHJvdGVjdGVkIHN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gICAgcHJvdGVjdGVkIGFjdGlvbkFkYXB0ZXI6IFJlY29yZFRocmVhZEl0ZW1BY3Rpb25zQWRhcHRlcjtcbiAgICBwcm90ZWN0ZWQgZHluYW1pY0NsYXNzZXNNYXA6IFN0cmluZ01hcCA9IHt9O1xuICAgIHByb3RlY3RlZCBkeW5hbWljQ2xhc3NGaWVsZFN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGFjdGlvbkFkYXB0ZXJGYWN0b3J5OiBSZWNvcmRUaHJlYWRJdGVtQWN0aW9uc0FkYXB0ZXJGYWN0b3J5XG4gICAgKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWN0aW9uQWRhcHRlciA9IHRoaXMuYWN0aW9uQWRhcHRlckZhY3RvcnkuY3JlYXRlKHRoaXMuY29uZmlnLnN0b3JlLCB0aGlzLmNvbmZpZy50aHJlYWRTdG9yZSwgdGhpcy5jb25maWcpO1xuICAgICAgICB0aGlzLmluaXREeW5hbWljQ2xhc3MoKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdWJzLmZvckVhY2goc3ViID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcbiAgICAgICAgdGhpcy5keW5hbWljQ2xhc3NGaWVsZFN1YnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZyB8fCAhdGhpcy5jb25maWcuY29sbGFwc2libGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29sbGFwc2VMaW1pdCA9IHRoaXMuY29uZmlnLmNvbGxhcHNlTGltaXQgfHwgdGhpcy5jb2xsYXBzZUxpbWl0O1xuXG4gICAgICAgICAgICBsZXQgaGVpZ2h0ID0gdGhpcy5ib2R5RWwubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQgfHwgdGhpcy5ib2R5RWwubmF0aXZlRWxlbWVudC5oZWlnaHQ7XG5cbiAgICAgICAgICAgIGlmIChoZWlnaHQgPiBjb2xsYXBzZUxpbWl0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAyMDAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEJ1aWxkIGxheW91dCBkYXRhIHNvdXJjZSBhY2NvcmRpbmcgdG8gcmVjZWl2ZWQgY29uZmlndXJhdGlvblxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBsYXlvdXQ6IEZpZWxkRmxleGJveFJvd1tdXG4gICAgICogQHJldHVybnMge29iamVjdH0gUmVjb3JkRmxleGJveENvbmZpZ1xuICAgICAqL1xuICAgIGJ1aWxkQ29uZmlnKGxheW91dDogRmllbGRGbGV4Ym94KTogUmVjb3JkRmxleGJveENvbmZpZyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZWNvcmQkOiB0aGlzLmNvbmZpZy5zdG9yZS5zdGFnaW5nUmVjb3JkJCxcbiAgICAgICAgICAgIG1vZGUkOiB0aGlzLmNvbmZpZy5zdG9yZS5tb2RlJCxcbiAgICAgICAgICAgIGxheW91dCQ6IG9mKGxheW91dCkucGlwZShzaGFyZVJlcGxheSgxKSksXG4gICAgICAgICAgICBpbnB1dENsYXNzOiB7XG4gICAgICAgICAgICAgICAgLi4uKHRoaXMuY29uZmlnLmlucHV0Q2xhc3MgfHwge30pLFxuICAgICAgICAgICAgICAgICdmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtJzogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJ1dHRvbkNsYXNzOiB0aGlzPy5jb25maWc/LmJ1dHRvbkNsYXNzID8/ICcnLFxuICAgICAgICAgICAgYnV0dG9uR3JvdXBDbGFzczogdGhpcz8uY29uZmlnPy5idXR0b25Hcm91cENsYXNzID8/ICcnLFxuICAgICAgICAgICAgbGFiZWxDbGFzczogdGhpcz8uY29uZmlnPy5sYWJlbENsYXNzID8/IHt9LFxuICAgICAgICAgICAgcm93Q2xhc3M6IHRoaXM/LmNvbmZpZz8ucm93Q2xhc3MgPz8ge30sXG4gICAgICAgICAgICBjb2xDbGFzczogdGhpcz8uY29uZmlnPy5jb2xDbGFzcyA/PyB7fSxcbiAgICAgICAgICAgIGFjdGlvbnM6IHRoaXM/LmFjdGlvbkFkYXB0ZXIsXG4gICAgICAgICAgICBrbGFzczogdGhpcz8uY29uZmlnPy5jb250YWluZXJDbGFzcyxcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IHRoaXM/LmNvbmZpZz8uZmxleERpcmVjdGlvbiB8fCAnJ1xuICAgICAgICB9IGFzIFJlY29yZEZsZXhib3hDb25maWc7XG4gICAgfVxuXG4gICAgZ2V0Q29sbGFwc2VCdXR0b24oKTogQnV0dG9uSW50ZXJmYWNlIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGtsYXNzOiAnY29sbGFwc2UtYnV0dG9uIGJ0biBidG4tbGluayBidG4tc20nLFxuICAgICAgICAgICAgbGFiZWxLZXk6IHRoaXMuY29sbGFwc2VkID8gJ0xCTF9TSE9XX01PUkUnIDogJ0xCTF9TSE9XX0xFU1MnLFxuICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkID0gIXRoaXMuY29sbGFwc2VkO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbGxhcHNlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbmZpZy5jb2xsYXBzZWQoKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLmV4cGFuZGVkKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGFzIEJ1dHRvbkludGVyZmFjZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdER5bmFtaWNDbGFzcygpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZyB8fCAhdGhpcy5jb25maWcuZHluYW1pY0NsYXNzIHx8ICF0aGlzLmNvbmZpZy5keW5hbWljQ2xhc3MubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLmNvbmZpZy5zdG9yZS5zdGFnaW5nUmVjb3JkJC5zdWJzY3JpYmUocmVjb3JkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGtsYXNzZXNNYXA6IFN0cmluZ01hcCA9IHt9O1xuXG4gICAgICAgICAgICB0aGlzLmR5bmFtaWNDbGFzc0ZpZWxkU3Vicy5mb3JFYWNoKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XG5cbiAgICAgICAgICAgIGlmICghcmVjb3JkIHx8ICFyZWNvcmQuZmllbGRzIHx8ICFPYmplY3Qua2V5cyhyZWNvcmQuZmllbGRzKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmR5bmFtaWNDbGFzcy5mb3JFYWNoKGZpZWxkS2V5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWZpZWxkS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIXJlY29yZC5maWVsZHNbZmllbGRLZXldICYmICFyZWNvcmQuYXR0cmlidXRlc1tmaWVsZEtleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyZWNvcmQuZmllbGRzW2ZpZWxkS2V5XSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmR5bmFtaWNDbGFzc0ZpZWxkU3Vicy5wdXNoKHJlY29yZC5maWVsZHNbZmllbGRLZXldLnZhbHVlQ2hhbmdlcyQucGlwZShkZWJvdW5jZVRpbWUoMTAwKSkuc3Vic2NyaWJlKCgpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qga2xhc3MgPSB0aGlzLmdldER5bmFtaWNDbGFzc2VzKGZpZWxkS2V5LCByZWNvcmQpID8/ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtsYXNzICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHluYW1pY0NsYXNzZXNNYXBbZmllbGRLZXldID0ga2xhc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVEeW5hbWljQ2xhc3NlcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3Qga2xhc3MgPSB0aGlzLmdldER5bmFtaWNDbGFzc2VzKGZpZWxkS2V5LCByZWNvcmQpID8/ICcnO1xuICAgICAgICAgICAgICAgIGlmIChrbGFzcyAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAga2xhc3Nlc01hcFtmaWVsZEtleV0gPSBrbGFzcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5keW5hbWljQ2xhc3Nlc01hcCA9IGtsYXNzZXNNYXA7XG4gICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZUR5bmFtaWNDbGFzc2VzKCk7XG5cbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZSBkeW5hbWljIGNsYXNzZXNcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgY2FsY3VsYXRlRHluYW1pY0NsYXNzZXMoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGtsYXNzZXMgPSBbXTtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5keW5hbWljQ2xhc3Nlc01hcCA/PyB7fSkuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgICAgICBjb25zdCBrbGFzcyA9IHRoaXMuZHluYW1pY0NsYXNzZXNNYXBbZmllbGRdID8/ICcnO1xuICAgICAgICAgICAgaWYgKGtsYXNzID09PSAnJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGtsYXNzZXMucHVzaChrbGFzcyk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5keW5hbWljQ2xhc3MgPSBrbGFzc2VzLmpvaW4oJyAnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgRHluYW1pYyBjbGFzc2VzIGZvciByZWNvcmRcbiAgICAgKiBAcGFyYW0gZmllbGRLZXlcbiAgICAgKiBAcGFyYW0gcmVjb3JkXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXREeW5hbWljQ2xhc3NlcyhmaWVsZEtleTogc3RyaW5nLCByZWNvcmQ6IFJlY29yZCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHByZWZpeCA9IGZpZWxkS2V5ICsgJy0nO1xuICAgICAgICBsZXQgdmFsdWVzID0gW107XG5cbiAgICAgICAgaWYgKCFyZWNvcmQuZmllbGRzW2ZpZWxkS2V5XSkge1xuXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyZWNvcmQuYXR0cmlidXRlc1tmaWVsZEtleV0pKSB7XG5cbiAgICAgICAgICAgICAgICB2YWx1ZXMgPSB2YWx1ZXMuY29uY2F0KHJlY29yZC5hdHRyaWJ1dGVzW2ZpZWxkS2V5XSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHJlY29yZC5hdHRyaWJ1dGVzW2ZpZWxkS2V5XSAhPT0gJ29iamVjdCcpIHtcblxuICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKHJlY29yZC5hdHRyaWJ1dGVzW2ZpZWxkS2V5XSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWYgKHJlY29yZC5maWVsZHNbZmllbGRLZXldLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzLnB1c2gocmVjb3JkLmZpZWxkc1tmaWVsZEtleV0udmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVjb3JkLmZpZWxkc1tmaWVsZEtleV0udmFsdWVMaXN0ICYmIHJlY29yZC5maWVsZHNbZmllbGRLZXldLnZhbHVlTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXMgPSB2YWx1ZXMuY29uY2F0KHJlY29yZC5maWVsZHNbZmllbGRLZXldLnZhbHVlTGlzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXZhbHVlcyB8fCAhdmFsdWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHByZWZpeCArIHZhbHVlcy5qb2luKCcgJyArIHByZWZpeCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGJvZHkgY2xhc3NcbiAgICAgKi9cbiAgICBnZXRCb2R5Q2xhc3MoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnPy5tZXRhZGF0YT8uYm9keUxheW91dD8uY2xhc3MgPz8gJydcbiAgICB9XG5cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cblxuPGRpdiAqbmdJZj1cImNvbmZpZ1wiXG4gICAgIGNsYXNzPVwiZC1mbGV4IGZsZXgtY29sdW1uIHJlY29yZC10aHJlYWQtaXRlbSB7eyhjb25maWcgJiYgY29uZmlnLmtsYXNzKSB8fCAnJ319IHt7ZHluYW1pY0NsYXNzfX1cIj5cbiAgICA8ZGl2IGNsYXNzPVwicmVjb3JkLXRocmVhZC1pdGVtLWhlYWRlciBmbGV4LWdyb3ctMVwiPlxuXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb25maWcubWV0YWRhdGEgJiYgY29uZmlnLm1ldGFkYXRhLmhlYWRlckxheW91dFwiPlxuXG4gICAgICAgICAgICA8c2NybS1yZWNvcmQtZmxleGJveCBbY29uZmlnXT1cImJ1aWxkQ29uZmlnKGNvbmZpZy5tZXRhZGF0YS5oZWFkZXJMYXlvdXQpXCI+PC9zY3JtLXJlY29yZC1mbGV4Ym94PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgIDwvZGl2PlxuICAgIDxkaXYgI2JvZHlcbiAgICAgICAgIFtjbGFzcy5jb2xsYXBzZWRdPVwiY29sbGFwc2libGUgJiYgY29sbGFwc2VkXCJcbiAgICAgICAgIFtjbGFzcy5leHBhbmRlZF09XCJjb2xsYXBzaWJsZSAmJiAhY29sbGFwc2VkXCJcbiAgICAgICAgIGNsYXNzPVwicmVjb3JkLXRocmVhZC1pdGVtLWJvZHkgZmxleC1ncm93LTEge3tnZXRCb2R5Q2xhc3MoKX19XCI+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbmZpZy5tZXRhZGF0YSAmJiBjb25maWcubWV0YWRhdGEuYm9keUxheW91dFwiPlxuICAgICAgICAgICAgPHNjcm0tcmVjb3JkLWZsZXhib3ggW2NvbmZpZ109XCJidWlsZENvbmZpZyhjb25maWcubWV0YWRhdGEuYm9keUxheW91dClcIj48L3Njcm0tcmVjb3JkLWZsZXhib3g+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgIDxkaXYgKm5nSWY9XCJjb2xsYXBzaWJsZSAmJiBjb2xsYXBzZWRcIiBjbGFzcz1cImZhZGVvdXRcIj48L2Rpdj5cblxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiAqbmdJZj1cImNvbGxhcHNpYmxlXCIgY2xhc3M9XCJyZWNvcmQtdGhyZWFkLWl0ZW0tY29sbGFwc2UgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgZmxleC1ncm93LTFcIj5cbiAgICAgICAgPHNjcm0tYnV0dG9uIFtjb25maWddPVwiZ2V0Q29sbGFwc2VCdXR0b24oKVwiPjwvc2NybS1idXR0b24+XG4gICAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==