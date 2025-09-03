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
import { Directive, Input, signal } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/layout";
export class BaseFieldGridComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.special = false;
        this.actions = false;
        this.appendActions = false;
        this.labelDisplay = 'top';
        this.labelClass = {};
        this.inputClass = {};
        this.rowClass = {};
        this.colClass = {};
        this.colAlignItems = '';
        this.sizeMap = {
            handset: 1,
            tablet: 2,
            web: 3,
            wide: 4
        };
        this.baseColClass = {
            col: true,
            'form-group': true,
            'm-1': true
        };
        this.baseRowClass = {
            'form-row': true,
            'align-items-center': true
        };
        this.baseLabelClass = {
            'col-form-label-sm': true,
            'mb-0': true,
        };
        this.baseInputClass = {
            'form-control': true,
            'form-control-sm': true,
        };
        this.currentSize = 'web';
        this.subscriptions = [];
    }
    ngOnInit() {
        this.initScreenSizeObserver(this.breakpointObserver);
        this.buildGrid();
        this.colClass = {
            ...this.colClass,
            ...this.baseColClass
        };
        this.rowClass = {
            ...this.baseRowClass,
            ...this.rowClass
        };
        this.labelClass = {
            ...this.labelClass,
            ...this.baseLabelClass
        };
        this.inputClass = {
            ...this.inputClass,
            ...this.baseInputClass
        };
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
    get colNumber() {
        const max = this.sizeMap[this.currentSize];
        if (this.maxColumns && max > this.maxColumns) {
            return this.maxColumns;
        }
        return max;
    }
    addSpecialSlots(grid) {
        if (!grid || grid.length === 0) {
            return;
        }
        const neededSlots = this.getNeededExtraSlots();
        if (neededSlots.length === 0) {
            return;
        }
        if (this.colNumber === 1) {
            neededSlots.reverse().forEach(type => {
                const newRow = {
                    cols: []
                };
                this.fillRow(newRow);
                grid.push(newRow);
                newRow.cols[0][type] = true;
            });
        }
        else if (this.appendActions === true) {
            const lastRow = grid[grid.length - 1];
            const place = this.colNumber - 1;
            neededSlots.forEach(type => {
                lastRow.cols[place][type] = true;
            });
        }
        else {
            let lastRow = grid[grid.length - 1];
            let rowLength = lastRow.cols.length;
            neededSlots.reverse().forEach(type => {
                let actionSlot = false;
                if (type === 'actionSlot') {
                    actionSlot = true;
                }
                if (rowLength === this.colNumber || actionSlot) {
                    lastRow = this.addNewRow();
                    grid.push(lastRow);
                    rowLength = actionSlot ? (this.colNumber - 1) : 0;
                }
                lastRow.cols[rowLength] = [];
                lastRow.cols[rowLength][type] = true;
                this.fillRow(lastRow);
                rowLength++;
            });
        }
    }
    addNewRow() {
        const row = {
            cols: []
        };
        this.fillRow(row);
        return row;
    }
    getNeededExtraSlots() {
        const neededSlots = [];
        if (this.actions) {
            neededSlots.push('actionSlot');
        }
        if (this.special) {
            neededSlots.push('specialSlot');
        }
        return neededSlots;
    }
    fillRow(row) {
        const len = row.cols.length;
        for (let i = len; i < this.colNumber; i++) {
            row.cols.push({ field: { type: '', display: signal('none') } });
        }
    }
    initScreenSizeObserver(breakpointObserver) {
        this.subscriptions.push(breakpointObserver.observe([
            Breakpoints.HandsetPortrait,
        ]).subscribe((result) => {
            if (result.matches) {
                this.currentSize = 'handset';
                this.buildGrid();
            }
        }));
        this.subscriptions.push(breakpointObserver.observe([
            Breakpoints.TabletPortrait,
            Breakpoints.Small
        ]).subscribe((result) => {
            if (result.matches) {
                this.currentSize = 'tablet';
                this.buildGrid();
            }
        }));
        this.subscriptions.push(breakpointObserver.observe([
            Breakpoints.TabletLandscape,
            Breakpoints.WebLandscape,
        ]).subscribe((result) => {
            if (result.matches) {
                this.currentSize = 'web';
                this.buildGrid();
            }
        }));
        this.subscriptions.push(breakpointObserver.observe([
            Breakpoints.XLarge,
        ]).subscribe((result) => {
            if (result.matches) {
                this.currentSize = 'wide';
                this.buildGrid();
            }
        }));
    }
    static { this.ɵfac = function BaseFieldGridComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BaseFieldGridComponent)(i0.ɵɵdirectiveInject(i1.BreakpointObserver)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: BaseFieldGridComponent, inputs: { special: "special", actions: "actions", appendActions: "appendActions", labelDisplay: "labelDisplay", labelClass: "labelClass", inputClass: "inputClass", rowClass: "rowClass", colClass: "colClass", colAlignItems: "colAlignItems", maxColumns: "maxColumns", sizeMap: "sizeMap" } }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseFieldGridComponent, [{
        type: Directive
    }], () => [{ type: i1.BreakpointObserver }], { special: [{
            type: Input
        }], actions: [{
            type: Input
        }], appendActions: [{
            type: Input
        }], labelDisplay: [{
            type: Input
        }], labelClass: [{
            type: Input
        }], inputClass: [{
            type: Input
        }], rowClass: [{
            type: Input
        }], colClass: [{
            type: Input
        }], colAlignItems: [{
            type: Input
        }], maxColumns: [{
            type: Input
        }], sizeMap: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1maWVsZC1ncmlkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb21wb25lbnRzL2ZpZWxkLWdyaWQvYmFzZS1maWVsZC1ncmlkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUUxRSxPQUFPLEVBQUMsa0JBQWtCLEVBQUUsV0FBVyxFQUFrQixNQUFNLHFCQUFxQixDQUFDOzs7QUFPckYsTUFBTSxPQUFnQixzQkFBc0I7SUErQ3hDLFlBQWdDLGtCQUFzQztRQUF0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBOUM3RCxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFFdEIsaUJBQVksR0FBaUIsS0FBSyxDQUFDO1FBQ25DLGVBQVUsR0FBNkIsRUFBRSxDQUFDO1FBQzFDLGVBQVUsR0FBNkIsRUFBRSxDQUFDO1FBQzFDLGFBQVEsR0FBNkIsRUFBRSxDQUFDO1FBQ3hDLGFBQVEsR0FBNkIsRUFBRSxDQUFDO1FBQ3hDLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBRzNCLFlBQU8sR0FBa0I7WUFDOUIsT0FBTyxFQUFFLENBQUM7WUFDVixNQUFNLEVBQUUsQ0FBQztZQUNULEdBQUcsRUFBRSxDQUFDO1lBQ04sSUFBSSxFQUFFLENBQUM7U0FDVixDQUFDO1FBSUYsaUJBQVksR0FBRztZQUNYLEdBQUcsRUFBRSxJQUFJO1lBQ1QsWUFBWSxFQUFFLElBQUk7WUFDbEIsS0FBSyxFQUFFLElBQUk7U0FDZSxDQUFDO1FBRS9CLGlCQUFZLEdBQUc7WUFDWCxVQUFVLEVBQUUsSUFBSTtZQUNoQixvQkFBb0IsRUFBRSxJQUFJO1NBQ0EsQ0FBQztRQUUvQixtQkFBYyxHQUFHO1lBQ2IsbUJBQW1CLEVBQUUsSUFBSTtZQUN6QixNQUFNLEVBQUUsSUFBSTtTQUNmLENBQUM7UUFFRixtQkFBYyxHQUFHO1lBQ2IsY0FBYyxFQUFFLElBQUk7WUFDcEIsaUJBQWlCLEVBQUUsSUFBSTtTQUMxQixDQUFDO1FBRVEsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFFcEIsa0JBQWEsR0FBbUIsRUFBRSxDQUFDO0lBRzdDLENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBRXJELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUVqQixJQUFJLENBQUMsUUFBUSxHQUFHO1lBQ1osR0FBRyxJQUFJLENBQUMsUUFBUTtZQUNoQixHQUFHLElBQUksQ0FBQyxZQUFZO1NBQ3ZCLENBQUM7UUFFRixJQUFJLENBQUMsUUFBUSxHQUFHO1lBQ1osR0FBRyxJQUFJLENBQUMsWUFBWTtZQUNwQixHQUFHLElBQUksQ0FBQyxRQUFRO1NBQ25CLENBQUM7UUFFRixJQUFJLENBQUMsVUFBVSxHQUFHO1lBQ2QsR0FBRyxJQUFJLENBQUMsVUFBVTtZQUNsQixHQUFHLElBQUksQ0FBQyxjQUFjO1NBQ3pCLENBQUM7UUFFRixJQUFJLENBQUMsVUFBVSxHQUFHO1lBQ2QsR0FBRyxJQUFJLENBQUMsVUFBVTtZQUNsQixHQUFHLElBQUksQ0FBQyxjQUFjO1NBQ3pCLENBQUM7SUFDTixDQUFDO0lBRUQsV0FBVztRQUNQLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELElBQUksU0FBUztRQUNULE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRTNDLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQzNDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDO1FBRUQsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0lBRVMsZUFBZSxDQUFDLElBQW9CO1FBQzFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUM3QixPQUFPO1FBQ1gsQ0FBQztRQUNELE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBRS9DLElBQUksV0FBVyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUMzQixPQUFPO1FBQ1gsQ0FBQztRQUVELElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUV2QixXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNqQyxNQUFNLE1BQU0sR0FBRztvQkFDWCxJQUFJLEVBQUUsRUFBRTtpQkFDSyxDQUFDO2dCQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUVsQixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztZQUNoQyxDQUFDLENBQUMsQ0FBQztRQUVQLENBQUM7YUFBTSxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssSUFBSSxFQUFFLENBQUM7WUFFckMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDdEMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7WUFDakMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDdkIsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDckMsQ0FBQyxDQUFDLENBQUM7UUFFUCxDQUFDO2FBQU0sQ0FBQztZQUNKLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBRXBDLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBRXBDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2pDLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQztnQkFDdkIsSUFBSSxJQUFJLEtBQUssWUFBWSxFQUFFLENBQUM7b0JBQ3hCLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQ3RCLENBQUM7Z0JBRUQsSUFBSSxTQUFTLEtBQUssSUFBSSxDQUFDLFNBQVMsSUFBSSxVQUFVLEVBQUUsQ0FBQztvQkFDN0MsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDbkIsU0FBUyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RELENBQUM7Z0JBRUQsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFxQixDQUFDO2dCQUNoRCxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztnQkFDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDdEIsU0FBUyxFQUFFLENBQUM7WUFDaEIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO0lBRUwsQ0FBQztJQUVTLFNBQVM7UUFDZixNQUFNLEdBQUcsR0FBRztZQUNSLElBQUksRUFBRSxFQUFFO1NBQ0ssQ0FBQTtRQUVqQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWxCLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUVTLG1CQUFtQjtRQUN6QixNQUFNLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFFdkIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDZixXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ25DLENBQUM7UUFFRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNmLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDcEMsQ0FBQztRQUNELE9BQU8sV0FBVyxDQUFDO0lBQ3ZCLENBQUM7SUFFUyxPQUFPLENBQUMsR0FBaUI7UUFDL0IsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDNUIsS0FBSyxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN4QyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBYyxNQUFNLENBQUMsRUFBQyxFQUFDLENBQUMsQ0FBQztRQUM3RSxDQUFDO0lBQ0wsQ0FBQztJQUVTLHNCQUFzQixDQUFDLGtCQUFzQztRQUNuRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7WUFDL0MsV0FBVyxDQUFDLGVBQWU7U0FDOUIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQXVCLEVBQUUsRUFBRTtZQUNyQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDakIsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNyQixDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVKLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQztZQUMvQyxXQUFXLENBQUMsY0FBYztZQUMxQixXQUFXLENBQUMsS0FBSztTQUNwQixDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBdUIsRUFBRSxFQUFFO1lBQ3JDLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNqQixJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQztnQkFDNUIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3JCLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRUosSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDO1lBQy9DLFdBQVcsQ0FBQyxlQUFlO1lBQzNCLFdBQVcsQ0FBQyxZQUFZO1NBQzNCLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUF1QixFQUFFLEVBQUU7WUFDckMsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO2dCQUN6QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDckIsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFSixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7WUFDL0MsV0FBVyxDQUFDLE1BQU07U0FDckIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQXVCLEVBQUUsRUFBRTtZQUNyQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDakIsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNyQixDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7dUhBdE5pQixzQkFBc0I7b0VBQXRCLHNCQUFzQjs7aUZBQXRCLHNCQUFzQjtjQUQzQyxTQUFTO21EQUVHLE9BQU87a0JBQWYsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFFRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFFRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0RpcmVjdGl2ZSwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBzaWduYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtCcmVha3BvaW50T2JzZXJ2ZXIsIEJyZWFrcG9pbnRzLCBCcmVha3BvaW50U3RhdGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9sYXlvdXQnO1xuaW1wb3J0IHtGaWVsZEdyaWRDb2x1bW4sIEZpZWxkR3JpZFJvdywgTGFiZWxEaXNwbGF5fSBmcm9tICcuL2ZpZWxkLWdyaWQubW9kZWwnO1xuaW1wb3J0IHtTY3JlZW5TaXplTWFwfSBmcm9tICcuLi8uLi9jb21tb24vc2VydmljZXMvdWkvcmVzaXplLm1vZGVsJztcbmltcG9ydCB7RGlzcGxheVR5cGV9IGZyb20gXCIuLi8uLi9jb21tb24vcmVjb3JkL2ZpZWxkLm1vZGVsXCI7XG5cblxuQERpcmVjdGl2ZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUZpZWxkR3JpZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBASW5wdXQoKSBzcGVjaWFsID0gZmFsc2U7XG4gICAgQElucHV0KCkgYWN0aW9ucyA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGFwcGVuZEFjdGlvbnMgPSBmYWxzZTtcblxuICAgIEBJbnB1dCgpIGxhYmVsRGlzcGxheTogTGFiZWxEaXNwbGF5ID0gJ3RvcCc7XG4gICAgQElucHV0KCkgbGFiZWxDbGFzczogeyBba2xhc3M6IHN0cmluZ106IGFueSB9ID0ge307XG4gICAgQElucHV0KCkgaW5wdXRDbGFzczogeyBba2xhc3M6IHN0cmluZ106IGFueSB9ID0ge307XG4gICAgQElucHV0KCkgcm93Q2xhc3M6IHsgW2tsYXNzOiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuICAgIEBJbnB1dCgpIGNvbENsYXNzOiB7IFtrbGFzczogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgICBASW5wdXQoKSBjb2xBbGlnbkl0ZW1zOiBzdHJpbmcgPSAnJztcblxuICAgIEBJbnB1dCgpIG1heENvbHVtbnM6IG51bWJlcjtcbiAgICBASW5wdXQoKSBzaXplTWFwOiBTY3JlZW5TaXplTWFwID0ge1xuICAgICAgICBoYW5kc2V0OiAxLFxuICAgICAgICB0YWJsZXQ6IDIsXG4gICAgICAgIHdlYjogMyxcbiAgICAgICAgd2lkZTogNFxuICAgIH07XG5cbiAgICBmaWVsZEdyaWQ6IEZpZWxkR3JpZFJvd1tdO1xuXG4gICAgYmFzZUNvbENsYXNzID0ge1xuICAgICAgICBjb2w6IHRydWUsXG4gICAgICAgICdmb3JtLWdyb3VwJzogdHJ1ZSxcbiAgICAgICAgJ20tMSc6IHRydWVcbiAgICB9IGFzIHsgW2tleTpzdHJpbmddOiBib29sZWFuIH07XG5cbiAgICBiYXNlUm93Q2xhc3MgPSB7XG4gICAgICAgICdmb3JtLXJvdyc6IHRydWUsXG4gICAgICAgICdhbGlnbi1pdGVtcy1jZW50ZXInOiB0cnVlXG4gICAgfSBhcyB7IFtrZXk6c3RyaW5nXTogYm9vbGVhbiB9O1xuXG4gICAgYmFzZUxhYmVsQ2xhc3MgPSB7XG4gICAgICAgICdjb2wtZm9ybS1sYWJlbC1zbSc6IHRydWUsXG4gICAgICAgICdtYi0wJzogdHJ1ZSxcbiAgICB9O1xuXG4gICAgYmFzZUlucHV0Q2xhc3MgPSB7XG4gICAgICAgICdmb3JtLWNvbnRyb2wnOiB0cnVlLFxuICAgICAgICAnZm9ybS1jb250cm9sLXNtJzogdHJ1ZSxcbiAgICB9O1xuXG4gICAgcHJvdGVjdGVkIGN1cnJlbnRTaXplID0gJ3dlYic7XG5cbiAgICBwcm90ZWN0ZWQgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYnJlYWtwb2ludE9ic2VydmVyOiBCcmVha3BvaW50T2JzZXJ2ZXIpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbml0U2NyZWVuU2l6ZU9ic2VydmVyKHRoaXMuYnJlYWtwb2ludE9ic2VydmVyKTtcblxuICAgICAgICB0aGlzLmJ1aWxkR3JpZCgpO1xuXG4gICAgICAgIHRoaXMuY29sQ2xhc3MgPSB7XG4gICAgICAgICAgICAuLi50aGlzLmNvbENsYXNzLFxuICAgICAgICAgICAgLi4udGhpcy5iYXNlQ29sQ2xhc3NcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnJvd0NsYXNzID0ge1xuICAgICAgICAgICAgLi4udGhpcy5iYXNlUm93Q2xhc3MsXG4gICAgICAgICAgICAuLi50aGlzLnJvd0NsYXNzXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5sYWJlbENsYXNzID0ge1xuICAgICAgICAgICAgLi4udGhpcy5sYWJlbENsYXNzLFxuICAgICAgICAgICAgLi4udGhpcy5iYXNlTGFiZWxDbGFzc1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuaW5wdXRDbGFzcyA9IHtcbiAgICAgICAgICAgIC4uLnRoaXMuaW5wdXRDbGFzcyxcbiAgICAgICAgICAgIC4uLnRoaXMuYmFzZUlucHV0Q2xhc3NcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2goc3ViID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcbiAgICB9XG5cbiAgICBnZXQgY29sTnVtYmVyKCk6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IG1heCA9IHRoaXMuc2l6ZU1hcFt0aGlzLmN1cnJlbnRTaXplXTtcblxuICAgICAgICBpZiAodGhpcy5tYXhDb2x1bW5zICYmIG1heCA+IHRoaXMubWF4Q29sdW1ucykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWF4Q29sdW1ucztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtYXg7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFkZFNwZWNpYWxTbG90cyhncmlkOiBGaWVsZEdyaWRSb3dbXSk6IHZvaWQge1xuICAgICAgICBpZiAoIWdyaWQgfHwgZ3JpZC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZWVkZWRTbG90cyA9IHRoaXMuZ2V0TmVlZGVkRXh0cmFTbG90cygpO1xuXG4gICAgICAgIGlmIChuZWVkZWRTbG90cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNvbE51bWJlciA9PT0gMSkge1xuXG4gICAgICAgICAgICBuZWVkZWRTbG90cy5yZXZlcnNlKCkuZm9yRWFjaCh0eXBlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdSb3cgPSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHM6IFtdXG4gICAgICAgICAgICAgICAgfSBhcyBGaWVsZEdyaWRSb3c7XG4gICAgICAgICAgICAgICAgdGhpcy5maWxsUm93KG5ld1Jvdyk7XG4gICAgICAgICAgICAgICAgZ3JpZC5wdXNoKG5ld1Jvdyk7XG5cbiAgICAgICAgICAgICAgICBuZXdSb3cuY29sc1swXVt0eXBlXSA9IHRydWU7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYXBwZW5kQWN0aW9ucyA9PT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICBjb25zdCBsYXN0Um93ID0gZ3JpZFtncmlkLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgY29uc3QgcGxhY2UgPSB0aGlzLmNvbE51bWJlciAtIDE7XG4gICAgICAgICAgICBuZWVkZWRTbG90cy5mb3JFYWNoKHR5cGUgPT4ge1xuICAgICAgICAgICAgICAgIGxhc3RSb3cuY29sc1twbGFjZV1bdHlwZV0gPSB0cnVlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBsYXN0Um93ID0gZ3JpZFtncmlkLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgICAgICBsZXQgcm93TGVuZ3RoID0gbGFzdFJvdy5jb2xzLmxlbmd0aDtcblxuICAgICAgICAgICAgbmVlZGVkU2xvdHMucmV2ZXJzZSgpLmZvckVhY2godHlwZSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGFjdGlvblNsb3QgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2FjdGlvblNsb3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvblNsb3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyb3dMZW5ndGggPT09IHRoaXMuY29sTnVtYmVyIHx8IGFjdGlvblNsb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgbGFzdFJvdyA9IHRoaXMuYWRkTmV3Um93KCk7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQucHVzaChsYXN0Um93KTtcbiAgICAgICAgICAgICAgICAgICAgcm93TGVuZ3RoID0gYWN0aW9uU2xvdCA/ICh0aGlzLmNvbE51bWJlciAtIDEpIDogMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsYXN0Um93LmNvbHNbcm93TGVuZ3RoXSA9IFtdIGFzIEZpZWxkR3JpZENvbHVtbjtcbiAgICAgICAgICAgICAgICBsYXN0Um93LmNvbHNbcm93TGVuZ3RoXVt0eXBlXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5maWxsUm93KGxhc3RSb3cpO1xuICAgICAgICAgICAgICAgIHJvd0xlbmd0aCsrO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByb3RlY3RlZCBhZGROZXdSb3coKTogRmllbGRHcmlkUm93IHtcbiAgICAgICAgY29uc3Qgcm93ID0ge1xuICAgICAgICAgICAgY29sczogW11cbiAgICAgICAgfSBhcyBGaWVsZEdyaWRSb3dcblxuICAgICAgICB0aGlzLmZpbGxSb3cocm93KTtcblxuICAgICAgICByZXR1cm4gcm93O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXROZWVkZWRFeHRyYVNsb3RzKCk6IHN0cmluZ1tdIHtcbiAgICAgICAgY29uc3QgbmVlZGVkU2xvdHMgPSBbXTtcblxuICAgICAgICBpZiAodGhpcy5hY3Rpb25zKSB7XG4gICAgICAgICAgICBuZWVkZWRTbG90cy5wdXNoKCdhY3Rpb25TbG90Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zcGVjaWFsKSB7XG4gICAgICAgICAgICBuZWVkZWRTbG90cy5wdXNoKCdzcGVjaWFsU2xvdCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZWVkZWRTbG90cztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZmlsbFJvdyhyb3c6IEZpZWxkR3JpZFJvdyk6IHZvaWQge1xuICAgICAgICBjb25zdCBsZW4gPSByb3cuY29scy5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSBsZW47IGkgPCB0aGlzLmNvbE51bWJlcjsgaSsrKSB7XG4gICAgICAgICAgICByb3cuY29scy5wdXNoKHtmaWVsZDoge3R5cGU6ICcnLCBkaXNwbGF5OiBzaWduYWw8RGlzcGxheVR5cGU+KCdub25lJyl9fSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdFNjcmVlblNpemVPYnNlcnZlcihicmVha3BvaW50T2JzZXJ2ZXI6IEJyZWFrcG9pbnRPYnNlcnZlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChicmVha3BvaW50T2JzZXJ2ZXIub2JzZXJ2ZShbXG4gICAgICAgICAgICBCcmVha3BvaW50cy5IYW5kc2V0UG9ydHJhaXQsXG4gICAgICAgIF0pLnN1YnNjcmliZSgocmVzdWx0OiBCcmVha3BvaW50U3RhdGUpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQubWF0Y2hlcykge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNpemUgPSAnaGFuZHNldCc7XG4gICAgICAgICAgICAgICAgdGhpcy5idWlsZEdyaWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKGJyZWFrcG9pbnRPYnNlcnZlci5vYnNlcnZlKFtcbiAgICAgICAgICAgIEJyZWFrcG9pbnRzLlRhYmxldFBvcnRyYWl0LFxuICAgICAgICAgICAgQnJlYWtwb2ludHMuU21hbGxcbiAgICAgICAgXSkuc3Vic2NyaWJlKChyZXN1bHQ6IEJyZWFrcG9pbnRTdGF0ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5tYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2l6ZSA9ICd0YWJsZXQnO1xuICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRHcmlkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcblxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChicmVha3BvaW50T2JzZXJ2ZXIub2JzZXJ2ZShbXG4gICAgICAgICAgICBCcmVha3BvaW50cy5UYWJsZXRMYW5kc2NhcGUsXG4gICAgICAgICAgICBCcmVha3BvaW50cy5XZWJMYW5kc2NhcGUsXG4gICAgICAgIF0pLnN1YnNjcmliZSgocmVzdWx0OiBCcmVha3BvaW50U3RhdGUpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQubWF0Y2hlcykge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNpemUgPSAnd2ViJztcbiAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkR3JpZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG5cbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2goYnJlYWtwb2ludE9ic2VydmVyLm9ic2VydmUoW1xuICAgICAgICAgICAgQnJlYWtwb2ludHMuWExhcmdlLFxuICAgICAgICBdKS5zdWJzY3JpYmUoKHJlc3VsdDogQnJlYWtwb2ludFN0YXRlKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzdWx0Lm1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTaXplID0gJ3dpZGUnO1xuICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRHcmlkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBhYnN0cmFjdCBidWlsZEdyaWQoKTogdm9pZDtcblxufVxuIl19