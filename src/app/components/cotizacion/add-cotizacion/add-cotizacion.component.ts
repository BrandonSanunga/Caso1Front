import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Clientes } from "src/app/modelos/clientes";
import { Cotizacion } from "src/app/modelos/cotizacion/cotizacion.model";
import { ClienteService } from "src/app/services/Cliente/cliente.service";

@Component({
  selector: "app-add-cotizacion",
  templateUrl: "./add-cotizacion.component.html",
  styleUrls: ["./add-cotizacion.component.css"],
})
export class AddCotizacionComponent implements OnInit {
  public cotizacion = new Cotizacion();
  public clientes: Clientes[] = [];

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.cargarClientes();
  }

  cargarClientes() {
    this.clienteService.getAllClientes().subscribe((response: any) => {
      response as Clientes[];
      this.clientes = response;
    });
  }
  guardarCotizacion(myForm: NgForm) {}

  compararCliente(d1: Clientes, d2: Clientes) {
    if (d1 === undefined && d2 === undefined) {
      return true;
    }
    return d1 == null || d2 == null
      ? false
      : d1.cedulaClient === d2.cedulaClient;
  }
}
