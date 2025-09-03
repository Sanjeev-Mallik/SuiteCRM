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
import { map } from 'rxjs/operators';
import { EntityMutationGQL } from '../api/graphql-api/api.record.create';
import * as i0 from "@angular/core";
import * as i1 from "../api/graphql-api/api.record.create";
const blankProcess = {
    id: null,
    _id: null,
    status: null,
    async: null,
    type: null,
    options: null,
    messages: []
};
export class ProcessService {
    constructor(recordMutationGQL) {
        this.recordMutationGQL = recordMutationGQL;
        this.graphqlName = 'process';
        this.coreName = 'Process';
        this.createFieldsMetadata = {
            fields: [
                '_id',
                'status',
                'async',
                'type',
                'messages',
                'data'
            ]
        };
    }
    /**
     * Public Api
     */
    /**
     * Submit and action/process request
     * Returns observable
     *
     * @param {string} type to create
     * @param {object} options to send
     * @returns {object} Observable<any>
     */
    submit(type, options) {
        return this.create(type, options);
    }
    /**
     * Internal API
     */
    /**
     * Create a process on the backend
     *
     * @param {string} type to create
     * @param {object} options to send
     * @returns {object} Observable<any>
     */
    create(type, options) {
        const input = {
            type,
            options
        };
        return this.recordMutationGQL.create(this.graphqlName, this.coreName, input, this.createFieldsMetadata)
            .pipe(map(({ data }) => {
            const process = { ...blankProcess };
            if (data.createProcess && data.createProcess.process) {
                return data.createProcess.process;
            }
            return process;
        }));
    }
    static { this.ɵfac = function ProcessService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ProcessService)(i0.ɵɵinject(i1.EntityMutationGQL)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ProcessService, factory: ProcessService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProcessService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.EntityMutationGQL }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvY2Vzcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3NlcnZpY2VzL3Byb2Nlc3MvcHJvY2Vzcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuQyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQzs7O0FBaUJ2RSxNQUFNLFlBQVksR0FBWTtJQUMxQixFQUFFLEVBQUUsSUFBSTtJQUNSLEdBQUcsRUFBRSxJQUFJO0lBQ1QsTUFBTSxFQUFFLElBQUk7SUFDWixLQUFLLEVBQUUsSUFBSTtJQUNYLElBQUksRUFBRSxJQUFJO0lBQ1YsT0FBTyxFQUFFLElBQUk7SUFDYixRQUFRLEVBQUUsRUFBRTtDQUNmLENBQUM7QUFNRixNQUFNLE9BQU8sY0FBYztJQWdCdkIsWUFBb0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFkOUMsZ0JBQVcsR0FBRyxTQUFTLENBQUM7UUFDeEIsYUFBUSxHQUFHLFNBQVMsQ0FBQztRQUVyQix5QkFBb0IsR0FBRztZQUM3QixNQUFNLEVBQUU7Z0JBQ0osS0FBSztnQkFDTCxRQUFRO2dCQUNSLE9BQU87Z0JBQ1AsTUFBTTtnQkFDTixVQUFVO2dCQUNWLE1BQU07YUFDVDtTQUNKLENBQUM7SUFHRixDQUFDO0lBRUQ7O09BRUc7SUFFSDs7Ozs7OztPQU9HO0lBQ0ksTUFBTSxDQUFDLElBQVksRUFBRSxPQUF1QjtRQUMvQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRDs7T0FFRztJQUdIOzs7Ozs7T0FNRztJQUNPLE1BQU0sQ0FBQyxJQUFZLEVBQUUsT0FBdUI7UUFFbEQsTUFBTSxLQUFLLEdBQUc7WUFDVixJQUFJO1lBQ0osT0FBTztTQUNWLENBQUM7UUFFRixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsb0JBQW9CLENBQUM7YUFDbEcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBRTtZQUNqQixNQUFNLE9BQU8sR0FBWSxFQUFDLEdBQUcsWUFBWSxFQUFDLENBQUM7WUFFM0MsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ25ELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7WUFDdEMsQ0FBQztZQUVELE9BQU8sT0FBTyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDWixDQUFDOytHQWhFUSxjQUFjO3VFQUFkLGNBQWMsV0FBZCxjQUFjLG1CQUZYLE1BQU07O2lGQUVULGNBQWM7Y0FIMUIsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7bWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge0VudGl0eU11dGF0aW9uR1FMfSBmcm9tICcuLi9hcGkvZ3JhcGhxbC1hcGkvYXBpLnJlY29yZC5jcmVhdGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb2Nlc3NPcHRpb25zIHtcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvY2VzcyB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBfaWQ6IHN0cmluZztcbiAgICBzdGF0dXM6IHN0cmluZztcbiAgICBhc3luYzogYm9vbGVhbjtcbiAgICB0eXBlOiBzdHJpbmc7XG4gICAgb3B0aW9uczogUHJvY2Vzc09wdGlvbnM7XG4gICAgZGF0YT86IFByb2Nlc3NPcHRpb25zO1xuICAgIG1lc3NhZ2VzOiBzdHJpbmdbXTtcbn1cblxuY29uc3QgYmxhbmtQcm9jZXNzOiBQcm9jZXNzID0ge1xuICAgIGlkOiBudWxsLFxuICAgIF9pZDogbnVsbCxcbiAgICBzdGF0dXM6IG51bGwsXG4gICAgYXN5bmM6IG51bGwsXG4gICAgdHlwZTogbnVsbCxcbiAgICBvcHRpb25zOiBudWxsLFxuICAgIG1lc3NhZ2VzOiBbXVxufTtcblxuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9jZXNzU2VydmljZSB7XG5cbiAgICBwcm90ZWN0ZWQgZ3JhcGhxbE5hbWUgPSAncHJvY2Vzcyc7XG4gICAgcHJvdGVjdGVkIGNvcmVOYW1lID0gJ1Byb2Nlc3MnO1xuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUZpZWxkc01ldGFkYXRhID0ge1xuICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAgICdfaWQnLFxuICAgICAgICAgICAgJ3N0YXR1cycsXG4gICAgICAgICAgICAnYXN5bmMnLFxuICAgICAgICAgICAgJ3R5cGUnLFxuICAgICAgICAgICAgJ21lc3NhZ2VzJyxcbiAgICAgICAgICAgICdkYXRhJ1xuICAgICAgICBdXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVjb3JkTXV0YXRpb25HUUw6IEVudGl0eU11dGF0aW9uR1FMKSB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHVibGljIEFwaVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogU3VibWl0IGFuZCBhY3Rpb24vcHJvY2VzcyByZXF1ZXN0XG4gICAgICogUmV0dXJucyBvYnNlcnZhYmxlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSB0byBjcmVhdGVcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyB0byBzZW5kXG4gICAgICogQHJldHVybnMge29iamVjdH0gT2JzZXJ2YWJsZTxhbnk+XG4gICAgICovXG4gICAgcHVibGljIHN1Ym1pdCh0eXBlOiBzdHJpbmcsIG9wdGlvbnM6IFByb2Nlc3NPcHRpb25zKTogT2JzZXJ2YWJsZTxQcm9jZXNzPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZSh0eXBlLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBBUElcbiAgICAgKi9cblxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgcHJvY2VzcyBvbiB0aGUgYmFja2VuZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgdG8gY3JlYXRlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgdG8gc2VuZFxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IE9ic2VydmFibGU8YW55PlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBjcmVhdGUodHlwZTogc3RyaW5nLCBvcHRpb25zOiBQcm9jZXNzT3B0aW9ucyk6IE9ic2VydmFibGU8UHJvY2Vzcz4ge1xuXG4gICAgICAgIGNvbnN0IGlucHV0ID0ge1xuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gdGhpcy5yZWNvcmRNdXRhdGlvbkdRTC5jcmVhdGUodGhpcy5ncmFwaHFsTmFtZSwgdGhpcy5jb3JlTmFtZSwgaW5wdXQsIHRoaXMuY3JlYXRlRmllbGRzTWV0YWRhdGEpXG4gICAgICAgICAgICAucGlwZShtYXAoKHtkYXRhfSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2Nlc3M6IFByb2Nlc3MgPSB7Li4uYmxhbmtQcm9jZXNzfTtcblxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmNyZWF0ZVByb2Nlc3MgJiYgZGF0YS5jcmVhdGVQcm9jZXNzLnByb2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEuY3JlYXRlUHJvY2Vzcy5wcm9jZXNzO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9jZXNzO1xuICAgICAgICAgICAgfSkpO1xuICAgIH1cbn1cbiJdfQ==