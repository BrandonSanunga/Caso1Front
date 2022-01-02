import { Component, OnInit } from '@angular/core';
import { GarantiaVehiculoService } from 'src/app/services/GarantiaVehiculo/garantia-vehiculo.service';
import { PaisService } from 'src/app/services/Pais/pais.service';
import { VehiculoService } from 'src/app/services/Vehiculo/vehiculo.service';
import { VehiculoCatalogoService } from 'src/app/services/vehiculo_catalogo/vehiculo-catalogo.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import Swal from "sweetalert2";



@Component({
  selector: 'app-form-vehiculo',
  templateUrl: './form-vehiculo.component.html',
  styleUrls: ['./form-vehiculo.component.css']
})
export class FormVehiculoComponent implements OnInit {
  Vehiculoform!: FormGroup;
  vehiculo:any=[];
  garantiaList: any=[];
  PaisList: any=[];
  CatalogoList: any=[];
  boton_pulsado: boolean = true;
  id!:any; 
  paiss!:any;

  constructor(private serviciov:VehiculoService, 
    private garantia: GarantiaVehiculoService,
    private pais:PaisService,
    private catalogo:VehiculoCatalogoService,
    public fb: FormBuilder) { }

  ngOnInit(): void {
    this.Vehiculoform = this.fb.group({
      chasis: ['',Validators.required],
      color: ['',Validators.required],
      ramv: ['',Validators.required] ,
      estado: ['true',Validators.required] ,
      precio: ['',Validators.required],
      precio_venta:['',Validators.required],
      pais: ['',Validators.required],
      garantia: ['',Validators.required],
      vehiculoCatalogo: ['',Validators.required]

   });
 

   this.garantia.getAllGarantiasV().subscribe(e=>{
    this.garantiaList=e;
    console.log(e);
  });
  this.pais.getAllPaises().subscribe(e=>{
    this.PaisList=e;
    console.log(e);
  });
  this.catalogo.getAllCatalogo().subscribe(e=>{
    this.CatalogoList=e;
    console.log(e);
  });



  }
  guardarV(): void{
    
    this.serviciov.create(this.Vehiculoform.value).subscribe(resp=>{
      this.Vehiculoform.reset;
      this.vehiculo.push(resp);
      console.log(resp);
      location.href="/Vehiculo"
      this.Vehiculoform.reset;
      Swal.fire(
        "Nuevo Vehiculo",
        'vehiculo ' +resp.chasis+ ' agregado con exito!',
        "success"
      );

    })
 
  }

cancelar(){
 
  location.href="/Vehiculo"
}
carga(){
  this.id = localStorage.getItem("idlista")
  this.serviciov.get(this.id).subscribe(es=>{
    const {
    chasis,color, ramv, estado , precio,pais , garantia,vehiculoCatalogo}=es
      this.Vehiculoform.setValue({chasis,color, ramv, estado , precio ,pais, garantia,vehiculoCatalogo})        
     
  }, error =>{
    console.log(error)
  });
  
}
}
