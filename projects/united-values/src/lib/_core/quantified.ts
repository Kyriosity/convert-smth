import { Unit } from './units'

export interface Quantified<U extends Unit> {
    readonly unit: U
    readonly value: number
}

export interface IConvert<U extends Unit> {
    to(unit?: U): Quantified<U>
}

export interface IArithmeticOutput<U extends Unit> {
    plus(uval: Quantified<U>): Quantified<U>
    minus(uval: Quantified<U>): Quantified<U>
}

export interface IArithmeticCumulate<U extends Unit>{
    add(uval: Quantified<U>): void
    subtract(uval: Quantified<U>): void
}

export interface IArithmetic<U extends Unit> extends IArithmeticOutput<U>, IArithmeticCumulate<U> {}

