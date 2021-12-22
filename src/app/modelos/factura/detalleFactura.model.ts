import { Vehiculo } from "./vehiculo.model";

export class DetalleFactura {
  id?: string;
  cantidad?: number;
  total?: number;
  vehiculo?: Vehiculo;

  public calcularImporte(): number {
    return (this.total = this.cantidad! * this.vehiculo?.precio_venta!);
  }
}
