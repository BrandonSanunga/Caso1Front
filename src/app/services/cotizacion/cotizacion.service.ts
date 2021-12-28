import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { Cotizacion } from "src/app/modelos/cotizacion/cotizacion.model";

@Injectable({
  providedIn: "root",
})
export class CotizacionService {
  private API_SEVER = "http://localhost:8080/cotizaciones/api/v1";
  constructor(private http: HttpClient) {}

  crearCotizacion(cotizacion: Cotizacion): Observable<Cotizacion> {
    return this.http.post<Cotizacion>(`${this.API_SEVER}/`, cotizacion).pipe(
      map((response: any) => response.cotizacion as Cotizacion),
      catchError((e) => {
        if (e.status == 400) {
          return throwError(e);
        }
        console.log(e.error.mensaje, "ERROR");
        return throwError(e);
      })
    );
  }
  getCotizacions(): Observable<Cotizacion[]> {
    return this.http.get<Cotizacion[]>(`${this.API_SEVER}/`);
  }

  delete(id: number): Observable<Cotizacion> {
    return this.http.delete<Cotizacion>(`${this.API_SEVER}/${id}`).pipe(
      catchError((e) => {
        console.log(e.error.mensaje, "ERROR");
        return throwError(e);
      })
    );
  }

  getCotizacionById(id: number): Observable<Cotizacion> {
    return this.http.get<Cotizacion>(`${this.API_SEVER}/${id}`);
  }

  update(cotizacion: Cotizacion, id: number): Observable<Cotizacion> {
    return this.http
      .put<Cotizacion>(`${this.API_SEVER}/${id}`, cotizacion)
      .pipe(
        map((response: any) => response.cotizacion as Cotizacion),
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
