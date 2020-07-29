import { UVal } from '../cors/z_barrel';

export class frc extends UVal<ForceUnits> {
    NonNegative = () => false
}

export enum ForceUnits {
    Newton,
    kiloNewton,
    kilogrammmeforce, //  = 9,80665N

    poundforce,

    dyne,  // centimetre–gram–second (CGS) system of units, 10-5N
}

export function newton(val: number): frc { return new frc(ForceUnits.Newton, val); }
export function kilonewton(val: number): frc { return new frc(ForceUnits.kiloNewton, val); }

export function kilogramforce(val: number): frc { return new frc(ForceUnits.kilogrammmeforce, val) }

export function poundforce(val: number): frc { return new frc(ForceUnits.poundforce, val); }

export function dyne(val: number): frc { return new frc(ForceUnits.dyne, val); }