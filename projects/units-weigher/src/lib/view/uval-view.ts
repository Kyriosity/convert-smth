
import { UVal } from '../cors/z_barrel';
import { gen } from '../weigher/gen';
import { uFatQuestion, uWarn, PresentationParams, formatValueCustom, uQuestion } from './utils';

export class UValView {
    private weighers: gen;

    constructor(private _locale?: string) {
        this.weighers = new gen();
    }

    transform(uval: UVal<number>, params: PresentationParams): string {
        if (!uval)
            return '';

        const formattedValue = params.DecimalFormatApplies || params.CultureApplies ?
            formatValueCustom(uval.val, params, this._locale)
            : uval.val.toLocaleString();

        const weigher = this.weighers.for(uval);
        if (!weigher)
            return `${formattedValue}${uFatQuestion}`;

        if (params.ConvertApplies) {
            const toUnit = weigher.parseUnit(params.ConvertTo);
            if (!toUnit)
                return `${uval.unit}->${uFatQuestion} ${params.ConvertTo}`;

            const initLabel = 'ff';
            weigher.convert(uval, toUnit);
            if (!uval || !uval.val)
                return `${uWarn} ${initLabel} -> ${params.ConvertTo}`;
        }

        const label = weigher.nameUnit(uval.unit, params.UnitDisplay) ?? `${uQuestion}${weigher.rawUnitName(uval.unit)}${uQuestion}`;
        return `${formattedValue} ${label}`;
    }
}

