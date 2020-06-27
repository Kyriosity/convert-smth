import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map, delay } from 'rxjs/operators';
import { Observable, of as observableOf, merge, of } from 'rxjs';
import { AircraftsSpecsTableItem, Digest } from './AircraftsSpecsTableItem';
import { airplanesFullTechSpecs } from 'src/app/_data/avia/aircrafts/tech.specs';

/**
 * Data source for the AircraftsSpecsTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class AircraftsSpecsTableDataSource extends DataSource<AircraftsSpecsTableItem> {
  data: AircraftsSpecsTableItem[] = [];
  paginator: MatPaginator;
  sort: MatSort;

  isLoading = false;
  private readonly msSimulatedDelay = 1000;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<AircraftsSpecsTableItem[]> {
    this.isLoading = true;
    this.data = airplanesFullTechSpecs.map(x => Digest.from(x));

    // Combine everything that affects the rendered data into one update stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    let obs = merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }), delay(this.msSimulatedDelay));
    obs.subscribe(_ => this.isLoading = false);

    return obs;
  }

   convert(schemeId: string) {
    this.isLoading = true;

    setTimeout(() => { this.isLoading = false; }, this.msSimulatedDelay);
  
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() { }

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: AircraftsSpecsTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: AircraftsSpecsTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'brand': return compare(a.brand, b.brand, isAsc);
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'cockpitCrew': return compare(a.cockpitCrew, b.cockpitCrew, isAsc);
        case 'firstFlight': return compareDates(a.firstFlight, b.firstFlight);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

function compareDates(a: Date, b: Date): number {
  return a < b ? -1 : 1;
}

function compareBooleans(a: boolean, b: boolean): number {
  return a == b ? 0 : (a ? 1 : -1);
}

// ToDo: comparators for units
