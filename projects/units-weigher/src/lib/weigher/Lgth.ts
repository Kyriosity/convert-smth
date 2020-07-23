import { lgth, LengthUnits } from '../def/z_barrel';
import { linear } from './linear'
import { DecimalRatios } from '../cors/z_barrel';

export class Lgth extends linear<lgth, LengthUnits> {
    rawUnitName = (unit: LengthUnits) => { return LengthUnits[unit] }

    protected readonly unitLabels = [
        { unit: LengthUnits.picometre, labels: ['', 'pm', 'picometer'] },
        { unit: LengthUnits.nanometre, labels: ['', 'nm', 'nanometer'] },
        { unit: LengthUnits.micrometre, labels: ['', 'mcm', 'micrometer'] },
        { unit: LengthUnits.millimetre, labels: ['', 'mm', 'millimeter'] },
        { unit: LengthUnits.decimetre, labels: ['', 'dc', 'decimeter'] },
        { unit: LengthUnits.centimetre, labels: ['', 'cm', 'centimeter'] },
        { unit: LengthUnits.metre, labels: ['', 'm', 'meter'] },
        { unit: LengthUnits.hectometre, labels: ['', 'hm', 'hectometer'] },
        { unit: LengthUnits.kilometre, labels: ['', 'km', 'kilometer'] },
        { unit: LengthUnits.megametre, labels: ['', 'mgm', 'megameter'] },
        { unit: LengthUnits.gigametre, labels: ['', 'gm', 'gigameter'] },
        { unit: LengthUnits.terametre, labels: ['', 'tm', 'teraometer'] },

        // { unit: LengthUnits.foot, labels: ['ft.', 'foot'] },
        { unit: LengthUnits.inch, labels: ['in', 'inch'] },

        { unit: LengthUnits.nauticalMile, labels: ['', 'nmi', 'nautical mile'] },
        { unit: LengthUnits.mile, labels: ['', 'mi', 'mile'] },
    ];

    protected readonly unitSystems = [metric, feetBased]
    protected readonly crossRatios = [toMeter]

}

const metric = [
    { unit: LengthUnits.picometre, ratio: DecimalRatios.pico },
    { unit: LengthUnits.nanometre, ratio: DecimalRatios.nano },
    { unit: LengthUnits.micrometre, ratio: DecimalRatios.micro },
    { unit: LengthUnits.millimetre, ratio: DecimalRatios.milli },
    { unit: LengthUnits.decimetre, ratio: DecimalRatios.deci },
    { unit: LengthUnits.centimetre, ratio: DecimalRatios.centi },
    { unit: LengthUnits.metre, ratio: DecimalRatios.BASE, isBase: true },
    { unit: LengthUnits.decametre, ratio: DecimalRatios.deca },
    { unit: LengthUnits.hectometre, ratio: DecimalRatios.hecto },
    { unit: LengthUnits.kilometre, ratio: DecimalRatios.kilo },
    { unit: LengthUnits.megametre, ratio: DecimalRatios.mega },
    { unit: LengthUnits.gigametre, ratio: DecimalRatios.giga },
    { unit: LengthUnits.terametre, ratio: DecimalRatios.tera },
];

const feetBased = [
    { unit: LengthUnits.thou, ratio: 1 / 12 * 1000 },
    { unit: LengthUnits.inch, ratio: 1 / 12 },
    { unit: LengthUnits.foot, ratio: 1, isBase: true },
    { unit: LengthUnits.yard, ratio: 3 },
    { unit: LengthUnits.chain, ratio: 66 },
    { unit: LengthUnits.furlong, ratio: 660 },
    { unit: LengthUnits.mile, ratio: 5280 },
    { unit: LengthUnits.league, ratio: 3 * 15840 },
];

const toMeter = [
    { unit: LengthUnits.metre, ratio: 1, isBase: true },
    { unit: LengthUnits.foot, ratio: 1 / 3.28084 },
    { unit: LengthUnits.nauticalMile, ratio: 1852 }
]