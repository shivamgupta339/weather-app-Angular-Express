import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service';
import {Router} from '@angular/router';
import { FormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : [LoginService]
})
export class LoginComponent implements OnInit {
	ref:any;
	loginDetails:any={};

  constructor(private loginService: LoginService, private router : Router) { }

  login(flag:any) {
    if(flag === 1) {
      console.log("local",localStorage.getItem('key'));
      this.router.navigateByUrl('/home');
    }
    else {
      alert('either email or password is invalid...');
    }
  }

  validate(){
    if(this.loginDetails.email === undefined || this.loginDetails.password === undefined)
    {
      alert('Fields can\'t be blank');
      return;
    }
  	this.loginService.validate(this.loginDetails)
  	.subscribe(ref=> this.login(this.loginService.val));
  }
  ngOnInit() {
  }

}