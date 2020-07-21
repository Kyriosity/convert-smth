import { UVal } from '../cors/barrel';

export class tmprt extends UVal<TemperatureUnits> {
    get NonNegative() { return false }
}

export enum TemperatureUnits { 
    Kelvin,
    Celsius,
    Fahrenheit,
    Rankine
}

function of(unit: number, val: number) { return new tmprt(unit, val) }

export var kelvin = (val: number) => of(TemperatureUnits.Kelvin, val)
export var celsius = (val: number) => of(TemperatureUnits.Celsius, val)
export var fahrenheit = (val: number) => of(TemperatureUnits.Fahrenheit, val)
export var rankine = (val: number) => of (TemperatureUnits.Rankine, val)

export const Kelvin = kelvin(NaN).Unit
export const Celsius = celsius(NaN).Unit
export const Fahrenheit = fahrenheit(NaN).Unit
export const Rankine = rankine(NaN).Unit