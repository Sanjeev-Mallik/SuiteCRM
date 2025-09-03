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
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, combineLatestWith, forkJoin, of } from 'rxjs';
import { deepClone } from '../../../../common/utils/object-utils';
import { catchError, distinctUntilChanged, filter, finalize, map, startWith, take, tap } from 'rxjs/operators';
import { MetadataStore } from '../../../../store/metadata/metadata.store.service';
import { MessageService } from '../../../../services/message/message.service';
import { AppStateStore } from '../../../../store/app-state/app-state.store';
import { FieldManager } from '../../../../services/record/field/field.manager';
import { LanguageStore } from '../../../../store/language/language.store';
import { SavedFilterRecordStoreFactory } from './saved-filter-record.store.factory';
import { RecordValidationHandler } from "../../../../services/record/validation/record-validation.handler";
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/app-state/app-state.store";
import * as i2 from "../../../../store/metadata/metadata.store.service";
import * as i3 from "../../../../services/message/message.service";
import * as i4 from "../../../../services/record/field/field.manager";
import * as i5 from "../../../../store/language/language.store";
import * as i6 from "./saved-filter-record.store.factory";
const initialState = {
    module: '',
    searchModule: '',
    recordID: '',
    loading: false,
    mode: 'detail',
};
export class SavedFilterStore {
    constructor(appStateStore, meta, message, fieldManager, language, savedFilterStoreFactory) {
        this.appStateStore = appStateStore;
        this.meta = meta;
        this.message = message;
        this.fieldManager = fieldManager;
        this.language = language;
        this.savedFilterStoreFactory = savedFilterStoreFactory;
        /** Internal Properties */
        this.cache$ = null;
        this.internalState = deepClone(initialState);
        this.store = new BehaviorSubject(this.internalState);
        this.state$ = this.store.asObservable();
        this.subs = [];
        this.metadataLoadingState = new BehaviorSubject(false);
        this.metadataLoading$ = this.metadataLoadingState.asObservable();
        this.meta$ = this.meta.getMetadata('saved-search', ['recordView']).pipe(tap(() => this.metadataLoadingState.next(false)), map(definitions => {
            const recordViewMeta = { ...definitions.recordView };
            recordViewMeta.actions = (recordViewMeta?.actions ?? []).filter(value => {
                return value.key !== 'cancel';
            });
            return recordViewMeta;
        }));
        this.recordStore = savedFilterStoreFactory.create(this.getViewFields$(), this.getRecordMeta$());
        this.record$ = this.recordStore.state$.pipe(distinctUntilChanged(), map(record => record));
        this.stagingRecord$ = this.recordStore.staging$.pipe(distinctUntilChanged(), map(record => record));
        this.loading$ = this.state$.pipe(map(state => state.loading));
        this.mode$ = this.state$.pipe(map(state => state.mode));
        this.vm$ = this.stagingRecord$.pipe(combineLatestWith(this.mode$), map(([record, mode]) => {
            this.vm = { record, mode };
            return this.vm;
        }));
        this.recordValidationHandler = inject(RecordValidationHandler);
    }
    getModuleName() {
        return this.internalState.module;
    }
    getRecordId() {
        return this.internalState.recordID;
    }
    getViewContext() {
        return {
            module: this.getModuleName(),
            id: this.getRecordId(),
        };
    }
    /**
     * Clean destroy
     */
    destroy() {
        this.clear();
    }
    /**
     * Initial record load if not cached and update state.
     * Returns observable to be used in resolver if needed
     *
     * @param {string} recordID to use
     * @param {string} mode to use
     * @returns {object} Observable<any>
     */
    init(recordID, mode = 'detail') {
        this.internalState.module = 'saved-search';
        this.internalState.recordID = recordID;
        this.setMode(mode);
        this.metadataLoadingState.next(true);
        const $data = forkJoin([this.meta$, this.load()]);
        return $data.pipe(map(([meta, record]) => record));
    }
    /**
     * Init record
     *
     * @param {string} searchModule name
     * @param {object} filter to use
     * @param {object} searchFields to use
     * @param {object} listColumns ColumnDefinition[]
     * @param {string} mode to use
     * @returns {object} Observable<any>
     */
    initRecord(searchModule, filter, searchFields, listColumns, mode = 'detail') {
        this.updateState({
            ...this.internalState,
            recordID: filter.id,
            module: 'saved-search',
            searchModule,
            mode
        });
        this.metadataLoadingState.next(true);
        this.meta$.pipe(take(1), tap(() => {
            this.metadataLoadingState.next(false);
            this.initStaging(searchModule, filter, searchFields, listColumns, null);
        })).subscribe();
    }
    initStaging(searchModule, filter, searchFields, listColumns, metadata) {
        const filterRecord = deepClone(this.recordStore.extractBaseRecord(filter));
        filterRecord.searchModule = searchModule;
        this.recordStore.setSearchFields(searchFields);
        this.recordStore.setListColumns(listColumns);
        this.recordStore.setMetadata(metadata);
        this.recordStore.setStaging(filterRecord);
        this.recordValidationHandler.initValidators(this.recordStore.getStaging());
    }
    /**
     * Clear observable cache
     */
    clear() {
        this.cache$ = null;
        this.updateState(deepClone(initialState));
        this.metadataLoadingState.unsubscribe();
        this.metadataLoadingState = null;
        this.recordStore.destroy();
        this.recordStore = null;
    }
    /**
     * Clear observable cache
     */
    clearAuthBased() {
        this.clear();
    }
    /**
     * Get staging record
     *
     * @returns {string} ViewMode
     */
    getBaseRecord() {
        return this.recordStore.getBaseRecord();
    }
    /**
     * Get current view mode
     *
     * @returns {string} ViewMode
     */
    getMode() {
        if (!this.internalState) {
            return null;
        }
        return this.internalState.mode;
    }
    /**
     * Set new mode
     *
     * @param {string} mode ViewMode
     */
    setMode(mode) {
        this.updateState({ ...this.internalState, mode });
    }
    /**
     * Save record
     */
    save() {
        this.appStateStore.updateLoading(`${this.internalState.module}-record-save`, true);
        return this.recordStore.save().pipe(catchError(() => {
            this.message.addDangerMessageByKey('LBL_ERROR_SAVING');
            return of({});
        }), finalize(() => {
            this.appStateStore.updateLoading(`${this.internalState.module}-record-save`, false);
        }));
    }
    /**
     * Validate search filter fields
     *
     * @returns {object} Observable<boolean>
     */
    validate() {
        return forkJoin([
            this.recordStore.validate(),
            this.validateCriteria()
        ]).pipe(map(([fields, criteria]) => fields && criteria));
    }
    /**
     * Validate search current input
     *
     * @returns {object} Observable<boolean>
     */
    validateCriteria() {
        const currentFilter = this.recordStore.getStaging();
        const formGroup = currentFilter.criteriaFormGroup;
        formGroup.markAllAsTouched();
        return formGroup.statusChanges.pipe(startWith(formGroup.status), filter(status => status !== 'PENDING'), take(1), map(status => status === 'VALID'));
    }
    /**
     * Load / reload record using current pagination and criteria
     *
     * @param {boolean} useCache if to use cache
     * @returns {object} Observable<RecordViewState>
     */
    load(useCache = true) {
        this.appStateStore.updateLoading(`${this.internalState.module}-record-fetch`, true);
        return this.recordStore.retrieveRecord(this.internalState.module, this.internalState.recordID, useCache).pipe(tap((data) => {
            this.appStateStore.updateLoading(`${this.internalState.module}-record-fetch`, false);
            this.updateState({
                ...this.internalState,
                recordID: data.id,
                module: data.module,
            });
        }));
    }
    /**
     * Get view fields observable
     *
     * @returns {object} Observable<string[]>
     */
    getViewFieldsKeys$() {
        return this.meta$.pipe(map((recordMetadata) => {
            const fields = [];
            recordMetadata.panels.forEach(panel => {
                panel.rows.forEach(row => {
                    row.cols.forEach(col => {
                        fields.push(col.name);
                    });
                });
            });
            return fields;
        }));
    }
    /**
     * Get view fields observable
     *
     * @returns {object} Observable<ViewFieldDefinition[]>
     */
    getViewFields$() {
        return this.meta$.pipe(map((recordMetadata) => {
            const fields = [];
            recordMetadata.panels.forEach(panel => {
                panel.rows.forEach(row => {
                    row.cols.forEach(col => {
                        fields.push(col);
                    });
                });
            });
            return fields;
        }));
    }
    getRecordMeta$() {
        return this.meta$.pipe(map((recordMetadata) => {
            return recordMetadata.metadata || {};
        }));
    }
    /**
     * Update the state
     *
     * @param {object} state to set
     */
    updateState(state) {
        this.store.next(this.internalState = state);
    }
    /**
     * Get record view metadata
     *
     * @returns {object} metadata RecordViewMetadata
     */
    getMetadata() {
        const meta = this.meta.get() || {};
        return meta.recordView || {};
    }
    static { this.ɵfac = function SavedFilterStore_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SavedFilterStore)(i0.ɵɵinject(i1.AppStateStore), i0.ɵɵinject(i2.MetadataStore), i0.ɵɵinject(i3.MessageService), i0.ɵɵinject(i4.FieldManager), i0.ɵɵinject(i5.LanguageStore), i0.ɵɵinject(i6.SavedFilterRecordStoreFactory)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SavedFilterStore, factory: SavedFilterStore.ɵfac }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SavedFilterStore, [{
        type: Injectable
    }], () => [{ type: i1.AppStateStore }, { type: i2.MetadataStore }, { type: i3.MessageService }, { type: i4.FieldManager }, { type: i5.LanguageStore }, { type: i6.SavedFilterRecordStoreFactory }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZWQtZmlsdGVyLnN0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbnRhaW5lcnMvbGlzdC1maWx0ZXIvc3RvcmUvc2F2ZWQtZmlsdGVyL3NhdmVkLWZpbHRlci5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFDLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQWMsRUFBRSxFQUFlLE1BQU0sTUFBTSxDQUFDO0FBTWhHLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUNoRSxPQUFPLEVBQUMsVUFBVSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0csT0FBTyxFQUFDLGFBQWEsRUFBcUIsTUFBTSxtREFBbUQsQ0FBQztBQUNwRyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sOENBQThDLENBQUM7QUFDNUUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBRzFFLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUM3RSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFFeEUsT0FBTyxFQUFDLDZCQUE2QixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDbEYsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sa0VBQWtFLENBQUM7Ozs7Ozs7O0FBR3pHLE1BQU0sWUFBWSxHQUF5QjtJQUN2QyxNQUFNLEVBQUUsRUFBRTtJQUNWLFlBQVksRUFBRSxFQUFFO0lB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RDs7OztPQUlHO0lBQ08sV0FBVyxDQUFDLEtBQTJCO1FBQzdDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVEOzs7O09BSUc7SUFDTyxXQUFXO1FBQ2pCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDO1FBQ25DLE9BQU8sSUFBSSxDQUFDLFVBQVUsSUFBSSxFQUF3QixDQUFDO0lBQ3ZELENBQUM7aUhBcFdRLGdCQUFnQjt1RUFBaEIsZ0JBQWdCLFdBQWhCLGdCQUFnQjs7aUZBQWhCLGdCQUFnQjtjQUQ1QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge2luamVjdCwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgY29tYmluZUxhdGVzdFdpdGgsIGZvcmtKb2luLCBPYnNlcnZhYmxlLCBvZiwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7UmVjb3JkfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vcmVjb3JkL3JlY29yZC5tb2RlbCc7XG5pbXBvcnQge1NlYXJjaENyaXRlcmlhfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vdmlld3MvbGlzdC9zZWFyY2gtY3JpdGVyaWEubW9kZWwnO1xuaW1wb3J0IHtDb2x1bW5EZWZpbml0aW9uLCBTZWFyY2hNZXRhRmllbGRNYXB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9tZXRhZGF0YS9saXN0Lm1ldGFkYXRhLm1vZGVsJztcbmltcG9ydCB7Vmlld0NvbnRleHQsIFZpZXdNb2RlfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vdmlld3Mvdmlldy5tb2RlbCc7XG5pbXBvcnQge1ZpZXdGaWVsZERlZmluaXRpb259IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9tZXRhZGF0YS9tZXRhZGF0YS5tb2RlbCc7XG5pbXBvcnQge2RlZXBDbG9uZX0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3V0aWxzL29iamVjdC11dGlscyc7XG5pbXBvcnQge2NhdGNoRXJyb3IsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIGZpbmFsaXplLCBtYXAsIHN0YXJ0V2l0aCwgdGFrZSwgdGFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1N0YXRlU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3N0YXRlJztcbmltcG9ydCB7TWV0YWRhdGFTdG9yZSwgUmVjb3JkVmlld01ldGFkYXRhfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9tZXRhZGF0YS9tZXRhZGF0YS5zdG9yZS5zZXJ2aWNlJztcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL21lc3NhZ2UvbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7QXBwU3RhdGVTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvYXBwLXN0YXRlL2FwcC1zdGF0ZS5zdG9yZSc7XG5pbXBvcnQge0ZpbHRlckNvbnRhaW5lckRhdGEsIEZpbHRlckNvbnRhaW5lclN0YXRlfSBmcm9tICcuL3NhdmVkLWZpbHRlci5zdG9yZS5tb2RlbCc7XG5pbXBvcnQge1NhdmVkRmlsdGVyfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9zYXZlZC1maWx0ZXJzL3NhdmVkLWZpbHRlci5tb2RlbCc7XG5pbXBvcnQge0ZpZWxkTWFuYWdlcn0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvcmVjb3JkL2ZpZWxkL2ZpZWxkLm1hbmFnZXInO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5pbXBvcnQge1NhdmVkRmlsdGVyUmVjb3JkU3RvcmV9IGZyb20gJy4vc2F2ZWQtZmlsdGVyLXJlY29yZC5zdG9yZSc7XG5pbXBvcnQge1NhdmVkRmlsdGVyUmVjb3JkU3RvcmVGYWN0b3J5fSBmcm9tICcuL3NhdmVkLWZpbHRlci1yZWNvcmQuc3RvcmUuZmFjdG9yeSc7XG5pbXBvcnQge1JlY29yZFZhbGlkYXRpb25IYW5kbGVyfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZXMvcmVjb3JkL3ZhbGlkYXRpb24vcmVjb3JkLXZhbGlkYXRpb24uaGFuZGxlclwiO1xuaW1wb3J0IHtPYmplY3RNYXB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vdHlwZXMvb2JqZWN0LW1hcFwiO1xuXG5jb25zdCBpbml0aWFsU3RhdGU6IEZpbHRlckNvbnRhaW5lclN0YXRlID0ge1xuICAgIG1vZHVsZTogJycsXG4gICAgc2VhcmNoTW9kdWxlOiAnJyxcbiAgICByZWNvcmRJRDogJycsXG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgbW9kZTogJ2RldGFpbCcsXG59O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2F2ZWRGaWx0ZXJTdG9yZSBpbXBsZW1lbnRzIFN0YXRlU3RvcmUge1xuXG4gICAgLyoqXG4gICAgICogUHVibGljIGxvbmctbGl2ZWQgb2JzZXJ2YWJsZSBzdHJlYW1zXG4gICAgICovXG4gICAgcmVjb3JkJDogT2JzZXJ2YWJsZTxTYXZlZEZpbHRlcj47XG4gICAgc3RhZ2luZ1JlY29yZCQ6IE9ic2VydmFibGU8U2F2ZWRGaWx0ZXI+O1xuICAgIGxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIG1vZGUkOiBPYnNlcnZhYmxlPFZpZXdNb2RlPjtcbiAgICBtZXRhJDogT2JzZXJ2YWJsZTxSZWNvcmRWaWV3TWV0YWRhdGE+O1xuICAgIG1ldGFkYXRhTG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgICAvKipcbiAgICAgKiBWaWV3LW1vZGVsIHRoYXQgcmVzb2x2ZXMgb25jZSBhbGwgdGhlIGRhdGEgaXMgcmVhZHkgKG9yIHVwZGF0ZWQpLlxuICAgICAqL1xuICAgIHZtJDogT2JzZXJ2YWJsZTxGaWx0ZXJDb250YWluZXJEYXRhPjtcbiAgICB2bTogRmlsdGVyQ29udGFpbmVyRGF0YTtcbiAgICByZWNvcmRTdG9yZTogU2F2ZWRGaWx0ZXJSZWNvcmRTdG9yZTtcblxuICAgIHNlYXJjaENyaXRlcmlhOiBTZWFyY2hDcml0ZXJpYTtcbiAgICBmaWx0ZXI6IFNhdmVkRmlsdGVyO1xuXG4gICAgLyoqIEludGVybmFsIFByb3BlcnRpZXMgKi9cbiAgICBwcm90ZWN0ZWQgY2FjaGUkOiBPYnNlcnZhYmxlPGFueT4gPSBudWxsO1xuICAgIHByb3RlY3RlZCBpbnRlcm5hbFN0YXRlOiBGaWx0ZXJDb250YWluZXJTdGF0ZSA9IGRlZXBDbG9uZShpbml0aWFsU3RhdGUpO1xuICAgIHByb3RlY3RlZCBzdG9yZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8RmlsdGVyQ29udGFpbmVyU3RhdGU+KHRoaXMuaW50ZXJuYWxTdGF0ZSk7XG4gICAgcHJvdGVjdGVkIHN0YXRlJCA9IHRoaXMuc3RvcmUuYXNPYnNlcnZhYmxlKCk7XG4gICAgcHJvdGVjdGVkIHN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gICAgcHJvdGVjdGVkIG1ldGFkYXRhTG9hZGluZ1N0YXRlOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj47XG4gICAgcHJvdGVjdGVkIHJlY29yZFZhbGlkYXRpb25IYW5kbGVyOiBSZWNvcmRWYWxpZGF0aW9uSGFuZGxlcjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgYXBwU3RhdGVTdG9yZTogQXBwU3RhdGVTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIG1ldGE6IE1ldGFkYXRhU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBtZXNzYWdlOiBNZXNzYWdlU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIGZpZWxkTWFuYWdlcjogRmllbGRNYW5hZ2VyLFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBzYXZlZEZpbHRlclN0b3JlRmFjdG9yeTogU2F2ZWRGaWx0ZXJSZWNvcmRTdG9yZUZhY3RvcnlcbiAgICApIHtcbiAgICAgICAgdGhpcy5tZXRhZGF0YUxvYWRpbmdTdGF0ZSA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuICAgICAgICB0aGlzLm1ldGFkYXRhTG9hZGluZyQgPSB0aGlzLm1ldGFkYXRhTG9hZGluZ1N0YXRlLmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgICAgIHRoaXMubWV0YSQgPSB0aGlzLm1ldGEuZ2V0TWV0YWRhdGEoJ3NhdmVkLXNlYXJjaCcsIFsncmVjb3JkVmlldyddKS5waXBlKFxuICAgICAgICAgICAgdGFwKCgpID0+IHRoaXMubWV0YWRhdGFMb2FkaW5nU3RhdGUubmV4dChmYWxzZSkpLFxuICAgICAgICAgICAgbWFwKGRlZmluaXRpb25zID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWNvcmRWaWV3TWV0YSA9IHsuLi5kZWZpbml0aW9ucy5yZWNvcmRWaWV3fTtcbiAgICAgICAgICAgICAgICByZWNvcmRWaWV3TWV0YS5hY3Rpb25zID0gKHJlY29yZFZpZXdNZXRhPy5hY3Rpb25zID8/IFtdKS5maWx0ZXIodmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUua2V5ICE9PSAnY2FuY2VsJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiByZWNvcmRWaWV3TWV0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5yZWNvcmRTdG9yZSA9IHNhdmVkRmlsdGVyU3RvcmVGYWN0b3J5LmNyZWF0ZSh0aGlzLmdldFZpZXdGaWVsZHMkKCksIHRoaXMuZ2V0UmVjb3JkTWV0YSQoKSk7XG5cbiAgICAgICAgdGhpcy5yZWNvcmQkID0gdGhpcy5yZWNvcmRTdG9yZS5zdGF0ZSQucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLCBtYXAocmVjb3JkID0+IHJlY29yZCBhcyBTYXZlZEZpbHRlcikpO1xuICAgICAgICB0aGlzLnN0YWdpbmdSZWNvcmQkID0gdGhpcy5yZWNvcmRTdG9yZS5zdGFnaW5nJC5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksIG1hcChyZWNvcmQgPT4gcmVjb3JkIGFzIFNhdmVkRmlsdGVyKSk7XG4gICAgICAgIHRoaXMubG9hZGluZyQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5sb2FkaW5nKSk7XG4gICAgICAgIHRoaXMubW9kZSQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5tb2RlKSk7XG5cbiAgICAgICAgdGhpcy52bSQgPSB0aGlzLnN0YWdpbmdSZWNvcmQkLnBpcGUoXG4gICAgICAgICAgICBjb21iaW5lTGF0ZXN0V2l0aCh0aGlzLm1vZGUkKSxcbiAgICAgICAgICAgIG1hcCgoW3JlY29yZCwgbW9kZV06IFtTYXZlZEZpbHRlciwgVmlld01vZGVdKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy52bSA9IHtyZWNvcmQsIG1vZGV9IGFzIEZpbHRlckNvbnRhaW5lckRhdGE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudm07XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMucmVjb3JkVmFsaWRhdGlvbkhhbmRsZXIgPSBpbmplY3QoUmVjb3JkVmFsaWRhdGlvbkhhbmRsZXIpO1xuICAgIH1cblxuICAgIGdldE1vZHVsZU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxTdGF0ZS5tb2R1bGU7XG4gICAgfVxuXG4gICAgZ2V0UmVjb3JkSWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxTdGF0ZS5yZWNvcmRJRDtcbiAgICB9XG5cbiAgICBnZXRWaWV3Q29udGV4dCgpOiBWaWV3Q29udGV4dCB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtb2R1bGU6IHRoaXMuZ2V0TW9kdWxlTmFtZSgpLFxuICAgICAgICAgICAgaWQ6IHRoaXMuZ2V0UmVjb3JkSWQoKSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhbiBkZXN0cm95XG4gICAgICovXG4gICAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWwgcmVjb3JkIGxvYWQgaWYgbm90IGNhY2hlZCBhbmQgdXBkYXRlIHN0YXRlLlxuICAgICAqIFJldHVybnMgb2JzZXJ2YWJsZSB0byBiZSB1c2VkIGluIHJlc29sdmVyIGlmIG5lZWRlZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHJlY29yZElEIHRvIHVzZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtb2RlIHRvIHVzZVxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IE9ic2VydmFibGU8YW55PlxuICAgICAqL1xuICAgIHB1YmxpYyBpbml0KHJlY29yZElEOiBzdHJpbmcsIG1vZGUgPSAnZGV0YWlsJyBhcyBWaWV3TW9kZSk6IE9ic2VydmFibGU8UmVjb3JkPiB7XG4gICAgICAgIHRoaXMuaW50ZXJuYWxTdGF0ZS5tb2R1bGUgPSAnc2F2ZWQtc2VhcmNoJztcbiAgICAgICAgdGhpcy5pbnRlcm5hbFN0YXRlLnJlY29yZElEID0gcmVjb3JkSUQ7XG4gICAgICAgIHRoaXMuc2V0TW9kZShtb2RlKTtcblxuICAgICAgICB0aGlzLm1ldGFkYXRhTG9hZGluZ1N0YXRlLm5leHQodHJ1ZSk7XG5cbiAgICAgICAgY29uc3QgJGRhdGEgPSBmb3JrSm9pbihbdGhpcy5tZXRhJCwgdGhpcy5sb2FkKCldKTtcblxuICAgICAgICByZXR1cm4gJGRhdGEucGlwZShtYXAoKFttZXRhLCByZWNvcmRdKSA9PiByZWNvcmQpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0IHJlY29yZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlYXJjaE1vZHVsZSBuYW1lXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGZpbHRlciB0byB1c2VcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gc2VhcmNoRmllbGRzIHRvIHVzZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBsaXN0Q29sdW1ucyBDb2x1bW5EZWZpbml0aW9uW11cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kZSB0byB1c2VcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBPYnNlcnZhYmxlPGFueT5cbiAgICAgKi9cbiAgICBwdWJsaWMgaW5pdFJlY29yZChcbiAgICAgICAgc2VhcmNoTW9kdWxlOiBzdHJpbmcsXG4gICAgICAgIGZpbHRlcjogU2F2ZWRGaWx0ZXIsXG4gICAgICAgIHNlYXJjaEZpZWxkczogU2VhcmNoTWV0YUZpZWxkTWFwLFxuICAgICAgICBsaXN0Q29sdW1uczogQ29sdW1uRGVmaW5pdGlvbltdLFxuICAgICAgICBtb2RlID0gJ2RldGFpbCcgYXMgVmlld01vZGUpOiB2b2lkIHtcblxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgIC4uLnRoaXMuaW50ZXJuYWxTdGF0ZSxcbiAgICAgICAgICAgIHJlY29yZElEOiBmaWx0ZXIuaWQsXG4gICAgICAgICAgICBtb2R1bGU6ICdzYXZlZC1zZWFyY2gnLFxuICAgICAgICAgICAgc2VhcmNoTW9kdWxlLFxuICAgICAgICAgICAgbW9kZVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm1ldGFkYXRhTG9hZGluZ1N0YXRlLm5leHQodHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5tZXRhJC5waXBlKFxuICAgICAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgICAgIHRhcCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXRhZGF0YUxvYWRpbmdTdGF0ZS5uZXh0KGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRTdGFnaW5nKHNlYXJjaE1vZHVsZSwgZmlsdGVyLCBzZWFyY2hGaWVsZHMsIGxpc3RDb2x1bW5zLCBudWxsKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICkuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGluaXRTdGFnaW5nKFxuICAgICAgICBzZWFyY2hNb2R1bGU6IHN0cmluZyxcbiAgICAgICAgZmlsdGVyOiBTYXZlZEZpbHRlcixcbiAgICAgICAgc2VhcmNoRmllbGRzOiBTZWFyY2hNZXRhRmllbGRNYXAsXG4gICAgICAgIGxpc3RDb2x1bW5zOiBDb2x1bW5EZWZpbml0aW9uW10sXG4gICAgICAgIG1ldGFkYXRhOiBPYmplY3RNYXBcbiAgICApIHtcblxuICAgICAgICBjb25zdCBmaWx0ZXJSZWNvcmQ6IFNhdmVkRmlsdGVyID0gZGVlcENsb25lKHRoaXMucmVjb3JkU3RvcmUuZXh0cmFjdEJhc2VSZWNvcmQoZmlsdGVyKSk7XG5cbiAgICAgICAgZmlsdGVyUmVjb3JkLnNlYXJjaE1vZHVsZSA9IHNlYXJjaE1vZHVsZTtcbiAgICAgICAgdGhpcy5yZWNvcmRTdG9yZS5zZXRTZWFyY2hGaWVsZHMoc2VhcmNoRmllbGRzKTtcbiAgICAgICAgdGhpcy5yZWNvcmRTdG9yZS5zZXRMaXN0Q29sdW1ucyhsaXN0Q29sdW1ucyk7XG4gICAgICAgIHRoaXMucmVjb3JkU3RvcmUuc2V0TWV0YWRhdGEobWV0YWRhdGEpO1xuICAgICAgICB0aGlzLnJlY29yZFN0b3JlLnNldFN0YWdpbmcoZmlsdGVyUmVjb3JkKTtcbiAgICAgICAgdGhpcy5yZWNvcmRWYWxpZGF0aW9uSGFuZGxlci5pbml0VmFsaWRhdG9ycyh0aGlzLnJlY29yZFN0b3JlLmdldFN0YWdpbmcoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgb2JzZXJ2YWJsZSBjYWNoZVxuICAgICAqL1xuICAgIHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jYWNoZSQgPSBudWxsO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKGRlZXBDbG9uZShpbml0aWFsU3RhdGUpKTtcbiAgICAgICAgdGhpcy5tZXRhZGF0YUxvYWRpbmdTdGF0ZS51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLm1ldGFkYXRhTG9hZGluZ1N0YXRlID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZWNvcmRTdG9yZS5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMucmVjb3JkU3RvcmUgPSBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFyIG9ic2VydmFibGUgY2FjaGVcbiAgICAgKi9cbiAgICBwdWJsaWMgY2xlYXJBdXRoQmFzZWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgc3RhZ2luZyByZWNvcmRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IFZpZXdNb2RlXG4gICAgICovXG4gICAgcHVibGljIGdldEJhc2VSZWNvcmQoKTogU2F2ZWRGaWx0ZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWNvcmRTdG9yZS5nZXRCYXNlUmVjb3JkKCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBHZXQgY3VycmVudCB2aWV3IG1vZGVcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IFZpZXdNb2RlXG4gICAgICovXG4gICAgcHVibGljIGdldE1vZGUoKTogVmlld01vZGUge1xuICAgICAgICBpZiAoIXRoaXMuaW50ZXJuYWxTdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxTdGF0ZS5tb2RlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBuZXcgbW9kZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1vZGUgVmlld01vZGVcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0TW9kZShtb2RlOiBWaWV3TW9kZSk6IHZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHsuLi50aGlzLmludGVybmFsU3RhdGUsIG1vZGV9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTYXZlIHJlY29yZFxuICAgICAqL1xuICAgIHB1YmxpYyBzYXZlKCk6IE9ic2VydmFibGU8UmVjb3JkPiB7XG4gICAgICAgIHRoaXMuYXBwU3RhdGVTdG9yZS51cGRhdGVMb2FkaW5nKGAke3RoaXMuaW50ZXJuYWxTdGF0ZS5tb2R1bGV9LXJlY29yZC1zYXZlYCwgdHJ1ZSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVjb3JkU3RvcmUuc2F2ZSgpLnBpcGUoXG4gICAgICAgICAgICBjYXRjaEVycm9yKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UuYWRkRGFuZ2VyTWVzc2FnZUJ5S2V5KCdMQkxfRVJST1JfU0FWSU5HJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mKHt9IGFzIFJlY29yZCk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGZpbmFsaXplKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcFN0YXRlU3RvcmUudXBkYXRlTG9hZGluZyhgJHt0aGlzLmludGVybmFsU3RhdGUubW9kdWxlfS1yZWNvcmQtc2F2ZWAsIGZhbHNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVmFsaWRhdGUgc2VhcmNoIGZpbHRlciBmaWVsZHNcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IE9ic2VydmFibGU8Ym9vbGVhbj5cbiAgICAgKi9cbiAgICBwdWJsaWMgdmFsaWRhdGUoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cbiAgICAgICAgcmV0dXJuIGZvcmtKb2luKFtcbiAgICAgICAgICAgIHRoaXMucmVjb3JkU3RvcmUudmFsaWRhdGUoKSxcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGVDcml0ZXJpYSgpXG4gICAgICAgIF0pLnBpcGUobWFwKChbZmllbGRzLCBjcml0ZXJpYV0pID0+IGZpZWxkcyAmJiBjcml0ZXJpYSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFZhbGlkYXRlIHNlYXJjaCBjdXJyZW50IGlucHV0XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBPYnNlcnZhYmxlPGJvb2xlYW4+XG4gICAgICovXG4gICAgcHVibGljIHZhbGlkYXRlQ3JpdGVyaWEoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cbiAgICAgICAgY29uc3QgY3VycmVudEZpbHRlciA9IHRoaXMucmVjb3JkU3RvcmUuZ2V0U3RhZ2luZygpIGFzIFNhdmVkRmlsdGVyO1xuICAgICAgICBjb25zdCBmb3JtR3JvdXAgPSBjdXJyZW50RmlsdGVyLmNyaXRlcmlhRm9ybUdyb3VwO1xuICAgICAgICBmb3JtR3JvdXAubWFya0FsbEFzVG91Y2hlZCgpO1xuICAgICAgICByZXR1cm4gZm9ybUdyb3VwLnN0YXR1c0NoYW5nZXMucGlwZShcbiAgICAgICAgICAgIHN0YXJ0V2l0aChmb3JtR3JvdXAuc3RhdHVzKSxcbiAgICAgICAgICAgIGZpbHRlcihzdGF0dXMgPT4gc3RhdHVzICE9PSAnUEVORElORycpLFxuICAgICAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgICAgIG1hcChzdGF0dXMgPT4gc3RhdHVzID09PSAnVkFMSUQnKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvYWQgLyByZWxvYWQgcmVjb3JkIHVzaW5nIGN1cnJlbnQgcGFnaW5hdGlvbiBhbmQgY3JpdGVyaWFcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gdXNlQ2FjaGUgaWYgdG8gdXNlIGNhY2hlXG4gICAgICogQHJldHVybnMge29iamVjdH0gT2JzZXJ2YWJsZTxSZWNvcmRWaWV3U3RhdGU+XG4gICAgICovXG4gICAgcHVibGljIGxvYWQodXNlQ2FjaGUgPSB0cnVlKTogT2JzZXJ2YWJsZTxSZWNvcmQ+IHtcbiAgICAgICAgdGhpcy5hcHBTdGF0ZVN0b3JlLnVwZGF0ZUxvYWRpbmcoYCR7dGhpcy5pbnRlcm5hbFN0YXRlLm1vZHVsZX0tcmVjb3JkLWZldGNoYCwgdHJ1ZSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVjb3JkU3RvcmUucmV0cmlldmVSZWNvcmQoXG4gICAgICAgICAgICB0aGlzLmludGVybmFsU3RhdGUubW9kdWxlLFxuICAgICAgICAgICAgdGhpcy5pbnRlcm5hbFN0YXRlLnJlY29yZElELFxuICAgICAgICAgICAgdXNlQ2FjaGVcbiAgICAgICAgKS5waXBlKFxuICAgICAgICAgICAgdGFwKChkYXRhOiBSZWNvcmQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcFN0YXRlU3RvcmUudXBkYXRlTG9hZGluZyhgJHt0aGlzLmludGVybmFsU3RhdGUubW9kdWxlfS1yZWNvcmQtZmV0Y2hgLCBmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5pbnRlcm5hbFN0YXRlLFxuICAgICAgICAgICAgICAgICAgICByZWNvcmRJRDogZGF0YS5pZCxcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlOiBkYXRhLm1vZHVsZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHZpZXcgZmllbGRzIG9ic2VydmFibGVcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IE9ic2VydmFibGU8c3RyaW5nW10+XG4gICAgICovXG4gICAgcHVibGljIGdldFZpZXdGaWVsZHNLZXlzJCgpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLm1ldGEkLnBpcGUobWFwKChyZWNvcmRNZXRhZGF0YTogUmVjb3JkVmlld01ldGFkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWVsZHM6IHN0cmluZ1tdID0gW107XG4gICAgICAgICAgICByZWNvcmRNZXRhZGF0YS5wYW5lbHMuZm9yRWFjaChwYW5lbCA9PiB7XG4gICAgICAgICAgICAgICAgcGFuZWwucm93cy5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJvdy5jb2xzLmZvckVhY2goY29sID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkcy5wdXNoKGNvbC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGZpZWxkcztcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB2aWV3IGZpZWxkcyBvYnNlcnZhYmxlXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBPYnNlcnZhYmxlPFZpZXdGaWVsZERlZmluaXRpb25bXT5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0Vmlld0ZpZWxkcyQoKTogT2JzZXJ2YWJsZTxWaWV3RmllbGREZWZpbml0aW9uW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWV0YSQucGlwZShtYXAoKHJlY29yZE1ldGFkYXRhOiBSZWNvcmRWaWV3TWV0YWRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkczogVmlld0ZpZWxkRGVmaW5pdGlvbltdID0gW107XG4gICAgICAgICAgICByZWNvcmRNZXRhZGF0YS5wYW5lbHMuZm9yRWFjaChwYW5lbCA9PiB7XG4gICAgICAgICAgICAgICAgcGFuZWwucm93cy5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJvdy5jb2xzLmZvckVhY2goY29sID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkcy5wdXNoKGNvbCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBmaWVsZHM7XG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UmVjb3JkTWV0YSQoKTogT2JzZXJ2YWJsZTxPYmplY3RNYXA+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWV0YSQucGlwZShtYXAoKHJlY29yZE1ldGFkYXRhOiBSZWNvcmRWaWV3TWV0YWRhdGEpID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZWNvcmRNZXRhZGF0YS5tZXRhZGF0YSB8fCB7fTtcbiAgICAgICAgfSkpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBzdGF0ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHN0YXRlIHRvIHNldFxuICAgICAqL1xuICAgIHByb3RlY3RlZCB1cGRhdGVTdGF0ZShzdGF0ZTogRmlsdGVyQ29udGFpbmVyU3RhdGUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdG9yZS5uZXh0KHRoaXMuaW50ZXJuYWxTdGF0ZSA9IHN0YXRlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgcmVjb3JkIHZpZXcgbWV0YWRhdGFcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IG1ldGFkYXRhIFJlY29yZFZpZXdNZXRhZGF0YVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRNZXRhZGF0YSgpOiBSZWNvcmRWaWV3TWV0YWRhdGEge1xuICAgICAgICBjb25zdCBtZXRhID0gdGhpcy5tZXRhLmdldCgpIHx8IHt9O1xuICAgICAgICByZXR1cm4gbWV0YS5yZWNvcmRWaWV3IHx8IHt9IGFzIFJlY29yZFZpZXdNZXRhZGF0YTtcbiAgICB9XG59XG4iXX0=