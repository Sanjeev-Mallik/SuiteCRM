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
import { OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { ModuleNavigation } from "../../../../services/navigation/module-navigation/module-navigation.service";
import { ModuleNameMapper } from "../../../../services/navigation/module-name-mapper/module-name-mapper.service";
import { UserPreferenceStore } from "../../../../store/user-preference/user-preference.store";
import { LocalStorageService } from "../../../../services/local-storage/local-storage.service";
import { LanguageStore, LanguageStringMap } from "../../../../store/language/language.store";
import { SystemConfigStore } from "../../../../store/system-config/system-config.store";
import { RecordViewStore } from "../../store/record-view/record-view.store";
import { RecordPaginationService } from "../../store/record-pagination/record-pagination.service";
import { RecordPaginationStore } from "../../store/record-pagination/record-pagination.store";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { PageSelection, PaginationCount } from "../../../../common/views/list/list-navigation.model";
import { ViewMode } from "../../../../common/views/view.model";
import { ObjectMap } from "../../../../common/types/object-map";
import { ButtonInterface } from "../../../../common/components/button/button.model";
import * as i0 from "@angular/core";
interface RecordPaginationViewModel {
    appStrings: LanguageStringMap;
    pageCount: PaginationCount;
    paginationEnabled: boolean;
}
export declare class RecordPaginationComponent implements OnInit, OnDestroy {
    private systemConfigStore;
    private preferences;
    private localStorageService;
    private languageStore;
    private navigation;
    private nameMapper;
    private recordViewStore;
    private recordPaginationStore;
    private recordPaginationService;
    private route;
    private router;
    private modalService;
    currentIndex: number;
    currentPage: number;
    pageSize: number;
    totalRecordsCount: number;
    isRecordsLoading: boolean;
    isSaveContinueClicked: boolean;
    mode: ViewMode;
    paginationType: string;
    recordIds: ObjectMap[];
    subs: Subscription[];
    prevButton: ButtonInterface;
    nextButton: ButtonInterface;
    appStrings$: Observable<LanguageStringMap>;
    recordIds$: Observable<ObjectMap[]>;
    mode$: Observable<ViewMode>;
    vm$: Observable<RecordPaginationViewModel>;
    constructor(systemConfigStore: SystemConfigStore, preferences: UserPreferenceStore, localStorageService: LocalStorageService, languageStore: LanguageStore, navigation: ModuleNavigation, nameMapper: ModuleNameMapper, recordViewStore: RecordViewStore, recordPaginationStore: RecordPaginationStore, recordPaginationService: RecordPaginationService, route: ActivatedRoute, router: Router, modalService: NgbModal);
    ngOnInit(): void;
    ngOnDestroy(): void;
    protected prevRecord(): void;
    protected nextRecord(): void;
    protected loadPage(direction: PageSelection): void;
    protected navigateNextRoute(nextRecordIndex: number): void;
    protected navigatePrevRoute(nextRecordIndex: number): void;
    protected showConfirmationModal(direction: PageSelection, nextRecordIndex: number): void;
    protected buildRoute(recordId: ObjectMap): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecordPaginationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RecordPaginationComponent, "scrm-record-pagination", never, {}, {}, never, never, true, never>;
}
export {};
