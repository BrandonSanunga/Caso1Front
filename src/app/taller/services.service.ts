import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TallerService {
  private ordenes: any[] = [];

  constructor(private http: HttpClient) {
    // this.ordenes.push({
    //   id: '135123123123',
    //   identificacionCliente: '010203040506',
    //   duenio: 'MARCELO VIDAL',
    //   automovil: 'TOYOTA',
    //   estado: 'EN REPARACION',
    //   fecha: '12-11-2021',
    //   repuestos: [
    //     {
    //       id: '35454645646123',
    //       nombre: 'BUJIAS',
    //       estado: 'PENDIENTE',
    //     },
    //     {
    //       id: '23412341234123',
    //       nombre: 'BUJIAS',
    //       estado: 'PENDIENTE',
    //     },
    //     {
    //       id: '23412341234',
    //       nombre: 'BUJIAS',
    //       estado: 'PENDIENTE',
    //     },
    //     {
    //       id: '1234546435634',
    //       nombre: 'BUJIAS',
    //       estado: 'PENDIENTE',
    //     },
    //   ],
    // });
    // this.ordenes.push({
    //   id: '65874562311236',
    //   identificacionCliente: '090807060504',
    //   duenio: 'WILLIAM',
    //   automovil: 'TOYOTA',
    //   estado: 'EN REPARACION',
    //   fecha: '11-11-2021',
    //   repuestos: [
    //     {
    //       id: '8974561321235456564',
    //       nombre: 'BUJIAS',
    //       estado: 'PENDIENTE',
    //     },
    //   ],
    // });
  }

  public async getOrdenes(estado = 'EN REVISION DEL TALLER') {
    const res = await this.http.get<any[]>(
      `${environment.urlBase}ordecuerpo/api/v1/ordenes-taller/${estado}`
    );
    return res.toPromise<any[]>();
  }

  public async getOrdenesByIdentificacion(identificacion: string) {
    return this.ordenes.filter((orden) =>
      orden.identificacionCliente
        .toLowerCase()
        .includes(identificacion.toLowerCase())
    );
  }

  public async getOrdenById(id: any) {
    return this.ordenes.find((orden) => orden.id === id);
  }
}
