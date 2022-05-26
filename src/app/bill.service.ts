import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor() { }
  private bill = new BehaviorSubject('');     
  currentuserbill = this.bill.asObservable();

  private seatNo = new BehaviorSubject('');     
  currentuserseatNo = this.seatNo.asObservable();

  private date = new BehaviorSubject('');     
  currentshowdate = this.date.asObservable();

  private time = new BehaviorSubject('');     
  currentshowtime = this.time.asObservable();

  private mname = new BehaviorSubject('');     
  currentmoviename= this.mname.asObservable();

  updateUserBill(ubill: any) {
    this.bill.next(ubill)
    }

    updateUserSeat(useat: any) {
      this.seatNo.next(useat)
      }
      updateShowDate(udate: any) {
        this.date.next(udate)
        }

        updateShowTime(utime: any) {
          this.time.next(utime)
          }
          updateMovieName(mname: any) {
            this.mname.next(mname)
            }

}
