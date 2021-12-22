import { Clientes } from "./clientes";
import { ReclamoGarantia } from "./ReclamoGarantia/reclamo-garantia";

export class InformeReclamo {
  idinformeRecha?:number;
  fechaEmicion?:Date;
  client?:Clientes;
  descripcionInforme?:String;
  reclamogarantia?:ReclamoGarantia;
  tipoInforme?:String;
  respuestaCliente?:String;
}
