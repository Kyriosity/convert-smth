import { rational } from '../../tools/convert/rational'
import { Volumes } from '../../_core/units'


export class Volume extends rational<Volumes> {
    rawLabel = (unit: Volumes) => { return Volumes[unit]}

    protected unitLabels = [
        { unit: Volumes.litre, labels: ['lt', 'liter'] },
        { unit: Volumes.cubicMetre, labels: ['m3', 'cu m', 'cubic meter'] },

        { unit: Volumes.usGallon, labels: ['gal', 'US gallon'] },
        { unit: Volumes.imperialGallon, labels: ['imp gal', 'imperial gallon'] },

        { unit: Volumes.cubicFoot, labels: ['ft3', 'cu ft', 'cubic foot'] },
    ];
}

