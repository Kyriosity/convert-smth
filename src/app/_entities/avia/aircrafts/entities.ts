import { DomainEntity } from 'src/app/_core/basics'
import { Engine, MachineDesignation, CargoBay, CrewPerson,
  FlyingMachineSize, FlyingMachineWeights, FlyingMachinePerformance, FlyingMachineTakeOff }
   from '../eintities'

export interface AircraftNfo extends DomainEntity {
    designation: MachineDesignation,
    measurements: FlyingMachineSize,
    weights: FlyingMachineWeights,
    performance: FlyingMachinePerformance,
    takeoff?: FlyingMachineTakeOff,
    cargoBay?: CargoBay,
  
    cockpitCrew: CrewPerson[],
    powerplant: Engine[]
  
    firstFlight: Date,
    listPriceMlnUsd2020?: number
  }

export interface LinerNfo extends AircraftNfo {
  maxSeats: number
}

export interface CargoAirplaneNfo extends AircraftNfo {
  airlinerDerivative: boolean,
  unpressurized?: boolean
}

export interface entityNaming {
  short: string
  full?: string
  details?: string
}