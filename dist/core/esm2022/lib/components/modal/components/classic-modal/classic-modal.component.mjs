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
import { IframeResizeHandlerHandler } from "../../../../views/classic/services/iframe-resize-handler.service";
import { IframePageChangeObserver } from "../../../../views/classic/services/iframe-page-change-observer.service";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { animate, transition, trigger } from "@angular/animations";
import { LanguageStore } from "../../../../store/language/language.store";
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/language/language.store";
import * as i2 from "@ng-bootstrap/ng-bootstrap";
import * as i3 from "../modal/modal.component";
const _c0 = ["dataContainer"];
export class ClassicModalComponent {
    constructor(languageStore, activeModal) {
        this.languageStore = languageStore;
        this.activeModal = activeModal;
        this.url = '';
        this.titleKey = '';
        this.asyncActionCallback = null;
        this.iframe = null;
    }
    ngOnInit() {
        this.closeButton = {
            klass: ['btn', 'btn-outline-light', 'btn-sm'],
            onClick: () => {
                this.activeModal.close({
                    type: 'close-button'
                });
            }
        };
    }
    ngAfterViewInit() {
        this.initIframe();
    }
    ngOnDestroy() {
        this.cleanObservers();
        this.iframe = null;
        const placeholder = this.wrapper;
        if (this.wrapper.firstChild) {
            placeholder.removeChild(placeholder.firstChild);
        }
        placeholder.innerHTML = '<iframe></iframe>';
        this.wrapper = null;
    }
    cleanObservers() {
        if (this.iframeResizeHandler) {
            this.iframeResizeHandler.destroy();
            this.iframeResizeHandler = null;
        }
        if (this.iframePageChangeHandler) {
            this.iframePageChangeHandler.destroy();
            this.iframePageChangeHandler = null;
        }
    }
    initIframe() {
        this.wrapper = this.dataContainer.nativeElement;
        if (this.wrapper.firstChild) {
            this.wrapper.removeChild(this.wrapper.firstChild);
        }
        const iframe = document.createElement('iframe');
        iframe.src = this.url;
        this.wrapper.appendChild(iframe);
        this.iframe = iframe;
        this.iframe.style.display = 'block';
        this.initObservers();
    }
    initObservers() {
        this.iframePageChangeHandler = this.buildIframePageChangeObserver();
        this.iframeResizeHandler = this.buildIframeResizeHandlerHandler();
        if (this.iframePageChangeHandler) {
            this.iframePageChangeHandler.init();
        }
    }
    onIFrameLoad() {
        // Do not show scroll at any time, to avoid flickering
        this.iframe.contentWindow.document.body.style.overflow = 'hidden';
        // callback function to execute custom task
        // as required by the caller
        if (this.asyncActionCallback !== null) {
            this.asyncActionCallback(this.iframe);
        }
        // Init resize handler
        this.iframeResizeHandler.init(this.iframe);
    }
    onIFrameUnload() {
        // hide iframe, while being re-directed
        this.iframe.style.display = 'none';
        this.iframeResizeHandler.destroy();
    }
    buildIframePageChangeObserver() {
        return new IframePageChangeObserver(this.iframe, null, this.onIFrameLoad.bind(this), this.onIFrameUnload.bind(this));
    }
    buildIframeResizeHandlerHandler() {
        return new IframeResizeHandlerHandler();
    }
    static { this.ɵfac = function ClassicModalComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ClassicModalComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore), i0.ɵɵdirectiveInject(i2.NgbActiveModal)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ClassicModalComponent, selectors: [["scrm-classic-modal"]], viewQuery: function ClassicModalComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dataContainer = _t.first);
        } }, inputs: { url: "url", titleKey: "titleKey", asyncActionCallback: "asyncActionCallback" }, decls: 5, vars: 3, consts: [["dataContainer", ""], ["bodyKlass", "m-0 small-font", "footerKlass", "border-0", "klass", "classic-view-modal", 3, "closable", "close", "titleKey"], ["modal-body", ""], [1, "classic-view-container"]], template: function ClassicModalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "scrm-modal", 1)(1, "div", 2)(2, "div", 3, 0);
            i0.ɵɵelement(4, "iframe");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵproperty("closable", true)("close", ctx.closeButton)("titleKey", ctx.titleKey);
        } }, dependencies: [i3.ModalComponent], encapsulation: 2, data: { animation: [
                trigger('modalFade', [
                    transition('void <=> *', [
                        animate('800ms')
                    ]),
                ]),
            ] } }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ClassicModalComponent, [{
        type: Component,
        args: [{ selector: 'scrm-classic-modal', animations: [
                    trigger('modalFade', [
                        transition('void <=> *', [
                            animate('800ms')
                        ]),
                    ]),
                ], template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n\n<scrm-modal [closable]=\"true\"\n            [close]=\"closeButton\"\n            [titleKey]=\"titleKey\"\n            bodyKlass=\"m-0 small-font\"\n            footerKlass=\"border-0\"\n            klass=\"classic-view-modal\">\n\n    <div modal-body>\n\n        <div class=\"classic-view-container\" #dataContainer>\n            <iframe></iframe>\n        </div>\n\n    </div>\n\n</scrm-modal>\n" }]
    }], () => [{ type: i1.LanguageStore }, { type: i2.NgbActiveModal }], { url: [{
            type: Input
        }], titleKey: [{
            type: Input
        }], asyncActionCallback: [{
            type: Input
        }], dataContainer: [{
            type: ViewChild,
            args: ['dataContainer', { static: true }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ClassicModalComponent, { className: "ClassicModalComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NpYy1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9tb2RhbC9jb21wb25lbnRzL2NsYXNzaWMtbW9kYWwvY2xhc3NpYy1tb2RhbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9tb2RhbC9jb21wb25lbnRzL2NsYXNzaWMtbW9kYWwvY2xhc3NpYy1tb2RhbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFnQixTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBcUIsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hHLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLGtFQUFrRSxDQUFDO0FBQzVHLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLHdFQUF3RSxDQUFDO0FBQ2hILE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUcxRCxPQUFPLEVBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sMkNBQTJDLENBQUM7Ozs7OztBQWV4RSxNQUFNLE9BQU8scUJBQXFCO0lBWTlCLFlBQ1csYUFBNEIsRUFDekIsV0FBMkI7UUFEOUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDekIsZ0JBQVcsR0FBWCxXQUFXLENBQWdCO1FBYmhDLFFBQUcsR0FBVyxFQUFFLENBQUM7UUFDakIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0Qix3QkFBbUIsR0FBYSxJQUFJLENBQUM7UUFLcEMsV0FBTSxHQUFHLElBQUksQ0FBQztJ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WCxLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLG1CQUFtQjtrQkFBM0IsS0FBSztZQUNzQyxhQUFhO2tCQUF4RCxTQUFTO21CQUFDLGVBQWUsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUM7O2tGQUpqQyxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0lmcmFtZVJlc2l6ZUhhbmRsZXJIYW5kbGVyfSBmcm9tIFwiLi4vLi4vLi4vLi4vdmlld3MvY2xhc3NpYy9zZXJ2aWNlcy9pZnJhbWUtcmVzaXplLWhhbmRsZXIuc2VydmljZVwiO1xuaW1wb3J0IHtJZnJhbWVQYWdlQ2hhbmdlT2JzZXJ2ZXJ9IGZyb20gXCIuLi8uLi8uLi8uLi92aWV3cy9jbGFzc2ljL3NlcnZpY2VzL2lmcmFtZS1wYWdlLWNoYW5nZS1vYnNlcnZlci5zZXJ2aWNlXCI7XG5pbXBvcnQge05nYkFjdGl2ZU1vZGFsfSBmcm9tIFwiQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXBcIjtcbmltcG9ydCB7QnV0dG9uSW50ZXJmYWNlfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY29tcG9uZW50cy9idXR0b24vYnV0dG9uLm1vZGVsJztcbmltcG9ydCB7TW9kYWxDbG9zZUZlZWRCYWNrfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY29tcG9uZW50cy9tb2RhbC9tb2RhbC5tb2RlbCc7XG5pbXBvcnQge2FuaW1hdGUsIHRyYW5zaXRpb24sIHRyaWdnZXJ9IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gXCIuLi8uLi8uLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZVwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1jbGFzc2ljLW1vZGFsJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vY2xhc3NpYy1tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbXSxcbiAgICBhbmltYXRpb25zOiBbXG4gICAgICAgIHRyaWdnZXIoJ21vZGFsRmFkZScsIFtcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPD0+IConLCBbXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnODAwbXMnKVxuICAgICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQ2xhc3NpY01vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuICAgIEBJbnB1dCgpIHVybDogc3RyaW5nID0gJyc7XG4gICAgQElucHV0KCkgdGl0bGVLZXk6IHN0cmluZyA9ICcnO1xuICAgIEBJbnB1dCgpIGFzeW5jQWN0aW9uQ2FsbGJhY2s6IEZ1bmN0aW9uID0gbnVsbDtcbiAgICBAVmlld0NoaWxkKCdkYXRhQ29udGFpbmVyJywge3N0YXRpYzogdHJ1ZX0pIGRhdGFDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gICAgY2xvc2VCdXR0b246IEJ1dHRvbkludGVyZmFjZTtcblxuICAgIHB1YmxpYyB3cmFwcGVyOiBhbnk7XG4gICAgcHJvdGVjdGVkIGlmcmFtZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBpZnJhbWVQYWdlQ2hhbmdlSGFuZGxlcjogSWZyYW1lUGFnZUNoYW5nZU9ic2VydmVyO1xuICAgIHByaXZhdGUgaWZyYW1lUmVzaXplSGFuZGxlcjogSWZyYW1lUmVzaXplSGFuZGxlckhhbmRsZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGxhbmd1YWdlU3RvcmU6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBhY3RpdmVNb2RhbDogTmdiQWN0aXZlTW9kYWwsXG4gICAgKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2xvc2VCdXR0b24gPSB7XG4gICAgICAgICAgICBrbGFzczogWydidG4nLCAnYnRuLW91dGxpbmUtbGlnaHQnLCAnYnRuLXNtJ10sXG4gICAgICAgICAgICBvbkNsaWNrOiAoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVNb2RhbC5jbG9zZSh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdjbG9zZS1idXR0b24nXG4gICAgICAgICAgICAgICAgfSBhcyBNb2RhbENsb3NlRmVlZEJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGFzIEJ1dHRvbkludGVyZmFjZTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW5pdElmcmFtZSgpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNsZWFuT2JzZXJ2ZXJzKCk7XG5cbiAgICAgICAgdGhpcy5pZnJhbWUgPSBudWxsO1xuICAgICAgICBjb25zdCBwbGFjZWhvbGRlciA9IHRoaXMud3JhcHBlcjtcbiAgICAgICAgaWYgKHRoaXMud3JhcHBlci5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBwbGFjZWhvbGRlci5yZW1vdmVDaGlsZChwbGFjZWhvbGRlci5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBwbGFjZWhvbGRlci5pbm5lckhUTUwgPSAnPGlmcmFtZT48L2lmcmFtZT4nO1xuICAgICAgICB0aGlzLndyYXBwZXIgPSBudWxsO1xuICAgIH1cblxuICAgIGNsZWFuT2JzZXJ2ZXJzKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5pZnJhbWVSZXNpemVIYW5kbGVyKSB7XG4gICAgICAgICAgICB0aGlzLmlmcmFtZVJlc2l6ZUhhbmRsZXIuZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy5pZnJhbWVSZXNpemVIYW5kbGVyID0gbnVsbDtcblxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlmcmFtZVBhZ2VDaGFuZ2VIYW5kbGVyKSB7XG4gICAgICAgICAgICB0aGlzLmlmcmFtZVBhZ2VDaGFuZ2VIYW5kbGVyLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuaWZyYW1lUGFnZUNoYW5nZUhhbmRsZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5pdElmcmFtZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy53cmFwcGVyID0gdGhpcy5kYXRhQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHRoaXMud3JhcHBlci5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICB0aGlzLndyYXBwZXIucmVtb3ZlQ2hpbGQodGhpcy53cmFwcGVyLmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgICAgICBpZnJhbWUuc3JjID0gdGhpcy51cmw7XG5cbiAgICAgICAgdGhpcy53cmFwcGVyLmFwcGVuZENoaWxkKGlmcmFtZSk7XG5cbiAgICAgICAgdGhpcy5pZnJhbWUgPSBpZnJhbWU7XG5cbiAgICAgICAgdGhpcy5pZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgICAgICAgdGhpcy5pbml0T2JzZXJ2ZXJzKCk7XG4gICAgfVxuXG4gICAgaW5pdE9ic2VydmVycygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pZnJhbWVQYWdlQ2hhbmdlSGFuZGxlciA9IHRoaXMuYnVpbGRJZnJhbWVQYWdlQ2hhbmdlT2JzZXJ2ZXIoKTtcbiAgICAgICAgdGhpcy5pZnJhbWVSZXNpemVIYW5kbGVyID0gdGhpcy5idWlsZElmcmFtZVJlc2l6ZUhhbmRsZXJIYW5kbGVyKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuaWZyYW1lUGFnZUNoYW5nZUhhbmRsZXIpIHtcbiAgICAgICAgICAgIHRoaXMuaWZyYW1lUGFnZUNoYW5nZUhhbmRsZXIuaW5pdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uSUZyYW1lTG9hZCgpOiB2b2lkIHtcbiAgICAgICAgLy8gRG8gbm90IHNob3cgc2Nyb2xsIGF0IGFueSB0aW1lLCB0byBhdm9pZCBmbGlja2VyaW5nXG4gICAgICAgIHRoaXMuaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuXG4gICAgICAgIC8vIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgY3VzdG9tIHRhc2tcbiAgICAgICAgLy8gYXMgcmVxdWlyZWQgYnkgdGhlIGNhbGxlclxuICAgICAgICBpZiAodGhpcy5hc3luY0FjdGlvbkNhbGxiYWNrICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmFzeW5jQWN0aW9uQ2FsbGJhY2sodGhpcy5pZnJhbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW5pdCByZXNpemUgaGFuZGxlclxuICAgICAgICB0aGlzLmlmcmFtZVJlc2l6ZUhhbmRsZXIuaW5pdCh0aGlzLmlmcmFtZSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uSUZyYW1lVW5sb2FkKCk6IHZvaWQge1xuICAgICAgICAvLyBoaWRlIGlmcmFtZSwgd2hpbGUgYmVpbmcgcmUtZGlyZWN0ZWRcbiAgICAgICAgdGhpcy5pZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdGhpcy5pZnJhbWVSZXNpemVIYW5kbGVyLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYnVpbGRJZnJhbWVQYWdlQ2hhbmdlT2JzZXJ2ZXIoKTogSWZyYW1lUGFnZUNoYW5nZU9ic2VydmVyIHtcbiAgICAgICAgcmV0dXJuIG5ldyBJZnJhbWVQYWdlQ2hhbmdlT2JzZXJ2ZXIoXG4gICAgICAgICAgICB0aGlzLmlmcmFtZSxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICB0aGlzLm9uSUZyYW1lTG9hZC5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgdGhpcy5vbklGcmFtZVVubG9hZC5iaW5kKHRoaXMpLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBidWlsZElmcmFtZVJlc2l6ZUhhbmRsZXJIYW5kbGVyKCk6IElmcmFtZVJlc2l6ZUhhbmRsZXJIYW5kbGVyIHtcbiAgICAgICAgcmV0dXJuIG5ldyBJZnJhbWVSZXNpemVIYW5kbGVySGFuZGxlcigpO1xuICAgIH1cblxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuXG48c2NybS1tb2RhbCBbY2xvc2FibGVdPVwidHJ1ZVwiXG4gICAgICAgICAgICBbY2xvc2VdPVwiY2xvc2VCdXR0b25cIlxuICAgICAgICAgICAgW3RpdGxlS2V5XT1cInRpdGxlS2V5XCJcbiAgICAgICAgICAgIGJvZHlLbGFzcz1cIm0tMCBzbWFsbC1mb250XCJcbiAgICAgICAgICAgIGZvb3RlcktsYXNzPVwiYm9yZGVyLTBcIlxuICAgICAgICAgICAga2xhc3M9XCJjbGFzc2ljLXZpZXctbW9kYWxcIj5cblxuICAgIDxkaXYgbW9kYWwtYm9keT5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2xhc3NpYy12aWV3LWNvbnRhaW5lclwiICNkYXRhQ29udGFpbmVyPlxuICAgICAgICAgICAgPGlmcmFtZT48L2lmcmFtZT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuPC9zY3JtLW1vZGFsPlxuIl19