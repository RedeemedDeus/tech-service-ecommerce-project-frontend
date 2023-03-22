import { Component, OnInit } from '@angular/core';
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

  postOrder() : void {
    let order : Order = {
      customerName : this.name,
      requestedService : this.service,
      estimatedHours : this.hours,
      hourlyRate : this.rate,
      totalPrice : (this.rate)*(this.hours),
      extraDetails : this.details
    };

    this.orderService.submitOrder(order).subscribe();
    console.log(order);
  }


}
