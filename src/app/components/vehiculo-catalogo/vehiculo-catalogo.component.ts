import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarcaracteristicasService } from 'src/app/services/caracteristicas/carcaracteristicas.service';
import { DisenoService } from 'src/app/services/diseno/diseno.service';
import { VehiculoCatalogoService } from 'src/app/services/vehiculo_catalogo/vehiculo-catalogo.service';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

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
  url: any; //url de la imagenk
	msg = "";
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  imageName: any;
  imageDirectory: any= "http://localhost:8080/imagencatalogo/api/v1/get/";

  constructor(

    public fb: FormBuilder,
    public catalogoservice: VehiculoCatalogoService,
    public disenoService: DisenoService,
    public caracteristicasservice: CarcaracteristicasService,
    public root:Router,
    public dialog: MatDialog,
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
      error => { console.error(console.error) })
  }

  verCatalogo(){
    this.root.navigate(['catalogo/admin'])

  }
//seleccionar imagen
public onFileChanged(event: any) {
  //Selecciona el archivo en este caso la imagen
  this.selectedFile = event.target.files[0];
}

//metodo para cargar la imagen
onUpload() {
  console.log(this.selectedFile);
  const uploadImageData = new FormData();
  uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
  alert("Imagen ( "+ this.selectedFile.name+" ) Guardada Correctamente");
  this.dialog.closeAll();
  this.httpClient.post('http://localhost:8080/imagencatalogo/api/v1/upload', uploadImageData, { observe: 'response' })
    .subscribe((response) => {
      if (response.status === 200) {
        alert("Imagen Guardada Correctamente");
      } else {
        alert("Error la Imagen no se Guardo");
      }
    }
    );
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
 /* guardarCatalogo(): void {
    this.catalogoservice.saveCatalogo(this.catalogoform.value).subscribe(resp => {
      this.catalogoform.reset();
      this.catalogoList = this.catalogoList.filter((catalogo: { id_vehiculo_catalogo: any; }) => resp.id_vehiculo_catalogo!=catalogo.id_vehiculo_catalogo);
      this.catalogoList.push(resp);
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
  selectFile(event: any) {
		if(!event.target.files[0] || event.target.files[0].length == 0) {
			this.msg = 'correcto';
			return;
		}
		var mimeType = event.target.files[0].type;
		if (mimeType.match(/image\//) == null) {
			this.msg = "solo debe ser imagen";
			return;
		}
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		reader.onload = (_event) => {
			this.msg = "";
			this.url = reader.result;

		}
	}


  openDialogVehiculo() {
    localStorage.setItem("catalogoDialog",this.catalogo)
    const dialogRef = this.dialog.open(VehiculoCatalogoFormComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }*/

