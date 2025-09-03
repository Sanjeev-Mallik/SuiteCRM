import { BehaviorSubject, Observable, Subscription } from "rxjs";
import { SystemConfigStore } from "../../../../store/system-config/system-config.store";
import { UserPreferenceStore } from "../../../../store/user-preference/user-preference.store";
import { RecordListStore } from "../../../../store/record-list/record-list.store";
import { RecordListStoreFactory } from "../../../../store/record-list/record-list.store.factory";
import { SavedFilterMap } from "../../../../store/saved-filters/saved-filter.model";
import { LocalStorageService } from "../../../../services/local-storage/local-storage.service";
import { RecordPaginationService } from "./record-pagination.service";
import { RecordPaginationModel } from "./record-pagination.model";
import { ObjectMap } from "../../../../common/types/object-map";
import { Pagination, SortingSelection } from "../../../../common/views/list/list-navigation.model";
import { SearchCriteria } from "../../../../common/views/list/search-criteria.model";
import * as i0 from "@angular/core";
export interface RecordPaginationState {
    paginationEnabled?: boolean;
    recordIds?: ObjectMap[];
    pagination?: Pagination;
}
export declare class RecordPaginationStore {
    protected preferences: UserPreferenceStore;
    protected systemConfigStore: SystemConfigStore;
    protected listStoreFactory: RecordListStoreFactory;
    protected localStorageService: LocalStorageService;
    protected recordPaginationService: RecordPaginationService;
    recordListStore: RecordListStore;
    /**
     * Public long-lived observable streams
     */
    recordIds$: Observable<ObjectMap[]>;
    pagination$: Observable<Pagination>;
    paginationEnabled$: Observable<boolean>;
    protected internalState: RecordPaginationState;
    protected cache$: Observable<any>;
    protected store: BehaviorSubject<RecordPaginationState>;
    protected state$: Observable<RecordPaginationState>;
    protected subs: Subscription[];
    constructor(preferences: UserPreferenceStore, systemConfigStore: SystemConfigStore, listStoreFactory: RecordListStoreFactory, localStorageService: LocalStorageService, recordPaginationService: RecordPaginationService);
    clear(): void;
    init(): void;
    protected enableRecordPagination(): void;
    loadDataLocalStorage(): void;
    protected getRecordListPreference(): RecordPaginationModel;
    protected checkPaginationExist(data: RecordPaginationState): void;
    loadPreference(module: string, storageKey: string, pageKey?: string): any;
    protected getPreferenceKey(storageKey: string): string;
    protected loadCurrentPagination(module: string): void;
    protected loadCurrentSort(module: string): void;
    protected loadCurrentFilter(module: string): void;
    protected setFilters(filters: SavedFilterMap, reload?: boolean, sort?: SortingSelection): void;
    protected updateSearchCriteria(filters: SavedFilterMap, reload?: boolean): void;
    protected mergeCriteria(filters: SavedFilterMap): SearchCriteria;
    getModule(): string;
    getCurrentPage(): number;
    getPageSize(): number;
    getRecordsCount(): number;
    protected updateState(state: RecordPaginationState): void;
    protected set(state: RecordPaginationState): void;
    protected isCached(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecordPaginationStore, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RecordPaginationStore>;
}
