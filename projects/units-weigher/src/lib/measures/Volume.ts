
import { volume, VolumeUnits } from '../definitions/volumes';
import { TabledMeasure } from './_TabledMeasure';

export class Volume extends TabledMeasure<volume, VolumeUnits> {
    protected rawUnitName = (unit: VolumeUnits) => { return VolumeUnits[unit]}

    // protected unitLabels = [
    //     { unit: VolumeUnits.litre, labels: ['ltr', 'liter'] },
    //     { unit: VolumeUnits.cubicMetre, labels: ['m3', 'cubic meter'] },

    //     { unit: VolumeUnits.usGallon, labels: ['gal', 'US gallon'] },
    //     { unit: VolumeUnits.imperialGallon, labels: ['Imp. gal', 'imperial gallon'] },

    //     { unit: VolumeUnits.cubicFoot, labels: ['cu ft', 'cubic foot'] },
    // ];
}