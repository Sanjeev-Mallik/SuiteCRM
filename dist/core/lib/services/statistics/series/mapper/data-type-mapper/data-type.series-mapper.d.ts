import { DataTypeUnitConverter } from '../../../../unit-converters/data-type.unit-converter.service';
import { SeriesVisitor } from '../series-traverser.service';
import { DataItem } from '../../../../../common/containers/chart/chart.model';
import { ObjectMap } from '../../../../../common/types/object-map';
import { DataTypeFormatter } from '../../../../formatters/data-type.formatter.service';
import * as i0 from "@angular/core";
export declare class DataTypeSeriesMapper implements SeriesVisitor {
    protected converter: DataTypeUnitConverter;
    protected formatter: DataTypeFormatter;
    constructor(converter: DataTypeUnitConverter, formatter: DataTypeFormatter);
    visit(item: DataItem, options?: ObjectMap): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DataTypeSeriesMapper, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DataTypeSeriesMapper>;
}
