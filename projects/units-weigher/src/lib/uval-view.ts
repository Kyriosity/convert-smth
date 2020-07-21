import { formatNumber } from '@angular/common';
import { UVal } from './cors/barrel';
import { gen } from './weigher/gen';

export class UValView{
    private weighers: gen;

    constructor(private _locale?: string) {
        this.weighers = new gen();
    }

    transform(uval: UVal<number>, params: PresentationParams): string {
        if (!uval)
            return '';

        const formattedValue = params.DecimalFormatApplies || params.CultureApplies ?
            UValView.formatValueCustom(uval.Val, params, this._locale)
            : uval.Val.toLocaleString();

        const weigher = this.weighers.for(uval);
        if (!weigher)
            return `\`${formattedValue} ?${uval.constructor.name} ${uval.Unit}\``;

        if (params.ConvertApplies) {
            const toUnit = weigher.parseUnit(params.ConvertTo);
            if (!toUnit)
                return `\`-> ${params.ConvertTo}?\``;

            const initLabel = weigher.nameUnit(uval.Unit);
            weigher.convert(uval, toUnit);
            if (!uval || !uval.Val)
                return `\`${initLabel} -> ${params.ConvertTo}\`?`;
        }
        return `${formattedValue} ${weigher.nameUnit(uval.Unit, params.UnitDisplay)}`;
    }

    private static formatValueCustom(value: number, params: PresentationParams, _currentLocale: string): string {
        try {
            if (!params.DecimalFormatApplies)
                return formatNumber(value, params.Culture);

            return formatNumber(value, params.CultureApplies ? params.Culture : _currentLocale, params.DecimalFormat);
        }
        catch (exception) { return exception; }
    }
}

export class PresentationParams {
    private _convertTo = '';
    get ConvertTo(): string { return this._convertTo }
    get ConvertApplies(): boolean { return '' != this.ConvertTo; }

    private _decimalFormat = '';
    get DecimalFormat(): string { return this._decimalFormat; }
    get DecimalFormatApplies(): boolean { return '' != this.DecimalFormat; }

    private _culture = '';
    get Culture(): string { return this._culture; }
    get CultureApplies(): boolean { return '' != this.Culture; }

    private _unitDisplay = 'unit-short';
    get UnitDisplay(): string { return this._unitDisplay }

    parse(...args: string[]): void {
        this.reset();

        const maxParams = 4;
        for (var i = 0; i < args.length && i < maxParams; i++) {
            const arg = args[i].trim();
            if (!PresentationParams.isArgOmmited(arg)) {
                if (0 === i)
                    this._convertTo = arg;
                else if (1 === i)
                    this._unitDisplay = arg;
                else if (2 === i)
                    this._decimalFormat = arg;
                else if (3 === i)
                    this._culture = arg;
            }
        }
        if (args.length > maxParams) {
            const extraParams = args.slice(maxParams);
            console.warn(`${extraParams.length} parameter(s) supplied: ${extraParams.join(', ')}`);
        }
    }

    private reset() {
        this._convertTo = '';
        this._decimalFormat = '';
        this._culture = '';
        this._unitDisplay = '';
    }

    private static isArgOmmited(arg: string): boolean { return ('' == arg! || '-' == arg); }
}
