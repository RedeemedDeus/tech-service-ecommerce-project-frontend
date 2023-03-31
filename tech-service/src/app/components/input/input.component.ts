import { Component, OnInit } from '@angular/core';
import { Details } from 'src/app/models/details';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  name : string = "";
  service : string = "";
  hours : number = 0;
  rate : number = 30;
  price : number = 0;
  details : string = "";

  constructor(private orderService : OrderService){ }
  ngOnInit(): void {
    
  }

  onChange(){
    this.price = (this.rate)*(this.hours);
  }

  changeService(value:any){
    this.service = value;
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
    console.log(order);
    console.log(details);
  }


}
