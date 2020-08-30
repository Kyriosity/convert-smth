

export enum ULabelFormats {
    none = -2,
    customCoded = -1,

    code = 0,
    short = 1,
    full = 2,
}

export interface ULabel<Unit> {
    unit: Unit,
    labels: string[]
}

export interface Ratio<Unit> {
    unit: Unit,
    ratio: number,
    isBase?: boolean;
}

export interface ListOfRatios<Unit> extends Array<Ratio<Unit>> { }

export enum DecimalRatios {
    pico = 10 ** -12,
    nano = 10 ** -9,
    micro = 10 ** -6,
    milli = 0.001,
    centi = 0.01,
    deci = 0.1,
    BASE = 1,
    deca = 10,
    hecto = 100,
    kilo = 1000,
    mega = 10 ** 6,
    giga = 10 ** 9,
    tera = 10 ** 12,
}
