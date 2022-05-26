import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import {Input,Output} from '@angular/core'; 
import Swal from 'sweetalert2';
import { User } from '../user'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  historyData:string
  email : String
  uname: String
  public uid:any
  role:String="user"
  @Input() public isLoggedIn
  password : String
  LoginFailedMessage : string
  user: User
 

  isLoggedInFailed : boolean = true;
  constructor(private _userService : UsersService , private _router : Router) { }

  OnLogin(){
    console.log(this.email) 
    console.log(this.password) 
    this.user = {
      
      username: this.uname,
      email: this.email,
      password: this.password,
      role:this.role,
      historyData:this.historyData
    }
    this._userService.doLogin(this.user).subscribe(responseData=>{
        if(responseData.token!=''){
          console.log(responseData.token)  
          const token = responseData.token;
          const userName = responseData.user.userName;
            const role=responseData.user.role;
            this.uid=responseData.user.id;
            console.log("im stuck here +");
            console.log(this.uid);
            this._userService.updateUserId(this.uid)
            localStorage.setItem('token',token);
            localStorage.setItem('userName',userName);
            console.log(this.isLoggedIn);
            console.log(responseData);
            if(role=="admin"){
              this._router.navigate(['/admin']);
            }
            else{
              this._router.navigate(['/']);
            }
            
            // window.alert("you are loged in")
            let timerInterval
Swal.fire({
  title: 'Logging You In!',
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
        }else{
          this.LoginFailedMessage = responseData.message
          this.isLoggedInFailed = false
        }    
    }
    );

  }

  

  ngOnInit(): void {
  }
  

}
