import { Component, Input } from '@angular/core';
import { Order } from 'src/app/models/order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  @Input()
  order : Order = {};

  constructor() {};

  ngOnInit(){
    
  }
}
