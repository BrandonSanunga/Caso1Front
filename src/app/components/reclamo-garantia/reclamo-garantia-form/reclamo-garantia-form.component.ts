import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReclamoGarantiaService } from 'src/app/services/ReclamoGarantia/reclamo-garantia.service';
import { SoliGarantiaService } from '../../../services/SolicitudGarantia/soli-garantia.service';
import Swal from "sweetalert2";
import { Router } from '@angular/router';

@Component({
  selector: 'app-reclamo-garantia-form',
  templateUrl: './reclamo-garantia-form.component.html',
  styleUrls: ['./reclamo-garantia-form.component.css']
})
export class ReclamoGarantiaFormComponent implements OnInit {
  reclamoForm!: FormGroup;
  solicitudList: any;
  idsolicitud: any;
  constructor(
    public fb: FormBuilder,
    public reclamoGarantiaService: ReclamoGarantiaService,
    public soliGarantiaService: SoliGarantiaService,
    public root:Router
  ) { }

  ngOnInit(): void {
    this.reclamoForm = this.fb.group({
      estado_reclamo: ['true'],
      fecha_reclamo: [new Date()],
      fk_id_solicitud: ['', Validators.required]
    });
    this.idsolicitud = localStorage.getItem("idlista")
    this.soliGarantiaService.getSoliGarantiaByID(this.idsolicitud).subscribe(resp => {
      this.solicitudList = resp;
      console.log(resp);
    },
      error => { console.error(console.error) })
  }
  guardarReclamo(id: any): void {
    this.reclamoGarantiaService.saveReclamos(this.reclamoForm.value).subscribe(resp => {
      this.reclamoForm.reset;
      console.log(resp);
    },
      error => { console.error(console.error) })

    this.soliGarantiaService.cambiarEstadoSoli(id.id_solicitud).subscribe(resp => {
      Swal.fire("Reclamo de Garantía", "Reclamo generado con exito!", "success");
      console.log("se cambio a false");
      this.root.navigate(['reclamo/garantia'])
    })
  }
  cerrar():void{
    Swal.fire("Reclamo de Garantía", "Reclamo cancelado con exito!", "error");
  }
}
