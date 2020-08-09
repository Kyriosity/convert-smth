import { UVal } from '../cors/z_barrel';

export class temperature extends UVal<TemperatureUnits> {
    get nonNegative(): boolean {
        if (!this.unit)
            return undefined
        return TemperatureUnits.Rankine === this.unit || TemperatureUnits.Kelvin === this.unit
    }
}

export enum TemperatureUnits {
    Kelvin = 1,
    Celsius = 2,
    Fahrenheit = 3,
    Rankine = 4,
}

function of(unit: number, val: number) { return new temperature(unit, val) }

export var kelvin = (val: number) => of(TemperatureUnits.Kelvin, val)
export var celsius = (val: number) => of(TemperatureUnits.Celsius, val)
export var fahrenheit = (val: number) => of(TemperatureUnits.Fahrenheit, val)
export var rankine = (val: number) => of(TemperatureUnits.Rankine, val)

export const Kelvin = kelvin(NaN).unit
export const Celsius = celsius(NaN).unit
export const Fahrenheit = fahrenheit(NaN).unit
export const Rankine = rankine(NaN).unit