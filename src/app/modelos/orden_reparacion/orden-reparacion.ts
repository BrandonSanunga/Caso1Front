import { InspeCuerpo } from "../inpeccion/inspe-cuerpo";

export class OrdenReparacion {
  idordenCave?: number;
  fecha_emision?: Date;
  fechaIngreso?: Date;
  inspeCuerpo?: InspeCuerpo;
  costoManoObra?: DoubleRange;
}
