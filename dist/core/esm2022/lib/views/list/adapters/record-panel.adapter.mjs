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
import { ListViewStore } from '../store/list-view/list-view.store';
import { ListViewRecordPanelActionAdapterFactory } from './record-panel-actions.adapter.factory';
import { RecordPanelStoreFactory } from '../../../containers/record-panel/store/record-panel/record-panel.store.factory';
import { RecordManager } from '../../../services/record/record.manager';
import * as i0 from "@angular/core";
import * as i1 from "../store/list-view/list-view.store";
import * as i2 from "../../../containers/record-panel/store/record-panel/record-panel.store.factory";
import * as i3 from "./record-panel-actions.adapter.factory";
import * as i4 from "../../../services/record/record.manager";
export class RecordPanelAdapter {
    constructor(store, recordPanelStoreFactory, actionAdapterFactory, recordManager) {
        this.store = store;
        this.recordPanelStoreFactory = recordPanelStoreFactory;
        this.actionAdapterFactory = actionAdapterFactory;
        this.recordManager = recordManager;
    }
    getConfig() {
        const store = this.createStore();
        return {
            module: this.getModule(),
            title: (this.store.recordPanelConfig && this.store.recordPanelConfig.title) || '',
            store: store,
            meta: this.store.recordPanelConfig,
            actions: this.createActionAdapter(store),
            onClose: () => {
                this.store.closeRecordPanel();
            },
        };
    }
    /**
     * Get configured module
     * @returns {string} module
     */
    getModule() {
        return this.store.recordPanelConfig.module || this.store.getModuleName();
    }
    /**
     * Get configured view mode
     * @returns {string} ViewMode
     */
    getViewMode() {
        return this.store.recordPanelConfig.mode || 'edit';
    }
    /**
     * Create and init store
     * @returns {object} RecordPanelStore
     */
    createStore() {
        const store = this.recordPanelStoreFactory.create();
        const blankRecord = this.recordManager.buildEmptyRecord(this.getModule());
        store.setMetadata(this.store.recordPanelConfig);
        store.initRecord(blankRecord, this.getViewMode(), false);
        return store;
    }
    /**
     * Create action adapter
     * @returns {object} BaseRecordActionsAdapter
     */
    createActionAdapter(store) {
        return this.actionAdapterFactory.create(store, this.store);
    }
    static { this.ɵfac = function RecordPanelAdapter_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RecordPanelAdapter)(i0.ɵɵinject(i1.ListViewStore), i0.ɵɵinject(i2.RecordPanelStoreFactory), i0.ɵɵinject(i3.ListViewRecordPanelActionAdapterFactory), i0.ɵɵinject(i4.RecordManager)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordPanelAdapter, factory: RecordPanelAdapter.ɵfac }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordPanelAdapter, [{
        type: Injectable
    }], () => [{ type: i1.ListViewStore }, { type: i2.RecordPanelStoreFactory }, { type: i3.ListViewRecordPanelActionAdapterFactory }, { type: i4.RecordManager }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLXBhbmVsLmFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvbGlzdC9hZGFwdGVycy9yZWNvcmQtcGFuZWwuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFPakUsT0FBTyxFQUFDLHVDQUF1QyxFQUFDLE1BQU0sd0NBQXdDLENBQUM7QUFDL0YsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sZ0ZBQWdGLENBQUM7QUFFdkgsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHlDQUF5QyxDQUFDOzs7Ozs7QUFHdEUsTUFBTSxPQUFPLGtCQUFrQjtJQUUzQixZQUNjLEtBQW9CLEVBQ3BCLHVCQUFnRCxFQUNoRCxvQkFBNkQsRUFDN0QsYUFBNEI7UUFINUIsVUFBSyxHQUFMLEtBQUssQ0FBZTtRQUNwQiw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBeUM7UUFDN0Qsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFFMUMsQ0FBQztJQUVELFNBQVM7UUFDTCxNQUFNLEtBQUssR0FBcUIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBR25ELE9BQU87WUFDSCxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUV4QixLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTtZQUNqRixLQUFLLEVBQUUsS0FBSztZQUNaLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQjtZQUVsQyxPQUFPLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQztZQUV4QyxPQUFPLEVBQUUsR0FBUyxFQUFFO2dCQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDbEMsQ0FBQztTQUVpQixDQUFDO0lBQzNCLENBQUM7SUFFRDs7O09BR0c7SUFDTyxTQUFTO1FBQ2YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzdFLENBQUM7SUFFRDs7O09BR0c7SUFDTyxXQUFXO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLElBQUksTUFBa0IsQ0FBQztJQUNuRSxDQUFDO0lBRUQ7OztPQUdHO0lBQ08sV0FBVztRQUNqQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDcEQsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUUxRSxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNoRCxLQUFLLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFekQsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVEOzs7T0FHRztJQUNPLG1CQUFtQixDQUFDLEtBQXVCO1FBQ2pELE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FDbkMsS0FBSyxFQUNMLElBQUksQ0FBQyxLQUFLLENBQ2IsQ0FBQTtJQUNMLENBQUM7bUhBckVRLGtCQUFrQjt1RUFBbEIsa0JBQWtCLFdBQWxCLGtCQUFrQjs7aUZBQWxCLGtCQUFrQjtjQUQ5QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtMaXN0Vmlld1N0b3JlfSBmcm9tICcuLi9zdG9yZS9saXN0LXZpZXcvbGlzdC12aWV3LnN0b3JlJztcbmltcG9ydCB7XG4gICAgUmVjb3JkUGFuZWxBY3Rpb25EYXRhLFxuICAgIFJlY29yZFBhbmVsQ29uZmlnXG59IGZyb20gJy4uLy4uLy4uL2NvbnRhaW5lcnMvcmVjb3JkLXBhbmVsL2NvbXBvbmVudHMvcmVjb3JkLXBhbmVsL3JlY29yZC1wYW5lbC5tb2RlbCc7XG5pbXBvcnQge1JlY29yZFBhbmVsU3RvcmV9IGZyb20gJy4uLy4uLy4uL2NvbnRhaW5lcnMvcmVjb3JkLXBhbmVsL3N0b3JlL3JlY29yZC1wYW5lbC9yZWNvcmQtcGFuZWwuc3RvcmUnO1xuaW1wb3J0IHtCYXNlUmVjb3JkQWN0aW9uc0FkYXB0ZXJ9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2FjdGlvbnMvYmFzZS1yZWNvcmQtYWN0aW9uLmFkYXB0ZXInO1xuaW1wb3J0IHtMaXN0Vmlld1JlY29yZFBhbmVsQWN0aW9uQWRhcHRlckZhY3Rvcnl9IGZyb20gJy4vcmVjb3JkLXBhbmVsLWFjdGlvbnMuYWRhcHRlci5mYWN0b3J5JztcbmltcG9ydCB7UmVjb3JkUGFuZWxTdG9yZUZhY3Rvcnl9IGZyb20gJy4uLy4uLy4uL2NvbnRhaW5lcnMvcmVjb3JkLXBhbmVsL3N0b3JlL3JlY29yZC1wYW5lbC9yZWNvcmQtcGFuZWwuc3RvcmUuZmFjdG9yeSc7XG5pbXBvcnQge1ZpZXdNb2RlfSBmcm9tICcuLi8uLi8uLi9jb21tb24vdmlld3Mvdmlldy5tb2RlbCc7XG5pbXBvcnQge1JlY29yZE1hbmFnZXJ9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3JlY29yZC9yZWNvcmQubWFuYWdlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSZWNvcmRQYW5lbEFkYXB0ZXIge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBzdG9yZTogTGlzdFZpZXdTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIHJlY29yZFBhbmVsU3RvcmVGYWN0b3J5OiBSZWNvcmRQYW5lbFN0b3JlRmFjdG9yeSxcbiAgICAgICAgcHJvdGVjdGVkIGFjdGlvbkFkYXB0ZXJGYWN0b3J5OiBMaXN0Vmlld1JlY29yZFBhbmVsQWN0aW9uQWRhcHRlckZhY3RvcnksXG4gICAgICAgIHByb3RlY3RlZCByZWNvcmRNYW5hZ2VyOiBSZWNvcmRNYW5hZ2VyXG4gICAgKSB7XG4gICAgfVxuXG4gICAgZ2V0Q29uZmlnKCk6IFJlY29yZFBhbmVsQ29uZmlnIHtcbiAgICAgICAgY29uc3Qgc3RvcmU6IFJlY29yZFBhbmVsU3RvcmUgPSB0aGlzLmNyZWF0ZVN0b3JlKCk7XG5cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbW9kdWxlOiB0aGlzLmdldE1vZHVsZSgpLFxuXG4gICAgICAgICAgICB0aXRsZTogKHRoaXMuc3RvcmUucmVjb3JkUGFuZWxDb25maWcgJiYgdGhpcy5zdG9yZS5yZWNvcmRQYW5lbENvbmZpZy50aXRsZSkgfHwgJycsXG4gICAgICAgICAgICBzdG9yZTogc3RvcmUsXG4gICAgICAgICAgICBtZXRhOiB0aGlzLnN0b3JlLnJlY29yZFBhbmVsQ29uZmlnLFxuXG4gICAgICAgICAgICBhY3Rpb25zOiB0aGlzLmNyZWF0ZUFjdGlvbkFkYXB0ZXIoc3RvcmUpLFxuXG4gICAgICAgICAgICBvbkNsb3NlOiAoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5jbG9zZVJlY29yZFBhbmVsKCk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgIH0gYXMgUmVjb3JkUGFuZWxDb25maWc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGNvbmZpZ3VyZWQgbW9kdWxlXG4gICAgICogQHJldHVybnMge3N0cmluZ30gbW9kdWxlXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldE1vZHVsZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5zdG9yZS5yZWNvcmRQYW5lbENvbmZpZy5tb2R1bGUgfHwgdGhpcy5zdG9yZS5nZXRNb2R1bGVOYW1lKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGNvbmZpZ3VyZWQgdmlldyBtb2RlXG4gICAgICogQHJldHVybnMge3N0cmluZ30gVmlld01vZGVcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0Vmlld01vZGUoKTogVmlld01vZGUge1xuICAgICAgICByZXR1cm4gdGhpcy5zdG9yZS5yZWNvcmRQYW5lbENvbmZpZy5tb2RlIHx8ICdlZGl0JyBhcyBWaWV3TW9kZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYW5kIGluaXQgc3RvcmVcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBSZWNvcmRQYW5lbFN0b3JlXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGNyZWF0ZVN0b3JlKCk6IFJlY29yZFBhbmVsU3RvcmUge1xuICAgICAgICBjb25zdCBzdG9yZSA9IHRoaXMucmVjb3JkUGFuZWxTdG9yZUZhY3RvcnkuY3JlYXRlKCk7XG4gICAgICAgIGNvbnN0IGJsYW5rUmVjb3JkID0gdGhpcy5yZWNvcmRNYW5hZ2VyLmJ1aWxkRW1wdHlSZWNvcmQodGhpcy5nZXRNb2R1bGUoKSk7XG5cbiAgICAgICAgc3RvcmUuc2V0TWV0YWRhdGEodGhpcy5zdG9yZS5yZWNvcmRQYW5lbENvbmZpZyk7XG4gICAgICAgIHN0b3JlLmluaXRSZWNvcmQoYmxhbmtSZWNvcmQsIHRoaXMuZ2V0Vmlld01vZGUoKSwgZmFsc2UpO1xuXG4gICAgICAgIHJldHVybiBzdG9yZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYWN0aW9uIGFkYXB0ZXJcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBCYXNlUmVjb3JkQWN0aW9uc0FkYXB0ZXJcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgY3JlYXRlQWN0aW9uQWRhcHRlcihzdG9yZTogUmVjb3JkUGFuZWxTdG9yZSk6IEJhc2VSZWNvcmRBY3Rpb25zQWRhcHRlcjxSZWNvcmRQYW5lbEFjdGlvbkRhdGE+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aW9uQWRhcHRlckZhY3RvcnkuY3JlYXRlKFxuICAgICAgICAgICAgc3RvcmUsXG4gICAgICAgICAgICB0aGlzLnN0b3JlXG4gICAgICAgIClcbiAgICB9XG59XG4iXX0=