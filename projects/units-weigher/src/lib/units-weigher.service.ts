import { Injectable } from '@angular/core'
import { Unit } from './core/units'
import { Measureable } from './core/z_barrel'
import { weighersStore } from './factories/weighersStore'

@Injectable({
  providedIn: 'root'
})

export class UnitsWeigherService {
   private weighers: weighersStore
  constructor() { this.weighers = new weighersStore() }

  differ<M extends Measureable<Unit>>(of: M, to: M): number {
    const weigher = this.weighers.for(of);
    return weigher.differ(of, to)
  }
}
