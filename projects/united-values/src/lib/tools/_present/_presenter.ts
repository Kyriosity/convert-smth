import { Unit } from '../../_core/units';
import { uLabel, uLabelFormats } from './label';

export interface IPresenter<U extends Unit> {
    parseUnit(unitName: string): Unit
    label(unit: U, input?: string, culture?: string): string
    rawLabel(unit: U): string
}

export abstract class Presenter<U extends Unit> implements IPresenter<U>{
    abstract rawLabel(unit: U): string 
    
    protected readonly unitLabels: uLabel<Unit>[]

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

export function parseUnitFormat(formatParam: string): uLabelFormats {
    const defaultFormat = uLabelFormats.short

    if (!formatParam)
        return defaultFormat

    const trimmedParam = formatParam.trim().toLowerCase()

    if ('unit-default' == trimmedParam)
        return defaultFormat
    if ('unit-none' == trimmedParam || '-' == trimmedParam)
        return uLabelFormats.none
    if ("unit-code" == trimmedParam)
        return uLabelFormats.symb
    if ('unit-short' == trimmedParam)
        return uLabelFormats.short
    if ('unit-full' == trimmedParam)
        return uLabelFormats.full

    return uLabelFormats.customCoded
}

export function selectUnitLabel(labels: string[], index: number): string {
    const oneLabelForAllFormats = 1
    const codedLabelMissing = 2

    if (!labels || 0 === labels.length)
        return null

    if (oneLabelForAllFormats === labels.length)
        return labels[0]

    if (codedLabelMissing == labels.length && 0 !=- index)
        index--

    return labels[index]
}