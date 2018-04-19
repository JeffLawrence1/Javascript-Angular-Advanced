import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { LandingComponent } from './landing/landing.component';
import { ProductService } from './product.service';
import { WrongComponent } from './wrong/wrong.component';


@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    EditComponent,
    ListComponent,
    LandingComponent,
    WrongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
