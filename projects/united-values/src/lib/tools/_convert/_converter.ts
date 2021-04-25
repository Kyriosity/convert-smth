import { Unit } from '../../_core/units'
import { Quantified } from '../../_core/quantified'

export interface IConverter<U extends Unit> {
    factor(of: Quantified<U>, to: U)
    eval(of: Quantified<U>, to: U)
}

export abstract class Converter<U extends Unit> implements IConverter<U> {
    abstract factor(of: Quantified<U>, to: U): number

    eval = (of: Quantified<U>, to: U) => of.unit === to ? of.value :
        of.value * this.factor(of, to)
}