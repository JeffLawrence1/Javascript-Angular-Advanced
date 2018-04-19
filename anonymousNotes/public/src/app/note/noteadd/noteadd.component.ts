import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import 'rxjs/add/operator/switchMap';
import {NgForm} from '@angular/forms'
import {Note} from '../../note';
import { NoteService } from '../../note.service';


@Component({
  selector: 'app-noteadd',
  templateUrl: './noteadd.component.html',
  styleUrls: ['./noteadd.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class NoteaddComponent implements OnInit {

  noteInstance:Note = new Note();
  subscription:Subscription;
  constructor(private _router:Router, private _route:ActivatedRoute, private _noteService:NoteService) {}

  ngOnInit() {
  }
  onSubmit(){
    this._noteService.createNote(this.noteInstance);
    this.noteInstance = new Note();
    this._noteService.retrieveNotes();
  }
}
