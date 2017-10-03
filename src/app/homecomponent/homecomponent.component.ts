import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {LoginService } from '../login/login-service.service';

@Component({
  selector: 'app-homecomponent',
  templateUrl: './homecomponent.component.html',
  styleUrls: ['./homecomponent.component.css']
})
export class HomecomponentComponent implements OnInit {

  constructor(private user: LoginService) { }

  ngOnInit() {
  }

  


}
