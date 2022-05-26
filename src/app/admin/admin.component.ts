import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  show1:boolean=false
  show2:boolean=false
  show3:boolean=false
  show4:boolean=false
  constructor(private _router : Router) { }

  ngOnInit(): void {
  }
  onLogOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    
    this._router.navigate(['/login'])
    Swal.fire({
      title: 'Admin Logged Out ',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })

  }
  showmovies(){
    this.show1=!this.show1
  }
  
  addmovie(){
    this.show3=!this.show3
  }

  showRevinue(){
    this.show4=!this.show4
  }
  

}
