import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/Cliente/cliente.service';
import { VehiculoService } from 'src/app/services/Vehiculo/vehiculo.service';
import { InformeReclamoTallerService } from 'src/app/services/informeReclamo/informe-reclamo-services.service';
import { InformeReclamo } from 'src/app/modelos/iforme-reclamo';
import { Clientes } from 'src/app/modelos/clientes';
@Component({
  selector: 'app-informe-reclamo',
  templateUrl: './informe-reclamo.component.html',
  styleUrls: ['./informe-reclamo.component.css']
})
export class InformeReclamoComponent implements OnInit {
  cedulaCliente:any;
  chasis:any;
  idinforme:any;
  informereclamo:InformeReclamo=new InformeReclamo();
  cliente:Clientes=new Clientes();
  constructor(private clienteServicio:ClienteService, private vehiculoServicio:VehiculoService, private informeReclamoSerivce:InformeReclamoTallerService) { }

  ngOnInit(): void {
  this.cedulaCliente=localStorage.getItem("cedulaCliente");
  this.chasis=localStorage.getItem("chasis");
  this.idinforme=localStorage.getItem("idinforme")
  this.verCliente();
  this.verInformeReclamo();
  }
  verInformeReclamo(){
   this.informeReclamoSerivce.getById(this.idinforme).subscribe(data=>{
     this.informereclamo.fechaEmicion=data.fechaEmicion;
     this.informereclamo.descripcionInforme=data.descripcionInforme;
   })
  }
  verCliente(){
   this.clienteServicio.getFindByID(this.cedulaCliente).subscribe(data=>{
      this.cliente.cedulaClient=data.cedulaClient;
      this.cliente.celularClient=data.celularClient;
      this.cliente.direccionClient=data.direccionClient;
      this.cliente.emailClient=data.emailClient;
      this.cliente.nombresClient=data.nombresClient;
      this.cliente.passwordClient=data.passwordClient;
   })
  }
  verVehiculo(){
     this.vehiculoServicio
  }
  verFacturaCompra(){

  }
  verGarantia(){

  }
}
