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
import { SystemConfigStore } from '../../../store/system-config/system-config.store';
import * as i0 from "@angular/core";
import * as i1 from "../../../store/system-config/system-config.store";
export class ActionNameMapper {
    constructor(systemConfig) {
        this.systemConfig = systemConfig;
    }
    /**
     * Public Api
     */
    /**
     * Map the legacy name to frontend
     *
     * @param {string} action the action name
     * @returns {string} frontend name
     */
    toFrontend(action) {
        const map = this.getLegacyToFrontendMap();
        if (!map[action]) {
            return action;
        }
        return map[action];
    }
    /**
     * Map the frontend name to legacy
     *
     * @param {string} action the action name
     * @returns {string} frontend name
     */
    toLegacy(action) {
        const map = this.getFrontendToLegacyMap();
        if (!map[action]) {
            return action;
        }
        return map[action];
    }
    /**
     * Check if action is valid
     *
     * @param {string} action the action name
     * @returns {boolean} is valid
     */
    isValid(action) {
        const map = this.getFrontendToLegacyMap();
        let valid = false;
        if (map[action]) {
            valid = true;
        }
        return valid;
    }
    /**
     * Internal API
     */
    /**
     * Get the legacy to frontend map
     *
     * @returns {{}} legacy to frontend map
     */
    getLegacyToFrontendMap() {
        return this.systemConfig.getConfigValue('action_name_map');
    }
    /**
     * Get the frontend to legacy map
     *
     * @returns {{}} frontend to legacy map
     */
    getFrontendToLegacyMap() {
        const map = this.systemConfig.getConfigValue('action_name_map');
        const invertedMap = {};
        Object.keys(map).forEach((legacyName) => {
            const frontendName = map[legacyName];
            invertedMap[frontendName] = legacyName;
        });
        return invertedMap;
    }
    static { this.ɵfac = function ActionNameMapper_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ActionNameMapper)(i0.ɵɵinject(i1.SystemConfigStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ActionNameMapper, factory: ActionNameMapper.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ActionNameMapper, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.SystemConfigStore }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLW5hbWUtbWFwcGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc2VydmljZXMvbmF2aWdhdGlvbi9hY3Rpb24tbmFtZS1tYXBwZXIvYWN0aW9uLW5hbWUtbWFwcGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0RBQWtELENBQUM7OztBQUluRixNQUFNLE9BQU8sZ0JBQWdCO0lBRXpCLFlBQW9CLFlBQStCO1FBQS9CLGlCQUFZLEdBQVosWUFBWSxDQUFtQjtJQUNuRCxDQUFDO0lBRUQ7O09BRUc7SUFFSDs7Ozs7T0FLRztJQUNJLFVBQVUsQ0FBQyxNQUFjO1FBQzVCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBRTFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUMsQ0FBQztZQUNkLE9BQU8sTUFBTSxDQUFDO1FBQ2xCLENBQUM7UUFFRCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxRQUFRLENBQUMsTUFBYztRQUMxQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUUxQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFDLENBQUM7WUFDZCxPQUFPLE1BQU0sQ0FBQztRQUNsQixDQUFDO1FBRUQsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksT0FBTyxDQUFDLE1BQWM7UUFDekIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDMUMsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBRWxCLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7WUFDZCxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLENBQUM7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBR0Q7O09BRUc7SUFFSDs7OztPQUlHO0lBQ08sc0JBQXNCO1FBQzVCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNPLHNCQUFzQjtRQUM1QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ2hFLE1BQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUV2QixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUFFO1lBQ3BDLE1BQU0sWUFBWSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNyQyxXQUFXLENBQUMsWUFBWSxDQUFDLEdBQUcsVUFBVSxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxXQUFXLENBQUM7SUFDdkIsQ0FBQztpSEF2RlEsZ0JBQWdCO3VFQUFoQixnQkFBZ0IsV0FBaEIsZ0JBQWdCLG1CQURKLE1BQU07O2lGQUNsQixnQkFBZ0I7Y0FENUIsVUFBVTtlQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U3lzdGVtQ29uZmlnU3RvcmV9IGZyb20gJy4uLy4uLy4uL3N0b3JlL3N5c3RlbS1jb25maWcvc3lzdGVtLWNvbmZpZy5zdG9yZSc7XG5pbXBvcnQge1N0cmluZ01hcH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3R5cGVzL3N0cmluZy1tYXAnO1xuXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBBY3Rpb25OYW1lTWFwcGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3lzdGVtQ29uZmlnOiBTeXN0ZW1Db25maWdTdG9yZSkge1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFB1YmxpYyBBcGlcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIE1hcCB0aGUgbGVnYWN5IG5hbWUgdG8gZnJvbnRlbmRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb24gdGhlIGFjdGlvbiBuYW1lXG4gICAgICogQHJldHVybnMge3N0cmluZ30gZnJvbnRlbmQgbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyB0b0Zyb250ZW5kKGFjdGlvbjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgbWFwID0gdGhpcy5nZXRMZWdhY3lUb0Zyb250ZW5kTWFwKCk7XG5cbiAgICAgICAgaWYgKCFtYXBbYWN0aW9uXSl7XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1hcFthY3Rpb25dO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1hcCB0aGUgZnJvbnRlbmQgbmFtZSB0byBsZWdhY3lcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb24gdGhlIGFjdGlvbiBuYW1lXG4gICAgICogQHJldHVybnMge3N0cmluZ30gZnJvbnRlbmQgbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyB0b0xlZ2FjeShhY3Rpb246IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IG1hcCA9IHRoaXMuZ2V0RnJvbnRlbmRUb0xlZ2FjeU1hcCgpO1xuXG4gICAgICAgIGlmICghbWFwW2FjdGlvbl0pe1xuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtYXBbYWN0aW9uXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBhY3Rpb24gaXMgdmFsaWRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb24gdGhlIGFjdGlvbiBuYW1lXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IGlzIHZhbGlkXG4gICAgICovXG4gICAgcHVibGljIGlzVmFsaWQoYWN0aW9uOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgbWFwID0gdGhpcy5nZXRGcm9udGVuZFRvTGVnYWN5TWFwKCk7XG4gICAgICAgIGxldCB2YWxpZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChtYXBbYWN0aW9uXSkge1xuICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbGlkO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogSW50ZXJuYWwgQVBJXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGxlZ2FjeSB0byBmcm9udGVuZCBtYXBcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt7fX0gbGVnYWN5IHRvIGZyb250ZW5kIG1hcFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRMZWdhY3lUb0Zyb250ZW5kTWFwKCk6IFN0cmluZ01hcCB7XG4gICAgICAgIHJldHVybiB0aGlzLnN5c3RlbUNvbmZpZy5nZXRDb25maWdWYWx1ZSgnYWN0aW9uX25hbWVfbWFwJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBmcm9udGVuZCB0byBsZWdhY3kgbWFwXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7e319IGZyb250ZW5kIHRvIGxlZ2FjeSBtYXBcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0RnJvbnRlbmRUb0xlZ2FjeU1hcCgpOiBTdHJpbmdNYXAge1xuICAgICAgICBjb25zdCBtYXAgPSB0aGlzLnN5c3RlbUNvbmZpZy5nZXRDb25maWdWYWx1ZSgnYWN0aW9uX25hbWVfbWFwJyk7XG4gICAgICAgIGNvbnN0IGludmVydGVkTWFwID0ge307XG5cbiAgICAgICAgT2JqZWN0LmtleXMobWFwKS5mb3JFYWNoKChsZWdhY3lOYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmcm9udGVuZE5hbWUgPSBtYXBbbGVnYWN5TmFtZV07XG4gICAgICAgICAgICBpbnZlcnRlZE1hcFtmcm9udGVuZE5hbWVdID0gbGVnYWN5TmFtZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGludmVydGVkTWFwO1xuICAgIH1cbn1cbiJdfQ==