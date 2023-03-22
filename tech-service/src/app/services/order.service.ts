import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http : HttpClient) { }


  submitOrder(order : Order) : Observable<Order>{
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.post<Order>("http://127.0.0.1:9000/request", order, {headers:header});
  }

  getAllOrders(){
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.post<Order[]>("http://127.0.0.1:9000/request", {headers:header});
  }

}
