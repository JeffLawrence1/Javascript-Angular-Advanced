import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// components
import {LandingPageComponent} from './landing-page/landing-page.component';
import {MarketplaceComponent} from './marketplace/marketplace.component';
import {BikeBrowserComponent} from './marketplace/bike-browser/bike-browser.component';
import {BikeListingsComponent} from './marketplace/bike-listings/bike-listings.component';
import {BikeListComponent} from './marketplace/bike-listings/bike-list/bike-list.component';
import {BikeAddComponent} from './marketplace/bike-listings/bike-add/bike-add.component';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    component: LandingPageComponent,
  },
  {
    path:'marketplace',
    component: MarketplaceComponent,
    children: [
      {
        path:'listings',
        pathMatch: 'full',
        component: BikeListingsComponent,
      },
      {
        path:'browse',
        pathMatch: 'full',
        component: BikeBrowserComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }