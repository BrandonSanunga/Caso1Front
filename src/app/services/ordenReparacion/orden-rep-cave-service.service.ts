import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdenRepCaveServiceService {
  httpClient: any;
  API_SERVER: string | undefined;
  reset() {
    throw new Error('Method not implemented.');
  }
  private url="http://localhost:8080/ /ordencave/api/v1"
constructor(private  http:HttpClient) { }

  buscarId(id:any):Observable<any>{
    return this.http.get(`${this.url}/find/${id}`)
  }
  guardar(ordenDetalle:any):Observable<any>{
    return this.http.post(`${this.url}/save`,ordenDetalle)
  }
  update(ordendetalle:any,id:any):Observable<any>{
    return this.http.put(`${this.url}/update/${id}`,ordendetalle)
  }
  all():Observable<any>{
    return this.http.get(`${this.url}/all`)
  }
  public getAll(): Observable<any>{
    return this.httpClient.get(this.API_SERVER+"all");

  }
}
