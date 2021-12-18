import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export type LabelValue = {
  label: string;
  value?: string | number | any;
};
export type SolicitarRepuestoResponse = {
  id: number;
  status: 'created' | string;
};

export type EnvioCorreoResponse = {
  status: 'enviado' | 'error';
  email?: string;
};
@Injectable({
  providedIn: 'root',
})
export class TallerService {
  private ordenes: any[] = [];

  private URL_TALLER = 'taller/api/v1/';

  public ESTADOS = {
    EN_REVISION: 'EN REVISION DEL TALLER',
    REVISADO: 'REVISADO POR EL TALLER',
  };
  constructor(private http: HttpClient) {}

  public async getOrdenes(estado = 'EN REVISION DEL TALLER') {
    return this.http
      .get<any[]>(
        `${environment.urlBase}ordecuerpo/api/v1/ordenes-taller/${estado}`
      )
      .toPromise<any[]>();
  }

  public async getOrdenesByIdentificacion(identificacion: string) {
    return this.ordenes.filter((orden) =>
      orden.identificacionCliente
        .toLowerCase()
        .includes(identificacion.toLowerCase())
    );
  }

  public async getOrdenById(id: any) {
    return this.http
      .get<any>(`${environment.urlBase}ordecuerpo/api/v1/orden-by-id/${id}/`)
      .toPromise<any[]>();
  }
  public async cambiarEstado(id: any, estado: string) {
    return this.http
      .put<any>(
        `${environment.urlBase}ordecuerpo/api/v1/cambiar-estado-orden/${id}/`,
        estado
      )
      .toPromise<any>();
  }

  public async getRepuestos(): Promise<LabelValue[]> {
    return this.http
      .get<LabelValue[]>(`${environment.urlBase}${this.URL_TALLER}respuestos`)
      .toPromise<LabelValue[]>();
  }

  public async solicitarRepuesto(
    ordenId: any,
    repuestoId: any
  ): Promise<SolicitarRepuestoResponse> {
    return this.http
      .post<SolicitarRepuestoResponse>(
        `${environment.urlBase}${this.URL_TALLER}add-repuesto/${ordenId}/${repuestoId}`,
        {}
      )
      .toPromise<SolicitarRepuestoResponse>();
  }

  public async detalleRepuestos(ordenId: any): Promise<any[]> {
    return this.http
      .get<any[]>(
        `${environment.urlBase}${this.URL_TALLER}repuesto-solicitados/${ordenId}`
      )
      .toPromise<any[]>();
  }

  public async deleteDetalleItem(id: any): Promise<any[]> {
    return this.http
      .delete<any[]>(
        `${environment.urlBase}${this.URL_TALLER}delete-detalle-repuesto/${id}`
      )
      .toPromise<any[]>();
  }

  public imprimirInformeReparacion(id: any): Promise<any> {
    return fetch(
      `${environment.urlBase}${this.URL_TALLER}informe-reparacion-pdf/${id}`,
      {
        method: 'GET',
      }
    ).then((res) => res.blob());
  }

  public enviarInformeReparacion(id: any): Promise<EnvioCorreoResponse> {
    return this.http
      .get<EnvioCorreoResponse>(
        `${environment.urlBase}${this.URL_TALLER}enviar-correo-informe-reparacion/${id}`
      )
      .toPromise<EnvioCorreoResponse>();
  }

  public editarCostoManoObra(id: any, costo: number): Promise<any> {
    return this.http
      .put<any>(
        `${environment.urlBase}${this.URL_TALLER}editar-costo-mano-obra/${id}`,
        costo
      )
      .toPromise<any>();
  }
}
