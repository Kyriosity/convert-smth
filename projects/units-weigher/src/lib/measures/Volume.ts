
import { volume, VolumeUnits } from '../definitions/volumes';
import { TabledMeasure } from './_TabledMeasure';

export class Volume extends TabledMeasure<volume, VolumeUnits> {
    protected rawUnitName = (unit: VolumeUnits) => { return VolumeUnits[unit]}

    protected unitLabels = [
        { unit: VolumeUnits.litre, labels: ['lt', 'liter'] },
        { unit: VolumeUnits.cubicMetre, labels: ['m3', 'cu m', 'cubic meter'] },

        { unit: VolumeUnits.usGallon, labels: ['gal', 'US gallon'] },
        { unit: VolumeUnits.imperialGallon, labels: ['Imp. gal', 'imperial gallon'] },

        { unit: VolumeUnits.cubicFoot, labels: ['ft3', 'cu ft', 'cubic foot'] },
    ];
}