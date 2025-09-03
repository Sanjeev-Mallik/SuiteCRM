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
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { deepClone, emptyObject } from '../../common/utils/object-utils';
import { LanguageStore } from '../../store/language/language.store';
import { SystemConfigStore } from "../../store/system-config/system-config.store";
import * as i0 from "@angular/core";
import * as i1 from "../../store/language/language.store";
import * as i2 from "../../store/system-config/system-config.store";
import * as i3 from "@angular/common";
import * as i4 from "@ng-bootstrap/ng-bootstrap";
import * as i5 from "../image/image.component";
import * as i6 from "../dropdown-submenu/dropdown-submenu.component";
import * as i7 from "../label/label.component";
import * as i8 from "../../pipes/truncate/truncate.pipe";
const _c0 = a0 => ({ item: a0 });
function DropdownButtonComponent_scrm_image_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-image", 7);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("image", ctx_r0.config.icon)("klass", ctx_r0.config.iconKlass || "");
} }
function DropdownButtonComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "truncate");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(2, 1, ctx_r0.config.label, ctx_r0.charSize.maxLength), " ");
} }
function DropdownButtonComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-label", 8);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("labelKey", ctx_r0.config.labelKey);
} }
function DropdownButtonComponent_ng_container_7_div_1_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function DropdownButtonComponent_ng_container_7_div_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DropdownButtonComponent_ng_container_7_div_1_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    i0.ɵɵnextContext(3);
    const buttonTemplate_r3 = i0.ɵɵreference(10);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", buttonTemplate_r3)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c0, item_r2));
} }
function DropdownButtonComponent_ng_container_7_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10)(1, "div", 11);
    i0.ɵɵelement(2, "scrm-label", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, DropdownButtonComponent_ng_container_7_div_1_ng_container_3_Template, 2, 4, "ng-container", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_10_0;
    let tmp_11_0;
    const section_r4 = ctx.$implicit;
    const isLast_r5 = ctx.last;
    const isFirst_r6 = ctx.first;
    i0.ɵɵclassProp("section-split", !isFirst_r6)("last-section", isLast_r5)("first-section", isFirst_r6);
    i0.ɵɵproperty("ngClass", (tmp_10_0 = section_r4.klass) !== null && tmp_10_0 !== undefined ? tmp_10_0 : "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("labelKey", (tmp_11_0 = (tmp_11_0 = section_r4.labelKey) !== null && tmp_11_0 !== undefined ? tmp_11_0 : section_r4.label) !== null && tmp_11_0 !== undefined ? tmp_11_0 : "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", section_r4.items);
} }
function DropdownButtonComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DropdownButtonComponent_ng_container_7_div_1_Template, 4, 9, "div", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.sections);
} }
function DropdownButtonComponent_ng_container_8_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function DropdownButtonComponent_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DropdownButtonComponent_ng_container_8_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    i0.ɵɵnextContext(2);
    const buttonTemplate_r3 = i0.ɵɵreference(10);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", buttonTemplate_r3)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c0, item_r7));
} }
function DropdownButtonComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DropdownButtonComponent_ng_container_8_ng_container_1_Template, 2, 4, "ng-container", 12);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.config.items);
} }
function DropdownButtonComponent_ng_template_9_ng_container_0_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "scrm-image", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r9 = i0.ɵɵnextContext(2).item;
    i0.ɵɵadvance();
    i0.ɵɵproperty("image", item_r9.icon)("klass", item_r9.iconKlass || "");
} }
function DropdownButtonComponent_ng_template_9_ng_container_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r9 = i0.ɵɵnextContext(2).item;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r9.label, " ");
} }
function DropdownButtonComponent_ng_template_9_ng_container_0_ng_container_6_scrm_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-label", 18);
} if (rf & 2) {
    let tmp_8_0;
    const item_r9 = i0.ɵɵnextContext(3).item;
    i0.ɵɵproperty("labelKey", item_r9.labelKey)("module", (tmp_8_0 = item_r9.labelModule) !== null && tmp_8_0 !== undefined ? tmp_8_0 : "");
} }
function DropdownButtonComponent_ng_template_9_ng_container_0_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DropdownButtonComponent_ng_template_9_ng_container_0_ng_container_6_scrm_label_1_Template, 1, 2, "scrm-label", 17);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r9 = i0.ɵɵnextContext(2).item;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r9 && item_r9.labelKey);
} }
function DropdownButtonComponent_ng_template_9_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 14);
    i0.ɵɵlistener("click", function DropdownButtonComponent_ng_template_9_ng_container_0_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r8); const item_r9 = i0.ɵɵnextContext().item; const ctx_r0 = i0.ɵɵnextContext(); const dropDown_r10 = i0.ɵɵreference(1); return i0.ɵɵresetView(item_r9 && ctx_r0.click(item_r9.onClick, dropDown_r10)); });
    i0.ɵɵelementStart(2, "div", 15);
    i0.ɵɵtemplate(3, DropdownButtonComponent_ng_template_9_ng_container_0_div_3_Template, 2, 2, "div", 5);
    i0.ɵɵelementStart(4, "div", 16);
    i0.ɵɵtemplate(5, DropdownButtonComponent_ng_template_9_ng_container_0_ng_container_5_Template, 2, 1, "ng-container", 5)(6, DropdownButtonComponent_ng_template_9_ng_container_0_ng_container_6_Template, 2, 1, "ng-container", 5);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r9 = i0.ɵɵnextContext().item;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", item_r9 && item_r9.klass)("title", ctx_r0.language.getFieldLabel(item_r9 == null ? null : item_r9.titleKey) || (item_r9 == null ? null : item_r9.title) || "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r9.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r9 && item_r9.label);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r9 && !item_r9.label && item_r9.labelKey);
} }
function DropdownButtonComponent_ng_template_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "scrm-dropdown-submenu", 19);
    i0.ɵɵlistener("item-clicked", function DropdownButtonComponent_ng_template_9_ng_container_1_Template_scrm_dropdown_submenu_item_clicked_1_listener() { i0.ɵɵrestoreView(_r11); const ctx_r0 = i0.ɵɵnextContext(2); const dropDown_r10 = i0.ɵɵreference(1); return i0.ɵɵresetView(ctx_r0.close(dropDown_r10)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r9 = i0.ɵɵnextContext().item;
    i0.ɵɵadvance();
    i0.ɵɵproperty("item", item_r9);
} }
function DropdownButtonComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, DropdownButtonComponent_ng_template_9_ng_container_0_Template, 7, 5, "ng-container", 5)(1, DropdownButtonComponent_ng_template_9_ng_container_1_Template, 2, 1, "ng-container", 5);
} if (rf & 2) {
    const item_r9 = ctx.item;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", item_r9 && !ctx_r0.isDropdown(item_r9));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r9 && ctx_r0.isDropdown(item_r9));
} }
export class DropdownButtonComponent {
    constructor(language, systemConfigStore) {
        this.language = language;
        this.systemConfigStore = systemConfigStore;
        this.disabled = false;
        this.autoClose = true;
        this.sections = [];
        this.sectionsEnabled = false;
        this.charSize = {
            minLength: 20,
            mediumLength: 20,
            maxLength: 20
        };
    }
    isDropdown(item) {
        if (!item) {
            return false;
        }
        return 'items' in item;
    }
    click(onClick, dropdown) {
        onClick();
        dropdown.close();
    }
    close(dropdown) {
        dropdown.close();
    }
    ngOnInit() {
        if (this.config && !this.config.placement) {
            this.config.placement = ['bottom-left', 'bottom-right', 'top-left', 'top-right'];
        }
        this.sections = [];
        const sectionsConfig = this.config?.sections ?? {};
        if (emptyObject(sectionsConfig)) {
            this.sectionsEnabled = false;
            return;
        }
        this.sectionsEnabled = true;
        this.preprocessItems(this.config?.items ?? []);
        const characterSizes = this.systemConfigStore.getUi('navbar_truncate_character_sizes');
        this.charSize = { ...characterSizes };
    }
    preprocessItems(items) {
        const sectionsConfig = this.config?.sections ?? {};
        const sections = {};
        if (!items || !items.length) {
            return;
        }
        items.forEach(item => {
            const sectionKey = item?.section ?? 'default';
            let section = this.getSection(sectionsConfig, sectionKey, sections);
            section.items.push(item);
        });
        Object.keys(sectionsConfig).forEach(sectionKey => {
            const section = sections[sectionKey];
            if (section && section.items && section.items.length) {
                this.sections.push(section);
            }
        });
    }
    /**
     * Get section from map, initialize if not on map
     * @param sectionsConfig
     * @param sectionKey
     * @param sections
     * @protected
     */
    getSection(sectionsConfig, sectionKey, sections) {
        const sectionConfig = sectionsConfig[sectionKey] ?? {};
        let section = sections[sectionKey] ?? null;
        if (section === null) {
            section = deepClone(sectionConfig);
            section.items = [];
            sections[sectionKey] = section;
        }
        return section;
    }
    getPlacement() {
        if (this.config && !this.config.placement) {
            return ['bottom-left', 'bottom-right', 'top-left', 'top-right'];
        }
        return this.config.placement;
    }
    static { this.ɵfac = function DropdownButtonComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DropdownButtonComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore), i0.ɵɵdirectiveInject(i2.SystemConfigStore)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DropdownButtonComponent, selectors: [["scrm-dropdown-button"]], inputs: { config: "config", disabled: "disabled", autoClose: "autoClose" }, decls: 11, vars: 13, consts: [["dropDown", "ngbDropdown"], ["buttonTemplate", ""], ["ngbDropdown", "", 1, "d-inline-block", "dropdown-button", 3, "autoClose", "placement", "ngClass"], ["ngbDropdownToggle", "", 3, "disabled", "ngClass", "title"], [3, "image", "klass", 4, "ngIf"], [4, "ngIf"], ["ngbDropdownMenu", ""], [3, "image", "klass"], [3, "labelKey"], [3, "ngClass", "section-split", "last-section", "first-section", 4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "dropdown-menu-item-header"], [4, "ngFor", "ngForOf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["ngbDropdownItem", "", 3, "click", "ngClass", "title"], [1, "d-flex", "align-items-center"], [1, "dropdown-item-label", "flex-grow-1"], [3, "labelKey", "module", 4, "ngIf"], [3, "labelKey", "module"], [3, "item-clicked", "item"]], template: function DropdownButtonComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 2, 0)(2, "button", 3);
            i0.ɵɵtemplate(3, DropdownButtonComponent_scrm_image_3_Template, 1, 2, "scrm-image", 4)(4, DropdownButtonComponent_ng_container_4_Template, 3, 4, "ng-container", 5)(5, DropdownButtonComponent_ng_container_5_Template, 2, 1, "ng-container", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 6);
            i0.ɵɵtemplate(7, DropdownButtonComponent_ng_container_7_Template, 2, 1, "ng-container", 5)(8, DropdownButtonComponent_ng_container_8_Template, 2, 1, "ng-container", 5);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(9, DropdownButtonComponent_ng_template_9_Template, 2, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵclassProp("sectioned-dropdown-menu", ctx.sectionsEnabled);
            i0.ɵɵproperty("autoClose", ctx.autoClose)("placement", ctx.getPlacement())("ngClass", ctx.config.wrapperKlass);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.disabled)("ngClass", ctx.config.klass)("title", ctx.language.getFieldLabel(ctx.config.titleKey) || "");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.config.icon);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.config.label);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.config.label && ctx.config.labelKey);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.sectionsEnabled);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.sectionsEnabled);
        } }, dependencies: [i3.NgClass, i3.NgForOf, i3.NgIf, i3.NgTemplateOutlet, i4.NgbDropdown, i4.NgbDropdownToggle, i4.NgbDropdownMenu, i4.NgbDropdownItem, i5.ImageComponent, i6.DropdownSubmenuComponent, i7.LabelComponent, i8.TruncatePipe], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DropdownButtonComponent, [{
        type: Component,
        args: [{ selector: 'scrm-dropdown-button', changeDetection: ChangeDetectionStrategy.OnPush, template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div ngbDropdown\n     [autoClose]=\"autoClose\"\n     [placement]=\"getPlacement()\"\n     #dropDown=\"ngbDropdown\"\n     class=\"d-inline-block dropdown-button\"\n     [class.sectioned-dropdown-menu]=\"sectionsEnabled\"\n     [ngClass]=\"config.wrapperKlass\">\n    <button [disabled]=\"disabled\"\n            [ngClass]=\"config.klass\"\n            [title]=\"language.getFieldLabel(config.titleKey) || ''\"\n            ngbDropdownToggle>\n\n        <scrm-image *ngIf=\"config.icon\"\n                    [image]=\"config.icon\"\n                    [klass]=\"config.iconKlass || ''\"></scrm-image>\n\n        <ng-container *ngIf=\"config.label\">\n            {{ config.label | truncate: charSize.maxLength}}\n        </ng-container>\n\n        <ng-container *ngIf=\"!config.label && config.labelKey\">\n            <scrm-label [labelKey]=\"config.labelKey\"></scrm-label>\n        </ng-container>\n\n    </button>\n    <div ngbDropdownMenu>\n\n        <ng-container *ngIf=\"sectionsEnabled\">\n\n            <div *ngFor=\"let section of sections; last as isLast; first as isFirst\"\n                 [ngClass]=\"section.klass ?? ''\"\n                 [class.section-split]=\"!isFirst\"\n                 [class.last-section]=\"isLast\"\n                 [class.first-section]=\"isFirst\">\n                <div class=\"dropdown-menu-item-header\">\n                    <scrm-label [labelKey]=\"section.labelKey ?? section.label ?? ''\" ></scrm-label>\n                </div>\n\n                <ng-container *ngFor=\"let item of section.items; let last = last\">\n                    <ng-container *ngTemplateOutlet=\"buttonTemplate; context: { item: item }\"></ng-container>\n                </ng-container>\n\n            </div>\n\n        </ng-container>\n\n        <ng-container *ngIf=\"!sectionsEnabled\">\n            <ng-container *ngFor=\"let item of config.items\">\n                <ng-container *ngTemplateOutlet=\"buttonTemplate; context: { item: item }\"></ng-container>\n            </ng-container>\n        </ng-container>\n\n    </div>\n</div>\n\n\n<ng-template #buttonTemplate let-item=\"item\">\n\n    <ng-container *ngIf=\"item && !isDropdown(item)\">\n        <a ngbDropdownItem\n           [ngClass]=\"item && item.klass\"\n           [title]=\"(language.getFieldLabel(item?.titleKey) || item?.title) || ''\"\n           (click)=\"item && click(item.onClick, dropDown)\">\n            <div class=\"d-flex align-items-center\">\n                <div *ngIf=\"item.icon\">\n                    <scrm-image [image]=\"item.icon\" [klass]=\"item.iconKlass || ''\"></scrm-image>\n                </div>\n                <div class=\"dropdown-item-label flex-grow-1\">\n                    <ng-container *ngIf=\"item && item.label\">\n                        {{ item.label }}\n                    </ng-container>\n                    <ng-container *ngIf=\"item && !item.label && item.labelKey\">\n                        <scrm-label *ngIf=\"item && item.labelKey\" [labelKey]=\"item.labelKey\"\n                                    [module]=\"item.labelModule ?? ''\"></scrm-label>\n                    </ng-container>\n                </div>\n            </div>\n        </a>\n    </ng-container>\n\n    <ng-container *ngIf=\"item && isDropdown(item)\">\n        <scrm-dropdown-submenu (item-clicked)=\"close(dropDown)\" [item]=\"item\"></scrm-dropdown-submenu>\n    </ng-container>\n\n</ng-template>\n" }]
    }], () => [{ type: i1.LanguageStore }, { type: i2.SystemConfigStore }], { config: [{
            type: Input
        }], disabled: [{
            type: Input
        }], autoClose: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DropdownButtonComponent, { className: "DropdownButtonComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb21wb25lbnRzL2Ryb3Bkb3duLWJ1dHRvbi9kcm9wZG93bi1idXR0b24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvZHJvcGRvd24tYnV0dG9uL2Ryb3Bkb3duLWJ1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUt2RSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDbEUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sK0NBQStDLENBQUM7Ozs7Ozs7Ozs7OztJQ014RSxnQ0FFMEQ7OztJQUE5QyxBQURBLDBDQUFxQix3Q0FDVzs7O0lBRTVDLDZCQUFtQztJQUMvQixZQUNKOzs7OztJQURJLGNBQ0o7SUFESSxxR0FDSjs7O0lBRUEsNkJBQXVEO0lBQ25ELGdDQUFzRDs7OztJQUExQyxjQUE0QjtJQUE1QixpREFBNEI7OztJQWtCaEMsd0JBQXlGOzs7SUFEN0YsNkJBQWtFO0lBQzlELCtIQUEwRTs7Ozs7O0lBQTNELGNBQWtDO0lBQUEsQUFBbEMsb0RBQWtDLGdFQUF1Qjs7O0lBTDVFLEFBTEosK0JBSXFDLGNBQ007SUFDbkMsZ0NBQStFO0lBQ25GLGlCQUFNO0lBRU4sZ0hBQWtFO0lBSXRFLGlCQUFNOzs7Ozs7O0lBVEQsQUFEQSxBQURBLDRDQUFnQywyQkFDSCw2QkFDRTtJQUgvQiww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Q0ssb0NBSUc7WUFDeEIsZUFBcUI7WUFFckIsQUFEQSxBQURBLHVDQUFxQiw2QkFDRyxnRUFDK0I7WUFHOUMsY0FBaUI7WUFBakIsc0NBQWlCO1lBSWYsY0FBa0I7WUFBbEIsdUNBQWtCO1lBSWxCLGNBQXNDO1lBQXRDLCtEQUFzQztZQU90QyxlQUFxQjtZQUFyQiwwQ0FBcUI7WUFtQnJCLGNBQXNCO1lBQXRCLDJDQUFzQjs7O2lGRC9CaEMsdUJBQXVCO2NBTm5DLFNBQVM7MkJBQ0ksc0JBQXNCLG1CQUdmLHVCQUF1QixDQUFDLE1BQU07OEVBR3RDLE1BQU07a0JBQWQsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLOztrRkFIRyx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2RlZXBDbG9uZSwgZW1wdHlPYmplY3R9IGZyb20gJy4uLy4uL2NvbW1vbi91dGlscy9vYmplY3QtdXRpbHMnO1xuaW1wb3J0IHtCdXR0b25JbnRlcmZhY2V9IGZyb20gJy4uLy4uL2NvbW1vbi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24ubW9kZWwnO1xuaW1wb3J0IHtEcm9wZG93bkJ1dHRvbkludGVyZmFjZSwgRHJvcGRvd25CdXR0b25TZWN0aW9uLCBEcm9wZG93bkJ1dHRvblNlY3Rpb25NYXB9IGZyb20gJy4uLy4uL2NvbW1vbi9jb21wb25lbnRzL2J1dHRvbi9kcm9wZG93bi1idXR0b24ubW9kZWwnO1xuaW1wb3J0IHtOZ2JEcm9wZG93bn0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHtQbGFjZW1lbnRBcnJheX0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAvdXRpbC9wb3NpdGlvbmluZyc7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7U3lzdGVtQ29uZmlnU3RvcmV9IGZyb20gXCIuLi8uLi9zdG9yZS9zeXN0ZW0tY29uZmlnL3N5c3RlbS1jb25maWcuc3RvcmVcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tZHJvcGRvd24tYnV0dG9uJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZHJvcGRvd24tYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZXM6IFtdLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIERyb3Bkb3duQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoKSBjb25maWc6IERyb3Bkb3duQnV0dG9uSW50ZXJmYWNlO1xuICAgIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gICAgQElucHV0KCkgYXV0b0Nsb3NlOiBib29sZWFuIHwgJ291dHNpZGUnIHwgJ2luc2lkZScgPSB0cnVlO1xuXG4gICAgc2VjdGlvbnM6IERyb3Bkb3duQnV0dG9uU2VjdGlvbltdID0gW107XG4gICAgc2VjdGlvbnNFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjaGFyU2l6ZSA9IHtcbiAgICAgICAgbWluTGVuZ3RoOiAyMCxcbiAgICAgICAgbWVkaXVtTGVuZ3RoOiAyMCxcbiAgICAgICAgbWF4TGVuZ3RoOiAyMFxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBzeXN0ZW1Db25maWdTdG9yZTogU3lzdGVtQ29uZmlnU3RvcmVcbiAgICApIHt9XG5cbiAgICBpc0Ryb3Bkb3duKGl0ZW06IEJ1dHRvbkludGVyZmFjZSk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJ2l0ZW1zJyBpbiBpdGVtO1xuICAgIH1cblxuICAgIGNsaWNrKG9uQ2xpY2s6IEZ1bmN0aW9uLCBkcm9wZG93bjogTmdiRHJvcGRvd24pOiB2b2lkIHtcbiAgICAgICAgb25DbGljaygpO1xuICAgICAgICBkcm9wZG93bi5jbG9zZSgpO1xuICAgIH1cblxuICAgIGNsb3NlKGRyb3Bkb3duOiBOZ2JEcm9wZG93bik6IHZvaWQge1xuICAgICAgICBkcm9wZG93bi5jbG9zZSgpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5jb25maWcgJiYgIXRoaXMuY29uZmlnLnBsYWNlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5jb25maWcucGxhY2VtZW50ID0gWydib3R0b20tbGVmdCcsICdib3R0b20tcmlnaHQnLCAndG9wLWxlZnQnLCAndG9wLXJpZ2h0J107XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNlY3Rpb25zID0gW107XG5cbiAgICAgICAgY29uc3Qgc2VjdGlvbnNDb25maWc6IERyb3Bkb3duQnV0dG9uU2VjdGlvbk1hcCA9IHRoaXMuY29uZmlnPy5zZWN0aW9ucyA/PyB7fTtcblxuICAgICAgICBpZiAoZW1wdHlPYmplY3Qoc2VjdGlvbnNDb25maWcpKSB7XG4gICAgICAgICAgICB0aGlzLnNlY3Rpb25zRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VjdGlvbnNFbmFibGVkID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnByZXByb2Nlc3NJdGVtcyh0aGlzLmNvbmZpZz8uaXRlbXMgPz8gW10pO1xuICAgICAgICBjb25zdCBjaGFyYWN0ZXJTaXplcyA9IHRoaXMuc3lzdGVtQ29uZmlnU3RvcmUuZ2V0VWkoJ25hdmJhcl90cnVuY2F0ZV9jaGFyYWN0ZXJfc2l6ZXMnKTtcbiAgICAgICAgdGhpcy5jaGFyU2l6ZSA9IHsuLi5jaGFyYWN0ZXJTaXplc31cbiAgICB9XG5cbiAgICBwcmVwcm9jZXNzSXRlbXMoaXRlbXM6IGFueVtdKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNlY3Rpb25zQ29uZmlnOiBEcm9wZG93bkJ1dHRvblNlY3Rpb25NYXAgPSB0aGlzLmNvbmZpZz8uc2VjdGlvbnMgPz8ge307XG4gICAgICAgIGNvbnN0IHNlY3Rpb25zOiBEcm9wZG93bkJ1dHRvblNlY3Rpb25NYXAgPSB7fTtcblxuICAgICAgICBpZiAoIWl0ZW1zIHx8ICFpdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZWN0aW9uS2V5ID0gaXRlbT8uc2VjdGlvbiA/PyAnZGVmYXVsdCc7XG4gICAgICAgICAgICBsZXQgc2VjdGlvbiA9IHRoaXMuZ2V0U2VjdGlvbihzZWN0aW9uc0NvbmZpZywgc2VjdGlvbktleSwgc2VjdGlvbnMpO1xuXG4gICAgICAgICAgICBzZWN0aW9uLml0ZW1zLnB1c2goaXRlbSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgT2JqZWN0LmtleXMoc2VjdGlvbnNDb25maWcpLmZvckVhY2goc2VjdGlvbktleSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZWN0aW9uID0gc2VjdGlvbnNbc2VjdGlvbktleV07XG4gICAgICAgICAgICBpZiAoc2VjdGlvbiAmJiBzZWN0aW9uLml0ZW1zICYmIHNlY3Rpb24uaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWN0aW9ucy5wdXNoKHNlY3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBzZWN0aW9uIGZyb20gbWFwLCBpbml0aWFsaXplIGlmIG5vdCBvbiBtYXBcbiAgICAgKiBAcGFyYW0gc2VjdGlvbnNDb25maWdcbiAgICAgKiBAcGFyYW0gc2VjdGlvbktleVxuICAgICAqIEBwYXJhbSBzZWN0aW9uc1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0U2VjdGlvbihzZWN0aW9uc0NvbmZpZzogRHJvcGRvd25CdXR0b25TZWN0aW9uTWFwLCBzZWN0aW9uS2V5OiBzdHJpbmcsIHNlY3Rpb25zOiBEcm9wZG93bkJ1dHRvblNlY3Rpb25NYXApOiBEcm9wZG93bkJ1dHRvblNlY3Rpb24ge1xuICAgICAgICBjb25zdCBzZWN0aW9uQ29uZmlnID0gc2VjdGlvbnNDb25maWdbc2VjdGlvbktleV0gPz8ge307XG4gICAgICAgIGxldCBzZWN0aW9uID0gc2VjdGlvbnNbc2VjdGlvbktleV0gPz8gbnVsbDtcbiAgICAgICAgaWYgKHNlY3Rpb24gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHNlY3Rpb24gPSBkZWVwQ2xvbmUoc2VjdGlvbkNvbmZpZyk7XG4gICAgICAgICAgICBzZWN0aW9uLml0ZW1zID0gW107XG4gICAgICAgICAgICBzZWN0aW9uc1tzZWN0aW9uS2V5XSA9IHNlY3Rpb247XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlY3Rpb247XG4gICAgfVxuXG4gICAgZ2V0UGxhY2VtZW50KCk6IFBsYWNlbWVudEFycmF5IHtcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnICYmICF0aGlzLmNvbmZpZy5wbGFjZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBbJ2JvdHRvbS1sZWZ0JywgJ2JvdHRvbS1yaWdodCcsICd0b3AtbGVmdCcsICd0b3AtcmlnaHQnXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcucGxhY2VtZW50O1xuICAgIH1cblxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPGRpdiBuZ2JEcm9wZG93blxuICAgICBbYXV0b0Nsb3NlXT1cImF1dG9DbG9zZVwiXG4gICAgIFtwbGFjZW1lbnRdPVwiZ2V0UGxhY2VtZW50KClcIlxuICAgICAjZHJvcERvd249XCJuZ2JEcm9wZG93blwiXG4gICAgIGNsYXNzPVwiZC1pbmxpbmUtYmxvY2sgZHJvcGRvd24tYnV0dG9uXCJcbiAgICAgW2NsYXNzLnNlY3Rpb25lZC1kcm9wZG93bi1tZW51XT1cInNlY3Rpb25zRW5hYmxlZFwiXG4gICAgIFtuZ0NsYXNzXT1cImNvbmZpZy53cmFwcGVyS2xhc3NcIj5cbiAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgICAgICBbbmdDbGFzc109XCJjb25maWcua2xhc3NcIlxuICAgICAgICAgICAgW3RpdGxlXT1cImxhbmd1YWdlLmdldEZpZWxkTGFiZWwoY29uZmlnLnRpdGxlS2V5KSB8fCAnJ1wiXG4gICAgICAgICAgICBuZ2JEcm9wZG93blRvZ2dsZT5cblxuICAgICAgICA8c2NybS1pbWFnZSAqbmdJZj1cImNvbmZpZy5pY29uXCJcbiAgICAgICAgICAgICAgICAgICAgW2ltYWdlXT1cImNvbmZpZy5pY29uXCJcbiAgICAgICAgICAgICAgICAgICAgW2tsYXNzXT1cImNvbmZpZy5pY29uS2xhc3MgfHwgJydcIj48L3Njcm0taW1hZ2U+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbmZpZy5sYWJlbFwiPlxuICAgICAgICAgICAge3sgY29uZmlnLmxhYmVsIHwgdHJ1bmNhdGU6IGNoYXJTaXplLm1heExlbmd0aH19XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhY29uZmlnLmxhYmVsICYmIGNvbmZpZy5sYWJlbEtleVwiPlxuICAgICAgICAgICAgPHNjcm0tbGFiZWwgW2xhYmVsS2V5XT1cImNvbmZpZy5sYWJlbEtleVwiPjwvc2NybS1sYWJlbD5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8L2J1dHRvbj5cbiAgICA8ZGl2IG5nYkRyb3Bkb3duTWVudT5cblxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic2VjdGlvbnNFbmFibGVkXCI+XG5cbiAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IHNlY3Rpb24gb2Ygc2VjdGlvbnM7IGxhc3QgYXMgaXNMYXN0OyBmaXJzdCBhcyBpc0ZpcnN0XCJcbiAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwic2VjdGlvbi5rbGFzcyA/PyAnJ1wiXG4gICAgICAgICAgICAgICAgIFtjbGFzcy5zZWN0aW9uLXNwbGl0XT1cIiFpc0ZpcnN0XCJcbiAgICAgICAgICAgICAgICAgW2NsYXNzLmxhc3Qtc2VjdGlvbl09XCJpc0xhc3RcIlxuICAgICAgICAgICAgICAgICBbY2xhc3MuZmlyc3Qtc2VjdGlvbl09XCJpc0ZpcnN0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnUtaXRlbS1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNjcm0tbGFiZWwgW2xhYmVsS2V5XT1cInNlY3Rpb24ubGFiZWxLZXkgPz8gc2VjdGlvbi5sYWJlbCA/PyAnJ1wiID48L3Njcm0tbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIHNlY3Rpb24uaXRlbXM7IGxldCBsYXN0ID0gbGFzdFwiPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiYnV0dG9uVGVtcGxhdGU7IGNvbnRleHQ6IHsgaXRlbTogaXRlbSB9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhc2VjdGlvbnNFbmFibGVkXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIGNvbmZpZy5pdGVtc1wiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJidXR0b25UZW1wbGF0ZTsgY29udGV4dDogeyBpdGVtOiBpdGVtIH1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgIDwvZGl2PlxuPC9kaXY+XG5cblxuPG5nLXRlbXBsYXRlICNidXR0b25UZW1wbGF0ZSBsZXQtaXRlbT1cIml0ZW1cIj5cblxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpdGVtICYmICFpc0Ryb3Bkb3duKGl0ZW0pXCI+XG4gICAgICAgIDxhIG5nYkRyb3Bkb3duSXRlbVxuICAgICAgICAgICBbbmdDbGFzc109XCJpdGVtICYmIGl0ZW0ua2xhc3NcIlxuICAgICAgICAgICBbdGl0bGVdPVwiKGxhbmd1YWdlLmdldEZpZWxkTGFiZWwoaXRlbT8udGl0bGVLZXkpIHx8IGl0ZW0/LnRpdGxlKSB8fCAnJ1wiXG4gICAgICAgICAgIChjbGljayk9XCJpdGVtICYmIGNsaWNrKGl0ZW0ub25DbGljaywgZHJvcERvd24pXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJpdGVtLmljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNjcm0taW1hZ2UgW2ltYWdlXT1cIml0ZW0uaWNvblwiIFtrbGFzc109XCJpdGVtLmljb25LbGFzcyB8fCAnJ1wiPjwvc2NybS1pbWFnZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24taXRlbS1sYWJlbCBmbGV4LWdyb3ctMVwiPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbSAmJiBpdGVtLmxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBpdGVtLmxhYmVsIH19XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbSAmJiAhaXRlbS5sYWJlbCAmJiBpdGVtLmxhYmVsS2V5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1sYWJlbCAqbmdJZj1cIml0ZW0gJiYgaXRlbS5sYWJlbEtleVwiIFtsYWJlbEtleV09XCJpdGVtLmxhYmVsS2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFttb2R1bGVdPVwiaXRlbS5sYWJlbE1vZHVsZSA/PyAnJ1wiPjwvc2NybS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hPlxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIml0ZW0gJiYgaXNEcm9wZG93bihpdGVtKVwiPlxuICAgICAgICA8c2NybS1kcm9wZG93bi1zdWJtZW51IChpdGVtLWNsaWNrZWQpPVwiY2xvc2UoZHJvcERvd24pXCIgW2l0ZW1dPVwiaXRlbVwiPjwvc2NybS1kcm9wZG93bi1zdWJtZW51PlxuICAgIDwvbmctY29udGFpbmVyPlxuXG48L25nLXRlbXBsYXRlPlxuIl19