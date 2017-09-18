import { Component, OnInit } from '@angular/core';
import {SignupService} from './signup.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [SignupService]
})
export class SignupComponent implements OnInit {

	userDetails:any={};
	ref:any;
  constructor(private signupService:SignupService) { }
  signup(){
    if(this.userDetails.username === undefined || 
      this.userDetails.password === undefined || this.userDetails.email === undefined ||
      this.userDetails.mobileNo === undefined)
    {
      alert('Fields can\'t be blank');
      return;
    }
  	this.signupService.signup(this.userDetails)
  	.subscribe(ref => this.ref = ref);
  }
  ngOnInit() {
  }

}