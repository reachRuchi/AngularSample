import { Component} from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Welcome to IFS - Integrated Fulfillment System!';
  //private apiUrl = 'http://localhost:8060/customer/customers';

  

//   data: any = {};
//   results: string[];

  constructor (private router:Router){}

  validate():void{
    console.log("redirecting to home");
    
    this.router.navigate(['home']);
  }



  // redirect(){
  //   this.router.navigate(['login']);      
  // }

  
//   getData(){
//     return this.http.get(this.apiUrl).map(res => res.json())
//     .map(data => {
//       console.log(data);
//       this.results = data;
//       return this.results;
//     }).toPromise();
//   }

//   private handleError(error: any): Promise<any> {
//     console.error('An error occurred', error); // for demo purposes only
//     return Promise.reject(error.message || error);
//   }
}


 