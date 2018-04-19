import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Bucket } from './bucket';


@Injectable()
export class BucketService {

  constructor(private _http: Http) { }

  index(callback){
    this._http.get('/buckets').subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }

  create(Bucket: Bucket, callback) {
    this._http.post('/buckets', Bucket).subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }

  // show(id: string, callback) {
  //   this._http.get(`/buckets/${id}`).subscribe(
  //     res => callback(res.json()),
  //     err => console.log(err)
  //   );
  // }

  destroy(id: string, callback) {
    this._http.delete(`/buckets/${id}`).subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }
}
