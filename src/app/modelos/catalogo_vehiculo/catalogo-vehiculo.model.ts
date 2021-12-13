import { CaracteristicasVehiculo } from "../caracteristicas_vehiculo/caracteristicas-vehiculo.model";
import { DisenoVehiculo } from "../diseno_vehiculo/diseno-vehiculo.model";

export class CatalogoVehiculo {
  id_vehiculo_catalogo?: number;
  diseno?: DisenoVehiculo;
  year_vehiculo?: number;
  caracteristica?: CaracteristicasVehiculo;
  links_imagen?:String;
}
