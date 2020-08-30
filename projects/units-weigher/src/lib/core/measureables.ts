import { Distances, Masses, Volumes, Velocities, Forces, Temperatures, Unit,  } from './units';

export enum Measurement {
    Unkonwn,
    Distance,
    Mass,
    Velocity,
    Force,
    Volume,
    Temperature,
} 

export interface Measureable<U extends Unit> {
    readonly kind: Measurement
    readonly unit: U
    readonly value: number
}

export interface distance extends Measureable<Distances> {}
export interface area extends distance {}

export interface mass extends Measureable<Masses> {}
export interface volume extends Measureable<Volumes> {}
export interface velocity extends Measureable<Velocities> {}
export interface force extends Measureable<Forces> {}

export interface temperature extends Measureable<Temperatures> {}

export interface Dimensions {
    length?: distance
    height?: distance
    width?: distance
}