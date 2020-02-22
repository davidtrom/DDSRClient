import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StampedeComponent } from './stampede/stampede.component';
import { MileageMattersComponent } from './mileage-matters/mileage-matters.component';
import { ScholarshipComponent } from './scholarship/scholarship.component';
import { RunningHomeComponent } from './running-home/running-home.component';
import { CyclingHomeComponent } from './cycling-home/cycling-home.component';
import { ReasonsToJoinComponent } from './reasons-to-join/reasons-to-join.component';
import { LeapFrogComponent } from './leap-frog/leap-frog.component';


const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'stampede', component: StampedeComponent},
  { path: 'mileage-matters', component: MileageMattersComponent},
  { path: 'scholarship', component: ScholarshipComponent},
  { path: 'running', component: RunningHomeComponent},
  { path: 'cycling', component: CyclingHomeComponent},
  { path: 'join', component: ReasonsToJoinComponent},
  { path: 'leap-frog', component: LeapFrogComponent},
  // if no route, redirect to home
  { path: '**', redirectTo: '' }

];



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
