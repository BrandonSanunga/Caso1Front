import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehiculoCatalogoService } from 'src/app/services/vehiculo_catalogo/vehiculo-catalogo.service';

@Component({
  selector: 'app-vehiculo-catalogo',
  templateUrl: './vehiculo-catalogo.component.html',
  styleUrls: ['./vehiculo-catalogo.component.css']
})
export class VehiculoCatalogoComponent implements OnInit {
  catalogoform!: FormGroup;
  catalogo: any;

  constructor(
    public fb: FormBuilder,
    public catalogoservice: VehiculoCatalogoService
  ) { }

  ngOnInit(): void {
    this.catalogoform = this.fb.group({
     id_vehiculo_catalogo: ['',Validators.required],
     id_diseno: ['',Validators.required],
     year_vehiculo: ['',Validators.required],
     id_caracteristicas: ['',Validators.required],
     links_imagen: ['',Validators.required],
  });;

  this.catalogoservice.getAllCatalogo().subscribe(resp => {
    this.catalogo= resp;
  },
  error=>{console.error(error)}

  )
};
  
  guardarCatalogo(): void{
    this.catalogoservice.saveCatalogo(this.catalogoform.value).subscribe(resp => {
      this.catalogoform.reset();
    },
    error=>{console.error(error)}

    )
  }
  eliminarCatalogo(catalogo: { id_vehiculo_catalogo: any; }){
    this.catalogoservice.deleteCatalogo(catalogo.id_vehiculo_catalogo).subscribe(resp=>{
      console.log(resp)
      if(resp==true){
        this.catalogo.pop(catalogo)
      }
    })
  }
}