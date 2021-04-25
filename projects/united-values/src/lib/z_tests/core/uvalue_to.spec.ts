import { kilometer, kilonewton } from "../../uvalue/instances";
import { Forces, Lengths } from '../../_core/units';

describe('uvalue-to', () => {
   it('clone ', () => {
      const toMoon = kilometer(384400)
      const andBack = toMoon.to()
      expect(toMoon.value).toEqual(andBack.value)

      const andForth = andBack.to(toMoon.unit)
      expect(andForth.value).toEqual(toMoon.value)
      expect(andForth.unit).toEqual(toMoon.unit)
   })

   it('xlate', () => {
      const knThrust = 8200 
      const raptor = kilonewton(knThrust)
      const inCanaveral = raptor.to(Forces.poundforce)
      expect(inCanaveral.value).toBe(1800000)
   })

})