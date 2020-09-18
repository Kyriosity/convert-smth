import { DataSource } from '@angular/cdk/collections'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { map, delay } from 'rxjs/operators'
import { Observable, of as observableOf, merge } from 'rxjs'
import { AircraftDescrTableItem, Digest } from './AircraftDescrTableItem'
import { fullAircraftsList } from 'src/app/_data/avia/aircrafts/start-data'

export class AircraftsDescrTableDataSource extends DataSource<AircraftDescrTableItem> {
  data: AircraftDescrTableItem[] = []
  paginator: MatPaginator
  sort: MatSort

  isLoading = false
  readonly #msSimulatedDelay = 1000

  constructor() {
    super()
  }

  /**
   * Connect this data source to the table. The table will only update when the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<AircraftDescrTableItem[]> {
    this.isLoading = true
    this.data = fullAircraftsList.map(x => Digest.from(x))

    // Combine everything that affects the rendered data into one update stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ]

    const obs = merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]))
    }), delay(this.#msSimulatedDelay))
    obs.subscribe(_ => this.isLoading = false)

    return obs
  }

   convert(schemeId: string) {
    this.isLoading = true

    setTimeout(() => { this.isLoading = false }, this.#msSimulatedDelay)
  }

  disconnect() { 
    // clean up connections
    // free held resource
  }

  /**
   * Paginate the data (client-side). If server-side replace by request to the server.
   */
  private getPagedData(data: AircraftDescrTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize
    return data.splice(startIndex, this.paginator.pageSize)
  }

  /**
   * Sort the data (client-side). If server-side replace by request to the server.
   */
  private getSortedData(data: AircraftDescrTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc'
      switch (this.sort.active) {
        case 'brand': return compare(a.brand, b.brand, isAsc)
        case 'name': return compare(a.name, b.name, isAsc)
        case 'id': return compare(+a.id, +b.id, isAsc)
        case 'cockpitCrew': return compare(a.cockpitCrew, b.cockpitCrew, isAsc)
        case 'firstFlight': return dateCompare(a.firstFlight, b.firstFlight)
        default: return 0
      }
    })
  }
}

function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1)
}

function dateCompare(a: Date, b: Date): number {
  return a < b ? -1 : 1
}

function boolCompare(a: boolean, b: boolean): number {
  return a == b ? 0 : (a ? 1 : -1)
}

