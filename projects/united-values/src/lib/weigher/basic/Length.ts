import { Lengths } from '../../_core/units'
import { rational } from '../../tools/convert/rational'
import { SiRatios } from '../../tools/convert/_ratio'

export class Length extends rational<Lengths> {
    rawLabel = (unit: Lengths) => Lengths[unit]

    protected readonly unitLabels = [
        { unit: Lengths.picometre, labels: ['', 'pm', 'picometer'] },
        { unit: Lengths.nanometre, labels: ['', 'nm', 'nanometer'] },
        { unit: Lengths.micrometre, labels: ['', 'mcm', 'micrometer'] },
        { unit: Lengths.millimetre, labels: ['', 'mm', 'millimeter'] },
        { unit: Lengths.decimetre, labels: ['', 'dc', 'decimeter'] },
        { unit: Lengths.centimetre, labels: ['', 'cm', 'centimeter'] },
        { unit: Lengths.metre, labels: ['', 'm', 'meter'] },
        { unit: Lengths.hectometre, labels: ['', 'hm', 'hectometer'] },
        { unit: Lengths.kilometre, labels: ['', 'km', 'kilometer'] },
        { unit: Lengths.megametre, labels: ['', 'mgm', 'megameter'] },
        { unit: Lengths.gigametre, labels: ['', 'gm', 'gigameter'] },
        { unit: Lengths.terametre, labels: ['', 'tm', 'teraometer'] },

        { unit: Lengths.foot, labels: ['ft.', 'foot'] },
        { unit: Lengths.inch, labels: ['in', 'inch'] },

        { unit: Lengths.nauticalMile, labels: ['', 'nmi', 'nautical mile'] },
        { unit: Lengths.mile, labels: ['', 'mi', 'mile'] },
    ]

    protected readonly unitSystems = [metricAndExactRelated, feetBased]
    protected readonly crossRatios = [toMeter]
}

const metricAndExactRelated = [
    { unit: Lengths.picometre, ratio: SiRatios.pico },
    { unit: Lengths.nanometre, ratio: SiRatios.nano },
    { unit: Lengths.micrometre, ratio: SiRatios.micro },
    { unit: Lengths.millimetre, ratio: SiRatios.milli },
    { unit: Lengths.decimetre, ratio: SiRatios.deci },
    { unit: Lengths.centimetre, ratio: SiRatios.centi },
    { unit: Lengths.metre, ratio: SiRatios.BASE, isBase: true },
    { unit: Lengths.decametre, ratio: SiRatios.deca },
    { unit: Lengths.hectometre, ratio: SiRatios.hecto },
    { unit: Lengths.kilometre, ratio: SiRatios.kilo },
    { unit: Lengths.megametre, ratio: SiRatios.mega },
    { unit: Lengths.gigametre, ratio: SiRatios.giga },
    { unit: Lengths.terametre, ratio: SiRatios.tera },

    { unit: Lengths.nauticalMile, ratio: 1852 },
]

const feetBased = [
    { unit: Lengths.thou, ratio: 1 / 12 * 1000 },
    { unit: Lengths.inch, ratio: 1 / 12 },
    { unit: Lengths.foot, ratio: 1, isBase: true },
    { unit: Lengths.yard, ratio: 3 },
    { unit: Lengths.chain, ratio: 66 },
    { unit: Lengths.furlong, ratio: 660 },
    { unit: Lengths.mile, ratio: 5280 },
    { unit: Lengths.league, ratio: 3 * 15840 },
]

const toMeter = [
    { unit: Lengths.metre, ratio: 1, isBase: true },
    { unit: Lengths.foot, ratio: 1 / 3.28084 },
    { unit: Lengths.mile, ratio: 1609340 },
]