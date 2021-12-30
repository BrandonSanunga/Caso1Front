import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarcaracteristicasService } from 'src/app/services/caracteristicas/carcaracteristicas.service';
import { DisenoService } from 'src/app/services/diseno/diseno.service';
import { VehiculoCatalogoService } from 'src/app/services/vehiculo_catalogo/vehiculo-catalogo.service';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
//import { CaracteristicasVehiculoComponent } from '../../caracteristicas-vehiculo/caracteristicas-vehiculo.component';

//import { AgregarimagenComponent } from './agregarimagen/agregarimagen.component';
//import { ImagenCatalogoService } from 'src/app/services/ImagenCatalogo/imagen-catalogo.service';
import Swal from "sweetalert2";
import { CaracteristicasVehiculoComponent } from '../../caracteristicas-vehiculo/caracteristicas-vehiculo.component';


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
  imagenList: any;
  caracteristicaList: any;
  imagen: any;
  caracteristicas: any;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  imageName: any;



  constructor(
    public fb: FormBuilder,
    public catalogoservice: VehiculoCatalogoService,
    public disenoService: DisenoService,
    public root: Router,
    public dialog: MatDialog,
    public caracteristicasservice: CarcaracteristicasService,
    //public imagenservice: ImagenCatalogoService,
    private httpClient: HttpClient,

  ) { }

  ngOnInit(): void {
    this.catalogoform = this.fb.group({
      id_vehiculo_catalogo: [''],
      diseno: ['', Validators.required],
      year_vehiculo: ['', Validators.required],
      caracteristica: ['', Validators.required],
      links_imagen: ['', Validators.required],
    });
    this.getDisenos();
    this.getCaracteristicas();
    this.getCatalogo();
  }


  getDisenos() {
    this.disenoService.getAllDisenos().subscribe(resp => {
      this.DisenoList = resp;
      //console.log(resp);
    },
      error => { console.error(console.error) });
  }
  getCaracteristicas() {
    this.caracteristicasservice.getAllCaracteristicas().subscribe(resp => {
      this.caracteristicaList = resp;
      //console.log(resp);
    },
      error => { console.error(console.error) });
  }
  getCatalogo() {
    this.catalogoservice.getAllCatalogo().subscribe(resp => {
      this.catalogoList = resp;
      //console.log(resp);
    },
      error => { console.error(console.error) });
  }
  guardarCatalogo(): void {
    this.catalogoservice.saveCatalogo(this.catalogoform.value).subscribe(resp => {
      //console.log(resp);
      this.catalogoform.reset();
      this.catalogoList = this.catalogoList.filter((catalogo: { id_vehiculo_catalogo: any; }) => resp.id_vehiculo_catalogo != catalogo.id_vehiculo_catalogo);
      this.catalogoList.push(resp);
      Swal.fire(
        "Nuevo Catalogo",
        `¡Vehiculo Agregado al Catalogo con exito!`,
        "success"
      );
      //console.log(resp);
    }
      ,
      error => { console.error(console.error) })
  }
  eliminarCatalogo(catal: any): void {
    this.catalogoservice.delete(catal.id_vehiculo_catalogo).subscribe(resp => {
      //console.log(resp);
      if (resp == true) {
        this.catalogoList.pop(catal);
        this.catalogoList.push();
        Swal.fire(
          "Eliminado",
          `¡Vehiculo eliminado del catalogo correctamente!`,
          "success"
        );
      }
    })
  }
  editarCatalogo(catal: any) {
    this.catalogoform.setValue({
      id_vehiculo_catalogo: catal.id_vehiculo_catalogo,
      diseno: catal.diseno.id_diseno,
      year_vehiculo: catal.year_vehiculo,
      caracteristica: catal.caracteristica.id_caracteristica,
      links_imagen: catal.links_imagen,

    })

  }
  verCaracteristicas() {
    localStorage.setItem("CaracteristicasDialog", this.caracteristicas)
    const dialogRef = this.dialog.open(CaracteristicasVehiculoComponent, {height: '700px'});
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  verCatalogo() {
    this.root.navigate(['/catalogo'])
  }
}
  /*
openDialogVehiculo() {
  localStorage.setItem("vehiculoDialog",this.imagen)
  const dialogRef = this.dialog.open(AgregarimagenComponent);
  dialogRef.afterClosed().subscribe(result => {
  });
}

}*/
