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
/**
 * Deep clones an object
 *
 * @param {object} obj to clone
 * @returns {string} any
 */
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
/**
 * Check if all entries have been loaded and are ready to use
 *
 * @param entries
 * @returns boolean
 */
export const ready = (entries) => {
    let areReady = true;
    entries.every(entry => {
        if (!entry) {
            areReady = false;
            return false;
        }
        if (Array.isArray(entry) && entry.length <= 0) {
            areReady = false;
            return false;
        }
        if (typeof entry === 'object' && Object.keys(entry).length <= 0) {
            areReady = false;
            return false;
        }
        return true;
    });
    return areReady;
};
/**
 * Pad all values of an object
 * Singular digit numbers will be padded/prefixed with a 0
 * e.g. numbers 1-9 will be padded with a 0 in front to 01-09
 *
 * @param {object} obj to pad
 * @returns {object} any
 */
export const padObjectValues = (obj) => {
    Object.keys(obj).forEach(key => {
        obj[key] = String(obj[key]).padStart(2, '0');
    });
    return obj;
};
/**
 * @param {object} obj to be checked
 * @returns {boolean} true/false
 * @description Returns true, if the object is empty
 */
export const emptyObject = (obj) => (obj && (Object.keys(obj).length === 0));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0LXV0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbW1vbi91dGlscy9vYmplY3QtdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVIOzs7OztHQUtHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sU0FBUyxHQUFHLENBQUMsR0FBUSxFQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUU1RTs7Ozs7R0FLRztBQUNILE1BQU0sQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLE9BQTZDLEVBQVcsRUFBRTtJQUM1RSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFFcEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUVsQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDVCxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ2pCLE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFDRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUM1QyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ2pCLE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFFRCxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUM5RCxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ2pCLE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDLENBQUMsQ0FBQztJQUVILE9BQU8sUUFBUSxDQUFDO0FBQ3BCLENBQUMsQ0FBQztBQUVGOzs7Ozs7O0dBT0c7QUFDSCxNQUFNLENBQUMsTUFBTSxlQUFlLEdBQUcsQ0FBQyxHQUFRLEVBQU8sRUFBRTtJQUM3QyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUMzQixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDakQsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLEdBQUcsQ0FBQztBQUNmLENBQUMsQ0FBQztBQUVGOzs7O0dBSUc7QUFDSCxNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUcsQ0FBQyxHQUFRLEVBQVcsRUFBRSxDQUM3QyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbi8qKlxuICogRGVlcCBjbG9uZXMgYW4gb2JqZWN0XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9iaiB0byBjbG9uZVxuICogQHJldHVybnMge3N0cmluZ30gYW55XG4gKi9cbmV4cG9ydCBjb25zdCBkZWVwQ2xvbmUgPSAob2JqOiBhbnkpOiBhbnkgPT4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTtcblxuLyoqXG4gKiBDaGVjayBpZiBhbGwgZW50cmllcyBoYXZlIGJlZW4gbG9hZGVkIGFuZCBhcmUgcmVhZHkgdG8gdXNlXG4gKlxuICogQHBhcmFtIGVudHJpZXNcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZXhwb3J0IGNvbnN0IHJlYWR5ID0gKGVudHJpZXM6IChBcnJheTxhbnk+IHwgUmVjb3JkPHN0cmluZywgYW55PilbXSk6IGJvb2xlYW4gPT4ge1xuICAgIGxldCBhcmVSZWFkeSA9IHRydWU7XG5cbiAgICBlbnRyaWVzLmV2ZXJ5KGVudHJ5ID0+IHtcblxuICAgICAgICBpZiAoIWVudHJ5KSB7XG4gICAgICAgICAgICBhcmVSZWFkeSA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGVudHJ5KSAmJiBlbnRyeS5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgYXJlUmVhZHkgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgZW50cnkgPT09ICdvYmplY3QnICYmIE9iamVjdC5rZXlzKGVudHJ5KS5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgYXJlUmVhZHkgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGFyZVJlYWR5O1xufTtcblxuLyoqXG4gKiBQYWQgYWxsIHZhbHVlcyBvZiBhbiBvYmplY3RcbiAqIFNpbmd1bGFyIGRpZ2l0IG51bWJlcnMgd2lsbCBiZSBwYWRkZWQvcHJlZml4ZWQgd2l0aCBhIDBcbiAqIGUuZy4gbnVtYmVycyAxLTkgd2lsbCBiZSBwYWRkZWQgd2l0aCBhIDAgaW4gZnJvbnQgdG8gMDEtMDlcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIHRvIHBhZFxuICogQHJldHVybnMge29iamVjdH0gYW55XG4gKi9cbmV4cG9ydCBjb25zdCBwYWRPYmplY3RWYWx1ZXMgPSAob2JqOiBhbnkpOiBhbnkgPT4ge1xuICAgIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBvYmpba2V5XSA9IFN0cmluZyhvYmpba2V5XSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIHRvIGJlIGNoZWNrZWRcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlL2ZhbHNlXG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0cnVlLCBpZiB0aGUgb2JqZWN0IGlzIGVtcHR5XG4gKi9cbmV4cG9ydCBjb25zdCBlbXB0eU9iamVjdCA9IChvYmo6IGFueSk6IGJvb2xlYW4gPT5cbiAgICAob2JqICYmIChPYmplY3Qua2V5cyhvYmopLmxlbmd0aCA9PT0gMCkpO1xuXG5cbiJdfQ==