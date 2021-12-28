import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class InformeConcecionariaService {

  private API_SEVER = "http://localhost:8080/informeC/api/v1/";


  constructor(private httpClient: HttpClient) { }
  public create(Informe: any): Observable<any>{
    return this.httpClient.post<any>(this.API_SEVER+"save",Informe);
  }

  public getAllInformes():Observable<any>{
    return this.httpClient.get(this.API_SEVER+"all");
    
  }
  public delete(id: any):Observable<any>{
    return this.httpClient.delete(this.API_SEVER+"delete/"+id)
  }
  get(id:any):Observable<any>{
    return this.httpClient.get<any>(this.API_SEVER+"cars/"+id);
  }

  
}
