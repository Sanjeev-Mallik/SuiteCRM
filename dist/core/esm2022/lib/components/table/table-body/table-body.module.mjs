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
import { TableBodyComponent } from './table-body.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CdkTableModule } from '@angular/cdk/table';
import { FieldModule } from '../../../fields/field.module';
import { LoadingSpinnerModule } from '../../loading-spinner/loading-spinner.module';
import { SortButtonModule } from '../../sort-button/sort-button.module';
import { LabelModule } from '../../label/label.module';
import { LineActionModule } from '../../line-action-menu/line-action-menu.module';
import { RecordDetailsPopupButtonModule } from "../../popups/components/record-details-popup-button/record-details-popup-button.module";
import * as i0 from "@angular/core";
export class TableBodyModule {
    static { this.ɵfac = function TableBodyModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TableBodyModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: TableBodyModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            AngularSvgIconModule,
            CdkTableModule,
            FieldModule,
            SortButtonModule,
            LineActionModule,
            LoadingSpinnerModule,
            LabelModule,
            RecordDetailsPopupButtonModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableBodyModule, [{
        type: NgModule,
        args: [{
                declarations: [TableBodyComponent],
                exports: [TableBodyComponent],
                imports: [
                    CommonModule,
                    AngularSvgIconModule,
                    CdkTableModule,
                    FieldModule,
                    SortButtonModule,
                    LineActionModule,
                    LoadingSpinnerModule,
                    LabelModule,
                    RecordDetailsPopupButtonModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TableBodyModule, { declarations: [TableBodyComponent], imports: [CommonModule,
        AngularSvgIconModule,
        CdkTableModule,
        FieldModule,
        SortButtonModule,
        LineActionModule,
        LoadingSpinnerModule,
        LabelModule,
        RecordDetailsPopupButtonModule], exports: [TableBodyComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtYm9keS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy90YWJsZS90YWJsZS1ib2R5L3RhYmxlLWJvZHkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUU3QyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ3pELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDhDQUE4QyxDQUFDO0FBQ2xGLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUNyRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxnREFBZ0QsQ0FBQztBQUNoRixPQUFPLEVBQ0gsOEJBQThCLEVBQ2pDLE1BQU0sd0ZBQXdGLENBQUM7O0FBaUJoRyxNQUFNLE9BQU8sZUFBZTtnSEFBZixlQUFlO21FQUFmLGVBQWU7dUVBWHBCLFlBQVk7WUFDWixvQkFBb0I7WUFDcEIsY0FBYztZQUNkLFdBQVc7WUFDWCxnQkFBZ0I7WUFDaEIsZ0JBQWdCO1lBQ2hCLG9CQUFvQjtZQUNwQixXQUFXO1lBQ1gsOEJBQThCOztpRkFHekIsZUFBZTtjQWYzQixRQUFRO2VBQUM7Z0JBQ04sWUFBWSxFQUFFLENBQUMsa0JBQWtCLENBQUM7Z0JBQ2xDLE9BQU8sRUFBRSxDQUFDLGtCQUFrQixDQUFDO2dCQUM3QixPQUFPLEVBQUU7b0JBQ0wsWUFBWTtvQkFDWixvQkFBb0I7b0JBQ3BCLGNBQWM7b0JBQ2QsV0FBVztvQkFDWCxnQkFBZ0I7b0JBQ2hCLGdCQUFnQjtvQkFDaEIsb0JBQW9CO29CQUNwQixXQUFXO29CQUNYLDhCQUE4QjtpQkFDakM7YUFDSjs7d0ZBQ1ksZUFBZSxtQkFkVCxrQkFBa0IsYUFHN0IsWUFBWTtRQUNaLG9CQUFvQjtRQUNwQixjQUFjO1FBQ2QsV0FBVztRQUNYLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsb0JBQW9CO1FBQ3BCLFdBQVc7UUFDWCw4QkFBOEIsYUFWeEIsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQge1RhYmxlQm9keUNvbXBvbmVudH0gZnJvbSAnLi90YWJsZS1ib2R5LmNvbXBvbmVudCc7XG5pbXBvcnQge0FuZ3VsYXJTdmdJY29uTW9kdWxlfSBmcm9tICdhbmd1bGFyLXN2Zy1pY29uJztcbmltcG9ydCB7Q2RrVGFibGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5pbXBvcnQge0ZpZWxkTW9kdWxlfSBmcm9tICcuLi8uLi8uLi9maWVsZHMvZmllbGQubW9kdWxlJztcbmltcG9ydCB7TG9hZGluZ1NwaW5uZXJNb2R1bGV9IGZyb20gJy4uLy4uL2xvYWRpbmctc3Bpbm5lci9sb2FkaW5nLXNwaW5uZXIubW9kdWxlJztcbmltcG9ydCB7U29ydEJ1dHRvbk1vZHVsZX0gZnJvbSAnLi4vLi4vc29ydC1idXR0b24vc29ydC1idXR0b24ubW9kdWxlJztcbmltcG9ydCB7TGFiZWxNb2R1bGV9IGZyb20gJy4uLy4uL2xhYmVsL2xhYmVsLm1vZHVsZSc7XG5pbXBvcnQge0xpbmVBY3Rpb25Nb2R1bGV9IGZyb20gJy4uLy4uL2xpbmUtYWN0aW9uLW1lbnUvbGluZS1hY3Rpb24tbWVudS5tb2R1bGUnO1xuaW1wb3J0IHtcbiAgICBSZWNvcmREZXRhaWxzUG9wdXBCdXR0b25Nb2R1bGVcbn0gZnJvbSBcIi4uLy4uL3BvcHVwcy9jb21wb25lbnRzL3JlY29yZC1kZXRhaWxzLXBvcHVwLWJ1dHRvbi9yZWNvcmQtZGV0YWlscy1wb3B1cC1idXR0b24ubW9kdWxlXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbVGFibGVCb2R5Q29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbVGFibGVCb2R5Q29tcG9uZW50XSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgQW5ndWxhclN2Z0ljb25Nb2R1bGUsXG4gICAgICAgIENka1RhYmxlTW9kdWxlLFxuICAgICAgICBGaWVsZE1vZHVsZSxcbiAgICAgICAgU29ydEJ1dHRvbk1vZHVsZSxcbiAgICAgICAgTGluZUFjdGlvbk1vZHVsZSxcbiAgICAgICAgTG9hZGluZ1NwaW5uZXJNb2R1bGUsXG4gICAgICAgIExhYmVsTW9kdWxlLFxuICAgICAgICBSZWNvcmREZXRhaWxzUG9wdXBCdXR0b25Nb2R1bGVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlQm9keU1vZHVsZSB7XG59XG4iXX0=