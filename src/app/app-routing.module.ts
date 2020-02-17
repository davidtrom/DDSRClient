import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StampedeComponent } from './stampede/stampede.component';
import { MileageMattersComponent } from './mileage-matters/mileage-matters.component';
import { ScholarshipComponent } from './scholarship/scholarship.component';
import { RunningHomeComponent } from './running-home/running-home.component';


const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'stampede', component: StampedeComponent},
  { path: 'mileage-matters', component: MileageMattersComponent},
  { path: 'scholarship', component: ScholarshipComponent},
  { path: 'running', component: RunningHomeComponent},
  // if no route, redirect to home
  { path: '**', redirectTo: '' }

];



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
