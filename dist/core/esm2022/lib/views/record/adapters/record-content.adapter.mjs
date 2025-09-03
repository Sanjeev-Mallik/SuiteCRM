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
import { combineLatestWith } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { RecordActionManager } from '../actions/record-action-manager.service';
import { LanguageStore } from '../../../store/language/language.store';
import { RecordViewStore } from '../store/record-view/record-view.store';
import { PanelLogicManager } from '../../../components/panel-logic/panel-logic.manager';
import { RecordValidationHandler } from "../../../services/record/validation/record-validation.handler";
import * as i0 from "@angular/core";
import * as i1 from "../store/record-view/record-view.store";
import * as i2 from "../../../store/metadata/metadata.store.service";
import * as i3 from "../../../store/language/language.store";
import * as i4 from "../actions/record-action-manager.service";
import * as i5 from "../../../components/panel-logic/panel-logic.manager";
export class RecordContentAdapter {
    constructor(store, metadata, language, actions, logicManager) {
        this.store = store;
        this.metadata = metadata;
        this.language = language;
        this.actions = actions;
        this.logicManager = logicManager;
        this.fieldSubs = [];
        this.recordValidationHandler = inject(RecordValidationHandler);
    }
    getEditAction() {
        const data = {
            store: this.store
        };
        const action = {
            key: 'edit'
        };
        this.actions.run(action, this.store.getMode(), data);
    }
    getDisplayConfig() {
        return this.metadata.recordViewMetadata$.pipe(combineLatestWith(this.store.mode$), map(([meta, mode]) => {
            const layout = this.getLayout(meta);
            const maxColumns = meta.templateMeta.maxColumns || 2;
            const tabDefs = meta.templateMeta.tabDefs;
            return {
                layout,
                mode,
                maxColumns,
                tabDefs
            };
        }));
    }
    getPanels() {
        return this.store.panels$;
    }
    getRecord() {
        return this.store.stagingRecord$.pipe(combineLatestWith(this.store.mode$), map(([record, mode]) => {
            if (mode === 'edit' || mode === 'create') {
                this.recordValidationHandler.initValidators(record);
            }
            else {
                this.recordValidationHandler.resetValidators(record);
            }
            if (record.formGroup) {
                record.formGroup.enable();
            }
            return record;
        }));
    }
    getLayout(recordMeta) {
        let layout = 'panels';
        if (recordMeta.templateMeta.useTabs) {
            layout = 'tabs';
        }
        return layout;
    }
    clean() {
        this.fieldSubs.forEach(sub => sub.unsubscribe());
    }
    static { this.ɵfac = function RecordContentAdapter_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RecordContentAdapter)(i0.ɵɵinject(i1.RecordViewStore), i0.ɵɵinject(i2.MetadataStore), i0.ɵɵinject(i3.LanguageStore), i0.ɵɵinject(i4.RecordActionManager), i0.ɵɵinject(i5.PanelLogicManager)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordContentAdapter, factory: RecordContentAdapter.ɵfac }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordContentAdapter, [{
        type: Injectable
    }], () => [{ type: i1.RecordViewStore }, { type: i2.MetadataStore }, { type: i3.LanguageStore }, { type: i4.RecordActionManager }, { type: i5.PanelLogicManager }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLWNvbnRlbnQuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi92aWV3cy9yZWNvcmQvYWRhcHRlcnMvcmVjb3JkLWNvbnRlbnQuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLGlCQUFpQixFQUEyQixNQUFNLE1BQU0sQ0FBQztBQUNqRSxPQUFPLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFLbkMsT0FBTyxFQUFDLGFBQWEsRUFBcUIsTUFBTSxnREFBZ0QsQ0FBQztBQUVqRyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSwwQ0FBMEMsQ0FBQztBQUU3RSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0NBQXdDLENBQUM7QUFDckUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHdDQUF3QyxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHFEQUFxRCxDQUFDO0FBQ3RGLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLCtEQUErRCxDQUFDOzs7Ozs7O0FBR3RHLE1BQU0sT0FBTyxvQkFBb0I7SUFNN0IsWUFDYyxLQUFzQixFQUN0QixRQUF1QixFQUN2QixRQUF1QixFQUN2QixPQUE0QixFQUM1QixZQUErQjtRQUovQixVQUFLLEdBQUwsS0FBSyxDQUFpQjtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLGFBQVEsR0FBUixRQUFRLENBQWU7UUFDdkIsWUFBTyxHQUFQLE9BQU8sQ0FBcUI7UUFDNUIsaUJBQVksR0FBWixZQUFZLENBQW1CO1FBUm5DLGNBQVMsR0FBbUIsRUFBRSxDQUFDO1FBVXJDLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxNQUFNLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQsYUFBYTtRQUNULE1BQU0sSUFBSSxHQUFxQjtZQUMzQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDcEIsQ0FBQztRQUVGLE1BQU0sTUFBTSxHQUFHO1lBQ1gsR0FBRyxFQUFFLE1BQU07U0FDSixDQUFDO1FBRVosSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELGdCQUFnQjtRQUVaLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQ3pDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQ25DLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBaUMsRUFBRSxFQUFFO1lBQ2pELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEMsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDO1lBQ3JELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDO1lBRTFDLE9BQU87Z0JBQ0gsTUFBTTtnQkFDTixJQUFJO2dCQUNKLFVBQVU7Z0JBQ1YsT0FBTzthQUNhLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQ0wsQ0FBQztJQUNOLENBQUM7SUFFRCxTQUFTO1FBQ0wsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztJQUM5QixDQUFDO0lBRUQsU0FBUztRQUNMLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUNqQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUNuQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQXFCLEVBQUUsRUFBRTtZQUN2QyxJQUFJLElBQUksS0FBSyxNQUFNLElBQUksSUFBSSxLQUFLLFFBQVEsRUFBRSxDQUFDO2dCQUN2QyxJQUFJLENBQUMsdUJBQXVCLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3hELENBQUM7aUJBQU0sQ0FBQztnQkFDSixJQUFJLENBQUMsdUJBQXVCLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3pELENBQUM7WUFFRCxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDbkIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUM5QixDQUFDO1lBQ0QsT0FBTyxNQUFNLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQ0wsQ0FBQztJQUNOLENBQUM7SUFFUyxTQUFTLENBQUMsVUFBOEI7UUFDOUMsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDO1FBQ3RCLElBQUksVUFBVSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNsQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3BCLENBQUM7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQsS0FBSztRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDckQsQ0FBQztxSEFoRlEsb0JBQW9CO3VFQUFwQixvQkFBb0IsV0FBcEIsb0JBQW9COztpRkFBcEIsb0JBQW9CO2NBRGhDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Y29tYmluZUxhdGVzdFdpdGgsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2luamVjdCwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge21hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtBY3Rpb259IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9hY3Rpb25zL2FjdGlvbi5tb2RlbCc7XG5pbXBvcnQge1ZpZXdNb2RlfSBmcm9tICcuLi8uLi8uLi9jb21tb24vdmlld3Mvdmlldy5tb2RlbCc7XG5pbXBvcnQge1JlY29yZH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3JlY29yZC9yZWNvcmQubW9kZWwnO1xuaW1wb3J0IHtQYW5lbH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL21ldGFkYXRhL21ldGFkYXRhLm1vZGVsJztcbmltcG9ydCB7TWV0YWRhdGFTdG9yZSwgUmVjb3JkVmlld01ldGFkYXRhfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9tZXRhZGF0YS9tZXRhZGF0YS5zdG9yZS5zZXJ2aWNlJztcbmltcG9ydCB7UmVjb3JkQ29udGVudENvbmZpZywgUmVjb3JkQ29udGVudERhdGFTb3VyY2V9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvcmVjb3JkLWNvbnRlbnQvcmVjb3JkLWNvbnRlbnQubW9kZWwnO1xuaW1wb3J0IHtSZWNvcmRBY3Rpb25NYW5hZ2VyfSBmcm9tICcuLi9hY3Rpb25zL3JlY29yZC1hY3Rpb24tbWFuYWdlci5zZXJ2aWNlJztcbmltcG9ydCB7UmVjb3JkQWN0aW9uRGF0YX0gZnJvbSAnLi4vYWN0aW9ucy9yZWNvcmQuYWN0aW9uJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZX0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtSZWNvcmRWaWV3U3RvcmV9IGZyb20gJy4uL3N0b3JlL3JlY29yZC12aWV3L3JlY29yZC12aWV3LnN0b3JlJztcbmltcG9ydCB7UGFuZWxMb2dpY01hbmFnZXJ9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvcGFuZWwtbG9naWMvcGFuZWwtbG9naWMubWFuYWdlcic7XG5pbXBvcnQge1JlY29yZFZhbGlkYXRpb25IYW5kbGVyfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvcmVjb3JkL3ZhbGlkYXRpb24vcmVjb3JkLXZhbGlkYXRpb24uaGFuZGxlclwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVjb3JkQ29udGVudEFkYXB0ZXIgaW1wbGVtZW50cyBSZWNvcmRDb250ZW50RGF0YVNvdXJjZSB7XG4gICAgaW5saW5lRWRpdDogdHJ1ZTtcblxuICAgIHByb3RlY3RlZCBmaWVsZFN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gICAgcHJvdGVjdGVkIHJlY29yZFZhbGlkYXRpb25IYW5kbGVyOiBSZWNvcmRWYWxpZGF0aW9uSGFuZGxlcjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgc3RvcmU6IFJlY29yZFZpZXdTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIG1ldGFkYXRhOiBNZXRhZGF0YVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBhY3Rpb25zOiBSZWNvcmRBY3Rpb25NYW5hZ2VyLFxuICAgICAgICBwcm90ZWN0ZWQgbG9naWNNYW5hZ2VyOiBQYW5lbExvZ2ljTWFuYWdlclxuICAgICkge1xuICAgICAgICB0aGlzLnJlY29yZFZhbGlkYXRpb25IYW5kbGVyID0gaW5qZWN0KFJlY29yZFZhbGlkYXRpb25IYW5kbGVyKTtcbiAgICB9XG5cbiAgICBnZXRFZGl0QWN0aW9uKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBkYXRhOiBSZWNvcmRBY3Rpb25EYXRhID0ge1xuICAgICAgICAgICAgc3RvcmU6IHRoaXMuc3RvcmVcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBhY3Rpb24gPSB7XG4gICAgICAgICAgICBrZXk6ICdlZGl0J1xuICAgICAgICB9IGFzIEFjdGlvbjtcblxuICAgICAgICB0aGlzLmFjdGlvbnMucnVuKGFjdGlvbiwgdGhpcy5zdG9yZS5nZXRNb2RlKCksIGRhdGEpO1xuICAgIH1cblxuICAgIGdldERpc3BsYXlDb25maWcoKTogT2JzZXJ2YWJsZTxSZWNvcmRDb250ZW50Q29uZmlnPiB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubWV0YWRhdGEucmVjb3JkVmlld01ldGFkYXRhJC5waXBlKFxuICAgICAgICAgICAgY29tYmluZUxhdGVzdFdpdGgodGhpcy5zdG9yZS5tb2RlJCksXG4gICAgICAgICAgICBtYXAoKFttZXRhLCBtb2RlXTogW1JlY29yZFZpZXdNZXRhZGF0YSwgVmlld01vZGVdKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGF5b3V0ID0gdGhpcy5nZXRMYXlvdXQobWV0YSk7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF4Q29sdW1ucyA9IG1ldGEudGVtcGxhdGVNZXRhLm1heENvbHVtbnMgfHwgMjtcbiAgICAgICAgICAgICAgICBjb25zdCB0YWJEZWZzID0gbWV0YS50ZW1wbGF0ZU1ldGEudGFiRGVmcztcblxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGxheW91dCxcbiAgICAgICAgICAgICAgICAgICAgbW9kZSxcbiAgICAgICAgICAgICAgICAgICAgbWF4Q29sdW1ucyxcbiAgICAgICAgICAgICAgICAgICAgdGFiRGVmc1xuICAgICAgICAgICAgICAgIH0gYXMgUmVjb3JkQ29udGVudENvbmZpZztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0UGFuZWxzKCk6IE9ic2VydmFibGU8UGFuZWxbXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zdG9yZS5wYW5lbHMkO1xuICAgIH1cblxuICAgIGdldFJlY29yZCgpOiBPYnNlcnZhYmxlPFJlY29yZD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zdG9yZS5zdGFnaW5nUmVjb3JkJC5waXBlKFxuICAgICAgICAgICAgY29tYmluZUxhdGVzdFdpdGgodGhpcy5zdG9yZS5tb2RlJCksXG4gICAgICAgICAgICBtYXAoKFtyZWNvcmQsIG1vZGVdOiBbUmVjb3JkLCBWaWV3TW9kZV0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobW9kZSA9PT0gJ2VkaXQnIHx8IG1vZGUgPT09ICdjcmVhdGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVjb3JkVmFsaWRhdGlvbkhhbmRsZXIuaW5pdFZhbGlkYXRvcnMocmVjb3JkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY29yZFZhbGlkYXRpb25IYW5kbGVyLnJlc2V0VmFsaWRhdG9ycyhyZWNvcmQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyZWNvcmQuZm9ybUdyb3VwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlY29yZC5mb3JtR3JvdXAuZW5hYmxlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZWNvcmQ7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRMYXlvdXQocmVjb3JkTWV0YTogUmVjb3JkVmlld01ldGFkYXRhKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IGxheW91dCA9ICdwYW5lbHMnO1xuICAgICAgICBpZiAocmVjb3JkTWV0YS50ZW1wbGF0ZU1ldGEudXNlVGFicykge1xuICAgICAgICAgICAgbGF5b3V0ID0gJ3RhYnMnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxheW91dDtcbiAgICB9XG5cbiAgICBjbGVhbigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5maWVsZFN1YnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cbn1cbiJdfQ==