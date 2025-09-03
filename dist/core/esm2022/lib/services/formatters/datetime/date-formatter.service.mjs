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
import { DatetimeFormatter } from './datetime-formatter.service';
import { formatDate } from '@angular/common';
import * as i0 from "@angular/core";
export class DateFormatter extends DatetimeFormatter {
    getInternalFormat() {
        return this.getInternalDateFormat();
    }
    getUserFormat() {
        return this.getDateFormat();
    }
    /**
     * Format User Date to Internal format. It assumes the date is always in GMT
     *
     * @param dateString
     * @param options
     */
    toInternalFormat(dateString, options) {
        const fromFormat = (options && options.fromFormat) || this.getUserFormat();
        if (dateString) {
            let date = this.toDateTime(dateString, fromFormat);
            if (!date || !date.isValid) {
                date = this.toDateTime(dateString);
            }
            return formatDate(date.toJSDate(), this.getInternalFormat(), this.locale);
        }
        return '';
    }
    /**
     * Format Internal Date to User. It assumes internal date is in GMT/UTC
     *
     * @param dateString
     * @param options
     */
    toUserFormat(dateString, options) {
        const fromFormat = (options && options.fromFormat) || this.getInternalFormat();
        const toFormat = (options && options.toFormat) || this.getUserFormat();
        if (dateString) {
            const dateTime = this.toDateTime(dateString, fromFormat);
            if (!dateTime.isValid) {
                return dateString;
            }
            return formatDate(dateTime.toJSDate(), toFormat, this.locale);
        }
        return '';
    }
    static { this.ɵfac = /*@__PURE__*/ (() => { let ɵDateFormatter_BaseFactory; return function DateFormatter_Factory(__ngFactoryType__) { return (ɵDateFormatter_BaseFactory || (ɵDateFormatter_BaseFactory = i0.ɵɵgetInheritedFactory(DateFormatter)))(__ngFactoryType__ || DateFormatter); }; })(); }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DateFormatter, factory: DateFormatter.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DateFormatter, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1mb3JtYXR0ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9zZXJ2aWNlcy9mb3JtYXR0ZXJzL2RhdGV0aW1lL2RhdGUtZm9ybWF0dGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFFL0QsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGlCQUFpQixDQUFDOztBQUszQyxNQUFNLE9BQU8sYUFBYyxTQUFRLGlCQUFpQjtJQUVoRCxpQkFBaUI7UUFDYixPQUFPLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFRCxhQUFhO1FBQ1QsT0FBTyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsZ0JBQWdCLENBQUMsVUFBa0IsRUFBRSxPQUF1QjtRQUN4RCxNQUFNLFVBQVUsR0FBRyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzNFLElBQUksVUFBVSxFQUFFLENBQUM7WUFFYixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUVuRCxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUN6QixJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN2QyxDQUFDO1lBRUQsT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5RSxDQUFDO1FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxZQUFZLENBQUMsVUFBa0IsRUFBRSxPQUF1QjtRQUNwRCxNQUFNLFVBQVUsR0FBRyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDL0UsTUFBTSxRQUFRLEdBQUcsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2RSxJQUFJLFVBQVUsRUFBRSxDQUFDO1lBQ2IsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDcEIsT0FBTyxVQUFVLENBQUM7WUFDdEIsQ0FBQztZQUNELE9BQU8sVUFBVSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xFLENBQUM7UUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7d09BaERRLGFBQWEseUJBQWIsYUFBYTt1RUFBYixhQUFhLFdBQWIsYUFBYSxtQkFGVixNQUFNOztpRkFFVCxhQUFhO2NBSHpCLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGF0ZXRpbWVGb3JtYXR0ZXJ9IGZyb20gJy4vZGF0ZXRpbWUtZm9ybWF0dGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtGb3JtYXRPcHRpb25zfSBmcm9tICcuLi9mb3JtYXR0ZXIubW9kZWwnO1xuaW1wb3J0IHtmb3JtYXREYXRlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhdGVGb3JtYXR0ZXIgZXh0ZW5kcyBEYXRldGltZUZvcm1hdHRlciB7XG5cbiAgICBnZXRJbnRlcm5hbEZvcm1hdCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRJbnRlcm5hbERhdGVGb3JtYXQoKTtcbiAgICB9XG5cbiAgICBnZXRVc2VyRm9ybWF0KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERhdGVGb3JtYXQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGb3JtYXQgVXNlciBEYXRlIHRvIEludGVybmFsIGZvcm1hdC4gSXQgYXNzdW1lcyB0aGUgZGF0ZSBpcyBhbHdheXMgaW4gR01UXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGF0ZVN0cmluZ1xuICAgICAqIEBwYXJhbSBvcHRpb25zXG4gICAgICovXG4gICAgdG9JbnRlcm5hbEZvcm1hdChkYXRlU3RyaW5nOiBzdHJpbmcsIG9wdGlvbnM/OiBGb3JtYXRPcHRpb25zKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgZnJvbUZvcm1hdCA9IChvcHRpb25zICYmIG9wdGlvbnMuZnJvbUZvcm1hdCkgfHwgdGhpcy5nZXRVc2VyRm9ybWF0KCk7XG4gICAgICAgIGlmIChkYXRlU3RyaW5nKSB7XG5cbiAgICAgICAgICAgIGxldCBkYXRlID0gdGhpcy50b0RhdGVUaW1lKGRhdGVTdHJpbmcsIGZyb21Gb3JtYXQpO1xuXG4gICAgICAgICAgICBpZiAoIWRhdGUgfHwgIWRhdGUuaXNWYWxpZCkge1xuICAgICAgICAgICAgICAgIGRhdGUgPSB0aGlzLnRvRGF0ZVRpbWUoZGF0ZVN0cmluZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmb3JtYXREYXRlKGRhdGUudG9KU0RhdGUoKSwgdGhpcy5nZXRJbnRlcm5hbEZvcm1hdCgpLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZvcm1hdCBJbnRlcm5hbCBEYXRlIHRvIFVzZXIuIEl0IGFzc3VtZXMgaW50ZXJuYWwgZGF0ZSBpcyBpbiBHTVQvVVRDXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGF0ZVN0cmluZ1xuICAgICAqIEBwYXJhbSBvcHRpb25zXG4gICAgICovXG4gICAgdG9Vc2VyRm9ybWF0KGRhdGVTdHJpbmc6IHN0cmluZywgb3B0aW9ucz86IEZvcm1hdE9wdGlvbnMpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBmcm9tRm9ybWF0ID0gKG9wdGlvbnMgJiYgb3B0aW9ucy5mcm9tRm9ybWF0KSB8fCB0aGlzLmdldEludGVybmFsRm9ybWF0KCk7XG4gICAgICAgIGNvbnN0IHRvRm9ybWF0ID0gKG9wdGlvbnMgJiYgb3B0aW9ucy50b0Zvcm1hdCkgfHwgdGhpcy5nZXRVc2VyRm9ybWF0KCk7XG4gICAgICAgIGlmIChkYXRlU3RyaW5nKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRlVGltZSA9IHRoaXMudG9EYXRlVGltZShkYXRlU3RyaW5nLCBmcm9tRm9ybWF0KTtcbiAgICAgICAgICAgIGlmICghZGF0ZVRpbWUuaXNWYWxpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRlU3RyaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdERhdGUoZGF0ZVRpbWUudG9KU0RhdGUoKSwgdG9Gb3JtYXQsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG59XG4iXX0=