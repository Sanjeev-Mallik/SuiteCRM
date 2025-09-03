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
import { LogoAbstract } from '../logo/logo-abstract';
import { ready } from '../../common/utils/object-utils';
import { LinkTarget } from './link-target';
export class NavbarAbstract {
    /**
     * Public API
     */
    constructor(routeConverter, moduleNavigation, preferences, language, appState, moduleNameMapper) {
        this.routeConverter = routeConverter;
        this.moduleNavigation = moduleNavigation;
        this.preferences = preferences;
        this.language = language;
        this.appState = appState;
        this.moduleNameMapper = moduleNameMapper;
        this.authenticated = true;
        this.logo = new LogoAbstract();
        this.useGroupTabs = false;
        this.globalActions = [];
        this.currentUser = {
            id: '',
            firstName: '',
            lastName: '',
        };
        this.all = {
            modules: [],
            extra: [],
        };
        this.menu = [];
    }
    /**
     * Reset menus
     */
    resetMenu() {
        this.menu = [];
        this.globalActions = [];
        this.all.modules = [];
        this.all.extra = [];
        this.current = null;
        this.currentUser = {};
    }
    /**
     * Build user action menu
     *
     * @param {[]} userActionMenu info
     * @param {object} currentUser info
     */
    buildUserActionMenu(userActionMenu, currentUser) {
        this.currentUser.id = currentUser.id;
        this.currentUser.firstName = currentUser.firstName;
        this.currentUser.lastName = currentUser.lastName;
        if (userActionMenu) {
            userActionMenu.forEach((subMenu) => {
                const name = subMenu.name;
                let url = subMenu.url;
                if (name === 'logout') {
                    return;
                }
                let target = LinkTarget.none;
                if (name === 'training') {
                    target = LinkTarget.blank;
                }
                else {
                    url = this.routeConverter.toFrontEndLink(url);
                }
                const label = this.language.getAppString(subMenu.labelKey) ?? '';
                this.globalActions.push({
                    link: {
                        url,
                        label,
                        target
                    },
                });
            });
        }
        return;
    }
    /**
     * Build navbar
     *
     * @param {object} navigation info
     * @param {object} currentUser info
     * @param {number} maxTabs to display
     */
    build(navigation, currentUser, maxTabs) {
        this.buildUserActionMenu(navigation.userActionMenu, currentUser);
        const navigationParadigm = this.preferences.getUserPreference('navigation_paradigm');
        const sort = this.preferences.getUserPreference('sort_modules_by_name') === 'on';
        if (navigationParadigm === 'm') {
            this.buildModuleNavigation(navigation, maxTabs, sort);
            return;
        }
        if (navigationParadigm === 'gm') {
            this.buildGroupedNavigation(navigation, maxTabs, sort);
            return;
        }
    }
    /**
     * Build Group tab menu
     *
     * @param {[]} items list
     * @param {object} modules info
     * @param {number} threshold limit
     * @param {object} groupedTabs info
     * @param {boolean} sort flag
     */
    buildGroupTabMenu(items, modules, threshold, groupedTabs, sort) {
        const navItems = [];
        const moreItems = [];
        if (items && items.length > 0) {
            items.forEach((module) => {
                moreItems.push(this.buildTabMenuItem(module, modules[module]));
            });
            if (sort) {
                this.sortMenuItems(moreItems);
            }
        }
        let count = 0;
        groupedTabs.forEach((groupedTab) => {
            if (count < threshold) {
                navItems.push(this.buildTabGroupedMenuItem(groupedTab.labelKey, groupedTab.modules, modules, sort));
            }
            count++;
        });
        this.menu = navItems;
        this.all.modules = moreItems;
    }
    /**
     *
     * Internal API
     *
     */
    /**
     * Build module navigation
     *
     * @param {object} navigation info
     * @param {number} maxTabs to use
     * @param {boolean} sort flag
     */
    buildModuleNavigation(navigation, maxTabs, sort) {
        if (!ready([navigation.tabs, navigation.modules])) {
            return;
        }
        this.buildTabMenu(navigation.tabs, navigation.modules, maxTabs, sort);
        this.buildSelectedModule(navigation);
    }
    /**
     * Build grouped navigation
     *
     * @param {object} navigation info
     * @param {number} maxTabs to use
     * @param {boolean} sort flag
     */
    buildGroupedNavigation(navigation, maxTabs, sort) {
        if (!ready([navigation.tabs, navigation.modules, navigation.groupedTabs])) {
            return;
        }
        this.buildGroupTabMenu(navigation.tabs, navigation.modules, maxTabs, navigation.groupedTabs, sort);
        this.buildSelectedModule(navigation);
    }
    /**
     * Build selected module
     *
     * @param {object} navigation info
     */
    buildSelectedModule(navigation) {
        const module = this.appState.getModule() ?? '';
        if (module === '' || module === 'home') {
            return;
        }
        if (!navigation.modules[module]) {
            return;
        }
        this.current = this.buildTabMenuItem(module, navigation.modules[module]);
    }
    /**
     * Build tab / module menu
     *
     * @param {[]} items list
     * @param {object} modules info
     * @param {number} threshold limit
     * @param {boolean} sort flag
     */
    buildTabMenu(items, modules, threshold, sort) {
        const navItems = [];
        const moreItems = [];
        if (!items || items.length === 0) {
            this.menu = navItems;
            this.all.modules = moreItems;
            return;
        }
        let count = 0;
        items.forEach((module) => {
            const item = this.buildTabMenuItem(module, modules[module]);
            if (module === 'home' || this.appState.getModule() === module || count > threshold) {
                moreItems.push(item);
            }
            else {
                navItems.push(item);
            }
            count++;
        });
        if (sort) {
            this.sortMenuItems(navItems);
            this.sortMenuItems(moreItems);
        }
        this.menu = navItems;
        this.all.modules = moreItems;
    }
    /**
     * Build Grouped Tab menu item
     *
     * @param {string} moduleLabel to display
     * @param {object} groupedModules list
     * @param {object} modules list
     * @param {boolean} sort flag
     *
     * @returns {object} group tab menu item
     */
    buildTabGroupedMenuItem(moduleLabel, groupedModules, modules, sort) {
        return {
            link: {
                label: this.language.getAppString(moduleLabel) || moduleLabel,
                url: '',
                route: null,
                params: null
            },
            icon: '',
            submenu: this.buildGroupedMenu(groupedModules, modules, sort)
        };
    }
    /**
     * Build Grouped menu
     *
     * @param {object} groupedModules info
     * @param {object} modules map
     * @param {boolean} sort flag
     *
     * @returns {[]} menu item array
     */
    buildGroupedMenu(groupedModules, modules, sort) {
        const groupedItems = [];
        let homeMenuItem = null;
        groupedModules.forEach((groupedModule) => {
            const module = modules[groupedModule];
            if (!module) {
                return;
            }
            const moduleMenuItem = this.buildTabMenuItem(groupedModule, module);
            if (groupedModule === 'home') {
                homeMenuItem = moduleMenuItem;
                return;
            }
            groupedItems.push(moduleMenuItem);
        });
        if (sort) {
            this.sortMenuItems(groupedItems);
        }
        if (homeMenuItem) {
            groupedItems.unshift(homeMenuItem);
        }
        return groupedItems;
    }
    /**
     * Build module menu items
     *
     * @param {string} module name
     * @param {object} moduleInfo info
     *
     * @returns {object} menuItem
     */
    buildTabMenuItem(module, moduleInfo) {
        if (moduleInfo.name) {
            module = moduleInfo.name;
        }
        const moduleRoute = this.moduleNavigation.getModuleRoute(moduleInfo);
        const appListStrings = this.language.getLanguageStrings()?.appListStrings ?? {};
        const menuItem = {
            link: {
                label: this.moduleNavigation.getModuleLabel(moduleInfo, appListStrings),
                url: moduleRoute.url,
                route: moduleRoute.route,
                params: null
            },
            icon: this.moduleNameMapper.toLegacy(module) ?? null,
            submenu: [],
            module: module ?? null,
            isGroupedMenu: false
        };
        let hasSubmenu = false;
        if (moduleInfo) {
            moduleInfo.menu.forEach((subMenu) => {
                const sublinks = subMenu.sublinks || [];
                const subMenuItem = this.buildSubMenuItem(module, subMenu, sublinks);
                menuItem.submenu.push(subMenuItem);
                if (sublinks.length > 0) {
                    hasSubmenu = true;
                }
            });
        }
        menuItem.isGroupedMenu = hasSubmenu;
        return menuItem;
    }
    buildSubMenuItem(module, subMenu, sublinks) {
        const moduleActionRoute = this.moduleNavigation.getActionRoute(subMenu);
        const subMenuItem = {
            link: {
                label: this.moduleNavigation.getActionLabel(module, subMenu, this.language.getLanguageStrings()),
                url: moduleActionRoute.url,
                route: moduleActionRoute.route,
                params: moduleActionRoute.params,
                process: moduleActionRoute.process
            },
            icon: subMenu.icon || '',
            submenu: sublinks.map((item) => this.buildSubMenuItem(module, item, [])),
        };
        return subMenuItem;
    }
    /**
     * Sort menu items by label
     *
     * @param {object} navItems to sort
     */
    sortMenuItems(navItems) {
        navItems.sort((a, b) => {
            const nameA = a.link.label.toUpperCase(); // ignore upper and lowercase
            const nameB = b.link.label.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            // names must be equal
            return 0;
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmFic3RyYWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5hYnN0cmFjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBR0gsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBR25ELE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQVd0RCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBT3pDLE1BQU0sT0FBTyxjQUFjO0lBaUJ2Qjs7T0FFRztJQUVILFlBQ1ksY0FBOEIsRUFDNUIsZ0JBQWtDLEVBQ2xDLFdBQWdDLEVBQ2hDLFFBQXVCLEVBQ3ZCLFFBQXVCLEVBQ3ZCLGdCQUFrQztRQUxwQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDNUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxnQkFBVyxHQUFYLFdBQVcsQ0FBcUI7UUFDaEMsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQUN2QixhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUExQmhELGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzFCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLGtCQUFhLEdBQXNCLEVBQUUsQ0FBQztRQUN0QyxnQkFBVyxHQUFxQjtZQUM1QixFQUFFLEVBQUUsRUFBRTtZQUNOLFNBQVMsRUFBRSxFQUFFO1lBQ2IsUUFBUSxFQUFFLEVBQUU7U0FDZixDQUFDO1FBQ0YsUUFBRyxHQUFHO1lBQ0YsT0FBTyxFQUFFLEVBQUU7WUFDWCxLQUFLLEVBQUUsRUFBRTtTQUNaLENBQUM7UUFDRixTQUFJLEdB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R0Q7Ozs7T0FJRztJQUNPLGFBQWEsQ0FBQyxRQUFlO1FBQ25DLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFXLEVBQUUsQ0FBVyxFQUFFLEVBQUU7WUFFdkMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyw2QkFBNkI7WUFDdkUsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyw2QkFBNkI7WUFFdkUsSUFBSSxLQUFLLEdBQUcsS0FBSyxFQUFFLENBQUM7Z0JBQ2hCLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDZCxDQUFDO1lBQ0QsSUFBSSxLQUFLLEdBQUcsS0FBSyxFQUFFLENBQUM7Z0JBQ2hCLE9BQU8sQ0FBQyxDQUFDO1lBQ2IsQ0FBQztZQUVELHNCQUFzQjtZQUN0QixPQUFPLENBQUMsQ0FBQztRQUNiLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge05hdmJhck1vZGVsfSBmcm9tICcuL25hdmJhci1tb2RlbCc7XG5pbXBvcnQge0xvZ29BYnN0cmFjdH0gZnJvbSAnLi4vbG9nby9sb2dvLWFic3RyYWN0JztcbmltcG9ydCB7Q3VycmVudFVzZXJNb2RlbH0gZnJvbSAnLi9jdXJyZW50LXVzZXItbW9kZWwnO1xuaW1wb3J0IHtBY3Rpb25MaW5rTW9kZWx9IGZyb20gJy4vYWN0aW9uLWxpbmstbW9kZWwnO1xuaW1wb3J0IHtyZWFkeX0gZnJvbSAnLi4vLi4vY29tbW9uL3V0aWxzL29iamVjdC11dGlscyc7XG5pbXBvcnQge01lbnVJdGVtfSBmcm9tICcuLi8uLi9jb21tb24vbWVudS9tZW51Lm1vZGVsJztcbmltcG9ydCB7VXNlcn0gZnJvbSAnLi4vLi4vY29tbW9uL3R5cGVzL3VzZXInO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5pbXBvcnQge1xuICAgIEdyb3VwZWRUYWIsXG4gICAgTmF2YmFyTW9kdWxlLFxuICAgIE5hdmJhck1vZHVsZU1hcCxcbiAgICBOYXZpZ2F0aW9uLFxuICAgIFVzZXJBY3Rpb25NZW51XG59IGZyb20gJy4uLy4uL3N0b3JlL25hdmlnYXRpb24vbmF2aWdhdGlvbi5zdG9yZSc7XG5pbXBvcnQge0xpbmtUYXJnZXR9IGZyb20gJy4vbGluay10YXJnZXQnO1xuaW1wb3J0IHtSb3V0ZUNvbnZlcnRlcn0gZnJvbSAnLi4vLi4vc2VydmljZXMvbmF2aWdhdGlvbi9yb3V0ZS1jb252ZXJ0ZXIvcm91dGUtY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtVc2VyUHJlZmVyZW5jZVN0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS91c2VyLXByZWZlcmVuY2UvdXNlci1wcmVmZXJlbmNlLnN0b3JlJztcbmltcG9ydCB7TW9kdWxlTmF2aWdhdGlvbn0gZnJvbSAnLi4vLi4vc2VydmljZXMvbmF2aWdhdGlvbi9tb2R1bGUtbmF2aWdhdGlvbi9tb2R1bGUtbmF2aWdhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7QXBwU3RhdGVTdG9yZX0gZnJvbSAnLi4vLi4vc3RvcmUvYXBwLXN0YXRlL2FwcC1zdGF0ZS5zdG9yZSc7XG5pbXBvcnQge01vZHVsZU5hbWVNYXBwZXJ9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL21vZHVsZS1uYW1lLW1hcHBlci9tb2R1bGUtbmFtZS1tYXBwZXIuc2VydmljZVwiO1xuXG5leHBvcnQgY2xhc3MgTmF2YmFyQWJzdHJhY3QgaW1wbGVtZW50cyBOYXZiYXJNb2RlbCB7XG4gICAgYXV0aGVudGljYXRlZCA9IHRydWU7XG4gICAgbG9nbyA9IG5ldyBMb2dvQWJzdHJhY3QoKTtcbiAgICB1c2VHcm91cFRhYnMgPSBmYWxzZTtcbiAgICBnbG9iYWxBY3Rpb25zOiBBY3Rpb25MaW5rTW9kZWxbXSA9IFtdO1xuICAgIGN1cnJlbnRVc2VyOiBDdXJyZW50VXNlck1vZGVsID0ge1xuICAgICAgICBpZDogJycsXG4gICAgICAgIGZpcnN0TmFtZTogJycsXG4gICAgICAgIGxhc3ROYW1lOiAnJyxcbiAgICB9O1xuICAgIGFsbCA9IHtcbiAgICAgICAgbW9kdWxlczogW10sXG4gICAgICAgIGV4dHJhOiBbXSxcbiAgICB9O1xuICAgIG1lbnU6IE1lbnVJdGVtW10gPSBbXTtcbiAgICBjdXJyZW50PzogTWVudUl0ZW07XG5cbiAgICAvKipcbiAgICAgKiBQdWJsaWMgQVBJXG4gICAgICovXG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByb3V0ZUNvbnZlcnRlcjogUm91dGVDb252ZXJ0ZXIsXG4gICAgICAgIHByb3RlY3RlZCBtb2R1bGVOYXZpZ2F0aW9uOiBNb2R1bGVOYXZpZ2F0aW9uLFxuICAgICAgICBwcm90ZWN0ZWQgcHJlZmVyZW5jZXM6IFVzZXJQcmVmZXJlbmNlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBsYW5ndWFnZTogTGFuZ3VhZ2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGFwcFN0YXRlOiBBcHBTdGF0ZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbW9kdWxlTmFtZU1hcHBlcjogTW9kdWxlTmFtZU1hcHBlclxuICAgICkge1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0IG1lbnVzXG4gICAgICovXG4gICAgcHVibGljIHJlc2V0TWVudSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tZW51ID0gW107XG4gICAgICAgIHRoaXMuZ2xvYmFsQWN0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLmFsbC5tb2R1bGVzID0gW107XG4gICAgICAgIHRoaXMuYWxsLmV4dHJhID0gW107XG4gICAgICAgIHRoaXMuY3VycmVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSB7fSBhcyBVc2VyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIHVzZXIgYWN0aW9uIG1lbnVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7W119IHVzZXJBY3Rpb25NZW51IGluZm9cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY3VycmVudFVzZXIgaW5mb1xuICAgICAqL1xuICAgIHB1YmxpYyBidWlsZFVzZXJBY3Rpb25NZW51KFxuICAgICAgICB1c2VyQWN0aW9uTWVudTogVXNlckFjdGlvbk1lbnVbXSxcbiAgICAgICAgY3VycmVudFVzZXI6IEN1cnJlbnRVc2VyTW9kZWxcbiAgICApOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlci5pZCA9IGN1cnJlbnRVc2VyLmlkO1xuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyLmZpcnN0TmFtZSA9IGN1cnJlbnRVc2VyLmZpcnN0TmFtZTtcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlci5sYXN0TmFtZSA9IGN1cnJlbnRVc2VyLmxhc3ROYW1lO1xuXG4gICAgICAgIGlmICh1c2VyQWN0aW9uTWVudSkge1xuICAgICAgICAgICAgdXNlckFjdGlvbk1lbnUuZm9yRWFjaCgoc3ViTWVudSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBzdWJNZW51Lm5hbWU7XG4gICAgICAgICAgICAgICAgbGV0IHVybCA9IHN1Yk1lbnUudXJsO1xuXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdsb2dvdXQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0ID0gTGlua1RhcmdldC5ub25lO1xuXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICd0cmFpbmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gTGlua1RhcmdldC5ibGFuaztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSB0aGlzLnJvdXRlQ29udmVydGVyLnRvRnJvbnRFbmRMaW5rKHVybCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLmxhbmd1YWdlLmdldEFwcFN0cmluZyhzdWJNZW51LmxhYmVsS2V5KSA/PyAnJztcblxuICAgICAgICAgICAgICAgIHRoaXMuZ2xvYmFsQWN0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbGluazoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCBuYXZiYXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBuYXZpZ2F0aW9uIGluZm9cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY3VycmVudFVzZXIgaW5mb1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhUYWJzIHRvIGRpc3BsYXlcbiAgICAgKi9cbiAgICBwdWJsaWMgYnVpbGQoXG4gICAgICAgIG5hdmlnYXRpb246IE5hdmlnYXRpb24sXG4gICAgICAgIGN1cnJlbnRVc2VyOiBDdXJyZW50VXNlck1vZGVsLFxuICAgICAgICBtYXhUYWJzOiBudW1iZXIsXG4gICAgKTogdm9pZCB7XG5cbiAgICAgICAgdGhpcy5idWlsZFVzZXJBY3Rpb25NZW51KG5hdmlnYXRpb24udXNlckFjdGlvbk1lbnUsIGN1cnJlbnRVc2VyKTtcblxuICAgICAgICBjb25zdCBuYXZpZ2F0aW9uUGFyYWRpZ20gPSB0aGlzLnByZWZlcmVuY2VzLmdldFVzZXJQcmVmZXJlbmNlKCduYXZpZ2F0aW9uX3BhcmFkaWdtJyk7XG4gICAgICAgIGNvbnN0IHNvcnQgPSB0aGlzLnByZWZlcmVuY2VzLmdldFVzZXJQcmVmZXJlbmNlKCdzb3J0X21vZHVsZXNfYnlfbmFtZScpID09PSAnb24nO1xuXG4gICAgICAgIGlmIChuYXZpZ2F0aW9uUGFyYWRpZ20gPT09ICdtJykge1xuICAgICAgICAgICAgdGhpcy5idWlsZE1vZHVsZU5hdmlnYXRpb24obmF2aWdhdGlvbiwgbWF4VGFicywgc29ydCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmF2aWdhdGlvblBhcmFkaWdtID09PSAnZ20nKSB7XG4gICAgICAgICAgICB0aGlzLmJ1aWxkR3JvdXBlZE5hdmlnYXRpb24obmF2aWdhdGlvbiwgbWF4VGFicywgc29ydCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCBHcm91cCB0YWIgbWVudVxuICAgICAqXG4gICAgICogQHBhcmFtIHtbXX0gaXRlbXMgbGlzdFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtb2R1bGVzIGluZm9cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGhyZXNob2xkIGxpbWl0XG4gICAgICogQHBhcmFtIHtvYmplY3R9IGdyb3VwZWRUYWJzIGluZm9cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNvcnQgZmxhZ1xuICAgICAqL1xuICAgIHB1YmxpYyBidWlsZEdyb3VwVGFiTWVudShcbiAgICAgICAgaXRlbXM6IHN0cmluZ1tdLFxuICAgICAgICBtb2R1bGVzOiBOYXZiYXJNb2R1bGVNYXAsXG4gICAgICAgIHRocmVzaG9sZDogbnVtYmVyLFxuICAgICAgICBncm91cGVkVGFiczogR3JvdXBlZFRhYltdLFxuICAgICAgICBzb3J0OiBib29sZWFuXG4gICAgKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgbmF2SXRlbXMgPSBbXTtcbiAgICAgICAgY29uc3QgbW9yZUl0ZW1zID0gW107XG5cbiAgICAgICAgaWYgKGl0ZW1zICYmIGl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goKG1vZHVsZSkgPT4ge1xuICAgICAgICAgICAgICAgIG1vcmVJdGVtcy5wdXNoKHRoaXMuYnVpbGRUYWJNZW51SXRlbShtb2R1bGUsIG1vZHVsZXNbbW9kdWxlXSkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChzb3J0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zb3J0TWVudUl0ZW1zKG1vcmVJdGVtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICBncm91cGVkVGFicy5mb3JFYWNoKChncm91cGVkVGFiOiBhbnkpID0+IHtcblxuICAgICAgICAgICAgaWYgKGNvdW50IDwgdGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgbmF2SXRlbXMucHVzaCh0aGlzLmJ1aWxkVGFiR3JvdXBlZE1lbnVJdGVtKFxuICAgICAgICAgICAgICAgICAgICBncm91cGVkVGFiLmxhYmVsS2V5LFxuICAgICAgICAgICAgICAgICAgICBncm91cGVkVGFiLm1vZHVsZXMsXG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZXMsXG4gICAgICAgICAgICAgICAgICAgIHNvcnRcbiAgICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5tZW51ID0gbmF2SXRlbXM7XG4gICAgICAgIHRoaXMuYWxsLm1vZHVsZXMgPSBtb3JlSXRlbXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBJbnRlcm5hbCBBUElcbiAgICAgKlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQnVpbGQgbW9kdWxlIG5hdmlnYXRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBuYXZpZ2F0aW9uIGluZm9cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWF4VGFicyB0byB1c2VcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNvcnQgZmxhZ1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBidWlsZE1vZHVsZU5hdmlnYXRpb24oXG4gICAgICAgIG5hdmlnYXRpb246IE5hdmlnYXRpb24sXG4gICAgICAgIG1heFRhYnM6IG51bWJlcixcbiAgICAgICAgc29ydDogYm9vbGVhbixcbiAgICApOiB2b2lkIHtcblxuICAgICAgICBpZiAoIXJlYWR5KFtuYXZpZ2F0aW9uLnRhYnMsIG5hdmlnYXRpb24ubW9kdWxlc10pKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJ1aWxkVGFiTWVudShuYXZpZ2F0aW9uLnRhYnMsIG5hdmlnYXRpb24ubW9kdWxlcywgbWF4VGFicywgc29ydCk7XG4gICAgICAgIHRoaXMuYnVpbGRTZWxlY3RlZE1vZHVsZShuYXZpZ2F0aW9uKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCBncm91cGVkIG5hdmlnYXRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBuYXZpZ2F0aW9uIGluZm9cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWF4VGFicyB0byB1c2VcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNvcnQgZmxhZ1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBidWlsZEdyb3VwZWROYXZpZ2F0aW9uKFxuICAgICAgICBuYXZpZ2F0aW9uOiBOYXZpZ2F0aW9uLFxuICAgICAgICBtYXhUYWJzOiBudW1iZXIsXG4gICAgICAgIHNvcnQ6IGJvb2xlYW4sXG4gICAgKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKCFyZWFkeShbbmF2aWdhdGlvbi50YWJzLCBuYXZpZ2F0aW9uLm1vZHVsZXMsIG5hdmlnYXRpb24uZ3JvdXBlZFRhYnNdKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5idWlsZEdyb3VwVGFiTWVudShuYXZpZ2F0aW9uLnRhYnMsIG5hdmlnYXRpb24ubW9kdWxlcywgbWF4VGFicywgbmF2aWdhdGlvbi5ncm91cGVkVGFicywgc29ydCk7XG4gICAgICAgIHRoaXMuYnVpbGRTZWxlY3RlZE1vZHVsZShuYXZpZ2F0aW9uKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCBzZWxlY3RlZCBtb2R1bGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBuYXZpZ2F0aW9uIGluZm9cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYnVpbGRTZWxlY3RlZE1vZHVsZShcbiAgICAgICAgbmF2aWdhdGlvbjogTmF2aWdhdGlvbixcbiAgICApOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbW9kdWxlID0gdGhpcy5hcHBTdGF0ZS5nZXRNb2R1bGUoKSA/PyAnJztcblxuICAgICAgICBpZiAobW9kdWxlID09PSAnJyB8fCBtb2R1bGUgPT09ICdob21lJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFuYXZpZ2F0aW9uLm1vZHVsZXNbbW9kdWxlXSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5idWlsZFRhYk1lbnVJdGVtKG1vZHVsZSwgbmF2aWdhdGlvbi5tb2R1bGVzW21vZHVsZV0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIHRhYiAvIG1vZHVsZSBtZW51XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1tdfSBpdGVtcyBsaXN0XG4gICAgICogQHBhcmFtIHtvYmplY3R9IG1vZHVsZXMgaW5mb1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aHJlc2hvbGQgbGltaXRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNvcnQgZmxhZ1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBidWlsZFRhYk1lbnUoXG4gICAgICAgIGl0ZW1zOiBzdHJpbmdbXSxcbiAgICAgICAgbW9kdWxlczogTmF2YmFyTW9kdWxlTWFwLFxuICAgICAgICB0aHJlc2hvbGQ6IG51bWJlcixcbiAgICAgICAgc29ydDogYm9vbGVhbixcbiAgICApOiB2b2lkIHtcblxuICAgICAgICBjb25zdCBuYXZJdGVtcyA9IFtdO1xuICAgICAgICBjb25zdCBtb3JlSXRlbXMgPSBbXTtcblxuICAgICAgICBpZiAoIWl0ZW1zIHx8IGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5tZW51ID0gbmF2SXRlbXM7XG4gICAgICAgICAgICB0aGlzLmFsbC5tb2R1bGVzID0gbW9yZUl0ZW1zO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgaXRlbXMuZm9yRWFjaCgobW9kdWxlOiBzdHJpbmcpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuYnVpbGRUYWJNZW51SXRlbShtb2R1bGUsIG1vZHVsZXNbbW9kdWxlXSk7XG5cbiAgICAgICAgICAgIGlmIChtb2R1bGUgPT09ICdob21lJyB8fCB0aGlzLmFwcFN0YXRlLmdldE1vZHVsZSgpID09PSBtb2R1bGUgfHwgY291bnQgPiB0aHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICBtb3JlSXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmF2SXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHNvcnQpIHtcbiAgICAgICAgICAgIHRoaXMuc29ydE1lbnVJdGVtcyhuYXZJdGVtcyk7XG4gICAgICAgICAgICB0aGlzLnNvcnRNZW51SXRlbXMobW9yZUl0ZW1zKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgdGhpcy5tZW51ID0gbmF2SXRlbXM7XG4gICAgICAgIHRoaXMuYWxsLm1vZHVsZXMgPSBtb3JlSXRlbXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGQgR3JvdXBlZCBUYWIgbWVudSBpdGVtXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kdWxlTGFiZWwgdG8gZGlzcGxheVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBncm91cGVkTW9kdWxlcyBsaXN0XG4gICAgICogQHBhcmFtIHtvYmplY3R9IG1vZHVsZXMgbGlzdFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gc29ydCBmbGFnXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBncm91cCB0YWIgbWVudSBpdGVtXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGJ1aWxkVGFiR3JvdXBlZE1lbnVJdGVtKFxuICAgICAgICBtb2R1bGVMYWJlbDogc3RyaW5nLFxuICAgICAgICBncm91cGVkTW9kdWxlczogYW55W10sXG4gICAgICAgIG1vZHVsZXM6IE5hdmJhck1vZHVsZU1hcCxcbiAgICAgICAgc29ydDogYm9vbGVhblxuICAgICk6IGFueSB7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxpbms6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogdGhpcy5sYW5ndWFnZS5nZXRBcHBTdHJpbmcobW9kdWxlTGFiZWwpIHx8IG1vZHVsZUxhYmVsLFxuICAgICAgICAgICAgICAgIHVybDogJycsXG4gICAgICAgICAgICAgICAgcm91dGU6IG51bGwsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiBudWxsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaWNvbjogJycsXG4gICAgICAgICAgICBzdWJtZW51OiB0aGlzLmJ1aWxkR3JvdXBlZE1lbnUoZ3JvdXBlZE1vZHVsZXMsIG1vZHVsZXMsIHNvcnQpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGQgR3JvdXBlZCBtZW51XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZ3JvdXBlZE1vZHVsZXMgaW5mb1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtb2R1bGVzIG1hcFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gc29ydCBmbGFnXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7W119IG1lbnUgaXRlbSBhcnJheVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBidWlsZEdyb3VwZWRNZW51KFxuICAgICAgICBncm91cGVkTW9kdWxlczogYW55W10sXG4gICAgICAgIG1vZHVsZXM6IE5hdmJhck1vZHVsZU1hcCxcbiAgICAgICAgc29ydDogYm9vbGVhblxuICAgICk6IE1lbnVJdGVtW10ge1xuXG4gICAgICAgIGNvbnN0IGdyb3VwZWRJdGVtcyA9IFtdO1xuICAgICAgICBsZXQgaG9tZU1lbnVJdGVtID0gbnVsbDtcblxuICAgICAgICBncm91cGVkTW9kdWxlcy5mb3JFYWNoKChncm91cGVkTW9kdWxlKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IG1vZHVsZSA9IG1vZHVsZXNbZ3JvdXBlZE1vZHVsZV07XG5cbiAgICAgICAgICAgIGlmICghbW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBtb2R1bGVNZW51SXRlbSA9IHRoaXMuYnVpbGRUYWJNZW51SXRlbShncm91cGVkTW9kdWxlLCBtb2R1bGUpO1xuXG4gICAgICAgICAgICBpZiAoZ3JvdXBlZE1vZHVsZSA9PT0gJ2hvbWUnKSB7XG4gICAgICAgICAgICAgICAgaG9tZU1lbnVJdGVtID0gbW9kdWxlTWVudUl0ZW07XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBncm91cGVkSXRlbXMucHVzaChtb2R1bGVNZW51SXRlbSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChzb3J0KSB7XG4gICAgICAgICAgICB0aGlzLnNvcnRNZW51SXRlbXMoZ3JvdXBlZEl0ZW1zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChob21lTWVudUl0ZW0pIHtcbiAgICAgICAgICAgIGdyb3VwZWRJdGVtcy51bnNoaWZ0KGhvbWVNZW51SXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ3JvdXBlZEl0ZW1zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIG1vZHVsZSBtZW51IGl0ZW1zXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kdWxlIG5hbWVcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbW9kdWxlSW5mbyBpbmZvXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBtZW51SXRlbVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBidWlsZFRhYk1lbnVJdGVtKFxuICAgICAgICBtb2R1bGU6IHN0cmluZyxcbiAgICAgICAgbW9kdWxlSW5mbzogTmF2YmFyTW9kdWxlLFxuICAgICk6IE1lbnVJdGVtIHtcbiAgICAgICAgaWYgKG1vZHVsZUluZm8ubmFtZSkge1xuICAgICAgICAgICAgbW9kdWxlID0gbW9kdWxlSW5mby5uYW1lO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1vZHVsZVJvdXRlID0gdGhpcy5tb2R1bGVOYXZpZ2F0aW9uLmdldE1vZHVsZVJvdXRlKG1vZHVsZUluZm8pO1xuICAgICAgICBjb25zdCBhcHBMaXN0U3RyaW5ncyA9IHRoaXMubGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VTdHJpbmdzKCk/LmFwcExpc3RTdHJpbmdzID8/IHt9O1xuICAgICAgICBjb25zdCBtZW51SXRlbTogTWVudUl0ZW0gPSB7XG4gICAgICAgICAgICBsaW5rOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IHRoaXMubW9kdWxlTmF2aWdhdGlvbi5nZXRNb2R1bGVMYWJlbChtb2R1bGVJbmZvLCBhcHBMaXN0U3RyaW5ncyksXG4gICAgICAgICAgICAgICAgdXJsOiBtb2R1bGVSb3V0ZS51cmwsXG4gICAgICAgICAgICAgICAgcm91dGU6IG1vZHVsZVJvdXRlLnJvdXRlLFxuICAgICAgICAgICAgICAgIHBhcmFtczogbnVsbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGljb246IHRoaXMubW9kdWxlTmFtZU1hcHBlci50b0xlZ2FjeShtb2R1bGUpID8/IG51bGwsXG4gICAgICAgICAgICBzdWJtZW51OiBbXSxcbiAgICAgICAgICAgIG1vZHVsZTogbW9kdWxlID8/IG51bGwsXG4gICAgICAgICAgICBpc0dyb3VwZWRNZW51OiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICBsZXQgaGFzU3VibWVudSA9IGZhbHNlO1xuICAgICAgICBpZiAobW9kdWxlSW5mbykge1xuICAgICAgICAgICAgbW9kdWxlSW5mby5tZW51LmZvckVhY2goKHN1Yk1lbnUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdWJsaW5rcyA9IHN1Yk1lbnUuc3VibGlua3MgfHwgW107XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ViTWVudUl0ZW0gPSB0aGlzLmJ1aWxkU3ViTWVudUl0ZW0obW9kdWxlLCBzdWJNZW51LCBzdWJsaW5rcyk7XG4gICAgICAgICAgICAgICAgbWVudUl0ZW0uc3VibWVudS5wdXNoKHN1Yk1lbnVJdGVtKTtcbiAgICAgICAgICAgICAgICBpZiAoc3VibGlua3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBoYXNTdWJtZW51ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBtZW51SXRlbS5pc0dyb3VwZWRNZW51ID0gaGFzU3VibWVudTtcbiAgICAgICAgcmV0dXJuIG1lbnVJdGVtO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBidWlsZFN1Yk1lbnVJdGVtKG1vZHVsZTogc3RyaW5nLCBzdWJNZW51OiBhbnksIHN1YmxpbmtzOiBhbnkpOiBNZW51SXRlbSB7XG4gICAgICAgIGNvbnN0IG1vZHVsZUFjdGlvblJvdXRlID0gdGhpcy5tb2R1bGVOYXZpZ2F0aW9uLmdldEFjdGlvblJvdXRlKHN1Yk1lbnUpO1xuICAgICAgICBjb25zdCBzdWJNZW51SXRlbTogTWVudUl0ZW0gPSB7XG4gICAgICAgICAgICBsaW5rOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IHRoaXMubW9kdWxlTmF2aWdhdGlvbi5nZXRBY3Rpb25MYWJlbChtb2R1bGUsIHN1Yk1lbnUsIHRoaXMubGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VTdHJpbmdzKCkpLFxuICAgICAgICAgICAgICAgIHVybDogbW9kdWxlQWN0aW9uUm91dGUudXJsLFxuICAgICAgICAgICAgICAgIHJvdXRlOiBtb2R1bGVBY3Rpb25Sb3V0ZS5yb3V0ZSxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IG1vZHVsZUFjdGlvblJvdXRlLnBhcmFtcyxcbiAgICAgICAgICAgICAgICBwcm9jZXNzOiBtb2R1bGVBY3Rpb25Sb3V0ZS5wcm9jZXNzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaWNvbjogc3ViTWVudS5pY29uIHx8ICcnLFxuICAgICAgICAgICAgc3VibWVudTogc3VibGlua3MubWFwKChpdGVtKSA9PiB0aGlzLmJ1aWxkU3ViTWVudUl0ZW0obW9kdWxlLCBpdGVtLCBbXSkpLFxuXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBzdWJNZW51SXRlbTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFNvcnQgbWVudSBpdGVtcyBieSBsYWJlbFxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG5hdkl0ZW1zIHRvIHNvcnRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgc29ydE1lbnVJdGVtcyhuYXZJdGVtczogYW55W10pOiB2b2lkIHtcbiAgICAgICAgbmF2SXRlbXMuc29ydCgoYTogTWVudUl0ZW0sIGI6IE1lbnVJdGVtKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IG5hbWVBID0gYS5saW5rLmxhYmVsLnRvVXBwZXJDYXNlKCk7IC8vIGlnbm9yZSB1cHBlciBhbmQgbG93ZXJjYXNlXG4gICAgICAgICAgICBjb25zdCBuYW1lQiA9IGIubGluay5sYWJlbC50b1VwcGVyQ2FzZSgpOyAvLyBpZ25vcmUgdXBwZXIgYW5kIGxvd2VyY2FzZVxuXG4gICAgICAgICAgICBpZiAobmFtZUEgPCBuYW1lQikge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuYW1lQSA+IG5hbWVCKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIG5hbWVzIG11c3QgYmUgZXF1YWxcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=