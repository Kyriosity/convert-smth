import { UValErr } from './errors';

export abstract class Unit<T extends number> { }

export abstract class UVal<U extends Unit<number>> {
    constructor(public Unit: U, val?: number) {
        this._v = val;
    }

    abstract get NonNegative(): boolean;

    protected _v?: number;
    public get Val() { return this._v };
    public set Val(val: number) {
        if (this.NonNegative && 0 > val)
            throw new UValErr(`value in this Measure cannot be negative`); // KD, ToDo: replace measure with class name
        this._v = val;
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
