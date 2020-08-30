import { ULabel, ULabelFormats,  } from '../core/z_barrel';
import { parseUnitFormat, selectUnitLabel } from './utils';
import { Measureable } from '../core/z_barrel';
import { Unit } from '../core/units';

export interface IWeigher<M extends Measureable<Unit>> { // extends IIWeigher {
    convert(of: M, to: Unit): M
    differ(of: M, to: M): number

    parseUnit(unitName: string): Unit
    nameUnit(unit: Unit, input?: string, culture?: string): string
    rawUnitName(unit: Unit): string
}

export abstract class Weigher<M extends Measureable<Unit>> implements IWeigher<M> {
    protected readonly unitLabels: ULabel<Unit>[];

    protected abstract recalc(of: M, to: Unit): number 

    abstract rawUnitName(unit: Unit): string

    protected create(u: Unit, v: number): M { return {unit: u, value: v} as M }

    convert(uval: M, to: Unit): M { return this.create(to, this.recalc(uval, to)) }

    differ(of: M, to: M): number {
        this.convert(of, to.unit);
        return of.value - to.value;
    }

    parseUnit(label: string): Unit {
        const entries = this.unitLabels?.filter(x => x.labels.includes(label));
        if (!entries || 0 == entries.length)
            return undefined;

        return entries[0].unit;
    }

    nameUnit(of: Unit, formatInput?: string, culture?: string): string {
        const parsedFormat = formatInput ? parseUnitFormat(formatInput) : ULabelFormats.short
        if (ULabelFormats.none == parsedFormat)
            return ''

        if (ULabelFormats.customCoded == parsedFormat)
            return formatInput

        return selectUnitLabel(this.unitLabels?.filter(x => x.unit == of)[0]?.labels, parsedFormat)
    }
}