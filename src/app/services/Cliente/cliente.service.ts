import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private API_SEVER = "http://localhost:8080/cliente/api/v1/all";

  constructor(
     private httpClient: HttpClient
  ) { }

  public getAllClientes():Observable<any>{
    return this.httpClient.get(this.API_SEVER);
  }
}
