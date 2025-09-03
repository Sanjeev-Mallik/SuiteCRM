import { ViewContext } from '../../common/views/view.model';
import { WidgetMetadata } from '../../common/metadata/widget.metadata';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class BaseWidgetComponent {
    config: WidgetMetadata;
    context: ViewContext;
    context$: Observable<ViewContext>;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BaseWidgetComponent, "ng-component", never, { "config": { "alias": "config"; "required": false; }; "context": { "alias": "context"; "required": false; }; "context$": { "alias": "context$"; "required": false; }; }, {}, never, never, false, never>;
}
