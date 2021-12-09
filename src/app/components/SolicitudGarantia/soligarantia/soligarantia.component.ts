import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SoliGarantiaService } from '../../../services/SolicitudGarantia/soli-garantia.service';
import { VehiculoService } from '../../../services/Vehiculo/vehiculo.service';

@Component({
  selector: 'app-soligarantia',
  templateUrl: './soligarantia.component.html',
  styleUrls: ['./soligarantia.component.css']
})
export class SoligarantiaComponent implements OnInit {
  solGarantiaForm!: FormGroup;
  vehiculosList: any;
  solGarantiasList: any;

  constructor(
    public fb:FormBuilder,
    public soliGarantiaService:SoliGarantiaService,
    public vehiculoService:VehiculoService
  ) { }

  ngOnInit(): void {
    this.solGarantiaForm = this.fb.group({
      fecha_solicitud:['',Validators.required],
      fk_chasis_vehiculo:['',Validators.required],
      descripcion:['',Validators.required],
      estado_solicitud:['',Validators.required]
    });
    this.vehiculoService.getAllVehiculos().subscribe(resp=>{
      this.vehiculosList = resp;
      console.log(resp);
    },
    error=>{console.error(console.error)});

    this.soliGarantiaService.getAllGarantiasTrue().subscribe(resp=>{
      this.solGarantiasList= resp;
      console.log(resp);
    },
    error=>{console.error(console.error)})
  }

  guardarSolicitud():void{
    this.soliGarantiaService.saveSoliGarantia(this.solGarantiaForm.value).subscribe(resp=>{
      this.solGarantiaForm.reset;
      this.solGarantiasList.push(resp);
      console.log(resp);
    }
    ,
    error=>{console.error(console.error)})
  }

  eliminarSoicitud(soli: any):void{
    this.soliGarantiaService.deleteSoliGarantia(soli.id_solicitud).subscribe(resp=>{
      console.log(resp);
      if(resp==true){
        this.solGarantiasList.pop(soli);
      }
    })
  }

}