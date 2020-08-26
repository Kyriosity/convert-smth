import { Measureable } from '../core/z_barrel';
import { weigher } from '../weigher/factory';
import { uFatQuestion, uWarn, PresentationParams, formatCustom, uQuestion } from './utils';

export class MeasureView {
    #weighers: weigher;

    constructor(private _locale?: string) {
        this.#weighers = new weigher();
    }

    transform(uval: Measureable<number>, params: PresentationParams): string {
        if (!uval)
            return '';

        const weigher = this.#weighers.for(uval);
        if (!weigher)
            return `${uval.value}${uFatQuestion}`;

        if (params.ConvertApplies) {
            const toUnit = weigher.parseUnit(params.ConvertTo);
            if (!toUnit)
                return `${uval.unit}->${uFatQuestion} ${params.ConvertTo}`;

            const initLabel = weigher.nameUnit(uval.unit) ?? weigher.rawUnitName(uval.unit);
            weigher.convert(uval, toUnit);
            if (!uval || !uval.value)
                return `${uWarn} ${initLabel} -> ${params.ConvertTo}`;
        }

        const fVal = params.DecimalFormatApplies || params.CultureApplies
            ? formatCustom(uval.value, params, this._locale)
            : uval.value.toLocaleString();

        const label = weigher.nameUnit(uval.unit, params.UnitDisplay) ?? `${uQuestion}${weigher.rawUnitName(uval.unit)}${uQuestion}`;
        return `${fVal} ${label}`;
    }
}