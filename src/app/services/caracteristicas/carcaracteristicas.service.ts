import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarcaracteristicasService {
  private API_SERVER="http://localhost:8080/caracteristicas/api/v1/"
  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllCaracteristicas(): Observable<any>{
    return this.httpClient.get(this.API_SERVER+"all");

  }
  public saveCaracteristicas(caracteristicas: any): Observable<any>{
    return this.httpClient.post(this.API_SERVER+"save",caracteristicas);
  }
  public delete(id: any):Observable<any>{
    return this.httpClient.delete(this.API_SERVER+"delete/"+id)
  }
}
