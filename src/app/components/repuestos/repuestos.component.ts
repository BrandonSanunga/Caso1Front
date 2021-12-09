import { Component, OnInit } from '@angular/core';
import { RepuestosService } from '../../services/repuestos/repuestos.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { DisenoService } from 'src/app/services/diseno/diseno.service';

@Component({
  selector: 'app-repuestos',
  templateUrl: './repuestos.component.html',
  styleUrls: ['./repuestos.component.css']
})
export class RepuestosComponent implements OnInit {
  repuestosform!: FormGroup;
  disenos: any;


  constructor(
    public fb: FormBuilder,
    public disenoService: DisenoService,
    public repuestosservice: RepuestosService
  ) { }

  ngOnInit(): void {
    this.repuestosform = this.fb.group({
      id_repuesto: ['', Validators.required],
      nombre_repuesto: ['', Validators.required],
      id_diseno: ['', Validators.required],
      precio: ['', Validators.required],
    });;
    this.disenoService.getAllDisenos().subscribe(resp => {
      this.disenos = resp;
    },
      error => { console.error(error) }
    )
  }
  guardarrepuestos(): void {
    this.repuestosservice.saveRepuestos(this.repuestosform.value).subscribe(resp => {
      this.repuestosform.reset();
    },
      error => { console.error(error) }

    )
  }

}
