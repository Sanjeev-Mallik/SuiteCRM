/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2024 SalesAgility Ltd.
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
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { map } from "rxjs/operators";
import { SystemConfigStore } from "../../store/system-config/system-config.store";
import { isEmpty } from "lodash-es";
import { isVoid } from "../../common/utils/value-utils";
import * as i0 from "@angular/core";
import * as i1 from "../../store/system-config/system-config.store";
export class RecordConvertService {
    constructor(systemConfigStore) {
        this.systemConfigStore = systemConfigStore;
    }
    duplicateOnModule(prevRecord, newRecord, vardefs, moduleMetadata) {
        const excludedFields = this.systemConfigStore.getConfigValue('convert_ignore') ?? [];
        const nextModule = newRecord.module ?? '';
        newRecord.id = '';
        newRecord.attributes.id = '';
        Object.keys(vardefs).forEach((fieldName) => {
            if (isVoid(prevRecord?.attributes[fieldName]) || excludedFields?.default.includes(fieldName)) {
                return;
            }
            if (Object.keys(excludedFields).includes(nextModule) && excludedFields[nextModule].includes(fieldName)) {
                return;
            }
            if (moduleMetadata.recordView?.vardefs[fieldName].type != vardefs[fieldName].type) {
                return;
            }
            newRecord.attributes[fieldName] = prevRecord.attributes[fieldName];
        });
        return newRecord;
    }
    getViewFieldsObservable(meta) {
        return of(meta.recordView).pipe(map((recordMetadata) => {
            const fieldsMap = {};
            recordMetadata.panels.forEach(panel => {
                panel.rows.forEach(row => {
                    row.cols.forEach(col => {
                        const fieldName = col.name ?? col.fieldDefinition.name ?? '';
                        fieldsMap[fieldName] = col;
                    });
                });
            });
            Object.keys(recordMetadata.vardefs).forEach(fieldKey => {
                const vardef = recordMetadata.vardefs[fieldKey] ?? null;
                if (!vardef || isEmpty(vardef)) {
                    return;
                }
                // already defined. skip
                if (fieldsMap[fieldKey]) {
                    return;
                }
                if (vardef.type == 'relate') {
                    return;
                }
                fieldsMap[fieldKey] = {
                    name: fieldKey,
                    vardefBased: true,
                    label: vardef.vname ?? '',
                    type: vardef.type ?? '',
                    display: vardef.display ?? 'default',
                    fieldDefinition: vardef,
                    metadata: vardef.metadata ?? {},
                    logic: vardef.logic ?? {}
                };
            });
            return Object.values(fieldsMap);
        }));
    }
    static { this.ɵfac = function RecordConvertService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RecordConvertService)(i0.ɵɵinject(i1.SystemConfigStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordConvertService, factory: RecordConvertService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordConvertService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.SystemConfigStore }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLWNvbnZlcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9zZXJ2aWNlcy9yZWNvcmQvcmVjb3JkLWNvbnZlcnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBQ0gsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQWEsRUFBRSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ3BDLE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuQyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUVoRixPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBR2xDLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQzs7O0FBT3RELE1BQU0sT0FBTyxvQkFBb0I7SUFFN0IsWUFBc0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFDMUQsQ0FBQztJQUVNLGlCQUFpQixDQUFDLFVBQWtCLEVBQUUsU0FBaUIsRUFBRSxPQUEyQixFQUFFLGNBQXdCO1FBRWpILE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckYsTUFBTSxVQUFVLEdBQUcsU0FBUyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFFMUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDbEIsU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBRTdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBaUIsRUFBRSxFQUFFO1lB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LENBQUM7cUhBMUVRLG9CQUFvQjt1RUFBcEIsb0JBQW9CLFdBQXBCLG9CQUFvQixtQkFGakIsTUFBTTs7aUZBRVQsb0JBQW9CO2NBSGhDLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDI0IFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZSwgb2Z9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge21hcH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5pbXBvcnQge1N5c3RlbUNvbmZpZ1N0b3JlfSBmcm9tIFwiLi4vLi4vc3RvcmUvc3lzdGVtLWNvbmZpZy9zeXN0ZW0tY29uZmlnLnN0b3JlXCI7XG5pbXBvcnQge01ldGFkYXRhLCBSZWNvcmRWaWV3TWV0YWRhdGF9IGZyb20gXCIuLi8uLi9zdG9yZS9tZXRhZGF0YS9tZXRhZGF0YS5zdG9yZS5zZXJ2aWNlXCI7XG5pbXBvcnQge2lzRW1wdHl9IGZyb20gXCJsb2Rhc2gtZXNcIjtcbmltcG9ydCB7RmllbGREZWZpbml0aW9uTWFwLCBGaWVsZE1ldGFkYXRhfSBmcm9tIFwiLi4vLi4vY29tbW9uL3JlY29yZC9maWVsZC5tb2RlbFwiO1xuaW1wb3J0IHtSZWNvcmR9IGZyb20gXCIuLi8uLi9jb21tb24vcmVjb3JkL3JlY29yZC5tb2RlbFwiO1xuaW1wb3J0IHtpc1ZvaWR9IGZyb20gXCIuLi8uLi9jb21tb24vdXRpbHMvdmFsdWUtdXRpbHNcIjtcbmltcG9ydCB7Vmlld0ZpZWxkRGVmaW5pdGlvbiwgVmlld0ZpZWxkRGVmaW5pdGlvbk1hcH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9tZXRhZGF0YS9tZXRhZGF0YS5tb2RlbFwiO1xuaW1wb3J0IHtGaWVsZExvZ2ljTWFwfSBmcm9tIFwiLi4vLi4vY29tbW9uL2FjdGlvbnMvZmllbGQtbG9naWMtYWN0aW9uLm1vZGVsXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUmVjb3JkQ29udmVydFNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIHN5c3RlbUNvbmZpZ1N0b3JlOiBTeXN0ZW1Db25maWdTdG9yZSkge1xuICAgIH1cblxuICAgIHB1YmxpYyBkdXBsaWNhdGVPbk1vZHVsZShwcmV2UmVjb3JkOiBSZWNvcmQsIG5ld1JlY29yZDogUmVjb3JkLCB2YXJkZWZzOiBGaWVsZERlZmluaXRpb25NYXAsIG1vZHVsZU1ldGFkYXRhOiBNZXRhZGF0YSk6IFJlY29yZCB7XG5cbiAgICAgICAgY29uc3QgZXhjbHVkZWRGaWVsZHMgPSB0aGlzLnN5c3RlbUNvbmZpZ1N0b3JlLmdldENvbmZpZ1ZhbHVlKCdjb252ZXJ0X2lnbm9yZScpID8/IFtdO1xuICAgICAgICBjb25zdCBuZXh0TW9kdWxlID0gbmV3UmVjb3JkLm1vZHVsZSA/PyAnJztcblxuICAgICAgICBuZXdSZWNvcmQuaWQgPSAnJztcbiAgICAgICAgbmV3UmVjb3JkLmF0dHJpYnV0ZXMuaWQgPSAnJztcblxuICAgICAgICBPYmplY3Qua2V5cyh2YXJkZWZzKS5mb3JFYWNoKChmaWVsZE5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgaWYgKGlzVm9pZChwcmV2UmVjb3JkPy5hdHRyaWJ1dGVzW2ZpZWxkTmFtZV0pIHx8IGV4Y2x1ZGVkRmllbGRzPy5kZWZhdWx0LmluY2x1ZGVzKGZpZWxkTmFtZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhleGNsdWRlZEZpZWxkcykuaW5jbHVkZXMobmV4dE1vZHVsZSkgJiYgZXhjbHVkZWRGaWVsZHNbbmV4dE1vZHVsZV0uaW5jbHVkZXMoZmllbGROYW1lKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1vZHVsZU1ldGFkYXRhLnJlY29yZFZpZXc/LnZhcmRlZnNbZmllbGROYW1lXS50eXBlICE9IHZhcmRlZnNbZmllbGROYW1lXS50eXBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuZXdSZWNvcmQuYXR0cmlidXRlc1tmaWVsZE5hbWVdID0gcHJldlJlY29yZC5hdHRyaWJ1dGVzW2ZpZWxkTmFtZV07XG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIG5ld1JlY29yZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Vmlld0ZpZWxkc09ic2VydmFibGUobWV0YTogTWV0YWRhdGEpOiBPYnNlcnZhYmxlPFZpZXdGaWVsZERlZmluaXRpb25bXT4ge1xuICAgICAgICByZXR1cm4gb2YobWV0YS5yZWNvcmRWaWV3KS5waXBlKG1hcCgocmVjb3JkTWV0YWRhdGE6IFJlY29yZFZpZXdNZXRhZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmllbGRzTWFwID0ge30gYXMgVmlld0ZpZWxkRGVmaW5pdGlvbk1hcDtcblxuICAgICAgICAgICAgcmVjb3JkTWV0YWRhdGEucGFuZWxzLmZvckVhY2gocGFuZWwgPT4ge1xuICAgICAgICAgICAgICAgIHBhbmVsLnJvd3MuZm9yRWFjaChyb3cgPT4ge1xuICAgICAgICAgICAgICAgICAgICByb3cuY29scy5mb3JFYWNoKGNvbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWVsZE5hbWUgPSBjb2wubmFtZSA/PyBjb2wuZmllbGREZWZpbml0aW9uLm5hbWUgPz8gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHNNYXBbZmllbGROYW1lXSA9IGNvbDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgT2JqZWN0LmtleXMocmVjb3JkTWV0YWRhdGEudmFyZGVmcykuZm9yRWFjaChmaWVsZEtleSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFyZGVmID0gcmVjb3JkTWV0YWRhdGEudmFyZGVmc1tmaWVsZEtleV0gPz8gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoIXZhcmRlZiB8fCBpc0VtcHR5KHZhcmRlZikpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGFscmVhZHkgZGVmaW5lZC4gc2tpcFxuICAgICAgICAgICAgICAgIGlmIChmaWVsZHNNYXBbZmllbGRLZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodmFyZGVmLnR5cGUgPT0gJ3JlbGF0ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZpZWxkc01hcFtmaWVsZEtleV0gPSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGZpZWxkS2V5LFxuICAgICAgICAgICAgICAgICAgICB2YXJkZWZCYXNlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHZhcmRlZi52bmFtZSA/PyAnJyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogdmFyZGVmLnR5cGUgPz8gJycsXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHZhcmRlZi5kaXNwbGF5ID8/ICdkZWZhdWx0JyxcbiAgICAgICAgICAgICAgICAgICAgZmllbGREZWZpbml0aW9uOiB2YXJkZWYsXG4gICAgICAgICAgICAgICAgICAgIG1ldGFkYXRhOiB2YXJkZWYubWV0YWRhdGEgPz8ge30gYXMgRmllbGRNZXRhZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgbG9naWM6IHZhcmRlZi5sb2dpYyA/PyB7fSBhcyBGaWVsZExvZ2ljTWFwXG4gICAgICAgICAgICAgICAgfSBhcyBWaWV3RmllbGREZWZpbml0aW9uO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKGZpZWxkc01hcCk7XG4gICAgICAgIH0pKTtcbiAgICB9XG5cbn1cbiJdfQ==