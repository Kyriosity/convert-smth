import { area, Dimensions, force, len, mass, speed, volume } from 'united-values'
import { AircraftBuilders } from './aircrafts/manufacturers'

export interface CrewPerson {}

export interface Engine { }

export interface FlyingMachineSize {
    airframe: Dimensions,
    wingSpan: len,
    wingArea?: area,
}

export interface FlyingMachinePerformance {
    range: len,
    cruiseSpeed: speed,
    maxSpeed?: speed,
    serviceCeiling: len,
    thrust?: force,

    fuelCapacity?: volume,
    // cruiseFuelConsumption?: VolumeTimeFuelConsumption,
}

export interface FlyingMachineWeights {
    empty: mass,
    maxTakeoff: mass,
    maxLanding?: mass,
    payload?: mass,
}

export interface FlyingMachineTakeOff {
    run: len,
    minSpeed?: speed,
    thrust?: force,
}

export interface CargoBay {
    capacity: volume,

    dims?: Dimensions,
}

export interface MachineDesignation {
    brand: AircraftBuilders,
    title?: string,

    serie?: number,
    variant?: number,
    modification?: string,

    family?: string,
}
