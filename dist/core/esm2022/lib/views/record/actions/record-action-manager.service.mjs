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
import { RecordCancelAction } from './cancel/record-cancel.action';
import { RecordSaveAction } from './save/record-save.action';
import { RecordToggleWidgetsAction } from './toggle-widgets/record-widget-action.service';
import { RecordEditAction } from './edit/record-edit.action';
import { RecordCreateAction } from './create/record-create.action';
import { RecordSaveNewAction } from './save-new/record-save-new.action';
import { CancelCreateAction } from './cancel-create/cancel-create.action';
import { BaseActionManager } from '../../../services/actions/base-action-manager.service';
import { AsyncProcessRecordAction } from './async-process/async-process.service';
import { RecordSaveContinueAction } from "./save-continue/record-save-continue.action";
import * as i0 from "@angular/core";
import * as i1 from "./edit/record-edit.action";
import * as i2 from "./create/record-create.action";
import * as i3 from "./toggle-widgets/record-widget-action.service";
import * as i4 from "./cancel/record-cancel.action";
import * as i5 from "./cancel-create/cancel-create.action";
import * as i6 from "./save/record-save.action";
import * as i7 from "./save-new/record-save-new.action";
import * as i8 from "./save-continue/record-save-continue.action";
import * as i9 from "./async-process/async-process.service";
export class RecordActionManager extends BaseActionManager {
    constructor(edit, create, toggleWidgets, cancel, cancelCreate, save, saveNew, saveContinue, async) {
        super();
        this.edit = edit;
        this.create = create;
        this.toggleWidgets = toggleWidgets;
        this.cancel = cancel;
        this.cancelCreate = cancelCreate;
        this.save = save;
        this.saveNew = saveNew;
        this.saveContinue = saveContinue;
        this.async = async;
        edit.modes.forEach(mode => this.actions[mode][edit.key] = edit);
        create.modes.forEach(mode => this.actions[mode][create.key] = create);
        toggleWidgets.modes.forEach(mode => this.actions[mode][toggleWidgets.key] = toggleWidgets);
        cancel.modes.forEach(mode => this.actions[mode][cancel.key] = cancel);
        save.modes.forEach(mode => this.actions[mode][save.key] = save);
        saveNew.modes.forEach(mode => this.actions[mode][saveNew.key] = saveNew);
        saveContinue.modes.forEach(mode => this.actions[mode][saveContinue.key] = saveContinue);
        cancelCreate.modes.forEach(mode => this.actions[mode][cancelCreate.key] = cancelCreate);
        async.modes.forEach(mode => this.actions[mode][async.key] = async);
    }
    static { this.ɵfac = function RecordActionManager_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RecordActionManager)(i0.ɵɵinject(i1.RecordEditAction), i0.ɵɵinject(i2.RecordCreateAction), i0.ɵɵinject(i3.RecordToggleWidgetsAction), i0.ɵɵinject(i4.RecordCancelAction), i0.ɵɵinject(i5.CancelCreateAction), i0.ɵɵinject(i6.RecordSaveAction), i0.ɵɵinject(i7.RecordSaveNewAction), i0.ɵɵinject(i8.RecordSaveContinueAction), i0.ɵɵinject(i9.AsyncProcessRecordAction)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordActionManager, factory: RecordActionManager.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordActionManager, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.RecordEditAction }, { type: i2.RecordCreateAction }, { type: i3.RecordToggleWidgetsAction }, { type: i4.RecordCancelAction }, { type: i5.CancelCreateAction }, { type: i6.RecordSaveAction }, { type: i7.RecordSaveNewAction }, { type: i8.RecordSaveContinueAction }, { type: i9.AsyncProcessRecordAction }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLWFjdGlvbi1tYW5hZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvcmVjb3JkL2FjdGlvbnMvcmVjb3JkLWFjdGlvbi1tYW5hZ2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDeEYsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDeEUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDeEYsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDL0UsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sNkNBQTZDLENBQUM7Ozs7Ozs7Ozs7O0FBS3JGLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxpQkFBbUM7SUFFeEUsWUFDYyxJQUFzQixFQUN0QixNQUEwQixFQUMxQixhQUF3QyxFQUN4QyxNQUEwQixFQUMxQixZQUFnQyxFQUNoQyxJQUFzQixFQUN0QixPQUE0QixFQUM1QixZQUFzQyxFQUN0QyxLQUErQjtRQUV6QyxLQUFLLEVBQUUsQ0FBQztRQVZFLFNBQUksR0FBSixJQUFJLENBQWtCO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQW9CO1FBQzFCLGtCQUFhLEdBQWIsYUFBYSxDQUEyQjtRQUN4QyxXQUFNLEdBQU4sTUFBTSxDQUFvQjtRQUMxQixpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFDaEMsU0FBSSxHQUFKLElBQUksQ0FBa0I7UUFDdEIsWUFBTyxHQUFQLE9BQU8sQ0FBcUI7UUFDNUIsaUJBQVksR0FBWixZQUFZLENBQTBCO1FBQ3RDLFVBQUssR0FBTCxLQUFLLENBQTBCO1FBR3pDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDaEUsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUN0RSxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxDQUFDO1FBQzNGLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUNoRSxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDO1FBQ3pFLFlBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsWUFBWSxDQUFDLENBQUM7UUFDeEYsWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQztRQUN4RixLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7b0hBdkJRLG1CQUFtQjt1RUFBbkIsbUJBQW1CLFdBQW5CLG1CQUFtQixtQkFGaEIsTUFBTTs7aUZBRVQsbUJBQW1CO2NBSC9CLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UmVjb3JkQWN0aW9uRGF0YX0gZnJvbSAnLi9yZWNvcmQuYWN0aW9uJztcbmltcG9ydCB7UmVjb3JkQ2FuY2VsQWN0aW9ufSBmcm9tICcuL2NhbmNlbC9yZWNvcmQtY2FuY2VsLmFjdGlvbic7XG5pbXBvcnQge1JlY29yZFNhdmVBY3Rpb259IGZyb20gJy4vc2F2ZS9yZWNvcmQtc2F2ZS5hY3Rpb24nO1xuaW1wb3J0IHtSZWNvcmRUb2dnbGVXaWRnZXRzQWN0aW9ufSBmcm9tICcuL3RvZ2dsZS13aWRnZXRzL3JlY29yZC13aWRnZXQtYWN0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHtSZWNvcmRFZGl0QWN0aW9ufSBmcm9tICcuL2VkaXQvcmVjb3JkLWVkaXQuYWN0aW9uJztcbmltcG9ydCB7UmVjb3JkQ3JlYXRlQWN0aW9ufSBmcm9tICcuL2NyZWF0ZS9yZWNvcmQtY3JlYXRlLmFjdGlvbic7XG5pbXBvcnQge1JlY29yZFNhdmVOZXdBY3Rpb259IGZyb20gJy4vc2F2ZS1uZXcvcmVjb3JkLXNhdmUtbmV3LmFjdGlvbic7XG5pbXBvcnQge0NhbmNlbENyZWF0ZUFjdGlvbn0gZnJvbSAnLi9jYW5jZWwtY3JlYXRlL2NhbmNlbC1jcmVhdGUuYWN0aW9uJztcbmltcG9ydCB7QmFzZUFjdGlvbk1hbmFnZXJ9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2FjdGlvbnMvYmFzZS1hY3Rpb24tbWFuYWdlci5zZXJ2aWNlJztcbmltcG9ydCB7QXN5bmNQcm9jZXNzUmVjb3JkQWN0aW9ufSBmcm9tICcuL2FzeW5jLXByb2Nlc3MvYXN5bmMtcHJvY2Vzcy5zZXJ2aWNlJztcbmltcG9ydCB7UmVjb3JkU2F2ZUNvbnRpbnVlQWN0aW9ufSBmcm9tIFwiLi9zYXZlLWNvbnRpbnVlL3JlY29yZC1zYXZlLWNvbnRpbnVlLmFjdGlvblwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBSZWNvcmRBY3Rpb25NYW5hZ2VyIGV4dGVuZHMgQmFzZUFjdGlvbk1hbmFnZXI8UmVjb3JkQWN0aW9uRGF0YT4ge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBlZGl0OiBSZWNvcmRFZGl0QWN0aW9uLFxuICAgICAgICBwcm90ZWN0ZWQgY3JlYXRlOiBSZWNvcmRDcmVhdGVBY3Rpb24sXG4gICAgICAgIHByb3RlY3RlZCB0b2dnbGVXaWRnZXRzOiBSZWNvcmRUb2dnbGVXaWRnZXRzQWN0aW9uLFxuICAgICAgICBwcm90ZWN0ZWQgY2FuY2VsOiBSZWNvcmRDYW5jZWxBY3Rpb24sXG4gICAgICAgIHByb3RlY3RlZCBjYW5jZWxDcmVhdGU6IENhbmNlbENyZWF0ZUFjdGlvbixcbiAgICAgICAgcHJvdGVjdGVkIHNhdmU6IFJlY29yZFNhdmVBY3Rpb24sXG4gICAgICAgIHByb3RlY3RlZCBzYXZlTmV3OiBSZWNvcmRTYXZlTmV3QWN0aW9uLFxuICAgICAgICBwcm90ZWN0ZWQgc2F2ZUNvbnRpbnVlOiBSZWNvcmRTYXZlQ29udGludWVBY3Rpb24sXG4gICAgICAgIHByb3RlY3RlZCBhc3luYzogQXN5bmNQcm9jZXNzUmVjb3JkQWN0aW9uLFxuICAgICkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBlZGl0Lm1vZGVzLmZvckVhY2gobW9kZSA9PiB0aGlzLmFjdGlvbnNbbW9kZV1bZWRpdC5rZXldID0gZWRpdCk7XG4gICAgICAgIGNyZWF0ZS5tb2Rlcy5mb3JFYWNoKG1vZGUgPT4gdGhpcy5hY3Rpb25zW21vZGVdW2NyZWF0ZS5rZXldID0gY3JlYXRlKTtcbiAgICAgICAgdG9nZ2xlV2lkZ2V0cy5tb2Rlcy5mb3JFYWNoKG1vZGUgPT4gdGhpcy5hY3Rpb25zW21vZGVdW3RvZ2dsZVdpZGdldHMua2V5XSA9IHRvZ2dsZVdpZGdldHMpO1xuICAgICAgICBjYW5jZWwubW9kZXMuZm9yRWFjaChtb2RlID0+IHRoaXMuYWN0aW9uc1ttb2RlXVtjYW5jZWwua2V5XSA9IGNhbmNlbCk7XG4gICAgICAgIHNhdmUubW9kZXMuZm9yRWFjaChtb2RlID0+IHRoaXMuYWN0aW9uc1ttb2RlXVtzYXZlLmtleV0gPSBzYXZlKTtcbiAgICAgICAgc2F2ZU5ldy5tb2Rlcy5mb3JFYWNoKG1vZGUgPT4gdGhpcy5hY3Rpb25zW21vZGVdW3NhdmVOZXcua2V5XSA9IHNhdmVOZXcpO1xuICAgICAgICBzYXZlQ29udGludWUubW9kZXMuZm9yRWFjaChtb2RlID0+IHRoaXMuYWN0aW9uc1ttb2RlXVtzYXZlQ29udGludWUua2V5XSA9IHNhdmVDb250aW51ZSk7XG4gICAgICAgIGNhbmNlbENyZWF0ZS5tb2Rlcy5mb3JFYWNoKG1vZGUgPT4gdGhpcy5hY3Rpb25zW21vZGVdW2NhbmNlbENyZWF0ZS5rZXldID0gY2FuY2VsQ3JlYXRlKTtcbiAgICAgICAgYXN5bmMubW9kZXMuZm9yRWFjaChtb2RlID0+IHRoaXMuYWN0aW9uc1ttb2RlXVthc3luYy5rZXldID0gYXN5bmMpO1xuICAgIH1cbn1cbiJdfQ==