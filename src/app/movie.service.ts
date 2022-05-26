import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { stringify } from 'querystring';
import { Movie } from './movie';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private _baseUri = "http://localhost:8080/movies/"
  // private _baseUri = "https://movie-ticket-backend.herokuapp.com/movies/"
  constructor(private _http : HttpClient) { }

  doSearch(){
    // return this._http.post< {message : string, movie: any } >(this._baseUri+'search',movie);
  }
  getMovies(){
    return this._http.get<{message:string, movie:any}>(this._baseUri);
  }
  getMovieById(id :string){
    const httpHeaders=new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : 'Bearer '+ localStorage.getItem('token')
    })
    const httpOptions={
      headers: httpHeaders
    }
    
     return this._http.get<{message : string, movie : any}>(this._baseUri+id);
  }
  saveMovie(movie:Movie){
    const httpHeaders = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization' : 'Bearer '+ localStorage.getItem('token')
    })

    const httpOptions ={ 
      headers : httpHeaders
    }


    return this._http.post<{message : string, posts : any}>(this._baseUri+'/add',movie, httpOptions );
  }
  updateMovie(movie:Movie){
    const httpHeaders=new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : 'Bearer '+ localStorage.getItem('token')
    })
    const httpOptions={
      headers: httpHeaders
    }
    
     return this._http.patch<{message : string}>(this._baseUri+'/update/'+movie.id,movie, httpOptions );

  }
  updateMovie1(movie:Movie){
    const httpHeaders=new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : 'Bearer '+ localStorage.getItem('token')
    })
    const httpOptions={
      headers: httpHeaders
    }
    
     return this._http.put<{message : string}>(this._baseUri+'/update1/'+movie.id,movie, httpOptions );

  }

  deleteMovie(movie:Movie){
    const options={
      headers : new HttpHeaders({
        'Content-type':'application/json',
        'Authorization' : 'Bearer '+ localStorage.getItem('token')
      }),
      body: JSON.stringify(movie)
    }
    console.log(options)
     return this._http.delete<{message : string}>(this._baseUri+movie.id, options );
  }
 
}
