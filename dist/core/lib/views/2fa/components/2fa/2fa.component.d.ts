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
import { OnInit, WritableSignal } from "@angular/core";
import { AuthService } from "../../../../services/auth/auth.service";
import { Router } from "@angular/router";
import { MessageService } from "../../../../services/message/message.service";
import { LanguageStore } from "../../../../store/language/language.store";
import { ButtonInterface } from "../../../../common/components/button/button.model";
import { UserPreferenceStore } from "../../../../store/user-preference/user-preference.store";
import { Clipboard } from '@angular/cdk/clipboard';
import { GenerateBackupCodes } from "../../../../services/process/processes/generate-backup-codes/generate-backup-codes";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import * as i0 from "@angular/core";
export declare class TwoFactorComponent implements OnInit {
    protected authService: AuthService;
    protected router: Router;
    protected message: MessageService;
    protected language: LanguageStore;
    protected userPreference: UserPreferenceStore;
    protected modalService: NgbModal;
    protected clipboard: Clipboard;
    protected generateBackupCodesService: GenerateBackupCodes;
    qrCodeUrl: string;
    qrCodeSvg: string;
    secret: string;
    backupCodes: any;
    authCode: string;
    isAppMethodEnabled: WritableSignal<boolean>;
    areRecoveryCodesGenerated: WritableSignal<boolean>;
    isQrCodeGenerated: WritableSignal<boolean>;
    showSecret: WritableSignal<boolean>;
    title: string;
    appMethodHeaderLabel: string;
    enableAppMethodButtonConfig: ButtonInterface;
    disableAppMethodButtonConfig: ButtonInterface;
    cancelAppMethodButtonConfig: ButtonInterface;
    regenerateBackupCodesButtonConfig: ButtonInterface;
    verifyCodeButtonConfig: ButtonInterface;
    copyBackupButtonConfig: ButtonInterface;
    copySecretButtonConfig: ButtonInterface;
    recoveryCodesHeaderLabel: string;
    onEnterKey(): void;
    constructor(authService: AuthService, router: Router, message: MessageService, language: LanguageStore, userPreference: UserPreferenceStore, modalService: NgbModal, clipboard: Clipboard, generateBackupCodesService: GenerateBackupCodes);
    ngOnInit(): void;
    enable2fa(): void;
    disable2FactorAuth(): void;
    cancel2fa(): void;
    disable2fa(): void;
    getTitle(): string;
    finalize2fa(): void;
    copyBackupCodes(): void;
    copySecret(): void;
    generateCodes(): void;
    generateBackupCodes(): void;
    setShowSecret(value: any): void;
    protected initButtons(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TwoFactorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TwoFactorComponent, "scrm-2fa", never, {}, {}, never, never, false, never>;
}
