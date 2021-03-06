import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImagenCatalogoService {


  private API_SERVER="https://starmotors1.herokuapp.com/imagencatalogo/api/v1/"
  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllImagenes(): Observable<any>{
    return this.httpClient.get(this.API_SERVER+"all");

  }

}
