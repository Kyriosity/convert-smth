import { distance, velocity, mass, volume, UValErr } from 'units-weigher';
import { AircraftDescription } from 'src/app/_entities/avia/aircrafts/entities';
import { MachineDesignation } from 'src/app/_entities/avia/eintities';
import { shortName } from 'src/app/_entities/avia/aircrafts/manufacturers';

const uNonBreakingHyphen = '\u2011'

export interface AircraftDescrTableItem {
    id: number;
    brand: string;
    name: string;
    
    range: distance; 
    cruiseSpeed: velocity;
    ceiling: distance;
    maxTakeoffWeight: mass;
    fuelCapacity: volume;

    seats: number;
    cockpitCrew: number;
    powerplant: number;

    firstFlight: Date;
    priceM2020: number;
  }

export module Digest {

    export function from(item: AircraftDescription): AircraftDescrTableItem {
        if (!item)
            throw new UValErr('no item submitted');

        const digest: AircraftDescrTableItem = {
            id: item.unid,

            brand: shortName(item.designation.brand),
            name: designate(item.designation),

            range: item.performance.range,
            cruiseSpeed: item.performance.cruiseSpeed,
            ceiling: item.performance.serviceCeiling,
            maxTakeoffWeight: item.weights.maxTakeoff,
            fuelCapacity: item.performance.fuelCapacity,

            seats: 'airlinerDerivative' in item? NaN : item['maxSeats'], // KD, ToDo: some 'nameof' instead of literals
            cockpitCrew: item.cockpitCrew.length,
            powerplant: item.powerplant.length,

            firstFlight: item.firstFlight,
            priceM2020: item.listPriceMlnUsd2020,
        };
        return digest;
    }

    function designate(item: MachineDesignation): string {
        if (!item)
            return '- none -';

        return `${item.name ? item.name + " " : ''}${item.family ? item.family : ''}${item.serie ? `${uNonBreakingHyphen}${item.serie}` : ''}${item.variant ? `${uNonBreakingHyphen}${item.variant}` : ''}${item.modification? item.modification : ''}`;
    }
}