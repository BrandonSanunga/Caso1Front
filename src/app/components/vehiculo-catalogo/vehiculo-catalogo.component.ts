import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehiculoCatalogoService } from 'src/app/services/vehiculo_catalogo/vehiculo-catalogo.service';
import { DisenoService } from 'src/app/services/diseno/diseno.service';
import { CarcaracteristicasService } from 'src/app/services/caracteristicas/carcaracteristicas.service';

@Component({
  selector: 'app-vehiculo-catalogo',
  templateUrl: './vehiculo-catalogo.component.html',
  styleUrls: ['./vehiculo-catalogo.component.css']
})
export class VehiculoCatalogoComponent implements OnInit {
  catalogoform!: FormGroup;
  catalogos: any;
  disenos: any;
  caracteristicas: any;

  constructor(
    public fb: FormBuilder,
    public catalogoservice: VehiculoCatalogoService,
    public disenoService: DisenoService,
    public caracteristicasService: CarcaracteristicasService
  ) { }

  ngOnInit(): void {
    this.catalogoform = this.fb.group({
      id_diseno: ['', Validators.required],
      year_vehiculo: ['', Validators.required],
      id_caracteristica: ['', Validators.required],
      links_imagen: ['', Validators.required],
    });

    this.disenoService.getAllDisenos().subscribe(resp => {
      this.disenos = resp;
      console.log(resp);
    },
      error => { console.error(error) }
    );

    this.caracteristicasService.getAllCaracteristicas().subscribe(resp => {
      this.caracteristicas = resp;
      console.log(resp);
    },
      error => { console.error(error) }
    );
    
    this.catalogoservice.getAllCatalogo().subscribe(resp => {
      this.catalogos = resp;
      console.log(resp);
    },
      error => { console.error(error) }

    );
  };

  guardarCatalogo(): void {
    this.catalogoservice.saveCatalogo(this.catalogoform.value).subscribe(resp => {
      this.catalogoform.reset();
      this.catalogos.push(resp);
      console.log(resp);
    },
      error => { console.error(error) }
    )
  }
  eliminarCatalogo(catalogo: any) {
    this.catalogoservice.deleteCatalogo(this.catalogos.id_vehiculo_catalogo).subscribe(resp => {
      console.log(resp)
      if (resp == true) {
        this.catalogos.pop(catalogo)
      }
    })
  }

}
