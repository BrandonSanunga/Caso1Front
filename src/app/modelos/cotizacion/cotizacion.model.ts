import { CatalogoVehiculo } from "../catalogo_vehiculo/catalogo-vehiculo.model";
import { Clientes } from "../clientes";

export class Cotizacion {
  id?: number;
  vehiculo_catalogo?: CatalogoVehiculo;
  cliente?: Clientes;
  total?: number;
}
