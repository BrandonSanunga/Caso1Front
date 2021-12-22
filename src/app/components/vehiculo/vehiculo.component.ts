import { Component, OnInit } from '@angular/core';
import { GarantiaVehiculoService } from 'src/app/services/GarantiaVehiculo/garantia-vehiculo.service';
import { PaisService } from 'src/app/services/Pais/pais.service';
import { VehiculoService } from 'src/app/services/Vehiculo/vehiculo.service';
import { VehiculoCatalogoService } from 'src/app/services/vehiculo_catalogo/vehiculo-catalogo.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { FormVehiculoComponent } from './form-vehiculo/form-vehiculo.component';




@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {
 
  Vehiculoform!: FormGroup;
  vehiculo:any=[];
  garantiaList: any=[];
  PaisList: any=[];
  CatalogoList: any=[];
 
   boton_pulsado: boolean = true;
   estado!: boolean ;

  constructor(private serviciov:VehiculoService, 
    private garantia: GarantiaVehiculoService,
    private pais:PaisService,
    private catalogo:VehiculoCatalogoService,
    public fb: FormBuilder,
    public dialog: MatDialog
    
    ) { }

  ngOnInit(): void {
    this.Vehiculoform = this.fb.group({
      chasis: ['',Validators.required],
      color: ['',Validators.required],
      ramv: ['',Validators.required] ,
      estado: ['true',Validators.required] ,
      precio: ['',Validators.required],
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
this.listar();
  }
 
  

      listar(): void {
        if (this.estado == false) {
          this.serviciov.getEstado(false).subscribe(resp => {
            this.vehiculo = resp;
          },
            error => { console.error(console.error) })
        }
        if (this.estado == true) {
          this.serviciov.getEstado(true).subscribe(resp => {
            this.vehiculo = resp;
          },
            error => { console.error(console.error) })
        }
        if (this.estado != false && this.estado != true) {
          this.serviciov.getAllVehiculos().subscribe(resp => {
            this.vehiculo = resp;
          },
            error => { console.error(console.error) })
        }
      }
      eliminar(garantia:any):void{

        this.serviciov.delete(garantia.chasis).subscribe( 
          res=> this.serviciov.getAllVehiculos().subscribe(
            response=> this.garantia=response));
        console.log("Prueba");
        location.href="/Vehiculo"
        }
  
        cargar (chas:any):void{  
          localStorage.setItem("idlista",chas);  
          this.dialog.open(FormVehiculoComponent);
          
         
    }
    agregarV ():void{  
      
      this.dialog.open(FormVehiculoComponent);
      
     
}

    
  
}
