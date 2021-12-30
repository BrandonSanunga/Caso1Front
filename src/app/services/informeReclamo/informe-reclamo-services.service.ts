import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InformeReclamo } from 'src/app/modelos/iforme-reclamo';

@Injectable({
  providedIn: 'root'
})
export class InformeReclamoTallerService {
  private URL='https://starmotors1.herokuapp.com/inforech/api/v1'
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
    return this.http.get(`https://starmotors1.herokuapp.com/facturas/api/v1/`)
  }

  optenerVehiculoID(id:any):Observable<any>{
    return this.http.get(`https://starmotors1.herokuapp.com/vehiculo/api/v1/find/${id}`);
  }

  optenerGarantiaID(id:any):Observable<any>{
    return this.http.get(`https://starmotors1.herokuapp.com/garantia/api/v1/find/${id}`)
  }

  actualizarReclamocliente(id:any):Observable<any>{
    return this.http.put(`https://starmotors1.herokuapp.com/reclamo/garantia/api/v1/${id}`,null);
  }

  optenerRepuestosDetalle():Observable<any>{
    return this.http.get(`https://starmotors1.herokuapp.com/ordecuerpo/api/v1/getall`);
  }
  actualizarestadoRepuesto(id:any):Observable<any>{
    return this.http.put(`https://starmotors1.herokuapp.com/ordecuerpo/api/v1/updatestadorep/${id}`,null);
  }
  buscarRepuestoid(id:any):Observable<any>{
    return this.http.get(`https://starmotors1.herokuapp.com/ordecuerpo/api/v1/find/${id}`);
  }
  enviarCorreo(cavecera:any,mensaje:any,destinatario:any):Observable<any>{
    return this.http.get(`${this.URL}/email/${cavecera}/${mensaje}/${destinatario}`);
  }

}
