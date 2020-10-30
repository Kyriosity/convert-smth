import { Quantified } from '../_core/quantified';
import { UValue } from '../uvalue/_uvalue'
import { Lengths, Speeds, Unit } from "../_core/units"

import { kilometer } from '../uvalue/instances'
import { len } from '../_core/measures';
import { speed } from 'dist/units-weigher/public-api';

describe('playground', () => { 
      it('cast', () => {
        const toMars: len = { unit: Lengths.kilometre, value: 68552 * 1000000 }
        const velo: speed = { unit: Speeds.Mach, value: 50} 
        const uval = uCast(toMars)
        uval.add(kilometer(100))
        expect(uval.value).toBe(111 + 68552 * 1000000)
     });    
})

function uCast<U extends Unit>(quantified: Quantified<U>): UValue<U> {
    let uval = new UValue<U>(quantified.unit, quantified.value)
    return uval
}