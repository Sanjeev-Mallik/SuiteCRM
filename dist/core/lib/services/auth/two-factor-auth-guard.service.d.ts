import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import * as i0 from "@angular/core";
export declare class TwoFactorAuthGuard {
    private authService;
    constructor(authService: AuthService);
    canActivate(route: ActivatedRouteSnapshot, snapshot: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
    static ɵfac: i0.ɵɵFactoryDeclaration<TwoFactorAuthGuard, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TwoFactorAuthGuard>;
}
