import { AirplaneManufacturer } from './aircrafts/entities';
import { lgth, area, mass, velo, vol, frc, Dimensions } from 'units-weigher';

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
