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
import { BehaviorSubject, combineLatestWith, of } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { SelectionStatus } from '../../../common/views/list/record-selection.model';
import { SortDirection } from '../../../common/views/list/list-navigation.model';
import { FieldManager } from '../../../services/record/field/field.manager';
import { LoadingBufferFactory } from '../../../services/ui/loading-buffer/loading-buffer.factory';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/record/field/field.manager";
import * as i2 from "../../../services/ui/loading-buffer/loading-buffer.factory";
import * as i3 from "@angular/common";
import * as i4 from "@angular/cdk/table";
import * as i5 from "../../../fields/field.component";
import * as i6 from "../../sort-button/sort-button.component";
import * as i7 from "../../line-action-menu/line-action-menu.component";
import * as i8 from "../../loading-spinner/loading-spinner.component";
import * as i9 from "../../label/label.component";
import * as i10 from "../../popups/components/record-details-popup-button/record-details-popup-button.component";
function TableBodyComponent_ng_container_0_ng_container_3_th_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 13);
} }
function TableBodyComponent_ng_container_0_ng_container_3_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 14)(1, "label", 15)(2, "input", 16);
    i0.ɵɵlistener("change", function TableBodyComponent_ng_container_0_ng_container_3_td_2_Template_input_change_2_listener() { const record_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.toggleSelection(record_r2["id"])); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "span", 17);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const record_r2 = ctx.$implicit;
    const vm_r4 = i0.ɵɵnextContext(2).ngIf;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("checked", record_r2["id"] && vm_r4.selected[record_r2["id"]] || ctx_r2.allSelected(vm_r4.selectionStatus))("disabled", ctx_r2.allSelected(vm_r4.selectionStatus));
} }
function TableBodyComponent_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 12);
    i0.ɵɵtemplate(1, TableBodyComponent_ng_container_0_ng_container_3_th_1_Template, 1, 0, "th", 7)(2, TableBodyComponent_ng_container_0_ng_container_3_td_2_Template, 4, 2, "td", 8);
    i0.ɵɵelementContainerEnd();
} }
function TableBodyComponent_ng_container_0_ng_container_4_th_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 21);
} }
function TableBodyComponent_ng_container_0_ng_container_4_td_2_scrm_record_details_popup_button_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-record-details-popup-button", 24);
} if (rf & 2) {
    const record_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("record", record_r5)("columns", ctx_r2.popoverColumns);
} }
function TableBodyComponent_ng_container_0_ng_container_4_td_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 22);
    i0.ɵɵtemplate(1, TableBodyComponent_ng_container_0_ng_container_4_td_2_scrm_record_details_popup_button_1_Template, 1, 2, "scrm-record-details-popup-button", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.popoverColumns.length);
} }
function TableBodyComponent_ng_container_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 18);
    i0.ɵɵtemplate(1, TableBodyComponent_ng_container_0_ng_container_4_th_1_Template, 1, 0, "th", 19)(2, TableBodyComponent_ng_container_0_ng_container_4_td_2_Template, 2, 1, "td", 20);
    i0.ɵɵelementContainerEnd();
} }
function TableBodyComponent_ng_container_0_ng_container_5_th_1_scrm_sort_button_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-sort-button", 31);
} if (rf & 2) {
    const column_r6 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("state", ctx_r2.getFieldSort(column_r6));
} }
function TableBodyComponent_ng_container_0_ng_container_5_th_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 28);
    i0.ɵɵelement(1, "scrm-label", 29);
    i0.ɵɵtemplate(2, TableBodyComponent_ng_container_0_ng_container_5_th_1_scrm_sort_button_2_Template, 1, 1, "scrm-sort-button", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_5_0;
    const column_r6 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(((tmp_5_0 = "primary-table-header " + "column-" + (column_r6 == null ? null : column_r6.name)) !== null && tmp_5_0 !== undefined ? tmp_5_0 : "") + " " + ((tmp_5_0 = "column-type-" + (column_r6 == null ? null : column_r6.type)) !== null && tmp_5_0 !== undefined ? tmp_5_0 : ""));
    i0.ɵɵadvance();
    i0.ɵɵproperty("labelKey", column_r6.label)("module", ctx_r2.config.module || "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.config.sort$ && column_r6.sortable);
} }
function TableBodyComponent_ng_container_0_ng_container_5_td_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 14);
    i0.ɵɵelement(1, "scrm-field", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_6_0;
    const record_r7 = ctx.$implicit;
    const column_r6 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(((tmp_6_0 = "column-" + (column_r6 == null ? null : column_r6.name)) !== null && tmp_6_0 !== undefined ? tmp_6_0 : "") + " " + ((tmp_6_0 = "column-type-" + (column_r6 == null ? null : column_r6.type)) !== null && tmp_6_0 !== undefined ? tmp_6_0 : ""));
    i0.ɵɵadvance();
    i0.ɵɵproperty("mode", "list")("type", column_r6.type)("field", ctx_r2.getField(column_r6, record_r7))("record", record_r7);
} }
function TableBodyComponent_ng_container_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 25);
    i0.ɵɵtemplate(1, TableBodyComponent_ng_container_0_ng_container_5_th_1_Template, 3, 5, "th", 26)(2, TableBodyComponent_ng_container_0_ng_container_5_td_2_Template, 2, 6, "td", 27);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const column_r6 = ctx.$implicit;
    i0.ɵɵproperty("cdkColumnDef", column_r6.name);
} }
function TableBodyComponent_ng_container_0_th_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 13);
} }
function TableBodyComponent_ng_container_0_td_8_scrm_line_action_menu_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-line-action-menu", 34);
} if (rf & 2) {
    const record_r8 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("config", ctx_r2.config.lineActions)("activeLineAction", ctx_r2.activeLineAction)("record", record_r8)("wrapperClass", "listview-actions")("klass", "icon-bar");
} }
function TableBodyComponent_ng_container_0_td_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 14);
    i0.ɵɵtemplate(1, TableBodyComponent_ng_container_0_td_8_scrm_line_action_menu_1_Template, 1, 5, "scrm-line-action-menu", 33);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const record_r8 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", record_r8 && ctx_r2.config.lineActions);
} }
function TableBodyComponent_ng_container_0_tr_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 35);
} }
function TableBodyComponent_ng_container_0_tr_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 36);
} }
function TableBodyComponent_ng_container_0_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "p", 37);
    i0.ɵɵelement(2, "scrm-label", 38);
    i0.ɵɵelementEnd()();
} }
function TableBodyComponent_ng_container_0_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "scrm-loading-spinner", 39);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const vm_r4 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵclassProp("m-5", !vm_r4.records || vm_r4.records.length === 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("overlay", true);
} }
function TableBodyComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 1)(2, "table", 2);
    i0.ɵɵtemplate(3, TableBodyComponent_ng_container_0_ng_container_3_Template, 3, 0, "ng-container", 3)(4, TableBodyComponent_ng_container_0_ng_container_4_Template, 3, 0, "ng-container", 4)(5, TableBodyComponent_ng_container_0_ng_container_5_Template, 3, 1, "ng-container", 5);
    i0.ɵɵelementContainerStart(6, 6);
    i0.ɵɵtemplate(7, TableBodyComponent_ng_container_0_th_7_Template, 1, 0, "th", 7)(8, TableBodyComponent_ng_container_0_td_8_Template, 2, 1, "td", 8);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵtemplate(9, TableBodyComponent_ng_container_0_tr_9_Template, 1, 0, "tr", 9)(10, TableBodyComponent_ng_container_0_tr_10_Template, 1, 0, "tr", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, TableBodyComponent_ng_container_0_div_11_Template, 3, 0, "div", 0)(12, TableBodyComponent_ng_container_0_div_12_Template, 2, 3, "div", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const vm_r4 = ctx.ngIf;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("dataSource", ctx_r2.config.dataSource)("trackBy", ctx_r2.trackRecord);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", vm_r4.selection);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.popoverColumns && ctx_r2.popoverColumns.length);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", vm_r4.columns);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("cdkHeaderRowDef", vm_r4.displayedColumns);
    i0.ɵɵadvance();
    i0.ɵɵproperty("cdkRowDefColumns", vm_r4.displayedColumns);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !vm_r4.loading && vm_r4.records.length === 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", vm_r4.loading);
} }
export class TableBodyComponent {
    constructor(fieldManager, loadingBufferFactory) {
        this.fieldManager = fieldManager;
        this.loadingBufferFactory = loadingBufferFactory;
        this.activeAction = new BehaviorSubject('');
        this.activeAction$ = this.activeAction.asObservable();
        this.maxColumns = 4;
        this.subs = [];
        this.currentPage = 1;
        this.pageSize = 20;
        this.loadingBuffer = this.loadingBufferFactory.create('table_loading_display_delay');
    }
    ngOnInit() {
        const selection$ = this.config.selection$ || of(null).pipe(shareReplay(1));
        let loading$ = this.initLoading();
        this.activeLineAction = {
            activeAction$: this.activeAction$,
            getActiveAction: () => {
                return this.activeAction.getValue();
            },
            setActiveAction: (key) => {
                this.activeAction.next(key);
            },
            resetActiveAction: () => {
                this.activeAction.next('');
            }
        };
        this.subs.push(this.config.pagination.pagination$.subscribe(pagination => {
            this.pageSize = pagination.pageSize;
            this.currentPage = Math.ceil(pagination.pageLast / pagination.pageSize);
        }));
        this.vm$ = this.config.columns.pipe(combineLatestWith(selection$, this.config.maxColumns$, this.config.dataSource.connect(null), loading$), map(([columns, selection, maxColumns, records, loading]) => {
            const displayedColumns = [];
            this.maxColumns = maxColumns;
            const columnsDefs = this.buildDisplayColumns(columns);
            this.popoverColumns = this.buildHiddenColumns(columns, columnsDefs);
            if (selection) {
                displayedColumns.push('checkbox');
            }
            if (this.popoverColumns && this.popoverColumns.length) {
                displayedColumns.push('show-more');
            }
            displayedColumns.push(...columnsDefs);
            displayedColumns.push('line-actions');
            const selected = selection && selection.selected || {};
            const selectionStatus = selection && selection.status || SelectionStatus.NONE;
            records.forEach((record, index) => {
                if (!record.metadata) {
                    record.metadata = {};
                }
                record.metadata.queryParams = {
                    offset: (index + 1) + ((this.currentPage - 1) * this.pageSize)
                };
            });
            return {
                columns,
                selection,
                selected,
                selectionStatus,
                displayedColumns,
                records: records || [],
                loading
            };
        }));
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    toggleSelection(id) {
        this.config.toggleRecordSelection(id);
    }
    allSelected(status) {
        return status === SelectionStatus.ALL;
    }
    buildDisplayColumns(metaFields) {
        let i = 0;
        let hasLinkField = false;
        const displayedColumns = [];
        const fields = metaFields.filter(function (field) {
            return !field.hasOwnProperty('default')
                || (field.hasOwnProperty('default') && field.default === true);
        });
        while (i < this.maxColumns && i < fields.length) {
            displayedColumns.push(fields[i].name);
            hasLinkField = hasLinkField || fields[i].link;
            i++;
        }
        if (!hasLinkField && (this.maxColumns < fields.length)) {
            for (i = this.maxColumns; i < fields.length; i++) {
                if (fields[i].link) {
                    displayedColumns.splice(-1, 1);
                    displayedColumns.push(fields[i].name);
                    break;
                }
            }
        }
        return displayedColumns;
    }
    buildHiddenColumns(metaFields, displayedColumns) {
        const fields = metaFields.filter(function (field) {
            return !field.hasOwnProperty('default')
                || (field.hasOwnProperty('default') && field.default === true);
        });
        let missingFields = [];
        for (let i = 0; i < fields.length; i++) {
            if (displayedColumns.indexOf(fields[i].name) === -1) {
                missingFields.push(fields[i].name);
            }
        }
        let hiddenColumns = fields.filter(obj => missingFields.includes(obj.name));
        return hiddenColumns;
    }
    getFieldSort(field) {
        return {
            getSortDirection: () => this.config.sort$.pipe(map((sort) => {
                let direction = SortDirection.NONE;
                if (sort.orderBy === field.name) {
                    direction = sort.sortOrder;
                }
                return direction;
            })),
            changeSortDirection: (direction) => {
                this.config.updateSorting(field.name, direction);
            }
        };
    }
    getField(column, record) {
        if (!column || !record) {
            return null;
        }
        return this.fieldManager.addField(record, column);
    }
    initLoading() {
        let loading$ = of(false).pipe(shareReplay(1));
        if (this.config.loading$) {
            this.subs.push(this.config.loading$.subscribe(loading => {
                this.loadingBuffer.updateLoading(loading);
            }));
            loading$ = this.loadingBuffer.loading$;
        }
        return loading$;
    }
    trackRecord(index, item) {
        return item?.id ?? '';
    }
    static { this.ɵfac = function TableBodyComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TableBodyComponent)(i0.ɵɵdirectiveInject(i1.FieldManager), i0.ɵɵdirectiveInject(i2.LoadingBufferFactory)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableBodyComponent, selectors: [["scrm-table-body"]], inputs: { config: "config" }, decls: 2, vars: 3, consts: [[4, "ngIf"], [1, "position-relative", "d-flex", "flex-column", "table-body-wrapper"], ["cdk-table", "", "aria-describedby", "table-body", 1, "list-view-table", "striped-table", "table", 3, "dataSource", "trackBy"], ["cdkColumnDef", "checkbox", 4, "ngIf"], ["cdkColumnDef", "show-more", 4, "ngIf"], [3, "cdkColumnDef", 4, "ngFor", "ngForOf"], ["cdkColumnDef", "line-actions"], ["cdk-header-cell", "", "scope", "col", "class", "primary-table-header", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 4, "cdkCellDef"], ["cdk-header-row", "", 4, "cdkHeaderRowDef"], ["cdk-row", "", 4, "cdkRowDef", "cdkRowDefColumns"], [3, "m-5", 4, "ngIf"], ["cdkColumnDef", "checkbox"], ["cdk-header-cell", "", "scope", "col", 1, "primary-table-header"], ["cdk-cell", ""], [1, "checkbox-container"], ["type", "checkbox", "aria-hidden", "true", 3, "change", "checked", "disabled"], [1, "checkmark"], ["cdkColumnDef", "show-more"], ["cdk-header-cell", "", "scope", "col", "class", "primary-table-header show-more-column", 4, "cdkHeaderCellDef"], ["cdk-cell", "", "class", "show-more-column", 4, "cdkCellDef"], ["cdk-header-cell", "", "scope", "col", 1, "primary-table-header", "show-more-column"], ["cdk-cell", "", 1, "show-more-column"], [3, "record", "columns", 4, "ngIf"], [3, "record", "columns"], [3, "cdkColumnDef"], ["cdk-header-cell", "", "scope", "col", 3, "class", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 3, "class", 4, "cdkCellDef"], ["cdk-header-cell", "", "scope", "col"], [3, "labelKey", "module"], [3, "state", 4, "ngIf"], [3, "state"], [3, "mode", "type", "field", "record"], [3, "config", "activeLineAction", "record", "wrapperClass", "klass", 4, "ngIf"], [3, "config", "activeLineAction", "record", "wrapperClass", "klass"], ["cdk-header-row", ""], ["cdk-row", ""], [1, "lead", "text-center", "pt-3"], ["labelKey", "MSG_LIST_VIEW_NO_RESULTS_BASIC"], [3, "overlay"]], template: function TableBodyComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, TableBodyComponent_ng_container_0_Template, 13, 9, "ng-container", 0);
            i0.ɵɵpipe(1, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.vm$));
        } }, dependencies: [i3.NgForOf, i3.NgIf, i4.CdkTable, i4.CdkRowDef, i4.CdkCellDef, i4.CdkHeaderCellDef, i4.CdkColumnDef, i4.CdkCell, i4.CdkRow, i4.CdkHeaderCell, i4.CdkHeaderRow, i4.CdkHeaderRowDef, i5.FieldComponent, i6.SortButtonComponent, i7.LineActionMenuComponent, i8.LoadingSpinnerComponent, i9.LabelComponent, i10.RecordDetailsPopupButtonComponent, i3.AsyncPipe], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableBodyComponent, [{
        type: Component,
        args: [{ selector: 'scrm-table-body', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n\n<ng-container *ngIf=\"(vm$ | async) as vm\">\n    <div class=\"position-relative d-flex flex-column table-body-wrapper\">\n        <table cdk-table [dataSource]=\"config.dataSource\" [trackBy]=\"trackRecord\"\n               aria-describedby=\"table-body\"\n               class=\"list-view-table striped-table table\">\n\n            <ng-container cdkColumnDef=\"checkbox\" *ngIf=\"vm.selection\">\n\n                <th cdk-header-cell scope=\"col\" *cdkHeaderCellDef class=\"primary-table-header\"></th>\n\n                <td cdk-cell *cdkCellDef=\"let record\">\n                    <label class=\"checkbox-container\">\n                        <input type=\"checkbox\"\n                               [checked]=\"(record['id'] && vm.selected[record['id']]) || allSelected(vm.selectionStatus) \"\n                               (change)=\"toggleSelection(record['id'])\"\n                               [disabled]=\"allSelected(vm.selectionStatus)\"\n                               aria-hidden=\"true\">\n                        <span class=\"checkmark\"></span>\n                    </label>\n                </td>\n\n            </ng-container>\n\n            <ng-container cdkColumnDef=\"show-more\" *ngIf=\"popoverColumns && popoverColumns.length\">\n\n                <th cdk-header-cell scope=\"col\" *cdkHeaderCellDef class=\"primary-table-header show-more-column\"></th>\n\n                <td cdk-cell *cdkCellDef=\"let record\" class=\"show-more-column\">\n                    <scrm-record-details-popup-button [record]=\"record\" [columns]=\"popoverColumns\"\n                                                      *ngIf=\"popoverColumns.length\"></scrm-record-details-popup-button>\n                </td>\n\n            </ng-container>\n\n            <ng-container *ngFor=\"let column of vm.columns\" [cdkColumnDef]=\"column.name\">\n\n                <th cdk-header-cell\n                    *cdkHeaderCellDef\n                    scope=\"col\"\n                    [class]=\"('primary-table-header ' + 'column-' + column?.name ?? '') + ' ' + ('column-type-' + column?.type ?? '')\">\n\n                    <scrm-label [labelKey]=\"column.label\" [module]=\"config.module || ''\"></scrm-label>\n                    <scrm-sort-button *ngIf=\"config.sort$ && column.sortable\"\n                                      [state]=\"getFieldSort(column)\">\n                    </scrm-sort-button>\n\n                </th>\n\n                <td cdk-cell *cdkCellDef=\"let record\" [class]=\"('column-' + column?.name ?? '') + ' ' + ('column-type-' + column?.type ?? '')\">\n                    <scrm-field [mode]=\"'list'\"\n                                [type]=\"column.type\"\n                                [field]=\"getField(column, record)\"\n                                [record]=\"record\">\n                    </scrm-field>\n                </td>\n\n            </ng-container>\n\n            <ng-container cdkColumnDef=\"line-actions\">\n\n                <th cdk-header-cell scope=\"col\" *cdkHeaderCellDef class=\"primary-table-header\"></th>\n\n                <td cdk-cell *cdkCellDef=\"let record\">\n                    <scrm-line-action-menu *ngIf=\"record && config.lineActions\"\n                                           [config]=\"config.lineActions\"\n                                           [activeLineAction]=\"activeLineAction\"\n                                           [record]=\"record\"\n                                           [wrapperClass]=\"'listview-actions'\"\n                                           [klass]=\"'icon-bar'\">\n                    </scrm-line-action-menu>\n                </td>\n\n            </ng-container>\n\n            <tr cdk-header-row *cdkHeaderRowDef=\"vm.displayedColumns\"></tr>\n            <tr cdk-row *cdkRowDef=\"let row; columns: vm.displayedColumns;\"></tr>\n\n        </table>\n\n        <div *ngIf=\"!vm.loading && vm.records.length === 0\">\n            <p class=\"lead text-center pt-3\">\n                <scrm-label labelKey=\"MSG_LIST_VIEW_NO_RESULTS_BASIC\"></scrm-label>\n            </p>\n        </div>\n        <div *ngIf=\"vm.loading\" [class.m-5]=\"!vm.records || vm.records.length === 0\">\n            <scrm-loading-spinner [overlay]=\"true\"></scrm-loading-spinner>\n        </div>\n    </div>\n</ng-container>\n" }]
    }], () => [{ type: i1.FieldManager }, { type: i2.LoadingBufferFactory }], { config: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TableBodyComponent, { className: "TableBodyComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtYm9keS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy90YWJsZS90YWJsZS1ib2R5L3RhYmxlLWJvZHkuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvdGFibGUvdGFibGUtYm9keS90YWJsZS1ib2R5LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDbEUsT0FBTyxFQUFDLGVBQWUsRUFBRSxpQkFBaUIsRUFBYyxFQUFFLEVBQWUsTUFBTSxNQUFNLENBQUM7QUFDdEYsT0FBTyxFQUFDLEdBQUcsRUFBRSxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUloRCxPQUFPLEVBQWtCLGVBQWUsRUFBQyxNQUFNLG1EQUFtRCxDQUFDO0FBQ25HLE9BQU8sRUFBQyxhQUFhLEVBQW1CLE1BQU0sa0RBQWtELENBQUM7QUFDakcsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDhDQUE4QyxDQUFDO0FBRzFFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDREQUE0RCxDQUFDOzs7Ozs7Ozs7Ozs7O0lDRGhGLHlCQUFvRjs7OztJQUk1RSxBQURKLEFBREosOEJBQXNDLGdCQUNBLGdCQUtKO0lBRm5CLHlPQUFVLGlDQUF1QixJQUFJLEVBQUUsS0FBQztJQUYvQyxpQkFJMEI7SUFDMUIsMkJBQStCO0lBRXZDLEFBREksaUJBQVEsRUFDUDs7Ozs7SUFOVSxlQUEyRjtJQUUzRixBQUZBLHlIQUEyRix1REFFL0M7OztJQVQvRCxpQ0FBMkQ7SUFJdkQsQUFGQSwrRkFBK0Usa0ZBRXpDOzs7O0lBZXRDLHlCQUFxRzs7O0lBR2pHLHVEQUNtRzs7OztJQUQvQyxBQUFsQixrQ0FBaUIsa0NBQTJCOzs7SUFEbEYsOEJBQStEO0lBQzNELGlLQUNnRTtJQUNwRSxpQkFBSzs7O0lBRGtDLGNBQTJCO0lBQTNCLG1EQUEyQjs7O0lBTnRFLGlDQUF1RjtJQUluRixBQUZBLGdHQUFnRyxtRkFFakM7Ozs7SUFlM0QsdUNBRW1COzs7O0lBREQsc0RBQThCOzs7SUFQcEQsOEJBR3VIO0lBRW5ILGlDQUFrRjtJQUNsRixpSUFDaUQ7SUFHckQsaUJBQUs7Ozs7O0lBUEQsbVNBQWtIO0lBRXRHLGNBQXlCO0lBQUMsQUFBMUIsMENBQXlCLHNDQUErQjtJQUNqRCxjQUFxQztJQUFyQyxnRUFBcUM7OztJQU01RCw4QkFBK0g7SUFDM0gsaUNBSWE7SUFDakIsaUJBQUs7Ozs7OztJQU5pQyx5UUFBd0Y7SUFDOUcsY0FBZTtJQUdmLEFBREEsQUFEQSxBQURBLDZCQUFlLHdCQUNLLGdEQUNjLHFCQUNqQjs7O0lBbEJyQyxpQ0FBNkU7SUFjekUsQUFaQSxnR0FHdUgsbUZBU1E7Ozs7SUFkbkYsNkNBQTRCOzs7SUEwQnhFLHlCQUFvRjs7O0lBR2hGLDRDQU13Qjs7OztJQURELEFBREEsQUFEQSxBQURBLEFBREEsa0RBQTZCLDZDQUNRLHFCQUNwQixvQ0FDa0IscUJBQ2Y7OztJQU4vQyw4QkFBc0M7SUFDbEMsNEhBSzRDO0lBRWhELGlCQUFLOzs7O0lBUHVCLGNBQWtDO0lBQWxDLDZEQUFrQzs7O0lBV2xFLHlCQUErRDs7O0lBQy9ELHlCQUFxRTs7O0lBS3JFLEFBREosMkJBQW9ELFlBQ2Y7SUFDN0IsaUNBQW1FO0lBRTNFLEFBREksaUJBQUksRUFDRjs7O0lBQ04sMkJBQTZFO0lBQ3pFLDJDQUE4RDtJQUNsRSxpQkFBTTs7O0lBRmtCLG1FQUFvRDtJQUNsRCxjQUFnQjtJQUFoQiw4QkFBZ0I7OztJQXJGbEQsNkJBQTBDO0lBRWxDLEFBREosOEJBQXFFLGVBR2Q7SUE4Qi9DLEFBWEEsQUFqQkEsb0dBQTJELHVGQWlCNEIsdUZBV1Y7SUF3QjdFLGdDQUEwQztJQUl0QyxBQUZBLGdGQUErRSxtRUFFekM7O0lBYTFDLEFBREEsZ0ZBQTBELHNFQUNNO0lBRXBFLGlCQUFRO0lBT1IsQUFMQSxvRkFBb0Qsd0VBS3lCO0lBR2pGLGlCQUFNOzs7OztJQXJGZSxlQUFnQztJQUFDLEFBQWpDLHFEQUFnQywrQkFBd0I7SUFJOUIsY0FBa0I7SUFBbEIsc0NBQWtCO0lBaUJqQixjQUE2QztJQUE3Qyw0RUFBNkM7SUFXcEQsY0FBYTtJQUFiLHVDQUFhO0lBd0MxQixlQUFvQztJQUFwQyx3REFBb0M7SUFDdkIsY0FBNkI7SUFBN0IseURBQTZCO0lBSTVELGNBQTRDO0lBQTVDLG1FQUE0QztJQUs1QyxjQUFnQjtJQUFoQixvQ0FBZ0I7O0FEekQ5QixNQUFNLE9BQU8sa0JBQWtCO0lBaUIzQixZQUNjLFlBQTBCLEVBQzFCLG9CQUEwQztRQUQxQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBaEJoRCxpQkFBWSxHQUE0QixJQUFJLGVBQWUsQ0FBUyxFQUFFLENBQUMsQ0FBQztRQUN0RSxrQkFBYSxHQUF1QixJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBSS9FLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFJTCxTQUFJLEdBQW1CLEVBQUUsQ0FBQztRQUVwQyxnQkFBVyxHQUFXLENBQUMsQ0FBQztRQUN4QixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBTWxCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFFRCxRQUFRO1FBQ0osTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFbEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHO1lBQ3BCLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxlQUFlLEVBQUUsR0FBVyxFQUFFO2dCQUMxQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDeEMsQ0FBQztZQUNELGVBQWUsRUFBRSxDQUFDLEdBQVcsRUFBUSxFQUFFO2dCQUNuQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNoQyxDQUFDO1lBQ0QsaUJBQWlCLEVBQUUsR0FBUyxFQUFFO2dCQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMvQixDQUFDO1NBQ2dCLENBQUM7UUFFdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUNyRSxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUM7WUFDcEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFHSixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDL0IsaUJBQWlCLENBQ2IsVUFBVSxFQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQ3BDLFFBQVEsQ0FDWCxFQUNELEdBQUcsQ0FBQyxDQUNBLENBQ0ksT0FBTyxFQUNQLFNBQVMsRUFDVCxVQUFVLEVBQ1YsT0FBTyxFQUNQLE9BQU8sQ0FDVixFQUNILEVBQUU7WUFDQSxNQUFNLGdCQUFnQixHQUFhLEVBQUUsQ0FBQztZQUV0QyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztZQUU3QixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBRXBFLElBQUksU0FBUyxFQUFFLENBQUM7Z0JBQ1osZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3RDLENBQUM7WUFFRCxJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDcEQsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3ZDLENBQUM7WUFFRCxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQztZQUV0QyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFFdEMsTUFBTSxRQUFRLEdBQUcsU0FBUyxJQUFJLFNBQVMsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDO1lBQ3ZELE1BQU0sZUFBZSxHQUFHLFNBQVMsSUFBSSxTQUFTLENBQUMsTUFBTSxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUM7WUFFOUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDbkIsTUFBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7Z0JBQ3pCLENBQUM7Z0JBRUQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEdBQUc7b0JBQzFCLE1BQU0sRUFBRSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO2lCQUNqRSxDQUFDO1lBQ04sQ0FBQyxDQUFDLENBQUM7WUFFSCxPQUFPO2dCQUNILE9BQU87Z0JBQ1AsU0FBUztnQkFDVCxRQUFRO2dCQUNSLGVBQWU7Z0JBQ2YsZ0JBQWdCO2dCQUNoQixPQUFPLEVBQUUsT0FBTyxJQUFJLEVBQUU7Z0JBQ3RCLE9BQU87YUFDVixDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQ0wsQ0FBQztJQUNOLENBQUM7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsZUFBZSxDQUFDLEVBQVU7UUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsV0FBVyxDQUFDLE1BQXVCO1FBQy9CLE9BQU8sTUFBTSxLQUFLLGVBQWUsQ0FBQyxHQUFHLENBQUM7SUFDMUMsQ0FBQztJQUVELG1CQUFtQixDQUFDLFVBQThCO1FBQzlDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNWLElBQUksWUFBWSxHQUFHLEtBQUssQ0FBQztRQUN6QixNQUFNLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUU1QixNQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQVUsS0FBSztZQUM1QyxPQUFPLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUM7bUJBQ2hDLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxDQUFDO1FBQ3ZFLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzlDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEMsWUFBWSxHQUFHLFlBQVksSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzlDLENBQUMsRUFBRSxDQUFDO1FBQ1IsQ0FBQztRQUNELElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1lBQ3JELEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDL0MsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ2pCLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDL0IsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDdEMsTUFBTTtnQkFDVixDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUM7UUFFRCxPQUFPLGdCQUFnQixDQUFDO0lBQzVCLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxVQUE4QixFQUFFLGdCQUEwQjtRQUN6RSxNQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQVUsS0FBSztZQUM1QyxPQUFPLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUM7bUJBQ2hDLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxDQUFDO1FBQ3ZFLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBRXZCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDckMsSUFBSSxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQ2xELGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLENBQUM7UUFDTCxDQUFDO1FBRUQsSUFBSSxhQUFhLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFM0UsT0FBTyxhQUFhLENBQUM7SUFDekIsQ0FBQztJQUVELFlBQVksQ0FBQyxLQUF1QjtRQUNoQyxPQUFPO1lBQ0gsZ0JBQWdCLEVBQUUsR0FBOEIsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDckUsR0FBRyxDQUFDLENBQUMsSUFBc0IsRUFBRSxFQUFFO2dCQUMzQixJQUFJLFNBQVMsR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDO2dCQUVuQyxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUM5QixTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDL0IsQ0FBQztnQkFFRCxPQUFPLFNBQVMsQ0FBQztZQUNyQixDQUFDLENBQUMsQ0FDTDtZQUNELG1CQUFtQixFQUFFLENBQUMsU0FBd0IsRUFBUSxFQUFFO2dCQUNwRCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ3JELENBQUM7U0FDdUIsQ0FBQztJQUNqQyxDQUFDO0lBRUQsUUFBUSxDQUFDLE1BQXdCLEVBQUUsTUFBYztRQUU3QyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDckIsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFUyxXQUFXO1FBQ2pCLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFOUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDcEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDOUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVKLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztRQUMzQyxDQUFDO1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFhLEVBQUUsSUFBWTtRQUNuQyxPQUFPLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQzFCLENBQUM7bUhBbE5RLGtCQUFrQjtvRUFBbEIsa0JBQWtCO1lDM0IvQixzRkFBMEM7OztZQUEzQixvREFBb0I7OztpRkQyQnRCLGtCQUFrQjtjQUo5QixTQUFTOzJCQUNJLGlCQUFpQjtnRkFJbEIsTUFBTTtrQkFBZCxLQUFLOztrRkFERyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIGNvbWJpbmVMYXRlc3RXaXRoLCBPYnNlcnZhYmxlLCBvZiwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7bWFwLCBzaGFyZVJlcGxheX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtDb2x1bW5EZWZpbml0aW9ufSBmcm9tICcuLi8uLi8uLi9jb21tb24vbWV0YWRhdGEvbGlzdC5tZXRhZGF0YS5tb2RlbCc7XG5pbXBvcnQge0ZpZWxkfSBmcm9tICcuLi8uLi8uLi9jb21tb24vcmVjb3JkL2ZpZWxkLm1vZGVsJztcbmltcG9ydCB7UmVjb3JkfSBmcm9tICcuLi8uLi8uLi9jb21tb24vcmVjb3JkL3JlY29yZC5tb2RlbCc7XG5pbXBvcnQge1JlY29yZFNlbGVjdGlvbiwgU2VsZWN0aW9uU3RhdHVzfSBmcm9tICcuLi8uLi8uLi9jb21tb24vdmlld3MvbGlzdC9yZWNvcmQtc2VsZWN0aW9uLm1vZGVsJztcbmltcG9ydCB7U29ydERpcmVjdGlvbiwgU29ydGluZ1NlbGVjdGlvbn0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3ZpZXdzL2xpc3QvbGlzdC1uYXZpZ2F0aW9uLm1vZGVsJztcbmltcG9ydCB7RmllbGRNYW5hZ2VyfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9yZWNvcmQvZmllbGQvZmllbGQubWFuYWdlcic7XG5pbXBvcnQge1RhYmxlQ29uZmlnfSBmcm9tICcuLi90YWJsZS5tb2RlbCc7XG5pbXBvcnQge1NvcnREaXJlY3Rpb25EYXRhU291cmNlfSBmcm9tICcuLi8uLi9zb3J0LWJ1dHRvbi9zb3J0LWJ1dHRvbi5tb2RlbCc7XG5pbXBvcnQge0xvYWRpbmdCdWZmZXJGYWN0b3J5fSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy91aS9sb2FkaW5nLWJ1ZmZlci9sb2FkaW5nLWJ1ZmZlci5mYWN0b3J5JztcbmltcG9ydCB7TG9hZGluZ0J1ZmZlcn0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvdWkvbG9hZGluZy1idWZmZXIvbG9hZGluZy1idWZmZXIuc2VydmljZSc7XG5pbXBvcnQge0FjdGl2ZUxpbmVBY3Rpb259IGZyb20gXCIuLi8uLi8uLi9jb21tb24vYWN0aW9ucy9hY3Rpb24ubW9kZWxcIjtcblxuaW50ZXJmYWNlIFRhYmxlVmlld01vZGVsIHtcbiAgICBjb2x1bW5zOiBDb2x1bW5EZWZpbml0aW9uW107XG4gICAgc2VsZWN0aW9uOiBSZWNvcmRTZWxlY3Rpb247XG4gICAgc2VsZWN0ZWQ6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gICAgc2VsZWN0aW9uU3RhdHVzOiBTZWxlY3Rpb25TdGF0dXM7XG4gICAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW107XG4gICAgcmVjb3JkczogUmVjb3JkW10gfCByZWFkb25seSBSZWNvcmRbXTtcbiAgICBsb2FkaW5nOiBib29sZWFuO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tdGFibGUtYm9keScsXG4gICAgdGVtcGxhdGVVcmw6ICd0YWJsZS1ib2R5LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVCb2R5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIEBJbnB1dCgpIGNvbmZpZzogVGFibGVDb25maWc7XG5cbiAgICBwcml2YXRlIGFjdGl2ZUFjdGlvbjogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4oJycpO1xuICAgIHByb3RlY3RlZCBhY3RpdmVBY3Rpb24kOiBPYnNlcnZhYmxlPHN0cmluZz4gPSB0aGlzLmFjdGl2ZUFjdGlvbi5hc09ic2VydmFibGUoKTtcblxuICAgIGFjdGl2ZUxpbmVBY3Rpb246IEFjdGl2ZUxpbmVBY3Rpb247XG5cbiAgICBtYXhDb2x1bW5zID0gNDtcbiAgICBwb3BvdmVyQ29sdW1uczogQ29sdW1uRGVmaW5pdGlvbltdO1xuICAgIHZtJDogT2JzZXJ2YWJsZTxUYWJsZVZpZXdNb2RlbD47XG4gICAgcHJvdGVjdGVkIGxvYWRpbmdCdWZmZXI6IExvYWRpbmdCdWZmZXI7XG4gICAgcHJvdGVjdGVkIHN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgICBjdXJyZW50UGFnZTogbnVtYmVyID0gMTtcbiAgICBwYWdlU2l6ZTogbnVtYmVyID0gMjA7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGZpZWxkTWFuYWdlcjogRmllbGRNYW5hZ2VyLFxuICAgICAgICBwcm90ZWN0ZWQgbG9hZGluZ0J1ZmZlckZhY3Rvcnk6IExvYWRpbmdCdWZmZXJGYWN0b3J5XG4gICAgKSB7XG4gICAgICAgIHRoaXMubG9hZGluZ0J1ZmZlciA9IHRoaXMubG9hZGluZ0J1ZmZlckZhY3RvcnkuY3JlYXRlKCd0YWJsZV9sb2FkaW5nX2Rpc3BsYXlfZGVsYXknKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uJCA9IHRoaXMuY29uZmlnLnNlbGVjdGlvbiQgfHwgb2YobnVsbCkucGlwZShzaGFyZVJlcGxheSgxKSk7XG4gICAgICAgIGxldCBsb2FkaW5nJCA9IHRoaXMuaW5pdExvYWRpbmcoKTtcblxuICAgICAgICB0aGlzLmFjdGl2ZUxpbmVBY3Rpb24gPSB7XG4gICAgICAgICAgICBhY3RpdmVBY3Rpb24kOiB0aGlzLmFjdGl2ZUFjdGlvbiQsXG4gICAgICAgICAgICBnZXRBY3RpdmVBY3Rpb246ICgpOiBzdHJpbmcgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZUFjdGlvbi5nZXRWYWx1ZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldEFjdGl2ZUFjdGlvbjogKGtleTogc3RyaW5nKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVBY3Rpb24ubmV4dChrZXkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlc2V0QWN0aXZlQWN0aW9uOiAoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVBY3Rpb24ubmV4dCgnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gYXMgQWN0aXZlTGluZUFjdGlvbjtcblxuICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLmNvbmZpZy5wYWdpbmF0aW9uLnBhZ2luYXRpb24kLnN1YnNjcmliZShwYWdpbmF0aW9uID0+IHtcbiAgICAgICAgICAgIHRoaXMucGFnZVNpemUgPSBwYWdpbmF0aW9uLnBhZ2VTaXplO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IE1hdGguY2VpbChwYWdpbmF0aW9uLnBhZ2VMYXN0IC8gcGFnaW5hdGlvbi5wYWdlU2l6ZSk7XG4gICAgICAgIH0pKTtcblxuXG4gICAgICAgIHRoaXMudm0kID0gdGhpcy5jb25maWcuY29sdW1ucy5waXBlKFxuICAgICAgICAgICAgY29tYmluZUxhdGVzdFdpdGgoXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uJCxcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5tYXhDb2x1bW5zJCxcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5kYXRhU291cmNlLmNvbm5lY3QobnVsbCksXG4gICAgICAgICAgICAgICAgbG9hZGluZyRcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBtYXAoKFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1ucyxcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICBtYXhDb2x1bW5zLFxuICAgICAgICAgICAgICAgICAgICByZWNvcmRzLFxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbXTtcblxuICAgICAgICAgICAgICAgIHRoaXMubWF4Q29sdW1ucyA9IG1heENvbHVtbnM7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjb2x1bW5zRGVmcyA9IHRoaXMuYnVpbGREaXNwbGF5Q29sdW1ucyhjb2x1bW5zKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcG92ZXJDb2x1bW5zID0gdGhpcy5idWlsZEhpZGRlbkNvbHVtbnMoY29sdW1ucywgY29sdW1uc0RlZnMpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5ZWRDb2x1bW5zLnB1c2goJ2NoZWNrYm94Jyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucG9wb3ZlckNvbHVtbnMgJiYgdGhpcy5wb3BvdmVyQ29sdW1ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheWVkQ29sdW1ucy5wdXNoKCdzaG93LW1vcmUnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBkaXNwbGF5ZWRDb2x1bW5zLnB1c2goLi4uY29sdW1uc0RlZnMpO1xuXG4gICAgICAgICAgICAgICAgZGlzcGxheWVkQ29sdW1ucy5wdXNoKCdsaW5lLWFjdGlvbnMnKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gc2VsZWN0aW9uICYmIHNlbGVjdGlvbi5zZWxlY3RlZCB8fCB7fTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb25TdGF0dXMgPSBzZWxlY3Rpb24gJiYgc2VsZWN0aW9uLnN0YXR1cyB8fCBTZWxlY3Rpb25TdGF0dXMuTk9ORTtcblxuICAgICAgICAgICAgICAgIHJlY29yZHMuZm9yRWFjaCgocmVjb3JkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlY29yZC5tZXRhZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVjb3JkLm1ldGFkYXRhID0ge307XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZWNvcmQubWV0YWRhdGEucXVlcnlQYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IChpbmRleCArIDEpICsgKCh0aGlzLmN1cnJlbnRQYWdlIC0gMSkgKiB0aGlzLnBhZ2VTaXplKVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1ucyxcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uU3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5ZWRDb2x1bW5zLFxuICAgICAgICAgICAgICAgICAgICByZWNvcmRzOiByZWNvcmRzIHx8IFtdLFxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc3Vicy5mb3JFYWNoKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XG4gICAgfVxuXG4gICAgdG9nZ2xlU2VsZWN0aW9uKGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb25maWcudG9nZ2xlUmVjb3JkU2VsZWN0aW9uKGlkKTtcbiAgICB9XG5cbiAgICBhbGxTZWxlY3RlZChzdGF0dXM6IFNlbGVjdGlvblN0YXR1cyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gc3RhdHVzID09PSBTZWxlY3Rpb25TdGF0dXMuQUxMO1xuICAgIH1cblxuICAgIGJ1aWxkRGlzcGxheUNvbHVtbnMobWV0YUZpZWxkczogQ29sdW1uRGVmaW5pdGlvbltdKTogc3RyaW5nW10ge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGxldCBoYXNMaW5rRmllbGQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgZGlzcGxheWVkQ29sdW1ucyA9IFtdO1xuXG4gICAgICAgIGNvbnN0IGZpZWxkcyA9IG1ldGFGaWVsZHMuZmlsdGVyKGZ1bmN0aW9uIChmaWVsZCkge1xuICAgICAgICAgICAgcmV0dXJuICFmaWVsZC5oYXNPd25Qcm9wZXJ0eSgnZGVmYXVsdCcpXG4gICAgICAgICAgICAgICAgfHwgKGZpZWxkLmhhc093blByb3BlcnR5KCdkZWZhdWx0JykgJiYgZmllbGQuZGVmYXVsdCA9PT0gdHJ1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdoaWxlIChpIDwgdGhpcy5tYXhDb2x1bW5zICYmIGkgPCBmaWVsZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBkaXNwbGF5ZWRDb2x1bW5zLnB1c2goZmllbGRzW2ldLm5hbWUpO1xuICAgICAgICAgICAgaGFzTGlua0ZpZWxkID0gaGFzTGlua0ZpZWxkIHx8IGZpZWxkc1tpXS5saW5rO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaGFzTGlua0ZpZWxkICYmICh0aGlzLm1heENvbHVtbnMgPCBmaWVsZHMubGVuZ3RoKSkge1xuICAgICAgICAgICAgZm9yIChpID0gdGhpcy5tYXhDb2x1bW5zOyBpIDwgZmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkc1tpXS5saW5rKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXllZENvbHVtbnMuc3BsaWNlKC0xLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheWVkQ29sdW1ucy5wdXNoKGZpZWxkc1tpXS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRpc3BsYXllZENvbHVtbnM7XG4gICAgfVxuXG4gICAgYnVpbGRIaWRkZW5Db2x1bW5zKG1ldGFGaWVsZHM6IENvbHVtbkRlZmluaXRpb25bXSwgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10pOiBDb2x1bW5EZWZpbml0aW9uW10ge1xuICAgICAgICBjb25zdCBmaWVsZHMgPSBtZXRhRmllbGRzLmZpbHRlcihmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgICAgICAgIHJldHVybiAhZmllbGQuaGFzT3duUHJvcGVydHkoJ2RlZmF1bHQnKVxuICAgICAgICAgICAgICAgIHx8IChmaWVsZC5oYXNPd25Qcm9wZXJ0eSgnZGVmYXVsdCcpICYmIGZpZWxkLmRlZmF1bHQgPT09IHRydWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgbWlzc2luZ0ZpZWxkcyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZGlzcGxheWVkQ29sdW1ucy5pbmRleE9mKGZpZWxkc1tpXS5uYW1lKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBtaXNzaW5nRmllbGRzLnB1c2goZmllbGRzW2ldLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGhpZGRlbkNvbHVtbnMgPSBmaWVsZHMuZmlsdGVyKG9iaiA9PiBtaXNzaW5nRmllbGRzLmluY2x1ZGVzKG9iai5uYW1lKSk7XG5cbiAgICAgICAgcmV0dXJuIGhpZGRlbkNvbHVtbnM7XG4gICAgfVxuXG4gICAgZ2V0RmllbGRTb3J0KGZpZWxkOiBDb2x1bW5EZWZpbml0aW9uKTogU29ydERpcmVjdGlvbkRhdGFTb3VyY2Uge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZ2V0U29ydERpcmVjdGlvbjogKCk6IE9ic2VydmFibGU8U29ydERpcmVjdGlvbj4gPT4gdGhpcy5jb25maWcuc29ydCQucGlwZShcbiAgICAgICAgICAgICAgICBtYXAoKHNvcnQ6IFNvcnRpbmdTZWxlY3Rpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpcmVjdGlvbiA9IFNvcnREaXJlY3Rpb24uTk9ORTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoc29ydC5vcmRlckJ5ID09PSBmaWVsZC5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSBzb3J0LnNvcnRPcmRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb247XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBjaGFuZ2VTb3J0RGlyZWN0aW9uOiAoZGlyZWN0aW9uOiBTb3J0RGlyZWN0aW9uKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcudXBkYXRlU29ydGluZyhmaWVsZC5uYW1lLCBkaXJlY3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGFzIFNvcnREaXJlY3Rpb25EYXRhU291cmNlO1xuICAgIH1cblxuICAgIGdldEZpZWxkKGNvbHVtbjogQ29sdW1uRGVmaW5pdGlvbiwgcmVjb3JkOiBSZWNvcmQpOiBGaWVsZCB7XG5cbiAgICAgICAgaWYgKCFjb2x1bW4gfHwgIXJlY29yZCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5maWVsZE1hbmFnZXIuYWRkRmllbGQocmVjb3JkLCBjb2x1bW4pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBpbml0TG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICAgICAgbGV0IGxvYWRpbmckID0gb2YoZmFsc2UpLnBpcGUoc2hhcmVSZXBsYXkoMSkpO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5sb2FkaW5nJCkge1xuICAgICAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5jb25maWcubG9hZGluZyQuc3Vic2NyaWJlKGxvYWRpbmcgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ0J1ZmZlci51cGRhdGVMb2FkaW5nKGxvYWRpbmcpO1xuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICBsb2FkaW5nJCA9IHRoaXMubG9hZGluZ0J1ZmZlci5sb2FkaW5nJDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbG9hZGluZyQ7XG4gICAgfVxuXG4gICAgdHJhY2tSZWNvcmQoaW5kZXg6IG51bWJlciwgaXRlbTogUmVjb3JkKTogYW55IHtcbiAgICAgICAgcmV0dXJuIGl0ZW0/LmlkID8/ICcnO1xuICAgIH1cbn1cblxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuXG48bmctY29udGFpbmVyICpuZ0lmPVwiKHZtJCB8IGFzeW5jKSBhcyB2bVwiPlxuICAgIDxkaXYgY2xhc3M9XCJwb3NpdGlvbi1yZWxhdGl2ZSBkLWZsZXggZmxleC1jb2x1bW4gdGFibGUtYm9keS13cmFwcGVyXCI+XG4gICAgICAgIDx0YWJsZSBjZGstdGFibGUgW2RhdGFTb3VyY2VdPVwiY29uZmlnLmRhdGFTb3VyY2VcIiBbdHJhY2tCeV09XCJ0cmFja1JlY29yZFwiXG4gICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwidGFibGUtYm9keVwiXG4gICAgICAgICAgICAgICBjbGFzcz1cImxpc3Qtdmlldy10YWJsZSBzdHJpcGVkLXRhYmxlIHRhYmxlXCI+XG5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgY2RrQ29sdW1uRGVmPVwiY2hlY2tib3hcIiAqbmdJZj1cInZtLnNlbGVjdGlvblwiPlxuXG4gICAgICAgICAgICAgICAgPHRoIGNkay1oZWFkZXItY2VsbCBzY29wZT1cImNvbFwiICpjZGtIZWFkZXJDZWxsRGVmIGNsYXNzPVwicHJpbWFyeS10YWJsZS1oZWFkZXJcIj48L3RoPlxuXG4gICAgICAgICAgICAgICAgPHRkIGNkay1jZWxsICpjZGtDZWxsRGVmPVwibGV0IHJlY29yZFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjaGVja2JveC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjaGVja2VkXT1cIihyZWNvcmRbJ2lkJ10gJiYgdm0uc2VsZWN0ZWRbcmVjb3JkWydpZCddXSkgfHwgYWxsU2VsZWN0ZWQodm0uc2VsZWN0aW9uU3RhdHVzKSBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwidG9nZ2xlU2VsZWN0aW9uKHJlY29yZFsnaWQnXSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJhbGxTZWxlY3RlZCh2bS5zZWxlY3Rpb25TdGF0dXMpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2hlY2ttYXJrXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICA8bmctY29udGFpbmVyIGNka0NvbHVtbkRlZj1cInNob3ctbW9yZVwiICpuZ0lmPVwicG9wb3ZlckNvbHVtbnMgJiYgcG9wb3ZlckNvbHVtbnMubGVuZ3RoXCI+XG5cbiAgICAgICAgICAgICAgICA8dGggY2RrLWhlYWRlci1jZWxsIHNjb3BlPVwiY29sXCIgKmNka0hlYWRlckNlbGxEZWYgY2xhc3M9XCJwcmltYXJ5LXRhYmxlLWhlYWRlciBzaG93LW1vcmUtY29sdW1uXCI+PC90aD5cblxuICAgICAgICAgICAgICAgIDx0ZCBjZGstY2VsbCAqY2RrQ2VsbERlZj1cImxldCByZWNvcmRcIiBjbGFzcz1cInNob3ctbW9yZS1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNjcm0tcmVjb3JkLWRldGFpbHMtcG9wdXAtYnV0dG9uIFtyZWNvcmRdPVwicmVjb3JkXCIgW2NvbHVtbnNdPVwicG9wb3ZlckNvbHVtbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJwb3BvdmVyQ29sdW1ucy5sZW5ndGhcIj48L3Njcm0tcmVjb3JkLWRldGFpbHMtcG9wdXAtYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBjb2x1bW4gb2Ygdm0uY29sdW1uc1wiIFtjZGtDb2x1bW5EZWZdPVwiY29sdW1uLm5hbWVcIj5cblxuICAgICAgICAgICAgICAgIDx0aCBjZGstaGVhZGVyLWNlbGxcbiAgICAgICAgICAgICAgICAgICAgKmNka0hlYWRlckNlbGxEZWZcbiAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxuICAgICAgICAgICAgICAgICAgICBbY2xhc3NdPVwiKCdwcmltYXJ5LXRhYmxlLWhlYWRlciAnICsgJ2NvbHVtbi0nICsgY29sdW1uPy5uYW1lID8/ICcnKSArICcgJyArICgnY29sdW1uLXR5cGUtJyArIGNvbHVtbj8udHlwZSA/PyAnJylcIj5cblxuICAgICAgICAgICAgICAgICAgICA8c2NybS1sYWJlbCBbbGFiZWxLZXldPVwiY29sdW1uLmxhYmVsXCIgW21vZHVsZV09XCJjb25maWcubW9kdWxlIHx8ICcnXCI+PC9zY3JtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8c2NybS1zb3J0LWJ1dHRvbiAqbmdJZj1cImNvbmZpZy5zb3J0JCAmJiBjb2x1bW4uc29ydGFibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc3RhdGVdPVwiZ2V0RmllbGRTb3J0KGNvbHVtbilcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9zY3JtLXNvcnQtYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPC90aD5cblxuICAgICAgICAgICAgICAgIDx0ZCBjZGstY2VsbCAqY2RrQ2VsbERlZj1cImxldCByZWNvcmRcIiBbY2xhc3NdPVwiKCdjb2x1bW4tJyArIGNvbHVtbj8ubmFtZSA/PyAnJykgKyAnICcgKyAoJ2NvbHVtbi10eXBlLScgKyBjb2x1bW4/LnR5cGUgPz8gJycpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzY3JtLWZpZWxkIFttb2RlXT1cIidsaXN0J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0eXBlXT1cImNvbHVtbi50eXBlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ZpZWxkXT1cImdldEZpZWxkKGNvbHVtbiwgcmVjb3JkKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyZWNvcmRdPVwicmVjb3JkXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvc2NybS1maWVsZD5cbiAgICAgICAgICAgICAgICA8L3RkPlxuXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBjZGtDb2x1bW5EZWY9XCJsaW5lLWFjdGlvbnNcIj5cblxuICAgICAgICAgICAgICAgIDx0aCBjZGstaGVhZGVyLWNlbGwgc2NvcGU9XCJjb2xcIiAqY2RrSGVhZGVyQ2VsbERlZiBjbGFzcz1cInByaW1hcnktdGFibGUtaGVhZGVyXCI+PC90aD5cblxuICAgICAgICAgICAgICAgIDx0ZCBjZGstY2VsbCAqY2RrQ2VsbERlZj1cImxldCByZWNvcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNjcm0tbGluZS1hY3Rpb24tbWVudSAqbmdJZj1cInJlY29yZCAmJiBjb25maWcubGluZUFjdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb25maWddPVwiY29uZmlnLmxpbmVBY3Rpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYWN0aXZlTGluZUFjdGlvbl09XCJhY3RpdmVMaW5lQWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcmVjb3JkXT1cInJlY29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3dyYXBwZXJDbGFzc109XCInbGlzdHZpZXctYWN0aW9ucydcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtrbGFzc109XCInaWNvbi1iYXInXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvc2NybS1saW5lLWFjdGlvbi1tZW51PlxuICAgICAgICAgICAgICAgIDwvdGQ+XG5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICA8dHIgY2RrLWhlYWRlci1yb3cgKmNka0hlYWRlclJvd0RlZj1cInZtLmRpc3BsYXllZENvbHVtbnNcIj48L3RyPlxuICAgICAgICAgICAgPHRyIGNkay1yb3cgKmNka1Jvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IHZtLmRpc3BsYXllZENvbHVtbnM7XCI+PC90cj5cblxuICAgICAgICA8L3RhYmxlPlxuXG4gICAgICAgIDxkaXYgKm5nSWY9XCIhdm0ubG9hZGluZyAmJiB2bS5yZWNvcmRzLmxlbmd0aCA9PT0gMFwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJsZWFkIHRleHQtY2VudGVyIHB0LTNcIj5cbiAgICAgICAgICAgICAgICA8c2NybS1sYWJlbCBsYWJlbEtleT1cIk1TR19MSVNUX1ZJRVdfTk9fUkVTVUxUU19CQVNJQ1wiPjwvc2NybS1sYWJlbD5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgKm5nSWY9XCJ2bS5sb2FkaW5nXCIgW2NsYXNzLm0tNV09XCIhdm0ucmVjb3JkcyB8fCB2bS5yZWNvcmRzLmxlbmd0aCA9PT0gMFwiPlxuICAgICAgICAgICAgPHNjcm0tbG9hZGluZy1zcGlubmVyIFtvdmVybGF5XT1cInRydWVcIj48L3Njcm0tbG9hZGluZy1zcGlubmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvbmctY29udGFpbmVyPlxuIl19