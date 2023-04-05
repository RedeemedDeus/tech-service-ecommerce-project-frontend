import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ObservedValueOf } from 'rxjs';
import { Order } from '../models/order';
import { Details } from '../models/details';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http : HttpClient) { }

  getHeader() : HttpHeaders{
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return header;
  }

  submitOrder(order : Order) : Observable<Order>{
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.post<Order>("http://127.0.0.1:9000/request", order, {headers:header});
  }

  submitDetails(details : Details, id : (number | undefined) ) : Observable<Order>{
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.post<Order>(`http://127.0.0.1:9000/request/${id}/details`, details, {headers:header});
  }

  getAllOrders(){
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.get<Order[]>("http://127.0.0.1:9000/request", {headers:header});
  }

  changeOrderStatus(id : (number | undefined), order : Order) : Observable<Order>{
    let header = this.getHeader();
    return this.http.patch<Order>(`http://127.0.0.1:9000/request/${id}`, order, {headers:header});
  }

}
