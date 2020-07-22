import { UVal } from '../cors/z_barrel';
import { IWeigher } from './iWeigher';
import { Lgth } from './Lgth';
import { lgth } from '../def/z_barrel';

export class gen {
    private _weighers: { name: string, measure: IWeigher }[] = [];

    for(uval: UVal<number>): IWeigher {
        const className = uval.constructor.name;

        if (0 === this._weighers.filter(x => x.name === className).length)
            this._weighers.push({ name: className, measure: this.make(className) });

        return this._weighers.filter(x => x.name === className)[0].measure;
    }

    private make(className: string): IWeigher {
        // if (mass.name === className)
        //     return new Mass();
        if (lgth.name === className)
            return new Lgth();
        // if (velocity.name === className)
        //     return new Velocity();
        // if (volume.name === className)
        //     return new Volume();
        // if (temperature.name === className)
        //     return new Temperature();

        return null; // throw new UValErr(`${className} forgotten`);
    }
}