import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagenCatalogoService {
  private API_SERVER="http://localhost:8080/imagencatalogo/api/v1/"
  constructor(
    private httpClient: HttpClient
  ) { }
  public getAllImagenes(): Observable<any>{
    return this.httpClient.get(this.API_SERVER+"all");

  }
}
