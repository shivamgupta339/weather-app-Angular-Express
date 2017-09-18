import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class UpdateFavoriteService {
	private updateUrl: string = 'http://localhost:8080/update/'
  constructor(private http : Http) { }

  updateFavorite(favoriteList : any, real_feel : number) :Observable<any> {
  	return this.http
  							.put(this.updateUrl+favoriteList.date+'/'+favoriteList.city+'/'+real_feel,favoriteList)
  							.map((res:Response) => <any[]>res.json(),(error) => error.json());

  }

}
