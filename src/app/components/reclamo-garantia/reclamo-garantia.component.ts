import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReclamoGarantiaService } from 'src/app/services/ReclamoGarantia/reclamo-garantia.service';

@Component({
  selector: 'app-reclamo-garantia',
  templateUrl: './reclamo-garantia.component.html',
  styleUrls: ['./reclamo-garantia.component.css']
})
export class ReclamoGarantiaComponent implements OnInit {
  reclamosGaranList: any;
  reclamoForm!: FormGroup;

  constructor(
    public fb:FormBuilder,
    public reclamoGarantiaService:ReclamoGarantiaService,
    public root:Router
  ) { }

  ngOnInit(): void {
    this.reclamoForm = this.fb.group({
      fecha_reclamo: [new Date()],
      fk_id_solicitud:['',Validators.required],
      descripcion:['',Validators.required],
      estado_reclamo:['true']
    });

    this.reclamoGarantiaService.getAllReclamos().subscribe(resp=>{
      this.reclamosGaranList= resp;
      console.log(resp);
    },
    error=>{console.error(console.error)})

  }

  guardarReclamo():void{
    this.reclamoGarantiaService.saveReclamos(this.reclamoForm.value).subscribe(resp=>{
      this.reclamoForm.reset;
      this.reclamosGaranList.push(resp);
      console.log(resp);
    },
    error=>{console.error(console.error)})
  }

  verInformeReclamo(InformeReclamo:any){
    localStorage.setItem("informe",InformeReclamo);
    this.root.navigate(['/informe-reclamo'])
  }
}
