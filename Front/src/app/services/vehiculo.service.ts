import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Vehiculo } from '../model/vehiculo';
import { map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class VehiculoService {

  private baseUrl = 'http://localhost:8080/api';

  constructor( private http: HttpClient ) {
    console.log('Estacionamiento Funcionando');
  }

  consultarVehiculos(): Observable<Vehiculo[]> {
    return this.http.get(`${this.baseUrl}/consultavehiculos`).pipe(
      map(data => data as Vehiculo[])
    );
  }

  registrarEntradaVehiculo(vehiculo: Vehiculo): Observable<Vehiculo> {
    return this.http.post<Vehiculo>(`${this.baseUrl}/registroentrada`, vehiculo);
  }

  registrarSalidaVehiculo(id: number): Observable<Vehiculo> {
    return this.http.get<Vehiculo>(`${this.baseUrl}/registrosalida/${id}`);
  }
}
