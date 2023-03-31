import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceDropdownComponent } from './components/service-dropdown/service-dropdown.component';
import { InputComponent } from './components/input/input.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { CustomerPriceComponent } from './components/customer-price/customer-price.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MyOrdersComponent } from './pages/my-orders/my-orders.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderComponent } from './components/order/order.component';
import { RegisterComponent } from './register/register.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ServiceDropdownComponent,
    InputComponent,
    OrderListComponent,
    CustomerPriceComponent,
    HomeComponent,
    LoginComponent,
    MyOrdersComponent,
    OrderComponent,
    RegisterComponent
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  exports: [
    NavbarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
