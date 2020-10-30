import { Quantified } from '../../_core/quantified'
import { Unit } from '../../_core/units'
import { Converter } from './_converter'

export interface IConvertFunc<Unit> {
    of: Unit
    to: Unit
    convert: (from: number) => number
}

export abstract class functional<U extends Unit> extends Converter<U> {
    protected readonly funcs: IConvertFunc<Unit>[] = []

    factor(of: Quantified<U>, to: U): number {
        if (of.unit === to)
            return 1

        const directConversions = this.funcs.filter(x => x.of === of.unit && x.to === to)

        if (directConversions && directConversions.length != 0)
            return 1; // directConversions[0].convert(uval.value)

        // if none lookup the shortest chain of funcs
        throw new Error(`not implemented`)
    }
}