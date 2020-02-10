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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CyclingHomeComponent,
    RunningHomeComponent,
    ScholarshipComponent,
    StampedeComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
