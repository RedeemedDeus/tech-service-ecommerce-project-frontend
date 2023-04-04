import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from '../models/account';
import { Observable } from 'rxjs';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http : HttpClient) { }

  getHeader() : HttpHeaders{
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return header;
  }

  submitAccount(account : Account) : Observable<Account>{
    let header = this.getHeader();
    return this.http.post<Account>("http://127.0.0.1:9000/account", account, {headers:header})
  }

  submitLogin(account : Account) : Observable<Account>{
    let header = this.getHeader();
    return this.http.post<Account>("http://127.0.0.1:9000/login", account, {headers:header});
  }

  assignWork(accountId : any, requestId : any, account : Account) : Observable<Account>{
    let header = this.getHeader();
    return this.http.put<Account>(`http://127.0.0.1:9000/account/${accountId}/request/${requestId}`, account, {headers:header});
  }
}
