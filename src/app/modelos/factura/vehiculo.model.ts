import { CatalogoVehiculo } from "../catalogo_vehiculo/catalogo-vehiculo.model";

export class Vehiculo {
  chasis?: string;
  color?: string;
  ramv?: string;
  estado?: boolean;
  precio_venta?: number;
  vehiculoCatalogo?: CatalogoVehiculo;
}
