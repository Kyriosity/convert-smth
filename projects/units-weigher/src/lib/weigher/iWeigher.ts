import { UVal, Unit, ULabel, ULabelFormats } from '../cors/z_barrel';
import { parseUnitFormat, selectUnitLabel } from './utils';

export interface IWeigher {
    convert(that, to): void
    differ(of, to): number

    parseUnit(unitName: string)
    nameUnit(uval, input?: string, culture?: string): string
}

interface Weigher<V extends UVal<U>, U extends Unit<number>> extends IWeigher {
    convert(that: V, to: U): void
    differ(of: V, to: V): number

    parseUnit(unitName: string): U
    nameUnit(uval: U, input?: string, culture?: string): string
}

export abstract class UWeigher<V extends UVal<U>, U extends Unit<number>> implements Weigher<V, U> {
    protected readonly unitLabels: ULabel<U>[];

    protected abstract factor(of: U, to: U): number;
    protected abstract rawUnitName(unit: U): string;

    convert(that: V, to: U): void {
        that.val *= this.factor(that.unit, to);
        that.unit = to;
    }

    differ(of: V, to: V): number {
        this.convert(of, to.unit);
        return of.val - to.val;
    }

    parseUnit(label: string): U {
        const entries = this.unitLabels?.filter(x => x.labels.includes(label));
        if (!entries || 0 == entries.length)
            return undefined;

        return entries[0].unit;
    }

    nameUnit(of: U, formatInput?: string, culture?: string): string {
        const parsedFormat = formatInput ? parseUnitFormat(formatInput) : ULabelFormats.short
        if (ULabelFormats.none == parsedFormat)
            return ''

        if (ULabelFormats.customCoded == parsedFormat)
            return formatInput

        return selectUnitLabel(this.unitLabels?.filter(x => x.unit == of)[0]?.labels, parsedFormat)        
    }
}


