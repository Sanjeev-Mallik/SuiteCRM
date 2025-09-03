import { Process, ProcessService } from "../../process.service";
import { Observable } from "rxjs";
import * as i0 from "@angular/core";
export declare class GenerateBackupCodes {
    protected processService: ProcessService;
    backupCodes: any;
    constructor(processService: ProcessService);
    /**
     * Generate Backup Codes
     */
    generate(): Observable<Process>;
    static ɵfac: i0.ɵɵFactoryDeclaration<GenerateBackupCodes, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<GenerateBackupCodes>;
}
