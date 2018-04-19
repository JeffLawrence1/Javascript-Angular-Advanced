import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
import {MarketInfoService} from '../../market-info.service';
import {UsersService} from '../../users.service';
import {Bike} from '../../bike';

@Component({
  selector: 'app-bike-of-day',
  templateUrl: './bike-of-day.component.html',
  styleUrls: ['./bike-of-day.component.css']
})
export class BikeOfDayComponent implements OnInit {
  bikeInstance;
  bikeArray = [];
  loginState:boolean;
  constructor(private _route: ActivatedRoute, private _marketinfoService: MarketInfoService, private _userService: UsersService) {
    this._marketinfoService.bikeObserver.subscribe(
      (data)=>{
        this.bikeArray=data;
        this.bikeInstance= this.bikeArray[this.randomBike(this.bikeArray.length)]
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
  randomBike(bikeArray){
    return Math.floor(Math.random()*bikeArray);
  }
}
