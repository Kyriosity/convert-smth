import { ULabelFormats } from '../cornerstones/.barrel';

export function parseUnitFormat(formatParam: string): ULabelFormats {
    const defaultFormat = ULabelFormats.short;

    if (!formatParam)
        return defaultFormat;

    const trimmedParam = formatParam.trim().toLowerCase();

    if ('none' == trimmedParam || '-' == trimmedParam)
        return ULabelFormats.none
    if ('default' == trimmedParam)
        return defaultFormat;
    if ("cypher" == trimmedParam)
        return ULabelFormats.cypher
    if ('short' == trimmedParam)
        return ULabelFormats.short;
    if ('full' == trimmedParam)
        return ULabelFormats.full;

    return ULabelFormats.customCoded;
}