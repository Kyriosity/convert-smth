import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AircraftsComponent } from './components/units/avia/aircrafts/aircrafts.component';
import { WelcomeComponent } from './components/lingua/welcome/welcome.component';
import { HomeComponent } from './components/home/home.component';

const unitsPath = 'units';
const linguaPath = 'lingua';

const routes: Routes = [
  { path: unitsPath, component: AircraftsComponent },
  { path:'unit', redirectTo: unitsPath },

  { path: linguaPath, component: WelcomeComponent },
  { path:'language', redirectTo: linguaPath },
  { path:'languages', redirectTo: linguaPath },
  { path:'linqua', redirectTo: linguaPath },

  { path: '', component: HomeComponent }, 
  { path: 'home', redirectTo: '' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
