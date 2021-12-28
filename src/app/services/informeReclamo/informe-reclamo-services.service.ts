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
    console.log(informeReclamo)
    return this.http.post(`${this.URL}/save`,informeReclamo);
  }

  getAllInforme():Observable<any>{
       return this.http.get(`${this.URL}/all`)
  }

  getById(id:any):Observable<any>{
     return this.http.get<InformeReclamo>(`${this.URL}/find/${id}`)
  }

  updateInforme(id:any):Observable<any>{
    return this.http.options<InformeReclamo>(`${this.URL}/update/${id}`);
  }

  updateAceptar(id:any):Observable<any>{
    return this.http.put(`${this.URL}/aceptado/${id}`,null);
  }
  updateCancelar(id:any):Observable<any>{
    return this.http.put(`${this.URL}/rechazado/${id}`,null);
  }

  optenerFactura():Observable<any>{
    return this.http.get(`http://localhost:8080/facturas/api/v1/`)
  }

  optenerVehiculoID(id:any):Observable<any>{
    return this.http.get(`http://localhost:8080/vehiculo/api/v1/find/${id}`);
  }

  optenerGarantiaID(id:any):Observable<any>{
    return this.http.get(`http://localhost:8080/garantia/api/v1/find/${id}`)
  }

  actualizarReclamocliente(id:any):Observable<any>{
    return this.http.put(`http://localhost:8080/reclamo/garantia/api/v1/${id}`,null);
  }

  optenerRepuestosDetalle():Observable<any>{
    return this.http.get(`http://localhost:8080/ordecuerpo/api/v1/getall`);
  }
  actualizarestadoRepuesto(repuesto:any,id:any):Observable<any>{
    return this.http.put(`http://localhost:8080/ordecuerpo/api/v1/update/${id}`,repuesto);
  }
  buscarRepuestoid(id:any):Observable<any>{
    return this.http.get(`http://localhost:8080/ordecuerpo/api/v1/find/${id}`);
  }
  enviarCorreo(cavecera:any,mensaje:any,destinatario:any):Observable<any>{
    return this.http.get(`${this.URL}/email/${cavecera}/${mensaje}/${destinatario}`);
  }

}
