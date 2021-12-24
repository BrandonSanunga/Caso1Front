import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OrdenRepCavecera } from 'src/app/modelos/ordenReclamo/orden-rep-cavecera';
import { OrdenRepCuerpo } from 'src/app/modelos/ordenReclamo/orden-rep-cuerpo';
import { OrdenRepCaveServiceService } from 'src/app/services/ordenReparacion/orden-rep-cave-service.service';

@Component({
  selector: 'app-orden-reparacion',
  templateUrl: './orden-reparacion.component.html',
  styleUrls: ['./orden-reparacion.component.css']
})
export class OrdenReparacionComponent implements OnInit {
  idordenCuerpo:any;
  fecha_emision:any;
  fecha_ingreso:any;
  trabajoSolicitado:any;
  trabajoRealizar:any;
  observaciones:any;
  velocidades: any;
  inspeCuerpo: any;
  ordenform!: FormGroup;
ordenList: any;
  cliente: any;
 ordenCuerpos:OrdenRepCuerpo =new OrdenRepCuerpo ();
  ordenCave:OrdenRepCavecera =new OrdenRepCavecera();

  constructor(public fb: FormBuilder,public ordenReparacion: OrdenRepCaveServiceService) { }

  ngOnInit(): void {}
  guardarOrden(): void{

  }
 editarOrden(){
    console.log(this.ordenReparacion)
    this.ordenReparacion.update(this.ordenReparacion.buscarId,this.ordenReparacion).subscribe(data=>{
      console.log(data)
    })
  }
}
