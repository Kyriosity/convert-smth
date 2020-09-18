import { linear } from '../linear'
import { force } from '../../core/z_barrel'
import { Forces } from '../../core/units'

export class Force extends linear<force> {
    rawLabel = (unit: Forces) => Forces[unit]

    protected readonly unitLabels = [
        { unit: Forces.Newton, labels: ['N', 'Newton'] },
        { unit: Forces.kiloNewton, labels: ['kN', 'kiloNewton'] },
        { unit: Forces.kilogrammmeforce, labels: ['kgf', 'kilogram force'] },

        { unit: Forces.poundforce, labels: ['pound', 'pound force'] },

        { unit: Forces.dyne, labels: ['d.', 'dyne'] },
    ]
}