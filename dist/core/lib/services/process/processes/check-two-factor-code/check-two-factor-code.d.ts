import { Process, ProcessService } from "../../process.service";
import { Observable } from "rxjs";
import * as i0 from "@angular/core";
export declare class CheckTwoFactorCode {
    protected processService: ProcessService;
    constructor(processService: ProcessService);
    /**
     * Check Auth Code
     */
    checkCode(auth_code: any): Observable<Process>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CheckTwoFactorCode, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CheckTwoFactorCode>;
}
