import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculoCatalogoService {
  private API_SERVER="http://localhost:8080/vehiculo_catalogo/api/v1/";

    constructor(
    private httpClient: HttpClient
  ) { }

  public getAllCatalogo(): Observable<any>{
    return this.httpClient.get(this.API_SERVER+"all");

  }
  public saveCatalogo(catalogo: any): Observable<any>{
    return this.httpClient.post(this.API_SERVER+"save",catalogo);
  }
  public deleteCatalogo(catalogo:any): Observable<any>{
    return this.httpClient.delete(this.API_SERVER+"delete/"+catalogo.id_vehiculo_catalogo);
  }
}
