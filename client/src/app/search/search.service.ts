import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class SearchService{
	private url: string ="http://api.apixu.com/v1/forecast.json?key=a4add96f89144e268c0122901170609&q=";
	constructor(private http: Http){}
	getData(cityName : string){
		return this.http.get(this.url+`${cityName}`+'&days=10')
		.map((response:Response)=> <any[]> response.json(), (error) => error.json());
	}
}
