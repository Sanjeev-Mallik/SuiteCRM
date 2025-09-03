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
import { OnDestroy, OnInit, Signal, WritableSignal } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { SubpanelContainerConfig } from './subpanel-container.model';
import { LanguageStore } from '../../../../store/language/language.store';
import { SubpanelStore, SubpanelStoreMap } from '../../store/subpanel/subpanel.store';
import { MaxColumnsCalculator } from '../../../../services/ui/max-columns-calculator/max-columns-calculator.service';
import { GridWidgetConfig } from '../../../../components/grid-widget/grid-widget.component';
import { LocalStorageService } from "../../../../services/local-storage/local-storage.service";
import { FilterConfig } from "../../../list-filter/components/list-filter/list-filter.model";
import { UserPreferenceStore } from '../../../../store/user-preference/user-preference.store';
import { SystemConfigStore } from "../../../../store/system-config/system-config.store";
import { ScreenSizeObserverService } from "../../../../services/ui/screen-size-observer/screen-size-observer.service";
import * as i0 from "@angular/core";
export declare class SubpanelContainerComponent implements OnInit, OnDestroy {
    protected languageStore: LanguageStore;
    protected maxColumnCalculator: MaxColumnsCalculator;
    protected localStorage: LocalStorageService;
    protected preferences: UserPreferenceStore;
    protected systemConfigs: SystemConfigStore;
    protected screenSize: ScreenSizeObserverService;
    config: SubpanelContainerConfig;
    isCollapsed: WritableSignal<boolean>;
    toggleIcon: WritableSignal<string>;
    maxColumns$: Observable<number>;
    subpanels: SubpanelStoreMap;
    orderedSubpanels: WritableSignal<string[]>;
    headerSubpanels: Signal<string[]>;
    bodySubpanels: Signal<string[]>;
    openSubpanels: WritableSignal<string[]>;
    activeHiddenButtonsCount: Signal<number>;
    filterConfig: FilterConfig;
    subs: Subscription[];
    protected subpanelButtonLimits: any;
    protected subpanelButtonBreakpoint: WritableSignal<number>;
    constructor(languageStore: LanguageStore, maxColumnCalculator: MaxColumnsCalculator, localStorage: LocalStorageService, preferences: UserPreferenceStore, systemConfigs: SystemConfigStore, screenSize: ScreenSizeObserverService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    getMaxColumns(): Observable<number>;
    toggleSubPanels(): void;
    showSubpanel(key: string, item: SubpanelStore): void;
    getCloseCallBack(key: string, item: SubpanelStore): Function;
    getGridConfig(vm: SubpanelStore): GridWidgetConfig;
    protected setCollapsed(newCollapsedValue: boolean): void;
    protected setToggleIcon(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SubpanelContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SubpanelContainerComponent, "scrm-subpanel-container", never, { "config": { "alias": "config"; "required": false; }; }, {}, never, never, false, never>;
}
