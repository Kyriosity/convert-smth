import { Unit } from '../_core/units'
import { IArithmetic, IConvert, Quantified } from '../_core/quantified'
import { Converter } from '../tools/_convert/_converter'

export class UValue<U extends Unit> implements Quantified<U>, IConvert<U>, IArithmetic<U> {
    readonly unit: U
    constructor(unit: U, public value: number) { this.unit = unit }

    protected readonly converter: Converter<U>

    to(unit?: U): UValue<U> {
        if (!unit)
            unit = this.unit
        const newVal = this.converter.eval(this, unit)
        return new UValue(unit, newVal)
    }
    add(uval: Quantified<U>): void {
        // ToDo: convert
        this.value += uval.value
    }
    subtract(uval: Quantified<U>): void {
        this.value -= uval.value
    }
    plus(uval: Quantified<U>): Quantified<U> {
        throw new Error('Method not implemented.');
    }
    minus(uval: Quantified<U>): Quantified<U> {
        throw new Error('Method not implemented.');
    }
}
