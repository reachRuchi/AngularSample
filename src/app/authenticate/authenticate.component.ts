import { Component, OnInit } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {

  message:string;

  constructor() { 
    console.log('initializing the message');
    this.message = 'This is authenticate page';

  }

  ngOnInit():void {
    
  }

}
