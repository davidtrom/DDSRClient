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
import { StampedeResultsComponent } from './stampede-results/stampede-results.component';
import { OtherRunsComponent } from './other-runs/other-runs.component';
import { AttendAMeetingComponent } from './attend-a-meeting/attend-a-meeting.component';


const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'stampede', component: StampedeComponent},
  { path: 'mileage-matters', component: MileageMattersComponent},
  { path: 'scholarship', component: ScholarshipComponent},
  { path: 'running', component: RunningHomeComponent},
  { path: 'cycling', component: CyclingHomeComponent},
  { path: 'join', component: ReasonsToJoinComponent},
  { path: 'leap-frog', component: LeapFrogComponent},
  { path: 'stampede-results', component: StampedeResultsComponent},
  { path: 'local-races', component: OtherRunsComponent},
  { path: 'meeting', component: AttendAMeetingComponent},
  // if no route, redirect to home
  { path: '**', redirectTo: '' }

];



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
