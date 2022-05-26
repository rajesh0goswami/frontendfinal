import { Component, OnInit } from '@angular/core';
import { jsPDF } from "jspdf";
import {Input,Output} from '@angular/core';
import { Ticket } from '../ticket'
import { BillService } from '../bill.service';

@Component({
  selector: 'app-jspdf',
  templateUrl: './jspdf.component.html',
  styleUrls: ['./jspdf.component.css']
})
export class JspdfComponent implements OnInit {

 @Input('booked_seats') public booked_seats;
 @Input('amount') public amount;
 @Input('count') public cnt;
 @Input('showtime') public  showtime;
 @Input('moviename') public  moviename;
 @Input('releasedate') public releasedate;
 tk:any
 qrInfo:any
 
bill:any
seatNo:any
date:any
time:any  
mname:any
  constructor(private _billService:BillService) { 
  
  }

  ngOnInit(): void {
    this._billService.currentuserbill.subscribe(ubill => this.bill = ubill);
    this._billService.currentuserseatNo.subscribe(ubill => this.seatNo = ubill);
    this._billService.currentshowdate.subscribe(ubill => this.date = ubill);
    this._billService.currentshowtime.subscribe(ubill => this.time = ubill);
    this._billService.currentmoviename.subscribe(ubill => this.mname = ubill);
    
  }
  downloadPDF():void{
    console.log("download....");
    console.log(this.moviename);
    console.log(this.booked_seats);
    this.tk={
      "Movie name":this.mname,
      'Show Time ':this.time,
      'Show Date' :this.date,
      'Price' : this.bill,
      "booked_seats": this.seatNo
    }
    this.qrInfo = JSON.stringify(this.tk);
  }

}
