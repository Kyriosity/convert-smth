import { Lengths, ElectricalCurrents, Luminosities, Masses, Speeds, Volumes, Forces, Temperatures } from './units'
import { Quantified } from './quantified';

export interface len extends Quantified<Lengths> {} // "length" would be better but intercept with the TS keyword
export interface mass extends Quantified<Masses> {}
export interface volume extends Quantified<Volumes> {}
export interface force extends Quantified<Forces> {}
export interface temperature extends Quantified<Temperatures> {}
export interface speed extends Quantified<Speeds> {}

export interface luminosity extends Quantified<Luminosities> {}
export interface electroCurrent extends Quantified<ElectricalCurrents> {}

export interface area extends len {}
export interface Dimensions {
    length?: len
    height?: len
    width?: len
}
