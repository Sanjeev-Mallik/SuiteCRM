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
import { isVoid } from '../../common/utils/value-utils';
import { UntypedFormGroup } from '@angular/forms';
import { LanguageStore } from '../../store/language/language.store';
import { FieldManager } from './field/field.manager';
import { FieldHandlerRegistry } from "./field/handler/field-handler.registry";
import * as i0 from "@angular/core";
import * as i1 from "./field/field.manager";
import * as i2 from "../../store/language/language.store";
import * as i3 from "./field/handler/field-handler.registry";
export class RecordManager {
    constructor(fieldManager, language, fieldHandlerRegistry) {
        this.fieldManager = fieldManager;
        this.language = language;
        this.fieldHandlerRegistry = fieldHandlerRegistry;
    }
    /**
     * Get empty record
     *
     * @param {string} module string
     * @returns {object} Record
     */
    buildEmptyRecord(module) {
        return {
            id: '',
            module,
            attributes: {
                id: ''
            },
            fields: {},
            formGroup: new UntypedFormGroup({}),
        };
    }
    /**
     * Init Fields
     *
     * @param {object} record to use
     * @param {object} viewFieldDefinitions to use
     * @returns {object} fields
     */
    initFields(record, viewFieldDefinitions) {
        if (!record.fields) {
            record.fields = {};
        }
        if (!record.formGroup) {
            record.formGroup = new UntypedFormGroup({});
        }
        viewFieldDefinitions.forEach(viewField => {
            if (!viewField || !viewField.name) {
                return;
            }
            if (record.fields[viewField.name]) {
                return;
            }
            const isVardefBased = viewField?.vardefBased ?? false;
            if (isVardefBased) {
                this.fieldManager.addVardefOnlyField(record, viewField, this.language);
                return;
            }
            this.fieldManager.addField(record, viewField, this.language);
        });
        return record.fields;
    }
    initFieldDefaults(record) {
        if (!record.fields) {
            return;
        }
        Object.entries(record.fields).forEach(([key, field]) => {
            const fieldHandler = this.fieldHandlerRegistry.get(record.module, field.type);
            fieldHandler.initDefaultValue(field, record);
        });
    }
    /**
     * Inject param fields
     *
     * @param {object} params Params
     * @param {object} record Record
     * @param {object} vardefs FieldDefinitionMap
     */
    injectParamFields(params, record, vardefs) {
        Object.keys(params).forEach(paramKey => {
            const definition = vardefs[paramKey];
            if (!isVoid(definition)) {
                const type = definition.type || '';
                let idName = definition.id_name || '';
                const name = definition.name || '';
                let rname = definition.rname || '';
                if (type === 'relate' && idName === name) {
                    record.attributes[paramKey] = params[paramKey];
                    return;
                }
                if (type === 'parent') {
                    const relate = {};
                    let rname = 'name';
                    let idName = 'parent_id';
                    const groupFieldKey = paramKey + '-group';
                    const groupField = vardefs[groupFieldKey] ?? {};
                    const parentName = groupField.groupFields[paramKey];
                    if (parentName && parentName.rname) {
                        rname = parentName.rname;
                    }
                    if (rname) {
                        relate[rname] = params[paramKey];
                    }
                    if (idName && params[idName]) {
                        relate.id = params[idName];
                    }
                    record.attributes[paramKey] = relate;
                    return;
                }
                if (type === 'relate') {
                    const relate = {};
                    if (rname) {
                        relate[rname] = params[paramKey];
                    }
                    if (idName && params[idName]) {
                        relate.id = params[idName];
                    }
                    record.attributes[paramKey] = relate;
                    return;
                }
                record.attributes[paramKey] = params[paramKey];
                return;
            }
            this.handleLinkTypeRelationship(paramKey, params, vardefs, record);
        });
    }
    handleLinkTypeRelationship(paramKey, params, vardefs, record) {
        if (paramKey === 'return_relationship') {
            const returnRelationship = params.return_relationship;
            if (!returnRelationship) {
                return;
            }
            // check, on vardefs, if there is a field of type = link
            // with relationship equal to the value of return_relationship param
            Object.keys(vardefs).forEach(key => {
                const vardef = vardefs[key];
                const type = vardef.type || '';
                if (type !== 'link') {
                    return;
                }
                const relationship = vardef.relationship || '';
                if (!relationship) {
                    return;
                }
                if (relationship === returnRelationship) {
                    const linkFieldName = vardef.name;
                    const module = vardef.module ?? params.return_module ?? '';
                    if (!module) {
                        return;
                    }
                    const parentName = params.parent_name;
                    if (!parentName) {
                        return;
                    }
                    // name of the related parent field e.g. contact_id as injected
                    // in to field definition from its metadata definition
                    const relateId = vardef?.relationshipMetadata?.related_id;
                    const parentId = params[relateId] ?? '';
                    if (!parentId) {
                        return;
                    }
                    // add link type fields as line items to base record
                    record.attributes[linkFieldName] = [
                        {
                            id: parentId,
                            module,
                            attributes: {
                                id: parentId,
                                name: parentName
                            }
                        }
                    ];
                    return;
                }
            });
        }
    }
    static { this.ɵfac = function RecordManager_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RecordManager)(i0.ɵɵinject(i1.FieldManager), i0.ɵɵinject(i2.LanguageStore), i0.ɵɵinject(i3.FieldHandlerRegistry)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordManager, factory: RecordManager.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordManager, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.FieldManager }, { type: i2.LanguageStore }, { type: i3.FieldHandlerRegistry }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLm1hbmFnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc2VydmljZXMvcmVjb3JkL3JlY29yZC5tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBSXpDLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDbEUsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBRW5ELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHdDQUF3QyxDQUFDOzs7OztBQUs1RSxNQUFNLE9BQU8sYUFBYTtJQUV0QixZQUNjLFlBQTBCLEVBQzFCLFFBQXVCLEVBQ3ZCLG9CQUEwQztRQUYxQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFFeEQsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsZ0JBQWdCLENBQUMsTUFBYztRQUMzQixPQUFPO1lBQ0gsRUFBRSxFQUFFLEVBQUU7WUFDTixNQUFNO1lBQ04sVUFBVSxFQUFFO2dCQUNSLEVBQUUsRUFBRSxFQUFFO2FBQ1Q7WUFDRCxNQUFNLEVBQUUsRUFBRTtZQUNWLFNBQVMsRUFBRSxJQUFJLGdCQUFnQixDQUFDLEVBQUUsQ0FBQztTQUM1QixDQUFDO0lBQ2hCLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSxVQUFVLENBQUMsTUFBYyxFQUFFLG9CQUEyQztRQUV6RSxJQUFJLENBQUMsTUFBTSxDQUFDLE1B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RCxNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO29CQUN0QyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7d0JBQ2QsT0FBTztvQkFDWCxDQUFDO29CQUVELCtEQUErRDtvQkFDL0Qsc0RBQXNEO29CQUN0RCxNQUFNLFFBQVEsR0FBRyxNQUFNLEVBQUUsb0JBQW9CLEVBQUUsVUFBVSxDQUFDO29CQUMxRCxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUN4QyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7d0JBQ1osT0FBTztvQkFDWCxDQUFDO29CQUVELG9EQUFvRDtvQkFDcEQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsR0FBRzt3QkFDL0I7NEJBQ0ksRUFBRSxFQUFFLFFBQVE7NEJBQ1osTUFBTTs0QkFDTixVQUFVLEVBQUU7Z0NBQ1IsRUFBRSxFQUFFLFFBQVE7Z0NBQ1osSUFBSSxFQUFFLFVBQVU7NkJBQ25CO3lCQUNNO3FCQUNkLENBQUM7b0JBRUYsT0FBTztnQkFDWCxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO0lBQ0wsQ0FBQzs4R0FyTlEsYUFBYTt1RUFBYixhQUFhLFdBQWIsYUFBYSxtQkFGVixNQUFNOztpRkFFVCxhQUFhO2NBSHpCLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Vmlld0ZpZWxkRGVmaW5pdGlvbn0gZnJvbSAnLi4vLi4vY29tbW9uL21ldGFkYXRhL21ldGFkYXRhLm1vZGVsJztcbmltcG9ydCB7RmllbGRNYXAsIEZpZWxkRGVmaW5pdGlvbk1hcH0gZnJvbSAnLi4vLi4vY29tbW9uL3JlY29yZC9maWVsZC5tb2RlbCc7XG5pbXBvcnQge1JlY29yZH0gZnJvbSAnLi4vLi4vY29tbW9uL3JlY29yZC9yZWNvcmQubW9kZWwnO1xuaW1wb3J0IHtpc1ZvaWR9IGZyb20gJy4uLy4uL2NvbW1vbi91dGlscy92YWx1ZS11dGlscyc7XG5pbXBvcnQge1VudHlwZWRGb3JtR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZX0gZnJvbSAnLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtGaWVsZE1hbmFnZXJ9IGZyb20gJy4vZmllbGQvZmllbGQubWFuYWdlcic7XG5pbXBvcnQge1BhcmFtc30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7RmllbGRIYW5kbGVyUmVnaXN0cnl9IGZyb20gXCIuL2ZpZWxkL2hhbmRsZXIvZmllbGQtaGFuZGxlci5yZWdpc3RyeVwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFJlY29yZE1hbmFnZXIge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBmaWVsZE1hbmFnZXI6IEZpZWxkTWFuYWdlcixcbiAgICAgICAgcHJvdGVjdGVkIGxhbmd1YWdlOiBMYW5ndWFnZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgZmllbGRIYW5kbGVyUmVnaXN0cnk6IEZpZWxkSGFuZGxlclJlZ2lzdHJ5XG4gICAgKSB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGVtcHR5IHJlY29yZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1vZHVsZSBzdHJpbmdcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBSZWNvcmRcbiAgICAgKi9cbiAgICBidWlsZEVtcHR5UmVjb3JkKG1vZHVsZTogc3RyaW5nKTogUmVjb3JkIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiAnJyxcbiAgICAgICAgICAgIG1vZHVsZSxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgICAgICBpZDogJydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmaWVsZHM6IHt9LFxuICAgICAgICAgICAgZm9ybUdyb3VwOiBuZXcgVW50eXBlZEZvcm1Hcm91cCh7fSksXG4gICAgICAgIH0gYXMgUmVjb3JkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXQgRmllbGRzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVjb3JkIHRvIHVzZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB2aWV3RmllbGREZWZpbml0aW9ucyB0byB1c2VcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBmaWVsZHNcbiAgICAgKi9cbiAgICBwdWJsaWMgaW5pdEZpZWxkcyhyZWNvcmQ6IFJlY29yZCwgdmlld0ZpZWxkRGVmaW5pdGlvbnM6IFZpZXdGaWVsZERlZmluaXRpb25bXSk6IEZpZWxkTWFwIHtcblxuICAgICAgICBpZiAoIXJlY29yZC5maWVsZHMpIHtcbiAgICAgICAgICAgIHJlY29yZC5maWVsZHMgPSB7fSBhcyBGaWVsZE1hcDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcmVjb3JkLmZvcm1Hcm91cCkge1xuICAgICAgICAgICAgcmVjb3JkLmZvcm1Hcm91cCA9IG5ldyBVbnR5cGVkRm9ybUdyb3VwKHt9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZpZXdGaWVsZERlZmluaXRpb25zLmZvckVhY2godmlld0ZpZWxkID0+IHtcbiAgICAgICAgICAgIGlmICghdmlld0ZpZWxkIHx8ICF2aWV3RmllbGQubmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYocmVjb3JkLmZpZWxkc1t2aWV3RmllbGQubmFtZV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGlzVmFyZGVmQmFzZWQgPSB2aWV3RmllbGQ/LnZhcmRlZkJhc2VkID8/IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAoaXNWYXJkZWZCYXNlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmllbGRNYW5hZ2VyLmFkZFZhcmRlZk9ubHlGaWVsZChyZWNvcmQsIHZpZXdGaWVsZCwgdGhpcy5sYW5ndWFnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmZpZWxkTWFuYWdlci5hZGRGaWVsZChyZWNvcmQsIHZpZXdGaWVsZCwgdGhpcy5sYW5ndWFnZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZWNvcmQuZmllbGRzO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbml0RmllbGREZWZhdWx0cyhyZWNvcmQ6IFJlY29yZCk6IHZvaWQge1xuXG4gICAgICAgIGlmICghcmVjb3JkLmZpZWxkcykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmVudHJpZXMocmVjb3JkLmZpZWxkcykuZm9yRWFjaCgoW2tleSwgZmllbGRdKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWVsZEhhbmRsZXIgPSB0aGlzLmZpZWxkSGFuZGxlclJlZ2lzdHJ5LmdldChyZWNvcmQubW9kdWxlLCBmaWVsZC50eXBlKTtcbiAgICAgICAgICAgIGZpZWxkSGFuZGxlci5pbml0RGVmYXVsdFZhbHVlKGZpZWxkLCByZWNvcmQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbmplY3QgcGFyYW0gZmllbGRzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcGFyYW1zIFBhcmFtc1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZWNvcmQgUmVjb3JkXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHZhcmRlZnMgRmllbGREZWZpbml0aW9uTWFwXG4gICAgICovXG4gICAgcHVibGljIGluamVjdFBhcmFtRmllbGRzKHBhcmFtczogUGFyYW1zLCByZWNvcmQ6IFJlY29yZCwgdmFyZGVmczogRmllbGREZWZpbml0aW9uTWFwKTogdm9pZCB7XG5cbiAgICAgICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKHBhcmFtS2V5ID0+IHtcblxuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IHZhcmRlZnNbcGFyYW1LZXldO1xuXG4gICAgICAgICAgICBpZiAoIWlzVm9pZChkZWZpbml0aW9uKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBkZWZpbml0aW9uLnR5cGUgfHwgJyc7XG4gICAgICAgICAgICAgICAgbGV0IGlkTmFtZSA9IGRlZmluaXRpb24uaWRfbmFtZSB8fCAnJztcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gZGVmaW5pdGlvbi5uYW1lIHx8ICcnO1xuICAgICAgICAgICAgICAgIGxldCBybmFtZSA9IGRlZmluaXRpb24ucm5hbWUgfHwgJyc7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3JlbGF0ZScgJiYgaWROYW1lID09PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlY29yZC5hdHRyaWJ1dGVzW3BhcmFtS2V5XSA9IHBhcmFtc1twYXJhbUtleV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3BhcmVudCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVsYXRlID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBybmFtZSA9ICduYW1lJztcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlkTmFtZSA9ICdwYXJlbnRfaWQnO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBncm91cEZpZWxkS2V5ID0gcGFyYW1LZXkgKyAnLWdyb3VwJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ3JvdXBGaWVsZCA9IHZhcmRlZnNbZ3JvdXBGaWVsZEtleV0gPz8ge307XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudE5hbWUgPSBncm91cEZpZWxkLmdyb3VwRmllbGRzW3BhcmFtS2V5XTtcblxuICAgICAgICAgICAgICAgICAgICBpZihwYXJlbnROYW1lICAmJiBwYXJlbnROYW1lLnJuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBybmFtZSA9IHBhcmVudE5hbWUucm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAocm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbGF0ZVtybmFtZV0gPSBwYXJhbXNbcGFyYW1LZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlkTmFtZSAmJiBwYXJhbXNbaWROYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVsYXRlLmlkID0gcGFyYW1zW2lkTmFtZV07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZWNvcmQuYXR0cmlidXRlc1twYXJhbUtleV0gPSByZWxhdGU7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAncmVsYXRlJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWxhdGUgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWxhdGVbcm5hbWVdID0gcGFyYW1zW3BhcmFtS2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpZE5hbWUgJiYgcGFyYW1zW2lkTmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbGF0ZS5pZCA9IHBhcmFtc1tpZE5hbWVdO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkLmF0dHJpYnV0ZXNbcGFyYW1LZXldID0gcmVsYXRlO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZWNvcmQuYXR0cmlidXRlc1twYXJhbUtleV0gPSBwYXJhbXNbcGFyYW1LZXldO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUxpbmtUeXBlUmVsYXRpb25zaGlwKHBhcmFtS2V5LCBwYXJhbXMsIHZhcmRlZnMsIHJlY29yZCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBoYW5kbGVMaW5rVHlwZVJlbGF0aW9uc2hpcChwYXJhbUtleTogc3RyaW5nLCBwYXJhbXM6IFBhcmFtcywgdmFyZGVmczogRmllbGREZWZpbml0aW9uTWFwLCByZWNvcmQ6IFJlY29yZCk6IHZvaWQge1xuICAgICAgICBpZiAocGFyYW1LZXkgPT09ICdyZXR1cm5fcmVsYXRpb25zaGlwJykge1xuXG4gICAgICAgICAgICBjb25zdCByZXR1cm5SZWxhdGlvbnNoaXAgPSBwYXJhbXMucmV0dXJuX3JlbGF0aW9uc2hpcDtcbiAgICAgICAgICAgIGlmICghcmV0dXJuUmVsYXRpb25zaGlwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjaGVjaywgb24gdmFyZGVmcywgaWYgdGhlcmUgaXMgYSBmaWVsZCBvZiB0eXBlID0gbGlua1xuICAgICAgICAgICAgLy8gd2l0aCByZWxhdGlvbnNoaXAgZXF1YWwgdG8gdGhlIHZhbHVlIG9mIHJldHVybl9yZWxhdGlvbnNoaXAgcGFyYW1cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHZhcmRlZnMpLmZvckVhY2goa2V5ID0+IHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHZhcmRlZiA9IHZhcmRlZnNba2V5XTtcbiAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gdmFyZGVmLnR5cGUgfHwgJyc7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgIT09ICdsaW5rJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgcmVsYXRpb25zaGlwID0gdmFyZGVmLnJlbGF0aW9uc2hpcCB8fCAnJztcbiAgICAgICAgICAgICAgICBpZiAoIXJlbGF0aW9uc2hpcCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlbGF0aW9uc2hpcCA9PT0gcmV0dXJuUmVsYXRpb25zaGlwKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGlua0ZpZWxkTmFtZSA9IHZhcmRlZi5uYW1lO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2R1bGUgPSB2YXJkZWYubW9kdWxlID8/IHBhcmFtcy5yZXR1cm5fbW9kdWxlID8/ICcnO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50TmFtZSA9IHBhcmFtcy5wYXJlbnRfbmFtZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwYXJlbnROYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBuYW1lIG9mIHRoZSByZWxhdGVkIHBhcmVudCBmaWVsZCBlLmcuIGNvbnRhY3RfaWQgYXMgaW5qZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gaW4gdG8gZmllbGQgZGVmaW5pdGlvbiBmcm9tIGl0cyBtZXRhZGF0YSBkZWZpbml0aW9uXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbGF0ZUlkID0gdmFyZGVmPy5yZWxhdGlvbnNoaXBNZXRhZGF0YT8ucmVsYXRlZF9pZDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50SWQgPSBwYXJhbXNbcmVsYXRlSWRdID8/ICcnO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXBhcmVudElkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBhZGQgbGluayB0eXBlIGZpZWxkcyBhcyBsaW5lIGl0ZW1zIHRvIGJhc2UgcmVjb3JkXG4gICAgICAgICAgICAgICAgICAgIHJlY29yZC5hdHRyaWJ1dGVzW2xpbmtGaWVsZE5hbWVdID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBwYXJlbnRJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogcGFyZW50SWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHBhcmVudE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGFzIFJlY29yZFxuICAgICAgICAgICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==