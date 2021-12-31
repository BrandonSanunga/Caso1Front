import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SoliGarantiaService } from '../../../services/SolicitudGarantia/soli-garantia.service';
//import { VehiculoService } from '../../../services/Vehiculo/vehiculo.service';
//import { SolicitudGarantia } from '../../../modelos/SolicitudGarantia/solicitud-garantia';
import { MatDialog } from '@angular/material/dialog';
import { ReclamoGarantiaFormComponent } from '../../reclamo-garantia/reclamo-garantia-form/reclamo-garantia-form.component';
import { AuthService } from '@auth0/auth0-angular';
import { PdfMakeWrapper, Txt, Columns, Table } from 'pdfmake-wrapper';
import Swal from "sweetalert2";

@Component({
  selector: 'app-soligarantia',
  templateUrl: './soligarantia.component.html',
  styleUrls: ['./soligarantia.component.css']
})
export class SoligarantiaComponent implements OnInit {
  public solGarantiaForm!: FormGroup;
  public vehiculosList: any;
  public solGarantiasList: any;
  public estado!: boolean;
  public facturasReportList!: any;
  public desde!: any;
  public hasta!: any;

  constructor(
    public fb: FormBuilder,
    public soliGarantiaService: SoliGarantiaService,
    public dialog: MatDialog,
    public auth: AuthService
  ) { }

  ngOnInit(): void {
    this.solGarantiaForm = this.fb.group({
      fecha_solicitud: ['', Validators.required],
      fk_chasis_vehiculo: ['', Validators.required],
      descripcion: ['', Validators.required],
      estado_solicitud: ['true']
    });
    this.listar();
  }

  cambiarEstadoSoli(id: any): void {
    localStorage.setItem("idlista", id);
    this.dialog.open(ReclamoGarantiaFormComponent);
    /*this.soliGarantiaService.cambiarEstadoSoli(soli.id_solicitud).subscribe(resp => {
      console.log(resp);
      if (resp != null) {
        this.solGarantiasList.pop(soli);
      }
    })*/
  }

  listar(): void {
    if (this.estado == false) {
      this.soliGarantiaService.getAllGarantiasTrue(false).subscribe(resp => {
        this.solGarantiasList = resp;
      },
        error => { console.error(console.error) })
    }
    if (this.estado == true) {
      this.soliGarantiaService.getAllGarantiasTrue(true).subscribe(resp => {
        this.solGarantiasList = resp;
      },
        error => { console.error(console.error) })
    }
    if (this.estado != false && this.estado != true) {
      this.soliGarantiaService.getAllGarantias().subscribe(resp => {
        this.solGarantiasList = resp;
      },
        error => { console.error(console.error) })
    }
  }

  reporte() {

    if (this.desde > this.hasta) {
      Swal.fire("ERROR", "La fecha de inicio no puede ser mayor a la fecha de fin!", "error");
    } else {
      this.soliGarantiaService.reporteFactura(this.desde, this.hasta).subscribe(resp => {
        this.facturasReportList = resp;
       //this.pdfReporte(this.facturasReportList);
       this.generaraPDF(this.facturasReportList)
      })
    }

  }


  extractData(datosTabla:any){
    return datosTabla.map((row:any) => [row.id,row.descripcion,row.cliente.nombresClient,row.total]);
  }
  async generaraPDF(asn:any){
    console.log(asn)
    const pdf = new PdfMakeWrapper();
    pdf.info({
      title: 'Reclamo de Garantía',
      author: 'StarMotors',
      subject: 'Vista PDF de un reclamo realizado',
  });

    pdf.pageSize('A4');
    pdf.pageOrientation('landscape');
    pdf.add(
      new Txt('RECLAMO DE GARANTÍA').alignment('center').color('red').bold().fontSize(30).italics().end
    )
    pdf.add(
      pdf.ln(1)
    )
    pdf.add(new Table([
      ['#FACTURA','DETALLE','CLIENTE', 'TOTAL'],
      ]).widths(['*','*','*','*']).layout(
        {
          fillColor:(rowIndex?:number, node?:any, columnIndex?:number)=>{
            return rowIndex ===0 ? '#CCCCCC': '';
          }
        }
      ).end)
      pdf.add(new Table([
        ...this.extractData(asn)
      ]).widths('*').end)
      pdf.footer('Este documento sirve para tener de manera física detalles del reclamo ante una solicitud de garantía para su posterior acepación o rechazo. No es necesaria su impresión ni descarga');
      pdf.watermark(new Txt('StarMotors').color('#ff7979').alignment('center').fontSize(40).end);

      pdf.create().open();
  console.log(pdf)
  }

  /*pdfReporte(soli: any) {
    const pdf = new PdfMakeWrapper();
    pdf.info({
      title: 'Reclamo de Garantía',
      author: 'StarMotors',
      subject: 'Vista PDF de un reclamo realizado',
  });

    pdf.pageSize('A4');
    pdf.pageOrientation('landscape');
    pdf.add(
      new Txt('RECLAMO DE GARANTÍA').alignment('center').color('red').bold().fontSize(30).italics().end
    )
    pdf.add(
      pdf.ln(1)
    )

    pdf.add(
      new Columns(["#FACTURA", "DETALLE", "CLIENTE", "TOTAL"])
        .style("text-center border").alignment('center').bold().end
    )

    pdf.add(
      pdf.ln(1)
    )

    pdf.add(
      new Columns([
        soli.id,soli.descripcion,soli.total

      ])
        .style("text-center").alignment('center').end
    )

    pdf.footer('Este documento sirve para tener de manera física detalles del reclamo ante una solicitud de garantía para su posterior acepación o rechazo. No es necesaria su impresión ni descarga');
    pdf.watermark(new Txt('StarMotors').color('#ff7979').alignment('center').fontSize(40).end);
    pdf.create().open();
  }
*/
}


/*guardarSolicitud():void{
  this.soliGarantiaService.saveSoliGarantia(this.solGarantiaForm.value).subscribe(resp=>{
    this.solGarantiaForm.reset;
    this.solGarantiasList.push(resp);
    console.log(resp);
  }
  ,
  error=>{console.error(console.error)})
}*/

/*eliminarSoicitud(soli: any):void{
  this.soliGarantiaService.deleteSoliGarantia(soli.id_solicitud).subscribe(resp=>{
    console.log(resp);
    if(resp==true){
      this.solGarantiasList.pop(soli);
    }
  },
  error=>{console.error(console.error)})
}*/

/*this.vehiculoService.getAllVehiculos().subscribe(resp=>{
      this.vehiculosList = resp;
      console.log(resp);
    },
    error=>{console.error(console.error)});*/
