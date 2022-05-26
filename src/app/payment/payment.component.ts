import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { BillService } from '../bill.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

    public bill:any

    paymentRequest:google.payments.api.PaymentDataRequest={
      apiVersion:2,
      apiVersionMinor:0,
      allowedPaymentMethods:[
        {
          type:'CARD',
          parameters:{
            allowedAuthMethods:['PAN_ONLY','CRYPTOGRAM_3DS'],
            allowedCardNetworks:['MASTERCARD','VISA'],
          },
          tokenizationSpecification:{
            type:'PAYMENT_GATEWAY',
            parameters:{
              gateway:'example',
              gatewayMerchantId:'BCR2DN4T6DHPHHI2',
            },
          },
        },
      ],
      merchantInfo:{
        merchantId:'BCR2DN4T6DHPHHI2',
        merchantName:'ABCcompany',
      },
      transactionInfo:{
        totalPriceStatus:'FINAL',
        totalPriceLabel:'Total',
        totalPrice:'1.0',
        currencyCode:'INR',
        countryCode:'IND',

      },
      callbackIntents:['PAYMENT_AUTHORIZATION']

    };

 onLoadPaymentData=(event:Event)  :void=>{
   const eventDetail = event as CustomEvent<google.payments.api.PaymentData>
   console.log('Load payment Data',eventDetail.detail)
 }
 onPaymentDataAuthorized:google.payments.api.PaymentAuthorizedHandler=(
  paymentData
 )=>{
   console.log('payment authorized',paymentData);
   return{
     transactionState:'SUCCESS'
   }
 }
  onError=(event:ErrorEvent):void=>{
    console.log('error',event.error);
  }
  onPayment(){
    this._router.navigate(['/jspdf']);
  }
 
  constructor(private _router : Router,private _activatedRouter:ActivatedRoute,private _billService:BillService) { }

  ngOnInit(): void {
    this._billService.currentuserbill.subscribe(ubill => this.bill = ubill);
    console.log(this.bill);
   }

}
