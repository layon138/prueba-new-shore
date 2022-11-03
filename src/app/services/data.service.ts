import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { FlightResponse, Journey } from '../interfaces/jorney.interface';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private maxFlights=0
  constructor(private http: HttpClient) {

  }

  findTravel(where:string,todosLosVuelos:FlightResponse[],arrival:string){
    const existeVuelos=todosLosVuelos?.filter(state => state.departureStation==where && state.arrivalStation==arrival)
    console.log(existeVuelos)
    if(existeVuelos.length==0){
      let list:any[]=[]
        const newTravel=todosLosVuelos?.filter(state => state.departureStation==where)
        console.log(newTravel)
        for (const element of newTravel) {
          const existeVuelos2=todosLosVuelos?.filter(state => state.departureStation==element.arrivalStation && state.arrivalStation==arrival)
          if(existeVuelos2.length>0){
            list.push(element) 
            list.push(existeVuelos2[0]) 
            break
          }
        }
        return list
    }else{
      return existeVuelos
    }
    
  }

  getJorney(jorney:Journey){
    return this.http.get<any>(`${environment.APIDomain}api/flights/2`,{}).pipe(
      map((flights:FlightResponse[]) => {
        const list:FlightResponse[]=this.findTravel(jorney.origin,flights,jorney.destination)
        console.log(list)
       list.forEach(element => {
        jorney.price=jorney.price+element.price
        jorney.flights.push(
          {
            destination:element.arrivalStation,
            origin:element.departureStation,
            price:element.price,
            transport:{
              flightCarrier:element.flightCarrier,
              flightNumber:element.flightNumber
            }
          }
        )
        });
        return jorney
      } )
    );
  }

  


}


