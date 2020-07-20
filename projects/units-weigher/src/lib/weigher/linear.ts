import { UVal, Unit, RatiosList } from '../cors/uval';
import { UWeigher } from './iWeigher';

export abstract class linear<V extends UVal<U>, U extends Unit<number>> extends UWeigher<V, U> {
    protected readonly unitSystems: RatiosList<U>[];
    protected readonly crossRatios: RatiosList<U>[];

    factor(from: U, to: U): number {
        const theSame = 1;
        if (from === to)
            return theSame;

        let ratio = this.searchSameSysRatio(from, to);

        if (!ratio) {
            let fromBaseUnit = this.findBase(from);
            let toBaseUnit = this.findBase(to);

            ratio = !fromBaseUnit || !toBaseUnit ? NaN : this.searchCrossSysRatio(from, to);
        }

        return ratio;
    }

    private findBase(unit: U): U {
        const entries = this.unitSystems?.filter(x => { let vals = x.map(r => r.unit); vals.includes(unit) });

        return !entries || 0 === entries.length ? null : entries[0].filter(x => x.isBase)[0].unit;
    }

    protected searchSameSysRatio(from: U, to: U): number {
        return this.findRatio(from, to, this.unitSystems)
    };

    protected searchCrossSysRatio(from: U, to: U): number {
        return this.findRatio(from, to, this.crossRatios)
    };

    protected findRatio(from: U, to: U, ratios: RatiosList<U>[]) {
        let entries = ratios?.filter(x => {
            let vals = x.map(r => r.unit);
            vals.includes(from) && vals.includes(to)
        });

        if (!entries || 0 == entries!.length)
            return NaN;

        let ratioFrom = entries[0].filter(x => x.unit = from)[0].ratio;
        let ratioTo = entries[0].filter(x => x.unit = to)[0].ratio;

        return ratioFrom / ratioTo;
    };
}