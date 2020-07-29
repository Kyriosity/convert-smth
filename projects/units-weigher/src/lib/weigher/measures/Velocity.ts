import { VelocityUnits, velocity } from '../../def/z_barrel'
import { linear } from '../linear'

export class Velocity extends linear<velocity, VelocityUnits> {
    rawUnitName = (unit: VelocityUnits) => { return VelocityUnits[unit] }

    protected readonly unitLabels = [
        { unit: VelocityUnits.metresPerSecond, labels: ['m/s', 'meters per second'] },
        { unit: VelocityUnits.kilometrePerHour, labels: ['km/h', 'kilometers per hour'] },
        { unit: VelocityUnits.knot, labels: ['kt', 'knots'] },
        { unit: VelocityUnits.Mach, labels: ['M', 'Mach'] },
        { unit: VelocityUnits.milesPerHour, labels: ['mi/h', 'miles per hour'] },
        { unit: VelocityUnits.footPerSecond, labels: ['ft/s', 'foot per second'] },
        { unit: VelocityUnits.inchPerSecond, labels: ['in/s', 'inch per second'] },
    ]

    protected readonly crossRatios = [relativeMach]
}

//// * relative while Mach is sound speed, which is dependent on altitude and other conditions *
const relativeMach = [
    { unit: VelocityUnits.Mach, ratio: 1, isBase: true },

    { unit: VelocityUnits.metresPerSecond, ratio: 1/343 },
    { unit: VelocityUnits.kilometrePerHour, ratio: 1/1234.8 },

    { unit: VelocityUnits.knot, ratio: 1/666.739 },
    { unit: VelocityUnits.milesPerHour, ratio: 1/767.269 },
]