import { Injectable } from '@angular/core'
import { fullAircraftsList } from './start-data'
import {AircraftNfo } from 'src/app/_entities/avia/aircrafts/entities'
import { Observable, Observer } from 'rxjs'

const msSimulatedDelay = 400

@Injectable({
  providedIn: 'root'
})

export class AirplanesService {
  constructor() { }

  descrList(): AircraftNfo[] {
    return fullAircraftsList
  }

  descrListAsync(): Observable<AircraftNfo[]> {
    return Observable.create(async function (observer: Observer<AircraftNfo>) {
      for (let i = 0; i < fullAircraftsList.length; i++) {
        await new Promise(x => setTimeout(x, msSimulatedDelay)) // simplest delay: courtesy of https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
        observer.next(fullAircraftsList[i])
      }
      observer.complete()
    })
  }
}
