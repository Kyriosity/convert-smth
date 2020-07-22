import { ULabelFormats } from '../cors/z_barrel';

export function parseUnitFormat(formatParam: string): ULabelFormats {
    const defaultFormat = ULabelFormats.short;

    if (!formatParam)
        return defaultFormat;

    const trimmedParam = formatParam.trim().toLowerCase();

    if ('unit-default' == trimmedParam)
        return defaultFormat;
    if ('unit-none' == trimmedParam || '-' == trimmedParam)
        return ULabelFormats.none
    if ("unit-code" == trimmedParam)
        return ULabelFormats.code
    if ('unit-short' == trimmedParam)
        return ULabelFormats.short;
    if ('unit-full' == trimmedParam)
        return ULabelFormats.full;

    return ULabelFormats.customCoded;
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