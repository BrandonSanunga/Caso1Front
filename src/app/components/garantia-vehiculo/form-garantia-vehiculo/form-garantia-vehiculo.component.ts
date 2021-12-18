import { Component, OnInit } from '@angular/core';
import { GarantiaVehiculoService } from 'src/app/services/GarantiaVehiculo/garantia-vehiculo.service';;
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-garantia-vehiculo',
  templateUrl: './form-garantia-vehiculo.component.html',
  styleUrls: ['./form-garantia-vehiculo.component.css']
})
export class FormGarantiaVehiculoComponent implements OnInit {


  garantiavehiculo:any=[];
  garantia:any={detallegarantia:[]};
  detallegarantia:any=[]


  constructor(private servicioG:GarantiaVehiculoService,
    private http:HttpClient,
    public fb: FormBuilder) { }

  ngOnInit(): void {
 
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
  cancelar(){
    location.href="/garantiaV"
  }
}
