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
import { take } from 'rxjs/operators';
import { AsyncActionService } from '../../../services/process/processes/async-action/async-action';
import { AppStateStore } from '../../../store/app-state/app-state.store';
import { SystemConfigStore } from "../../../store/system-config/system-config.store";
import * as i0 from "@angular/core";
import * as i1 from "../../../services/process/processes/async-action/async-action";
import * as i2 from "../../../store/system-config/system-config.store";
import * as i3 from "../../../store/app-state/app-state.store";
import * as i4 from "@angular/common";
import * as i5 from "@angular/router";
import * as i6 from "../../image/image.component";
import * as i7 from "../../../pipes/truncate/truncate.pipe";
function BaseMenuItemLinkComponent_ng_container_0_scrm_image_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-image", 3);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("image", ctx_r1.icon);
} }
function BaseMenuItemLinkComponent_ng_container_0_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "truncate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(2, 1, ctx_r1.link.label, ctx_r1.charSize.mediumLength));
} }
function BaseMenuItemLinkComponent_ng_container_0_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "truncate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(2, 1, ctx_r1.link.label, ctx_r1.charSize.maxLength));
} }
function BaseMenuItemLinkComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 1);
    i0.ɵɵlistener("click", function BaseMenuItemLinkComponent_ng_container_0_Template_a_click_1_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.config.onClick($event)); })("touchstart", function BaseMenuItemLinkComponent_ng_container_0_Template_a_touchstart_1_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.config.onTouchStart($event)); });
    i0.ɵɵtemplate(2, BaseMenuItemLinkComponent_ng_container_0_scrm_image_2_Template, 1, 1, "scrm-image", 2)(3, BaseMenuItemLinkComponent_ng_container_0_span_3_Template, 3, 4, "span", 0)(4, BaseMenuItemLinkComponent_ng_container_0_span_4_Template, 3, 4, "span", 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r1.class);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.icon);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.link.params);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.link.params);
} }
function BaseMenuItemLinkComponent_ng_container_1_a_1_scrm_image_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-image", 3);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate("image", ctx_r1.icon);
} }
function BaseMenuItemLinkComponent_ng_container_1_a_1_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "truncate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(2, 1, ctx_r1.link.label, ctx_r1.charSize.mediumLength));
} }
function BaseMenuItemLinkComponent_ng_container_1_a_1_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "truncate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(2, 1, ctx_r1.link.label, ctx_r1.charSize.maxLength));
} }
function BaseMenuItemLinkComponent_ng_container_1_a_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 7);
    i0.ɵɵtemplate(1, BaseMenuItemLinkComponent_ng_container_1_a_1_scrm_image_1_Template, 1, 1, "scrm-image", 2)(2, BaseMenuItemLinkComponent_ng_container_1_a_1_span_2_Template, 3, 4, "span", 0)(3, BaseMenuItemLinkComponent_ng_container_1_a_1_span_3_Template, 3, 4, "span", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r1.class)("queryParams", ctx_r1.link.params)("routerLink", ctx_r1.link.route);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.icon);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.link.params);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.link.params);
} }
function BaseMenuItemLinkComponent_ng_container_1_a_2_scrm_image_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-image", 3);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate("image", ctx_r1.icon);
} }
function BaseMenuItemLinkComponent_ng_container_1_a_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 8);
    i0.ɵɵtemplate(1, BaseMenuItemLinkComponent_ng_container_1_a_2_scrm_image_1_Template, 1, 1, "scrm-image", 2);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("href", ctx_r1.link.url, i0.ɵɵsanitizeUrl)("ngClass", ctx_r1.class);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.icon);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.link.label, " ");
} }
function BaseMenuItemLinkComponent_ng_container_1_a_3_scrm_image_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-image", 3);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate("image", ctx_r1.icon);
} }
function BaseMenuItemLinkComponent_ng_container_1_a_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 9);
    i0.ɵɵtemplate(1, BaseMenuItemLinkComponent_ng_container_1_a_3_scrm_image_1_Template, 1, 1, "scrm-image", 2);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r1.class);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.icon);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.link.label, " ");
} }
function BaseMenuItemLinkComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BaseMenuItemLinkComponent_ng_container_1_a_1_Template, 4, 6, "a", 4)(2, BaseMenuItemLinkComponent_ng_container_1_a_2_Template, 3, 4, "a", 5)(3, BaseMenuItemLinkComponent_ng_container_1_a_3_Template, 3, 3, "a", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.link.route);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.link.route && ctx_r1.link.url);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.link.route && !ctx_r1.link.url);
} }
function BaseMenuItemLinkComponent_ng_container_2_scrm_image_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-image", 3);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("image", ctx_r1.icon);
} }
function BaseMenuItemLinkComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 10);
    i0.ɵɵlistener("click", function BaseMenuItemLinkComponent_ng_container_2_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.handleProcess(ctx_r1.link.process)); });
    i0.ɵɵtemplate(2, BaseMenuItemLinkComponent_ng_container_2_scrm_image_2_Template, 1, 1, "scrm-image", 2);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r1.class);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.icon);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.link.label, " ");
} }
export class BaseMenuItemLinkComponent {
    constructor(asyncActionService, systemConfigStore, appState) {
        this.asyncActionService = asyncActionService;
        this.systemConfigStore = systemConfigStore;
        this.appState = appState;
        this.charSize = {
            minLength: 20,
            mediumLength: 20,
            maxLength: 20
        };
    }
    ngOnInit() {
        const characterSizes = this.systemConfigStore.getUi('navbar_truncate_character_sizes');
        this.charSize = { ...characterSizes };
    }
    handleProcess(process) {
        if (!process) {
            return;
        }
        const processType = process;
        const options = {
            action: processType,
            module: this.appState.getModule(),
        };
        this.asyncActionService.run(processType, options).pipe(take(1)).subscribe();
    }
    static { this.ɵfac = function BaseMenuItemLinkComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BaseMenuItemLinkComponent)(i0.ɵɵdirectiveInject(i1.AsyncActionService), i0.ɵɵdirectiveInject(i2.SystemConfigStore), i0.ɵɵdirectiveInject(i3.AppStateStore)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BaseMenuItemLinkComponent, selectors: [["scrm-base-menu-item-link"]], inputs: { link: "link", icon: "icon", class: "class", config: "config" }, decls: 3, vars: 3, consts: [[4, "ngIf"], [3, "click", "touchstart", "ngClass"], [3, "image", 4, "ngIf"], [3, "image"], [3, "ngClass", "queryParams", "routerLink", 4, "ngIf"], [3, "href", "ngClass", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], [3, "ngClass", "queryParams", "routerLink"], [3, "href", "ngClass"], [3, "ngClass"], [3, "click", "ngClass"]], template: function BaseMenuItemLinkComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, BaseMenuItemLinkComponent_ng_container_0_Template, 5, 4, "ng-container", 0)(1, BaseMenuItemLinkComponent_ng_container_1_Template, 4, 3, "ng-container", 0)(2, BaseMenuItemLinkComponent_ng_container_2_Template, 4, 3, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.link.process && (ctx.config == null ? null : ctx.config.onClick));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.link.process && !(ctx.config == null ? null : ctx.config.onClick));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.link.process);
        } }, dependencies: [i4.NgClass, i4.NgIf, i5.RouterLink, i6.ImageComponent, i7.TruncatePipe], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseMenuItemLinkComponent, [{
        type: Component,
        args: [{ selector: 'scrm-base-menu-item-link', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container *ngIf=\"!link.process && config?.onClick\">\n    <a (click)=\"config.onClick($event)\"\n       (touchstart)=\"config.onTouchStart($event)\"\n       [ngClass]=\"class\"\n    >\n        <scrm-image *ngIf=\"icon\" image=\"{{ icon }}\"></scrm-image>\n        <span *ngIf=\"!link.params\">{{ link.label | truncate: charSize.mediumLength }}</span>\n        <span *ngIf=\"link.params\">{{ link.label | truncate: charSize.maxLength }}</span>\n    </a>\n</ng-container>\n<ng-container *ngIf=\"!link.process && !config?.onClick\">\n    <a *ngIf=\"link.route\"\n       [ngClass]=\"class\"\n       [queryParams]=\"link.params\"\n       [routerLink]=\"link.route\"\n    >\n        <scrm-image *ngIf=\"icon\" image=\"{{ icon }}\"></scrm-image>\n        <span *ngIf=\"!link.params\">{{ link.label | truncate: charSize.mediumLength  }}</span>\n        <span *ngIf=\"link.params\">{{ link.label | truncate: charSize.maxLength  }}</span>\n    </a>\n    <a *ngIf=\"!link.route && link.url\"\n       [href]=\"link.url\"\n       [ngClass]=\"class\"\n    >\n        <scrm-image *ngIf=\"icon\" image=\"{{ icon }}\"></scrm-image>\n        {{ link.label }}\n    </a>\n    <a *ngIf=\"!link.route && !link.url\"\n       [ngClass]=\"class\"\n    >\n        <scrm-image *ngIf=\"icon\" image=\"{{ icon }}\"></scrm-image>\n        {{ link.label }}\n    </a>\n</ng-container>\n<ng-container *ngIf=\"link.process\">\n    <a [ngClass]=\"class\" (click)=\"handleProcess(link.process)\">\n        <scrm-image *ngIf=\"icon\" image=\"{{ icon }}\"></scrm-image>\n        {{ link.label }}\n    </a>\n</ng-container>\n\n\n" }]
    }], () => [{ type: i1.AsyncActionService }, { type: i2.SystemConfigStore }, { type: i3.AppStateStore }], { link: [{
            type: Input
        }], icon: [{
            type: Input
        }], class: [{
            type: Input
        }], config: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BaseMenuItemLinkComponent, { className: "BaseMenuItemLinkComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1tZW51LWl0ZW0tbGluay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9uYXZiYXIvbWVudS1pdGVtLWxpbmsvYmFzZS1tZW51LWl0ZW0tbGluay5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9uYXZiYXIvbWVudS1pdGVtLWxpbmsvYmFzZS1tZW51LWl0ZW0tbGluay5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFFdkQsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3BDLE9BQU8sRUFBbUIsa0JBQWtCLEVBQUMsTUFBTSwrREFBK0QsQ0FBQztBQUNuSCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sMENBQTBDLENBQUM7QUFFdkUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0RBQWtELENBQUM7Ozs7Ozs7Ozs7SUNBM0UsZ0NBQXlEOzs7SUFBaEMsOENBQWtCOzs7SUFDM0MsNEJBQTJCO0lBQUEsWUFBa0Q7O0lBQUEsaUJBQU87OztJQUF6RCxjQUFrRDtJQUFsRCwyRkFBa0Q7OztJQUM3RSw0QkFBMEI7SUFBQSxZQUErQzs7SUFBQSxpQkFBTzs7O0lBQXRELGNBQStDO0lBQS9DLHdGQUErQzs7OztJQVBqRiw2QkFBdUQ7SUFDbkQsNEJBR0M7SUFGRSxBQURBLCtMQUFTLDZCQUFzQixLQUFDLDRMQUNsQixrQ0FBMkIsS0FBQztJQUt6QyxBQURBLEFBREEsdUdBQTRDLDhFQUNqQiw4RUFDRDtJQUM5QixpQkFBSTs7OztJQUxELGNBQWlCO0lBQWpC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Qiw0RkFBc0M7WUFVdEMsY0FBdUM7WUFBdkMsNkZBQXVDO1lBd0J2QyxjQUFrQjtZQUFsQix1Q0FBa0I7OztpRkR0QnBCLHlCQUF5QjtjQUxyQyxTQUFTOzJCQUNJLDBCQUEwQjsrR0FLM0IsSUFBSTtrQkFBWixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLOztrRkFKRyx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWVudUl0ZW1MaW5rfSBmcm9tICcuLi8uLi8uLi9jb21tb24vbWVudS9tZW51Lm1vZGVsJztcbmltcG9ydCB7dGFrZX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtBc3luY0FjdGlvbklucHV0LCBBc3luY0FjdGlvblNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3Byb2Nlc3MvcHJvY2Vzc2VzL2FzeW5jLWFjdGlvbi9hc3luYy1hY3Rpb24nO1xuaW1wb3J0IHtBcHBTdGF0ZVN0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9hcHAtc3RhdGUvYXBwLXN0YXRlLnN0b3JlJztcbmltcG9ydCB7TWVudUl0ZW1MaW5rQ29uZmlnfSBmcm9tIFwiLi9tZW51LWl0ZW0tbGluay1jb25maWcubW9kZWxcIjtcbmltcG9ydCB7U3lzdGVtQ29uZmlnU3RvcmV9IGZyb20gXCIuLi8uLi8uLi9zdG9yZS9zeXN0ZW0tY29uZmlnL3N5c3RlbS1jb25maWcuc3RvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLWJhc2UtbWVudS1pdGVtLWxpbmsnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9iYXNlLW1lbnUtaXRlbS1saW5rLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEJhc2VNZW51SXRlbUxpbmtDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gICAgQElucHV0KCkgbGluazogTWVudUl0ZW1MaW5rO1xuICAgIEBJbnB1dCgpIGljb246IHN0cmluZztcbiAgICBASW5wdXQoKSBjbGFzczogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGNvbmZpZzogTWVudUl0ZW1MaW5rQ29uZmlnO1xuXG4gICAgY2hhclNpemUgPSB7XG4gICAgICAgIG1pbkxlbmd0aDogMjAsXG4gICAgICAgIG1lZGl1bUxlbmd0aDogMjAsXG4gICAgICAgIG1heExlbmd0aDogMjBcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGFzeW5jQWN0aW9uU2VydmljZTogQXN5bmNBY3Rpb25TZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgc3lzdGVtQ29uZmlnU3RvcmU6IFN5c3RlbUNvbmZpZ1N0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgYXBwU3RhdGU6IEFwcFN0YXRlU3RvcmVcbiAgICApIHt9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgY29uc3QgY2hhcmFjdGVyU2l6ZXMgPSB0aGlzLnN5c3RlbUNvbmZpZ1N0b3JlLmdldFVpKCduYXZiYXJfdHJ1bmNhdGVfY2hhcmFjdGVyX3NpemVzJyk7XG4gICAgICAgIHRoaXMuY2hhclNpemUgPSB7Li4uY2hhcmFjdGVyU2l6ZXN9XG4gICAgfVxuXG4gICAgaGFuZGxlUHJvY2Vzcyhwcm9jZXNzOiBzdHJpbmcpIHtcblxuICAgICAgICBpZiAoIXByb2Nlc3MpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByb2Nlc3NUeXBlID0gcHJvY2VzcztcblxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgYWN0aW9uOiBwcm9jZXNzVHlwZSxcbiAgICAgICAgICAgIG1vZHVsZTogdGhpcy5hcHBTdGF0ZS5nZXRNb2R1bGUoKSxcbiAgICAgICAgfSBhcyBBc3luY0FjdGlvbklucHV0O1xuXG4gICAgICAgIHRoaXMuYXN5bmNBY3Rpb25TZXJ2aWNlLnJ1bihwcm9jZXNzVHlwZSwgb3B0aW9ucykucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKTtcbiAgICB9XG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48bmctY29udGFpbmVyICpuZ0lmPVwiIWxpbmsucHJvY2VzcyAmJiBjb25maWc/Lm9uQ2xpY2tcIj5cbiAgICA8YSAoY2xpY2spPVwiY29uZmlnLm9uQ2xpY2soJGV2ZW50KVwiXG4gICAgICAgKHRvdWNoc3RhcnQpPVwiY29uZmlnLm9uVG91Y2hTdGFydCgkZXZlbnQpXCJcbiAgICAgICBbbmdDbGFzc109XCJjbGFzc1wiXG4gICAgPlxuICAgICAgICA8c2NybS1pbWFnZSAqbmdJZj1cImljb25cIiBpbWFnZT1cInt7IGljb24gfX1cIj48L3Njcm0taW1hZ2U+XG4gICAgICAgIDxzcGFuICpuZ0lmPVwiIWxpbmsucGFyYW1zXCI+e3sgbGluay5sYWJlbCB8IHRydW5jYXRlOiBjaGFyU2l6ZS5tZWRpdW1MZW5ndGggfX08L3NwYW4+XG4gICAgICAgIDxzcGFuICpuZ0lmPVwibGluay5wYXJhbXNcIj57eyBsaW5rLmxhYmVsIHwgdHJ1bmNhdGU6IGNoYXJTaXplLm1heExlbmd0aCB9fTwvc3Bhbj5cbiAgICA8L2E+XG48L25nLWNvbnRhaW5lcj5cbjxuZy1jb250YWluZXIgKm5nSWY9XCIhbGluay5wcm9jZXNzICYmICFjb25maWc/Lm9uQ2xpY2tcIj5cbiAgICA8YSAqbmdJZj1cImxpbmsucm91dGVcIlxuICAgICAgIFtuZ0NsYXNzXT1cImNsYXNzXCJcbiAgICAgICBbcXVlcnlQYXJhbXNdPVwibGluay5wYXJhbXNcIlxuICAgICAgIFtyb3V0ZXJMaW5rXT1cImxpbmsucm91dGVcIlxuICAgID5cbiAgICAgICAgPHNjcm0taW1hZ2UgKm5nSWY9XCJpY29uXCIgaW1hZ2U9XCJ7eyBpY29uIH19XCI+PC9zY3JtLWltYWdlPlxuICAgICAgICA8c3BhbiAqbmdJZj1cIiFsaW5rLnBhcmFtc1wiPnt7IGxpbmsubGFiZWwgfCB0cnVuY2F0ZTogY2hhclNpemUubWVkaXVtTGVuZ3RoICB9fTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gKm5nSWY9XCJsaW5rLnBhcmFtc1wiPnt7IGxpbmsubGFiZWwgfCB0cnVuY2F0ZTogY2hhclNpemUubWF4TGVuZ3RoICB9fTwvc3Bhbj5cbiAgICA8L2E+XG4gICAgPGEgKm5nSWY9XCIhbGluay5yb3V0ZSAmJiBsaW5rLnVybFwiXG4gICAgICAgW2hyZWZdPVwibGluay51cmxcIlxuICAgICAgIFtuZ0NsYXNzXT1cImNsYXNzXCJcbiAgICA+XG4gICAgICAgIDxzY3JtLWltYWdlICpuZ0lmPVwiaWNvblwiIGltYWdlPVwie3sgaWNvbiB9fVwiPjwvc2NybS1pbWFnZT5cbiAgICAgICAge3sgbGluay5sYWJlbCB9fVxuICAgIDwvYT5cbiAgICA8YSAqbmdJZj1cIiFsaW5rLnJvdXRlICYmICFsaW5rLnVybFwiXG4gICAgICAgW25nQ2xhc3NdPVwiY2xhc3NcIlxuICAgID5cbiAgICAgICAgPHNjcm0taW1hZ2UgKm5nSWY9XCJpY29uXCIgaW1hZ2U9XCJ7eyBpY29uIH19XCI+PC9zY3JtLWltYWdlPlxuICAgICAgICB7eyBsaW5rLmxhYmVsIH19XG4gICAgPC9hPlxuPC9uZy1jb250YWluZXI+XG48bmctY29udGFpbmVyICpuZ0lmPVwibGluay5wcm9jZXNzXCI+XG4gICAgPGEgW25nQ2xhc3NdPVwiY2xhc3NcIiAoY2xpY2spPVwiaGFuZGxlUHJvY2VzcyhsaW5rLnByb2Nlc3MpXCI+XG4gICAgICAgIDxzY3JtLWltYWdlICpuZ0lmPVwiaWNvblwiIGltYWdlPVwie3sgaWNvbiB9fVwiPjwvc2NybS1pbWFnZT5cbiAgICAgICAge3sgbGluay5sYWJlbCB9fVxuICAgIDwvYT5cbjwvbmctY29udGFpbmVyPlxuXG5cbiJdfQ==