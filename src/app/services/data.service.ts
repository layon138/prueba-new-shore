import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { FlightResponse, Journey } from '../interfaces/jorney.interface';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private numberScales = 0
  public maxScales =  4
  constructor(private http: HttpClient) {

  }

  travelRecurrency(whereIwas: string, where: string, allFlights: FlightResponse[], arrival: string) {
    let flightsToScales = allFlights?.filter(state => state.departureStation == where && state.arrivalStation != whereIwas)
    let listOfScales: FlightResponse[] = []
    let scaleBetter: FlightResponse[] = []
    this.numberScales++
    if (this.numberScales < this.maxScales) {
      for (const possibleScale of flightsToScales) {
        console.log(possibleScale)
        const flightToDestination = allFlights?.filter(state => state.departureStation == possibleScale.arrivalStation && state.arrivalStation == arrival)
        if (flightToDestination.length > 0) {
          scaleBetter.push(possibleScale)
          scaleBetter.push(flightToDestination[0])
          break
        }
        const newList = this.travelRecurrency(possibleScale.departureStation, possibleScale.arrivalStation, allFlights, arrival)
        this.numberScales--
          if (newList.length > 0  &&  (newList.length < scaleBetter.length ||  scaleBetter.length==0)){
            scaleBetter=[]
            scaleBetter.push(possibleScale)
            newList.forEach(scale => {
              scaleBetter.push(scale)
          });
        }
      }

    }
    listOfScales = scaleBetter
    return listOfScales
  }

  findTravel(where: string, allFlights: FlightResponse[], arrival: string) {
    const flightToDestination = allFlights?.filter(state => state.departureStation == where && state.arrivalStation == arrival)
    if (flightToDestination.length == 0) {
      this.numberScales = 0
      return  this.travelRecurrency("", where, allFlights, arrival)
    } else {
      return flightToDestination
    }

  }

  getJorney(jorney: Journey) {
    return this.http.get<any>(`${environment.APIDomain}api/flights/2`, {}).pipe(
      map((flights: FlightResponse[]) => {
        const list: FlightResponse[] = this.findTravel(jorney.origin, flights, jorney.destination)
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


