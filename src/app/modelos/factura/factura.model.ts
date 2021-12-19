import { Clientes } from "../clientes";
import { DetalleFactura } from "./detalleFactura.model";

export class Factura {
  id?: string;
  fecha_emision?: string;
  descripcion?: string;
  ruc_factura?: string;
  nombre_empresa?: string;
  direccion?: string;
  client?: Clientes;
  detallesfacturas?: Array<DetalleFactura> = [];
}
