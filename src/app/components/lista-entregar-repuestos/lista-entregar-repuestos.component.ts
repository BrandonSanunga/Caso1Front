import { Component, OnInit } from '@angular/core';
import { Clientes } from 'src/app/modelos/clientes';
import { ClienteService } from 'src/app/services/Cliente/cliente.service';
import { InformeReclamoTallerService } from 'src/app/services/informeReclamo/informe-reclamo-services.service';
import { OrdenRepCuerpServiceService } from 'src/app/services/ordenReparacion/orden-rep-cuerp-service.service';
import { RepuestosService } from 'src/app/services/repuestos/repuestos.service';

@Component({
  selector: 'app-lista-entregar-repuestos',
  templateUrl: './lista-entregar-repuestos.component.html',
  styleUrls: ['./lista-entregar-repuestos.component.css']
})
export class ListaEntregarRepuestosComponent implements OnInit {
  arrayRepuestos:any=[];
  ordenReclamoany:any;
  cliente:Clientes = new Clientes();
  constructor(private clienteService:ClienteService,private ordeRepuestoService:InformeReclamoTallerService) { }

  ngOnInit(): void {
    this.cargarRepuestos()
  }
  cargarRepuestos(){
    this.arrayRepuestos=[]
    this.ordeRepuestoService.optenerRepuestosDetalle().subscribe(data=>{
   //  console.log(data)
     for(let i of data){
      console.log(i.detalleRepuestos.length)
      if(i.detalleRepuestos.length!=0){
        this.arrayRepuestos.push(i)
        console.log(this.arrayRepuestos)
      }
    }
    })
  }
  optenerCliente(idCliente:any){
    this.clienteService.getFindByID(idCliente).subscribe(data=>{
      this.cliente.cedulaClient=data.cedulaClient;
      this.cliente.celularClient=data.celularClient;
      this.cliente.direccionClient=data.direccionClient;
      this.cliente.emailClient=data.emailClient;
      this.cliente.nombresClient=data.nombresClient;
      this.cliente.passwordClient=data.passwordClient;
    })
  }
  actualizarestado(id:any){
      this.ordeRepuestoService.actualizarestadoRepuesto(id).subscribe(data=>{
         console.log(data);
         this.cargarRepuestos()
      });
  }
}
