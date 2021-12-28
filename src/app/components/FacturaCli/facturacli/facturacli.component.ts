import { Component, OnInit } from "@angular/core";
import { FormControl, NgForm } from "@angular/forms";
import { MatAutocompleteSelectedEvent } from "@angular/material/autocomplete";
import { ActivatedRoute, Router } from "@angular/router";
import { Columns, PdfMakeWrapper, Txt } from "pdfmake-wrapper";
import { Observable } from "rxjs";
import { flatMap, map } from "rxjs/operators";
import { Clientes } from "src/app/modelos/clientes";
import { Cotizacion } from "src/app/modelos/cotizacion/cotizacion.model";
import { DetalleFactura } from "src/app/modelos/factura/detalleFactura.model";
import { Factura } from "src/app/modelos/factura/factura.model";
import { Vehiculo } from "src/app/modelos/factura/vehiculo.model";
import { ClienteService } from "src/app/services/Cliente/cliente.service";
import { CotizacionService } from "src/app/services/cotizacion/cotizacion.service";
import { FacturaService } from "src/app/services/Factura/factura.service";
import { UtilReportService } from "src/app/services/Factura/util-report.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-facturacli",
  templateUrl: "./facturacli.component.html",
  styleUrls: ["./facturacli.component.css"],
})
export class FacturacliComponent implements OnInit {
  public clientes: Clientes[] = [];
  public factura = new Factura();
  public cotizacion = new Cotizacion();
  public vehiculosFiltrados?: Observable<Vehiculo[]>;
  public autocompleteControl = new FormControl();
  importe?: number;
  constructor(
    private clienteService: ClienteService,
    private facturaService: FacturaService,
    private cotizacionService: CotizacionService,
    private srvUr: UtilReportService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ idc }) =>
      this.cargarCotizacionById(idc)
    );
    this.cargarClientes();
    this.vehiculosFiltrados = this.autocompleteControl.valueChanges.pipe(
      map((value) => (typeof value === "string" ? value : value.chasis)),
      flatMap((value) => (value ? this._filter(value) : []))
    );
  }

  guardarFactura(form: NgForm) {
    if (this.factura.detallesfacturas?.length === 0) {
      this.autocompleteControl.setErrors({ invalid: true });
    }
    if (form.valid && this.factura.detallesfacturas!.length > 0) {
      this.factura.cliente!.clienteObject = null;
      console.log(this.factura);
      this.facturaService.crearFactura(this.factura).subscribe((factura) => {
        Swal.fire("Nueva Factura", "Venta realizada con exito!", "success");
        this.reporteFacturaPDF();
        this.router.navigateByUrl("/facturas");
      });
    }
  }
  cargarClientes() {
    this.clienteService.getAllClientes().subscribe((response: any) => {
      response as Clientes[];
      this.clientes = response;
    });
  }

  seleccionarVehiculo(event: MatAutocompleteSelectedEvent): void {
    let vehiculo = event.option.value as Vehiculo;
    if (this.existeItemFactura(vehiculo.chasis!)) {
      this.incrementaCantidad(vehiculo.chasis!);
    } else {
      let nuevoDetalleFac = new DetalleFactura();
      nuevoDetalleFac.vehiculo = vehiculo;
      nuevoDetalleFac.cantidad = 1;
      this.factura.detallesfacturas?.push(nuevoDetalleFac);
    }
    this.autocompleteControl.setValue("");
    event.option.focus();
    event.option.deselect();
  }

  existeItemFactura(chasis: string): boolean {
    let existe = false;
    this.factura.detallesfacturas?.forEach((det: DetalleFactura) => {
      if (chasis === det.vehiculo?.chasis) {
        existe = true;
      }
    });
    return existe;
  }
  incrementaCantidad(chasis: string) {
    this.factura.detallesfacturas = this.factura.detallesfacturas?.map(
      (det: DetalleFactura) => {
        if (chasis === det.vehiculo?.chasis) {
          ++det.cantidad!;
        }
        return det;
      }
    );
  }
  actualizarCantidad(chasis: string, event: any) {
    let cantidad: number = event.target.value as number;
    if (cantidad == 0) {
      return this.eliminarItemFactura(chasis);
    }
    this.factura.detallesfacturas = this.factura.detallesfacturas?.map(
      (det: DetalleFactura) => {
        if (chasis === det.vehiculo?.chasis) {
          det.cantidad = cantidad;
        }
        return det;
      }
    );
  }

  private _filter(value: string) {
    const filterValue = value;
    return this.facturaService.getVehiculosByMarcaOrModeloAndEstado(
      filterValue
    );
  }
  mostrarNombreVehiculo(vehiculo: Vehiculo): any {
    return vehiculo ? vehiculo.vehiculoCatalogo!.diseno!.marca! : undefined;
  }

  eliminarItemFactura(chasis: string): void {
    this.factura.detallesfacturas = this.factura.detallesfacturas?.filter(
      (det: DetalleFactura) => chasis !== det.vehiculo?.chasis
    );
  }

  compararCliente(o1: Clientes, o2: Clientes): boolean {
    if (o1 === undefined && o2 === undefined) {
      return true;
    }
    return o1 == null || o2 == null
      ? false
      : o1.cedulaClient === o2.cedulaClient;
  }
  public calcularImporte(): number {
    this.factura.detallesfacturas?.forEach((det: DetalleFactura) => {
      this.importe = det.cantidad! * det.vehiculo?.precio_venta!;
    });
    return this.importe!;
  }
  cargarCotizacionById(idc: number) {
    if (!idc) {
      return;
    }
    this.cotizacionService.getCotizacionById(idc).subscribe((cotizacion) => {
      this.cotizacion = cotizacion;
      this.factura.cliente = this.cotizacion.cliente;
      this.facturaService
        .getVehiculoByVehiculoCatalogo(
          this.cotizacion.vehiculo_catalogo?.id_vehiculo_catalogo!
        )
        .subscribe((vehiculo) => {
          let nuevoDetalleFac = new DetalleFactura();
          nuevoDetalleFac.vehiculo = vehiculo;
          nuevoDetalleFac.cantidad = 1;
          this.factura.detallesfacturas?.push(nuevoDetalleFac);
        });
    });
  }

  public reporteFacturaPDF() {
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
      new Txt(`${this.srvUr.fecha()}`).alignment("left").italics().bold().end
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
    pdf.add(
      new Columns([
        "Total",
        "",
        "",
        `$${this.srvUr.formateaValor(this.factura.calcularGranTotal())}`,
      ])
        .columnGap(3)
        .style("text-center")
        .bold().end
    );
    pdf.create().open();
  }
}
