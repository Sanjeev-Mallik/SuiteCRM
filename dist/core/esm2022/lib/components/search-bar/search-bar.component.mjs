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
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { LanguageStore } from '../../store/language/language.store';
import { distinctUntilChanged, filter, map, tap } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "../../store/language/language.store";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "../image/image.component";
const _c0 = ["searchInput"];
const _c1 = a0 => ({ "search-focused": a0 });
const _c2 = a0 => ({ "dropdown-active": a0 });
function SearchBarComponent_ng_container_0_ul_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ul", 9)(1, "li", 10)(2, "a", 11);
    i0.ɵɵlistener("click", function SearchBarComponent_ng_container_0_ul_5_Template_a_click_2_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.searchWithEnter()); });
    i0.ɵɵelement(3, "scrm-image", 12);
    i0.ɵɵelementStart(4, "span", 13);
    i0.ɵɵtext(5, "\"");
    i0.ɵɵelementStart(6, "strong");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "lowercase");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const vm_r5 = i0.ɵɵnextContext().ngIf;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c2, ctx_r1.searchWord));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.searchWord);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("\" ", i0.ɵɵpipeBind1(9, 3, vm_r5.appStrings["LBL_IN_EVERYWHERE"]), "");
} }
function SearchBarComponent_ng_container_0_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 14);
    i0.ɵɵlistener("click", function SearchBarComponent_ng_container_0_button_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.searchWithEnter()); });
    i0.ɵɵelement(1, "scrm-image", 12);
    i0.ɵɵelementEnd();
} }
function SearchBarComponent_ng_container_0_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 15);
    i0.ɵɵlistener("click", function SearchBarComponent_ng_container_0_button_8_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.clearSearchTerm()); });
    i0.ɵɵelement(1, "scrm-image", 16);
    i0.ɵɵelementEnd();
} }
function SearchBarComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "form", 2)(2, "div", 3)(3, "input", 4, 0);
    i0.ɵɵlistener("focus", function SearchBarComponent_ng_container_0_Template_input_focus_3_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onFocus()); })("blur", function SearchBarComponent_ng_container_0_Template_input_blur_3_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onBlur()); })("keydown.enter", function SearchBarComponent_ng_container_0_Template_input_keydown_enter_3_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.searchTrigger === "enter" ? ctx_r1.searchWithEnter() : null); })("input", function SearchBarComponent_ng_container_0_Template_input_input_3_listener() { i0.ɵɵrestoreView(_r1); const searchInput_r3 = i0.ɵɵreference(4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.searchTrigger === "input" ? ctx_r1.searchWithInput(searchInput_r3.value) : null); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, SearchBarComponent_ng_container_0_ul_5_Template, 10, 7, "ul", 5);
    i0.ɵɵelementStart(6, "div", 6);
    i0.ɵɵtemplate(7, SearchBarComponent_ng_container_0_button_7_Template, 2, 0, "button", 7)(8, SearchBarComponent_ng_container_0_button_8_Template, 2, 0, "button", 8);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const vm_r5 = ctx.ngIf;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r1.klass)("formGroup", ctx_r1.searchForm);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(8, _c1, ctx_r1.isFocused));
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate1("placeholder", "", vm_r5.appStrings[ctx_r1.labelKey] || "", "...");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.searchWord.length && ctx_r1.hasSearchTyped && ctx_r1.searchTrigger === "enter");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.hasSearchTyped);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.hasSearchTyped);
} }
export class SearchBarComponent {
    constructor(languageStore) {
        this.languageStore = languageStore;
        this.labelKey = '';
        this.klass = '';
        this.isMobile = false;
        this.searchTrigger = 'enter';
        this.isSearchVisible = new EventEmitter(false);
        this.searchExpression = new EventEmitter();
        this.searchWord = '';
        this.isFocused = false;
        this.hasSearchTyped = false;
        this.subs = [];
        this.languages$ = this.languageStore.vm$;
        this.vm$ = this.languages$.pipe(map(language => {
            return {
                appStrings: language.appStrings || {}
            };
        }));
    }
    ngOnInit() {
        this.searchForm = new FormGroup({
            searchTerm: new FormControl('')
        });
        this.subs.push(this.searchForm.get('searchTerm').valueChanges
            .pipe(tap(data => {
            if (data) {
                this.hasSearchTyped = true;
            }
            else {
                this.hasSearchTyped = false;
            }
        }), distinctUntilChanged(), filter(searchString => searchString?.length > 1)).subscribe((term) => this.searchWord = term));
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    searchWithEnter() {
        if (this.searchWord.length) {
            this.searchExpression.emit(this.searchWord);
            this.clearSearchTerm();
            this.searchInput.nativeElement.blur();
        }
        else {
            if (this.isMobile) {
                this.onBlur();
            }
        }
    }
    searchWithInput(value) {
        this.searchExpression.emit(value);
    }
    clearSearchTerm() {
        this.searchForm.reset();
        this.hasSearchTyped = false;
        this.searchWord = '';
        if (this.searchTrigger === 'input') {
            this.searchWithInput(this.searchWord);
        }
    }
    onFocus() {
        this.isFocused = true;
        const initialValue = this.searchForm?.get('searchTerm')?.value ?? '';
        if (initialValue.length > 2) {
            this.hasSearchTyped = true;
            this.searchWord = initialValue;
        }
    }
    onBlur() {
        setTimeout(() => {
            this.isFocused = false;
            this.hasSearchTyped = false;
        }, 200);
        if (this.isMobile) {
            setTimeout(() => {
                this.isSearchVisible.emit(false);
            }, 50);
        }
    }
    static { this.ɵfac = function SearchBarComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SearchBarComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SearchBarComponent, selectors: [["scrm-search-bar"]], viewQuery: function SearchBarComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.searchInput = _t.first);
        } }, inputs: { labelKey: "labelKey", klass: "klass", isMobile: "isMobile", searchTrigger: "searchTrigger" }, outputs: { isSearchVisible: "isSearchVisible", searchExpression: "searchExpression" }, decls: 2, vars: 3, consts: [["searchInput", ""], [4, "ngIf"], ["name", "search-bar", 1, "search-bar", 3, "ngClass", "formGroup"], [1, "input-group", "dropdown", 3, "ngClass"], ["formControlName", "searchTerm", "type", "text", "name", "search-bar-term", "aria-label", "Search", "data-toggle", "dropdown", "autocomplete", "off", "required", "", 1, "form-control", "dropdown-toggle", "search-bar-term", 3, "focus", "blur", "keydown.enter", "input", "placeholder"], ["class", "dropdown-menu global-search-dropdown", 4, "ngIf"], [1, "input-group-append"], ["class", "btn btn-default search-button d-flex align-items-center", "aria-label", "Search", "scrm-button-loading", "", 3, "click", 4, "ngIf"], ["class", "btn btn-default search-button d-flex align-items-center", "aria-label", "Close Search", "scrm-button-loading", "", 3, "click", 4, "ngIf"], [1, "dropdown-menu", "global-search-dropdown"], [1, "dropdown-item-block", 3, "ngClass"], [1, "dropdown-item", 3, "click"], ["image", "search", 1, "search-icon", "sicon"], [1, "dropdown-text", "ml-2"], ["aria-label", "Search", "scrm-button-loading", "", 1, "btn", "btn-default", "search-button", "d-flex", "align-items-center", 3, "click"], ["aria-label", "Close Search", "scrm-button-loading", "", 1, "btn", "btn-default", "search-button", "d-flex", "align-items-center", 3, "click"], ["image", "cross", 1, "search-icon", "sicon"]], template: function SearchBarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SearchBarComponent_ng_container_0_Template, 9, 10, "ng-container", 1);
            i0.ɵɵpipe(1, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.vm$));
        } }, dependencies: [i2.NgClass, i2.NgIf, i3.ɵNgNoValidate, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgControlStatusGroup, i3.RequiredValidator, i4.ImageComponent, i3.FormGroupDirective, i3.FormControlName, i2.AsyncPipe, i2.LowerCasePipe], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SearchBarComponent, [{
        type: Component,
        args: [{ selector: 'scrm-search-bar', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2023 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n\n<ng-container *ngIf=\"(vm$ | async) as vm\">\n    <form name=\"search-bar\" class=\"search-bar\" [ngClass]=\"klass\" [formGroup]=\"searchForm\">\n        <div class=\"input-group dropdown\" [ngClass]=\"{'search-focused': isFocused}\">\n            <input\n                formControlName=\"searchTerm\"\n                type=\"text\"\n                name=\"search-bar-term\"\n                class=\"form-control dropdown-toggle search-bar-term\"\n                placeholder=\"{{vm.appStrings[labelKey] || ''}}...\"\n                aria-label=\"Search\"\n                (focus)=\"onFocus()\"\n                (blur)=\"onBlur()\"\n                (keydown.enter)=\"searchTrigger === 'enter' ? searchWithEnter() : null\"\n                (input)=\"searchTrigger === 'input' ? searchWithInput(searchInput.value) : null\"\n                data-toggle=\"dropdown\"\n                autocomplete=\"off\"\n                #searchInput\n                required>\n            <ul class=\"dropdown-menu global-search-dropdown\" *ngIf=\"searchWord.length && hasSearchTyped && (searchTrigger === 'enter')\">\n                <li class=\"dropdown-item-block\" [ngClass]=\"{'dropdown-active': searchWord}\">\n                    <a class=\"dropdown-item\" (click)=\"searchWithEnter()\">\n                        <scrm-image class=\"search-icon sicon\" image=\"search\"></scrm-image>\n                        <span class=\"dropdown-text ml-2\">\"<strong>{{searchWord}}</strong>\" {{vm.appStrings['LBL_IN_EVERYWHERE'] | lowercase}}</span>\n                    </a>\n                </li>\n            </ul>\n\n            <div class=\"input-group-append\">\n                <button *ngIf=\"!hasSearchTyped\" class=\"btn btn-default search-button d-flex align-items-center\"\n                        aria-label=\"Search\"\n                        scrm-button-loading\n                        (click)=\"searchWithEnter()\">\n                    <scrm-image class=\"search-icon sicon\" image=\"search\"></scrm-image>\n                </button>\n\n                <button *ngIf=\"hasSearchTyped\" class=\"btn btn-default search-button d-flex align-items-center\"\n                        aria-label=\"Close Search\"\n                        scrm-button-loading\n                        (click)=\"clearSearchTerm()\">\n                    <scrm-image class=\"search-icon sicon\" image=\"cross\"></scrm-image>\n                </button>\n\n            </div>\n        </div>\n    </form>\n</ng-container>\n\n" }]
    }], () => [{ type: i1.LanguageStore }], { searchInput: [{
            type: ViewChild,
            args: ['searchInput']
        }], labelKey: [{
            type: Input
        }], klass: [{
            type: Input
        }], isMobile: [{
            type: Input
        }], searchTrigger: [{
            type: Input
        }], isSearchVisible: [{
            type: Output
        }], searchExpression: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SearchBarComponent, { className: "SearchBarComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9zZWFyY2gtYmFyL3NlYXJjaC1iYXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvc2VhcmNoLWJhci9zZWFyY2gtYmFyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQ0gsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGFBQWEsRUFBa0IsTUFBTSxxQ0FBcUMsQ0FBQztBQUVuRixPQUFPLEVBQUMsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RSxPQUFPLEVBQUMsV0FBVyxFQUFFLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7OztJQ1NsQyxBQURKLEFBREosNkJBQTRILGFBQzVDLFlBQ25CO0lBQTVCLHdMQUFTLHdCQUFpQixLQUFDO0lBQ2hELGlDQUFrRTtJQUNsRSxnQ0FBaUM7SUFBQSxrQkFBQztJQUFBLDhCQUFRO0lBQUEsWUFBYztJQUFBLGlCQUFTO0lBQUEsWUFBb0Q7O0lBR2pJLEFBREksQUFESSxBQUR5SCxpQkFBTyxFQUM1SCxFQUNILEVBQ0o7Ozs7SUFOK0IsY0FBMkM7SUFBM0MsdUVBQTJDO0lBR3pCLGVBQWM7SUFBZCx1Q0FBYztJQUFTLGNBQW9EO0lBQXBELDZGQUFvRDs7OztJQU03SCxrQ0FHb0M7SUFBNUIsaU1BQVMsd0JBQWlCLEtBQUM7SUFDL0IsaUNBQWtFO0lBQ3RFLGlC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QUcsRUFBRTtZQUNaLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUVSLElBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2YsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDWixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUM7UUFDVixDQUFDO0lBQ0wsQ0FBQzttSEFqR1Esa0JBQWtCO29FQUFsQixrQkFBa0I7Ozs7OztZQ2pCL0Isc0ZBQTBDOzs7WUFBM0Isb0RBQW9COzs7aUZEaUJ0QixrQkFBa0I7Y0FKOUIsU0FBUzsyQkFDSSxpQkFBaUI7OENBS0QsV0FBVztrQkFBcEMsU0FBUzttQkFBQyxhQUFhO1lBQ2YsUUFBUTtrQkFBaEIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLO1lBQ0ksZUFBZTtrQkFBeEIsTUFBTTtZQUNHLGdCQUFnQjtrQkFBekIsTUFBTTs7a0ZBUkUsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjMgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBFbGVtZW50UmVmLFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBJbnB1dCxcbiAgICBPbkRlc3Ryb3ksXG4gICAgT25Jbml0LFxuICAgIE91dHB1dCxcbiAgICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmUsIExhbmd1YWdlU3RyaW5nc30gZnJvbSAnLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBtYXAsIHRhcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtGb3JtQ29udHJvbCwgRm9ybUdyb3VwfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1zZWFyY2gtYmFyJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3NlYXJjaC1iYXIuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hCYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBAVmlld0NoaWxkKCdzZWFyY2hJbnB1dCcpIHNlYXJjaElucHV0OiBFbGVtZW50UmVmO1xuICAgIEBJbnB1dCgpIGxhYmVsS2V5OiBzdHJpbmcgPSAnJztcbiAgICBASW5wdXQoKSBrbGFzczogc3RyaW5nID0gJyc7XG4gICAgQElucHV0KCkgaXNNb2JpbGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBzZWFyY2hUcmlnZ2VyOiAnZW50ZXInIHwgJ2lucHV0JyA9ICdlbnRlcic7XG4gICAgQE91dHB1dCgpIGlzU2VhcmNoVmlzaWJsZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oZmFsc2UpO1xuICAgIEBPdXRwdXQoKSBzZWFyY2hFeHByZXNzaW9uID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgICBzZWFyY2hXb3JkOiBzdHJpbmcgPSAnJztcbiAgICBzZWFyY2hGb3JtOiBGb3JtR3JvdXA7XG5cbiAgICBpc0ZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBoYXNTZWFyY2hUeXBlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHJvdGVjdGVkIHN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gICAgbGFuZ3VhZ2VzJDogT2JzZXJ2YWJsZTxMYW5ndWFnZVN0cmluZ3M+ID0gdGhpcy5sYW5ndWFnZVN0b3JlLnZtJDtcblxuICAgIHZtJCA9IHRoaXMubGFuZ3VhZ2VzJC5waXBlKFxuICAgICAgICBtYXAobGFuZ3VhZ2UgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhcHBTdHJpbmdzOiBsYW5ndWFnZS5hcHBTdHJpbmdzIHx8IHt9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KVxuICAgICk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgbGFuZ3VhZ2VTdG9yZTogTGFuZ3VhZ2VTdG9yZSkge31cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNlYXJjaEZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAgICAgICAgIHNlYXJjaFRlcm06IG5ldyBGb3JtQ29udHJvbCgnJylcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5zZWFyY2hGb3JtLmdldCgnc2VhcmNoVGVybScpLnZhbHVlQ2hhbmdlc1xuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgdGFwKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXNTZWFyY2hUeXBlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhc1NlYXJjaFR5cGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICAgICAgICAgIGZpbHRlcihzZWFyY2hTdHJpbmcgPT4gc2VhcmNoU3RyaW5nPy5sZW5ndGggPiAxKSxcbiAgICAgICAgICAgICkuc3Vic2NyaWJlKCh0ZXJtOiBzdHJpbmcpID0+IHRoaXMuc2VhcmNoV29yZCA9IHRlcm0pKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdWJzLmZvckVhY2goc3ViID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcbiAgICB9XG5cbiAgICBzZWFyY2hXaXRoRW50ZXIoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnNlYXJjaFdvcmQubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaEV4cHJlc3Npb24uZW1pdCh0aGlzLnNlYXJjaFdvcmQpO1xuICAgICAgICAgICAgdGhpcy5jbGVhclNlYXJjaFRlcm0oKTtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoSW5wdXQubmF0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZih0aGlzLmlzTW9iaWxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkJsdXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlYXJjaFdpdGhJbnB1dCh2YWx1ZTpzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoRXhwcmVzc2lvbi5lbWl0KHZhbHVlKTtcbiAgICB9XG5cbiAgICBjbGVhclNlYXJjaFRlcm0oKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2VhcmNoRm9ybS5yZXNldCgpO1xuICAgICAgICB0aGlzLmhhc1NlYXJjaFR5cGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2VhcmNoV29yZCA9ICcnO1xuICAgICAgICBpZih0aGlzLnNlYXJjaFRyaWdnZXIgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoV2l0aElucHV0KHRoaXMuc2VhcmNoV29yZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkZvY3VzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmlzRm9jdXNlZCA9IHRydWU7XG4gICAgICAgIGNvbnN0IGluaXRpYWxWYWx1ZSA9IHRoaXMuc2VhcmNoRm9ybT8uZ2V0KCdzZWFyY2hUZXJtJyk/LnZhbHVlID8/ICcnO1xuICAgICAgICBpZiAoaW5pdGlhbFZhbHVlLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgIHRoaXMuaGFzU2VhcmNoVHlwZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hXb3JkID0gaW5pdGlhbFZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25CbHVyKCk6IHZvaWQge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNGb2N1c2VkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmhhc1NlYXJjaFR5cGVkID0gZmFsc2U7XG4gICAgICAgIH0sIDIwMCk7XG5cbiAgICAgICAgaWYodGhpcy5pc01vYmlsZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1NlYXJjaFZpc2libGUuZW1pdChmYWxzZSk7XG4gICAgICAgICAgICB9LDUwKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjMgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cblxuPG5nLWNvbnRhaW5lciAqbmdJZj1cIih2bSQgfCBhc3luYykgYXMgdm1cIj5cbiAgICA8Zm9ybSBuYW1lPVwic2VhcmNoLWJhclwiIGNsYXNzPVwic2VhcmNoLWJhclwiIFtuZ0NsYXNzXT1cImtsYXNzXCIgW2Zvcm1Hcm91cF09XCJzZWFyY2hGb3JtXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBkcm9wZG93blwiIFtuZ0NsYXNzXT1cInsnc2VhcmNoLWZvY3VzZWQnOiBpc0ZvY3VzZWR9XCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJzZWFyY2hUZXJtXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cInNlYXJjaC1iYXItdGVybVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2wgZHJvcGRvd24tdG9nZ2xlIHNlYXJjaC1iYXItdGVybVwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7e3ZtLmFwcFN0cmluZ3NbbGFiZWxLZXldIHx8ICcnfX0uLi5cIlxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJTZWFyY2hcIlxuICAgICAgICAgICAgICAgIChmb2N1cyk9XCJvbkZvY3VzKClcIlxuICAgICAgICAgICAgICAgIChibHVyKT1cIm9uQmx1cigpXCJcbiAgICAgICAgICAgICAgICAoa2V5ZG93bi5lbnRlcik9XCJzZWFyY2hUcmlnZ2VyID09PSAnZW50ZXInID8gc2VhcmNoV2l0aEVudGVyKCkgOiBudWxsXCJcbiAgICAgICAgICAgICAgICAoaW5wdXQpPVwic2VhcmNoVHJpZ2dlciA9PT0gJ2lucHV0JyA/IHNlYXJjaFdpdGhJbnB1dChzZWFyY2hJbnB1dC52YWx1ZSkgOiBudWxsXCJcbiAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJcbiAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICNzZWFyY2hJbnB1dFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkPlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudSBnbG9iYWwtc2VhcmNoLWRyb3Bkb3duXCIgKm5nSWY9XCJzZWFyY2hXb3JkLmxlbmd0aCAmJiBoYXNTZWFyY2hUeXBlZCAmJiAoc2VhcmNoVHJpZ2dlciA9PT0gJ2VudGVyJylcIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJkcm9wZG93bi1pdGVtLWJsb2NrXCIgW25nQ2xhc3NdPVwieydkcm9wZG93bi1hY3RpdmUnOiBzZWFyY2hXb3JkfVwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiAoY2xpY2spPVwic2VhcmNoV2l0aEVudGVyKClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWltYWdlIGNsYXNzPVwic2VhcmNoLWljb24gc2ljb25cIiBpbWFnZT1cInNlYXJjaFwiPjwvc2NybS1pbWFnZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZHJvcGRvd24tdGV4dCBtbC0yXCI+XCI8c3Ryb25nPnt7c2VhcmNoV29yZH19PC9zdHJvbmc+XCIge3t2bS5hcHBTdHJpbmdzWydMQkxfSU5fRVZFUllXSEVSRSddIHwgbG93ZXJjYXNlfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCIhaGFzU2VhcmNoVHlwZWRcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBzZWFyY2gtYnV0dG9uIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JtLWJ1dHRvbi1sb2FkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwic2VhcmNoV2l0aEVudGVyKClcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNjcm0taW1hZ2UgY2xhc3M9XCJzZWFyY2gtaWNvbiBzaWNvblwiIGltYWdlPVwic2VhcmNoXCI+PC9zY3JtLWltYWdlPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImhhc1NlYXJjaFR5cGVkXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgc2VhcmNoLWJ1dHRvbiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZSBTZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc2NybS1idXR0b24tbG9hZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImNsZWFyU2VhcmNoVGVybSgpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzY3JtLWltYWdlIGNsYXNzPVwic2VhcmNoLWljb24gc2ljb25cIiBpbWFnZT1cImNyb3NzXCI+PC9zY3JtLWltYWdlPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuPC9uZy1jb250YWluZXI+XG5cbiJdfQ==