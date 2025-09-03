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
import { Injectable } from '@angular/core';
import { DateFieldHandler } from "./handlers/date.field-handler";
import { MultiEnumFieldHandler } from "./handlers/multienum.field-handler";
import { DefaultFieldHandler } from "./handlers/default.field-handler";
import { BaseServiceRegistry } from '../../../../common/registry/base-service.registry';
import * as i0 from "@angular/core";
import * as i1 from "./handlers/default.field-handler";
import * as i2 from "./handlers/date.field-handler";
import * as i3 from "./handlers/multienum.field-handler";
export class FieldHandlerRegistry extends BaseServiceRegistry {
    constructor(defaultFieldHandler, dateFieldHandler, multienumFieldHandler) {
        super();
        this.defaultFieldHandler = defaultFieldHandler;
        this.dateFieldHandler = dateFieldHandler;
        this.multienumFieldHandler = multienumFieldHandler;
        this.defaultMap = {};
        this.defaultMap = {
            'default': defaultFieldHandler,
            'date': dateFieldHandler,
            'multienum': multienumFieldHandler
        };
        this.initDefault();
    }
    initDefault() {
        Object.keys(this.getDefaultMap()).forEach(type => {
            this.register('default', type, this.getDefaultMap()[type]);
        });
    }
    getDefaultMap() {
        return this.defaultMap ?? {};
    }
    static { this.ɵfac = function FieldHandlerRegistry_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FieldHandlerRegistry)(i0.ɵɵinject(i1.DefaultFieldHandler), i0.ɵɵinject(i2.DateFieldHandler), i0.ɵɵinject(i3.MultiEnumFieldHandler)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FieldHandlerRegistry, factory: FieldHandlerRegistry.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FieldHandlerRegistry, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.DefaultFieldHandler }, { type: i2.DateFieldHandler }, { type: i3.MultiEnumFieldHandler }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtaGFuZGxlci5yZWdpc3RyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9zZXJ2aWNlcy9yZWNvcmQvZmllbGQvaGFuZGxlci9maWVsZC1oYW5kbGVyLnJlZ2lzdHJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBQy9ELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLG9DQUFvQyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLG1EQUFtRCxDQUFDOzs7OztBQUt0RixNQUFNLE9BQU8sb0JBQXFCLFNBQVEsbUJBQXNDO0lBRzVFLFlBQ2MsbUJBQXdDLEVBQ3hDLGdCQUFrQyxFQUNsQyxxQkFBNEM7UUFFdEQsS0FBSyxFQUFFLENBQUM7UUFKRSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUpoRCxlQUFVLEdBQW9CLEVBQUUsQ0FBQztRQVF2QyxJQUFJLENBQUMsVUFBVSxHQUFHO1lBQ2QsU0FBUyxFQUFFLG1CQUFtQjtZQUM5QixNQUFNLEVBQUUsZ0JBQWdCO1lBQ3hCLFdBQVcsRUFBRSxxQkFBcUI7U0FDckMsQ0FBQztRQUVGLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRVMsV0FBVztRQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM3QyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDL0QsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRVMsYUFBYTtRQUNuQixPQUFPLElBQUksQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDO0lBQ2pDLENBQUM7cUhBM0JRLG9CQUFvQjt1RUFBcEIsb0JBQW9CLFdBQXBCLG9CQUFvQixtQkFGakIsTUFBTTs7aUZBRVQsb0JBQW9CO2NBSGhDLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDI0IFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RmllbGRIYW5kbGVyLCBGaWVsZEhhbmRsZXJNYXB9IGZyb20gXCIuL2ZpZWxkLWhhbmRsZXIubW9kZWxcIjtcbmltcG9ydCB7RGF0ZUZpZWxkSGFuZGxlcn0gZnJvbSBcIi4vaGFuZGxlcnMvZGF0ZS5maWVsZC1oYW5kbGVyXCI7XG5pbXBvcnQge011bHRpRW51bUZpZWxkSGFuZGxlcn0gZnJvbSBcIi4vaGFuZGxlcnMvbXVsdGllbnVtLmZpZWxkLWhhbmRsZXJcIjtcbmltcG9ydCB7RGVmYXVsdEZpZWxkSGFuZGxlcn0gZnJvbSBcIi4vaGFuZGxlcnMvZGVmYXVsdC5maWVsZC1oYW5kbGVyXCI7XG5pbXBvcnQge0Jhc2VTZXJ2aWNlUmVnaXN0cnl9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9yZWdpc3RyeS9iYXNlLXNlcnZpY2UucmVnaXN0cnknO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEZpZWxkSGFuZGxlclJlZ2lzdHJ5IGV4dGVuZHMgQmFzZVNlcnZpY2VSZWdpc3RyeTxGaWVsZEhhbmRsZXI8YW55Pj4ge1xuXG4gICAgcHJvdGVjdGVkIGRlZmF1bHRNYXA6IEZpZWxkSGFuZGxlck1hcCA9IHt9O1xuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGRlZmF1bHRGaWVsZEhhbmRsZXI6IERlZmF1bHRGaWVsZEhhbmRsZXIsXG4gICAgICAgIHByb3RlY3RlZCBkYXRlRmllbGRIYW5kbGVyOiBEYXRlRmllbGRIYW5kbGVyLFxuICAgICAgICBwcm90ZWN0ZWQgbXVsdGllbnVtRmllbGRIYW5kbGVyOiBNdWx0aUVudW1GaWVsZEhhbmRsZXJcbiAgICApIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmRlZmF1bHRNYXAgPSB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IGRlZmF1bHRGaWVsZEhhbmRsZXIsXG4gICAgICAgICAgICAnZGF0ZSc6IGRhdGVGaWVsZEhhbmRsZXIsXG4gICAgICAgICAgICAnbXVsdGllbnVtJzogbXVsdGllbnVtRmllbGRIYW5kbGVyXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5pbml0RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBpbml0RGVmYXVsdCgpOiB2b2lkIHtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5nZXREZWZhdWx0TWFwKCkpLmZvckVhY2godHlwZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyKCdkZWZhdWx0JywgdHlwZSwgdGhpcy5nZXREZWZhdWx0TWFwKClbdHlwZV0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0RGVmYXVsdE1hcCgpOiBGaWVsZEhhbmRsZXJNYXAge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0TWFwID8/IHt9O1xuICAgIH1cbn1cbiJdfQ==