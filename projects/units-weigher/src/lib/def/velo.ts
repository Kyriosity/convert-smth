import { UVal } from '../cors/z_barrel';

export class velo extends UVal<VelocityUnits> {
    NonNegative = () => false
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

export function metersSecond(value: number): velo { return new velo(VelocityUnits.metresPerSecond, value); }
export function kilometersHour(value: number): velo { return new velo(VelocityUnits.kilometrePerHour, value); }
export function milesHour(value: number): velo { return new velo(VelocityUnits.milesPerHour, value); }
export function footsSecond(value: number): velo { return new velo(VelocityUnits.footPerSecond, value); }
export function inchesSecond(value: number): velo { return new velo(VelocityUnits.inchPerSecond, value); }
export function knot(value: number): velo { return new velo(VelocityUnits.knot, value); }
export function Mach(value: number): velo { return new velo(VelocityUnits.Mach, value); }