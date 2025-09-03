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
import { Injectable } from '@angular/core';
import { AppStateStore } from '../app-state/app-state.store';
import { map, tap } from 'rxjs/operators';
import { combineLatestWith } from 'rxjs';
import { LanguageStore } from '../language/language.store';
import { NavigationStore } from '../navigation/navigation.store';
import { ModuleNavigation } from '../../services/navigation/module-navigation/module-navigation.service';
import { MetadataStore } from '../metadata/metadata.store.service';
import * as i0 from "@angular/core";
import * as i1 from "../app-state/app-state.store";
import * as i2 from "../language/language.store";
import * as i3 from "../navigation/navigation.store";
import * as i4 from "../../services/navigation/module-navigation/module-navigation.service";
import * as i5 from "../metadata/metadata.store.service";
export class ViewStore {
    constructor(appStateStore, languageStore, navigationStore, moduleNavigation, metadataStore) {
        this.appStateStore = appStateStore;
        this.languageStore = languageStore;
        this.navigationStore = navigationStore;
        this.moduleNavigation = moduleNavigation;
        this.metadataStore = metadataStore;
        this.appState$ = this.appStateStore.vm$;
        this.language$ = this.languageStore.vm$;
        this.navigation$ = this.navigationStore.vm$;
        this.module$ = this.appState$.pipe(combineLatestWith(this.navigation$), map(([appStateInfo, navigationInfo]) => this.moduleNavigation.getModuleInfo(appStateInfo.module, navigationInfo)));
        this.appData$ = this.appState$.pipe(combineLatestWith(this.module$, this.language$, this.navigation$), map(([appState, module, language, navigation]) => {
            this.appData = { appState, module, language, navigation };
            return this.appData;
        }));
        this.metadata$ = metadataStore.metadata$.pipe(tap(metadata => { this.metadata = metadata; }));
    }
    clear() {
    }
    clearAuthBased() {
        this.clear();
    }
    get appState() {
        if (!this.appData.appState) {
            return {};
        }
        return this.appData.appState;
    }
    get module() {
        return this.appData.module;
    }
    get language() {
        if (!this.appData.language) {
            return {
                appStrings: {},
                appListStrings: {},
                modStrings: {},
                languageKey: ''
            };
        }
        return this.appData.language;
    }
    get appStrings() {
        return this.language.appStrings;
    }
    get appListStrings() {
        return this.language.appListStrings;
    }
    get modStrings() {
        return this.language.modStrings;
    }
    get navigation() {
        return this.appData.navigation;
    }
    get searchMeta() {
        if (!this.metadata.search) {
            return {
                layout: {
                    basic: {},
                    advanced: {}
                }
            };
        }
        return this.metadata.search;
    }
    static { this.ɵfac = function ViewStore_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ViewStore)(i0.ɵɵinject(i1.AppStateStore), i0.ɵɵinject(i2.LanguageStore), i0.ɵɵinject(i3.NavigationStore), i0.ɵɵinject(i4.ModuleNavigation), i0.ɵɵinject(i5.MetadataStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ViewStore, factory: ViewStore.ɵfac }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ViewStore, [{
        type: Injectable
    }], () => [{ type: i1.AppStateStore }, { type: i2.LanguageStore }, { type: i3.NavigationStore }, { type: i4.ModuleNavigation }, { type: i5.MetadataStore }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9zdG9yZS92aWV3L3ZpZXcuc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFXLGFBQWEsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ3JFLE9BQU8sRUFBQyxHQUFHLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEMsT0FBTyxFQUFDLGlCQUFpQixFQUFhLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBd0IsYUFBYSxFQUFxQyxNQUFNLDRCQUE0QixDQUFDO0FBQ3BILE9BQU8sRUFBMkIsZUFBZSxFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDekYsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sdUVBQXVFLENBQUM7QUFDdkcsT0FBTyxFQUFXLGFBQWEsRUFBQyxNQUFNLG9DQUFvQyxDQUFDOzs7Ozs7O0FBVzNFLE1BQU0sT0FBTyxTQUFTO0lBWWxCLFlBQ2MsYUFBNEIsRUFDNUIsYUFBNEIsRUFDNUIsZUFBZ0MsRUFDaEMsZ0JBQWtDLEVBQ2xDLGFBQTRCO1FBSjVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBRXRDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUM7UUFDeEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQztRQUN4QyxJQUFJ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QVM7Y0FEckIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U3RhdGVTdG9yZX0gZnJvbSAnLi4vc3RhdGUnO1xuaW1wb3J0IHtBcHBTdGF0ZSwgQXBwU3RhdGVTdG9yZX0gZnJvbSAnLi4vYXBwLXN0YXRlL2FwcC1zdGF0ZS5zdG9yZSc7XG5pbXBvcnQge21hcCwgdGFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge2NvbWJpbmVMYXRlc3RXaXRoLCBPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7TGFuZ3VhZ2VMaXN0U3RyaW5nTWFwLCBMYW5ndWFnZVN0b3JlLCBMYW5ndWFnZVN0cmluZ01hcCwgTGFuZ3VhZ2VTdHJpbmdzfSBmcm9tICcuLi9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5pbXBvcnQge05hdmJhck1vZHVsZSwgTmF2aWdhdGlvbiwgTmF2aWdhdGlvblN0b3JlfSBmcm9tICcuLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uc3RvcmUnO1xuaW1wb3J0IHtNb2R1bGVOYXZpZ2F0aW9ufSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL21vZHVsZS1uYXZpZ2F0aW9uL21vZHVsZS1uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHtNZXRhZGF0YSwgTWV0YWRhdGFTdG9yZX0gZnJvbSAnLi4vbWV0YWRhdGEvbWV0YWRhdGEuc3RvcmUuc2VydmljZSc7XG5pbXBvcnQge1NlYXJjaE1ldGF9IGZyb20gJy4uLy4uL2NvbW1vbi9tZXRhZGF0YS9saXN0Lm1ldGFkYXRhLm1vZGVsJztcblxuZXhwb3J0IGludGVyZmFjZSBBcHBEYXRhIHtcbiAgICBhcHBTdGF0ZTogQXBwU3RhdGU7XG4gICAgbW9kdWxlOiBOYXZiYXJNb2R1bGU7XG4gICAgbGFuZ3VhZ2U6IExhbmd1YWdlU3RyaW5ncztcbiAgICBuYXZpZ2F0aW9uOiBOYXZpZ2F0aW9uO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmlld1N0b3JlIGltcGxlbWVudHMgU3RhdGVTdG9yZSB7XG5cbiAgICBhcHBTdGF0ZSQ6IE9ic2VydmFibGU8QXBwU3RhdGU+O1xuICAgIG1vZHVsZSQ6IE9ic2VydmFibGU8TmF2YmFyTW9kdWxlPjtcbiAgICBsYW5ndWFnZSQ6IE9ic2VydmFibGU8TGFuZ3VhZ2VTdHJpbmdzPjtcbiAgICBuYXZpZ2F0aW9uJDogT2JzZXJ2YWJsZTxOYXZpZ2F0aW9uPjtcbiAgICBhcHBEYXRhJDogT2JzZXJ2YWJsZTxBcHBEYXRhPjtcbiAgICBtZXRhZGF0YSQ6IE9ic2VydmFibGU8TWV0YWRhdGE+O1xuXG4gICAgYXBwRGF0YTogQXBwRGF0YTtcbiAgICBtZXRhZGF0YTogTWV0YWRhdGE7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGFwcFN0YXRlU3RvcmU6IEFwcFN0YXRlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBsYW5ndWFnZVN0b3JlOiBMYW5ndWFnZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbmF2aWdhdGlvblN0b3JlOiBOYXZpZ2F0aW9uU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBtb2R1bGVOYXZpZ2F0aW9uOiBNb2R1bGVOYXZpZ2F0aW9uLFxuICAgICAgICBwcm90ZWN0ZWQgbWV0YWRhdGFTdG9yZTogTWV0YWRhdGFTdG9yZVxuICAgICkge1xuICAgICAgICB0aGlzLmFwcFN0YXRlJCA9IHRoaXMuYXBwU3RhdGVTdG9yZS52bSQ7XG4gICAgICAgIHRoaXMubGFuZ3VhZ2UkID0gdGhpcy5sYW5ndWFnZVN0b3JlLnZtJDtcbiAgICAgICAgdGhpcy5uYXZpZ2F0aW9uJCA9IHRoaXMubmF2aWdhdGlvblN0b3JlLnZtJDtcbiAgICAgICAgdGhpcy5tb2R1bGUkID0gdGhpcy5hcHBTdGF0ZSQucGlwZShcbiAgICAgICAgICAgIGNvbWJpbmVMYXRlc3RXaXRoKHRoaXMubmF2aWdhdGlvbiQpLFxuICAgICAgICAgICAgbWFwKChbYXBwU3RhdGVJbmZvLCBuYXZpZ2F0aW9uSW5mb106IFtBcHBTdGF0ZSwgTmF2aWdhdGlvbl0pID0+XG4gICAgICAgICAgICAgICAgdGhpcy5tb2R1bGVOYXZpZ2F0aW9uLmdldE1vZHVsZUluZm8oYXBwU3RhdGVJbmZvLm1vZHVsZSwgbmF2aWdhdGlvbkluZm8pKVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuYXBwRGF0YSQgPSB0aGlzLmFwcFN0YXRlJC5waXBlKFxuICAgICAgICAgICAgY29tYmluZUxhdGVzdFdpdGgodGhpcy5tb2R1bGUkLCB0aGlzLmxhbmd1YWdlJCwgdGhpcy5uYXZpZ2F0aW9uJCksXG4gICAgICAgICAgICBtYXAoKFthcHBTdGF0ZSwgbW9kdWxlLCBsYW5ndWFnZSwgbmF2aWdhdGlvbl0pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcERhdGEgPSB7YXBwU3RhdGUsIG1vZHVsZSwgbGFuZ3VhZ2UsIG5hdmlnYXRpb259IGFzIEFwcERhdGE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXBwRGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5tZXRhZGF0YSQgPSBtZXRhZGF0YVN0b3JlLm1ldGFkYXRhJC5waXBlKFxuICAgICAgICAgICAgdGFwKG1ldGFkYXRhID0+IHt0aGlzLm1ldGFkYXRhID0gbWV0YWRhdGE7fSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjbGVhcigpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYXJBdXRoQmFzZWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICB9XG5cbiAgICBnZXQgYXBwU3RhdGUoKTogQXBwU3RhdGUge1xuICAgICAgICBpZiAoIXRoaXMuYXBwRGF0YS5hcHBTdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmFwcERhdGEuYXBwU3RhdGU7XG4gICAgfVxuXG4gICAgZ2V0IG1vZHVsZSgpOiBOYXZiYXJNb2R1bGUge1xuICAgICAgICByZXR1cm4gdGhpcy5hcHBEYXRhLm1vZHVsZTtcbiAgICB9XG5cbiAgICBnZXQgbGFuZ3VhZ2UoKTogTGFuZ3VhZ2VTdHJpbmdzIHtcbiAgICAgICAgaWYgKCF0aGlzLmFwcERhdGEubGFuZ3VhZ2UpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYXBwU3RyaW5nczoge30sXG4gICAgICAgICAgICAgICAgYXBwTGlzdFN0cmluZ3M6IHt9LFxuICAgICAgICAgICAgICAgIG1vZFN0cmluZ3M6IHt9LFxuICAgICAgICAgICAgICAgIGxhbmd1YWdlS2V5OiAnJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5hcHBEYXRhLmxhbmd1YWdlO1xuICAgIH1cblxuICAgIGdldCBhcHBTdHJpbmdzKCk6IExhbmd1YWdlU3RyaW5nTWFwIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGFuZ3VhZ2UuYXBwU3RyaW5ncztcbiAgICB9XG5cbiAgICBnZXQgYXBwTGlzdFN0cmluZ3MoKTogTGFuZ3VhZ2VMaXN0U3RyaW5nTWFwIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGFuZ3VhZ2UuYXBwTGlzdFN0cmluZ3M7XG4gICAgfVxuXG4gICAgZ2V0IG1vZFN0cmluZ3MoKTogTGFuZ3VhZ2VMaXN0U3RyaW5nTWFwIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGFuZ3VhZ2UubW9kU3RyaW5ncztcbiAgICB9XG5cbiAgICBnZXQgbmF2aWdhdGlvbigpOiBOYXZpZ2F0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBwRGF0YS5uYXZpZ2F0aW9uO1xuICAgIH1cblxuICAgIGdldCBzZWFyY2hNZXRhKCk6IFNlYXJjaE1ldGEge1xuICAgICAgICBpZiAoIXRoaXMubWV0YWRhdGEuc2VhcmNoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxheW91dDoge1xuICAgICAgICAgICAgICAgICAgICBiYXNpYzoge30sXG4gICAgICAgICAgICAgICAgICAgIGFkdmFuY2VkOiB7fVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5tZXRhZGF0YS5zZWFyY2g7XG4gICAgfVxufVxuIl19