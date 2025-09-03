/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2023 SalesAgility Ltd.
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
import { GreaterThanAction } from './greater-than/greater-than.action';
import { LessThanAction } from './less-than/less-than.action';
import { NotEmptyAction } from './not-empty/not-empty.action';
import { IsEmptyAction } from './is-empty/is-empty.action';
import { IsEqualAction } from './is-equal/is-equal.action';
import { NotEqualAction } from './not-equal/not-equal.action';
import * as i0 from "@angular/core";
import * as i1 from "./greater-than/greater-than.action";
import * as i2 from "./less-than/less-than.action";
import * as i3 from "./not-empty/not-empty.action";
import * as i4 from "./is-empty/is-empty.action";
import * as i5 from "./is-equal/is-equal.action";
import * as i6 from "./not-equal/not-equal.action";
export class ConditionOperatorManager {
    constructor(greaterThanAction, lessThanAction, notEmptyAction, isEmptyAction, isEqualAction, notEqualAction) {
        this.greaterThanAction = greaterThanAction;
        this.lessThanAction = lessThanAction;
        this.notEmptyAction = notEmptyAction;
        this.isEmptyAction = isEmptyAction;
        this.isEqualAction = isEqualAction;
        this.notEqualAction = notEqualAction;
    }
    get(key) {
        const operatorMap = {
            'greater-than': this.greaterThanAction,
            'less-than': this.lessThanAction,
            'not-empty': this.notEmptyAction,
            'is-empty': this.isEmptyAction,
            'is-equal': this.isEqualAction,
            'not-equal': this.notEqualAction,
        };
        return operatorMap[key];
    }
    static { this.ɵfac = function ConditionOperatorManager_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ConditionOperatorManager)(i0.ɵɵinject(i1.GreaterThanAction), i0.ɵɵinject(i2.LessThanAction), i0.ɵɵinject(i3.NotEmptyAction), i0.ɵɵinject(i4.IsEmptyAction), i0.ɵɵinject(i5.IsEqualAction), i0.ɵɵinject(i6.NotEqualAction)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ConditionOperatorManager, factory: ConditionOperatorManager.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConditionOperatorManager, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.GreaterThanAction }, { type: i2.LessThanAction }, { type: i3.NotEmptyAction }, { type: i4.IsEmptyAction }, { type: i5.IsEqualAction }, { type: i6.NotEqualAction }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZGl0aW9uLW9wZXJhdG9yLm1hbmFnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc2VydmljZXMvY29uZGl0aW9uLW9wZXJhdG9ycy9jb25kaXRpb24tb3BlcmF0b3IubWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUNyRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDNUQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBRTVELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDekQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7OztBQUs1RCxNQUFNLE9BQU8sd0JBQXdCO0lBRWpDLFlBQ1csaUJBQW9DLEVBQ3BDLGNBQThCLEVBQzlCLGNBQThCLEVBQzlCLGFBQTRCLEVBQzVCLGFBQTRCLEVBQzVCLGNBQThCO1FBTDlCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFHekMsQ0FBQztJQUVELEdBQUcsQ0FBQyxHQUFXO1FBQ1gsTUFBTSxXQUFXLEdBQThDO1lBQzNELGNBQWMsRUFBRSxJQUFJLENBQUMsaUJBQWlCO1lBQ3RDLFdBQVcsRUFBRSxJQUFJLENBQUMsY0FBYztZQUNoQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFDaEMsVUFBVSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQzlCLFVBQVUsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUM5QixXQUFXLEVBQUUsSUFBSSxDQUFDLGNBQWM7U0FDbkMsQ0FBQztRQUVGLE9BQU8sV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7eUhBeEJRLHdCQUF3Qjt1RUFBeEIsd0JBQXdCLFdBQXhCLHdCQUF3QixtQkFGckIsTUFBTTs7aUZBRVQsd0JBQXdCO2NBSHBDLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIzIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7R3JlYXRlclRoYW5BY3Rpb259IGZyb20gJy4vZ3JlYXRlci10aGFuL2dyZWF0ZXItdGhhbi5hY3Rpb24nO1xuaW1wb3J0IHtMZXNzVGhhbkFjdGlvbn0gZnJvbSAnLi9sZXNzLXRoYW4vbGVzcy10aGFuLmFjdGlvbic7XG5pbXBvcnQge05vdEVtcHR5QWN0aW9ufSBmcm9tICcuL25vdC1lbXB0eS9ub3QtZW1wdHkuYWN0aW9uJztcbmltcG9ydCB7Q29uZGl0aW9uT3BlcmF0b3JNb2RlbH0gZnJvbSAnLi9jb25kaXRpb24tb3BlcmF0b3IubW9kZWwnO1xuaW1wb3J0IHtJc0VtcHR5QWN0aW9ufSBmcm9tICcuL2lzLWVtcHR5L2lzLWVtcHR5LmFjdGlvbic7XG5pbXBvcnQge0lzRXF1YWxBY3Rpb259IGZyb20gJy4vaXMtZXF1YWwvaXMtZXF1YWwuYWN0aW9uJztcbmltcG9ydCB7Tm90RXF1YWxBY3Rpb259IGZyb20gJy4vbm90LWVxdWFsL25vdC1lcXVhbC5hY3Rpb24nO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENvbmRpdGlvbk9wZXJhdG9yTWFuYWdlciB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGdyZWF0ZXJUaGFuQWN0aW9uOiBHcmVhdGVyVGhhbkFjdGlvbixcbiAgICAgICAgcHVibGljIGxlc3NUaGFuQWN0aW9uOiBMZXNzVGhhbkFjdGlvbixcbiAgICAgICAgcHVibGljIG5vdEVtcHR5QWN0aW9uOiBOb3RFbXB0eUFjdGlvbixcbiAgICAgICAgcHVibGljIGlzRW1wdHlBY3Rpb246IElzRW1wdHlBY3Rpb24sXG4gICAgICAgIHB1YmxpYyBpc0VxdWFsQWN0aW9uOiBJc0VxdWFsQWN0aW9uLFxuICAgICAgICBwdWJsaWMgbm90RXF1YWxBY3Rpb246IE5vdEVxdWFsQWN0aW9uXG5cbiAgICApIHtcbiAgICB9XG5cbiAgICBnZXQoa2V5OiBzdHJpbmcpOiBDb25kaXRpb25PcGVyYXRvck1vZGVsIHtcbiAgICAgICAgY29uc3Qgb3BlcmF0b3JNYXA6IHsgW2tleTogc3RyaW5nXTogQ29uZGl0aW9uT3BlcmF0b3JNb2RlbCB9ID0ge1xuICAgICAgICAgICAgJ2dyZWF0ZXItdGhhbic6IHRoaXMuZ3JlYXRlclRoYW5BY3Rpb24sXG4gICAgICAgICAgICAnbGVzcy10aGFuJzogdGhpcy5sZXNzVGhhbkFjdGlvbixcbiAgICAgICAgICAgICdub3QtZW1wdHknOiB0aGlzLm5vdEVtcHR5QWN0aW9uLFxuICAgICAgICAgICAgJ2lzLWVtcHR5JzogdGhpcy5pc0VtcHR5QWN0aW9uLFxuICAgICAgICAgICAgJ2lzLWVxdWFsJzogdGhpcy5pc0VxdWFsQWN0aW9uLFxuICAgICAgICAgICAgJ25vdC1lcXVhbCc6IHRoaXMubm90RXF1YWxBY3Rpb24sXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG9wZXJhdG9yTWFwW2tleV07XG4gICAgfVxuXG59XG4iXX0=