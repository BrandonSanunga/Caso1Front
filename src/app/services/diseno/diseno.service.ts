import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisenoService {
  private API_SERVER="http://localhost:8080/diseno/api/v1/"
  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllDisenos(): Observable<any>{
    return this.httpClient.get(this.API_SERVER+"all");

  }
  public saveDiseno(caracteristicas: any): Observable<any>{
    return this.httpClient.post(this.API_SERVER+"save",caracteristicas);
  }
}
