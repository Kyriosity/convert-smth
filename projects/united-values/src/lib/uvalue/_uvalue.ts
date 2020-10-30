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
        return new UValue(unit, this.converter.eval(this, unit))
    }

    add(seized: Quantified<U>): void {
        this.value += this.converter.eval(seized, this.unit)
    }
    subtract(seized: Quantified<U>): void {
        this.value -= this.converter.eval(seized, this.unit)
    }
    plus(term: Quantified<U>): Quantified<U> {
        return new UValue(this.unit, this.value + 
            this.converter.eval(term, this.unit))
    }
    minus(term: Quantified<U>): Quantified<U> {
        return new UValue(this.unit, this.value - 
            this.converter.eval(term, this.unit))
    }
}
