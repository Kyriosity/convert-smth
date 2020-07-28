import { ForceUnits, frc } from '../../def/z_barrel'
import { linear } from '../linear'

export class Force extends linear<frc, ForceUnits> {
    rawUnitName = (unit: ForceUnits) => { return ForceUnits[unit] }

    protected readonly unitLabels = [
        { unit: ForceUnits.Newton, labels: ['N', 'Newton'] },
        { unit: ForceUnits.kiloNewton, labels: ['kN', 'kiloNewton'] },
        { unit: ForceUnits.kilogrammmeforce, labels: ['kgf', 'kilogram force'] },

        { unit: ForceUnits.poundforce, labels: ['pound', 'pound force'] },

        { unit: ForceUnits.dyne, labels: ['d.', 'dyne'] },
    ]
}