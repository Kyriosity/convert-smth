import { MassUnits, mass } from '../../measurements/z_barrel';
import { DecimalRatios } from '../../core/z_barrel';
import { linear } from '../linear';

export class Mass extends linear<mass, MassUnits> {
    rawUnitName = (unit: MassUnits) => MassUnits[unit]

    protected readonly unitLabels = [
        { unit: MassUnits.picogramme, labels: ['pg', 'picogram'] },
        { unit: MassUnits.nanogramme, labels: ['ng', 'nanogramm'] },
        { unit: MassUnits.microgramme, labels: ['mcg', 'microgramm'] },
        { unit: MassUnits.milligramme, labels: ['mg', 'milligramm'] },

        { unit: MassUnits.gramme, labels: ['g', 'gramm'] },
        { unit: MassUnits.kilogramme, labels: ['kg', 'kilogramm'] },
        { unit: MassUnits.tonne, labels: ['tn', 'tonne'] },

        { unit: MassUnits.ounce, labels: ['oz', 'ounce'] },
        { unit: MassUnits.pound, labels: ['lb', 'pound'] },
    ];

    protected readonly unitSystems = [metric, internationalPound]

    protected readonly crossRatios = []
}

const metric = [
    { unit: MassUnits.gramme, ratio: DecimalRatios.milli },
    { unit: MassUnits.milligramme, ratio: DecimalRatios.milli },
    { unit: MassUnits.kilogramme, ratio: DecimalRatios.kilo, isBase: true },
    { unit: MassUnits.centner, ratio: 100 * 1000 },
    { unit: MassUnits.tonne, ratio: DecimalRatios.kilo },
]

const internationalPound = [
    { unit: MassUnits.ounce, ratio: 1, },
    { unit: MassUnits.pound, ratio: 16, isBase: true },
];

const KiloMeetsPound = [
    { unit: MassUnits.kilogramme, ratio: 0.45359237, isBase: true },
    { unit: MassUnits.pound, ratio: 1 }
];
