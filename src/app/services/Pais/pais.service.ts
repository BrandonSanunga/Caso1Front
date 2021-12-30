import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private API_SEVER = "https://starmotors1.herokuapp.com/pais/api/v1/all";

  constructor(private httpClient: HttpClient) { }

  public getAllPaises():Observable<any>{
    return this.httpClient.get(this.API_SEVER);
  }
}
