import { Component, OnInit } from '@angular/core';
import {DatabaseService} from '../services/database.services';
import {Observable} from "rxjs";

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css'],
  providers: [DatabaseService]
})
export class InterestsComponent implements OnInit {

  public form_userName
  public form_profiles
  public form_hashTags

  constructor(private database: DatabaseService) { }

  ngOnInit() {
  }

  getInterests(userName) {
  	this.database.getUserInterests(userName).subscribe(
      data => {
      	this.form_profiles = data.userInterests.profiles.join(" ")
        this.form_hashTags = data.userInterests.hashTags.join(" ")
        return true;
      },
      error => {
      	console.error("Error getting user interests.");
        return Observable.throw(error);
      	;
      }
  	);
  }

  updateInterests(userName, profiles, hashTags) {
    this.database.updateUserInterests(userName, profiles, hashTags).subscribe(
      data => {
        return true;
      },
      error => {
        console.error("Error updating user interests.");
        return Observable.throw(error);
      }
    );
  }

}
