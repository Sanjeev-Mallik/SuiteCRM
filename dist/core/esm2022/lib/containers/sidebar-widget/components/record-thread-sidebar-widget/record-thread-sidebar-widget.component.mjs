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
import { Component } from '@angular/core';
import { isTrue, isFalse } from '../../../../common/utils/value-utils';
import { deepClone } from '../../../../common/utils/object-utils';
import { of } from 'rxjs';
import { LanguageStore } from '../../../../store/language/language.store';
import { BaseWidgetComponent } from '../../../widgets/base-widget.model';
import { distinctUntilChanged, filter, map, shareReplay } from 'rxjs/operators';
import { SystemConfigStore } from '../../../../store/system-config/system-config.store';
import { isEmpty } from "lodash-es";
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/language/language.store";
import * as i2 from "../../../../store/system-config/system-config.store";
import * as i3 from "@angular/common";
import * as i4 from "../../../../components/widget-panel/widget-panel.component";
import * as i5 from "../../../../components/label/label.component";
import * as i6 from "../../../record-thread/components/record-thread/record-thread.component";
function RecordThreadSidebarWidgetComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵelement(2, "scrm-label", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
function RecordThreadSidebarWidgetComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-record-thread", 5);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("config", ctx_r0.recordThreadConfig);
} }
export class RecordThreadSidebarWidgetComponent extends BaseWidgetComponent {
    constructor(language, sytemConfig) {
        super();
        this.language = language;
        this.sytemConfig = sytemConfig;
        this.panelMode = 'none';
        this.subs = [];
    }
    ngOnInit() {
        const options = this.config.options || {};
        this.options = options.recordThread || null;
        if (!this.options) {
            return;
        }
        this.initPanelMode();
        this.initFilters$();
        this.initPresetFields$();
        if (this.context$ && this.context$.subscribe()) {
            this.subs.push(this.context$.subscribe((context) => {
                this.context = context;
            }));
        }
        this.recordThreadConfig = this.getConfig();
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    getHeaderLabel() {
        return this.getLabel(this.config.labelKey) || '';
    }
    getLabel(key) {
        const context = this.context || {};
        const module = context.module || '';
        return this.language.getFieldLabel(key, module);
    }
    getConfig() {
        const config = {
            filters$: this.filters$,
            presetFields$: this.presetFields$,
            module: this.options.module,
            klass: this.options.class || '',
            maxListHeight: this.options.maxListHeight ?? 350,
            direction: this.options.direction || 'asc',
            create: !!this?.options?.create,
            createConfig: {},
            itemConfig: {
                collapsible: this.options.item.collapsible || false,
                collapseLimit: this.options.item.collapseLimit || null,
                klass: this.options.item.itemClass || '',
                dynamicClass: this.options.item.dynamicClass || [],
                metadata: {}
            },
            listActions: this?.options?.listActions ?? null,
            collapseListActions: this?.options?.collapseListActions ?? false,
            listActionsClass: this?.options?.listActionsClass ?? '',
            listActionsButtonClass: this?.options?.listActionsButtonClass ?? '',
            listActionsButtonGroupClass: this?.options?.listActionsButtonGroupClass ?? '',
        };
        this.setupItemMetadata(config.itemConfig.metadata, this.options.item.layout);
        if (!isEmpty(this.options?.create ?? null)) {
            config.createConfig = {
                collapsible: false,
                metadata: {}
            };
            this.setupItemMetadata(config.createConfig.metadata, this.options?.create?.layout ?? {});
        }
        return config;
    }
    setupItemMetadata(metadata, config) {
        if (config && config.header) {
            metadata.headerLayout = deepClone(config.header);
        }
        if (config && config.body) {
            metadata.bodyLayout = deepClone(config.body);
        }
        if (config && config.actions) {
            metadata.actions = deepClone(config.actions);
        }
        if (config && config.fields) {
            metadata.fields = deepClone(config.fields);
        }
        if ((config?.collapseActions ?? null) !== null) {
            metadata.collapseActions = config?.collapseActions;
        }
    }
    initPanelMode() {
        const ui = this.sytemConfig.getConfigValue('ui');
        const systemDefault = ui?.widget?.allowCollapse ?? null;
        const allowCollapse = this?.config?.allowCollapse ?? null;
        let mode = 'none';
        if (systemDefault !== null) {
            if (isTrue(systemDefault)) {
                mode = 'collapsible';
            }
            else if (isFalse(systemDefault)) {
                mode = 'none';
            }
        }
        if (allowCollapse !== null) {
            if (isTrue(allowCollapse)) {
                mode = 'collapsible';
            }
            else if (isFalse(allowCollapse)) {
                mode = 'none';
            }
        }
        this.panelMode = mode;
    }
    initFilters$() {
        if (!this.options || !this.options.filters || !this.context$) {
            return;
        }
        const parentFilters = this.options.filters.parentFilters || {};
        let context$ = of({}).pipe(shareReplay());
        if (Object.keys(parentFilters).length > 0) {
            context$ = this.context$.pipe(filter(context => {
                const record = (context && context.record) || {};
                return !!(record.attributes && Object.keys(record.attributes).length);
            }));
        }
        this.filters$ = context$.pipe(map(context => {
            const filters = { filters: {} };
            this.initParentFilters(context, filters);
            const staticFilters = this.options.filters.static || {};
            filters.filters = {
                ...filters.filters,
                ...staticFilters
            };
            if (this.options.filters.orderBy) {
                filters.orderBy = this.options.filters.orderBy;
            }
            if (this.options.filters.sortOrder) {
                filters.sortOrder = this.options.filters.sortOrder;
            }
            return filters;
        }), distinctUntilChanged());
    }
    initPresetFields$() {
        if (!this.options || !this.options.create || !this.options.create.presetFields || !this.context$) {
            return;
        }
        this.presetFields$ = this.context$.pipe(map(context => {
            const parentValues = this.initParentValues(context);
            const staticValues = this.options.create.presetFields.static || {};
            return {
                ...parentValues,
                ...staticValues
            };
        }), distinctUntilChanged());
    }
    initParentFilters(context, filters) {
        const parentFilters = this.options.filters.parentFilters || {};
        if (!context || !context.record || !parentFilters) {
            return;
        }
        Object.keys(parentFilters).forEach(parentField => {
            const field = parentFilters[parentField];
            const value = context.record.attributes[parentField] || '';
            if (!value) {
                return;
            }
            filters.filters[field] = {
                field: parentFilters,
                operator: '=',
                values: [value],
            };
        });
    }
    initParentValues(context) {
        const parentValues = this.options.create.presetFields.parentValues || {};
        if (!context || !context.record || !parentValues) {
            return;
        }
        const attributes = {};
        Object.keys(parentValues).forEach(parentField => {
            const field = parentValues[parentField];
            const value = context.record.attributes[parentField] || '';
            if (!value) {
                return;
            }
            attributes[field] = value;
        });
        return attributes;
    }
    static { this.ɵfac = function RecordThreadSidebarWidgetComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RecordThreadSidebarWidgetComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore), i0.ɵɵdirectiveInject(i2.SystemConfigStore)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RecordThreadSidebarWidgetComponent, selectors: [["scrm-record-thread-sidebar-widget"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 4, consts: [[3, "mode", "title"], ["widget-body", "", 1, "record-thread-sidebar-widget"], [4, "ngIf"], [1, "p-3", "widget-message"], ["labelKey", "LBL_BAD_CONFIG"], [3, "config"]], template: function RecordThreadSidebarWidgetComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "scrm-widget-panel", 0)(1, "div", 1);
            i0.ɵɵtemplate(2, RecordThreadSidebarWidgetComponent_ng_container_2_Template, 3, 0, "ng-container", 2)(3, RecordThreadSidebarWidgetComponent_ng_container_3_Template, 2, 1, "ng-container", 2);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("mode", ctx.panelMode)("title", ctx.getHeaderLabel());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.options);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.options);
        } }, dependencies: [i3.NgIf, i4.WidgetPanelComponent, i5.LabelComponent, i6.RecordThreadComponent], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordThreadSidebarWidgetComponent, [{
        type: Component,
        args: [{ selector: 'scrm-record-thread-sidebar-widget', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<scrm-widget-panel [mode]=\"panelMode\" [title]=\"getHeaderLabel()\">\n    <div class=\"record-thread-sidebar-widget\" widget-body>\n\n        <ng-container *ngIf=\"!options\">\n            <div class=\"p-3 widget-message\">\n                <scrm-label labelKey=\"LBL_BAD_CONFIG\"></scrm-label>\n            </div>\n        </ng-container>\n\n        <ng-container *ngIf=\"options\">\n            <scrm-record-thread [config]=\"recordThreadConfig\"></scrm-record-thread>\n        </ng-container>\n\n    </div>\n</scrm-widget-panel>\n" }]
    }], () => [{ type: i1.LanguageStore }, { type: i2.SystemConfigStore }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RecordThreadSidebarWidgetComponent, { className: "RecordThreadSidebarWidgetComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLXRocmVhZC1zaWRlYmFyLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9zaWRlYmFyLXdpZGdldC9jb21wb25lbnRzL3JlY29yZC10aHJlYWQtc2lkZWJhci13aWRnZXQvcmVjb3JkLXRocmVhZC1zaWRlYmFyLXdpZGdldC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9zaWRlYmFyLXdpZGdldC9jb21wb25lbnRzL3JlY29yZC10aHJlYWQtc2lkZWJhci13aWRnZXQvcmVjb3JkLXRocmVhZC1zaWRlYmFyLXdpZGdldC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUNyRSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFPaEUsT0FBTyxFQUFhLEVBQUUsRUFBZSxNQUFNLE1BQU0sQ0FBQztBQUNsRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDeEUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDdkUsT0FBTyxFQUFDLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFNOUUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0scURBQXFELENBQUM7QUFDdEYsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLFdBQVcsQ0FBQzs7Ozs7Ozs7O0lD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IG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2lzVHJ1ZSwgaXNGYWxzZX0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3V0aWxzL3ZhbHVlLXV0aWxzJztcbmltcG9ydCB7ZGVlcENsb25lfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vdXRpbHMvb2JqZWN0LXV0aWxzJztcbmltcG9ydCB7QWN0aW9ufSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vYWN0aW9ucy9hY3Rpb24ubW9kZWwnO1xuaW1wb3J0IHtGaWVsZERlZmluaXRpb25NYXB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9yZWNvcmQvZmllbGQubW9kZWwnO1xuaW1wb3J0IHtSZWNvcmQsIEF0dHJpYnV0ZU1hcH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3JlY29yZC9yZWNvcmQubW9kZWwnO1xuaW1wb3J0IHtTZWFyY2hDcml0ZXJpYSwgU2VhcmNoQ3JpdGVyaWFGaWx0ZXJ9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi92aWV3cy9saXN0L3NlYXJjaC1jcml0ZXJpYS5tb2RlbCc7XG5pbXBvcnQge1N0cmluZ01hcH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3R5cGVzL3N0cmluZy1tYXAnO1xuaW1wb3J0IHtWaWV3Q29udGV4dH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3ZpZXdzL3ZpZXcubW9kZWwnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBvZiwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtCYXNlV2lkZ2V0Q29tcG9uZW50fSBmcm9tICcuLi8uLi8uLi93aWRnZXRzL2Jhc2Utd2lkZ2V0Lm1vZGVsJztcbmltcG9ydCB7ZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgbWFwLCBzaGFyZVJlcGxheX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgICBSZWNvcmRUaHJlYWRDb25maWcsXG4gICAgVGhyZWFkSXRlbU1ldGFkYXRhQ29uZmlnXG59IGZyb20gJy4uLy4uLy4uL3JlY29yZC10aHJlYWQvY29tcG9uZW50cy9yZWNvcmQtdGhyZWFkL3JlY29yZC10aHJlYWQubW9kZWwnO1xuaW1wb3J0IHtSZWNvcmRUaHJlYWRJdGVtTWV0YWRhdGF9IGZyb20gJy4uLy4uLy4uL3JlY29yZC10aHJlYWQvc3RvcmUvcmVjb3JkLXRocmVhZC9yZWNvcmQtdGhyZWFkLWl0ZW0uc3RvcmUubW9kZWwnO1xuaW1wb3J0IHtTeXN0ZW1Db25maWdTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvc3lzdGVtLWNvbmZpZy9zeXN0ZW0tY29uZmlnLnN0b3JlJztcbmltcG9ydCB7aXNFbXB0eX0gZnJvbSBcImxvZGFzaC1lc1wiO1xuaW1wb3J0IHtSZWNvcmRUaHJlYWRJdGVtQ29uZmlnfSBmcm9tIFwiLi4vLi4vLi4vcmVjb3JkLXRocmVhZC9jb21wb25lbnRzL3JlY29yZC10aHJlYWQtaXRlbS9yZWNvcmQtdGhyZWFkLWl0ZW0ubW9kZWxcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLXJlY29yZC10aHJlYWQtc2lkZWJhci13aWRnZXQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9yZWNvcmQtdGhyZWFkLXNpZGViYXItd2lkZ2V0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFJlY29yZFRocmVhZFNpZGViYXJXaWRnZXRDb21wb25lbnQgZXh0ZW5kcyBCYXNlV2lkZ2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgcGFuZWxNb2RlOiAnY29sbGFwc2libGUnIHwgJ2Nsb3NhYmxlJyB8ICdub25lJyA9ICdub25lJztcbiAgICBvcHRpb25zOiB7XG4gICAgICAgIG1vZHVsZTogc3RyaW5nO1xuICAgICAgICBjbGFzcz86IHN0cmluZztcbiAgICAgICAgbWF4TGlzdEhlaWdodD86IG51bWJlcjtcbiAgICAgICAgZGlyZWN0aW9uPzogJ2FzYycgfCAnZGVzYyc7XG4gICAgICAgIGl0ZW06IHtcbiAgICAgICAgICAgIGR5bmFtaWNDbGFzcz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgaXRlbUNsYXNzPzogc3RyaW5nO1xuICAgICAgICAgICAgY29sbGFwc2libGU/OiBib29sZWFuO1xuICAgICAgICAgICAgY29sbGFwc2VMaW1pdD86IG51bWJlcjtcbiAgICAgICAgICAgIGxheW91dD86IFRocmVhZEl0ZW1NZXRhZGF0YUNvbmZpZztcbiAgICAgICAgICAgIGZpZWxkcz86IEZpZWxkRGVmaW5pdGlvbk1hcDtcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlOiB7XG4gICAgICAgICAgICBwcmVzZXRGaWVsZHM/OiB7XG4gICAgICAgICAgICAgICAgcGFyZW50VmFsdWVzPzogU3RyaW5nTWFwO1xuICAgICAgICAgICAgICAgIHN0YXRpYz86IEF0dHJpYnV0ZU1hcDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsYXlvdXQ/OiBUaHJlYWRJdGVtTWV0YWRhdGFDb25maWc7XG4gICAgICAgIH0sXG4gICAgICAgIGZpbHRlcnM/OiB7XG4gICAgICAgICAgICBwYXJlbnRGaWx0ZXJzPzogU3RyaW5nTWFwO1xuICAgICAgICAgICAgc3RhdGljPzogU2VhcmNoQ3JpdGVyaWFGaWx0ZXI7XG4gICAgICAgICAgICBvcmRlckJ5Pzogc3RyaW5nO1xuICAgICAgICAgICAgc29ydE9yZGVyPzogc3RyaW5nO1xuICAgICAgICB9O1xuICAgICAgICBsaXN0QWN0aW9ucz86IEFjdGlvbltdLFxuICAgICAgICBjb2xsYXBzZUxpc3RBY3Rpb25zPzogYm9vbGVhbixcbiAgICAgICAgbGlzdEFjdGlvbnNDbGFzcz86IHN0cmluZyxcbiAgICAgICAgbGlzdEFjdGlvbnNCdXR0b25DbGFzcz86IHN0cmluZyxcbiAgICAgICAgbGlzdEFjdGlvbnNCdXR0b25Hcm91cENsYXNzPzogc3RyaW5nXG4gICAgfTtcbiAgICByZWNvcmRUaHJlYWRDb25maWc6IFJlY29yZFRocmVhZENvbmZpZztcblxuICAgIGZpbHRlcnMkOiBPYnNlcnZhYmxlPFNlYXJjaENyaXRlcmlhPjtcbiAgICBwcmVzZXRGaWVsZHMkOiBPYnNlcnZhYmxlPEF0dHJpYnV0ZU1hcD47XG4gICAgcHJvdGVjdGVkIHN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGxhbmd1YWdlOiBMYW5ndWFnZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgc3l0ZW1Db25maWc6IFN5c3RlbUNvbmZpZ1N0b3JlXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuY29uZmlnLm9wdGlvbnMgfHwge307XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMucmVjb3JkVGhyZWFkIHx8IG51bGw7XG5cbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5pdFBhbmVsTW9kZSgpO1xuICAgICAgICB0aGlzLmluaXRGaWx0ZXJzJCgpO1xuICAgICAgICB0aGlzLmluaXRQcmVzZXRGaWVsZHMkKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuY29udGV4dCQgJiYgdGhpcy5jb250ZXh0JC5zdWJzY3JpYmUoKSkge1xuICAgICAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5jb250ZXh0JC5zdWJzY3JpYmUoKGNvbnRleHQ6IFZpZXdDb250ZXh0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVjb3JkVGhyZWFkQ29uZmlnID0gdGhpcy5nZXRDb25maWcoKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdWJzLmZvckVhY2goc3ViID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcbiAgICB9XG5cbiAgICBnZXRIZWFkZXJMYWJlbCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRMYWJlbCh0aGlzLmNvbmZpZy5sYWJlbEtleSkgfHwgJyc7XG4gICAgfVxuXG4gICAgZ2V0TGFiZWwoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0IHx8IHt9IGFzIFZpZXdDb250ZXh0O1xuICAgICAgICBjb25zdCBtb2R1bGUgPSBjb250ZXh0Lm1vZHVsZSB8fCAnJztcblxuICAgICAgICByZXR1cm4gdGhpcy5sYW5ndWFnZS5nZXRGaWVsZExhYmVsKGtleSwgbW9kdWxlKTtcbiAgICB9XG5cbiAgICBnZXRDb25maWcoKTogUmVjb3JkVGhyZWFkQ29uZmlnIHtcblxuICAgICAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAgICAgICBmaWx0ZXJzJDogdGhpcy5maWx0ZXJzJCxcbiAgICAgICAgICAgIHByZXNldEZpZWxkcyQ6IHRoaXMucHJlc2V0RmllbGRzJCxcbiAgICAgICAgICAgIG1vZHVsZTogdGhpcy5vcHRpb25zLm1vZHVsZSxcbiAgICAgICAgICAgIGtsYXNzOiB0aGlzLm9wdGlvbnMuY2xhc3MgfHwgJycsXG4gICAgICAgICAgICBtYXhMaXN0SGVpZ2h0OiB0aGlzLm9wdGlvbnMubWF4TGlzdEhlaWdodCA/PyAzNTAsXG4gICAgICAgICAgICBkaXJlY3Rpb246IHRoaXMub3B0aW9ucy5kaXJlY3Rpb24gfHwgJ2FzYycsXG4gICAgICAgICAgICBjcmVhdGU6ICEhdGhpcz8ub3B0aW9ucz8uY3JlYXRlLFxuICAgICAgICAgICAgY3JlYXRlQ29uZmlnOiB7fSxcbiAgICAgICAgICAgIGl0ZW1Db25maWc6IHtcbiAgICAgICAgICAgICAgICBjb2xsYXBzaWJsZTogdGhpcy5vcHRpb25zLml0ZW0uY29sbGFwc2libGUgfHwgZmFsc2UsXG4gICAgICAgICAgICAgICAgY29sbGFwc2VMaW1pdDogdGhpcy5vcHRpb25zLml0ZW0uY29sbGFwc2VMaW1pdCB8fCBudWxsLFxuICAgICAgICAgICAgICAgIGtsYXNzOiB0aGlzLm9wdGlvbnMuaXRlbS5pdGVtQ2xhc3MgfHwgJycsXG4gICAgICAgICAgICAgICAgZHluYW1pY0NsYXNzOiB0aGlzLm9wdGlvbnMuaXRlbS5keW5hbWljQ2xhc3MgfHwgW10sXG4gICAgICAgICAgICAgICAgbWV0YWRhdGE6IHt9IGFzIFJlY29yZFRocmVhZEl0ZW1NZXRhZGF0YVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxpc3RBY3Rpb25zOiB0aGlzPy5vcHRpb25zPy5saXN0QWN0aW9ucyA/PyBudWxsLFxuICAgICAgICAgICAgY29sbGFwc2VMaXN0QWN0aW9uczogdGhpcz8ub3B0aW9ucz8uY29sbGFwc2VMaXN0QWN0aW9ucyA/PyBmYWxzZSxcbiAgICAgICAgICAgIGxpc3RBY3Rpb25zQ2xhc3M6IHRoaXM/Lm9wdGlvbnM/Lmxpc3RBY3Rpb25zQ2xhc3MgPz8gJycsXG4gICAgICAgICAgICBsaXN0QWN0aW9uc0J1dHRvbkNsYXNzOiB0aGlzPy5vcHRpb25zPy5saXN0QWN0aW9uc0J1dHRvbkNsYXNzID8/ICcnLFxuICAgICAgICAgICAgbGlzdEFjdGlvbnNCdXR0b25Hcm91cENsYXNzOiB0aGlzPy5vcHRpb25zPy5saXN0QWN0aW9uc0J1dHRvbkdyb3VwQ2xhc3MgPz8gJycsXG4gICAgICAgIH0gYXMgUmVjb3JkVGhyZWFkQ29uZmlnO1xuXG4gICAgICAgIHRoaXMuc2V0dXBJdGVtTWV0YWRhdGEoY29uZmlnLml0ZW1Db25maWcubWV0YWRhdGEsIHRoaXMub3B0aW9ucy5pdGVtLmxheW91dCk7XG4gICAgICAgIGlmKCFpc0VtcHR5KHRoaXMub3B0aW9ucz8uY3JlYXRlID8/IG51bGwpKSB7XG4gICAgICAgICAgICBjb25maWcuY3JlYXRlQ29uZmlnID0gIHtcbiAgICAgICAgICAgICAgICBjb2xsYXBzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgbWV0YWRhdGE6IHt9IGFzIFJlY29yZFRocmVhZEl0ZW1NZXRhZGF0YVxuICAgICAgICAgICAgfSBhcyBSZWNvcmRUaHJlYWRJdGVtQ29uZmlnO1xuICAgICAgICAgICAgdGhpcy5zZXR1cEl0ZW1NZXRhZGF0YShjb25maWcuY3JlYXRlQ29uZmlnLm1ldGFkYXRhLCB0aGlzLm9wdGlvbnM/LmNyZWF0ZT8ubGF5b3V0ID8/IHt9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNldHVwSXRlbU1ldGFkYXRhKG1ldGFkYXRhOiBSZWNvcmRUaHJlYWRJdGVtTWV0YWRhdGEsIGNvbmZpZzogVGhyZWFkSXRlbU1ldGFkYXRhQ29uZmlnKSB7XG4gICAgICAgIGlmIChjb25maWcgJiYgY29uZmlnLmhlYWRlcikge1xuICAgICAgICAgICAgbWV0YWRhdGEuaGVhZGVyTGF5b3V0ID0gZGVlcENsb25lKGNvbmZpZy5oZWFkZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZyAmJiBjb25maWcuYm9keSkge1xuICAgICAgICAgICAgbWV0YWRhdGEuYm9keUxheW91dCA9IGRlZXBDbG9uZShjb25maWcuYm9keSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnICYmIGNvbmZpZy5hY3Rpb25zKSB7XG4gICAgICAgICAgICBtZXRhZGF0YS5hY3Rpb25zID0gZGVlcENsb25lKGNvbmZpZy5hY3Rpb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25maWcgJiYgY29uZmlnLmZpZWxkcykge1xuICAgICAgICAgICAgbWV0YWRhdGEuZmllbGRzID0gZGVlcENsb25lKGNvbmZpZy5maWVsZHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKChjb25maWc/LmNvbGxhcHNlQWN0aW9ucyA/PyBudWxsKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgbWV0YWRhdGEuY29sbGFwc2VBY3Rpb25zID0gY29uZmlnPy5jb2xsYXBzZUFjdGlvbnM7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBpbml0UGFuZWxNb2RlKCk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IHVpID0gdGhpcy5zeXRlbUNvbmZpZy5nZXRDb25maWdWYWx1ZSgndWknKTtcbiAgICAgICAgY29uc3Qgc3lzdGVtRGVmYXVsdCA9IHVpPy53aWRnZXQ/LmFsbG93Q29sbGFwc2UgPz8gbnVsbDtcbiAgICAgICAgY29uc3QgYWxsb3dDb2xsYXBzZSA9IHRoaXM/LmNvbmZpZz8uYWxsb3dDb2xsYXBzZSA/PyBudWxsO1xuXG4gICAgICAgIGxldCBtb2RlOiAnY29sbGFwc2libGUnIHwgJ2Nsb3NhYmxlJyB8ICdub25lJyA9ICdub25lJztcblxuICAgICAgICBpZiAoc3lzdGVtRGVmYXVsdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGlzVHJ1ZShzeXN0ZW1EZWZhdWx0KSkge1xuICAgICAgICAgICAgICAgIG1vZGUgPSAnY29sbGFwc2libGUnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0ZhbHNlKHN5c3RlbURlZmF1bHQpKSB7XG4gICAgICAgICAgICAgICAgbW9kZSA9ICdub25lJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFsbG93Q29sbGFwc2UgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChpc1RydWUoYWxsb3dDb2xsYXBzZSkpIHtcbiAgICAgICAgICAgICAgICBtb2RlID0gJ2NvbGxhcHNpYmxlJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNGYWxzZShhbGxvd0NvbGxhcHNlKSkge1xuICAgICAgICAgICAgICAgIG1vZGUgPSAnbm9uZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucGFuZWxNb2RlID0gbW9kZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdEZpbHRlcnMkKCkge1xuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucyB8fCAhdGhpcy5vcHRpb25zLmZpbHRlcnMgfHwgIXRoaXMuY29udGV4dCQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhcmVudEZpbHRlcnMgPSB0aGlzLm9wdGlvbnMuZmlsdGVycy5wYXJlbnRGaWx0ZXJzIHx8IHt9IGFzIFN0cmluZ01hcDtcblxuICAgICAgICBsZXQgY29udGV4dCQgPSBvZih7fSkucGlwZShzaGFyZVJlcGxheSgpKTtcblxuICAgICAgICBpZiAoT2JqZWN0LmtleXMocGFyZW50RmlsdGVycykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29udGV4dCQgPSB0aGlzLmNvbnRleHQkLnBpcGUoXG4gICAgICAgICAgICAgICAgZmlsdGVyKGNvbnRleHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWNvcmQgPSAoY29udGV4dCAmJiBjb250ZXh0LnJlY29yZCkgfHwge30gYXMgUmVjb3JkO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gISEocmVjb3JkLmF0dHJpYnV0ZXMgJiYgT2JqZWN0LmtleXMocmVjb3JkLmF0dHJpYnV0ZXMpLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZpbHRlcnMkID0gY29udGV4dCQucGlwZShcbiAgICAgICAgICAgIG1hcChjb250ZXh0ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWx0ZXJzID0ge2ZpbHRlcnM6IHt9IGFzIFNlYXJjaENyaXRlcmlhRmlsdGVyfSBhcyBTZWFyY2hDcml0ZXJpYTtcblxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdFBhcmVudEZpbHRlcnMoY29udGV4dCwgZmlsdGVycyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0aWNGaWx0ZXJzID0gdGhpcy5vcHRpb25zLmZpbHRlcnMuc3RhdGljIHx8IHt9IGFzIFNlYXJjaENyaXRlcmlhRmlsdGVyO1xuXG4gICAgICAgICAgICAgICAgZmlsdGVycy5maWx0ZXJzID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi5maWx0ZXJzLmZpbHRlcnMsXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRpY0ZpbHRlcnNcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5maWx0ZXJzLm9yZGVyQnkpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVycy5vcmRlckJ5ID0gdGhpcy5vcHRpb25zLmZpbHRlcnMub3JkZXJCeTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmZpbHRlcnMuc29ydE9yZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcnMuc29ydE9yZGVyID0gdGhpcy5vcHRpb25zLmZpbHRlcnMuc29ydE9yZGVyO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBmaWx0ZXJzO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGluaXRQcmVzZXRGaWVsZHMkKCkge1xuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucyB8fCAhdGhpcy5vcHRpb25zLmNyZWF0ZSB8fCAhdGhpcy5vcHRpb25zLmNyZWF0ZS5wcmVzZXRGaWVsZHMgfHwgIXRoaXMuY29udGV4dCQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgdGhpcy5wcmVzZXRGaWVsZHMkID0gdGhpcy5jb250ZXh0JC5waXBlKFxuICAgICAgICAgICAgbWFwKGNvbnRleHQgPT4ge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50VmFsdWVzID0gdGhpcy5pbml0UGFyZW50VmFsdWVzKGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGljVmFsdWVzID0gdGhpcy5vcHRpb25zLmNyZWF0ZS5wcmVzZXRGaWVsZHMuc3RhdGljIHx8IHt9IGFzIEF0dHJpYnV0ZU1hcDtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAuLi5wYXJlbnRWYWx1ZXMsXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRpY1ZhbHVlc1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdFBhcmVudEZpbHRlcnMoY29udGV4dCwgZmlsdGVycykge1xuXG4gICAgICAgIGNvbnN0IHBhcmVudEZpbHRlcnMgPSB0aGlzLm9wdGlvbnMuZmlsdGVycy5wYXJlbnRGaWx0ZXJzIHx8IHt9IGFzIFN0cmluZ01hcDtcbiAgICAgICAgaWYgKCFjb250ZXh0IHx8ICFjb250ZXh0LnJlY29yZCB8fCAhcGFyZW50RmlsdGVycykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmtleXMocGFyZW50RmlsdGVycykuZm9yRWFjaChwYXJlbnRGaWVsZCA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWVsZCA9IHBhcmVudEZpbHRlcnNbcGFyZW50RmllbGRdO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBjb250ZXh0LnJlY29yZC5hdHRyaWJ1dGVzW3BhcmVudEZpZWxkXSB8fCAnJztcblxuICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZmlsdGVycy5maWx0ZXJzW2ZpZWxkXSA9IHtcbiAgICAgICAgICAgICAgICBmaWVsZDogcGFyZW50RmlsdGVycyxcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogJz0nLFxuICAgICAgICAgICAgICAgIHZhbHVlczogW3ZhbHVlXSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGluaXRQYXJlbnRWYWx1ZXMoY29udGV4dDogVmlld0NvbnRleHQpOiBBdHRyaWJ1dGVNYXAge1xuXG4gICAgICAgIGNvbnN0IHBhcmVudFZhbHVlcyA9IHRoaXMub3B0aW9ucy5jcmVhdGUucHJlc2V0RmllbGRzLnBhcmVudFZhbHVlcyB8fCB7fSBhcyBTdHJpbmdNYXA7XG4gICAgICAgIGlmICghY29udGV4dCB8fCAhY29udGV4dC5yZWNvcmQgfHwgIXBhcmVudFZhbHVlcykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYXR0cmlidXRlcyA9IHt9IGFzIEF0dHJpYnV0ZU1hcDtcblxuICAgICAgICBPYmplY3Qua2V5cyhwYXJlbnRWYWx1ZXMpLmZvckVhY2gocGFyZW50RmllbGQgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmllbGQgPSBwYXJlbnRWYWx1ZXNbcGFyZW50RmllbGRdO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBjb250ZXh0LnJlY29yZC5hdHRyaWJ1dGVzW3BhcmVudEZpZWxkXSB8fCAnJztcblxuICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXR0cmlidXRlc1tmaWVsZF0gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZXM7XG4gICAgfVxuXG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48c2NybS13aWRnZXQtcGFuZWwgW21vZGVdPVwicGFuZWxNb2RlXCIgW3RpdGxlXT1cImdldEhlYWRlckxhYmVsKClcIj5cbiAgICA8ZGl2IGNsYXNzPVwicmVjb3JkLXRocmVhZC1zaWRlYmFyLXdpZGdldFwiIHdpZGdldC1ib2R5PlxuXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhb3B0aW9uc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtMyB3aWRnZXQtbWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgIDxzY3JtLWxhYmVsIGxhYmVsS2V5PVwiTEJMX0JBRF9DT05GSUdcIj48L3Njcm0tbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm9wdGlvbnNcIj5cbiAgICAgICAgICAgIDxzY3JtLXJlY29yZC10aHJlYWQgW2NvbmZpZ109XCJyZWNvcmRUaHJlYWRDb25maWdcIj48L3Njcm0tcmVjb3JkLXRocmVhZD5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8L2Rpdj5cbjwvc2NybS13aWRnZXQtcGFuZWw+XG4iXX0=