import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImagenCatalogoService } from 'src/app/services/ImagenCatalogo/imagen-catalogo.service';

@Component({
  selector: 'app-agregarimagen',
  templateUrl: './agregarimagen.component.html',
  styleUrls: ['./agregarimagen.component.css']
})
export class AgregarimagenComponent implements OnInit{
  selectedFile!: File;
  imagenform!: FormGroup;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message!: string;
  imageName: any;
  url: any;

  constructor(public fb: FormBuilder,
    private httpClient: HttpClient,
    public dialog: MatDialog,
    public imagenService: ImagenCatalogoService,
    ) { }

  ngOnInit(): void {
    this.imagenform = this.fb.group({
      id_imagen:[''],
      name:['', Validators.required],
      type:['', Validators.required],
      picByte:['', Validators.required],
    });
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
