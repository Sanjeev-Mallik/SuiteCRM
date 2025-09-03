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
import { OnInit } from "@angular/core";
import { AuthService } from "../../../../services/auth/auth.service";
import { NotificationStore } from "../../../../store/notification/notification.store";
import { Router } from "@angular/router";
import { MessageService } from "../../../../services/message/message.service";
import { AppStateStore } from "../../../../store/app-state/app-state.store";
import { LanguageStore } from "../../../../store/language/language.store";
import { ButtonInterface } from "../../../../common/components/button/button.model";
import { BaseRouteService } from "../../../../services/base-route/base-route.service";
import * as i0 from "@angular/core";
export declare class TwoFactorCheckComponent implements OnInit {
    protected authService: AuthService;
    protected message: MessageService;
    protected appState: AppStateStore;
    protected notificationStore: NotificationStore;
    protected router: Router;
    protected baseRoute: BaseRouteService;
    protected languageStore: LanguageStore;
    authCode: string;
    submitCodeButtonConfig: ButtonInterface;
    onEnterKey(): void;
    constructor(authService: AuthService, message: MessageService, appState: AppStateStore, notificationStore: NotificationStore, router: Router, baseRoute: BaseRouteService, languageStore: LanguageStore);
    ngOnInit(): void;
    verifyCode(): void;
    protected getTooManyFailedMessage(defaultTooManyFailedMessage: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TwoFactorCheckComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TwoFactorCheckComponent, "scrm-2fa-check", never, {}, {}, never, never, false, never>;
}
