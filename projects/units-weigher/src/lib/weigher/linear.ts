import { Unit, UVal, RatiosList } from '../cors/uval';
import { UWeigher } from './iWeigher';

export abstract class linear<V extends UVal<U>, U extends Unit<number>> extends UWeigher<V, U> {
    protected readonly unitSystems: RatiosList<U>[];
    protected readonly crossRatios: RatiosList<U>[];

    factor(of: U, to: U): number {
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

    private findBaseUnit(unit: U): U {
        const entries = this.unitSystems?.filter(x => { const vals = x.map(r => r.unit); return vals.includes(unit) })

        const res = !entries || 1 !== entries.length ? null : entries[0].filter(x => x.isBase)[0].unit
        return res
    }

    protected findSameSysRatio(of: U, to: U): number {
        return this.findRatio(of, to, this.unitSystems)
    };

    protected findCrossSysRatio(from: U, to: U): number {
        return this.findRatio(from, to, this.crossRatios)
    };

    protected findRatio(of: U, to: U, ratios: RatiosList<U>[]) {
        if (!of || !to)
            return undefined

        const entries = ratios?.filter(x => {
            const units = x.map(r => r.unit)
            return units.includes(of) && units.includes(to)
        });

        if (!entries || 0 == entries!.length)
            return undefined

        const entry = entries[0];
        const ofFactor = entry.filter(x => x.unit == of)[0].ratio;
        const toFactor = entry.filter(x => x.unit == to)[0].ratio;

        const ratio = ofFactor / toFactor;
        return ratio;
    };
}