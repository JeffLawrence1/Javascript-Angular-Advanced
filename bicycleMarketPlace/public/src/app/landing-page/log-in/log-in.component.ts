import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
import {NgForm} from '@angular/forms'
import {UsersService} from '../../users.service';
import {User} from '../../user';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  userInstance:User = new User();
  subscription:Subscription;
  message;
  constructor(private _router:Router, private _route:ActivatedRoute, private _usersService:UsersService) {
  }

  ngOnInit() {
  }
  login(pass){
    if (pass === true){
      this._router.navigate(['marketplace/browse']);
    }else {
      this.userInstance = new User();
      this.message = pass
    }
  }
  onSubmit(){
    this._usersService.loginUser(this.userInstance,(pass) => {
      this.login(pass);
    });
  }
}