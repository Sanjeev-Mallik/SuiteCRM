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
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AppStateStore } from "../../store/app-state/app-state.store";
import { LanguageStore } from "../../store/language/language.store";
import * as i0 from "@angular/core";
import * as i1 from "../../store/app-state/app-state.store";
import * as i2 from "../../store/language/language.store";
import * as i3 from "@ng-bootstrap/ng-bootstrap";
import * as i4 from "@angular/common";
import * as i5 from "@angular/cdk/drag-drop";
import * as i6 from "../modal/components/modal/modal.component";
import * as i7 from "../label/label.component";
import * as i8 from "../button/button.component";
const _c0 = a0 => [a0];
function ColumnChooserComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.getColumnLabel(item_r2.label), " ");
} }
function ColumnChooserComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.getColumnLabel(item_r4.label), " ");
} }
export class ColumnChooserComponent {
    constructor(appState, languageStore, modal) {
        this.appState = appState;
        this.languageStore = languageStore;
        this.modal = modal;
        this.titleKey = 'LBL_COLUMN_SELECTOR_MODAL_TITLE';
    }
    drop(event) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    }
    getHeaderLabel() {
        return this.languageStore.getFieldLabel('LBL_COLUMN_SELECTOR_MODAL_TITLE');
    }
    getColumnLabel(label) {
        return this.languageStore.getFieldLabel(label, this.appState.getModule());
    }
    ngOnInit() {
        this.closeButtonIcon = {
            klass: ['btn', 'btn-outline-light', 'btn-sm'],
            onClick: () => {
                this.modal.close({
                    type: 'close-button'
                });
            }
        };
        this.closeButton = {
            klass: ['btn', 'modal-button-cancel'],
            labelKey: 'LBL_COLUMN_SELECTOR_CLOSE_BUTTON',
            onClick: () => {
                this.modal.close({
                    type: 'close-button'
                });
            }
        };
        this.saveButton = {
            klass: ['btn', 'modal-button-save'],
            labelKey: 'LBL_COLUMN_SELECTOR_SAVE_BUTTON',
            onClick: () => {
                this.modal.close({
                    type: 'close-button',
                    displayed: this.displayed,
                    hidden: this.hidden
                });
            }
        };
    }
    static { this.ɵfac = function ColumnChooserComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ColumnChooserComponent)(i0.ɵɵdirectiveInject(i1.AppStateStore), i0.ɵɵdirectiveInject(i2.LanguageStore), i0.ɵɵdirectiveInject(i3.NgbActiveModal)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ColumnChooserComponent, selectors: [["scrm-columnchooser"]], inputs: { displayed: "displayed", hidden: "hidden" }, decls: 19, vars: 16, consts: [["displayedList", "cdkDropList"], ["hiddenList", "cdkDropList"], ["klass", "column-chooser-modal", 3, "closable", "close", "title", "titleKey"], ["modal-body", ""], [1, "d-flex", "bd-highlight"], [1, "p-2", "flex-fill", "bd-highlight", "column-chooser-container"], [1, "column-chooser-title"], ["labelKey", "LBL_COLUMN_SELECTOR_DISPLAYED_COLS"], ["cdkDropList", "", 1, "column-chooser-list", 3, "cdkDropListDropped", "cdkDropListData", "cdkDropListConnectedTo"], ["class", "column-chooser-item column-displayed", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["labelKey", "LBL_COLUMN_SELECTOR_HIDDEN_COLS"], ["class", "column-chooser-item column-hidden", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["modal-footer", ""], [1, "modal-buttons"], ["data-dismiss", "modal", 3, "config"], [3, "config"], ["cdkDrag", "", 1, "column-chooser-item", "column-displayed"], ["cdkDrag", "", 1, "column-chooser-item", "column-hidden"]], template: function ColumnChooserComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "scrm-modal", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "h2", 6);
            i0.ɵɵelement(5, "scrm-label", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 8, 0);
            i0.ɵɵlistener("cdkDropListDropped", function ColumnChooserComponent_Template_div_cdkDropListDropped_6_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.drop($event)); });
            i0.ɵɵtemplate(8, ColumnChooserComponent_div_8_Template, 2, 1, "div", 9);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "div", 5)(10, "h2", 6);
            i0.ɵɵelement(11, "scrm-label", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "div", 8, 1);
            i0.ɵɵlistener("cdkDropListDropped", function ColumnChooserComponent_Template_div_cdkDropListDropped_12_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.drop($event)); });
            i0.ɵɵtemplate(14, ColumnChooserComponent_div_14_Template, 2, 1, "div", 11);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(15, "div", 12)(16, "div", 13);
            i0.ɵɵelement(17, "scrm-button", 14)(18, "scrm-button", 15);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            const displayedList_r5 = i0.ɵɵreference(7);
            const hiddenList_r6 = i0.ɵɵreference(13);
            i0.ɵɵproperty("closable", true)("close", ctx.closeButtonIcon)("title", ctx.getHeaderLabel())("titleKey", ctx.titleKey);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("cdkDropListData", ctx.displayed)("cdkDropListConnectedTo", i0.ɵɵpureFunction1(12, _c0, hiddenList_r6));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.displayed);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("cdkDropListData", ctx.hidden)("cdkDropListConnectedTo", i0.ɵɵpureFunction1(14, _c0, displayedList_r5));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.hidden);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("config", ctx.closeButton);
            i0.ɵɵadvance();
            i0.ɵɵproperty("config", ctx.saveButton);
        } }, dependencies: [i4.NgForOf, i5.CdkDropList, i5.CdkDrag, i6.ModalComponent, i7.LabelComponent, i8.ButtonComponent], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ColumnChooserComponent, [{
        type: Component,
        args: [{ selector: 'scrm-columnchooser', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n\n<scrm-modal\n    [closable]=\"true\"\n    [close]=\"closeButtonIcon\"\n    [title]=\"getHeaderLabel()\"\n    [titleKey]=\"titleKey\"\n    klass=\"column-chooser-modal\">\n\n    <div modal-body>\n\n        <div class=\"d-flex bd-highlight\">\n            <div class=\"p-2 flex-fill bd-highlight column-chooser-container\">\n                <h2 class=\"column-chooser-title\">\n                    <scrm-label labelKey=\"LBL_COLUMN_SELECTOR_DISPLAYED_COLS\"></scrm-label>\n                </h2>\n\n                <div\n                    cdkDropList\n                    #displayedList=\"cdkDropList\"\n                    [cdkDropListData]=\"displayed\"\n                    [cdkDropListConnectedTo]=\"[hiddenList]\"\n                    class=\"column-chooser-list\"\n                    (cdkDropListDropped)=\"drop($event)\">\n                    <div class=\"column-chooser-item column-displayed\" *ngFor=\"let item of displayed\"\n                         cdkDrag>\n                        {{getColumnLabel(item.label)}}\n                    </div>\n                </div>\n            </div>\n            <div class=\"p-2 flex-fill bd-highlight column-chooser-container\">\n                <h2 class=\"column-chooser-title\">\n                    <scrm-label labelKey=\"LBL_COLUMN_SELECTOR_HIDDEN_COLS\"></scrm-label>\n                </h2>\n\n                <div\n                    cdkDropList\n                    #hiddenList=\"cdkDropList\"\n                    [cdkDropListData]=\"hidden\"\n                    [cdkDropListConnectedTo]=\"[displayedList]\"\n                    class=\"column-chooser-list\"\n                    (cdkDropListDropped)=\"drop($event)\">\n                    <div class=\"column-chooser-item column-hidden\" *ngFor=\"let item of hidden\" cdkDrag>\n                        {{getColumnLabel(item.label)}}\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div modal-footer>\n        <div class=\"modal-buttons\">\n            <scrm-button data-dismiss=\"modal\" [config]=\"closeButton\"></scrm-button>\n            <scrm-button [config]=\"saveButton\"></scrm-button>\n        </div>\n    </div>\n\n</scrm-modal>\n" }]
    }], () => [{ type: i1.AppStateStore }, { type: i2.LanguageStore }, { type: i3.NgbActiveModal }], { displayed: [{
            type: Input
        }], hidden: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ColumnChooserComponent, { className: "ColumnChooserComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uY2hvb3Nlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9jb2x1bW5jaG9vc2VyL2NvbHVtbmNob29zZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvY29sdW1uY2hvb3Nlci9jb2x1bW5jaG9vc2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQWMsZUFBZSxFQUFFLGlCQUFpQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDdkYsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBSTFELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUNwRSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0scUNBQXFDLENBQUM7Ozs7Ozs7Ozs7OztJQ2lCOUMsK0JBQ2E7SUFDVCxZQUNKO0lBQUEsaUJBQU07Ozs7SUFERixjQUNKO0lBREkscUVBQ0o7OztJQWVBLCtCQUFtRjtJQUMvRSxZQUNKO0lBQUEsaUJBQU07Ozs7SUFERixjQUNKO0lBREkscUVBQ0o7O0FEOUJwQixNQUFNLE9BQU8sc0JBQXNCO0lBUy9CLFlBQ2MsUUFBdUIsRUFDdkIsYUFBNEIsRUFDL0IsS0FBcUI7UUFGbEIsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQUN2QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUMvQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQVJoQyxhQUFRLEdBQUcsaUNBQWlDLENBQUM7SUFTN0MsQ0FBQztJQUVELElBQUksQ0FBQyxLQUE2QjtRQUM5QixJ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d0NBQXNCO1lBQzNDLGNBQXFCO1lBQXJCLHVDQUFxQjs7O2lGRHZDakMsc0JBQXNCO2NBTGxDLFNBQVM7MkJBQ0ksb0JBQW9CO3VHQUtyQixTQUFTO2tCQUFqQixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLOztrRkFGRyxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheSwgdHJhbnNmZXJBcnJheUl0ZW19IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuaW1wb3J0IHtOZ2JBY3RpdmVNb2RhbH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHtCdXR0b25JbnRlcmZhY2V9IGZyb20gJy4uLy4uL2NvbW1vbi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24ubW9kZWwnO1xuaW1wb3J0IHtDb2x1bW5EZWZpbml0aW9ufSBmcm9tICcuLi8uLi9jb21tb24vbWV0YWRhdGEvbGlzdC5tZXRhZGF0YS5tb2RlbCc7XG5pbXBvcnQge01vZGFsQ2xvc2VGZWVkQmFja30gZnJvbSAnLi4vLi4vY29tbW9uL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwubW9kZWwnO1xuaW1wb3J0IHtBcHBTdGF0ZVN0b3JlfSBmcm9tIFwiLi4vLi4vc3RvcmUvYXBwLXN0YXRlL2FwcC1zdGF0ZS5zdG9yZVwiO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlfSBmcm9tIFwiLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLWNvbHVtbmNob29zZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9jb2x1bW5jaG9vc2VyLmNvbXBvbmVudC5odG1sJyxcbn0pXG5cbmV4cG9ydCBjbGFzcyBDb2x1bW5DaG9vc2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoKSBkaXNwbGF5ZWQ6IENvbHVtbkRlZmluaXRpb25bXTtcbiAgICBASW5wdXQoKSBoaWRkZW46IENvbHVtbkRlZmluaXRpb25bXTtcblxuICAgIHRpdGxlS2V5ID0gJ0xCTF9DT0xVTU5fU0VMRUNUT1JfTU9EQUxfVElUTEUnO1xuICAgIGNsb3NlQnV0dG9uSWNvbjogQnV0dG9uSW50ZXJmYWNlO1xuICAgIGNsb3NlQnV0dG9uOiBCdXR0b25JbnRlcmZhY2U7XG4gICAgc2F2ZUJ1dHRvbjogQnV0dG9uSW50ZXJmYWNlO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBhcHBTdGF0ZTogQXBwU3RhdGVTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGxhbmd1YWdlU3RvcmU6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHB1YmxpYyBtb2RhbDogTmdiQWN0aXZlTW9kYWwpIHtcbiAgICB9XG5cbiAgICBkcm9wKGV2ZW50OiBDZGtEcmFnRHJvcDx7fVtdLCBhbnk+KTogdm9pZCB7XG4gICAgICAgIGlmIChldmVudC5wcmV2aW91c0NvbnRhaW5lciA9PT0gZXZlbnQuY29udGFpbmVyKSB7XG4gICAgICAgICAgICBtb3ZlSXRlbUluQXJyYXkoZXZlbnQuY29udGFpbmVyLmRhdGEsIGV2ZW50LnByZXZpb3VzSW5kZXgsIGV2ZW50LmN1cnJlbnRJbmRleCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cmFuc2ZlckFycmF5SXRlbShldmVudC5wcmV2aW91c0NvbnRhaW5lci5kYXRhLFxuICAgICAgICAgICAgICAgIGV2ZW50LmNvbnRhaW5lci5kYXRhLFxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZpb3VzSW5kZXgsXG4gICAgICAgICAgICAgICAgZXZlbnQuY3VycmVudEluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEhlYWRlckxhYmVsKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmxhbmd1YWdlU3RvcmUuZ2V0RmllbGRMYWJlbCgnTEJMX0NPTFVNTl9TRUxFQ1RPUl9NT0RBTF9USVRMRScpO1xuICAgIH1cblxuICAgIGdldENvbHVtbkxhYmVsKGxhYmVsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5sYW5ndWFnZVN0b3JlLmdldEZpZWxkTGFiZWwobGFiZWwsIHRoaXMuYXBwU3RhdGUuZ2V0TW9kdWxlKCkpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMuY2xvc2VCdXR0b25JY29uID0ge1xuICAgICAgICAgICAga2xhc3M6IFsnYnRuJywgJ2J0bi1vdXRsaW5lLWxpZ2h0JywgJ2J0bi1zbSddLFxuICAgICAgICAgICAgb25DbGljazogKCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubW9kYWwuY2xvc2Uoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnY2xvc2UtYnV0dG9uJ1xuICAgICAgICAgICAgICAgIH0gYXMgTW9kYWxDbG9zZUZlZWRCYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBhcyBCdXR0b25JbnRlcmZhY2U7XG5cbiAgICAgICAgdGhpcy5jbG9zZUJ1dHRvbiA9IHtcbiAgICAgICAgICAgIGtsYXNzOiBbJ2J0bicsICdtb2RhbC1idXR0b24tY2FuY2VsJ10sXG4gICAgICAgICAgICBsYWJlbEtleTogJ0xCTF9DT0xVTU5fU0VMRUNUT1JfQ0xPU0VfQlVUVE9OJyxcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsLmNsb3NlKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Nsb3NlLWJ1dHRvbidcbiAgICAgICAgICAgICAgICB9IGFzIE1vZGFsQ2xvc2VGZWVkQmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gYXMgQnV0dG9uSW50ZXJmYWNlO1xuXG4gICAgICAgIHRoaXMuc2F2ZUJ1dHRvbiA9IHtcbiAgICAgICAgICAgIGtsYXNzOiBbJ2J0bicsICdtb2RhbC1idXR0b24tc2F2ZSddLFxuICAgICAgICAgICAgbGFiZWxLZXk6ICdMQkxfQ09MVU1OX1NFTEVDVE9SX1NBVkVfQlVUVE9OJyxcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsLmNsb3NlKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Nsb3NlLWJ1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXllZDogdGhpcy5kaXNwbGF5ZWQsXG4gICAgICAgICAgICAgICAgICAgIGhpZGRlbjogdGhpcy5oaWRkZW5cbiAgICAgICAgICAgICAgICB9IGFzIE1vZGFsQ2xvc2VGZWVkQmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gYXMgQnV0dG9uSW50ZXJmYWNlO1xuXG4gICAgfVxuXG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG5cbjxzY3JtLW1vZGFsXG4gICAgW2Nsb3NhYmxlXT1cInRydWVcIlxuICAgIFtjbG9zZV09XCJjbG9zZUJ1dHRvbkljb25cIlxuICAgIFt0aXRsZV09XCJnZXRIZWFkZXJMYWJlbCgpXCJcbiAgICBbdGl0bGVLZXldPVwidGl0bGVLZXlcIlxuICAgIGtsYXNzPVwiY29sdW1uLWNob29zZXItbW9kYWxcIj5cblxuICAgIDxkaXYgbW9kYWwtYm9keT5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGJkLWhpZ2hsaWdodFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtMiBmbGV4LWZpbGwgYmQtaGlnaGxpZ2h0IGNvbHVtbi1jaG9vc2VyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImNvbHVtbi1jaG9vc2VyLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzY3JtLWxhYmVsIGxhYmVsS2V5PVwiTEJMX0NPTFVNTl9TRUxFQ1RPUl9ESVNQTEFZRURfQ09MU1wiPjwvc2NybS1sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2gyPlxuXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjZGtEcm9wTGlzdFxuICAgICAgICAgICAgICAgICAgICAjZGlzcGxheWVkTGlzdD1cImNka0Ryb3BMaXN0XCJcbiAgICAgICAgICAgICAgICAgICAgW2Nka0Ryb3BMaXN0RGF0YV09XCJkaXNwbGF5ZWRcIlxuICAgICAgICAgICAgICAgICAgICBbY2RrRHJvcExpc3RDb25uZWN0ZWRUb109XCJbaGlkZGVuTGlzdF1cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNvbHVtbi1jaG9vc2VyLWxpc3RcIlxuICAgICAgICAgICAgICAgICAgICAoY2RrRHJvcExpc3REcm9wcGVkKT1cImRyb3AoJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uLWNob29zZXItaXRlbSBjb2x1bW4tZGlzcGxheWVkXCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZGlzcGxheWVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjZGtEcmFnPlxuICAgICAgICAgICAgICAgICAgICAgICAge3tnZXRDb2x1bW5MYWJlbChpdGVtLmxhYmVsKX19XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC0yIGZsZXgtZmlsbCBiZC1oaWdobGlnaHQgY29sdW1uLWNob29zZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiY29sdW1uLWNob29zZXItdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNjcm0tbGFiZWwgbGFiZWxLZXk9XCJMQkxfQ09MVU1OX1NFTEVDVE9SX0hJRERFTl9DT0xTXCI+PC9zY3JtLWxhYmVsPlxuICAgICAgICAgICAgICAgIDwvaDI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNka0Ryb3BMaXN0XG4gICAgICAgICAgICAgICAgICAgICNoaWRkZW5MaXN0PVwiY2RrRHJvcExpc3RcIlxuICAgICAgICAgICAgICAgICAgICBbY2RrRHJvcExpc3REYXRhXT1cImhpZGRlblwiXG4gICAgICAgICAgICAgICAgICAgIFtjZGtEcm9wTGlzdENvbm5lY3RlZFRvXT1cIltkaXNwbGF5ZWRMaXN0XVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY29sdW1uLWNob29zZXItbGlzdFwiXG4gICAgICAgICAgICAgICAgICAgIChjZGtEcm9wTGlzdERyb3BwZWQpPVwiZHJvcCgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4tY2hvb3Nlci1pdGVtIGNvbHVtbi1oaWRkZW5cIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBoaWRkZW5cIiBjZGtEcmFnPlxuICAgICAgICAgICAgICAgICAgICAgICAge3tnZXRDb2x1bW5MYWJlbChpdGVtLmxhYmVsKX19XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBtb2RhbC1mb290ZXI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1idXR0b25zXCI+XG4gICAgICAgICAgICA8c2NybS1idXR0b24gZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBbY29uZmlnXT1cImNsb3NlQnV0dG9uXCI+PC9zY3JtLWJ1dHRvbj5cbiAgICAgICAgICAgIDxzY3JtLWJ1dHRvbiBbY29uZmlnXT1cInNhdmVCdXR0b25cIj48L3Njcm0tYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuPC9zY3JtLW1vZGFsPlxuIl19