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
  reclamo:ReclamoGarantia=new ReclamoGarantia();
  constructor(public dialog: MatDialog,private reclamogarantiaService:ReclamoGarantiaService,private clienteServicio:ClienteService, private vehiculoServicio:VehiculoService, private informeReclamoSerivce:InformeReclamoTallerService) { }

  ngOnInit(): void {
  this.cedulaCliente=localStorage.getItem("cedulaCliente");
  this.chasis=localStorage.getItem("chasis");
  this.idinforme=localStorage.getItem("idinforme")
  this.verCliente();
  this.verInformeReclamo();
  }
  openDialogVehiculo() {
    const dialogRef = this.dialog.open(VehicuFindidComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialogInformeReclamo() {
    const dialogRef = this.dialog.open(InfoReclambyidComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
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
  verInformeReclamo(){
    var id =  localStorage.getItem("informe")
    this.reclamogarantiaService.getfindByid(id).subscribe(data=>{
        this.reclamo=data;
        console.log(data);
    })
  }
}
