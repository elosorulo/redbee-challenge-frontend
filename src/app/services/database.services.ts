import { Injectable, Input } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import {Interests, User} from './model'


@Injectable()
export class DatabaseService {
	private API_URL = '';

	constructor(private http: Http) { }

	createUser(userName, email) {

	 	let interests = new Interests([], []);
	 	let user = new User(userName, email, interests);

	 	let headers = new Headers({'Content-Type' : 'application/json'})
	 	let options = new RequestOptions({headers: headers});
	 	//let interests = Object.assign('profiles': [], 'hashTags': []);
	 	let body = JSON.stringify(user);

	 	console.log("Executing createUser with body: " + body + ".");
	 	return this.http.post(this.API_URL, body, options).map((res: Response) => res.json());
	 }

	 getUserInterests(userName) {
	 	return this.http.get(this.API_URL + '/' + userName)
	 		.map((res: Response) => res.json())
	 }

	 updateUserInterests(userName: String, profilesInput: String, hashTagsInput: String) {
	 	let profiles = profilesInput.split(" ");
	 	let hashTags = hashTagsInput.split(" "); 
		let interests = new Interests(profiles[0] == "" ? [] : profiles, 
			hashTags[0] == "" ? [] : hashTags);

		let body = JSON.stringify(interests);
		console.log("Executing UpdateInterests with body: " + body);
		return this.http.patch(this.API_URL + '/'+ userName, body)
			.map((res: Response) => res.json())
	 }
}