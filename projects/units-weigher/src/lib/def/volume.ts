import { UVal } from '../cors/z_barrel';

export class volume extends UVal<VolumeUnits> {
    get nonNegative(): boolean { return true }
}

export enum VolumeUnits {
    // metric/SI
    cubicCentimetre,
    litre,
    cubicMetre,

    // foot
    cubicFoot,

    // gallons
    imperialGallon, // used in the United Kingdom, Canada, and some Caribbean nations
    usGallon,
    usDryGallon, // 1/8 buschel
    usBushel,

    imperialPint,
    usPint,
    usDryPint,

    // barells
    usDryBarrel,
    oilBarrel, // 42 US Gallons
}

export function liter(val: number): volume { return new volume(VolumeUnits.litre, val); }
export function cubicMeter(val: number): volume { return new volume(VolumeUnits.cubicMetre, val); }

export function cubicFoot(val: number): volume { return new volume(VolumeUnits.cubicFoot, val); }

export function usGallon(val: number): volume { return new volume(VolumeUnits.usGallon, val); }
export function imperialGallon(val: number): volume { return new volume(VolumeUnits.imperialGallon, val); }