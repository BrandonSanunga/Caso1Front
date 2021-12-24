import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CatalogoVehiculo } from "src/app/modelos/catalogo_vehiculo/catalogo-vehiculo.model";
import { Clientes } from "src/app/modelos/clientes";
import { Cotizacion } from "src/app/modelos/cotizacion/cotizacion.model";
import { ClienteService } from "src/app/services/Cliente/cliente.service";
import { CotizacionService } from "src/app/services/cotizacion/cotizacion.service";
import { VehiculoCatalogoService } from "src/app/services/vehiculo_catalogo/vehiculo-catalogo.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-add-cotizacion",
  templateUrl: "./add-cotizacion.component.html",
  styleUrls: ["./add-cotizacion.component.css"],
})
export class AddCotizacionComponent implements OnInit {
  public cotizacion = new Cotizacion();
  public clientes: Clientes[] = [];
  public vehiculos_catalogo: CatalogoVehiculo[] = [];

  constructor(
    private clienteService: ClienteService,
    private vehiculoCatlogoService: VehiculoCatalogoService,
    private cotizacionService: CotizacionService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => this.cargarCotizacion(id));
    this.cargarClientes();
    this.cargarVehiculosCatalogo();
  }

  cargarClientes() {
    this.clienteService.getAllClientes().subscribe((response: any) => {
      response as Clientes[];
      this.clientes = response;
    });
  }
  cargarVehiculosCatalogo() {
    this.vehiculoCatlogoService.getAllCatalogo().subscribe((response: any) => {
      response as CatalogoVehiculo[];
      this.vehiculos_catalogo = response;
    });
  }
  guardarCotizacion(form: NgForm) {
    if (form.invalid) {
      return;
    }
    if (this.cotizacion.id) {
      console.log("if");
      console.log(this.cotizacion);
      this.cotizacion.cliente!.clienteObject = null;
      this.cotizacionService
        .update(this.cotizacion, this.cotizacion.id)
        .subscribe((cotizacion) => {
          Swal.fire(
            "Actualizar Cotizacion",
            `¡Cotizacion actualizada con exito!`,
            "success"
          );
          this.irListaCotizaciones();
        });
    } else {
      console.log("else");
      console.log(this.cotizacion);
      this.cotizacion.cliente!.clienteObject = null;
      this.cotizacionService
        .crearCotizacion(this.cotizacion)
        .subscribe((cotizacion) => {
          Swal.fire(
            "Nueva Cotizacion",
            `¡Cotizacion creada con exito!`,
            "success"
          );
          this.irListaCotizaciones();
        });
    }
  }

  compararCliente(d1: Clientes, d2: Clientes) {
    if (d1 === undefined && d2 === undefined) {
      return true;
    }
    return d1 == null || d2 == null
      ? false
      : d1.cedulaClient === d2.cedulaClient;
  }
  compararVehiculoCatalogo(d1: CatalogoVehiculo, d2: CatalogoVehiculo) {
    if (d1 === undefined && d2 === undefined) {
      return true;
    }
    return d1 == null || d2 == null
      ? false
      : d1.id_vehiculo_catalogo === d2.id_vehiculo_catalogo;
  }
  cargarCotizacion(id: number) {
    if (!id) {
      return;
    }
    this.cotizacionService.getCotizacionById(id).subscribe((cotizacion) => {
      if (!cotizacion) {
        return this.irListaCotizaciones();
      }
      this.cotizacion = cotizacion;
    });
  }
  irListaCotizaciones() {
    this.router.navigateByUrl("/cotizaciones");
  }
}
