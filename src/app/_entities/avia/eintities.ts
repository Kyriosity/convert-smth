
import { length, area, mass, velocity, volume,force, Dimensions } from 'units-weigher';
import { AircraftBuilders } from './aircrafts/manufacturers';

export interface CrewPerson {}

export interface Engine { }

export interface FlyingMachineMeasurements {
    airframe: Dimensions,
    wingSpan: length,
    wingArea: area,
}

export interface FlyingMachinePerformance {
    range: length,
    cruiseSpeed: velocity,
    maxSpeed?: velocity,
    serviceCeiling: length,
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
    run: length,
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
