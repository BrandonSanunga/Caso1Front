import { Component, OnInit } from '@angular/core';
import { GarantiaVehiculoService } from 'src/app/services/GarantiaVehiculo/garantia-vehiculo.service';;
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';

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
  idGarantia='';
  idGarantiaD='';
  constructor(private servicioG:GarantiaVehiculoService,
    private http:HttpClient,
    public fb: FormBuilder) { }

  ngOnInit(): void {
 

    this.cargargarantia();
  }
  cargargarantia(){
   
    this.servicioG.getAllGarantiasV().subscribe(
      (response:any)=>this.mostrar(response)
    )
  
  }
  mostrar(response:any){

    this.garantiavehiculo=response;
  
  }
 
  agregarD(){
    this.garantia.detallegarantia.push({});
  
  }
  guardar(){
  this.serviceguardar().subscribe(
    (response:any)=> this.resultado(response)
    
  );
  location.href="/garantiaV"
  
  }
  resultado(res:any){
    this.garantia={detallegarantia:[]};
    alert("Guardado:"+res.id_garantia)
  }
  eliminar(detalle:any){
    this.garantia.detallegarantia.splice(this.garantia.detallegarantia.indexOf(detalle),1)
  
  }
  serviceguardar(){
    var httpo={
      headers: new HttpHeaders({
        'Content-Tipe':'application/json'
      })
    }
    return this.http.post<any>("http://localhost:8080/garantia/api/v1/save",this.garantia,httpo)
  }
  eliminarG(garantiavehiculo:any){
    this.servicioG.delete(garantiavehiculo.idGarantia).subscribe( 
      res=> this.servicioG.getAllGarantiasV().subscribe(
        response=> this.garantiavehiculo=response));
    console.log("Prueba");
    location.href="/garantiaV"

  }
  /*
  cargar (id:any):void{
    this.servicioG.get(id).subscribe(es=>{
      console.log(es)
      this.descripcion.setValue(es.descripcion)
      this.idGarantia=es.idGarantia});
}
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
