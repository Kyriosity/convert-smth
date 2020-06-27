import { AirplaneManufacturer } from './aircrafts/entities';
import { length, area, mass, velocity, volume, force, Dimensions } from 'units-weigher';

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

    fuelCapacity: volume,
    // cruiseFuelConsumption?: VolumeTimeFuelConsumption,
}

export interface FlyingMachineWeights {
    empty: mass,
    maxTakeoff: mass,
    maxLanding: mass,
    payload: mass,
}

export interface FlyingMachineTakeOff {
    run: length,
    minSpeed?: velocity,
    thrust?: force,
}

export interface CargoSpecs {
    capacity: volume,

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
