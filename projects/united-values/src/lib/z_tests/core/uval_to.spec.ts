import { Kilogram, kilogram, kilonewton } from "../../uvalues/instances";

describe('uvalue_to', () => { 
    it('no arg', () => {
    const val = 12.34567
      const bob = kilogram(val)
      const bob2 = bob.to(Kilogram)
      expect(bob2.value).toBe(val)
      expect(Kilogram === bob2.unit)
   });
   
   it('same unit', () => {
    const thrust = 8200 // kN  1,800,000 lbf 
      const raptor = kilonewton(thrust) 
      // const bob2 = bob.to()
      // expect(bob2.val).toBe(val)
      // expect(Kilogram === bob2.unit)
   });
   
})