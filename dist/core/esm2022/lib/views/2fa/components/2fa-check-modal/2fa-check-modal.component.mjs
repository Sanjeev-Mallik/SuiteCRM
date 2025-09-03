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
import { Component, HostListener } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { LanguageStore } from "../../../../store/language/language.store";
import { CheckTwoFactorCode } from "../../../../services/process/processes/check-two-factor-code/check-two-factor-code";
import { MessageService } from "../../../../services/message/message.service";
import * as i0 from "@angular/core";
import * as i1 from "@ng-bootstrap/ng-bootstrap";
import * as i2 from "../../../../store/language/language.store";
import * as i3 from "../../../../services/message/message.service";
import * as i4 from "../../../../services/process/processes/check-two-factor-code/check-two-factor-code";
import * as i5 from "../../../../components/modal/components/modal/modal.component";
import * as i6 from "@angular/forms";
import * as i7 from "../../../../components/label/label.component";
import * as i8 from "../../../../components/button/button.component";
export class TwoFactorCheckModalComponent {
    onEnterKey() {
        this.checkCode();
    }
    constructor(activeModal, language, message, checkTwoFactorCode) {
        this.activeModal = activeModal;
        this.language = language;
        this.message = message;
        this.checkTwoFactorCode = checkTwoFactorCode;
    }
    ngOnInit() {
        this.checkCodeButtonConfig = {
            klass: 'btn btn-sm btn-main',
            onClick: (() => {
                this.checkCode();
            }),
            labelKey: 'LBL_VERIFY_2FA',
            titleKey: ''
        };
    }
    checkCode() {
        const authCode = this.authCode;
        this.checkTwoFactorCode.checkCode(authCode).subscribe({
            next: (response) => {
                this.closeModal(response.data.two_factor_complete);
            },
            error: () => {
                this.message.addDangerMessageByKey('LBL_FACTOR_AUTH_FAIL');
            }
        });
    }
    closeModal(authComplete) {
        this.activeModal.close({
            two_factor_complete: authComplete
        });
    }
    static { this.ɵfac = function TwoFactorCheckModalComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TwoFactorCheckModalComponent)(i0.ɵɵdirectiveInject(i1.NgbActiveModal), i0.ɵɵdirectiveInject(i2.LanguageStore), i0.ɵɵdirectiveInject(i3.MessageService), i0.ɵɵdirectiveInject(i4.CheckTwoFactorCode)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TwoFactorCheckModalComponent, selectors: [["scrm-2fa-modal"]], hostBindings: function TwoFactorCheckModalComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keyup.control.enter", function TwoFactorCheckModalComponent_keyup_control_enter_HostBindingHandler() { return ctx.onEnterKey(); });
        } }, decls: 11, vars: 3, consts: [["bodyKlass", "m-0 small-font", "footerKlass", "border-0", "headerKlass", "border-0", "klass", "two-factor-popup", 3, "closable"], ["modal-body", ""], [1, "d-flex", "flex-column", "pt-4", "align-items-center"], ["labelKey", "LBL_ENTER_AUTH_APP_2FA_CODE", 1, "pb-4"], ["id", "auth_code", "type", "text", "name", "auth_code", "autocomplete", "one-time-code", 1, "mb-3", "auth-input", 3, "ngModelChange", "ngModel"], ["id", "submit-2fa-code", "type", "submit", 3, "config"], [1, "small", "mt-2", "text-muted"], ["labelKey", "LBL_PROBLEMS_GENERATING_CODE"], [1, "small", "mb-2", "text-muted"], ["labelKey", "LBL_BACKUP_CODES_FALLBACK_INSTRUCTIONS"]], template: function TwoFactorCheckModalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "scrm-modal", 0)(1, "div", 1)(2, "div")(3, "div", 2);
            i0.ɵɵelement(4, "scrm-label", 3);
            i0.ɵɵelementStart(5, "input", 4);
            i0.ɵɵtwoWayListener("ngModelChange", function TwoFactorCheckModalComponent_Template_input_ngModelChange_5_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.authCode, $event) || (ctx.authCode = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelement(6, "scrm-button", 5);
            i0.ɵɵelementStart(7, "div", 6);
            i0.ɵɵelement(8, "scrm-label", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "div", 8);
            i0.ɵɵelement(10, "scrm-label", 9);
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            i0.ɵɵproperty("closable", false);
            i0.ɵɵadvance(5);
            i0.ɵɵtwoWayProperty("ngModel", ctx.authCode);
            i0.ɵɵadvance();
            i0.ɵɵproperty("config", ctx.checkCodeButtonConfig);
        } }, dependencies: [i5.ModalComponent, i6.DefaultValueAccessor, i6.NgControlStatus, i6.NgModel, i7.LabelComponent, i8.ButtonComponent], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TwoFactorCheckModalComponent, [{
        type: Component,
        args: [{ selector: 'scrm-2fa-modal', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2024 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<scrm-modal [closable]=\"false\"\n            bodyKlass='m-0 small-font'\n            footerKlass='border-0'\n            headerKlass='border-0'\n            klass='two-factor-popup'>\n\n    <div modal-body>\n        <div>\n            <div class='d-flex flex-column pt-4 align-items-center'>\n                <scrm-label labelKey='LBL_ENTER_AUTH_APP_2FA_CODE' class='pb-4'></scrm-label>\n                <input [(ngModel)]=\"authCode\"\n                       id='auth_code'\n                       type='text'\n                       name='auth_code'\n                       autocomplete='one-time-code'\n                       class='mb-3 auth-input'/>\n\n                <scrm-button id='submit-2fa-code'\n                        [config]=\"checkCodeButtonConfig\"\n                        type='submit'>\n                </scrm-button>\n\n                <div class='small mt-2 text-muted'>\n                    <scrm-label  labelKey='LBL_PROBLEMS_GENERATING_CODE'></scrm-label>\n                </div>\n                <div class='small mb-2 text-muted'>\n                    <scrm-label  labelKey='LBL_BACKUP_CODES_FALLBACK_INSTRUCTIONS'></scrm-label>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</scrm-modal>\n" }]
    }], () => [{ type: i1.NgbActiveModal }, { type: i2.LanguageStore }, { type: i3.MessageService }, { type: i4.CheckTwoFactorCode }], { onEnterKey: [{
            type: HostListener,
            args: ['keyup.control.enter']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TwoFactorCheckModalComponent, { className: "TwoFactorCheckModalComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMmZhLWNoZWNrLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi92aWV3cy8yZmEvY29tcG9uZW50cy8yZmEtY2hlY2stbW9kYWwvMmZhLWNoZWNrLW1vZGFsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi92aWV3cy8yZmEvY29tcG9uZW50cy8yZmEtY2hlY2stbW9kYWwvMmZhLWNoZWNrLW1vZGFsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFDSCxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDMUQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ3hFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLG9GQUFvRixDQUFDO0FBRXRILE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSw4Q0FBOEMsQ0FBQzs7Ozs7Ozs7OztBQVE1RSxNQUFNLE9BQU8sNEJBQTRCO0lBT3JDLFVBQVU7UUFDTixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELFlBQ1csV0FBMkIsRUFDeEIsUUFBdUIsRUFDdkIsT0FBdUIsRUFDdkIsa0JBQXNDO1FBSHpDLGdCQUFXLEdBQVgsV0FBVyxDQUFnQjtRQUN4QixhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7SUFFcEQsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMscUJBQXFCLEdBQUc7WUFDekIsS0FBSyxFQUFFLHFCQUFxQjtZQUM1QixPQUFPLEVBQUUsQ0FBQyxHQUFTLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQTtZQUNwQixDQUFDLENBQW1CO1lBQ3BCLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsUUFBUSxFQUFFLEVBQUU7U0FDSSxDQUFDO0lBQ3pCLENBQUM7SUFFTSxTQUFTO1FBQ1osTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUUvQixJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUNsRCxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRTtnQkFDZixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtZQUN0RCxDQUFDO1lBQ0QsS0FBSyxFQUFFLEdBQUcsRUFBRTtnQkFDUixJQUFJLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLHNCQUFzQixDQUFDLENBQUE7WUFDOUQsQ0FBQztTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxVQUFVLENBQUMsWUFBcUI7UUFDbkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDbkIsbUJBQW1CLEVBQUUsWUFBWTtTQUNQLENBQUMsQ0FBQztJQUNwQyxDQUFDOzZIQS9DUSw0QkFBNEI7b0VBQTVCLDRCQUE0QjtZQUE1Qiw2SEFBQSxnQkFBWSxJQUFnQjs7WUNIN0IsQUFESixBQURKLEFBTkoscUNBSXFDLGFBRWpCLFVBQ1AsYUFDdUQ7WUFDcEQsZ0NBQTZFO1lBQzdFLGdDQUtnQztZQUx6QixzTkFBc0I7WUFBN0IsaUJBS2dDO1lBRWhDLGlDQUdjO1lBRWQsOEJBQW1DO1lBQy9CLGdDQUFrRTtZQUN0RSxpQkFBTTtZQUNOLDhCQUFtQztZQUMvQixpQ0FBNEU7WUFNaEcsQUFESSxBQURJLEFBREksQUFGSSxpQkFBTSxFQUVKLEVBQ0osRUFDSixFQUNHOztZQWhDRCxnQ0FBa0I7WUFVUCxlQUFzQjtZQUF0Qiw0Q0FBc0I7WUFRckIsY0FBZ0M7WUFBaEMsa0RBQWdDOzs7aUZEUDNDLDRCQUE0QjtjQUx4QyxTQUFTOzJCQUNJLGdCQUFnQjt5SUFXMUIsVUFBVTtrQkFEVCxZQUFZO21CQUFDLHFCQUFxQjs7a0ZBTjFCLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDI0IFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cbmltcG9ydCB7Q29tcG9uZW50LCBIb3N0TGlzdGVuZXIsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7TmdiQWN0aXZlTW9kYWx9IGZyb20gXCJAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcFwiO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlfSBmcm9tIFwiLi4vLi4vLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmVcIjtcbmltcG9ydCB7Q2hlY2tUd29GYWN0b3JDb2RlfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZXMvcHJvY2Vzcy9wcm9jZXNzZXMvY2hlY2stdHdvLWZhY3Rvci1jb2RlL2NoZWNrLXR3by1mYWN0b3ItY29kZVwiO1xuaW1wb3J0IHtUd29GYWN0b3JDaGVja01vZGFsUmVzdWx0fSBmcm9tIFwiLi8yZmEtY2hlY2stbW9kYWwubW9kZWxcIjtcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi8uLi9zZXJ2aWNlcy9tZXNzYWdlL21lc3NhZ2Uuc2VydmljZVwiO1xuaW1wb3J0IHtCdXR0b25DYWxsYmFjaywgQnV0dG9uSW50ZXJmYWNlfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5tb2RlbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tMmZhLW1vZGFsJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vMmZhLWNoZWNrLW1vZGFsLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBUd29GYWN0b3JDaGVja01vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuXG4gICAgYXV0aENvZGU6IHN0cmluZztcblxuICAgIGNoZWNrQ29kZUJ1dHRvbkNvbmZpZzogQnV0dG9uSW50ZXJmYWNlO1xuXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5dXAuY29udHJvbC5lbnRlcicpXG4gICAgb25FbnRlcktleSgpIHtcbiAgICAgICAgdGhpcy5jaGVja0NvZGUoKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGFjdGl2ZU1vZGFsOiBOZ2JBY3RpdmVNb2RhbCxcbiAgICAgICAgcHJvdGVjdGVkIGxhbmd1YWdlOiBMYW5ndWFnZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbWVzc2FnZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBjaGVja1R3b0ZhY3RvckNvZGU6IENoZWNrVHdvRmFjdG9yQ29kZVxuICAgICkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmNoZWNrQ29kZUJ1dHRvbkNvbmZpZyA9IHtcbiAgICAgICAgICAgIGtsYXNzOiAnYnRuIGJ0bi1zbSBidG4tbWFpbicsXG4gICAgICAgICAgICBvbkNsaWNrOiAoKCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tDb2RlKClcbiAgICAgICAgICAgIH0pIGFzIEJ1dHRvbkNhbGxiYWNrLFxuICAgICAgICAgICAgbGFiZWxLZXk6ICdMQkxfVkVSSUZZXzJGQScsXG4gICAgICAgICAgICB0aXRsZUtleTogJydcbiAgICAgICAgfSBhcyBCdXR0b25JbnRlcmZhY2U7XG4gICAgfVxuXG4gICAgcHVibGljIGNoZWNrQ29kZSgpIHtcbiAgICAgICAgY29uc3QgYXV0aENvZGUgPSB0aGlzLmF1dGhDb2RlO1xuXG4gICAgICAgIHRoaXMuY2hlY2tUd29GYWN0b3JDb2RlLmNoZWNrQ29kZShhdXRoQ29kZSkuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgIG5leHQ6IChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VNb2RhbChyZXNwb25zZS5kYXRhLnR3b19mYWN0b3JfY29tcGxldGUpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UuYWRkRGFuZ2VyTWVzc2FnZUJ5S2V5KCdMQkxfRkFDVE9SX0FVVEhfRkFJTCcpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbG9zZU1vZGFsKGF1dGhDb21wbGV0ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmFjdGl2ZU1vZGFsLmNsb3NlKHtcbiAgICAgICAgICAgIHR3b19mYWN0b3JfY29tcGxldGU6IGF1dGhDb21wbGV0ZVxuICAgICAgICB9IGFzIFR3b0ZhY3RvckNoZWNrTW9kYWxSZXN1bHQpO1xuICAgIH1cblxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyNCBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPHNjcm0tbW9kYWwgW2Nsb3NhYmxlXT1cImZhbHNlXCJcbiAgICAgICAgICAgIGJvZHlLbGFzcz0nbS0wIHNtYWxsLWZvbnQnXG4gICAgICAgICAgICBmb290ZXJLbGFzcz0nYm9yZGVyLTAnXG4gICAgICAgICAgICBoZWFkZXJLbGFzcz0nYm9yZGVyLTAnXG4gICAgICAgICAgICBrbGFzcz0ndHdvLWZhY3Rvci1wb3B1cCc+XG5cbiAgICA8ZGl2IG1vZGFsLWJvZHk+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdkLWZsZXggZmxleC1jb2x1bW4gcHQtNCBhbGlnbi1pdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgIDxzY3JtLWxhYmVsIGxhYmVsS2V5PSdMQkxfRU5URVJfQVVUSF9BUFBfMkZBX0NPREUnIGNsYXNzPSdwYi00Jz48L3Njcm0tbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IFsobmdNb2RlbCldPVwiYXV0aENvZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICBpZD0nYXV0aF9jb2RlJ1xuICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdhdXRoX2NvZGUnXG4gICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT0nb25lLXRpbWUtY29kZSdcbiAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9J21iLTMgYXV0aC1pbnB1dCcvPlxuXG4gICAgICAgICAgICAgICAgPHNjcm0tYnV0dG9uIGlkPSdzdWJtaXQtMmZhLWNvZGUnXG4gICAgICAgICAgICAgICAgICAgICAgICBbY29uZmlnXT1cImNoZWNrQ29kZUJ1dHRvbkNvbmZpZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnPlxuICAgICAgICAgICAgICAgIDwvc2NybS1idXR0b24+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdzbWFsbCBtdC0yIHRleHQtbXV0ZWQnPlxuICAgICAgICAgICAgICAgICAgICA8c2NybS1sYWJlbCAgbGFiZWxLZXk9J0xCTF9QUk9CTEVNU19HRU5FUkFUSU5HX0NPREUnPjwvc2NybS1sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdzbWFsbCBtYi0yIHRleHQtbXV0ZWQnPlxuICAgICAgICAgICAgICAgICAgICA8c2NybS1sYWJlbCAgbGFiZWxLZXk9J0xCTF9CQUNLVVBfQ09ERVNfRkFMTEJBQ0tfSU5TVFJVQ1RJT05TJz48L3Njcm0tbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvc2NybS1tb2RhbD5cbiJdfQ==