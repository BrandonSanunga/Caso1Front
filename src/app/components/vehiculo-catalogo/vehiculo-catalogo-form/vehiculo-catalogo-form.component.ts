import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarcaracteristicasService } from 'src/app/services/caracteristicas/carcaracteristicas.service';
import { DisenoService } from 'src/app/services/diseno/diseno.service';
import { VehiculoCatalogoService } from 'src/app/services/vehiculo_catalogo/vehiculo-catalogo.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-vehiculo-catalogo-form',
  templateUrl: './vehiculo-catalogo-form.component.html',
  styleUrls: ['./vehiculo-catalogo-form.component.css']
})
export class VehiculoCatalogoFormComponent implements OnInit {
  catalogoform!: FormGroup;
  catalogo: any;
  catalogoList: any;
  DisenoList: any;
  caracteristicaList: any;
  url: any; //url de la imagen
	msg = "";



  constructor(
    public fb: FormBuilder,
    public catalogoservice: VehiculoCatalogoService,
    public disenoService: DisenoService,
    public root:Router,
    public dialog: MatDialog,
    public caracteristicasservice: CarcaracteristicasService

  ) { }

  ngOnInit(): void {
    this.catalogoform = this.fb.group({
      id_vehiculo_catalogo: [''],
      diseno: ['', Validators.required],
      year_vehiculo: ['', Validators.required],
      caracteristica: ['', Validators.required],
      links_imagen: ['', Validators.required],
    });
    this.disenoService.getAllDisenos().subscribe(resp => {
      this.DisenoList = resp;
      console.log(resp);
    },
      error => { console.error(console.error) });

    this.caracteristicasservice.getAllCaracteristicas().subscribe(resp => {
      this.caracteristicaList = resp;
      console.log(resp);
    },
      error => { console.error(console.error) });

    this.catalogoservice.getAllCatalogo().subscribe(resp => {
      this.catalogoList = resp;
      console.log(resp);
    },
      error => { console.error(console.error) })
  }
  guardarCatalogo(): void {
    this.catalogoservice.saveCatalogo(this.catalogoform.value).subscribe(resp => {
      this.catalogoform.reset();
      this.catalogoList = this.catalogoList.filter((catalogo: { id_vehiculo_catalogo: any; }) => resp.id_vehiculo_catalogo!=catalogo.id_vehiculo_catalogo);
      this.catalogoList.push(resp);
      alert("Catalogo guardado correctamente");
      console.log(resp);
    }
      ,
      error => { console.error(console.error) })
  }
  eliminarCatalogo(catal: any): void {
    this.catalogoservice.delete(catal.id_vehiculo_catalogo).subscribe(resp => {
      console.log(resp);
      if (resp == true) {
        this.catalogoList.pop(catal);
        this.catalogoList.push();
        alert("Catalogo: "+catal.id_vehiculo_catalogo+" eliminado correctamente");
      }
    })
  }
  editarCatalogo(catal: any){
    this.catalogoform.setValue({
      id_vehiculo_catalogo: catal.id_vehiculo_catalogo,
      diseno: catal.diseno.id_diseno,
      year_vehiculo: catal.year_vehiculo,
      caracteristica: catal.caracteristica.id_caracteristica,
      links_imagen: catal.links_imagen,

    })

  }
  verCatalogo(){
    this.root.navigate(['/catalogo'])
  }
}
