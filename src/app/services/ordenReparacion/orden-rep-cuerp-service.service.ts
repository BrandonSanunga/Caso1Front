import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OrdenRepCuerpo } from 'src/app/modelos/ordenReclamo/orden-rep-cuerpo';


@Injectable({
  providedIn: 'root'
})
export class OrdenRepCuerpServiceService {

  private API_SEVER = "http://localhost:8080/ordecuerpo/api/v1/getall";

  private ordenCuerpo :OrdenRepCuerpo= new OrdenRepCuerpo;
  private url="http://localhost:8080/ordecuerpo/api/v1"
  httpClient: any;
  API_SERVER: string | undefined;
  constructor(private http:HttpClient) { }
  buscarId(id:any):Observable<any>{
    return this.http.get(`${this.url}/find/${id}`)
  }
  guardar(ordenDetalle:any):Observable<any>{
    return this.http.post(`${this.url}/save`,ordenDetalle)
  }
  update(ordenCuerpo:any,id:any):Observable<any>{
    this.ordenCuerpo= ordenCuerpo;
    return this.http.put(`${this.url}/update/${id}`,this.ordenCuerpo)
  }
  all():Observable<any>{
    return this.http.get(`${this.url}/getall`)
  }

  public getAll(): Observable<any>{
    return this.httpClient.get(this.API_SERVER+"all");

  }
}

