import { Measureable, Measurement, temperature, distance, velocity, mass, force, volume } from '../core/z_barrel'
import { Unit, Temperatures, Distances, Masses, Forces, Velocities, Volumes } from '../core/units'

function make<M extends Measureable<Unit>>(k: Measurement, u: Unit, val: number): M {
    return <M>{ unit: u, value: val, kind: k }
}

export const mkTemperature = (unit: Temperatures, val: number): temperature => make(Measurement.Temperature, unit, val)
export const mkDistance = (unit: Distances, val: number): distance => make(Measurement.Distance, unit, val)
export const mkMass = (unit: Masses, val: number): mass => make(Measurement.Mass, unit, val)
export const mkForce = (unit: Forces, val: number): force => make(Measurement.Force, unit, val)
export const mkVelocity = (unit: Velocities, val: number): velocity => make(Measurement.Velocity, unit, val)
export const mkVolume = (unit: Volumes, val: number): volume => make(Measurement.Volume, unit, val)