import { Injectable } from '@angular/core'
import { Quantified } from './_core/quantified'
import { Unit } from './_core/units'

@Injectable({
  providedIn: 'root'
})

export class UnitedValuesService {
  // private weighers: weighersStore
  // constructor() { this.weighers = new weighersStore() }

  // convert<M extends Quantified<Unit>>(subj: M, to: Unit): Quantified<Unit> {
  //   const weigher = this.weighers.for(subj)
  //   return weigher.eval(subj, to)
  // }
}
