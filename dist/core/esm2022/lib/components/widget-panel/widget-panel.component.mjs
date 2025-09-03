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
import { animate, style, transition, trigger } from '@angular/animations';
import { LanguageStore } from '../../store/language/language.store';
import * as i0 from "@angular/core";
import * as i1 from "../../store/language/language.store";
import * as i2 from "@angular/common";
import * as i3 from "../panel/panel.component";
const _c0 = [[["", "widget-header-icon-area", ""]], [["", "widget-header-status-area", ""]], [["", "widget-header-button", ""]], [["", "widget-body", ""]]];
const _c1 = ["[widget-header-icon-area]", "[widget-header-status-area]", "[widget-header-button]", "[widget-body]"];
function WidgetPanelComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵprojection(1, 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("@widgetContentFade", ctx_r0.displayContent ? "true" : "false");
} }
export class WidgetPanelComponent {
    constructor(languageStore) {
        this.languageStore = languageStore;
        this.title = '';
        this.titleKey = '';
        this.showHeader = true;
        this.displayContent = true;
    }
    ngOnInit() {
    }
    static { this.ɵfac = function WidgetPanelComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || WidgetPanelComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: WidgetPanelComponent, selectors: [["scrm-widget-panel"]], inputs: { title: "title", titleKey: "titleKey", showHeader: "showHeader", mode: "mode" }, ngContentSelectors: _c1, decls: 10, vars: 5, consts: [[1, "accordion", "widget-panel", "mr-0", "shadow-sm"], ["bodyPadding", "0", 3, "mode", "title", "titleKey", "showHeader"], ["panel-icon-area", ""], ["panel-status-area", ""], ["panel-header-button", ""], ["panel-body", ""], ["class", "widget collapse show open-close-container", "data-parent", ".widget-panel", 4, "ngIf"], ["data-parent", ".widget-panel", 1, "widget", "collapse", "show", "open-close-container"]], template: function WidgetPanelComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵelementStart(0, "div", 0)(1, "scrm-panel", 1)(2, "span", 2);
            i0.ɵɵprojection(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "span", 3);
            i0.ɵɵprojection(5, 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "span", 4);
            i0.ɵɵprojection(7, 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 5);
            i0.ɵɵtemplate(9, WidgetPanelComponent_div_9_Template, 2, 1, "div", 6);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("mode", ctx.mode)("title", ctx.title)("titleKey", ctx.titleKey)("showHeader", ctx.showHeader);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngIf", ctx.displayContent);
        } }, dependencies: [i2.NgIf, i3.PanelComponent], encapsulation: 2, data: { animation: [
                trigger('widgetFade', [
                    transition('void => *', [
                        style({ transform: 'translateX(100%)', opacity: 0 }),
                        animate('500ms', style({ transform: 'translateX(0)', opacity: 1 }))
                    ]),
                    transition('* => void', [
                        style({ transform: 'translateX(0)', opacity: 1 }),
                        animate('500ms', style({ transform: 'translateX(100%)', opacity: 0 }))
                    ])
                ]),
                trigger('widgetContentFade', [
                    transition('void => *', [
                        style({ transform: 'translateY(-5%)', opacity: 0 }),
                        animate('500ms', style({ transform: 'translateY(0)', opacity: 1 }))
                    ]),
                    transition('* => void', [
                        style({ transform: 'translateY(0)', opacity: 1 }),
                        animate('500ms', style({ transform: 'translateY(-5%)', opacity: 0 }))
                    ])
                ])
            ] } }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WidgetPanelComponent, [{
        type: Component,
        args: [{ selector: 'scrm-widget-panel', animations: [
                    trigger('widgetFade', [
                        transition('void => *', [
                            style({ transform: 'translateX(100%)', opacity: 0 }),
                            animate('500ms', style({ transform: 'translateX(0)', opacity: 1 }))
                        ]),
                        transition('* => void', [
                            style({ transform: 'translateX(0)', opacity: 1 }),
                            animate('500ms', style({ transform: 'translateX(100%)', opacity: 0 }))
                        ])
                    ]),
                    trigger('widgetContentFade', [
                        transition('void => *', [
                            style({ transform: 'translateY(-5%)', opacity: 0 }),
                            animate('500ms', style({ transform: 'translateY(0)', opacity: 1 }))
                        ]),
                        transition('* => void', [
                            style({ transform: 'translateY(0)', opacity: 1 }),
                            animate('500ms', style({ transform: 'translateY(-5%)', opacity: 0 }))
                        ])
                    ])
                ], template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div class=\"accordion widget-panel mr-0 shadow-sm\">\n    <scrm-panel [mode]=\"mode\" [title]=\"title\" [titleKey]=\"titleKey\" [showHeader]=\"showHeader\" bodyPadding=\"0\">\n        <span panel-icon-area>\n            <ng-content select=\"[widget-header-icon-area]\"></ng-content>\n        </span>\n        <span panel-status-area>\n            <ng-content select=\"[widget-header-status-area]\"></ng-content>\n        </span>\n        <span panel-header-button>\n            <ng-content select=\"[widget-header-button]\"></ng-content>\n        </span>\n        <div panel-body>\n            <div *ngIf=\"displayContent\"\n                 class=\"widget collapse show open-close-container\"\n                 data-parent=\".widget-panel\"\n                 [@widgetContentFade]=\"displayContent ? 'true' : 'false'\">\n                <ng-content select=\"[widget-body]\"></ng-content>\n            </div>\n        </div>\n    </scrm-panel>\n</div>\n" }]
    }], () => [{ type: i1.LanguageStore }], { title: [{
            type: Input
        }], titleKey: [{
            type: Input
        }], showHeader: [{
            type: Input
        }], mode: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(WidgetPanelComponent, { className: "WidgetPanelComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb21wb25lbnRzL3dpZGdldC1wYW5lbC93aWRnZXQtcGFuZWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvd2lkZ2V0LXBhbmVsL3dpZGdldC1wYW5lbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDdkQsT0FBTyxFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3hFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQzs7Ozs7Ozs7SUNXdEQsOEJBRzhEO0lBQzFELHFCQUFnRDtJQUNwRCxpQkFBTTs7O0lBRkQsNkVBQXdEOztBRGlCekUsTUFBTSxPQUFPLG9CQUFvQjtJQVE3QixZQUFtQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQVB0QyxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFHM0IsbUJBQWMsR0FBRyxJQUFJLENBQUM7SUFHdEIsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDO3FIQVpRLG9CQUFvQjtvRUFBcEIsb0JBQW9COztZQzlCekIsQUFESixBQURKLDhCQUFtRCxvQkFDMkQsY0FDaEY7WUFDbEIsa0JBQTREO1lBQ2hFLGlCQUFPO1lBQ1AsK0JBQXdCO1lBQ3BCLHFCQUE4RDtZQUNsRSxpQkFBTztZQUNQLCtCQUEwQjtZQUN0QixxQkFBeUQ7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QVMsRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBQyxDQUFDOzRCQUMvQyxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFDLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQzt5QkFDdEUsQ0FBQztxQkFDTCxDQUFDO2lCQUNMOzhDQUlRLEtBQUs7a0JBQWIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLOztrRkFKRyxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7YW5pbWF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXJ9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5pbXBvcnQge1BhbmVsQ29sbGFwc2VNb2RlfSBmcm9tIFwiLi4vcGFuZWwvcGFuZWwuY29tcG9uZW50XCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLXdpZGdldC1wYW5lbCcsXG4gICAgdGVtcGxhdGVVcmw6ICd3aWRnZXQtcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxuICAgIGFuaW1hdGlvbnM6IFtcbiAgICAgICAgdHJpZ2dlcignd2lkZ2V0RmFkZScsIFtcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgICAgICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgxMDAlKScsIG9wYWNpdHk6IDB9KSxcbiAgICAgICAgICAgICAgICBhbmltYXRlKCc1MDBtcycsIHN0eWxlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJywgb3BhY2l0eTogMX0pKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICAgICAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknLCBvcGFjaXR5OiAxfSksXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnNTAwbXMnLCBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgxMDAlKScsIG9wYWNpdHk6IDB9KSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICB0cmlnZ2VyKCd3aWRnZXRDb250ZW50RmFkZScsIFtcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgICAgICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNSUpJywgb3BhY2l0eTogMH0pLFxuICAgICAgICAgICAgICAgIGFuaW1hdGUoJzUwMG1zJywgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknLCBvcGFjaXR5OiAxfSkpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKScsIG9wYWNpdHk6IDF9KSxcbiAgICAgICAgICAgICAgICBhbmltYXRlKCc1MDBtcycsIHN0eWxlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01JSknLCBvcGFjaXR5OiAwfSkpXG4gICAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBXaWRnZXRQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQElucHV0KCkgdGl0bGUgPSAnJztcbiAgICBASW5wdXQoKSB0aXRsZUtleSA9ICcnO1xuICAgIEBJbnB1dCgpIHNob3dIZWFkZXIgPSB0cnVlO1xuICAgIEBJbnB1dCgpIG1vZGU6IFBhbmVsQ29sbGFwc2VNb2RlO1xuXG4gICAgZGlzcGxheUNvbnRlbnQgPSB0cnVlO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGxhbmd1YWdlU3RvcmU6IExhbmd1YWdlU3RvcmUpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48ZGl2IGNsYXNzPVwiYWNjb3JkaW9uIHdpZGdldC1wYW5lbCBtci0wIHNoYWRvdy1zbVwiPlxuICAgIDxzY3JtLXBhbmVsIFttb2RlXT1cIm1vZGVcIiBbdGl0bGVdPVwidGl0bGVcIiBbdGl0bGVLZXldPVwidGl0bGVLZXlcIiBbc2hvd0hlYWRlcl09XCJzaG93SGVhZGVyXCIgYm9keVBhZGRpbmc9XCIwXCI+XG4gICAgICAgIDxzcGFuIHBhbmVsLWljb24tYXJlYT5cbiAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIlt3aWRnZXQtaGVhZGVyLWljb24tYXJlYV1cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gcGFuZWwtc3RhdHVzLWFyZWE+XG4gICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbd2lkZ2V0LWhlYWRlci1zdGF0dXMtYXJlYV1cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gcGFuZWwtaGVhZGVyLWJ1dHRvbj5cbiAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIlt3aWRnZXQtaGVhZGVyLWJ1dHRvbl1cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGRpdiBwYW5lbC1ib2R5PlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImRpc3BsYXlDb250ZW50XCJcbiAgICAgICAgICAgICAgICAgY2xhc3M9XCJ3aWRnZXQgY29sbGFwc2Ugc2hvdyBvcGVuLWNsb3NlLWNvbnRhaW5lclwiXG4gICAgICAgICAgICAgICAgIGRhdGEtcGFyZW50PVwiLndpZGdldC1wYW5lbFwiXG4gICAgICAgICAgICAgICAgIFtAd2lkZ2V0Q29udGVudEZhZGVdPVwiZGlzcGxheUNvbnRlbnQgPyAndHJ1ZScgOiAnZmFsc2UnXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3dpZGdldC1ib2R5XVwiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3Njcm0tcGFuZWw+XG48L2Rpdj5cbiJdfQ==