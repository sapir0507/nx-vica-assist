import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { environment } from './env';
import { Flight, FlightRequest } from './flight.interface';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private FLIGHTS: Flight[] = [];
  flightsArray: Flight[] = [];
  private _flight$: BehaviorSubject<Flight[]> = new BehaviorSubject(this.flightsArray);
  public flight$: Observable<Flight[]> = this._flight$.asObservable();
  private readonly FlightsServiceUrl = environment.api + 'flights';

  constructor(private http: HttpClient) { }


  private postFlight(flight :FlightRequest){
    return this.http.post<Flight>(this.FlightsServiceUrl, flight)
    .pipe(
      catchError(err => this.handleError(err, 'postFlight', flight))
    );
  }

  private _getFlights(){
    return this.http.get<Flight>(this.FlightsServiceUrl, {
      

    })
    .pipe(
      catchError(err => this.handleError(err, 'postFlight', ""))
    );
  }
  private handleError(error: HttpErrorResponse, methodName? : string, obj? : any) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError('Something went wrong, please try again later.' + methodName + ' ' + obj);
  }

  addFlight(newFlight: FlightRequest): void {
    console.log("adding flight -> service")
    console.log("value to add is:", newFlight)
    console.log("Adding...")
    // this._flight$.next([...this._flight$.getValue(), newFlight])
    this.postFlight(newFlight).subscribe(data => console.log(data))
    // this.FLIGHTS? this.FLIGHTS.push(newFlight): this.FLIGHTS = [newFlight];
    console.log("FLIGHTS:", this.flightsArray)
}


getFlights(): Observable<Flight>{
  console.log("getting all flights -> service")
  return this._getFlights()
}

}
