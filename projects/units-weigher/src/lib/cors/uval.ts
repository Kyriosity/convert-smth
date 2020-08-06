import { UValErr } from './errors';

export abstract class Unit<T extends number> { }

export abstract class UVal<U extends Unit<number>> {
    constructor(public unit: U, v?: number) {
        this.#val = v
    }

    abstract get nonNegative(): boolean;

    #val?: number;
    public get val() { return this.#val };
    public set val(val: number) {
        if (this.nonNegative && 0 > val)
            throw new UValErr(`${this.constructor.toString}: value can't be negative here`)
            
        this.#val = val
    };
}

export enum ULabelFormats {
    none = -2,
    customCoded = -1,

    code = 0,
    short = 1,
    full = 2,
}

export interface ULabel<U extends Unit<number>> {
    unit: U,
    labels: string[]
}

export interface Ratio<U extends Unit<number>> {
    unit: U,
    ratio: number,
    isBase?: boolean;
}

export interface RatiosList<U extends Unit<number>> extends Array<Ratio<U>> { }

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
