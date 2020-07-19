import { UVal } from '../cors/!barrel'

export class mass extends UVal<MassUnits> { 
    get NonNegative() { return true } 
}

export enum MassUnits {
    picogramme,
    nanogramme,
    microgramme,
    milligramme,
    gramme,
    kilogramme,
    centner,
    tonne,
    megatonne,
    gigatonne,

    // US customary
    grain,
    dram,
    ounce,
    pound,
    quarter,
    hundredweight,
    usTon,
    ukTon,
}

function of(unit: number, val: number) { return new mass(unit, val) }

// METRIC
export var picogram = (val: number) => of(MassUnits.picogramme, val)
export var nanogram = (val: number) => of(MassUnits.nanogramme, val)
export var microgram = (val: number) => of(MassUnits.microgramme, val)
export var milligram = (val: number) => of(MassUnits.milligramme, val)
export var gram = (val: number) => of(MassUnits.gramme, val)
export var kilogram = (val: number) => of(MassUnits.kilogramme, val)
export var centner = (val: number) => of(MassUnits.centner, val)
export var tonne = (val: number) => of(MassUnits.tonne, val)
export var megatonne = (val: number) => of(MassUnits.megatonne, val)
export var gigatonne = (val: number) => of(MassUnits.gigatonne, val)

export const Kilogram = kilogram(NaN).Unit;

// US customary
export var ounce = (val: number) => of(MassUnits.ounce, val)
export var pound = (val: number) => of(MassUnits.pound, val)