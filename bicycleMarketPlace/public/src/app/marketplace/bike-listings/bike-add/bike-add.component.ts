import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
import {NgForm} from '@angular/forms'
import {MarketInfoService} from '../../../market-info.service';
import {Bike} from '../../../bike';

@Component({
  selector: 'app-bike-add',
  templateUrl: './bike-add.component.html',
  styleUrls: ['./bike-add.component.css']
})
export class BikeAddComponent implements OnInit {
  bikeInstance:Bike = new Bike();
  subscription:Subscription;
  constructor(private _router:Router, private _route:ActivatedRoute, private _marketinfoService:MarketInfoService) {
  }

  ngOnInit() {
  }
  onSubmit(){
    this._marketinfoService.createBike(this.bikeInstance);
    this.bikeInstance = new Bike();
    this._marketinfoService.retrieveBikes();
    this._marketinfoService.myBikes();
  }
}