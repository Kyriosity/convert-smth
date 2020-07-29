import { UVal } from '../cors/z_barrel';

export class force extends UVal<ForceUnits> {
    NonNegative = () => false
}

export enum ForceUnits {
    Newton,
    kiloNewton,
    kilogrammmeforce, //  = 9,80665N

    poundforce,

    dyne,  // centimetre–gram–second (CGS) system of units, 10-5N
}

export function newton(val: number): force { return new force(ForceUnits.Newton, val); }
export function kilonewton(val: number): force { return new force(ForceUnits.kiloNewton, val); }

export function kilogramforce(val: number): force { return new force(ForceUnits.kilogrammmeforce, val) }

export function poundforce(val: number): force { return new force(ForceUnits.poundforce, val); }

export function dyne(val: number): force { return new force(ForceUnits.dyne, val); }