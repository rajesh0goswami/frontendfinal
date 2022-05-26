import { Component, OnInit } from '@angular/core';

import { MovieService } from '../movie.service';
import{map} from 'rxjs/operators'
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import { Movie } from '../movie';
@Component({
  selector: 'app-editmovie',
  templateUrl: './editmovie.component.html',
  styleUrls: ['./editmovie.component.css']
})
export class EditmovieComponent implements OnInit {
  movieGenre:String
  movie:Movie
  revinue:number
  trailerlink:string
  id: string
  moviename:String
  A1:any={} ;A2:any={};A3:any={};A4:any={};A5:any={};A6:any={};A7:any={};A8:any={};A9:any={};A10:any={}
  imglink:String
  description:String
  price:String
  showTime:String
  date:String
  releaseDate:String
  constructor(private _movieService : MovieService,private _activatedRouter:ActivatedRoute,private _router : Router) { }

  update(){
    
    this.movie= {date:this.date, trailerlink:this.trailerlink,Genre:this.movieGenre,id :this.id ,revinue:this.revinue, moviename : this.moviename, description : this.description,imglink:this.imglink,price:this.price,releaseDate:this.releaseDate,showTime:this.showTime,A1:this.A1,A2:this.A2,A3:this.A3,A4:this.A4,A5:this.A5,A6:this.A6,A7:this.A7,A8:this.A8,A9:this.A9,A10:this.A10}
      this._movieService.updateMovie1(this.movie).subscribe()

      this._router.navigate(['/admin']);
  }
  ngOnInit(): void {
    this._activatedRouter.paramMap.subscribe(param=> this.id = (param.get('id')))
     console.log(this.id)

     if(this.id != null){
      this._movieService.getMovieById(this.id).pipe(map(responseData=>{

        console.log(responseData)
        this.moviename=responseData.movie.moviename;
        this.imglink=responseData.movie.imglink;
        this.description=responseData.movie.description;
        this.releaseDate=responseData.movie.releaseDate;
        this.price=responseData.movie.price;
        this.showTime=responseData.movie.showTime;
        this.date=responseData.movie.date;
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
        
       
      })).subscribe();
     
  }

  

  

}
}
