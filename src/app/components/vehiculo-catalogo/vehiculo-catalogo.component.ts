import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarcaracteristicasService } from 'src/app/services/caracteristicas/carcaracteristicas.service';
import { DisenoService } from 'src/app/services/diseno/diseno.service';
import { VehiculoCatalogoService } from 'src/app/services/vehiculo_catalogo/vehiculo-catalogo.service';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { ImagenCatalogoService } from 'src/app/services/ImagenCatalogo/imagen-catalogo.service';
import { AuthService } from '@auth0/auth0-angular';
import Swal from "sweetalert2";

@Component({
  selector: 'app-vehiculo-catalogo',
  templateUrl: './vehiculo-catalogo.component.html',
  styleUrls: ['./vehiculo-catalogo.component.css']
})
export class VehiculoCatalogoComponent implements OnInit {
  selectedFile!: File;
  catalogoform!: FormGroup;
  catalogo: any;
  catalogoList: any;
  DisenoList: any;
  caracteristicaList: any;
  imagenList: any;
  url: any; //url de la imagenk
	msg = "";
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  imageDirectory: any= "https://starmotors1.herokuapp.com/imagencatalogo/api/v1/get/";
  imageName: any;
  public archivos: any= [];
  public previsualizacion!: String;

  constructor(
    private sanitizer: DomSanitizer,
    public fb: FormBuilder,
    public catalogoservice: VehiculoCatalogoService,
    public disenoService: DisenoService,
    public caracteristicasservice: CarcaracteristicasService,
    public root:Router,
    public dialog: MatDialog,
    private httpClient: HttpClient,
    public imagenservice: ImagenCatalogoService,
    public auth: AuthService,

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
    this.getcatalogo();
  }
  getDisenos(){
    this.disenoService.getAllDisenos().subscribe(resp => {
      this.DisenoList = resp;
      //console.log(resp);
    },
      error => { console.error(console.error) });
  }
  getCaracteristicas(){
    this.caracteristicasservice.getAllCaracteristicas().subscribe(resp => {
      this.caracteristicaList = resp;
      //console.log(resp);
    },
      error => { console.error(console.error) });
  }
  getcatalogo(){
    this.catalogoservice.getAllCatalogo().subscribe(resp => {
      this.catalogoList = resp;
      //console.log(resp);
    },
      error => { console.error(console.error) })


  }
  verCatalogo(){
    this.root.navigate(['catalogo/admin'])

  }
  alerta(){
    Swal.fire({
      title:"Cotización",
      html:'<label>Para visualizar la cotizacion. Se debe descargar la aplicacion desde el siguiente enlace. </label> <br><br> <a href=" https://drive.google.com/drive/u/1/folders/1Z0cPmKHTxPT5Y_G8xCoFoOTvcsktQM95"> Descargar la aplicacion</a> ',
      icon: "info"
    })
  }
}
