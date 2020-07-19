import { UVal } from '../cors/!barrel';

export class velocity extends UVal<VelocityUnits> {
    get NonNegative() { return false }
}

export enum VelocityUnits {
    metresPerSecond,
    kilometrePerHour,

    milesPerHour,
    footPerSecond,
    inchPerSecond,

    knot, // nautical mile per second

    Mach, // speed of sound, 1.2438,8 km/h
}

export function metersSecond(value: number): velocity { return new velocity(VelocityUnits.metresPerSecond, value); }
export function kilometersHour(value: number): velocity { return new velocity(VelocityUnits.kilometrePerHour, value); }
export function milesHour(value: number): velocity { return new velocity(VelocityUnits.milesPerHour, value); }
export function footsSecond(value: number): velocity { return new velocity(VelocityUnits.footPerSecond, value); }
export function inchesSecond(value: number): velocity { return new velocity(VelocityUnits.inchPerSecond, value); }
export function knot(value: number): velocity { return new velocity(VelocityUnits.knot, value); }
export function Mach(value: number): velocity { return new velocity(VelocityUnits.Mach, value); }