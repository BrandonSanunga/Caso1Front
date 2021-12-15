import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InformeReclamo } from 'src/app/modelos/iforme-reclamo';

@Injectable({
  providedIn: 'root'
})
export class InformeReclamoTallerService {
  private URL='http://localhost:8080/inforech/api/v1'
  constructor(private http:HttpClient) { }

  postInforme(informeReclamo:InformeReclamo):Observable<any>{
    return this.http.post(`${this.URL}/save`,informeReclamo);
  }

  getAllInforme():Observable<any>{
       return this.http.get(`${this.URL}/all`)
  }

  getById(id:any):Observable<any>{
     return this.http.get<InformeReclamo>(`${this.URL}/find/${id}`)
  }

  updateInforme(informeReclamo:InformeReclamo, id:any):Observable<any>{
    return this.http.put<InformeReclamo>(`${this.URL}/update/${id}`,informeReclamo);
  }

  optenerFactura():Observable<any>{
    return this.http.get(`http://localhost:8080/facturas/api/v1/`)
  }

  optenerVehiculoID(id:any):Observable<any>{
    return this.http.get(`http://localhost:8080/vehiculo/api/v1/find/${id}`);
  }

}
