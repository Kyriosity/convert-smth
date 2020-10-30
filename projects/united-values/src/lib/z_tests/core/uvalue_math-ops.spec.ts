import { mile } from "../../uvalue/instances";

describe('uvalue_math-ops', () => { 
      it('add', () => {
        const walk = mile(100.5) 
        walk.add(mile(30.7))
        expect(walk.value).toBe(131.2)
     });    
})