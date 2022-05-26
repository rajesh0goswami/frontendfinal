import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service';
import { map } from 'rxjs/operators'
import {Input,Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { UsersService } from '../users.service';
import { BillService } from '../bill.service';
import { User } from '../user'
import { Movie } from '../movie';
import { Router } from '@angular/router';

import { convertUpdateArguments } from '@angular/compiler/src/compiler_util/expression_converter';
import { range } from 'rxjs';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  movie:Movie
  user:User
  public userid : string;
  email:string
  
  password:string
  role:string
  Genre:String
  revinue:number
  public count:any=1
  showBill:boolean=false
  public amount:any
  A1:any={} ;A2:any={};A3:any={};A4:any={};A5:any={};A6:any={};A7:any={};A8:any={};A9:any={};A10:any={}
  userName: String
  id : string
  i:any
  price:any
  bill:string
  public moviename:String
  imglink:String
  description:String
  public releasedate:String
  public showtime:String
  public date:String
  rev:number
  selected:boolean[]=[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
  avail:boolean[]=[]
  occ:String[]=[]
  booked_seats:any=[]
  x:String
  historyData:any
  trailerlink:String
  constructor(private _userService : UsersService,private _billService:BillService,private _movieService : MovieService,private _activatedRouter:ActivatedRoute,private _router : Router) {
    
  }
    
  enableDisableRule(i) {
    console.log(i)
    this.selected[i] = !this.selected[i];
    // for (var index in this.selected) 
    // {
    //   console.log(this.selected[index])
    // }
  }
  submit(){
    this.i=0;
    for(var index in this.selected){
      this.i=this.i+1
      if(this.selected[index]==true){
        this.booked_seats.push(this.i)
        this.x=index
        this.makeAvailabilityFalse(this.x);
        this.count=this.count+1;
      }
      
    }
    console.log(this.booked_seats);

    this._billService.updateUserSeat(this.booked_seats);

    this._userService.currentuserId.subscribe(uid => this.userid = uid);
    console.log(this.userid);
    this._userService.getUserById(this.userid).subscribe({
      next: responseData => {
        console.log(responseData)
        this.historyData = responseData.user.historyData
        this.userName = responseData.user.username
        this.email = responseData.user.email
        this.password = responseData.user.password
        this.role = responseData.user.role
        console.log(this.userName);
        console.log(this.historyData);
        console.log(this.Genre)
        
        this.historyData.concat(this.Genre.toString());
        console.log(this.historyData);
        console.log(this.userName);
        this.user = { historyData: this.historyData+'/'+this.Genre, username: this.userName, email: this.email, password: this.password, role: this.role }
        this._userService.updateUser1(this.user, this.userid).subscribe()
      },
      error: err => {
        console.log("Error");
        
      }
    })
    
  }
  makeAvailabilityFalse(ind){ 
    this.avail[ind]=false
    this.occ[ind]=this.userName
    this.A1.available=this.avail[0]
    this.A2.available=this.avail[1]
    this.A3.available=this.avail[2]
    this.A4.available=this.avail[3]
    this.A5.available=this.avail[4]
    this.A6.available=this.avail[5]
    this.A7.available=this.avail[6]
    this.A8.available=this.avail[7]
    this.A9.available=this.avail[8]
    this.A10.available=this.avail[9]
    this.A1.occupiedby=this.occ[0]
    this.A2.occupiedby=this.occ[1]
    this.A3.occupiedby=this.occ[2]
    this.A4.occupiedby=this.occ[3]
    this.A5.occupiedby=this.occ[4]
    this.A6.occupiedby=this.occ[5]
    this.A7.occupiedby=this.occ[6]
    this.A8.occupiedby=this.occ[7]
    this.A9.occupiedby=this.occ[8]
    this.A10.occupiedby=this.occ[9]
    console.log(this.A1.available)
    console.log(this.count+"number of seats")
    console.log(this.price*this.count)
    this.amount=(this.price*this.count)
    console.log(this.amount+" bill amt")

    this._billService.updateUserBill(this.amount)

    this.showBill=true
    console.log("revinue prev"+this.rev)
    this.revinue=this.rev+this.amount
    console.log("revinue now =" +this.revinue)
    this.movie= {date:this.date,trailerlink:this.trailerlink,Genre:this.Genre, id :this.id ,revinue:this.revinue, moviename : this.moviename, description : this.description,imglink:this.imglink,price:this.price,releaseDate:this.releasedate,showTime:this.showtime,A1:this.A1,A2:this.A2,A3:this.A3,A4:this.A4,A5:this.A5,A6:this.A6,A7:this.A7,A8:this.A8,A9:this.A9,A10:this.A10}
    this._movieService.updateMovie(this.movie).subscribe()
    
  }
    


  ngOnInit(): void {
    this.userName=localStorage.getItem('userName');
    console.log(this.userName);
    

    this._activatedRouter.paramMap.subscribe(param=> this.id = (param.get('id')))
    //  console.log(this.id)

     if(this.id != null){
      this._movieService.getMovieById(this.id).pipe(map(responseData=>{
        // console.log(responseData)
        this.rev=responseData.movie.revinue
        this.moviename = responseData.movie.moviename
        this._billService.updateMovieName(this.moviename);
        this.releasedate=responseData.movie.releaseDate
        this.date=responseData.movie.date
        this.showtime=responseData.movie.showTime
        this._billService.updateShowTime(this.showtime);
        this.description=responseData.movie.description
        this.imglink=responseData.movie.imglink
        this.date=responseData.movie.date
        this._billService.updateShowDate(this.date);
        
        this.Genre=responseData.movie.Genre
        // console.log(this.Genre)
        // console.log(this.moviename)
        // console.log(this.date)
        this.price= responseData.movie.price
        this.A1.available=responseData.movie.A1.available
        this.A1.occupiedby=responseData.movie.A1.occupiedby
        this.A2.available=responseData.movie.A2.available
        this.A2.occupiedby=responseData.movie.A2.occupiedby
        this.A3.available=responseData.movie.A3.available
        this.A3.occupiedby=responseData.movie.A3.occupiedby
        this.A4.available=responseData.movie.A4.available
        this.A4.occupiedby=responseData.movie.A4.occupiedby
        this.A5.available=responseData.movie.A5.available
        this.A5.occupiedby=responseData.movie.A5.occupiedby
        this.A6.available=responseData.movie.A6.available
        this.A6.occupiedby=responseData.movie.A6.occupiedby
        this.A7.available=responseData.movie.A7.available
        this.A7.occupiedby=responseData.movie.A7.occupiedby
        this.A8.available=responseData.movie.A8.available
        this.A8.occupiedby=responseData.movie.A8.occupiedby
        this.A9.available=responseData.movie.A9.available
        this.A9.occupiedby=responseData.movie.A9.occupiedby
        this.A10.available=responseData.movie.A10.available
        this.A10.occupiedby=responseData.movie.A10.occupiedby
        // console.log(this.A1.available);
        // console.log(this.A1.occupiedby);
        this.avail[0]=this.A1.available;
        this.avail[1]=this.A2.available;
        this.avail[2]=this.A3.available;
        this.avail[3]=this.A4.available;
        this.avail[4]=this.A5.available;
        this.avail[5]=this.A6.available;
        this.avail[6]=this.A7.available;
        this.avail[7]=this.A8.available;
        this.avail[8]=this.A9.available;
        this.avail[9]=this.A10.available;
        
        this.occ[0]=this.A1.occupiedby;
        this.occ[1]=this.A2.occupiedby;
        this.occ[2]=this.A3.occupiedby;
        this.occ[3]=this.A4.occupiedby;
        this.occ[4]=this.A5.occupiedby;
        this.occ[5]=this.A6.occupiedby;
        this.occ[6]=this.A7.occupiedby;
        this.occ[7]=this.A8.occupiedby;
        this.occ[8]=this.A9.occupiedby;
        this.occ[9]=this.A10.occupiedby;
        
        // console.log(this.avail)
       
      })).subscribe();


  }

  }
}
