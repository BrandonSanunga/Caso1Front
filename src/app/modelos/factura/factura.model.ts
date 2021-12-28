import { Clientes } from "../clientes";
import { DetalleFactura } from "./detalleFactura.model";

export class Factura {
  id?: number;
  fecha_emision?: string;
  descripcion?: string;
  ruc_factura?: string = "1234567890";
  nombre_empresa?: string = "STAR MOTORS";
  direccion?: string = "Av Americas";
  cliente?: Clientes;
  detallesfacturas?: Array<DetalleFactura> = [];
  total?: number;

  public calcularGranTotal(): number {
    this.total = 0;
    this.detallesfacturas?.forEach((det: DetalleFactura) => {
      this.total! += det.calcularImporte();
    });
    return this.total;
  }
}
