import { Unit } from '../core/units'
import { Measureable } from '../core/z_barrel'
import { weighersStore } from '../factories/weighersStore'
import { uFatQuestion, uWarn, PresentationParams, formatCustom, uQuestion } from './utils'

export class MeasureView {
    #weighers: weighersStore

    constructor(private _locale?: string) {
        this.#weighers = new weighersStore()
    }

    transform(uval: Measureable<Unit>, params: PresentationParams): string {
        if (!uval)
            return ''

        const weigher = this.#weighers.for(uval)
        if (!weigher)
            return `${uval.value}${uFatQuestion}`

        if (params.ConvertApplies) {
            const toUnit = weigher.parseUnit(params.ConvertTo);
            if (!toUnit)
                return `${uval.unit}->${uFatQuestion} ${params.ConvertTo}`

            const initLabel = weigher.label(uval.unit) ?? weigher.rawLabel(uval.unit)
            uval = weigher.convert(uval, toUnit);
            if (!uval || !uval.value)
                return `${uWarn} ${initLabel} -> ${params.ConvertTo}`
        }

        const fVal = params.DecimalFormatApplies || params.CultureApplies
            ? formatCustom(uval.value, params, this._locale)
            : uval.value.toLocaleString()

        const label = weigher.label(uval.unit, params.UnitDisplay) ?? `${uQuestion}${weigher.rawLabel(uval.unit)}${uQuestion}`
        return `${fVal} ${label}`
    }
}