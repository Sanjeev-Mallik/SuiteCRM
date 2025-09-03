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
import { Component } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeIn, fadeOut } from 'ng-animate';
import { LanguageStore } from '../../store/language/language.store';
import { MessageService } from '../../services/message/message.service';
import * as i0 from "@angular/core";
import * as i1 from "../../services/message/message.service";
import * as i2 from "../../store/language/language.store";
import * as i3 from "@angular/common";
function MessageUiComponent_div_0_div_1_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const message_r2 = i0.ɵɵnextContext().$implicit;
    const appStrings_r4 = i0.ɵɵnextContext(2).ngIf;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(appStrings_r4[message_r2 == null ? null : message_r2.labelKey] || (message_r2 == null ? null : message_r2.defaultText) || (message_r2 == null ? null : message_r2.labelKey) || "");
} }
function MessageUiComponent_div_0_div_1_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const message_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(message_r2.text);
} }
function MessageUiComponent_div_0_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵlistener("click", function MessageUiComponent_div_0_div_1_div_1_Template_div_click_0_listener() { const message_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.close(message_r2)); });
    i0.ɵɵtemplate(1, MessageUiComponent_div_0_div_1_div_1_ng_container_1_Template, 2, 1, "ng-container", 6)(2, MessageUiComponent_div_0_div_1_div_1_ng_container_2_Template, 2, 1, "ng-container", 6);
    i0.ɵɵelementStart(3, "a", 7);
    i0.ɵɵlistener("click", function MessageUiComponent_div_0_div_1_div_1_Template_a_click_3_listener() { const message_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.close(message_r2)); });
    i0.ɵɵelementStart(4, "span", 8);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const message_r2 = ctx.$implicit;
    i0.ɵɵclassMapInterpolate1("message ", message_r2.type, " alert-dismissible fade show shadow");
    i0.ɵɵproperty("@fade", undefined);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r2.labelKey);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r2.text && !message_r2.labelKey);
} }
function MessageUiComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtemplate(1, MessageUiComponent_div_0_div_1_div_1_Template, 6, 6, "div", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const items_r5 = ctx.ngIf;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", items_r5);
} }
function MessageUiComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, MessageUiComponent_div_0_div_1_Template, 2, 1, "div", 2);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(2, 1, ctx_r2.messages$));
} }
export class MessageUiComponent {
    constructor(messageService, languages) {
        this.messageService = messageService;
        this.languages = languages;
        this.appStrings$ = languages.appStrings$;
    }
    ngOnInit() {
        this.messages$ = this.messageService.messages$;
    }
    close(message) {
        this.messageService.contains(message, true);
    }
    static { this.ɵfac = function MessageUiComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MessageUiComponent)(i0.ɵɵdirectiveInject(i1.MessageService), i0.ɵɵdirectiveInject(i2.LanguageStore)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MessageUiComponent, selectors: [["scrm-message-ui"]], decls: 2, vars: 3, consts: [["class", "container-fluid alert-fixed message-wrapper", 4, "ngIf"], [1, "container-fluid", "alert-fixed", "message-wrapper"], ["class", "d-flex justify-content-center flex-column align-items-center message-container", 4, "ngIf"], [1, "d-flex", "justify-content-center", "flex-column", "align-items-center", "message-container"], ["role", "alert", 3, "class", "click", 4, "ngFor", "ngForOf"], ["role", "alert", 3, "click"], [4, "ngIf"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"]], template: function MessageUiComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, MessageUiComponent_div_0_Template, 3, 3, "div", 0);
            i0.ɵɵpipe(1, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.appStrings$));
        } }, dependencies: [i3.NgForOf, i3.NgIf, i3.AsyncPipe], encapsulation: 2, data: { animation: [
                trigger('fade', [
                    transition(':enter', useAnimation(fadeIn, {
                        params: { timing: 0.5, delay: 0 }
                    })),
                    transition(':leave', useAnimation(fadeOut, {
                        params: { timing: 0.5, delay: 0 }
                    })),
                ])
            ] } }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MessageUiComponent, [{
        type: Component,
        args: [{ selector: 'scrm-message-ui', animations: [
                    trigger('fade', [
                        transition(':enter', useAnimation(fadeIn, {
                            params: { timing: 0.5, delay: 0 }
                        })),
                        transition(':leave', useAnimation(fadeOut, {
                            params: { timing: 0.5, delay: 0 }
                        })),
                    ])
                ], template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div class=\"container-fluid alert-fixed message-wrapper\" *ngIf=\"(appStrings$ | async) as appStrings\">\n    <div class=\"d-flex justify-content-center flex-column align-items-center message-container\"\n         *ngIf=\"(messages$ | async) as items\">\n        <div *ngFor=\"let message of items\"\n             (click)=\"close(message)\"\n             class=\"message {{ message.type }} alert-dismissible fade show shadow\"\n             [@fade]\n             role=\"alert\">\n            <ng-container *ngIf=\"message.labelKey\">{{appStrings[message?.labelKey] || message?.defaultText || message?.labelKey || ''}}</ng-container>\n            <ng-container *ngIf=\"message.text && !message.labelKey\">{{message.text}}</ng-container>\n            <a (click)=\"close(message)\" type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n            </a>\n        </div>\n    </div>\n</div>\n" }]
    }], () => [{ type: i1.MessageService }, { type: i2.LanguageStore }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MessageUiComponent, { className: "MessageUiComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9tZXNzYWdlL21lc3NhZ2UuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBR2hELE9BQU8sRUFBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3RFLE9BQU8sRUFBQyxNQUFNLEVBQUUsT0FBTyxFQUFDLE1BQU0sWUFBWSxDQUFDO0FBQzNDLE9BQU8sRUFBQyxhQUFhLEVBQW9CLE1BQU0scUNBQXFDLENBQUM7QUFDckYsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHdDQUF3QyxDQUFDOzs7Ozs7SUNHMUQsNkJBQXVDO0lBQUEsWUFBb0Y7Ozs7O0lBQXBGLGNBQW9GO0lBQXBGLHVNQUFvRjs7O0lBQzNILDZCQUF3RDtJQUFBLFlBQWdCOzs7O0lBQWhCLGNBQWdCO0lBQWhCLHFDQUFnQjs7OztJQU41RSw4QkFJa0I7SUFIYixxTkFBUyx3QkFBYyxLQUFDO0lBS3pCLEFBREEsdUdBQXVDLDBGQUNpQjtJQUN4RCw0QkFBZ0c7SUFBN0YsbU5BQVMsd0JBQWMsS0FBQztJQUN2QiwrQkFBeUI7SUFBQSxzQkFBTztJQUV4QyxBQURJLEFBRG9DLGlCQUFPLEVBQ3ZDLEVBQ0Y7OztJQVJELDZGQUFxRTtJQUNyRSxpQ0FBTztJQUVPLGNBQXNCO0lBQXRCLDBDQUFzQjtJQUN0QixjQUF1QztJQUF2Qyw4REFBdUM7OztJQVI5RCw4QkFDMEM7SUFDdEMsK0VBSWtCO0lBT3RCLGlCQUFNOzs7SUFYdUIsY0FBUTtJQUFSLGtDQUFROzs7SUFIekMsOEJBQXFHO0lBQ2pHLHlFQUMwQzs7SUFhOUMsaUJBQU07OztJQWJJLGNBQTBCO0lBQTFCLDZEQUEwQjs7QURxQnBDLE1BQU0sT0FBTyxrQkFBa0I7SUFNM0IsWUFDVyxjQUE4QixFQUM5QixTQUF3QjtRQUR4QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsY0FBUyxHQUFULFNBQVMsQ0FBZTtRQUUvQixJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUM7SUFDN0MsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDO0lBQ25ELENBQUM7SUFFRCxLQUFLLENBQUMsT0FBZ0I7UUFDbEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hELENBQUM7bUhBbkJRLGtCQUFrQjtvRUFBbEIsa0JBQWtCO1lDdkIvQixtRUFBcUc7OztZQUEzQyw0REFBNEI7cUdEWXRFO2dCQUNSLE9BQU8sQ0FBQyxNQUFNLEVBQUU7b0JBQ1osVUFBVSxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsTUFBTSxFQUFFO3dCQUN0QyxNQUFNLEVBQUUsRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUM7cUJBQ2xDLENBQUMsQ0FBQztvQkFDSCxVQUFVLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxPQUFPLEVBQUU7d0JBQ3ZDLE1BQU0sRUFBRSxFQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBQztxQkFDbEMsQ0FBQyxDQUFDO2lCQUNOLENBQUM7YUFDTDs7aUZBRVEsa0JBQWtCO2NBZjlCLFNBQVM7MkJBQ0ksaUJBQWlCLGNBR2Y7b0JBQ1IsT0FBTyxDQUFDLE1BQU0sRUFBRTt3QkFDWixVQUFVLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxNQUFNLEVBQUU7NEJBQ3RDLE1BQU0sRUFBRSxFQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBQzt5QkFDbEMsQ0FBQyxDQUFDO3dCQUNILFVBQVUsQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLE9BQU8sRUFBRTs0QkFDdkMsTUFBTSxFQUFFLEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFDO3lCQUNsQyxDQUFDLENBQUM7cUJBQ04sQ0FBQztpQkFDTDs7a0ZBRVEsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSAnLi4vLi4vY29tbW9uL3R5cGVzL21lc3NhZ2VzJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge3RyYW5zaXRpb24sIHRyaWdnZXIsIHVzZUFuaW1hdGlvbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQge2ZhZGVJbiwgZmFkZU91dH0gZnJvbSAnbmctYW5pbWF0ZSc7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmUsIExhbmd1YWdlU3RyaW5nTWFwfSBmcm9tICcuLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tZXNzYWdlL21lc3NhZ2Uuc2VydmljZSc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLW1lc3NhZ2UtdWknLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9tZXNzYWdlLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtdLFxuICAgIGFuaW1hdGlvbnM6IFtcbiAgICAgICAgdHJpZ2dlcignZmFkZScsIFtcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJzplbnRlcicsIHVzZUFuaW1hdGlvbihmYWRlSW4sIHtcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHt0aW1pbmc6IDAuNSwgZGVsYXk6IDB9XG4gICAgICAgICAgICB9KSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCc6bGVhdmUnLCB1c2VBbmltYXRpb24oZmFkZU91dCwge1xuICAgICAgICAgICAgICAgIHBhcmFtczoge3RpbWluZzogMC41LCBkZWxheTogMH1cbiAgICAgICAgICAgIH0pKSxcbiAgICAgICAgXSlcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VVaUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBtZXNzYWdlcyQ6IE9ic2VydmFibGU8TWVzc2FnZVtdPjtcblxuICAgIGFwcFN0cmluZ3MkOiBPYnNlcnZhYmxlPExhbmd1YWdlU3RyaW5nTWFwPjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgICAgICBwdWJsaWMgbGFuZ3VhZ2VzOiBMYW5ndWFnZVN0b3JlXG4gICAgKSB7XG4gICAgICAgIHRoaXMuYXBwU3RyaW5ncyQgPSBsYW5ndWFnZXMuYXBwU3RyaW5ncyQ7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubWVzc2FnZXMkID0gdGhpcy5tZXNzYWdlU2VydmljZS5tZXNzYWdlcyQ7XG4gICAgfVxuXG4gICAgY2xvc2UobWVzc2FnZTogTWVzc2FnZSk6IHZvaWQge1xuICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmNvbnRhaW5zKG1lc3NhZ2UsIHRydWUpO1xuICAgIH1cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWQgYWxlcnQtZml4ZWQgbWVzc2FnZS13cmFwcGVyXCIgKm5nSWY9XCIoYXBwU3RyaW5ncyQgfCBhc3luYykgYXMgYXBwU3RyaW5nc1wiPlxuICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1jZW50ZXIgbWVzc2FnZS1jb250YWluZXJcIlxuICAgICAgICAgKm5nSWY9XCIobWVzc2FnZXMkIHwgYXN5bmMpIGFzIGl0ZW1zXCI+XG4gICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IG1lc3NhZ2Ugb2YgaXRlbXNcIlxuICAgICAgICAgICAgIChjbGljayk9XCJjbG9zZShtZXNzYWdlKVwiXG4gICAgICAgICAgICAgY2xhc3M9XCJtZXNzYWdlIHt7IG1lc3NhZ2UudHlwZSB9fSBhbGVydC1kaXNtaXNzaWJsZSBmYWRlIHNob3cgc2hhZG93XCJcbiAgICAgICAgICAgICBbQGZhZGVdXG4gICAgICAgICAgICAgcm9sZT1cImFsZXJ0XCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibWVzc2FnZS5sYWJlbEtleVwiPnt7YXBwU3RyaW5nc1ttZXNzYWdlPy5sYWJlbEtleV0gfHwgbWVzc2FnZT8uZGVmYXVsdFRleHQgfHwgbWVzc2FnZT8ubGFiZWxLZXkgfHwgJyd9fTwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm1lc3NhZ2UudGV4dCAmJiAhbWVzc2FnZS5sYWJlbEtleVwiPnt7bWVzc2FnZS50ZXh0fX08L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxhIChjbGljayk9XCJjbG9zZShtZXNzYWdlKVwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiYWxlcnRcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuIl19