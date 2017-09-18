import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class FavoritesService {
	private url: string = 'http://localhost:8080/';
  constructor(private http : Http) { }

  getWeather(headerObj:any): Observable<any> {
    return this.http
    .get(this.url,headerObj)
    .map((res:Response) => { console.log(res)
      return <any[]>res.json();
    })
  }

  delete(date : string, city : string) {
  	const deleteUrl : string = `${this.url}delete/${date}/${city}`;
  	return this.http
  	.delete(deleteUrl)
  	.map((res:Response) =>res.json(),(error) => error.json());
  }
}
