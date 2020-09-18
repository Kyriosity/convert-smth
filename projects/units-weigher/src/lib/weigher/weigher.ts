import { ULabel, ULabelFormats,  } from '../core/z_barrel'
import { parseUnitFormat, selectUnitLabel } from './utils'
import { Measureable } from '../core/z_barrel'
import { Unit } from '../core/units'

export interface IWeigher<M extends Measureable<Unit>> {
    convert(subj: M, to: Unit): M
    differ(subj: M, to: M): number

    parseUnit(unitName: string): Unit
    label(unit: Unit, input?: string, culture?: string): string
    rawLabel(unit: Unit): string
}

export abstract class Weigher<M extends Measureable<Unit>> implements IWeigher<M> {
    protected readonly unitLabels: ULabel<Unit>[];

    protected abstract recalc(subj: M, to: Unit): number 

    abstract rawLabel(unit: Unit): string

    protected create(u: Unit, val: number): M { return {unit: u, value: val} as M }

    convert(subj: M, to: Unit): M { return this.create(to, this.recalc(subj, to)) }

    differ(subj: M, to: M): number {
        this.convert(subj, to.unit)
        return subj.value - to.value
    }

    parseUnit(label: string): Unit {
        const entries = this.unitLabels?.filter(x => x.labels.includes(label))
        if (!entries || 0 == entries.length)
            return undefined;

        return entries[0].unit
    }

    label(unit: Unit, formatInput?: string, culture?: string): string {
        const parsedFormat = formatInput ? parseUnitFormat(formatInput) : ULabelFormats.short
        if (ULabelFormats.none == parsedFormat)
            return ''

        if (ULabelFormats.customCoded == parsedFormat)
            return formatInput

        return selectUnitLabel(this.unitLabels?.filter(x => x.unit == unit)[0]?.labels, parsedFormat)
    }
}