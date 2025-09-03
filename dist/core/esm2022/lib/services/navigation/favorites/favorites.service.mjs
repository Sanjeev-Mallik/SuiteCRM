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
import * as i0 from "@angular/core";
import * as i1 from "../../../store/metadata/metadata.store.service";
import * as i2 from "../../process/process.service";
export class FavoritesService {
    constructor(metadata, processService) {
        this.metadata = metadata;
        this.processService = processService;
    }
    /**
     * Public Api
     */
    /**
     * Build new favorite
     * @param module
     * @param id
     */
    build(module, id) {
        return deepClone({
            module: 'Favorite',
            type: 'Favorite',
            attributes: {
                parent_id: id,
                parent_type: module,
            },
        });
    }
    /**
     * Add favorite
     * @param module
     * @param favorite
     */
    add(module, favorite) {
        this.update(module, favorite, 'add');
    }
    /**
     * Add favorite
     * @param module
     * @param favorite
     */
    remove(module, favorite) {
        this.update(module, favorite, 'remove');
    }
    /**
     * Save favorite to backend
     * @param module
     * @param favorite
     * @param action
     */
    update(module, favorite, action) {
        const processType = 'update-favorite';
        const options = {
            favorite: favorite,
            action
        };
        setTimeout(() => {
            this.processService.submit(processType, options).pipe(take(1)).subscribe(result => {
                const savedFavorite = result?.data?.favorite ?? null;
                if (savedFavorite === null) {
                    this.removeFavoriteFromMetadata(module, favorite);
                    return;
                }
                this.addFavoriteToMetadata(savedFavorite, module);
            });
        }, 100);
    }
    /**
     *
     * @param savedFavorite
     * @param module
     * @private
     */
    addFavoriteToMetadata(savedFavorite, module) {
        const saved = {
            id: savedFavorite?.id ?? '',
            module: savedFavorite?.module ?? '',
            attributes: { ...(savedFavorite?.attributes ?? {}) },
        };
        const newItemId = savedFavorite?.attributes?.parent_id ?? '';
        const metadata = this.metadata.getModuleMeta(module);
        const current = metadata?.favorites ?? null;
        if (current) {
            let cleared = current.filter(item => ((item?.attributes?.parent_id ?? '') !== newItemId));
            cleared.unshift(saved);
            metadata.favorites = cleared;
        }
        this.metadata.setModuleMetadata(module, metadata);
    }
    /**
     * Remove favorite from metadata
     * @param module
     * @param favorite
     */
    removeFavoriteFromMetadata(module, favorite) {
        const metadata = this.metadata.getModuleMeta(module);
        const current = metadata?.favorites ?? null;
        const parentId = favorite?.attributes?.parent_id ?? null;
        if (!current || !current.length || !parentId) {
            return;
        }
        metadata.favorites = current.filter(item => ((item?.attributes?.parent_id ?? '') !== parentId));
        this.metadata.setModuleMetadata(module, metadata);
    }
    static { this.ɵfac = function FavoritesService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FavoritesService)(i0.ɵɵinject(i1.MetadataStore), i0.ɵɵinject(i2.ProcessService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FavoritesService, factory: FavoritesService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FavoritesService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.MetadataStore }, { type: i2.ProcessService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF2b3JpdGVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc2VydmljZXMvbmF2aWdhdGlvbi9mYXZvcml0ZXMvZmF2b3JpdGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGdEQUFnRCxDQUFDO0FBRTdFLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUM3RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDN0QsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7O0FBR3BDLE1BQU0sT0FBTyxnQkFBZ0I7SUFFekIsWUFDYyxRQUF1QixFQUN2QixjQUE4QjtRQUQ5QixhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUU1QyxDQUFDO0lBRUQ7O09BRUc7SUFFSDs7OztPQUlHO0lBQ0ksS0FBSyxDQUFDLE1BQWMsRUFBRSxFQUFVO1FBQ25DLE9BQU8sU0FBUyxDQUFDO1lBQ2IsTUFBTSxFQUFFLFVBQVU7WUFDbEIsSUFBSSxFQUFFLFVBQVU7WUFDaEIsVUFBVSxFQUFFO2dCQUNSLFNBQVMsRUFBRSxFQUFFO2dCQUNiLFdBQVcsRUFBRSxNQUFNO2FBQ3RCO1NBQ1EsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFHRDs7OztPQUlHO0lBQ0ksR0FBRyxDQUFDLE1BQWMsRUFBRSxRQUFrQjtRQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxNQUFN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SUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLElBQUksRUFBRSxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNoRyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN0RCxDQUFDO2lIQXJIUSxnQkFBZ0I7dUVBQWhCLGdCQUFnQixXQUFoQixnQkFBZ0IsbUJBREosTUFBTTs7aUZBQ2xCLGdCQUFnQjtjQUQ1QixVQUFVO2VBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjIgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNZXRhZGF0YVN0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9tZXRhZGF0YS9tZXRhZGF0YS5zdG9yZS5zZXJ2aWNlJztcbmltcG9ydCB7RmF2b3JpdGV9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9yZWNvcmQvZmF2b3JpdGVzLm1vZGVsJztcbmltcG9ydCB7ZGVlcENsb25lfSBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvb2JqZWN0LXV0aWxzJztcbmltcG9ydCB7UHJvY2Vzc1NlcnZpY2V9IGZyb20gJy4uLy4uL3Byb2Nlc3MvcHJvY2Vzcy5zZXJ2aWNlJztcbmltcG9ydCB7dGFrZX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBGYXZvcml0ZXNTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgbWV0YWRhdGE6IE1ldGFkYXRhU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBwcm9jZXNzU2VydmljZTogUHJvY2Vzc1NlcnZpY2VcbiAgICApIHtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQdWJsaWMgQXBpXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCBuZXcgZmF2b3JpdGVcbiAgICAgKiBAcGFyYW0gbW9kdWxlXG4gICAgICogQHBhcmFtIGlkXG4gICAgICovXG4gICAgcHVibGljIGJ1aWxkKG1vZHVsZTogc3RyaW5nLCBpZDogc3RyaW5nKTogRmF2b3JpdGUge1xuICAgICAgICByZXR1cm4gZGVlcENsb25lKHtcbiAgICAgICAgICAgIG1vZHVsZTogJ0Zhdm9yaXRlJyxcbiAgICAgICAgICAgIHR5cGU6ICdGYXZvcml0ZScsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICAgICAgcGFyZW50X2lkOiBpZCxcbiAgICAgICAgICAgICAgICBwYXJlbnRfdHlwZTogbW9kdWxlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSBhcyBGYXZvcml0ZSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBBZGQgZmF2b3JpdGVcbiAgICAgKiBAcGFyYW0gbW9kdWxlXG4gICAgICogQHBhcmFtIGZhdm9yaXRlXG4gICAgICovXG4gICAgcHVibGljIGFkZChtb2R1bGU6IHN0cmluZywgZmF2b3JpdGU6IEZhdm9yaXRlKTogdm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlKG1vZHVsZSwgZmF2b3JpdGUsICdhZGQnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgZmF2b3JpdGVcbiAgICAgKiBAcGFyYW0gbW9kdWxlXG4gICAgICogQHBhcmFtIGZhdm9yaXRlXG4gICAgICovXG4gICAgcHVibGljIHJlbW92ZShtb2R1bGU6IHN0cmluZywgZmF2b3JpdGU6IEZhdm9yaXRlKTogdm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlKG1vZHVsZSwgZmF2b3JpdGUsICdyZW1vdmUnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTYXZlIGZhdm9yaXRlIHRvIGJhY2tlbmRcbiAgICAgKiBAcGFyYW0gbW9kdWxlXG4gICAgICogQHBhcmFtIGZhdm9yaXRlXG4gICAgICogQHBhcmFtIGFjdGlvblxuICAgICAqL1xuICAgIHByb3RlY3RlZCB1cGRhdGUobW9kdWxlOiBzdHJpbmcsIGZhdm9yaXRlOiBGYXZvcml0ZSwgYWN0aW9uOiBzdHJpbmcpOiB2b2lkIHtcblxuICAgICAgICBjb25zdCBwcm9jZXNzVHlwZSA9ICd1cGRhdGUtZmF2b3JpdGUnO1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBmYXZvcml0ZTogZmF2b3JpdGUsXG4gICAgICAgICAgICBhY3Rpb25cbiAgICAgICAgfTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc1NlcnZpY2Uuc3VibWl0KHByb2Nlc3NUeXBlLCBvcHRpb25zKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc2F2ZWRGYXZvcml0ZSA9IHJlc3VsdD8uZGF0YT8uZmF2b3JpdGUgPz8gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoc2F2ZWRGYXZvcml0ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUZhdm9yaXRlRnJvbU1ldGFkYXRhKG1vZHVsZSwgZmF2b3JpdGUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuYWRkRmF2b3JpdGVUb01ldGFkYXRhKHNhdmVkRmF2b3JpdGUsIG1vZHVsZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgMTAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzYXZlZEZhdm9yaXRlXG4gICAgICogQHBhcmFtIG1vZHVsZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFkZEZhdm9yaXRlVG9NZXRhZGF0YShzYXZlZEZhdm9yaXRlOiBGYXZvcml0ZSwgbW9kdWxlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2F2ZWQgPSB7XG4gICAgICAgICAgICBpZDogc2F2ZWRGYXZvcml0ZT8uaWQgPz8gJycsXG4gICAgICAgICAgICBtb2R1bGU6IHNhdmVkRmF2b3JpdGU/Lm1vZHVsZSA/PyAnJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHsuLi4oc2F2ZWRGYXZvcml0ZT8uYXR0cmlidXRlcyA/PyB7fSl9LFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG5ld0l0ZW1JZCA9IHNhdmVkRmF2b3JpdGU/LmF0dHJpYnV0ZXM/LnBhcmVudF9pZCA/PyAnJztcbiAgICAgICAgY29uc3QgbWV0YWRhdGEgPSB0aGlzLm1ldGFkYXRhLmdldE1vZHVsZU1ldGEobW9kdWxlKTtcblxuICAgICAgICBjb25zdCBjdXJyZW50ID0gbWV0YWRhdGE/LmZhdm9yaXRlcyA/PyBudWxsO1xuICAgICAgICBpZiAoY3VycmVudCkge1xuICAgICAgICAgICAgbGV0IGNsZWFyZWQgPSBjdXJyZW50LmZpbHRlcihpdGVtID0+ICgoaXRlbT8uYXR0cmlidXRlcz8ucGFyZW50X2lkID8/ICcnKSAhPT0gbmV3SXRlbUlkKSk7XG4gICAgICAgICAgICBjbGVhcmVkLnVuc2hpZnQoc2F2ZWQpO1xuICAgICAgICAgICAgbWV0YWRhdGEuZmF2b3JpdGVzID0gY2xlYXJlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubWV0YWRhdGEuc2V0TW9kdWxlTWV0YWRhdGEobW9kdWxlLCBtZXRhZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGZhdm9yaXRlIGZyb20gbWV0YWRhdGFcbiAgICAgKiBAcGFyYW0gbW9kdWxlXG4gICAgICogQHBhcmFtIGZhdm9yaXRlXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHJlbW92ZUZhdm9yaXRlRnJvbU1ldGFkYXRhKG1vZHVsZTogc3RyaW5nLCBmYXZvcml0ZTogRmF2b3JpdGUpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbWV0YWRhdGEgPSB0aGlzLm1ldGFkYXRhLmdldE1vZHVsZU1ldGEobW9kdWxlKTtcblxuICAgICAgICBjb25zdCBjdXJyZW50ID0gbWV0YWRhdGE/LmZhdm9yaXRlcyA/PyBudWxsO1xuICAgICAgICBjb25zdCBwYXJlbnRJZCA9IGZhdm9yaXRlPy5hdHRyaWJ1dGVzPy5wYXJlbnRfaWQgPz8gbnVsbDtcbiAgICAgICAgaWYgKCFjdXJyZW50IHx8ICFjdXJyZW50Lmxlbmd0aCB8fCAhcGFyZW50SWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGFkYXRhLmZhdm9yaXRlcyA9IGN1cnJlbnQuZmlsdGVyKGl0ZW0gPT4gKChpdGVtPy5hdHRyaWJ1dGVzPy5wYXJlbnRfaWQgPz8gJycpICE9PSBwYXJlbnRJZCkpO1xuICAgICAgICB0aGlzLm1ldGFkYXRhLnNldE1vZHVsZU1ldGFkYXRhKG1vZHVsZSwgbWV0YWRhdGEpO1xuICAgIH1cbn1cbiJdfQ==