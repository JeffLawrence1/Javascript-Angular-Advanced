import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
// classes
import {User} from './user';

@Injectable()
export class UsersService {
  userInstance:boolean = false;
  userObserver = new BehaviorSubject(this.userInstance)
  constructor(private _http:Http) { }
  checkLogIn(callback){
    this._http.get('/checkLogIn').subscribe(
      (response)=>{
        if (response.json()=== true){
          this.userInstance = true;
        }
        callback(response.json());
        this.userObserver.next(this.userInstance)
      },
      (err)=>{
        console.log(err);
      }
    );
  }
  loginUser(user:User, callback){
    this._http.post('/login', user).subscribe(
      (response) => {
        let result = response.json();
        if (result === true){
          this.userInstance = true;
        }else {
          this.userInstance = false;
        }
        this.userObserver.next(this.userInstance)
        callback(response.json())
      },
      (err) => {
        console.log(err)
      }
    )
  }
  createUser(user, callback){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post('/users', user, options).subscribe(
      (response) => {
        callback(response.json())
      },
      (err) => {
        console.log(err);
      }
    );
  }
}