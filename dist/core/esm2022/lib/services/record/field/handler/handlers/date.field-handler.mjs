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
import { Injectable } from "@angular/core";
import { ProcessService } from "../../../../process/process.service";
import { take } from "rxjs/operators";
import { BaseFieldHandler } from "./base.field-handler";
import { MessageService } from "../../../../message/message.service";
import * as i0 from "@angular/core";
import * as i1 from "../../../../process/process.service";
import * as i2 from "../../../../message/message.service";
export class DateFieldHandler extends BaseFieldHandler {
    constructor(processService, messages) {
        super();
        this.processService = processService;
        this.messages = messages;
    }
    initDefaultValue(field, record) {
        if (field.defaultValueInitialized) {
            return;
        }
        let defaultValue = field?.default ?? field?.definition?.default ?? null;
        let displayDefault = field?.definition?.display_default ?? null;
        if (!defaultValue && !displayDefault) {
            field.defaultValueInitialized = true;
            return;
        }
        if (typeof defaultValue !== "string" && typeof displayDefault !== "string") {
            return;
        }
        if (defaultValue && typeof defaultValue !== "string") {
            super.initDefaultValue(field, record);
            return;
        }
        const processType = 'calculate-date-default';
        const options = {
            action: processType,
            module: record.module ?? '',
            field: field.name,
            displayDefault: displayDefault
        };
        field.loading.set(true);
        this.processService.submit(processType, options).pipe(take(1)).subscribe((result) => {
            const value = result?.data?.value ?? null;
            field.loading.set(false);
            if (value === null) {
                this.messages.addDangerMessageByKey("ERR_FIELD_LOGIC_BACKEND_CALCULATION");
                return;
            }
            this.updateValue(field, value.toString(), record);
            field.defaultValueInitialized = true;
        });
    }
    updateValue(field, value, record) {
        field.value = value.toString();
        field.formControl.setValue(value);
        // re-validate the parent form-control after value update
        record.formGroup.updateValueAndValidity({ onlySelf: true, emitEvent: true });
    }
    static { this.ɵfac = function DateFieldHandler_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DateFieldHandler)(i0.ɵɵinject(i1.ProcessService), i0.ɵɵinject(i2.MessageService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DateFieldHandler, factory: DateFieldHandler.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DateFieldHandler, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.ProcessService }, { type: i2.MessageService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5maWVsZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3NlcnZpY2VzL3JlY29yZC9maWVsZC9oYW5kbGVyL2hhbmRsZXJzL2RhdGUuZmllbGQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBQ0gsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDbkUsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBSXBDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQzs7OztBQUluRSxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsZ0JBQTJCO0lBRTdELFlBQ2MsY0FBOEIsRUFDOUIsUUFBd0I7UUFFbEMsS0FBSyxFQUFFLENBQUM7UUFIRSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsYUFBUSxHQUFSLFFBQVEsQ0FBZ0I7SUFHdEMsQ0FBQztJQUVELGdCQUFnQixDQUFDLEtBQWdCLEVBQUUsTUFBYztRQUU3QyxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1lBQ2hDLE9BQU87UUFDWCxDQUFDO1FBRUQsSUFBSSxZQUFZLEdBQUcsS0FBSyxFQUFFLE9BQU8sSUFBSSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sSUFBSSxJQUFJLENBQUM7UUFDeEUsSUFBSSxjQUFjLEdBQUcsS0FBSyxFQUFFLFVBQVUsRUFBRSxlQUFlLElBQUksSUFBSSxDQUFDO1FBQ2hFLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNuQyxLQUFLLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDO1lBQ3JDLE9BQU87UUFDWCxDQUFDO1FBRUQsSUFBSSxPQUFPLFlBQVksS0FBSyxRQUFRLElBQUksT0FBTyxjQUFjLEtBQUssUUFBUSxFQUFFLENBQUM7WUFDekUsT0FBTztRQUNYLENBQUM7UUFFRCxJQUFJLFlBQVksSUFBSSxPQUFPLFlBQVksS0FBSyxRQUFRLEVBQUUsQ0FBQztZQUNuRCxLQUFLLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3RDLE9BQU87UUFDWCxDQUFDO1FBRUQsTUFBTSxXQUFXLEdBQUcsd0JBQXdCLENBQUM7UUFFN0MsTUFBTSxPQUFPLEdBQUc7WUFDWixNQUFNLEVBQUUsV0FBVztZQUNuQixNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sSUFBSSxFQUFFO1lBQzNCLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNqQixjQUFjLEVBQUUsY0FBYztTQUNiLENBQUM7UUFFdEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7UUFFdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUVoRixNQUFNLEtBQUssR0FBRyxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssSUFBSSxJQUFJLENBQUM7WUFDMUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7WUFFeEIsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMscUJBQXFCLENBQUMscUNBQXFDLENBQUMsQ0FBQztnQkFDM0UsT0FBTztZQUNYLENBQUM7WUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDbEQsS0FBSyxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQztRQUV6QyxDQUFDLENBQUMsQ0FBQztJQUdQLENBQUM7SUFFUyxXQUFXLENBQUMsS0FBWSxFQUFFLEtBQWEsRUFBRSxNQUFjO1FBQzdELEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQy9CLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLHlEQUF5RDtRQUN6RCxNQUFNLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztJQUMvRSxDQUFDO2lIQWhFUSxnQkFBZ0I7dUVBQWhCLGdCQUFnQixXQUFoQixnQkFBZ0IsbUJBRmIsTUFBTTs7aUZBRVQsZ0JBQWdCO2NBSDVCLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDI0IFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7UHJvY2Vzc1NlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi8uLi9wcm9jZXNzL3Byb2Nlc3Muc2VydmljZVwiO1xuaW1wb3J0IHt0YWtlfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7QXN5bmNBY3Rpb25JbnB1dH0gZnJvbSBcIi4uLy4uLy4uLy4uL3Byb2Nlc3MvcHJvY2Vzc2VzL2FzeW5jLWFjdGlvbi9hc3luYy1hY3Rpb25cIjtcbmltcG9ydCB7QmFzZUZpZWxkLCBGaWVsZH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL3JlY29yZC9maWVsZC5tb2RlbCc7XG5pbXBvcnQge1JlY29yZH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL3JlY29yZC9yZWNvcmQubW9kZWwnO1xuaW1wb3J0IHtCYXNlRmllbGRIYW5kbGVyfSBmcm9tIFwiLi9iYXNlLmZpZWxkLWhhbmRsZXJcIjtcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi8uLi9tZXNzYWdlL21lc3NhZ2Uuc2VydmljZVwiO1xuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYXRlRmllbGRIYW5kbGVyIGV4dGVuZHMgQmFzZUZpZWxkSGFuZGxlcjxCYXNlRmllbGQ+IHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgcHJvY2Vzc1NlcnZpY2U6IFByb2Nlc3NTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgbWVzc2FnZXM6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgICkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGluaXREZWZhdWx0VmFsdWUoZmllbGQ6IEJhc2VGaWVsZCwgcmVjb3JkOiBSZWNvcmQpOiB2b2lkIHtcblxuICAgICAgICBpZiAoZmllbGQuZGVmYXVsdFZhbHVlSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkZWZhdWx0VmFsdWUgPSBmaWVsZD8uZGVmYXVsdCA/PyBmaWVsZD8uZGVmaW5pdGlvbj8uZGVmYXVsdCA/PyBudWxsO1xuICAgICAgICBsZXQgZGlzcGxheURlZmF1bHQgPSBmaWVsZD8uZGVmaW5pdGlvbj8uZGlzcGxheV9kZWZhdWx0ID8/IG51bGw7XG4gICAgICAgIGlmICghZGVmYXVsdFZhbHVlICYmICFkaXNwbGF5RGVmYXVsdCkge1xuICAgICAgICAgICAgZmllbGQuZGVmYXVsdFZhbHVlSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBkZWZhdWx0VmFsdWUgIT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIGRpc3BsYXlEZWZhdWx0ICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGVmYXVsdFZhbHVlICYmIHR5cGVvZiBkZWZhdWx0VmFsdWUgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHN1cGVyLmluaXREZWZhdWx0VmFsdWUoZmllbGQsIHJlY29yZCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcm9jZXNzVHlwZSA9ICdjYWxjdWxhdGUtZGF0ZS1kZWZhdWx0JztcblxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgYWN0aW9uOiBwcm9jZXNzVHlwZSxcbiAgICAgICAgICAgIG1vZHVsZTogcmVjb3JkLm1vZHVsZSA/PyAnJyxcbiAgICAgICAgICAgIGZpZWxkOiBmaWVsZC5uYW1lLFxuICAgICAgICAgICAgZGlzcGxheURlZmF1bHQ6IGRpc3BsYXlEZWZhdWx0XG4gICAgICAgIH0gYXMgQXN5bmNBY3Rpb25JbnB1dDtcblxuICAgICAgICBmaWVsZC5sb2FkaW5nLnNldCh0cnVlKVxuXG4gICAgICAgIHRoaXMucHJvY2Vzc1NlcnZpY2Uuc3VibWl0KHByb2Nlc3NUeXBlLCBvcHRpb25zKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcmVzdWx0Py5kYXRhPy52YWx1ZSA/PyBudWxsO1xuICAgICAgICAgICAgZmllbGQubG9hZGluZy5zZXQoZmFsc2UpXG5cbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZXMuYWRkRGFuZ2VyTWVzc2FnZUJ5S2V5KFwiRVJSX0ZJRUxEX0xPR0lDX0JBQ0tFTkRfQ0FMQ1VMQVRJT05cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZShmaWVsZCwgdmFsdWUudG9TdHJpbmcoKSwgcmVjb3JkKTtcbiAgICAgICAgICAgIGZpZWxkLmRlZmF1bHRWYWx1ZUluaXRpYWxpemVkID0gdHJ1ZTtcblxuICAgICAgICB9KTtcblxuXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVZhbHVlKGZpZWxkOiBGaWVsZCwgdmFsdWU6IHN0cmluZywgcmVjb3JkOiBSZWNvcmQpOiB2b2lkIHtcbiAgICAgICAgZmllbGQudmFsdWUgPSB2YWx1ZS50b1N0cmluZygpO1xuICAgICAgICBmaWVsZC5mb3JtQ29udHJvbC5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIC8vIHJlLXZhbGlkYXRlIHRoZSBwYXJlbnQgZm9ybS1jb250cm9sIGFmdGVyIHZhbHVlIHVwZGF0ZVxuICAgICAgICByZWNvcmQuZm9ybUdyb3VwLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoe29ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnQ6IHRydWV9KTtcbiAgICB9XG5cbn1cbiJdfQ==