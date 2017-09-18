import { Component, OnInit, Input } from '@angular/core';
import { UpdateFavoriteService } from './update-favorite.service';

@Component({
  selector: 'app-update-favorites',
  templateUrl: './update-favorites.component.html',
  styleUrls: ['./update-favorites.component.css'],
  providers: [ UpdateFavoriteService ]
})
export class UpdateFavoritesComponent implements OnInit {
	@Input('favoriteList') favoriteList : any;
	real_feel : number;
	ref:any;
  constructor(private updateFavoriteService : UpdateFavoriteService) { }

  updateFavorite(favoriteList : any) {
    if(this.real_feel === undefined) {
      alert('Please enter value in real_feel');
     return;
    }
  	this.updateFavoriteService.updateFavorite(favoriteList,this.real_feel)
  		.subscribe(ref => {
        this.ref = ref;
        if(ref.ok === 1) {
          alert('Updated successfully: real_feal = '+this.real_feel);
          return this.ref;
        }
        else {
          return alert('Error in update');
        } 
      });
  }
  ngOnInit() {
  }
}