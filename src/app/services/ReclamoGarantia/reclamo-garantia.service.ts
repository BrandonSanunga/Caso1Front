import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReclamoGarantiaService {
  private API_SEVER = "http://localhost:8080/reclamo/garantia/api/v1/";
  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllReclamos():Observable<any>{
    return this.httpClient.get(this.API_SEVER);
  }
  public saveReclamos(reclamo:any):Observable<any>{
    return this.httpClient.post(this.API_SEVER,reclamo);
  }
}
