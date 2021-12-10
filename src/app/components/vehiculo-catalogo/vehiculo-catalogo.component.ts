import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarcaracteristicasService } from 'src/app/services/caracteristicas/carcaracteristicas.service';
import { DisenoService } from 'src/app/services/diseno/diseno.service';
import { VehiculoCatalogoService } from 'src/app/services/vehiculo_catalogo/vehiculo-catalogo.service';

@Component({
  selector: 'app-vehiculo-catalogo',
  templateUrl: './vehiculo-catalogo.component.html',
  styleUrls: ['./vehiculo-catalogo.component.css']
})
export class VehiculoCatalogoComponent implements OnInit {
  catalogoform!: FormGroup;
  catalogo: any;
  catalogoList: any;
  DisenoList: any;
  caracteristicaList: any;

  constructor(
    public fb: FormBuilder,
    public catalogoservice: VehiculoCatalogoService,
    public disenoService: DisenoService,
    public caracteristicasservice: CarcaracteristicasService

  ) { }

  ngOnInit(): void {
    this.catalogoform = this.fb.group({
     diseno: ['',Validators.required],
     year_vehiculo: ['',Validators.required],
     caracteristica: ['',Validators.required],
     links_imagen: ['',Validators.required],
  });
  this.disenoService.getAllDisenos().subscribe(resp=>{
    this.DisenoList = resp;
    console.log(resp);
  },
  error=>{console.error(console.error)});

  this.caracteristicasservice.getAllCaracteristicas().subscribe(resp=>{
    this.caracteristicaList= resp;
    console.log(resp);
  },
  error=>{console.error(console.error)});

  this.catalogoservice.getAllCatalogo().subscribe(resp=>{
    this.catalogoList= resp;
    console.log(resp);
  },
  error=>{console.error(console.error)})
}

  guardarCatalogo(): void{
    this.catalogoservice.saveCatalogo(this.catalogoform.value).subscribe(resp => {
      this.catalogoform.reset();
      this.DisenoList.push(resp);
      console.log(resp);
    },
    error=>{console.error(error)}

    )
  }
  eliminarCatalogo(soli: any):void{
    this.catalogoservice.deleteCatalogo(soli.id_vehiculo_catalogo).subscribe(resp=>{
      console.log(resp);
      if(resp==true){
        this.catalogoList.pop(soli);
      }
    })
  }}
