import { Weigher } from './weigher'
import { Measureable } from '../core/z_barrel'
import { Unit } from '../core/units'

export abstract class functional<M extends Measureable<Unit>> extends Weigher<M> {
    protected readonly funcs: ConversionFunc<Unit>[] = []

    protected recalc(uval: M, to: Unit): number {
        if (uval.unit === to)
            return 1

        const directConversions = this.funcs.filter(x => x.of === uval.unit && x.to === to)

        if (directConversions && directConversions.length != 0)
            return directConversions[0].convert(uval.value)

        // if none lookup the shortest chain of funcs
        throw new Error(`not implemented`)
    }
 }

export interface ConversionFunc<Unit> {
    of: Unit
    to: Unit
    convert: (from: number) => number
}

