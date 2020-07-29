import { UVal } from '../cors/z_barrel';
import { force, mass, length, velocity, volume } from '../def/z_barrel';
import { IWeigher } from './iWeigher';
import { Length } from './measures/Length';
import { Mass } from './measures/Mass';
import { Velocity } from './measures/Velocity';
import { Volume } from './measures/Volume';
import { Force } from './measures/Force';

export class gen {
    private _weighers: { name: string, measure: IWeigher }[] = [];

    for(uval: UVal<number>): IWeigher {
        const className = uval.constructor.name

        if (0 === this._weighers.filter(x => x.name === className).length)
            this._weighers.push({ name: className, measure: this.add(className) })

        return this._weighers.filter(x => x.name === className)[0].measure;
    }

    private add(className: string): IWeigher {
        if (mass.name === className)
            return new Mass();
        if (length.name === className)
            return new Length();
        if (velocity.name === className)
            return new Velocity()
        if (volume.name === className)
            return new Volume()
        if (force.name === className)
            return new Force()

        // if (temperature.name === className)
        //     return new Temperature();

        return null; // throw new UValErr(`${className} forgotten`);
    }
}