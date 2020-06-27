import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatCardModule } from '@angular/material/card';

// application
import { HomeComponent } from './components/home/home.component';
import { WelcomeComponent } from './components/lingua/welcome/welcome.component';
import { AircraftsComponent } from './components/units/avia/aircrafts/aircrafts.component';
import { AircraftsSpecsTableComponent } from './components/units/avia/aircrafts/aircrafts-specs-table/aircrafts-specs-table.component';
import { UValuePipe } from 'projects/units-weigher/src/lib/uvalue.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    WelcomeComponent,
    AircraftsComponent,
    AircraftsSpecsTableComponent,
    HomeComponent,

    // ToDo: export pipe thru public-api in lib
    UValuePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatSelectModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatCardModule,
  ],

  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
