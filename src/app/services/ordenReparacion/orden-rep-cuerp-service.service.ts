import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OrdenRepCuerpo } from 'src/app/modelos/ordenReclamo/orden-rep-cuerpo';


@Injectable({
  providedIn: 'root'
})
export class OrdenRepCuerpServiceService {

  private API_SERVER="https://starmotors1.herokuapp.com/ordecuerpo/api/v1/"
 //private API_SERVER="http://localhost:8080/ordecuerpo/api/v1/"

  constructor(
    private httpClient: HttpClient
  ) { }

  public all(): Observable<any>{
    return this.httpClient.get(this.API_SERVER+"getall");

  }
  public saveOrdenCuerpo(OrdenRepCuerpo: any): Observable<any>{
    return this.httpClient.post(this.API_SERVER+"save/",OrdenRepCuerpo);
  }
  public delete(id: any):Observable<any>{
    return this.httpClient.delete(this.API_SERVER+"delete/"+id)
  }


}

