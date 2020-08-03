
import { UVal } from '../cors/z_barrel';
import { gen } from '../weigher/gen';
import { uFatQuestion, uWarn, PresentationParams, formatCustom, uQuestion } from './utils';

export class UValView {
    #weighers: gen;

    constructor(private _locale?: string) {
        this.#weighers = new gen();
    }

    transform(uval: UVal<number>, params: PresentationParams): string {
        if (!uval)
            return '';

        const weigher = this.#weighers.for(uval);
        if (!weigher)
            return `${uval.val}${uFatQuestion}`;

        if (params.ConvertApplies) {
            const toUnit = weigher.parseUnit(params.ConvertTo);
            if (!toUnit)
                return `${uval.unit}->${uFatQuestion} ${params.ConvertTo}`;

            const initLabel = weigher.nameUnit(uval.unit) ?? weigher.rawUnitName(uval.unit);
            weigher.convert(uval, toUnit);
            if (!uval || !uval.val)
                return `${uWarn} ${initLabel} -> ${params.ConvertTo}`;
        }

        const fVal = params.DecimalFormatApplies || params.CultureApplies
            ? formatCustom(uval.val, params, this._locale)
            : uval.val.toLocaleString();

        const label = weigher.nameUnit(uval.unit, params.UnitDisplay) ?? `${uQuestion}${weigher.rawUnitName(uval.unit)}${uQuestion}`;
        return `${fVal} ${label}`;
    }
}