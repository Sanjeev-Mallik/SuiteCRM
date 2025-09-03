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
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
export class ModalRecordListTableAdapter {
    constructor(systemConfigs, preferences) {
        this.systemConfigs = systemConfigs;
        this.preferences = preferences;
    }
    /**
     * Get table config
     *
     * @param {object} store to use
     * @param {boolean} multiSelect
     * @returns {object} TableConfig
     */
    getTable(store, multiSelect = false) {
        const config = {
            showHeader: true,
            showFooter: true,
            klass: 'light-table',
            module: store.recordList.getModule(),
            columns: store.columns$.pipe(map(columns => this.mapColumns(store, columns))),
            sort$: store.recordList.sort$,
            maxColumns$: of(5),
            loading$: store.recordList.loading$,
            dataSource: store.recordList,
            pagination: store.recordList,
            toggleRecordSelection: (id) => {
                store.recordList.toggleSelection(id);
            },
            updateSorting: (orderBy, sortOrder) => {
                store.recordList.updateSorting(orderBy, sortOrder);
                store.saveCurrentSort();
            },
            maxListHeight: this.preferences.getUserPreference('record_modal_max_height') ?? this.systemConfigs.getConfigValue('record_modal_max_height'),
            paginationType: this.preferences.getUserPreference('record_modal_pagination_type') ?? this.systemConfigs.getConfigValue('record_modal_pagination_type'),
            loadMore: () => {
                const jump = this.preferences.getUserPreference('list_max_entries_per_modal') ?? this.systemConfigs.getConfigValue('list_max_entries_per_modal');
                const pagination = store.recordList.getPagination();
                const currentPageSize = pagination.pageSize || 0;
                const newPageSize = Number(currentPageSize) + Number(jump);
                store.recordList.setPageSize(newPageSize);
                store.recordList.updatePagination(pagination.current);
            },
            allLoaded: () => {
                const pagination = store.recordList.getPagination();
                if (!pagination) {
                    return false;
                }
                if (Number(pagination.pageLast) >= Number(pagination.total)) {
                    return true;
                }
                return Number(pagination.pageSize) >= Number(pagination.total);
            }
        };
        if (multiSelect) {
            config.selection$ = store.recordList.selection$;
            config.selectedCount$ = store.recordList.selectedCount$;
            config.selectedStatus$ = store.recordList.selectedStatus$;
        }
        return config;
    }
    /**
     * Parse and override column definitions
     *
     * @param {object} store to use
     * @param {[]} columns to map
     * @returns {[]} ColumnDefinition[]
     */
    mapColumns(store, columns) {
        const mappedColumns = [];
        columns.forEach(column => {
            const mapped = { ...column };
            const metadata = column.metadata || {};
            mapped.metadata = { ...metadata };
            this.disableRelateFieldsLink(mapped);
            this.addLinkSelectHandler(store, mapped);
            mappedColumns.push(mapped);
        });
        return mappedColumns;
    }
    /**
     * Disable link for relate fields
     *
     * @param {object} definition to update
     */
    disableRelateFieldsLink(definition) {
        if (definition.type !== 'relate') {
            return;
        }
        definition.link = false;
        definition.metadata.link = false;
    }
    /**
     * Add onClick handler for link fields
     *
     * @param {object} store to use
     * @param {object} definition to update
     */
    addLinkSelectHandler(store, definition) {
        if (!definition.link) {
            return;
        }
        definition.metadata.onClick = (field, record) => {
            store.recordList.clearSelection();
            store.recordList.toggleSelection(record.id);
            store.emitLinkClicked();
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb250YWluZXJzL3JlY29yZC1saXN0LW1vZGFsL2FkYXB0ZXJzL3RhYmxlLmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxFQUFFLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFLeEIsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBT25DLE1BQU0sT0FBTywyQkFBMkI7SUFFcEMsWUFDYyxhQUFnQyxFQUNoQyxXQUFnQztRQURoQyxrQkFBYSxHQUFiLGFBQWEsQ0FBbUI7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQXFCO0lBRTlDLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxRQUFRLENBQUMsS0FBMkIsRUFBRSxjQUF1QixLQUFLO1FBQzlELE1BQU0sTUFBTSxHQUFHO1lBQ1gsVUFBVSxFQUFFLElBQUk7WUFDaEIsVUFBVSxFQUFFLElBQUk7WUFDaEIsS0FBSyxFQUFFLGFBQWE7WUFDcEIsTUFBTSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFO1lBRXBDLE9BQU8sRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzdFLEtBQUssRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUs7WUFDN0IsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbEIsUUFBUSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsUUFBUTtZQUVuQyxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsVUFBVSxFQUFFLEtB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O1lBRWhDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBRXpDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLGFBQWEsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNPLHVCQUF1QixDQUFDLFVBQTRCO1FBQzFELElBQUksVUFBVSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUUsQ0FBQztZQUMvQixPQUFPO1FBQ1gsQ0FBQztRQUNELFVBQVUsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNyQyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDTyxvQkFBb0IsQ0FBQyxLQUEyQixFQUFFLFVBQTRCO1FBQ3BGLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbkIsT0FBTztRQUNYLENBQUM7UUFFRCxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxDQUFDLEtBQVksRUFBRSxNQUFjLEVBQVEsRUFBRTtZQUNqRSxLQUFLLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ2xDLEtBQUssQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM1QyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDNUIsQ0FBQyxDQUFDO0lBQ04sQ0FBQztDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge29mfSBmcm9tICdyeGpzJztcbmltcG9ydCB7Q29sdW1uRGVmaW5pdGlvbn0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL21ldGFkYXRhL2xpc3QubWV0YWRhdGEubW9kZWwnO1xuaW1wb3J0IHtGaWVsZH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3JlY29yZC9maWVsZC5tb2RlbCc7XG5pbXBvcnQge1JlY29yZH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3JlY29yZC9yZWNvcmQubW9kZWwnO1xuaW1wb3J0IHtTb3J0RGlyZWN0aW9ufSBmcm9tICcuLi8uLi8uLi9jb21tb24vdmlld3MvbGlzdC9saXN0LW5hdmlnYXRpb24ubW9kZWwnO1xuaW1wb3J0IHttYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7UmVjb3JkTGlzdE1vZGFsVGFibGVBZGFwdGVySW50ZXJmYWNlfSBmcm9tICcuL2FkYXB0ZXIubW9kZWwnO1xuaW1wb3J0IHtSZWNvcmRMaXN0TW9kYWxTdG9yZX0gZnJvbSAnLi4vc3RvcmUvcmVjb3JkLWxpc3QtbW9kYWwvcmVjb3JkLWxpc3QtbW9kYWwuc3RvcmUnO1xuaW1wb3J0IHtUYWJsZUNvbmZpZ30gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy90YWJsZS90YWJsZS5tb2RlbCc7XG5pbXBvcnQge1VzZXJQcmVmZXJlbmNlU3RvcmV9IGZyb20gXCIuLi8uLi8uLi9zdG9yZS91c2VyLXByZWZlcmVuY2UvdXNlci1wcmVmZXJlbmNlLnN0b3JlXCI7XG5pbXBvcnQge1N5c3RlbUNvbmZpZ1N0b3JlfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmUvc3lzdGVtLWNvbmZpZy9zeXN0ZW0tY29uZmlnLnN0b3JlXCI7XG5cbmV4cG9ydCBjbGFzcyBNb2RhbFJlY29yZExpc3RUYWJsZUFkYXB0ZXIgaW1wbGVtZW50cyBSZWNvcmRMaXN0TW9kYWxUYWJsZUFkYXB0ZXJJbnRlcmZhY2Uge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBzeXN0ZW1Db25maWdzOiBTeXN0ZW1Db25maWdTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIHByZWZlcmVuY2VzOiBVc2VyUHJlZmVyZW5jZVN0b3JlXG4gICAgKXtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGFibGUgY29uZmlnXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gc3RvcmUgdG8gdXNlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBtdWx0aVNlbGVjdFxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IFRhYmxlQ29uZmlnXG4gICAgICovXG4gICAgZ2V0VGFibGUoc3RvcmU6IFJlY29yZExpc3RNb2RhbFN0b3JlLCBtdWx0aVNlbGVjdDogYm9vbGVhbiA9IGZhbHNlKTogVGFibGVDb25maWcge1xuICAgICAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAgICAgICBzaG93SGVhZGVyOiB0cnVlLFxuICAgICAgICAgICAgc2hvd0Zvb3RlcjogdHJ1ZSxcbiAgICAgICAgICAgIGtsYXNzOiAnbGlnaHQtdGFibGUnLFxuICAgICAgICAgICAgbW9kdWxlOiBzdG9yZS5yZWNvcmRMaXN0LmdldE1vZHVsZSgpLFxuXG4gICAgICAgICAgICBjb2x1bW5zOiBzdG9yZS5jb2x1bW5zJC5waXBlKG1hcChjb2x1bW5zID0+IHRoaXMubWFwQ29sdW1ucyhzdG9yZSwgY29sdW1ucykpKSxcbiAgICAgICAgICAgIHNvcnQkOiBzdG9yZS5yZWNvcmRMaXN0LnNvcnQkLFxuICAgICAgICAgICAgbWF4Q29sdW1ucyQ6IG9mKDUpLFxuICAgICAgICAgICAgbG9hZGluZyQ6IHN0b3JlLnJlY29yZExpc3QubG9hZGluZyQsXG5cbiAgICAgICAgICAgIGRhdGFTb3VyY2U6IHN0b3JlLnJlY29yZExpc3QsXG4gICAgICAgICAgICBwYWdpbmF0aW9uOiBzdG9yZS5yZWNvcmRMaXN0LFxuXG4gICAgICAgICAgICB0b2dnbGVSZWNvcmRTZWxlY3Rpb246IChpZDogc3RyaW5nKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgc3RvcmUucmVjb3JkTGlzdC50b2dnbGVTZWxlY3Rpb24oaWQpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgdXBkYXRlU29ydGluZzogKG9yZGVyQnk6IHN0cmluZywgc29ydE9yZGVyOiBTb3J0RGlyZWN0aW9uKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgc3RvcmUucmVjb3JkTGlzdC51cGRhdGVTb3J0aW5nKG9yZGVyQnksIHNvcnRPcmRlcik7XG4gICAgICAgICAgICAgICAgc3RvcmUuc2F2ZUN1cnJlbnRTb3J0KCk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBtYXhMaXN0SGVpZ2h0OiB0aGlzLnByZWZlcmVuY2VzLmdldFVzZXJQcmVmZXJlbmNlKCdyZWNvcmRfbW9kYWxfbWF4X2hlaWdodCcpID8/IHRoaXMuc3lzdGVtQ29uZmlncy5nZXRDb25maWdWYWx1ZSgncmVjb3JkX21vZGFsX21heF9oZWlnaHQnKSxcblxuICAgICAgICAgICAgcGFnaW5hdGlvblR5cGU6IHRoaXMucHJlZmVyZW5jZXMuZ2V0VXNlclByZWZlcmVuY2UoJ3JlY29yZF9tb2RhbF9wYWdpbmF0aW9uX3R5cGUnKSA/PyB0aGlzLnN5c3RlbUNvbmZpZ3MuZ2V0Q29uZmlnVmFsdWUoJ3JlY29yZF9tb2RhbF9wYWdpbmF0aW9uX3R5cGUnKSxcblxuICAgICAgICAgICAgbG9hZE1vcmU6ICgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBqdW1wID0gdGhpcy5wcmVmZXJlbmNlcy5nZXRVc2VyUHJlZmVyZW5jZSgnbGlzdF9tYXhfZW50cmllc19wZXJfbW9kYWwnKSA/PyB0aGlzLnN5c3RlbUNvbmZpZ3MuZ2V0Q29uZmlnVmFsdWUoJ2xpc3RfbWF4X2VudHJpZXNfcGVyX21vZGFsJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFnaW5hdGlvbiA9IHN0b3JlLnJlY29yZExpc3QuZ2V0UGFnaW5hdGlvbigpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQYWdlU2l6ZSA9IHBhZ2luYXRpb24ucGFnZVNpemUgfHwgMDtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQYWdlU2l6ZSA9IE51bWJlcihjdXJyZW50UGFnZVNpemUpICsgTnVtYmVyKGp1bXApO1xuXG5cbiAgICAgICAgICAgICAgICBzdG9yZS5yZWNvcmRMaXN0LnNldFBhZ2VTaXplKG5ld1BhZ2VTaXplKTtcbiAgICAgICAgICAgICAgICBzdG9yZS5yZWNvcmRMaXN0LnVwZGF0ZVBhZ2luYXRpb24ocGFnaW5hdGlvbi5jdXJyZW50KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGFsbExvYWRlZDogKCk6IGJvb2xlYW4gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhZ2luYXRpb24gPSBzdG9yZS5yZWNvcmRMaXN0LmdldFBhZ2luYXRpb24oKTtcblxuICAgICAgICAgICAgICAgIGlmICghcGFnaW5hdGlvbikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKE51bWJlcihwYWdpbmF0aW9uLnBhZ2VMYXN0KSA+PSBOdW1iZXIocGFnaW5hdGlvbi50b3RhbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIE51bWJlcihwYWdpbmF0aW9uLnBhZ2VTaXplKSA+PSBOdW1iZXIocGFnaW5hdGlvbi50b3RhbCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBhcyBUYWJsZUNvbmZpZztcblxuXG4gICAgICAgIGlmIChtdWx0aVNlbGVjdCl7XG4gICAgICAgICAgICBjb25maWcuc2VsZWN0aW9uJCA9IHN0b3JlLnJlY29yZExpc3Quc2VsZWN0aW9uJDtcbiAgICAgICAgICAgIGNvbmZpZy5zZWxlY3RlZENvdW50JCA9IHN0b3JlLnJlY29yZExpc3Quc2VsZWN0ZWRDb3VudCQ7XG4gICAgICAgICAgICBjb25maWcuc2VsZWN0ZWRTdGF0dXMkID0gc3RvcmUucmVjb3JkTGlzdC5zZWxlY3RlZFN0YXR1cyQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlIGFuZCBvdmVycmlkZSBjb2x1bW4gZGVmaW5pdGlvbnNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzdG9yZSB0byB1c2VcbiAgICAgKiBAcGFyYW0ge1tdfSBjb2x1bW5zIHRvIG1hcFxuICAgICAqIEByZXR1cm5zIHtbXX0gQ29sdW1uRGVmaW5pdGlvbltdXG4gICAgICovXG4gICAgcHJvdGVjdGVkIG1hcENvbHVtbnMoc3RvcmU6IFJlY29yZExpc3RNb2RhbFN0b3JlLCBjb2x1bW5zOiBDb2x1bW5EZWZpbml0aW9uW10pOiBDb2x1bW5EZWZpbml0aW9uW10ge1xuICAgICAgICBjb25zdCBtYXBwZWRDb2x1bW5zID0gW107XG5cbiAgICAgICAgY29sdW1ucy5mb3JFYWNoKGNvbHVtbiA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXBwZWQgPSB7Li4uY29sdW1ufTtcbiAgICAgICAgICAgIGNvbnN0IG1ldGFkYXRhID0gY29sdW1uLm1ldGFkYXRhIHx8IHt9O1xuICAgICAgICAgICAgbWFwcGVkLm1ldGFkYXRhID0gey4uLm1ldGFkYXRhfTtcblxuICAgICAgICAgICAgdGhpcy5kaXNhYmxlUmVsYXRlRmllbGRzTGluayhtYXBwZWQpO1xuICAgICAgICAgICAgdGhpcy5hZGRMaW5rU2VsZWN0SGFuZGxlcihzdG9yZSwgbWFwcGVkKTtcblxuICAgICAgICAgICAgbWFwcGVkQ29sdW1ucy5wdXNoKG1hcHBlZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBtYXBwZWRDb2x1bW5zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERpc2FibGUgbGluayBmb3IgcmVsYXRlIGZpZWxkc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGRlZmluaXRpb24gdG8gdXBkYXRlXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGRpc2FibGVSZWxhdGVGaWVsZHNMaW5rKGRlZmluaXRpb246IENvbHVtbkRlZmluaXRpb24pOiB2b2lkIHtcbiAgICAgICAgaWYgKGRlZmluaXRpb24udHlwZSAhPT0gJ3JlbGF0ZScpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBkZWZpbml0aW9uLmxpbmsgPSBmYWxzZTtcbiAgICAgICAgZGVmaW5pdGlvbi5tZXRhZGF0YS5saW5rID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIG9uQ2xpY2sgaGFuZGxlciBmb3IgbGluayBmaWVsZHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzdG9yZSB0byB1c2VcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZGVmaW5pdGlvbiB0byB1cGRhdGVcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYWRkTGlua1NlbGVjdEhhbmRsZXIoc3RvcmU6IFJlY29yZExpc3RNb2RhbFN0b3JlLCBkZWZpbml0aW9uOiBDb2x1bW5EZWZpbml0aW9uKTogdm9pZCB7XG4gICAgICAgIGlmICghZGVmaW5pdGlvbi5saW5rKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBkZWZpbml0aW9uLm1ldGFkYXRhLm9uQ2xpY2sgPSAoZmllbGQ6IEZpZWxkLCByZWNvcmQ6IFJlY29yZCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgc3RvcmUucmVjb3JkTGlzdC5jbGVhclNlbGVjdGlvbigpO1xuICAgICAgICAgICAgc3RvcmUucmVjb3JkTGlzdC50b2dnbGVTZWxlY3Rpb24ocmVjb3JkLmlkKTtcbiAgICAgICAgICAgIHN0b3JlLmVtaXRMaW5rQ2xpY2tlZCgpO1xuICAgICAgICB9O1xuICAgIH1cbn1cbiJdfQ==