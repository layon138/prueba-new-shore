export interface Journey{
    flights: Flight[];
    origin: string;
    destination: string;
    price: number;
}

export interface Flight {
    transport: Transport;
    origin: string;
    destination: string;
    price: number;
}

export interface Transport {
    flightCarrier: string;
    flightNumber: string;
}

export interface FlightResponse {
    departureStation: string;
    arrivalStation: string;
    flightCarrier: string;
    flightNumber: string;
    price: number;
}