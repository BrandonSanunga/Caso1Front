import { Vehiculo } from "./vehiculo.model";

export class DetalleFactura {
  id?: string;
  cantidad?: number;
  total?: number;
  vehiculo?: Vehiculo;
}
