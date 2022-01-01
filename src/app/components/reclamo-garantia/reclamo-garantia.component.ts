import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReclamoGarantiaService } from 'src/app/services/ReclamoGarantia/reclamo-garantia.service';
import { PdfMakeWrapper, Txt, Columns } from 'pdfmake-wrapper';

@Component({
  selector: 'app-reclamo-garantia',
  templateUrl: './reclamo-garantia.component.html',
  styleUrls: ['./reclamo-garantia.component.css']
})
export class ReclamoGarantiaComponent implements OnInit {
  reclamosGaranList: any;
  reclamoForm!: FormGroup;
  estado: any;
  reclamoById: any;
  tipoInformes:any;
  listaconfirm:any=[];
  constructor(
    public fb: FormBuilder,
    public reclamoGarantiaService: ReclamoGarantiaService,
    public root: Router
  ) { }

  ngOnInit(): void {
    this.reclamoForm = this.fb.group({
      fecha_reclamo: [new Date()],
      fk_id_solicitud: ['', Validators.required],
      descripcion: ['', Validators.required],
      estado_reclamo: ['true']
    });

    this.reclamoGarantiaService.getAllReclamos().subscribe(resp => {
      this.reclamosGaranList = resp;
      console.log(resp);
      this.listaconfirm= this.reclamosGaranList
    },
      error => { console.error(console.error) })

  }

  guardarReclamo(): void {
    this.reclamoGarantiaService.saveReclamos(this.reclamoForm.value).subscribe(resp => {
      this.reclamoForm.reset;
      this.reclamosGaranList.push(resp);
      console.log(resp);
    },
      error => { console.error(console.error) })
  }

  verInformeReclamo(InformeReclamo: any, chasis: any) {
    var id = "9999292929"
    localStorage.setItem("idverifi", id)
    this.estado = false;
    localStorage.setItem("chasis", chasis)
    localStorage.setItem("estado", this.estado)
    localStorage.setItem("informe", InformeReclamo);
    this.root.navigate(['/informe-reclamo'])
  }
  public reclamoPDF(soli: any) {
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
      new Columns(["FECHA", "CHASIS", "MARCA", "MODELO", "DESCRIPCIÓN", "TIPO DE GARANTÍA"])
        .style("text-center border").alignment('center').bold().end
    )

    pdf.add(
      pdf.ln(1)
    )

    pdf.add(
      new Columns([
        soli.fecha_reclamo, soli.fk_id_solicitud.fk_chasis_vehiculo.chasis,
        soli.fk_id_solicitud.fk_chasis_vehiculo.vehiculoCatalogo.diseno.marca,
        soli.fk_id_solicitud.fk_chasis_vehiculo.vehiculoCatalogo.diseno.modelo,
        soli.fk_id_solicitud.descripcion,
        soli.fk_id_solicitud.fk_chasis_vehiculo.garantia.descripcion
      ])
        .style("text-center").alignment('center').end
    )

    pdf.footer('Este documento sirve para tener de manera física detalles del reclamo ante una solicitud de garantía para su posterior acepación o rechazo. No es necesaria su impresión ni descarga');
    pdf.watermark(new Txt('StarMotors').color('#ff7979').alignment('center').fontSize(40).end);
    pdf.create().open();
  }
  filtros(){
    if(this.reclamosGaranList.length<this.listaconfirm.length){
      this.reclamoGarantiaService.getAllReclamos().subscribe(resp => {
        this.reclamosGaranList = resp;
        console.log(resp);
      },
        error => { console.error(console.error) })
    }
    var reclamos = this.reclamosGaranList
    this.reclamosGaranList=[]
    for(let i of reclamos){
      if(this.tipoInformes=="true"){
        if(i.estado_reclamo==true){
          this.reclamosGaranList.push(i)
          console.log(this.reclamosGaranList)
        }
      }else if(this.tipoInformes=="false"){
        if(i.estado_reclamo==false){
          this.reclamosGaranList.push(i)
        }
      }
    }
  }
}
