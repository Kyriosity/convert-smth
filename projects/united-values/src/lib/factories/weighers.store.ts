import { IWeigher } from '../weigher/weigher'
import { Quantified } from '../_core/quantified'
import { Unit } from '../_core/units'

export class weighersStore {
    private weighers: { kind: string, weigher: IWeigher<Quantified<Unit>> }[] = []

    for<M extends Quantified<Unit>>(uval: M): IWeigher<Quantified<Unit>> {
        const weigherKind = uval.constructor.name

        if (0 < this.weighers.filter(x => x.kind === weigherKind).length)
            return this.weighers.filter(x => x.kind === weigherKind)[0].weigher

        const issued = this.issue(weigherKind)
        this.weighers.push({ kind: weigherKind, weigher: issued })
        return issued
    }

    private issue(kind: string): IWeigher<Quantified<Unit>> {
        return null
        // if ('mass' === kind)
        //     return new Mass()
        // if ('len' === kind)
        //     return new Length()
        // if ('speed' === kind)
        //     return new Speed()
        // if ('volume' === kind)
        //     return new Volume()
        // if ('force' === kind)
        //     return new Force()
        // if ('temperature' === kind)
        //     return new Temperature()

        // throw new UValErr(`${kind} forgotten`) // KD, ToDo: better text
    }
}