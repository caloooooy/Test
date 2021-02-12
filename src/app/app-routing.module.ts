import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookdComponent } from './bookd/bookd.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { PaymentComponent } from './payment/payment.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdpageComponent } from './thirdpage/thirdpage.component';

const routes: Routes = [
  {path: 'first-page', component: FirstPageComponent},
  {path: 'second-page', component: SecondPageComponent},
  {path: 'third-page', component: ThirdpageComponent},
  {path: 'books', component: BookdComponent},
  {path: 'payment', component: PaymentComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
