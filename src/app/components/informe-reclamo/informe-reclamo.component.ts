import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/Cliente/cliente.service';
import { VehiculoService } from 'src/app/services/Vehiculo/vehiculo.service';
import { InformeReclamoTallerService } from 'src/app/services/informeReclamo/informe-reclamo-services.service';
import { InformeReclamo } from 'src/app/modelos/iforme-reclamo';
import { Clientes } from 'src/app/modelos/clientes';
import { ReclamoGarantia } from 'src/app/modelos/ReclamoGarantia/reclamo-garantia';
import { ReclamoGarantiaService } from 'src/app/services/ReclamoGarantia/reclamo-garantia.service';
import { MatDialog } from '@angular/material/dialog';
import { ClientFindidComponent } from './dialogos/client-findid/client-findid.component';
import { VehicuFindidComponent } from './dialogos/vehicu-findid/vehicu-findid.component';
import { InfoReclambyidComponent } from './dialogos/info-reclambyid/info-reclambyid.component';
import { FacturaComVeDialogComponent } from './dialogos/factura-com-ve-dialog/factura-com-ve-dialog.component';
import { InforReclComponent } from './dialogos/infor-recl/infor-recl.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-informe-reclamo',
  templateUrl: './informe-reclamo.component.html',
  styleUrls: ['./informe-reclamo.component.css']
})
export class InformeReclamoComponent implements OnInit {
  cedulaCliente:any;
  chasis:any;
  idinforme:any;
  reclamo2:any;
  fechaactual:any=Date;
  informereclamo:InformeReclamo=new InformeReclamo();

  vehiculo:any;
  informeReclamo:any;
  garantia:any;
  factu:any;
  cliente:Clientes=new Clientes();
  reclamo:ReclamoGarantia=new ReclamoGarantia();
  informeReclamomodelo:InformeReclamo=new InformeReclamo();
  constructor(private root:Router,public dialog: MatDialog,private reclamogarantiaService:ReclamoGarantiaService,private clienteServicio:ClienteService, private vehiculoServicio:VehiculoService, private informeReclamoSerivce:InformeReclamoTallerService) { }

  ngOnInit(): void {
  this.cedulaCliente=localStorage.getItem("cedulaCliente");
  this.chasis=localStorage.getItem("chasis");
  this.idinforme=localStorage.getItem("idinforme")
  this.verInformeReclamo();
  this.optenerClienteFactura()
  }
  openDialogVehiculo() {
    localStorage.setItem("vehiculoDialog",this.vehiculo)
    const dialogRef = this.dialog.open(VehicuFindidComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialogInformeReclamo() {
    localStorage.setItem("inforReclDialog",this.informeReclamo)
    const dialogRef = this.dialog.open(InfoReclambyidComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialogGarantia() {
    localStorage.setItem("inforReclDialog",this.garantia)
    const dialogRef = this.dialog.open(InforReclComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialogFactura(){
    localStorage.setItem("factuDialog",this.factu)
    const dialogRef = this.dialog.open(FacturaComVeDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  verCliente(cedula:any){
   this.clienteServicio.getFindByID(cedula).subscribe(data=>{
      this.cliente.cedulaClient=data.cedulaClient;
      this.cliente.celularClient=data.celularClient;
      this.cliente.direccionClient=data.direccionClient;
      this.cliente.emailClient=data.emailClient;
      this.cliente.nombresClient=data.nombresClient;
      this.cliente.passwordClient=data.passwordClient;
   })
  }
  verInformeReclamo(){
    var id =  localStorage.getItem("informe")
    this.reclamogarantiaService.getfindByid(id).subscribe(data=>{
        this.reclamo=data;
        this.informeReclamo=id
        this.chasis=data.fk_id_solicitud.fk_chasis_vehiculo.chasis_vehiculo
        console.log(data);
    })
  }
  optenerClienteFactura(){
    this.informeReclamoSerivce.optenerFactura().subscribe(data=>{
      for(let i of data){
        for(let j of i.detallesfacturas){
           if(j.vehiculo.chasis_vehiculo==this.chasis){
            this.factu=i.id
             this.vehiculo=j.vehiculo.chasis_vehiculo
             this.garantia=j.vehiculo.id_garantia.id_garantia
             this.verCliente(i.cliente.cedulaClient)
           }
        }
         }
    })
  }
  aceptasolicitud(){
    var fecha=new Date();
    var alerta = confirm("Esta seguro de aceptar la solicitud del Cliente")
    if(alerta==true){
      var id =  localStorage.getItem("informe")
    this.reclamogarantiaService.getfindByid(id).subscribe(data=>{
        this.reclamo2=data;
        this.informeReclamoSerivce.updateInforme(data.id_reclamo).subscribe(data=>{
          alert("Solicitud Aceptada");
        this.informeReclamomodelo.client=this.cliente;
         this.informeReclamomodelo.descripcionInforme=this.reclamo2?.fk_id_solicitud?.descripcion;
         this.informeReclamomodelo.id_informe=this.reclamo2
         this.informeReclamomodelo.respuestaCliente="Aceptado"
         this.informeReclamomodelo.tipoInforme="Aceptado";
         this.informeReclamomodelo.fechaEmicion=fecha;
         this.informeReclamoSerivce.postInforme(this.informeReclamomodelo).subscribe(data=>{
           this.root.navigate(["/inspeccion"]);
         });
         })
              })
    }
  }
  rechazarSolicitud(){
    var alerta = confirm("Esta seguro de rechazar la solicitud del Cliente")
    if(alerta==true){
      alert("notificacion enviada");
    }
  }
}
