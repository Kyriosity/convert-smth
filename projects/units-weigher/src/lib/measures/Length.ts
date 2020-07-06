import { length, LengthUnits } from '../definitions/lengths';
import { TabledMeasure } from './_TabledMeasure';
import { DecimalRatios } from '../cornerstones/.barrel';

export class Length extends TabledMeasure<length, LengthUnits> {
    protected rawUnitName = (unit: LengthUnits) => { return LengthUnits[unit]}

    protected readonly unitLabels = [
        { unit: LengthUnits.picometre,  labels: ['', 'pm', 'picometer'] },
        { unit: LengthUnits.nanometre,  labels: ['', 'nm', 'nanometer'] },
        { unit: LengthUnits.micrometre,  labels: ['', 'mcm', 'micrometer'] },
        { unit: LengthUnits.millimetre,  labels: ['', 'mm', 'millimeter'] },
        { unit: LengthUnits.decimetre,  labels: ['', 'dc', 'decimeter'] },
        { unit: LengthUnits.centimetre,  labels: ['', 'cm', 'centimeter'] },
        { unit: LengthUnits.metre,  labels: ['', 'm', 'meter'] },
        { unit: LengthUnits.hectometre,  labels: ['', 'hm', 'hectometer'] },
        { unit: LengthUnits.kilometre,  labels: ['', 'km', 'kilometer'] },
        { unit: LengthUnits.megametre,  labels: ['', 'mgm', 'megameter'] },
        { unit: LengthUnits.gigametre,  labels: ['', 'gm', 'gigameter'] },
        { unit: LengthUnits.terametre,  labels: ['', 'tm', 'teraometer'] },

        { unit: LengthUnits.foot, labels: ['ft.', 'foot'] },
        { unit: LengthUnits.foot, labels: ['in', 'inch'] },

        { unit: LengthUnits.nauticalMile, labels: ['', 'nmi', 'nautical mile'] },
        { unit: LengthUnits.mile, labels: ['', 'mi', 'mile'] },
    ];
    
}

// export const metricLengthRatios: ratio[] = [
//     { val: LengthUnits.picometre, ratio: DecimalRatios.pico },
//     { val: LengthUnits.nanometre, ratio: DecimalRatios.nano },
//     { val: LengthUnits.micrometre, ratio: DecimalRatios.micro },
//     { val: LengthUnits.millimetre, ratio: DecimalRatios.milli },
//     { val: LengthUnits.decimetre, ratio: DecimalRatios.deci },
//     { val: LengthUnits.centimetre, ratio: DecimalRatios.centi },
//     { val: LengthUnits.metre, ratio: DecimalRatios.BASE },
//     { val: LengthUnits.decametre, ratio: DecimalRatios.deca },
//     { val: LengthUnits.hectometre, ratio: DecimalRatios.hecto },
//     { val: LengthUnits.kilometre, ratio: DecimalRatios.kilo },
//     { val: LengthUnits.megametre, ratio: DecimalRatios.mega },
//     { val: LengthUnits.gigametre, ratio: DecimalRatios.giga },
//     { val: LengthUnits.terametre, ratio: DecimalRatios.tera },

//     { val: LengthUnits.nauticalMile, ratio: 1852 }
// ];

// export const feetBasedRatios: ratio[] = [
//     { val: LengthUnits.thou, ratio: 1 / 12 * 1000 },
//     { val: LengthUnits.inch, ratio: 1 / 12 },
//     { val: LengthUnits.foot, ratio: 1 },
//     { val: LengthUnits.yard, ratio: 3 },
//     { val: LengthUnits.chain, ratio: 66 },
//     { val: LengthUnits.furlong, ratio: 660 },
//     { val: LengthUnits.mile, ratio: 5280 },
//     { val: LengthUnits.league, ratio: 3 * 15840 },
// ];

// export const crossRatios = [
//     { factor: 3.28084, units: [LengthUnits.metre, LengthUnits.foot] },
// ]