export type Unit = Temperatures | Forces | Lengths | Masses | Volumes | Speeds | Luminosities |
    ElectricalCurrents

export enum Lengths {
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

export enum Temperatures {
    Kelvin = 1,
    Celsius = 2,
    Fahrenheit = 3,
    Rankine = 4,
}
export const Kelvin = Temperatures.Kelvin
export const Celsius = Temperatures.Celsius
export const Fahrenheit = Temperatures.Fahrenheit
export const Rankine = Temperatures.Rankine

export enum Volumes {
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

export enum Forces {
    Newton,
    kiloNewton,
    kilogrammmeforce, //  = 9,80665N

    poundforce,

    dyne,  // centimetre–gram–second (CGS) system of units, 10-5N
}

export enum Masses {
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

export enum Speeds {
    metresPerSecond,
    kilometrePerHour,

    milesPerHour,
    footPerSecond,
    inchPerSecond,

    knot, // nautical mile per second

    Mach, // speed of sound, 1.2438,8 km/h
}

export enum Luminosities { //*  an absolute measure of radiated electromagnetic power (light)
    Watt,
    JoulesPerSecond,
    Sun, // L⊙
}

export enum ElectricalCurrents {
    Amper
}
