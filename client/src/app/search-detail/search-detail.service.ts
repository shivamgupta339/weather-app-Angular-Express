import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchDetailService {

	constructor(private http : Http) { }

	saveWeather(weather : any , city : string): Observable<any> {
		const url: string = 'http://localhost:8080/insert';
		let weatherObject : any = {};
		weatherObject.date = weather.date;
		weatherObject.city = city;
		weatherObject.temp = weather.day.maxtemp_c;
		weatherObject.humidity = weather.day.avghumidity;
		weatherObject.real_feel = weather.day.avgtemp_c;
		weatherObject.cloud = weather.day.condition.text;
		weatherObject.img = weather.day.condition.icon;

		return this.http
		.post(url,weatherObject)
		.map((res:Response) => {
			if(res.status === 200) {
				return res.json();
			}
			else {
				return;
			}
			}, (error) => {
				return error.json()});
	}

}
