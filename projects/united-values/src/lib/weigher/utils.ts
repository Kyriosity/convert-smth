import { uLabelFormats } from '../tools/_present/label'

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