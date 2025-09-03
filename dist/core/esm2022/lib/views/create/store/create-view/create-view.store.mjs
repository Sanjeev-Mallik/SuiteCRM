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
import { of } from 'rxjs';
import { catchError, finalize, map, shareReplay, tap } from 'rxjs/operators';
import { StatisticsBatch } from '../../../../store/statistics/statistics-batch.service';
import { RecordViewStore } from '../../../record/store/record-view/record-view.store';
import { RecordFetchGQL } from '../../../../store/record/graphql/api.record.get';
import { RecordSaveGQL } from '../../../../store/record/graphql/api.record.save';
import { AppStateStore } from '../../../../store/app-state/app-state.store';
import { LanguageStore } from '../../../../store/language/language.store';
import { NavigationStore } from '../../../../store/navigation/navigation.store';
import { ModuleNavigation } from '../../../../services/navigation/module-navigation/module-navigation.service';
import { MetadataStore } from '../../../../store/metadata/metadata.store.service';
import { RecordManager } from '../../../../services/record/record.manager';
import { LocalStorageService } from '../../../../services/local-storage/local-storage.service';
import { SubpanelStoreFactory } from '../../../../containers/subpanel/store/subpanel/subpanel.store.factory';
import { AuthService } from '../../../../services/auth/auth.service';
import { MessageService } from '../../../../services/message/message.service';
import { RecordStoreFactory } from '../../../../store/record/record.store.factory';
import { UserPreferenceStore } from '../../../../store/user-preference/user-preference.store';
import { PanelLogicManager } from '../../../../components/panel-logic/panel-logic.manager';
import { RecordConvertService } from "../../../../services/record/record-convert.service";
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/record/graphql/api.record.get";
import * as i2 from "../../../../store/record/graphql/api.record.save";
import * as i3 from "../../../../store/app-state/app-state.store";
import * as i4 from "../../../../store/language/language.store";
import * as i5 from "../../../../store/navigation/navigation.store";
import * as i6 from "../../../../services/navigation/module-navigation/module-navigation.service";
import * as i7 from "../../../../store/metadata/metadata.store.service";
import * as i8 from "../../../../services/local-storage/local-storage.service";
import * as i9 from "../../../../services/message/message.service";
import * as i10 from "../../../../containers/subpanel/store/subpanel/subpanel.store.factory";
import * as i11 from "../../../../services/record/record.manager";
import * as i12 from "../../../../store/statistics/statistics-batch.service";
import * as i13 from "../../../../services/auth/auth.service";
import * as i14 from "../../../../store/record/record.store.factory";
import * as i15 from "../../../../store/user-preference/user-preference.store";
import * as i16 from "../../../../components/panel-logic/panel-logic.manager";
import * as i17 from "../../../../services/record/record-convert.service";
export class CreateViewStore extends RecordViewStore {
    constructor(recordFetchGQL, recordSaveGQL, appStateStore, languageStore, navigationStore, moduleNavigation, metadataStore, localStorage, message, subpanelFactory, recordManager, statisticsBatch, auth, recordStoreFactory, preferences, panelLogicManager, recordConvertService) {
        super(recordFetchGQL, recordSaveGQL, appStateStore, languageStore, navigationStore, moduleNavigation, metadataStore, localStorage, message, subpanelFactory, recordManager, statisticsBatch, recordStoreFactory, preferences, panelLogicManager, recordConvertService);
        this.recordFetchGQL = recordFetchGQL;
        this.recordSaveGQL = recordSaveGQL;
        this.appStateStore = appStateStore;
        this.languageStore = languageStore;
        this.navigationStore = navigationStore;
        this.moduleNavigation = moduleNavigation;
        this.metadataStore = metadataStore;
        this.localStorage = localStorage;
        this.message = message;
        this.subpanelFactory = subpanelFactory;
        this.recordManager = recordManager;
        this.statisticsBatch = statisticsBatch;
        this.auth = auth;
        this.recordStoreFactory = recordStoreFactory;
        this.preferences = preferences;
        this.panelLogicManager = panelLogicManager;
        this.recordConvertService = recordConvertService;
    }
    /**
     * Initial record load if not cached and update state.
     * Returns observable to be used in resolver if needed
     *
     * @param {string} module to use
     * @param {string} recordID to use
     * @param {string} mode to use
     * @param {object} params to set
     * @returns {object} Observable<any>
     */
    init(module, recordID, mode = 'detail', params = {}) {
        this.internalState.module = module;
        this.internalState.recordID = recordID;
        this.setMode(mode);
        this.parseParams(params);
        this.calculateShowWidgets();
        this.showTopWidget = false;
        this.showBottomWidgets = false;
        this.showSubpanels = false;
        const isDuplicate = this.params.isDuplicate ?? false;
        const isConvert = this.params.isConvert ?? false;
        const isOriginalId = this.params.originalId ?? false;
        const convertModule = this.params.convertModule ?? '';
        if (!isDuplicate && !isConvert && !isOriginalId) {
            this.initRecord(params);
        }
        if (isConvert && isOriginalId && convertModule) {
            return this.duplicateOnModule();
        }
        return this.load();
    }
    save() {
        this.appStateStore.updateLoading(`${this.internalState.module}-record-save-new`, true);
        return this.recordStore.save().pipe(catchError(() => {
            this.message.addDangerMessageByKey('LBL_ERROR_SAVING');
            return of({});
        }), finalize(() => {
            this.setMode('detail');
            this.appStateStore.updateLoading(`${this.internalState.module}-record-save-new`, false);
        }));
    }
    /**
     * Init record using params
     *
     * @param {object} params queryParams
     */
    initRecord(params = {}) {
        const user = this.auth.getCurrentUser();
        const blankRecord = {
            id: '',
            type: '',
            module: this.internalState.module,
            /* eslint-disable camelcase,@typescript-eslint/camelcase */
            attributes: {
                assigned_user_id: user.id,
                assigned_user_name: {
                    id: user.id,
                    user_name: user.userName
                },
                relate_to: params?.return_relationship,
                relate_id: params?.parent_id
            }
            /* eslint-enable camelcase,@typescript-eslint/camelcase */
        };
        this.recordManager.injectParamFields(params, blankRecord, this.getVardefs());
        this.recordStore.init(blankRecord, true);
    }
    /**
     * Load / reload record using current pagination and criteria
     *
     * @returns {object} Observable<RecordViewState>
     */
    load() {
        if ((this.params.isDuplicate ?? false) && (this.params.originalId ?? false)) {
            this.updateState({
                ...this.internalState,
                loading: true
            });
            return this.recordStore.retrieveRecord(this.internalState.module, this.params.originalId, false).pipe(tap((data) => {
                data.id = '';
                data.attributes.id = '';
                // eslint-disable-next-line camelcase,@typescript-eslint/camelcase
                data.attributes.date_entered = '';
                this.recordManager.injectParamFields(this.params, data, this.getVardefs());
                this.recordStore.setRecord(data);
                this.updateState({
                    ...this.internalState,
                    module: data.module,
                    loading: false
                });
            }));
        }
        return of(this.recordStore.getBaseRecord()).pipe(shareReplay());
    }
    duplicateOnModule() {
        this.initRecord();
        const newRecord = this.getBaseRecord();
        const moduleMetadata = this.metadataStore.getModuleMeta(this.params.convertModule);
        const viewDefinitions$ = this.recordConvertService.getViewFieldsObservable(moduleMetadata);
        const prevModuleRecordStore = this.recordStoreFactory.create(viewDefinitions$);
        const prevRecord = prevModuleRecordStore.retrieveRecord(this.params.convertModule, this.params.originalId, false).pipe(map((record) => {
            return this.recordConvertService.duplicateOnModule(record, newRecord, this.getVardefs(), moduleMetadata);
        }), tap((record) => {
            this.recordStore.setRecord(record);
            this.updateState({
                ...this.internalState,
                module: this.internalState.module,
                loading: false
            });
        }));
        return prevRecord;
    }
    /**
     * Calculate if widgets are to display
     */
    calculateShowWidgets() {
        const show = false;
        this.showSidebarWidgets = show;
        this.widgets = show;
    }
    static { this.ɵfac = function CreateViewStore_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CreateViewStore)(i0.ɵɵinject(i1.RecordFetchGQL), i0.ɵɵinject(i2.RecordSaveGQL), i0.ɵɵinject(i3.AppStateStore), i0.ɵɵinject(i4.LanguageStore), i0.ɵɵinject(i5.NavigationStore), i0.ɵɵinject(i6.ModuleNavigation), i0.ɵɵinject(i7.MetadataStore), i0.ɵɵinject(i8.LocalStorageService), i0.ɵɵinject(i9.MessageService), i0.ɵɵinject(i10.SubpanelStoreFactory), i0.ɵɵinject(i11.RecordManager), i0.ɵɵinject(i12.StatisticsBatch), i0.ɵɵinject(i13.AuthService), i0.ɵɵinject(i14.RecordStoreFactory), i0.ɵɵinject(i15.UserPreferenceStore), i0.ɵɵinject(i16.PanelLogicManager), i0.ɵɵinject(i17.RecordConvertService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CreateViewStore, factory: CreateViewStore.ɵfac }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CreateViewStore, [{
        type: Injectable
    }], () => [{ type: i1.RecordFetchGQL }, { type: i2.RecordSaveGQL }, { type: i3.AppStateStore }, { type: i4.LanguageStore }, { type: i5.NavigationStore }, { type: i6.ModuleNavigation }, { type: i7.MetadataStore }, { type: i8.LocalStorageService }, { type: i9.MessageService }, { type: i10.SubpanelStoreFactory }, { type: i11.RecordManager }, { type: i12.StatisticsBatch }, { type: i13.AuthService }, { type: i14.RecordStoreFactory }, { type: i15.UserPreferenceStore }, { type: i16.PanelLogicManager }, { type: i17.RecordConvertService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXZpZXcuc3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvY3JlYXRlL3N0b3JlL2NyZWF0ZS12aWV3L2NyZWF0ZS12aWV3LnN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBYSxFQUFFLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDcEMsT0FBTyxFQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzRSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDdEYsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHFEQUFxRCxDQUFDO0FBQ3BGLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUMvRSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0RBQWtELENBQUM7QUFDL0UsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQzFFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUN4RSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDOUUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNkVBQTZFLENBQUM7QUFDN0csT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLG1EQUFtRCxDQUFDO0FBQ2hGLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSw0Q0FBNEMsQ0FBQztBQUN6RSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSwwREFBMEQsQ0FBQztBQUM3RixPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFB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LGNBQWMsQ0FDbkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUN0QixLQUFLLENBQ1IsQ0FBQyxJQUFJLENBQ0YsR0FBRyxDQUFDLENBQUMsTUFBYyxFQUFFLEVBQUU7WUFDbkIsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUUsY0FBYyxDQUFDLENBQUE7UUFDNUcsQ0FBQyxDQUFDLEVBQ0YsR0FBRyxDQUFDLENBQUMsTUFBYyxFQUFFLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLFdBQVcsQ0FBQztnQkFDYixHQUFHLElBQUksQ0FBQyxhQUFhO2dCQUNyQixNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNO2dCQUNqQyxPQUFPLEVBQUUsS0FBSzthQUNqQixDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FDTCxDQUFDO1FBRUYsT0FBTyxVQUFVLENBQUM7SUFDdEIsQ0FBQztJQUVEOztPQUVHO0lBQ08sb0JBQW9CO1FBQzFCLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1FBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7Z0hBOUxRLGVBQWU7dUVBQWYsZUFBZSxXQUFmLGVBQWU7O2lGQUFmLGVBQWU7Y0FEM0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgb2Z9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtjYXRjaEVycm9yLCBmaW5hbGl6ZSwgbWFwLCBzaGFyZVJlcGxheSwgdGFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1BhcmFtc30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7U3RhdGlzdGljc0JhdGNofSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9zdGF0aXN0aWNzL3N0YXRpc3RpY3MtYmF0Y2guc2VydmljZSc7XG5pbXBvcnQge1JlY29yZFZpZXdTdG9yZX0gZnJvbSAnLi4vLi4vLi4vcmVjb3JkL3N0b3JlL3JlY29yZC12aWV3L3JlY29yZC12aWV3LnN0b3JlJztcbmltcG9ydCB7UmVjb3JkRmV0Y2hHUUx9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3JlY29yZC9ncmFwaHFsL2FwaS5yZWNvcmQuZ2V0JztcbmltcG9ydCB7UmVjb3JkU2F2ZUdRTH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvcmVjb3JkL2dyYXBocWwvYXBpLnJlY29yZC5zYXZlJztcbmltcG9ydCB7QXBwU3RhdGVTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvYXBwLXN0YXRlL2FwcC1zdGF0ZS5zdG9yZSc7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7TmF2aWdhdGlvblN0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9uYXZpZ2F0aW9uL25hdmlnYXRpb24uc3RvcmUnO1xuaW1wb3J0IHtNb2R1bGVOYXZpZ2F0aW9ufSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL21vZHVsZS1uYXZpZ2F0aW9uL21vZHVsZS1uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHtNZXRhZGF0YVN0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9tZXRhZGF0YS9tZXRhZGF0YS5zdG9yZS5zZXJ2aWNlJztcbmltcG9ydCB7UmVjb3JkTWFuYWdlcn0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvcmVjb3JkL3JlY29yZC5tYW5hZ2VyJztcbmltcG9ydCB7TG9jYWxTdG9yYWdlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbG9jYWwtc3RvcmFnZS9sb2NhbC1zdG9yYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHtTdWJwYW5lbFN0b3JlRmFjdG9yeX0gZnJvbSAnLi4vLi4vLi4vLi4vY29udGFpbmVycy9zdWJwYW5lbC9zdG9yZS9zdWJwYW5lbC9zdWJwYW5lbC5zdG9yZS5mYWN0b3J5JztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL2F1dGgvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL21lc3NhZ2UvbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7UmVjb3JkfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vcmVjb3JkL3JlY29yZC5tb2RlbCc7XG5pbXBvcnQge1ZpZXdNb2RlfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vdmlld3Mvdmlldy5tb2RlbCc7XG5pbXBvcnQge1JlY29yZFN0b3JlRmFjdG9yeX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvcmVjb3JkL3JlY29yZC5zdG9yZS5mYWN0b3J5JztcbmltcG9ydCB7VXNlclByZWZlcmVuY2VTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvdXNlci1wcmVmZXJlbmNlL3VzZXItcHJlZmVyZW5jZS5zdG9yZSc7XG5pbXBvcnQge1BhbmVsTG9naWNNYW5hZ2VyfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BhbmVsLWxvZ2ljL3BhbmVsLWxvZ2ljLm1hbmFnZXInO1xuaW1wb3J0IHtSZWNvcmRDb252ZXJ0U2VydmljZX0gZnJvbSBcIi4uLy4uLy4uLy4uL3NlcnZpY2VzL3JlY29yZC9yZWNvcmQtY29udmVydC5zZXJ2aWNlXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDcmVhdGVWaWV3U3RvcmUgZXh0ZW5kcyBSZWNvcmRWaWV3U3RvcmUge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCByZWNvcmRGZXRjaEdRTDogUmVjb3JkRmV0Y2hHUUwsXG4gICAgICAgIHByb3RlY3RlZCByZWNvcmRTYXZlR1FMOiBSZWNvcmRTYXZlR1FMLFxuICAgICAgICBwcm90ZWN0ZWQgYXBwU3RhdGVTdG9yZTogQXBwU3RhdGVTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGxhbmd1YWdlU3RvcmU6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBuYXZpZ2F0aW9uU3RvcmU6IE5hdmlnYXRpb25TdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIG1vZHVsZU5hdmlnYXRpb246IE1vZHVsZU5hdmlnYXRpb24sXG4gICAgICAgIHByb3RlY3RlZCBtZXRhZGF0YVN0b3JlOiBNZXRhZGF0YVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbG9jYWxTdG9yYWdlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgbWVzc2FnZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBzdWJwYW5lbEZhY3Rvcnk6IFN1YnBhbmVsU3RvcmVGYWN0b3J5LFxuICAgICAgICBwcm90ZWN0ZWQgcmVjb3JkTWFuYWdlcjogUmVjb3JkTWFuYWdlcixcbiAgICAgICAgcHJvdGVjdGVkIHN0YXRpc3RpY3NCYXRjaDogU3RhdGlzdGljc0JhdGNoLFxuICAgICAgICBwcm90ZWN0ZWQgYXV0aDogQXV0aFNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCByZWNvcmRTdG9yZUZhY3Rvcnk6IFJlY29yZFN0b3JlRmFjdG9yeSxcbiAgICAgICAgcHJvdGVjdGVkIHByZWZlcmVuY2VzOiBVc2VyUHJlZmVyZW5jZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgcGFuZWxMb2dpY01hbmFnZXI6IFBhbmVsTG9naWNNYW5hZ2VyLFxuICAgICAgICBwcm90ZWN0ZWQgcmVjb3JkQ29udmVydFNlcnZpY2U6IFJlY29yZENvbnZlcnRTZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgcmVjb3JkRmV0Y2hHUUwsXG4gICAgICAgICAgICByZWNvcmRTYXZlR1FMLFxuICAgICAgICAgICAgYXBwU3RhdGVTdG9yZSxcbiAgICAgICAgICAgIGxhbmd1YWdlU3RvcmUsXG4gICAgICAgICAgICBuYXZpZ2F0aW9uU3RvcmUsXG4gICAgICAgICAgICBtb2R1bGVOYXZpZ2F0aW9uLFxuICAgICAgICAgICAgbWV0YWRhdGFTdG9yZSxcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZSxcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICBzdWJwYW5lbEZhY3RvcnksXG4gICAgICAgICAgICByZWNvcmRNYW5hZ2VyLFxuICAgICAgICAgICAgc3RhdGlzdGljc0JhdGNoLFxuICAgICAgICAgICAgcmVjb3JkU3RvcmVGYWN0b3J5LFxuICAgICAgICAgICAgcHJlZmVyZW5jZXMsXG4gICAgICAgICAgICBwYW5lbExvZ2ljTWFuYWdlcixcbiAgICAgICAgICAgIHJlY29yZENvbnZlcnRTZXJ2aWNlXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbCByZWNvcmQgbG9hZCBpZiBub3QgY2FjaGVkIGFuZCB1cGRhdGUgc3RhdGUuXG4gICAgICogUmV0dXJucyBvYnNlcnZhYmxlIHRvIGJlIHVzZWQgaW4gcmVzb2x2ZXIgaWYgbmVlZGVkXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kdWxlIHRvIHVzZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSByZWNvcmRJRCB0byB1c2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kZSB0byB1c2VcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcGFyYW1zIHRvIHNldFxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IE9ic2VydmFibGU8YW55PlxuICAgICAqL1xuICAgIHB1YmxpYyBpbml0KG1vZHVsZTogc3RyaW5nLCByZWNvcmRJRDogc3RyaW5nLCBtb2RlID0gJ2RldGFpbCcgYXMgVmlld01vZGUsIHBhcmFtczogUGFyYW1zID0ge30pOiBPYnNlcnZhYmxlPFJlY29yZD4ge1xuICAgICAgICB0aGlzLmludGVybmFsU3RhdGUubW9kdWxlID0gbW9kdWxlO1xuICAgICAgICB0aGlzLmludGVybmFsU3RhdGUucmVjb3JkSUQgPSByZWNvcmRJRDtcbiAgICAgICAgdGhpcy5zZXRNb2RlKG1vZGUpO1xuICAgICAgICB0aGlzLnBhcnNlUGFyYW1zKHBhcmFtcyk7XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlU2hvd1dpZGdldHMoKTtcbiAgICAgICAgdGhpcy5zaG93VG9wV2lkZ2V0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2hvd0JvdHRvbVdpZGdldHMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zaG93U3VicGFuZWxzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgaXNEdXBsaWNhdGUgPSB0aGlzLnBhcmFtcy5pc0R1cGxpY2F0ZSA/PyBmYWxzZTtcbiAgICAgICAgY29uc3QgaXNDb252ZXJ0ID0gdGhpcy5wYXJhbXMuaXNDb252ZXJ0ID8/IGZhbHNlO1xuICAgICAgICBjb25zdCBpc09yaWdpbmFsSWQgPSB0aGlzLnBhcmFtcy5vcmlnaW5hbElkID8/IGZhbHNlO1xuICAgICAgICBjb25zdCBjb252ZXJ0TW9kdWxlID0gdGhpcy5wYXJhbXMuY29udmVydE1vZHVsZSA/PyAnJztcblxuICAgICAgICBpZiAoIWlzRHVwbGljYXRlICYmICFpc0NvbnZlcnQgJiYgIWlzT3JpZ2luYWxJZCkge1xuICAgICAgICAgICAgdGhpcy5pbml0UmVjb3JkKHBhcmFtcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNDb252ZXJ0ICYmIGlzT3JpZ2luYWxJZCAmJiBjb252ZXJ0TW9kdWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kdXBsaWNhdGVPbk1vZHVsZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubG9hZCgpO1xuICAgIH1cblxuICAgIHNhdmUoKTogT2JzZXJ2YWJsZTxSZWNvcmQ+IHtcbiAgICAgICAgdGhpcy5hcHBTdGF0ZVN0b3JlLnVwZGF0ZUxvYWRpbmcoYCR7dGhpcy5pbnRlcm5hbFN0YXRlLm1vZHVsZX0tcmVjb3JkLXNhdmUtbmV3YCwgdHJ1ZSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVjb3JkU3RvcmUuc2F2ZSgpLnBpcGUoXG4gICAgICAgICAgICBjYXRjaEVycm9yKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UuYWRkRGFuZ2VyTWVzc2FnZUJ5S2V5KCdMQkxfRVJST1JfU0FWSU5HJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mKHt9IGFzIFJlY29yZCk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGZpbmFsaXplKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldE1vZGUoJ2RldGFpbCcgYXMgVmlld01vZGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwU3RhdGVTdG9yZS51cGRhdGVMb2FkaW5nKGAke3RoaXMuaW50ZXJuYWxTdGF0ZS5tb2R1bGV9LXJlY29yZC1zYXZlLW5ld2AsIGZhbHNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdCByZWNvcmQgdXNpbmcgcGFyYW1zXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcGFyYW1zIHF1ZXJ5UGFyYW1zXG4gICAgICovXG4gICAgcHVibGljIGluaXRSZWNvcmQocGFyYW1zOiBQYXJhbXMgPSB7fSk6IHZvaWQge1xuICAgICAgICBjb25zdCB1c2VyID0gdGhpcy5hdXRoLmdldEN1cnJlbnRVc2VyKCk7XG4gICAgICAgIGNvbnN0IGJsYW5rUmVjb3JkID0ge1xuICAgICAgICAgICAgaWQ6ICcnLFxuICAgICAgICAgICAgdHlwZTogJycsXG4gICAgICAgICAgICBtb2R1bGU6IHRoaXMuaW50ZXJuYWxTdGF0ZS5tb2R1bGUsXG4gICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UsQHR5cGVzY3JpcHQtZXNsaW50L2NhbWVsY2FzZSAqL1xuICAgICAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgICAgIGFzc2lnbmVkX3VzZXJfaWQ6IHVzZXIuaWQsXG4gICAgICAgICAgICAgICAgYXNzaWduZWRfdXNlcl9uYW1lOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiB1c2VyLmlkLFxuICAgICAgICAgICAgICAgICAgICB1c2VyX25hbWU6IHVzZXIudXNlck5hbWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJlbGF0ZV90bzogcGFyYW1zPy5yZXR1cm5fcmVsYXRpb25zaGlwLFxuICAgICAgICAgICAgICAgIHJlbGF0ZV9pZDogcGFyYW1zPy5wYXJlbnRfaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qIGVzbGludC1lbmFibGUgY2FtZWxjYXNlLEB0eXBlc2NyaXB0LWVzbGludC9jYW1lbGNhc2UgKi9cbiAgICAgICAgfSBhcyBSZWNvcmQ7XG5cbiAgICAgICAgdGhpcy5yZWNvcmRNYW5hZ2VyLmluamVjdFBhcmFtRmllbGRzKHBhcmFtcywgYmxhbmtSZWNvcmQsIHRoaXMuZ2V0VmFyZGVmcygpKTtcblxuICAgICAgICB0aGlzLnJlY29yZFN0b3JlLmluaXQoYmxhbmtSZWNvcmQsIHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvYWQgLyByZWxvYWQgcmVjb3JkIHVzaW5nIGN1cnJlbnQgcGFnaW5hdGlvbiBhbmQgY3JpdGVyaWFcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IE9ic2VydmFibGU8UmVjb3JkVmlld1N0YXRlPlxuICAgICAqL1xuICAgIHB1YmxpYyBsb2FkKCk6IE9ic2VydmFibGU8UmVjb3JkPiB7XG4gICAgICAgIGlmICgodGhpcy5wYXJhbXMuaXNEdXBsaWNhdGUgPz8gZmFsc2UpICYmICh0aGlzLnBhcmFtcy5vcmlnaW5hbElkID8/IGZhbHNlKSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5pbnRlcm5hbFN0YXRlLFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVjb3JkU3RvcmUucmV0cmlldmVSZWNvcmQoXG4gICAgICAgICAgICAgICAgdGhpcy5pbnRlcm5hbFN0YXRlLm1vZHVsZSxcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcy5vcmlnaW5hbElkLFxuICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICApLnBpcGUoXG4gICAgICAgICAgICAgICAgdGFwKChkYXRhOiBSZWNvcmQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5pZCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmF0dHJpYnV0ZXMuaWQgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZSxAdHlwZXNjcmlwdC1lc2xpbnQvY2FtZWxjYXNlXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuYXR0cmlidXRlcy5kYXRlX2VudGVyZWQgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWNvcmRNYW5hZ2VyLmluamVjdFBhcmFtRmllbGRzKHRoaXMucGFyYW1zLCBkYXRhLCB0aGlzLmdldFZhcmRlZnMoKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVjb3JkU3RvcmUuc2V0UmVjb3JkKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuaW50ZXJuYWxTdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZTogZGF0YS5tb2R1bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2YodGhpcy5yZWNvcmRTdG9yZS5nZXRCYXNlUmVjb3JkKCkpLnBpcGUoc2hhcmVSZXBsYXkoKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGR1cGxpY2F0ZU9uTW9kdWxlKCk6IE9ic2VydmFibGU8UmVjb3JkPiB7XG5cbiAgICAgICAgdGhpcy5pbml0UmVjb3JkKCk7XG4gICAgICAgIGNvbnN0IG5ld1JlY29yZCA9IHRoaXMuZ2V0QmFzZVJlY29yZCgpO1xuICAgICAgICBjb25zdCBtb2R1bGVNZXRhZGF0YSA9IHRoaXMubWV0YWRhdGFTdG9yZS5nZXRNb2R1bGVNZXRhKHRoaXMucGFyYW1zLmNvbnZlcnRNb2R1bGUpO1xuICAgICAgICBjb25zdCB2aWV3RGVmaW5pdGlvbnMkID0gdGhpcy5yZWNvcmRDb252ZXJ0U2VydmljZS5nZXRWaWV3RmllbGRzT2JzZXJ2YWJsZShtb2R1bGVNZXRhZGF0YSk7XG4gICAgICAgIGNvbnN0IHByZXZNb2R1bGVSZWNvcmRTdG9yZSA9IHRoaXMucmVjb3JkU3RvcmVGYWN0b3J5LmNyZWF0ZSh2aWV3RGVmaW5pdGlvbnMkKTtcbiAgICAgICAgY29uc3QgcHJldlJlY29yZCA9IHByZXZNb2R1bGVSZWNvcmRTdG9yZS5yZXRyaWV2ZVJlY29yZChcbiAgICAgICAgICAgIHRoaXMucGFyYW1zLmNvbnZlcnRNb2R1bGUsXG4gICAgICAgICAgICB0aGlzLnBhcmFtcy5vcmlnaW5hbElkLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgKS5waXBlKFxuICAgICAgICAgICAgbWFwKChyZWNvcmQ6IFJlY29yZCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlY29yZENvbnZlcnRTZXJ2aWNlLmR1cGxpY2F0ZU9uTW9kdWxlKHJlY29yZCwgbmV3UmVjb3JkLCB0aGlzLmdldFZhcmRlZnMoKSwgbW9kdWxlTWV0YWRhdGEpXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHRhcCgocmVjb3JkOiBSZWNvcmQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlY29yZFN0b3JlLnNldFJlY29yZChyZWNvcmQpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLmludGVybmFsU3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZTogdGhpcy5pbnRlcm5hbFN0YXRlLm1vZHVsZSxcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gcHJldlJlY29yZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgaWYgd2lkZ2V0cyBhcmUgdG8gZGlzcGxheVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBjYWxjdWxhdGVTaG93V2lkZ2V0cygpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2hvdyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNob3dTaWRlYmFyV2lkZ2V0cyA9IHNob3c7XG4gICAgICAgIHRoaXMud2lkZ2V0cyA9IHNob3c7XG4gICAgfVxufVxuIl19