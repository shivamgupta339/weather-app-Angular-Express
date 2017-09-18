import { Component, OnInit } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router : Router) { }

  title : string = "WeatherApp";

  logout() {
  	localStorage.removeItem("key");
  	this.router.navigateByUrl('/login');
  }

  ngOnInit() {
  }

}
