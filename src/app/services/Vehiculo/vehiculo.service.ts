import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  private API_SEVER = "http://localhost:8080/vehiculo/api/v1/all";

  constructor(
     private httpClient: HttpClient
  ) { }

  public getAllVehiculos():Observable<any>{
    return this.httpClient.get(this.API_SEVER);
  }
}
