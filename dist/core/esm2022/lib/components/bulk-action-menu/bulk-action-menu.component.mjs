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
import { Component, Input, signal } from '@angular/core';
import { SelectionStatus } from '../../common/views/list/record-selection.model';
import { LanguageStore } from '../../store/language/language.store';
import * as i0 from "@angular/core";
import * as i1 from "../../store/language/language.store";
import * as i2 from "@angular/common";
import * as i3 from "@ng-bootstrap/ng-bootstrap";
import * as i4 from "../dropdown-button/dropdown-button.component";
import * as i5 from "../label/label.component";
function BulkActionMenuComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-label", 17);
    i0.ɵɵelementContainerEnd();
} }
export class BulkActionMenuComponent {
    constructor(languageStore) {
        this.languageStore = languageStore;
        this.subs = [];
        this.status = SelectionStatus.NONE;
        this.count = signal(0);
        this.SelectionStatus = SelectionStatus;
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
        this.subs = [];
        this.count = signal(0);
        this.status = SelectionStatus.NONE;
    }
    ngOnInit() {
        this.subs = [];
        this.subs.push(this.selectionSource.getSelectionStatus().subscribe(status => this.status = status));
        this.subs.push(this.selectionSource.getSelectedCount().subscribe(count => this.count.set(count)));
        this.subs.push(this.actionSource.getBulkActions().subscribe(actions => {
            const dropdownConfig = {
                labelKey: 'LBL_BULK_ACTION_BUTTON_LABEL',
                klass: ['bulk-action-button', 'btn', 'btn-sm'],
                wrapperKlass: ['bulk-action-group', 'float-left'],
                items: []
            };
            const dropdownSmallConfig = {
                labelKey: 'LBL_ACTION',
                klass: ['bulk-action-button', 'btn', 'btn-sm'],
                wrapperKlass: ['bulk-action-group', 'float-left'],
                items: []
            };
            Object.keys(actions).forEach(actionKey => {
                const action = actions[actionKey];
                dropdownConfig.items.push({
                    labelKey: action.labelKey ?? '',
                    klass: [`${actionKey}-bulk-action`],
                    onClick: () => {
                        this.actionSource.executeBulkAction(action.key);
                    }
                });
                dropdownSmallConfig.items.push({
                    labelKey: action.labelKey ?? '',
                    klass: [`${actionKey}-bulk-action`],
                    onClick: () => {
                        this.actionSource.executeBulkAction(action.key);
                    }
                });
            });
            this.dropdownConfig = dropdownConfig;
            this.dropdownSmallConfig = dropdownSmallConfig;
        }));
    }
    selectPage() {
        this.selectionSource.updateSelection(SelectionStatus.PAGE);
    }
    selectAll() {
        this.selectionSource.updateSelection(SelectionStatus.ALL);
    }
    deselectAll() {
        this.selectionSource.updateSelection(SelectionStatus.NONE);
    }
    toggleSelection(status) {
        if (status === SelectionStatus.ALL) {
            this.selectionSource.updateSelection(SelectionStatus.NONE);
            return;
        }
        this.selectionSource.updateSelection(SelectionStatus.ALL);
    }
    static { this.ɵfac = function BulkActionMenuComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BulkActionMenuComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BulkActionMenuComponent, selectors: [["scrm-bulk-action-menu"]], inputs: { selectionSource: "selectionSource", actionSource: "actionSource" }, decls: 18, vars: 8, consts: [[1, "bulk-action", "d-flex"], ["ngbDropdown", "", 1, "dropdown", "select-action-group"], ["type", "button", "ngbDropdownToggle", "", "aria-haspopup", "true", "aria-expanded", "false", "aria-hidden", "true", "aria-label", "Select Action Menu", 1, "bulk-action-button", "dropdown-toggle", "btn", "btn-sm"], [1, "checkbox-container"], ["type", "checkbox", "aria-hidden", "true", 3, "change", "checked", "indeterminate"], [1, "checkmark"], [1, "bulk-action-selected-number"], [4, "ngIf"], ["ngbDropdownMenu", "", "aria-hidden", "true", 1, "dropdown-menu"], [1, "dropdown-item", "select-all", 3, "click"], ["labelKey", "LBL_LISTVIEW_OPTION_ENTIRE"], [1, "dropdown-item", "select-page", 3, "click"], ["labelKey", "LBL_LISTVIEW_OPTION_CURRENT"], [1, "dropdown-item", "deselect-all", 3, "click"], ["labelKey", "LBL_LISTVIEW_NONE"], [1, "d-block", "d-sm-none", 3, "disabled", "config"], [1, "d-none", "d-sm-block", 3, "disabled", "config"], ["labelKey", "LBL_LISTVIEW_SELECTED_OBJECTS", 1, "d-none", "d-sm-inline"]], template: function BulkActionMenuComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "button", 2)(3, "label", 3)(4, "input", 4);
            i0.ɵɵlistener("change", function BulkActionMenuComponent_Template_input_change_4_listener() { return ctx.toggleSelection(ctx.status); });
            i0.ɵɵelementEnd();
            i0.ɵɵelement(5, "span", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "span", 6);
            i0.ɵɵtemplate(7, BulkActionMenuComponent_ng_container_7_Template, 2, 0, "ng-container", 7);
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "div", 8)(10, "a", 9);
            i0.ɵɵlistener("click", function BulkActionMenuComponent_Template_a_click_10_listener() { return ctx.selectAll(); });
            i0.ɵɵelement(11, "scrm-label", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "a", 11);
            i0.ɵɵlistener("click", function BulkActionMenuComponent_Template_a_click_12_listener() { return ctx.selectPage(); });
            i0.ɵɵelement(13, "scrm-label", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "a", 13);
            i0.ɵɵlistener("click", function BulkActionMenuComponent_Template_a_click_14_listener() { return ctx.deselectAll(); });
            i0.ɵɵelement(15, "scrm-label", 14);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelement(16, "scrm-dropdown-button", 15)(17, "scrm-dropdown-button", 16);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("checked", ctx.status === "ALL")("indeterminate", ctx.status === "SOME" || ctx.status === "PAGE");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.count() > 0);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.count() > 0 ? ctx.count() : "", " ");
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("disabled", ctx.count() < 1)("config", ctx.dropdownSmallConfig);
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.count() < 1)("config", ctx.dropdownConfig);
        } }, dependencies: [i2.NgIf, i3.NgbDropdown, i3.NgbDropdownToggle, i3.NgbDropdownMenu, i4.DropdownButtonComponent, i5.LabelComponent], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BulkActionMenuComponent, [{
        type: Component,
        args: [{ selector: 'scrm-bulk-action-menu', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div class=\"bulk-action d-flex\">\n    <div ngbDropdown class=\"dropdown select-action-group\">\n        <button class=\"bulk-action-button dropdown-toggle btn btn-sm\"\n                type=\"button\"\n                ngbDropdownToggle\n                aria-haspopup=\"true\"\n                aria-expanded=\"false\"\n                aria-hidden=\"true\"\n                aria-label=\"Select Action Menu\">\n            <label class=\"checkbox-container\">\n                <input type=\"checkbox\"\n                       [checked]=\"status === 'ALL'\"\n                       [indeterminate]=\"status === 'SOME' || status === 'PAGE'\"\n                       (change)=\"toggleSelection(status)\"\n                       aria-hidden=\"true\">\n                <span class=\"checkmark\"></span>\n            </label>\n            <span class=\"bulk-action-selected-number\">\n                <ng-container *ngIf=\"count() > 0\"> <scrm-label class=\"d-none d-sm-inline\" labelKey=\"LBL_LISTVIEW_SELECTED_OBJECTS\"></scrm-label></ng-container> {{count() > 0 ? count() : ''}}\n            </span>\n        </button>\n        <div class=\"dropdown-menu\"\n             ngbDropdownMenu\n             aria-hidden=\"true\">\n            <a class=\"dropdown-item select-all\" (click)=\"selectAll()\">\n                <scrm-label labelKey=\"LBL_LISTVIEW_OPTION_ENTIRE\"></scrm-label>\n            </a>\n            <a class=\"dropdown-item select-page\" (click)=\"selectPage()\">\n                <scrm-label labelKey=\"LBL_LISTVIEW_OPTION_CURRENT\"></scrm-label>\n            </a>\n            <a class=\"dropdown-item deselect-all\" (click)=\"deselectAll()\">\n                <scrm-label labelKey=\"LBL_LISTVIEW_NONE\"></scrm-label>\n            </a>\n        </div>\n    </div>\n    <scrm-dropdown-button class=\"d-block d-sm-none\"\n                          [disabled]=\"count() < 1\"\n                          [config]=\"dropdownSmallConfig\">\n    </scrm-dropdown-button>\n    <scrm-dropdown-button class=\"d-none d-sm-block\"\n                          [disabled]=\"count() < 1\"\n                          [config]=\"dropdownConfig\">\n    </scrm-dropdown-button>\n\n</div>\n" }]
    }], () => [{ type: i1.LanguageStore }], { selectionSource: [{
            type: Input
        }], actionSource: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BulkActionMenuComponent, { className: "BulkActionMenuComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVsay1hY3Rpb24tbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9idWxrLWFjdGlvbi1tZW51L2J1bGstYWN0aW9uLW1lbnUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvYnVsay1hY3Rpb24tbWVudS9idWxrLWFjdGlvbi1tZW51LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUkxRixPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sZ0RBQWdELENBQUM7QUFFL0UsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHFDQUFxQyxDQUFDOzs7Ozs7OztJQ2FsRCw2QkFBa0M7SUFBQyxpQ0FBNkY7OztBREtoSixNQUFNLE9BQU8sdUJBQXVCO0lBWWhDLFlBQXNCLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBTGxELFNBQUksR0FBbUIsRUFBRSxDQUFDO1FBQzFCLFdBQU0sR0FBb0IsZUFBZSxDQUFDLElBQUksQ0FBQztRQUMvQyxVQUFLLEdBQTJCLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQThFdkIsb0JBQWUsR0FBRyxlQUFlLENBQUM7SUExRXJELENBQUM7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFD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Qjs4Q0FLeEIsZUFBZTtrQkFBdkIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7O2tGQUhHLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgc2lnbmFsLCBXcml0YWJsZVNpZ25hbH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGUsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0J1bGtBY3Rpb25zTWFwfSBmcm9tICcuLi8uLi9jb21tb24vYWN0aW9ucy9idWxrLWFjdGlvbi5tb2RlbCc7XG5pbXBvcnQge0Ryb3Bkb3duQnV0dG9uSW50ZXJmYWNlfSBmcm9tICcuLi8uLi9jb21tb24vY29tcG9uZW50cy9idXR0b24vZHJvcGRvd24tYnV0dG9uLm1vZGVsJztcbmltcG9ydCB7U2VsZWN0aW9uU3RhdHVzfSBmcm9tICcuLi8uLi9jb21tb24vdmlld3MvbGlzdC9yZWNvcmQtc2VsZWN0aW9uLm1vZGVsJztcbmltcG9ydCB7U2VsZWN0aW9uRGF0YVNvdXJjZX0gZnJvbSAnLi4vLi4vY29tbW9uL3ZpZXdzL2xpc3Qvc2VsZWN0aW9uLm1vZGVsJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZX0gZnJvbSAnLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJ1bGtBY3Rpb25EYXRhU291cmNlIHtcbiAgICBnZXRCdWxrQWN0aW9ucygpOiBPYnNlcnZhYmxlPEJ1bGtBY3Rpb25zTWFwPjtcblxuICAgIGV4ZWN1dGVCdWxrQWN0aW9uKGFjdGlvbjogc3RyaW5nKTogdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCdWxrQWN0aW9uVmlld01vZGVsIHtcbiAgICBzdGF0dXM6IFNlbGVjdGlvblN0YXR1cztcbiAgICBjb3VudDogbnVtYmVyO1xuICAgIGFjdGlvbnM6IEJ1bGtBY3Rpb25zTWFwO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tYnVsay1hY3Rpb24tbWVudScsXG4gICAgdGVtcGxhdGVVcmw6ICdidWxrLWFjdGlvbi1tZW51LmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBCdWxrQWN0aW9uTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIEBJbnB1dCgpIHNlbGVjdGlvblNvdXJjZTogU2VsZWN0aW9uRGF0YVNvdXJjZTtcbiAgICBASW5wdXQoKSBhY3Rpb25Tb3VyY2U6IEJ1bGtBY3Rpb25EYXRhU291cmNlO1xuXG4gICAgZHJvcGRvd25Db25maWc6IERyb3Bkb3duQnV0dG9uSW50ZXJmYWNlO1xuICAgIGRyb3Bkb3duU21hbGxDb25maWc6IERyb3Bkb3duQnV0dG9uSW50ZXJmYWNlO1xuICAgIHN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gICAgc3RhdHVzOiBTZWxlY3Rpb25TdGF0dXMgPSBTZWxlY3Rpb25TdGF0dXMuTk9ORTtcbiAgICBjb3VudDogV3JpdGFibGVTaWduYWw8bnVtYmVyPiA9IHNpZ25hbCgwKTtcblxuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGxhbmd1YWdlU3RvcmU6IExhbmd1YWdlU3RvcmUpIHtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdWJzLmZvckVhY2goc3ViID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcbiAgICAgICAgdGhpcy5zdWJzID0gW107XG4gICAgICAgIHRoaXMuY291bnQgPSBzaWduYWwoMCk7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gU2VsZWN0aW9uU3RhdHVzLk5PTkU7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3VicyA9IFtdO1xuXG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMuc2VsZWN0aW9uU291cmNlLmdldFNlbGVjdGlvblN0YXR1cygpLnN1YnNjcmliZShzdGF0dXMgPT4gdGhpcy5zdGF0dXMgPSBzdGF0dXMpKTtcbiAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5zZWxlY3Rpb25Tb3VyY2UuZ2V0U2VsZWN0ZWRDb3VudCgpLnN1YnNjcmliZShjb3VudCA9PiB0aGlzLmNvdW50LnNldChjb3VudCkpKTtcblxuICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLmFjdGlvblNvdXJjZS5nZXRCdWxrQWN0aW9ucygpLnN1YnNjcmliZShhY3Rpb25zID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRyb3Bkb3duQ29uZmlnID0ge1xuICAgICAgICAgICAgICAgIGxhYmVsS2V5OiAnTEJMX0JVTEtfQUNUSU9OX0JVVFRPTl9MQUJFTCcsXG4gICAgICAgICAgICAgICAga2xhc3M6IFsnYnVsay1hY3Rpb24tYnV0dG9uJywgJ2J0bicsICdidG4tc20nXSxcbiAgICAgICAgICAgICAgICB3cmFwcGVyS2xhc3M6IFsnYnVsay1hY3Rpb24tZ3JvdXAnLCAnZmxvYXQtbGVmdCddLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXVxuICAgICAgICAgICAgfSBhcyBEcm9wZG93bkJ1dHRvbkludGVyZmFjZTtcblxuICAgICAgICAgICAgY29uc3QgZHJvcGRvd25TbWFsbENvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICBsYWJlbEtleTogJ0xCTF9BQ1RJT04nLFxuICAgICAgICAgICAgICAgIGtsYXNzOiBbJ2J1bGstYWN0aW9uLWJ1dHRvbicsICdidG4nLCAnYnRuLXNtJ10sXG4gICAgICAgICAgICAgICAgd3JhcHBlcktsYXNzOiBbJ2J1bGstYWN0aW9uLWdyb3VwJywgJ2Zsb2F0LWxlZnQnXSxcbiAgICAgICAgICAgICAgICBpdGVtczogW11cbiAgICAgICAgICAgIH0gYXMgRHJvcGRvd25CdXR0b25JbnRlcmZhY2U7XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGFjdGlvbnMpLmZvckVhY2goYWN0aW9uS2V5ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhY3Rpb24gPSBhY3Rpb25zW2FjdGlvbktleV07XG4gICAgICAgICAgICAgICAgZHJvcGRvd25Db25maWcuaXRlbXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsS2V5OiBhY3Rpb24ubGFiZWxLZXkgPz8gJycsXG4gICAgICAgICAgICAgICAgICAgIGtsYXNzOiBbYCR7YWN0aW9uS2V5fS1idWxrLWFjdGlvbmBdLFxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvblNvdXJjZS5leGVjdXRlQnVsa0FjdGlvbihhY3Rpb24ua2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duU21hbGxDb25maWcuaXRlbXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsS2V5OiBhY3Rpb24ubGFiZWxLZXkgPz8gJycsXG4gICAgICAgICAgICAgICAgICAgIGtsYXNzOiBbYCR7YWN0aW9uS2V5fS1idWxrLWFjdGlvbmBdLFxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvblNvdXJjZS5leGVjdXRlQnVsa0FjdGlvbihhY3Rpb24ua2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd25Db25maWcgPSBkcm9wZG93bkNvbmZpZztcbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd25TbWFsbENvbmZpZyA9IGRyb3Bkb3duU21hbGxDb25maWc7XG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBzZWxlY3RQYWdlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNlbGVjdGlvblNvdXJjZS51cGRhdGVTZWxlY3Rpb24oU2VsZWN0aW9uU3RhdHVzLlBBR0UpO1xuICAgIH1cblxuICAgIHNlbGVjdEFsbCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25Tb3VyY2UudXBkYXRlU2VsZWN0aW9uKFNlbGVjdGlvblN0YXR1cy5BTEwpO1xuICAgIH1cblxuICAgIGRlc2VsZWN0QWxsKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNlbGVjdGlvblNvdXJjZS51cGRhdGVTZWxlY3Rpb24oU2VsZWN0aW9uU3RhdHVzLk5PTkUpO1xuICAgIH1cblxuICAgIHRvZ2dsZVNlbGVjdGlvbihzdGF0dXM6IFNlbGVjdGlvblN0YXR1cyk6IHZvaWQge1xuICAgICAgICBpZiAoc3RhdHVzID09PSBTZWxlY3Rpb25TdGF0dXMuQUxMKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvblNvdXJjZS51cGRhdGVTZWxlY3Rpb24oU2VsZWN0aW9uU3RhdHVzLk5PTkUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZWxlY3Rpb25Tb3VyY2UudXBkYXRlU2VsZWN0aW9uKFNlbGVjdGlvblN0YXR1cy5BTEwpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCByZWFkb25seSBTZWxlY3Rpb25TdGF0dXMgPSBTZWxlY3Rpb25TdGF0dXM7XG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48ZGl2IGNsYXNzPVwiYnVsay1hY3Rpb24gZC1mbGV4XCI+XG4gICAgPGRpdiBuZ2JEcm9wZG93biBjbGFzcz1cImRyb3Bkb3duIHNlbGVjdC1hY3Rpb24tZ3JvdXBcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1bGstYWN0aW9uLWJ1dHRvbiBkcm9wZG93bi10b2dnbGUgYnRuIGJ0bi1zbVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgbmdiRHJvcGRvd25Ub2dnbGVcbiAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJTZWxlY3QgQWN0aW9uIE1lbnVcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNoZWNrYm94LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICBbY2hlY2tlZF09XCJzdGF0dXMgPT09ICdBTEwnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgW2luZGV0ZXJtaW5hdGVdPVwic3RhdHVzID09PSAnU09NRScgfHwgc3RhdHVzID09PSAnUEFHRSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAoY2hhbmdlKT1cInRvZ2dsZVNlbGVjdGlvbihzdGF0dXMpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJidWxrLWFjdGlvbi1zZWxlY3RlZC1udW1iZXJcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY291bnQoKSA+IDBcIj4gPHNjcm0tbGFiZWwgY2xhc3M9XCJkLW5vbmUgZC1zbS1pbmxpbmVcIiBsYWJlbEtleT1cIkxCTF9MSVNUVklFV19TRUxFQ1RFRF9PQkpFQ1RTXCI+PC9zY3JtLWxhYmVsPjwvbmctY29udGFpbmVyPiB7e2NvdW50KCkgPiAwID8gY291bnQoKSA6ICcnfX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51XCJcbiAgICAgICAgICAgICBuZ2JEcm9wZG93bk1lbnVcbiAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbSBzZWxlY3QtYWxsXCIgKGNsaWNrKT1cInNlbGVjdEFsbCgpXCI+XG4gICAgICAgICAgICAgICAgPHNjcm0tbGFiZWwgbGFiZWxLZXk9XCJMQkxfTElTVFZJRVdfT1BUSU9OX0VOVElSRVwiPjwvc2NybS1sYWJlbD5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbSBzZWxlY3QtcGFnZVwiIChjbGljayk9XCJzZWxlY3RQYWdlKClcIj5cbiAgICAgICAgICAgICAgICA8c2NybS1sYWJlbCBsYWJlbEtleT1cIkxCTF9MSVNUVklFV19PUFRJT05fQ1VSUkVOVFwiPjwvc2NybS1sYWJlbD5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbSBkZXNlbGVjdC1hbGxcIiAoY2xpY2spPVwiZGVzZWxlY3RBbGwoKVwiPlxuICAgICAgICAgICAgICAgIDxzY3JtLWxhYmVsIGxhYmVsS2V5PVwiTEJMX0xJU1RWSUVXX05PTkVcIj48L3Njcm0tbGFiZWw+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzY3JtLWRyb3Bkb3duLWJ1dHRvbiBjbGFzcz1cImQtYmxvY2sgZC1zbS1ub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImNvdW50KCkgPCAxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbmZpZ109XCJkcm9wZG93blNtYWxsQ29uZmlnXCI+XG4gICAgPC9zY3JtLWRyb3Bkb3duLWJ1dHRvbj5cbiAgICA8c2NybS1kcm9wZG93bi1idXR0b24gY2xhc3M9XCJkLW5vbmUgZC1zbS1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJjb3VudCgpIDwgMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtjb25maWddPVwiZHJvcGRvd25Db25maWdcIj5cbiAgICA8L3Njcm0tZHJvcGRvd24tYnV0dG9uPlxuXG48L2Rpdj5cbiJdfQ==