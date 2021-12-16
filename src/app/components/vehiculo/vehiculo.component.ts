import { Component, OnInit } from '@angular/core';
import { GarantiaVehiculoService } from 'src/app/services/GarantiaVehiculo/garantia-vehiculo.service';
import { PaisService } from 'src/app/services/Pais/pais.service';
import { VehiculoService } from 'src/app/services/Vehiculo/vehiculo.service';
import { VehiculoCatalogoService } from 'src/app/services/vehiculo_catalogo/vehiculo-catalogo.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';



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
   estado: boolean = true;

  constructor(private serviciov:VehiculoService, 
    private garantia: GarantiaVehiculoService,
    private pais:PaisService,
    private catalogo:VehiculoCatalogoService,
    public fb: FormBuilder,
    
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



    this.cargarvehiculos();
    
   
    
  }
  
  cargarvehiculos(){
    this.serviciov.getEstado(this.estado).subscribe(
      (response:any)=>this.mostrar(response)
    )

  
  }
  cargaT(){
    this.serviciov.getAllVehiculos().subscribe(
      (response:any)=>this.mostrar(response)
    )
  
  }
  mostrar(response:any){
    this.vehiculo=response;
  
  }
  guardarV(): void{
    this.serviciov.create(this.Vehiculoform.value).subscribe(resp=>{
      this.Vehiculoform.reset;
      this.vehiculo.push(resp);
      console.log(resp);
      location.href="/Vehiculo"
    })}

    eliminar(garantia:any):void{

      this.serviciov.delete(garantia.chasis).subscribe( 
        res=> this.serviciov.getAllVehiculos().subscribe(
          response=> this.garantia=response));
      console.log("Prueba");
      location.href="/Vehiculo"
      }

      cargar (chasis:any):void{
              this.serviciov.get(chasis).subscribe(es=>{
                const {
                chasis,color, ramv, estado , precio ,pais, garantia,vehiculoCatalogo}=es
                  this.Vehiculoform.setValue({chasis,color, ramv, estado , precio ,pais, garantia,vehiculoCatalogo})
              }, error =>{
                console.log(error)
              });
              this.boton_pulsado = !this.boton_pulsado;

             
      }
  
}
