import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Bucket } from '../bucket';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { BucketService } from '../bucket.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  // currentUser: User = new User();
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
    this.newBucket = new Bucket();
  }

  ngOnInit() {
    this.setCurrentUser();
    this.getBuckets();
    this.getUsers();
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
  }

  getUsers(){
    this._userService.index((users) => this.users = users);
  }
}
