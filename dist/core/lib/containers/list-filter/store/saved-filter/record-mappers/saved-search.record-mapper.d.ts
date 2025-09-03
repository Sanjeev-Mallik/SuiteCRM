import { Record } from '../../../../../common/record/record.model';
import { RecordMapper } from '../../../../../common/record/record-mappers/record-mapper.model';
import * as i0 from "@angular/core";
export declare class SavedSearchRecordMapper implements RecordMapper {
    getKey(): string;
    map(record: Record): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SavedSearchRecordMapper, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SavedSearchRecordMapper>;
}
