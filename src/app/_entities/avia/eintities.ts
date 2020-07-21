import { AirplaneManufacturer } from './aircrafts/entities';
import { lgth, area, mass, velocity, vol, force, Dimensions } from 'units-weigher';

export interface CrewPerson {}

export interface Engine { }

export interface FlyingMachineMeasurements {
    airframe: Dimensions,
    wingSpan: lgth,
    wingArea: area,
}

export interface FlyingMachinePerformance {
    range: lgth,
    cruiseSpeed: velocity,
    maxSpeed?: velocity,
    serviceCeiling: lgth,
    thrust?: force,

    fuelCapacity?: vol,
    // cruiseFuelConsumption?: VolumeTimeFuelConsumption,
}

export interface FlyingMachineWeights {
    empty: mass,
    maxTakeoff: mass,
    maxLanding: mass,
    payload: mass,
}

export interface FlyingMachineTakeOff {
    run: lgth,
    minSpeed?: velocity,
    thrust?: force,
}

export interface CargoSpecs {
    capacity: vol,

    bay?: Dimensions,
}


export interface MachineDesignation {
    brand: AirplaneManufacturer,
    name?: string,

    serie?: number,
    variant?: number,
    modification?: string,

    family?: string,
    remarks?: string
}
