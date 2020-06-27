import { Injectable } from '@angular/core';
import { airplanesFullTechSpecs } from './tech.specs';
import { AirplaneSpecs as AirplaneTechSpecs, AirplaneSpecs } from 'src/app/_entities/avia/aircrafts/entities';
import { Observable, Observer } from 'rxjs';

const msSimulatedDelay = 400;

@Injectable({
  providedIn: 'root'
})

export class AirplanesService {
  constructor() { }

  techSpecs(): AirplaneTechSpecs[] {
    return airplanesFullTechSpecs;
  }

  techSpecsAsync(): Observable<AirplaneSpecs[]> {
    return Observable.create(async function (observer: Observer<AirplaneSpecs>) {
      for (let i = 0; i < airplanesFullTechSpecs.length; i++) {
        await new Promise(x => setTimeout(x, msSimulatedDelay)); // simplest delay: courtesy of https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
        observer.next(airplanesFullTechSpecs[i]);
      };
      observer.complete();
    });
  }
}
