import { BaseActionManager } from '../../services/actions/base-action-manager.service';
import { PanelLogicActionData } from './panel-logic.action';
import { Action, ActionContext } from '../../common/actions/action.model';
import { Field } from '../../common/record/field.model';
import { Panel } from '../../common/metadata/metadata.model';
import { Record } from '../../common/record/record.model';
import { ViewMode } from '../../common/views/view.model';
import { PanelLogicDisplayTypeAction } from './display-type/panel-logic-display-type-action.service';
import * as i0 from "@angular/core";
export declare class PanelLogicManager extends BaseActionManager<PanelLogicActionData> {
    constructor(displayType: PanelLogicDisplayTypeAction);
    /**
     * Run logic for the given field
     * @param {string} logicType
     * @param {object} field
     * @param {object} panel
     * @param {object} record
     * @param {object} mode
     */
    runLogic(logicType: string, field: Field, panel: Panel, record: Record, mode: ViewMode): boolean;
    protected buildActionData(action: Action, context?: ActionContext): PanelLogicActionData;
    static ɵfac: i0.ɵɵFactoryDeclaration<PanelLogicManager, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PanelLogicManager>;
}
