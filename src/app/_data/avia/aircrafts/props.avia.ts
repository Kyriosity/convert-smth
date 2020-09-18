import { EnsureExistingMemberName } from 'src/app/_core/basics';
import { AircraftDescription, LinerDescription } from 'src/app/_entities/avia/aircrafts/entities';
import { CargoBay, FlyingMachinePerformance, FlyingMachineSize, FlyingMachineTakeOff, FlyingMachineWeights, MachineDesignation } from 'src/app/_entities/avia/eintities';

const _x_ = EnsureExistingMemberName;

export const propsAvia = {
    firstFlight: _x_<AircraftDescription>("firstFlight"),
    cockpitCrew: _x_<AircraftDescription>("cockpitCrew"),
    powerplant: _x_<AircraftDescription>("powerplant"),
    listPriceMlnUsd2020: _x_<AircraftDescription>("listPriceMlnUsd2020"),
    
    designation: {
        brand: _x_<MachineDesignation>("brand"),
        title: _x_<MachineDesignation>("title"),
        serie: _x_<MachineDesignation>("serie"),
        modification: _x_<MachineDesignation>("modification"),
        variant: _x_<MachineDesignation>("variant"),
        family: _x_<MachineDesignation>("family"),
    },
    size: {
        airframe: _x_<FlyingMachineSize>("airframe"),
        wingSpan: _x_<FlyingMachineSize>("wingSpan"),
        wingArea: _x_<FlyingMachineSize>("wingArea"),
    },
    performance: {
        range: _x_<FlyingMachinePerformance>("range"),
        cruiseSpeed: _x_<FlyingMachinePerformance>("cruiseSpeed"),
        maxSpeed: _x_<FlyingMachinePerformance>("maxSpeed"),
        serviceCeiling: _x_<FlyingMachinePerformance>("serviceCeiling"),
        thrust: _x_<FlyingMachinePerformance>("thrust"),
        fuelCapacity: _x_<FlyingMachinePerformance>("fuelCapacity"),
    },
    weight: {
        empty: _x_<FlyingMachineWeights>("empty"),
        maxTakeoff: _x_<FlyingMachineWeights>("maxTakeoff"),
        maxLanding: _x_<FlyingMachineWeights>("maxLanding"),
        payload: _x_<FlyingMachineWeights>("payload"),
    },
    takeoff: {
        run: _x_<FlyingMachineTakeOff>("run"),
        minSpeed: _x_<FlyingMachineTakeOff>("minSpeed"),
        thrust: _x_<FlyingMachineTakeOff>("thrust"),
    },
    cargoBay: {
        capacity: _x_<CargoBay>("capacity"),
        dims: _x_<CargoBay>("dims"),
    },

    maxSeats: _x_<LinerDescription>("maxSeats"),
} as const
