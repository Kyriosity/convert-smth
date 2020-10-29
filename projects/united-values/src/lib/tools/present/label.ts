export enum uLabelFormats {
    none = -2,
    customCoded = -1,

    symb = 0,
    abbr = 1,
    short = 2,
    full = 3,
}

export interface uvLabel<Unit> {
    unit: Unit,
    labels: string[]
}

