import { Unit } from '../../_core/units'
import { Quantified } from '../../_core/quantified'

export interface IConverter<U extends Unit> {
    factor(of: Quantified<U>, to: U)
    eval(of: Quantified<U>, to: U)
}

export abstract class Converter<U extends Unit> implements IConverter<U> {
    factor(of: Quantified<U>, to: U): number {
        if (of.unit === to)
            return 1

        throw new Error('Method not implemented')
    }

    eval = (of: Quantified<U>, to: U) => of.unit === to ? of.value :
        of.value * this.factor(of, to)
}