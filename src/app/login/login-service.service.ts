import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { API_URL } from '../constant';

@Injectable()
export class LoginService {

  private isUserLoggedIn;
  private username;

  constructor(private http: Http) { 
    this.isUserLoggedIn = false;
  }

  validateUser(username, password): string{
    let result:string;
    let data = {
      "username":username,
      "password":password
    }

    this.http.post(API_URL+"user\login", data).map(res => res.json())
    .map(data => {
      console.log(data);
      result = data;
      return result;
    }).toPromise();
    return result;
  }

  setUserLoggedIn(){
    this.isUserLoggedIn = true;
  }

  getUserLoggedIn(){
    return this.isUserLoggedIn;
  }


  //   getData(){
//     return this.http.get(this.apiUrl).map(res => res.json())
//     .map(data => {
//       console.log(data);
//       this.results = data;
//       return this.results;
//     }).toPromise();
//   }

}
