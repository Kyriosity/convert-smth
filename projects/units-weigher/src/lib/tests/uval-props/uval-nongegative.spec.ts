import { UValErr, ERR_MSG_VALUE_CANTBE_NEGATIVE, } from '../../cors/z_barrel';
import { meter, kilogram, kilometersHour, kelvin, newton, rankine, celsius, fahrenheit, TemperatureUnits, } from "../../def/z_barrel";

describe(`uval-feature-pemanentra-nonnegative`, () => {
    it('setting minus value on non-negative throws', () => {
        const subj = kilogram(1)
        subj.val = 0
        expect(subj.nonNegative).toBe(true)

        expect(function () { subj.val = -1 }).toThrow(new UValErr(ERR_MSG_VALUE_CANTBE_NEGATIVE))
    });

    it(`instantiating non-negative w/ minus value throws`, () => {
        expect(function () { meter(-100) }).toThrow(new UValErr(ERR_MSG_VALUE_CANTBE_NEGATIVE))
    })

    it(`negative values valid on certain measures`, () => {
        const subj = kilometersHour(-1)
        expect(subj.nonNegative).toBe(false)

        expect(subj.val).toEqual(-1)
        expect(newton(-100).val).toEqual(-100)
    })
})

describe(`uval-feature-relative-nonnegative`, () => {
    it(`setting negative value valid`, () => {
        const subjC = celsius(100)
        const subjF = fahrenheit(200)

        subjC.val *= -1;
        subjF.val *= -1;
    })

    it(`instantiating negative value valid`, () => {
        celsius(-100)
        fahrenheit(-200)
    })
    
    it(`setting negative Kelvin throws`, () => {
        const subj = kelvin(0)
        subj.val = 10
        expect(subj.nonNegative).toBe(true)

        expect(function () { subj.val = -1 }).toThrow(new UValErr(ERR_MSG_VALUE_CANTBE_NEGATIVE))
    })

    it(`intstantiating negative Rankine throws`, () => {
        expect(function () { rankine(-100) }).toThrow(new UValErr(ERR_MSG_VALUE_CANTBE_NEGATIVE))
    })
})
