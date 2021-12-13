import { SolicitudGarantia } from '../SolicitudGarantia/solicitud-garantia';
export class ReclamoGarantia {
    constructor(
        id_reclamo?:number,
        fk_id_solicitud?:SolicitudGarantia,
        fecha_reclamo?:Date,
        estado_reclamo?:boolean
    ){}
  }