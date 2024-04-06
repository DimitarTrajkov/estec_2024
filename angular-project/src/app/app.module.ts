import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { StatistikaComponent } from './components/statistika/statistika.component';
import { GraphComponent } from './components/graph/graph.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { PregledPageComponent } from './components/pregled-page/pregled-page.component';
import { ZemljevidComponent } from './components/zemljevid/zemljevid.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    StatistikaComponent,
    GraphComponent,
    CalendarComponent,
    PregledPageComponent,
    ZemljevidComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
