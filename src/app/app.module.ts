import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CyclingHomeComponent } from './cycling-home/cycling-home.component';
import { RunningHomeComponent } from './running-home/running-home.component';
import { ScholarshipComponent } from './scholarship/scholarship.component';
import { StampedeComponent } from './stampede/stampede.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MileageMattersComponent } from './mileage-matters/mileage-matters.component';
import { ReasonsToJoinComponent } from './reasons-to-join/reasons-to-join.component';
import { LeapFrogComponent } from './leap-frog/leap-frog.component';
import { StampedeResultsComponent } from './stampede-results/stampede-results.component';
import { OtherRunsComponent } from './other-runs/other-runs.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CyclingHomeComponent,
    RunningHomeComponent,
    ScholarshipComponent,
    StampedeComponent,
    CalendarComponent,
    DashboardComponent,
    MileageMattersComponent,
    ReasonsToJoinComponent,
    LeapFrogComponent,
    StampedeResultsComponent,
    OtherRunsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
