
import { lgth, area, mass, velo, vol, frc, Dimensions } from 'units-weigher';
import { AircraftManufacturers } from './aircrafts/manufacturers';

export interface CrewPerson {}

export interface Engine { }

export interface FlyingMachineMeasurements {
    airframe: Dimensions,
    wingSpan: lgth,
    wingArea: area,
}

export interface FlyingMachinePerformance {
    range: lgth,
    cruiseSpeed: velo,
    maxSpeed?: velo,
    serviceCeiling: lgth,
    thrust?: frc,

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
    minSpeed?: velo,
    thrust?: frc,
}

export interface CargoBay {
    capacity: vol,

    dims?: Dimensions,
}

export interface MachineDesignation {
    brand: AircraftManufacturers,
    name?: string,

    serie?: number,
    variant?: number,
    modification?: string,

    family?: string,
    remarks?: string
}
