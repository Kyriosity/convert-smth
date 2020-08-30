import { weighersStore } from '../factories/weighersStore';
import { uFatQuestion, uWarn, PresentationParams, formatCustom, uQuestion } from './utils';
import { Measureable } from '../core/z_barrel';
import { Unit } from '../core/units';

export class MeasureView {
    #weighers: weighersStore;

    constructor(private _locale?: string) {
        this.#weighers = new weighersStore();
    }

    transform(uval: Measureable<Unit>, params: PresentationParams): string {
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
            uval = weigher.convert(uval, toUnit);
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