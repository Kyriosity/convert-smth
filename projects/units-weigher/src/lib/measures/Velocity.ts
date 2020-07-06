import { velocity, VelocityUnits } from '../definitions/velocities';
import { TabledMeasure } from './_TabledMeasure';

export class Velocity extends TabledMeasure<velocity, VelocityUnits> {
    protected rawUnitName = (unit: VelocityUnits) => { return VelocityUnits[unit]}

    protected readonly unitLabels = [
        { unit: VelocityUnits.metresPerSecond, labels: ['m/s', 'meters per second'] },
        { unit: VelocityUnits.kilometrePerHour, labels: ['km/h', 'kilometers per hour'] },
        { unit: VelocityUnits.knot, labels: ['kt', 'knots'] },
        { unit: VelocityUnits.Mach, labels: ['M', 'Mach'] },
        { unit: VelocityUnits.milesPerHour, labels: ['mi/h', 'miles per hour'] },
        { unit: VelocityUnits.footPerSecond, labels: ['ft/s', 'foot per second'] },
        { unit: VelocityUnits.inchPerSecond, labels: ['in/s', 'inch per second'] },
    ]
}