import { Component, OnInit } from '@angular/core';
import { FavoritesService } from './favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
  providers: [ FavoritesService ]
})
export class FavoritesComponent implements OnInit{
	weatherArray: any[] = [];
	deleteWeather : any = []; 
	updateSniplet : any;
  pageNo : number = 1;
  constructor(private displayFavService : FavoritesService) { }

  getWeather(){
    let key: string = localStorage.getItem('key');
    console.log("fav",key);
    const header = {
      "authorization" : key
    };
    console.log("header",header.authorization);
    const headerObj = {                                                                                                                                                                                 
      headers: new Headers(header), 
    };
  	this.displayFavService.getWeather(headerObj)
  	.subscribe(resFavData => this.weatherArray = resFavData)
  }

  delete(weather : any) {
  	let date : string = weather.date;
  	let city : string = weather.city;
  	this.displayFavService.delete(date,city)
  	.subscribe(resDelData => {
      this.deleteWeather = resDelData;
      if(resDelData.ok){
        this.getWeather();
        return this.deleteWeather;
      }
    });
  }

  update(favoriteObject : any) {
  	this.updateSniplet = favoriteObject;
  }

  ngOnInit(){
  	this.getWeather();
  }
}