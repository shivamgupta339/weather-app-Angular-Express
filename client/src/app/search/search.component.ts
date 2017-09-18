import { Component, Output, EventEmitter } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchService } from './search.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  outputs : [ `childWeather` ]
})
export class SearchComponent {
	@Output() childWeather = new EventEmitter();
  constructor(private cityservice: SearchService){}
  getCityName(cityName : string) {
    if( cityName === undefined) {
      alert("Search Field can't be empty");
      return;
    }
  	this.cityservice.getData(cityName)
  	.subscribe(resCityData => this.childWeather.emit(resCityData));
  }
}
