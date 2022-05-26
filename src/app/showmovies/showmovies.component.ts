import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service';
import { map } from 'rxjs/operators'
import Swal from 'sweetalert2';
import { Movie } from '../movie';
@Component({
  selector: 'app-showmovies',
  templateUrl: './showmovies.component.html',
  styleUrls: ['./showmovies.component.css']
})
export class ShowmoviesComponent implements OnInit {
  movies : Movie[];
  movie : Movie;


  constructor(private _movieService : MovieService) { }

  onDelete(movie:Movie):void{
    this._movieService.deleteMovie(movie).subscribe();
    // this.router.navigate(['posts']);
    // window.location.reload();
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })

  }

  ngOnInit(): void {
    
    this._movieService.getMovies().pipe(map(responseData=>{
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

  }

}
