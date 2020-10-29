import { Unit } from '../../_core/units'
import { Quantified } from '../../_core/quantified'
import { Converter } from './_converter'
import { ListOfRatios } from './_ratio'

export abstract class rational<U extends Unit> extends Converter<U> {
    protected readonly unitSystems: ListOfRatios<Unit>[]
    protected readonly crossRatios: ListOfRatios<Unit>[]

    factor(of: Quantified<U>, to: Unit): number {
        if (of.unit === to)
            return 1

        let ratio = this.findSameSysRatio(of.unit, to)

        if (!ratio) {
            ratio = this.findCrossSysRatio(of.unit, to)

            if (!ratio) {
                const ofBase = this.findBaseUnit(of.unit)
                const toBase = this.findBaseUnit(to)

                const baseCrossratio = this.findCrossSysRatio(ofBase, toBase)
                if (baseCrossratio) {
                    const ofRatio = this.findSameSysRatio(of.unit, ofBase)
                    const toRatio = this.findSameSysRatio(to, toBase)

                    ratio = !ofRatio || !toRatio ? undefined :
                        ofRatio * baseCrossratio / toRatio // KD, ToDo: here a challenge - optimise to avoid 'camel' jumps that will harm precision
                }
            }
        }
        return ratio
    }

    private findBaseUnit(unit: Unit): Unit {
        const entries = this.unitSystems?.filter(
            x => { const vals = x.map(r => r.unit); return vals.includes(unit) })

        const res = !entries || 1 !== entries.length ?
            null : entries[0].filter(x => x.isBase)[0].unit
        return res
    }

    protected findSameSysRatio(of: Unit, to: Unit): number {
        return this.findRatio(of, to, this.unitSystems)
    }

    protected findCrossSysRatio(from: Unit, to: Unit): number {
        return this.findRatio(from, to, this.crossRatios)
    }

    protected findRatio(of: Unit, to: Unit, ratios: ListOfRatios<Unit>[]) {
        if (!of || !to)
            return undefined

        const entries = ratios?.filter(x => {
            const units = x.map(r => r.unit)
            return units.includes(of) && units.includes(to)
        })

        if (!entries || 0 == entries!.length)
            return undefined

        const entry = entries[0]
        const ofFactor = entry.filter(x => x.unit == of)[0].ratio
        const toFactor = entry.filter(x => x.unit == to)[0].ratio

        return ofFactor / toFactor
    }
}