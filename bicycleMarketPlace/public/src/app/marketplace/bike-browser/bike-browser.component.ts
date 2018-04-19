import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
import {MarketInfoService} from '../../market-info.service';
import {UsersService} from '../../users.service';
import {Bike} from '../../bike';

@Component({
  selector: 'app-bike-browser',
  templateUrl: './bike-browser.component.html',
  styleUrls: ['./bike-browser.component.css']
})
export class BikeBrowserComponent implements OnInit {
  bikeArray = [];
  loginState:boolean;
  constructor(private _route: ActivatedRoute, private _marketinfoService: MarketInfoService, private _userService: UsersService) {
    this._marketinfoService.bikeObserver.subscribe(
      (data)=>{
        this.bikeArray=data;
      }
    )
    this._userService.userObserver.subscribe(
      (data)=>{
        this.loginState=data;
      }
    )
  }
  ngOnInit() {
    this.getBikes();
  }
  getBikes():void {
    this._marketinfoService.retrieveBikes();
  }
}
