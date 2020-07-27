import { formatNumber } from '@angular/common';

export const uWarn = '\u26A0';
export const uQuestion = '\u0022'
export const uFatQuestion = '\u2753';

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

export function formatCustom(value: number, params: PresentationParams, _currentLocale: string): string {
    if (!value)
        return null;
    try {
        if (!params.DecimalFormatApplies)
            return formatNumber(value, params.Culture);

        return formatNumber(value, params.CultureApplies ? params.Culture : _currentLocale, params.DecimalFormat);
    }
    catch (exception) { return `${uWarn} ${exception}`; }
}