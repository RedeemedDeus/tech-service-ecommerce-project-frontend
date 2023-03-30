import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyOrdersComponent } from './pages/my-orders/my-orders.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: "orders", component: MyOrdersComponent},
  {path: "home", component: HomeComponent},
  {path: "", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
