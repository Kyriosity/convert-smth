import { Lengths } from '../../_core/units'
import { SiRatios } from '../_convert/_ratio'
import { rational } from '../_convert/rational'
import { Tools } from '../_tools'
import { IConverter } from '../_convert/_converter'
import { IPresenter } from '../_present/_presenter'

export class Length implements Tools<Lengths> {
    converter: IConverter<Lengths> = new Converter()
    presenter: IPresenter<Lengths>
}

class Converter extends rational<Lengths> {
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