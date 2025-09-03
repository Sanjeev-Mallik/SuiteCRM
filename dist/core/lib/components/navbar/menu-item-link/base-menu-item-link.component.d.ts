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
import { OnInit } from '@angular/core';
import { MenuItemLink } from '../../../common/menu/menu.model';
import { AsyncActionService } from '../../../services/process/processes/async-action/async-action';
import { AppStateStore } from '../../../store/app-state/app-state.store';
import { MenuItemLinkConfig } from "./menu-item-link-config.model";
import { SystemConfigStore } from "../../../store/system-config/system-config.store";
import * as i0 from "@angular/core";
export declare class BaseMenuItemLinkComponent implements OnInit {
    protected asyncActionService: AsyncActionService;
    protected systemConfigStore: SystemConfigStore;
    protected appState: AppStateStore;
    link: MenuItemLink;
    icon: string;
    class: string;
    config: MenuItemLinkConfig;
    charSize: {
        minLength: number;
        mediumLength: number;
        maxLength: number;
    };
    constructor(asyncActionService: AsyncActionService, systemConfigStore: SystemConfigStore, appState: AppStateStore);
    ngOnInit(): void;
    handleProcess(process: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseMenuItemLinkComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BaseMenuItemLinkComponent, "scrm-base-menu-item-link", never, { "link": { "alias": "link"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "class": { "alias": "class"; "required": false; }; "config": { "alias": "config"; "required": false; }; }, {}, never, never, false, never>;
}
