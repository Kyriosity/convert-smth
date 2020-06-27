import { UVal } from '../cornerstones/.barrel';
import { length, mass, volume, velocity } from '../definitions/.barrel';
import { Mass } from './Mass';
import { Length } from './Length';
import { Velocity } from './Velocity';
import { Volume } from './Volume';


export class measures {
    for<V extends U, U extends UVal<number>>(val: V): any { // KD, ToDo: must be an interface instead of any
        // KD, ToDo: "cache" not new each time

        if (val as mass)
            return new Mass();
        if (val as unknown as length) 
            return new Length();
        if (val as velocity)
            return new Velocity();
        if (val as volume)
            return new Volume();
    }
}