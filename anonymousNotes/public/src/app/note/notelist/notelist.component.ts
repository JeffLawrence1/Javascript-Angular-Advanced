import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import { Subscription } from 'rxjs';
import 'rxjs/add/operator/switchMap';
import {Note} from '../../note';
import {NoteService} from '../../note.service';

@Component({
  selector: 'app-notelist',
  templateUrl: './notelist.component.html',
  styleUrls: ['./notelist.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NotelistComponent implements OnInit {

  notesInstance:Note[] = [];
  subscription: Subscription;

  constructor(private _route: ActivatedRoute, private _noteService: NoteService) {
    this._noteService.taskObserver.subscribe(
      (data)=>{
        this.notesInstance=data;
   }
  )
  }

  ngOnInit() {
    this.getNotes();
  }
  getNotes():void {
    this._noteService.retrieveNotes();
  }

}
