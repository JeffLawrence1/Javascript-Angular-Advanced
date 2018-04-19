import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PokeComponent } from './poke/poke.component';
import { PokeService } from './poke.service';


@NgModule({
  declarations: [
    AppComponent,
    PokeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [PokeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
