import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InspeCaveTallerService {
  private url="http://localhost:8080/inspecciCave/api/v1"
  constructor(private http:HttpClient) { }

  buscarId(id:any):Observable<any>{
    return this.http.get(`${this.url}/find/${id}`)
  }
  guardar(inspeccionDetalle:any):Observable<any>{
    return this.http.post(`${this.url}/save`,inspeccionDetalle)
  }
  update(inspecciondetalle:any,id:any):Observable<any>{
    return this.http.put(`${this.url}/update/${id}`,inspecciondetalle)
  }
  all():Observable<any>{
    return this.http.get(`${this.url}/all`)
  }
}
