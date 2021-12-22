import { flatten } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { FormControl, NgForm } from "@angular/forms";
import { MatAutocompleteSelectedEvent } from "@angular/material/autocomplete";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { flatMap, map } from "rxjs/operators";
import { Clientes } from "src/app/modelos/clientes";
import { DetalleFactura } from "src/app/modelos/factura/detalleFactura.model";
import { Factura } from "src/app/modelos/factura/factura.model";
import { Vehiculo } from "src/app/modelos/factura/vehiculo.model";
import { ClienteService } from "src/app/services/Cliente/cliente.service";
import { FacturaService } from "src/app/services/Factura/factura.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-facturacli",
  templateUrl: "./facturacli.component.html",
  styleUrls: ["./facturacli.component.css"],
})
export class FacturacliComponent implements OnInit {
  public clientes: Clientes[] = [];
  public factura = new Factura();
  public vehiculosFiltrados?: Observable<Vehiculo[]>;
  public autocompleteControl = new FormControl();
  importe?: number;
  constructor(
    private clienteService: ClienteService,
    private facturaService: FacturaService,
    private router: Router
  ) {}

  ngOnInit(): void {
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
}
