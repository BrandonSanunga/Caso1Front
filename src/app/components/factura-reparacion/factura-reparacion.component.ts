import { Component, OnInit } from '@angular/core';
import { InformeConcecionariaService } from '../../services/InformeConcecionaria/informe-concecionaria.service';
import { ClienteService } from '../../services/Cliente/cliente.service';
import { Clientes } from 'src/app/modelos/clientes';
import { FormControl, Validators } from '@angular/forms';
import { Columns, PdfMakeWrapper, Txt } from 'pdfmake-wrapper';

@Component({
  selector: 'app-factura-reparacion',
  templateUrl: './factura-reparacion.component.html',
  styleUrls: ['./factura-reparacion.component.css']
})
export class FacturaReparacionComponent implements OnInit {

  public facturasReparacion: any[] = [];
  public clientes: Clientes[] =[];
  public cliente: FormControl = new FormControl('', Validators.required);

  constructor( private informeConcecionariaService: InformeConcecionariaService,
    private clienteService: ClienteService ) { }

  ngOnInit(): void {
    this.cargarClientes();
    this.informeConcecionariaService.getAllInformes().subscribe(data => {
      console.log(data);
      this.facturasReparacion = data;
    });
  }

  cargarClientes() {
    this.clienteService.getAllClientes().subscribe(clientes => {
      this.clientes = clientes;
    });
  }

  reclamoPDF(factura: any) {
    console.log(factura);
    console.log(this.cliente);
    const pdf = new PdfMakeWrapper();
    pdf.info({
      title: 'Reclamo de Garantía',
      author: 'StarMotors',
      subject: 'Vista PDF de un reclamo realizado',
  });
  
    pdf.pageSize('A4');
    // pdf.pageOrientation('landscape');
    pdf.add(
      new Txt('FACTURA REPARACION').alignment('center').color('red').bold().fontSize(30).italics().end
    )
    pdf.add(
      pdf.ln(1)
    )

    pdf.add(
      new Columns(["CLIENTE", "DESCRIPCION", "PORCENTAJE", "TOTAL"])
        .style("text-center border").alignment('center').bold().end
    )

    pdf.add(
      pdf.ln(1)
    )
    
    pdf.add(
      new Columns([
        this.cliente,
        factura.descricion,
        factura.porcentaje + ' %',
        '$ '+factura.total
      ])
        .style("text-center").alignment('center').end
    )

    pdf.footer('Este documento sirve para tener de manera física la factura de reparaciom');
    pdf.watermark(new Txt('StarMotors').color('#ff7979').alignment('center').fontSize(40).end);
    pdf.create().open();
  }

}
