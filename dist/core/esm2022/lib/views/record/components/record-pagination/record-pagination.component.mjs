/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2024 SalesAgility Ltd.
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
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import { combineLatestWith } from "rxjs";
import { filter, map, tap } from "rxjs/operators";
import { toNumber } from "lodash-es";
import { MessageModalComponent } from "../../../../components/modal/components/message-modal/message-modal.component";
import { ModuleNavigation } from "../../../../services/navigation/module-navigation/module-navigation.service";
import { ModuleNameMapper } from "../../../../services/navigation/module-name-mapper/module-name-mapper.service";
import { UserPreferenceStore } from "../../../../store/user-preference/user-preference.store";
import { LocalStorageService } from "../../../../services/local-storage/local-storage.service";
import { LanguageStore } from "../../../../store/language/language.store";
import { SystemConfigStore } from "../../../../store/system-config/system-config.store";
import { RecordViewStore } from "../../store/record-view/record-view.store";
import { RecordPaginationService } from "../../store/record-pagination/record-pagination.service";
import { RecordPaginationStore } from "../../store/record-pagination/record-pagination.store";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ButtonModule } from "../../../../components/button/button.module";
import { PageSelection, PaginationType } from "../../../../common/views/list/list-navigation.model";
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/system-config/system-config.store";
import * as i2 from "../../../../store/user-preference/user-preference.store";
import * as i3 from "../../../../services/local-storage/local-storage.service";
import * as i4 from "../../../../store/language/language.store";
import * as i5 from "../../../../services/navigation/module-navigation/module-navigation.service";
import * as i6 from "../../../../services/navigation/module-name-mapper/module-name-mapper.service";
import * as i7 from "../../store/record-view/record-view.store";
import * as i8 from "../../store/record-pagination/record-pagination.store";
import * as i9 from "../../store/record-pagination/record-pagination.service";
import * as i10 from "@angular/router";
import * as i11 from "@ng-bootstrap/ng-bootstrap";
import * as i12 from "@angular/common";
import * as i13 from "../../../../components/button/button.component";
function RecordPaginationComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-button", 3);
    i0.ɵɵelementStart(2, "span", 4);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "scrm-button", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const vm_r1 = i0.ɵɵnextContext().ngIf;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("config", ctx_r1.prevButton);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate3(" ", ctx_r1.currentIndex, " ", vm_r1.appStrings["LBL_LIST_OF"] || "", " ", vm_r1.pageCount.total, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("config", ctx_r1.nextButton);
} }
function RecordPaginationComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, RecordPaginationComponent_div_0_ng_container_1_Template, 5, 5, "ng-container", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const vm_r1 = ctx.ngIf;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", vm_r1.paginationEnabled);
} }
export class RecordPaginationComponent {
    constructor(systemConfigStore, preferences, localStorageService, languageStore, navigation, nameMapper, recordViewStore, recordPaginationStore, recordPaginationService, route, router, modalService) {
        this.systemConfigStore = systemConfigStore;
        this.preferences = preferences;
        this.localStorageService = localStorageService;
        this.languageStore = languageStore;
        this.navigation = navigation;
        this.nameMapper = nameMapper;
        this.recordViewStore = recordViewStore;
        this.recordPaginationStore = recordPaginationStore;
        this.recordPaginationService = recordPaginationService;
        this.route = route;
        this.router = router;
        this.modalService = modalService;
        this.currentIndex = 1;
        this.currentPage = 1;
        this.pageSize = 20;
        this.totalRecordsCount = 0;
        this.isRecordsLoading = false;
        this.isSaveContinueClicked = false;
        this.mode = 'detail';
        this.paginationType = PaginationType.PAGINATION;
        this.subs = [];
        this.prevButton = null;
        this.nextButton = null;
        this.appStrings$ = this.languageStore.appStrings$;
        this.recordIds$ = this.recordPaginationStore.recordIds$;
        this.mode$ = this.recordViewStore.mode$;
        this.vm$ = null;
        this.subs.push(this.route.queryParamMap
            .subscribe((params) => {
            this.currentIndex = toNumber(params.get('offset'));
        }));
    }
    ngOnInit() {
        this.recordPaginationStore.init();
        this.currentPage = this.recordPaginationStore.getCurrentPage();
        this.pageSize = this.recordPaginationStore.getPageSize();
        this.totalRecordsCount = this.recordPaginationStore.getRecordsCount();
        this.paginationType = this.preferences.getUserPreference('listview_pagination_type') ?? this.systemConfigStore.getConfigValue('listview_pagination_type');
        this.recordPaginationService.paginationType = this.paginationType;
        this.subs.push(this.mode$.subscribe(mode => {
            this.mode = mode;
        }));
        this.prevButton = {
            klass: {
                'record-pagination-button': true,
                'pagination-previous': true,
                disabled: this.currentIndex === 1
            },
            icon: 'paginate_previous',
            iconKlass: 'sicon-2x',
            disabled: this.currentIndex === 1 || this.isRecordsLoading,
            onClick: () => this.prevRecord()
        };
        this.nextButton = {
            klass: {
                'record-pagination-button': true,
                'pagination-next': true,
                disabled: this.currentIndex === this.totalRecordsCount
            },
            icon: 'paginate_next',
            iconKlass: 'sicon-2x',
            disabled: this.currentIndex === this.totalRecordsCount || this.isRecordsLoading,
            onClick: () => this.nextRecord()
        };
        this.vm$ = this.appStrings$.pipe(combineLatestWith(this.recordPaginationStore.pagination$, this.recordPaginationStore.paginationEnabled$), map(([appStrings, pageCount, paginationEnabled]) => {
            const module = this.nameMapper.toFrontend(this.recordPaginationStore.getModule()) ?? '';
            const key = module + '-' + 'recordview-current-record-pagination';
            const isRecordPaginationExist = this.localStorageService.get(key);
            const isRecordValid = this.recordPaginationService.checkRecordValid(this.recordViewStore.getRecordId());
            if (!isRecordPaginationExist || !isRecordValid || (this.currentIndex > this.totalRecordsCount)) {
                paginationEnabled = false;
            }
            this.prevButton = {
                ...this.prevButton,
                titleKey: appStrings['LBL_SEARCH_PREV'] || ''
            };
            this.nextButton = {
                ...this.nextButton,
                titleKey: appStrings['LBL_SEARCH_NEXT'] || ''
            };
            return { appStrings, pageCount, paginationEnabled };
        }));
        this.subs.push(this.recordIds$.subscribe(recordIds => {
            this.recordIds = recordIds;
        }));
        this.subs.push(this.recordPaginationService.nextRecord$.pipe(filter(data => {
            if (!data) {
                return false;
            }
            return true;
        }), tap((data) => {
            this.isSaveContinueClicked = true;
            this.nextRecord();
        })).subscribe((data) => {
            this.isSaveContinueClicked = false;
            this.recordPaginationService.triggerNextRecord(false);
        }));
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
        this.recordPaginationStore.clear();
    }
    prevRecord() {
        if (this.currentIndex <= 0) {
            return;
        }
        let nextRecordIndex = (this.currentIndex - 2) % this.pageSize;
        let nextPageThreshold = this.currentIndex - ((this.currentPage - 1) * this.pageSize) - 1;
        if (nextPageThreshold <= 0) {
            this.loadPage(PageSelection.PREVIOUS);
        }
        else {
            if (this.mode === 'edit' && this.recordViewStore.recordStore.isDirty()) {
                this.showConfirmationModal(PageSelection.PREVIOUS, nextRecordIndex);
            }
            else {
                this.navigatePrevRoute(nextRecordIndex);
            }
        }
    }
    nextRecord() {
        if (this.currentIndex >= this.totalRecordsCount) {
            return;
        }
        let nextRecordIndex = this.currentIndex % this.pageSize;
        let nextPageThreshold = this.currentIndex - ((this.currentPage - 1) * this.pageSize);
        if (nextPageThreshold > this.recordIds.length - 1) {
            this.loadPage(PageSelection.NEXT);
        }
        else {
            if (this.mode === 'edit' && this.recordViewStore.recordStore.isDirty() && !this.isSaveContinueClicked) {
                this.showConfirmationModal(PageSelection.NEXT, nextRecordIndex);
            }
            else {
                this.navigateNextRoute(nextRecordIndex);
            }
        }
    }
    loadPage(direction) {
        this.isRecordsLoading = true;
        let nextRecordIndex = 0;
        let isPaginationLoadMore = false;
        if (this.paginationType === PaginationType.LOAD_MORE) {
            isPaginationLoadMore = true;
        }
        if (direction === PageSelection.PREVIOUS) {
            nextRecordIndex = this.pageSize - 1;
        }
        else if (direction === PageSelection.NEXT && isPaginationLoadMore) {
            nextRecordIndex = this.currentIndex;
        }
        if (isPaginationLoadMore && direction !== PageSelection.PREVIOUS) {
            const jump = this.preferences.getUserPreference('list_max_entries_per_page') ?? this.systemConfigStore.getConfigValue('list_max_entries_per_page');
            const pagination = this.recordPaginationStore.recordListStore.getPagination();
            const currentPageSize = pagination.pageSize || 0;
            const newPageSize = Number(currentPageSize) + Number(jump);
            this.recordPaginationStore.recordListStore.setPageSize(newPageSize);
            this.recordPaginationStore.recordListStore.updatePagination(pagination.current);
        }
        this.recordPaginationStore.recordListStore.setPage(direction, isPaginationLoadMore).subscribe(data => {
            this.recordPaginationService.updateRecordListLocalStorage(data.records, data.pagination);
            this.recordPaginationStore.loadDataLocalStorage();
            this.isRecordsLoading = false;
            if (this.mode === 'edit' && this.recordViewStore.recordStore.isDirty() && !this.isSaveContinueClicked) {
                this.showConfirmationModal(direction, nextRecordIndex);
            }
            else {
                direction === PageSelection.NEXT ? this.navigateNextRoute(nextRecordIndex) : this.navigatePrevRoute(nextRecordIndex);
            }
        });
    }
    navigateNextRoute(nextRecordIndex) {
        const nextRoute = this.buildRoute(this.recordIds[nextRecordIndex]);
        this.router.navigate([nextRoute], { queryParams: { offset: this.currentIndex + 1 } });
    }
    navigatePrevRoute(nextRecordIndex) {
        const nextRoute = this.buildRoute(this.recordIds[nextRecordIndex]);
        this.router.navigate([nextRoute], { queryParams: { offset: this.currentIndex - 1 } });
    }
    showConfirmationModal(direction, nextRecordIndex) {
        const modal = this.modalService.open(MessageModalComponent);
        modal.componentInstance.textKey = 'WARN_UNSAVED_CHANGES';
        modal.componentInstance.buttons = [
            {
                labelKey: 'LBL_CANCEL',
                klass: ['btn-secondary'],
                onClick: activeModal => activeModal.dismiss()
            },
            {
                labelKey: 'LBL_PROCEED',
                klass: ['btn-main'],
                onClick: activeModal => {
                    direction === PageSelection.NEXT ? this.navigateNextRoute(nextRecordIndex) : this.navigatePrevRoute(nextRecordIndex);
                    activeModal.close();
                }
            }
        ];
    }
    buildRoute(recordId) {
        const module = this.nameMapper.toFrontend(this.recordPaginationStore.getModule()) ?? '';
        const id = recordId.id ?? '';
        const isEdit = this.mode === 'edit';
        return this.navigation.getRecordRouterLink(module, id, isEdit);
    }
    static { this.ɵfac = function RecordPaginationComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RecordPaginationComponent)(i0.ɵɵdirectiveInject(i1.SystemConfigStore), i0.ɵɵdirectiveInject(i2.UserPreferenceStore), i0.ɵɵdirectiveInject(i3.LocalStorageService), i0.ɵɵdirectiveInject(i4.LanguageStore), i0.ɵɵdirectiveInject(i5.ModuleNavigation), i0.ɵɵdirectiveInject(i6.ModuleNameMapper), i0.ɵɵdirectiveInject(i7.RecordViewStore), i0.ɵɵdirectiveInject(i8.RecordPaginationStore), i0.ɵɵdirectiveInject(i9.RecordPaginationService), i0.ɵɵdirectiveInject(i10.ActivatedRoute), i0.ɵɵdirectiveInject(i10.Router), i0.ɵɵdirectiveInject(i11.NgbModal)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RecordPaginationComponent, selectors: [["scrm-record-pagination"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 3, consts: [["class", "record-pagination-container d-flex align-items-center justify-content-end", 4, "ngIf"], [1, "record-pagination-container", "d-flex", "align-items-center", "justify-content-end"], [4, "ngIf"], [3, "config"], [1, "pagination-count"]], template: function RecordPaginationComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, RecordPaginationComponent_div_0_Template, 2, 1, "div", 0);
            i0.ɵɵpipe(1, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.vm$));
        } }, dependencies: [CommonModule, i12.NgIf, i12.AsyncPipe, ButtonModule, i13.ButtonComponent], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordPaginationComponent, [{
        type: Component,
        args: [{ selector: 'scrm-record-pagination', standalone: true, imports: [CommonModule, ButtonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2024 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div class=\"record-pagination-container d-flex align-items-center justify-content-end\" *ngIf=\"(vm$ | async) as vm\">\n    <ng-container *ngIf=\"vm.paginationEnabled\">\n        <scrm-button [config]=\"prevButton\"></scrm-button>\n        <span class=\"pagination-count\">\n            {{currentIndex}} {{vm.appStrings['LBL_LIST_OF'] || ''}} {{vm.pageCount.total}}\n        </span>\n        <scrm-button [config]=\"nextButton\"></scrm-button>\n    </ng-container>\n</div>\n" }]
    }], () => [{ type: i1.SystemConfigStore }, { type: i2.UserPreferenceStore }, { type: i3.LocalStorageService }, { type: i4.LanguageStore }, { type: i5.ModuleNavigation }, { type: i6.ModuleNameMapper }, { type: i7.RecordViewStore }, { type: i8.RecordPaginationStore }, { type: i9.RecordPaginationService }, { type: i10.ActivatedRoute }, { type: i10.Router }, { type: i11.NgbModal }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RecordPaginationComponent, { className: "RecordPaginationComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLXBhZ2luYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3ZpZXdzL3JlY29yZC9jb21wb25lbnRzL3JlY29yZC1wYWdpbmF0aW9uL3JlY29yZC1wYWdpbmF0aW9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi92aWV3cy9yZWNvcmQvY29tcG9uZW50cy9yZWNvcmQtcGFnaW5hdGlvbi9yZWNvcmQtcGFnaW5hdGlvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDcEYsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxjQUFjLEVBQUUsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGlCQUFpQixFQUEyQixNQUFNLE1BQU0sQ0FBQztBQUNqRSxPQUFPLEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQ25DLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLCtFQUErRSxDQUFDO0FBQ3BILE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDZFQUE2RSxDQUFDO0FBQzdHLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLCtFQUErRSxDQUFDO0FBQy9HLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHlEQUF5RCxDQUFDO0FBQzVGLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLDBEQUEwRCxD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QW1CLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNuRSxDQUFDOzBIQTlPUSx5QkFBeUI7b0VBQXpCLHlCQUF5QjtZQ3RDdEMsMEVBQW1IOzs7WUFBM0Isb0RBQW9COzRCRGtDOUYsWUFBWSwyQkFBRSxZQUFZOztpRkFJM0IseUJBQXlCO2NBVHJDLFNBQVM7MkJBQ0ksd0JBQXdCLGNBR3RCLElBQUksV0FDUCxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsbUJBQ3BCLHVCQUF1QixDQUFDLE1BQU07O2tGQUd0Qyx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyNCBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFJvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtjb21iaW5lTGF0ZXN0V2l0aCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtmaWx0ZXIsIG1hcCwgdGFwfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7dG9OdW1iZXJ9IGZyb20gXCJsb2Rhc2gtZXNcIjtcbmltcG9ydCB7TWVzc2FnZU1vZGFsQ29tcG9uZW50fSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9tb2RhbC9jb21wb25lbnRzL21lc3NhZ2UtbW9kYWwvbWVzc2FnZS1tb2RhbC5jb21wb25lbnRcIjtcbmltcG9ydCB7TW9kdWxlTmF2aWdhdGlvbn0gZnJvbSBcIi4uLy4uLy4uLy4uL3NlcnZpY2VzL25hdmlnYXRpb24vbW9kdWxlLW5hdmlnYXRpb24vbW9kdWxlLW5hdmlnYXRpb24uc2VydmljZVwiO1xuaW1wb3J0IHtNb2R1bGVOYW1lTWFwcGVyfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZXMvbmF2aWdhdGlvbi9tb2R1bGUtbmFtZS1tYXBwZXIvbW9kdWxlLW5hbWUtbWFwcGVyLnNlcnZpY2VcIjtcbmltcG9ydCB7VXNlclByZWZlcmVuY2VTdG9yZX0gZnJvbSBcIi4uLy4uLy4uLy4uL3N0b3JlL3VzZXItcHJlZmVyZW5jZS91c2VyLXByZWZlcmVuY2Uuc3RvcmVcIjtcbmltcG9ydCB7TG9jYWxTdG9yYWdlU2VydmljZX0gZnJvbSBcIi4uLy4uLy4uLy4uL3NlcnZpY2VzL2xvY2FsLXN0b3JhZ2UvbG9jYWwtc3RvcmFnZS5zZXJ2aWNlXCI7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmUsIExhbmd1YWdlU3RyaW5nTWFwfSBmcm9tIFwiLi4vLi4vLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmVcIjtcbmltcG9ydCB7U3lzdGVtQ29uZmlnU3RvcmV9IGZyb20gXCIuLi8uLi8uLi8uLi9zdG9yZS9zeXN0ZW0tY29uZmlnL3N5c3RlbS1jb25maWcuc3RvcmVcIjtcbmltcG9ydCB7UmVjb3JkVmlld1N0b3JlfSBmcm9tIFwiLi4vLi4vc3RvcmUvcmVjb3JkLXZpZXcvcmVjb3JkLXZpZXcuc3RvcmVcIjtcbmltcG9ydCB7UmVjb3JkUGFnaW5hdGlvblNlcnZpY2V9IGZyb20gXCIuLi8uLi9zdG9yZS9yZWNvcmQtcGFnaW5hdGlvbi9yZWNvcmQtcGFnaW5hdGlvbi5zZXJ2aWNlXCI7XG5pbXBvcnQge1JlY29yZFBhZ2luYXRpb25TdG9yZX0gZnJvbSBcIi4uLy4uL3N0b3JlL3JlY29yZC1wYWdpbmF0aW9uL3JlY29yZC1wYWdpbmF0aW9uLnN0b3JlXCI7XG5pbXBvcnQge05nYk1vZGFsfSBmcm9tIFwiQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXBcIjtcbmltcG9ydCB7QnV0dG9uTW9kdWxlfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9idXR0b24vYnV0dG9uLm1vZHVsZVwiO1xuaW1wb3J0IHtQYWdlU2VsZWN0aW9uLCBQYWdpbmF0aW9uQ291bnQsIFBhZ2luYXRpb25UeXBlfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3ZpZXdzL2xpc3QvbGlzdC1uYXZpZ2F0aW9uLm1vZGVsXCI7XG5pbXBvcnQge1ZpZXdNb2RlfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3ZpZXdzL3ZpZXcubW9kZWxcIjtcbmltcG9ydCB7T2JqZWN0TWFwfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3R5cGVzL29iamVjdC1tYXBcIjtcbmltcG9ydCB7QnV0dG9uSW50ZXJmYWNlfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5tb2RlbFwiO1xuaW1wb3J0IHtNb2RhbEJ1dHRvbkludGVyZmFjZX0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9jb21wb25lbnRzL21vZGFsL21vZGFsLm1vZGVsXCI7XG5cbmludGVyZmFjZSBSZWNvcmRQYWdpbmF0aW9uVmlld01vZGVsIHtcbiAgICBhcHBTdHJpbmdzOiBMYW5ndWFnZVN0cmluZ01hcDtcbiAgICBwYWdlQ291bnQ6IFBhZ2luYXRpb25Db3VudDtcbiAgICBwYWdpbmF0aW9uRW5hYmxlZDogYm9vbGVhbjtcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLXJlY29yZC1wYWdpbmF0aW9uJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcmVjb3JkLXBhZ2luYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlczogW10sXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBCdXR0b25Nb2R1bGVdLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcblxuZXhwb3J0IGNsYXNzIFJlY29yZFBhZ2luYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBjdXJyZW50SW5kZXg6IG51bWJlciA9IDE7XG4gICAgY3VycmVudFBhZ2U6IG51bWJlciA9IDE7XG4gICAgcGFnZVNpemU6IG51bWJlciA9IDIwO1xuICAgIHRvdGFsUmVjb3Jkc0NvdW50OiBudW1iZXIgPSAwO1xuICAgIGlzUmVjb3Jkc0xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc1NhdmVDb250aW51ZUNsaWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBtb2RlOiBWaWV3TW9kZSA9ICdkZXRhaWwnIGFzIFZpZXdNb2RlO1xuICAgIHBhZ2luYXRpb25UeXBlOiBzdHJpbmcgPSBQYWdpbmF0aW9uVHlwZS5QQUdJTkFUSU9OO1xuICAgIHJlY29yZElkczogT2JqZWN0TWFwW107XG4gICAgc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICAgIHByZXZCdXR0b246IEJ1dHRvbkludGVyZmFjZSA9IG51bGw7XG4gICAgbmV4dEJ1dHRvbjogQnV0dG9uSW50ZXJmYWNlID0gbnVsbDtcblxuICAgIGFwcFN0cmluZ3MkOiBPYnNlcnZhYmxlPExhbmd1YWdlU3RyaW5nTWFwPiA9IHRoaXMubGFuZ3VhZ2VTdG9yZS5hcHBTdHJpbmdzJDtcbiAgICByZWNvcmRJZHMkOiBPYnNlcnZhYmxlPE9iamVjdE1hcFtdPiA9IHRoaXMucmVjb3JkUGFnaW5hdGlvblN0b3JlLnJlY29yZElkcyQ7XG4gICAgbW9kZSQ6IE9ic2VydmFibGU8Vmlld01vZGU+ID0gdGhpcy5yZWNvcmRWaWV3U3RvcmUubW9kZSQ7XG4gICAgdm0kOiBPYnNlcnZhYmxlPFJlY29yZFBhZ2luYXRpb25WaWV3TW9kZWw+ID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHN5c3RlbUNvbmZpZ1N0b3JlOiBTeXN0ZW1Db25maWdTdG9yZSxcbiAgICAgICAgcHJpdmF0ZSBwcmVmZXJlbmNlczogVXNlclByZWZlcmVuY2VTdG9yZSxcbiAgICAgICAgcHJpdmF0ZSBsb2NhbFN0b3JhZ2VTZXJ2aWNlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGxhbmd1YWdlU3RvcmU6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByaXZhdGUgbmF2aWdhdGlvbjogTW9kdWxlTmF2aWdhdGlvbixcbiAgICAgICAgcHJpdmF0ZSBuYW1lTWFwcGVyOiBNb2R1bGVOYW1lTWFwcGVyLFxuICAgICAgICBwcml2YXRlIHJlY29yZFZpZXdTdG9yZTogUmVjb3JkVmlld1N0b3JlLFxuICAgICAgICBwcml2YXRlIHJlY29yZFBhZ2luYXRpb25TdG9yZTogUmVjb3JkUGFnaW5hdGlvblN0b3JlLFxuICAgICAgICBwcml2YXRlIHJlY29yZFBhZ2luYXRpb25TZXJ2aWNlOiBSZWNvcmRQYWdpbmF0aW9uU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBOZ2JNb2RhbFxuICAgICkge1xuICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1NYXBcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHBhcmFtczogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSB0b051bWJlcihwYXJhbXMuZ2V0KCdvZmZzZXQnKSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlY29yZFBhZ2luYXRpb25TdG9yZS5pbml0KCk7XG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSB0aGlzLnJlY29yZFBhZ2luYXRpb25TdG9yZS5nZXRDdXJyZW50UGFnZSgpO1xuICAgICAgICB0aGlzLnBhZ2VTaXplID0gdGhpcy5yZWNvcmRQYWdpbmF0aW9uU3RvcmUuZ2V0UGFnZVNpemUoKTtcbiAgICAgICAgdGhpcy50b3RhbFJlY29yZHNDb3VudCA9IHRoaXMucmVjb3JkUGFnaW5hdGlvblN0b3JlLmdldFJlY29yZHNDb3VudCgpO1xuICAgICAgICB0aGlzLnBhZ2luYXRpb25UeXBlID0gdGhpcy5wcmVmZXJlbmNlcy5nZXRVc2VyUHJlZmVyZW5jZSgnbGlzdHZpZXdfcGFnaW5hdGlvbl90eXBlJykgPz8gdGhpcy5zeXN0ZW1Db25maWdTdG9yZS5nZXRDb25maWdWYWx1ZSgnbGlzdHZpZXdfcGFnaW5hdGlvbl90eXBlJyk7XG4gICAgICAgIHRoaXMucmVjb3JkUGFnaW5hdGlvblNlcnZpY2UucGFnaW5hdGlvblR5cGUgPSB0aGlzLnBhZ2luYXRpb25UeXBlO1xuICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLm1vZGUkLnN1YnNjcmliZShtb2RlID0+IHtcbiAgICAgICAgICAgIHRoaXMubW9kZSA9IG1vZGU7XG4gICAgICAgIH0pKTtcblxuICAgICAgICB0aGlzLnByZXZCdXR0b24gPSB7XG4gICAgICAgICAgICBrbGFzczoge1xuICAgICAgICAgICAgICAgICdyZWNvcmQtcGFnaW5hdGlvbi1idXR0b24nOiB0cnVlLFxuICAgICAgICAgICAgICAgICdwYWdpbmF0aW9uLXByZXZpb3VzJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogdGhpcy5jdXJyZW50SW5kZXggPT09IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpY29uOiAncGFnaW5hdGVfcHJldmlvdXMnLFxuICAgICAgICAgICAgaWNvbktsYXNzOiAnc2ljb24tMngnLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IHRoaXMuY3VycmVudEluZGV4ID09PSAxIHx8IHRoaXMuaXNSZWNvcmRzTG9hZGluZyxcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMucHJldlJlY29yZCgpXG4gICAgICAgIH0gYXMgQnV0dG9uSW50ZXJmYWNlO1xuXG4gICAgICAgIHRoaXMubmV4dEJ1dHRvbiA9IHtcbiAgICAgICAgICAgIGtsYXNzOiB7XG4gICAgICAgICAgICAgICAgJ3JlY29yZC1wYWdpbmF0aW9uLWJ1dHRvbic6IHRydWUsXG4gICAgICAgICAgICAgICAgJ3BhZ2luYXRpb24tbmV4dCc6IHRydWUsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRoaXMuY3VycmVudEluZGV4ID09PSB0aGlzLnRvdGFsUmVjb3Jkc0NvdW50XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaWNvbjogJ3BhZ2luYXRlX25leHQnLFxuICAgICAgICAgICAgaWNvbktsYXNzOiAnc2ljb24tMngnLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IHRoaXMuY3VycmVudEluZGV4ID09PSB0aGlzLnRvdGFsUmVjb3Jkc0NvdW50IHx8IHRoaXMuaXNSZWNvcmRzTG9hZGluZyxcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMubmV4dFJlY29yZCgpXG4gICAgICAgIH0gYXMgQnV0dG9uSW50ZXJmYWNlO1xuXG4gICAgICAgIHRoaXMudm0kID0gdGhpcy5hcHBTdHJpbmdzJC5waXBlKFxuICAgICAgICAgICAgY29tYmluZUxhdGVzdFdpdGgodGhpcy5yZWNvcmRQYWdpbmF0aW9uU3RvcmUucGFnaW5hdGlvbiQsIHRoaXMucmVjb3JkUGFnaW5hdGlvblN0b3JlLnBhZ2luYXRpb25FbmFibGVkJCksXG4gICAgICAgICAgICBtYXAoKFthcHBTdHJpbmdzLCBwYWdlQ291bnQsIHBhZ2luYXRpb25FbmFibGVkXTogW0xhbmd1YWdlU3RyaW5nTWFwLCBQYWdpbmF0aW9uQ291bnQsIGJvb2xlYW5dKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbW9kdWxlID0gdGhpcy5uYW1lTWFwcGVyLnRvRnJvbnRlbmQodGhpcy5yZWNvcmRQYWdpbmF0aW9uU3RvcmUuZ2V0TW9kdWxlKCkpID8/ICcnO1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IG1vZHVsZSArICctJyArICdyZWNvcmR2aWV3LWN1cnJlbnQtcmVjb3JkLXBhZ2luYXRpb24nO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzUmVjb3JkUGFnaW5hdGlvbkV4aXN0ID0gdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldChrZXkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzUmVjb3JkVmFsaWQgPSB0aGlzLnJlY29yZFBhZ2luYXRpb25TZXJ2aWNlLmNoZWNrUmVjb3JkVmFsaWQodGhpcy5yZWNvcmRWaWV3U3RvcmUuZ2V0UmVjb3JkSWQoKSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWlzUmVjb3JkUGFnaW5hdGlvbkV4aXN0IHx8ICFpc1JlY29yZFZhbGlkIHx8ICh0aGlzLmN1cnJlbnRJbmRleCA+IHRoaXMudG90YWxSZWNvcmRzQ291bnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb25FbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucHJldkJ1dHRvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5wcmV2QnV0dG9uLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZUtleTogYXBwU3RyaW5nc1snTEJMX1NFQVJDSF9QUkVWJ10gfHwgJydcbiAgICAgICAgICAgICAgICB9IGFzIEJ1dHRvbkludGVyZmFjZTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRCdXR0b24gPSB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMubmV4dEJ1dHRvbixcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVLZXk6IGFwcFN0cmluZ3NbJ0xCTF9TRUFSQ0hfTkVYVCddIHx8ICcnXG4gICAgICAgICAgICAgICAgfSBhcyBCdXR0b25JbnRlcmZhY2U7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge2FwcFN0cmluZ3MsIHBhZ2VDb3VudCwgcGFnaW5hdGlvbkVuYWJsZWR9O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLnJlY29yZElkcyQuc3Vic2NyaWJlKHJlY29yZElkcyA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlY29yZElkcyA9IHJlY29yZElkcztcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMucmVjb3JkUGFnaW5hdGlvblNlcnZpY2UubmV4dFJlY29yZCQucGlwZShcbiAgICAgICAgICAgIGZpbHRlcihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgdGFwKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1NhdmVDb250aW51ZUNsaWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dFJlY29yZCgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNTYXZlQ29udGludWVDbGlja2VkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnJlY29yZFBhZ2luYXRpb25TZXJ2aWNlLnRyaWdnZXJOZXh0UmVjb3JkKGZhbHNlKTtcblxuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3Vicy5mb3JFYWNoKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XG4gICAgICAgIHRoaXMucmVjb3JkUGFnaW5hdGlvblN0b3JlLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHByZXZSZWNvcmQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRJbmRleCA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbmV4dFJlY29yZEluZGV4ID0gKHRoaXMuY3VycmVudEluZGV4IC0gMikgJSB0aGlzLnBhZ2VTaXplO1xuICAgICAgICBsZXQgbmV4dFBhZ2VUaHJlc2hvbGQgPSB0aGlzLmN1cnJlbnRJbmRleCAtICgodGhpcy5jdXJyZW50UGFnZSAtIDEpICogdGhpcy5wYWdlU2l6ZSkgLSAxO1xuXG4gICAgICAgIGlmIChuZXh0UGFnZVRocmVzaG9sZCA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRQYWdlKFBhZ2VTZWxlY3Rpb24uUFJFVklPVVMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMubW9kZSA9PT0gJ2VkaXQnICYmIHRoaXMucmVjb3JkVmlld1N0b3JlLnJlY29yZFN0b3JlLmlzRGlydHkoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvbmZpcm1hdGlvbk1vZGFsKFBhZ2VTZWxlY3Rpb24uUFJFVklPVVMsIG5leHRSZWNvcmRJbmRleCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVQcmV2Um91dGUobmV4dFJlY29yZEluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBuZXh0UmVjb3JkKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50SW5kZXggPj0gdGhpcy50b3RhbFJlY29yZHNDb3VudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG5leHRSZWNvcmRJbmRleCA9IHRoaXMuY3VycmVudEluZGV4ICUgdGhpcy5wYWdlU2l6ZTtcbiAgICAgICAgbGV0IG5leHRQYWdlVGhyZXNob2xkID0gdGhpcy5jdXJyZW50SW5kZXggLSAoKHRoaXMuY3VycmVudFBhZ2UgLSAxKSAqIHRoaXMucGFnZVNpemUpO1xuXG4gICAgICAgIGlmIChuZXh0UGFnZVRocmVzaG9sZCA+IHRoaXMucmVjb3JkSWRzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZFBhZ2UoUGFnZVNlbGVjdGlvbi5ORVhUKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm1vZGUgPT09ICdlZGl0JyAmJiB0aGlzLnJlY29yZFZpZXdTdG9yZS5yZWNvcmRTdG9yZS5pc0RpcnR5KCkgJiYgIXRoaXMuaXNTYXZlQ29udGludWVDbGlja2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q29uZmlybWF0aW9uTW9kYWwoUGFnZVNlbGVjdGlvbi5ORVhULCBuZXh0UmVjb3JkSW5kZXgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlTmV4dFJvdXRlKG5leHRSZWNvcmRJbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbG9hZFBhZ2UoZGlyZWN0aW9uOiBQYWdlU2VsZWN0aW9uKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXNSZWNvcmRzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGxldCBuZXh0UmVjb3JkSW5kZXggPSAwO1xuICAgICAgICBsZXQgaXNQYWdpbmF0aW9uTG9hZE1vcmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMucGFnaW5hdGlvblR5cGUgPT09IFBhZ2luYXRpb25UeXBlLkxPQURfTU9SRSkge1xuICAgICAgICAgICAgaXNQYWdpbmF0aW9uTG9hZE1vcmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09IFBhZ2VTZWxlY3Rpb24uUFJFVklPVVMpIHtcbiAgICAgICAgICAgIG5leHRSZWNvcmRJbmRleCA9IHRoaXMucGFnZVNpemUgLSAxO1xuICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gUGFnZVNlbGVjdGlvbi5ORVhUICYmIGlzUGFnaW5hdGlvbkxvYWRNb3JlKSB7XG4gICAgICAgICAgICBuZXh0UmVjb3JkSW5kZXggPSB0aGlzLmN1cnJlbnRJbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1BhZ2luYXRpb25Mb2FkTW9yZSAmJiBkaXJlY3Rpb24gIT09IFBhZ2VTZWxlY3Rpb24uUFJFVklPVVMpIHtcbiAgICAgICAgICAgIGNvbnN0IGp1bXAgPSB0aGlzLnByZWZlcmVuY2VzLmdldFVzZXJQcmVmZXJlbmNlKCdsaXN0X21heF9lbnRyaWVzX3Blcl9wYWdlJykgPz8gdGhpcy5zeXN0ZW1Db25maWdTdG9yZS5nZXRDb25maWdWYWx1ZSgnbGlzdF9tYXhfZW50cmllc19wZXJfcGFnZScpO1xuICAgICAgICAgICAgY29uc3QgcGFnaW5hdGlvbiA9IHRoaXMucmVjb3JkUGFnaW5hdGlvblN0b3JlLnJlY29yZExpc3RTdG9yZS5nZXRQYWdpbmF0aW9uKCk7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UGFnZVNpemUgPSBwYWdpbmF0aW9uLnBhZ2VTaXplIHx8IDA7XG4gICAgICAgICAgICBjb25zdCBuZXdQYWdlU2l6ZSA9IE51bWJlcihjdXJyZW50UGFnZVNpemUpICsgTnVtYmVyKGp1bXApO1xuXG4gICAgICAgICAgICB0aGlzLnJlY29yZFBhZ2luYXRpb25TdG9yZS5yZWNvcmRMaXN0U3RvcmUuc2V0UGFnZVNpemUobmV3UGFnZVNpemUpO1xuICAgICAgICAgICAgdGhpcy5yZWNvcmRQYWdpbmF0aW9uU3RvcmUucmVjb3JkTGlzdFN0b3JlLnVwZGF0ZVBhZ2luYXRpb24ocGFnaW5hdGlvbi5jdXJyZW50KTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgdGhpcy5yZWNvcmRQYWdpbmF0aW9uU3RvcmUucmVjb3JkTGlzdFN0b3JlLnNldFBhZ2UoZGlyZWN0aW9uIGFzIFBhZ2VTZWxlY3Rpb24sIGlzUGFnaW5hdGlvbkxvYWRNb3JlKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlY29yZFBhZ2luYXRpb25TZXJ2aWNlLnVwZGF0ZVJlY29yZExpc3RMb2NhbFN0b3JhZ2UoZGF0YS5yZWNvcmRzLCBkYXRhLnBhZ2luYXRpb24pO1xuICAgICAgICAgICAgdGhpcy5yZWNvcmRQYWdpbmF0aW9uU3RvcmUubG9hZERhdGFMb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgICAgIHRoaXMuaXNSZWNvcmRzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHRoaXMubW9kZSA9PT0gJ2VkaXQnICYmIHRoaXMucmVjb3JkVmlld1N0b3JlLnJlY29yZFN0b3JlLmlzRGlydHkoKSAmJiAhdGhpcy5pc1NhdmVDb250aW51ZUNsaWNrZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDb25maXJtYXRpb25Nb2RhbChkaXJlY3Rpb24sIG5leHRSZWNvcmRJbmRleCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9PT0gUGFnZVNlbGVjdGlvbi5ORVhUID8gdGhpcy5uYXZpZ2F0ZU5leHRSb3V0ZShuZXh0UmVjb3JkSW5kZXgpIDogdGhpcy5uYXZpZ2F0ZVByZXZSb3V0ZShuZXh0UmVjb3JkSW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbmF2aWdhdGVOZXh0Um91dGUobmV4dFJlY29yZEluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbmV4dFJvdXRlID0gdGhpcy5idWlsZFJvdXRlKHRoaXMucmVjb3JkSWRzW25leHRSZWNvcmRJbmRleF0pO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbbmV4dFJvdXRlXSwge3F1ZXJ5UGFyYW1zOiB7b2Zmc2V0OiB0aGlzLmN1cnJlbnRJbmRleCArIDF9fSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG5hdmlnYXRlUHJldlJvdXRlKG5leHRSZWNvcmRJbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG5leHRSb3V0ZSA9IHRoaXMuYnVpbGRSb3V0ZSh0aGlzLnJlY29yZElkc1tuZXh0UmVjb3JkSW5kZXhdKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW25leHRSb3V0ZV0sIHtxdWVyeVBhcmFtczoge29mZnNldDogdGhpcy5jdXJyZW50SW5kZXggLSAxfX0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzaG93Q29uZmlybWF0aW9uTW9kYWwoZGlyZWN0aW9uOiBQYWdlU2VsZWN0aW9uLCBuZXh0UmVjb3JkSW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCBtb2RhbCA9IHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oTWVzc2FnZU1vZGFsQ29tcG9uZW50KTtcblxuICAgICAgICBtb2RhbC5jb21wb25lbnRJbnN0YW5jZS50ZXh0S2V5ID0gJ1dBUk5fVU5TQVZFRF9DSEFOR0VTJztcbiAgICAgICAgbW9kYWwuY29tcG9uZW50SW5zdGFuY2UuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsYWJlbEtleTogJ0xCTF9DQU5DRUwnLFxuICAgICAgICAgICAgICAgIGtsYXNzOiBbJ2J0bi1zZWNvbmRhcnknXSxcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiBhY3RpdmVNb2RhbCA9PiBhY3RpdmVNb2RhbC5kaXNtaXNzKClcbiAgICAgICAgICAgIH0gYXMgTW9kYWxCdXR0b25JbnRlcmZhY2UsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWxLZXk6ICdMQkxfUFJPQ0VFRCcsXG4gICAgICAgICAgICAgICAga2xhc3M6IFsnYnRuLW1haW4nXSxcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiBhY3RpdmVNb2RhbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9PT0gUGFnZVNlbGVjdGlvbi5ORVhUID8gdGhpcy5uYXZpZ2F0ZU5leHRSb3V0ZShuZXh0UmVjb3JkSW5kZXgpIDogdGhpcy5uYXZpZ2F0ZVByZXZSb3V0ZShuZXh0UmVjb3JkSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmVNb2RhbC5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gYXMgTW9kYWxCdXR0b25JbnRlcmZhY2VcbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYnVpbGRSb3V0ZShyZWNvcmRJZDogT2JqZWN0TWFwKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgbW9kdWxlID0gdGhpcy5uYW1lTWFwcGVyLnRvRnJvbnRlbmQodGhpcy5yZWNvcmRQYWdpbmF0aW9uU3RvcmUuZ2V0TW9kdWxlKCkpID8/ICcnO1xuICAgICAgICBjb25zdCBpZCA9IHJlY29yZElkLmlkID8/ICcnO1xuICAgICAgICBjb25zdCBpc0VkaXQgPSB0aGlzLm1vZGUgPT09ICdlZGl0JztcbiAgICAgICAgcmV0dXJuIHRoaXMubmF2aWdhdGlvbi5nZXRSZWNvcmRSb3V0ZXJMaW5rKG1vZHVsZSwgaWQsIGlzRWRpdCk7XG4gICAgfVxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyNCBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPGRpdiBjbGFzcz1cInJlY29yZC1wYWdpbmF0aW9uLWNvbnRhaW5lciBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1lbmRcIiAqbmdJZj1cIih2bSQgfCBhc3luYykgYXMgdm1cIj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidm0ucGFnaW5hdGlvbkVuYWJsZWRcIj5cbiAgICAgICAgPHNjcm0tYnV0dG9uIFtjb25maWddPVwicHJldkJ1dHRvblwiPjwvc2NybS1idXR0b24+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwicGFnaW5hdGlvbi1jb3VudFwiPlxuICAgICAgICAgICAge3tjdXJyZW50SW5kZXh9fSB7e3ZtLmFwcFN0cmluZ3NbJ0xCTF9MSVNUX09GJ10gfHwgJyd9fSB7e3ZtLnBhZ2VDb3VudC50b3RhbH19XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNjcm0tYnV0dG9uIFtjb25maWddPVwibmV4dEJ1dHRvblwiPjwvc2NybS1idXR0b24+XG4gICAgPC9uZy1jb250YWluZXI+XG48L2Rpdj5cbiJdfQ==