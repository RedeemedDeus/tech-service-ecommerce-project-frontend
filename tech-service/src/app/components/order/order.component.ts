import { Component, Input } from '@angular/core';
import { Details } from 'src/app/models/details';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  @Input()
  order : Order = {};
  detailArr : any;
  accountArr : any;

  constructor(private orderService : OrderService) {}

  ngOnInit(){
    this.detailArr = this.order.requestDetails;
    //console.log(this.detailArr);
    this.accountArr = this.order.accounts;
    //console.log(this.accountArr);
  }

  resolve() : void {
    alert("Request has been resolved!");
    this.order.fulfilled = true;
    this.orderService.changeOrderStatus(this.order.id, this.order).subscribe(json => console.log(json));
  }

}
