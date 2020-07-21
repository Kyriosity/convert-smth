import { UVal, Unit, RatiosList } from '../cors/uval';
import { UWeigher } from './iWeigher';

export abstract class linear<V extends UVal<U>, U extends Unit<number>> extends UWeigher<V, U> {
    protected readonly unitSystems: RatiosList<U>[];
    protected readonly crossRatios: RatiosList<U>[];

    factor(of: U, to: U): number {
        if (of === to)
            return 1;

        let ratio = this.searchSameSysRatio(of, to);

        if (!ratio) {
            const fromBaseUnit = this.findBase(of);
            const toBaseUnit = this.findBase(to);

            ratio = !fromBaseUnit || !toBaseUnit ? NaN : this.searchCrossSysRatio(of, to);
        }

        return ratio;
    }

    private findBase(unit: U): U {
        const entries = this.unitSystems?.filter(x => { const vals = x.map(r => r.unit); return vals.includes(unit) })

        const res = !entries || 1 !== entries.length ? null : entries[0].filter(x => x.isBase)[0].unit
        return res
    }

    protected searchSameSysRatio(from: U, to: U): number {
        return this.findRatio(from, to, this.unitSystems)
    };

    protected searchCrossSysRatio(from: U, to: U): number {
        return this.findRatio(from, to, this.crossRatios)
    };

    protected findRatio(from: U, to: U, ratios: RatiosList<U>[]) {
        const entries = ratios?.filter(x => {
            const vals = x.map(r => r.unit);
            vals.includes(from) && vals.includes(to)
        });

        if (!entries || 0 == entries!.length)
            return NaN;

        const ratioFrom = entries[0].filter(x => x.unit = from)[0].ratio;
        const ratioTo = entries[0].filter(x => x.unit = to)[0].ratio;

        return ratioFrom / ratioTo;
    };
}