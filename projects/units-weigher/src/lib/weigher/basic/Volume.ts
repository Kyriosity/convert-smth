import { volume } from '../../core/z_barrel'
import { linear } from '../linear'
import { Volumes } from '../../core/units'

export class Volume extends linear<volume> {
    rawLabel = (unit: Volumes) => { return Volumes[unit]}

    protected unitLabels = [
        { unit: Volumes.litre, labels: ['lt', 'liter'] },
        { unit: Volumes.cubicMetre, labels: ['m3', 'cu m', 'cubic meter'] },

        { unit: Volumes.usGallon, labels: ['gal', 'US gallon'] },
        { unit: Volumes.imperialGallon, labels: ['Imp. gal', 'imperial gallon'] },

        { unit: Volumes.cubicFoot, labels: ['ft3', 'cu ft', 'cubic foot'] },
    ];
}

