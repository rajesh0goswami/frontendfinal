import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { BookingComponent } from './booking/booking.component';
import { BookingdetailsComponent } from './bookingdetails/bookingdetails.component';
import { ContactComponent } from './contact/contact.component';
import { EditmovieComponent } from './editmovie/editmovie.component';
import { IndexComponent } from './index/index.component';
import { JspdfComponent } from './jspdf/jspdf.component';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './movie/movie.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
    path:"",
    component:IndexComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"movie/:id",
    component:MovieComponent
  },
  {
    path:"booking/:id",
    component:BookingComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"admin",
    component:AdminComponent
  },
  {
    path:"edit/:id",
    component:EditmovieComponent
  },
  {
    path:"payment/:bill",
    component:PaymentComponent
  },
  {
    path:"jspdf",
    component:JspdfComponent
  },
  {
    path:"details/:id",
    component:BookingdetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
