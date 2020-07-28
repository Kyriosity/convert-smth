import { VolumeUnits, vol } from '../../def/z_barrel';
import { linear } from '../linear';

export class Vol extends linear<vol, VolumeUnits> {
    rawUnitName = (unit: VolumeUnits) => { return VolumeUnits[unit]}

    protected unitLabels = [
        { unit: VolumeUnits.litre, labels: ['lt', 'liter'] },
        { unit: VolumeUnits.cubicMetre, labels: ['m3', 'cu m', 'cubic meter'] },

        { unit: VolumeUnits.usGallon, labels: ['gal', 'US gallon'] },
        { unit: VolumeUnits.imperialGallon, labels: ['Imp. gal', 'imperial gallon'] },

        { unit: VolumeUnits.cubicFoot, labels: ['ft3', 'cu ft', 'cubic foot'] },
    ];
}