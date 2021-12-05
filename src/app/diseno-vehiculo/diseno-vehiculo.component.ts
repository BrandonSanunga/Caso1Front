import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DisenoService } from '../services/diseno/diseno.service';

@Component({
  selector: 'app-diseno-vehiculo',
  templateUrl: './diseno-vehiculo.component.html',
  styleUrls: ['./diseno-vehiculo.component.css']
})
export class DisenoVehiculoComponent implements OnInit {
  disenoform!: FormGroup;

  constructor(
    public fb: FormBuilder,
    public disenoService: DisenoService
  ) { }

  ngOnInit(): void {
    this.disenoform = this.fb.group({
     id_diseno: ['',Validators.required],
     marca: ['',Validators.required],
     modelo: ['',Validators.required] ,
  });;
  }
  guardarDiseno(): void{
    this.disenoService.saveDiseno(this.disenoform.value).subscribe(resp => {
      this.disenoform.reset();
    },
    error=>{console.error(error)}

    )
  }

}
