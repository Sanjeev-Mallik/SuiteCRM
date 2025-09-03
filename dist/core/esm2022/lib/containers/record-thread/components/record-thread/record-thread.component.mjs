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
import { combineLatestWith } from 'rxjs';
import { RecordThreadStoreFactory } from '../../store/record-thread/record-thread.store.factory';
import { map, take, tap } from 'rxjs/operators';
import { isVoid } from '../../../../common/utils/value-utils';
import { RecordThreadItemStoreFactory } from '../../store/record-thread/record-thread-item.store.factory';
import { RecordManager } from '../../../../services/record/record.manager';
import { MessageService } from '../../../../services/message/message.service';
import { RecordThreadListActionsAdapterFactory } from "../../adapters/record-thread-list-actions.adapter.factory";
import * as i0 from "@angular/core";
import * as i1 from "../../store/record-thread/record-thread.store.factory";
import * as i2 from "../../store/record-thread/record-thread-item.store.factory";
import * as i3 from "../../../../services/record/record.manager";
import * as i4 from "../../../../services/message/message.service";
import * as i5 from "../../adapters/record-thread-list-actions.adapter.factory";
import * as i6 from "@angular/common";
import * as i7 from "../../../../components/button/button.component";
import * as i8 from "../../../../components/label/label.component";
import * as i9 from "../record-thread-item/record-thread-item.component";
import * as i10 from "../../../../components/loading-spinner/loading-spinner.component";
import * as i11 from "../../../../components/action-group-menu/action-group-menu.component";
const _c0 = ["list"];
function RecordThreadComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "scrm-label", 7);
    i0.ɵɵelementEnd();
} }
function RecordThreadComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelement(1, "scrm-loading-spinner", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵproperty("overlay", true);
} }
function RecordThreadComponent_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵelement(1, "scrm-button", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("config", ctx_r0.getLoadMoreButton());
} }
function RecordThreadComponent_div_3_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", null, 1);
    i0.ɵɵelement(2, "scrm-record-thread-item", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const record_r2 = ctx.$implicit;
    const item_r3 = i0.ɵɵreference(1);
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("config", ctx_r0.buildItem(record_r2, item_r3));
} }
function RecordThreadComponent_div_3_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵelement(1, "scrm-button", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("config", ctx_r0.getLoadMoreButton());
} }
function RecordThreadComponent_div_3_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-action-group-menu", 17);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("buttonClass", (tmp_3_0 = ctx_r0.config.listActionsButtonClass) !== null && tmp_3_0 !== undefined ? tmp_3_0 : "")("buttonGroupClass", (tmp_4_0 = ctx_r0.config.listActionsButtonGroupClass) !== null && tmp_4_0 !== undefined ? tmp_4_0 : "")("config", ctx_r0.listActionAdapter);
} }
function RecordThreadComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10, 0);
    i0.ɵɵtemplate(2, RecordThreadComponent_div_3_div_2_Template, 2, 1, "div", 11)(3, RecordThreadComponent_div_3_div_3_Template, 3, 1, "div", 12);
    i0.ɵɵelementStart(4, "div");
    i0.ɵɵtemplate(5, RecordThreadComponent_div_3_div_5_Template, 2, 1, "div", 13)(6, RecordThreadComponent_div_3_ng_container_6_Template, 2, 3, "ng-container", 5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_5_0;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngStyle", ctx_r0.getMaxHeight());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.loadMorePosition === "top" && !ctx_r0.allLoaded());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.records);
    i0.ɵɵadvance();
    i0.ɵɵclassMap((tmp_5_0 = ctx_r0.config.listActionsClass) !== null && tmp_5_0 !== undefined ? tmp_5_0 : "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.loadMorePosition === "bottom" && !ctx_r0.allLoaded());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.config.listActions);
} }
function RecordThreadComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "h6", 18);
    i0.ɵɵelement(2, "scrm-label", 19);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("labelKey", ctx_r0.config.noDataLabel || "LBL_NO_DATA");
} }
function RecordThreadComponent_ng_container_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21)(1, "div", 22);
    i0.ɵɵelement(2, "scrm-record-thread-item", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 23);
    i0.ɵɵelement(4, "scrm-button", 15);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("config", ctx_r0.buildCreateItem());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("config", ctx_r0.getCreateButton());
} }
function RecordThreadComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RecordThreadComponent_ng_container_5_div_1_Template, 5, 2, "div", 20);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.loading);
} }
export class RecordThreadComponent {
    constructor(storeFactory, itemFactory, recordManager, message, actionAdapterFactory) {
        this.storeFactory = storeFactory;
        this.itemFactory = itemFactory;
        this.recordManager = recordManager;
        this.message = message;
        this.actionAdapterFactory = actionAdapterFactory;
        this.loading = false;
        this.maxHeight = 400;
        this.direction = 'asc';
        this.loadMorePosition = 'top';
        this.shouldResetScroll = false;
        this.subs = [];
    }
    ngOnInit() {
        if (!isVoid(this.config.maxListHeight)) {
            this.maxHeight = this.config.maxListHeight;
        }
        if (!this.config.module) {
            return;
        }
        if (!this.config.store) {
            this.store = this.storeFactory.create();
            this.store.setItemMetadata(this.config.itemConfig.metadata);
            this.store.setListMetadata({ actions: this.config.listActions });
            this.store.init(this.config.module, false, this?.config?.pageSize ?? null);
        }
        else {
            this.store = this.config.store;
        }
        this.direction = this.config.direction || this.direction;
        this.setLoadMorePosition();
        this.initCreate();
        this.initDataSubscription();
        if (this.config.filters$) {
            this.subs.push(this.config.filters$.subscribe(filters => {
                this.store.setFilters(filters).pipe(take(1)).subscribe(() => {
                    if (this.config.onRefresh) {
                        this.config.onRefresh();
                    }
                });
            }));
        }
        else {
            this.store.load(false).subscribe(() => {
                if (this.config.onRefresh) {
                    this.config.onRefresh();
                }
            });
        }
        const autoRefreshFrequency = this?.config?.autoRefreshFrequency ?? 0;
        if (autoRefreshFrequency && this.store) {
            const min = this.config.autoRefreshDeviationMin ?? -15;
            const max = this.config.autoRefreshDeviationMax ?? 15;
            this.subs.push(this.store.initAutoRefresh(autoRefreshFrequency, min, max, this.config.onRefresh).subscribe());
        }
        this.initLoading();
        this.listActionAdapter = this.actionAdapterFactory.create(this.store, this.config);
    }
    setLoadMorePosition() {
        this.loadMorePosition = this.direction === 'asc' ? 'top' : 'bottom';
        if (this.config.loadMorePosition) {
            this.loadMorePosition = this.config.loadMorePosition;
        }
    }
    ngAfterViewInit() {
        this.shouldResetScroll = true;
        this.resetScroll();
    }
    ngOnDestroy() {
        if (!(this?.config?.store ?? null)) {
            this.store.clear();
        }
        this.store = null;
        this.subs.forEach(sub => sub.unsubscribe());
    }
    buildItem(item, itemRef) {
        let klass = 'record-thread-list-item';
        if (this.config.itemConfig.klass) {
            klass += ' ' + this.config.itemConfig.klass;
        }
        return {
            ...this.config.itemConfig,
            store: item,
            threadStore: this.store,
            klass: klass,
            containerClass: this.config.itemConfig.containerClass,
            flexDirection: this.config?.itemConfig?.flexDirection ?? '',
            expanded: () => {
                this.scrollToItem(itemRef);
            },
            collapsed: () => {
                this.scrollToItem(itemRef);
            }
        };
    }
    getLoadMoreButton() {
        return {
            klass: 'load-more-button btn btn-link btn-sm',
            labelKey: 'LBL_LOAD_MORE',
            onClick: () => {
                if (this?.config?.onLoadMore) {
                    this.store.getRecordList().records$.pipe(take(1), tap(() => this.config.onLoadMore())).subscribe();
                }
                this.store.loadMore();
            }
        };
    }
    buildCreateItem() {
        return {
            ...this?.config?.createConfig ?? {},
            store: this.createStore,
            rowClass: { 'pt-1': true },
            klass: 'record-thread-create-item',
        };
    }
    getCreateButton() {
        return {
            klass: 'create-thread-item-button btn btn-main btn-sm',
            labelKey: 'LBL_SUBMIT_BUTTON_LABEL',
            onClick: () => {
                this.createStore.validate().pipe(take(1)).subscribe(valid => {
                    if (valid) {
                        this.createStore.save().pipe(take(1)).subscribe(() => {
                            this.store.reload();
                            this.initRecord();
                            this.shouldResetScroll = true;
                            this.message.addSuccessMessageByKey('LBL_ACTION_SUCCESS');
                        });
                        return;
                    }
                    this.message.addWarningMessageByKey('LBL_VALIDATION_ERRORS');
                });
            }
        };
    }
    allLoaded() {
        return !!(this.store && this.store.allLoaded());
    }
    getMaxHeight() {
        if (this.maxHeight == 0) {
            return null;
        }
        return { 'max-height.px': this.maxHeight, 'overflow-y': 'auto' };
    }
    initRecord() {
        const emptyRecord = this.recordManager.buildEmptyRecord(this.config.module);
        this.addPresetFields(emptyRecord);
        let mode = 'edit';
        if (this?.config?.createConfig && this?.config?.createConfig?.initialMode) {
            mode = this.config.createConfig.initialMode;
        }
        this.createStore.initRecord(emptyRecord, mode, false, true);
    }
    scrollToEnd() {
        if (!this.listContainer || !this.listContainer.nativeElement) {
            return;
        }
        this.scrollTo(this.listContainer.nativeElement.scrollHeight);
    }
    scrollToTop() {
        this.scrollTo(0);
    }
    scrollTo(position) {
        try {
            this.listContainer.nativeElement.scrollTop = position;
        }
        catch (err) {
        }
    }
    scrollToItem(item) {
        if (!item || !this.listContainer || !this.listContainer.nativeElement) {
            return;
        }
        const elementTop = item.offsetTop;
        const parentTop = this.listContainer.nativeElement.offsetTop;
        const relativeTop = elementTop - parentTop;
        this.scrollTo(relativeTop);
    }
    resetScroll() {
        if (this.shouldResetScroll === false) {
            return;
        }
        if (this.direction === 'asc') {
            this.scrollToEnd();
        }
        else {
            this.scrollToTop();
        }
        this.shouldResetScroll = false;
    }
    scheduleScrollReset() {
        setTimeout(() => {
            this.resetScroll();
        }, 500);
    }
    initCreate() {
        if (!this.config.create) {
            return;
        }
        this.createStore = this.itemFactory.create();
        this.createStore.setMetadata(this.config.createConfig.metadata);
        this.initRecord();
        this.initPresetFieldsMapping();
    }
    initPresetFieldsMapping() {
        if (!this.config.presetFields$) {
            return;
        }
        this.subs.push(this.config.presetFields$.subscribe(presetFieldValues => {
            if (!presetFieldValues || !Object.keys(presetFieldValues).length) {
                return;
            }
            this.presetFieldValues = presetFieldValues;
            const record = this.createStore.recordStore.getBaseRecord();
            this.addPresetFields(record);
            this.createStore.recordStore.setRecord(record);
        }));
    }
    addPresetFields(record) {
        if (!this.presetFieldValues) {
            return;
        }
        record.attributes = {
            ...this.presetFieldValues,
            ...(record.attributes || {})
        };
    }
    initDataSubscription() {
        this.subs.push(this.store.stores$.subscribe(records => {
            if (!this.records || !this.records.length) {
                this.shouldResetScroll = true;
            }
            if (this.direction === 'asc') {
                this.records = records.reverse();
                this.scheduleScrollReset();
                return;
            }
            this.records = records;
            this.scheduleScrollReset();
        }));
    }
    initLoading() {
        let loading$;
        if (this.createStore && this.createStore.loading$) {
            loading$ = this.store.$loading.pipe(combineLatestWith(this.createStore.loading$));
        }
        else {
            loading$ = this.store.$loading.pipe(map(value => [value]));
        }
        this.subs.push(loading$.subscribe((loadings) => {
            if (!loadings || !loadings.length) {
                this.loading = false;
                return;
            }
            let loading = false;
            loadings.forEach(value => {
                loading = loading || value;
            });
            this.loading = loading;
        }));
    }
    static { this.ɵfac = function RecordThreadComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RecordThreadComponent)(i0.ɵɵdirectiveInject(i1.RecordThreadStoreFactory), i0.ɵɵdirectiveInject(i2.RecordThreadItemStoreFactory), i0.ɵɵdirectiveInject(i3.RecordManager), i0.ɵɵdirectiveInject(i4.MessageService), i0.ɵɵdirectiveInject(i5.RecordThreadListActionsAdapterFactory)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RecordThreadComponent, selectors: [["scrm-record-thread"]], viewQuery: function RecordThreadComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listContainer = _t.first);
        } }, inputs: { config: "config" }, decls: 6, vars: 8, consts: [["list", ""], ["item", ""], ["class", "d-flex record-thread-no-data justify-content-center h3", 4, "ngIf"], ["class", "d-flex record-thread-loading justify-content-center", 4, "ngIf"], ["class", "record-thread-list scrollbar-thick", 3, "ngStyle", 4, "ngIf"], [4, "ngIf"], [1, "d-flex", "record-thread-no-data", "justify-content-center", "h3"], ["labelKey", "LBL_NO_DATA"], [1, "d-flex", "record-thread-loading", "justify-content-center"], [3, "overlay"], [1, "record-thread-list", "scrollbar-thick", 3, "ngStyle"], ["class", "record-thread-load-more d-flex justify-content-center flex-grow-1", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "record-thread-load-more d-flex justify-content-center", 4, "ngIf"], [1, "record-thread-load-more", "d-flex", "justify-content-center", "flex-grow-1"], [3, "config"], [1, "record-thread-load-more", "d-flex", "justify-content-center"], [3, "buttonClass", "buttonGroupClass", "config"], [1, "pt-3", "pl-3", "pr-3", "pb-2"], [3, "labelKey"], ["class", "d-flex flex-column record-thread-create-container", 4, "ngIf"], [1, "d-flex", "flex-column", "record-thread-create-container"], [1, "flex-grow-1"], [1, "flex-grow-1", "d-flex", "justify-content-start", "pt-1", "record-thread-create-buttons"]], template: function RecordThreadComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵtemplate(1, RecordThreadComponent_div_1_Template, 2, 0, "div", 2)(2, RecordThreadComponent_div_2_Template, 2, 1, "div", 3)(3, RecordThreadComponent_div_3_Template, 7, 7, "div", 4)(4, RecordThreadComponent_div_4_Template, 3, 1, "div", 5)(5, RecordThreadComponent_ng_container_5_Template, 2, 1, "ng-container", 5);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassMapInterpolate1("record-thread ", ctx.config && ctx.config.klass || "", "");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.loading && !ctx.records && !ctx.records.length);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.loading);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.records && ctx.records.length);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", (!ctx.records || !ctx.records.length) && !ctx.loading && ctx.config.showNoDataMessage);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.config.create && ctx.createStore);
        } }, dependencies: [i6.NgForOf, i6.NgIf, i6.NgStyle, i7.ButtonComponent, i8.LabelComponent, i9.RecordThreadItemComponent, i10.LoadingSpinnerComponent, i11.ActionGroupMenuComponent], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordThreadComponent, [{
        type: Component,
        args: [{ selector: 'scrm-record-thread', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n\n<div class=\"record-thread {{(config && config.klass) || ''}}\">\n    <div *ngIf=\"!loading && !records && !records.length\"\n         class=\"d-flex record-thread-no-data justify-content-center h3\">\n        <scrm-label labelKey=\"LBL_NO_DATA\"></scrm-label>\n    </div>\n\n    <div *ngIf=\"loading\" class=\"d-flex record-thread-loading justify-content-center\">\n        <scrm-loading-spinner [overlay]=\"true\"></scrm-loading-spinner>\n    </div>\n\n    <div #list\n         *ngIf=\"records && records.length\"\n         [ngStyle]=\"getMaxHeight()\"\n         class=\"record-thread-list scrollbar-thick\">\n\n        <div *ngIf=\"loadMorePosition === 'top' && !allLoaded()\"\n             class=\"record-thread-load-more d-flex justify-content-center flex-grow-1\">\n            <scrm-button [config]=\"getLoadMoreButton()\"></scrm-button>\n        </div>\n\n        <div #item *ngFor=\"let record of records\">\n            <scrm-record-thread-item [config]=\"buildItem(record, item)\"></scrm-record-thread-item>\n        </div>\n\n        <div [class]=\"config.listActionsClass ?? ''\">\n\n            <div *ngIf=\"loadMorePosition === 'bottom' && !allLoaded()\"\n                 class=\"record-thread-load-more d-flex justify-content-center\">\n                <scrm-button [config]=\"getLoadMoreButton()\"></scrm-button>\n            </div>\n\n            <ng-container *ngIf=\"config.listActions\">\n                <scrm-action-group-menu [buttonClass]=\"config.listActionsButtonClass ?? ''\"\n                                        [buttonGroupClass]=\"config.listActionsButtonGroupClass ?? ''\"\n                                        [config]=\"listActionAdapter\">\n                </scrm-action-group-menu>\n            </ng-container>\n\n        </div>\n\n    </div>\n\n    <div *ngIf=\"(!records || !records.length) && !loading && config.showNoDataMessage\">\n        <h6 class=\"pt-3 pl-3 pr-3 pb-2\">\n            <scrm-label [labelKey]=\"config.noDataLabel || 'LBL_NO_DATA'\"></scrm-label>\n        </h6>\n\n    </div>\n\n    <ng-container *ngIf=\"config.create && createStore\">\n\n        <div *ngIf=\"!loading\"\n             class=\"d-flex flex-column record-thread-create-container\">\n\n            <div class=\"flex-grow-1\">\n                <scrm-record-thread-item [config]=\"buildCreateItem()\"></scrm-record-thread-item>\n            </div>\n\n            <div class=\"flex-grow-1 d-flex justify-content-start pt-1 record-thread-create-buttons\">\n                <scrm-button [config]=\"getCreateButton()\"></scrm-button>\n            </div>\n\n        </div>\n\n    </ng-container>\n\n</div>\n" }]
    }], () => [{ type: i1.RecordThreadStoreFactory }, { type: i2.RecordThreadItemStoreFactory }, { type: i3.RecordManager }, { type: i4.MessageService }, { type: i5.RecordThreadListActionsAdapterFactory }], { config: [{
            type: Input
        }], listContainer: [{
            type: ViewChild,
            args: ['list']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RecordThreadComponent, { className: "RecordThreadComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLXRocmVhZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9yZWNvcmQtdGhyZWFkL2NvbXBvbmVudHMvcmVjb3JkLXRocmVhZC9yZWNvcmQtdGhyZWFkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb250YWluZXJzL3JlY29yZC10aHJlYWQvY29tcG9uZW50cy9yZWNvcmQtdGhyZWFkL3JlY29yZC10aHJlYWQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBZ0IsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQXFCLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4RyxPQUFPLEVBQUMsaUJBQWlCLEVBQTJCLE1BQU0sTUFBTSxDQUFDO0FBRWpFLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLHVEQUF1RCxDQUFDO0FBRS9GLE9BQU8sRUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRzlDLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUk1RCxPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSw0REFBNEQsQ0FBQztBQUN4RyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sNENBQTRDLENBQUM7QUFDekUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDhDQUE4QyxDQUFDO0FBRTVFLE9BQU8sRUFBQyxxQ0FBcUMsRUFBQyxNQUFNLDJEQUEyRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7SUNiNUcsOEJBQ29FO0lBQ2hFLGdDQUFnRDtJQUNwRCxpQkFBTTs7O0lBRU4sOEJBQWlGO0lBQzdF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WUFsRUQscUZBQXdEO1lBQ25ELGNBQTZDO1lBQTdDLDBFQUE2QztZQUs3QyxjQUFhO1lBQWIsa0NBQWE7WUFLYixjQUErQjtZQUEvQix3REFBK0I7WUErQi9CLGNBQTJFO1lBQTNFLDRHQUEyRTtZQU9sRSxjQUFrQztZQUFsQywyREFBa0M7OztpRkQzQnhDLHFCQUFxQjtjQUxqQyxTQUFTOzJCQUNJLG9CQUFvQjtpTkFNckIsTUFBTTtrQkFBZCxLQUFLO1lBQ2EsYUFBYTtrQkFBL0IsU0FBUzttQkFBQyxNQUFNOztrRkFIUixxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2NvbWJpbmVMYXRlc3RXaXRoLCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtSZWNvcmRUaHJlYWRTdG9yZX0gZnJvbSAnLi4vLi4vc3RvcmUvcmVjb3JkLXRocmVhZC9yZWNvcmQtdGhyZWFkLnN0b3JlJztcbmltcG9ydCB7UmVjb3JkVGhyZWFkU3RvcmVGYWN0b3J5fSBmcm9tICcuLi8uLi9zdG9yZS9yZWNvcmQtdGhyZWFkL3JlY29yZC10aHJlYWQuc3RvcmUuZmFjdG9yeSc7XG5pbXBvcnQge1JlY29yZFRocmVhZENvbmZpZ30gZnJvbSAnLi9yZWNvcmQtdGhyZWFkLm1vZGVsJztcbmltcG9ydCB7bWFwLCB0YWtlLCB0YXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7UmVjb3JkVGhyZWFkSXRlbUNvbmZpZ30gZnJvbSAnLi4vcmVjb3JkLXRocmVhZC1pdGVtL3JlY29yZC10aHJlYWQtaXRlbS5tb2RlbCc7XG5pbXBvcnQge1JlY29yZFRocmVhZEl0ZW1TdG9yZX0gZnJvbSAnLi4vLi4vc3RvcmUvcmVjb3JkLXRocmVhZC9yZWNvcmQtdGhyZWFkLWl0ZW0uc3RvcmUnO1xuaW1wb3J0IHtpc1ZvaWR9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi91dGlscy92YWx1ZS11dGlscyc7XG5pbXBvcnQge1JlY29yZCwgQXR0cmlidXRlTWFwfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vcmVjb3JkL3JlY29yZC5tb2RlbCc7XG5pbXBvcnQge1ZpZXdNb2RlfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vdmlld3Mvdmlldy5tb2RlbCc7XG5pbXBvcnQge0J1dHRvbkludGVyZmFjZX0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5tb2RlbCc7XG5pbXBvcnQge1JlY29yZFRocmVhZEl0ZW1TdG9yZUZhY3Rvcnl9IGZyb20gJy4uLy4uL3N0b3JlL3JlY29yZC10aHJlYWQvcmVjb3JkLXRocmVhZC1pdGVtLnN0b3JlLmZhY3RvcnknO1xuaW1wb3J0IHtSZWNvcmRNYW5hZ2VyfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9yZWNvcmQvcmVjb3JkLm1hbmFnZXInO1xuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbWVzc2FnZS9tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHtSZWNvcmRUaHJlYWRMaXN0QWN0aW9uc0FkYXB0ZXJ9IGZyb20gXCIuLi8uLi9hZGFwdGVycy9yZWNvcmQtdGhyZWFkLWxpc3QtYWN0aW9ucy5hZGFwdGVyXCI7XG5pbXBvcnQge1JlY29yZFRocmVhZExpc3RBY3Rpb25zQWRhcHRlckZhY3Rvcnl9IGZyb20gXCIuLi8uLi9hZGFwdGVycy9yZWNvcmQtdGhyZWFkLWxpc3QtYWN0aW9ucy5hZGFwdGVyLmZhY3RvcnlcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tcmVjb3JkLXRocmVhZCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3JlY29yZC10aHJlYWQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW10sXG59KVxuZXhwb3J0IGNsYXNzIFJlY29yZFRocmVhZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcblxuICAgIEBJbnB1dCgpIGNvbmZpZzogUmVjb3JkVGhyZWFkQ29uZmlnO1xuICAgIEBWaWV3Q2hpbGQoJ2xpc3QnKSBsaXN0Q29udGFpbmVyOiBFbGVtZW50UmVmO1xuXG4gICAgc3RvcmU6IFJlY29yZFRocmVhZFN0b3JlO1xuICAgIGNyZWF0ZVN0b3JlOiBSZWNvcmRUaHJlYWRJdGVtU3RvcmU7XG4gICAgcmVjb3JkczogUmVjb3JkVGhyZWFkSXRlbVN0b3JlW107XG4gICAgbG9hZGluZyA9IGZhbHNlO1xuICAgIG1heEhlaWdodCA9IDQwMDtcbiAgICBkaXJlY3Rpb246ICdhc2MnIHwgJ2Rlc2MnID0gJ2FzYyc7XG4gICAgbG9hZE1vcmVQb3NpdGlvbjogJ2JvdHRvbScgfCAndG9wJyB8IHN0cmluZyA9ICd0b3AnO1xuICAgIGxpc3RBY3Rpb25BZGFwdGVyOiBSZWNvcmRUaHJlYWRMaXN0QWN0aW9uc0FkYXB0ZXI7XG5cbiAgICBwcm90ZWN0ZWQgc2hvdWxkUmVzZXRTY3JvbGwgPSBmYWxzZTtcblxuICAgIHByb3RlY3RlZCBzdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuICAgIHByb3RlY3RlZCBwcmVzZXRGaWVsZFZhbHVlczogQXR0cmlidXRlTWFwO1xuXG5cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgc3RvcmVGYWN0b3J5OiBSZWNvcmRUaHJlYWRTdG9yZUZhY3RvcnksXG4gICAgICAgIHByb3RlY3RlZCBpdGVtRmFjdG9yeTogUmVjb3JkVGhyZWFkSXRlbVN0b3JlRmFjdG9yeSxcbiAgICAgICAgcHJvdGVjdGVkIHJlY29yZE1hbmFnZXI6IFJlY29yZE1hbmFnZXIsXG4gICAgICAgIHByb3RlY3RlZCBtZXNzYWdlOiBNZXNzYWdlU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIGFjdGlvbkFkYXB0ZXJGYWN0b3J5OiBSZWNvcmRUaHJlYWRMaXN0QWN0aW9uc0FkYXB0ZXJGYWN0b3J5LFxuICAgICkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBpZiAoIWlzVm9pZCh0aGlzLmNvbmZpZy5tYXhMaXN0SGVpZ2h0KSkge1xuICAgICAgICAgICAgdGhpcy5tYXhIZWlnaHQgPSB0aGlzLmNvbmZpZy5tYXhMaXN0SGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZy5tb2R1bGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5jb25maWcuc3RvcmUpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmUgPSB0aGlzLnN0b3JlRmFjdG9yeS5jcmVhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuc3RvcmUuc2V0SXRlbU1ldGFkYXRhKHRoaXMuY29uZmlnLml0ZW1Db25maWcubWV0YWRhdGEpO1xuICAgICAgICAgICAgdGhpcy5zdG9yZS5zZXRMaXN0TWV0YWRhdGEoe2FjdGlvbnM6IHRoaXMuY29uZmlnLmxpc3RBY3Rpb25zfSk7XG4gICAgICAgICAgICB0aGlzLnN0b3JlLmluaXQodGhpcy5jb25maWcubW9kdWxlLCBmYWxzZSwgdGhpcz8uY29uZmlnPy5wYWdlU2l6ZSA/PyBudWxsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmUgPSB0aGlzLmNvbmZpZy5zdG9yZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gdGhpcy5jb25maWcuZGlyZWN0aW9uIHx8IHRoaXMuZGlyZWN0aW9uO1xuICAgICAgICB0aGlzLnNldExvYWRNb3JlUG9zaXRpb24oKTtcblxuICAgICAgICB0aGlzLmluaXRDcmVhdGUoKTtcbiAgICAgICAgdGhpcy5pbml0RGF0YVN1YnNjcmlwdGlvbigpO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5maWx0ZXJzJCkge1xuXG4gICAgICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLmNvbmZpZy5maWx0ZXJzJC5zdWJzY3JpYmUoZmlsdGVycyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5zZXRGaWx0ZXJzKGZpbHRlcnMpLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLm9uUmVmcmVzaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWcub25SZWZyZXNoKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0b3JlLmxvYWQoZmFsc2UpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLm9uUmVmcmVzaCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5vblJlZnJlc2goKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYXV0b1JlZnJlc2hGcmVxdWVuY3kgPSB0aGlzPy5jb25maWc/LmF1dG9SZWZyZXNoRnJlcXVlbmN5ID8/IDA7XG4gICAgICAgIGlmIChhdXRvUmVmcmVzaEZyZXF1ZW5jeSAmJiB0aGlzLnN0b3JlKSB7XG4gICAgICAgICAgICBjb25zdCBtaW4gPSB0aGlzLmNvbmZpZy5hdXRvUmVmcmVzaERldmlhdGlvbk1pbiA/PyAtMTU7XG4gICAgICAgICAgICBjb25zdCBtYXggPSB0aGlzLmNvbmZpZy5hdXRvUmVmcmVzaERldmlhdGlvbk1heCA/PyAxNTtcblxuICAgICAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5zdG9yZS5pbml0QXV0b1JlZnJlc2goYXV0b1JlZnJlc2hGcmVxdWVuY3ksIG1pbiwgbWF4LCB0aGlzLmNvbmZpZy5vblJlZnJlc2gpLnN1YnNjcmliZSgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5pdExvYWRpbmcoKTtcblxuICAgICAgICB0aGlzLmxpc3RBY3Rpb25BZGFwdGVyID0gdGhpcy5hY3Rpb25BZGFwdGVyRmFjdG9yeS5jcmVhdGUodGhpcy5zdG9yZSwgdGhpcy5jb25maWcpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRMb2FkTW9yZVBvc2l0aW9uKCkge1xuICAgICAgICB0aGlzLmxvYWRNb3JlUG9zaXRpb24gPSB0aGlzLmRpcmVjdGlvbiA9PT0gJ2FzYycgPyAndG9wJyA6ICdib3R0b20nO1xuICAgICAgICBpZiAodGhpcy5jb25maWcubG9hZE1vcmVQb3NpdGlvbikge1xuICAgICAgICAgICAgdGhpcy5sb2FkTW9yZVBvc2l0aW9uID0gdGhpcy5jb25maWcubG9hZE1vcmVQb3NpdGlvbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5zaG91bGRSZXNldFNjcm9sbCA9IHRydWU7XG4gICAgICAgIHRoaXMucmVzZXRTY3JvbGwoKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCEodGhpcz8uY29uZmlnPy5zdG9yZSA/PyBudWxsKSkge1xuICAgICAgICAgICAgdGhpcy5zdG9yZS5jbGVhcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RvcmUgPSBudWxsO1xuICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpXG4gICAgfVxuXG4gICAgYnVpbGRJdGVtKGl0ZW06IFJlY29yZFRocmVhZEl0ZW1TdG9yZSwgaXRlbVJlZjogYW55KTogUmVjb3JkVGhyZWFkSXRlbUNvbmZpZyB7XG4gICAgICAgIGxldCBrbGFzcyA9ICdyZWNvcmQtdGhyZWFkLWxpc3QtaXRlbSc7XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLml0ZW1Db25maWcua2xhc3MpIHtcbiAgICAgICAgICAgIGtsYXNzICs9ICcgJyArIHRoaXMuY29uZmlnLml0ZW1Db25maWcua2xhc3NcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4udGhpcy5jb25maWcuaXRlbUNvbmZpZyxcbiAgICAgICAgICAgIHN0b3JlOiBpdGVtLFxuICAgICAgICAgICAgdGhyZWFkU3RvcmU6IHRoaXMuc3RvcmUsXG4gICAgICAgICAgICBrbGFzczoga2xhc3MsXG4gICAgICAgICAgICBjb250YWluZXJDbGFzczogdGhpcy5jb25maWcuaXRlbUNvbmZpZy5jb250YWluZXJDbGFzcyxcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IHRoaXMuY29uZmlnPy5pdGVtQ29uZmlnPy5mbGV4RGlyZWN0aW9uID8/ICcnLFxuICAgICAgICAgICAgZXhwYW5kZWQ6ICgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvSXRlbShpdGVtUmVmKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb2xsYXBzZWQ6ICgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvSXRlbShpdGVtUmVmKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBhcyBSZWNvcmRUaHJlYWRJdGVtQ29uZmlnO1xuICAgIH1cblxuICAgIGdldExvYWRNb3JlQnV0dG9uKCk6IEJ1dHRvbkludGVyZmFjZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBrbGFzczogJ2xvYWQtbW9yZS1idXR0b24gYnRuIGJ0bi1saW5rIGJ0bi1zbScsXG4gICAgICAgICAgICBsYWJlbEtleTogJ0xCTF9MT0FEX01PUkUnLFxuICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzPy5jb25maWc/Lm9uTG9hZE1vcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5nZXRSZWNvcmRMaXN0KCkucmVjb3JkcyQucGlwZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXAoKCkgPT4gdGhpcy5jb25maWcub25Mb2FkTW9yZSgpKVxuICAgICAgICAgICAgICAgICAgICApLnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLmxvYWRNb3JlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gYXMgQnV0dG9uSW50ZXJmYWNlO1xuICAgIH1cblxuICAgIGJ1aWxkQ3JlYXRlSXRlbSgpOiBSZWNvcmRUaHJlYWRJdGVtQ29uZmlnIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnRoaXM/LmNvbmZpZz8uY3JlYXRlQ29uZmlnID8/IHt9LFxuICAgICAgICAgICAgc3RvcmU6IHRoaXMuY3JlYXRlU3RvcmUsXG4gICAgICAgICAgICByb3dDbGFzczogeydwdC0xJzogdHJ1ZX0sXG4gICAgICAgICAgICBrbGFzczogJ3JlY29yZC10aHJlYWQtY3JlYXRlLWl0ZW0nLFxuICAgICAgICB9IGFzIFJlY29yZFRocmVhZEl0ZW1Db25maWc7XG4gICAgfVxuXG4gICAgZ2V0Q3JlYXRlQnV0dG9uKCk6IEJ1dHRvbkludGVyZmFjZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBrbGFzczogJ2NyZWF0ZS10aHJlYWQtaXRlbS1idXR0b24gYnRuIGJ0bi1tYWluIGJ0bi1zbScsXG4gICAgICAgICAgICBsYWJlbEtleTogJ0xCTF9TVUJNSVRfQlVUVE9OX0xBQkVMJyxcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVN0b3JlLnZhbGlkYXRlKCkucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUodmFsaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlU3RvcmUuc2F2ZSgpLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdFJlY29yZCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG91bGRSZXNldFNjcm9sbCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UuYWRkU3VjY2Vzc01lc3NhZ2VCeUtleSgnTEJMX0FDVElPTl9TVUNDRVNTJylcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlLmFkZFdhcm5pbmdNZXNzYWdlQnlLZXkoJ0xCTF9WQUxJREFUSU9OX0VSUk9SUycpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGFzIEJ1dHRvbkludGVyZmFjZTtcbiAgICB9XG5cbiAgICBhbGxMb2FkZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhISh0aGlzLnN0b3JlICYmIHRoaXMuc3RvcmUuYWxsTG9hZGVkKCkpO1xuICAgIH1cblxuICAgIGdldE1heEhlaWdodCgpOiB7IFtrbGFzczogc3RyaW5nXTogYW55OyB9IHwgbnVsbCB7XG4gICAgICAgIGlmICh0aGlzLm1heEhlaWdodCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7J21heC1oZWlnaHQucHgnOiB0aGlzLm1heEhlaWdodCwgJ292ZXJmbG93LXknOiAnYXV0byd9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGluaXRSZWNvcmQoKSB7XG4gICAgICAgIGNvbnN0IGVtcHR5UmVjb3JkID0gdGhpcy5yZWNvcmRNYW5hZ2VyLmJ1aWxkRW1wdHlSZWNvcmQodGhpcy5jb25maWcubW9kdWxlKTtcbiAgICAgICAgdGhpcy5hZGRQcmVzZXRGaWVsZHMoZW1wdHlSZWNvcmQpO1xuICAgICAgICBsZXQgbW9kZSA9ICdlZGl0JyBhcyBWaWV3TW9kZTtcbiAgICAgICAgaWYgKHRoaXM/LmNvbmZpZz8uY3JlYXRlQ29uZmlnICYmIHRoaXM/LmNvbmZpZz8uY3JlYXRlQ29uZmlnPy5pbml0aWFsTW9kZSkge1xuICAgICAgICAgICAgbW9kZSA9IHRoaXMuY29uZmlnLmNyZWF0ZUNvbmZpZy5pbml0aWFsTW9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3JlYXRlU3RvcmUuaW5pdFJlY29yZChlbXB0eVJlY29yZCwgbW9kZSwgZmFsc2UsIHRydWUpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzY3JvbGxUb0VuZCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmxpc3RDb250YWluZXIgfHwgIXRoaXMubGlzdENvbnRhaW5lci5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNjcm9sbFRvKHRoaXMubGlzdENvbnRhaW5lci5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNjcm9sbFRvVG9wKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNjcm9sbFRvKDApO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzY3JvbGxUbyhwb3NpdGlvbjogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RDb250YWluZXIubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgPSBwb3NpdGlvbjtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2Nyb2xsVG9JdGVtKGl0ZW06IGFueSkge1xuICAgICAgICBpZiAoIWl0ZW0gfHwgIXRoaXMubGlzdENvbnRhaW5lciB8fCAhdGhpcy5saXN0Q29udGFpbmVyLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVsZW1lbnRUb3AgPSBpdGVtLm9mZnNldFRvcDtcbiAgICAgICAgY29uc3QgcGFyZW50VG9wID0gdGhpcy5saXN0Q29udGFpbmVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0VG9wO1xuICAgICAgICBjb25zdCByZWxhdGl2ZVRvcCA9IGVsZW1lbnRUb3AgLSBwYXJlbnRUb3A7XG5cbiAgICAgICAgdGhpcy5zY3JvbGxUbyhyZWxhdGl2ZVRvcCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlc2V0U2Nyb2xsKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5zaG91bGRSZXNldFNjcm9sbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gJ2FzYycpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9FbmQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9Ub3AoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2hvdWxkUmVzZXRTY3JvbGwgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2NoZWR1bGVTY3JvbGxSZXNldCgpOiB2b2lkIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0U2Nyb2xsKCk7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGluaXRDcmVhdGUoKSB7XG4gICAgICAgIGlmICghdGhpcy5jb25maWcuY3JlYXRlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNyZWF0ZVN0b3JlID0gdGhpcy5pdGVtRmFjdG9yeS5jcmVhdGUoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVTdG9yZS5zZXRNZXRhZGF0YSh0aGlzLmNvbmZpZy5jcmVhdGVDb25maWcubWV0YWRhdGEpO1xuICAgICAgICB0aGlzLmluaXRSZWNvcmQoKTtcbiAgICAgICAgdGhpcy5pbml0UHJlc2V0RmllbGRzTWFwcGluZygpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBpbml0UHJlc2V0RmllbGRzTWFwcGluZygpIHtcblxuICAgICAgICBpZiAoIXRoaXMuY29uZmlnLnByZXNldEZpZWxkcyQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMuY29uZmlnLnByZXNldEZpZWxkcyQuc3Vic2NyaWJlKHByZXNldEZpZWxkVmFsdWVzID0+IHtcblxuICAgICAgICAgICAgaWYgKCFwcmVzZXRGaWVsZFZhbHVlcyB8fCAhT2JqZWN0LmtleXMocHJlc2V0RmllbGRWYWx1ZXMpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5wcmVzZXRGaWVsZFZhbHVlcyA9IHByZXNldEZpZWxkVmFsdWVzO1xuXG4gICAgICAgICAgICBjb25zdCByZWNvcmQgPSB0aGlzLmNyZWF0ZVN0b3JlLnJlY29yZFN0b3JlLmdldEJhc2VSZWNvcmQoKTtcbiAgICAgICAgICAgIHRoaXMuYWRkUHJlc2V0RmllbGRzKHJlY29yZCk7XG5cbiAgICAgICAgICAgIHRoaXMuY3JlYXRlU3RvcmUucmVjb3JkU3RvcmUuc2V0UmVjb3JkKHJlY29yZCk7XG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWRkUHJlc2V0RmllbGRzKHJlY29yZDogUmVjb3JkKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5wcmVzZXRGaWVsZFZhbHVlcykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVjb3JkLmF0dHJpYnV0ZXMgPSB7XG4gICAgICAgICAgICAuLi50aGlzLnByZXNldEZpZWxkVmFsdWVzLFxuICAgICAgICAgICAgLi4uKHJlY29yZC5hdHRyaWJ1dGVzIHx8IHt9KVxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGluaXREYXRhU3Vic2NyaXB0aW9uKCk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMuc3RvcmUuc3RvcmVzJC5zdWJzY3JpYmUocmVjb3JkcyA9PiB7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5yZWNvcmRzIHx8ICF0aGlzLnJlY29yZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG91bGRSZXNldFNjcm9sbCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gJ2FzYycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlY29yZHMgPSByZWNvcmRzLnJldmVyc2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlU2Nyb2xsUmVzZXQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucmVjb3JkcyA9IHJlY29yZHM7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlU2Nyb2xsUmVzZXQoKTtcbiAgICAgICAgfSkpO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGluaXRMb2FkaW5nKCk6IHZvaWQge1xuICAgICAgICBsZXQgbG9hZGluZyQ6IE9ic2VydmFibGU8QXJyYXk8Ym9vbGVhbj4+O1xuXG4gICAgICAgIGlmICh0aGlzLmNyZWF0ZVN0b3JlICYmIHRoaXMuY3JlYXRlU3RvcmUubG9hZGluZyQpIHtcbiAgICAgICAgICAgIGxvYWRpbmckID0gdGhpcy5zdG9yZS4kbG9hZGluZy5waXBlKFxuICAgICAgICAgICAgICAgIGNvbWJpbmVMYXRlc3RXaXRoKHRoaXMuY3JlYXRlU3RvcmUubG9hZGluZyQpXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbG9hZGluZyQ9IHRoaXMuc3RvcmUuJGxvYWRpbmcucGlwZShcbiAgICAgICAgICAgICAgICBtYXAodmFsdWUgPT4gW3ZhbHVlXSlcbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKGxvYWRpbmckLnN1YnNjcmliZSgobG9hZGluZ3MpID0+IHtcbiAgICAgICAgICAgIGlmICghbG9hZGluZ3MgfHwgIWxvYWRpbmdzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGxvYWRpbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgbG9hZGluZ3MuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgbG9hZGluZyA9IGxvYWRpbmcgfHwgdmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGxvYWRpbmc7XG4gICAgICAgIH0pKTtcbiAgICB9XG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG5cbjxkaXYgY2xhc3M9XCJyZWNvcmQtdGhyZWFkIHt7KGNvbmZpZyAmJiBjb25maWcua2xhc3MpIHx8ICcnfX1cIj5cbiAgICA8ZGl2ICpuZ0lmPVwiIWxvYWRpbmcgJiYgIXJlY29yZHMgJiYgIXJlY29yZHMubGVuZ3RoXCJcbiAgICAgICAgIGNsYXNzPVwiZC1mbGV4IHJlY29yZC10aHJlYWQtbm8tZGF0YSBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGgzXCI+XG4gICAgICAgIDxzY3JtLWxhYmVsIGxhYmVsS2V5PVwiTEJMX05PX0RBVEFcIj48L3Njcm0tbGFiZWw+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2ICpuZ0lmPVwibG9hZGluZ1wiIGNsYXNzPVwiZC1mbGV4IHJlY29yZC10aHJlYWQtbG9hZGluZyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgIDxzY3JtLWxvYWRpbmctc3Bpbm5lciBbb3ZlcmxheV09XCJ0cnVlXCI+PC9zY3JtLWxvYWRpbmctc3Bpbm5lcj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgI2xpc3RcbiAgICAgICAgICpuZ0lmPVwicmVjb3JkcyAmJiByZWNvcmRzLmxlbmd0aFwiXG4gICAgICAgICBbbmdTdHlsZV09XCJnZXRNYXhIZWlnaHQoKVwiXG4gICAgICAgICBjbGFzcz1cInJlY29yZC10aHJlYWQtbGlzdCBzY3JvbGxiYXItdGhpY2tcIj5cblxuICAgICAgICA8ZGl2ICpuZ0lmPVwibG9hZE1vcmVQb3NpdGlvbiA9PT0gJ3RvcCcgJiYgIWFsbExvYWRlZCgpXCJcbiAgICAgICAgICAgICBjbGFzcz1cInJlY29yZC10aHJlYWQtbG9hZC1tb3JlIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGZsZXgtZ3Jvdy0xXCI+XG4gICAgICAgICAgICA8c2NybS1idXR0b24gW2NvbmZpZ109XCJnZXRMb2FkTW9yZUJ1dHRvbigpXCI+PC9zY3JtLWJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiAjaXRlbSAqbmdGb3I9XCJsZXQgcmVjb3JkIG9mIHJlY29yZHNcIj5cbiAgICAgICAgICAgIDxzY3JtLXJlY29yZC10aHJlYWQtaXRlbSBbY29uZmlnXT1cImJ1aWxkSXRlbShyZWNvcmQsIGl0ZW0pXCI+PC9zY3JtLXJlY29yZC10aHJlYWQtaXRlbT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBbY2xhc3NdPVwiY29uZmlnLmxpc3RBY3Rpb25zQ2xhc3MgPz8gJydcIj5cblxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImxvYWRNb3JlUG9zaXRpb24gPT09ICdib3R0b20nICYmICFhbGxMb2FkZWQoKVwiXG4gICAgICAgICAgICAgICAgIGNsYXNzPVwicmVjb3JkLXRocmVhZC1sb2FkLW1vcmUgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8c2NybS1idXR0b24gW2NvbmZpZ109XCJnZXRMb2FkTW9yZUJ1dHRvbigpXCI+PC9zY3JtLWJ1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29uZmlnLmxpc3RBY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgPHNjcm0tYWN0aW9uLWdyb3VwLW1lbnUgW2J1dHRvbkNsYXNzXT1cImNvbmZpZy5saXN0QWN0aW9uc0J1dHRvbkNsYXNzID8/ICcnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYnV0dG9uR3JvdXBDbGFzc109XCJjb25maWcubGlzdEFjdGlvbnNCdXR0b25Hcm91cENsYXNzID8/ICcnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29uZmlnXT1cImxpc3RBY3Rpb25BZGFwdGVyXCI+XG4gICAgICAgICAgICAgICAgPC9zY3JtLWFjdGlvbi1ncm91cC1tZW51PlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgKm5nSWY9XCIoIXJlY29yZHMgfHwgIXJlY29yZHMubGVuZ3RoKSAmJiAhbG9hZGluZyAmJiBjb25maWcuc2hvd05vRGF0YU1lc3NhZ2VcIj5cbiAgICAgICAgPGg2IGNsYXNzPVwicHQtMyBwbC0zIHByLTMgcGItMlwiPlxuICAgICAgICAgICAgPHNjcm0tbGFiZWwgW2xhYmVsS2V5XT1cImNvbmZpZy5ub0RhdGFMYWJlbCB8fCAnTEJMX05PX0RBVEEnXCI+PC9zY3JtLWxhYmVsPlxuICAgICAgICA8L2g2PlxuXG4gICAgPC9kaXY+XG5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29uZmlnLmNyZWF0ZSAmJiBjcmVhdGVTdG9yZVwiPlxuXG4gICAgICAgIDxkaXYgKm5nSWY9XCIhbG9hZGluZ1wiXG4gICAgICAgICAgICAgY2xhc3M9XCJkLWZsZXggZmxleC1jb2x1bW4gcmVjb3JkLXRocmVhZC1jcmVhdGUtY29udGFpbmVyXCI+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LWdyb3ctMVwiPlxuICAgICAgICAgICAgICAgIDxzY3JtLXJlY29yZC10aHJlYWQtaXRlbSBbY29uZmlnXT1cImJ1aWxkQ3JlYXRlSXRlbSgpXCI+PC9zY3JtLXJlY29yZC10aHJlYWQtaXRlbT5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1ncm93LTEgZC1mbGV4IGp1c3RpZnktY29udGVudC1zdGFydCBwdC0xIHJlY29yZC10aHJlYWQtY3JlYXRlLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICA8c2NybS1idXR0b24gW2NvbmZpZ109XCJnZXRDcmVhdGVCdXR0b24oKVwiPjwvc2NybS1idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cblxuICAgIDwvbmctY29udGFpbmVyPlxuXG48L2Rpdj5cbiJdfQ==