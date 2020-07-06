import { mass, MassUnits } from '../definitions/masses';
import { DecimalRatios } from '../cornerstones/base';
import { TabledMeasure } from './_TabledMeasure';

export class Mass extends TabledMeasure<mass, MassUnits> {
    protected rawUnitName = (unit: MassUnits) => { return MassUnits[unit]}

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


    private metric = [
        { unit: MassUnits.gramme, ratio: DecimalRatios.milli },
        { unit: MassUnits.milligramme, ratio: DecimalRatios.milli },
        { unit: MassUnits.kilogramme, ratio: DecimalRatios.kilo, isBase: true },
        { unit: MassUnits.centner, ratio: 100 * 1000 },
        { unit: MassUnits.tonne, ratio: DecimalRatios.kilo },
    ]

    internationalPound = [
        { unit: MassUnits.ounce, ratio: 1, },
        { unit: MassUnits.pound, ratio: 16, isBase: true },
    ];

    static KiloMeetsPound = [
        { unit: MassUnits.kilogramme, ratio: 0.45359237, isBase: true},
        { unit: MassUnits.pound, ratio: 1 }
    ];

    unitSystems = [
        this.metric,
        this.internationalPound
    ]

    crossRatios = []
}
