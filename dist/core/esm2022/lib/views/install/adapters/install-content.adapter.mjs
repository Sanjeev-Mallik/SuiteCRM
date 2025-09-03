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
import { combineLatestWith, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';
import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { LanguageStore } from '../../../store/language/language.store';
import { InstallViewStore } from '../store/install-view/install-view.store';
import { InstallActionManager } from '../actions/install-action-manager.service';
import * as i0 from "@angular/core";
import * as i1 from "../store/install-view/install-view.store";
import * as i2 from "../../../store/metadata/metadata.store.service";
import * as i3 from "../../../store/language/language.store";
import * as i4 from "../actions/install-action-manager.service";
export class InstallContentAdapter {
    constructor(store, metadata, language, actions) {
        this.store = store;
        this.metadata = metadata;
        this.language = language;
        this.actions = actions;
    }
    getEditAction() {
    }
    getDisplayConfig() {
        return this.store.getMetadata$().pipe(combineLatestWith(this.store.mode$), map(([meta, mode]) => {
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
        return this.store.getMetadata$().pipe(combineLatestWith(this.store.stagingRecord$, this.language.vm$), map(([meta, record, languages]) => {
            const panels = [];
            const module = (record && record.module) || '';
            meta.panels.forEach(panelDefinition => {
                const label = this.language.getFieldLabel(panelDefinition.key.toUpperCase(), module, languages);
                const panel = {
                    label,
                    key: panelDefinition.key,
                    display$: panelDefinition?.display$ ?? of(true).pipe(shareReplay(1)),
                    rows: []
                };
                panelDefinition.rows.forEach(rowDefinition => {
                    const row = { cols: [] };
                    rowDefinition.cols.forEach(cellDefinition => {
                        row.cols.push({ ...cellDefinition });
                    });
                    panel.rows.push(row);
                });
                panels.push(panel);
            });
            return panels;
        }));
    }
    getRecord() {
        return this.store.stagingRecord$;
    }
    getLayout(meta) {
        let layout = 'panels';
        if (meta.templateMeta.useTabs) {
            layout = 'tabs';
        }
        return layout;
    }
    static { this.ɵfac = function InstallContentAdapter_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || InstallContentAdapter)(i0.ɵɵinject(i1.InstallViewStore), i0.ɵɵinject(i2.MetadataStore), i0.ɵɵinject(i3.LanguageStore), i0.ɵɵinject(i4.InstallActionManager)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: InstallContentAdapter, factory: InstallContentAdapter.ɵfac }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InstallContentAdapter, [{
        type: Injectable
    }], () => [{ type: i1.InstallViewStore }, { type: i2.MetadataStore }, { type: i3.LanguageStore }, { type: i4.InstallActionManager }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFsbC1jb250ZW50LmFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvaW5zdGFsbC9hZGFwdGVycy9pbnN0YWxsLWNvbnRlbnQuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLGlCQUFpQixFQUFjLEVBQUUsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUN2RCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxHQUFHLEVBQUUsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFJaEQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGdEQUFnRCxDQUFDO0FBRTdFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3Q0FBd0MsQ0FBQztBQUNyRSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSwwQ0FBMEMsQ0FBQztBQUMxRSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQzs7Ozs7O0FBSS9FLE1BQU0sT0FBTyxxQkFBcUI7SUFHOUIsWUFDYyxLQUF1QixFQUN2QixRQUF1QixFQUN2QixRQUF1QixFQUN2QixPQUE2QjtRQUg3QixVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUN2QixhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLGFBQVEsR0FBUixRQUFRLENBQWU7UUFDdkIsWUFBTyxHQUFQLE9BQU8sQ0FBc0I7SUFFM0MsQ0FBQztJQUVELGFBQWE7SUFDYixDQUFDO0lBRUQsZ0JBQWdCO1FBQ1osT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FDakMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFDbkMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFrQyxFQUFFLEVBQUU7WUFDbEQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQyxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUM7WUFDckQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUM7WUFFMUMsT0FBTztnQkFDSCxNQUFNO2dCQUNOLElBQUk7Z0JBQ0osVUFBVTtnQkFDVixPQUFPO2FBQ2EsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FDTCxDQUFDO0lBQ04sQ0FBQztJQUVELFNBQVM7UUFDTCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUNqQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUMvRCxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDLEVBQUUsRUFBRTtZQUU5QixNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7WUFDbEIsTUFBTSxNQUFNLEdBQUcsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUUvQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsRUFBRTtnQkFDbEMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQ2hHLE1BQU0sS0FBSyxHQUFHO29CQUNWLEtBQUs7b0JBQ0wsR0FBRyxFQUFFLGVBQWUsQ0FBQyxHQUFHO29CQUN4QixRQUFRLEVBQUUsZUFBZSxFQUFFLFFBQVEsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDcEUsSUFBSSxFQUFFLEVBQUU7aUJBQ0YsQ0FBQztnQkFFWCxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFBRTtvQkFDekMsTUFBTSxHQUFHLEdBQUcsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFhLENBQUM7b0JBQ25DLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxFQUFFO3dCQUN4QyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDLEdBQUcsY0FBYyxFQUFDLENBQUMsQ0FBQztvQkFDdkMsQ0FBQyxDQUFDLENBQUM7b0JBQ0gsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3pCLENBQUMsQ0FBQyxDQUFDO2dCQUVILE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQUM7WUFFSCxPQUFPLE1BQU0sQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FDTCxDQUFDO0lBQ04sQ0FBQztJQUVELFNBQVM7UUFDTCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDO0lBQ3JDLENBQUM7SUFFUyxTQUFTLENBQUMsSUFBeUI7UUFDekMsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDO1FBQ3RCLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM1QixNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3BCLENBQUM7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO3NIQTVFUSxxQkFBcUI7dUVBQXJCLHFCQUFxQixXQUFyQixxQkFBcUI7O2lGQUFyQixxQkFBcUI7Y0FEakMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtjb21iaW5lTGF0ZXN0V2l0aCwgT2JzZXJ2YWJsZSwgb2Z9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7bWFwLCBzaGFyZVJlcGxheX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtQYW5lbCwgUGFuZWxSb3d9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9tZXRhZGF0YS9tZXRhZGF0YS5tb2RlbCc7XG5pbXBvcnQge1JlY29yZH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3JlY29yZC9yZWNvcmQubW9kZWwnO1xuaW1wb3J0IHtWaWV3TW9kZX0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3ZpZXdzL3ZpZXcubW9kZWwnO1xuaW1wb3J0IHtNZXRhZGF0YVN0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9tZXRhZGF0YS9tZXRhZGF0YS5zdG9yZS5zZXJ2aWNlJztcbmltcG9ydCB7UmVjb3JkQ29udGVudENvbmZpZywgUmVjb3JkQ29udGVudERhdGFTb3VyY2V9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvcmVjb3JkLWNvbnRlbnQvcmVjb3JkLWNvbnRlbnQubW9kZWwnO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5pbXBvcnQge0luc3RhbGxWaWV3U3RvcmV9IGZyb20gJy4uL3N0b3JlL2luc3RhbGwtdmlldy9pbnN0YWxsLXZpZXcuc3RvcmUnO1xuaW1wb3J0IHtJbnN0YWxsQWN0aW9uTWFuYWdlcn0gZnJvbSAnLi4vYWN0aW9ucy9pbnN0YWxsLWFjdGlvbi1tYW5hZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHtJbnN0YWxsVmlld01ldGFkYXRhfSBmcm9tICcuLi9zdG9yZS9pbnN0YWxsLXZpZXcvaW5zdGFsbC12aWV3LnN0b3JlLm1vZGVsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluc3RhbGxDb250ZW50QWRhcHRlciBpbXBsZW1lbnRzIFJlY29yZENvbnRlbnREYXRhU291cmNlIHtcbiAgICBpbmxpbmVFZGl0OiB0cnVlO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBzdG9yZTogSW5zdGFsbFZpZXdTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIG1ldGFkYXRhOiBNZXRhZGF0YVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBhY3Rpb25zOiBJbnN0YWxsQWN0aW9uTWFuYWdlclxuICAgICkge1xuICAgIH1cblxuICAgIGdldEVkaXRBY3Rpb24oKTogdm9pZCB7XG4gICAgfVxuXG4gICAgZ2V0RGlzcGxheUNvbmZpZygpOiBPYnNlcnZhYmxlPFJlY29yZENvbnRlbnRDb25maWc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmUuZ2V0TWV0YWRhdGEkKCkucGlwZShcbiAgICAgICAgICAgIGNvbWJpbmVMYXRlc3RXaXRoKHRoaXMuc3RvcmUubW9kZSQpLFxuICAgICAgICAgICAgbWFwKChbbWV0YSwgbW9kZV06IFtJbnN0YWxsVmlld01ldGFkYXRhLCBWaWV3TW9kZV0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBsYXlvdXQgPSB0aGlzLmdldExheW91dChtZXRhKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXhDb2x1bW5zID0gbWV0YS50ZW1wbGF0ZU1ldGEubWF4Q29sdW1ucyB8fCAyO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhYkRlZnMgPSBtZXRhLnRlbXBsYXRlTWV0YS50YWJEZWZzO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0LFxuICAgICAgICAgICAgICAgICAgICBtb2RlLFxuICAgICAgICAgICAgICAgICAgICBtYXhDb2x1bW5zLFxuICAgICAgICAgICAgICAgICAgICB0YWJEZWZzXG4gICAgICAgICAgICAgICAgfSBhcyBSZWNvcmRDb250ZW50Q29uZmlnO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBnZXRQYW5lbHMoKTogT2JzZXJ2YWJsZTxQYW5lbFtdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlLmdldE1ldGFkYXRhJCgpLnBpcGUoXG4gICAgICAgICAgICBjb21iaW5lTGF0ZXN0V2l0aCh0aGlzLnN0b3JlLnN0YWdpbmdSZWNvcmQkLCB0aGlzLmxhbmd1YWdlLnZtJCksXG4gICAgICAgICAgICBtYXAoKFttZXRhLCByZWNvcmQsIGxhbmd1YWdlc10pID0+IHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHBhbmVscyA9IFtdO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vZHVsZSA9IChyZWNvcmQgJiYgcmVjb3JkLm1vZHVsZSkgfHwgJyc7XG5cbiAgICAgICAgICAgICAgICBtZXRhLnBhbmVscy5mb3JFYWNoKHBhbmVsRGVmaW5pdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy5sYW5ndWFnZS5nZXRGaWVsZExhYmVsKHBhbmVsRGVmaW5pdGlvbi5rZXkudG9VcHBlckNhc2UoKSwgbW9kdWxlLCBsYW5ndWFnZXMpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYW5lbCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBwYW5lbERlZmluaXRpb24ua2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheSQ6IHBhbmVsRGVmaW5pdGlvbj8uZGlzcGxheSQgPz8gb2YodHJ1ZSkucGlwZShzaGFyZVJlcGxheSgxKSksXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzOiBbXVxuICAgICAgICAgICAgICAgICAgICB9IGFzIFBhbmVsO1xuXG4gICAgICAgICAgICAgICAgICAgIHBhbmVsRGVmaW5pdGlvbi5yb3dzLmZvckVhY2gocm93RGVmaW5pdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByb3cgPSB7Y29sczogW119IGFzIFBhbmVsUm93O1xuICAgICAgICAgICAgICAgICAgICAgICAgcm93RGVmaW5pdGlvbi5jb2xzLmZvckVhY2goY2VsbERlZmluaXRpb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5jb2xzLnB1c2goey4uLmNlbGxEZWZpbml0aW9ufSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhbmVsLnJvd3MucHVzaChyb3cpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBwYW5lbHMucHVzaChwYW5lbCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcGFuZWxzO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBnZXRSZWNvcmQoKTogT2JzZXJ2YWJsZTxSZWNvcmQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmUuc3RhZ2luZ1JlY29yZCQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldExheW91dChtZXRhOiBJbnN0YWxsVmlld01ldGFkYXRhKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IGxheW91dCA9ICdwYW5lbHMnO1xuICAgICAgICBpZiAobWV0YS50ZW1wbGF0ZU1ldGEudXNlVGFicykge1xuICAgICAgICAgICAgbGF5b3V0ID0gJ3RhYnMnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxheW91dDtcbiAgICB9XG59XG4iXX0=