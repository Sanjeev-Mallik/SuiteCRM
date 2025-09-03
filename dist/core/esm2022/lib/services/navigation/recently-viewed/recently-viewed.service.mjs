/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2022 SalesAgility Ltd.
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
import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { deepClone } from '../../../common/utils/object-utils';
import { ProcessService } from '../../process/process.service';
import { take } from 'rxjs/operators';
import { GlobalRecentlyViewedStore } from "../../../store/global-recently-viewed/global-recently-viewed.store";
import { ModuleNameMapper } from "../module-name-mapper/module-name-mapper.service";
import { AppMetadataStore } from "../../../store/app-metadata/app-metadata.store.service";
import { AppStateStore } from "../../../store/app-state/app-state.store";
import { SystemConfigStore } from "../../../store/system-config/system-config.store";
import * as i0 from "@angular/core";
import * as i1 from "../../../store/metadata/metadata.store.service";
import * as i2 from "../../../store/global-recently-viewed/global-recently-viewed.store";
import * as i3 from "../../process/process.service";
import * as i4 from "../module-name-mapper/module-name-mapper.service";
import * as i5 from "../../../store/app-metadata/app-metadata.store.service";
import * as i6 from "../../../store/system-config/system-config.store";
import * as i7 from "../../../store/app-state/app-state.store";
export class RecentlyViewedService {
    constructor(metadata, globalRecentlyViewedStore, processService, moduleNameMapper, appMetadataStore, systemConfigs, appStateStore) {
        this.metadata = metadata;
        this.globalRecentlyViewedStore = globalRecentlyViewedStore;
        this.processService = processService;
        this.moduleNameMapper = moduleNameMapper;
        this.appMetadataStore = appMetadataStore;
        this.systemConfigs = systemConfigs;
        this.appStateStore = appStateStore;
    }
    /**
     * Public Api
     */
    /**
     * On navigation add
     * @param module
     * @param route
     */
    onNavigationAdd(module, route) {
        let mode = 'detail';
        const data = (route && route.data) || {};
        if (data.mode) {
            mode = data.mode;
        }
        const recordId = route?.params?.record ?? null;
        if (recordId && mode !== 'create') {
            const recentlyViewed = this.buildRecentlyViewed(module, recordId);
            this.addRecentlyViewed(module, recentlyViewed);
        }
    }
    /**
     * Build new recently viewed
     * @param module
     * @param id
     * @param view
     */
    buildRecentlyViewed(module, id, view = 'detailview') {
        module = this.moduleNameMapper.toLegacy(module);
        return deepClone({
            module: 'Tracker',
            type: 'Tracker',
            attributes: {
                module_name: module ?? '',
                item_id: id ?? '',
                action: view ?? '',
            },
        });
    }
    /**
     * Add recently viewed
     * @param module
     * @param viewed
     */
    addRecentlyViewed(module, viewed) {
        this.saveRecentlyViewed(module, viewed);
    }
    /**
     * Save recently viewed to backend
     * @param module
     * @param viewed
     */
    saveRecentlyViewed(module, viewed) {
        const processType = 'add-recently-viewed';
        const options = {
            recentlyViewed: viewed
        };
        setTimeout(() => {
            this.processService.submit(processType, options).pipe(take(1)).subscribe(result => {
                const saved = {
                    id: viewed.id ?? '',
                    module: viewed.module ?? '',
                    attributes: { ...(viewed.attributes ?? {}) },
                };
                const tracker = result?.data?.tracker ?? null;
                if (tracker === null) {
                    return;
                }
                saved.attributes.item_summary = tracker.item_summary;
                const newItemId = saved?.attributes?.item_id ?? '';
                const metadata = this.metadata.getModuleMeta(module);
                const current = metadata?.recentlyViewed ?? null;
                if (current) {
                    let cleared = current.filter(item => ((item?.attributes?.item_id ?? '') !== newItemId));
                    cleared.unshift(saved);
                    metadata.recentlyViewed = cleared;
                }
                this.globalRecentlyViewedStore.addToState(saved);
                this.metadata.setModuleMetadata(module, metadata);
            });
        }, 500);
    }
    conditionalGlobalRefresh(view = '') {
        const reloadActions = this.systemConfigs.getUi('global_recently_viewed_reload_actions') ?? null;
        const previousModule = this.getModule();
        if (!view) {
            view = this.getView();
        }
        if (!reloadActions || !previousModule) {
            return;
        }
        const actions = reloadActions[previousModule] ?? reloadActions['any'] ?? [];
        if (!actions || !actions.length) {
            return;
        }
        const reload = actions.some(action => {
            return action === 'any' || action === view;
        });
        if (reload) {
            this.appMetadataStore.load(this.getModule(), ['globalRecentlyViewed'], false).pipe(take(1)).subscribe();
        }
    }
    getModule() {
        return this.appStateStore.getModule();
    }
    getView() {
        return this.appStateStore.getView();
    }
    static { this.ɵfac = function RecentlyViewedService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RecentlyViewedService)(i0.ɵɵinject(i1.MetadataStore), i0.ɵɵinject(i2.GlobalRecentlyViewedStore), i0.ɵɵinject(i3.ProcessService), i0.ɵɵinject(i4.ModuleNameMapper), i0.ɵɵinject(i5.AppMetadataStore), i0.ɵɵinject(i6.SystemConfigStore), i0.ɵɵinject(i7.AppStateStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecentlyViewedService, factory: RecentlyViewedService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecentlyViewedService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.MetadataStore }, { type: i2.GlobalRecentlyViewedStore }, { type: i3.ProcessService }, { type: i4.ModuleNameMapper }, { type: i5.AppMetadataStore }, { type: i6.SystemConfigStore }, { type: i7.AppStateStore }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjZW50bHktdmlld2VkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc2VydmljZXMvbmF2aWdhdGlvbi9yZWNlbnRseS12aWV3ZWQvcmVjZW50bHktdmlld2VkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUNILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGdEQUFnRCxDQUFDO0FBRTdFLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUU3RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDN0QsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRXBDLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLG9FQUFvRSxDQUFDO0FBQzdHLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGtEQUFrRCxDQUFDO0FBQ2xGLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHdEQUF3RCxDQUFDO0FBQ3hGLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwwQ0FBMEMsQ0FBQztBQUN2RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxrREFBa0QsQ0FBQzs7Ozs7Ozs7O0FBR25GLE1BQU0sT0FBTyxxQkFBcUI7SUFFOUIsWUFDYyxRQUF1QixFQUN2Qix5QkFBb0QsRUFDcEQsY0FBOEIsRUFDOUIsZ0JBQWtDLEVBQ2xDLGdCQUFrQyxFQUNsQyxhQUFnQyxFQUNoQyxhQUE0QjtRQU41QixhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFDcEQsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHFCQUFnQixH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TyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzlCLE9BQU87UUFDWCxDQUFDO1FBRUQsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNqQyxPQUFPLE1BQU0sS0FBSyxLQUFLLElBQUksTUFBTSxLQUFLLElBQUksQ0FBQztRQUMvQyxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksTUFBTSxFQUFFLENBQUM7WUFDVCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLHNCQUFzQixDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRTVHLENBQUM7SUFDTCxDQUFDO0lBRU0sU0FBUztRQUNaLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRU0sT0FBTztRQUNWLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QyxDQUFDO3NIQXBKUSxxQkFBcUI7dUVBQXJCLHFCQUFxQixXQUFyQixxQkFBcUIsbUJBRFQsTUFBTTs7aUZBQ2xCLHFCQUFxQjtjQURqQyxVQUFVO2VBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjIgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWV0YWRhdGFTdG9yZX0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvbWV0YWRhdGEvbWV0YWRhdGEuc3RvcmUuc2VydmljZSc7XG5pbXBvcnQge1JlY2VudGx5Vmlld2VkfSBmcm9tICcuLi8uLi8uLi9jb21tb24vcmVjb3JkL3JlY2VudGx5LXZpZXdlZC5tb2RlbCc7XG5pbXBvcnQge2RlZXBDbG9uZX0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL29iamVjdC11dGlscyc7XG5pbXBvcnQge1ZpZXdNb2RlfSBmcm9tICcuLi8uLi8uLi9jb21tb24vdmlld3Mvdmlldy5tb2RlbCc7XG5pbXBvcnQge1Byb2Nlc3NTZXJ2aWNlfSBmcm9tICcuLi8uLi9wcm9jZXNzL3Byb2Nlc3Muc2VydmljZSc7XG5pbXBvcnQge3Rha2V9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7QWN0aXZhdGVkUm91dGVTbmFwc2hvdH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7R2xvYmFsUmVjZW50bHlWaWV3ZWRTdG9yZX0gZnJvbSBcIi4uLy4uLy4uL3N0b3JlL2dsb2JhbC1yZWNlbnRseS12aWV3ZWQvZ2xvYmFsLXJlY2VudGx5LXZpZXdlZC5zdG9yZVwiO1xuaW1wb3J0IHtNb2R1bGVOYW1lTWFwcGVyfSBmcm9tIFwiLi4vbW9kdWxlLW5hbWUtbWFwcGVyL21vZHVsZS1uYW1lLW1hcHBlci5zZXJ2aWNlXCI7XG5pbXBvcnQge0FwcE1ldGFkYXRhU3RvcmV9IGZyb20gXCIuLi8uLi8uLi9zdG9yZS9hcHAtbWV0YWRhdGEvYXBwLW1ldGFkYXRhLnN0b3JlLnNlcnZpY2VcIjtcbmltcG9ydCB7QXBwU3RhdGVTdG9yZX0gZnJvbSBcIi4uLy4uLy4uL3N0b3JlL2FwcC1zdGF0ZS9hcHAtc3RhdGUuc3RvcmVcIjtcbmltcG9ydCB7U3lzdGVtQ29uZmlnU3RvcmV9IGZyb20gXCIuLi8uLi8uLi9zdG9yZS9zeXN0ZW0tY29uZmlnL3N5c3RlbS1jb25maWcuc3RvcmVcIjtcblxuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXG5leHBvcnQgY2xhc3MgUmVjZW50bHlWaWV3ZWRTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgbWV0YWRhdGE6IE1ldGFkYXRhU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBnbG9iYWxSZWNlbnRseVZpZXdlZFN0b3JlOiBHbG9iYWxSZWNlbnRseVZpZXdlZFN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgcHJvY2Vzc1NlcnZpY2U6IFByb2Nlc3NTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgbW9kdWxlTmFtZU1hcHBlcjogTW9kdWxlTmFtZU1hcHBlcixcbiAgICAgICAgcHJvdGVjdGVkIGFwcE1ldGFkYXRhU3RvcmU6IEFwcE1ldGFkYXRhU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBzeXN0ZW1Db25maWdzOiBTeXN0ZW1Db25maWdTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGFwcFN0YXRlU3RvcmU6IEFwcFN0YXRlU3RvcmVcbiAgICApIHtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQdWJsaWMgQXBpXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBPbiBuYXZpZ2F0aW9uIGFkZFxuICAgICAqIEBwYXJhbSBtb2R1bGVcbiAgICAgKiBAcGFyYW0gcm91dGVcbiAgICAgKi9cbiAgICBwdWJsaWMgb25OYXZpZ2F0aW9uQWRkKG1vZHVsZTogc3RyaW5nLCByb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCkge1xuXG4gICAgICAgIGxldCBtb2RlID0gJ2RldGFpbCcgYXMgVmlld01vZGU7XG4gICAgICAgIGNvbnN0IGRhdGEgPSAocm91dGUgJiYgcm91dGUuZGF0YSkgfHwge307XG5cbiAgICAgICAgaWYgKGRhdGEubW9kZSkge1xuICAgICAgICAgICAgbW9kZSA9IGRhdGEubW9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlY29yZElkID0gcm91dGU/LnBhcmFtcz8ucmVjb3JkID8/IG51bGw7XG5cbiAgICAgICAgaWYgKHJlY29yZElkICYmIG1vZGUgIT09ICdjcmVhdGUnKSB7XG4gICAgICAgICAgICBjb25zdCByZWNlbnRseVZpZXdlZCA9IHRoaXMuYnVpbGRSZWNlbnRseVZpZXdlZChtb2R1bGUsIHJlY29yZElkKTtcbiAgICAgICAgICAgIHRoaXMuYWRkUmVjZW50bHlWaWV3ZWQobW9kdWxlLCByZWNlbnRseVZpZXdlZClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIG5ldyByZWNlbnRseSB2aWV3ZWRcbiAgICAgKiBAcGFyYW0gbW9kdWxlXG4gICAgICogQHBhcmFtIGlkXG4gICAgICogQHBhcmFtIHZpZXdcbiAgICAgKi9cbiAgICBwdWJsaWMgYnVpbGRSZWNlbnRseVZpZXdlZChtb2R1bGU6IHN0cmluZywgaWQ6IHN0cmluZywgdmlldyA9ICdkZXRhaWx2aWV3Jyk6IFJlY2VudGx5Vmlld2VkIHtcbiAgICAgICAgbW9kdWxlID0gdGhpcy5tb2R1bGVOYW1lTWFwcGVyLnRvTGVnYWN5KG1vZHVsZSk7XG4gICAgICAgIHJldHVybiBkZWVwQ2xvbmUoe1xuICAgICAgICAgICAgbW9kdWxlOiAnVHJhY2tlcicsXG4gICAgICAgICAgICB0eXBlOiAnVHJhY2tlcicsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICAgICAgbW9kdWxlX25hbWU6IG1vZHVsZSA/PyAnJyxcbiAgICAgICAgICAgICAgICBpdGVtX2lkOiBpZCA/PyAnJyxcbiAgICAgICAgICAgICAgICBhY3Rpb246IHZpZXcgPz8gJycsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9IGFzIFJlY2VudGx5Vmlld2VkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgcmVjZW50bHkgdmlld2VkXG4gICAgICogQHBhcmFtIG1vZHVsZVxuICAgICAqIEBwYXJhbSB2aWV3ZWRcbiAgICAgKi9cbiAgICBwdWJsaWMgYWRkUmVjZW50bHlWaWV3ZWQobW9kdWxlOiBzdHJpbmcsIHZpZXdlZDogUmVjZW50bHlWaWV3ZWQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zYXZlUmVjZW50bHlWaWV3ZWQobW9kdWxlLCB2aWV3ZWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNhdmUgcmVjZW50bHkgdmlld2VkIHRvIGJhY2tlbmRcbiAgICAgKiBAcGFyYW0gbW9kdWxlXG4gICAgICogQHBhcmFtIHZpZXdlZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBzYXZlUmVjZW50bHlWaWV3ZWQobW9kdWxlOiBzdHJpbmcsIHZpZXdlZDogUmVjZW50bHlWaWV3ZWQpOiB2b2lkIHtcblxuICAgICAgICBjb25zdCBwcm9jZXNzVHlwZSA9ICdhZGQtcmVjZW50bHktdmlld2VkJztcblxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgcmVjZW50bHlWaWV3ZWQ6IHZpZXdlZFxuICAgICAgICB9O1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzU2VydmljZS5zdWJtaXQocHJvY2Vzc1R5cGUsIG9wdGlvbnMpLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzYXZlZCA9IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHZpZXdlZC5pZCA/PyAnJyxcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlOiB2aWV3ZWQubW9kdWxlID8/ICcnLFxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB7Li4uKHZpZXdlZC5hdHRyaWJ1dGVzID8/IHt9KX0sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb25zdCB0cmFja2VyID0gcmVzdWx0Py5kYXRhPy50cmFja2VyID8/IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKHRyYWNrZXIgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNhdmVkLmF0dHJpYnV0ZXMuaXRlbV9zdW1tYXJ5ID0gdHJhY2tlci5pdGVtX3N1bW1hcnk7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3SXRlbUlkID0gc2F2ZWQ/LmF0dHJpYnV0ZXM/Lml0ZW1faWQgPz8gJyc7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBtZXRhZGF0YSA9IHRoaXMubWV0YWRhdGEuZ2V0TW9kdWxlTWV0YShtb2R1bGUpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IG1ldGFkYXRhPy5yZWNlbnRseVZpZXdlZCA/PyBudWxsO1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjbGVhcmVkID0gY3VycmVudC5maWx0ZXIoaXRlbSA9PiAoKGl0ZW0/LmF0dHJpYnV0ZXM/Lml0ZW1faWQgPz8gJycpICE9PSBuZXdJdGVtSWQpKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJlZC51bnNoaWZ0KHNhdmVkKTtcbiAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGEucmVjZW50bHlWaWV3ZWQgPSBjbGVhcmVkO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuZ2xvYmFsUmVjZW50bHlWaWV3ZWRTdG9yZS5hZGRUb1N0YXRlKHNhdmVkKTtcblxuICAgICAgICAgICAgICAgIHRoaXMubWV0YWRhdGEuc2V0TW9kdWxlTWV0YWRhdGEobW9kdWxlLCBtZXRhZGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgNTAwKTtcbiAgICB9XG5cbiAgICBjb25kaXRpb25hbEdsb2JhbFJlZnJlc2godmlldzogc3RyaW5nID0gJycpOiB2b2lkIHtcblxuICAgICAgICBjb25zdCByZWxvYWRBY3Rpb25zID0gdGhpcy5zeXN0ZW1Db25maWdzLmdldFVpKCdnbG9iYWxfcmVjZW50bHlfdmlld2VkX3JlbG9hZF9hY3Rpb25zJykgPz8gbnVsbDtcbiAgICAgICAgY29uc3QgcHJldmlvdXNNb2R1bGUgPSB0aGlzLmdldE1vZHVsZSgpO1xuXG4gICAgICAgIGlmICghdmlldykge1xuICAgICAgICAgICAgdmlldyA9IHRoaXMuZ2V0VmlldygpO1xuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoIXJlbG9hZEFjdGlvbnMgfHwgIXByZXZpb3VzTW9kdWxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhY3Rpb25zOiBzdHJpbmdbXSA9IHJlbG9hZEFjdGlvbnNbcHJldmlvdXNNb2R1bGVdID8/IHJlbG9hZEFjdGlvbnNbJ2FueSddID8/IFtdO1xuXG4gICAgICAgIGlmICghYWN0aW9ucyB8fCAhYWN0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlbG9hZCA9IGFjdGlvbnMuc29tZShhY3Rpb24gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbiA9PT0gJ2FueScgfHwgYWN0aW9uID09PSB2aWV3O1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmVsb2FkKSB7XG4gICAgICAgICAgICB0aGlzLmFwcE1ldGFkYXRhU3RvcmUubG9hZCh0aGlzLmdldE1vZHVsZSgpLCBbJ2dsb2JhbFJlY2VudGx5Vmlld2VkJ10sIGZhbHNlKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgpO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TW9kdWxlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmFwcFN0YXRlU3RvcmUuZ2V0TW9kdWxlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFZpZXcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBwU3RhdGVTdG9yZS5nZXRWaWV3KCk7XG4gICAgfVxuXG59XG4iXX0=