import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private user: LoginService) { }

  ngOnInit() {
  }

  loginUser(e){
    e.preventDefault();
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    let result = this.user.validateUser(username, password);
    if(username == 'admin' && password == 'admin'){
      this.user.setUserLoggedIn();
      this.router.navigate(['home1'])
    }
  }

}
