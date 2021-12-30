import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { Factura } from "src/app/modelos/factura/factura.model";
import { Vehiculo } from "src/app/modelos/factura/vehiculo.model";

@Injectable({
  providedIn: "root",
})
export class FacturaService {
  private API_SEVER = "https://starmotors1.herokuapp.com/facturas/api/v1";
  constructor(private http: HttpClient) {}

  getVehiculosByMarcaOrModeloAndEstado(
    marcaOrModelo: string
  ): Observable<Vehiculo[]> {
    return this.http.get<Vehiculo[]>(
      `https://starmotors1.herokuapp.com/vehiculo/api/v1/all-filtrar/${marcaOrModelo}`
    );
  }
  getVehiculoByVehiculoCatalogo(id: number): Observable<Vehiculo> {
    return this.http.get<Vehiculo>(
      `https://starmotors1.herokuapp.com/vehiculo/api/v1/vc/${id}`
    );
  }

  crearFactura(factura: Factura): Observable<Factura> {
    return this.http.post<Factura>(`${this.API_SEVER}/`, factura).pipe(
      map((response: any) => response.factura as Factura),
      catchError((e) => {
        if (e.status == 400) {
          return throwError(e);
        }
        console.log(e.error.mensaje, "ERROR");
        return throwError(e);
      })
    );
  }
  getFacturas(): Observable<Factura[]> {
    return this.http.get<Factura[]>(`${this.API_SEVER}/`);
  }

  delete(id: number): Observable<Factura> {
    return this.http.delete<Factura>(`${this.API_SEVER}/${id}`).pipe(
      catchError((e) => {
        console.log(e.error.mensaje, "ERROR");
        return throwError(e);
      })
    );
  }

  getFacturaById(id: number): Observable<Factura> {
    return this.http.get<Factura>(`${this.API_SEVER}/${id}`);
  }

  update(factura: Factura): Observable<Factura> {
    return this.http
      .put<Factura>(`${this.API_SEVER}/${factura.id}`, factura)
      .pipe(
        map((response: any) => response.factura as Factura),
        catchError((e) => {
          if (e.status == 400) {
            return throwError(e);
          }
          console.log(e.error.mensaje, "ERROR");
          return throwError(e);
        })
      );
  }
}
