import { Component, OnInit } from "@angular/core";
import { Clientes } from "src/app/modelos/clientes";
import { Factura } from "src/app/modelos/factura/factura.model";
import { ClienteService } from "src/app/services/Cliente/cliente.service";

@Component({
  selector: "app-facturacli",
  templateUrl: "./facturacli.component.html",
  styleUrls: ["./facturacli.component.css"],
})
export class FacturacliComponent implements OnInit {
  clientes: Clientes[] = [];
  factura = new Factura();
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

  compararCliente(o1: Clientes, o2: Clientes): boolean {
    if (o1 === undefined && o2 === undefined) {
      return true;
    }
    return o1 == null || o2 == null
      ? false
      : o1.cedulaClient === o2.cedulaClient;
  }
}
