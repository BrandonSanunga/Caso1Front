import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  private API_SEVER = "http://localhost:8080/vehiculo/api/v1/";
  private API_SERVER = "http://localhost:8080/vehiculo/api/v1/save";

  constructor(
     private httpClient: HttpClient
  ) { }

  public getAllVehiculos():Observable<any>{
    return this.httpClient.get(this.API_SEVER+"all");

  }

  public create(Vehiculo: any): Observable<any>{
    return this.httpClient.post<any>(this.API_SERVER,Vehiculo);
  }
  public delete(chasis: any):Observable<any>{
    return this.httpClient.delete(this.API_SEVER+"delete/"+chasis)
  }
  get(chasis:any):Observable<any>{
    return this.httpClient.get<any>(this.API_SEVER+"find/"+chasis);
  }

  getEstado(estado:any):Observable<any>{
    return this.httpClient.get<any>(this.API_SEVER+"est/"+estado);
  }


}
