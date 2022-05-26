import { Component, OnInit,Input,Output } from '@angular/core';
import { Router } from '@angular/router';
import {MovieService} from '../movie.service';
import { map } from 'rxjs/operators'
import { Movie } from '../movie';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  movies : Movie[];
  movie : Movie;
  mname:String[]=[]
  idarr:String[]=[]
  movie_name : String
  public isLoggedIn : boolean = false;
  userName : string;
  notfound:boolean=false

  SearchMovie(){
    console.log(this.movie_name)
    if(this.mname.indexOf(this.movie_name)!=-1){
      console.log('found')
      let i= this.mname.indexOf(this.movie_name);
      let reqid=this.idarr[i]
      this._router.navigate(['/movie/'+reqid])
      
    }
    else{
      this.notfound=true;
      
      window.location.reload();
    }
    

  }

  constructor(private _movieService : MovieService, private _router : Router) { }

  ngOnInit(): void {

    this._movieService.getMovies().pipe(map(responseData=>{
      console.log(responseData.movie[0].moviename)
      var len=responseData.movie.length;
      for (var i = 0; i < len; i++) {
        this.mname.push(responseData.movie[i].moviename);
      }
      for (var i = 0; i < len; i++) {
        this.idarr.push(responseData.movie[i]._id);
      }
      
      console.log(this.idarr);
      return responseData.movie.map(movie=>{
        return {
          id : movie._id,
          moviename : movie.moviename,
          description:movie.description,
          imglink:movie.imglink,
          releasedate:movie.releasedate,
          showtime:movie.showTime,
          price:movie.price
        }
      })
    })).subscribe(changedData=>{
      console.log(this.movies);
      this.movies = changedData;
    });




    this.userName=localStorage.getItem('userName');
    if(this.userName==null){
      this.isLoggedIn=false;
    }
    else{
      this.isLoggedIn=true;
    }
    console.log(this.isLoggedIn)
    console.log(this.userName)
  }
  change(){
    
    if(this.userName!='null'){
      this.isLoggedIn=true;
    }

  }
  patia(){
    Swal.fire({
      icon: 'info',
      title: 'You are just 30 minutes away',
      text: 'Dont miss the next blockbuster movie',
      footer: '<a href="https://www.google.com/maps/dir/Patia,+Bhubaneswar,+Odisha/INOX+Symphony+Mall,+8VFJ%2B5VX,+Rudrapur,+NH16,+Bhubaneswar,+Odisha/@20.3252439,85.8163566,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x3a190912b69339ab:0xa11e7186a04f1474!2m2!1d85.8265977!2d20.3532772!1m5!1m1!1s0x3a190b093066f465:0xd51eee052eb538d4!2m2!1d85.8822493!2d20.3229876!3e0">Want map directions?</a>'
    })
  }
  crp(){
    Swal.fire({
      icon: 'info',
      title: 'You are just 30 minutes away',
      text: 'Dont miss the next blockbuster movie',
      footer: '<a href="https://www.google.com/maps/dir/Patia,+Bhubaneswar,+Odisha/INOX+Symphony+Mall,+8VFJ%2B5VX,+Rudrapur,+NH16,+Bhubaneswar,+Odisha/@20.3252439,85.8163566,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x3a190912b69339ab:0xa11e7186a04f1474!2m2!1d85.8265977!2d20.3532772!1m5!1m1!1s0x3a190b093066f465:0xd51eee052eb538d4!2m2!1d85.8822493!2d20.3229876!3e0">Want map directions?</a>'
    })
  }
  saheed(){
    Swal.fire({
      icon: 'info',
      title: 'You are just 30 minutes away',
      text: 'Dont miss the next blockbuster movie',
      footer: '<a href="https://www.google.com/maps/dir/Patia,+Bhubaneswar,+Odisha/INOX+Symphony+Mall,+8VFJ%2B5VX,+Rudrapur,+NH16,+Bhubaneswar,+Odisha/@20.3252439,85.8163566,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x3a190912b69339ab:0xa11e7186a04f1474!2m2!1d85.8265977!2d20.3532772!1m5!1m1!1s0x3a190b093066f465:0xd51eee052eb538d4!2m2!1d85.8822493!2d20.3229876!3e0">Want map directions?</a>'
    })
  }
  onLogOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    this.isLoggedIn = false;
    this._router.navigate(['/login'])
    // window.alert("you loged out");
    let timerInterval
Swal.fire({
  title: 'Logging out!',
  html: '<b></b> milliseconds.',
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = String(Swal.getTimerLeft())
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})

  }

}
