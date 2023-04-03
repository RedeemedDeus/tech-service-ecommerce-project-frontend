import { Component, Input } from '@angular/core';
import { Details } from 'src/app/models/details';
import { Order } from 'src/app/models/order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  @Input()
  order : Order = {};
  detailArr : any;

  constructor() {};

  ngOnInit(){
    this.detailArr = this.order.requestDetails;
  }
}
