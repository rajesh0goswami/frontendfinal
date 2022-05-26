import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import{map} from 'rxjs/operators'
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import { Movie } from '../movie';
@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {
  trailerlink:String
  movie:Movie
  revinue:number=0
  id: string
  Genre:String
  moviename:String
  A1:any={} ;A2:any={};A3:any={};A4:any={};A5:any={};A6:any={};A7:any={};A8:any={};A9:any={};A10:any={}
  imglink:String
  description:String
  price:String
  showTime:String
  date:String
  releaseDate:String
  constructor(private _movieService : MovieService,private _activatedRouter:ActivatedRoute,private _router : Router) { }
  addMovie(){
    this.movie= {date:this.date,trailerlink:this.trailerlink,Genre:this.Genre,revinue:this.revinue , id :this.id , moviename : this.moviename, description : this.description,imglink:this.imglink,price:this.price,releaseDate:this.releaseDate,showTime:this.showTime,A1:this.A1,A2:this.A2,A3:this.A3,A4:this.A4,A5:this.A5,A6:this.A6,A7:this.A7,A8:this.A8,A9:this.A9,A10:this.A10}

    this._movieService.saveMovie(this.movie).subscribe(responseData=>{
      this._router.navigate(['/admin']);
        window.alert("Movie saved");
    })
  }

  ngOnInit(): void {
    this.A1.available=true
    this.A1.occupiedby=""
    this.A2.available=true
    this.A2.occupiedby=""
    this.A3.available=true
    this.A3.occupiedby=""
    this.A4.available=true
    this.A4.occupiedby=""
    this.A5.available=true
    this.A5.occupiedby=""
    this.A6.available=true
    this.A6.occupiedby=""
    this.A7.available=true
    this.A7.occupiedby=""
    this.A8.available=true
    this.A8.occupiedby=""
    this.A9.available=true
    this.A9.occupiedby=""
    this.A10.available=true
    this.A10.occupiedby=""
  }

}
