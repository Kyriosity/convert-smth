import { force, ForceUnits } from '../definitions/forces';
import { TabledMeasure } from './_TabledMeasure';

export class Force extends TabledMeasure<force, ForceUnits> {
    protected rawUnitName = (unit: ForceUnits) => { return ForceUnits[unit] }

    protected readonly unitLabels = [
        { unit: ForceUnits.Newton, labels: ['N', 'Newton'] },
        { unit: ForceUnits.kiloNewton, labels: ['kN', 'kiloNewton'] },
        { unit: ForceUnits.kilogrammmeforce, labels: ['kgf', 'kilogram force'] },

        { unit: ForceUnits.poundforce, labels: ['pound', 'pound force'] },

        { unit: ForceUnits.dyne, labels: ['d.', 'dyne'] },
    ]
}