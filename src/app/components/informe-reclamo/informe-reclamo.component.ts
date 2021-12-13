import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/Cliente/cliente.service';
import { VehiculoService } from 'src/app/services/Vehiculo/vehiculo.service';
import { InformeReclamoTallerService } from 'src/app/services/informeReclamo/informe-reclamo-services.service';
import { InformeReclamo } from 'src/app/modelos/iforme-reclamo';
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
  constructor(private clienteServicio:ClienteService, private vehiculoServicio:VehiculoService, private informeReclamoSerivce:InformeReclamoTallerService) { }

  ngOnInit(): void {
  this.cedulaCliente=localStorage.getItem("cedulaCliente");
  this.chasis=localStorage.getItem("chasis");
  this.idinforme=localStorage.getItem("idinforme")
  }
  verFecha(){
   this.informeReclamoSerivce.getById(this.idinforme).subscribe(data=>{
     this.informereclamo=data;
   })
  }
  verCliente(){
  }
  verVehiculo(){

  }
  verFacturaCompra(){

  }
  verGarantia(){

  }
}
