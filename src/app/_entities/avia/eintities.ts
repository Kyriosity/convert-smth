import { AircraftBuilders } from './aircrafts/manufacturers';
import { distance, Dimensions, area, velocity, force, volume, mass } from 'units-weigher';


export interface CrewPerson {}

export interface Engine { }

export interface FlyingMachineMeasurements {
    airframe: Dimensions,
    wingSpan: distance,
    wingArea?: area,
}

export interface FlyingMachinePerformance {
    range: distance,
    cruiseSpeed: velocity,
    maxSpeed?: velocity,
    serviceCeiling: distance,
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
    run: distance,
    minSpeed?: velocity,
    thrust?: force,
}

export interface CargoBay {
    capacity: volume,

    dims?: Dimensions,
}

export interface MachineDesignation {
    brand: AircraftBuilders,
    name?: string,

    serie?: number,
    variant?: number,
    modification?: string,

    family?: string,
    remarks?: string
}
