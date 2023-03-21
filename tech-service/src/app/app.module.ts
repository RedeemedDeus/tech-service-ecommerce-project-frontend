import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { NavbarComponent } from './navbar/navbar.component';
import { ServiceDropdownComponent } from './components/service-dropdown/service-dropdown.component';
import { InputComponent } from './components/input/input.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { CustomerPriceComponent } from './components/customer-price/customer-price.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MyOrdersComponent } from './pages/my-orders/my-orders.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  //  NavbarComponent,
    ServiceDropdownComponent,
    InputComponent,
    OrderListComponent,
    CustomerPriceComponent,
    HomeComponent,
    LoginComponent,
    MyOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
