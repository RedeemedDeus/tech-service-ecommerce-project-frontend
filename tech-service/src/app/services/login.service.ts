import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../models/login';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }


  submitLogin(login : Login) : Observable<Login>{
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.post<Login>("http://127.0.0.1:9000/user", login, {headers:header});
  }


//TODO more endpoints


}
