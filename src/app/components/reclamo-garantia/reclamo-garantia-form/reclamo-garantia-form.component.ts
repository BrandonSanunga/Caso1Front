import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReclamoGarantiaService } from 'src/app/services/ReclamoGarantia/reclamo-garantia.service';
import { SoliGarantiaService } from '../../../services/SolicitudGarantia/soli-garantia.service';


@Component({
  selector: 'app-reclamo-garantia-form',
  templateUrl: './reclamo-garantia-form.component.html',
  styleUrls: ['./reclamo-garantia-form.component.css']
})
export class ReclamoGarantiaFormComponent implements OnInit {
  reclamoForm!: FormGroup;
  solicitudList: any;

  constructor(
    public fb:FormBuilder,
    public reclamoGarantiaService:ReclamoGarantiaService,
    public soliGarantiaService:SoliGarantiaService
 ) { }

  ngOnInit(): void {
    this.reclamoForm = this.fb.group({
      estado_reclamo:['true'],
      fecha_reclamo: [new Date()],
      fk_id_solicitud:['',Validators.required]
    });

    this.soliGarantiaService.getSoliGarantiaByID(2).subscribe(resp=>{
      this.solicitudList=resp;
      console.log(resp);
    },
    error=>{console.error(console.error)})
  }
  guardarReclamo():void{
    this.reclamoGarantiaService.saveReclamos(this.reclamoForm.value).subscribe(resp=>{
      this.reclamoForm.reset;
      console.log(resp);
    },
    error=>{console.error(console.error)})
  }
}
