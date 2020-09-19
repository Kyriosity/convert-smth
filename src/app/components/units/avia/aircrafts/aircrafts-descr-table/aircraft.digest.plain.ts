import { distance, velocity, mass, volume, UValErr } from 'units-weigher'
import { AircraftNfo } from 'src/app/_entities/avia/aircrafts/entities'
import { MachineDesignation } from 'src/app/_entities/avia/eintities'
import { shortName } from 'src/app/_entities/avia/aircrafts/manufacturers'
import { propsAvia } from 'src/app/_data/avia/aircrafts/props.avia'

const uNonBreakingHyphen = '\u2011'

export interface AircraftDigestPlain {
    unid: number
    brand: string
    title: string
    
    range: distance
    cruiseSpeed: velocity
    serviceCeiling: distance
    maxTakeoff: mass
    fuelCapacity: volume

    maxSeats: number
    cockpitCrew: number
    powerplant: number

    firstFlight: Date
    listPriceMlnUsd2020: number
  }

export module Digest {

    export function flatten(source: AircraftNfo): AircraftDigestPlain {
        if (!source)
            throw new UValErr('no source submitted')

        const digest: AircraftDigestPlain = {
            unid: source.unid,

            brand: shortName(source.designation.brand),
            title: designate(source.designation),

            range: source.performance.range,
            cruiseSpeed: source.performance.cruiseSpeed,
            serviceCeiling: source.performance.serviceCeiling,
            maxTakeoff: source.weights.maxTakeoff,
            fuelCapacity: source.performance.fuelCapacity,

            maxSeats: 'airlinerDerivative' in source? NaN : source[propsAvia.maxSeats],
            cockpitCrew: source.cockpitCrew.length,
            powerplant: source.powerplant.length,

            firstFlight: source.firstFlight,
            listPriceMlnUsd2020: source.listPriceMlnUsd2020,
        }
        return digest
    }

    function designate(item: MachineDesignation): string {
        if (!item)
            return '- none -'

        return `${item.title ? item.title + " " : ''}${item.family ? item.family : ''}${item.serie ? `${uNonBreakingHyphen}${item.serie}` : ''}${item.variant ? `${uNonBreakingHyphen}${item.variant}` : ''}${item.modification? item.modification : ''}`
    }
}