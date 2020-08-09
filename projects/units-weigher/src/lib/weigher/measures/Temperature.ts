import { TemperatureUnits, temperature } from '../../def/z_barrel'
import { functional } from '../functional'

export class Temperature extends functional<temperature, TemperatureUnits> {
    rawUnitName = (unit: TemperatureUnits) => TemperatureUnits[unit] 
    
    protected readonly unitLabels = [
        { unit: TemperatureUnits.Celsius, labels: ['°C', 'C', 'Celcius'] },
        { unit: TemperatureUnits.Fahrenheit, labels: ['°F', 'F', 'Fahrenheit'] },
        { unit: TemperatureUnits.Kelvin, labels: ['K', 'K', 'Kelvin'] },
        { unit: TemperatureUnits.Rankine, labels: ['°R', 'R', 'Rankine'] },
    ];


}