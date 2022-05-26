import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BookingComponent } from './booking/booking.component';
import { MovieComponent } from './movie/movie.component';
import { AdminComponent } from './admin/admin.component';
import { ShowmoviesComponent } from './showmovies/showmovies.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { EditmovieComponent } from './editmovie/editmovie.component';
import { BookingdetailsComponent } from './bookingdetails/bookingdetails.component';
import { JspdfComponent } from './jspdf/jspdf.component';
import { PaymentComponent } from './payment/payment.component';
import {NgxPrintModule} from 'ngx-print';

import { QRCodeModule } from 'angular2-qrcode';
import { ShowRevinueComponent } from './show-revinue/show-revinue.component';
import { GooglePayButtonModule } from '@google-pay/button-angular';
import { GoogleChartsModule } from 'angular-google-charts';
import { RecommendationComponent } from './recommendation/recommendation.component';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    BookingComponent,
    MovieComponent,
    AdminComponent,
    ShowmoviesComponent,
    AddmovieComponent,
    EditmovieComponent,
    BookingdetailsComponent,  
    JspdfComponent,
    PaymentComponent,
    ShowRevinueComponent,
    RecommendationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPrintModule,
    QRCodeModule,
    GoogleChartsModule,
    GooglePayButtonModule
  ],
  
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
