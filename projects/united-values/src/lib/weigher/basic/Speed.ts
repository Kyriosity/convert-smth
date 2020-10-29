import { rational } from '../../tools/convert/rational'
import { Speeds } from '../../_core/units'

export class Speed extends rational<Speeds> {
    rawLabel = (unit: Speeds) => Speeds[unit]

    protected readonly unitLabels = [
        { unit: Speeds.metresPerSecond, labels: ['m/s', 'meters per second'] },
        { unit: Speeds.kilometrePerHour, labels: ['km/h', 'kilometers per hour'] },
        { unit: Speeds.knot, labels: ['kt', 'knots'] },
        { unit: Speeds.Mach, labels: ['M', 'Mach'] },
        { unit: Speeds.milesPerHour, labels: ['mi/h', 'miles per hour'] },
        { unit: Speeds.footPerSecond, labels: ['ft/s', 'foot per second'] },
        { unit: Speeds.inchPerSecond, labels: ['in/s', 'inch per second'] },
    ]

    protected readonly crossRatios = [relativeMach]
}

//// * relative while Mach is sound speed, which is dependent on altitude and other conditions *
const relativeMach = [
    { unit: Speeds.Mach, ratio: 1, isBase: true },

    { unit: Speeds.metresPerSecond, ratio: 1/343 },
    { unit: Speeds.kilometrePerHour, ratio: 1/1234.8 },

    { unit: Speeds.knot, ratio: 1/666.739 },
    { unit: Speeds.milesPerHour, ratio: 1/767.269 },
]