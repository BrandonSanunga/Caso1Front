import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepuestosService {
private API_SERVER="http://localhost:8080/repuestos/api/v1/save"
  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllRepuestos(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);

  }
  public saveRepuestos(repuestos: any): Observable<any>{
    return this.httpClient.post(this.API_SERVER,repuestos);
  }
}
