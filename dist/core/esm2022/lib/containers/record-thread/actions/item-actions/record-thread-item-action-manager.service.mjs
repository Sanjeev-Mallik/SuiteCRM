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
import { BaseActionManager } from '../../../../services/actions/base-action-manager.service';
import { AsyncProcessRecordThreadItemAction } from './async-process/async-process.service';
import { RecordThreadItemCancelAction } from './cancel/record-cancel.action';
import { RecordThreadItemEditAction } from './edit/record-edit.action';
import { RecordThreadItemSaveAction } from './save/record-save.action';
import * as i0 from "@angular/core";
import * as i1 from "./async-process/async-process.service";
import * as i2 from "./cancel/record-cancel.action";
import * as i3 from "./edit/record-edit.action";
import * as i4 from "./save/record-save.action";
export class RecordThreadItemActionManager extends BaseActionManager {
    constructor(async, cancel, edit, save) {
        super();
        this.async = async;
        this.cancel = cancel;
        this.edit = edit;
        this.save = save;
        async.modes.forEach(mode => this.actions[mode][async.key] = async);
        edit.modes.forEach(mode => this.actions[mode][edit.key] = edit);
        save.modes.forEach(mode => this.actions[mode][save.key] = save);
        cancel.modes.forEach(mode => this.actions[mode][cancel.key] = cancel);
    }
    static { this.ɵfac = function RecordThreadItemActionManager_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RecordThreadItemActionManager)(i0.ɵɵinject(i1.AsyncProcessRecordThreadItemAction), i0.ɵɵinject(i2.RecordThreadItemCancelAction), i0.ɵɵinject(i3.RecordThreadItemEditAction), i0.ɵɵinject(i4.RecordThreadItemSaveAction)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordThreadItemActionManager, factory: RecordThreadItemActionManager.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordThreadItemActionManager, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.AsyncProcessRecordThreadItemAction }, { type: i2.RecordThreadItemCancelAction }, { type: i3.RecordThreadItemEditAction }, { type: i4.RecordThreadItemSaveAction }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLXRocmVhZC1pdGVtLWFjdGlvbi1tYW5hZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9yZWNvcmQtdGhyZWFkL2FjdGlvbnMvaXRlbS1hY3Rpb25zL3JlY29yZC10aHJlYWQtaXRlbS1hY3Rpb24tbWFuYWdlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDBEQUEwRCxDQUFDO0FBQzNGLE9BQU8sRUFBQyxrQ0FBa0MsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBRXpGLE9BQU8sRUFBQyw0QkFBNEIsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBQzNFLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3JFLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLDJCQUEyQixDQUFDOzs7Ozs7QUFLckUsTUFBTSxPQUFPLDZCQUE4QixTQUFRLGlCQUE2QztJQUU1RixZQUNjLEtBQXlDLEVBQ3pDLE1BQW9DLEVBQ3BDLElBQWdDLEVBQ2hDLElBQWdDO1FBRTFDLEtBQUssRUFBRSxDQUFDO1FBTEUsVUFBSyxHQUFMLEtBQUssQ0FBb0M7UUFDekMsV0FBTSxHQUFOLE1BQU0sQ0FBOEI7UUFDcEMsU0FBSSxHQUFKLElBQUksQ0FBNEI7UUFDaEMsU0FBSSxHQUFKLElBQUksQ0FBNEI7UUFHMUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDaEUsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUMxRSxDQUFDOzhIQWJRLDZCQUE2Qjt1RUFBN0IsNkJBQTZCLFdBQTdCLDZCQUE2QixtQkFGMUIsTUFBTTs7aUZBRVQsNkJBQTZCO2NBSHpDLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmFzZUFjdGlvbk1hbmFnZXJ9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL2FjdGlvbnMvYmFzZS1hY3Rpb24tbWFuYWdlci5zZXJ2aWNlJztcbmltcG9ydCB7QXN5bmNQcm9jZXNzUmVjb3JkVGhyZWFkSXRlbUFjdGlvbn0gZnJvbSAnLi9hc3luYy1wcm9jZXNzL2FzeW5jLXByb2Nlc3Muc2VydmljZSc7XG5pbXBvcnQge1JlY29yZFRocmVhZEl0ZW1BY3Rpb25EYXRhfSBmcm9tICcuL3JlY29yZC10aHJlYWQtaXRlbS5hY3Rpb24nO1xuaW1wb3J0IHtSZWNvcmRUaHJlYWRJdGVtQ2FuY2VsQWN0aW9ufSBmcm9tICcuL2NhbmNlbC9yZWNvcmQtY2FuY2VsLmFjdGlvbic7XG5pbXBvcnQge1JlY29yZFRocmVhZEl0ZW1FZGl0QWN0aW9ufSBmcm9tICcuL2VkaXQvcmVjb3JkLWVkaXQuYWN0aW9uJztcbmltcG9ydCB7UmVjb3JkVGhyZWFkSXRlbVNhdmVBY3Rpb259IGZyb20gJy4vc2F2ZS9yZWNvcmQtc2F2ZS5hY3Rpb24nO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBSZWNvcmRUaHJlYWRJdGVtQWN0aW9uTWFuYWdlciBleHRlbmRzIEJhc2VBY3Rpb25NYW5hZ2VyPFJlY29yZFRocmVhZEl0ZW1BY3Rpb25EYXRhPiB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGFzeW5jOiBBc3luY1Byb2Nlc3NSZWNvcmRUaHJlYWRJdGVtQWN0aW9uLFxuICAgICAgICBwcm90ZWN0ZWQgY2FuY2VsOiBSZWNvcmRUaHJlYWRJdGVtQ2FuY2VsQWN0aW9uLFxuICAgICAgICBwcm90ZWN0ZWQgZWRpdDogUmVjb3JkVGhyZWFkSXRlbUVkaXRBY3Rpb24sXG4gICAgICAgIHByb3RlY3RlZCBzYXZlOiBSZWNvcmRUaHJlYWRJdGVtU2F2ZUFjdGlvbixcbiAgICApIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgYXN5bmMubW9kZXMuZm9yRWFjaChtb2RlID0+IHRoaXMuYWN0aW9uc1ttb2RlXVthc3luYy5rZXldID0gYXN5bmMpO1xuICAgICAgICBlZGl0Lm1vZGVzLmZvckVhY2gobW9kZSA9PiB0aGlzLmFjdGlvbnNbbW9kZV1bZWRpdC5rZXldID0gZWRpdCk7XG4gICAgICAgIHNhdmUubW9kZXMuZm9yRWFjaChtb2RlID0+IHRoaXMuYWN0aW9uc1ttb2RlXVtzYXZlLmtleV0gPSBzYXZlKTtcbiAgICAgICAgY2FuY2VsLm1vZGVzLmZvckVhY2gobW9kZSA9PiB0aGlzLmFjdGlvbnNbbW9kZV1bY2FuY2VsLmtleV0gPSBjYW5jZWwpO1xuICAgIH1cbn1cbiJdfQ==