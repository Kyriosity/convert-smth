import { AfterViewInit, Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';

import { AircraftsDescrTableDataSource } from './aircrafts-descr-table-datasource';
import { AircraftDescrTableItem } from './AircraftDescrTableItem';

interface DisplayScheme {
  value: string;
  viewValue: string;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush, // else caused ExpressionChangedAfterItHasBeenCheckedError on paginator
  selector: 'app-aircrafts-descr-table',
  templateUrl: './aircrafts-descr-table.component.html',
  styleUrls: ['./aircrafts-descr-table.component.scss']
})

export class AircraftsDescrTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<AircraftDescrTableItem>;
  dataSource: AircraftsDescrTableDataSource;

  get SelectedUnitsScheme() { return this._selectedUnitsScheme; }
  set SelectedUnitsScheme(value: string) {
    this.dataSource.convert(value);
    this._selectedUnitsScheme = value;
  }
  private _selectedUnitsScheme = "data";

  unitSchemes: DisplayScheme[] = [
    { value: 'data', viewValue: 'as in loaded data' },
    { value: 'metric', viewValue: 'metric values' },
    { value: 'us-avia', viewValue: 'N. America avia' },
  ];

  displayedColumns = ['brand', 'name', 'firstFlight', 'range', 'rangeKm', 'cruiseSpeed', 'cruiseMach',
    'ceiling', 'payload', 'fuelCapacity', 'seats', 'cockpitCrew', 'powerplant', 'price2020'];

  ngOnInit() {
    this.dataSource = new AircraftsDescrTableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
