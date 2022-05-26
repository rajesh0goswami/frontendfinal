import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MovieService} from '../movie.service';
import { map } from 'rxjs/operators'
import { Movie } from '../movie';
@Component({
  selector: 'app-show-revinue',
  templateUrl: './show-revinue.component.html',
  styleUrls: ['./show-revinue.component.css']
})
export class ShowRevinueComponent implements OnInit {
 

  chartData = {
    type: 'BarChart',
    data: [
    ["-No-Current-Movie-",0],
    ],
    chartColumns: ['Movies', 'Sell'],
    width: 1000,
    height: 400
    };

  movies : Movie[];
  movie : Movie;
  mname:string[]=[]
  rev:number[]=[]

  constructor(private _movieService : MovieService, private _router : Router) { }

  ngOnInit(): void {
    this._movieService.getMovies().pipe(map(responseData=>{
      console.log(responseData.movie[0].moviename)
      var len=responseData.movie.length;
      for (var i = 0; i < len; i++) {
        this.mname.push(responseData.movie[i].moviename);
      }
      for (var i = 0; i < len; i++) {
        this.rev.push(responseData.movie[i].revinue);
      }
      for(var i=0;i<len;i++){
        console.log(this.mname[i]);
      }
      for(var i=0;i<len;i++){
        this.chartData.data[i]=[this.mname[i],this.rev[i]];
      }
      
      console.log(this.chartData.data)
      return responseData.movie.map(movie=>{
        return {
          id : movie._id,
          revinue:movie.revinue,
          moviename : movie.moviename,
          description:movie.description,
          imglink:movie.imglink,
          releasedate:movie.releasedate,
          showtime:movie.showTime,
          price:movie.price
        }
      })
    })).subscribe(changedData=>{
      
      this.movies = changedData;
    });
  }

}
