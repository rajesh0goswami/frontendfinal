import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { stringify } from 'querystring';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

    private _baseUri = "http://localhost:8080/users/"
    // private _baseUri = "https://movie-ticket-backend.herokuapp.com/users/"
    
    constructor(private _http : HttpClient) { }


    private userId = new BehaviorSubject('');     
    currentuserId = this.userId.asObservable();
    updateUserId(uid: string) {
      this.userId.next(uid)
      }

    updateUser1(user:User,id:String){
      const httpHeaders=new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : 'Bearer '+ localStorage.getItem('token')
      })
      const httpOptions={
        headers: httpHeaders
      }
    
     return this._http.put<{message : string}>(this._baseUri+'update1/'+id,user, httpOptions );

  }
 

    getUsers(){
      return this._http.get<{message:string, user:any}>(this._baseUri);
    }
    getUserById(id :string){
      const httpHeaders=new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : 'Bearer '+ localStorage.getItem('token')
      })
      const httpOptions={
        headers: httpHeaders
      }
      return this._http.get<{message : string, user : any}>(this._baseUri+id);
    }

  saveUser(user){
    return this._http.post< {message : string, user : any } >(this._baseUri+'register',user);
  }

   doLogin(user){
    const httpHeaders = new HttpHeaders({
      'Content-Type':'application/json'
    })

    const httpOptions ={ 
      headers : httpHeaders
    }

     return this._http.post<{ message : string, user: any, token : string}>(this._baseUri+'login',user,httpOptions);
   }
   
  
}
