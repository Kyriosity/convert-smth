import { Unit } from '../../_core/units'
import { Quantified } from '../../_core/quantified'

export abstract class Converter<U extends Unit> {
    factor(of: Quantified<U>, to: U): number {
        if (of.unit === to)
            return 1

        throw new Error('Method not implemented')
    }
}