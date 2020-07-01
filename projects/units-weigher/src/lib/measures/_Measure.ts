import { Unit, UVal, ULabel, ULabelFormats } from '../cornerstones/.barrel';
import { parseUnitFormat } from './__utils';

export interface Measure {
    convert(that, to): void
    differ(of, to): number

    parseUnit(unitName: string)
    nameUnit(uval, input?: string, culture?: string): string
}

export interface UMeasure <V extends UVal<U>, U extends Unit<number>> extends Measure{
    convert(that: V, to: U): void
    differ(of: V, to: V): number

    parseUnit(unitName: string): U
    nameUnit(uval: U, input?: string, culture?: string): string
}

export abstract class AbstractMeasure<V extends UVal<U>, U extends Unit<number>> implements UMeasure<V, U> {
    protected unitLabels: ULabel<U>[];

    protected abstract factor(of: U, to: U): number; 
    protected abstract rawUnitName(unit: U): string;

    convert(that: V, to: U): void {
        that.Unit = to;
        that.Val *= this.factor(that.Unit, to);
    }

    differ(of: V, to: V): number {
        this.convert(of, to.Unit);
        return of.Val - to.Val;
    }

    parseUnit(label: string): U {
        // ToDO: must be LINQed single !
        const entries = this.unitLabels?.filter(x => x.labels.includes(label));
        if (!entries || 0 == entries.length)
            return undefined;

        return entries[0].unit;
    }

    nameUnit(of: U, formatInput?: string, culture?: string): string {
        const parsedFormat = formatInput? parseUnitFormat(formatInput) : ULabelFormats.short;
        if (ULabelFormats.none == parsedFormat)
            return '';

        if (ULabelFormats.customCoded == parsedFormat)
            return formatInput;

        let entries =  this.unitLabels?.filter(x => x.unit == of);
        if (!entries || 0 == entries.length)
            return `"${this.rawUnitName(of)}"`;

        let labels = entries[0].labels;
        if (!labels || labels.length <= parsedFormat)
            return `!!label!!: ${formatInput} ${this.unitLabels[0]}`;

        labels.length < 1 + parsedFormat? this.rawUnitName(of) : labels[parsedFormat];
    }
}

export abstract class FuncMeasure<V extends UVal<U>, U extends UVal<number>> extends AbstractMeasure<V, U> {
    // KD, ToDo: e.g. funcs for temperature (K, F, C)
}