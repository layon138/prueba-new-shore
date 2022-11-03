import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { FlightResponse, Journey } from '../interfaces/jorney.interface';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private  numberScales=0
  constructor(private http: HttpClient) {

  }

  travelRecurrency(whereIwas:string,where: string,allFlights: FlightResponse[], arrival: string){
    const flightsToScales = allFlights?.filter(state => state.departureStation == where && state.arrivalStation!=whereIwas)
    let listOfScales: FlightResponse[] = []
    let scaleBet: FlightResponse[] = []
    for (const possibleScale of flightsToScales) {
      const flightToDestination = allFlights?.filter(state => state.departureStation == possibleScale.arrivalStation && state.arrivalStation == arrival)
      if (flightToDestination.length > 0) {
        listOfScales.push(possibleScale)
        listOfScales.push(flightToDestination[0])
        break
      }
      this.numberScales++
      if( this.numberScales==4){
        break
      }
      const newList=this.travelRecurrency(possibleScale.departureStation,possibleScale.arrivalStation,allFlights,arrival)
     if(newList.length>0){
      listOfScales.push(possibleScale)
      newList.forEach(scale => {
        listOfScales.push(scale)
      });
      break
     }
    }
    return listOfScales
  }

  findTravel(where: string, allFlights: FlightResponse[], arrival: string) {
    const flightToDestination = allFlights?.filter(state => state.departureStation == where && state.arrivalStation == arrival)
    console.log(flightToDestination)
    if (flightToDestination.length == 0) {
      let list: any[] = []
      this.numberScales=0
      list =this.travelRecurrency("",where, allFlights,arrival)
      return list
    } else {
      return flightToDestination
    }

  }

  getJorney(jorney: Journey) {
    return this.http.get<any>(`${environment.APIDomain}api/flights/2`, {}).pipe(
      map((flights: FlightResponse[]) => {
        const list: FlightResponse[] = this.findTravel(jorney.origin, flights, jorney.destination)
        console.log(list)
        list.forEach(element => {
          jorney.price = jorney.price + element.price
          jorney.flights.push(
            {
              destination: element.arrivalStation,
              origin: element.departureStation,
              price: element.price,
              transport: {
                flightCarrier: element.flightCarrier,
                flightNumber: element.flightNumber
              }
            }
          )
        });
        return jorney
      })
    );
  }




}


