import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdenRepCuerpServiceService {
  private API_SEVER = "http://localhost:8080/ordecuerpo/api/v1/getall";

  constructor(private httpClient: HttpClient) { }

  public getAllordenes():Observable<any>{
    return this.httpClient.get(this.API_SEVER);
  }
}
