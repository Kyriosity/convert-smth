import { linear } from '../linear'
import { velocity } from '../../core/z_barrel'
import { Velocities } from '../../core/units'

export class Velocity extends linear<velocity> {
    rawLabel = (unit: Velocities) => Velocities[unit]

    protected readonly unitLabels = [
        { unit: Velocities.metresPerSecond, labels: ['m/s', 'meters per second'] },
        { unit: Velocities.kilometrePerHour, labels: ['km/h', 'kilometers per hour'] },
        { unit: Velocities.knot, labels: ['kt', 'knots'] },
        { unit: Velocities.Mach, labels: ['M', 'Mach'] },
        { unit: Velocities.milesPerHour, labels: ['mi/h', 'miles per hour'] },
        { unit: Velocities.footPerSecond, labels: ['ft/s', 'foot per second'] },
        { unit: Velocities.inchPerSecond, labels: ['in/s', 'inch per second'] },
    ]

    protected readonly crossRatios = [relativeMach]
}

//// * relative while Mach is sound speed, which is dependent on altitude and other conditions *
const relativeMach = [
    { unit: Velocities.Mach, ratio: 1, isBase: true },

    { unit: Velocities.metresPerSecond, ratio: 1/343 },
    { unit: Velocities.kilometrePerHour, ratio: 1/1234.8 },

    { unit: Velocities.knot, ratio: 1/666.739 },
    { unit: Velocities.milesPerHour, ratio: 1/767.269 },
]