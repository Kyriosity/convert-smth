import { ListOfRatios,  } from '../core/z_barrel'
import { Weigher } from './weigher'
import { Measureable } from '../core/z_barrel'
import { Unit } from '../core/units'

export abstract class linear<M extends Measureable<Unit>> extends Weigher<M> {
    protected readonly unitSystems: ListOfRatios<Unit>[]
    protected readonly crossRatios: ListOfRatios<Unit>[]

    protected recalc = (uval: M, to: Unit) => uval.value * this.factor(uval.unit, to)

    protected factor(of: Unit, to: Unit): number {
        if (of === to)
            return 1

        let ratio = this.findSameSysRatio(of, to);

        if (!ratio) {
            ratio = this.findCrossSysRatio(of, to)

            if (!ratio) {
                const ofBase = this.findBaseUnit(of);
                const toBase = this.findBaseUnit(to);

                const baseCrossratio = this.findCrossSysRatio(ofBase, toBase);
                if (baseCrossratio) {
                    const ofRatio = this.findSameSysRatio(of, ofBase)
                    const toRatio = this.findSameSysRatio(to, toBase)

                    ratio = !ofRatio || !toRatio ? undefined :
                        ofRatio * baseCrossratio / toRatio // KD, ToDo: here a challenge - optimise to avoid 'camel' jumps that will harm precision
                }
            }
        }
        return ratio;
    }

    private findBaseUnit(unit: Unit): Unit {
        const entries = this.unitSystems?.filter(x => { const vals = x.map(r => r.unit); return vals.includes(unit) })

        const res = !entries || 1 !== entries.length ? null : entries[0].filter(x => x.isBase)[0].unit
        return res
    }

    protected findSameSysRatio(of: Unit, to: Unit): number {
        return this.findRatio(of, to, this.unitSystems)
    };

    protected findCrossSysRatio(from: Unit, to: Unit): number {
        return this.findRatio(from, to, this.crossRatios)
    };

    protected findRatio(of: Unit, to: Unit, ratios: ListOfRatios<Unit>[]) {
        if (!of || !to)
            return undefined

        const entries = ratios?.filter(x => {
            const units = x.map(r => r.unit)
            return units.includes(of) && units.includes(to)
        });

        if (!entries || 0 == entries!.length)
            return undefined

        const entry = entries[0]
        const ofFactor = entry.filter(x => x.unit == of)[0].ratio
        const toFactor = entry.filter(x => x.unit == to)[0].ratio

        return ofFactor / toFactor
    }
}