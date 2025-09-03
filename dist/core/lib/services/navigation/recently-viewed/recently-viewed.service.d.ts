import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { RecentlyViewed } from '../../../common/record/recently-viewed.model';
import { ProcessService } from '../../process/process.service';
import { ActivatedRouteSnapshot } from '@angular/router';
import { GlobalRecentlyViewedStore } from "../../../store/global-recently-viewed/global-recently-viewed.store";
import { ModuleNameMapper } from "../module-name-mapper/module-name-mapper.service";
import { AppMetadataStore } from "../../../store/app-metadata/app-metadata.store.service";
import { AppStateStore } from "../../../store/app-state/app-state.store";
import { SystemConfigStore } from "../../../store/system-config/system-config.store";
import * as i0 from "@angular/core";
export declare class RecentlyViewedService {
    protected metadata: MetadataStore;
    protected globalRecentlyViewedStore: GlobalRecentlyViewedStore;
    protected processService: ProcessService;
    protected moduleNameMapper: ModuleNameMapper;
    protected appMetadataStore: AppMetadataStore;
    protected systemConfigs: SystemConfigStore;
    protected appStateStore: AppStateStore;
    constructor(metadata: MetadataStore, globalRecentlyViewedStore: GlobalRecentlyViewedStore, processService: ProcessService, moduleNameMapper: ModuleNameMapper, appMetadataStore: AppMetadataStore, systemConfigs: SystemConfigStore, appStateStore: AppStateStore);
    /**
     * Public Api
     */
    /**
     * On navigation add
     * @param module
     * @param route
     */
    onNavigationAdd(module: string, route: ActivatedRouteSnapshot): void;
    /**
     * Build new recently viewed
     * @param module
     * @param id
     * @param view
     */
    buildRecentlyViewed(module: string, id: string, view?: string): RecentlyViewed;
    /**
     * Add recently viewed
     * @param module
     * @param viewed
     */
    addRecentlyViewed(module: string, viewed: RecentlyViewed): void;
    /**
     * Save recently viewed to backend
     * @param module
     * @param viewed
     */
    protected saveRecentlyViewed(module: string, viewed: RecentlyViewed): void;
    conditionalGlobalRefresh(view?: string): void;
    getModule(): string;
    getView(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecentlyViewedService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RecentlyViewedService>;
}
