import { Clientes } from "./clientes";
import { ReclamoGarantia } from "./ReclamoGarantia/reclamo-garantia";

export class InformeReclamo {
  idinforme_recha?:number;
  fechaEmicion?:Date;
  client?:Clientes;
  descripcionInforme?:String;
  id_informe?:ReclamoGarantia;
  tipoInforme?:String;
  respuestaCliente?:String;
}
