import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SignupService {

	private url = "http://localhost:8080/insert/signup";

  constructor(private http:Http) { }

  signup(signupDetails:any) {
  	return this.http
			.post(this.url,signupDetails)
			.map((res :Response) =>	{
				if(res.status === 200) {
					alert('Registered successfully');
					return res.json();
				}
			});
  }
}