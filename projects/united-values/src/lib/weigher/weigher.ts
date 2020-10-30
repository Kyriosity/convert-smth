import { Unit } from '../_core/units'
import { Quantified } from '../_core/quantified'
import { parseUnitFormat, selectUnitLabel } from './utils'
import { uLabelFormats, uLabel } from '../tools/_present/label'

export interface IWeigher<M extends Quantified<Unit>> {
    convert(subj: M, to: Unit): M
    differ(subj: M, to: M): number

    parseUnit(unitName: string): Unit
    label(unit: Unit, input?: string, culture?: string): string
    rawLabel(unit: Unit): string
}

export abstract class Weigher<M extends Quantified<Unit>> implements IWeigher<M> {
    protected readonly unitLabels: uLabel<Unit>[]

    protected abstract recalc(subj: M, to: Unit): number
    abstract rawLabel(unit: Unit): string

    protected readonly create = (u: Unit, val: number) => ({ unit: u, value: val } as M)

    readonly convert = (subj: M, to: Unit) => this.create(to, this.recalc(subj, to))

    readonly differ = (subj: M, to: M) => this.convert(subj, to.unit).value - to.value

    readonly parseUnit = (label: string) => {
        const entries = this.unitLabels?.filter(x => x.labels.includes(label))
        if (!entries || 0 == entries.length)
            return undefined;

        return entries[0].unit
    }

    readonly label = (unit: Unit, formatInput?: string, culture?: string) => {
        const parsedFormat = formatInput ? parseUnitFormat(formatInput) : uLabelFormats.short
        if (uLabelFormats.none == parsedFormat)
            return ''

        if (uLabelFormats.customCoded == parsedFormat)
            return formatInput

        return selectUnitLabel(this.unitLabels?.filter(x => x.unit == unit)[0]?.labels, parsedFormat)
    }
}