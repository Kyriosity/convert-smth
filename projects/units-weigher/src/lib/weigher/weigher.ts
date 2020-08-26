import { Unit, ULabel, ULabelFormats, Measureable } from '../core/z_barrel';
import { parseUnitFormat, selectUnitLabel } from './utils';

// interface IIWeigher {
//     convert(that, to): void
//     differ(of, to): number

//     parseUnit(unitName: string)
//     nameUnit(uval, input?: string, culture?: string): string
//     rawUnitName(unit): string
// }

export interface IWeigher<M extends Measureable<U>, U extends Unit<number>> { // extends IIWeigher {
    convert(m: M, to: U): void
    differ(of: M, to: M): number

    parseUnit(unitName: string): U
    nameUnit(uval: U, input?: string, culture?: string): string
    rawUnitName(unit: U): string
}

export abstract class Weigher<M extends Measureable<U>, U extends Unit<number>> implements IWeigher<M, U> {
    protected readonly unitLabels: ULabel<U>[];

    protected abstract converted(uval: M, to: U)

    abstract rawUnitName(unit: U): string

    protected create(u: U, v: number): M { return {unit: u, value: v} as M }

    convert(m: M, to: U): void {
        m = this.create(to, this.converted(m, to))
    }

    differ(of: M, to: M): number {
        this.convert(of, to.unit);
        return of.value - to.value;
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