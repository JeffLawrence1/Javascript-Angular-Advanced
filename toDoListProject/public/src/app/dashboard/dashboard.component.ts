import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';

import { User } from '../user';
import { Bucket } from '../bucket';
import { BucketService } from '../bucket.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

 
  // newBucket: Bucket = new Bucket();
  buckets: Bucket[];
  users: User[];
  errors: string[] = [];
  currentUser;
  newBucket;

  constructor(
    private _bucketService: BucketService,
    private _userService: UserService,
    private _router: Router
  ) { 

    this.currentUser = new User();
    this.newBucket= new Bucket();
    }

  ngOnInit() {
    this.setCurrentUser();
    this.getBuckets();
    this.getUsers();
  }

  createBucket(){
    this.errors = [];
    this._bucketService.create(this.newBucket, (bucket) => {
      if(bucket.errors){
        for(const key of Object.keys(bucket.errors)) {
          const error = bucket.errors[key];
          this.errors.push(error.message);
        }
      }else{
        this._router.navigateByUrl('/dashboard');
      }
    });
  }

  logout() {
    this._userService.logout(res => this._router.navigateByUrl('/'));
  }

  setCurrentUser(){
    this.currentUser = this._userService.getCurrentUser();
    if(this.currentUser === null) {
      this._router.navigateByUrl('/');
    }
  }

  getBuckets(){
    this._bucketService.index((buckets) => this.buckets = buckets);
    // console.log("dgd");
  }

  getUsers(){
    this._userService.index((users) => this.users = users);
  }
}
