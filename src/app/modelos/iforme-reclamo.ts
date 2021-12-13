import { Clientes } from "./clientes";

export class InformeReclamo {
  idinformeRecha?:number;
  fechaEmicion?:Date;
  client?:Clientes;
  // respuestaCliente?:respuestaCliente;
  descripcionInforme?:String;
  tipoInforme?:String;
  respuestaCliente?:String;
}
