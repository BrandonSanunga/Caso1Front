import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { InformeConcecionariaService } from 'src/app/services/InformeConcecionaria/informe-concecionaria.service';

@Component({
  selector: 'app-form-informe-conecesionaria',
  templateUrl: './form-informe-conecesionaria.component.html',
  styleUrls: ['./form-informe-conecesionaria.component.css']
})
export class FormInformeConecesionariaComponent implements OnInit {

  Informeform!: FormGroup;
  informe:any=[]
  constructor( private informeS:InformeConcecionariaService,
    public fb: FormBuilder) { }

  ngOnInit(): void {
    this.Informeform = this.fb.group({
      descricion: ['',Validators.required],
      costo: ['',Validators.required],
      porcentaje: ['',Validators.required] ,
      estado: ['true',Validators.required] 

   });
  }
  guardarI(): void{
    this.informeS.create(this.Informeform.value).subscribe(resp=>{
      this.Informeform.reset;
      this.informe.push(resp);
      console.log(resp);
      location.href="/InformeConcesionaria"
    })}

}
