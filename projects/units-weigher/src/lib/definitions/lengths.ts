import { UVal } from '../cornerstones/base';

export class length extends UVal<LengthUnits> {
    get NonNegative() { return true }

    get asX2(): area { return new area(this.Unit, this.Val); }
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

export function picometre(val: number): length {
    return new length(LengthUnits.picometre, val);
}

export function nanometre(val: number): length {
    return new length(LengthUnits.nanometre, val);
}

export function micrometre(val: number): length {
    return new length(LengthUnits.micrometre, val);
}

export function millimeter(val: number): length {
    return new length(LengthUnits.millimetre, val);
}

export function centimeter(val: number): length {
    return new length(LengthUnits.centimetre, val);
}

export function decimetre(val: number): length {
    return new length(LengthUnits.decimetre, val);
}

export function meter(val: number): length {
    return new length(LengthUnits.metre, val);
}

export function decameter(val: number): length { return new length(LengthUnits.decametre, val); }

export function hectometre(val: number): length {
    return new length(LengthUnits.hectometre, val);
}

export function kilometer(val: number): length {
    return new length(LengthUnits.kilometre, val);
}

export function megametre(val: number): length {
    return new length(LengthUnits.megametre, val);
}

export function gigametre(val: number): length { return new length(LengthUnits.gigametre, val); }

export function terametre(val: number): length { return new length(LengthUnits.terametre, val); }

// English

// English international

export function thou(val: number): length { return new length(LengthUnits.thou, val); }

export function inch(val: number): length { return new length(LengthUnits.inch, val); }

export function foot(val: number): length { return new length(LengthUnits.foot, val); }

export function yard(val: number): length { return new length(LengthUnits.yard, val); }

export function chain(val: number): length { return new length(LengthUnits.chain, val); }

export function furlong(val: number): length { return new length(LengthUnits.furlong, val); }

export function mile(val: number): length { return new length(LengthUnits.mile, val); }

export function league(val: number): length { return new length(LengthUnits.league, val); }

//   Maritime units
export function fathom(val: number): length { return new length(LengthUnits.fathom, val); }

export function cable(val: number): length { return new length(LengthUnits.cable, val); }

export function nauticalMile(val: number): length { return new length(LengthUnits.nauticalMile, val); }

//   Gunter's survey
export function link(val: number): length { return new length(LengthUnits.link, val); }

export function rod(val: number): length { return new length(LengthUnits.rod, val); }
