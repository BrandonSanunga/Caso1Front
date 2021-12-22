import { Component, OnInit } from "@angular/core";
import { Factura } from "src/app/modelos/factura/factura.model";
import { FacturaService } from "src/app/services/Factura/factura.service";

@Component({
  selector: "app-detallefacli",
  templateUrl: "./detallefacli.component.html",
  styleUrls: ["./detallefacli.component.css"],
})
export class DetallefacliComponent implements OnInit {
  public facturas: Factura[] = [];

  constructor(private facturaService: FacturaService) {}

  ngOnInit(): void {
    this.cargarFacturas();
  }

  cargarFacturas() {
    this.facturaService.getFacturas().subscribe((facturas) => {
      this.facturas = facturas;
    });
  }
}
