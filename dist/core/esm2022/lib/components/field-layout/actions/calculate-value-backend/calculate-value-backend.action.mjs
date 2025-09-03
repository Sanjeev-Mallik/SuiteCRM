/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2023 SalesAgility Ltd.
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
import { FieldActionHandler } from "../field.action";
import { AsyncActionService } from "../../../../services/process/processes/async-action/async-action";
import { ActiveFieldsChecker } from "../../../../services/condition-operators/active-fields-checker.service";
import { MessageService } from "../../../../services/message/message.service";
import { ProcessService } from "../../../../services/process/process.service";
import { BaseSaveRecordMapper } from "../../../../store/record/record-mappers/base-save.record-mapper";
import { take } from "rxjs/operators";
import { RecordMapperRegistry } from "../../../../common/record/record-mappers/record-mapper.registry";
import { deepClone } from "../../../../common/utils/object-utils";
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/process/processes/async-action/async-action";
import * as i2 from "../../../../services/process/process.service";
import * as i3 from "../../../../services/message/message.service";
import * as i4 from "../../../../common/record/record-mappers/record-mapper.registry";
import * as i5 from "../../../../store/record/record-mappers/base-save.record-mapper";
import * as i6 from "../../../../services/condition-operators/active-fields-checker.service";
export class CalculateValueBackendAction extends FieldActionHandler {
    constructor(asyncActionService, processService, messages, recordMappers, baseMapper, activeFieldsChecker) {
        super();
        this.asyncActionService = asyncActionService;
        this.processService = processService;
        this.messages = messages;
        this.recordMappers = recordMappers;
        this.baseMapper = baseMapper;
        this.activeFieldsChecker = activeFieldsChecker;
        this.key = 'calculateValueBackend';
        this.modes = ['edit', 'create'];
        recordMappers.register('default', baseMapper.getKey(), baseMapper);
    }
    run(data) {
        let record = data.store.recordStore.getStaging();
        const field = record.fields[data.action.fieldName];
        const action = data.action;
        if (!record || !field) {
            return;
        }
        const activeOnFields = (action.params && action.params.activeOnFields) || {};
        const relatedFields = Object.keys(activeOnFields);
        const activeOnAttributes = (action.params && action.params.activeOnAttributes) || {};
        const relatedAttributesFields = Object.keys(activeOnAttributes);
        const process = action.params && action.params.process;
        if (!process) {
            return;
        }
        const isActive = this.activeFieldsChecker.isActive(relatedFields, record, activeOnFields, relatedAttributesFields, activeOnAttributes);
        if (isActive) {
            const processType = process;
            const baseRecord = this.getBaseRecord(record);
            const options = {
                action: processType,
                module: record.module ?? '',
                record: baseRecord
            };
            field.loading.set(true);
            this.processService.submit(processType, options).pipe(take(1)).subscribe((result) => {
                const value = result?.data?.value ?? null;
                field.loading.set(false);
                if (value === null) {
                    this.messages.addDangerMessageByKey("ERR_FIELD_LOGIC_BACKEND_CALCULATION");
                    return;
                }
                this.updateValue(field, value.toString(), record);
            }, (error) => {
                field.loading.set(false);
                this.messages.addDangerMessageByKey("ERR_FIELD_LOGIC_BACKEND_CALCULATION");
            });
        }
    }
    getBaseRecord(record) {
        if (!record) {
            return null;
        }
        this.mapRecordFields(record);
        const baseRecord = {
            id: record.id,
            type: record.type,
            module: record.module,
            attributes: record.attributes,
            acls: record.acls
        };
        return deepClone(baseRecord);
    }
    /**
     * Map staging fields
     */
    mapRecordFields(record) {
        const mappers = this.recordMappers.get(record.module);
        Object.keys(mappers).forEach(key => {
            const mapper = mappers[key];
            mapper.map(record);
        });
    }
    /**
     * Update the new value
     * @param {object} field
     * @param {string} value
     * @param {object} record
     */
    updateValue(field, value, record) {
        field.value = value.toString();
        field.formControl.setValue(value);
        // re-validate the parent form-control after value update
        record.formGroup.updateValueAndValidity({ onlySelf: true, emitEvent: true });
    }
    static { this.ɵfac = function CalculateValueBackendAction_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CalculateValueBackendAction)(i0.ɵɵinject(i1.AsyncActionService), i0.ɵɵinject(i2.ProcessService), i0.ɵɵinject(i3.MessageService), i0.ɵɵinject(i4.RecordMapperRegistry), i0.ɵɵinject(i5.BaseSaveRecordMapper), i0.ɵɵinject(i6.ActiveFieldsChecker)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CalculateValueBackendAction, factory: CalculateValueBackendAction.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CalculateValueBackendAction, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.AsyncActionService }, { type: i2.ProcessService }, { type: i3.MessageService }, { type: i4.RecordMapperRegistry }, { type: i5.BaseSaveRecordMapper }, { type: i6.ActiveFieldsChecker }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRlLXZhbHVlLWJhY2tlbmQuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvZmllbGQtbGF5b3V0L2FjdGlvbnMvY2FsY3VsYXRlLXZhbHVlLWJhY2tlbmQvY2FsY3VsYXRlLXZhbHVlLWJhY2tlbmQuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBa0Isa0JBQWtCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRSxPQUFPLEVBQW1CLGtCQUFrQixFQUFDLE1BQU0sa0VBQWtFLENBQUM7QUFDdEgsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sd0VBQXdFLENBQUM7QUFDM0csT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDhDQUE4QyxDQUFDO0FBQzVFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSw4Q0FBOEMsQ0FBQztBQUM1RSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxpRUFBaUUsQ0FBQztBQUNyRyxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEMsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0saUVBQWlFLENBQUM7QUFJckcsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLHVDQUF1QyxDQUFDOzs7Ozs7OztBQVNoRSxNQUFNLE9BQU8sMkJBQTRCLFNBQVEsa0JBQWtCO0lBSy9ELFlBQ2Msa0JBQXNDLEVBQ3RDLGNBQThCLEVBQzlCLFFBQXdCLEVBQ3hCLGFBQW1DLEVBQ25DLFVBQWdDLEVBQ2hDLG1CQUF3QztRQUVsRCxLQUFLLEVBQUUsQ0FBQztRQVBFLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsbUJB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O1FBQzdELEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQy9CLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLHlEQUF5RDtRQUN6RCxNQUFNLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztJQUMvRSxDQUFDOzRIQWpIUSwyQkFBMkI7dUVBQTNCLDJCQUEyQixXQUEzQiwyQkFBMkIsbUJBRnhCLE1BQU07O2lGQUVULDJCQUEyQjtjQUh2QyxVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMyBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0ZpZWxkQWN0aW9uRGF0YSwgRmllbGRBY3Rpb25IYW5kbGVyfSBmcm9tIFwiLi4vZmllbGQuYWN0aW9uXCI7XG5pbXBvcnQge0FzeW5jQWN0aW9uSW5wdXQsIEFzeW5jQWN0aW9uU2VydmljZX0gZnJvbSBcIi4uLy4uLy4uLy4uL3NlcnZpY2VzL3Byb2Nlc3MvcHJvY2Vzc2VzL2FzeW5jLWFjdGlvbi9hc3luYy1hY3Rpb25cIjtcbmltcG9ydCB7QWN0aXZlRmllbGRzQ2hlY2tlcn0gZnJvbSBcIi4uLy4uLy4uLy4uL3NlcnZpY2VzL2NvbmRpdGlvbi1vcGVyYXRvcnMvYWN0aXZlLWZpZWxkcy1jaGVja2VyLnNlcnZpY2VcIjtcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi8uLi9zZXJ2aWNlcy9tZXNzYWdlL21lc3NhZ2Uuc2VydmljZVwiO1xuaW1wb3J0IHtQcm9jZXNzU2VydmljZX0gZnJvbSBcIi4uLy4uLy4uLy4uL3NlcnZpY2VzL3Byb2Nlc3MvcHJvY2Vzcy5zZXJ2aWNlXCI7XG5pbXBvcnQge0Jhc2VTYXZlUmVjb3JkTWFwcGVyfSBmcm9tIFwiLi4vLi4vLi4vLi4vc3RvcmUvcmVjb3JkL3JlY29yZC1tYXBwZXJzL2Jhc2Utc2F2ZS5yZWNvcmQtbWFwcGVyXCI7XG5pbXBvcnQge3Rha2V9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHtWaWV3TW9kZX0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi92aWV3cy92aWV3Lm1vZGVsXCI7XG5pbXBvcnQge1JlY29yZE1hcHBlclJlZ2lzdHJ5fSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3JlY29yZC9yZWNvcmQtbWFwcGVycy9yZWNvcmQtbWFwcGVyLnJlZ2lzdHJ5XCI7XG5pbXBvcnQge1N0cmluZ0FycmF5TWFwfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3R5cGVzL3N0cmluZy1tYXBcIjtcbmltcG9ydCB7U3RyaW5nQXJyYXlNYXRyaXh9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vdHlwZXMvc3RyaW5nLW1hdHJpeFwiO1xuaW1wb3J0IHtSZWNvcmR9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vcmVjb3JkL3JlY29yZC5tb2RlbFwiO1xuaW1wb3J0IHtkZWVwQ2xvbmV9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vdXRpbHMvb2JqZWN0LXV0aWxzXCI7XG5pbXBvcnQge01hcEVudHJ5fSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3R5cGVzL292ZXJyaWRhYmxlLW1hcFwiO1xuaW1wb3J0IHtSZWNvcmRNYXBwZXJ9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vcmVjb3JkL3JlY29yZC1tYXBwZXJzL3JlY29yZC1tYXBwZXIubW9kZWxcIjtcbmltcG9ydCB7RmllbGR9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vcmVjb3JkL2ZpZWxkLm1vZGVsXCI7XG5cblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDYWxjdWxhdGVWYWx1ZUJhY2tlbmRBY3Rpb24gZXh0ZW5kcyBGaWVsZEFjdGlvbkhhbmRsZXIge1xuXG4gICAga2V5ID0gJ2NhbGN1bGF0ZVZhbHVlQmFja2VuZCc7XG4gICAgbW9kZXMgPSBbJ2VkaXQnLCAnY3JlYXRlJ10gYXMgVmlld01vZGVbXTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgYXN5bmNBY3Rpb25TZXJ2aWNlOiBBc3luY0FjdGlvblNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBwcm9jZXNzU2VydmljZTogUHJvY2Vzc1NlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBtZXNzYWdlczogTWVzc2FnZVNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCByZWNvcmRNYXBwZXJzOiBSZWNvcmRNYXBwZXJSZWdpc3RyeSxcbiAgICAgICAgcHJvdGVjdGVkIGJhc2VNYXBwZXI6IEJhc2VTYXZlUmVjb3JkTWFwcGVyLFxuICAgICAgICBwcm90ZWN0ZWQgYWN0aXZlRmllbGRzQ2hlY2tlcjogQWN0aXZlRmllbGRzQ2hlY2tlclxuICAgICkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICByZWNvcmRNYXBwZXJzLnJlZ2lzdGVyKCdkZWZhdWx0JywgYmFzZU1hcHBlci5nZXRLZXkoKSwgYmFzZU1hcHBlcik7XG4gICAgfVxuXG4gICAgcnVuKGRhdGE6IEZpZWxkQWN0aW9uRGF0YSk6IHZvaWQge1xuICAgICAgICBsZXQgcmVjb3JkID0gZGF0YS5zdG9yZS5yZWNvcmRTdG9yZS5nZXRTdGFnaW5nKCk7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gcmVjb3JkLmZpZWxkc1tkYXRhLmFjdGlvbi5maWVsZE5hbWVdO1xuICAgICAgICBjb25zdCBhY3Rpb24gPSBkYXRhLmFjdGlvbjtcblxuICAgICAgICBpZiAoIXJlY29yZCB8fCAhZmllbGQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFjdGl2ZU9uRmllbGRzOiBTdHJpbmdBcnJheU1hcCA9IChhY3Rpb24ucGFyYW1zICYmIGFjdGlvbi5wYXJhbXMuYWN0aXZlT25GaWVsZHMpIHx8IHt9IGFzIFN0cmluZ0FycmF5TWFwO1xuICAgICAgICBjb25zdCByZWxhdGVkRmllbGRzOiBzdHJpbmdbXSA9IE9iamVjdC5rZXlzKGFjdGl2ZU9uRmllbGRzKTtcblxuICAgICAgICBjb25zdCBhY3RpdmVPbkF0dHJpYnV0ZXM6IFN0cmluZ0FycmF5TWF0cml4ID0gKGFjdGlvbi5wYXJhbXMgJiYgYWN0aW9uLnBhcmFtcy5hY3RpdmVPbkF0dHJpYnV0ZXMpIHx8IHt9IGFzIFN0cmluZ0FycmF5TWF0cml4O1xuICAgICAgICBjb25zdCByZWxhdGVkQXR0cmlidXRlc0ZpZWxkczogc3RyaW5nW10gPSBPYmplY3Qua2V5cyhhY3RpdmVPbkF0dHJpYnV0ZXMpO1xuXG5cbiAgICAgICAgY29uc3QgcHJvY2VzcyA9IGFjdGlvbi5wYXJhbXMgJiYgYWN0aW9uLnBhcmFtcy5wcm9jZXNzO1xuXG4gICAgICAgIGlmICghcHJvY2Vzcykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXNBY3RpdmUgPSB0aGlzLmFjdGl2ZUZpZWxkc0NoZWNrZXIuaXNBY3RpdmUocmVsYXRlZEZpZWxkcywgcmVjb3JkLCBhY3RpdmVPbkZpZWxkcywgcmVsYXRlZEF0dHJpYnV0ZXNGaWVsZHMsIGFjdGl2ZU9uQXR0cmlidXRlcyk7XG5cbiAgICAgICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9jZXNzVHlwZSA9IHByb2Nlc3M7XG5cbiAgICAgICAgICAgIGNvbnN0IGJhc2VSZWNvcmQgPSB0aGlzLmdldEJhc2VSZWNvcmQocmVjb3JkKTtcblxuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBhY3Rpb246IHByb2Nlc3NUeXBlLFxuICAgICAgICAgICAgICAgIG1vZHVsZTogcmVjb3JkLm1vZHVsZSA/PyAnJyxcbiAgICAgICAgICAgICAgICByZWNvcmQ6IGJhc2VSZWNvcmRcbiAgICAgICAgICAgIH0gYXMgQXN5bmNBY3Rpb25JbnB1dDtcblxuICAgICAgICAgICAgZmllbGQubG9hZGluZy5zZXQodHJ1ZSlcblxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzU2VydmljZS5zdWJtaXQocHJvY2Vzc1R5cGUsIG9wdGlvbnMpLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcmVzdWx0Py5kYXRhPy52YWx1ZSA/PyBudWxsO1xuICAgICAgICAgICAgICAgIGZpZWxkLmxvYWRpbmcuc2V0KGZhbHNlKVxuXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZXMuYWRkRGFuZ2VyTWVzc2FnZUJ5S2V5KFwiRVJSX0ZJRUxEX0xPR0lDX0JBQ0tFTkRfQ0FMQ1VMQVRJT05cIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZShmaWVsZCwgdmFsdWUudG9TdHJpbmcoKSwgcmVjb3JkKTtcblxuICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgZmllbGQubG9hZGluZy5zZXQoZmFsc2UpXG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlcy5hZGREYW5nZXJNZXNzYWdlQnlLZXkoXCJFUlJfRklFTERfTE9HSUNfQkFDS0VORF9DQUxDVUxBVElPTlwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0QmFzZVJlY29yZChyZWNvcmQ6IFJlY29yZCk6IFJlY29yZCB7XG4gICAgICAgIGlmICghcmVjb3JkKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubWFwUmVjb3JkRmllbGRzKHJlY29yZCk7XG5cbiAgICAgICAgY29uc3QgYmFzZVJlY29yZCA9IHtcbiAgICAgICAgICAgIGlkOiByZWNvcmQuaWQsXG4gICAgICAgICAgICB0eXBlOiByZWNvcmQudHlwZSxcbiAgICAgICAgICAgIG1vZHVsZTogcmVjb3JkLm1vZHVsZSxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHJlY29yZC5hdHRyaWJ1dGVzLFxuICAgICAgICAgICAgYWNsczogcmVjb3JkLmFjbHNcbiAgICAgICAgfSBhcyBSZWNvcmQ7XG5cbiAgICAgICAgcmV0dXJuIGRlZXBDbG9uZShiYXNlUmVjb3JkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNYXAgc3RhZ2luZyBmaWVsZHNcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgbWFwUmVjb3JkRmllbGRzKHJlY29yZDogUmVjb3JkKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG1hcHBlcnM6IE1hcEVudHJ5PFJlY29yZE1hcHBlcj4gPSB0aGlzLnJlY29yZE1hcHBlcnMuZ2V0KHJlY29yZC5tb2R1bGUpO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKG1hcHBlcnMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hcHBlciA9IG1hcHBlcnNba2V5XTtcbiAgICAgICAgICAgIG1hcHBlci5tYXAocmVjb3JkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBuZXcgdmFsdWVcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZmllbGRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVjb3JkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVZhbHVlKGZpZWxkOiBGaWVsZCwgdmFsdWU6IHN0cmluZywgcmVjb3JkOiBSZWNvcmQpOiB2b2lkIHtcbiAgICAgICAgZmllbGQudmFsdWUgPSB2YWx1ZS50b1N0cmluZygpO1xuICAgICAgICBmaWVsZC5mb3JtQ29udHJvbC5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIC8vIHJlLXZhbGlkYXRlIHRoZSBwYXJlbnQgZm9ybS1jb250cm9sIGFmdGVyIHZhbHVlIHVwZGF0ZVxuICAgICAgICByZWNvcmQuZm9ybUdyb3VwLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoe29ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnQ6IHRydWV9KTtcbiAgICB9XG5cbn1cbiJdfQ==