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
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class BaseActionManager {
    constructor() {
        this.actions = {
            edit: {},
            create: {},
            list: {},
            detail: {},
            massupdate: {},
            filter: {}
        };
    }
    run(action, mode, data) {
        if (!this.actions || !this.actions[mode] || !this.actions[mode][action.key]) {
            return;
        }
        this.actions[mode][action.key].run(data, action);
    }
    getHandler(action, mode) {
        let handlerKey = action.key;
        if (action && action.asyncProcess) {
            handlerKey = 'async-process';
        }
        if (!this.actions || !this.actions[mode] || !this.actions[mode][handlerKey]) {
            return null;
        }
        return this.actions[mode][handlerKey];
    }
    addHandler(action, mode, handler) {
        if (!this.actions[mode]) {
            this.actions[mode] = {};
        }
        this.actions[mode][action.key] = handler;
    }
    static { this.ɵfac = function BaseActionManager_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BaseActionManager)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: BaseActionManager, factory: BaseActionManager.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseActionManager, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1hY3Rpb24tbWFuYWdlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3NlcnZpY2VzL2FjdGlvbnMvYmFzZS1hY3Rpb24tbWFuYWdlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDOztBQU96QyxNQUFNLE9BQU8saUJBQWlCO0lBSDlCO1FBS0ksWUFBTyxHQUEyQztZQUM5QyxJQUFJLEVBQUUsRUFBeUI7WUFDL0IsTUFBTSxFQUFFLEVBQXlCO1lBQ2pDLElBQUksRUFBRSxFQUF5QjtZQUMvQixNQUFNLEVBQUUsRUFBeUI7WUFDakMsVUFBVSxFQUFFLEVBQXlCO1lBQ3JDLE1BQU0sRUFBRSxFQUF5QjtTQUNwQyxDQUFDO0tBaUNMO0lBL0JHLEdBQUcsQ0FBQyxNQUFjLEVBQUUsSUFBYyxFQUFFLElBQU87UUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUMxRSxPQUFPO1FBQ1gsQ0FBQztRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELFVBQVUsQ0FBQyxNQUFjLEVBQUUsSUFBYztRQUNyQyxJQUFJLFVBQVUsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBRTVCLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNoQyxVQUFVLEdBQUcsZUFBZSxDQUFDO1FBQ2pDLENBQUM7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7WUFDMUUsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsVUFBVSxDQUFDLE1BQWMsRUFBRSxJQUFjLEVBQUUsT0FBeUI7UUFFaEUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQXlCLENBQUM7UUFFbkQsQ0FBQztRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQztJQUM3QyxDQUFDO2tIQXpDUSxpQkFBaUI7dUVBQWpCLGlCQUFpQixXQUFqQixpQkFBaUIsbUJBRmQsTUFBTTs7aUZBRVQsaUJBQWlCO2NBSDdCLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QWN0aW9uLCBBY3Rpb25EYXRhLCBBY3Rpb25IYW5kbGVyLCBBY3Rpb25IYW5kbGVyTWFwLCBBY3Rpb25NYW5hZ2VyfSBmcm9tICcuLi8uLi9jb21tb24vYWN0aW9ucy9hY3Rpb24ubW9kZWwnO1xuaW1wb3J0IHtWaWV3TW9kZX0gZnJvbSAnLi4vLi4vY29tbW9uL3ZpZXdzL3ZpZXcubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBCYXNlQWN0aW9uTWFuYWdlcjxEIGV4dGVuZHMgQWN0aW9uRGF0YT4gaW1wbGVtZW50cyBBY3Rpb25NYW5hZ2VyPEQ+IHtcblxuICAgIGFjdGlvbnM6IHsgW2tleTogc3RyaW5nXTogQWN0aW9uSGFuZGxlck1hcDxEPiB9ID0ge1xuICAgICAgICBlZGl0OiB7fSBhcyBBY3Rpb25IYW5kbGVyTWFwPEQ+LFxuICAgICAgICBjcmVhdGU6IHt9IGFzIEFjdGlvbkhhbmRsZXJNYXA8RD4sXG4gICAgICAgIGxpc3Q6IHt9IGFzIEFjdGlvbkhhbmRsZXJNYXA8RD4sXG4gICAgICAgIGRldGFpbDoge30gYXMgQWN0aW9uSGFuZGxlck1hcDxEPixcbiAgICAgICAgbWFzc3VwZGF0ZToge30gYXMgQWN0aW9uSGFuZGxlck1hcDxEPixcbiAgICAgICAgZmlsdGVyOiB7fSBhcyBBY3Rpb25IYW5kbGVyTWFwPEQ+XG4gICAgfTtcblxuICAgIHJ1bihhY3Rpb246IEFjdGlvbiwgbW9kZTogVmlld01vZGUsIGRhdGE6IEQpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmFjdGlvbnMgfHwgIXRoaXMuYWN0aW9uc1ttb2RlXSB8fCAhdGhpcy5hY3Rpb25zW21vZGVdW2FjdGlvbi5rZXldKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFjdGlvbnNbbW9kZV1bYWN0aW9uLmtleV0ucnVuKGRhdGEsIGFjdGlvbik7XG4gICAgfVxuXG4gICAgZ2V0SGFuZGxlcihhY3Rpb246IEFjdGlvbiwgbW9kZTogVmlld01vZGUpOiBBY3Rpb25IYW5kbGVyPEQ+IHtcbiAgICAgICAgbGV0IGhhbmRsZXJLZXkgPSBhY3Rpb24ua2V5O1xuXG4gICAgICAgIGlmIChhY3Rpb24gJiYgYWN0aW9uLmFzeW5jUHJvY2Vzcykge1xuICAgICAgICAgICAgaGFuZGxlcktleSA9ICdhc3luYy1wcm9jZXNzJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5hY3Rpb25zIHx8ICF0aGlzLmFjdGlvbnNbbW9kZV0gfHwgIXRoaXMuYWN0aW9uc1ttb2RlXVtoYW5kbGVyS2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5hY3Rpb25zW21vZGVdW2hhbmRsZXJLZXldO1xuICAgIH1cblxuICAgIGFkZEhhbmRsZXIoYWN0aW9uOiBBY3Rpb24sIG1vZGU6IFZpZXdNb2RlLCBoYW5kbGVyOiBBY3Rpb25IYW5kbGVyPEQ+KSB7XG5cbiAgICAgICAgaWYgKCF0aGlzLmFjdGlvbnNbbW9kZV0pIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uc1ttb2RlXSA9IHt9IGFzIEFjdGlvbkhhbmRsZXJNYXA8RD47XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWN0aW9uc1ttb2RlXVthY3Rpb24ua2V5XSA9IGhhbmRsZXI7XG4gICAgfVxufVxuIl19