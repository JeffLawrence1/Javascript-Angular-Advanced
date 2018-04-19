import { Injectable } from '@angular/core';
import { Http} from "@angular/http";

@Injectable()
export class PokeService {

  constructor(private _http: Http) { }

  getOne(cb){
    return this._http.get('https://swapi.co/api/people/4').subscribe((res) => {
     cb(res.json());
    })
    // console.log("in the service");
  }
}
