import { linear } from '../linear'
import { DecimalRatios } from '../../core/z_barrel'
import { distance } from '../../core/z_barrel'
import { Distances } from '../../core/units'

export class Distance extends linear<distance> {
    rawUnitName = (unit: Distances) => Distances[unit]

    protected readonly unitLabels = [
        { unit: Distances.picometre, labels: ['', 'pm', 'picometer'] },
        { unit: Distances.nanometre, labels: ['', 'nm', 'nanometer'] },
        { unit: Distances.micrometre, labels: ['', 'mcm', 'micrometer'] },
        { unit: Distances.millimetre, labels: ['', 'mm', 'millimeter'] },
        { unit: Distances.decimetre, labels: ['', 'dc', 'decimeter'] },
        { unit: Distances.centimetre, labels: ['', 'cm', 'centimeter'] },
        { unit: Distances.metre, labels: ['', 'm', 'meter'] },
        { unit: Distances.hectometre, labels: ['', 'hm', 'hectometer'] },
        { unit: Distances.kilometre, labels: ['', 'km', 'kilometer'] },
        { unit: Distances.megametre, labels: ['', 'mgm', 'megameter'] },
        { unit: Distances.gigametre, labels: ['', 'gm', 'gigameter'] },
        { unit: Distances.terametre, labels: ['', 'tm', 'teraometer'] },

        { unit: Distances.foot, labels: ['ft.', 'foot'] },
        { unit: Distances.inch, labels: ['in', 'inch'] },

        { unit: Distances.nauticalMile, labels: ['', 'nmi', 'nautical mile'] },
        { unit: Distances.mile, labels: ['', 'mi', 'mile'] },
    ]

    protected readonly unitSystems = [metricAndExactRelated, feetBased]
    protected readonly crossRatios = [toMeter]
}

const metricAndExactRelated = [
    { unit: Distances.picometre, ratio: DecimalRatios.pico },
    { unit: Distances.nanometre, ratio: DecimalRatios.nano },
    { unit: Distances.micrometre, ratio: DecimalRatios.micro },
    { unit: Distances.millimetre, ratio: DecimalRatios.milli },
    { unit: Distances.decimetre, ratio: DecimalRatios.deci },
    { unit: Distances.centimetre, ratio: DecimalRatios.centi },
    { unit: Distances.metre, ratio: DecimalRatios.BASE, isBase: true },
    { unit: Distances.decametre, ratio: DecimalRatios.deca },
    { unit: Distances.hectometre, ratio: DecimalRatios.hecto },
    { unit: Distances.kilometre, ratio: DecimalRatios.kilo },
    { unit: Distances.megametre, ratio: DecimalRatios.mega },
    { unit: Distances.gigametre, ratio: DecimalRatios.giga },
    { unit: Distances.terametre, ratio: DecimalRatios.tera },

    { unit: Distances.nauticalMile, ratio: 1852 },
]

const feetBased = [
    { unit: Distances.thou, ratio: 1 / 12 * 1000 },
    { unit: Distances.inch, ratio: 1 / 12 },
    { unit: Distances.foot, ratio: 1, isBase: true },
    { unit: Distances.yard, ratio: 3 },
    { unit: Distances.chain, ratio: 66 },
    { unit: Distances.furlong, ratio: 660 },
    { unit: Distances.mile, ratio: 5280 },
    { unit: Distances.league, ratio: 3 * 15840 },
]

const toMeter = [
    { unit: Distances.metre, ratio: 1, isBase: true },
    { unit: Distances.foot, ratio: 1 / 3.28084 },
    { unit: Distances.mile, ratio: 1609340 },
]