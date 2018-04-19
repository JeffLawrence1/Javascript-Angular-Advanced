import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
// classes
import {Bike} from './bike';
import {User} from './user';

@Injectable()
export class MarketInfoService {
  bikes:Array<Bike> = [];
  mybikes:Array<Bike>=[];
  mysortedbikes:Array<Bike>=[];
  sortedbikes:Array<Bike> = [];
  bikeInstance:Bike;
  bikeObserver = new BehaviorSubject(this.bikes)
  myBikesObserver = new BehaviorSubject(this.mybikes)
  constructor(private _http:Http) { }
  sorted(array:Array<Bike>, property:string): Array<Bike> {
    function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
    }
    return array.sort(dynamicSort(property))
  }
  myBikes(){
    this._http.get('/mybikes').subscribe(
      (response) => {
        this.mybikes = response.json();
        this.mysortedbikes = this.sorted(this.mybikes, "-created_at");
        this.myBikesObserver.next(this.mysortedbikes);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  retrieveBikes(){
    this._http.get('/bikes').subscribe(
      (response) => {
        this.bikes = response.json();
        this.sortedbikes = this.sorted(this.bikes, "-price");
        this.bikeObserver.next(this.sortedbikes);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  retrieveBike(id,callback){
    this._http.get('/bikes/'+id).subscribe(
      (response) => {
        this.bikeInstance = response.json();
        callback(this.bikeInstance);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  deleteBike(id){
    this._http.delete('/bikes/'+id).subscribe(
      (response) => {
        console.log(response.json())
      },
      (err) => {
        console.log(err);
      }
    );
    this.retrieveBikes();
    this.myBikes();
  }
  updateBike(bike,id){
    console.log(id);
    console.log(bike);
    this._http.put('/bikes/'+id,bike).subscribe(
      (response) => {
        console.log(response.json())
      },
      (err) => {
        console.log(err);
      }
    );
    this.retrieveBikes();
  }
  createBike(bike){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post('/bikes', bike, options).subscribe(
      (response) => {
      },
      (err) => {
        console.log(err);
      }
    );
  }
}