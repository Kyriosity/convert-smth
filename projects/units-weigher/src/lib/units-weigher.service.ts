import { Injectable } from '@angular/core'
import { Unit } from './core/units'
import { Measureable } from './core/z_barrel'
import { weighersStore } from './factories/weighers.store'

@Injectable({
  providedIn: 'root'
})

export class UnitsWeigherService {
  private weighers: weighersStore
  constructor() { this.weighers = new weighersStore() }

  differ<M extends Measureable<Unit>>(subj: M, to: M): number {
    const weigher = this.weighers.for(subj)
    return weigher.differ(subj, to)
  }

  convert<M extends Measureable<Unit>>(subj: M, to: Unit): Measureable<Unit> {
    const weigher = this.weighers.for(subj)
    return weigher.convert(subj, to)
  }
}
