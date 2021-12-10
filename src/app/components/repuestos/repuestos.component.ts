import { Component, OnInit } from '@angular/core';
import {RepuestosService} from '../../services/repuestos/repuestos.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { DisenoService } from 'src/app/services/diseno/diseno.service';

@Component({
  selector: 'app-repuestos',
  templateUrl: './repuestos.component.html',
  styleUrls: ['./repuestos.component.css']
})
export class RepuestosComponent implements OnInit {
  repuestosform!: FormGroup;
  DisenoList: any;
  repuestosList: any;


  constructor(
    public fb: FormBuilder,
    public disenoService: DisenoService,
    public repuestosservice: RepuestosService
  ) { }

  ngOnInit(): void {
    this.repuestosform = this.fb.group({
     nombre_repuesto: ['',Validators.required],
     diseno: ['',Validators.required],
     precio: ['',Validators.required] ,
  });
  this.disenoService.getAllDisenos().subscribe(resp=>{
    this.DisenoList = resp;
    console.log(resp);
  },
  error=>{console.error(console.error)});
  this.repuestosservice.getAllRepuestos().subscribe(resp=>{
    this.repuestosList= resp;
    console.log(resp);
  },
  error=>{console.error(console.error)})
  }
  guardarrepuestos(): void{
    this.repuestosservice.saveRepuestos(this.repuestosform.value).subscribe(resp => {
      this.repuestosform.reset();
    },
    error=>{console.error(error)}

    )
  }

}
