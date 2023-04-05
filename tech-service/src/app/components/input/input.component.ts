import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account';
import { Details } from 'src/app/models/details';
import { Order } from 'src/app/models/order';
import { AccountService } from 'src/app/services/account.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  name : string = "";
  service : string = "";
  hours : number = 0;
  rate : number = 30;
  price : number = 0;
  details : string = "";
  currAccount : Account = {};
  orders : Order[] = [];
  selectedOrder : Order = {};
  loggedIn = false;

  constructor(private orderService : OrderService, private accountService : AccountService){ }
  ngOnInit(): void {
    
  }

  onChange(){
    this.price = (this.rate)*(this.hours);
  }

  changeService(value:any){
    this.service = value;
  }

  isLoggedOut(value : any){
    this.loggedIn = value;
    this.currAccount = {};
  }

  setAccount(value : any) : void{
    this.currAccount = value;
    this.loggedIn = true;
    this.orderService.getAllOrders().subscribe(list => this.orders = list);
  }

  selectedRequest(request : any) : void{
    //console.log(request);
    for(let order of this.orders){
      if(order.serviceType == request.target.value){
        this.selectedOrder = order;
      }
    }
  }

  assignWork(){
    alert(`You have been assigned: ${this.selectedOrder.serviceType}`);
    this.accountService.assignWork(this.currAccount.id, this.selectedOrder.id, this.currAccount).subscribe();
  }

  postOrder() : void {
    let order : Order = {
      serviceType : this.service
    };

    let details : Details = {
      customerName : this.name,
      comment : this.details,
      hours : this.hours,
      totalPrice : this.price
    }

    this.orderService.submitOrder(order).subscribe((ord : Order) => {
      this.orderService.submitDetails(details,ord.id).subscribe();
    });
   
    this.clearInput();
  }

  clearInput() : void{
    let elName : any = document.getElementById("name") as HTMLInputElement | null;
    elName.value = "";
    let elHours : any = document.getElementById("hours") as HTMLInputElement | null;
    elHours.value = "";
    let elMessage : any = document.getElementById("message") as HTMLInputElement | null;
    elMessage.value = "";
  }
}
