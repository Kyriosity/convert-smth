import { mass } from '../../core/z_barrel'
import { DecimalRatios } from '../../core/z_barrel'
import { linear } from '../linear'
import { Masses } from '../../core/units'

export class Mass extends linear<mass> {
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
    { unit: Masses.gramme, ratio: DecimalRatios.milli },
    { unit: Masses.milligramme, ratio: DecimalRatios.milli },
    { unit: Masses.kilogramme, ratio: DecimalRatios.kilo, isBase: true },
    { unit: Masses.centner, ratio: 100 * 1000 },
    { unit: Masses.tonne, ratio: DecimalRatios.kilo },
]

const internationalPound = [
    { unit: Masses.ounce, ratio: 1, },
    { unit: Masses.pound, ratio: 16, isBase: true },
]

const KiloMeetsPound = [
    { unit: Masses.kilogramme, ratio: 0.45359237, isBase: true },
    { unit: Masses.pound, ratio: 1 }
]
