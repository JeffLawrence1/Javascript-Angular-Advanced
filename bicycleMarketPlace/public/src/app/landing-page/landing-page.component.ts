import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  loginState:boolean;
  constructor(private _userService: UsersService) {
    this._userService.userObserver.subscribe(
      (data)=>{
        this.loginState=data;
      }
    )
  }

  ngOnInit() {
  }

}
