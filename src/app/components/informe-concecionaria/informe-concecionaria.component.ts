import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { InformeConcecionariaService } from 'src/app/services/InformeConcecionaria/informe-concecionaria.service';
import { FormInformeConecesionariaComponent } from './form-informe-conecesionaria/form-informe-conecesionaria.component';


@Component({
  selector: 'app-informe-concecionaria',
  templateUrl: './informe-concecionaria.component.html',
  styleUrls: ['./informe-concecionaria.component.css']
})
export class InformeConcecionariaComponent implements OnInit {
  Informeform!: FormGroup;
  informe:any=[]
  constructor( private informeS:InformeConcecionariaService,
    public fb: FormBuilder,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.Informeform = this.fb.group({
      descricion: ['',Validators.required],
      costo: ['',Validators.required],
      porcentaje: ['',Validators.required] ,
      estado: ['true',Validators.required] 

   });
   this.cargaT();
  }

  cargaT(){
    this.informeS.getAllInformes().subscribe(
      (response:any)=>this.mostrar(response)
    )
  
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
    eliminar(garantia:any):void{

      this.informeS.delete(garantia.idConcesionaria).subscribe( 
        res=> this.informeS.getAllInformes().subscribe(
          response=> console.log(response)));
      location.href="/InformeConcesionaria"
      }

      cargar (idConcesionaria:any):void{
        this.informeS.get(idConcesionaria).subscribe(es=>{
          const {
            descricion,costo, porcentaje, estado }=es
            this.Informeform.setValue({descricion,costo, porcentaje, estado })
        }, error =>{
          console.log(error)
        });
}
agregar(){
  this.dialog.open(FormInformeConecesionariaComponent);
}


}
