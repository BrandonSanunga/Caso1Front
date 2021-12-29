import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SoliGarantiaService } from '../../../services/SolicitudGarantia/soli-garantia.service';
//import { VehiculoService } from '../../../services/Vehiculo/vehiculo.service';
//import { SolicitudGarantia } from '../../../modelos/SolicitudGarantia/solicitud-garantia';
import {MatDialog} from '@angular/material/dialog';
import { ReclamoGarantiaFormComponent } from '../../reclamo-garantia/reclamo-garantia-form/reclamo-garantia-form.component';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-soligarantia',
  templateUrl: './soligarantia.component.html',
  styleUrls: ['./soligarantia.component.css']
})
export class SoligarantiaComponent implements OnInit {
  solGarantiaForm!: FormGroup;
  vehiculosList: any;
  solGarantiasList: any;
  estado!: boolean;

  constructor(
    public fb: FormBuilder,
    public soliGarantiaService: SoliGarantiaService,
    public dialog: MatDialog,
    public auth: AuthService
  ) { }

  ngOnInit(): void {
    this.solGarantiaForm = this.fb.group({
      fecha_solicitud: ['', Validators.required],
      fk_chasis_vehiculo: ['', Validators.required],
      descripcion: ['', Validators.required],
      estado_solicitud: ['true']
    });
    this.listar();
  }

  cambiarEstadoSoli(id:any): void {
    localStorage.setItem("idlista",id);
    this.dialog.open(ReclamoGarantiaFormComponent);
    /*this.soliGarantiaService.cambiarEstadoSoli(soli.id_solicitud).subscribe(resp => {
      console.log(resp);
      if (resp != null) {
        this.solGarantiasList.pop(soli);
      }
    })*/
  }

  listar(): void {
    if (this.estado == false) {
      this.soliGarantiaService.getAllGarantiasTrue(false).subscribe(resp => {
        this.solGarantiasList = resp;
      },
        error => { console.error(console.error) })
    }
    if (this.estado == true) {
      this.soliGarantiaService.getAllGarantiasTrue(true).subscribe(resp => {
        this.solGarantiasList = resp;
      },
        error => { console.error(console.error) })
    }
    if (this.estado != false && this.estado != true) {
      this.soliGarantiaService.getAllGarantias().subscribe(resp => {
        this.solGarantiasList = resp;
      },
        error => { console.error(console.error) })
    }
  }
}

/*guardarSolicitud():void{
  this.soliGarantiaService.saveSoliGarantia(this.solGarantiaForm.value).subscribe(resp=>{
    this.solGarantiaForm.reset;
    this.solGarantiasList.push(resp);
    console.log(resp);
  }
  ,
  error=>{console.error(console.error)})
}*/

/*eliminarSoicitud(soli: any):void{
  this.soliGarantiaService.deleteSoliGarantia(soli.id_solicitud).subscribe(resp=>{
    console.log(resp);
    if(resp==true){
      this.solGarantiasList.pop(soli);
    }
  },
  error=>{console.error(console.error)})
}*/

 /*this.vehiculoService.getAllVehiculos().subscribe(resp=>{
       this.vehiculosList = resp;
       console.log(resp);
     },
     error=>{console.error(console.error)});*/
