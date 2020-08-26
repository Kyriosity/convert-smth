import { UValErr, Measureable, Unit } from '../core/z_barrel';
import { TemperatureUnits, LengthUnits, MassUnits, VelocityUnits, VolumeUnits, ForceUnits, } from '../measurements/z_barrel'
import { IWeigher } from './weigher';
import { Length } from './basic/Length';
import { Mass } from './basic/Mass';
import { Velocity } from './basic/Velocity';
import { Volume } from './basic/Volume';
import { Force } from './basic/Force';
import { Temperature } from './basic/Temperature';
import { volume, force, length, mass, velocity, temperature } from '../measurements/z_barrel';

export class weigher {
    #weighers: { name: string, measure: any }[] = []

    for<M extends Measureable<U>, U extends Unit<number>>(uval: Measureable<number>): IWeigher<M, U> {
        const className = uval.constructor.name

        if (0 === this.#weighers.filter(x => x.name === className).length)
            this.#weighers.push({ name: className, measure: this.create(className) })

        return this.#weighers.filter(x => x.name === className)[0].measure
    }

    private create<M extends Measureable<U>, U extends Unit<number>>(className: string): any { // IWeigher<M, U> {
        // if (mass. === className)
        //     return new Mass();
        // if (length.name === className)
        return new Length();
        // if (velocity.name === className)
        //     return new Velocity()
        // if (volume.name === className)
        //     return new Volume()
        // if (force.name === className)
        //     return new Force()

        // if (temperature.name === className)
        //     return new Temperature();

        throw new UValErr(`${className} forgotten`);
    }
}

function make<M extends Measureable<U>, U extends Unit<number>>(u: U, v: number): Measureable<U> {
    
    return { unit: u, value: v } as M
}

//** TEMPERATURE */
export var kelvin = (val: number) => make(TemperatureUnits.Kelvin, val)
export var celsius = (val: number) => make(TemperatureUnits.Celsius, val)
export var fahrenheit = (val: number) => make(TemperatureUnits.Fahrenheit, val)
export var rankine = (val: number) => make(TemperatureUnits.Rankine, val)

export const Kelvin = kelvin(NaN).unit
export const Celsius = celsius(NaN).unit
export const Fahrenheit = fahrenheit(NaN).unit
export const Rankine = rankine(NaN).unit

//** LENGTH */
export var picometre = (val: number) => make(LengthUnits.picometre, val)
export var nanometre = (val: number) => make(LengthUnits.nanometre, val)
export var micrometre = (val: number) => make(LengthUnits.micrometre, val)
export var millimeter = (val: number) => make(LengthUnits.millimetre, val)
export var centimeter = (val: number) => make(LengthUnits.centimetre, val)
export var decimetre = (val: number) => make(LengthUnits.decimetre, val)
export var meter = (val: number) => make(LengthUnits.metre, val)
export var decamete = (val: number) => make(LengthUnits.decametre, val)
export var hectometre = (val: number) => make(LengthUnits.hectometre, val)
export var kilometer = (val: number) => make(LengthUnits.kilometre, val)
export var megametre = (val: number) => make(LengthUnits.megametre, val)
export var gigametre = (val: number) => make(LengthUnits.gigametre, val)
export var terametre = (val: number) => make(LengthUnits.terametre, val)

// English

// English international

export var thou = (val: number) => make(LengthUnits.thou, val)
export var inch = (val: number) => make(LengthUnits.inch, val)
export var foot = (val: number) => make(LengthUnits.foot, val)
export var yard = (val: number) => make(LengthUnits.yard, val)
export var chain = (val: number) => make(LengthUnits.chain, val)
export var furlong = (val: number) => make(LengthUnits.furlong, val)
export var mile = (val: number) => make(LengthUnits.mile, val)
export var league = (val: number) => make(LengthUnits.league, val)

//   Maritime units
export var fathom = (val: number) => make(LengthUnits.fathom, val)
export var cable = (val: number) => make(LengthUnits.cable, val)
export var nauticalMile = (val: number) => make(LengthUnits.nauticalMile, val)

//   Gunter's survey
export var link = (val: number) => make(LengthUnits.link, val)
export var rod = (val: number) => make(LengthUnits.rod, val)

//** MASS */
// metric
export var picogram = (val: number) => make(MassUnits.picogramme, val)
export var nanogram = (val: number) => make(MassUnits.nanogramme, val)
export var microgram = (val: number) => make(MassUnits.microgramme, val)
export var milligram = (val: number) => make(MassUnits.milligramme, val)
export var gram = (val: number) => make(MassUnits.gramme, val)
export var kilogram = (val: number) => make(MassUnits.kilogramme, val)
export var centner = (val: number) => make(MassUnits.centner, val)
export var tonne = (val: number) => make(MassUnits.tonne, val)
export var megatonne = (val: number) => make(MassUnits.megatonne, val)
export var gigatonne = (val: number) => make(MassUnits.gigatonne, val)

export const Kilogram = kilogram(NaN).unit;

// US customary
export var ounce = (val: number) => make(MassUnits.ounce, val)
export var pound = (val: number) => make(MassUnits.pound, val)

//** VELOCITY */
export var metersSecond = (val: number) => make(VelocityUnits.metresPerSecond, val)
export var kilometersHour = (val: number) => make(VelocityUnits.kilometrePerHour, val)
export var milesHour = (val: number) => make(VelocityUnits.milesPerHour, val)
export var footsSecond = (val: number) => make(VelocityUnits.footPerSecond, val)
export var inchesSecond = (val: number) => make(VelocityUnits.inchPerSecond, val)
export var knot = (val: number) => make(VelocityUnits.knot, val)
export var Mach = (val: number) => make(VelocityUnits.Mach, val)

//** FORCE */
export var newton = (val: number) => make(ForceUnits.Newton, val)
export var kilonewton = (val: number) => make(ForceUnits.kiloNewton, val)
export var kilogramforce = (val: number) => make(ForceUnits.kilogrammmeforce, val)
export var poundforce = (val: number) => make(ForceUnits.poundforce, val)
export var dyne = (val: number) => make(ForceUnits.dyne, val)

//** VOLUME */
export var liter = (val: number) => make(VolumeUnits.litre, val)
export var cubicMeter = (val: number) => make(VolumeUnits.cubicMetre, val)

export var cubicFoot = (val: number) => make(VolumeUnits.cubicFoot, val)

export var usGallon = (val: number) => make(VolumeUnits.usGallon, val)
export var imperialGallon = (val: number) => make(VolumeUnits.imperialGallon, val)