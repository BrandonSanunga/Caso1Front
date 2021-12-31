import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdenReparacion } from 'src/app/modelos/orden_reparacion/orden-reparacion';

@Injectable({
  providedIn: 'root'
})
export class OrdenRepCaveServiceService {

    OrdenCabModel: OrdenReparacion= new OrdenReparacion();
  //private API_SERVER="https://starmotors1.herokuapp.com/ordencave/api/v1/"
  private API_SERVER="http://localhost:8080/ordencave/api/v1/"
  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllOrdenRep(): Observable<any>{
    return this.httpClient.get(this.API_SERVER+"all");

  }
  public saveOrdenRep(ordenCabReparacion: any): Observable<any>{
    return this.httpClient.post(this.API_SERVER+"save",ordenCabReparacion);
  }
  public delete(id: any):Observable<any>{
    return this.httpClient.delete(this.API_SERVER+"delete/"+id)

  }
}
