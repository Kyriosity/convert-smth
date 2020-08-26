
import { functional, ConversionFunc } from '../functional'
import { TemperatureUnits, } from '../../measurements/z_barrel'
import { temperature } from '../../measurements/z_barrel'

export class Temperature extends functional<temperature, TemperatureUnits> {
    create = (u: TemperatureUnits, v: number) =>  { return { unit: u, value: v} }
    rawUnitName = (unit: TemperatureUnits) => TemperatureUnits[unit]

    protected readonly funcs = [
        C2F, C2K,
        F2C, F2K, F2R,
        K2C, K2F,
        R2F, 
    ]

    protected readonly unitLabels = [
        { unit: TemperatureUnits.Celsius, labels: ['°C', 'C', 'Celcius'] },
        { unit: TemperatureUnits.Fahrenheit, labels: ['°F', 'F', 'Fahrenheit'] },
        { unit: TemperatureUnits.Kelvin, labels: ['K', 'K', 'Kelvin'] },
        { unit: TemperatureUnits.Rankine, labels: ['°R', 'R', 'Rankine'] },
    ];
}

//** Celsius to ... **//
const C2F: ConversionFunc<TemperatureUnits> = {
    of: TemperatureUnits.Celsius,
    to: TemperatureUnits.Fahrenheit,
    convert: (from: number) => (from / 5) * 9 + 32
}

const C2K: ConversionFunc<TemperatureUnits> = {
    of: TemperatureUnits.Celsius,
    to: TemperatureUnits.Kelvin,
    convert: (from: number) => from + 273.15
}


//** Fahrenheit to ... **//
const F2C: ConversionFunc<TemperatureUnits> = {
    of: TemperatureUnits.Fahrenheit,
    to: TemperatureUnits.Celsius,
    convert: (from: number) => ((from - 32) * 5) / 9
}

const F2K: ConversionFunc<TemperatureUnits> = {
    of: TemperatureUnits.Fahrenheit,
    to: TemperatureUnits.Kelvin,
    convert: (from: number) => ( + 459.67) * (5/9)
}

const F2R: ConversionFunc<TemperatureUnits> = {
    of: TemperatureUnits.Fahrenheit,
    to: TemperatureUnits.Rankine,
    convert: (from: number) => from - 459.67
}

//** Kelvin to ... **//
const K2C: ConversionFunc<TemperatureUnits> = {
    of: TemperatureUnits.Kelvin,
    to: TemperatureUnits.Celsius,
    convert: (from: number) => from - 273.15
}

const K2F: ConversionFunc<TemperatureUnits> = {
    of: TemperatureUnits.Kelvin,
    to: TemperatureUnits.Fahrenheit,
    convert: (from: number) => from * 9/5 - 459.67
}

//** Rankin to Fahrenheit **//
const R2F: ConversionFunc<TemperatureUnits> = {
    of: TemperatureUnits.Rankine,
    to: TemperatureUnits.Fahrenheit,
    convert: (from: number) => from + 459.67
}