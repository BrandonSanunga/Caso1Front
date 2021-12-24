import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clientes } from 'src/app/modelos/clientes';
import { InspeCuerpo } from 'src/app/modelos/inpeccion/inspe-cuerpo';
import { InformeReclamoTallerService } from '../informeReclamo/informe-reclamo-services.service';

@Injectable({
  providedIn: 'root'
})
export class InspeCuerpoServiceService {
  private InspeCuerpo :InspeCuerpo=new InspeCuerpo()
  cliente:Clientes=new Clientes();
  clientes:any
  informeReclamo:any;
  private url="http://localhost:8080/inspcuerpo/api/v1"
  constructor(private http:HttpClient, private informService:InformeReclamoTallerService) { }

  buscarId(id:any):Observable<any>{
    return this.http.get(`${this.url}/find/${id}`)
  }
  guardar(inspeccionDetalle:any):Observable<any>{
    return this.http.post(`${this.url}/save`,inspeccionDetalle)
  }
  update(inspeCuerpo:any,id:any):Observable<any>{
    this.InspeCuerpo=inspeCuerpo
    this.clientes.cedulaClient=this.InspeCuerpo.inspeCavecera?.informeReclamo?.client?.cedulaClient
    this.clientes.celularClient=this.InspeCuerpo.inspeCavecera?.informeReclamo?.client?.celularClient
    this.clientes.direccionClient=this.InspeCuerpo.inspeCavecera?.informeReclamo?.client?.direccionClient
    this.clientes.emailClient=this.InspeCuerpo.inspeCavecera?.informeReclamo?.client?.emailClient
    this.clientes.nombresClient=this.InspeCuerpo.inspeCavecera?.informeReclamo?.client?.nombresClient
    this.clientes.passwordClient=this.InspeCuerpo.inspeCavecera?.informeReclamo?.client?.passwordClient
    this.informeReclamo.idinformeRecha=this.InspeCuerpo.inspeCavecera?.informeReclamo?.idinformeRecha
    //inspeCuerpo.inspeCavecera?.informeReclamo?.client=this.cliente
    console.log(this.InspeCuerpo)
    return this.http.put(`${this.url}/update/${id}`,this.InspeCuerpo)
  }
  all():Observable<any>{
    return this.http.get(`${this.url}/all`)
  }
}
