import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {UsersService} from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Bike Maketplace';
  loginState:boolean;
  constructor(private _router:Router, private _route:ActivatedRoute, private _usersService:UsersService) {
    this._usersService.userObserver.subscribe(
      (data)=>{
        this.loginState=data;
      }
    )
  }

  ngOnInit() {
    this.loggedInCheck()
  }
  loggedInCheck(){
    this._usersService.checkLogIn((pass)=>{
      if (pass === true){
        this.loginState = true;
      }else{
        this.loginState = false;
      }
    });
  }
}