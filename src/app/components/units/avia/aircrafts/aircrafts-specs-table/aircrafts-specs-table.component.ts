import { AfterViewInit, Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';

import { AircraftsSpecsTableDataSource } from './aircrafts-specs-table-datasource';
import { AircraftsSpecsTableItem } from './AircraftsSpecsTableItem';

interface DisplayScheme {
  value: string;
  viewValue: string;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush, // else caused ExpressionChangedAfterItHasBeenCheckedError on paginator
  selector: 'app-aircrafts-specs-table',
  templateUrl: './aircrafts-specs-table.component.html',
  styleUrls: ['./aircrafts-specs-table.component.scss']
})

export class AircraftsSpecsTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<AircraftsSpecsTableItem>;
  dataSource: AircraftsSpecsTableDataSource;

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
    this.dataSource = new AircraftsSpecsTableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
