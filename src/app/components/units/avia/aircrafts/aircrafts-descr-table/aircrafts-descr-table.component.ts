import { AfterViewInit, Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTable } from '@angular/material/table'

import { AircraftsDescrTableDataSource } from './aircrafts-descr-table-datasource'
import { AircraftDigestPlain } from './aircraft.digest.plain'
import { propsAvia } from 'src/app/_data/avia/aircrafts/props.avia'
import { Comparer } from 'src/app/_core/sorting/compare'

interface DisplayScheme {
  value: string
  viewValue: string
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush, // else caused ExpressionChangedAfterItHasBeenCheckedError on paginator
  selector: 'app-aircrafts-descr-table',
  templateUrl: './aircrafts-descr-table.component.html',
  styleUrls: ['./aircrafts-descr-table.component.scss']
})

export class AircraftsDescrTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator
  @ViewChild(MatSort) sort: MatSort
  @ViewChild(MatTable) table: MatTable<AircraftDigestPlain>
  dataSource: AircraftsDescrTableDataSource

  get SelectedUnitsScheme() { return this.#selectedUnitsScheme }
  set SelectedUnitsScheme(value: string) {
    this.dataSource.convert(value)
    this.#selectedUnitsScheme = value
  }
  #selectedUnitsScheme = "data"

  unitSchemes: DisplayScheme[] = [
    { value: 'data', viewValue: 'as in loaded data' },
    { value: 'metric', viewValue: 'metric values' },
    { value: 'us-avia', viewValue: 'N. America avia' },
  ]

  displayedColumns = [propsAvia.designation.brand, propsAvia.designation.title, propsAvia.firstFlight,
    propsAvia.performance.range, 'rangeKm', 
    propsAvia.performance.cruiseSpeed, 'cruiseMach',
    propsAvia.performance.serviceCeiling, propsAvia.weight.maxTakeoff, propsAvia.performance.fuelCapacity, 
    propsAvia.maxSeats, propsAvia.cockpitCrew, propsAvia.powerplant, 
    propsAvia.listPriceMlnUsd2020]

  ngOnInit() {
    this.dataSource = new AircraftsDescrTableDataSource(new Comparer())
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort
    this.dataSource.paginator = this.paginator
    this.table.dataSource = this.dataSource
  }
}
