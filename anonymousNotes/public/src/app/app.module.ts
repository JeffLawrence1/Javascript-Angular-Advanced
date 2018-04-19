import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NoteService } from './note.service';
import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import { NotelistComponent } from './note/notelist/notelist.component';
import { NoteaddComponent } from './note/noteadd/noteadd.component';


@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    NotelistComponent,
    NoteaddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
