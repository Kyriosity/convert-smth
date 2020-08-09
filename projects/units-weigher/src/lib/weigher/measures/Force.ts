import { ForceUnits, force } from '../../def/z_barrel'
import { linear } from '../linear'

export class Force extends linear<force, ForceUnits> {
    rawUnitName = (unit: ForceUnits) => ForceUnits[unit]

    protected readonly unitLabels = [
        { unit: ForceUnits.Newton, labels: ['N', 'Newton'] },
        { unit: ForceUnits.kiloNewton, labels: ['kN', 'kiloNewton'] },
        { unit: ForceUnits.kilogrammmeforce, labels: ['kgf', 'kilogram force'] },

        { unit: ForceUnits.poundforce, labels: ['pound', 'pound force'] },

        { unit: ForceUnits.dyne, labels: ['d.', 'dyne'] },
    ]
}