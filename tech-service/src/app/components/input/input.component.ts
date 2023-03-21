import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';

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

  constructor(){}
  ngOnInit(): void {
    
  }

  postOrder() : void {
    let order : Order = {
      customerName : this.name,
      requestedService : this.service,
      estimatedHours : this.hours,
      hourlyRate : this.rate,
      totalPrice : (this.rate)*(this.hours)
    }
    
  }

}
