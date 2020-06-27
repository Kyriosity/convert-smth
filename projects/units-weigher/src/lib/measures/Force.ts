import { force, ForceUnits } from '../definitions/forces';
import { TabledMeasure } from './_TabledMeasure';

export class Force extends TabledMeasure<force, ForceUnits> {
    protected rawUnitName = (unit: ForceUnits) => { return ForceUnits[unit]}
}