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
import { Component, signal } from '@angular/core';
import { BaseWidgetComponent } from '../../../widgets/base-widget.model';
import { LanguageStore } from '../../../../store/language/language.store';
import { SubpanelStoreFactory } from "../../../subpanel/store/subpanel/subpanel.store.factory";
import { map, take } from "rxjs/operators";
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/language/language.store";
import * as i2 from "../../../subpanel/store/subpanel/subpanel.store.factory";
import * as i3 from "@angular/common";
import * as i4 from "../../../../components/widget-panel/widget-panel.component";
import * as i5 from "../../../subpanel/components/subpanel/subpanel.component";
function RecordTableWidgetComponent_scrm_subpanel_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-subpanel", 4);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("store", ctx_r0.store)("panelHeaderButtonClass", ctx_r0.panelHeaderButtonClass);
} }
export class RecordTableWidgetComponent extends BaseWidgetComponent {
    constructor(language, subpanelFactory) {
        super();
        this.language = language;
        this.subpanelFactory = subpanelFactory;
        this.panelHeaderButtonClass = 'btn btn-sm btn-outline-main';
        this.titleLabelKey = 'LBL_INSIGHTS';
        this.titleKey = signal('');
        this.widgetCollapseMode = signal('none');
        this.loading = true;
        this.subs = [];
    }
    ngOnInit() {
        const recordTableConfig = this?.config?.options?.recordTable ?? null;
        this.store = this.subpanelFactory.create();
        const parentModule = this.context.module;
        const parentRecordId = this.context.id;
        const contextRecord$ = this.context$.pipe(map(context => this.context.record));
        this.store.init(parentModule, parentRecordId, recordTableConfig, contextRecord$);
        this.store.recordList.setLoading(true);
        this.initPanelTitleKey(recordTableConfig);
        this.initPanelCollapseMode();
        this.store.load().pipe(take(1)).subscribe();
    }
    initPanelTitleKey(recordTableConfig) {
        recordTableConfig.title_key = this?.config?.labelKey ?? recordTableConfig.title_key;
        this.titleKey.set(this?.config?.labelKey ?? this.titleLabelKey);
    }
    initPanelCollapseMode() {
        let widgetCollapseMode = 'none';
        if (this?.config?.allowCollapse) {
            widgetCollapseMode = 'collapsible';
        }
        this.widgetCollapseMode.set(widgetCollapseMode);
        this.store.panelCollapseMode.set(widgetCollapseMode);
    }
    static { this.ɵfac = function RecordTableWidgetComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RecordTableWidgetComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore), i0.ɵɵdirectiveInject(i2.SubpanelStoreFactory)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RecordTableWidgetComponent, selectors: [["record-table-widget"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 4, consts: [[3, "title", "mode", "showHeader"], ["widget-body", ""], [1, "widget-background", "record-table-widget", "widget-table", "minimal-table"], [3, "store", "panelHeaderButtonClass", 4, "ngIf"], [3, "store", "panelHeaderButtonClass"]], template: function RecordTableWidgetComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "scrm-widget-panel", 0)(1, "div", 1)(2, "div", 2);
            i0.ɵɵtemplate(3, RecordTableWidgetComponent_scrm_subpanel_3_Template, 1, 2, "scrm-subpanel", 3);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵproperty("title", ctx.titleKey())("mode", ctx.widgetCollapseMode())("showHeader", false);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.store);
        } }, dependencies: [i3.NgIf, i4.WidgetPanelComponent, i5.SubpanelComponent], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordTableWidgetComponent, [{
        type: Component,
        args: [{ selector: 'record-table-widget', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2024 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n\n<scrm-widget-panel [title]=\"titleKey()\" [mode]=\"widgetCollapseMode()\" [showHeader]=\"false\">\n    <div widget-body>\n        <div class=\"widget-background record-table-widget widget-table minimal-table\">\n            <scrm-subpanel *ngIf=\"store\" [store]=\"store\" [panelHeaderButtonClass]=\"panelHeaderButtonClass\"></scrm-subpanel>\n        </div>\n    </div>\n</scrm-widget-panel>\n" }]
    }], () => [{ type: i1.LanguageStore }, { type: i2.SubpanelStoreFactory }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RecordTableWidgetComponent, { className: "RecordTableWidgetComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLXRhYmxlLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9zaWRlYmFyLXdpZGdldC9jb21wb25lbnRzL3JlY29yZC10YWJsZS13aWRnZXQvcmVjb3JkLXRhYmxlLXdpZGdldC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9zaWRlYmFyLXdpZGdldC9jb21wb25lbnRzL3JlY29yZC10YWJsZS13aWRnZXQvcmVjb3JkLXRhYmxlLXdpZGdldC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBVSxNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXhFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLG9DQUFvQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUV4RSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx5REFBeUQsQ0FBQztBQUM3RixPQUFPLEVBQUMsR0FBRyxFQUFFLElBQUksRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7OztJQ0Q3QixtQ0FBK0c7OztJQUFsRSxBQUFoQixvQ0FBZSx5REFBa0Q7O0FEUzFHLE1BQU0sT0FBTywwQkFBMkIsU0FBUSxtQkFBbUI7SUFXL0QsWUFDVyxRQUF1QixFQUNwQixlQUFxQztRQUUvQyxLQUFLLEVBQUUsQ0FBQztRQUhELGFBQVEsR0FBUixRQUFRLENBQWU7UUFDcEIsb0JBQWUsR0FBZixlQUFlLENBQXNCO1FBWm5ELDJCQUFzQixHQUFXLDZCQUE2QixDQUFDO1FBQy9ELGtCQUFhLEdBQUcsY0FBYyxDQUFDO1FBQy9CLGFBQVEsR0FBMkIsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzlDLHVCQUFrQixHQUFzQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFdkUsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNMLFNBQUksR0FBbUIsRUFBRSxDQUFDO0lBU3BDLENBQUM7SUFFRCxRQUFRO1FBRUosTUFBTSxpQkFBaUIsR0FBRyxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxXQUFXLElBQUksSUFBSSxDQUFDO1FBRXJFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMzQyxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUN6QyxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztRQUN2QyxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLGNBQWMsRUFBRSxpQkFBaUIsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFFN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUVTLGlCQUFpQixDQUFDLGlCQUFzQjtRQUM5QyxpQkFBaUIsQ0FBQyxTQUFTLEdBQUcsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLElBQUksaUJBQWlCLENBQUMsU0FBUyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRVMscUJBQXFCO1FBQzNCLElBQUksa0JBQWtCLEdBQXNCLE1BQU0sQ0FBQztRQUNuRCxJQUFJLElBQUksRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLENBQUM7WUFDOUIsa0JBQWtCLEdBQUcsYUFBYSxDQUFDO1FBQ3ZDLENBQUM7UUFDRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLGtCQUF1QyxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUN6RCxDQUFDOzJIQTlDUSwwQkFBMEI7b0VBQTFCLDBCQUEwQjtZQ1YvQixBQURKLEFBREosNENBQTJGLGFBQ3RFLGFBQ2lFO1lBQzFFLCtGQUErRjtZQUczRyxBQURJLEFBREksaUJBQU0sRUFDSixFQUNVOztZQU5rRCxBQUE5QixBQUFyQixzQ0FBb0Isa0NBQThCLHFCQUFxQjtZQUc5RCxlQUFXO1lBQVgsZ0NBQVc7OztpRkRTMUIsMEJBQTBCO2NBTHRDLFNBQVM7MkJBQ0kscUJBQXFCOztrRkFJdEIsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjQgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBzaWduYWwsIFdyaXRhYmxlU2lnbmFsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7QmFzZVdpZGdldENvbXBvbmVudH0gZnJvbSAnLi4vLi4vLi4vd2lkZ2V0cy9iYXNlLXdpZGdldC5tb2RlbCc7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7U3VicGFuZWxTdG9yZX0gZnJvbSBcIi4uLy4uLy4uL3N1YnBhbmVsL3N0b3JlL3N1YnBhbmVsL3N1YnBhbmVsLnN0b3JlXCI7XG5pbXBvcnQge1N1YnBhbmVsU3RvcmVGYWN0b3J5fSBmcm9tIFwiLi4vLi4vLi4vc3VicGFuZWwvc3RvcmUvc3VicGFuZWwvc3VicGFuZWwuc3RvcmUuZmFjdG9yeVwiO1xuaW1wb3J0IHttYXAsIHRha2V9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHtQYW5lbENvbGxhcHNlTW9kZX0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGFuZWwvcGFuZWwuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncmVjb3JkLXRhYmxlLXdpZGdldCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3JlY29yZC10YWJsZS13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW11cbn0pXG5leHBvcnQgY2xhc3MgUmVjb3JkVGFibGVXaWRnZXRDb21wb25lbnQgZXh0ZW5kcyBCYXNlV2lkZ2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwYW5lbEhlYWRlckJ1dHRvbkNsYXNzOiBzdHJpbmcgPSAnYnRuIGJ0bi1zbSBidG4tb3V0bGluZS1tYWluJztcbiAgICB0aXRsZUxhYmVsS2V5ID0gJ0xCTF9JTlNJR0hUUyc7XG4gICAgdGl0bGVLZXk6IFdyaXRhYmxlU2lnbmFsPHN0cmluZz4gPSBzaWduYWwoJycpO1xuICAgIHdpZGdldENvbGxhcHNlTW9kZTogV3JpdGFibGVTaWduYWw8UGFuZWxDb2xsYXBzZU1vZGU+ID0gc2lnbmFsKCdub25lJyk7XG4gICAgbG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgbG9hZGluZyA9IHRydWU7XG4gICAgcHJvdGVjdGVkIHN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gICAgc3RvcmU6IFN1YnBhbmVsU3RvcmU7XG5cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBzdWJwYW5lbEZhY3Rvcnk6IFN1YnBhbmVsU3RvcmVGYWN0b3J5XG4gICAgKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgcmVjb3JkVGFibGVDb25maWcgPSB0aGlzPy5jb25maWc/Lm9wdGlvbnM/LnJlY29yZFRhYmxlID8/IG51bGw7XG5cbiAgICAgICAgdGhpcy5zdG9yZSA9IHRoaXMuc3VicGFuZWxGYWN0b3J5LmNyZWF0ZSgpO1xuICAgICAgICBjb25zdCBwYXJlbnRNb2R1bGUgPSB0aGlzLmNvbnRleHQubW9kdWxlO1xuICAgICAgICBjb25zdCBwYXJlbnRSZWNvcmRJZCA9IHRoaXMuY29udGV4dC5pZDtcbiAgICAgICAgY29uc3QgY29udGV4dFJlY29yZCQgPSB0aGlzLmNvbnRleHQkLnBpcGUobWFwKGNvbnRleHQgPT4gdGhpcy5jb250ZXh0LnJlY29yZCkpO1xuICAgICAgICB0aGlzLnN0b3JlLmluaXQocGFyZW50TW9kdWxlLCBwYXJlbnRSZWNvcmRJZCwgcmVjb3JkVGFibGVDb25maWcsIGNvbnRleHRSZWNvcmQkKTtcbiAgICAgICAgdGhpcy5zdG9yZS5yZWNvcmRMaXN0LnNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgIHRoaXMuaW5pdFBhbmVsVGl0bGVLZXkocmVjb3JkVGFibGVDb25maWcpO1xuICAgICAgICB0aGlzLmluaXRQYW5lbENvbGxhcHNlTW9kZSgpO1xuXG4gICAgICAgIHRoaXMuc3RvcmUubG9hZCgpLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGluaXRQYW5lbFRpdGxlS2V5KHJlY29yZFRhYmxlQ29uZmlnOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgcmVjb3JkVGFibGVDb25maWcudGl0bGVfa2V5ID0gdGhpcz8uY29uZmlnPy5sYWJlbEtleSA/PyByZWNvcmRUYWJsZUNvbmZpZy50aXRsZV9rZXk7XG4gICAgICAgIHRoaXMudGl0bGVLZXkuc2V0KHRoaXM/LmNvbmZpZz8ubGFiZWxLZXkgPz8gdGhpcy50aXRsZUxhYmVsS2V5KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdFBhbmVsQ29sbGFwc2VNb2RlKCk6IHZvaWQge1xuICAgICAgICBsZXQgd2lkZ2V0Q29sbGFwc2VNb2RlOiBQYW5lbENvbGxhcHNlTW9kZSA9ICdub25lJztcbiAgICAgICAgaWYgKHRoaXM/LmNvbmZpZz8uYWxsb3dDb2xsYXBzZSkge1xuICAgICAgICAgICAgd2lkZ2V0Q29sbGFwc2VNb2RlID0gJ2NvbGxhcHNpYmxlJztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLndpZGdldENvbGxhcHNlTW9kZS5zZXQod2lkZ2V0Q29sbGFwc2VNb2RlIGFzIFBhbmVsQ29sbGFwc2VNb2RlKTtcbiAgICAgICAgdGhpcy5zdG9yZS5wYW5lbENvbGxhcHNlTW9kZS5zZXQod2lkZ2V0Q29sbGFwc2VNb2RlKTtcbiAgICB9XG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDI0IFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG5cbjxzY3JtLXdpZGdldC1wYW5lbCBbdGl0bGVdPVwidGl0bGVLZXkoKVwiIFttb2RlXT1cIndpZGdldENvbGxhcHNlTW9kZSgpXCIgW3Nob3dIZWFkZXJdPVwiZmFsc2VcIj5cbiAgICA8ZGl2IHdpZGdldC1ib2R5PlxuICAgICAgICA8ZGl2IGNsYXNzPVwid2lkZ2V0LWJhY2tncm91bmQgcmVjb3JkLXRhYmxlLXdpZGdldCB3aWRnZXQtdGFibGUgbWluaW1hbC10YWJsZVwiPlxuICAgICAgICAgICAgPHNjcm0tc3VicGFuZWwgKm5nSWY9XCJzdG9yZVwiIFtzdG9yZV09XCJzdG9yZVwiIFtwYW5lbEhlYWRlckJ1dHRvbkNsYXNzXT1cInBhbmVsSGVhZGVyQnV0dG9uQ2xhc3NcIj48L3Njcm0tc3VicGFuZWw+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9zY3JtLXdpZGdldC1wYW5lbD5cbiJdfQ==