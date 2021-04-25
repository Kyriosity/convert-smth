import { Length } from '../tools/measure/Length'
import { Lengths, Masses, Forces, Volumes, Temperatures, Speeds, Luminosities, ElectricalCurrents } from '../_core/units'
import { UValue } from './_uvalue'

export const mkLen = (u: Lengths, v: number) => new UValue(u, v, new Length().converter) 
export const mkMass = (u: Masses, v: number) => new UValue(u, v)
export const mkForce = (u: Forces, v: number) => new UValue(u, v)
export const mkSpeed = (u: Speeds, v: number) => new UValue(u, v)
export const mkVolume = (u: Volumes, v: number) => new UValue(u, v)
export const mkTemperature = (u: Temperatures, v: number) => new UValue(u, v)

export const mkLuminosity = (u: Luminosities, v: number) => new UValue(u, v)
export const mkElectroCurrent = (u: ElectricalCurrents, v: number) => new UValue(u, v)