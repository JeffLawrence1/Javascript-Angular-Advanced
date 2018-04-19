import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
import {MarketInfoService} from '../../../market-info.service';
import {Bike} from '../../../bike';
@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent implements OnInit {
  updatedBike;
  myBikeListings = [];
  constructor(private _route: ActivatedRoute, private _marketinfoService: MarketInfoService) {
    this._marketinfoService.myBikesObserver.subscribe(
      (data)=>{
        this.myBikeListings=data;
      }
    )
  }
  ngOnInit() {
    this.myBikes();
  }
  update(idx){
    this.updatedBike = this.myBikeListings[idx];
    this._marketinfoService.updateBike(this.updatedBike,this.updatedBike._id);
  }
  delete(id){
    this._marketinfoService.deleteBike(id);
  }
  myBikes():void {
    this._marketinfoService.myBikes();
  }
}