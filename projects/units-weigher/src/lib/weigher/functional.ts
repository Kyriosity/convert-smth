import { Unit, UVal } from '../cors/uval';
import { UWeigher } from './iWeigher';

export abstract class functional<V extends UVal<U>, U extends Unit<number>> extends UWeigher<V, U> {
    factor(of: U, to: U): number {
        if (of === to)
            return 1

        // look for direct convert function
        // if none lookup the shortest chain of funcs
        throw new Error(`not implemented`)
    }
}