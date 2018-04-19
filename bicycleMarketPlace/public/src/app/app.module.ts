import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
// import { MaterializeModule } from "angular2-materialize";
// Services
import {MarketInfoService} from './market-info.service';
import {UsersService} from './users.service';
// components
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BikeBrowserComponent } from './marketplace/bike-browser/bike-browser.component';
import { BikeListingsComponent } from './marketplace/bike-listings/bike-listings.component';
import { BikeAddComponent } from './marketplace/bike-listings/bike-add/bike-add.component';
import { BikeListComponent } from './marketplace/bike-listings/bike-list/bike-list.component';
import { BikeOfDayComponent } from './landing-page/bike-of-day/bike-of-day.component';
import { LogInComponent } from './landing-page/log-in/log-in.component';
import { RegistrationComponent } from './landing-page/registration/registration.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    BikeBrowserComponent,
    BikeListingsComponent,
    BikeAddComponent,
    BikeListComponent,
    BikeOfDayComponent,
    LogInComponent,
    RegistrationComponent,
    MarketplaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [MarketInfoService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }