import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service';
import { map } from 'rxjs/operators'
import {ActivatedRoute} from '@angular/router'
import { Movie } from '../movie';
@Component({
  selector: 'app-bookingdetails',
  templateUrl: './bookingdetails.component.html',
  styleUrls: ['./bookingdetails.component.css']
})
export class BookingdetailsComponent implements OnInit {
  id:string
  moviename:String
  price:any
  revinue:number
  imglink:String
  arr:any[]=['0','1','2','3','4','5','6','7','8','9']
  A1:any={} ;A2:any={};A3:any={};A4:any={};A5:any={};A6:any={};A7:any={};A8:any={};A9:any={};A10:any={}
  seats:any[]=['A1','A2','A3','A4','A5','A6','A7','A8','A9','A10']
  available:boolean[]=[]
  occupiedby:String[]=[]
  count:number=0
  sells:any
  constructor(private _movieService : MovieService,private _activatedRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRouter.paramMap.subscribe(param=> this.id = (param.get('id')))
    console.log(this.id)

    if(this.id != null){
      this._movieService.getMovieById(this.id).pipe(map(responseData=>{
        this.moviename = responseData.movie.moviename
        console.log(this.moviename)
        this.price= responseData.movie.price
        this.imglink=responseData.movie.imglink
        this.A1.available=responseData.movie.A1.available
        this.available.push( this.A1.available)
        this.A1.occupiedby=responseData.movie.A1.occupiedby
        this.occupiedby.push(this.A1.occupiedby)
        this.A2.available=responseData.movie.A2.available
        this.available.push( this.A2.available)
        this.A2.occupiedby=responseData.movie.A2.occupiedby
        this.occupiedby.push(this.A2.occupiedby)
        this.A3.available=responseData.movie.A3.available
        this.available.push( this.A3.available)
        this.A3.occupiedby=responseData.movie.A3.occupiedby
        this.occupiedby.push(this.A3.occupiedby)
        this.A4.available=responseData.movie.A4.available
        this.available.push( this.A4.available)
        this.A4.occupiedby=responseData.movie.A4.occupiedby
        this.occupiedby.push(this.A4.occupiedby)
        this.A5.available=responseData.movie.A5.available
        this.available.push( this.A5.available)
        this.A5.occupiedby=responseData.movie.A5.occupiedby
        this.occupiedby.push(this.A5.occupiedby)
        this.A6.available=responseData.movie.A6.available
        this.available.push( this.A6.available)
        this.A6.occupiedby=responseData.movie.A6.occupiedby
        this.occupiedby.push(this.A6.occupiedby)
        this.A7.available=responseData.movie.A7.available
        this.available.push( this.A7.available)
        this.A7.occupiedby=responseData.movie.A7.occupiedby
        this.occupiedby.push(this.A7.occupiedby)
        this.A8.available=responseData.movie.A8.available
        this.available.push( this.A8.available)
        this.A8.occupiedby=responseData.movie.A8.occupiedby
        this.occupiedby.push(this.A8.occupiedby)
        this.A9.available=responseData.movie.A9.available
        this.available.push( this.A9.available)
        this.A9.occupiedby=responseData.movie.A9.occupiedby
        this.occupiedby.push(this.A9.occupiedby)
        this.A10.available=responseData.movie.A10.available
        this.available.push( this.A10.available)
        this.A10.occupiedby=responseData.movie.A10.occupiedby
        this.occupiedby.push(this.A10.occupiedby)
        for(let i of this.available){
          if(i==false)
           this.count=this.count+1
        }
        this.sells=this.price*this.count
       
      })).subscribe();
  }

}
}
