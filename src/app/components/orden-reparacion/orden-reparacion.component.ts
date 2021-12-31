import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InspeCuerpoServiceService } from 'src/app/services/inspeccion/inspe-cuerpo-service.service';
import { OrdenRepCaveServiceService } from 'src/app/services/ordenReparacion/orden-rep-cave-service.service';
import { OrdenRepCuerpServiceService } from 'src/app/services/ordenReparacion/orden-rep-cuerp-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-orden-reparacion',
  templateUrl: './orden-reparacion.component.html',
  styleUrls: ['./orden-reparacion.component.css']
})
export class OrdenReparacionComponent implements OnInit {
  inspeCuerpo: any;
  ordenCabeceraList: any;
  OrdenCuerpoList: any;
  InspeccionList: any;
  orden: any;
  OrdenRepCabeceraForm: any;
  OrdenRepCuerpoForm: any;
  InspeccionForm: any;

  constructor(public fb: FormBuilder,
    public ordenCabeceraService: OrdenRepCaveServiceService,
    public InspeccionService: InspeCuerpoServiceService,
    public OrdenCuerpoService: OrdenRepCuerpServiceService,
    ) { }

  ngOnInit(): void {
    this.OrdenRepCabeceraForm= this.fb.group({
      idordenCave: [''],
      fecha_emision: ['', Validators.required],
      fechaIngreso: ['', Validators.required],
      inspeCuerpo: ['', Validators.required],
      costoManoObra: ['', Validators.required],
    });
    this.OrdenRepCuerpoForm = this.fb.group({
      idordenCuerpo: [''],
      ordenRepCavecera: ['', Validators.required],
      trabajoSolicitado: ['', Validators.required],
      trabajoRealizar: ['', Validators.required],
      observaciones: ['', Validators.required],
      imagenes: ['', Validators.required],
      estadoOrden: ['', Validators.required],

    });
    this.InspeccionForm= this.fb.group({
      idinspecuerpo:[''],
    })
    this.InspeccionService.all().subscribe(resp => {
      this.InspeccionList = resp;
       //console.log("INSOECCION ------- "+resp);

    },
      error => { console.error(console.error) });
      this.OrdenCuerpoService.all().subscribe(resp => {
        this.OrdenCuerpoList = resp;
        //console.log("ORDEN CUERPO  ________"+resp);
      },
        error => { console.error(console.error) });
        this.ordenCabeceraService.getAllOrdenRep().subscribe(resp => {
          this.ordenCabeceraList= resp;
          console.log("ORDEN CABECERA    ========"+resp);
        },
          error => { console.error(console.error) });

  }
  getOrdenesCab(){
    this.ordenCabeceraService.getAllOrdenRep().subscribe(resp => {
      this.ordenCabeceraList= resp;
      //console.log(resp);
    },
      error => { console.error(console.error) });
  }
  getInspeccion(){
    this.InspeccionService.all().subscribe(resp => {
      this.InspeccionList = resp;
      //console.log("inspecciones "+resp);
    },
      error => { console.error(console.error) });
  }

  guardar(){
    this.guardarCabecera();
    //this.guardarOrdenCuerpo();
    Swal.fire(
      "Nueva Orden Reparacion",
      'Orden Reparacion Guardada con exito!',
      "success"
  );
  }
  guardarCabecera(): void {
    this.ordenCabeceraService.saveOrdenRep(this.OrdenRepCabeceraForm.value).subscribe(resp => {
      this.OrdenRepCabeceraForm.reset();
      this.ordenCabeceraList=this.ordenCabeceraList.filter((ordenCa:{ idordenCave: any; }) => resp.idordenCave ==ordenCa.idordenCave);
      this.ordenCabeceraList.push(resp);
      this.ordenCabeceraList.reset();
      this.ordenCabeceraList.push(resp);
    },
      error => { console.error(error) }
    )
  }
   eliminarOrden(ordenCabe: any): void {
    this.ordenCabeceraService.delete(ordenCabe.idordenCave).subscribe(resp => {
      //console.log(resp);
      if (resp == true) {
        this.ordenCabeceraList.pop(ordenCabe);
        this.ordenCabeceraList.push();
        Swal.fire(
          "Eliminado",
          'Orden Reparacion '+ ordenCabe.idordenCave +' eliminado correctamente!',
          "success"
        );
      }
    })
  }
  editarOrdenCab(ordenCabr: any) {
    this.OrdenRepCabeceraForm.setValue({
      idordenCave: ordenCabr.idordenCave,
      fecha_emision: ordenCabr.fecha_emision,
      fechaIngreso: ordenCabr.fechaIngreso,
      inspeCuerpo: ordenCabr.idinspeCuerpo,
      costoManoObra: ordenCabr.costoManoObra,
    });
    this.OrdenRepCuerpoForm = this.fb.group({
      idordenCuerpo: [''],
      ordenRepCavecera: ['', Validators.required],
      trabajoSolicitado: ['', Validators.required],
      trabajoRealizar: ['', Validators.required],
      observaciones: ['', Validators.required],
      imagenes: ['', Validators.required],
      estadoOrden: ['', Validators.required],

    });
  }

  //------------------------------------------------------------------------------------------------------------------------------
  getOrdenCuerpo(){
    this.OrdenCuerpoService.all().subscribe(resp => {
      this.OrdenCuerpoList = resp;
      //console.log(resp);
    },
      error => { console.error(console.error) });
  }
  guardarOrdenCuerpo(): void {
    this.OrdenCuerpoService.saveOrdenCuerpo(this.OrdenRepCuerpoForm.value).subscribe(resp => {
      this.OrdenCuerpoList.reset();
      this.OrdenCuerpoList=this.ordenCabeceraList.filter((ordenCa:{ idordenCave: any; }) => resp.idordenCave ==ordenCa.idordenCave);
      this.OrdenCuerpoList.push(resp);
      this.OrdenCuerpoList.reset();
      this.OrdenCuerpoList.push(resp);
    },
      error => { console.error(error) }
    )
  }
  eliminarOrdenCuerpo(orde: any): void {
    this.OrdenCuerpoService.delete(orde.idordenCuerpo).subscribe(resp => {
      console.log(resp);
      if (resp == true) {
        this.ordenCabeceraList.pop(orde);
        this.ordenCabeceraList.push();
        Swal.fire(
          "Eliminado",
          '¡Orden Cuerpo '+ orde.idordenCuerpo +' eliminado correctamente!',
          "success"
        );
      }
    })
  }
  editarOrdenReparacion(ordei: any) {
    this.OrdenRepCuerpoForm.setValue({
      idordenCuerpo: ordei.idordenCuerpo,
      ordenRepCavecera: ordei.OrdenServiceCab.ordenRepCavecera,
      trabajoSolicitado: ordei.diseno.trabajoSolicitado,
      trabajoRealizar: ordei.trabajoRealizar,
      observaciones: ordei.observaciones,
      imagenes: ordei.imagenes,
      estadoOrden: ordei.estadoOrden,
    })
  }

  }
