import { UVal } from '../cors/z_barrel';


export class length extends UVal<LengthUnits> { 
    NonNegative = () => true

    get asX2(): area { return new area(this.unit, this.val); }
}

export class area extends length {

}

export interface Dimensions {
    length?: length,
    height?: length
    width?: length,
}

export enum LengthUnits {
    picometre,
    nanometre,
    micrometre,
    millimetre,
    decimetre,
    centimetre,
    metre,
    decametre,
    hectometre,
    kilometre,
    megametre,
    gigametre,
    terametre,

    // English int.
    thou,
    inch,
    foot,
    yard,
    chain,
    furlong,
    mile,
    league,

    // maritime units
    fathom,
    cable,
    nauticalMile,

    // Gunter's survey
    link,
    rod
}

function of(unit: number, val: number) { return new length(unit, val) }

export var picometre = (val: number) => of(LengthUnits.picometre, val)
export var nanometre = (val: number) => of(LengthUnits.nanometre, val)
export var micrometre = (val: number) => of(LengthUnits.micrometre, val)
export var millimeter = (val: number) => of(LengthUnits.millimetre, val)
export var centimeter = (val: number) => of(LengthUnits.centimetre, val)
export var decimetre = (val: number) => of(LengthUnits.decimetre, val)
export var meter = (val: number) => of(LengthUnits.metre, val)
export var decamete = (val: number) => of(LengthUnits.decametre, val)
export var hectometre = (val: number) => of(LengthUnits.hectometre, val)
export var kilometer = (val: number) => of(LengthUnits.kilometre, val)
export var megametre = (val: number) => of(LengthUnits.megametre, val)
export var gigametre = (val: number) => of(LengthUnits.gigametre, val)
export var terametre = (val: number) => of(LengthUnits.terametre, val)

// English

// English international

export var thou = (val: number) => of(LengthUnits.thou, val)
export var inch = (val: number) => of(LengthUnits.inch, val)
export var foot = (val: number) => of(LengthUnits.foot, val)
export var yard = (val: number) => of(LengthUnits.yard, val)
export var chain = (val: number) => of(LengthUnits.chain, val)
export var furlong = (val: number) => of(LengthUnits.furlong, val)
export var mile = (val: number) => of(LengthUnits.mile, val)
export var league = (val: number) => of(LengthUnits.league, val)

//   Maritime units
export var fathom = (val: number) => of(LengthUnits.fathom, val)
export var cable = (val: number) => of(LengthUnits.cable, val)
export var nauticalMile = (val: number) => of(LengthUnits.nauticalMile, val)

//   Gunter's survey
export var link = (val: number) => of(LengthUnits.link, val)
export var rod = (val: number) => of(LengthUnits.rod, val)