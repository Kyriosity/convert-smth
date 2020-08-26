import { Measureable } from '../core/z_barrel';
export enum LengthUnits {
    picometre,
    nanometre,
    micrometre,
    millimetre,
    decimetre,
    centimetre,
    metre,
    decametre,
    hectometre,
    kilometre,
    megametre,
    gigametre,
    terametre,

    // English int.
    thou,
    inch,
    foot,
    yard,
    chain,
    furlong,
    mile,
    league,

    // maritime units
    fathom,
    cable,
    nauticalMile,

    // Gunter's survey
    link,
    rod
}

export enum TemperatureUnits {
    Kelvin = 1,
    Celsius = 2,
    Fahrenheit = 3,
    Rankine = 4,
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

export enum ForceUnits {
    Newton,
    kiloNewton,
    kilogrammmeforce, //  = 9,80665N

    poundforce,

    dyne,  // centimetre–gram–second (CGS) system of units, 10-5N
}

export enum MassUnits {
    picogramme,
    nanogramme,
    microgramme,
    milligramme,
    gramme,
    kilogramme,
    centner,
    tonne,
    megatonne,
    gigatonne,

    // US customary
    grain,
    dram,
    ounce,
    pound,
    quarter,
    hundredweight,
    usTon,
    ukTon,
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

export interface length extends Measureable<LengthUnits> {}
export interface area extends length {}

export interface mass extends Measureable<MassUnits> {}
export interface volume extends Measureable<VolumeUnits> {}
export interface velocity extends Measureable<VelocityUnits> {}
export interface force extends Measureable<ForceUnits> {}

export interface temperature extends Measureable<TemperatureUnits> {}