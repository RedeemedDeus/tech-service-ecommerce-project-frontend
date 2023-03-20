import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServiceDropdownComponent } from './components/service-dropdown/service-dropdown.component';
import { InputComponent } from './components/input/input.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { CustomerPriceComponent } from './components/customer-price/customer-price.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ServiceDropdownComponent,
    InputComponent,
    OrderListComponent,
    CustomerPriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
