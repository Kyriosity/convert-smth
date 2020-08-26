import { Unit, Measureable } from '../core/z_barrel';
import { Weigher } from './weigher';

export abstract class functional<M extends Measureable<U>, U extends Unit<number>> extends Weigher<M, U> {
    protected readonly funcs: ConversionFunc<U>[] = []

    protected converted(m: M, to: U): number {
        if (m.unit === to)
            return 1

        const directConversions = this.funcs.filter(x => x.of === m.unit && x.to === to)

        if (directConversions && directConversions.length != 0)
            return directConversions[0].convert(m.value)

        // if none lookup the shortest chain of funcs
        throw new Error(`not implemented`)
    }
}

export interface ConversionFunc<U extends Unit<number>> {
    of: U
    to: U
    convert: (from: number) => number
}

