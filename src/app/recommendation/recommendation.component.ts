import { Component, OnInit } from '@angular/core';

import {MovieService} from '../movie.service';
import { map } from 'rxjs/operators'
import {Input,Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { UsersService } from '../users.service';
import { User } from '../user'
import { Movie } from '../movie';


@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {
  movie:Movie
  
  Data:string
  sorted:any
  imgarr:String[]=[]
  mname:String[]=[]
  idarr:String[]=[]
  movies : Movie[]=[];
  user:User
  History:any=[]
  userName:string
  public userid : string;
  email:string
  password:string
  role:string
  Genre:String
  revinue:number

  constructor(private _userService : UsersService,private _movieService : MovieService,private _activatedRouter:ActivatedRoute) { }

  
  ngOnInit(): void {

    this._userService.currentuserId.subscribe(uid => this.userid = uid);
    console.log(" uid from reommendations "+this.userid);
    
    console.log("from recommendation")
    console.log(this.History)
    console.log(this.userName)

    this._userService.getUserById(this.userid).subscribe({
      next: responseData => {
        console.log(responseData)
        this.Data=responseData.user.historyData
        var newarr = this.Data.split("/"); 
        console.log(newarr);
        this.sorted=this.sortByFrequency(newarr);
        let unique = this.sorted.filter((item, i, ar) => ar.indexOf(item) === i);
        console.log(unique);

        //--------------
        this._movieService.getMovies().pipe(map(responseData=>{
          
          console.log(responseData)
          var len=responseData.movie.length;
          var len1=unique.length;
          for (var i = 0; i < len1; i++) {
            for (var j = 0; j < len; j++) {
              if(responseData.movie[j].Genre==unique[i])
              this.idarr.push(responseData.movie[j]._id);
            }
          }
         
          
            for(var j=0;j<this.idarr.length;j++){
              this._movieService.getMovieById(String(this.idarr[j])).subscribe(responseData=>{
                this.movies.push(responseData.movie)
                
              }
                
              )
              
            
          }
        })).subscribe();
      },
      error: err => {
        console.log("Error");
        
      }
    })
    
  }
  sortByFrequency(array) {
    var frequency = {};
    var sortAble = [];
    var newArr = [];

    array.forEach(function(value) { 
        if ( value in frequency )
            frequency[value] = frequency[value] + 1;
        else
            frequency[value] = 1;
    });
    

    for(var key in frequency){
        sortAble.push([key, frequency[key]])
    }

    sortAble.sort(function(a, b){
        return b[1] - a[1]
    })

    
    sortAble.forEach(function(obj){
        for(var i=0; i < obj[1]; i++){
            newArr.push(obj[0]);
        }
    })
    return newArr;
    
}

  

}
