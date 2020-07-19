import { UWeigher } from './.base';
import { UVal, Unit } from '../cors/!barrel';

export abstract class Functional<V extends UVal<U>, U extends Unit<number>> extends UWeigher<V, U> {
    
}