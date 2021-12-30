import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Clientes } from 'src/app/modelos/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private API_SEVER = "https://starmotors1.herokuapp.com/cliente/api/v1";

  constructor(
     private httpClient: HttpClient
  ) { }

  public getAllClientes():Observable<any>{
    return this.httpClient.get(this.API_SEVER+"/all");
  }

  public getFindByID(idCliente:any):Observable<any>{
     return this.httpClient.get<Clientes>(`${this.API_SEVER}/find/${idCliente}`)
  }
}
