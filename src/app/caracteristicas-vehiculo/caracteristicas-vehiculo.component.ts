import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarcaracteristicasService } from '../services/caracteristicas/carcaracteristicas.service';

@Component({
  selector: 'app-caracteristicas-vehiculo',
  templateUrl: './caracteristicas-vehiculo.component.html',
  styleUrls: ['./caracteristicas-vehiculo.component.css']
})
export class CaracteristicasVehiculoComponent implements OnInit {
  caracteristicasform!: FormGroup;

  constructor(
    public fb: FormBuilder,
    public caracteristicaservice: CarcaracteristicasService
  ) { }

  ngOnInit(): void {
    this.caracteristicasform = this.fb.group({
     id_caracteristica: ['',Validators.required],
     capacidad_carga: ['',Validators.required],
     cilindros: ['',Validators.required],
     direccion: ['',Validators.required],
     interior: ['',Validators.required],
     motor: ['',Validators.required],
     numero_de_puertas: ['',Validators.required],
     rines: ['',Validators.required],
     seguridad: ['',Validators.required],
     tecnologia: ['',Validators.required],
     velocidades: ['',Validators.required],
     vidrios: ['',Validators.required],
  });;
  }
  guardarCaracteristicas(): void{
    this.caracteristicaservice.saveCaracteristicas(this.caracteristicasform.value).subscribe(resp => {
      this.caracteristicasform.reset();
    },
    error=>{console.error(error)}

    )
  }

}
