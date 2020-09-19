import { UValErr, Measureable, Measurement } from '../core/z_barrel'
import { Unit } from '../core/units'
import { Distance, Mass, Velocity, Volume, Force, Temperature, IWeigher } from '../weigher/z_barrel'

export class weighersStore {
    private weighers: { kind: Measurement, weigher: IWeigher<Measureable<Unit>> }[] = []

    for<M extends Measureable<Unit>>(uval: M): IWeigher<Measureable<Unit>> {
        const weigherKind = uval.kind

        if (0 < this.weighers.filter(x => x.kind === weigherKind).length)
            return this.weighers.filter(x => x.kind === weigherKind)[0].weigher

        const issued = this.issue(weigherKind)
        this.weighers.push({ kind: weigherKind, weigher: issued })
        return issued
    }

    private issue(kind: Measurement): IWeigher<Measureable<Unit>> {
        if (Measurement.Mass === kind)
            return new Mass()
        if (Measurement.Distance === kind)
            return new Distance()
        if (Measurement.Velocity === kind)
            return new Velocity()
        if (Measurement.Volume === kind)
            return new Volume()
        if (Measurement.Force === kind)
            return new Force()
        if (Measurement.Temperature === kind)
            return new Temperature()

        throw new UValErr(`${kind} forgotten`)
    }
}