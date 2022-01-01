import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clientes } from 'src/app/modelos/clientes';
import { InformeReclamo } from 'src/app/modelos/iforme-reclamo';
import { InspeCavecera } from 'src/app/modelos/inpeccion/inspe-cavecera';
import { InspeCuerpo } from 'src/app/modelos/inpeccion/inspe-cuerpo';
import { InformeReclamoTallerService } from '../informeReclamo/informe-reclamo-services.service';

@Injectable({
  providedIn: 'root'
})
export class InspeCuerpoServiceService {
  private InspeCuerpo :InspeCuerpo=new InspeCuerpo()
  cliente:Clientes=new Clientes();
  inspeccioncavece:InspeCavecera = new InspeCavecera();
informereclamo2:InformeReclamo = new InformeReclamo();

  clientes:any
  informeReclamo:any;
  private url="https://starmotors1.herokuapp.com/inspcuerpo/api/v1"
  //private url = "http://localhost:8080/inspcuerpo/api/v1"
  constructor(private http:HttpClient, private informService:InformeReclamoTallerService) { }

  buscarId(id:any):Observable<any>{
    return this.http.get(`${this.url}/find/${id}`)
  }
  guardar(inspeccionDetalle:any):Observable<any>{
    return this.http.post(`${this.url}/save`,inspeccionDetalle)
  }
  update(inspeCuerpo:any):Observable<any>{
    this.InspeCuerpo=inspeCuerpo
/*    this.clientes.cedulaClient=this.InspeCuerpo.inspeCavecera?.informeReclamo?.client?.cedulaClient
    this.clientes.celularClient=this.InspeCuerpo.inspeCavecera?.informeReclamo?.client?.celularClient
    this.clientes.direccionClient=this.InspeCuerpo.inspeCavecera?.informeReclamo?.client?.direccionClient
    this.clientes.emailClient=this.InspeCuerpo.inspeCavecera?.informeReclamo?.client?.emailClient
    this.clientes.nombresClient=this.InspeCuerpo.inspeCavecera?.informeReclamo?.client?.nombresClient
    this.clientes.passwordClient=this.InspeCuerpo.inspeCavecera?.informeReclamo?.client?.passwordClient
    this.informeReclamo.idinformeRecha=this.InspeCuerpo.inspeCavecera?.informeReclamo?.idinformeRecha
    //inspeCuerpo.inspeCavecera?.informeReclamo?.client=this.cliente
     this.informereclamo2.client=this.cliente;
     this.inspeccioncavece.informeReclamo=this.informereclamo2;
  */   this.InspeCuerpo.inspeCavecera=this.inspeccioncavece
    return this.http.put(`${this.url}/update`,this.InspeCuerpo)
  }
  all():Observable<any>{
    return this.http.get(`${this.url}/all`)
  }
}
