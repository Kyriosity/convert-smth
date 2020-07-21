import { UVal } from '../cors/barrel';

export class vol extends UVal<VolumeUnits> {
    get NonNegative() { return true; }
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

export function liter(val: number): vol { return new vol(VolumeUnits.litre, val); }
export function cubicMeter(val: number): vol { return new vol(VolumeUnits.cubicMetre, val); }

export function cubicFoot(val: number): vol { return new vol(VolumeUnits.cubicFoot, val); }

export function usGallon(val: number): vol { return new vol(VolumeUnits.usGallon, val); }
export function imperialGallon(val: number): vol { return new vol(VolumeUnits.imperialGallon, val); }