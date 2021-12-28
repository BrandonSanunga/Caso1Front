import { Component, OnInit } from "@angular/core";
import { Cotizacion } from "src/app/modelos/cotizacion/cotizacion.model";
import { CotizacionService } from "src/app/services/cotizacion/cotizacion.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-list-cotizacion",
  templateUrl: "./list-cotizacion.component.html",
  styleUrls: ["./list-cotizacion.component.css"],
})
export class ListCotizacionComponent implements OnInit {
  public cotizaciones: Cotizacion[] = [];

  constructor(private cotizacionService: CotizacionService) {}

  ngOnInit(): void {
    this.cargarCotizaciones();
  }

  cargarCotizaciones() {
    this.cotizacionService
      .getCotizacions()
      .subscribe((cotizaciones) => (this.cotizaciones = cotizaciones));
  }

  delete(cotizacion: Cotizacion): void {
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
        text: `¿Seguro que quieres eliminar esta cotizacion ?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, eliminar!",
        cancelButtonText: "No, cancelar!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.value) {
          this.cotizacionService
            .delete(cotizacion.id!)
            .subscribe((response) => {
              this.cargarCotizaciones();
              swalWithBootstrapButtons.fire(
                "Cotizacion Eliminada!",
                `Cotizacion  eliminada con exito!`,
                "success"
              );
            });
        }
      });
  }
}
