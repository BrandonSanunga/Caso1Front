import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarcaracteristicasService } from 'src/app/services/caracteristicas/carcaracteristicas.service';
import { DisenoService } from 'src/app/services/diseno/diseno.service';
import { VehiculoCatalogoService } from 'src/app/services/vehiculo_catalogo/vehiculo-catalogo.service';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { AgregarimagenComponent } from './agregarimagen/agregarimagen.component';
import { ImagenCatalogoService } from 'src/app/services/ImagenCatalogo/imagen-catalogo.service';

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
    public imagenservice: ImagenCatalogoService,
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
      error => { console.error(console.error) });

    this.imagenservice.getAllImagenes().subscribe(resp => {
      this.imagenList = resp;
      console.log(resp);
    },
      error => { console.error(console.error) });
  }
  guardarCatalogo(): void {
    this.catalogoservice.saveCatalogo(this.catalogoform.value).subscribe(resp => {
      console.log(resp);
      this.catalogoform.reset();
      this.catalogoList = this.catalogoList.filter((catalogo: { id_vehiculo_catalogo: any; }) => resp.id_vehiculo_catalogo != catalogo.id_vehiculo_catalogo);
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
        alert("Catalogo: " + catal.id_vehiculo_catalogo + " eliminado correctamente");
      }
    })
  }
  editarCatalogo(catal: any) {
    this.catalogoform.setValue({
      id_vehiculo_catalogo: catal.id_vehiculo_catalogo,
      diseno: catal.diseno.id_diseno,
      year_vehiculo: catal.year_vehiculo,
      caracteristica: catal.caracteristica.id_caracteristica,
      links_imagen: null,

    })

  }
  verCatalogo() {
    this.root.navigate(['/catalogo'])
  }
  openDialogVehiculo() {
    localStorage.setItem("vehiculoDialog",this.imagen)
    const dialogRef = this.dialog.open(AgregarimagenComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  getImage() {
    this.httpClient.get('http://localhost:8080/imagencatalogo/api/v1/get/' + this.imageName)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }
}
