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
import { ChangeDetectionStrategy, Component, Input, signal, } from '@angular/core';
import { filter, map, tap } from 'rxjs/operators';
import { ThemeImagesStore } from '../../store/theme-images/theme-images.store';
import * as i0 from "@angular/core";
import * as i1 from "../../store/theme-images/theme-images.store";
import * as i2 from "@angular/common";
import * as i3 from "angular-svg-icon";
function ImageComponent_ng_container_0_svg_icon_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "svg-icon", 3);
} if (rf & 2) {
    const img_r1 = i0.ɵɵnextContext().ngIf;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate2("", ctx_r1.wrapperClass, " image-", img_r1.name, "");
    i0.ɵɵpropertyInterpolate("name", img_r1.name);
    i0.ɵɵproperty("svgClass", ctx_r1.klass || "")("title", ctx_r1.title || "");
} }
function ImageComponent_ng_container_0_img_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 4);
} if (rf & 2) {
    const img_r1 = i0.ɵɵnextContext().ngIf;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate2("", ctx_r1.klass, " image-", img_r1.name, "");
    i0.ɵɵpropertyInterpolate("src", img_r1.path, i0.ɵɵsanitizeUrl);
    i0.ɵɵproperty("title", ctx_r1.title || "");
} }
function ImageComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ImageComponent_ng_container_0_svg_icon_1_Template, 1, 7, "svg-icon", 1)(2, ImageComponent_ng_container_0_img_2_Template, 1, 6, "img", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const img_r1 = ctx.ngIf;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", img_r1.type === "svg");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", img_r1.type !== "svg");
} }
export class ImageComponent {
    set image(value) {
        this.imageName.set(value);
        this.getImage();
    }
    constructor(themeImagesStore) {
        this.themeImagesStore = themeImagesStore;
        this.klass = '';
        this.title = '';
        this.wrapperClass = 'sicon';
        this.images$ = this.themeImagesStore.images$;
        this.imageSig = signal({});
        this.imageName = signal('');
        this.imageMap = { images: {} };
        this.subs = [];
    }
    ngOnInit() {
        this.subs.push(this.images$.pipe(filter(img => img !== null), map((images) => ({ images })), tap(images => this.imageMap = { ...images }), tap(() => this.getImage())).subscribe());
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
        this.subs = [];
    }
    getImage() {
        if (!this.imageMap || !this.imageMap.images || Object.keys(this.imageMap.images).length < 1) {
            return null;
        }
        this.imageSig.update(() => this.imageMap.images[this.imageName()]);
        if (!this.imageSig()) {
            console.warn(`Image with name '${this.imageName()}' not found`);
        }
    }
    static { this.ɵfac = function ImageComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ImageComponent)(i0.ɵɵdirectiveInject(i1.ThemeImagesStore)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ImageComponent, selectors: [["scrm-image"]], inputs: { klass: "klass", title: "title", wrapperClass: "wrapperClass", image: "image" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "svgClass", "title", "class", "name", 4, "ngIf"], ["alt", "", 3, "src", "class", "title", 4, "ngIf"], [3, "svgClass", "title", "name"], ["alt", "", 3, "src", "title"]], template: function ImageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ImageComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.imageSig());
        } }, dependencies: [i2.NgIf, i3.SvgIconComponent], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ImageComponent, [{
        type: Component,
        args: [{ selector: 'scrm-image', changeDetection: ChangeDetectionStrategy.OnPush, template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container *ngIf=\"imageSig() as img\">\n\n    <svg-icon *ngIf=\"img.type === 'svg'\" [svgClass]=\"klass || ''\" [title]=\"title || ''\" class=\"{{wrapperClass}} image-{{img.name}}\"\n              name=\"{{img.name}}\"></svg-icon>\n\n    <img *ngIf=\"img.type !=='svg'\" alt=\"\" src=\"{{img.path}}\" class=\"{{klass}} image-{{img.name}}\" [title]=\"title || ''\">\n\n</ng-container>\n" }]
    }], () => [{ type: i1.ThemeImagesStore }], { klass: [{
            type: Input
        }], title: [{
            type: Input
        }], wrapperClass: [{
            type: Input
        }], image: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ImageComponent, { className: "ImageComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvaW1hZ2UvaW1hZ2UuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvaW1hZ2UvaW1hZ2UuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFDSCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFHTCxNQUFNLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxFQUE0QixnQkFBZ0IsRUFBQyxNQUFNLDZDQUE2QyxDQUFDOzs7Ozs7SUNQcEcsOEJBQ3lDOzs7O0lBRDJDLDhFQUEyQztJQUNySCw2Q0FBbUI7SUFEaUMsQUFBekIsNkNBQXdCLDZCQUFzQjs7O0lBR25GLHlCQUFvSDs7OztJQUEzRCx1RUFBb0M7SUFBdkQsOERBQWtCO0lBQXNDLDBDQUFxQjs7O0lBTHZILDZCQUF3QztJQUtwQyxBQUhBLHdGQUM4QixpRUFFc0Y7Ozs7SUFIekcsY0FBd0I7SUFBeEIsNENBQXdCO0lBRzdCLGNBQXVCO0lBQXZCLDRDQUF1Qjs7QURZakMsTUFBTSxPQUFPLGNBQWM7SUFJdkIsSUFBYSxLQUFLLENBQUMsS0FBYTtRQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQVVELFlBQXNCLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBaEIvQyxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLGlCQUFZLEdBQUcsT0FBTyxDQUFDO1FBTWhDLFlBQU8sR0FBOEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQztRQUVuRSxhQUFRLEdBQUcsTUFBTSxDQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQzNCLGNBQVMsR0FBRSxNQUFNLENBQVMsRUFBRSxDQUFDLENBQUM7UUFDOUIsYUFBUSxHQUE4QixFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUUzQyxTQUFJLEdBQW1CLEVBQUUsQ0FBQztJQUdwQyxDQUFDO0lBRUQsUUFBUTtRQUNKLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUM1QixNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLEVBQzNCLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLENBQUMsRUFDM0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFDLEdBQUcsTUFBTSxFQUFDLENBQUMsRUFDMUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUM3QixDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFHRCxRQUFRO1FBQ0osSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQzFGLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRW5FLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUNuQixPQUFPLENBQUMsSUFBSSxDQUFDLG9CQUFvQixJQUFJLENBQUMsU0FBUyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQ3BFLENBQUM7SUFDTCxDQUFDOytHQTdDUSxjQUFjO29FQUFkLGNBQWM7WUNqQjNCLGlGQUF3Qzs7WUFBekIscUNBQWlCOzs7aUZEaUJuQixjQUFjO2NBTjFCLFNBQVM7MkJBQ0ksWUFBWSxtQkFHTCx1QkFBdUIsQ0FBQyxNQUFNO2lEQUd0QyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ08sS0FBSztrQkFBakIsS0FBSzs7a0ZBSkcsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBDb21wb25lbnQsXG4gICAgSW5wdXQsXG4gICAgT25EZXN0cm95LFxuICAgIE9uSW5pdCxcbiAgICBzaWduYWwsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtmaWx0ZXIsIG1hcCwgdGFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1RoZW1lSW1hZ2UsIFRoZW1lSW1hZ2VNYXAsIFRoZW1lSW1hZ2VzU3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL3RoZW1lLWltYWdlcy90aGVtZS1pbWFnZXMuc3RvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0taW1hZ2UnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9pbWFnZS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbXSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBJbWFnZUNvbXBvbmVudCAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgQElucHV0KCkga2xhc3MgPSAnJztcbiAgICBASW5wdXQoKSB0aXRsZSA9ICcnO1xuICAgIEBJbnB1dCgpIHdyYXBwZXJDbGFzcyA9ICdzaWNvbic7XG4gICAgQElucHV0KCkgc2V0IGltYWdlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5pbWFnZU5hbWUuc2V0KHZhbHVlKTtcbiAgICAgICAgdGhpcy5nZXRJbWFnZSgpO1xuICAgIH1cblxuICAgIGltYWdlcyQ6IE9ic2VydmFibGU8VGhlbWVJbWFnZU1hcD4gPSB0aGlzLnRoZW1lSW1hZ2VzU3RvcmUuaW1hZ2VzJDtcblxuICAgIGltYWdlU2lnID0gc2lnbmFsPGFueT4oe30pO1xuICAgIGltYWdlTmFtZT0gc2lnbmFsPHN0cmluZz4oJycpO1xuICAgIGltYWdlTWFwOiB7IGltYWdlczogVGhlbWVJbWFnZU1hcCB9ID0geyBpbWFnZXM6IHt9IH07XG5cbiAgICBwcm90ZWN0ZWQgc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB0aGVtZUltYWdlc1N0b3JlOiBUaGVtZUltYWdlc1N0b3JlKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMuaW1hZ2VzJC5waXBlKFxuICAgICAgICAgICAgZmlsdGVyKGltZyA9PiBpbWcgIT09IG51bGwpLFxuICAgICAgICAgICAgbWFwKChpbWFnZXMpID0+ICh7aW1hZ2VzfSkpLFxuICAgICAgICAgICAgdGFwKGltYWdlcyA9PiB0aGlzLmltYWdlTWFwID0gey4uLmltYWdlc30pLFxuICAgICAgICAgICAgdGFwKCgpID0+IHRoaXMuZ2V0SW1hZ2UoKSksXG4gICAgICAgICkuc3Vic2NyaWJlKCkpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuICAgICAgICB0aGlzLnN1YnMgPSBbXTtcbiAgICB9XG5cblxuICAgIGdldEltYWdlKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuaW1hZ2VNYXAgfHwgIXRoaXMuaW1hZ2VNYXAuaW1hZ2VzIHx8IE9iamVjdC5rZXlzKHRoaXMuaW1hZ2VNYXAuaW1hZ2VzKS5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW1hZ2VTaWcudXBkYXRlKCgpID0+IHRoaXMuaW1hZ2VNYXAuaW1hZ2VzW3RoaXMuaW1hZ2VOYW1lKCldKTtcblxuICAgICAgICBpZiAoIXRoaXMuaW1hZ2VTaWcoKSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIG5hbWUgJyR7dGhpcy5pbWFnZU5hbWUoKX0nIG5vdCBmb3VuZGApO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPG5nLWNvbnRhaW5lciAqbmdJZj1cImltYWdlU2lnKCkgYXMgaW1nXCI+XG5cbiAgICA8c3ZnLWljb24gKm5nSWY9XCJpbWcudHlwZSA9PT0gJ3N2ZydcIiBbc3ZnQ2xhc3NdPVwia2xhc3MgfHwgJydcIiBbdGl0bGVdPVwidGl0bGUgfHwgJydcIiBjbGFzcz1cInt7d3JhcHBlckNsYXNzfX0gaW1hZ2Ute3tpbWcubmFtZX19XCJcbiAgICAgICAgICAgICAgbmFtZT1cInt7aW1nLm5hbWV9fVwiPjwvc3ZnLWljb24+XG5cbiAgICA8aW1nICpuZ0lmPVwiaW1nLnR5cGUgIT09J3N2ZydcIiBhbHQ9XCJcIiBzcmM9XCJ7e2ltZy5wYXRofX1cIiBjbGFzcz1cInt7a2xhc3N9fSBpbWFnZS17e2ltZy5uYW1lfX1cIiBbdGl0bGVdPVwidGl0bGUgfHwgJydcIj5cblxuPC9uZy1jb250YWluZXI+XG4iXX0=