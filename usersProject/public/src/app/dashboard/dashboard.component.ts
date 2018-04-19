import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  currentUser: User = new User();
  // newBucket: Bucket = new Bucket();
  // buckets: Bucket[];
  users: User[];
  errors: string[] = [];

  constructor(
    // private _bucketService: BucketService,
    private _userService: UserService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.setCurrentUser();
    // this.getBuckets();
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

  // getBuckets(){
  //   this._bucketService.index((buckets) => this.buckets = buckets);
  // }

  getUsers(){
    this._userService.index((users) => this.users = users);
  }
}
