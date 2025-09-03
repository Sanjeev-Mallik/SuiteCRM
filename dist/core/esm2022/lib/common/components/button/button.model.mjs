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
export class Button {
    constructor(klass = null, onClick = null, label = null, icon = null, labelKey = null, titleKey = null, labelModule = null) {
        this.klass = klass;
        this.onClick = onClick;
        this.label = label;
        this.icon = icon;
        this.labelKey = labelKey;
        this.titleKey = titleKey;
        this.labelModule = labelModule;
    }
    static fromButton(button) {
        return new Button(button.klass, button.onClick, button.label, button.icon, button.labelKey, button.titleKey, button.labelModule);
    }
    static appendClasses(button, newClasses) {
        if (!button.klass) {
            button.klass = newClasses;
            return;
        }
        if (typeof button.klass === 'string') {
            button.klass = newClasses.join(' ') + ' ' + button.klass;
            return;
        }
        if (button.klass instanceof Array || button.klass instanceof Set) {
            button.klass = [
                ...button.klass,
                ...newClasses
            ];
            return;
        }
        if (button.klass instanceof Object) {
            const classes = {
                ...button.klass,
            };
            classes[newClasses.join(' ')] = true;
            button.klass = classes;
        }
    }
    addClasses(newClasses) {
        if (!this.klass) {
            this.klass = newClasses;
            return;
        }
        if (typeof this.klass === 'string') {
            this.klass = newClasses.join(' ') + ' ' + this.klass;
            return;
        }
        if (this.klass instanceof Array || this.klass instanceof Set) {
            this.klass = [
                ...this.klass,
                ...newClasses
            ];
            return;
        }
        if (this.klass instanceof Object) {
            const classes = {
                ...this.klass,
            };
            classes[newClasses.join(' ')] = true;
            this.klass = classes;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbW1vbi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24ubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQXFCSCxNQUFNLE9BQU8sTUFBTTtJQUVmLFlBQ1csUUFBa0UsSUFBSSxFQUN0RSxVQUEwQixJQUFJLEVBQzlCLFFBQWdCLElBQUksRUFDcEIsT0FBZSxJQUFJLEVBQ25CLFdBQW1CLElBQUksRUFDdkIsV0FBbUIsSUFBSSxFQUN2QixjQUFzQixJQUFJO1FBTjFCLFVBQUssR0FBTCxLQUFLLENBQWlFO1FBQ3RFLFlBQU8sR0FBUCxPQUFPLENBQXVCO1FBQzlCLFVBQUssR0FBTCxLQUFLLENBQWU7UUFDcEIsU0FBSSxHQUFKLElBQUksQ0FBZTtRQUNuQixhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLGFBQVEsR0FBUixRQUFRLENBQWU7UUFDdkIsZ0JBQVcsR0FBWCxXQUFXLENBQWU7SUFFckMsQ0FBQztJQUVNLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBdUI7UUFDNUMsT0FBTyxJQUFJLE1BQU0sQ0FDYixNQUFNLENBQUMsS0FBSyxFQUNaLE1BQU0sQ0FBQyxPQUFPLEVBQ2QsTUFBTSxDQUFDLEtBQUssRUFDWixNQUFNLENBQUMsSUFBSSxFQUNYLE1BQU0sQ0FBQyxRQUFRLEVBQ2YsTUFBTSxDQUFDLFFBQVEsRUFDZixNQUFNLENBQUMsV0FBVyxDQUNyQixDQUFDO0lBQ04sQ0FBQztJQUVNLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBdUIsRUFBRSxVQUFvQjtRQUVyRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2hCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO1lBQzFCLE9BQU87UUFDWCxDQUFDO1FBRUQsSUFBSSxPQUFPLE1BQU0sQ0FBQyxLQUFLLEtBQUssUUFBUSxFQUFFLENBQUM7WUFDbkMsTUFBTSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ3pELE9BQU87UUFDWCxDQUFDO1FBRUQsSUFBSSxNQUFNLENBQUMsS0FBSyxZQUFZLEtBQUssSUFBSSxNQUFNLENBQUMsS0FBSyxZQUFZLEdBQUcsRUFBRSxDQUFDO1lBQy9ELE1BQU0sQ0FBQyxLQUFLLEdBQUc7Z0JBQ1gsR0FBRyxNQUFNLENBQUMsS0FBSztnQkFDZixHQUFHLFVBQVU7YUFDaEIsQ0FBQztZQUVGLE9BQU87UUFDWCxDQUFDO1FBRUQsSUFBSSxNQUFNLENBQUMsS0FBSyxZQUFZLE1BQU0sRUFBRSxDQUFDO1lBQ2pDLE1BQU0sT0FBTyxHQUFHO2dCQUNaLEdBQUcsTUFBTSxDQUFDLEtBQUs7YUFDbEIsQ0FBQztZQUVGLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ3JDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQzNCLENBQUM7SUFDTCxDQUFDO0lBRU0sVUFBVSxDQUFDLFVBQW9CO1FBRWxDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQztZQUN4QixPQUFPO1FBQ1gsQ0FBQztRQUVELElBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFFBQVEsRUFBRSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNyRCxPQUFPO1FBQ1gsQ0FBQztRQUVELElBQUksSUFBSSxDQUFDLEtBQUssWUFBWSxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssWUFBWSxHQUFHLEVBQUUsQ0FBQztZQUMzRCxJQUFJLENBQUMsS0FBSyxHQUFHO2dCQUNULEdBQUcsSUFBSSxDQUFDLEtBQUs7Z0JBQ2IsR0FBRyxVQUFVO2FBQ2hCLENBQUM7WUFFRixPQUFPO1FBQ1gsQ0FBQztRQUVELElBQUksSUFBSSxDQUFDLEtBQUssWUFBWSxNQUFNLEVBQUUsQ0FBQztZQUMvQixNQUFNLE9BQU8sR0FBRztnQkFDWixHQUFHLElBQUksQ0FBQyxLQUFLO2FBQ2hCLENBQUM7WUFFRixPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUNyQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUN6QixDQUFDO0lBQ0wsQ0FBQztDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5leHBvcnQgZGVjbGFyZSB0eXBlIEJ1dHRvbkNhbGxiYWNrID0gKC4uLmFyZ3MpID0+IHZvaWQ7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnV0dG9uSW50ZXJmYWNlIHtcbiAgICBpZD86IHN0cmluZztcbiAgICBrbGFzcz86IHN0cmluZyB8IHN0cmluZ1tdIHwgU2V0PHN0cmluZz4gfCB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xuICAgIG9uQ2xpY2s/OiBCdXR0b25DYWxsYmFjaztcbiAgICBkZWJvdW5jZUNsaWNrPzogYm9vbGVhbjtcbiAgICBjbGlja0RlYm91bmNlVGltZT86IG51bWJlcjtcbiAgICBsYWJlbD86IHN0cmluZztcbiAgICBsYWJlbEtleT86IHN0cmluZztcbiAgICB0aXRsZUtleT86IHN0cmluZztcbiAgICB0aXRsZT86IHN0cmluZztcbiAgICBpY29uPzogc3RyaW5nO1xuICAgIGljb25LbGFzcz86IHN0cmluZztcbiAgICBsYWJlbE1vZHVsZT86IHN0cmluZztcbiAgICBzZWN0aW9uPzogc3RyaW5nO1xuICAgIGRpc2FibGVkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIEJ1dHRvbiBpbXBsZW1lbnRzIEJ1dHRvbkludGVyZmFjZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGtsYXNzOiBzdHJpbmcgfCBzdHJpbmdbXSB8IFNldDxzdHJpbmc+IHwgeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IG51bGwsXG4gICAgICAgIHB1YmxpYyBvbkNsaWNrOiBCdXR0b25DYWxsYmFjayA9IG51bGwsXG4gICAgICAgIHB1YmxpYyBsYWJlbDogc3RyaW5nID0gbnVsbCxcbiAgICAgICAgcHVibGljIGljb246IHN0cmluZyA9IG51bGwsXG4gICAgICAgIHB1YmxpYyBsYWJlbEtleTogc3RyaW5nID0gbnVsbCxcbiAgICAgICAgcHVibGljIHRpdGxlS2V5OiBzdHJpbmcgPSBudWxsLFxuICAgICAgICBwdWJsaWMgbGFiZWxNb2R1bGU6IHN0cmluZyA9IG51bGxcbiAgICApIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGZyb21CdXR0b24oYnV0dG9uOiBCdXR0b25JbnRlcmZhY2UpOiBCdXR0b24ge1xuICAgICAgICByZXR1cm4gbmV3IEJ1dHRvbihcbiAgICAgICAgICAgIGJ1dHRvbi5rbGFzcyxcbiAgICAgICAgICAgIGJ1dHRvbi5vbkNsaWNrLFxuICAgICAgICAgICAgYnV0dG9uLmxhYmVsLFxuICAgICAgICAgICAgYnV0dG9uLmljb24sXG4gICAgICAgICAgICBidXR0b24ubGFiZWxLZXksXG4gICAgICAgICAgICBidXR0b24udGl0bGVLZXksXG4gICAgICAgICAgICBidXR0b24ubGFiZWxNb2R1bGVcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFwcGVuZENsYXNzZXMoYnV0dG9uOiBCdXR0b25JbnRlcmZhY2UsIG5ld0NsYXNzZXM6IHN0cmluZ1tdKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKCFidXR0b24ua2xhc3MpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5rbGFzcyA9IG5ld0NsYXNzZXM7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGJ1dHRvbi5rbGFzcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5rbGFzcyA9IG5ld0NsYXNzZXMuam9pbignICcpICsgJyAnICsgYnV0dG9uLmtsYXNzO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJ1dHRvbi5rbGFzcyBpbnN0YW5jZW9mIEFycmF5IHx8IGJ1dHRvbi5rbGFzcyBpbnN0YW5jZW9mIFNldCkge1xuICAgICAgICAgICAgYnV0dG9uLmtsYXNzID0gW1xuICAgICAgICAgICAgICAgIC4uLmJ1dHRvbi5rbGFzcyxcbiAgICAgICAgICAgICAgICAuLi5uZXdDbGFzc2VzXG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYnV0dG9uLmtsYXNzIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgICAgICBjb25zdCBjbGFzc2VzID0ge1xuICAgICAgICAgICAgICAgIC4uLmJ1dHRvbi5rbGFzcyxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNsYXNzZXNbbmV3Q2xhc3Nlcy5qb2luKCcgJyldID0gdHJ1ZTtcbiAgICAgICAgICAgIGJ1dHRvbi5rbGFzcyA9IGNsYXNzZXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkQ2xhc3NlcyhuZXdDbGFzc2VzOiBzdHJpbmdbXSk6IHZvaWQge1xuXG4gICAgICAgIGlmICghdGhpcy5rbGFzcykge1xuICAgICAgICAgICAgdGhpcy5rbGFzcyA9IG5ld0NsYXNzZXM7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMua2xhc3MgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aGlzLmtsYXNzID0gbmV3Q2xhc3Nlcy5qb2luKCcgJykgKyAnICcgKyB0aGlzLmtsYXNzO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMua2xhc3MgaW5zdGFuY2VvZiBBcnJheSB8fCB0aGlzLmtsYXNzIGluc3RhbmNlb2YgU2V0KSB7XG4gICAgICAgICAgICB0aGlzLmtsYXNzID0gW1xuICAgICAgICAgICAgICAgIC4uLnRoaXMua2xhc3MsXG4gICAgICAgICAgICAgICAgLi4ubmV3Q2xhc3Nlc1xuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMua2xhc3MgaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsYXNzZXMgPSB7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5rbGFzcyxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNsYXNzZXNbbmV3Q2xhc3Nlcy5qb2luKCcgJyldID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMua2xhc3MgPSBjbGFzc2VzO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19