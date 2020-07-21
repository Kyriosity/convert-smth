import { Engine, MachineDesignation, CargoSpecs, CrewPerson,
  FlyingMachineMeasurements, FlyingMachineWeights, FlyingMachinePerformance, FlyingMachineTakeOff } from '../eintities';
import { DomainEntity } from '../../_shared/base.entities';

export enum AirplaneManufacturer {
  Wrights = "Wright", // brothers Orville and Wilbur Wright 
  Aerospatiale = "Aerospatiale", // Aérospatiale - french co which in cooperation with BAC have fulfilled Concorde program
  Airbus = "Airbus", // "Airbus Societas Europaea ",
  Antonov = "Antonov",
  ATR = "ATR", // "Aerei da Trasporto Regionale",
  Boeing = "Boeing", //"The Boeing Company",
  Bombardier = "Bombardier", // "Bombardier, Inc.",
  BAC = "BAC", // "British Aircraft Corporation",
  Cessna = "Cessna", // "Cessna Aircraft Company",
  Douglas = "Douglas", // "Douglas Aircraft Company",
  Embraer = "Embraer", // "Embraer Sociedade Anônima",
  Fokker = "Fokker",
  Gulfstream = "Gulfstream", //"Gulfstream Aerospace", 
  Sikorsky = "Sikorsky", // "Sikorsky Aircraft"
  AeroSpacelines= "AeroSpacelines", // Aero Spacelines, Inc. was an American aircraft manufacturer from 1960 to 1968 which made a name for itself by converting Boeing 377 Stratocruisers into the famous Guppy line of airplanes
}

export interface AirplaneSpecs extends DomainEntity {
    designation: MachineDesignation,
    measurements: FlyingMachineMeasurements,
    weights: FlyingMachineWeights,
    performance: FlyingMachinePerformance,
    takeoff?: FlyingMachineTakeOff,
    cargo?: CargoSpecs,
  
    cockpitCrew: CrewPerson[],
    powerplant: Engine[]
  
    firstFlight: Date,
    listPrice2020?: number // USD
  }


export interface AirlinerSpecs extends AirplaneSpecs {
  maxSeats: number
}

export interface CargoAirplaneSpecs extends AirplaneSpecs {
  airlinerDerivative: boolean,
  unpressurized?: boolean
}