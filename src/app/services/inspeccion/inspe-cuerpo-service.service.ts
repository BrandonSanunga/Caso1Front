import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InspeCuerpo } from 'src/app/modelos/inpeccion/inspe-cuerpo';

@Injectable({
  providedIn: 'root'
})
export class InspeCuerpoServiceService {
  private InspeCuerpo :InspeCuerpo=new InspeCuerpo()
  private url="http://localhost:8080/inspcuerpo/api/v1"
  constructor(private http:HttpClient) { }

  buscarId(id:any):Observable<any>{
    return this.http.get(`${this.url}/find/${id}`)
  }
  guardar(inspeccionDetalle:any):Observable<any>{
    return this.http.post(`${this.url}/save`,inspeccionDetalle)
  }
  update(inspeCuerpo:any,id:any):Observable<any>{
    this.InspeCuerpo=inspeCuerpo
    return this.http.put(`${this.url}/update/${id}`,this.InspeCuerpo)
  }
  all():Observable<any>{
    return this.http.get(`${this.url}/all`)
  }
}
