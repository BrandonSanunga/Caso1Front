import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { InformeConcecionariaService } from 'src/app/services/InformeConcecionaria/informe-concecionaria.service';
import { OrdenRepCuerpServiceService } from 'src/app/services/ordenReparacion/orden-rep-cuerp-service.service';
import { HttpHeaders,HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-form-informe-conecesionaria',
  templateUrl: './form-informe-conecesionaria.component.html',
  styleUrls: ['./form-informe-conecesionaria.component.css']
})
export class FormInformeConecesionariaComponent implements OnInit {

  Informeform!: FormGroup;
  informe:any=[]
  garantiaList: any=[];
  datos: any=[];
  res!:number;
  v2!:number;

  


  constructor( private informeS:InformeConcecionariaService,
    public fb: FormBuilder,
    private detalle:OrdenRepCuerpServiceService,
    private http:HttpClient) { 
      
    }

  ngOnInit(): void {
    this.Informeform = this.fb.group({
      descricion: ['',Validators.required],
      porcentaje: ['',Validators.required] ,
      estado: ['true',Validators.required],
      total: ['',Validators.required],
      detalle: ['',Validators.required],

   });
  
   
  this.cargaT();

  this.detalle.all().subscribe(res=>{
    this.garantiaList=res
    console.log(res)
   })

  }
  cargaT(){
   
    this.detalle.all().subscribe(
      (response:any)=>this.mostrar(response)
     
      
    );
    
  }
  mostrar(response:any){
    this.informe=response;
  
  }
  guardarI(): void{
    this.informeS.create(this.Informeform.value).subscribe(resp=>{
      this.Informeform.reset;
      this.informe.push(resp);
      console.log(resp);
      location.href="/InformeConcesionaria"
    
      
    })}
calcula(){
  var   num1= ((document.getElementById("v3") as HTMLInputElement).value);
var   num2= ((document.getElementById("v1") as HTMLInputElement).value);
var resultado= parseFloat(num2)-((parseFloat(num2)*this.v2)/100)+parseFloat(num1);
this.res=resultado;


}
cargar(id:any){
this.informeS.get(id).subscribe(res=>{
  this.datos=res
  console.log(this.datos)
 
  

},er=>{
  console.log(er)
}
)
}

}