import { Component, OnInit } from '@angular/core';
import {DatabaseService} from '../services/database.services';
import {Observable} from "rxjs";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [DatabaseService]
})
export class RegisterComponent implements OnInit {
  
  public new_userName;
  public new_email;

  constructor(private database: DatabaseService) { }

  ngOnInit() {
  }

  registerUser(userName, email) {
  	console.log(userName, email);
    this.database.createUser(userName, email).subscribe(
      data => {
	      return true;
  	  },
      error => {
        console.error("Error registering user.");
          return Observable.throw(error);
      }
    );
  }
}
