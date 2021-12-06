import { OrdenRepCavecera } from "./orden-rep-cavecera";

export class OrdenRepCuerpo {
  idordenCuerpo?:number;
  ordenRepCavecera?:OrdenRepCavecera;
  trabajoSolicitado?:String;
  trabajoRealizar?:String;
  observaciones?:String;
  imagenes?:String;
}
