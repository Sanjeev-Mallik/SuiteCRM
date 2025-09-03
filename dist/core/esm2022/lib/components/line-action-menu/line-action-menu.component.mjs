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
import { Component, ElementRef, HostListener, Input, signal } from '@angular/core';
import { Button } from '../../common/components/button/button.model';
import { isFalse } from '../../common/utils/value-utils';
import { LanguageStore } from '../../store/language/language.store';
import { BehaviorSubject, combineLatestWith } from 'rxjs';
import { ScreenSize, ScreenSizeObserverService } from '../../services/ui/screen-size-observer/screen-size-observer.service';
import { SystemConfigStore } from '../../store/system-config/system-config.store';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../../store/language/language.store";
import * as i2 from "../../services/ui/screen-size-observer/screen-size-observer.service";
import * as i3 from "../../store/system-config/system-config.store";
import * as i4 from "@angular/common";
import * as i5 from "../image/image.component";
import * as i6 from "../button-group/button-group.component";
function LineActionMenuComponent_ng_container_0_scrm_button_group_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-button-group", 7);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("config$", ctx_r1.config$)("klass", "icon-bar-block");
} }
function LineActionMenuComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div");
    i0.ɵɵtemplate(5, LineActionMenuComponent_ng_container_0_scrm_button_group_5_Template, 1, 2, "scrm-button-group", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 5);
    i0.ɵɵlistener("click", function LineActionMenuComponent_ng_container_0_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.toggleExpand(ctx_r1.record == null ? null : ctx_r1.record.id)); });
    i0.ɵɵelement(7, "scrm-image", 6);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵclassMap(ctx_r1.wrapperClass);
    i0.ɵɵproperty("ngClass", ctx_r1.isActive ? "active" : "");
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r1.klass);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.config$);
} }
export class LineActionMenuComponent {
    onClickOutside(target) {
        if (!this.el.nativeElement.contains(target)) {
            this.isActive = false;
            this.isClickedOutside.set(true);
        }
    }
    constructor(languageStore, languages, screenSize, systemConfigStore, el) {
        this.languageStore = languageStore;
        this.languages = languages;
        this.screenSize = screenSize;
        this.systemConfigStore = systemConfigStore;
        this.el = el;
        this.klass = '';
        this.wrapperClass = '';
        this.limitConfigKey = 'listview_line_actions_limits';
        this.configState = new BehaviorSubject({ buttons: [] });
        this.config$ = this.configState.asObservable();
        this.isActive = false;
        this.isClickedOutside = signal(false);
        this.buttonClass = 'line-action-item line-action';
        this.buttonGroupClass = 'float-right';
        this.subs = [];
        this.screen = ScreenSize.Medium;
        this.defaultBreakpoint = 3;
    }
    ngOnInit() {
        this.subs.push(this.config.getActions({ record: this.record }).pipe(combineLatestWith(this.screenSize.screenSize$, this.languages.vm$), map(([actions, screenSize, languages]) => {
            if (screenSize) {
                this.screen = screenSize;
            }
            this.configState.next(this.getButtonGroupConfig(actions));
            this.actions = actions;
        })).subscribe());
        this.subs.push(this.activeLineAction.activeAction$.subscribe((activeAction) => {
            if (this.record?.id === activeAction) {
                this.isActive = true;
            }
            else {
                this.isActive = false;
            }
        }));
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
        this.isActive = false;
        this.activeLineAction.resetActiveAction();
    }
    getButtonGroupConfig(actions) {
        const expanded = [];
        const collapsed = [];
        actions.forEach((action) => {
            const button = this.buildButton(action);
            if (action.params && action.params.expanded) {
                expanded.push(button);
                return;
            }
            collapsed.push(button);
        });
        let breakpoint = actions.length;
        const buttons = expanded.concat(collapsed);
        return {
            buttonKlass: [this.buttonClass],
            dropdownLabel: this.languages.getAppString('LBL_ACTIONS') || '',
            breakpoint,
            dropdownOptions: {
                placement: ['bottom-right'],
                wrapperKlass: [(this.buttonGroupClass)]
            },
            buttons
        };
    }
    getBreakpoint() {
        const breakpointMap = this.systemConfigStore.getConfigValue(this.limitConfigKey);
        if (this.screen && breakpointMap && breakpointMap[this.screen]) {
            this.breakpoint = breakpointMap[this.screen];
            return this.breakpoint;
        }
        if (this.breakpoint) {
            return this.breakpoint;
        }
        return this.defaultBreakpoint;
    }
    buildButton(action) {
        const button = {
            titleKey: action.labelKey || '',
            klass: this.buttonClass,
            icon: action.icon || '',
            onClick: () => {
                this.config.runAction(action, {
                    module: (this.record && this.record.module) || '',
                    record: this.record
                });
            }
        };
        if (action.icon) {
            button.icon = action.icon;
        }
        const debounceClick = action?.params?.debounceClick ?? null;
        button.debounceClick = true;
        if (isFalse(debounceClick)) {
            button.debounceClick = false;
        }
        if (action.status) {
            Button.appendClasses(button, [action.status]);
        }
        return button;
    }
    toggleExpand(recordId) {
        const activeId = this.activeLineAction.getActiveAction();
        if (activeId === recordId && !this.isClickedOutside()) {
            this.activeLineAction.resetActiveAction();
        }
        else {
            this.activeLineAction.setActiveAction(recordId);
            this.isActive = true;
            this.isClickedOutside.set(false);
        }
    }
    static { this.ɵfac = function LineActionMenuComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LineActionMenuComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore), i0.ɵɵdirectiveInject(i1.LanguageStore), i0.ɵɵdirectiveInject(i2.ScreenSizeObserverService), i0.ɵɵdirectiveInject(i3.SystemConfigStore), i0.ɵɵdirectiveInject(i0.ElementRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LineActionMenuComponent, selectors: [["scrm-line-action-menu"]], hostBindings: function LineActionMenuComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function LineActionMenuComponent_click_HostBindingHandler($event) { return ctx.onClickOutside($event.target); }, false, i0.ɵɵresolveDocument);
        } }, inputs: { klass: "klass", wrapperClass: "wrapperClass", record: "record", config: "config", activeLineAction: "activeLineAction", limitConfigKey: "limitConfigKey" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "line-action-container"], ["id", "line-action-div", 1, "line-action", "line-action-position"], [3, "ngClass"], [3, "config$", "klass", 4, "ngIf"], ["aria-label", "Mobile Menu Button", 1, "more-button", 3, "click"], ["image", "apps-line", 1, "sicon"], [3, "config$", "klass"]], template: function LineActionMenuComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, LineActionMenuComponent_ng_container_0_Template, 8, 8, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.actions.length);
        } }, dependencies: [i4.NgClass, i4.NgIf, i5.ImageComponent, i6.ButtonGroupComponent], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LineActionMenuComponent, [{
        type: Component,
        args: [{ selector: 'scrm-line-action-menu', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container *ngIf=\"actions.length\">\n    <div class=\"line-action-container\">\n        <div id=\"line-action-div\" class=\"line-action line-action-position\">\n            <div class=\"{{wrapperClass}}\" [ngClass]=\"isActive ? 'active': ''\">\n                <div class=\"{{klass}}\">\n                    <scrm-button-group *ngIf=\"config$\" [config$]=\"config$\" [klass]=\"'icon-bar-block'\"></scrm-button-group>\n                </div>\n                <button class=\"more-button\" aria-label=\"Mobile Menu Button\" (click)=\"toggleExpand(record?.id)\">\n                    <scrm-image class=\"sicon\" image=\"apps-line\"></scrm-image>\n                </button>\n            </div>\n        </div>\n    </div>\n</ng-container>\n" }]
    }], () => [{ type: i1.LanguageStore }, { type: i1.LanguageStore }, { type: i2.ScreenSizeObserverService }, { type: i3.SystemConfigStore }, { type: i0.ElementRef }], { klass: [{
            type: Input
        }], wrapperClass: [{
            type: Input
        }], record: [{
            type: Input
        }], config: [{
            type: Input
        }], activeLineAction: [{
            type: Input
        }], limitConfigKey: [{
            type: Input
        }], onClickOutside: [{
            type: HostListener,
            args: ['document:click', ['$event.target']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LineActionMenuComponent, { className: "LineActionMenuComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS1hY3Rpb24tbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9saW5lLWFjdGlvbi1tZW51L2xpbmUtYWN0aW9uLW1lbnUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvbGluZS1hY3Rpb24tbWVudS9saW5lLWFjdGlvbi1tZW51LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFcEcsT0FBTyxFQUFDLE1BQU0sRUFBa0IsTUFBTSw2Q0FBNkMsQ0FBQztBQUVwRixPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFFdkQsT0FBTyxFQUFDLGFBQWEsRUFBa0IsTUFBTSxxQ0FBcUMsQ0FBQztBQUNuRixPQUFPLEVBQUMsZUFBZSxFQUFFLGlCQUFpQixFQUEyQixNQUFNLE1BQU0sQ0FBQztBQUNsRixPQUFPLEVBQ0gsVUFBVSxFQUNWLHlCQUF5QixFQUM1QixNQUFNLHFFQUFxRSxDQUFDO0FBQzdFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBQ2hGLE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7O0lDUGYsdUNBQXNHOzs7SUFBL0MsQUFBcEIsd0NBQW1CLDJCQUEyQjs7OztJQUxyRyw2QkFBcUM7SUFJckIsQUFESixBQURKLEFBREosOEJBQW1DLGFBQ29DLGFBQ0csVUFDdkM7SUFDbkIsbUhBQWtGO0lBQ3RGLGlCQUFNO0lBQ04saUNBQStGO0lBQW5D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QUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxnQkFBZ0I7a0JBQXhCLEtBQUs7WUFDRyxjQUFjO2tCQUF0QixLQUFLO1lBbUJOLGNBQWM7a0JBRGIsWUFBWTttQkFBQyxnQkFBZ0IsRUFBRSxDQUFDLGVBQWUsQ0FBQzs7a0ZBekJ4Qyx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgc2lnbmFsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QWN0aW9uLCBBY3Rpb25Db250ZXh0LCBBY3Rpb25EYXRhU291cmNlLCBBY3RpdmVMaW5lQWN0aW9ufSBmcm9tICcuLi8uLi9jb21tb24vYWN0aW9ucy9hY3Rpb24ubW9kZWwnO1xuaW1wb3J0IHtCdXR0b24sIEJ1dHRvbkludGVyZmFjZX0gZnJvbSAnLi4vLi4vY29tbW9uL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5tb2RlbCc7XG5pbXBvcnQge0J1dHRvbkdyb3VwSW50ZXJmYWNlfSBmcm9tICcuLi8uLi9jb21tb24vY29tcG9uZW50cy9idXR0b24vYnV0dG9uLWdyb3VwLm1vZGVsJztcbmltcG9ydCB7aXNGYWxzZX0gZnJvbSAnLi4vLi4vY29tbW9uL3V0aWxzL3ZhbHVlLXV0aWxzJztcbmltcG9ydCB7UmVjb3JkfSBmcm9tICcuLi8uLi9jb21tb24vcmVjb3JkL3JlY29yZC5tb2RlbCc7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmUsIExhbmd1YWdlU3RyaW5nc30gZnJvbSAnLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIGNvbWJpbmVMYXRlc3RXaXRoLCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgICBTY3JlZW5TaXplLFxuICAgIFNjcmVlblNpemVPYnNlcnZlclNlcnZpY2Vcbn0gZnJvbSAnLi4vLi4vc2VydmljZXMvdWkvc2NyZWVuLXNpemUtb2JzZXJ2ZXIvc2NyZWVuLXNpemUtb2JzZXJ2ZXIuc2VydmljZSc7XG5pbXBvcnQge1N5c3RlbUNvbmZpZ1N0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS9zeXN0ZW0tY29uZmlnL3N5c3RlbS1jb25maWcuc3RvcmUnO1xuaW1wb3J0IHttYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGludGVyZmFjZSBMaW5lQWN0aW9uTWVudVZpZXdNb2RlbCB7XG4gICAgYWN0aW9uczogQWN0aW9uW107XG4gICAgc2NyZWVuU2l6ZTogU2NyZWVuU2l6ZTtcbiAgICBsYW5ndWFnZXM6IExhbmd1YWdlU3RyaW5ncztcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLWxpbmUtYWN0aW9uLW1lbnUnLFxuICAgIHRlbXBsYXRlVXJsOiAnbGluZS1hY3Rpb24tbWVudS5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTGluZUFjdGlvbk1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBASW5wdXQoKSBrbGFzcyA9ICcnO1xuICAgIEBJbnB1dCgpIHdyYXBwZXJDbGFzcyA9ICcnO1xuICAgIEBJbnB1dCgpIHJlY29yZDogUmVjb3JkO1xuICAgIEBJbnB1dCgpIGNvbmZpZzogQWN0aW9uRGF0YVNvdXJjZTtcbiAgICBASW5wdXQoKSBhY3RpdmVMaW5lQWN0aW9uOiBBY3RpdmVMaW5lQWN0aW9uO1xuICAgIEBJbnB1dCgpIGxpbWl0Q29uZmlnS2V5ID0gJ2xpc3R2aWV3X2xpbmVfYWN0aW9uc19saW1pdHMnO1xuICAgIGNvbmZpZ1N0YXRlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxCdXR0b25Hcm91cEludGVyZmFjZT4oe2J1dHRvbnM6IFtdfSk7XG4gICAgY29uZmlnJCA9IHRoaXMuY29uZmlnU3RhdGUuYXNPYnNlcnZhYmxlKCk7XG4gICAgYWN0aW9uczogQWN0aW9uW107XG4gICAgaXNBY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGlzQ2xpY2tlZE91dHNpZGUgPSBzaWduYWw8Ym9vbGVhbj4oZmFsc2UpXG5cbiAgICB2bSQ6IE9ic2VydmFibGU8TGluZUFjdGlvbk1lbnVWaWV3TW9kZWw+O1xuXG4gICAgcHJvdGVjdGVkIGJ1dHRvbkNsYXNzID0gJ2xpbmUtYWN0aW9uLWl0ZW0gbGluZS1hY3Rpb24nO1xuICAgIHByb3RlY3RlZCBidXR0b25Hcm91cENsYXNzID0gJ2Zsb2F0LXJpZ2h0JztcblxuICAgIHByb3RlY3RlZCBzdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuICAgIHByb3RlY3RlZCBzY3JlZW46IFNjcmVlblNpemUgPSBTY3JlZW5TaXplLk1lZGl1bTtcbiAgICBwcm90ZWN0ZWQgZGVmYXVsdEJyZWFrcG9pbnQgPSAzO1xuICAgIHByb3RlY3RlZCBicmVha3BvaW50OiBudW1iZXI7XG5cbiAgICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsnJGV2ZW50LnRhcmdldCddKVxuICAgIG9uQ2xpY2tPdXRzaWRlKHRhcmdldCkge1xuICAgICAgICBpZiAoIXRoaXMuZWwubmF0aXZlRWxlbWVudC5jb250YWlucyh0YXJnZXQpKSB7XG4gICAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmlzQ2xpY2tlZE91dHNpZGUuc2V0KHRydWUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGxhbmd1YWdlU3RvcmU6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBsYW5ndWFnZXM6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBzY3JlZW5TaXplOiBTY3JlZW5TaXplT2JzZXJ2ZXJTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgc3lzdGVtQ29uZmlnU3RvcmU6IFN5c3RlbUNvbmZpZ1N0b3JlLFxuICAgICAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmXG4gICAgKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMuY29uZmlnLmdldEFjdGlvbnMoe3JlY29yZDogdGhpcy5yZWNvcmR9KS5waXBlKFxuICAgICAgICAgICAgY29tYmluZUxhdGVzdFdpdGgoXG4gICAgICAgICAgICAgICAgdGhpcy5zY3JlZW5TaXplLnNjcmVlblNpemUkLFxuICAgICAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2VzLnZtJFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIG1hcCgoW2FjdGlvbnMsIHNjcmVlblNpemUsIGxhbmd1YWdlc10pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc2NyZWVuU2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcmVlbiA9IHNjcmVlblNpemU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnU3RhdGUubmV4dCh0aGlzLmdldEJ1dHRvbkdyb3VwQ29uZmlnKGFjdGlvbnMpKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9ucyA9IGFjdGlvbnM7XG4gICAgICAgICAgICB9KVxuICAgICAgICApLnN1YnNjcmliZSgpKTtcblxuICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLmFjdGl2ZUxpbmVBY3Rpb24uYWN0aXZlQWN0aW9uJC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAoYWN0aXZlQWN0aW9uOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZWNvcmQ/LmlkID09PSBhY3RpdmVBY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3Vicy5mb3JFYWNoKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hY3RpdmVMaW5lQWN0aW9uLnJlc2V0QWN0aXZlQWN0aW9uKCk7XG4gICAgfVxuXG4gICAgZ2V0QnV0dG9uR3JvdXBDb25maWcoYWN0aW9uczogQWN0aW9uW10pOiBCdXR0b25Hcm91cEludGVyZmFjZSB7XG5cbiAgICAgICAgY29uc3QgZXhwYW5kZWQgPSBbXTtcbiAgICAgICAgY29uc3QgY29sbGFwc2VkID0gW107XG5cbiAgICAgICAgYWN0aW9ucy5mb3JFYWNoKChhY3Rpb246IEFjdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gdGhpcy5idWlsZEJ1dHRvbihhY3Rpb24pO1xuXG4gICAgICAgICAgICBpZiAoYWN0aW9uLnBhcmFtcyAmJiBhY3Rpb24ucGFyYW1zLmV4cGFuZGVkKSB7XG4gICAgICAgICAgICAgICAgZXhwYW5kZWQucHVzaChidXR0b24pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29sbGFwc2VkLnB1c2goYnV0dG9uKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGJyZWFrcG9pbnQgPSBhY3Rpb25zLmxlbmd0aDtcblxuICAgICAgICBjb25zdCBidXR0b25zID0gZXhwYW5kZWQuY29uY2F0KGNvbGxhcHNlZCk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJ1dHRvbktsYXNzOiBbdGhpcy5idXR0b25DbGFzc10sXG4gICAgICAgICAgICBkcm9wZG93bkxhYmVsOiB0aGlzLmxhbmd1YWdlcy5nZXRBcHBTdHJpbmcoJ0xCTF9BQ1RJT05TJykgfHwgJycsXG4gICAgICAgICAgICBicmVha3BvaW50LFxuICAgICAgICAgICAgZHJvcGRvd25PcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgcGxhY2VtZW50OiBbJ2JvdHRvbS1yaWdodCddLFxuICAgICAgICAgICAgICAgIHdyYXBwZXJLbGFzczogWyh0aGlzLmJ1dHRvbkdyb3VwQ2xhc3MpXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJ1dHRvbnNcbiAgICAgICAgfSBhcyBCdXR0b25Hcm91cEludGVyZmFjZTtcbiAgICB9XG5cbiAgICBnZXRCcmVha3BvaW50KCk6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IGJyZWFrcG9pbnRNYXAgPSB0aGlzLnN5c3RlbUNvbmZpZ1N0b3JlLmdldENvbmZpZ1ZhbHVlKHRoaXMubGltaXRDb25maWdLZXkpO1xuXG4gICAgICAgIGlmICh0aGlzLnNjcmVlbiAmJiBicmVha3BvaW50TWFwICYmIGJyZWFrcG9pbnRNYXBbdGhpcy5zY3JlZW5dKSB7XG4gICAgICAgICAgICB0aGlzLmJyZWFrcG9pbnQgPSBicmVha3BvaW50TWFwW3RoaXMuc2NyZWVuXTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJyZWFrcG9pbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5icmVha3BvaW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5icmVha3BvaW50O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdEJyZWFrcG9pbnQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGJ1aWxkQnV0dG9uKGFjdGlvbjogQWN0aW9uKTogQnV0dG9uSW50ZXJmYWNlIHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0ge1xuICAgICAgICAgICAgdGl0bGVLZXk6IGFjdGlvbi5sYWJlbEtleSB8fCAnJyxcbiAgICAgICAgICAgIGtsYXNzOiB0aGlzLmJ1dHRvbkNsYXNzLFxuICAgICAgICAgICAgaWNvbjogYWN0aW9uLmljb24gfHwgJycsXG4gICAgICAgICAgICBvbkNsaWNrOiAoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcucnVuQWN0aW9uKGFjdGlvbiwge1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGU6ICh0aGlzLnJlY29yZCAmJiB0aGlzLnJlY29yZC5tb2R1bGUpIHx8ICcnLFxuICAgICAgICAgICAgICAgICAgICByZWNvcmQ6IHRoaXMucmVjb3JkXG4gICAgICAgICAgICAgICAgfSBhcyBBY3Rpb25Db250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBhcyBCdXR0b25JbnRlcmZhY2U7XG5cbiAgICAgICAgaWYgKGFjdGlvbi5pY29uKSB7XG4gICAgICAgICAgICBidXR0b24uaWNvbiA9IGFjdGlvbi5pY29uO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlYm91bmNlQ2xpY2sgPSBhY3Rpb24/LnBhcmFtcz8uZGVib3VuY2VDbGljayA/PyBudWxsO1xuXG4gICAgICAgIGJ1dHRvbi5kZWJvdW5jZUNsaWNrID0gdHJ1ZTtcblxuICAgICAgICBpZiAoaXNGYWxzZShkZWJvdW5jZUNsaWNrKSkge1xuICAgICAgICAgICAgYnV0dG9uLmRlYm91bmNlQ2xpY2sgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhY3Rpb24uc3RhdHVzKSB7XG4gICAgICAgICAgICBCdXR0b24uYXBwZW5kQ2xhc3NlcyhidXR0b24sIFthY3Rpb24uc3RhdHVzXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYnV0dG9uO1xuICAgIH1cblxuICAgIHRvZ2dsZUV4cGFuZChyZWNvcmRJZDogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZUlkID0gdGhpcy5hY3RpdmVMaW5lQWN0aW9uLmdldEFjdGl2ZUFjdGlvbigpO1xuICAgICAgICBpZiAoYWN0aXZlSWQgPT09IHJlY29yZElkICYmICF0aGlzLmlzQ2xpY2tlZE91dHNpZGUoKSkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVMaW5lQWN0aW9uLnJlc2V0QWN0aXZlQWN0aW9uKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUxpbmVBY3Rpb24uc2V0QWN0aXZlQWN0aW9uKHJlY29yZElkKTtcbiAgICAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pc0NsaWNrZWRPdXRzaWRlLnNldChmYWxzZSlcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJhY3Rpb25zLmxlbmd0aFwiPlxuICAgIDxkaXYgY2xhc3M9XCJsaW5lLWFjdGlvbi1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBpZD1cImxpbmUtYWN0aW9uLWRpdlwiIGNsYXNzPVwibGluZS1hY3Rpb24gbGluZS1hY3Rpb24tcG9zaXRpb25cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ7e3dyYXBwZXJDbGFzc319XCIgW25nQ2xhc3NdPVwiaXNBY3RpdmUgPyAnYWN0aXZlJzogJydcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwie3trbGFzc319XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzY3JtLWJ1dHRvbi1ncm91cCAqbmdJZj1cImNvbmZpZyRcIiBbY29uZmlnJF09XCJjb25maWckXCIgW2tsYXNzXT1cIidpY29uLWJhci1ibG9jaydcIj48L3Njcm0tYnV0dG9uLWdyb3VwPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtb3JlLWJ1dHRvblwiIGFyaWEtbGFiZWw9XCJNb2JpbGUgTWVudSBCdXR0b25cIiAoY2xpY2spPVwidG9nZ2xlRXhwYW5kKHJlY29yZD8uaWQpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzY3JtLWltYWdlIGNsYXNzPVwic2ljb25cIiBpbWFnZT1cImFwcHMtbGluZVwiPjwvc2NybS1pbWFnZT5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvbmctY29udGFpbmVyPlxuIl19