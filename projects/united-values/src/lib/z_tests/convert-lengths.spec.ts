
// describe('convert-lengths', () => {
//     it('1m is 1m', () => {
//         expect(Convert.lengthValue(1, LengthUnits.metre, LengthUnits.metre)).toBe(1);
//     });

//     it('1m == 1 000mm', () => {
//         expect(Convert.lengthValue(1, LengthUnits.metre, LengthUnits.millimetre)).toBe(1000);
//     });

//     it('5273cm == 5.273m', () => {
//         expect(Convert.lengthValue(5273, LengthUnits.centimetre, LengthUnits.metre)).toBe(52.73);
//     });

//     it('1.54321km == 154 321cm', () => {
//         expect(Convert.lengthValue(1.54321, LengthUnits.kilometre, LengthUnits.centimetre)).toBe(154321);
//     });

//     it('28mcm == 0.028mm', () => {
//         expect(Convert.lengthValue(28, LengthUnits.micrometre, LengthUnits.millimetre)).toBe(0.028);
//     });

//     it('terametre makes quite many picometre', () => {
//         expect(Convert.lengthValue(1, LengthUnits.terametre, LengthUnits.picometre)).toBe((10 ** 12) ** 2);
//     });

//     it('foot vs. inch', () => {
//         expect(Convert.lengthValue(1, LengthUnits.foot, LengthUnits.inch)).toBe(12);
//     });

//     it('inch vs. foot', () => {
//         expect(Convert.lengthValue(12, LengthUnits.inch, LengthUnits.foot)).toBe(1);
//     });

//     it('metre to feet', () => {
//         expect(Convert.lengthValue(1, LengthUnits.metre, LengthUnits.foot)).toBe(3.28084);
//     });

//     it('feet to metre', () => {
//         expect(Convert.lengthValue(1, LengthUnits.foot, LengthUnits.metre)).toBe(.3048);
//     });

//     it('1 inch to mm', () => {
//         expect(Convert.lengthValue(1, LengthUnits.inch, LengthUnits.millimetre)).toBe(25.4);
//     });

//     it('25.4 mm to inch', () => {
//         expect(Convert.lengthValue(25.4, LengthUnits.millimetre, LengthUnits.inch)).toBe(1);
//     });
// })

