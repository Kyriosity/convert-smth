import { mkTemperature, mkLen, mkMass, mkSpeed, mkForce, mkVolume, mkLuminosity, mkElectroCurrent } from './instantiator'
import { Temperatures, Lengths, Masses, Speeds, Forces, Volumes, Luminosities, ElectricalCurrents } from '../_core/units'

//** TEMPERATURE */
export var kelvin = (v: number) => mkTemperature(Temperatures.Kelvin, v)
export var celsius = (v: number) => mkTemperature(Temperatures.Celsius, v)
export var fahrenheit = (v: number) => mkTemperature(Temperatures.Fahrenheit, v)
export var rankine = (v: number) => mkTemperature(Temperatures.Rankine, v)

//** LENGTH */
export var picometre = (v: number) => mkLen(Lengths.picometre, v)
export var nanometre = (v: number) => mkLen(Lengths.nanometre, v)
export var micrometre = (v: number) => mkLen(Lengths.micrometre, v)
export var millimeter = (v: number) => mkLen(Lengths.millimetre, v)
export var centimeter = (v: number) => mkLen(Lengths.centimetre, v)
export var decimetre = (v: number) => mkLen(Lengths.decimetre, v)
export var meter = (v: number) => mkLen(Lengths.metre, v)
export var decamete = (v: number) => mkLen(Lengths.decametre, v)
export var hectometre = (v: number) => mkLen(Lengths.hectometre, v)
export var kilometer = (v: number) => mkLen(Lengths.kilometre, v)
export var megametre = (v: number) => mkLen(Lengths.megametre, v)
export var gigametre = (v: number) => mkLen(Lengths.gigametre, v)
export var terametre = (v: number) => mkLen(Lengths.terametre, v)

export const Meter = meter(NaN).unit
export const Kilometer = kilometer(NaN).unit

// English

// English international
export var thou = (v: number) => mkLen(Lengths.thou, v)
export var inch = (v: number) => mkLen(Lengths.inch, v)
export var foot = (v: number) => mkLen(Lengths.foot, v)
export var yard = (v: number) => mkLen(Lengths.yard, v)
export var chain = (v: number) => mkLen(Lengths.chain, v)
export var furlong = (v: number) => mkLen(Lengths.furlong, v)
export var mile = (v: number) => mkLen(Lengths.mile, v)
export var league = (v: number) => mkLen(Lengths.league, v)

export const Inch = inch(NaN).unit
export const Foot = foot(NaN).unit
export const Mile = mile(NaN).unit

//   Maritime units
export var fathom = (v: number) => mkLen(Lengths.fathom, v)
export var cable = (v: number) => mkLen(Lengths.cable, v)
export var nauticalMile = (v: number) => mkLen(Lengths.nauticalMile, v)

//   Gunter's survey
export var link = (v: number) => mkLen(Lengths.link, v)
export var rod = (v: number) => mkLen(Lengths.rod, v)

//** MASS */
// metric
export var picogram = (v: number) => mkMass(Masses.picogramme, v)
export var nanogram = (v: number) => mkMass(Masses.nanogramme, v)
export var microgram = (v: number) => mkMass(Masses.microgramme, v)
export var milligram = (v: number) => mkMass(Masses.milligramme, v)
export var gram = (v: number) => mkMass(Masses.gramme, v)
export var kilogram = (v: number) => mkMass(Masses.kilogramme, v)
export var centner = (v: number) => mkMass(Masses.centner, v)
export var ton = (v: number) => mkMass(Masses.tonne, v)
export var megaton = (v: number) => mkMass(Masses.megatonne, v)
export var gigaton = (v: number) => mkMass(Masses.gigatonne, v)

export const Kilogram = kilogram(NaN).unit;

// US customary
export var ounce = (v: number) => mkMass(Masses.ounce, v)
export var pound = (v: number) => mkMass(Masses.pound, v)

//** SPEED */
export var metersSecond = (v: number) => mkSpeed(Speeds.metresPerSecond, v)
export var kilometersHour = (v: number) => mkSpeed(Speeds.kilometrePerHour, v)
export var milesHour = (v: number) => mkSpeed(Speeds.milesPerHour, v)
export var footsSecond = (v: number) => mkSpeed(Speeds.footPerSecond, v)
export var inchesSecond = (v: number) => mkSpeed(Speeds.inchPerSecond, v)
export var knot = (v: number) => mkSpeed(Speeds.knot, v)
export var Mach = (v: number) => mkSpeed(Speeds.Mach, v)

//** FORCE */
export var newton = (v: number) => mkForce(Forces.Newton, v)
export var kilonewton = (v: number) => mkForce(Forces.kiloNewton, v)
export var kilogramforce = (v: number) => mkForce(Forces.kilogrammmeforce, v)
export var poundforce = (v: number) => mkForce(Forces.poundforce, v)
export var dyne = (v: number) => mkForce(Forces.dyne, v)

//** VOLUME */
export var liter = (v: number) => mkVolume(Volumes.litre, v)
export var cubicMeter = (v: number) => mkVolume(Volumes.cubicMetre, v)

export var cubicFoot = (v: number) => mkVolume(Volumes.cubicFoot, v)

export var usGallon = (v: number) => mkVolume(Volumes.usGallon, v)
export var imperialGallon = (v: number) => mkVolume(Volumes.imperialGallon, v)

export var imperialPint = (v: number) => mkVolume(Volumes.imperialPint, v)
export var usPint = (v: number) => mkVolume(Volumes.usPint, v)

export const Liter = liter(NaN).unit
export const ImperialPint = imperialPint(NaN).unit
export const UsPint = usPint(NaN).unit

// Luminosity
export var watt = (v: number) => mkLuminosity(Luminosities.Watt, v)
export var joulesSecond = (v: number) => mkLuminosity(Luminosities.JoulesPerSecond, v)
export var sun = (v: number) => mkLuminosity(Luminosities.Sun, v)

// Electricity
export var amper = (v: number) => mkElectroCurrent(ElectricalCurrents.Amper, v)
