import { Component, OnInit } from "@angular/core";
import { Factura } from "src/app/modelos/factura/factura.model";
import { FacturaService } from "src/app/services/Factura/factura.service";
import Swal from "sweetalert2";

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
}
