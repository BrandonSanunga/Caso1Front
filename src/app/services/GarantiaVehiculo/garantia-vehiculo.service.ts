
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GarantiaVehiculoService {
  private API_SEVER = "http://localhost:8080/garantia/api/v1/";
  private API = "http://localhost:8080/detalleg/api/v1/";

  constructor(private httpClient: HttpClient) { }

  public getAllGarantiasV():Observable<any>{
    return this.httpClient.get(this.API_SEVER+"all");
    
  }
  public delete(id: any):Observable<any>{
    return this.httpClient.delete(this.API_SEVER+"delete/"+id)
  }
  get(id:any):Observable<any>{
    return this.httpClient.get<any>(this.API_SEVER+"find/"+id);
  }
  getD(id:any):Observable<any>{
    return this.httpClient.get<any>(this.API+"find/"+id);
  }
  
  
}
