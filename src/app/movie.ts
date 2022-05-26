export class Movie {
    id:String
    
    moviename : String;
    imglink : String;
    trailerlink:String;
    description : String;
    releaseDate:String;
    date:String;
    showTime : String;
    price : String;
    A1:seat;
    A2:seat;
    A3:seat;
    A4:seat;
    A5:seat;
    A6:seat;
    A7:seat;
    A8:seat;
    A9:seat;
    A10:seat;
   revinue:number;
   Genre:String;
}
interface seat {
    available: boolean;
    occupiedby: string;
 }