import { mkTemperature, mkDistance, mkMass, mkVelocity, mkForce, mkVolume } from './_measurablesCreator'
import { temperature, distance, mass, velocity, force, volume } from '../core/z_barrel'
import { Temperatures, Distances, Masses, Velocities, Forces, Volumes } from '../core/units'

//** TEMPERATURE */
export var kelvin = (val: number): temperature => mkTemperature(Temperatures.Kelvin, val)
export var celsius = (val: number): temperature => mkTemperature(Temperatures.Celsius, val)
export var fahrenheit = (val: number): temperature => mkTemperature(Temperatures.Fahrenheit, val)
export var rankine = (val: number): temperature => mkTemperature(Temperatures.Rankine, val)

export const Kelvin = kelvin(NaN).unit
export const Celsius = celsius(NaN).unit
export const Fahrenheit = fahrenheit(NaN).unit
export const Rankine = rankine(NaN).unit

//** DISTANCE */
export var picometre = (val: number): distance => mkDistance(Distances.picometre, val)
export var nanometre = (val: number): distance => mkDistance(Distances.nanometre, val)
export var micrometre = (val: number): distance => mkDistance(Distances.micrometre, val)
export var millimeter = (val: number): distance => mkDistance(Distances.millimetre, val)
export var centimeter = (val: number): distance => mkDistance(Distances.centimetre, val)
export var decimetre = (val: number): distance => mkDistance(Distances.decimetre, val)
export var meter = (val: number): distance => mkDistance(Distances.metre, val)
export var decamete = (val: number): distance => mkDistance(Distances.decametre, val)
export var hectometre = (val: number): distance => mkDistance(Distances.hectometre, val)
export var kilometer = (val: number): distance => mkDistance(Distances.kilometre, val)
export var megametre = (val: number): distance => mkDistance(Distances.megametre, val)
export var gigametre = (val: number): distance => mkDistance(Distances.gigametre, val)
export var terametre = (val: number): distance => mkDistance(Distances.terametre, val)

// English

// English international

export var thou = (val: number): distance => mkDistance(Distances.thou, val)
export var inch = (val: number): distance => mkDistance(Distances.inch, val)
export var foot = (val: number): distance => mkDistance(Distances.foot, val)
export var yard = (val: number): distance => mkDistance(Distances.yard, val)
export var chain = (val: number): distance => mkDistance(Distances.chain, val)
export var furlong = (val: number): distance => mkDistance(Distances.furlong, val)
export var mile = (val: number): distance => mkDistance(Distances.mile, val)
export var league = (val: number): distance => mkDistance(Distances.league, val)

//   Maritime units
export var fathom = (val: number): distance => mkDistance(Distances.fathom, val)
export var cable = (val: number): distance => mkDistance(Distances.cable, val)
export var nauticalMile = (val: number): distance => mkDistance(Distances.nauticalMile, val)

//   Gunter's survey
export var link = (val: number): distance => mkDistance(Distances.link, val)
export var rod = (val: number): distance => mkDistance(Distances.rod, val)

//** MASS */
// metric
export var picogram = (val: number): mass => mkMass(Masses.picogramme, val)
export var nanogram = (val: number): mass => mkMass(Masses.nanogramme, val)
export var microgram = (val: number): mass => mkMass(Masses.microgramme, val)
export var milligram = (val: number): mass => mkMass(Masses.milligramme, val)
export var gram = (val: number): mass => mkMass(Masses.gramme, val)
export var kilogram = (val: number): mass => mkMass(Masses.kilogramme, val)
export var centner = (val: number): mass => mkMass(Masses.centner, val)
export var tonne = (val: number): mass => mkMass(Masses.tonne, val)
export var megatonne = (val: number): mass => mkMass(Masses.megatonne, val)
export var gigatonne = (val: number): mass => mkMass(Masses.gigatonne, val)

export const Kilogram = kilogram(NaN).unit;

// US customary
export var ounce = (val: number): mass => mkMass(Masses.ounce, val)
export var pound = (val: number): mass => mkMass(Masses.pound, val)

//** VELOCITY */
export var metersSecond = (val: number): velocity => mkVelocity(Velocities.metresPerSecond, val)
export var kilometersHour = (val: number): velocity => mkVelocity(Velocities.kilometrePerHour, val)
export var milesHour = (val: number): velocity => mkVelocity(Velocities.milesPerHour, val)
export var footsSecond = (val: number): velocity => mkVelocity(Velocities.footPerSecond, val)
export var inchesSecond = (val: number): velocity => mkVelocity(Velocities.inchPerSecond, val)
export var knot = (val: number): velocity => mkVelocity(Velocities.knot, val)
export var Mach = (val: number): velocity => mkVelocity(Velocities.Mach, val)

//** FORCE */
export var newton = (val: number): force => mkForce(Forces.Newton, val)
export var kilonewton = (val: number): force => mkForce(Forces.kiloNewton, val)
export var kilogramforce = (val: number): force => mkForce(Forces.kilogrammmeforce, val)
export var poundforce = (val: number): force => mkForce(Forces.poundforce, val)
export var dyne = (val: number): force => mkForce(Forces.dyne, val)

//** VOLUME */
export var liter = (val: number): volume => mkVolume(Volumes.litre, val)
export var cubicMeter = (val: number): volume => mkVolume(Volumes.cubicMetre, val)

export var cubicFoot = (val: number): volume => mkVolume(Volumes.cubicFoot, val)

export var usGallon = (val: number): volume => mkVolume(Volumes.usGallon, val)
export var imperialGallon = (val: number): volume => mkVolume(Volumes.imperialGallon, val)