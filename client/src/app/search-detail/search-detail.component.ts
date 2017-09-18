import { Component, Input } from '@angular/core';
import { SearchDetailService } from './search-detail.service';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.css'],
  providers: [ SearchDetailService ]
})
export class SearchDetailComponent {
	@Input() inputData : any;

  constructor( private forecastService : SearchDetailService ) { }
  weatherRef : any;
  getDetail(weather : any , city: string){
  	this.forecastService.saveWeather(weather,city)
  											.subscribe(weatherRef => {
                          if(weatherRef === undefined) {
                            console.log(weatherRef);
                            alert('error in added');
                          }
                          else {
                            alert('added successfully');
                            return this.weatherRef = weatherRef};
                          });
  }

}
