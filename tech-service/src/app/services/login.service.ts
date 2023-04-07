import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../models/login';
import { Account } from '../models/account';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }


  submitLogin(login : Login) : Observable<Account>{
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.post<Login>("http://52.53.165.37:9000/login", login, {headers:header});
  }


//TODO more endpoints


}
