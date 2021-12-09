import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SoliGarantiaService {
  private API_SEVER = "http://localhost:8080/solicitud/garantia/api/v1/";

  constructor(
    private httpClient: HttpClient
  ) { }

  public saveSoliGarantia(solicitud:any):Observable<any>{
    return this.httpClient.post(this.API_SEVER,solicitud);
  }

  public getAllGarantias():Observable<any>{
    return this.httpClient.get(this.API_SEVER);
  }

  public deleteSoliGarantia(id: any):Observable<any>{
    return this.httpClient.delete(this.API_SEVER+id)
  }

  public getAllGarantiasTrue():Observable<any>{
    return this.httpClient.get(this.API_SEVER+"pendientes");
  }
}
