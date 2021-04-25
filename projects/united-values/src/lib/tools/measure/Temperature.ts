import { Temperatures } from '../../_core/units';
import { IConvertFunc } from '../_convert/functional';
import { rational } from '../_convert/rational';

export class Temperature extends rational<Temperatures> {
    protected readonly funcs = [
        C2F, C2K,
        F2C, F2K, F2R,
        K2C, K2F,
        R2F, 
    ]
}

//** Celsius to ... **//
const C2F: IConvertFunc<Temperatures> = {
    of: Temperatures.Celsius,
    to: Temperatures.Fahrenheit,
    convert: (from: number) => (from / 5) * 9 + 32
}

const C2K: IConvertFunc<Temperatures> = {
    of: Temperatures.Celsius,
    to: Temperatures.Kelvin,
    convert: (from: number) => from + 273.15
}

//** Fahrenheit to ... **//
const F2C: IConvertFunc<Temperatures> = {
    of: Temperatures.Fahrenheit,
    to: Temperatures.Celsius,
    convert: (from: number) => ((from - 32) * 5) / 9
}

const F2K: IConvertFunc<Temperatures> = {
    of: Temperatures.Fahrenheit,
    to: Temperatures.Kelvin,
    convert: (from: number) => ( + 459.67) * (5/9)
}

const F2R: IConvertFunc<Temperatures> = {
    of: Temperatures.Fahrenheit,
    to: Temperatures.Rankine,
    convert: (from: number) => from - 459.67
}

//** Kelvin to ... **//
const K2C: IConvertFunc<Temperatures> = {
    of: Temperatures.Kelvin,
    to: Temperatures.Celsius,
    convert: (from: number) => from - 273.15
}

const K2F: IConvertFunc<Temperatures> = {
    of: Temperatures.Kelvin,
    to: Temperatures.Fahrenheit,
    convert: (from: number) => from * 9/5 - 459.67
}

//** Rankin to Fahrenheit **//
const R2F: IConvertFunc<Temperatures> = {
    of: Temperatures.Rankine,
    to: Temperatures.Fahrenheit,
    convert: (from: number) => from + 459.67
}