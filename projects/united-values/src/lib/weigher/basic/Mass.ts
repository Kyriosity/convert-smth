import { Masses } from '../../_core/units'
import { rational } from '../../tools/convert/rational'
import { SiRatios } from '../../tools/convert/_ratio'

export class Mass extends rational<Masses> {
    rawLabel = (unit: Masses) => Masses[unit]

    protected readonly unitLabels = [
        { unit: Masses.picogramme, labels: ['pg', 'picogram'] },
        { unit: Masses.nanogramme, labels: ['ng', 'nanogramm'] },
        { unit: Masses.microgramme, labels: ['mcg', 'microgramm'] },
        { unit: Masses.milligramme, labels: ['mg', 'milligramm'] },

        { unit: Masses.gramme, labels: ['g', 'gramm'] },
        { unit: Masses.kilogramme, labels: ['kg', 'kilogramm'] },
        { unit: Masses.tonne, labels: ['tn', 'tonne'] },

        { unit: Masses.ounce, labels: ['oz', 'ounce'] },
        { unit: Masses.pound, labels: ['lb', 'pound'] },
    ]

    protected readonly unitSystems = [metric, internationalPound]
    protected readonly crossRatios = []
}

const metric = [
    { unit: Masses.gramme, ratio: SiRatios.milli },
    { unit: Masses.milligramme, ratio: SiRatios.milli },
    { unit: Masses.kilogramme, ratio: SiRatios.kilo, isBase: true },
    { unit: Masses.centner, ratio: 100 * 1000 },
    { unit: Masses.tonne, ratio: SiRatios.kilo },
]

const internationalPound = [
    { unit: Masses.ounce, ratio: 1, },
    { unit: Masses.pound, ratio: 16, isBase: true },
]

const KiloMeetsPound = [
    { unit: Masses.kilogramme, ratio: 0.45359237, isBase: true },
    { unit: Masses.pound, ratio: 1 }
]
