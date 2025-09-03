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
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownButtonModule } from '../../../../components/dropdown-button/dropdown-button.module';
import { ButtonModule } from '../../../../components/button/button.module';
import { LabelModule } from '../../../../components/label/label.module';
import { PanelModule } from '../../../../components/panel/panel.module';
import { FieldGridModule } from '../../../../components/field-grid/field-grid.module';
import { RecordGridModule } from '../../../../components/record-grid/record-grid.module';
import { RecordThreadComponent } from './record-thread.component';
import { RecordThreadItemModule } from '../record-thread-item/record-thread-item.module';
import { LoadingSpinnerModule } from '../../../../components/loading-spinner/loading-spinner.module';
import { ActionGroupMenuModule } from "../../../../components/action-group-menu/action-group-menu.module";
import * as i0 from "@angular/core";
export class RecordThreadModule {
    static { this.ɵfac = function RecordThreadModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RecordThreadModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: RecordThreadModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            ButtonModule,
            PanelModule,
            FieldGridModule,
            DropdownButtonModule,
            LabelModule,
            RecordGridModule,
            ButtonModule,
            RecordThreadItemModule,
            LoadingSpinnerModule,
            ActionGroupMenuModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordThreadModule, [{
        type: NgModule,
        args: [{
                declarations: [RecordThreadComponent],
                exports: [
                    RecordThreadComponent
                ],
                imports: [
                    CommonModule,
                    ButtonModule,
                    PanelModule,
                    FieldGridModule,
                    DropdownButtonModule,
                    LabelModule,
                    RecordGridModule,
                    ButtonModule,
                    RecordThreadItemModule,
                    LoadingSpinnerModule,
                    ActionGroupMenuModule,
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(RecordThreadModule, { declarations: [RecordThreadComponent], imports: [CommonModule,
        ButtonModule,
        PanelModule,
        FieldGridModule,
        DropdownButtonModule,
        LabelModule,
        RecordGridModule,
        ButtonModule,
        RecordThreadItemModule,
        LoadingSpinnerModule,
        ActionGroupMenuModule], exports: [RecordThreadComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLXRocmVhZC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9yZWNvcmQtdGhyZWFkL2NvbXBvbmVudHMvcmVjb3JkLXRocmVhZC9yZWNvcmQtdGhyZWFkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sK0RBQStELENBQUM7QUFDbkcsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUN0RSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDdEUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHFEQUFxRCxDQUFDO0FBQ3BGLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHVEQUF1RCxDQUFDO0FBQ3ZGLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLGlEQUFpRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLCtEQUErRCxDQUFDO0FBQ25HLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLG1FQUFtRSxDQUFDOztBQXNCeEcsTUFBTSxPQUFPLGtCQUFrQjttSEFBbEIsa0JBQWtCO21FQUFsQixrQkFBa0I7dUVBZHZCLFlBQVk7WUFDWixZQUFZO1lBQ1osV0FBVztZQUNYLGVBQWU7WUFDZixvQkFBb0I7WUFDcEIsV0FBVztZQUNYLGdCQUFnQjtZQUNoQixZQUFZO1lBQ1osc0JBQXNCO1lBQ3RCLG9CQUFvQjtZQUNwQixxQkFBcUI7O2lGQUloQixrQkFBa0I7Y0FwQjlCLFFBQVE7ZUFBQztnQkFDTixZQUFZLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztnQkFDckMsT0FBTyxFQUFFO29CQUNMLHFCQUFxQjtpQkFDeEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixXQUFXO29CQUNYLGVBQWU7b0JBQ2Ysb0JBQW9CO29CQUNwQixXQUFXO29CQUNYLGdCQUFnQjtvQkFDaEIsWUFBWTtvQkFDWixzQkFBc0I7b0JBQ3RCLG9CQUFvQjtvQkFDcEIscUJBQXFCO2lCQUV4QjthQUNKOzt3RkFDWSxrQkFBa0IsbUJBbkJaLHFCQUFxQixhQUtoQyxZQUFZO1FBQ1osWUFBWTtRQUNaLFdBQVc7UUFDWCxlQUFlO1FBQ2Ysb0JBQW9CO1FBQ3BCLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLHNCQUFzQjtRQUN0QixvQkFBb0I7UUFDcEIscUJBQXFCLGFBYnJCLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7RHJvcGRvd25CdXR0b25Nb2R1bGV9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZHJvcGRvd24tYnV0dG9uL2Ryb3Bkb3duLWJ1dHRvbi5tb2R1bGUnO1xuaW1wb3J0IHtCdXR0b25Nb2R1bGV9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5tb2R1bGUnO1xuaW1wb3J0IHtMYWJlbE1vZHVsZX0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9sYWJlbC9sYWJlbC5tb2R1bGUnO1xuaW1wb3J0IHtQYW5lbE1vZHVsZX0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9wYW5lbC9wYW5lbC5tb2R1bGUnO1xuaW1wb3J0IHtGaWVsZEdyaWRNb2R1bGV9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZmllbGQtZ3JpZC9maWVsZC1ncmlkLm1vZHVsZSc7XG5pbXBvcnQge1JlY29yZEdyaWRNb2R1bGV9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcmVjb3JkLWdyaWQvcmVjb3JkLWdyaWQubW9kdWxlJztcbmltcG9ydCB7UmVjb3JkVGhyZWFkQ29tcG9uZW50fSBmcm9tICcuL3JlY29yZC10aHJlYWQuY29tcG9uZW50JztcbmltcG9ydCB7UmVjb3JkVGhyZWFkSXRlbU1vZHVsZX0gZnJvbSAnLi4vcmVjb3JkLXRocmVhZC1pdGVtL3JlY29yZC10aHJlYWQtaXRlbS5tb2R1bGUnO1xuaW1wb3J0IHtMb2FkaW5nU3Bpbm5lck1vZHVsZX0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9sb2FkaW5nLXNwaW5uZXIvbG9hZGluZy1zcGlubmVyLm1vZHVsZSc7XG5pbXBvcnQge0FjdGlvbkdyb3VwTWVudU1vZHVsZX0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvYWN0aW9uLWdyb3VwLW1lbnUvYWN0aW9uLWdyb3VwLW1lbnUubW9kdWxlXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbUmVjb3JkVGhyZWFkQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFJlY29yZFRocmVhZENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIEJ1dHRvbk1vZHVsZSxcbiAgICAgICAgUGFuZWxNb2R1bGUsXG4gICAgICAgIEZpZWxkR3JpZE1vZHVsZSxcbiAgICAgICAgRHJvcGRvd25CdXR0b25Nb2R1bGUsXG4gICAgICAgIExhYmVsTW9kdWxlLFxuICAgICAgICBSZWNvcmRHcmlkTW9kdWxlLFxuICAgICAgICBCdXR0b25Nb2R1bGUsXG4gICAgICAgIFJlY29yZFRocmVhZEl0ZW1Nb2R1bGUsXG4gICAgICAgIExvYWRpbmdTcGlubmVyTW9kdWxlLFxuICAgICAgICBBY3Rpb25Hcm91cE1lbnVNb2R1bGUsXG5cbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFJlY29yZFRocmVhZE1vZHVsZSB7XG59XG4iXX0=