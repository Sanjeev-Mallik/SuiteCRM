import { DataTypeFormatter } from '../../../../services/formatters/data-type.formatter.service';
import { BaseEnumComponent } from '../../../base/base-enum.component';
import { Option } from '../../../../common/record/field.model';
import { LanguageListStringMap, LanguageStore } from '../../../../store/language/language.store';
import { UntypedFormGroup } from '@angular/forms';
import { FieldLogicManager } from '../../../field-logic/field-logic.manager';
import { FieldLogicDisplayManager } from '../../../field-logic-display/field-logic-display.manager';
import * as i0 from "@angular/core";
export declare class RadioEnumEditFieldComponent extends BaseEnumComponent {
    protected languages: LanguageStore;
    protected typeFormatter: DataTypeFormatter;
    protected logic: FieldLogicManager;
    protected logicDisplay: FieldLogicDisplayManager;
    formGroup: UntypedFormGroup;
    constructor(languages: LanguageStore, typeFormatter: DataTypeFormatter, logic: FieldLogicManager, logicDisplay: FieldLogicDisplayManager);
    get displayDirection(): string;
    ngOnInit(): void;
    getId(item: Option): string;
    protected buildOptionsArray(appStrings: LanguageListStringMap): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RadioEnumEditFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RadioEnumEditFieldComponent, "scrm-radioenum-edit", never, {}, {}, never, never, false, never>;
}
