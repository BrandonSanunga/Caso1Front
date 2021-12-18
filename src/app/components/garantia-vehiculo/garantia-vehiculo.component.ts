import { Component, OnInit } from '@angular/core';
import { GarantiaVehiculoService } from 'src/app/services/GarantiaVehiculo/garantia-vehiculo.service';;
import { HttpHeaders,HttpClient } from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { FormGarantiaVehiculoComponent } from './form-garantia-vehiculo/form-garantia-vehiculo.component';

@Component({
  selector: 'app-garantia-vehiculo',
  templateUrl: './garantia-vehiculo.component.html',
  styleUrls: ['./garantia-vehiculo.component.css']
})
export class GarantiaVehiculoComponent implements OnInit {
 
  garantiavehiculo:any=[];
  garantia:any={detallegarantia:[]};
  detallegarantia:any=[]

  descripcion: FormControl =new FormControl('');
  perido: FormControl =new FormControl('');
  cobertura: FormControl =new FormControl('');
  constructor(private servicioG:GarantiaVehiculoService,
    private http:HttpClient,
    public fb: FormBuilder,
    public dialog: MatDialog) { }

  ngOnInit(): void {
 

    this.cargargarantia();
  }
  cargargarantia(){
   
    this.servicioG.getAllGarantiasV().subscribe(e=>{
      this.garantiavehiculo=e;

    });
  
  }



  eliminarG(garantiavehiculo:any){
    this.servicioG.delete(garantiavehiculo.idGarantia).subscribe( 
      res=> this.servicioG.getAllGarantiasV().subscribe(
        response=> this.garantiavehiculo=response));
    console.log("Prueba");
    location.href="/garantiaV"

  }
  agregarG(){
    this.dialog.open(FormGarantiaVehiculoComponent);
  }
 
  cargar (id:any):void{
    this.servicioG.get(id).subscribe(es=>{
      console.log(es)});
}
 /*
cargars (ids:any):void{
 this.servicioG.getD(ids).subscribe(error =>{
    console.log(error);
    this.cobertura.setValue(error.cobertura)
    this.perido.setValue(error.perido)
    this.idGarantiaD=error.idDetalle
  } );
}
*/

}
