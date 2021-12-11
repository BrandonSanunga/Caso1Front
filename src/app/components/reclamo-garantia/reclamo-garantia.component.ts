import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SoliGarantiaService } from 'src/app/services/SolicitudGarantia/soli-garantia.service';
import { ReclamoGarantiaService } from 'src/app/services/ReclamoGarantia/reclamo-garantia.service';

@Component({
  selector: 'app-reclamo-garantia',
  templateUrl: './reclamo-garantia.component.html',
  styleUrls: ['./reclamo-garantia.component.css']
})
export class ReclamoGarantiaComponent implements OnInit {
  reclamosGaranList: any;

  constructor(
    public fb:FormBuilder,
    public soliGarantiaService:SoliGarantiaService,
    public reclamoGarantiaService:ReclamoGarantiaService
  ) { }

  ngOnInit(): void {
    this.reclamoGarantiaService.getAllReclamos().subscribe(resp=>{
      this.reclamosGaranList= resp;
      console.log(resp);
    },
    error=>{console.error(console.error)})

  }

}
