import { Component, OnInit } from "@angular/core";
import { Columns, PdfMakeWrapper, Txt } from "pdfmake-wrapper";
import { Factura } from "src/app/modelos/factura/factura.model";
import { FacturaService } from "src/app/services/Factura/factura.service";
import { UtilReportService } from "src/app/services/Factura/util-report.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-detallefacli",
  templateUrl: "./detallefacli.component.html",
  styleUrls: ["./detallefacli.component.css"],
})
export class DetallefacliComponent implements OnInit {
  public facturas: Factura[] = [];
  public factura = new Factura();

  constructor(
    private facturaService: FacturaService,
    private srvUr: UtilReportService
  ) {}

  ngOnInit(): void {
    this.cargarFacturas();
  }

  cargarFacturas() {
    this.facturaService.getFacturas().subscribe((facturas) => {
      this.facturas = facturas;
    });
  }

  delete(factura: Factura): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "¿Estas  seguro?",
        text: `¿Seguro que quieres eliminar esta factura ?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, eliminar!",
        cancelButtonText: "No, cancelar!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.value) {
          this.facturaService.delete(factura.id!).subscribe((response) => {
            this.cargarFacturas();
            swalWithBootstrapButtons.fire(
              "Factura Eliminada!",
              `Factura  eliminada con exito!`,
              "success"
            );
          });
        }
      });
  }

  public reporteFacturaPDF(factura: Factura) {
    this.facturaService.getFacturaById(factura.id!).subscribe((factura) => {
      this.factura = factura;
      const pdf = new PdfMakeWrapper();
      pdf.pageMargins([40, 60, 40, 60]);
      pdf.pageSize("A4");
      pdf.info({
        title: "Factura",
        author: "START-MOTORS",
        subject: "Factura de Vehiculos",
      });
      pdf.add(
        new Txt(`Empresa:${this.factura.nombre_empresa}`)
          .alignment("left")
          .italics()
          .bold().end
      );
      pdf.add(
        new Txt(`${this.factura.fecha_emision}`)
          .alignment("left")
          .italics()
          .bold().end
      );

      pdf.add(
        new Txt(`Ruc:${this.factura.ruc_factura}`)
          .alignment("left")
          .italics()
          .bold().end
      );
      pdf.add(
        new Txt(`Direccion:${this.factura.direccion}`)
          .alignment("left")
          .italics()
          .bold().end
      );
      pdf.add(
        new Txt(`Cliente:${this.factura.cliente?.nombresClient}`)
          .alignment("left")
          .bold()
          .italics().end
      );
      pdf.add(pdf.ln(1));
      pdf.add(new Txt("Factura").alignment("left").bold().italics().end);
      pdf.add(pdf.ln(1));
      pdf.add(
        new Columns(["Vehiculo", "Cantidad", "Precio U", "SubTotal"])
          .columnGap(3)
          .style("text-center")
          .bold().end
      );
      this.factura.detallesfacturas?.forEach((detFac) => {
        pdf.add(
          new Columns([
            ` ${detFac.vehiculo?.vehiculoCatalogo?.diseno?.marca} ${detFac.vehiculo?.vehiculoCatalogo?.diseno?.modelo} ${detFac.vehiculo?.vehiculoCatalogo?.year_vehiculo} `,
            detFac.cantidad,
            `$${this.srvUr.formateaValor(detFac.vehiculo?.precio_venta)}`,
            `$${this.srvUr.formateaValor(
              detFac.vehiculo?.precio_venta! * detFac.cantidad!
            )}`,
          ])
            .columnGap(3)
            .style("text-center").end
        );
      });
      let total = 0;
      this.factura.detallesfacturas?.forEach((detFac) => {
        total += detFac.vehiculo?.precio_venta! * detFac.cantidad!;
      });
      pdf.add(
        new Columns(["Total", "", "", `$${this.srvUr.formateaValor(total)}`])
          .columnGap(3)
          .style("text-center")
          .bold().end
      );
      pdf.create().open();
    });
  }
}
