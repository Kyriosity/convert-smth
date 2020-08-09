import { celsius, TemperatureUnits, fahrenheit, kelvin, rankine } from "../../def/z_barrel"
import { IWeigher } from '../../weigher/iWeigher'
import { Temperature } from '../../weigher/measures/Temperature'

describe(`uval-feature-permanent-nonnegative`, () => {
    let weigher!: IWeigher
    beforeAll(() => {
        weigher = new Temperature()
    })

    it(`water-freezing-point`, () => {
        const subj = celsius(0)

        weigher.convert(subj, TemperatureUnits.Fahrenheit)
        expect(subj.val).toEqual(32)

        weigher.convert(subj, TemperatureUnits.Kelvin)
        expect(subj.val).toEqual(273.15)

        weigher.convert(subj, TemperatureUnits.Rankine)
        expect(subj.val).toEqual(491.67)

        weigher.convert(subj, TemperatureUnits.Celsius)
        expect(subj.val).toEqual(0)
    })

    it(`water-boiling-point`, () => {
        const boilR = 671.64102
        const subj = rankine(boilR)

        weigher.convert(subj, TemperatureUnits.Kelvin)
        expect(subj.val).toEqual(373.1339)

        weigher.convert(subj, TemperatureUnits.Fahrenheit)
        expect(subj.val).toEqual(211.97102)

        weigher.convert(subj, TemperatureUnits.Celsius)
        expect(subj.val).toEqual(99.9839)

        weigher.convert(subj, TemperatureUnits.Rankine)
        expect(subj.val).toEqual(boilR)
    })

    it(`absolut-zero`, () => {
        const subj = kelvin(0)

        weigher.convert(subj, TemperatureUnits.Celsius)
        expect(subj.val).toEqual(-273.15)

        weigher.convert(subj, TemperatureUnits.Rankine)
        expect(subj.val).toEqual(0)

        weigher.convert(subj, TemperatureUnits.Fahrenheit)
        expect(subj.val).toEqual(-459.67)

        weigher.convert(subj, TemperatureUnits.Kelvin)
        expect(subj.val).toEqual(0)

    })

    it(`media2020`, () => {
        const subj = fahrenheit(451)

        weigher.convert(subj, TemperatureUnits.Celsius)
        expect(subj.val).toEqual(232.7)

        weigher.convert(subj, TemperatureUnits.Kelvin)
        expect(subj.val).toEqual(505.928)

        weigher.convert(subj, TemperatureUnits.Rankine)
        expect(subj.val).toEqual(910.67)

        weigher.convert(subj, TemperatureUnits.Fahrenheit)
        expect(subj.val).toEqual(451)
    })
})