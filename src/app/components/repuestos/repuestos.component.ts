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
     id_repuesto: [''],
     nombre_repuesto: ['',Validators.required],
     diseno: ['',Validators.required],
     precio: ['',Validators.required] ,
     estado: ['',Validators.required] ,
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
    this.repuestosservice.saveRepuestos(this.repuestosform.value).subscribe(resp=>{
      this.repuestosform.reset();
      this.repuestosList = this.repuestosList.filter((repuesto: { id_repuesto: any; }) => resp.id_repuesto!=repuesto.id_repuesto);
      this.repuestosList.push(resp);
      console.log(resp);
    })}
  eliminarRepuestos(Repues: any):void{
    this.repuestosservice.delete(Repues.id_repuesto).subscribe(resp=>{
      console.log(resp);
      if(resp==true){
        this.repuestosList.pop(Repues);
      }
    })
  }
  editarRepuestos(repuesto: any){
    this.repuestosform.setValue({
      id_repuesto: repuesto.id_repuesto,
      nombre_repuesto: repuesto.nombre_repuesto,
      diseno: repuesto.diseno.id_diseno,
      precio: repuesto.precio,
      estado: repuesto.estado,
    })
  }
}
