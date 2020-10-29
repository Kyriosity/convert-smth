import { Injectable } from '@angular/core'
import { weighersStore } from './factories/weighers.store'
import { Quantified } from './_core/quantified'
import { Unit } from './_core/units'

@Injectable({
  providedIn: 'root'
})

export class UnitedValuesService {
  private weighers: weighersStore
  constructor() { this.weighers = new weighersStore() }

  differ<M extends Quantified<Unit>>(subj: M, to: M): number {
    const weigher = this.weighers.for(subj)
    return weigher.differ(subj, to)
  }

  convert<M extends Quantified<Unit>>(subj: M, to: Unit): Quantified<Unit> {
    const weigher = this.weighers.for(subj)
    return weigher.convert(subj, to)
  }
}
