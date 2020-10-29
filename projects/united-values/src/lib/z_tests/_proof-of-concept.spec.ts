import { UValue } from '../uvalues/_uvalue';
import { Quantified } from '../_core/quantified';
import { Lengths, Unit } from "../_core/units";
import { len } from '../../public-api';
import { kilometer } from '../uvalues/instances';

describe('playground', () => { 
      it('cast', () => {
        const toMars: len = { unit: Lengths.kilometre, value: 68552 * 1000000 } 
        const val2Mars = uCast(toMars)
        val2Mars.add(kilometer(100))
        expect(val2Mars.value).toBe(100 + 68552 * 1000000)
     });    
})

function uCast<U extends Unit>(normal: Quantified<U>): UValue<U> {
    let uval = normal as UValue<typeof normal.unit>
    return uval
}