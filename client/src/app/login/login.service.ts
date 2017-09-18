import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
	val : any;
  private url = "http://localhost:8080/insert/login";
  constructor(private http: Http) { }

  validate(loginDetails:any){
    console.log(loginDetails);
  	return this.http.post(this.url,loginDetails)
  	.map(res => {
      console.log(res.json())
  		if(res.json().token===undefined) {
  			this.val = 0;
        localStorage.setItem('key',res.json().token);
  		}
  		else {
  			this.val = 1;
        localStorage.setItem('key',res.json().token);
  		}
  	})
  }
}