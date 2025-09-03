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
import { Component, HostListener } from '@angular/core';
import { RecordViewStore } from '../../store/record-view/record-view.store';
import { ModuleNavigation } from '../../../../services/navigation/module-navigation/module-navigation.service';
import { RecordActionsAdapter } from '../../adapters/actions.adapter';
import { AppStateStore } from "../../../../store/app-state/app-state.store";
import { Router } from "@angular/router";
import * as i0 from "@angular/core";
import * as i1 from "../../adapters/actions.adapter";
import * as i2 from "../../store/record-view/record-view.store";
import * as i3 from "../../../../services/navigation/module-navigation/module-navigation.service";
import * as i4 from "../../../../store/app-state/app-state.store";
import * as i5 from "@angular/router";
import * as i6 from "@angular/common";
import * as i7 from "../../../../components/module-title/module-title.component";
import * as i8 from "../../../../components/dynamic-label/dynamic-label.component";
import * as i9 from "../../../../components/action-group-menu/action-group-menu.component";
import * as i10 from "../../../../containers/favorite-toggle/components/favorite-toggle/favorite-toggle.component";
import * as i11 from "../../../../components/button/button.component";
function RecordHeaderComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3)(1, "div", 4);
    i0.ɵɵelement(2, "scrm-module-title", 5)(3, "div", 6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("title", ctx_r0.moduleTitle);
} }
function RecordHeaderComponent_div_3_div_3_scrm_button_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-button", 20);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("config", ctx_r0.backButtonConfig);
} }
function RecordHeaderComponent_div_3_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵtemplate(1, RecordHeaderComponent_div_3_div_3_scrm_button_1_Template, 1, 1, "scrm-button", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.backButtonConfig);
} }
function RecordHeaderComponent_div_3_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵelement(1, "scrm-favorite-toggle", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("record", ctx_r0.record);
} }
function RecordHeaderComponent_div_3_scrm_dynamic_label_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-dynamic-label", 23);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("fields", ctx_r0.record.fields)("labelKey", ctx_r0.getSummaryTemplate());
} }
function RecordHeaderComponent_div_3_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 24);
    i0.ɵɵelement(1, "scrm-action-group-menu", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("config", ctx_r0.actionsAdapter)("actionContext", ctx_r0.getActionContext(ctx_r0.record))("klass", ctx_r0.isScrolled ? "record-view-actions-scrolled float-right" : "record-view-actions float-right");
} }
function RecordHeaderComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7)(1, "div", 8)(2, "div", 9);
    i0.ɵɵtemplate(3, RecordHeaderComponent_div_3_div_3_Template, 2, 1, "div", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 11)(5, "div", 12);
    i0.ɵɵtemplate(6, RecordHeaderComponent_div_3_div_6_Template, 2, 1, "div", 13)(7, RecordHeaderComponent_div_3_scrm_dynamic_label_7_Template, 1, 2, "scrm-dynamic-label", 14);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "div", 15)(9, "div", 16);
    i0.ɵɵtemplate(10, RecordHeaderComponent_div_3_div_10_Template, 2, 3, "div", 17);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.mode === "detail" || ctx_r0.mode === "edit");
    i0.ɵɵadvance();
    i0.ɵɵclassProp("justify-content-center", ctx_r0.mode === "detail" || ctx_r0.mode === "edit")("justify-content-start", !(ctx_r0.mode === "detail" || ctx_r0.mode === "edit"))("record-view-name-wrapper-margin-left", ctx_r0.mode === "detail" || ctx_r0.mode === "edit");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r0.isScrolled ? "record-view-name-scrolled" : "record-view-name");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.record && ctx_r0.record.fields && ctx_r0.mode !== "create");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.record && ctx_r0.record.fields);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.record);
} }
export class RecordHeaderComponent {
    onScroll() {
        const scrollPosition = window.pageYOffset;
        //ScrollThreshold is set to 1em
        const scrollThreshold = parseFloat(getComputedStyle(document.documentElement).fontSize);
        if (scrollPosition > scrollThreshold) {
            //5 is just a random safezone number
            if (scrollPosition - scrollThreshold < 5)
                return;
            this.isScrolled = true;
        }
        else {
            if (scrollThreshold - scrollPosition < 5)
                return;
            this.isScrolled = false;
        }
    }
    constructor(actionsAdapter, recordViewStore, moduleNavigation, appState, router) {
        this.actionsAdapter = actionsAdapter;
        this.recordViewStore = recordViewStore;
        this.moduleNavigation = moduleNavigation;
        this.appState = appState;
        this.router = router;
        this.mode = 'detail';
        this.loading = true;
        this.isScrolled = false;
        this.subs = [];
    }
    ngOnInit() {
        this.mode = this.recordViewStore.getMode();
        this.setBackButtonConfig();
        this.subs.push(this.recordViewStore.mode$.subscribe(mode => {
            this.mode = mode;
        }));
        this.subs.push(this.recordViewStore.record$.subscribe(record => {
            this.record = record;
        }));
        this.subs.push(this.recordViewStore.loading$.subscribe(loading => {
            this.loading = loading;
        }));
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    get moduleTitle() {
        const module = this.recordViewStore.vm.appData.module;
        const appListStrings = this.recordViewStore.vm.appData.language.appListStrings;
        return this.moduleNavigation.getModuleLabel(module, appListStrings);
    }
    /**
     * Get Summary template
     *
     * @returns {string} template label
     */
    getSummaryTemplate() {
        return this.recordViewStore.getSummaryTemplate();
    }
    /**
     * Build action context
     * @param record
     */
    getActionContext(record) {
        if (!record) {
            return {};
        }
        return {
            module: record.module || '',
            record
        };
    }
    setBackButtonConfig() {
        const moduleRoute = this.moduleNavigation.getModuleRoute(this.recordViewStore.vm.appData.module);
        this.backButtonConfig = {
            icon: 'paginate_previous',
            klass: 'back-button',
            onClick: () => {
                this.router.navigate([moduleRoute.route], { queryParams: { keepPagination: true } }).then();
            }
        };
    }
    static { this.ɵfac = function RecordHeaderComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RecordHeaderComponent)(i0.ɵɵdirectiveInject(i1.RecordActionsAdapter), i0.ɵɵdirectiveInject(i2.RecordViewStore), i0.ɵɵdirectiveInject(i3.ModuleNavigation), i0.ɵɵdirectiveInject(i4.AppStateStore), i0.ɵɵdirectiveInject(i5.Router)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RecordHeaderComponent, selectors: [["scrm-record-header"]], hostBindings: function RecordHeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("scroll", function RecordHeaderComponent_scroll_HostBindingHandler() { return ctx.onScroll(); }, false, i0.ɵɵresolveWindow);
        } }, decls: 4, vars: 3, consts: [[1, "record-view-header", 3, "ngClass"], ["class", "row mr-0", 4, "ngIf"], ["class", "row m-0 d-flex justify-content-between ml-1 mr-1", 4, "ngIf"], [1, "row", "mr-0"], [1, "col-md-4", "d-flex", "align-items-center"], [1, "record-view-title", "title-font", 3, "title"], [1, "record-view-name", "pt-3", "pb-3"], [1, "row", "m-0", "d-flex", "justify-content-between", "ml-1", "mr-1"], [1, "col-xs-12", "col-sm-12", "col-md-5", "col-lg-6", "col-xl-7", "record-name-container"], [1, "float-left", "p-0"], ["class", "d-flex record-view-back-button justify-content-start", 4, "ngIf"], [1, "record-view-name-wrapper", "d-flex", "justify-content-md-start", "align-items-center"], [1, "p-0", "d-inline-block", 3, "ngClass"], ["class", "float-right align-items-top d-flex", 4, "ngIf"], ["class", "record-view-name-label d-block p-0 lh-100", 3, "fields", "labelKey", 4, "ngIf"], [1, "col-xs-12", "col-sm-12", "col-md-7", "col-lg-6", "col-xl-5", "align-items-center", "record-view-action-header"], [1, "row", "mr-1", "ml-1", "justify-content-center", "justify-content-md-end"], ["class", "", 4, "ngIf"], [1, "d-flex", "record-view-back-button", "justify-content-start"], [3, "config", 4, "ngIf"], [3, "config"], [1, "float-right", "align-items-top", "d-flex"], [1, "h-100", "lh-100", 3, "record"], [1, "record-view-name-label", "d-block", "p-0", "lh-100", 3, "fields", "labelKey"], [1, ""], ["buttonClass", "settings-button", 3, "config", "actionContext", "klass"]], template: function RecordHeaderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "div", 0);
            i0.ɵɵtemplate(2, RecordHeaderComponent_div_2_Template, 4, 1, "div", 1)(3, RecordHeaderComponent_div_3_Template, 11, 11, "div", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", ctx.isScrolled ? "record-view-header-scrolled shadow-md" : "");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.loading);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.loading);
        } }, dependencies: [i6.NgClass, i6.NgIf, i7.ModuleTitleComponent, i8.DynamicLabelComponent, i9.ActionGroupMenuComponent, i10.FavoriteToggleComponent, i11.ButtonComponent], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordHeaderComponent, [{
        type: Component,
        args: [{ selector: 'scrm-record-header', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container>\n    <div [ngClass]=\"isScrolled ? 'record-view-header-scrolled shadow-md': ''\" class=\"record-view-header\">\n        <div *ngIf=\"loading\" class=\"row mr-0\">\n            <div class=\"col-md-4 d-flex align-items-center\">\n                <scrm-module-title [title]=\"moduleTitle\" class=\"record-view-title title-font\"></scrm-module-title>\n                <div class=\"record-view-name pt-3 pb-3\"></div>\n            </div>\n        </div>\n        <div *ngIf=\"!loading\" class=\"row m-0 d-flex justify-content-between ml-1 mr-1\">\n            <div class=\"col-xs-12 col-sm-12 col-md-5 col-lg-6 col-xl-7 record-name-container\">\n                <div class=\"float-left p-0\">\n                    <div class=\"d-flex record-view-back-button justify-content-start\" *ngIf=\"mode === 'detail' || mode === 'edit'\">\n                        <scrm-button *ngIf=\"backButtonConfig\" [config]=\"backButtonConfig\"></scrm-button>\n                    </div>\n                </div>\n                <div class=\"record-view-name-wrapper d-flex justify-content-md-start align-items-center\"\n                     [class.justify-content-center]=\"mode === 'detail' || mode === 'edit'\"\n                     [class.justify-content-start]=\"!(mode === 'detail' || mode === 'edit')\"\n                     [class.record-view-name-wrapper-margin-left]=\"mode === 'detail' || mode === 'edit'\"\n                >\n                    <div class=\"p-0 d-inline-block\" [ngClass]=\"isScrolled ? 'record-view-name-scrolled' : 'record-view-name'\">\n                        <div *ngIf=\"record && record.fields && mode !== 'create'\" class=\"float-right align-items-top d-flex\">\n                            <scrm-favorite-toggle [record]=\"record\"\n                                                  class=\"h-100 lh-100\"></scrm-favorite-toggle>\n                        </div>\n                        <scrm-dynamic-label *ngIf=\"record && record.fields\"\n                                            class=\"record-view-name-label d-block p-0 lh-100\"\n                                            [fields]=\"record.fields\"\n                                            [labelKey]=\"getSummaryTemplate()\">\n                        </scrm-dynamic-label>\n\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-12 col-md-7 col-lg-6 col-xl-5 align-items-center record-view-action-header\">\n                <div class=\"row mr-1 ml-1 justify-content-center justify-content-md-end\">\n                    <div *ngIf=\"record\" class=\"\">\n                        <scrm-action-group-menu\n                                [config]=\"actionsAdapter\"\n                                [actionContext]=\"getActionContext(record)\"\n                                [klass]=\"isScrolled ?  'record-view-actions-scrolled float-right' : 'record-view-actions float-right'\"\n                                buttonClass=\"settings-button\"\n                        >\n                        </scrm-action-group-menu>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</ng-container>\n" }]
    }], () => [{ type: i1.RecordActionsAdapter }, { type: i2.RecordViewStore }, { type: i3.ModuleNavigation }, { type: i4.AppStateStore }, { type: i5.Router }], { onScroll: [{
            type: HostListener,
            args: ['window:scroll']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RecordHeaderComponent, { className: "RecordHeaderComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvcmVjb3JkL2NvbXBvbmVudHMvcmVjb3JkLWhlYWRlci9yZWNvcmQtaGVhZGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi92aWV3cy9yZWNvcmQvY29tcG9uZW50cy9yZWNvcmQtaGVhZGVyL3JlY29yZC1oZWFkZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUdILE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUV6RSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDMUUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNkVBQTZFLENBQUM7QUFDN0csT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFLcEUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQzFFLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7SUNQM0IsQUFESiw4QkFBc0MsYUFDYztJQUU1QyxBQURBLHVDQUFrRyxhQUNwRDtJQUV0RCxBQURJLGlCQUFNLEVBQ0o7OztJQUhxQixlQUFxQjtJQUFyQiwwQ0FBcUI7OztJQVFoQyxrQ0FBZ0Y7OztJQUExQyxnREFBMkI7OztJQURyRSwrQkFBK0c7SUFDM0csbUdBQWtFO0lBQ3RFLGlCQUFNOzs7SUFEWSxjQUFzQjtJQUF0Qiw4Q0FBc0I7OztJQVNwQywrQkFBcUc7SUFDakcsMkNBQ2tFO0lBQ3RFLGlCQUFNOzs7SUFGb0IsY0FBaUI7SUFBakIsc0NB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LENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNoRyxDQUFDO1NBQ0osQ0FBQTtJQUNMLENBQUM7c0hBOUZRLHFCQUFxQjtvRUFBckIscUJBQXFCO1lBQXJCLDRGQUFBLGNBQVUsK0JBQVc7O1lDaEJsQyw2QkFBYztZQUNWLDhCQUFxRztZQU9qRyxBQU5BLHNFQUFzQywyREFNeUM7WUF3Q25GLGlCQUFNOzs7WUEvQ0QsY0FBb0U7WUFBcEUsdUZBQW9FO1lBQy9ELGNBQWE7WUFBYixrQ0FBYTtZQU1iLGNBQWM7WUFBZCxtQ0FBYzs7O2lGRFFmLHFCQUFxQjtjQUpqQyxTQUFTOzJCQUNJLG9CQUFvQjttS0FhQyxRQUFRO2tCQUF0QyxZQUFZO21CQUFDLGVBQWU7O2tGQVZwQixxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cblxuaW1wb3J0IHtDb21wb25lbnQsIEhvc3RMaXN0ZW5lciwgT25EZXN0cm95LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtSZWNvcmRWaWV3U3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL3JlY29yZC12aWV3L3JlY29yZC12aWV3LnN0b3JlJztcbmltcG9ydCB7TW9kdWxlTmF2aWdhdGlvbn0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbmF2aWdhdGlvbi9tb2R1bGUtbmF2aWdhdGlvbi9tb2R1bGUtbmF2aWdhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7UmVjb3JkQWN0aW9uc0FkYXB0ZXJ9IGZyb20gJy4uLy4uL2FkYXB0ZXJzL2FjdGlvbnMuYWRhcHRlcic7XG5pbXBvcnQge0FjdGlvbkNvbnRleHR9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9hY3Rpb25zL2FjdGlvbi5tb2RlbCc7XG5pbXBvcnQge0J1dHRvbkludGVyZmFjZX0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5tb2RlbCc7XG5pbXBvcnQge1JlY29yZH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3JlY29yZC9yZWNvcmQubW9kZWwnO1xuaW1wb3J0IHtWaWV3TW9kZX0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3ZpZXdzL3ZpZXcubW9kZWwnO1xuaW1wb3J0IHtBcHBTdGF0ZVN0b3JlfSBmcm9tIFwiLi4vLi4vLi4vLi4vc3RvcmUvYXBwLXN0YXRlL2FwcC1zdGF0ZS5zdG9yZVwiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLXJlY29yZC1oZWFkZXInLFxuICAgIHRlbXBsYXRlVXJsOiAncmVjb3JkLWhlYWRlci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgUmVjb3JkSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgcmVjb3JkOiBSZWNvcmQ7XG4gICAgbW9kZTogVmlld01vZGUgPSAnZGV0YWlsJztcbiAgICBsb2FkaW5nOiBib29sZWFuID0gdHJ1ZTtcbiAgICBpc1Njcm9sbGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgYmFja0J1dHRvbkNvbmZpZzogQnV0dG9uSW50ZXJmYWNlO1xuXG4gICAgcHJvdGVjdGVkIHN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgICBASG9zdExpc3RlbmVyKCd3aW5kb3c6c2Nyb2xsJykgb25TY3JvbGwoKSB7XG4gICAgICAgIGNvbnN0IHNjcm9sbFBvc2l0aW9uID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgICAvL1Njcm9sbFRocmVzaG9sZCBpcyBzZXQgdG8gMWVtXG4gICAgICAgIGNvbnN0IHNjcm9sbFRocmVzaG9sZCA9IHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmZvbnRTaXplKTtcblxuICAgICAgICBpZiAoc2Nyb2xsUG9zaXRpb24gPiBzY3JvbGxUaHJlc2hvbGQpIHtcbiAgICAgICAgICAgIC8vNSBpcyBqdXN0IGEgcmFuZG9tIHNhZmV6b25lIG51bWJlclxuICAgICAgICAgICAgaWYgKHNjcm9sbFBvc2l0aW9uIC0gc2Nyb2xsVGhyZXNob2xkIDwgNSkgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5pc1Njcm9sbGVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxUaHJlc2hvbGQgLSBzY3JvbGxQb3NpdGlvbiA8IDUpIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuaXNTY3JvbGxlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBhY3Rpb25zQWRhcHRlcjogUmVjb3JkQWN0aW9uc0FkYXB0ZXIsXG4gICAgICAgIHByb3RlY3RlZCByZWNvcmRWaWV3U3RvcmU6IFJlY29yZFZpZXdTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIG1vZHVsZU5hdmlnYXRpb246IE1vZHVsZU5hdmlnYXRpb24sXG4gICAgICAgIHByb3RlY3RlZCBhcHBTdGF0ZTogQXBwU3RhdGVTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIHJvdXRlcjogUm91dGVyXG4gICAgKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubW9kZSA9IHRoaXMucmVjb3JkVmlld1N0b3JlLmdldE1vZGUoKTtcbiAgICAgICAgdGhpcy5zZXRCYWNrQnV0dG9uQ29uZmlnKCk7XG5cbiAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5yZWNvcmRWaWV3U3RvcmUubW9kZSQuc3Vic2NyaWJlKG1vZGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5tb2RlID0gbW9kZTtcbiAgICAgICAgfSkpO1xuICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLnJlY29yZFZpZXdTdG9yZS5yZWNvcmQkLnN1YnNjcmliZShyZWNvcmQgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZWNvcmQgPSByZWNvcmQ7XG4gICAgICAgIH0pKTtcblxuICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLnJlY29yZFZpZXdTdG9yZS5sb2FkaW5nJC5zdWJzY3JpYmUobG9hZGluZyA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBsb2FkaW5nO1xuICAgICAgICB9KSlcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdWJzLmZvckVhY2goc3ViID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcbiAgICB9XG5cbiAgICBnZXQgbW9kdWxlVGl0bGUoKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgbW9kdWxlID0gdGhpcy5yZWNvcmRWaWV3U3RvcmUudm0uYXBwRGF0YS5tb2R1bGU7XG4gICAgICAgIGNvbnN0IGFwcExpc3RTdHJpbmdzID0gdGhpcy5yZWNvcmRWaWV3U3RvcmUudm0uYXBwRGF0YS5sYW5ndWFnZS5hcHBMaXN0U3RyaW5ncztcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kdWxlTmF2aWdhdGlvbi5nZXRNb2R1bGVMYWJlbChtb2R1bGUsIGFwcExpc3RTdHJpbmdzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgU3VtbWFyeSB0ZW1wbGF0ZVxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ30gdGVtcGxhdGUgbGFiZWxcbiAgICAgKi9cbiAgICBnZXRTdW1tYXJ5VGVtcGxhdGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVjb3JkVmlld1N0b3JlLmdldFN1bW1hcnlUZW1wbGF0ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIGFjdGlvbiBjb250ZXh0XG4gICAgICogQHBhcmFtIHJlY29yZFxuICAgICAqL1xuICAgIGdldEFjdGlvbkNvbnRleHQocmVjb3JkOiBSZWNvcmQpOiBBY3Rpb25Db250ZXh0IHtcbiAgICAgICAgaWYgKCFyZWNvcmQpIHtcbiAgICAgICAgICAgIHJldHVybiB7fSBhcyBBY3Rpb25Db250ZXh0XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbW9kdWxlOiByZWNvcmQubW9kdWxlIHx8ICcnLFxuICAgICAgICAgICAgcmVjb3JkXG4gICAgICAgIH0gYXMgQWN0aW9uQ29udGV4dFxuICAgIH1cblxuICAgIHNldEJhY2tCdXR0b25Db25maWcoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG1vZHVsZVJvdXRlPSB0aGlzLm1vZHVsZU5hdmlnYXRpb24uZ2V0TW9kdWxlUm91dGUodGhpcy5yZWNvcmRWaWV3U3RvcmUudm0uYXBwRGF0YS5tb2R1bGUpO1xuXG4gICAgICAgIHRoaXMuYmFja0J1dHRvbkNvbmZpZyA9IHtcbiAgICAgICAgICAgIGljb246ICdwYWdpbmF0ZV9wcmV2aW91cycsXG4gICAgICAgICAgICBrbGFzczogJ2JhY2stYnV0dG9uJyxcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbbW9kdWxlUm91dGUucm91dGVdLCB7IHF1ZXJ5UGFyYW1zOiB7IGtlZXBQYWdpbmF0aW9uOiB0cnVlIH0gfSkudGhlbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPG5nLWNvbnRhaW5lcj5cbiAgICA8ZGl2IFtuZ0NsYXNzXT1cImlzU2Nyb2xsZWQgPyAncmVjb3JkLXZpZXctaGVhZGVyLXNjcm9sbGVkIHNoYWRvdy1tZCc6ICcnXCIgY2xhc3M9XCJyZWNvcmQtdmlldy1oZWFkZXJcIj5cbiAgICAgICAgPGRpdiAqbmdJZj1cImxvYWRpbmdcIiBjbGFzcz1cInJvdyBtci0wXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxzY3JtLW1vZHVsZS10aXRsZSBbdGl0bGVdPVwibW9kdWxlVGl0bGVcIiBjbGFzcz1cInJlY29yZC12aWV3LXRpdGxlIHRpdGxlLWZvbnRcIj48L3Njcm0tbW9kdWxlLXRpdGxlPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWNvcmQtdmlldy1uYW1lIHB0LTMgcGItM1wiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2ICpuZ0lmPVwiIWxvYWRpbmdcIiBjbGFzcz1cInJvdyBtLTAgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1sLTEgbXItMVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTUgY29sLWxnLTYgY29sLXhsLTcgcmVjb3JkLW5hbWUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsb2F0LWxlZnQgcC0wXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggcmVjb3JkLXZpZXctYmFjay1idXR0b24ganVzdGlmeS1jb250ZW50LXN0YXJ0XCIgKm5nSWY9XCJtb2RlID09PSAnZGV0YWlsJyB8fCBtb2RlID09PSAnZWRpdCdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWJ1dHRvbiAqbmdJZj1cImJhY2tCdXR0b25Db25maWdcIiBbY29uZmlnXT1cImJhY2tCdXR0b25Db25maWdcIj48L3Njcm0tYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVjb3JkLXZpZXctbmFtZS13cmFwcGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtbWQtc3RhcnQgYWxpZ24taXRlbXMtY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgIFtjbGFzcy5qdXN0aWZ5LWNvbnRlbnQtY2VudGVyXT1cIm1vZGUgPT09ICdkZXRhaWwnIHx8IG1vZGUgPT09ICdlZGl0J1wiXG4gICAgICAgICAgICAgICAgICAgICBbY2xhc3MuanVzdGlmeS1jb250ZW50LXN0YXJ0XT1cIiEobW9kZSA9PT0gJ2RldGFpbCcgfHwgbW9kZSA9PT0gJ2VkaXQnKVwiXG4gICAgICAgICAgICAgICAgICAgICBbY2xhc3MucmVjb3JkLXZpZXctbmFtZS13cmFwcGVyLW1hcmdpbi1sZWZ0XT1cIm1vZGUgPT09ICdkZXRhaWwnIHx8IG1vZGUgPT09ICdlZGl0J1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC0wIGQtaW5saW5lLWJsb2NrXCIgW25nQ2xhc3NdPVwiaXNTY3JvbGxlZCA/ICdyZWNvcmQtdmlldy1uYW1lLXNjcm9sbGVkJyA6ICdyZWNvcmQtdmlldy1uYW1lJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cInJlY29yZCAmJiByZWNvcmQuZmllbGRzICYmIG1vZGUgIT09ICdjcmVhdGUnXCIgY2xhc3M9XCJmbG9hdC1yaWdodCBhbGlnbi1pdGVtcy10b3AgZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tZmF2b3JpdGUtdG9nZ2xlIFtyZWNvcmRdPVwicmVjb3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJoLTEwMCBsaC0xMDBcIj48L3Njcm0tZmF2b3JpdGUtdG9nZ2xlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1keW5hbWljLWxhYmVsICpuZ0lmPVwicmVjb3JkICYmIHJlY29yZC5maWVsZHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJlY29yZC12aWV3LW5hbWUtbGFiZWwgZC1ibG9jayBwLTAgbGgtMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ZpZWxkc109XCJyZWNvcmQuZmllbGRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xhYmVsS2V5XT1cImdldFN1bW1hcnlUZW1wbGF0ZSgpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Njcm0tZHluYW1pYy1sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTcgY29sLWxnLTYgY29sLXhsLTUgYWxpZ24taXRlbXMtY2VudGVyIHJlY29yZC12aWV3LWFjdGlvbi1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG1yLTEgbWwtMSBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGp1c3RpZnktY29udGVudC1tZC1lbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cInJlY29yZFwiIGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1hY3Rpb24tZ3JvdXAtbWVudVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29uZmlnXT1cImFjdGlvbnNBZGFwdGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2FjdGlvbkNvbnRleHRdPVwiZ2V0QWN0aW9uQ29udGV4dChyZWNvcmQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2tsYXNzXT1cImlzU2Nyb2xsZWQgPyAgJ3JlY29yZC12aWV3LWFjdGlvbnMtc2Nyb2xsZWQgZmxvYXQtcmlnaHQnIDogJ3JlY29yZC12aWV3LWFjdGlvbnMgZmxvYXQtcmlnaHQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uQ2xhc3M9XCJzZXR0aW5ncy1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zY3JtLWFjdGlvbi1ncm91cC1tZW51PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvbmctY29udGFpbmVyPlxuIl19