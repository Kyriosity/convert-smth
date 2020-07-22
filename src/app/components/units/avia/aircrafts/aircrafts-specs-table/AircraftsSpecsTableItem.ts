import { lgth, velo, mass, vol, UValErr } from 'units-weigher';
import { AirplaneSpecs, AirplaneManufacturer } from 'src/app/_entities/avia/aircrafts/entities';
import { MachineDesignation } from 'src/app/_entities/avia/eintities';


export interface AircraftsSpecsTableItem {
    id: number;
    brand: string;
    name: string;
    
    range: lgth; 
    cruiseSpeed: velo;
    ceiling: lgth;
    payload: mass;
    fuelCapacity: vol;

    seats: string;
    cockpitCrew: number;
    powerplant: number;

    firstFlight: Date;
    price2020: number;
  }

export module Digest {

    export function from(item: AirplaneSpecs): AircraftsSpecsTableItem {
        if (!item)
            throw new UValErr('no specs submitted');

        const digest: AircraftsSpecsTableItem = {
            id: item.unid,

            brand: AirplaneManufacturer[item.designation.brand],
            name: designate(item.designation),

            range: item.performance.range,
            cruiseSpeed: item.performance.cruiseSpeed,
            ceiling: item.performance.serviceCeiling,
            payload: item.weights.payload,
            fuelCapacity: item.performance.fuelCapacity,

            seats: 'airlinerDerivative' in item? '(freighter)' : (<number>item['maxSeats']).toLocaleString(),
            cockpitCrew: item.cockpitCrew.length,
            powerplant: item.powerplant.length,

            firstFlight: item.firstFlight,
            price2020: item.listPrice2020,
        };
        return digest;
    }

    function designate(item: MachineDesignation): string {
        if (!item)
            return '- none -';

        return `${item.name ? item.name + " " : ''}${item.family ? item.family : ''}${item.serie ? `-${item.serie}` : ''}${item.variant ? "-" + item.variant : ''}${item.modification? item.modification : ''}`;
    }
}