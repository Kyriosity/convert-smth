import { ULabelFormats } from '../cornerstones/.barrel';

export function parseUnitFormat(formatParam: string): ULabelFormats {
    const defaultFormat = ULabelFormats.short;

    if (!formatParam)
        return defaultFormat;

    const trimmedParam = formatParam.trim().toLowerCase();

    if ('unit-none' == trimmedParam || '-' == trimmedParam)
        return ULabelFormats.none
    if ('unit-default' == trimmedParam)
        return defaultFormat;
    if ("unit-code" == trimmedParam)
        return ULabelFormats.code
    if ('unit-short' == trimmedParam)
        return ULabelFormats.short;
    if ('unit-full' == trimmedParam)
        return ULabelFormats.full;

    return ULabelFormats.customCoded;
}