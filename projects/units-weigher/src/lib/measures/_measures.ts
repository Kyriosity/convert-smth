import { UVal, Unit } from '../cornerstones/.barrel';
import { length, mass, volume, velocity } from '../definitions/.barrel';
import { Mass } from './Mass';
import { Length } from './Length';
import { Velocity } from './Velocity';
import { Volume } from './Volume';
import { Measure } from './_Measure';

export class measures {
    private _measures: { name: string, measure: Measure }[] = [];

    for<V extends UVal<U>, U extends Unit<number>>(uval: V): Measure { // KD, ToDo: must be an interface instead of 'any'
        const className = uval.constructor.name;

        if (0 === this._measures.filter(x => x.name === className).length)
            this._measures.push({ name: className, measure: this.mk(className) });

        return this._measures.filter(x => x.name === className)[0].measure;
    }

    private mk(className: string): Measure {
        if (mass.name === className)
            return new Mass();
        if (length.name === className)
            return new Length();
        if (velocity.name === className)
            return new Velocity();
        if (volume.name === className)
            return new Volume();
    }
}